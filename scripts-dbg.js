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

const DEFAULT_PANEL = "states";
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

const DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch"]);
/** Temperature units. */

const UNIT_C = "°C";
const UNIT_F = "°F";
/** Entity ID of the default view. */

const DEFAULT_VIEW_ENTITY_ID = "group.default_view";

/***/ }),

/***/ "../home-assistant-polymer/src/common/dom/apply_themes_on_element.js":
/*!***************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/dom/apply_themes_on_element.js ***!
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

  const styles = Object.assign({}, element._themes);

  if (themeName !== "default") {
    var theme = themes.themes[themeName];
    Object.keys(theme).forEach(key => {
      var prefixedKey = "--" + key;
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

  if (!updateMeta) return;
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

/***/ "../home-assistant-polymer/src/common/dom/dynamic_content_updater.js":
/*!***************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/dom/dynamic_content_updater.js ***!
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
  cover: ["garage"],
  sensor: ["battery", "humidity", "illuminance", "temperature", "pressure"]
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
    domains: ["binary_sensor", "cover", "sensor"]
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

/***/ "./src/elements/cui-base-element.js":
/*!******************************************!*\
  !*** ./src/elements/cui-base-element.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks.js */ "./src/utils/hooks.js");

/**
 * @extends HTMLElement
 */

class CuiBaseElement extends Polymer.Element {
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

/* harmony default export */ __webpack_exports__["default"] = (CuiBaseElement);

/***/ }),

/***/ "./src/elements/dynamic-element.js":
/*!*****************************************!*\
  !*** ./src/elements/dynamic-element.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/dynamic_content_updater.js */ "../home-assistant-polymer/src/common/dom/dynamic_content_updater.js");

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
    Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, elementName ? elementName.toUpperCase() : 'DIV', {
      hass,
      stateObj,
      inDialog
    });
  }

}

customElements.define('dynamic-element', DynamicElement);

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
/* harmony import */ var _home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/apply_themes_on_element.js */ "../home-assistant-polymer/src/common/dom/apply_themes_on_element.js");
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
      Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element, hass.themes || {
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
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _mixins_events_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/events-mixin.js */ "./src/mixins/events-mixin.js");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks.js */ "./src/utils/hooks.js");



/**
 * @extends HTMLElement
 */

