import applyThemesOnElement from '../../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts';
import computeStateDomain from '../../home-assistant-polymer/src/common/entity/compute_state_domain.ts';
import dynamicContentUpdater from '../../home-assistant-polymer/src/common/dom/dynamic_content_updater.ts';
import stateCardType from '../../home-assistant-polymer/src/common/entity/state_card_type.ts';

import '../utils/hooks.js';
import './state-card-with-slider.js';
import './state-card-without-slider.js';

function loadCustomUI() {
  const SHOW_LAST_CHANGED_BLACKLISTED_CARDS = ['configurator'];
  const DOMAIN_TO_SLIDER_SUPPORT = {
    light: 1, // SUPPORT_BRIGHTNESS
    cover: 4, // SUPPORT_SET_POSITION
    climate: 1, // SUPPORT_TARGET_TEMPERATURE
  };
  const TYPE_TO_CONTROL = {
    toggle: 'ha-entity-toggle',
    display: '',
    cover: 'ha-cover-controls',
  };

  /**
   * @extends HTMLElement
   */
  class StateCardCustomUi extends Polymer.Element {
    static get properties() {
      return {
        hass: Object,

        inDialog: {
          type: Boolean,
          value: false,
        },

        stateObj: Object,
      };
    }

    static get observers() {
      return [
        'inputChanged(hass, inDialog, stateObj)',
      ];
    }

    connectedCallback() {
      super.connectedCallback();
      const container = this.parentNode.parentNode;
      if (container.tagName === 'DIV' &&
          (container.classList.contains('state') || container.classList.contains('child-card'))) {
        this._container = container;

        // Since this doesn't actually change the background - no need to clear it.
        container.style.setProperty(
          'background-color', 'var(--paper-card-background-color, inherit)');

        // Polyfill 'updateStyles'.
        if (!container.updateStyles) {
          container.updateStyles = (styles) => {
            Object.keys(styles).forEach((key) => {
              container.style.setProperty(key, styles[key]);
            });
          };
        }
      }
      this._isAttached = true;
      this.inputChanged(this.hass, this.inDialog, this.stateObj);
    }

    disconnectedCallback() {
      this._isAttached = false;
      if (this._container) {
        this._container.updateStyles({ display: '', margin: '', padding: '' });
        applyThemesOnElement(
          this._container, this.hass.themes || { default_theme: 'default', themes: {} }, 'default');
        this._container = null;
      }
      super.disconnectedCallback();
    }

    badgeMode(hass, stateObj, domain) {
      const states = [];
      if (domain === 'group') {
        stateObj.attributes.entity_id.forEach((id) => {
          const state = hass.states[id];
          if (!state) {
            /* eslint-disable no-console */
            console.warn(`Unknown ID ${id} in group ${stateObj.entity_id}`);
            /* eslint-enable no-console */
            return;
          }
          if (!stateObj.attributes.badges_list ||
              stateObj.attributes.badges_list.includes(state.entity_id)) {
            states.push(window.customUI.maybeChangeObject(
              this, state, false /* inDialog */, false /* allowHidden */));
          }
        });
      } else {
        states.push(stateObj);
        if (this._container) {
          this._container.style.display = 'inline-block';
          const params = { display: 'inline-block' };
          if (this._container.classList.contains('state')) {
            params.margin = 'var(--ha-badges-card-margin, 0)';
          }
          this.updateStyles(params);
        }
      }
      dynamicContentUpdater(
        this,
        'HA-BADGES-CARD',
        { hass, states });
      if (this._container) {
        this._container.updateStyles({
          width: 'var(--ha-badges-card-width, initial)',
          'text-align': 'var(--ha-badges-card-text-align, initial)',
        });
      }
      this.lastChild.style.fontSize = '85%';

      // Since this variable only affects badges mode - no need to clean it up.
      this.style.setProperty('--ha-state-label-badge-margin-bottom', '0');
    }

    cleanBadgeStyle() {
      if (this._container) {
        this._container.updateStyles({
          display: '',
          width: '',
          'text-align': '',
        });
      }
      this.updateStyles({ display: '', margin: '' });
    }

    applyThemes(hass, modifiedObj) {
      let themeTarget = this;
      let themeName = 'default';
      if (this._container) {
        themeTarget = this._container;
      }
      if (modifiedObj.attributes.theme) {
        themeName = modifiedObj.attributes.theme;
      }
      applyThemesOnElement(
        themeTarget, hass.themes || { default_theme: 'default', themes: {} }, themeName);
    }

    maybeHideEntity(modifiedObj) {
      if (!modifiedObj) {
        if (this.lastChild) {
          this.removeChild(this.lastChild);
        }
        if (this._container) {
          this._container.updateStyles({ margin: '0', padding: '0' });
        }
        return true;
      }
      if (this._container) {
        this._container.updateStyles({ margin: '', padding: '' });
      }
      return false;
    }

    sliderEligible_(domain, obj, inDialog) {
      if (inDialog) return false;
      return DOMAIN_TO_SLIDER_SUPPORT[domain] &&
        (DOMAIN_TO_SLIDER_SUPPORT[domain] & obj.attributes.supported_features) &&
        obj.attributes.state_card_mode && obj.attributes.state_card_mode !== 'no-slider';
    }

    inputChanged(hass, inDialog, stateObj) {
      if (!stateObj || !hass || !this._isAttached) return;
      const domain = computeStateDomain(stateObj);
      const modifiedObj = window.customUI.maybeChangeObject(
        this, stateObj, inDialog, true /* allowHidden */);

      if (this.maybeHideEntity(modifiedObj)) return;

      this.applyThemes(hass, modifiedObj);

      if (!inDialog && modifiedObj.attributes.state_card_mode === 'badges') {
        this.badgeMode(hass, modifiedObj, domain);
      } else {
        this.regularMode_(hass, inDialog, modifiedObj, domain);
      }
    }

    regularMode_(hass, inDialog, stateObj, domain) {
      this.cleanBadgeStyle();

      const params = {
        hass,
        stateObj,
        inDialog,
      };
      const originalStateCardType = stateCardType(hass, stateObj);
      let customStateCardType;
      const secondaryStateCardType = stateObj.attributes.state_card_custom_ui_secondary;

      if (domain === 'light' && this.sliderEligible_(domain, stateObj, inDialog)) {
        Object.assign(params, {
          controlElement: 'ha-entity-toggle',
          serviceMin: 'turn_off',
          serviceMax: 'turn_on',
          valueName: 'brightness',
          domain,
        });
        customStateCardType = 'state-card-with-slider';
      } else if (domain === 'cover' && this.sliderEligible_(domain, stateObj, inDialog)) {
        Object.assign(params, {
          controlElement: 'ha-cover-controls',
          max: 100,
          serviceMin: 'close_cover',
          serviceMax: 'set_cover_position',
          setValueName: 'position',
          valueName: 'current_position',
          nameOn: 'open',
          domain,
        });
        customStateCardType = 'state-card-with-slider';
      } else if (domain === 'climate' && this.sliderEligible_(domain, stateObj, inDialog)) {
        Object.assign(params, {
          controlElement: 'ha-climate-state',
          min: stateObj.attributes.min_temp || -100,
          max: stateObj.attributes.max_temp || 200,
          serviceMin: 'set_temperature',
          serviceMax: 'set_temperature',
          valueName: 'temperature',
          nameOn: '',
          domain,
        });
        customStateCardType = 'state-card-with-slider';
      } else if (TYPE_TO_CONTROL[originalStateCardType] !== undefined) {
        params.controlElement = TYPE_TO_CONTROL[originalStateCardType];
        customStateCardType = 'state-card-without-slider';
      } else if (stateObj.attributes.show_last_changed &&
                 !SHOW_LAST_CHANGED_BLACKLISTED_CARDS.includes(originalStateCardType)) {
        params.inDialog = true;
      }
      if (stateObj.state === 'unavailable') {
        params.controlElement = '';
      }
      if (stateObj.attributes.control_element !== undefined) {
        params.controlElement = stateObj.attributes.control_element;
      }

      dynamicContentUpdater(
        this,
        (secondaryStateCardType || customStateCardType || `STATE-CARD-${originalStateCardType}`).toUpperCase(),
        params);
    }
  }
  customElements.define('state-card-custom-ui', StateCardCustomUi);
}
if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(() => loadCustomUI());
}
