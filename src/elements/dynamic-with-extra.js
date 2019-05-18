import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import applyThemesOnElement from '../../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts';

import './dynamic-element.js';
import '../utils/hooks.js';

customElements.whenDefined('state-card-display').then(() => {
  /**
   * @extends HTMLElement
   */
  class DynamicWithExtra extends customElements.get('state-card-display') {
    static get template() {
      return html`
      <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>
      <style>
        :host {
          display: inline-block;
        }
        .control-wrapper {
          margin: -4px -16px -4px 0;
          padding: 4px 16px;
        }
        ha-state-label-badge {
          margin-left: 8px;
        }
        dynamic-element {
          display: block;
          text-align: right;
        }
        #overlay {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          text-align: right;
          z-index: 1;
        }
        #lock {
          margin-top: 8px;
          opacity: 0.3;
          margin-right: 7px;
        }
        #lock.ha-cover-controls {
          margin-right: 52px;
          background-color: white;
        }
        .extra {
          margin-bottom: -16px;
          --ha-label-badge-size: 36px;
          --ha-label-badge-font-size: 1.2em;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);
          margin-left: 16px;
          text-align: right;
          line-height: 40px;
        }
      </style>
      <div class$='[[extraClass(extraObjVisible)]] horizontal layout'>
        <template is='dom-if' if='[[extraObjVisible]]'>
          <template is='dom-repeat'
                    items='[[extraObj]]'
                    on-dom-change='extraDomChanged'>
            <ha-state-label-badge hass='[[hass]]' state='[[item]]'></ha-state-label-badge>
          </template>
        </template>
        <template is='dom-if' if='[[_showControl(inDialog, stateObj)]]'>
          <template is='dom-if' if='[[controlElement]]'>
            <div class="control-wrapper">
              <dynamic-element
                  class='flex'
                  state-obj="[[stateObj]]"
                  hass='[[hass]]'
                  element-name='[[controlElement]]'>
              </dynamic-element>
              <template is='dom-if' if='[[isConfirmControls(stateObj)]]'>
                <div id="overlay" on-click='clickHandler'>
                  <template is='dom-if' if='[[stateObj.attributes.confirm_controls_show_lock]]'>
                    <iron-icon id="lock" class$="[[controlElement]]" icon="mdi:lock-outline"></iron-icon>
                  </template>
                </div>
              </template>
            </div>
          </template>
          <template is='dom-if' if='[[!controlElement]]'>
            <div class='state'>[[computeStateDisplay(stateObj)]]</div>
          </template>
        </template>
      </div>
      `;
    }

    static get properties() {
      return {
        hass: Object,
        inDialog: {
          type: Boolean,
          value: false,
        },
        stateObj: Object,
        controlElement: String,
        extraObj: {
          type: Array,
          computed: 'computeExtra(hass, stateObj, _attached)',
        },
        _attached: Boolean,
        extraObjVisible: {
          type: Boolean,
          computed: 'computeExtraVisible(extraObj, inDialog)',
        },
      };
    }

    connectedCallback() {
      super.connectedCallback();
      this._attached = true;
    }

    disconnectedCallback() {
      this._isAttached = false;
      super.disconnectedCallback();
    }

    computeExtra(hass, stateObj, attached) {
      if (!stateObj.attributes.extra_badge || !attached) return [];
      let extraBadges = stateObj.attributes.extra_badge;
      if (!Array.isArray(extraBadges)) {
        extraBadges = [extraBadges];
      }
      return extraBadges.map((extraBadge) => {
        let result = null;
        if (extraBadge.entity_id && hass.states[extraBadge.entity_id]) {
          result = Object.assign({}, window.customUI.maybeChangeObject(
            this, hass.states[extraBadge.entity_id], this.inDialog,
            /* allowHidden= */false));
        } else if (extraBadge.attribute &&
                   stateObj.attributes[extraBadge.attribute] !== undefined) {
          result = {
            state: String(stateObj.attributes[extraBadge.attribute]),
            entity_id: 'none.none',
            attributes: { unit_of_measurement: extraBadge.unit },
          };
        }
        if (!result) return null;
        let blacklist = extraBadge.blacklist_states;
        if (blacklist !== undefined) {
          if (!Array.isArray(blacklist)) {
            blacklist = [blacklist];
          }
          if (blacklist.some(v => RegExp(v).test(result.state.toString()))) {
            return null;
          }
        }
        result._entityDisplay = '';
        result.attributes = Object.assign({}, { friendly_name: '' });
        return result;
      }).filter(extraBadge => extraBadge != null);
    }

    computeExtraVisible(extraObj, inDialog) {
      if (inDialog || !extraObj) return false;
      return extraObj.length !== 0;
    }

    extraClass(extraObjVisible) {
      return extraObjVisible ? 'extra' : '';
    }

    _showControl(inDialog, stateObj) {
      if (inDialog) return true;
      return !stateObj.attributes.hide_control;
    }

    computeStateDisplay(stateObj) {
      // haLocalize removed in 0.61
      return super.computeStateDisplay(this.haLocalize || this.localize, stateObj);
    }

    isConfirmControls(stateObj) {
      return stateObj.attributes.confirm_controls ||
          stateObj.attributes.confirm_controls_show_lock;
    }

    clickHandler(e) {
      this.root.querySelector('#overlay').style.pointerEvents = 'none';
      const lock = this.root.querySelector('#lock');
      if (lock) {
        lock.icon = 'mdi:lock-open-outline';
        lock.style.opacity = '0.1';
      }
      window.setTimeout(() => {
        this.root.querySelector('#overlay').style.pointerEvents = '';
        if (lock) {
          lock.icon = 'mdi:lock-outline';
          lock.style.opacity = '';
        }
      }, 5000);
      e.stopPropagation();
    }

    applyThemes(hass, element, stateObj) {
      const themeName = stateObj.attributes.theme || 'default';
      applyThemesOnElement(
        element, hass.themes || { default_theme: 'default', themes: {} }, themeName);
    }

    extraDomChanged() {
      this.root.querySelectorAll('ha-state-label-badge')
        .forEach((elem) => {
          this.applyThemes(this.hass, elem, elem.state);
        });
    }
  }
  customElements.define('dynamic-with-extra', DynamicWithExtra);
});
