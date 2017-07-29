window.customUI = window.customUI || {
  VERSION: '20170729',

  lightOrShadow: function (elem, selector) {
    return elem.shadowRoot ?
      elem.shadowRoot.querySelector(selector) :
      elem.querySelector(selector);
  },

  getElementHierarchy: function (root, hierarchy) {
    if (root === null) return null;
    const elem = hierarchy.shift();
    if (elem) {
      return window.customUI.getElementHierarchy(
        window.customUI.lightOrShadow(root, elem), hierarchy);
    }
    return root;
  },

  getContext: function (elem) {
    if (elem._context === undefined) {
      elem._context = [];
      for (let element = (elem.tagName === 'HA-ENTITIES-CARD' ? elem.domHost : elem); element; element = element.domHost) {
        switch (element.tagName) {
          case 'HA-ENTITIES-CARD':
            if (element.groupEntity) {
              elem._context.push(element.groupEntity.entity_id);
            } else if (element.groupEntity === false && element.states && element.states.length) {
              elem._context.push('group.' + window.hassUtil.computeDomain(element.states[0]));
            }
            break;
          case 'MORE-INFO-GROUP':
            if (element.stateObj) {
              elem._context.push(element.stateObj.entity_id);
            }
            break;
          case 'PARTIAL-CARDS':
            elem._context.push(element.currentView ? element.currentView : 'default_view');
            break;
          // no default
        }
      }
      elem._context.reverse();
    }
    return elem._context;
  },

  maybeChangeObjectByDevice: function (stateObj) {
    const name = window.customUI.getName();
    if (!name) return stateObj;

    if (!stateObj.attributes.device || !stateObj.attributes.device[name]) {
      return stateObj;
    }
    const attributes = Object.assign({}, stateObj.attributes.device[name]);

    if (!Object.keys(attributes).length) return stateObj;
    return window.customUI.applyAttributes(stateObj, attributes);
  },

  maybeChangeObjectByGroup: function (elem, stateObj) {
    const context = window.customUI.getContext(elem);
    if (!context) return stateObj;

    if (!stateObj.attributes.group) {
      return stateObj;
    }
    const attributes = {};
    context.forEach((c) => {
      if (stateObj.attributes.group[c]) {
        Object.assign(attributes, stateObj.attributes.group[c]);
      }
    });

    if (!Object.keys(attributes).length) return stateObj;

    return window.customUI.applyAttributes(stateObj, attributes);
  },

  applyAttributes: function (stateObj, attributes) {
    return {
      entity_id: stateObj.entity_id,
      state: stateObj.state,
      attributes: Object.assign({}, stateObj.attributes, attributes),
      last_changed: stateObj.last_changed,
    };
  },

  maybeChangeObject: function (elem, stateObj, inDialog, allowHidden) {
    if (inDialog) return stateObj;
    let obj = window.customUI.maybeChangeObjectByDevice(stateObj);
    obj = window.customUI.maybeChangeObjectByGroup(elem, obj);

    if (obj !== stateObj && obj.attributes.hidden && allowHidden) {
      return null;
    }
    return obj;
  },

  fixGroupTitles: function () {
    const haCards = window.customUI.getElementHierarchy(document, [
      'home-assistant',
      'home-assistant-main',
      'partial-cards',
      'ha-cards']);
    if (haCards === null) return;
    const main = window.customUI.lightOrShadow(haCards, '.main');
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

  showVersion: function () {
    if (window.location.pathname !== '/dev-info') return;
    const devInfo = window.customUI.getElementHierarchy(document, [
      'home-assistant',
      'home-assistant-main',
      'partial-panel-resolver',
      'ha-panel-dev-info']);
    if (devInfo === null) return;
    const about = window.customUI.lightOrShadow(devInfo, '.about');
    const secondP = about.querySelectorAll('p')[1];
    const version = document.createElement('p');
    version.textContent = 'Custom UI ' + window.customUI.VERSION;
    about.insertBefore(version, secondP);
  },

  useCustomizer: function () {
    const main = window.customUI.getElementHierarchy(document, [
      'home-assistant',
      'home-assistant-main']);
    const customizer = main.hass.states['customizer.customizer'];
    if (!customizer) return;
    window.hassUtil.LOGIC_STATE_ATTRIBUTES = window.hassUtil.LOGIC_STATE_ATTRIBUTES || [];
    if (customizer.attributes.hide_attributes) {
      Array.prototype.push.apply(
        window.hassUtil.LOGIC_STATE_ATTRIBUTES, customizer.attributes.hide_attributes);
    }
    if (customizer.attributes.hide_customui_attributes) {
      window.hassUtil.LOGIC_STATE_ATTRIBUTES.push(
        'custom_ui_state_card',
        'group',
        'state_card_mode',
        'badges_list',
        'show_last_changed',
        'hide_control',
        'extra_data_template',
        'extra_badge',
        'stretch_slider',
        'slider_theme',
        'theme',
        'confirm_controls',
        'confirm_controls_show_lock'
      );
    }
  },

  init: function () {
    window.customUI.runHooks();
    window.customUI.useCustomizer();
    if (!window.customUI.initDone) {
      window.addEventListener('location-changed', window.setTimeout.bind(null, window.customUI.runHooks, 100));
      window.customUI.initDone = true;
      /* eslint-disable no-console */
      console.log('Loaded CustomUI ' + window.customUI.VERSION);
      /* eslint-enable no-console */
    }
  },

  runHooks: function () {
    window.customUI.fixGroupTitles();
    window.customUI.showVersion();
  },

  getName: function () {
    return window.localStorage.getItem('ha-device-name') || '';
  },

  setName: function (name) {
    window.localStorage.setItem('ha-device-name', name || '');
  },
};

window.customUI.init();
