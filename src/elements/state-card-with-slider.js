import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import CuiBaseElement from './cui-base-element.js';
import './dynamic-with-extra.js';
import './ha-themed-slider.js';

function loadCustomUI() {
  /**
   * @extends HTMLElement
   */
  class StateCardWithSlider extends CuiBaseElement(Polymer.Element) {
    static get template() {
      return html`
      <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>
      <style>
        #container {
          position: relative;
        }
        .second-line, .state-and-toggle, .state-info {
          max-width: 100%;
        }
        .nowrap .state-and-toggle {
          overflow: hidden;
          flex-grow: 0;
        }
        .nowrap .second-line {
          overflow: hidden;
        }

        .second-line {
          padding-top: 20px;
          padding-bottom: 16px;
          margin-top: -20px;
          margin-bottom: -16px;
        }
        .stretch .second-line, .stretch ha-themed-slider {
          width: 100%;
          --ha-paper-slider-width: 100%;
        }
        .nowrap .state-info {
          min-width: initial;
        }
        ha-themed-slider, .top-wrapper {
          min-width: 100px;
          max-width: 100%;
        }
        .top-wrapper.stretch {
          display: block;
        }

        .hidden {
          display: none;
        }
      </style>

      <div id='container' class$='horizontal layout flex top-wrapper [[_computeWrapClass(mode, stretchSlider, lineTooLong, inDialog)]]'>
        <div class='horizontal layout justified flex-auto state-and-toggle'>
          <state-info
              class='state-info flex-auto'
              hass='[[hass]]'
              state-obj='[[stateObj]]'
              in-dialog='[[showLastChanged(stateObj, inDialog, extra)]]'
              secondary-line$='[[hasExtra(extra)]]'
          >
            <template is='dom-repeat' items='[[extra]]'>
              <div>[[item]]</div>
            </template>
          </state-info>
          <template is='dom-if' if='[[breakSlider]]' class='hidden'>
            <dynamic-with-extra hass='[[hass]]' state-obj='[[stateObj]]' control-element='[[controlElement]]' in-dialog='[[inDialog]]'></dynamic-with-extra>
          </template>
        </div>
        <template is='dom-if' if='[[showSlider]]' restamp>
          <div class='horizontal layout flex-auto end-justified second-line'>
            <ha-themed-slider
              id='slider'
              max=[[max]]
              min=[[min]]
              theme='[[stateObj.attributes.slider_theme]]'
              is-on='[[isOn(stateObj, nameOn)]]'
              value='{{sliderValue}}'
              disable-off-when-min='{{disableOffWhenMin}}'
              on-change='sliderChanged'
              on-click='stopPropagation'>
            </ha-themed-slider>
            <template is='dom-if' if='[[!breakSlider]]'>
              <dynamic-with-extra hass='[[hass]]' state-obj='[[stateObj]]' control-element='[[controlElement]]' in-dialog='[[inDialog]]'></dynamic-with-extra>
            </template>
          </div>
        </template>
      </div>
      `;
    }

    static get properties() {
      return {
        domain: String,
        serviceMin: String,
        serviceMax: String,
        valueName: String,
        setValueName: String,
        nameOn: { type: String, value: 'on' },
        min: { type: Number, value: 0 },
        max: { type: Number, value: 255 },

        sliderValue: {
          type: Number,
          value: 0,
        },
        disableOffWhenMin: Boolean,
        mode: String,
        stretchSlider: {
          type: Boolean,
          value: false,
        },
        breakSlider: {
          type: Boolean,
          value: false,
        },
        hideSlider: {
          type: Boolean,
          value: false,
        },
        lineTooLong: {
          type: Boolean,
          value: false,
        },
        minLineBreak: Number,
        maxLineBreak: Number,
        showSlider: {
          type: Number,
          computed: '_showSlider(inDialog, stateObj, hideSlider)',
        },
      };
    }

    ready() {
      super.ready();
      this._onIronResize = this._onIronResize.bind(this);
    }

    connectedCallback() {
      super.connectedCallback();
      this._isConnected = true;
      window.addEventListener('resize', this._onIronResize);
      this._waitForLayout();
    }

    disconnectedCallback() {
      window.removeEventListener('resize', this._onIronResize);
      this._isConnected = false;
      super.disconnectedCallback();
    }

    static get observers() {
      return [
        'stateObjChanged(stateObj, nameOn, valueName)',
      ];
    }

    _waitForLayout() {
      if (!this._isConnected) return;
      this._setMode();
      if (this._frameId) return;
      this.readyToCompute = false;
      this._frameId = window.requestAnimationFrame(() => {
        this._frameId = null;
        this.readyToCompute = true;
        this._onIronResize();
      });
    }

    _setMode() {
      const obj = {
        hideSlider: this.mode === 'hide-slider' && this.lineTooLong,
        breakSlider:
             (this.mode === 'break-slider' || this.mode === 'hide-slider') &&
             this.lineTooLong,
      };
      if (!this.showSlider) {
        obj.breakSlider = true;
      }
      this.setProperties(obj);
    }

    _onIronResize() {
      if (!this.readyToCompute) return;
      if (this.mode === 'no-slider') {
        this.setProperties({
          hideSlider: true,
          breakSlider: true,
        });
        return;
      }
      const prevBreakSlider = this.breakSlider;
      const prevHideSlider = this.hideSlider;
      this.setProperties({
        lineTooLong: false,
        hideSlider: false,
        breakSlider: false,
      });
      const { container } = this.$;
      const containerWidth = container.clientWidth;
      if (containerWidth === 0) return;
      if (containerWidth <= this.minLineBreak) {
        this.lineTooLong = true;
      } else if (containerWidth >= this.maxLineBreak) {
        this.lineTooLong = false;
      } else {
        if (prevHideSlider && this.mode === 'hide-slider') {
          // We need to unhide the slider in order to recalculate height.
          this._waitForLayout();
          return;
        }
        const containerHeight = container.clientHeight;
        const stateHeight = this.root.querySelector('.state-info').clientHeight;
        this.lineTooLong = containerHeight > stateHeight * 1.5;
        if (this.lineTooLong) {
          this.minLineBreak = containerWidth;
        } else if (!prevBreakSlider) {
          this.maxLineBreak = containerWidth;
        }
      }
      this._setMode();
    }

    _computeWrapClass(mode, stretchSlider, lineTooLong, inDialog) {
      if (inDialog) {
        return '';
      }
      if (mode === 'single-line') {
        return 'nowrap';
      }
      if (stretchSlider && lineTooLong) {
        return 'stretch wrap';
      }
      return 'wrap';
    }

    _showSlider(inDialog, stateObj, hideSlider) {
      if (inDialog || hideSlider) {
        return false;
      }
      return true;
    }

    sliderChanged(ev) {
      const value = parseInt(ev.target.value, 10);
      const param = { entity_id: this.stateObj.entity_id };
      if (Number.isNaN(value)) return;
      let target = this.root.querySelector('#slider');
      if (ev.target !== target) {
        // No Shadow DOM - we have access to original target.
        ({ target } = ev);
      } else if (ev.path) {
        [target] = ev.path;
      } else if (ev.composedPath) {
        [target] = ev.composedPath();
      }
      if (value === 0 || (value <= target.min && !this.disableOffWhenMin)) {
        this.hass.callService(this.domain, this.serviceMin, param);
      } else {
        param[this.setValueName || this.valueName] = value;
        this.hass.callService(this.domain, this.serviceMax, param);
      }
    }

    stateObjChanged(stateObj, nameOn, valueName) {
      const obj = {
        sliderValue: this.isOn(stateObj, nameOn) ? stateObj.attributes[valueName] : 0,
      };
      if (stateObj) {
        Object.assign(obj, {
          minLineBreak: 0,
          maxLineBreak: 999,
          hideSlider: false,
          breakSlider: false,
          lineTooLong: false,
          mode: stateObj.attributes.state_card_mode,
          stretchSlider: !!stateObj.attributes.stretch_slider,
        });
      }
      this.setProperties(obj);
      if (stateObj) {
        this._waitForLayout();
      }
    }

    isOn(stateObj, nameOn) {
      return stateObj && (!nameOn || stateObj.state === nameOn);
    }

    stopPropagation(ev) {
      ev.stopPropagation();
    }
  }
  customElements.define('state-card-with-slider', StateCardWithSlider);
}
if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(() => loadCustomUI());
}
