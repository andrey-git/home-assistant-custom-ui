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

var DEFAULT_PANEL = "lovelace";
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

var DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch", "group", "automation"]);
/** Temperature units. */

var UNIT_C = "°C";
var UNIT_F = "°F";
/** Entity ID of the default view. */

var DEFAULT_VIEW_ENTITY_ID = "group.default_view";

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
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  var styles = _objectSpread({}, element._themes);

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

  if (!updateMeta) {
    return;
  }

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var CSSResult =
/*#__PURE__*/
function () {
  function CSSResult(cssText, safeToken) {
    _classCallCheck(this, CSSResult);

    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  _createClass(CSSResult, [{
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }, {
    key: "styleSheet",
    get: function get() {
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
  }]);

  return CSSResult;
}();
/**
 * Wrap a value for interpolation in a css tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */

var unsafeCSS = function unsafeCSS(value) {
  return new CSSResult(String(value), constructionToken);
};

var textFromCSSResult = function textFromCSSResult(value) {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else {
    throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
  }
};
/**
 * Template tag which which can be used with LitElement's `style` property to
 * set element styles. For security reasons, only literal string values may be
 * used. To incorporate non-literal values `unsafeCSS` may be used inside a
 * template string part.
 */


var css = function css(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var cssText = values.reduce(function (acc, v, idx) {
    return acc + textFromCSSResult(v) + strings[idx + 1];
  }, strings[0]);
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
var legacyCustomElement = function legacyCustomElement(tagName, clazz) {
  window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
  // subtype of the decorated class when clazz is typed as
  // `Constructor<HTMLElement>` for some reason.
  // `Constructor<HTMLElement>` is helpful to make sure the decorator is
  // applied to elements however.
  // tslint:disable-next-line:no-any

  return clazz;
};

var standardCustomElement = function standardCustomElement(tagName, descriptor) {
  var kind = descriptor.kind,
      elements = descriptor.elements;
  return {
    kind: kind,
    elements: elements,
    // This callback is called once the class is otherwise fully defined
    finisher: function finisher(clazz) {
      window.customElements.define(tagName, clazz);
    }
  };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * @param tagName the name of the custom element to define
 */


var customElement = function customElement(tagName) {
  return function (classOrDescriptor) {
    return typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
  };
};

var standardProperty = function standardProperty(options, element) {
  // When decorating an accessor, pass it through and add property metadata.
  // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
  // stomp over the user's accessor.
  if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
    return Object.assign({}, element, {
      finisher: function finisher(clazz) {
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
      initializer: function initializer() {
        if (typeof element.initializer === 'function') {
          this[element.key] = element.initializer.call(this);
        }
      },
      finisher: function finisher(clazz) {
        clazz.createProperty(element.key, options);
      }
    };
  }
};

var legacyProperty = function legacyProperty(options, proto, name) {
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
  return function (protoOrDescriptor, name) {
    return name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
  };
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @ExportDecoratedItems
 */

function query(selector) {
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
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
  return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
  name) {
    var descriptor = {
      get: function get() {
        return this.renderRoot.querySelectorAll(selector);
      },
      enumerable: true,
      configurable: true
    };
    return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}

var legacyQuery = function legacyQuery(descriptor, proto, name) {
  Object.defineProperty(proto, name, descriptor);
};

var standardQuery = function standardQuery(descriptor, element) {
  return {
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor: descriptor
  };
};

var standardEventOptions = function standardEventOptions(options, element) {
  return Object.assign({}, element, {
    finisher: function finisher(clazz) {
      Object.assign(clazz.prototype[element.key], options);
    }
  });
};

var legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
function legacyEventOptions(options, proto, name) {
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


var eventOptions = function eventOptions(options) {
  return (// Return value typed as any to prevent TypeScript from complaining that
    // standard decorator function signature does not match TypeScript decorator
    // signature
    // TODO(kschaaf): unclear why it was only failing on this decorator and not
    // the others
    function (protoOrDescriptor, name) {
      return name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
    }
  );
};

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
window.JSCompiler_renameProperty = function (prop, _obj) {
  return prop;
};

var defaultConverter = {
  toAttribute: function toAttribute(value, type) {
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
  fromAttribute: function fromAttribute(value, type) {
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

var notEqual = function notEqual(value, old) {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var microtaskPromise = Promise.resolve(true);
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
var STATE_HAS_CONNECTED = 1 << 5;
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */

var UpdatingElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(UpdatingElement, _HTMLElement);

  function UpdatingElement() {
    var _this;

    _classCallCheck(this, UpdatingElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UpdatingElement).call(this));
    _this._updateState = 0;
    _this._instanceProperties = undefined;
    _this._updatePromise = microtaskPromise;
    _this._hasConnectedResolver = undefined;
    /**
     * Map with keys for any properties that have changed since the last
     * update cycle with previous values.
     */

    _this._changedProperties = new Map();
    /**
     * Map with keys of properties that should be reflected when updated.
     */

    _this._reflectingProperties = undefined;

    _this.initialize();

    return _this;
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  _createClass(UpdatingElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    value: function initialize() {
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

  }, {
    key: "_saveInstanceProperties",
    value: function _saveInstanceProperties() {
      var _this2 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      this.constructor._classProperties.forEach(function (_v, p) {
        if (_this2.hasOwnProperty(p)) {
          var value = _this2[p];
          delete _this2[p];

          if (!_this2._instanceProperties) {
            _this2._instanceProperties = new Map();
          }

          _this2._instanceProperties.set(p, value);
        }
      });
    }
    /**
     * Applies previously saved instance properties.
     */

  }, {
    key: "_applyInstanceProperties",
    value: function _applyInstanceProperties() {
      var _this3 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      // tslint:disable-next-line:no-any
      this._instanceProperties.forEach(function (v, p) {
        return _this3[p] = v;
      });

      this._instanceProperties = undefined;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
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

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
    /**
     * Synchronizes property values when attributes change.
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, value) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
    }
  }, {
    key: "_propertyToAttribute",
    value: function _propertyToAttribute(name, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
      var ctor = this.constructor;

      var attr = ctor._attributeNameForProperty(name, options);

      if (attr !== undefined) {
        var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


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
  }, {
    key: "_attributeToProperty",
    value: function _attributeToProperty(name, value) {
      // Use tracking info to avoid deserializing attribute value if it was
      // just set from a property setter.
      if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
        return;
      }

      var ctor = this.constructor;

      var propName = ctor._attributeToPropertyMap.get(name);

      if (propName !== undefined) {
        var options = ctor._classProperties.get(propName) || defaultPropertyDeclaration; // mark state reflecting

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

  }, {
    key: "_requestUpdate",
    value: function _requestUpdate(name, oldValue) {
      var shouldRequestUpdate = true; // If we have a property key, perform property update steps.

      if (name !== undefined) {
        var ctor = this.constructor;
        var options = ctor._classProperties.get(name) || defaultPropertyDeclaration;

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

  }, {
    key: "requestUpdate",
    value: function requestUpdate(name, oldValue) {
      this._requestUpdate(name, oldValue);

      return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */

  }, {
    key: "_enqueueUpdate",
    value: function () {
      var _enqueueUpdate2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this4 = this;

        var resolve, reject, previousUpdatePromise, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Mark state updating...
                this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                previousUpdatePromise = this._updatePromise;
                this._updatePromise = new Promise(function (res, rej) {
                  resolve = res;
                  reject = rej;
                });
                _context.prev = 3;
                _context.next = 6;
                return previousUpdatePromise;

              case 6:
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);

              case 10:
                if (this._hasConnected) {
                  _context.next = 13;
                  break;
                }

                _context.next = 13;
                return new Promise(function (res) {
                  return _this4._hasConnectedResolver = res;
                });

              case 13:
                _context.prev = 13;
                result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                // enable coordinating updates with a scheduler. Note, the result is
                // checked to avoid delaying an additional microtask unless we need to.

                if (!(result != null)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 18;
                return result;

              case 18:
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t1 = _context["catch"](13);
                reject(_context.t1);

              case 23:
                resolve(!this._hasRequestedUpdate);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8], [13, 20]]);
      }));

      function _enqueueUpdate() {
        return _enqueueUpdate2.apply(this, arguments);
      }

      return _enqueueUpdate;
    }()
  }, {
    key: "performUpdate",

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
    value: function performUpdate() {
      // Mixin instance properties once, if they exist.
      if (this._instanceProperties) {
        this._applyInstanceProperties();
      }

      var shouldUpdate = false;
      var changedProperties = this._changedProperties;

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
  }, {
    key: "_markUpdated",
    value: function _markUpdated() {
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

  }, {
    key: "shouldUpdate",

    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */
    value: function shouldUpdate(_changedProperties) {
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

  }, {
    key: "update",
    value: function update(_changedProperties) {
      var _this5 = this;

      if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
        // Use forEach so this works even if for/of loops are compiled to for
        // loops expecting arrays
        this._reflectingProperties.forEach(function (v, k) {
          return _this5._propertyToAttribute(k, _this5[k], v);
        });

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

  }, {
    key: "updated",
    value: function updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "firstUpdated",
    value: function firstUpdated(_changedProperties) {}
  }, {
    key: "_hasConnected",
    get: function get() {
      return this._updateState & STATE_HAS_CONNECTED;
    }
  }, {
    key: "_hasRequestedUpdate",
    get: function get() {
      return this._updateState & STATE_UPDATE_REQUESTED;
    }
  }, {
    key: "hasUpdated",
    get: function get() {
      return this._updateState & STATE_HAS_UPDATED;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this._updatePromise;
    }
  }], [{
    key: "_ensureClassProperties",

    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */

    /** @nocollapse */
    value: function _ensureClassProperties() {
      var _this6 = this;

      // ensure private storage for property declarations.
      if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
        this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

        var superProperties = Object.getPrototypeOf(this)._classProperties;

        if (superProperties !== undefined) {
          superProperties.forEach(function (v, k) {
            return _this6._classProperties.set(k, v);
          });
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

  }, {
    key: "createProperty",
    value: function createProperty(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

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

      var key = _typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
      Object.defineProperty(this.prototype, name, {
        // tslint:disable-next-line:no-any no symbol in index
        get: function get() {
          return this[key];
        },
        set: function set(value) {
          // tslint:disable-next-line:no-any no symbol in index
          var oldValue = this[name]; // tslint:disable-next-line:no-any no symbol in index

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

  }, {
    key: "finalize",
    value: function finalize() {
      if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) && this.finalized) {
        return;
      } // finalize any superclasses


      var superCtor = Object.getPrototypeOf(this);

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
        var props = this.properties; // support symbols in properties (IE11 does not support this)

        var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;
            // note, use of `any` is due to TypeSript lack of support for symbol in
            // index types
            // tslint:disable-next-line:no-any no symbol in index
            this.createProperty(p, props[p]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */

  }, {
    key: "_attributeNameForProperty",
    value: function _attributeNameForProperty(name, options) {
      var attribute = options.attribute;
      return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */

  }, {
    key: "_valueHasChanged",
    value: function _valueHasChanged(value, old) {
      var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
      return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */

  }, {
    key: "_propertyValueFromAttribute",
    value: function _propertyValueFromAttribute(value, options) {
      var type = options.type;
      var converter = options.converter || defaultConverter;
      var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
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

  }, {
    key: "_propertyValueToAttribute",
    value: function _propertyValueToAttribute(value, options) {
      if (options.reflect === undefined) {
        return;
      }

      var type = options.type;
      var converter = options.converter;
      var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
      return toAttribute(value, type);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this7 = this;

      // note: piggy backing on this to ensure we're finalized.
      this.finalize();
      var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays

      this._classProperties.forEach(function (v, p) {
        var attr = _this7._attributeNameForProperty(p, v);

        if (attr !== undefined) {
          _this7._attributeToPropertyMap.set(attr, p);

          attributes.push(attr);
        }
      });

      return attributes;
    }
  }]);

  return UpdatingElement;
}(_wrapNativeSuper(HTMLElement));
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

function arrayFlat(styles) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  for (var i = 0, length = styles.length; i < length; i++) {
    var value = styles[i];

    if (Array.isArray(value)) {
      arrayFlat(value, result);
    } else {
      result.push(value);
    }
  }

  return result;
}
/** Deeply flattens styles array. Uses native flat if available. */


var flattenStyles = function flattenStyles(styles) {
  return styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
};

var LitElement =
/*#__PURE__*/
function (_UpdatingElement) {
  _inherits(LitElement, _UpdatingElement);

  function LitElement() {
    _classCallCheck(this, LitElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(LitElement).apply(this, arguments));
  }

  _createClass(LitElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */
    value: function initialize() {
      _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);

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

  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
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

  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var styles = this.constructor._styles;

      if (styles.length === 0) {
        return;
      } // There are three separate cases here based on Shadow DOM support.
      // (1) shadowRoot polyfilled: use ShadyCSS
      // (2) shadowRoot.adoptedStyleSheets available: use it.
      // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
      // rendering


      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
          return s.cssText;
        }), this.localName);
      } else if (_lib_css_tag_js__WEBPACK_IMPORTED_MODULE_4__["supportsAdoptingStyleSheets"]) {
        this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
          return s.styleSheet;
        });
      } else {
        // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
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

  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this = this;

      _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties);

      var templateResult = this.render();

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

        this.constructor._styles.forEach(function (s) {
          var style = document.createElement('style');
          style.textContent = s.cssText;

          _this.renderRoot.appendChild(style);
        });
      }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */

  }, {
    key: "render",
    value: function render() {}
  }], [{
    key: "finalize",

    /** @nocollapse */
    value: function finalize() {
      _get(_getPrototypeOf(LitElement), "finalize", this).call(this); // Prepare styling that is stamped at first render time. Styling
      // is built from user provided `styles` or is inherited from the superclass.


      this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ? this._getUniqueStyles() : this._styles || [];
    }
    /** @nocollapse */

  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      // Take care not to call `this.styles` multiple times since this generates
      // new CSSResults each time.
      // TODO(sorvell): Since we do not cache CSSResults by input, any
      // shared styles will generate new stylesheet objects, which is wasteful.
      // This should be addressed when a browser ships constructable
      // stylesheets.
      var userStyles = this.styles;
      var styles = [];

      if (Array.isArray(userStyles)) {
        var flatStyles = flattenStyles(userStyles); // As a performance optimization to avoid duplicated styling that can
        // occur especially when composing via subclassing, de-duplicate styles
        // preserving the last item in the list. The last item is kept to
        // try to preserve cascade order with the assumption that it's most
        // important that last added styles override previous styles.

        var styleSet = flatStyles.reduceRight(function (set, s) {
          set.add(s); // on IE set.add does not return the set.

          return set;
        }, new Set()); // Array.from does not work on Set in IE

        styleSet.forEach(function (v) {
          return styles.unshift(v);
        });
      } else if (userStyles) {
        styles.push(userStyles);
      }

      return styles;
    }
  }]);

  return LitElement;
}(_lib_updating_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var DefaultTemplateProcessor =
/*#__PURE__*/
function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }

  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",

    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    value: function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];

      if (prefix === '.') {
        var _comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);

        return _comitter.parts;
      }

      if (prefix === '@') {
        return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
      }

      if (prefix === '?') {
        return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
      }

      var comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
      return comitter.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */

  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
  }]);

  return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new DefaultTemplateProcessor();

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
var directives = new WeakMap();
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

var directive = function directive(f) {
  return function () {
    var d = f.apply(void 0, arguments);
    directives.set(d, true);
    return d;
  };
};
var isDirective = function isDirective(o) {
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
var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */

var reparentNodes = function reparentNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var node = start;

  while (node !== end) {
    var n = node.nextSibling;
    container.insertBefore(node, before);
    node = n;
  }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */

var removeNodes = function removeNodes(container, startNode) {
  var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var node = startNode;

  while (node !== endNode) {
    var n = node.nextSibling;
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

var walkerNodeFilter = 133
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
  var content = template.element.content,
      parts = template.parts;
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var part = parts[partIndex];
  var nodeIndex = -1;
  var removeCount = 0;
  var nodesToRemoveInTemplate = [];
  var currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    var node = walker.currentNode; // End removal if stepped past the removing node

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

  nodesToRemoveInTemplate.forEach(function (n) {
    return n.parentNode.removeChild(n);
  });
}

var countNodes = function countNodes(node) {
  var count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  for (var i = startIndex + 1; i < parts.length; i++) {
    var part = parts[i];

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


function insertNodeIntoTemplate(template, node) {
  var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var content = template.element.content,
      parts = template.parts; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var insertCount = 0;
  var walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    var walkerNode = walker.currentNode;

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
var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

var nothing = {};

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
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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






var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};
/**
 * Sets attribute values for AttributeParts, so that the value is only set once
 * even if there are multiple parts for an attribute.
 */

var AttributeCommitter =
/*#__PURE__*/
function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);

    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var text = '';

      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = this.parts[i];

        if (part !== undefined) {
          var v = part.value;

          if (v != null && (Array.isArray(v) || // tslint:disable-next-line:no-any
          typeof v !== 'string' && v[Symbol.iterator])) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            text += typeof v === 'string' ? v : String(v);
          }
        }
      }

      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);

  return AttributeCommitter;
}();
var AttributePart =
/*#__PURE__*/
function () {
  function AttributePart(comitter) {
    _classCallCheck(this, AttributePart);

    this.value = undefined;
    this.committer = comitter;
  }

  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
        this.value = value; // If the value is a not a directive, dirty the committer so that it'll
        // call setAttribute. If the value is a directive, it'll dirty the
        // committer if it calls setValue().

        if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
        var directive = this.value;
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      this.committer.commit();
    }
  }]);

  return AttributePart;
}();
var NodePart =
/*#__PURE__*/
function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);

    this.value = undefined;
    this._pendingValue = undefined;
    this.options = options;
  }
  /**
   * Inserts this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
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

  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

      part._insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Appends this part after `ref`
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      var value = this._pendingValue;

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
  }, {
    key: "_insert",
    value: function _insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "_commitNode",
    value: function _commitNode(value) {
      if (this.value === value) {
        return;
      }

      this.clear();

      this._insert(value);

      this.value = value;
    }
  }, {
    key: "_commitText",
    value: function _commitText(value) {
      var node = this.startNode.nextSibling;
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
  }, {
    key: "_commitTemplateResult",
    value: function _commitTemplateResult(value) {
      var template = this.options.templateFactory(value);

      if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] && this.value.template === template) {
        this.value.update(value.values);
      } else {
        // Make sure we propagate the template processor from the TemplateResult
        // so that we use its syntax extension, etc. The template factory comes
        // from the render function options so that it can control template
        // caching and preprocessing.
        var instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);

        var fragment = instance._clone();

        instance.update(value.values);

        this._commitNode(fragment);

        this.value = instance;
      }
    }
  }, {
    key: "_commitIterable",
    value: function _commitIterable(value) {
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


      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
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
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (partIndex < itemParts.length) {
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);

  return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

var BooleanAttributePart =
/*#__PURE__*/
function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);

    this.value = undefined;
    this._pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      var value = !!this._pendingValue;

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
  }]);

  return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

var PropertyCommitter =
/*#__PURE__*/
function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);

  function PropertyCommitter(element, name, strings) {
    var _this;

    _classCallCheck(this, PropertyCommitter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyCommitter).call(this, element, name, strings));
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }

  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }

      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false; // tslint:disable-next-line:no-any

        this.element[this.name] = this._getValue();
      }
    }
  }]);

  return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart =
/*#__PURE__*/
function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);

  function PropertyPart() {
    _classCallCheck(this, PropertyPart);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyPart).apply(this, arguments));
  }

  return PropertyPart;
}(AttributePart); // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

var eventOptionsSupported = false;

try {
  var options = {
    get capture() {
      eventOptionsSupported = true;
      return false;
    }

  }; // tslint:disable-next-line:no-any

  window.addEventListener('test', options, options); // tslint:disable-next-line:no-any

  window.removeEventListener('test', options, options);
} catch (_e) {}

var EventPart =
/*#__PURE__*/
function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;

    _classCallCheck(this, EventPart);

    this.value = undefined;
    this._pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this._boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }

  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this._pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
        var directive = this._pendingValue;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      var newListener = this._pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

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
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);

  return EventPart;
}(); // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};

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



var parts = new WeakMap();
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

var render = function render(result, container, options) {
  var part = parts.get(container);

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

var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
  return "".concat(type, "--").concat(scopeName);
};

var compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected." + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and" + "@webcomponents/shadycss@1.3.1.");
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
  return function (result) {
    var cacheKey = getTemplateCacheKey(result.type, scopeName);
    var templateCache = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(cacheKey);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].set(cacheKey, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    }

    var key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_6__["marker"]);
    template = templateCache.keyString.get(key);

    if (template === undefined) {
      var element = result.getTemplateElement();

      if (compatibleShadyCSSVersion) {
        window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }

      template = new _template_js__WEBPACK_IMPORTED_MODULE_6__["Template"](result, element);
      templateCache.keyString.set(key, template);
    }

    templateCache.stringsArray.set(result.strings, template);
    return template;
  };
};

var TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
  TEMPLATE_TYPES.forEach(function (type) {
    var templates = _template_factory_js__WEBPACK_IMPORTED_MODULE_3__["templateCaches"].get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(function (template) {
        var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

        var styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(function (s) {
          styles.add(s);
        });
        Object(_modify_template_js__WEBPACK_IMPORTED_MODULE_1__["removeNodesFromTemplate"])(template, styles);
      });
    }
  });
};

var shadyRenderSet = new Set();
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

var prepareTemplateStyles = function prepareTemplateStyles(renderedDOM, template, scopeName) {
  shadyRenderSet.add(scopeName); // Move styles out of rendered DOM and store.

  var styles = renderedDOM.querySelectorAll('style'); // If there are no styles, skip unnecessary work

  if (styles.length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
    return;
  }

  var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (var i = 0; i < styles.length; i++) {
    var style = styles[i];
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
    var _style = template.element.content.querySelector('style');

    renderedDOM.insertBefore(_style.cloneNode(true), renderedDOM.firstChild);
  } else {
    // When not in native Shadow DOM, at this point ShadyCSS will have
    // removed the style from the lit template and parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    template.element.content.insertBefore(condensedStyle, template.element.content.firstChild);
    var removes = new Set();
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


var render = function render(result, container, options) {
  var scopeName = options.scopeName;
  var hasRendered = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].has(container);
  var needsScoping = container instanceof ShadowRoot && compatibleShadyCSSVersion && result instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_5__["TemplateResult"]; // Handle first render to a scope specially...

  var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
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
    var part = _render_js__WEBPACK_IMPORTED_MODULE_2__["parts"].get(renderContainer);
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
  var templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  var template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  var key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches = new Map();

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var TemplateInstance =
/*#__PURE__*/
function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);

    this._parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var part = _step.value;

          if (part !== undefined) {
            part.setValue(values[i]);
          }

          i++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _part = _step2.value;

          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      var _this = this;

      // When using the Custom Elements polyfill, clone the node, rather than
      // importing it, to keep the fragment in the template's document. This
      // leaves the fragment inert so custom elements won't upgrade and
      // potentially modify their contents by creating a polyfilled ShadowRoot
      // while we traverse the tree.
      var fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var parts = this.template.parts;
      var partIndex = 0;
      var nodeIndex = 0;

      var _prepareInstance = function _prepareInstance(fragment) {
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
        // null
        var walker = document.createTreeWalker(fragment, 133
        /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
        , null, false);
        var node = walker.nextNode(); // Loop through all the nodes and parts of a template

        while (partIndex < parts.length && node !== null) {
          var part = parts[partIndex]; // Consecutive Parts may have the same node index, in the case of
          // multiple bound attributes on an element. So each iteration we either
          // increment the nodeIndex, if we aren't on a node with a part, or the
          // partIndex if we are. By not incrementing the nodeIndex when we find a
          // part, we allow for the next part to be associated with the current
          // node if neccessasry.

          if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
            _this._parts.push(undefined);

            partIndex++;
          } else if (nodeIndex === part.index) {
            if (part.type === 'node') {
              var _part2 = _this.processor.handleTextExpression(_this.options);

              _part2.insertAfterNode(node.previousSibling);

              _this._parts.push(_part2);
            } else {
              var _this$_parts;

              (_this$_parts = _this._parts).push.apply(_this$_parts, _toConsumableArray(_this.processor.handleAttributeExpressions(node, part.name, part.strings, _this.options)));
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
  }]);

  return TemplateInstance;
}();

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var TemplateResult =
/*#__PURE__*/
function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var endIndex = this.strings.length - 1;
      var html = '';

      for (var i = 0; i < endIndex; i++) {
        var s = this.strings[i]; // This exec() call does two things:
        // 1) Appends a suffix to the bound attribute name to opt out of special
        // attribute value parsing that IE11 and Edge do, like for style and
        // many SVG attributes. The Template class also appends the same suffix
        // when looking up attributes to create Parts.
        // 2) Adds an unquoted-attribute-safe marker for the first expression in
        // an attribute. Subsequent attribute expressions will use node markers,
        // and this is safe since attributes with multiple expressions are
        // guaranteed to be quoted.

        var match = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);

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
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      template.innerHTML = this.getHTML();
      return template;
    }
  }]);

  return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */

var SVGTemplateResult =
/*#__PURE__*/
function (_TemplateResult) {
  _inherits(SVGTemplateResult, _TemplateResult);

  function SVGTemplateResult() {
    _classCallCheck(this, SVGTemplateResult);

    return _possibleConstructorReturn(this, _getPrototypeOf(SVGTemplateResult).apply(this, arguments));
  }

  _createClass(SVGTemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);

      var content = template.content;
      var svgElement = content.firstChild;
      content.removeChild(svgElement);
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
      return template;
    }
  }]);

  return SVGTemplateResult;
}(TemplateResult);

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
/**
 * Suffix appended to all bound attribute names.
 */

var boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */

var Template = function Template(result, element) {
  var _this = this;

  _classCallCheck(this, Template);

  this.parts = [];
  this.element = element;
  var index = -1;
  var partIndex = 0;
  var nodesToRemove = [];

  var _prepareTemplate = function _prepareTemplate(template) {
    var content = template.content; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
    // null

    var walker = document.createTreeWalker(content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    var lastPartIndex = 0;

    while (walker.nextNode()) {
      index++;
      var node = walker.currentNode;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            var attributes = node.attributes; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondance between part index and attribute index.

            var count = 0;

            for (var i = 0; i < attributes.length; i++) {
              if (attributes[i].value.indexOf(marker) >= 0) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              var stringForPart = result.strings[partIndex]; // Find the attribute name

              var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              var attributeValue = node.getAttribute(attributeLookupName);
              var strings = attributeValue.split(markerRegex);

              _this.parts.push({
                type: 'attribute',
                index: index,
                name: name,
                strings: strings
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
          var data = node.data;

          if (data.indexOf(marker) >= 0) {
            var parent = node.parentNode;

            var _strings = data.split(markerRegex);

            var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (var _i = 0; _i < lastIndex; _i++) {
              parent.insertBefore(_strings[_i] === '' ? createMarker() : document.createTextNode(_strings[_i]), node);

              _this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (_strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = _strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;

              _parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;

            _this.parts.push({
              type: 'node',
              index: index
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
            var _i2 = -1;

            while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              _this.parts.push({
                type: 'node',
                index: -1
              });
            }
          }
        }
    }
  };

  _prepareTemplate(element); // Remove text binding nodes after the walk to not disturb the TreeWalker


  for (var _i3 = 0; _i3 < nodesToRemove.length; _i3++) {
    var n = nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};
var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
}; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

var createMarker = function createMarker() {
  return document.createComment('');
};
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

var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

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

var html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */

var svg = function svg(strings) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
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


/* harmony default export */ __webpack_exports__["default"] = (function (superClass) {
  /**
   * @extends HTMLElement
   */
  var CuiBaseElement =
  /*#__PURE__*/
  function (_superClass) {
    _inherits(CuiBaseElement, _superClass);

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
  }(superClass);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



function loadCustomUI() {
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
        Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(this, elementName ? elementName.toUpperCase() : 'DIV', {
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
}

if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(function () {
    return loadCustomUI();
  });
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
        Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_1__["default"])(element, hass.themes || {
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
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks.js */ "./src/utils/hooks.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"ha-style\"></style>\n    <app-header-layout has-scrolling-region>\n      <app-header slot=\"header\" fixed>\n        <app-toolbar>\n          <paper-icon-button\n            icon='hass:arrow-left'\n            @click=\"", "\"\n          ></paper-icon-button>\n          <div main-title>Custom UI settings</div>\n        </app-toolbar>\n      </app-header>\n\n      <ha-config-section .is-wide=\"", "\">\n        <paper-card heading='Device name'>\n          <div class='card-content'>\n            Set device name so that you can reference it in per-device settings\n            <paper-input\n              label='Name'\n              .value=\"@{this.name}\"\n            ></paper-input>\n          </div>\n        </paper-card>\n      </ha-config-section>\n    </app-header-layout>\n    "]);

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
function (_LitElement) {
  _inherits(HaConfigCustomUi, _LitElement);

  function HaConfigCustomUi() {
    _classCallCheck(this, HaConfigCustomUi);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigCustomUi).apply(this, arguments));
  }

  _createClass(HaConfigCustomUi, [{
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this._backHandler, this.isWide);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldval, newval) {
      if (name === 'name') {
        this.nameChanged(newval);
      }

      _get(_getPrototypeOf(HaConfigCustomUi.prototype), "attributeChangedCallback", this).call(this, name, oldval, newval);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaConfigCustomUi.prototype), "connectedCallback", this).call(this);

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
      var event = new CustomEvent('location-changed');
      this.dispatchEvent(event);
    }
  }], [{
    key: "properties",
    get: function get() {
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
  }]);

  return HaConfigCustomUi;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

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
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          margin: var(--ha-themed-slider-margin, initial);\n        }\n        .disable-off-when-min {\n          --paper-slider-pin-start-color:  var(--paper-slider-pin-color);\n        }\n\n        .disable-off-when-min.is-on {\n          --paper-slider-knob-start-color: var(--paper-slider-knob-color);\n          --paper-slider-knob-start-border-color: var(--paper-slider-knob-color);\n        }\n        paper-slider {\n          margin: 4px 0;\n          max-width: 100%;\n          min-width: 100px;\n          width: var(--ha-paper-slider-width, 200px);\n        }\n      </style>\n\n      <paper-slider\n           id='slider'\n           min='[[_themedMin]]'\n           max='[[_computeAttribute(theme, \"max\", max)]]'\n           pin='[[_computeAttribute(theme, \"pin\", pin)]]'\n           class$='[[computeClass(theme, isOn, _themedMin)]]' value='[[value]]'\n           on-change='valueChanged'>\n      </paper-slider>\n      "]);

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



function loadCustomUI() {
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
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(HaThemedSlider.prototype), "connectedCallback", this).call(this);

        this.$.slider._keyBindings = this.$.slider._keyBindings || {};
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
}

if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(function () {
    return loadCustomUI();
  });
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









function loadCustomUI() {
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

          Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(this._container, this.hass.themes || {
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

        Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_ts__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'HA-BADGES-CARD', {
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

        Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(themeTarget, hass.themes || {
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

        Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_ts__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (secondaryStateCardType || customStateCardType || "STATE-CARD-".concat(originalStateCardType)).toUpperCase(), params);
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
}

if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(function () {
    return loadCustomUI();
  });
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style is=\"custom-style\" include=\"iron-flex iron-flex-alignment iron-flex-factors\"></style>\n      <style>\n        #container {\n          position: relative;\n        }\n        .second-line, .state-and-toggle, .state-info {\n          max-width: 100%;\n        }\n        .nowrap .state-and-toggle {\n          overflow: hidden;\n          flex-grow: 0;\n        }\n        .nowrap .second-line {\n          overflow: hidden;\n        }\n\n        .second-line {\n          padding-top: 20px;\n          padding-bottom: 16px;\n          margin-top: -20px;\n          margin-bottom: -16px;\n        }\n        .stretch .second-line, .stretch ha-themed-slider {\n          width: 100%;\n          --ha-paper-slider-width: 100%;\n        }\n        .nowrap .state-info {\n          min-width: initial;\n        }\n        ha-themed-slider, .top-wrapper {\n          min-width: 100px;\n          max-width: 100%;\n        }\n        .top-wrapper.stretch {\n          display: block;\n        }\n\n        .hidden {\n          display: none;\n        }\n      </style>\n\n      <div id='container' class$='horizontal layout flex top-wrapper [[_computeWrapClass(mode, stretchSlider, lineTooLong, inDialog)]]'>\n        <div class='horizontal layout justified flex-auto state-and-toggle'>\n          <state-info\n              class='state-info flex-auto'\n              hass='[[hass]]'\n              state-obj='[[stateObj]]'\n              in-dialog='[[showLastChanged(stateObj, inDialog, extra)]]'\n              secondary-line$='[[hasExtra(extra)]]'\n          >\n            <template is='dom-repeat' items='[[extra]]'>\n              <div>[[item]]</div>\n            </template>\n          </state-info>\n          <template is='dom-if' if='[[breakSlider]]' class='hidden'>\n            <dynamic-with-extra hass='[[hass]]' state-obj='[[stateObj]]' control-element='[[controlElement]]' in-dialog='[[inDialog]]'></dynamic-with-extra>\n          </template>\n        </div>\n        <template is='dom-if' if='[[showSlider]]' restamp>\n          <div class='horizontal layout flex-auto end-justified second-line'>\n            <ha-themed-slider\n              id='slider'\n              max=[[max]]\n              min=[[min]]\n              theme='[[stateObj.attributes.slider_theme]]'\n              is-on='[[isOn(stateObj, nameOn)]]'\n              value='{{sliderValue}}'\n              disable-off-when-min='{{disableOffWhenMin}}'\n              on-change='sliderChanged'\n              on-click='stopPropagation'>\n            </ha-themed-slider>\n            <template is='dom-if' if='[[!breakSlider]]'>\n              <dynamic-with-extra hass='[[hass]]' state-obj='[[stateObj]]' control-element='[[controlElement]]' in-dialog='[[inDialog]]'></dynamic-with-extra>\n            </template>\n          </div>\n        </template>\n      </div>\n      "]);

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






function loadCustomUI() {
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
  }(Object(_cui_base_element_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Polymer.Element));

  customElements.define('state-card-with-slider', StateCardWithSlider);
}

if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(function () {
    return loadCustomUI();
  });
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style is=\"custom-style\" include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        #container {\n          position: relative;\n        }\n      </style>\n\n      <div id='container' class='horizontal layout justified'>\n        <state-info\n            hass='[[hass]]'\n            class='state-info'\n            state-obj='[[stateObj]]'\n            in-dialog='[[showLastChanged(stateObj, inDialog, extra)]]'\n            secondary-line$='[[hasExtra(extra)]]'>\n          <template is='dom-repeat' items='[[extra]]'>\n            <div>[[item]]</div>\n          </template>\n        </state-info>\n        <dynamic-with-extra\n            hass='[[hass]]'\n            state-obj='[[stateObj]]'\n            control-element='[[controlElement]]'\n            in-dialog='[[inDialog]]'>\n        </dynamic-with-extra>\n      </div>\n      "]);

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





function loadCustomUI() {
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
  }(Object(_cui_base_element_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Polymer.Element));

  customElements.define('state-card-without-slider', StateCardWithoutSlider);
}

if (Polymer && Polymer.Element && customElements.get('home-assistant')) {
  loadCustomUI();
} else {
  customElements.whenDefined('home-assistant').then(function () {
    return loadCustomUI();
  });
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
/* harmony import */ var _home_assistant_polymer_src_common_dom_apply_themes_on_element_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts */ "../home-assistant-polymer/src/common/dom/apply_themes_on_element.ts");
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
/* harmony default export */ __webpack_exports__["default"] = ('20190518');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUudHMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvY3NzLXRhZy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3VwZGF0aW5nLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy9saXQtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZG9tLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL21vZGlmeS10ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9wYXJ0LnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3BhcnRzLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9zaGFkeS1yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvdGVtcGxhdGUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi90ZW1wbGF0ZS1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vL3NyYy9saXQtaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvY3VpLWJhc2UtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZHluYW1pYy1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLXdpdGgtZXh0cmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2hhLWNvbmZpZy1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2hhLXRoZW1lZC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtY3VzdG9tLXVpLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9zdGF0ZS1jYXJkLXdpdGgtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9zdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9oYXNzLWF0dHJpYnV0ZS11dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ob29rcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdmVyc2lvbi5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0RPTUFJTl9JQ09OIiwiREVGQVVMVF9QQU5FTCIsIkRPTUFJTlNfV0lUSF9DQVJEIiwiRE9NQUlOU19XSVRIX01PUkVfSU5GTyIsIkRPTUFJTlNfSElERV9NT1JFX0lORk8iLCJET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZIiwiU1RBVEVTX09GRiIsIkRPTUFJTlNfVE9HR0xFIiwiU2V0IiwiVU5JVF9DIiwiVU5JVF9GIiwiREVGQVVMVF9WSUVXX0VOVElUWV9JRCIsImFwcGx5VGhlbWVzT25FbGVtZW50IiwiZWxlbWVudCIsInRoZW1lcyIsImxvY2FsVGhlbWUiLCJ1cGRhdGVNZXRhIiwiX3RoZW1lcyIsInRoZW1lTmFtZSIsImRlZmF1bHRfdGhlbWUiLCJzdHlsZXMiLCJ0aGVtZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJlZml4ZWRLZXkiLCJ1cGRhdGVTdHlsZXMiLCJ3aW5kb3ciLCJTaGFkeUNTUyIsInN0eWxlU3VidHJlZSIsIm1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVtZUNvbG9yIiwiZHluYW1pY0NvbnRlbnRVcGRhdGVyIiwicm9vdCIsIm5ld0VsZW1lbnRUYWciLCJhdHRyaWJ1dGVzIiwicm9vdEVsIiwiY3VzdG9tRWwiLCJsYXN0Q2hpbGQiLCJ0YWdOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwiY2FuVG9nZ2xlRG9tYWluIiwiaGFzcyIsImRvbWFpbiIsInNlcnZpY2VzIiwiY2FuVG9nZ2xlU3RhdGUiLCJzdGF0ZU9iaiIsInN0YXRlIiwiY29tcHV0ZURvbWFpbiIsImVudGl0eUlkIiwic3Vic3RyIiwiaW5kZXhPZiIsImNvbXB1dGVTdGF0ZURvbWFpbiIsImVudGl0eV9pZCIsImdldEdyb3VwRW50aXRpZXMiLCJlbnRpdGllcyIsImdyb3VwIiwicmVzdWx0IiwiZW50aXR5IiwiZ2V0Vmlld0VudGl0aWVzIiwidmlldyIsInZpZXdFbnRpdGllcyIsImhpZGRlbiIsImdyb3VwRW50aXRpZXMiLCJnckVudGl0eUlkIiwiZ3JFbnRpdHkiLCJzdGF0ZUNhcmRUeXBlIiwiaW5jbHVkZXMiLCJjb250cm9sIiwic3VwcG9ydHNGZWF0dXJlIiwiZmVhdHVyZSIsInN1cHBvcnRlZF9mZWF0dXJlcyIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiRE9NQUlOX0RFVklDRV9DTEFTUyIsImJpbmFyeV9zZW5zb3IiLCJjb3ZlciIsInNlbnNvciIsInN3aXRjaCIsIlVOS05PV05fVFlQRSIsIkFERF9UWVBFIiwiVFlQRV9UT19UQUciLCJzdHJpbmciLCJqc29uIiwiaWNvbiIsImJvb2xlYW4iLCJhcnJheSIsIkxPR0lDX1NUQVRFX0FUVFJJQlVURVMiLCJlbnRpdHlfcGljdHVyZSIsInVuZGVmaW5lZCIsImZyaWVuZGx5X25hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJlbXVsYXRlZF9odWUiLCJkb21haW5zIiwiZW11bGF0ZWRfaHVlX25hbWUiLCJoYWFza2FfaGlkZGVuIiwiaGFhc2thX25hbWUiLCJob21lYnJpZGdlX2hpZGRlbiIsImhvbWVicmlkZ2VfbmFtZSIsImF0dHJpYnV0aW9uIiwiY3VzdG9tX3VpX21vcmVfaW5mbyIsImN1c3RvbV91aV9zdGF0ZV9jYXJkIiwiZGV2aWNlX2NsYXNzIiwib3B0aW9ucyIsImFzc3VtZWRfc3RhdGUiLCJpbml0aWFsX3N0YXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsInZhbHVlIiwidG9TdHJpbmciLCJsaXRlcmFsVmFsdWUiLCJFcnJvciIsImh0bWxWYWx1ZSIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJodG1sIiwic3RyaW5ncyIsInRlbXBsYXRlIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwidiIsImlkeCIsImh0bWxMaXRlcmFsIiwic3VwZXJDbGFzcyIsIkN1aUJhc2VFbGVtZW50IiwiZXh0cmFzIiwiZXh0cmFfZGF0YV90ZW1wbGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImV4dHJhIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJzdGF0ZXMiLCJmaWx0ZXIiLCJpbkRpYWxvZyIsImxlbmd0aCIsInNob3dfbGFzdF9jaGFuZ2VkIiwiQm9vbGVhbiIsImNvbnRyb2xFbGVtZW50IiwiU3RyaW5nIiwiY29tcHV0ZWQiLCJsb2FkQ3VzdG9tVUkiLCJEeW5hbWljRWxlbWVudCIsImVsZW1lbnROYW1lIiwidG9VcHBlckNhc2UiLCJQb2x5bWVyIiwiRWxlbWVudCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiZ2V0Iiwid2hlbkRlZmluZWQiLCJ0aGVuIiwiRHluYW1pY1dpdGhFeHRyYSIsIl9hdHRhY2hlZCIsIl9pc0F0dGFjaGVkIiwiYXR0YWNoZWQiLCJleHRyYV9iYWRnZSIsImV4dHJhQmFkZ2VzIiwiZXh0cmFCYWRnZSIsImFzc2lnbiIsIm1heWJlQ2hhbmdlT2JqZWN0IiwiYXR0cmlidXRlIiwidW5pdCIsImJsYWNrbGlzdCIsImJsYWNrbGlzdF9zdGF0ZXMiLCJzb21lIiwiUmVnRXhwIiwidGVzdCIsIl9lbnRpdHlEaXNwbGF5IiwiZXh0cmFPYmoiLCJleHRyYU9ialZpc2libGUiLCJoaWRlX2NvbnRyb2wiLCJoYUxvY2FsaXplIiwibG9jYWxpemUiLCJjb25maXJtX2NvbnRyb2xzIiwiY29uZmlybV9jb250cm9sc19zaG93X2xvY2siLCJlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwibG9jayIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJhcHBseVRoZW1lcyIsIkhhQ29uZmlnQ3VzdG9tVWkiLCJfYmFja0hhbmRsZXIiLCJpc1dpZGUiLCJuYW1lIiwib2xkdmFsIiwibmV3dmFsIiwibmFtZUNoYW5nZWQiLCJnZXROYW1lIiwic2V0TmFtZSIsImhpc3RvcnkiLCJiYWNrIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJyZWZsZWN0Iiwib2JzZXJ2ZXIiLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiJCIsInNsaWRlciIsIl9rZXlCaW5kaW5ncyIsIl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJhdHRyIiwiZGVmIiwiaXNPbiIsInRoZW1lZE1pbiIsImV2IiwidGFyZ2V0IiwibWluIiwiTnVtYmVyIiwibWF4IiwicGluIiwibm90aWZ5IiwiX3RoZW1lZE1pbiIsIlNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTIiwiRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUIiwibGlnaHQiLCJjbGltYXRlIiwiVFlQRV9UT19DT05UUk9MIiwidG9nZ2xlIiwiZGlzcGxheSIsIlN0YXRlQ2FyZEN1c3RvbVVpIiwiY29udGFpbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfY29udGFpbmVyIiwic2V0UHJvcGVydHkiLCJpbnB1dENoYW5nZWQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiaWQiLCJjb25zb2xlIiwid2FybiIsImJhZGdlc19saXN0IiwicHVzaCIsInBhcmFtcyIsIndpZHRoIiwiZm9udFNpemUiLCJtb2RpZmllZE9iaiIsInRoZW1lVGFyZ2V0Iiwib2JqIiwic3RhdGVfY2FyZF9tb2RlIiwibWF5YmVIaWRlRW50aXR5IiwiYmFkZ2VNb2RlIiwicmVndWxhck1vZGVfIiwiY2xlYW5CYWRnZVN0eWxlIiwib3JpZ2luYWxTdGF0ZUNhcmRUeXBlIiwiY3VzdG9tU3RhdGVDYXJkVHlwZSIsInNlY29uZGFyeVN0YXRlQ2FyZFR5cGUiLCJzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnkiLCJzbGlkZXJFbGlnaWJsZV8iLCJzZXJ2aWNlTWluIiwic2VydmljZU1heCIsInZhbHVlTmFtZSIsInNldFZhbHVlTmFtZSIsIm5hbWVPbiIsIm1pbl90ZW1wIiwibWF4X3RlbXAiLCJjb250cm9sX2VsZW1lbnQiLCJTdGF0ZUNhcmRXaXRoU2xpZGVyIiwiX29uSXJvblJlc2l6ZSIsImJpbmQiLCJfaXNDb25uZWN0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3dhaXRGb3JMYXlvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3NldE1vZGUiLCJfZnJhbWVJZCIsInJlYWR5VG9Db21wdXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGlkZVNsaWRlciIsIm1vZGUiLCJsaW5lVG9vTG9uZyIsImJyZWFrU2xpZGVyIiwic2hvd1NsaWRlciIsInByZXZCcmVha1NsaWRlciIsInByZXZIaWRlU2xpZGVyIiwiY29udGFpbmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIm1pbkxpbmVCcmVhayIsIm1heExpbmVCcmVhayIsImNvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0YXRlSGVpZ2h0Iiwic3RyZXRjaFNsaWRlciIsInBhcnNlSW50IiwicGFyYW0iLCJpc05hTiIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJjYWxsU2VydmljZSIsInNsaWRlclZhbHVlIiwic3RyZXRjaF9zbGlkZXIiLCJTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIiwiU1VQUE9SVEVEX1NMSURFUl9NT0RFUyIsImN1c3RvbVVpQXR0cmlidXRlcyIsImRldmljZSIsInRlbXBsYXRlcyIsIl9zdGF0ZURpc3BsYXkiLCJjb25jYXQiLCJzbGlkZXJfdGhlbWUiLCJoaWRlX2luX2RlZmF1bHRfdmlldyIsImljb25fY29sb3IiLCJkb21Ib3N0IiwiZ2V0Um9vdE5vZGUiLCJEb2N1bWVudEZyYWdtZW50IiwiaG9zdCIsImxpZ2h0T3JTaGFkb3ciLCJzZWxlY3RvciIsInNoYWRvd1Jvb3QiLCJnZXRFbGVtZW50SGllcmFyY2h5IiwiaGllcmFyY2h5Iiwic2hpZnQiLCJnZXRDb250ZXh0IiwiX2NvbnRleHQiLCJncm91cEVudGl0eSIsInJldmVyc2UiLCJmaW5kTWF0Y2giLCJmaW5kIiwib3B0aW9uIiwibWF0Y2giLCJtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlIiwiYXBwbHlBdHRyaWJ1dGVzIiwibWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwIiwiY29udGV4dCIsImMiLCJfc2V0S2VlcCIsIl9jdWlfa2VlcCIsIm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiaGFzR2xvYmFsIiwiaGFzQ2hhbmdlcyIsInVudGVtcGxhdGVkX2F0dHJpYnV0ZXMiLCJ1bnRlbXBsYXRlZF9zdGF0ZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInVudGVtcGxhdGVkX3N0YXRlRGlzcGxheSIsIm1heWJlQXBwbHlUZW1wbGF0ZXMiLCJuZXdSZXN1bHQiLCJjaGVja0F0dHJpYnV0ZXMiLCJsYXN0X2NoYW5nZWQiLCJhbGxvd0hpZGRlbiIsImZpeEdyb3VwVGl0bGVzIiwiaG9tZUFzc2lzdGFudE1haW4iLCJoYUNhcmRzIiwibWFpbiIsImNhcmRzIiwiY2FyZCIsIm5hbWVFbGVtIiwidGV4dENvbnRlbnQiLCJjb250cm9sQ29sdW1ucyIsImNvbHVtbnMiLCJwYXJ0aWFsQ2FyZHMiLCJmIiwiaGFuZGxlV2luZG93Q2hhbmdlIiwiX3VwZGF0ZUNvbHVtbnMiLCJtcWxzIiwibXFsIiwicmVtb3ZlTGlzdGVuZXIiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ1c2VDdXN0b21pemVyIiwiY3VzdG9taXplciIsImhpZGVfYXR0cmlidXRlcyIsInVwZGF0ZUNvbmZpZ1BhbmVsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJoYVBhbmVsQ29uZmlnIiwiaGFDb25maWdOYXZpZ2F0aW9uIiwiY3VpUGF0Y2giLCJfb3JpZ2luYWxDb21wdXRlTG9hZGVkIiwiX2NvbXB1dGVMb2FkZWQiLCJfb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiIsIl9jb21wdXRlQ2FwdGlvbiIsIl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiIsIl9jb21wdXRlRGVzY3JpcHRpb24iLCJwYWdlIiwicGFnZXMiLCJjb25mIiwiY2FwdGlvbiIsImxvYWRlZCIsImdldEhhQ29uZmlnQ3VzdG9tVWkiLCJoYUNvbmZpZ0N1c3RvbVVpIiwiaXJvblBhZ2VzIiwibGFzdEVsZW1lbnRDaGlsZCIsInNlbGVjdCIsInZpc2libGUiLCJyb3V0ZXJPcHRpb25zIiwicm91dGVzIiwiY3VzdG9tdWkiLCJ0YWciLCJsb2FkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1cGRhdGUiLCJNYXAiLCJpbnN0YWxsU3RhdGVzSG9vayIsImhvbWVBc3Npc3RhbnQiLCJfdXBkYXRlSGFzcyIsIm9yaWdpbmFsVXBkYXRlIiwibmV3RW50aXR5IiwiX3RoZW1lV2FpdGVycyIsIndhaXRlciIsInN0YXRlQ2hhbmdlZCIsImluc3RhbGxQYXJ0aWFsQ2FyZHMiLCJfZGVmYXVsdFZpZXdGaWx0ZXIiLCJleGNsdWRlcyIsImV4Y2x1ZGVFbnRpdHlJZCIsImluc3RhbGxBY3Rpb25OYW1lIiwia2xhc3MiLCJkZWZpbmVQcm9wZXJ0eSIsImN1c3RvbUxvY2FsaXplIiwiYWN0aW9uX25hbWUiLCJfX2RhdGEiLCJzZXQiLCJpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UiLCJoYVN0YXRlTGFiZWxCYWRnZSIsInN0YXJ0SW50ZXJ2YWwiLCJpbnN0YWxsU3RhdGVCYWRnZSIsInN0YXRlQmFkZ2UiLCJfdXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlIiwiY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb2xvciIsInVwZGF0ZWQiLCJvcmlnaW5hbFVwZGF0ZWQiLCJjdXN0b21VcGRhdGVkIiwiY2hhbmdlZFByb3BzIiwiaGFzIiwiX2ljb24iLCJpbnN0YWxsSGFBdHRyaWJ1dGVzIiwiaGFBdHRyaWJ1dGVzIiwiY29tcHV0ZUZpbHRlcnNBcnJheSIsImN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJleHRyYUZpbHRlcnMiLCJzcGxpdCIsImluc3RhbGxIYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemVJbml0RG9uZSIsIl9jb21wdXRlU2luZ2xlQXR0cmlidXRlIiwiY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsInNlY29uZGFyeSIsImNvbmZpZyIsIl9pbml0T3Blbk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwibG9jYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlcyIsImV4aXN0aW5nQXR0cmlidXRlcyIsImtub3duS2V5cyIsImZpbHRlckZyb21BdHRyaWJ1dGVzIiwic29ydCIsImluc3RhbGxDbGFzc0hvb2tzIiwiY2xhc3NJbml0RG9uZSIsImluaXQiLCJpbml0RG9uZSIsInJ1bkhvb2tzIiwibG9nIiwiQ1VTVE9NX1VJX0xJU1QiLCJ2ZXJzaW9uIiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jdGlvbkJvZHkiLCJmdW5jIiwiRnVuY3Rpb24iLCJTeW50YXhFcnJvciIsIlJlZmVyZW5jZUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ08sSUFBTUEsbUJBQW1CLEdBQUcsZUFBNUI7QUFFUDs7QUFDTyxJQUFNQyxhQUFhLEdBQUcsVUFBdEI7QUFFUDs7QUFDTyxJQUFNQyxpQkFBaUIsR0FBRyxDQUMvQixTQUQrQixFQUUvQixPQUYrQixFQUcvQixjQUgrQixFQUkvQixjQUorQixFQUsvQixjQUwrQixFQU0vQixZQU4rQixFQU8vQixNQVArQixFQVEvQixjQVIrQixFQVMvQixPQVQrQixFQVUvQixRQVYrQixFQVcvQixPQVgrQixFQVkvQixRQVor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QWpCLEtBQThCLENBQS9CLEdBQW9Db0UsUUFBcEMscUJBQTJEQSxRQUEzRCxPQUFyQjs7QUFDQSxRQUFJO0FBQ0Y7QUFDQSxVQUFNNFcsSUFBSSxHQUFHLElBQUlDLFFBQUosQ0FDWCxNQURXLEVBQ0gsVUFERyxFQUNTLFFBRFQsRUFDbUIsWUFEbkIsRUFDaUMsV0FEakMsRUFDOEMsT0FEOUMsRUFDdURGLFlBRHZELENBQWI7QUFFQTs7QUFDQSxhQUFPQyxJQUFJLENBQUN6YixJQUFELEVBQU9hLFFBQVAsRUFBaUJHLE1BQWpCLEVBQXlCNUIsVUFBekIsRUFBcUN1SSxTQUFyQyxFQUFnRHRILEtBQWhELENBQVg7QUFDRCxLQU5ELENBTUUsT0FBT3FJLENBQVAsRUFBVTtBQUNWO0FBQ0EsVUFBS0EsQ0FBQyxZQUFZaVQsV0FBZCxJQUE4QmpULENBQUMsWUFBWWtULGNBQS9DLEVBQStEO0FBQzdEbFAsZUFBTyxDQUFDQyxJQUFSLFdBQWdCakUsQ0FBQyxDQUFDYSxJQUFsQixlQUEyQmIsQ0FBQyxDQUFDbVQsT0FBN0IsMEJBQW9ETCxZQUFwRDtBQUNBLGVBQU8sSUFBUDtBQUNEO0FBQ0Q7OztBQUNBLFlBQU05UyxDQUFOO0FBQ0Q7QUFDRjtBQS9uQmtDLENBQXJDO0FBaW9CQW5LLE1BQU0sQ0FBQ3FILFFBQVAsQ0FBZ0JrVixJQUFoQixHOzs7Ozs7Ozs7Ozs7O0FDem9CQSwrREFBZSxVQUFmLEUiLCJmaWxlIjoic2NyaXB0cy1kYmctZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL3NjcmlwdHMuanNcIik7XG4iLCIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gXCJoYXNzOmJvb2ttYXJrXCI7XG5cbi8qKiBQYW5lbCB0byBzaG93IHdoZW4gbm8gcGFuZWwgaXMgcGlja2VkLiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFORUwgPSBcImxvdmVsYWNlXCI7XG5cbi8qKiBEb21haW5zIHRoYXQgaGF2ZSBhIHN0YXRlIGNhcmQuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSBbXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvdmVyXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY2VuZVwiLFxuICBcInNjcmlwdFwiLFxuICBcInRpbWVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VibGlua1wiLFxuXTtcblxuLyoqIERvbWFpbnMgd2l0aCBzZXBhcmF0ZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9NT1JFX0lORk8gPSBbXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImF1dG9tYXRpb25cIixcbiAgXCJjYW1lcmFcIixcbiAgXCJjbGltYXRlXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiY292ZXJcIixcbiAgXCJmYW5cIixcbiAgXCJncm91cFwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJpbnB1dF9kYXRldGltZVwiLFxuICBcImxpZ2h0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInNjcmlwdFwiLFxuICBcInN1blwiLFxuICBcInVwZGF0ZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgXCJ3ZWF0aGVyXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3cgbm8gbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX0hJREVfTU9SRV9JTkZPID0gW1xuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJzY2VuZVwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gIFwiY2FtZXJhXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaGlzdG9yeV9ncmFwaFwiLFxuICBcInNjZW5lXCIsXG5dO1xuXG4vKiogU3RhdGVzIHRoYXQgd2UgY29uc2lkZXIgXCJvZmZcIi4gKi9cbmV4cG9ydCBjb25zdCBTVEFURVNfT0ZGID0gW1wiY2xvc2VkXCIsIFwibG9ja2VkXCIsIFwib2ZmXCJdO1xuXG4vKiogRG9tYWlucyB3aGVyZSB3ZSBhbGxvdyB0b2dnbGUgaW4gTG92ZWxhY2UuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19UT0dHTEUgPSBuZXcgU2V0KFtcbiAgXCJmYW5cIixcbiAgXCJpbnB1dF9ib29sZWFuXCIsXG4gIFwibGlnaHRcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJncm91cFwiLFxuICBcImF1dG9tYXRpb25cIixcbl0pO1xuXG4vKiogVGVtcGVyYXR1cmUgdW5pdHMuICovXG5leHBvcnQgY29uc3QgVU5JVF9DID0gXCLCsENcIjtcbmV4cG9ydCBjb25zdCBVTklUX0YgPSBcIsKwRlwiO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9IFwiZ3JvdXAuZGVmYXVsdF92aWV3XCI7XG4iLCIvKipcbiAqIEFwcGx5IGEgdGhlbWUgdG8gYW4gZWxlbWVudCBieSBzZXR0aW5nIHRoZSBDU1MgdmFyaWFibGVzIG9uIGl0LlxuICpcbiAqIGVsZW1lbnQ6IEVsZW1lbnQgdG8gYXBwbHkgdGhlbWUgb24uXG4gKiB0aGVtZXM6IEhBU1MgVGhlbWUgaW5mb3JtYXRpb25cbiAqIGxvY2FsVGhlbWU6IHNlbGVjdGVkIHRoZW1lLlxuICogdXBkYXRlTWV0YTogYm9vbGVhbiBpZiB3ZSBzaG91bGQgdXBkYXRlIHRoZSB0aGVtZS1jb2xvciBtZXRhIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICBlbGVtZW50LFxuICB0aGVtZXMsXG4gIGxvY2FsVGhlbWUsXG4gIHVwZGF0ZU1ldGEgPSBmYWxzZVxuKSB7XG4gIGlmICghZWxlbWVudC5fdGhlbWVzKSB7XG4gICAgZWxlbWVudC5fdGhlbWVzID0ge307XG4gIH1cbiAgbGV0IHRoZW1lTmFtZSA9IHRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuICBpZiAobG9jYWxUaGVtZSA9PT0gXCJkZWZhdWx0XCIgfHwgKGxvY2FsVGhlbWUgJiYgdGhlbWVzLnRoZW1lc1tsb2NhbFRoZW1lXSkpIHtcbiAgICB0aGVtZU5hbWUgPSBsb2NhbFRoZW1lO1xuICB9XG4gIGNvbnN0IHN0eWxlcyA9IHsgLi4uZWxlbWVudC5fdGhlbWVzIH07XG4gIGlmICh0aGVtZU5hbWUgIT09IFwiZGVmYXVsdFwiKSB7XG4gICAgY29uc3QgdGhlbWUgPSB0aGVtZXMudGhlbWVzW3RoZW1lTmFtZV07XG4gICAgT2JqZWN0LmtleXModGhlbWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgcHJlZml4ZWRLZXkgPSBcIi0tXCIgKyBrZXk7XG4gICAgICBlbGVtZW50Ll90aGVtZXNbcHJlZml4ZWRLZXldID0gXCJcIjtcbiAgICAgIHN0eWxlc1twcmVmaXhlZEtleV0gPSB0aGVtZVtrZXldO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtZW50LnVwZGF0ZVN0eWxlcykge1xuICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gIH0gZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgLy8gaW1wbGVtZW50IHVwZGF0ZVN0eWxlcygpIG1ldGhvZCBvZiBQb2xlbWVyIGVsZW1lbnRzXG4gICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlU3VidHJlZSgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGVsZW1lbnQpLCBzdHlsZXMpO1xuICB9XG5cbiAgaWYgKCF1cGRhdGVNZXRhKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9dGhlbWUtY29sb3JdXCIpO1xuICBpZiAobWV0YSkge1xuICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoXCJkZWZhdWx0LWNvbnRlbnRcIikpIHtcbiAgICAgIG1ldGEuc2V0QXR0cmlidXRlKFwiZGVmYXVsdC1jb250ZW50XCIsIG1ldGEuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSEpO1xuICAgIH1cbiAgICBjb25zdCB0aGVtZUNvbG9yID1cbiAgICAgIHN0eWxlc1tcIi0tcHJpbWFyeS1jb2xvclwiXSB8fCBtZXRhLmdldEF0dHJpYnV0ZShcImRlZmF1bHQtY29udGVudFwiKTtcbiAgICBtZXRhLnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgdGhlbWVDb2xvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVXBkYXRlIHJvb3QncyBjaGlsZCBlbGVtZW50IHRvIGJlIG5ld0VsZW1lbnRUYWcgcmVwbGFjaW5nIGFub3RoZXIgZXhpc3RpbmcgY2hpbGQgaWYgYW55LlxuICogQ29weSBhdHRyaWJ1dGVzIGludG8gdGhlIGNoaWxkIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWNDb250ZW50VXBkYXRlcihyb290LCBuZXdFbGVtZW50VGFnLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IHJvb3RFbCA9IHJvb3Q7XG4gIGxldCBjdXN0b21FbDtcblxuICBpZiAocm9vdEVsLmxhc3RDaGlsZCAmJiByb290RWwubGFzdENoaWxkLnRhZ05hbWUgPT09IG5ld0VsZW1lbnRUYWcpIHtcbiAgICBjdXN0b21FbCA9IHJvb3RFbC5sYXN0Q2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChyb290RWwubGFzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRpbmcgYW4gZWxlbWVudCB3aXRoIHVwcGVyIGNhc2Ugd29ya3MgZmluZSBpbiBDaHJvbWUsIGJ1dCBpbiBGRiBpdCBkb2Vzbid0IGltbWVkaWF0ZWx5XG4gICAgLy8gYmVjb21lIGEgZGVmaW5lZCBDdXN0b20gRWxlbWVudC4gUG9seW1lciBkb2VzIHRoYXQgaW4gc29tZSBsYXRlciBwYXNzLlxuICAgIGN1c3RvbUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuZXdFbGVtZW50VGFnLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnNldFByb3BlcnRpZXMpIHtcbiAgICBjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKGF0dHJpYnV0ZXMpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGN1c3RvbSBlbGVtZW50IGRlZmluaXRpb24gd2Fzbid0IGxvYWRlZCB5ZXQgLSBzZXRQcm9wZXJ0aWVzIHdvdWxkIGJlXG4gICAgLy8gbWlzc2luZywgYnV0IG5vIGhhcm0gaW4gc2V0dGluZyBhdHRyaWJ1dGVzIG9uZS1ieS1vbmUgdGhlbi5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGN1c3RvbUVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjdXN0b21FbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlRG9tYWluKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGRvbWFpbjogc3RyaW5nKSB7XG4gIGNvbnN0IHNlcnZpY2VzID0gaGFzcy5zZXJ2aWNlc1tkb21haW5dO1xuICBpZiAoIXNlcnZpY2VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGRvbWFpbiA9PT0gXCJsb2NrXCIpIHtcbiAgICByZXR1cm4gXCJsb2NrXCIgaW4gc2VydmljZXM7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gXCJjb3ZlclwiKSB7XG4gICAgcmV0dXJuIFwib3Blbl9jb3ZlclwiIGluIHNlcnZpY2VzO1xuICB9XG4gIHJldHVybiBcInR1cm5fb25cIiBpbiBzZXJ2aWNlcztcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY2FuVG9nZ2xlRG9tYWluIGZyb20gXCIuL2Nhbl90b2dnbGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZVN0YXRlKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGF0ZU9iajogSGFzc0VudGl0eVxuKSB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gIGlmIChkb21haW4gPT09IFwiZ3JvdXBcIikge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJvblwiIHx8IHN0YXRlT2JqLnN0YXRlID09PSBcIm9mZlwiO1xuICB9XG4gIGlmIChkb21haW4gPT09IFwiY2xpbWF0ZVwiKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNDA5Nik7XG4gIH1cblxuICByZXR1cm4gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlRG9tYWluKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKDAsIGVudGl0eUlkLmluZGV4T2YoXCIuXCIpKTtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmo6IEhhc3NFbnRpdHkpIHtcbiAgcmV0dXJuIGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdGllcyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEdyb3VwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEdyb3VwRW50aXRpZXMoXG4gIGVudGl0aWVzOiBIYXNzRW50aXRpZXMsXG4gIGdyb3VwOiBHcm91cEVudGl0eVxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgcmVzdWx0W2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdGllcyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgZ2V0R3JvdXBFbnRpdGllcyBmcm9tIFwiLi9nZXRfZ3JvdXBfZW50aXRpZXNcIjtcbmltcG9ydCB7IEdyb3VwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8vIFJldHVybiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZW50aXRpZXMgdGhhdCB0aGUgdmlldyB3aWxsIHNob3dcbi8vIGluY2x1ZGluZyBlbWJlZGRlZCBncm91cHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3RW50aXRpZXMoXG4gIGVudGl0aWVzOiBIYXNzRW50aXRpZXMsXG4gIHZpZXc6IEdyb3VwRW50aXR5XG4pOiBIYXNzRW50aXRpZXMge1xuICBjb25zdCB2aWV3RW50aXRpZXMgPSB7fTtcblxuICB2aWV3LmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSAmJiAhZW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICB2aWV3RW50aXRpZXNbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG5cbiAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpID09PSBcImdyb3VwXCIpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbnRpdGllcyA9IGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGVudGl0eSBhcyBHcm91cEVudGl0eSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBFbnRpdGllcykuZm9yRWFjaCgoZ3JFbnRpdHlJZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyRW50aXR5ID0gZ3JvdXBFbnRpdGllc1tnckVudGl0eUlkXTtcblxuICAgICAgICAgIGlmICghZ3JFbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgICAgICAgIHZpZXdFbnRpdGllc1tnckVudGl0eUlkXSA9IGdyRW50aXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmlld0VudGl0aWVzO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCBjYW5Ub2dnbGVTdGF0ZSBmcm9tIFwiLi9jYW5fdG9nZ2xlX3N0YXRlXCI7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBET01BSU5TX1dJVEhfQ0FSRCB9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZUNhcmRUeXBlKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGF0ZU9iajogSGFzc0VudGl0eVxuKSB7XG4gIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiKSB7XG4gICAgcmV0dXJuIFwiZGlzcGxheVwiO1xuICB9XG5cbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcblxuICBpZiAoRE9NQUlOU19XSVRIX0NBUkQuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBkb21haW47XG4gIH1cbiAgaWYgKFxuICAgIGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSAmJlxuICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbCAhPT0gXCJoaWRkZW5cIlxuICApIHtcbiAgICByZXR1cm4gXCJ0b2dnbGVcIjtcbiAgfVxuICByZXR1cm4gXCJkaXNwbGF5XCI7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNGZWF0dXJlID0gKFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgZmVhdHVyZTogbnVtYmVyXG4pOiBib29sZWFuID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgcmV0dXJuIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcyEgJiBmZWF0dXJlKSAhPT0gMDtcbn07XG4iLCJjb25zdCBoYXNzQXR0cmlidXRlVXRpbCA9IHt9O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgXCJiYXR0ZXJ5XCIsXG4gICAgXCJjb2xkXCIsXG4gICAgXCJjb25uZWN0aXZpdHlcIixcbiAgICBcImRvb3JcIixcbiAgICBcImdhcmFnZV9kb29yXCIsXG4gICAgXCJnYXNcIixcbiAgICBcImhlYXRcIixcbiAgICBcImxpZ2h0XCIsXG4gICAgXCJsb2NrXCIsXG4gICAgXCJtb2lzdHVyZVwiLFxuICAgIFwibW90aW9uXCIsXG4gICAgXCJtb3ZpbmdcIixcbiAgICBcIm9jY3VwYW5jeVwiLFxuICAgIFwib3BlbmluZ1wiLFxuICAgIFwicGx1Z1wiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInByZXNlbmNlXCIsXG4gICAgXCJwcm9ibGVtXCIsXG4gICAgXCJzYWZldHlcIixcbiAgICBcInNtb2tlXCIsXG4gICAgXCJzb3VuZFwiLFxuICAgIFwidmlicmF0aW9uXCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgXSxcbiAgY292ZXI6IFtcbiAgICBcImF3bmluZ1wiLFxuICAgIFwiYmxpbmRcIixcbiAgICBcImN1cnRhaW5cIixcbiAgICBcImRhbXBlclwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlXCIsXG4gICAgXCJzaGFkZVwiLFxuICAgIFwic2h1dHRlclwiLFxuICAgIFwid2luZG93XCIsXG4gIF0sXG4gIHNlbnNvcjogW1xuICAgIFwiYmF0dGVyeVwiLFxuICAgIFwiaHVtaWRpdHlcIixcbiAgICBcImlsbHVtaW5hbmNlXCIsXG4gICAgXCJ0ZW1wZXJhdHVyZVwiLFxuICAgIFwicHJlc3N1cmVcIixcbiAgICBcInBvd2VyXCIsXG4gICAgXCJzaWduYWxfc3RyZW5ndGhcIixcbiAgXSxcbiAgc3dpdGNoOiBbXCJzd2l0Y2hcIiwgXCJvdXRsZXRcIl0sXG59O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBcImpzb25cIjtcbmhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFID0gXCJrZXktdmFsdWVcIjtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUcgPSB7XG4gIHN0cmluZzogXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGpzb246IFwiaGEtY3VzdG9taXplLXN0cmluZ1wiLFxuICBpY29uOiBcImhhLWN1c3RvbWl6ZS1pY29uXCIsXG4gIGJvb2xlYW46IFwiaGEtY3VzdG9taXplLWJvb2xlYW5cIixcbiAgYXJyYXk6IFwiaGEtY3VzdG9taXplLWFycmF5XCIsXG4gIFwia2V5LXZhbHVlXCI6IFwiaGEtY3VzdG9taXplLWtleS12YWx1ZVwiLFxufTtcblxuLy8gQXR0cmlidXRlcyBoZXJlIHNlcnZlIGR1YWwgcHVycG9zZTpcbi8vIDEpIEFueSBrZXkgb2YgdGhpcyBvYmplY3Qgd29uJ3QgYmUgc2hvd24gaW4gbW9yZS1pbmZvIHdpbmRvdy5cbi8vIDIpIEFueSBrZXkgd2hpY2ggaGFzIHZhbHVlIG90aGVyIHRoYW4gdW5kZWZpbmVkIHdpbGwgYXBwZWFyIGluIGN1c3RvbWl6YXRpb25cbi8vICAgIGNvbmZpZyBhY2NvcmRpbmcgdG8gaXRzIHZhbHVlLlxuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9IGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgfHwge1xuICBlbnRpdHlfcGljdHVyZTogdW5kZWZpbmVkLFxuICBmcmllbmRseV9uYW1lOiB7IHR5cGU6IFwic3RyaW5nXCIsIGRlc2NyaXB0aW9uOiBcIk5hbWVcIiB9LFxuICBpY29uOiB7IHR5cGU6IFwiaWNvblwiIH0sXG4gIGVtdWxhdGVkX2h1ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgZW11bGF0ZWRfaHVlX25hbWU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgaGFhc2thX2hpZGRlbjogdW5kZWZpbmVkLFxuICBoYWFza2FfbmFtZTogdW5kZWZpbmVkLFxuICBob21lYnJpZGdlX2hpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiB9LFxuICBob21lYnJpZGdlX25hbWU6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBzdXBwb3J0ZWRfZmVhdHVyZXM6IHVuZGVmaW5lZCxcbiAgYXR0cmlidXRpb246IHVuZGVmaW5lZCxcbiAgY3VzdG9tX3VpX21vcmVfaW5mbzogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgZGV2aWNlX2NsYXNzOiB7XG4gICAgdHlwZTogXCJhcnJheVwiLFxuICAgIG9wdGlvbnM6IGhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MsXG4gICAgZGVzY3JpcHRpb246IFwiRGV2aWNlIGNsYXNzXCIsXG4gICAgZG9tYWluczogW1wiYmluYXJ5X3NlbnNvclwiLCBcImNvdmVyXCIsIFwic2Vuc29yXCIsIFwic3dpdGNoXCJdLFxuICB9LFxuICBoaWRkZW46IHsgdHlwZTogXCJib29sZWFuXCIsIGRlc2NyaXB0aW9uOiBcIkhpZGUgZnJvbSBVSVwiIH0sXG4gIGFzc3VtZWRfc3RhdGU6IHtcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICBkb21haW5zOiBbXG4gICAgICBcInN3aXRjaFwiLFxuICAgICAgXCJsaWdodFwiLFxuICAgICAgXCJjb3ZlclwiLFxuICAgICAgXCJjbGltYXRlXCIsXG4gICAgICBcImZhblwiLFxuICAgICAgXCJncm91cFwiLFxuICAgICAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgICBdLFxuICB9LFxuICBpbml0aWFsX3N0YXRlOiB7XG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICBkb21haW5zOiBbXCJhdXRvbWF0aW9uXCJdLFxuICB9LFxuICB1bml0X29mX21lYXN1cmVtZW50OiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhc3NBdHRyaWJ1dGVVdGlsO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSBmdW5jdGlvbihwcm9wKSB7IHJldHVybiBwcm9wOyB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi9ib290LmpzJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzdGF0aWMgc3RyaW5nIHZhbHVlIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGZpbHRlclxuICogc3RyaW5ncyBieSBhc3NldGluZyB0aGF0IHRoZXkgaGF2ZSBiZWVuIGNyZWF0ZWQgdmlhIHRoaXMgY2xhc3MuIFRoZVxuICogYHZhbHVlYCBwcm9wZXJ0eSByZXR1cm5zIHRoZSBzdHJpbmcgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuY2xhc3MgTGl0ZXJhbFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZykge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMudmFsdWUgPSBzdHJpbmcudG9TdHJpbmcoKTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBMaXRlcmFsU3RyaW5nIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBsaXRlcmFsVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFMaXRlcmFsU3RyaW5nfSAqLyh2YWx1ZSkudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLWxpdGVyYWwgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sTGl0ZXJhbCBmdW5jdGlvbjogJHt2YWx1ZX1gXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGh0bWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnQgfSAqLyh2YWx1ZSkuaW5uZXJIVE1MO1xuICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiBsaXRlcmFsVmFsdWUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi10ZW1wbGF0ZSB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWwgZnVuY3Rpb246ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHRlbXBsYXRlIGxpdGVyYWwgdGFnIHRoYXQgY3JlYXRlcyBhbiBIVE1MIDx0ZW1wbGF0ZT4gZWxlbWVudCBmcm9tIHRoZVxuICogY29udGVudHMgb2YgdGhlIHN0cmluZy5cbiAqXG4gKiBUaGlzIGFsbG93cyB5b3UgdG8gd3JpdGUgYSBQb2x5bWVyIFRlbXBsYXRlIGluIEphdmFTY3JpcHQuXG4gKlxuICogVGVtcGxhdGVzIGNhbiBiZSBjb21wb3NlZCBieSBpbnRlcnBvbGF0aW5nIGBIVE1MVGVtcGxhdGVFbGVtZW50YHMgaW5cbiAqIGV4cHJlc3Npb25zIGluIHRoZSBKYXZhU2NyaXB0IHRlbXBsYXRlIGxpdGVyYWwuIFRoZSBuZXN0ZWQgdGVtcGxhdGUnc1xuICogYGlubmVySFRNTGAgaXMgaW5jbHVkZWQgaW4gdGhlIGNvbnRhaW5pbmcgdGVtcGxhdGUuICBUaGUgb25seSBvdGhlclxuICogdmFsdWVzIGFsbG93ZWQgaW4gZXhwcmVzc2lvbnMgYXJlIHRob3NlIHJldHVybmVkIGZyb20gYGh0bWxMaXRlcmFsYFxuICogd2hpY2ggZW5zdXJlcyBvbmx5IGxpdGVyYWwgdmFsdWVzIGZyb20gSlMgc291cmNlIGV2ZXIgcmVhY2ggdGhlIEhUTUwsIHRvXG4gKiBndWFyZCBhZ2FpbnN0IFhTUyByaXNrcy5cbiAqXG4gKiBBbGwgb3RoZXIgdmFsdWVzIGFyZSBkaXNhbGxvd2VkIGluIGV4cHJlc3Npb25zIHRvIGhlbHAgcHJldmVudCBYU1NcbiAqIGF0dGFja3M7IGhvd2V2ZXIsIGBodG1sTGl0ZXJhbGAgY2FuIGJlIHVzZWQgdG8gY29tcG9zZSBzdGF0aWNcbiAqIHN0cmluZyB2YWx1ZXMgaW50byB0ZW1wbGF0ZXMuIFRoaXMgaXMgdXNlZnVsIHRvIGNvbXBvc2Ugc3RyaW5ncyBpbnRvXG4gKiBwbGFjZXMgdGhhdCBkbyBub3QgYWNjZXB0IGh0bWwsIGxpa2UgdGhlIGNzcyB0ZXh0IG9mIGEgYHN0eWxlYFxuICogZWxlbWVudC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT46aG9zdHsgY29udGVudDpcIi4uLlwiIH08L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3RoaXMucGFydGlhbFRlbXBsYXRlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBwYXJ0aWFsVGVtcGxhdGUoKSB7IHJldHVybiBodG1sYDxzcGFuPlBhcnRpYWwhPC9zcGFuPmA7IH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFIVE1MVGVtcGxhdGVFbGVtZW50fSBDb25zdHJ1Y3RlZCBIVE1MVGVtcGxhdGVFbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gZnVuY3Rpb24gaHRtbChzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBodG1sVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgcmV0dXJuIHRlbXBsYXRlO1xufTtcblxuLyoqXG4gKiBBbiBodG1sIGxpdGVyYWwgdGFnIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgaHRtbGAgdG8gY29tcG9zZS5cbiAqIGEgbGl0ZXJhbCBzdHJpbmcuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+XG4gKiAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuICogICAgICAgICAgICR7dGhpcy5zdHlsZVRlbXBsYXRlKCl9XG4gKiAgICAgICAgIDwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7c3RhdGljVmFsdWV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XG4gKiAgICAgICAgcmV0dXJuIGh0bWxMaXRlcmFsYC5zaGFkb3dlZCB7IGJhY2tncm91bmQ6IGdyYXk7IH1gO1xuICogICAgIH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFMaXRlcmFsU3RyaW5nfSBDb25zdHJ1Y3RlZCBsaXRlcmFsIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgaHRtbExpdGVyYWwgPSBmdW5jdGlvbihzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBMaXRlcmFsU3RyaW5nKHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgbGl0ZXJhbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSkpO1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxOSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzID1cbiAgICAoJ2Fkb3B0ZWRTdHlsZVNoZWV0cycgaW4gRG9jdW1lbnQucHJvdG90eXBlKSAmJlxuICAgICgncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUpO1xuXG5jb25zdCBjb25zdHJ1Y3Rpb25Ub2tlbiA9IFN5bWJvbCgpO1xuXG5leHBvcnQgY2xhc3MgQ1NTUmVzdWx0IHtcbiAgX3N0eWxlU2hlZXQ/OiBDU1NTdHlsZVNoZWV0fG51bGw7XG5cbiAgcmVhZG9ubHkgY3NzVGV4dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNzc1RleHQ6IHN0cmluZywgc2FmZVRva2VuOiBzeW1ib2wpIHtcbiAgICBpZiAoc2FmZVRva2VuICE9PSBjb25zdHJ1Y3Rpb25Ub2tlbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICB0aGlzLmNzc1RleHQgPSBjc3NUZXh0O1xuICB9XG5cbiAgLy8gTm90ZSwgdGhpcyBpcyBhIGdldHRlciBzbyB0aGF0IGl0J3MgbGF6eS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnNcbiAgLy8gc3R5bGVzaGVldHMgYXJlIG5vdCBjcmVhdGVkIHVudGlsIHRoZSBmaXJzdCBlbGVtZW50IGluc3RhbmNlIGlzIG1hZGUuXG4gIGdldCBzdHlsZVNoZWV0KCk6IENTU1N0eWxlU2hlZXR8bnVsbCB7XG4gICAgaWYgKHRoaXMuX3N0eWxlU2hlZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTm90ZSwgaWYgYGFkb3B0ZWRTdHlsZVNoZWV0c2AgaXMgc3VwcG9ydGVkIHRoZW4gd2UgYXNzdW1lIENTU1N0eWxlU2hlZXRcbiAgICAgIC8vIGlzIGNvbnN0cnVjdGFibGUuXG4gICAgICBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzKSB7XG4gICAgICAgIHRoaXMuX3N0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICB0aGlzLl9zdHlsZVNoZWV0LnJlcGxhY2VTeW5jKHRoaXMuY3NzVGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdHlsZVNoZWV0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlU2hlZXQ7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNzc1RleHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBXcmFwIGEgdmFsdWUgZm9yIGludGVycG9sYXRpb24gaW4gYSBjc3MgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWwuXG4gKlxuICogVGhpcyBpcyB1bnNhZmUgYmVjYXVzZSB1bnRydXN0ZWQgQ1NTIHRleHQgY2FuIGJlIHVzZWQgdG8gcGhvbmUgaG9tZVxuICogb3IgZXhmaWx0cmF0ZSBkYXRhIHRvIGFuIGF0dGFja2VyIGNvbnRyb2xsZWQgc2l0ZS4gVGFrZSBjYXJlIHRvIG9ubHkgdXNlXG4gKiB0aGlzIHdpdGggdHJ1c3RlZCBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUNTUyA9ICh2YWx1ZTogdW5rbm93bikgPT4ge1xuICByZXR1cm4gbmV3IENTU1Jlc3VsdChTdHJpbmcodmFsdWUpLCBjb25zdHJ1Y3Rpb25Ub2tlbik7XG59O1xuXG5jb25zdCB0ZXh0RnJvbUNTU1Jlc3VsdCA9ICh2YWx1ZTogQ1NTUmVzdWx0KSA9PiB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIENTU1Jlc3VsdCkge1xuICAgIHJldHVybiB2YWx1ZS5jc3NUZXh0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiAke1xuICAgICAgICAgICAgdmFsdWV9LiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dFxuICAgICAgICAgICAgdGFrZSBjYXJlIHRvIGVuc3VyZSBwYWdlIHNlY3VyaXR5LmApO1xuICB9XG59O1xuXG4vKipcbiAqIFRlbXBsYXRlIHRhZyB3aGljaCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIExpdEVsZW1lbnQncyBgc3R5bGVgIHByb3BlcnR5IHRvXG4gKiBzZXQgZWxlbWVudCBzdHlsZXMuIEZvciBzZWN1cml0eSByZWFzb25zLCBvbmx5IGxpdGVyYWwgc3RyaW5nIHZhbHVlcyBtYXkgYmVcbiAqIHVzZWQuIFRvIGluY29ycG9yYXRlIG5vbi1saXRlcmFsIHZhbHVlcyBgdW5zYWZlQ1NTYCBtYXkgYmUgdXNlZCBpbnNpZGUgYVxuICogdGVtcGxhdGUgc3RyaW5nIHBhcnQuXG4gKi9cbmV4cG9ydCBjb25zdCBjc3MgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogQ1NTUmVzdWx0W10pID0+IHtcbiAgY29uc3QgY3NzVGV4dCA9IHZhbHVlcy5yZWR1Y2UoXG4gICAgICAoYWNjLCB2LCBpZHgpID0+IGFjYyArIHRleHRGcm9tQ1NTUmVzdWx0KHYpICsgc3RyaW5nc1tpZHggKyAxXSxcbiAgICAgIHN0cmluZ3NbMF0pO1xuICByZXR1cm4gbmV3IENTU1Jlc3VsdChjc3NUZXh0LCBjb25zdHJ1Y3Rpb25Ub2tlbik7XG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0xpdEVsZW1lbnR9IGZyb20gJy4uL2xpdC1lbGVtZW50LmpzJztcblxuaW1wb3J0IHtQcm9wZXJ0eURlY2xhcmF0aW9uLCBVcGRhdGluZ0VsZW1lbnR9IGZyb20gJy4vdXBkYXRpbmctZWxlbWVudC5qcyc7XG5cbmV4cG9ydCB0eXBlIENvbnN0cnVjdG9yPFQ+ID0ge1xuICBuZXcgKC4uLmFyZ3M6IHVua25vd25bXSk6IFRcbn07XG5cbi8vIEZyb20gdGhlIFRDMzkgRGVjb3JhdG9ycyBwcm9wb3NhbFxuaW50ZXJmYWNlIENsYXNzRGVzY3JpcHRvciB7XG4gIGtpbmQ6ICdjbGFzcyc7XG4gIGVsZW1lbnRzOiBDbGFzc0VsZW1lbnRbXTtcbiAgZmluaXNoZXI/OiA8VD4oY2xheno6IENvbnN0cnVjdG9yPFQ+KSA9PiB1bmRlZmluZWQgfCBDb25zdHJ1Y3RvcjxUPjtcbn1cblxuLy8gRnJvbSB0aGUgVEMzOSBEZWNvcmF0b3JzIHByb3Bvc2FsXG5pbnRlcmZhY2UgQ2xhc3NFbGVtZW50IHtcbiAga2luZDogJ2ZpZWxkJ3wnbWV0aG9kJztcbiAga2V5OiBQcm9wZXJ0eUtleTtcbiAgcGxhY2VtZW50OiAnc3RhdGljJ3wncHJvdG90eXBlJ3wnb3duJztcbiAgaW5pdGlhbGl6ZXI/OiBGdW5jdGlvbjtcbiAgZXh0cmFzPzogQ2xhc3NFbGVtZW50W107XG4gIGZpbmlzaGVyPzogPFQ+KGNsYXp6OiBDb25zdHJ1Y3RvcjxUPikgPT4gdW5kZWZpbmVkIHwgQ29uc3RydWN0b3I8VD47XG4gIGRlc2NyaXB0b3I/OiBQcm9wZXJ0eURlc2NyaXB0b3I7XG59XG5cbmNvbnN0IGxlZ2FjeUN1c3RvbUVsZW1lbnQgPVxuICAgICh0YWdOYW1lOiBzdHJpbmcsIGNsYXp6OiBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4pID0+IHtcbiAgICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY2xhenopO1xuICAgICAgLy8gQ2FzdCBhcyBhbnkgYmVjYXVzZSBUUyBkb2Vzbid0IHJlY29nbml6ZSB0aGUgcmV0dXJuIHR5cGUgYXMgYmVpbmcgYVxuICAgICAgLy8gc3VidHlwZSBvZiB0aGUgZGVjb3JhdGVkIGNsYXNzIHdoZW4gY2xhenogaXMgdHlwZWQgYXNcbiAgICAgIC8vIGBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD5gIGZvciBzb21lIHJlYXNvbi5cbiAgICAgIC8vIGBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD5gIGlzIGhlbHBmdWwgdG8gbWFrZSBzdXJlIHRoZSBkZWNvcmF0b3IgaXNcbiAgICAgIC8vIGFwcGxpZWQgdG8gZWxlbWVudHMgaG93ZXZlci5cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIHJldHVybiBjbGF6eiBhcyBhbnk7XG4gICAgfTtcblxuY29uc3Qgc3RhbmRhcmRDdXN0b21FbGVtZW50ID1cbiAgICAodGFnTmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yOiBDbGFzc0Rlc2NyaXB0b3IpID0+IHtcbiAgICAgIGNvbnN0IHtraW5kLCBlbGVtZW50c30gPSBkZXNjcmlwdG9yO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZCxcbiAgICAgICAgZWxlbWVudHMsXG4gICAgICAgIC8vIFRoaXMgY2FsbGJhY2sgaXMgY2FsbGVkIG9uY2UgdGhlIGNsYXNzIGlzIG90aGVyd2lzZSBmdWxseSBkZWZpbmVkXG4gICAgICAgIGZpbmlzaGVyKGNsYXp6OiBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD4pIHtcbiAgICAgICAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNsYXp6KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4vKipcbiAqIENsYXNzIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgZGVmaW5lcyB0aGUgZGVjb3JhdGVkIGNsYXNzIGFzIGEgY3VzdG9tIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHRhZ05hbWUgdGhlIG5hbWUgb2YgdGhlIGN1c3RvbSBlbGVtZW50IHRvIGRlZmluZVxuICovXG5leHBvcnQgY29uc3QgY3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lOiBzdHJpbmcpID0+XG4gICAgKGNsYXNzT3JEZXNjcmlwdG9yOiBDb25zdHJ1Y3RvcjxIVE1MRWxlbWVudD58Q2xhc3NEZXNjcmlwdG9yKSA9PlxuICAgICAgICAodHlwZW9mIGNsYXNzT3JEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSA/XG4gICAgbGVnYWN5Q3VzdG9tRWxlbWVudCh0YWdOYW1lLCBjbGFzc09yRGVzY3JpcHRvcikgOlxuICAgIHN0YW5kYXJkQ3VzdG9tRWxlbWVudCh0YWdOYW1lLCBjbGFzc09yRGVzY3JpcHRvcik7XG5cbmNvbnN0IHN0YW5kYXJkUHJvcGVydHkgPVxuICAgIChvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uLCBlbGVtZW50OiBDbGFzc0VsZW1lbnQpID0+IHtcbiAgICAgIC8vIFdoZW4gZGVjb3JhdGluZyBhbiBhY2Nlc3NvciwgcGFzcyBpdCB0aHJvdWdoIGFuZCBhZGQgcHJvcGVydHkgbWV0YWRhdGEuXG4gICAgICAvLyBOb3RlLCB0aGUgYGhhc093blByb3BlcnR5YCBjaGVjayBpbiBgY3JlYXRlUHJvcGVydHlgIGVuc3VyZXMgd2UgZG9uJ3RcbiAgICAgIC8vIHN0b21wIG92ZXIgdGhlIHVzZXIncyBhY2Nlc3Nvci5cbiAgICAgIGlmIChlbGVtZW50LmtpbmQgPT09ICdtZXRob2QnICYmIGVsZW1lbnQuZGVzY3JpcHRvciAmJlxuICAgICAgICAgICEoJ3ZhbHVlJyBpbiBlbGVtZW50LmRlc2NyaXB0b3IpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZWxlbWVudCxcbiAgICAgICAgICBmaW5pc2hlcihjbGF6ejogdHlwZW9mIFVwZGF0aW5nRWxlbWVudCkge1xuICAgICAgICAgICAgY2xhenouY3JlYXRlUHJvcGVydHkoZWxlbWVudC5rZXksIG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNyZWF0ZVByb3BlcnR5KCkgdGFrZXMgY2FyZSBvZiBkZWZpbmluZyB0aGUgcHJvcGVydHksIGJ1dCB3ZSBzdGlsbFxuICAgICAgICAvLyBtdXN0IHJldHVybiBzb21lIGtpbmQgb2YgZGVzY3JpcHRvciwgc28gcmV0dXJuIGEgZGVzY3JpcHRvciBmb3IgYW5cbiAgICAgICAgLy8gdW51c2VkIHByb3RvdHlwZSBmaWVsZC4gVGhlIGZpbmlzaGVyIGNhbGxzIGNyZWF0ZVByb3BlcnR5KCkuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogJ2ZpZWxkJyxcbiAgICAgICAgICBrZXk6IFN5bWJvbCgpLFxuICAgICAgICAgIHBsYWNlbWVudDogJ293bicsXG4gICAgICAgICAgZGVzY3JpcHRvcjoge30sXG4gICAgICAgICAgLy8gV2hlbiBAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWRlY29yYXRvcnMgaW1wbGVtZW50cyBpbml0aWFsaXplcnMsXG4gICAgICAgICAgLy8gZG8gdGhpcyBpbnN0ZWFkIG9mIHRoZSBpbml0aWFsaXplciBiZWxvdy4gU2VlOlxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9pc3N1ZXMvOTI2MCBleHRyYXM6IFtcbiAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAvLyAgICAga2luZDogJ2luaXRpYWxpemVyJyxcbiAgICAgICAgICAvLyAgICAgcGxhY2VtZW50OiAnb3duJyxcbiAgICAgICAgICAvLyAgICAgaW5pdGlhbGl6ZXI6IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIsXG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gXSxcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGRlY29yYXRvclxuICAgICAgICAgIGluaXRpYWxpemVyKHRoaXM6IGFueSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmluaXRpYWxpemVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXNbZWxlbWVudC5rZXldID0gZWxlbWVudC5pbml0aWFsaXplci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmluaXNoZXIoY2xheno6IHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNsYXp6LmNyZWF0ZVByb3BlcnR5KGVsZW1lbnQua2V5LCBvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuY29uc3QgbGVnYWN5UHJvcGVydHkgPVxuICAgIChvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uLCBwcm90bzogT2JqZWN0LCBuYW1lOiBQcm9wZXJ0eUtleSkgPT4ge1xuICAgICAgKHByb3RvLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpXG4gICAgICAgICAgLmNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgIH07XG5cbi8qKlxuICogQSBwcm9wZXJ0eSBkZWNvcmF0b3Igd2hpY2ggY3JlYXRlcyBhIExpdEVsZW1lbnQgcHJvcGVydHkgd2hpY2ggcmVmbGVjdHMgYVxuICogY29ycmVzcG9uZGluZyBhdHRyaWJ1dGUgdmFsdWUuIEEgYFByb3BlcnR5RGVjbGFyYXRpb25gIG1heSBvcHRpb25hbGx5IGJlXG4gKiBzdXBwbGllZCB0byBjb25maWd1cmUgcHJvcGVydHkgZmVhdHVyZXMuXG4gKlxuICogQEV4cG9ydERlY29yYXRlZEl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eShvcHRpb25zPzogUHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGRlY29yYXRvclxuICByZXR1cm4gKHByb3RvT3JEZXNjcmlwdG9yOiBPYmplY3R8Q2xhc3NFbGVtZW50LCBuYW1lPzogUHJvcGVydHlLZXkpOiBhbnkgPT5cbiAgICAgICAgICAgICAobmFtZSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICBsZWdhY3lQcm9wZXJ0eShvcHRpb25zISwgcHJvdG9PckRlc2NyaXB0b3IgYXMgT2JqZWN0LCBuYW1lKSA6XG4gICAgICBzdGFuZGFyZFByb3BlcnR5KG9wdGlvbnMhLCBwcm90b09yRGVzY3JpcHRvciBhcyBDbGFzc0VsZW1lbnQpO1xufVxuXG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyIHRoYXRcbiAqIGV4ZWN1dGVzIGEgcXVlcnlTZWxlY3RvciBvbiB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QuXG4gKlxuICogQEV4cG9ydERlY29yYXRlZEl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeShzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIHJldHVybiAocHJvdG9PckRlc2NyaXB0b3I6IE9iamVjdHxDbGFzc0VsZW1lbnQsXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICAgICAgICBuYW1lPzogUHJvcGVydHlLZXkpOiBhbnkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICBnZXQodGhpczogTGl0RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfTtcbiAgICByZXR1cm4gKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICBsZWdhY3lRdWVyeShkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvciBhcyBPYmplY3QsIG5hbWUpIDpcbiAgICAgICAgc3RhbmRhcmRRdWVyeShkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvciBhcyBDbGFzc0VsZW1lbnQpO1xuICB9O1xufVxuXG4vKipcbiAqIEEgcHJvcGVydHkgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBjbGFzcyBwcm9wZXJ0eSBpbnRvIGEgZ2V0dGVyXG4gKiB0aGF0IGV4ZWN1dGVzIGEgcXVlcnlTZWxlY3RvckFsbCBvbiB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QuXG4gKlxuICogQEV4cG9ydERlY29yYXRlZEl0ZW1zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUFsbChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIHJldHVybiAocHJvdG9PckRlc2NyaXB0b3I6IE9iamVjdHxDbGFzc0VsZW1lbnQsXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBkZWNvcmF0b3JcbiAgICAgICAgICBuYW1lPzogUHJvcGVydHlLZXkpOiBhbnkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB7XG4gICAgICBnZXQodGhpczogTGl0RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfTtcbiAgICByZXR1cm4gKG5hbWUgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgICBsZWdhY3lRdWVyeShkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvciBhcyBPYmplY3QsIG5hbWUpIDpcbiAgICAgICAgc3RhbmRhcmRRdWVyeShkZXNjcmlwdG9yLCBwcm90b09yRGVzY3JpcHRvciBhcyBDbGFzc0VsZW1lbnQpO1xuICB9O1xufVxuXG5jb25zdCBsZWdhY3lRdWVyeSA9XG4gICAgKGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciwgcHJvdG86IE9iamVjdCwgbmFtZTogUHJvcGVydHlLZXkpID0+IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfTtcblxuY29uc3Qgc3RhbmRhcmRRdWVyeSA9IChkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IsIGVsZW1lbnQ6IENsYXNzRWxlbWVudCkgPT5cbiAgICAoe1xuICAgICAga2luZDogJ21ldGhvZCcsXG4gICAgICBwbGFjZW1lbnQ6ICdwcm90b3R5cGUnLFxuICAgICAga2V5OiBlbGVtZW50LmtleSxcbiAgICAgIGRlc2NyaXB0b3IsXG4gICAgfSk7XG5cbmNvbnN0IHN0YW5kYXJkRXZlbnRPcHRpb25zID1cbiAgICAob3B0aW9uczogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMsIGVsZW1lbnQ6IENsYXNzRWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZWxlbWVudCxcbiAgICAgICAgZmluaXNoZXIoY2xheno6IHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICBjbGF6ei5wcm90b3R5cGVbZWxlbWVudC5rZXkgYXMga2V5b2YgVXBkYXRpbmdFbGVtZW50XSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuY29uc3QgbGVnYWN5RXZlbnRPcHRpb25zID1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGxlZ2FjeSBkZWNvcmF0b3JcbiAgICAob3B0aW9uczogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMsIHByb3RvOiBhbnksIG5hbWU6IFByb3BlcnR5S2V5KSA9PiB7XG4gICAgICBPYmplY3QuYXNzaWduKHByb3RvW25hbWVdLCBvcHRpb25zKTtcbiAgICB9O1xuXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyB0byBhIG1ldGhvZCB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyIGluIGFcbiAqIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB0aGF0IHNwZWNpZmlzIGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgYXMgYWNjZXB0ZWQgYnlcbiAqIGBFdmVudFRhcmdldCNhZGRFdmVudExpc3RlbmVyYCBhbmQgYEV2ZW50VGFyZ2V0I3JlbW92ZUV2ZW50TGlzdGVuZXJgLlxuICpcbiAqIEN1cnJlbnQgYnJvd3NlcnMgc3VwcG9ydCB0aGUgYGNhcHR1cmVgLCBgcGFzc2l2ZWAsIGFuZCBgb25jZWAgb3B0aW9ucy4gU2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXIjUGFyYW1ldGVyc1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICogICAgIGNsYXNzIE15RWxlbWVudCB7XG4gKlxuICogICAgICAgY2xpY2tlZCA9IGZhbHNlO1xuICpcbiAqICAgICAgIHJlbmRlcigpIHtcbiAqICAgICAgICAgcmV0dXJuIGh0bWxgPGRpdiBAY2xpY2s9JHt0aGlzLl9vbkNsaWNrfWA+PGJ1dHRvbj48L2J1dHRvbj48L2Rpdj5gO1xuICogICAgICAgfVxuICpcbiAqICAgICAgIEBldmVudE9wdGlvbnMoe2NhcHR1cmU6IHRydWV9KVxuICogICAgICAgX29uQ2xpY2soZSkge1xuICogICAgICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICogICAgICAgfVxuICogICAgIH1cbiAqL1xuZXhwb3J0IGNvbnN0IGV2ZW50T3B0aW9ucyA9IChvcHRpb25zOiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucykgPT5cbiAgICAvLyBSZXR1cm4gdmFsdWUgdHlwZWQgYXMgYW55IHRvIHByZXZlbnQgVHlwZVNjcmlwdCBmcm9tIGNvbXBsYWluaW5nIHRoYXRcbiAgICAvLyBzdGFuZGFyZCBkZWNvcmF0b3IgZnVuY3Rpb24gc2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIFR5cGVTY3JpcHQgZGVjb3JhdG9yXG4gICAgLy8gc2lnbmF0dXJlXG4gICAgLy8gVE9ETyhrc2NoYWFmKTogdW5jbGVhciB3aHkgaXQgd2FzIG9ubHkgZmFpbGluZyBvbiB0aGlzIGRlY29yYXRvciBhbmQgbm90XG4gICAgLy8gdGhlIG90aGVyc1xuICAgICgocHJvdG9PckRlc2NyaXB0b3I6IE9iamVjdHxDbGFzc0VsZW1lbnQsIG5hbWU/OiBzdHJpbmcpID0+XG4gICAgICAgICAobmFtZSAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICAgICBsZWdhY3lFdmVudE9wdGlvbnMob3B0aW9ucywgcHJvdG9PckRlc2NyaXB0b3IgYXMgT2JqZWN0LCBuYW1lKSA6XG4gICAgICAgICBzdGFuZGFyZEV2ZW50T3B0aW9ucyhvcHRpb25zLCBwcm90b09yRGVzY3JpcHRvciBhcyBDbGFzc0VsZW1lbnQpKSBhc1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IGRlY29yYXRvclxuICAgICAgICBhbnk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogV2hlbiB1c2luZyBDbG9zdXJlIENvbXBpbGVyLCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KHByb3BlcnR5LCBvYmplY3QpIGlzXG4gKiByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUgYnkgdGhlIG11bmdlZCBuYW1lIGZvciBvYmplY3RbcHJvcGVydHldLiBXZSBjYW5ub3RcbiAqIGFsaWFzIHRoaXMgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG8gdXNlIGEgc21hbGwgc2hpbSB0aGF0IGhhcyB0aGUgc2FtZVxuICogYmVoYXZpb3Igd2hlbiBub3QgY29tcGlsaW5nLlxuICovXG53aW5kb3cuSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9XG4gICAgPFAgZXh0ZW5kcyBQcm9wZXJ0eUtleT4ocHJvcDogUCwgX29iajogdW5rbm93bik6IFAgPT4gcHJvcDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eTogPFAgZXh0ZW5kcyBQcm9wZXJ0eUtleT4oXG4gICAgICBwcm9wOiBQLCBfb2JqOiB1bmtub3duKSA9PiBQO1xuXG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHk6IHR5cGVvZiBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5O1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgcHJvcGVydHkgdmFsdWVzIHRvIGFuZCBmcm9tIGF0dHJpYnV0ZSB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGxleEF0dHJpYnV0ZUNvbnZlcnRlcjxUeXBlID0gdW5rbm93biwgVHlwZUhpbnQgPSB1bmtub3duPiB7XG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgdG8gY29udmVydCBhbiBhdHRyaWJ1dGUgdmFsdWUgdG8gYSBwcm9wZXJ0eVxuICAgKiB2YWx1ZS5cbiAgICovXG4gIGZyb21BdHRyaWJ1dGU/KHZhbHVlOiBzdHJpbmd8bnVsbCwgdHlwZT86IFR5cGVIaW50KTogVHlwZTtcblxuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHRvIGNvbnZlcnQgYSBwcm9wZXJ0eSB2YWx1ZSB0byBhbiBhdHRyaWJ1dGVcbiAgICogdmFsdWUuXG4gICAqXG4gICAqIEl0IHJldHVybnMgdW5rbm93biBpbnN0ZWFkIG9mIHN0cmluZywgdG8gYmUgY29tcGF0aWJsZSB3aXRoXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL3RydXN0ZWQtdHlwZXMgKGFuZCBzaW1pbGFyIGVmZm9ydHMpLlxuICAgKi9cbiAgdG9BdHRyaWJ1dGU/KHZhbHVlOiBUeXBlLCB0eXBlPzogVHlwZUhpbnQpOiB1bmtub3duO1xufVxuXG50eXBlIEF0dHJpYnV0ZUNvbnZlcnRlcjxUeXBlID0gdW5rbm93biwgVHlwZUhpbnQgPSB1bmtub3duPiA9XG4gICAgQ29tcGxleEF0dHJpYnV0ZUNvbnZlcnRlcjxUeXBlPnwoKHZhbHVlOiBzdHJpbmcsIHR5cGU/OiBUeXBlSGludCkgPT4gVHlwZSk7XG5cbi8qKlxuICogRGVmaW5lcyBvcHRpb25zIGZvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5RGVjbGFyYXRpb248VHlwZSA9IHVua25vd24sIFR5cGVIaW50ID0gdW5rbm93bj4ge1xuICAvKipcbiAgICogSW5kaWNhdGVzIGhvdyBhbmQgd2hldGhlciB0aGUgcHJvcGVydHkgYmVjb21lcyBhbiBvYnNlcnZlZCBhdHRyaWJ1dGUuXG4gICAqIElmIHRoZSB2YWx1ZSBpcyBgZmFsc2VgLCB0aGUgcHJvcGVydHkgaXMgbm90IGFkZGVkIHRvIGBvYnNlcnZlZEF0dHJpYnV0ZXNgLlxuICAgKiBJZiB0cnVlIG9yIGFic2VudCwgdGhlIGxvd2VyY2FzZWQgcHJvcGVydHkgbmFtZSBpcyBvYnNlcnZlZCAoZS5nLiBgZm9vQmFyYFxuICAgKiBiZWNvbWVzIGBmb29iYXJgKS4gSWYgYSBzdHJpbmcsIHRoZSBzdHJpbmcgdmFsdWUgaXMgb2JzZXJ2ZWQgKGUuZ1xuICAgKiBgYXR0cmlidXRlOiAnZm9vLWJhcidgKS5cbiAgICovXG4gIHJlYWRvbmx5IGF0dHJpYnV0ZT86IGJvb2xlYW58c3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIHR5cGUgb2YgdGhlIHByb3BlcnR5LiBUaGlzIGlzIHVzZWQgb25seSBhcyBhIGhpbnQgZm9yIHRoZVxuICAgKiBgY29udmVydGVyYCB0byBkZXRlcm1pbmUgaG93IHRvIGNvbnZlcnQgdGhlIGF0dHJpYnV0ZVxuICAgKiB0by9mcm9tIGEgcHJvcGVydHkuXG4gICAqL1xuICByZWFkb25seSB0eXBlPzogVHlwZUhpbnQ7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBob3cgdG8gY29udmVydCB0aGUgYXR0cmlidXRlIHRvL2Zyb20gYSBwcm9wZXJ0eS4gSWYgdGhpcyB2YWx1ZVxuICAgKiBpcyBhIGZ1bmN0aW9uLCBpdCBpcyB1c2VkIHRvIGNvbnZlcnQgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBhIHRoZSBwcm9wZXJ0eVxuICAgKiB2YWx1ZS4gSWYgaXQncyBhbiBvYmplY3QsIGl0IGNhbiBoYXZlIGtleXMgZm9yIGBmcm9tQXR0cmlidXRlYCBhbmRcbiAgICogYHRvQXR0cmlidXRlYC4gSWYgbm8gYHRvQXR0cmlidXRlYCBmdW5jdGlvbiBpcyBwcm92aWRlZCBhbmRcbiAgICogYHJlZmxlY3RgIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBzZXQgZGlyZWN0bHkgdG8gdGhlXG4gICAqIGF0dHJpYnV0ZS4gQSBkZWZhdWx0IGBjb252ZXJ0ZXJgIGlzIHVzZWQgaWYgbm9uZSBpcyBwcm92aWRlZDsgaXQgc3VwcG9ydHNcbiAgICogYEJvb2xlYW5gLCBgU3RyaW5nYCwgYE51bWJlcmAsIGBPYmplY3RgLCBhbmQgYEFycmF5YC4gTm90ZSxcbiAgICogd2hlbiBhIHByb3BlcnR5IGNoYW5nZXMgYW5kIHRoZSBjb252ZXJ0ZXIgaXMgdXNlZCB0byB1cGRhdGUgdGhlIGF0dHJpYnV0ZSxcbiAgICogdGhlIHByb3BlcnR5IGlzIG5ldmVyIHVwZGF0ZWQgYWdhaW4gYXMgYSByZXN1bHQgb2YgdGhlIGF0dHJpYnV0ZSBjaGFuZ2luZyxcbiAgICogYW5kIHZpY2UgdmVyc2EuXG4gICAqL1xuICByZWFkb25seSBjb252ZXJ0ZXI/OiBBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZSwgVHlwZUhpbnQ+O1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHByb3BlcnR5IHNob3VsZCByZWZsZWN0IHRvIGFuIGF0dHJpYnV0ZS5cbiAgICogSWYgYHRydWVgLCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBzZXQsIHRoZSBhdHRyaWJ1dGUgaXMgc2V0IHVzaW5nIHRoZVxuICAgKiBhdHRyaWJ1dGUgbmFtZSBkZXRlcm1pbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgZm9yIHRoZSBgYXR0cmlidXRlYFxuICAgKiBwcm9wZXJ0eSBvcHRpb24gYW5kIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkgY29udmVydGVkIHVzaW5nIHRoZSBydWxlc1xuICAgKiBmcm9tIHRoZSBgY29udmVydGVyYCBwcm9wZXJ0eSBvcHRpb24uXG4gICAqL1xuICByZWFkb25seSByZWZsZWN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IGluZGljYXRlcyBpZiBhIHByb3BlcnR5IHNob3VsZCBiZSBjb25zaWRlcmVkIGNoYW5nZWQgd2hlblxuICAgKiBpdCBpcyBzZXQuIFRoZSBmdW5jdGlvbiBzaG91bGQgdGFrZSB0aGUgYG5ld1ZhbHVlYCBhbmQgYG9sZFZhbHVlYCBhbmRcbiAgICogcmV0dXJuIGB0cnVlYCBpZiBhbiB1cGRhdGUgc2hvdWxkIGJlIHJlcXVlc3RlZC5cbiAgICovXG4gIGhhc0NoYW5nZWQ/KHZhbHVlOiBUeXBlLCBvbGRWYWx1ZTogVHlwZSk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGFuIGFjY2Vzc29yIHdpbGwgYmUgY3JlYXRlZCBmb3IgdGhpcyBwcm9wZXJ0eS4gQnlcbiAgICogZGVmYXVsdCwgYW4gYWNjZXNzb3Igd2lsbCBiZSBnZW5lcmF0ZWQgZm9yIHRoaXMgcHJvcGVydHkgdGhhdCByZXF1ZXN0cyBhblxuICAgKiB1cGRhdGUgd2hlbiBzZXQuIElmIHRoaXMgZmxhZyBpcyBgdHJ1ZWAsIG5vIGFjY2Vzc29yIHdpbGwgYmUgY3JlYXRlZCwgYW5kXG4gICAqIGl0IHdpbGwgYmUgdGhlIHVzZXIncyByZXNwb25zaWJpbGl0eSB0byBjYWxsXG4gICAqIGB0aGlzLnJlcXVlc3RVcGRhdGUocHJvcGVydHlOYW1lLCBvbGRWYWx1ZSlgIHRvIHJlcXVlc3QgYW4gdXBkYXRlIHdoZW5cbiAgICogdGhlIHByb3BlcnR5IGNoYW5nZXMuXG4gICAqL1xuICByZWFkb25seSBub0FjY2Vzc29yPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBNYXAgb2YgcHJvcGVydGllcyB0byBQcm9wZXJ0eURlY2xhcmF0aW9uIG9wdGlvbnMuIEZvciBlYWNoIHByb3BlcnR5IGFuXG4gKiBhY2Nlc3NvciBpcyBtYWRlLCBhbmQgdGhlIHByb3BlcnR5IGlzIHByb2Nlc3NlZCBhY2NvcmRpbmcgdG8gdGhlXG4gKiBQcm9wZXJ0eURlY2xhcmF0aW9uIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICByZWFkb25seSBba2V5OiBzdHJpbmddOiBQcm9wZXJ0eURlY2xhcmF0aW9uO1xufVxuXG50eXBlIFByb3BlcnR5RGVjbGFyYXRpb25NYXAgPSBNYXA8UHJvcGVydHlLZXksIFByb3BlcnR5RGVjbGFyYXRpb24+O1xuXG50eXBlIEF0dHJpYnV0ZU1hcCA9IE1hcDxzdHJpbmcsIFByb3BlcnR5S2V5PjtcblxuZXhwb3J0IHR5cGUgUHJvcGVydHlWYWx1ZXMgPSBNYXA8UHJvcGVydHlLZXksIHVua25vd24+O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbnZlcnRlcjogQ29tcGxleEF0dHJpYnV0ZUNvbnZlcnRlciA9IHtcblxuICB0b0F0dHJpYnV0ZSh2YWx1ZTogdW5rbm93biwgdHlwZT86IHVua25vd24pOiB1bmtub3duIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gJycgOiBudWxsO1xuICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICBjYXNlIEFycmF5OlxuICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgIHBhc3MgdGhpcyB0aHJvdWdoXG4gICAgICAgIC8vIHRvIGFsbG93IHJlbW92aW5nL25vIGNoYW5nZSBiZWhhdmlvci5cbiAgICAgICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuXG4gIGZyb21BdHRyaWJ1dGUodmFsdWU6IHN0cmluZ3xudWxsLCB0eXBlPzogdW5rbm93bikge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGw7XG4gICAgICBjYXNlIE51bWJlcjpcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSk7XG4gICAgICBjYXNlIE9iamVjdDpcbiAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlISk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEhhc0NoYW5nZWQge1xuICAodmFsdWU6IHVua25vd24sIG9sZDogdW5rbm93bik6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ2hhbmdlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgZGlmZmVyZW50IGZyb20gYG9sZFZhbHVlYC5cbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYXMgdGhlIGRlZmF1bHQgZm9yIGEgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGAgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBub3RFcXVhbDogSGFzQ2hhbmdlZCA9ICh2YWx1ZTogdW5rbm93biwgb2xkOiB1bmtub3duKTogYm9vbGVhbiA9PiB7XG4gIC8vIFRoaXMgZW5zdXJlcyAob2xkPT1OYU4sIHZhbHVlPT1OYU4pIGFsd2F5cyByZXR1cm5zIGZhbHNlXG4gIHJldHVybiBvbGQgIT09IHZhbHVlICYmIChvbGQgPT09IG9sZCB8fCB2YWx1ZSA9PT0gdmFsdWUpO1xufTtcblxuY29uc3QgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb246IFByb3BlcnR5RGVjbGFyYXRpb24gPSB7XG4gIGF0dHJpYnV0ZTogdHJ1ZSxcbiAgdHlwZTogU3RyaW5nLFxuICBjb252ZXJ0ZXI6IGRlZmF1bHRDb252ZXJ0ZXIsXG4gIHJlZmxlY3Q6IGZhbHNlLFxuICBoYXNDaGFuZ2VkOiBub3RFcXVhbFxufTtcblxuY29uc3QgbWljcm90YXNrUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh0cnVlKTtcblxuY29uc3QgU1RBVEVfSEFTX1VQREFURUQgPSAxO1xuY29uc3QgU1RBVEVfVVBEQVRFX1JFUVVFU1RFRCA9IDEgPDwgMjtcbmNvbnN0IFNUQVRFX0lTX1JFRkxFQ1RJTkdfVE9fQVRUUklCVVRFID0gMSA8PCAzO1xuY29uc3QgU1RBVEVfSVNfUkVGTEVDVElOR19UT19QUk9QRVJUWSA9IDEgPDwgNDtcbmNvbnN0IFNUQVRFX0hBU19DT05ORUNURUQgPSAxIDw8IDU7XG50eXBlIFVwZGF0ZVN0YXRlID0gdHlwZW9mIFNUQVRFX0hBU19VUERBVEVEfHR5cGVvZiBTVEFURV9VUERBVEVfUkVRVUVTVEVEfFxuICAgIHR5cGVvZiBTVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURXxcbiAgICB0eXBlb2YgU1RBVEVfSVNfUkVGTEVDVElOR19UT19QUk9QRVJUWXx0eXBlb2YgU1RBVEVfSEFTX0NPTk5FQ1RFRDtcblxuLyoqXG4gKiBCYXNlIGVsZW1lbnQgY2xhc3Mgd2hpY2ggbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMuIFdoZW5cbiAqIHByb3BlcnRpZXMgY2hhbmdlLCB0aGUgYHVwZGF0ZWAgbWV0aG9kIGlzIGFzeW5jaHJvbm91c2x5IGNhbGxlZC4gVGhpcyBtZXRob2RcbiAqIHNob3VsZCBiZSBzdXBwbGllZCBieSBzdWJjbGFzc2VycyB0byByZW5kZXIgdXBkYXRlcyBhcyBkZXNpcmVkLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVXBkYXRpbmdFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAvKlxuICAgKiBEdWUgdG8gY2xvc3VyZSBjb21waWxlciBFUzYgY29tcGlsYXRpb24gYnVncywgQG5vY29sbGFwc2UgaXMgcmVxdWlyZWQgb25cbiAgICogYWxsIHN0YXRpYyBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHdpdGggaW5pdGlhbGl6ZXJzLiAgUmVmZXJlbmNlOlxuICAgKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9pc3N1ZXMvMTc3NlxuICAgKi9cblxuICAvKipcbiAgICogTWFwcyBhdHRyaWJ1dGUgbmFtZXMgdG8gcHJvcGVydGllczsgZm9yIGV4YW1wbGUgYGZvb2JhcmAgYXR0cmlidXRlIHRvXG4gICAqIGBmb29CYXJgIHByb3BlcnR5LiBDcmVhdGVkIGxhemlseSBvbiB1c2VyIHN1YmNsYXNzZXMgd2hlbiBmaW5hbGl6aW5nIHRoZVxuICAgKiBjbGFzcy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIF9hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwOiBBdHRyaWJ1dGVNYXA7XG5cbiAgLyoqXG4gICAqIE1hcmtzIGNsYXNzIGFzIGhhdmluZyBmaW5pc2hlZCBjcmVhdGluZyBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHN0YXRpYyBmaW5hbGl6ZWQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBNZW1vaXplZCBsaXN0IG9mIGFsbCBjbGFzcyBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgYW55IHN1cGVyY2xhc3MgcHJvcGVydGllcy5cbiAgICogQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGUgY2xhc3MuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfY2xhc3NQcm9wZXJ0aWVzPzogUHJvcGVydHlEZWNsYXJhdGlvbk1hcDtcblxuICAvKipcbiAgICogVXNlci1zdXBwbGllZCBvYmplY3QgdGhhdCBtYXBzIHByb3BlcnR5IG5hbWVzIHRvIGBQcm9wZXJ0eURlY2xhcmF0aW9uYFxuICAgKiBvYmplY3RzIGNvbnRhaW5pbmcgb3B0aW9ucyBmb3IgY29uZmlndXJpbmcgdGhlIHByb3BlcnR5LlxuICAgKi9cbiAgc3RhdGljIHByb3BlcnRpZXM6IFByb3BlcnR5RGVjbGFyYXRpb25zO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHJlZ2lzdGVyZWQgcHJvcGVydGllcy5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIC8vIG5vdGU6IHBpZ2d5IGJhY2tpbmcgb24gdGhpcyB0byBlbnN1cmUgd2UncmUgZmluYWxpemVkLlxuICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICB0aGlzLl9jbGFzc1Byb3BlcnRpZXMhLmZvckVhY2goKHYsIHApID0+IHtcbiAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkocCwgdik7XG4gICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuc2V0KGF0dHIsIHApO1xuICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXM7XG4gIH1cblxuICAvKipcbiAgICogRW5zdXJlcyB0aGUgcHJpdmF0ZSBgX2NsYXNzUHJvcGVydGllc2AgcHJvcGVydHkgbWV0YWRhdGEgaXMgY3JlYXRlZC5cbiAgICogSW4gYWRkaXRpb24gdG8gYGZpbmFsaXplYCB0aGlzIGlzIGFsc28gY2FsbGVkIGluIGBjcmVhdGVQcm9wZXJ0eWAgdG9cbiAgICogZW5zdXJlIHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3IgY2FuIGFkZCBwcm9wZXJ0eSBtZXRhZGF0YS5cbiAgICovXG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBwcml2YXRlIHN0YXRpYyBfZW5zdXJlQ2xhc3NQcm9wZXJ0aWVzKCkge1xuICAgIC8vIGVuc3VyZSBwcml2YXRlIHN0b3JhZ2UgZm9yIHByb3BlcnR5IGRlY2xhcmF0aW9ucy5cbiAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoXG4gICAgICAgICAgICBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdfY2xhc3NQcm9wZXJ0aWVzJywgdGhpcykpKSB7XG4gICAgICB0aGlzLl9jbGFzc1Byb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAvLyBOT1RFOiBXb3JrYXJvdW5kIElFMTEgbm90IHN1cHBvcnRpbmcgTWFwIGNvbnN0cnVjdG9yIGFyZ3VtZW50LlxuICAgICAgY29uc3Qgc3VwZXJQcm9wZXJ0aWVzOiBQcm9wZXJ0eURlY2xhcmF0aW9uTWFwID1cbiAgICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2NsYXNzUHJvcGVydGllcztcbiAgICAgIGlmIChzdXBlclByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlclByb3BlcnRpZXMuZm9yRWFjaChcbiAgICAgICAgICAgICh2OiBQcm9wZXJ0eURlY2xhcmF0aW9uLCBrOiBQcm9wZXJ0eUtleSkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLl9jbGFzc1Byb3BlcnRpZXMhLnNldChrLCB2KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0LlxuICAgKiBUaGUgcHJvcGVydHkgc2V0dGVyIGNhbGxzIHRoZSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBwcm9wZXJ0eSBvcHRpb25cbiAgICogb3IgdXNlcyBhIHN0cmljdCBpZGVudGl0eSBjaGVjayB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdG8gcmVxdWVzdFxuICAgKiBhbiB1cGRhdGUuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlUHJvcGVydHkoXG4gICAgICBuYW1lOiBQcm9wZXJ0eUtleSxcbiAgICAgIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb24gPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgY2FuIGJlIGNhbGxlZCBieSB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIHdoaWNoXG4gICAgLy8gaXMgY2FsbGVkIGJlZm9yZSBgZmluYWxpemVgLCB3ZSBlbnN1cmUgc3RvcmFnZSBleGlzdHMgZm9yIHByb3BlcnR5XG4gICAgLy8gbWV0YWRhdGEuXG4gICAgdGhpcy5fZW5zdXJlQ2xhc3NQcm9wZXJ0aWVzKCk7XG4gICAgdGhpcy5fY2xhc3NQcm9wZXJ0aWVzIS5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgLy8gRG8gbm90IGdlbmVyYXRlIGFuIGFjY2Vzc29yIGlmIHRoZSBwcm90b3R5cGUgYWxyZWFkeSBoYXMgb25lLCBzaW5jZVxuICAgIC8vIGl0IHdvdWxkIGJlIGxvc3Qgb3RoZXJ3aXNlIGFuZCB0aGF0IHdvdWxkIG5ldmVyIGJlIHRoZSB1c2VyJ3MgaW50ZW50aW9uO1xuICAgIC8vIEluc3RlYWQsIHdlIGV4cGVjdCB1c2VycyB0byBjYWxsIGByZXF1ZXN0VXBkYXRlYCB0aGVtc2VsdmVzIGZyb21cbiAgICAvLyB1c2VyLWRlZmluZWQgYWNjZXNzb3JzLiBOb3RlIHRoYXQgaWYgdGhlIHN1cGVyIGhhcyBhbiBhY2Nlc3NvciB3ZSB3aWxsXG4gICAgLy8gc3RpbGwgb3ZlcndyaXRlIGl0XG4gICAgaWYgKG9wdGlvbnMubm9BY2Nlc3NvciB8fCB0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSB0eXBlb2YgbmFtZSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2woKSA6IGBfXyR7bmFtZX1gO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBubyBzeW1ib2wgaW4gaW5kZXhcbiAgICAgIGdldCgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpc1trZXldO1xuICAgICAgfSxcbiAgICAgIHNldCh0aGlzOiBVcGRhdGluZ0VsZW1lbnQsIHZhbHVlOiB1bmtub3duKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgbm8gc3ltYm9sIGluIGluZGV4XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gKHRoaXMgYXMgYW55KVtuYW1lXTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSBubyBzeW1ib2wgaW4gaW5kZXhcbiAgICAgICAgKHRoaXMgYXMgYW55KVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3JlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHByb3BlcnR5IGFjY2Vzc29ycyBmb3IgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzIGFuZCBlbnN1cmVzXG4gICAqIGFueSBzdXBlcmNsYXNzZXMgYXJlIGFsc28gZmluYWxpemVkLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgcHJvdGVjdGVkIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdmaW5hbGl6ZWQnLCB0aGlzKSkgJiZcbiAgICAgICAgdGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZmluYWxpemUgYW55IHN1cGVyY2xhc3Nlc1xuICAgIGNvbnN0IHN1cGVyQ3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKTtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ3Rvci5maW5hbGl6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc3VwZXJDdG9yLmZpbmFsaXplKCk7XG4gICAgfVxuICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLl9lbnN1cmVDbGFzc1Byb3BlcnRpZXMoKTtcbiAgICAvLyBpbml0aWFsaXplIE1hcCBwb3B1bGF0ZWQgaW4gb2JzZXJ2ZWRBdHRyaWJ1dGVzXG4gICAgdGhpcy5fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCA9IG5ldyBNYXAoKTtcbiAgICAvLyBtYWtlIGFueSBwcm9wZXJ0aWVzXG4gICAgLy8gTm90ZSwgb25seSBwcm9jZXNzIFwib3duXCIgcHJvcGVydGllcyBzaW5jZSB0aGlzIGVsZW1lbnQgd2lsbCBpbmhlcml0XG4gICAgLy8gYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiB0aGUgc3VwZXJDbGFzcywgYW5kIGZpbmFsaXphdGlvbiBlbnN1cmVzXG4gICAgLy8gdGhlIGVudGlyZSBwcm90b3R5cGUgY2hhaW4gaXMgZmluYWxpemVkLlxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ3Byb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgLy8gc3VwcG9ydCBzeW1ib2xzIGluIHByb3BlcnRpZXMgKElFMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGlzKVxuICAgICAgY29uc3QgcHJvcEtleXMgPSBbXG4gICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3BzKSxcbiAgICAgICAgLi4uKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BzKSA6XG4gICAgICAgICAgICBbXVxuICAgICAgXTtcbiAgICAgIC8vIFRoaXMgZm9yL29mIGlzIG9rIGJlY2F1c2UgcHJvcEtleXMgaXMgYW4gYXJyYXlcbiAgICAgIGZvciAoY29uc3QgcCBvZiBwcm9wS2V5cykge1xuICAgICAgICAvLyBub3RlLCB1c2Ugb2YgYGFueWAgaXMgZHVlIHRvIFR5cGVTcmlwdCBsYWNrIG9mIHN1cHBvcnQgZm9yIHN5bWJvbCBpblxuICAgICAgICAvLyBpbmRleCB0eXBlc1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55IG5vIHN5bWJvbCBpbiBpbmRleFxuICAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnR5KHAsIChwcm9wcyBhcyBhbnkpW3BdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIGdpdmVuIGF0dHJpYnV0ZSBgbmFtZWAuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KFxuICAgICAgbmFtZTogUHJvcGVydHlLZXksIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICBjb25zdCBhdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZTtcbiAgICByZXR1cm4gYXR0cmlidXRlID09PSBmYWxzZSA/XG4gICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICh0eXBlb2YgYXR0cmlidXRlID09PSAnc3RyaW5nJyA/XG4gICAgICAgICAgICAgYXR0cmlidXRlIDpcbiAgICAgICAgICAgICAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnID8gbmFtZS50b0xvd2VyQ2FzZSgpIDogdW5kZWZpbmVkKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGEgcHJvcGVydHkgc2hvdWxkIHJlcXVlc3QgYW4gdXBkYXRlLlxuICAgKiBDYWxsZWQgd2hlbiBhIHByb3BlcnR5IHZhbHVlIGlzIHNldCBhbmQgdXNlcyB0aGUgYGhhc0NoYW5nZWRgXG4gICAqIG9wdGlvbiBmb3IgdGhlIHByb3BlcnR5IGlmIHByZXNlbnQgb3IgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2suXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBfdmFsdWVIYXNDaGFuZ2VkKFxuICAgICAgdmFsdWU6IHVua25vd24sIG9sZDogdW5rbm93biwgaGFzQ2hhbmdlZDogSGFzQ2hhbmdlZCA9IG5vdEVxdWFsKSB7XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQodmFsdWUsIG9sZCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgdmFsdWUuXG4gICAqIENhbGxlZCB2aWEgdGhlIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgIGFuZCB1c2VzIHRoZSBwcm9wZXJ0eSdzXG4gICAqIGBjb252ZXJ0ZXJgIG9yIGBjb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZWAgcHJvcGVydHkgb3B0aW9uLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX3Byb3BlcnR5VmFsdWVGcm9tQXR0cmlidXRlKFxuICAgICAgdmFsdWU6IHN0cmluZ3xudWxsLCBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBjb25zdCBjb252ZXJ0ZXIgPSBvcHRpb25zLmNvbnZlcnRlciB8fCBkZWZhdWx0Q29udmVydGVyO1xuICAgIGNvbnN0IGZyb21BdHRyaWJ1dGUgPVxuICAgICAgICAodHlwZW9mIGNvbnZlcnRlciA9PT0gJ2Z1bmN0aW9uJyA/IGNvbnZlcnRlciA6IGNvbnZlcnRlci5mcm9tQXR0cmlidXRlKTtcbiAgICByZXR1cm4gZnJvbUF0dHJpYnV0ZSA/IGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIDogdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXR0cmlidXRlIHZhbHVlIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgdmFsdWUuIElmIHRoaXNcbiAgICogcmV0dXJucyB1bmRlZmluZWQsIHRoZSBwcm9wZXJ0eSB3aWxsICpub3QqIGJlIHJlZmxlY3RlZCB0byBhbiBhdHRyaWJ1dGUuXG4gICAqIElmIHRoaXMgcmV0dXJucyBudWxsLCB0aGUgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZCwgb3RoZXJ3aXNlIHRoZVxuICAgKiBhdHRyaWJ1dGUgd2lsbCBiZSBzZXQgdG8gdGhlIHZhbHVlLlxuICAgKiBUaGlzIHVzZXMgdGhlIHByb3BlcnR5J3MgYHJlZmxlY3RgIGFuZCBgdHlwZS50b0F0dHJpYnV0ZWAgcHJvcGVydHkgb3B0aW9ucy5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIF9wcm9wZXJ0eVZhbHVlVG9BdHRyaWJ1dGUoXG4gICAgICB2YWx1ZTogdW5rbm93biwgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgIGlmIChvcHRpb25zLnJlZmxlY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIGNvbnN0IGNvbnZlcnRlciA9IG9wdGlvbnMuY29udmVydGVyO1xuICAgIGNvbnN0IHRvQXR0cmlidXRlID1cbiAgICAgICAgY29udmVydGVyICYmIChjb252ZXJ0ZXIgYXMgQ29tcGxleEF0dHJpYnV0ZUNvbnZlcnRlcikudG9BdHRyaWJ1dGUgfHxcbiAgICAgICAgZGVmYXVsdENvbnZlcnRlci50b0F0dHJpYnV0ZTtcbiAgICByZXR1cm4gdG9BdHRyaWJ1dGUhKHZhbHVlLCB0eXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0YXRlOiBVcGRhdGVTdGF0ZSA9IDA7XG4gIHByaXZhdGUgX2luc3RhbmNlUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXN8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF91cGRhdGVQcm9taXNlOiBQcm9taXNlPHVua25vd24+ID0gbWljcm90YXNrUHJvbWlzZTtcbiAgcHJpdmF0ZSBfaGFzQ29ubmVjdGVkUmVzb2x2ZXI6ICgoKSA9PiB2b2lkKXx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIE1hcCB3aXRoIGtleXMgZm9yIGFueSBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0XG4gICAqIHVwZGF0ZSBjeWNsZSB3aXRoIHByZXZpb3VzIHZhbHVlcy5cbiAgICovXG4gIHByaXZhdGUgX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogTWFwIHdpdGgga2V5cyBvZiBwcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCB3aGVuIHVwZGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIF9yZWZsZWN0aW5nUHJvcGVydGllczogTWFwPFByb3BlcnR5S2V5LCBQcm9wZXJ0eURlY2xhcmF0aW9uPnxcbiAgICAgIHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGVsZW1lbnQgaW5pdGlhbGl6YXRpb24uIEJ5IGRlZmF1bHQgY2FwdHVyZXMgYW55IHByZS1zZXQgdmFsdWVzIGZvclxuICAgKiByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLl9zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCk7XG4gICAgLy8gZW5zdXJlcyBmaXJzdCB1cGRhdGUgd2lsbCBiZSBjYXVnaHQgYnkgYW4gZWFybHkgYWNjZXNzIG9mIGB1cGRhdGVDb21wbGV0ZWBcbiAgICB0aGlzLl9yZXF1ZXN0VXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogRml4ZXMgYW55IHByb3BlcnRpZXMgc2V0IG9uIHRoZSBpbnN0YW5jZSBiZWZvcmUgdXBncmFkZSB0aW1lLlxuICAgKiBPdGhlcndpc2UgdGhlc2Ugd291bGQgc2hhZG93IHRoZSBhY2Nlc3NvciBhbmQgYnJlYWsgdGhlc2UgcHJvcGVydGllcy5cbiAgICogVGhlIHByb3BlcnRpZXMgYXJlIHN0b3JlZCBpbiBhIE1hcCB3aGljaCBpcyBwbGF5ZWQgYmFjayBhZnRlciB0aGVcbiAgICogY29uc3RydWN0b3IgcnVucy4gTm90ZSwgb24gdmVyeSBvbGQgdmVyc2lvbnMgb2YgU2FmYXJpICg8PTkpIG9yIENocm9tZVxuICAgKiAoPD00MSksIHByb3BlcnRpZXMgY3JlYXRlZCBmb3IgbmF0aXZlIHBsYXRmb3JtIHByb3BlcnRpZXMgbGlrZSAoYGlkYCBvclxuICAgKiBgbmFtZWApIG1heSBub3QgaGF2ZSBkZWZhdWx0IHZhbHVlcyBzZXQgaW4gdGhlIGVsZW1lbnQgY29uc3RydWN0b3IuIE9uXG4gICAqIHRoZXNlIGJyb3dzZXJzIG5hdGl2ZSBwcm9wZXJ0aWVzIGFwcGVhciBvbiBpbnN0YW5jZXMgYW5kIHRoZXJlZm9yZSB0aGVpclxuICAgKiBkZWZhdWx0IHZhbHVlIHdpbGwgb3ZlcndyaXRlIGFueSBlbGVtZW50IGRlZmF1bHQgKGUuZy4gaWYgdGhlIGVsZW1lbnQgc2V0c1xuICAgKiB0aGlzLmlkID0gJ2lkJyBpbiB0aGUgY29uc3RydWN0b3IsIHRoZSAnaWQnIHdpbGwgYmVjb21lICcnIHNpbmNlIHRoaXMgaXNcbiAgICogdGhlIG5hdGl2ZSBwbGF0Zm9ybSBkZWZhdWx0KS5cbiAgICovXG4gIHByaXZhdGUgX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQpXG4gICAgICAgIC5fY2xhc3NQcm9wZXJ0aWVzIS5mb3JFYWNoKChfdiwgcCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXNbcCBhcyBrZXlvZiB0aGlzXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3AgYXMga2V5b2YgdGhpc107XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlUHJvcGVydGllcykge1xuICAgICAgICAgICAgICB0aGlzLl9pbnN0YW5jZVByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZVByb3BlcnRpZXMuc2V0KHAsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgcHJldmlvdXNseSBzYXZlZCBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgcHJpdmF0ZSBfYXBwbHlJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICB0aGlzLl9pbnN0YW5jZVByb3BlcnRpZXMhLmZvckVhY2goKHYsIHApID0+ICh0aGlzIGFzIGFueSlbcF0gPSB2KTtcbiAgICB0aGlzLl9pbnN0YW5jZVByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSEFTX0NPTk5FQ1RFRDtcbiAgICAvLyBFbnN1cmUgZmlyc3QgY29ubmVjdGlvbiBjb21wbGV0ZXMgYW4gdXBkYXRlLiBVcGRhdGVzIGNhbm5vdCBjb21wbGV0ZSBiZWZvcmVcbiAgICAvLyBjb25uZWN0aW9uIGFuZCBpZiBvbmUgaXMgcGVuZGluZyBjb25uZWN0aW9uIHRoZSBgX2hhc0Nvbm5lY3Rpb25SZXNvbHZlcmBcbiAgICAvLyB3aWxsIGV4aXN0LiBJZiBzbywgcmVzb2x2ZSBpdCB0byBjb21wbGV0ZSB0aGUgdXBkYXRlLCBvdGhlcndpc2VcbiAgICAvLyByZXF1ZXN0VXBkYXRlLlxuICAgIGlmICh0aGlzLl9oYXNDb25uZWN0ZWRSZXNvbHZlcikge1xuICAgICAgdGhpcy5faGFzQ29ubmVjdGVkUmVzb2x2ZXIoKTtcbiAgICAgIHRoaXMuX2hhc0Nvbm5lY3RlZFJlc29sdmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAqIHJlc2VydmluZyB0aGUgcG9zc2liaWxpdHkgb2YgbWFraW5nIG5vbi1icmVha2luZyBmZWF0dXJlIGFkZGl0aW9uc1xuICAgKiB3aGVuIGRpc2Nvbm5lY3RpbmcgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLlxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gIH1cblxuICAvKipcbiAgICogU3luY2hyb25pemVzIHByb3BlcnR5IHZhbHVlcyB3aGVuIGF0dHJpYnV0ZXMgY2hhbmdlLlxuICAgKi9cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgb2xkOiBzdHJpbmd8bnVsbCwgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG4gICAgaWYgKG9sZCAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX2F0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Byb3BlcnR5VG9BdHRyaWJ1dGUoXG4gICAgICBuYW1lOiBQcm9wZXJ0eUtleSwgdmFsdWU6IHVua25vd24sXG4gICAgICBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24pIHtcbiAgICBjb25zdCBjdG9yID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFVwZGF0aW5nRWxlbWVudCk7XG4gICAgY29uc3QgYXR0ciA9IGN0b3IuX2F0dHJpYnV0ZU5hbWVGb3JQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBhdHRyVmFsdWUgPSBjdG9yLl9wcm9wZXJ0eVZhbHVlVG9BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgLy8gYW4gdW5kZWZpbmVkIHZhbHVlIGRvZXMgbm90IGNoYW5nZSB0aGUgYXR0cmlidXRlLlxuICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFRyYWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBiZWluZyByZWZsZWN0ZWQgdG8gYXZvaWRcbiAgICAgIC8vIHNldHRpbmcgdGhlIHByb3BlcnR5IGFnYWluIHZpYSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC4gTm90ZTpcbiAgICAgIC8vIDEuIHRoaXMgdGFrZXMgYWR2YW50YWdlIG9mIHRoZSBmYWN0IHRoYXQgdGhlIGNhbGxiYWNrIGlzIHN5bmNocm9ub3VzLlxuICAgICAgLy8gMi4gd2lsbCBiZWhhdmUgaW5jb3JyZWN0bHkgaWYgbXVsdGlwbGUgYXR0cmlidXRlcyBhcmUgaW4gdGhlIHJlYWN0aW9uXG4gICAgICAvLyBzdGFjayBhdCB0aW1lIG9mIGNhbGxpbmcuIEhvd2V2ZXIsIHNpbmNlIHdlIHByb2Nlc3MgYXR0cmlidXRlc1xuICAgICAgLy8gaW4gYHVwZGF0ZWAgdGhpcyBzaG91bGQgbm90IGJlIHBvc3NpYmxlIChvciBhbiBleHRyZW1lIGNvcm5lciBjYXNlXG4gICAgICAvLyB0aGF0IHdlJ2QgbGlrZSB0byBkaXNjb3ZlcikuXG4gICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgfCBTVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURTtcbiAgICAgIGlmIChhdHRyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJWYWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgfVxuICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSAmIH5TVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZ3xudWxsKSB7XG4gICAgLy8gVXNlIHRyYWNraW5nIGluZm8gdG8gYXZvaWQgZGVzZXJpYWxpemluZyBhdHRyaWJ1dGUgdmFsdWUgaWYgaXQgd2FzXG4gICAgLy8ganVzdCBzZXQgZnJvbSBhIHByb3BlcnR5IHNldHRlci5cbiAgICBpZiAodGhpcy5fdXBkYXRlU3RhdGUgJiBTVEFURV9JU19SRUZMRUNUSU5HX1RPX0FUVFJJQlVURSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjdG9yID0gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFVwZGF0aW5nRWxlbWVudCk7XG4gICAgY29uc3QgcHJvcE5hbWUgPSBjdG9yLl9hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLmdldChuYW1lKTtcbiAgICBpZiAocHJvcE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9XG4gICAgICAgICAgY3Rvci5fY2xhc3NQcm9wZXJ0aWVzIS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uO1xuICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfSVNfUkVGTEVDVElOR19UT19QUk9QRVJUWTtcbiAgICAgIHRoaXNbcHJvcE5hbWUgYXMga2V5b2YgdGhpc10gPVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICBjdG9yLl9wcm9wZXJ0eVZhbHVlRnJvbUF0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucykgYXMgYW55O1xuICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgdGhpcy5fdXBkYXRlU3RhdGUgPSB0aGlzLl91cGRhdGVTdGF0ZSAmIH5TVEFURV9JU19SRUZMRUNUSU5HX1RPX1BST1BFUlRZO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHByaXZhdGUgdmVyc2lvbiBvZiBgcmVxdWVzdFVwZGF0ZWAgZG9lcyBub3QgYWNjZXNzIG9yIHJldHVybiB0aGVcbiAgICogYHVwZGF0ZUNvbXBsZXRlYCBwcm9taXNlLiBUaGlzIHByb21pc2UgY2FuIGJlIG92ZXJyaWRkZW4gYW5kIGlzIHRoZXJlZm9yZVxuICAgKiBub3QgZnJlZSB0byBhY2Nlc3MuXG4gICAqL1xuICBwcml2YXRlIF9yZXF1ZXN0VXBkYXRlKG5hbWU/OiBQcm9wZXJ0eUtleSwgb2xkVmFsdWU/OiB1bmtub3duKSB7XG4gICAgbGV0IHNob3VsZFJlcXVlc3RVcGRhdGUgPSB0cnVlO1xuICAgIC8vIElmIHdlIGhhdmUgYSBwcm9wZXJ0eSBrZXksIHBlcmZvcm0gcHJvcGVydHkgdXBkYXRlIHN0ZXBzLlxuICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBVcGRhdGluZ0VsZW1lbnQ7XG4gICAgICBjb25zdCBvcHRpb25zID1cbiAgICAgICAgICBjdG9yLl9jbGFzc1Byb3BlcnRpZXMhLmdldChuYW1lKSB8fCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbjtcbiAgICAgIGlmIChjdG9yLl92YWx1ZUhhc0NoYW5nZWQoXG4gICAgICAgICAgICAgIHRoaXNbbmFtZSBhcyBrZXlvZiB0aGlzXSwgb2xkVmFsdWUsIG9wdGlvbnMuaGFzQ2hhbmdlZCkpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jaGFuZ2VkUHJvcGVydGllcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VkUHJvcGVydGllcy5zZXQobmFtZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCB0byByZWZsZWN0aW5nIHByb3BlcnRpZXMgc2V0LlxuICAgICAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IGV2ZXJ5IGNoYW5nZSBoYXMgYSBjaGFuY2UgdG8gYWRkIHRoZVxuICAgICAgICAvLyBwcm9wZXJ0eSB0byBgX3JlZmxlY3RpbmdQcm9wZXJ0aWVzYC4gVGhpcyBlbnN1cmVzIHNldHRpbmdcbiAgICAgICAgLy8gYXR0cmlidXRlICsgcHJvcGVydHkgcmVmbGVjdHMgY29ycmVjdGx5LlxuICAgICAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlICYmXG4gICAgICAgICAgICAhKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSVNfUkVGTEVDVElOR19UT19QUk9QRVJUWSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWJvcnQgdGhlIHJlcXVlc3QgaWYgdGhlIHByb3BlcnR5IHNob3VsZCBub3QgYmUgY29uc2lkZXJlZCBjaGFuZ2VkLlxuICAgICAgICBzaG91bGRSZXF1ZXN0VXBkYXRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5faGFzUmVxdWVzdGVkVXBkYXRlICYmIHNob3VsZFJlcXVlc3RVcGRhdGUpIHtcbiAgICAgIHRoaXMuX2VucXVldWVVcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgYW4gdXBkYXRlIHdoaWNoIGlzIHByb2Nlc3NlZCBhc3luY2hyb25vdXNseS4gVGhpcyBzaG91bGRcbiAgICogYmUgY2FsbGVkIHdoZW4gYW4gZWxlbWVudCBzaG91bGQgdXBkYXRlIGJhc2VkIG9uIHNvbWUgc3RhdGUgbm90IHRyaWdnZXJlZFxuICAgKiBieSBzZXR0aW5nIGEgcHJvcGVydHkuIEluIHRoaXMgY2FzZSwgcGFzcyBubyBhcmd1bWVudHMuIEl0IHNob3VsZCBhbHNvIGJlXG4gICAqIGNhbGxlZCB3aGVuIG1hbnVhbGx5IGltcGxlbWVudGluZyBhIHByb3BlcnR5IHNldHRlci4gSW4gdGhpcyBjYXNlLCBwYXNzIHRoZVxuICAgKiBwcm9wZXJ0eSBgbmFtZWAgYW5kIGBvbGRWYWx1ZWAgdG8gZW5zdXJlIHRoYXQgYW55IGNvbmZpZ3VyZWQgcHJvcGVydHlcbiAgICogb3B0aW9ucyBhcmUgaG9ub3JlZC4gUmV0dXJucyB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBQcm9taXNlIHdoaWNoIGlzIHJlc29sdmVkXG4gICAqIHdoZW4gdGhlIHVwZGF0ZSBjb21wbGV0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIHtQcm9wZXJ0eUtleX0gKG9wdGlvbmFsKSBuYW1lIG9mIHJlcXVlc3RpbmcgcHJvcGVydHlcbiAgICogQHBhcmFtIG9sZFZhbHVlIHthbnl9IChvcHRpb25hbCkgb2xkIHZhbHVlIG9mIHJlcXVlc3RpbmcgcHJvcGVydHlcbiAgICogQHJldHVybnMge1Byb21pc2V9IEEgUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlIHVwZGF0ZSBjb21wbGV0ZXMuXG4gICAqL1xuICByZXF1ZXN0VXBkYXRlKG5hbWU/OiBQcm9wZXJ0eUtleSwgb2xkVmFsdWU/OiB1bmtub3duKSB7XG4gICAgdGhpcy5fcmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlQ29tcGxldGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB1cCB0aGUgZWxlbWVudCB0byBhc3luY2hyb25vdXNseSB1cGRhdGUuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9lbnF1ZXVlVXBkYXRlKCkge1xuICAgIC8vIE1hcmsgc3RhdGUgdXBkYXRpbmcuLi5cbiAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlIHwgU1RBVEVfVVBEQVRFX1JFUVVFU1RFRDtcbiAgICBsZXQgcmVzb2x2ZSE6IChyOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIGxldCByZWplY3QhOiAoZTogRXJyb3IpID0+IHZvaWQ7XG4gICAgY29uc3QgcHJldmlvdXNVcGRhdGVQcm9taXNlID0gdGhpcy5fdXBkYXRlUHJvbWlzZTtcbiAgICB0aGlzLl91cGRhdGVQcm9taXNlID0gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgcmVqZWN0ID0gcmVqO1xuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICAvLyBFbnN1cmUgYW55IHByZXZpb3VzIHVwZGF0ZSBoYXMgcmVzb2x2ZWQgYmVmb3JlIHVwZGF0aW5nLlxuICAgICAgLy8gVGhpcyBgYXdhaXRgIGFsc28gZW5zdXJlcyB0aGF0IHByb3BlcnR5IGNoYW5nZXMgYXJlIGJhdGNoZWQuXG4gICAgICBhd2FpdCBwcmV2aW91c1VwZGF0ZVByb21pc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWdub3JlIGFueSBwcmV2aW91cyBlcnJvcnMuIFdlIG9ubHkgY2FyZSB0aGF0IHRoZSBwcmV2aW91cyBjeWNsZSBpc1xuICAgICAgLy8gZG9uZS4gQW55IGVycm9yIHNob3VsZCBoYXZlIGJlZW4gaGFuZGxlZCBpbiB0aGUgcHJldmlvdXMgdXBkYXRlLlxuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaGFzIGNvbm5lY3RlZCBiZWZvcmUgdXBkYXRpbmcuXG4gICAgaWYgKCF0aGlzLl9oYXNDb25uZWN0ZWQpIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXMpID0+IHRoaXMuX2hhc0Nvbm5lY3RlZFJlc29sdmVyID0gcmVzKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGVyZm9ybVVwZGF0ZSgpO1xuICAgICAgLy8gSWYgYHBlcmZvcm1VcGRhdGVgIHJldHVybnMgYSBQcm9taXNlLCB3ZSBhd2FpdCBpdC4gVGhpcyBpcyBkb25lIHRvXG4gICAgICAvLyBlbmFibGUgY29vcmRpbmF0aW5nIHVwZGF0ZXMgd2l0aCBhIHNjaGVkdWxlci4gTm90ZSwgdGhlIHJlc3VsdCBpc1xuICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVqZWN0KGUpO1xuICAgIH1cbiAgICByZXNvbHZlKCF0aGlzLl9oYXNSZXF1ZXN0ZWRVcGRhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2hhc0Nvbm5lY3RlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSEFTX0NPTk5FQ1RFRCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfaGFzUmVxdWVzdGVkVXBkYXRlKCkge1xuICAgIHJldHVybiAodGhpcy5fdXBkYXRlU3RhdGUgJiBTVEFURV9VUERBVEVfUkVRVUVTVEVEKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaGFzVXBkYXRlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSEFTX1VQREFURUQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGFuIGVsZW1lbnQgdXBkYXRlLiBOb3RlLCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGVcbiAgICogdXBkYXRlLCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIHdpbGwgbm90IGJlIGNhbGxlZC5cbiAgICpcbiAgICogWW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIHRpbWluZyBvZiB1cGRhdGVzLiBJZiB0aGlzXG4gICAqIG1ldGhvZCBpcyBvdmVycmlkZGVuLCBgc3VwZXIucGVyZm9ybVVwZGF0ZSgpYCBtdXN0IGJlIGNhbGxlZC5cbiAgICpcbiAgICogRm9yIGluc3RhbmNlLCB0byBzY2hlZHVsZSB1cGRhdGVzIHRvIG9jY3VyIGp1c3QgYmVmb3JlIHRoZSBuZXh0IGZyYW1lOlxuICAgKlxuICAgKiBgYGBcbiAgICogcHJvdGVjdGVkIGFzeW5jIHBlcmZvcm1VcGRhdGUoKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAqICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbiAgICogICBzdXBlci5wZXJmb3JtVXBkYXRlKCk7XG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBwcm90ZWN0ZWQgcGVyZm9ybVVwZGF0ZSgpOiB2b2lkfFByb21pc2U8dW5rbm93bj4ge1xuICAgIC8vIE1peGluIGluc3RhbmNlIHByb3BlcnRpZXMgb25jZSwgaWYgdGhleSBleGlzdC5cbiAgICBpZiAodGhpcy5faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICB0aGlzLl9hcHBseUluc3RhbmNlUHJvcGVydGllcygpO1xuICAgIH1cbiAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgY29uc3QgY2hhbmdlZFByb3BlcnRpZXMgPSB0aGlzLl9jaGFuZ2VkUHJvcGVydGllcztcbiAgICB0cnkge1xuICAgICAgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gUHJldmVudCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIGZyb20gcnVubmluZyB3aGVuIHRoZXJlJ3MgYW5cbiAgICAgIC8vIHVwZGF0ZSBleGNlcHRpb24uXG4gICAgICBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgIHRocm93IGU7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIEVuc3VyZSBlbGVtZW50IGNhbiBhY2NlcHQgYWRkaXRpb25hbCB1cGRhdGVzIGFmdGVyIGFuIGV4Y2VwdGlvbi5cbiAgICAgIHRoaXMuX21hcmtVcGRhdGVkKCk7XG4gICAgfVxuICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgIGlmICghKHRoaXMuX3VwZGF0ZVN0YXRlICYgU1RBVEVfSEFTX1VQREFURUQpKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlID0gdGhpcy5fdXBkYXRlU3RhdGUgfCBTVEFURV9IQVNfVVBEQVRFRDtcbiAgICAgICAgdGhpcy5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXJrVXBkYXRlZCgpIHtcbiAgICB0aGlzLl9jaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLl91cGRhdGVTdGF0ZSA9IHRoaXMuX3VwZGF0ZVN0YXRlICYgflNUQVRFX1VQREFURV9SRVFVRVNURUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBlbGVtZW50IGhhcyBjb21wbGV0ZWQgdXBkYXRpbmcuXG4gICAqIFRoZSBQcm9taXNlIHZhbHVlIGlzIGEgYm9vbGVhbiB0aGF0IGlzIGB0cnVlYCBpZiB0aGUgZWxlbWVudCBjb21wbGV0ZWQgdGhlXG4gICAqIHVwZGF0ZSB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuIFRoZSBQcm9taXNlIHJlc3VsdCBpcyBgZmFsc2VgIGlmXG4gICAqIGEgcHJvcGVydHkgd2FzIHNldCBpbnNpZGUgYHVwZGF0ZWQoKWAuIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBhblxuICAgKiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgdGhlIHVwZGF0ZS4gVGhpcyBnZXR0ZXIgY2FuIGJlIGltcGxlbWVudGVkIHRvXG4gICAqIGF3YWl0IGFkZGl0aW9uYWwgc3RhdGUuIEZvciBleGFtcGxlLCBpdCBpcyBzb21ldGltZXMgdXNlZnVsIHRvIGF3YWl0IGFcbiAgICogcmVuZGVyZWQgZWxlbWVudCBiZWZvcmUgZnVsZmlsbGluZyB0aGlzIFByb21pc2UuIFRvIGRvIHRoaXMsIGZpcnN0IGF3YWl0XG4gICAqIGBzdXBlci51cGRhdGVDb21wbGV0ZWAgdGhlbiBhbnkgc3Vic2VxdWVudCBzdGF0ZS5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHJldHVybnMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZVxuICAgKiB1cGRhdGUgcmVzb2x2ZWQgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLlxuICAgKi9cbiAgZ2V0IHVwZGF0ZUNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLl91cGRhdGVQcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGB1cGRhdGVgIHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCByZXF1ZXN0c1xuICAgKiBhbiB1cGRhdGUuIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIGFsd2F5cyByZXR1cm5zIGB0cnVlYCwgYnV0IHRoaXMgY2FuIGJlXG4gICAqIGN1c3RvbWl6ZWQgdG8gY29udHJvbCB3aGVuIHRvIHVwZGF0ZS5cbiAgICpcbiAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAqL1xuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlcy5cbiAgICogSXQgY2FuIGJlIG92ZXJyaWRkZW4gdG8gcmVuZGVyIGFuZCBrZWVwIHVwZGF0ZWQgZWxlbWVudCBET00uXG4gICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAqIGFub3RoZXIgdXBkYXRlLlxuICAgKlxuICAgKiAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIGlmICh0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLnNpemUgPiAwKSB7XG4gICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3JcbiAgICAgIC8vIGxvb3BzIGV4cGVjdGluZyBhcnJheXNcbiAgICAgIHRoaXMuX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLmZvckVhY2goXG4gICAgICAgICAgKHYsIGspID0+IHRoaXMuX3Byb3BlcnR5VG9BdHRyaWJ1dGUoaywgdGhpc1trIGFzIGtleW9mIHRoaXNdLCB2KSk7XG4gICAgICB0aGlzLl9yZWZsZWN0aW5nUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuZXZlciB0aGUgZWxlbWVudCBpcyB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybVxuICAgKiBwb3N0LXVwZGF0aW5nIHRhc2tzIHZpYSBET00gQVBJcywgZm9yIGV4YW1wbGUsIGZvY3VzaW5nIGFuIGVsZW1lbnQuXG4gICAqXG4gICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgKiBhZ2FpbiBhZnRlciB0aGlzIHVwZGF0ZSBjeWNsZSBjb21wbGV0ZXMuXG4gICAqXG4gICAqICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybSBvbmUgdGltZVxuICAgKiB3b3JrIG9uIHRoZSBlbGVtZW50IGFmdGVyIHVwZGF0ZS5cbiAgICpcbiAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICpcbiAgICogKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAqL1xuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnbGl0LWh0bWwnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ2xpdC1odG1sL2xpYi9zaGFkeS1yZW5kZXIuanMnO1xuXG5pbXBvcnQge1Byb3BlcnR5VmFsdWVzLCBVcGRhdGluZ0VsZW1lbnR9IGZyb20gJy4vbGliL3VwZGF0aW5nLWVsZW1lbnQuanMnO1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi91cGRhdGluZy1lbGVtZW50LmpzJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RlY29yYXRvcnMuanMnO1xuZXhwb3J0IHtodG1sLCBzdmcsIFRlbXBsYXRlUmVzdWx0LCBTVkdUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnbGl0LWh0bWwvbGl0LWh0bWwuanMnO1xuaW1wb3J0IHtzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsIENTU1Jlc3VsdH0gZnJvbSAnLi9saWIvY3NzLXRhZy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9jc3MtdGFnLmpzJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBsaXRFbGVtZW50VmVyc2lvbnM6IHN0cmluZ1tdO1xuICB9XG59XG5cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgTGl0RWxlbWVudCB1c2FnZS5cbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IGluamVjdCB2ZXJzaW9uIG51bWJlciBhdCBidWlsZCB0aW1lXG4od2luZG93WydsaXRFbGVtZW50VmVyc2lvbnMnXSB8fCAod2luZG93WydsaXRFbGVtZW50VmVyc2lvbnMnXSA9IFtdKSlcbiAgICAucHVzaCgnMi4wLjEnKTtcblxuZXhwb3J0IGludGVyZmFjZSBDU1NSZXN1bHRBcnJheSBleHRlbmRzIEFycmF5PENTU1Jlc3VsdHxDU1NSZXN1bHRBcnJheT4ge31cblxuLyoqXG4gKiBNaW5pbWFsIGltcGxlbWVudGF0aW9uIG9mIEFycmF5LnByb3RvdHlwZS5mbGF0XG4gKiBAcGFyYW0gYXJyIHRoZSBhcnJheSB0byBmbGF0dGVuXG4gKiBAcGFyYW0gcmVzdWx0IHRoZSBhY2N1bWxhdGVkIHJlc3VsdFxuICovXG5mdW5jdGlvbiBhcnJheUZsYXQoXG4gICAgc3R5bGVzOiBDU1NSZXN1bHRBcnJheSwgcmVzdWx0OiBDU1NSZXN1bHRbXSA9IFtdKTogQ1NTUmVzdWx0W10ge1xuICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gc3R5bGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbaV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBhcnJheUZsYXQodmFsdWUsIHJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIERlZXBseSBmbGF0dGVucyBzdHlsZXMgYXJyYXkuIFVzZXMgbmF0aXZlIGZsYXQgaWYgYXZhaWxhYmxlLiAqL1xuY29uc3QgZmxhdHRlblN0eWxlcyA9IChzdHlsZXM6IENTU1Jlc3VsdEFycmF5KTogQ1NTUmVzdWx0W10gPT5cbiAgICBzdHlsZXMuZmxhdCA/IHN0eWxlcy5mbGF0KEluZmluaXR5KSA6IGFycmF5RmxhdChzdHlsZXMpO1xuXG5leHBvcnQgY2xhc3MgTGl0RWxlbWVudCBleHRlbmRzIFVwZGF0aW5nRWxlbWVudCB7XG4gIC8qKlxuICAgKiBFbnN1cmUgdGhpcyBjbGFzcyBpcyBtYXJrZWQgYXMgYGZpbmFsaXplZGAgYXMgYW4gb3B0aW1pemF0aW9uIGVuc3VyaW5nXG4gICAqIGl0IHdpbGwgbm90IG5lZWRsZXNzbHkgdHJ5IHRvIGBmaW5hbGl6ZWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhdGljIGZpbmFsaXplZCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFJlbmRlciBtZXRob2QgdXNlZCB0byByZW5kZXIgdGhlIGxpdC1odG1sIFRlbXBsYXRlUmVzdWx0IHRvIHRoZSBlbGVtZW50J3NcbiAgICogRE9NLlxuICAgKiBAcGFyYW0ge1RlbXBsYXRlUmVzdWx0fSBUZW1wbGF0ZSB0byByZW5kZXIuXG4gICAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBOb2RlIGludG8gd2hpY2ggdG8gcmVuZGVyLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gRWxlbWVudCBuYW1lLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgc3RhdGljIHJlbmRlciA9IHJlbmRlcjtcblxuICAvKipcbiAgICogQXJyYXkgb2Ygc3R5bGVzIHRvIGFwcGx5IHRvIHRoZSBlbGVtZW50LiBUaGUgc3R5bGVzIHNob3VsZCBiZSBkZWZpbmVkXG4gICAqIHVzaW5nIHRoZSBgY3NzYCB0YWcgZnVuY3Rpb24uXG4gICAqL1xuICBzdGF0aWMgc3R5bGVzPzogQ1NTUmVzdWx0fENTU1Jlc3VsdEFycmF5O1xuXG4gIHByaXZhdGUgc3RhdGljIF9zdHlsZXM6IENTU1Jlc3VsdFtdfHVuZGVmaW5lZDtcblxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgcHJvdGVjdGVkIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICBzdXBlci5maW5hbGl6ZSgpO1xuICAgIC8vIFByZXBhcmUgc3R5bGluZyB0aGF0IGlzIHN0YW1wZWQgYXQgZmlyc3QgcmVuZGVyIHRpbWUuIFN0eWxpbmdcbiAgICAvLyBpcyBidWlsdCBmcm9tIHVzZXIgcHJvdmlkZWQgYHN0eWxlc2Agb3IgaXMgaW5oZXJpdGVkIGZyb20gdGhlIHN1cGVyY2xhc3MuXG4gICAgdGhpcy5fc3R5bGVzID1cbiAgICAgICAgdGhpcy5oYXNPd25Qcm9wZXJ0eShKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdzdHlsZXMnLCB0aGlzKSkgP1xuICAgICAgICB0aGlzLl9nZXRVbmlxdWVTdHlsZXMoKSA6XG4gICAgICAgIHRoaXMuX3N0eWxlcyB8fCBbXTtcbiAgfVxuXG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBwcml2YXRlIHN0YXRpYyBfZ2V0VW5pcXVlU3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICAvLyBUYWtlIGNhcmUgbm90IHRvIGNhbGwgYHRoaXMuc3R5bGVzYCBtdWx0aXBsZSB0aW1lcyBzaW5jZSB0aGlzIGdlbmVyYXRlc1xuICAgIC8vIG5ldyBDU1NSZXN1bHRzIGVhY2ggdGltZS5cbiAgICAvLyBUT0RPKHNvcnZlbGwpOiBTaW5jZSB3ZSBkbyBub3QgY2FjaGUgQ1NTUmVzdWx0cyBieSBpbnB1dCwgYW55XG4gICAgLy8gc2hhcmVkIHN0eWxlcyB3aWxsIGdlbmVyYXRlIG5ldyBzdHlsZXNoZWV0IG9iamVjdHMsIHdoaWNoIGlzIHdhc3RlZnVsLlxuICAgIC8vIFRoaXMgc2hvdWxkIGJlIGFkZHJlc3NlZCB3aGVuIGEgYnJvd3NlciBzaGlwcyBjb25zdHJ1Y3RhYmxlXG4gICAgLy8gc3R5bGVzaGVldHMuXG4gICAgY29uc3QgdXNlclN0eWxlcyA9IHRoaXMuc3R5bGVzO1xuICAgIGNvbnN0IHN0eWxlczogQ1NTUmVzdWx0W10gPSBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1c2VyU3R5bGVzKSkge1xuICAgICAgY29uc3QgZmxhdFN0eWxlcyA9IGZsYXR0ZW5TdHlsZXModXNlclN0eWxlcyk7XG4gICAgICAvLyBBcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiB0byBhdm9pZCBkdXBsaWNhdGVkIHN0eWxpbmcgdGhhdCBjYW5cbiAgICAgIC8vIG9jY3VyIGVzcGVjaWFsbHkgd2hlbiBjb21wb3NpbmcgdmlhIHN1YmNsYXNzaW5nLCBkZS1kdXBsaWNhdGUgc3R5bGVzXG4gICAgICAvLyBwcmVzZXJ2aW5nIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIGxpc3QuIFRoZSBsYXN0IGl0ZW0gaXMga2VwdCB0b1xuICAgICAgLy8gdHJ5IHRvIHByZXNlcnZlIGNhc2NhZGUgb3JkZXIgd2l0aCB0aGUgYXNzdW1wdGlvbiB0aGF0IGl0J3MgbW9zdFxuICAgICAgLy8gaW1wb3J0YW50IHRoYXQgbGFzdCBhZGRlZCBzdHlsZXMgb3ZlcnJpZGUgcHJldmlvdXMgc3R5bGVzLlxuICAgICAgY29uc3Qgc3R5bGVTZXQgPSBmbGF0U3R5bGVzLnJlZHVjZVJpZ2h0KChzZXQsIHMpID0+IHtcbiAgICAgICAgc2V0LmFkZChzKTtcbiAgICAgICAgLy8gb24gSUUgc2V0LmFkZCBkb2VzIG5vdCByZXR1cm4gdGhlIHNldC5cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICAgIH0sIG5ldyBTZXQ8Q1NTUmVzdWx0PigpKTtcbiAgICAgIC8vIEFycmF5LmZyb20gZG9lcyBub3Qgd29yayBvbiBTZXQgaW4gSUVcbiAgICAgIHN0eWxlU2V0LmZvckVhY2goKHYpID0+IHN0eWxlcy51bnNoaWZ0KHYpKTtcbiAgICB9IGVsc2UgaWYgKHVzZXJTdHlsZXMpIHtcbiAgICAgIHN0eWxlcy5wdXNoKHVzZXJTdHlsZXMpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfbmVlZHNTaGltQWRvcHRlZFN0eWxlU2hlZXRzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogTm9kZSBvciBTaGFkb3dSb290IGludG8gd2hpY2ggZWxlbWVudCBET00gc2hvdWxkIGJlIHJlbmRlcmVkLiBEZWZhdWx0c1xuICAgKiB0byBhbiBvcGVuIHNoYWRvd1Jvb3QuXG4gICAqL1xuICByZWFkb25seSByZW5kZXJSb290ITogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50O1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBlbGVtZW50IGluaXRpYWxpemF0aW9uLiBCeSBkZWZhdWx0IHRoaXMgY2FsbHMgYGNyZWF0ZVJlbmRlclJvb3RgXG4gICAqIHRvIGNyZWF0ZSB0aGUgZWxlbWVudCBgcmVuZGVyUm9vdGAgbm9kZSBhbmQgY2FwdHVyZXMgYW55IHByZS1zZXQgdmFsdWVzIGZvclxuICAgKiByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdGlhbGl6ZSgpIHtcbiAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgKHRoaXMgYXMge3JlbmRlclJvb3Q6IEVsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50fSkucmVuZGVyUm9vdCA9XG4gICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgIC8vIE5vdGUsIGlmIHJlbmRlclJvb3QgaXMgbm90IGEgc2hhZG93Um9vdCwgc3R5bGVzIHdvdWxkL2NvdWxkIGFwcGx5IHRvIHRoZVxuICAgIC8vIGVsZW1lbnQncyBnZXRSb290Tm9kZSgpLiBXaGlsZSB0aGlzIGNvdWxkIGJlIGRvbmUsIHdlJ3JlIGNob29zaW5nIG5vdCB0b1xuICAgIC8vIHN1cHBvcnQgdGhpcyBub3cgc2luY2UgaXQgd291bGQgcmVxdWlyZSBkaWZmZXJlbnQgbG9naWMgYXJvdW5kIGRlLWR1cGluZy5cbiAgICBpZiAod2luZG93LlNoYWRvd1Jvb3QgJiYgdGhpcy5yZW5kZXJSb290IGluc3RhbmNlb2Ygd2luZG93LlNoYWRvd1Jvb3QpIHtcbiAgICAgIHRoaXMuYWRvcHRTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCByZW5kZXIgYW5kIGJ5IGRlZmF1bHRcbiAgICogY3JlYXRlcyBhbmQgcmV0dXJucyBhbiBvcGVuIHNoYWRvd1Jvb3QuIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlXG4gICAqIGVsZW1lbnQncyBET00gaXMgcmVuZGVyZWQuIEZvciBleGFtcGxlLCB0byByZW5kZXIgaW50byB0aGUgZWxlbWVudCdzXG4gICAqIGNoaWxkTm9kZXMsIHJldHVybiBgdGhpc2AuXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IFJldHVybnMgYSBub2RlIGludG8gd2hpY2ggdG8gcmVuZGVyLlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZVJlbmRlclJvb3QoKTogRWxlbWVudHxTaGFkb3dSb290IHtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgc3R5bGluZyB0byB0aGUgZWxlbWVudCBzaGFkb3dSb290IHVzaW5nIHRoZSBgc3RhdGljIGdldCBzdHlsZXNgXG4gICAqIHByb3BlcnR5LiBTdHlsaW5nIHdpbGwgYXBwbHkgdXNpbmcgYHNoYWRvd1Jvb3QuYWRvcHRlZFN0eWxlU2hlZXRzYCB3aGVyZVxuICAgKiBhdmFpbGFibGUgYW5kIHdpbGwgZmFsbGJhY2sgb3RoZXJ3aXNlLiBXaGVuIFNoYWRvdyBET00gaXMgcG9seWZpbGxlZCxcbiAgICogU2hhZHlDU1Mgc2NvcGVzIHN0eWxlcyBhbmQgYWRkcyB0aGVtIHRvIHRoZSBkb2N1bWVudC4gV2hlbiBTaGFkb3cgRE9NXG4gICAqIGlzIGF2YWlsYWJsZSBidXQgYGFkb3B0ZWRTdHlsZVNoZWV0c2AgaXMgbm90LCBzdHlsZXMgYXJlIGFwcGVuZGVkIHRvIHRoZVxuICAgKiBlbmQgb2YgdGhlIGBzaGFkb3dSb290YCB0byBbbWltaWMgc3BlY1xuICAgKiBiZWhhdmlvcl0oaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby9jb25zdHJ1Y3Qtc3R5bGVzaGVldHMvI3VzaW5nLWNvbnN0cnVjdGVkLXN0eWxlc2hlZXRzKS5cbiAgICovXG4gIHByb3RlY3RlZCBhZG9wdFN0eWxlcygpIHtcbiAgICBjb25zdCBzdHlsZXMgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgTGl0RWxlbWVudCkuX3N0eWxlcyE7XG4gICAgaWYgKHN0eWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVGhlcmUgYXJlIHRocmVlIHNlcGFyYXRlIGNhc2VzIGhlcmUgYmFzZWQgb24gU2hhZG93IERPTSBzdXBwb3J0LlxuICAgIC8vICgxKSBzaGFkb3dSb290IHBvbHlmaWxsZWQ6IHVzZSBTaGFkeUNTU1xuICAgIC8vICgyKSBzaGFkb3dSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyBhdmFpbGFibGU6IHVzZSBpdC5cbiAgICAvLyAoMykgc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMgcG9seWZpbGxlZDogYXBwZW5kIHN0eWxlcyBhZnRlclxuICAgIC8vIHJlbmRlcmluZ1xuICAgIGlmICh3aW5kb3cuU2hhZHlDU1MgIT09IHVuZGVmaW5lZCAmJiAhd2luZG93LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykge1xuICAgICAgd2luZG93LlNoYWR5Q1NTLlNjb3BpbmdTaGltLnByZXBhcmVBZG9wdGVkQ3NzVGV4dChcbiAgICAgICAgICBzdHlsZXMubWFwKChzKSA9PiBzLmNzc1RleHQpLCB0aGlzLmxvY2FsTmFtZSk7XG4gICAgfSBlbHNlIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAgICh0aGlzLnJlbmRlclJvb3QgYXMgU2hhZG93Um9vdCkuYWRvcHRlZFN0eWxlU2hlZXRzID1cbiAgICAgICAgICBzdHlsZXMubWFwKChzKSA9PiBzLnN0eWxlU2hlZXQhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBtdXN0IGJlIGRvbmUgYWZ0ZXIgcmVuZGVyaW5nIHNvIHRoZSBhY3R1YWwgc3R5bGUgaW5zZXJ0aW9uIGlzIGRvbmVcbiAgICAgIC8vIGluIGB1cGRhdGVgLlxuICAgICAgdGhpcy5fbmVlZHNTaGltQWRvcHRlZFN0eWxlU2hlZXRzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIE5vdGUsIGZpcnN0IHVwZGF0ZS9yZW5kZXIgaGFuZGxlcyBzdHlsZUVsZW1lbnQgc28gd2Ugb25seSBjYWxsIHRoaXMgaWZcbiAgICAvLyBjb25uZWN0ZWQgYWZ0ZXIgZmlyc3QgdXBkYXRlLlxuICAgIGlmICh0aGlzLmhhc1VwZGF0ZWQgJiYgd2luZG93LlNoYWR5Q1NTICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAqIGFuZCBjYWxscyBgcmVuZGVyYCB0byByZW5kZXIgRE9NIHZpYSBsaXQtaHRtbC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZVxuICAgKiB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXIgYW5vdGhlciB1cGRhdGUuXG4gICAqICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZShjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIGNvbnN0IHRlbXBsYXRlUmVzdWx0ID0gdGhpcy5yZW5kZXIoKSBhcyB1bmtub3duO1xuICAgIGlmICh0ZW1wbGF0ZVJlc3VsdCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVzdWx0KSB7XG4gICAgICAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgTGl0RWxlbWVudClcbiAgICAgICAgICAucmVuZGVyKFxuICAgICAgICAgICAgICB0ZW1wbGF0ZVJlc3VsdCxcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSb290LFxuICAgICAgICAgICAgICB7c2NvcGVOYW1lOiB0aGlzLmxvY2FsTmFtZSwgZXZlbnRDb250ZXh0OiB0aGlzfSk7XG4gICAgfVxuICAgIC8vIFdoZW4gbmF0aXZlIFNoYWRvdyBET00gaXMgdXNlZCBidXQgYWRvcHRlZFN0eWxlcyBhcmUgbm90IHN1cHBvcnRlZCxcbiAgICAvLyBpbnNlcnQgc3R5bGluZyBhZnRlciByZW5kZXJpbmcgdG8gZW5zdXJlIGFkb3B0ZWRTdHlsZXMgaGF2ZSBoaWdoZXN0XG4gICAgLy8gcHJpb3JpdHkuXG4gICAgaWYgKHRoaXMuX25lZWRzU2hpbUFkb3B0ZWRTdHlsZVNoZWV0cykge1xuICAgICAgdGhpcy5fbmVlZHNTaGltQWRvcHRlZFN0eWxlU2hlZXRzID0gZmFsc2U7XG4gICAgICAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgTGl0RWxlbWVudCkuX3N0eWxlcyEuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gcy5jc3NUZXh0O1xuICAgICAgICB0aGlzLnJlbmRlclJvb3QuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZWQgb24gZWFjaCB1cGRhdGUgdG8gcGVyZm9ybSByZW5kZXJpbmcgdGFza3MuIFRoaXMgbWV0aG9kIG11c3QgcmV0dXJuXG4gICAqIGEgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KlxuICAgKiB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZS5cbiAgICovXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHR8dm9pZCB7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtBdHRyaWJ1dGVDb21taXR0ZXIsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlcn0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgUGFydHMgd2hlbiBhIHRlbXBsYXRlIGlzIGluc3RhbnRpYXRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciBpbXBsZW1lbnRzIFRlbXBsYXRlUHJvY2Vzc29yIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBwYXJ0cyBmb3IgYW4gYXR0cmlidXRlLXBvc2l0aW9uIGJpbmRpbmcsIGdpdmVuIHRoZSBldmVudCwgYXR0cmlidXRlXG4gICAqIG5hbWUsIGFuZCBzdHJpbmcgbGl0ZXJhbHMuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGJpbmRpbmdcbiAgICogQHBhcmFtIG5hbWUgIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgKiBAcGFyYW0gc3RyaW5ncyBUaGUgc3RyaW5nIGxpdGVyYWxzLiBUaGVyZSBhcmUgYWx3YXlzIGF0IGxlYXN0IHR3byBzdHJpbmdzLFxuICAgKiAgIGV2ZW50IGZvciBmdWxseS1jb250cm9sbGVkIGJpbmRpbmdzIHdpdGggYSBzaW5nbGUgZXhwcmVzc2lvbi5cbiAgICovXG4gIGhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKFxuICAgICAgZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBzdHJpbmdbXSxcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMpOiBQYXJ0W10ge1xuICAgIGNvbnN0IHByZWZpeCA9IG5hbWVbMF07XG4gICAgaWYgKHByZWZpeCA9PT0gJy4nKSB7XG4gICAgICBjb25zdCBjb21pdHRlciA9IG5ldyBQcm9wZXJ0eUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKTtcbiAgICAgIHJldHVybiBjb21pdHRlci5wYXJ0cztcbiAgICB9XG4gICAgaWYgKHByZWZpeCA9PT0gJ0AnKSB7XG4gICAgICByZXR1cm4gW25ldyBFdmVudFBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgb3B0aW9ucy5ldmVudENvbnRleHQpXTtcbiAgICB9XG4gICAgaWYgKHByZWZpeCA9PT0gJz8nKSB7XG4gICAgICByZXR1cm4gW25ldyBCb29sZWFuQXR0cmlidXRlUGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKV07XG4gICAgfVxuICAgIGNvbnN0IGNvbWl0dGVyID0gbmV3IEF0dHJpYnV0ZUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICByZXR1cm4gY29taXR0ZXIucGFydHM7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBwYXJ0cyBmb3IgYSB0ZXh0LXBvc2l0aW9uIGJpbmRpbmcuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZUZhY3RvcnlcbiAgICovXG4gIGhhbmRsZVRleHRFeHByZXNzaW9uKG9wdGlvbnM6IFJlbmRlck9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IE5vZGVQYXJ0KG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgPSBuZXcgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7UGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcblxuY29uc3QgZGlyZWN0aXZlcyA9IG5ldyBXZWFrTWFwPG9iamVjdCwgdHJ1ZT4oKTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IHR5cGUgRGlyZWN0aXZlRmFjdG9yeSA9ICguLi5hcmdzOiBhbnlbXSkgPT4gb2JqZWN0O1xuXG5leHBvcnQgdHlwZSBEaXJlY3RpdmVGbiA9IChwYXJ0OiBQYXJ0KSA9PiB2b2lkO1xuXG4vKipcbiAqIEJyYW5kcyBhIGZ1bmN0aW9uIGFzIGEgZGlyZWN0aXZlIHNvIHRoYXQgbGl0LWh0bWwgd2lsbCBjYWxsIHRoZSBmdW5jdGlvblxuICogZHVyaW5nIHRlbXBsYXRlIHJlbmRlcmluZywgcmF0aGVyIHRoYW4gcGFzc2luZyBhcyBhIHZhbHVlLlxuICpcbiAqIEBwYXJhbSBmIFRoZSBkaXJlY3RpdmUgZmFjdG9yeSBmdW5jdGlvbi4gTXVzdCBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXG4gKiBmdW5jdGlvbiBvZiB0aGUgc2lnbmF0dXJlIGAocGFydDogUGFydCkgPT4gdm9pZGAuIFRoZSByZXR1cm5lZCBmdW5jdGlvbiB3aWxsXG4gKiBiZSBjYWxsZWQgd2l0aCB0aGUgcGFydCBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtkaXJlY3RpdmUsIGh0bWx9IGZyb20gJ2xpdC1odG1sJztcbiAqXG4gKiBjb25zdCBpbW11dGFibGUgPSBkaXJlY3RpdmUoKHYpID0+IChwYXJ0KSA9PiB7XG4gKiAgIGlmIChwYXJ0LnZhbHVlICE9PSB2KSB7XG4gKiAgICAgcGFydC5zZXRWYWx1ZSh2KVxuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID0gPEYgZXh0ZW5kcyBEaXJlY3RpdmVGYWN0b3J5PihmOiBGKTogRiA9PlxuICAgICgoLi4uYXJnczogdW5rbm93bltdKSA9PiB7XG4gICAgICBjb25zdCBkID0gZiguLi5hcmdzKTtcbiAgICAgIGRpcmVjdGl2ZXMuc2V0KGQsIHRydWUpO1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfSkgYXMgRjtcblxuZXhwb3J0IGNvbnN0IGlzRGlyZWN0aXZlID0gKG86IHVua25vd24pOiBvIGlzIERpcmVjdGl2ZUZuID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnZnVuY3Rpb24nICYmIGRpcmVjdGl2ZXMuaGFzKG8pO1xufTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW50ZXJmYWNlIE1heWJlUG9seWZpbGxlZENlIGV4dGVuZHMgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5IHtcbiAgcG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz86IG9iamVjdDtcbn1cblxuLyoqXG4gKiBUcnVlIGlmIHRoZSBjdXN0b20gZWxlbWVudHMgcG9seWZpbGwgaXMgaW4gdXNlLlxuICovXG5leHBvcnQgY29uc3QgaXNDRVBvbHlmaWxsID0gd2luZG93LmN1c3RvbUVsZW1lbnRzICE9PSB1bmRlZmluZWQgJiZcbiAgICAod2luZG93LmN1c3RvbUVsZW1lbnRzIGFzIE1heWJlUG9seWZpbGxlZENlKS5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrICE9PVxuICAgICAgICB1bmRlZmluZWQ7XG5cbi8qKlxuICogUmVwYXJlbnRzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydE5vZGVgIChpbmNsdXNpdmUpIHRvIGBlbmROb2RlYFxuICogKGV4Y2x1c2l2ZSksIGludG8gYW5vdGhlciBjb250YWluZXIgKGNvdWxkIGJlIHRoZSBzYW1lIGNvbnRhaW5lciksIGJlZm9yZVxuICogYGJlZm9yZU5vZGVgLiBJZiBgYmVmb3JlTm9kZWAgaXMgbnVsbCwgaXQgYXBwZW5kcyB0aGUgbm9kZXMgdG8gdGhlXG4gKiBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBhcmVudE5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLFxuICAgICBzdGFydDogTm9kZXxudWxsLFxuICAgICBlbmQ6IE5vZGV8bnVsbCA9IG51bGwsXG4gICAgIGJlZm9yZTogTm9kZXxudWxsID0gbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgbGV0IG5vZGUgPSBzdGFydDtcbiAgICAgIHdoaWxlIChub2RlICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IG5vZGUhLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5vZGUhLCBiZWZvcmUgYXMgTm9kZSk7XG4gICAgICAgIG5vZGUgPSBuO1xuICAgICAgfVxuICAgIH07XG5cbi8qKlxuICogUmVtb3ZlcyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnROb2RlYCAoaW5jbHVzaXZlKSB0byBgZW5kTm9kZWBcbiAqIChleGNsdXNpdmUpLCBmcm9tIGBjb250YWluZXJgLlxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlTm9kZXMgPVxuICAgIChjb250YWluZXI6IE5vZGUsIHN0YXJ0Tm9kZTogTm9kZXxudWxsLCBlbmROb2RlOiBOb2RlfG51bGwgPSBudWxsKTpcbiAgICAgICAgdm9pZCA9PiB7XG4gICAgICAgICAgbGV0IG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgd2hpbGUgKG5vZGUgIT09IGVuZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBub2RlIS5uZXh0U2libGluZztcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChub2RlISk7XG4gICAgICAgICAgICBub2RlID0gbjtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBzaGFkeS1yZW5kZXJcbiAqL1xuXG5pbXBvcnQge2lzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZSwgVGVtcGxhdGVQYXJ0fSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuY29uc3Qgd2Fsa2VyTm9kZUZpbHRlciA9IDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLztcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBsaXN0IG9mIG5vZGVzIGZyb20gYSBUZW1wbGF0ZSBzYWZlbHkuIEluIGFkZGl0aW9uIHRvIHJlbW92aW5nXG4gKiBub2RlcyBmcm9tIHRoZSBUZW1wbGF0ZSwgdGhlIFRlbXBsYXRlIHBhcnQgaW5kaWNlcyBhcmUgdXBkYXRlZCB0byBtYXRjaFxuICogdGhlIG11dGF0ZWQgVGVtcGxhdGUgRE9NLlxuICpcbiAqIEFzIHRoZSB0ZW1wbGF0ZSBpcyB3YWxrZWQgdGhlIHJlbW92YWwgc3RhdGUgaXMgdHJhY2tlZCBhbmRcbiAqIHBhcnQgaW5kaWNlcyBhcmUgYWRqdXN0ZWQgYXMgbmVlZGVkLlxuICpcbiAqIGRpdlxuICogICBkaXYjMSAocmVtb3ZlKSA8LS0gc3RhcnQgcmVtb3ZpbmcgKHJlbW92aW5nIG5vZGUgaXMgZGl2IzEpXG4gKiAgICAgZGl2XG4gKiAgICAgICBkaXYjMiAocmVtb3ZlKSAgPC0tIGNvbnRpbnVlIHJlbW92aW5nIChyZW1vdmluZyBub2RlIGlzIHN0aWxsIGRpdiMxKVxuICogICAgICAgICBkaXZcbiAqIGRpdiA8LS0gc3RvcCByZW1vdmluZyBzaW5jZSBwcmV2aW91cyBzaWJsaW5nIGlzIHRoZSByZW1vdmluZyBub2RlIChkaXYjMSxcbiAqIHJlbW92ZWQgNCBub2RlcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlKFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgbm9kZXNUb1JlbW92ZTogU2V0PE5vZGU+KSB7XG4gIGNvbnN0IHtlbGVtZW50OiB7Y29udGVudH0sIHBhcnRzfSA9IHRlbXBsYXRlO1xuICBjb25zdCB3YWxrZXIgPVxuICAgICAgZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb250ZW50LCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gIGxldCBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMpO1xuICBsZXQgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gIGxldCBub2RlSW5kZXggPSAtMTtcbiAgbGV0IHJlbW92ZUNvdW50ID0gMDtcbiAgY29uc3Qgbm9kZXNUb1JlbW92ZUluVGVtcGxhdGUgPSBbXTtcbiAgbGV0IGN1cnJlbnRSZW1vdmluZ05vZGU6IE5vZGV8bnVsbCA9IG51bGw7XG4gIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgIG5vZGVJbmRleCsrO1xuICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGUgYXMgRWxlbWVudDtcbiAgICAvLyBFbmQgcmVtb3ZhbCBpZiBzdGVwcGVkIHBhc3QgdGhlIHJlbW92aW5nIG5vZGVcbiAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IGN1cnJlbnRSZW1vdmluZ05vZGUpIHtcbiAgICAgIGN1cnJlbnRSZW1vdmluZ05vZGUgPSBudWxsO1xuICAgIH1cbiAgICAvLyBBIG5vZGUgdG8gcmVtb3ZlIHdhcyBmb3VuZCBpbiB0aGUgdGVtcGxhdGVcbiAgICBpZiAobm9kZXNUb1JlbW92ZS5oYXMobm9kZSkpIHtcbiAgICAgIG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlLnB1c2gobm9kZSk7XG4gICAgICAvLyBUcmFjayBub2RlIHdlJ3JlIHJlbW92aW5nXG4gICAgICBpZiAoY3VycmVudFJlbW92aW5nTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICBjdXJyZW50UmVtb3ZpbmdOb2RlID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gV2hlbiByZW1vdmluZywgaW5jcmVtZW50IGNvdW50IGJ5IHdoaWNoIHRvIGFkanVzdCBzdWJzZXF1ZW50IHBhcnQgaW5kaWNlc1xuICAgIGlmIChjdXJyZW50UmVtb3ZpbmdOb2RlICE9PSBudWxsKSB7XG4gICAgICByZW1vdmVDb3VudCsrO1xuICAgIH1cbiAgICB3aGlsZSAocGFydCAhPT0gdW5kZWZpbmVkICYmIHBhcnQuaW5kZXggPT09IG5vZGVJbmRleCkge1xuICAgICAgLy8gSWYgcGFydCBpcyBpbiBhIHJlbW92ZWQgbm9kZSBkZWFjdGl2YXRlIGl0IGJ5IHNldHRpbmcgaW5kZXggdG8gLTEgb3JcbiAgICAgIC8vIGFkanVzdCB0aGUgaW5kZXggYXMgbmVlZGVkLlxuICAgICAgcGFydC5pbmRleCA9IGN1cnJlbnRSZW1vdmluZ05vZGUgIT09IG51bGwgPyAtMSA6IHBhcnQuaW5kZXggLSByZW1vdmVDb3VudDtcbiAgICAgIC8vIGdvIHRvIHRoZSBuZXh0IGFjdGl2ZSBwYXJ0LlxuICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgICAgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gICAgfVxuICB9XG4gIG5vZGVzVG9SZW1vdmVJblRlbXBsYXRlLmZvckVhY2goKG4pID0+IG4ucGFyZW50Tm9kZSEucmVtb3ZlQ2hpbGQobikpO1xufVxuXG5jb25zdCBjb3VudE5vZGVzID0gKG5vZGU6IE5vZGUpID0+IHtcbiAgbGV0IGNvdW50ID0gKG5vZGUubm9kZVR5cGUgPT09IDExIC8qIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAqLykgPyAwIDogMTtcbiAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihub2RlLCB3YWxrZXJOb2RlRmlsdGVyLCBudWxsLCBmYWxzZSk7XG4gIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgIGNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufTtcblxuY29uc3QgbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzID1cbiAgICAocGFydHM6IFRlbXBsYXRlUGFydFtdLCBzdGFydEluZGV4OiBudW1iZXIgPSAtMSkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXggKyAxOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICBpZiAoaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG5cbi8qKlxuICogSW5zZXJ0cyB0aGUgZ2l2ZW4gbm9kZSBpbnRvIHRoZSBUZW1wbGF0ZSwgb3B0aW9uYWxseSBiZWZvcmUgdGhlIGdpdmVuXG4gKiByZWZOb2RlLiBJbiBhZGRpdGlvbiB0byBpbnNlcnRpbmcgdGhlIG5vZGUgaW50byB0aGUgVGVtcGxhdGUsIHRoZSBUZW1wbGF0ZVxuICogcGFydCBpbmRpY2VzIGFyZSB1cGRhdGVkIHRvIG1hdGNoIHRoZSBtdXRhdGVkIFRlbXBsYXRlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydE5vZGVJbnRvVGVtcGxhdGUoXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlLCBub2RlOiBOb2RlLCByZWZOb2RlOiBOb2RlfG51bGwgPSBudWxsKSB7XG4gIGNvbnN0IHtlbGVtZW50OiB7Y29udGVudH0sIHBhcnRzfSA9IHRlbXBsYXRlO1xuICAvLyBJZiB0aGVyZSdzIG5vIHJlZk5vZGUsIHRoZW4gcHV0IG5vZGUgYXQgZW5kIG9mIHRlbXBsYXRlLlxuICAvLyBObyBwYXJ0IGluZGljZXMgbmVlZCB0byBiZSBzaGlmdGVkIGluIHRoaXMgY2FzZS5cbiAgaWYgKHJlZk5vZGUgPT09IG51bGwgfHwgcmVmTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgd2Fsa2VyID1cbiAgICAgIGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoY29udGVudCwgd2Fsa2VyTm9kZUZpbHRlciwgbnVsbCwgZmFsc2UpO1xuICBsZXQgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzKTtcbiAgbGV0IGluc2VydENvdW50ID0gMDtcbiAgbGV0IHdhbGtlckluZGV4ID0gLTE7XG4gIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgIHdhbGtlckluZGV4Kys7XG4gICAgY29uc3Qgd2Fsa2VyTm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZSBhcyBFbGVtZW50O1xuICAgIGlmICh3YWxrZXJOb2RlID09PSByZWZOb2RlKSB7XG4gICAgICBpbnNlcnRDb3VudCA9IGNvdW50Tm9kZXMobm9kZSk7XG4gICAgICByZWZOb2RlLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShub2RlLCByZWZOb2RlKTtcbiAgICB9XG4gICAgd2hpbGUgKHBhcnRJbmRleCAhPT0gLTEgJiYgcGFydHNbcGFydEluZGV4XS5pbmRleCA9PT0gd2Fsa2VySW5kZXgpIHtcbiAgICAgIC8vIElmIHdlJ3ZlIGluc2VydGVkIHRoZSBub2RlLCBzaW1wbHkgYWRqdXN0IGFsbCBzdWJzZXF1ZW50IHBhcnRzXG4gICAgICBpZiAoaW5zZXJ0Q291bnQgPiAwKSB7XG4gICAgICAgIHdoaWxlIChwYXJ0SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgcGFydHNbcGFydEluZGV4XS5pbmRleCArPSBpbnNlcnRDb3VudDtcbiAgICAgICAgICBwYXJ0SW5kZXggPSBuZXh0QWN0aXZlSW5kZXhJblRlbXBsYXRlUGFydHMocGFydHMsIHBhcnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGFydEluZGV4ID0gbmV4dEFjdGl2ZUluZGV4SW5UZW1wbGF0ZVBhcnRzKHBhcnRzLCBwYXJ0SW5kZXgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG4vKipcbiAqIFRoZSBQYXJ0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZHluYW1pYyBwYXJ0IG9mIGEgdGVtcGxhdGUgaW5zdGFuY2UgcmVuZGVyZWRcbiAqIGJ5IGxpdC1odG1sLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnQge1xuICB2YWx1ZTogdW5rbm93bjtcblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCBwYXJ0IHZhbHVlLCBidXQgZG9lcyBub3Qgd3JpdGUgaXQgdG8gdGhlIERPTS5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0aGF0IHdpbGwgYmUgY29tbWl0dGVkLlxuICAgKi9cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDb21taXRzIHRoZSBjdXJyZW50IHBhcnQgdmFsdWUsIGNhdXNlIGl0IHRvIGFjdHVhbGx5IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAgICovXG4gIGNvbW1pdCgpOiB2b2lkO1xufVxuXG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIHRoYXQgYSB2YWx1ZSB3YXMgaGFuZGxlZCBieSBhIGRpcmVjdGl2ZSBhbmRcbiAqIHNob3VsZCBub3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuICovXG5leHBvcnQgY29uc3Qgbm9DaGFuZ2U6IG9iamVjdCA9IHt9O1xuXG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIGEgTm9kZVBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0ge307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7aXNEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7cmVtb3ZlTm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7bm9DaGFuZ2UsIG5vdGhpbmcsIFBhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZUluc3RhbmNlfSBmcm9tICcuL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcbmltcG9ydCB7Y3JlYXRlTWFya2VyfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdHlwZW9mLW9wZXJhdG9yXG5leHBvcnQgdHlwZSBQcmltaXRpdmUgPSBudWxsfHVuZGVmaW5lZHxib29sZWFufG51bWJlcnxzdHJpbmd8U3ltYm9sfGJpZ2ludDtcbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIFByaW1pdGl2ZSA9PiB7XG4gIHJldHVybiAoXG4gICAgICB2YWx1ZSA9PT0gbnVsbCB8fFxuICAgICAgISh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykpO1xufTtcblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIEF0dHJpYnV0ZVBhcnRzLCBzbyB0aGF0IHRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlXG4gKiBldmVuIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBwYXJ0cyBmb3IgYW4gYXR0cmlidXRlLlxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgZWxlbWVudDogRWxlbWVudDtcbiAgbmFtZTogc3RyaW5nO1xuICBzdHJpbmdzOiBzdHJpbmdbXTtcbiAgcGFydHM6IEF0dHJpYnV0ZVBhcnRbXTtcbiAgZGlydHkgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnBhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgdGhpcy5wYXJ0c1tpXSA9IHRoaXMuX2NyZWF0ZVBhcnQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHNpbmdsZSBwYXJ0LiBPdmVycmlkZSB0aGlzIHRvIGNyZWF0ZSBhIGRpZmZlcm50IHR5cGUgb2YgcGFydC5cbiAgICovXG4gIHByb3RlY3RlZCBfY3JlYXRlUGFydCgpOiBBdHRyaWJ1dGVQYXJ0IHtcbiAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFZhbHVlKCk6IHVua25vd24ge1xuICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBsZXQgdGV4dCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2ldO1xuICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB2ID0gcGFydC52YWx1ZTtcbiAgICAgICAgaWYgKHYgIT0gbnVsbCAmJlxuICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodikgfHxcbiAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICAgdHlwZW9mIHYgIT09ICdzdHJpbmcnICYmICh2IGFzIGFueSlbU3ltYm9sLml0ZXJhdG9yXSkpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdiBhcyBJdGVyYWJsZTx1bmtub3duPikge1xuICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdCA9PT0gJ3N0cmluZycgPyB0IDogU3RyaW5nKHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHYgOiBTdHJpbmcodik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0ZXh0ICs9IHN0cmluZ3NbbF07XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBjb21taXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCB0aGlzLl9nZXRWYWx1ZSgpIGFzIHN0cmluZyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIGNvbW1pdHRlcjogQXR0cmlidXRlQ29tbWl0dGVyO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihjb21pdHRlcjogQXR0cmlidXRlQ29tbWl0dGVyKSB7XG4gICAgdGhpcy5jb21taXR0ZXIgPSBjb21pdHRlcjtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlICE9PSBub0NoYW5nZSAmJiAoIWlzUHJpbWl0aXZlKHZhbHVlKSB8fCB2YWx1ZSAhPT0gdGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBhIG5vdCBhIGRpcmVjdGl2ZSwgZGlydHkgdGhlIGNvbW1pdHRlciBzbyB0aGF0IGl0J2xsXG4gICAgICAvLyBjYWxsIHNldEF0dHJpYnV0ZS4gSWYgdGhlIHZhbHVlIGlzIGEgZGlyZWN0aXZlLCBpdCdsbCBkaXJ0eSB0aGVcbiAgICAgIC8vIGNvbW1pdHRlciBpZiBpdCBjYWxscyBzZXRWYWx1ZSgpLlxuICAgICAgaWYgKCFpc0RpcmVjdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5jb21taXR0ZXIuZGlydHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy52YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLnZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbW1pdHRlci5jb21taXQoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm9kZVBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgb3B0aW9uczogUmVuZGVyT3B0aW9ucztcbiAgc3RhcnROb2RlITogTm9kZTtcbiAgZW5kTm9kZSE6IE5vZGU7XG4gIHZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuICBfcGVuZGluZ1ZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFJlbmRlck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgdGhpcyBwYXJ0IGludG8gYSBjb250YWluZXIuXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgYXBwZW5kSW50byhjb250YWluZXI6IE5vZGUpIHtcbiAgICB0aGlzLnN0YXJ0Tm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gICAgdGhpcy5lbmROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIHRoaXMgcGFydCBiZXR3ZWVuIGByZWZgIGFuZCBgcmVmYCdzIG5leHQgc2libGluZy4gQm90aCBgcmVmYCBhbmRcbiAgICogaXRzIG5leHQgc2libGluZyBtdXN0IGJlIHN0YXRpYywgdW5jaGFuZ2luZyBub2RlcyBzdWNoIGFzIHRob3NlIHRoYXQgYXBwZWFyXG4gICAqIGluIGEgbGl0ZXJhbCBzZWN0aW9uIG9mIGEgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgaW5zZXJ0QWZ0ZXJOb2RlKHJlZjogTm9kZSkge1xuICAgIHRoaXMuc3RhcnROb2RlID0gcmVmO1xuICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5uZXh0U2libGluZyE7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIHBhcmVudCBwYXJ0LlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGFwcGVuZEludG9QYXJ0KHBhcnQ6IE5vZGVQYXJ0KSB7XG4gICAgcGFydC5faW5zZXJ0KHRoaXMuc3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgIHBhcnQuX2luc2VydCh0aGlzLmVuZE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGlzIHBhcnQgYWZ0ZXIgYHJlZmBcbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBpbnNlcnRBZnRlclBhcnQocmVmOiBOb2RlUGFydCkge1xuICAgIHJlZi5faW5zZXJ0KHRoaXMuc3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5lbmROb2RlO1xuICAgIHJlZi5lbmROb2RlID0gdGhpcy5zdGFydE5vZGU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9wZW5kaW5nVmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVzdWx0KSB7XG4gICAgICB0aGlzLl9jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIHRoaXMuX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgKHZhbHVlIGFzIGFueSlbU3ltYm9sLml0ZXJhdG9yXSkge1xuICAgICAgdGhpcy5fY29tbWl0SXRlcmFibGUodmFsdWUgYXMgSXRlcmFibGU8dW5rbm93bj4pO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBub3RoaW5nO1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5zZXJ0KG5vZGU6IE5vZGUpIHtcbiAgICB0aGlzLmVuZE5vZGUucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuZW5kTm9kZSk7XG4gIH1cblxuICBwcml2YXRlIF9jb21taXROb2RlKHZhbHVlOiBOb2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1pdFRleHQodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFydE5vZGUubmV4dFNpYmxpbmchO1xuICAgIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHRleHQgbm9kZSBiZXR3ZWVuIHRoZSBtYXJrZXJzLCB3ZSBjYW4ganVzdFxuICAgICAgLy8gc2V0IGl0cyB2YWx1ZSwgcmF0aGVyIHRoYW4gcmVwbGFjaW5nIGl0LlxuICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogQ2FuIHdlIGp1c3QgY2hlY2sgaWYgdGhpcy52YWx1ZSBpcyBwcmltaXRpdmU/XG4gICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gdmFsdWUgYXMgc3RyaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb21taXROb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSkpKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWU6IFRlbXBsYXRlUmVzdWx0KTogdm9pZCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMudGVtcGxhdGVGYWN0b3J5KHZhbHVlKTtcbiAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlSW5zdGFuY2UgJiZcbiAgICAgICAgdGhpcy52YWx1ZS50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgIHRoaXMudmFsdWUudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBwcm9wYWdhdGUgdGhlIHRlbXBsYXRlIHByb2Nlc3NvciBmcm9tIHRoZSBUZW1wbGF0ZVJlc3VsdFxuICAgICAgLy8gc28gdGhhdCB3ZSB1c2UgaXRzIHN5bnRheCBleHRlbnNpb24sIGV0Yy4gVGhlIHRlbXBsYXRlIGZhY3RvcnkgY29tZXNcbiAgICAgIC8vIGZyb20gdGhlIHJlbmRlciBmdW5jdGlvbiBvcHRpb25zIHNvIHRoYXQgaXQgY2FuIGNvbnRyb2wgdGVtcGxhdGVcbiAgICAgIC8vIGNhY2hpbmcgYW5kIHByZXByb2Nlc3NpbmcuXG4gICAgICBjb25zdCBpbnN0YW5jZSA9XG4gICAgICAgICAgbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHZhbHVlLnByb2Nlc3NvciwgdGhpcy5vcHRpb25zKTtcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgdGhpcy52YWx1ZSA9IGluc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1pdEl0ZXJhYmxlKHZhbHVlOiBJdGVyYWJsZTx1bmtub3duPik6IHZvaWQge1xuICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cblxuICAgIC8vIElmIF92YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgIC8vIGl0ZXJhYmxlIGFuZCBfdmFsdWUgd2lsbCBjb250YWluIHRoZSBOb2RlUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAvLyByZW5kZXIuIElmIF92YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgIC8vIGFycmF5IGZvciBOb2RlUGFydHMuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMudmFsdWUgYXMgTm9kZVBhcnRbXTtcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBsZXQgaXRlbVBhcnQ6IE5vZGVQYXJ0fHVuZGVmaW5lZDtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgLy8gVHJ5IHRvIHJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgIGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG5cbiAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgIGlmIChpdGVtUGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGl0ZW1QYXJ0ID0gbmV3IE5vZGVQYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGl0ZW1QYXJ0LmFwcGVuZEludG9QYXJ0KHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1QYXJ0Lmluc2VydEFmdGVyUGFydChpdGVtUGFydHNbcGFydEluZGV4IC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpdGVtUGFydC5zZXRWYWx1ZShpdGVtKTtcbiAgICAgIGl0ZW1QYXJ0LmNvbW1pdCgpO1xuICAgICAgcGFydEluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICB0aGlzLmNsZWFyKGl0ZW1QYXJ0ICYmIGl0ZW1QYXJ0IS5lbmROb2RlKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcihzdGFydE5vZGU6IE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSkge1xuICAgIHJlbW92ZU5vZGVzKFxuICAgICAgICB0aGlzLnN0YXJ0Tm9kZS5wYXJlbnROb2RlISwgc3RhcnROb2RlLm5leHRTaWJsaW5nISwgdGhpcy5lbmROb2RlKTtcbiAgfVxufVxuXG4vKipcbiAqIEltcGxlbWVudHMgYSBib29sZWFuIGF0dHJpYnV0ZSwgcm91Z2hseSBhcyBkZWZpbmVkIGluIHRoZSBIVE1MXG4gKiBzcGVjaWZpY2F0aW9uLlxuICpcbiAqIElmIHRoZSB2YWx1ZSBpcyB0cnV0aHksIHRoZW4gdGhlIGF0dHJpYnV0ZSBpcyBwcmVzZW50IHdpdGggYSB2YWx1ZSBvZlxuICogJycuIElmIHRoZSB2YWx1ZSBpcyBmYWxzZXksIHRoZSBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIG5hbWU6IHN0cmluZztcbiAgc3RyaW5nczogc3RyaW5nW107XG4gIHZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuICBfcGVuZGluZ1ZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogc3RyaW5nW10pIHtcbiAgICBpZiAoc3RyaW5ncy5sZW5ndGggIT09IDIgfHwgc3RyaW5nc1swXSAhPT0gJycgfHwgc3RyaW5nc1sxXSAhPT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQm9vbGVhbiBhdHRyaWJ1dGVzIGNhbiBvbmx5IGNvbnRhaW4gYSBzaW5nbGUgZXhwcmVzc2lvbicpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9ICEhdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgfVxufVxuXG4vKipcbiAqIFNldHMgYXR0cmlidXRlIHZhbHVlcyBmb3IgUHJvcGVydHlQYXJ0cywgc28gdGhhdCB0aGUgdmFsdWUgaXMgb25seSBzZXQgb25jZVxuICogZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHMgZm9yIGEgcHJvcGVydHkuXG4gKlxuICogSWYgYW4gZXhwcmVzc2lvbiBjb250cm9scyB0aGUgd2hvbGUgcHJvcGVydHkgdmFsdWUsIHRoZW4gdGhlIHZhbHVlIGlzIHNpbXBseVxuICogYXNzaWduZWQgdG8gdGhlIHByb3BlcnR5IHVuZGVyIGNvbnRyb2wuIElmIHRoZXJlIGFyZSBzdHJpbmcgbGl0ZXJhbHMgb3JcbiAqIG11bHRpcGxlIGV4cHJlc3Npb25zLCB0aGVuIHRoZSBzdHJpbmdzIGFyZSBleHByZXNzaW9ucyBhcmUgaW50ZXJwb2xhdGVkIGludG9cbiAqIGEgc3RyaW5nIGZpcnN0LlxuICovXG5leHBvcnQgY2xhc3MgUHJvcGVydHlDb21taXR0ZXIgZXh0ZW5kcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICBzaW5nbGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBzdHJpbmdbXSkge1xuICAgIHN1cGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgIHRoaXMuc2luZ2xlID1cbiAgICAgICAgKHN0cmluZ3MubGVuZ3RoID09PSAyICYmIHN0cmluZ3NbMF0gPT09ICcnICYmIHN0cmluZ3NbMV0gPT09ICcnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY3JlYXRlUGFydCgpOiBQcm9wZXJ0eVBhcnQge1xuICAgIHJldHVybiBuZXcgUHJvcGVydHlQYXJ0KHRoaXMpO1xuICB9XG5cbiAgX2dldFZhbHVlKCkge1xuICAgIGlmICh0aGlzLnNpbmdsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFydHNbMF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGNvbW1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgKHRoaXMuZWxlbWVudCBhcyBhbnkpW3RoaXMubmFtZV0gPSB0aGlzLl9nZXRWYWx1ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7fVxuXG4vLyBEZXRlY3QgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyBzdXBwb3J0LiBJZiB0aGUgYGNhcHR1cmVgIHByb3BlcnR5IGlzIHJlYWRcbi8vIGZyb20gdGhlIG9wdGlvbnMgb2JqZWN0LCB0aGVuIG9wdGlvbnMgYXJlIHN1cHBvcnRlZC4gSWYgbm90LCB0aGVuIHRoZSB0aHJpZFxuLy8gYXJndW1lbnQgdG8gYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIgaXMgaW50ZXJwcmV0ZWQgYXMgdGhlIGJvb2xlYW4gY2FwdHVyZVxuLy8gdmFsdWUgc28gd2Ugc2hvdWxkIG9ubHkgcGFzcyB0aGUgYGNhcHR1cmVgIHByb3BlcnR5LlxubGV0IGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IGZhbHNlO1xuXG50cnkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGdldCBjYXB0dXJlKCkge1xuICAgICAgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zIGFzIGFueSwgb3B0aW9ucyk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zIGFzIGFueSwgb3B0aW9ucyk7XG59IGNhdGNoIChfZSkge1xufVxuXG5cbnR5cGUgRXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPVxuICAgIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QmUGFydGlhbDxBZGRFdmVudExpc3RlbmVyT3B0aW9ucz47XG5leHBvcnQgY2xhc3MgRXZlbnRQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIGV2ZW50TmFtZTogc3RyaW5nO1xuICBldmVudENvbnRleHQ/OiBFdmVudFRhcmdldDtcbiAgdmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgX29wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbiAgX3BlbmRpbmdWYWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID0gdW5kZWZpbmVkO1xuICBfYm91bmRIYW5kbGVFdmVudDogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgZXZlbnRDb250ZXh0PzogRXZlbnRUYXJnZXQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIHRoaXMuZXZlbnRDb250ZXh0ID0gZXZlbnRDb250ZXh0O1xuICAgIHRoaXMuX2JvdW5kSGFuZGxlRXZlbnQgPSAoZSkgPT4gdGhpcy5oYW5kbGVFdmVudChlKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLl9wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2UgYXMgRXZlbnRIYW5kbGVyV2l0aE9wdGlvbnM7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3TGlzdGVuZXIgPSB0aGlzLl9wZW5kaW5nVmFsdWU7XG4gICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gbmV3TGlzdGVuZXIgPT0gbnVsbCB8fFxuICAgICAgICBvbGRMaXN0ZW5lciAhPSBudWxsICYmXG4gICAgICAgICAgICAobmV3TGlzdGVuZXIuY2FwdHVyZSAhPT0gb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09IG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgICBuZXdMaXN0ZW5lci5wYXNzaXZlICE9PSBvbGRMaXN0ZW5lci5wYXNzaXZlKTtcbiAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9XG4gICAgICAgIG5ld0xpc3RlbmVyICE9IG51bGwgJiYgKG9sZExpc3RlbmVyID09IG51bGwgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuXG4gICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB0aGlzLmV2ZW50TmFtZSwgdGhpcy5fYm91bmRIYW5kbGVFdmVudCwgdGhpcy5fb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IGdldE9wdGlvbnMobmV3TGlzdGVuZXIpO1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdGhpcy5ldmVudE5hbWUsIHRoaXMuX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX29wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gbmV3TGlzdGVuZXI7XG4gICAgdGhpcy5fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2UgYXMgRXZlbnRIYW5kbGVyV2l0aE9wdGlvbnM7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudDogRXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMudmFsdWUuY2FsbCh0aGlzLmV2ZW50Q29udGV4dCB8fCB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHRoaXMudmFsdWUgYXMgRXZlbnRMaXN0ZW5lck9iamVjdCkuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBXZSBjb3B5IG9wdGlvbnMgYmVjYXVzZSBvZiB0aGUgaW5jb25zaXN0ZW50IGJlaGF2aW9yIG9mIGJyb3dzZXJzIHdoZW4gcmVhZGluZ1xuLy8gdGhlIHRoaXJkIGFyZ3VtZW50IG9mIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyLiBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBvcHRpb25zXG4vLyBhdCBhbGwuIENocm9tZSA0MSBvbmx5IHJlYWRzIGBjYXB0dXJlYCBpZiB0aGUgYXJndW1lbnQgaXMgYW4gb2JqZWN0LlxuY29uc3QgZ2V0T3B0aW9ucyA9IChvOiBBZGRFdmVudExpc3RlbmVyT3B0aW9uc3x1bmRlZmluZWQpID0+IG8gJiZcbiAgICAoZXZlbnRPcHRpb25zU3VwcG9ydGVkID9cbiAgICAgICAgIHtjYXB0dXJlOiBvLmNhcHR1cmUsIHBhc3NpdmU6IG8ucGFzc2l2ZSwgb25jZTogby5vbmNlfSA6XG4gICAgICAgICBvLmNhcHR1cmUgYXMgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge3JlbW92ZU5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge05vZGVQYXJ0fSBmcm9tICcuL3BhcnRzLmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge3RlbXBsYXRlRmFjdG9yeX0gZnJvbSAnLi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuZXhwb3J0IGNvbnN0IHBhcnRzID0gbmV3IFdlYWtNYXA8Tm9kZSwgTm9kZVBhcnQ+KCk7XG5cbi8qKlxuICogUmVuZGVycyBhIHRlbXBsYXRlIHRvIGEgY29udGFpbmVyLlxuICpcbiAqIFRvIHVwZGF0ZSBhIGNvbnRhaW5lciB3aXRoIG5ldyB2YWx1ZXMsIHJlZXZhbHVhdGUgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYW5kXG4gKiBjYWxsIGByZW5kZXJgIHdpdGggdGhlIG5ldyByZXN1bHQuXG4gKlxuICogQHBhcmFtIHJlc3VsdCBhIFRlbXBsYXRlUmVzdWx0IGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZyBsaWtlXG4gKiAgICAgYGh0bWxgIG9yIGBzdmdgLlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBwYXJlbnQgdG8gcmVuZGVyIHRvLiBUaGUgZW50aXJlIGNvbnRlbnRzIGFyZSBlaXRoZXJcbiAqICAgICByZXBsYWNlZCwgb3IgZWZmaWNpZW50bHkgdXBkYXRlZCBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXMgcHJldmlvdXNcbiAqICAgICByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFJlbmRlck9wdGlvbnMgZm9yIHRoZSBlbnRpcmUgcmVuZGVyIHRyZWUgcmVuZGVyZWQgdG8gdGhpc1xuICogICAgIGNvbnRhaW5lci4gUmVuZGVyIG9wdGlvbnMgbXVzdCAqbm90KiBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzIHRvIHRoZSBzYW1lXG4gKiAgICAgY29udGFpbmVyLCBhcyB0aG9zZSBjaGFuZ2VzIHdpbGwgbm90IGVmZmVjdCBwcmV2aW91c2x5IHJlbmRlcmVkIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9XG4gICAgKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQsXG4gICAgIGNvbnRhaW5lcjogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50LFxuICAgICBvcHRpb25zPzogUGFydGlhbDxSZW5kZXJPcHRpb25zPikgPT4ge1xuICAgICAgbGV0IHBhcnQgPSBwYXJ0cy5nZXQoY29udGFpbmVyKTtcbiAgICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIHBhcnRzLnNldChjb250YWluZXIsIHBhcnQgPSBuZXcgTm9kZVBhcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIHBhcnQuYXBwZW5kSW50byhjb250YWluZXIpO1xuICAgICAgfVxuICAgICAgcGFydC5zZXRWYWx1ZShyZXN1bHQpO1xuICAgICAgcGFydC5jb21taXQoKTtcbiAgICB9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIE1vZHVsZSB0byBhZGQgc2hhZHkgRE9NL3NoYWR5IENTUyBwb2x5ZmlsbCBzdXBwb3J0IHRvIGxpdC1odG1sIHRlbXBsYXRlXG4gKiByZW5kZXJpbmcuIFNlZSB0aGUgW1tyZW5kZXJdXSBtZXRob2QgZm9yIGRldGFpbHMuXG4gKlxuICogQG1vZHVsZSBzaGFkeS1yZW5kZXJcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKipcbiAqIERvIG5vdCByZW1vdmUgdGhpcyBjb21tZW50OyBpdCBrZWVwcyB0eXBlZG9jIGZyb20gbWlzcGxhY2luZyB0aGUgbW9kdWxlXG4gKiBkb2NzLlxuICovXG5pbXBvcnQge3JlbW92ZU5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge2luc2VydE5vZGVJbnRvVGVtcGxhdGUsIHJlbW92ZU5vZGVzRnJvbVRlbXBsYXRlfSBmcm9tICcuL21vZGlmeS10ZW1wbGF0ZS5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtwYXJ0cywgcmVuZGVyIGFzIGxpdFJlbmRlcn0gZnJvbSAnLi9yZW5kZXIuanMnO1xuaW1wb3J0IHt0ZW1wbGF0ZUNhY2hlc30gZnJvbSAnLi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQge21hcmtlciwgVGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG5leHBvcnQge2h0bWwsIHN2ZywgVGVtcGxhdGVSZXN1bHR9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcblxuLy8gR2V0IGEga2V5IHRvIGxvb2t1cCBpbiBgdGVtcGxhdGVDYWNoZXNgLlxuY29uc3QgZ2V0VGVtcGxhdGVDYWNoZUtleSA9ICh0eXBlOiBzdHJpbmcsIHNjb3BlTmFtZTogc3RyaW5nKSA9PlxuICAgIGAke3R5cGV9LS0ke3Njb3BlTmFtZX1gO1xuXG5sZXQgY29tcGF0aWJsZVNoYWR5Q1NTVmVyc2lvbiA9IHRydWU7XG5cbmlmICh0eXBlb2Ygd2luZG93LlNoYWR5Q1NTID09PSAndW5kZWZpbmVkJykge1xuICBjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uID0gZmFsc2U7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cuU2hhZHlDU1MucHJlcGFyZVRlbXBsYXRlRG9tID09PSAndW5kZWZpbmVkJykge1xuICBjb25zb2xlLndhcm4oXG4gICAgICBgSW5jb21wYXRpYmxlIFNoYWR5Q1NTIHZlcnNpb24gZGV0ZWN0ZWQuYCArXG4gICAgICBgUGxlYXNlIHVwZGF0ZSB0byBhdCBsZWFzdCBAd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanNAMi4wLjIgYW5kYCArXG4gICAgICBgQHdlYmNvbXBvbmVudHMvc2hhZHljc3NAMS4zLjEuYCk7XG4gIGNvbXBhdGlibGVTaGFkeUNTU1ZlcnNpb24gPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBUZW1wbGF0ZSBmYWN0b3J5IHdoaWNoIHNjb3BlcyB0ZW1wbGF0ZSBET00gdXNpbmcgU2hhZHlDU1MuXG4gKiBAcGFyYW0gc2NvcGVOYW1lIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHNoYWR5VGVtcGxhdGVGYWN0b3J5ID0gKHNjb3BlTmFtZTogc3RyaW5nKSA9PlxuICAgIChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBjYWNoZUtleSA9IGdldFRlbXBsYXRlQ2FjaGVLZXkocmVzdWx0LnR5cGUsIHNjb3BlTmFtZSk7XG4gICAgICBsZXQgdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGVzLmdldChjYWNoZUtleSk7XG4gICAgICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICAgICAgc3RyaW5nc0FycmF5OiBuZXcgV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+KCksXG4gICAgICAgICAga2V5U3RyaW5nOiBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGU+KClcbiAgICAgICAgfTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZXMuc2V0KGNhY2hlS2V5LCB0ZW1wbGF0ZUNhY2hlKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgICAgIGlmICh0ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5ID0gcmVzdWx0LnN0cmluZ3Muam9pbihtYXJrZXIpO1xuICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5nZXQoa2V5KTtcbiAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgICAgIGlmIChjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uKSB7XG4gICAgICAgICAgd2luZG93LlNoYWR5Q1NTIS5wcmVwYXJlVGVtcGxhdGVEb20oZWxlbWVudCwgc2NvcGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQsIGVsZW1lbnQpO1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5zZXQoa2V5LCB0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5zZXQocmVzdWx0LnN0cmluZ3MsIHRlbXBsYXRlKTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9O1xuXG5jb25zdCBURU1QTEFURV9UWVBFUyA9IFsnaHRtbCcsICdzdmcnXTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBzdHlsZSBlbGVtZW50cyBmcm9tIFRlbXBsYXRlcyBmb3IgdGhlIGdpdmVuIHNjb3BlTmFtZS5cbiAqL1xuY29uc3QgcmVtb3ZlU3R5bGVzRnJvbUxpdFRlbXBsYXRlcyA9IChzY29wZU5hbWU6IHN0cmluZykgPT4ge1xuICBURU1QTEFURV9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGVzID0gdGVtcGxhdGVDYWNoZXMuZ2V0KGdldFRlbXBsYXRlQ2FjaGVLZXkodHlwZSwgc2NvcGVOYW1lKSk7XG4gICAgaWYgKHRlbXBsYXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0ZW1wbGF0ZXMua2V5U3RyaW5nLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtlbGVtZW50OiB7Y29udGVudH19ID0gdGVtcGxhdGU7XG4gICAgICAgIC8vIElFIDExIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgaXRlcmFibGUgcGFyYW0gU2V0IGNvbnN0cnVjdG9yXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IG5ldyBTZXQ8RWxlbWVudD4oKTtcbiAgICAgICAgQXJyYXkuZnJvbShjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpLmZvckVhY2goKHM6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICBzdHlsZXMuYWRkKHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUodGVtcGxhdGUsIHN0eWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc2hhZHlSZW5kZXJTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuLyoqXG4gKiBGb3IgdGhlIGdpdmVuIHNjb3BlIG5hbWUsIGVuc3VyZXMgdGhhdCBTaGFkeUNTUyBzdHlsZSBzY29waW5nIGlzIHBlcmZvcm1lZC5cbiAqIFRoaXMgaXMgZG9uZSBqdXN0IG9uY2UgcGVyIHNjb3BlIG5hbWUgc28gdGhlIGZyYWdtZW50IGFuZCB0ZW1wbGF0ZSBjYW5ub3RcbiAqIGJlIG1vZGlmaWVkLlxuICogKDEpIGV4dHJhY3RzIHN0eWxlcyBmcm9tIHRoZSByZW5kZXJlZCBmcmFnbWVudCBhbmQgaGFuZHMgdGhlbSB0byBTaGFkeUNTU1xuICogdG8gYmUgc2NvcGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgZG9jdW1lbnRcbiAqICgyKSByZW1vdmVzIHN0eWxlIGVsZW1lbnRzIGZyb20gYWxsIGxpdC1odG1sIFRlbXBsYXRlcyBmb3IgdGhpcyBzY29wZSBuYW1lLlxuICpcbiAqIE5vdGUsIDxzdHlsZT4gZWxlbWVudHMgY2FuIG9ubHkgYmUgcGxhY2VkIGludG8gdGVtcGxhdGVzIGZvciB0aGVcbiAqIGluaXRpYWwgcmVuZGVyaW5nIG9mIHRoZSBzY29wZS4gSWYgPHN0eWxlPiBlbGVtZW50cyBhcmUgaW5jbHVkZWQgaW4gdGVtcGxhdGVzXG4gKiBkeW5hbWljYWxseSByZW5kZXJlZCB0byB0aGUgc2NvcGUgKGFmdGVyIHRoZSBmaXJzdCBzY29wZSByZW5kZXIpLCB0aGV5IHdpbGxcbiAqIG5vdCBiZSBzY29wZWQgYW5kIHRoZSA8c3R5bGU+IHdpbGwgYmUgbGVmdCBpbiB0aGUgdGVtcGxhdGUgYW5kIHJlbmRlcmVkXG4gKiBvdXRwdXQuXG4gKi9cbmNvbnN0IHByZXBhcmVUZW1wbGF0ZVN0eWxlcyA9XG4gICAgKHJlbmRlcmVkRE9NOiBEb2N1bWVudEZyYWdtZW50LCB0ZW1wbGF0ZTogVGVtcGxhdGUsIHNjb3BlTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBzaGFkeVJlbmRlclNldC5hZGQoc2NvcGVOYW1lKTtcbiAgICAgIC8vIE1vdmUgc3R5bGVzIG91dCBvZiByZW5kZXJlZCBET00gYW5kIHN0b3JlLlxuICAgICAgY29uc3Qgc3R5bGVzID0gcmVuZGVyZWRET00ucXVlcnlTZWxlY3RvckFsbCgnc3R5bGUnKTtcbiAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBzdHlsZXMsIHNraXAgdW5uZWNlc3Nhcnkgd29ya1xuICAgICAgaWYgKHN0eWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gRW5zdXJlIHByZXBhcmVUZW1wbGF0ZVN0eWxlcyBpcyBjYWxsZWQgdG8gc3VwcG9ydCBhZGRpbmdcbiAgICAgICAgLy8gc3R5bGVzIHZpYSBgcHJlcGFyZUFkb3B0ZWRDc3NUZXh0YCBzaW5jZSB0aGF0IHJlcXVpcmVzIHRoYXRcbiAgICAgICAgLy8gYHByZXBhcmVUZW1wbGF0ZVN0eWxlc2AgaXMgY2FsbGVkLlxuICAgICAgICB3aW5kb3cuU2hhZHlDU1MhLnByZXBhcmVUZW1wbGF0ZVN0eWxlcyh0ZW1wbGF0ZS5lbGVtZW50LCBzY29wZU5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb25kZW5zZWRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAvLyBDb2xsZWN0IHN0eWxlcyBpbnRvIGEgc2luZ2xlIHN0eWxlLiBUaGlzIGhlbHBzIHVzIG1ha2Ugc3VyZSBTaGFkeUNTU1xuICAgICAgLy8gbWFuaXB1bGF0aW9ucyB3aWxsIG5vdCBwcmV2ZW50IHVzIGZyb20gYmVpbmcgYWJsZSB0byBmaXggdXAgdGVtcGxhdGVcbiAgICAgIC8vIHBhcnQgaW5kaWNlcy5cbiAgICAgIC8vIE5PVEU6IGNvbGxlY3Rpbmcgc3R5bGVzIGlzIGluZWZmaWNpZW50IGZvciBicm93c2VycyBidXQgU2hhZHlDU1NcbiAgICAgIC8vIGN1cnJlbnRseSBkb2VzIHRoaXMgYW55d2F5LiBXaGVuIGl0IGRvZXMgbm90LCB0aGlzIHNob3VsZCBiZSBjaGFuZ2VkLlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZXNbaV07XG4gICAgICAgIHN0eWxlLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKHN0eWxlKTtcbiAgICAgICAgY29uZGVuc2VkU3R5bGUudGV4dENvbnRlbnQhICs9IHN0eWxlLnRleHRDb250ZW50O1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlIHN0eWxlcyBmcm9tIG5lc3RlZCB0ZW1wbGF0ZXMgaW4gdGhpcyBzY29wZS5cbiAgICAgIHJlbW92ZVN0eWxlc0Zyb21MaXRUZW1wbGF0ZXMoc2NvcGVOYW1lKTtcbiAgICAgIC8vIEFuZCB0aGVuIHB1dCB0aGUgY29uZGVuc2VkIHN0eWxlIGludG8gdGhlIFwicm9vdFwiIHRlbXBsYXRlIHBhc3NlZCBpbiBhc1xuICAgICAgLy8gYHRlbXBsYXRlYC5cbiAgICAgIGluc2VydE5vZGVJbnRvVGVtcGxhdGUoXG4gICAgICAgICAgdGVtcGxhdGUsIGNvbmRlbnNlZFN0eWxlLCB0ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IFNoYWR5Q1NTIGdldHMgdGhlIHRlbXBsYXRlIHRoYXQgYGxpdC1odG1sYFxuICAgICAgLy8gd2lsbCBhY3R1YWxseSByZW5kZXIgc28gdGhhdCBpdCBjYW4gdXBkYXRlIHRoZSBzdHlsZSBpbnNpZGUgd2hlblxuICAgICAgLy8gbmVlZGVkIChlLmcuIEBhcHBseSBuYXRpdmUgU2hhZG93IERPTSBjYXNlKS5cbiAgICAgIHdpbmRvdy5TaGFkeUNTUyEucHJlcGFyZVRlbXBsYXRlU3R5bGVzKHRlbXBsYXRlLmVsZW1lbnQsIHNjb3BlTmFtZSk7XG4gICAgICBpZiAod2luZG93LlNoYWR5Q1NTIS5uYXRpdmVTaGFkb3cpIHtcbiAgICAgICAgLy8gV2hlbiBpbiBuYXRpdmUgU2hhZG93IERPTSwgcmUtYWRkIHN0eWxpbmcgdG8gcmVuZGVyZWQgY29udGVudCB1c2luZ1xuICAgICAgICAvLyB0aGUgc3R5bGUgU2hhZHlDU1MgcHJvZHVjZWQuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGVtcGxhdGUuZWxlbWVudC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykhO1xuICAgICAgICByZW5kZXJlZERPTS5pbnNlcnRCZWZvcmUoc3R5bGUuY2xvbmVOb2RlKHRydWUpLCByZW5kZXJlZERPTS5maXJzdENoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdoZW4gbm90IGluIG5hdGl2ZSBTaGFkb3cgRE9NLCBhdCB0aGlzIHBvaW50IFNoYWR5Q1NTIHdpbGwgaGF2ZVxuICAgICAgICAvLyByZW1vdmVkIHRoZSBzdHlsZSBmcm9tIHRoZSBsaXQgdGVtcGxhdGUgYW5kIHBhcnRzIHdpbGwgYmUgYnJva2VuIGFzIGFcbiAgICAgICAgLy8gcmVzdWx0LiBUbyBmaXggdGhpcywgd2UgcHV0IGJhY2sgdGhlIHN0eWxlIG5vZGUgU2hhZHlDU1MgcmVtb3ZlZFxuICAgICAgICAvLyBhbmQgdGhlbiB0ZWxsIGxpdCB0byByZW1vdmUgdGhhdCBub2RlIGZyb20gdGhlIHRlbXBsYXRlLlxuICAgICAgICAvLyBOT1RFLCBTaGFkeUNTUyBjcmVhdGVzIGl0cyBvd24gc3R5bGUgc28gd2UgY2FuIHNhZmVseSBhZGQvcmVtb3ZlXG4gICAgICAgIC8vIGBjb25kZW5zZWRTdHlsZWAgaGVyZS5cbiAgICAgICAgdGVtcGxhdGUuZWxlbWVudC5jb250ZW50Lmluc2VydEJlZm9yZShcbiAgICAgICAgICAgIGNvbmRlbnNlZFN0eWxlLCB0ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHJlbW92ZXMuYWRkKGNvbmRlbnNlZFN0eWxlKTtcbiAgICAgICAgcmVtb3ZlTm9kZXNGcm9tVGVtcGxhdGUodGVtcGxhdGUsIHJlbW92ZXMpO1xuICAgICAgfVxuICAgIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hhZHlSZW5kZXJPcHRpb25zIGV4dGVuZHMgUGFydGlhbDxSZW5kZXJPcHRpb25zPiB7XG4gIHNjb3BlTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEV4dGVuc2lvbiB0byB0aGUgc3RhbmRhcmQgYHJlbmRlcmAgbWV0aG9kIHdoaWNoIHN1cHBvcnRzIHJlbmRlcmluZ1xuICogdG8gU2hhZG93Um9vdHMgd2hlbiB0aGUgU2hhZHlET00gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJjb21wb25lbnRzL3NoYWR5ZG9tKVxuICogYW5kIFNoYWR5Q1NTIChodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9zaGFkeWNzcykgcG9seWZpbGxzIGFyZSB1c2VkXG4gKiBvciB3aGVuIHRoZSB3ZWJjb21wb25lbnRzanNcbiAqIChodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMpIHBvbHlmaWxsIGlzIHVzZWQuXG4gKlxuICogQWRkcyBhIGBzY29wZU5hbWVgIG9wdGlvbiB3aGljaCBpcyB1c2VkIHRvIHNjb3BlIGVsZW1lbnQgRE9NIGFuZCBzdHlsZXNoZWV0c1xuICogd2hlbiBuYXRpdmUgU2hhZG93RE9NIGlzIHVuYXZhaWxhYmxlLiBUaGUgYHNjb3BlTmFtZWAgd2lsbCBiZSBhZGRlZCB0b1xuICogdGhlIGNsYXNzIGF0dHJpYnV0ZSBvZiBhbGwgcmVuZGVyZWQgRE9NLiBJbiBhZGRpdGlvbiwgYW55IHN0eWxlIGVsZW1lbnRzIHdpbGxcbiAqIGJlIGF1dG9tYXRpY2FsbHkgcmUtd3JpdHRlbiB3aXRoIHRoaXMgYHNjb3BlTmFtZWAgc2VsZWN0b3IgYW5kIG1vdmVkIG91dFxuICogb2YgdGhlIHJlbmRlcmVkIERPTSBhbmQgaW50byB0aGUgZG9jdW1lbnQgYDxoZWFkPmAuXG4gKlxuICogSXQgaXMgY29tbW9uIHRvIHVzZSB0aGlzIHJlbmRlciBtZXRob2QgaW4gY29uanVuY3Rpb24gd2l0aCBhIGN1c3RvbSBlbGVtZW50XG4gKiB3aGljaCByZW5kZXJzIGEgc2hhZG93Um9vdC4gV2hlbiB0aGlzIGlzIGRvbmUsIHR5cGljYWxseSB0aGUgZWxlbWVudCdzXG4gKiBgbG9jYWxOYW1lYCBzaG91bGQgYmUgdXNlZCBhcyB0aGUgYHNjb3BlTmFtZWAuXG4gKlxuICogSW4gYWRkaXRpb24gdG8gRE9NIHNjb3BpbmcsIFNoYWR5Q1NTIGFsc28gc3VwcG9ydHMgYSBiYXNpYyBzaGltIGZvciBjc3NcbiAqIGN1c3RvbSBwcm9wZXJ0aWVzIChuZWVkZWQgb25seSBvbiBvbGRlciBicm93c2VycyBsaWtlIElFMTEpIGFuZCBhIHNoaW0gZm9yXG4gKiBhIGRlcHJlY2F0ZWQgZmVhdHVyZSBjYWxsZWQgYEBhcHBseWAgdGhhdCBzdXBwb3J0cyBhcHBseWluZyBhIHNldCBvZiBjc3NcbiAqIGN1c3RvbSBwcm9wZXJ0aWVzIHRvIGEgZ2l2ZW4gbG9jYXRpb24uXG4gKlxuICogVXNhZ2UgY29uc2lkZXJhdGlvbnM6XG4gKlxuICogKiBQYXJ0IHZhbHVlcyBpbiBgPHN0eWxlPmAgZWxlbWVudHMgYXJlIG9ubHkgYXBwbGllZCB0aGUgZmlyc3QgdGltZSBhIGdpdmVuXG4gKiBgc2NvcGVOYW1lYCByZW5kZXJzLiBTdWJzZXF1ZW50IGNoYW5nZXMgdG8gcGFydHMgaW4gc3R5bGUgZWxlbWVudHMgd2lsbCBoYXZlXG4gKiBubyBlZmZlY3QuIEJlY2F1c2Ugb2YgdGhpcywgcGFydHMgaW4gc3R5bGUgZWxlbWVudHMgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3JcbiAqIHZhbHVlcyB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlLCBmb3IgZXhhbXBsZSBwYXJ0cyB0aGF0IHNldCBzY29wZS13aWRlIHRoZW1lXG4gKiB2YWx1ZXMgb3IgcGFydHMgd2hpY2ggcmVuZGVyIHNoYXJlZCBzdHlsZSBlbGVtZW50cy5cbiAqXG4gKiAqIE5vdGUsIGR1ZSB0byBhIGxpbWl0YXRpb24gb2YgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCByZW5kZXJpbmcgaW4gYVxuICogY3VzdG9tIGVsZW1lbnQncyBgY29uc3RydWN0b3JgIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQgcmVuZGVyaW5nIHNob3VsZFxuICogZWl0aGVyIGRvbmUgYXN5bmNocm9ub3VzbHksIGZvciBleGFtcGxlIGF0IG1pY3JvdGFzayB0aW1pbmcgKGZvciBleGFtcGxlXG4gKiBgUHJvbWlzZS5yZXNvbHZlKClgKSwgb3IgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGZpcnN0IHRpbWUgdGhlIGVsZW1lbnQnc1xuICogYGNvbm5lY3RlZENhbGxiYWNrYCBydW5zLlxuICpcbiAqIFVzYWdlIGNvbnNpZGVyYXRpb25zIHdoZW4gdXNpbmcgc2hpbW1lZCBjdXN0b20gcHJvcGVydGllcyBvciBgQGFwcGx5YDpcbiAqXG4gKiAqIFdoZW5ldmVyIGFueSBkeW5hbWljIGNoYW5nZXMgYXJlIG1hZGUgd2hpY2ggYWZmZWN0XG4gKiBjc3MgY3VzdG9tIHByb3BlcnRpZXMsIGBTaGFkeUNTUy5zdHlsZUVsZW1lbnQoZWxlbWVudClgIG11c3QgYmUgY2FsbGVkXG4gKiB0byB1cGRhdGUgdGhlIGVsZW1lbnQuIFRoZXJlIGFyZSB0d28gY2FzZXMgd2hlbiB0aGlzIGlzIG5lZWRlZDpcbiAqICgxKSB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgdG8gYSBuZXcgcGFyZW50LCAoMikgYSBjbGFzcyBpcyBhZGRlZCB0byB0aGVcbiAqIGVsZW1lbnQgdGhhdCBjYXVzZXMgaXQgdG8gbWF0Y2ggZGlmZmVyZW50IGN1c3RvbSBwcm9wZXJ0aWVzLlxuICogVG8gYWRkcmVzcyB0aGUgZmlyc3QgY2FzZSB3aGVuIHJlbmRlcmluZyBhIGN1c3RvbSBlbGVtZW50LCBgc3R5bGVFbGVtZW50YFxuICogc2hvdWxkIGJlIGNhbGxlZCBpbiB0aGUgZWxlbWVudCdzIGBjb25uZWN0ZWRDYWxsYmFja2AuXG4gKlxuICogKiBTaGltbWVkIGN1c3RvbSBwcm9wZXJ0aWVzIG1heSBvbmx5IGJlIGRlZmluZWQgZWl0aGVyIGZvciBhbiBlbnRpcmVcbiAqIHNoYWRvd1Jvb3QgKGZvciBleGFtcGxlLCBpbiBhIGA6aG9zdGAgcnVsZSkgb3IgdmlhIGEgcnVsZSB0aGF0IGRpcmVjdGx5XG4gKiBtYXRjaGVzIGFuIGVsZW1lbnQgd2l0aCBhIHNoYWRvd1Jvb3QuIEluIG90aGVyIHdvcmRzLCBpbnN0ZWFkIG9mIGZsb3dpbmcgZnJvbVxuICogcGFyZW50IHRvIGNoaWxkIGFzIGRvIG5hdGl2ZSBjc3MgY3VzdG9tIHByb3BlcnRpZXMsIHNoaW1tZWQgY3VzdG9tIHByb3BlcnRpZXNcbiAqIGZsb3cgb25seSBmcm9tIHNoYWRvd1Jvb3RzIHRvIG5lc3RlZCBzaGFkb3dSb290cy5cbiAqXG4gKiAqIFdoZW4gdXNpbmcgYEBhcHBseWAgbWl4aW5nIGNzcyBzaG9ydGhhbmQgcHJvcGVydHkgbmFtZXMgd2l0aFxuICogbm9uLXNob3J0aGFuZCBuYW1lcyAoZm9yIGV4YW1wbGUgYGJvcmRlcmAgYW5kIGBib3JkZXItd2lkdGhgKSBpcyBub3RcbiAqIHN1cHBvcnRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9XG4gICAgKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQsXG4gICAgIGNvbnRhaW5lcjogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50LFxuICAgICBvcHRpb25zOiBTaGFkeVJlbmRlck9wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IHNjb3BlTmFtZSA9IG9wdGlvbnMuc2NvcGVOYW1lO1xuICAgICAgY29uc3QgaGFzUmVuZGVyZWQgPSBwYXJ0cy5oYXMoY29udGFpbmVyKTtcbiAgICAgIGNvbnN0IG5lZWRzU2NvcGluZyA9IGNvbnRhaW5lciBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgJiZcbiAgICAgICAgICBjb21wYXRpYmxlU2hhZHlDU1NWZXJzaW9uICYmIHJlc3VsdCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVzdWx0O1xuICAgICAgLy8gSGFuZGxlIGZpcnN0IHJlbmRlciB0byBhIHNjb3BlIHNwZWNpYWxseS4uLlxuICAgICAgY29uc3QgZmlyc3RTY29wZVJlbmRlciA9IG5lZWRzU2NvcGluZyAmJiAhc2hhZHlSZW5kZXJTZXQuaGFzKHNjb3BlTmFtZSk7XG4gICAgICAvLyBPbiBmaXJzdCBzY29wZSByZW5kZXIsIHJlbmRlciBpbnRvIGEgZnJhZ21lbnQ7IHRoaXMgY2Fubm90IGJlIGEgc2luZ2xlXG4gICAgICAvLyBmcmFnbWVudCB0aGF0IGlzIHJldXNlZCBzaW5jZSBuZXN0ZWQgcmVuZGVycyBjYW4gb2NjdXIgc3luY2hyb25vdXNseS5cbiAgICAgIGNvbnN0IHJlbmRlckNvbnRhaW5lciA9XG4gICAgICAgICAgZmlyc3RTY29wZVJlbmRlciA/IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSA6IGNvbnRhaW5lcjtcbiAgICAgIGxpdFJlbmRlcihcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgcmVuZGVyQ29udGFpbmVyLFxuICAgICAgICAgIHt0ZW1wbGF0ZUZhY3Rvcnk6IHNoYWR5VGVtcGxhdGVGYWN0b3J5KHNjb3BlTmFtZSksIC4uLm9wdGlvbnN9IGFzXG4gICAgICAgICAgICAgIFJlbmRlck9wdGlvbnMpO1xuICAgICAgLy8gV2hlbiBwZXJmb3JtaW5nIGZpcnN0IHNjb3BlIHJlbmRlcixcbiAgICAgIC8vICgxKSBXZSd2ZSByZW5kZXJlZCBpbnRvIGEgZnJhZ21lbnQgc28gdGhhdCB0aGVyZSdzIGEgY2hhbmNlIHRvXG4gICAgICAvLyBgcHJlcGFyZVRlbXBsYXRlU3R5bGVzYCBiZWZvcmUgc3ViLWVsZW1lbnRzIGhpdCB0aGUgRE9NXG4gICAgICAvLyAod2hpY2ggbWlnaHQgY2F1c2UgdGhlbSB0byByZW5kZXIgYmFzZWQgb24gYSBjb21tb24gcGF0dGVybiBvZlxuICAgICAgLy8gcmVuZGVyaW5nIGluIGEgY3VzdG9tIGVsZW1lbnQncyBgY29ubmVjdGVkQ2FsbGJhY2tgKTtcbiAgICAgIC8vICgyKSBTY29wZSB0aGUgdGVtcGxhdGUgd2l0aCBTaGFkeUNTUyBvbmUgdGltZSBvbmx5IGZvciB0aGlzIHNjb3BlLlxuICAgICAgLy8gKDMpIFJlbmRlciB0aGUgZnJhZ21lbnQgaW50byB0aGUgY29udGFpbmVyIGFuZCBtYWtlIHN1cmUgdGhlXG4gICAgICAvLyBjb250YWluZXIga25vd3MgaXRzIGBwYXJ0YCBpcyB0aGUgb25lIHdlIGp1c3QgcmVuZGVyZWQuIFRoaXMgZW5zdXJlc1xuICAgICAgLy8gRE9NIHdpbGwgYmUgcmUtdXNlZCBvbiBzdWJzZXF1ZW50IHJlbmRlcnMuXG4gICAgICBpZiAoZmlyc3RTY29wZVJlbmRlcikge1xuICAgICAgICBjb25zdCBwYXJ0ID0gcGFydHMuZ2V0KHJlbmRlckNvbnRhaW5lcikhO1xuICAgICAgICBwYXJ0cy5kZWxldGUocmVuZGVyQ29udGFpbmVyKTtcbiAgICAgICAgaWYgKHBhcnQudmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlKSB7XG4gICAgICAgICAgcHJlcGFyZVRlbXBsYXRlU3R5bGVzKFxuICAgICAgICAgICAgICByZW5kZXJDb250YWluZXIgYXMgRG9jdW1lbnRGcmFnbWVudCxcbiAgICAgICAgICAgICAgcGFydC52YWx1ZS50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgc2NvcGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckNvbnRhaW5lcik7XG4gICAgICAgIHBhcnRzLnNldChjb250YWluZXIsIHBhcnQpO1xuICAgICAgfVxuICAgICAgLy8gQWZ0ZXIgZWxlbWVudHMgaGF2ZSBoaXQgdGhlIERPTSwgdXBkYXRlIHN0eWxpbmcgaWYgdGhpcyBpcyB0aGVcbiAgICAgIC8vIGluaXRpYWwgcmVuZGVyIHRvIHRoaXMgY29udGFpbmVyLlxuICAgICAgLy8gVGhpcyBpcyBuZWVkZWQgd2hlbmV2ZXIgZHluYW1pYyBjaGFuZ2VzIGFyZSBtYWRlIHNvIGl0IHdvdWxkIGJlXG4gICAgICAvLyBzYWZlc3QgdG8gZG8gZXZlcnkgcmVuZGVyOyBob3dldmVyLCB0aGlzIHdvdWxkIHJlZ3Jlc3MgcGVyZm9ybWFuY2VcbiAgICAgIC8vIHNvIHdlIGxlYXZlIGl0IHVwIHRvIHRoZSB1c2VyIHRvIGNhbGwgYFNoYWR5Q1NTUy5zdHlsZUVsZW1lbnRgXG4gICAgICAvLyBmb3IgZHluYW1pYyBjaGFuZ2VzLlxuICAgICAgaWYgKCFoYXNSZW5kZXJlZCAmJiBuZWVkc1Njb3BpbmcpIHtcbiAgICAgICAgd2luZG93LlNoYWR5Q1NTIS5zdHlsZUVsZW1lbnQoKGNvbnRhaW5lciBhcyBTaGFkb3dSb290KS5ob3N0KTtcbiAgICAgIH1cbiAgICB9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQge21hcmtlciwgVGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdHlwZSB0aGF0IGNyZWF0ZXMgYSBUZW1wbGF0ZSBmcm9tIGEgVGVtcGxhdGVSZXN1bHQuXG4gKlxuICogVGhpcyBpcyBhIGhvb2sgaW50byB0aGUgdGVtcGxhdGUtY3JlYXRpb24gcHJvY2VzcyBmb3IgcmVuZGVyaW5nIHRoYXRcbiAqIHJlcXVpcmVzIHNvbWUgbW9kaWZpY2F0aW9uIG9mIHRlbXBsYXRlcyBiZWZvcmUgdGhleSdyZSB1c2VkLCBsaWtlIFNoYWR5Q1NTLFxuICogd2hpY2ggbXVzdCBhZGQgY2xhc3NlcyB0byBlbGVtZW50cyBhbmQgcmVtb3ZlIHN0eWxlcy5cbiAqXG4gKiBUZW1wbGF0ZXMgc2hvdWxkIGJlIGNhY2hlZCBhcyBhZ2dyZXNzaXZlbHkgYXMgcG9zc2libGUsIHNvIHRoYXQgbWFueVxuICogVGVtcGxhdGVSZXN1bHRzIHByb2R1Y2VkIGZyb20gdGhlIHNhbWUgZXhwcmVzc2lvbiBvbmx5IGRvIHRoZSB3b3JrIG9mXG4gKiBjcmVhdGluZyB0aGUgVGVtcGxhdGUgdGhlIGZpcnN0IHRpbWUuXG4gKlxuICogVGVtcGxhdGVzIGFyZSB1c3VhbGx5IGNhY2hlZCBieSBUZW1wbGF0ZVJlc3VsdC5zdHJpbmdzIGFuZFxuICogVGVtcGxhdGVSZXN1bHQudHlwZSwgYnV0IG1heSBiZSBjYWNoZWQgYnkgb3RoZXIga2V5cyBpZiB0aGlzIGZ1bmN0aW9uXG4gKiBtb2RpZmllcyB0aGUgdGVtcGxhdGUuXG4gKlxuICogTm90ZSB0aGF0IGN1cnJlbnRseSBUZW1wbGF0ZUZhY3RvcmllcyBtdXN0IG5vdCBhZGQsIHJlbW92ZSwgb3IgcmVvcmRlclxuICogZXhwcmVzc2lvbnMsIGJlY2F1c2UgdGhlcmUgaXMgbm8gd2F5IHRvIGRlc2NyaWJlIHN1Y2ggYSBtb2RpZmljYXRpb25cbiAqIHRvIHJlbmRlcigpIHNvIHRoYXQgdmFsdWVzIGFyZSBpbnRlcnBvbGF0ZWQgdG8gdGhlIGNvcnJlY3QgcGxhY2UgaW4gdGhlXG4gKiB0ZW1wbGF0ZSBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydCB0eXBlIFRlbXBsYXRlRmFjdG9yeSA9IChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0KSA9PiBUZW1wbGF0ZTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBUZW1wbGF0ZUZhY3Rvcnkgd2hpY2ggY2FjaGVzIFRlbXBsYXRlcyBrZXllZCBvblxuICogcmVzdWx0LnR5cGUgYW5kIHJlc3VsdC5zdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVGYWN0b3J5KHJlc3VsdDogVGVtcGxhdGVSZXN1bHQpIHtcbiAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQocmVzdWx0LnR5cGUpO1xuICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGVtcGxhdGVDYWNoZSA9IHtcbiAgICAgIHN0cmluZ3NBcnJheTogbmV3IFdlYWtNYXA8VGVtcGxhdGVTdHJpbmdzQXJyYXksIFRlbXBsYXRlPigpLFxuICAgICAga2V5U3RyaW5nOiBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGU+KClcbiAgICB9O1xuICAgIHRlbXBsYXRlQ2FjaGVzLnNldChyZXN1bHQudHlwZSwgdGVtcGxhdGVDYWNoZSk7XG4gIH1cblxuICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICBpZiAodGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIC8vIElmIHRoZSBUZW1wbGF0ZVN0cmluZ3NBcnJheSBpcyBuZXcsIGdlbmVyYXRlIGEga2V5IGZyb20gdGhlIHN0cmluZ3NcbiAgLy8gVGhpcyBrZXkgaXMgc2hhcmVkIGJldHdlZW4gYWxsIHRlbXBsYXRlcyB3aXRoIGlkZW50aWNhbCBjb250ZW50XG4gIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcblxuICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5nZXQoa2V5KTtcbiAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIG5vdCBzZWVuIHRoaXMga2V5IGJlZm9yZSwgY3JlYXRlIGEgbmV3IFRlbXBsYXRlXG4gICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCkpO1xuICAgIC8vIENhY2hlIHRoZSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgICB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5zZXQoa2V5LCB0ZW1wbGF0ZSk7XG4gIH1cblxuICAvLyBDYWNoZSBhbGwgZnV0dXJlIHF1ZXJpZXMgZm9yIHRoaXMgVGVtcGxhdGVTdHJpbmdzQXJyYXlcbiAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLyoqXG4gKiBUaGUgZmlyc3QgYXJndW1lbnQgdG8gSlMgdGVtcGxhdGUgdGFncyByZXRhaW4gaWRlbnRpdHkgYWNyb3NzIG11bHRpcGxlXG4gKiBjYWxscyB0byBhIHRhZyBmb3IgdGhlIHNhbWUgbGl0ZXJhbCwgc28gd2UgY2FuIGNhY2hlIHdvcmsgZG9uZSBwZXIgbGl0ZXJhbFxuICogaW4gYSBNYXAuXG4gKlxuICogU2FmYXJpIGN1cnJlbnRseSBoYXMgYSBidWcgd2hpY2ggb2NjYXNpb25hbGx5IGJyZWFrcyB0aGlzIGJlaGF2aW91ciwgc28gd2VcbiAqIG5lZWQgdG8gY2FjaGUgdGhlIFRlbXBsYXRlIGF0IHR3byBsZXZlbHMuIFdlIGZpcnN0IGNhY2hlIHRoZVxuICogVGVtcGxhdGVTdHJpbmdzQXJyYXksIGFuZCBpZiB0aGF0IGZhaWxzLCB3ZSBjYWNoZSBhIGtleSBjb25zdHJ1Y3RlZCBieVxuICogam9pbmluZyB0aGUgc3RyaW5ncyBhcnJheS5cbiAqL1xuZXhwb3J0IHR5cGUgdGVtcGxhdGVDYWNoZSA9IHtcbiAgc3RyaW5nc0FycmF5OiBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT47XG4gIGtleVN0cmluZzogTWFwPHN0cmluZywgVGVtcGxhdGU+O1xufTtcblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlQ2FjaGVzID0gbmV3IE1hcDxzdHJpbmcsIHRlbXBsYXRlQ2FjaGU+KCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7aXNDRVBvbHlmaWxsfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGEgYFRlbXBsYXRlYCB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgRE9NIGFuZCB1cGRhdGVkXG4gKiB3aXRoIG5ldyB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgX3BhcnRzOiBBcnJheTxQYXJ0fHVuZGVmaW5lZD4gPSBbXTtcbiAgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3NvcjtcbiAgb3B0aW9uczogUmVuZGVyT3B0aW9ucztcbiAgdGVtcGxhdGU6IFRlbXBsYXRlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgdGVtcGxhdGU6IFRlbXBsYXRlLCBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yLFxuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucykge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgdXBkYXRlKHZhbHVlczogdW5rbm93bltdKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9wYXJ0cykge1xuICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jbG9uZSgpOiBEb2N1bWVudEZyYWdtZW50IHtcbiAgICAvLyBXaGVuIHVzaW5nIHRoZSBDdXN0b20gRWxlbWVudHMgcG9seWZpbGwsIGNsb25lIHRoZSBub2RlLCByYXRoZXIgdGhhblxuICAgIC8vIGltcG9ydGluZyBpdCwgdG8ga2VlcCB0aGUgZnJhZ21lbnQgaW4gdGhlIHRlbXBsYXRlJ3MgZG9jdW1lbnQuIFRoaXNcbiAgICAvLyBsZWF2ZXMgdGhlIGZyYWdtZW50IGluZXJ0IHNvIGN1c3RvbSBlbGVtZW50cyB3b24ndCB1cGdyYWRlIGFuZFxuICAgIC8vIHBvdGVudGlhbGx5IG1vZGlmeSB0aGVpciBjb250ZW50cyBieSBjcmVhdGluZyBhIHBvbHlmaWxsZWQgU2hhZG93Um9vdFxuICAgIC8vIHdoaWxlIHdlIHRyYXZlcnNlIHRoZSB0cmVlLlxuICAgIGNvbnN0IGZyYWdtZW50ID0gaXNDRVBvbHlmaWxsID9cbiAgICAgICAgdGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50RnJhZ21lbnQgOlxuICAgICAgICBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LCB0cnVlKTtcblxuICAgIGNvbnN0IHBhcnRzID0gdGhpcy50ZW1wbGF0ZS5wYXJ0cztcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICBjb25zdCBfcHJlcGFyZUluc3RhbmNlID0gKGZyYWdtZW50OiBEb2N1bWVudEZyYWdtZW50KSA9PiB7XG4gICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlXG4gICAgICAvLyBudWxsXG4gICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGZhbHNlKTtcbiAgICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBub2RlcyBhbmQgcGFydHMgb2YgYSB0ZW1wbGF0ZVxuICAgICAgd2hpbGUgKHBhcnRJbmRleCA8IHBhcnRzLmxlbmd0aCAmJiBub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAvLyBDb25zZWN1dGl2ZSBQYXJ0cyBtYXkgaGF2ZSB0aGUgc2FtZSBub2RlIGluZGV4LCBpbiB0aGUgY2FzZSBvZlxuICAgICAgICAvLyBtdWx0aXBsZSBib3VuZCBhdHRyaWJ1dGVzIG9uIGFuIGVsZW1lbnQuIFNvIGVhY2ggaXRlcmF0aW9uIHdlIGVpdGhlclxuICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIG5vZGVJbmRleCwgaWYgd2UgYXJlbid0IG9uIGEgbm9kZSB3aXRoIGEgcGFydCwgb3IgdGhlXG4gICAgICAgIC8vIHBhcnRJbmRleCBpZiB3ZSBhcmUuIEJ5IG5vdCBpbmNyZW1lbnRpbmcgdGhlIG5vZGVJbmRleCB3aGVuIHdlIGZpbmQgYVxuICAgICAgICAvLyBwYXJ0LCB3ZSBhbGxvdyBmb3IgdGhlIG5leHQgcGFydCB0byBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIGN1cnJlbnRcbiAgICAgICAgLy8gbm9kZSBpZiBuZWNjZXNzYXNyeS5cbiAgICAgICAgaWYgKCFpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KSkge1xuICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfSBlbHNlIGlmIChub2RlSW5kZXggPT09IHBhcnQuaW5kZXgpIHtcbiAgICAgICAgICBpZiAocGFydC50eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnByb2Nlc3Nvci5oYW5kbGVUZXh0RXhwcmVzc2lvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgcGFydC5pbnNlcnRBZnRlck5vZGUobm9kZS5wcmV2aW91c1NpYmxpbmchKTtcbiAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcnRzLnB1c2goLi4udGhpcy5wcm9jZXNzb3IuaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoXG4gICAgICAgICAgICAgICAgbm9kZSBhcyBFbGVtZW50LCBwYXJ0Lm5hbWUsIHBhcnQuc3RyaW5ncywgdGhpcy5vcHRpb25zKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICBfcHJlcGFyZUluc3RhbmNlKChub2RlIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQpLmNvbnRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIF9wcmVwYXJlSW5zdGFuY2UoZnJhZ21lbnQpO1xuICAgIGlmIChpc0NFUG9seWZpbGwpIHtcbiAgICAgIGRvY3VtZW50LmFkb3B0Tm9kZShmcmFnbWVudCk7XG4gICAgICBjdXN0b21FbGVtZW50cy51cGdyYWRlKGZyYWdtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7cmVwYXJlbnROb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtib3VuZEF0dHJpYnV0ZVN1ZmZpeCwgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCwgbWFya2VyLCBub2RlTWFya2VyfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBUaGUgcmV0dXJuIHR5cGUgb2YgYGh0bWxgLCB3aGljaCBob2xkcyBhIFRlbXBsYXRlIGFuZCB0aGUgdmFsdWVzIGZyb21cbiAqIGludGVycG9sYXRlZCBleHByZXNzaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUmVzdWx0IHtcbiAgc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXk7XG4gIHZhbHVlczogdW5rbm93bltdO1xuICB0eXBlOiBzdHJpbmc7XG4gIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgdmFsdWVzOiB1bmtub3duW10sIHR5cGU6IHN0cmluZyxcbiAgICAgIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3IpIHtcbiAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyBvZiBIVE1MIHVzZWQgdG8gY3JlYXRlIGEgYDx0ZW1wbGF0ZT5gIGVsZW1lbnQuXG4gICAqL1xuICBnZXRIVE1MKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZW5kSW5kZXggPSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5nc1tpXTtcbiAgICAgIC8vIFRoaXMgZXhlYygpIGNhbGwgZG9lcyB0d28gdGhpbmdzOlxuICAgICAgLy8gMSkgQXBwZW5kcyBhIHN1ZmZpeCB0byB0aGUgYm91bmQgYXR0cmlidXRlIG5hbWUgdG8gb3B0IG91dCBvZiBzcGVjaWFsXG4gICAgICAvLyBhdHRyaWJ1dGUgdmFsdWUgcGFyc2luZyB0aGF0IElFMTEgYW5kIEVkZ2UgZG8sIGxpa2UgZm9yIHN0eWxlIGFuZFxuICAgICAgLy8gbWFueSBTVkcgYXR0cmlidXRlcy4gVGhlIFRlbXBsYXRlIGNsYXNzIGFsc28gYXBwZW5kcyB0aGUgc2FtZSBzdWZmaXhcbiAgICAgIC8vIHdoZW4gbG9va2luZyB1cCBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBQYXJ0cy5cbiAgICAgIC8vIDIpIEFkZHMgYW4gdW5xdW90ZWQtYXR0cmlidXRlLXNhZmUgbWFya2VyIGZvciB0aGUgZmlyc3QgZXhwcmVzc2lvbiBpblxuICAgICAgLy8gYW4gYXR0cmlidXRlLiBTdWJzZXF1ZW50IGF0dHJpYnV0ZSBleHByZXNzaW9ucyB3aWxsIHVzZSBub2RlIG1hcmtlcnMsXG4gICAgICAvLyBhbmQgdGhpcyBpcyBzYWZlIHNpbmNlIGF0dHJpYnV0ZXMgd2l0aCBtdWx0aXBsZSBleHByZXNzaW9ucyBhcmVcbiAgICAgIC8vIGd1YXJhbnRlZWQgdG8gYmUgcXVvdGVkLlxuICAgICAgY29uc3QgbWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMocyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgLy8gV2UncmUgc3RhcnRpbmcgYSBuZXcgYm91bmQgYXR0cmlidXRlLlxuICAgICAgICAvLyBBZGQgdGhlIHNhZmUgYXR0cmlidXRlIHN1ZmZpeCwgYW5kIHVzZSB1bnF1b3RlZC1hdHRyaWJ1dGUtc2FmZVxuICAgICAgICAvLyBtYXJrZXIuXG4gICAgICAgIGh0bWwgKz0gcy5zdWJzdHIoMCwgbWF0Y2guaW5kZXgpICsgbWF0Y2hbMV0gKyBtYXRjaFsyXSArXG4gICAgICAgICAgICBib3VuZEF0dHJpYnV0ZVN1ZmZpeCArIG1hdGNoWzNdICsgbWFya2VyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2UncmUgZWl0aGVyIGluIGEgYm91bmQgbm9kZSwgb3IgdHJhaWxpbmcgYm91bmQgYXR0cmlidXRlLlxuICAgICAgICAvLyBFaXRoZXIgd2F5LCBub2RlTWFya2VyIGlzIHNhZmUgdG8gdXNlLlxuICAgICAgICBodG1sICs9IHMgKyBub2RlTWFya2VyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaHRtbCArIHRoaXMuc3RyaW5nc1tlbmRJbmRleF07XG4gIH1cblxuICBnZXRUZW1wbGF0ZUVsZW1lbnQoKTogSFRNTFRlbXBsYXRlRWxlbWVudCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuZ2V0SFRNTCgpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEEgVGVtcGxhdGVSZXN1bHQgZm9yIFNWRyBmcmFnbWVudHMuXG4gKlxuICogVGhpcyBjbGFzcyB3cmFwcyBIVE1sIGluIGFuIGA8c3ZnPmAgdGFnIGluIG9yZGVyIHRvIHBhcnNlIGl0cyBjb250ZW50cyBpbiB0aGVcbiAqIFNWRyBuYW1lc3BhY2UsIHRoZW4gbW9kaWZpZXMgdGhlIHRlbXBsYXRlIHRvIHJlbW92ZSB0aGUgYDxzdmc+YCB0YWcgc28gdGhhdFxuICogY2xvbmVzIG9ubHkgY29udGFpbmVyIHRoZSBvcmlnaW5hbCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWR1RlbXBsYXRlUmVzdWx0IGV4dGVuZHMgVGVtcGxhdGVSZXN1bHQge1xuICBnZXRIVE1MKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8c3ZnPiR7c3VwZXIuZ2V0SFRNTCgpfTwvc3ZnPmA7XG4gIH1cblxuICBnZXRUZW1wbGF0ZUVsZW1lbnQoKTogSFRNTFRlbXBsYXRlRWxlbWVudCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBzdXBlci5nZXRUZW1wbGF0ZUVsZW1lbnQoKTtcbiAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkITtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKHN2Z0VsZW1lbnQpO1xuICAgIHJlcGFyZW50Tm9kZXMoY29udGVudCwgc3ZnRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuXG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHdpdGggZW1iZWRkZWQgdW5pcXVlIGtleSB0byBhdm9pZCBjb2xsaXNpb24gd2l0aFxuICogcG9zc2libGUgdGV4dCBpbiB0ZW1wbGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXJrZXIgPSBge3tsaXQtJHtTdHJpbmcoTWF0aC5yYW5kb20oKSkuc2xpY2UoMil9fX1gO1xuXG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHVzZWQgdGV4dC1wb3NpdGlvbnMsIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlcywgYW5kXG4gKiBhdHRyaWJ1dGVzIHdpdGggbWFya3VwLWxpa2UgdGV4dCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBub2RlTWFya2VyID0gYDwhLS0ke21hcmtlcn0tLT5gO1xuXG5leHBvcnQgY29uc3QgbWFya2VyUmVnZXggPSBuZXcgUmVnRXhwKGAke21hcmtlcn18JHtub2RlTWFya2VyfWApO1xuXG4vKipcbiAqIFN1ZmZpeCBhcHBlbmRlZCB0byBhbGwgYm91bmQgYXR0cmlidXRlIG5hbWVzLlxuICovXG5leHBvcnQgY29uc3QgYm91bmRBdHRyaWJ1dGVTdWZmaXggPSAnJGxpdCQnO1xuXG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgVGVtcGxhdGUgdGhhdCB0cmFja3MgdGhlIGxvY2F0aW9uIG9mIGR5bmFtaWMgcGFydHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gIHBhcnRzOiBUZW1wbGF0ZVBhcnRbXSA9IFtdO1xuICBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQsIGVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGNvbnN0IG5vZGVzVG9SZW1vdmU6IE5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IF9wcmVwYXJlVGVtcGxhdGUgPSAodGVtcGxhdGU6IEhUTUxUZW1wbGF0ZUVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZVxuICAgICAgLy8gbnVsbFxuICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGZhbHNlKTtcbiAgICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBsYXN0IGluZGV4IGFzc29jaWF0ZWQgd2l0aCBhIHBhcnQuIFdlIHRyeSB0byBkZWxldGVcbiAgICAgIC8vIHVubmVjZXNzYXJ5IG5vZGVzLCBidXQgd2UgbmV2ZXIgd2FudCB0byBhc3NvY2lhdGUgdHdvIGRpZmZlcmVudCBwYXJ0c1xuICAgICAgLy8gdG8gdGhlIHNhbWUgaW5kZXguIFRoZXkgbXVzdCBoYXZlIGEgY29uc3RhbnQgbm9kZSBiZXR3ZWVuLlxuICAgICAgbGV0IGxhc3RQYXJ0SW5kZXggPSAwO1xuICAgICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGUgYXMgRWxlbWVudCB8IENvbW1lbnQgfCBUZXh0O1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOb2RlLkVMRU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgIGlmICgobm9kZSBhcyBFbGVtZW50KS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSAobm9kZSBhcyBFbGVtZW50KS5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgLy8gUGVyXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmFtZWROb2RlTWFwLFxuICAgICAgICAgICAgLy8gYXR0cmlidXRlcyBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgcmV0dXJuZWQgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAgICAgICAgICAvLyBJbiBwYXJ0aWN1bGFyLCBFZGdlL0lFIGNhbiByZXR1cm4gdGhlbSBvdXQgb2Ygb3JkZXIsIHNvIHdlIGNhbm5vdFxuICAgICAgICAgICAgLy8gYXNzdW1lIGEgY29ycmVzcG9uZGFuY2UgYmV0d2VlbiBwYXJ0IGluZGV4IGFuZCBhdHRyaWJ1dGUgaW5kZXguXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW2ldLnZhbHVlLmluZGV4T2YobWFya2VyKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgICAgICAgICAgIC8vIEdldCB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBzZWN0aW9uIGxlYWRpbmcgdXAgdG8gdGhlIGZpcnN0XG4gICAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaW4gdGhpcyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nRm9yUGFydCA9IHJlc3VsdC5zdHJpbmdzW3BhcnRJbmRleF07XG4gICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMoc3RyaW5nRm9yUGFydCkhWzJdO1xuICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAvLyBBbGwgYm91bmQgYXR0cmlidXRlcyBoYXZlIGhhZCBhIHN1ZmZpeCBhZGRlZCBpblxuICAgICAgICAgICAgICAvLyBUZW1wbGF0ZVJlc3VsdCNnZXRIVE1MIHRvIG9wdCBvdXQgb2Ygc3BlY2lhbCBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgLy8gaGFuZGxpbmcuIFRvIGxvb2sgdXAgdGhlIGF0dHJpYnV0ZSB2YWx1ZSB3ZSBhbHNvIG5lZWQgdG8gYWRkXG4gICAgICAgICAgICAgIC8vIHRoZSBzdWZmaXguXG4gICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUxvb2t1cE5hbWUgPVxuICAgICAgICAgICAgICAgICAgbmFtZS50b0xvd2VyQ2FzZSgpICsgYm91bmRBdHRyaWJ1dGVTdWZmaXg7XG4gICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID1cbiAgICAgICAgICAgICAgICAgIChub2RlIGFzIEVsZW1lbnQpLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKSE7XG4gICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBhdHRyaWJ1dGVWYWx1ZS5zcGxpdChtYXJrZXJSZWdleCk7XG4gICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4LCBuYW1lLCBzdHJpbmdzfSk7XG4gICAgICAgICAgICAgIChub2RlIGFzIEVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKTtcbiAgICAgICAgICAgICAgcGFydEluZGV4ICs9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKChub2RlIGFzIEVsZW1lbnQpLnRhZ05hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICAgIF9wcmVwYXJlVGVtcGxhdGUobm9kZSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSAobm9kZSBhcyBUZXh0KS5kYXRhITtcbiAgICAgICAgICBpZiAoZGF0YS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlITtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBkYXRhLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICAgIChzdHJpbmdzW2ldID09PSAnJykgPyBjcmVhdGVNYXJrZXIoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nc1tpXSksXG4gICAgICAgICAgICAgICAgICBub2RlKTtcbiAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4OiArK2luZGV4fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIHRleHQsIHdlIG11c3QgaW5zZXJ0IGEgY29tbWVudCB0byBtYXJrIG91ciBwbGFjZS5cbiAgICAgICAgICAgIC8vIEVsc2UsIHdlIGNhbiB0cnVzdCBpdCB3aWxsIHN0aWNrIGFyb3VuZCBhZnRlciBjbG9uaW5nLlxuICAgICAgICAgICAgaWYgKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIChub2RlIGFzIFRleHQpLmRhdGEgPSBzdHJpbmdzW2xhc3RJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgICAgcGFydEluZGV4ICs9IGxhc3RJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgIGlmICgobm9kZSBhcyBDb21tZW50KS5kYXRhID09PSBtYXJrZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSE7XG4gICAgICAgICAgICAvLyBBZGQgYSBuZXcgbWFya2VyIG5vZGUgdG8gYmUgdGhlIHN0YXJ0Tm9kZSBvZiB0aGUgUGFydCBpZiBhbnkgb2ZcbiAgICAgICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgYXJlIHRydWU6XG4gICAgICAgICAgICAvLyAgKiBXZSBkb24ndCBoYXZlIGEgcHJldmlvdXNTaWJsaW5nXG4gICAgICAgICAgICAvLyAgKiBUaGUgcHJldmlvdXNTaWJsaW5nIGlzIGFscmVhZHkgdGhlIHN0YXJ0IG9mIGEgcHJldmlvdXMgcGFydFxuICAgICAgICAgICAgaWYgKG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBudWxsIHx8IGluZGV4ID09PSBsYXN0UGFydEluZGV4KSB7XG4gICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdFBhcnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4fSk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbmV4dFNpYmxpbmcsIGtlZXAgdGhpcyBub2RlIHNvIHdlIGhhdmUgYW4gZW5kLlxuICAgICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHJlbW92ZSBpdCB0byBzYXZlIGZ1dHVyZSBjb3N0cy5cbiAgICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIChub2RlIGFzIENvbW1lbnQpLmRhdGEgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgd2hpbGUgKChpID0gKG5vZGUgYXMgQ29tbWVudCkuZGF0YSEuaW5kZXhPZihtYXJrZXIsIGkgKyAxKSkgIT09XG4gICAgICAgICAgICAgICAgICAgLTEpIHtcbiAgICAgICAgICAgICAgLy8gQ29tbWVudCBub2RlIGhhcyBhIGJpbmRpbmcgbWFya2VyIGluc2lkZSwgbWFrZSBhbiBpbmFjdGl2ZSBwYXJ0XG4gICAgICAgICAgICAgIC8vIFRoZSBiaW5kaW5nIHdvbid0IHdvcmssIGJ1dCBzdWJzZXF1ZW50IGJpbmRpbmdzIHdpbGxcbiAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAgIC8vIG1ha2UgYmluZGluZ3MgaW4gY29tbWVudHMgd29ya1xuICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdub2RlJywgaW5kZXg6IC0xfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBfcHJlcGFyZVRlbXBsYXRlKGVsZW1lbnQpO1xuICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgbi5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChuKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIHBsYWNlaG9sZGVyIGZvciBhIGR5bmFtaWMgZXhwcmVzc2lvbiBpbiBhbiBIVE1MIHRlbXBsYXRlLlxuICpcbiAqIFRoZXJlIGFyZSB0d28gYnVpbHQtaW4gcGFydCB0eXBlczogQXR0cmlidXRlUGFydCBhbmQgTm9kZVBhcnQuIE5vZGVQYXJ0c1xuICogYWx3YXlzIHJlcHJlc2VudCBhIHNpbmdsZSBkeW5hbWljIGV4cHJlc3Npb24sIHdoaWxlIEF0dHJpYnV0ZVBhcnRzIG1heVxuICogcmVwcmVzZW50IGFzIG1hbnkgZXhwcmVzc2lvbnMgYXJlIGNvbnRhaW5lZCBpbiB0aGUgYXR0cmlidXRlLlxuICpcbiAqIEEgVGVtcGxhdGUncyBwYXJ0cyBhcmUgbXV0YWJsZSwgc28gcGFydHMgY2FuIGJlIHJlcGxhY2VkIG9yIG1vZGlmaWVkXG4gKiAocG9zc2libHkgdG8gaW1wbGVtZW50IGRpZmZlcmVudCB0ZW1wbGF0ZSBzZW1hbnRpY3MpLiBUaGUgY29udHJhY3QgaXMgdGhhdFxuICogcGFydHMgY2FuIG9ubHkgYmUgcmVwbGFjZWQsIG5vdCByZW1vdmVkLCBhZGRlZCBvciByZW9yZGVyZWQsIGFuZCBwYXJ0cyBtdXN0XG4gKiBhbHdheXMgY29uc3VtZSB0aGUgY29ycmVjdCBudW1iZXIgb2YgdmFsdWVzIGluIHRoZWlyIGB1cGRhdGUoKWAgbWV0aG9kLlxuICpcbiAqIFRPRE8oanVzdGluZmFnbmFuaSk6IFRoYXQgcmVxdWlyZW1lbnQgaXMgYSBsaXR0bGUgZnJhZ2lsZS4gQVxuICogVGVtcGxhdGVJbnN0YW5jZSBjb3VsZCBpbnN0ZWFkIGJlIG1vcmUgY2FyZWZ1bCBhYm91dCB3aGljaCB2YWx1ZXMgaXQgZ2l2ZXNcbiAqIHRvIFBhcnQudXBkYXRlKCkuXG4gKi9cbmV4cG9ydCB0eXBlIFRlbXBsYXRlUGFydCA9IHtcbiAgdHlwZTogJ25vZGUnLFxuICBpbmRleDogbnVtYmVyXG59fHt0eXBlOiAnYXR0cmlidXRlJywgaW5kZXg6IG51bWJlciwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBzdHJpbmdbXX07XG5cbmV4cG9ydCBjb25zdCBpc1RlbXBsYXRlUGFydEFjdGl2ZSA9IChwYXJ0OiBUZW1wbGF0ZVBhcnQpID0+IHBhcnQuaW5kZXggIT09IC0xO1xuXG4vLyBBbGxvd3MgYGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpYCB0byBiZSByZW5hbWVkIGZvciBhXG4vLyBzbWFsbCBtYW51YWwgc2l6ZS1zYXZpbmdzLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcmtlciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXG4vKipcbiAqIFRoaXMgcmVnZXggZXh0cmFjdHMgdGhlIGF0dHJpYnV0ZSBuYW1lIHByZWNlZGluZyBhbiBhdHRyaWJ1dGUtcG9zaXRpb25cbiAqIGV4cHJlc3Npb24uIEl0IGRvZXMgdGhpcyBieSBtYXRjaGluZyB0aGUgc3ludGF4IGFsbG93ZWQgZm9yIGF0dHJpYnV0ZXNcbiAqIGFnYWluc3QgdGhlIHN0cmluZyBsaXRlcmFsIGRpcmVjdGx5IHByZWNlZGluZyB0aGUgZXhwcmVzc2lvbiwgYXNzdW1pbmcgdGhhdFxuICogdGhlIGV4cHJlc3Npb24gaXMgaW4gYW4gYXR0cmlidXRlLXZhbHVlIHBvc2l0aW9uLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0wXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVyc1xuICpcbiAqIFwiIFxceDA5XFx4MGFcXHgwY1xceDBkXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9pbmZyYXN0cnVjdHVyZS5odG1sI3NwYWNlLWNoYXJhY3RlclxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIGNvbnRyb2wgY2hhcmFjdGVyLCBzcGFjZSBjaGFyYWN0ZXIsICgnKSxcbiAqICAgIChcIiksIFwiPlwiLCBcIj1cIiwgb3IgXCIvXCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4ID1cbiAgICAvKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKShbXlxcMC1cXHgxRlxceDdGLVxceDlGIFxceDA5XFx4MGFcXHgwY1xceDBkXCInPj0vXSspKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKj1bIFxceDA5XFx4MGFcXHgwY1xceDBkXSooPzpbXiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJ2A8Pj1dKnxcIlteXCJdKnwnW14nXSopKSQvO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqXG4gKiBNYWluIGxpdC1odG1sIG1vZHVsZS5cbiAqXG4gKiBNYWluIGV4cG9ydHM6XG4gKlxuICogLSAgW1todG1sXV1cbiAqIC0gIFtbc3ZnXV1cbiAqIC0gIFtbcmVuZGVyXV1cbiAqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqXG4gKiBEbyBub3QgcmVtb3ZlIHRoaXMgY29tbWVudDsgaXQga2VlcHMgdHlwZWRvYyBmcm9tIG1pc3BsYWNpbmcgdGhlIG1vZHVsZVxuICogZG9jcy5cbiAqL1xuaW1wb3J0IHtkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7U1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuXG5leHBvcnQge0RlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciwgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5leHBvcnQge2RpcmVjdGl2ZSwgRGlyZWN0aXZlRm4sIGlzRGlyZWN0aXZlfSBmcm9tICcuL2xpYi9kaXJlY3RpdmUuanMnO1xuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogcmVtb3ZlIGxpbmUgd2hlbiB3ZSBnZXQgTm9kZVBhcnQgbW92aW5nIG1ldGhvZHNcbmV4cG9ydCB7cmVtb3ZlTm9kZXMsIHJlcGFyZW50Tm9kZXN9IGZyb20gJy4vbGliL2RvbS5qcyc7XG5leHBvcnQge25vQ2hhbmdlLCBub3RoaW5nLCBQYXJ0fSBmcm9tICcuL2xpYi9wYXJ0LmpzJztcbmV4cG9ydCB7QXR0cmlidXRlQ29tbWl0dGVyLCBBdHRyaWJ1dGVQYXJ0LCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBpc1ByaW1pdGl2ZSwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyLCBQcm9wZXJ0eVBhcnR9IGZyb20gJy4vbGliL3BhcnRzLmpzJztcbmV4cG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9saWIvcmVuZGVyLW9wdGlvbnMuanMnO1xuZXhwb3J0IHtwYXJ0cywgcmVuZGVyfSBmcm9tICcuL2xpYi9yZW5kZXIuanMnO1xuZXhwb3J0IHt0ZW1wbGF0ZUNhY2hlcywgdGVtcGxhdGVGYWN0b3J5fSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmV4cG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi9saWIvdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuZXhwb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7U1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuZXhwb3J0IHtjcmVhdGVNYXJrZXIsIGlzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZX0gZnJvbSAnLi9saWIvdGVtcGxhdGUuanMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGxpdEh0bWxWZXJzaW9uczogc3RyaW5nW107XG4gIH1cbn1cblxuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBsaXQtaHRtbCB1c2FnZS5cbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IGluamVjdCB2ZXJzaW9uIG51bWJlciBhdCBidWlsZCB0aW1lXG4od2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSB8fCAod2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSA9IFtdKSkucHVzaCgnMS4wLjAnKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogdW5rbm93bltdKSA9PlxuICAgIG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IHVua25vd25bXSkgPT5cbiAgICBuZXcgU1ZHVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnc3ZnJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbiIsImltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3VwZXJDbGFzcykgPT4ge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIEN1aUJhc2VFbGVtZW50IGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgICBpbkRpYWxvZzoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgICBleHRyYToge1xuICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKScsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaikge1xuICAgICAgbGV0IGV4dHJhcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfZGF0YV90ZW1wbGF0ZTtcbiAgICAgIGlmIChleHRyYXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dHJhcykpIHtcbiAgICAgICAgICBleHRyYXMgPSBbZXh0cmFzXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXh0cmFzLm1hcChleHRyYSA9PiB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICAgIGV4dHJhLFxuICAgICAgICAgIGhhc3MsXG4gICAgICAgICAgaGFzcy5zdGF0ZXMsXG4gICAgICAgICAgc3RhdGVPYmosXG4gICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgICAgICAvKiBhdHRyaWJ1dGU9ICovIHVuZGVmaW5lZCxcbiAgICAgICAgICBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgICAgKSkuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQgIT09IG51bGwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHNob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKSB7XG4gICAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKGV4dHJhLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuICEhc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZDtcbiAgICB9XG5cbiAgICBoYXNFeHRyYShleHRyYSkge1xuICAgICAgcmV0dXJuIGV4dHJhLmxlbmd0aCA+IDA7XG4gICAgfVxuICB9XG4gIHJldHVybiBDdWlCYXNlRWxlbWVudDtcbn07XG4iLCJpbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIudHMnO1xuXG5mdW5jdGlvbiBsb2FkQ3VzdG9tVUkoKSB7XG4gIC8qKlxuICAgKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICAgKi9cbiAgY2xhc3MgRHluYW1pY0VsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgICAgZWxlbWVudE5hbWU6IFN0cmluZyxcblxuICAgICAgICBpbkRpYWxvZzoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgICdvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZyknLFxuICAgICAgXTtcbiAgICB9XG5cbiAgICBvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZykge1xuICAgICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgICB0aGlzLFxuICAgICAgICBlbGVtZW50TmFtZSA/IGVsZW1lbnROYW1lLnRvVXBwZXJDYXNlKCkgOiAnRElWJyxcbiAgICAgICAgeyBoYXNzLCBzdGF0ZU9iaiwgaW5EaWFsb2cgfSk7XG4gICAgfVxuICB9XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy1lbGVtZW50JywgRHluYW1pY0VsZW1lbnQpO1xufVxuaWYgKFBvbHltZXIgJiYgUG9seW1lci5FbGVtZW50ICYmIGN1c3RvbUVsZW1lbnRzLmdldCgnaG9tZS1hc3Npc3RhbnQnKSkge1xuICBsb2FkQ3VzdG9tVUkoKTtcbn0gZWxzZSB7XG4gIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdob21lLWFzc2lzdGFudCcpLnRoZW4oKCkgPT4gbG9hZEN1c3RvbVVJKCkpO1xufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LnRzJztcblxuaW1wb3J0ICcuL2R5bmFtaWMtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ3N0YXRlLWNhcmQtZGlzcGxheScpLnRoZW4oKCkgPT4ge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIER5bmFtaWNXaXRoRXh0cmEgZXh0ZW5kcyBjdXN0b21FbGVtZW50cy5nZXQoJ3N0YXRlLWNhcmQtZGlzcGxheScpIHtcbiAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1mbGV4LWZhY3RvcnNcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sLXdyYXBwZXIge1xuICAgICAgICAgIG1hcmdpbjogLTRweCAtMTZweCAtNHB4IDA7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtc3RhdGUtbGFiZWwtYmFkZ2Uge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgZHluYW1pYy1lbGVtZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICAjb3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgICNsb2NrIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICB9XG4gICAgICAgICNsb2NrLmhhLWNvdmVyLWNvbnRyb2xzIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmV4dHJhIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLXNpemU6IDM2cHg7XG4gICAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1mb250LXNpemU6IDEuMmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPSdbW2V4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKV1dIGhvcml6b250YWwgbGF5b3V0Jz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2V4dHJhT2JqVmlzaWJsZV1dJz5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPSdbW2V4dHJhT2JqXV0nXG4gICAgICAgICAgICAgICAgICAgIG9uLWRvbS1jaGFuZ2U9J2V4dHJhRG9tQ2hhbmdlZCc+XG4gICAgICAgICAgICA8aGEtc3RhdGUtbGFiZWwtYmFkZ2UgaGFzcz0nW1toYXNzXV0nIHN0YXRlPSdbW2l0ZW1dXSc+PC9oYS1zdGF0ZS1sYWJlbC1iYWRnZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaildXSc+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZHluYW1pYy1lbGVtZW50XG4gICAgICAgICAgICAgICAgICBjbGFzcz0nZmxleCdcbiAgICAgICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQtbmFtZT0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgICAgPC9keW5hbWljLWVsZW1lbnQ+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaildXSc+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlcIiBvbi1jbGljaz0nY2xpY2tIYW5kbGVyJz5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrXV0nPlxuICAgICAgICAgICAgICAgICAgICA8aXJvbi1pY29uIGlkPVwibG9ja1wiIGNsYXNzJD1cIltbY29udHJvbEVsZW1lbnRdXVwiIGljb249XCJtZGk6bG9jay1vdXRsaW5lXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWNvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdGUnPltbY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgICBpbkRpYWxvZzoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgICBleHRyYU9iajoge1xuICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBfYXR0YWNoZWQpJyxcbiAgICAgICAgfSxcbiAgICAgICAgX2F0dGFjaGVkOiBCb29sZWFuLFxuICAgICAgICBleHRyYU9ialZpc2libGU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhVmlzaWJsZShleHRyYU9iaiwgaW5EaWFsb2cpJyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fYXR0YWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIGF0dGFjaGVkKSB7XG4gICAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfYmFkZ2UgfHwgIWF0dGFjaGVkKSByZXR1cm4gW107XG4gICAgICBsZXQgZXh0cmFCYWRnZXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dHJhQmFkZ2VzKSkge1xuICAgICAgICBleHRyYUJhZGdlcyA9IFtleHRyYUJhZGdlc107XG4gICAgICB9XG4gICAgICByZXR1cm4gZXh0cmFCYWRnZXMubWFwKChleHRyYUJhZGdlKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAoZXh0cmFCYWRnZS5lbnRpdHlfaWQgJiYgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdKSB7XG4gICAgICAgICAgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgICAgdGhpcywgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdLCB0aGlzLmluRGlhbG9nLFxuICAgICAgICAgICAgLyogYWxsb3dIaWRkZW49ICovZmFsc2UpKTtcbiAgICAgICAgfSBlbHNlIGlmIChleHRyYUJhZGdlLmF0dHJpYnV0ZSAmJlxuICAgICAgICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXNbZXh0cmFCYWRnZS5hdHRyaWJ1dGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICBzdGF0ZTogU3RyaW5nKHN0YXRlT2JqLmF0dHJpYnV0ZXNbZXh0cmFCYWRnZS5hdHRyaWJ1dGVdKSxcbiAgICAgICAgICAgIGVudGl0eV9pZDogJ25vbmUubm9uZScsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IGV4dHJhQmFkZ2UudW5pdCB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgYmxhY2tsaXN0ID0gZXh0cmFCYWRnZS5ibGFja2xpc3Rfc3RhdGVzO1xuICAgICAgICBpZiAoYmxhY2tsaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmxhY2tsaXN0KSkge1xuICAgICAgICAgICAgYmxhY2tsaXN0ID0gW2JsYWNrbGlzdF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChibGFja2xpc3Quc29tZSh2ID0+IFJlZ0V4cCh2KS50ZXN0KHJlc3VsdC5zdGF0ZS50b1N0cmluZygpKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuX2VudGl0eURpc3BsYXkgPSAnJztcbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCB7IGZyaWVuZGx5X25hbWU6ICcnIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSkuZmlsdGVyKGV4dHJhQmFkZ2UgPT4gZXh0cmFCYWRnZSAhPSBudWxsKTtcbiAgICB9XG5cbiAgICBjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZykge1xuICAgICAgaWYgKGluRGlhbG9nIHx8ICFleHRyYU9iaikgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGV4dHJhT2JqLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGV4dHJhT2JqVmlzaWJsZSA/ICdleHRyYScgOiAnJztcbiAgICB9XG5cbiAgICBfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhpZGVfY29udHJvbDtcbiAgICB9XG5cbiAgICBjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKSB7XG4gICAgICAvLyBoYUxvY2FsaXplIHJlbW92ZWQgaW4gMC42MVxuICAgICAgcmV0dXJuIHN1cGVyLmNvbXB1dGVTdGF0ZURpc3BsYXkodGhpcy5oYUxvY2FsaXplIHx8IHRoaXMubG9jYWxpemUsIHN0YXRlT2JqKTtcbiAgICB9XG5cbiAgICBpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9scyB8fFxuICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2s7XG4gICAgfVxuXG4gICAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICBjb25zdCBsb2NrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2NrJyk7XG4gICAgICBpZiAobG9jaykge1xuICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3Blbi1vdXRsaW5lJztcbiAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJzAuMSc7XG4gICAgICB9XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3V0bGluZSc7XG4gICAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwMDApO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBhcHBseVRoZW1lcyhoYXNzLCBlbGVtZW50LCBzdGF0ZU9iaikge1xuICAgICAgY29uc3QgdGhlbWVOYW1lID0gc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCc7XG4gICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgZWxlbWVudCwgaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgdGhlbWVOYW1lKTtcbiAgICB9XG5cbiAgICBleHRyYURvbUNoYW5nZWQoKSB7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKVxuICAgICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwbHlUaGVtZXModGhpcy5oYXNzLCBlbGVtLCBlbGVtLnN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy13aXRoLWV4dHJhJywgRHluYW1pY1dpdGhFeHRyYSk7XG59KTtcbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQtZWxlbWVudCc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbVVpIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+PC9zdHlsZT5cbiAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249J2hhc3M6YXJyb3ctbGVmdCdcbiAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fYmFja0hhbmRsZXJ9XCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+Q3VzdG9tIFVJIHNldHRpbmdzPC9kaXY+XG4gICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXMtd2lkZT1cIiR7dGhpcy5pc1dpZGV9XCI+XG4gICAgICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9J0RldmljZSBuYW1lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgU2V0IGRldmljZSBuYW1lIHNvIHRoYXQgeW91IGNhbiByZWZlcmVuY2UgaXQgaW4gcGVyLWRldmljZSBzZXR0aW5nc1xuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPSdOYW1lJ1xuICAgICAgICAgICAgICAudmFsdWU9XCJAe3RoaXMubmFtZX1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcGFwZXItY2FyZD5cbiAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgYXR0cmlidXRlOiAnaXMtd2lkZScsXG4gICAgICB9LFxuXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVmbGVjdDogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICduYW1lQ2hhbmdlZCcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkdmFsLCBuZXd2YWwpIHtcbiAgICBpZiAobmFtZSA9PT0gJ25hbWUnKSB7XG4gICAgICB0aGlzLm5hbWVDaGFuZ2VkKG5ld3ZhbCk7XG4gICAgfVxuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGR2YWwsIG5ld3ZhbCk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMubmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gIH1cblxuICBuYW1lQ2hhbmdlZChuYW1lKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLnNldE5hbWUobmFtZSk7XG4gIH1cblxuICBfYmFja0hhbmRsZXIoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdsb2NhdGlvbi1jaGFuZ2VkJyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS1jb25maWctY3VzdG9tLXVpJywgSGFDb25maWdDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5mdW5jdGlvbiBsb2FkQ3VzdG9tVUkoKSB7XG4gIC8qKlxuICAgKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICAgKi9cbiAgY2xhc3MgSGFUaGVtZWRTbGlkZXIgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIG1hcmdpbjogdmFyKC0taGEtdGhlbWVkLXNsaWRlci1tYXJnaW4sIGluaXRpYWwpO1xuICAgICAgICB9XG4gICAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbiB7XG4gICAgICAgICAgLS1wYXBlci1zbGlkZXItcGluLXN0YXJ0LWNvbG9yOiAgdmFyKC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuZGlzYWJsZS1vZmYtd2hlbi1taW4uaXMtb24ge1xuICAgICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgICAgICAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXNsaWRlciB7XG4gICAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICB3aWR0aDogdmFyKC0taGEtcGFwZXItc2xpZGVyLXdpZHRoLCAyMDBweCk7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxwYXBlci1zbGlkZXJcbiAgICAgICAgICAgaWQ9J3NsaWRlcidcbiAgICAgICAgICAgbWluPSdbW190aGVtZWRNaW5dXSdcbiAgICAgICAgICAgbWF4PSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1heFwiLCBtYXgpXV0nXG4gICAgICAgICAgIHBpbj0nW1tfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJwaW5cIiwgcGluKV1dJ1xuICAgICAgICAgICBjbGFzcyQ9J1tbY29tcHV0ZUNsYXNzKHRoZW1lLCBpc09uLCBfdGhlbWVkTWluKV1dJyB2YWx1ZT0nW1t2YWx1ZV1dJ1xuICAgICAgICAgICBvbi1jaGFuZ2U9J3ZhbHVlQ2hhbmdlZCc+XG4gICAgICA8L3BhcGVyLXNsaWRlcj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmVhZHkoKSB7XG4gICAgICBzdXBlci5yZWFkeSgpO1xuICAgICAgdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbiA9ICF0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoaXMudGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbik7XG4gICAgICB0aGlzLmNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhpcy50aGVtZSwgdGhpcy5kaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuJC5zbGlkZXIuX2tleUJpbmRpbmdzID0gdGhpcy4kLnNsaWRlci5fa2V5QmluZGluZ3MgfHwge307XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICB9LFxuICAgICAgICBtYXg6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgICAgfSxcbiAgICAgICAgcGluOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGlzT246IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZU9mZldoZW5NaW46IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZDoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHRoZW1lOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgX3RoZW1lZE1pbjoge1xuICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1pblwiLCBtaW4pJyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAnY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKScsXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhlbWUsIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCkge1xuICAgICAgdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkID0gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZShcbiAgICAgICAgdGhlbWUsICdyZXBvcnRfd2hlbl9ub3RfY2hhbmdlZCcsICFkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICAgIH1cblxuICAgIF9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBhdHRyLCBkZWYpIHtcbiAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICBpZiAoYXR0ciBpbiB0aGVtZSkge1xuICAgICAgICAgIHJldHVybiB0aGVtZVthdHRyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZjtcbiAgICB9XG5cbiAgICBjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIHRoZW1lZE1pbikge1xuICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgaWYgKGlzT24pIHtcbiAgICAgICAgcmVzdWx0ICs9ICdpcy1vbiAnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikgfHwgdGhlbWVkTWluID09PSAwKSB7XG4gICAgICAgIC8vIElmIG9mZldoZW5NaW4gaXMgZW5hYmxlZCBkb24ndCBjdXN0b21pemUuXG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBgJHtyZXN1bHR9ZGlzYWJsZS1vZmYtd2hlbi1taW5gO1xuICAgIH1cblxuICAgIHZhbHVlQ2hhbmdlZChldikge1xuICAgICAgaWYgKCF0aGlzLl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQgJiYgdGhpcy52YWx1ZSA9PT0gZXYudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgfVxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLXRoZW1lZC1zbGlkZXInLCBIYVRoZW1lZFNsaWRlcik7XG59XG5pZiAoUG9seW1lciAmJiBQb2x5bWVyLkVsZW1lbnQgJiYgY3VzdG9tRWxlbWVudHMuZ2V0KCdob21lLWFzc2lzdGFudCcpKSB7XG4gIGxvYWRDdXN0b21VSSgpO1xufSBlbHNlIHtcbiAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hvbWUtYXNzaXN0YW50JykudGhlbigoKSA9PiBsb2FkQ3VzdG9tVUkoKSk7XG59XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC50cyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4udHMnO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLnRzJztcbmltcG9ydCBzdGF0ZUNhcmRUeXBlIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfY2FyZF90eXBlLnRzJztcblxuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyc7XG5cbmZ1bmN0aW9uIGxvYWRDdXN0b21VSSgpIHtcbiAgY29uc3QgU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMgPSBbJ2NvbmZpZ3VyYXRvciddO1xuICBjb25zdCBET01BSU5fVE9fU0xJREVSX1NVUFBPUlQgPSB7XG4gICAgbGlnaHQ6IDEsIC8vIFNVUFBPUlRfQlJJR0hUTkVTU1xuICAgIGNvdmVyOiA0LCAvLyBTVVBQT1JUX1NFVF9QT1NJVElPTlxuICAgIGNsaW1hdGU6IDEsIC8vIFNVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFXG4gIH07XG4gIGNvbnN0IFRZUEVfVE9fQ09OVFJPTCA9IHtcbiAgICB0b2dnbGU6ICdoYS1lbnRpdHktdG9nZ2xlJyxcbiAgICBkaXNwbGF5OiAnJyxcbiAgICBjb3ZlcjogJ2hhLWNvdmVyLWNvbnRyb2xzJyxcbiAgfTtcblxuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIFN0YXRlQ2FyZEN1c3RvbVVpIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgICdpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKScsXG4gICAgICBdO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgaWYgKGNvbnRhaW5lci50YWdOYW1lID09PSAnRElWJyAmJlxuICAgICAgICAgIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0ZScpIHx8IGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NoaWxkLWNhcmQnKSkpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAgIC8vIFNpbmNlIHRoaXMgZG9lc24ndCBhY3R1YWxseSBjaGFuZ2UgdGhlIGJhY2tncm91bmQgLSBubyBuZWVkIHRvIGNsZWFyIGl0LlxuICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLCAndmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCBpbmhlcml0KScpO1xuXG4gICAgICAgIC8vIFBvbHlmaWxsICd1cGRhdGVTdHlsZXMnLlxuICAgICAgICBpZiAoIWNvbnRhaW5lci51cGRhdGVTdHlsZXMpIHtcbiAgICAgICAgICBjb250YWluZXIudXBkYXRlU3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KGtleSwgc3R5bGVzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgICB0aGlzLmlucHV0Q2hhbmdlZCh0aGlzLmhhc3MsIHRoaXMuaW5EaWFsb2csIHRoaXMuc3RhdGVPYmopO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycsIHBhZGRpbmc6ICcnIH0pO1xuICAgICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgICB0aGlzLl9jb250YWluZXIsIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgJ2RlZmF1bHQnKTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgYmFkZ2VNb2RlKGhhc3MsIHN0YXRlT2JqLCBkb21haW4pIHtcbiAgICAgIGNvbnN0IHN0YXRlcyA9IFtdO1xuICAgICAgaWYgKGRvbWFpbiA9PT0gJ2dyb3VwJykge1xuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbaWRdO1xuICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBJRCAke2lkfSBpbiBncm91cCAke3N0YXRlT2JqLmVudGl0eV9pZH1gKTtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QgfHxcbiAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5iYWRnZXNfbGlzdC5pbmNsdWRlcyhzdGF0ZS5lbnRpdHlfaWQpKSB7XG4gICAgICAgICAgICBzdGF0ZXMucHVzaCh3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICAgIHRoaXMsIHN0YXRlLCBmYWxzZSAvKiBpbkRpYWxvZyAqLywgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVzLnB1c2goc3RhdGVPYmopO1xuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgICAgdGhpcy5fY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH07XG4gICAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykpIHtcbiAgICAgICAgICAgIHBhcmFtcy5tYXJnaW4gPSAndmFyKC0taGEtYmFkZ2VzLWNhcmQtbWFyZ2luLCAwKSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgICAgdGhpcyxcbiAgICAgICAgJ0hBLUJBREdFUy1DQVJEJyxcbiAgICAgICAgeyBoYXNzLCBzdGF0ZXMgfSk7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoe1xuICAgICAgICAgIHdpZHRoOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtd2lkdGgsIGluaXRpYWwpJyxcbiAgICAgICAgICAndGV4dC1hbGlnbic6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC10ZXh0LWFsaWduLCBpbml0aWFsKScsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5sYXN0Q2hpbGQuc3R5bGUuZm9udFNpemUgPSAnODUlJztcblxuICAgICAgLy8gU2luY2UgdGhpcyB2YXJpYWJsZSBvbmx5IGFmZmVjdHMgYmFkZ2VzIG1vZGUgLSBubyBuZWVkIHRvIGNsZWFuIGl0IHVwLlxuICAgICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oYS1zdGF0ZS1sYWJlbC1iYWRnZS1tYXJnaW4tYm90dG9tJywgJzAnKTtcbiAgICB9XG5cbiAgICBjbGVhbkJhZGdlU3R5bGUoKSB7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoe1xuICAgICAgICAgIGRpc3BsYXk6ICcnLFxuICAgICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgICAndGV4dC1hbGlnbic6ICcnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycgfSk7XG4gICAgfVxuXG4gICAgYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopIHtcbiAgICAgIGxldCB0aGVtZVRhcmdldCA9IHRoaXM7XG4gICAgICBsZXQgdGhlbWVOYW1lID0gJ2RlZmF1bHQnO1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGVtZVRhcmdldCA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICAgIHRoZW1lTmFtZSA9IG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWU7XG4gICAgICB9XG4gICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgdGhlbWVUYXJnZXQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gICAgfVxuXG4gICAgbWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSB7XG4gICAgICBpZiAoIW1vZGlmaWVkT2JqKSB7XG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwJyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IG1hcmdpbjogJycsIHBhZGRpbmc6ICcnIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNsaWRlckVsaWdpYmxlXyhkb21haW4sIG9iaiwgaW5EaWFsb2cpIHtcbiAgICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIERPTUFJTl9UT19TTElERVJfU1VQUE9SVFtkb21haW5dICYmXG4gICAgICAgIChET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmIG9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykgJiZcbiAgICAgICAgb2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlICYmIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAhPT0gJ25vLXNsaWRlcic7XG4gICAgfVxuXG4gICAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgICAgaWYgKCFzdGF0ZU9iaiB8fCAhaGFzcyB8fCAhdGhpcy5faXNBdHRhY2hlZCkgcmV0dXJuO1xuICAgICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgICAgIGNvbnN0IG1vZGlmaWVkT2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICB0aGlzLCBzdGF0ZU9iaiwgaW5EaWFsb2csIHRydWUgLyogYWxsb3dIaWRkZW4gKi8pO1xuXG4gICAgICBpZiAodGhpcy5tYXliZUhpZGVFbnRpdHkobW9kaWZpZWRPYmopKSByZXR1cm47XG5cbiAgICAgIHRoaXMuYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopO1xuXG4gICAgICBpZiAoIWluRGlhbG9nICYmIG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlID09PSAnYmFkZ2VzJykge1xuICAgICAgICB0aGlzLmJhZGdlTW9kZShoYXNzLCBtb2RpZmllZE9iaiwgZG9tYWluKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBtb2RpZmllZE9iaiwgZG9tYWluKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZWd1bGFyTW9kZV8oaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqLCBkb21haW4pIHtcbiAgICAgIHRoaXMuY2xlYW5CYWRnZVN0eWxlKCk7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgaGFzcyxcbiAgICAgICAgc3RhdGVPYmosXG4gICAgICAgIGluRGlhbG9nLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsU3RhdGVDYXJkVHlwZSA9IHN0YXRlQ2FyZFR5cGUoaGFzcywgc3RhdGVPYmopO1xuICAgICAgbGV0IGN1c3RvbVN0YXRlQ2FyZFR5cGU7XG4gICAgICBjb25zdCBzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlID0gc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk7XG5cbiAgICAgIGlmIChkb21haW4gPT09ICdsaWdodCcgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1lbnRpdHktdG9nZ2xlJyxcbiAgICAgICAgICBzZXJ2aWNlTWluOiAndHVybl9vZmYnLFxuICAgICAgICAgIHNlcnZpY2VNYXg6ICd0dXJuX29uJyxcbiAgICAgICAgICB2YWx1ZU5hbWU6ICdicmlnaHRuZXNzJyxcbiAgICAgICAgICBkb21haW4sXG4gICAgICAgIH0pO1xuICAgICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjb3ZlcicgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jb3Zlci1jb250cm9scycsXG4gICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgc2VydmljZU1pbjogJ2Nsb3NlX2NvdmVyJyxcbiAgICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X2NvdmVyX3Bvc2l0aW9uJyxcbiAgICAgICAgICBzZXRWYWx1ZU5hbWU6ICdwb3NpdGlvbicsXG4gICAgICAgICAgdmFsdWVOYW1lOiAnY3VycmVudF9wb3NpdGlvbicsXG4gICAgICAgICAgbmFtZU9uOiAnb3BlbicsXG4gICAgICAgICAgZG9tYWluLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICAgIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY2xpbWF0ZScgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jbGltYXRlLXN0YXRlJyxcbiAgICAgICAgICBtaW46IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWluX3RlbXAgfHwgLTEwMCxcbiAgICAgICAgICBtYXg6IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXAgfHwgMjAwLFxuICAgICAgICAgIHNlcnZpY2VNaW46ICdzZXRfdGVtcGVyYXR1cmUnLFxuICAgICAgICAgIHNlcnZpY2VNYXg6ICdzZXRfdGVtcGVyYXR1cmUnLFxuICAgICAgICAgIHZhbHVlTmFtZTogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgICBuYW1lT246ICcnLFxuICAgICAgICAgIGRvbWFpbixcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgICB9IGVsc2UgaWYgKFRZUEVfVE9fQ09OVFJPTFtvcmlnaW5hbFN0YXRlQ2FyZFR5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV07XG4gICAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcic7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQgJiZcbiAgICAgICAgICAgICAgICAgIVNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTLmluY2x1ZGVzKG9yaWdpbmFsU3RhdGVDYXJkVHlwZSkpIHtcbiAgICAgICAgcGFyYW1zLmluRGlhbG9nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIChzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIHx8IGN1c3RvbVN0YXRlQ2FyZFR5cGUgfHwgYFNUQVRFLUNBUkQtJHtvcmlnaW5hbFN0YXRlQ2FyZFR5cGV9YCkudG9VcHBlckNhc2UoKSxcbiAgICAgICAgcGFyYW1zKTtcbiAgICB9XG4gIH1cbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLWN1c3RvbS11aScsIFN0YXRlQ2FyZEN1c3RvbVVpKTtcbn1cbmlmIChQb2x5bWVyICYmIFBvbHltZXIuRWxlbWVudCAmJiBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50JykpIHtcbiAgbG9hZEN1c3RvbVVJKCk7XG59IGVsc2Uge1xuICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaG9tZS1hc3Npc3RhbnQnKS50aGVuKCgpID0+IGxvYWRDdXN0b21VSSgpKTtcbn1cbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuaW1wb3J0ICcuL2hhLXRoZW1lZC1zbGlkZXIuanMnO1xuXG5mdW5jdGlvbiBsb2FkQ3VzdG9tVUkoKSB7XG4gIC8qKlxuICAgKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICAgKi9cbiAgY2xhc3MgU3RhdGVDYXJkV2l0aFNsaWRlciBleHRlbmRzIEN1aUJhc2VFbGVtZW50KFBvbHltZXIuRWxlbWVudCkge1xuICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgICNjb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuc2Vjb25kLWxpbmUsIC5zdGF0ZS1hbmQtdG9nZ2xlLCAuc3RhdGUtaW5mbyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5ub3dyYXAgLnN0YXRlLWFuZC10b2dnbGUge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5ub3dyYXAgLnNlY29uZC1saW5lIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY29uZC1saW5lIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuc3RyZXRjaCAuc2Vjb25kLWxpbmUsIC5zdHJldGNoIGhhLXRoZW1lZC1zbGlkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC0taGEtcGFwZXItc2xpZGVyLXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5ub3dyYXAgLnN0YXRlLWluZm8ge1xuICAgICAgICAgIG1pbi13aWR0aDogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgICBoYS10aGVtZWQtc2xpZGVyLCAudG9wLXdyYXBwZXIge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50b3Atd3JhcHBlci5zdHJldGNoIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9J2NvbnRhaW5lcicgY2xhc3MkPSdob3Jpem9udGFsIGxheW91dCBmbGV4IHRvcC13cmFwcGVyIFtbX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKV1dJz5cbiAgICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkIGZsZXgtYXV0byBzdGF0ZS1hbmQtdG9nZ2xlJz5cbiAgICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgICBjbGFzcz0nc3RhdGUtaW5mbyBmbGV4LWF1dG8nXG4gICAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0JyBpdGVtcz0nW1tleHRyYV1dJz5cbiAgICAgICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3N0YXRlLWluZm8+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2JyZWFrU2xpZGVyXV0nIGNsYXNzPSdoaWRkZW4nPlxuICAgICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzaG93U2xpZGVyXV0nIHJlc3RhbXA+XG4gICAgICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQgZmxleC1hdXRvIGVuZC1qdXN0aWZpZWQgc2Vjb25kLWxpbmUnPlxuICAgICAgICAgICAgPGhhLXRoZW1lZC1zbGlkZXJcbiAgICAgICAgICAgICAgaWQ9J3NsaWRlcidcbiAgICAgICAgICAgICAgbWF4PVtbbWF4XV1cbiAgICAgICAgICAgICAgbWluPVtbbWluXV1cbiAgICAgICAgICAgICAgdGhlbWU9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5zbGlkZXJfdGhlbWVdXSdcbiAgICAgICAgICAgICAgaXMtb249J1tbaXNPbihzdGF0ZU9iaiwgbmFtZU9uKV1dJ1xuICAgICAgICAgICAgICB2YWx1ZT0ne3tzbGlkZXJWYWx1ZX19J1xuICAgICAgICAgICAgICBkaXNhYmxlLW9mZi13aGVuLW1pbj0ne3tkaXNhYmxlT2ZmV2hlbk1pbn19J1xuICAgICAgICAgICAgICBvbi1jaGFuZ2U9J3NsaWRlckNoYW5nZWQnXG4gICAgICAgICAgICAgIG9uLWNsaWNrPSdzdG9wUHJvcGFnYXRpb24nPlxuICAgICAgICAgICAgPC9oYS10aGVtZWQtc2xpZGVyPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbWyFicmVha1NsaWRlcl1dJz5cbiAgICAgICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRvbWFpbjogU3RyaW5nLFxuICAgICAgICBzZXJ2aWNlTWluOiBTdHJpbmcsXG4gICAgICAgIHNlcnZpY2VNYXg6IFN0cmluZyxcbiAgICAgICAgdmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICAgIHNldFZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgICBuYW1lT246IHsgdHlwZTogU3RyaW5nLCB2YWx1ZTogJ29uJyB9LFxuICAgICAgICBtaW46IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMCB9LFxuICAgICAgICBtYXg6IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMjU1IH0sXG5cbiAgICAgICAgc2xpZGVyVmFsdWU6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVPZmZXaGVuTWluOiBCb29sZWFuLFxuICAgICAgICBtb2RlOiBTdHJpbmcsXG4gICAgICAgIHN0cmV0Y2hTbGlkZXI6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZVNsaWRlcjoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lVG9vTG9uZzoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtaW5MaW5lQnJlYWs6IE51bWJlcixcbiAgICAgICAgbWF4TGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICAgIHNob3dTbGlkZXI6IHtcbiAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgY29tcHV0ZWQ6ICdfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpJyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmVhZHkoKSB7XG4gICAgICBzdXBlci5yZWFkeSgpO1xuICAgICAgdGhpcy5fb25Jcm9uUmVzaXplID0gdGhpcy5fb25Jcm9uUmVzaXplLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy5faXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgJ3N0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpJyxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgX3dhaXRGb3JMYXlvdXQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQ29ubmVjdGVkKSByZXR1cm47XG4gICAgICB0aGlzLl9zZXRNb2RlKCk7XG4gICAgICBpZiAodGhpcy5fZnJhbWVJZCkgcmV0dXJuO1xuICAgICAgdGhpcy5yZWFkeVRvQ29tcHV0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9mcmFtZUlkID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWFkeVRvQ29tcHV0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uSXJvblJlc2l6ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NldE1vZGUoKSB7XG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGhpZGVTbGlkZXI6IHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJyAmJiB0aGlzLmxpbmVUb29Mb25nLFxuICAgICAgICBicmVha1NsaWRlcjpcbiAgICAgICAgICAgICAodGhpcy5tb2RlID09PSAnYnJlYWstc2xpZGVyJyB8fCB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpICYmXG4gICAgICAgICAgICAgdGhpcy5saW5lVG9vTG9uZyxcbiAgICAgIH07XG4gICAgICBpZiAoIXRoaXMuc2hvd1NsaWRlcikge1xuICAgICAgICBvYmouYnJlYWtTbGlkZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gICAgfVxuXG4gICAgX29uSXJvblJlc2l6ZSgpIHtcbiAgICAgIGlmICghdGhpcy5yZWFkeVRvQ29tcHV0ZSkgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ25vLXNsaWRlcicpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICBoaWRlU2xpZGVyOiB0cnVlLFxuICAgICAgICAgIGJyZWFrU2xpZGVyOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJldkJyZWFrU2xpZGVyID0gdGhpcy5icmVha1NsaWRlcjtcbiAgICAgIGNvbnN0IHByZXZIaWRlU2xpZGVyID0gdGhpcy5oaWRlU2xpZGVyO1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy4kO1xuICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICBpZiAoY29udGFpbmVyV2lkdGggPT09IDApIHJldHVybjtcbiAgICAgIGlmIChjb250YWluZXJXaWR0aCA8PSB0aGlzLm1pbkxpbmVCcmVhaykge1xuICAgICAgICB0aGlzLmxpbmVUb29Mb25nID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyV2lkdGggPj0gdGhpcy5tYXhMaW5lQnJlYWspIHtcbiAgICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByZXZIaWRlU2xpZGVyICYmIHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykge1xuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gdW5oaWRlIHRoZSBzbGlkZXIgaW4gb3JkZXIgdG8gcmVjYWxjdWxhdGUgaGVpZ2h0LlxuICAgICAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc3Qgc3RhdGVIZWlnaHQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnN0YXRlLWluZm8nKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBjb250YWluZXJIZWlnaHQgPiBzdGF0ZUhlaWdodCAqIDEuNTtcbiAgICAgICAgaWYgKHRoaXMubGluZVRvb0xvbmcpIHtcbiAgICAgICAgICB0aGlzLm1pbkxpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKCFwcmV2QnJlYWtTbGlkZXIpIHtcbiAgICAgICAgICB0aGlzLm1heExpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9zZXRNb2RlKCk7XG4gICAgfVxuXG4gICAgX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKSB7XG4gICAgICBpZiAoaW5EaWFsb2cpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgaWYgKG1vZGUgPT09ICdzaW5nbGUtbGluZScpIHtcbiAgICAgICAgcmV0dXJuICdub3dyYXAnO1xuICAgICAgfVxuICAgICAgaWYgKHN0cmV0Y2hTbGlkZXIgJiYgbGluZVRvb0xvbmcpIHtcbiAgICAgICAgcmV0dXJuICdzdHJldGNoIHdyYXAnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICd3cmFwJztcbiAgICB9XG5cbiAgICBfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpIHtcbiAgICAgIGlmIChpbkRpYWxvZyB8fCBoaWRlU2xpZGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICBjb25zdCBwYXJhbSA9IHsgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9O1xuICAgICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybjtcbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI3NsaWRlcicpO1xuICAgICAgaWYgKGV2LnRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIC8vIE5vIFNoYWRvdyBET00gLSB3ZSBoYXZlIGFjY2VzcyB0byBvcmlnaW5hbCB0YXJnZXQuXG4gICAgICAgICh7IHRhcmdldCB9ID0gZXYpO1xuICAgICAgfSBlbHNlIGlmIChldi5wYXRoKSB7XG4gICAgICAgIFt0YXJnZXRdID0gZXYucGF0aDtcbiAgICAgIH0gZWxzZSBpZiAoZXYuY29tcG9zZWRQYXRoKSB7XG4gICAgICAgIFt0YXJnZXRdID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPT09IDAgfHwgKHZhbHVlIDw9IHRhcmdldC5taW4gJiYgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pKSB7XG4gICAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWluLCBwYXJhbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbVt0aGlzLnNldFZhbHVlTmFtZSB8fCB0aGlzLnZhbHVlTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNYXgsIHBhcmFtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKSB7XG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIHNsaWRlclZhbHVlOiB0aGlzLmlzT24oc3RhdGVPYmosIG5hbWVPbikgPyBzdGF0ZU9iai5hdHRyaWJ1dGVzW3ZhbHVlTmFtZV0gOiAwLFxuICAgICAgfTtcbiAgICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwge1xuICAgICAgICAgIG1pbkxpbmVCcmVhazogMCxcbiAgICAgICAgICBtYXhMaW5lQnJlYWs6IDk5OSxcbiAgICAgICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgICAgIG1vZGU6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlLFxuICAgICAgICAgIHN0cmV0Y2hTbGlkZXI6ICEhc3RhdGVPYmouYXR0cmlidXRlcy5zdHJldGNoX3NsaWRlcixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmogJiYgKCFuYW1lT24gfHwgc3RhdGVPYmouc3RhdGUgPT09IG5hbWVPbik7XG4gICAgfVxuXG4gICAgc3RvcFByb3BhZ2F0aW9uKGV2KSB7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJywgU3RhdGVDYXJkV2l0aFNsaWRlcik7XG59XG5pZiAoUG9seW1lciAmJiBQb2x5bWVyLkVsZW1lbnQgJiYgY3VzdG9tRWxlbWVudHMuZ2V0KCdob21lLWFzc2lzdGFudCcpKSB7XG4gIGxvYWRDdXN0b21VSSgpO1xufSBlbHNlIHtcbiAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hvbWUtYXNzaXN0YW50JykudGhlbigoKSA9PiBsb2FkQ3VzdG9tVUkoKSk7XG59XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcblxuZnVuY3Rpb24gbG9hZEN1c3RvbVVJKCkge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudChQb2x5bWVyLkVsZW1lbnQpIHtcbiAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9J2NvbnRhaW5lcicgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGp1c3RpZmllZCc+XG4gICAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvJ1xuICAgICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgICA8ZHluYW1pYy13aXRoLWV4dHJhXG4gICAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgICAgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nXG4gICAgICAgICAgICBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+XG4gICAgICAgIDwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cbiAgfVxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInLCBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyKTtcbn1cbmlmIChQb2x5bWVyICYmIFBvbHltZXIuRWxlbWVudCAmJiBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50JykpIHtcbiAgbG9hZEN1c3RvbVVJKCk7XG59IGVsc2Uge1xuICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaG9tZS1hc3Npc3RhbnQnKS50aGVuKCgpID0+IGxvYWRDdXN0b21VSSgpKTtcbn1cbiIsImltcG9ydCBoYXNzQXR0cmlidXRlc1V0aWwgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbC5qcyc7XG5cbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCA9IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCB8fCB7fTtcbmNvbnN0IFNVUFBPUlRFRF9TTElERVJfTU9ERVMgPSBbXG4gICdzaW5nbGUtbGluZScsICdicmVhay1zbGlkZXInLCAnYnJlYWstc2xpZGVyLXRvZ2dsZScsICdoaWRlLXNsaWRlcicsICduby1zbGlkZXInLFxuXTtcblxuY29uc3QgY3VzdG9tVWlBdHRyaWJ1dGVzID0ge1xuICBncm91cDogdW5kZWZpbmVkLFxuICBkZXZpY2U6IHVuZGVmaW5lZCxcbiAgdGVtcGxhdGVzOiB1bmRlZmluZWQsXG4gIHN0YXRlOiB1bmRlZmluZWQsXG4gIF9zdGF0ZURpc3BsYXk6IHVuZGVmaW5lZCxcbiAgY29udHJvbF9lbGVtZW50OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIHN0YXRlX2NhcmRfbW9kZToge1xuICAgIHR5cGU6ICdhcnJheScsXG4gICAgb3B0aW9uczoge1xuICAgICAgbGlnaHQ6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNvdmVyOiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICBjbGltYXRlOiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICAnKic6IFsnYmFkZ2VzJ10sXG4gICAgfSxcbiAgfSxcbiAgc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGJhZGdlc19saXN0OiB7IHR5cGU6ICdqc29uJyB9LFxuICBzaG93X2xhc3RfY2hhbmdlZDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaGlkZV9jb250cm9sOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBleHRyYV9kYXRhX3RlbXBsYXRlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGV4dHJhX2JhZGdlOiB7IHR5cGU6ICdqc29uJyB9LFxuICBzdHJldGNoX3NsaWRlcjogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgc2xpZGVyX3RoZW1lOiB7IHR5cGU6ICdqc29uJyB9LFxuICB0aGVtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBjb25maXJtX2NvbnRyb2xzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jazogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaGlkZV9pbl9kZWZhdWx0X3ZpZXc6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGljb25fY29sb3I6IHsgdHlwZTogJ3N0cmluZycgfSxcbn07XG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9IGhhc3NBdHRyaWJ1dGVzVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTO1xud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9IGhhc3NBdHRyaWJ1dGVzVXRpbC5VTktOT1dOX1RZUEU7XG5PYmplY3QuYXNzaWduKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBjdXN0b21VaUF0dHJpYnV0ZXMpO1xuIiwiaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQudHMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzJztcbmltcG9ydCBnZXRWaWV3RW50aXRpZXMgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy50cyc7XG5cbmltcG9ydCAnLi4vZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyc7XG5pbXBvcnQgVkVSU0lPTiBmcm9tICcuL3ZlcnNpb24uanMnO1xuaW1wb3J0ICcuL2hhc3MtYXR0cmlidXRlLXV0aWwuanMnO1xuXG53aW5kb3cuY3VzdG9tVUkgPSB3aW5kb3cuY3VzdG9tVUkgfHwge1xuICBTVVBQT1JURURfU0xJREVSX01PREVTOiBbXG4gICAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG4gIF0sXG5cbiAgZG9tSG9zdChlbGVtKSB7XG4gICAgaWYgKGVsZW0gPT09IGRvY3VtZW50KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCByb290ID0gZWxlbS5nZXRSb290Tm9kZSgpO1xuICAgIHJldHVybiAocm9vdCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gLyoqIEB0eXBlIHtTaGFkb3dSb290fSAqLyAocm9vdCkuaG9zdCA6IHJvb3Q7XG4gIH0sXG5cbiAgbGlnaHRPclNoYWRvdyhlbGVtLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBlbGVtLnNoYWRvd1Jvb3QgP1xuICAgICAgZWxlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDpcbiAgICAgIGVsZW0ucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0sXG5cbiAgZ2V0RWxlbWVudEhpZXJhcmNoeShyb290LCBoaWVyYXJjaHkpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZWxlbSA9IGhpZXJhcmNoeS5zaGlmdCgpO1xuICAgIGlmIChlbGVtKSB7XG4gICAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoXG4gICAgICAgIHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KHJvb3QsIGVsZW0pLCBoaWVyYXJjaHkpO1xuICAgIH1cbiAgICByZXR1cm4gcm9vdDtcbiAgfSxcblxuICBnZXRDb250ZXh0KGVsZW0pIHtcbiAgICBpZiAoZWxlbS5fY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtLl9jb250ZXh0ID0gW107XG4gICAgICBmb3IgKGxldCBlbGVtZW50ID0gKGVsZW0udGFnTmFtZSA9PT0gJ0hBLUVOVElUSUVTLUNBUkQnID8gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbSkgOiBlbGVtKTtcbiAgICAgICAgZWxlbWVudDsgZWxlbWVudCA9IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW1lbnQpKSB7XG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICAgICAgY2FzZSAnSEEtRU5USVRJRVMtQ0FSRCc6XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ncm91cEVudGl0eSkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5ncm91cEVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5ID09PSBmYWxzZSAmJiBlbGVtZW50LnN0YXRlcyAmJiBlbGVtZW50LnN0YXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGBncm91cC4ke2NvbXB1dGVTdGF0ZURvbWFpbihlbGVtZW50LnN0YXRlc1swXSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdNT1JFLUlORk8tR1JPVVAnOlxuICAgICAgICAgIGNhc2UgJ1NUQVRFLUNBUkQtQ09OVEVOVCc6XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0ZU9iaikge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5zdGF0ZU9iai5lbnRpdHlfaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnSEEtQ0FSRFMnOlxuICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSB8fCAnZGVmYXVsdF92aWV3Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBubyBkZWZhdWx0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW0uX2NvbnRleHQucmV2ZXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbS5fY29udGV4dDtcbiAgfSxcblxuICBmaW5kTWF0Y2goa2V5LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSByZXR1cm4gbnVsbDtcbiAgICBpZiAob3B0aW9uc1trZXldKSByZXR1cm4ga2V5O1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5maW5kKG9wdGlvbiA9PiBrZXkubWF0Y2goYF4ke29wdGlvbn0kYCkpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2Uoc3RhdGVPYmopIHtcbiAgICBjb25zdCBuYW1lID0gd2luZG93LmN1c3RvbVVJLmdldE5hbWUoKTtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKG5hbWUsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlW21hdGNoXSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAoZWxlbSwgc3RhdGVPYmopIHtcbiAgICBjb25zdCBjb250ZXh0ID0gd2luZG93LmN1c3RvbVVJLmdldENvbnRleHQoZWxlbSk7XG4gICAgaWYgKCFjb250ZXh0KSByZXR1cm4gc3RhdGVPYmo7XG5cbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuICAgIGNvbnRleHQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChjLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGF0dHJpYnV0ZXMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG5cbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgX3NldEtlZXAob2JqLCB2YWx1ZSkge1xuICAgIGlmIChvYmouX2N1aV9rZWVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IG9iai5fY3VpX2tlZXAgJiYgdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIGlmICghYXR0cmlidXRlcy50ZW1wbGF0ZXMpIHtcbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgdHJ1ZSk7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IG5ld0F0dHJpYnV0ZXMgPSB7fTtcbiAgICBsZXQgaGFzR2xvYmFsID0gZmFsc2U7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzLnRlbXBsYXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGF0dHJpYnV0ZXMudGVtcGxhdGVzW2tleV07XG4gICAgICBpZiAodGVtcGxhdGUubWF0Y2goL1xcYihlbnRpdGllc3xoYXNzKVxcYi8pKSB7XG4gICAgICAgIGhhc0dsb2JhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IHdpbmRvdy5jdXN0b21VSS5jb21wdXRlVGVtcGxhdGUoXG4gICAgICAgIHRlbXBsYXRlLCBoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzLFxuICAgICAgICAoc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlcyAmJiBzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzW2tleV0pIHx8XG4gICAgICAgICAgICBhdHRyaWJ1dGVzW2tleV0sXG4gICAgICAgIHN0YXRlT2JqLnVudGVtcGxhdGVkX3N0YXRlIHx8IHN0YXRlT2JqLnN0YXRlKTtcbiAgICAgIC8vIEluIGNhc2Ugb2YgbnVsbCBkb24ndCBzZXQgdGhlIHZhbHVlLlxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XG4gICAgICBuZXdBdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIGlmIChrZXkgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5zdGF0ZSkge1xuICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ19zdGF0ZURpc3BsYXknKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouX3N0YXRlRGlzcGxheSkge1xuICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBhdHRyaWJ1dGVzW2tleV0pIHtcbiAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCAhaGFzR2xvYmFsKTtcbiAgICBpZiAoIWhhc0NoYW5nZXMpIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMgPT09IGF0dHJpYnV0ZXMpIHtcbiAgICAgIC8vIFdlIGFyZSBvcGVyYXRpbmcgb24gcmVhbCBhdHRyaWJ1dGVzLiBSZXBsYWNlIHRoZW0uXG4gICAgICBjb25zdCByZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBuZXdBdHRyaWJ1dGVzKTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3QXR0cmlidXRlcywgJ3N0YXRlJykpIHtcbiAgICAgICAgaWYgKG5ld0F0dHJpYnV0ZXMuc3RhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQuc3RhdGUgPSBTdHJpbmcobmV3QXR0cmlidXRlcy5zdGF0ZSk7XG4gICAgICAgICAgcmVzdWx0LnVudGVtcGxhdGVkX3N0YXRlID0gc3RhdGVPYmouc3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3QXR0cmlidXRlcywgJ19zdGF0ZURpc3BsYXknKSkge1xuICAgICAgICByZXN1bHQuX3N0YXRlRGlzcGxheSA9IG5ld0F0dHJpYnV0ZXMuX3N0YXRlRGlzcGxheTtcbiAgICAgICAgcmVzdWx0LnVudGVtcGxhdGVkX3N0YXRlRGlzcGxheSA9IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAocmVzdWx0LCAhaGFzR2xvYmFsKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vIE9wZXJhdGluZyBvbiBjb250ZXh0LWF3YXJlIGF0dHJpYnV0ZXMuIFJldHVybiBzaGFsbG93IGNvcHkgb2Ygb2JqZWN0LlxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iaik7XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmV3UmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBzdGF0ZU9iai5hdHRyaWJ1dGVzKTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrQXR0cmlidXRlcyhvYmopIHtcbiAgICAgIGlmICghb2JqKSByZXR1cm47XG4gICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCgoYXR0cmlidXRlcykgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgICAgICBoYXNzLCBzdGF0ZXMsIG5ld1Jlc3VsdCwgYXR0cmlidXRlcyk7XG4gICAgICAgIGhhc0NoYW5nZXMgfD0gKHJlc3VsdCAhPT0gbmV3UmVzdWx0KTtcbiAgICAgIH0pO1xuICAgICAgY2hlY2tBdHRyaWJ1dGVzKG9iai5kZXZpY2UpO1xuICAgICAgY2hlY2tBdHRyaWJ1dGVzKG9iai5ncm91cCk7XG4gICAgfVxuXG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlKTtcbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgaWYgKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopIHJldHVybiBuZXdSZXN1bHQ7XG4gICAgaWYgKGhhc0NoYW5nZXMpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iaik7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZU9iajtcbiAgfSxcblxuICBhcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXR5X2lkOiBzdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBzdGF0ZTogc3RhdGVPYmouc3RhdGUsXG4gICAgICBhdHRyaWJ1dGVzOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKSxcbiAgICAgIHVudGVtcGxhdGVkX2F0dHJpYnV0ZXM6IHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlT2JqLmxhc3RfY2hhbmdlZCxcbiAgICB9O1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0KGVsZW0sIHN0YXRlT2JqLCBpbkRpYWxvZywgYWxsb3dIaWRkZW4pIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBzdGF0ZU9iajtcbiAgICBsZXQgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2Uoc3RhdGVPYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAoZWxlbSwgb2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGVsZW0uaGFzcywgZWxlbS5oYXNzLnN0YXRlcywgb2JqLCBvYmouYXR0cmlidXRlcyk7XG5cbiAgICBpZiAob2JqICE9PSBzdGF0ZU9iaiAmJiBvYmouYXR0cmlidXRlcy5oaWRkZW4gJiYgYWxsb3dIaWRkZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZpeEdyb3VwVGl0bGVzKCkge1xuICAgIGNvbnN0IGhvbWVBc3Npc3RhbnRNYWluID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbiddKTtcbiAgICBpZiAoaG9tZUFzc2lzdGFudE1haW4gPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuZml4R3JvdXBUaXRsZXMsIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShob21lQXNzaXN0YW50TWFpbiwgW1xuICAgICAgJ3BhcnRpYWwtY2FyZHMnLFxuICAgICAgJ2hhLWNhcmRzW3ZpZXctdmlzaWJsZV0nXSk7XG4gICAgaWYgKGhhQ2FyZHMgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coaGFDYXJkcywgJy5tYWluJykgfHwgaGFDYXJkcy4kLm1haW47XG4gICAgY29uc3QgY2FyZHMgPSBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJ2hhLWVudGl0aWVzLWNhcmQnKTtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBpZiAoY2FyZC5ncm91cEVudGl0eSkge1xuICAgICAgICBjb25zdCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgY2FyZCxcbiAgICAgICAgICBjYXJkLmdyb3VwRW50aXR5LFxuICAgICAgICAgIGZhbHNlIC8qIGluRGlhbG9nICovLFxuICAgICAgICAgIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKTtcbiAgICAgICAgaWYgKG9iaiAhPT0gY2FyZC5ncm91cEVudGl0eSAmJiBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lKSB7XG4gICAgICAgICAgY29uc3QgbmFtZUVsZW0gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhjYXJkLCAnLm5hbWUnKTtcbiAgICAgICAgICBuYW1lRWxlbS50ZXh0Q29udGVudCA9IG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBjb250cm9sQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgY29uc3QgcGFydGlhbENhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbicsXG4gICAgICAncGFydGlhbC1jYXJkcyddKTtcbiAgICBpZiAocGFydGlhbENhcmRzID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgIHdpbmRvdy5jdXN0b21VSS5jb250cm9sQ29sdW1ucy5iaW5kKG51bGwsIGNvbHVtbnMpLFxuICAgICAgICAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRnVuY3Rpb24gcmVuYW1lZCBmcm9tIGhhbmRsZVdpbmRvd0NoYW5nZSB0byBfdXBkYXRlQ29sdW1ucyBvbiAzLjcuMThcbiAgICBjb25zdCBmID0gcGFydGlhbENhcmRzLmhhbmRsZVdpbmRvd0NoYW5nZSB8fCBwYXJ0aWFsQ2FyZHMuX3VwZGF0ZUNvbHVtbnM7XG4gICAgcGFydGlhbENhcmRzLm1xbHMuZm9yRWFjaCgobXFsKSA9PiB7XG4gICAgICBtcWwucmVtb3ZlTGlzdGVuZXIoZik7XG4gICAgfSk7XG4gICAgcGFydGlhbENhcmRzLm1xbHMgPSBjb2x1bW5zLm1hcCgod2lkdGgpID0+IHtcbiAgICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke3dpZHRofXB4KWApO1xuICAgICAgbXFsLmFkZExpc3RlbmVyKGYpO1xuICAgICAgcmV0dXJuIG1xbDtcbiAgICB9KTtcbiAgICBmKCk7XG4gIH0sXG5cbiAgdXNlQ3VzdG9taXplcigpIHtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGNvbnN0IGN1c3RvbWl6ZXIgPSBtYWluLmhhc3Muc3RhdGVzWydjdXN0b21pemVyLmN1c3RvbWl6ZXInXTtcbiAgICBpZiAoIWN1c3RvbWl6ZXIpIHJldHVybjtcbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpIHtcbiAgICAgIHdpbmRvdy5jdXN0b21VSS5jb250cm9sQ29sdW1ucyhjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucyk7XG4gICAgfVxuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuaGlkZV9hdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsICYmIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKSB7XG4gICAgICAgIGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGF0dHIpKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1thdHRyXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGVDb25maWdQYW5lbCgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjb25zdCBoYVBhbmVsQ29uZmlnID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbicsXG4gICAgICAncGFydGlhbC1wYW5lbC1yZXNvbHZlcicsXG4gICAgICAnaGEtcGFuZWwtY29uZmlnJ10pO1xuICAgIGlmICghaGFQYW5lbENvbmZpZykge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxMDBtcy5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS51cGRhdGVDb25maWdQYW5lbCwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFDb25maWdOYXZpZ2F0aW9uID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaGFQYW5lbENvbmZpZywgW1xuICAgICAgJ2hhLWNvbmZpZy1kYXNoYm9hcmQnLFxuICAgICAgJ2hhLWNvbmZpZy1uYXZpZ2F0aW9uJ10pO1xuICAgIGlmIChoYUNvbmZpZ05hdmlnYXRpb24pIHtcbiAgICAgIC8vIEhhQ29uZmlnTmF2aWdhdGlvbiBzdGFydGVkIHVzaW5nIGxvY2FsaXplIG9uIDIxLjAxLjIwMThcbiAgICAgIGlmIChoYUNvbmZpZ05hdmlnYXRpb24ubG9jYWxpemUgJiYgIWhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCkge1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2ggPSB0cnVlO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZCA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZDtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQgPSAoaGFzcywgcGFnZSkgPT5cbiAgICAgICAgICBwYWdlID09PSAnY3VzdG9tdWknIHx8IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkKGhhc3MsIHBhZ2UpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ0N1c3RvbSBVSScgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24ocGFnZSwgbG9jYWxpemUpKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnU2V0VUkgdHdlYWtzJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24ocGFnZSwgbG9jYWxpemUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFDb25maWdOYXZpZ2F0aW9uLnBhZ2VzLnNvbWUoY29uZiA9PiBjb25mID09PSAnY3VzdG9tdWknIHx8IGNvbmYuZG9tYWluID09PSAnY3VzdG9tdWknKSkge1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24ucHVzaCgncGFnZXMnLCBoYUNvbmZpZ05hdmlnYXRpb24ubG9jYWxpemUgPyAnY3VzdG9tdWknIDoge1xuICAgICAgICAgIGRvbWFpbjogJ2N1c3RvbXVpJyxcbiAgICAgICAgICBjYXB0aW9uOiAnQ3VzdG9tIFVJJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldCBVSSB0d2Vha3MuJyxcbiAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRIYUNvbmZpZ0N1c3RvbVVpID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hhLWNvbmZpZy1jdXN0b20tdWknKTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuaXNXaWRlID0gaGFQYW5lbENvbmZpZy5pc1dpZGU7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLnNldEF0dHJpYnV0ZSgncGFnZS1uYW1lJywgJ2N1c3RvbXVpJyk7XG4gICAgICByZXR1cm4gaGFDb25maWdDdXN0b21VaTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXJvblBhZ2VzID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coaGFQYW5lbENvbmZpZywgJ2lyb24tcGFnZXMnKTtcbiAgICBpZiAoaXJvblBhZ2VzKSB7XG4gICAgICBpZiAoaXJvblBhZ2VzLmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIGlyb25QYWdlcy5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgICAgaXJvblBhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24taXRlbXMtY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKSkge1xuICAgICAgICAgICAgaXJvblBhZ2VzLnNlbGVjdCgnY3VzdG9tdWknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaGFQYW5lbENvbmZpZy5zaGFkb3dSb290KSB7XG4gICAgICBjb25zdCByb290ID0gaGFQYW5lbENvbmZpZy5zaGFkb3dSb290IHx8IGhhUGFuZWxDb25maWc7XG4gICAgICBpZiAocm9vdC5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgfVxuICAgICAgY29uc3QgdmlzaWJsZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJyk7XG4gICAgICByb290Lmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IHZpc2libGUgPyAnJyA6ICdub25lJztcbiAgICB9IGVsc2UgaWYgKGhhUGFuZWxDb25maWcucm91dGVyT3B0aW9ucyAmJiBoYVBhbmVsQ29uZmlnLnJvdXRlck9wdGlvbnMucm91dGVzKSB7XG4gICAgICBpZiAoIWhhUGFuZWxDb25maWcucm91dGVyT3B0aW9ucy5yb3V0ZXMuY3VzdG9tdWkpIHtcbiAgICAgICAgaGFQYW5lbENvbmZpZy5yb3V0ZXJPcHRpb25zLnJvdXRlcy5jdXN0b211aSA9IHtcbiAgICAgICAgICB0YWc6ICdoYS1jb25maWctY3VzdG9tLXVpJyxcbiAgICAgICAgICBsb2FkOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoKSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ3VzdG9tVUkgcGFuZWwgaXMgdGhlIGVudHJ5cG9pbnQsIHNvIHdlIG5lZWQgdG8gcmVsb2FkIHRoZSBwYWdlLlxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKSkge1xuICAgICAgICAgIGhhUGFuZWxDb25maWcudXBkYXRlKG5ldyBNYXAoW1sncm91dGUnLCB1bmRlZmluZWRdXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGluc3RhbGxTdGF0ZXNIb29rKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdob21lLWFzc2lzdGFudCcpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaG9tZUFzc2lzdGFudCA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICAgIGlmICghaG9tZUFzc2lzdGFudCB8fCAhaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MpIHJldHVybjtcbiAgICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlID0gaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3M7XG4gICAgICBob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcyA9IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgY29uc3QgeyBoYXNzIH0gPSB0aGlzO1xuICAgICAgICBpZiAob2JqLnN0YXRlcykge1xuICAgICAgICAgIE9iamVjdC5rZXlzKG9iai5zdGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW50aXR5ID0gb2JqLnN0YXRlc1trZXldO1xuICAgICAgICAgICAgaWYgKGVudGl0eS5fY3VpX2tlZXApIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IG5ld0VudGl0eSA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIG9iai5zdGF0ZXMsIGVudGl0eSk7XG4gICAgICAgICAgICBpZiAoaGFzcy5zdGF0ZXMgJiYgZW50aXR5ICE9PSBoYXNzLnN0YXRlc1trZXldKSB7XG4gICAgICAgICAgICAgIC8vIE5ldyBzdGF0ZSBhcnJpdmVkLiBQdXQgbW9kaWZpZWQgc3RhdGUgaW4uXG4gICAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50aXR5ICE9PSBuZXdFbnRpdHkpIHtcbiAgICAgICAgICAgICAgLy8gSXQncyB0aGUgc2FtZSBzdGF0ZSBidXQgY29udGVudHMgY2hhbmdlZCBkdWUgdG8gb3RoZXIgc3RhdGUgY2hhbmdlcy5cbiAgICAgICAgICAgICAgb2JqLnN0YXRlc1trZXldID0gbmV3RW50aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG9yaWdpbmFsVXBkYXRlLmNhbGwodGhpcywgb2JqKTtcbiAgICAgICAgaWYgKG9iai50aGVtZXMgJiYgaGFzcy5fdGhlbWVXYWl0ZXJzKSB7XG4gICAgICAgICAgaGFzcy5fdGhlbWVXYWl0ZXJzLmZvckVhY2god2FpdGVyID0+IHdhaXRlci5zdGF0ZUNoYW5nZWQod2FpdGVyLnN0YXRlKSk7XG4gICAgICAgICAgaGFzcy5fdGhlbWVXYWl0ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICAgIGlmIChtYWluLmhhc3MgJiYgbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgICBtYWluLl91cGRhdGVIYXNzKHsgc3RhdGVzOiBtYWluLmhhc3Muc3RhdGVzIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxQYXJ0aWFsQ2FyZHMoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ3BhcnRpYWwtY2FyZHMnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IGN1c3RvbUVsZW1lbnRzLmdldCgncGFydGlhbC1jYXJkcycpO1xuICAgICAgaWYgKCFwYXJ0aWFsQ2FyZHMgfHwgIXBhcnRpYWxDYXJkcy5wcm90b3R5cGUuX2RlZmF1bHRWaWV3RmlsdGVyKSByZXR1cm47XG4gICAgICBwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlciA9IChoYXNzLCBlbnRpdHlJZCkgPT4ge1xuICAgICAgICBpZiAoaGFzcy5zdGF0ZXNbZW50aXR5SWRdLmF0dHJpYnV0ZXMuaGlkZGVuKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVzID0ge307XG4gICAgICAgIE9iamVjdC52YWx1ZXMoaGFzcy5zdGF0ZXMpLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcyAmJiBlbnRpdHkuYXR0cmlidXRlcy5oaWRlX2luX2RlZmF1bHRfdmlldykge1xuICAgICAgICAgICAgY29uc3QgZXhjbHVkZUVudGl0eUlkID0gZW50aXR5LmVudGl0eV9pZDtcbiAgICAgICAgICAgIGlmIChleGNsdWRlc1tleGNsdWRlRW50aXR5SWRdKSByZXR1cm47XG4gICAgICAgICAgICBleGNsdWRlc1tleGNsdWRlRW50aXR5SWRdID0gZW50aXR5O1xuICAgICAgICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLnZpZXcpIHtcbiAgICAgICAgICAgICAgY29uc3Qgdmlld0VudGl0aWVzID0gZ2V0Vmlld0VudGl0aWVzKGhhc3Muc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2aWV3RW50aXRpZXMpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIGlkID0+IHZpZXdFbnRpdGllc1tpZF0uYXR0cmlidXRlcy5oaWRlX2luX2RlZmF1bHRfdmlldyAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICBleGNsdWRlc1tpZF0gPSB2aWV3RW50aXRpZXNbaWRdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhZXhjbHVkZXNbZW50aXR5SWRdO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgY2hhbmdpbmcgdGhlICdFeGVjdXRlJyAvICdBY3RpdmF0ZScgdGV4dCBvbiBzY3JpcHQvc2NlbmUgY2FyZHMuXG4gIGluc3RhbGxBY3Rpb25OYW1lKGVsZW1lbnROYW1lKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoZWxlbWVudE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qga2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoZWxlbWVudE5hbWUpO1xuICAgICAgaWYgKCFrbGFzcyB8fCAha2xhc3MucHJvdG90eXBlKSByZXR1cm47XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoa2xhc3MucHJvdG90eXBlLCAnbG9jYWxpemUnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICBmdW5jdGlvbiBjdXN0b21Mb2NhbGl6ZSh2KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZU9iaiAmJiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hY3Rpb25fbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZGF0YS5sb2NhbGl6ZSh2KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGN1c3RvbUxvY2FsaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQoKSB7fSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIEFsbG93cyB0aGVtaW5nIFwicmVndWxhclwiIHRvcCBiYWRnZXMuXG4gIGluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSgpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhhU3RhdGVMYWJlbEJhZGdlID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpO1xuICAgICAgaWYgKCFoYVN0YXRlTGFiZWxCYWRnZSB8fCAhaGFTdGF0ZUxhYmVsQmFkZ2UucHJvdG90eXBlLnN0YXRlQ2hhbmdlZCkgcmV0dXJuO1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIGhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQgPSBmdW5jdGlvbiB1cGRhdGUoc3RhdGVPYmopIHtcbiAgICAgICAgLy8gVE9ETzogQ2FsbCB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RcbiAgICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5oYXNzLnRoZW1lcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgPSB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycyB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzLnB1c2godGhpcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICB0aGlzLmhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sXG4gICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUgfHwgJ2RlZmF1bHQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRJbnRlcnZhbCkge1xuICAgICAgICAgIC8vIEFkZGVkIG9uIDE5LjEuMjAxOFxuICAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbChzdGF0ZU9iaik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbFN0YXRlQmFkZ2UoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ3N0YXRlLWJhZGdlJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZUJhZGdlID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1iYWRnZScpO1xuICAgICAgaWYgKCFzdGF0ZUJhZGdlKSByZXR1cm47XG4gICAgICBpZiAoc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBzdGF0ZUJhZGdlLnByb3RvdHlwZS5fdXBkYXRlSWNvbkFwcGVhcmFuY2U7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIHN0YXRlQmFkZ2UucHJvdG90eXBlLl91cGRhdGVJY29uQXBwZWFyYW5jZSA9IGZ1bmN0aW9uIGN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlKHN0YXRlT2JqKSB7XG4gICAgICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaWNvbl9jb2xvciAmJiAhc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kLmljb24uc3R5bGUsIHtcbiAgICAgICAgICAgICAgY29sb3I6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuaWNvbl9jb2xvcixcbiAgICAgICAgICAgICAgZmlsdGVyOiAnJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlLmNhbGwodGhpcywgc3RhdGVPYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlZCkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZWQgPSBzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVkO1xuICAgICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgICBzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVkID0gZnVuY3Rpb24gY3VzdG9tVXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICAgICAgICBpZiAoIWNoYW5nZWRQcm9wcy5oYXMoJ3N0YXRlT2JqJykpIHJldHVybjtcbiAgICAgICAgICBjb25zdCB7IHN0YXRlT2JqIH0gPSB0aGlzO1xuICAgICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX2ljb24uc3R5bGUsIHtcbiAgICAgICAgICAgICAgY29sb3I6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuaWNvbl9jb2xvcixcbiAgICAgICAgICAgICAgZmlsdGVyOiAnJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcmlnaW5hbFVwZGF0ZWQuY2FsbCh0aGlzLCBjaGFuZ2VkUHJvcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsSGFBdHRyaWJ1dGVzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdoYS1hdHRyaWJ1dGVzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYUF0dHJpYnV0ZXMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWF0dHJpYnV0ZXMnKTtcbiAgICAgIGlmICghaGFBdHRyaWJ1dGVzIHx8ICFoYUF0dHJpYnV0ZXMucHJvdG90eXBlLmNvbXB1dGVGaWx0ZXJzQXJyYXkgfHxcbiAgICAgICAgICF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYUF0dHJpYnV0ZXMucHJvdG90eXBlLmNvbXB1dGVGaWx0ZXJzQXJyYXkgPVxuICAgICAgICBmdW5jdGlvbiBjdXN0b21Db21wdXRlRmlsdGVyc0FycmF5KGV4dHJhRmlsdGVycykge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykuY29uY2F0KFxuICAgICAgICAgICAgZXh0cmFGaWx0ZXJzID8gZXh0cmFGaWx0ZXJzLnNwbGl0KCcsJykgOiBbXSk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtZm9ybS1jdXN0b21pemUnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhhRm9ybUN1c3RvbWl6ZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtZm9ybS1jdXN0b21pemUnKTtcbiAgICAgIGlmICghaGFGb3JtQ3VzdG9taXplKSB7XG4gICAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFGb3JtQ3VzdG9taXplLCAxMDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAod2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lKSByZXR1cm47XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuaGFGb3JtQ3VzdG9taXplSW5pdERvbmUgPSB0cnVlO1xuXG4gICAgICBpZiAoIXdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCkgcmV0dXJuO1xuICAgICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUpIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSA9XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZShrZXksIHZhbHVlLCBzZWNvbmRhcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2tleV1cbiAgICAgICAgICAgICAgICB8fCB7IHR5cGU6IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbml0T3Blbk9iamVjdChrZXksIGNvbmZpZy50eXBlID09PSAnanNvbicgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZSwgc2Vjb25kYXJ5LCBjb25maWcpO1xuICAgICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucykge1xuICAgICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgICBoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zID1cbiAgICAgICAgICBmdW5jdGlvbiBjdXN0b21nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyhcbiAgICAgICAgICAgIGxvY2FsQXR0cmlidXRlcywgZ2xvYmFsQXR0cmlidXRlcywgZXhpc3RpbmdBdHRyaWJ1dGVzLCBuZXdBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBrbm93bktleXMgPVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmYgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZiAmJiAoIWNvbmYuZG9tYWlucyB8fCAhdGhpcy5lbnRpdHkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZi5kb21haW5zLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbih0aGlzLmVudGl0eSkpKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobG9jYWxBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhnbG9iYWxBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhleGlzdGluZ0F0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKG5ld0F0dHJpYnV0ZXMpKTtcbiAgICAgICAgICAgIHJldHVybiBrbm93bktleXMuc29ydCgpLmNvbmNhdCgnT3RoZXInKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxDbGFzc0hvb2tzKCkge1xuICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5jbGFzc0luaXREb25lID0gdHJ1ZTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFBhcnRpYWxDYXJkcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsU3RhdGVzSG9vaygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlQmFkZ2UoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhQXR0cmlidXRlcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQWN0aW9uTmFtZSgnc3RhdGUtY2FyZC1zY2VuZScpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQWN0aW9uTmFtZSgnc3RhdGUtY2FyZC1zY3JpcHQnKTtcbiAgfSxcblxuICBpbml0KCkge1xuICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuaW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbENsYXNzSG9va3MoKTtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGlmICghbWFpbi5oYXNzIHx8ICFtYWluLmhhc3Muc3RhdGVzKSB7XG4gICAgICAvLyBDb25uZWN0aW9uIHdhc24ndCBtYWRlIHlldC4gVHJ5IGluIDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmluaXQsIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5pdERvbmUgPSB0cnVlO1xuXG4gICAgd2luZG93LmN1c3RvbVVJLnVzZUN1c3RvbWl6ZXIoKTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS5ydW5Ib29rcygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2NhdGlvbi1jaGFuZ2VkJywgd2luZG93LnNldFRpbWVvdXQuYmluZChudWxsLCB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MsIDEwMCkpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBjb25zb2xlLmxvZyhgTG9hZGVkIEN1c3RvbVVJICR7VkVSU0lPTn1gKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBpZiAoIXdpbmRvdy5DVVNUT01fVUlfTElTVCkge1xuICAgICAgd2luZG93LkNVU1RPTV9VSV9MSVNUID0gW107XG4gICAgfVxuICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVC5wdXNoKHtcbiAgICAgIG5hbWU6ICdDdXN0b21VSScsXG4gICAgICB2ZXJzaW9uOiBWRVJTSU9OLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZHJleS1naXQvaG9tZS1hc3Npc3RhbnQtY3VzdG9tLXVpJyxcbiAgICB9KTtcbiAgfSxcblxuICBydW5Ib29rcygpIHtcbiAgICB3aW5kb3cuY3VzdG9tVUkuZml4R3JvdXBUaXRsZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkudXBkYXRlQ29uZmlnUGFuZWwoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSgpO1xuICB9LFxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGEtZGV2aWNlLW5hbWUnKSB8fCAnJztcbiAgfSxcblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hhLWRldmljZS1uYW1lJywgbmFtZSB8fCAnJyk7XG4gIH0sXG5cbiAgY29tcHV0ZVRlbXBsYXRlKHRlbXBsYXRlLCBoYXNzLCBlbnRpdGllcywgZW50aXR5LCBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUsIHN0YXRlKSB7XG4gICAgY29uc3QgZnVuY3Rpb25Cb2R5ID0gKHRlbXBsYXRlLmluZGV4T2YoJ3JldHVybicpID49IDApID8gdGVtcGxhdGUgOiBgcmV0dXJuIFxcYCR7dGVtcGxhdGV9XFxgO2A7XG4gICAgdHJ5IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jICovXG4gICAgICBjb25zdCBmdW5jID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnaGFzcycsICdlbnRpdGllcycsICdlbnRpdHknLCAnYXR0cmlidXRlcycsICdhdHRyaWJ1dGUnLCAnc3RhdGUnLCBmdW5jdGlvbkJvZHkpO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgcmV0dXJuIGZ1bmMoaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgaWYgKChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHx8IGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9IGluIHRlbXBsYXRlICR7ZnVuY3Rpb25Cb2R5fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH0sXG59O1xud2luZG93LmN1c3RvbVVJLmluaXQoKTtcbiIsImV4cG9ydCBkZWZhdWx0ICcyMDE5MDUxOCc7XG4iXSwic291cmNlUm9vdCI6IiJ9