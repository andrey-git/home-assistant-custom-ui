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
            icon='mdi:arrow-left'
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
    } else {
      const root = haPanelConfig.shadowRoot || haPanelConfig;

      if (root.lastElementChild.tagName !== 'HA-CONFIG-CUSTOM-UI') {
        const haConfigCustomUi = getHaConfigCustomUi();
        root.appendChild(haConfigCustomUi);
      }

      const visible = window.location.pathname.startsWith('/config/customui');
      root.lastElementChild.style.display = visible ? '' : 'none';
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
      if (!stateBadge || !stateBadge.prototype._updateIconAppearance) return;
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
/* harmony default export */ __webpack_exports__["default"] = ('20190113');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUudHMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2N1aS1iYXNlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZHluYW1pYy13aXRoLWV4dHJhLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9oYS10aGVtZWQtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9zdGF0ZS1jYXJkLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGFzcy1hdHRyaWJ1dGUtdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZlcnNpb24uanMiXSwibmFtZXMiOlsiREVGQVVMVF9ET01BSU5fSUNPTiIsIkRFRkFVTFRfUEFORUwiLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfV0lUSF9NT1JFX0lORk8iLCJET01BSU5TX0hJREVfTU9SRV9JTkZPIiwiRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSIsIlNUQVRFU19PRkYiLCJET01BSU5TX1RPR0dMRSIsIlNldCIsIlVOSVRfQyIsIlVOSVRfRiIsIkRFRkFVTFRfVklFV19FTlRJVFlfSUQiLCJhcHBseVRoZW1lc09uRWxlbWVudCIsImVsZW1lbnQiLCJ0aGVtZXMiLCJsb2NhbFRoZW1lIiwidXBkYXRlTWV0YSIsIl90aGVtZXMiLCJ0aGVtZU5hbWUiLCJkZWZhdWx0X3RoZW1lIiwic3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGhlbWUiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInByZWZpeGVkS2V5IiwidXBkYXRlU3R5bGVzIiwid2luZG93IiwiU2hhZHlDU1MiLCJzdHlsZVN1YnRyZWUiLCJtZXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidGhlbWVDb2xvciIsImR5bmFtaWNDb250ZW50VXBkYXRlciIsInJvb3QiLCJuZXdFbGVtZW50VGFnIiwiYXR0cmlidXRlcyIsInJvb3RFbCIsImN1c3RvbUVsIiwibGFzdENoaWxkIiwidGFnTmFtZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInRvTG93ZXJDYXNlIiwic2V0UHJvcGVydGllcyIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsImNhblRvZ2dsZURvbWFpbiIsImhhc3MiLCJkb21haW4iLCJzZXJ2aWNlcyIsImNhblRvZ2dsZVN0YXRlIiwic3RhdGVPYmoiLCJzdGF0ZSIsImNvbXB1dGVEb21haW4iLCJlbnRpdHlJZCIsInN1YnN0ciIsImluZGV4T2YiLCJjb21wdXRlU3RhdGVEb21haW4iLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsInN1cHBvcnRzRmVhdHVyZSIsImZlYXR1cmUiLCJzdXBwb3J0ZWRfZmVhdHVyZXMiLCJoYXNzQXR0cmlidXRlVXRpbCIsIkRPTUFJTl9ERVZJQ0VfQ0xBU1MiLCJiaW5hcnlfc2Vuc29yIiwiY292ZXIiLCJzZW5zb3IiLCJVTktOT1dOX1RZUEUiLCJBRERfVFlQRSIsIlRZUEVfVE9fVEFHIiwic3RyaW5nIiwianNvbiIsImljb24iLCJib29sZWFuIiwiYXJyYXkiLCJMT0dJQ19TVEFURV9BVFRSSUJVVEVTIiwiZW50aXR5X3BpY3R1cmUiLCJ1bmRlZmluZWQiLCJmcmllbmRseV9uYW1lIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiZW11bGF0ZWRfaHVlIiwiZG9tYWlucyIsImVtdWxhdGVkX2h1ZV9uYW1lIiwiaGFhc2thX2hpZGRlbiIsImhhYXNrYV9uYW1lIiwiaG9tZWJyaWRnZV9oaWRkZW4iLCJob21lYnJpZGdlX25hbWUiLCJhdHRyaWJ1dGlvbiIsImN1c3RvbV91aV9tb3JlX2luZm8iLCJjdXN0b21fdWlfc3RhdGVfY2FyZCIsImRldmljZV9jbGFzcyIsIm9wdGlvbnMiLCJhc3N1bWVkX3N0YXRlIiwiaW5pdGlhbF9zdGF0ZSIsInVuaXRfb2ZfbWVhc3VyZW1lbnQiLCJKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5IiwicHJvcCIsIkxpdGVyYWxTdHJpbmciLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwidG9TdHJpbmciLCJsaXRlcmFsVmFsdWUiLCJFcnJvciIsImh0bWxWYWx1ZSIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJodG1sIiwic3RyaW5ncyIsInZhbHVlcyIsInRlbXBsYXRlIiwicmVkdWNlIiwiYWNjIiwidiIsImlkeCIsImh0bWxMaXRlcmFsIiwiQ3VpQmFzZUVsZW1lbnQiLCJQb2x5bWVyIiwiRWxlbWVudCIsInByb3BlcnRpZXMiLCJpbkRpYWxvZyIsIkJvb2xlYW4iLCJjb250cm9sRWxlbWVudCIsIlN0cmluZyIsImV4dHJhIiwiQXJyYXkiLCJjb21wdXRlZCIsImNvbXB1dGVFeHRyYSIsImV4dHJhcyIsImV4dHJhX2RhdGFfdGVtcGxhdGUiLCJpc0FycmF5IiwibWFwIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJzdGF0ZXMiLCJmaWx0ZXIiLCJzaG93TGFzdENoYW5nZWQiLCJsZW5ndGgiLCJzaG93X2xhc3RfY2hhbmdlZCIsImhhc0V4dHJhIiwiRHluYW1pY0VsZW1lbnQiLCJlbGVtZW50TmFtZSIsIm9ic2VydmVycyIsIm9ic2VydmVyRnVuYyIsInRvVXBwZXJDYXNlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJ3aGVuRGVmaW5lZCIsInRoZW4iLCJEeW5hbWljV2l0aEV4dHJhIiwiZ2V0IiwiZXh0cmFPYmoiLCJfYXR0YWNoZWQiLCJleHRyYU9ialZpc2libGUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiX2lzQXR0YWNoZWQiLCJhdHRhY2hlZCIsImV4dHJhX2JhZGdlIiwiZXh0cmFCYWRnZXMiLCJleHRyYUJhZGdlIiwibWF5YmVDaGFuZ2VPYmplY3QiLCJhdHRyaWJ1dGUiLCJ1bml0IiwiYmxhY2tsaXN0IiwiYmxhY2tsaXN0X3N0YXRlcyIsInNvbWUiLCJSZWdFeHAiLCJ0ZXN0IiwiX2VudGl0eURpc3BsYXkiLCJjb21wdXRlRXh0cmFWaXNpYmxlIiwiZXh0cmFDbGFzcyIsIl9zaG93Q29udHJvbCIsImhpZGVfY29udHJvbCIsImNvbXB1dGVTdGF0ZURpc3BsYXkiLCJoYUxvY2FsaXplIiwibG9jYWxpemUiLCJpc0NvbmZpcm1Db250cm9scyIsImNvbmZpcm1fY29udHJvbHMiLCJjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jayIsImNsaWNrSGFuZGxlciIsImUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJsb2NrIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJhcHBseVRoZW1lcyIsImV4dHJhRG9tQ2hhbmdlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtIiwiSGFDb25maWdDdXN0b21VaSIsImlzV2lkZSIsIm5hbWUiLCJvYnNlcnZlciIsInJlYWR5IiwiZ2V0TmFtZSIsIm5hbWVDaGFuZ2VkIiwic2V0TmFtZSIsIl9iYWNrSGFuZGxlciIsImhpc3RvcnkiLCJiYWNrIiwiZmlyZSIsIkhhVGhlbWVkU2xpZGVyIiwiZGlzYWJsZU9mZldoZW5NaW4iLCJfY29tcHV0ZUF0dHJpYnV0ZSIsImNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJwaW4iLCJpc09uIiwibm90aWZ5IiwiX3RoZW1lZE1pbiIsIl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJhdHRyIiwiZGVmIiwiY29tcHV0ZUNsYXNzIiwidGhlbWVkTWluIiwidmFsdWVDaGFuZ2VkIiwiZXYiLCJ0YXJnZXQiLCJTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUyIsIkRPTUFJTl9UT19TTElERVJfU1VQUE9SVCIsImxpZ2h0IiwiY2xpbWF0ZSIsIlRZUEVfVE9fQ09OVFJPTCIsInRvZ2dsZSIsImRpc3BsYXkiLCJTdGF0ZUNhcmRDdXN0b21VaSIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX2NvbnRhaW5lciIsInNldFByb3BlcnR5IiwiaW5wdXRDaGFuZ2VkIiwibWFyZ2luIiwicGFkZGluZyIsImJhZGdlTW9kZSIsImlkIiwiY29uc29sZSIsIndhcm4iLCJiYWRnZXNfbGlzdCIsInB1c2giLCJwYXJhbXMiLCJ3aWR0aCIsImZvbnRTaXplIiwiY2xlYW5CYWRnZVN0eWxlIiwibW9kaWZpZWRPYmoiLCJ0aGVtZVRhcmdldCIsIm1heWJlSGlkZUVudGl0eSIsInNsaWRlckVsaWdpYmxlXyIsIm9iaiIsInN0YXRlX2NhcmRfbW9kZSIsInJlZ3VsYXJNb2RlXyIsIm9yaWdpbmFsU3RhdGVDYXJkVHlwZSIsImN1c3RvbVN0YXRlQ2FyZFR5cGUiLCJzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIiwic3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5Iiwic2VydmljZU1pbiIsInNlcnZpY2VNYXgiLCJ2YWx1ZU5hbWUiLCJzZXRWYWx1ZU5hbWUiLCJuYW1lT24iLCJtaW5fdGVtcCIsIm1heF90ZW1wIiwiY29udHJvbF9lbGVtZW50IiwiU3RhdGVDYXJkV2l0aFNsaWRlciIsInNsaWRlclZhbHVlIiwibW9kZSIsInN0cmV0Y2hTbGlkZXIiLCJicmVha1NsaWRlciIsImhpZGVTbGlkZXIiLCJsaW5lVG9vTG9uZyIsIm1pbkxpbmVCcmVhayIsIm1heExpbmVCcmVhayIsInNob3dTbGlkZXIiLCJfb25Jcm9uUmVzaXplIiwiYmluZCIsIl9pc0Nvbm5lY3RlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfd2FpdEZvckxheW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfc2V0TW9kZSIsIl9mcmFtZUlkIiwicmVhZHlUb0NvbXB1dGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwcmV2QnJlYWtTbGlkZXIiLCJwcmV2SGlkZVNsaWRlciIsIiQiLCJjb250YWluZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiY29udGFpbmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhdGVIZWlnaHQiLCJfY29tcHV0ZVdyYXBDbGFzcyIsIl9zaG93U2xpZGVyIiwic2xpZGVyQ2hhbmdlZCIsInBhcnNlSW50IiwicGFyYW0iLCJpc05hTiIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJjYWxsU2VydmljZSIsInN0YXRlT2JqQ2hhbmdlZCIsInN0cmV0Y2hfc2xpZGVyIiwiU3RhdGVDYXJkV2l0aG91dFNsaWRlciIsInN1cGVyQ2xhc3MiLCJFdmVudHNNaXhpbiIsImRldGFpbCIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNvbXBvc2VkIiwibm9kZSIsImRpc3BhdGNoRXZlbnQiLCJTVVBQT1JURURfU0xJREVSX01PREVTIiwiY3VzdG9tVWlBdHRyaWJ1dGVzIiwiZGV2aWNlIiwidGVtcGxhdGVzIiwiX3N0YXRlRGlzcGxheSIsImNvbmNhdCIsInNsaWRlcl90aGVtZSIsImhpZGVfaW5fZGVmYXVsdF92aWV3IiwiaWNvbl9jb2xvciIsImRvbUhvc3QiLCJnZXRSb290Tm9kZSIsIkRvY3VtZW50RnJhZ21lbnQiLCJob3N0IiwibGlnaHRPclNoYWRvdyIsInNlbGVjdG9yIiwic2hhZG93Um9vdCIsImdldEVsZW1lbnRIaWVyYXJjaHkiLCJoaWVyYXJjaHkiLCJzaGlmdCIsImdldENvbnRleHQiLCJfY29udGV4dCIsImdyb3VwRW50aXR5IiwicmV2ZXJzZSIsImZpbmRNYXRjaCIsImZpbmQiLCJvcHRpb24iLCJtYXRjaCIsIm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2UiLCJhcHBseUF0dHJpYnV0ZXMiLCJtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAiLCJjb250ZXh0IiwiYyIsIl9zZXRLZWVwIiwiX2N1aV9rZWVwIiwibWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJoYXNHbG9iYWwiLCJoYXNDaGFuZ2VzIiwidW50ZW1wbGF0ZWRfYXR0cmlidXRlcyIsInVudGVtcGxhdGVkX3N0YXRlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5IiwibWF5YmVBcHBseVRlbXBsYXRlcyIsIm5ld1Jlc3VsdCIsImNoZWNrQXR0cmlidXRlcyIsImxhc3RfY2hhbmdlZCIsImFsbG93SGlkZGVuIiwiZml4R3JvdXBUaXRsZXMiLCJob21lQXNzaXN0YW50TWFpbiIsImhhQ2FyZHMiLCJtYWluIiwiY2FyZHMiLCJjYXJkIiwibmFtZUVsZW0iLCJ0ZXh0Q29udGVudCIsImNvbnRyb2xDb2x1bW5zIiwiY29sdW1ucyIsInBhcnRpYWxDYXJkcyIsImYiLCJoYW5kbGVXaW5kb3dDaGFuZ2UiLCJfdXBkYXRlQ29sdW1ucyIsIm1xbHMiLCJtcWwiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInVzZUN1c3RvbWl6ZXIiLCJjdXN0b21pemVyIiwiaGlkZV9hdHRyaWJ1dGVzIiwidXBkYXRlQ29uZmlnUGFuZWwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImhhUGFuZWxDb25maWciLCJoYUNvbmZpZ05hdmlnYXRpb24iLCJjdWlQYXRjaCIsIl9vcmlnaW5hbENvbXB1dGVMb2FkZWQiLCJfY29tcHV0ZUxvYWRlZCIsIl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uIiwiX2NvbXB1dGVDYXB0aW9uIiwiX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uIiwiX2NvbXB1dGVEZXNjcmlwdGlvbiIsInBhZ2UiLCJwYWdlcyIsImNvbmYiLCJjYXB0aW9uIiwibG9hZGVkIiwiZ2V0SGFDb25maWdDdXN0b21VaSIsImhhQ29uZmlnQ3VzdG9tVWkiLCJpcm9uUGFnZXMiLCJsYXN0RWxlbWVudENoaWxkIiwic2VsZWN0IiwidmlzaWJsZSIsImluc3RhbGxTdGF0ZXNIb29rIiwiaG9tZUFzc2lzdGFudCIsIl91cGRhdGVIYXNzIiwib3JpZ2luYWxVcGRhdGUiLCJ1cGRhdGUiLCJuZXdFbnRpdHkiLCJfdGhlbWVXYWl0ZXJzIiwid2FpdGVyIiwic3RhdGVDaGFuZ2VkIiwiaW5zdGFsbFBhcnRpYWxDYXJkcyIsIl9kZWZhdWx0Vmlld0ZpbHRlciIsImV4Y2x1ZGVzIiwiZXhjbHVkZUVudGl0eUlkIiwiaW5zdGFsbEFjdGlvbk5hbWUiLCJrbGFzcyIsImRlZmluZVByb3BlcnR5IiwiY3VzdG9tTG9jYWxpemUiLCJhY3Rpb25fbmFtZSIsIl9fZGF0YSIsInNldCIsImluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSIsImhhU3RhdGVMYWJlbEJhZGdlIiwic3RhcnRJbnRlcnZhbCIsImluc3RhbGxTdGF0ZUJhZGdlIiwic3RhdGVCYWRnZSIsIl91cGRhdGVJY29uQXBwZWFyYW5jZSIsIm9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZSIsImJhY2tncm91bmRJbWFnZSIsImNvbG9yIiwiaW5zdGFsbEhhQXR0cmlidXRlcyIsImhhQXR0cmlidXRlcyIsImNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJjdXN0b21Db21wdXRlRmlsdGVyc0FycmF5IiwiZXh0cmFGaWx0ZXJzIiwic3BsaXQiLCJpbnN0YWxsSGFGb3JtQ3VzdG9taXplIiwiaGFGb3JtQ3VzdG9taXplIiwiaGFGb3JtQ3VzdG9taXplSW5pdERvbmUiLCJfY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsImN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUiLCJzZWNvbmRhcnkiLCJjb25maWciLCJfaW5pdE9wZW5PYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMiLCJjdXN0b21nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImxvY2FsQXR0cmlidXRlcyIsImdsb2JhbEF0dHJpYnV0ZXMiLCJleGlzdGluZ0F0dHJpYnV0ZXMiLCJrbm93bktleXMiLCJmaWx0ZXJGcm9tQXR0cmlidXRlcyIsInNvcnQiLCJpbnN0YWxsQ2xhc3NIb29rcyIsImNsYXNzSW5pdERvbmUiLCJpbml0IiwiaW5pdERvbmUiLCJydW5Ib29rcyIsImxvZyIsIkNVU1RPTV9VSV9MSVNUIiwidmVyc2lvbiIsInVybCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiZnVuY3Rpb25Cb2R5IiwiZnVuYyIsIkZ1bmN0aW9uIiwiU3ludGF4RXJyb3IiLCJSZWZlcmVuY2VFcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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QWhCLEc7Ozs7Ozs7Ozs7Ozs7QUM1bUJBLCtEQUFlLFVBQWYsRSIsImZpbGUiOiJzY3JpcHRzLWRiZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9zY3JpcHRzLmpzXCIpO1xuIiwiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9IFwiaGFzczpib29rbWFya1wiO1xuXG4vKiogUGFuZWwgdG8gc2hvdyB3aGVuIG5vIHBhbmVsIGlzIHBpY2tlZC4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BBTkVMID0gXCJzdGF0ZXNcIjtcblxuLyoqIERvbWFpbnMgdGhhdCBoYXZlIGEgc3RhdGUgY2FyZC4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfQ0FSRCA9IFtcbiAgXCJjbGltYXRlXCIsXG4gIFwiY292ZXJcIixcbiAgXCJjb25maWd1cmF0b3JcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbiAgXCJpbnB1dF9udW1iZXJcIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInNjZW5lXCIsXG4gIFwic2NyaXB0XCIsXG4gIFwidGltZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgXCJ3ZWJsaW5rXCIsXG5dO1xuXG4vKiogRG9tYWlucyB3aXRoIHNlcGFyYXRlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX01PUkVfSU5GTyA9IFtcbiAgXCJhbGFybV9jb250cm9sX3BhbmVsXCIsXG4gIFwiYXV0b21hdGlvblwiLFxuICBcImNhbWVyYVwiLFxuICBcImNsaW1hdGVcIixcbiAgXCJjb25maWd1cmF0b3JcIixcbiAgXCJjb3ZlclwiLFxuICBcImZhblwiLFxuICBcImdyb3VwXCIsXG4gIFwiaGlzdG9yeV9ncmFwaFwiLFxuICBcImlucHV0X2RhdGV0aW1lXCIsXG4gIFwibGlnaHRcIixcbiAgXCJsb2NrXCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwic2NyaXB0XCIsXG4gIFwic3VuXCIsXG4gIFwidXBkYXRlclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcIndlYXRoZXJcIixcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdyBubyBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfSElERV9NT1JFX0lORk8gPSBbXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcInNjZW5lXCIsXG4gIFwid2VibGlua1wiLFxuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG91bGQgaGF2ZSB0aGUgaGlzdG9yeSBoaWRkZW4gaW4gdGhlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSA9IFtcbiAgXCJjYW1lcmFcIixcbiAgXCJjb25maWd1cmF0b3JcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwic2NlbmVcIixcbl07XG5cbi8qKiBTdGF0ZXMgdGhhdCB3ZSBjb25zaWRlciBcIm9mZlwiLiAqL1xuZXhwb3J0IGNvbnN0IFNUQVRFU19PRkYgPSBbXCJjbG9zZWRcIiwgXCJsb2NrZWRcIiwgXCJvZmZcIl07XG5cbi8qKiBEb21haW5zIHdoZXJlIHdlIGFsbG93IHRvZ2dsZSBpbiBMb3ZlbGFjZS4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1RPR0dMRSA9IG5ldyBTZXQoW1xuICBcImZhblwiLFxuICBcImlucHV0X2Jvb2xlYW5cIixcbiAgXCJsaWdodFwiLFxuICBcInN3aXRjaFwiLFxuXSk7XG5cbi8qKiBUZW1wZXJhdHVyZSB1bml0cy4gKi9cbmV4cG9ydCBjb25zdCBVTklUX0MgPSBcIsKwQ1wiO1xuZXhwb3J0IGNvbnN0IFVOSVRfRiA9IFwiwrBGXCI7XG5cbi8qKiBFbnRpdHkgSUQgb2YgdGhlIGRlZmF1bHQgdmlldy4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1ZJRVdfRU5USVRZX0lEID0gXCJncm91cC5kZWZhdWx0X3ZpZXdcIjtcbiIsIi8qKlxuICogQXBwbHkgYSB0aGVtZSB0byBhbiBlbGVtZW50IGJ5IHNldHRpbmcgdGhlIENTUyB2YXJpYWJsZXMgb24gaXQuXG4gKlxuICogZWxlbWVudDogRWxlbWVudCB0byBhcHBseSB0aGVtZSBvbi5cbiAqIHRoZW1lczogSEFTUyBUaGVtZSBpbmZvcm1hdGlvblxuICogbG9jYWxUaGVtZTogc2VsZWN0ZWQgdGhlbWUuXG4gKiB1cGRhdGVNZXRhOiBib29sZWFuIGlmIHdlIHNob3VsZCB1cGRhdGUgdGhlIHRoZW1lLWNvbG9yIG1ldGEgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gIGVsZW1lbnQsXG4gIHRoZW1lcyxcbiAgbG9jYWxUaGVtZSxcbiAgdXBkYXRlTWV0YSA9IGZhbHNlXG4pIHtcbiAgaWYgKCFlbGVtZW50Ll90aGVtZXMpIHtcbiAgICBlbGVtZW50Ll90aGVtZXMgPSB7fTtcbiAgfVxuICBsZXQgdGhlbWVOYW1lID0gdGhlbWVzLmRlZmF1bHRfdGhlbWU7XG4gIGlmIChsb2NhbFRoZW1lID09PSBcImRlZmF1bHRcIiB8fCAobG9jYWxUaGVtZSAmJiB0aGVtZXMudGhlbWVzW2xvY2FsVGhlbWVdKSkge1xuICAgIHRoZW1lTmFtZSA9IGxvY2FsVGhlbWU7XG4gIH1cbiAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbWVudC5fdGhlbWVzKTtcbiAgaWYgKHRoZW1lTmFtZSAhPT0gXCJkZWZhdWx0XCIpIHtcbiAgICB2YXIgdGhlbWUgPSB0aGVtZXMudGhlbWVzW3RoZW1lTmFtZV07XG4gICAgT2JqZWN0LmtleXModGhlbWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gXCItLVwiICsga2V5O1xuICAgICAgZWxlbWVudC5fdGhlbWVzW3ByZWZpeGVkS2V5XSA9IFwiXCI7XG4gICAgICBzdHlsZXNbcHJlZml4ZWRLZXldID0gdGhlbWVba2V5XTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZWxlbWVudC51cGRhdGVTdHlsZXMpIHtcbiAgICBlbGVtZW50LnVwZGF0ZVN0eWxlcyhzdHlsZXMpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5TaGFkeUNTUykge1xuICAgIC8vIGltcGxlbWVudCB1cGRhdGVTdHlsZXMoKSBtZXRob2Qgb2YgUG9sZW1lciBlbGVtZW50c1xuICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZVN1YnRyZWUoLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChlbGVtZW50KSwgc3R5bGVzKTtcbiAgfVxuXG4gIGlmICghdXBkYXRlTWV0YSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPXRoZW1lLWNvbG9yXVwiKTtcbiAgaWYgKG1ldGEpIHtcbiAgICBpZiAoIW1ldGEuaGFzQXR0cmlidXRlKFwiZGVmYXVsdC1jb250ZW50XCIpKSB7XG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZShcImRlZmF1bHQtY29udGVudFwiLCBtZXRhLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIikpO1xuICAgIH1cbiAgICBjb25zdCB0aGVtZUNvbG9yID1cbiAgICAgIHN0eWxlc1tcIi0tcHJpbWFyeS1jb2xvclwiXSB8fCBtZXRhLmdldEF0dHJpYnV0ZShcImRlZmF1bHQtY29udGVudFwiKTtcbiAgICBtZXRhLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgdGhlbWVDb2xvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVXBkYXRlIHJvb3QncyBjaGlsZCBlbGVtZW50IHRvIGJlIG5ld0VsZW1lbnRUYWcgcmVwbGFjaW5nIGFub3RoZXIgZXhpc3RpbmcgY2hpbGQgaWYgYW55LlxuICogQ29weSBhdHRyaWJ1dGVzIGludG8gdGhlIGNoaWxkIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWNDb250ZW50VXBkYXRlcihyb290LCBuZXdFbGVtZW50VGFnLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IHJvb3RFbCA9IHJvb3Q7XG4gIGxldCBjdXN0b21FbDtcblxuICBpZiAocm9vdEVsLmxhc3RDaGlsZCAmJiByb290RWwubGFzdENoaWxkLnRhZ05hbWUgPT09IG5ld0VsZW1lbnRUYWcpIHtcbiAgICBjdXN0b21FbCA9IHJvb3RFbC5sYXN0Q2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChyb290RWwubGFzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRpbmcgYW4gZWxlbWVudCB3aXRoIHVwcGVyIGNhc2Ugd29ya3MgZmluZSBpbiBDaHJvbWUsIGJ1dCBpbiBGRiBpdCBkb2Vzbid0IGltbWVkaWF0ZWx5XG4gICAgLy8gYmVjb21lIGEgZGVmaW5lZCBDdXN0b20gRWxlbWVudC4gUG9seW1lciBkb2VzIHRoYXQgaW4gc29tZSBsYXRlciBwYXNzLlxuICAgIGN1c3RvbUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuZXdFbGVtZW50VGFnLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnNldFByb3BlcnRpZXMpIHtcbiAgICBjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKGF0dHJpYnV0ZXMpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGN1c3RvbSBlbGVtZW50IGRlZmluaXRpb24gd2Fzbid0IGxvYWRlZCB5ZXQgLSBzZXRQcm9wZXJ0aWVzIHdvdWxkIGJlXG4gICAgLy8gbWlzc2luZywgYnV0IG5vIGhhcm0gaW4gc2V0dGluZyBhdHRyaWJ1dGVzIG9uZS1ieS1vbmUgdGhlbi5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGN1c3RvbUVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjdXN0b21FbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlRG9tYWluKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGRvbWFpbjogc3RyaW5nKSB7XG4gIGNvbnN0IHNlcnZpY2VzID0gaGFzcy5zZXJ2aWNlc1tkb21haW5dO1xuICBpZiAoIXNlcnZpY2VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGRvbWFpbiA9PT0gXCJsb2NrXCIpIHtcbiAgICByZXR1cm4gXCJsb2NrXCIgaW4gc2VydmljZXM7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gXCJjb3ZlclwiKSB7XG4gICAgcmV0dXJuIFwib3Blbl9jb3ZlclwiIGluIHNlcnZpY2VzO1xuICB9XG4gIHJldHVybiBcInR1cm5fb25cIiBpbiBzZXJ2aWNlcztcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY2FuVG9nZ2xlRG9tYWluIGZyb20gXCIuL2Nhbl90b2dnbGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZVN0YXRlKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGF0ZU9iajogSGFzc0VudGl0eVxuKSB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gIGlmIChkb21haW4gPT09IFwiZ3JvdXBcIikge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJvblwiIHx8IHN0YXRlT2JqLnN0YXRlID09PSBcIm9mZlwiO1xuICB9XG4gIGlmIChkb21haW4gPT09IFwiY2xpbWF0ZVwiKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNDA5Nik7XG4gIH1cblxuICByZXR1cm4gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlRG9tYWluKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKDAsIGVudGl0eUlkLmluZGV4T2YoXCIuXCIpKTtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmo6IEhhc3NFbnRpdHkpIHtcbiAgcmV0dXJuIGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdGllcyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEdyb3VwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEdyb3VwRW50aXRpZXMoXG4gIGVudGl0aWVzOiBIYXNzRW50aXRpZXMsXG4gIGdyb3VwOiBHcm91cEVudGl0eVxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgcmVzdWx0W2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdGllcyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgZ2V0R3JvdXBFbnRpdGllcyBmcm9tIFwiLi9nZXRfZ3JvdXBfZW50aXRpZXNcIjtcbmltcG9ydCB7IEdyb3VwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8vIFJldHVybiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZW50aXRpZXMgdGhhdCB0aGUgdmlldyB3aWxsIHNob3dcbi8vIGluY2x1ZGluZyBlbWJlZGRlZCBncm91cHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3RW50aXRpZXMoXG4gIGVudGl0aWVzOiBIYXNzRW50aXRpZXMsXG4gIHZpZXc6IEdyb3VwRW50aXR5XG4pOiBIYXNzRW50aXRpZXMge1xuICBjb25zdCB2aWV3RW50aXRpZXMgPSB7fTtcblxuICB2aWV3LmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSAmJiAhZW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICB2aWV3RW50aXRpZXNbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG5cbiAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpID09PSBcImdyb3VwXCIpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbnRpdGllcyA9IGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGVudGl0eSBhcyBHcm91cEVudGl0eSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBFbnRpdGllcykuZm9yRWFjaCgoZ3JFbnRpdHlJZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyRW50aXR5ID0gZ3JvdXBFbnRpdGllc1tnckVudGl0eUlkXTtcblxuICAgICAgICAgIGlmICghZ3JFbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgICAgICAgIHZpZXdFbnRpdGllc1tnckVudGl0eUlkXSA9IGdyRW50aXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmlld0VudGl0aWVzO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjYW5Ub2dnbGVTdGF0ZSBmcm9tIFwiLi9jYW5fdG9nZ2xlX3N0YXRlXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBET01BSU5TX1dJVEhfQ0FSRCB9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZUNhcmRUeXBlKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGF0ZU9iajogSGFzc0VudGl0eVxuKSB7XG4gIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiKSB7XG4gICAgcmV0dXJuIFwiZGlzcGxheVwiO1xuICB9XG5cbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcblxuICBpZiAoRE9NQUlOU19XSVRIX0NBUkQuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBkb21haW47XG4gIH1cbiAgaWYgKFxuICAgIGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSAmJlxuICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbCAhPT0gXCJoaWRkZW5cIlxuICApIHtcbiAgICByZXR1cm4gXCJ0b2dnbGVcIjtcbiAgfVxuICByZXR1cm4gXCJkaXNwbGF5XCI7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNGZWF0dXJlID0gKFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgZmVhdHVyZTogbnVtYmVyXG4pOiBib29sZWFuID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgcmV0dXJuIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcyEgJiBmZWF0dXJlKSAhPT0gMDtcbn07XG4iLCJjb25zdCBoYXNzQXR0cmlidXRlVXRpbCA9IHt9O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgXCJiYXR0ZXJ5XCIsXG4gICAgXCJjb2xkXCIsXG4gICAgXCJjb25uZWN0aXZpdHlcIixcbiAgICBcImRvb3JcIixcbiAgICBcImdhcmFnZV9kb29yXCIsXG4gICAgXCJnYXNcIixcbiAgICBcImhlYXRcIixcbiAgICBcImxpZ2h0XCIsXG4gICAgXCJsb2NrXCIsXG4gICAgXCJtb2lzdHVyZVwiLFxuICAgIFwibW90aW9uXCIsXG4gICAgXCJtb3ZpbmdcIixcbiAgICBcIm9jY3VwYW5jeVwiLFxuICAgIFwib3BlbmluZ1wiLFxuICAgIFwicGx1Z1wiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInByZXNlbmNlXCIsXG4gICAgXCJwcm9ibGVtXCIsXG4gICAgXCJzYWZldHlcIixcbiAgICBcInNtb2tlXCIsXG4gICAgXCJzb3VuZFwiLFxuICAgIFwidmlicmF0aW9uXCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgXSxcbiAgY292ZXI6IFtcImdhcmFnZVwiXSxcbiAgc2Vuc29yOiBbXCJiYXR0ZXJ5XCIsIFwiaHVtaWRpdHlcIiwgXCJpbGx1bWluYW5jZVwiLCBcInRlbXBlcmF0dXJlXCIsIFwicHJlc3N1cmVcIl0sXG59O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBcImpzb25cIjtcbmhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFID0gXCJrZXktdmFsdWVcIjtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUcgPSB7XG4gIHN0cmluZzogXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGpzb246IFwiaGEtY3VzdG9taXplLXN0cmluZ1wiLFxuICBpY29uOiBcImhhLWN1c3RvbWl6ZS1pY29uXCIsXG4gIGJvb2xlYW46IFwiaGEtY3VzdG9taXplLWJvb2xlYW5cIixcbiAgYXJyYXk6IFwiaGEtY3VzdG9taXplLWFycmF5XCIsXG4gIFwia2V5LXZhbHVlXCI6IFwiaGEtY3VzdG9taXplLWtleS12YWx1ZVwiLFxufTtcblxuLy8gQXR0cmlidXRlcyBoZXJlIHNlcnZlIGR1YWwgcHVycG9zZTpcbi8vIDEpIEFueSBrZXkgb2YgdGhpcyBvYmplY3Qgd29uJ3QgYmUgc2hvd24gaW4gbW9yZS1pbmZvIHdpbmRvdy5cbi8vIDIpIEFueSBrZXkgd2hpY2ggaGFzIHZhbHVlIG90aGVyIHRoYW4gdW5kZWZpbmVkIHdpbGwgYXBwZWFyIGluIGN1c3RvbWl6YXRpb25cbi8vICAgIGNvbmZpZyBhY2NvcmRpbmcgdG8gaXRzIHZhbHVlLlxuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9IGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgfHwge1xuICBlbnRpdHlfcGljdHVyZTogdW5kZWZpbmVkLFxuICBmcmllbmRseV9uYW1lOiB7IHR5cGU6IFwic3RyaW5nXCIsIGRlc2NyaXB0aW9uOiBcIk5hbWVcIiB9LFxuICBpY29uOiB7IHR5cGU6IFwiaWNvblwiIH0sXG4gIGVtdWxhdGVkX2h1ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgZW11bGF0ZWRfaHVlX25hbWU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgaGFhc2thX2hpZGRlbjogdW5kZWZpbmVkLFxuICBoYWFza2FfbmFtZTogdW5kZWZpbmVkLFxuICBob21lYnJpZGdlX2hpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiB9LFxuICBob21lYnJpZGdlX25hbWU6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBzdXBwb3J0ZWRfZmVhdHVyZXM6IHVuZGVmaW5lZCxcbiAgYXR0cmlidXRpb246IHVuZGVmaW5lZCxcbiAgY3VzdG9tX3VpX21vcmVfaW5mbzogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgZGV2aWNlX2NsYXNzOiB7XG4gICAgdHlwZTogXCJhcnJheVwiLFxuICAgIG9wdGlvbnM6IGhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MsXG4gICAgZGVzY3JpcHRpb246IFwiRGV2aWNlIGNsYXNzXCIsXG4gICAgZG9tYWluczogW1wiYmluYXJ5X3NlbnNvclwiLCBcImNvdmVyXCIsIFwic2Vuc29yXCJdLFxuICB9LFxuICBoaWRkZW46IHsgdHlwZTogXCJib29sZWFuXCIsIGRlc2NyaXB0aW9uOiBcIkhpZGUgZnJvbSBVSVwiIH0sXG4gIGFzc3VtZWRfc3RhdGU6IHtcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICBkb21haW5zOiBbXG4gICAgICBcInN3aXRjaFwiLFxuICAgICAgXCJsaWdodFwiLFxuICAgICAgXCJjb3ZlclwiLFxuICAgICAgXCJjbGltYXRlXCIsXG4gICAgICBcImZhblwiLFxuICAgICAgXCJncm91cFwiLFxuICAgICAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgICBdLFxuICB9LFxuICBpbml0aWFsX3N0YXRlOiB7XG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICBkb21haW5zOiBbXCJhdXRvbWF0aW9uXCJdLFxuICB9LFxuICB1bml0X29mX21lYXN1cmVtZW50OiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhc3NBdHRyaWJ1dGVVdGlsO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSBmdW5jdGlvbihwcm9wKSB7IHJldHVybiBwcm9wOyB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi9ib290LmpzJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzdGF0aWMgc3RyaW5nIHZhbHVlIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGZpbHRlclxuICogc3RyaW5ncyBieSBhc3NldGluZyB0aGF0IHRoZXkgaGF2ZSBiZWVuIGNyZWF0ZWQgdmlhIHRoaXMgY2xhc3MuIFRoZVxuICogYHZhbHVlYCBwcm9wZXJ0eSByZXR1cm5zIHRoZSBzdHJpbmcgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuY2xhc3MgTGl0ZXJhbFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZykge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMudmFsdWUgPSBzdHJpbmcudG9TdHJpbmcoKTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBMaXRlcmFsU3RyaW5nIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBsaXRlcmFsVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFMaXRlcmFsU3RyaW5nfSAqLyh2YWx1ZSkudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLWxpdGVyYWwgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sTGl0ZXJhbCBmdW5jdGlvbjogJHt2YWx1ZX1gXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGh0bWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnQgfSAqLyh2YWx1ZSkuaW5uZXJIVE1MO1xuICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiBsaXRlcmFsVmFsdWUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi10ZW1wbGF0ZSB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWwgZnVuY3Rpb246ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHRlbXBsYXRlIGxpdGVyYWwgdGFnIHRoYXQgY3JlYXRlcyBhbiBIVE1MIDx0ZW1wbGF0ZT4gZWxlbWVudCBmcm9tIHRoZVxuICogY29udGVudHMgb2YgdGhlIHN0cmluZy5cbiAqXG4gKiBUaGlzIGFsbG93cyB5b3UgdG8gd3JpdGUgYSBQb2x5bWVyIFRlbXBsYXRlIGluIEphdmFTY3JpcHQuXG4gKlxuICogVGVtcGxhdGVzIGNhbiBiZSBjb21wb3NlZCBieSBpbnRlcnBvbGF0aW5nIGBIVE1MVGVtcGxhdGVFbGVtZW50YHMgaW5cbiAqIGV4cHJlc3Npb25zIGluIHRoZSBKYXZhU2NyaXB0IHRlbXBsYXRlIGxpdGVyYWwuIFRoZSBuZXN0ZWQgdGVtcGxhdGUnc1xuICogYGlubmVySFRNTGAgaXMgaW5jbHVkZWQgaW4gdGhlIGNvbnRhaW5pbmcgdGVtcGxhdGUuICBUaGUgb25seSBvdGhlclxuICogdmFsdWVzIGFsbG93ZWQgaW4gZXhwcmVzc2lvbnMgYXJlIHRob3NlIHJldHVybmVkIGZyb20gYGh0bWxMaXRlcmFsYFxuICogd2hpY2ggZW5zdXJlcyBvbmx5IGxpdGVyYWwgdmFsdWVzIGZyb20gSlMgc291cmNlIGV2ZXIgcmVhY2ggdGhlIEhUTUwsIHRvXG4gKiBndWFyZCBhZ2FpbnN0IFhTUyByaXNrcy5cbiAqXG4gKiBBbGwgb3RoZXIgdmFsdWVzIGFyZSBkaXNhbGxvd2VkIGluIGV4cHJlc3Npb25zIHRvIGhlbHAgcHJldmVudCBYU1NcbiAqIGF0dGFja3M7IGhvd2V2ZXIsIGBodG1sTGl0ZXJhbGAgY2FuIGJlIHVzZWQgdG8gY29tcG9zZSBzdGF0aWNcbiAqIHN0cmluZyB2YWx1ZXMgaW50byB0ZW1wbGF0ZXMuIFRoaXMgaXMgdXNlZnVsIHRvIGNvbXBvc2Ugc3RyaW5ncyBpbnRvXG4gKiBwbGFjZXMgdGhhdCBkbyBub3QgYWNjZXB0IGh0bWwsIGxpa2UgdGhlIGNzcyB0ZXh0IG9mIGEgYHN0eWxlYFxuICogZWxlbWVudC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT46aG9zdHsgY29udGVudDpcIi4uLlwiIH08L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3RoaXMucGFydGlhbFRlbXBsYXRlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBwYXJ0aWFsVGVtcGxhdGUoKSB7IHJldHVybiBodG1sYDxzcGFuPlBhcnRpYWwhPC9zcGFuPmA7IH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFIVE1MVGVtcGxhdGVFbGVtZW50fSBDb25zdHJ1Y3RlZCBIVE1MVGVtcGxhdGVFbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gZnVuY3Rpb24gaHRtbChzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBodG1sVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgcmV0dXJuIHRlbXBsYXRlO1xufTtcblxuLyoqXG4gKiBBbiBodG1sIGxpdGVyYWwgdGFnIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgaHRtbGAgdG8gY29tcG9zZS5cbiAqIGEgbGl0ZXJhbCBzdHJpbmcuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+XG4gKiAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuICogICAgICAgICAgICR7dGhpcy5zdHlsZVRlbXBsYXRlKCl9XG4gKiAgICAgICAgIDwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7c3RhdGljVmFsdWV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XG4gKiAgICAgICAgcmV0dXJuIGh0bWxMaXRlcmFsYC5zaGFkb3dlZCB7IGJhY2tncm91bmQ6IGdyYXk7IH1gO1xuICogICAgIH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFMaXRlcmFsU3RyaW5nfSBDb25zdHJ1Y3RlZCBsaXRlcmFsIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgaHRtbExpdGVyYWwgPSBmdW5jdGlvbihzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBMaXRlcmFsU3RyaW5nKHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgbGl0ZXJhbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSkpO1xufTtcbiIsImltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEN1aUJhc2VFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICBleHRyYToge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaikge1xuICAgIGxldCBleHRyYXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2RhdGFfdGVtcGxhdGU7XG4gICAgaWYgKGV4dHJhcykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dHJhcykpIHtcbiAgICAgICAgZXh0cmFzID0gW2V4dHJhc107XG4gICAgICB9XG4gICAgICByZXR1cm4gZXh0cmFzLm1hcChleHRyYSA9PiB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICBleHRyYSxcbiAgICAgICAgaGFzcyxcbiAgICAgICAgaGFzcy5zdGF0ZXMsXG4gICAgICAgIHN0YXRlT2JqLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgICAvKiBhdHRyaWJ1dGU9ICovIHVuZGVmaW5lZCxcbiAgICAgICAgc3RhdGVPYmouc3RhdGUsXG4gICAgICApKS5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdCAhPT0gbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHNob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZXh0cmEubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICEhc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZDtcbiAgfVxuXG4gIGhhc0V4dHJhKGV4dHJhKSB7XG4gICAgcmV0dXJuIGV4dHJhLmxlbmd0aCA+IDA7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEN1aUJhc2VFbGVtZW50O1xuIiwiaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBEeW5hbWljRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGVsZW1lbnROYW1lOiBTdHJpbmcsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpJyxcbiAgICBdO1xuICB9XG5cbiAgb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpIHtcbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgZWxlbWVudE5hbWUgPyBlbGVtZW50TmFtZS50b1VwcGVyQ2FzZSgpIDogJ0RJVicsXG4gICAgICB7IGhhc3MsIHN0YXRlT2JqLCBpbkRpYWxvZyB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLWVsZW1lbnQnLCBEeW5hbWljRWxlbWVudCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuXG5pbXBvcnQgJy4vZHluYW1pYy1lbGVtZW50LmpzJztcbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG5jdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnc3RhdGUtY2FyZC1kaXNwbGF5JykudGhlbigoKSA9PiB7XG4gIC8qKlxuICAgKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICAgKi9cbiAgY2xhc3MgRHluYW1pY1dpdGhFeHRyYSBleHRlbmRzIGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtY2FyZC1kaXNwbGF5Jykge1xuICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2wtd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAtNHB4IC0xNnB4IC00cHggMDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1zdGF0ZS1sYWJlbC1iYWRnZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBkeW5hbWljLWVsZW1lbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgICNvdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgI2xvY2sge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICAgICAgI2xvY2suaGEtY292ZXItY29udHJvbHMge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuZXh0cmEge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgICAgIC0taGEtbGFiZWwtYmFkZ2Utc2l6ZTogMzZweDtcbiAgICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcyQ9J1tbZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpXV0gaG9yaXpvbnRhbCBsYXlvdXQnPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbZXh0cmFPYmpWaXNpYmxlXV0nPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCdcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9J1tbZXh0cmFPYmpdXSdcbiAgICAgICAgICAgICAgICAgICAgb24tZG9tLWNoYW5nZT0nZXh0cmFEb21DaGFuZ2VkJz5cbiAgICAgICAgICAgIDxoYS1zdGF0ZS1sYWJlbC1iYWRnZSBoYXNzPSdbW2hhc3NdXScgc3RhdGU9J1tbaXRlbV1dJz48L2hhLXN0YXRlLWxhYmVsLWJhZGdlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkeW5hbWljLWVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGNsYXNzPSdmbGV4J1xuICAgICAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgICAgICAgZWxlbWVudC1uYW1lPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgICAgICA8L2R5bmFtaWMtZWxlbWVudD5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2lzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3ZlcmxheVwiIG9uLWNsaWNrPSdjbGlja0hhbmRsZXInPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2tdXSc+XG4gICAgICAgICAgICAgICAgICAgIDxpcm9uLWljb24gaWQ9XCJsb2NrXCIgY2xhc3MkPVwiW1tjb250cm9sRWxlbWVudF1dXCIgaWNvbj1cIm1kaTpsb2NrLW91dGxpbmVcIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0ZSc+W1tjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNzOiBPYmplY3QsXG4gICAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICAgIGV4dHJhT2JqOiB7XG4gICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIF9hdHRhY2hlZCknLFxuICAgICAgICB9LFxuICAgICAgICBfYXR0YWNoZWQ6IEJvb2xlYW4sXG4gICAgICAgIGV4dHJhT2JqVmlzaWJsZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZyknLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgYXR0YWNoZWQpIHtcbiAgICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZSB8fCAhYXR0YWNoZWQpIHJldHVybiBbXTtcbiAgICAgIGxldCBleHRyYUJhZGdlcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfYmFkZ2U7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFCYWRnZXMpKSB7XG4gICAgICAgIGV4dHJhQmFkZ2VzID0gW2V4dHJhQmFkZ2VzXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHRyYUJhZGdlcy5tYXAoKGV4dHJhQmFkZ2UpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmIChleHRyYUJhZGdlLmVudGl0eV9pZCAmJiBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0pIHtcbiAgICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0sIHRoaXMuaW5EaWFsb2csXG4gICAgICAgICAgICAvKiBhbGxvd0hpZGRlbj0gKi9mYWxzZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGV4dHJhQmFkZ2UuYXR0cmlidXRlICYmXG4gICAgICAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgIHN0YXRlOiBTdHJpbmcoc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0pLFxuICAgICAgICAgICAgZW50aXR5X2lkOiAnbm9uZS5ub25lJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgdW5pdF9vZl9tZWFzdXJlbWVudDogZXh0cmFCYWRnZS51bml0IH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCBibGFja2xpc3QgPSBleHRyYUJhZGdlLmJsYWNrbGlzdF9zdGF0ZXM7XG4gICAgICAgIGlmIChibGFja2xpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShibGFja2xpc3QpKSB7XG4gICAgICAgICAgICBibGFja2xpc3QgPSBbYmxhY2tsaXN0XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJsYWNrbGlzdC5zb21lKHYgPT4gUmVnRXhwKHYpLnRlc3QocmVzdWx0LnN0YXRlLnRvU3RyaW5nKCkpKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5fZW50aXR5RGlzcGxheSA9ICcnO1xuICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIHsgZnJpZW5kbHlfbmFtZTogJycgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KS5maWx0ZXIoZXh0cmFCYWRnZSA9PiBleHRyYUJhZGdlICE9IG51bGwpO1xuICAgIH1cblxuICAgIGNvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKSB7XG4gICAgICBpZiAoaW5EaWFsb2cgfHwgIWV4dHJhT2JqKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gZXh0cmFPYmoubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGV4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKSB7XG4gICAgICByZXR1cm4gZXh0cmFPYmpWaXNpYmxlID8gJ2V4dHJhJyA6ICcnO1xuICAgIH1cblxuICAgIF9zaG93Q29udHJvbChpbkRpYWxvZywgc3RhdGVPYmopIHtcbiAgICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gIXN0YXRlT2JqLmF0dHJpYnV0ZXMuaGlkZV9jb250cm9sO1xuICAgIH1cblxuICAgIGNvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopIHtcbiAgICAgIC8vIGhhTG9jYWxpemUgcmVtb3ZlZCBpbiAwLjYxXG4gICAgICByZXR1cm4gc3VwZXIuY29tcHV0ZVN0YXRlRGlzcGxheSh0aGlzLmhhTG9jYWxpemUgfHwgdGhpcy5sb2NhbGl6ZSwgc3RhdGVPYmopO1xuICAgIH1cblxuICAgIGlzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzIHx8XG4gICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jaztcbiAgICB9XG5cbiAgICBjbGlja0hhbmRsZXIoZSkge1xuICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgIGNvbnN0IGxvY2sgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI2xvY2snKTtcbiAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vcGVuLW91dGxpbmUnO1xuICAgICAgICBsb2NrLnN0eWxlLm9wYWNpdHkgPSAnMC4xJztcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICAgICAgICBpZiAobG9jaykge1xuICAgICAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vdXRsaW5lJztcbiAgICAgICAgICBsb2NrLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSwgNTAwMCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGFwcGx5VGhlbWVzKGhhc3MsIGVsZW1lbnQsIHN0YXRlT2JqKSB7XG4gICAgICBjb25zdCB0aGVtZU5hbWUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0JztcbiAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICBlbGVtZW50LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICAgIH1cblxuICAgIGV4dHJhRG9tQ2hhbmdlZCgpIHtcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpXG4gICAgICAgIC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgdGhpcy5hcHBseVRoZW1lcyh0aGlzLmhhc3MsIGVsZW0sIGVsZW0uc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLXdpdGgtZXh0cmEnLCBEeW5hbWljV2l0aEV4dHJhKTtcbn0pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBFdmVudHNNaXhpbiBmcm9tICcuLi9taXhpbnMvZXZlbnRzLW1peGluLmpzJztcbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhQ29uZmlnQ3VzdG9tVWkgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyLkVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+PC9zdHlsZT5cbiAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249J21kaTphcnJvdy1sZWZ0J1xuICAgICAgICAgICAgb24tY2xpY2s9J19iYWNrSGFuZGxlcidcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+Q3VzdG9tIFVJIHNldHRpbmdzPC9kaXY+XG4gICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPSdbW2lzV2lkZV1dJz5cbiAgICAgICAgPHBhcGVyLWNhcmQgaGVhZGluZz0nRGV2aWNlIG5hbWUnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XG4gICAgICAgICAgICBTZXQgZGV2aWNlIG5hbWUgc28gdGhhdCB5b3UgY2FuIHJlZmVyZW5jZSBpdCBpbiBwZXItZGV2aWNlIHNldHRpbmdzXG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9J05hbWUnXG4gICAgICAgICAgICAgIHZhbHVlPSd7e25hbWV9fSdcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BhcGVyLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICduYW1lQ2hhbmdlZCcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMubmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gIH1cblxuICBuYW1lQ2hhbmdlZChuYW1lKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLnNldE5hbWUobmFtZSk7XG4gIH1cblxuICBfYmFja0hhbmRsZXIoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIHRoaXMuZmlyZSgnbG9jYXRpb24tY2hhbmdlZCcpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLWNvbmZpZy1jdXN0b20tdWknLCBIYUNvbmZpZ0N1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFUaGVtZWRTbGlkZXIgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1oYS10aGVtZWQtc2xpZGVyLW1hcmdpbiwgaW5pdGlhbCk7XG4gICAgICB9XG4gICAgICAuZGlzYWJsZS1vZmYtd2hlbi1taW4ge1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1waW4tc3RhcnQtY29sb3I6ICB2YXIoLS1wYXBlci1zbGlkZXItcGluLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluLmlzLW9uIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgfVxuICAgICAgcGFwZXItc2xpZGVyIHtcbiAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICB3aWR0aDogdmFyKC0taGEtcGFwZXItc2xpZGVyLXdpZHRoLCAyMDBweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxwYXBlci1zbGlkZXJcbiAgICAgICAgIG1pbj0nW1tfdGhlbWVkTWluXV0nXG4gICAgICAgICBtYXg9J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWF4XCIsIG1heCldXSdcbiAgICAgICAgIHBpbj0nW1tfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJwaW5cIiwgcGluKV1dJ1xuICAgICAgICAgY2xhc3MkPSdbW2NvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgX3RoZW1lZE1pbildXScgdmFsdWU9J1tbdmFsdWVdXSdcbiAgICAgICAgIG9uLWNoYW5nZT0ndmFsdWVDaGFuZ2VkJz5cbiAgICA8L3BhcGVyLXNsaWRlcj5cbiAgICBgO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmRpc2FibGVPZmZXaGVuTWluID0gIXRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhpcy50aGVtZSwgJ29mZl93aGVuX21pbicsICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKTtcbiAgICB0aGlzLmNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhpcy50aGVtZSwgdGhpcy5kaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgfSxcbiAgICAgIHBpbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaXNPbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHRoZW1lOiBPYmplY3QsXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBfdGhlbWVkTWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJtaW5cIiwgbWluKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2NvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhlbWUsIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCknLFxuICAgIF07XG4gIH1cblxuICBjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpIHtcbiAgICB0aGlzLl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQgPSB0aGlzLl9jb21wdXRlQXR0cmlidXRlKFxuICAgICAgdGhlbWUsICdyZXBvcnRfd2hlbl9ub3RfY2hhbmdlZCcsICFkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICB9XG5cbiAgX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIGF0dHIsIGRlZikge1xuICAgIGlmICh0aGVtZSkge1xuICAgICAgaWYgKGF0dHIgaW4gdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoZW1lW2F0dHJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzKHRoZW1lLCBpc09uLCB0aGVtZWRNaW4pIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgaWYgKGlzT24pIHtcbiAgICAgIHJlc3VsdCArPSAnaXMtb24gJztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikgfHwgdGhlbWVkTWluID09PSAwKSB7XG4gICAgICAvLyBJZiBvZmZXaGVuTWluIGlzIGVuYWJsZWQgZG9uJ3QgY3VzdG9taXplLlxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7cmVzdWx0fWRpc2FibGUtb2ZmLXdoZW4tbWluYDtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChldikge1xuICAgIGlmICghdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkICYmIHRoaXMudmFsdWUgPT09IGV2LnRhcmdldC52YWx1ZSkge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGEtdGhlbWVkLXNsaWRlcicsIEhhVGhlbWVkU2xpZGVyKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyc7XG5pbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIuanMnO1xuaW1wb3J0IHN0YXRlQ2FyZFR5cGUgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUudHMnO1xuXG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcbmltcG9ydCAnLi9zdGF0ZS1jYXJkLXdpdGgtc2xpZGVyLmpzJztcbmltcG9ydCAnLi9zdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyLmpzJztcblxuY29uc3QgU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMgPSBbJ2NvbmZpZ3VyYXRvciddO1xuY29uc3QgRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUID0ge1xuICBsaWdodDogMSwgLy8gU1VQUE9SVF9CUklHSFRORVNTXG4gIGNvdmVyOiA0LCAvLyBTVVBQT1JUX1NFVF9QT1NJVElPTlxuICBjbGltYXRlOiAxLCAvLyBTVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRVxufTtcbmNvbnN0IFRZUEVfVE9fQ09OVFJPTCA9IHtcbiAgdG9nZ2xlOiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gIGRpc3BsYXk6ICcnLFxuICBjb3ZlcjogJ2hhLWNvdmVyLWNvbnRyb2xzJyxcbn07XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkQ3VzdG9tVWkgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKScsXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKGNvbnRhaW5lci50YWdOYW1lID09PSAnRElWJyAmJlxuICAgICAgICAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSB8fCBjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGlsZC1jYXJkJykpKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIC8vIFNpbmNlIHRoaXMgZG9lc24ndCBhY3R1YWxseSBjaGFuZ2UgdGhlIGJhY2tncm91bmQgLSBubyBuZWVkIHRvIGNsZWFyIGl0LlxuICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicsICd2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIGluaGVyaXQpJyk7XG5cbiAgICAgIC8vIFBvbHlmaWxsICd1cGRhdGVTdHlsZXMnLlxuICAgICAgaWYgKCFjb250YWluZXIudXBkYXRlU3R5bGVzKSB7XG4gICAgICAgIGNvbnRhaW5lci51cGRhdGVTdHlsZXMgPSAoc3R5bGVzKSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHN0eWxlc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5pbnB1dENoYW5nZWQodGhpcy5oYXNzLCB0aGlzLmluRGlhbG9nLCB0aGlzLnN0YXRlT2JqKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycsIHBhZGRpbmc6ICcnIH0pO1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciwgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCAnZGVmYXVsdCcpO1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGJhZGdlTW9kZShoYXNzLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gW107XG4gICAgaWYgKGRvbWFpbiA9PT0gJ2dyb3VwJykge1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tpZF07XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIElEICR7aWR9IGluIGdyb3VwICR7c3RhdGVPYmouZW50aXR5X2lkfWApO1xuICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QgfHxcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QuaW5jbHVkZXMoc3RhdGUuZW50aXR5X2lkKSkge1xuICAgICAgICAgIHN0YXRlcy5wdXNoKHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICAgIHRoaXMsIHN0YXRlLCBmYWxzZSAvKiBpbkRpYWxvZyAqLywgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcy5wdXNoKHN0YXRlT2JqKTtcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9O1xuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSkge1xuICAgICAgICAgIHBhcmFtcy5tYXJnaW4gPSAndmFyKC0taGEtYmFkZ2VzLWNhcmQtbWFyZ2luLCAwKSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgICdIQS1CQURHRVMtQ0FSRCcsXG4gICAgICB7IGhhc3MsIHN0YXRlcyB9KTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgd2lkdGg6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC13aWR0aCwgaW5pdGlhbCknLFxuICAgICAgICAndGV4dC1hbGlnbic6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC10ZXh0LWFsaWduLCBpbml0aWFsKScsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5sYXN0Q2hpbGQuc3R5bGUuZm9udFNpemUgPSAnODUlJztcblxuICAgIC8vIFNpbmNlIHRoaXMgdmFyaWFibGUgb25seSBhZmZlY3RzIGJhZGdlcyBtb2RlIC0gbm8gbmVlZCB0byBjbGVhbiBpdCB1cC5cbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KCctLWhhLXN0YXRlLWxhYmVsLWJhZGdlLW1hcmdpbi1ib3R0b20nLCAnMCcpO1xuICB9XG5cbiAgY2xlYW5CYWRnZVN0eWxlKCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoe1xuICAgICAgICBkaXNwbGF5OiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAndGV4dC1hbGlnbic6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycgfSk7XG4gIH1cblxuICBhcHBseVRoZW1lcyhoYXNzLCBtb2RpZmllZE9iaikge1xuICAgIGxldCB0aGVtZVRhcmdldCA9IHRoaXM7XG4gICAgbGV0IHRoZW1lTmFtZSA9ICdkZWZhdWx0JztcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGVtZVRhcmdldCA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgIHRoZW1lTmFtZSA9IG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWU7XG4gICAgfVxuICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgdGhlbWVUYXJnZXQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gIH1cblxuICBtYXliZUhpZGVFbnRpdHkobW9kaWZpZWRPYmopIHtcbiAgICBpZiAoIW1vZGlmaWVkT2JqKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcwJywgcGFkZGluZzogJzAnIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgb2JqLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmJlxuICAgICAgKERPTUFJTl9UT19TTElERVJfU1VQUE9SVFtkb21haW5dICYgb2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzKSAmJlxuICAgICAgb2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlICYmIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAhPT0gJ25vLXNsaWRlcic7XG4gIH1cblxuICBpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFzdGF0ZU9iaiB8fCAhaGFzcyB8fCAhdGhpcy5faXNBdHRhY2hlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gICAgY29uc3QgbW9kaWZpZWRPYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICB0aGlzLCBzdGF0ZU9iaiwgaW5EaWFsb2csIHRydWUgLyogYWxsb3dIaWRkZW4gKi8pO1xuXG4gICAgaWYgKHRoaXMubWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hcHBseVRoZW1lcyhoYXNzLCBtb2RpZmllZE9iaik7XG5cbiAgICBpZiAoIWluRGlhbG9nICYmIG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlID09PSAnYmFkZ2VzJykge1xuICAgICAgdGhpcy5iYWRnZU1vZGUoaGFzcywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBtb2RpZmllZE9iaiwgZG9tYWluKTtcbiAgICB9XG4gIH1cblxuICByZWd1bGFyTW9kZV8oaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqLCBkb21haW4pIHtcbiAgICB0aGlzLmNsZWFuQmFkZ2VTdHlsZSgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgaGFzcyxcbiAgICAgIHN0YXRlT2JqLFxuICAgICAgaW5EaWFsb2csXG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbFN0YXRlQ2FyZFR5cGUgPSBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKTtcbiAgICBsZXQgY3VzdG9tU3RhdGVDYXJkVHlwZTtcbiAgICBjb25zdCBzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlID0gc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk7XG5cbiAgICBpZiAoZG9tYWluID09PSAnbGlnaHQnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1lbnRpdHktdG9nZ2xlJyxcbiAgICAgICAgc2VydmljZU1pbjogJ3R1cm5fb2ZmJyxcbiAgICAgICAgc2VydmljZU1heDogJ3R1cm5fb24nLFxuICAgICAgICB2YWx1ZU5hbWU6ICdicmlnaHRuZXNzJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY292ZXInICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jb3Zlci1jb250cm9scycsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnY2xvc2VfY292ZXInLFxuICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X2NvdmVyX3Bvc2l0aW9uJyxcbiAgICAgICAgc2V0VmFsdWVOYW1lOiAncG9zaXRpb24nLFxuICAgICAgICB2YWx1ZU5hbWU6ICdjdXJyZW50X3Bvc2l0aW9uJyxcbiAgICAgICAgbmFtZU9uOiAnb3BlbicsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NsaW1hdGUnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jbGltYXRlLXN0YXRlJyxcbiAgICAgICAgbWluOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl90ZW1wIHx8IC0xMDAsXG4gICAgICAgIG1heDogc3RhdGVPYmouYXR0cmlidXRlcy5tYXhfdGVtcCB8fCAyMDAsXG4gICAgICAgIHNlcnZpY2VNaW46ICdzZXRfdGVtcGVyYXR1cmUnLFxuICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgdmFsdWVOYW1lOiAndGVtcGVyYXR1cmUnLFxuICAgICAgICBuYW1lT246ICcnLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkICYmXG4gICAgICAgICAgICAgICAhU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMuaW5jbHVkZXMob3JpZ2luYWxTdGF0ZUNhcmRUeXBlKSkge1xuICAgICAgcGFyYW1zLmluRGlhbG9nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSAnJztcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50O1xuICAgIH1cblxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAoc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSB8fCBjdXN0b21TdGF0ZUNhcmRUeXBlIHx8IGBTVEFURS1DQVJELSR7b3JpZ2luYWxTdGF0ZUNhcmRUeXBlfWApLnRvVXBwZXJDYXNlKCksXG4gICAgICBwYXJhbXMpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtY3VzdG9tLXVpJywgU3RhdGVDYXJkQ3VzdG9tVWkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBDdWlCYXNlRWxlbWVudCBmcm9tICcuL2N1aS1iYXNlLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuL2R5bmFtaWMtd2l0aC1leHRyYS5qcyc7XG5pbXBvcnQgJy4vaGEtdGhlbWVkLXNsaWRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkV2l0aFNsaWRlciBleHRlbmRzIEN1aUJhc2VFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1mbGV4LWZhY3RvcnNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuc2Vjb25kLWxpbmUsIC5zdGF0ZS1hbmQtdG9nZ2xlLCAuc3RhdGUtaW5mbyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWFuZC10b2dnbGUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zZWNvbmQtbGluZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmQtbGluZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgfVxuICAgICAgLnN0cmV0Y2ggLnNlY29uZC1saW5lLCAuc3RyZXRjaCBoYS10aGVtZWQtc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0taGEtcGFwZXItc2xpZGVyLXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc3RhdGUtaW5mbyB7XG4gICAgICAgIG1pbi13aWR0aDogaW5pdGlhbDtcbiAgICAgIH1cbiAgICAgIGhhLXRoZW1lZC1zbGlkZXIsIC50b3Atd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC50b3Atd3JhcHBlci5zdHJldGNoIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzJD0naG9yaXpvbnRhbCBsYXlvdXQgZmxleCB0b3Atd3JhcHBlciBbW19jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZyldXSc+XG4gICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQgZmxleC1hdXRvIHN0YXRlLWFuZC10b2dnbGUnPlxuICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8gZmxleC1hdXRvJ1xuICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICAgIGluLWRpYWxvZz0nW1tzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSldXSdcbiAgICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSdcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbYnJlYWtTbGlkZXJdXScgY2xhc3M9J2hpZGRlbic+XG4gICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzaG93U2xpZGVyXV0nIHJlc3RhbXA+XG4gICAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGZsZXgtYXV0byBlbmQtanVzdGlmaWVkIHNlY29uZC1saW5lJz5cbiAgICAgICAgICA8aGEtdGhlbWVkLXNsaWRlclxuICAgICAgICAgICAgaWQ9J3NsaWRlcidcbiAgICAgICAgICAgIG1heD1bW21heF1dXG4gICAgICAgICAgICBtaW49W1ttaW5dXVxuICAgICAgICAgICAgdGhlbWU9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5zbGlkZXJfdGhlbWVdXSdcbiAgICAgICAgICAgIGlzLW9uPSdbW2lzT24oc3RhdGVPYmosIG5hbWVPbildXSdcbiAgICAgICAgICAgIHZhbHVlPSd7e3NsaWRlclZhbHVlfX0nXG4gICAgICAgICAgICBkaXNhYmxlLW9mZi13aGVuLW1pbj0ne3tkaXNhYmxlT2ZmV2hlbk1pbn19J1xuICAgICAgICAgICAgb24tY2hhbmdlPSdzbGlkZXJDaGFuZ2VkJ1xuICAgICAgICAgICAgb24tY2xpY2s9J3N0b3BQcm9wYWdhdGlvbic+XG4gICAgICAgICAgPC9oYS10aGVtZWQtc2xpZGVyPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shYnJlYWtTbGlkZXJdXSc+XG4gICAgICAgICAgICA8ZHluYW1pYy13aXRoLWV4dHJhIGhhc3M9J1tbaGFzc11dJyBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXScgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz48L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9tYWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWF4OiBTdHJpbmcsXG4gICAgICB2YWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIHNldFZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgbmFtZU9uOiB7IHR5cGU6IFN0cmluZywgdmFsdWU6ICdvbicgfSxcbiAgICAgIG1pbjogeyB0eXBlOiBOdW1iZXIsIHZhbHVlOiAwIH0sXG4gICAgICBtYXg6IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMjU1IH0sXG5cbiAgICAgIHNsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IEJvb2xlYW4sXG4gICAgICBtb2RlOiBTdHJpbmcsXG4gICAgICBzdHJldGNoU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBicmVha1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaGlkZVNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbGluZVRvb0xvbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG1pbkxpbmVCcmVhazogTnVtYmVyLFxuICAgICAgbWF4TGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICBzaG93U2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fb25Jcm9uUmVzaXplID0gdGhpcy5fb25Jcm9uUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ3N0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpJyxcbiAgICBdO1xuICB9XG5cbiAgX3dhaXRGb3JMYXlvdXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgICBpZiAodGhpcy5fZnJhbWVJZCkgcmV0dXJuO1xuICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSBmYWxzZTtcbiAgICB0aGlzLl9mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl9mcmFtZUlkID0gbnVsbDtcbiAgICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSB0cnVlO1xuICAgICAgdGhpcy5fb25Jcm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0TW9kZSgpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBoaWRlU2xpZGVyOiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicgJiYgdGhpcy5saW5lVG9vTG9uZyxcbiAgICAgIGJyZWFrU2xpZGVyOlxuICAgICAgICAgICAodGhpcy5tb2RlID09PSAnYnJlYWstc2xpZGVyJyB8fCB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpICYmXG4gICAgICAgICAgIHRoaXMubGluZVRvb0xvbmcsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuc2hvd1NsaWRlcikge1xuICAgICAgb2JqLmJyZWFrU2xpZGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gIH1cblxuICBfb25Jcm9uUmVzaXplKCkge1xuICAgIGlmICghdGhpcy5yZWFkeVRvQ29tcHV0ZSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICduby1zbGlkZXInKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBoaWRlU2xpZGVyOiB0cnVlLFxuICAgICAgICBicmVha1NsaWRlcjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2QnJlYWtTbGlkZXIgPSB0aGlzLmJyZWFrU2xpZGVyO1xuICAgIGNvbnN0IHByZXZIaWRlU2xpZGVyID0gdGhpcy5oaWRlU2xpZGVyO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBsaW5lVG9vTG9uZzogZmFsc2UsXG4gICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy4kO1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA8PSB0aGlzLm1pbkxpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXJXaWR0aCA+PSB0aGlzLm1heExpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJldkhpZGVTbGlkZXIgJiYgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdW5oaWRlIHRoZSBzbGlkZXIgaW4gb3JkZXIgdG8gcmVjYWxjdWxhdGUgaGVpZ2h0LlxuICAgICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBzdGF0ZUhlaWdodCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcuc3RhdGUtaW5mbycpLmNsaWVudEhlaWdodDtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBjb250YWluZXJIZWlnaHQgPiBzdGF0ZUhlaWdodCAqIDEuNTtcbiAgICAgIGlmICh0aGlzLmxpbmVUb29Mb25nKSB7XG4gICAgICAgIHRoaXMubWluTGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKCFwcmV2QnJlYWtTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5tYXhMaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2V0TW9kZSgpO1xuICB9XG5cbiAgX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChtb2RlID09PSAnc2luZ2xlLWxpbmUnKSB7XG4gICAgICByZXR1cm4gJ25vd3JhcCc7XG4gICAgfVxuICAgIGlmIChzdHJldGNoU2xpZGVyICYmIGxpbmVUb29Mb25nKSB7XG4gICAgICByZXR1cm4gJ3N0cmV0Y2ggd3JhcCc7XG4gICAgfVxuICAgIHJldHVybiAnd3JhcCc7XG4gIH1cblxuICBfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpIHtcbiAgICBpZiAoaW5EaWFsb2cgfHwgaGlkZVNsaWRlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIGNvbnN0IHBhcmFtID0geyBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH07XG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybjtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXInKTtcbiAgICBpZiAoZXYudGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgIC8vIE5vIFNoYWRvdyBET00gLSB3ZSBoYXZlIGFjY2VzcyB0byBvcmlnaW5hbCB0YXJnZXQuXG4gICAgICAoeyB0YXJnZXQgfSA9IGV2KTtcbiAgICB9IGVsc2UgaWYgKGV2LnBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYucGF0aDtcbiAgICB9IGVsc2UgaWYgKGV2LmNvbXBvc2VkUGF0aCkge1xuICAgICAgW3RhcmdldF0gPSBldi5jb21wb3NlZFBhdGgoKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSAwIHx8ICh2YWx1ZSA8PSB0YXJnZXQubWluICYmICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKSkge1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNaW4sIHBhcmFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1bdGhpcy5zZXRWYWx1ZU5hbWUgfHwgdGhpcy52YWx1ZU5hbWVdID0gdmFsdWU7XG4gICAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZU1heCwgcGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBzbGlkZXJWYWx1ZTogdGhpcy5pc09uKHN0YXRlT2JqLCBuYW1lT24pID8gc3RhdGVPYmouYXR0cmlidXRlc1t2YWx1ZU5hbWVdIDogMCxcbiAgICB9O1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHtcbiAgICAgICAgbWluTGluZUJyZWFrOiAwLFxuICAgICAgICBtYXhMaW5lQnJlYWs6IDk5OSxcbiAgICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgICBtb2RlOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSxcbiAgICAgICAgc3RyZXRjaFNsaWRlcjogISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0cmV0Y2hfc2xpZGVyLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzT24oc3RhdGVPYmosIG5hbWVPbikge1xuICAgIHJldHVybiBzdGF0ZU9iaiAmJiAoIW5hbWVPbiB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gbmFtZU9uKTtcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbihldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInLCBTdGF0ZUNhcmRXaXRoU2xpZGVyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQnPlxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICBjbGFzcz0nc3RhdGUtaW5mbydcbiAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgc2Vjb25kYXJ5LWxpbmUkPSdbW2hhc0V4dHJhKGV4dHJhKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0JyBpdGVtcz0nW1tleHRyYV1dJz5cbiAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3N0YXRlLWluZm8+XG4gICAgICA8ZHluYW1pYy13aXRoLWV4dHJhXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPlxuICAgICAgPC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyJywgU3RhdGVDYXJkV2l0aG91dFNsaWRlcik7XG4iLCIvLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5leHBvcnQgZGVmYXVsdCAoc3VwZXJDbGFzcykgPT4ge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIEV2ZW50c01peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICAgKiAgIHBheWxvYWQuXG4gICAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgICovXG4gICAgZmlyZSh0eXBlLCBkZXRhaWwgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0eXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IG9wdGlvbnMuYnViYmxlcyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogQm9vbGVhbihvcHRpb25zLmNhbmNlbGFibGUpLFxuICAgICAgICBjb21wb3NlZDogb3B0aW9ucy5jb21wb3NlZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuY29tcG9zZWQsXG4gICAgICB9KTtcbiAgICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbDtcbiAgICAgIGNvbnN0IG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgdGhpcztcbiAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudHNNaXhpbjtcbn07XG4iLCJpbXBvcnQgaGFzc0F0dHJpYnV0ZXNVdGlsIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMnO1xuXG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgfHwge307XG5jb25zdCBTVVBQT1JURURfU0xJREVSX01PREVTID0gW1xuICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbl07XG5cbmNvbnN0IGN1c3RvbVVpQXR0cmlidXRlcyA9IHtcbiAgZ3JvdXA6IHVuZGVmaW5lZCxcbiAgZGV2aWNlOiB1bmRlZmluZWQsXG4gIHRlbXBsYXRlczogdW5kZWZpbmVkLFxuICBzdGF0ZTogdW5kZWZpbmVkLFxuICBfc3RhdGVEaXNwbGF5OiB1bmRlZmluZWQsXG4gIGNvbnRyb2xfZWxlbWVudDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBzdGF0ZV9jYXJkX21vZGU6IHtcbiAgICB0eXBlOiAnYXJyYXknLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGxpZ2h0OiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICBjb3ZlcjogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY2xpbWF0ZTogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgJyonOiBbJ2JhZGdlcyddLFxuICAgIH0sXG4gIH0sXG4gIHN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBiYWRnZXNfbGlzdDogeyB0eXBlOiAnanNvbicgfSxcbiAgc2hvd19sYXN0X2NoYW5nZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGhpZGVfY29udHJvbDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgZXh0cmFfZGF0YV90ZW1wbGF0ZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBleHRyYV9iYWRnZTogeyB0eXBlOiAnanNvbicgfSxcbiAgc3RyZXRjaF9zbGlkZXI6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIHNsaWRlcl90aGVtZTogeyB0eXBlOiAnanNvbicgfSxcbiAgdGhlbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgY29uZmlybV9jb250cm9sczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgY29uZmlybV9jb250cm9sc19zaG93X2xvY2s6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGhpZGVfaW5fZGVmYXVsdF92aWV3OiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBpY29uX2NvbG9yOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG59O1xud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPSBoYXNzQXR0cmlidXRlc1V0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUztcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBoYXNzQXR0cmlidXRlc1V0aWwuVU5LTk9XTl9UWVBFO1xuT2JqZWN0LmFzc2lnbih3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgY3VzdG9tVWlBdHRyaWJ1dGVzKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyc7XG5pbXBvcnQgZ2V0Vmlld0VudGl0aWVzIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXMudHMnO1xuXG5pbXBvcnQgJy4uL2VsZW1lbnRzL2hhLWNvbmZpZy1jdXN0b20tdWkuanMnO1xuaW1wb3J0IFZFUlNJT04gZnJvbSAnLi92ZXJzaW9uLmpzJztcbmltcG9ydCAnLi9oYXNzLWF0dHJpYnV0ZS11dGlsLmpzJztcblxud2luZG93LmN1c3RvbVVJID0gd2luZG93LmN1c3RvbVVJIHx8IHtcbiAgU1VQUE9SVEVEX1NMSURFUl9NT0RFUzogW1xuICAgICdzaW5nbGUtbGluZScsICdicmVhay1zbGlkZXInLCAnYnJlYWstc2xpZGVyLXRvZ2dsZScsICdoaWRlLXNsaWRlcicsICduby1zbGlkZXInLFxuICBdLFxuXG4gIGRvbUhvc3QoZWxlbSkge1xuICAgIGlmIChlbGVtID09PSBkb2N1bWVudCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW0uZ2V0Um9vdE5vZGUoKTtcbiAgICByZXR1cm4gKHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSA/IC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpLmhvc3QgOiByb290O1xuICB9LFxuXG4gIGxpZ2h0T3JTaGFkb3coZWxlbSwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZWxlbS5zaGFkb3dSb290ID9cbiAgICAgIGVsZW0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6XG4gICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9LFxuXG4gIGdldEVsZW1lbnRIaWVyYXJjaHkocm9vdCwgaGllcmFyY2h5KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsZW0gPSBoaWVyYXJjaHkuc2hpZnQoKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhyb290LCBlbGVtKSwgaGllcmFyY2h5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH0sXG5cbiAgZ2V0Q29udGV4dChlbGVtKSB7XG4gICAgaWYgKGVsZW0uX2NvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbS5fY29udGV4dCA9IFtdO1xuICAgICAgZm9yIChsZXQgZWxlbWVudCA9IChlbGVtLnRhZ05hbWUgPT09ICdIQS1FTlRJVElFUy1DQVJEJyA/IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW0pIDogZWxlbSk7XG4gICAgICAgIGVsZW1lbnQ7IGVsZW1lbnQgPSB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtZW50KSkge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgIGNhc2UgJ0hBLUVOVElUSUVTLUNBUkQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ3JvdXBFbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5ncm91cEVudGl0eSA9PT0gZmFsc2UgJiYgZWxlbWVudC5zdGF0ZXMgJiYgZWxlbWVudC5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChgZ3JvdXAuJHtjb21wdXRlU3RhdGVEb21haW4oZWxlbWVudC5zdGF0ZXNbMF0pfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnTU9SRS1JTkZPLUdST1VQJzpcbiAgICAgICAgICBjYXNlICdTVEFURS1DQVJELUNPTlRFTlQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuc3RhdGVPYmouZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hBLUNBUkRTJzpcbiAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3JykgfHwgJ2RlZmF1bHRfdmlldycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtLl9jb250ZXh0LnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0uX2NvbnRleHQ7XG4gIH0sXG5cbiAgZmluZE1hdGNoKGtleSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuIG51bGw7XG4gICAgaWYgKG9wdGlvbnNba2V5XSkgcmV0dXJuIGtleTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykuZmluZChvcHRpb24gPT4ga2V5Lm1hdGNoKGBeJHtvcHRpb259JGApKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChuYW1lLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZVttYXRjaF0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHdpbmRvdy5jdXN0b21VSS5nZXRDb250ZXh0KGVsZW0pO1xuICAgIGlmICghY29udGV4dCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICBjb250ZXh0LmZvckVhY2goKGMpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2goYywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhdHRyaWJ1dGVzLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIF9zZXRLZWVwKG9iaiwgdmFsdWUpIHtcbiAgICBpZiAob2JqLl9jdWlfa2VlcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSBvYmouX2N1aV9rZWVwICYmIHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIWF0dHJpYnV0ZXMudGVtcGxhdGVzKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosIHRydWUpO1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBuZXdBdHRyaWJ1dGVzID0ge307XG4gICAgbGV0IGhhc0dsb2JhbCA9IGZhbHNlO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcy50ZW1wbGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBhdHRyaWJ1dGVzLnRlbXBsYXRlc1trZXldO1xuICAgICAgaWYgKHRlbXBsYXRlLm1hdGNoKC9cXGIoZW50aXRpZXN8aGFzcylcXGIvKSkge1xuICAgICAgICBoYXNHbG9iYWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICB0ZW1wbGF0ZSwgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcyxcbiAgICAgICAgKHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXMgJiYgc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlc1trZXldKSB8fFxuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldLFxuICAgICAgICBzdGF0ZU9iai51bnRlbXBsYXRlZF9zdGF0ZSB8fCBzdGF0ZU9iai5zdGF0ZSk7XG4gICAgICAvLyBJbiBjYXNlIG9mIG51bGwgZG9uJ3Qgc2V0IHRoZSB2YWx1ZS5cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgbmV3QXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICBpZiAoa2V5ID09PSAnc3RhdGUnKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouc3RhdGUpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdfc3RhdGVEaXNwbGF5Jykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXkpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gYXR0cmlidXRlc1trZXldKSB7XG4gICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgIWhhc0dsb2JhbCk7XG4gICAgaWYgKCFoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzID09PSBhdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBXZSBhcmUgb3BlcmF0aW5nIG9uIHJlYWwgYXR0cmlidXRlcy4gUmVwbGFjZSB0aGVtLlxuICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgbmV3QXR0cmlidXRlcyk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdzdGF0ZScpKSB7XG4gICAgICAgIGlmIChuZXdBdHRyaWJ1dGVzLnN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnN0YXRlID0gU3RyaW5nKG5ld0F0dHJpYnV0ZXMuc3RhdGUpO1xuICAgICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZSA9IHN0YXRlT2JqLnN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdfc3RhdGVEaXNwbGF5JykpIHtcbiAgICAgICAgcmVzdWx0Ll9zdGF0ZURpc3BsYXkgPSBuZXdBdHRyaWJ1dGVzLl9zdGF0ZURpc3BsYXk7XG4gICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkgPSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5O1xuICAgICAgfVxuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHJlc3VsdCwgIWhhc0dsb2JhbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBPcGVyYXRpbmcgb24gY29udGV4dC1hd2FyZSBhdHRyaWJ1dGVzLiBSZXR1cm4gc2hhbGxvdyBjb3B5IG9mIG9iamVjdC5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5ld1Jlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgc3RhdGVPYmouYXR0cmlidXRlcyk7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaik7XG5cbiAgICBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZXMob2JqKSB7XG4gICAgICBpZiAoIW9iaikgcmV0dXJuO1xuICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICAgICAgaGFzcywgc3RhdGVzLCBuZXdSZXN1bHQsIGF0dHJpYnV0ZXMpO1xuICAgICAgICBoYXNDaGFuZ2VzIHw9IChyZXN1bHQgIT09IG5ld1Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZGV2aWNlKTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZ3JvdXApO1xuICAgIH1cblxuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgIGlmIChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKSByZXR1cm4gbmV3UmVzdWx0O1xuICAgIGlmIChoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVPYmo7XG4gIH0sXG5cbiAgYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eV9pZDogc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3RhdGU6IHN0YXRlT2JqLnN0YXRlLFxuICAgICAgYXR0cmlidXRlczogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcywgYXR0cmlidXRlcyksXG4gICAgICB1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZU9iai5sYXN0X2NoYW5nZWQsXG4gICAgfTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdChlbGVtLCBzdGF0ZU9iaiwgaW5EaWFsb2csIGFsbG93SGlkZGVuKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgbGV0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIG9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBlbGVtLmhhc3MsIGVsZW0uaGFzcy5zdGF0ZXMsIG9iaiwgb2JqLmF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKG9iaiAhPT0gc3RhdGVPYmogJiYgb2JqLmF0dHJpYnV0ZXMuaGlkZGVuICYmIGFsbG93SGlkZGVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmaXhHcm91cFRpdGxlcygpIHtcbiAgICBjb25zdCBob21lQXNzaXN0YW50TWFpbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nXSk7XG4gICAgaWYgKGhvbWVBc3Npc3RhbnRNYWluID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzLCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYUNhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaG9tZUFzc2lzdGFudE1haW4sIFtcbiAgICAgICdwYXJ0aWFsLWNhcmRzJyxcbiAgICAgICdoYS1jYXJkc1t2aWV3LXZpc2libGVdJ10pO1xuICAgIGlmIChoYUNhcmRzID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhQ2FyZHMsICcubWFpbicpIHx8IGhhQ2FyZHMuJC5tYWluO1xuICAgIGNvbnN0IGNhcmRzID0gbWFpbi5xdWVyeVNlbGVjdG9yQWxsKCdoYS1lbnRpdGllcy1jYXJkJyk7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKGNhcmQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgIGNhcmQsXG4gICAgICAgICAgY2FyZC5ncm91cEVudGl0eSxcbiAgICAgICAgICBmYWxzZSAvKiBpbkRpYWxvZyAqLyxcbiAgICAgICAgICBmYWxzZSAvKiBhbGxvd0hpZGRlbiAqLyk7XG4gICAgICAgIGlmIChvYmogIT09IGNhcmQuZ3JvdXBFbnRpdHkgJiYgb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSkge1xuICAgICAgICAgIGNvbnN0IG5hbWVFbGVtID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coY2FyZCwgJy5uYW1lJyk7XG4gICAgICAgICAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgY29udHJvbENvbHVtbnMoY29sdW1ucykge1xuICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtY2FyZHMnXSk7XG4gICAgaWYgKHBhcnRpYWxDYXJkcyA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMuYmluZChudWxsLCBjb2x1bW5zKSxcbiAgICAgICAgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZ1bmN0aW9uIHJlbmFtZWQgZnJvbSBoYW5kbGVXaW5kb3dDaGFuZ2UgdG8gX3VwZGF0ZUNvbHVtbnMgb24gMy43LjE4XG4gICAgY29uc3QgZiA9IHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UgfHwgcGFydGlhbENhcmRzLl91cGRhdGVDb2x1bW5zO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzLmZvckVhY2goKG1xbCkgPT4ge1xuICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKGYpO1xuICAgIH0pO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzID0gY29sdW1ucy5tYXAoKHdpZHRoKSA9PiB7XG4gICAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt3aWR0aH1weClgKTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihmKTtcbiAgICAgIHJldHVybiBtcWw7XG4gICAgfSk7XG4gICAgZigpO1xuICB9LFxuXG4gIHVzZUN1c3RvbWl6ZXIoKSB7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBjb25zdCBjdXN0b21pemVyID0gbWFpbi5oYXNzLnN0YXRlc1snY3VzdG9taXplci5jdXN0b21pemVyJ107XG4gICAgaWYgKCFjdXN0b21pemVyKSByZXR1cm47XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcykge1xuICAgICAgaWYgKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCAmJiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykge1xuICAgICAgICBjdXN0b21pemVyLmF0dHJpYnV0ZXMuaGlkZV9hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBhdHRyKSkge1xuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNbYXR0cl0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQ29uZmlnUGFuZWwoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY29uc3QgaGFQYW5lbENvbmZpZyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtcGFuZWwtcmVzb2x2ZXInLFxuICAgICAgJ2hhLXBhbmVsLWNvbmZpZyddKTtcbiAgICBpZiAoIWhhUGFuZWxDb25maWcpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkudXBkYXRlQ29uZmlnUGFuZWwsIDEwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhQ29uZmlnTmF2aWdhdGlvbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhhUGFuZWxDb25maWcsIFtcbiAgICAgICdoYS1jb25maWctZGFzaGJvYXJkJyxcbiAgICAgICdoYS1jb25maWctbmF2aWdhdGlvbiddKTtcbiAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uKSB7XG4gICAgICAvLyBIYUNvbmZpZ05hdmlnYXRpb24gc3RhcnRlZCB1c2luZyBsb2NhbGl6ZSBvbiAyMS4wMS4yMDE4XG4gICAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplICYmICFoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2gpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoID0gdHJ1ZTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQgPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQ7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkID0gKGhhc3MsIHBhZ2UpID0+XG4gICAgICAgICAgcGFnZSA9PT0gJ2N1c3RvbXVpJyB8fCBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZChoYXNzLCBwYWdlKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdDdXN0b20gVUknIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ1NldFVJIHR3ZWFrcycgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWhhQ29uZmlnTmF2aWdhdGlvbi5wYWdlcy5zb21lKGNvbmYgPT4gY29uZiA9PT0gJ2N1c3RvbXVpJyB8fCBjb25mLmRvbWFpbiA9PT0gJ2N1c3RvbXVpJykpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLnB1c2goJ3BhZ2VzJywgaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplID8gJ2N1c3RvbXVpJyA6IHtcbiAgICAgICAgICBkb21haW46ICdjdXN0b211aScsXG4gICAgICAgICAgY2FwdGlvbjogJ0N1c3RvbSBVSScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTZXQgVUkgdHdlYWtzLicsXG4gICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0SGFDb25maWdDdXN0b21VaSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoYS1jb25maWctY3VzdG9tLXVpJyk7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLmlzV2lkZSA9IGhhUGFuZWxDb25maWcuaXNXaWRlO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5zZXRBdHRyaWJ1dGUoJ3BhZ2UtbmFtZScsICdjdXN0b211aScpO1xuICAgICAgcmV0dXJuIGhhQ29uZmlnQ3VzdG9tVWk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlyb25QYWdlcyA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhUGFuZWxDb25maWcsICdpcm9uLXBhZ2VzJyk7XG4gICAgaWYgKGlyb25QYWdlcykge1xuICAgICAgaWYgKGlyb25QYWdlcy5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICBpcm9uUGFnZXMuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICAgIGlyb25QYWdlcy5hZGRFdmVudExpc3RlbmVyKCdpcm9uLWl0ZW1zLWNoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJykpIHtcbiAgICAgICAgICAgIGlyb25QYWdlcy5zZWxlY3QoJ2N1c3RvbXVpJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgcm9vdCA9IGhhUGFuZWxDb25maWcuc2hhZG93Um9vdCB8fCBoYVBhbmVsQ29uZmlnO1xuICAgICAgaWYgKHJvb3QubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZpc2libGUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpO1xuICAgICAgcm9vdC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSB2aXNpYmxlID8gJycgOiAnbm9uZSc7XG4gICAgfVxuICB9LFxuXG4gIGluc3RhbGxTdGF0ZXNIb29rKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdob21lLWFzc2lzdGFudCcpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaG9tZUFzc2lzdGFudCA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICAgIGlmICghaG9tZUFzc2lzdGFudCB8fCAhaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MpIHJldHVybjtcbiAgICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlID0gaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3M7XG4gICAgICBob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcyA9IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgY29uc3QgeyBoYXNzIH0gPSB0aGlzO1xuICAgICAgICBpZiAob2JqLnN0YXRlcykge1xuICAgICAgICAgIE9iamVjdC5rZXlzKG9iai5zdGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50aXR5ID0gb2JqLnN0YXRlc1trZXldO1xuICAgICAgICAgICAgaWYgKGVudGl0eS5fY3VpX2tlZXApIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IG5ld0VudGl0eSA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIG9iai5zdGF0ZXMsIGVudGl0eSk7XG4gICAgICAgICAgICBpZiAoaGFzcy5zdGF0ZXMgJiYgZW50aXR5ICE9PSBoYXNzLnN0YXRlc1trZXldKSB7XG4gICAgICAgICAgICAgIC8vIE5ldyBzdGF0ZSBhcnJpdmVkLiBQdXQgbW9kaWZpZWQgc3RhdGUgaW4uXG4gICAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50aXR5ICE9PSBuZXdFbnRpdHkpIHtcbiAgICAgICAgICAgICAgLy8gSXQncyB0aGUgc2FtZSBzdGF0ZSBidXQgY29udGVudHMgY2hhbmdlZCBkdWUgdG8gb3RoZXIgc3RhdGUgY2hhbmdlcy5cbiAgICAgICAgICAgICAgb2JqLnN0YXRlc1trZXldID0gbmV3RW50aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG9yaWdpbmFsVXBkYXRlLmNhbGwodGhpcywgb2JqKTtcbiAgICAgICAgaWYgKG9iai50aGVtZXMgJiYgaGFzcy5fdGhlbWVXYWl0ZXJzKSB7XG4gICAgICAgICAgaGFzcy5fdGhlbWVXYWl0ZXJzLmZvckVhY2god2FpdGVyID0+IHdhaXRlci5zdGF0ZUNoYW5nZWQod2FpdGVyLnN0YXRlKSk7XG4gICAgICAgICAgaGFzcy5fdGhlbWVXYWl0ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICAgIGlmIChtYWluLmhhc3MgJiYgbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgICBtYWluLl91cGRhdGVIYXNzKHsgc3RhdGVzOiBtYWluLmhhc3Muc3RhdGVzIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxQYXJ0aWFsQ2FyZHMoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ3BhcnRpYWwtY2FyZHMnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IGN1c3RvbUVsZW1lbnRzLmdldCgncGFydGlhbC1jYXJkcycpO1xuICAgICAgaWYgKCFwYXJ0aWFsQ2FyZHMgfHwgIXBhcnRpYWxDYXJkcy5wcm90b3R5cGUuX2RlZmF1bHRWaWV3RmlsdGVyKSByZXR1cm47XG4gICAgICBwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlciA9IChoYXNzLCBlbnRpdHlJZCkgPT4ge1xuICAgICAgICBpZiAoaGFzcy5zdGF0ZXNbZW50aXR5SWRdLmF0dHJpYnV0ZXMuaGlkZGVuKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVzID0ge307XG4gICAgICAgIE9iamVjdC52YWx1ZXMoaGFzcy5zdGF0ZXMpLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcyAmJiBlbnRpdHkuYXR0cmlidXRlcy5oaWRlX2luX2RlZmF1bHRfdmlldykge1xuICAgICAgICAgICAgY29uc3QgZXhjbHVkZUVudGl0eUlkID0gZW50aXR5LmVudGl0eV9pZDtcbiAgICAgICAgICAgIGlmIChleGNsdWRlc1tleGNsdWRlRW50aXR5SWRdKSByZXR1cm47XG4gICAgICAgICAgICBleGNsdWRlc1tleGNsdWRlRW50aXR5SWRdID0gZW50aXR5O1xuICAgICAgICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLnZpZXcpIHtcbiAgICAgICAgICAgICAgY29uc3Qgdmlld0VudGl0aWVzID0gZ2V0Vmlld0VudGl0aWVzKGhhc3Muc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2aWV3RW50aXRpZXMpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIGlkID0+IHZpZXdFbnRpdGllc1tpZF0uYXR0cmlidXRlcy5oaWRlX2luX2RlZmF1bHRfdmlldyAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICBleGNsdWRlc1tpZF0gPSB2aWV3RW50aXRpZXNbaWRdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhZXhjbHVkZXNbZW50aXR5SWRdO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgY2hhbmdpbmcgdGhlICdFeGVjdXRlJyAvICdBY3RpdmF0ZScgdGV4dCBvbiBzY3JpcHQvc2NlbmUgY2FyZHMuXG4gIGluc3RhbGxBY3Rpb25OYW1lKGVsZW1lbnROYW1lKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoZWxlbWVudE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qga2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoZWxlbWVudE5hbWUpO1xuICAgICAgaWYgKCFrbGFzcyB8fCAha2xhc3MucHJvdG90eXBlKSByZXR1cm47XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoa2xhc3MucHJvdG90eXBlLCAnbG9jYWxpemUnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICBmdW5jdGlvbiBjdXN0b21Mb2NhbGl6ZSh2KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZU9iaiAmJiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hY3Rpb25fbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZGF0YS5sb2NhbGl6ZSh2KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGN1c3RvbUxvY2FsaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQoKSB7fSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIEFsbG93cyB0aGVtaW5nIFwicmVndWxhclwiIHRvcCBiYWRnZXMuXG4gIGluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSgpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhhU3RhdGVMYWJlbEJhZGdlID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpO1xuICAgICAgaWYgKCFoYVN0YXRlTGFiZWxCYWRnZSB8fCAhaGFTdGF0ZUxhYmVsQmFkZ2UucHJvdG90eXBlLnN0YXRlQ2hhbmdlZCkgcmV0dXJuO1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIGhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQgPSBmdW5jdGlvbiB1cGRhdGUoc3RhdGVPYmopIHtcbiAgICAgICAgLy8gVE9ETzogQ2FsbCB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RcbiAgICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5oYXNzLnRoZW1lcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgPSB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzLnB1c2godGhpcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICB0aGlzLmhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sXG4gICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUgfHwgJ2RlZmF1bHQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRJbnRlcnZhbCkge1xuICAgICAgICAgIC8vIEFkZGVkIG9uIDE5LjEuMjAxOFxuICAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbChzdGF0ZU9iaik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbFN0YXRlQmFkZ2UoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ3N0YXRlLWJhZGdlJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZUJhZGdlID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1iYWRnZScpO1xuICAgICAgaWYgKCFzdGF0ZUJhZGdlIHx8ICFzdGF0ZUJhZGdlLnByb3RvdHlwZS5fdXBkYXRlSWNvbkFwcGVhcmFuY2UpIHJldHVybjtcbiAgICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBzdGF0ZUJhZGdlLnByb3RvdHlwZS5fdXBkYXRlSWNvbkFwcGVhcmFuY2U7XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlID0gZnVuY3Rpb24gY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2Uoc3RhdGVPYmopIHtcbiAgICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaWNvbl9jb2xvciAmJiAhc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSkge1xuICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiQuaWNvbi5zdHlsZSwge1xuICAgICAgICAgICAgY29sb3I6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuaWNvbl9jb2xvcixcbiAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZS5jYWxsKHRoaXMsIHN0YXRlT2JqKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsSGFBdHRyaWJ1dGVzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdoYS1hdHRyaWJ1dGVzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYUF0dHJpYnV0ZXMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWF0dHJpYnV0ZXMnKTtcbiAgICAgIGlmICghaGFBdHRyaWJ1dGVzIHx8ICFoYUF0dHJpYnV0ZXMucHJvdG90eXBlLmNvbXB1dGVGaWx0ZXJzQXJyYXkgfHxcbiAgICAgICAgICF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYUF0dHJpYnV0ZXMucHJvdG90eXBlLmNvbXB1dGVGaWx0ZXJzQXJyYXkgPVxuICAgICAgICBmdW5jdGlvbiBjdXN0b21Db21wdXRlRmlsdGVyc0FycmF5KGV4dHJhRmlsdGVycykge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykuY29uY2F0KFxuICAgICAgICAgICAgZXh0cmFGaWx0ZXJzID8gZXh0cmFGaWx0ZXJzLnNwbGl0KCcsJykgOiBbXSk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtZm9ybS1jdXN0b21pemUnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhhRm9ybUN1c3RvbWl6ZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtZm9ybS1jdXN0b21pemUnKTtcbiAgICAgIGlmICghaGFGb3JtQ3VzdG9taXplKSB7XG4gICAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFGb3JtQ3VzdG9taXplLCAxMDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAod2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lKSByZXR1cm47XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuaGFGb3JtQ3VzdG9taXplSW5pdERvbmUgPSB0cnVlO1xuXG4gICAgICBpZiAoIXdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCkgcmV0dXJuO1xuICAgICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUpIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSA9XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZShrZXksIHZhbHVlLCBzZWNvbmRhcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2tleV1cbiAgICAgICAgICAgICAgICB8fCB7IHR5cGU6IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbml0T3Blbk9iamVjdChrZXksIGNvbmZpZy50eXBlID09PSAnanNvbicgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZSwgc2Vjb25kYXJ5LCBjb25maWcpO1xuICAgICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucykge1xuICAgICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgICBoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zID1cbiAgICAgICAgICBmdW5jdGlvbiBjdXN0b21nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyhcbiAgICAgICAgICAgIGxvY2FsQXR0cmlidXRlcywgZ2xvYmFsQXR0cmlidXRlcywgZXhpc3RpbmdBdHRyaWJ1dGVzLCBuZXdBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBrbm93bktleXMgPVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmYgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZiAmJiAoIWNvbmYuZG9tYWlucyB8fCAhdGhpcy5lbnRpdHkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZi5kb21haW5zLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbih0aGlzLmVudGl0eSkpKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobG9jYWxBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhnbG9iYWxBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhleGlzdGluZ0F0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKG5ld0F0dHJpYnV0ZXMpKTtcbiAgICAgICAgICAgIHJldHVybiBrbm93bktleXMuc29ydCgpLmNvbmNhdCgnT3RoZXInKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxDbGFzc0hvb2tzKCkge1xuICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5jbGFzc0luaXREb25lID0gdHJ1ZTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFBhcnRpYWxDYXJkcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsU3RhdGVzSG9vaygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlQmFkZ2UoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhQXR0cmlidXRlcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQWN0aW9uTmFtZSgnc3RhdGUtY2FyZC1zY2VuZScpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQWN0aW9uTmFtZSgnc3RhdGUtY2FyZC1zY3JpcHQnKTtcbiAgfSxcblxuICBpbml0KCkge1xuICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuaW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbENsYXNzSG9va3MoKTtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGlmICghbWFpbi5oYXNzIHx8ICFtYWluLmhhc3Muc3RhdGVzKSB7XG4gICAgICAvLyBDb25uZWN0aW9uIHdhc24ndCBtYWRlIHlldC4gVHJ5IGluIDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmluaXQsIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5pdERvbmUgPSB0cnVlO1xuXG4gICAgd2luZG93LmN1c3RvbVVJLnVzZUN1c3RvbWl6ZXIoKTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS5ydW5Ib29rcygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2NhdGlvbi1jaGFuZ2VkJywgd2luZG93LnNldFRpbWVvdXQuYmluZChudWxsLCB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MsIDEwMCkpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBjb25zb2xlLmxvZyhgTG9hZGVkIEN1c3RvbVVJICR7VkVSU0lPTn1gKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBpZiAoIXdpbmRvdy5DVVNUT01fVUlfTElTVCkge1xuICAgICAgd2luZG93LkNVU1RPTV9VSV9MSVNUID0gW107XG4gICAgfVxuICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVC5wdXNoKHtcbiAgICAgIG5hbWU6ICdDdXN0b21VSScsXG4gICAgICB2ZXJzaW9uOiBWRVJTSU9OLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZHJleS1naXQvaG9tZS1hc3Npc3RhbnQtY3VzdG9tLXVpJyxcbiAgICB9KTtcbiAgfSxcblxuICBydW5Ib29rcygpIHtcbiAgICB3aW5kb3cuY3VzdG9tVUkuZml4R3JvdXBUaXRsZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkudXBkYXRlQ29uZmlnUGFuZWwoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSgpO1xuICB9LFxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGEtZGV2aWNlLW5hbWUnKSB8fCAnJztcbiAgfSxcblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hhLWRldmljZS1uYW1lJywgbmFtZSB8fCAnJyk7XG4gIH0sXG5cbiAgY29tcHV0ZVRlbXBsYXRlKHRlbXBsYXRlLCBoYXNzLCBlbnRpdGllcywgZW50aXR5LCBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUsIHN0YXRlKSB7XG4gICAgY29uc3QgZnVuY3Rpb25Cb2R5ID0gKHRlbXBsYXRlLmluZGV4T2YoJ3JldHVybicpID49IDApID8gdGVtcGxhdGUgOiBgcmV0dXJuIFxcYCR7dGVtcGxhdGV9XFxgO2A7XG4gICAgdHJ5IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jICovXG4gICAgICBjb25zdCBmdW5jID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnaGFzcycsICdlbnRpdGllcycsICdlbnRpdHknLCAnYXR0cmlidXRlcycsICdhdHRyaWJ1dGUnLCAnc3RhdGUnLCBmdW5jdGlvbkJvZHkpO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgcmV0dXJuIGZ1bmMoaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgaWYgKChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHx8IGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9IGluIHRlbXBsYXRlICR7ZnVuY3Rpb25Cb2R5fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH0sXG59O1xud2luZG93LmN1c3RvbVVJLmluaXQoKTtcbiIsImV4cG9ydCBkZWZhdWx0ICcyMDE5MDExMyc7XG4iXSwic291cmNlUm9vdCI6IiJ9