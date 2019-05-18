import applyThemesOnElement from '../../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts';
import computeStateDomain from '../../home-assistant-polymer/src/common/entity/compute_state_domain.ts';
import getViewEntities from '../../home-assistant-polymer/src/common/entity/get_view_entities.ts';

import '../elements/ha-config-custom-ui.js';
import VERSION from './version.js';
import './hass-attribute-util.js';

window.customUI = window.customUI || {
  SUPPORTED_SLIDER_MODES: [
    'single-line', 'break-slider', 'break-slider-toggle', 'hide-slider', 'no-slider',
  ],

  domHost(elem) {
    if (elem === document) return null;
    const root = elem.getRootNode();
    return (root instanceof DocumentFragment) ? /** @type {ShadowRoot} */ (root).host : root;
  },

  lightOrShadow(elem, selector) {
    return elem.shadowRoot ?
      elem.shadowRoot.querySelector(selector) :
      elem.querySelector(selector);
  },

  getElementHierarchy(root, hierarchy) {
    if (root === null) return null;
    const elem = hierarchy.shift();
    if (elem) {
      return window.customUI.getElementHierarchy(
        window.customUI.lightOrShadow(root, elem), hierarchy);
    }
    return root;
  },

  getContext(elem) {
    if (elem._context === undefined) {
      elem._context = [];
      for (let element = (elem.tagName === 'HA-ENTITIES-CARD' ? window.customUI.domHost(elem) : elem);
        element; element = window.customUI.domHost(element)) {
        switch (element.tagName) {
          case 'HA-ENTITIES-CARD':
            if (element.groupEntity) {
              elem._context.push(element.groupEntity.entity_id);
            } else if (element.groupEntity === false && element.states && element.states.length) {
              elem._context.push(`group.${computeStateDomain(element.states[0])}`);
            }
            break;
          case 'MORE-INFO-GROUP':
          case 'STATE-CARD-CONTENT':
            if (element.stateObj) {
              elem._context.push(element.stateObj.entity_id);
            }
            break;
          case 'HA-CARDS':
            elem._context.push(element.getAttribute('data-view') || 'default_view');
            break;
          // no default
        }
      }
      elem._context.reverse();
    }
    return elem._context;
  },

  findMatch(key, options) {
    if (!options) return null;
    if (options[key]) return key;
    return Object.keys(options).find(option => key.match(`^${option}$`));
  },

  maybeChangeObjectByDevice(stateObj) {
    const name = window.customUI.getName();
    if (!name) return stateObj;
    const match = this.findMatch(name, stateObj.attributes.device);
    if (!match) return stateObj;
    const attributes = Object.assign({}, stateObj.attributes.device[match]);

    if (!Object.keys(attributes).length) return stateObj;
    return window.customUI.applyAttributes(stateObj, attributes);
  },

  maybeChangeObjectByGroup(elem, stateObj) {
    const context = window.customUI.getContext(elem);
    if (!context) return stateObj;

    if (!stateObj.attributes.group) {
      return stateObj;
    }
    const attributes = {};
    context.forEach((c) => {
      const match = this.findMatch(c, stateObj.attributes.group);
      if (stateObj.attributes.group[match]) {
        Object.assign(attributes, stateObj.attributes.group[match]);
      }
    });

    if (!Object.keys(attributes).length) return stateObj;

    return window.customUI.applyAttributes(stateObj, attributes);
  },

  _setKeep(obj, value) {
    if (obj._cui_keep === undefined) {
      obj._cui_keep = value;
    } else {
      obj._cui_keep = obj._cui_keep && value;
    }
  },

  maybeApplyTemplateAttributes(hass, states, stateObj, attributes) {
    if (!attributes.templates) {
      window.customUI._setKeep(stateObj, true);
      return stateObj;
    }
    const newAttributes = {};
    let hasGlobal = false;
    let hasChanges = false;
    Object.keys(attributes.templates).forEach((key) => {
      const template = attributes.templates[key];
      if (template.match(/\b(entities|hass)\b/)) {
        hasGlobal = true;
      }
      const value = window.customUI.computeTemplate(
        template, hass, states, stateObj, attributes,
        (stateObj.untemplated_attributes && stateObj.untemplated_attributes[key]) ||
            attributes[key],
        stateObj.untemplated_state || stateObj.state);
      // In case of null don't set the value.
      if (value === null) return;
      newAttributes[key] = value;
      if (key === 'state') {
        if (value !== stateObj.state) {
          hasChanges = true;
        }
      } else if (key === '_stateDisplay') {
        if (value !== stateObj._stateDisplay) {
          hasChanges = true;
        }
      } else if (value !== attributes[key]) {
        hasChanges = true;
      }
    });
    window.customUI._setKeep(stateObj, !hasGlobal);
    if (!hasChanges) {
      return stateObj;
    }
    if (stateObj.attributes === attributes) {
      // We are operating on real attributes. Replace them.
      const result = window.customUI.applyAttributes(stateObj, newAttributes);
      if (Object.prototype.hasOwnProperty.call(newAttributes, 'state')) {
        if (newAttributes.state !== null) {
          result.state = String(newAttributes.state);
          result.untemplated_state = stateObj.state;
        }
      }
      if (Object.prototype.hasOwnProperty.call(newAttributes, '_stateDisplay')) {
        result._stateDisplay = newAttributes._stateDisplay;
        result.untemplated_stateDisplay = stateObj._stateDisplay;
      }
      window.customUI._setKeep(result, !hasGlobal);
      return result;
    }
    // Operating on context-aware attributes. Return shallow copy of object.
    return Object.assign({}, stateObj);
  },

  maybeApplyTemplates(hass, states, stateObj) {
    const newResult = window.customUI.maybeApplyTemplateAttributes(
      hass, states, stateObj, stateObj.attributes);
    let hasChanges = (newResult !== stateObj);

    function checkAttributes(obj) {
      if (!obj) return;
      Object.values(obj).forEach((attributes) => {
        const result = window.customUI.maybeApplyTemplateAttributes(
          hass, states, newResult, attributes);
        hasChanges |= (result !== newResult);
      });
      checkAttributes(obj.device);
      checkAttributes(obj.group);
    }

    checkAttributes(stateObj.attributes.device);
    checkAttributes(stateObj.attributes.group);
    if (newResult !== stateObj) return newResult;
    if (hasChanges) {
      return Object.assign({}, stateObj);
    }
    return stateObj;
  },

  applyAttributes(stateObj, attributes) {
    return {
      entity_id: stateObj.entity_id,
      state: stateObj.state,
      attributes: Object.assign({}, stateObj.attributes, attributes),
      untemplated_attributes: stateObj.attributes,
      last_changed: stateObj.last_changed,
    };
  },

  maybeChangeObject(elem, stateObj, inDialog, allowHidden) {
    if (inDialog) return stateObj;
    let obj = window.customUI.maybeChangeObjectByDevice(stateObj);
    obj = window.customUI.maybeChangeObjectByGroup(elem, obj);
    obj = window.customUI.maybeApplyTemplateAttributes(
      elem.hass, elem.hass.states, obj, obj.attributes);

    if (obj !== stateObj && obj.attributes.hidden && allowHidden) {
      return null;
    }
    return obj;
  },

  fixGroupTitles() {
    const homeAssistantMain = window.customUI.getElementHierarchy(document, [
      'home-assistant',
      'home-assistant-main']);
    if (homeAssistantMain === null) {
      // DOM not ready. Wait 1 second.
      window.setTimeout(window.customUI.fixGroupTitles, 1000);
      return;
    }

    const haCards = window.customUI.getElementHierarchy(homeAssistantMain, [
      'partial-cards',
      'ha-cards[view-visible]']);
    if (haCards === null) return;
    const main = window.customUI.lightOrShadow(haCards, '.main') || haCards.$.main;
    const cards = main.querySelectorAll('ha-entities-card');
    cards.forEach((card) => {
      if (card.groupEntity) {
        const obj = window.customUI.maybeChangeObject(
          card,
          card.groupEntity,
          false /* inDialog */,
          false /* allowHidden */);
        if (obj !== card.groupEntity && obj.attributes.friendly_name) {
          const nameElem = window.customUI.lightOrShadow(card, '.name');
          nameElem.textContent = obj.attributes.friendly_name;
        }
      }
    });
  },

  controlColumns(columns) {
    const partialCards = window.customUI.getElementHierarchy(document, [
      'home-assistant',
      'home-assistant-main',
      'partial-cards']);
    if (partialCards === null) {
      // DOM not ready. Wait 1 second.
      window.setTimeout(
        window.customUI.controlColumns.bind(null, columns),
        1000);
      return;
    }
    // Function renamed from handleWindowChange to _updateColumns on 3.7.18
    const f = partialCards.handleWindowChange || partialCards._updateColumns;
    partialCards.mqls.forEach((mql) => {
      mql.removeListener(f);
    });
    partialCards.mqls = columns.map((width) => {
      const mql = window.matchMedia(`(min-width: ${width}px)`);
      mql.addListener(f);
      return mql;
    });
    f();
  },

  useCustomizer() {
    const main = window.customUI.lightOrShadow(document, 'home-assistant');
    const customizer = main.hass.states['customizer.customizer'];
    if (!customizer) return;
    if (customizer.attributes.columns) {
      window.customUI.controlColumns(customizer.attributes.columns);
    }
    if (customizer.attributes.hide_attributes) {
      if (window.hassAttributeUtil && window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES) {
        customizer.attributes.hide_attributes.forEach((attr) => {
          if (!Object.prototype.hasOwnProperty.call(
            window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES, attr)) {
            window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[attr] = undefined;
          }
        });
      }
    }
  },

  updateConfigPanel() {
    if (!window.location.pathname.startsWith('/config')) return;
    const haPanelConfig = window.customUI.getElementHierarchy(document, [
      'home-assistant',
      'home-assistant-main',
      'partial-panel-resolver',
      'ha-panel-config']);
    if (!haPanelConfig) {
      // DOM not ready. Wait 100ms.
      window.setTimeout(window.customUI.updateConfigPanel, 100);
      return;
    }
    const haConfigNavigation = window.customUI.getElementHierarchy(haPanelConfig, [
      'ha-config-dashboard',
      'ha-config-navigation']);
    if (haConfigNavigation) {
      // HaConfigNavigation started using localize on 21.01.2018
      if (haConfigNavigation.localize && !haConfigNavigation.cuiPatch) {
        haConfigNavigation.cuiPatch = true;
        haConfigNavigation._originalComputeLoaded = haConfigNavigation._computeLoaded;
        haConfigNavigation._originalComputeCaption = haConfigNavigation._computeCaption;
        haConfigNavigation._originalComputeDescription = haConfigNavigation._computeDescription;
        haConfigNavigation._computeLoaded = (hass, page) =>
          page === 'customui' || haConfigNavigation._originalComputeLoaded(hass, page);
        haConfigNavigation._computeCaption = (page, localize) =>
          (page === 'customui' ? 'Custom UI' : haConfigNavigation._originalComputeCaption(page, localize));
        haConfigNavigation._computeDescription = (page, localize) =>
          (page === 'customui' ? 'SetUI tweaks' : haConfigNavigation._originalComputeDescription(page, localize));
      }
      if (!haConfigNavigation.pages.some(conf => conf === 'customui' || conf.domain === 'customui')) {
        haConfigNavigation.push('pages', haConfigNavigation.localize ? 'customui' : {
          domain: 'customui',
          caption: 'Custom UI',
          description: 'Set UI tweaks.',
          loaded: true,
        });
      }
    }
    const getHaConfigCustomUi = () => {
      const haConfigCustomUi = document.createElement('ha-config-custom-ui');
      haConfigCustomUi.isWide = haPanelConfig.isWide;
      haConfigCustomUi.setAttribute('page-name', 'customui');
      return haConfigCustomUi;
    };

    const ironPages = window.customUI.lightOrShadow(haPanelConfig, 'iron-pages');
    if (ironPages) {
      if (ironPages.lastElementChild.tagName !== 'HA-CONFIG-CUSTOM-UI') {
        const haConfigCustomUi = getHaConfigCustomUi();
        ironPages.appendChild(haConfigCustomUi);
        ironPages.addEventListener('iron-items-changed', () => {
          if (window.location.pathname.startsWith('/config/customui')) {
            ironPages.select('customui');
          }
        });
      }
    } else if (haPanelConfig.shadowRoot) {
      const root = haPanelConfig.shadowRoot || haPanelConfig;
      if (root.lastElementChild.tagName !== 'HA-CONFIG-CUSTOM-UI') {
        const haConfigCustomUi = getHaConfigCustomUi();
        root.appendChild(haConfigCustomUi);
      }
      const visible = window.location.pathname.startsWith('/config/customui');
      root.lastElementChild.style.display = visible ? '' : 'none';
    } else if (haPanelConfig.routerOptions && haPanelConfig.routerOptions.routes) {
      if (!haPanelConfig.routerOptions.routes.customui) {
        haPanelConfig.routerOptions.routes.customui = {
          tag: 'ha-config-custom-ui',
          load: () => Promise.resolve(),
        };
        // CustomUI panel is the entrypoint, so we need to reload the page.
        if (window.location.pathname.startsWith('/config/customui')) {
          haPanelConfig.update(new Map([['route', undefined]]));
        }
      }
    }
  },

  installStatesHook() {
    customElements.whenDefined('home-assistant').then(() => {
      const homeAssistant = customElements.get('home-assistant');
      if (!homeAssistant || !homeAssistant.prototype._updateHass) return;
      const originalUpdate = homeAssistant.prototype._updateHass;
      homeAssistant.prototype._updateHass = function update(obj) {
        // Use named function to preserve 'this'.
        const { hass } = this;
        if (obj.states) {
          Object.keys(obj.states).forEach((key) => {
            const entity = obj.states[key];
            if (entity._cui_keep) return;
            const newEntity = window.customUI.maybeApplyTemplates(hass, obj.states, entity);
            if (hass.states && entity !== hass.states[key]) {
              // New state arrived. Put modified state in.
              obj.states[key] = newEntity;
            } else if (entity !== newEntity) {
              // It's the same state but contents changed due to other state changes.
              obj.states[key] = newEntity;
            }
          });
        }
        originalUpdate.call(this, obj);
        if (obj.themes && hass._themeWaiters) {
          hass._themeWaiters.forEach(waiter => waiter.stateChanged(waiter.state));
          hass._themeWaiters = undefined;
        }
      };
      const main = window.customUI.lightOrShadow(document, 'home-assistant');
      if (main.hass && main.hass.states) {
        main._updateHass({ states: main.hass.states });
      }
    });
  },

  installPartialCards() {
    customElements.whenDefined('partial-cards').then(() => {
      const partialCards = customElements.get('partial-cards');
      if (!partialCards || !partialCards.prototype._defaultViewFilter) return;
      partialCards.prototype._defaultViewFilter = (hass, entityId) => {
        if (hass.states[entityId].attributes.hidden) return false;
        const excludes = {};
        Object.values(hass.states).forEach((entity) => {
          if (entity.attributes && entity.attributes.hide_in_default_view) {
            const excludeEntityId = entity.entity_id;
            if (excludes[excludeEntityId]) return;
            excludes[excludeEntityId] = entity;
            if (entity.attributes.view) {
              const viewEntities = getViewEntities(hass.states, entity);
              Object.keys(viewEntities)
                .filter(
                  id => viewEntities[id].attributes.hide_in_default_view !== false)
                .forEach((id) => {
                  excludes[id] = viewEntities[id];
                });
            }
          }
        });
        return !excludes[entityId];
      };
    });
  },

  // Allows changing the 'Execute' / 'Activate' text on script/scene cards.
  installActionName(elementName) {
    customElements.whenDefined(elementName).then(() => {
      const klass = customElements.get(elementName);
      if (!klass || !klass.prototype) return;
      Object.defineProperty(klass.prototype, 'localize', {
        get() {
          function customLocalize(v) {
            if (this.stateObj && this.stateObj.attributes &&
                this.stateObj.attributes.action_name) {
              return this.stateObj.attributes.action_name;
            }
            return this.__data.localize(v);
          }
          return customLocalize;
        },
        set() {},
      });
    });
  },

  // Allows theming "regular" top badges.
  installHaStateLabelBadge() {
    customElements.whenDefined('ha-state-label-badge').then(() => {
      const haStateLabelBadge = customElements.get('ha-state-label-badge');
      if (!haStateLabelBadge || !haStateLabelBadge.prototype.stateChanged) return;
      // Use named function to preserve 'this'.
      haStateLabelBadge.prototype.stateChanged = function update(stateObj) {
        // TODO: Call window.customUI.maybeChangeObject
        if (stateObj.attributes.theme) {
          if (this.hass.themes === null) {
            this.hass._themeWaiters = this.hass._themeWaiters || [];
            this.hass._themeWaiters.push(this);
          } else {
            applyThemesOnElement(
              this,
              this.hass.themes || { default_theme: 'default', themes: {} },
              stateObj.attributes.theme || 'default');
          }
        }
        this.updateStyles();
        if (this.startInterval) {
          // Added on 19.1.2018
          this.startInterval(stateObj);
        }
      };
    });
  },

  installStateBadge() {
    customElements.whenDefined('state-badge').then(() => {
      const stateBadge = customElements.get('state-badge');
      if (!stateBadge) return;
      if (stateBadge.prototype._updateIconAppearance) {
        const originalUpdateIconAppearance = stateBadge.prototype._updateIconAppearance;
        // Use named function to preserve 'this'.
        stateBadge.prototype._updateIconAppearance = function customUpdateIconAppearance(stateObj) {
          if (stateObj.attributes.icon_color && !stateObj.attributes.entity_picture) {
            this.style.backgroundImage = '';
            Object.assign(this.$.icon.style, {
              color: stateObj.attributes.icon_color,
              filter: '',
            });
          } else {
            originalUpdateIconAppearance.call(this, stateObj);
          }
        };
      } else if (stateBadge.prototype.updated) {
        const originalUpdated = stateBadge.prototype.updated;
        // Use named function to preserve 'this'.
        stateBadge.prototype.updated = function customUpdated(changedProps) {
          if (!changedProps.has('stateObj')) return;
          const { stateObj } = this;
          if (stateObj.attributes.icon_color && !stateObj.attributes.entity_picture) {
            this.style.backgroundImage = '';
            Object.assign(this._icon.style, {
              color: stateObj.attributes.icon_color,
              filter: '',
            });
          } else {
            originalUpdated.call(this, changedProps);
          }
        };
      }
    });
  },

  installHaAttributes() {
    customElements.whenDefined('ha-attributes').then(() => {
      const haAttributes = customElements.get('ha-attributes');
      if (!haAttributes || !haAttributes.prototype.computeFiltersArray ||
         !window.hassAttributeUtil) return;
      // Use named function to preserve 'this'.
      haAttributes.prototype.computeFiltersArray =
        function customComputeFiltersArray(extraFilters) {
          return Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).concat(
            extraFilters ? extraFilters.split(',') : []);
        };
    });
  },

  installHaFormCustomize() {
    if (!window.location.pathname.startsWith('/config')) return;
    customElements.whenDefined('ha-form-customize').then(() => {
      const haFormCustomize = customElements.get('ha-form-customize');
      if (!haFormCustomize) {
        // DOM not ready. Wait 100ms.
        window.setTimeout(window.customUI.installHaFormCustomize, 100);
        return;
      }
      if (window.customUI.haFormCustomizeInitDone) return;
      window.customUI.haFormCustomizeInitDone = true;

      if (!window.hassAttributeUtil) return;
      if (haFormCustomize.prototype._computeSingleAttribute) {
        // Use named function to preserve 'this'.
        haFormCustomize.prototype._computeSingleAttribute =
          function customComputeSingleAttribute(key, value, secondary) {
            const config = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[key]
                || { type: window.hassAttributeUtil.UNKNOWN_TYPE };
            return this._initOpenObject(key, config.type === 'json' ? JSON.stringify(value) : value, secondary, config);
          };
      }
      if (haFormCustomize.prototype.getNewAttributesOptions) {
        // Use named function to preserve 'this'.
        haFormCustomize.prototype.getNewAttributesOptions =
          function customgetNewAttributesOptions(
            localAttributes, globalAttributes, existingAttributes, newAttributes) {
            const knownKeys =
                Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES)
                  .filter((key) => {
                    const conf = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[key];
                    return conf && (!conf.domains || !this.entity ||
                                      conf.domains.includes(computeStateDomain(this.entity)));
                  })
                  .filter(this.filterFromAttributes(localAttributes))
                  .filter(this.filterFromAttributes(globalAttributes))
                  .filter(this.filterFromAttributes(existingAttributes))
                  .filter(this.filterFromAttributes(newAttributes));
            return knownKeys.sort().concat('Other');
          };
      }
    });
  },

  installClassHooks() {
    if (window.customUI.classInitDone) return;
    window.customUI.classInitDone = true;
    window.customUI.installPartialCards();
    window.customUI.installStatesHook();
    window.customUI.installHaStateLabelBadge();
    window.customUI.installStateBadge();
    window.customUI.installHaAttributes();
    window.customUI.installActionName('state-card-scene');
    window.customUI.installActionName('state-card-script');
  },

  init() {
    if (window.customUI.initDone) return;
    window.customUI.installClassHooks();
    const main = window.customUI.lightOrShadow(document, 'home-assistant');
    if (!main.hass || !main.hass.states) {
      // Connection wasn't made yet. Try in 1 second.
      window.setTimeout(window.customUI.init, 1000);
      return;
    }
    window.customUI.initDone = true;

    window.customUI.useCustomizer();

    window.customUI.runHooks();
    window.addEventListener('location-changed', window.setTimeout.bind(null, window.customUI.runHooks, 100));
    /* eslint-disable no-console */
    console.log(`Loaded CustomUI ${VERSION}`);
    /* eslint-enable no-console */
    if (!window.CUSTOM_UI_LIST) {
      window.CUSTOM_UI_LIST = [];
    }
    window.CUSTOM_UI_LIST.push({
      name: 'CustomUI',
      version: VERSION,
      url: 'https://github.com/andrey-git/home-assistant-custom-ui',
    });
  },

  runHooks() {
    window.customUI.fixGroupTitles();
    window.customUI.updateConfigPanel();
    window.customUI.installHaFormCustomize();
  },

  getName() {
    return window.localStorage.getItem('ha-device-name') || '';
  },

  setName(name) {
    window.localStorage.setItem('ha-device-name', name || '');
  },

  computeTemplate(template, hass, entities, entity, attributes, attribute, state) {
    const functionBody = (template.indexOf('return') >= 0) ? template : `return \`${template}\`;`;
    try {
      /* eslint-disable no-new-func */
      const func = new Function(
        'hass', 'entities', 'entity', 'attributes', 'attribute', 'state', functionBody);
      /* eslint-enable no-new-func */
      return func(hass, entities, entity, attributes, attribute, state);
    } catch (e) {
      /* eslint-disable no-console */
      if ((e instanceof SyntaxError) || e instanceof ReferenceError) {
        console.warn(`${e.name}: ${e.message} in template ${functionBody}`);
        return null;
      }
      /* eslint-enable no-console */
      throw e;
    }
  },
};
window.customUI.init();
