/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entrypoints/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../home-assistant-polymer/src/common/const.ts":
/*!*****************************************************!*\
  !*** ../home-assistant-polymer/src/common/const.ts ***!
  \*****************************************************/
/*! exports provided: DEFAULT_DOMAIN_ICON, DEFAULT_PANEL, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PANEL", function() { return DEFAULT_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_MORE_INFO", function() { return DOMAINS_WITH_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_HIDE_MORE_INFO", function() { return DOMAINS_HIDE_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_MORE_INFO_NO_HISTORY", function() { return DOMAINS_MORE_INFO_NO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_OFF", function() { return STATES_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_TOGGLE", function() { return DOMAINS_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_C", function() { return UNIT_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_F", function() { return UNIT_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_ENTITY_ID", function() { return DEFAULT_VIEW_ENTITY_ID; });
/** Constants to be used in the frontend. */
// Constants should be alphabetically sorted by name.
// Arrays with values should be alphabetically sorted if order doesn't matter.
// Each constant should have a description what it is supposed to be used for.

/** Icon to use when no icon specified for domain. */
const DEFAULT_DOMAIN_ICON = "hass:bookmark";
/** Panel to show when no panel is picked. */

const DEFAULT_PANEL = "lovelace";
/** Domains that have a state card. */

const DOMAINS_WITH_CARD = ["climate", "cover", "configurator", "input_select", "input_number", "input_text", "lock", "media_player", "scene", "script", "timer", "vacuum", "water_heater", "weblink"];
/** Domains with separate more info dialog. */

const DOMAINS_WITH_MORE_INFO = ["alarm_control_panel", "automation", "camera", "climate", "configurator", "cover", "fan", "group", "history_graph", "input_datetime", "light", "lock", "media_player", "script", "sun", "updater", "vacuum", "water_heater", "weather"];
/** Domains that show no more info dialog. */

const DOMAINS_HIDE_MORE_INFO = ["input_number", "input_select", "input_text", "scene", "weblink"];
/** Domains that should have the history hidden in the more info dialog. */

const DOMAINS_MORE_INFO_NO_HISTORY = ["camera", "configurator", "history_graph", "scene"];
/** States that we consider "off". */

const STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Lovelace. */

const DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch", "group", "automation"]);
/** Temperature units. */

const UNIT_C = "°C";
const UNIT_F = "°F";
/** Entity ID of the default view. */

const DEFAULT_VIEW_ENTITY_ID = "group.default_view";

/***/ }),

/***/ "../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts":
/*!***************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyThemesOnElement; });
/**
 * Apply a theme to an element by setting the CSS variables on it.
 *
 * element: Element to apply theme on.
 * themes: HASS Theme information
 * localTheme: selected theme.
 * updateMeta: boolean if we should update the theme-color meta element.
 */
function applyThemesOnElement(element, themes, localTheme, updateMeta = false) {
  if (!element._themes) {
    element._themes = {};
  }

  let themeName = themes.default_theme;

  if (localTheme === "default" || localTheme && themes.themes[localTheme]) {
    themeName = localTheme;
  }

  const styles = { ...element._themes
  };

  if (themeName !== "default") {
    const theme = themes.themes[themeName];
    Object.keys(theme).forEach(key => {
      const prefixedKey = "--" + key;
      element._themes[prefixedKey] = "";
      styles[prefixedKey] = theme[key];
    });
  }

  if (element.updateStyles) {
    element.updateStyles(styles);
  } else if (window.ShadyCSS) {
    // implement updateStyles() method of Polemer elements
    window.ShadyCSS.styleSubtree(
    /** @type {!HTMLElement} */
    element, styles);
  }

  if (!updateMeta) {
    return;
  }

  const meta = document.querySelector("meta[name=theme-color]");

  if (meta) {
    if (!meta.hasAttribute("default-content")) {
      meta.setAttribute("default-content", meta.getAttribute("content"));
    }

    const themeColor = styles["--primary-color"] || meta.getAttribute("default-content");
    meta.setAttribute("content", themeColor);
  }
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/dom/dynamic_content_updater.ts":
/*!***************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/dom/dynamic_content_updater.ts ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dynamicContentUpdater; });
/**
 * Update root's child element to be newElementTag replacing another existing child if any.
 * Copy attributes into the child element.
 */
function dynamicContentUpdater(root, newElementTag, attributes) {
  const rootEl = root;
  let customEl;

  if (rootEl.lastChild && rootEl.lastChild.tagName === newElementTag) {
    customEl = rootEl.lastChild;
  } else {
    if (rootEl.lastChild) {
      rootEl.removeChild(rootEl.lastChild);
    } // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
    // become a defined Custom Element. Polymer does that in some later pass.


    customEl = document.createElement(newElementTag.toLowerCase());
  }

  if (customEl.setProperties) {
    customEl.setProperties(attributes);
  } else {
    // If custom element definition wasn't loaded yet - setProperties would be
    // missing, but no harm in setting attributes one-by-one then.
    Object.keys(attributes).forEach(key => {
      customEl[key] = attributes[key];
    });
  }

  if (customEl.parentNode === null) {
    rootEl.appendChild(customEl);
  }
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/can_toggle_domain.ts":
/*!************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/can_toggle_domain.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canToggleDomain; });
function canToggleDomain(hass, domain) {
  const services = hass.services[domain];

  if (!services) {
    return false;
  }

  if (domain === "lock") {
    return "lock" in services;
  }

  if (domain === "cover") {
    return "open_cover" in services;
  }

  return "turn_on" in services;
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/can_toggle_state.ts":
/*!***********************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/can_toggle_state.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canToggleState; });
/* harmony import */ var _can_toggle_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can_toggle_domain */ "../home-assistant-polymer/src/common/entity/can_toggle_domain.ts");
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_state_domain */ "../home-assistant-polymer/src/common/entity/compute_state_domain.ts");
/* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supports-feature */ "../home-assistant-polymer/src/common/entity/supports-feature.ts");



function canToggleState(hass, stateObj) {
  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);

  if (domain === "group") {
    return stateObj.state === "on" || stateObj.state === "off";
  }

  if (domain === "climate") {
    return Object(_supports_feature__WEBPACK_IMPORTED_MODULE_2__["supportsFeature"])(stateObj, 4096);
  }

  return Object(_can_toggle_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(hass, domain);
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/compute_domain.ts":
/*!*********************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/compute_domain.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeDomain; });
function computeDomain(entityId) {
  return entityId.substr(0, entityId.indexOf("."));
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/compute_state_domain.ts":
/*!***************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/compute_state_domain.ts ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "../home-assistant-polymer/src/common/entity/compute_domain.ts");

function computeStateDomain(stateObj) {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.entity_id);
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/get_group_entities.ts":
/*!*************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/get_group_entities.ts ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getGroupEntities; });
function getGroupEntities(entities, group) {
  const result = {};
  group.attributes.entity_id.forEach(entityId => {
    const entity = entities[entityId];

    if (entity) {
      result[entity.entity_id] = entity;
    }
  });
  return result;
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/get_view_entities.ts":
/*!************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/get_view_entities.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewEntities; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "../home-assistant-polymer/src/common/entity/compute_domain.ts");
/* harmony import */ var _get_group_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_group_entities */ "../home-assistant-polymer/src/common/entity/get_group_entities.ts");


// Return an object containing all entities that the view will show
// including embedded groups.
function getViewEntities(entities, view) {
  const viewEntities = {};
  view.attributes.entity_id.forEach(entityId => {
    const entity = entities[entityId];

    if (entity && !entity.attributes.hidden) {
      viewEntities[entity.entity_id] = entity;

      if (Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entity.entity_id) === "group") {
        const groupEntities = Object(_get_group_entities__WEBPACK_IMPORTED_MODULE_1__["default"])(entities, entity);
        Object.keys(groupEntities).forEach(grEntityId => {
          const grEntity = groupEntities[grEntityId];

          if (!grEntity.attributes.hidden) {
            viewEntities[grEntityId] = grEntity;
          }
        });
      }
    }
  });
  return viewEntities;
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/state_card_type.ts":
/*!**********************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/state_card_type.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stateCardType; });
/* harmony import */ var _can_toggle_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can_toggle_state */ "../home-assistant-polymer/src/common/entity/can_toggle_state.ts");
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_state_domain */ "../home-assistant-polymer/src/common/entity/compute_state_domain.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "../home-assistant-polymer/src/common/const.ts");



function stateCardType(hass, stateObj) {
  if (stateObj.state === "unavailable") {
    return "display";
  }

  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);

  if (_const__WEBPACK_IMPORTED_MODULE_2__["DOMAINS_WITH_CARD"].includes(domain)) {
    return domain;
  }

  if (Object(_can_toggle_state__WEBPACK_IMPORTED_MODULE_0__["default"])(hass, stateObj) && stateObj.attributes.control !== "hidden") {
    return "toggle";
  }

  return "display";
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/supports-feature.ts":
/*!***********************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/supports-feature.ts ***!
  \***********************************************************************/
/*! exports provided: supportsFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFeature", function() { return supportsFeature; });
const supportsFeature = (stateObj, feature) => {
  // tslint:disable-next-line:no-bitwise
  return (stateObj.attributes.supported_features & feature) !== 0;
};

/***/ }),

/***/ "../home-assistant-polymer/src/util/hass-attributes-util.js":
/*!******************************************************************!*\
  !*** ../home-assistant-polymer/src/util/hass-attributes-util.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hassAttributeUtil = {};
hassAttributeUtil.DOMAIN_DEVICE_CLASS = {
  binary_sensor: ["battery", "cold", "connectivity", "door", "garage_door", "gas", "heat", "light", "lock", "moisture", "motion", "moving", "occupancy", "opening", "plug", "power", "presence", "problem", "safety", "smoke", "sound", "vibration", "window"],
  cover: ["awning", "blind", "curtain", "damper", "door", "garage", "shade", "shutter", "window"],
  sensor: ["battery", "humidity", "illuminance", "temperature", "pressure", "power", "signal_strength"],
  switch: ["switch", "outlet"]
};
hassAttributeUtil.UNKNOWN_TYPE = "json";
hassAttributeUtil.ADD_TYPE = "key-value";
hassAttributeUtil.TYPE_TO_TAG = {
  string: "ha-customize-string",
  json: "ha-customize-string",
  icon: "ha-customize-icon",
  boolean: "ha-customize-boolean",
  array: "ha-customize-array",
  "key-value": "ha-customize-key-value"
}; // Attributes here serve dual purpose:
// 1) Any key of this object won't be shown in more-info window.
// 2) Any key which has value other than undefined will appear in customization
//    config according to its value.

hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = hassAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
  entity_picture: undefined,
  friendly_name: {
    type: "string",
    description: "Name"
  },
  icon: {
    type: "icon"
  },
  emulated_hue: {
    type: "boolean",
    domains: ["emulated_hue"]
  },
  emulated_hue_name: {
    type: "string",
    domains: ["emulated_hue"]
  },
  haaska_hidden: undefined,
  haaska_name: undefined,
  homebridge_hidden: {
    type: "boolean"
  },
  homebridge_name: {
    type: "string"
  },
  supported_features: undefined,
  attribution: undefined,
  custom_ui_more_info: {
    type: "string"
  },
  custom_ui_state_card: {
    type: "string"
  },
  device_class: {
    type: "array",
    options: hassAttributeUtil.DOMAIN_DEVICE_CLASS,
    description: "Device class",
    domains: ["binary_sensor", "cover", "sensor", "switch"]
  },
  hidden: {
    type: "boolean",
    description: "Hide from UI"
  },
  assumed_state: {
    type: "boolean",
    domains: ["switch", "light", "cover", "climate", "fan", "group", "water_heater"]
  },
  initial_state: {
    type: "string",
    domains: ["automation"]
  },
  unit_of_measurement: {
    type: "string"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (hassAttributeUtil);

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/boot.js":
/*!*********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/boot.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty = function (prop) {
  return prop;
};

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/html-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/html-tag.js ***!
  \*************************************************************/
/*! exports provided: html, htmlLiteral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlLiteral", function() { return htmlLiteral; });
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js");
/* harmony import */ var _boot_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boot_js__WEBPACK_IMPORTED_MODULE_0__);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Class representing a static string value which can be used to filter
 * strings by asseting that they have been created via this class. The
 * `value` property returns the string passed to the constructor.
 */

class LiteralString {
  constructor(string) {
    /** @type {string} */
    this.value = string.toString();
  }
  /**
   * @return {string} LiteralString string value
   */


  toString() {
    return this.value;
  }

}
/**
 * @param {*} value Object to stringify into HTML
 * @return {string} HTML stringified form of `obj`
 */


function literalValue(value) {
  if (value instanceof LiteralString) {
    return (
      /** @type {!LiteralString} */
      value.value
    );
  } else {
    throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${value}`);
  }
}
/**
 * @param {*} value Object to stringify into HTML
 * @return {string} HTML stringified form of `obj`
 */


function htmlValue(value) {
  if (value instanceof HTMLTemplateElement) {
    return (
      /** @type {!HTMLTemplateElement } */
      value.innerHTML
    );
  } else if (value instanceof LiteralString) {
    return literalValue(value);
  } else {
    throw new Error(`non-template value passed to Polymer's html function: ${value}`);
  }
}
/**
 * A template literal tag that creates an HTML <template> element from the
 * contents of the string.
 *
 * This allows you to write a Polymer Template in JavaScript.
 *
 * Templates can be composed by interpolating `HTMLTemplateElement`s in
 * expressions in the JavaScript template literal. The nested template's
 * `innerHTML` is included in the containing template.  The only other
 * values allowed in expressions are those returned from `htmlLiteral`
 * which ensures only literal values from JS source ever reach the HTML, to
 * guard against XSS risks.
 *
 * All other values are disallowed in expressions to help prevent XSS
 * attacks; however, `htmlLiteral` can be used to compose static
 * string values into templates. This is useful to compose strings into
 * places that do not accept html, like the css text of a `style`
 * element.
 *
 * Example:
 *
 *     static get template() {
 *       return html`
 *         <style>:host{ content:"..." }</style>
 *         <div class="shadowed">${this.partialTemplate}</div>
 *         ${super.template}
 *       `;
 *     }
 *     static get partialTemplate() { return html`<span>Partial!</span>`; }
 *
 * @param {!ITemplateArray} strings Constant parts of tagged template literal
 * @param {...*} values Variable parts of tagged template literal
 * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
 */


const html = function html(strings, ...values) {
  const template =
  /** @type {!HTMLTemplateElement} */
  document.createElement('template');
  template.innerHTML = values.reduce((acc, v, idx) => acc + htmlValue(v) + strings[idx + 1], strings[0]);
  return template;
};
/**
 * An html literal tag that can be used with `html` to compose.
 * a literal string.
 *
 * Example:
 *
 *     static get template() {
 *       return html`
 *         <style>
 *           :host { display: block; }
 *           ${this.styleTemplate()}
 *         </style>
 *         <div class="shadowed">${staticValue}</div>
 *         ${super.template}
 *       `;
 *     }
 *     static get styleTemplate() {
 *        return htmlLiteral`.shadowed { background: gray; }`;
 *     }
 *
 * @param {!ITemplateArray} strings Constant parts of tagged template literal
 * @param {...*} values Variable parts of tagged template literal
 * @return {!LiteralString} Constructed literal string
 */

const htmlLiteral = function (strings, ...values) {
  return new LiteralString(values.reduce((acc, v, idx) => acc + literalValue(v) + strings[idx + 1], strings[0]));
};

/***/ }),

/***/ "./node_modules/lit-element/lib/css-tag.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lib/css-tag.js ***!
  \*************************************************/
/*! exports provided: supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return supportsAdoptingStyleSheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return CSSResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return unsafeCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
class CSSResult {
  constructor(cssText, safeToken) {
    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  get styleSheet() {
    if (this._styleSheet === undefined) {
      // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
      // is constructable.
      if (supportsAdoptingStyleSheets) {
        this._styleSheet = new CSSStyleSheet();

        this._styleSheet.replaceSync(this.cssText);
      } else {
        this._styleSheet = null;
      }
    }

    return this._styleSheet;
  }

  toString() {
    return this.cssText;
  }

}
/**
 * Wrap a value for interpolation in a css tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */

const unsafeCSS = value => {
  return new CSSResult(String(value), constructionToken);
};

const textFromCSSResult = value => {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
  }
};
/**
 * Template tag which which can be used with LitElement's `style` property to
 * set element styles. For security reasons, only literal string values may be
 * used. To incorporate non-literal values `unsafeCSS` may be used inside a
 * template string part.
 */


const css = (strings, ...values) => {
  const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, constructionToken);
};

/***/ }),

/***/ "./node_modules/lit-element/lib/decorators.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-element/lib/decorators.js ***!
  \****************************************************/
/*! exports provided: customElement, property, query, queryAll, eventOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return customElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return eventOptions; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const legacyCustomElement = (tagName, clazz) => {
  window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // tslint:disable-next-line:no-any

  return clazz;
};

const standardCustomElement = (tagName, descriptor) => {
  const {
    kind,
    elements
  } = descriptor;
  return {
    kind,
    elements,

    // This callback is called once the class is otherwise fully defined
    finisher(clazz) {
      window.customElements.define(tagName, clazz);
    }

  };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * @param tagName the name of the custom element to define
 */


const customElement = tagName => classOrDescriptor => typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);

const standardProperty = (options, element) => {
  // When decorating an accessor, pass it through and add property metadata.
  // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
  // stomp over the user's accessor.
  if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
    return Object.assign({}, element, {
      finisher(clazz) {
        clazz.createProperty(element.key, options);
      }

    });
  } else {
    // createProperty() takes care of defining the property, but we still
    // must return some kind of descriptor, so return a descriptor for an
    // unused prototype field. The finisher calls createProperty().
    return {
      kind: 'field',
      key: Symbol(),
      placement: 'own',
      descriptor: {},

      // When @babel/plugin-proposal-decorators implements initializers,
      // do this instead of the initializer below. See:
      // https://github.com/babel/babel/issues/9260 extras: [
      //   {
      //     kind: 'initializer',
      //     placement: 'own',
      //     initializer: descriptor.initializer,
      //   }
      // ],
      // tslint:disable-next-line:no-any decorator
      initializer() {
        if (typeof element.initializer === 'function') {
          this[element.key] = element.initializer.call(this);
        }
      },

      finisher(clazz) {
        clazz.createProperty(element.key, options);
      }

    };
  }
};

const legacyProperty = (options, proto, name) => {
  proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A `PropertyDeclaration` may optionally be
 * supplied to configure property features.
 *
 * @ExportDecoratedItems
 */


function property(options) {
  // tslint:disable-next-line:no-any decorator
  return (protoOrDescriptor, name) => name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */

function query(selector) {
  return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) => {
    const descriptor = {
      get() {
        return this.renderRoot.querySelector(selector);
      },

      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */

function queryAll(selector) {
  return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) => {
    const descriptor = {
      get() {
        return this.renderRoot.querySelectorAll(selector);
      },

      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}

const legacyQuery = (descriptor, proto, name) => {
  Object.defineProperty(proto, name, descriptor);
};

const standardQuery = (descriptor, element) => ({
  kind: 'method',
  placement: 'prototype',
  key: element.key,
  descriptor
});

const standardEventOptions = (options, element) => {
  return Object.assign({}, element, {
    finisher(clazz) {
      Object.assign(clazz.prototype[element.key], options);
    }

  });
};

const legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
(options, proto, name) => {
  Object.assign(proto[name], options);
};
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifis event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 *
 *     class MyElement {
 *
 *       clicked = false;
 *
 *       render() {
 *         return html`<div @click=${this._onClick}`><button></button></div>`;
 *       }
 *
 *       @eventOptions({capture: true})
 *       _onClick(e) {
 *         this.clicked = true;
 *       }
 *     }
 */


const eventOptions = options => // Return value typed as any to prevent TypeScript from complaining that
// standard decorator function signature does not match TypeScript decorator
// signature
// TODO(kschaaf): unclear why it was only failing on this decorator and not
// the others
(protoOrDescriptor, name) => name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);

/***/ }),

/***/ "./node_modules/lit-element/lib/updating-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/lit-element/lib/updating-element.js ***!
  \**********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return defaultConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return UpdatingElement; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
window.JSCompiler_renameProperty = (prop, _obj) => prop;

const defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        return value == null ? value : JSON.stringify(value);
    }

    return value;
  },

  fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;

      case Number:
        return value === null ? null : Number(value);

      case Object:
      case Array:
        return JSON.parse(value);
    }

    return value;
  }

};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

const notEqual = (value, old) => {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
const microtaskPromise = Promise.resolve(true);
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
const STATE_HAS_CONNECTED = 1 << 5;
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */

class UpdatingElement extends HTMLElement {
  constructor() {
    super();
    this._updateState = 0;
    this._instanceProperties = undefined;
    this._updatePromise = microtaskPromise;
    this._hasConnectedResolver = undefined;
    /**
     * Map with keys for any properties that have changed since the last
     * update cycle with previous values.
     */

    this._changedProperties = new Map();
    /**
     * Map with keys of properties that should be reflected when updated.
     */

    this._reflectingProperties = undefined;
    this.initialize();
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  static get observedAttributes() {
    // note: piggy backing on this to ensure we're finalized.
    this.finalize();
    const attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays

    this._classProperties.forEach((v, p) => {
      const attr = this._attributeNameForProperty(p, v);

      if (attr !== undefined) {
        this._attributeToPropertyMap.set(attr, p);

        attributes.push(attr);
      }
    });

    return attributes;
  }
  /**
   * Ensures the private `_classProperties` property metadata is created.
   * In addition to `finalize` this is also called in `createProperty` to
   * ensure the `@property` decorator can add property metadata.
   */

  /** @nocollapse */


  static _ensureClassProperties() {
    // ensure private storage for property declarations.
    if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
      this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

      const superProperties = Object.getPrototypeOf(this)._classProperties;

      if (superProperties !== undefined) {
        superProperties.forEach((v, k) => this._classProperties.set(k, v));
      }
    }
  }
  /**
   * Creates a property accessor on the element prototype if one does not exist.
   * The property setter calls the property's `hasChanged` property option
   * or uses a strict identity check to determine whether or not to request
   * an update.
   * @nocollapse
   */


  static createProperty(name, options = defaultPropertyDeclaration) {
    // Note, since this can be called by the `@property` decorator which
    // is called before `finalize`, we ensure storage exists for property
    // metadata.
    this._ensureClassProperties();

    this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
    // it would be lost otherwise and that would never be the user's intention;
    // Instead, we expect users to call `requestUpdate` themselves from
    // user-defined accessors. Note that if the super has an accessor we will
    // still overwrite it


    if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
      return;
    }

    const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
    Object.defineProperty(this.prototype, name, {
      // tslint:disable-next-line:no-any no symbol in index
      get() {
        return this[key];
      },

      set(value) {
        // tslint:disable-next-line:no-any no symbol in index
        const oldValue = this[name]; // tslint:disable-next-line:no-any no symbol in index

        this[key] = value;

        this._requestUpdate(name, oldValue);
      },

      configurable: true,
      enumerable: true
    });
  }
  /**
   * Creates property accessors for registered properties and ensures
   * any superclasses are also finalized.
   * @nocollapse
   */


  static finalize() {
    if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) && this.finalized) {
      return;
    } // finalize any superclasses


    const superCtor = Object.getPrototypeOf(this);

    if (typeof superCtor.finalize === 'function') {
      superCtor.finalize();
    }

    this.finalized = true;

    this._ensureClassProperties(); // initialize Map populated in observedAttributes


    this._attributeToPropertyMap = new Map(); // make any properties
    // Note, only process "own" properties since this element will inherit
    // any properties defined on the superClass, and finalization ensures
    // the entire prototype chain is finalized.

    if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
      const props = this.properties; // support symbols in properties (IE11 does not support this)

      const propKeys = [...Object.getOwnPropertyNames(props), ...(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])]; // This for/of is ok because propKeys is an array

      for (const p of propKeys) {
        // note, use of `any` is due to TypeSript lack of support for symbol in
        // index types
        // tslint:disable-next-line:no-any no symbol in index
        this.createProperty(p, props[p]);
      }
    }
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */


  static _attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
  }
  /**
   * Returns true if a property should request an update.
   * Called when a property value is set and uses the `hasChanged`
   * option for the property if present or a strict identity check.
   * @nocollapse
   */


  static _valueHasChanged(value, old, hasChanged = notEqual) {
    return hasChanged(value, old);
  }
  /**
   * Returns the property value for the given attribute value.
   * Called via the `attributeChangedCallback` and uses the property's
   * `converter` or `converter.fromAttribute` property option.
   * @nocollapse
   */


  static _propertyValueFromAttribute(value, options) {
    const type = options.type;
    const converter = options.converter || defaultConverter;
    const fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
    return fromAttribute ? fromAttribute(value, type) : value;
  }
  /**
   * Returns the attribute value for the given property value. If this
   * returns undefined, the property will *not* be reflected to an attribute.
   * If this returns null, the attribute will be removed, otherwise the
   * attribute will be set to the value.
   * This uses the property's `reflect` and `type.toAttribute` property options.
   * @nocollapse
   */


  static _propertyValueToAttribute(value, options) {
    if (options.reflect === undefined) {
      return;
    }

    const type = options.type;
    const converter = options.converter;
    const toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
    return toAttribute(value, type);
  }
  /**
   * Performs element initialization. By default captures any pre-set values for
   * registered properties.
   */


  initialize() {
    this._saveInstanceProperties(); // ensures first update will be caught by an early access of `updateComplete`


    this._requestUpdate();
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */


  _saveInstanceProperties() {
    // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays
    this.constructor._classProperties.forEach((_v, p) => {
      if (this.hasOwnProperty(p)) {
        const value = this[p];
        delete this[p];

        if (!this._instanceProperties) {
          this._instanceProperties = new Map();
        }

        this._instanceProperties.set(p, value);
      }
    });
  }
  /**
   * Applies previously saved instance properties.
   */


  _applyInstanceProperties() {
    // Use forEach so this works even if for/of loops are compiled to for loops
    // expecting arrays
    // tslint:disable-next-line:no-any
    this._instanceProperties.forEach((v, p) => this[p] = v);

    this._instanceProperties = undefined;
  }

  connectedCallback() {
    this._updateState = this._updateState | STATE_HAS_CONNECTED; // Ensure first connection completes an update. Updates cannot complete before
    // connection and if one is pending connection the `_hasConnectionResolver`
    // will exist. If so, resolve it to complete the update, otherwise
    // requestUpdate.

    if (this._hasConnectedResolver) {
      this._hasConnectedResolver();

      this._hasConnectedResolver = undefined;
    }
  }
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   */


  disconnectedCallback() {}
  /**
   * Synchronizes property values when attributes change.
   */


  attributeChangedCallback(name, old, value) {
    if (old !== value) {
      this._attributeToProperty(name, value);
    }
  }

  _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
    const ctor = this.constructor;

    const attr = ctor._attributeNameForProperty(name, options);

    if (attr !== undefined) {
      const attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


      if (attrValue === undefined) {
        return;
      } // Track if the property is being reflected to avoid
      // setting the property again via `attributeChangedCallback`. Note:
      // 1. this takes advantage of the fact that the callback is synchronous.
      // 2. will behave incorrectly if multiple attributes are in the reaction
      // stack at time of calling. However, since we process attributes
      // in `update` this should not be possible (or an extreme corner case
      // that we'd like to discover).
      // mark state reflecting


      this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      } // mark state not reflecting


      this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
    }
  }

  _attributeToProperty(name, value) {
    // Use tracking info to avoid deserializing attribute value if it was
    // just set from a property setter.
    if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
      return;
    }

    const ctor = this.constructor;

    const propName = ctor._attributeToPropertyMap.get(name);

    if (propName !== undefined) {
      const options = ctor._classProperties.get(propName) || defaultPropertyDeclaration; // mark state reflecting

      this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
      this[propName] = // tslint:disable-next-line:no-any
      ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

      this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
    }
  }
  /**
   * This private version of `requestUpdate` does not access or return the
   * `updateComplete` promise. This promise can be overridden and is therefore
   * not free to access.
   */


  _requestUpdate(name, oldValue) {
    let shouldRequestUpdate = true; // If we have a property key, perform property update steps.

    if (name !== undefined) {
      const ctor = this.constructor;
      const options = ctor._classProperties.get(name) || defaultPropertyDeclaration;

      if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
        if (!this._changedProperties.has(name)) {
          this._changedProperties.set(name, oldValue);
        } // Add to reflecting properties set.
        // Note, it's important that every change has a chance to add the
        // property to `_reflectingProperties`. This ensures setting
        // attribute + property reflects correctly.


        if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
          if (this._reflectingProperties === undefined) {
            this._reflectingProperties = new Map();
          }

          this._reflectingProperties.set(name, options);
        }
      } else {
        // Abort the request if the property should not be considered changed.
        shouldRequestUpdate = false;
      }
    }

    if (!this._hasRequestedUpdate && shouldRequestUpdate) {
      this._enqueueUpdate();
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should
   * be called when an element should update based on some state not triggered
   * by setting a property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored. Returns the `updateComplete` Promise which is resolved
   * when the update completes.
   *
   * @param name {PropertyKey} (optional) name of requesting property
   * @param oldValue {any} (optional) old value of requesting property
   * @returns {Promise} A Promise that is resolved when the update completes.
   */


  requestUpdate(name, oldValue) {
    this._requestUpdate(name, oldValue);

    return this.updateComplete;
  }
  /**
   * Sets up the element to asynchronously update.
   */


  async _enqueueUpdate() {
    // Mark state updating...
    this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
    let resolve;
    let reject;
    const previousUpdatePromise = this._updatePromise;
    this._updatePromise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });

    try {
      // Ensure any previous update has resolved before updating.
      // This `await` also ensures that property changes are batched.
      await previousUpdatePromise;
    } catch (e) {} // Ignore any previous errors. We only care that the previous cycle is
    // done. Any error should have been handled in the previous update.
    // Make sure the element has connected before updating.


    if (!this._hasConnected) {
      await new Promise(res => this._hasConnectedResolver = res);
    }

    try {
      const result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
      // enable coordinating updates with a scheduler. Note, the result is
      // checked to avoid delaying an additional microtask unless we need to.

      if (result != null) {
        await result;
      }
    } catch (e) {
      reject(e);
    }

    resolve(!this._hasRequestedUpdate);
  }

  get _hasConnected() {
    return this._updateState & STATE_HAS_CONNECTED;
  }

  get _hasRequestedUpdate() {
    return this._updateState & STATE_UPDATE_REQUESTED;
  }

  get hasUpdated() {
    return this._updateState & STATE_HAS_UPDATED;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * You can override this method to change the timing of updates. If this
   * method is overridden, `super.performUpdate()` must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```
   * protected async performUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.performUpdate();
   * }
   * ```
   */


  performUpdate() {
    // Mixin instance properties once, if they exist.
    if (this._instanceProperties) {
      this._applyInstanceProperties();
    }

    let shouldUpdate = false;
    const changedProperties = this._changedProperties;

    try {
      shouldUpdate = this.shouldUpdate(changedProperties);

      if (shouldUpdate) {
        this.update(changedProperties);
      }
    } catch (e) {
      // Prevent `firstUpdated` and `updated` from running when there's an
      // update exception.
      shouldUpdate = false;
      throw e;
    } finally {
      // Ensure element can accept additional updates after an exception.
      this._markUpdated();
    }

    if (shouldUpdate) {
      if (!(this._updateState & STATE_HAS_UPDATED)) {
        this._updateState = this._updateState | STATE_HAS_UPDATED;
        this.firstUpdated(changedProperties);
      }

      this.updated(changedProperties);
    }
  }

  _markUpdated() {
    this._changedProperties = new Map();
    this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update. This getter can be implemented to
   * await additional state. For example, it is sometimes useful to await a
   * rendered element before fulfilling this Promise. To do this, first await
   * `super.updateComplete` then any subsequent state.
   *
   * @returns {Promise} The Promise returns a boolean that indicates if the
   * update resolved without triggering another update.
   */


  get updateComplete() {
    return this._updatePromise;
  }
  /**
   * Controls whether or not `update` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * * @param _changedProperties Map of changed properties with old values
   */


  shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * * @param _changedProperties Map of changed properties with old values
   */


  update(_changedProperties) {
    if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
      // Use forEach so this works even if for/of loops are compiled to for
      // loops expecting arrays
      this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));

      this._reflectingProperties = undefined;
    }
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * * @param _changedProperties Map of changed properties with old values
   */


  updated(_changedProperties) {}
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * * @param _changedProperties Map of changed properties with old values
   */


  firstUpdated(_changedProperties) {}

}
/**
 * Marks class as having finished creating properties.
 */

UpdatingElement.finalized = true;

/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: html, svg, TemplateResult, SVGTemplateResult, LitElement, defaultConverter, notEqual, UpdatingElement, customElement, property, query, queryAll, eventOptions, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return LitElement; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js");
/* harmony import */ var _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/updating-element.js */ "./node_modules/lit-element/lib/updating-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]; });

/* harmony import */ var _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/decorators.js */ "./node_modules/lit-element/lib/decorators.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lib_decorators_js__WEBPACK_IMPORTED_MODULE_3__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return lit_html__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"]; });

/* harmony import */ var _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/css-tag.js */ "./node_modules/lit-element/lib/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["css"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */







 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time

(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.0.1');
/**
 * Minimal implementation of Array.prototype.flat
 * @param arr the array to flatten
 * @param result the accumlated result
 */

function arrayFlat(styles, result = []) {
  for (let i = 0, length = styles.length; i < length; i++) {
    const value = styles[i];

    if (Array.isArray(value)) {
      arrayFlat(value, result);
    } else {
      result.push(value);
    }
  }

  return result;
}
/** Deeply flattens styles array. Uses native flat if available. */


const flattenStyles = styles => styles.flat ? styles.flat(Infinity) : arrayFlat(styles);

class LitElement extends _lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"] {
  /** @nocollapse */
  static finalize() {
    super.finalize(); // Prepare styling that is stamped at first render time. Styling
    // is built from user provided `styles` or is inherited from the superclass.

    this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ? this._getUniqueStyles() : this._styles || [];
  }
  /** @nocollapse */


  static _getUniqueStyles() {
    // Take care not to call `this.styles` multiple times since this generates
    // new CSSResults each time.
    // TODO(sorvell): Since we do not cache CSSResults by input, any
    // shared styles will generate new stylesheet objects, which is wasteful.
    // This should be addressed when a browser ships constructable
    // stylesheets.
    const userStyles = this.styles;
    const styles = [];

    if (Array.isArray(userStyles)) {
      const flatStyles = flattenStyles(userStyles); // As a performance optimization to avoid duplicated styling that can
      // occur especially when composing via subclassing, de-duplicate styles
      // preserving the last item in the list. The last item is kept to
      // try to preserve cascade order with the assumption that it's most
      // important that last added styles override previous styles.

      const styleSet = flatStyles.reduceRight((set, s) => {
        set.add(s); // on IE set.add does not return the set.

        return set;
      }, new Set()); // Array.from does not work on Set in IE

      styleSet.forEach(v => styles.unshift(v));
    } else if (userStyles) {
      styles.push(userStyles);
    }

    return styles;
  }
  /**
   * Performs element initialization. By default this calls `createRenderRoot`
   * to create the element `renderRoot` node and captures any pre-set values for
   * registered properties.
   */


  initialize() {
    super.initialize();
    this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
    // element's getRootNode(). While this could be done, we're choosing not to
    // support this now since it would require different logic around de-duping.

    if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
      this.adoptStyles();
    }
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   * @returns {Element|DocumentFragment} Returns a node into which to render.
   */


  createRenderRoot() {
    return this.attachShadow({
      mode: 'open'
    });
  }
  /**
   * Applies styling to the element shadowRoot using the `static get styles`
   * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
   * available and will fallback otherwise. When Shadow DOM is polyfilled,
   * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
   * is available but `adoptedStyleSheets` is not, styles are appended to the
   * end of the `shadowRoot` to [mimic spec
   * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
   */


  adoptStyles() {
    const styles = this.constructor._styles;

    if (styles.length === 0) {
      return;
    } // There are three separate cases here based on Shadow DOM support.
    // (1) shadowRoot polyfilled: use ShadyCSS
    // (2) shadowRoot.adoptedStyleSheets available: use it.
    // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
    // rendering


    if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
      window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(s => s.cssText), this.localName);
    } else if (_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
      this.renderRoot.adoptedStyleSheets = styles.map(s => s.styleSheet);
    } else {
      // This must be done after rendering so the actual style insertion is done
      // in `update`.
      this._needsShimAdoptedStyleSheets = true;
    }
  }

  connectedCallback() {
    super.connectedCallback(); // Note, first update/render handles styleElement so we only call this if
    // connected after first update.

    if (this.hasUpdated && window.ShadyCSS !== undefined) {
      window.ShadyCSS.styleElement(this);
    }
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * * @param _changedProperties Map of changed properties with old values
   */


  update(changedProperties) {
    super.update(changedProperties);
    const templateResult = this.render();

    if (templateResult instanceof lit_html__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]) {
      this.constructor.render(templateResult, this.renderRoot, {
        scopeName: this.localName,
        eventContext: this
      });
    } // When native Shadow DOM is used but adoptedStyles are not supported,
    // insert styling after rendering to ensure adoptedStyles have highest
    // priority.


    if (this._needsShimAdoptedStyleSheets) {
      this._needsShimAdoptedStyleSheets = false;

      this.constructor._styles.forEach(s => {
        const style = document.createElement('style');
        style.textContent = s.cssText;
        this.renderRoot.appendChild(style);
      });
    }
  }
  /**
   * Invoked on each update to perform rendering tasks. This method must return
   * a lit-html TemplateResult. Setting properties inside this method will *not*
   * trigger the element to update.
   */


  render() {}

}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 */

LitElement.finalized = true;
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 * @nocollapse
 */

LitElement.render = lit_html_lib_shady_render_js__WEBPACK_IMPORTED_MODULE_1__["render"];

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */

class DefaultTemplateProcessor {
  /**
   * Create parts for an attribute-position binding, given the event, attribute
   * name, and string literals.
   *
   * @param element The element containing the binding
   * @param name  The attribute name
   * @param strings The string literals. There are always at least two strings,
   *   event for fully-controlled bindings with a single expression.
   */
  handleAttributeExpressions(element, name, strings, options) {
    const prefix = name[0];

    if (prefix === '.') {
      const comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
      return comitter.parts;
    }

    if (prefix === '@') {
      return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
    }

    if (prefix === '?') {
      return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
    }

    const comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
    return comitter.parts;
  }
  /**
   * Create parts for a text-position binding.
   * @param templateFactory
   */


  handleTextExpression(options) {
    return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
  }

}
const defaultTemplateProcessor = new DefaultTemplateProcessor();

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive so that lit-html will call the function
 * during template rendering, rather than passing as a value.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object
 *
 * @example
 *
 * ```
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 * ```
 */
// tslint:disable-next-line:no-any

const directive = f => (...args) => {
  const d = f(...args);
  directives.set(d, true);
  return d;
};
const isDirective = o => {
  return typeof o === 'function' && directives.has(o);
};

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */

const reparentNodes = (container, start, end = null, before = null) => {
  let node = start;

  while (node !== end) {
    const n = node.nextSibling;
    container.insertBefore(node, before);
    node = n;
  }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */

const removeNodes = (container, startNode, endNode = null) => {
  let node = startNode;

  while (node !== endNode) {
    const n = node.nextSibling;
    container.removeChild(node);
    node = n;
  }
};

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! exports provided: removeNodesFromTemplate, insertNodeIntoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodesFromTemplate", function() { return removeNodesFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeIntoTemplate", function() { return insertNodeIntoTemplate; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module shady-render
 */

const walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  const {
    element: {
      content
    },
    parts
  } = template;
  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts);
  let part = parts[partIndex];
  let nodeIndex = -1;
  let removeCount = 0;
  const nodesToRemoveInTemplate = [];
  let currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    const node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(n => n.parentNode.removeChild(n));
}

const countNodes = node => {
  let count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
  for (let i = startIndex + 1; i < parts.length; i++) {
    const part = parts[i];

    if (Object(_template_js__WEBPACK_IMPORTED_MODULE_0__["isTemplatePartActive"])(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node, refNode = null) {
  const {
    element: {
      content
    },
    parts
  } = template; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts);
  let insertCount = 0;
  let walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    const walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

const nothing = {};

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */






const isPrimitive = value => {
  return value === null || !(typeof value === 'object' || typeof value === 'function');
};
/**
 * Sets attribute values for AttributeParts, so that the value is only set once
 * even if there are multiple parts for an attribute.
 */

class AttributeCommitter {
  constructor(element, name, strings) {
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (let i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createPart() {
    return new AttributePart(this);
  }

  _getValue() {
    const strings = this.strings;
    const l = strings.length - 1;
    let text = '';

    for (let i = 0; i < l; i++) {
      text += strings[i];
      const part = this.parts[i];

      if (part !== undefined) {
        const v = part.value;

        if (v != null && (Array.isArray(v) || // tslint:disable-next-line:no-any
        typeof v !== 'string' && v[Symbol.iterator])) {
          for (const t of v) {
            text += typeof t === 'string' ? t : String(t);
          }
        } else {
          text += typeof v === 'string' ? v : String(v);
        }
      }
    }

    text += strings[l];
    return text;
  }

  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element.setAttribute(this.name, this._getValue());
    }
  }

}
class AttributePart {
  constructor(comitter) {
    this.value = undefined;
    this.committer = comitter;
  }

  setValue(value) {
    if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
      this.value = value; // If the value is a not a directive, dirty the committer so that it'll
      // call setAttribute. If the value is a directive, it'll dirty the
      // committer if it calls setValue().

      if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
        this.committer.dirty = true;
      }
    }
  }

  commit() {
    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
      const directive = this.value;
      this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    this.committer.commit();
  }

}
class NodePart {
  constructor(options) {
    this.value = undefined;
    this._pendingValue = undefined;
    this.options = options;
  }
  /**
   * Inserts this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendInto(container) {
    this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
  }
  /**
   * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
   * its next sibling must be static, unchanging nodes such as those that appear
   * in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterNode(ref) {
    this.startNode = ref;
    this.endNode = ref.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  appendIntoPart(part) {
    part._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

    part._insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
  }
  /**
   * Appends this part after `ref`
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  insertAfterPart(ref) {
    ref._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

    this.endNode = ref.endNode;
    ref.endNode = this.startNode;
  }

  setValue(value) {
    this._pendingValue = value;
  }

  commit() {
    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
      const directive = this._pendingValue;
      this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    const value = this._pendingValue;

    if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    if (isPrimitive(value)) {
      if (value !== this.value) {
        this._commitText(value);
      }
    } else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
      this._commitTemplateResult(value);
    } else if (value instanceof Node) {
      this._commitNode(value);
    } else if (Array.isArray(value) || // tslint:disable-next-line:no-any
    value[Symbol.iterator]) {
      this._commitIterable(value);
    } else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
      this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
      this.clear();
    } else {
      // Fallback, will render the string representation
      this._commitText(value);
    }
  }

  _insert(node) {
    this.endNode.parentNode.insertBefore(node, this.endNode);
  }

  _commitNode(value) {
    if (this.value === value) {
      return;
    }

    this.clear();

    this._insert(value);

    this.value = value;
  }

  _commitText(value) {
    const node = this.startNode.nextSibling;
    value = value == null ? '' : value;

    if (node === this.endNode.previousSibling && node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
        // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = value;
      } else {
      this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
    }

    this.value = value;
  }

  _commitTemplateResult(value) {
    const template = this.options.templateFactory(value);

    if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] && this.value.template === template) {
      this.value.update(value.values);
    } else {
      // Make sure we propagate the template processor from the TemplateResult
      // so that we use its syntax extension, etc. The template factory comes
      // from the render function options so that it can control template
      // caching and preprocessing.
      const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);

      const fragment = instance._clone();

      instance.update(value.values);

      this._commitNode(fragment);

      this.value = instance;
    }
  }

  _commitIterable(value) {
    // For an Iterable, we create a new InstancePart per item, then set its
    // value to the item. This is a little bit of overhead for every item in
    // an Iterable, but it lets us recurse easily and efficiently update Arrays
    // of TemplateResults that will be commonly returned from expressions like:
    // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
    // If _value is an array, then the previous render was of an
    // iterable and _value will contain the NodeParts from the previous
    // render. If _value is not an array, clear this part and make a new
    // array for NodeParts.
    if (!Array.isArray(this.value)) {
      this.value = [];
      this.clear();
    } // Lets us keep track of how many items we stamped so we can clear leftover
    // items from a previous render


    const itemParts = this.value;
    let partIndex = 0;
    let itemPart;

    for (const item of value) {
      // Try to reuse an existing part
      itemPart = itemParts[partIndex]; // If no existing part, create a new one

      if (itemPart === undefined) {
        itemPart = new NodePart(this.options);
        itemParts.push(itemPart);

        if (partIndex === 0) {
          itemPart.appendIntoPart(this);
        } else {
          itemPart.insertAfterPart(itemParts[partIndex - 1]);
        }
      }

      itemPart.setValue(item);
      itemPart.commit();
      partIndex++;
    }

    if (partIndex < itemParts.length) {
      // Truncate the parts array so _value reflects the current state
      itemParts.length = partIndex;
      this.clear(itemPart && itemPart.endNode);
    }
  }

  clear(startNode = this.startNode) {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
  }

}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

class BooleanAttributePart {
  constructor(element, name, strings) {
    this.value = undefined;
    this._pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  setValue(value) {
    this._pendingValue = value;
  }

  commit() {
    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
      const directive = this._pendingValue;
      this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    const value = !!this._pendingValue;

    if (this.value !== value) {
      if (value) {
        this.element.setAttribute(this.name, '');
      } else {
        this.element.removeAttribute(this.name);
      }
    }

    this.value = value;
    this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
  }

}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

class PropertyCommitter extends AttributeCommitter {
  constructor(element, name, strings) {
    super(element, name, strings);
    this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
  }

  _createPart() {
    return new PropertyPart(this);
  }

  _getValue() {
    if (this.single) {
      return this.parts[0].value;
    }

    return super._getValue();
  }

  commit() {
    if (this.dirty) {
      this.dirty = false; // tslint:disable-next-line:no-any

      this.element[this.name] = this._getValue();
    }
  }

}
class PropertyPart extends AttributePart {} // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

let eventOptionsSupported = false;

try {
  const options = {
    get capture() {
      eventOptionsSupported = true;
      return false;
    }

  }; // tslint:disable-next-line:no-any

  window.addEventListener('test', options, options); // tslint:disable-next-line:no-any

  window.removeEventListener('test', options, options);
} catch (_e) {}

class EventPart {
  constructor(element, eventName, eventContext) {
    this.value = undefined;
    this._pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this._boundHandleEvent = e => this.handleEvent(e);
  }

  setValue(value) {
    this._pendingValue = value;
  }

  commit() {
    while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
      const directive = this._pendingValue;
      this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
      directive(this);
    }

    if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
      return;
    }

    const newListener = this._pendingValue;
    const oldListener = this.value;
    const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
    const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

    if (shouldRemoveListener) {
      this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
    }

    if (shouldAddListener) {
      this._options = getOptions(newListener);
      this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
    }

    this.value = newListener;
    this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
  }

  handleEvent(event) {
    if (typeof this.value === 'function') {
      this.value.call(this.eventContext || this.element, event);
    } else {
      this.value.handleEvent(event);
    }
  }

} // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

const getOptions = o => o && (eventOptionsSupported ? {
  capture: o.capture,
  passive: o.passive,
  once: o.once
} : o.capture);

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */



const parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

const render = (result, container, options) => {
  let part = parts.get(container);

  if (part === undefined) {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({
      templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"]
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! exports provided: html, svg, TemplateResult, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _modify_template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lit_html_js__WEBPACK_IMPORTED_MODULE_7__["TemplateResult"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @module shady-render
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */







 // Get a key to lookup in `templateCaches`.

const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;

let compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn(`Incompatible ShadyCSS version detected.` + `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and` + `@webcomponents/shadycss@1.3.1.`);
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


const shadyTemplateFactory = scopeName => result => {
  const cacheKey = getTemplateCacheKey(result.type, scopeName);
  let templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(cacheKey);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].set(cacheKey, templateCache);
  }

  let template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  }

  const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_6__["marker"]);
  template = templateCache.keyString.get(key);

  if (template === undefined) {
    const element = result.getTemplateElement();

    if (compatibleShadyCSSVersion) {
      window.ShadyCSS.prepareTemplateDom(element, scopeName);
    }

    template = new _template_js__WEBPACK_IMPORTED_MODULE_6__["Template"](result, element);
    templateCache.keyString.set(key, template);
  }

  templateCache.stringsArray.set(result.strings, template);
  return template;
};

const TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

const removeStylesFromLitTemplates = scopeName => {
  TEMPLATE_TYPES.forEach(type => {
    const templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(template => {
        const {
          element: {
            content
          }
        } = template; // IE 11 doesn't support the iterable param Set constructor

        const styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(s => {
          styles.add(s);
        });
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, styles);
      });
    }
  });
};

const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

const prepareTemplateStyles = (renderedDOM, template, scopeName) => {
  shadyRenderSet.add(scopeName); // Move styles out of rendered DOM and store.

  const styles = renderedDOM.querySelectorAll('style'); // If there are no styles, skip unnecessary work

  if (styles.length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
    return;
  }

  const condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (let i = 0; i < styles.length; i++) {
    const style = styles[i];
    style.parentNode.removeChild(style);
    condensedStyle.textContent += style.textContent;
  } // Remove styles from nested templates in this scope.


  removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["insertNodeIntoTemplate"])(template, condensedStyle, template.element.content.firstChild); // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).

  window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);

  if (window.ShadyCSS.nativeShadow) {
    // When in native Shadow DOM, re-add styling to rendered content using
    // the style ShadyCSS produced.
    const style = template.element.content.querySelector('style');
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else {
    // When not in native Shadow DOM, at this point ShadyCSS will have
    // removed the style from the lit template and parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    template.element.content.insertBefore(condensedStyle, template.element.content.firstChild);
    const removes = new Set();
    removes.add(condensedStyle);
    Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


const render = (result, container, options) => {
  const scopeName = options.scopeName;
  const hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].has(container);
  const needsScoping = container instanceof ShadowRoot && compatibleShadyCSSVersion && result instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_5__["TemplateResult"]; // Handle first render to a scope specially...

  const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["render"])(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    const part = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].get(renderContainer);
    _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].delete(renderContainer);

    if (part.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_4__["TemplateInstance"]) {
      prepareTemplateStyles(renderContainer, part.value.template, scopeName);
    }

    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    container.appendChild(renderContainer);
    _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */

function templateFactory(result) {
  let templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  let template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
const templateCaches = new Map();

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

class TemplateInstance {
  constructor(template, processor, options) {
    this._parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  update(values) {
    let i = 0;

    for (const part of this._parts) {
      if (part !== undefined) {
        part.setValue(values[i]);
      }

      i++;
    }

    for (const part of this._parts) {
      if (part !== undefined) {
        part.commit();
      }
    }
  }

  _clone() {
    // When using the Custom Elements polyfill, clone the node, rather than
    // importing it, to keep the fragment in the template's document. This
    // leaves the fragment inert so custom elements won't upgrade and
    // potentially modify their contents by creating a polyfilled ShadowRoot
    // while we traverse the tree.
    const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const parts = this.template.parts;
    let partIndex = 0;
    let nodeIndex = 0;

    const _prepareInstance = fragment => {
      // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
      // null
      const walker = document.createTreeWalker(fragment, 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
      , null, false);
      let node = walker.nextNode(); // Loop through all the nodes and parts of a template

      while (partIndex < parts.length && node !== null) {
        const part = parts[partIndex]; // Consecutive Parts may have the same node index, in the case of
        // multiple bound attributes on an element. So each iteration we either
        // increment the nodeIndex, if we aren't on a node with a part, or the
        // partIndex if we are. By not incrementing the nodeIndex when we find a
        // part, we allow for the next part to be associated with the current
        // node if neccessasry.

        if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
          this._parts.push(undefined);

          partIndex++;
        } else if (nodeIndex === part.index) {
          if (part.type === 'node') {
            const part = this.processor.handleTextExpression(this.options);
            part.insertAfterNode(node.previousSibling);

            this._parts.push(part);
          } else {
            this._parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
          }

          partIndex++;
        } else {
          nodeIndex++;

          if (node.nodeName === 'TEMPLATE') {
            _prepareInstance(node.content);
          }

          node = walker.nextNode();
        }
      }
    };

    _prepareInstance(fragment);

    if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
      document.adoptNode(fragment);
      customElements.upgrade(fragment);
    }

    return fragment;
  }

}

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

class TemplateResult {
  constructor(strings, values, type, processor) {
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  getHTML() {
    const endIndex = this.strings.length - 1;
    let html = '';

    for (let i = 0; i < endIndex; i++) {
      const s = this.strings[i]; // This exec() call does two things:
      // 1) Appends a suffix to the bound attribute name to opt out of special
      // attribute value parsing that IE11 and Edge do, like for style and
      // many SVG attributes. The Template class also appends the same suffix
      // when looking up attributes to create Parts.
      // 2) Adds an unquoted-attribute-safe marker for the first expression in
      // an attribute. Subsequent attribute expressions will use node markers,
      // and this is safe since attributes with multiple expressions are
      // guaranteed to be quoted.

      const match = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);

      if (match) {
        // We're starting a new bound attribute.
        // Add the safe attribute suffix, and use unquoted-attribute-safe
        // marker.
        html += s.substr(0, match.index) + match[1] + match[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + match[3] + _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
      } else {
        // We're either in a bound node, or trailing bound attribute.
        // Either way, nodeMarker is safe to use.
        html += s + _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"];
      }
    }

    return html + this.strings[endIndex];
  }

  getTemplateElement() {
    const template = document.createElement('template');
    template.innerHTML = this.getHTML();
    return template;
  }

}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */

class SVGTemplateResult extends TemplateResult {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }

  getTemplateElement() {
    const template = super.getTemplateElement();
    const content = template.content;
    const svgElement = content.firstChild;
    content.removeChild(svgElement);
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
    return template;
  }

}

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */

const boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */

class Template {
  constructor(result, element) {
    this.parts = [];
    this.element = element;
    let index = -1;
    let partIndex = 0;
    const nodesToRemove = [];

    const _prepareTemplate = template => {
      const content = template.content; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
      // null

      const walker = document.createTreeWalker(content, 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
      , null, false); // Keeps track of the last index associated with a part. We try to delete
      // unnecessary nodes, but we never want to associate two different parts
      // to the same index. They must have a constant node between.

      let lastPartIndex = 0;

      while (walker.nextNode()) {
        index++;
        const node = walker.currentNode;

        if (node.nodeType === 1
        /* Node.ELEMENT_NODE */
        ) {
            if (node.hasAttributes()) {
              const attributes = node.attributes; // Per
              // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
              // attributes are not guaranteed to be returned in document order.
              // In particular, Edge/IE can return them out of order, so we cannot
              // assume a correspondance between part index and attribute index.

              let count = 0;

              for (let i = 0; i < attributes.length; i++) {
                if (attributes[i].value.indexOf(marker) >= 0) {
                  count++;
                }
              }

              while (count-- > 0) {
                // Get the template literal section leading up to the first
                // expression in this attribute
                const stringForPart = result.strings[partIndex]; // Find the attribute name

                const name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
                // All bound attributes have had a suffix added in
                // TemplateResult#getHTML to opt out of special attribute
                // handling. To look up the attribute value we also need to add
                // the suffix.

                const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                const attributeValue = node.getAttribute(attributeLookupName);
                const strings = attributeValue.split(markerRegex);
                this.parts.push({
                  type: 'attribute',
                  index,
                  name,
                  strings
                });
                node.removeAttribute(attributeLookupName);
                partIndex += strings.length - 1;
              }
            }

            if (node.tagName === 'TEMPLATE') {
              _prepareTemplate(node);
            }
          } else if (node.nodeType === 3
        /* Node.TEXT_NODE */
        ) {
            const data = node.data;

            if (data.indexOf(marker) >= 0) {
              const parent = node.parentNode;
              const strings = data.split(markerRegex);
              const lastIndex = strings.length - 1; // Generate a new text node for each literal section
              // These nodes are also used as the markers for node parts

              for (let i = 0; i < lastIndex; i++) {
                parent.insertBefore(strings[i] === '' ? createMarker() : document.createTextNode(strings[i]), node);
                this.parts.push({
                  type: 'node',
                  index: ++index
                });
              } // If there's no text, we must insert a comment to mark our place.
              // Else, we can trust it will stick around after cloning.


              if (strings[lastIndex] === '') {
                parent.insertBefore(createMarker(), node);
                nodesToRemove.push(node);
              } else {
                node.data = strings[lastIndex];
              } // We have a part for each match found


              partIndex += lastIndex;
            }
          } else if (node.nodeType === 8
        /* Node.COMMENT_NODE */
        ) {
            if (node.data === marker) {
              const parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
              // the following are true:
              //  * We don't have a previousSibling
              //  * The previousSibling is already the start of a previous part

              if (node.previousSibling === null || index === lastPartIndex) {
                index++;
                parent.insertBefore(createMarker(), node);
              }

              lastPartIndex = index;
              this.parts.push({
                type: 'node',
                index
              }); // If we don't have a nextSibling, keep this node so we have an end.
              // Else, we can remove it to save future costs.

              if (node.nextSibling === null) {
                node.data = '';
              } else {
                nodesToRemove.push(node);
                index--;
              }

              partIndex++;
            } else {
              let i = -1;

              while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                // Comment node has a binding marker inside, make an inactive part
                // The binding won't work, but subsequent bindings will
                // TODO (justinfagnani): consider whether it's even worth it to
                // make bindings in comments work
                this.parts.push({
                  type: 'node',
                  index: -1
                });
              }
            }
          }
      }
    };

    _prepareTemplate(element); // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (const n of nodesToRemove) {
      n.parentNode.removeChild(n);
    }
  }

}
const isTemplatePartActive = part => part.index !== -1; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */



 // TODO(justinfagnani): remove line when we get NodePart moving methods








 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */

const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */

const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);

/***/ }),

/***/ "./src/elements/cui-base-element.js":
/*!******************************************!*\
  !*** ./src/elements/cui-base-element.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks.js */ "./src/utils/hooks.js");

/* harmony default export */ __webpack_exports__["default"] = (superClass => {
  /**
   * @extends HTMLElement
   */
  class CuiBaseElement extends superClass {
    static get properties() {
      return {
        hass: Object,
        inDialog: {
          type: Boolean,
          value: false
        },
        stateObj: Object,
        controlElement: String,
        extra: {
          type: Array,
          computed: 'computeExtra(hass, stateObj)'
        }
      };
    }

    computeExtra(hass, stateObj) {
      let extras = stateObj.attributes.extra_data_template;

      if (extras) {
        if (!Array.isArray(extras)) {
          extras = [extras];
        }

        return extras.map(extra => window.customUI.computeTemplate(extra, hass, hass.states, stateObj, stateObj.attributes,
        /* attribute= */
        undefined, stateObj.state)).filter(result => result !== null);
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
});

/***/ }),

/***/ "./src/elements/dynamic-element.js":
/*!*****************************************!*\
  !*** ./src/elements/dynamic-element.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_assistant_polymer_src_common_dom_dynamic_content_updater_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/dynamic_content_updater.ts */ "../home-assistant-polymer/src/common/dom/dynamic_content_updater.ts");


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
          value: false
        }
      };
    }

    static get observers() {
      return ['observerFunc(hass, stateObj, elementName, inDialog)'];
    }

    observerFunc(hass, stateObj, elementName, inDialog) {
      Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(this, elementName ? elementName.toUpperCase() : 'DIV', {
        hass,
        stateObj,
        inDialog
      });
    }

  }

  customElements.define('dynamic-element', DynamicElement);
}

if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(() => loadCustomUI());
}

/***/ }),

/***/ "./src/elements/dynamic-with-extra.js":
/*!********************************************!*\
  !*** ./src/elements/dynamic-with-extra.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts */ "../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _dynamic_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-element.js */ "./src/elements/dynamic-element.js");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/hooks.js */ "./src/utils/hooks.js");




customElements.whenDefined('state-card-display').then(() => {
  /**
   * @extends HTMLElement
   */
  class DynamicWithExtra extends customElements.get('state-card-display') {
    static get template() {
      return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
          value: false
        },
        stateObj: Object,
        controlElement: String,
        extraObj: {
          type: Array,
          computed: 'computeExtra(hass, stateObj, _attached)'
        },
        _attached: Boolean,
        extraObjVisible: {
          type: Boolean,
          computed: 'computeExtraVisible(extraObj, inDialog)'
        }
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

      return extraBadges.map(extraBadge => {
        let result = null;

        if (extraBadge.entity_id && hass.states[extraBadge.entity_id]) {
          result = Object.assign({}, window.customUI.maybeChangeObject(this, hass.states[extraBadge.entity_id], this.inDialog,
          /* allowHidden= */
          false));
        } else if (extraBadge.attribute && stateObj.attributes[extraBadge.attribute] !== undefined) {
          result = {
            state: String(stateObj.attributes[extraBadge.attribute]),
            entity_id: 'none.none',
            attributes: {
              unit_of_measurement: extraBadge.unit
            }
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
        result.attributes = Object.assign({}, {
          friendly_name: ''
        });
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
      return stateObj.attributes.confirm_controls || stateObj.attributes.confirm_controls_show_lock;
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
      Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_1__["default"])(element, hass.themes || {
        default_theme: 'default',
        themes: {}
      }, themeName);
    }

    extraDomChanged() {
      this.root.querySelectorAll('ha-state-label-badge').forEach(elem => {
        this.applyThemes(this.hass, elem, elem.state);
      });
    }

  }

  customElements.define('dynamic-with-extra', DynamicWithExtra);
});

/***/ }),

/***/ "./src/elements/ha-config-custom-ui.js":
/*!*********************************************!*\
  !*** ./src/elements/ha-config-custom-ui.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks.js */ "./src/utils/hooks.js");


/**
 * @extends HTMLElement
 */

class HaConfigCustomUi extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
        attribute: 'is-wide'
      },
      name: {
        type: String,
        reflect: true,
        observer: 'nameChanged'
      }
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

/***/ }),

/***/ "./src/elements/ha-themed-slider.js":
/*!******************************************!*\
  !*** ./src/elements/ha-themed-slider.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");


function loadCustomUI() {
  /**
   * @extends HTMLElement
   */
  class HaThemedSlider extends Polymer.Element {
    static get template() {
      return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
          value: 0
        },
        max: {
          type: Number,
          value: 100
        },
        pin: {
          type: Boolean,
          value: false
        },
        isOn: {
          type: Boolean,
          value: false
        },
        disableOffWhenMin: {
          type: Boolean,
          value: false,
          notify: true
        },
        disableReportWhenNotChanged: {
          type: Boolean,
          value: false
        },
        theme: Object,
        value: {
          type: Number,
          notify: true
        },
        _themedMin: {
          type: Number,
          computed: '_computeAttribute(theme, "min", min)'
        }
      };
    }

    static get observers() {
      return ['computeEnabledThemedReportWhenNotChanged(theme, disableReportWhenNotChanged)'];
    }

    computeEnabledThemedReportWhenNotChanged(theme, disableReportWhenNotChanged) {
      this._enabledThemedReportWhenNotChanged = this._computeAttribute(theme, 'report_when_not_changed', !disableReportWhenNotChanged);
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

/***/ }),

/***/ "./src/elements/state-card-custom-ui.js":
/*!**********************************************!*\
  !*** ./src/elements/state-card-custom-ui.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts */ "../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _home_assistant_polymer_src_common_entity_compute_state_domain_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/compute_state_domain.ts */ "../home-assistant-polymer/src/common/entity/compute_state_domain.ts");
/* harmony import */ var _home_assistant_polymer_src_common_dom_dynamic_content_updater_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/dynamic_content_updater.ts */ "../home-assistant-polymer/src/common/dom/dynamic_content_updater.ts");
/* harmony import */ var _home_assistant_polymer_src_common_entity_state_card_type_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/state_card_type.ts */ "../home-assistant-polymer/src/common/entity/state_card_type.ts");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks.js */ "./src/utils/hooks.js");
/* harmony import */ var _state_card_with_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-card-with-slider.js */ "./src/elements/state-card-with-slider.js");
/* harmony import */ var _state_card_without_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-card-without-slider.js */ "./src/elements/state-card-without-slider.js");








function loadCustomUI() {
  const SHOW_LAST_CHANGED_BLACKLISTED_CARDS = ['configurator'];
  const DOMAIN_TO_SLIDER_SUPPORT = {
    light: 1,
    // SUPPORT_BRIGHTNESS
    cover: 4,
    // SUPPORT_SET_POSITION
    climate: 1 // SUPPORT_TARGET_TEMPERATURE

  };
  const TYPE_TO_CONTROL = {
    toggle: 'ha-entity-toggle',
    display: '',
    cover: 'ha-cover-controls'
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
          value: false
        },
        stateObj: Object
      };
    }

    static get observers() {
      return ['inputChanged(hass, inDialog, stateObj)'];
    }

    connectedCallback() {
      super.connectedCallback();
      const container = this.parentNode.parentNode;

      if (container.tagName === 'DIV' && (container.classList.contains('state') || container.classList.contains('child-card'))) {
        this._container = container; // Since this doesn't actually change the background - no need to clear it.

        container.style.setProperty('background-color', 'var(--paper-card-background-color, inherit)'); // Polyfill 'updateStyles'.

        if (!container.updateStyles) {
          container.updateStyles = styles => {
            Object.keys(styles).forEach(key => {
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
        this._container.updateStyles({
          display: '',
          margin: '',
          padding: ''
        });

        Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(this._container, this.hass.themes || {
          default_theme: 'default',
          themes: {}
        }, 'default');
        this._container = null;
      }

      super.disconnectedCallback();
    }

    badgeMode(hass, stateObj, domain) {
      const states = [];

      if (domain === 'group') {
        stateObj.attributes.entity_id.forEach(id => {
          const state = hass.states[id];

          if (!state) {
            /* eslint-disable no-console */
            console.warn(`Unknown ID ${id} in group ${stateObj.entity_id}`);
            /* eslint-enable no-console */

            return;
          }

          if (!stateObj.attributes.badges_list || stateObj.attributes.badges_list.includes(state.entity_id)) {
            states.push(window.customUI.maybeChangeObject(this, state, false
            /* inDialog */
            , false
            /* allowHidden */
            ));
          }
        });
      } else {
        states.push(stateObj);

        if (this._container) {
          this._container.style.display = 'inline-block';
          const params = {
            display: 'inline-block'
          };

          if (this._container.classList.contains('state')) {
            params.margin = 'var(--ha-badges-card-margin, 0)';
          }

          this.updateStyles(params);
        }
      }

      Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_ts__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'HA-BADGES-CARD', {
        hass,
        states
      });

      if (this._container) {
        this._container.updateStyles({
          width: 'var(--ha-badges-card-width, initial)',
          'text-align': 'var(--ha-badges-card-text-align, initial)'
        });
      }

      this.lastChild.style.fontSize = '85%'; // Since this variable only affects badges mode - no need to clean it up.

      this.style.setProperty('--ha-state-label-badge-margin-bottom', '0');
    }

    cleanBadgeStyle() {
      if (this._container) {
        this._container.updateStyles({
          display: '',
          width: '',
          'text-align': ''
        });
      }

      this.updateStyles({
        display: '',
        margin: ''
      });
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

      Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(themeTarget, hass.themes || {
        default_theme: 'default',
        themes: {}
      }, themeName);
    }

    maybeHideEntity(modifiedObj) {
      if (!modifiedObj) {
        if (this.lastChild) {
          this.removeChild(this.lastChild);
        }

        if (this._container) {
          this._container.updateStyles({
            margin: '0',
            padding: '0'
          });
        }

        return true;
      }

      if (this._container) {
        this._container.updateStyles({
          margin: '',
          padding: ''
        });
      }

      return false;
    }

    sliderEligible_(domain, obj, inDialog) {
      if (inDialog) return false;
      return DOMAIN_TO_SLIDER_SUPPORT[domain] && DOMAIN_TO_SLIDER_SUPPORT[domain] & obj.attributes.supported_features && obj.attributes.state_card_mode && obj.attributes.state_card_mode !== 'no-slider';
    }

    inputChanged(hass, inDialog, stateObj) {
      if (!stateObj || !hass || !this._isAttached) return;
      const domain = Object(_home_assistant_polymer_src_common_entity_compute_state_domain_ts__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);
      const modifiedObj = window.customUI.maybeChangeObject(this, stateObj, inDialog, true
      /* allowHidden */
      );
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
        inDialog
      };
      const originalStateCardType = Object(_home_assistant_polymer_src_common_entity_state_card_type_ts__WEBPACK_IMPORTED_MODULE_3__["default"])(hass, stateObj);
      let customStateCardType;
      const secondaryStateCardType = stateObj.attributes.state_card_custom_ui_secondary;

      if (domain === 'light' && this.sliderEligible_(domain, stateObj, inDialog)) {
        Object.assign(params, {
          controlElement: 'ha-entity-toggle',
          serviceMin: 'turn_off',
          serviceMax: 'turn_on',
          valueName: 'brightness',
          domain
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
          domain
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
          domain
        });
        customStateCardType = 'state-card-with-slider';
      } else if (TYPE_TO_CONTROL[originalStateCardType] !== undefined) {
        params.controlElement = TYPE_TO_CONTROL[originalStateCardType];
        customStateCardType = 'state-card-without-slider';
      } else if (stateObj.attributes.show_last_changed && !SHOW_LAST_CHANGED_BLACKLISTED_CARDS.includes(originalStateCardType)) {
        params.inDialog = true;
      }

      if (stateObj.state === 'unavailable') {
        params.controlElement = '';
      }

      if (stateObj.attributes.control_element !== undefined) {
        params.controlElement = stateObj.attributes.control_element;
      }

      Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_ts__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (secondaryStateCardType || customStateCardType || `STATE-CARD-${originalStateCardType}`).toUpperCase(), params);
    }

  }

  customElements.define('state-card-custom-ui', StateCardCustomUi);
}

if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(() => loadCustomUI());
}

/***/ }),

/***/ "./src/elements/state-card-with-slider.js":
/*!************************************************!*\
  !*** ./src/elements/state-card-with-slider.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _cui_base_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cui-base-element.js */ "./src/elements/cui-base-element.js");
/* harmony import */ var _dynamic_with_extra_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-with-extra.js */ "./src/elements/dynamic-with-extra.js");
/* harmony import */ var _ha_themed_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-themed-slider.js */ "./src/elements/ha-themed-slider.js");





function loadCustomUI() {
  /**
   * @extends HTMLElement
   */
  class StateCardWithSlider extends Object(_cui_base_element_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Polymer.Element) {
    static get template() {
      return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
        nameOn: {
          type: String,
          value: 'on'
        },
        min: {
          type: Number,
          value: 0
        },
        max: {
          type: Number,
          value: 255
        },
        sliderValue: {
          type: Number,
          value: 0
        },
        disableOffWhenMin: Boolean,
        mode: String,
        stretchSlider: {
          type: Boolean,
          value: false
        },
        breakSlider: {
          type: Boolean,
          value: false
        },
        hideSlider: {
          type: Boolean,
          value: false
        },
        lineTooLong: {
          type: Boolean,
          value: false
        },
        minLineBreak: Number,
        maxLineBreak: Number,
        showSlider: {
          type: Number,
          computed: '_showSlider(inDialog, stateObj, hideSlider)'
        }
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
      return ['stateObjChanged(stateObj, nameOn, valueName)'];
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
        breakSlider: (this.mode === 'break-slider' || this.mode === 'hide-slider') && this.lineTooLong
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
          breakSlider: true
        });
        return;
      }

      const prevBreakSlider = this.breakSlider;
      const prevHideSlider = this.hideSlider;
      this.setProperties({
        lineTooLong: false,
        hideSlider: false,
        breakSlider: false
      });
      const {
        container
      } = this.$;
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
      const param = {
        entity_id: this.stateObj.entity_id
      };
      if (Number.isNaN(value)) return;
      let target = this.root.querySelector('#slider');

      if (ev.target !== target) {
        // No Shadow DOM - we have access to original target.
        ({
          target
        } = ev);
      } else if (ev.path) {
        [target] = ev.path;
      } else if (ev.composedPath) {
        [target] = ev.composedPath();
      }

      if (value === 0 || value <= target.min && !this.disableOffWhenMin) {
        this.hass.callService(this.domain, this.serviceMin, param);
      } else {
        param[this.setValueName || this.valueName] = value;
        this.hass.callService(this.domain, this.serviceMax, param);
      }
    }

    stateObjChanged(stateObj, nameOn, valueName) {
      const obj = {
        sliderValue: this.isOn(stateObj, nameOn) ? stateObj.attributes[valueName] : 0
      };

      if (stateObj) {
        Object.assign(obj, {
          minLineBreak: 0,
          maxLineBreak: 999,
          hideSlider: false,
          breakSlider: false,
          lineTooLong: false,
          mode: stateObj.attributes.state_card_mode,
          stretchSlider: !!stateObj.attributes.stretch_slider
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

/***/ }),

/***/ "./src/elements/state-card-without-slider.js":
/*!***************************************************!*\
  !*** ./src/elements/state-card-without-slider.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _cui_base_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cui-base-element.js */ "./src/elements/cui-base-element.js");
/* harmony import */ var _dynamic_with_extra_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-with-extra.js */ "./src/elements/dynamic-with-extra.js");




function loadCustomUI() {
  /**
   * @extends HTMLElement
   */
  class StateCardWithoutSlider extends Object(_cui_base_element_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Polymer.Element) {
    static get template() {
      return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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

/***/ }),

/***/ "./src/entrypoints/scripts.js":
/*!************************************!*\
  !*** ./src/entrypoints/scripts.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_state_card_custom_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/state-card-custom-ui.js */ "./src/elements/state-card-custom-ui.js");


/***/ }),

/***/ "./src/utils/hass-attribute-util.js":
/*!******************************************!*\
  !*** ./src/utils/hass-attribute-util.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_assistant_polymer_src_util_hass_attributes_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home-assistant-polymer/src/util/hass-attributes-util.js */ "../home-assistant-polymer/src/util/hass-attributes-util.js");

window.hassAttributeUtil = window.hassAttributeUtil || {};
const SUPPORTED_SLIDER_MODES = ['single-line', 'break-slider', 'break-slider-toggle', 'hide-slider', 'no-slider'];
const customUiAttributes = {
  group: undefined,
  device: undefined,
  templates: undefined,
  state: undefined,
  _stateDisplay: undefined,
  control_element: {
    type: 'string'
  },
  state_card_mode: {
    type: 'array',
    options: {
      light: SUPPORTED_SLIDER_MODES.concat('badges'),
      cover: SUPPORTED_SLIDER_MODES.concat('badges'),
      climate: SUPPORTED_SLIDER_MODES.concat('badges'),
      '*': ['badges']
    }
  },
  state_card_custom_ui_secondary: {
    type: 'string'
  },
  badges_list: {
    type: 'json'
  },
  show_last_changed: {
    type: 'boolean'
  },
  hide_control: {
    type: 'boolean'
  },
  extra_data_template: {
    type: 'string'
  },
  extra_badge: {
    type: 'json'
  },
  stretch_slider: {
    type: 'boolean'
  },
  slider_theme: {
    type: 'json'
  },
  theme: {
    type: 'string'
  },
  confirm_controls: {
    type: 'boolean'
  },
  confirm_controls_show_lock: {
    type: 'boolean'
  },
  hide_in_default_view: {
    type: 'boolean'
  },
  icon_color: {
    type: 'string'
  }
};
window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = _home_assistant_polymer_src_util_hass_attributes_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].LOGIC_STATE_ATTRIBUTES;
window.hassAttributeUtil.UNKNOWN_TYPE = _home_assistant_polymer_src_util_hass_attributes_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].UNKNOWN_TYPE;
Object.assign(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES, customUiAttributes);

/***/ }),

/***/ "./src/utils/hooks.js":
/*!****************************!*\
  !*** ./src/utils/hooks.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts */ "../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _home_assistant_polymer_src_common_entity_compute_state_domain_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/compute_state_domain.ts */ "../home-assistant-polymer/src/common/entity/compute_state_domain.ts");
/* harmony import */ var _home_assistant_polymer_src_common_entity_get_view_entities_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/get_view_entities.ts */ "../home-assistant-polymer/src/common/entity/get_view_entities.ts");
/* harmony import */ var _elements_ha_config_custom_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/ha-config-custom-ui.js */ "./src/elements/ha-config-custom-ui.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version.js */ "./src/utils/version.js");
/* harmony import */ var _hass_attribute_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hass-attribute-util.js */ "./src/utils/hass-attribute-util.js");






window.customUI = window.customUI || {
  SUPPORTED_SLIDER_MODES: ['single-line', 'break-slider', 'break-slider-toggle', 'hide-slider', 'no-slider'],

  domHost(elem) {
    if (elem === document) return null;
    const root = elem.getRootNode();
    return root instanceof DocumentFragment ?
    /** @type {ShadowRoot} */
    root.host : root;
  },

  lightOrShadow(elem, selector) {
    return elem.shadowRoot ? elem.shadowRoot.querySelector(selector) : elem.querySelector(selector);
  },

  getElementHierarchy(root, hierarchy) {
    if (root === null) return null;
    const elem = hierarchy.shift();

    if (elem) {
      return window.customUI.getElementHierarchy(window.customUI.lightOrShadow(root, elem), hierarchy);
    }

    return root;
  },

  getContext(elem) {
    if (elem._context === undefined) {
      elem._context = [];

      for (let element = elem.tagName === 'HA-ENTITIES-CARD' ? window.customUI.domHost(elem) : elem; element; element = window.customUI.domHost(element)) {
        switch (element.tagName) {
          case 'HA-ENTITIES-CARD':
            if (element.groupEntity) {
              elem._context.push(element.groupEntity.entity_id);
            } else if (element.groupEntity === false && element.states && element.states.length) {
              elem._context.push(`group.${Object(_home_assistant_polymer_src_common_entity_compute_state_domain_ts__WEBPACK_IMPORTED_MODULE_1__["default"])(element.states[0])}`);
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
    context.forEach(c => {
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
    Object.keys(attributes.templates).forEach(key => {
      const template = attributes.templates[key];

      if (template.match(/\b(entities|hass)\b/)) {
        hasGlobal = true;
      }

      const value = window.customUI.computeTemplate(template, hass, states, stateObj, attributes, stateObj.untemplated_attributes && stateObj.untemplated_attributes[key] || attributes[key], stateObj.untemplated_state || stateObj.state); // In case of null don't set the value.

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
    } // Operating on context-aware attributes. Return shallow copy of object.


    return Object.assign({}, stateObj);
  },

  maybeApplyTemplates(hass, states, stateObj) {
    const newResult = window.customUI.maybeApplyTemplateAttributes(hass, states, stateObj, stateObj.attributes);
    let hasChanges = newResult !== stateObj;

    function checkAttributes(obj) {
      if (!obj) return;
      Object.values(obj).forEach(attributes => {
        const result = window.customUI.maybeApplyTemplateAttributes(hass, states, newResult, attributes);
        hasChanges |= result !== newResult;
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
      last_changed: stateObj.last_changed
    };
  },

  maybeChangeObject(elem, stateObj, inDialog, allowHidden) {
    if (inDialog) return stateObj;
    let obj = window.customUI.maybeChangeObjectByDevice(stateObj);
    obj = window.customUI.maybeChangeObjectByGroup(elem, obj);
    obj = window.customUI.maybeApplyTemplateAttributes(elem.hass, elem.hass.states, obj, obj.attributes);

    if (obj !== stateObj && obj.attributes.hidden && allowHidden) {
      return null;
    }

    return obj;
  },

  fixGroupTitles() {
    const homeAssistantMain = window.customUI.getElementHierarchy(document, ['home-assistant', 'home-assistant-main']);

    if (homeAssistantMain === null) {
      // DOM not ready. Wait 1 second.
      window.setTimeout(window.customUI.fixGroupTitles, 1000);
      return;
    }

    const haCards = window.customUI.getElementHierarchy(homeAssistantMain, ['partial-cards', 'ha-cards[view-visible]']);
    if (haCards === null) return;
    const main = window.customUI.lightOrShadow(haCards, '.main') || haCards.$.main;
    const cards = main.querySelectorAll('ha-entities-card');
    cards.forEach(card => {
      if (card.groupEntity) {
        const obj = window.customUI.maybeChangeObject(card, card.groupEntity, false
        /* inDialog */
        , false
        /* allowHidden */
        );

        if (obj !== card.groupEntity && obj.attributes.friendly_name) {
          const nameElem = window.customUI.lightOrShadow(card, '.name');
          nameElem.textContent = obj.attributes.friendly_name;
        }
      }
    });
  },

  controlColumns(columns) {
    const partialCards = window.customUI.getElementHierarchy(document, ['home-assistant', 'home-assistant-main', 'partial-cards']);

    if (partialCards === null) {
      // DOM not ready. Wait 1 second.
      window.setTimeout(window.customUI.controlColumns.bind(null, columns), 1000);
      return;
    } // Function renamed from handleWindowChange to _updateColumns on 3.7.18


    const f = partialCards.handleWindowChange || partialCards._updateColumns;
    partialCards.mqls.forEach(mql => {
      mql.removeListener(f);
    });
    partialCards.mqls = columns.map(width => {
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
        customizer.attributes.hide_attributes.forEach(attr => {
          if (!Object.prototype.hasOwnProperty.call(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES, attr)) {
            window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[attr] = undefined;
          }
        });
      }
    }
  },

  updateConfigPanel() {
    if (!window.location.pathname.startsWith('/config')) return;
    const haPanelConfig = window.customUI.getElementHierarchy(document, ['home-assistant', 'home-assistant-main', 'partial-panel-resolver', 'ha-panel-config']);

    if (!haPanelConfig) {
      // DOM not ready. Wait 100ms.
      window.setTimeout(window.customUI.updateConfigPanel, 100);
      return;
    }

    const haConfigNavigation = window.customUI.getElementHierarchy(haPanelConfig, ['ha-config-dashboard', 'ha-config-navigation']);

    if (haConfigNavigation) {
      // HaConfigNavigation started using localize on 21.01.2018
      if (haConfigNavigation.localize && !haConfigNavigation.cuiPatch) {
        haConfigNavigation.cuiPatch = true;
        haConfigNavigation._originalComputeLoaded = haConfigNavigation._computeLoaded;
        haConfigNavigation._originalComputeCaption = haConfigNavigation._computeCaption;
        haConfigNavigation._originalComputeDescription = haConfigNavigation._computeDescription;

        haConfigNavigation._computeLoaded = (hass, page) => page === 'customui' || haConfigNavigation._originalComputeLoaded(hass, page);

        haConfigNavigation._computeCaption = (page, localize) => page === 'customui' ? 'Custom UI' : haConfigNavigation._originalComputeCaption(page, localize);

        haConfigNavigation._computeDescription = (page, localize) => page === 'customui' ? 'SetUI tweaks' : haConfigNavigation._originalComputeDescription(page, localize);
      }

      if (!haConfigNavigation.pages.some(conf => conf === 'customui' || conf.domain === 'customui')) {
        haConfigNavigation.push('pages', haConfigNavigation.localize ? 'customui' : {
          domain: 'customui',
          caption: 'Custom UI',
          description: 'Set UI tweaks.',
          loaded: true
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
          load: () => Promise.resolve()
        }; // CustomUI panel is the entrypoint, so we need to reload the page.

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
        const {
          hass
        } = this;

        if (obj.states) {
          Object.keys(obj.states).forEach(key => {
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
        main._updateHass({
          states: main.hass.states
        });
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
        Object.values(hass.states).forEach(entity => {
          if (entity.attributes && entity.attributes.hide_in_default_view) {
            const excludeEntityId = entity.entity_id;
            if (excludes[excludeEntityId]) return;
            excludes[excludeEntityId] = entity;

            if (entity.attributes.view) {
              const viewEntities = Object(_home_assistant_polymer_src_common_entity_get_view_entities_ts__WEBPACK_IMPORTED_MODULE_2__["default"])(hass.states, entity);
              Object.keys(viewEntities).filter(id => viewEntities[id].attributes.hide_in_default_view !== false).forEach(id => {
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
            if (this.stateObj && this.stateObj.attributes && this.stateObj.attributes.action_name) {
              return this.stateObj.attributes.action_name;
            }

            return this.__data.localize(v);
          }

          return customLocalize;
        },

        set() {}

      });
    });
  },

  // Allows theming "regular" top badges.
  installHaStateLabelBadge() {
    customElements.whenDefined('ha-state-label-badge').then(() => {
      const haStateLabelBadge = customElements.get('ha-state-label-badge');
      if (!haStateLabelBadge || !haStateLabelBadge.prototype.stateChanged) return; // Use named function to preserve 'this'.

      haStateLabelBadge.prototype.stateChanged = function update(stateObj) {
        // TODO: Call window.customUI.maybeChangeObject
        if (stateObj.attributes.theme) {
          if (this.hass.themes === null) {
            this.hass._themeWaiters = this.hass._themeWaiters || [];

            this.hass._themeWaiters.push(this);
          } else {
            Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(this, this.hass.themes || {
              default_theme: 'default',
              themes: {}
            }, stateObj.attributes.theme || 'default');
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
        const originalUpdateIconAppearance = stateBadge.prototype._updateIconAppearance; // Use named function to preserve 'this'.

        stateBadge.prototype._updateIconAppearance = function customUpdateIconAppearance(stateObj) {
          if (stateObj.attributes.icon_color && !stateObj.attributes.entity_picture) {
            this.style.backgroundImage = '';
            Object.assign(this.$.icon.style, {
              color: stateObj.attributes.icon_color,
              filter: ''
            });
          } else {
            originalUpdateIconAppearance.call(this, stateObj);
          }
        };
      } else if (stateBadge.prototype.updated) {
        const originalUpdated = stateBadge.prototype.updated; // Use named function to preserve 'this'.

        stateBadge.prototype.updated = function customUpdated(changedProps) {
          if (!changedProps.has('stateObj')) return;
          const {
            stateObj
          } = this;

          if (stateObj.attributes.icon_color && !stateObj.attributes.entity_picture) {
            this.style.backgroundImage = '';
            Object.assign(this._icon.style, {
              color: stateObj.attributes.icon_color,
              filter: ''
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
      if (!haAttributes || !haAttributes.prototype.computeFiltersArray || !window.hassAttributeUtil) return; // Use named function to preserve 'this'.

      haAttributes.prototype.computeFiltersArray = function customComputeFiltersArray(extraFilters) {
        return Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).concat(extraFilters ? extraFilters.split(',') : []);
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
        haFormCustomize.prototype._computeSingleAttribute = function customComputeSingleAttribute(key, value, secondary) {
          const config = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[key] || {
            type: window.hassAttributeUtil.UNKNOWN_TYPE
          };
          return this._initOpenObject(key, config.type === 'json' ? JSON.stringify(value) : value, secondary, config);
        };
      }

      if (haFormCustomize.prototype.getNewAttributesOptions) {
        // Use named function to preserve 'this'.
        haFormCustomize.prototype.getNewAttributesOptions = function customgetNewAttributesOptions(localAttributes, globalAttributes, existingAttributes, newAttributes) {
          const knownKeys = Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).filter(key => {
            const conf = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[key];
            return conf && (!conf.domains || !this.entity || conf.domains.includes(Object(_home_assistant_polymer_src_common_entity_compute_state_domain_ts__WEBPACK_IMPORTED_MODULE_1__["default"])(this.entity)));
          }).filter(this.filterFromAttributes(localAttributes)).filter(this.filterFromAttributes(globalAttributes)).filter(this.filterFromAttributes(existingAttributes)).filter(this.filterFromAttributes(newAttributes));
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

    console.log(`Loaded CustomUI ${_version_js__WEBPACK_IMPORTED_MODULE_4__["default"]}`);
    /* eslint-enable no-console */

    if (!window.CUSTOM_UI_LIST) {
      window.CUSTOM_UI_LIST = [];
    }

    window.CUSTOM_UI_LIST.push({
      name: 'CustomUI',
      version: _version_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      url: 'https://github.com/andrey-git/home-assistant-custom-ui'
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
    const functionBody = template.indexOf('return') >= 0 ? template : `return \`${template}\`;`;

    try {
      /* eslint-disable no-new-func */
      const func = new Function('hass', 'entities', 'entity', 'attributes', 'attribute', 'state', functionBody);
      /* eslint-enable no-new-func */

      return func(hass, entities, entity, attributes, attribute, state);
    } catch (e) {
      /* eslint-disable no-console */
      if (e instanceof SyntaxError || e instanceof ReferenceError) {
        console.warn(`${e.name}: ${e.message} in template ${functionBody}`);
        return null;
      }
      /* eslint-enable no-console */


      throw e;
    }
  }

};
window.customUI.init();

/***/ }),

/***/ "./src/utils/version.js":
/*!******************************!*\
  !*** ./src/utils/version.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('20190518');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUudHMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvY3NzLXRhZy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3VwZGF0aW5nLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy9saXQtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZG9tLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL21vZGlmeS10ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9wYXJ0LnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3BhcnRzLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9zaGFkeS1yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvdGVtcGxhdGUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi90ZW1wbGF0ZS1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vL3NyYy9saXQtaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvY3VpLWJhc2UtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZHluYW1pYy1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLXdpdGgtZXh0cmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2hhLWNvbmZpZy1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2hhLXRoZW1lZC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtY3VzdG9tLXVpLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9zdGF0ZS1jYXJkLXdpdGgtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9zdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9oYXNzLWF0dHJpYnV0ZS11dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdmVyc2lvbi5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0RPTUFJTl9JQ09OIiwiREVGQVVMVF9QQU5FTCIsIkRPTUFJTlNfV0lUSF9DQVJEIiwiRE9NQUlOU19XSVRIX01PUkVfSU5GTyIsIkRPTUFJTlNfSElERV9NT1JFX0lORk8iLCJET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZIiwiU1RBVEVTX09GRiIsIkRPTUFJTlNfVE9HR0xFIiwiU2V0IiwiVU5JVF9DIiwiVU5JVF9GIiwiREVGQVVMVF9WSUVXX0VOVElUWV9JRCIsImFwcGx5VGhlbWVzT25FbGVtZW50IiwiZWxlbWVudCIsInRoZW1lcyIsImxvY2FsVGhlbWUiLCJ1cGRhdGVNZXRhIiwiX3RoZW1lcyIsInRoZW1lTmFtZSIsImRlZmF1bHRfdGhlbWUiLCJzdHlsZXMiLCJ0aGVtZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJlZml4ZWRLZXkiLCJ1cGRhdGVTdHlsZXMiLCJ3aW5kb3ciLCJTaGFkeUNTUyIsInN0eWxlU3VidHJlZSIsIm1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVtZUNvbG9yIiwiZHluYW1pY0NvbnRlbnRVcGRhdGVyIiwicm9vdCIsIm5ld0VsZW1lbnRUYWciLCJhdHRyaWJ1dGVzIiwicm9vdEVsIiwiY3VzdG9tRWwiLCJsYXN0Q2hpbGQiLCJ0YWdOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwiY2FuVG9nZ2xlRG9tYWluIiwiaGFzcyIsImRvbWFpbiIsInNlcnZpY2VzIiwiY2FuVG9nZ2xlU3RhdGUiLCJzdGF0ZU9iaiIsInN0YXRlIiwiY29tcHV0ZURvbWFpbiIsImVudGl0eUlkIiwic3Vic3RyIiwiaW5kZXhPZiIsImNvbXB1dGVTdGF0ZURvbWFpbiIsImVudGl0eV9pZCIsImdldEdyb3VwRW50aXRpZXMiLCJlbnRpdGllcyIsImdyb3VwIiwicmVzdWx0IiwiZW50aXR5IiwiZ2V0Vmlld0VudGl0aWVzIiwidmlldyIsInZpZXdFbnRpdGllcyIsImhpZGRlbiIsImdyb3VwRW50aXRpZXMiLCJnckVudGl0eUlkIiwiZ3JFbnRpdHkiLCJzdGF0ZUNhcmRUeXBlIiwiaW5jbHVkZXMiLCJjb250cm9sIiwic3VwcG9ydHNGZWF0dXJlIiwiZmVhdHVyZSIsInN1cHBvcnRlZF9mZWF0dXJlcyIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiRE9NQUlOX0RFVklDRV9DTEFTUyIsImJpbmFyeV9zZW5zb3IiLCJjb3ZlciIsInNlbnNvciIsInN3aXRjaCIsIlVOS05PV05fVFlQRSIsIkFERF9UWVBFIiwiVFlQRV9UT19UQUciLCJzdHJpbmciLCJqc29uIiwiaWNvbiIsImJvb2xlYW4iLCJhcnJheSIsIkxPR0lDX1NUQVRFX0FUVFJJQlVURVMiLCJlbnRpdHlfcGljdHVyZSIsInVuZGVmaW5lZCIsImZyaWVuZGx5X25hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJlbXVsYXRlZF9odWUiLCJkb21haW5zIiwiZW11bGF0ZWRfaHVlX25hbWUiLCJoYWFza2FfaGlkZGVuIiwiaGFhc2thX25hbWUiLCJob21lYnJpZGdlX2hpZGRlbiIsImhvbWVicmlkZ2VfbmFtZSIsImF0dHJpYnV0aW9uIiwiY3VzdG9tX3VpX21vcmVfaW5mbyIsImN1c3RvbV91aV9zdGF0ZV9jYXJkIiwiZGV2aWNlX2NsYXNzIiwib3B0aW9ucyIsImFzc3VtZWRfc3RhdGUiLCJpbml0aWFsX3N0YXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ0b1N0cmluZyIsImxpdGVyYWxWYWx1ZSIsIkVycm9yIiwiaHRtbFZhbHVlIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsImh0bWwiLCJzdHJpbmdzIiwidmFsdWVzIiwidGVtcGxhdGUiLCJyZWR1Y2UiLCJhY2MiLCJ2IiwiaWR4IiwiaHRtbExpdGVyYWwiLCJzdXBlckNsYXNzIiwiQ3VpQmFzZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiaW5EaWFsb2ciLCJCb29sZWFuIiwiY29udHJvbEVsZW1lbnQiLCJTdHJpbmciLCJleHRyYSIsIkFycmF5IiwiY29tcHV0ZWQiLCJjb21wdXRlRXh0cmEiLCJleHRyYXMiLCJleHRyYV9kYXRhX3RlbXBsYXRlIiwiaXNBcnJheSIsIm1hcCIsImN1c3RvbVVJIiwiY29tcHV0ZVRlbXBsYXRlIiwic3RhdGVzIiwiZmlsdGVyIiwic2hvd0xhc3RDaGFuZ2VkIiwibGVuZ3RoIiwic2hvd19sYXN0X2NoYW5nZWQiLCJoYXNFeHRyYSIsImxvYWRDdXN0b21VSSIsIkR5bmFtaWNFbGVtZW50IiwiUG9seW1lciIsIkVsZW1lbnQiLCJlbGVtZW50TmFtZSIsIm9ic2VydmVycyIsIm9ic2VydmVyRnVuYyIsInRvVXBwZXJDYXNlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJnZXQiLCJ3aGVuRGVmaW5lZCIsInRoZW4iLCJEeW5hbWljV2l0aEV4dHJhIiwiZXh0cmFPYmoiLCJfYXR0YWNoZWQiLCJleHRyYU9ialZpc2libGUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiX2lzQXR0YWNoZWQiLCJhdHRhY2hlZCIsImV4dHJhX2JhZGdlIiwiZXh0cmFCYWRnZXMiLCJleHRyYUJhZGdlIiwiYXNzaWduIiwibWF5YmVDaGFuZ2VPYmplY3QiLCJhdHRyaWJ1dGUiLCJ1bml0IiwiYmxhY2tsaXN0IiwiYmxhY2tsaXN0X3N0YXRlcyIsInNvbWUiLCJSZWdFeHAiLCJ0ZXN0IiwiX2VudGl0eURpc3BsYXkiLCJjb21wdXRlRXh0cmFWaXNpYmxlIiwiZXh0cmFDbGFzcyIsIl9zaG93Q29udHJvbCIsImhpZGVfY29udHJvbCIsImNvbXB1dGVTdGF0ZURpc3BsYXkiLCJoYUxvY2FsaXplIiwibG9jYWxpemUiLCJpc0NvbmZpcm1Db250cm9scyIsImNvbmZpcm1fY29udHJvbHMiLCJjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jayIsImNsaWNrSGFuZGxlciIsImUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJsb2NrIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJhcHBseVRoZW1lcyIsImV4dHJhRG9tQ2hhbmdlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtIiwiSGFDb25maWdDdXN0b21VaSIsInJlbmRlciIsIl9iYWNrSGFuZGxlciIsImlzV2lkZSIsIm5hbWUiLCJyZWZsZWN0Iiwib2JzZXJ2ZXIiLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJvbGR2YWwiLCJuZXd2YWwiLCJuYW1lQ2hhbmdlZCIsImdldE5hbWUiLCJzZXROYW1lIiwiaGlzdG9yeSIsImJhY2siLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIkhhVGhlbWVkU2xpZGVyIiwicmVhZHkiLCJkaXNhYmxlT2ZmV2hlbk1pbiIsIl9jb21wdXRlQXR0cmlidXRlIiwiY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCIsImRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCIsIiQiLCJzbGlkZXIiLCJfa2V5QmluZGluZ3MiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJwaW4iLCJpc09uIiwibm90aWZ5IiwiX3RoZW1lZE1pbiIsIl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJhdHRyIiwiZGVmIiwiY29tcHV0ZUNsYXNzIiwidGhlbWVkTWluIiwidmFsdWVDaGFuZ2VkIiwiZXYiLCJ0YXJnZXQiLCJTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUyIsIkRPTUFJTl9UT19TTElERVJfU1VQUE9SVCIsImxpZ2h0IiwiY2xpbWF0ZSIsIlRZUEVfVE9fQ09OVFJPTCIsInRvZ2dsZSIsImRpc3BsYXkiLCJTdGF0ZUNhcmRDdXN0b21VaSIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX2NvbnRhaW5lciIsInNldFByb3BlcnR5IiwiaW5wdXRDaGFuZ2VkIiwibWFyZ2luIiwicGFkZGluZyIsImJhZGdlTW9kZSIsImlkIiwiY29uc29sZSIsIndhcm4iLCJiYWRnZXNfbGlzdCIsInB1c2giLCJwYXJhbXMiLCJ3aWR0aCIsImZvbnRTaXplIiwiY2xlYW5CYWRnZVN0eWxlIiwibW9kaWZpZWRPYmoiLCJ0aGVtZVRhcmdldCIsIm1heWJlSGlkZUVudGl0eSIsInNsaWRlckVsaWdpYmxlXyIsIm9iaiIsInN0YXRlX2NhcmRfbW9kZSIsInJlZ3VsYXJNb2RlXyIsIm9yaWdpbmFsU3RhdGVDYXJkVHlwZSIsImN1c3RvbVN0YXRlQ2FyZFR5cGUiLCJzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIiwic3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5Iiwic2VydmljZU1pbiIsInNlcnZpY2VNYXgiLCJ2YWx1ZU5hbWUiLCJzZXRWYWx1ZU5hbWUiLCJuYW1lT24iLCJtaW5fdGVtcCIsIm1heF90ZW1wIiwiY29udHJvbF9lbGVtZW50IiwiU3RhdGVDYXJkV2l0aFNsaWRlciIsInNsaWRlclZhbHVlIiwibW9kZSIsInN0cmV0Y2hTbGlkZXIiLCJicmVha1NsaWRlciIsImhpZGVTbGlkZXIiLCJsaW5lVG9vTG9uZyIsIm1pbkxpbmVCcmVhayIsIm1heExpbmVCcmVhayIsInNob3dTbGlkZXIiLCJfb25Jcm9uUmVzaXplIiwiYmluZCIsIl9pc0Nvbm5lY3RlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfd2FpdEZvckxheW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfc2V0TW9kZSIsIl9mcmFtZUlkIiwicmVhZHlUb0NvbXB1dGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwcmV2QnJlYWtTbGlkZXIiLCJwcmV2SGlkZVNsaWRlciIsImNvbnRhaW5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJjb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdGF0ZUhlaWdodCIsIl9jb21wdXRlV3JhcENsYXNzIiwiX3Nob3dTbGlkZXIiLCJzbGlkZXJDaGFuZ2VkIiwicGFyc2VJbnQiLCJwYXJhbSIsImlzTmFOIiwicGF0aCIsImNvbXBvc2VkUGF0aCIsImNhbGxTZXJ2aWNlIiwic3RhdGVPYmpDaGFuZ2VkIiwic3RyZXRjaF9zbGlkZXIiLCJTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIiwiU1VQUE9SVEVEX1NMSURFUl9NT0RFUyIsImN1c3RvbVVpQXR0cmlidXRlcyIsImRldmljZSIsInRlbXBsYXRlcyIsIl9zdGF0ZURpc3BsYXkiLCJjb25jYXQiLCJzbGlkZXJfdGhlbWUiLCJoaWRlX2luX2RlZmF1bHRfdmlldyIsImljb25fY29sb3IiLCJkb21Ib3N0IiwiZ2V0Um9vdE5vZGUiLCJEb2N1bWVudEZyYWdtZW50IiwiaG9zdCIsImxpZ2h0T3JTaGFkb3ciLCJzZWxlY3RvciIsInNoYWRvd1Jvb3QiLCJnZXRFbGVtZW50SGllcmFyY2h5IiwiaGllcmFyY2h5Iiwic2hpZnQiLCJnZXRDb250ZXh0IiwiX2NvbnRleHQiLCJncm91cEVudGl0eSIsInJldmVyc2UiLCJmaW5kTWF0Y2giLCJmaW5kIiwib3B0aW9uIiwibWF0Y2giLCJtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlIiwiYXBwbHlBdHRyaWJ1dGVzIiwibWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwIiwiY29udGV4dCIsImMiLCJfc2V0S2VlcCIsIl9jdWlfa2VlcCIsIm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiaGFzR2xvYmFsIiwiaGFzQ2hhbmdlcyIsInVudGVtcGxhdGVkX2F0dHJpYnV0ZXMiLCJ1bnRlbXBsYXRlZF9zdGF0ZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInVudGVtcGxhdGVkX3N0YXRlRGlzcGxheSIsIm1heWJlQXBwbHlUZW1wbGF0ZXMiLCJuZXdSZXN1bHQiLCJjaGVja0F0dHJpYnV0ZXMiLCJsYXN0X2NoYW5nZWQiLCJhbGxvd0hpZGRlbiIsImZpeEdyb3VwVGl0bGVzIiwiaG9tZUFzc2lzdGFudE1haW4iLCJoYUNhcmRzIiwibWFpbiIsImNhcmRzIiwiY2FyZCIsIm5hbWVFbGVtIiwidGV4dENvbnRlbnQiLCJjb250cm9sQ29sdW1ucyIsImNvbHVtbnMiLCJwYXJ0aWFsQ2FyZHMiLCJmIiwiaGFuZGxlV2luZG93Q2hhbmdlIiwiX3VwZGF0ZUNvbHVtbnMiLCJtcWxzIiwibXFsIiwicmVtb3ZlTGlzdGVuZXIiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ1c2VDdXN0b21pemVyIiwiY3VzdG9taXplciIsImhpZGVfYXR0cmlidXRlcyIsInVwZGF0ZUNvbmZpZ1BhbmVsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJoYVBhbmVsQ29uZmlnIiwiaGFDb25maWdOYXZpZ2F0aW9uIiwiY3VpUGF0Y2giLCJfb3JpZ2luYWxDb21wdXRlTG9hZGVkIiwiX2NvbXB1dGVMb2FkZWQiLCJfb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiIsIl9jb21wdXRlQ2FwdGlvbiIsIl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiIsIl9jb21wdXRlRGVzY3JpcHRpb24iLCJwYWdlIiwicGFnZXMiLCJjb25mIiwiY2FwdGlvbiIsImxvYWRlZCIsImdldEhhQ29uZmlnQ3VzdG9tVWkiLCJoYUNvbmZpZ0N1c3RvbVVpIiwiaXJvblBhZ2VzIiwibGFzdEVsZW1lbnRDaGlsZCIsInNlbGVjdCIsInZpc2libGUiLCJyb3V0ZXJPcHRpb25zIiwicm91dGVzIiwiY3VzdG9tdWkiLCJ0YWciLCJsb2FkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1cGRhdGUiLCJNYXAiLCJpbnN0YWxsU3RhdGVzSG9vayIsImhvbWVBc3Npc3RhbnQiLCJfdXBkYXRlSGFzcyIsIm9yaWdpbmFsVXBkYXRlIiwibmV3RW50aXR5IiwiX3RoZW1lV2FpdGVycyIsIndhaXRlciIsInN0YXRlQ2hhbmdlZCIsImluc3RhbGxQYXJ0aWFsQ2FyZHMiLCJfZGVmYXVsdFZpZXdGaWx0ZXIiLCJleGNsdWRlcyIsImV4Y2x1ZGVFbnRpdHlJZCIsImluc3RhbGxBY3Rpb25OYW1lIiwia2xhc3MiLCJkZWZpbmVQcm9wZXJ0eSIsImN1c3RvbUxvY2FsaXplIiwiYWN0aW9uX25hbWUiLCJfX2RhdGEiLCJzZXQiLCJpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UiLCJoYVN0YXRlTGFiZWxCYWRnZSIsInN0YXJ0SW50ZXJ2YWwiLCJpbnN0YWxsU3RhdGVCYWRnZSIsInN0YXRlQmFkZ2UiLCJfdXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlIiwiY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb2xvciIsInVwZGF0ZWQiLCJvcmlnaW5hbFVwZGF0ZWQiLCJjdXN0b21VcGRhdGVkIiwiY2hhbmdlZFByb3BzIiwiaGFzIiwiX2ljb24iLCJpbnN0YWxsSGFBdHRyaWJ1dGVzIiwiaGFBdHRyaWJ1dGVzIiwiY29tcHV0ZUZpbHRlcnNBcnJheSIsImN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJleHRyYUZpbHRlcnMiLCJzcGxpdCIsImluc3RhbGxIYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemVJbml0RG9uZSIsIl9jb21wdXRlU2luZ2xlQXR0cmlidXRlIiwiY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsInNlY29uZGFyeSIsImNvbmZpZyIsIl9pbml0T3Blbk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwibG9jYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlcyIsImV4aXN0aW5nQXR0cmlidXRlcyIsImtub3duS2V5cyIsImZpbHRlckZyb21BdHRyaWJ1dGVzIiwic29ydCIsImluc3RhbGxDbGFzc0hvb2tzIiwiY2xhc3NJbml0RG9uZSIsImluaXQiLCJpbml0RG9uZSIsInJ1bkhvb2tzIiwibG9nIiwiQ1VTVE9NX1VJX0xJU1QiLCJ2ZXJzaW9uIiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jdGlvbkJvZHkiLCJmdW5jIiwiRnVuY3Rpb24iLCJTeW50YXhFcnJvciIsIlJlZmVyZW5jZUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ08sTUFBTUEsbUJBQW1CLEdBQUcsZUFBNUI7QUFFUDs7QUFDTyxNQUFNQyxhQUFhLEdBQUcsVUFBdEI7QUFFUDs7QUFDTyxNQUFNQyxpQkFBaUIsR0FBRyxDQUMvQixTQUQrQixFQUUvQixPQUYrQixFQUcvQixjQUgrQixFQUkvQixjQUorQixFQUsvQixjQUwrQixFQU0vQixZQU4rQixFQU8vQixNQVArQixFQVEvQixjQVIrQixFQVMvQixPQVQrQixFQVUvQixRQVYrQixFQVcvQixPQVgrQixFQVkvQixRQVorQixFQWEvQixjQWIrQixFQWMvQixTQWQrQixDQUExQjtBQWlCUDs7QUFDTyxNQUFNQyxzQkFBc0IsR0FBRyxDQUNwQyxxQkFEb0MsRUFFcEMsWUFGb0MsRUFHcEMsUUFIb0MsRUFJcEMsU0FKb0MsRUFLcEMsY0FMb0MsRUFNcEMsT0FOb0MsRUFPcEMsS0FQb0MsRUFRcEMsT0FSb0MsRUFTcEMsZUFUb0MsRUFVcEMsZ0JBVm9DLEVBV3BDLE9BWG9DLEVBWXBDLE1BWm9DLEVBYXBDLGNBYm9DLEVBY3BDLFFBZG9DLEVBZXBDLEtBZm9DLEVBZ0JwQyxTQWhCb0MsRUFpQnBDLFFBakJvQyxFQWtCcEMsY0FsQm9DLEVBbUJwQyxTQW5Cb0MsQ0FBL0I7QUFzQlA7O0FBQ08sTUFBTUMsc0JBQXNCLEdBQUcsQ0FDcEMsY0FEb0MsRUFFcEMsY0FGb0MsRUFHcEMsWUFIb0MsRUFJcEMsT0FKb0MsRUFLcEMsU0FMb0MsQ0FBL0I7QUFRUDs7QUFDTyxNQUFNQyw0QkFBNEIsR0FBRyxDQUMxQyxRQUQwQyxFQUUxQyxjQUYwQyxFQUcxQyxlQUgwQyxFQUkxQyxPQUowQyxDQUFyQztBQU9QOztBQUNPLE1BQU1DLFVBQVUsR0FBRyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLEtBQXJCLENBQW5CO0FBRVA7O0FBQ08sTUFBTUMsY0FBYyxHQUFHLElBQUlDLEdBQUosQ0FBUSxDQUNwQyxLQURvQyxFQUVwQyxlQUZvQyxFQUdwQyxPQUhvQyxFQUlwQyxRQUpvQyxFQUtwQyxPQUxvQyxFQU1wQyxZQU5vQyxDQUFSLENBQXZCO0FBU1A7O0FBQ08sTUFBTUMsTUFBTSxHQUFHLElBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUVQOztBQUNPLE1BQU1DLHNCQUFzQixHQUFHLG9CQUEvQixDOzs7Ozs7Ozs7Ozs7O0FDeEZQO0FBQUE7Ozs7Ozs7O0FBUWUsU0FBU0Msb0JBQVQsQ0FDYkMsT0FEYSxFQUViQyxNQUZhLEVBR2JDLFVBSGEsRUFJYkMsVUFBVSxHQUFHLEtBSkEsRUFLYjtBQUNBLE1BQUksQ0FBQ0gsT0FBTyxDQUFDSSxPQUFiLEVBQXNCO0FBQ3BCSixXQUFPLENBQUNJLE9BQVIsR0FBa0IsRUFBbEI7QUFDRDs7QUFDRCxNQUFJQyxTQUFTLEdBQUdKLE1BQU0sQ0FBQ0ssYUFBdkI7O0FBQ0EsTUFBSUosVUFBVSxLQUFLLFNBQWYsSUFBNkJBLFVBQVUsSUFBSUQsTUFBTSxDQUFDQSxNQUFQLENBQWNDLFVBQWQsQ0FBL0MsRUFBMkU7QUFDekVHLGFBQVMsR0FBR0gsVUFBWjtBQUNEOztBQUNELFFBQU1LLE1BQU0sR0FBRyxFQUFFLEdBQUdQLE9BQU8sQ0FBQ0k7QUFBYixHQUFmOztBQUNBLE1BQUlDLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUMzQixVQUFNRyxLQUFLLEdBQUdQLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjSSxTQUFkLENBQWQ7QUFDQUksVUFBTSxDQUFDQyxJQUFQLENBQVlGLEtBQVosRUFBbUJHLE9BQW5CLENBQTRCQyxHQUFELElBQVM7QUFDbEMsWUFBTUMsV0FBVyxHQUFHLE9BQU9ELEdBQTNCO0FBQ0FaLGFBQU8sQ0FBQ0ksT0FBUixDQUFnQlMsV0FBaEIsSUFBK0IsRUFBL0I7QUFDQU4sWUFBTSxDQUFDTSxXQUFELENBQU4sR0FBc0JMLEtBQUssQ0FBQ0ksR0FBRCxDQUEzQjtBQUNELEtBSkQ7QUFLRDs7QUFDRCxNQUFJWixPQUFPLENBQUNjLFlBQVosRUFBMEI7QUFDeEJkLFdBQU8sQ0FBQ2MsWUFBUixDQUFxQlAsTUFBckI7QUFDRCxHQUZELE1BRU8sSUFBSVEsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO0FBQzFCO0FBQ0FELFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsWUFBaEI7QUFBNkI7QUFBNkJqQixXQUExRCxFQUFvRU8sTUFBcEU7QUFDRDs7QUFFRCxNQUFJLENBQUNKLFVBQUwsRUFBaUI7QUFDZjtBQUNEOztBQUVELFFBQU1lLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFiOztBQUNBLE1BQUlGLElBQUosRUFBVTtBQUNSLFFBQUksQ0FBQ0EsSUFBSSxDQUFDRyxZQUFMLENBQWtCLGlCQUFsQixDQUFMLEVBQTJDO0FBQ3pDSCxVQUFJLENBQUNJLFlBQUwsQ0FBa0IsaUJBQWxCLEVBQXFDSixJQUFJLENBQUNLLFlBQUwsQ0FBa0IsU0FBbEIsQ0FBckM7QUFDRDs7QUFDRCxVQUFNQyxVQUFVLEdBQ2RqQixNQUFNLENBQUMsaUJBQUQsQ0FBTixJQUE2QlcsSUFBSSxDQUFDSyxZQUFMLENBQWtCLGlCQUFsQixDQUQvQjtBQUVBTCxRQUFJLENBQUNJLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkJFLFVBQTdCO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7O0FDbEREO0FBQUE7Ozs7QUFJZSxTQUFTQyxxQkFBVCxDQUErQkMsSUFBL0IsRUFBcUNDLGFBQXJDLEVBQW9EQyxVQUFwRCxFQUFnRTtBQUM3RSxRQUFNQyxNQUFNLEdBQUdILElBQWY7QUFDQSxNQUFJSSxRQUFKOztBQUVBLE1BQUlELE1BQU0sQ0FBQ0UsU0FBUCxJQUFvQkYsTUFBTSxDQUFDRSxTQUFQLENBQWlCQyxPQUFqQixLQUE2QkwsYUFBckQsRUFBb0U7QUFDbEVHLFlBQVEsR0FBR0QsTUFBTSxDQUFDRSxTQUFsQjtBQUNELEdBRkQsTUFFTztBQUNMLFFBQUlGLE1BQU0sQ0FBQ0UsU0FBWCxFQUFzQjtBQUNwQkYsWUFBTSxDQUFDSSxXQUFQLENBQW1CSixNQUFNLENBQUNFLFNBQTFCO0FBQ0QsS0FISSxDQUlMO0FBQ0E7OztBQUNBRCxZQUFRLEdBQUdYLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QlAsYUFBYSxDQUFDUSxXQUFkLEVBQXZCLENBQVg7QUFDRDs7QUFFRCxNQUFJTCxRQUFRLENBQUNNLGFBQWIsRUFBNEI7QUFDMUJOLFlBQVEsQ0FBQ00sYUFBVCxDQUF1QlIsVUFBdkI7QUFDRCxHQUZELE1BRU87QUFDTDtBQUNBO0FBQ0FuQixVQUFNLENBQUNDLElBQVAsQ0FBWWtCLFVBQVosRUFBd0JqQixPQUF4QixDQUFpQ0MsR0FBRCxJQUFTO0FBQ3ZDa0IsY0FBUSxDQUFDbEIsR0FBRCxDQUFSLEdBQWdCZ0IsVUFBVSxDQUFDaEIsR0FBRCxDQUExQjtBQUNELEtBRkQ7QUFHRDs7QUFFRCxNQUFJa0IsUUFBUSxDQUFDTyxVQUFULEtBQXdCLElBQTVCLEVBQWtDO0FBQ2hDUixVQUFNLENBQUNTLFdBQVAsQ0FBbUJSLFFBQW5CO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7OztBQzlCYyxTQUFTUyxlQUFULENBQXlCQyxJQUF6QixFQUE4Q0MsTUFBOUMsRUFBOEQ7QUFDM0UsUUFBTUMsUUFBUSxHQUFHRixJQUFJLENBQUNFLFFBQUwsQ0FBY0QsTUFBZCxDQUFqQjs7QUFDQSxNQUFJLENBQUNDLFFBQUwsRUFBZTtBQUNiLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUlELE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ3JCLFdBQU8sVUFBVUMsUUFBakI7QUFDRDs7QUFDRCxNQUFJRCxNQUFNLEtBQUssT0FBZixFQUF3QjtBQUN0QixXQUFPLGdCQUFnQkMsUUFBdkI7QUFDRDs7QUFDRCxTQUFPLGFBQWFBLFFBQXBCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBRUE7QUFFZSxTQUFTQyxjQUFULENBQ2JILElBRGEsRUFFYkksUUFGYSxFQUdiO0FBQ0EsUUFBTUgsTUFBTSxHQUFHLHFFQUFrQixDQUFDRyxRQUFELENBQWpDOztBQUNBLE1BQUlILE1BQU0sS0FBSyxPQUFmLEVBQXdCO0FBQ3RCLFdBQU9HLFFBQVEsQ0FBQ0MsS0FBVCxLQUFtQixJQUFuQixJQUEyQkQsUUFBUSxDQUFDQyxLQUFULEtBQW1CLEtBQXJEO0FBQ0Q7O0FBQ0QsTUFBSUosTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDeEIsV0FBTyx5RUFBZSxDQUFDRyxRQUFELEVBQVcsSUFBWCxDQUF0QjtBQUNEOztBQUVELFNBQU8sa0VBQWUsQ0FBQ0osSUFBRCxFQUFPQyxNQUFQLENBQXRCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNuQmMsU0FBU0ssYUFBVCxDQUF1QkMsUUFBdkIsRUFBaUQ7QUFDOUQsU0FBT0EsUUFBUSxDQUFDQyxNQUFULENBQWdCLENBQWhCLEVBQW1CRCxRQUFRLENBQUNFLE9BQVQsQ0FBaUIsR0FBakIsQ0FBbkIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7OztBQ0REO0FBRWUsU0FBU0Msa0JBQVQsQ0FBNEJOLFFBQTVCLEVBQWtEO0FBQy9ELFNBQU8sK0RBQWEsQ0FBQ0EsUUFBUSxDQUFDTyxTQUFWLENBQXBCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNGYyxTQUFTQyxnQkFBVCxDQUNiQyxRQURhLEVBRWJDLEtBRmEsRUFHYjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxFQUFmO0FBRUFELE9BQUssQ0FBQzFCLFVBQU4sQ0FBaUJ1QixTQUFqQixDQUEyQnhDLE9BQTNCLENBQW9Db0MsUUFBRCxJQUFjO0FBQy9DLFVBQU1TLE1BQU0sR0FBR0gsUUFBUSxDQUFDTixRQUFELENBQXZCOztBQUVBLFFBQUlTLE1BQUosRUFBWTtBQUNWRCxZQUFNLENBQUNDLE1BQU0sQ0FBQ0wsU0FBUixDQUFOLEdBQTJCSyxNQUEzQjtBQUNEO0FBQ0YsR0FORDtBQVFBLFNBQU9ELE1BQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJEO0FBQ0E7QUFHQTtBQUNBO0FBQ2UsU0FBU0UsZUFBVCxDQUNiSixRQURhLEVBRWJLLElBRmEsRUFHQztBQUNkLFFBQU1DLFlBQVksR0FBRyxFQUFyQjtBQUVBRCxNQUFJLENBQUM5QixVQUFMLENBQWdCdUIsU0FBaEIsQ0FBMEJ4QyxPQUExQixDQUFtQ29DLFFBQUQsSUFBYztBQUM5QyxVQUFNUyxNQUFNLEdBQUdILFFBQVEsQ0FBQ04sUUFBRCxDQUF2Qjs7QUFFQSxRQUFJUyxNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDNUIsVUFBUCxDQUFrQmdDLE1BQWpDLEVBQXlDO0FBQ3ZDRCxrQkFBWSxDQUFDSCxNQUFNLENBQUNMLFNBQVIsQ0FBWixHQUFpQ0ssTUFBakM7O0FBRUEsVUFBSSwrREFBYSxDQUFDQSxNQUFNLENBQUNMLFNBQVIsQ0FBYixLQUFvQyxPQUF4QyxFQUFpRDtBQUMvQyxjQUFNVSxhQUFhLEdBQUcsbUVBQWdCLENBQUNSLFFBQUQsRUFBV0csTUFBWCxDQUF0QztBQUVBL0MsY0FBTSxDQUFDQyxJQUFQLENBQVltRCxhQUFaLEVBQTJCbEQsT0FBM0IsQ0FBb0NtRCxVQUFELElBQWdCO0FBQ2pELGdCQUFNQyxRQUFRLEdBQUdGLGFBQWEsQ0FBQ0MsVUFBRCxDQUE5Qjs7QUFFQSxjQUFJLENBQUNDLFFBQVEsQ0FBQ25DLFVBQVQsQ0FBb0JnQyxNQUF6QixFQUFpQztBQUMvQkQsd0JBQVksQ0FBQ0csVUFBRCxDQUFaLEdBQTJCQyxRQUEzQjtBQUNEO0FBQ0YsU0FORDtBQU9EO0FBQ0Y7QUFDRixHQWxCRDtBQW9CQSxTQUFPSixZQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Q7QUFDQTtBQUNBO0FBR2UsU0FBU0ssYUFBVCxDQUNieEIsSUFEYSxFQUViSSxRQUZhLEVBR2I7QUFDQSxNQUFJQSxRQUFRLENBQUNDLEtBQVQsS0FBbUIsYUFBdkIsRUFBc0M7QUFDcEMsV0FBTyxTQUFQO0FBQ0Q7O0FBRUQsUUFBTUosTUFBTSxHQUFHLHFFQUFrQixDQUFDRyxRQUFELENBQWpDOztBQUVBLE1BQUksd0RBQWlCLENBQUNxQixRQUFsQixDQUEyQnhCLE1BQTNCLENBQUosRUFBd0M7QUFDdEMsV0FBT0EsTUFBUDtBQUNEOztBQUNELE1BQ0UsaUVBQWMsQ0FBQ0QsSUFBRCxFQUFPSSxRQUFQLENBQWQsSUFDQUEsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQnNDLE9BQXBCLEtBQWdDLFFBRmxDLEVBR0U7QUFDQSxXQUFPLFFBQVA7QUFDRDs7QUFDRCxTQUFPLFNBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ3hCTSxNQUFNQyxlQUFlLEdBQUcsQ0FDN0J2QixRQUQ2QixFQUU3QndCLE9BRjZCLEtBR2pCO0FBQ1o7QUFDQSxTQUFPLENBQUN4QixRQUFRLENBQUNoQixVQUFULENBQW9CeUMsa0JBQXBCLEdBQTBDRCxPQUEzQyxNQUF3RCxDQUEvRDtBQUNELENBTk0sQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQSxNQUFNRSxpQkFBaUIsR0FBRyxFQUExQjtBQUVBQSxpQkFBaUIsQ0FBQ0MsbUJBQWxCLEdBQXdDO0FBQ3RDQyxlQUFhLEVBQUUsQ0FDYixTQURhLEVBRWIsTUFGYSxFQUdiLGNBSGEsRUFJYixNQUphLEVBS2IsYUFMYSxFQU1iLEtBTmEsRUFPYixNQVBhLEVBUWIsT0FSYSxFQVNiLE1BVGEsRUFVYixVQVZhLEVBV2IsUUFYYSxFQVliLFFBWmEsRUFhYixXQWJhLEVBY2IsU0FkYSxFQWViLE1BZmEsRUFnQmIsT0FoQmEsRUFpQmIsVUFqQmEsRUFrQmIsU0FsQmEsRUFtQmIsUUFuQmEsRUFvQmIsT0FwQmEsRUFxQmIsT0FyQmEsRUFzQmIsV0F0QmEsRUF1QmIsUUF2QmEsQ0FEdUI7QUEwQnRDQyxPQUFLLEVBQUUsQ0FDTCxRQURLLEVBRUwsT0FGSyxFQUdMLFNBSEssRUFJTCxRQUpLLEVBS0wsTUFMSyxFQU1MLFFBTkssRUFPTCxPQVBLLEVBUUwsU0FSSyxFQVNMLFFBVEssQ0ExQitCO0FBcUN0Q0MsUUFBTSxFQUFFLENBQ04sU0FETSxFQUVOLFVBRk0sRUFHTixhQUhNLEVBSU4sYUFKTSxFQUtOLFVBTE0sRUFNTixPQU5NLEVBT04saUJBUE0sQ0FyQzhCO0FBOEN0Q0MsUUFBTSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVg7QUE5QzhCLENBQXhDO0FBaURBTCxpQkFBaUIsQ0FBQ00sWUFBbEIsR0FBaUMsTUFBakM7QUFDQU4saUJBQWlCLENBQUNPLFFBQWxCLEdBQTZCLFdBQTdCO0FBRUFQLGlCQUFpQixDQUFDUSxXQUFsQixHQUFnQztBQUM5QkMsUUFBTSxFQUFFLHFCQURzQjtBQUU5QkMsTUFBSSxFQUFFLHFCQUZ3QjtBQUc5QkMsTUFBSSxFQUFFLG1CQUh3QjtBQUk5QkMsU0FBTyxFQUFFLHNCQUpxQjtBQUs5QkMsT0FBSyxFQUFFLG9CQUx1QjtBQU05QixlQUFhO0FBTmlCLENBQWhDLEMsQ0FTQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQWIsaUJBQWlCLENBQUNjLHNCQUFsQixHQUEyQ2QsaUJBQWlCLENBQUNjLHNCQUFsQixJQUE0QztBQUNyRkMsZ0JBQWMsRUFBRUMsU0FEcUU7QUFFckZDLGVBQWEsRUFBRTtBQUFFQyxRQUFJLEVBQUUsUUFBUjtBQUFrQkMsZUFBVyxFQUFFO0FBQS9CLEdBRnNFO0FBR3JGUixNQUFJLEVBQUU7QUFBRU8sUUFBSSxFQUFFO0FBQVIsR0FIK0U7QUFJckZFLGNBQVksRUFBRTtBQUNaRixRQUFJLEVBQUUsU0FETTtBQUVaRyxXQUFPLEVBQUUsQ0FBQyxjQUFEO0FBRkcsR0FKdUU7QUFRckZDLG1CQUFpQixFQUFFO0FBQ2pCSixRQUFJLEVBQUUsUUFEVztBQUVqQkcsV0FBTyxFQUFFLENBQUMsY0FBRDtBQUZRLEdBUmtFO0FBWXJGRSxlQUFhLEVBQUVQLFNBWnNFO0FBYXJGUSxhQUFXLEVBQUVSLFNBYndFO0FBY3JGUyxtQkFBaUIsRUFBRTtBQUFFUCxRQUFJLEVBQUU7QUFBUixHQWRrRTtBQWVyRlEsaUJBQWUsRUFBRTtBQUFFUixRQUFJLEVBQUU7QUFBUixHQWZvRTtBQWdCckZuQixvQkFBa0IsRUFBRWlCLFNBaEJpRTtBQWlCckZXLGFBQVcsRUFBRVgsU0FqQndFO0FBa0JyRlkscUJBQW1CLEVBQUU7QUFBRVYsUUFBSSxFQUFFO0FBQVIsR0FsQmdFO0FBbUJyRlcsc0JBQW9CLEVBQUU7QUFBRVgsUUFBSSxFQUFFO0FBQVIsR0FuQitEO0FBb0JyRlksY0FBWSxFQUFFO0FBQ1paLFFBQUksRUFBRSxPQURNO0FBRVphLFdBQU8sRUFBRS9CLGlCQUFpQixDQUFDQyxtQkFGZjtBQUdaa0IsZUFBVyxFQUFFLGNBSEQ7QUFJWkUsV0FBTyxFQUFFLENBQUMsZUFBRCxFQUFrQixPQUFsQixFQUEyQixRQUEzQixFQUFxQyxRQUFyQztBQUpHLEdBcEJ1RTtBQTBCckYvQixRQUFNLEVBQUU7QUFBRTRCLFFBQUksRUFBRSxTQUFSO0FBQW1CQyxlQUFXLEVBQUU7QUFBaEMsR0ExQjZFO0FBMkJyRmEsZUFBYSxFQUFFO0FBQ2JkLFFBQUksRUFBRSxTQURPO0FBRWJHLFdBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxPQUZPLEVBR1AsT0FITyxFQUlQLFNBSk8sRUFLUCxLQUxPLEVBTVAsT0FOTyxFQU9QLGNBUE87QUFGSSxHQTNCc0U7QUF1Q3JGWSxlQUFhLEVBQUU7QUFDYmYsUUFBSSxFQUFFLFFBRE87QUFFYkcsV0FBTyxFQUFFLENBQUMsWUFBRDtBQUZJLEdBdkNzRTtBQTJDckZhLHFCQUFtQixFQUFFO0FBQUVoQixRQUFJLEVBQUU7QUFBUjtBQTNDZ0UsQ0FBdkY7QUE4Q0EsK0RBQWVsQixpQkFBZixFOzs7Ozs7Ozs7OztBQ2pIQTs7Ozs7Ozs7O0FBVUF2RCxNQUFNLENBQUMwRix5QkFBUCxHQUFtQyxVQUFTQyxJQUFULEVBQWU7QUFBRSxTQUFPQSxJQUFQO0FBQWMsQ0FBbEUsQzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUFTQTtBQUVBOzs7Ozs7QUFLQSxNQUFNQyxhQUFOLENBQW9CO0FBQ2xCQyxhQUFXLENBQUM3QixNQUFELEVBQVM7QUFDbEI7QUFDQSxTQUFLOEIsS0FBTCxHQUFhOUIsTUFBTSxDQUFDK0IsUUFBUCxFQUFiO0FBQ0Q7QUFDRDs7Ozs7QUFHQUEsVUFBUSxHQUFHO0FBQ1QsV0FBTyxLQUFLRCxLQUFaO0FBQ0Q7O0FBVmlCO0FBYXBCOzs7Ozs7QUFJQSxTQUFTRSxZQUFULENBQXNCRixLQUF0QixFQUE2QjtBQUMzQixNQUFJQSxLQUFLLFlBQVlGLGFBQXJCLEVBQW9DO0FBQ2xDO0FBQU87QUFBOEJFLFdBQUQsQ0FBUUE7QUFBNUM7QUFDRCxHQUZELE1BRU87QUFDTCxVQUFNLElBQUlHLEtBQUosQ0FDRCwrREFBOERILEtBQU0sRUFEbkUsQ0FBTjtBQUdEO0FBQ0Y7QUFFRDs7Ozs7O0FBSUEsU0FBU0ksU0FBVCxDQUFtQkosS0FBbkIsRUFBMEI7QUFDeEIsTUFBSUEsS0FBSyxZQUFZSyxtQkFBckIsRUFBMEM7QUFDeEM7QUFBTztBQUFxQ0wsV0FBRCxDQUFRTTtBQUFuRDtBQUNELEdBRkQsTUFFTyxJQUFJTixLQUFLLFlBQVlGLGFBQXJCLEVBQW9DO0FBQ3pDLFdBQU9JLFlBQVksQ0FBQ0YsS0FBRCxDQUFuQjtBQUNELEdBRk0sTUFFQTtBQUNMLFVBQU0sSUFBSUcsS0FBSixDQUNELHlEQUF3REgsS0FBTSxFQUQ3RCxDQUFOO0FBRUQ7QUFDRjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ08sTUFBTU8sSUFBSSxHQUFHLFNBQVNBLElBQVQsQ0FBY0MsT0FBZCxFQUF1QixHQUFHQyxNQUExQixFQUFrQztBQUNwRCxRQUFNQyxRQUFRO0FBQUc7QUFBb0NwRyxVQUFRLENBQUNlLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBckQ7QUFDQXFGLFVBQVEsQ0FBQ0osU0FBVCxHQUFxQkcsTUFBTSxDQUFDRSxNQUFQLENBQWMsQ0FBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVNDLEdBQVQsS0FDL0JGLEdBQUcsR0FBR1IsU0FBUyxDQUFDUyxDQUFELENBQWYsR0FBcUJMLE9BQU8sQ0FBQ00sR0FBRyxHQUFHLENBQVAsQ0FEWCxFQUNzQk4sT0FBTyxDQUFDLENBQUQsQ0FEN0IsQ0FBckI7QUFFQSxTQUFPRSxRQUFQO0FBQ0QsQ0FMTTtBQU9QOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JPLE1BQU1LLFdBQVcsR0FBRyxVQUFTUCxPQUFULEVBQWtCLEdBQUdDLE1BQXJCLEVBQTZCO0FBQ3RELFNBQU8sSUFBSVgsYUFBSixDQUFrQlcsTUFBTSxDQUFDRSxNQUFQLENBQWMsQ0FBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVNDLEdBQVQsS0FDbkNGLEdBQUcsR0FBR1YsWUFBWSxDQUFDVyxDQUFELENBQWxCLEdBQXdCTCxPQUFPLENBQUNNLEdBQUcsR0FBRyxDQUFQLENBRFYsRUFDcUJOLE9BQU8sQ0FBQyxDQUFELENBRDVCLENBQWxCLENBQVA7QUFFRCxDQUhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSFA7QUFBQTs7Ozs7Ozs7OztBQVdPLE1BQU0sMkJBQTJCLEdBQ25DLHdCQUF3QixRQUFRLENBQUMsU0FBbEMsSUFDQyxhQUFhLGFBQWEsQ0FBQyxTQUZ6QjtBQUlQLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxFQUFoQztBQUVNLE1BQU8sU0FBUCxDQUFnQjtBQUtwQixjQUFZLE9BQVosRUFBNkIsU0FBN0IsRUFBOEM7QUFDNUMsUUFBSSxTQUFTLEtBQUssaUJBQWxCLEVBQXFDO0FBQ25DLFlBQU0sSUFBSSxLQUFKLENBQ0YsbUVBREUsQ0FBTjtBQUVEOztBQUNELFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDRCxHQVhtQixDQWFwQjtBQUNBOzs7QUFDQSxNQUFJLFVBQUosR0FBYztBQUNaLFFBQUksS0FBSyxXQUFMLEtBQXFCLFNBQXpCLEVBQW9DO0FBQ2xDO0FBQ0E7QUFDQSxVQUFJLDJCQUFKLEVBQWlDO0FBQy9CLGFBQUssV0FBTCxHQUFtQixJQUFJLGFBQUosRUFBbkI7O0FBQ0EsYUFBSyxXQUFMLENBQWlCLFdBQWpCLENBQTZCLEtBQUssT0FBbEM7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDtBQUNGOztBQUNELFdBQU8sS0FBSyxXQUFaO0FBQ0Q7O0FBRUQsVUFBUTtBQUNOLFdBQU8sS0FBSyxPQUFaO0FBQ0Q7O0FBL0JtQjtBQWtDdEI7Ozs7Ozs7O0FBT08sTUFBTSxTQUFTLEdBQUksS0FBRCxJQUFtQjtBQUMxQyxTQUFPLElBQUksU0FBSixDQUFjLE1BQU0sQ0FBQyxLQUFELENBQXBCLEVBQTZCLGlCQUE3QixDQUFQO0FBQ0QsQ0FGTTs7QUFJUCxNQUFNLGlCQUFpQixHQUFJLEtBQUQsSUFBcUI7QUFDN0MsTUFBSSxLQUFLLFlBQVksU0FBckIsRUFBZ0M7QUFDOUIsV0FBTyxLQUFLLENBQUMsT0FBYjtBQUNELEdBRkQsTUFFTztBQUNMLFVBQU0sSUFBSSxLQUFKLENBQ0YsbUVBQ0ksS0FBSzsrQ0FGUCxDQUFOO0FBSUQ7QUFDRixDQVREO0FBV0E7Ozs7Ozs7O0FBTU8sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFELEVBQWdDLEdBQUcsTUFBbkMsS0FBMEQ7QUFDM0UsUUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQVAsQ0FDWixDQUFDLEdBQUQsRUFBTSxDQUFOLEVBQVMsR0FBVCxLQUFpQixHQUFHLEdBQUcsaUJBQWlCLENBQUMsQ0FBRCxDQUF2QixHQUE2QixPQUFPLENBQUMsR0FBRyxHQUFHLENBQVAsQ0FEekMsRUFFWixPQUFPLENBQUMsQ0FBRCxDQUZLLENBQWhCO0FBR0EsU0FBTyxJQUFJLFNBQUosQ0FBYyxPQUFkLEVBQXVCLGlCQUF2QixDQUFQO0FBQ0QsQ0FMTSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9FUDtBQUFBOzs7Ozs7Ozs7Ozs7O0FBd0NBLE1BQU0sbUJBQW1CLEdBQ3JCLENBQUMsT0FBRCxFQUFrQixLQUFsQixLQUFxRDtBQUNuRCxRQUFNLENBQUMsY0FBUCxDQUFzQixNQUF0QixDQUE2QixPQUE3QixFQUFzQyxLQUF0QyxFQURtRCxDQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBTyxLQUFQO0FBQ0QsQ0FWTDs7QUFZQSxNQUFNLHFCQUFxQixHQUN2QixDQUFDLE9BQUQsRUFBa0IsVUFBbEIsS0FBaUQ7QUFDL0MsUUFBTTtBQUFDLFFBQUQ7QUFBTztBQUFQLE1BQW1CLFVBQXpCO0FBQ0EsU0FBTztBQUNMLFFBREs7QUFFTCxZQUZLOztBQUdMO0FBQ0EsWUFBUSxDQUFDLEtBQUQsRUFBZ0M7QUFDdEMsWUFBTSxDQUFDLGNBQVAsQ0FBc0IsTUFBdEIsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBdEM7QUFDRDs7QUFOSSxHQUFQO0FBUUQsQ0FYTDtBQWFBOzs7Ozs7O0FBS08sTUFBTSxhQUFhLEdBQUksT0FBRCxJQUN4QixpQkFBRCxJQUNLLE9BQU8saUJBQVAsS0FBNkIsVUFBOUIsR0FDSixtQkFBbUIsQ0FBQyxPQUFELEVBQVUsaUJBQVYsQ0FEZixHQUVKLHFCQUFxQixDQUFDLE9BQUQsRUFBVSxpQkFBVixDQUpsQjs7QUFNUCxNQUFNLGdCQUFnQixHQUNsQixDQUFDLE9BQUQsRUFBK0IsT0FBL0IsS0FBd0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsTUFBSSxPQUFPLENBQUMsSUFBUixLQUFpQixRQUFqQixJQUE2QixPQUFPLENBQUMsVUFBckMsSUFDQSxFQUFFLFdBQVcsT0FBTyxDQUFDLFVBQXJCLENBREosRUFDc0M7QUFDcEMsNkJBQ0ssT0FETCxFQUNZO0FBQ1YsY0FBUSxDQUFDLEtBQUQsRUFBOEI7QUFDcEMsYUFBSyxDQUFDLGNBQU4sQ0FBcUIsT0FBTyxDQUFDLEdBQTdCLEVBQWtDLE9BQWxDO0FBQ0Q7O0FBSFMsS0FEWjtBQU1ELEdBUkQsTUFRTztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQU87QUFDTCxVQUFJLEVBQUUsT0FERDtBQUVMLFNBQUcsRUFBRSxNQUFNLEVBRk47QUFHTCxlQUFTLEVBQUUsS0FITjtBQUlMLGdCQUFVLEVBQUUsRUFKUDs7QUFLTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFXO0FBQ1QsWUFBSSxPQUFPLE9BQU8sQ0FBQyxXQUFmLEtBQStCLFVBQW5DLEVBQStDO0FBQzdDLGVBQUssT0FBTyxDQUFDLEdBQWIsSUFBb0IsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBcEI7QUFDRDtBQUNGLE9BbkJJOztBQW9CTCxjQUFRLENBQUMsS0FBRCxFQUE4QjtBQUNwQyxhQUFLLENBQUMsY0FBTixDQUFxQixPQUFPLENBQUMsR0FBN0IsRUFBa0MsT0FBbEM7QUFDRDs7QUF0QkksS0FBUDtBQXdCRDtBQUNGLENBMUNMOztBQTRDQSxNQUFNLGNBQWMsR0FDaEIsQ0FBQyxPQUFELEVBQStCLEtBQS9CLEVBQThDLElBQTlDLEtBQW1FO0FBQ2hFLE9BQUssQ0FBQyxXQUFOLENBQ0ksY0FESixDQUNtQixJQURuQixFQUN5QixPQUR6QjtBQUVGLENBSkw7QUFNQTs7Ozs7Ozs7O0FBT00sU0FBVSxRQUFWLENBQW1CLE9BQW5CLEVBQWdEO0FBQ3BEO0FBQ0EsU0FBTyxDQUFDLGlCQUFELEVBQXlDLElBQXpDLEtBQ0ssSUFBSSxLQUFLLFNBQVYsR0FDUCxjQUFjLENBQUMsT0FBRCxFQUFXLGlCQUFYLEVBQXdDLElBQXhDLENBRFAsR0FFUCxnQkFBZ0IsQ0FBQyxPQUFELEVBQVcsaUJBQVgsQ0FIcEI7QUFJRDtBQUVEOzs7Ozs7O0FBTU0sU0FBVSxLQUFWLENBQWdCLFFBQWhCLEVBQWdDO0FBQ3BDLFNBQU8sQ0FBQyxpQkFBRCxFQUNDO0FBQ0EsTUFGRCxLQUU0QjtBQUNqQyxVQUFNLFVBQVUsR0FBRztBQUNqQixTQUFHO0FBQ0QsZUFBTyxLQUFLLFVBQUwsQ0FBZ0IsYUFBaEIsQ0FBOEIsUUFBOUIsQ0FBUDtBQUNELE9BSGdCOztBQUlqQixnQkFBVSxFQUFFLElBSks7QUFLakIsa0JBQVksRUFBRTtBQUxHLEtBQW5CO0FBT0EsV0FBUSxJQUFJLEtBQUssU0FBVixHQUNILFdBQVcsQ0FBQyxVQUFELEVBQWEsaUJBQWIsRUFBMEMsSUFBMUMsQ0FEUixHQUVILGFBQWEsQ0FBQyxVQUFELEVBQWEsaUJBQWIsQ0FGakI7QUFHRCxHQWJEO0FBY0Q7QUFFRDs7Ozs7OztBQU1NLFNBQVUsUUFBVixDQUFtQixRQUFuQixFQUFtQztBQUN2QyxTQUFPLENBQUMsaUJBQUQsRUFDQztBQUNBLE1BRkQsS0FFNEI7QUFDakMsVUFBTSxVQUFVLEdBQUc7QUFDakIsU0FBRztBQUNELGVBQU8sS0FBSyxVQUFMLENBQWdCLGdCQUFoQixDQUFpQyxRQUFqQyxDQUFQO0FBQ0QsT0FIZ0I7O0FBSWpCLGdCQUFVLEVBQUUsSUFKSztBQUtqQixrQkFBWSxFQUFFO0FBTEcsS0FBbkI7QUFPQSxXQUFRLElBQUksS0FBSyxTQUFWLEdBQ0gsV0FBVyxDQUFDLFVBQUQsRUFBYSxpQkFBYixFQUEwQyxJQUExQyxDQURSLEdBRUgsYUFBYSxDQUFDLFVBQUQsRUFBYSxpQkFBYixDQUZqQjtBQUdELEdBYkQ7QUFjRDs7QUFFRCxNQUFNLFdBQVcsR0FDYixDQUFDLFVBQUQsRUFBaUMsS0FBakMsRUFBZ0QsSUFBaEQsS0FBcUU7QUFDbkUsUUFBTSxDQUFDLGNBQVAsQ0FBc0IsS0FBdEIsRUFBNkIsSUFBN0IsRUFBbUMsVUFBbkM7QUFDRCxDQUhMOztBQUtBLE1BQU0sYUFBYSxHQUFHLENBQUMsVUFBRCxFQUFpQyxPQUFqQyxNQUNqQjtBQUNDLE1BQUksRUFBRSxRQURQO0FBRUMsV0FBUyxFQUFFLFdBRlo7QUFHQyxLQUFHLEVBQUUsT0FBTyxDQUFDLEdBSGQ7QUFJQztBQUpELENBRGlCLENBQXRCOztBQVFBLE1BQU0sb0JBQW9CLEdBQ3RCLENBQUMsT0FBRCxFQUFtQyxPQUFuQyxLQUE0RDtBQUMxRCwyQkFDSyxPQURMLEVBQ1k7QUFDVixZQUFRLENBQUMsS0FBRCxFQUE4QjtBQUNwQyxZQUFNLENBQUMsTUFBUCxDQUNJLEtBQUssQ0FBQyxTQUFOLENBQWdCLE9BQU8sQ0FBQyxHQUF4QixDQURKLEVBQzJELE9BRDNEO0FBRUQ7O0FBSlMsR0FEWjtBQU9ELENBVEw7O0FBV0EsTUFBTSxrQkFBa0IsR0FDcEI7QUFDQSxDQUFDLE9BQUQsRUFBbUMsS0FBbkMsRUFBK0MsSUFBL0MsS0FBb0U7QUFDbEUsUUFBTSxDQUFDLE1BQVAsQ0FBYyxLQUFLLENBQUMsSUFBRCxDQUFuQixFQUEyQixPQUEzQjtBQUNELENBSkw7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCTyxNQUFNLFlBQVksR0FBSSxPQUFELElBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyxDQUFDLGlCQUFELEVBQXlDLElBQXpDLEtBQ0ssSUFBSSxLQUFLLFNBQVYsR0FDQSxrQkFBa0IsQ0FBQyxPQUFELEVBQVUsaUJBQVYsRUFBdUMsSUFBdkMsQ0FEbEIsR0FFQSxvQkFBb0IsQ0FBQyxPQUFELEVBQVUsaUJBQVYsQ0FUdEIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDblBQO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7OztBQU1BLE1BQU0sQ0FBQyx5QkFBUCxHQUNJLENBQXdCLElBQXhCLEVBQWlDLElBQWpDLEtBQXNELElBRDFEOztBQStHTyxNQUFNLGdCQUFnQixHQUE4QjtBQUV6RCxhQUFXLENBQUMsS0FBRCxFQUFpQixJQUFqQixFQUErQjtBQUN4QyxZQUFRLElBQVI7QUFDRSxXQUFLLE9BQUw7QUFDRSxlQUFPLEtBQUssR0FBRyxFQUFILEdBQVEsSUFBcEI7O0FBQ0YsV0FBSyxNQUFMO0FBQ0EsV0FBSyxLQUFMO0FBQ0U7QUFDQTtBQUNBLGVBQU8sS0FBSyxJQUFJLElBQVQsR0FBZ0IsS0FBaEIsR0FBd0IsSUFBSSxDQUFDLFNBQUwsQ0FBZSxLQUFmLENBQS9CO0FBUEo7O0FBU0EsV0FBTyxLQUFQO0FBQ0QsR0Fid0Q7O0FBZXpELGVBQWEsQ0FBQyxLQUFELEVBQXFCLElBQXJCLEVBQW1DO0FBQzlDLFlBQVEsSUFBUjtBQUNFLFdBQUssT0FBTDtBQUNFLGVBQU8sS0FBSyxLQUFLLElBQWpCOztBQUNGLFdBQUssTUFBTDtBQUNFLGVBQU8sS0FBSyxLQUFLLElBQVYsR0FBaUIsSUFBakIsR0FBd0IsTUFBTSxDQUFDLEtBQUQsQ0FBckM7O0FBQ0YsV0FBSyxNQUFMO0FBQ0EsV0FBSyxLQUFMO0FBQ0UsZUFBTyxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQVgsQ0FBUDtBQVBKOztBQVNBLFdBQU8sS0FBUDtBQUNEOztBQTFCd0QsQ0FBcEQ7QUFrQ1A7Ozs7O0FBSU8sTUFBTSxRQUFRLEdBQWUsQ0FBQyxLQUFELEVBQWlCLEdBQWpCLEtBQTBDO0FBQzVFO0FBQ0EsU0FBTyxHQUFHLEtBQUssS0FBUixLQUFrQixHQUFHLEtBQUssR0FBUixJQUFlLEtBQUssS0FBSyxLQUEzQyxDQUFQO0FBQ0QsQ0FITTtBQUtQLE1BQU0sMEJBQTBCLEdBQXdCO0FBQ3RELFdBQVMsRUFBRSxJQUQyQztBQUV0RCxNQUFJLEVBQUUsTUFGZ0Q7QUFHdEQsV0FBUyxFQUFFLGdCQUgyQztBQUl0RCxTQUFPLEVBQUUsS0FKNkM7QUFLdEQsWUFBVSxFQUFFO0FBTDBDLENBQXhEO0FBUUEsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsT0FBUixDQUFnQixJQUFoQixDQUF6QjtBQUVBLE1BQU0saUJBQWlCLEdBQUcsQ0FBMUI7QUFDQSxNQUFNLHNCQUFzQixHQUFHLEtBQUssQ0FBcEM7QUFDQSxNQUFNLGdDQUFnQyxHQUFHLEtBQUssQ0FBOUM7QUFDQSxNQUFNLCtCQUErQixHQUFHLEtBQUssQ0FBN0M7QUFDQSxNQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBakM7QUFLQTs7Ozs7O0FBS00sTUFBZ0IsZUFBaEIsU0FBd0MsV0FBeEMsQ0FBbUQ7QUEwT3ZEO0FBQ0U7QUFsQk0sd0JBQTRCLENBQTVCO0FBQ0EsK0JBQWdELFNBQWhEO0FBQ0EsMEJBQW1DLGdCQUFuQztBQUNBLGlDQUFnRCxTQUFoRDtBQUVSOzs7OztBQUlRLDhCQUFxQyxJQUFJLEdBQUosRUFBckM7QUFFUjs7OztBQUdRLGlDQUNRLFNBRFI7QUFLTixTQUFLLFVBQUw7QUFDRDtBQTlNRDs7Ozs7O0FBSUEsYUFBVyxrQkFBWCxHQUE2QjtBQUMzQjtBQUNBLFNBQUssUUFBTDtBQUNBLFVBQU0sVUFBVSxHQUFhLEVBQTdCLENBSDJCLENBSTNCO0FBQ0E7O0FBQ0EsU0FBSyxnQkFBTCxDQUF1QixPQUF2QixDQUErQixDQUFDLENBQUQsRUFBSSxDQUFKLEtBQVM7QUFDdEMsWUFBTSxJQUFJLEdBQUcsS0FBSyx5QkFBTCxDQUErQixDQUEvQixFQUFrQyxDQUFsQyxDQUFiOztBQUNBLFVBQUksSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDdEIsYUFBSyx1QkFBTCxDQUE2QixHQUE3QixDQUFpQyxJQUFqQyxFQUF1QyxDQUF2Qzs7QUFDQSxrQkFBVSxDQUFDLElBQVgsQ0FBZ0IsSUFBaEI7QUFDRDtBQUNGLEtBTkQ7O0FBT0EsV0FBTyxVQUFQO0FBQ0Q7QUFFRDs7Ozs7O0FBS0E7OztBQUNRLFNBQU8sc0JBQVAsR0FBNkI7QUFDbkM7QUFDQSxRQUFJLENBQUMsS0FBSyxjQUFMLENBQ0cseUJBQXlCLENBQUMsa0JBQUQsRUFBcUIsSUFBckIsQ0FENUIsQ0FBTCxFQUM4RDtBQUM1RCxXQUFLLGdCQUFMLEdBQXdCLElBQUksR0FBSixFQUF4QixDQUQ0RCxDQUU1RDs7QUFDQSxZQUFNLGVBQWUsR0FDakIsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsZ0JBRGhDOztBQUVBLFVBQUksZUFBZSxLQUFLLFNBQXhCLEVBQW1DO0FBQ2pDLHVCQUFlLENBQUMsT0FBaEIsQ0FDSSxDQUFDLENBQUQsRUFBeUIsQ0FBekIsS0FDSSxLQUFLLGdCQUFMLENBQXVCLEdBQXZCLENBQTJCLENBQTNCLEVBQThCLENBQTlCLENBRlI7QUFHRDtBQUNGO0FBQ0Y7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBTyxjQUFQLENBQ0ksSUFESixFQUVJLFVBQStCLDBCQUZuQyxFQUU2RDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxTQUFLLHNCQUFMOztBQUNBLFNBQUssZ0JBQUwsQ0FBdUIsR0FBdkIsQ0FBMkIsSUFBM0IsRUFBaUMsT0FBakMsRUFMMkQsQ0FNM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSSxPQUFPLENBQUMsVUFBUixJQUFzQixLQUFLLFNBQUwsQ0FBZSxjQUFmLENBQThCLElBQTlCLENBQTFCLEVBQStEO0FBQzdEO0FBQ0Q7O0FBQ0QsVUFBTSxHQUFHLEdBQUcsT0FBTyxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCLE1BQU0sRUFBakMsR0FBc0MsS0FBSyxJQUFJLEVBQTNEO0FBQ0EsVUFBTSxDQUFDLGNBQVAsQ0FBc0IsS0FBSyxTQUEzQixFQUFzQyxJQUF0QyxFQUE0QztBQUMxQztBQUNBLFNBQUc7QUFDRCxlQUFPLEtBQUssR0FBTCxDQUFQO0FBQ0QsT0FKeUM7O0FBSzFDLFNBQUcsQ0FBd0IsS0FBeEIsRUFBc0M7QUFDdkM7QUFDQSxjQUFNLFFBQVEsR0FBSSxLQUFhLElBQWIsQ0FBbEIsQ0FGdUMsQ0FHdkM7O0FBQ0MsYUFBYSxHQUFiLElBQW9CLEtBQXBCOztBQUNELGFBQUssY0FBTCxDQUFvQixJQUFwQixFQUEwQixRQUExQjtBQUNELE9BWHlDOztBQVkxQyxrQkFBWSxFQUFFLElBWjRCO0FBYTFDLGdCQUFVLEVBQUU7QUFiOEIsS0FBNUM7QUFlRDtBQUVEOzs7Ozs7O0FBS1UsU0FBTyxRQUFQLEdBQWU7QUFDdkIsUUFBSSxLQUFLLGNBQUwsQ0FBb0IseUJBQXlCLENBQUMsV0FBRCxFQUFjLElBQWQsQ0FBN0MsS0FDQSxLQUFLLFNBRFQsRUFDb0I7QUFDbEI7QUFDRCxLQUpzQixDQUt2Qjs7O0FBQ0EsVUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsSUFBdEIsQ0FBbEI7O0FBQ0EsUUFBSSxPQUFPLFNBQVMsQ0FBQyxRQUFqQixLQUE4QixVQUFsQyxFQUE4QztBQUM1QyxlQUFTLENBQUMsUUFBVjtBQUNEOztBQUNELFNBQUssU0FBTCxHQUFpQixJQUFqQjs7QUFDQSxTQUFLLHNCQUFMLEdBWHVCLENBWXZCOzs7QUFDQSxTQUFLLHVCQUFMLEdBQStCLElBQUksR0FBSixFQUEvQixDQWJ1QixDQWN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLEtBQUssY0FBTCxDQUFvQix5QkFBeUIsQ0FBQyxZQUFELEVBQWUsSUFBZixDQUE3QyxDQUFKLEVBQXdFO0FBQ3RFLFlBQU0sS0FBSyxHQUFHLEtBQUssVUFBbkIsQ0FEc0UsQ0FFdEU7O0FBQ0EsWUFBTSxRQUFRLEdBQUcsQ0FDZixHQUFHLE1BQU0sQ0FBQyxtQkFBUCxDQUEyQixLQUEzQixDQURZLEVBRWYsSUFBSSxPQUFPLE1BQU0sQ0FBQyxxQkFBZCxLQUF3QyxVQUF6QyxHQUNDLE1BQU0sQ0FBQyxxQkFBUCxDQUE2QixLQUE3QixDQURELEdBRUMsRUFGSixDQUZlLENBQWpCLENBSHNFLENBU3RFOztBQUNBLFdBQUssTUFBTSxDQUFYLElBQWdCLFFBQWhCLEVBQTBCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGFBQUssY0FBTCxDQUFvQixDQUFwQixFQUF3QixLQUFhLENBQUMsQ0FBRCxDQUFyQztBQUNEO0FBQ0Y7QUFDRjtBQUVEOzs7Ozs7QUFJUSxTQUFPLHlCQUFQLENBQ0osSUFESSxFQUNlLE9BRGYsRUFDMkM7QUFDakQsVUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQTFCO0FBQ0EsV0FBTyxTQUFTLEtBQUssS0FBZCxHQUNILFNBREcsR0FFRixPQUFPLFNBQVAsS0FBcUIsUUFBckIsR0FDSSxTQURKLEdBRUssT0FBTyxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCLElBQUksQ0FBQyxXQUFMLEVBQTNCLEdBQWdELFNBSjFEO0FBS0Q7QUFFRDs7Ozs7Ozs7QUFNUSxTQUFPLGdCQUFQLENBQ0osS0FESSxFQUNZLEdBRFosRUFDMEIsYUFBeUIsUUFEbkQsRUFDMkQ7QUFDakUsV0FBTyxVQUFVLENBQUMsS0FBRCxFQUFRLEdBQVIsQ0FBakI7QUFDRDtBQUVEOzs7Ozs7OztBQU1RLFNBQU8sMkJBQVAsQ0FDSixLQURJLEVBQ2dCLE9BRGhCLEVBQzRDO0FBQ2xELFVBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFyQjtBQUNBLFVBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFSLElBQXFCLGdCQUF2QztBQUNBLFVBQU0sYUFBYSxHQUNkLE9BQU8sU0FBUCxLQUFxQixVQUFyQixHQUFrQyxTQUFsQyxHQUE4QyxTQUFTLENBQUMsYUFEN0Q7QUFFQSxXQUFPLGFBQWEsR0FBRyxhQUFhLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBaEIsR0FBZ0MsS0FBcEQ7QUFDRDtBQUVEOzs7Ozs7Ozs7O0FBUVEsU0FBTyx5QkFBUCxDQUNKLEtBREksRUFDWSxPQURaLEVBQ3dDO0FBQzlDLFFBQUksT0FBTyxDQUFDLE9BQVIsS0FBb0IsU0FBeEIsRUFBbUM7QUFDakM7QUFDRDs7QUFDRCxVQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBckI7QUFDQSxVQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBMUI7QUFDQSxVQUFNLFdBQVcsR0FDYixTQUFTLElBQUssU0FBdUMsQ0FBQyxXQUF0RCxJQUNBLGdCQUFnQixDQUFDLFdBRnJCO0FBR0EsV0FBTyxXQUFZLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBbkI7QUFDRDtBQXdCRDs7Ozs7O0FBSVUsWUFBVTtBQUNsQixTQUFLLHVCQUFMLEdBRGtCLENBRWxCOzs7QUFDQSxTQUFLLGNBQUw7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OztBQVlRLHlCQUF1QjtBQUM3QjtBQUNBO0FBQ0MsU0FBSyxXQUFMLENBQ0ksZ0JBREosQ0FDc0IsT0FEdEIsQ0FDOEIsQ0FBQyxFQUFELEVBQUssQ0FBTCxLQUFVO0FBQ25DLFVBQUksS0FBSyxjQUFMLENBQW9CLENBQXBCLENBQUosRUFBNEI7QUFDMUIsY0FBTSxLQUFLLEdBQUcsS0FBSyxDQUFMLENBQWQ7QUFDQSxlQUFPLEtBQUssQ0FBTCxDQUFQOztBQUNBLFlBQUksQ0FBQyxLQUFLLG1CQUFWLEVBQStCO0FBQzdCLGVBQUssbUJBQUwsR0FBMkIsSUFBSSxHQUFKLEVBQTNCO0FBQ0Q7O0FBQ0QsYUFBSyxtQkFBTCxDQUF5QixHQUF6QixDQUE2QixDQUE3QixFQUFnQyxLQUFoQztBQUNEO0FBQ0YsS0FWSjtBQVdGO0FBRUQ7Ozs7O0FBR1EsMEJBQXdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFNBQUssbUJBQUwsQ0FBMEIsT0FBMUIsQ0FBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixLQUFXLEtBQWEsQ0FBYixJQUFrQixDQUEvRDs7QUFDQSxTQUFLLG1CQUFMLEdBQTJCLFNBQTNCO0FBQ0Q7O0FBRUQsbUJBQWlCO0FBQ2YsU0FBSyxZQUFMLEdBQW9CLEtBQUssWUFBTCxHQUFvQixtQkFBeEMsQ0FEZSxDQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQUksS0FBSyxxQkFBVCxFQUFnQztBQUM5QixXQUFLLHFCQUFMOztBQUNBLFdBQUsscUJBQUwsR0FBNkIsU0FBN0I7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7QUFLQSxzQkFBb0IsSUFDbkI7QUFFRDs7Ozs7QUFHQSwwQkFBd0IsQ0FBQyxJQUFELEVBQWUsR0FBZixFQUFpQyxLQUFqQyxFQUFtRDtBQUN6RSxRQUFJLEdBQUcsS0FBSyxLQUFaLEVBQW1CO0FBQ2pCLFdBQUssb0JBQUwsQ0FBMEIsSUFBMUIsRUFBZ0MsS0FBaEM7QUFDRDtBQUNGOztBQUVPLHNCQUFvQixDQUN4QixJQUR3QixFQUNMLEtBREssRUFFeEIsVUFBK0IsMEJBRlAsRUFFaUM7QUFDM0QsVUFBTSxJQUFJLEdBQUksS0FBSyxXQUFuQjs7QUFDQSxVQUFNLElBQUksR0FBRyxJQUFJLENBQUMseUJBQUwsQ0FBK0IsSUFBL0IsRUFBcUMsT0FBckMsQ0FBYjs7QUFDQSxRQUFJLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQ3RCLFlBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyx5QkFBTCxDQUErQixLQUEvQixFQUFzQyxPQUF0QyxDQUFsQixDQURzQixDQUV0Qjs7O0FBQ0EsVUFBSSxTQUFTLEtBQUssU0FBbEIsRUFBNkI7QUFDM0I7QUFDRCxPQUxxQixDQU10QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFLLFlBQUwsR0FBb0IsS0FBSyxZQUFMLEdBQW9CLGdDQUF4Qzs7QUFDQSxVQUFJLFNBQVMsSUFBSSxJQUFqQixFQUF1QjtBQUNyQixhQUFLLGVBQUwsQ0FBcUIsSUFBckI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsU0FBeEI7QUFDRCxPQW5CcUIsQ0FvQnRCOzs7QUFDQSxXQUFLLFlBQUwsR0FBb0IsS0FBSyxZQUFMLEdBQW9CLENBQUMsZ0NBQXpDO0FBQ0Q7QUFDRjs7QUFFTyxzQkFBb0IsQ0FBQyxJQUFELEVBQWUsS0FBZixFQUFpQztBQUMzRDtBQUNBO0FBQ0EsUUFBSSxLQUFLLFlBQUwsR0FBb0IsZ0NBQXhCLEVBQTBEO0FBQ3hEO0FBQ0Q7O0FBQ0QsVUFBTSxJQUFJLEdBQUksS0FBSyxXQUFuQjs7QUFDQSxVQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsdUJBQUwsQ0FBNkIsR0FBN0IsQ0FBaUMsSUFBakMsQ0FBakI7O0FBQ0EsUUFBSSxRQUFRLEtBQUssU0FBakIsRUFBNEI7QUFDMUIsWUFBTSxPQUFPLEdBQ1QsSUFBSSxDQUFDLGdCQUFMLENBQXVCLEdBQXZCLENBQTJCLFFBQTNCLEtBQXdDLDBCQUQ1QyxDQUQwQixDQUcxQjs7QUFDQSxXQUFLLFlBQUwsR0FBb0IsS0FBSyxZQUFMLEdBQW9CLCtCQUF4QztBQUNBLFdBQUssUUFBTCxJQUNJO0FBQ0EsVUFBSSxDQUFDLDJCQUFMLENBQWlDLEtBQWpDLEVBQXdDLE9BQXhDLENBRkosQ0FMMEIsQ0FRMUI7O0FBQ0EsV0FBSyxZQUFMLEdBQW9CLEtBQUssWUFBTCxHQUFvQixDQUFDLCtCQUF6QztBQUNEO0FBQ0Y7QUFFRDs7Ozs7OztBQUtRLGdCQUFjLENBQUMsSUFBRCxFQUFxQixRQUFyQixFQUF1QztBQUMzRCxRQUFJLG1CQUFtQixHQUFHLElBQTFCLENBRDJELENBRTNEOztBQUNBLFFBQUksSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDdEIsWUFBTSxJQUFJLEdBQUcsS0FBSyxXQUFsQjtBQUNBLFlBQU0sT0FBTyxHQUNULElBQUksQ0FBQyxnQkFBTCxDQUF1QixHQUF2QixDQUEyQixJQUEzQixLQUFvQywwQkFEeEM7O0FBRUEsVUFBSSxJQUFJLENBQUMsZ0JBQUwsQ0FDSSxLQUFLLElBQUwsQ0FESixFQUM4QixRQUQ5QixFQUN3QyxPQUFPLENBQUMsVUFEaEQsQ0FBSixFQUNpRTtBQUMvRCxZQUFJLENBQUMsS0FBSyxrQkFBTCxDQUF3QixHQUF4QixDQUE0QixJQUE1QixDQUFMLEVBQXdDO0FBQ3RDLGVBQUssa0JBQUwsQ0FBd0IsR0FBeEIsQ0FBNEIsSUFBNUIsRUFBa0MsUUFBbEM7QUFDRCxTQUg4RCxDQUkvRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsWUFBSSxPQUFPLENBQUMsT0FBUixLQUFvQixJQUFwQixJQUNBLEVBQUUsS0FBSyxZQUFMLEdBQW9CLCtCQUF0QixDQURKLEVBQzREO0FBQzFELGNBQUksS0FBSyxxQkFBTCxLQUErQixTQUFuQyxFQUE4QztBQUM1QyxpQkFBSyxxQkFBTCxHQUE2QixJQUFJLEdBQUosRUFBN0I7QUFDRDs7QUFDRCxlQUFLLHFCQUFMLENBQTJCLEdBQTNCLENBQStCLElBQS9CLEVBQXFDLE9BQXJDO0FBQ0Q7QUFDRixPQWhCRCxNQWdCTztBQUNMO0FBQ0EsMkJBQW1CLEdBQUcsS0FBdEI7QUFDRDtBQUNGOztBQUNELFFBQUksQ0FBQyxLQUFLLG1CQUFOLElBQTZCLG1CQUFqQyxFQUFzRDtBQUNwRCxXQUFLLGNBQUw7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQWFBLGVBQWEsQ0FBQyxJQUFELEVBQXFCLFFBQXJCLEVBQXVDO0FBQ2xELFNBQUssY0FBTCxDQUFvQixJQUFwQixFQUEwQixRQUExQjs7QUFDQSxXQUFPLEtBQUssY0FBWjtBQUNEO0FBRUQ7Ozs7O0FBR1EsUUFBTSxjQUFOLEdBQW9CO0FBQzFCO0FBQ0EsU0FBSyxZQUFMLEdBQW9CLEtBQUssWUFBTCxHQUFvQixzQkFBeEM7QUFDQSxRQUFJLE9BQUo7QUFDQSxRQUFJLE1BQUo7QUFDQSxVQUFNLHFCQUFxQixHQUFHLEtBQUssY0FBbkM7QUFDQSxTQUFLLGNBQUwsR0FBc0IsSUFBSSxPQUFKLENBQVksQ0FBQyxHQUFELEVBQU0sR0FBTixLQUFhO0FBQzdDLGFBQU8sR0FBRyxHQUFWO0FBQ0EsWUFBTSxHQUFHLEdBQVQ7QUFDRCxLQUhxQixDQUF0Qjs7QUFJQSxRQUFJO0FBQ0Y7QUFDQTtBQUNBLFlBQU0scUJBQU47QUFDRCxLQUpELENBSUUsT0FBTyxDQUFQLEVBQVUsQ0FHWCxDQUhDLENBQ0E7QUFDQTtBQUVGOzs7QUFDQSxRQUFJLENBQUMsS0FBSyxhQUFWLEVBQXlCO0FBQ3ZCLFlBQU0sSUFBSSxPQUFKLENBQWEsR0FBRCxJQUFTLEtBQUsscUJBQUwsR0FBNkIsR0FBbEQsQ0FBTjtBQUNEOztBQUNELFFBQUk7QUFDRixZQUFNLE1BQU0sR0FBRyxLQUFLLGFBQUwsRUFBZixDQURFLENBRUY7QUFDQTtBQUNBOztBQUNBLFVBQUksTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDbEIsY0FBTSxNQUFOO0FBQ0Q7QUFDRixLQVJELENBUUUsT0FBTyxDQUFQLEVBQVU7QUFDVixZQUFNLENBQUMsQ0FBRCxDQUFOO0FBQ0Q7O0FBQ0QsV0FBTyxDQUFDLENBQUMsS0FBSyxtQkFBUCxDQUFQO0FBQ0Q7O0FBRUQsTUFBWSxhQUFaLEdBQXlCO0FBQ3ZCLFdBQVEsS0FBSyxZQUFMLEdBQW9CLG1CQUE1QjtBQUNEOztBQUVELE1BQVksbUJBQVosR0FBK0I7QUFDN0IsV0FBUSxLQUFLLFlBQUwsR0FBb0Isc0JBQTVCO0FBQ0Q7O0FBRUQsTUFBYyxVQUFkLEdBQXdCO0FBQ3RCLFdBQVEsS0FBSyxZQUFMLEdBQW9CLGlCQUE1QjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCVSxlQUFhO0FBQ3JCO0FBQ0EsUUFBSSxLQUFLLG1CQUFULEVBQThCO0FBQzVCLFdBQUssd0JBQUw7QUFDRDs7QUFDRCxRQUFJLFlBQVksR0FBRyxLQUFuQjtBQUNBLFVBQU0saUJBQWlCLEdBQUcsS0FBSyxrQkFBL0I7O0FBQ0EsUUFBSTtBQUNGLGtCQUFZLEdBQUcsS0FBSyxZQUFMLENBQWtCLGlCQUFsQixDQUFmOztBQUNBLFVBQUksWUFBSixFQUFrQjtBQUNoQixhQUFLLE1BQUwsQ0FBWSxpQkFBWjtBQUNEO0FBQ0YsS0FMRCxDQUtFLE9BQU8sQ0FBUCxFQUFVO0FBQ1Y7QUFDQTtBQUNBLGtCQUFZLEdBQUcsS0FBZjtBQUNBLFlBQU0sQ0FBTjtBQUNELEtBVkQsU0FVVTtBQUNSO0FBQ0EsV0FBSyxZQUFMO0FBQ0Q7O0FBQ0QsUUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFVBQUksRUFBRSxLQUFLLFlBQUwsR0FBb0IsaUJBQXRCLENBQUosRUFBOEM7QUFDNUMsYUFBSyxZQUFMLEdBQW9CLEtBQUssWUFBTCxHQUFvQixpQkFBeEM7QUFDQSxhQUFLLFlBQUwsQ0FBa0IsaUJBQWxCO0FBQ0Q7O0FBQ0QsV0FBSyxPQUFMLENBQWEsaUJBQWI7QUFDRDtBQUNGOztBQUVPLGNBQVk7QUFDbEIsU0FBSyxrQkFBTCxHQUEwQixJQUFJLEdBQUosRUFBMUI7QUFDQSxTQUFLLFlBQUwsR0FBb0IsS0FBSyxZQUFMLEdBQW9CLENBQUMsc0JBQXpDO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsTUFBSSxjQUFKLEdBQWtCO0FBQ2hCLFdBQU8sS0FBSyxjQUFaO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT1UsY0FBWSxDQUFDLGtCQUFELEVBQW1DO0FBQ3ZELFdBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7QUFRVSxRQUFNLENBQUMsa0JBQUQsRUFBbUM7QUFDakQsUUFBSSxLQUFLLHFCQUFMLEtBQStCLFNBQS9CLElBQ0EsS0FBSyxxQkFBTCxDQUEyQixJQUEzQixHQUFrQyxDQUR0QyxFQUN5QztBQUN2QztBQUNBO0FBQ0EsV0FBSyxxQkFBTCxDQUEyQixPQUEzQixDQUNJLENBQUMsQ0FBRCxFQUFJLENBQUosS0FBVSxLQUFLLG9CQUFMLENBQTBCLENBQTFCLEVBQTZCLEtBQUssQ0FBTCxDQUE3QixFQUFvRCxDQUFwRCxDQURkOztBQUVBLFdBQUsscUJBQUwsR0FBNkIsU0FBN0I7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7O0FBU1UsU0FBTyxDQUFDLGtCQUFELEVBQW1DLENBQ25EO0FBRUQ7Ozs7Ozs7Ozs7O0FBU1UsY0FBWSxDQUFDLGtCQUFELEVBQW1DLENBQ3hEOztBQW5sQnNEO0FBY3ZEOzs7O0FBR2lCLDRCQUFZLElBQVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZObkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FTQTtBQUNBO0FBQ0E7O0FBQ0EsQ0FBQyxNQUFNLENBQUMsb0JBQUQsQ0FBTixLQUFpQyxNQUFNLENBQUMsb0JBQUQsQ0FBTixHQUErQixFQUFoRSxDQUFELEVBQ0ssSUFETCxDQUNVLE9BRFY7QUFLQTs7Ozs7O0FBS0EsU0FBUyxTQUFULENBQ0ksTUFESixFQUM0QixTQUFzQixFQURsRCxFQUNvRDtBQUNsRCxPQUFLLElBQUksQ0FBQyxHQUFHLENBQVIsRUFBVyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQWhDLEVBQXdDLENBQUMsR0FBRyxNQUE1QyxFQUFvRCxDQUFDLEVBQXJELEVBQXlEO0FBQ3ZELFVBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFELENBQXBCOztBQUNBLFFBQUksS0FBSyxDQUFDLE9BQU4sQ0FBYyxLQUFkLENBQUosRUFBMEI7QUFDeEIsZUFBUyxDQUFDLEtBQUQsRUFBUSxNQUFSLENBQVQ7QUFDRCxLQUZELE1BRU87QUFDTCxZQUFNLENBQUMsSUFBUCxDQUFZLEtBQVo7QUFDRDtBQUNGOztBQUNELFNBQU8sTUFBUDtBQUNEO0FBRUQ7OztBQUNBLE1BQU0sYUFBYSxHQUFJLE1BQUQsSUFDbEIsTUFBTSxDQUFDLElBQVAsR0FBYyxNQUFNLENBQUMsSUFBUCxDQUFZLFFBQVosQ0FBZCxHQUFzQyxTQUFTLENBQUMsTUFBRCxDQURuRDs7QUFHTSxNQUFPLFVBQVAsU0FBMEIsd0VBQTFCLENBQXlDO0FBeUI3QztBQUNVLFNBQU8sUUFBUCxHQUFlO0FBQ3ZCLFVBQU0sUUFBTixHQUR1QixDQUV2QjtBQUNBOztBQUNBLFNBQUssT0FBTCxHQUNJLEtBQUssY0FBTCxDQUFvQix5QkFBeUIsQ0FBQyxRQUFELEVBQVcsSUFBWCxDQUE3QyxJQUNBLEtBQUssZ0JBQUwsRUFEQSxHQUVBLEtBQUssT0FBTCxJQUFnQixFQUhwQjtBQUlEO0FBRUQ7OztBQUNRLFNBQU8sZ0JBQVAsR0FBdUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBTSxVQUFVLEdBQUcsS0FBSyxNQUF4QjtBQUNBLFVBQU0sTUFBTSxHQUFnQixFQUE1Qjs7QUFDQSxRQUFJLEtBQUssQ0FBQyxPQUFOLENBQWMsVUFBZCxDQUFKLEVBQStCO0FBQzdCLFlBQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxVQUFELENBQWhDLENBRDZCLENBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsWUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLFdBQVgsQ0FBdUIsQ0FBQyxHQUFELEVBQU0sQ0FBTixLQUFXO0FBQ2pELFdBQUcsQ0FBQyxHQUFKLENBQVEsQ0FBUixFQURpRCxDQUVqRDs7QUFDQSxlQUFPLEdBQVA7QUFDRCxPQUpnQixFQUlkLElBQUksR0FBSixFQUpjLENBQWpCLENBUDZCLENBWTdCOztBQUNBLGNBQVEsQ0FBQyxPQUFULENBQWtCLENBQUQsSUFBTyxNQUFNLENBQUMsT0FBUCxDQUFlLENBQWYsQ0FBeEI7QUFDRCxLQWRELE1BY08sSUFBSSxVQUFKLEVBQWdCO0FBQ3JCLFlBQU0sQ0FBQyxJQUFQLENBQVksVUFBWjtBQUNEOztBQUNELFdBQU8sTUFBUDtBQUNEO0FBVUQ7Ozs7Ozs7QUFLVSxZQUFVO0FBQ2xCLFVBQU0sVUFBTjtBQUNDLFNBQWtELFVBQWxELEdBQ0csS0FBSyxnQkFBTCxFQURILENBRmlCLENBSWxCO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLE1BQU0sQ0FBQyxVQUFQLElBQXFCLEtBQUssVUFBTCxZQUEyQixNQUFNLENBQUMsVUFBM0QsRUFBdUU7QUFDckUsV0FBSyxXQUFMO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7Ozs7QUFPVSxrQkFBZ0I7QUFDeEIsV0FBTyxLQUFLLFlBQUwsQ0FBa0I7QUFBQyxVQUFJLEVBQUU7QUFBUCxLQUFsQixDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTVSxhQUFXO0FBQ25CLFVBQU0sTUFBTSxHQUFJLEtBQUssV0FBTCxDQUF1QyxPQUF2RDs7QUFDQSxRQUFJLE1BQU0sQ0FBQyxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCO0FBQ0QsS0FKa0IsQ0FLbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSSxNQUFNLENBQUMsUUFBUCxLQUFvQixTQUFwQixJQUFpQyxDQUFDLE1BQU0sQ0FBQyxRQUFQLENBQWdCLFlBQXRELEVBQW9FO0FBQ2xFLFlBQU0sQ0FBQyxRQUFQLENBQWdCLFdBQWhCLENBQTRCLHFCQUE1QixDQUNJLE1BQU0sQ0FBQyxHQUFQLENBQVksQ0FBRCxJQUFPLENBQUMsQ0FBQyxPQUFwQixDQURKLEVBQ2tDLEtBQUssU0FEdkM7QUFFRCxLQUhELE1BR08sSUFBSSwyRUFBSixFQUFpQztBQUNyQyxXQUFLLFVBQUwsQ0FBK0Isa0JBQS9CLEdBQ0csTUFBTSxDQUFDLEdBQVAsQ0FBWSxDQUFELElBQU8sQ0FBQyxDQUFDLFVBQXBCLENBREg7QUFFRixLQUhNLE1BR0E7QUFDTDtBQUNBO0FBQ0EsV0FBSyw0QkFBTCxHQUFvQyxJQUFwQztBQUNEO0FBQ0Y7O0FBRUQsbUJBQWlCO0FBQ2YsVUFBTSxpQkFBTixHQURlLENBRWY7QUFDQTs7QUFDQSxRQUFJLEtBQUssVUFBTCxJQUFtQixNQUFNLENBQUMsUUFBUCxLQUFvQixTQUEzQyxFQUFzRDtBQUNwRCxZQUFNLENBQUMsUUFBUCxDQUFnQixZQUFoQixDQUE2QixJQUE3QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7QUFNVSxRQUFNLENBQUMsaUJBQUQsRUFBa0M7QUFDaEQsVUFBTSxNQUFOLENBQWEsaUJBQWI7QUFDQSxVQUFNLGNBQWMsR0FBRyxLQUFLLE1BQUwsRUFBdkI7O0FBQ0EsUUFBSSxjQUFjLFlBQVksdURBQTlCLEVBQThDO0FBQzNDLFdBQUssV0FBTCxDQUNJLE1BREosQ0FFTyxjQUZQLEVBR08sS0FBSyxVQUhaLEVBSU87QUFBQyxpQkFBUyxFQUFFLEtBQUssU0FBakI7QUFBNEIsb0JBQVksRUFBRTtBQUExQyxPQUpQO0FBS0YsS0FUK0MsQ0FVaEQ7QUFDQTtBQUNBOzs7QUFDQSxRQUFJLEtBQUssNEJBQVQsRUFBdUM7QUFDckMsV0FBSyw0QkFBTCxHQUFvQyxLQUFwQzs7QUFDQyxXQUFLLFdBQUwsQ0FBdUMsT0FBdkMsQ0FBZ0QsT0FBaEQsQ0FBeUQsQ0FBRCxJQUFNO0FBQzdELGNBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQSxhQUFLLENBQUMsV0FBTixHQUFvQixDQUFDLENBQUMsT0FBdEI7QUFDQSxhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBNUI7QUFDRCxPQUpBO0FBS0Y7QUFDRjtBQUVEOzs7Ozs7O0FBS1UsUUFBTSxJQUNmOztBQWxMNEM7QUFDN0M7Ozs7O0FBSWlCLHVCQUFZLElBQVo7QUFFakI7Ozs7Ozs7OztBQVFPLG9CQUFTLG1FQUFULEM7Ozs7Ozs7Ozs7Ozs7OztBQzNFVDtBQUFBOzs7Ozs7Ozs7Ozs7O0FBbUJBO0FBSUE7Ozs7QUFHTSxNQUFPLHdCQUFQLENBQStCO0FBQ25DOzs7Ozs7Ozs7QUFTQSw0QkFBMEIsQ0FDdEIsT0FEc0IsRUFDSixJQURJLEVBQ1UsT0FEVixFQUV0QixPQUZzQixFQUVBO0FBQ3hCLFVBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFELENBQW5COztBQUNBLFFBQUksTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEIsWUFBTSxRQUFRLEdBQUcsSUFBSSwyREFBSixDQUFzQixPQUF0QixFQUErQixJQUFJLENBQUMsS0FBTCxDQUFXLENBQVgsQ0FBL0IsRUFBOEMsT0FBOUMsQ0FBakI7QUFDQSxhQUFPLFFBQVEsQ0FBQyxLQUFoQjtBQUNEOztBQUNELFFBQUksTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEIsYUFBTyxDQUFDLElBQUksbURBQUosQ0FBYyxPQUFkLEVBQXVCLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBWCxDQUF2QixFQUFzQyxPQUFPLENBQUMsWUFBOUMsQ0FBRCxDQUFQO0FBQ0Q7O0FBQ0QsUUFBSSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNsQixhQUFPLENBQUMsSUFBSSw4REFBSixDQUF5QixPQUF6QixFQUFrQyxJQUFJLENBQUMsS0FBTCxDQUFXLENBQVgsQ0FBbEMsRUFBaUQsT0FBakQsQ0FBRCxDQUFQO0FBQ0Q7O0FBQ0QsVUFBTSxRQUFRLEdBQUcsSUFBSSw0REFBSixDQUF1QixPQUF2QixFQUFnQyxJQUFoQyxFQUFzQyxPQUF0QyxDQUFqQjtBQUNBLFdBQU8sUUFBUSxDQUFDLEtBQWhCO0FBQ0Q7QUFDRDs7Ozs7O0FBSUEsc0JBQW9CLENBQUMsT0FBRCxFQUF1QjtBQUN6QyxXQUFPLElBQUksa0RBQUosQ0FBYSxPQUFiLENBQVA7QUFDRDs7QUFqQ2tDO0FBb0M5QixNQUFNLHdCQUF3QixHQUFHLElBQUksd0JBQUosRUFBakMsQzs7Ozs7Ozs7Ozs7Ozs7QUM5RFA7QUFBQTs7Ozs7Ozs7Ozs7OztBQW9CQSxNQUFNLFVBQVUsR0FBRyxJQUFJLE9BQUosRUFBbkI7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ08sTUFBTSxTQUFTLEdBQWdDLENBQTdCLElBQ3BCLENBQUMsR0FBRyxJQUFKLEtBQXVCO0FBQ3RCLFFBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUosQ0FBWDtBQUNBLFlBQVUsQ0FBQyxHQUFYLENBQWUsQ0FBZixFQUFrQixJQUFsQjtBQUNBLFNBQU8sQ0FBUDtBQUNELENBTEU7QUFPQSxNQUFNLFdBQVcsR0FBSSxDQUFELElBQWlDO0FBQzFELFNBQU8sT0FBTyxDQUFQLEtBQWEsVUFBYixJQUEyQixVQUFVLENBQUMsR0FBWCxDQUFlLENBQWYsQ0FBbEM7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEUDtBQUFBOzs7Ozs7Ozs7Ozs7OztBQXNCQTs7O0FBR08sTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLGNBQVAsS0FBMEIsU0FBMUIsSUFDdkIsTUFBTSxDQUFDLGNBQVAsQ0FBNEMseUJBQTVDLEtBQ0csU0FGRDtBQUlQOzs7Ozs7O0FBTU8sTUFBTSxhQUFhLEdBQ3RCLENBQUMsU0FBRCxFQUNDLEtBREQsRUFFQyxNQUFpQixJQUZsQixFQUdDLFNBQW9CLElBSHJCLEtBR21DO0FBQ2pDLE1BQUksSUFBSSxHQUFHLEtBQVg7O0FBQ0EsU0FBTyxJQUFJLEtBQUssR0FBaEIsRUFBcUI7QUFDbkIsVUFBTSxDQUFDLEdBQUcsSUFBSyxDQUFDLFdBQWhCO0FBQ0EsYUFBUyxDQUFDLFlBQVYsQ0FBdUIsSUFBdkIsRUFBOEIsTUFBOUI7QUFDQSxRQUFJLEdBQUcsQ0FBUDtBQUNEO0FBQ0YsQ0FYRTtBQWFQOzs7OztBQUlPLE1BQU0sV0FBVyxHQUNwQixDQUFDLFNBQUQsRUFBa0IsU0FBbEIsRUFBd0MsVUFBcUIsSUFBN0QsS0FDVztBQUNMLE1BQUksSUFBSSxHQUFHLFNBQVg7O0FBQ0EsU0FBTyxJQUFJLEtBQUssT0FBaEIsRUFBeUI7QUFDdkIsVUFBTSxDQUFDLEdBQUcsSUFBSyxDQUFDLFdBQWhCO0FBQ0EsYUFBUyxDQUFDLFdBQVYsQ0FBc0IsSUFBdEI7QUFDQSxRQUFJLEdBQUcsQ0FBUDtBQUNEO0FBQ0YsQ0FURixDOzs7Ozs7Ozs7Ozs7Ozs7QUNwRFA7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7O0FBSUE7QUFFQSxNQUFNLGdCQUFnQixHQUFHO0FBQUk7QUFBN0I7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQk0sU0FBVSx1QkFBVixDQUNGLFFBREUsRUFDa0IsYUFEbEIsRUFDMEM7QUFDOUMsUUFBTTtBQUFDLFdBQU8sRUFBRTtBQUFDO0FBQUQsS0FBVjtBQUFxQjtBQUFyQixNQUE4QixRQUFwQztBQUNBLFFBQU0sTUFBTSxHQUNSLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxnQkFBbkMsRUFBcUQsSUFBckQsRUFBMkQsS0FBM0QsQ0FESjtBQUVBLE1BQUksU0FBUyxHQUFHLDhCQUE4QixDQUFDLEtBQUQsQ0FBOUM7QUFDQSxNQUFJLElBQUksR0FBRyxLQUFLLENBQUMsU0FBRCxDQUFoQjtBQUNBLE1BQUksU0FBUyxHQUFHLENBQUMsQ0FBakI7QUFDQSxNQUFJLFdBQVcsR0FBRyxDQUFsQjtBQUNBLFFBQU0sdUJBQXVCLEdBQUcsRUFBaEM7QUFDQSxNQUFJLG1CQUFtQixHQUFjLElBQXJDOztBQUNBLFNBQU8sTUFBTSxDQUFDLFFBQVAsRUFBUCxFQUEwQjtBQUN4QixhQUFTO0FBQ1QsVUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQXBCLENBRndCLENBR3hCOztBQUNBLFFBQUksSUFBSSxDQUFDLGVBQUwsS0FBeUIsbUJBQTdCLEVBQWtEO0FBQ2hELHlCQUFtQixHQUFHLElBQXRCO0FBQ0QsS0FOdUIsQ0FPeEI7OztBQUNBLFFBQUksYUFBYSxDQUFDLEdBQWQsQ0FBa0IsSUFBbEIsQ0FBSixFQUE2QjtBQUMzQiw2QkFBdUIsQ0FBQyxJQUF4QixDQUE2QixJQUE3QixFQUQyQixDQUUzQjs7QUFDQSxVQUFJLG1CQUFtQixLQUFLLElBQTVCLEVBQWtDO0FBQ2hDLDJCQUFtQixHQUFHLElBQXRCO0FBQ0Q7QUFDRixLQWR1QixDQWV4Qjs7O0FBQ0EsUUFBSSxtQkFBbUIsS0FBSyxJQUE1QixFQUFrQztBQUNoQyxpQkFBVztBQUNaOztBQUNELFdBQU8sSUFBSSxLQUFLLFNBQVQsSUFBc0IsSUFBSSxDQUFDLEtBQUwsS0FBZSxTQUE1QyxFQUF1RDtBQUNyRDtBQUNBO0FBQ0EsVUFBSSxDQUFDLEtBQUwsR0FBYSxtQkFBbUIsS0FBSyxJQUF4QixHQUErQixDQUFDLENBQWhDLEdBQW9DLElBQUksQ0FBQyxLQUFMLEdBQWEsV0FBOUQsQ0FIcUQsQ0FJckQ7O0FBQ0EsZUFBUyxHQUFHLDhCQUE4QixDQUFDLEtBQUQsRUFBUSxTQUFSLENBQTFDO0FBQ0EsVUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFELENBQVo7QUFDRDtBQUNGOztBQUNELHlCQUF1QixDQUFDLE9BQXhCLENBQWlDLENBQUQsSUFBTyxDQUFDLENBQUMsVUFBRixDQUFjLFdBQWQsQ0FBMEIsQ0FBMUIsQ0FBdkM7QUFDRDs7QUFFRCxNQUFNLFVBQVUsR0FBSSxJQUFELElBQWU7QUFDaEMsTUFBSSxLQUFLLEdBQUksSUFBSSxDQUFDLFFBQUwsS0FBa0I7QUFBRztBQUF0QixJQUEyRCxDQUEzRCxHQUErRCxDQUEzRTtBQUNBLFFBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixJQUExQixFQUFnQyxnQkFBaEMsRUFBa0QsSUFBbEQsRUFBd0QsS0FBeEQsQ0FBZjs7QUFDQSxTQUFPLE1BQU0sQ0FBQyxRQUFQLEVBQVAsRUFBMEI7QUFDeEIsU0FBSztBQUNOOztBQUNELFNBQU8sS0FBUDtBQUNELENBUEQ7O0FBU0EsTUFBTSw4QkFBOEIsR0FDaEMsQ0FBQyxLQUFELEVBQXdCLGFBQXFCLENBQUMsQ0FBOUMsS0FBbUQ7QUFDakQsT0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBMUIsRUFBNkIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUF2QyxFQUErQyxDQUFDLEVBQWhELEVBQW9EO0FBQ2xELFVBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFELENBQWxCOztBQUNBLFFBQUkseUVBQW9CLENBQUMsSUFBRCxDQUF4QixFQUFnQztBQUM5QixhQUFPLENBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sQ0FBQyxDQUFSO0FBQ0QsQ0FUTDtBQVdBOzs7Ozs7O0FBS00sU0FBVSxzQkFBVixDQUNGLFFBREUsRUFDa0IsSUFEbEIsRUFDOEIsVUFBcUIsSUFEbkQsRUFDdUQ7QUFDM0QsUUFBTTtBQUFDLFdBQU8sRUFBRTtBQUFDO0FBQUQsS0FBVjtBQUFxQjtBQUFyQixNQUE4QixRQUFwQyxDQUQyRCxDQUUzRDtBQUNBOztBQUNBLE1BQUksT0FBTyxLQUFLLElBQVosSUFBb0IsT0FBTyxLQUFLLFNBQXBDLEVBQStDO0FBQzdDLFdBQU8sQ0FBQyxXQUFSLENBQW9CLElBQXBCO0FBQ0E7QUFDRDs7QUFDRCxRQUFNLE1BQU0sR0FDUixRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsZ0JBQW5DLEVBQXFELElBQXJELEVBQTJELEtBQTNELENBREo7QUFFQSxNQUFJLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQyxLQUFELENBQTlDO0FBQ0EsTUFBSSxXQUFXLEdBQUcsQ0FBbEI7QUFDQSxNQUFJLFdBQVcsR0FBRyxDQUFDLENBQW5COztBQUNBLFNBQU8sTUFBTSxDQUFDLFFBQVAsRUFBUCxFQUEwQjtBQUN4QixlQUFXO0FBQ1gsVUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQTFCOztBQUNBLFFBQUksVUFBVSxLQUFLLE9BQW5CLEVBQTRCO0FBQzFCLGlCQUFXLEdBQUcsVUFBVSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxhQUFPLENBQUMsVUFBUixDQUFvQixZQUFwQixDQUFpQyxJQUFqQyxFQUF1QyxPQUF2QztBQUNEOztBQUNELFdBQU8sU0FBUyxLQUFLLENBQUMsQ0FBZixJQUFvQixLQUFLLENBQUMsU0FBRCxDQUFMLENBQWlCLEtBQWpCLEtBQTJCLFdBQXRELEVBQW1FO0FBQ2pFO0FBQ0EsVUFBSSxXQUFXLEdBQUcsQ0FBbEIsRUFBcUI7QUFDbkIsZUFBTyxTQUFTLEtBQUssQ0FBQyxDQUF0QixFQUF5QjtBQUN2QixlQUFLLENBQUMsU0FBRCxDQUFMLENBQWlCLEtBQWpCLElBQTBCLFdBQTFCO0FBQ0EsbUJBQVMsR0FBRyw4QkFBOEIsQ0FBQyxLQUFELEVBQVEsU0FBUixDQUExQztBQUNEOztBQUNEO0FBQ0Q7O0FBQ0QsZUFBUyxHQUFHLDhCQUE4QixDQUFDLEtBQUQsRUFBUSxTQUFSLENBQTFDO0FBQ0Q7QUFDRjtBQUNGLEM7Ozs7Ozs7Ozs7Ozs7O0FDMUlEO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBcUNBOzs7O0FBSU8sTUFBTSxRQUFRLEdBQVcsRUFBekI7QUFFUDs7OztBQUdPLE1BQU0sT0FBTyxHQUFHLEVBQWhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNQO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlPLE1BQU0sV0FBVyxHQUFJLEtBQUQsSUFBdUM7QUFDaEUsU0FDSSxLQUFLLEtBQUssSUFBVixJQUNBLEVBQUUsT0FBTyxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLE9BQU8sS0FBUCxLQUFpQixVQUFoRCxDQUZKO0FBR0QsQ0FKTTtBQU1QOzs7OztBQUlNLE1BQU8sa0JBQVAsQ0FBeUI7QUFPN0IsY0FBWSxPQUFaLEVBQThCLElBQTlCLEVBQTRDLE9BQTVDLEVBQTZEO0FBRjdELGlCQUFRLElBQVI7QUFHRSxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLEtBQUwsR0FBYSxFQUFiOztBQUNBLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQVIsR0FBaUIsQ0FBckMsRUFBd0MsQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxXQUFLLEtBQUwsQ0FBVyxDQUFYLElBQWdCLEtBQUssV0FBTCxFQUFoQjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7QUFHVSxhQUFXO0FBQ25CLFdBQU8sSUFBSSxhQUFKLENBQWtCLElBQWxCLENBQVA7QUFDRDs7QUFFUyxXQUFTO0FBQ2pCLFVBQU0sT0FBTyxHQUFHLEtBQUssT0FBckI7QUFDQSxVQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBUixHQUFpQixDQUEzQjtBQUNBLFFBQUksSUFBSSxHQUFHLEVBQVg7O0FBRUEsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxDQUFwQixFQUF1QixDQUFDLEVBQXhCLEVBQTRCO0FBQzFCLFVBQUksSUFBSSxPQUFPLENBQUMsQ0FBRCxDQUFmO0FBQ0EsWUFBTSxJQUFJLEdBQUcsS0FBSyxLQUFMLENBQVcsQ0FBWCxDQUFiOztBQUNBLFVBQUksSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDdEIsY0FBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQWY7O0FBQ0EsWUFBSSxDQUFDLElBQUksSUFBTCxLQUNDLEtBQUssQ0FBQyxPQUFOLENBQWMsQ0FBZCxLQUNBO0FBQ0EsZUFBTyxDQUFQLEtBQWEsUUFBYixJQUEwQixDQUFTLENBQUMsTUFBTSxDQUFDLFFBQVIsQ0FIcEMsQ0FBSixFQUc0RDtBQUMxRCxlQUFLLE1BQU0sQ0FBWCxJQUFnQixDQUFoQixFQUF3QztBQUN0QyxnQkFBSSxJQUFJLE9BQU8sQ0FBUCxLQUFhLFFBQWIsR0FBd0IsQ0FBeEIsR0FBNEIsTUFBTSxDQUFDLENBQUQsQ0FBMUM7QUFDRDtBQUNGLFNBUEQsTUFPTztBQUNMLGNBQUksSUFBSSxPQUFPLENBQVAsS0FBYSxRQUFiLEdBQXdCLENBQXhCLEdBQTRCLE1BQU0sQ0FBQyxDQUFELENBQTFDO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFFBQUksSUFBSSxPQUFPLENBQUMsQ0FBRCxDQUFmO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBTTtBQUNKLFFBQUksS0FBSyxLQUFULEVBQWdCO0FBQ2QsV0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLFdBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsS0FBSyxJQUEvQixFQUFxQyxLQUFLLFNBQUwsRUFBckM7QUFDRDtBQUNGOztBQXhENEI7QUEyRHpCLE1BQU8sYUFBUCxDQUFvQjtBQUl4QixjQUFZLFFBQVosRUFBd0M7QUFGeEMsaUJBQWlCLFNBQWpCO0FBR0UsU0FBSyxTQUFMLEdBQWlCLFFBQWpCO0FBQ0Q7O0FBRUQsVUFBUSxDQUFDLEtBQUQsRUFBZTtBQUNyQixRQUFJLEtBQUssS0FBSyxpREFBVixLQUF1QixDQUFDLFdBQVcsQ0FBQyxLQUFELENBQVosSUFBdUIsS0FBSyxLQUFLLEtBQUssS0FBN0QsQ0FBSixFQUF5RTtBQUN2RSxXQUFLLEtBQUwsR0FBYSxLQUFiLENBRHVFLENBRXZFO0FBQ0E7QUFDQTs7QUFDQSxVQUFJLENBQUMsaUVBQVcsQ0FBQyxLQUFELENBQWhCLEVBQXlCO0FBQ3ZCLGFBQUssU0FBTCxDQUFlLEtBQWYsR0FBdUIsSUFBdkI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsUUFBTTtBQUNKLFdBQU8saUVBQVcsQ0FBQyxLQUFLLEtBQU4sQ0FBbEIsRUFBZ0M7QUFDOUIsWUFBTSxTQUFTLEdBQUcsS0FBSyxLQUF2QjtBQUNBLFdBQUssS0FBTCxHQUFhLGlEQUFiO0FBQ0EsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEOztBQUNELFFBQUksS0FBSyxLQUFMLEtBQWUsaURBQW5CLEVBQTZCO0FBQzNCO0FBQ0Q7O0FBQ0QsU0FBSyxTQUFMLENBQWUsTUFBZjtBQUNEOztBQTlCdUI7QUFpQ3BCLE1BQU8sUUFBUCxDQUFlO0FBT25CLGNBQVksT0FBWixFQUFrQztBQUhsQyxpQkFBaUIsU0FBakI7QUFDQSx5QkFBeUIsU0FBekI7QUFHRSxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFlBQVUsQ0FBQyxTQUFELEVBQWdCO0FBQ3hCLFNBQUssU0FBTCxHQUFpQixTQUFTLENBQUMsV0FBVixDQUFzQixpRUFBWSxFQUFsQyxDQUFqQjtBQUNBLFNBQUssT0FBTCxHQUFlLFNBQVMsQ0FBQyxXQUFWLENBQXNCLGlFQUFZLEVBQWxDLENBQWY7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxpQkFBZSxDQUFDLEdBQUQsRUFBVTtBQUN2QixTQUFLLFNBQUwsR0FBaUIsR0FBakI7QUFDQSxTQUFLLE9BQUwsR0FBZSxHQUFHLENBQUMsV0FBbkI7QUFDRDtBQUVEOzs7Ozs7O0FBS0EsZ0JBQWMsQ0FBQyxJQUFELEVBQWU7QUFDM0IsUUFBSSxDQUFDLE9BQUwsQ0FBYSxLQUFLLFNBQUwsR0FBaUIsaUVBQVksRUFBMUM7O0FBQ0EsUUFBSSxDQUFDLE9BQUwsQ0FBYSxLQUFLLE9BQUwsR0FBZSxpRUFBWSxFQUF4QztBQUNEO0FBRUQ7Ozs7Ozs7QUFLQSxpQkFBZSxDQUFDLEdBQUQsRUFBYztBQUMzQixPQUFHLENBQUMsT0FBSixDQUFZLEtBQUssU0FBTCxHQUFpQixpRUFBWSxFQUF6Qzs7QUFDQSxTQUFLLE9BQUwsR0FBZSxHQUFHLENBQUMsT0FBbkI7QUFDQSxPQUFHLENBQUMsT0FBSixHQUFjLEtBQUssU0FBbkI7QUFDRDs7QUFFRCxVQUFRLENBQUMsS0FBRCxFQUFlO0FBQ3JCLFNBQUssYUFBTCxHQUFxQixLQUFyQjtBQUNEOztBQUVELFFBQU07QUFDSixXQUFPLGlFQUFXLENBQUMsS0FBSyxhQUFOLENBQWxCLEVBQXdDO0FBQ3RDLFlBQU0sU0FBUyxHQUFHLEtBQUssYUFBdkI7QUFDQSxXQUFLLGFBQUwsR0FBcUIsaURBQXJCO0FBQ0EsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEOztBQUNELFVBQU0sS0FBSyxHQUFHLEtBQUssYUFBbkI7O0FBQ0EsUUFBSSxLQUFLLEtBQUssaURBQWQsRUFBd0I7QUFDdEI7QUFDRDs7QUFDRCxRQUFJLFdBQVcsQ0FBQyxLQUFELENBQWYsRUFBd0I7QUFDdEIsVUFBSSxLQUFLLEtBQUssS0FBSyxLQUFuQixFQUEwQjtBQUN4QixhQUFLLFdBQUwsQ0FBaUIsS0FBakI7QUFDRDtBQUNGLEtBSkQsTUFJTyxJQUFJLEtBQUssWUFBWSxrRUFBckIsRUFBcUM7QUFDMUMsV0FBSyxxQkFBTCxDQUEyQixLQUEzQjtBQUNELEtBRk0sTUFFQSxJQUFJLEtBQUssWUFBWSxJQUFyQixFQUEyQjtBQUNoQyxXQUFLLFdBQUwsQ0FBaUIsS0FBakI7QUFDRCxLQUZNLE1BRUEsSUFDSCxLQUFLLENBQUMsT0FBTixDQUFjLEtBQWQsS0FDQTtBQUNDLFNBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUixDQUhYLEVBRzhCO0FBQ25DLFdBQUssZUFBTCxDQUFxQixLQUFyQjtBQUNELEtBTE0sTUFLQSxJQUFJLEtBQUssS0FBSyxnREFBZCxFQUF1QjtBQUM1QixXQUFLLEtBQUwsR0FBYSxnREFBYjtBQUNBLFdBQUssS0FBTDtBQUNELEtBSE0sTUFHQTtBQUNMO0FBQ0EsV0FBSyxXQUFMLENBQWlCLEtBQWpCO0FBQ0Q7QUFDRjs7QUFFTyxTQUFPLENBQUMsSUFBRCxFQUFXO0FBQ3hCLFNBQUssT0FBTCxDQUFhLFVBQWIsQ0FBeUIsWUFBekIsQ0FBc0MsSUFBdEMsRUFBNEMsS0FBSyxPQUFqRDtBQUNEOztBQUVPLGFBQVcsQ0FBQyxLQUFELEVBQVk7QUFDN0IsUUFBSSxLQUFLLEtBQUwsS0FBZSxLQUFuQixFQUEwQjtBQUN4QjtBQUNEOztBQUNELFNBQUssS0FBTDs7QUFDQSxTQUFLLE9BQUwsQ0FBYSxLQUFiOztBQUNBLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDRDs7QUFFTyxhQUFXLENBQUMsS0FBRCxFQUFlO0FBQ2hDLFVBQU0sSUFBSSxHQUFHLEtBQUssU0FBTCxDQUFlLFdBQTVCO0FBQ0EsU0FBSyxHQUFHLEtBQUssSUFBSSxJQUFULEdBQWdCLEVBQWhCLEdBQXFCLEtBQTdCOztBQUNBLFFBQUksSUFBSSxLQUFLLEtBQUssT0FBTCxDQUFhLGVBQXRCLElBQ0EsSUFBSSxDQUFDLFFBQUwsS0FBa0I7QUFBRTtBQUR4QixNQUM4QztBQUM1QztBQUNBO0FBQ0E7QUFDQyxZQUFhLENBQUMsSUFBZCxHQUFxQixLQUFyQjtBQUNGLE9BTkQsTUFNTztBQUNMLFdBQUssV0FBTCxDQUFpQixRQUFRLENBQUMsY0FBVCxDQUNiLE9BQU8sS0FBUCxLQUFpQixRQUFqQixHQUE0QixLQUE1QixHQUFvQyxNQUFNLENBQUMsS0FBRCxDQUQ3QixDQUFqQjtBQUVEOztBQUNELFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDRDs7QUFFTyx1QkFBcUIsQ0FBQyxLQUFELEVBQXNCO0FBQ2pELFVBQU0sUUFBUSxHQUFHLEtBQUssT0FBTCxDQUFhLGVBQWIsQ0FBNkIsS0FBN0IsQ0FBakI7O0FBQ0EsUUFBSSxLQUFLLEtBQUwsWUFBc0Isc0VBQXRCLElBQ0EsS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixRQUQ1QixFQUNzQztBQUNwQyxXQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEtBQUssQ0FBQyxNQUF4QjtBQUNELEtBSEQsTUFHTztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBTSxRQUFRLEdBQ1YsSUFBSSxzRUFBSixDQUFxQixRQUFyQixFQUErQixLQUFLLENBQUMsU0FBckMsRUFBZ0QsS0FBSyxPQUFyRCxDQURKOztBQUVBLFlBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFULEVBQWpCOztBQUNBLGNBQVEsQ0FBQyxNQUFULENBQWdCLEtBQUssQ0FBQyxNQUF0Qjs7QUFDQSxXQUFLLFdBQUwsQ0FBaUIsUUFBakI7O0FBQ0EsV0FBSyxLQUFMLEdBQWEsUUFBYjtBQUNEO0FBQ0Y7O0FBRU8saUJBQWUsQ0FBQyxLQUFELEVBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQUksQ0FBQyxLQUFLLENBQUMsT0FBTixDQUFjLEtBQUssS0FBbkIsQ0FBTCxFQUFnQztBQUM5QixXQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsV0FBSyxLQUFMO0FBQ0QsS0FkNkMsQ0FnQjlDO0FBQ0E7OztBQUNBLFVBQU0sU0FBUyxHQUFHLEtBQUssS0FBdkI7QUFDQSxRQUFJLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFFBQUksUUFBSjs7QUFFQSxTQUFLLE1BQU0sSUFBWCxJQUFtQixLQUFuQixFQUEwQjtBQUN4QjtBQUNBLGNBQVEsR0FBRyxTQUFTLENBQUMsU0FBRCxDQUFwQixDQUZ3QixDQUl4Qjs7QUFDQSxVQUFJLFFBQVEsS0FBSyxTQUFqQixFQUE0QjtBQUMxQixnQkFBUSxHQUFHLElBQUksUUFBSixDQUFhLEtBQUssT0FBbEIsQ0FBWDtBQUNBLGlCQUFTLENBQUMsSUFBVixDQUFlLFFBQWY7O0FBQ0EsWUFBSSxTQUFTLEtBQUssQ0FBbEIsRUFBcUI7QUFDbkIsa0JBQVEsQ0FBQyxjQUFULENBQXdCLElBQXhCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsa0JBQVEsQ0FBQyxlQUFULENBQXlCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBYixDQUFsQztBQUNEO0FBQ0Y7O0FBQ0QsY0FBUSxDQUFDLFFBQVQsQ0FBa0IsSUFBbEI7QUFDQSxjQUFRLENBQUMsTUFBVDtBQUNBLGVBQVM7QUFDVjs7QUFFRCxRQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBMUIsRUFBa0M7QUFDaEM7QUFDQSxlQUFTLENBQUMsTUFBVixHQUFtQixTQUFuQjtBQUNBLFdBQUssS0FBTCxDQUFXLFFBQVEsSUFBSSxRQUFTLENBQUMsT0FBakM7QUFDRDtBQUNGOztBQUVELE9BQUssQ0FBQyxZQUFrQixLQUFLLFNBQXhCLEVBQWlDO0FBQ3BDLCtEQUFXLENBQ1AsS0FBSyxTQUFMLENBQWUsVUFEUixFQUNxQixTQUFTLENBQUMsV0FEL0IsRUFDNkMsS0FBSyxPQURsRCxDQUFYO0FBRUQ7O0FBN0xrQjtBQWdNckI7Ozs7Ozs7O0FBT00sTUFBTyxvQkFBUCxDQUEyQjtBQU8vQixjQUFZLE9BQVosRUFBOEIsSUFBOUIsRUFBNEMsT0FBNUMsRUFBNkQ7QUFIN0QsaUJBQWlCLFNBQWpCO0FBQ0EseUJBQXlCLFNBQXpCOztBQUdFLFFBQUksT0FBTyxDQUFDLE1BQVIsS0FBbUIsQ0FBbkIsSUFBd0IsT0FBTyxDQUFDLENBQUQsQ0FBUCxLQUFlLEVBQXZDLElBQTZDLE9BQU8sQ0FBQyxDQUFELENBQVAsS0FBZSxFQUFoRSxFQUFvRTtBQUNsRSxZQUFNLElBQUksS0FBSixDQUNGLHlEQURFLENBQU47QUFFRDs7QUFDRCxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDRDs7QUFFRCxVQUFRLENBQUMsS0FBRCxFQUFlO0FBQ3JCLFNBQUssYUFBTCxHQUFxQixLQUFyQjtBQUNEOztBQUVELFFBQU07QUFDSixXQUFPLGlFQUFXLENBQUMsS0FBSyxhQUFOLENBQWxCLEVBQXdDO0FBQ3RDLFlBQU0sU0FBUyxHQUFHLEtBQUssYUFBdkI7QUFDQSxXQUFLLGFBQUwsR0FBcUIsaURBQXJCO0FBQ0EsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEOztBQUNELFFBQUksS0FBSyxhQUFMLEtBQXVCLGlEQUEzQixFQUFxQztBQUNuQztBQUNEOztBQUNELFVBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLGFBQXJCOztBQUNBLFFBQUksS0FBSyxLQUFMLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsVUFBSSxLQUFKLEVBQVc7QUFDVCxhQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLEtBQUssSUFBL0IsRUFBcUMsRUFBckM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLE9BQUwsQ0FBYSxlQUFiLENBQTZCLEtBQUssSUFBbEM7QUFDRDtBQUNGOztBQUNELFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLLGFBQUwsR0FBcUIsaURBQXJCO0FBQ0Q7O0FBeEM4QjtBQTJDakM7Ozs7Ozs7Ozs7QUFTTSxNQUFPLGlCQUFQLFNBQWlDLGtCQUFqQyxDQUFtRDtBQUd2RCxjQUFZLE9BQVosRUFBOEIsSUFBOUIsRUFBNEMsT0FBNUMsRUFBNkQ7QUFDM0QsVUFBTSxPQUFOLEVBQWUsSUFBZixFQUFxQixPQUFyQjtBQUNBLFNBQUssTUFBTCxHQUNLLE9BQU8sQ0FBQyxNQUFSLEtBQW1CLENBQW5CLElBQXdCLE9BQU8sQ0FBQyxDQUFELENBQVAsS0FBZSxFQUF2QyxJQUE2QyxPQUFPLENBQUMsQ0FBRCxDQUFQLEtBQWUsRUFEakU7QUFFRDs7QUFFUyxhQUFXO0FBQ25CLFdBQU8sSUFBSSxZQUFKLENBQWlCLElBQWpCLENBQVA7QUFDRDs7QUFFRCxXQUFTO0FBQ1AsUUFBSSxLQUFLLE1BQVQsRUFBaUI7QUFDZixhQUFPLEtBQUssS0FBTCxDQUFXLENBQVgsRUFBYyxLQUFyQjtBQUNEOztBQUNELFdBQU8sTUFBTSxTQUFOLEVBQVA7QUFDRDs7QUFFRCxRQUFNO0FBQ0osUUFBSSxLQUFLLEtBQVQsRUFBZ0I7QUFDZCxXQUFLLEtBQUwsR0FBYSxLQUFiLENBRGMsQ0FFZDs7QUFDQyxXQUFLLE9BQUwsQ0FBcUIsS0FBSyxJQUExQixJQUFrQyxLQUFLLFNBQUwsRUFBbEM7QUFDRjtBQUNGOztBQTFCc0Q7QUE2Qm5ELE1BQU8sWUFBUCxTQUE0QixhQUE1QixDQUF5QyxFLENBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUkscUJBQXFCLEdBQUcsS0FBNUI7O0FBRUEsSUFBSTtBQUNGLFFBQU0sT0FBTyxHQUFHO0FBQ2QsUUFBSSxPQUFKLEdBQVc7QUFDVCwyQkFBcUIsR0FBRyxJQUF4QjtBQUNBLGFBQU8sS0FBUDtBQUNEOztBQUphLEdBQWhCLENBREUsQ0FPRjs7QUFDQSxRQUFNLENBQUMsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsT0FBaEMsRUFBZ0QsT0FBaEQsRUFSRSxDQVNGOztBQUNBLFFBQU0sQ0FBQyxtQkFBUCxDQUEyQixNQUEzQixFQUFtQyxPQUFuQyxFQUFtRCxPQUFuRDtBQUNELENBWEQsQ0FXRSxPQUFPLEVBQVAsRUFBVyxDQUNaOztBQUtLLE1BQU8sU0FBUCxDQUFnQjtBQVNwQixjQUFZLE9BQVosRUFBOEIsU0FBOUIsRUFBaUQsWUFBakQsRUFBMkU7QUFMM0UsaUJBQTJDLFNBQTNDO0FBRUEseUJBQW1ELFNBQW5EO0FBSUUsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFNBQUssWUFBTCxHQUFvQixZQUFwQjs7QUFDQSxTQUFLLGlCQUFMLEdBQTBCLENBQUQsSUFBTyxLQUFLLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBaEM7QUFDRDs7QUFFRCxVQUFRLENBQUMsS0FBRCxFQUF5QztBQUMvQyxTQUFLLGFBQUwsR0FBcUIsS0FBckI7QUFDRDs7QUFFRCxRQUFNO0FBQ0osV0FBTyxpRUFBVyxDQUFDLEtBQUssYUFBTixDQUFsQixFQUF3QztBQUN0QyxZQUFNLFNBQVMsR0FBRyxLQUFLLGFBQXZCO0FBQ0EsV0FBSyxhQUFMLEdBQXFCLGlEQUFyQjtBQUNBLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRDs7QUFDRCxRQUFJLEtBQUssYUFBTCxLQUF1QixpREFBM0IsRUFBcUM7QUFDbkM7QUFDRDs7QUFFRCxVQUFNLFdBQVcsR0FBRyxLQUFLLGFBQXpCO0FBQ0EsVUFBTSxXQUFXLEdBQUcsS0FBSyxLQUF6QjtBQUNBLFVBQU0sb0JBQW9CLEdBQUcsV0FBVyxJQUFJLElBQWYsSUFDekIsV0FBVyxJQUFJLElBQWYsS0FDSyxXQUFXLENBQUMsT0FBWixLQUF3QixXQUFXLENBQUMsT0FBcEMsSUFDQSxXQUFXLENBQUMsSUFBWixLQUFxQixXQUFXLENBQUMsSUFEakMsSUFFQSxXQUFXLENBQUMsT0FBWixLQUF3QixXQUFXLENBQUMsT0FIekMsQ0FESjtBQUtBLFVBQU0saUJBQWlCLEdBQ25CLFdBQVcsSUFBSSxJQUFmLEtBQXdCLFdBQVcsSUFBSSxJQUFmLElBQXVCLG9CQUEvQyxDQURKOztBQUdBLFFBQUksb0JBQUosRUFBMEI7QUFDeEIsV0FBSyxPQUFMLENBQWEsbUJBQWIsQ0FDSSxLQUFLLFNBRFQsRUFDb0IsS0FBSyxpQkFEekIsRUFDNEMsS0FBSyxRQURqRDtBQUVEOztBQUNELFFBQUksaUJBQUosRUFBdUI7QUFDckIsV0FBSyxRQUFMLEdBQWdCLFVBQVUsQ0FBQyxXQUFELENBQTFCO0FBQ0EsV0FBSyxPQUFMLENBQWEsZ0JBQWIsQ0FDSSxLQUFLLFNBRFQsRUFDb0IsS0FBSyxpQkFEekIsRUFDNEMsS0FBSyxRQURqRDtBQUVEOztBQUNELFNBQUssS0FBTCxHQUFhLFdBQWI7QUFDQSxTQUFLLGFBQUwsR0FBcUIsaURBQXJCO0FBQ0Q7O0FBRUQsYUFBVyxDQUFDLEtBQUQsRUFBYTtBQUN0QixRQUFJLE9BQU8sS0FBSyxLQUFaLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ3BDLFdBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBSyxZQUFMLElBQXFCLEtBQUssT0FBMUMsRUFBbUQsS0FBbkQ7QUFDRCxLQUZELE1BRU87QUFDSixXQUFLLEtBQUwsQ0FBbUMsV0FBbkMsQ0FBK0MsS0FBL0M7QUFDRjtBQUNGOztBQTNEbUIsQyxDQThEdEI7QUFDQTtBQUNBOztBQUNBLE1BQU0sVUFBVSxHQUFJLENBQUQsSUFBMEMsQ0FBQyxLQUN6RCxxQkFBcUIsR0FDakI7QUFBQyxTQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQVo7QUFBcUIsU0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFoQztBQUF5QyxNQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQWpELENBRGlCLEdBRWpCLENBQUMsQ0FBQyxPQUhtRCxDQUE5RCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BmQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBOzs7QUFJQTtBQUNBO0FBRUE7QUFHTyxNQUFNLEtBQUssR0FBRyxJQUFJLE9BQUosRUFBZDtBQUVQOzs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sTUFBTSxNQUFNLEdBQ2YsQ0FBQyxNQUFELEVBQ0MsU0FERCxFQUVDLE9BRkQsS0FFcUM7QUFDbkMsTUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQU4sQ0FBVSxTQUFWLENBQVg7O0FBQ0EsTUFBSSxJQUFJLEtBQUssU0FBYixFQUF3QjtBQUN0QiwrREFBVyxDQUFDLFNBQUQsRUFBWSxTQUFTLENBQUMsVUFBdEIsQ0FBWDtBQUNBLFNBQUssQ0FBQyxHQUFOLENBQVUsU0FBVixFQUFxQixJQUFJLEdBQUcsSUFBSSxrREFBSixDQUFZO0FBQ2pCO0FBRGlCLE9BRWQsT0FGYyxDQUFaLENBQTVCO0FBSUEsUUFBSSxDQUFDLFVBQUwsQ0FBZ0IsU0FBaEI7QUFDRDs7QUFDRCxNQUFJLENBQUMsUUFBTCxDQUFjLE1BQWQ7QUFDQSxNQUFJLENBQUMsTUFBTDtBQUNELENBZkUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q1A7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7OztBQVFBOzs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQSxNQUFNLG1CQUFtQixHQUFHLENBQUMsSUFBRCxFQUFlLFNBQWYsS0FDeEIsR0FBRyxJQUFJLEtBQUssU0FBUyxFQUR6Qjs7QUFHQSxJQUFJLHlCQUF5QixHQUFHLElBQWhDOztBQUVBLElBQUksT0FBTyxNQUFNLENBQUMsUUFBZCxLQUEyQixXQUEvQixFQUE0QztBQUMxQywyQkFBeUIsR0FBRyxLQUE1QjtBQUNELENBRkQsTUFFTyxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVAsQ0FBZ0Isa0JBQXZCLEtBQThDLFdBQWxELEVBQStEO0FBQ3BFLFNBQU8sQ0FBQyxJQUFSLENBQ0ksNENBQ0Esb0VBREEsR0FFQSxnQ0FISjtBQUlBLDJCQUF5QixHQUFHLEtBQTVCO0FBQ0Q7QUFFRDs7Ozs7O0FBSUEsTUFBTSxvQkFBb0IsR0FBSSxTQUFELElBQ3hCLE1BQUQsSUFBMkI7QUFDekIsUUFBTSxRQUFRLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLElBQVIsRUFBYyxTQUFkLENBQXBDO0FBQ0EsTUFBSSxhQUFhLEdBQUcsbUVBQWMsQ0FBQyxHQUFmLENBQW1CLFFBQW5CLENBQXBCOztBQUNBLE1BQUksYUFBYSxLQUFLLFNBQXRCLEVBQWlDO0FBQy9CLGlCQUFhLEdBQUc7QUFDZCxrQkFBWSxFQUFFLElBQUksT0FBSixFQURBO0FBRWQsZUFBUyxFQUFFLElBQUksR0FBSjtBQUZHLEtBQWhCO0FBSUEsdUVBQWMsQ0FBQyxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLGFBQTdCO0FBQ0Q7O0FBRUQsTUFBSSxRQUFRLEdBQUcsYUFBYSxDQUFDLFlBQWQsQ0FBMkIsR0FBM0IsQ0FBK0IsTUFBTSxDQUFDLE9BQXRDLENBQWY7O0FBQ0EsTUFBSSxRQUFRLEtBQUssU0FBakIsRUFBNEI7QUFDMUIsV0FBTyxRQUFQO0FBQ0Q7O0FBRUQsUUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQVAsQ0FBZSxJQUFmLENBQW9CLG1EQUFwQixDQUFaO0FBQ0EsVUFBUSxHQUFHLGFBQWEsQ0FBQyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLEdBQTVCLENBQVg7O0FBQ0EsTUFBSSxRQUFRLEtBQUssU0FBakIsRUFBNEI7QUFDMUIsVUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLGtCQUFQLEVBQWhCOztBQUNBLFFBQUkseUJBQUosRUFBK0I7QUFDN0IsWUFBTSxDQUFDLFFBQVAsQ0FBaUIsa0JBQWpCLENBQW9DLE9BQXBDLEVBQTZDLFNBQTdDO0FBQ0Q7O0FBQ0QsWUFBUSxHQUFHLElBQUkscURBQUosQ0FBYSxNQUFiLEVBQXFCLE9BQXJCLENBQVg7QUFDQSxpQkFBYSxDQUFDLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsR0FBNUIsRUFBaUMsUUFBakM7QUFDRDs7QUFDRCxlQUFhLENBQUMsWUFBZCxDQUEyQixHQUEzQixDQUErQixNQUFNLENBQUMsT0FBdEMsRUFBK0MsUUFBL0M7QUFDQSxTQUFPLFFBQVA7QUFDRCxDQTdCTDs7QUErQkEsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUFELEVBQVMsS0FBVCxDQUF2QjtBQUVBOzs7O0FBR0EsTUFBTSw0QkFBNEIsR0FBSSxTQUFELElBQXNCO0FBQ3pELGdCQUFjLENBQUMsT0FBZixDQUF3QixJQUFELElBQVM7QUFDOUIsVUFBTSxTQUFTLEdBQUcsbUVBQWMsQ0FBQyxHQUFmLENBQW1CLG1CQUFtQixDQUFDLElBQUQsRUFBTyxTQUFQLENBQXRDLENBQWxCOztBQUNBLFFBQUksU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQzNCLGVBQVMsQ0FBQyxTQUFWLENBQW9CLE9BQXBCLENBQTZCLFFBQUQsSUFBYTtBQUN2QyxjQUFNO0FBQUMsaUJBQU8sRUFBRTtBQUFDO0FBQUQ7QUFBVixZQUF1QixRQUE3QixDQUR1QyxDQUV2Qzs7QUFDQSxjQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUosRUFBZjtBQUNBLGFBQUssQ0FBQyxJQUFOLENBQVcsT0FBTyxDQUFDLGdCQUFSLENBQXlCLE9BQXpCLENBQVgsRUFBOEMsT0FBOUMsQ0FBdUQsQ0FBRCxJQUFlO0FBQ25FLGdCQUFNLENBQUMsR0FBUCxDQUFXLENBQVg7QUFDRCxTQUZEO0FBR0EsMkZBQXVCLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FBdkI7QUFDRCxPQVJEO0FBU0Q7QUFDRixHQWJEO0FBY0QsQ0FmRDs7QUFpQkEsTUFBTSxjQUFjLEdBQUcsSUFBSSxHQUFKLEVBQXZCO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBLE1BQU0scUJBQXFCLEdBQ3ZCLENBQUMsV0FBRCxFQUFnQyxRQUFoQyxFQUFvRCxTQUFwRCxLQUF5RTtBQUN2RSxnQkFBYyxDQUFDLEdBQWYsQ0FBbUIsU0FBbkIsRUFEdUUsQ0FFdkU7O0FBQ0EsUUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLGdCQUFaLENBQTZCLE9BQTdCLENBQWYsQ0FIdUUsQ0FJdkU7O0FBQ0EsTUFBSSxNQUFNLENBQUMsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxVQUFNLENBQUMsUUFBUCxDQUFpQixxQkFBakIsQ0FBdUMsUUFBUSxDQUFDLE9BQWhELEVBQXlELFNBQXpEO0FBQ0E7QUFDRDs7QUFDRCxRQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUF2QixDQVp1RSxDQWF2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQTNCLEVBQW1DLENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsVUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUQsQ0FBcEI7QUFDQSxTQUFLLENBQUMsVUFBTixDQUFrQixXQUFsQixDQUE4QixLQUE5QjtBQUNBLGtCQUFjLENBQUMsV0FBZixJQUErQixLQUFLLENBQUMsV0FBckM7QUFDRCxHQXRCc0UsQ0F1QnZFOzs7QUFDQSw4QkFBNEIsQ0FBQyxTQUFELENBQTVCLENBeEJ1RSxDQXlCdkU7QUFDQTs7QUFDQSxvRkFBc0IsQ0FDbEIsUUFEa0IsRUFDUixjQURRLEVBQ1EsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsT0FBakIsQ0FBeUIsVUFEakMsQ0FBdEIsQ0EzQnVFLENBNkJ2RTtBQUNBO0FBQ0E7O0FBQ0EsUUFBTSxDQUFDLFFBQVAsQ0FBaUIscUJBQWpCLENBQXVDLFFBQVEsQ0FBQyxPQUFoRCxFQUF5RCxTQUF6RDs7QUFDQSxNQUFJLE1BQU0sQ0FBQyxRQUFQLENBQWlCLFlBQXJCLEVBQW1DO0FBQ2pDO0FBQ0E7QUFDQSxVQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBVCxDQUFpQixPQUFqQixDQUF5QixhQUF6QixDQUF1QyxPQUF2QyxDQUFkO0FBQ0EsZUFBVyxDQUFDLFlBQVosQ0FBeUIsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBekIsRUFBZ0QsV0FBVyxDQUFDLFVBQTVEO0FBQ0QsR0FMRCxNQUtPO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBUSxDQUFDLE9BQVQsQ0FBaUIsT0FBakIsQ0FBeUIsWUFBekIsQ0FDSSxjQURKLEVBQ29CLFFBQVEsQ0FBQyxPQUFULENBQWlCLE9BQWpCLENBQXlCLFVBRDdDO0FBRUEsVUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFKLEVBQWhCO0FBQ0EsV0FBTyxDQUFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsdUZBQXVCLENBQUMsUUFBRCxFQUFXLE9BQVgsQ0FBdkI7QUFDRDtBQUNGLENBcERMO0FBMERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RPLE1BQU0sTUFBTSxHQUNmLENBQUMsTUFBRCxFQUNDLFNBREQsRUFFQyxPQUZELEtBRWdDO0FBQzlCLFFBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUExQjtBQUNBLFFBQU0sV0FBVyxHQUFHLGdEQUFLLENBQUMsR0FBTixDQUFVLFNBQVYsQ0FBcEI7QUFDQSxRQUFNLFlBQVksR0FBRyxTQUFTLFlBQVksVUFBckIsSUFDakIseUJBRGlCLElBQ1ksTUFBTSxZQUFZLGtFQURuRCxDQUg4QixDQUs5Qjs7QUFDQSxRQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFmLENBQW1CLFNBQW5CLENBQTFDLENBTjhCLENBTzlCO0FBQ0E7O0FBQ0EsUUFBTSxlQUFlLEdBQ2pCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxzQkFBVCxFQUFILEdBQXVDLFNBRDNEO0FBRUEsMkRBQVMsQ0FDTCxNQURLLEVBRUwsZUFGSyxFQUdMO0FBQUMsbUJBQWUsRUFBRSxvQkFBb0IsQ0FBQyxTQUFEO0FBQXRDLEtBQXNELE9BQXRELENBSEssQ0FBVCxDQVg4QixDQWdCOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUksZ0JBQUosRUFBc0I7QUFDcEIsVUFBTSxJQUFJLEdBQUcsZ0RBQUssQ0FBQyxHQUFOLENBQVUsZUFBVixDQUFiO0FBQ0Esb0RBQUssQ0FBQyxNQUFOLENBQWEsZUFBYjs7QUFDQSxRQUFJLElBQUksQ0FBQyxLQUFMLFlBQXNCLHNFQUExQixFQUE0QztBQUMxQywyQkFBcUIsQ0FDakIsZUFEaUIsRUFFakIsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUZNLEVBR2pCLFNBSGlCLENBQXJCO0FBSUQ7O0FBQ0QsK0RBQVcsQ0FBQyxTQUFELEVBQVksU0FBUyxDQUFDLFVBQXRCLENBQVg7QUFDQSxhQUFTLENBQUMsV0FBVixDQUFzQixlQUF0QjtBQUNBLG9EQUFLLENBQUMsR0FBTixDQUFVLFNBQVYsRUFBcUIsSUFBckI7QUFDRCxHQXJDNkIsQ0FzQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSSxDQUFDLFdBQUQsSUFBZ0IsWUFBcEIsRUFBa0M7QUFDaEMsVUFBTSxDQUFDLFFBQVAsQ0FBaUIsWUFBakIsQ0FBK0IsU0FBd0IsQ0FBQyxJQUF4RDtBQUNEO0FBQ0YsQ0FsREUsQzs7Ozs7Ozs7Ozs7Ozs7O0FDaFBQO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUF3QkE7Ozs7O0FBSU0sU0FBVSxlQUFWLENBQTBCLE1BQTFCLEVBQWdEO0FBQ3BELE1BQUksYUFBYSxHQUFHLGNBQWMsQ0FBQyxHQUFmLENBQW1CLE1BQU0sQ0FBQyxJQUExQixDQUFwQjs7QUFDQSxNQUFJLGFBQWEsS0FBSyxTQUF0QixFQUFpQztBQUMvQixpQkFBYSxHQUFHO0FBQ2Qsa0JBQVksRUFBRSxJQUFJLE9BQUosRUFEQTtBQUVkLGVBQVMsRUFBRSxJQUFJLEdBQUo7QUFGRyxLQUFoQjtBQUlBLGtCQUFjLENBQUMsR0FBZixDQUFtQixNQUFNLENBQUMsSUFBMUIsRUFBZ0MsYUFBaEM7QUFDRDs7QUFFRCxNQUFJLFFBQVEsR0FBRyxhQUFhLENBQUMsWUFBZCxDQUEyQixHQUEzQixDQUErQixNQUFNLENBQUMsT0FBdEMsQ0FBZjs7QUFDQSxNQUFJLFFBQVEsS0FBSyxTQUFqQixFQUE0QjtBQUMxQixXQUFPLFFBQVA7QUFDRCxHQWJtRCxDQWVwRDtBQUNBOzs7QUFDQSxRQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBUCxDQUFlLElBQWYsQ0FBb0IsbURBQXBCLENBQVosQ0FqQm9ELENBbUJwRDs7QUFDQSxVQUFRLEdBQUcsYUFBYSxDQUFDLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsR0FBNUIsQ0FBWDs7QUFDQSxNQUFJLFFBQVEsS0FBSyxTQUFqQixFQUE0QjtBQUMxQjtBQUNBLFlBQVEsR0FBRyxJQUFJLHFEQUFKLENBQWEsTUFBYixFQUFxQixNQUFNLENBQUMsa0JBQVAsRUFBckIsQ0FBWCxDQUYwQixDQUcxQjs7QUFDQSxpQkFBYSxDQUFDLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsR0FBNUIsRUFBaUMsUUFBakM7QUFDRCxHQTFCbUQsQ0E0QnBEOzs7QUFDQSxlQUFhLENBQUMsWUFBZCxDQUEyQixHQUEzQixDQUErQixNQUFNLENBQUMsT0FBdEMsRUFBK0MsUUFBL0M7QUFDQSxTQUFPLFFBQVA7QUFDRDtBQWlCTSxNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUosRUFBdkIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZQO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7OztBQUlBO0FBSUE7QUFFQTs7Ozs7QUFJTSxNQUFPLGdCQUFQLENBQXVCO0FBTTNCLGNBQ0ksUUFESixFQUN3QixTQUR4QixFQUVJLE9BRkosRUFFMEI7QUFQMUIsa0JBQWdDLEVBQWhDO0FBUUUsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNEOztBQUVELFFBQU0sQ0FBQyxNQUFELEVBQWtCO0FBQ3RCLFFBQUksQ0FBQyxHQUFHLENBQVI7O0FBQ0EsU0FBSyxNQUFNLElBQVgsSUFBbUIsS0FBSyxNQUF4QixFQUFnQztBQUM5QixVQUFJLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQ3RCLFlBQUksQ0FBQyxRQUFMLENBQWMsTUFBTSxDQUFDLENBQUQsQ0FBcEI7QUFDRDs7QUFDRCxPQUFDO0FBQ0Y7O0FBQ0QsU0FBSyxNQUFNLElBQVgsSUFBbUIsS0FBSyxNQUF4QixFQUFnQztBQUM5QixVQUFJLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQ3RCLFlBQUksQ0FBQyxNQUFMO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFFBQU07QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBTSxRQUFRLEdBQUcsb0RBQVksR0FDekIsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixPQUF0QixDQUE4QixTQUE5QixDQUF3QyxJQUF4QyxDQUR5QixHQUV6QixRQUFRLENBQUMsVUFBVCxDQUFvQixLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLE9BQTFDLEVBQW1ELElBQW5ELENBRko7QUFJQSxVQUFNLEtBQUssR0FBRyxLQUFLLFFBQUwsQ0FBYyxLQUE1QjtBQUNBLFFBQUksU0FBUyxHQUFHLENBQWhCO0FBQ0EsUUFBSSxTQUFTLEdBQUcsQ0FBaEI7O0FBQ0EsVUFBTSxnQkFBZ0IsR0FBSSxRQUFELElBQStCO0FBQ3REO0FBQ0E7QUFDQSxZQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FDWCxRQURXLEVBRVg7QUFBSTtBQUZPLFFBR1gsSUFIVyxFQUlYLEtBSlcsQ0FBZjtBQUtBLFVBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFQLEVBQVgsQ0FSc0QsQ0FTdEQ7O0FBQ0EsYUFBTyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQWxCLElBQTRCLElBQUksS0FBSyxJQUE1QyxFQUFrRDtBQUNoRCxjQUFNLElBQUksR0FBRyxLQUFLLENBQUMsU0FBRCxDQUFsQixDQURnRCxDQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsWUFBSSxDQUFDLHlFQUFvQixDQUFDLElBQUQsQ0FBekIsRUFBaUM7QUFDL0IsZUFBSyxNQUFMLENBQVksSUFBWixDQUFpQixTQUFqQjs7QUFDQSxtQkFBUztBQUNWLFNBSEQsTUFHTyxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBdkIsRUFBOEI7QUFDbkMsY0FBSSxJQUFJLENBQUMsSUFBTCxLQUFjLE1BQWxCLEVBQTBCO0FBQ3hCLGtCQUFNLElBQUksR0FBRyxLQUFLLFNBQUwsQ0FBZSxvQkFBZixDQUFvQyxLQUFLLE9BQXpDLENBQWI7QUFDQSxnQkFBSSxDQUFDLGVBQUwsQ0FBcUIsSUFBSSxDQUFDLGVBQTFCOztBQUNBLGlCQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCO0FBQ0QsV0FKRCxNQUlPO0FBQ0wsaUJBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsR0FBRyxLQUFLLFNBQUwsQ0FBZSwwQkFBZixDQUNoQixJQURnQixFQUNDLElBQUksQ0FBQyxJQUROLEVBQ1ksSUFBSSxDQUFDLE9BRGpCLEVBQzBCLEtBQUssT0FEL0IsQ0FBcEI7QUFFRDs7QUFDRCxtQkFBUztBQUNWLFNBVk0sTUFVQTtBQUNMLG1CQUFTOztBQUNULGNBQUksSUFBSSxDQUFDLFFBQUwsS0FBa0IsVUFBdEIsRUFBa0M7QUFDaEMsNEJBQWdCLENBQUUsSUFBNEIsQ0FBQyxPQUEvQixDQUFoQjtBQUNEOztBQUNELGNBQUksR0FBRyxNQUFNLENBQUMsUUFBUCxFQUFQO0FBQ0Q7QUFDRjtBQUNGLEtBdkNEOztBQXdDQSxvQkFBZ0IsQ0FBQyxRQUFELENBQWhCOztBQUNBLFFBQUksb0RBQUosRUFBa0I7QUFDaEIsY0FBUSxDQUFDLFNBQVQsQ0FBbUIsUUFBbkI7QUFDQSxvQkFBYyxDQUFDLE9BQWYsQ0FBdUIsUUFBdkI7QUFDRDs7QUFDRCxXQUFPLFFBQVA7QUFDRDs7QUF4RjBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjdCO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7OztBQUlBO0FBRUE7QUFFQTs7Ozs7QUFJTSxNQUFPLGNBQVAsQ0FBcUI7QUFNekIsY0FDSSxPQURKLEVBQ21DLE1BRG5DLEVBQ3NELElBRHRELEVBRUksU0FGSixFQUVnQztBQUM5QixTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsU0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDRDtBQUVEOzs7OztBQUdBLFNBQU87QUFDTCxVQUFNLFFBQVEsR0FBRyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEdBQXNCLENBQXZDO0FBQ0EsUUFBSSxJQUFJLEdBQUcsRUFBWDs7QUFDQSxTQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFFBQXBCLEVBQThCLENBQUMsRUFBL0IsRUFBbUM7QUFDakMsWUFBTSxDQUFDLEdBQUcsS0FBSyxPQUFMLENBQWEsQ0FBYixDQUFWLENBRGlDLENBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxZQUFNLEtBQUssR0FBRyxtRUFBc0IsQ0FBQyxJQUF2QixDQUE0QixDQUE1QixDQUFkOztBQUNBLFVBQUksS0FBSixFQUFXO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBVCxFQUFZLEtBQUssQ0FBQyxLQUFsQixJQUEyQixLQUFLLENBQUMsQ0FBRCxDQUFoQyxHQUFzQyxLQUFLLENBQUMsQ0FBRCxDQUEzQyxHQUNKLGlFQURJLEdBQ21CLEtBQUssQ0FBQyxDQUFELENBRHhCLEdBQzhCLG1EQUR0QztBQUVELE9BTkQsTUFNTztBQUNMO0FBQ0E7QUFDQSxZQUFJLElBQUksQ0FBQyxHQUFHLHVEQUFaO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPLElBQUksR0FBRyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQWQ7QUFDRDs7QUFFRCxvQkFBa0I7QUFDaEIsVUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBakI7QUFDQSxZQUFRLENBQUMsU0FBVCxHQUFxQixLQUFLLE9BQUwsRUFBckI7QUFDQSxXQUFPLFFBQVA7QUFDRDs7QUFwRHdCO0FBdUQzQjs7Ozs7Ozs7QUFPTSxNQUFPLGlCQUFQLFNBQWlDLGNBQWpDLENBQStDO0FBQ25ELFNBQU87QUFDTCxXQUFPLFFBQVEsTUFBTSxPQUFOLEVBQWUsUUFBOUI7QUFDRDs7QUFFRCxvQkFBa0I7QUFDaEIsVUFBTSxRQUFRLEdBQUcsTUFBTSxrQkFBTixFQUFqQjtBQUNBLFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUF6QjtBQUNBLFVBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUEzQjtBQUNBLFdBQU8sQ0FBQyxXQUFSLENBQW9CLFVBQXBCO0FBQ0EsaUVBQWEsQ0FBQyxPQUFELEVBQVUsVUFBVSxDQUFDLFVBQXJCLENBQWI7QUFDQSxXQUFPLFFBQVA7QUFDRDs7QUFaa0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RnJEO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOzs7O0FBSU8sTUFBTSxNQUFNLEdBQUcsU0FBUyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQUwsRUFBRCxDQUFOLENBQXNCLEtBQXRCLENBQTRCLENBQTVCLENBQThCLElBQXREO0FBRVA7Ozs7O0FBSU8sTUFBTSxVQUFVLEdBQUcsT0FBTyxNQUFNLEtBQWhDO0FBRUEsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFKLENBQVcsR0FBRyxNQUFNLElBQUksVUFBVSxFQUFsQyxDQUFwQjtBQUVQOzs7O0FBR08sTUFBTSxvQkFBb0IsR0FBRyxPQUE3QjtBQUVQOzs7O0FBR00sTUFBTyxRQUFQLENBQWU7QUFJbkIsY0FBWSxNQUFaLEVBQW9DLE9BQXBDLEVBQWdFO0FBSGhFLGlCQUF3QixFQUF4QjtBQUlFLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxRQUFJLEtBQUssR0FBRyxDQUFDLENBQWI7QUFDQSxRQUFJLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFVBQU0sYUFBYSxHQUFXLEVBQTlCOztBQUNBLFVBQU0sZ0JBQWdCLEdBQUksUUFBRCxJQUFrQztBQUN6RCxZQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBekIsQ0FEeUQsQ0FFekQ7QUFDQTs7QUFDQSxZQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FDWCxPQURXLEVBRVg7QUFBSTtBQUZPLFFBR1gsSUFIVyxFQUlYLEtBSlcsQ0FBZixDQUp5RCxDQVN6RDtBQUNBO0FBQ0E7O0FBQ0EsVUFBSSxhQUFhLEdBQUcsQ0FBcEI7O0FBQ0EsYUFBTyxNQUFNLENBQUMsUUFBUCxFQUFQLEVBQTBCO0FBQ3hCLGFBQUs7QUFDTCxjQUFNLElBQUksR0FBRyxNQUFNLENBQUMsV0FBcEI7O0FBQ0EsWUFBSSxJQUFJLENBQUMsUUFBTCxLQUFrQjtBQUFFO0FBQXhCLFVBQWlEO0FBQy9DLGdCQUFLLElBQWdCLENBQUMsYUFBakIsRUFBTCxFQUF1QztBQUNyQyxvQkFBTSxVQUFVLEdBQUksSUFBZ0IsQ0FBQyxVQUFyQyxDQURxQyxDQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGtCQUFJLEtBQUssR0FBRyxDQUFaOztBQUNBLG1CQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUEvQixFQUF1QyxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDLG9CQUFJLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBYyxLQUFkLENBQW9CLE9BQXBCLENBQTRCLE1BQTVCLEtBQXVDLENBQTNDLEVBQThDO0FBQzVDLHVCQUFLO0FBQ047QUFDRjs7QUFDRCxxQkFBTyxLQUFLLEtBQUssQ0FBakIsRUFBb0I7QUFDbEI7QUFDQTtBQUNBLHNCQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBUCxDQUFlLFNBQWYsQ0FBdEIsQ0FIa0IsQ0FJbEI7O0FBQ0Esc0JBQU0sSUFBSSxHQUFHLHNCQUFzQixDQUFDLElBQXZCLENBQTRCLGFBQTVCLEVBQTRDLENBQTVDLENBQWIsQ0FMa0IsQ0FNbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxzQkFBTSxtQkFBbUIsR0FDckIsSUFBSSxDQUFDLFdBQUwsS0FBcUIsb0JBRHpCO0FBRUEsc0JBQU0sY0FBYyxHQUNmLElBQWdCLENBQUMsWUFBakIsQ0FBOEIsbUJBQTlCLENBREw7QUFFQSxzQkFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLEtBQWYsQ0FBcUIsV0FBckIsQ0FBaEI7QUFDQSxxQkFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQjtBQUFDLHNCQUFJLEVBQUUsV0FBUDtBQUFvQix1QkFBcEI7QUFBMkIsc0JBQTNCO0FBQWlDO0FBQWpDLGlCQUFoQjtBQUNDLG9CQUFnQixDQUFDLGVBQWpCLENBQWlDLG1CQUFqQztBQUNELHlCQUFTLElBQUksT0FBTyxDQUFDLE1BQVIsR0FBaUIsQ0FBOUI7QUFDRDtBQUNGOztBQUNELGdCQUFLLElBQWdCLENBQUMsT0FBakIsS0FBNkIsVUFBbEMsRUFBOEM7QUFDNUMsOEJBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNEO0FBQ0YsV0F0Q0QsTUFzQ08sSUFBSSxJQUFJLENBQUMsUUFBTCxLQUFrQjtBQUFFO0FBQXhCLFVBQThDO0FBQ25ELGtCQUFNLElBQUksR0FBSSxJQUFhLENBQUMsSUFBNUI7O0FBQ0EsZ0JBQUksSUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFiLEtBQXdCLENBQTVCLEVBQStCO0FBQzdCLG9CQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBcEI7QUFDQSxvQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxXQUFYLENBQWhCO0FBQ0Esb0JBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLENBQW5DLENBSDZCLENBSTdCO0FBQ0E7O0FBQ0EsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsU0FBcEIsRUFBK0IsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQyxzQkFBTSxDQUFDLFlBQVAsQ0FDSyxPQUFPLENBQUMsQ0FBRCxDQUFQLEtBQWUsRUFBaEIsR0FBc0IsWUFBWSxFQUFsQyxHQUNzQixRQUFRLENBQUMsY0FBVCxDQUF3QixPQUFPLENBQUMsQ0FBRCxDQUEvQixDQUYxQixFQUdJLElBSEo7QUFJQSxxQkFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQjtBQUFDLHNCQUFJLEVBQUUsTUFBUDtBQUFlLHVCQUFLLEVBQUUsRUFBRTtBQUF4QixpQkFBaEI7QUFDRCxlQVo0QixDQWE3QjtBQUNBOzs7QUFDQSxrQkFBSSxPQUFPLENBQUMsU0FBRCxDQUFQLEtBQXVCLEVBQTNCLEVBQStCO0FBQzdCLHNCQUFNLENBQUMsWUFBUCxDQUFvQixZQUFZLEVBQWhDLEVBQW9DLElBQXBDO0FBQ0EsNkJBQWEsQ0FBQyxJQUFkLENBQW1CLElBQW5CO0FBQ0QsZUFIRCxNQUdPO0FBQ0osb0JBQWEsQ0FBQyxJQUFkLEdBQXFCLE9BQU8sQ0FBQyxTQUFELENBQTVCO0FBQ0YsZUFwQjRCLENBcUI3Qjs7O0FBQ0EsdUJBQVMsSUFBSSxTQUFiO0FBQ0Q7QUFDRixXQTFCTSxNQTBCQSxJQUFJLElBQUksQ0FBQyxRQUFMLEtBQWtCO0FBQUU7QUFBeEIsVUFBaUQ7QUFDdEQsZ0JBQUssSUFBZ0IsQ0FBQyxJQUFqQixLQUEwQixNQUEvQixFQUF1QztBQUNyQyxvQkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQXBCLENBRHFDLENBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGtCQUFJLElBQUksQ0FBQyxlQUFMLEtBQXlCLElBQXpCLElBQWlDLEtBQUssS0FBSyxhQUEvQyxFQUE4RDtBQUM1RCxxQkFBSztBQUNMLHNCQUFNLENBQUMsWUFBUCxDQUFvQixZQUFZLEVBQWhDLEVBQW9DLElBQXBDO0FBQ0Q7O0FBQ0QsMkJBQWEsR0FBRyxLQUFoQjtBQUNBLG1CQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCO0FBQUMsb0JBQUksRUFBRSxNQUFQO0FBQWU7QUFBZixlQUFoQixFQVhxQyxDQVlyQztBQUNBOztBQUNBLGtCQUFJLElBQUksQ0FBQyxXQUFMLEtBQXFCLElBQXpCLEVBQStCO0FBQzVCLG9CQUFnQixDQUFDLElBQWpCLEdBQXdCLEVBQXhCO0FBQ0YsZUFGRCxNQUVPO0FBQ0wsNkJBQWEsQ0FBQyxJQUFkLENBQW1CLElBQW5CO0FBQ0EscUJBQUs7QUFDTjs7QUFDRCx1QkFBUztBQUNWLGFBckJELE1BcUJPO0FBQ0wsa0JBQUksQ0FBQyxHQUFHLENBQUMsQ0FBVDs7QUFDQSxxQkFBTyxDQUFDLENBQUMsR0FBSSxJQUFnQixDQUFDLElBQWpCLENBQXVCLE9BQXZCLENBQStCLE1BQS9CLEVBQXVDLENBQUMsR0FBRyxDQUEzQyxDQUFOLE1BQ0EsQ0FBQyxDQURSLEVBQ1c7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCO0FBQUMsc0JBQUksRUFBRSxNQUFQO0FBQWUsdUJBQUssRUFBRSxDQUFDO0FBQXZCLGlCQUFoQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsS0FuSEQ7O0FBb0hBLG9CQUFnQixDQUFDLE9BQUQsQ0FBaEIsQ0F6SDhELENBMEg5RDs7O0FBQ0EsU0FBSyxNQUFNLENBQVgsSUFBZ0IsYUFBaEIsRUFBK0I7QUFDN0IsT0FBQyxDQUFDLFVBQUYsQ0FBYyxXQUFkLENBQTBCLENBQTFCO0FBQ0Q7QUFDRjs7QUFsSWtCO0FBMEpkLE1BQU0sb0JBQW9CLEdBQUksSUFBRCxJQUF3QixJQUFJLENBQUMsS0FBTCxLQUFlLENBQUMsQ0FBckUsQyxDQUVQO0FBQ0E7O0FBQ08sTUFBTSxZQUFZLEdBQUcsTUFBTSxRQUFRLENBQUMsYUFBVCxDQUF1QixFQUF2QixDQUEzQjtBQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCTyxNQUFNLHNCQUFzQixHQUMvQiw0SkFERyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuT1A7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7OztBQWNBOzs7O0FBSUE7QUFDQTtBQUVBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Q0FTQTtBQUNBO0FBQ0E7O0FBQ0EsQ0FBQyxNQUFNLENBQUMsaUJBQUQsQ0FBTixLQUE4QixNQUFNLENBQUMsaUJBQUQsQ0FBTixHQUE0QixFQUExRCxDQUFELEVBQWdFLElBQWhFLENBQXFFLE9BQXJFO0FBRUE7Ozs7O0FBSU8sTUFBTSxJQUFJLEdBQUcsQ0FBQyxPQUFELEVBQWdDLEdBQUcsTUFBbkMsS0FDaEIsSUFBSSxzRUFBSixDQUFtQixPQUFuQixFQUE0QixNQUE1QixFQUFvQyxNQUFwQyxFQUE0QywyRkFBNUMsQ0FERztBQUdQOzs7OztBQUlPLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBRCxFQUFnQyxHQUFHLE1BQW5DLEtBQ2YsSUFBSSx5RUFBSixDQUFzQixPQUF0QixFQUErQixNQUEvQixFQUF1QyxLQUF2QyxFQUE4QywyRkFBOUMsQ0FERyxDOzs7Ozs7Ozs7Ozs7OztBQ3ZFUDtBQUVBLCtEQUFnQlEsVUFBRCxJQUFnQjtBQUM3Qjs7O0FBR0EsUUFBTUMsY0FBTixTQUE2QkQsVUFBN0IsQ0FBd0M7QUFDdEMsZUFBV0UsVUFBWCxHQUF3QjtBQUN0QixhQUFPO0FBQ0x2RixZQUFJLEVBQUUvQixNQUREO0FBRUx1SCxnQkFBUSxFQUFFO0FBQ1J4QyxjQUFJLEVBQUV5QyxPQURFO0FBRVJwQixlQUFLLEVBQUU7QUFGQyxTQUZMO0FBTUxqRSxnQkFBUSxFQUFFbkMsTUFOTDtBQU9MeUgsc0JBQWMsRUFBRUMsTUFQWDtBQVFMQyxhQUFLLEVBQUU7QUFDTDVDLGNBQUksRUFBRTZDLEtBREQ7QUFFTEMsa0JBQVEsRUFBRTtBQUZMO0FBUkYsT0FBUDtBQWFEOztBQUVEQyxnQkFBWSxDQUFDL0YsSUFBRCxFQUFPSSxRQUFQLEVBQWlCO0FBQzNCLFVBQUk0RixNQUFNLEdBQUc1RixRQUFRLENBQUNoQixVQUFULENBQW9CNkcsbUJBQWpDOztBQUNBLFVBQUlELE1BQUosRUFBWTtBQUNWLFlBQUksQ0FBQ0gsS0FBSyxDQUFDSyxPQUFOLENBQWNGLE1BQWQsQ0FBTCxFQUE0QjtBQUMxQkEsZ0JBQU0sR0FBRyxDQUFDQSxNQUFELENBQVQ7QUFDRDs7QUFDRCxlQUFPQSxNQUFNLENBQUNHLEdBQVAsQ0FBV1AsS0FBSyxJQUFJckgsTUFBTSxDQUFDNkgsUUFBUCxDQUFnQkMsZUFBaEIsQ0FDekJULEtBRHlCLEVBRXpCNUYsSUFGeUIsRUFHekJBLElBQUksQ0FBQ3NHLE1BSG9CLEVBSXpCbEcsUUFKeUIsRUFLekJBLFFBQVEsQ0FBQ2hCLFVBTGdCO0FBTXpCO0FBQWlCMEQsaUJBTlEsRUFPekIxQyxRQUFRLENBQUNDLEtBUGdCLENBQXBCLEVBUUprRyxNQVJJLENBUUd4RixNQUFNLElBQUlBLE1BQU0sS0FBSyxJQVJ4QixDQUFQO0FBU0Q7O0FBQ0QsYUFBTyxFQUFQO0FBQ0Q7O0FBRUR5RixtQkFBZSxDQUFDcEcsUUFBRCxFQUFXb0YsUUFBWCxFQUFxQkksS0FBckIsRUFBNEI7QUFDekMsVUFBSUosUUFBSixFQUFjLE9BQU8sSUFBUDtBQUNkLFVBQUlJLEtBQUssQ0FBQ2EsTUFBVixFQUFrQixPQUFPLEtBQVA7QUFDbEIsYUFBTyxDQUFDLENBQUNyRyxRQUFRLENBQUNoQixVQUFULENBQW9Cc0gsaUJBQTdCO0FBQ0Q7O0FBRURDLFlBQVEsQ0FBQ2YsS0FBRCxFQUFRO0FBQ2QsYUFBT0EsS0FBSyxDQUFDYSxNQUFOLEdBQWUsQ0FBdEI7QUFDRDs7QUE1Q3FDOztBQThDeEMsU0FBT25CLGNBQVA7QUFDRCxDQW5ERCxFOzs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBLFNBQVNzQixZQUFULEdBQXdCO0FBQ3RCOzs7QUFHQSxRQUFNQyxjQUFOLFNBQTZCQyxPQUFPLENBQUNDLE9BQXJDLENBQTZDO0FBQzNDLGVBQVd4QixVQUFYLEdBQXdCO0FBQ3RCLGFBQU87QUFDTHZGLFlBQUksRUFBRS9CLE1BREQ7QUFFTG1DLGdCQUFRLEVBQUVuQyxNQUZMO0FBR0wrSSxtQkFBVyxFQUFFckIsTUFIUjtBQUtMSCxnQkFBUSxFQUFFO0FBQ1J4QyxjQUFJLEVBQUV5QyxPQURFO0FBRVJwQixlQUFLLEVBQUU7QUFGQztBQUxMLE9BQVA7QUFVRDs7QUFFRCxlQUFXNEMsU0FBWCxHQUF1QjtBQUNyQixhQUFPLENBQ0wscURBREssQ0FBUDtBQUdEOztBQUVEQyxnQkFBWSxDQUFDbEgsSUFBRCxFQUFPSSxRQUFQLEVBQWlCNEcsV0FBakIsRUFBOEJ4QixRQUE5QixFQUF3QztBQUNsRHZHLE1BQUEsaUhBQXFCLENBQ25CLElBRG1CLEVBRW5CK0gsV0FBVyxHQUFHQSxXQUFXLENBQUNHLFdBQVosRUFBSCxHQUErQixLQUZ2QixFQUduQjtBQUFFbkgsWUFBRjtBQUFRSSxnQkFBUjtBQUFrQm9GO0FBQWxCLE9BSG1CLENBQXJCO0FBSUQ7O0FBekIwQzs7QUEyQjdDNEIsZ0JBQWMsQ0FBQ0MsTUFBZixDQUFzQixpQkFBdEIsRUFBeUNSLGNBQXpDO0FBQ0Q7O0FBQ0QsSUFBSUMsT0FBTyxJQUFJQSxPQUFPLENBQUNDLE9BQW5CLElBQThCSyxjQUFjLENBQUNFLEdBQWYsQ0FBbUIsZ0JBQW5CLENBQWxDLEVBQXdFO0FBQ3RFVixjQUFZO0FBQ2IsQ0FGRCxNQUVPO0FBQ0xRLGdCQUFjLENBQUNHLFdBQWYsQ0FBMkIsZ0JBQTNCLEVBQTZDQyxJQUE3QyxDQUFrRCxNQUFNWixZQUFZLEVBQXBFO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFDQTtBQUVBO0FBQ0E7QUFFQVEsY0FBYyxDQUFDRyxXQUFmLENBQTJCLG9CQUEzQixFQUFpREMsSUFBakQsQ0FBc0QsTUFBTTtBQUMxRDs7O0FBR0EsUUFBTUMsZ0JBQU4sU0FBK0JMLGNBQWMsQ0FBQ0UsR0FBZixDQUFtQixvQkFBbkIsQ0FBL0IsQ0FBd0U7QUFDdEUsZUFBV3ZDLFFBQVgsR0FBc0I7QUFDcEIsYUFBTywyRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUFaO0FBZ0ZEOztBQUVELGVBQVdRLFVBQVgsR0FBd0I7QUFDdEIsYUFBTztBQUNMdkYsWUFBSSxFQUFFL0IsTUFERDtBQUVMdUgsZ0JBQVEsRUFBRTtBQUNSeEMsY0FBSSxFQUFFeUMsT0FERTtBQUVScEIsZUFBSyxFQUFFO0FBRkMsU0FGTDtBQU1MakUsZ0JBQVEsRUFBRW5DLE1BTkw7QUFPTHlILHNCQUFjLEVBQUVDLE1BUFg7QUFRTCtCLGdCQUFRLEVBQUU7QUFDUjFFLGNBQUksRUFBRTZDLEtBREU7QUFFUkMsa0JBQVEsRUFBRTtBQUZGLFNBUkw7QUFZTDZCLGlCQUFTLEVBQUVsQyxPQVpOO0FBYUxtQyx1QkFBZSxFQUFFO0FBQ2Y1RSxjQUFJLEVBQUV5QyxPQURTO0FBRWZLLGtCQUFRLEVBQUU7QUFGSztBQWJaLE9BQVA7QUFrQkQ7O0FBRUQrQixxQkFBaUIsR0FBRztBQUNsQixZQUFNQSxpQkFBTjtBQUNBLFdBQUtGLFNBQUwsR0FBaUIsSUFBakI7QUFDRDs7QUFFREcsd0JBQW9CLEdBQUc7QUFDckIsV0FBS0MsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFlBQU1ELG9CQUFOO0FBQ0Q7O0FBRUQvQixnQkFBWSxDQUFDL0YsSUFBRCxFQUFPSSxRQUFQLEVBQWlCNEgsUUFBakIsRUFBMkI7QUFDckMsVUFBSSxDQUFDNUgsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQjZJLFdBQXJCLElBQW9DLENBQUNELFFBQXpDLEVBQW1ELE9BQU8sRUFBUDtBQUNuRCxVQUFJRSxXQUFXLEdBQUc5SCxRQUFRLENBQUNoQixVQUFULENBQW9CNkksV0FBdEM7O0FBQ0EsVUFBSSxDQUFDcEMsS0FBSyxDQUFDSyxPQUFOLENBQWNnQyxXQUFkLENBQUwsRUFBaUM7QUFDL0JBLG1CQUFXLEdBQUcsQ0FBQ0EsV0FBRCxDQUFkO0FBQ0Q7O0FBQ0QsYUFBT0EsV0FBVyxDQUFDL0IsR0FBWixDQUFpQmdDLFVBQUQsSUFBZ0I7QUFDckMsWUFBSXBILE1BQU0sR0FBRyxJQUFiOztBQUNBLFlBQUlvSCxVQUFVLENBQUN4SCxTQUFYLElBQXdCWCxJQUFJLENBQUNzRyxNQUFMLENBQVk2QixVQUFVLENBQUN4SCxTQUF2QixDQUE1QixFQUErRDtBQUM3REksZ0JBQU0sR0FBRzlDLE1BQU0sQ0FBQ21LLE1BQVAsQ0FBYyxFQUFkLEVBQWtCN0osTUFBTSxDQUFDNkgsUUFBUCxDQUFnQmlDLGlCQUFoQixDQUN6QixJQUR5QixFQUNuQnJJLElBQUksQ0FBQ3NHLE1BQUwsQ0FBWTZCLFVBQVUsQ0FBQ3hILFNBQXZCLENBRG1CLEVBQ2dCLEtBQUs2RSxRQURyQjtBQUV6QjtBQUFrQixlQUZPLENBQWxCLENBQVQ7QUFHRCxTQUpELE1BSU8sSUFBSTJDLFVBQVUsQ0FBQ0csU0FBWCxJQUNBbEksUUFBUSxDQUFDaEIsVUFBVCxDQUFvQitJLFVBQVUsQ0FBQ0csU0FBL0IsTUFBOEN4RixTQURsRCxFQUM2RDtBQUNsRS9CLGdCQUFNLEdBQUc7QUFDUFYsaUJBQUssRUFBRXNGLE1BQU0sQ0FBQ3ZGLFFBQVEsQ0FBQ2hCLFVBQVQsQ0FBb0IrSSxVQUFVLENBQUNHLFNBQS9CLENBQUQsQ0FETjtBQUVQM0gscUJBQVMsRUFBRSxXQUZKO0FBR1B2QixzQkFBVSxFQUFFO0FBQUU0RSxpQ0FBbUIsRUFBRW1FLFVBQVUsQ0FBQ0k7QUFBbEM7QUFITCxXQUFUO0FBS0Q7O0FBQ0QsWUFBSSxDQUFDeEgsTUFBTCxFQUFhLE9BQU8sSUFBUDtBQUNiLFlBQUl5SCxTQUFTLEdBQUdMLFVBQVUsQ0FBQ00sZ0JBQTNCOztBQUNBLFlBQUlELFNBQVMsS0FBSzFGLFNBQWxCLEVBQTZCO0FBQzNCLGNBQUksQ0FBQytDLEtBQUssQ0FBQ0ssT0FBTixDQUFjc0MsU0FBZCxDQUFMLEVBQStCO0FBQzdCQSxxQkFBUyxHQUFHLENBQUNBLFNBQUQsQ0FBWjtBQUNEOztBQUNELGNBQUlBLFNBQVMsQ0FBQ0UsSUFBVixDQUFleEQsQ0FBQyxJQUFJeUQsTUFBTSxDQUFDekQsQ0FBRCxDQUFOLENBQVUwRCxJQUFWLENBQWU3SCxNQUFNLENBQUNWLEtBQVAsQ0FBYWlFLFFBQWIsRUFBZixDQUFwQixDQUFKLEVBQWtFO0FBQ2hFLG1CQUFPLElBQVA7QUFDRDtBQUNGOztBQUNEdkQsY0FBTSxDQUFDOEgsY0FBUCxHQUF3QixFQUF4QjtBQUNBOUgsY0FBTSxDQUFDM0IsVUFBUCxHQUFvQm5CLE1BQU0sQ0FBQ21LLE1BQVAsQ0FBYyxFQUFkLEVBQWtCO0FBQUVyRix1QkFBYSxFQUFFO0FBQWpCLFNBQWxCLENBQXBCO0FBQ0EsZUFBT2hDLE1BQVA7QUFDRCxPQTNCTSxFQTJCSndGLE1BM0JJLENBMkJHNEIsVUFBVSxJQUFJQSxVQUFVLElBQUksSUEzQi9CLENBQVA7QUE0QkQ7O0FBRURXLHVCQUFtQixDQUFDcEIsUUFBRCxFQUFXbEMsUUFBWCxFQUFxQjtBQUN0QyxVQUFJQSxRQUFRLElBQUksQ0FBQ2tDLFFBQWpCLEVBQTJCLE9BQU8sS0FBUDtBQUMzQixhQUFPQSxRQUFRLENBQUNqQixNQUFULEtBQW9CLENBQTNCO0FBQ0Q7O0FBRURzQyxjQUFVLENBQUNuQixlQUFELEVBQWtCO0FBQzFCLGFBQU9BLGVBQWUsR0FBRyxPQUFILEdBQWEsRUFBbkM7QUFDRDs7QUFFRG9CLGdCQUFZLENBQUN4RCxRQUFELEVBQVdwRixRQUFYLEVBQXFCO0FBQy9CLFVBQUlvRixRQUFKLEVBQWMsT0FBTyxJQUFQO0FBQ2QsYUFBTyxDQUFDcEYsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQjZKLFlBQTVCO0FBQ0Q7O0FBRURDLHVCQUFtQixDQUFDOUksUUFBRCxFQUFXO0FBQzVCO0FBQ0EsYUFBTyxNQUFNOEksbUJBQU4sQ0FBMEIsS0FBS0MsVUFBTCxJQUFtQixLQUFLQyxRQUFsRCxFQUE0RGhKLFFBQTVELENBQVA7QUFDRDs7QUFFRGlKLHFCQUFpQixDQUFDakosUUFBRCxFQUFXO0FBQzFCLGFBQU9BLFFBQVEsQ0FBQ2hCLFVBQVQsQ0FBb0JrSyxnQkFBcEIsSUFDSGxKLFFBQVEsQ0FBQ2hCLFVBQVQsQ0FBb0JtSywwQkFEeEI7QUFFRDs7QUFFREMsZ0JBQVksQ0FBQ0MsQ0FBRCxFQUFJO0FBQ2QsV0FBS3ZLLElBQUwsQ0FBVU4sYUFBVixDQUF3QixVQUF4QixFQUFvQzhLLEtBQXBDLENBQTBDQyxhQUExQyxHQUEwRCxNQUExRDtBQUNBLFlBQU1DLElBQUksR0FBRyxLQUFLMUssSUFBTCxDQUFVTixhQUFWLENBQXdCLE9BQXhCLENBQWI7O0FBQ0EsVUFBSWdMLElBQUosRUFBVTtBQUNSQSxZQUFJLENBQUNuSCxJQUFMLEdBQVksdUJBQVo7QUFDQW1ILFlBQUksQ0FBQ0YsS0FBTCxDQUFXRyxPQUFYLEdBQXFCLEtBQXJCO0FBQ0Q7O0FBQ0R0TCxZQUFNLENBQUN1TCxVQUFQLENBQWtCLE1BQU07QUFDdEIsYUFBSzVLLElBQUwsQ0FBVU4sYUFBVixDQUF3QixVQUF4QixFQUFvQzhLLEtBQXBDLENBQTBDQyxhQUExQyxHQUEwRCxFQUExRDs7QUFDQSxZQUFJQyxJQUFKLEVBQVU7QUFDUkEsY0FBSSxDQUFDbkgsSUFBTCxHQUFZLGtCQUFaO0FBQ0FtSCxjQUFJLENBQUNGLEtBQUwsQ0FBV0csT0FBWCxHQUFxQixFQUFyQjtBQUNEO0FBQ0YsT0FORCxFQU1HLElBTkg7QUFPQUosT0FBQyxDQUFDTSxlQUFGO0FBQ0Q7O0FBRURDLGVBQVcsQ0FBQ2hLLElBQUQsRUFBT3hDLE9BQVAsRUFBZ0I0QyxRQUFoQixFQUEwQjtBQUNuQyxZQUFNdkMsU0FBUyxHQUFHdUMsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQnBCLEtBQXBCLElBQTZCLFNBQS9DO0FBQ0FULE1BQUEsaUhBQW9CLENBQ2xCQyxPQURrQixFQUNUd0MsSUFBSSxDQUFDdkMsTUFBTCxJQUFlO0FBQUVLLHFCQUFhLEVBQUUsU0FBakI7QUFBNEJMLGNBQU0sRUFBRTtBQUFwQyxPQUROLEVBQ2dESSxTQURoRCxDQUFwQjtBQUVEOztBQUVEb00sbUJBQWUsR0FBRztBQUNoQixXQUFLL0ssSUFBTCxDQUFVZ0wsZ0JBQVYsQ0FBMkIsc0JBQTNCLEVBQ0cvTCxPQURILENBQ1lnTSxJQUFELElBQVU7QUFDakIsYUFBS0gsV0FBTCxDQUFpQixLQUFLaEssSUFBdEIsRUFBNEJtSyxJQUE1QixFQUFrQ0EsSUFBSSxDQUFDOUosS0FBdkM7QUFDRCxPQUhIO0FBSUQ7O0FBM01xRTs7QUE2TXhFK0csZ0JBQWMsQ0FBQ0MsTUFBZixDQUFzQixvQkFBdEIsRUFBNENJLGdCQUE1QztBQUNELENBbE5ELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTs7OztBQUdBLE1BQU0yQyxnQkFBTixTQUErQixzREFBL0IsQ0FBMEM7QUFDeENDLFFBQU0sR0FBRztBQUNQLFdBQU8sZ0RBQUs7Ozs7Ozs7c0JBT00sS0FBS0MsWUFBYTs7Ozs7O3FDQU1ILEtBQUtDLE1BQU87Ozs7Ozs7Ozs7OztLQWI3QztBQTBCRDs7QUFFRCxhQUFXaEYsVUFBWCxHQUF3QjtBQUN0QixXQUFPO0FBQ0xnRixZQUFNLEVBQUU7QUFDTnZILFlBQUksRUFBRXlDLE9BREE7QUFFTjZDLGlCQUFTLEVBQUU7QUFGTCxPQURIO0FBTUxrQyxVQUFJLEVBQUU7QUFDSnhILFlBQUksRUFBRTJDLE1BREY7QUFFSjhFLGVBQU8sRUFBRSxJQUZMO0FBR0pDLGdCQUFRLEVBQUU7QUFITjtBQU5ELEtBQVA7QUFZRDs7QUFFREMsMEJBQXdCLENBQUNILElBQUQsRUFBT0ksTUFBUCxFQUFlQyxNQUFmLEVBQXVCO0FBQzdDLFFBQUlMLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CLFdBQUtNLFdBQUwsQ0FBaUJELE1BQWpCO0FBQ0Q7O0FBQ0QsVUFBTUYsd0JBQU4sQ0FBK0JILElBQS9CLEVBQXFDSSxNQUFyQyxFQUE2Q0MsTUFBN0M7QUFDRDs7QUFFRGhELG1CQUFpQixHQUFHO0FBQ2xCLFVBQU1BLGlCQUFOO0FBQ0EsU0FBSzJDLElBQUwsR0FBWWpNLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0IyRSxPQUFoQixFQUFaO0FBQ0Q7O0FBRURELGFBQVcsQ0FBQ04sSUFBRCxFQUFPO0FBQ2hCak0sVUFBTSxDQUFDNkgsUUFBUCxDQUFnQjRFLE9BQWhCLENBQXdCUixJQUF4QjtBQUNEOztBQUVERixjQUFZLEdBQUc7QUFDYi9MLFVBQU0sQ0FBQzBNLE9BQVAsQ0FBZUMsSUFBZjtBQUNBLFVBQU1DLEtBQUssR0FBRyxJQUFJQyxXQUFKLENBQWdCLGtCQUFoQixDQUFkO0FBQ0EsU0FBS0MsYUFBTCxDQUFtQkYsS0FBbkI7QUFDRDs7QUFqRXVDOztBQW1FMUMvRCxjQUFjLENBQUNDLE1BQWYsQ0FBc0IscUJBQXRCLEVBQTZDK0MsZ0JBQTdDLEU7Ozs7Ozs7Ozs7Ozs7O0FDekVBOztBQUVBLFNBQVN4RCxZQUFULEdBQXdCO0FBQ3RCOzs7QUFHQSxRQUFNMEUsY0FBTixTQUE2QnhFLE9BQU8sQ0FBQ0MsT0FBckMsQ0FBNkM7QUFDM0MsZUFBV2hDLFFBQVgsR0FBc0I7QUFDcEIsYUFBTywyRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FBWjtBQThCRDs7QUFFRHdHLFNBQUssR0FBRztBQUNOLFlBQU1BLEtBQU47QUFDQSxXQUFLQyxpQkFBTCxHQUF5QixDQUFDLEtBQUtDLGlCQUFMLENBQXVCLEtBQUt6TixLQUE1QixFQUFtQyxjQUFuQyxFQUFtRCxDQUFDLEtBQUt3TixpQkFBekQsQ0FBMUI7QUFDQSxXQUFLRSx3Q0FBTCxDQUE4QyxLQUFLMU4sS0FBbkQsRUFBMEQsS0FBSzJOLDJCQUEvRDtBQUNEOztBQUVEOUQscUJBQWlCLEdBQUc7QUFDbEIsWUFBTUEsaUJBQU47QUFDQSxXQUFLK0QsQ0FBTCxDQUFPQyxNQUFQLENBQWNDLFlBQWQsR0FBNkIsS0FBS0YsQ0FBTCxDQUFPQyxNQUFQLENBQWNDLFlBQWQsSUFBOEIsRUFBM0Q7QUFDRDs7QUFFRCxlQUFXdkcsVUFBWCxHQUF3QjtBQUN0QixhQUFPO0FBQ0x3RyxXQUFHLEVBQUU7QUFDSC9JLGNBQUksRUFBRWdKLE1BREg7QUFFSDNILGVBQUssRUFBRTtBQUZKLFNBREE7QUFLTDRILFdBQUcsRUFBRTtBQUNIakosY0FBSSxFQUFFZ0osTUFESDtBQUVIM0gsZUFBSyxFQUFFO0FBRkosU0FMQTtBQVNMNkgsV0FBRyxFQUFFO0FBQ0hsSixjQUFJLEVBQUV5QyxPQURIO0FBRUhwQixlQUFLLEVBQUU7QUFGSixTQVRBO0FBYUw4SCxZQUFJLEVBQUU7QUFDSm5KLGNBQUksRUFBRXlDLE9BREY7QUFFSnBCLGVBQUssRUFBRTtBQUZILFNBYkQ7QUFpQkxtSCx5QkFBaUIsRUFBRTtBQUNqQnhJLGNBQUksRUFBRXlDLE9BRFc7QUFFakJwQixlQUFLLEVBQUUsS0FGVTtBQUdqQitILGdCQUFNLEVBQUU7QUFIUyxTQWpCZDtBQXNCTFQsbUNBQTJCLEVBQUU7QUFDM0IzSSxjQUFJLEVBQUV5QyxPQURxQjtBQUUzQnBCLGVBQUssRUFBRTtBQUZvQixTQXRCeEI7QUEyQkxyRyxhQUFLLEVBQUVDLE1BM0JGO0FBNEJMb0csYUFBSyxFQUFFO0FBQ0xyQixjQUFJLEVBQUVnSixNQUREO0FBRUxJLGdCQUFNLEVBQUU7QUFGSCxTQTVCRjtBQWdDTEMsa0JBQVUsRUFBRTtBQUNWckosY0FBSSxFQUFFZ0osTUFESTtBQUVWbEcsa0JBQVEsRUFBRTtBQUZBO0FBaENQLE9BQVA7QUFxQ0Q7O0FBRUQsZUFBV21CLFNBQVgsR0FBdUI7QUFDckIsYUFBTyxDQUNMLDhFQURLLENBQVA7QUFHRDs7QUFFRHlFLDRDQUF3QyxDQUFDMU4sS0FBRCxFQUFRMk4sMkJBQVIsRUFBcUM7QUFDM0UsV0FBS1csa0NBQUwsR0FBMEMsS0FBS2IsaUJBQUwsQ0FDeEN6TixLQUR3QyxFQUNqQyx5QkFEaUMsRUFDTixDQUFDMk4sMkJBREssQ0FBMUM7QUFFRDs7QUFFREYscUJBQWlCLENBQUN6TixLQUFELEVBQVF1TyxJQUFSLEVBQWNDLEdBQWQsRUFBbUI7QUFDbEMsVUFBSXhPLEtBQUosRUFBVztBQUNULFlBQUl1TyxJQUFJLElBQUl2TyxLQUFaLEVBQW1CO0FBQ2pCLGlCQUFPQSxLQUFLLENBQUN1TyxJQUFELENBQVo7QUFDRDtBQUNGOztBQUNELGFBQU9DLEdBQVA7QUFDRDs7QUFFREMsZ0JBQVksQ0FBQ3pPLEtBQUQsRUFBUW1PLElBQVIsRUFBY08sU0FBZCxFQUF5QjtBQUNuQyxVQUFJM0wsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsVUFBSW9MLElBQUosRUFBVTtBQUNScEwsY0FBTSxJQUFJLFFBQVY7QUFDRDs7QUFDRCxVQUFJLEtBQUswSyxpQkFBTCxDQUF1QnpOLEtBQXZCLEVBQThCLGNBQTlCLEVBQThDLENBQUMsS0FBS3dOLGlCQUFwRCxLQUEwRWtCLFNBQVMsS0FBSyxDQUE1RixFQUErRjtBQUM3RjtBQUNBLGVBQU8sRUFBUDtBQUNEOztBQUNELGFBQVEsR0FBRTNMLE1BQU8sc0JBQWpCO0FBQ0Q7O0FBRUQ0TCxnQkFBWSxDQUFDQyxFQUFELEVBQUs7QUFDZixVQUFJLENBQUMsS0FBS04sa0NBQU4sSUFBNEMsS0FBS2pJLEtBQUwsS0FBZXVJLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVeEksS0FBekUsRUFBZ0Y7QUFDOUV1SSxVQUFFLENBQUM3QyxlQUFIO0FBQ0E7QUFDRDs7QUFDRCxXQUFLMUYsS0FBTCxHQUFhdUksRUFBRSxDQUFDQyxNQUFILENBQVV4SSxLQUF2QjtBQUNEOztBQTNIMEM7O0FBNkg3QytDLGdCQUFjLENBQUNDLE1BQWYsQ0FBc0Isa0JBQXRCLEVBQTBDaUUsY0FBMUM7QUFDRDs7QUFDRCxJQUFJeEUsT0FBTyxJQUFJQSxPQUFPLENBQUNDLE9BQW5CLElBQThCSyxjQUFjLENBQUNFLEdBQWYsQ0FBbUIsZ0JBQW5CLENBQWxDLEVBQXdFO0FBQ3RFVixjQUFZO0FBQ2IsQ0FGRCxNQUVPO0FBQ0xRLGdCQUFjLENBQUNHLFdBQWYsQ0FBMkIsZ0JBQTNCLEVBQTZDQyxJQUE3QyxDQUFrRCxNQUFNWixZQUFZLEVBQXBFO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUN0QixRQUFNa0csbUNBQW1DLEdBQUcsQ0FBQyxjQUFELENBQTVDO0FBQ0EsUUFBTUMsd0JBQXdCLEdBQUc7QUFDL0JDLFNBQUssRUFBRSxDQUR3QjtBQUNyQjtBQUNWL0ssU0FBSyxFQUFFLENBRndCO0FBRXJCO0FBQ1ZnTCxXQUFPLEVBQUUsQ0FIc0IsQ0FHbkI7O0FBSG1CLEdBQWpDO0FBS0EsUUFBTUMsZUFBZSxHQUFHO0FBQ3RCQyxVQUFNLEVBQUUsa0JBRGM7QUFFdEJDLFdBQU8sRUFBRSxFQUZhO0FBR3RCbkwsU0FBSyxFQUFFO0FBSGUsR0FBeEI7QUFNQTs7OztBQUdBLFFBQU1vTCxpQkFBTixTQUFnQ3ZHLE9BQU8sQ0FBQ0MsT0FBeEMsQ0FBZ0Q7QUFDOUMsZUFBV3hCLFVBQVgsR0FBd0I7QUFDdEIsYUFBTztBQUNMdkYsWUFBSSxFQUFFL0IsTUFERDtBQUdMdUgsZ0JBQVEsRUFBRTtBQUNSeEMsY0FBSSxFQUFFeUMsT0FERTtBQUVScEIsZUFBSyxFQUFFO0FBRkMsU0FITDtBQVFMakUsZ0JBQVEsRUFBRW5DO0FBUkwsT0FBUDtBQVVEOztBQUVELGVBQVdnSixTQUFYLEdBQXVCO0FBQ3JCLGFBQU8sQ0FDTCx3Q0FESyxDQUFQO0FBR0Q7O0FBRURZLHFCQUFpQixHQUFHO0FBQ2xCLFlBQU1BLGlCQUFOO0FBQ0EsWUFBTXlGLFNBQVMsR0FBRyxLQUFLek4sVUFBTCxDQUFnQkEsVUFBbEM7O0FBQ0EsVUFBSXlOLFNBQVMsQ0FBQzlOLE9BQVYsS0FBc0IsS0FBdEIsS0FDQzhOLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsT0FBN0IsS0FBeUNGLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsWUFBN0IsQ0FEMUMsQ0FBSixFQUMyRjtBQUN6RixhQUFLQyxVQUFMLEdBQWtCSCxTQUFsQixDQUR5RixDQUd6Rjs7QUFDQUEsaUJBQVMsQ0FBQzVELEtBQVYsQ0FBZ0JnRSxXQUFoQixDQUNFLGtCQURGLEVBQ3NCLDZDQUR0QixFQUp5RixDQU96Rjs7QUFDQSxZQUFJLENBQUNKLFNBQVMsQ0FBQ2hQLFlBQWYsRUFBNkI7QUFDM0JnUCxtQkFBUyxDQUFDaFAsWUFBVixHQUEwQlAsTUFBRCxJQUFZO0FBQ25DRSxrQkFBTSxDQUFDQyxJQUFQLENBQVlILE1BQVosRUFBb0JJLE9BQXBCLENBQTZCQyxHQUFELElBQVM7QUFDbkNrUCx1QkFBUyxDQUFDNUQsS0FBVixDQUFnQmdFLFdBQWhCLENBQTRCdFAsR0FBNUIsRUFBaUNMLE1BQU0sQ0FBQ0ssR0FBRCxDQUF2QztBQUNELGFBRkQ7QUFHRCxXQUpEO0FBS0Q7QUFDRjs7QUFDRCxXQUFLMkosV0FBTCxHQUFtQixJQUFuQjtBQUNBLFdBQUs0RixZQUFMLENBQWtCLEtBQUszTixJQUF2QixFQUE2QixLQUFLd0YsUUFBbEMsRUFBNEMsS0FBS3BGLFFBQWpEO0FBQ0Q7O0FBRUQwSCx3QkFBb0IsR0FBRztBQUNyQixXQUFLQyxXQUFMLEdBQW1CLEtBQW5COztBQUNBLFVBQUksS0FBSzBGLFVBQVQsRUFBcUI7QUFDbkIsYUFBS0EsVUFBTCxDQUFnQm5QLFlBQWhCLENBQTZCO0FBQUU4TyxpQkFBTyxFQUFFLEVBQVg7QUFBZVEsZ0JBQU0sRUFBRSxFQUF2QjtBQUEyQkMsaUJBQU8sRUFBRTtBQUFwQyxTQUE3Qjs7QUFDQXRRLFFBQUEsaUhBQW9CLENBQ2xCLEtBQUtrUSxVQURhLEVBQ0QsS0FBS3pOLElBQUwsQ0FBVXZDLE1BQVYsSUFBb0I7QUFBRUssdUJBQWEsRUFBRSxTQUFqQjtBQUE0QkwsZ0JBQU0sRUFBRTtBQUFwQyxTQURuQixFQUM2RCxTQUQ3RCxDQUFwQjtBQUVBLGFBQUtnUSxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBQ0QsWUFBTTNGLG9CQUFOO0FBQ0Q7O0FBRURnRyxhQUFTLENBQUM5TixJQUFELEVBQU9JLFFBQVAsRUFBaUJILE1BQWpCLEVBQXlCO0FBQ2hDLFlBQU1xRyxNQUFNLEdBQUcsRUFBZjs7QUFDQSxVQUFJckcsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDdEJHLGdCQUFRLENBQUNoQixVQUFULENBQW9CdUIsU0FBcEIsQ0FBOEJ4QyxPQUE5QixDQUF1QzRQLEVBQUQsSUFBUTtBQUM1QyxnQkFBTTFOLEtBQUssR0FBR0wsSUFBSSxDQUFDc0csTUFBTCxDQUFZeUgsRUFBWixDQUFkOztBQUNBLGNBQUksQ0FBQzFOLEtBQUwsRUFBWTtBQUNWO0FBQ0EyTixtQkFBTyxDQUFDQyxJQUFSLENBQWMsY0FBYUYsRUFBRyxhQUFZM04sUUFBUSxDQUFDTyxTQUFVLEVBQTdEO0FBQ0E7O0FBQ0E7QUFDRDs7QUFDRCxjQUFJLENBQUNQLFFBQVEsQ0FBQ2hCLFVBQVQsQ0FBb0I4TyxXQUFyQixJQUNBOU4sUUFBUSxDQUFDaEIsVUFBVCxDQUFvQjhPLFdBQXBCLENBQWdDek0sUUFBaEMsQ0FBeUNwQixLQUFLLENBQUNNLFNBQS9DLENBREosRUFDK0Q7QUFDN0QyRixrQkFBTSxDQUFDNkgsSUFBUCxDQUFZNVAsTUFBTSxDQUFDNkgsUUFBUCxDQUFnQmlDLGlCQUFoQixDQUNWLElBRFUsRUFDSmhJLEtBREksRUFDRztBQUFNO0FBRFQsY0FDeUI7QUFBTTtBQUQvQixhQUFaO0FBRUQ7QUFDRixTQWJEO0FBY0QsT0FmRCxNQWVPO0FBQ0xpRyxjQUFNLENBQUM2SCxJQUFQLENBQVkvTixRQUFaOztBQUNBLFlBQUksS0FBS3FOLFVBQVQsRUFBcUI7QUFDbkIsZUFBS0EsVUFBTCxDQUFnQi9ELEtBQWhCLENBQXNCMEQsT0FBdEIsR0FBZ0MsY0FBaEM7QUFDQSxnQkFBTWdCLE1BQU0sR0FBRztBQUFFaEIsbUJBQU8sRUFBRTtBQUFYLFdBQWY7O0FBQ0EsY0FBSSxLQUFLSyxVQUFMLENBQWdCRixTQUFoQixDQUEwQkMsUUFBMUIsQ0FBbUMsT0FBbkMsQ0FBSixFQUFpRDtBQUMvQ1ksa0JBQU0sQ0FBQ1IsTUFBUCxHQUFnQixpQ0FBaEI7QUFDRDs7QUFDRCxlQUFLdFAsWUFBTCxDQUFrQjhQLE1BQWxCO0FBQ0Q7QUFDRjs7QUFDRG5QLE1BQUEsaUhBQXFCLENBQ25CLElBRG1CLEVBRW5CLGdCQUZtQixFQUduQjtBQUFFZSxZQUFGO0FBQVFzRztBQUFSLE9BSG1CLENBQXJCOztBQUlBLFVBQUksS0FBS21ILFVBQVQsRUFBcUI7QUFDbkIsYUFBS0EsVUFBTCxDQUFnQm5QLFlBQWhCLENBQTZCO0FBQzNCK1AsZUFBSyxFQUFFLHNDQURvQjtBQUUzQix3QkFBYztBQUZhLFNBQTdCO0FBSUQ7O0FBQ0QsV0FBSzlPLFNBQUwsQ0FBZW1LLEtBQWYsQ0FBcUI0RSxRQUFyQixHQUFnQyxLQUFoQyxDQXRDZ0MsQ0F3Q2hDOztBQUNBLFdBQUs1RSxLQUFMLENBQVdnRSxXQUFYLENBQXVCLHNDQUF2QixFQUErRCxHQUEvRDtBQUNEOztBQUVEYSxtQkFBZSxHQUFHO0FBQ2hCLFVBQUksS0FBS2QsVUFBVCxFQUFxQjtBQUNuQixhQUFLQSxVQUFMLENBQWdCblAsWUFBaEIsQ0FBNkI7QUFDM0I4TyxpQkFBTyxFQUFFLEVBRGtCO0FBRTNCaUIsZUFBSyxFQUFFLEVBRm9CO0FBRzNCLHdCQUFjO0FBSGEsU0FBN0I7QUFLRDs7QUFDRCxXQUFLL1AsWUFBTCxDQUFrQjtBQUFFOE8sZUFBTyxFQUFFLEVBQVg7QUFBZVEsY0FBTSxFQUFFO0FBQXZCLE9BQWxCO0FBQ0Q7O0FBRUQ1RCxlQUFXLENBQUNoSyxJQUFELEVBQU93TyxXQUFQLEVBQW9CO0FBQzdCLFVBQUlDLFdBQVcsR0FBRyxJQUFsQjtBQUNBLFVBQUk1USxTQUFTLEdBQUcsU0FBaEI7O0FBQ0EsVUFBSSxLQUFLNFAsVUFBVCxFQUFxQjtBQUNuQmdCLG1CQUFXLEdBQUcsS0FBS2hCLFVBQW5CO0FBQ0Q7O0FBQ0QsVUFBSWUsV0FBVyxDQUFDcFAsVUFBWixDQUF1QnBCLEtBQTNCLEVBQWtDO0FBQ2hDSCxpQkFBUyxHQUFHMlEsV0FBVyxDQUFDcFAsVUFBWixDQUF1QnBCLEtBQW5DO0FBQ0Q7O0FBQ0RULE1BQUEsaUhBQW9CLENBQ2xCa1IsV0FEa0IsRUFDTHpPLElBQUksQ0FBQ3ZDLE1BQUwsSUFBZTtBQUFFSyxxQkFBYSxFQUFFLFNBQWpCO0FBQTRCTCxjQUFNLEVBQUU7QUFBcEMsT0FEVixFQUNvREksU0FEcEQsQ0FBcEI7QUFFRDs7QUFFRDZRLG1CQUFlLENBQUNGLFdBQUQsRUFBYztBQUMzQixVQUFJLENBQUNBLFdBQUwsRUFBa0I7QUFDaEIsWUFBSSxLQUFLalAsU0FBVCxFQUFvQjtBQUNsQixlQUFLRSxXQUFMLENBQWlCLEtBQUtGLFNBQXRCO0FBQ0Q7O0FBQ0QsWUFBSSxLQUFLa08sVUFBVCxFQUFxQjtBQUNuQixlQUFLQSxVQUFMLENBQWdCblAsWUFBaEIsQ0FBNkI7QUFBRXNQLGtCQUFNLEVBQUUsR0FBVjtBQUFlQyxtQkFBTyxFQUFFO0FBQXhCLFdBQTdCO0FBQ0Q7O0FBQ0QsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLSixVQUFULEVBQXFCO0FBQ25CLGFBQUtBLFVBQUwsQ0FBZ0JuUCxZQUFoQixDQUE2QjtBQUFFc1AsZ0JBQU0sRUFBRSxFQUFWO0FBQWNDLGlCQUFPLEVBQUU7QUFBdkIsU0FBN0I7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRDs7QUFFRGMsbUJBQWUsQ0FBQzFPLE1BQUQsRUFBUzJPLEdBQVQsRUFBY3BKLFFBQWQsRUFBd0I7QUFDckMsVUFBSUEsUUFBSixFQUFjLE9BQU8sS0FBUDtBQUNkLGFBQU91SCx3QkFBd0IsQ0FBQzlNLE1BQUQsQ0FBeEIsSUFDSjhNLHdCQUF3QixDQUFDOU0sTUFBRCxDQUF4QixHQUFtQzJPLEdBQUcsQ0FBQ3hQLFVBQUosQ0FBZXlDLGtCQUQ5QyxJQUVMK00sR0FBRyxDQUFDeFAsVUFBSixDQUFleVAsZUFGVixJQUU2QkQsR0FBRyxDQUFDeFAsVUFBSixDQUFleVAsZUFBZixLQUFtQyxXQUZ2RTtBQUdEOztBQUVEbEIsZ0JBQVksQ0FBQzNOLElBQUQsRUFBT3dGLFFBQVAsRUFBaUJwRixRQUFqQixFQUEyQjtBQUNyQyxVQUFJLENBQUNBLFFBQUQsSUFBYSxDQUFDSixJQUFkLElBQXNCLENBQUMsS0FBSytILFdBQWhDLEVBQTZDO0FBQzdDLFlBQU05SCxNQUFNLEdBQUcsaUhBQWtCLENBQUNHLFFBQUQsQ0FBakM7QUFDQSxZQUFNb08sV0FBVyxHQUFHalEsTUFBTSxDQUFDNkgsUUFBUCxDQUFnQmlDLGlCQUFoQixDQUNsQixJQURrQixFQUNaakksUUFEWSxFQUNGb0YsUUFERSxFQUNRO0FBQUs7QUFEYixPQUFwQjtBQUdBLFVBQUksS0FBS2tKLGVBQUwsQ0FBcUJGLFdBQXJCLENBQUosRUFBdUM7QUFFdkMsV0FBS3hFLFdBQUwsQ0FBaUJoSyxJQUFqQixFQUF1QndPLFdBQXZCOztBQUVBLFVBQUksQ0FBQ2hKLFFBQUQsSUFBYWdKLFdBQVcsQ0FBQ3BQLFVBQVosQ0FBdUJ5UCxlQUF2QixLQUEyQyxRQUE1RCxFQUFzRTtBQUNwRSxhQUFLZixTQUFMLENBQWU5TixJQUFmLEVBQXFCd08sV0FBckIsRUFBa0N2TyxNQUFsQztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUs2TyxZQUFMLENBQWtCOU8sSUFBbEIsRUFBd0J3RixRQUF4QixFQUFrQ2dKLFdBQWxDLEVBQStDdk8sTUFBL0M7QUFDRDtBQUNGOztBQUVENk8sZ0JBQVksQ0FBQzlPLElBQUQsRUFBT3dGLFFBQVAsRUFBaUJwRixRQUFqQixFQUEyQkgsTUFBM0IsRUFBbUM7QUFDN0MsV0FBS3NPLGVBQUw7QUFFQSxZQUFNSCxNQUFNLEdBQUc7QUFDYnBPLFlBRGE7QUFFYkksZ0JBRmE7QUFHYm9GO0FBSGEsT0FBZjtBQUtBLFlBQU11SixxQkFBcUIsR0FBRyw0R0FBYSxDQUFDL08sSUFBRCxFQUFPSSxRQUFQLENBQTNDO0FBQ0EsVUFBSTRPLG1CQUFKO0FBQ0EsWUFBTUMsc0JBQXNCLEdBQUc3TyxRQUFRLENBQUNoQixVQUFULENBQW9COFAsOEJBQW5EOztBQUVBLFVBQUlqUCxNQUFNLEtBQUssT0FBWCxJQUFzQixLQUFLME8sZUFBTCxDQUFxQjFPLE1BQXJCLEVBQTZCRyxRQUE3QixFQUF1Q29GLFFBQXZDLENBQTFCLEVBQTRFO0FBQzFFdkgsY0FBTSxDQUFDbUssTUFBUCxDQUFjZ0csTUFBZCxFQUFzQjtBQUNwQjFJLHdCQUFjLEVBQUUsa0JBREk7QUFFcEJ5SixvQkFBVSxFQUFFLFVBRlE7QUFHcEJDLG9CQUFVLEVBQUUsU0FIUTtBQUlwQkMsbUJBQVMsRUFBRSxZQUpTO0FBS3BCcFA7QUFMb0IsU0FBdEI7QUFPQStPLDJCQUFtQixHQUFHLHdCQUF0QjtBQUNELE9BVEQsTUFTTyxJQUFJL08sTUFBTSxLQUFLLE9BQVgsSUFBc0IsS0FBSzBPLGVBQUwsQ0FBcUIxTyxNQUFyQixFQUE2QkcsUUFBN0IsRUFBdUNvRixRQUF2QyxDQUExQixFQUE0RTtBQUNqRnZILGNBQU0sQ0FBQ21LLE1BQVAsQ0FBY2dHLE1BQWQsRUFBc0I7QUFDcEIxSSx3QkFBYyxFQUFFLG1CQURJO0FBRXBCdUcsYUFBRyxFQUFFLEdBRmU7QUFHcEJrRCxvQkFBVSxFQUFFLGFBSFE7QUFJcEJDLG9CQUFVLEVBQUUsb0JBSlE7QUFLcEJFLHNCQUFZLEVBQUUsVUFMTTtBQU1wQkQsbUJBQVMsRUFBRSxrQkFOUztBQU9wQkUsZ0JBQU0sRUFBRSxNQVBZO0FBUXBCdFA7QUFSb0IsU0FBdEI7QUFVQStPLDJCQUFtQixHQUFHLHdCQUF0QjtBQUNELE9BWk0sTUFZQSxJQUFJL08sTUFBTSxLQUFLLFNBQVgsSUFBd0IsS0FBSzBPLGVBQUwsQ0FBcUIxTyxNQUFyQixFQUE2QkcsUUFBN0IsRUFBdUNvRixRQUF2QyxDQUE1QixFQUE4RTtBQUNuRnZILGNBQU0sQ0FBQ21LLE1BQVAsQ0FBY2dHLE1BQWQsRUFBc0I7QUFDcEIxSSx3QkFBYyxFQUFFLGtCQURJO0FBRXBCcUcsYUFBRyxFQUFFM0wsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQm9RLFFBQXBCLElBQWdDLENBQUMsR0FGbEI7QUFHcEJ2RCxhQUFHLEVBQUU3TCxRQUFRLENBQUNoQixVQUFULENBQW9CcVEsUUFBcEIsSUFBZ0MsR0FIakI7QUFJcEJOLG9CQUFVLEVBQUUsaUJBSlE7QUFLcEJDLG9CQUFVLEVBQUUsaUJBTFE7QUFNcEJDLG1CQUFTLEVBQUUsYUFOUztBQU9wQkUsZ0JBQU0sRUFBRSxFQVBZO0FBUXBCdFA7QUFSb0IsU0FBdEI7QUFVQStPLDJCQUFtQixHQUFHLHdCQUF0QjtBQUNELE9BWk0sTUFZQSxJQUFJOUIsZUFBZSxDQUFDNkIscUJBQUQsQ0FBZixLQUEyQ2pNLFNBQS9DLEVBQTBEO0FBQy9Ec0wsY0FBTSxDQUFDMUksY0FBUCxHQUF3QndILGVBQWUsQ0FBQzZCLHFCQUFELENBQXZDO0FBQ0FDLDJCQUFtQixHQUFHLDJCQUF0QjtBQUNELE9BSE0sTUFHQSxJQUFJNU8sUUFBUSxDQUFDaEIsVUFBVCxDQUFvQnNILGlCQUFwQixJQUNBLENBQUNvRyxtQ0FBbUMsQ0FBQ3JMLFFBQXBDLENBQTZDc04scUJBQTdDLENBREwsRUFDMEU7QUFDL0VYLGNBQU0sQ0FBQzVJLFFBQVAsR0FBa0IsSUFBbEI7QUFDRDs7QUFDRCxVQUFJcEYsUUFBUSxDQUFDQyxLQUFULEtBQW1CLGFBQXZCLEVBQXNDO0FBQ3BDK04sY0FBTSxDQUFDMUksY0FBUCxHQUF3QixFQUF4QjtBQUNEOztBQUNELFVBQUl0RixRQUFRLENBQUNoQixVQUFULENBQW9Cc1EsZUFBcEIsS0FBd0M1TSxTQUE1QyxFQUF1RDtBQUNyRHNMLGNBQU0sQ0FBQzFJLGNBQVAsR0FBd0J0RixRQUFRLENBQUNoQixVQUFULENBQW9Cc1EsZUFBNUM7QUFDRDs7QUFFRHpRLE1BQUEsaUhBQXFCLENBQ25CLElBRG1CLEVBRW5CLENBQUNnUSxzQkFBc0IsSUFBSUQsbUJBQTFCLElBQWtELGNBQWFELHFCQUFzQixFQUF0RixFQUF5RjVILFdBQXpGLEVBRm1CLEVBR25CaUgsTUFIbUIsQ0FBckI7QUFJRDs7QUFsTzZDOztBQW9PaERoSCxnQkFBYyxDQUFDQyxNQUFmLENBQXNCLHNCQUF0QixFQUE4Q2dHLGlCQUE5QztBQUNEOztBQUNELElBQUl2RyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsT0FBbkIsSUFBOEJLLGNBQWMsQ0FBQ0UsR0FBZixDQUFtQixnQkFBbkIsQ0FBbEMsRUFBd0U7QUFDdEVWLGNBQVk7QUFDYixDQUZELE1BRU87QUFDTFEsZ0JBQWMsQ0FBQ0csV0FBZixDQUEyQixnQkFBM0IsRUFBNkNDLElBQTdDLENBQWtELE1BQU1aLFlBQVksRUFBcEU7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25RRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQ3RCOzs7QUFHQSxRQUFNK0ksbUJBQU4sU0FBa0Msb0VBQWMsQ0FBQzdJLE9BQU8sQ0FBQ0MsT0FBVCxDQUFoRCxDQUFrRTtBQUNoRSxlQUFXaEMsUUFBWCxHQUFzQjtBQUNwQixhQUFPLDJFQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BQVo7QUFnRkQ7O0FBRUQsZUFBV1EsVUFBWCxHQUF3QjtBQUN0QixhQUFPO0FBQ0x0RixjQUFNLEVBQUUwRixNQURIO0FBRUx3SixrQkFBVSxFQUFFeEosTUFGUDtBQUdMeUosa0JBQVUsRUFBRXpKLE1BSFA7QUFJTDBKLGlCQUFTLEVBQUUxSixNQUpOO0FBS0wySixvQkFBWSxFQUFFM0osTUFMVDtBQU1MNEosY0FBTSxFQUFFO0FBQUV2TSxjQUFJLEVBQUUyQyxNQUFSO0FBQWdCdEIsZUFBSyxFQUFFO0FBQXZCLFNBTkg7QUFPTDBILFdBQUcsRUFBRTtBQUFFL0ksY0FBSSxFQUFFZ0osTUFBUjtBQUFnQjNILGVBQUssRUFBRTtBQUF2QixTQVBBO0FBUUw0SCxXQUFHLEVBQUU7QUFBRWpKLGNBQUksRUFBRWdKLE1BQVI7QUFBZ0IzSCxlQUFLLEVBQUU7QUFBdkIsU0FSQTtBQVVMdUwsbUJBQVcsRUFBRTtBQUNYNU0sY0FBSSxFQUFFZ0osTUFESztBQUVYM0gsZUFBSyxFQUFFO0FBRkksU0FWUjtBQWNMbUgseUJBQWlCLEVBQUUvRixPQWRkO0FBZUxvSyxZQUFJLEVBQUVsSyxNQWZEO0FBZ0JMbUsscUJBQWEsRUFBRTtBQUNiOU0sY0FBSSxFQUFFeUMsT0FETztBQUVicEIsZUFBSyxFQUFFO0FBRk0sU0FoQlY7QUFvQkwwTCxtQkFBVyxFQUFFO0FBQ1gvTSxjQUFJLEVBQUV5QyxPQURLO0FBRVhwQixlQUFLLEVBQUU7QUFGSSxTQXBCUjtBQXdCTDJMLGtCQUFVLEVBQUU7QUFDVmhOLGNBQUksRUFBRXlDLE9BREk7QUFFVnBCLGVBQUssRUFBRTtBQUZHLFNBeEJQO0FBNEJMNEwsbUJBQVcsRUFBRTtBQUNYak4sY0FBSSxFQUFFeUMsT0FESztBQUVYcEIsZUFBSyxFQUFFO0FBRkksU0E1QlI7QUFnQ0w2TCxvQkFBWSxFQUFFbEUsTUFoQ1Q7QUFpQ0xtRSxvQkFBWSxFQUFFbkUsTUFqQ1Q7QUFrQ0xvRSxrQkFBVSxFQUFFO0FBQ1ZwTixjQUFJLEVBQUVnSixNQURJO0FBRVZsRyxrQkFBUSxFQUFFO0FBRkE7QUFsQ1AsT0FBUDtBQXVDRDs7QUFFRHlGLFNBQUssR0FBRztBQUNOLFlBQU1BLEtBQU47QUFDQSxXQUFLOEUsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNEOztBQUVEekkscUJBQWlCLEdBQUc7QUFDbEIsWUFBTUEsaUJBQU47QUFDQSxXQUFLMEksWUFBTCxHQUFvQixJQUFwQjtBQUNBaFMsWUFBTSxDQUFDaVMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0gsYUFBdkM7O0FBQ0EsV0FBS0ksY0FBTDtBQUNEOztBQUVEM0ksd0JBQW9CLEdBQUc7QUFDckJ2SixZQUFNLENBQUNtUyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLTCxhQUExQztBQUNBLFdBQUtFLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxZQUFNekksb0JBQU47QUFDRDs7QUFFRCxlQUFXYixTQUFYLEdBQXVCO0FBQ3JCLGFBQU8sQ0FDTCw4Q0FESyxDQUFQO0FBR0Q7O0FBRUR3SixrQkFBYyxHQUFHO0FBQ2YsVUFBSSxDQUFDLEtBQUtGLFlBQVYsRUFBd0I7O0FBQ3hCLFdBQUtJLFFBQUw7O0FBQ0EsVUFBSSxLQUFLQyxRQUFULEVBQW1CO0FBQ25CLFdBQUtDLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxXQUFLRCxRQUFMLEdBQWdCclMsTUFBTSxDQUFDdVMscUJBQVAsQ0FBNkIsTUFBTTtBQUNqRCxhQUFLRixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsYUFBS0MsY0FBTCxHQUFzQixJQUF0Qjs7QUFDQSxhQUFLUixhQUFMO0FBQ0QsT0FKZSxDQUFoQjtBQUtEOztBQUVETSxZQUFRLEdBQUc7QUFDVCxZQUFNL0IsR0FBRyxHQUFHO0FBQ1ZvQixrQkFBVSxFQUFFLEtBQUtILElBQUwsS0FBYyxhQUFkLElBQStCLEtBQUtJLFdBRHRDO0FBRVZGLG1CQUFXLEVBQ04sQ0FBQyxLQUFLRixJQUFMLEtBQWMsY0FBZCxJQUFnQyxLQUFLQSxJQUFMLEtBQWMsYUFBL0MsS0FDQSxLQUFLSTtBQUpBLE9BQVo7O0FBTUEsVUFBSSxDQUFDLEtBQUtHLFVBQVYsRUFBc0I7QUFDcEJ4QixXQUFHLENBQUNtQixXQUFKLEdBQWtCLElBQWxCO0FBQ0Q7O0FBQ0QsV0FBS25RLGFBQUwsQ0FBbUJnUCxHQUFuQjtBQUNEOztBQUVEeUIsaUJBQWEsR0FBRztBQUNkLFVBQUksQ0FBQyxLQUFLUSxjQUFWLEVBQTBCOztBQUMxQixVQUFJLEtBQUtoQixJQUFMLEtBQWMsV0FBbEIsRUFBK0I7QUFDN0IsYUFBS2pRLGFBQUwsQ0FBbUI7QUFDakJvUSxvQkFBVSxFQUFFLElBREs7QUFFakJELHFCQUFXLEVBQUU7QUFGSSxTQUFuQjtBQUlBO0FBQ0Q7O0FBQ0QsWUFBTWdCLGVBQWUsR0FBRyxLQUFLaEIsV0FBN0I7QUFDQSxZQUFNaUIsY0FBYyxHQUFHLEtBQUtoQixVQUE1QjtBQUNBLFdBQUtwUSxhQUFMLENBQW1CO0FBQ2pCcVEsbUJBQVcsRUFBRSxLQURJO0FBRWpCRCxrQkFBVSxFQUFFLEtBRks7QUFHakJELG1CQUFXLEVBQUU7QUFISSxPQUFuQjtBQUtBLFlBQU07QUFBRXpDO0FBQUYsVUFBZ0IsS0FBSzFCLENBQTNCO0FBQ0EsWUFBTXFGLGNBQWMsR0FBRzNELFNBQVMsQ0FBQzRELFdBQWpDO0FBQ0EsVUFBSUQsY0FBYyxLQUFLLENBQXZCLEVBQTBCOztBQUMxQixVQUFJQSxjQUFjLElBQUksS0FBS2YsWUFBM0IsRUFBeUM7QUFDdkMsYUFBS0QsV0FBTCxHQUFtQixJQUFuQjtBQUNELE9BRkQsTUFFTyxJQUFJZ0IsY0FBYyxJQUFJLEtBQUtkLFlBQTNCLEVBQXlDO0FBQzlDLGFBQUtGLFdBQUwsR0FBbUIsS0FBbkI7QUFDRCxPQUZNLE1BRUE7QUFDTCxZQUFJZSxjQUFjLElBQUksS0FBS25CLElBQUwsS0FBYyxhQUFwQyxFQUFtRDtBQUNqRDtBQUNBLGVBQUtZLGNBQUw7O0FBQ0E7QUFDRDs7QUFDRCxjQUFNVSxlQUFlLEdBQUc3RCxTQUFTLENBQUM4RCxZQUFsQztBQUNBLGNBQU1DLFdBQVcsR0FBRyxLQUFLblMsSUFBTCxDQUFVTixhQUFWLENBQXdCLGFBQXhCLEVBQXVDd1MsWUFBM0Q7QUFDQSxhQUFLbkIsV0FBTCxHQUFtQmtCLGVBQWUsR0FBR0UsV0FBVyxHQUFHLEdBQW5EOztBQUNBLFlBQUksS0FBS3BCLFdBQVQsRUFBc0I7QUFDcEIsZUFBS0MsWUFBTCxHQUFvQmUsY0FBcEI7QUFDRCxTQUZELE1BRU8sSUFBSSxDQUFDRixlQUFMLEVBQXNCO0FBQzNCLGVBQUtaLFlBQUwsR0FBb0JjLGNBQXBCO0FBQ0Q7QUFDRjs7QUFDRCxXQUFLTixRQUFMO0FBQ0Q7O0FBRURXLHFCQUFpQixDQUFDekIsSUFBRCxFQUFPQyxhQUFQLEVBQXNCRyxXQUF0QixFQUFtQ3pLLFFBQW5DLEVBQTZDO0FBQzVELFVBQUlBLFFBQUosRUFBYztBQUNaLGVBQU8sRUFBUDtBQUNEOztBQUNELFVBQUlxSyxJQUFJLEtBQUssYUFBYixFQUE0QjtBQUMxQixlQUFPLFFBQVA7QUFDRDs7QUFDRCxVQUFJQyxhQUFhLElBQUlHLFdBQXJCLEVBQWtDO0FBQ2hDLGVBQU8sY0FBUDtBQUNEOztBQUNELGFBQU8sTUFBUDtBQUNEOztBQUVEc0IsZUFBVyxDQUFDL0wsUUFBRCxFQUFXcEYsUUFBWCxFQUFxQjRQLFVBQXJCLEVBQWlDO0FBQzFDLFVBQUl4SyxRQUFRLElBQUl3SyxVQUFoQixFQUE0QjtBQUMxQixlQUFPLEtBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7QUFFRHdCLGlCQUFhLENBQUM1RSxFQUFELEVBQUs7QUFDaEIsWUFBTXZJLEtBQUssR0FBR29OLFFBQVEsQ0FBQzdFLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVeEksS0FBWCxFQUFrQixFQUFsQixDQUF0QjtBQUNBLFlBQU1xTixLQUFLLEdBQUc7QUFBRS9RLGlCQUFTLEVBQUUsS0FBS1AsUUFBTCxDQUFjTztBQUEzQixPQUFkO0FBQ0EsVUFBSXFMLE1BQU0sQ0FBQzJGLEtBQVAsQ0FBYXROLEtBQWIsQ0FBSixFQUF5QjtBQUN6QixVQUFJd0ksTUFBTSxHQUFHLEtBQUszTixJQUFMLENBQVVOLGFBQVYsQ0FBd0IsU0FBeEIsQ0FBYjs7QUFDQSxVQUFJZ08sRUFBRSxDQUFDQyxNQUFILEtBQWNBLE1BQWxCLEVBQTBCO0FBQ3hCO0FBQ0EsU0FBQztBQUFFQTtBQUFGLFlBQWFELEVBQWQ7QUFDRCxPQUhELE1BR08sSUFBSUEsRUFBRSxDQUFDZ0YsSUFBUCxFQUFhO0FBQ2xCLFNBQUMvRSxNQUFELElBQVdELEVBQUUsQ0FBQ2dGLElBQWQ7QUFDRCxPQUZNLE1BRUEsSUFBSWhGLEVBQUUsQ0FBQ2lGLFlBQVAsRUFBcUI7QUFDMUIsU0FBQ2hGLE1BQUQsSUFBV0QsRUFBRSxDQUFDaUYsWUFBSCxFQUFYO0FBQ0Q7O0FBQ0QsVUFBSXhOLEtBQUssS0FBSyxDQUFWLElBQWdCQSxLQUFLLElBQUl3SSxNQUFNLENBQUNkLEdBQWhCLElBQXVCLENBQUMsS0FBS1AsaUJBQWpELEVBQXFFO0FBQ25FLGFBQUt4TCxJQUFMLENBQVU4UixXQUFWLENBQXNCLEtBQUs3UixNQUEzQixFQUFtQyxLQUFLa1AsVUFBeEMsRUFBb0R1QyxLQUFwRDtBQUNELE9BRkQsTUFFTztBQUNMQSxhQUFLLENBQUMsS0FBS3BDLFlBQUwsSUFBcUIsS0FBS0QsU0FBM0IsQ0FBTCxHQUE2Q2hMLEtBQTdDO0FBQ0EsYUFBS3JFLElBQUwsQ0FBVThSLFdBQVYsQ0FBc0IsS0FBSzdSLE1BQTNCLEVBQW1DLEtBQUttUCxVQUF4QyxFQUFvRHNDLEtBQXBEO0FBQ0Q7QUFDRjs7QUFFREssbUJBQWUsQ0FBQzNSLFFBQUQsRUFBV21QLE1BQVgsRUFBbUJGLFNBQW5CLEVBQThCO0FBQzNDLFlBQU1ULEdBQUcsR0FBRztBQUNWZ0IsbUJBQVcsRUFBRSxLQUFLekQsSUFBTCxDQUFVL0wsUUFBVixFQUFvQm1QLE1BQXBCLElBQThCblAsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQmlRLFNBQXBCLENBQTlCLEdBQStEO0FBRGxFLE9BQVo7O0FBR0EsVUFBSWpQLFFBQUosRUFBYztBQUNabkMsY0FBTSxDQUFDbUssTUFBUCxDQUFjd0csR0FBZCxFQUFtQjtBQUNqQnNCLHNCQUFZLEVBQUUsQ0FERztBQUVqQkMsc0JBQVksRUFBRSxHQUZHO0FBR2pCSCxvQkFBVSxFQUFFLEtBSEs7QUFJakJELHFCQUFXLEVBQUUsS0FKSTtBQUtqQkUscUJBQVcsRUFBRSxLQUxJO0FBTWpCSixjQUFJLEVBQUV6UCxRQUFRLENBQUNoQixVQUFULENBQW9CeVAsZUFOVDtBQU9qQmlCLHVCQUFhLEVBQUUsQ0FBQyxDQUFDMVAsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQjRTO0FBUHBCLFNBQW5CO0FBU0Q7O0FBQ0QsV0FBS3BTLGFBQUwsQ0FBbUJnUCxHQUFuQjs7QUFDQSxVQUFJeE8sUUFBSixFQUFjO0FBQ1osYUFBS3FRLGNBQUw7QUFDRDtBQUNGOztBQUVEdEUsUUFBSSxDQUFDL0wsUUFBRCxFQUFXbVAsTUFBWCxFQUFtQjtBQUNyQixhQUFPblAsUUFBUSxLQUFLLENBQUNtUCxNQUFELElBQVduUCxRQUFRLENBQUNDLEtBQVQsS0FBbUJrUCxNQUFuQyxDQUFmO0FBQ0Q7O0FBRUR4RixtQkFBZSxDQUFDNkMsRUFBRCxFQUFLO0FBQ2xCQSxRQUFFLENBQUM3QyxlQUFIO0FBQ0Q7O0FBNVIrRDs7QUE4UmxFM0MsZ0JBQWMsQ0FBQ0MsTUFBZixDQUFzQix3QkFBdEIsRUFBZ0RzSSxtQkFBaEQ7QUFDRDs7QUFDRCxJQUFJN0ksT0FBTyxJQUFJQSxPQUFPLENBQUNDLE9BQW5CLElBQThCSyxjQUFjLENBQUNFLEdBQWYsQ0FBbUIsZ0JBQW5CLENBQWxDLEVBQXdFO0FBQ3RFVixjQUFZO0FBQ2IsQ0FGRCxNQUVPO0FBQ0xRLGdCQUFjLENBQUNHLFdBQWYsQ0FBMkIsZ0JBQTNCLEVBQTZDQyxJQUE3QyxDQUFrRCxNQUFNWixZQUFZLEVBQXBFO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdTRDtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUN0Qjs7O0FBR0EsUUFBTXFMLHNCQUFOLFNBQXFDLG9FQUFjLENBQUNuTCxPQUFPLENBQUNDLE9BQVQsQ0FBbkQsQ0FBcUU7QUFDbkUsZUFBV2hDLFFBQVgsR0FBc0I7QUFDcEIsYUFBTywyRUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FBWjtBQTJCRDs7QUE3QmtFOztBQStCckVxQyxnQkFBYyxDQUFDQyxNQUFmLENBQXNCLDJCQUF0QixFQUFtRDRLLHNCQUFuRDtBQUNEOztBQUNELElBQUluTCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsT0FBbkIsSUFBOEJLLGNBQWMsQ0FBQ0UsR0FBZixDQUFtQixnQkFBbkIsQ0FBbEMsRUFBd0U7QUFDdEVWLGNBQVk7QUFDYixDQUZELE1BRU87QUFDTFEsZ0JBQWMsQ0FBQ0csV0FBZixDQUEyQixnQkFBM0IsRUFBNkNDLElBQTdDLENBQWtELE1BQU1aLFlBQVksRUFBcEU7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NEO0FBRUFySSxNQUFNLENBQUN1RCxpQkFBUCxHQUEyQnZELE1BQU0sQ0FBQ3VELGlCQUFQLElBQTRCLEVBQXZEO0FBQ0EsTUFBTW9RLHNCQUFzQixHQUFHLENBQzdCLGFBRDZCLEVBQ2QsY0FEYyxFQUNFLHFCQURGLEVBQ3lCLGFBRHpCLEVBQ3dDLFdBRHhDLENBQS9CO0FBSUEsTUFBTUMsa0JBQWtCLEdBQUc7QUFDekJyUixPQUFLLEVBQUVnQyxTQURrQjtBQUV6QnNQLFFBQU0sRUFBRXRQLFNBRmlCO0FBR3pCdVAsV0FBUyxFQUFFdlAsU0FIYztBQUl6QnpDLE9BQUssRUFBRXlDLFNBSmtCO0FBS3pCd1AsZUFBYSxFQUFFeFAsU0FMVTtBQU16QjRNLGlCQUFlLEVBQUU7QUFBRTFNLFFBQUksRUFBRTtBQUFSLEdBTlE7QUFPekI2TCxpQkFBZSxFQUFFO0FBQ2Y3TCxRQUFJLEVBQUUsT0FEUztBQUVmYSxXQUFPLEVBQUU7QUFDUG1KLFdBQUssRUFBRWtGLHNCQUFzQixDQUFDSyxNQUF2QixDQUE4QixRQUE5QixDQURBO0FBRVB0USxXQUFLLEVBQUVpUSxzQkFBc0IsQ0FBQ0ssTUFBdkIsQ0FBOEIsUUFBOUIsQ0FGQTtBQUdQdEYsYUFBTyxFQUFFaUYsc0JBQXNCLENBQUNLLE1BQXZCLENBQThCLFFBQTlCLENBSEY7QUFJUCxXQUFLLENBQUMsUUFBRDtBQUpFO0FBRk0sR0FQUTtBQWdCekJyRCxnQ0FBOEIsRUFBRTtBQUFFbE0sUUFBSSxFQUFFO0FBQVIsR0FoQlA7QUFpQnpCa0wsYUFBVyxFQUFFO0FBQUVsTCxRQUFJLEVBQUU7QUFBUixHQWpCWTtBQWtCekIwRCxtQkFBaUIsRUFBRTtBQUFFMUQsUUFBSSxFQUFFO0FBQVIsR0FsQk07QUFtQnpCaUcsY0FBWSxFQUFFO0FBQUVqRyxRQUFJLEVBQUU7QUFBUixHQW5CVztBQW9CekJpRCxxQkFBbUIsRUFBRTtBQUFFakQsUUFBSSxFQUFFO0FBQVIsR0FwQkk7QUFxQnpCaUYsYUFBVyxFQUFFO0FBQUVqRixRQUFJLEVBQUU7QUFBUixHQXJCWTtBQXNCekJnUCxnQkFBYyxFQUFFO0FBQUVoUCxRQUFJLEVBQUU7QUFBUixHQXRCUztBQXVCekJ3UCxjQUFZLEVBQUU7QUFBRXhQLFFBQUksRUFBRTtBQUFSLEdBdkJXO0FBd0J6QmhGLE9BQUssRUFBRTtBQUFFZ0YsUUFBSSxFQUFFO0FBQVIsR0F4QmtCO0FBeUJ6QnNHLGtCQUFnQixFQUFFO0FBQUV0RyxRQUFJLEVBQUU7QUFBUixHQXpCTztBQTBCekJ1Ryw0QkFBMEIsRUFBRTtBQUFFdkcsUUFBSSxFQUFFO0FBQVIsR0ExQkg7QUEyQnpCeVAsc0JBQW9CLEVBQUU7QUFBRXpQLFFBQUksRUFBRTtBQUFSLEdBM0JHO0FBNEJ6QjBQLFlBQVUsRUFBRTtBQUFFMVAsUUFBSSxFQUFFO0FBQVI7QUE1QmEsQ0FBM0I7QUE4QkF6RSxNQUFNLENBQUN1RCxpQkFBUCxDQUF5QmMsc0JBQXpCLEdBQWtELGdHQUFrQixDQUFDQSxzQkFBckU7QUFDQXJFLE1BQU0sQ0FBQ3VELGlCQUFQLENBQXlCTSxZQUF6QixHQUF3QyxnR0FBa0IsQ0FBQ0EsWUFBM0Q7QUFDQW5FLE1BQU0sQ0FBQ21LLE1BQVAsQ0FBYzdKLE1BQU0sQ0FBQ3VELGlCQUFQLENBQXlCYyxzQkFBdkMsRUFBK0R1UCxrQkFBL0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTVULE1BQU0sQ0FBQzZILFFBQVAsR0FBa0I3SCxNQUFNLENBQUM2SCxRQUFQLElBQW1CO0FBQ25DOEwsd0JBQXNCLEVBQUUsQ0FDdEIsYUFEc0IsRUFDUCxjQURPLEVBQ1MscUJBRFQsRUFDZ0MsYUFEaEMsRUFDK0MsV0FEL0MsQ0FEVzs7QUFLbkNTLFNBQU8sQ0FBQ3hJLElBQUQsRUFBTztBQUNaLFFBQUlBLElBQUksS0FBS3hMLFFBQWIsRUFBdUIsT0FBTyxJQUFQO0FBQ3ZCLFVBQU1PLElBQUksR0FBR2lMLElBQUksQ0FBQ3lJLFdBQUwsRUFBYjtBQUNBLFdBQVExVCxJQUFJLFlBQVkyVCxnQkFBakI7QUFBcUM7QUFBMkIzVCxRQUFELENBQU80VCxJQUF0RSxHQUE2RTVULElBQXBGO0FBQ0QsR0FUa0M7O0FBV25DNlQsZUFBYSxDQUFDNUksSUFBRCxFQUFPNkksUUFBUCxFQUFpQjtBQUM1QixXQUFPN0ksSUFBSSxDQUFDOEksVUFBTCxHQUNMOUksSUFBSSxDQUFDOEksVUFBTCxDQUFnQnJVLGFBQWhCLENBQThCb1UsUUFBOUIsQ0FESyxHQUVMN0ksSUFBSSxDQUFDdkwsYUFBTCxDQUFtQm9VLFFBQW5CLENBRkY7QUFHRCxHQWZrQzs7QUFpQm5DRSxxQkFBbUIsQ0FBQ2hVLElBQUQsRUFBT2lVLFNBQVAsRUFBa0I7QUFDbkMsUUFBSWpVLElBQUksS0FBSyxJQUFiLEVBQW1CLE9BQU8sSUFBUDtBQUNuQixVQUFNaUwsSUFBSSxHQUFHZ0osU0FBUyxDQUFDQyxLQUFWLEVBQWI7O0FBQ0EsUUFBSWpKLElBQUosRUFBVTtBQUNSLGFBQU81TCxNQUFNLENBQUM2SCxRQUFQLENBQWdCOE0sbUJBQWhCLENBQ0wzVSxNQUFNLENBQUM2SCxRQUFQLENBQWdCMk0sYUFBaEIsQ0FBOEI3VCxJQUE5QixFQUFvQ2lMLElBQXBDLENBREssRUFDc0NnSixTQUR0QyxDQUFQO0FBRUQ7O0FBQ0QsV0FBT2pVLElBQVA7QUFDRCxHQXpCa0M7O0FBMkJuQ21VLFlBQVUsQ0FBQ2xKLElBQUQsRUFBTztBQUNmLFFBQUlBLElBQUksQ0FBQ21KLFFBQUwsS0FBa0J4USxTQUF0QixFQUFpQztBQUMvQnFILFVBQUksQ0FBQ21KLFFBQUwsR0FBZ0IsRUFBaEI7O0FBQ0EsV0FBSyxJQUFJOVYsT0FBTyxHQUFJMk0sSUFBSSxDQUFDM0ssT0FBTCxLQUFpQixrQkFBakIsR0FBc0NqQixNQUFNLENBQUM2SCxRQUFQLENBQWdCdU0sT0FBaEIsQ0FBd0J4SSxJQUF4QixDQUF0QyxHQUFzRUEsSUFBMUYsRUFDRTNNLE9BREYsRUFDV0EsT0FBTyxHQUFHZSxNQUFNLENBQUM2SCxRQUFQLENBQWdCdU0sT0FBaEIsQ0FBd0JuVixPQUF4QixDQURyQixFQUN1RDtBQUNyRCxnQkFBUUEsT0FBTyxDQUFDZ0MsT0FBaEI7QUFDRSxlQUFLLGtCQUFMO0FBQ0UsZ0JBQUloQyxPQUFPLENBQUMrVixXQUFaLEVBQXlCO0FBQ3ZCcEosa0JBQUksQ0FBQ21KLFFBQUwsQ0FBY25GLElBQWQsQ0FBbUIzUSxPQUFPLENBQUMrVixXQUFSLENBQW9CNVMsU0FBdkM7QUFDRCxhQUZELE1BRU8sSUFBSW5ELE9BQU8sQ0FBQytWLFdBQVIsS0FBd0IsS0FBeEIsSUFBaUMvVixPQUFPLENBQUM4SSxNQUF6QyxJQUFtRDlJLE9BQU8sQ0FBQzhJLE1BQVIsQ0FBZUcsTUFBdEUsRUFBOEU7QUFDbkYwRCxrQkFBSSxDQUFDbUosUUFBTCxDQUFjbkYsSUFBZCxDQUFvQixTQUFRLGlIQUFrQixDQUFDM1EsT0FBTyxDQUFDOEksTUFBUixDQUFlLENBQWYsQ0FBRCxDQUFvQixFQUFsRTtBQUNEOztBQUNEOztBQUNGLGVBQUssaUJBQUw7QUFDQSxlQUFLLG9CQUFMO0FBQ0UsZ0JBQUk5SSxPQUFPLENBQUM0QyxRQUFaLEVBQXNCO0FBQ3BCK0osa0JBQUksQ0FBQ21KLFFBQUwsQ0FBY25GLElBQWQsQ0FBbUIzUSxPQUFPLENBQUM0QyxRQUFSLENBQWlCTyxTQUFwQztBQUNEOztBQUNEOztBQUNGLGVBQUssVUFBTDtBQUNFd0osZ0JBQUksQ0FBQ21KLFFBQUwsQ0FBY25GLElBQWQsQ0FBbUIzUSxPQUFPLENBQUN1QixZQUFSLENBQXFCLFdBQXJCLEtBQXFDLGNBQXhEOztBQUNBO0FBQ0Y7QUFqQkY7QUFtQkQ7O0FBQ0RvTCxVQUFJLENBQUNtSixRQUFMLENBQWNFLE9BQWQ7QUFDRDs7QUFDRCxXQUFPckosSUFBSSxDQUFDbUosUUFBWjtBQUNELEdBdkRrQzs7QUF5RG5DRyxXQUFTLENBQUNyVixHQUFELEVBQU15RixPQUFOLEVBQWU7QUFDdEIsUUFBSSxDQUFDQSxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBQ2QsUUFBSUEsT0FBTyxDQUFDekYsR0FBRCxDQUFYLEVBQWtCLE9BQU9BLEdBQVA7QUFDbEIsV0FBT0gsTUFBTSxDQUFDQyxJQUFQLENBQVkyRixPQUFaLEVBQXFCNlAsSUFBckIsQ0FBMEJDLE1BQU0sSUFBSXZWLEdBQUcsQ0FBQ3dWLEtBQUosQ0FBVyxJQUFHRCxNQUFPLEdBQXJCLENBQXBDLENBQVA7QUFDRCxHQTdEa0M7O0FBK0RuQ0UsMkJBQXlCLENBQUN6VCxRQUFELEVBQVc7QUFDbEMsVUFBTW9LLElBQUksR0FBR2pNLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0IyRSxPQUFoQixFQUFiO0FBQ0EsUUFBSSxDQUFDUCxJQUFMLEVBQVcsT0FBT3BLLFFBQVA7QUFDWCxVQUFNd1QsS0FBSyxHQUFHLEtBQUtILFNBQUwsQ0FBZWpKLElBQWYsRUFBcUJwSyxRQUFRLENBQUNoQixVQUFULENBQW9CZ1QsTUFBekMsQ0FBZDtBQUNBLFFBQUksQ0FBQ3dCLEtBQUwsRUFBWSxPQUFPeFQsUUFBUDtBQUNaLFVBQU1oQixVQUFVLEdBQUduQixNQUFNLENBQUNtSyxNQUFQLENBQWMsRUFBZCxFQUFrQmhJLFFBQVEsQ0FBQ2hCLFVBQVQsQ0FBb0JnVCxNQUFwQixDQUEyQndCLEtBQTNCLENBQWxCLENBQW5CO0FBRUEsUUFBSSxDQUFDM1YsTUFBTSxDQUFDQyxJQUFQLENBQVlrQixVQUFaLEVBQXdCcUgsTUFBN0IsRUFBcUMsT0FBT3JHLFFBQVA7QUFDckMsV0FBTzdCLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0IwTixlQUFoQixDQUFnQzFULFFBQWhDLEVBQTBDaEIsVUFBMUMsQ0FBUDtBQUNELEdBeEVrQzs7QUEwRW5DMlUsMEJBQXdCLENBQUM1SixJQUFELEVBQU8vSixRQUFQLEVBQWlCO0FBQ3ZDLFVBQU00VCxPQUFPLEdBQUd6VixNQUFNLENBQUM2SCxRQUFQLENBQWdCaU4sVUFBaEIsQ0FBMkJsSixJQUEzQixDQUFoQjtBQUNBLFFBQUksQ0FBQzZKLE9BQUwsRUFBYyxPQUFPNVQsUUFBUDs7QUFFZCxRQUFJLENBQUNBLFFBQVEsQ0FBQ2hCLFVBQVQsQ0FBb0IwQixLQUF6QixFQUFnQztBQUM5QixhQUFPVixRQUFQO0FBQ0Q7O0FBQ0QsVUFBTWhCLFVBQVUsR0FBRyxFQUFuQjtBQUNBNFUsV0FBTyxDQUFDN1YsT0FBUixDQUFpQjhWLENBQUQsSUFBTztBQUNyQixZQUFNTCxLQUFLLEdBQUcsS0FBS0gsU0FBTCxDQUFlUSxDQUFmLEVBQWtCN1QsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQjBCLEtBQXRDLENBQWQ7O0FBQ0EsVUFBSVYsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQjBCLEtBQXBCLENBQTBCOFMsS0FBMUIsQ0FBSixFQUFzQztBQUNwQzNWLGNBQU0sQ0FBQ21LLE1BQVAsQ0FBY2hKLFVBQWQsRUFBMEJnQixRQUFRLENBQUNoQixVQUFULENBQW9CMEIsS0FBcEIsQ0FBMEI4UyxLQUExQixDQUExQjtBQUNEO0FBQ0YsS0FMRDtBQU9BLFFBQUksQ0FBQzNWLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZa0IsVUFBWixFQUF3QnFILE1BQTdCLEVBQXFDLE9BQU9yRyxRQUFQO0FBRXJDLFdBQU83QixNQUFNLENBQUM2SCxRQUFQLENBQWdCME4sZUFBaEIsQ0FBZ0MxVCxRQUFoQyxFQUEwQ2hCLFVBQTFDLENBQVA7QUFDRCxHQTVGa0M7O0FBOEZuQzhVLFVBQVEsQ0FBQ3RGLEdBQUQsRUFBTXZLLEtBQU4sRUFBYTtBQUNuQixRQUFJdUssR0FBRyxDQUFDdUYsU0FBSixLQUFrQnJSLFNBQXRCLEVBQWlDO0FBQy9COEwsU0FBRyxDQUFDdUYsU0FBSixHQUFnQjlQLEtBQWhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0x1SyxTQUFHLENBQUN1RixTQUFKLEdBQWdCdkYsR0FBRyxDQUFDdUYsU0FBSixJQUFpQjlQLEtBQWpDO0FBQ0Q7QUFDRixHQXBHa0M7O0FBc0duQytQLDhCQUE0QixDQUFDcFUsSUFBRCxFQUFPc0csTUFBUCxFQUFlbEcsUUFBZixFQUF5QmhCLFVBQXpCLEVBQXFDO0FBQy9ELFFBQUksQ0FBQ0EsVUFBVSxDQUFDaVQsU0FBaEIsRUFBMkI7QUFDekI5VCxZQUFNLENBQUM2SCxRQUFQLENBQWdCOE4sUUFBaEIsQ0FBeUI5VCxRQUF6QixFQUFtQyxJQUFuQzs7QUFDQSxhQUFPQSxRQUFQO0FBQ0Q7O0FBQ0QsVUFBTWlVLGFBQWEsR0FBRyxFQUF0QjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFoQjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxLQUFqQjtBQUNBdFcsVUFBTSxDQUFDQyxJQUFQLENBQVlrQixVQUFVLENBQUNpVCxTQUF2QixFQUFrQ2xVLE9BQWxDLENBQTJDQyxHQUFELElBQVM7QUFDakQsWUFBTTJHLFFBQVEsR0FBRzNGLFVBQVUsQ0FBQ2lULFNBQVgsQ0FBcUJqVSxHQUFyQixDQUFqQjs7QUFDQSxVQUFJMkcsUUFBUSxDQUFDNk8sS0FBVCxDQUFlLHFCQUFmLENBQUosRUFBMkM7QUFDekNVLGlCQUFTLEdBQUcsSUFBWjtBQUNEOztBQUNELFlBQU1qUSxLQUFLLEdBQUc5RixNQUFNLENBQUM2SCxRQUFQLENBQWdCQyxlQUFoQixDQUNadEIsUUFEWSxFQUNGL0UsSUFERSxFQUNJc0csTUFESixFQUNZbEcsUUFEWixFQUNzQmhCLFVBRHRCLEVBRVhnQixRQUFRLENBQUNvVSxzQkFBVCxJQUFtQ3BVLFFBQVEsQ0FBQ29VLHNCQUFULENBQWdDcFcsR0FBaEMsQ0FBcEMsSUFDSWdCLFVBQVUsQ0FBQ2hCLEdBQUQsQ0FIRixFQUlaZ0MsUUFBUSxDQUFDcVUsaUJBQVQsSUFBOEJyVSxRQUFRLENBQUNDLEtBSjNCLENBQWQsQ0FMaUQsQ0FVakQ7O0FBQ0EsVUFBSWdFLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ3BCZ1EsbUJBQWEsQ0FBQ2pXLEdBQUQsQ0FBYixHQUFxQmlHLEtBQXJCOztBQUNBLFVBQUlqRyxHQUFHLEtBQUssT0FBWixFQUFxQjtBQUNuQixZQUFJaUcsS0FBSyxLQUFLakUsUUFBUSxDQUFDQyxLQUF2QixFQUE4QjtBQUM1QmtVLG9CQUFVLEdBQUcsSUFBYjtBQUNEO0FBQ0YsT0FKRCxNQUlPLElBQUluVyxHQUFHLEtBQUssZUFBWixFQUE2QjtBQUNsQyxZQUFJaUcsS0FBSyxLQUFLakUsUUFBUSxDQUFDa1MsYUFBdkIsRUFBc0M7QUFDcENpQyxvQkFBVSxHQUFHLElBQWI7QUFDRDtBQUNGLE9BSk0sTUFJQSxJQUFJbFEsS0FBSyxLQUFLakYsVUFBVSxDQUFDaEIsR0FBRCxDQUF4QixFQUErQjtBQUNwQ21XLGtCQUFVLEdBQUcsSUFBYjtBQUNEO0FBQ0YsS0F4QkQ7O0FBeUJBaFcsVUFBTSxDQUFDNkgsUUFBUCxDQUFnQjhOLFFBQWhCLENBQXlCOVQsUUFBekIsRUFBbUMsQ0FBQ2tVLFNBQXBDOztBQUNBLFFBQUksQ0FBQ0MsVUFBTCxFQUFpQjtBQUNmLGFBQU9uVSxRQUFQO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxDQUFDaEIsVUFBVCxLQUF3QkEsVUFBNUIsRUFBd0M7QUFDdEM7QUFDQSxZQUFNMkIsTUFBTSxHQUFHeEMsTUFBTSxDQUFDNkgsUUFBUCxDQUFnQjBOLGVBQWhCLENBQWdDMVQsUUFBaEMsRUFBMENpVSxhQUExQyxDQUFmOztBQUNBLFVBQUlwVyxNQUFNLENBQUN5VyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNQLGFBQXJDLEVBQW9ELE9BQXBELENBQUosRUFBa0U7QUFDaEUsWUFBSUEsYUFBYSxDQUFDaFUsS0FBZCxLQUF3QixJQUE1QixFQUFrQztBQUNoQ1UsZ0JBQU0sQ0FBQ1YsS0FBUCxHQUFlc0YsTUFBTSxDQUFDME8sYUFBYSxDQUFDaFUsS0FBZixDQUFyQjtBQUNBVSxnQkFBTSxDQUFDMFQsaUJBQVAsR0FBMkJyVSxRQUFRLENBQUNDLEtBQXBDO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJcEMsTUFBTSxDQUFDeVcsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUCxhQUFyQyxFQUFvRCxlQUFwRCxDQUFKLEVBQTBFO0FBQ3hFdFQsY0FBTSxDQUFDdVIsYUFBUCxHQUF1QitCLGFBQWEsQ0FBQy9CLGFBQXJDO0FBQ0F2UixjQUFNLENBQUM4VCx3QkFBUCxHQUFrQ3pVLFFBQVEsQ0FBQ2tTLGFBQTNDO0FBQ0Q7O0FBQ0QvVCxZQUFNLENBQUM2SCxRQUFQLENBQWdCOE4sUUFBaEIsQ0FBeUJuVCxNQUF6QixFQUFpQyxDQUFDdVQsU0FBbEM7O0FBQ0EsYUFBT3ZULE1BQVA7QUFDRCxLQXBEOEQsQ0FxRC9EOzs7QUFDQSxXQUFPOUMsTUFBTSxDQUFDbUssTUFBUCxDQUFjLEVBQWQsRUFBa0JoSSxRQUFsQixDQUFQO0FBQ0QsR0E3SmtDOztBQStKbkMwVSxxQkFBbUIsQ0FBQzlVLElBQUQsRUFBT3NHLE1BQVAsRUFBZWxHLFFBQWYsRUFBeUI7QUFDMUMsVUFBTTJVLFNBQVMsR0FBR3hXLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0JnTyw0QkFBaEIsQ0FDaEJwVSxJQURnQixFQUNWc0csTUFEVSxFQUNGbEcsUUFERSxFQUNRQSxRQUFRLENBQUNoQixVQURqQixDQUFsQjtBQUVBLFFBQUltVixVQUFVLEdBQUlRLFNBQVMsS0FBSzNVLFFBQWhDOztBQUVBLGFBQVM0VSxlQUFULENBQXlCcEcsR0FBekIsRUFBOEI7QUFDNUIsVUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDVjNRLFlBQU0sQ0FBQzZHLE1BQVAsQ0FBYzhKLEdBQWQsRUFBbUJ6USxPQUFuQixDQUE0QmlCLFVBQUQsSUFBZ0I7QUFDekMsY0FBTTJCLE1BQU0sR0FBR3hDLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0JnTyw0QkFBaEIsQ0FDYnBVLElBRGEsRUFDUHNHLE1BRE8sRUFDQ3lPLFNBREQsRUFDWTNWLFVBRFosQ0FBZjtBQUVBbVYsa0JBQVUsSUFBS3hULE1BQU0sS0FBS2dVLFNBQTFCO0FBQ0QsT0FKRDtBQUtBQyxxQkFBZSxDQUFDcEcsR0FBRyxDQUFDd0QsTUFBTCxDQUFmO0FBQ0E0QyxxQkFBZSxDQUFDcEcsR0FBRyxDQUFDOU4sS0FBTCxDQUFmO0FBQ0Q7O0FBRURrVSxtQkFBZSxDQUFDNVUsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQmdULE1BQXJCLENBQWY7QUFDQTRDLG1CQUFlLENBQUM1VSxRQUFRLENBQUNoQixVQUFULENBQW9CMEIsS0FBckIsQ0FBZjtBQUNBLFFBQUlpVSxTQUFTLEtBQUszVSxRQUFsQixFQUE0QixPQUFPMlUsU0FBUDs7QUFDNUIsUUFBSVIsVUFBSixFQUFnQjtBQUNkLGFBQU90VyxNQUFNLENBQUNtSyxNQUFQLENBQWMsRUFBZCxFQUFrQmhJLFFBQWxCLENBQVA7QUFDRDs7QUFDRCxXQUFPQSxRQUFQO0FBQ0QsR0F0TGtDOztBQXdMbkMwVCxpQkFBZSxDQUFDMVQsUUFBRCxFQUFXaEIsVUFBWCxFQUF1QjtBQUNwQyxXQUFPO0FBQ0x1QixlQUFTLEVBQUVQLFFBQVEsQ0FBQ08sU0FEZjtBQUVMTixXQUFLLEVBQUVELFFBQVEsQ0FBQ0MsS0FGWDtBQUdMakIsZ0JBQVUsRUFBRW5CLE1BQU0sQ0FBQ21LLE1BQVAsQ0FBYyxFQUFkLEVBQWtCaEksUUFBUSxDQUFDaEIsVUFBM0IsRUFBdUNBLFVBQXZDLENBSFA7QUFJTG9WLDRCQUFzQixFQUFFcFUsUUFBUSxDQUFDaEIsVUFKNUI7QUFLTDZWLGtCQUFZLEVBQUU3VSxRQUFRLENBQUM2VTtBQUxsQixLQUFQO0FBT0QsR0FoTWtDOztBQWtNbkM1TSxtQkFBaUIsQ0FBQzhCLElBQUQsRUFBTy9KLFFBQVAsRUFBaUJvRixRQUFqQixFQUEyQjBQLFdBQTNCLEVBQXdDO0FBQ3ZELFFBQUkxUCxRQUFKLEVBQWMsT0FBT3BGLFFBQVA7QUFDZCxRQUFJd08sR0FBRyxHQUFHclEsTUFBTSxDQUFDNkgsUUFBUCxDQUFnQnlOLHlCQUFoQixDQUEwQ3pULFFBQTFDLENBQVY7QUFDQXdPLE9BQUcsR0FBR3JRLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0IyTix3QkFBaEIsQ0FBeUM1SixJQUF6QyxFQUErQ3lFLEdBQS9DLENBQU47QUFDQUEsT0FBRyxHQUFHclEsTUFBTSxDQUFDNkgsUUFBUCxDQUFnQmdPLDRCQUFoQixDQUNKakssSUFBSSxDQUFDbkssSUFERCxFQUNPbUssSUFBSSxDQUFDbkssSUFBTCxDQUFVc0csTUFEakIsRUFDeUJzSSxHQUR6QixFQUM4QkEsR0FBRyxDQUFDeFAsVUFEbEMsQ0FBTjs7QUFHQSxRQUFJd1AsR0FBRyxLQUFLeE8sUUFBUixJQUFvQndPLEdBQUcsQ0FBQ3hQLFVBQUosQ0FBZWdDLE1BQW5DLElBQTZDOFQsV0FBakQsRUFBOEQ7QUFDNUQsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsV0FBT3RHLEdBQVA7QUFDRCxHQTdNa0M7O0FBK01uQ3VHLGdCQUFjLEdBQUc7QUFDZixVQUFNQyxpQkFBaUIsR0FBRzdXLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0I4TSxtQkFBaEIsQ0FBb0N2VSxRQUFwQyxFQUE4QyxDQUN0RSxnQkFEc0UsRUFFdEUscUJBRnNFLENBQTlDLENBQTFCOztBQUdBLFFBQUl5VyxpQkFBaUIsS0FBSyxJQUExQixFQUFnQztBQUM5QjtBQUNBN1csWUFBTSxDQUFDdUwsVUFBUCxDQUFrQnZMLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0IrTyxjQUFsQyxFQUFrRCxJQUFsRDtBQUNBO0FBQ0Q7O0FBRUQsVUFBTUUsT0FBTyxHQUFHOVcsTUFBTSxDQUFDNkgsUUFBUCxDQUFnQjhNLG1CQUFoQixDQUFvQ2tDLGlCQUFwQyxFQUF1RCxDQUNyRSxlQURxRSxFQUVyRSx3QkFGcUUsQ0FBdkQsQ0FBaEI7QUFHQSxRQUFJQyxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDdEIsVUFBTUMsSUFBSSxHQUFHL1csTUFBTSxDQUFDNkgsUUFBUCxDQUFnQjJNLGFBQWhCLENBQThCc0MsT0FBOUIsRUFBdUMsT0FBdkMsS0FBbURBLE9BQU8sQ0FBQ3pKLENBQVIsQ0FBVTBKLElBQTFFO0FBQ0EsVUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNwTCxnQkFBTCxDQUFzQixrQkFBdEIsQ0FBZDtBQUNBcUwsU0FBSyxDQUFDcFgsT0FBTixDQUFlcVgsSUFBRCxJQUFVO0FBQ3RCLFVBQUlBLElBQUksQ0FBQ2pDLFdBQVQsRUFBc0I7QUFDcEIsY0FBTTNFLEdBQUcsR0FBR3JRLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0JpQyxpQkFBaEIsQ0FDVm1OLElBRFUsRUFFVkEsSUFBSSxDQUFDakMsV0FGSyxFQUdWO0FBQU07QUFISSxVQUlWO0FBQU07QUFKSSxTQUFaOztBQUtBLFlBQUkzRSxHQUFHLEtBQUs0RyxJQUFJLENBQUNqQyxXQUFiLElBQTRCM0UsR0FBRyxDQUFDeFAsVUFBSixDQUFlMkQsYUFBL0MsRUFBOEQ7QUFDNUQsZ0JBQU0wUyxRQUFRLEdBQUdsWCxNQUFNLENBQUM2SCxRQUFQLENBQWdCMk0sYUFBaEIsQ0FBOEJ5QyxJQUE5QixFQUFvQyxPQUFwQyxDQUFqQjtBQUNBQyxrQkFBUSxDQUFDQyxXQUFULEdBQXVCOUcsR0FBRyxDQUFDeFAsVUFBSixDQUFlMkQsYUFBdEM7QUFDRDtBQUNGO0FBQ0YsS0FaRDtBQWFELEdBNU9rQzs7QUE4T25DNFMsZ0JBQWMsQ0FBQ0MsT0FBRCxFQUFVO0FBQ3RCLFVBQU1DLFlBQVksR0FBR3RYLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0I4TSxtQkFBaEIsQ0FBb0N2VSxRQUFwQyxFQUE4QyxDQUNqRSxnQkFEaUUsRUFFakUscUJBRmlFLEVBR2pFLGVBSGlFLENBQTlDLENBQXJCOztBQUlBLFFBQUlrWCxZQUFZLEtBQUssSUFBckIsRUFBMkI7QUFDekI7QUFDQXRYLFlBQU0sQ0FBQ3VMLFVBQVAsQ0FDRXZMLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0J1UCxjQUFoQixDQUErQnJGLElBQS9CLENBQW9DLElBQXBDLEVBQTBDc0YsT0FBMUMsQ0FERixFQUVFLElBRkY7QUFHQTtBQUNELEtBWHFCLENBWXRCOzs7QUFDQSxVQUFNRSxDQUFDLEdBQUdELFlBQVksQ0FBQ0Usa0JBQWIsSUFBbUNGLFlBQVksQ0FBQ0csY0FBMUQ7QUFDQUgsZ0JBQVksQ0FBQ0ksSUFBYixDQUFrQjlYLE9BQWxCLENBQTJCK1gsR0FBRCxJQUFTO0FBQ2pDQSxTQUFHLENBQUNDLGNBQUosQ0FBbUJMLENBQW5CO0FBQ0QsS0FGRDtBQUdBRCxnQkFBWSxDQUFDSSxJQUFiLEdBQW9CTCxPQUFPLENBQUN6UCxHQUFSLENBQWFrSSxLQUFELElBQVc7QUFDekMsWUFBTTZILEdBQUcsR0FBRzNYLE1BQU0sQ0FBQzZYLFVBQVAsQ0FBbUIsZUFBYy9ILEtBQU0sS0FBdkMsQ0FBWjtBQUNBNkgsU0FBRyxDQUFDRyxXQUFKLENBQWdCUCxDQUFoQjtBQUNBLGFBQU9JLEdBQVA7QUFDRCxLQUptQixDQUFwQjtBQUtBSixLQUFDO0FBQ0YsR0FyUWtDOztBQXVRbkNRLGVBQWEsR0FBRztBQUNkLFVBQU1oQixJQUFJLEdBQUcvVyxNQUFNLENBQUM2SCxRQUFQLENBQWdCMk0sYUFBaEIsQ0FBOEJwVSxRQUE5QixFQUF3QyxnQkFBeEMsQ0FBYjtBQUNBLFVBQU00WCxVQUFVLEdBQUdqQixJQUFJLENBQUN0VixJQUFMLENBQVVzRyxNQUFWLENBQWlCLHVCQUFqQixDQUFuQjtBQUNBLFFBQUksQ0FBQ2lRLFVBQUwsRUFBaUI7O0FBQ2pCLFFBQUlBLFVBQVUsQ0FBQ25YLFVBQVgsQ0FBc0J3VyxPQUExQixFQUFtQztBQUNqQ3JYLFlBQU0sQ0FBQzZILFFBQVAsQ0FBZ0J1UCxjQUFoQixDQUErQlksVUFBVSxDQUFDblgsVUFBWCxDQUFzQndXLE9BQXJEO0FBQ0Q7O0FBQ0QsUUFBSVcsVUFBVSxDQUFDblgsVUFBWCxDQUFzQm9YLGVBQTFCLEVBQTJDO0FBQ3pDLFVBQUlqWSxNQUFNLENBQUN1RCxpQkFBUCxJQUE0QnZELE1BQU0sQ0FBQ3VELGlCQUFQLENBQXlCYyxzQkFBekQsRUFBaUY7QUFDL0UyVCxrQkFBVSxDQUFDblgsVUFBWCxDQUFzQm9YLGVBQXRCLENBQXNDclksT0FBdEMsQ0FBK0NvTyxJQUFELElBQVU7QUFDdEQsY0FBSSxDQUFDdE8sTUFBTSxDQUFDeVcsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQ0hyVyxNQUFNLENBQUN1RCxpQkFBUCxDQUF5QmMsc0JBRHRCLEVBQzhDMkosSUFEOUMsQ0FBTCxFQUMwRDtBQUN4RGhPLGtCQUFNLENBQUN1RCxpQkFBUCxDQUF5QmMsc0JBQXpCLENBQWdEMkosSUFBaEQsSUFBd0R6SixTQUF4RDtBQUNEO0FBQ0YsU0FMRDtBQU1EO0FBQ0Y7QUFDRixHQXhSa0M7O0FBMFJuQzJULG1CQUFpQixHQUFHO0FBQ2xCLFFBQUksQ0FBQ2xZLE1BQU0sQ0FBQ21ZLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxVQUF6QixDQUFvQyxTQUFwQyxDQUFMLEVBQXFEO0FBQ3JELFVBQU1DLGFBQWEsR0FBR3RZLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0I4TSxtQkFBaEIsQ0FBb0N2VSxRQUFwQyxFQUE4QyxDQUNsRSxnQkFEa0UsRUFFbEUscUJBRmtFLEVBR2xFLHdCQUhrRSxFQUlsRSxpQkFKa0UsQ0FBOUMsQ0FBdEI7O0FBS0EsUUFBSSxDQUFDa1ksYUFBTCxFQUFvQjtBQUNsQjtBQUNBdFksWUFBTSxDQUFDdUwsVUFBUCxDQUFrQnZMLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0JxUSxpQkFBbEMsRUFBcUQsR0FBckQ7QUFDQTtBQUNEOztBQUNELFVBQU1LLGtCQUFrQixHQUFHdlksTUFBTSxDQUFDNkgsUUFBUCxDQUFnQjhNLG1CQUFoQixDQUFvQzJELGFBQXBDLEVBQW1ELENBQzVFLHFCQUQ0RSxFQUU1RSxzQkFGNEUsQ0FBbkQsQ0FBM0I7O0FBR0EsUUFBSUMsa0JBQUosRUFBd0I7QUFDdEI7QUFDQSxVQUFJQSxrQkFBa0IsQ0FBQzFOLFFBQW5CLElBQStCLENBQUMwTixrQkFBa0IsQ0FBQ0MsUUFBdkQsRUFBaUU7QUFDL0RELDBCQUFrQixDQUFDQyxRQUFuQixHQUE4QixJQUE5QjtBQUNBRCwwQkFBa0IsQ0FBQ0Usc0JBQW5CLEdBQTRDRixrQkFBa0IsQ0FBQ0csY0FBL0Q7QUFDQUgsMEJBQWtCLENBQUNJLHVCQUFuQixHQUE2Q0osa0JBQWtCLENBQUNLLGVBQWhFO0FBQ0FMLDBCQUFrQixDQUFDTSwyQkFBbkIsR0FBaUROLGtCQUFrQixDQUFDTyxtQkFBcEU7O0FBQ0FQLDBCQUFrQixDQUFDRyxjQUFuQixHQUFvQyxDQUFDalgsSUFBRCxFQUFPc1gsSUFBUCxLQUNsQ0EsSUFBSSxLQUFLLFVBQVQsSUFBdUJSLGtCQUFrQixDQUFDRSxzQkFBbkIsQ0FBMENoWCxJQUExQyxFQUFnRHNYLElBQWhELENBRHpCOztBQUVBUiwwQkFBa0IsQ0FBQ0ssZUFBbkIsR0FBcUMsQ0FBQ0csSUFBRCxFQUFPbE8sUUFBUCxLQUNsQ2tPLElBQUksS0FBSyxVQUFULEdBQXNCLFdBQXRCLEdBQW9DUixrQkFBa0IsQ0FBQ0ksdUJBQW5CLENBQTJDSSxJQUEzQyxFQUFpRGxPLFFBQWpELENBRHZDOztBQUVBME4sMEJBQWtCLENBQUNPLG1CQUFuQixHQUF5QyxDQUFDQyxJQUFELEVBQU9sTyxRQUFQLEtBQ3RDa08sSUFBSSxLQUFLLFVBQVQsR0FBc0IsY0FBdEIsR0FBdUNSLGtCQUFrQixDQUFDTSwyQkFBbkIsQ0FBK0NFLElBQS9DLEVBQXFEbE8sUUFBckQsQ0FEMUM7QUFFRDs7QUFDRCxVQUFJLENBQUMwTixrQkFBa0IsQ0FBQ1MsS0FBbkIsQ0FBeUI3TyxJQUF6QixDQUE4QjhPLElBQUksSUFBSUEsSUFBSSxLQUFLLFVBQVQsSUFBdUJBLElBQUksQ0FBQ3ZYLE1BQUwsS0FBZ0IsVUFBN0UsQ0FBTCxFQUErRjtBQUM3RjZXLDBCQUFrQixDQUFDM0ksSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMySSxrQkFBa0IsQ0FBQzFOLFFBQW5CLEdBQThCLFVBQTlCLEdBQTJDO0FBQzFFbkosZ0JBQU0sRUFBRSxVQURrRTtBQUUxRXdYLGlCQUFPLEVBQUUsV0FGaUU7QUFHMUV4VSxxQkFBVyxFQUFFLGdCQUg2RDtBQUkxRXlVLGdCQUFNLEVBQUU7QUFKa0UsU0FBNUU7QUFNRDtBQUNGOztBQUNELFVBQU1DLG1CQUFtQixHQUFHLE1BQU07QUFDaEMsWUFBTUMsZ0JBQWdCLEdBQUdqWixRQUFRLENBQUNlLGFBQVQsQ0FBdUIscUJBQXZCLENBQXpCO0FBQ0FrWSxzQkFBZ0IsQ0FBQ3JOLE1BQWpCLEdBQTBCc00sYUFBYSxDQUFDdE0sTUFBeEM7QUFDQXFOLHNCQUFnQixDQUFDOVksWUFBakIsQ0FBOEIsV0FBOUIsRUFBMkMsVUFBM0M7QUFDQSxhQUFPOFksZ0JBQVA7QUFDRCxLQUxEOztBQU9BLFVBQU1DLFNBQVMsR0FBR3RaLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0IyTSxhQUFoQixDQUE4QjhELGFBQTlCLEVBQTZDLFlBQTdDLENBQWxCOztBQUNBLFFBQUlnQixTQUFKLEVBQWU7QUFDYixVQUFJQSxTQUFTLENBQUNDLGdCQUFWLENBQTJCdFksT0FBM0IsS0FBdUMscUJBQTNDLEVBQWtFO0FBQ2hFLGNBQU1vWSxnQkFBZ0IsR0FBR0QsbUJBQW1CLEVBQTVDO0FBQ0FFLGlCQUFTLENBQUMvWCxXQUFWLENBQXNCOFgsZ0JBQXRCO0FBQ0FDLGlCQUFTLENBQUNySCxnQkFBVixDQUEyQixvQkFBM0IsRUFBaUQsTUFBTTtBQUNyRCxjQUFJalMsTUFBTSxDQUFDbVksUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLFVBQXpCLENBQW9DLGtCQUFwQyxDQUFKLEVBQTZEO0FBQzNEaUIscUJBQVMsQ0FBQ0UsTUFBVixDQUFpQixVQUFqQjtBQUNEO0FBQ0YsU0FKRDtBQUtEO0FBQ0YsS0FWRCxNQVVPLElBQUlsQixhQUFhLENBQUM1RCxVQUFsQixFQUE4QjtBQUNuQyxZQUFNL1QsSUFBSSxHQUFHMlgsYUFBYSxDQUFDNUQsVUFBZCxJQUE0QjRELGFBQXpDOztBQUNBLFVBQUkzWCxJQUFJLENBQUM0WSxnQkFBTCxDQUFzQnRZLE9BQXRCLEtBQWtDLHFCQUF0QyxFQUE2RDtBQUMzRCxjQUFNb1ksZ0JBQWdCLEdBQUdELG1CQUFtQixFQUE1QztBQUNBelksWUFBSSxDQUFDWSxXQUFMLENBQWlCOFgsZ0JBQWpCO0FBQ0Q7O0FBQ0QsWUFBTUksT0FBTyxHQUFHelosTUFBTSxDQUFDbVksUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLFVBQXpCLENBQW9DLGtCQUFwQyxDQUFoQjtBQUNBMVgsVUFBSSxDQUFDNFksZ0JBQUwsQ0FBc0JwTyxLQUF0QixDQUE0QjBELE9BQTVCLEdBQXNDNEssT0FBTyxHQUFHLEVBQUgsR0FBUSxNQUFyRDtBQUNELEtBUk0sTUFRQSxJQUFJbkIsYUFBYSxDQUFDb0IsYUFBZCxJQUErQnBCLGFBQWEsQ0FBQ29CLGFBQWQsQ0FBNEJDLE1BQS9ELEVBQXVFO0FBQzVFLFVBQUksQ0FBQ3JCLGFBQWEsQ0FBQ29CLGFBQWQsQ0FBNEJDLE1BQTVCLENBQW1DQyxRQUF4QyxFQUFrRDtBQUNoRHRCLHFCQUFhLENBQUNvQixhQUFkLENBQTRCQyxNQUE1QixDQUFtQ0MsUUFBbkMsR0FBOEM7QUFDNUNDLGFBQUcsRUFBRSxxQkFEdUM7QUFFNUNDLGNBQUksRUFBRSxNQUFNQyxPQUFPLENBQUNDLE9BQVI7QUFGZ0MsU0FBOUMsQ0FEZ0QsQ0FLaEQ7O0FBQ0EsWUFBSWhhLE1BQU0sQ0FBQ21ZLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxVQUF6QixDQUFvQyxrQkFBcEMsQ0FBSixFQUE2RDtBQUMzREMsdUJBQWEsQ0FBQzJCLE1BQWQsQ0FBcUIsSUFBSUMsR0FBSixDQUFRLENBQUMsQ0FBQyxPQUFELEVBQVUzVixTQUFWLENBQUQsQ0FBUixDQUFyQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBdFdrQzs7QUF3V25DNFYsbUJBQWlCLEdBQUc7QUFDbEJ0UixrQkFBYyxDQUFDRyxXQUFmLENBQTJCLGdCQUEzQixFQUE2Q0MsSUFBN0MsQ0FBa0QsTUFBTTtBQUN0RCxZQUFNbVIsYUFBYSxHQUFHdlIsY0FBYyxDQUFDRSxHQUFmLENBQW1CLGdCQUFuQixDQUF0QjtBQUNBLFVBQUksQ0FBQ3FSLGFBQUQsSUFBa0IsQ0FBQ0EsYUFBYSxDQUFDakUsU0FBZCxDQUF3QmtFLFdBQS9DLEVBQTREO0FBQzVELFlBQU1DLGNBQWMsR0FBR0YsYUFBYSxDQUFDakUsU0FBZCxDQUF3QmtFLFdBQS9DOztBQUNBRCxtQkFBYSxDQUFDakUsU0FBZCxDQUF3QmtFLFdBQXhCLEdBQXNDLFNBQVNKLE1BQVQsQ0FBZ0I1SixHQUFoQixFQUFxQjtBQUN6RDtBQUNBLGNBQU07QUFBRTVPO0FBQUYsWUFBVyxJQUFqQjs7QUFDQSxZQUFJNE8sR0FBRyxDQUFDdEksTUFBUixFQUFnQjtBQUNkckksZ0JBQU0sQ0FBQ0MsSUFBUCxDQUFZMFEsR0FBRyxDQUFDdEksTUFBaEIsRUFBd0JuSSxPQUF4QixDQUFpQ0MsR0FBRCxJQUFTO0FBQ3ZDLGtCQUFNNEMsTUFBTSxHQUFHNE4sR0FBRyxDQUFDdEksTUFBSixDQUFXbEksR0FBWCxDQUFmO0FBQ0EsZ0JBQUk0QyxNQUFNLENBQUNtVCxTQUFYLEVBQXNCO0FBQ3RCLGtCQUFNMkUsU0FBUyxHQUFHdmEsTUFBTSxDQUFDNkgsUUFBUCxDQUFnQjBPLG1CQUFoQixDQUFvQzlVLElBQXBDLEVBQTBDNE8sR0FBRyxDQUFDdEksTUFBOUMsRUFBc0R0RixNQUF0RCxDQUFsQjs7QUFDQSxnQkFBSWhCLElBQUksQ0FBQ3NHLE1BQUwsSUFBZXRGLE1BQU0sS0FBS2hCLElBQUksQ0FBQ3NHLE1BQUwsQ0FBWWxJLEdBQVosQ0FBOUIsRUFBZ0Q7QUFDOUM7QUFDQXdRLGlCQUFHLENBQUN0SSxNQUFKLENBQVdsSSxHQUFYLElBQWtCMGEsU0FBbEI7QUFDRCxhQUhELE1BR08sSUFBSTlYLE1BQU0sS0FBSzhYLFNBQWYsRUFBMEI7QUFDL0I7QUFDQWxLLGlCQUFHLENBQUN0SSxNQUFKLENBQVdsSSxHQUFYLElBQWtCMGEsU0FBbEI7QUFDRDtBQUNGLFdBWEQ7QUFZRDs7QUFDREQsc0JBQWMsQ0FBQ2pFLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEJoRyxHQUExQjs7QUFDQSxZQUFJQSxHQUFHLENBQUNuUixNQUFKLElBQWN1QyxJQUFJLENBQUMrWSxhQUF2QixFQUFzQztBQUNwQy9ZLGNBQUksQ0FBQytZLGFBQUwsQ0FBbUI1YSxPQUFuQixDQUEyQjZhLE1BQU0sSUFBSUEsTUFBTSxDQUFDQyxZQUFQLENBQW9CRCxNQUFNLENBQUMzWSxLQUEzQixDQUFyQzs7QUFDQUwsY0FBSSxDQUFDK1ksYUFBTCxHQUFxQmpXLFNBQXJCO0FBQ0Q7QUFDRixPQXRCRDs7QUF1QkEsWUFBTXdTLElBQUksR0FBRy9XLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0IyTSxhQUFoQixDQUE4QnBVLFFBQTlCLEVBQXdDLGdCQUF4QyxDQUFiOztBQUNBLFVBQUkyVyxJQUFJLENBQUN0VixJQUFMLElBQWFzVixJQUFJLENBQUN0VixJQUFMLENBQVVzRyxNQUEzQixFQUFtQztBQUNqQ2dQLFlBQUksQ0FBQ3NELFdBQUwsQ0FBaUI7QUFBRXRTLGdCQUFNLEVBQUVnUCxJQUFJLENBQUN0VixJQUFMLENBQVVzRztBQUFwQixTQUFqQjtBQUNEO0FBQ0YsS0EvQkQ7QUFnQ0QsR0F6WWtDOztBQTJZbkM0UyxxQkFBbUIsR0FBRztBQUNwQjlSLGtCQUFjLENBQUNHLFdBQWYsQ0FBMkIsZUFBM0IsRUFBNENDLElBQTVDLENBQWlELE1BQU07QUFDckQsWUFBTXFPLFlBQVksR0FBR3pPLGNBQWMsQ0FBQ0UsR0FBZixDQUFtQixlQUFuQixDQUFyQjtBQUNBLFVBQUksQ0FBQ3VPLFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDbkIsU0FBYixDQUF1QnlFLGtCQUE3QyxFQUFpRTs7QUFDakV0RCxrQkFBWSxDQUFDbkIsU0FBYixDQUF1QnlFLGtCQUF2QixHQUE0QyxDQUFDblosSUFBRCxFQUFPTyxRQUFQLEtBQW9CO0FBQzlELFlBQUlQLElBQUksQ0FBQ3NHLE1BQUwsQ0FBWS9GLFFBQVosRUFBc0JuQixVQUF0QixDQUFpQ2dDLE1BQXJDLEVBQTZDLE9BQU8sS0FBUDtBQUM3QyxjQUFNZ1ksUUFBUSxHQUFHLEVBQWpCO0FBQ0FuYixjQUFNLENBQUM2RyxNQUFQLENBQWM5RSxJQUFJLENBQUNzRyxNQUFuQixFQUEyQm5JLE9BQTNCLENBQW9DNkMsTUFBRCxJQUFZO0FBQzdDLGNBQUlBLE1BQU0sQ0FBQzVCLFVBQVAsSUFBcUI0QixNQUFNLENBQUM1QixVQUFQLENBQWtCcVQsb0JBQTNDLEVBQWlFO0FBQy9ELGtCQUFNNEcsZUFBZSxHQUFHclksTUFBTSxDQUFDTCxTQUEvQjtBQUNBLGdCQUFJeVksUUFBUSxDQUFDQyxlQUFELENBQVosRUFBK0I7QUFDL0JELG9CQUFRLENBQUNDLGVBQUQsQ0FBUixHQUE0QnJZLE1BQTVCOztBQUNBLGdCQUFJQSxNQUFNLENBQUM1QixVQUFQLENBQWtCOEIsSUFBdEIsRUFBNEI7QUFDMUIsb0JBQU1DLFlBQVksR0FBRyw4R0FBZSxDQUFDbkIsSUFBSSxDQUFDc0csTUFBTixFQUFjdEYsTUFBZCxDQUFwQztBQUNBL0Msb0JBQU0sQ0FBQ0MsSUFBUCxDQUFZaUQsWUFBWixFQUNHb0YsTUFESCxDQUVJd0gsRUFBRSxJQUFJNU0sWUFBWSxDQUFDNE0sRUFBRCxDQUFaLENBQWlCM08sVUFBakIsQ0FBNEJxVCxvQkFBNUIsS0FBcUQsS0FGL0QsRUFHR3RVLE9BSEgsQ0FHWTRQLEVBQUQsSUFBUTtBQUNmcUwsd0JBQVEsQ0FBQ3JMLEVBQUQsQ0FBUixHQUFlNU0sWUFBWSxDQUFDNE0sRUFBRCxDQUEzQjtBQUNELGVBTEg7QUFNRDtBQUNGO0FBQ0YsU0FmRDtBQWdCQSxlQUFPLENBQUNxTCxRQUFRLENBQUM3WSxRQUFELENBQWhCO0FBQ0QsT0FwQkQ7QUFxQkQsS0F4QkQ7QUF5QkQsR0FyYWtDOztBQXVhbkM7QUFDQStZLG1CQUFpQixDQUFDdFMsV0FBRCxFQUFjO0FBQzdCSSxrQkFBYyxDQUFDRyxXQUFmLENBQTJCUCxXQUEzQixFQUF3Q1EsSUFBeEMsQ0FBNkMsTUFBTTtBQUNqRCxZQUFNK1IsS0FBSyxHQUFHblMsY0FBYyxDQUFDRSxHQUFmLENBQW1CTixXQUFuQixDQUFkO0FBQ0EsVUFBSSxDQUFDdVMsS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQzdFLFNBQXJCLEVBQWdDO0FBQ2hDelcsWUFBTSxDQUFDdWIsY0FBUCxDQUFzQkQsS0FBSyxDQUFDN0UsU0FBNUIsRUFBdUMsVUFBdkMsRUFBbUQ7QUFDakRwTixXQUFHLEdBQUc7QUFDSixtQkFBU21TLGNBQVQsQ0FBd0J2VSxDQUF4QixFQUEyQjtBQUN6QixnQkFBSSxLQUFLOUUsUUFBTCxJQUFpQixLQUFLQSxRQUFMLENBQWNoQixVQUEvQixJQUNBLEtBQUtnQixRQUFMLENBQWNoQixVQUFkLENBQXlCc2EsV0FEN0IsRUFDMEM7QUFDeEMscUJBQU8sS0FBS3RaLFFBQUwsQ0FBY2hCLFVBQWQsQ0FBeUJzYSxXQUFoQztBQUNEOztBQUNELG1CQUFPLEtBQUtDLE1BQUwsQ0FBWXZRLFFBQVosQ0FBcUJsRSxDQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsaUJBQU91VSxjQUFQO0FBQ0QsU0FWZ0Q7O0FBV2pERyxXQUFHLEdBQUcsQ0FBRTs7QUFYeUMsT0FBbkQ7QUFhRCxLQWhCRDtBQWlCRCxHQTFia0M7O0FBNGJuQztBQUNBQywwQkFBd0IsR0FBRztBQUN6QnpTLGtCQUFjLENBQUNHLFdBQWYsQ0FBMkIsc0JBQTNCLEVBQW1EQyxJQUFuRCxDQUF3RCxNQUFNO0FBQzVELFlBQU1zUyxpQkFBaUIsR0FBRzFTLGNBQWMsQ0FBQ0UsR0FBZixDQUFtQixzQkFBbkIsQ0FBMUI7QUFDQSxVQUFJLENBQUN3UyxpQkFBRCxJQUFzQixDQUFDQSxpQkFBaUIsQ0FBQ3BGLFNBQWxCLENBQTRCdUUsWUFBdkQsRUFBcUUsT0FGVCxDQUc1RDs7QUFDQWEsdUJBQWlCLENBQUNwRixTQUFsQixDQUE0QnVFLFlBQTVCLEdBQTJDLFNBQVNULE1BQVQsQ0FBZ0JwWSxRQUFoQixFQUEwQjtBQUNuRTtBQUNBLFlBQUlBLFFBQVEsQ0FBQ2hCLFVBQVQsQ0FBb0JwQixLQUF4QixFQUErQjtBQUM3QixjQUFJLEtBQUtnQyxJQUFMLENBQVV2QyxNQUFWLEtBQXFCLElBQXpCLEVBQStCO0FBQzdCLGlCQUFLdUMsSUFBTCxDQUFVK1ksYUFBVixHQUEwQixLQUFLL1ksSUFBTCxDQUFVK1ksYUFBVixJQUEyQixFQUFyRDs7QUFDQSxpQkFBSy9ZLElBQUwsQ0FBVStZLGFBQVYsQ0FBd0I1SyxJQUF4QixDQUE2QixJQUE3QjtBQUNELFdBSEQsTUFHTztBQUNMNVEsWUFBQSxpSEFBb0IsQ0FDbEIsSUFEa0IsRUFFbEIsS0FBS3lDLElBQUwsQ0FBVXZDLE1BQVYsSUFBb0I7QUFBRUssMkJBQWEsRUFBRSxTQUFqQjtBQUE0Qkwsb0JBQU0sRUFBRTtBQUFwQyxhQUZGLEVBR2xCMkMsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQnBCLEtBQXBCLElBQTZCLFNBSFgsQ0FBcEI7QUFJRDtBQUNGOztBQUNELGFBQUtNLFlBQUw7O0FBQ0EsWUFBSSxLQUFLeWIsYUFBVCxFQUF3QjtBQUN0QjtBQUNBLGVBQUtBLGFBQUwsQ0FBbUIzWixRQUFuQjtBQUNEO0FBQ0YsT0FsQkQ7QUFtQkQsS0F2QkQ7QUF3QkQsR0F0ZGtDOztBQXdkbkM0WixtQkFBaUIsR0FBRztBQUNsQjVTLGtCQUFjLENBQUNHLFdBQWYsQ0FBMkIsYUFBM0IsRUFBMENDLElBQTFDLENBQStDLE1BQU07QUFDbkQsWUFBTXlTLFVBQVUsR0FBRzdTLGNBQWMsQ0FBQ0UsR0FBZixDQUFtQixhQUFuQixDQUFuQjtBQUNBLFVBQUksQ0FBQzJTLFVBQUwsRUFBaUI7O0FBQ2pCLFVBQUlBLFVBQVUsQ0FBQ3ZGLFNBQVgsQ0FBcUJ3RixxQkFBekIsRUFBZ0Q7QUFDOUMsY0FBTUMsNEJBQTRCLEdBQUdGLFVBQVUsQ0FBQ3ZGLFNBQVgsQ0FBcUJ3RixxQkFBMUQsQ0FEOEMsQ0FFOUM7O0FBQ0FELGtCQUFVLENBQUN2RixTQUFYLENBQXFCd0YscUJBQXJCLEdBQTZDLFNBQVNFLDBCQUFULENBQW9DaGEsUUFBcEMsRUFBOEM7QUFDekYsY0FBSUEsUUFBUSxDQUFDaEIsVUFBVCxDQUFvQnNULFVBQXBCLElBQWtDLENBQUN0UyxRQUFRLENBQUNoQixVQUFULENBQW9CeUQsY0FBM0QsRUFBMkU7QUFDekUsaUJBQUs2RyxLQUFMLENBQVcyUSxlQUFYLEdBQTZCLEVBQTdCO0FBQ0FwYyxrQkFBTSxDQUFDbUssTUFBUCxDQUFjLEtBQUt3RCxDQUFMLENBQU9uSixJQUFQLENBQVlpSCxLQUExQixFQUFpQztBQUMvQjRRLG1CQUFLLEVBQUVsYSxRQUFRLENBQUNoQixVQUFULENBQW9Cc1QsVUFESTtBQUUvQm5NLG9CQUFNLEVBQUU7QUFGdUIsYUFBakM7QUFJRCxXQU5ELE1BTU87QUFDTDRULHdDQUE0QixDQUFDdkYsSUFBN0IsQ0FBa0MsSUFBbEMsRUFBd0N4VSxRQUF4QztBQUNEO0FBQ0YsU0FWRDtBQVdELE9BZEQsTUFjTyxJQUFJNlosVUFBVSxDQUFDdkYsU0FBWCxDQUFxQjZGLE9BQXpCLEVBQWtDO0FBQ3ZDLGNBQU1DLGVBQWUsR0FBR1AsVUFBVSxDQUFDdkYsU0FBWCxDQUFxQjZGLE9BQTdDLENBRHVDLENBRXZDOztBQUNBTixrQkFBVSxDQUFDdkYsU0FBWCxDQUFxQjZGLE9BQXJCLEdBQStCLFNBQVNFLGFBQVQsQ0FBdUJDLFlBQXZCLEVBQXFDO0FBQ2xFLGNBQUksQ0FBQ0EsWUFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQWpCLENBQUwsRUFBbUM7QUFDbkMsZ0JBQU07QUFBRXZhO0FBQUYsY0FBZSxJQUFyQjs7QUFDQSxjQUFJQSxRQUFRLENBQUNoQixVQUFULENBQW9Cc1QsVUFBcEIsSUFBa0MsQ0FBQ3RTLFFBQVEsQ0FBQ2hCLFVBQVQsQ0FBb0J5RCxjQUEzRCxFQUEyRTtBQUN6RSxpQkFBSzZHLEtBQUwsQ0FBVzJRLGVBQVgsR0FBNkIsRUFBN0I7QUFDQXBjLGtCQUFNLENBQUNtSyxNQUFQLENBQWMsS0FBS3dTLEtBQUwsQ0FBV2xSLEtBQXpCLEVBQWdDO0FBQzlCNFEsbUJBQUssRUFBRWxhLFFBQVEsQ0FBQ2hCLFVBQVQsQ0FBb0JzVCxVQURHO0FBRTlCbk0sb0JBQU0sRUFBRTtBQUZzQixhQUFoQztBQUlELFdBTkQsTUFNTztBQUNMaVUsMkJBQWUsQ0FBQzVGLElBQWhCLENBQXFCLElBQXJCLEVBQTJCOEYsWUFBM0I7QUFDRDtBQUNGLFNBWkQ7QUFhRDtBQUNGLEtBbENEO0FBbUNELEdBNWZrQzs7QUE4Zm5DRyxxQkFBbUIsR0FBRztBQUNwQnpULGtCQUFjLENBQUNHLFdBQWYsQ0FBMkIsZUFBM0IsRUFBNENDLElBQTVDLENBQWlELE1BQU07QUFDckQsWUFBTXNULFlBQVksR0FBRzFULGNBQWMsQ0FBQ0UsR0FBZixDQUFtQixlQUFuQixDQUFyQjtBQUNBLFVBQUksQ0FBQ3dULFlBQUQsSUFBaUIsQ0FBQ0EsWUFBWSxDQUFDcEcsU0FBYixDQUF1QnFHLG1CQUF6QyxJQUNELENBQUN4YyxNQUFNLENBQUN1RCxpQkFEWCxFQUM4QixPQUh1QixDQUlyRDs7QUFDQWdaLGtCQUFZLENBQUNwRyxTQUFiLENBQXVCcUcsbUJBQXZCLEdBQ0UsU0FBU0MseUJBQVQsQ0FBbUNDLFlBQW5DLEVBQWlEO0FBQy9DLGVBQU9oZCxNQUFNLENBQUNDLElBQVAsQ0FBWUssTUFBTSxDQUFDdUQsaUJBQVAsQ0FBeUJjLHNCQUFyQyxFQUE2RDJQLE1BQTdELENBQ0wwSSxZQUFZLEdBQUdBLFlBQVksQ0FBQ0MsS0FBYixDQUFtQixHQUFuQixDQUFILEdBQTZCLEVBRHBDLENBQVA7QUFFRCxPQUpIO0FBS0QsS0FWRDtBQVdELEdBMWdCa0M7O0FBNGdCbkNDLHdCQUFzQixHQUFHO0FBQ3ZCLFFBQUksQ0FBQzVjLE1BQU0sQ0FBQ21ZLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxVQUF6QixDQUFvQyxTQUFwQyxDQUFMLEVBQXFEO0FBQ3JEeFAsa0JBQWMsQ0FBQ0csV0FBZixDQUEyQixtQkFBM0IsRUFBZ0RDLElBQWhELENBQXFELE1BQU07QUFDekQsWUFBTTRULGVBQWUsR0FBR2hVLGNBQWMsQ0FBQ0UsR0FBZixDQUFtQixtQkFBbkIsQ0FBeEI7O0FBQ0EsVUFBSSxDQUFDOFQsZUFBTCxFQUFzQjtBQUNwQjtBQUNBN2MsY0FBTSxDQUFDdUwsVUFBUCxDQUFrQnZMLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0IrVSxzQkFBbEMsRUFBMEQsR0FBMUQ7QUFDQTtBQUNEOztBQUNELFVBQUk1YyxNQUFNLENBQUM2SCxRQUFQLENBQWdCaVYsdUJBQXBCLEVBQTZDO0FBQzdDOWMsWUFBTSxDQUFDNkgsUUFBUCxDQUFnQmlWLHVCQUFoQixHQUEwQyxJQUExQztBQUVBLFVBQUksQ0FBQzljLE1BQU0sQ0FBQ3VELGlCQUFaLEVBQStCOztBQUMvQixVQUFJc1osZUFBZSxDQUFDMUcsU0FBaEIsQ0FBMEI0Ryx1QkFBOUIsRUFBdUQ7QUFDckQ7QUFDQUYsdUJBQWUsQ0FBQzFHLFNBQWhCLENBQTBCNEcsdUJBQTFCLEdBQ0UsU0FBU0MsNEJBQVQsQ0FBc0NuZCxHQUF0QyxFQUEyQ2lHLEtBQTNDLEVBQWtEbVgsU0FBbEQsRUFBNkQ7QUFDM0QsZ0JBQU1DLE1BQU0sR0FBR2xkLE1BQU0sQ0FBQ3VELGlCQUFQLENBQXlCYyxzQkFBekIsQ0FBZ0R4RSxHQUFoRCxLQUNSO0FBQUU0RSxnQkFBSSxFQUFFekUsTUFBTSxDQUFDdUQsaUJBQVAsQ0FBeUJNO0FBQWpDLFdBRFA7QUFFQSxpQkFBTyxLQUFLc1osZUFBTCxDQUFxQnRkLEdBQXJCLEVBQTBCcWQsTUFBTSxDQUFDelksSUFBUCxLQUFnQixNQUFoQixHQUF5QjJZLElBQUksQ0FBQ0MsU0FBTCxDQUFldlgsS0FBZixDQUF6QixHQUFpREEsS0FBM0UsRUFBa0ZtWCxTQUFsRixFQUE2RkMsTUFBN0YsQ0FBUDtBQUNELFNBTEg7QUFNRDs7QUFDRCxVQUFJTCxlQUFlLENBQUMxRyxTQUFoQixDQUEwQm1ILHVCQUE5QixFQUF1RDtBQUNyRDtBQUNBVCx1QkFBZSxDQUFDMUcsU0FBaEIsQ0FBMEJtSCx1QkFBMUIsR0FDRSxTQUFTQyw2QkFBVCxDQUNFQyxlQURGLEVBQ21CQyxnQkFEbkIsRUFDcUNDLGtCQURyQyxFQUN5RDVILGFBRHpELEVBQ3dFO0FBQ3RFLGdCQUFNNkgsU0FBUyxHQUNYamUsTUFBTSxDQUFDQyxJQUFQLENBQVlLLE1BQU0sQ0FBQ3VELGlCQUFQLENBQXlCYyxzQkFBckMsRUFDRzJELE1BREgsQ0FDV25JLEdBQUQsSUFBUztBQUNmLGtCQUFNb1osSUFBSSxHQUFHalosTUFBTSxDQUFDdUQsaUJBQVAsQ0FBeUJjLHNCQUF6QixDQUFnRHhFLEdBQWhELENBQWI7QUFDQSxtQkFBT29aLElBQUksS0FBSyxDQUFDQSxJQUFJLENBQUNyVSxPQUFOLElBQWlCLENBQUMsS0FBS25DLE1BQXZCLElBQ0V3VyxJQUFJLENBQUNyVSxPQUFMLENBQWExQixRQUFiLENBQXNCLGlIQUFrQixDQUFDLEtBQUtULE1BQU4sQ0FBeEMsQ0FEUCxDQUFYO0FBRUQsV0FMSCxFQU1HdUYsTUFOSCxDQU1VLEtBQUs0VixvQkFBTCxDQUEwQkosZUFBMUIsQ0FOVixFQU9HeFYsTUFQSCxDQU9VLEtBQUs0VixvQkFBTCxDQUEwQkgsZ0JBQTFCLENBUFYsRUFRR3pWLE1BUkgsQ0FRVSxLQUFLNFYsb0JBQUwsQ0FBMEJGLGtCQUExQixDQVJWLEVBU0cxVixNQVRILENBU1UsS0FBSzRWLG9CQUFMLENBQTBCOUgsYUFBMUIsQ0FUVixDQURKO0FBV0EsaUJBQU82SCxTQUFTLENBQUNFLElBQVYsR0FBaUI3SixNQUFqQixDQUF3QixPQUF4QixDQUFQO0FBQ0QsU0FmSDtBQWdCRDtBQUNGLEtBdkNEO0FBd0NELEdBdGpCa0M7O0FBd2pCbkM4SixtQkFBaUIsR0FBRztBQUNsQixRQUFJOWQsTUFBTSxDQUFDNkgsUUFBUCxDQUFnQmtXLGFBQXBCLEVBQW1DO0FBQ25DL2QsVUFBTSxDQUFDNkgsUUFBUCxDQUFnQmtXLGFBQWhCLEdBQWdDLElBQWhDO0FBQ0EvZCxVQUFNLENBQUM2SCxRQUFQLENBQWdCOFMsbUJBQWhCO0FBQ0EzYSxVQUFNLENBQUM2SCxRQUFQLENBQWdCc1MsaUJBQWhCO0FBQ0FuYSxVQUFNLENBQUM2SCxRQUFQLENBQWdCeVQsd0JBQWhCO0FBQ0F0YixVQUFNLENBQUM2SCxRQUFQLENBQWdCNFQsaUJBQWhCO0FBQ0F6YixVQUFNLENBQUM2SCxRQUFQLENBQWdCeVUsbUJBQWhCO0FBQ0F0YyxVQUFNLENBQUM2SCxRQUFQLENBQWdCa1QsaUJBQWhCLENBQWtDLGtCQUFsQztBQUNBL2EsVUFBTSxDQUFDNkgsUUFBUCxDQUFnQmtULGlCQUFoQixDQUFrQyxtQkFBbEM7QUFDRCxHQWxrQmtDOztBQW9rQm5DaUQsTUFBSSxHQUFHO0FBQ0wsUUFBSWhlLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0JvVyxRQUFwQixFQUE4QjtBQUM5QmplLFVBQU0sQ0FBQzZILFFBQVAsQ0FBZ0JpVyxpQkFBaEI7QUFDQSxVQUFNL0csSUFBSSxHQUFHL1csTUFBTSxDQUFDNkgsUUFBUCxDQUFnQjJNLGFBQWhCLENBQThCcFUsUUFBOUIsRUFBd0MsZ0JBQXhDLENBQWI7O0FBQ0EsUUFBSSxDQUFDMlcsSUFBSSxDQUFDdFYsSUFBTixJQUFjLENBQUNzVixJQUFJLENBQUN0VixJQUFMLENBQVVzRyxNQUE3QixFQUFxQztBQUNuQztBQUNBL0gsWUFBTSxDQUFDdUwsVUFBUCxDQUFrQnZMLE1BQU0sQ0FBQzZILFFBQVAsQ0FBZ0JtVyxJQUFsQyxFQUF3QyxJQUF4QztBQUNBO0FBQ0Q7O0FBQ0RoZSxVQUFNLENBQUM2SCxRQUFQLENBQWdCb1csUUFBaEIsR0FBMkIsSUFBM0I7QUFFQWplLFVBQU0sQ0FBQzZILFFBQVAsQ0FBZ0JrUSxhQUFoQjtBQUVBL1gsVUFBTSxDQUFDNkgsUUFBUCxDQUFnQnFXLFFBQWhCO0FBQ0FsZSxVQUFNLENBQUNpUyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNENqUyxNQUFNLENBQUN1TCxVQUFQLENBQWtCd0csSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIvUixNQUFNLENBQUM2SCxRQUFQLENBQWdCcVcsUUFBN0MsRUFBdUQsR0FBdkQsQ0FBNUM7QUFDQTs7QUFDQXpPLFdBQU8sQ0FBQzBPLEdBQVIsQ0FBYSxtQkFBa0IsbURBQVEsRUFBdkM7QUFDQTs7QUFDQSxRQUFJLENBQUNuZSxNQUFNLENBQUNvZSxjQUFaLEVBQTRCO0FBQzFCcGUsWUFBTSxDQUFDb2UsY0FBUCxHQUF3QixFQUF4QjtBQUNEOztBQUNEcGUsVUFBTSxDQUFDb2UsY0FBUCxDQUFzQnhPLElBQXRCLENBQTJCO0FBQ3pCM0QsVUFBSSxFQUFFLFVBRG1CO0FBRXpCb1MsYUFBTyxFQUFFLG1EQUZnQjtBQUd6QkMsU0FBRyxFQUFFO0FBSG9CLEtBQTNCO0FBS0QsR0E5bEJrQzs7QUFnbUJuQ0osVUFBUSxHQUFHO0FBQ1RsZSxVQUFNLENBQUM2SCxRQUFQLENBQWdCK08sY0FBaEI7QUFDQTVXLFVBQU0sQ0FBQzZILFFBQVAsQ0FBZ0JxUSxpQkFBaEI7QUFDQWxZLFVBQU0sQ0FBQzZILFFBQVAsQ0FBZ0IrVSxzQkFBaEI7QUFDRCxHQXBtQmtDOztBQXNtQm5DcFEsU0FBTyxHQUFHO0FBQ1IsV0FBT3hNLE1BQU0sQ0FBQ3VlLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGdCQUE1QixLQUFpRCxFQUF4RDtBQUNELEdBeG1Ca0M7O0FBMG1CbkMvUixTQUFPLENBQUNSLElBQUQsRUFBTztBQUNaak0sVUFBTSxDQUFDdWUsWUFBUCxDQUFvQkUsT0FBcEIsQ0FBNEIsZ0JBQTVCLEVBQThDeFMsSUFBSSxJQUFJLEVBQXREO0FBQ0QsR0E1bUJrQzs7QUE4bUJuQ25FLGlCQUFlLENBQUN0QixRQUFELEVBQVcvRSxJQUFYLEVBQWlCYSxRQUFqQixFQUEyQkcsTUFBM0IsRUFBbUM1QixVQUFuQyxFQUErQ2tKLFNBQS9DLEVBQTBEakksS0FBMUQsRUFBaUU7QUFDOUUsVUFBTTRjLFlBQVksR0FBSWxZLFFBQVEsQ0FBQ3RFLE9BQVQsQ0FBaUIsUUFBakIsS0FBOEIsQ0FBL0IsR0FBb0NzRSxRQUFwQyxHQUFnRCxZQUFXQSxRQUFTLEtBQXpGOztBQUNBLFFBQUk7QUFDRjtBQUNBLFlBQU1tWSxJQUFJLEdBQUcsSUFBSUMsUUFBSixDQUNYLE1BRFcsRUFDSCxVQURHLEVBQ1MsUUFEVCxFQUNtQixZQURuQixFQUNpQyxXQURqQyxFQUM4QyxPQUQ5QyxFQUN1REYsWUFEdkQsQ0FBYjtBQUVBOztBQUNBLGFBQU9DLElBQUksQ0FBQ2xkLElBQUQsRUFBT2EsUUFBUCxFQUFpQkcsTUFBakIsRUFBeUI1QixVQUF6QixFQUFxQ2tKLFNBQXJDLEVBQWdEakksS0FBaEQsQ0FBWDtBQUNELEtBTkQsQ0FNRSxPQUFPb0osQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxVQUFLQSxDQUFDLFlBQVkyVCxXQUFkLElBQThCM1QsQ0FBQyxZQUFZNFQsY0FBL0MsRUFBK0Q7QUFDN0RyUCxlQUFPLENBQUNDLElBQVIsQ0FBYyxHQUFFeEUsQ0FBQyxDQUFDZSxJQUFLLEtBQUlmLENBQUMsQ0FBQzZULE9BQVEsZ0JBQWVMLFlBQWEsRUFBakU7QUFDQSxlQUFPLElBQVA7QUFDRDtBQUNEOzs7QUFDQSxZQUFNeFQsQ0FBTjtBQUNEO0FBQ0Y7O0FBL25Ca0MsQ0FBckM7QUFpb0JBbEwsTUFBTSxDQUFDNkgsUUFBUCxDQUFnQm1XLElBQWhCLEc7Ozs7Ozs7Ozs7Ozs7QUN6b0JBLCtEQUFlLFVBQWYsRSIsImZpbGUiOiJzY3JpcHRzLWRiZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9zY3JpcHRzLmpzXCIpO1xuIiwiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9IFwiaGFzczpib29rbWFya1wiO1xuXG4vKiogUGFuZWwgdG8gc2hvdyB3aGVuIG5vIHBhbmVsIGlzIHBpY2tlZC4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBTkVMID0gXCJsb3ZlbGFjZVwiO1xuXG4vKiogRG9tYWlucyB0aGF0IGhhdmUgYSBzdGF0ZSBjYXJkLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9DQVJEID0gW1xuICBcImNsaW1hdGVcIixcbiAgXCJjb3ZlclwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJsb2NrXCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwic2NlbmVcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJ0aW1lclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHdpdGggc2VwYXJhdGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfTU9SRV9JTkZPID0gW1xuICBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG4gIFwiY2FtZXJhXCIsXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImNvdmVyXCIsXG4gIFwiZmFuXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwiaW5wdXRfZGF0ZXRpbWVcIixcbiAgXCJsaWdodFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzdW5cIixcbiAgXCJ1cGRhdGVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VhdGhlclwiLFxuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG93IG5vIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19ISURFX01PUkVfSU5GTyA9IFtcbiAgXCJpbnB1dF9udW1iZXJcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwic2NlbmVcIixcbiAgXCJ3ZWJsaW5rXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3VsZCBoYXZlIHRoZSBoaXN0b3J5IGhpZGRlbiBpbiB0aGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZID0gW1xuICBcImNhbWVyYVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJzY2VuZVwiLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcImNsb3NlZFwiLCBcImxvY2tlZFwiLCBcIm9mZlwiXTtcblxuLyoqIERvbWFpbnMgd2hlcmUgd2UgYWxsb3cgdG9nZ2xlIGluIExvdmVsYWNlLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfVE9HR0xFID0gbmV3IFNldChbXG4gIFwiZmFuXCIsXG4gIFwiaW5wdXRfYm9vbGVhblwiLFxuICBcImxpZ2h0XCIsXG4gIFwic3dpdGNoXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG5dKTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9IFwiwrBDXCI7XG5leHBvcnQgY29uc3QgVU5JVF9GID0gXCLCsEZcIjtcblxuLyoqIEVudGl0eSBJRCBvZiB0aGUgZGVmYXVsdCB2aWV3LiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSBcImdyb3VwLmRlZmF1bHRfdmlld1wiO1xuIiwiLyoqXG4gKiBBcHBseSBhIHRoZW1lIHRvIGFuIGVsZW1lbnQgYnkgc2V0dGluZyB0aGUgQ1NTIHZhcmlhYmxlcyBvbiBpdC5cbiAqXG4gKiBlbGVtZW50OiBFbGVtZW50IHRvIGFwcGx5IHRoZW1lIG9uLlxuICogdGhlbWVzOiBIQVNTIFRoZW1lIGluZm9ybWF0aW9uXG4gKiBsb2NhbFRoZW1lOiBzZWxlY3RlZCB0aGVtZS5cbiAqIHVwZGF0ZU1ldGE6IGJvb2xlYW4gaWYgd2Ugc2hvdWxkIHVwZGF0ZSB0aGUgdGhlbWUtY29sb3IgbWV0YSBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgZWxlbWVudCxcbiAgdGhlbWVzLFxuICBsb2NhbFRoZW1lLFxuICB1cGRhdGVNZXRhID0gZmFsc2Vcbikge1xuICBpZiAoIWVsZW1lbnQuX3RoZW1lcykge1xuICAgIGVsZW1lbnQuX3RoZW1lcyA9IHt9O1xuICB9XG4gIGxldCB0aGVtZU5hbWUgPSB0aGVtZXMuZGVmYXVsdF90aGVtZTtcbiAgaWYgKGxvY2FsVGhlbWUgPT09IFwiZGVmYXVsdFwiIHx8IChsb2NhbFRoZW1lICYmIHRoZW1lcy50aGVtZXNbbG9jYWxUaGVtZV0pKSB7XG4gICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgfVxuICBjb25zdCBzdHlsZXMgPSB7IC4uLmVsZW1lbnQuX3RoZW1lcyB9O1xuICBpZiAodGhlbWVOYW1lICE9PSBcImRlZmF1bHRcIikge1xuICAgIGNvbnN0IHRoZW1lID0gdGhlbWVzLnRoZW1lc1t0aGVtZU5hbWVdO1xuICAgIE9iamVjdC5rZXlzKHRoZW1lKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHByZWZpeGVkS2V5ID0gXCItLVwiICsga2V5O1xuICAgICAgZWxlbWVudC5fdGhlbWVzW3ByZWZpeGVkS2V5XSA9IFwiXCI7XG4gICAgICBzdHlsZXNbcHJlZml4ZWRLZXldID0gdGhlbWVba2V5XTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZWxlbWVudC51cGRhdGVTdHlsZXMpIHtcbiAgICBlbGVtZW50LnVwZGF0ZVN0eWxlcyhzdHlsZXMpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5TaGFkeUNTUykge1xuICAgIC8vIGltcGxlbWVudCB1cGRhdGVTdHlsZXMoKSBtZXRob2Qgb2YgUG9sZW1lciBlbGVtZW50c1xuICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZVN1YnRyZWUoLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChlbGVtZW50KSwgc3R5bGVzKTtcbiAgfVxuXG4gIGlmICghdXBkYXRlTWV0YSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPXRoZW1lLWNvbG9yXVwiKTtcbiAgaWYgKG1ldGEpIHtcbiAgICBpZiAoIW1ldGEuaGFzQXR0cmlidXRlKFwiZGVmYXVsdC1jb250ZW50XCIpKSB7XG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZShcImRlZmF1bHQtY29udGVudFwiLCBtZXRhLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIikhKTtcbiAgICB9XG4gICAgY29uc3QgdGhlbWVDb2xvciA9XG4gICAgICBzdHlsZXNbXCItLXByaW1hcnktY29sb3JcIl0gfHwgbWV0YS5nZXRBdHRyaWJ1dGUoXCJkZWZhdWx0LWNvbnRlbnRcIik7XG4gICAgbWV0YS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsIHRoZW1lQ29sb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFVwZGF0ZSByb290J3MgY2hpbGQgZWxlbWVudCB0byBiZSBuZXdFbGVtZW50VGFnIHJlcGxhY2luZyBhbm90aGVyIGV4aXN0aW5nIGNoaWxkIGlmIGFueS5cbiAqIENvcHkgYXR0cmlidXRlcyBpbnRvIHRoZSBjaGlsZCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljQ29udGVudFVwZGF0ZXIocm9vdCwgbmV3RWxlbWVudFRhZywgYXR0cmlidXRlcykge1xuICBjb25zdCByb290RWwgPSByb290O1xuICBsZXQgY3VzdG9tRWw7XG5cbiAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQgJiYgcm9vdEVsLmxhc3RDaGlsZC50YWdOYW1lID09PSBuZXdFbGVtZW50VGFnKSB7XG4gICAgY3VzdG9tRWwgPSByb290RWwubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIGlmIChyb290RWwubGFzdENoaWxkKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQocm9vdEVsLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0aW5nIGFuIGVsZW1lbnQgd2l0aCB1cHBlciBjYXNlIHdvcmtzIGZpbmUgaW4gQ2hyb21lLCBidXQgaW4gRkYgaXQgZG9lc24ndCBpbW1lZGlhdGVseVxuICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICBjdXN0b21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudFRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKSB7XG4gICAgY3VzdG9tRWwuc2V0UHJvcGVydGllcyhhdHRyaWJ1dGVzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBjdXN0b20gZWxlbWVudCBkZWZpbml0aW9uIHdhc24ndCBsb2FkZWQgeWV0IC0gc2V0UHJvcGVydGllcyB3b3VsZCBiZVxuICAgIC8vIG1pc3NpbmcsIGJ1dCBubyBoYXJtIGluIHNldHRpbmcgYXR0cmlidXRlcyBvbmUtYnktb25lIHRoZW4uXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjdXN0b21FbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoY3VzdG9tRWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZURvbWFpbihoYXNzOiBIb21lQXNzaXN0YW50LCBkb21haW46IHN0cmluZykge1xuICBjb25zdCBzZXJ2aWNlcyA9IGhhc3Muc2VydmljZXNbZG9tYWluXTtcbiAgaWYgKCFzZXJ2aWNlcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChkb21haW4gPT09IFwibG9ja1wiKSB7XG4gICAgcmV0dXJuIFwibG9ja1wiIGluIHNlcnZpY2VzO1xuICB9XG4gIGlmIChkb21haW4gPT09IFwiY292ZXJcIikge1xuICAgIHJldHVybiBcIm9wZW5fY292ZXJcIiBpbiBzZXJ2aWNlcztcbiAgfVxuICByZXR1cm4gXCJ0dXJuX29uXCIgaW4gc2VydmljZXM7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNhblRvZ2dsZURvbWFpbiBmcm9tIFwiLi9jYW5fdG9nZ2xlX2RvbWFpblwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4vc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVTdGF0ZShcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHlcbikge1xuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICBpZiAoZG9tYWluID09PSBcImdyb3VwXCIpIHtcbiAgICByZXR1cm4gc3RhdGVPYmouc3RhdGUgPT09IFwib25cIiB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJvZmZcIjtcbiAgfVxuICBpZiAoZG9tYWluID09PSBcImNsaW1hdGVcIikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQwOTYpO1xuICB9XG5cbiAgcmV0dXJuIGNhblRvZ2dsZURvbWFpbihoYXNzLCBkb21haW4pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZURvbWFpbihlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cigwLCBlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqOiBIYXNzRW50aXR5KSB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXRpZXMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBHcm91cEVudGl0eSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHcm91cEVudGl0aWVzKFxuICBlbnRpdGllczogSGFzc0VudGl0aWVzLFxuICBncm91cDogR3JvdXBFbnRpdHlcbikge1xuICBjb25zdCByZXN1bHQgPSB7fTtcblxuICBncm91cC5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHJlc3VsdFtlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXRpZXMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IGdldEdyb3VwRW50aXRpZXMgZnJvbSBcIi4vZ2V0X2dyb3VwX2VudGl0aWVzXCI7XG5pbXBvcnQgeyBHcm91cEVudGl0eSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGVudGl0aWVzIHRoYXQgdGhlIHZpZXcgd2lsbCBzaG93XG4vLyBpbmNsdWRpbmcgZW1iZWRkZWQgZ3JvdXBzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld0VudGl0aWVzKFxuICBlbnRpdGllczogSGFzc0VudGl0aWVzLFxuICB2aWV3OiBHcm91cEVudGl0eVxuKTogSGFzc0VudGl0aWVzIHtcbiAgY29uc3Qgdmlld0VudGl0aWVzID0ge307XG5cbiAgdmlldy5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkgJiYgIWVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgdmlld0VudGl0aWVzW2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuXG4gICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gXCJncm91cFwiKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRW50aXRpZXMgPSBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBlbnRpdHkgYXMgR3JvdXBFbnRpdHkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwRW50aXRpZXMpLmZvckVhY2goKGdyRW50aXR5SWQpID0+IHtcbiAgICAgICAgICBjb25zdCBnckVudGl0eSA9IGdyb3VwRW50aXRpZXNbZ3JFbnRpdHlJZF07XG5cbiAgICAgICAgICBpZiAoIWdyRW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICAgICAgICB2aWV3RW50aXRpZXNbZ3JFbnRpdHlJZF0gPSBnckVudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdFbnRpdGllcztcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY2FuVG9nZ2xlU3RhdGUgZnJvbSBcIi4vY2FuX3RvZ2dsZV9zdGF0ZVwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgRE9NQUlOU19XSVRIX0NBUkQgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVDYXJkVHlwZShcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHlcbikge1xuICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwidW5hdmFpbGFibGVcIikge1xuICAgIHJldHVybiBcImRpc3BsYXlcIjtcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9DQVJELmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICByZXR1cm4gZG9tYWluO1xuICB9XG4gIGlmIChcbiAgICBjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikgJiZcbiAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2wgIT09IFwiaGlkZGVuXCJcbiAgKSB7XG4gICAgcmV0dXJuIFwidG9nZ2xlXCI7XG4gIH1cbiAgcmV0dXJuIFwiZGlzcGxheVwiO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzRmVhdHVyZSA9IChcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGZlYXR1cmU6IG51bWJlclxuKTogYm9vbGVhbiA9PiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gIHJldHVybiAoc3RhdGVPYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMhICYgZmVhdHVyZSkgIT09IDA7XG59O1xuIiwiY29uc3QgaGFzc0F0dHJpYnV0ZVV0aWwgPSB7fTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyA9IHtcbiAgYmluYXJ5X3NlbnNvcjogW1xuICAgIFwiYmF0dGVyeVwiLFxuICAgIFwiY29sZFwiLFxuICAgIFwiY29ubmVjdGl2aXR5XCIsXG4gICAgXCJkb29yXCIsXG4gICAgXCJnYXJhZ2VfZG9vclwiLFxuICAgIFwiZ2FzXCIsXG4gICAgXCJoZWF0XCIsXG4gICAgXCJsaWdodFwiLFxuICAgIFwibG9ja1wiLFxuICAgIFwibW9pc3R1cmVcIixcbiAgICBcIm1vdGlvblwiLFxuICAgIFwibW92aW5nXCIsXG4gICAgXCJvY2N1cGFuY3lcIixcbiAgICBcIm9wZW5pbmdcIixcbiAgICBcInBsdWdcIixcbiAgICBcInBvd2VyXCIsXG4gICAgXCJwcmVzZW5jZVwiLFxuICAgIFwicHJvYmxlbVwiLFxuICAgIFwic2FmZXR5XCIsXG4gICAgXCJzbW9rZVwiLFxuICAgIFwic291bmRcIixcbiAgICBcInZpYnJhdGlvblwiLFxuICAgIFwid2luZG93XCIsXG4gIF0sXG4gIGNvdmVyOiBbXG4gICAgXCJhd25pbmdcIixcbiAgICBcImJsaW5kXCIsXG4gICAgXCJjdXJ0YWluXCIsXG4gICAgXCJkYW1wZXJcIixcbiAgICBcImRvb3JcIixcbiAgICBcImdhcmFnZVwiLFxuICAgIFwic2hhZGVcIixcbiAgICBcInNodXR0ZXJcIixcbiAgICBcIndpbmRvd1wiLFxuICBdLFxuICBzZW5zb3I6IFtcbiAgICBcImJhdHRlcnlcIixcbiAgICBcImh1bWlkaXR5XCIsXG4gICAgXCJpbGx1bWluYW5jZVwiLFxuICAgIFwidGVtcGVyYXR1cmVcIixcbiAgICBcInByZXNzdXJlXCIsXG4gICAgXCJwb3dlclwiLFxuICAgIFwic2lnbmFsX3N0cmVuZ3RoXCIsXG4gIF0sXG4gIHN3aXRjaDogW1wic3dpdGNoXCIsIFwib3V0bGV0XCJdLFxufTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gXCJqc29uXCI7XG5oYXNzQXR0cmlidXRlVXRpbC5BRERfVFlQRSA9IFwia2V5LXZhbHVlXCI7XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlRZUEVfVE9fVEFHID0ge1xuICBzdHJpbmc6IFwiaGEtY3VzdG9taXplLXN0cmluZ1wiLFxuICBqc29uOiBcImhhLWN1c3RvbWl6ZS1zdHJpbmdcIixcbiAgaWNvbjogXCJoYS1jdXN0b21pemUtaWNvblwiLFxuICBib29sZWFuOiBcImhhLWN1c3RvbWl6ZS1ib29sZWFuXCIsXG4gIGFycmF5OiBcImhhLWN1c3RvbWl6ZS1hcnJheVwiLFxuICBcImtleS12YWx1ZVwiOiBcImhhLWN1c3RvbWl6ZS1rZXktdmFsdWVcIixcbn07XG5cbi8vIEF0dHJpYnV0ZXMgaGVyZSBzZXJ2ZSBkdWFsIHB1cnBvc2U6XG4vLyAxKSBBbnkga2V5IG9mIHRoaXMgb2JqZWN0IHdvbid0IGJlIHNob3duIGluIG1vcmUtaW5mbyB3aW5kb3cuXG4vLyAyKSBBbnkga2V5IHdoaWNoIGhhcyB2YWx1ZSBvdGhlciB0aGFuIHVuZGVmaW5lZCB3aWxsIGFwcGVhciBpbiBjdXN0b21pemF0aW9uXG4vLyAgICBjb25maWcgYWNjb3JkaW5nIHRvIGl0cyB2YWx1ZS5cbmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPSBoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTIHx8IHtcbiAgZW50aXR5X3BpY3R1cmU6IHVuZGVmaW5lZCxcbiAgZnJpZW5kbHlfbmFtZTogeyB0eXBlOiBcInN0cmluZ1wiLCBkZXNjcmlwdGlvbjogXCJOYW1lXCIgfSxcbiAgaWNvbjogeyB0eXBlOiBcImljb25cIiB9LFxuICBlbXVsYXRlZF9odWU6IHtcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICBkb21haW5zOiBbXCJlbXVsYXRlZF9odWVcIl0sXG4gIH0sXG4gIGVtdWxhdGVkX2h1ZV9uYW1lOiB7XG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICBkb21haW5zOiBbXCJlbXVsYXRlZF9odWVcIl0sXG4gIH0sXG4gIGhhYXNrYV9oaWRkZW46IHVuZGVmaW5lZCxcbiAgaGFhc2thX25hbWU6IHVuZGVmaW5lZCxcbiAgaG9tZWJyaWRnZV9oaWRkZW46IHsgdHlwZTogXCJib29sZWFuXCIgfSxcbiAgaG9tZWJyaWRnZV9uYW1lOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgc3VwcG9ydGVkX2ZlYXR1cmVzOiB1bmRlZmluZWQsXG4gIGF0dHJpYnV0aW9uOiB1bmRlZmluZWQsXG4gIGN1c3RvbV91aV9tb3JlX2luZm86IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBjdXN0b21fdWlfc3RhdGVfY2FyZDogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIGRldmljZV9jbGFzczoge1xuICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICBvcHRpb25zOiBoYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRldmljZSBjbGFzc1wiLFxuICAgIGRvbWFpbnM6IFtcImJpbmFyeV9zZW5zb3JcIiwgXCJjb3ZlclwiLCBcInNlbnNvclwiLCBcInN3aXRjaFwiXSxcbiAgfSxcbiAgaGlkZGVuOiB7IHR5cGU6IFwiYm9vbGVhblwiLCBkZXNjcmlwdGlvbjogXCJIaWRlIGZyb20gVUlcIiB9LFxuICBhc3N1bWVkX3N0YXRlOiB7XG4gICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgZG9tYWluczogW1xuICAgICAgXCJzd2l0Y2hcIixcbiAgICAgIFwibGlnaHRcIixcbiAgICAgIFwiY292ZXJcIixcbiAgICAgIFwiY2xpbWF0ZVwiLFxuICAgICAgXCJmYW5cIixcbiAgICAgIFwiZ3JvdXBcIixcbiAgICAgIFwid2F0ZXJfaGVhdGVyXCIsXG4gICAgXSxcbiAgfSxcbiAgaW5pdGlhbF9zdGF0ZToge1xuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgZG9tYWluczogW1wiYXV0b21hdGlvblwiXSxcbiAgfSxcbiAgdW5pdF9vZl9tZWFzdXJlbWVudDogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYXNzQXR0cmlidXRlVXRpbDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbndpbmRvdy5KU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gZnVuY3Rpb24ocHJvcCkgeyByZXR1cm4gcHJvcDsgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc3RhdGljIHN0cmluZyB2YWx1ZSB3aGljaCBjYW4gYmUgdXNlZCB0byBmaWx0ZXJcbiAqIHN0cmluZ3MgYnkgYXNzZXRpbmcgdGhhdCB0aGV5IGhhdmUgYmVlbiBjcmVhdGVkIHZpYSB0aGlzIGNsYXNzLiBUaGVcbiAqIGB2YWx1ZWAgcHJvcGVydHkgcmV0dXJucyB0aGUgc3RyaW5nIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cbmNsYXNzIExpdGVyYWxTdHJpbmcge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB0aGlzLnZhbHVlID0gc3RyaW5nLnRvU3RyaW5nKCk7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gTGl0ZXJhbFN0cmluZyBzdHJpbmcgdmFsdWVcbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gbGl0ZXJhbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTGl0ZXJhbFN0cmluZ30gKi8odmFsdWUpLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi1saXRlcmFsIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbExpdGVyYWwgZnVuY3Rpb246ICR7dmFsdWV9YFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBodG1sVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50IH0gKi8odmFsdWUpLmlubmVySFRNTDtcbiAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gbGl0ZXJhbFZhbHVlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tdGVtcGxhdGUgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sIGZ1bmN0aW9uOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbi8qKlxuICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyB0aGF0IGNyZWF0ZXMgYW4gSFRNTCA8dGVtcGxhdGU+IGVsZW1lbnQgZnJvbSB0aGVcbiAqIGNvbnRlbnRzIG9mIHRoZSBzdHJpbmcuXG4gKlxuICogVGhpcyBhbGxvd3MgeW91IHRvIHdyaXRlIGEgUG9seW1lciBUZW1wbGF0ZSBpbiBKYXZhU2NyaXB0LlxuICpcbiAqIFRlbXBsYXRlcyBjYW4gYmUgY29tcG9zZWQgYnkgaW50ZXJwb2xhdGluZyBgSFRNTFRlbXBsYXRlRWxlbWVudGBzIGluXG4gKiBleHByZXNzaW9ucyBpbiB0aGUgSmF2YVNjcmlwdCB0ZW1wbGF0ZSBsaXRlcmFsLiBUaGUgbmVzdGVkIHRlbXBsYXRlJ3NcbiAqIGBpbm5lckhUTUxgIGlzIGluY2x1ZGVkIGluIHRoZSBjb250YWluaW5nIHRlbXBsYXRlLiAgVGhlIG9ubHkgb3RoZXJcbiAqIHZhbHVlcyBhbGxvd2VkIGluIGV4cHJlc3Npb25zIGFyZSB0aG9zZSByZXR1cm5lZCBmcm9tIGBodG1sTGl0ZXJhbGBcbiAqIHdoaWNoIGVuc3VyZXMgb25seSBsaXRlcmFsIHZhbHVlcyBmcm9tIEpTIHNvdXJjZSBldmVyIHJlYWNoIHRoZSBIVE1MLCB0b1xuICogZ3VhcmQgYWdhaW5zdCBYU1Mgcmlza3MuXG4gKlxuICogQWxsIG90aGVyIHZhbHVlcyBhcmUgZGlzYWxsb3dlZCBpbiBleHByZXNzaW9ucyB0byBoZWxwIHByZXZlbnQgWFNTXG4gKiBhdHRhY2tzOyBob3dldmVyLCBgaHRtbExpdGVyYWxgIGNhbiBiZSB1c2VkIHRvIGNvbXBvc2Ugc3RhdGljXG4gKiBzdHJpbmcgdmFsdWVzIGludG8gdGVtcGxhdGVzLiBUaGlzIGlzIHVzZWZ1bCB0byBjb21wb3NlIHN0cmluZ3MgaW50b1xuICogcGxhY2VzIHRoYXQgZG8gbm90IGFjY2VwdCBodG1sLCBsaWtlIHRoZSBjc3MgdGV4dCBvZiBhIGBzdHlsZWBcbiAqIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+Omhvc3R7IGNvbnRlbnQ6XCIuLi5cIiB9PC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHt0aGlzLnBhcnRpYWxUZW1wbGF0ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgcGFydGlhbFRlbXBsYXRlKCkgeyByZXR1cm4gaHRtbGA8c3Bhbj5QYXJ0aWFsITwvc3Bhbj5gOyB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gQ29uc3RydWN0ZWQgSFRNTFRlbXBsYXRlRWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IGZ1bmN0aW9uIGh0bWwoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gKi8oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgaHRtbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbi8qKlxuICogQW4gaHRtbCBsaXRlcmFsIHRhZyB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYGh0bWxgIHRvIGNvbXBvc2UuXG4gKiBhIGxpdGVyYWwgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPlxuICogICAgICAgICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAqICAgICAgICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZSgpfVxuICogICAgICAgICA8L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3N0YXRpY1ZhbHVlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBzdHlsZVRlbXBsYXRlKCkge1xuICogICAgICAgIHJldHVybiBodG1sTGl0ZXJhbGAuc2hhZG93ZWQgeyBiYWNrZ3JvdW5kOiBncmF5OyB9YDtcbiAqICAgICB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshTGl0ZXJhbFN0cmluZ30gQ29uc3RydWN0ZWQgbGl0ZXJhbCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWxMaXRlcmFsID0gZnVuY3Rpb24oc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIHJldHVybiBuZXcgTGl0ZXJhbFN0cmluZyh2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGxpdGVyYWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pKTtcbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTkgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyA9XG4gICAgKCdhZG9wdGVkU3R5bGVTaGVldHMnIGluIERvY3VtZW50LnByb3RvdHlwZSkgJiZcbiAgICAoJ3JlcGxhY2UnIGluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlKTtcblxuY29uc3QgY29uc3RydWN0aW9uVG9rZW4gPSBTeW1ib2woKTtcblxuZXhwb3J0IGNsYXNzIENTU1Jlc3VsdCB7XG4gIF9zdHlsZVNoZWV0PzogQ1NTU3R5bGVTaGVldHxudWxsO1xuXG4gIHJlYWRvbmx5IGNzc1RleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjc3NUZXh0OiBzdHJpbmcsIHNhZmVUb2tlbjogc3ltYm9sKSB7XG4gICAgaWYgKHNhZmVUb2tlbiAhPT0gY29uc3RydWN0aW9uVG9rZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgdGhpcy5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgfVxuXG4gIC8vIE5vdGUsIHRoaXMgaXMgYSBnZXR0ZXIgc28gdGhhdCBpdCdzIGxhenkuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zXG4gIC8vIHN0eWxlc2hlZXRzIGFyZSBub3QgY3JlYXRlZCB1bnRpbCB0aGUgZmlyc3QgZWxlbWVudCBpbnN0YW5jZSBpcyBtYWRlLlxuICBnZXQgc3R5bGVTaGVldCgpOiBDU1NTdHlsZVNoZWV0fG51bGwge1xuICAgIGlmICh0aGlzLl9zdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE5vdGUsIGlmIGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIHN1cHBvcnRlZCB0aGVuIHdlIGFzc3VtZSBDU1NTdHlsZVNoZWV0XG4gICAgICAvLyBpcyBjb25zdHJ1Y3RhYmxlLlxuICAgICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cykge1xuICAgICAgICB0aGlzLl9zdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgdGhpcy5fc3R5bGVTaGVldC5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3R5bGVTaGVldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdHlsZVNoZWV0O1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jc3NUZXh0O1xuICB9XG59XG5cbi8qKlxuICogV3JhcCBhIHZhbHVlIGZvciBpbnRlcnBvbGF0aW9uIGluIGEgY3NzIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsLlxuICpcbiAqIFRoaXMgaXMgdW5zYWZlIGJlY2F1c2UgdW50cnVzdGVkIENTUyB0ZXh0IGNhbiBiZSB1c2VkIHRvIHBob25lIGhvbWVcbiAqIG9yIGV4ZmlsdHJhdGUgZGF0YSB0byBhbiBhdHRhY2tlciBjb250cm9sbGVkIHNpdGUuIFRha2UgY2FyZSB0byBvbmx5IHVzZVxuICogdGhpcyB3aXRoIHRydXN0ZWQgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVDU1MgPSAodmFsdWU6IHVua25vd24pID0+IHtcbiAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoU3RyaW5nKHZhbHVlKSwgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcblxuY29uc3QgdGV4dEZyb21DU1NSZXN1bHQgPSAodmFsdWU6IENTU1Jlc3VsdCkgPT4ge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBDU1NSZXN1bHQpIHtcbiAgICByZXR1cm4gdmFsdWUuY3NzVGV4dDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBWYWx1ZSBwYXNzZWQgdG8gJ2NzcycgZnVuY3Rpb24gbXVzdCBiZSBhICdjc3MnIGZ1bmN0aW9uIHJlc3VsdDogJHtcbiAgICAgICAgICAgIHZhbHVlfS4gVXNlICd1bnNhZmVDU1MnIHRvIHBhc3Mgbm9uLWxpdGVyYWwgdmFsdWVzLCBidXRcbiAgICAgICAgICAgIHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUZW1wbGF0ZSB0YWcgd2hpY2ggd2hpY2ggY2FuIGJlIHVzZWQgd2l0aCBMaXRFbGVtZW50J3MgYHN0eWxlYCBwcm9wZXJ0eSB0b1xuICogc2V0IGVsZW1lbnQgc3R5bGVzLiBGb3Igc2VjdXJpdHkgcmVhc29ucywgb25seSBsaXRlcmFsIHN0cmluZyB2YWx1ZXMgbWF5IGJlXG4gKiB1c2VkLiBUbyBpbmNvcnBvcmF0ZSBub24tbGl0ZXJhbCB2YWx1ZXMgYHVuc2FmZUNTU2AgbWF5IGJlIHVzZWQgaW5zaWRlIGFcbiAqIHRlbXBsYXRlIHN0cmluZyBwYXJ0LlxuICovXG5leHBvcnQgY29uc3QgY3NzID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IENTU1Jlc3VsdFtdKSA9PiB7XG4gIGNvbnN0IGNzc1RleHQgPSB2YWx1ZXMucmVkdWNlKFxuICAgICAgKGFjYywgdiwgaWR4KSA9PiBhY2MgKyB0ZXh0RnJvbUNTU1Jlc3VsdCh2KSArIHN0cmluZ3NbaWR4ICsgMV0sXG4gICAgICBzdHJpbmdzWzBdKTtcbiAgcmV0dXJuIG5ldyBDU1NSZXN1bHQoY3NzVGV4dCwgY29uc3RydWN0aW9uVG9rZW4pO1xufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuaW1wb3J0IHtMaXRFbGVtZW50fSBmcm9tICcuLi9saXQtZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7UHJvcGVydHlEZWNsYXJhdGlvbiwgVXBkYXRpbmdFbGVtZW50fSBmcm9tICcuL3VwZGF0aW5nLWVsZW1lbnQuanMnO1xuXG5leHBvcnQgdHlwZSBDb25zdHJ1Y3RvcjxUPiA9IHtcbiAgbmV3ICguLi5hcmdzOiB1bmtub3duW10pOiBUXG59O1xuXG4vLyBGcm9tIHRoZSBUQzM5IERlY29yYXRvcnMgcHJvcG9zYWxcbmludGVyZmFjZSBDbGFzc0Rlc2NyaXB0b3Ige1xuICBraW5kOiAnY2xhc3MnO1xuICBlbGVtZW50czogQ2xhc3NFbGVtZW50W107XG4gIGZpbmlzaGVyPzogPFQ+KGNsYXp6OiBDb25zdHJ1Y3RvcjxUPikgPT4gdW5kZWZpbmVkIHwgQ29uc3RydWN0b3I8VD47XG59XG5cbi8vIEZyb20gdGhlIFRDMzkgRGVjb3JhdG9ycyBwcm9wb3NhbFxuaW50ZXJmYWNlIENsYXNzRWxlbWVudCB7XG4gIGtpbmQ6ICdmaWVsZCd8J21ldGhvZCc7XG4gIGtleTogUHJvcGVydHlLZXk7XG4gIHBsYWNlbWVudDogJ3N0YXRpYyd8J3Byb3RvdHlwZSd8J293bic7XG4gIGluaXRpYWxpemVyPzogRnVuY3Rpb247XG4gIGV4dHJhcz86IENsYXNzRWxlbWVudFtdO1xuICBmaW5pc2hlcj86IDxUPihjbGF6ejogQ29uc3RydWN0b3I8VD4pID0+IHVuZGVmaW5lZCB8IENvbnN0cnVjdG9yPFQ+O1xuICBkZXNjcmlwdG9yPzogUHJvcGVydHlEZXNjcmlwdG9yO1xufVxuXG5jb25zdCBsZWdhY3lDdXN0b21FbGVtZW50ID1cbiAgICAodGFnTmFtZTogc3RyaW5nLCBjbGF6ejogQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAgIC8vIENhc3QgYXMgYW55IGJlY2F1c2UgVFMgZG9lc24ndCByZWNvZ25pemUgdGhlIHJldHVybiB0eXBlIGFzIGJlaW5nIGFcbiAgICAgIC8vIHN1YnR5cGUgb2YgdGhlIGRlY29yYXRlZCBjbGFzcyB3aGVuIGNsYXp6IGlzIHR5cGVkIGFzXG4gICAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBmb3Igc29tZSByZWFzb24uXG4gICAgICAvLyBgQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+YCBpcyBoZWxwZnVsIHRvIG1ha2Ugc3VyZSB0aGUgZGVjb3JhdG9yIGlzXG4gICAgICAvLyBhcHBsaWVkIHRvIGVsZW1lbnRzIGhvd2V2ZXIuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICByZXR1cm4gY2xhenogYXMgYW55O1xuICAgIH07XG5cbmNvbnN0IHN0YW5kYXJkQ3VzdG9tRWxlbWVudCA9XG4gICAgKHRhZ05hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogQ2xhc3NEZXNjcmlwdG9yKSA9PiB7XG4gICAgICBjb25zdCB7a2luZCwgZWxlbWVudHN9ID0gZGVzY3JpcHRvcjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQsXG4gICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAvLyBUaGlzIGNhbGxiYWNrIGlzIGNhbGxlZCBvbmNlIHRoZSBjbGFzcyBpcyBvdGhlcndpc2UgZnVsbHkgZGVmaW5lZFxuICAgICAgICBmaW5pc2hlcihjbGF6ejogQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+KSB7XG4gICAgICAgICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjbGF6eik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuLyoqXG4gKiBDbGFzcyBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGRlZmluZXMgdGhlIGRlY29yYXRlZCBjbGFzcyBhcyBhIGN1c3RvbSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB0YWdOYW1lIHRoZSBuYW1lIG9mIHRoZSBjdXN0b20gZWxlbWVudCB0byBkZWZpbmVcbiAqL1xuZXhwb3J0IGNvbnN0IGN1c3RvbUVsZW1lbnQgPSAodGFnTmFtZTogc3RyaW5nKSA9PlxuICAgIChjbGFzc09yRGVzY3JpcHRvcjogQ29uc3RydWN0b3I8SFRNTEVsZW1lbnQ+fENsYXNzRGVzY3JpcHRvcikgPT5cbiAgICAgICAgKHR5cGVvZiBjbGFzc09yRGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgIGxlZ2FjeUN1c3RvbUVsZW1lbnQodGFnTmFtZSwgY2xhc3NPckRlc2NyaXB0b3IpIDpcbiAgICBzdGFuZGFyZEN1c3RvbUVsZW1lbnQodGFnTmFtZSwgY2xhc3NPckRlc2NyaXB0b3IpO1xuXG5jb25zdCBzdGFuZGFyZFByb3BlcnR5ID1cbiAgICAob3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbiwgZWxlbWVudDogQ2xhc3NFbGVtZW50KSA9PiB7XG4gICAgICAvLyBXaGVuIGRlY29yYXRpbmcgYW4gYWNjZXNzb3IsIHBhc3MgaXQgdGhyb3VnaCBhbmQgYWRkIHByb3BlcnR5IG1ldGFkYXRhLlxuICAgICAgLy8gTm90ZSwgdGhlIGBoYXNPd25Qcm9wZXJ0eWAgY2hlY2sgaW4gYGNyZWF0ZVByb3BlcnR5YCBlbnN1cmVzIHdlIGRvbid0XG4gICAgICAvLyBzdG9tcCBvdmVyIHRoZSB1c2VyJ3MgYWNjZXNzb3IuXG4gICAgICBpZiAoZWxlbWVudC5raW5kID09PSAnbWV0aG9kJyAmJiBlbGVtZW50LmRlc2NyaXB0b3IgJiZcbiAgICAgICAgICAhKCd2YWx1ZScgaW4gZWxlbWVudC5kZXNjcmlwdG9yKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgICAgZmluaXNoZXIoY2xheno6IHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjcmVhdGVQcm9wZXJ0eSgpIHRha2VzIGNhcmUgb2YgZGVmaW5pbmcgdGhlIHByb3BlcnR5LCBidXQgd2Ugc3RpbGxcbiAgICAgICAgLy8gbXVzdCByZXR1cm4gc29tZSBraW5kIG9mIGRlc2NyaXB0b3IsIHNvIHJldHVybiBhIGRlc2NyaXB0b3IgZm9yIGFuXG4gICAgICAgIC8vIHVudXNlZCBwcm90b3R5cGUgZmllbGQuIFRoZSBmaW5pc2hlciBjYWxscyBjcmVhdGVQcm9wZXJ0eSgpLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdmaWVsZCcsXG4gICAgICAgICAga2V5OiBTeW1ib2woKSxcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdvd24nLFxuICAgICAgICAgIGRlc2NyaXB0b3I6IHt9LFxuICAgICAgICAgIC8vIFdoZW4gQGJhYmVsL3BsdWdpbi1wcm9wb3NhbC1kZWNvcmF0b3JzIGltcGxlbWVudHMgaW5pdGlhbGl6ZXJzLFxuICAgICAgICAgIC8vIGRvIHRoaXMgaW5zdGVhZCBvZiB0aGUgaW5pdGlhbGl6ZXIgYmVsb3cuIFNlZTpcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvaXNzdWVzLzkyNjAgZXh0cmFzOiBbXG4gICAgICAgICAgLy8gICB7XG4gICAgICAgICAgLy8gICAgIGtpbmQ6ICdpbml0aWFsaXplcicsXG4gICAgICAgICAgLy8gICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgICAgLy8gICAgIGluaXRpYWxpemVyOiBkZXNjcmlwdG9yLmluaXRpYWxpemVyLFxuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIF0sXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICAgICAgICBpbml0aWFsaXplcih0aGlzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5pbml0aWFsaXplciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzW2VsZW1lbnQua2V5XSA9IGVsZW1lbnQuaW5pdGlhbGl6ZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZpbmlzaGVyKGNsYXp6OiB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KSB7XG4gICAgICAgICAgICBjbGF6ei5jcmVhdGVQcm9wZXJ0eShlbGVtZW50LmtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbmNvbnN0IGxlZ2FjeVByb3BlcnR5ID1cbiAgICAob3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbiwgcHJvdG86IE9iamVjdCwgbmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAgIChwcm90by5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KVxuICAgICAgICAgIC5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICB9O1xuXG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHdoaWNoIGNyZWF0ZXMgYSBMaXRFbGVtZW50IHByb3BlcnR5IHdoaWNoIHJlZmxlY3RzIGFcbiAqIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlIHZhbHVlLiBBIGBQcm9wZXJ0eURlY2xhcmF0aW9uYCBtYXkgb3B0aW9uYWxseSBiZVxuICogc3VwcGxpZWQgdG8gY29uZmlndXJlIHByb3BlcnR5IGZlYXR1cmVzLlxuICpcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHkob3B0aW9ucz86IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgcmV0dXJuIChwcm90b09yRGVzY3JpcHRvcjogT2JqZWN0fENsYXNzRWxlbWVudCwgbmFtZT86IFByb3BlcnR5S2V5KTogYW55ID0+XG4gICAgICAgICAgICAgKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgbGVnYWN5UHJvcGVydHkob3B0aW9ucyEsIHByb3RvT3JEZXNjcmlwdG9yIGFzIE9iamVjdCwgbmFtZSkgOlxuICAgICAgc3RhbmRhcmRQcm9wZXJ0eShvcHRpb25zISwgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KTtcbn1cblxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlciB0aGF0XG4gKiBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3Igb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoc2VsZWN0b3I6IHN0cmluZykge1xuICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yOiBPYmplY3R8Q2xhc3NFbGVtZW50LFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgZGVjb3JhdG9yXG4gICAgICAgICAgbmFtZT86IFByb3BlcnR5S2V5KTogYW55ID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgZ2V0KHRoaXM6IExpdEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH07XG4gICAgcmV0dXJuIChuYW1lICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgbGVnYWN5UXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgT2JqZWN0LCBuYW1lKSA6XG4gICAgICAgIHN0YW5kYXJkUXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KTtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIHByb3BlcnR5IGRlY29yYXRvciB0aGF0IGNvbnZlcnRzIGEgY2xhc3MgcHJvcGVydHkgaW50byBhIGdldHRlclxuICogdGhhdCBleGVjdXRlcyBhIHF1ZXJ5U2VsZWN0b3JBbGwgb24gdGhlIGVsZW1lbnQncyByZW5kZXJSb290LlxuICpcbiAqIEBFeHBvcnREZWNvcmF0ZWRJdGVtc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlBbGwoc2VsZWN0b3I6IHN0cmluZykge1xuICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yOiBPYmplY3R8Q2xhc3NFbGVtZW50LFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgZGVjb3JhdG9yXG4gICAgICAgICAgbmFtZT86IFByb3BlcnR5S2V5KTogYW55ID0+IHtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0ge1xuICAgICAgZ2V0KHRoaXM6IExpdEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH07XG4gICAgcmV0dXJuIChuYW1lICE9PSB1bmRlZmluZWQpID9cbiAgICAgICAgbGVnYWN5UXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgT2JqZWN0LCBuYW1lKSA6XG4gICAgICAgIHN0YW5kYXJkUXVlcnkoZGVzY3JpcHRvciwgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KTtcbiAgfTtcbn1cblxuY29uc3QgbGVnYWN5UXVlcnkgPVxuICAgIChkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsIHByb3RvOiBPYmplY3QsIG5hbWU6IFByb3BlcnR5S2V5KSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH07XG5cbmNvbnN0IHN0YW5kYXJkUXVlcnkgPSAoZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yLCBlbGVtZW50OiBDbGFzc0VsZW1lbnQpID0+XG4gICAgKHtcbiAgICAgIGtpbmQ6ICdtZXRob2QnLFxuICAgICAgcGxhY2VtZW50OiAncHJvdG90eXBlJyxcbiAgICAgIGtleTogZWxlbWVudC5rZXksXG4gICAgICBkZXNjcmlwdG9yLFxuICAgIH0pO1xuXG5jb25zdCBzdGFuZGFyZEV2ZW50T3B0aW9ucyA9XG4gICAgKG9wdGlvbnM6IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zLCBlbGVtZW50OiBDbGFzc0VsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgIGZpbmlzaGVyKGNsYXp6OiB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgY2xhenoucHJvdG90eXBlW2VsZW1lbnQua2V5IGFzIGtleW9mIFVwZGF0aW5nRWxlbWVudF0sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbmNvbnN0IGxlZ2FjeUV2ZW50T3B0aW9ucyA9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBsZWdhY3kgZGVjb3JhdG9yXG4gICAgKG9wdGlvbnM6IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zLCBwcm90bzogYW55LCBuYW1lOiBQcm9wZXJ0eUtleSkgPT4ge1xuICAgICAgT2JqZWN0LmFzc2lnbihwcm90b1tuYW1lXSwgb3B0aW9ucyk7XG4gICAgfTtcblxuLyoqXG4gKiBBZGRzIGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgdG8gYSBtZXRob2QgdXNlZCBhcyBhbiBldmVudCBsaXN0ZW5lciBpbiBhXG4gKiBsaXQtaHRtbCB0ZW1wbGF0ZS5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyBBbiBvYmplY3QgdGhhdCBzcGVjaWZpcyBldmVudCBsaXN0ZW5lciBvcHRpb25zIGFzIGFjY2VwdGVkIGJ5XG4gKiBgRXZlbnRUYXJnZXQjYWRkRXZlbnRMaXN0ZW5lcmAgYW5kIGBFdmVudFRhcmdldCNyZW1vdmVFdmVudExpc3RlbmVyYC5cbiAqXG4gKiBDdXJyZW50IGJyb3dzZXJzIHN1cHBvcnQgdGhlIGBjYXB0dXJlYCwgYHBhc3NpdmVgLCBhbmQgYG9uY2VgIG9wdGlvbnMuIFNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FdmVudFRhcmdldC9hZGRFdmVudExpc3RlbmVyI1BhcmFtZXRlcnNcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICBjbGFzcyBNeUVsZW1lbnQge1xuICpcbiAqICAgICAgIGNsaWNrZWQgPSBmYWxzZTtcbiAqXG4gKiAgICAgICByZW5kZXIoKSB7XG4gKiAgICAgICAgIHJldHVybiBodG1sYDxkaXYgQGNsaWNrPSR7dGhpcy5fb25DbGlja31gPjxidXR0b24+PC9idXR0b24+PC9kaXY+YDtcbiAqICAgICAgIH1cbiAqXG4gKiAgICAgICBAZXZlbnRPcHRpb25zKHtjYXB0dXJlOiB0cnVlfSlcbiAqICAgICAgIF9vbkNsaWNrKGUpIHtcbiAqICAgICAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKi9cbmV4cG9ydCBjb25zdCBldmVudE9wdGlvbnMgPSAob3B0aW9uczogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpID0+XG4gICAgLy8gUmV0dXJuIHZhbHVlIHR5cGVkIGFzIGFueSB0byBwcmV2ZW50IFR5cGVTY3JpcHQgZnJvbSBjb21wbGFpbmluZyB0aGF0XG4gICAgLy8gc3RhbmRhcmQgZGVjb3JhdG9yIGZ1bmN0aW9uIHNpZ25hdHVyZSBkb2VzIG5vdCBtYXRjaCBUeXBlU2NyaXB0IGRlY29yYXRvclxuICAgIC8vIHNpZ25hdHVyZVxuICAgIC8vIFRPRE8oa3NjaGFhZik6IHVuY2xlYXIgd2h5IGl0IHdhcyBvbmx5IGZhaWxpbmcgb24gdGhpcyBkZWNvcmF0b3IgYW5kIG5vdFxuICAgIC8vIHRoZSBvdGhlcnNcbiAgICAoKHByb3RvT3JEZXNjcmlwdG9yOiBPYmplY3R8Q2xhc3NFbGVtZW50LCBuYW1lPzogc3RyaW5nKSA9PlxuICAgICAgICAgKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICAgbGVnYWN5RXZlbnRPcHRpb25zKG9wdGlvbnMsIHByb3RvT3JEZXNjcmlwdG9yIGFzIE9iamVjdCwgbmFtZSkgOlxuICAgICAgICAgc3RhbmRhcmRFdmVudE9wdGlvbnMob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IgYXMgQ2xhc3NFbGVtZW50KSkgYXNcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICAgICAgYW55O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPVxuICAgIDxQIGV4dGVuZHMgUHJvcGVydHlLZXk+KHByb3A6IFAsIF9vYmo6IHVua25vd24pOiBQID0+IHByb3A7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHk6IDxQIGV4dGVuZHMgUHJvcGVydHlLZXk+KFxuICAgICAgcHJvcDogUCwgX29iajogdW5rbm93bikgPT4gUDtcblxuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5OiB0eXBlb2YgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eTtcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnRzIHByb3BlcnR5IHZhbHVlcyB0byBhbmQgZnJvbSBhdHRyaWJ1dGUgdmFsdWVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZSA9IHVua25vd24sIFR5cGVIaW50ID0gdW5rbm93bj4ge1xuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHRvIGNvbnZlcnQgYW4gYXR0cmlidXRlIHZhbHVlIHRvIGEgcHJvcGVydHlcbiAgICogdmFsdWUuXG4gICAqL1xuICBmcm9tQXR0cmlidXRlPyh2YWx1ZTogc3RyaW5nfG51bGwsIHR5cGU/OiBUeXBlSGludCk6IFR5cGU7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB0byBjb252ZXJ0IGEgcHJvcGVydHkgdmFsdWUgdG8gYW4gYXR0cmlidXRlXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBJdCByZXR1cm5zIHVua25vd24gaW5zdGVhZCBvZiBzdHJpbmcsIHRvIGJlIGNvbXBhdGlibGUgd2l0aFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vV0lDRy90cnVzdGVkLXR5cGVzIChhbmQgc2ltaWxhciBlZmZvcnRzKS5cbiAgICovXG4gIHRvQXR0cmlidXRlPyh2YWx1ZTogVHlwZSwgdHlwZT86IFR5cGVIaW50KTogdW5rbm93bjtcbn1cblxudHlwZSBBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZSA9IHVua25vd24sIFR5cGVIaW50ID0gdW5rbm93bj4gPVxuICAgIENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZT58KCh2YWx1ZTogc3RyaW5nLCB0eXBlPzogVHlwZUhpbnQpID0+IFR5cGUpO1xuXG4vKipcbiAqIERlZmluZXMgb3B0aW9ucyBmb3IgYSBwcm9wZXJ0eSBhY2Nlc3Nvci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eURlY2xhcmF0aW9uPFR5cGUgPSB1bmtub3duLCBUeXBlSGludCA9IHVua25vd24+IHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyBob3cgYW5kIHdoZXRoZXIgdGhlIHByb3BlcnR5IGJlY29tZXMgYW4gb2JzZXJ2ZWQgYXR0cmlidXRlLlxuICAgKiBJZiB0aGUgdmFsdWUgaXMgYGZhbHNlYCwgdGhlIHByb3BlcnR5IGlzIG5vdCBhZGRlZCB0byBgb2JzZXJ2ZWRBdHRyaWJ1dGVzYC5cbiAgICogSWYgdHJ1ZSBvciBhYnNlbnQsIHRoZSBsb3dlcmNhc2VkIHByb3BlcnR5IG5hbWUgaXMgb2JzZXJ2ZWQgKGUuZy4gYGZvb0JhcmBcbiAgICogYmVjb21lcyBgZm9vYmFyYCkuIElmIGEgc3RyaW5nLCB0aGUgc3RyaW5nIHZhbHVlIGlzIG9ic2VydmVkIChlLmdcbiAgICogYGF0dHJpYnV0ZTogJ2Zvby1iYXInYCkuXG4gICAqL1xuICByZWFkb25seSBhdHRyaWJ1dGU/OiBib29sZWFufHN0cmluZztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSB0eXBlIG9mIHRoZSBwcm9wZXJ0eS4gVGhpcyBpcyB1c2VkIG9ubHkgYXMgYSBoaW50IGZvciB0aGVcbiAgICogYGNvbnZlcnRlcmAgdG8gZGV0ZXJtaW5lIGhvdyB0byBjb252ZXJ0IHRoZSBhdHRyaWJ1dGVcbiAgICogdG8vZnJvbSBhIHByb3BlcnR5LlxuICAgKi9cbiAgcmVhZG9ubHkgdHlwZT86IFR5cGVIaW50O1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaG93IHRvIGNvbnZlcnQgdGhlIGF0dHJpYnV0ZSB0by9mcm9tIGEgcHJvcGVydHkuIElmIHRoaXMgdmFsdWVcbiAgICogaXMgYSBmdW5jdGlvbiwgaXQgaXMgdXNlZCB0byBjb252ZXJ0IHRoZSBhdHRyaWJ1dGUgdmFsdWUgYSB0aGUgcHJvcGVydHlcbiAgICogdmFsdWUuIElmIGl0J3MgYW4gb2JqZWN0LCBpdCBjYW4gaGF2ZSBrZXlzIGZvciBgZnJvbUF0dHJpYnV0ZWAgYW5kXG4gICAqIGB0b0F0dHJpYnV0ZWAuIElmIG5vIGB0b0F0dHJpYnV0ZWAgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYW5kXG4gICAqIGByZWZsZWN0YCBpcyBzZXQgdG8gYHRydWVgLCB0aGUgcHJvcGVydHkgdmFsdWUgaXMgc2V0IGRpcmVjdGx5IHRvIHRoZVxuICAgKiBhdHRyaWJ1dGUuIEEgZGVmYXVsdCBgY29udmVydGVyYCBpcyB1c2VkIGlmIG5vbmUgaXMgcHJvdmlkZWQ7IGl0IHN1cHBvcnRzXG4gICAqIGBCb29sZWFuYCwgYFN0cmluZ2AsIGBOdW1iZXJgLCBgT2JqZWN0YCwgYW5kIGBBcnJheWAuIE5vdGUsXG4gICAqIHdoZW4gYSBwcm9wZXJ0eSBjaGFuZ2VzIGFuZCB0aGUgY29udmVydGVyIGlzIHVzZWQgdG8gdXBkYXRlIHRoZSBhdHRyaWJ1dGUsXG4gICAqIHRoZSBwcm9wZXJ0eSBpcyBuZXZlciB1cGRhdGVkIGFnYWluIGFzIGEgcmVzdWx0IG9mIHRoZSBhdHRyaWJ1dGUgY2hhbmdpbmcsXG4gICAqIGFuZCB2aWNlIHZlcnNhLlxuICAgKi9cbiAgcmVhZG9ubHkgY29udmVydGVyPzogQXR0cmlidXRlQ29udmVydGVyPFR5cGUsIFR5cGVIaW50PjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgcmVmbGVjdCB0byBhbiBhdHRyaWJ1dGUuXG4gICAqIElmIGB0cnVlYCwgd2hlbiB0aGUgcHJvcGVydHkgaXMgc2V0LCB0aGUgYXR0cmlidXRlIGlzIHNldCB1c2luZyB0aGVcbiAgICogYXR0cmlidXRlIG5hbWUgZGV0ZXJtaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIGZvciB0aGUgYGF0dHJpYnV0ZWBcbiAgICogcHJvcGVydHkgb3B0aW9uIGFuZCB0aGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGNvbnZlcnRlZCB1c2luZyB0aGUgcnVsZXNcbiAgICogZnJvbSB0aGUgYGNvbnZlcnRlcmAgcHJvcGVydHkgb3B0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgcmVmbGVjdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCBpbmRpY2F0ZXMgaWYgYSBwcm9wZXJ0eSBzaG91bGQgYmUgY29uc2lkZXJlZCBjaGFuZ2VkIHdoZW5cbiAgICogaXQgaXMgc2V0LiBUaGUgZnVuY3Rpb24gc2hvdWxkIHRha2UgdGhlIGBuZXdWYWx1ZWAgYW5kIGBvbGRWYWx1ZWAgYW5kXG4gICAqIHJldHVybiBgdHJ1ZWAgaWYgYW4gdXBkYXRlIHNob3VsZCBiZSByZXF1ZXN0ZWQuXG4gICAqL1xuICBoYXNDaGFuZ2VkPyh2YWx1ZTogVHlwZSwgb2xkVmFsdWU6IFR5cGUpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciBhbiBhY2Nlc3NvciB3aWxsIGJlIGNyZWF0ZWQgZm9yIHRoaXMgcHJvcGVydHkuIEJ5XG4gICAqIGRlZmF1bHQsIGFuIGFjY2Vzc29yIHdpbGwgYmUgZ2VuZXJhdGVkIGZvciB0aGlzIHByb3BlcnR5IHRoYXQgcmVxdWVzdHMgYW5cbiAgICogdXBkYXRlIHdoZW4gc2V0LiBJZiB0aGlzIGZsYWcgaXMgYHRydWVgLCBubyBhY2Nlc3NvciB3aWxsIGJlIGNyZWF0ZWQsIGFuZFxuICAgKiBpdCB3aWxsIGJlIHRoZSB1c2VyJ3MgcmVzcG9uc2liaWxpdHkgdG8gY2FsbFxuICAgKiBgdGhpcy5yZXF1ZXN0VXBkYXRlKHByb3BlcnR5TmFtZSwgb2xkVmFsdWUpYCB0byByZXF1ZXN0IGFuIHVwZGF0ZSB3aGVuXG4gICAqIHRoZSBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgKi9cbiAgcmVhZG9ubHkgbm9BY2Nlc3Nvcj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogTWFwIG9mIHByb3BlcnRpZXMgdG8gUHJvcGVydHlEZWNsYXJhdGlvbiBvcHRpb25zLiBGb3IgZWFjaCBwcm9wZXJ0eSBhblxuICogYWNjZXNzb3IgaXMgbWFkZSwgYW5kIHRoZSBwcm9wZXJ0eSBpcyBwcm9jZXNzZWQgYWNjb3JkaW5nIHRvIHRoZVxuICogUHJvcGVydHlEZWNsYXJhdGlvbiBvcHRpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgcmVhZG9ubHkgW2tleTogc3RyaW5nXTogUHJvcGVydHlEZWNsYXJhdGlvbjtcbn1cblxudHlwZSBQcm9wZXJ0eURlY2xhcmF0aW9uTWFwID0gTWFwPFByb3BlcnR5S2V5LCBQcm9wZXJ0eURlY2xhcmF0aW9uPjtcblxudHlwZSBBdHRyaWJ1dGVNYXAgPSBNYXA8c3RyaW5nLCBQcm9wZXJ0eUtleT47XG5cbmV4cG9ydCB0eXBlIFByb3BlcnR5VmFsdWVzID0gTWFwPFByb3BlcnR5S2V5LCB1bmtub3duPjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb252ZXJ0ZXI6IENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXIgPSB7XG5cbiAgdG9BdHRyaWJ1dGUodmFsdWU6IHVua25vd24sIHR5cGU/OiB1bmtub3duKTogdW5rbm93biB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEJvb2xlYW46XG4gICAgICAgIHJldHVybiB2YWx1ZSA/ICcnIDogbnVsbDtcbiAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYCBwYXNzIHRoaXMgdGhyb3VnaFxuICAgICAgICAvLyB0byBhbGxvdyByZW1vdmluZy9ubyBjaGFuZ2UgYmVoYXZpb3IuXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBmcm9tQXR0cmlidXRlKHZhbHVlOiBzdHJpbmd8bnVsbCwgdHlwZT86IHVua25vd24pIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsO1xuICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBOdW1iZXIodmFsdWUpO1xuICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICBjYXNlIEFycmF5OlxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSEpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufTtcblxuZXhwb3J0IGludGVyZmFjZSBIYXNDaGFuZ2VkIHtcbiAgKHZhbHVlOiB1bmtub3duLCBvbGQ6IHVua25vd24pOiBib29sZWFuO1xufVxuXG4vKipcbiAqIENoYW5nZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpZmZlcmVudCBmcm9tIGBvbGRWYWx1ZWAuXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IGZvciBhIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgbm90RXF1YWw6IEhhc0NoYW5nZWQgPSAodmFsdWU6IHVua25vd24sIG9sZDogdW5rbm93bik6IGJvb2xlYW4gPT4ge1xuICAvLyBUaGlzIGVuc3VyZXMgKG9sZD09TmFOLCB2YWx1ZT09TmFOKSBhbHdheXMgcmV0dXJucyBmYWxzZVxuICByZXR1cm4gb2xkICE9PSB2YWx1ZSAmJiAob2xkID09PSBvbGQgfHwgdmFsdWUgPT09IHZhbHVlKTtcbn07XG5cbmNvbnN0IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uOiBQcm9wZXJ0eURlY2xhcmF0aW9uID0ge1xuICBhdHRyaWJ1dGU6IHRydWUsXG4gIHR5cGU6IFN0cmluZyxcbiAgY29udmVydGVyOiBkZWZhdWx0Q29udmVydGVyLFxuICByZWZsZWN0OiBmYWxzZSxcbiAgaGFzQ2hhbmdlZDogbm90RXF1YWxcbn07XG5cbmNvbnN0IG1pY3JvdGFza1Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG5cbmNvbnN0IFNUQVRFX0hBU19VUERBVEVEID0gMTtcbmNvbnN0IFNUQVRFX1VQREFURV9SRVFVRVNURUQgPSAxIDw8IDI7XG5jb25zdCBTVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURSA9IDEgPDwgMztcbmNvbnN0IFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFkgPSAxIDw8IDQ7XG5jb25zdCBTVEFURV9IQVNfQ09OTkVDVEVEID0gMSA8PCA1O1xudHlwZSBVcGRhdGVTdGF0ZSA9IHR5cGVvZiBTVEFURV9IQVNfVVBEQVRFRHx0eXBlb2YgU1RBVEVfVVBEQVRFX1JFUVVFU1RFRHxcbiAgICB0eXBlb2YgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEV8XG4gICAgdHlwZW9mIFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFl8dHlwZW9mIFNUQVRFX0hBU19DT05ORUNURUQ7XG5cbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHdoaWNoIG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLiBXaGVuXG4gKiBwcm9wZXJ0aWVzIGNoYW5nZSwgdGhlIGB1cGRhdGVgIG1ldGhvZCBpcyBhc3luY2hyb25vdXNseSBjYWxsZWQuIFRoaXMgbWV0aG9kXG4gKiBzaG91bGQgYmUgc3VwcGxpZWQgYnkgc3ViY2xhc3NlcnMgdG8gcmVuZGVyIHVwZGF0ZXMgYXMgZGVzaXJlZC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVwZGF0aW5nRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgLypcbiAgICogRHVlIHRvIGNsb3N1cmUgY29tcGlsZXIgRVM2IGNvbXBpbGF0aW9uIGJ1Z3MsIEBub2NvbGxhcHNlIGlzIHJlcXVpcmVkIG9uXG4gICAqIGFsbCBzdGF0aWMgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB3aXRoIGluaXRpYWxpemVycy4gIFJlZmVyZW5jZTpcbiAgICogLSBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtY29tcGlsZXIvaXNzdWVzLzE3NzZcbiAgICovXG5cbiAgLyoqXG4gICAqIE1hcHMgYXR0cmlidXRlIG5hbWVzIHRvIHByb3BlcnRpZXM7IGZvciBleGFtcGxlIGBmb29iYXJgIGF0dHJpYnV0ZSB0b1xuICAgKiBgZm9vQmFyYCBwcm9wZXJ0eS4gQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGVcbiAgICogY2xhc3MuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcDogQXR0cmlidXRlTWFwO1xuXG4gIC8qKlxuICAgKiBNYXJrcyBjbGFzcyBhcyBoYXZpbmcgZmluaXNoZWQgY3JlYXRpbmcgcHJvcGVydGllcy5cbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgZmluYWxpemVkID0gdHJ1ZTtcblxuICAvKipcbiAgICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgY2xhc3MgcHJvcGVydGllcywgaW5jbHVkaW5nIGFueSBzdXBlcmNsYXNzIHByb3BlcnRpZXMuXG4gICAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2NsYXNzUHJvcGVydGllcz86IFByb3BlcnR5RGVjbGFyYXRpb25NYXA7XG5cbiAgLyoqXG4gICAqIFVzZXItc3VwcGxpZWQgb2JqZWN0IHRoYXQgbWFwcyBwcm9wZXJ0eSBuYW1lcyB0byBgUHJvcGVydHlEZWNsYXJhdGlvbmBcbiAgICogb2JqZWN0cyBjb250YWluaW5nIG9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIHRoZSBwcm9wZXJ0eS5cbiAgICovXG4gIHN0YXRpYyBwcm9wZXJ0aWVzOiBQcm9wZXJ0eURlY2xhcmF0aW9ucztcblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYXR0cmlidXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAvLyBub3RlOiBwaWdneSBiYWNraW5nIG9uIHRoaXMgdG8gZW5zdXJlIHdlJ3JlIGZpbmFsaXplZC5cbiAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgY29uc3QgYXR0cmlidXRlczogc3RyaW5nW10gPSBbXTtcbiAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgdGhpcy5fY2xhc3NQcm9wZXJ0aWVzIS5mb3JFYWNoKCh2LCBwKSA9PiB7XG4gICAgICBjb25zdCBhdHRyID0gdGhpcy5fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHAsIHYpO1xuICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLnNldChhdHRyLCBwKTtcbiAgICAgICAgYXR0cmlidXRlcy5wdXNoKGF0dHIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhlIHByaXZhdGUgYF9jbGFzc1Byb3BlcnRpZXNgIHByb3BlcnR5IG1ldGFkYXRhIGlzIGNyZWF0ZWQuXG4gICAqIEluIGFkZGl0aW9uIHRvIGBmaW5hbGl6ZWAgdGhpcyBpcyBhbHNvIGNhbGxlZCBpbiBgY3JlYXRlUHJvcGVydHlgIHRvXG4gICAqIGVuc3VyZSB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIGNhbiBhZGQgcHJvcGVydHkgbWV0YWRhdGEuXG4gICAqL1xuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2Vuc3VyZUNsYXNzUHJvcGVydGllcygpIHtcbiAgICAvLyBlbnN1cmUgcHJpdmF0ZSBzdG9yYWdlIGZvciBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMuXG4gICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KFxuICAgICAgICAgICAgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnX2NsYXNzUHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgdGhpcy5fY2xhc3NQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgLy8gTk9URTogV29ya2Fyb3VuZCBJRTExIG5vdCBzdXBwb3J0aW5nIE1hcCBjb25zdHJ1Y3RvciBhcmd1bWVudC5cbiAgICAgIGNvbnN0IHN1cGVyUHJvcGVydGllczogUHJvcGVydHlEZWNsYXJhdGlvbk1hcCA9XG4gICAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9jbGFzc1Byb3BlcnRpZXM7XG4gICAgICBpZiAoc3VwZXJQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXJQcm9wZXJ0aWVzLmZvckVhY2goXG4gICAgICAgICAgICAodjogUHJvcGVydHlEZWNsYXJhdGlvbiwgazogUHJvcGVydHlLZXkpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xhc3NQcm9wZXJ0aWVzIS5zZXQoaywgdikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcHJvcGVydHkgYWNjZXNzb3Igb24gdGhlIGVsZW1lbnQgcHJvdG90eXBlIGlmIG9uZSBkb2VzIG5vdCBleGlzdC5cbiAgICogVGhlIHByb3BlcnR5IHNldHRlciBjYWxscyB0aGUgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGAgcHJvcGVydHkgb3B0aW9uXG4gICAqIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHJlcXVlc3RcbiAgICogYW4gdXBkYXRlLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVByb3BlcnR5KFxuICAgICAgbmFtZTogUHJvcGVydHlLZXksXG4gICAgICBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIGNhbiBiZSBjYWxsZWQgYnkgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciB3aGljaFxuICAgIC8vIGlzIGNhbGxlZCBiZWZvcmUgYGZpbmFsaXplYCwgd2UgZW5zdXJlIHN0b3JhZ2UgZXhpc3RzIGZvciBwcm9wZXJ0eVxuICAgIC8vIG1ldGFkYXRhLlxuICAgIHRoaXMuX2Vuc3VyZUNsYXNzUHJvcGVydGllcygpO1xuICAgIHRoaXMuX2NsYXNzUHJvcGVydGllcyEuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgIC8vIERvIG5vdCBnZW5lcmF0ZSBhbiBhY2Nlc3NvciBpZiB0aGUgcHJvdG90eXBlIGFscmVhZHkgaGFzIG9uZSwgc2luY2VcbiAgICAvLyBpdCB3b3VsZCBiZSBsb3N0IG90aGVyd2lzZSBhbmQgdGhhdCB3b3VsZCBuZXZlciBiZSB0aGUgdXNlcidzIGludGVudGlvbjtcbiAgICAvLyBJbnN0ZWFkLCB3ZSBleHBlY3QgdXNlcnMgdG8gY2FsbCBgcmVxdWVzdFVwZGF0ZWAgdGhlbXNlbHZlcyBmcm9tXG4gICAgLy8gdXNlci1kZWZpbmVkIGFjY2Vzc29ycy4gTm90ZSB0aGF0IGlmIHRoZSBzdXBlciBoYXMgYW4gYWNjZXNzb3Igd2Ugd2lsbFxuICAgIC8vIHN0aWxsIG92ZXJ3cml0ZSBpdFxuICAgIGlmIChvcHRpb25zLm5vQWNjZXNzb3IgfHwgdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5ID0gdHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnID8gU3ltYm9sKCkgOiBgX18ke25hbWV9YDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgbm8gc3ltYm9sIGluIGluZGV4XG4gICAgICBnZXQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQodGhpczogVXBkYXRpbmdFbGVtZW50LCB2YWx1ZTogdW5rbm93bikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IG5vIHN5bWJvbCBpbiBpbmRleFxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9ICh0aGlzIGFzIGFueSlbbmFtZV07XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgbm8gc3ltYm9sIGluIGluZGV4XG4gICAgICAgICh0aGlzIGFzIGFueSlba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBwcm9wZXJ0eSBhY2Nlc3NvcnMgZm9yIHJlZ2lzdGVyZWQgcHJvcGVydGllcyBhbmQgZW5zdXJlc1xuICAgKiBhbnkgc3VwZXJjbGFzc2VzIGFyZSBhbHNvIGZpbmFsaXplZC5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnZmluYWxpemVkJywgdGhpcykpICYmXG4gICAgICAgIHRoaXMuZmluYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICBjb25zdCBzdXBlckN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7XG4gICAgaWYgKHR5cGVvZiBzdXBlckN0b3IuZmluYWxpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHN1cGVyQ3Rvci5maW5hbGl6ZSgpO1xuICAgIH1cbiAgICB0aGlzLmZpbmFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fZW5zdXJlQ2xhc3NQcm9wZXJ0aWVzKCk7XG4gICAgLy8gaW5pdGlhbGl6ZSBNYXAgcG9wdWxhdGVkIGluIG9ic2VydmVkQXR0cmlidXRlc1xuICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAgPSBuZXcgTWFwKCk7XG4gICAgLy8gbWFrZSBhbnkgcHJvcGVydGllc1xuICAgIC8vIE5vdGUsIG9ubHkgcHJvY2VzcyBcIm93blwiIHByb3BlcnRpZXMgc2luY2UgdGhpcyBlbGVtZW50IHdpbGwgaW5oZXJpdFxuICAgIC8vIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gdGhlIHN1cGVyQ2xhc3MsIGFuZCBmaW5hbGl6YXRpb24gZW5zdXJlc1xuICAgIC8vIHRoZSBlbnRpcmUgcHJvdG90eXBlIGNoYWluIGlzIGZpbmFsaXplZC5cbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdwcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcGVydGllcztcbiAgICAgIC8vIHN1cHBvcnQgc3ltYm9scyBpbiBwcm9wZXJ0aWVzIChJRTExIGRvZXMgbm90IHN1cHBvcnQgdGhpcylcbiAgICAgIGNvbnN0IHByb3BLZXlzID0gW1xuICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcyksXG4gICAgICAgIC4uLih0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm9wcykgOlxuICAgICAgICAgICAgW11cbiAgICAgIF07XG4gICAgICAvLyBUaGlzIGZvci9vZiBpcyBvayBiZWNhdXNlIHByb3BLZXlzIGlzIGFuIGFycmF5XG4gICAgICBmb3IgKGNvbnN0IHAgb2YgcHJvcEtleXMpIHtcbiAgICAgICAgLy8gbm90ZSwgdXNlIG9mIGBhbnlgIGlzIGR1ZSB0byBUeXBlU3JpcHQgbGFjayBvZiBzdXBwb3J0IGZvciBzeW1ib2wgaW5cbiAgICAgICAgLy8gaW5kZXggdHlwZXNcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBubyBzeW1ib2wgaW4gaW5kZXhcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9wZXJ0eShwLCAocHJvcHMgYXMgYW55KVtwXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYG5hbWVgLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShcbiAgICAgIG5hbWU6IFByb3BlcnR5S2V5LCBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgY29uc3QgYXR0cmlidXRlID0gb3B0aW9ucy5hdHRyaWJ1dGU7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZSA9PT0gZmFsc2UgP1xuICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAodHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgIGF0dHJpYnV0ZSA6XG4gICAgICAgICAgICAgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyA/IG5hbWUudG9Mb3dlckNhc2UoKSA6IHVuZGVmaW5lZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhIHByb3BlcnR5IHNob3VsZCByZXF1ZXN0IGFuIHVwZGF0ZS5cbiAgICogQ2FsbGVkIHdoZW4gYSBwcm9wZXJ0eSB2YWx1ZSBpcyBzZXQgYW5kIHVzZXMgdGhlIGBoYXNDaGFuZ2VkYFxuICAgKiBvcHRpb24gZm9yIHRoZSBwcm9wZXJ0eSBpZiBwcmVzZW50IG9yIGEgc3RyaWN0IGlkZW50aXR5IGNoZWNrLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX3ZhbHVlSGFzQ2hhbmdlZChcbiAgICAgIHZhbHVlOiB1bmtub3duLCBvbGQ6IHVua25vd24sIGhhc0NoYW5nZWQ6IEhhc0NoYW5nZWQgPSBub3RFcXVhbCkge1xuICAgIHJldHVybiBoYXNDaGFuZ2VkKHZhbHVlLCBvbGQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIHZhbHVlLlxuICAgKiBDYWxsZWQgdmlhIHRoZSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYCBhbmQgdXNlcyB0aGUgcHJvcGVydHknc1xuICAgKiBgY29udmVydGVyYCBvciBgY29udmVydGVyLmZyb21BdHRyaWJ1dGVgIHByb3BlcnR5IG9wdGlvbi5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIF9wcm9wZXJ0eVZhbHVlRnJvbUF0dHJpYnV0ZShcbiAgICAgIHZhbHVlOiBzdHJpbmd8bnVsbCwgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgIGNvbnN0IHR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgY29uc3QgY29udmVydGVyID0gb3B0aW9ucy5jb252ZXJ0ZXIgfHwgZGVmYXVsdENvbnZlcnRlcjtcbiAgICBjb25zdCBmcm9tQXR0cmlidXRlID1cbiAgICAgICAgKHR5cGVvZiBjb252ZXJ0ZXIgPT09ICdmdW5jdGlvbicgPyBjb252ZXJ0ZXIgOiBjb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSk7XG4gICAgcmV0dXJuIGZyb21BdHRyaWJ1dGUgPyBmcm9tQXR0cmlidXRlKHZhbHVlLCB0eXBlKSA6IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IHZhbHVlLiBJZiB0aGlzXG4gICAqIHJldHVybnMgdW5kZWZpbmVkLCB0aGUgcHJvcGVydHkgd2lsbCAqbm90KiBiZSByZWZsZWN0ZWQgdG8gYW4gYXR0cmlidXRlLlxuICAgKiBJZiB0aGlzIHJldHVybnMgbnVsbCwgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHJlbW92ZWQsIG90aGVyd2lzZSB0aGVcbiAgICogYXR0cmlidXRlIHdpbGwgYmUgc2V0IHRvIHRoZSB2YWx1ZS5cbiAgICogVGhpcyB1c2VzIHRoZSBwcm9wZXJ0eSdzIGByZWZsZWN0YCBhbmQgYHR5cGUudG9BdHRyaWJ1dGVgIHByb3BlcnR5IG9wdGlvbnMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfcHJvcGVydHlWYWx1ZVRvQXR0cmlidXRlKFxuICAgICAgdmFsdWU6IHVua25vd24sIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBjb25zdCBjb252ZXJ0ZXIgPSBvcHRpb25zLmNvbnZlcnRlcjtcbiAgICBjb25zdCB0b0F0dHJpYnV0ZSA9XG4gICAgICAgIGNvbnZlcnRlciAmJiAoY29udmVydGVyIGFzIENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXIpLnRvQXR0cmlidXRlIHx8XG4gICAgICAgIGRlZmF1bHRDb252ZXJ0ZXIudG9BdHRyaWJ1dGU7XG4gICAgcmV0dXJuIHRvQXR0cmlidXRlISh2YWx1ZSwgdHlwZSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdGF0ZTogVXBkYXRlU3RhdGUgPSAwO1xuICBwcml2YXRlIF9pbnN0YW5jZVByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfdXBkYXRlUHJvbWlzZTogUHJvbWlzZTx1bmtub3duPiA9IG1pY3JvdGFza1Byb21pc2U7XG4gIHByaXZhdGUgX2hhc0Nvbm5lY3RlZFJlc29sdmVyOiAoKCkgPT4gdm9pZCl8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBNYXAgd2l0aCBrZXlzIGZvciBhbnkgcHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdFxuICAgKiB1cGRhdGUgY3ljbGUgd2l0aCBwcmV2aW91cyB2YWx1ZXMuXG4gICAqL1xuICBwcml2YXRlIF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIE1hcCB3aXRoIGtleXMgb2YgcHJvcGVydGllcyB0aGF0IHNob3VsZCBiZSByZWZsZWN0ZWQgd2hlbiB1cGRhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVmbGVjdGluZ1Byb3BlcnRpZXM6IE1hcDxQcm9wZXJ0eUtleSwgUHJvcGVydHlEZWNsYXJhdGlvbj58XG4gICAgICB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBlbGVtZW50IGluaXRpYWxpemF0aW9uLiBCeSBkZWZhdWx0IGNhcHR1cmVzIGFueSBwcmUtc2V0IHZhbHVlcyBmb3JcbiAgICogcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgIC8vIGVuc3VyZXMgZmlyc3QgdXBkYXRlIHdpbGwgYmUgY2F1Z2h0IGJ5IGFuIGVhcmx5IGFjY2VzcyBvZiBgdXBkYXRlQ29tcGxldGVgXG4gICAgdGhpcy5fcmVxdWVzdFVwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpeGVzIGFueSBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgaW5zdGFuY2UgYmVmb3JlIHVwZ3JhZGUgdGltZS5cbiAgICogT3RoZXJ3aXNlIHRoZXNlIHdvdWxkIHNoYWRvdyB0aGUgYWNjZXNzb3IgYW5kIGJyZWFrIHRoZXNlIHByb3BlcnRpZXMuXG4gICAqIFRoZSBwcm9wZXJ0aWVzIGFyZSBzdG9yZWQgaW4gYSBNYXAgd2hpY2ggaXMgcGxheWVkIGJhY2sgYWZ0ZXIgdGhlXG4gICAqIGNvbnN0cnVjdG9yIHJ1bnMuIE5vdGUsIG9uIHZlcnkgb2xkIHZlcnNpb25zIG9mIFNhZmFyaSAoPD05KSBvciBDaHJvbWVcbiAgICogKDw9NDEpLCBwcm9wZXJ0aWVzIGNyZWF0ZWQgZm9yIG5hdGl2ZSBwbGF0Zm9ybSBwcm9wZXJ0aWVzIGxpa2UgKGBpZGAgb3JcbiAgICogYG5hbWVgKSBtYXkgbm90IGhhdmUgZGVmYXVsdCB2YWx1ZXMgc2V0IGluIHRoZSBlbGVtZW50IGNvbnN0cnVjdG9yLiBPblxuICAgKiB0aGVzZSBicm93c2VycyBuYXRpdmUgcHJvcGVydGllcyBhcHBlYXIgb24gaW5zdGFuY2VzIGFuZCB0aGVyZWZvcmUgdGhlaXJcbiAgICogZGVmYXVsdCB2YWx1ZSB3aWxsIG92ZXJ3cml0ZSBhbnkgZWxlbWVudCBkZWZhdWx0IChlLmcuIGlmIHRoZSBlbGVtZW50IHNldHNcbiAgICogdGhpcy5pZCA9ICdpZCcgaW4gdGhlIGNvbnN0cnVjdG9yLCB0aGUgJ2lkJyB3aWxsIGJlY29tZSAnJyBzaW5jZSB0aGlzIGlzXG4gICAqIHRoZSBuYXRpdmUgcGxhdGZvcm0gZGVmYXVsdCkuXG4gICAqL1xuICBwcml2YXRlIF9zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgVXBkYXRpbmdFbGVtZW50KVxuICAgICAgICAuX2NsYXNzUHJvcGVydGllcyEuZm9yRWFjaCgoX3YsIHApID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW3AgYXMga2V5b2YgdGhpc107XG4gICAgICAgICAgICBkZWxldGUgdGhpc1twIGFzIGtleW9mIHRoaXNdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZVByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHByZXZpb3VzbHkgc2F2ZWQgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICovXG4gIHByaXZhdGUgX2FwcGx5SW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzIS5mb3JFYWNoKCh2LCBwKSA9PiAodGhpcyBhcyBhbnkpW3BdID0gdik7XG4gICAgdGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX0hBU19DT05ORUNURUQ7XG4gICAgLy8gRW5zdXJlIGZpcnN0IGNvbm5lY3Rpb24gY29tcGxldGVzIGFuIHVwZGF0ZS4gVXBkYXRlcyBjYW5ub3QgY29tcGxldGUgYmVmb3JlXG4gICAgLy8gY29ubmVjdGlvbiBhbmQgaWYgb25lIGlzIHBlbmRpbmcgY29ubmVjdGlvbiB0aGUgYF9oYXNDb25uZWN0aW9uUmVzb2x2ZXJgXG4gICAgLy8gd2lsbCBleGlzdC4gSWYgc28sIHJlc29sdmUgaXQgdG8gY29tcGxldGUgdGhlIHVwZGF0ZSwgb3RoZXJ3aXNlXG4gICAgLy8gcmVxdWVzdFVwZGF0ZS5cbiAgICBpZiAodGhpcy5faGFzQ29ubmVjdGVkUmVzb2x2ZXIpIHtcbiAgICAgIHRoaXMuX2hhc0Nvbm5lY3RlZFJlc29sdmVyKCk7XG4gICAgICB0aGlzLl9oYXNDb25uZWN0ZWRSZXNvbHZlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIGZvciBgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKWAgaW4gZXh0ZW5zaW9ucyB3aGlsZVxuICAgKiByZXNlcnZpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1ha2luZyBub24tYnJlYWtpbmcgZmVhdHVyZSBhZGRpdGlvbnNcbiAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyBwcm9wZXJ0eSB2YWx1ZXMgd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZS5cbiAgICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIG9sZDogc3RyaW5nfG51bGwsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuICAgIGlmIChvbGQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9hdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9wcm9wZXJ0eVRvQXR0cmlidXRlKFxuICAgICAgbmFtZTogUHJvcGVydHlLZXksIHZhbHVlOiB1bmtub3duLFxuICAgICAgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbiA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgY29uc3QgY3RvciA9ICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpO1xuICAgIGNvbnN0IGF0dHIgPSBjdG9yLl9hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgYXR0clZhbHVlID0gY3Rvci5fcHJvcGVydHlWYWx1ZVRvQXR0cmlidXRlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIC8vIGFuIHVuZGVmaW5lZCB2YWx1ZSBkb2VzIG5vdCBjaGFuZ2UgdGhlIGF0dHJpYnV0ZS5cbiAgICAgIGlmIChhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBUcmFjayBpZiB0aGUgcHJvcGVydHkgaXMgYmVpbmcgcmVmbGVjdGVkIHRvIGF2b2lkXG4gICAgICAvLyBzZXR0aW5nIHRoZSBwcm9wZXJ0eSBhZ2FpbiB2aWEgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuIE5vdGU6XG4gICAgICAvLyAxLiB0aGlzIHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IHRoZSBjYWxsYmFjayBpcyBzeW5jaHJvbm91cy5cbiAgICAgIC8vIDIuIHdpbGwgYmVoYXZlIGluY29ycmVjdGx5IGlmIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGluIHRoZSByZWFjdGlvblxuICAgICAgLy8gc3RhY2sgYXQgdGltZSBvZiBjYWxsaW5nLiBIb3dldmVyLCBzaW5jZSB3ZSBwcm9jZXNzIGF0dHJpYnV0ZXNcbiAgICAgIC8vIGluIGB1cGRhdGVgIHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSAob3IgYW4gZXh0cmVtZSBjb3JuZXIgY2FzZVxuICAgICAgLy8gdGhhdCB3ZSdkIGxpa2UgdG8gZGlzY292ZXIpLlxuICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEU7XG4gICAgICBpZiAoYXR0clZhbHVlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUgYXMgc3RyaW5nKTtcbiAgICAgIH1cbiAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgJiB+U1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd8bnVsbCkge1xuICAgIC8vIFVzZSB0cmFja2luZyBpbmZvIHRvIGF2b2lkIGRlc2VyaWFsaXppbmcgYXR0cmlidXRlIHZhbHVlIGlmIGl0IHdhc1xuICAgIC8vIGp1c3Qgc2V0IGZyb20gYSBwcm9wZXJ0eSBzZXR0ZXIuXG4gICAgaWYgKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSVNfUkVGTEVDVElOR19UT19BVFRSSUJVVEUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3RvciA9ICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpO1xuICAgIGNvbnN0IHByb3BOYW1lID0gY3Rvci5fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcC5nZXQobmFtZSk7XG4gICAgaWYgKHByb3BOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPVxuICAgICAgICAgIGN0b3IuX2NsYXNzUHJvcGVydGllcyEuZ2V0KHByb3BOYW1lKSB8fCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbjtcbiAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFk7XG4gICAgICB0aGlzW3Byb3BOYW1lIGFzIGtleW9mIHRoaXNdID1cbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgY3Rvci5fcHJvcGVydHlWYWx1ZUZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMpIGFzIGFueTtcbiAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgJiB+U1RBVEVfSVNfUkVGTEVDVElOR19UT19QUk9QRVJUWTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBwcml2YXRlIHZlcnNpb24gb2YgYHJlcXVlc3RVcGRhdGVgIGRvZXMgbm90IGFjY2VzcyBvciByZXR1cm4gdGhlXG4gICAqIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZS4gVGhpcyBwcm9taXNlIGNhbiBiZSBvdmVycmlkZGVuIGFuZCBpcyB0aGVyZWZvcmVcbiAgICogbm90IGZyZWUgdG8gYWNjZXNzLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVxdWVzdFVwZGF0ZShuYW1lPzogUHJvcGVydHlLZXksIG9sZFZhbHVlPzogdW5rbm93bikge1xuICAgIGxldCBzaG91bGRSZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgVXBkYXRpbmdFbGVtZW50O1xuICAgICAgY29uc3Qgb3B0aW9ucyA9XG4gICAgICAgICAgY3Rvci5fY2xhc3NQcm9wZXJ0aWVzIS5nZXQobmFtZSkgfHwgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb247XG4gICAgICBpZiAoY3Rvci5fdmFsdWVIYXNDaGFuZ2VkKFxuICAgICAgICAgICAgICB0aGlzW25hbWUgYXMga2V5b2YgdGhpc10sIG9sZFZhbHVlLCBvcHRpb25zLmhhc0NoYW5nZWQpKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMuc2V0KG5hbWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgdG8gcmVmbGVjdGluZyBwcm9wZXJ0aWVzIHNldC5cbiAgICAgICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdGhhdCBldmVyeSBjaGFuZ2UgaGFzIGEgY2hhbmNlIHRvIGFkZCB0aGVcbiAgICAgICAgLy8gcHJvcGVydHkgdG8gYF9yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgISh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fUFJPUEVSVFkpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMuX2hhc1JlcXVlc3RlZFVwZGF0ZSAmJiBzaG91bGRSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICB0aGlzLl9lbnF1ZXVlVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkXG4gICAqIGJlIGNhbGxlZCB3aGVuIGFuIGVsZW1lbnQgc2hvdWxkIHVwZGF0ZSBiYXNlZCBvbiBzb21lIHN0YXRlIG5vdCB0cmlnZ2VyZWRcbiAgICogYnkgc2V0dGluZyBhIHByb3BlcnR5LiBJbiB0aGlzIGNhc2UsIHBhc3Mgbm8gYXJndW1lbnRzLiBJdCBzaG91bGQgYWxzbyBiZVxuICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICogcHJvcGVydHkgYG5hbWVgIGFuZCBgb2xkVmFsdWVgIHRvIGVuc3VyZSB0aGF0IGFueSBjb25maWd1cmVkIHByb3BlcnR5XG4gICAqIG9wdGlvbnMgYXJlIGhvbm9yZWQuIFJldHVybnMgdGhlIGB1cGRhdGVDb21wbGV0ZWAgUHJvbWlzZSB3aGljaCBpcyByZXNvbHZlZFxuICAgKiB3aGVuIHRoZSB1cGRhdGUgY29tcGxldGVzLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSB7UHJvcGVydHlLZXl9IChvcHRpb25hbCkgbmFtZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAqIEBwYXJhbSBvbGRWYWx1ZSB7YW55fSAob3B0aW9uYWwpIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBBIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSB1cGRhdGUgY29tcGxldGVzLlxuICAgKi9cbiAgcmVxdWVzdFVwZGF0ZShuYW1lPzogUHJvcGVydHlLZXksIG9sZFZhbHVlPzogdW5rbm93bikge1xuICAgIHRoaXMuX3JlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgdXBkYXRlLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBfZW5xdWV1ZVVwZGF0ZSgpIHtcbiAgICAvLyBNYXJrIHN0YXRlIHVwZGF0aW5nLi4uXG4gICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSB8IFNUQVRFX1VQREFURV9SRVFVRVNURUQ7XG4gICAgbGV0IHJlc29sdmUhOiAocjogYm9vbGVhbikgPT4gdm9pZDtcbiAgICBsZXQgcmVqZWN0ITogKGU6IEVycm9yKSA9PiB2b2lkO1xuICAgIGNvbnN0IHByZXZpb3VzVXBkYXRlUHJvbWlzZSA9IHRoaXMuX3VwZGF0ZVByb21pc2U7XG4gICAgdGhpcy5fdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgIHJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgLy8gRW5zdXJlIGFueSBwcmV2aW91cyB1cGRhdGUgaGFzIHJlc29sdmVkIGJlZm9yZSB1cGRhdGluZy5cbiAgICAgIC8vIFRoaXMgYGF3YWl0YCBhbHNvIGVuc3VyZXMgdGhhdCBwcm9wZXJ0eSBjaGFuZ2VzIGFyZSBiYXRjaGVkLlxuICAgICAgYXdhaXQgcHJldmlvdXNVcGRhdGVQcm9taXNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElnbm9yZSBhbnkgcHJldmlvdXMgZXJyb3JzLiBXZSBvbmx5IGNhcmUgdGhhdCB0aGUgcHJldmlvdXMgY3ljbGUgaXNcbiAgICAgIC8vIGRvbmUuIEFueSBlcnJvciBzaG91bGQgaGF2ZSBiZWVuIGhhbmRsZWQgaW4gdGhlIHByZXZpb3VzIHVwZGF0ZS5cbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGhhcyBjb25uZWN0ZWQgYmVmb3JlIHVwZGF0aW5nLlxuICAgIGlmICghdGhpcy5faGFzQ29ubmVjdGVkKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzKSA9PiB0aGlzLl9oYXNDb25uZWN0ZWRSZXNvbHZlciA9IHJlcyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBlcmZvcm1VcGRhdGUoKTtcbiAgICAgIC8vIElmIGBwZXJmb3JtVXBkYXRlYCByZXR1cm5zIGEgUHJvbWlzZSwgd2UgYXdhaXQgaXQuIFRoaXMgaXMgZG9uZSB0b1xuICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgIC8vIGNoZWNrZWQgdG8gYXZvaWQgZGVsYXlpbmcgYW4gYWRkaXRpb25hbCBtaWNyb3Rhc2sgdW5sZXNzIHdlIG5lZWQgdG8uXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgYXdhaXQgcmVzdWx0O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gICAgcmVzb2x2ZSghdGhpcy5faGFzUmVxdWVzdGVkVXBkYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9oYXNDb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0hBU19DT05ORUNURUQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2hhc1JlcXVlc3RlZFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfVVBEQVRFX1JFUVVFU1RFRCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGhhc1VwZGF0ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0hBU19VUERBVEVEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhbiBlbGVtZW50IHVwZGF0ZS4gTm90ZSwgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBkdXJpbmcgdGhlXG4gICAqIHVwZGF0ZSwgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCB3aWxsIG5vdCBiZSBjYWxsZWQuXG4gICAqXG4gICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSB0aW1pbmcgb2YgdXBkYXRlcy4gSWYgdGhpc1xuICAgKiBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnBlcmZvcm1VcGRhdGUoKWAgbXVzdCBiZSBjYWxsZWQuXG4gICAqXG4gICAqIEZvciBpbnN0YW5jZSwgdG8gc2NoZWR1bGUgdXBkYXRlcyB0byBvY2N1ciBqdXN0IGJlZm9yZSB0aGUgbmV4dCBmcmFtZTpcbiAgICpcbiAgICogYGBgXG4gICAqIHByb3RlY3RlZCBhc3luYyBwZXJmb3JtVXBkYXRlKCk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAqICAgc3VwZXIucGVyZm9ybVVwZGF0ZSgpO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgcHJvdGVjdGVkIHBlcmZvcm1VcGRhdGUoKTogdm9pZHxQcm9taXNlPHVua25vd24+IHtcbiAgICAvLyBNaXhpbiBpbnN0YW5jZSBwcm9wZXJ0aWVzIG9uY2UsIGlmIHRoZXkgZXhpc3QuXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlUHJvcGVydGllcykge1xuICAgICAgdGhpcy5fYXBwbHlJbnN0YW5jZVByb3BlcnRpZXMoKTtcbiAgICB9XG4gICAgbGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgIGNvbnN0IGNoYW5nZWRQcm9wZXJ0aWVzID0gdGhpcy5fY2hhbmdlZFByb3BlcnRpZXM7XG4gICAgdHJ5IHtcbiAgICAgIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFByZXZlbnQgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCBmcm9tIHJ1bm5pbmcgd2hlbiB0aGVyZSdzIGFuXG4gICAgICAvLyB1cGRhdGUgZXhjZXB0aW9uLlxuICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAvLyBFbnN1cmUgZWxlbWVudCBjYW4gYWNjZXB0IGFkZGl0aW9uYWwgdXBkYXRlcyBhZnRlciBhbiBleGNlcHRpb24uXG4gICAgICB0aGlzLl9tYXJrVXBkYXRlZCgpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICBpZiAoISh0aGlzLl91cGRhdGVTdGF0ZSAmIFNUQVRFX0hBU19VUERBVEVEKSkge1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSEFTX1VQREFURUQ7XG4gICAgICAgIHRoaXMuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya1VwZGF0ZWQoKSB7XG4gICAgdGhpcy5fY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSAmIH5TVEFURV9VUERBVEVfUkVRVUVTVEVEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZWxlbWVudCBoYXMgY29tcGxldGVkIHVwZGF0aW5nLlxuICAgKiBUaGUgUHJvbWlzZSB2YWx1ZSBpcyBhIGJvb2xlYW4gdGhhdCBpcyBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgY29tcGxldGVkIHRoZVxuICAgKiB1cGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLiBUaGUgUHJvbWlzZSByZXN1bHQgaXMgYGZhbHNlYCBpZlxuICAgKiBhIHByb3BlcnR5IHdhcyBzZXQgaW5zaWRlIGB1cGRhdGVkKClgLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgYW5cbiAgICogZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHRoZSB1cGRhdGUuIFRoaXMgZ2V0dGVyIGNhbiBiZSBpbXBsZW1lbnRlZCB0b1xuICAgKiBhd2FpdCBhZGRpdGlvbmFsIHN0YXRlLiBGb3IgZXhhbXBsZSwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCB0byBhd2FpdCBhXG4gICAqIHJlbmRlcmVkIGVsZW1lbnQgYmVmb3JlIGZ1bGZpbGxpbmcgdGhpcyBQcm9taXNlLiBUbyBkbyB0aGlzLCBmaXJzdCBhd2FpdFxuICAgKiBgc3VwZXIudXBkYXRlQ29tcGxldGVgIHRoZW4gYW55IHN1YnNlcXVlbnQgc3RhdGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSByZXR1cm5zIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGVcbiAgICogdXBkYXRlIHJlc29sdmVkIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICovXG4gIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBkYXRlUHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCBgdXBkYXRlYCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgcmVxdWVzdHNcbiAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAqXG4gICAqICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXMuXG4gICAqIEl0IGNhbiBiZSBvdmVycmlkZGVuIHRvIHJlbmRlciBhbmQga2VlcCB1cGRhdGVkIGVsZW1lbnQgRE9NLlxuICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgKiBhbm90aGVyIHVwZGF0ZS5cbiAgICpcbiAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBpZiAodGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcy5zaXplID4gMCkge1xuICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yXG4gICAgICAvLyBsb29wcyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcy5mb3JFYWNoKFxuICAgICAgICAgICh2LCBrKSA9PiB0aGlzLl9wcm9wZXJ0eVRvQXR0cmlidXRlKGssIHRoaXNbayBhcyBrZXlvZiB0aGlzXSwgdikpO1xuICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbmV2ZXIgdGhlIGVsZW1lbnQgaXMgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm1cbiAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGVcbiAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgKlxuICAgKiAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZmlyc3QgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm0gb25lIHRpbWVcbiAgICogd29yayBvbiB0aGUgZWxlbWVudCBhZnRlciB1cGRhdGUuXG4gICAqXG4gICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgKiBhZ2FpbiBhZnRlciB0aGlzIHVwZGF0ZSBjeWNsZSBjb21wbGV0ZXMuXG4gICAqXG4gICAqICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJ2xpdC1odG1sJztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdsaXQtaHRtbC9saWIvc2hhZHktcmVuZGVyLmpzJztcblxuaW1wb3J0IHtQcm9wZXJ0eVZhbHVlcywgVXBkYXRpbmdFbGVtZW50fSBmcm9tICcuL2xpYi91cGRhdGluZy1lbGVtZW50LmpzJztcblxuZXhwb3J0ICogZnJvbSAnLi9saWIvdXBkYXRpbmctZWxlbWVudC5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9kZWNvcmF0b3JzLmpzJztcbmV4cG9ydCB7aHRtbCwgc3ZnLCBUZW1wbGF0ZVJlc3VsdCwgU1ZHVGVtcGxhdGVSZXN1bHR9IGZyb20gJ2xpdC1odG1sL2xpdC1odG1sLmpzJztcbmltcG9ydCB7c3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzLCBDU1NSZXN1bHR9IGZyb20gJy4vbGliL2Nzcy10YWcuanMnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY3NzLXRhZy5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbGl0RWxlbWVudFZlcnNpb25zOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIExpdEVsZW1lbnQgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuKHdpbmRvd1snbGl0RWxlbWVudFZlcnNpb25zJ10gfHwgKHdpbmRvd1snbGl0RWxlbWVudFZlcnNpb25zJ10gPSBbXSkpXG4gICAgLnB1c2goJzIuMC4xJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1NTUmVzdWx0QXJyYXkgZXh0ZW5kcyBBcnJheTxDU1NSZXN1bHR8Q1NTUmVzdWx0QXJyYXk+IHt9XG5cbi8qKlxuICogTWluaW1hbCBpbXBsZW1lbnRhdGlvbiBvZiBBcnJheS5wcm90b3R5cGUuZmxhdFxuICogQHBhcmFtIGFyciB0aGUgYXJyYXkgdG8gZmxhdHRlblxuICogQHBhcmFtIHJlc3VsdCB0aGUgYWNjdW1sYXRlZCByZXN1bHRcbiAqL1xuZnVuY3Rpb24gYXJyYXlGbGF0KFxuICAgIHN0eWxlczogQ1NTUmVzdWx0QXJyYXksIHJlc3VsdDogQ1NTUmVzdWx0W10gPSBbXSk6IENTU1Jlc3VsdFtdIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHN0eWxlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgYXJyYXlGbGF0KHZhbHVlLCByZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBEZWVwbHkgZmxhdHRlbnMgc3R5bGVzIGFycmF5LiBVc2VzIG5hdGl2ZSBmbGF0IGlmIGF2YWlsYWJsZS4gKi9cbmNvbnN0IGZsYXR0ZW5TdHlsZXMgPSAoc3R5bGVzOiBDU1NSZXN1bHRBcnJheSk6IENTU1Jlc3VsdFtdID0+XG4gICAgc3R5bGVzLmZsYXQgPyBzdHlsZXMuZmxhdChJbmZpbml0eSkgOiBhcnJheUZsYXQoc3R5bGVzKTtcblxuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnQgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICAvKipcbiAgICogRW5zdXJlIHRoaXMgY2xhc3MgaXMgbWFya2VkIGFzIGBmaW5hbGl6ZWRgIGFzIGFuIG9wdGltaXphdGlvbiBlbnN1cmluZ1xuICAgKiBpdCB3aWxsIG5vdCBuZWVkbGVzc2x5IHRyeSB0byBgZmluYWxpemVgLlxuICAgKi9cbiAgcHJvdGVjdGVkIHN0YXRpYyBmaW5hbGl6ZWQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgbWV0aG9kIHVzZWQgdG8gcmVuZGVyIHRoZSBsaXQtaHRtbCBUZW1wbGF0ZVJlc3VsdCB0byB0aGUgZWxlbWVudCdzXG4gICAqIERPTS5cbiAgICogQHBhcmFtIHtUZW1wbGF0ZVJlc3VsdH0gVGVtcGxhdGUgdG8gcmVuZGVyLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gTm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICogQHBhcmFtIHtTdHJpbmd9IEVsZW1lbnQgbmFtZS5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHN0YXRpYyByZW5kZXIgPSByZW5kZXI7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHN0eWxlcyB0byBhcHBseSB0byB0aGUgZWxlbWVudC4gVGhlIHN0eWxlcyBzaG91bGQgYmUgZGVmaW5lZFxuICAgKiB1c2luZyB0aGUgYGNzc2AgdGFnIGZ1bmN0aW9uLlxuICAgKi9cbiAgc3RhdGljIHN0eWxlcz86IENTU1Jlc3VsdHxDU1NSZXN1bHRBcnJheTtcblxuICBwcml2YXRlIHN0YXRpYyBfc3R5bGVzOiBDU1NSZXN1bHRbXXx1bmRlZmluZWQ7XG5cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHByb3RlY3RlZCBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgc3VwZXIuZmluYWxpemUoKTtcbiAgICAvLyBQcmVwYXJlIHN0eWxpbmcgdGhhdCBpcyBzdGFtcGVkIGF0IGZpcnN0IHJlbmRlciB0aW1lLiBTdHlsaW5nXG4gICAgLy8gaXMgYnVpbHQgZnJvbSB1c2VyIHByb3ZpZGVkIGBzdHlsZXNgIG9yIGlzIGluaGVyaXRlZCBmcm9tIHRoZSBzdXBlcmNsYXNzLlxuICAgIHRoaXMuX3N0eWxlcyA9XG4gICAgICAgIHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnc3R5bGVzJywgdGhpcykpID9cbiAgICAgICAgdGhpcy5fZ2V0VW5pcXVlU3R5bGVzKCkgOlxuICAgICAgICB0aGlzLl9zdHlsZXMgfHwgW107XG4gIH1cblxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2dldFVuaXF1ZVN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgLy8gVGFrZSBjYXJlIG5vdCB0byBjYWxsIGB0aGlzLnN0eWxlc2AgbXVsdGlwbGUgdGltZXMgc2luY2UgdGhpcyBnZW5lcmF0ZXNcbiAgICAvLyBuZXcgQ1NTUmVzdWx0cyBlYWNoIHRpbWUuXG4gICAgLy8gVE9ETyhzb3J2ZWxsKTogU2luY2Ugd2UgZG8gbm90IGNhY2hlIENTU1Jlc3VsdHMgYnkgaW5wdXQsIGFueVxuICAgIC8vIHNoYXJlZCBzdHlsZXMgd2lsbCBnZW5lcmF0ZSBuZXcgc3R5bGVzaGVldCBvYmplY3RzLCB3aGljaCBpcyB3YXN0ZWZ1bC5cbiAgICAvLyBUaGlzIHNob3VsZCBiZSBhZGRyZXNzZWQgd2hlbiBhIGJyb3dzZXIgc2hpcHMgY29uc3RydWN0YWJsZVxuICAgIC8vIHN0eWxlc2hlZXRzLlxuICAgIGNvbnN0IHVzZXJTdHlsZXMgPSB0aGlzLnN0eWxlcztcbiAgICBjb25zdCBzdHlsZXM6IENTU1Jlc3VsdFtdID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodXNlclN0eWxlcykpIHtcbiAgICAgIGNvbnN0IGZsYXRTdHlsZXMgPSBmbGF0dGVuU3R5bGVzKHVzZXJTdHlsZXMpO1xuICAgICAgLy8gQXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdG8gYXZvaWQgZHVwbGljYXRlZCBzdHlsaW5nIHRoYXQgY2FuXG4gICAgICAvLyBvY2N1ciBlc3BlY2lhbGx5IHdoZW4gY29tcG9zaW5nIHZpYSBzdWJjbGFzc2luZywgZGUtZHVwbGljYXRlIHN0eWxlc1xuICAgICAgLy8gcHJlc2VydmluZyB0aGUgbGFzdCBpdGVtIGluIHRoZSBsaXN0LiBUaGUgbGFzdCBpdGVtIGlzIGtlcHQgdG9cbiAgICAgIC8vIHRyeSB0byBwcmVzZXJ2ZSBjYXNjYWRlIG9yZGVyIHdpdGggdGhlIGFzc3VtcHRpb24gdGhhdCBpdCdzIG1vc3RcbiAgICAgIC8vIGltcG9ydGFudCB0aGF0IGxhc3QgYWRkZWQgc3R5bGVzIG92ZXJyaWRlIHByZXZpb3VzIHN0eWxlcy5cbiAgICAgIGNvbnN0IHN0eWxlU2V0ID0gZmxhdFN0eWxlcy5yZWR1Y2VSaWdodCgoc2V0LCBzKSA9PiB7XG4gICAgICAgIHNldC5hZGQocyk7XG4gICAgICAgIC8vIG9uIElFIHNldC5hZGQgZG9lcyBub3QgcmV0dXJuIHRoZSBzZXQuXG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgICB9LCBuZXcgU2V0PENTU1Jlc3VsdD4oKSk7XG4gICAgICAvLyBBcnJheS5mcm9tIGRvZXMgbm90IHdvcmsgb24gU2V0IGluIElFXG4gICAgICBzdHlsZVNldC5mb3JFYWNoKCh2KSA9PiBzdHlsZXMudW5zaGlmdCh2KSk7XG4gICAgfSBlbHNlIGlmICh1c2VyU3R5bGVzKSB7XG4gICAgICBzdHlsZXMucHVzaCh1c2VyU3R5bGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHByaXZhdGUgX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIE5vZGUgb3IgU2hhZG93Um9vdCBpbnRvIHdoaWNoIGVsZW1lbnQgRE9NIHNob3VsZCBiZSByZW5kZXJlZC4gRGVmYXVsdHNcbiAgICogdG8gYW4gb3BlbiBzaGFkb3dSb290LlxuICAgKi9cbiAgcmVhZG9ubHkgcmVuZGVyUm9vdCE6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudDtcblxuICAvKipcbiAgICogUGVyZm9ybXMgZWxlbWVudCBpbml0aWFsaXphdGlvbi4gQnkgZGVmYXVsdCB0aGlzIGNhbGxzIGBjcmVhdGVSZW5kZXJSb290YFxuICAgKiB0byBjcmVhdGUgdGhlIGVsZW1lbnQgYHJlbmRlclJvb3RgIG5vZGUgYW5kIGNhcHR1cmVzIGFueSBwcmUtc2V0IHZhbHVlcyBmb3JcbiAgICogcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGluaXRpYWxpemUoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICh0aGlzIGFzIHtyZW5kZXJSb290OiBFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudH0pLnJlbmRlclJvb3QgPVxuICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAvLyBOb3RlLCBpZiByZW5kZXJSb290IGlzIG5vdCBhIHNoYWRvd1Jvb3QsIHN0eWxlcyB3b3VsZC9jb3VsZCBhcHBseSB0byB0aGVcbiAgICAvLyBlbGVtZW50J3MgZ2V0Um9vdE5vZGUoKS4gV2hpbGUgdGhpcyBjb3VsZCBiZSBkb25lLCB3ZSdyZSBjaG9vc2luZyBub3QgdG9cbiAgICAvLyBzdXBwb3J0IHRoaXMgbm93IHNpbmNlIGl0IHdvdWxkIHJlcXVpcmUgZGlmZmVyZW50IGxvZ2ljIGFyb3VuZCBkZS1kdXBpbmcuXG4gICAgaWYgKHdpbmRvdy5TaGFkb3dSb290ICYmIHRoaXMucmVuZGVyUm9vdCBpbnN0YW5jZW9mIHdpbmRvdy5TaGFkb3dSb290KSB7XG4gICAgICB0aGlzLmFkb3B0U3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5vZGUgaW50byB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgcmVuZGVyIGFuZCBieSBkZWZhdWx0XG4gICAqIGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb3BlbiBzaGFkb3dSb290LiBJbXBsZW1lbnQgdG8gY3VzdG9taXplIHdoZXJlIHRoZVxuICAgKiBlbGVtZW50J3MgRE9NIGlzIHJlbmRlcmVkLiBGb3IgZXhhbXBsZSwgdG8gcmVuZGVyIGludG8gdGhlIGVsZW1lbnQnc1xuICAgKiBjaGlsZE5vZGVzLCByZXR1cm4gYHRoaXNgLlxuICAgKiBAcmV0dXJucyB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVSZW5kZXJSb290KCk6IEVsZW1lbnR8U2hhZG93Um9vdCB7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHN0eWxpbmcgdG8gdGhlIGVsZW1lbnQgc2hhZG93Um9vdCB1c2luZyB0aGUgYHN0YXRpYyBnZXQgc3R5bGVzYFxuICAgKiBwcm9wZXJ0eS4gU3R5bGluZyB3aWxsIGFwcGx5IHVzaW5nIGBzaGFkb3dSb290LmFkb3B0ZWRTdHlsZVNoZWV0c2Agd2hlcmVcbiAgICogYXZhaWxhYmxlIGFuZCB3aWxsIGZhbGxiYWNrIG90aGVyd2lzZS4gV2hlbiBTaGFkb3cgRE9NIGlzIHBvbHlmaWxsZWQsXG4gICAqIFNoYWR5Q1NTIHNjb3BlcyBzdHlsZXMgYW5kIGFkZHMgdGhlbSB0byB0aGUgZG9jdW1lbnQuIFdoZW4gU2hhZG93IERPTVxuICAgKiBpcyBhdmFpbGFibGUgYnV0IGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIG5vdCwgc3R5bGVzIGFyZSBhcHBlbmRlZCB0byB0aGVcbiAgICogZW5kIG9mIHRoZSBgc2hhZG93Um9vdGAgdG8gW21pbWljIHNwZWNcbiAgICogYmVoYXZpb3JdKGh0dHBzOi8vd2ljZy5naXRodWIuaW8vY29uc3RydWN0LXN0eWxlc2hlZXRzLyN1c2luZy1jb25zdHJ1Y3RlZC1zdHlsZXNoZWV0cykuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRvcHRTdHlsZXMoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdEVsZW1lbnQpLl9zdHlsZXMhO1xuICAgIGlmIChzdHlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRoZXJlIGFyZSB0aHJlZSBzZXBhcmF0ZSBjYXNlcyBoZXJlIGJhc2VkIG9uIFNoYWRvdyBET00gc3VwcG9ydC5cbiAgICAvLyAoMSkgc2hhZG93Um9vdCBwb2x5ZmlsbGVkOiB1c2UgU2hhZHlDU1NcbiAgICAvLyAoMikgc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMgYXZhaWxhYmxlOiB1c2UgaXQuXG4gICAgLy8gKDMpIHNoYWRvd1Jvb3QuYWRvcHRlZFN0eWxlU2hlZXRzIHBvbHlmaWxsZWQ6IGFwcGVuZCBzdHlsZXMgYWZ0ZXJcbiAgICAvLyByZW5kZXJpbmdcbiAgICBpZiAod2luZG93LlNoYWR5Q1NTICE9PSB1bmRlZmluZWQgJiYgIXdpbmRvdy5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpIHtcbiAgICAgIHdpbmRvdy5TaGFkeUNTUy5TY29waW5nU2hpbS5wcmVwYXJlQWRvcHRlZENzc1RleHQoXG4gICAgICAgICAgc3R5bGVzLm1hcCgocykgPT4gcy5jc3NUZXh0KSwgdGhpcy5sb2NhbE5hbWUpO1xuICAgIH0gZWxzZSBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzKSB7XG4gICAgICAodGhpcy5yZW5kZXJSb290IGFzIFNoYWRvd1Jvb3QpLmFkb3B0ZWRTdHlsZVNoZWV0cyA9XG4gICAgICAgICAgc3R5bGVzLm1hcCgocykgPT4gcy5zdHlsZVNoZWV0ISk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoaXMgbXVzdCBiZSBkb25lIGFmdGVyIHJlbmRlcmluZyBzbyB0aGUgYWN0dWFsIHN0eWxlIGluc2VydGlvbiBpcyBkb25lXG4gICAgICAvLyBpbiBgdXBkYXRlYC5cbiAgICAgIHRoaXMuX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAvLyBOb3RlLCBmaXJzdCB1cGRhdGUvcmVuZGVyIGhhbmRsZXMgc3R5bGVFbGVtZW50IHNvIHdlIG9ubHkgY2FsbCB0aGlzIGlmXG4gICAgLy8gY29ubmVjdGVkIGFmdGVyIGZpcnN0IHVwZGF0ZS5cbiAgICBpZiAodGhpcy5oYXNVcGRhdGVkICYmIHdpbmRvdy5TaGFkeUNTUyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVFbGVtZW50KHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlc1xuICAgKiBhbmQgY2FsbHMgYHJlbmRlcmAgdG8gcmVuZGVyIERPTSB2aWEgbGl0LWh0bWwuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGVcbiAgICogdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuICAgKiAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICBjb25zdCB0ZW1wbGF0ZVJlc3VsdCA9IHRoaXMucmVuZGVyKCkgYXMgdW5rbm93bjtcbiAgICBpZiAodGVtcGxhdGVSZXN1bHQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdEVsZW1lbnQpXG4gICAgICAgICAgLnJlbmRlcihcbiAgICAgICAgICAgICAgdGVtcGxhdGVSZXN1bHQsXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdCxcbiAgICAgICAgICAgICAge3Njb3BlTmFtZTogdGhpcy5sb2NhbE5hbWUsIGV2ZW50Q29udGV4dDogdGhpc30pO1xuICAgIH1cbiAgICAvLyBXaGVuIG5hdGl2ZSBTaGFkb3cgRE9NIGlzIHVzZWQgYnV0IGFkb3B0ZWRTdHlsZXMgYXJlIG5vdCBzdXBwb3J0ZWQsXG4gICAgLy8gaW5zZXJ0IHN0eWxpbmcgYWZ0ZXIgcmVuZGVyaW5nIHRvIGVuc3VyZSBhZG9wdGVkU3R5bGVzIGhhdmUgaGlnaGVzdFxuICAgIC8vIHByaW9yaXR5LlxuICAgIGlmICh0aGlzLl9uZWVkc1NoaW1BZG9wdGVkU3R5bGVTaGVldHMpIHtcbiAgICAgIHRoaXMuX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cyA9IGZhbHNlO1xuICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIExpdEVsZW1lbnQpLl9zdHlsZXMhLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHMuY3NzVGV4dDtcbiAgICAgICAgdGhpcy5yZW5kZXJSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtdXN0IHJldHVyblxuICAgKiBhIGxpdC1odG1sIFRlbXBsYXRlUmVzdWx0LiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCpcbiAgICogdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0fHZvaWQge1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7UGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7QXR0cmlidXRlQ29tbWl0dGVyLCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXJ9IGZyb20gJy4vcGFydHMuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIFBhcnRzIHdoZW4gYSB0ZW1wbGF0ZSBpcyBpbnN0YW50aWF0ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgaW1wbGVtZW50cyBUZW1wbGF0ZVByb2Nlc3NvciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS1wb3NpdGlvbiBiaW5kaW5nLCBnaXZlbiB0aGUgZXZlbnQsIGF0dHJpYnV0ZVxuICAgKiBuYW1lLCBhbmQgc3RyaW5nIGxpdGVyYWxzLlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBiaW5kaW5nXG4gICAqIEBwYXJhbSBuYW1lICBUaGUgYXR0cmlidXRlIG5hbWVcbiAgICogQHBhcmFtIHN0cmluZ3MgVGhlIHN0cmluZyBsaXRlcmFscy4gVGhlcmUgYXJlIGFsd2F5cyBhdCBsZWFzdCB0d28gc3RyaW5ncyxcbiAgICogICBldmVudCBmb3IgZnVsbHktY29udHJvbGxlZCBiaW5kaW5ncyB3aXRoIGEgc2luZ2xlIGV4cHJlc3Npb24uXG4gICAqL1xuICBoYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhcbiAgICAgIGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10sXG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zKTogUGFydFtdIHtcbiAgICBjb25zdCBwcmVmaXggPSBuYW1lWzBdO1xuICAgIGlmIChwcmVmaXggPT09ICcuJykge1xuICAgICAgY29uc3QgY29taXR0ZXIgPSBuZXcgUHJvcGVydHlDb21taXR0ZXIoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyk7XG4gICAgICByZXR1cm4gY29taXR0ZXIucGFydHM7XG4gICAgfVxuICAgIGlmIChwcmVmaXggPT09ICdAJykge1xuICAgICAgcmV0dXJuIFtuZXcgRXZlbnRQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIG9wdGlvbnMuZXZlbnRDb250ZXh0KV07XG4gICAgfVxuICAgIGlmIChwcmVmaXggPT09ICc/Jykge1xuICAgICAgcmV0dXJuIFtuZXcgQm9vbGVhbkF0dHJpYnV0ZVBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyldO1xuICAgIH1cbiAgICBjb25zdCBjb21pdHRlciA9IG5ldyBBdHRyaWJ1dGVDb21taXR0ZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgcmV0dXJuIGNvbWl0dGVyLnBhcnRzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5XG4gICAqL1xuICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlUGFydChvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yID0gbmV3IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvcigpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcDxvYmplY3QsIHRydWU+KCk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZhY3RvcnkgPSAoLi4uYXJnczogYW55W10pID0+IG9iamVjdDtcblxuZXhwb3J0IHR5cGUgRGlyZWN0aXZlRm4gPSAocGFydDogUGFydCkgPT4gdm9pZDtcblxuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbCB0aGUgZnVuY3Rpb25cbiAqIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKiBgYGBcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IDxGIGV4dGVuZHMgRGlyZWN0aXZlRmFjdG9yeT4oZjogRik6IEYgPT5cbiAgICAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgY29uc3QgZCA9IGYoLi4uYXJncyk7XG4gICAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICAgIHJldHVybiBkO1xuICAgIH0pIGFzIEY7XG5cbmV4cG9ydCBjb25zdCBpc0RpcmVjdGl2ZSA9IChvOiB1bmtub3duKTogbyBpcyBEaXJlY3RpdmVGbiA9PiB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyAmJiBkaXJlY3RpdmVzLmhhcyhvKTtcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmludGVyZmFjZSBNYXliZVBvbHlmaWxsZWRDZSBleHRlbmRzIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XG4gIHBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2s/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogVHJ1ZSBpZiB0aGUgY3VzdG9tIGVsZW1lbnRzIHBvbHlmaWxsIGlzIGluIHVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ0VQb2x5ZmlsbCA9IHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgKHdpbmRvdy5jdXN0b21FbGVtZW50cyBhcyBNYXliZVBvbHlmaWxsZWRDZSkucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayAhPT1cbiAgICAgICAgdW5kZWZpbmVkO1xuXG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnROb2RlYCAoaW5jbHVzaXZlKSB0byBgZW5kTm9kZWBcbiAqIChleGNsdXNpdmUpLCBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmVcbiAqIGBiZWZvcmVOb2RlYC4gSWYgYGJlZm9yZU5vZGVgIGlzIG51bGwsIGl0IGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZVxuICogY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9XG4gICAgKGNvbnRhaW5lcjogTm9kZSxcbiAgICAgc3RhcnQ6IE5vZGV8bnVsbCxcbiAgICAgZW5kOiBOb2RlfG51bGwgPSBudWxsLFxuICAgICBiZWZvcmU6IE5vZGV8bnVsbCA9IG51bGwpOiB2b2lkID0+IHtcbiAgICAgIGxldCBub2RlID0gc3RhcnQ7XG4gICAgICB3aGlsZSAobm9kZSAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBub2RlIS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShub2RlISwgYmVmb3JlIGFzIE5vZGUpO1xuICAgICAgICBub2RlID0gbjtcbiAgICAgIH1cbiAgICB9O1xuXG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0Tm9kZWAgKGluY2x1c2l2ZSkgdG8gYGVuZE5vZGVgXG4gKiAoZXhjbHVzaXZlKSwgZnJvbSBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLCBzdGFydE5vZGU6IE5vZGV8bnVsbCwgZW5kTm9kZTogTm9kZXxudWxsID0gbnVsbCk6XG4gICAgICAgIHZvaWQgPT4ge1xuICAgICAgICAgIGxldCBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgIHdoaWxlIChub2RlICE9PSBlbmROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gbm9kZSEubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobm9kZSEpO1xuICAgICAgICAgICAgbm9kZSA9IG47XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgc2hhZHktcmVuZGVyXG4gKi9cblxuaW1wb3J0IHtpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGUsIFRlbXBsYXRlUGFydH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbmNvbnN0IHdhbGtlck5vZGVGaWx0ZXIgPSAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi87XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGlzdCBvZiBub2RlcyBmcm9tIGEgVGVtcGxhdGUgc2FmZWx5LiBJbiBhZGRpdGlvbiB0byByZW1vdmluZ1xuICogbm9kZXMgZnJvbSB0aGUgVGVtcGxhdGUsIHRoZSBUZW1wbGF0ZSBwYXJ0IGluZGljZXMgYXJlIHVwZGF0ZWQgdG8gbWF0Y2hcbiAqIHRoZSBtdXRhdGVkIFRlbXBsYXRlIERPTS5cbiAqXG4gKiBBcyB0aGUgdGVtcGxhdGUgaXMgd2Fsa2VkIHRoZSByZW1vdmFsIHN0YXRlIGlzIHRyYWNrZWQgYW5kXG4gKiBwYXJ0IGluZGljZXMgYXJlIGFkanVzdGVkIGFzIG5lZWRlZC5cbiAqXG4gKiBkaXZcbiAqICAgZGl2IzEgKHJlbW92ZSkgPC0tIHN0YXJ0IHJlbW92aW5nIChyZW1vdmluZyBub2RlIGlzIGRpdiMxKVxuICogICAgIGRpdlxuICogICAgICAgZGl2IzIgKHJlbW92ZSkgIDwtLSBjb250aW51ZSByZW1vdmluZyAocmVtb3Zpbmcgbm9kZSBpcyBzdGlsbCBkaXYjMSlcbiAqICAgICAgICAgZGl2XG4gKiBkaXYgPC0tIHN0b3AgcmVtb3Zpbmcgc2luY2UgcHJldmlvdXMgc2libGluZyBpcyB0aGUgcmVtb3Zpbmcgbm9kZSAoZGl2IzEsXG4gKiByZW1vdmVkIDQgbm9kZXMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZShcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGUsIG5vZGVzVG9SZW1vdmU6IFNldDxOb2RlPikge1xuICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9LCBwYXJ0c30gPSB0ZW1wbGF0ZTtcbiAgY29uc3Qgd2Fsa2VyID1cbiAgICAgIGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoY29udGVudCwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICBsZXQgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzKTtcbiAgbGV0IHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICBsZXQgbm9kZUluZGV4ID0gLTE7XG4gIGxldCByZW1vdmVDb3VudCA9IDA7XG4gIGNvbnN0IG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlID0gW107XG4gIGxldCBjdXJyZW50UmVtb3ZpbmdOb2RlOiBOb2RlfG51bGwgPSBudWxsO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICBub2RlSW5kZXgrKztcbiAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlIGFzIEVsZW1lbnQ7XG4gICAgLy8gRW5kIHJlbW92YWwgaWYgc3RlcHBlZCBwYXN0IHRoZSByZW1vdmluZyBub2RlXG4gICAgaWYgKG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBjdXJyZW50UmVtb3ZpbmdOb2RlKSB7XG4gICAgICBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbnVsbDtcbiAgICB9XG4gICAgLy8gQSBub2RlIHRvIHJlbW92ZSB3YXMgZm91bmQgaW4gdGhlIHRlbXBsYXRlXG4gICAgaWYgKG5vZGVzVG9SZW1vdmUuaGFzKG5vZGUpKSB7XG4gICAgICBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZS5wdXNoKG5vZGUpO1xuICAgICAgLy8gVHJhY2sgbm9kZSB3ZSdyZSByZW1vdmluZ1xuICAgICAgaWYgKGN1cnJlbnRSZW1vdmluZ05vZGUgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudFJlbW92aW5nTm9kZSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdoZW4gcmVtb3ZpbmcsIGluY3JlbWVudCBjb3VudCBieSB3aGljaCB0byBhZGp1c3Qgc3Vic2VxdWVudCBwYXJ0IGluZGljZXNcbiAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICB9XG4gICAgd2hpbGUgKHBhcnQgIT09IHVuZGVmaW5lZCAmJiBwYXJ0LmluZGV4ID09PSBub2RlSW5kZXgpIHtcbiAgICAgIC8vIElmIHBhcnQgaXMgaW4gYSByZW1vdmVkIG5vZGUgZGVhY3RpdmF0ZSBpdCBieSBzZXR0aW5nIGluZGV4IHRvIC0xIG9yXG4gICAgICAvLyBhZGp1c3QgdGhlIGluZGV4IGFzIG5lZWRlZC5cbiAgICAgIHBhcnQuaW5kZXggPSBjdXJyZW50UmVtb3ZpbmdOb2RlICE9PSBudWxsID8gLTEgOiBwYXJ0LmluZGV4IC0gcmVtb3ZlQ291bnQ7XG4gICAgICAvLyBnbyB0byB0aGUgbmV4dCBhY3RpdmUgcGFydC5cbiAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICAgIHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgIH1cbiAgfVxuICBub2Rlc1RvUmVtb3ZlSW5UZW1wbGF0ZS5mb3JFYWNoKChuKSA9PiBuLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG4pKTtcbn1cblxuY29uc3QgY291bnROb2RlcyA9IChub2RlOiBOb2RlKSA9PiB7XG4gIGxldCBjb3VudCA9IChub2RlLm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgKi8pID8gMCA6IDE7XG4gIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIobm9kZSwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICBjb3VudCsrO1xuICB9XG4gIHJldHVybiBjb3VudDtcbn07XG5cbmNvbnN0IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyA9XG4gICAgKHBhcnRzOiBUZW1wbGF0ZVBhcnRbXSwgc3RhcnRJbmRleDogbnVtYmVyID0gLTEpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4ICsgMTsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgICAgaWYgKGlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4vKipcbiAqIEluc2VydHMgdGhlIGdpdmVuIG5vZGUgaW50byB0aGUgVGVtcGxhdGUsIG9wdGlvbmFsbHkgYmVmb3JlIHRoZSBnaXZlblxuICogcmVmTm9kZS4gSW4gYWRkaXRpb24gdG8gaW5zZXJ0aW5nIHRoZSBub2RlIGludG8gdGhlIFRlbXBsYXRlLCB0aGUgVGVtcGxhdGVcbiAqIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaCB0aGUgbXV0YXRlZCBUZW1wbGF0ZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnROb2RlSW50b1RlbXBsYXRlKFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgbm9kZTogTm9kZSwgcmVmTm9kZTogTm9kZXxudWxsID0gbnVsbCkge1xuICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9LCBwYXJ0c30gPSB0ZW1wbGF0ZTtcbiAgLy8gSWYgdGhlcmUncyBubyByZWZOb2RlLCB0aGVuIHB1dCBub2RlIGF0IGVuZCBvZiB0ZW1wbGF0ZS5cbiAgLy8gTm8gcGFydCBpbmRpY2VzIG5lZWQgdG8gYmUgc2hpZnRlZCBpbiB0aGlzIGNhc2UuXG4gIGlmIChyZWZOb2RlID09PSBudWxsIHx8IHJlZk5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHdhbGtlciA9XG4gICAgICBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGNvbnRlbnQsIHdhbGtlck5vZGVGaWx0ZXIsIG51bGwsIGZhbHNlKTtcbiAgbGV0IHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cyk7XG4gIGxldCBpbnNlcnRDb3VudCA9IDA7XG4gIGxldCB3YWxrZXJJbmRleCA9IC0xO1xuICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICB3YWxrZXJJbmRleCsrO1xuICAgIGNvbnN0IHdhbGtlck5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGUgYXMgRWxlbWVudDtcbiAgICBpZiAod2Fsa2VyTm9kZSA9PT0gcmVmTm9kZSkge1xuICAgICAgaW5zZXJ0Q291bnQgPSBjb3VudE5vZGVzKG5vZGUpO1xuICAgICAgcmVmTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobm9kZSwgcmVmTm9kZSk7XG4gICAgfVxuICAgIHdoaWxlIChwYXJ0SW5kZXggIT09IC0xICYmIHBhcnRzW3BhcnRJbmRleF0uaW5kZXggPT09IHdhbGtlckluZGV4KSB7XG4gICAgICAvLyBJZiB3ZSd2ZSBpbnNlcnRlZCB0aGUgbm9kZSwgc2ltcGx5IGFkanVzdCBhbGwgc3Vic2VxdWVudCBwYXJ0c1xuICAgICAgaWYgKGluc2VydENvdW50ID4gMCkge1xuICAgICAgICB3aGlsZSAocGFydEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHBhcnRzW3BhcnRJbmRleF0uaW5kZXggKz0gaW5zZXJ0Q291bnQ7XG4gICAgICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhcnRJbmRleCA9IG5leHRBY3RpdmVJbmRleEluVGVtcGxhdGVQYXJ0cyhwYXJ0cywgcGFydEluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuLyoqXG4gKiBUaGUgUGFydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGR5bmFtaWMgcGFydCBvZiBhIHRlbXBsYXRlIGluc3RhbmNlIHJlbmRlcmVkXG4gKiBieSBsaXQtaHRtbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJ0IHtcbiAgdmFsdWU6IHVua25vd247XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgcGFydCB2YWx1ZSwgYnV0IGRvZXMgbm90IHdyaXRlIGl0IHRvIHRoZSBET00uXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB3aWxsIGJlIGNvbW1pdHRlZC5cbiAgICovXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZDtcblxuICAvKipcbiAgICogQ29tbWl0cyB0aGUgY3VycmVudCBwYXJ0IHZhbHVlLCBjYXVzZSBpdCB0byBhY3R1YWxseSBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gICAqL1xuICBjb21taXQoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlOiBvYmplY3QgPSB7fTtcblxuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIE5vZGVQYXJ0IHRvIGZ1bGx5IGNsZWFyIGl0cyBjb250ZW50LlxuICovXG5leHBvcnQgY29uc3Qgbm90aGluZyA9IHt9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge2lzRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQge3JlbW92ZU5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge25vQ2hhbmdlLCBub3RoaW5nLCBQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQge2NyZWF0ZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGVvZi1vcGVyYXRvclxuZXhwb3J0IHR5cGUgUHJpbWl0aXZlID0gbnVsbHx1bmRlZmluZWR8Ym9vbGVhbnxudW1iZXJ8c3RyaW5nfFN5bWJvbHxiaWdpbnQ7XG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBQcmltaXRpdmUgPT4ge1xuICByZXR1cm4gKFxuICAgICAgdmFsdWUgPT09IG51bGwgfHxcbiAgICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpKTtcbn07XG5cbi8qKlxuICogU2V0cyBhdHRyaWJ1dGUgdmFsdWVzIGZvciBBdHRyaWJ1dGVQYXJ0cywgc28gdGhhdCB0aGUgdmFsdWUgaXMgb25seSBzZXQgb25jZVxuICogZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG5hbWU6IHN0cmluZztcbiAgc3RyaW5nczogc3RyaW5nW107XG4gIHBhcnRzOiBBdHRyaWJ1dGVQYXJ0W107XG4gIGRpcnR5ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHRoaXMucGFydHNbaV0gPSB0aGlzLl9jcmVhdGVQYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaW5nbGUgcGFydC4gT3ZlcnJpZGUgdGhpcyB0byBjcmVhdGUgYSBkaWZmZXJudCB0eXBlIG9mIHBhcnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NyZWF0ZVBhcnQoKTogQXR0cmlidXRlUGFydCB7XG4gICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXRWYWx1ZSgpOiB1bmtub3duIHtcbiAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IHRleHQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0ZXh0ICs9IHN0cmluZ3NbaV07XG4gICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpXTtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdiA9IHBhcnQudmFsdWU7XG4gICAgICAgIGlmICh2ICE9IG51bGwgJiZcbiAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHYpIHx8XG4gICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgIHR5cGVvZiB2ICE9PSAnc3RyaW5nJyAmJiAodiBhcyBhbnkpW1N5bWJvbC5pdGVyYXRvcl0pKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB0IG9mIHYgYXMgSXRlcmFibGU8dW5rbm93bj4pIHtcbiAgICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHQgPT09ICdzdHJpbmcnID8gdCA6IFN0cmluZyh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dCArPSB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2IDogU3RyaW5nKHYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGV4dCArPSBzdHJpbmdzW2xdO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY29tbWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGhpcy5fZ2V0VmFsdWUoKSBhcyBzdHJpbmcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICBjb21taXR0ZXI6IEF0dHJpYnV0ZUNvbW1pdHRlcjtcbiAgdmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoY29taXR0ZXI6IEF0dHJpYnV0ZUNvbW1pdHRlcikge1xuICAgIHRoaXMuY29tbWl0dGVyID0gY29taXR0ZXI7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UgJiYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdmFsdWUgIT09IHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYSBub3QgYSBkaXJlY3RpdmUsIGRpcnR5IHRoZSBjb21taXR0ZXIgc28gdGhhdCBpdCdsbFxuICAgICAgLy8gY2FsbCBzZXRBdHRyaWJ1dGUuIElmIHRoZSB2YWx1ZSBpcyBhIGRpcmVjdGl2ZSwgaXQnbGwgZGlydHkgdGhlXG4gICAgICAvLyBjb21taXR0ZXIgaWYgaXQgY2FsbHMgc2V0VmFsdWUoKS5cbiAgICAgIGlmICghaXNEaXJlY3RpdmUodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY29tbWl0dGVyLmRpcnR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb21taXR0ZXIuY29tbWl0KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIG9wdGlvbnM6IFJlbmRlck9wdGlvbnM7XG4gIHN0YXJ0Tm9kZSE6IE5vZGU7XG4gIGVuZE5vZGUhOiBOb2RlO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIHRoaXMgcGFydCBpbnRvIGEgY29udGFpbmVyLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGFwcGVuZEludG8oY29udGFpbmVyOiBOb2RlKSB7XG4gICAgdGhpcy5zdGFydE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICAgIHRoaXMuZW5kTm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYmV0d2VlbiBgcmVmYCBhbmQgYHJlZmAncyBuZXh0IHNpYmxpbmcuIEJvdGggYHJlZmAgYW5kXG4gICAqIGl0cyBuZXh0IHNpYmxpbmcgbXVzdCBiZSBzdGF0aWMsIHVuY2hhbmdpbmcgbm9kZXMgc3VjaCBhcyB0aG9zZSB0aGF0IGFwcGVhclxuICAgKiBpbiBhIGxpdGVyYWwgc2VjdGlvbiBvZiBhIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGluc2VydEFmdGVyTm9kZShyZWY6IE5vZGUpIHtcbiAgICB0aGlzLnN0YXJ0Tm9kZSA9IHJlZjtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYubmV4dFNpYmxpbmchO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBwYXJlbnQgcGFydC5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBhcHBlbmRJbnRvUGFydChwYXJ0OiBOb2RlUGFydCkge1xuICAgIHBhcnQuX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICBwYXJ0Ll9pbnNlcnQodGhpcy5lbmROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGFmdGVyIGByZWZgXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgaW5zZXJ0QWZ0ZXJQYXJ0KHJlZjogTm9kZVBhcnQpIHtcbiAgICByZWYuX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICByZWYuZW5kTm9kZSA9IHRoaXMuc3RhcnROb2RlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgdGhpcy5fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICB0aGlzLl9jb21taXROb2RlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICh2YWx1ZSBhcyBhbnkpW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgIHRoaXMuX2NvbW1pdEl0ZXJhYmxlKHZhbHVlIGFzIEl0ZXJhYmxlPHVua25vd24+KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBub3RoaW5nKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbm90aGluZztcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luc2VydChub2RlOiBOb2RlKSB7XG4gICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmVuZE5vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tbWl0Tm9kZSh2YWx1ZTogTm9kZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5faW5zZXJ0KHZhbHVlKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9jb21taXRUZXh0KHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhcnROb2RlLm5leHRTaWJsaW5nITtcbiAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSB0ZXh0IG5vZGUgYmV0d2VlbiB0aGUgbWFya2Vycywgd2UgY2FuIGp1c3RcbiAgICAgIC8vIHNldCBpdHMgdmFsdWUsIHJhdGhlciB0aGFuIHJlcGxhY2luZyBpdC5cbiAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IENhbiB3ZSBqdXN0IGNoZWNrIGlmIHRoaXMudmFsdWUgaXMgcHJpbWl0aXZlP1xuICAgICAgKG5vZGUgYXMgVGV4dCkuZGF0YSA9IHZhbHVlIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tbWl0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpKSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlOiBUZW1wbGF0ZVJlc3VsdCk6IHZvaWQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlICYmXG4gICAgICAgIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgcHJvcGFnYXRlIHRoZSB0ZW1wbGF0ZSBwcm9jZXNzb3IgZnJvbSB0aGUgVGVtcGxhdGVSZXN1bHRcbiAgICAgIC8vIHNvIHRoYXQgd2UgdXNlIGl0cyBzeW50YXggZXh0ZW5zaW9uLCBldGMuIFRoZSB0ZW1wbGF0ZSBmYWN0b3J5IGNvbWVzXG4gICAgICAvLyBmcm9tIHRoZSByZW5kZXIgZnVuY3Rpb24gb3B0aW9ucyBzbyB0aGF0IGl0IGNhbiBjb250cm9sIHRlbXBsYXRlXG4gICAgICAvLyBjYWNoaW5nIGFuZCBwcmVwcm9jZXNzaW5nLlxuICAgICAgY29uc3QgaW5zdGFuY2UgPVxuICAgICAgICAgIG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB2YWx1ZS5wcm9jZXNzb3IsIHRoaXMub3B0aW9ucyk7XG4gICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSgpO1xuICAgICAgaW5zdGFuY2UudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICB0aGlzLl9jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgIHRoaXMudmFsdWUgPSBpbnN0YW5jZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21taXRJdGVyYWJsZSh2YWx1ZTogSXRlcmFibGU8dW5rbm93bj4pOiB2b2lkIHtcbiAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG5cbiAgICAvLyBJZiBfdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAvLyBpdGVyYWJsZSBhbmQgX3ZhbHVlIHdpbGwgY29udGFpbiB0aGUgTm9kZVBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgLy8gcmVuZGVyLiBJZiBfdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAvLyBhcnJheSBmb3IgTm9kZVBhcnRzLlxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLnZhbHVlIGFzIE5vZGVQYXJ0W107XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IGl0ZW1QYXJ0OiBOb2RlUGFydHx1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgIC8vIFRyeSB0byByZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuXG4gICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICBpZiAoaXRlbVBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpdGVtUGFydHMucHVzaChpdGVtUGFydCk7XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPT09IDApIHtcbiAgICAgICAgICBpdGVtUGFydC5hcHBlbmRJbnRvUGFydCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtUGFydC5pbnNlcnRBZnRlclBhcnQoaXRlbVBhcnRzW3BhcnRJbmRleCAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICBpdGVtUGFydC5jb21taXQoKTtcbiAgICAgIHBhcnRJbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgdGhpcy5jbGVhcihpdGVtUGFydCAmJiBpdGVtUGFydCEuZW5kTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoc3RhcnROb2RlOiBOb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICByZW1vdmVOb2RlcyhcbiAgICAgICAgdGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSEsIHN0YXJ0Tm9kZS5uZXh0U2libGluZyEsIHRoaXMuZW5kTm9kZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0cmluZ3M6IHN0cmluZ1tdO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHN0cmluZ3MubGVuZ3RoICE9PSAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0Jvb2xlYW4gYXR0cmlidXRlcyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb24nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSAhIXRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgc2luZ2xlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10pIHtcbiAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICB0aGlzLnNpbmdsZSA9XG4gICAgICAgIChzdHJpbmdzLmxlbmd0aCA9PT0gMiAmJiBzdHJpbmdzWzBdID09PSAnJyAmJiBzdHJpbmdzWzFdID09PSAnJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NyZWF0ZVBhcnQoKTogUHJvcGVydHlQYXJ0IHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5UGFydCh0aGlzKTtcbiAgfVxuXG4gIF9nZXRWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5zaW5nbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnRzWzBdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuX2dldFZhbHVlKCk7XG4gIH1cblxuICBjb21taXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICh0aGlzLmVsZW1lbnQgYXMgYW55KVt0aGlzLm5hbWVdID0gdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge31cblxuLy8gRGV0ZWN0IGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgc3VwcG9ydC4gSWYgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eSBpcyByZWFkXG4vLyBmcm9tIHRoZSBvcHRpb25zIG9iamVjdCwgdGhlbiBvcHRpb25zIGFyZSBzdXBwb3J0ZWQuIElmIG5vdCwgdGhlbiB0aGUgdGhyaWRcbi8vIGFyZ3VtZW50IHRvIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyIGlzIGludGVycHJldGVkIGFzIHRoZSBib29sZWFuIGNhcHR1cmVcbi8vIHZhbHVlIHNvIHdlIHNob3VsZCBvbmx5IHBhc3MgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eS5cbmxldCBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSBmYWxzZTtcblxudHJ5IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBnZXQgY2FwdHVyZSgpIHtcbiAgICAgIGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucyBhcyBhbnksIG9wdGlvbnMpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucyBhcyBhbnksIG9wdGlvbnMpO1xufSBjYXRjaCAoX2UpIHtcbn1cblxuXG50eXBlIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID1cbiAgICBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0JlBhcnRpYWw8QWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM+O1xuZXhwb3J0IGNsYXNzIEV2ZW50UGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBldmVudE5hbWU6IHN0cmluZztcbiAgZXZlbnRDb250ZXh0PzogRXZlbnRUYXJnZXQ7XG4gIHZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIF9vcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM7XG4gIF9wZW5kaW5nVmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgX2JvdW5kSGFuZGxlRXZlbnQ6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50Q29udGV4dD86IEV2ZW50VGFyZ2V0KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICB0aGlzLmV2ZW50Q29udGV4dCA9IGV2ZW50Q29udGV4dDtcbiAgICB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50ID0gKGUpID0+IHRoaXMuaGFuZGxlRXZlbnQoZSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlIGFzIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0xpc3RlbmVyID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IG5ld0xpc3RlbmVyID09IG51bGwgfHxcbiAgICAgICAgb2xkTGlzdGVuZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgKG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09IG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PSBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT0gb2xkTGlzdGVuZXIucGFzc2l2ZSk7XG4gICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPVxuICAgICAgICBuZXdMaXN0ZW5lciAhPSBudWxsICYmIChvbGRMaXN0ZW5lciA9PSBudWxsIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcblxuICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdGhpcy5ldmVudE5hbWUsIHRoaXMuX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX29wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBnZXRPcHRpb25zKG5ld0xpc3RlbmVyKTtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHRoaXMuZXZlbnROYW1lLCB0aGlzLl9ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9vcHRpb25zKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlIGFzIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnZhbHVlLmNhbGwodGhpcy5ldmVudENvbnRleHQgfHwgdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLnZhbHVlIGFzIEV2ZW50TGlzdGVuZXJPYmplY3QpLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gV2UgY29weSBvcHRpb25zIGJlY2F1c2Ugb2YgdGhlIGluY29uc2lzdGVudCBiZWhhdmlvciBvZiBicm93c2VycyB3aGVuIHJlYWRpbmdcbi8vIHRoZSB0aGlyZCBhcmd1bWVudCBvZiBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lci4gSUUxMSBkb2Vzbid0IHN1cHBvcnQgb3B0aW9uc1xuLy8gYXQgYWxsLiBDaHJvbWUgNDEgb25seSByZWFkcyBgY2FwdHVyZWAgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIG9iamVjdC5cbmNvbnN0IGdldE9wdGlvbnMgPSAobzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnN8dW5kZWZpbmVkKSA9PiBvICYmXG4gICAgKGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA/XG4gICAgICAgICB7Y2FwdHVyZTogby5jYXB0dXJlLCBwYXNzaXZlOiBvLnBhc3NpdmUsIG9uY2U6IG8ub25jZX0gOlxuICAgICAgICAgby5jYXB0dXJlIGFzIEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtOb2RlUGFydH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHt0ZW1wbGF0ZUZhY3Rvcnl9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbmV4cG9ydCBjb25zdCBwYXJ0cyA9IG5ldyBXZWFrTWFwPE5vZGUsIE5vZGVQYXJ0PigpO1xuXG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgYSBUZW1wbGF0ZVJlc3VsdCBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWcgbGlrZVxuICogICAgIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBSZW5kZXJPcHRpb25zIGZvciB0aGUgZW50aXJlIHJlbmRlciB0cmVlIHJlbmRlcmVkIHRvIHRoaXNcbiAqICAgICBjb250YWluZXIuIFJlbmRlciBvcHRpb25zIG11c3QgKm5vdCogY2hhbmdlIGJldHdlZW4gcmVuZGVycyB0byB0aGUgc2FtZVxuICogICAgIGNvbnRhaW5lciwgYXMgdGhvc2UgY2hhbmdlcyB3aWxsIG5vdCBlZmZlY3QgcHJldmlvdXNseSByZW5kZXJlZCBET00uXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPVxuICAgIChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LFxuICAgICBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudCxcbiAgICAgb3B0aW9ucz86IFBhcnRpYWw8UmVuZGVyT3B0aW9ucz4pID0+IHtcbiAgICAgIGxldCBwYXJ0ID0gcGFydHMuZ2V0KGNvbnRhaW5lcik7XG4gICAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKGNvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0ID0gbmV3IE5vZGVQYXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICBwYXJ0LmFwcGVuZEludG8oY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICAgIHBhcnQuc2V0VmFsdWUocmVzdWx0KTtcbiAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBNb2R1bGUgdG8gYWRkIHNoYWR5IERPTS9zaGFkeSBDU1MgcG9seWZpbGwgc3VwcG9ydCB0byBsaXQtaHRtbCB0ZW1wbGF0ZVxuICogcmVuZGVyaW5nLiBTZWUgdGhlIFtbcmVuZGVyXV0gbWV0aG9kIGZvciBkZXRhaWxzLlxuICpcbiAqIEBtb2R1bGUgc2hhZHktcmVuZGVyXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqXG4gKiBEbyBub3QgcmVtb3ZlIHRoaXMgY29tbWVudDsgaXQga2VlcHMgdHlwZWRvYyBmcm9tIG1pc3BsYWNpbmcgdGhlIG1vZHVsZVxuICogZG9jcy5cbiAqL1xuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtpbnNlcnROb2RlSW50b1RlbXBsYXRlLCByZW1vdmVOb2Rlc0Zyb21UZW1wbGF0ZX0gZnJvbSAnLi9tb2RpZnktdGVtcGxhdGUuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7cGFydHMsIHJlbmRlciBhcyBsaXRSZW5kZXJ9IGZyb20gJy4vcmVuZGVyLmpzJztcbmltcG9ydCB7dGVtcGxhdGVDYWNoZXN9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHttYXJrZXIsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuZXhwb3J0IHtodG1sLCBzdmcsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbi8vIEdldCBhIGtleSB0byBsb29rdXAgaW4gYHRlbXBsYXRlQ2FjaGVzYC5cbmNvbnN0IGdldFRlbXBsYXRlQ2FjaGVLZXkgPSAodHlwZTogc3RyaW5nLCBzY29wZU5hbWU6IHN0cmluZykgPT5cbiAgICBgJHt0eXBlfS0tJHtzY29wZU5hbWV9YDtcblxubGV0IGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gPSB0cnVlO1xuXG5pZiAodHlwZW9mIHdpbmRvdy5TaGFkeUNTUyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiA9IGZhbHNlO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZURvbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc29sZS53YXJuKFxuICAgICAgYEluY29tcGF0aWJsZSBTaGFkeUNTUyB2ZXJzaW9uIGRldGVjdGVkLmAgK1xuICAgICAgYFBsZWFzZSB1cGRhdGUgdG8gYXQgbGVhc3QgQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzQDIuMC4yIGFuZGAgK1xuICAgICAgYEB3ZWJjb21wb25lbnRzL3NoYWR5Y3NzQDEuMy4xLmApO1xuICBjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uID0gZmFsc2U7XG59XG5cbi8qKlxuICogVGVtcGxhdGUgZmFjdG9yeSB3aGljaCBzY29wZXMgdGVtcGxhdGUgRE9NIHVzaW5nIFNoYWR5Q1NTLlxuICogQHBhcmFtIHNjb3BlTmFtZSB7c3RyaW5nfVxuICovXG5jb25zdCBzaGFkeVRlbXBsYXRlRmFjdG9yeSA9IChzY29wZU5hbWU6IHN0cmluZykgPT5cbiAgICAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRUZW1wbGF0ZUNhY2hlS2V5KHJlc3VsdC50eXBlLCBzY29wZU5hbWUpO1xuICAgICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQoY2FjaGVLZXkpO1xuICAgICAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlID0ge1xuICAgICAgICAgIHN0cmluZ3NBcnJheTogbmV3IFdlYWtNYXA8VGVtcGxhdGVTdHJpbmdzQXJyYXksIFRlbXBsYXRlPigpLFxuICAgICAgICAgIGtleVN0cmluZzogbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlPigpXG4gICAgICAgIH07XG4gICAgICAgIHRlbXBsYXRlQ2FjaGVzLnNldChjYWNoZUtleSwgdGVtcGxhdGVDYWNoZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICBpZiAodGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcbiAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gICAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBpZiAoY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbikge1xuICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUyEucHJlcGFyZVRlbXBsYXRlRG9tKGVsZW1lbnQsIHNjb3BlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCBlbGVtZW50KTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfTtcblxuY29uc3QgVEVNUExBVEVfVFlQRVMgPSBbJ2h0bWwnLCAnc3ZnJ107XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgc3R5bGUgZWxlbWVudHMgZnJvbSBUZW1wbGF0ZXMgZm9yIHRoZSBnaXZlbiBzY29wZU5hbWUuXG4gKi9cbmNvbnN0IHJlbW92ZVN0eWxlc0Zyb21MaXRUZW1wbGF0ZXMgPSAoc2NvcGVOYW1lOiBzdHJpbmcpID0+IHtcbiAgVEVNUExBVEVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlcyA9IHRlbXBsYXRlQ2FjaGVzLmdldChnZXRUZW1wbGF0ZUNhY2hlS2V5KHR5cGUsIHNjb3BlTmFtZSkpO1xuICAgIGlmICh0ZW1wbGF0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGVtcGxhdGVzLmtleVN0cmluZy5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB7ZWxlbWVudDoge2NvbnRlbnR9fSA9IHRlbXBsYXRlO1xuICAgICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgdGhlIGl0ZXJhYmxlIHBhcmFtIFNldCBjb25zdHJ1Y3RvclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBuZXcgU2V0PEVsZW1lbnQ+KCk7XG4gICAgICAgIEFycmF5LmZyb20oY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZScpKS5mb3JFYWNoKChzOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgc3R5bGVzLmFkZChzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCBzdHlsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHNoYWR5UmVuZGVyU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbi8qKlxuICogRm9yIHRoZSBnaXZlbiBzY29wZSBuYW1lLCBlbnN1cmVzIHRoYXQgU2hhZHlDU1Mgc3R5bGUgc2NvcGluZyBpcyBwZXJmb3JtZWQuXG4gKiBUaGlzIGlzIGRvbmUganVzdCBvbmNlIHBlciBzY29wZSBuYW1lIHNvIHRoZSBmcmFnbWVudCBhbmQgdGVtcGxhdGUgY2Fubm90XG4gKiBiZSBtb2RpZmllZC5cbiAqICgxKSBleHRyYWN0cyBzdHlsZXMgZnJvbSB0aGUgcmVuZGVyZWQgZnJhZ21lbnQgYW5kIGhhbmRzIHRoZW0gdG8gU2hhZHlDU1NcbiAqIHRvIGJlIHNjb3BlZCBhbmQgYXBwZW5kZWQgdG8gdGhlIGRvY3VtZW50XG4gKiAoMikgcmVtb3ZlcyBzdHlsZSBlbGVtZW50cyBmcm9tIGFsbCBsaXQtaHRtbCBUZW1wbGF0ZXMgZm9yIHRoaXMgc2NvcGUgbmFtZS5cbiAqXG4gKiBOb3RlLCA8c3R5bGU+IGVsZW1lbnRzIGNhbiBvbmx5IGJlIHBsYWNlZCBpbnRvIHRlbXBsYXRlcyBmb3IgdGhlXG4gKiBpbml0aWFsIHJlbmRlcmluZyBvZiB0aGUgc2NvcGUuIElmIDxzdHlsZT4gZWxlbWVudHMgYXJlIGluY2x1ZGVkIGluIHRlbXBsYXRlc1xuICogZHluYW1pY2FsbHkgcmVuZGVyZWQgdG8gdGhlIHNjb3BlIChhZnRlciB0aGUgZmlyc3Qgc2NvcGUgcmVuZGVyKSwgdGhleSB3aWxsXG4gKiBub3QgYmUgc2NvcGVkIGFuZCB0aGUgPHN0eWxlPiB3aWxsIGJlIGxlZnQgaW4gdGhlIHRlbXBsYXRlIGFuZCByZW5kZXJlZFxuICogb3V0cHV0LlxuICovXG5jb25zdCBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgPVxuICAgIChyZW5kZXJlZERPTTogRG9jdW1lbnRGcmFnbWVudCwgdGVtcGxhdGU6IFRlbXBsYXRlLCBzY29wZU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgc2hhZHlSZW5kZXJTZXQuYWRkKHNjb3BlTmFtZSk7XG4gICAgICAvLyBNb3ZlIHN0eWxlcyBvdXQgb2YgcmVuZGVyZWQgRE9NIGFuZCBzdG9yZS5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHJlbmRlcmVkRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJyk7XG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gc3R5bGVzLCBza2lwIHVubmVjZXNzYXJ5IHdvcmtcbiAgICAgIGlmIChzdHlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEVuc3VyZSBwcmVwYXJlVGVtcGxhdGVTdHlsZXMgaXMgY2FsbGVkIHRvIHN1cHBvcnQgYWRkaW5nXG4gICAgICAgIC8vIHN0eWxlcyB2aWEgYHByZXBhcmVBZG9wdGVkQ3NzVGV4dGAgc2luY2UgdGhhdCByZXF1aXJlcyB0aGF0XG4gICAgICAgIC8vIGBwcmVwYXJlVGVtcGxhdGVTdHlsZXNgIGlzIGNhbGxlZC5cbiAgICAgICAgd2luZG93LlNoYWR5Q1NTIS5wcmVwYXJlVGVtcGxhdGVTdHlsZXModGVtcGxhdGUuZWxlbWVudCwgc2NvcGVOYW1lKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29uZGVuc2VkU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgLy8gQ29sbGVjdCBzdHlsZXMgaW50byBhIHNpbmdsZSBzdHlsZS4gVGhpcyBoZWxwcyB1cyBtYWtlIHN1cmUgU2hhZHlDU1NcbiAgICAgIC8vIG1hbmlwdWxhdGlvbnMgd2lsbCBub3QgcHJldmVudCB1cyBmcm9tIGJlaW5nIGFibGUgdG8gZml4IHVwIHRlbXBsYXRlXG4gICAgICAvLyBwYXJ0IGluZGljZXMuXG4gICAgICAvLyBOT1RFOiBjb2xsZWN0aW5nIHN0eWxlcyBpcyBpbmVmZmljaWVudCBmb3IgYnJvd3NlcnMgYnV0IFNoYWR5Q1NTXG4gICAgICAvLyBjdXJyZW50bHkgZG9lcyB0aGlzIGFueXdheS4gV2hlbiBpdCBkb2VzIG5vdCwgdGhpcyBzaG91bGQgYmUgY2hhbmdlZC5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzW2ldO1xuICAgICAgICBzdHlsZS5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgIGNvbmRlbnNlZFN0eWxlLnRleHRDb250ZW50ISArPSBzdHlsZS50ZXh0Q29udGVudDtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSBzdHlsZXMgZnJvbSBuZXN0ZWQgdGVtcGxhdGVzIGluIHRoaXMgc2NvcGUuXG4gICAgICByZW1vdmVTdHlsZXNGcm9tTGl0VGVtcGxhdGVzKHNjb3BlTmFtZSk7XG4gICAgICAvLyBBbmQgdGhlbiBwdXQgdGhlIGNvbmRlbnNlZCBzdHlsZSBpbnRvIHRoZSBcInJvb3RcIiB0ZW1wbGF0ZSBwYXNzZWQgaW4gYXNcbiAgICAgIC8vIGB0ZW1wbGF0ZWAuXG4gICAgICBpbnNlcnROb2RlSW50b1RlbXBsYXRlKFxuICAgICAgICAgIHRlbXBsYXRlLCBjb25kZW5zZWRTdHlsZSwgdGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdGhhdCBTaGFkeUNTUyBnZXRzIHRoZSB0ZW1wbGF0ZSB0aGF0IGBsaXQtaHRtbGBcbiAgICAgIC8vIHdpbGwgYWN0dWFsbHkgcmVuZGVyIHNvIHRoYXQgaXQgY2FuIHVwZGF0ZSB0aGUgc3R5bGUgaW5zaWRlIHdoZW5cbiAgICAgIC8vIG5lZWRlZCAoZS5nLiBAYXBwbHkgbmF0aXZlIFNoYWRvdyBET00gY2FzZSkuXG4gICAgICB3aW5kb3cuU2hhZHlDU1MhLnByZXBhcmVUZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZS5lbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgaWYgKHdpbmRvdy5TaGFkeUNTUyEubmF0aXZlU2hhZG93KSB7XG4gICAgICAgIC8vIFdoZW4gaW4gbmF0aXZlIFNoYWRvdyBET00sIHJlLWFkZCBzdHlsaW5nIHRvIHJlbmRlcmVkIGNvbnRlbnQgdXNpbmdcbiAgICAgICAgLy8gdGhlIHN0eWxlIFNoYWR5Q1NTIHByb2R1Y2VkLlxuICAgICAgICBjb25zdCBzdHlsZSA9IHRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpITtcbiAgICAgICAgcmVuZGVyZWRET00uaW5zZXJ0QmVmb3JlKHN0eWxlLmNsb25lTm9kZSh0cnVlKSwgcmVuZGVyZWRET00uZmlyc3RDaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXaGVuIG5vdCBpbiBuYXRpdmUgU2hhZG93IERPTSwgYXQgdGhpcyBwb2ludCBTaGFkeUNTUyB3aWxsIGhhdmVcbiAgICAgICAgLy8gcmVtb3ZlZCB0aGUgc3R5bGUgZnJvbSB0aGUgbGl0IHRlbXBsYXRlIGFuZCBwYXJ0cyB3aWxsIGJlIGJyb2tlbiBhcyBhXG4gICAgICAgIC8vIHJlc3VsdC4gVG8gZml4IHRoaXMsIHdlIHB1dCBiYWNrIHRoZSBzdHlsZSBub2RlIFNoYWR5Q1NTIHJlbW92ZWRcbiAgICAgICAgLy8gYW5kIHRoZW4gdGVsbCBsaXQgdG8gcmVtb3ZlIHRoYXQgbm9kZSBmcm9tIHRoZSB0ZW1wbGF0ZS5cbiAgICAgICAgLy8gTk9URSwgU2hhZHlDU1MgY3JlYXRlcyBpdHMgb3duIHN0eWxlIHNvIHdlIGNhbiBzYWZlbHkgYWRkL3JlbW92ZVxuICAgICAgICAvLyBgY29uZGVuc2VkU3R5bGVgIGhlcmUuXG4gICAgICAgIHRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBjb25kZW5zZWRTdHlsZSwgdGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICBjb25zdCByZW1vdmVzID0gbmV3IFNldCgpO1xuICAgICAgICByZW1vdmVzLmFkZChjb25kZW5zZWRTdHlsZSk7XG4gICAgICAgIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKHRlbXBsYXRlLCByZW1vdmVzKTtcbiAgICAgIH1cbiAgICB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNoYWR5UmVuZGVyT3B0aW9ucyBleHRlbmRzIFBhcnRpYWw8UmVuZGVyT3B0aW9ucz4ge1xuICBzY29wZU5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBFeHRlbnNpb24gdG8gdGhlIHN0YW5kYXJkIGByZW5kZXJgIG1ldGhvZCB3aGljaCBzdXBwb3J0cyByZW5kZXJpbmdcbiAqIHRvIFNoYWRvd1Jvb3RzIHdoZW4gdGhlIFNoYWR5RE9NIChodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9zaGFkeWRvbSlcbiAqIGFuZCBTaGFkeUNTUyAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHljc3MpIHBvbHlmaWxscyBhcmUgdXNlZFxuICogb3Igd2hlbiB0aGUgd2ViY29tcG9uZW50c2pzXG4gKiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzKSBwb2x5ZmlsbCBpcyB1c2VkLlxuICpcbiAqIEFkZHMgYSBgc2NvcGVOYW1lYCBvcHRpb24gd2hpY2ggaXMgdXNlZCB0byBzY29wZSBlbGVtZW50IERPTSBhbmQgc3R5bGVzaGVldHNcbiAqIHdoZW4gbmF0aXZlIFNoYWRvd0RPTSBpcyB1bmF2YWlsYWJsZS4gVGhlIGBzY29wZU5hbWVgIHdpbGwgYmUgYWRkZWQgdG9cbiAqIHRoZSBjbGFzcyBhdHRyaWJ1dGUgb2YgYWxsIHJlbmRlcmVkIERPTS4gSW4gYWRkaXRpb24sIGFueSBzdHlsZSBlbGVtZW50cyB3aWxsXG4gKiBiZSBhdXRvbWF0aWNhbGx5IHJlLXdyaXR0ZW4gd2l0aCB0aGlzIGBzY29wZU5hbWVgIHNlbGVjdG9yIGFuZCBtb3ZlZCBvdXRcbiAqIG9mIHRoZSByZW5kZXJlZCBET00gYW5kIGludG8gdGhlIGRvY3VtZW50IGA8aGVhZD5gLlxuICpcbiAqIEl0IGlzIGNvbW1vbiB0byB1c2UgdGhpcyByZW5kZXIgbWV0aG9kIGluIGNvbmp1bmN0aW9uIHdpdGggYSBjdXN0b20gZWxlbWVudFxuICogd2hpY2ggcmVuZGVycyBhIHNoYWRvd1Jvb3QuIFdoZW4gdGhpcyBpcyBkb25lLCB0eXBpY2FsbHkgdGhlIGVsZW1lbnQnc1xuICogYGxvY2FsTmFtZWAgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIGBzY29wZU5hbWVgLlxuICpcbiAqIEluIGFkZGl0aW9uIHRvIERPTSBzY29waW5nLCBTaGFkeUNTUyBhbHNvIHN1cHBvcnRzIGEgYmFzaWMgc2hpbSBmb3IgY3NzXG4gKiBjdXN0b20gcHJvcGVydGllcyAobmVlZGVkIG9ubHkgb24gb2xkZXIgYnJvd3NlcnMgbGlrZSBJRTExKSBhbmQgYSBzaGltIGZvclxuICogYSBkZXByZWNhdGVkIGZlYXR1cmUgY2FsbGVkIGBAYXBwbHlgIHRoYXQgc3VwcG9ydHMgYXBwbHlpbmcgYSBzZXQgb2YgY3NzXG4gKiBjdXN0b20gcHJvcGVydGllcyB0byBhIGdpdmVuIGxvY2F0aW9uLlxuICpcbiAqIFVzYWdlIGNvbnNpZGVyYXRpb25zOlxuICpcbiAqICogUGFydCB2YWx1ZXMgaW4gYDxzdHlsZT5gIGVsZW1lbnRzIGFyZSBvbmx5IGFwcGxpZWQgdGhlIGZpcnN0IHRpbWUgYSBnaXZlblxuICogYHNjb3BlTmFtZWAgcmVuZGVycy4gU3Vic2VxdWVudCBjaGFuZ2VzIHRvIHBhcnRzIGluIHN0eWxlIGVsZW1lbnRzIHdpbGwgaGF2ZVxuICogbm8gZWZmZWN0LiBCZWNhdXNlIG9mIHRoaXMsIHBhcnRzIGluIHN0eWxlIGVsZW1lbnRzIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yXG4gKiB2YWx1ZXMgdGhhdCB3aWxsIG5ldmVyIGNoYW5nZSwgZm9yIGV4YW1wbGUgcGFydHMgdGhhdCBzZXQgc2NvcGUtd2lkZSB0aGVtZVxuICogdmFsdWVzIG9yIHBhcnRzIHdoaWNoIHJlbmRlciBzaGFyZWQgc3R5bGUgZWxlbWVudHMuXG4gKlxuICogKiBOb3RlLCBkdWUgdG8gYSBsaW1pdGF0aW9uIG9mIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgcmVuZGVyaW5nIGluIGFcbiAqIGN1c3RvbSBlbGVtZW50J3MgYGNvbnN0cnVjdG9yYCBpcyBub3Qgc3VwcG9ydGVkLiBJbnN0ZWFkIHJlbmRlcmluZyBzaG91bGRcbiAqIGVpdGhlciBkb25lIGFzeW5jaHJvbm91c2x5LCBmb3IgZXhhbXBsZSBhdCBtaWNyb3Rhc2sgdGltaW5nIChmb3IgZXhhbXBsZVxuICogYFByb21pc2UucmVzb2x2ZSgpYCksIG9yIGJlIGRlZmVycmVkIHVudGlsIHRoZSBmaXJzdCB0aW1lIHRoZSBlbGVtZW50J3NcbiAqIGBjb25uZWN0ZWRDYWxsYmFja2AgcnVucy5cbiAqXG4gKiBVc2FnZSBjb25zaWRlcmF0aW9ucyB3aGVuIHVzaW5nIHNoaW1tZWQgY3VzdG9tIHByb3BlcnRpZXMgb3IgYEBhcHBseWA6XG4gKlxuICogKiBXaGVuZXZlciBhbnkgZHluYW1pYyBjaGFuZ2VzIGFyZSBtYWRlIHdoaWNoIGFmZmVjdFxuICogY3NzIGN1c3RvbSBwcm9wZXJ0aWVzLCBgU2hhZHlDU1Muc3R5bGVFbGVtZW50KGVsZW1lbnQpYCBtdXN0IGJlIGNhbGxlZFxuICogdG8gdXBkYXRlIHRoZSBlbGVtZW50LiBUaGVyZSBhcmUgdHdvIGNhc2VzIHdoZW4gdGhpcyBpcyBuZWVkZWQ6XG4gKiAoMSkgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIGEgbmV3IHBhcmVudCwgKDIpIGEgY2xhc3MgaXMgYWRkZWQgdG8gdGhlXG4gKiBlbGVtZW50IHRoYXQgY2F1c2VzIGl0IHRvIG1hdGNoIGRpZmZlcmVudCBjdXN0b20gcHJvcGVydGllcy5cbiAqIFRvIGFkZHJlc3MgdGhlIGZpcnN0IGNhc2Ugd2hlbiByZW5kZXJpbmcgYSBjdXN0b20gZWxlbWVudCwgYHN0eWxlRWxlbWVudGBcbiAqIHNob3VsZCBiZSBjYWxsZWQgaW4gdGhlIGVsZW1lbnQncyBgY29ubmVjdGVkQ2FsbGJhY2tgLlxuICpcbiAqICogU2hpbW1lZCBjdXN0b20gcHJvcGVydGllcyBtYXkgb25seSBiZSBkZWZpbmVkIGVpdGhlciBmb3IgYW4gZW50aXJlXG4gKiBzaGFkb3dSb290IChmb3IgZXhhbXBsZSwgaW4gYSBgOmhvc3RgIHJ1bGUpIG9yIHZpYSBhIHJ1bGUgdGhhdCBkaXJlY3RseVxuICogbWF0Y2hlcyBhbiBlbGVtZW50IHdpdGggYSBzaGFkb3dSb290LiBJbiBvdGhlciB3b3JkcywgaW5zdGVhZCBvZiBmbG93aW5nIGZyb21cbiAqIHBhcmVudCB0byBjaGlsZCBhcyBkbyBuYXRpdmUgY3NzIGN1c3RvbSBwcm9wZXJ0aWVzLCBzaGltbWVkIGN1c3RvbSBwcm9wZXJ0aWVzXG4gKiBmbG93IG9ubHkgZnJvbSBzaGFkb3dSb290cyB0byBuZXN0ZWQgc2hhZG93Um9vdHMuXG4gKlxuICogKiBXaGVuIHVzaW5nIGBAYXBwbHlgIG1peGluZyBjc3Mgc2hvcnRoYW5kIHByb3BlcnR5IG5hbWVzIHdpdGhcbiAqIG5vbi1zaG9ydGhhbmQgbmFtZXMgKGZvciBleGFtcGxlIGBib3JkZXJgIGFuZCBgYm9yZGVyLXdpZHRoYCkgaXMgbm90XG4gKiBzdXBwb3J0ZWQuXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPVxuICAgIChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LFxuICAgICBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudCxcbiAgICAgb3B0aW9uczogU2hhZHlSZW5kZXJPcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBzY29wZU5hbWUgPSBvcHRpb25zLnNjb3BlTmFtZTtcbiAgICAgIGNvbnN0IGhhc1JlbmRlcmVkID0gcGFydHMuaGFzKGNvbnRhaW5lcik7XG4gICAgICBjb25zdCBuZWVkc1Njb3BpbmcgPSBjb250YWluZXIgaW5zdGFuY2VvZiBTaGFkb3dSb290ICYmXG4gICAgICAgICAgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiAmJiByZXN1bHQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdDtcbiAgICAgIC8vIEhhbmRsZSBmaXJzdCByZW5kZXIgdG8gYSBzY29wZSBzcGVjaWFsbHkuLi5cbiAgICAgIGNvbnN0IGZpcnN0U2NvcGVSZW5kZXIgPSBuZWVkc1Njb3BpbmcgJiYgIXNoYWR5UmVuZGVyU2V0LmhhcyhzY29wZU5hbWUpO1xuICAgICAgLy8gT24gZmlyc3Qgc2NvcGUgcmVuZGVyLCByZW5kZXIgaW50byBhIGZyYWdtZW50OyB0aGlzIGNhbm5vdCBiZSBhIHNpbmdsZVxuICAgICAgLy8gZnJhZ21lbnQgdGhhdCBpcyByZXVzZWQgc2luY2UgbmVzdGVkIHJlbmRlcnMgY2FuIG9jY3VyIHN5bmNocm9ub3VzbHkuXG4gICAgICBjb25zdCByZW5kZXJDb250YWluZXIgPVxuICAgICAgICAgIGZpcnN0U2NvcGVSZW5kZXIgPyBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkgOiBjb250YWluZXI7XG4gICAgICBsaXRSZW5kZXIoXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIHJlbmRlckNvbnRhaW5lcixcbiAgICAgICAgICB7dGVtcGxhdGVGYWN0b3J5OiBzaGFkeVRlbXBsYXRlRmFjdG9yeShzY29wZU5hbWUpLCAuLi5vcHRpb25zfSBhc1xuICAgICAgICAgICAgICBSZW5kZXJPcHRpb25zKTtcbiAgICAgIC8vIFdoZW4gcGVyZm9ybWluZyBmaXJzdCBzY29wZSByZW5kZXIsXG4gICAgICAvLyAoMSkgV2UndmUgcmVuZGVyZWQgaW50byBhIGZyYWdtZW50IHNvIHRoYXQgdGhlcmUncyBhIGNoYW5jZSB0b1xuICAgICAgLy8gYHByZXBhcmVUZW1wbGF0ZVN0eWxlc2AgYmVmb3JlIHN1Yi1lbGVtZW50cyBoaXQgdGhlIERPTVxuICAgICAgLy8gKHdoaWNoIG1pZ2h0IGNhdXNlIHRoZW0gdG8gcmVuZGVyIGJhc2VkIG9uIGEgY29tbW9uIHBhdHRlcm4gb2ZcbiAgICAgIC8vIHJlbmRlcmluZyBpbiBhIGN1c3RvbSBlbGVtZW50J3MgYGNvbm5lY3RlZENhbGxiYWNrYCk7XG4gICAgICAvLyAoMikgU2NvcGUgdGhlIHRlbXBsYXRlIHdpdGggU2hhZHlDU1Mgb25lIHRpbWUgb25seSBmb3IgdGhpcyBzY29wZS5cbiAgICAgIC8vICgzKSBSZW5kZXIgdGhlIGZyYWdtZW50IGludG8gdGhlIGNvbnRhaW5lciBhbmQgbWFrZSBzdXJlIHRoZVxuICAgICAgLy8gY29udGFpbmVyIGtub3dzIGl0cyBgcGFydGAgaXMgdGhlIG9uZSB3ZSBqdXN0IHJlbmRlcmVkLiBUaGlzIGVuc3VyZXNcbiAgICAgIC8vIERPTSB3aWxsIGJlIHJlLXVzZWQgb24gc3Vic2VxdWVudCByZW5kZXJzLlxuICAgICAgaWYgKGZpcnN0U2NvcGVSZW5kZXIpIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzLmdldChyZW5kZXJDb250YWluZXIpITtcbiAgICAgICAgcGFydHMuZGVsZXRlKHJlbmRlckNvbnRhaW5lcik7XG4gICAgICAgIGlmIChwYXJ0LnZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVJbnN0YW5jZSkge1xuICAgICAgICAgIHByZXBhcmVUZW1wbGF0ZVN0eWxlcyhcbiAgICAgICAgICAgICAgcmVuZGVyQ29udGFpbmVyIGFzIERvY3VtZW50RnJhZ21lbnQsXG4gICAgICAgICAgICAgIHBhcnQudmFsdWUudGVtcGxhdGUsXG4gICAgICAgICAgICAgIHNjb3BlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJDb250YWluZXIpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0KTtcbiAgICAgIH1cbiAgICAgIC8vIEFmdGVyIGVsZW1lbnRzIGhhdmUgaGl0IHRoZSBET00sIHVwZGF0ZSBzdHlsaW5nIGlmIHRoaXMgaXMgdGhlXG4gICAgICAvLyBpbml0aWFsIHJlbmRlciB0byB0aGlzIGNvbnRhaW5lci5cbiAgICAgIC8vIFRoaXMgaXMgbmVlZGVkIHdoZW5ldmVyIGR5bmFtaWMgY2hhbmdlcyBhcmUgbWFkZSBzbyBpdCB3b3VsZCBiZVxuICAgICAgLy8gc2FmZXN0IHRvIGRvIGV2ZXJ5IHJlbmRlcjsgaG93ZXZlciwgdGhpcyB3b3VsZCByZWdyZXNzIHBlcmZvcm1hbmNlXG4gICAgICAvLyBzbyB3ZSBsZWF2ZSBpdCB1cCB0byB0aGUgdXNlciB0byBjYWxsIGBTaGFkeUNTU1Muc3R5bGVFbGVtZW50YFxuICAgICAgLy8gZm9yIGR5bmFtaWMgY2hhbmdlcy5cbiAgICAgIGlmICghaGFzUmVuZGVyZWQgJiYgbmVlZHNTY29waW5nKSB7XG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUyEuc3R5bGVFbGVtZW50KChjb250YWluZXIgYXMgU2hhZG93Um9vdCkuaG9zdCk7XG4gICAgICB9XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHttYXJrZXIsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHR5cGUgdGhhdCBjcmVhdGVzIGEgVGVtcGxhdGUgZnJvbSBhIFRlbXBsYXRlUmVzdWx0LlxuICpcbiAqIFRoaXMgaXMgYSBob29rIGludG8gdGhlIHRlbXBsYXRlLWNyZWF0aW9uIHByb2Nlc3MgZm9yIHJlbmRlcmluZyB0aGF0XG4gKiByZXF1aXJlcyBzb21lIG1vZGlmaWNhdGlvbiBvZiB0ZW1wbGF0ZXMgYmVmb3JlIHRoZXkncmUgdXNlZCwgbGlrZSBTaGFkeUNTUyxcbiAqIHdoaWNoIG11c3QgYWRkIGNsYXNzZXMgdG8gZWxlbWVudHMgYW5kIHJlbW92ZSBzdHlsZXMuXG4gKlxuICogVGVtcGxhdGVzIHNob3VsZCBiZSBjYWNoZWQgYXMgYWdncmVzc2l2ZWx5IGFzIHBvc3NpYmxlLCBzbyB0aGF0IG1hbnlcbiAqIFRlbXBsYXRlUmVzdWx0cyBwcm9kdWNlZCBmcm9tIHRoZSBzYW1lIGV4cHJlc3Npb24gb25seSBkbyB0aGUgd29yayBvZlxuICogY3JlYXRpbmcgdGhlIFRlbXBsYXRlIHRoZSBmaXJzdCB0aW1lLlxuICpcbiAqIFRlbXBsYXRlcyBhcmUgdXN1YWxseSBjYWNoZWQgYnkgVGVtcGxhdGVSZXN1bHQuc3RyaW5ncyBhbmRcbiAqIFRlbXBsYXRlUmVzdWx0LnR5cGUsIGJ1dCBtYXkgYmUgY2FjaGVkIGJ5IG90aGVyIGtleXMgaWYgdGhpcyBmdW5jdGlvblxuICogbW9kaWZpZXMgdGhlIHRlbXBsYXRlLlxuICpcbiAqIE5vdGUgdGhhdCBjdXJyZW50bHkgVGVtcGxhdGVGYWN0b3JpZXMgbXVzdCBub3QgYWRkLCByZW1vdmUsIG9yIHJlb3JkZXJcbiAqIGV4cHJlc3Npb25zLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHdheSB0byBkZXNjcmliZSBzdWNoIGEgbW9kaWZpY2F0aW9uXG4gKiB0byByZW5kZXIoKSBzbyB0aGF0IHZhbHVlcyBhcmUgaW50ZXJwb2xhdGVkIHRvIHRoZSBjb3JyZWN0IHBsYWNlIGluIHRoZVxuICogdGVtcGxhdGUgaW5zdGFuY2VzLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZUZhY3RvcnkgPSAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4gVGVtcGxhdGU7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5IHdoaWNoIGNhY2hlcyBUZW1wbGF0ZXMga2V5ZWQgb25cbiAqIHJlc3VsdC50eXBlIGFuZCByZXN1bHQuc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmFjdG9yeShyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0KSB7XG4gIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT4oKSxcbiAgICAgIGtleVN0cmluZzogbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlPigpXG4gICAgfTtcbiAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICB9XG5cbiAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICAvLyBJZiB0aGUgVGVtcGxhdGVTdHJpbmdzQXJyYXkgaXMgbmV3LCBnZW5lcmF0ZSBhIGtleSBmcm9tIHRoZSBzdHJpbmdzXG4gIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG5cbiAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3Qgc2VlbiB0aGlzIGtleSBiZWZvcmUsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZVxuICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICB9XG5cbiAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogVGhlIGZpcnN0IGFyZ3VtZW50IHRvIEpTIHRlbXBsYXRlIHRhZ3MgcmV0YWluIGlkZW50aXR5IGFjcm9zcyBtdWx0aXBsZVxuICogY2FsbHMgdG8gYSB0YWcgZm9yIHRoZSBzYW1lIGxpdGVyYWwsIHNvIHdlIGNhbiBjYWNoZSB3b3JrIGRvbmUgcGVyIGxpdGVyYWxcbiAqIGluIGEgTWFwLlxuICpcbiAqIFNhZmFyaSBjdXJyZW50bHkgaGFzIGEgYnVnIHdoaWNoIG9jY2FzaW9uYWxseSBicmVha3MgdGhpcyBiZWhhdmlvdXIsIHNvIHdlXG4gKiBuZWVkIHRvIGNhY2hlIHRoZSBUZW1wbGF0ZSBhdCB0d28gbGV2ZWxzLiBXZSBmaXJzdCBjYWNoZSB0aGVcbiAqIFRlbXBsYXRlU3RyaW5nc0FycmF5LCBhbmQgaWYgdGhhdCBmYWlscywgd2UgY2FjaGUgYSBrZXkgY29uc3RydWN0ZWQgYnlcbiAqIGpvaW5pbmcgdGhlIHN0cmluZ3MgYXJyYXkuXG4gKi9cbmV4cG9ydCB0eXBlIHRlbXBsYXRlQ2FjaGUgPSB7XG4gIHN0cmluZ3NBcnJheTogV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+O1xuICBrZXlTdHJpbmc6IE1hcDxzdHJpbmcsIFRlbXBsYXRlPjtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNhY2hlcyA9IG5ldyBNYXA8c3RyaW5nLCB0ZW1wbGF0ZUNhY2hlPigpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge2lzQ0VQb2x5ZmlsbH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7aXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBhIGBUZW1wbGF0ZWAgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSBhbmQgdXBkYXRlZFxuICogd2l0aCBuZXcgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gIF9wYXJ0czogQXJyYXk8UGFydHx1bmRlZmluZWQ+ID0gW107XG4gIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3I7XG4gIG9wdGlvbnM6IFJlbmRlck9wdGlvbnM7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3NvcixcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHVwZGF0ZSh2YWx1ZXM6IHVua25vd25bXSkge1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xvbmUoKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgLy8gV2hlbiB1c2luZyB0aGUgQ3VzdG9tIEVsZW1lbnRzIHBvbHlmaWxsLCBjbG9uZSB0aGUgbm9kZSwgcmF0aGVyIHRoYW5cbiAgICAvLyBpbXBvcnRpbmcgaXQsIHRvIGtlZXAgdGhlIGZyYWdtZW50IGluIHRoZSB0ZW1wbGF0ZSdzIGRvY3VtZW50LiBUaGlzXG4gICAgLy8gbGVhdmVzIHRoZSBmcmFnbWVudCBpbmVydCBzbyBjdXN0b20gZWxlbWVudHMgd29uJ3QgdXBncmFkZSBhbmRcbiAgICAvLyBwb3RlbnRpYWxseSBtb2RpZnkgdGhlaXIgY29udGVudHMgYnkgY3JlYXRpbmcgYSBwb2x5ZmlsbGVkIFNoYWRvd1Jvb3RcbiAgICAvLyB3aGlsZSB3ZSB0cmF2ZXJzZSB0aGUgdHJlZS5cbiAgICBjb25zdCBmcmFnbWVudCA9IGlzQ0VQb2x5ZmlsbCA/XG4gICAgICAgIHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudEZyYWdtZW50IDpcbiAgICAgICAgZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudCwgdHJ1ZSk7XG5cbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgY29uc3QgX3ByZXBhcmVJbnN0YW5jZSA9IChmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkgPT4ge1xuICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZVxuICAgICAgLy8gbnVsbFxuICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBmYWxzZSk7XG4gICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgbm9kZXMgYW5kIHBhcnRzIG9mIGEgdGVtcGxhdGVcbiAgICAgIHdoaWxlIChwYXJ0SW5kZXggPCBwYXJ0cy5sZW5ndGggJiYgbm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgLy8gQ29uc2VjdXRpdmUgUGFydHMgbWF5IGhhdmUgdGhlIHNhbWUgbm9kZSBpbmRleCwgaW4gdGhlIGNhc2Ugb2ZcbiAgICAgICAgLy8gbXVsdGlwbGUgYm91bmQgYXR0cmlidXRlcyBvbiBhbiBlbGVtZW50LiBTbyBlYWNoIGl0ZXJhdGlvbiB3ZSBlaXRoZXJcbiAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBub2RlSW5kZXgsIGlmIHdlIGFyZW4ndCBvbiBhIG5vZGUgd2l0aCBhIHBhcnQsIG9yIHRoZVxuICAgICAgICAvLyBwYXJ0SW5kZXggaWYgd2UgYXJlLiBCeSBub3QgaW5jcmVtZW50aW5nIHRoZSBub2RlSW5kZXggd2hlbiB3ZSBmaW5kIGFcbiAgICAgICAgLy8gcGFydCwgd2UgYWxsb3cgZm9yIHRoZSBuZXh0IHBhcnQgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50XG4gICAgICAgIC8vIG5vZGUgaWYgbmVjY2Vzc2FzcnkuXG4gICAgICAgIGlmICghaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZUluZGV4ID09PSBwYXJ0LmluZGV4KSB7XG4gICAgICAgICAgaWYgKHBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wcm9jZXNzb3IuaGFuZGxlVGV4dEV4cHJlc3Npb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIHBhcnQuaW5zZXJ0QWZ0ZXJOb2RlKG5vZGUucHJldmlvdXNTaWJsaW5nISk7XG4gICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKC4uLnRoaXMucHJvY2Vzc29yLmhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKFxuICAgICAgICAgICAgICAgIG5vZGUgYXMgRWxlbWVudCwgcGFydC5uYW1lLCBwYXJ0LnN0cmluZ3MsIHRoaXMub3B0aW9ucykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgICAgX3ByZXBhcmVJbnN0YW5jZSgobm9kZSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KS5jb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBfcHJlcGFyZUluc3RhbmNlKGZyYWdtZW50KTtcbiAgICBpZiAoaXNDRVBvbHlmaWxsKSB7XG4gICAgICBkb2N1bWVudC5hZG9wdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgY3VzdG9tRWxlbWVudHMudXBncmFkZShmcmFnbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge3JlcGFyZW50Tm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7Ym91bmRBdHRyaWJ1dGVTdWZmaXgsIGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXgsIG1hcmtlciwgbm9kZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5O1xuICB2YWx1ZXM6IHVua25vd25bXTtcbiAgdHlwZTogc3RyaW5nO1xuICBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHZhbHVlczogdW5rbm93bltdLCB0eXBlOiBzdHJpbmcsXG4gICAgICBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yKSB7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIGA8dGVtcGxhdGU+YCBlbGVtZW50LlxuICAgKi9cbiAgZ2V0SFRNTCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuZEluZGV4ID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3NbaV07XG4gICAgICAvLyBUaGlzIGV4ZWMoKSBjYWxsIGRvZXMgdHdvIHRoaW5nczpcbiAgICAgIC8vIDEpIEFwcGVuZHMgYSBzdWZmaXggdG8gdGhlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lIHRvIG9wdCBvdXQgb2Ygc3BlY2lhbFxuICAgICAgLy8gYXR0cmlidXRlIHZhbHVlIHBhcnNpbmcgdGhhdCBJRTExIGFuZCBFZGdlIGRvLCBsaWtlIGZvciBzdHlsZSBhbmRcbiAgICAgIC8vIG1hbnkgU1ZHIGF0dHJpYnV0ZXMuIFRoZSBUZW1wbGF0ZSBjbGFzcyBhbHNvIGFwcGVuZHMgdGhlIHNhbWUgc3VmZml4XG4gICAgICAvLyB3aGVuIGxvb2tpbmcgdXAgYXR0cmlidXRlcyB0byBjcmVhdGUgUGFydHMuXG4gICAgICAvLyAyKSBBZGRzIGFuIHVucXVvdGVkLWF0dHJpYnV0ZS1zYWZlIG1hcmtlciBmb3IgdGhlIGZpcnN0IGV4cHJlc3Npb24gaW5cbiAgICAgIC8vIGFuIGF0dHJpYnV0ZS4gU3Vic2VxdWVudCBhdHRyaWJ1dGUgZXhwcmVzc2lvbnMgd2lsbCB1c2Ugbm9kZSBtYXJrZXJzLFxuICAgICAgLy8gYW5kIHRoaXMgaXMgc2FmZSBzaW5jZSBhdHRyaWJ1dGVzIHdpdGggbXVsdGlwbGUgZXhwcmVzc2lvbnMgYXJlXG4gICAgICAvLyBndWFyYW50ZWVkIHRvIGJlIHF1b3RlZC5cbiAgICAgIGNvbnN0IG1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIC8vIFdlJ3JlIHN0YXJ0aW5nIGEgbmV3IGJvdW5kIGF0dHJpYnV0ZS5cbiAgICAgICAgLy8gQWRkIHRoZSBzYWZlIGF0dHJpYnV0ZSBzdWZmaXgsIGFuZCB1c2UgdW5xdW90ZWQtYXR0cmlidXRlLXNhZmVcbiAgICAgICAgLy8gbWFya2VyLlxuICAgICAgICBodG1sICs9IHMuc3Vic3RyKDAsIG1hdGNoLmluZGV4KSArIG1hdGNoWzFdICsgbWF0Y2hbMl0gK1xuICAgICAgICAgICAgYm91bmRBdHRyaWJ1dGVTdWZmaXggKyBtYXRjaFszXSArIG1hcmtlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlJ3JlIGVpdGhlciBpbiBhIGJvdW5kIG5vZGUsIG9yIHRyYWlsaW5nIGJvdW5kIGF0dHJpYnV0ZS5cbiAgICAgICAgLy8gRWl0aGVyIHdheSwgbm9kZU1hcmtlciBpcyBzYWZlIHRvIHVzZS5cbiAgICAgICAgaHRtbCArPSBzICsgbm9kZU1hcmtlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0bWwgKyB0aGlzLnN0cmluZ3NbZW5kSW5kZXhdO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGVFbGVtZW50KCk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmdldEhUTUwoKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cbn1cblxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IGZvciBTVkcgZnJhZ21lbnRzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd3JhcHMgSFRNbCBpbiBhbiBgPHN2Zz5gIHRhZyBpbiBvcmRlciB0byBwYXJzZSBpdHMgY29udGVudHMgaW4gdGhlXG4gKiBTVkcgbmFtZXNwYWNlLCB0aGVuIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZSB0byByZW1vdmUgdGhlIGA8c3ZnPmAgdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgZ2V0SFRNTCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPHN2Zz4ke3N1cGVyLmdldEhUTUwoKX08L3N2Zz5gO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGVFbGVtZW50KCk6IEhUTUxUZW1wbGF0ZUVsZW1lbnQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gc3VwZXIuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZCE7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICByZXBhcmVudE5vZGVzKGNvbnRlbnQsIHN2Z0VsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB3aXRoIGVtYmVkZGVkIHVuaXF1ZSBrZXkgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGhcbiAqIHBvc3NpYmxlIHRleHQgaW4gdGVtcGxhdGVzLlxuICovXG5leHBvcnQgY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB1c2VkIHRleHQtcG9zaXRpb25zLCBtdWx0aS1iaW5kaW5nIGF0dHJpYnV0ZXMsIGFuZFxuICogYXR0cmlidXRlcyB3aXRoIG1hcmt1cC1saWtlIHRleHQgdmFsdWVzLlxuICovXG5leHBvcnQgY29uc3Qgbm9kZU1hcmtlciA9IGA8IS0tJHttYXJrZXJ9LS0+YDtcblxuZXhwb3J0IGNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcblxuLyoqXG4gKiBTdWZmaXggYXBwZW5kZWQgdG8gYWxsIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcblxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICBwYXJ0czogVGVtcGxhdGVQYXJ0W10gPSBbXTtcbiAgZWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LCBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBjb25zdCBub2Rlc1RvUmVtb3ZlOiBOb2RlW10gPSBbXTtcbiAgICBjb25zdCBfcHJlcGFyZVRlbXBsYXRlID0gKHRlbXBsYXRlOiBIVE1MVGVtcGxhdGVFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmVcbiAgICAgIC8vIG51bGxcbiAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBmYWxzZSk7XG4gICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgbGFzdCBpbmRleCBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0LiBXZSB0cnkgdG8gZGVsZXRlXG4gICAgICAvLyB1bm5lY2Vzc2FyeSBub2RlcywgYnV0IHdlIG5ldmVyIHdhbnQgdG8gYXNzb2NpYXRlIHR3byBkaWZmZXJlbnQgcGFydHNcbiAgICAgIC8vIHRvIHRoZSBzYW1lIGluZGV4LiBUaGV5IG11c3QgaGF2ZSBhIGNvbnN0YW50IG5vZGUgYmV0d2Vlbi5cbiAgICAgIGxldCBsYXN0UGFydEluZGV4ID0gMDtcbiAgICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlIGFzIEVsZW1lbnQgfCBDb21tZW50IHwgVGV4dDtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgICBpZiAoKG5vZGUgYXMgRWxlbWVudCkuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gKG5vZGUgYXMgRWxlbWVudCkuYXR0cmlidXRlcztcbiAgICAgICAgICAgIC8vIFBlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hbWVkTm9kZU1hcCxcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIHJldHVybmVkIGluIGRvY3VtZW50IG9yZGVyLlxuICAgICAgICAgICAgLy8gSW4gcGFydGljdWxhciwgRWRnZS9JRSBjYW4gcmV0dXJuIHRoZW0gb3V0IG9mIG9yZGVyLCBzbyB3ZSBjYW5ub3RcbiAgICAgICAgICAgIC8vIGFzc3VtZSBhIGNvcnJlc3BvbmRhbmNlIGJldHdlZW4gcGFydCBpbmRleCBhbmQgYXR0cmlidXRlIGluZGV4LlxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXS52YWx1ZS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAvLyBleHByZXNzaW9uIGluIHRoaXMgYXR0cmlidXRlXG4gICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvclBhcnQgPSByZXN1bHQuc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpIVsyXTtcbiAgICAgICAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgLy8gQWxsIGJvdW5kIGF0dHJpYnV0ZXMgaGF2ZSBoYWQgYSBzdWZmaXggYWRkZWQgaW5cbiAgICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAgIC8vIGhhbmRsaW5nLiBUbyBsb29rIHVwIHRoZSBhdHRyaWJ1dGUgdmFsdWUgd2UgYWxzbyBuZWVkIHRvIGFkZFxuICAgICAgICAgICAgICAvLyB0aGUgc3VmZml4LlxuICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID1cbiAgICAgICAgICAgICAgICAgIG5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4O1xuICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9XG4gICAgICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSkhO1xuICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gYXR0cmlidXRlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdhdHRyaWJ1dGUnLCBpbmRleCwgbmFtZSwgc3RyaW5nc30pO1xuICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICAgIHBhcnRJbmRleCArPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgobm9kZSBhcyBFbGVtZW50KS50YWdOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICBfcHJlcGFyZVRlbXBsYXRlKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gKG5vZGUgYXMgVGV4dCkuZGF0YSE7XG4gICAgICAgICAgaWYgKGRhdGEuaW5kZXhPZihtYXJrZXIpID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSE7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gZGF0YS5zcGxpdChtYXJrZXJSZWdleCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBub2RlIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICAoc3RyaW5nc1tpXSA9PT0gJycpID8gY3JlYXRlTWFya2VyKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cmluZ3NbaV0pLFxuICAgICAgICAgICAgICAgICAgbm9kZSk7XG4gICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleDogKytpbmRleH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gdHJ1c3QgaXQgd2lsbCBzdGljayBhcm91bmQgYWZ0ZXIgY2xvbmluZy5cbiAgICAgICAgICAgIGlmIChzdHJpbmdzW2xhc3RJbmRleF0gPT09ICcnKSB7XG4gICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHBhcnQgZm9yIGVhY2ggbWF0Y2ggZm91bmRcbiAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogTm9kZS5DT01NRU5UX05PREUgKi8pIHtcbiAgICAgICAgICBpZiAoKG5vZGUgYXMgQ29tbWVudCkuZGF0YSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUhO1xuICAgICAgICAgICAgLy8gQWRkIGEgbmV3IG1hcmtlciBub2RlIHRvIGJlIHRoZSBzdGFydE5vZGUgb2YgdGhlIFBhcnQgaWYgYW55IG9mXG4gICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAgICAgLy8gICogVGhlIHByZXZpb3VzU2libGluZyBpcyBhbHJlYWR5IHRoZSBzdGFydCBvZiBhIHByZXZpb3VzIHBhcnRcbiAgICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RQYXJ0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleH0pO1xuICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAgIC8vIEVsc2UsIHdlIGNhbiByZW1vdmUgaXQgdG8gc2F2ZSBmdXR1cmUgY29zdHMuXG4gICAgICAgICAgICBpZiAobm9kZS5uZXh0U2libGluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAobm9kZSBhcyBDb21tZW50KS5kYXRhID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgIHdoaWxlICgoaSA9IChub2RlIGFzIENvbW1lbnQpLmRhdGEhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PVxuICAgICAgICAgICAgICAgICAgIC0xKSB7XG4gICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBjb25zaWRlciB3aGV0aGVyIGl0J3MgZXZlbiB3b3J0aCBpdCB0b1xuICAgICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4OiAtMX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgX3ByZXBhcmVUZW1wbGF0ZShlbGVtZW50KTtcbiAgICAvLyBSZW1vdmUgdGV4dCBiaW5kaW5nIG5vZGVzIGFmdGVyIHRoZSB3YWxrIHRvIG5vdCBkaXN0dXJiIHRoZSBUcmVlV2Fsa2VyXG4gICAgZm9yIChjb25zdCBuIG9mIG5vZGVzVG9SZW1vdmUpIHtcbiAgICAgIG4ucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQobik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQSBwbGFjZWhvbGRlciBmb3IgYSBkeW5hbWljIGV4cHJlc3Npb24gaW4gYW4gSFRNTCB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGJ1aWx0LWluIHBhcnQgdHlwZXM6IEF0dHJpYnV0ZVBhcnQgYW5kIE5vZGVQYXJ0LiBOb2RlUGFydHNcbiAqIGFsd2F5cyByZXByZXNlbnQgYSBzaW5nbGUgZHluYW1pYyBleHByZXNzaW9uLCB3aGlsZSBBdHRyaWJ1dGVQYXJ0cyBtYXlcbiAqIHJlcHJlc2VudCBhcyBtYW55IGV4cHJlc3Npb25zIGFyZSBjb250YWluZWQgaW4gdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBBIFRlbXBsYXRlJ3MgcGFydHMgYXJlIG11dGFibGUsIHNvIHBhcnRzIGNhbiBiZSByZXBsYWNlZCBvciBtb2RpZmllZFxuICogKHBvc3NpYmx5IHRvIGltcGxlbWVudCBkaWZmZXJlbnQgdGVtcGxhdGUgc2VtYW50aWNzKS4gVGhlIGNvbnRyYWN0IGlzIHRoYXRcbiAqIHBhcnRzIGNhbiBvbmx5IGJlIHJlcGxhY2VkLCBub3QgcmVtb3ZlZCwgYWRkZWQgb3IgcmVvcmRlcmVkLCBhbmQgcGFydHMgbXVzdFxuICogYWx3YXlzIGNvbnN1bWUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGVpciBgdXBkYXRlKClgIG1ldGhvZC5cbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBUaGF0IHJlcXVpcmVtZW50IGlzIGEgbGl0dGxlIGZyYWdpbGUuIEFcbiAqIFRlbXBsYXRlSW5zdGFuY2UgY291bGQgaW5zdGVhZCBiZSBtb3JlIGNhcmVmdWwgYWJvdXQgd2hpY2ggdmFsdWVzIGl0IGdpdmVzXG4gKiB0byBQYXJ0LnVwZGF0ZSgpLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVBhcnQgPSB7XG4gIHR5cGU6ICdub2RlJyxcbiAgaW5kZXg6IG51bWJlclxufXx7dHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4OiBudW1iZXIsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW119O1xuXG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydDogVGVtcGxhdGVQYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcblxuLy8gQWxsb3dzIGBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKWAgdG8gYmUgcmVuYW1lZCBmb3IgYVxuLy8gc21hbGwgbWFudWFsIHNpemUtc2F2aW5ncy5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXJrZXIgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMFxuICpcbiAqIFwiXFwwLVxceDFGXFx4N0YtXFx4OUZcIiBhcmUgVW5pY29kZSBjb250cm9sIGNoYXJhY3RlcnNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJcbiAqXG4gKiBTbyBhbiBhdHRyaWJ1dGUgaXM6XG4gKiAgKiBUaGUgbmFtZTogYW55IGNoYXJhY3RlciBleGNlcHQgYSBjb250cm9sIGNoYXJhY3Rlciwgc3BhY2UgY2hhcmFjdGVyLCAoJyksXG4gKiAgICAoXCIpLCBcIj5cIiwgXCI9XCIsIG9yIFwiL1wiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5leHBvcnQgY29uc3QgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCA9XG4gICAgLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKlxuICogTWFpbiBsaXQtaHRtbCBtb2R1bGUuXG4gKlxuICogTWFpbiBleHBvcnRzOlxuICpcbiAqIC0gIFtbaHRtbF1dXG4gKiAtICBbW3N2Z11dXG4gKiAtICBbW3JlbmRlcl1dXG4gKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICogQHByZWZlcnJlZFxuICovXG5cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7ZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQge1NWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuZXhwb3J0IHtEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuZXhwb3J0IHtkaXJlY3RpdmUsIERpcmVjdGl2ZUZuLCBpc0RpcmVjdGl2ZX0gZnJvbSAnLi9saWIvZGlyZWN0aXZlLmpzJztcbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IHJlbW92ZSBsaW5lIHdoZW4gd2UgZ2V0IE5vZGVQYXJ0IG1vdmluZyBtZXRob2RzXG5leHBvcnQge3JlbW92ZU5vZGVzLCByZXBhcmVudE5vZGVzfSBmcm9tICcuL2xpYi9kb20uanMnO1xuZXhwb3J0IHtub0NoYW5nZSwgbm90aGluZywgUGFydH0gZnJvbSAnLi9saWIvcGFydC5qcyc7XG5leHBvcnQge0F0dHJpYnV0ZUNvbW1pdHRlciwgQXR0cmlidXRlUGFydCwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgaXNQcmltaXRpdmUsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlciwgUHJvcGVydHlQYXJ0fSBmcm9tICcuL2xpYi9wYXJ0cy5qcyc7XG5leHBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vbGliL3JlbmRlci1vcHRpb25zLmpzJztcbmV4cG9ydCB7cGFydHMsIHJlbmRlcn0gZnJvbSAnLi9saWIvcmVuZGVyLmpzJztcbmV4cG9ydCB7dGVtcGxhdGVDYWNoZXMsIHRlbXBsYXRlRmFjdG9yeX0gZnJvbSAnLi9saWIvdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5leHBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmV4cG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5leHBvcnQge1NWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcbmV4cG9ydCB7Y3JlYXRlTWFya2VyLCBpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGV9IGZyb20gJy4vbGliL3RlbXBsYXRlLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsaXRIdG1sVmVyc2lvbnM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gfHwgKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzEuMC4wJyk7XG5cbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IHVua25vd25bXSkgPT5cbiAgICBuZXcgVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnaHRtbCcsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG5cbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOiB1bmtub3duW10pID0+XG4gICAgbmV3IFNWR1RlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ3N2ZycsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG4iLCJpbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKHN1cGVyQ2xhc3MpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBDdWlCYXNlRWxlbWVudCBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgICAgZXh0cmE6IHtcbiAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiknLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopIHtcbiAgICAgIGxldCBleHRyYXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2RhdGFfdGVtcGxhdGU7XG4gICAgICBpZiAoZXh0cmFzKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYXMpKSB7XG4gICAgICAgICAgZXh0cmFzID0gW2V4dHJhc107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4dHJhcy5tYXAoZXh0cmEgPT4gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgICBleHRyYSxcbiAgICAgICAgICBoYXNzLFxuICAgICAgICAgIGhhc3Muc3RhdGVzLFxuICAgICAgICAgIHN0YXRlT2JqLFxuICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgLyogYXR0cmlidXRlPSAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgc3RhdGVPYmouc3RhdGUsXG4gICAgICAgICkpLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0ICE9PSBudWxsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSkge1xuICAgICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChleHRyYS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQ7XG4gICAgfVxuXG4gICAgaGFzRXh0cmEoZXh0cmEpIHtcbiAgICAgIHJldHVybiBleHRyYS5sZW5ndGggPiAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ3VpQmFzZUVsZW1lbnQ7XG59O1xuIiwiaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLnRzJztcblxuZnVuY3Rpb24gbG9hZEN1c3RvbVVJKCkge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIER5bmFtaWNFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNzOiBPYmplY3QsXG4gICAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICAgIGVsZW1lbnROYW1lOiBTdHJpbmcsXG5cbiAgICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAnb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpJyxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpIHtcbiAgICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgZWxlbWVudE5hbWUgPyBlbGVtZW50TmFtZS50b1VwcGVyQ2FzZSgpIDogJ0RJVicsXG4gICAgICAgIHsgaGFzcywgc3RhdGVPYmosIGluRGlhbG9nIH0pO1xuICAgIH1cbiAgfVxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtZWxlbWVudCcsIER5bmFtaWNFbGVtZW50KTtcbn1cbmlmIChQb2x5bWVyICYmIFBvbHltZXIuRWxlbWVudCAmJiBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50JykpIHtcbiAgbG9hZEN1c3RvbVVJKCk7XG59IGVsc2Uge1xuICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaG9tZS1hc3Npc3RhbnQnKS50aGVuKCgpID0+IGxvYWRDdXN0b21VSSgpKTtcbn1cbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC50cyc7XG5cbmltcG9ydCAnLi9keW5hbWljLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbmN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdGF0ZS1jYXJkLWRpc3BsYXknKS50aGVuKCgpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBEeW5hbWljV2l0aEV4dHJhIGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1jYXJkLWRpc3BsYXknKSB7XG4gICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbC13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW46IC00cHggLTE2cHggLTRweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGhhLXN0YXRlLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIGR5bmFtaWMtZWxlbWVudCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgI292ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICAjbG9jayB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgfVxuICAgICAgICAjbG9jay5oYS1jb3Zlci1jb250cm9scyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5leHRyYSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1zaXplOiAzNnB4O1xuICAgICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD0nW1tleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSldXSBob3Jpem9udGFsIGxheW91dCc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tleHRyYU9ialZpc2libGVdXSc+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0J1xuICAgICAgICAgICAgICAgICAgICBpdGVtcz0nW1tleHRyYU9ial1dJ1xuICAgICAgICAgICAgICAgICAgICBvbi1kb20tY2hhbmdlPSdleHRyYURvbUNoYW5nZWQnPlxuICAgICAgICAgICAgPGhhLXN0YXRlLWxhYmVsLWJhZGdlIGhhc3M9J1tbaGFzc11dJyBzdGF0ZT0nW1tpdGVtXV0nPjwvaGEtc3RhdGUtbGFiZWwtYmFkZ2U+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW19zaG93Q29udHJvbChpbkRpYWxvZywgc3RhdGVPYmopXV0nPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGR5bmFtaWMtZWxlbWVudFxuICAgICAgICAgICAgICAgICAgY2xhc3M9J2ZsZXgnXG4gICAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LW5hbWU9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICAgIDwvZHluYW1pYy1lbGVtZW50PlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopXV0nPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVybGF5XCIgb24tY2xpY2s9J2NsaWNrSGFuZGxlcic+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9ja11dJz5cbiAgICAgICAgICAgICAgICAgICAgPGlyb24taWNvbiBpZD1cImxvY2tcIiBjbGFzcyQ9XCJbW2NvbnRyb2xFbGVtZW50XV1cIiBpY29uPVwibWRpOmxvY2stb3V0bGluZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbWyFjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRlJz5bW2NvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgICAgZXh0cmFPYmo6IHtcbiAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgX2F0dGFjaGVkKScsXG4gICAgICAgIH0sXG4gICAgICAgIF9hdHRhY2hlZDogQm9vbGVhbixcbiAgICAgICAgZXh0cmFPYmpWaXNpYmxlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKScsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX2F0dGFjaGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBhdHRhY2hlZCkge1xuICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlIHx8ICFhdHRhY2hlZCkgcmV0dXJuIFtdO1xuICAgICAgbGV0IGV4dHJhQmFkZ2VzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYUJhZGdlcykpIHtcbiAgICAgICAgZXh0cmFCYWRnZXMgPSBbZXh0cmFCYWRnZXNdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhQmFkZ2VzLm1hcCgoZXh0cmFCYWRnZSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKGV4dHJhQmFkZ2UuZW50aXR5X2lkICYmIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSkge1xuICAgICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICAgIHRoaXMsIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSwgdGhpcy5pbkRpYWxvZyxcbiAgICAgICAgICAgIC8qIGFsbG93SGlkZGVuPSAqL2ZhbHNlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXh0cmFCYWRnZS5hdHRyaWJ1dGUgJiZcbiAgICAgICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgc3RhdGU6IFN0cmluZyhzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSksXG4gICAgICAgICAgICBlbnRpdHlfaWQ6ICdub25lLm5vbmUnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogeyB1bml0X29mX21lYXN1cmVtZW50OiBleHRyYUJhZGdlLnVuaXQgfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IGJsYWNrbGlzdCA9IGV4dHJhQmFkZ2UuYmxhY2tsaXN0X3N0YXRlcztcbiAgICAgICAgaWYgKGJsYWNrbGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJsYWNrbGlzdCkpIHtcbiAgICAgICAgICAgIGJsYWNrbGlzdCA9IFtibGFja2xpc3RdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYmxhY2tsaXN0LnNvbWUodiA9PiBSZWdFeHAodikudGVzdChyZXN1bHQuc3RhdGUudG9TdHJpbmcoKSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Ll9lbnRpdHlEaXNwbGF5ID0gJyc7XG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgeyBmcmllbmRseV9uYW1lOiAnJyB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pLmZpbHRlcihleHRyYUJhZGdlID0+IGV4dHJhQmFkZ2UgIT0gbnVsbCk7XG4gICAgfVxuXG4gICAgY29tcHV0ZUV4dHJhVmlzaWJsZShleHRyYU9iaiwgaW5EaWFsb2cpIHtcbiAgICAgIGlmIChpbkRpYWxvZyB8fCAhZXh0cmFPYmopIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBleHRyYU9iai5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpIHtcbiAgICAgIHJldHVybiBleHRyYU9ialZpc2libGUgPyAnZXh0cmEnIDogJyc7XG4gICAgfVxuXG4gICAgX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAhc3RhdGVPYmouYXR0cmlidXRlcy5oaWRlX2NvbnRyb2w7XG4gICAgfVxuXG4gICAgY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaikge1xuICAgICAgLy8gaGFMb2NhbGl6ZSByZW1vdmVkIGluIDAuNjFcbiAgICAgIHJldHVybiBzdXBlci5jb21wdXRlU3RhdGVEaXNwbGF5KHRoaXMuaGFMb2NhbGl6ZSB8fCB0aGlzLmxvY2FsaXplLCBzdGF0ZU9iaik7XG4gICAgfVxuXG4gICAgaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHMgfHxcbiAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrO1xuICAgIH1cblxuICAgIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgY29uc3QgbG9jayA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjbG9jaycpO1xuICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgbG9jay5pY29uID0gJ21kaTpsb2NrLW9wZW4tb3V0bGluZSc7XG4gICAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcwLjEnO1xuICAgICAgfVxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gICAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgICAgbG9jay5pY29uID0gJ21kaTpsb2NrLW91dGxpbmUnO1xuICAgICAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9LCA1MDAwKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgYXBwbHlUaGVtZXMoaGFzcywgZWxlbWVudCwgc3RhdGVPYmopIHtcbiAgICAgIGNvbnN0IHRoZW1lTmFtZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUgfHwgJ2RlZmF1bHQnO1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgIGVsZW1lbnQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gICAgfVxuXG4gICAgZXh0cmFEb21DaGFuZ2VkKCkge1xuICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJylcbiAgICAgICAgLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICB0aGlzLmFwcGx5VGhlbWVzKHRoaXMuaGFzcywgZWxlbSwgZWxlbS5zdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtd2l0aC1leHRyYScsIER5bmFtaWNXaXRoRXh0cmEpO1xufSk7XG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFDb25maWdDdXN0b21VaSBleHRlbmRzIExpdEVsZW1lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPjwvc3R5bGU+XG4gICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPSdoYXNzOmFycm93LWxlZnQnXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2JhY2tIYW5kbGVyfVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPGRpdiBtYWluLXRpdGxlPkN1c3RvbSBVSSBzZXR0aW5nczwvZGl2PlxuICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzLXdpZGU9XCIke3RoaXMuaXNXaWRlfVwiPlxuICAgICAgICA8cGFwZXItY2FyZCBoZWFkaW5nPSdEZXZpY2UgbmFtZSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cbiAgICAgICAgICAgIFNldCBkZXZpY2UgbmFtZSBzbyB0aGF0IHlvdSBjYW4gcmVmZXJlbmNlIGl0IGluIHBlci1kZXZpY2Ugc2V0dGluZ3NcbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD0nTmFtZSdcbiAgICAgICAgICAgICAgLnZhbHVlPVwiQHt0aGlzLm5hbWV9XCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BhcGVyLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGF0dHJpYnV0ZTogJ2lzLXdpZGUnLFxuICAgICAgfSxcblxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlZmxlY3Q6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiAnbmFtZUNoYW5nZWQnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZHZhbCwgbmV3dmFsKSB7XG4gICAgaWYgKG5hbWUgPT09ICduYW1lJykge1xuICAgICAgdGhpcy5uYW1lQ2hhbmdlZChuZXd2YWwpO1xuICAgIH1cbiAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkdmFsLCBuZXd2YWwpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLm5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICB9XG5cbiAgbmFtZUNoYW5nZWQobmFtZSkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5zZXROYW1lKG5hbWUpO1xuICB9XG5cbiAgX2JhY2tIYW5kbGVyKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnbG9jYXRpb24tY2hhbmdlZCcpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGEtY29uZmlnLWN1c3RvbS11aScsIEhhQ29uZmlnQ3VzdG9tVWkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuZnVuY3Rpb24gbG9hZEN1c3RvbVVJKCkge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIEhhVGhlbWVkU2xpZGVyIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBtYXJnaW46IHZhcigtLWhhLXRoZW1lZC1zbGlkZXItbWFyZ2luLCBpbml0aWFsKTtcbiAgICAgICAgfVxuICAgICAgICAuZGlzYWJsZS1vZmYtd2hlbi1taW4ge1xuICAgICAgICAgIC0tcGFwZXItc2xpZGVyLXBpbi1zdGFydC1jb2xvcjogIHZhcigtLXBhcGVyLXNsaWRlci1waW4tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluLmlzLW9uIHtcbiAgICAgICAgICAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXIta25vYi1jb2xvcik7XG4gICAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zbGlkZXIge1xuICAgICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLWhhLXBhcGVyLXNsaWRlci13aWR0aCwgMjAwcHgpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8cGFwZXItc2xpZGVyXG4gICAgICAgICAgIGlkPSdzbGlkZXInXG4gICAgICAgICAgIG1pbj0nW1tfdGhlbWVkTWluXV0nXG4gICAgICAgICAgIG1heD0nW1tfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJtYXhcIiwgbWF4KV1dJ1xuICAgICAgICAgICBwaW49J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwicGluXCIsIHBpbildXSdcbiAgICAgICAgICAgY2xhc3MkPSdbW2NvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgX3RoZW1lZE1pbildXScgdmFsdWU9J1tbdmFsdWVdXSdcbiAgICAgICAgICAgb24tY2hhbmdlPSd2YWx1ZUNoYW5nZWQnPlxuICAgICAgPC9wYXBlci1zbGlkZXI+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJlYWR5KCkge1xuICAgICAgc3VwZXIucmVhZHkoKTtcbiAgICAgIHRoaXMuZGlzYWJsZU9mZldoZW5NaW4gPSAhdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZSh0aGlzLnRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pO1xuICAgICAgdGhpcy5jb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoaXMudGhlbWUsIHRoaXMuZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLiQuc2xpZGVyLl9rZXlCaW5kaW5ncyA9IHRoaXMuJC5zbGlkZXIuX2tleUJpbmRpbmdzIHx8IHt9O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pbjoge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgfSxcbiAgICAgICAgbWF4OiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgIH0sXG4gICAgICAgIHBpbjoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBpc09uOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVPZmZXaGVuTWluOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQ6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICB0aGVtZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIF90aGVtZWRNaW46IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgY29tcHV0ZWQ6ICdfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJtaW5cIiwgbWluKScsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgJ2NvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhlbWUsIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCknLFxuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpIHtcbiAgICAgIHRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCA9IHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUoXG4gICAgICAgIHRoZW1lLCAncmVwb3J0X3doZW5fbm90X2NoYW5nZWQnLCAhZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgICB9XG5cbiAgICBfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgYXR0ciwgZGVmKSB7XG4gICAgICBpZiAodGhlbWUpIHtcbiAgICAgICAgaWYgKGF0dHIgaW4gdGhlbWUpIHtcbiAgICAgICAgICByZXR1cm4gdGhlbWVbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWY7XG4gICAgfVxuXG4gICAgY29tcHV0ZUNsYXNzKHRoZW1lLCBpc09uLCB0aGVtZWRNaW4pIHtcbiAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgIGlmIChpc09uKSB7XG4gICAgICAgIHJlc3VsdCArPSAnaXMtb24gJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pIHx8IHRoZW1lZE1pbiA9PT0gMCkge1xuICAgICAgICAvLyBJZiBvZmZXaGVuTWluIGlzIGVuYWJsZWQgZG9uJ3QgY3VzdG9taXplLlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gYCR7cmVzdWx0fWRpc2FibGUtb2ZmLXdoZW4tbWluYDtcbiAgICB9XG5cbiAgICB2YWx1ZUNoYW5nZWQoZXYpIHtcbiAgICAgIGlmICghdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkICYmIHRoaXMudmFsdWUgPT09IGV2LnRhcmdldC52YWx1ZSkge1xuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICB9XG4gIH1cbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS10aGVtZWQtc2xpZGVyJywgSGFUaGVtZWRTbGlkZXIpO1xufVxuaWYgKFBvbHltZXIgJiYgUG9seW1lci5FbGVtZW50ICYmIGN1c3RvbUVsZW1lbnRzLmdldCgnaG9tZS1hc3Npc3RhbnQnKSkge1xuICBsb2FkQ3VzdG9tVUkoKTtcbn0gZWxzZSB7XG4gIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdob21lLWFzc2lzdGFudCcpLnRoZW4oKCkgPT4gbG9hZEN1c3RvbVVJKCkpO1xufVxuIiwiaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQudHMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzJztcbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci50cyc7XG5pbXBvcnQgc3RhdGVDYXJkVHlwZSBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2NhcmRfdHlwZS50cyc7XG5cbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuaW1wb3J0ICcuL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMnO1xuaW1wb3J0ICcuL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMnO1xuXG5mdW5jdGlvbiBsb2FkQ3VzdG9tVUkoKSB7XG4gIGNvbnN0IFNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTID0gWydjb25maWd1cmF0b3InXTtcbiAgY29uc3QgRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUID0ge1xuICAgIGxpZ2h0OiAxLCAvLyBTVVBQT1JUX0JSSUdIVE5FU1NcbiAgICBjb3ZlcjogNCwgLy8gU1VQUE9SVF9TRVRfUE9TSVRJT05cbiAgICBjbGltYXRlOiAxLCAvLyBTVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRVxuICB9O1xuICBjb25zdCBUWVBFX1RPX0NPTlRST0wgPSB7XG4gICAgdG9nZ2xlOiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gICAgZGlzcGxheTogJycsXG4gICAgY292ZXI6ICdoYS1jb3Zlci1jb250cm9scycsXG4gIH07XG5cbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBTdGF0ZUNhcmRDdXN0b21VaSBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAnaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiknLFxuICAgICAgXTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gJ0RJVicgJiZcbiAgICAgICAgICAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSB8fCBjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGlsZC1jYXJkJykpKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgICAvLyBTaW5jZSB0aGlzIGRvZXNuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIC0gbm8gbmVlZCB0byBjbGVhciBpdC5cbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3ZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgaW5oZXJpdCknKTtcblxuICAgICAgICAvLyBQb2x5ZmlsbCAndXBkYXRlU3R5bGVzJy5cbiAgICAgICAgaWYgKCFjb250YWluZXIudXBkYXRlU3R5bGVzKSB7XG4gICAgICAgICAgY29udGFpbmVyLnVwZGF0ZVN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHN0eWxlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgICAgdGhpcy5pbnB1dENoYW5nZWQodGhpcy5oYXNzLCB0aGlzLmluRGlhbG9nLCB0aGlzLnN0YXRlT2JqKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgICAgdGhpcy5fY29udGFpbmVyLCB0aGlzLmhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sICdkZWZhdWx0Jyk7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgICB9XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGJhZGdlTW9kZShoYXNzLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgICBjb25zdCBzdGF0ZXMgPSBbXTtcbiAgICAgIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZSA9IGhhc3Muc3RhdGVzW2lkXTtcbiAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gSUQgJHtpZH0gaW4gZ3JvdXAgJHtzdGF0ZU9iai5lbnRpdHlfaWR9YCk7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0IHx8XG4gICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QuaW5jbHVkZXMoc3RhdGUuZW50aXR5X2lkKSkge1xuICAgICAgICAgICAgc3RhdGVzLnB1c2god2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgICAgICB0aGlzLCBzdGF0ZSwgZmFsc2UgLyogaW5EaWFsb2cgKi8sIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlcy5wdXNoKHN0YXRlT2JqKTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9O1xuICAgICAgICAgIGlmICh0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0ZScpKSB7XG4gICAgICAgICAgICBwYXJhbXMubWFyZ2luID0gJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLW1hcmdpbiwgMCknO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhwYXJhbXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICAgIHRoaXMsXG4gICAgICAgICdIQS1CQURHRVMtQ0FSRCcsXG4gICAgICAgIHsgaGFzcywgc3RhdGVzIH0pO1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgICB3aWR0aDogJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLXdpZHRoLCBpbml0aWFsKScsXG4gICAgICAgICAgJ3RleHQtYWxpZ24nOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtdGV4dC1hbGlnbiwgaW5pdGlhbCknLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdENoaWxkLnN0eWxlLmZvbnRTaXplID0gJzg1JSc7XG5cbiAgICAgIC8vIFNpbmNlIHRoaXMgdmFyaWFibGUgb25seSBhZmZlY3RzIGJhZGdlcyBtb2RlIC0gbm8gbmVlZCB0byBjbGVhbiBpdCB1cC5cbiAgICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0taGEtc3RhdGUtbGFiZWwtYmFkZ2UtbWFyZ2luLWJvdHRvbScsICcwJyk7XG4gICAgfVxuXG4gICAgY2xlYW5CYWRnZVN0eWxlKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgICBkaXNwbGF5OiAnJyxcbiAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnIH0pO1xuICAgIH1cblxuICAgIGFwcGx5VGhlbWVzKGhhc3MsIG1vZGlmaWVkT2JqKSB7XG4gICAgICBsZXQgdGhlbWVUYXJnZXQgPSB0aGlzO1xuICAgICAgbGV0IHRoZW1lTmFtZSA9ICdkZWZhdWx0JztcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhlbWVUYXJnZXQgPSB0aGlzLl9jb250YWluZXI7XG4gICAgICB9XG4gICAgICBpZiAobW9kaWZpZWRPYmouYXR0cmlidXRlcy50aGVtZSkge1xuICAgICAgICB0aGVtZU5hbWUgPSBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lO1xuICAgICAgfVxuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgIHRoZW1lVGFyZ2V0LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICAgIH1cblxuICAgIG1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikge1xuICAgICAgaWYgKCFtb2RpZmllZE9iaikge1xuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMCcgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBvYmosIGluRGlhbG9nKSB7XG4gICAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmJlxuICAgICAgICAoRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiBvYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMpICYmXG4gICAgICAgIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAmJiBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgIT09ICduby1zbGlkZXInO1xuICAgIH1cblxuICAgIGlucHV0Q2hhbmdlZChoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmopIHtcbiAgICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MgfHwgIXRoaXMuX2lzQXR0YWNoZWQpIHJldHVybjtcbiAgICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gICAgICBjb25zdCBtb2RpZmllZE9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgdGhpcywgc3RhdGVPYmosIGluRGlhbG9nLCB0cnVlIC8qIGFsbG93SGlkZGVuICovKTtcblxuICAgICAgaWYgKHRoaXMubWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSkgcmV0dXJuO1xuXG4gICAgICB0aGlzLmFwcGx5VGhlbWVzKGhhc3MsIG1vZGlmaWVkT2JqKTtcblxuICAgICAgaWYgKCFpbkRpYWxvZyAmJiBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSA9PT0gJ2JhZGdlcycpIHtcbiAgICAgICAgdGhpcy5iYWRnZU1vZGUoaGFzcywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgICB0aGlzLmNsZWFuQmFkZ2VTdHlsZSgpO1xuXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIGhhc3MsXG4gICAgICAgIHN0YXRlT2JqLFxuICAgICAgICBpbkRpYWxvZyxcbiAgICAgIH07XG4gICAgICBjb25zdCBvcmlnaW5hbFN0YXRlQ2FyZFR5cGUgPSBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKTtcbiAgICAgIGxldCBjdXN0b21TdGF0ZUNhcmRUeXBlO1xuICAgICAgY29uc3Qgc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5O1xuXG4gICAgICBpZiAoZG9tYWluID09PSAnbGlnaHQnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gICAgICAgICAgc2VydmljZU1pbjogJ3R1cm5fb2ZmJyxcbiAgICAgICAgICBzZXJ2aWNlTWF4OiAndHVybl9vbicsXG4gICAgICAgICAgdmFsdWVOYW1lOiAnYnJpZ2h0bmVzcycsXG4gICAgICAgICAgZG9tYWluLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICAgIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY292ZXInICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY292ZXItY29udHJvbHMnLFxuICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIHNlcnZpY2VNaW46ICdjbG9zZV9jb3ZlcicsXG4gICAgICAgICAgc2VydmljZU1heDogJ3NldF9jb3Zlcl9wb3NpdGlvbicsXG4gICAgICAgICAgc2V0VmFsdWVOYW1lOiAncG9zaXRpb24nLFxuICAgICAgICAgIHZhbHVlTmFtZTogJ2N1cnJlbnRfcG9zaXRpb24nLFxuICAgICAgICAgIG5hbWVPbjogJ29wZW4nLFxuICAgICAgICAgIGRvbWFpbixcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NsaW1hdGUnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY2xpbWF0ZS1zdGF0ZScsXG4gICAgICAgICAgbWluOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl90ZW1wIHx8IC0xMDAsXG4gICAgICAgICAgbWF4OiBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF90ZW1wIHx8IDIwMCxcbiAgICAgICAgICBzZXJ2aWNlTWluOiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgICB2YWx1ZU5hbWU6ICd0ZW1wZXJhdHVyZScsXG4gICAgICAgICAgbmFtZU9uOiAnJyxcbiAgICAgICAgICBkb21haW4sXG4gICAgICAgIH0pO1xuICAgICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgICAgfSBlbHNlIGlmIChUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9IFRZUEVfVE9fQ09OVFJPTFtvcmlnaW5hbFN0YXRlQ2FyZFR5cGVdO1xuICAgICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkICYmXG4gICAgICAgICAgICAgICAgICFTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUy5pbmNsdWRlcyhvcmlnaW5hbFN0YXRlQ2FyZFR5cGUpKSB7XG4gICAgICAgIHBhcmFtcy5pbkRpYWxvZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09ICd1bmF2YWlsYWJsZScpIHtcbiAgICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sX2VsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgICB0aGlzLFxuICAgICAgICAoc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSB8fCBjdXN0b21TdGF0ZUNhcmRUeXBlIHx8IGBTVEFURS1DQVJELSR7b3JpZ2luYWxTdGF0ZUNhcmRUeXBlfWApLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIHBhcmFtcyk7XG4gICAgfVxuICB9XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC1jdXN0b20tdWknLCBTdGF0ZUNhcmRDdXN0b21VaSk7XG59XG5pZiAoUG9seW1lciAmJiBQb2x5bWVyLkVsZW1lbnQgJiYgY3VzdG9tRWxlbWVudHMuZ2V0KCdob21lLWFzc2lzdGFudCcpKSB7XG4gIGxvYWRDdXN0b21VSSgpO1xufSBlbHNlIHtcbiAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hvbWUtYXNzaXN0YW50JykudGhlbigoKSA9PiBsb2FkQ3VzdG9tVUkoKSk7XG59XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcbmltcG9ydCAnLi9oYS10aGVtZWQtc2xpZGVyLmpzJztcblxuZnVuY3Rpb24gbG9hZEN1c3RvbVVJKCkge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIFN0YXRlQ2FyZFdpdGhTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudChQb2x5bWVyLkVsZW1lbnQpIHtcbiAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1mbGV4LWZhY3RvcnNcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY29uZC1saW5lLCAuc3RhdGUtYW5kLXRvZ2dsZSwgLnN0YXRlLWluZm8ge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubm93cmFwIC5zdGF0ZS1hbmQtdG9nZ2xlIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgfVxuICAgICAgICAubm93cmFwIC5zZWNvbmQtbGluZSB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmQtbGluZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN0cmV0Y2ggLnNlY29uZC1saW5lLCAuc3RyZXRjaCBoYS10aGVtZWQtc2xpZGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAtLWhhLXBhcGVyLXNsaWRlci13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubm93cmFwIC5zdGF0ZS1pbmZvIHtcbiAgICAgICAgICBtaW4td2lkdGg6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICAgICAgaGEtdGhlbWVkLXNsaWRlciwgLnRvcC13cmFwcGVyIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAudG9wLXdyYXBwZXIuc3RyZXRjaCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzJD0naG9yaXpvbnRhbCBsYXlvdXQgZmxleCB0b3Atd3JhcHBlciBbW19jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZyldXSc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGp1c3RpZmllZCBmbGV4LWF1dG8gc3RhdGUtYW5kLXRvZ2dsZSc+XG4gICAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8gZmxleC1hdXRvJ1xuICAgICAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgICAgIGluLWRpYWxvZz0nW1tzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSldXSdcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5LWxpbmUkPSdbW2hhc0V4dHJhKGV4dHJhKV1dJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgICAgIDxkaXY+W1tpdGVtXV08L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1ticmVha1NsaWRlcl1dJyBjbGFzcz0naGlkZGVuJz5cbiAgICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc2hvd1NsaWRlcl1dJyByZXN0YW1wPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGZsZXgtYXV0byBlbmQtanVzdGlmaWVkIHNlY29uZC1saW5lJz5cbiAgICAgICAgICAgIDxoYS10aGVtZWQtc2xpZGVyXG4gICAgICAgICAgICAgIGlkPSdzbGlkZXInXG4gICAgICAgICAgICAgIG1heD1bW21heF1dXG4gICAgICAgICAgICAgIG1pbj1bW21pbl1dXG4gICAgICAgICAgICAgIHRoZW1lPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuc2xpZGVyX3RoZW1lXV0nXG4gICAgICAgICAgICAgIGlzLW9uPSdbW2lzT24oc3RhdGVPYmosIG5hbWVPbildXSdcbiAgICAgICAgICAgICAgdmFsdWU9J3t7c2xpZGVyVmFsdWV9fSdcbiAgICAgICAgICAgICAgZGlzYWJsZS1vZmYtd2hlbi1taW49J3t7ZGlzYWJsZU9mZldoZW5NaW59fSdcbiAgICAgICAgICAgICAgb24tY2hhbmdlPSdzbGlkZXJDaGFuZ2VkJ1xuICAgICAgICAgICAgICBvbi1jbGljaz0nc3RvcFByb3BhZ2F0aW9uJz5cbiAgICAgICAgICAgIDwvaGEtdGhlbWVkLXNsaWRlcj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shYnJlYWtTbGlkZXJdXSc+XG4gICAgICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb21haW46IFN0cmluZyxcbiAgICAgICAgc2VydmljZU1pbjogU3RyaW5nLFxuICAgICAgICBzZXJ2aWNlTWF4OiBTdHJpbmcsXG4gICAgICAgIHZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgICBzZXRWYWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgICAgbmFtZU9uOiB7IHR5cGU6IFN0cmluZywgdmFsdWU6ICdvbicgfSxcbiAgICAgICAgbWluOiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDAgfSxcbiAgICAgICAgbWF4OiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDI1NSB9LFxuXG4gICAgICAgIHNsaWRlclZhbHVlOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlT2ZmV2hlbk1pbjogQm9vbGVhbixcbiAgICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgICBzdHJldGNoU2xpZGVyOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGJyZWFrU2xpZGVyOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGhpZGVTbGlkZXI6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGluZVRvb0xvbmc6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWluTGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICAgIG1heExpbmVCcmVhazogTnVtYmVyLFxuICAgICAgICBzaG93U2xpZGVyOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIGNvbXB1dGVkOiAnX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKScsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJlYWR5KCkge1xuICAgICAgc3VwZXIucmVhZHkoKTtcbiAgICAgIHRoaXMuX29uSXJvblJlc2l6ZSA9IHRoaXMuX29uSXJvblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbklyb25SZXNpemUpO1xuICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgICdzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKScsXG4gICAgICBdO1xuICAgIH1cblxuICAgIF93YWl0Rm9yTGF5b3V0KCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgICAgdGhpcy5fc2V0TW9kZSgpO1xuICAgICAgaWYgKHRoaXMuX2ZyYW1lSWQpIHJldHVybjtcbiAgICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2ZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9vbklyb25SZXNpemUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9zZXRNb2RlKCkge1xuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBoaWRlU2xpZGVyOiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicgJiYgdGhpcy5saW5lVG9vTG9uZyxcbiAgICAgICAgYnJlYWtTbGlkZXI6XG4gICAgICAgICAgICAgKHRoaXMubW9kZSA9PT0gJ2JyZWFrLXNsaWRlcicgfHwgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSAmJlxuICAgICAgICAgICAgIHRoaXMubGluZVRvb0xvbmcsXG4gICAgICB9O1xuICAgICAgaWYgKCF0aGlzLnNob3dTbGlkZXIpIHtcbiAgICAgICAgb2JqLmJyZWFrU2xpZGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICAgIH1cblxuICAgIF9vbklyb25SZXNpemUoKSB7XG4gICAgICBpZiAoIXRoaXMucmVhZHlUb0NvbXB1dGUpIHJldHVybjtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICduby1zbGlkZXInKSB7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgaGlkZVNsaWRlcjogdHJ1ZSxcbiAgICAgICAgICBicmVha1NsaWRlcjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXZCcmVha1NsaWRlciA9IHRoaXMuYnJlYWtTbGlkZXI7XG4gICAgICBjb25zdCBwcmV2SGlkZVNsaWRlciA9IHRoaXMuaGlkZVNsaWRlcjtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuJDtcbiAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgaWYgKGNvbnRhaW5lcldpZHRoID09PSAwKSByZXR1cm47XG4gICAgICBpZiAoY29udGFpbmVyV2lkdGggPD0gdGhpcy5taW5MaW5lQnJlYWspIHtcbiAgICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lcldpZHRoID49IHRoaXMubWF4TGluZUJyZWFrKSB7XG4gICAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcmV2SGlkZVNsaWRlciAmJiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpIHtcbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIHVuaGlkZSB0aGUgc2xpZGVyIGluIG9yZGVyIHRvIHJlY2FsY3VsYXRlIGhlaWdodC5cbiAgICAgICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHN0YXRlSGVpZ2h0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0ZS1pbmZvJykuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLmxpbmVUb29Mb25nID0gY29udGFpbmVySGVpZ2h0ID4gc3RhdGVIZWlnaHQgKiAxLjU7XG4gICAgICAgIGlmICh0aGlzLmxpbmVUb29Mb25nKSB7XG4gICAgICAgICAgdGhpcy5taW5MaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmICghcHJldkJyZWFrU2xpZGVyKSB7XG4gICAgICAgICAgdGhpcy5tYXhMaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fc2V0TW9kZSgpO1xuICAgIH1cblxuICAgIF9jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZykge1xuICAgICAgaWYgKGluRGlhbG9nKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmIChtb2RlID09PSAnc2luZ2xlLWxpbmUnKSB7XG4gICAgICAgIHJldHVybiAnbm93cmFwJztcbiAgICAgIH1cbiAgICAgIGlmIChzdHJldGNoU2xpZGVyICYmIGxpbmVUb29Mb25nKSB7XG4gICAgICAgIHJldHVybiAnc3RyZXRjaCB3cmFwJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnd3JhcCc7XG4gICAgfVxuXG4gICAgX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKSB7XG4gICAgICBpZiAoaW5EaWFsb2cgfHwgaGlkZVNsaWRlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgY29uc3QgcGFyYW0gPSB7IGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQgfTtcbiAgICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm47XG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXInKTtcbiAgICAgIGlmIChldi50YXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICAvLyBObyBTaGFkb3cgRE9NIC0gd2UgaGF2ZSBhY2Nlc3MgdG8gb3JpZ2luYWwgdGFyZ2V0LlxuICAgICAgICAoeyB0YXJnZXQgfSA9IGV2KTtcbiAgICAgIH0gZWxzZSBpZiAoZXYucGF0aCkge1xuICAgICAgICBbdGFyZ2V0XSA9IGV2LnBhdGg7XG4gICAgICB9IGVsc2UgaWYgKGV2LmNvbXBvc2VkUGF0aCkge1xuICAgICAgICBbdGFyZ2V0XSA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlID09PSAwIHx8ICh2YWx1ZSA8PSB0YXJnZXQubWluICYmICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKSkge1xuICAgICAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZU1pbiwgcGFyYW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1bdGhpcy5zZXRWYWx1ZU5hbWUgfHwgdGhpcy52YWx1ZU5hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWF4LCBwYXJhbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGVPYmpDaGFuZ2VkKHN0YXRlT2JqLCBuYW1lT24sIHZhbHVlTmFtZSkge1xuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBzbGlkZXJWYWx1ZTogdGhpcy5pc09uKHN0YXRlT2JqLCBuYW1lT24pID8gc3RhdGVPYmouYXR0cmlidXRlc1t2YWx1ZU5hbWVdIDogMCxcbiAgICAgIH07XG4gICAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHtcbiAgICAgICAgICBtaW5MaW5lQnJlYWs6IDAsXG4gICAgICAgICAgbWF4TGluZUJyZWFrOiA5OTksXG4gICAgICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICAgICAgYnJlYWtTbGlkZXI6IGZhbHNlLFxuICAgICAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgICAgICBtb2RlOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSxcbiAgICAgICAgICBzdHJldGNoU2xpZGVyOiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RyZXRjaF9zbGlkZXIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gICAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlzT24oc3RhdGVPYmosIG5hbWVPbikge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqICYmICghbmFtZU9uIHx8IHN0YXRlT2JqLnN0YXRlID09PSBuYW1lT24pO1xuICAgIH1cblxuICAgIHN0b3BQcm9wYWdhdGlvbihldikge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRoLXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhTbGlkZXIpO1xufVxuaWYgKFBvbHltZXIgJiYgUG9seW1lci5FbGVtZW50ICYmIGN1c3RvbUVsZW1lbnRzLmdldCgnaG9tZS1hc3Npc3RhbnQnKSkge1xuICBsb2FkQ3VzdG9tVUkoKTtcbn0gZWxzZSB7XG4gIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdob21lLWFzc2lzdGFudCcpLnRoZW4oKCkgPT4gbG9hZEN1c3RvbVVJKCkpO1xufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBDdWlCYXNlRWxlbWVudCBmcm9tICcuL2N1aS1iYXNlLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuL2R5bmFtaWMtd2l0aC1leHRyYS5qcyc7XG5cbmZ1bmN0aW9uIGxvYWRDdXN0b21VSSgpIHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQoUG9seW1lci5FbGVtZW50KSB7XG4gICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQnPlxuICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICBjbGFzcz0nc3RhdGUtaW5mbydcbiAgICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgICAgc2Vjb25kYXJ5LWxpbmUkPSdbW2hhc0V4dHJhKGV4dHJhKV1dJz5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYVxuICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICAgIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJ1xuICAgICAgICAgICAgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPlxuICAgICAgICA8L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG4gIH1cbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyJywgU3RhdGVDYXJkV2l0aG91dFNsaWRlcik7XG59XG5pZiAoUG9seW1lciAmJiBQb2x5bWVyLkVsZW1lbnQgJiYgY3VzdG9tRWxlbWVudHMuZ2V0KCdob21lLWFzc2lzdGFudCcpKSB7XG4gIGxvYWRDdXN0b21VSSgpO1xufSBlbHNlIHtcbiAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hvbWUtYXNzaXN0YW50JykudGhlbigoKSA9PiBsb2FkQ3VzdG9tVUkoKSk7XG59XG4iLCJpbXBvcnQgaGFzc0F0dHJpYnV0ZXNVdGlsIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMnO1xuXG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgfHwge307XG5jb25zdCBTVVBQT1JURURfU0xJREVSX01PREVTID0gW1xuICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbl07XG5cbmNvbnN0IGN1c3RvbVVpQXR0cmlidXRlcyA9IHtcbiAgZ3JvdXA6IHVuZGVmaW5lZCxcbiAgZGV2aWNlOiB1bmRlZmluZWQsXG4gIHRlbXBsYXRlczogdW5kZWZpbmVkLFxuICBzdGF0ZTogdW5kZWZpbmVkLFxuICBfc3RhdGVEaXNwbGF5OiB1bmRlZmluZWQsXG4gIGNvbnRyb2xfZWxlbWVudDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBzdGF0ZV9jYXJkX21vZGU6IHtcbiAgICB0eXBlOiAnYXJyYXknLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGxpZ2h0OiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICBjb3ZlcjogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY2xpbWF0ZTogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgJyonOiBbJ2JhZGdlcyddLFxuICAgIH0sXG4gIH0sXG4gIHN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBiYWRnZXNfbGlzdDogeyB0eXBlOiAnanNvbicgfSxcbiAgc2hvd19sYXN0X2NoYW5nZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGhpZGVfY29udHJvbDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgZXh0cmFfZGF0YV90ZW1wbGF0ZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBleHRyYV9iYWRnZTogeyB0eXBlOiAnanNvbicgfSxcbiAgc3RyZXRjaF9zbGlkZXI6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIHNsaWRlcl90aGVtZTogeyB0eXBlOiAnanNvbicgfSxcbiAgdGhlbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgY29uZmlybV9jb250cm9sczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgY29uZmlybV9jb250cm9sc19zaG93X2xvY2s6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGhpZGVfaW5fZGVmYXVsdF92aWV3OiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBpY29uX2NvbG9yOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG59O1xud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPSBoYXNzQXR0cmlidXRlc1V0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUztcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBoYXNzQXR0cmlidXRlc1V0aWwuVU5LTk9XTl9UWVBFO1xuT2JqZWN0LmFzc2lnbih3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgY3VzdG9tVWlBdHRyaWJ1dGVzKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LnRzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyc7XG5pbXBvcnQgZ2V0Vmlld0VudGl0aWVzIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXMudHMnO1xuXG5pbXBvcnQgJy4uL2VsZW1lbnRzL2hhLWNvbmZpZy1jdXN0b20tdWkuanMnO1xuaW1wb3J0IFZFUlNJT04gZnJvbSAnLi92ZXJzaW9uLmpzJztcbmltcG9ydCAnLi9oYXNzLWF0dHJpYnV0ZS11dGlsLmpzJztcblxud2luZG93LmN1c3RvbVVJID0gd2luZG93LmN1c3RvbVVJIHx8IHtcbiAgU1VQUE9SVEVEX1NMSURFUl9NT0RFUzogW1xuICAgICdzaW5nbGUtbGluZScsICdicmVhay1zbGlkZXInLCAnYnJlYWstc2xpZGVyLXRvZ2dsZScsICdoaWRlLXNsaWRlcicsICduby1zbGlkZXInLFxuICBdLFxuXG4gIGRvbUhvc3QoZWxlbSkge1xuICAgIGlmIChlbGVtID09PSBkb2N1bWVudCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW0uZ2V0Um9vdE5vZGUoKTtcbiAgICByZXR1cm4gKHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSA/IC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpLmhvc3QgOiByb290O1xuICB9LFxuXG4gIGxpZ2h0T3JTaGFkb3coZWxlbSwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZWxlbS5zaGFkb3dSb290ID9cbiAgICAgIGVsZW0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6XG4gICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9LFxuXG4gIGdldEVsZW1lbnRIaWVyYXJjaHkocm9vdCwgaGllcmFyY2h5KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsZW0gPSBoaWVyYXJjaHkuc2hpZnQoKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhyb290LCBlbGVtKSwgaGllcmFyY2h5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH0sXG5cbiAgZ2V0Q29udGV4dChlbGVtKSB7XG4gICAgaWYgKGVsZW0uX2NvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbS5fY29udGV4dCA9IFtdO1xuICAgICAgZm9yIChsZXQgZWxlbWVudCA9IChlbGVtLnRhZ05hbWUgPT09ICdIQS1FTlRJVElFUy1DQVJEJyA/IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW0pIDogZWxlbSk7XG4gICAgICAgIGVsZW1lbnQ7IGVsZW1lbnQgPSB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtZW50KSkge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgIGNhc2UgJ0hBLUVOVElUSUVTLUNBUkQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ3JvdXBFbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5ncm91cEVudGl0eSA9PT0gZmFsc2UgJiYgZWxlbWVudC5zdGF0ZXMgJiYgZWxlbWVudC5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChgZ3JvdXAuJHtjb21wdXRlU3RhdGVEb21haW4oZWxlbWVudC5zdGF0ZXNbMF0pfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnTU9SRS1JTkZPLUdST1VQJzpcbiAgICAgICAgICBjYXNlICdTVEFURS1DQVJELUNPTlRFTlQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuc3RhdGVPYmouZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hBLUNBUkRTJzpcbiAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3JykgfHwgJ2RlZmF1bHRfdmlldycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtLl9jb250ZXh0LnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0uX2NvbnRleHQ7XG4gIH0sXG5cbiAgZmluZE1hdGNoKGtleSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuIG51bGw7XG4gICAgaWYgKG9wdGlvbnNba2V5XSkgcmV0dXJuIGtleTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykuZmluZChvcHRpb24gPT4ga2V5Lm1hdGNoKGBeJHtvcHRpb259JGApKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChuYW1lLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZVttYXRjaF0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHdpbmRvdy5jdXN0b21VSS5nZXRDb250ZXh0KGVsZW0pO1xuICAgIGlmICghY29udGV4dCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICBjb250ZXh0LmZvckVhY2goKGMpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2goYywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhdHRyaWJ1dGVzLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIF9zZXRLZWVwKG9iaiwgdmFsdWUpIHtcbiAgICBpZiAob2JqLl9jdWlfa2VlcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSBvYmouX2N1aV9rZWVwICYmIHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIWF0dHJpYnV0ZXMudGVtcGxhdGVzKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosIHRydWUpO1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBuZXdBdHRyaWJ1dGVzID0ge307XG4gICAgbGV0IGhhc0dsb2JhbCA9IGZhbHNlO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcy50ZW1wbGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBhdHRyaWJ1dGVzLnRlbXBsYXRlc1trZXldO1xuICAgICAgaWYgKHRlbXBsYXRlLm1hdGNoKC9cXGIoZW50aXRpZXN8aGFzcylcXGIvKSkge1xuICAgICAgICBoYXNHbG9iYWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICB0ZW1wbGF0ZSwgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcyxcbiAgICAgICAgKHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXMgJiYgc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlc1trZXldKSB8fFxuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldLFxuICAgICAgICBzdGF0ZU9iai51bnRlbXBsYXRlZF9zdGF0ZSB8fCBzdGF0ZU9iai5zdGF0ZSk7XG4gICAgICAvLyBJbiBjYXNlIG9mIG51bGwgZG9uJ3Qgc2V0IHRoZSB2YWx1ZS5cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgbmV3QXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICBpZiAoa2V5ID09PSAnc3RhdGUnKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouc3RhdGUpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdfc3RhdGVEaXNwbGF5Jykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXkpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gYXR0cmlidXRlc1trZXldKSB7XG4gICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgIWhhc0dsb2JhbCk7XG4gICAgaWYgKCFoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzID09PSBhdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBXZSBhcmUgb3BlcmF0aW5nIG9uIHJlYWwgYXR0cmlidXRlcy4gUmVwbGFjZSB0aGVtLlxuICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgbmV3QXR0cmlidXRlcyk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdzdGF0ZScpKSB7XG4gICAgICAgIGlmIChuZXdBdHRyaWJ1dGVzLnN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnN0YXRlID0gU3RyaW5nKG5ld0F0dHJpYnV0ZXMuc3RhdGUpO1xuICAgICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZSA9IHN0YXRlT2JqLnN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdfc3RhdGVEaXNwbGF5JykpIHtcbiAgICAgICAgcmVzdWx0Ll9zdGF0ZURpc3BsYXkgPSBuZXdBdHRyaWJ1dGVzLl9zdGF0ZURpc3BsYXk7XG4gICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkgPSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5O1xuICAgICAgfVxuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHJlc3VsdCwgIWhhc0dsb2JhbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBPcGVyYXRpbmcgb24gY29udGV4dC1hd2FyZSBhdHRyaWJ1dGVzLiBSZXR1cm4gc2hhbGxvdyBjb3B5IG9mIG9iamVjdC5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5ld1Jlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgc3RhdGVPYmouYXR0cmlidXRlcyk7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaik7XG5cbiAgICBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZXMob2JqKSB7XG4gICAgICBpZiAoIW9iaikgcmV0dXJuO1xuICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICAgICAgaGFzcywgc3RhdGVzLCBuZXdSZXN1bHQsIGF0dHJpYnV0ZXMpO1xuICAgICAgICBoYXNDaGFuZ2VzIHw9IChyZXN1bHQgIT09IG5ld1Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZGV2aWNlKTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZ3JvdXApO1xuICAgIH1cblxuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgIGlmIChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKSByZXR1cm4gbmV3UmVzdWx0O1xuICAgIGlmIChoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVPYmo7XG4gIH0sXG5cbiAgYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eV9pZDogc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3RhdGU6IHN0YXRlT2JqLnN0YXRlLFxuICAgICAgYXR0cmlidXRlczogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcywgYXR0cmlidXRlcyksXG4gICAgICB1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZU9iai5sYXN0X2NoYW5nZWQsXG4gICAgfTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdChlbGVtLCBzdGF0ZU9iaiwgaW5EaWFsb2csIGFsbG93SGlkZGVuKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgbGV0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIG9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBlbGVtLmhhc3MsIGVsZW0uaGFzcy5zdGF0ZXMsIG9iaiwgb2JqLmF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKG9iaiAhPT0gc3RhdGVPYmogJiYgb2JqLmF0dHJpYnV0ZXMuaGlkZGVuICYmIGFsbG93SGlkZGVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmaXhHcm91cFRpdGxlcygpIHtcbiAgICBjb25zdCBob21lQXNzaXN0YW50TWFpbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nXSk7XG4gICAgaWYgKGhvbWVBc3Npc3RhbnRNYWluID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzLCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYUNhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaG9tZUFzc2lzdGFudE1haW4sIFtcbiAgICAgICdwYXJ0aWFsLWNhcmRzJyxcbiAgICAgICdoYS1jYXJkc1t2aWV3LXZpc2libGVdJ10pO1xuICAgIGlmIChoYUNhcmRzID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhQ2FyZHMsICcubWFpbicpIHx8IGhhQ2FyZHMuJC5tYWluO1xuICAgIGNvbnN0IGNhcmRzID0gbWFpbi5xdWVyeVNlbGVjdG9yQWxsKCdoYS1lbnRpdGllcy1jYXJkJyk7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKGNhcmQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgIGNhcmQsXG4gICAgICAgICAgY2FyZC5ncm91cEVudGl0eSxcbiAgICAgICAgICBmYWxzZSAvKiBpbkRpYWxvZyAqLyxcbiAgICAgICAgICBmYWxzZSAvKiBhbGxvd0hpZGRlbiAqLyk7XG4gICAgICAgIGlmIChvYmogIT09IGNhcmQuZ3JvdXBFbnRpdHkgJiYgb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSkge1xuICAgICAgICAgIGNvbnN0IG5hbWVFbGVtID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coY2FyZCwgJy5uYW1lJyk7XG4gICAgICAgICAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgY29udHJvbENvbHVtbnMoY29sdW1ucykge1xuICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtY2FyZHMnXSk7XG4gICAgaWYgKHBhcnRpYWxDYXJkcyA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMuYmluZChudWxsLCBjb2x1bW5zKSxcbiAgICAgICAgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZ1bmN0aW9uIHJlbmFtZWQgZnJvbSBoYW5kbGVXaW5kb3dDaGFuZ2UgdG8gX3VwZGF0ZUNvbHVtbnMgb24gMy43LjE4XG4gICAgY29uc3QgZiA9IHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UgfHwgcGFydGlhbENhcmRzLl91cGRhdGVDb2x1bW5zO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzLmZvckVhY2goKG1xbCkgPT4ge1xuICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKGYpO1xuICAgIH0pO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzID0gY29sdW1ucy5tYXAoKHdpZHRoKSA9PiB7XG4gICAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt3aWR0aH1weClgKTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihmKTtcbiAgICAgIHJldHVybiBtcWw7XG4gICAgfSk7XG4gICAgZigpO1xuICB9LFxuXG4gIHVzZUN1c3RvbWl6ZXIoKSB7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBjb25zdCBjdXN0b21pemVyID0gbWFpbi5oYXNzLnN0YXRlc1snY3VzdG9taXplci5jdXN0b21pemVyJ107XG4gICAgaWYgKCFjdXN0b21pemVyKSByZXR1cm47XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcykge1xuICAgICAgaWYgKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCAmJiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykge1xuICAgICAgICBjdXN0b21pemVyLmF0dHJpYnV0ZXMuaGlkZV9hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBhdHRyKSkge1xuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNbYXR0cl0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQ29uZmlnUGFuZWwoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY29uc3QgaGFQYW5lbENvbmZpZyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtcGFuZWwtcmVzb2x2ZXInLFxuICAgICAgJ2hhLXBhbmVsLWNvbmZpZyddKTtcbiAgICBpZiAoIWhhUGFuZWxDb25maWcpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkudXBkYXRlQ29uZmlnUGFuZWwsIDEwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhQ29uZmlnTmF2aWdhdGlvbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhhUGFuZWxDb25maWcsIFtcbiAgICAgICdoYS1jb25maWctZGFzaGJvYXJkJyxcbiAgICAgICdoYS1jb25maWctbmF2aWdhdGlvbiddKTtcbiAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uKSB7XG4gICAgICAvLyBIYUNvbmZpZ05hdmlnYXRpb24gc3RhcnRlZCB1c2luZyBsb2NhbGl6ZSBvbiAyMS4wMS4yMDE4XG4gICAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplICYmICFoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2gpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoID0gdHJ1ZTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQgPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQ7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkID0gKGhhc3MsIHBhZ2UpID0+XG4gICAgICAgICAgcGFnZSA9PT0gJ2N1c3RvbXVpJyB8fCBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZChoYXNzLCBwYWdlKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdDdXN0b20gVUknIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ1NldFVJIHR3ZWFrcycgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWhhQ29uZmlnTmF2aWdhdGlvbi5wYWdlcy5zb21lKGNvbmYgPT4gY29uZiA9PT0gJ2N1c3RvbXVpJyB8fCBjb25mLmRvbWFpbiA9PT0gJ2N1c3RvbXVpJykpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLnB1c2goJ3BhZ2VzJywgaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplID8gJ2N1c3RvbXVpJyA6IHtcbiAgICAgICAgICBkb21haW46ICdjdXN0b211aScsXG4gICAgICAgICAgY2FwdGlvbjogJ0N1c3RvbSBVSScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTZXQgVUkgdHdlYWtzLicsXG4gICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0SGFDb25maWdDdXN0b21VaSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoYS1jb25maWctY3VzdG9tLXVpJyk7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLmlzV2lkZSA9IGhhUGFuZWxDb25maWcuaXNXaWRlO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5zZXRBdHRyaWJ1dGUoJ3BhZ2UtbmFtZScsICdjdXN0b211aScpO1xuICAgICAgcmV0dXJuIGhhQ29uZmlnQ3VzdG9tVWk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlyb25QYWdlcyA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhUGFuZWxDb25maWcsICdpcm9uLXBhZ2VzJyk7XG4gICAgaWYgKGlyb25QYWdlcykge1xuICAgICAgaWYgKGlyb25QYWdlcy5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICBpcm9uUGFnZXMuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICAgIGlyb25QYWdlcy5hZGRFdmVudExpc3RlbmVyKCdpcm9uLWl0ZW1zLWNoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJykpIHtcbiAgICAgICAgICAgIGlyb25QYWdlcy5zZWxlY3QoJ2N1c3RvbXVpJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhUGFuZWxDb25maWcuc2hhZG93Um9vdCkge1xuICAgICAgY29uc3Qgcm9vdCA9IGhhUGFuZWxDb25maWcuc2hhZG93Um9vdCB8fCBoYVBhbmVsQ29uZmlnO1xuICAgICAgaWYgKHJvb3QubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZpc2libGUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpO1xuICAgICAgcm9vdC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSB2aXNpYmxlID8gJycgOiAnbm9uZSc7XG4gICAgfSBlbHNlIGlmIChoYVBhbmVsQ29uZmlnLnJvdXRlck9wdGlvbnMgJiYgaGFQYW5lbENvbmZpZy5yb3V0ZXJPcHRpb25zLnJvdXRlcykge1xuICAgICAgaWYgKCFoYVBhbmVsQ29uZmlnLnJvdXRlck9wdGlvbnMucm91dGVzLmN1c3RvbXVpKSB7XG4gICAgICAgIGhhUGFuZWxDb25maWcucm91dGVyT3B0aW9ucy5yb3V0ZXMuY3VzdG9tdWkgPSB7XG4gICAgICAgICAgdGFnOiAnaGEtY29uZmlnLWN1c3RvbS11aScsXG4gICAgICAgICAgbG9hZDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCksXG4gICAgICAgIH07XG4gICAgICAgIC8vIEN1c3RvbVVJIHBhbmVsIGlzIHRoZSBlbnRyeXBvaW50LCBzbyB3ZSBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJykpIHtcbiAgICAgICAgICBoYVBhbmVsQ29uZmlnLnVwZGF0ZShuZXcgTWFwKFtbJ3JvdXRlJywgdW5kZWZpbmVkXV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsU3RhdGVzSG9vaygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaG9tZS1hc3Npc3RhbnQnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAoIWhvbWVBc3Npc3RhbnQgfHwgIWhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzKSByZXR1cm47XG4gICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZSA9IGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzO1xuICAgICAgaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MgPSBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGNvbnN0IHsgaGFzcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKG9iai5zdGF0ZXMpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhvYmouc3RhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG9iai5zdGF0ZXNba2V5XTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuX2N1aV9rZWVwKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBuZXdFbnRpdHkgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBvYmouc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgICAgaWYgKGhhc3Muc3RhdGVzICYmIGVudGl0eSAhPT0gaGFzcy5zdGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgICAvLyBOZXcgc3RhdGUgYXJyaXZlZC4gUHV0IG1vZGlmaWVkIHN0YXRlIGluLlxuICAgICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSAhPT0gbmV3RW50aXR5KSB7XG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHNhbWUgc3RhdGUgYnV0IGNvbnRlbnRzIGNoYW5nZWQgZHVlIHRvIG90aGVyIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIG9iaik7XG4gICAgICAgIGlmIChvYmoudGhlbWVzICYmIGhhc3MuX3RoZW1lV2FpdGVycykge1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycy5mb3JFYWNoKHdhaXRlciA9PiB3YWl0ZXIuc3RhdGVDaGFuZ2VkKHdhaXRlci5zdGF0ZSkpO1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAobWFpbi5oYXNzICYmIG1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgICAgbWFpbi5fdXBkYXRlSGFzcyh7IHN0YXRlczogbWFpbi5oYXNzLnN0YXRlcyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsUGFydGlhbENhcmRzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdwYXJ0aWFsLWNhcmRzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3BhcnRpYWwtY2FyZHMnKTtcbiAgICAgIGlmICghcGFydGlhbENhcmRzIHx8ICFwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlcikgcmV0dXJuO1xuICAgICAgcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIgPSAoaGFzcywgZW50aXR5SWQpID0+IHtcbiAgICAgICAgaWYgKGhhc3Muc3RhdGVzW2VudGl0eUlkXS5hdHRyaWJ1dGVzLmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBleGNsdWRlcyA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMgJiYgZW50aXR5LmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVFbnRpdHlJZCA9IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSkgcmV0dXJuO1xuICAgICAgICAgICAgZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSA9IGVudGl0eTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy52aWV3KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdFbnRpdGllcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXModmlld0VudGl0aWVzKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICBpZCA9PiB2aWV3RW50aXRpZXNbaWRdLmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZXhjbHVkZXNbaWRdID0gdmlld0VudGl0aWVzW2lkXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIWV4Y2x1ZGVzW2VudGl0eUlkXTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGVsZW1lbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICAgIGlmICgha2xhc3MgfHwgIWtsYXNzLnByb3RvdHlwZSkgcmV0dXJuO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGtsYXNzLnByb3RvdHlwZSwgJ2xvY2FsaXplJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tTG9jYWxpemUodikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVPYmogJiYgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXN0b21Mb2NhbGl6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KCkge30sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgdGhlbWluZyBcInJlZ3VsYXJcIiB0b3AgYmFkZ2VzLlxuICBpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICAgIGlmICghaGFTdGF0ZUxhYmVsQmFkZ2UgfHwgIWhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQpIHJldHVybjtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAgIC8vIFRPRE86IENhbGwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzID0gdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycy5wdXNoKHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdGF0ZS1iYWRnZScpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtYmFkZ2UnKTtcbiAgICAgIGlmICghc3RhdGVCYWRnZSkgcmV0dXJuO1xuICAgICAgaWYgKHN0YXRlQmFkZ2UucHJvdG90eXBlLl91cGRhdGVJY29uQXBwZWFyYW5jZSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlID0gc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlO1xuICAgICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgICBzdGF0ZUJhZGdlLnByb3RvdHlwZS5fdXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBmdW5jdGlvbiBjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZShzdGF0ZU9iaikge1xuICAgICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJC5pY29uLnN0eWxlLCB7XG4gICAgICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZS5jYWxsKHRoaXMsIHN0YXRlT2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZWQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxVcGRhdGVkID0gc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlZDtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlZCA9IGZ1bmN0aW9uIGN1c3RvbVVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgICAgICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKCdzdGF0ZU9iaicpKSByZXR1cm47XG4gICAgICAgICAgY29uc3QgeyBzdGF0ZU9iaiB9ID0gdGhpcztcbiAgICAgICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5pY29uX2NvbG9yICYmICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9pY29uLnN0eWxlLCB7XG4gICAgICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxVcGRhdGVkLmNhbGwodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbEhhQXR0cmlidXRlcygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtYXR0cmlidXRlcycpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaGFBdHRyaWJ1dGVzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1hdHRyaWJ1dGVzJyk7XG4gICAgICBpZiAoIWhhQXR0cmlidXRlcyB8fCAhaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5IHx8XG4gICAgICAgICAhd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsKSByZXR1cm47XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5ID1cbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpLmNvbmNhdChcbiAgICAgICAgICAgIGV4dHJhRmlsdGVycyA/IGV4dHJhRmlsdGVycy5zcGxpdCgnLCcpIDogW10pO1xuICAgICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxIYUZvcm1DdXN0b21pemUoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLWZvcm0tY3VzdG9taXplJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYUZvcm1DdXN0b21pemUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWZvcm0tY3VzdG9taXplJyk7XG4gICAgICBpZiAoIWhhRm9ybUN1c3RvbWl6ZSkge1xuICAgICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSwgMTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSkgcmV0dXJuO1xuICAgICAgd2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lID0gdHJ1ZTtcblxuICAgICAgaWYgKCF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUgPVxuICAgICAgICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldXG4gICAgICAgICAgICAgICAgfHwgeyB0eXBlOiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdE9wZW5PYmplY3Qoa2V5LCBjb25maWcudHlwZSA9PT0gJ2pzb24nID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMpIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyA9XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgICAgICAgICBsb2NhbEF0dHJpYnV0ZXMsIGdsb2JhbEF0dHJpYnV0ZXMsIGV4aXN0aW5nQXR0cmlidXRlcywgbmV3QXR0cmlidXRlcykge1xuICAgICAgICAgICAgY29uc3Qga25vd25LZXlzID1cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25mID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmYgJiYgKCFjb25mLmRvbWFpbnMgfHwgIXRoaXMuZW50aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmYuZG9tYWlucy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4odGhpcy5lbnRpdHkpKSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGxvY2FsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZ2xvYmFsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZXhpc3RpbmdBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhuZXdBdHRyaWJ1dGVzKSk7XG4gICAgICAgICAgICByZXR1cm4ga25vd25LZXlzLnNvcnQoKS5jb25jYXQoJ090aGVyJyk7XG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsQ2xhc3NIb29rcygpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSA9IHRydWU7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxQYXJ0aWFsQ2FyZHMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlc0hvb2soKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZUJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUF0dHJpYnV0ZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NlbmUnKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NyaXB0Jyk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxDbGFzc0hvb2tzKCk7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIW1haW4uaGFzcyB8fCAhbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgLy8gQ29ubmVjdGlvbiB3YXNuJ3QgbWFkZSB5ZXQuIFRyeSBpbiAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbml0LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmN1c3RvbVVJLmluaXREb25lID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS51c2VDdXN0b21pemVyKCk7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb24tY2hhbmdlZCcsIHdpbmRvdy5zZXRUaW1lb3V0LmJpbmQobnVsbCwgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzLCAxMDApKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5sb2coYExvYWRlZCBDdXN0b21VSSAke1ZFUlNJT059YCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgaWYgKCF3aW5kb3cuQ1VTVE9NX1VJX0xJU1QpIHtcbiAgICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVCA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QucHVzaCh7XG4gICAgICBuYW1lOiAnQ3VzdG9tVUknLFxuICAgICAgdmVyc2lvbjogVkVSU0lPTixcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXktZ2l0L2hvbWUtYXNzaXN0YW50LWN1c3RvbS11aScsXG4gICAgfSk7XG4gIH0sXG5cbiAgcnVuSG9va3MoKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUoKTtcbiAgfSxcblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhLWRldmljZS1uYW1lJykgfHwgJyc7XG4gIH0sXG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScsIG5hbWUgfHwgJycpO1xuICB9LFxuXG4gIGNvbXB1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uQm9keSA9ICh0ZW1wbGF0ZS5pbmRleE9mKCdyZXR1cm4nKSA+PSAwKSA/IHRlbXBsYXRlIDogYHJldHVybiBcXGAke3RlbXBsYXRlfVxcYDtgO1xuICAgIHRyeSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ2hhc3MnLCAnZW50aXRpZXMnLCAnZW50aXR5JywgJ2F0dHJpYnV0ZXMnLCAnYXR0cmlidXRlJywgJ3N0YXRlJywgZnVuY3Rpb25Cb2R5KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIHJldHVybiBmdW5jKGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGlmICgoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB8fCBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfSBpbiB0ZW1wbGF0ZSAke2Z1bmN0aW9uQm9keX1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9LFxufTtcbndpbmRvdy5jdXN0b21VSS5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCAnMjAxOTA1MTgnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==