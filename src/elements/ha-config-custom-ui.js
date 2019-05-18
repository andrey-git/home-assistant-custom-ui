import { LitElement, html } from 'lit-element';
import '../utils/hooks.js';

/**
 * @extends HTMLElement
 */
class HaConfigCustomUi extends LitElement {
  render() {
    return html`
    <style include="ha-style"></style>
    <app-header-layout has-scrolling-region>
      <app-header slot="header" fixed>
        <app-toolbar>
          <paper-icon-button
            icon='hass:arrow-left'
            @click="${this._backHandler}"
          ></paper-icon-button>
          <div main-title>Custom UI settings</div>
        </app-toolbar>
      </app-header>

      <ha-config-section .is-wide="${this.isWide}">
        <paper-card heading='Device name'>
          <div class='card-content'>
            Set device name so that you can reference it in per-device settings
            <paper-input
              label='Name'
              .value="@{this.name}"
            ></paper-input>
          </div>
        </paper-card>
      </ha-config-section>
    </app-header-layout>
    `;
  }

  static get properties() {
    return {
      isWide: {
        type: Boolean,
        attribute: 'is-wide',
      },

      name: {
        type: String,
        reflect: true,
        observer: 'nameChanged',
      },
    };
  }

  attributeChangedCallback(name, oldval, newval) {
    if (name === 'name') {
      this.nameChanged(newval);
    }
    super.attributeChangedCallback(name, oldval, newval);
  }

  connectedCallback() {
    super.connectedCallback();
    this.name = window.customUI.getName();
  }

  nameChanged(name) {
    window.customUI.setName(name);
  }

  _backHandler() {
    window.history.back();
    const event = new CustomEvent('location-changed');
    this.dispatchEvent(event);
  }
}
customElements.define('ha-config-custom-ui', HaConfigCustomUi);
