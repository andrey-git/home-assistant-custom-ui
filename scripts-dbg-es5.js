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
var DEFAULT_DOMAIN_ICON = "hass:bookmark";
/** Panel to show when no panel is picked. */

var DEFAULT_PANEL = "states";
/** Domains that have a state card. */

var DOMAINS_WITH_CARD = ["climate", "cover", "configurator", "input_select", "input_number", "input_text", "lock", "media_player", "scene", "script", "timer", "vacuum", "water_heater", "weblink"];
/** Domains with separate more info dialog. */

var DOMAINS_WITH_MORE_INFO = ["alarm_control_panel", "automation", "camera", "climate", "configurator", "cover", "fan", "group", "history_graph", "input_datetime", "light", "lock", "media_player", "script", "sun", "updater", "vacuum", "water_heater", "weather"];
/** Domains that show no more info dialog. */

var DOMAINS_HIDE_MORE_INFO = ["input_number", "input_select", "input_text", "scene", "weblink"];
/** Domains that should have the history hidden in the more info dialog. */

var DOMAINS_MORE_INFO_NO_HISTORY = ["camera", "configurator", "history_graph", "scene"];
/** States that we consider "off". */

var STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Lovelace. */

var DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch"]);
/** Temperature units. */

var UNIT_C = "°C";
var UNIT_F = "°F";
/** Entity ID of the default view. */

