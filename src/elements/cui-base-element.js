import '../utils/hooks.js';

export default (superClass) => {
  /**
   * @extends HTMLElement
   */
  class CuiBaseElement extends superClass {
    static get properties() {
      return {
        hass: Object,
        inDialog: {
          type: Boolean,
          value: false,
        },
        stateObj: Object,
        controlElement: String,
        extra: {
          type: Array,
          computed: 'computeExtra(hass, stateObj)',
        },
      };
    }

    computeExtra(hass, stateObj) {
      let extras = stateObj.attributes.extra_data_template;
      if (extras) {
        if (!Array.isArray(extras)) {
          extras = [extras];
        }
        return extras.map(extra => window.customUI.computeTemplate(
          extra,
          hass,
          hass.states,
          stateObj,
          stateObj.attributes,
          /* attribute= */ undefined,
          stateObj.state,
        )).filter(result => result !== null);
      }
      return [];
    }

    showLastChanged(stateObj, inDialog, extra) {
      if (inDialog) return true;
      if (extra.length) return false;
      return !!stateObj.attributes.show_last_changed;
    }

    hasExtra(extra) {
      return extra.length > 0;
    }
  }
  return CuiBaseElement;
};