class HaConfigCustomUi extends Object(_mixins_events_mixin_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Polymer.Element) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <style include="ha-style"></style>
    <app-header-layout has-scrolling-region>
      <app-header slot="header" fixed>
        <app-toolbar>
          <paper-icon-button
            icon='hass:arrow-left'
            on-click='_backHandler'
          ></paper-icon-button>
          <div main-title>Custom UI settings</div>
        </app-toolbar>
      </app-header>

      <ha-config-section is-wide='[[isWide]]'>
        <paper-card heading='Device name'>
          <div class='card-content'>
            Set device name so that you can reference it in per-device settings
            <paper-input
              label='Name'
              value='{{name}}'
            ></paper-input>
          </div>
        </paper-card>
      </ha-config-section>
    </app-header-layout>
    `;
  }

  static get properties() {
    return {
      isWide: Boolean,
      name: {
        type: String,
        observer: 'nameChanged'
      }
    };
  }

  ready() {
    super.ready();
    this.name = window.customUI.getName();
  }

  nameChanged(name) {
    window.customUI.setName(name);
  }

  _backHandler() {
    window.history.back();
    this.fire('location-changed');
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

/***/ }),

/***/ "./src/elements/state-card-custom-ui.js":
/*!**********************************************!*\
  !*** ./src/elements/state-card-custom-ui.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/apply_themes_on_element.js */ "../home-assistant-polymer/src/common/dom/apply_themes_on_element.js");
/* harmony import */ var _home_assistant_polymer_src_common_entity_compute_state_domain_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/compute_state_domain.ts */ "../home-assistant-polymer/src/common/entity/compute_state_domain.ts");
/* harmony import */ var _home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/dynamic_content_updater.js */ "../home-assistant-polymer/src/common/dom/dynamic_content_updater.js");
/* harmony import */ var _home_assistant_polymer_src_common_entity_state_card_type_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/state_card_type.ts */ "../home-assistant-polymer/src/common/entity/state_card_type.ts");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks.js */ "./src/utils/hooks.js");
/* harmony import */ var _state_card_with_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-card-with-slider.js */ "./src/elements/state-card-with-slider.js");
/* harmony import */ var _state_card_without_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-card-without-slider.js */ "./src/elements/state-card-without-slider.js");







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

      Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._container, this.hass.themes || {
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

    Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'HA-BADGES-CARD', {
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

    Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])(themeTarget, hass.themes || {
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

    Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (secondaryStateCardType || customStateCardType || `STATE-CARD-${originalStateCardType}`).toUpperCase(), params);
  }

}

customElements.define('state-card-custom-ui', StateCardCustomUi);

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




/**
 * @extends HTMLElement
 */

class StateCardWithSlider extends _cui_base_element_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
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



/**
 * @extends HTMLElement
 */

class StateCardWithoutSlider extends _cui_base_element_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
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

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/* harmony default export */ __webpack_exports__["default"] = (superClass => {
  /**
   * @extends HTMLElement
   */
  class EventsMixin extends superClass {
    /**
     * Dispatches a custom event with an optional detail value.
     *
     * @param {string} type Name of event type.
     * @param {*=} detail Detail value containing event-specific
     *   payload.
     * @param {{ bubbles: (boolean|undefined),
                 cancelable: (boolean|undefined),
                 composed: (boolean|undefined) }=}
     *  options Object specifying options.  These may include:
     *  `bubbles` (boolean, defaults to `true`),
     *  `cancelable` (boolean, defaults to false), and
     *  `node` on which to fire the event (HTMLElement, defaults to `this`).
     * @return {Event} The new event that was fired.
     */
    fire(type, detail = {}, options = {}) {
      const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed
      });
      event.detail = detail;
      const node = options.node || this;
      node.dispatchEvent(event);
      return event;
    }

  }

  return EventsMixin;
});

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
/* harmony import */ var _home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/apply_themes_on_element.js */ "../home-assistant-polymer/src/common/dom/apply_themes_on_element.js");
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
            Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, this.hass.themes || {
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
/* harmony default export */ __webpack_exports__["default"] = ('20190324');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUudHMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2N1aS1iYXNlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZHluYW1pYy13aXRoLWV4dHJhLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9oYS10aGVtZWQtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9zdGF0ZS1jYXJkLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGFzcy1hdHRyaWJ1dGUtdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZlcnNpb24uanMiXSwibmFtZXMiOlsiREVGQVVMVF9ET01BSU5fSUNPTiIsIkRFRkFVTFRfUEFORUwiLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfV0lUSF9NT1JFX0lORk8iLCJET01BSU5TX0hJREVfTU9SRV9JTkZPIiwiRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSIsIlNUQVRFU19PRkYiLCJET01BSU5TX1RPR0dMRSIsIlNldCIsIlVOSVRfQyIsIlVOSVRfRiIsIkRFRkFVTFRfVklFV19FTlRJVFlfSUQiLCJhcHBseVRoZW1lc09uRWxlbWVudCIsImVsZW1lbnQiLCJ0aGVtZXMiLCJsb2NhbFRoZW1lIiwidXBkYXRlTWV0YSIsIl90aGVtZXMiLCJ0aGVtZU5hbWUiLCJkZWZhdWx0X3RoZW1lIiwic3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGhlbWUiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInByZWZpeGVkS2V5IiwidXBkYXRlU3R5bGVzIiwid2luZG93IiwiU2hhZHlDU1MiLCJzdHlsZVN1YnRyZWUiLCJtZXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidGhlbWVDb2xvciIsImR5bmFtaWNDb250ZW50VXBkYXRlciIsInJvb3QiLCJuZXdFbGVtZW50VGFnIiwiYXR0cmlidXRlcyIsInJvb3RFbCIsImN1c3RvbUVsIiwibGFzdENoaWxkIiwidGFnTmFtZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInRvTG93ZXJDYXNlIiwic2V0UHJvcGVydGllcyIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsImNhblRvZ2dsZURvbWFpbiIsImhhc3MiLCJkb21haW4iLCJzZXJ2aWNlcyIsImNhblRvZ2dsZVN0YXRlIiwic3RhdGVPYmoiLCJzdGF0ZSIsImNvbXB1dGVEb21haW4iLCJlbnRpdHlJZCIsInN1YnN0ciIsImluZGV4T2YiLCJjb21wdXRlU3RhdGVEb21haW4iLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsInN1cHBvcnRzRmVhdHVyZSIsImZlYXR1cmUiLCJzdXBwb3J0ZWRfZmVhdHVyZXMiLCJoYXNzQXR0cmlidXRlVXRpbCIsIkRPTUFJTl9ERVZJQ0VfQ0xBU1MiLCJiaW5hcnlfc2Vuc29yIiwiY292ZXIiLCJzZW5zb3IiLCJVTktOT1dOX1RZUEUiLCJBRERfVFlQRSIsIlRZUEVfVE9fVEFHIiwic3RyaW5nIiwianNvbiIsImljb24iLCJib29sZWFuIiwiYXJyYXkiLCJMT0dJQ19TVEFURV9BVFRSSUJVVEVTIiwiZW50aXR5X3BpY3R1cmUiLCJ1bmRlZmluZWQiLCJmcmllbmRseV9uYW1lIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiZW11bGF0ZWRfaHVlIiwiZG9tYWlucyIsImVtdWxhdGVkX2h1ZV9uYW1lIiwiaGFhc2thX2hpZGRlbiIsImhhYXNrYV9uYW1lIiwiaG9tZWJyaWRnZV9oaWRkZW4iLCJob21lYnJpZGdlX25hbWUiLCJhdHRyaWJ1dGlvbiIsImN1c3RvbV91aV9tb3JlX2luZm8iLCJjdXN0b21fdWlfc3RhdGVfY2FyZCIsImRldmljZV9jbGFzcyIsIm9wdGlvbnMiLCJhc3N1bWVkX3N0YXRlIiwiaW5pdGlhbF9zdGF0ZSIsInVuaXRfb2ZfbWVhc3VyZW1lbnQiLCJKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5IiwicHJvcCIsIkxpdGVyYWxTdHJpbmciLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwidG9TdHJpbmciLCJsaXRlcmFsVmFsdWUiLCJFcnJvciIsImh0bWxWYWx1ZSIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJodG1sIiwic3RyaW5ncyIsInZhbHVlcyIsInRlbXBsYXRlIiwicmVkdWNlIiwiYWNjIiwidiIsImlkeCIsImh0bWxMaXRlcmFsIiwiQ3VpQmFzZUVsZW1lbnQiLCJQb2x5bWVyIiwiRWxlbWVudCIsInByb3BlcnRpZXMiLCJpbkRpYWxvZyIsIkJvb2xlYW4iLCJjb250cm9sRWxlbWVudCIsIlN0cmluZyIsImV4dHJhIiwiQXJyYXkiLCJjb21wdXRlZCIsImNvbXB1dGVFeHRyYSIsImV4dHJhcyIsImV4dHJhX2RhdGFfdGVtcGxhdGUiLCJpc0FycmF5IiwibWFwIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJzdGF0ZXMiLCJmaWx0ZXIiLCJzaG93TGFzdENoYW5nZWQiLCJsZW5ndGgiLCJzaG93X2xhc3RfY2hhbmdlZCIsImhhc0V4dHJhIiwiRHluYW1pY0VsZW1lbnQiLCJlbGVtZW50TmFtZSIsIm9ic2VydmVycyIsIm9ic2VydmVyRnVuYyIsInRvVXBwZXJDYXNlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJ3aGVuRGVmaW5lZCIsInRoZW4iLCJEeW5hbWljV2l0aEV4dHJhIiwiZ2V0IiwiZXh0cmFPYmoiLCJfYXR0YWNoZWQiLCJleHRyYU9ialZpc2libGUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiX2lzQXR0YWNoZWQiLCJhdHRhY2hlZCIsImV4dHJhX2JhZGdlIiwiZXh0cmFCYWRnZXMiLCJleHRyYUJhZGdlIiwibWF5YmVDaGFuZ2VPYmplY3QiLCJhdHRyaWJ1dGUiLCJ1bml0IiwiYmxhY2tsaXN0IiwiYmxhY2tsaXN0X3N0YXRlcyIsInNvbWUiLCJSZWdFeHAiLCJ0ZXN0IiwiX2VudGl0eURpc3BsYXkiLCJjb21wdXRlRXh0cmFWaXNpYmxlIiwiZXh0cmFDbGFzcyIsIl9zaG93Q29udHJvbCIsImhpZGVfY29udHJvbCIsImNvbXB1dGVTdGF0ZURpc3BsYXkiLCJoYUxvY2FsaXplIiwibG9jYWxpemUiLCJpc0NvbmZpcm1Db250cm9scyIsImNvbmZpcm1fY29udHJvbHMiLCJjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jayIsImNsaWNrSGFuZGxlciIsImUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJsb2NrIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJhcHBseVRoZW1lcyIsImV4dHJhRG9tQ2hhbmdlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtIiwiSGFDb25maWdDdXN0b21VaSIsImlzV2lkZSIsIm5hbWUiLCJvYnNlcnZlciIsInJlYWR5IiwiZ2V0TmFtZSIsIm5hbWVDaGFuZ2VkIiwic2V0TmFtZSIsIl9iYWNrSGFuZGxlciIsImhpc3RvcnkiLCJiYWNrIiwiZmlyZSIsIkhhVGhlbWVkU2xpZGVyIiwiZGlzYWJsZU9mZldoZW5NaW4iLCJfY29tcHV0ZUF0dHJpYnV0ZSIsImNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJwaW4iLCJpc09uIiwibm90aWZ5IiwiX3RoZW1lZE1pbiIsIl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJhdHRyIiwiZGVmIiwiY29tcHV0ZUNsYXNzIiwidGhlbWVkTWluIiwidmFsdWVDaGFuZ2VkIiwiZXYiLCJ0YXJnZXQiLCJTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUyIsIkRPTUFJTl9UT19TTElERVJfU1VQUE9SVCIsImxpZ2h0IiwiY2xpbWF0ZSIsIlRZUEVfVE9fQ09OVFJPTCIsInRvZ2dsZSIsImRpc3BsYXkiLCJTdGF0ZUNhcmRDdXN0b21VaSIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX2NvbnRhaW5lciIsInNldFByb3BlcnR5IiwiaW5wdXRDaGFuZ2VkIiwibWFyZ2luIiwicGFkZGluZyIsImJhZGdlTW9kZSIsImlkIiwiY29uc29sZSIsIndhcm4iLCJiYWRnZXNfbGlzdCIsInB1c2giLCJwYXJhbXMiLCJ3aWR0aCIsImZvbnRTaXplIiwiY2xlYW5CYWRnZVN0eWxlIiwibW9kaWZpZWRPYmoiLCJ0aGVtZVRhcmdldCIsIm1heWJlSGlkZUVudGl0eSIsInNsaWRlckVsaWdpYmxlXyIsIm9iaiIsInN0YXRlX2NhcmRfbW9kZSIsInJlZ3VsYXJNb2RlXyIsIm9yaWdpbmFsU3RhdGVDYXJkVHlwZSIsImN1c3RvbVN0YXRlQ2FyZFR5cGUiLCJzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIiwic3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5Iiwic2VydmljZU1pbiIsInNlcnZpY2VNYXgiLCJ2YWx1ZU5hbWUiLCJzZXRWYWx1ZU5hbWUiLCJuYW1lT24iLCJtaW5fdGVtcCIsIm1heF90ZW1wIiwiY29udHJvbF9lbGVtZW50IiwiU3RhdGVDYXJkV2l0aFNsaWRlciIsInNsaWRlclZhbHVlIiwibW9kZSIsInN0cmV0Y2hTbGlkZXIiLCJicmVha1NsaWRlciIsImhpZGVTbGlkZXIiLCJsaW5lVG9vTG9uZyIsIm1pbkxpbmVCcmVhayIsIm1heExpbmVCcmVhayIsInNob3dTbGlkZXIiLCJfb25Jcm9uUmVzaXplIiwiYmluZCIsIl9pc0Nvbm5lY3RlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfd2FpdEZvckxheW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfc2V0TW9kZSIsIl9mcmFtZUlkIiwicmVhZHlUb0NvbXB1dGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwcmV2QnJlYWtTbGlkZXIiLCJwcmV2SGlkZVNsaWRlciIsIiQiLCJjb250YWluZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiY29udGFpbmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhdGVIZWlnaHQiLCJfY29tcHV0ZVdyYXBDbGFzcyIsIl9zaG93U2xpZGVyIiwic2xpZGVyQ2hhbmdlZCIsInBhcnNlSW50IiwicGFyYW0iLCJpc05hTiIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJjYWxsU2VydmljZSIsInN0YXRlT2JqQ2hhbmdlZCIsInN0cmV0Y2hfc2xpZGVyIiwiU3RhdGVDYXJkV2l0aG91dFNsaWRlciIsInN1cGVyQ2xhc3MiLCJFdmVudHNNaXhpbiIsImRldGFpbCIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNvbXBvc2VkIiwibm9kZSIsImRpc3BhdGNoRXZlbnQiLCJTVVBQT1JURURfU0xJREVSX01PREVTIiwiY3VzdG9tVWlBdHRyaWJ1dGVzIiwiZGV2aWNlIiwidGVtcGxhdGVzIiwiX3N0YXRlRGlzcGxheSIsImNvbmNhdCIsInNsaWRlcl90aGVtZSIsImhpZGVfaW5fZGVmYXVsdF92aWV3IiwiaWNvbl9jb2xvciIsImRvbUhvc3QiLCJnZXRSb290Tm9kZSIsIkRvY3VtZW50RnJhZ21lbnQiLCJob3N0IiwibGlnaHRPclNoYWRvdyIsInNlbGVjdG9yIiwic2hhZG93Um9vdCIsImdldEVsZW1lbnRIaWVyYXJjaHkiLCJoaWVyYXJjaHkiLCJzaGlmdCIsImdldENvbnRleHQiLCJfY29udGV4dCIsImdyb3VwRW50aXR5IiwicmV2ZXJzZSIsImZpbmRNYXRjaCIsImZpbmQiLCJvcHRpb24iLCJtYXRjaCIsIm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2UiLCJhcHBseUF0dHJpYnV0ZXMiLCJtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAiLCJjb250ZXh0IiwiYyIsIl9zZXRLZWVwIiwiX2N1aV9rZWVwIiwibWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJoYXNHbG9iYWwiLCJoYXNDaGFuZ2VzIiwidW50ZW1wbGF0ZWRfYXR0cmlidXRlcyIsInVudGVtcGxhdGVkX3N0YXRlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5IiwibWF5YmVBcHBseVRlbXBsYXRlcyIsIm5ld1Jlc3VsdCIsImNoZWNrQXR0cmlidXRlcyIsImxhc3RfY2hhbmdlZCIsImFsbG93SGlkZGVuIiwiZml4R3JvdXBUaXRsZXMiLCJob21lQXNzaXN0YW50TWFpbiIsImhhQ2FyZHMiLCJtYWluIiwiY2FyZHMiLCJjYXJkIiwibmFtZUVsZW0iLCJ0ZXh0Q29udGVudCIsImNvbnRyb2xDb2x1bW5zIiwiY29sdW1ucyIsInBhcnRpYWxDYXJkcyIsImYiLCJoYW5kbGVXaW5kb3dDaGFuZ2UiLCJfdXBkYXRlQ29sdW1ucyIsIm1xbHMiLCJtcWwiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInVzZUN1c3RvbWl6ZXIiLCJjdXN0b21pemVyIiwiaGlkZV9hdHRyaWJ1dGVzIiwidXBkYXRlQ29uZmlnUGFuZWwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImhhUGFuZWxDb25maWciLCJoYUNvbmZpZ05hdmlnYXRpb24iLCJjdWlQYXRjaCIsIl9vcmlnaW5hbENvbXB1dGVMb2FkZWQiLCJfY29tcHV0ZUxvYWRlZCIsIl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uIiwiX2NvbXB1dGVDYXB0aW9uIiwiX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uIiwiX2NvbXB1dGVEZXNjcmlwdGlvbiIsInBhZ2UiLCJwYWdlcyIsImNvbmYiLCJjYXB0aW9uIiwibG9hZGVkIiwiZ2V0SGFDb25maWdDdXN0b21VaSIsImhhQ29uZmlnQ3VzdG9tVWkiLCJpcm9uUGFnZXMiLCJsYXN0RWxlbWVudENoaWxkIiwic2VsZWN0IiwidmlzaWJsZSIsInJvdXRlck9wdGlvbnMiLCJyb3V0ZXMiLCJjdXN0b211aSIsInRhZyIsImxvYWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInVwZGF0ZSIsIk1hcCIsImluc3RhbGxTdGF0ZXNIb29rIiwiaG9tZUFzc2lzdGFudCIsIl91cGRhdGVIYXNzIiwib3JpZ2luYWxVcGRhdGUiLCJuZXdFbnRpdHkiLCJfdGhlbWVXYWl0ZXJzIiwid2FpdGVyIiwic3RhdGVDaGFuZ2VkIiwiaW5zdGFsbFBhcnRpYWxDYXJkcyIsIl9kZWZhdWx0Vmlld0ZpbHRlciIsImV4Y2x1ZGVzIiwiZXhjbHVkZUVudGl0eUlkIiwiaW5zdGFsbEFjdGlvbk5hbWUiLCJrbGFzcyIsImRlZmluZVByb3BlcnR5IiwiY3VzdG9tTG9jYWxpemUiLCJhY3Rpb25fbmFtZSIsIl9fZGF0YSIsInNldCIsImluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSIsImhhU3RhdGVMYWJlbEJhZGdlIiwic3RhcnRJbnRlcnZhbCIsImluc3RhbGxTdGF0ZUJhZGdlIiwic3RhdGVCYWRnZSIsIl91cGRhdGVJY29uQXBwZWFyYW5jZSIsIm9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZSIsImJhY2tncm91bmRJbWFnZSIsImNvbG9yIiwidXBkYXRlZCIsIm9yaWdpbmFsVXBkYXRlZCIsImN1c3RvbVVwZGF0ZWQiLCJjaGFuZ2VkUHJvcHMiLCJoYXMiLCJfaWNvbiIsImluc3RhbGxIYUF0dHJpYnV0ZXMiLCJoYUF0dHJpYnV0ZXMiLCJjb21wdXRlRmlsdGVyc0FycmF5IiwiY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheSIsImV4dHJhRmlsdGVycyIsInNwbGl0IiwiaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSIsImhhRm9ybUN1c3RvbWl6ZSIsImhhRm9ybUN1c3RvbWl6ZUluaXREb25lIiwiX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUiLCJjdXN0b21Db21wdXRlU2luZ2xlQXR0cmlidXRlIiwic2Vjb25kYXJ5IiwiY29uZmlnIiwiX2luaXRPcGVuT2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwiY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMiLCJsb2NhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGVzIiwiZXhpc3RpbmdBdHRyaWJ1dGVzIiwia25vd25LZXlzIiwiZmlsdGVyRnJvbUF0dHJpYnV0ZXMiLCJzb3J0IiwiaW5zdGFsbENsYXNzSG9va3MiLCJjbGFzc0luaXREb25lIiwiaW5pdCIsImluaXREb25lIiwicnVuSG9va3MiLCJsb2ciLCJDVVNUT01fVUlfTElTVCIsInZlcnNpb24iLCJ1cmwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImZ1bmN0aW9uQm9keSIsImZ1bmMiLCJGdW5jdGlvbiIsIlN5bnRheEVycm9yIiwiUmVmZXJlbmNlRXJyb3IiLCJtZXNz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RDlDLEVBQ3VERixZQUR2RCxDQUFiO0FBRUE7O0FBQ0EsYUFBT0MsSUFBSSxDQUFDL2MsSUFBRCxFQUFPYSxRQUFQLEVBQWlCRyxNQUFqQixFQUF5QjVCLFVBQXpCLEVBQXFDOEksU0FBckMsRUFBZ0Q3SCxLQUFoRCxDQUFYO0FBQ0QsS0FORCxDQU1FLE9BQU9nSixDQUFQLEVBQVU7QUFDVjtBQUNBLFVBQUtBLENBQUMsWUFBWTRULFdBQWQsSUFBOEI1VCxDQUFDLFlBQVk2VCxjQUEvQyxFQUErRDtBQUM3RGhRLGVBQU8sQ0FBQ0MsSUFBUixDQUFjLEdBQUU5RCxDQUFDLENBQUNhLElBQUssS0FBSWIsQ0FBQyxDQUFDOFQsT0FBUSxnQkFBZUwsWUFBYSxFQUFqRTtBQUNBLGVBQU8sSUFBUDtBQUNEO0FBQ0Q7OztBQUNBLFlBQU16VCxDQUFOO0FBQ0Q7QUFDRjs7QUEvbkJrQyxDQUFyQztBQWlvQkE5SyxNQUFNLENBQUM2SCxRQUFQLENBQWdCZ1csSUFBaEIsRzs7Ozs7Ozs7Ozs7OztBQ3pvQkEsK0RBQWUsVUFBZixFIiwiZmlsZSI6InNjcmlwdHMtZGJnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL3NjcmlwdHMuanNcIik7XG4iLCIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gXCJoYXNzOmJvb2ttYXJrXCI7XG5cbi8qKiBQYW5lbCB0byBzaG93IHdoZW4gbm8gcGFuZWwgaXMgcGlja2VkLiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFORUwgPSBcInN0YXRlc1wiO1xuXG4vKiogRG9tYWlucyB0aGF0IGhhdmUgYSBzdGF0ZSBjYXJkLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9DQVJEID0gW1xuICBcImNsaW1hdGVcIixcbiAgXCJjb3ZlclwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJsb2NrXCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwic2NlbmVcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJ0aW1lclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHdpdGggc2VwYXJhdGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfTU9SRV9JTkZPID0gW1xuICBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG4gIFwiY2FtZXJhXCIsXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImNvdmVyXCIsXG4gIFwiZmFuXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwiaW5wdXRfZGF0ZXRpbWVcIixcbiAgXCJsaWdodFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzdW5cIixcbiAgXCJ1cGRhdGVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VhdGhlclwiLFxuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG93IG5vIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19ISURFX01PUkVfSU5GTyA9IFtcbiAgXCJpbnB1dF9udW1iZXJcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwic2NlbmVcIixcbiAgXCJ3ZWJsaW5rXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3VsZCBoYXZlIHRoZSBoaXN0b3J5IGhpZGRlbiBpbiB0aGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZID0gW1xuICBcImNhbWVyYVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJzY2VuZVwiLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcImNsb3NlZFwiLCBcImxvY2tlZFwiLCBcIm9mZlwiXTtcblxuLyoqIERvbWFpbnMgd2hlcmUgd2UgYWxsb3cgdG9nZ2xlIGluIExvdmVsYWNlLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfVE9HR0xFID0gbmV3IFNldChbXG4gIFwiZmFuXCIsXG4gIFwiaW5wdXRfYm9vbGVhblwiLFxuICBcImxpZ2h0XCIsXG4gIFwic3dpdGNoXCIsXG5dKTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9IFwiwrBDXCI7XG5leHBvcnQgY29uc3QgVU5JVF9GID0gXCLCsEZcIjtcblxuLyoqIEVudGl0eSBJRCBvZiB0aGUgZGVmYXVsdCB2aWV3LiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSBcImdyb3VwLmRlZmF1bHRfdmlld1wiO1xuIiwiLyoqXG4gKiBBcHBseSBhIHRoZW1lIHRvIGFuIGVsZW1lbnQgYnkgc2V0dGluZyB0aGUgQ1NTIHZhcmlhYmxlcyBvbiBpdC5cbiAqXG4gKiBlbGVtZW50OiBFbGVtZW50IHRvIGFwcGx5IHRoZW1lIG9uLlxuICogdGhlbWVzOiBIQVNTIFRoZW1lIGluZm9ybWF0aW9uXG4gKiBsb2NhbFRoZW1lOiBzZWxlY3RlZCB0aGVtZS5cbiAqIHVwZGF0ZU1ldGE6IGJvb2xlYW4gaWYgd2Ugc2hvdWxkIHVwZGF0ZSB0aGUgdGhlbWUtY29sb3IgbWV0YSBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgZWxlbWVudCxcbiAgdGhlbWVzLFxuICBsb2NhbFRoZW1lLFxuICB1cGRhdGVNZXRhID0gZmFsc2Vcbikge1xuICBpZiAoIWVsZW1lbnQuX3RoZW1lcykge1xuICAgIGVsZW1lbnQuX3RoZW1lcyA9IHt9O1xuICB9XG4gIGxldCB0aGVtZU5hbWUgPSB0aGVtZXMuZGVmYXVsdF90aGVtZTtcbiAgaWYgKGxvY2FsVGhlbWUgPT09IFwiZGVmYXVsdFwiIHx8IChsb2NhbFRoZW1lICYmIHRoZW1lcy50aGVtZXNbbG9jYWxUaGVtZV0pKSB7XG4gICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgfVxuICBjb25zdCBzdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50Ll90aGVtZXMpO1xuICBpZiAodGhlbWVOYW1lICE9PSBcImRlZmF1bHRcIikge1xuICAgIHZhciB0aGVtZSA9IHRoZW1lcy50aGVtZXNbdGhlbWVOYW1lXTtcbiAgICBPYmplY3Qua2V5cyh0aGVtZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB2YXIgcHJlZml4ZWRLZXkgPSBcIi0tXCIgKyBrZXk7XG4gICAgICBlbGVtZW50Ll90aGVtZXNbcHJlZml4ZWRLZXldID0gXCJcIjtcbiAgICAgIHN0eWxlc1twcmVmaXhlZEtleV0gPSB0aGVtZVtrZXldO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtZW50LnVwZGF0ZVN0eWxlcykge1xuICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gIH0gZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgLy8gaW1wbGVtZW50IHVwZGF0ZVN0eWxlcygpIG1ldGhvZCBvZiBQb2xlbWVyIGVsZW1lbnRzXG4gICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlU3VidHJlZSgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGVsZW1lbnQpLCBzdHlsZXMpO1xuICB9XG5cbiAgaWYgKCF1cGRhdGVNZXRhKSByZXR1cm47XG5cbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9dGhlbWUtY29sb3JdXCIpO1xuICBpZiAobWV0YSkge1xuICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoXCJkZWZhdWx0LWNvbnRlbnRcIikpIHtcbiAgICAgIG1ldGEuc2V0QXR0cmlidXRlKFwiZGVmYXVsdC1jb250ZW50XCIsIG1ldGEuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSk7XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lQ29sb3IgPVxuICAgICAgc3R5bGVzW1wiLS1wcmltYXJ5LWNvbG9yXCJdIHx8IG1ldGEuZ2V0QXR0cmlidXRlKFwiZGVmYXVsdC1jb250ZW50XCIpO1xuICAgIG1ldGEuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCB0aGVtZUNvbG9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBVcGRhdGUgcm9vdCdzIGNoaWxkIGVsZW1lbnQgdG8gYmUgbmV3RWxlbWVudFRhZyByZXBsYWNpbmcgYW5vdGhlciBleGlzdGluZyBjaGlsZCBpZiBhbnkuXG4gKiBDb3B5IGF0dHJpYnV0ZXMgaW50byB0aGUgY2hpbGQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pY0NvbnRlbnRVcGRhdGVyKHJvb3QsIG5ld0VsZW1lbnRUYWcsIGF0dHJpYnV0ZXMpIHtcbiAgY29uc3Qgcm9vdEVsID0gcm9vdDtcbiAgbGV0IGN1c3RvbUVsO1xuXG4gIGlmIChyb290RWwubGFzdENoaWxkICYmIHJvb3RFbC5sYXN0Q2hpbGQudGFnTmFtZSA9PT0gbmV3RWxlbWVudFRhZykge1xuICAgIGN1c3RvbUVsID0gcm9vdEVsLmxhc3RDaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBpZiAocm9vdEVsLmxhc3RDaGlsZCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKHJvb3RFbC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBDcmVhdGluZyBhbiBlbGVtZW50IHdpdGggdXBwZXIgY2FzZSB3b3JrcyBmaW5lIGluIENocm9tZSwgYnV0IGluIEZGIGl0IGRvZXNuJ3QgaW1tZWRpYXRlbHlcbiAgICAvLyBiZWNvbWUgYSBkZWZpbmVkIEN1c3RvbSBFbGVtZW50LiBQb2x5bWVyIGRvZXMgdGhhdCBpbiBzb21lIGxhdGVyIHBhc3MuXG4gICAgY3VzdG9tRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5ld0VsZW1lbnRUYWcudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwuc2V0UHJvcGVydGllcykge1xuICAgIGN1c3RvbUVsLnNldFByb3BlcnRpZXMoYXR0cmlidXRlcyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgY3VzdG9tIGVsZW1lbnQgZGVmaW5pdGlvbiB3YXNuJ3QgbG9hZGVkIHlldCAtIHNldFByb3BlcnRpZXMgd291bGQgYmVcbiAgICAvLyBtaXNzaW5nLCBidXQgbm8gaGFybSBpbiBzZXR0aW5nIGF0dHJpYnV0ZXMgb25lLWJ5LW9uZSB0aGVuLlxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY3VzdG9tRWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGN1c3RvbUVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVEb21haW4oaGFzczogSG9tZUFzc2lzdGFudCwgZG9tYWluOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2VydmljZXMgPSBoYXNzLnNlcnZpY2VzW2RvbWFpbl07XG4gIGlmICghc2VydmljZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZG9tYWluID09PSBcImxvY2tcIikge1xuICAgIHJldHVybiBcImxvY2tcIiBpbiBzZXJ2aWNlcztcbiAgfVxuICBpZiAoZG9tYWluID09PSBcImNvdmVyXCIpIHtcbiAgICByZXR1cm4gXCJvcGVuX2NvdmVyXCIgaW4gc2VydmljZXM7XG4gIH1cbiAgcmV0dXJuIFwidHVybl9vblwiIGluIHNlcnZpY2VzO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjYW5Ub2dnbGVEb21haW4gZnJvbSBcIi4vY2FuX3RvZ2dsZV9kb21haW5cIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuL3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlU3RhdGUoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5XG4pIHtcbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgaWYgKGRvbWFpbiA9PT0gXCJncm91cFwiKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLnN0YXRlID09PSBcIm9uXCIgfHwgc3RhdGVPYmouc3RhdGUgPT09IFwib2ZmXCI7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gXCJjbGltYXRlXCIpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA0MDk2KTtcbiAgfVxuXG4gIHJldHVybiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVEb21haW4oZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoMCwgZW50aXR5SWQuaW5kZXhPZihcIi5cIikpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iajogSGFzc0VudGl0eSkge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0R3JvdXBFbnRpdGllcyhcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgZ3JvdXA6IEdyb3VwRW50aXR5XG4pIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgZ3JvdXAuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5KSB7XG4gICAgICByZXN1bHRbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCBnZXRHcm91cEVudGl0aWVzIGZyb20gXCIuL2dldF9ncm91cF9lbnRpdGllc1wiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gUmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBlbnRpdGllcyB0aGF0IHRoZSB2aWV3IHdpbGwgc2hvd1xuLy8gaW5jbHVkaW5nIGVtYmVkZGVkIGdyb3Vwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdFbnRpdGllcyhcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgdmlldzogR3JvdXBFbnRpdHlcbik6IEhhc3NFbnRpdGllcyB7XG4gIGNvbnN0IHZpZXdFbnRpdGllcyA9IHt9O1xuXG4gIHZpZXcuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5ICYmICFlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgIHZpZXdFbnRpdGllc1tlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcblxuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09IFwiZ3JvdXBcIikge1xuICAgICAgICBjb25zdCBncm91cEVudGl0aWVzID0gZ2V0R3JvdXBFbnRpdGllcyhlbnRpdGllcywgZW50aXR5IGFzIEdyb3VwRW50aXR5KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhncm91cEVudGl0aWVzKS5mb3JFYWNoKChnckVudGl0eUlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JFbnRpdHkgPSBncm91cEVudGl0aWVzW2dyRW50aXR5SWRdO1xuXG4gICAgICAgICAgaWYgKCFnckVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgICAgICAgdmlld0VudGl0aWVzW2dyRW50aXR5SWRdID0gZ3JFbnRpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2aWV3RW50aXRpZXM7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNhblRvZ2dsZVN0YXRlIGZyb20gXCIuL2Nhbl90b2dnbGVfc3RhdGVcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IERPTUFJTlNfV0lUSF9DQVJEIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlQ2FyZFR5cGUoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5XG4pIHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIpIHtcbiAgICByZXR1cm4gXCJkaXNwbGF5XCI7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfVxuICBpZiAoXG4gICAgY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopICYmXG4gICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sICE9PSBcImhpZGRlblwiXG4gICkge1xuICAgIHJldHVybiBcInRvZ2dsZVwiO1xuICB9XG4gIHJldHVybiBcImRpc3BsYXlcIjtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0ZlYXR1cmUgPSAoXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5LFxuICBmZWF0dXJlOiBudW1iZXJcbik6IGJvb2xlYW4gPT4ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICByZXR1cm4gKHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzISAmIGZlYXR1cmUpICE9PSAwO1xufTtcbiIsImNvbnN0IGhhc3NBdHRyaWJ1dGVVdGlsID0ge307XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IFtcbiAgICBcImJhdHRlcnlcIixcbiAgICBcImNvbGRcIixcbiAgICBcImNvbm5lY3Rpdml0eVwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlX2Rvb3JcIixcbiAgICBcImdhc1wiLFxuICAgIFwiaGVhdFwiLFxuICAgIFwibGlnaHRcIixcbiAgICBcImxvY2tcIixcbiAgICBcIm1vaXN0dXJlXCIsXG4gICAgXCJtb3Rpb25cIixcbiAgICBcIm1vdmluZ1wiLFxuICAgIFwib2NjdXBhbmN5XCIsXG4gICAgXCJvcGVuaW5nXCIsXG4gICAgXCJwbHVnXCIsXG4gICAgXCJwb3dlclwiLFxuICAgIFwicHJlc2VuY2VcIixcbiAgICBcInByb2JsZW1cIixcbiAgICBcInNhZmV0eVwiLFxuICAgIFwic21va2VcIixcbiAgICBcInNvdW5kXCIsXG4gICAgXCJ2aWJyYXRpb25cIixcbiAgICBcIndpbmRvd1wiLFxuICBdLFxuICBjb3ZlcjogW1wiZ2FyYWdlXCJdLFxuICBzZW5zb3I6IFtcImJhdHRlcnlcIiwgXCJodW1pZGl0eVwiLCBcImlsbHVtaW5hbmNlXCIsIFwidGVtcGVyYXR1cmVcIiwgXCJwcmVzc3VyZVwiXSxcbn07XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9IFwianNvblwiO1xuaGFzc0F0dHJpYnV0ZVV0aWwuQUREX1RZUEUgPSBcImtleS12YWx1ZVwiO1xuXG5oYXNzQXR0cmlidXRlVXRpbC5UWVBFX1RPX1RBRyA9IHtcbiAgc3RyaW5nOiBcImhhLWN1c3RvbWl6ZS1zdHJpbmdcIixcbiAganNvbjogXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGljb246IFwiaGEtY3VzdG9taXplLWljb25cIixcbiAgYm9vbGVhbjogXCJoYS1jdXN0b21pemUtYm9vbGVhblwiLFxuICBhcnJheTogXCJoYS1jdXN0b21pemUtYXJyYXlcIixcbiAgXCJrZXktdmFsdWVcIjogXCJoYS1jdXN0b21pemUta2V5LXZhbHVlXCIsXG59O1xuXG4vLyBBdHRyaWJ1dGVzIGhlcmUgc2VydmUgZHVhbCBwdXJwb3NlOlxuLy8gMSkgQW55IGtleSBvZiB0aGlzIG9iamVjdCB3b24ndCBiZSBzaG93biBpbiBtb3JlLWluZm8gd2luZG93LlxuLy8gMikgQW55IGtleSB3aGljaCBoYXMgdmFsdWUgb3RoZXIgdGhhbiB1bmRlZmluZWQgd2lsbCBhcHBlYXIgaW4gY3VzdG9taXphdGlvblxuLy8gICAgY29uZmlnIGFjY29yZGluZyB0byBpdHMgdmFsdWUuXG5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyB8fCB7XG4gIGVudGl0eV9waWN0dXJlOiB1bmRlZmluZWQsXG4gIGZyaWVuZGx5X25hbWU6IHsgdHlwZTogXCJzdHJpbmdcIiwgZGVzY3JpcHRpb246IFwiTmFtZVwiIH0sXG4gIGljb246IHsgdHlwZTogXCJpY29uXCIgfSxcbiAgZW11bGF0ZWRfaHVlOiB7XG4gICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgZG9tYWluczogW1wiZW11bGF0ZWRfaHVlXCJdLFxuICB9LFxuICBlbXVsYXRlZF9odWVfbmFtZToge1xuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgZG9tYWluczogW1wiZW11bGF0ZWRfaHVlXCJdLFxuICB9LFxuICBoYWFza2FfaGlkZGVuOiB1bmRlZmluZWQsXG4gIGhhYXNrYV9uYW1lOiB1bmRlZmluZWQsXG4gIGhvbWVicmlkZ2VfaGlkZGVuOiB7IHR5cGU6IFwiYm9vbGVhblwiIH0sXG4gIGhvbWVicmlkZ2VfbmFtZTogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIHN1cHBvcnRlZF9mZWF0dXJlczogdW5kZWZpbmVkLFxuICBhdHRyaWJ1dGlvbjogdW5kZWZpbmVkLFxuICBjdXN0b21fdWlfbW9yZV9pbmZvOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBkZXZpY2VfY2xhc3M6IHtcbiAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgb3B0aW9uczogaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZpY2UgY2xhc3NcIixcbiAgICBkb21haW5zOiBbXCJiaW5hcnlfc2Vuc29yXCIsIFwiY292ZXJcIiwgXCJzZW5zb3JcIl0sXG4gIH0sXG4gIGhpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiwgZGVzY3JpcHRpb246IFwiSGlkZSBmcm9tIFVJXCIgfSxcbiAgYXNzdW1lZF9zdGF0ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcbiAgICAgIFwic3dpdGNoXCIsXG4gICAgICBcImxpZ2h0XCIsXG4gICAgICBcImNvdmVyXCIsXG4gICAgICBcImNsaW1hdGVcIixcbiAgICAgIFwiZmFuXCIsXG4gICAgICBcImdyb3VwXCIsXG4gICAgICBcIndhdGVyX2hlYXRlclwiLFxuICAgIF0sXG4gIH0sXG4gIGluaXRpYWxfc3RhdGU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImF1dG9tYXRpb25cIl0sXG4gIH0sXG4gIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFzc0F0dHJpYnV0ZVV0aWw7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuXG53aW5kb3cuSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHByb3ApIHsgcmV0dXJuIHByb3A7IH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuL2Jvb3QuanMnO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHN0YXRpYyBzdHJpbmcgdmFsdWUgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZmlsdGVyXG4gKiBzdHJpbmdzIGJ5IGFzc2V0aW5nIHRoYXQgdGhleSBoYXZlIGJlZW4gY3JlYXRlZCB2aWEgdGhpcyBjbGFzcy4gVGhlXG4gKiBgdmFsdWVgIHByb3BlcnR5IHJldHVybnMgdGhlIHN0cmluZyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICovXG5jbGFzcyBMaXRlcmFsU3RyaW5nIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nKSB7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdGhpcy52YWx1ZSA9IHN0cmluZy50b1N0cmluZygpO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IExpdGVyYWxTdHJpbmcgc3RyaW5nIHZhbHVlXG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGxpdGVyYWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMaXRlcmFsU3RyaW5nKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUxpdGVyYWxTdHJpbmd9ICovKHZhbHVlKS52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tbGl0ZXJhbCB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWxMaXRlcmFsIGZ1bmN0aW9uOiAke3ZhbHVlfWBcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gaHRtbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudCB9ICovKHZhbHVlKS5pbm5lckhUTUw7XG4gIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBMaXRlcmFsU3RyaW5nKSB7XG4gICAgcmV0dXJuIGxpdGVyYWxWYWx1ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLXRlbXBsYXRlIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbCBmdW5jdGlvbjogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgdGhhdCBjcmVhdGVzIGFuIEhUTUwgPHRlbXBsYXRlPiBlbGVtZW50IGZyb20gdGhlXG4gKiBjb250ZW50cyBvZiB0aGUgc3RyaW5nLlxuICpcbiAqIFRoaXMgYWxsb3dzIHlvdSB0byB3cml0ZSBhIFBvbHltZXIgVGVtcGxhdGUgaW4gSmF2YVNjcmlwdC5cbiAqXG4gKiBUZW1wbGF0ZXMgY2FuIGJlIGNvbXBvc2VkIGJ5IGludGVycG9sYXRpbmcgYEhUTUxUZW1wbGF0ZUVsZW1lbnRgcyBpblxuICogZXhwcmVzc2lvbnMgaW4gdGhlIEphdmFTY3JpcHQgdGVtcGxhdGUgbGl0ZXJhbC4gVGhlIG5lc3RlZCB0ZW1wbGF0ZSdzXG4gKiBgaW5uZXJIVE1MYCBpcyBpbmNsdWRlZCBpbiB0aGUgY29udGFpbmluZyB0ZW1wbGF0ZS4gIFRoZSBvbmx5IG90aGVyXG4gKiB2YWx1ZXMgYWxsb3dlZCBpbiBleHByZXNzaW9ucyBhcmUgdGhvc2UgcmV0dXJuZWQgZnJvbSBgaHRtbExpdGVyYWxgXG4gKiB3aGljaCBlbnN1cmVzIG9ubHkgbGl0ZXJhbCB2YWx1ZXMgZnJvbSBKUyBzb3VyY2UgZXZlciByZWFjaCB0aGUgSFRNTCwgdG9cbiAqIGd1YXJkIGFnYWluc3QgWFNTIHJpc2tzLlxuICpcbiAqIEFsbCBvdGhlciB2YWx1ZXMgYXJlIGRpc2FsbG93ZWQgaW4gZXhwcmVzc2lvbnMgdG8gaGVscCBwcmV2ZW50IFhTU1xuICogYXR0YWNrczsgaG93ZXZlciwgYGh0bWxMaXRlcmFsYCBjYW4gYmUgdXNlZCB0byBjb21wb3NlIHN0YXRpY1xuICogc3RyaW5nIHZhbHVlcyBpbnRvIHRlbXBsYXRlcy4gVGhpcyBpcyB1c2VmdWwgdG8gY29tcG9zZSBzdHJpbmdzIGludG9cbiAqIHBsYWNlcyB0aGF0IGRvIG5vdCBhY2NlcHQgaHRtbCwgbGlrZSB0aGUgY3NzIHRleHQgb2YgYSBgc3R5bGVgXG4gKiBlbGVtZW50LlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPjpob3N0eyBjb250ZW50OlwiLi4uXCIgfTwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7dGhpcy5wYXJ0aWFsVGVtcGxhdGV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHBhcnRpYWxUZW1wbGF0ZSgpIHsgcmV0dXJuIGh0bWxgPHNwYW4+UGFydGlhbCE8L3NwYW4+YDsgfVxuICpcbiAqIEBwYXJhbSB7IUlUZW1wbGF0ZUFycmF5fSBzdHJpbmdzIENvbnN0YW50IHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBWYXJpYWJsZSBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHJldHVybiB7IUhUTUxUZW1wbGF0ZUVsZW1lbnR9IENvbnN0cnVjdGVkIEhUTUxUZW1wbGF0ZUVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSBmdW5jdGlvbiBodG1sKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICBjb25zdCB0ZW1wbGF0ZSA9IC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnR9ICovKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpO1xuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGh0bWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pO1xuICByZXR1cm4gdGVtcGxhdGU7XG59O1xuXG4vKipcbiAqIEFuIGh0bWwgbGl0ZXJhbCB0YWcgdGhhdCBjYW4gYmUgdXNlZCB3aXRoIGBodG1sYCB0byBjb21wb3NlLlxuICogYSBsaXRlcmFsIHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT5cbiAqICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gKiAgICAgICAgICAgJHt0aGlzLnN0eWxlVGVtcGxhdGUoKX1cbiAqICAgICAgICAgPC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHtzdGF0aWNWYWx1ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgc3R5bGVUZW1wbGF0ZSgpIHtcbiAqICAgICAgICByZXR1cm4gaHRtbExpdGVyYWxgLnNoYWRvd2VkIHsgYmFja2dyb3VuZDogZ3JheTsgfWA7XG4gKiAgICAgfVxuICpcbiAqIEBwYXJhbSB7IUlUZW1wbGF0ZUFycmF5fSBzdHJpbmdzIENvbnN0YW50IHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBWYXJpYWJsZSBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHJldHVybiB7IUxpdGVyYWxTdHJpbmd9IENvbnN0cnVjdGVkIGxpdGVyYWwgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sTGl0ZXJhbCA9IGZ1bmN0aW9uKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICByZXR1cm4gbmV3IExpdGVyYWxTdHJpbmcodmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBsaXRlcmFsVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKSk7XG59O1xuIiwiaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgQ3VpQmFzZUVsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgbGV0IGV4dHJhcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfZGF0YV90ZW1wbGF0ZTtcbiAgICBpZiAoZXh0cmFzKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFzKSkge1xuICAgICAgICBleHRyYXMgPSBbZXh0cmFzXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHRyYXMubWFwKGV4dHJhID0+IHdpbmRvdy5jdXN0b21VSS5jb21wdXRlVGVtcGxhdGUoXG4gICAgICAgIGV4dHJhLFxuICAgICAgICBoYXNzLFxuICAgICAgICBoYXNzLnN0YXRlcyxcbiAgICAgICAgc3RhdGVPYmosXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICAgIC8qIGF0dHJpYnV0ZT0gKi8gdW5kZWZpbmVkLFxuICAgICAgICBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgICkpLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0ICE9PSBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgIGlmIChleHRyYS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkO1xuICB9XG5cbiAgaGFzRXh0cmEoZXh0cmEpIHtcbiAgICByZXR1cm4gZXh0cmEubGVuZ3RoID4gMDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ3VpQmFzZUVsZW1lbnQ7XG4iLCJpbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIER5bmFtaWNFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgZWxlbWVudE5hbWU6IFN0cmluZyxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZyknLFxuICAgIF07XG4gIH1cblxuICBvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZykge1xuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICBlbGVtZW50TmFtZSA/IGVsZW1lbnROYW1lLnRvVXBwZXJDYXNlKCkgOiAnRElWJyxcbiAgICAgIHsgaGFzcywgc3RhdGVPYmosIGluRGlhbG9nIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtZWxlbWVudCcsIER5bmFtaWNFbGVtZW50KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5cbmltcG9ydCAnLi9keW5hbWljLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbmN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdGF0ZS1jYXJkLWRpc3BsYXknKS50aGVuKCgpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBEeW5hbWljV2l0aEV4dHJhIGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1jYXJkLWRpc3BsYXknKSB7XG4gICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbC13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW46IC00cHggLTE2cHggLTRweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGhhLXN0YXRlLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIGR5bmFtaWMtZWxlbWVudCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgI292ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICAjbG9jayB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgfVxuICAgICAgICAjbG9jay5oYS1jb3Zlci1jb250cm9scyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5leHRyYSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1zaXplOiAzNnB4O1xuICAgICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD0nW1tleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSldXSBob3Jpem9udGFsIGxheW91dCc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tleHRyYU9ialZpc2libGVdXSc+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0J1xuICAgICAgICAgICAgICAgICAgICBpdGVtcz0nW1tleHRyYU9ial1dJ1xuICAgICAgICAgICAgICAgICAgICBvbi1kb20tY2hhbmdlPSdleHRyYURvbUNoYW5nZWQnPlxuICAgICAgICAgICAgPGhhLXN0YXRlLWxhYmVsLWJhZGdlIGhhc3M9J1tbaGFzc11dJyBzdGF0ZT0nW1tpdGVtXV0nPjwvaGEtc3RhdGUtbGFiZWwtYmFkZ2U+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW19zaG93Q29udHJvbChpbkRpYWxvZywgc3RhdGVPYmopXV0nPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGR5bmFtaWMtZWxlbWVudFxuICAgICAgICAgICAgICAgICAgY2xhc3M9J2ZsZXgnXG4gICAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LW5hbWU9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICAgIDwvZHluYW1pYy1lbGVtZW50PlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopXV0nPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVybGF5XCIgb24tY2xpY2s9J2NsaWNrSGFuZGxlcic+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9ja11dJz5cbiAgICAgICAgICAgICAgICAgICAgPGlyb24taWNvbiBpZD1cImxvY2tcIiBjbGFzcyQ9XCJbW2NvbnRyb2xFbGVtZW50XV1cIiBpY29uPVwibWRpOmxvY2stb3V0bGluZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbWyFjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRlJz5bW2NvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgICAgZXh0cmFPYmo6IHtcbiAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgX2F0dGFjaGVkKScsXG4gICAgICAgIH0sXG4gICAgICAgIF9hdHRhY2hlZDogQm9vbGVhbixcbiAgICAgICAgZXh0cmFPYmpWaXNpYmxlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKScsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX2F0dGFjaGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBhdHRhY2hlZCkge1xuICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlIHx8ICFhdHRhY2hlZCkgcmV0dXJuIFtdO1xuICAgICAgbGV0IGV4dHJhQmFkZ2VzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYUJhZGdlcykpIHtcbiAgICAgICAgZXh0cmFCYWRnZXMgPSBbZXh0cmFCYWRnZXNdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhQmFkZ2VzLm1hcCgoZXh0cmFCYWRnZSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKGV4dHJhQmFkZ2UuZW50aXR5X2lkICYmIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSkge1xuICAgICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICAgIHRoaXMsIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSwgdGhpcy5pbkRpYWxvZyxcbiAgICAgICAgICAgIC8qIGFsbG93SGlkZGVuPSAqL2ZhbHNlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXh0cmFCYWRnZS5hdHRyaWJ1dGUgJiZcbiAgICAgICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgc3RhdGU6IFN0cmluZyhzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSksXG4gICAgICAgICAgICBlbnRpdHlfaWQ6ICdub25lLm5vbmUnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogeyB1bml0X29mX21lYXN1cmVtZW50OiBleHRyYUJhZGdlLnVuaXQgfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IGJsYWNrbGlzdCA9IGV4dHJhQmFkZ2UuYmxhY2tsaXN0X3N0YXRlcztcbiAgICAgICAgaWYgKGJsYWNrbGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJsYWNrbGlzdCkpIHtcbiAgICAgICAgICAgIGJsYWNrbGlzdCA9IFtibGFja2xpc3RdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYmxhY2tsaXN0LnNvbWUodiA9PiBSZWdFeHAodikudGVzdChyZXN1bHQuc3RhdGUudG9TdHJpbmcoKSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Ll9lbnRpdHlEaXNwbGF5ID0gJyc7XG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgeyBmcmllbmRseV9uYW1lOiAnJyB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pLmZpbHRlcihleHRyYUJhZGdlID0+IGV4dHJhQmFkZ2UgIT0gbnVsbCk7XG4gICAgfVxuXG4gICAgY29tcHV0ZUV4dHJhVmlzaWJsZShleHRyYU9iaiwgaW5EaWFsb2cpIHtcbiAgICAgIGlmIChpbkRpYWxvZyB8fCAhZXh0cmFPYmopIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBleHRyYU9iai5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpIHtcbiAgICAgIHJldHVybiBleHRyYU9ialZpc2libGUgPyAnZXh0cmEnIDogJyc7XG4gICAgfVxuXG4gICAgX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAhc3RhdGVPYmouYXR0cmlidXRlcy5oaWRlX2NvbnRyb2w7XG4gICAgfVxuXG4gICAgY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaikge1xuICAgICAgLy8gaGFMb2NhbGl6ZSByZW1vdmVkIGluIDAuNjFcbiAgICAgIHJldHVybiBzdXBlci5jb21wdXRlU3RhdGVEaXNwbGF5KHRoaXMuaGFMb2NhbGl6ZSB8fCB0aGlzLmxvY2FsaXplLCBzdGF0ZU9iaik7XG4gICAgfVxuXG4gICAgaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHMgfHxcbiAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrO1xuICAgIH1cblxuICAgIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgY29uc3QgbG9jayA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjbG9jaycpO1xuICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgbG9jay5pY29uID0gJ21kaTpsb2NrLW9wZW4tb3V0bGluZSc7XG4gICAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcwLjEnO1xuICAgICAgfVxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gICAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgICAgbG9jay5pY29uID0gJ21kaTpsb2NrLW91dGxpbmUnO1xuICAgICAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9LCA1MDAwKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgYXBwbHlUaGVtZXMoaGFzcywgZWxlbWVudCwgc3RhdGVPYmopIHtcbiAgICAgIGNvbnN0IHRoZW1lTmFtZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUgfHwgJ2RlZmF1bHQnO1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgIGVsZW1lbnQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gICAgfVxuXG4gICAgZXh0cmFEb21DaGFuZ2VkKCkge1xuICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJylcbiAgICAgICAgLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICB0aGlzLmFwcGx5VGhlbWVzKHRoaXMuaGFzcywgZWxlbSwgZWxlbS5zdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtd2l0aC1leHRyYScsIER5bmFtaWNXaXRoRXh0cmEpO1xufSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEV2ZW50c01peGluIGZyb20gJy4uL21peGlucy9ldmVudHMtbWl4aW4uanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFDb25maWdDdXN0b21VaSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXIuRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj48L3N0eWxlPlxuICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj0naGFzczphcnJvdy1sZWZ0J1xuICAgICAgICAgICAgb24tY2xpY2s9J19iYWNrSGFuZGxlcidcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+Q3VzdG9tIFVJIHNldHRpbmdzPC9kaXY+XG4gICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPSdbW2lzV2lkZV1dJz5cbiAgICAgICAgPHBhcGVyLWNhcmQgaGVhZGluZz0nRGV2aWNlIG5hbWUnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XG4gICAgICAgICAgICBTZXQgZGV2aWNlIG5hbWUgc28gdGhhdCB5b3UgY2FuIHJlZmVyZW5jZSBpdCBpbiBwZXItZGV2aWNlIHNldHRpbmdzXG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9J05hbWUnXG4gICAgICAgICAgICAgIHZhbHVlPSd7e25hbWV9fSdcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BhcGVyLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICduYW1lQ2hhbmdlZCcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMubmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gIH1cblxuICBuYW1lQ2hhbmdlZChuYW1lKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLnNldE5hbWUobmFtZSk7XG4gIH1cblxuICBfYmFja0hhbmRsZXIoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIHRoaXMuZmlyZSgnbG9jYXRpb24tY2hhbmdlZCcpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLWNvbmZpZy1jdXN0b20tdWknLCBIYUNvbmZpZ0N1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFUaGVtZWRTbGlkZXIgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1oYS10aGVtZWQtc2xpZGVyLW1hcmdpbiwgaW5pdGlhbCk7XG4gICAgICB9XG4gICAgICAuZGlzYWJsZS1vZmYtd2hlbi1taW4ge1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1waW4tc3RhcnQtY29sb3I6ICB2YXIoLS1wYXBlci1zbGlkZXItcGluLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluLmlzLW9uIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgfVxuICAgICAgcGFwZXItc2xpZGVyIHtcbiAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICB3aWR0aDogdmFyKC0taGEtcGFwZXItc2xpZGVyLXdpZHRoLCAyMDBweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxwYXBlci1zbGlkZXJcbiAgICAgICAgIG1pbj0nW1tfdGhlbWVkTWluXV0nXG4gICAgICAgICBtYXg9J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWF4XCIsIG1heCldXSdcbiAgICAgICAgIHBpbj0nW1tfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJwaW5cIiwgcGluKV1dJ1xuICAgICAgICAgY2xhc3MkPSdbW2NvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgX3RoZW1lZE1pbildXScgdmFsdWU9J1tbdmFsdWVdXSdcbiAgICAgICAgIG9uLWNoYW5nZT0ndmFsdWVDaGFuZ2VkJz5cbiAgICA8L3BhcGVyLXNsaWRlcj5cbiAgICBgO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmRpc2FibGVPZmZXaGVuTWluID0gIXRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhpcy50aGVtZSwgJ29mZl93aGVuX21pbicsICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKTtcbiAgICB0aGlzLmNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhpcy50aGVtZSwgdGhpcy5kaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgfSxcbiAgICAgIHBpbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaXNPbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHRoZW1lOiBPYmplY3QsXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBfdGhlbWVkTWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJtaW5cIiwgbWluKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2NvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhlbWUsIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCknLFxuICAgIF07XG4gIH1cblxuICBjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpIHtcbiAgICB0aGlzLl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQgPSB0aGlzLl9jb21wdXRlQXR0cmlidXRlKFxuICAgICAgdGhlbWUsICdyZXBvcnRfd2hlbl9ub3RfY2hhbmdlZCcsICFkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICB9XG5cbiAgX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIGF0dHIsIGRlZikge1xuICAgIGlmICh0aGVtZSkge1xuICAgICAgaWYgKGF0dHIgaW4gdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoZW1lW2F0dHJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzKHRoZW1lLCBpc09uLCB0aGVtZWRNaW4pIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgaWYgKGlzT24pIHtcbiAgICAgIHJlc3VsdCArPSAnaXMtb24gJztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikgfHwgdGhlbWVkTWluID09PSAwKSB7XG4gICAgICAvLyBJZiBvZmZXaGVuTWluIGlzIGVuYWJsZWQgZG9uJ3QgY3VzdG9taXplLlxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7cmVzdWx0fWRpc2FibGUtb2ZmLXdoZW4tbWluYDtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChldikge1xuICAgIGlmICghdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkICYmIHRoaXMudmFsdWUgPT09IGV2LnRhcmdldC52YWx1ZSkge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGEtdGhlbWVkLXNsaWRlcicsIEhhVGhlbWVkU2xpZGVyKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyc7XG5pbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIuanMnO1xuaW1wb3J0IHN0YXRlQ2FyZFR5cGUgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUudHMnO1xuXG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcbmltcG9ydCAnLi9zdGF0ZS1jYXJkLXdpdGgtc2xpZGVyLmpzJztcbmltcG9ydCAnLi9zdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyLmpzJztcblxuY29uc3QgU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMgPSBbJ2NvbmZpZ3VyYXRvciddO1xuY29uc3QgRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUID0ge1xuICBsaWdodDogMSwgLy8gU1VQUE9SVF9CUklHSFRORVNTXG4gIGNvdmVyOiA0LCAvLyBTVVBQT1JUX1NFVF9QT1NJVElPTlxuICBjbGltYXRlOiAxLCAvLyBTVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRVxufTtcbmNvbnN0IFRZUEVfVE9fQ09OVFJPTCA9IHtcbiAgdG9nZ2xlOiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gIGRpc3BsYXk6ICcnLFxuICBjb3ZlcjogJ2hhLWNvdmVyLWNvbnRyb2xzJyxcbn07XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkQ3VzdG9tVWkgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKScsXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKGNvbnRhaW5lci50YWdOYW1lID09PSAnRElWJyAmJlxuICAgICAgICAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSB8fCBjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGlsZC1jYXJkJykpKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIC8vIFNpbmNlIHRoaXMgZG9lc24ndCBhY3R1YWxseSBjaGFuZ2UgdGhlIGJhY2tncm91bmQgLSBubyBuZWVkIHRvIGNsZWFyIGl0LlxuICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicsICd2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIGluaGVyaXQpJyk7XG5cbiAgICAgIC8vIFBvbHlmaWxsICd1cGRhdGVTdHlsZXMnLlxuICAgICAgaWYgKCFjb250YWluZXIudXBkYXRlU3R5bGVzKSB7XG4gICAgICAgIGNvbnRhaW5lci51cGRhdGVTdHlsZXMgPSAoc3R5bGVzKSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHN0eWxlc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5pbnB1dENoYW5nZWQodGhpcy5oYXNzLCB0aGlzLmluRGlhbG9nLCB0aGlzLnN0YXRlT2JqKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycsIHBhZGRpbmc6ICcnIH0pO1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciwgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCAnZGVmYXVsdCcpO1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGJhZGdlTW9kZShoYXNzLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gW107XG4gICAgaWYgKGRvbWFpbiA9PT0gJ2dyb3VwJykge1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tpZF07XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIElEICR7aWR9IGluIGdyb3VwICR7c3RhdGVPYmouZW50aXR5X2lkfWApO1xuICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QgfHxcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QuaW5jbHVkZXMoc3RhdGUuZW50aXR5X2lkKSkge1xuICAgICAgICAgIHN0YXRlcy5wdXNoKHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICAgIHRoaXMsIHN0YXRlLCBmYWxzZSAvKiBpbkRpYWxvZyAqLywgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcy5wdXNoKHN0YXRlT2JqKTtcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9O1xuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSkge1xuICAgICAgICAgIHBhcmFtcy5tYXJnaW4gPSAndmFyKC0taGEtYmFkZ2VzLWNhcmQtbWFyZ2luLCAwKSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgICdIQS1CQURHRVMtQ0FSRCcsXG4gICAgICB7IGhhc3MsIHN0YXRlcyB9KTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgd2lkdGg6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC13aWR0aCwgaW5pdGlhbCknLFxuICAgICAgICAndGV4dC1hbGlnbic6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC10ZXh0LWFsaWduLCBpbml0aWFsKScsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5sYXN0Q2hpbGQuc3R5bGUuZm9udFNpemUgPSAnODUlJztcblxuICAgIC8vIFNpbmNlIHRoaXMgdmFyaWFibGUgb25seSBhZmZlY3RzIGJhZGdlcyBtb2RlIC0gbm8gbmVlZCB0byBjbGVhbiBpdCB1cC5cbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KCctLWhhLXN0YXRlLWxhYmVsLWJhZGdlLW1hcmdpbi1ib3R0b20nLCAnMCcpO1xuICB9XG5cbiAgY2xlYW5CYWRnZVN0eWxlKCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoe1xuICAgICAgICBkaXNwbGF5OiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAndGV4dC1hbGlnbic6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycgfSk7XG4gIH1cblxuICBhcHBseVRoZW1lcyhoYXNzLCBtb2RpZmllZE9iaikge1xuICAgIGxldCB0aGVtZVRhcmdldCA9IHRoaXM7XG4gICAgbGV0IHRoZW1lTmFtZSA9ICdkZWZhdWx0JztcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGVtZVRhcmdldCA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgIHRoZW1lTmFtZSA9IG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWU7XG4gICAgfVxuICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgdGhlbWVUYXJnZXQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gIH1cblxuICBtYXliZUhpZGVFbnRpdHkobW9kaWZpZWRPYmopIHtcbiAgICBpZiAoIW1vZGlmaWVkT2JqKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcwJywgcGFkZGluZzogJzAnIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgb2JqLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmJlxuICAgICAgKERPTUFJTl9UT19TTElERVJfU1VQUE9SVFtkb21haW5dICYgb2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzKSAmJlxuICAgICAgb2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlICYmIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAhPT0gJ25vLXNsaWRlcic7XG4gIH1cblxuICBpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFzdGF0ZU9iaiB8fCAhaGFzcyB8fCAhdGhpcy5faXNBdHRhY2hlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gICAgY29uc3QgbW9kaWZpZWRPYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICB0aGlzLCBzdGF0ZU9iaiwgaW5EaWFsb2csIHRydWUgLyogYWxsb3dIaWRkZW4gKi8pO1xuXG4gICAgaWYgKHRoaXMubWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hcHBseVRoZW1lcyhoYXNzLCBtb2RpZmllZE9iaik7XG5cbiAgICBpZiAoIWluRGlhbG9nICYmIG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlID09PSAnYmFkZ2VzJykge1xuICAgICAgdGhpcy5iYWRnZU1vZGUoaGFzcywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBtb2RpZmllZE9iaiwgZG9tYWluKTtcbiAgICB9XG4gIH1cblxuICByZWd1bGFyTW9kZV8oaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqLCBkb21haW4pIHtcbiAgICB0aGlzLmNsZWFuQmFkZ2VTdHlsZSgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgaGFzcyxcbiAgICAgIHN0YXRlT2JqLFxuICAgICAgaW5EaWFsb2csXG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbFN0YXRlQ2FyZFR5cGUgPSBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKTtcbiAgICBsZXQgY3VzdG9tU3RhdGVDYXJkVHlwZTtcbiAgICBjb25zdCBzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlID0gc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk7XG5cbiAgICBpZiAoZG9tYWluID09PSAnbGlnaHQnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1lbnRpdHktdG9nZ2xlJyxcbiAgICAgICAgc2VydmljZU1pbjogJ3R1cm5fb2ZmJyxcbiAgICAgICAgc2VydmljZU1heDogJ3R1cm5fb24nLFxuICAgICAgICB2YWx1ZU5hbWU6ICdicmlnaHRuZXNzJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY292ZXInICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jb3Zlci1jb250cm9scycsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnY2xvc2VfY292ZXInLFxuICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X2NvdmVyX3Bvc2l0aW9uJyxcbiAgICAgICAgc2V0VmFsdWVOYW1lOiAncG9zaXRpb24nLFxuICAgICAgICB2YWx1ZU5hbWU6ICdjdXJyZW50X3Bvc2l0aW9uJyxcbiAgICAgICAgbmFtZU9uOiAnb3BlbicsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NsaW1hdGUnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jbGltYXRlLXN0YXRlJyxcbiAgICAgICAgbWluOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl90ZW1wIHx8IC0xMDAsXG4gICAgICAgIG1heDogc3RhdGVPYmouYXR0cmlidXRlcy5tYXhfdGVtcCB8fCAyMDAsXG4gICAgICAgIHNlcnZpY2VNaW46ICdzZXRfdGVtcGVyYXR1cmUnLFxuICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgdmFsdWVOYW1lOiAndGVtcGVyYXR1cmUnLFxuICAgICAgICBuYW1lT246ICcnLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkICYmXG4gICAgICAgICAgICAgICAhU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMuaW5jbHVkZXMob3JpZ2luYWxTdGF0ZUNhcmRUeXBlKSkge1xuICAgICAgcGFyYW1zLmluRGlhbG9nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSAnJztcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50O1xuICAgIH1cblxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAoc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSB8fCBjdXN0b21TdGF0ZUNhcmRUeXBlIHx8IGBTVEFURS1DQVJELSR7b3JpZ2luYWxTdGF0ZUNhcmRUeXBlfWApLnRvVXBwZXJDYXNlKCksXG4gICAgICBwYXJhbXMpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtY3VzdG9tLXVpJywgU3RhdGVDYXJkQ3VzdG9tVWkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBDdWlCYXNlRWxlbWVudCBmcm9tICcuL2N1aS1iYXNlLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuL2R5bmFtaWMtd2l0aC1leHRyYS5qcyc7XG5pbXBvcnQgJy4vaGEtdGhlbWVkLXNsaWRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkV2l0aFNsaWRlciBleHRlbmRzIEN1aUJhc2VFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1mbGV4LWZhY3RvcnNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuc2Vjb25kLWxpbmUsIC5zdGF0ZS1hbmQtdG9nZ2xlLCAuc3RhdGUtaW5mbyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWFuZC10b2dnbGUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zZWNvbmQtbGluZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmQtbGluZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgfVxuICAgICAgLnN0cmV0Y2ggLnNlY29uZC1saW5lLCAuc3RyZXRjaCBoYS10aGVtZWQtc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0taGEtcGFwZXItc2xpZGVyLXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc3RhdGUtaW5mbyB7XG4gICAgICAgIG1pbi13aWR0aDogaW5pdGlhbDtcbiAgICAgIH1cbiAgICAgIGhhLXRoZW1lZC1zbGlkZXIsIC50b3Atd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC50b3Atd3JhcHBlci5zdHJldGNoIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzJD0naG9yaXpvbnRhbCBsYXlvdXQgZmxleCB0b3Atd3JhcHBlciBbW19jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZyldXSc+XG4gICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQgZmxleC1hdXRvIHN0YXRlLWFuZC10b2dnbGUnPlxuICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8gZmxleC1hdXRvJ1xuICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICAgIGluLWRpYWxvZz0nW1tzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSldXSdcbiAgICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSdcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbYnJlYWtTbGlkZXJdXScgY2xhc3M9J2hpZGRlbic+XG4gICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzaG93U2xpZGVyXV0nIHJlc3RhbXA+XG4gICAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGZsZXgtYXV0byBlbmQtanVzdGlmaWVkIHNlY29uZC1saW5lJz5cbiAgICAgICAgICA8aGEtdGhlbWVkLXNsaWRlclxuICAgICAgICAgICAgaWQ9J3NsaWRlcidcbiAgICAgICAgICAgIG1heD1bW21heF1dXG4gICAgICAgICAgICBtaW49W1ttaW5dXVxuICAgICAgICAgICAgdGhlbWU9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5zbGlkZXJfdGhlbWVdXSdcbiAgICAgICAgICAgIGlzLW9uPSdbW2lzT24oc3RhdGVPYmosIG5hbWVPbildXSdcbiAgICAgICAgICAgIHZhbHVlPSd7e3NsaWRlclZhbHVlfX0nXG4gICAgICAgICAgICBkaXNhYmxlLW9mZi13aGVuLW1pbj0ne3tkaXNhYmxlT2ZmV2hlbk1pbn19J1xuICAgICAgICAgICAgb24tY2hhbmdlPSdzbGlkZXJDaGFuZ2VkJ1xuICAgICAgICAgICAgb24tY2xpY2s9J3N0b3BQcm9wYWdhdGlvbic+XG4gICAgICAgICAgPC9oYS10aGVtZWQtc2xpZGVyPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shYnJlYWtTbGlkZXJdXSc+XG4gICAgICAgICAgICA8ZHluYW1pYy13aXRoLWV4dHJhIGhhc3M9J1tbaGFzc11dJyBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXScgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz48L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9tYWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWF4OiBTdHJpbmcsXG4gICAgICB2YWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIHNldFZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgbmFtZU9uOiB7IHR5cGU6IFN0cmluZywgdmFsdWU6ICdvbicgfSxcbiAgICAgIG1pbjogeyB0eXBlOiBOdW1iZXIsIHZhbHVlOiAwIH0sXG4gICAgICBtYXg6IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMjU1IH0sXG5cbiAgICAgIHNsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IEJvb2xlYW4sXG4gICAgICBtb2RlOiBTdHJpbmcsXG4gICAgICBzdHJldGNoU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBicmVha1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaGlkZVNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbGluZVRvb0xvbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG1pbkxpbmVCcmVhazogTnVtYmVyLFxuICAgICAgbWF4TGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICBzaG93U2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fb25Jcm9uUmVzaXplID0gdGhpcy5fb25Jcm9uUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ3N0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpJyxcbiAgICBdO1xuICB9XG5cbiAgX3dhaXRGb3JMYXlvdXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgICBpZiAodGhpcy5fZnJhbWVJZCkgcmV0dXJuO1xuICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSBmYWxzZTtcbiAgICB0aGlzLl9mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl9mcmFtZUlkID0gbnVsbDtcbiAgICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSB0cnVlO1xuICAgICAgdGhpcy5fb25Jcm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0TW9kZSgpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBoaWRlU2xpZGVyOiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicgJiYgdGhpcy5saW5lVG9vTG9uZyxcbiAgICAgIGJyZWFrU2xpZGVyOlxuICAgICAgICAgICAodGhpcy5tb2RlID09PSAnYnJlYWstc2xpZGVyJyB8fCB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpICYmXG4gICAgICAgICAgIHRoaXMubGluZVRvb0xvbmcsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuc2hvd1NsaWRlcikge1xuICAgICAgb2JqLmJyZWFrU2xpZGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gIH1cblxuICBfb25Jcm9uUmVzaXplKCkge1xuICAgIGlmICghdGhpcy5yZWFkeVRvQ29tcHV0ZSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICduby1zbGlkZXInKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBoaWRlU2xpZGVyOiB0cnVlLFxuICAgICAgICBicmVha1NsaWRlcjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2QnJlYWtTbGlkZXIgPSB0aGlzLmJyZWFrU2xpZGVyO1xuICAgIGNvbnN0IHByZXZIaWRlU2xpZGVyID0gdGhpcy5oaWRlU2xpZGVyO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBsaW5lVG9vTG9uZzogZmFsc2UsXG4gICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy4kO1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA8PSB0aGlzLm1pbkxpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXJXaWR0aCA+PSB0aGlzLm1heExpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJldkhpZGVTbGlkZXIgJiYgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdW5oaWRlIHRoZSBzbGlkZXIgaW4gb3JkZXIgdG8gcmVjYWxjdWxhdGUgaGVpZ2h0LlxuICAgICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBzdGF0ZUhlaWdodCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcuc3RhdGUtaW5mbycpLmNsaWVudEhlaWdodDtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBjb250YWluZXJIZWlnaHQgPiBzdGF0ZUhlaWdodCAqIDEuNTtcbiAgICAgIGlmICh0aGlzLmxpbmVUb29Mb25nKSB7XG4gICAgICAgIHRoaXMubWluTGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKCFwcmV2QnJlYWtTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5tYXhMaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2V0TW9kZSgpO1xuICB9XG5cbiAgX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChtb2RlID09PSAnc2luZ2xlLWxpbmUnKSB7XG4gICAgICByZXR1cm4gJ25vd3JhcCc7XG4gICAgfVxuICAgIGlmIChzdHJldGNoU2xpZGVyICYmIGxpbmVUb29Mb25nKSB7XG4gICAgICByZXR1cm4gJ3N0cmV0Y2ggd3JhcCc7XG4gICAgfVxuICAgIHJldHVybiAnd3JhcCc7XG4gIH1cblxuICBfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpIHtcbiAgICBpZiAoaW5EaWFsb2cgfHwgaGlkZVNsaWRlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIGNvbnN0IHBhcmFtID0geyBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH07XG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybjtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXInKTtcbiAgICBpZiAoZXYudGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgIC8vIE5vIFNoYWRvdyBET00gLSB3ZSBoYXZlIGFjY2VzcyB0byBvcmlnaW5hbCB0YXJnZXQuXG4gICAgICAoeyB0YXJnZXQgfSA9IGV2KTtcbiAgICB9IGVsc2UgaWYgKGV2LnBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYucGF0aDtcbiAgICB9IGVsc2UgaWYgKGV2LmNvbXBvc2VkUGF0aCkge1xuICAgICAgW3RhcmdldF0gPSBldi5jb21wb3NlZFBhdGgoKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSAwIHx8ICh2YWx1ZSA8PSB0YXJnZXQubWluICYmICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKSkge1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNaW4sIHBhcmFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1bdGhpcy5zZXRWYWx1ZU5hbWUgfHwgdGhpcy52YWx1ZU5hbWVdID0gdmFsdWU7XG4gICAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZU1heCwgcGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBzbGlkZXJWYWx1ZTogdGhpcy5pc09uKHN0YXRlT2JqLCBuYW1lT24pID8gc3RhdGVPYmouYXR0cmlidXRlc1t2YWx1ZU5hbWVdIDogMCxcbiAgICB9O1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHtcbiAgICAgICAgbWluTGluZUJyZWFrOiAwLFxuICAgICAgICBtYXhMaW5lQnJlYWs6IDk5OSxcbiAgICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgICBtb2RlOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSxcbiAgICAgICAgc3RyZXRjaFNsaWRlcjogISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0cmV0Y2hfc2xpZGVyLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzT24oc3RhdGVPYmosIG5hbWVPbikge1xuICAgIHJldHVybiBzdGF0ZU9iaiAmJiAoIW5hbWVPbiB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gbmFtZU9uKTtcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbihldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInLCBTdGF0ZUNhcmRXaXRoU2xpZGVyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQnPlxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICBjbGFzcz0nc3RhdGUtaW5mbydcbiAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgc2Vjb25kYXJ5LWxpbmUkPSdbW2hhc0V4dHJhKGV4dHJhKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0JyBpdGVtcz0nW1tleHRyYV1dJz5cbiAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3N0YXRlLWluZm8+XG4gICAgICA8ZHluYW1pYy13aXRoLWV4dHJhXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPlxuICAgICAgPC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyJywgU3RhdGVDYXJkV2l0aG91dFNsaWRlcik7XG4iLCIvLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5leHBvcnQgZGVmYXVsdCAoc3VwZXJDbGFzcykgPT4ge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIEV2ZW50c01peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICAgKiAgIHBheWxvYWQuXG4gICAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgICovXG4gICAgZmlyZSh0eXBlLCBkZXRhaWwgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0eXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IG9wdGlvbnMuYnViYmxlcyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogQm9vbGVhbihvcHRpb25zLmNhbmNlbGFibGUpLFxuICAgICAgICBjb21wb3NlZDogb3B0aW9ucy5jb21wb3NlZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuY29tcG9zZWQsXG4gICAgICB9KTtcbiAgICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbDtcbiAgICAgIGNvbnN0IG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgdGhpcztcbiAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudHNNaXhpbjtcbn07XG4iLCJpbXBvcnQgaGFzc0F0dHJpYnV0ZXNVdGlsIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMnO1xuXG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgfHwge307XG5jb25zdCBTVVBQT1JURURfU0xJREVSX01PREVTID0gW1xuICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbl07XG5cbmNvbnN0IGN1c3RvbVVpQXR0cmlidXRlcyA9IHtcbiAgZ3JvdXA6IHVuZGVmaW5lZCxcbiAgZGV2aWNlOiB1bmRlZmluZWQsXG4gIHRlbXBsYXRlczogdW5kZWZpbmVkLFxuICBzdGF0ZTogdW5kZWZpbmVkLFxuICBfc3RhdGVEaXNwbGF5OiB1bmRlZmluZWQsXG4gIGNvbnRyb2xfZWxlbWVudDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBzdGF0ZV9jYXJkX21vZGU6IHtcbiAgICB0eXBlOiAnYXJyYXknLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGxpZ2h0OiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICBjb3ZlcjogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY2xpbWF0ZTogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgJyonOiBbJ2JhZGdlcyddLFxuICAgIH0sXG4gIH0sXG4gIHN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBiYWRnZXNfbGlzdDogeyB0eXBlOiAnanNvbicgfSxcbiAgc2hvd19sYXN0X2NoYW5nZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGhpZGVfY29udHJvbDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgZXh0cmFfZGF0YV90ZW1wbGF0ZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBleHRyYV9iYWRnZTogeyB0eXBlOiAnanNvbicgfSxcbiAgc3RyZXRjaF9zbGlkZXI6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIHNsaWRlcl90aGVtZTogeyB0eXBlOiAnanNvbicgfSxcbiAgdGhlbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgY29uZmlybV9jb250cm9sczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgY29uZmlybV9jb250cm9sc19zaG93X2xvY2s6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGhpZGVfaW5fZGVmYXVsdF92aWV3OiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBpY29uX2NvbG9yOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG59O1xud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPSBoYXNzQXR0cmlidXRlc1V0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUztcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBoYXNzQXR0cmlidXRlc1V0aWwuVU5LTk9XTl9UWVBFO1xuT2JqZWN0LmFzc2lnbih3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgY3VzdG9tVWlBdHRyaWJ1dGVzKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyc7XG5pbXBvcnQgZ2V0Vmlld0VudGl0aWVzIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXMudHMnO1xuXG5pbXBvcnQgJy4uL2VsZW1lbnRzL2hhLWNvbmZpZy1jdXN0b20tdWkuanMnO1xuaW1wb3J0IFZFUlNJT04gZnJvbSAnLi92ZXJzaW9uLmpzJztcbmltcG9ydCAnLi9oYXNzLWF0dHJpYnV0ZS11dGlsLmpzJztcblxud2luZG93LmN1c3RvbVVJID0gd2luZG93LmN1c3RvbVVJIHx8IHtcbiAgU1VQUE9SVEVEX1NMSURFUl9NT0RFUzogW1xuICAgICdzaW5nbGUtbGluZScsICdicmVhay1zbGlkZXInLCAnYnJlYWstc2xpZGVyLXRvZ2dsZScsICdoaWRlLXNsaWRlcicsICduby1zbGlkZXInLFxuICBdLFxuXG4gIGRvbUhvc3QoZWxlbSkge1xuICAgIGlmIChlbGVtID09PSBkb2N1bWVudCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW0uZ2V0Um9vdE5vZGUoKTtcbiAgICByZXR1cm4gKHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSA/IC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpLmhvc3QgOiByb290O1xuICB9LFxuXG4gIGxpZ2h0T3JTaGFkb3coZWxlbSwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZWxlbS5zaGFkb3dSb290ID9cbiAgICAgIGVsZW0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6XG4gICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9LFxuXG4gIGdldEVsZW1lbnRIaWVyYXJjaHkocm9vdCwgaGllcmFyY2h5KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsZW0gPSBoaWVyYXJjaHkuc2hpZnQoKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhyb290LCBlbGVtKSwgaGllcmFyY2h5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH0sXG5cbiAgZ2V0Q29udGV4dChlbGVtKSB7XG4gICAgaWYgKGVsZW0uX2NvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbS5fY29udGV4dCA9IFtdO1xuICAgICAgZm9yIChsZXQgZWxlbWVudCA9IChlbGVtLnRhZ05hbWUgPT09ICdIQS1FTlRJVElFUy1DQVJEJyA/IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW0pIDogZWxlbSk7XG4gICAgICAgIGVsZW1lbnQ7IGVsZW1lbnQgPSB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtZW50KSkge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgIGNhc2UgJ0hBLUVOVElUSUVTLUNBUkQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ3JvdXBFbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5ncm91cEVudGl0eSA9PT0gZmFsc2UgJiYgZWxlbWVudC5zdGF0ZXMgJiYgZWxlbWVudC5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChgZ3JvdXAuJHtjb21wdXRlU3RhdGVEb21haW4oZWxlbWVudC5zdGF0ZXNbMF0pfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnTU9SRS1JTkZPLUdST1VQJzpcbiAgICAgICAgICBjYXNlICdTVEFURS1DQVJELUNPTlRFTlQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuc3RhdGVPYmouZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hBLUNBUkRTJzpcbiAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3JykgfHwgJ2RlZmF1bHRfdmlldycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtLl9jb250ZXh0LnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0uX2NvbnRleHQ7XG4gIH0sXG5cbiAgZmluZE1hdGNoKGtleSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuIG51bGw7XG4gICAgaWYgKG9wdGlvbnNba2V5XSkgcmV0dXJuIGtleTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykuZmluZChvcHRpb24gPT4ga2V5Lm1hdGNoKGBeJHtvcHRpb259JGApKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChuYW1lLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZVttYXRjaF0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHdpbmRvdy5jdXN0b21VSS5nZXRDb250ZXh0KGVsZW0pO1xuICAgIGlmICghY29udGV4dCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICBjb250ZXh0LmZvckVhY2goKGMpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2goYywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhdHRyaWJ1dGVzLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIF9zZXRLZWVwKG9iaiwgdmFsdWUpIHtcbiAgICBpZiAob2JqLl9jdWlfa2VlcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSBvYmouX2N1aV9rZWVwICYmIHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIWF0dHJpYnV0ZXMudGVtcGxhdGVzKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosIHRydWUpO1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBuZXdBdHRyaWJ1dGVzID0ge307XG4gICAgbGV0IGhhc0dsb2JhbCA9IGZhbHNlO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcy50ZW1wbGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBhdHRyaWJ1dGVzLnRlbXBsYXRlc1trZXldO1xuICAgICAgaWYgKHRlbXBsYXRlLm1hdGNoKC9cXGIoZW50aXRpZXN8aGFzcylcXGIvKSkge1xuICAgICAgICBoYXNHbG9iYWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICB0ZW1wbGF0ZSwgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcyxcbiAgICAgICAgKHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXMgJiYgc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlc1trZXldKSB8fFxuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldLFxuICAgICAgICBzdGF0ZU9iai51bnRlbXBsYXRlZF9zdGF0ZSB8fCBzdGF0ZU9iai5zdGF0ZSk7XG4gICAgICAvLyBJbiBjYXNlIG9mIG51bGwgZG9uJ3Qgc2V0IHRoZSB2YWx1ZS5cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgbmV3QXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICBpZiAoa2V5ID09PSAnc3RhdGUnKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouc3RhdGUpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdfc3RhdGVEaXNwbGF5Jykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXkpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gYXR0cmlidXRlc1trZXldKSB7XG4gICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgIWhhc0dsb2JhbCk7XG4gICAgaWYgKCFoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzID09PSBhdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBXZSBhcmUgb3BlcmF0aW5nIG9uIHJlYWwgYXR0cmlidXRlcy4gUmVwbGFjZSB0aGVtLlxuICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgbmV3QXR0cmlidXRlcyk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdzdGF0ZScpKSB7XG4gICAgICAgIGlmIChuZXdBdHRyaWJ1dGVzLnN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnN0YXRlID0gU3RyaW5nKG5ld0F0dHJpYnV0ZXMuc3RhdGUpO1xuICAgICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZSA9IHN0YXRlT2JqLnN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdfc3RhdGVEaXNwbGF5JykpIHtcbiAgICAgICAgcmVzdWx0Ll9zdGF0ZURpc3BsYXkgPSBuZXdBdHRyaWJ1dGVzLl9zdGF0ZURpc3BsYXk7XG4gICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkgPSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5O1xuICAgICAgfVxuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHJlc3VsdCwgIWhhc0dsb2JhbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBPcGVyYXRpbmcgb24gY29udGV4dC1hd2FyZSBhdHRyaWJ1dGVzLiBSZXR1cm4gc2hhbGxvdyBjb3B5IG9mIG9iamVjdC5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5ld1Jlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgc3RhdGVPYmouYXR0cmlidXRlcyk7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaik7XG5cbiAgICBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZXMob2JqKSB7XG4gICAgICBpZiAoIW9iaikgcmV0dXJuO1xuICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICAgICAgaGFzcywgc3RhdGVzLCBuZXdSZXN1bHQsIGF0dHJpYnV0ZXMpO1xuICAgICAgICBoYXNDaGFuZ2VzIHw9IChyZXN1bHQgIT09IG5ld1Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZGV2aWNlKTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZ3JvdXApO1xuICAgIH1cblxuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgIGlmIChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKSByZXR1cm4gbmV3UmVzdWx0O1xuICAgIGlmIChoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVPYmo7XG4gIH0sXG5cbiAgYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eV9pZDogc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3RhdGU6IHN0YXRlT2JqLnN0YXRlLFxuICAgICAgYXR0cmlidXRlczogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcywgYXR0cmlidXRlcyksXG4gICAgICB1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZU9iai5sYXN0X2NoYW5nZWQsXG4gICAgfTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdChlbGVtLCBzdGF0ZU9iaiwgaW5EaWFsb2csIGFsbG93SGlkZGVuKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgbGV0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIG9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBlbGVtLmhhc3MsIGVsZW0uaGFzcy5zdGF0ZXMsIG9iaiwgb2JqLmF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKG9iaiAhPT0gc3RhdGVPYmogJiYgb2JqLmF0dHJpYnV0ZXMuaGlkZGVuICYmIGFsbG93SGlkZGVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmaXhHcm91cFRpdGxlcygpIHtcbiAgICBjb25zdCBob21lQXNzaXN0YW50TWFpbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nXSk7XG4gICAgaWYgKGhvbWVBc3Npc3RhbnRNYWluID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzLCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYUNhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaG9tZUFzc2lzdGFudE1haW4sIFtcbiAgICAgICdwYXJ0aWFsLWNhcmRzJyxcbiAgICAgICdoYS1jYXJkc1t2aWV3LXZpc2libGVdJ10pO1xuICAgIGlmIChoYUNhcmRzID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhQ2FyZHMsICcubWFpbicpIHx8IGhhQ2FyZHMuJC5tYWluO1xuICAgIGNvbnN0IGNhcmRzID0gbWFpbi5xdWVyeVNlbGVjdG9yQWxsKCdoYS1lbnRpdGllcy1jYXJkJyk7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKGNhcmQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgIGNhcmQsXG4gICAgICAgICAgY2FyZC5ncm91cEVudGl0eSxcbiAgICAgICAgICBmYWxzZSAvKiBpbkRpYWxvZyAqLyxcbiAgICAgICAgICBmYWxzZSAvKiBhbGxvd0hpZGRlbiAqLyk7XG4gICAgICAgIGlmIChvYmogIT09IGNhcmQuZ3JvdXBFbnRpdHkgJiYgb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSkge1xuICAgICAgICAgIGNvbnN0IG5hbWVFbGVtID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coY2FyZCwgJy5uYW1lJyk7XG4gICAgICAgICAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgY29udHJvbENvbHVtbnMoY29sdW1ucykge1xuICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtY2FyZHMnXSk7XG4gICAgaWYgKHBhcnRpYWxDYXJkcyA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMuYmluZChudWxsLCBjb2x1bW5zKSxcbiAgICAgICAgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZ1bmN0aW9uIHJlbmFtZWQgZnJvbSBoYW5kbGVXaW5kb3dDaGFuZ2UgdG8gX3VwZGF0ZUNvbHVtbnMgb24gMy43LjE4XG4gICAgY29uc3QgZiA9IHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UgfHwgcGFydGlhbENhcmRzLl91cGRhdGVDb2x1bW5zO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzLmZvckVhY2goKG1xbCkgPT4ge1xuICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKGYpO1xuICAgIH0pO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzID0gY29sdW1ucy5tYXAoKHdpZHRoKSA9PiB7XG4gICAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt3aWR0aH1weClgKTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihmKTtcbiAgICAgIHJldHVybiBtcWw7XG4gICAgfSk7XG4gICAgZigpO1xuICB9LFxuXG4gIHVzZUN1c3RvbWl6ZXIoKSB7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBjb25zdCBjdXN0b21pemVyID0gbWFpbi5oYXNzLnN0YXRlc1snY3VzdG9taXplci5jdXN0b21pemVyJ107XG4gICAgaWYgKCFjdXN0b21pemVyKSByZXR1cm47XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcykge1xuICAgICAgaWYgKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCAmJiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykge1xuICAgICAgICBjdXN0b21pemVyLmF0dHJpYnV0ZXMuaGlkZV9hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBhdHRyKSkge1xuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNbYXR0cl0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQ29uZmlnUGFuZWwoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY29uc3QgaGFQYW5lbENvbmZpZyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtcGFuZWwtcmVzb2x2ZXInLFxuICAgICAgJ2hhLXBhbmVsLWNvbmZpZyddKTtcbiAgICBpZiAoIWhhUGFuZWxDb25maWcpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkudXBkYXRlQ29uZmlnUGFuZWwsIDEwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhQ29uZmlnTmF2aWdhdGlvbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhhUGFuZWxDb25maWcsIFtcbiAgICAgICdoYS1jb25maWctZGFzaGJvYXJkJyxcbiAgICAgICdoYS1jb25maWctbmF2aWdhdGlvbiddKTtcbiAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uKSB7XG4gICAgICAvLyBIYUNvbmZpZ05hdmlnYXRpb24gc3RhcnRlZCB1c2luZyBsb2NhbGl6ZSBvbiAyMS4wMS4yMDE4XG4gICAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplICYmICFoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2gpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoID0gdHJ1ZTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQgPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQ7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkID0gKGhhc3MsIHBhZ2UpID0+XG4gICAgICAgICAgcGFnZSA9PT0gJ2N1c3RvbXVpJyB8fCBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZChoYXNzLCBwYWdlKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdDdXN0b20gVUknIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ1NldFVJIHR3ZWFrcycgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWhhQ29uZmlnTmF2aWdhdGlvbi5wYWdlcy5zb21lKGNvbmYgPT4gY29uZiA9PT0gJ2N1c3RvbXVpJyB8fCBjb25mLmRvbWFpbiA9PT0gJ2N1c3RvbXVpJykpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLnB1c2goJ3BhZ2VzJywgaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplID8gJ2N1c3RvbXVpJyA6IHtcbiAgICAgICAgICBkb21haW46ICdjdXN0b211aScsXG4gICAgICAgICAgY2FwdGlvbjogJ0N1c3RvbSBVSScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTZXQgVUkgdHdlYWtzLicsXG4gICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0SGFDb25maWdDdXN0b21VaSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoYS1jb25maWctY3VzdG9tLXVpJyk7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLmlzV2lkZSA9IGhhUGFuZWxDb25maWcuaXNXaWRlO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5zZXRBdHRyaWJ1dGUoJ3BhZ2UtbmFtZScsICdjdXN0b211aScpO1xuICAgICAgcmV0dXJuIGhhQ29uZmlnQ3VzdG9tVWk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlyb25QYWdlcyA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhUGFuZWxDb25maWcsICdpcm9uLXBhZ2VzJyk7XG4gICAgaWYgKGlyb25QYWdlcykge1xuICAgICAgaWYgKGlyb25QYWdlcy5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICBpcm9uUGFnZXMuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICAgIGlyb25QYWdlcy5hZGRFdmVudExpc3RlbmVyKCdpcm9uLWl0ZW1zLWNoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJykpIHtcbiAgICAgICAgICAgIGlyb25QYWdlcy5zZWxlY3QoJ2N1c3RvbXVpJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhUGFuZWxDb25maWcuc2hhZG93Um9vdCkge1xuICAgICAgY29uc3Qgcm9vdCA9IGhhUGFuZWxDb25maWcuc2hhZG93Um9vdCB8fCBoYVBhbmVsQ29uZmlnO1xuICAgICAgaWYgKHJvb3QubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZpc2libGUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpO1xuICAgICAgcm9vdC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSB2aXNpYmxlID8gJycgOiAnbm9uZSc7XG4gICAgfSBlbHNlIGlmIChoYVBhbmVsQ29uZmlnLnJvdXRlck9wdGlvbnMgJiYgaGFQYW5lbENvbmZpZy5yb3V0ZXJPcHRpb25zLnJvdXRlcykge1xuICAgICAgaWYgKCFoYVBhbmVsQ29uZmlnLnJvdXRlck9wdGlvbnMucm91dGVzLmN1c3RvbXVpKSB7XG4gICAgICAgIGhhUGFuZWxDb25maWcucm91dGVyT3B0aW9ucy5yb3V0ZXMuY3VzdG9tdWkgPSB7XG4gICAgICAgICAgdGFnOiAnaGEtY29uZmlnLWN1c3RvbS11aScsXG4gICAgICAgICAgbG9hZDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCksXG4gICAgICAgIH07XG4gICAgICAgIC8vIEN1c3RvbVVJIHBhbmVsIGlzIHRoZSBlbnRyeXBvaW50LCBzbyB3ZSBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJykpIHtcbiAgICAgICAgICBoYVBhbmVsQ29uZmlnLnVwZGF0ZShuZXcgTWFwKFtbJ3JvdXRlJywgdW5kZWZpbmVkXV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsU3RhdGVzSG9vaygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaG9tZS1hc3Npc3RhbnQnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAoIWhvbWVBc3Npc3RhbnQgfHwgIWhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzKSByZXR1cm47XG4gICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZSA9IGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzO1xuICAgICAgaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MgPSBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGNvbnN0IHsgaGFzcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKG9iai5zdGF0ZXMpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhvYmouc3RhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG9iai5zdGF0ZXNba2V5XTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuX2N1aV9rZWVwKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBuZXdFbnRpdHkgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBvYmouc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgICAgaWYgKGhhc3Muc3RhdGVzICYmIGVudGl0eSAhPT0gaGFzcy5zdGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgICAvLyBOZXcgc3RhdGUgYXJyaXZlZC4gUHV0IG1vZGlmaWVkIHN0YXRlIGluLlxuICAgICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSAhPT0gbmV3RW50aXR5KSB7XG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHNhbWUgc3RhdGUgYnV0IGNvbnRlbnRzIGNoYW5nZWQgZHVlIHRvIG90aGVyIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIG9iaik7XG4gICAgICAgIGlmIChvYmoudGhlbWVzICYmIGhhc3MuX3RoZW1lV2FpdGVycykge1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycy5mb3JFYWNoKHdhaXRlciA9PiB3YWl0ZXIuc3RhdGVDaGFuZ2VkKHdhaXRlci5zdGF0ZSkpO1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAobWFpbi5oYXNzICYmIG1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgICAgbWFpbi5fdXBkYXRlSGFzcyh7IHN0YXRlczogbWFpbi5oYXNzLnN0YXRlcyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsUGFydGlhbENhcmRzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdwYXJ0aWFsLWNhcmRzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3BhcnRpYWwtY2FyZHMnKTtcbiAgICAgIGlmICghcGFydGlhbENhcmRzIHx8ICFwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlcikgcmV0dXJuO1xuICAgICAgcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIgPSAoaGFzcywgZW50aXR5SWQpID0+IHtcbiAgICAgICAgaWYgKGhhc3Muc3RhdGVzW2VudGl0eUlkXS5hdHRyaWJ1dGVzLmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBleGNsdWRlcyA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMgJiYgZW50aXR5LmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVFbnRpdHlJZCA9IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSkgcmV0dXJuO1xuICAgICAgICAgICAgZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSA9IGVudGl0eTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy52aWV3KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdFbnRpdGllcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXModmlld0VudGl0aWVzKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICBpZCA9PiB2aWV3RW50aXRpZXNbaWRdLmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZXhjbHVkZXNbaWRdID0gdmlld0VudGl0aWVzW2lkXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIWV4Y2x1ZGVzW2VudGl0eUlkXTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGVsZW1lbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICAgIGlmICgha2xhc3MgfHwgIWtsYXNzLnByb3RvdHlwZSkgcmV0dXJuO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGtsYXNzLnByb3RvdHlwZSwgJ2xvY2FsaXplJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tTG9jYWxpemUodikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVPYmogJiYgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXN0b21Mb2NhbGl6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KCkge30sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgdGhlbWluZyBcInJlZ3VsYXJcIiB0b3AgYmFkZ2VzLlxuICBpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICAgIGlmICghaGFTdGF0ZUxhYmVsQmFkZ2UgfHwgIWhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQpIHJldHVybjtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAgIC8vIFRPRE86IENhbGwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzID0gdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycy5wdXNoKHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdGF0ZS1iYWRnZScpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtYmFkZ2UnKTtcbiAgICAgIGlmICghc3RhdGVCYWRnZSkgcmV0dXJuO1xuICAgICAgaWYgKHN0YXRlQmFkZ2UucHJvdG90eXBlLl91cGRhdGVJY29uQXBwZWFyYW5jZSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlID0gc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlO1xuICAgICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgICBzdGF0ZUJhZGdlLnByb3RvdHlwZS5fdXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBmdW5jdGlvbiBjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZShzdGF0ZU9iaikge1xuICAgICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJC5pY29uLnN0eWxlLCB7XG4gICAgICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZS5jYWxsKHRoaXMsIHN0YXRlT2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZWQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxVcGRhdGVkID0gc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlZDtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlZCA9IGZ1bmN0aW9uIGN1c3RvbVVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgICAgICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKCdzdGF0ZU9iaicpKSByZXR1cm47XG4gICAgICAgICAgY29uc3QgeyBzdGF0ZU9iaiB9ID0gdGhpcztcbiAgICAgICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5pY29uX2NvbG9yICYmICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9pY29uLnN0eWxlLCB7XG4gICAgICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxVcGRhdGVkLmNhbGwodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbEhhQXR0cmlidXRlcygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtYXR0cmlidXRlcycpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaGFBdHRyaWJ1dGVzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1hdHRyaWJ1dGVzJyk7XG4gICAgICBpZiAoIWhhQXR0cmlidXRlcyB8fCAhaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5IHx8XG4gICAgICAgICAhd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsKSByZXR1cm47XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5ID1cbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpLmNvbmNhdChcbiAgICAgICAgICAgIGV4dHJhRmlsdGVycyA/IGV4dHJhRmlsdGVycy5zcGxpdCgnLCcpIDogW10pO1xuICAgICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxIYUZvcm1DdXN0b21pemUoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLWZvcm0tY3VzdG9taXplJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYUZvcm1DdXN0b21pemUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWZvcm0tY3VzdG9taXplJyk7XG4gICAgICBpZiAoIWhhRm9ybUN1c3RvbWl6ZSkge1xuICAgICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSwgMTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSkgcmV0dXJuO1xuICAgICAgd2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lID0gdHJ1ZTtcblxuICAgICAgaWYgKCF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUgPVxuICAgICAgICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldXG4gICAgICAgICAgICAgICAgfHwgeyB0eXBlOiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdE9wZW5PYmplY3Qoa2V5LCBjb25maWcudHlwZSA9PT0gJ2pzb24nID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMpIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyA9XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgICAgICAgICBsb2NhbEF0dHJpYnV0ZXMsIGdsb2JhbEF0dHJpYnV0ZXMsIGV4aXN0aW5nQXR0cmlidXRlcywgbmV3QXR0cmlidXRlcykge1xuICAgICAgICAgICAgY29uc3Qga25vd25LZXlzID1cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25mID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmYgJiYgKCFjb25mLmRvbWFpbnMgfHwgIXRoaXMuZW50aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmYuZG9tYWlucy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4odGhpcy5lbnRpdHkpKSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGxvY2FsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZ2xvYmFsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZXhpc3RpbmdBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhuZXdBdHRyaWJ1dGVzKSk7XG4gICAgICAgICAgICByZXR1cm4ga25vd25LZXlzLnNvcnQoKS5jb25jYXQoJ090aGVyJyk7XG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsQ2xhc3NIb29rcygpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSA9IHRydWU7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxQYXJ0aWFsQ2FyZHMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlc0hvb2soKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZUJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUF0dHJpYnV0ZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NlbmUnKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NyaXB0Jyk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxDbGFzc0hvb2tzKCk7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIW1haW4uaGFzcyB8fCAhbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgLy8gQ29ubmVjdGlvbiB3YXNuJ3QgbWFkZSB5ZXQuIFRyeSBpbiAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbml0LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmN1c3RvbVVJLmluaXREb25lID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS51c2VDdXN0b21pemVyKCk7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb24tY2hhbmdlZCcsIHdpbmRvdy5zZXRUaW1lb3V0LmJpbmQobnVsbCwgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzLCAxMDApKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5sb2coYExvYWRlZCBDdXN0b21VSSAke1ZFUlNJT059YCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgaWYgKCF3aW5kb3cuQ1VTVE9NX1VJX0xJU1QpIHtcbiAgICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVCA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QucHVzaCh7XG4gICAgICBuYW1lOiAnQ3VzdG9tVUknLFxuICAgICAgdmVyc2lvbjogVkVSU0lPTixcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXktZ2l0L2hvbWUtYXNzaXN0YW50LWN1c3RvbS11aScsXG4gICAgfSk7XG4gIH0sXG5cbiAgcnVuSG9va3MoKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUoKTtcbiAgfSxcblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhLWRldmljZS1uYW1lJykgfHwgJyc7XG4gIH0sXG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScsIG5hbWUgfHwgJycpO1xuICB9LFxuXG4gIGNvbXB1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uQm9keSA9ICh0ZW1wbGF0ZS5pbmRleE9mKCdyZXR1cm4nKSA+PSAwKSA/IHRlbXBsYXRlIDogYHJldHVybiBcXGAke3RlbXBsYXRlfVxcYDtgO1xuICAgIHRyeSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ2hhc3MnLCAnZW50aXRpZXMnLCAnZW50aXR5JywgJ2F0dHJpYnV0ZXMnLCAnYXR0cmlidXRlJywgJ3N0YXRlJywgZnVuY3Rpb25Cb2R5KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIHJldHVybiBmdW5jKGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGlmICgoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB8fCBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfSBpbiB0ZW1wbGF0ZSAke2Z1bmN0aW9uQm9keX1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9LFxufTtcbndpbmRvdy5jdXN0b21VSS5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCAnMjAxOTAzMjQnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==