var DEFAULT_VIEW_ENTITY_ID = "group.default_view";

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
function applyThemesOnElement(element, themes, localTheme) {
  var updateMeta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!element._themes) {
    element._themes = {};
  }

  var themeName = themes.default_theme;

  if (localTheme === "default" || localTheme && themes.themes[localTheme]) {
    themeName = localTheme;
  }

  var styles = Object.assign({}, element._themes);

  if (themeName !== "default") {
    var theme = themes.themes[themeName];
    Object.keys(theme).forEach(function (key) {
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
  var meta = document.querySelector("meta[name=theme-color]");

  if (meta) {
    if (!meta.hasAttribute("default-content")) {
      meta.setAttribute("default-content", meta.getAttribute("content"));
    }

    var themeColor = styles["--primary-color"] || meta.getAttribute("default-content");
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
  var rootEl = root;
  var customEl;

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
    Object.keys(attributes).forEach(function (key) {
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
  var services = hass.services[domain];

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
  var domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);

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
  var result = {};
  group.attributes.entity_id.forEach(function (entityId) {
    var entity = entities[entityId];

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
  var viewEntities = {};
  view.attributes.entity_id.forEach(function (entityId) {
    var entity = entities[entityId];

    if (entity && !entity.attributes.hidden) {
      viewEntities[entity.entity_id] = entity;

      if (Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entity.entity_id) === "group") {
        var groupEntities = Object(_get_group_entities__WEBPACK_IMPORTED_MODULE_1__["default"])(entities, entity);
        Object.keys(groupEntities).forEach(function (grEntityId) {
          var grEntity = groupEntities[grEntityId];

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

  var domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);

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
var supportsFeature = function supportsFeature(stateObj, feature) {
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
var hassAttributeUtil = {};
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var LiteralString =
/*#__PURE__*/
function () {
  function LiteralString(string) {
    _classCallCheck(this, LiteralString);

    /** @type {string} */
    this.value = string.toString();
  }
  /**
   * @return {string} LiteralString string value
   */


  _createClass(LiteralString, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }]);

  return LiteralString;
}();
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
    throw new Error("non-literal value passed to Polymer's htmlLiteral function: ".concat(value));
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
    throw new Error("non-template value passed to Polymer's html function: ".concat(value));
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


var html = function html(strings) {
  var template =
  /** @type {!HTMLTemplateElement} */
  document.createElement('template');

  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  template.innerHTML = values.reduce(function (acc, v, idx) {
    return acc + htmlValue(v) + strings[idx + 1];
  }, strings[0]);
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

var htmlLiteral = function htmlLiteral(strings) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return new LiteralString(values.reduce(function (acc, v, idx) {
    return acc + literalValue(v) + strings[idx + 1];
  }, strings[0]));
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * @extends HTMLElement
 */

var CuiBaseElement =
/*#__PURE__*/
function (_Polymer$Element) {
  _inherits(CuiBaseElement, _Polymer$Element);

  function CuiBaseElement() {
    _classCallCheck(this, CuiBaseElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(CuiBaseElement).apply(this, arguments));
  }

  _createClass(CuiBaseElement, [{
    key: "computeExtra",
    value: function computeExtra(hass, stateObj) {
      var extras = stateObj.attributes.extra_data_template;

      if (extras) {
        if (!Array.isArray(extras)) {
          extras = [extras];
        }

        return extras.map(function (extra) {
          return window.customUI.computeTemplate(extra, hass, hass.states, stateObj, stateObj.attributes,
          /* attribute= */
          undefined, stateObj.state);
        }).filter(function (result) {
          return result !== null;
        });
      }

      return [];
    }
  }, {
    key: "showLastChanged",
    value: function showLastChanged(stateObj, inDialog, extra) {
      if (inDialog) return true;
      if (extra.length) return false;
      return !!stateObj.attributes.show_last_changed;
    }
  }, {
    key: "hasExtra",
    value: function hasExtra(extra) {
      return extra.length > 0;
    }
  }], [{
    key: "properties",
    get: function get() {
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
  }]);

  return CuiBaseElement;
}(Polymer.Element);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * @extends HTMLElement
 */

var DynamicElement =
/*#__PURE__*/
function (_Polymer$Element) {
  _inherits(DynamicElement, _Polymer$Element);

  function DynamicElement() {
    _classCallCheck(this, DynamicElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DynamicElement).apply(this, arguments));
  }

  _createClass(DynamicElement, [{
    key: "observerFunc",
    value: function observerFunc(hass, stateObj, elementName, inDialog) {
      Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, elementName ? elementName.toUpperCase() : 'DIV', {
        hass: hass,
        stateObj: stateObj,
        inDialog: inDialog
      });
    }
  }], [{
    key: "properties",
    get: function get() {
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
  }, {
    key: "observers",
    get: function get() {
      return ['observerFunc(hass, stateObj, elementName, inDialog)'];
    }
  }]);

  return DynamicElement;
}(Polymer.Element);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style is=\"custom-style\" include=\"iron-flex iron-flex-alignment iron-flex-factors\"></style>\n      <style>\n        :host {\n          display: inline-block;\n        }\n        .control-wrapper {\n          margin: -4px -16px -4px 0;\n          padding: 4px 16px;\n        }\n        ha-state-label-badge {\n          margin-left: 8px;\n        }\n        dynamic-element {\n          display: block;\n          text-align: right;\n        }\n        #overlay {\n          position: absolute;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          text-align: right;\n          z-index: 1;\n        }\n        #lock {\n          margin-top: 8px;\n          opacity: 0.3;\n          margin-right: 7px;\n        }\n        #lock.ha-cover-controls {\n          margin-right: 52px;\n          background-color: white;\n        }\n        .extra {\n          margin-bottom: -16px;\n          --ha-label-badge-size: 36px;\n          --ha-label-badge-font-size: 1.2em;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n          margin-left: 16px;\n          text-align: right;\n          line-height: 40px;\n        }\n      </style>\n      <div class$='[[extraClass(extraObjVisible)]] horizontal layout'>\n        <template is='dom-if' if='[[extraObjVisible]]'>\n          <template is='dom-repeat'\n                    items='[[extraObj]]'\n                    on-dom-change='extraDomChanged'>\n            <ha-state-label-badge hass='[[hass]]' state='[[item]]'></ha-state-label-badge>\n          </template>\n        </template>\n        <template is='dom-if' if='[[_showControl(inDialog, stateObj)]]'>\n          <template is='dom-if' if='[[controlElement]]'>\n            <div class=\"control-wrapper\">\n              <dynamic-element\n                  class='flex'\n                  state-obj=\"[[stateObj]]\"\n                  hass='[[hass]]'\n                  element-name='[[controlElement]]'>\n              </dynamic-element>\n              <template is='dom-if' if='[[isConfirmControls(stateObj)]]'>\n                <div id=\"overlay\" on-click='clickHandler'>\n                  <template is='dom-if' if='[[stateObj.attributes.confirm_controls_show_lock]]'>\n                    <iron-icon id=\"lock\" class$=\"[[controlElement]]\" icon=\"mdi:lock-outline\"></iron-icon>\n                  </template>\n                </div>\n              </template>\n            </div>\n          </template>\n          <template is='dom-if' if='[[!controlElement]]'>\n            <div class='state'>[[computeStateDisplay(stateObj)]]</div>\n          </template>\n        </template>\n      </div>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





customElements.whenDefined('state-card-display').then(function () {
  /**
   * @extends HTMLElement
   */
  var DynamicWithExtra =
  /*#__PURE__*/
  function (_customElements$get) {
    _inherits(DynamicWithExtra, _customElements$get);

    function DynamicWithExtra() {
      _classCallCheck(this, DynamicWithExtra);

      return _possibleConstructorReturn(this, _getPrototypeOf(DynamicWithExtra).apply(this, arguments));
    }

    _createClass(DynamicWithExtra, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(DynamicWithExtra.prototype), "connectedCallback", this).call(this);

        this._attached = true;
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._isAttached = false;

        _get(_getPrototypeOf(DynamicWithExtra.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      key: "computeExtra",
      value: function computeExtra(hass, stateObj, attached) {
        var _this = this;

        if (!stateObj.attributes.extra_badge || !attached) return [];
        var extraBadges = stateObj.attributes.extra_badge;

        if (!Array.isArray(extraBadges)) {
          extraBadges = [extraBadges];
        }

        return extraBadges.map(function (extraBadge) {
          var result = null;

          if (extraBadge.entity_id && hass.states[extraBadge.entity_id]) {
            result = Object.assign({}, window.customUI.maybeChangeObject(_this, hass.states[extraBadge.entity_id], _this.inDialog,
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
          var blacklist = extraBadge.blacklist_states;

          if (blacklist !== undefined) {
            if (!Array.isArray(blacklist)) {
              blacklist = [blacklist];
            }

            if (blacklist.some(function (v) {
              return RegExp(v).test(result.state.toString());
            })) {
              return null;
            }
          }

          result._entityDisplay = '';
          result.attributes = Object.assign({}, {
            friendly_name: ''
          });
          return result;
        }).filter(function (extraBadge) {
          return extraBadge != null;
        });
      }
    }, {
      key: "computeExtraVisible",
      value: function computeExtraVisible(extraObj, inDialog) {
        if (inDialog || !extraObj) return false;
        return extraObj.length !== 0;
      }
    }, {
      key: "extraClass",
      value: function extraClass(extraObjVisible) {
        return extraObjVisible ? 'extra' : '';
      }
    }, {
      key: "_showControl",
      value: function _showControl(inDialog, stateObj) {
        if (inDialog) return true;
        return !stateObj.attributes.hide_control;
      }
    }, {
      key: "computeStateDisplay",
      value: function computeStateDisplay(stateObj) {
        // haLocalize removed in 0.61
        return _get(_getPrototypeOf(DynamicWithExtra.prototype), "computeStateDisplay", this).call(this, this.haLocalize || this.localize, stateObj);
      }
    }, {
      key: "isConfirmControls",
      value: function isConfirmControls(stateObj) {
        return stateObj.attributes.confirm_controls || stateObj.attributes.confirm_controls_show_lock;
      }
    }, {
      key: "clickHandler",
      value: function clickHandler(e) {
        var _this2 = this;

        this.root.querySelector('#overlay').style.pointerEvents = 'none';
        var lock = this.root.querySelector('#lock');

        if (lock) {
          lock.icon = 'mdi:lock-open-outline';
          lock.style.opacity = '0.1';
        }

        window.setTimeout(function () {
          _this2.root.querySelector('#overlay').style.pointerEvents = '';

          if (lock) {
            lock.icon = 'mdi:lock-outline';
            lock.style.opacity = '';
          }
        }, 5000);
        e.stopPropagation();
      }
    }, {
      key: "applyThemes",
      value: function applyThemes(hass, element, stateObj) {
        var themeName = stateObj.attributes.theme || 'default';
        Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element, hass.themes || {
          default_theme: 'default',
          themes: {}
        }, themeName);
      }
    }, {
      key: "extraDomChanged",
      value: function extraDomChanged() {
        var _this3 = this;

        this.root.querySelectorAll('ha-state-label-badge').forEach(function (elem) {
          _this3.applyThemes(_this3.hass, elem, elem.state);
        });
      }
    }], [{
      key: "template",
      get: function get() {
        return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
      }
    }, {
      key: "properties",
      get: function get() {
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
    }]);

    return DynamicWithExtra;
  }(customElements.get('state-card-display'));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"ha-style\"></style>\n    <app-header-layout has-scrolling-region>\n      <app-header slot=\"header\" fixed>\n        <app-toolbar>\n          <paper-icon-button\n            icon='hass:arrow-left'\n            on-click='_backHandler'\n          ></paper-icon-button>\n          <div main-title>Custom UI settings</div>\n        </app-toolbar>\n      </app-header>\n\n      <ha-config-section is-wide='[[isWide]]'>\n        <paper-card heading='Device name'>\n          <div class='card-content'>\n            Set device name so that you can reference it in per-device settings\n            <paper-input\n              label='Name'\n              value='{{name}}'\n            ></paper-input>\n          </div>\n        </paper-card>\n      </ha-config-section>\n    </app-header-layout>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * @extends HTMLElement
 */

var HaConfigCustomUi =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaConfigCustomUi, _EventsMixin);

  function HaConfigCustomUi() {
    _classCallCheck(this, HaConfigCustomUi);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigCustomUi).apply(this, arguments));
  }

  _createClass(HaConfigCustomUi, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(HaConfigCustomUi.prototype), "ready", this).call(this);

      this.name = window.customUI.getName();
    }
  }, {
    key: "nameChanged",
    value: function nameChanged(name) {
      window.customUI.setName(name);
    }
  }, {
    key: "_backHandler",
    value: function _backHandler() {
      window.history.back();
      this.fire('location-changed');
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        isWide: Boolean,
        name: {
          type: String,
          observer: 'nameChanged'
        }
      };
    }
  }]);

  return HaConfigCustomUi;
}(Object(_mixins_events_mixin_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Polymer.Element));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        margin: var(--ha-themed-slider-margin, initial);\n      }\n      .disable-off-when-min {\n        --paper-slider-pin-start-color:  var(--paper-slider-pin-color);\n      }\n\n      .disable-off-when-min.is-on {\n        --paper-slider-knob-start-color: var(--paper-slider-knob-color);\n        --paper-slider-knob-start-border-color: var(--paper-slider-knob-color);\n      }\n      paper-slider {\n        margin: 4px 0;\n        max-width: 100%;\n        min-width: 100px;\n        width: var(--ha-paper-slider-width, 200px);\n      }\n    </style>\n\n    <paper-slider\n         min='[[_themedMin]]'\n         max='[[_computeAttribute(theme, \"max\", max)]]'\n         pin='[[_computeAttribute(theme, \"pin\", pin)]]'\n         class$='[[computeClass(theme, isOn, _themedMin)]]' value='[[value]]'\n         on-change='valueChanged'>\n    </paper-slider>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * @extends HTMLElement
 */

var HaThemedSlider =
/*#__PURE__*/
function (_Polymer$Element) {
  _inherits(HaThemedSlider, _Polymer$Element);

  function HaThemedSlider() {
    _classCallCheck(this, HaThemedSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaThemedSlider).apply(this, arguments));
  }

  _createClass(HaThemedSlider, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(HaThemedSlider.prototype), "ready", this).call(this);

      this.disableOffWhenMin = !this._computeAttribute(this.theme, 'off_when_min', !this.disableOffWhenMin);
      this.computeEnabledThemedReportWhenNotChanged(this.theme, this.disableReportWhenNotChanged);
    }
  }, {
    key: "computeEnabledThemedReportWhenNotChanged",
    value: function computeEnabledThemedReportWhenNotChanged(theme, disableReportWhenNotChanged) {
      this._enabledThemedReportWhenNotChanged = this._computeAttribute(theme, 'report_when_not_changed', !disableReportWhenNotChanged);
    }
  }, {
    key: "_computeAttribute",
    value: function _computeAttribute(theme, attr, def) {
      if (theme) {
        if (attr in theme) {
          return theme[attr];
        }
      }

      return def;
    }
  }, {
    key: "computeClass",
    value: function computeClass(theme, isOn, themedMin) {
      var result = '';

      if (isOn) {
        result += 'is-on ';
      }

      if (this._computeAttribute(theme, 'off_when_min', !this.disableOffWhenMin) || themedMin === 0) {
        // If offWhenMin is enabled don't customize.
        return '';
      }

      return "".concat(result, "disable-off-when-min");
    }
  }, {
    key: "valueChanged",
    value: function valueChanged(ev) {
      if (!this._enabledThemedReportWhenNotChanged && this.value === ev.target.value) {
        ev.stopPropagation();
        return;
      }

      this.value = ev.target.value;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }, {
    key: "observers",
    get: function get() {
      return ['computeEnabledThemedReportWhenNotChanged(theme, disableReportWhenNotChanged)'];
    }
  }]);

  return HaThemedSlider;
}(Polymer.Element);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var SHOW_LAST_CHANGED_BLACKLISTED_CARDS = ['configurator'];
var DOMAIN_TO_SLIDER_SUPPORT = {
  light: 1,
  // SUPPORT_BRIGHTNESS
  cover: 4,
  // SUPPORT_SET_POSITION
  climate: 1 // SUPPORT_TARGET_TEMPERATURE

};
var TYPE_TO_CONTROL = {
  toggle: 'ha-entity-toggle',
  display: '',
  cover: 'ha-cover-controls'
};
/**
 * @extends HTMLElement
 */

var StateCardCustomUi =
/*#__PURE__*/
function (_Polymer$Element) {
  _inherits(StateCardCustomUi, _Polymer$Element);

  function StateCardCustomUi() {
    _classCallCheck(this, StateCardCustomUi);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardCustomUi).apply(this, arguments));
  }

  _createClass(StateCardCustomUi, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(StateCardCustomUi.prototype), "connectedCallback", this).call(this);

      var container = this.parentNode.parentNode;

      if (container.tagName === 'DIV' && (container.classList.contains('state') || container.classList.contains('child-card'))) {
        this._container = container; // Since this doesn't actually change the background - no need to clear it.

        container.style.setProperty('background-color', 'var(--paper-card-background-color, inherit)'); // Polyfill 'updateStyles'.

        if (!container.updateStyles) {
          container.updateStyles = function (styles) {
            Object.keys(styles).forEach(function (key) {
              container.style.setProperty(key, styles[key]);
            });
          };
        }
      }

      this._isAttached = true;
      this.inputChanged(this.hass, this.inDialog, this.stateObj);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
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

      _get(_getPrototypeOf(StateCardCustomUi.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "badgeMode",
    value: function badgeMode(hass, stateObj, domain) {
      var _this = this;

      var states = [];

      if (domain === 'group') {
        stateObj.attributes.entity_id.forEach(function (id) {
          var state = hass.states[id];

          if (!state) {
            /* eslint-disable no-console */
            console.warn("Unknown ID ".concat(id, " in group ").concat(stateObj.entity_id));
            /* eslint-enable no-console */

            return;
          }

          if (!stateObj.attributes.badges_list || stateObj.attributes.badges_list.includes(state.entity_id)) {
            states.push(window.customUI.maybeChangeObject(_this, state, false
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
          var params = {
            display: 'inline-block'
          };

          if (this._container.classList.contains('state')) {
            params.margin = 'var(--ha-badges-card-margin, 0)';
          }

          this.updateStyles(params);
        }
      }

      Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'HA-BADGES-CARD', {
        hass: hass,
        states: states
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
  }, {
    key: "cleanBadgeStyle",
    value: function cleanBadgeStyle() {
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
  }, {
    key: "applyThemes",
    value: function applyThemes(hass, modifiedObj) {
      var themeTarget = this;
      var themeName = 'default';

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
  }, {
    key: "maybeHideEntity",
    value: function maybeHideEntity(modifiedObj) {
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
  }, {
    key: "sliderEligible_",
    value: function sliderEligible_(domain, obj, inDialog) {
      if (inDialog) return false;
      return DOMAIN_TO_SLIDER_SUPPORT[domain] && DOMAIN_TO_SLIDER_SUPPORT[domain] & obj.attributes.supported_features && obj.attributes.state_card_mode && obj.attributes.state_card_mode !== 'no-slider';
    }
  }, {
    key: "inputChanged",
    value: function inputChanged(hass, inDialog, stateObj) {
      if (!stateObj || !hass || !this._isAttached) return;
      var domain = Object(_home_assistant_polymer_src_common_entity_compute_state_domain_ts__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);
      var modifiedObj = window.customUI.maybeChangeObject(this, stateObj, inDialog, true
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
  }, {
    key: "regularMode_",
    value: function regularMode_(hass, inDialog, stateObj, domain) {
      this.cleanBadgeStyle();
      var params = {
        hass: hass,
        stateObj: stateObj,
        inDialog: inDialog
      };
      var originalStateCardType = Object(_home_assistant_polymer_src_common_entity_state_card_type_ts__WEBPACK_IMPORTED_MODULE_3__["default"])(hass, stateObj);
      var customStateCardType;
      var secondaryStateCardType = stateObj.attributes.state_card_custom_ui_secondary;

      if (domain === 'light' && this.sliderEligible_(domain, stateObj, inDialog)) {
        Object.assign(params, {
          controlElement: 'ha-entity-toggle',
          serviceMin: 'turn_off',
          serviceMax: 'turn_on',
          valueName: 'brightness',
          domain: domain
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
          domain: domain
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
          domain: domain
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

      Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (secondaryStateCardType || customStateCardType || "STATE-CARD-".concat(originalStateCardType)).toUpperCase(), params);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        inDialog: {
          type: Boolean,
          value: false
        },
        stateObj: Object
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['inputChanged(hass, inDialog, stateObj)'];
    }
  }]);

  return StateCardCustomUi;
}(Polymer.Element);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style is=\"custom-style\" include=\"iron-flex iron-flex-alignment iron-flex-factors\"></style>\n    <style>\n      #container {\n        position: relative;\n      }\n      .second-line, .state-and-toggle, .state-info {\n        max-width: 100%;\n      }\n      .nowrap .state-and-toggle {\n        overflow: hidden;\n        flex-grow: 0;\n      }\n      .nowrap .second-line {\n        overflow: hidden;\n      }\n\n      .second-line {\n        padding-top: 20px;\n        padding-bottom: 16px;\n        margin-top: -20px;\n        margin-bottom: -16px;\n      }\n      .stretch .second-line, .stretch ha-themed-slider {\n        width: 100%;\n        --ha-paper-slider-width: 100%;\n      }\n      .nowrap .state-info {\n        min-width: initial;\n      }\n      ha-themed-slider, .top-wrapper {\n        min-width: 100px;\n        max-width: 100%;\n      }\n      .top-wrapper.stretch {\n        display: block;\n      }\n\n      .hidden {\n        display: none;\n      }\n    </style>\n\n    <div id='container' class$='horizontal layout flex top-wrapper [[_computeWrapClass(mode, stretchSlider, lineTooLong, inDialog)]]'>\n      <div class='horizontal layout justified flex-auto state-and-toggle'>\n        <state-info\n            class='state-info flex-auto'\n            hass='[[hass]]'\n            state-obj='[[stateObj]]'\n            in-dialog='[[showLastChanged(stateObj, inDialog, extra)]]'\n            secondary-line$='[[hasExtra(extra)]]'\n        >\n          <template is='dom-repeat' items='[[extra]]'>\n            <div>[[item]]</div>\n          </template>\n        </state-info>\n        <template is='dom-if' if='[[breakSlider]]' class='hidden'>\n          <dynamic-with-extra hass='[[hass]]' state-obj='[[stateObj]]' control-element='[[controlElement]]' in-dialog='[[inDialog]]'></dynamic-with-extra>\n        </template>\n      </div>\n      <template is='dom-if' if='[[showSlider]]' restamp>\n        <div class='horizontal layout flex-auto end-justified second-line'>\n          <ha-themed-slider\n            id='slider'\n            max=[[max]]\n            min=[[min]]\n            theme='[[stateObj.attributes.slider_theme]]'\n            is-on='[[isOn(stateObj, nameOn)]]'\n            value='{{sliderValue}}'\n            disable-off-when-min='{{disableOffWhenMin}}'\n            on-change='sliderChanged'\n            on-click='stopPropagation'>\n          </ha-themed-slider>\n          <template is='dom-if' if='[[!breakSlider]]'>\n            <dynamic-with-extra hass='[[hass]]' state-obj='[[stateObj]]' control-element='[[controlElement]]' in-dialog='[[inDialog]]'></dynamic-with-extra>\n          </template>\n        </div>\n      </template>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @extends HTMLElement
 */

var StateCardWithSlider =
/*#__PURE__*/
function (_CuiBaseElement) {
  _inherits(StateCardWithSlider, _CuiBaseElement);

  function StateCardWithSlider() {
    _classCallCheck(this, StateCardWithSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardWithSlider).apply(this, arguments));
  }

  _createClass(StateCardWithSlider, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(StateCardWithSlider.prototype), "ready", this).call(this);

      this._onIronResize = this._onIronResize.bind(this);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(StateCardWithSlider.prototype), "connectedCallback", this).call(this);

      this._isConnected = true;
      window.addEventListener('resize', this._onIronResize);

      this._waitForLayout();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this._onIronResize);
      this._isConnected = false;

      _get(_getPrototypeOf(StateCardWithSlider.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "_waitForLayout",
    value: function _waitForLayout() {
      var _this = this;

      if (!this._isConnected) return;

      this._setMode();

      if (this._frameId) return;
      this.readyToCompute = false;
      this._frameId = window.requestAnimationFrame(function () {
        _this._frameId = null;
        _this.readyToCompute = true;

        _this._onIronResize();
      });
    }
  }, {
    key: "_setMode",
    value: function _setMode() {
      var obj = {
        hideSlider: this.mode === 'hide-slider' && this.lineTooLong,
        breakSlider: (this.mode === 'break-slider' || this.mode === 'hide-slider') && this.lineTooLong
      };

      if (!this.showSlider) {
        obj.breakSlider = true;
      }

      this.setProperties(obj);
    }
  }, {
    key: "_onIronResize",
    value: function _onIronResize() {
      if (!this.readyToCompute) return;

      if (this.mode === 'no-slider') {
        this.setProperties({
          hideSlider: true,
          breakSlider: true
        });
        return;
      }

      var prevBreakSlider = this.breakSlider;
      var prevHideSlider = this.hideSlider;
      this.setProperties({
        lineTooLong: false,
        hideSlider: false,
        breakSlider: false
      });
      var container = this.$.container;
      var containerWidth = container.clientWidth;
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

        var containerHeight = container.clientHeight;
        var stateHeight = this.root.querySelector('.state-info').clientHeight;
        this.lineTooLong = containerHeight > stateHeight * 1.5;

        if (this.lineTooLong) {
          this.minLineBreak = containerWidth;
        } else if (!prevBreakSlider) {
          this.maxLineBreak = containerWidth;
        }
      }

      this._setMode();
    }
  }, {
    key: "_computeWrapClass",
    value: function _computeWrapClass(mode, stretchSlider, lineTooLong, inDialog) {
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
  }, {
    key: "_showSlider",
    value: function _showSlider(inDialog, stateObj, hideSlider) {
      if (inDialog || hideSlider) {
        return false;
      }

      return true;
    }
  }, {
    key: "sliderChanged",
    value: function sliderChanged(ev) {
      var value = parseInt(ev.target.value, 10);
      var param = {
        entity_id: this.stateObj.entity_id
      };
      if (Number.isNaN(value)) return;
      var target = this.root.querySelector('#slider');

      if (ev.target !== target) {
        // No Shadow DOM - we have access to original target.
        target = ev.target;
      } else if (ev.path) {
        var _ev$path = _slicedToArray(ev.path, 1);

        target = _ev$path[0];
      } else if (ev.composedPath) {
        var _ev$composedPath = ev.composedPath();

        var _ev$composedPath2 = _slicedToArray(_ev$composedPath, 1);

        target = _ev$composedPath2[0];
      }

      if (value === 0 || value <= target.min && !this.disableOffWhenMin) {
        this.hass.callService(this.domain, this.serviceMin, param);
      } else {
        param[this.setValueName || this.valueName] = value;
        this.hass.callService(this.domain, this.serviceMax, param);
      }
    }
  }, {
    key: "stateObjChanged",
    value: function stateObjChanged(stateObj, nameOn, valueName) {
      var obj = {
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
  }, {
    key: "isOn",
    value: function isOn(stateObj, nameOn) {
      return stateObj && (!nameOn || stateObj.state === nameOn);
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation(ev) {
      ev.stopPropagation();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }, {
    key: "observers",
    get: function get() {
      return ['stateObjChanged(stateObj, nameOn, valueName)'];
    }
  }]);

  return StateCardWithSlider;
}(_cui_base_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style is=\"custom-style\" include=\"iron-flex iron-flex-alignment\"></style>\n    <style>\n      #container {\n        position: relative;\n      }\n    </style>\n\n    <div id='container' class='horizontal layout justified'>\n      <state-info\n          hass='[[hass]]'\n          class='state-info'\n          state-obj='[[stateObj]]'\n          in-dialog='[[showLastChanged(stateObj, inDialog, extra)]]'\n          secondary-line$='[[hasExtra(extra)]]'>\n        <template is='dom-repeat' items='[[extra]]'>\n          <div>[[item]]</div>\n        </template>\n      </state-info>\n      <dynamic-with-extra\n          hass='[[hass]]'\n          state-obj='[[stateObj]]'\n          control-element='[[controlElement]]'\n          in-dialog='[[inDialog]]'>\n      </dynamic-with-extra>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * @extends HTMLElement
 */

var StateCardWithoutSlider =
/*#__PURE__*/
function (_CuiBaseElement) {
  _inherits(StateCardWithoutSlider, _CuiBaseElement);

  function StateCardWithoutSlider() {
    _classCallCheck(this, StateCardWithoutSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardWithoutSlider).apply(this, arguments));
  }

  _createClass(StateCardWithoutSlider, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }]);

  return StateCardWithoutSlider;
}(_cui_base_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
/* harmony default export */ __webpack_exports__["default"] = (function (superClass) {
  /**
   * @extends HTMLElement
   */
  var EventsMixin =
  /*#__PURE__*/
  function (_superClass) {
    _inherits(EventsMixin, _superClass);

    function EventsMixin() {
      _classCallCheck(this, EventsMixin);

      return _possibleConstructorReturn(this, _getPrototypeOf(EventsMixin).apply(this, arguments));
    }

    _createClass(EventsMixin, [{
      key: "fire",

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
      value: function fire(type) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var event = new Event(type, {
          bubbles: options.bubbles === undefined ? true : options.bubbles,
          cancelable: Boolean(options.cancelable),
          composed: options.composed === undefined ? true : options.composed
        });
        event.detail = detail;
        var node = options.node || this;
        node.dispatchEvent(event);
        return event;
      }
    }]);

    return EventsMixin;
  }(superClass);

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
var SUPPORTED_SLIDER_MODES = ['single-line', 'break-slider', 'break-slider-toggle', 'hide-slider', 'no-slider'];
var customUiAttributes = {
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
  domHost: function domHost(elem) {
    if (elem === document) return null;
    var root = elem.getRootNode();
    return root instanceof DocumentFragment ?
    /** @type {ShadowRoot} */
    root.host : root;
  },
  lightOrShadow: function lightOrShadow(elem, selector) {
    return elem.shadowRoot ? elem.shadowRoot.querySelector(selector) : elem.querySelector(selector);
  },
  getElementHierarchy: function getElementHierarchy(root, hierarchy) {
    if (root === null) return null;
    var elem = hierarchy.shift();

    if (elem) {
      return window.customUI.getElementHierarchy(window.customUI.lightOrShadow(root, elem), hierarchy);
    }

    return root;
  },
  getContext: function getContext(elem) {
    if (elem._context === undefined) {
      elem._context = [];

      for (var element = elem.tagName === 'HA-ENTITIES-CARD' ? window.customUI.domHost(elem) : elem; element; element = window.customUI.domHost(element)) {
        switch (element.tagName) {
          case 'HA-ENTITIES-CARD':
            if (element.groupEntity) {
              elem._context.push(element.groupEntity.entity_id);
            } else if (element.groupEntity === false && element.states && element.states.length) {
              elem._context.push("group.".concat(Object(_home_assistant_polymer_src_common_entity_compute_state_domain_ts__WEBPACK_IMPORTED_MODULE_1__["default"])(element.states[0])));
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
  findMatch: function findMatch(key, options) {
    if (!options) return null;
    if (options[key]) return key;
    return Object.keys(options).find(function (option) {
      return key.match("^".concat(option, "$"));
    });
  },
  maybeChangeObjectByDevice: function maybeChangeObjectByDevice(stateObj) {
    var name = window.customUI.getName();
    if (!name) return stateObj;
    var match = this.findMatch(name, stateObj.attributes.device);
    if (!match) return stateObj;
    var attributes = Object.assign({}, stateObj.attributes.device[match]);
    if (!Object.keys(attributes).length) return stateObj;
    return window.customUI.applyAttributes(stateObj, attributes);
  },
  maybeChangeObjectByGroup: function maybeChangeObjectByGroup(elem, stateObj) {
    var _this = this;

    var context = window.customUI.getContext(elem);
    if (!context) return stateObj;

    if (!stateObj.attributes.group) {
      return stateObj;
    }

    var attributes = {};
    context.forEach(function (c) {
      var match = _this.findMatch(c, stateObj.attributes.group);

      if (stateObj.attributes.group[match]) {
        Object.assign(attributes, stateObj.attributes.group[match]);
      }
    });
    if (!Object.keys(attributes).length) return stateObj;
    return window.customUI.applyAttributes(stateObj, attributes);
  },
  _setKeep: function _setKeep(obj, value) {
    if (obj._cui_keep === undefined) {
      obj._cui_keep = value;
    } else {
      obj._cui_keep = obj._cui_keep && value;
    }
  },
  maybeApplyTemplateAttributes: function maybeApplyTemplateAttributes(hass, states, stateObj, attributes) {
    if (!attributes.templates) {
      window.customUI._setKeep(stateObj, true);

      return stateObj;
    }

    var newAttributes = {};
    var hasGlobal = false;
    var hasChanges = false;
    Object.keys(attributes.templates).forEach(function (key) {
      var template = attributes.templates[key];

      if (template.match(/\b(entities|hass)\b/)) {
        hasGlobal = true;
      }

      var value = window.customUI.computeTemplate(template, hass, states, stateObj, attributes, stateObj.untemplated_attributes && stateObj.untemplated_attributes[key] || attributes[key], stateObj.untemplated_state || stateObj.state); // In case of null don't set the value.

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
      var result = window.customUI.applyAttributes(stateObj, newAttributes);

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
  maybeApplyTemplates: function maybeApplyTemplates(hass, states, stateObj) {
    var newResult = window.customUI.maybeApplyTemplateAttributes(hass, states, stateObj, stateObj.attributes);
    var hasChanges = newResult !== stateObj;

    function checkAttributes(obj) {
      if (!obj) return;
      Object.values(obj).forEach(function (attributes) {
        var result = window.customUI.maybeApplyTemplateAttributes(hass, states, newResult, attributes);
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
  applyAttributes: function applyAttributes(stateObj, attributes) {
    return {
      entity_id: stateObj.entity_id,
      state: stateObj.state,
      attributes: Object.assign({}, stateObj.attributes, attributes),
      untemplated_attributes: stateObj.attributes,
      last_changed: stateObj.last_changed
    };
  },
  maybeChangeObject: function maybeChangeObject(elem, stateObj, inDialog, allowHidden) {
    if (inDialog) return stateObj;
    var obj = window.customUI.maybeChangeObjectByDevice(stateObj);
    obj = window.customUI.maybeChangeObjectByGroup(elem, obj);
    obj = window.customUI.maybeApplyTemplateAttributes(elem.hass, elem.hass.states, obj, obj.attributes);

    if (obj !== stateObj && obj.attributes.hidden && allowHidden) {
      return null;
    }

    return obj;
  },
  fixGroupTitles: function fixGroupTitles() {
    var homeAssistantMain = window.customUI.getElementHierarchy(document, ['home-assistant', 'home-assistant-main']);

    if (homeAssistantMain === null) {
      // DOM not ready. Wait 1 second.
      window.setTimeout(window.customUI.fixGroupTitles, 1000);
      return;
    }

    var haCards = window.customUI.getElementHierarchy(homeAssistantMain, ['partial-cards', 'ha-cards[view-visible]']);
    if (haCards === null) return;
    var main = window.customUI.lightOrShadow(haCards, '.main') || haCards.$.main;
    var cards = main.querySelectorAll('ha-entities-card');
    cards.forEach(function (card) {
      if (card.groupEntity) {
        var obj = window.customUI.maybeChangeObject(card, card.groupEntity, false
        /* inDialog */
        , false
        /* allowHidden */
        );

        if (obj !== card.groupEntity && obj.attributes.friendly_name) {
          var nameElem = window.customUI.lightOrShadow(card, '.name');
          nameElem.textContent = obj.attributes.friendly_name;
        }
      }
    });
  },
  controlColumns: function controlColumns(columns) {
    var partialCards = window.customUI.getElementHierarchy(document, ['home-assistant', 'home-assistant-main', 'partial-cards']);

    if (partialCards === null) {
      // DOM not ready. Wait 1 second.
      window.setTimeout(window.customUI.controlColumns.bind(null, columns), 1000);
      return;
    } // Function renamed from handleWindowChange to _updateColumns on 3.7.18


    var f = partialCards.handleWindowChange || partialCards._updateColumns;
    partialCards.mqls.forEach(function (mql) {
      mql.removeListener(f);
    });
    partialCards.mqls = columns.map(function (width) {
      var mql = window.matchMedia("(min-width: ".concat(width, "px)"));
      mql.addListener(f);
      return mql;
    });
    f();
  },
  useCustomizer: function useCustomizer() {
    var main = window.customUI.lightOrShadow(document, 'home-assistant');
    var customizer = main.hass.states['customizer.customizer'];
    if (!customizer) return;

    if (customizer.attributes.columns) {
      window.customUI.controlColumns(customizer.attributes.columns);
    }

    if (customizer.attributes.hide_attributes) {
      if (window.hassAttributeUtil && window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES) {
        customizer.attributes.hide_attributes.forEach(function (attr) {
          if (!Object.prototype.hasOwnProperty.call(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES, attr)) {
            window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[attr] = undefined;
          }
        });
      }
    }
  },
  updateConfigPanel: function updateConfigPanel() {
    if (!window.location.pathname.startsWith('/config')) return;
    var haPanelConfig = window.customUI.getElementHierarchy(document, ['home-assistant', 'home-assistant-main', 'partial-panel-resolver', 'ha-panel-config']);

    if (!haPanelConfig) {
      // DOM not ready. Wait 100ms.
      window.setTimeout(window.customUI.updateConfigPanel, 100);
      return;
    }

    var haConfigNavigation = window.customUI.getElementHierarchy(haPanelConfig, ['ha-config-dashboard', 'ha-config-navigation']);

    if (haConfigNavigation) {
      // HaConfigNavigation started using localize on 21.01.2018
      if (haConfigNavigation.localize && !haConfigNavigation.cuiPatch) {
        haConfigNavigation.cuiPatch = true;
        haConfigNavigation._originalComputeLoaded = haConfigNavigation._computeLoaded;
        haConfigNavigation._originalComputeCaption = haConfigNavigation._computeCaption;
        haConfigNavigation._originalComputeDescription = haConfigNavigation._computeDescription;

        haConfigNavigation._computeLoaded = function (hass, page) {
          return page === 'customui' || haConfigNavigation._originalComputeLoaded(hass, page);
        };

        haConfigNavigation._computeCaption = function (page, localize) {
          return page === 'customui' ? 'Custom UI' : haConfigNavigation._originalComputeCaption(page, localize);
        };

        haConfigNavigation._computeDescription = function (page, localize) {
          return page === 'customui' ? 'SetUI tweaks' : haConfigNavigation._originalComputeDescription(page, localize);
        };
      }

      if (!haConfigNavigation.pages.some(function (conf) {
        return conf === 'customui' || conf.domain === 'customui';
      })) {
        haConfigNavigation.push('pages', haConfigNavigation.localize ? 'customui' : {
          domain: 'customui',
          caption: 'Custom UI',
          description: 'Set UI tweaks.',
          loaded: true
        });
      }
    }

    var getHaConfigCustomUi = function getHaConfigCustomUi() {
      var haConfigCustomUi = document.createElement('ha-config-custom-ui');
      haConfigCustomUi.isWide = haPanelConfig.isWide;
      haConfigCustomUi.setAttribute('page-name', 'customui');
      return haConfigCustomUi;
    };

    var ironPages = window.customUI.lightOrShadow(haPanelConfig, 'iron-pages');

    if (ironPages) {
      if (ironPages.lastElementChild.tagName !== 'HA-CONFIG-CUSTOM-UI') {
        var haConfigCustomUi = getHaConfigCustomUi();
        ironPages.appendChild(haConfigCustomUi);
        ironPages.addEventListener('iron-items-changed', function () {
          if (window.location.pathname.startsWith('/config/customui')) {
            ironPages.select('customui');
          }
        });
      }
    } else if (haPanelConfig.shadowRoot) {
      var root = haPanelConfig.shadowRoot || haPanelConfig;

      if (root.lastElementChild.tagName !== 'HA-CONFIG-CUSTOM-UI') {
        var _haConfigCustomUi = getHaConfigCustomUi();

        root.appendChild(_haConfigCustomUi);
      }

      var visible = window.location.pathname.startsWith('/config/customui');
      root.lastElementChild.style.display = visible ? '' : 'none';
    } else if (haPanelConfig.routerOptions && haPanelConfig.routerOptions.routes) {
      if (!haPanelConfig.routerOptions.routes.customui) {
        haPanelConfig.routerOptions.routes.customui = {
          tag: 'ha-config-custom-ui',
          load: function load() {
            return Promise.resolve();
          }
        }; // CustomUI panel is the entrypoint, so we need to reload the page.

        if (window.location.pathname.startsWith('/config/customui')) {
          haPanelConfig.update(new Map([['route', undefined]]));
        }
      }
    }
  },
  installStatesHook: function installStatesHook() {
    customElements.whenDefined('home-assistant').then(function () {
      var homeAssistant = customElements.get('home-assistant');
      if (!homeAssistant || !homeAssistant.prototype._updateHass) return;
      var originalUpdate = homeAssistant.prototype._updateHass;

      homeAssistant.prototype._updateHass = function update(obj) {
        // Use named function to preserve 'this'.
        var hass = this.hass;

        if (obj.states) {
          Object.keys(obj.states).forEach(function (key) {
            var entity = obj.states[key];
            if (entity._cui_keep) return;
            var newEntity = window.customUI.maybeApplyTemplates(hass, obj.states, entity);

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
          hass._themeWaiters.forEach(function (waiter) {
            return waiter.stateChanged(waiter.state);
          });

          hass._themeWaiters = undefined;
        }
      };

      var main = window.customUI.lightOrShadow(document, 'home-assistant');

      if (main.hass && main.hass.states) {
        main._updateHass({
          states: main.hass.states
        });
      }
    });
  },
  installPartialCards: function installPartialCards() {
    customElements.whenDefined('partial-cards').then(function () {
      var partialCards = customElements.get('partial-cards');
      if (!partialCards || !partialCards.prototype._defaultViewFilter) return;

      partialCards.prototype._defaultViewFilter = function (hass, entityId) {
        if (hass.states[entityId].attributes.hidden) return false;
        var excludes = {};
        Object.values(hass.states).forEach(function (entity) {
          if (entity.attributes && entity.attributes.hide_in_default_view) {
            var excludeEntityId = entity.entity_id;
            if (excludes[excludeEntityId]) return;
            excludes[excludeEntityId] = entity;

            if (entity.attributes.view) {
              var viewEntities = Object(_home_assistant_polymer_src_common_entity_get_view_entities_ts__WEBPACK_IMPORTED_MODULE_2__["default"])(hass.states, entity);
              Object.keys(viewEntities).filter(function (id) {
                return viewEntities[id].attributes.hide_in_default_view !== false;
              }).forEach(function (id) {
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
  installActionName: function installActionName(elementName) {
    customElements.whenDefined(elementName).then(function () {
      var klass = customElements.get(elementName);
      if (!klass || !klass.prototype) return;
      Object.defineProperty(klass.prototype, 'localize', {
        get: function get() {
          function customLocalize(v) {
            if (this.stateObj && this.stateObj.attributes && this.stateObj.attributes.action_name) {
              return this.stateObj.attributes.action_name;
            }

            return this.__data.localize(v);
          }

          return customLocalize;
        },
        set: function set() {}
      });
    });
  },
  // Allows theming "regular" top badges.
  installHaStateLabelBadge: function installHaStateLabelBadge() {
    customElements.whenDefined('ha-state-label-badge').then(function () {
      var haStateLabelBadge = customElements.get('ha-state-label-badge');
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
  installStateBadge: function installStateBadge() {
    customElements.whenDefined('state-badge').then(function () {
      var stateBadge = customElements.get('state-badge');
      if (!stateBadge) return;

      if (stateBadge.prototype._updateIconAppearance) {
        var originalUpdateIconAppearance = stateBadge.prototype._updateIconAppearance; // Use named function to preserve 'this'.

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
        var originalUpdated = stateBadge.prototype.updated; // Use named function to preserve 'this'.

        stateBadge.prototype.updated = function customUpdated(changedProps) {
          if (!changedProps.has('stateObj')) return;
          var stateObj = this.stateObj;

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
  installHaAttributes: function installHaAttributes() {
    customElements.whenDefined('ha-attributes').then(function () {
      var haAttributes = customElements.get('ha-attributes');
      if (!haAttributes || !haAttributes.prototype.computeFiltersArray || !window.hassAttributeUtil) return; // Use named function to preserve 'this'.

      haAttributes.prototype.computeFiltersArray = function customComputeFiltersArray(extraFilters) {
        return Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).concat(extraFilters ? extraFilters.split(',') : []);
      };
    });
  },
  installHaFormCustomize: function installHaFormCustomize() {
    if (!window.location.pathname.startsWith('/config')) return;
    customElements.whenDefined('ha-form-customize').then(function () {
      var haFormCustomize = customElements.get('ha-form-customize');

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
          var config = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[key] || {
            type: window.hassAttributeUtil.UNKNOWN_TYPE
          };
          return this._initOpenObject(key, config.type === 'json' ? JSON.stringify(value) : value, secondary, config);
        };
      }

      if (haFormCustomize.prototype.getNewAttributesOptions) {
        // Use named function to preserve 'this'.
        haFormCustomize.prototype.getNewAttributesOptions = function customgetNewAttributesOptions(localAttributes, globalAttributes, existingAttributes, newAttributes) {
          var _this2 = this;

          var knownKeys = Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).filter(function (key) {
            var conf = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[key];
            return conf && (!conf.domains || !_this2.entity || conf.domains.includes(Object(_home_assistant_polymer_src_common_entity_compute_state_domain_ts__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2.entity)));
          }).filter(this.filterFromAttributes(localAttributes)).filter(this.filterFromAttributes(globalAttributes)).filter(this.filterFromAttributes(existingAttributes)).filter(this.filterFromAttributes(newAttributes));
          return knownKeys.sort().concat('Other');
        };
      }
    });
  },
  installClassHooks: function installClassHooks() {
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
  init: function init() {
    if (window.customUI.initDone) return;
    window.customUI.installClassHooks();
    var main = window.customUI.lightOrShadow(document, 'home-assistant');

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

    console.log("Loaded CustomUI ".concat(_version_js__WEBPACK_IMPORTED_MODULE_4__["default"]));
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
  runHooks: function runHooks() {
    window.customUI.fixGroupTitles();
    window.customUI.updateConfigPanel();
    window.customUI.installHaFormCustomize();
  },
  getName: function getName() {
    return window.localStorage.getItem('ha-device-name') || '';
  },
  setName: function setName(name) {
    window.localStorage.setItem('ha-device-name', name || '');
  },
  computeTemplate: function computeTemplate(template, hass, entities, entity, attributes, attribute, state) {
    var functionBody = template.indexOf('return') >= 0 ? template : "return `".concat(template, "`;");

    try {
      /* eslint-disable no-new-func */
      var func = new Function('hass', 'entities', 'entity', 'attributes', 'attribute', 'state', functionBody);
      /* eslint-enable no-new-func */

      return func(hass, entities, entity, attributes, attribute, state);
    } catch (e) {
      /* eslint-disable no-console */
      if (e instanceof SyntaxError || e instanceof ReferenceError) {
        console.warn("".concat(e.name, ": ").concat(e.message, " in template ").concat(functionBody));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUudHMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2N1aS1iYXNlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZHluYW1pYy13aXRoLWV4dHJhLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9oYS10aGVtZWQtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9zdGF0ZS1jYXJkLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGFzcy1hdHRyaWJ1dGUtdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZlcnNpb24uanMiXSwibmFtZXMiOlsiREVGQVVMVF9ET01BSU5fSUNPTiIsIkRFRkFVTFRfUEFORUwiLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfV0lUSF9NT1JFX0lORk8iLCJET01BSU5TX0hJREVfTU9SRV9JTkZPIiwiRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSIsIlNUQVRFU19PRkYiLCJET01BSU5TX1RPR0dMRSIsIlNldCIsIlVOSVRfQyIsIlVOSVRfRiIsIkRFRkFVTFRfVklFV19FTlRJVFlfSUQiLCJhcHBseVRoZW1lc09uRWxlbWVudCIsImVsZW1lbnQiLCJ0aGVtZXMiLCJsb2NhbFRoZW1lIiwidXBkYXRlTWV0YSIsIl90aGVtZXMiLCJ0aGVtZU5hbWUiLCJkZWZhdWx0X3RoZW1lIiwic3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGhlbWUiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInByZWZpeGVkS2V5IiwidXBkYXRlU3R5bGVzIiwid2luZG93IiwiU2hhZHlDU1MiLCJzdHlsZVN1YnRyZWUiLCJtZXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidGhlbWVDb2xvciIsImR5bmFtaWNDb250ZW50VXBkYXRlciIsInJvb3QiLCJuZXdFbGVtZW50VGFnIiwiYXR0cmlidXRlcyIsInJvb3RFbCIsImN1c3RvbUVsIiwibGFzdENoaWxkIiwidGFnTmFtZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInRvTG93ZXJDYXNlIiwic2V0UHJvcGVydGllcyIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsImNhblRvZ2dsZURvbWFpbiIsImhhc3MiLCJkb21haW4iLCJzZXJ2aWNlcyIsImNhblRvZ2dsZVN0YXRlIiwic3RhdGVPYmoiLCJzdGF0ZSIsImNvbXB1dGVEb21haW4iLCJlbnRpdHlJZCIsInN1YnN0ciIsImluZGV4T2YiLCJjb21wdXRlU3RhdGVEb21haW4iLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsInN1cHBvcnRzRmVhdHVyZSIsImZlYXR1cmUiLCJzdXBwb3J0ZWRfZmVhdHVyZXMiLCJoYXNzQXR0cmlidXRlVXRpbCIsIkRPTUFJTl9ERVZJQ0VfQ0xBU1MiLCJiaW5hcnlfc2Vuc29yIiwiY292ZXIiLCJzZW5zb3IiLCJVTktOT1dOX1RZUEUiLCJBRERfVFlQRSIsIlRZUEVfVE9fVEFHIiwic3RyaW5nIiwianNvbiIsImljb24iLCJib29sZWFuIiwiYXJyYXkiLCJMT0dJQ19TVEFURV9BVFRSSUJVVEVTIiwiZW50aXR5X3BpY3R1cmUiLCJ1bmRlZmluZWQiLCJmcmllbmRseV9uYW1lIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiZW11bGF0ZWRfaHVlIiwiZG9tYWlucyIsImVtdWxhdGVkX2h1ZV9uYW1lIiwiaGFhc2thX2hpZGRlbiIsImhhYXNrYV9uYW1lIiwiaG9tZWJyaWRnZV9oaWRkZW4iLCJob21lYnJpZGdlX25hbWUiLCJhdHRyaWJ1dGlvbiIsImN1c3RvbV91aV9tb3JlX2luZm8iLCJjdXN0b21fdWlfc3RhdGVfY2FyZCIsImRldmljZV9jbGFzcyIsIm9wdGlvbnMiLCJhc3N1bWVkX3N0YXRlIiwiaW5pdGlhbF9zdGF0ZSIsInVuaXRfb2ZfbWVhc3VyZW1lbnQiLCJKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5IiwicHJvcCIsIkxpdGVyYWxTdHJpbmciLCJ2YWx1ZSIsInRvU3RyaW5nIiwibGl0ZXJhbFZhbHVlIiwiRXJyb3IiLCJodG1sVmFsdWUiLCJIVE1MVGVtcGxhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaHRtbCIsInN0cmluZ3MiLCJ0ZW1wbGF0ZSIsInZhbHVlcyIsInJlZHVjZSIsImFjYyIsInYiLCJpZHgiLCJodG1sTGl0ZXJhbCIsIkN1aUJhc2VFbGVtZW50IiwiZXh0cmFzIiwiZXh0cmFfZGF0YV90ZW1wbGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImV4dHJhIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJzdGF0ZXMiLCJmaWx0ZXIiLCJpbkRpYWxvZyIsImxlbmd0aCIsInNob3dfbGFzdF9jaGFuZ2VkIiwiQm9vbGVhbiIsImNvbnRyb2xFbGVtZW50IiwiU3RyaW5nIiwiY29tcHV0ZWQiLCJQb2x5bWVyIiwiRWxlbWVudCIsIkR5bmFtaWNFbGVtZW50IiwiZWxlbWVudE5hbWUiLCJ0b1VwcGVyQ2FzZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwid2hlbkRlZmluZWQiLCJ0aGVuIiwiRHluYW1pY1dpdGhFeHRyYSIsIl9hdHRhY2hlZCIsIl9pc0F0dGFjaGVkIiwiYXR0YWNoZWQiLCJleHRyYV9iYWRnZSIsImV4dHJhQmFkZ2VzIiwiZXh0cmFCYWRnZSIsIm1heWJlQ2hhbmdlT2JqZWN0IiwiYXR0cmlidXRlIiwidW5pdCIsImJsYWNrbGlzdCIsImJsYWNrbGlzdF9zdGF0ZXMiLCJzb21lIiwiUmVnRXhwIiwidGVzdCIsIl9lbnRpdHlEaXNwbGF5IiwiZXh0cmFPYmoiLCJleHRyYU9ialZpc2libGUiLCJoaWRlX2NvbnRyb2wiLCJoYUxvY2FsaXplIiwibG9jYWxpemUiLCJjb25maXJtX2NvbnRyb2xzIiwiY29uZmlybV9jb250cm9sc19zaG93X2xvY2siLCJlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwibG9jayIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJhcHBseVRoZW1lcyIsImdldCIsIkhhQ29uZmlnQ3VzdG9tVWkiLCJuYW1lIiwiZ2V0TmFtZSIsInNldE5hbWUiLCJoaXN0b3J5IiwiYmFjayIsImZpcmUiLCJpc1dpZGUiLCJvYnNlcnZlciIsIkhhVGhlbWVkU2xpZGVyIiwiZGlzYWJsZU9mZldoZW5NaW4iLCJfY29tcHV0ZUF0dHJpYnV0ZSIsImNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJfZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiYXR0ciIsImRlZiIsImlzT24iLCJ0aGVtZWRNaW4iLCJldiIsInRhcmdldCIsIm1pbiIsIk51bWJlciIsIm1heCIsInBpbiIsIm5vdGlmeSIsIl90aGVtZWRNaW4iLCJTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUyIsIkRPTUFJTl9UT19TTElERVJfU1VQUE9SVCIsImxpZ2h0IiwiY2xpbWF0ZSIsIlRZUEVfVE9fQ09OVFJPTCIsInRvZ2dsZSIsImRpc3BsYXkiLCJTdGF0ZUNhcmRDdXN0b21VaSIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX2NvbnRhaW5lciIsInNldFByb3BlcnR5IiwiaW5wdXRDaGFuZ2VkIiwibWFyZ2luIiwicGFkZGluZyIsImlkIiwiY29uc29sZSIsIndhcm4iLCJiYWRnZXNfbGlzdCIsInB1c2giLCJwYXJhbXMiLCJ3aWR0aCIsImZvbnRTaXplIiwibW9kaWZpZWRPYmoiLCJ0aGVtZVRhcmdldCIsIm9iaiIsInN0YXRlX2NhcmRfbW9kZSIsIm1heWJlSGlkZUVudGl0eSIsImJhZGdlTW9kZSIsInJlZ3VsYXJNb2RlXyIsImNsZWFuQmFkZ2VTdHlsZSIsIm9yaWdpbmFsU3RhdGVDYXJkVHlwZSIsImN1c3RvbVN0YXRlQ2FyZFR5cGUiLCJzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIiwic3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5Iiwic2xpZGVyRWxpZ2libGVfIiwic2VydmljZU1pbiIsInNlcnZpY2VNYXgiLCJ2YWx1ZU5hbWUiLCJzZXRWYWx1ZU5hbWUiLCJuYW1lT24iLCJtaW5fdGVtcCIsIm1heF90ZW1wIiwiY29udHJvbF9lbGVtZW50IiwiU3RhdGVDYXJkV2l0aFNsaWRlciIsIl9vbklyb25SZXNpemUiLCJiaW5kIiwiX2lzQ29ubmVjdGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl93YWl0Rm9yTGF5b3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9zZXRNb2RlIiwiX2ZyYW1lSWQiLCJyZWFkeVRvQ29tcHV0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhpZGVTbGlkZXIiLCJtb2RlIiwibGluZVRvb0xvbmciLCJicmVha1NsaWRlciIsInNob3dTbGlkZXIiLCJwcmV2QnJlYWtTbGlkZXIiLCJwcmV2SGlkZVNsaWRlciIsIiQiLCJjb250YWluZXJXaWR0aCIsImNsaWVudFdpZHRoIiwibWluTGluZUJyZWFrIiwibWF4TGluZUJyZWFrIiwiY29udGFpbmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhdGVIZWlnaHQiLCJzdHJldGNoU2xpZGVyIiwicGFyc2VJbnQiLCJwYXJhbSIsImlzTmFOIiwicGF0aCIsImNvbXBvc2VkUGF0aCIsImNhbGxTZXJ2aWNlIiwic2xpZGVyVmFsdWUiLCJzdHJldGNoX3NsaWRlciIsIlN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIiLCJzdXBlckNsYXNzIiwiRXZlbnRzTWl4aW4iLCJkZXRhaWwiLCJldmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjb21wb3NlZCIsIm5vZGUiLCJkaXNwYXRjaEV2ZW50IiwiU1VQUE9SVEVEX1NMSURFUl9NT0RFUyIsImN1c3RvbVVpQXR0cmlidXRlcyIsImRldmljZSIsInRlbXBsYXRlcyIsIl9zdGF0ZURpc3BsYXkiLCJjb25jYXQiLCJzbGlkZXJfdGhlbWUiLCJoaWRlX2luX2RlZmF1bHRfdmlldyIsImljb25fY29sb3IiLCJkb21Ib3N0IiwiZ2V0Um9vdE5vZGUiLCJEb2N1bWVudEZyYWdtZW50IiwiaG9zdCIsImxpZ2h0T3JTaGFkb3ciLCJzZWxlY3RvciIsInNoYWRvd1Jvb3QiLCJnZXRFbGVtZW50SGllcmFyY2h5IiwiaGllcmFyY2h5Iiwic2hpZnQiLCJnZXRDb250ZXh0IiwiX2NvbnRleHQiLCJncm91cEVudGl0eSIsInJldmVyc2UiLCJmaW5kTWF0Y2giLCJmaW5kIiwib3B0aW9uIiwibWF0Y2giLCJtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlIiwiYXBwbHlBdHRyaWJ1dGVzIiwibWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwIiwiY29udGV4dCIsImMiLCJfc2V0S2VlcCIsIl9jdWlfa2VlcCIsIm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiaGFzR2xvYmFsIiwiaGFzQ2hhbmdlcyIsInVudGVtcGxhdGVkX2F0dHJpYnV0ZXMiLCJ1bnRlbXBsYXRlZF9zdGF0ZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInVudGVtcGxhdGVkX3N0YXRlRGlzcGxheSIsIm1heWJlQXBwbHlUZW1wbGF0ZXMiLCJuZXdSZXN1bHQiLCJjaGVja0F0dHJpYnV0ZXMiLCJsYXN0X2NoYW5nZWQiLCJhbGxvd0hpZGRlbiIsImZpeEdyb3VwVGl0bGVzIiwiaG9tZUFzc2lzdGFudE1haW4iLCJoYUNhcmRzIiwibWFpbiIsImNhcmRzIiwiY2FyZCIsIm5hbWVFbGVtIiwidGV4dENvbnRlbnQiLCJjb250cm9sQ29sdW1ucyIsImNvbHVtbnMiLCJwYXJ0aWFsQ2FyZHMiLCJmIiwiaGFuZGxlV2luZG93Q2hhbmdlIiwiX3VwZGF0ZUNvbHVtbnMiLCJtcWxzIiwibXFsIiwicmVtb3ZlTGlzdGVuZXIiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ1c2VDdXN0b21pemVyIiwiY3VzdG9taXplciIsImhpZGVfYXR0cmlidXRlcyIsInVwZGF0ZUNvbmZpZ1BhbmVsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJoYVBhbmVsQ29uZmlnIiwiaGFDb25maWdOYXZpZ2F0aW9uIiwiY3VpUGF0Y2giLCJfb3JpZ2luYWxDb21wdXRlTG9hZGVkIiwiX2NvbXB1dGVMb2FkZWQiLCJfb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiIsIl9jb21wdXRlQ2FwdGlvbiIsIl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiIsIl9jb21wdXRlRGVzY3JpcHRpb24iLCJwYWdlIiwicGFnZXMiLCJjb25mIiwiY2FwdGlvbiIsImxvYWRlZCIsImdldEhhQ29uZmlnQ3VzdG9tVWkiLCJoYUNvbmZpZ0N1c3RvbVVpIiwiaXJvblBhZ2VzIiwibGFzdEVsZW1lbnRDaGlsZCIsInNlbGVjdCIsInZpc2libGUiLCJyb3V0ZXJPcHRpb25zIiwicm91dGVzIiwiY3VzdG9tdWkiLCJ0YWciLCJsb2FkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1cGRhdGUiLCJNYXAiLCJpbnN0YWxsU3RhdGVzSG9vayIsImhvbWVBc3Npc3RhbnQiLCJfdXBkYXRlSGFzcyIsIm9yaWdpbmFsVXBkYXRlIiwibmV3RW50aXR5IiwiX3RoZW1lV2FpdGVycyIsIndhaXRlciIsInN0YXRlQ2hhbmdlZCIsImluc3RhbGxQYXJ0aWFsQ2FyZHMiLCJfZGVmYXVsdFZpZXdGaWx0ZXIiLCJleGNsdWRlcyIsImV4Y2x1ZGVFbnRpdHlJZCIsImluc3RhbGxBY3Rpb25OYW1lIiwia2xhc3MiLCJkZWZpbmVQcm9wZXJ0eSIsImN1c3RvbUxvY2FsaXplIiwiYWN0aW9uX25hbWUiLCJfX2RhdGEiLCJzZXQiLCJpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UiLCJoYVN0YXRlTGFiZWxCYWRnZSIsInN0YXJ0SW50ZXJ2YWwiLCJpbnN0YWxsU3RhdGVCYWRnZSIsInN0YXRlQmFkZ2UiLCJfdXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlIiwiY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb2xvciIsInVwZGF0ZWQiLCJvcmlnaW5hbFVwZGF0ZWQiLCJjdXN0b21VcGRhdGVkIiwiY2hhbmdlZFByb3BzIiwiaGFzIiwiX2ljb24iLCJpbnN0YWxsSGFBdHRyaWJ1dGVzIiwiaGFBdHRyaWJ1dGVzIiwiY29tcHV0ZUZpbHRlcnNBcnJheSIsImN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJleHRyYUZpbHRlcnMiLCJzcGxpdCIsImluc3RhbGxIYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemVJbml0RG9uZSIsIl9jb21wdXRlU2luZ2xlQXR0cmlidXRlIiwiY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsInNlY29uZGFyeSIsImNvbmZpZyIsIl9pbml0T3Blbk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwibG9jYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlcyIsImV4aXN0aW5nQXR0cmlidXRlcyIsImtub3duS2V5cyIsImZpbHRlckZyb21BdHRyaWJ1dGVzIiwic29ydCIsImluc3RhbGxDbGFzc0hvb2tzIiwiY2xhc3NJbml0RG9uZSIsImluaXQiLCJpbml0RG9uZSIsInJ1bkhvb2tzIiwibG9nIiwiQ1VTVE9NX1VJX0xJU1QiLCJ2ZXJzaW9uIiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jdGlvbkJvZHkiLCJmdW5jIiwiRnVuY3Rpb24iLCJTeW50YXhFcnJvciIsIlJlZmVyZW5jZUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FB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QUEyQlosQ0FBQyxDQUFDcVQsT0FBN0IsMEJBQW9ETCxZQUFwRDtBQUNBLGVBQU8sSUFBUDtBQUNEO0FBQ0Q7OztBQUNBLFlBQU1oVCxDQUFOO0FBQ0Q7QUFDRjtBQS9uQmtDLENBQXJDO0FBaW9CQTlKLE1BQU0sQ0FBQ21ILFFBQVAsQ0FBZ0JpVixJQUFoQixHOzs7Ozs7Ozs7Ozs7O0FDem9CQSwrREFBZSxVQUFmLEUiLCJmaWxlIjoic2NyaXB0cy1kYmctZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL3NjcmlwdHMuanNcIik7XG4iLCIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gXCJoYXNzOmJvb2ttYXJrXCI7XG5cbi8qKiBQYW5lbCB0byBzaG93IHdoZW4gbm8gcGFuZWwgaXMgcGlja2VkLiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFORUwgPSBcInN0YXRlc1wiO1xuXG4vKiogRG9tYWlucyB0aGF0IGhhdmUgYSBzdGF0ZSBjYXJkLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9DQVJEID0gW1xuICBcImNsaW1hdGVcIixcbiAgXCJjb3ZlclwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJsb2NrXCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwic2NlbmVcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJ0aW1lclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHdpdGggc2VwYXJhdGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfTU9SRV9JTkZPID0gW1xuICBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG4gIFwiY2FtZXJhXCIsXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImNvdmVyXCIsXG4gIFwiZmFuXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwiaW5wdXRfZGF0ZXRpbWVcIixcbiAgXCJsaWdodFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzdW5cIixcbiAgXCJ1cGRhdGVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VhdGhlclwiLFxuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG93IG5vIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19ISURFX01PUkVfSU5GTyA9IFtcbiAgXCJpbnB1dF9udW1iZXJcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwic2NlbmVcIixcbiAgXCJ3ZWJsaW5rXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3VsZCBoYXZlIHRoZSBoaXN0b3J5IGhpZGRlbiBpbiB0aGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZID0gW1xuICBcImNhbWVyYVwiLFxuICBcImNvbmZpZ3VyYXRvclwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJzY2VuZVwiLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcImNsb3NlZFwiLCBcImxvY2tlZFwiLCBcIm9mZlwiXTtcblxuLyoqIERvbWFpbnMgd2hlcmUgd2UgYWxsb3cgdG9nZ2xlIGluIExvdmVsYWNlLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfVE9HR0xFID0gbmV3IFNldChbXG4gIFwiZmFuXCIsXG4gIFwiaW5wdXRfYm9vbGVhblwiLFxuICBcImxpZ2h0XCIsXG4gIFwic3dpdGNoXCIsXG5dKTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9IFwiwrBDXCI7XG5leHBvcnQgY29uc3QgVU5JVF9GID0gXCLCsEZcIjtcblxuLyoqIEVudGl0eSBJRCBvZiB0aGUgZGVmYXVsdCB2aWV3LiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSBcImdyb3VwLmRlZmF1bHRfdmlld1wiO1xuIiwiLyoqXG4gKiBBcHBseSBhIHRoZW1lIHRvIGFuIGVsZW1lbnQgYnkgc2V0dGluZyB0aGUgQ1NTIHZhcmlhYmxlcyBvbiBpdC5cbiAqXG4gKiBlbGVtZW50OiBFbGVtZW50IHRvIGFwcGx5IHRoZW1lIG9uLlxuICogdGhlbWVzOiBIQVNTIFRoZW1lIGluZm9ybWF0aW9uXG4gKiBsb2NhbFRoZW1lOiBzZWxlY3RlZCB0aGVtZS5cbiAqIHVwZGF0ZU1ldGE6IGJvb2xlYW4gaWYgd2Ugc2hvdWxkIHVwZGF0ZSB0aGUgdGhlbWUtY29sb3IgbWV0YSBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgZWxlbWVudCxcbiAgdGhlbWVzLFxuICBsb2NhbFRoZW1lLFxuICB1cGRhdGVNZXRhID0gZmFsc2Vcbikge1xuICBpZiAoIWVsZW1lbnQuX3RoZW1lcykge1xuICAgIGVsZW1lbnQuX3RoZW1lcyA9IHt9O1xuICB9XG4gIGxldCB0aGVtZU5hbWUgPSB0aGVtZXMuZGVmYXVsdF90aGVtZTtcbiAgaWYgKGxvY2FsVGhlbWUgPT09IFwiZGVmYXVsdFwiIHx8IChsb2NhbFRoZW1lICYmIHRoZW1lcy50aGVtZXNbbG9jYWxUaGVtZV0pKSB7XG4gICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgfVxuICBjb25zdCBzdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50Ll90aGVtZXMpO1xuICBpZiAodGhlbWVOYW1lICE9PSBcImRlZmF1bHRcIikge1xuICAgIHZhciB0aGVtZSA9IHRoZW1lcy50aGVtZXNbdGhlbWVOYW1lXTtcbiAgICBPYmplY3Qua2V5cyh0aGVtZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB2YXIgcHJlZml4ZWRLZXkgPSBcIi0tXCIgKyBrZXk7XG4gICAgICBlbGVtZW50Ll90aGVtZXNbcHJlZml4ZWRLZXldID0gXCJcIjtcbiAgICAgIHN0eWxlc1twcmVmaXhlZEtleV0gPSB0aGVtZVtrZXldO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtZW50LnVwZGF0ZVN0eWxlcykge1xuICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gIH0gZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgLy8gaW1wbGVtZW50IHVwZGF0ZVN0eWxlcygpIG1ldGhvZCBvZiBQb2xlbWVyIGVsZW1lbnRzXG4gICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlU3VidHJlZSgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGVsZW1lbnQpLCBzdHlsZXMpO1xuICB9XG5cbiAgaWYgKCF1cGRhdGVNZXRhKSByZXR1cm47XG5cbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9dGhlbWUtY29sb3JdXCIpO1xuICBpZiAobWV0YSkge1xuICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoXCJkZWZhdWx0LWNvbnRlbnRcIikpIHtcbiAgICAgIG1ldGEuc2V0QXR0cmlidXRlKFwiZGVmYXVsdC1jb250ZW50XCIsIG1ldGEuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSk7XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lQ29sb3IgPVxuICAgICAgc3R5bGVzW1wiLS1wcmltYXJ5LWNvbG9yXCJdIHx8IG1ldGEuZ2V0QXR0cmlidXRlKFwiZGVmYXVsdC1jb250ZW50XCIpO1xuICAgIG1ldGEuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCB0aGVtZUNvbG9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBVcGRhdGUgcm9vdCdzIGNoaWxkIGVsZW1lbnQgdG8gYmUgbmV3RWxlbWVudFRhZyByZXBsYWNpbmcgYW5vdGhlciBleGlzdGluZyBjaGlsZCBpZiBhbnkuXG4gKiBDb3B5IGF0dHJpYnV0ZXMgaW50byB0aGUgY2hpbGQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pY0NvbnRlbnRVcGRhdGVyKHJvb3QsIG5ld0VsZW1lbnRUYWcsIGF0dHJpYnV0ZXMpIHtcbiAgY29uc3Qgcm9vdEVsID0gcm9vdDtcbiAgbGV0IGN1c3RvbUVsO1xuXG4gIGlmIChyb290RWwubGFzdENoaWxkICYmIHJvb3RFbC5sYXN0Q2hpbGQudGFnTmFtZSA9PT0gbmV3RWxlbWVudFRhZykge1xuICAgIGN1c3RvbUVsID0gcm9vdEVsLmxhc3RDaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBpZiAocm9vdEVsLmxhc3RDaGlsZCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKHJvb3RFbC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBDcmVhdGluZyBhbiBlbGVtZW50IHdpdGggdXBwZXIgY2FzZSB3b3JrcyBmaW5lIGluIENocm9tZSwgYnV0IGluIEZGIGl0IGRvZXNuJ3QgaW1tZWRpYXRlbHlcbiAgICAvLyBiZWNvbWUgYSBkZWZpbmVkIEN1c3RvbSBFbGVtZW50LiBQb2x5bWVyIGRvZXMgdGhhdCBpbiBzb21lIGxhdGVyIHBhc3MuXG4gICAgY3VzdG9tRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5ld0VsZW1lbnRUYWcudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwuc2V0UHJvcGVydGllcykge1xuICAgIGN1c3RvbUVsLnNldFByb3BlcnRpZXMoYXR0cmlidXRlcyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgY3VzdG9tIGVsZW1lbnQgZGVmaW5pdGlvbiB3YXNuJ3QgbG9hZGVkIHlldCAtIHNldFByb3BlcnRpZXMgd291bGQgYmVcbiAgICAvLyBtaXNzaW5nLCBidXQgbm8gaGFybSBpbiBzZXR0aW5nIGF0dHJpYnV0ZXMgb25lLWJ5LW9uZSB0aGVuLlxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY3VzdG9tRWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGN1c3RvbUVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVEb21haW4oaGFzczogSG9tZUFzc2lzdGFudCwgZG9tYWluOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2VydmljZXMgPSBoYXNzLnNlcnZpY2VzW2RvbWFpbl07XG4gIGlmICghc2VydmljZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZG9tYWluID09PSBcImxvY2tcIikge1xuICAgIHJldHVybiBcImxvY2tcIiBpbiBzZXJ2aWNlcztcbiAgfVxuICBpZiAoZG9tYWluID09PSBcImNvdmVyXCIpIHtcbiAgICByZXR1cm4gXCJvcGVuX2NvdmVyXCIgaW4gc2VydmljZXM7XG4gIH1cbiAgcmV0dXJuIFwidHVybl9vblwiIGluIHNlcnZpY2VzO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjYW5Ub2dnbGVEb21haW4gZnJvbSBcIi4vY2FuX3RvZ2dsZV9kb21haW5cIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuL3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlU3RhdGUoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5XG4pIHtcbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgaWYgKGRvbWFpbiA9PT0gXCJncm91cFwiKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLnN0YXRlID09PSBcIm9uXCIgfHwgc3RhdGVPYmouc3RhdGUgPT09IFwib2ZmXCI7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gXCJjbGltYXRlXCIpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA0MDk2KTtcbiAgfVxuXG4gIHJldHVybiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVEb21haW4oZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoMCwgZW50aXR5SWQuaW5kZXhPZihcIi5cIikpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iajogSGFzc0VudGl0eSkge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0R3JvdXBFbnRpdGllcyhcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgZ3JvdXA6IEdyb3VwRW50aXR5XG4pIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgZ3JvdXAuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5KSB7XG4gICAgICByZXN1bHRbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCBnZXRHcm91cEVudGl0aWVzIGZyb20gXCIuL2dldF9ncm91cF9lbnRpdGllc1wiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gUmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBlbnRpdGllcyB0aGF0IHRoZSB2aWV3IHdpbGwgc2hvd1xuLy8gaW5jbHVkaW5nIGVtYmVkZGVkIGdyb3Vwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdFbnRpdGllcyhcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgdmlldzogR3JvdXBFbnRpdHlcbik6IEhhc3NFbnRpdGllcyB7XG4gIGNvbnN0IHZpZXdFbnRpdGllcyA9IHt9O1xuXG4gIHZpZXcuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5ICYmICFlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgIHZpZXdFbnRpdGllc1tlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcblxuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09IFwiZ3JvdXBcIikge1xuICAgICAgICBjb25zdCBncm91cEVudGl0aWVzID0gZ2V0R3JvdXBFbnRpdGllcyhlbnRpdGllcywgZW50aXR5IGFzIEdyb3VwRW50aXR5KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhncm91cEVudGl0aWVzKS5mb3JFYWNoKChnckVudGl0eUlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JFbnRpdHkgPSBncm91cEVudGl0aWVzW2dyRW50aXR5SWRdO1xuXG4gICAgICAgICAgaWYgKCFnckVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgICAgICAgdmlld0VudGl0aWVzW2dyRW50aXR5SWRdID0gZ3JFbnRpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2aWV3RW50aXRpZXM7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNhblRvZ2dsZVN0YXRlIGZyb20gXCIuL2Nhbl90b2dnbGVfc3RhdGVcIjtcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IERPTUFJTlNfV0lUSF9DQVJEIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlQ2FyZFR5cGUoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5XG4pIHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIpIHtcbiAgICByZXR1cm4gXCJkaXNwbGF5XCI7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfVxuICBpZiAoXG4gICAgY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopICYmXG4gICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sICE9PSBcImhpZGRlblwiXG4gICkge1xuICAgIHJldHVybiBcInRvZ2dsZVwiO1xuICB9XG4gIHJldHVybiBcImRpc3BsYXlcIjtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0ZlYXR1cmUgPSAoXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5LFxuICBmZWF0dXJlOiBudW1iZXJcbik6IGJvb2xlYW4gPT4ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICByZXR1cm4gKHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzISAmIGZlYXR1cmUpICE9PSAwO1xufTtcbiIsImNvbnN0IGhhc3NBdHRyaWJ1dGVVdGlsID0ge307XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IFtcbiAgICBcImJhdHRlcnlcIixcbiAgICBcImNvbGRcIixcbiAgICBcImNvbm5lY3Rpdml0eVwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlX2Rvb3JcIixcbiAgICBcImdhc1wiLFxuICAgIFwiaGVhdFwiLFxuICAgIFwibGlnaHRcIixcbiAgICBcImxvY2tcIixcbiAgICBcIm1vaXN0dXJlXCIsXG4gICAgXCJtb3Rpb25cIixcbiAgICBcIm1vdmluZ1wiLFxuICAgIFwib2NjdXBhbmN5XCIsXG4gICAgXCJvcGVuaW5nXCIsXG4gICAgXCJwbHVnXCIsXG4gICAgXCJwb3dlclwiLFxuICAgIFwicHJlc2VuY2VcIixcbiAgICBcInByb2JsZW1cIixcbiAgICBcInNhZmV0eVwiLFxuICAgIFwic21va2VcIixcbiAgICBcInNvdW5kXCIsXG4gICAgXCJ2aWJyYXRpb25cIixcbiAgICBcIndpbmRvd1wiLFxuICBdLFxuICBjb3ZlcjogW1wiZ2FyYWdlXCJdLFxuICBzZW5zb3I6IFtcImJhdHRlcnlcIiwgXCJodW1pZGl0eVwiLCBcImlsbHVtaW5hbmNlXCIsIFwidGVtcGVyYXR1cmVcIiwgXCJwcmVzc3VyZVwiXSxcbn07XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9IFwianNvblwiO1xuaGFzc0F0dHJpYnV0ZVV0aWwuQUREX1RZUEUgPSBcImtleS12YWx1ZVwiO1xuXG5oYXNzQXR0cmlidXRlVXRpbC5UWVBFX1RPX1RBRyA9IHtcbiAgc3RyaW5nOiBcImhhLWN1c3RvbWl6ZS1zdHJpbmdcIixcbiAganNvbjogXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGljb246IFwiaGEtY3VzdG9taXplLWljb25cIixcbiAgYm9vbGVhbjogXCJoYS1jdXN0b21pemUtYm9vbGVhblwiLFxuICBhcnJheTogXCJoYS1jdXN0b21pemUtYXJyYXlcIixcbiAgXCJrZXktdmFsdWVcIjogXCJoYS1jdXN0b21pemUta2V5LXZhbHVlXCIsXG59O1xuXG4vLyBBdHRyaWJ1dGVzIGhlcmUgc2VydmUgZHVhbCBwdXJwb3NlOlxuLy8gMSkgQW55IGtleSBvZiB0aGlzIG9iamVjdCB3b24ndCBiZSBzaG93biBpbiBtb3JlLWluZm8gd2luZG93LlxuLy8gMikgQW55IGtleSB3aGljaCBoYXMgdmFsdWUgb3RoZXIgdGhhbiB1bmRlZmluZWQgd2lsbCBhcHBlYXIgaW4gY3VzdG9taXphdGlvblxuLy8gICAgY29uZmlnIGFjY29yZGluZyB0byBpdHMgdmFsdWUuXG5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyB8fCB7XG4gIGVudGl0eV9waWN0dXJlOiB1bmRlZmluZWQsXG4gIGZyaWVuZGx5X25hbWU6IHsgdHlwZTogXCJzdHJpbmdcIiwgZGVzY3JpcHRpb246IFwiTmFtZVwiIH0sXG4gIGljb246IHsgdHlwZTogXCJpY29uXCIgfSxcbiAgZW11bGF0ZWRfaHVlOiB7XG4gICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgZG9tYWluczogW1wiZW11bGF0ZWRfaHVlXCJdLFxuICB9LFxuICBlbXVsYXRlZF9odWVfbmFtZToge1xuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgZG9tYWluczogW1wiZW11bGF0ZWRfaHVlXCJdLFxuICB9LFxuICBoYWFza2FfaGlkZGVuOiB1bmRlZmluZWQsXG4gIGhhYXNrYV9uYW1lOiB1bmRlZmluZWQsXG4gIGhvbWVicmlkZ2VfaGlkZGVuOiB7IHR5cGU6IFwiYm9vbGVhblwiIH0sXG4gIGhvbWVicmlkZ2VfbmFtZTogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIHN1cHBvcnRlZF9mZWF0dXJlczogdW5kZWZpbmVkLFxuICBhdHRyaWJ1dGlvbjogdW5kZWZpbmVkLFxuICBjdXN0b21fdWlfbW9yZV9pbmZvOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBkZXZpY2VfY2xhc3M6IHtcbiAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgb3B0aW9uczogaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZpY2UgY2xhc3NcIixcbiAgICBkb21haW5zOiBbXCJiaW5hcnlfc2Vuc29yXCIsIFwiY292ZXJcIiwgXCJzZW5zb3JcIl0sXG4gIH0sXG4gIGhpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiwgZGVzY3JpcHRpb246IFwiSGlkZSBmcm9tIFVJXCIgfSxcbiAgYXNzdW1lZF9zdGF0ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcbiAgICAgIFwic3dpdGNoXCIsXG4gICAgICBcImxpZ2h0XCIsXG4gICAgICBcImNvdmVyXCIsXG4gICAgICBcImNsaW1hdGVcIixcbiAgICAgIFwiZmFuXCIsXG4gICAgICBcImdyb3VwXCIsXG4gICAgICBcIndhdGVyX2hlYXRlclwiLFxuICAgIF0sXG4gIH0sXG4gIGluaXRpYWxfc3RhdGU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImF1dG9tYXRpb25cIl0sXG4gIH0sXG4gIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFzc0F0dHJpYnV0ZVV0aWw7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuXG53aW5kb3cuSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHByb3ApIHsgcmV0dXJuIHByb3A7IH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuL2Jvb3QuanMnO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHN0YXRpYyBzdHJpbmcgdmFsdWUgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZmlsdGVyXG4gKiBzdHJpbmdzIGJ5IGFzc2V0aW5nIHRoYXQgdGhleSBoYXZlIGJlZW4gY3JlYXRlZCB2aWEgdGhpcyBjbGFzcy4gVGhlXG4gKiBgdmFsdWVgIHByb3BlcnR5IHJldHVybnMgdGhlIHN0cmluZyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICovXG5jbGFzcyBMaXRlcmFsU3RyaW5nIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nKSB7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdGhpcy52YWx1ZSA9IHN0cmluZy50b1N0cmluZygpO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IExpdGVyYWxTdHJpbmcgc3RyaW5nIHZhbHVlXG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGxpdGVyYWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMaXRlcmFsU3RyaW5nKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUxpdGVyYWxTdHJpbmd9ICovKHZhbHVlKS52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tbGl0ZXJhbCB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWxMaXRlcmFsIGZ1bmN0aW9uOiAke3ZhbHVlfWBcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gaHRtbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudCB9ICovKHZhbHVlKS5pbm5lckhUTUw7XG4gIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBMaXRlcmFsU3RyaW5nKSB7XG4gICAgcmV0dXJuIGxpdGVyYWxWYWx1ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLXRlbXBsYXRlIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbCBmdW5jdGlvbjogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgdGhhdCBjcmVhdGVzIGFuIEhUTUwgPHRlbXBsYXRlPiBlbGVtZW50IGZyb20gdGhlXG4gKiBjb250ZW50cyBvZiB0aGUgc3RyaW5nLlxuICpcbiAqIFRoaXMgYWxsb3dzIHlvdSB0byB3cml0ZSBhIFBvbHltZXIgVGVtcGxhdGUgaW4gSmF2YVNjcmlwdC5cbiAqXG4gKiBUZW1wbGF0ZXMgY2FuIGJlIGNvbXBvc2VkIGJ5IGludGVycG9sYXRpbmcgYEhUTUxUZW1wbGF0ZUVsZW1lbnRgcyBpblxuICogZXhwcmVzc2lvbnMgaW4gdGhlIEphdmFTY3JpcHQgdGVtcGxhdGUgbGl0ZXJhbC4gVGhlIG5lc3RlZCB0ZW1wbGF0ZSdzXG4gKiBgaW5uZXJIVE1MYCBpcyBpbmNsdWRlZCBpbiB0aGUgY29udGFpbmluZyB0ZW1wbGF0ZS4gIFRoZSBvbmx5IG90aGVyXG4gKiB2YWx1ZXMgYWxsb3dlZCBpbiBleHByZXNzaW9ucyBhcmUgdGhvc2UgcmV0dXJuZWQgZnJvbSBgaHRtbExpdGVyYWxgXG4gKiB3aGljaCBlbnN1cmVzIG9ubHkgbGl0ZXJhbCB2YWx1ZXMgZnJvbSBKUyBzb3VyY2UgZXZlciByZWFjaCB0aGUgSFRNTCwgdG9cbiAqIGd1YXJkIGFnYWluc3QgWFNTIHJpc2tzLlxuICpcbiAqIEFsbCBvdGhlciB2YWx1ZXMgYXJlIGRpc2FsbG93ZWQgaW4gZXhwcmVzc2lvbnMgdG8gaGVscCBwcmV2ZW50IFhTU1xuICogYXR0YWNrczsgaG93ZXZlciwgYGh0bWxMaXRlcmFsYCBjYW4gYmUgdXNlZCB0byBjb21wb3NlIHN0YXRpY1xuICogc3RyaW5nIHZhbHVlcyBpbnRvIHRlbXBsYXRlcy4gVGhpcyBpcyB1c2VmdWwgdG8gY29tcG9zZSBzdHJpbmdzIGludG9cbiAqIHBsYWNlcyB0aGF0IGRvIG5vdCBhY2NlcHQgaHRtbCwgbGlrZSB0aGUgY3NzIHRleHQgb2YgYSBgc3R5bGVgXG4gKiBlbGVtZW50LlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPjpob3N0eyBjb250ZW50OlwiLi4uXCIgfTwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7dGhpcy5wYXJ0aWFsVGVtcGxhdGV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHBhcnRpYWxUZW1wbGF0ZSgpIHsgcmV0dXJuIGh0bWxgPHNwYW4+UGFydGlhbCE8L3NwYW4+YDsgfVxuICpcbiAqIEBwYXJhbSB7IUlUZW1wbGF0ZUFycmF5fSBzdHJpbmdzIENvbnN0YW50IHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBWYXJpYWJsZSBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHJldHVybiB7IUhUTUxUZW1wbGF0ZUVsZW1lbnR9IENvbnN0cnVjdGVkIEhUTUxUZW1wbGF0ZUVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSBmdW5jdGlvbiBodG1sKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICBjb25zdCB0ZW1wbGF0ZSA9IC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnR9ICovKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpO1xuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGh0bWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pO1xuICByZXR1cm4gdGVtcGxhdGU7XG59O1xuXG4vKipcbiAqIEFuIGh0bWwgbGl0ZXJhbCB0YWcgdGhhdCBjYW4gYmUgdXNlZCB3aXRoIGBodG1sYCB0byBjb21wb3NlLlxuICogYSBsaXRlcmFsIHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT5cbiAqICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gKiAgICAgICAgICAgJHt0aGlzLnN0eWxlVGVtcGxhdGUoKX1cbiAqICAgICAgICAgPC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHtzdGF0aWNWYWx1ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgc3R5bGVUZW1wbGF0ZSgpIHtcbiAqICAgICAgICByZXR1cm4gaHRtbExpdGVyYWxgLnNoYWRvd2VkIHsgYmFja2dyb3VuZDogZ3JheTsgfWA7XG4gKiAgICAgfVxuICpcbiAqIEBwYXJhbSB7IUlUZW1wbGF0ZUFycmF5fSBzdHJpbmdzIENvbnN0YW50IHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBWYXJpYWJsZSBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHJldHVybiB7IUxpdGVyYWxTdHJpbmd9IENvbnN0cnVjdGVkIGxpdGVyYWwgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sTGl0ZXJhbCA9IGZ1bmN0aW9uKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICByZXR1cm4gbmV3IExpdGVyYWxTdHJpbmcodmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBsaXRlcmFsVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKSk7XG59O1xuIiwiaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgQ3VpQmFzZUVsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgbGV0IGV4dHJhcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfZGF0YV90ZW1wbGF0ZTtcbiAgICBpZiAoZXh0cmFzKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFzKSkge1xuICAgICAgICBleHRyYXMgPSBbZXh0cmFzXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHRyYXMubWFwKGV4dHJhID0+IHdpbmRvdy5jdXN0b21VSS5jb21wdXRlVGVtcGxhdGUoXG4gICAgICAgIGV4dHJhLFxuICAgICAgICBoYXNzLFxuICAgICAgICBoYXNzLnN0YXRlcyxcbiAgICAgICAgc3RhdGVPYmosXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICAgIC8qIGF0dHJpYnV0ZT0gKi8gdW5kZWZpbmVkLFxuICAgICAgICBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgICkpLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0ICE9PSBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgIGlmIChleHRyYS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkO1xuICB9XG5cbiAgaGFzRXh0cmEoZXh0cmEpIHtcbiAgICByZXR1cm4gZXh0cmEubGVuZ3RoID4gMDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ3VpQmFzZUVsZW1lbnQ7XG4iLCJpbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIER5bmFtaWNFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgZWxlbWVudE5hbWU6IFN0cmluZyxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZyknLFxuICAgIF07XG4gIH1cblxuICBvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZykge1xuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICBlbGVtZW50TmFtZSA/IGVsZW1lbnROYW1lLnRvVXBwZXJDYXNlKCkgOiAnRElWJyxcbiAgICAgIHsgaGFzcywgc3RhdGVPYmosIGluRGlhbG9nIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtZWxlbWVudCcsIER5bmFtaWNFbGVtZW50KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5cbmltcG9ydCAnLi9keW5hbWljLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbmN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdGF0ZS1jYXJkLWRpc3BsYXknKS50aGVuKCgpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBEeW5hbWljV2l0aEV4dHJhIGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1jYXJkLWRpc3BsYXknKSB7XG4gICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbC13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW46IC00cHggLTE2cHggLTRweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGhhLXN0YXRlLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIGR5bmFtaWMtZWxlbWVudCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgI292ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICAjbG9jayB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgfVxuICAgICAgICAjbG9jay5oYS1jb3Zlci1jb250cm9scyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5leHRyYSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1zaXplOiAzNnB4O1xuICAgICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD0nW1tleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSldXSBob3Jpem9udGFsIGxheW91dCc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tleHRyYU9ialZpc2libGVdXSc+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0J1xuICAgICAgICAgICAgICAgICAgICBpdGVtcz0nW1tleHRyYU9ial1dJ1xuICAgICAgICAgICAgICAgICAgICBvbi1kb20tY2hhbmdlPSdleHRyYURvbUNoYW5nZWQnPlxuICAgICAgICAgICAgPGhhLXN0YXRlLWxhYmVsLWJhZGdlIGhhc3M9J1tbaGFzc11dJyBzdGF0ZT0nW1tpdGVtXV0nPjwvaGEtc3RhdGUtbGFiZWwtYmFkZ2U+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW19zaG93Q29udHJvbChpbkRpYWxvZywgc3RhdGVPYmopXV0nPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGR5bmFtaWMtZWxlbWVudFxuICAgICAgICAgICAgICAgICAgY2xhc3M9J2ZsZXgnXG4gICAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LW5hbWU9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICAgIDwvZHluYW1pYy1lbGVtZW50PlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopXV0nPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVybGF5XCIgb24tY2xpY2s9J2NsaWNrSGFuZGxlcic+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9ja11dJz5cbiAgICAgICAgICAgICAgICAgICAgPGlyb24taWNvbiBpZD1cImxvY2tcIiBjbGFzcyQ9XCJbW2NvbnRyb2xFbGVtZW50XV1cIiBpY29uPVwibWRpOmxvY2stb3V0bGluZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbWyFjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRlJz5bW2NvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgICAgZXh0cmFPYmo6IHtcbiAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgX2F0dGFjaGVkKScsXG4gICAgICAgIH0sXG4gICAgICAgIF9hdHRhY2hlZDogQm9vbGVhbixcbiAgICAgICAgZXh0cmFPYmpWaXNpYmxlOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKScsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX2F0dGFjaGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBhdHRhY2hlZCkge1xuICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlIHx8ICFhdHRhY2hlZCkgcmV0dXJuIFtdO1xuICAgICAgbGV0IGV4dHJhQmFkZ2VzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYUJhZGdlcykpIHtcbiAgICAgICAgZXh0cmFCYWRnZXMgPSBbZXh0cmFCYWRnZXNdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhQmFkZ2VzLm1hcCgoZXh0cmFCYWRnZSkgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKGV4dHJhQmFkZ2UuZW50aXR5X2lkICYmIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSkge1xuICAgICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICAgIHRoaXMsIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSwgdGhpcy5pbkRpYWxvZyxcbiAgICAgICAgICAgIC8qIGFsbG93SGlkZGVuPSAqL2ZhbHNlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXh0cmFCYWRnZS5hdHRyaWJ1dGUgJiZcbiAgICAgICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgc3RhdGU6IFN0cmluZyhzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSksXG4gICAgICAgICAgICBlbnRpdHlfaWQ6ICdub25lLm5vbmUnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogeyB1bml0X29mX21lYXN1cmVtZW50OiBleHRyYUJhZGdlLnVuaXQgfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IGJsYWNrbGlzdCA9IGV4dHJhQmFkZ2UuYmxhY2tsaXN0X3N0YXRlcztcbiAgICAgICAgaWYgKGJsYWNrbGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJsYWNrbGlzdCkpIHtcbiAgICAgICAgICAgIGJsYWNrbGlzdCA9IFtibGFja2xpc3RdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYmxhY2tsaXN0LnNvbWUodiA9PiBSZWdFeHAodikudGVzdChyZXN1bHQuc3RhdGUudG9TdHJpbmcoKSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Ll9lbnRpdHlEaXNwbGF5ID0gJyc7XG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgeyBmcmllbmRseV9uYW1lOiAnJyB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pLmZpbHRlcihleHRyYUJhZGdlID0+IGV4dHJhQmFkZ2UgIT0gbnVsbCk7XG4gICAgfVxuXG4gICAgY29tcHV0ZUV4dHJhVmlzaWJsZShleHRyYU9iaiwgaW5EaWFsb2cpIHtcbiAgICAgIGlmIChpbkRpYWxvZyB8fCAhZXh0cmFPYmopIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBleHRyYU9iai5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpIHtcbiAgICAgIHJldHVybiBleHRyYU9ialZpc2libGUgPyAnZXh0cmEnIDogJyc7XG4gICAgfVxuXG4gICAgX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiAhc3RhdGVPYmouYXR0cmlidXRlcy5oaWRlX2NvbnRyb2w7XG4gICAgfVxuXG4gICAgY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaikge1xuICAgICAgLy8gaGFMb2NhbGl6ZSByZW1vdmVkIGluIDAuNjFcbiAgICAgIHJldHVybiBzdXBlci5jb21wdXRlU3RhdGVEaXNwbGF5KHRoaXMuaGFMb2NhbGl6ZSB8fCB0aGlzLmxvY2FsaXplLCBzdGF0ZU9iaik7XG4gICAgfVxuXG4gICAgaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHMgfHxcbiAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrO1xuICAgIH1cblxuICAgIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgY29uc3QgbG9jayA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjbG9jaycpO1xuICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgbG9jay5pY29uID0gJ21kaTpsb2NrLW9wZW4tb3V0bGluZSc7XG4gICAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcwLjEnO1xuICAgICAgfVxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gICAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgICAgbG9jay5pY29uID0gJ21kaTpsb2NrLW91dGxpbmUnO1xuICAgICAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9LCA1MDAwKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgYXBwbHlUaGVtZXMoaGFzcywgZWxlbWVudCwgc3RhdGVPYmopIHtcbiAgICAgIGNvbnN0IHRoZW1lTmFtZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUgfHwgJ2RlZmF1bHQnO1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgIGVsZW1lbnQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gICAgfVxuXG4gICAgZXh0cmFEb21DaGFuZ2VkKCkge1xuICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJylcbiAgICAgICAgLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICB0aGlzLmFwcGx5VGhlbWVzKHRoaXMuaGFzcywgZWxlbSwgZWxlbS5zdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtd2l0aC1leHRyYScsIER5bmFtaWNXaXRoRXh0cmEpO1xufSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEV2ZW50c01peGluIGZyb20gJy4uL21peGlucy9ldmVudHMtbWl4aW4uanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFDb25maWdDdXN0b21VaSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXIuRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj48L3N0eWxlPlxuICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj0naGFzczphcnJvdy1sZWZ0J1xuICAgICAgICAgICAgb24tY2xpY2s9J19iYWNrSGFuZGxlcidcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+Q3VzdG9tIFVJIHNldHRpbmdzPC9kaXY+XG4gICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPSdbW2lzV2lkZV1dJz5cbiAgICAgICAgPHBhcGVyLWNhcmQgaGVhZGluZz0nRGV2aWNlIG5hbWUnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XG4gICAgICAgICAgICBTZXQgZGV2aWNlIG5hbWUgc28gdGhhdCB5b3UgY2FuIHJlZmVyZW5jZSBpdCBpbiBwZXItZGV2aWNlIHNldHRpbmdzXG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9J05hbWUnXG4gICAgICAgICAgICAgIHZhbHVlPSd7e25hbWV9fSdcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BhcGVyLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICduYW1lQ2hhbmdlZCcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMubmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gIH1cblxuICBuYW1lQ2hhbmdlZChuYW1lKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLnNldE5hbWUobmFtZSk7XG4gIH1cblxuICBfYmFja0hhbmRsZXIoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIHRoaXMuZmlyZSgnbG9jYXRpb24tY2hhbmdlZCcpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLWNvbmZpZy1jdXN0b20tdWknLCBIYUNvbmZpZ0N1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFUaGVtZWRTbGlkZXIgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1oYS10aGVtZWQtc2xpZGVyLW1hcmdpbiwgaW5pdGlhbCk7XG4gICAgICB9XG4gICAgICAuZGlzYWJsZS1vZmYtd2hlbi1taW4ge1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1waW4tc3RhcnQtY29sb3I6ICB2YXIoLS1wYXBlci1zbGlkZXItcGluLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluLmlzLW9uIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgfVxuICAgICAgcGFwZXItc2xpZGVyIHtcbiAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICB3aWR0aDogdmFyKC0taGEtcGFwZXItc2xpZGVyLXdpZHRoLCAyMDBweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxwYXBlci1zbGlkZXJcbiAgICAgICAgIG1pbj0nW1tfdGhlbWVkTWluXV0nXG4gICAgICAgICBtYXg9J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWF4XCIsIG1heCldXSdcbiAgICAgICAgIHBpbj0nW1tfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJwaW5cIiwgcGluKV1dJ1xuICAgICAgICAgY2xhc3MkPSdbW2NvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgX3RoZW1lZE1pbildXScgdmFsdWU9J1tbdmFsdWVdXSdcbiAgICAgICAgIG9uLWNoYW5nZT0ndmFsdWVDaGFuZ2VkJz5cbiAgICA8L3BhcGVyLXNsaWRlcj5cbiAgICBgO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmRpc2FibGVPZmZXaGVuTWluID0gIXRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhpcy50aGVtZSwgJ29mZl93aGVuX21pbicsICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKTtcbiAgICB0aGlzLmNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhpcy50aGVtZSwgdGhpcy5kaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgfSxcbiAgICAgIHBpbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaXNPbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHRoZW1lOiBPYmplY3QsXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBfdGhlbWVkTWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJtaW5cIiwgbWluKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2NvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhlbWUsIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCknLFxuICAgIF07XG4gIH1cblxuICBjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpIHtcbiAgICB0aGlzLl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQgPSB0aGlzLl9jb21wdXRlQXR0cmlidXRlKFxuICAgICAgdGhlbWUsICdyZXBvcnRfd2hlbl9ub3RfY2hhbmdlZCcsICFkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICB9XG5cbiAgX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIGF0dHIsIGRlZikge1xuICAgIGlmICh0aGVtZSkge1xuICAgICAgaWYgKGF0dHIgaW4gdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoZW1lW2F0dHJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzKHRoZW1lLCBpc09uLCB0aGVtZWRNaW4pIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgaWYgKGlzT24pIHtcbiAgICAgIHJlc3VsdCArPSAnaXMtb24gJztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikgfHwgdGhlbWVkTWluID09PSAwKSB7XG4gICAgICAvLyBJZiBvZmZXaGVuTWluIGlzIGVuYWJsZWQgZG9uJ3QgY3VzdG9taXplLlxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7cmVzdWx0fWRpc2FibGUtb2ZmLXdoZW4tbWluYDtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChldikge1xuICAgIGlmICghdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkICYmIHRoaXMudmFsdWUgPT09IGV2LnRhcmdldC52YWx1ZSkge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGEtdGhlbWVkLXNsaWRlcicsIEhhVGhlbWVkU2xpZGVyKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyc7XG5pbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIuanMnO1xuaW1wb3J0IHN0YXRlQ2FyZFR5cGUgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUudHMnO1xuXG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcbmltcG9ydCAnLi9zdGF0ZS1jYXJkLXdpdGgtc2xpZGVyLmpzJztcbmltcG9ydCAnLi9zdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyLmpzJztcblxuY29uc3QgU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMgPSBbJ2NvbmZpZ3VyYXRvciddO1xuY29uc3QgRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUID0ge1xuICBsaWdodDogMSwgLy8gU1VQUE9SVF9CUklHSFRORVNTXG4gIGNvdmVyOiA0LCAvLyBTVVBQT1JUX1NFVF9QT1NJVElPTlxuICBjbGltYXRlOiAxLCAvLyBTVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRVxufTtcbmNvbnN0IFRZUEVfVE9fQ09OVFJPTCA9IHtcbiAgdG9nZ2xlOiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gIGRpc3BsYXk6ICcnLFxuICBjb3ZlcjogJ2hhLWNvdmVyLWNvbnRyb2xzJyxcbn07XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkQ3VzdG9tVWkgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKScsXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKGNvbnRhaW5lci50YWdOYW1lID09PSAnRElWJyAmJlxuICAgICAgICAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSB8fCBjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGlsZC1jYXJkJykpKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIC8vIFNpbmNlIHRoaXMgZG9lc24ndCBhY3R1YWxseSBjaGFuZ2UgdGhlIGJhY2tncm91bmQgLSBubyBuZWVkIHRvIGNsZWFyIGl0LlxuICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicsICd2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIGluaGVyaXQpJyk7XG5cbiAgICAgIC8vIFBvbHlmaWxsICd1cGRhdGVTdHlsZXMnLlxuICAgICAgaWYgKCFjb250YWluZXIudXBkYXRlU3R5bGVzKSB7XG4gICAgICAgIGNvbnRhaW5lci51cGRhdGVTdHlsZXMgPSAoc3R5bGVzKSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHN0eWxlc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5pbnB1dENoYW5nZWQodGhpcy5oYXNzLCB0aGlzLmluRGlhbG9nLCB0aGlzLnN0YXRlT2JqKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycsIHBhZGRpbmc6ICcnIH0pO1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciwgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCAnZGVmYXVsdCcpO1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGJhZGdlTW9kZShoYXNzLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gW107XG4gICAgaWYgKGRvbWFpbiA9PT0gJ2dyb3VwJykge1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tpZF07XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIElEICR7aWR9IGluIGdyb3VwICR7c3RhdGVPYmouZW50aXR5X2lkfWApO1xuICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QgfHxcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QuaW5jbHVkZXMoc3RhdGUuZW50aXR5X2lkKSkge1xuICAgICAgICAgIHN0YXRlcy5wdXNoKHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICAgIHRoaXMsIHN0YXRlLCBmYWxzZSAvKiBpbkRpYWxvZyAqLywgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcy5wdXNoKHN0YXRlT2JqKTtcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9O1xuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSkge1xuICAgICAgICAgIHBhcmFtcy5tYXJnaW4gPSAndmFyKC0taGEtYmFkZ2VzLWNhcmQtbWFyZ2luLCAwKSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgICdIQS1CQURHRVMtQ0FSRCcsXG4gICAgICB7IGhhc3MsIHN0YXRlcyB9KTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgd2lkdGg6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC13aWR0aCwgaW5pdGlhbCknLFxuICAgICAgICAndGV4dC1hbGlnbic6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC10ZXh0LWFsaWduLCBpbml0aWFsKScsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5sYXN0Q2hpbGQuc3R5bGUuZm9udFNpemUgPSAnODUlJztcblxuICAgIC8vIFNpbmNlIHRoaXMgdmFyaWFibGUgb25seSBhZmZlY3RzIGJhZGdlcyBtb2RlIC0gbm8gbmVlZCB0byBjbGVhbiBpdCB1cC5cbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KCctLWhhLXN0YXRlLWxhYmVsLWJhZGdlLW1hcmdpbi1ib3R0b20nLCAnMCcpO1xuICB9XG5cbiAgY2xlYW5CYWRnZVN0eWxlKCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoe1xuICAgICAgICBkaXNwbGF5OiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAndGV4dC1hbGlnbic6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycgfSk7XG4gIH1cblxuICBhcHBseVRoZW1lcyhoYXNzLCBtb2RpZmllZE9iaikge1xuICAgIGxldCB0aGVtZVRhcmdldCA9IHRoaXM7XG4gICAgbGV0IHRoZW1lTmFtZSA9ICdkZWZhdWx0JztcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGVtZVRhcmdldCA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgIHRoZW1lTmFtZSA9IG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWU7XG4gICAgfVxuICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgdGhlbWVUYXJnZXQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gIH1cblxuICBtYXliZUhpZGVFbnRpdHkobW9kaWZpZWRPYmopIHtcbiAgICBpZiAoIW1vZGlmaWVkT2JqKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcwJywgcGFkZGluZzogJzAnIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgb2JqLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmJlxuICAgICAgKERPTUFJTl9UT19TTElERVJfU1VQUE9SVFtkb21haW5dICYgb2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzKSAmJlxuICAgICAgb2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlICYmIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAhPT0gJ25vLXNsaWRlcic7XG4gIH1cblxuICBpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFzdGF0ZU9iaiB8fCAhaGFzcyB8fCAhdGhpcy5faXNBdHRhY2hlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gICAgY29uc3QgbW9kaWZpZWRPYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICB0aGlzLCBzdGF0ZU9iaiwgaW5EaWFsb2csIHRydWUgLyogYWxsb3dIaWRkZW4gKi8pO1xuXG4gICAgaWYgKHRoaXMubWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hcHBseVRoZW1lcyhoYXNzLCBtb2RpZmllZE9iaik7XG5cbiAgICBpZiAoIWluRGlhbG9nICYmIG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlID09PSAnYmFkZ2VzJykge1xuICAgICAgdGhpcy5iYWRnZU1vZGUoaGFzcywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBtb2RpZmllZE9iaiwgZG9tYWluKTtcbiAgICB9XG4gIH1cblxuICByZWd1bGFyTW9kZV8oaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqLCBkb21haW4pIHtcbiAgICB0aGlzLmNsZWFuQmFkZ2VTdHlsZSgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgaGFzcyxcbiAgICAgIHN0YXRlT2JqLFxuICAgICAgaW5EaWFsb2csXG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbFN0YXRlQ2FyZFR5cGUgPSBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKTtcbiAgICBsZXQgY3VzdG9tU3RhdGVDYXJkVHlwZTtcbiAgICBjb25zdCBzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlID0gc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk7XG5cbiAgICBpZiAoZG9tYWluID09PSAnbGlnaHQnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1lbnRpdHktdG9nZ2xlJyxcbiAgICAgICAgc2VydmljZU1pbjogJ3R1cm5fb2ZmJyxcbiAgICAgICAgc2VydmljZU1heDogJ3R1cm5fb24nLFxuICAgICAgICB2YWx1ZU5hbWU6ICdicmlnaHRuZXNzJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY292ZXInICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jb3Zlci1jb250cm9scycsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnY2xvc2VfY292ZXInLFxuICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X2NvdmVyX3Bvc2l0aW9uJyxcbiAgICAgICAgc2V0VmFsdWVOYW1lOiAncG9zaXRpb24nLFxuICAgICAgICB2YWx1ZU5hbWU6ICdjdXJyZW50X3Bvc2l0aW9uJyxcbiAgICAgICAgbmFtZU9uOiAnb3BlbicsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NsaW1hdGUnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jbGltYXRlLXN0YXRlJyxcbiAgICAgICAgbWluOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl90ZW1wIHx8IC0xMDAsXG4gICAgICAgIG1heDogc3RhdGVPYmouYXR0cmlidXRlcy5tYXhfdGVtcCB8fCAyMDAsXG4gICAgICAgIHNlcnZpY2VNaW46ICdzZXRfdGVtcGVyYXR1cmUnLFxuICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgdmFsdWVOYW1lOiAndGVtcGVyYXR1cmUnLFxuICAgICAgICBuYW1lT246ICcnLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkICYmXG4gICAgICAgICAgICAgICAhU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMuaW5jbHVkZXMob3JpZ2luYWxTdGF0ZUNhcmRUeXBlKSkge1xuICAgICAgcGFyYW1zLmluRGlhbG9nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSAnJztcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50O1xuICAgIH1cblxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAoc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSB8fCBjdXN0b21TdGF0ZUNhcmRUeXBlIHx8IGBTVEFURS1DQVJELSR7b3JpZ2luYWxTdGF0ZUNhcmRUeXBlfWApLnRvVXBwZXJDYXNlKCksXG4gICAgICBwYXJhbXMpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtY3VzdG9tLXVpJywgU3RhdGVDYXJkQ3VzdG9tVWkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBDdWlCYXNlRWxlbWVudCBmcm9tICcuL2N1aS1iYXNlLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuL2R5bmFtaWMtd2l0aC1leHRyYS5qcyc7XG5pbXBvcnQgJy4vaGEtdGhlbWVkLXNsaWRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkV2l0aFNsaWRlciBleHRlbmRzIEN1aUJhc2VFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1mbGV4LWZhY3RvcnNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuc2Vjb25kLWxpbmUsIC5zdGF0ZS1hbmQtdG9nZ2xlLCAuc3RhdGUtaW5mbyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWFuZC10b2dnbGUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zZWNvbmQtbGluZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmQtbGluZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgfVxuICAgICAgLnN0cmV0Y2ggLnNlY29uZC1saW5lLCAuc3RyZXRjaCBoYS10aGVtZWQtc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0taGEtcGFwZXItc2xpZGVyLXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc3RhdGUtaW5mbyB7XG4gICAgICAgIG1pbi13aWR0aDogaW5pdGlhbDtcbiAgICAgIH1cbiAgICAgIGhhLXRoZW1lZC1zbGlkZXIsIC50b3Atd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC50b3Atd3JhcHBlci5zdHJldGNoIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzJD0naG9yaXpvbnRhbCBsYXlvdXQgZmxleCB0b3Atd3JhcHBlciBbW19jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZyldXSc+XG4gICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQgZmxleC1hdXRvIHN0YXRlLWFuZC10b2dnbGUnPlxuICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8gZmxleC1hdXRvJ1xuICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICAgIGluLWRpYWxvZz0nW1tzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSldXSdcbiAgICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSdcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbYnJlYWtTbGlkZXJdXScgY2xhc3M9J2hpZGRlbic+XG4gICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzaG93U2xpZGVyXV0nIHJlc3RhbXA+XG4gICAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGZsZXgtYXV0byBlbmQtanVzdGlmaWVkIHNlY29uZC1saW5lJz5cbiAgICAgICAgICA8aGEtdGhlbWVkLXNsaWRlclxuICAgICAgICAgICAgaWQ9J3NsaWRlcidcbiAgICAgICAgICAgIG1heD1bW21heF1dXG4gICAgICAgICAgICBtaW49W1ttaW5dXVxuICAgICAgICAgICAgdGhlbWU9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5zbGlkZXJfdGhlbWVdXSdcbiAgICAgICAgICAgIGlzLW9uPSdbW2lzT24oc3RhdGVPYmosIG5hbWVPbildXSdcbiAgICAgICAgICAgIHZhbHVlPSd7e3NsaWRlclZhbHVlfX0nXG4gICAgICAgICAgICBkaXNhYmxlLW9mZi13aGVuLW1pbj0ne3tkaXNhYmxlT2ZmV2hlbk1pbn19J1xuICAgICAgICAgICAgb24tY2hhbmdlPSdzbGlkZXJDaGFuZ2VkJ1xuICAgICAgICAgICAgb24tY2xpY2s9J3N0b3BQcm9wYWdhdGlvbic+XG4gICAgICAgICAgPC9oYS10aGVtZWQtc2xpZGVyPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shYnJlYWtTbGlkZXJdXSc+XG4gICAgICAgICAgICA8ZHluYW1pYy13aXRoLWV4dHJhIGhhc3M9J1tbaGFzc11dJyBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXScgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz48L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9tYWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWF4OiBTdHJpbmcsXG4gICAgICB2YWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIHNldFZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgbmFtZU9uOiB7IHR5cGU6IFN0cmluZywgdmFsdWU6ICdvbicgfSxcbiAgICAgIG1pbjogeyB0eXBlOiBOdW1iZXIsIHZhbHVlOiAwIH0sXG4gICAgICBtYXg6IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMjU1IH0sXG5cbiAgICAgIHNsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IEJvb2xlYW4sXG4gICAgICBtb2RlOiBTdHJpbmcsXG4gICAgICBzdHJldGNoU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBicmVha1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaGlkZVNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbGluZVRvb0xvbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG1pbkxpbmVCcmVhazogTnVtYmVyLFxuICAgICAgbWF4TGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICBzaG93U2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fb25Jcm9uUmVzaXplID0gdGhpcy5fb25Jcm9uUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ3N0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpJyxcbiAgICBdO1xuICB9XG5cbiAgX3dhaXRGb3JMYXlvdXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgICBpZiAodGhpcy5fZnJhbWVJZCkgcmV0dXJuO1xuICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSBmYWxzZTtcbiAgICB0aGlzLl9mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl9mcmFtZUlkID0gbnVsbDtcbiAgICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSB0cnVlO1xuICAgICAgdGhpcy5fb25Jcm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0TW9kZSgpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBoaWRlU2xpZGVyOiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicgJiYgdGhpcy5saW5lVG9vTG9uZyxcbiAgICAgIGJyZWFrU2xpZGVyOlxuICAgICAgICAgICAodGhpcy5tb2RlID09PSAnYnJlYWstc2xpZGVyJyB8fCB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpICYmXG4gICAgICAgICAgIHRoaXMubGluZVRvb0xvbmcsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuc2hvd1NsaWRlcikge1xuICAgICAgb2JqLmJyZWFrU2xpZGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gIH1cblxuICBfb25Jcm9uUmVzaXplKCkge1xuICAgIGlmICghdGhpcy5yZWFkeVRvQ29tcHV0ZSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICduby1zbGlkZXInKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBoaWRlU2xpZGVyOiB0cnVlLFxuICAgICAgICBicmVha1NsaWRlcjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2QnJlYWtTbGlkZXIgPSB0aGlzLmJyZWFrU2xpZGVyO1xuICAgIGNvbnN0IHByZXZIaWRlU2xpZGVyID0gdGhpcy5oaWRlU2xpZGVyO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBsaW5lVG9vTG9uZzogZmFsc2UsXG4gICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy4kO1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA8PSB0aGlzLm1pbkxpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXJXaWR0aCA+PSB0aGlzLm1heExpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJldkhpZGVTbGlkZXIgJiYgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdW5oaWRlIHRoZSBzbGlkZXIgaW4gb3JkZXIgdG8gcmVjYWxjdWxhdGUgaGVpZ2h0LlxuICAgICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBzdGF0ZUhlaWdodCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcuc3RhdGUtaW5mbycpLmNsaWVudEhlaWdodDtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBjb250YWluZXJIZWlnaHQgPiBzdGF0ZUhlaWdodCAqIDEuNTtcbiAgICAgIGlmICh0aGlzLmxpbmVUb29Mb25nKSB7XG4gICAgICAgIHRoaXMubWluTGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKCFwcmV2QnJlYWtTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5tYXhMaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2V0TW9kZSgpO1xuICB9XG5cbiAgX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChtb2RlID09PSAnc2luZ2xlLWxpbmUnKSB7XG4gICAgICByZXR1cm4gJ25vd3JhcCc7XG4gICAgfVxuICAgIGlmIChzdHJldGNoU2xpZGVyICYmIGxpbmVUb29Mb25nKSB7XG4gICAgICByZXR1cm4gJ3N0cmV0Y2ggd3JhcCc7XG4gICAgfVxuICAgIHJldHVybiAnd3JhcCc7XG4gIH1cblxuICBfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpIHtcbiAgICBpZiAoaW5EaWFsb2cgfHwgaGlkZVNsaWRlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIGNvbnN0IHBhcmFtID0geyBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH07XG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybjtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXInKTtcbiAgICBpZiAoZXYudGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgIC8vIE5vIFNoYWRvdyBET00gLSB3ZSBoYXZlIGFjY2VzcyB0byBvcmlnaW5hbCB0YXJnZXQuXG4gICAgICAoeyB0YXJnZXQgfSA9IGV2KTtcbiAgICB9IGVsc2UgaWYgKGV2LnBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYucGF0aDtcbiAgICB9IGVsc2UgaWYgKGV2LmNvbXBvc2VkUGF0aCkge1xuICAgICAgW3RhcmdldF0gPSBldi5jb21wb3NlZFBhdGgoKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSAwIHx8ICh2YWx1ZSA8PSB0YXJnZXQubWluICYmICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKSkge1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNaW4sIHBhcmFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1bdGhpcy5zZXRWYWx1ZU5hbWUgfHwgdGhpcy52YWx1ZU5hbWVdID0gdmFsdWU7XG4gICAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZU1heCwgcGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBzbGlkZXJWYWx1ZTogdGhpcy5pc09uKHN0YXRlT2JqLCBuYW1lT24pID8gc3RhdGVPYmouYXR0cmlidXRlc1t2YWx1ZU5hbWVdIDogMCxcbiAgICB9O1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHtcbiAgICAgICAgbWluTGluZUJyZWFrOiAwLFxuICAgICAgICBtYXhMaW5lQnJlYWs6IDk5OSxcbiAgICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgICBtb2RlOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSxcbiAgICAgICAgc3RyZXRjaFNsaWRlcjogISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0cmV0Y2hfc2xpZGVyLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzT24oc3RhdGVPYmosIG5hbWVPbikge1xuICAgIHJldHVybiBzdGF0ZU9iaiAmJiAoIW5hbWVPbiB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gbmFtZU9uKTtcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbihldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInLCBTdGF0ZUNhcmRXaXRoU2xpZGVyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQnPlxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICBjbGFzcz0nc3RhdGUtaW5mbydcbiAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgc2Vjb25kYXJ5LWxpbmUkPSdbW2hhc0V4dHJhKGV4dHJhKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0JyBpdGVtcz0nW1tleHRyYV1dJz5cbiAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3N0YXRlLWluZm8+XG4gICAgICA8ZHluYW1pYy13aXRoLWV4dHJhXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPlxuICAgICAgPC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyJywgU3RhdGVDYXJkV2l0aG91dFNsaWRlcik7XG4iLCIvLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5leHBvcnQgZGVmYXVsdCAoc3VwZXJDbGFzcykgPT4ge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIEV2ZW50c01peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICAgKiAgIHBheWxvYWQuXG4gICAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgICovXG4gICAgZmlyZSh0eXBlLCBkZXRhaWwgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0eXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IG9wdGlvbnMuYnViYmxlcyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogQm9vbGVhbihvcHRpb25zLmNhbmNlbGFibGUpLFxuICAgICAgICBjb21wb3NlZDogb3B0aW9ucy5jb21wb3NlZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuY29tcG9zZWQsXG4gICAgICB9KTtcbiAgICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbDtcbiAgICAgIGNvbnN0IG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgdGhpcztcbiAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudHNNaXhpbjtcbn07XG4iLCJpbXBvcnQgaGFzc0F0dHJpYnV0ZXNVdGlsIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMnO1xuXG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgfHwge307XG5jb25zdCBTVVBQT1JURURfU0xJREVSX01PREVTID0gW1xuICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbl07XG5cbmNvbnN0IGN1c3RvbVVpQXR0cmlidXRlcyA9IHtcbiAgZ3JvdXA6IHVuZGVmaW5lZCxcbiAgZGV2aWNlOiB1bmRlZmluZWQsXG4gIHRlbXBsYXRlczogdW5kZWZpbmVkLFxuICBzdGF0ZTogdW5kZWZpbmVkLFxuICBfc3RhdGVEaXNwbGF5OiB1bmRlZmluZWQsXG4gIGNvbnRyb2xfZWxlbWVudDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBzdGF0ZV9jYXJkX21vZGU6IHtcbiAgICB0eXBlOiAnYXJyYXknLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGxpZ2h0OiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICBjb3ZlcjogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY2xpbWF0ZTogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgJyonOiBbJ2JhZGdlcyddLFxuICAgIH0sXG4gIH0sXG4gIHN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBiYWRnZXNfbGlzdDogeyB0eXBlOiAnanNvbicgfSxcbiAgc2hvd19sYXN0X2NoYW5nZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGhpZGVfY29udHJvbDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgZXh0cmFfZGF0YV90ZW1wbGF0ZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBleHRyYV9iYWRnZTogeyB0eXBlOiAnanNvbicgfSxcbiAgc3RyZXRjaF9zbGlkZXI6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIHNsaWRlcl90aGVtZTogeyB0eXBlOiAnanNvbicgfSxcbiAgdGhlbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgY29uZmlybV9jb250cm9sczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgY29uZmlybV9jb250cm9sc19zaG93X2xvY2s6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGhpZGVfaW5fZGVmYXVsdF92aWV3OiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBpY29uX2NvbG9yOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG59O1xud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPSBoYXNzQXR0cmlidXRlc1V0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUztcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBoYXNzQXR0cmlidXRlc1V0aWwuVU5LTk9XTl9UWVBFO1xuT2JqZWN0LmFzc2lnbih3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgY3VzdG9tVWlBdHRyaWJ1dGVzKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi50cyc7XG5pbXBvcnQgZ2V0Vmlld0VudGl0aWVzIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXMudHMnO1xuXG5pbXBvcnQgJy4uL2VsZW1lbnRzL2hhLWNvbmZpZy1jdXN0b20tdWkuanMnO1xuaW1wb3J0IFZFUlNJT04gZnJvbSAnLi92ZXJzaW9uLmpzJztcbmltcG9ydCAnLi9oYXNzLWF0dHJpYnV0ZS11dGlsLmpzJztcblxud2luZG93LmN1c3RvbVVJID0gd2luZG93LmN1c3RvbVVJIHx8IHtcbiAgU1VQUE9SVEVEX1NMSURFUl9NT0RFUzogW1xuICAgICdzaW5nbGUtbGluZScsICdicmVhay1zbGlkZXInLCAnYnJlYWstc2xpZGVyLXRvZ2dsZScsICdoaWRlLXNsaWRlcicsICduby1zbGlkZXInLFxuICBdLFxuXG4gIGRvbUhvc3QoZWxlbSkge1xuICAgIGlmIChlbGVtID09PSBkb2N1bWVudCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW0uZ2V0Um9vdE5vZGUoKTtcbiAgICByZXR1cm4gKHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSA/IC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpLmhvc3QgOiByb290O1xuICB9LFxuXG4gIGxpZ2h0T3JTaGFkb3coZWxlbSwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZWxlbS5zaGFkb3dSb290ID9cbiAgICAgIGVsZW0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6XG4gICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9LFxuXG4gIGdldEVsZW1lbnRIaWVyYXJjaHkocm9vdCwgaGllcmFyY2h5KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsZW0gPSBoaWVyYXJjaHkuc2hpZnQoKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhyb290LCBlbGVtKSwgaGllcmFyY2h5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH0sXG5cbiAgZ2V0Q29udGV4dChlbGVtKSB7XG4gICAgaWYgKGVsZW0uX2NvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbS5fY29udGV4dCA9IFtdO1xuICAgICAgZm9yIChsZXQgZWxlbWVudCA9IChlbGVtLnRhZ05hbWUgPT09ICdIQS1FTlRJVElFUy1DQVJEJyA/IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW0pIDogZWxlbSk7XG4gICAgICAgIGVsZW1lbnQ7IGVsZW1lbnQgPSB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtZW50KSkge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgIGNhc2UgJ0hBLUVOVElUSUVTLUNBUkQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ3JvdXBFbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5ncm91cEVudGl0eSA9PT0gZmFsc2UgJiYgZWxlbWVudC5zdGF0ZXMgJiYgZWxlbWVudC5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChgZ3JvdXAuJHtjb21wdXRlU3RhdGVEb21haW4oZWxlbWVudC5zdGF0ZXNbMF0pfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnTU9SRS1JTkZPLUdST1VQJzpcbiAgICAgICAgICBjYXNlICdTVEFURS1DQVJELUNPTlRFTlQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuc3RhdGVPYmouZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hBLUNBUkRTJzpcbiAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3JykgfHwgJ2RlZmF1bHRfdmlldycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtLl9jb250ZXh0LnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0uX2NvbnRleHQ7XG4gIH0sXG5cbiAgZmluZE1hdGNoKGtleSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuIG51bGw7XG4gICAgaWYgKG9wdGlvbnNba2V5XSkgcmV0dXJuIGtleTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykuZmluZChvcHRpb24gPT4ga2V5Lm1hdGNoKGBeJHtvcHRpb259JGApKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChuYW1lLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZVttYXRjaF0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHdpbmRvdy5jdXN0b21VSS5nZXRDb250ZXh0KGVsZW0pO1xuICAgIGlmICghY29udGV4dCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICBjb250ZXh0LmZvckVhY2goKGMpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2goYywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhdHRyaWJ1dGVzLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIF9zZXRLZWVwKG9iaiwgdmFsdWUpIHtcbiAgICBpZiAob2JqLl9jdWlfa2VlcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSBvYmouX2N1aV9rZWVwICYmIHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIWF0dHJpYnV0ZXMudGVtcGxhdGVzKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosIHRydWUpO1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBuZXdBdHRyaWJ1dGVzID0ge307XG4gICAgbGV0IGhhc0dsb2JhbCA9IGZhbHNlO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcy50ZW1wbGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBhdHRyaWJ1dGVzLnRlbXBsYXRlc1trZXldO1xuICAgICAgaWYgKHRlbXBsYXRlLm1hdGNoKC9cXGIoZW50aXRpZXN8aGFzcylcXGIvKSkge1xuICAgICAgICBoYXNHbG9iYWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICB0ZW1wbGF0ZSwgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcyxcbiAgICAgICAgKHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXMgJiYgc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlc1trZXldKSB8fFxuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldLFxuICAgICAgICBzdGF0ZU9iai51bnRlbXBsYXRlZF9zdGF0ZSB8fCBzdGF0ZU9iai5zdGF0ZSk7XG4gICAgICAvLyBJbiBjYXNlIG9mIG51bGwgZG9uJ3Qgc2V0IHRoZSB2YWx1ZS5cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgbmV3QXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICBpZiAoa2V5ID09PSAnc3RhdGUnKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouc3RhdGUpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdfc3RhdGVEaXNwbGF5Jykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXkpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gYXR0cmlidXRlc1trZXldKSB7XG4gICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgIWhhc0dsb2JhbCk7XG4gICAgaWYgKCFoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzID09PSBhdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBXZSBhcmUgb3BlcmF0aW5nIG9uIHJlYWwgYXR0cmlidXRlcy4gUmVwbGFjZSB0aGVtLlxuICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgbmV3QXR0cmlidXRlcyk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdzdGF0ZScpKSB7XG4gICAgICAgIGlmIChuZXdBdHRyaWJ1dGVzLnN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnN0YXRlID0gU3RyaW5nKG5ld0F0dHJpYnV0ZXMuc3RhdGUpO1xuICAgICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZSA9IHN0YXRlT2JqLnN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdfc3RhdGVEaXNwbGF5JykpIHtcbiAgICAgICAgcmVzdWx0Ll9zdGF0ZURpc3BsYXkgPSBuZXdBdHRyaWJ1dGVzLl9zdGF0ZURpc3BsYXk7XG4gICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkgPSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5O1xuICAgICAgfVxuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHJlc3VsdCwgIWhhc0dsb2JhbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBPcGVyYXRpbmcgb24gY29udGV4dC1hd2FyZSBhdHRyaWJ1dGVzLiBSZXR1cm4gc2hhbGxvdyBjb3B5IG9mIG9iamVjdC5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5ld1Jlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgc3RhdGVPYmouYXR0cmlidXRlcyk7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaik7XG5cbiAgICBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZXMob2JqKSB7XG4gICAgICBpZiAoIW9iaikgcmV0dXJuO1xuICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICAgICAgaGFzcywgc3RhdGVzLCBuZXdSZXN1bHQsIGF0dHJpYnV0ZXMpO1xuICAgICAgICBoYXNDaGFuZ2VzIHw9IChyZXN1bHQgIT09IG5ld1Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZGV2aWNlKTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZ3JvdXApO1xuICAgIH1cblxuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgIGlmIChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKSByZXR1cm4gbmV3UmVzdWx0O1xuICAgIGlmIChoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVPYmo7XG4gIH0sXG5cbiAgYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eV9pZDogc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3RhdGU6IHN0YXRlT2JqLnN0YXRlLFxuICAgICAgYXR0cmlidXRlczogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcywgYXR0cmlidXRlcyksXG4gICAgICB1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZU9iai5sYXN0X2NoYW5nZWQsXG4gICAgfTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdChlbGVtLCBzdGF0ZU9iaiwgaW5EaWFsb2csIGFsbG93SGlkZGVuKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgbGV0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIG9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBlbGVtLmhhc3MsIGVsZW0uaGFzcy5zdGF0ZXMsIG9iaiwgb2JqLmF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKG9iaiAhPT0gc3RhdGVPYmogJiYgb2JqLmF0dHJpYnV0ZXMuaGlkZGVuICYmIGFsbG93SGlkZGVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmaXhHcm91cFRpdGxlcygpIHtcbiAgICBjb25zdCBob21lQXNzaXN0YW50TWFpbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nXSk7XG4gICAgaWYgKGhvbWVBc3Npc3RhbnRNYWluID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzLCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYUNhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaG9tZUFzc2lzdGFudE1haW4sIFtcbiAgICAgICdwYXJ0aWFsLWNhcmRzJyxcbiAgICAgICdoYS1jYXJkc1t2aWV3LXZpc2libGVdJ10pO1xuICAgIGlmIChoYUNhcmRzID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhQ2FyZHMsICcubWFpbicpIHx8IGhhQ2FyZHMuJC5tYWluO1xuICAgIGNvbnN0IGNhcmRzID0gbWFpbi5xdWVyeVNlbGVjdG9yQWxsKCdoYS1lbnRpdGllcy1jYXJkJyk7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKGNhcmQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgIGNhcmQsXG4gICAgICAgICAgY2FyZC5ncm91cEVudGl0eSxcbiAgICAgICAgICBmYWxzZSAvKiBpbkRpYWxvZyAqLyxcbiAgICAgICAgICBmYWxzZSAvKiBhbGxvd0hpZGRlbiAqLyk7XG4gICAgICAgIGlmIChvYmogIT09IGNhcmQuZ3JvdXBFbnRpdHkgJiYgb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSkge1xuICAgICAgICAgIGNvbnN0IG5hbWVFbGVtID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coY2FyZCwgJy5uYW1lJyk7XG4gICAgICAgICAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgY29udHJvbENvbHVtbnMoY29sdW1ucykge1xuICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtY2FyZHMnXSk7XG4gICAgaWYgKHBhcnRpYWxDYXJkcyA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMuYmluZChudWxsLCBjb2x1bW5zKSxcbiAgICAgICAgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZ1bmN0aW9uIHJlbmFtZWQgZnJvbSBoYW5kbGVXaW5kb3dDaGFuZ2UgdG8gX3VwZGF0ZUNvbHVtbnMgb24gMy43LjE4XG4gICAgY29uc3QgZiA9IHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UgfHwgcGFydGlhbENhcmRzLl91cGRhdGVDb2x1bW5zO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzLmZvckVhY2goKG1xbCkgPT4ge1xuICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKGYpO1xuICAgIH0pO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzID0gY29sdW1ucy5tYXAoKHdpZHRoKSA9PiB7XG4gICAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt3aWR0aH1weClgKTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihmKTtcbiAgICAgIHJldHVybiBtcWw7XG4gICAgfSk7XG4gICAgZigpO1xuICB9LFxuXG4gIHVzZUN1c3RvbWl6ZXIoKSB7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBjb25zdCBjdXN0b21pemVyID0gbWFpbi5oYXNzLnN0YXRlc1snY3VzdG9taXplci5jdXN0b21pemVyJ107XG4gICAgaWYgKCFjdXN0b21pemVyKSByZXR1cm47XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcykge1xuICAgICAgaWYgKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCAmJiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykge1xuICAgICAgICBjdXN0b21pemVyLmF0dHJpYnV0ZXMuaGlkZV9hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBhdHRyKSkge1xuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNbYXR0cl0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQ29uZmlnUGFuZWwoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY29uc3QgaGFQYW5lbENvbmZpZyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtcGFuZWwtcmVzb2x2ZXInLFxuICAgICAgJ2hhLXBhbmVsLWNvbmZpZyddKTtcbiAgICBpZiAoIWhhUGFuZWxDb25maWcpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkudXBkYXRlQ29uZmlnUGFuZWwsIDEwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhQ29uZmlnTmF2aWdhdGlvbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhhUGFuZWxDb25maWcsIFtcbiAgICAgICdoYS1jb25maWctZGFzaGJvYXJkJyxcbiAgICAgICdoYS1jb25maWctbmF2aWdhdGlvbiddKTtcbiAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uKSB7XG4gICAgICAvLyBIYUNvbmZpZ05hdmlnYXRpb24gc3RhcnRlZCB1c2luZyBsb2NhbGl6ZSBvbiAyMS4wMS4yMDE4XG4gICAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplICYmICFoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2gpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoID0gdHJ1ZTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQgPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQ7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkID0gKGhhc3MsIHBhZ2UpID0+XG4gICAgICAgICAgcGFnZSA9PT0gJ2N1c3RvbXVpJyB8fCBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZChoYXNzLCBwYWdlKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdDdXN0b20gVUknIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ1NldFVJIHR3ZWFrcycgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWhhQ29uZmlnTmF2aWdhdGlvbi5wYWdlcy5zb21lKGNvbmYgPT4gY29uZiA9PT0gJ2N1c3RvbXVpJyB8fCBjb25mLmRvbWFpbiA9PT0gJ2N1c3RvbXVpJykpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLnB1c2goJ3BhZ2VzJywgaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplID8gJ2N1c3RvbXVpJyA6IHtcbiAgICAgICAgICBkb21haW46ICdjdXN0b211aScsXG4gICAgICAgICAgY2FwdGlvbjogJ0N1c3RvbSBVSScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTZXQgVUkgdHdlYWtzLicsXG4gICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0SGFDb25maWdDdXN0b21VaSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoYS1jb25maWctY3VzdG9tLXVpJyk7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLmlzV2lkZSA9IGhhUGFuZWxDb25maWcuaXNXaWRlO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5zZXRBdHRyaWJ1dGUoJ3BhZ2UtbmFtZScsICdjdXN0b211aScpO1xuICAgICAgcmV0dXJuIGhhQ29uZmlnQ3VzdG9tVWk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlyb25QYWdlcyA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhUGFuZWxDb25maWcsICdpcm9uLXBhZ2VzJyk7XG4gICAgaWYgKGlyb25QYWdlcykge1xuICAgICAgaWYgKGlyb25QYWdlcy5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICBpcm9uUGFnZXMuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICAgIGlyb25QYWdlcy5hZGRFdmVudExpc3RlbmVyKCdpcm9uLWl0ZW1zLWNoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJykpIHtcbiAgICAgICAgICAgIGlyb25QYWdlcy5zZWxlY3QoJ2N1c3RvbXVpJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhUGFuZWxDb25maWcuc2hhZG93Um9vdCkge1xuICAgICAgY29uc3Qgcm9vdCA9IGhhUGFuZWxDb25maWcuc2hhZG93Um9vdCB8fCBoYVBhbmVsQ29uZmlnO1xuICAgICAgaWYgKHJvb3QubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZpc2libGUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpO1xuICAgICAgcm9vdC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSB2aXNpYmxlID8gJycgOiAnbm9uZSc7XG4gICAgfSBlbHNlIGlmIChoYVBhbmVsQ29uZmlnLnJvdXRlck9wdGlvbnMgJiYgaGFQYW5lbENvbmZpZy5yb3V0ZXJPcHRpb25zLnJvdXRlcykge1xuICAgICAgaWYgKCFoYVBhbmVsQ29uZmlnLnJvdXRlck9wdGlvbnMucm91dGVzLmN1c3RvbXVpKSB7XG4gICAgICAgIGhhUGFuZWxDb25maWcucm91dGVyT3B0aW9ucy5yb3V0ZXMuY3VzdG9tdWkgPSB7XG4gICAgICAgICAgdGFnOiAnaGEtY29uZmlnLWN1c3RvbS11aScsXG4gICAgICAgICAgbG9hZDogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCksXG4gICAgICAgIH07XG4gICAgICAgIC8vIEN1c3RvbVVJIHBhbmVsIGlzIHRoZSBlbnRyeXBvaW50LCBzbyB3ZSBuZWVkIHRvIHJlbG9hZCB0aGUgcGFnZS5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJykpIHtcbiAgICAgICAgICBoYVBhbmVsQ29uZmlnLnVwZGF0ZShuZXcgTWFwKFtbJ3JvdXRlJywgdW5kZWZpbmVkXV0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsU3RhdGVzSG9vaygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaG9tZS1hc3Npc3RhbnQnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAoIWhvbWVBc3Npc3RhbnQgfHwgIWhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzKSByZXR1cm47XG4gICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZSA9IGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzO1xuICAgICAgaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MgPSBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGNvbnN0IHsgaGFzcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKG9iai5zdGF0ZXMpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhvYmouc3RhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG9iai5zdGF0ZXNba2V5XTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuX2N1aV9rZWVwKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBuZXdFbnRpdHkgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBvYmouc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgICAgaWYgKGhhc3Muc3RhdGVzICYmIGVudGl0eSAhPT0gaGFzcy5zdGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgICAvLyBOZXcgc3RhdGUgYXJyaXZlZC4gUHV0IG1vZGlmaWVkIHN0YXRlIGluLlxuICAgICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSAhPT0gbmV3RW50aXR5KSB7XG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHNhbWUgc3RhdGUgYnV0IGNvbnRlbnRzIGNoYW5nZWQgZHVlIHRvIG90aGVyIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIG9iaik7XG4gICAgICAgIGlmIChvYmoudGhlbWVzICYmIGhhc3MuX3RoZW1lV2FpdGVycykge1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycy5mb3JFYWNoKHdhaXRlciA9PiB3YWl0ZXIuc3RhdGVDaGFuZ2VkKHdhaXRlci5zdGF0ZSkpO1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAobWFpbi5oYXNzICYmIG1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgICAgbWFpbi5fdXBkYXRlSGFzcyh7IHN0YXRlczogbWFpbi5oYXNzLnN0YXRlcyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsUGFydGlhbENhcmRzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdwYXJ0aWFsLWNhcmRzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3BhcnRpYWwtY2FyZHMnKTtcbiAgICAgIGlmICghcGFydGlhbENhcmRzIHx8ICFwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlcikgcmV0dXJuO1xuICAgICAgcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIgPSAoaGFzcywgZW50aXR5SWQpID0+IHtcbiAgICAgICAgaWYgKGhhc3Muc3RhdGVzW2VudGl0eUlkXS5hdHRyaWJ1dGVzLmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBleGNsdWRlcyA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMgJiYgZW50aXR5LmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVFbnRpdHlJZCA9IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSkgcmV0dXJuO1xuICAgICAgICAgICAgZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSA9IGVudGl0eTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy52aWV3KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdFbnRpdGllcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXModmlld0VudGl0aWVzKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICBpZCA9PiB2aWV3RW50aXRpZXNbaWRdLmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZXhjbHVkZXNbaWRdID0gdmlld0VudGl0aWVzW2lkXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIWV4Y2x1ZGVzW2VudGl0eUlkXTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGVsZW1lbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICAgIGlmICgha2xhc3MgfHwgIWtsYXNzLnByb3RvdHlwZSkgcmV0dXJuO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGtsYXNzLnByb3RvdHlwZSwgJ2xvY2FsaXplJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tTG9jYWxpemUodikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVPYmogJiYgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXN0b21Mb2NhbGl6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KCkge30sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgdGhlbWluZyBcInJlZ3VsYXJcIiB0b3AgYmFkZ2VzLlxuICBpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICAgIGlmICghaGFTdGF0ZUxhYmVsQmFkZ2UgfHwgIWhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQpIHJldHVybjtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAgIC8vIFRPRE86IENhbGwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzID0gdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycy5wdXNoKHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdGF0ZS1iYWRnZScpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtYmFkZ2UnKTtcbiAgICAgIGlmICghc3RhdGVCYWRnZSkgcmV0dXJuO1xuICAgICAgaWYgKHN0YXRlQmFkZ2UucHJvdG90eXBlLl91cGRhdGVJY29uQXBwZWFyYW5jZSkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlID0gc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlO1xuICAgICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgICBzdGF0ZUJhZGdlLnByb3RvdHlwZS5fdXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBmdW5jdGlvbiBjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZShzdGF0ZU9iaikge1xuICAgICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJC5pY29uLnN0eWxlLCB7XG4gICAgICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZS5jYWxsKHRoaXMsIHN0YXRlT2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZWQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxVcGRhdGVkID0gc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlZDtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlZCA9IGZ1bmN0aW9uIGN1c3RvbVVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgICAgICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKCdzdGF0ZU9iaicpKSByZXR1cm47XG4gICAgICAgICAgY29uc3QgeyBzdGF0ZU9iaiB9ID0gdGhpcztcbiAgICAgICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5pY29uX2NvbG9yICYmICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9pY29uLnN0eWxlLCB7XG4gICAgICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxVcGRhdGVkLmNhbGwodGhpcywgY2hhbmdlZFByb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbEhhQXR0cmlidXRlcygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtYXR0cmlidXRlcycpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaGFBdHRyaWJ1dGVzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1hdHRyaWJ1dGVzJyk7XG4gICAgICBpZiAoIWhhQXR0cmlidXRlcyB8fCAhaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5IHx8XG4gICAgICAgICAhd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsKSByZXR1cm47XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5ID1cbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpLmNvbmNhdChcbiAgICAgICAgICAgIGV4dHJhRmlsdGVycyA/IGV4dHJhRmlsdGVycy5zcGxpdCgnLCcpIDogW10pO1xuICAgICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxIYUZvcm1DdXN0b21pemUoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLWZvcm0tY3VzdG9taXplJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYUZvcm1DdXN0b21pemUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWZvcm0tY3VzdG9taXplJyk7XG4gICAgICBpZiAoIWhhRm9ybUN1c3RvbWl6ZSkge1xuICAgICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSwgMTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSkgcmV0dXJuO1xuICAgICAgd2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lID0gdHJ1ZTtcblxuICAgICAgaWYgKCF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUgPVxuICAgICAgICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldXG4gICAgICAgICAgICAgICAgfHwgeyB0eXBlOiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdE9wZW5PYmplY3Qoa2V5LCBjb25maWcudHlwZSA9PT0gJ2pzb24nID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMpIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyA9XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgICAgICAgICBsb2NhbEF0dHJpYnV0ZXMsIGdsb2JhbEF0dHJpYnV0ZXMsIGV4aXN0aW5nQXR0cmlidXRlcywgbmV3QXR0cmlidXRlcykge1xuICAgICAgICAgICAgY29uc3Qga25vd25LZXlzID1cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25mID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmYgJiYgKCFjb25mLmRvbWFpbnMgfHwgIXRoaXMuZW50aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmYuZG9tYWlucy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4odGhpcy5lbnRpdHkpKSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGxvY2FsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZ2xvYmFsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZXhpc3RpbmdBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhuZXdBdHRyaWJ1dGVzKSk7XG4gICAgICAgICAgICByZXR1cm4ga25vd25LZXlzLnNvcnQoKS5jb25jYXQoJ090aGVyJyk7XG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsQ2xhc3NIb29rcygpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSA9IHRydWU7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxQYXJ0aWFsQ2FyZHMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlc0hvb2soKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZUJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUF0dHJpYnV0ZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NlbmUnKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NyaXB0Jyk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxDbGFzc0hvb2tzKCk7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIW1haW4uaGFzcyB8fCAhbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgLy8gQ29ubmVjdGlvbiB3YXNuJ3QgbWFkZSB5ZXQuIFRyeSBpbiAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbml0LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmN1c3RvbVVJLmluaXREb25lID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS51c2VDdXN0b21pemVyKCk7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb24tY2hhbmdlZCcsIHdpbmRvdy5zZXRUaW1lb3V0LmJpbmQobnVsbCwgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzLCAxMDApKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5sb2coYExvYWRlZCBDdXN0b21VSSAke1ZFUlNJT059YCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgaWYgKCF3aW5kb3cuQ1VTVE9NX1VJX0xJU1QpIHtcbiAgICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVCA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QucHVzaCh7XG4gICAgICBuYW1lOiAnQ3VzdG9tVUknLFxuICAgICAgdmVyc2lvbjogVkVSU0lPTixcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXktZ2l0L2hvbWUtYXNzaXN0YW50LWN1c3RvbS11aScsXG4gICAgfSk7XG4gIH0sXG5cbiAgcnVuSG9va3MoKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUoKTtcbiAgfSxcblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhLWRldmljZS1uYW1lJykgfHwgJyc7XG4gIH0sXG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScsIG5hbWUgfHwgJycpO1xuICB9LFxuXG4gIGNvbXB1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uQm9keSA9ICh0ZW1wbGF0ZS5pbmRleE9mKCdyZXR1cm4nKSA+PSAwKSA/IHRlbXBsYXRlIDogYHJldHVybiBcXGAke3RlbXBsYXRlfVxcYDtgO1xuICAgIHRyeSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ2hhc3MnLCAnZW50aXRpZXMnLCAnZW50aXR5JywgJ2F0dHJpYnV0ZXMnLCAnYXR0cmlidXRlJywgJ3N0YXRlJywgZnVuY3Rpb25Cb2R5KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIHJldHVybiBmdW5jKGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGlmICgoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB8fCBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfSBpbiB0ZW1wbGF0ZSAke2Z1bmN0aW9uQm9keX1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9LFxufTtcbndpbmRvdy5jdXN0b21VSS5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCAnMjAxOTAzMjQnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==