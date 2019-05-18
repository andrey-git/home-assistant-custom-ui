import { html } from '@polymer/polymer/lib/utils/html-tag.js';

function loadCustomUI() {
  /**
   * @extends HTMLElement
   */
  class HaThemedSlider extends Polymer.Element {
    static get template() {
      return html`
      <style>
        :host {
          margin: var(--ha-themed-slider-margin, initial);
        }
        .disable-off-when-min {
          --paper-slider-pin-start-color:  var(--paper-slider-pin-color);
        }

        .disable-off-when-min.is-on {
          --paper-slider-knob-start-color: var(--paper-slider-knob-color);
          --paper-slider-knob-start-border-color: var(--paper-slider-knob-color);
        }
        paper-slider {
          margin: 4px 0;
          max-width: 100%;
          min-width: 100px;
          width: var(--ha-paper-slider-width, 200px);
        }
      </style>

      <paper-slider
           id='slider'
           min='[[_themedMin]]'
           max='[[_computeAttribute(theme, "max", max)]]'
           pin='[[_computeAttribute(theme, "pin", pin)]]'
           class$='[[computeClass(theme, isOn, _themedMin)]]' value='[[value]]'
           on-change='valueChanged'>
      </paper-slider>
      `;
    }

    ready() {
      super.ready();
      this.disableOffWhenMin = !this._computeAttribute(this.theme, 'off_when_min', !this.disableOffWhenMin);
      this.computeEnabledThemedReportWhenNotChanged(this.theme, this.disableReportWhenNotChanged);
    }

    connectedCallback() {
      super.connectedCallback();
      this.$.slider._keyBindings = this.$.slider._keyBindings || {};
    }

    static get properties() {
      return {
        min: {
          type: Number,
          value: 0,
        },
        max: {
          type: Number,
          value: 100,
        },
        pin: {
          type: Boolean,
          value: false,
        },
        isOn: {
          type: Boolean,
          value: false,
        },
        disableOffWhenMin: {
          type: Boolean,
          value: false,
          notify: true,
        },
        disableReportWhenNotChanged: {
          type: Boolean,
          value: false,
        },

        theme: Object,
        value: {
          type: Number,
          notify: true,
        },
        _themedMin: {
          type: Number,
          computed: '_computeAttribute(theme, "min", min)',
        },
      };
    }

    static get observers() {
      return [
        'computeEnabledThemedReportWhenNotChanged(theme, disableReportWhenNotChanged)',
      ];
    }

    computeEnabledThemedReportWhenNotChanged(theme, disableReportWhenNotChanged) {
      this._enabledThemedReportWhenNotChanged = this._computeAttribute(
        theme, 'report_when_not_changed', !disableReportWhenNotChanged);
    }

    _computeAttribute(theme, attr, def) {
      if (theme) {
        if (attr in theme) {
          return theme[attr];
        }
      }
      return def;
    }

    computeClass(theme, isOn, themedMin) {
      let result = '';
      if (isOn) {
        result += 'is-on ';
      }
      if (this._computeAttribute(theme, 'off_when_min', !this.disableOffWhenMin) || themedMin === 0) {
        // If offWhenMin is enabled don't customize.
        return '';
      }
      return `${result}disable-off-when-min`;
    }

    valueChanged(ev) {
      if (!this._enabledThemedReportWhenNotChanged && this.value === ev.target.value) {
        ev.stopPropagation();
        return;
      }
      this.value = ev.target.value;
    }
  }
  customElements.define('ha-themed-slider', HaThemedSlider);
}
if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(() => loadCustomUI());
}
