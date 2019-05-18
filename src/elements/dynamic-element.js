import dynamicContentUpdater from '../../home-assistant-polymer/src/common/dom/dynamic_content_updater.ts';

function loadCustomUI() {
  /**
   * @extends HTMLElement
   */
  class DynamicElement extends Polymer.Element {
    static get properties() {
      return {
        hass: Object,
        stateObj: Object,
        elementName: String,

        inDialog: {
          type: Boolean,
          value: false,
        },
      };
    }

    static get observers() {
      return [
        'observerFunc(hass, stateObj, elementName, inDialog)',
      ];
    }

    observerFunc(hass, stateObj, elementName, inDialog) {
      dynamicContentUpdater(
        this,
        elementName ? elementName.toUpperCase() : 'DIV',
        { hass, stateObj, inDialog });
    }
  }
  customElements.define('dynamic-element', DynamicElement);
}
if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(() => loadCustomUI());
}
