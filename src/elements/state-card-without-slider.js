import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import CuiBaseElement from './cui-base-element.js';
import './dynamic-with-extra.js';

function loadCustomUI() {
  /**
   * @extends HTMLElement
   */
  class StateCardWithoutSlider extends CuiBaseElement(Polymer.Element) {
    static get template() {
      return html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        #container {
          position: relative;
        }
      </style>

      <div id='container' class='horizontal layout justified'>
        <state-info
            hass='[[hass]]'
            class='state-info'
            state-obj='[[stateObj]]'
            in-dialog='[[showLastChanged(stateObj, inDialog, extra)]]'
            secondary-line$='[[hasExtra(extra)]]'>
          <template is='dom-repeat' items='[[extra]]'>
            <div>[[item]]</div>
          </template>
        </state-info>
        <dynamic-with-extra
            hass='[[hass]]'
            state-obj='[[stateObj]]'
            control-element='[[controlElement]]'
            in-dialog='[[inDialog]]'>
        </dynamic-with-extra>
      </div>
      `;
    }
  }
  customElements.define('state-card-without-slider', StateCardWithoutSlider);
}
if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(() => loadCustomUI());
}
