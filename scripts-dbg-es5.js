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
  var data = _taggedTemplateLiteral(["\n    <style include=\"ha-style\"></style>\n    <app-header-layout has-scrolling-region>\n      <app-header slot=\"header\" fixed>\n        <app-toolbar>\n          <paper-icon-button\n            icon='mdi:arrow-left'\n            on-click='_backHandler'\n          ></paper-icon-button>\n          <div main-title>Custom UI settings</div>\n        </app-toolbar>\n      </app-header>\n\n      <ha-config-section is-wide='[[isWide]]'>\n        <paper-card heading='Device name'>\n          <div class='card-content'>\n            Set device name so that you can reference it in per-device settings\n            <paper-input\n              label='Name'\n              value='{{name}}'\n            ></paper-input>\n          </div>\n        </paper-card>\n      </ha-config-section>\n    </app-header-layout>\n    "]);

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
    } else {
      var root = haPanelConfig.shadowRoot || haPanelConfig;

      if (root.lastElementChild.tagName !== 'HA-CONFIG-CUSTOM-UI') {
        var _haConfigCustomUi = getHaConfigCustomUi();

        root.appendChild(_haConfigCustomUi);
      }

      var visible = window.location.pathname.startsWith('/config/customui');
      root.lastElementChild.style.display = visible ? '' : 'none';
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
      if (!stateBadge || !stateBadge.prototype._updateIconAppearance) return;
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
/* harmony default export */ __webpack_exports__["default"] = ('20190113');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUudHMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2N1aS1iYXNlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvZHluYW1pYy13aXRoLWV4dHJhLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9oYS10aGVtZWQtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9zdGF0ZS1jYXJkLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGFzcy1hdHRyaWJ1dGUtdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZlcnNpb24uanMiXSwibmFtZXMiOlsiREVGQVVMVF9ET01BSU5fSUNPTiIsIkRFRkFVTFRfUEFORUwiLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfV0lUSF9NT1JFX0lORk8iLCJET01BSU5TX0hJREVfTU9SRV9JTkZPIiwiRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSIsIlNUQVRFU19PRkYiLCJET01BSU5TX1RPR0dMRSIsIlNldCIsIlVOSVRfQyIsIlVOSVRfRiIsIkRFRkFVTFRfVklFV19FTlRJVFlfSUQiLCJhcHBseVRoZW1lc09uRWxlbWVudCIsImVsZW1lbnQiLCJ0aGVtZXMiLCJsb2NhbFRoZW1lIiwidXBkYXRlTWV0YSIsIl90aGVtZXMiLCJ0aGVtZU5hbWUiLCJkZWZhdWx0X3RoZW1lIiwic3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGhlbWUiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInByZWZpeGVkS2V5IiwidXBkYXRlU3R5bGVzIiwid2luZG93IiwiU2hhZHlDU1MiLCJzdHlsZVN1YnRyZWUiLCJtZXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidGhlbWVDb2xvciIsImR5bmFtaWNDb250ZW50VXBkYXRlciIsInJvb3QiLCJuZXdFbGVtZW50VGFnIiwiYXR0cmlidXRlcyIsInJvb3RFbCIsImN1c3RvbUVsIiwibGFzdENoaWxkIiwidGFnTmFtZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInRvTG93ZXJDYXNlIiwic2V0UHJvcGVydGllcyIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsImNhblRvZ2dsZURvbWFpbiIsImhhc3MiLCJkb21haW4iLCJzZXJ2aWNlcyIsImNhblRvZ2dsZVN0YXRlIiwic3RhdGVPYmoiLCJzdGF0ZSIsImNvbXB1dGVEb21haW4iLCJlbnRpdHlJZCIsInN1YnN0ciIsImluZGV4T2YiLCJjb21wdXRlU3RhdGVEb21haW4iLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsInN1cHBvcnRzRmVhdHVyZSIsImZlYXR1cmUiLCJzdXBwb3J0ZWRfZmVhdHVyZXMiLCJoYXNzQXR0cmlidXRlVXRpbCIsIkRPTUFJTl9ERVZJQ0VfQ0xBU1MiLCJiaW5hcnlfc2Vuc29yIiwiY292ZXIiLCJzZW5zb3IiLCJVTktOT1dOX1RZUEUiLCJBRERfVFlQRSIsIlRZUEVfVE9fVEFHIiwic3RyaW5nIiwianNvbiIsImljb24iLCJib29sZWFuIiwiYXJyYXkiLCJMT0dJQ19TVEFURV9BVFRSSUJVVEVTIiwiZW50aXR5X3BpY3R1cmUiLCJ1bmRlZmluZWQiLCJmcmllbmRseV9uYW1lIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiZW11bGF0ZWRfaHVlIiwiZG9tYWlucyIsImVtdWxhdGVkX2h1ZV9uYW1lIiwiaGFhc2thX2hpZGRlbiIsImhhYXNrYV9uYW1lIiwiaG9tZWJyaWRnZV9oaWRkZW4iLCJob21lYnJpZGdlX25hbWUiLCJhdHRyaWJ1dGlvbiIsImN1c3RvbV91aV9tb3JlX2luZm8iLCJjdXN0b21fdWlfc3RhdGVfY2FyZCIsImRldmljZV9jbGFzcyIsIm9wdGlvbnMiLCJhc3N1bWVkX3N0YXRlIiwiaW5pdGlhbF9zdGF0ZSIsInVuaXRfb2ZfbWVhc3VyZW1lbnQiLCJKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5IiwicHJvcCIsIkxpdGVyYWxTdHJpbmciLCJ2YWx1ZSIsInRvU3RyaW5nIiwibGl0ZXJhbFZhbHVlIiwiRXJyb3IiLCJodG1sVmFsdWUiLCJIVE1MVGVtcGxhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaHRtbCIsInN0cmluZ3MiLCJ0ZW1wbGF0ZSIsInZhbHVlcyIsInJlZHVjZSIsImFjYyIsInYiLCJpZHgiLCJodG1sTGl0ZXJhbCIsIkN1aUJhc2VFbGVtZW50IiwiZXh0cmFzIiwiZXh0cmFfZGF0YV90ZW1wbGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImV4dHJhIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJzdGF0ZXMiLCJmaWx0ZXIiLCJpbkRpYWxvZyIsImxlbmd0aCIsInNob3dfbGFzdF9jaGFuZ2VkIiwiQm9vbGVhbiIsImNvbnRyb2xFbGVtZW50IiwiU3RyaW5nIiwiY29tcHV0ZWQiLCJQb2x5bWVyIiwiRWxlbWVudCIsIkR5bmFtaWNFbGVtZW50IiwiZWxlbWVudE5hbWUiLCJ0b1VwcGVyQ2FzZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwid2hlbkRlZmluZWQiLCJ0aGVuIiwiRHluYW1pY1dpdGhFeHRyYSIsIl9hdHRhY2hlZCIsIl9pc0F0dGFjaGVkIiwiYXR0YWNoZWQiLCJleHRyYV9iYWRnZSIsImV4dHJhQmFkZ2VzIiwiZXh0cmFCYWRnZSIsIm1heWJlQ2hhbmdlT2JqZWN0IiwiYXR0cmlidXRlIiwidW5pdCIsImJsYWNrbGlzdCIsImJsYWNrbGlzdF9zdGF0ZXMiLCJzb21lIiwiUmVnRXhwIiwidGVzdCIsIl9lbnRpdHlEaXNwbGF5IiwiZXh0cmFPYmoiLCJleHRyYU9ialZpc2libGUiLCJoaWRlX2NvbnRyb2wiLCJoYUxvY2FsaXplIiwibG9jYWxpemUiLCJjb25maXJtX2NvbnRyb2xzIiwiY29uZmlybV9jb250cm9sc19zaG93X2xvY2siLCJlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwibG9jayIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJhcHBseVRoZW1lcyIsImdldCIsIkhhQ29uZmlnQ3VzdG9tVWkiLCJuYW1lIiwiZ2V0TmFtZSIsInNldE5hbWUiLCJoaXN0b3J5IiwiYmFjayIsImZpcmUiLCJpc1dpZGUiLCJvYnNlcnZlciIsIkhhVGhlbWVkU2xpZGVyIiwiZGlzYWJsZU9mZldoZW5NaW4iLCJfY29tcHV0ZUF0dHJpYnV0ZSIsImNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJfZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiYXR0ciIsImRlZiIsImlzT24iLCJ0aGVtZWRNaW4iLCJldiIsInRhcmdldCIsIm1pbiIsIk51bWJlciIsIm1heCIsInBpbiIsIm5vdGlmeSIsIl90aGVtZWRNaW4iLCJTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUyIsIkRPTUFJTl9UT19TTElERVJfU1VQUE9SVCIsImxpZ2h0IiwiY2xpbWF0ZSIsIlRZUEVfVE9fQ09OVFJPTCIsInRvZ2dsZSIsImRpc3BsYXkiLCJTdGF0ZUNhcmRDdXN0b21VaSIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX2NvbnRhaW5lciIsInNldFByb3BlcnR5IiwiaW5wdXRDaGFuZ2VkIiwibWFyZ2luIiwicGFkZGluZyIsImlkIiwiY29uc29sZSIsIndhcm4iLCJiYWRnZXNfbGlzdCIsInB1c2giLCJwYXJhbXMiLCJ3aWR0aCIsImZvbnRTaXplIiwibW9kaWZpZWRPYmoiLCJ0aGVtZVRhcmdldCIsIm9iaiIsInN0YXRlX2NhcmRfbW9kZSIsIm1heWJlSGlkZUVudGl0eSIsImJhZGdlTW9kZSIsInJlZ3VsYXJNb2RlXyIsImNsZWFuQmFkZ2VTdHlsZSIsIm9yaWdpbmFsU3RhdGVDYXJkVHlwZSIsImN1c3RvbVN0YXRlQ2FyZFR5cGUiLCJzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIiwic3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5Iiwic2xpZGVyRWxpZ2libGVfIiwic2VydmljZU1pbiIsInNlcnZpY2VNYXgiLCJ2YWx1ZU5hbWUiLCJzZXRWYWx1ZU5hbWUiLCJuYW1lT24iLCJtaW5fdGVtcCIsIm1heF90ZW1wIiwiY29udHJvbF9lbGVtZW50IiwiU3RhdGVDYXJkV2l0aFNsaWRlciIsIl9vbklyb25SZXNpemUiLCJiaW5kIiwiX2lzQ29ubmVjdGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl93YWl0Rm9yTGF5b3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9zZXRNb2RlIiwiX2ZyYW1lSWQiLCJyZWFkeVRvQ29tcHV0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhpZGVTbGlkZXIiLCJtb2RlIiwibGluZVRvb0xvbmciLCJicmVha1NsaWRlciIsInNob3dTbGlkZXIiLCJwcmV2QnJlYWtTbGlkZXIiLCJwcmV2SGlkZVNsaWRlciIsIiQiLCJjb250YWluZXJXaWR0aCIsImNsaWVudFdpZHRoIiwibWluTGluZUJyZWFrIiwibWF4TGluZUJyZWFrIiwiY29udGFpbmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhdGVIZWlnaHQiLCJzdHJldGNoU2xpZGVyIiwicGFyc2VJbnQiLCJwYXJhbSIsImlzTmFOIiwicGF0aCIsImNvbXBvc2VkUGF0aCIsImNhbGxTZXJ2aWNlIiwic2xpZGVyVmFsdWUiLCJzdHJldGNoX3NsaWRlciIsIlN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIiLCJzdXBlckNsYXNzIiwiRXZlbnRzTWl4aW4iLCJkZXRhaWwiLCJldmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjb21wb3NlZCIsIm5vZGUiLCJkaXNwYXRjaEV2ZW50IiwiU1VQUE9SVEVEX1NMSURFUl9NT0RFUyIsImN1c3RvbVVpQXR0cmlidXRlcyIsImRldmljZSIsInRlbXBsYXRlcyIsIl9zdGF0ZURpc3BsYXkiLCJjb25jYXQiLCJzbGlkZXJfdGhlbWUiLCJoaWRlX2luX2RlZmF1bHRfdmlldyIsImljb25fY29sb3IiLCJkb21Ib3N0IiwiZ2V0Um9vdE5vZGUiLCJEb2N1bWVudEZyYWdtZW50IiwiaG9zdCIsImxpZ2h0T3JTaGFkb3ciLCJzZWxlY3RvciIsInNoYWRvd1Jvb3QiLCJnZXRFbGVtZW50SGllcmFyY2h5IiwiaGllcmFyY2h5Iiwic2hpZnQiLCJnZXRDb250ZXh0IiwiX2NvbnRleHQiLCJncm91cEVudGl0eSIsInJldmVyc2UiLCJmaW5kTWF0Y2giLCJmaW5kIiwib3B0aW9uIiwibWF0Y2giLCJtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlIiwiYXBwbHlBdHRyaWJ1dGVzIiwibWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwIiwiY29udGV4dCIsImMiLCJfc2V0S2VlcCIsIl9jdWlfa2VlcCIsIm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiaGFzR2xvYmFsIiwiaGFzQ2hhbmdlcyIsInVudGVtcGxhdGVkX2F0dHJpYnV0ZXMiLCJ1bnRlbXBsYXRlZF9zdGF0ZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInVudGVtcGxhdGVkX3N0YXRlRGlzcGxheSIsIm1heWJlQXBwbHlUZW1wbGF0ZXMiLCJuZXdSZXN1bHQiLCJjaGVja0F0dHJpYnV0ZXMiLCJsYXN0X2NoYW5nZWQiLCJhbGxvd0hpZGRlbiIsImZpeEdyb3VwVGl0bGVzIiwiaG9tZUFzc2lzdGFudE1haW4iLCJoYUNhcmRzIiwibWFpbiIsImNhcmRzIiwiY2FyZCIsIm5hbWVFbGVtIiwidGV4dENvbnRlbnQiLCJjb250cm9sQ29sdW1ucyIsImNvbHVtbnMiLCJwYXJ0aWFsQ2FyZHMiLCJmIiwiaGFuZGxlV2luZG93Q2hhbmdlIiwiX3VwZGF0ZUNvbHVtbnMiLCJtcWxzIiwibXFsIiwicmVtb3ZlTGlzdGVuZXIiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ1c2VDdXN0b21pemVyIiwiY3VzdG9taXplciIsImhpZGVfYXR0cmlidXRlcyIsInVwZGF0ZUNvbmZpZ1BhbmVsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJoYVBhbmVsQ29uZmlnIiwiaGFDb25maWdOYXZpZ2F0aW9uIiwiY3VpUGF0Y2giLCJfb3JpZ2luYWxDb21wdXRlTG9hZGVkIiwiX2NvbXB1dGVMb2FkZWQiLCJfb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiIsIl9jb21wdXRlQ2FwdGlvbiIsIl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiIsIl9jb21wdXRlRGVzY3JpcHRpb24iLCJwYWdlIiwicGFnZXMiLCJjb25mIiwiY2FwdGlvbiIsImxvYWRlZCIsImdldEhhQ29uZmlnQ3VzdG9tVWkiLCJoYUNvbmZpZ0N1c3RvbVVpIiwiaXJvblBhZ2VzIiwibGFzdEVsZW1lbnRDaGlsZCIsInNlbGVjdCIsInZpc2libGUiLCJpbnN0YWxsU3RhdGVzSG9vayIsImhvbWVBc3Npc3RhbnQiLCJfdXBkYXRlSGFzcyIsIm9yaWdpbmFsVXBkYXRlIiwidXBkYXRlIiwibmV3RW50aXR5IiwiX3RoZW1lV2FpdGVycyIsIndhaXRlciIsInN0YXRlQ2hhbmdlZCIsImluc3RhbGxQYXJ0aWFsQ2FyZHMiLCJfZGVmYXVsdFZpZXdGaWx0ZXIiLCJleGNsdWRlcyIsImV4Y2x1ZGVFbnRpdHlJZCIsImluc3RhbGxBY3Rpb25OYW1lIiwia2xhc3MiLCJkZWZpbmVQcm9wZXJ0eSIsImN1c3RvbUxvY2FsaXplIiwiYWN0aW9uX25hbWUiLCJfX2RhdGEiLCJzZXQiLCJpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UiLCJoYVN0YXRlTGFiZWxCYWRnZSIsInN0YXJ0SW50ZXJ2YWwiLCJpbnN0YWxsU3RhdGVCYWRnZSIsInN0YXRlQmFkZ2UiLCJfdXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlIiwiY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb2xvciIsImluc3RhbGxIYUF0dHJpYnV0ZXMiLCJoYUF0dHJpYnV0ZXMiLCJjb21wdXRlRmlsdGVyc0FycmF5IiwiY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheSIsImV4dHJhRmlsdGVycyIsInNwbGl0IiwiaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSIsImhhRm9ybUN1c3RvbWl6ZSIsImhhRm9ybUN1c3RvbWl6ZUluaXREb25lIiwiX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUiLCJjdXN0b21Db21wdXRlU2luZ2xlQXR0cmlidXRlIiwic2Vjb25kYXJ5IiwiY29uZmlnIiwiX2luaXRPcGVuT2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwiY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMiLCJsb2NhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGVzIiwiZXhpc3RpbmdBdHRyaWJ1dGVzIiwia25vd25LZXlzIiwiZmlsdGVyRnJvbUF0dHJpYnV0ZXMiLCJzb3J0IiwiaW5zdGFsbENsYXNzSG9va3MiLCJjbGFzc0luaXREb25lIiwiaW5pdCIsImluaXREb25lIiwicnVuSG9va3MiLCJsb2ciLCJDVVNUT01fVUlfTElTVCIsInZlcnNpb24iLCJ1cmwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImZ1bmN0aW9uQm9keSIsImZ1bmMiLCJGdW5jdGlvbiIsIlN5bnRheEVycm9yIiwiUmVmZXJlbmNlRXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxJQUFNQSxtQkFBbUIsR0FBRyxlQUE1QjtBQUVQOztBQUNPLElBQU1DLGFBQWEsR0FBRyxRQUF0QjtBQUVQOztBQUNPLElBQU1DLGlCQUFpQixHQUFHLENBQy9CLFNBRCtCLEVBRS9CLE9BRitCLEVBRy9CLGNBSCtCLEVB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LE9BQVQsQ0FBaUIsUUFBakIsS0FBOEIsQ0FBL0IsR0FBb0NtRSxRQUFwQyxxQkFBMkRBLFFBQTNELE9BQXJCOztBQUNBLFFBQUk7QUFDRjtBQUNBLFVBQU00VixJQUFJLEdBQUcsSUFBSUMsUUFBSixDQUNYLE1BRFcsRUFDSCxVQURHLEVBQ1MsUUFEVCxFQUNtQixZQURuQixFQUNpQyxXQURqQyxFQUM4QyxPQUQ5QyxFQUN1REYsWUFEdkQsQ0FBYjtBQUVBOztBQUNBLGFBQU9DLElBQUksQ0FBQ3hhLElBQUQsRUFBT2EsUUFBUCxFQUFpQkcsTUFBakIsRUFBeUI1QixVQUF6QixFQUFxQ2tJLFNBQXJDLEVBQWdEakgsS0FBaEQsQ0FBWDtBQUNELEtBTkQsQ0FNRSxPQUFPZ0ksQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxVQUFLQSxDQUFDLFlBQVlxUyxXQUFkLElBQThCclMsQ0FBQyxZQUFZc1MsY0FBL0MsRUFBK0Q7QUFDN0QvTyxlQUFPLENBQUNDLElBQVIsV0FBZ0J4RCxDQUFDLENBQUNZLElBQWxCLGVBQTJCWixDQUFDLENBQUN1UyxPQUE3QiwwQkFBb0RMLFlBQXBEO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRDs7O0FBQ0EsWUFBTWxTLENBQU47QUFDRDtBQUNGO0FBbG1Ca0MsQ0FBckM7QUFvbUJBOUosTUFBTSxDQUFDbUgsUUFBUCxDQUFnQm1VLElBQWhCLEc7Ozs7Ozs7Ozs7Ozs7QUM1bUJBLCtEQUFlLFVBQWYsRSIsImZpbGUiOiJzY3JpcHRzLWRiZy1lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnlwb2ludHMvc2NyaXB0cy5qc1wiKTtcbiIsIi8qKiBDb25zdGFudHMgdG8gYmUgdXNlZCBpbiB0aGUgZnJvbnRlbmQuICovXG5cbi8vIENvbnN0YW50cyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGJ5IG5hbWUuXG4vLyBBcnJheXMgd2l0aCB2YWx1ZXMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBpZiBvcmRlciBkb2Vzbid0IG1hdHRlci5cbi8vIEVhY2ggY29uc3RhbnQgc2hvdWxkIGhhdmUgYSBkZXNjcmlwdGlvbiB3aGF0IGl0IGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgZm9yLlxuXG4vKiogSWNvbiB0byB1c2Ugd2hlbiBubyBpY29uIHNwZWNpZmllZCBmb3IgZG9tYWluLiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRE9NQUlOX0lDT04gPSBcImhhc3M6Ym9va21hcmtcIjtcblxuLyoqIFBhbmVsIHRvIHNob3cgd2hlbiBubyBwYW5lbCBpcyBwaWNrZWQuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9QQU5FTCA9IFwic3RhdGVzXCI7XG5cbi8qKiBEb21haW5zIHRoYXQgaGF2ZSBhIHN0YXRlIGNhcmQuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSBbXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvdmVyXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY2VuZVwiLFxuICBcInNjcmlwdFwiLFxuICBcInRpbWVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VibGlua1wiLFxuXTtcblxuLyoqIERvbWFpbnMgd2l0aCBzZXBhcmF0ZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9NT1JFX0lORk8gPSBbXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImF1dG9tYXRpb25cIixcbiAgXCJjYW1lcmFcIixcbiAgXCJjbGltYXRlXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiY292ZXJcIixcbiAgXCJmYW5cIixcbiAgXCJncm91cFwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJpbnB1dF9kYXRldGltZVwiLFxuICBcImxpZ2h0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInNjcmlwdFwiLFxuICBcInN1blwiLFxuICBcInVwZGF0ZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgXCJ3ZWF0aGVyXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3cgbm8gbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX0hJREVfTU9SRV9JTkZPID0gW1xuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJzY2VuZVwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gIFwiY2FtZXJhXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaGlzdG9yeV9ncmFwaFwiLFxuICBcInNjZW5lXCIsXG5dO1xuXG4vKiogU3RhdGVzIHRoYXQgd2UgY29uc2lkZXIgXCJvZmZcIi4gKi9cbmV4cG9ydCBjb25zdCBTVEFURVNfT0ZGID0gW1wiY2xvc2VkXCIsIFwibG9ja2VkXCIsIFwib2ZmXCJdO1xuXG4vKiogRG9tYWlucyB3aGVyZSB3ZSBhbGxvdyB0b2dnbGUgaW4gTG92ZWxhY2UuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19UT0dHTEUgPSBuZXcgU2V0KFtcbiAgXCJmYW5cIixcbiAgXCJpbnB1dF9ib29sZWFuXCIsXG4gIFwibGlnaHRcIixcbiAgXCJzd2l0Y2hcIixcbl0pO1xuXG4vKiogVGVtcGVyYXR1cmUgdW5pdHMuICovXG5leHBvcnQgY29uc3QgVU5JVF9DID0gXCLCsENcIjtcbmV4cG9ydCBjb25zdCBVTklUX0YgPSBcIsKwRlwiO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9IFwiZ3JvdXAuZGVmYXVsdF92aWV3XCI7XG4iLCIvKipcbiAqIEFwcGx5IGEgdGhlbWUgdG8gYW4gZWxlbWVudCBieSBzZXR0aW5nIHRoZSBDU1MgdmFyaWFibGVzIG9uIGl0LlxuICpcbiAqIGVsZW1lbnQ6IEVsZW1lbnQgdG8gYXBwbHkgdGhlbWUgb24uXG4gKiB0aGVtZXM6IEhBU1MgVGhlbWUgaW5mb3JtYXRpb25cbiAqIGxvY2FsVGhlbWU6IHNlbGVjdGVkIHRoZW1lLlxuICogdXBkYXRlTWV0YTogYm9vbGVhbiBpZiB3ZSBzaG91bGQgdXBkYXRlIHRoZSB0aGVtZS1jb2xvciBtZXRhIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICBlbGVtZW50LFxuICB0aGVtZXMsXG4gIGxvY2FsVGhlbWUsXG4gIHVwZGF0ZU1ldGEgPSBmYWxzZVxuKSB7XG4gIGlmICghZWxlbWVudC5fdGhlbWVzKSB7XG4gICAgZWxlbWVudC5fdGhlbWVzID0ge307XG4gIH1cbiAgbGV0IHRoZW1lTmFtZSA9IHRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuICBpZiAobG9jYWxUaGVtZSA9PT0gXCJkZWZhdWx0XCIgfHwgKGxvY2FsVGhlbWUgJiYgdGhlbWVzLnRoZW1lc1tsb2NhbFRoZW1lXSkpIHtcbiAgICB0aGVtZU5hbWUgPSBsb2NhbFRoZW1lO1xuICB9XG4gIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnQuX3RoZW1lcyk7XG4gIGlmICh0aGVtZU5hbWUgIT09IFwiZGVmYXVsdFwiKSB7XG4gICAgdmFyIHRoZW1lID0gdGhlbWVzLnRoZW1lc1t0aGVtZU5hbWVdO1xuICAgIE9iamVjdC5rZXlzKHRoZW1lKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHZhciBwcmVmaXhlZEtleSA9IFwiLS1cIiArIGtleTtcbiAgICAgIGVsZW1lbnQuX3RoZW1lc1twcmVmaXhlZEtleV0gPSBcIlwiO1xuICAgICAgc3R5bGVzW3ByZWZpeGVkS2V5XSA9IHRoZW1lW2tleV07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGVsZW1lbnQudXBkYXRlU3R5bGVzKSB7XG4gICAgZWxlbWVudC51cGRhdGVTdHlsZXMoc3R5bGVzKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuU2hhZHlDU1MpIHtcbiAgICAvLyBpbXBsZW1lbnQgdXBkYXRlU3R5bGVzKCkgbWV0aG9kIG9mIFBvbGVtZXIgZWxlbWVudHNcbiAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVTdWJ0cmVlKC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAoZWxlbWVudCksIHN0eWxlcyk7XG4gIH1cblxuICBpZiAoIXVwZGF0ZU1ldGEpIHJldHVybjtcblxuICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbbmFtZT10aGVtZS1jb2xvcl1cIik7XG4gIGlmIChtZXRhKSB7XG4gICAgaWYgKCFtZXRhLmhhc0F0dHJpYnV0ZShcImRlZmF1bHQtY29udGVudFwiKSkge1xuICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoXCJkZWZhdWx0LWNvbnRlbnRcIiwgbWV0YS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpKTtcbiAgICB9XG4gICAgY29uc3QgdGhlbWVDb2xvciA9XG4gICAgICBzdHlsZXNbXCItLXByaW1hcnktY29sb3JcIl0gfHwgbWV0YS5nZXRBdHRyaWJ1dGUoXCJkZWZhdWx0LWNvbnRlbnRcIik7XG4gICAgbWV0YS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsIHRoZW1lQ29sb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFVwZGF0ZSByb290J3MgY2hpbGQgZWxlbWVudCB0byBiZSBuZXdFbGVtZW50VGFnIHJlcGxhY2luZyBhbm90aGVyIGV4aXN0aW5nIGNoaWxkIGlmIGFueS5cbiAqIENvcHkgYXR0cmlidXRlcyBpbnRvIHRoZSBjaGlsZCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljQ29udGVudFVwZGF0ZXIocm9vdCwgbmV3RWxlbWVudFRhZywgYXR0cmlidXRlcykge1xuICBjb25zdCByb290RWwgPSByb290O1xuICBsZXQgY3VzdG9tRWw7XG5cbiAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQgJiYgcm9vdEVsLmxhc3RDaGlsZC50YWdOYW1lID09PSBuZXdFbGVtZW50VGFnKSB7XG4gICAgY3VzdG9tRWwgPSByb290RWwubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIGlmIChyb290RWwubGFzdENoaWxkKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQocm9vdEVsLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0aW5nIGFuIGVsZW1lbnQgd2l0aCB1cHBlciBjYXNlIHdvcmtzIGZpbmUgaW4gQ2hyb21lLCBidXQgaW4gRkYgaXQgZG9lc24ndCBpbW1lZGlhdGVseVxuICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICBjdXN0b21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudFRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKSB7XG4gICAgY3VzdG9tRWwuc2V0UHJvcGVydGllcyhhdHRyaWJ1dGVzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBjdXN0b20gZWxlbWVudCBkZWZpbml0aW9uIHdhc24ndCBsb2FkZWQgeWV0IC0gc2V0UHJvcGVydGllcyB3b3VsZCBiZVxuICAgIC8vIG1pc3NpbmcsIGJ1dCBubyBoYXJtIGluIHNldHRpbmcgYXR0cmlidXRlcyBvbmUtYnktb25lIHRoZW4uXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjdXN0b21FbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoY3VzdG9tRWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZURvbWFpbihoYXNzOiBIb21lQXNzaXN0YW50LCBkb21haW46IHN0cmluZykge1xuICBjb25zdCBzZXJ2aWNlcyA9IGhhc3Muc2VydmljZXNbZG9tYWluXTtcbiAgaWYgKCFzZXJ2aWNlcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChkb21haW4gPT09IFwibG9ja1wiKSB7XG4gICAgcmV0dXJuIFwibG9ja1wiIGluIHNlcnZpY2VzO1xuICB9XG4gIGlmIChkb21haW4gPT09IFwiY292ZXJcIikge1xuICAgIHJldHVybiBcIm9wZW5fY292ZXJcIiBpbiBzZXJ2aWNlcztcbiAgfVxuICByZXR1cm4gXCJ0dXJuX29uXCIgaW4gc2VydmljZXM7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNhblRvZ2dsZURvbWFpbiBmcm9tIFwiLi9jYW5fdG9nZ2xlX2RvbWFpblwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4vc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVTdGF0ZShcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHlcbikge1xuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICBpZiAoZG9tYWluID09PSBcImdyb3VwXCIpIHtcbiAgICByZXR1cm4gc3RhdGVPYmouc3RhdGUgPT09IFwib25cIiB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJvZmZcIjtcbiAgfVxuICBpZiAoZG9tYWluID09PSBcImNsaW1hdGVcIikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQwOTYpO1xuICB9XG5cbiAgcmV0dXJuIGNhblRvZ2dsZURvbWFpbihoYXNzLCBkb21haW4pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZURvbWFpbihlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cigwLCBlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqOiBIYXNzRW50aXR5KSB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXRpZXMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBHcm91cEVudGl0eSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHcm91cEVudGl0aWVzKFxuICBlbnRpdGllczogSGFzc0VudGl0aWVzLFxuICBncm91cDogR3JvdXBFbnRpdHlcbikge1xuICBjb25zdCByZXN1bHQgPSB7fTtcblxuICBncm91cC5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHJlc3VsdFtlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXRpZXMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IGdldEdyb3VwRW50aXRpZXMgZnJvbSBcIi4vZ2V0X2dyb3VwX2VudGl0aWVzXCI7XG5pbXBvcnQgeyBHcm91cEVudGl0eSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGVudGl0aWVzIHRoYXQgdGhlIHZpZXcgd2lsbCBzaG93XG4vLyBpbmNsdWRpbmcgZW1iZWRkZWQgZ3JvdXBzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld0VudGl0aWVzKFxuICBlbnRpdGllczogSGFzc0VudGl0aWVzLFxuICB2aWV3OiBHcm91cEVudGl0eVxuKTogSGFzc0VudGl0aWVzIHtcbiAgY29uc3Qgdmlld0VudGl0aWVzID0ge307XG5cbiAgdmlldy5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkgJiYgIWVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgdmlld0VudGl0aWVzW2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuXG4gICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gXCJncm91cFwiKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRW50aXRpZXMgPSBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBlbnRpdHkgYXMgR3JvdXBFbnRpdHkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwRW50aXRpZXMpLmZvckVhY2goKGdyRW50aXR5SWQpID0+IHtcbiAgICAgICAgICBjb25zdCBnckVudGl0eSA9IGdyb3VwRW50aXRpZXNbZ3JFbnRpdHlJZF07XG5cbiAgICAgICAgICBpZiAoIWdyRW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICAgICAgICB2aWV3RW50aXRpZXNbZ3JFbnRpdHlJZF0gPSBnckVudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdFbnRpdGllcztcbn1cbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgY2FuVG9nZ2xlU3RhdGUgZnJvbSBcIi4vY2FuX3RvZ2dsZV9zdGF0ZVwiO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgRE9NQUlOU19XSVRIX0NBUkQgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVDYXJkVHlwZShcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHlcbikge1xuICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwidW5hdmFpbGFibGVcIikge1xuICAgIHJldHVybiBcImRpc3BsYXlcIjtcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9DQVJELmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICByZXR1cm4gZG9tYWluO1xuICB9XG4gIGlmIChcbiAgICBjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikgJiZcbiAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2wgIT09IFwiaGlkZGVuXCJcbiAgKSB7XG4gICAgcmV0dXJuIFwidG9nZ2xlXCI7XG4gIH1cbiAgcmV0dXJuIFwiZGlzcGxheVwiO1xufVxuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzRmVhdHVyZSA9IChcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGZlYXR1cmU6IG51bWJlclxuKTogYm9vbGVhbiA9PiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gIHJldHVybiAoc3RhdGVPYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMhICYgZmVhdHVyZSkgIT09IDA7XG59O1xuIiwiY29uc3QgaGFzc0F0dHJpYnV0ZVV0aWwgPSB7fTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyA9IHtcbiAgYmluYXJ5X3NlbnNvcjogW1xuICAgIFwiYmF0dGVyeVwiLFxuICAgIFwiY29sZFwiLFxuICAgIFwiY29ubmVjdGl2aXR5XCIsXG4gICAgXCJkb29yXCIsXG4gICAgXCJnYXJhZ2VfZG9vclwiLFxuICAgIFwiZ2FzXCIsXG4gICAgXCJoZWF0XCIsXG4gICAgXCJsaWdodFwiLFxuICAgIFwibG9ja1wiLFxuICAgIFwibW9pc3R1cmVcIixcbiAgICBcIm1vdGlvblwiLFxuICAgIFwibW92aW5nXCIsXG4gICAgXCJvY2N1cGFuY3lcIixcbiAgICBcIm9wZW5pbmdcIixcbiAgICBcInBsdWdcIixcbiAgICBcInBvd2VyXCIsXG4gICAgXCJwcmVzZW5jZVwiLFxuICAgIFwicHJvYmxlbVwiLFxuICAgIFwic2FmZXR5XCIsXG4gICAgXCJzbW9rZVwiLFxuICAgIFwic291bmRcIixcbiAgICBcInZpYnJhdGlvblwiLFxuICAgIFwid2luZG93XCIsXG4gIF0sXG4gIGNvdmVyOiBbXCJnYXJhZ2VcIl0sXG4gIHNlbnNvcjogW1wiYmF0dGVyeVwiLCBcImh1bWlkaXR5XCIsIFwiaWxsdW1pbmFuY2VcIiwgXCJ0ZW1wZXJhdHVyZVwiLCBcInByZXNzdXJlXCJdLFxufTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gXCJqc29uXCI7XG5oYXNzQXR0cmlidXRlVXRpbC5BRERfVFlQRSA9IFwia2V5LXZhbHVlXCI7XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlRZUEVfVE9fVEFHID0ge1xuICBzdHJpbmc6IFwiaGEtY3VzdG9taXplLXN0cmluZ1wiLFxuICBqc29uOiBcImhhLWN1c3RvbWl6ZS1zdHJpbmdcIixcbiAgaWNvbjogXCJoYS1jdXN0b21pemUtaWNvblwiLFxuICBib29sZWFuOiBcImhhLWN1c3RvbWl6ZS1ib29sZWFuXCIsXG4gIGFycmF5OiBcImhhLWN1c3RvbWl6ZS1hcnJheVwiLFxuICBcImtleS12YWx1ZVwiOiBcImhhLWN1c3RvbWl6ZS1rZXktdmFsdWVcIixcbn07XG5cbi8vIEF0dHJpYnV0ZXMgaGVyZSBzZXJ2ZSBkdWFsIHB1cnBvc2U6XG4vLyAxKSBBbnkga2V5IG9mIHRoaXMgb2JqZWN0IHdvbid0IGJlIHNob3duIGluIG1vcmUtaW5mbyB3aW5kb3cuXG4vLyAyKSBBbnkga2V5IHdoaWNoIGhhcyB2YWx1ZSBvdGhlciB0aGFuIHVuZGVmaW5lZCB3aWxsIGFwcGVhciBpbiBjdXN0b21pemF0aW9uXG4vLyAgICBjb25maWcgYWNjb3JkaW5nIHRvIGl0cyB2YWx1ZS5cbmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPSBoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTIHx8IHtcbiAgZW50aXR5X3BpY3R1cmU6IHVuZGVmaW5lZCxcbiAgZnJpZW5kbHlfbmFtZTogeyB0eXBlOiBcInN0cmluZ1wiLCBkZXNjcmlwdGlvbjogXCJOYW1lXCIgfSxcbiAgaWNvbjogeyB0eXBlOiBcImljb25cIiB9LFxuICBlbXVsYXRlZF9odWU6IHtcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICBkb21haW5zOiBbXCJlbXVsYXRlZF9odWVcIl0sXG4gIH0sXG4gIGVtdWxhdGVkX2h1ZV9uYW1lOiB7XG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICBkb21haW5zOiBbXCJlbXVsYXRlZF9odWVcIl0sXG4gIH0sXG4gIGhhYXNrYV9oaWRkZW46IHVuZGVmaW5lZCxcbiAgaGFhc2thX25hbWU6IHVuZGVmaW5lZCxcbiAgaG9tZWJyaWRnZV9oaWRkZW46IHsgdHlwZTogXCJib29sZWFuXCIgfSxcbiAgaG9tZWJyaWRnZV9uYW1lOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgc3VwcG9ydGVkX2ZlYXR1cmVzOiB1bmRlZmluZWQsXG4gIGF0dHJpYnV0aW9uOiB1bmRlZmluZWQsXG4gIGN1c3RvbV91aV9tb3JlX2luZm86IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBjdXN0b21fdWlfc3RhdGVfY2FyZDogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIGRldmljZV9jbGFzczoge1xuICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICBvcHRpb25zOiBoYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRldmljZSBjbGFzc1wiLFxuICAgIGRvbWFpbnM6IFtcImJpbmFyeV9zZW5zb3JcIiwgXCJjb3ZlclwiLCBcInNlbnNvclwiXSxcbiAgfSxcbiAgaGlkZGVuOiB7IHR5cGU6IFwiYm9vbGVhblwiLCBkZXNjcmlwdGlvbjogXCJIaWRlIGZyb20gVUlcIiB9LFxuICBhc3N1bWVkX3N0YXRlOiB7XG4gICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgZG9tYWluczogW1xuICAgICAgXCJzd2l0Y2hcIixcbiAgICAgIFwibGlnaHRcIixcbiAgICAgIFwiY292ZXJcIixcbiAgICAgIFwiY2xpbWF0ZVwiLFxuICAgICAgXCJmYW5cIixcbiAgICAgIFwiZ3JvdXBcIixcbiAgICAgIFwid2F0ZXJfaGVhdGVyXCIsXG4gICAgXSxcbiAgfSxcbiAgaW5pdGlhbF9zdGF0ZToge1xuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgZG9tYWluczogW1wiYXV0b21hdGlvblwiXSxcbiAgfSxcbiAgdW5pdF9vZl9tZWFzdXJlbWVudDogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYXNzQXR0cmlidXRlVXRpbDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbndpbmRvdy5KU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gZnVuY3Rpb24ocHJvcCkgeyByZXR1cm4gcHJvcDsgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc3RhdGljIHN0cmluZyB2YWx1ZSB3aGljaCBjYW4gYmUgdXNlZCB0byBmaWx0ZXJcbiAqIHN0cmluZ3MgYnkgYXNzZXRpbmcgdGhhdCB0aGV5IGhhdmUgYmVlbiBjcmVhdGVkIHZpYSB0aGlzIGNsYXNzLiBUaGVcbiAqIGB2YWx1ZWAgcHJvcGVydHkgcmV0dXJucyB0aGUgc3RyaW5nIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cbmNsYXNzIExpdGVyYWxTdHJpbmcge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB0aGlzLnZhbHVlID0gc3RyaW5nLnRvU3RyaW5nKCk7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gTGl0ZXJhbFN0cmluZyBzdHJpbmcgdmFsdWVcbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gbGl0ZXJhbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTGl0ZXJhbFN0cmluZ30gKi8odmFsdWUpLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi1saXRlcmFsIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbExpdGVyYWwgZnVuY3Rpb246ICR7dmFsdWV9YFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBodG1sVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50IH0gKi8odmFsdWUpLmlubmVySFRNTDtcbiAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gbGl0ZXJhbFZhbHVlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tdGVtcGxhdGUgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sIGZ1bmN0aW9uOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbi8qKlxuICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyB0aGF0IGNyZWF0ZXMgYW4gSFRNTCA8dGVtcGxhdGU+IGVsZW1lbnQgZnJvbSB0aGVcbiAqIGNvbnRlbnRzIG9mIHRoZSBzdHJpbmcuXG4gKlxuICogVGhpcyBhbGxvd3MgeW91IHRvIHdyaXRlIGEgUG9seW1lciBUZW1wbGF0ZSBpbiBKYXZhU2NyaXB0LlxuICpcbiAqIFRlbXBsYXRlcyBjYW4gYmUgY29tcG9zZWQgYnkgaW50ZXJwb2xhdGluZyBgSFRNTFRlbXBsYXRlRWxlbWVudGBzIGluXG4gKiBleHByZXNzaW9ucyBpbiB0aGUgSmF2YVNjcmlwdCB0ZW1wbGF0ZSBsaXRlcmFsLiBUaGUgbmVzdGVkIHRlbXBsYXRlJ3NcbiAqIGBpbm5lckhUTUxgIGlzIGluY2x1ZGVkIGluIHRoZSBjb250YWluaW5nIHRlbXBsYXRlLiAgVGhlIG9ubHkgb3RoZXJcbiAqIHZhbHVlcyBhbGxvd2VkIGluIGV4cHJlc3Npb25zIGFyZSB0aG9zZSByZXR1cm5lZCBmcm9tIGBodG1sTGl0ZXJhbGBcbiAqIHdoaWNoIGVuc3VyZXMgb25seSBsaXRlcmFsIHZhbHVlcyBmcm9tIEpTIHNvdXJjZSBldmVyIHJlYWNoIHRoZSBIVE1MLCB0b1xuICogZ3VhcmQgYWdhaW5zdCBYU1Mgcmlza3MuXG4gKlxuICogQWxsIG90aGVyIHZhbHVlcyBhcmUgZGlzYWxsb3dlZCBpbiBleHByZXNzaW9ucyB0byBoZWxwIHByZXZlbnQgWFNTXG4gKiBhdHRhY2tzOyBob3dldmVyLCBgaHRtbExpdGVyYWxgIGNhbiBiZSB1c2VkIHRvIGNvbXBvc2Ugc3RhdGljXG4gKiBzdHJpbmcgdmFsdWVzIGludG8gdGVtcGxhdGVzLiBUaGlzIGlzIHVzZWZ1bCB0byBjb21wb3NlIHN0cmluZ3MgaW50b1xuICogcGxhY2VzIHRoYXQgZG8gbm90IGFjY2VwdCBodG1sLCBsaWtlIHRoZSBjc3MgdGV4dCBvZiBhIGBzdHlsZWBcbiAqIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+Omhvc3R7IGNvbnRlbnQ6XCIuLi5cIiB9PC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHt0aGlzLnBhcnRpYWxUZW1wbGF0ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgcGFydGlhbFRlbXBsYXRlKCkgeyByZXR1cm4gaHRtbGA8c3Bhbj5QYXJ0aWFsITwvc3Bhbj5gOyB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gQ29uc3RydWN0ZWQgSFRNTFRlbXBsYXRlRWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IGZ1bmN0aW9uIGh0bWwoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gKi8oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgaHRtbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbi8qKlxuICogQW4gaHRtbCBsaXRlcmFsIHRhZyB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYGh0bWxgIHRvIGNvbXBvc2UuXG4gKiBhIGxpdGVyYWwgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPlxuICogICAgICAgICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAqICAgICAgICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZSgpfVxuICogICAgICAgICA8L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3N0YXRpY1ZhbHVlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBzdHlsZVRlbXBsYXRlKCkge1xuICogICAgICAgIHJldHVybiBodG1sTGl0ZXJhbGAuc2hhZG93ZWQgeyBiYWNrZ3JvdW5kOiBncmF5OyB9YDtcbiAqICAgICB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshTGl0ZXJhbFN0cmluZ30gQ29uc3RydWN0ZWQgbGl0ZXJhbCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWxMaXRlcmFsID0gZnVuY3Rpb24oc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIHJldHVybiBuZXcgTGl0ZXJhbFN0cmluZyh2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGxpdGVyYWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pKTtcbn07XG4iLCJpbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBDdWlCYXNlRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopIHtcbiAgICBsZXQgZXh0cmFzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9kYXRhX3RlbXBsYXRlO1xuICAgIGlmIChleHRyYXMpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYXMpKSB7XG4gICAgICAgIGV4dHJhcyA9IFtleHRyYXNdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhcy5tYXAoZXh0cmEgPT4gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgZXh0cmEsXG4gICAgICAgIGhhc3MsXG4gICAgICAgIGhhc3Muc3RhdGVzLFxuICAgICAgICBzdGF0ZU9iaixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgICAgLyogYXR0cmlidXRlPSAqLyB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlT2JqLnN0YXRlLFxuICAgICAgKSkuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQgIT09IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSkge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGV4dHJhLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQ7XG4gIH1cblxuICBoYXNFeHRyYShleHRyYSkge1xuICAgIHJldHVybiBleHRyYS5sZW5ndGggPiAwO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDdWlCYXNlRWxlbWVudDtcbiIsImltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgRHluYW1pY0VsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBlbGVtZW50TmFtZTogU3RyaW5nLFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ29ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKScsXG4gICAgXTtcbiAgfVxuXG4gIG9ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKSB7XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgIGVsZW1lbnROYW1lID8gZWxlbWVudE5hbWUudG9VcHBlckNhc2UoKSA6ICdESVYnLFxuICAgICAgeyBoYXNzLCBzdGF0ZU9iaiwgaW5EaWFsb2cgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy1lbGVtZW50JywgRHluYW1pY0VsZW1lbnQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcblxuaW1wb3J0ICcuL2R5bmFtaWMtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ3N0YXRlLWNhcmQtZGlzcGxheScpLnRoZW4oKCkgPT4ge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIER5bmFtaWNXaXRoRXh0cmEgZXh0ZW5kcyBjdXN0b21FbGVtZW50cy5nZXQoJ3N0YXRlLWNhcmQtZGlzcGxheScpIHtcbiAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1mbGV4LWZhY3RvcnNcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sLXdyYXBwZXIge1xuICAgICAgICAgIG1hcmdpbjogLTRweCAtMTZweCAtNHB4IDA7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtc3RhdGUtbGFiZWwtYmFkZ2Uge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgZHluYW1pYy1lbGVtZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICAjb3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgICNsb2NrIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICB9XG4gICAgICAgICNsb2NrLmhhLWNvdmVyLWNvbnRyb2xzIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmV4dHJhIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLXNpemU6IDM2cHg7XG4gICAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1mb250LXNpemU6IDEuMmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPSdbW2V4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKV1dIGhvcml6b250YWwgbGF5b3V0Jz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2V4dHJhT2JqVmlzaWJsZV1dJz5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPSdbW2V4dHJhT2JqXV0nXG4gICAgICAgICAgICAgICAgICAgIG9uLWRvbS1jaGFuZ2U9J2V4dHJhRG9tQ2hhbmdlZCc+XG4gICAgICAgICAgICA8aGEtc3RhdGUtbGFiZWwtYmFkZ2UgaGFzcz0nW1toYXNzXV0nIHN0YXRlPSdbW2l0ZW1dXSc+PC9oYS1zdGF0ZS1sYWJlbC1iYWRnZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaildXSc+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZHluYW1pYy1lbGVtZW50XG4gICAgICAgICAgICAgICAgICBjbGFzcz0nZmxleCdcbiAgICAgICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQtbmFtZT0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgICAgPC9keW5hbWljLWVsZW1lbnQ+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaildXSc+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlcIiBvbi1jbGljaz0nY2xpY2tIYW5kbGVyJz5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrXV0nPlxuICAgICAgICAgICAgICAgICAgICA8aXJvbi1pY29uIGlkPVwibG9ja1wiIGNsYXNzJD1cIltbY29udHJvbEVsZW1lbnRdXVwiIGljb249XCJtZGk6bG9jay1vdXRsaW5lXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWNvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdGUnPltbY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgICBpbkRpYWxvZzoge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgICBleHRyYU9iajoge1xuICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBfYXR0YWNoZWQpJyxcbiAgICAgICAgfSxcbiAgICAgICAgX2F0dGFjaGVkOiBCb29sZWFuLFxuICAgICAgICBleHRyYU9ialZpc2libGU6IHtcbiAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhVmlzaWJsZShleHRyYU9iaiwgaW5EaWFsb2cpJyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fYXR0YWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIGF0dGFjaGVkKSB7XG4gICAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfYmFkZ2UgfHwgIWF0dGFjaGVkKSByZXR1cm4gW107XG4gICAgICBsZXQgZXh0cmFCYWRnZXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dHJhQmFkZ2VzKSkge1xuICAgICAgICBleHRyYUJhZGdlcyA9IFtleHRyYUJhZGdlc107XG4gICAgICB9XG4gICAgICByZXR1cm4gZXh0cmFCYWRnZXMubWFwKChleHRyYUJhZGdlKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBpZiAoZXh0cmFCYWRnZS5lbnRpdHlfaWQgJiYgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdKSB7XG4gICAgICAgICAgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgICAgdGhpcywgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdLCB0aGlzLmluRGlhbG9nLFxuICAgICAgICAgICAgLyogYWxsb3dIaWRkZW49ICovZmFsc2UpKTtcbiAgICAgICAgfSBlbHNlIGlmIChleHRyYUJhZGdlLmF0dHJpYnV0ZSAmJlxuICAgICAgICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXNbZXh0cmFCYWRnZS5hdHRyaWJ1dGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICBzdGF0ZTogU3RyaW5nKHN0YXRlT2JqLmF0dHJpYnV0ZXNbZXh0cmFCYWRnZS5hdHRyaWJ1dGVdKSxcbiAgICAgICAgICAgIGVudGl0eV9pZDogJ25vbmUubm9uZScsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IGV4dHJhQmFkZ2UudW5pdCB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICAgICAgICBsZXQgYmxhY2tsaXN0ID0gZXh0cmFCYWRnZS5ibGFja2xpc3Rfc3RhdGVzO1xuICAgICAgICBpZiAoYmxhY2tsaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmxhY2tsaXN0KSkge1xuICAgICAgICAgICAgYmxhY2tsaXN0ID0gW2JsYWNrbGlzdF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChibGFja2xpc3Quc29tZSh2ID0+IFJlZ0V4cCh2KS50ZXN0KHJlc3VsdC5zdGF0ZS50b1N0cmluZygpKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuX2VudGl0eURpc3BsYXkgPSAnJztcbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCB7IGZyaWVuZGx5X25hbWU6ICcnIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSkuZmlsdGVyKGV4dHJhQmFkZ2UgPT4gZXh0cmFCYWRnZSAhPSBudWxsKTtcbiAgICB9XG5cbiAgICBjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZykge1xuICAgICAgaWYgKGluRGlhbG9nIHx8ICFleHRyYU9iaikgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGV4dHJhT2JqLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGV4dHJhT2JqVmlzaWJsZSA/ICdleHRyYScgOiAnJztcbiAgICB9XG5cbiAgICBfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhpZGVfY29udHJvbDtcbiAgICB9XG5cbiAgICBjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKSB7XG4gICAgICAvLyBoYUxvY2FsaXplIHJlbW92ZWQgaW4gMC42MVxuICAgICAgcmV0dXJuIHN1cGVyLmNvbXB1dGVTdGF0ZURpc3BsYXkodGhpcy5oYUxvY2FsaXplIHx8IHRoaXMubG9jYWxpemUsIHN0YXRlT2JqKTtcbiAgICB9XG5cbiAgICBpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9scyB8fFxuICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2s7XG4gICAgfVxuXG4gICAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICBjb25zdCBsb2NrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2NrJyk7XG4gICAgICBpZiAobG9jaykge1xuICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3Blbi1vdXRsaW5lJztcbiAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJzAuMSc7XG4gICAgICB9XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3V0bGluZSc7XG4gICAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwMDApO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBhcHBseVRoZW1lcyhoYXNzLCBlbGVtZW50LCBzdGF0ZU9iaikge1xuICAgICAgY29uc3QgdGhlbWVOYW1lID0gc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCc7XG4gICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgZWxlbWVudCwgaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgdGhlbWVOYW1lKTtcbiAgICB9XG5cbiAgICBleHRyYURvbUNoYW5nZWQoKSB7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKVxuICAgICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwbHlUaGVtZXModGhpcy5oYXNzLCBlbGVtLCBlbGVtLnN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy13aXRoLWV4dHJhJywgRHluYW1pY1dpdGhFeHRyYSk7XG59KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgRXZlbnRzTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2V2ZW50cy1taXhpbi5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbVVpIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lci5FbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPjwvc3R5bGU+XG4gICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPSdtZGk6YXJyb3ctbGVmdCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdfYmFja0hhbmRsZXInXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPGRpdiBtYWluLXRpdGxlPkN1c3RvbSBVSSBzZXR0aW5nczwvZGl2PlxuICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT0nW1tpc1dpZGVdXSc+XG4gICAgICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9J0RldmljZSBuYW1lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgU2V0IGRldmljZSBuYW1lIHNvIHRoYXQgeW91IGNhbiByZWZlcmVuY2UgaXQgaW4gcGVyLWRldmljZSBzZXR0aW5nc1xuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPSdOYW1lJ1xuICAgICAgICAgICAgICB2YWx1ZT0ne3tuYW1lfX0nXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wYXBlci1jYXJkPlxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnbmFtZUNoYW5nZWQnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLm5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICB9XG5cbiAgbmFtZUNoYW5nZWQobmFtZSkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5zZXROYW1lKG5hbWUpO1xuICB9XG5cbiAgX2JhY2tIYW5kbGVyKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB0aGlzLmZpcmUoJ2xvY2F0aW9uLWNoYW5nZWQnKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS1jb25maWctY3VzdG9tLXVpJywgSGFDb25maWdDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhVGhlbWVkU2xpZGVyIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0taGEtdGhlbWVkLXNsaWRlci1tYXJnaW4sIGluaXRpYWwpO1xuICAgICAgfVxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXItcGluLXN0YXJ0LWNvbG9yOiAgdmFyKC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbi5pcy1vbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXNsaWRlciB7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWhhLXBhcGVyLXNsaWRlci13aWR0aCwgMjAwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItc2xpZGVyXG4gICAgICAgICBtaW49J1tbX3RoZW1lZE1pbl1dJ1xuICAgICAgICAgbWF4PSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1heFwiLCBtYXgpXV0nXG4gICAgICAgICBwaW49J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwicGluXCIsIHBpbildXSdcbiAgICAgICAgIGNsYXNzJD0nW1tjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIF90aGVtZWRNaW4pXV0nIHZhbHVlPSdbW3ZhbHVlXV0nXG4gICAgICAgICBvbi1jaGFuZ2U9J3ZhbHVlQ2hhbmdlZCc+XG4gICAgPC9wYXBlci1zbGlkZXI+XG4gICAgYDtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbiA9ICF0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoaXMudGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbik7XG4gICAgdGhpcy5jb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoaXMudGhlbWUsIHRoaXMuZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgIH0sXG4gICAgICBwaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlzT246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICB0aGVtZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX3RoZW1lZE1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWluXCIsIG1pbiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpJyxcbiAgICBdO1xuICB9XG5cbiAgY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKSB7XG4gICAgdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkID0gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZShcbiAgICAgIHRoZW1lLCAncmVwb3J0X3doZW5fbm90X2NoYW5nZWQnLCAhZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBhdHRyLCBkZWYpIHtcbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGlmIChhdHRyIGluIHRoZW1lKSB7XG4gICAgICAgIHJldHVybiB0aGVtZVthdHRyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgdGhlbWVkTWluKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChpc09uKSB7XG4gICAgICByZXN1bHQgKz0gJ2lzLW9uICc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pIHx8IHRoZW1lZE1pbiA9PT0gMCkge1xuICAgICAgLy8gSWYgb2ZmV2hlbk1pbiBpcyBlbmFibGVkIGRvbid0IGN1c3RvbWl6ZS5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3Jlc3VsdH1kaXNhYmxlLW9mZi13aGVuLW1pbmA7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCAmJiB0aGlzLnZhbHVlID09PSBldi50YXJnZXQudmFsdWUpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLXRoZW1lZC1zbGlkZXInLCBIYVRoZW1lZFNsaWRlcik7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4udHMnO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcbmltcG9ydCBzdGF0ZUNhcmRUeXBlIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfY2FyZF90eXBlLnRzJztcblxuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyc7XG5cbmNvbnN0IFNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTID0gWydjb25maWd1cmF0b3InXTtcbmNvbnN0IERPTUFJTl9UT19TTElERVJfU1VQUE9SVCA9IHtcbiAgbGlnaHQ6IDEsIC8vIFNVUFBPUlRfQlJJR0hUTkVTU1xuICBjb3ZlcjogNCwgLy8gU1VQUE9SVF9TRVRfUE9TSVRJT05cbiAgY2xpbWF0ZTogMSwgLy8gU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbn07XG5jb25zdCBUWVBFX1RPX0NPTlRST0wgPSB7XG4gIHRvZ2dsZTogJ2hhLWVudGl0eS10b2dnbGUnLFxuICBkaXNwbGF5OiAnJyxcbiAgY292ZXI6ICdoYS1jb3Zlci1jb250cm9scycsXG59O1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZEN1c3RvbVVpIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiknLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gJ0RJVicgJiZcbiAgICAgICAgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykgfHwgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2hpbGQtY2FyZCcpKSkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAvLyBTaW5jZSB0aGlzIGRvZXNuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIC0gbm8gbmVlZCB0byBjbGVhciBpdC5cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLCAndmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCBpbmhlcml0KScpO1xuXG4gICAgICAvLyBQb2x5ZmlsbCAndXBkYXRlU3R5bGVzJy5cbiAgICAgIGlmICghY29udGFpbmVyLnVwZGF0ZVN0eWxlcykge1xuICAgICAgICBjb250YWluZXIudXBkYXRlU3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBzdHlsZXNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VkKHRoaXMuaGFzcywgdGhpcy5pbkRpYWxvZywgdGhpcy5zdGF0ZU9iaik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICB0aGlzLl9jb250YWluZXIsIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgJ2RlZmF1bHQnKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBiYWRnZU1vZGUoaGFzcywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIGNvbnN0IHN0YXRlcyA9IFtdO1xuICAgIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbaWRdO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBJRCAke2lkfSBpbiBncm91cCAke3N0YXRlT2JqLmVudGl0eV9pZH1gKTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0IHx8XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0LmluY2x1ZGVzKHN0YXRlLmVudGl0eV9pZCkpIHtcbiAgICAgICAgICBzdGF0ZXMucHVzaCh3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBzdGF0ZSwgZmFsc2UgLyogaW5EaWFsb2cgKi8sIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZU9iaik7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykpIHtcbiAgICAgICAgICBwYXJhbXMubWFyZ2luID0gJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLW1hcmdpbiwgMCknO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAnSEEtQkFER0VTLUNBUkQnLFxuICAgICAgeyBoYXNzLCBzdGF0ZXMgfSk7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIHdpZHRoOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtd2lkdGgsIGluaXRpYWwpJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtdGV4dC1hbGlnbiwgaW5pdGlhbCknLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubGFzdENoaWxkLnN0eWxlLmZvbnRTaXplID0gJzg1JSc7XG5cbiAgICAvLyBTaW5jZSB0aGlzIHZhcmlhYmxlIG9ubHkgYWZmZWN0cyBiYWRnZXMgbW9kZSAtIG5vIG5lZWQgdG8gY2xlYW4gaXQgdXAuXG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oYS1zdGF0ZS1sYWJlbC1iYWRnZS1tYXJnaW4tYm90dG9tJywgJzAnKTtcbiAgfVxuXG4gIGNsZWFuQmFkZ2VTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnIH0pO1xuICB9XG5cbiAgYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopIHtcbiAgICBsZXQgdGhlbWVUYXJnZXQgPSB0aGlzO1xuICAgIGxldCB0aGVtZU5hbWUgPSAnZGVmYXVsdCc7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhlbWVUYXJnZXQgPSB0aGlzLl9jb250YWluZXI7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICB0aGVtZU5hbWUgPSBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lO1xuICAgIH1cbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgIHRoZW1lVGFyZ2V0LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgbWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSB7XG4gICAgaWYgKCFtb2RpZmllZE9iaikge1xuICAgICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNsaWRlckVsaWdpYmxlXyhkb21haW4sIG9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiZcbiAgICAgIChET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmIG9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykgJiZcbiAgICAgIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAmJiBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgIT09ICduby1zbGlkZXInO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MgfHwgIXRoaXMuX2lzQXR0YWNoZWQpIHJldHVybjtcbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICAgIGNvbnN0IG1vZGlmaWVkT2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgdGhpcywgc3RhdGVPYmosIGluRGlhbG9nLCB0cnVlIC8qIGFsbG93SGlkZGVuICovKTtcblxuICAgIGlmICh0aGlzLm1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikpIHJldHVybjtcblxuICAgIHRoaXMuYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopO1xuXG4gICAgaWYgKCFpbkRpYWxvZyAmJiBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSA9PT0gJ2JhZGdlcycpIHtcbiAgICAgIHRoaXMuYmFkZ2VNb2RlKGhhc3MsIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfVxuICB9XG5cbiAgcmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgdGhpcy5jbGVhbkJhZGdlU3R5bGUoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGhhc3MsXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIGluRGlhbG9nLFxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxTdGF0ZUNhcmRUeXBlID0gc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaik7XG4gICAgbGV0IGN1c3RvbVN0YXRlQ2FyZFR5cGU7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5O1xuXG4gICAgaWYgKGRvbWFpbiA9PT0gJ2xpZ2h0JyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gICAgICAgIHNlcnZpY2VNaW46ICd0dXJuX29mZicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICd0dXJuX29uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnYnJpZ2h0bmVzcycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY292ZXItY29udHJvbHMnLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ2Nsb3NlX2NvdmVyJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF9jb3Zlcl9wb3NpdGlvbicsXG4gICAgICAgIHNldFZhbHVlTmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnY3VycmVudF9wb3NpdGlvbicsXG4gICAgICAgIG5hbWVPbjogJ29wZW4nLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjbGltYXRlJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY2xpbWF0ZS1zdGF0ZScsXG4gICAgICAgIG1pbjogc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcCB8fCAtMTAwLFxuICAgICAgICBtYXg6IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXAgfHwgMjAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHZhbHVlTmFtZTogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgbmFtZU9uOiAnJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV07XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZCAmJlxuICAgICAgICAgICAgICAgIVNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTLmluY2x1ZGVzKG9yaWdpbmFsU3RhdGVDYXJkVHlwZSkpIHtcbiAgICAgIHBhcmFtcy5pbkRpYWxvZyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gJyc7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudDtcbiAgICB9XG5cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgKHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgfHwgY3VzdG9tU3RhdGVDYXJkVHlwZSB8fCBgU1RBVEUtQ0FSRC0ke29yaWdpbmFsU3RhdGVDYXJkVHlwZX1gKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcGFyYW1zKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLWN1c3RvbS11aScsIFN0YXRlQ2FyZEN1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuaW1wb3J0ICcuL2hhLXRoZW1lZC1zbGlkZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLnNlY29uZC1saW5lLCAuc3RhdGUtYW5kLXRvZ2dsZSwgLnN0YXRlLWluZm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1hbmQtdG9nZ2xlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc2Vjb25kLWxpbmUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kLWxpbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgIH1cbiAgICAgIC5zdHJldGNoIC5zZWNvbmQtbGluZSwgLnN0cmV0Y2ggaGEtdGhlbWVkLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWhhLXBhcGVyLXNsaWRlci13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWluZm8ge1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICBoYS10aGVtZWQtc2xpZGVyLCAudG9wLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAudG9wLXdyYXBwZXIuc3RyZXRjaCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcyQ9J2hvcml6b250YWwgbGF5b3V0IGZsZXggdG9wLXdyYXBwZXIgW1tfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpXV0nPlxuICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkIGZsZXgtYXV0byBzdGF0ZS1hbmQtdG9nZ2xlJz5cbiAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvIGZsZXgtYXV0bydcbiAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2JyZWFrU2xpZGVyXV0nIGNsYXNzPSdoaWRkZW4nPlxuICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc2hvd1NsaWRlcl1dJyByZXN0YW1wPlxuICAgICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBmbGV4LWF1dG8gZW5kLWp1c3RpZmllZCBzZWNvbmQtbGluZSc+XG4gICAgICAgICAgPGhhLXRoZW1lZC1zbGlkZXJcbiAgICAgICAgICAgIGlkPSdzbGlkZXInXG4gICAgICAgICAgICBtYXg9W1ttYXhdXVxuICAgICAgICAgICAgbWluPVtbbWluXV1cbiAgICAgICAgICAgIHRoZW1lPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuc2xpZGVyX3RoZW1lXV0nXG4gICAgICAgICAgICBpcy1vbj0nW1tpc09uKHN0YXRlT2JqLCBuYW1lT24pXV0nXG4gICAgICAgICAgICB2YWx1ZT0ne3tzbGlkZXJWYWx1ZX19J1xuICAgICAgICAgICAgZGlzYWJsZS1vZmYtd2hlbi1taW49J3t7ZGlzYWJsZU9mZldoZW5NaW59fSdcbiAgICAgICAgICAgIG9uLWNoYW5nZT0nc2xpZGVyQ2hhbmdlZCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdzdG9wUHJvcGFnYXRpb24nPlxuICAgICAgICAgIDwvaGEtdGhlbWVkLXNsaWRlcj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWJyZWFrU2xpZGVyXV0nPlxuICAgICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1pbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1heDogU3RyaW5nLFxuICAgICAgdmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICBzZXRWYWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIG5hbWVPbjogeyB0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb24nIH0sXG4gICAgICBtaW46IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMCB9LFxuICAgICAgbWF4OiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDI1NSB9LFxuXG4gICAgICBzbGlkZXJWYWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiBCb29sZWFuLFxuICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgc3RyZXRjaFNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYnJlYWtTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGhpZGVTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGxpbmVUb29Mb25nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBtaW5MaW5lQnJlYWs6IE51bWJlcixcbiAgICAgIG1heExpbmVCcmVhazogTnVtYmVyLFxuICAgICAgc2hvd1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX29uSXJvblJlc2l6ZSA9IHRoaXMuX29uSXJvblJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5faXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKScsXG4gICAgXTtcbiAgfVxuXG4gIF93YWl0Rm9yTGF5b3V0KCkge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0ZWQpIHJldHVybjtcbiAgICB0aGlzLl9zZXRNb2RlKCk7XG4gICAgaWYgKHRoaXMuX2ZyYW1lSWQpIHJldHVybjtcbiAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gZmFsc2U7XG4gICAgdGhpcy5fZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uSXJvblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldE1vZGUoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgaGlkZVNsaWRlcjogdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInICYmIHRoaXMubGluZVRvb0xvbmcsXG4gICAgICBicmVha1NsaWRlcjpcbiAgICAgICAgICAgKHRoaXMubW9kZSA9PT0gJ2JyZWFrLXNsaWRlcicgfHwgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSAmJlxuICAgICAgICAgICB0aGlzLmxpbmVUb29Mb25nLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLnNob3dTbGlkZXIpIHtcbiAgICAgIG9iai5icmVha1NsaWRlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICB9XG5cbiAgX29uSXJvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVhZHlUb0NvbXB1dGUpIHJldHVybjtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbm8tc2xpZGVyJykge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgaGlkZVNsaWRlcjogdHJ1ZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldkJyZWFrU2xpZGVyID0gdGhpcy5icmVha1NsaWRlcjtcbiAgICBjb25zdCBwcmV2SGlkZVNsaWRlciA9IHRoaXMuaGlkZVNsaWRlcjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuJDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPT09IDApIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPD0gdGhpcy5taW5MaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyV2lkdGggPj0gdGhpcy5tYXhMaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZIaWRlU2xpZGVyICYmIHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHVuaGlkZSB0aGUgc2xpZGVyIGluIG9yZGVyIHRvIHJlY2FsY3VsYXRlIGhlaWdodC5cbiAgICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgc3RhdGVIZWlnaHQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnN0YXRlLWluZm8nKS5jbGllbnRIZWlnaHQ7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gY29udGFpbmVySGVpZ2h0ID4gc3RhdGVIZWlnaHQgKiAxLjU7XG4gICAgICBpZiAodGhpcy5saW5lVG9vTG9uZykge1xuICAgICAgICB0aGlzLm1pbkxpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgfSBlbHNlIGlmICghcHJldkJyZWFrU2xpZGVyKSB7XG4gICAgICAgIHRoaXMubWF4TGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgfVxuXG4gIF9jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZS1saW5lJykge1xuICAgICAgcmV0dXJuICdub3dyYXAnO1xuICAgIH1cbiAgICBpZiAoc3RyZXRjaFNsaWRlciAmJiBsaW5lVG9vTG9uZykge1xuICAgICAgcmV0dXJuICdzdHJldGNoIHdyYXAnO1xuICAgIH1cbiAgICByZXR1cm4gJ3dyYXAnO1xuICB9XG5cbiAgX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKSB7XG4gICAgaWYgKGluRGlhbG9nIHx8IGhpZGVTbGlkZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBjb25zdCBwYXJhbSA9IHsgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9O1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm47XG4gICAgbGV0IHRhcmdldCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVyJyk7XG4gICAgaWYgKGV2LnRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAvLyBObyBTaGFkb3cgRE9NIC0gd2UgaGF2ZSBhY2Nlc3MgdG8gb3JpZ2luYWwgdGFyZ2V0LlxuICAgICAgKHsgdGFyZ2V0IH0gPSBldik7XG4gICAgfSBlbHNlIGlmIChldi5wYXRoKSB7XG4gICAgICBbdGFyZ2V0XSA9IGV2LnBhdGg7XG4gICAgfSBlbHNlIGlmIChldi5jb21wb3NlZFBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gMCB8fCAodmFsdWUgPD0gdGFyZ2V0Lm1pbiAmJiAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikpIHtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWluLCBwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtW3RoaXMuc2V0VmFsdWVOYW1lIHx8IHRoaXMudmFsdWVOYW1lXSA9IHZhbHVlO1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNYXgsIHBhcmFtKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgc2xpZGVyVmFsdWU6IHRoaXMuaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSA/IHN0YXRlT2JqLmF0dHJpYnV0ZXNbdmFsdWVOYW1lXSA6IDAsXG4gICAgfTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB7XG4gICAgICAgIG1pbkxpbmVCcmVhazogMCxcbiAgICAgICAgbWF4TGluZUJyZWFrOiA5OTksXG4gICAgICAgIGhpZGVTbGlkZXI6IGZhbHNlLFxuICAgICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgICAgbW9kZTogc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUsXG4gICAgICAgIHN0cmV0Y2hTbGlkZXI6ICEhc3RhdGVPYmouYXR0cmlidXRlcy5zdHJldGNoX3NsaWRlcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBpc09uKHN0YXRlT2JqLCBuYW1lT24pIHtcbiAgICByZXR1cm4gc3RhdGVPYmogJiYgKCFuYW1lT24gfHwgc3RhdGVPYmouc3RhdGUgPT09IG5hbWVPbik7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJywgU3RhdGVDYXJkV2l0aFNsaWRlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkJz5cbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYVxuICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJ1xuICAgICAgICAgIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz5cbiAgICAgIDwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIpO1xuIiwiLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuZXhwb3J0IGRlZmF1bHQgKHN1cGVyQ2xhc3MpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBFdmVudHNNaXhpbiBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAgICogICBwYXlsb2FkLlxuICAgICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICAqL1xuICAgIGZpcmUodHlwZSwgZGV0YWlsID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgICAgICBidWJibGVzOiBvcHRpb25zLmJ1YmJsZXMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IEJvb2xlYW4ob3B0aW9ucy5jYW5jZWxhYmxlKSxcbiAgICAgICAgY29tcG9zZWQ6IG9wdGlvbnMuY29tcG9zZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmNvbXBvc2VkLFxuICAgICAgfSk7XG4gICAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgICBjb25zdCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IHRoaXM7XG4gICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRzTWl4aW47XG59O1xuIiwiaW1wb3J0IGhhc3NBdHRyaWJ1dGVzVXRpbCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsLmpzJztcblxud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsIHx8IHt9O1xuY29uc3QgU1VQUE9SVEVEX1NMSURFUl9NT0RFUyA9IFtcbiAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG5dO1xuXG5jb25zdCBjdXN0b21VaUF0dHJpYnV0ZXMgPSB7XG4gIGdyb3VwOiB1bmRlZmluZWQsXG4gIGRldmljZTogdW5kZWZpbmVkLFxuICB0ZW1wbGF0ZXM6IHVuZGVmaW5lZCxcbiAgc3RhdGU6IHVuZGVmaW5lZCxcbiAgX3N0YXRlRGlzcGxheTogdW5kZWZpbmVkLFxuICBjb250cm9sX2VsZW1lbnQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgc3RhdGVfY2FyZF9tb2RlOiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBsaWdodDogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY292ZXI6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNsaW1hdGU6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgICcqJzogWydiYWRnZXMnXSxcbiAgICB9LFxuICB9LFxuICBzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgYmFkZ2VzX2xpc3Q6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHNob3dfbGFzdF9jaGFuZ2VkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2NvbnRyb2w6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGV4dHJhX2RhdGFfdGVtcGxhdGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgZXh0cmFfYmFkZ2U6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHN0cmV0Y2hfc2xpZGVyOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBzbGlkZXJfdGhlbWU6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHRoZW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGNvbmZpcm1fY29udHJvbHM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2luX2RlZmF1bHRfdmlldzogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaWNvbl9jb2xvcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxufTtcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZXNVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVM7XG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gaGFzc0F0dHJpYnV0ZXNVdGlsLlVOS05PV05fVFlQRTtcbk9iamVjdC5hc3NpZ24od2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGN1c3RvbVVpQXR0cmlidXRlcyk7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4udHMnO1xuaW1wb3J0IGdldFZpZXdFbnRpdGllcyBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF92aWV3X2VudGl0aWVzLnRzJztcblxuaW1wb3J0ICcuLi9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzJztcbmltcG9ydCBWRVJTSU9OIGZyb20gJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgJy4vaGFzcy1hdHRyaWJ1dGUtdXRpbC5qcyc7XG5cbndpbmRvdy5jdXN0b21VSSA9IHdpbmRvdy5jdXN0b21VSSB8fCB7XG4gIFNVUFBPUlRFRF9TTElERVJfTU9ERVM6IFtcbiAgICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbiAgXSxcblxuICBkb21Ib3N0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gZG9jdW1lbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtLmdldFJvb3ROb2RlKCk7XG4gICAgcmV0dXJuIChyb290IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyAvKiogQHR5cGUge1NoYWRvd1Jvb3R9ICovIChyb290KS5ob3N0IDogcm9vdDtcbiAgfSxcblxuICBsaWdodE9yU2hhZG93KGVsZW0sIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGVsZW0uc2hhZG93Um9vdCA/XG4gICAgICBlbGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOlxuICAgICAgZWxlbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfSxcblxuICBnZXRFbGVtZW50SGllcmFyY2h5KHJvb3QsIGhpZXJhcmNoeSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlbGVtID0gaGllcmFyY2h5LnNoaWZ0KCk7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3cocm9vdCwgZWxlbSksIGhpZXJhcmNoeSk7XG4gICAgfVxuICAgIHJldHVybiByb290O1xuICB9LFxuXG4gIGdldENvbnRleHQoZWxlbSkge1xuICAgIGlmIChlbGVtLl9jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW0uX2NvbnRleHQgPSBbXTtcbiAgICAgIGZvciAobGV0IGVsZW1lbnQgPSAoZWxlbS50YWdOYW1lID09PSAnSEEtRU5USVRJRVMtQ0FSRCcgPyB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtKSA6IGVsZW0pO1xuICAgICAgICBlbGVtZW50OyBlbGVtZW50ID0gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbWVudCkpIHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICBjYXNlICdIQS1FTlRJVElFUy1DQVJEJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5KSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50Lmdyb3VwRW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkgPT09IGZhbHNlICYmIGVsZW1lbnQuc3RhdGVzICYmIGVsZW1lbnQuc3RhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goYGdyb3VwLiR7Y29tcHV0ZVN0YXRlRG9tYWluKGVsZW1lbnQuc3RhdGVzWzBdKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ01PUkUtSU5GTy1HUk9VUCc6XG4gICAgICAgICAgY2FzZSAnU1RBVEUtQ0FSRC1DT05URU5UJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LnN0YXRlT2JqLmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIQS1DQVJEUyc6XG4gICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpIHx8ICdkZWZhdWx0X3ZpZXcnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbS5fY29udGV4dC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtLl9jb250ZXh0O1xuICB9LFxuXG4gIGZpbmRNYXRjaChrZXksIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHJldHVybiBudWxsO1xuICAgIGlmIChvcHRpb25zW2tleV0pIHJldHVybiBrZXk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbmQob3B0aW9uID0+IGtleS5tYXRjaChgXiR7b3B0aW9ufSRgKSk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2gobmFtZSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VbbWF0Y2hdKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0Q29udGV4dChlbGVtKTtcbiAgICBpZiAoIWNvbnRleHQpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCkge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG4gICAgY29udGV4dC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKGMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYXR0cmlidXRlcywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBfc2V0S2VlcChvYmosIHZhbHVlKSB7XG4gICAgaWYgKG9iai5fY3VpX2tlZXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gb2JqLl9jdWlfa2VlcCAmJiB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFhdHRyaWJ1dGVzLnRlbXBsYXRlcykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCB0cnVlKTtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgbmV3QXR0cmlidXRlcyA9IHt9O1xuICAgIGxldCBoYXNHbG9iYWwgPSBmYWxzZTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMudGVtcGxhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gYXR0cmlidXRlcy50ZW1wbGF0ZXNba2V5XTtcbiAgICAgIGlmICh0ZW1wbGF0ZS5tYXRjaCgvXFxiKGVudGl0aWVzfGhhc3MpXFxiLykpIHtcbiAgICAgICAgaGFzR2xvYmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgdGVtcGxhdGUsIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMsXG4gICAgICAgIChzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzICYmIHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXNba2V5XSkgfHxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSxcbiAgICAgICAgc3RhdGVPYmoudW50ZW1wbGF0ZWRfc3RhdGUgfHwgc3RhdGVPYmouc3RhdGUpO1xuICAgICAgLy8gSW4gY2FzZSBvZiBudWxsIGRvbid0IHNldCB0aGUgdmFsdWUuXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgIG5ld0F0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ3N0YXRlJykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLnN0YXRlKSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnX3N0YXRlRGlzcGxheScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5KSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IGF0dHJpYnV0ZXNba2V5XSkge1xuICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosICFoYXNHbG9iYWwpO1xuICAgIGlmICghaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcyA9PT0gYXR0cmlidXRlcykge1xuICAgICAgLy8gV2UgYXJlIG9wZXJhdGluZyBvbiByZWFsIGF0dHJpYnV0ZXMuIFJlcGxhY2UgdGhlbS5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIG5ld0F0dHJpYnV0ZXMpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnc3RhdGUnKSkge1xuICAgICAgICBpZiAobmV3QXR0cmlidXRlcy5zdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5zdGF0ZSA9IFN0cmluZyhuZXdBdHRyaWJ1dGVzLnN0YXRlKTtcbiAgICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGUgPSBzdGF0ZU9iai5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnX3N0YXRlRGlzcGxheScpKSB7XG4gICAgICAgIHJlc3VsdC5fc3RhdGVEaXNwbGF5ID0gbmV3QXR0cmlidXRlcy5fc3RhdGVEaXNwbGF5O1xuICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5ID0gc3RhdGVPYmouX3N0YXRlRGlzcGxheTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChyZXN1bHQsICFoYXNHbG9iYWwpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gT3BlcmF0aW5nIG9uIGNvbnRleHQtYXdhcmUgYXR0cmlidXRlcy4gUmV0dXJuIHNoYWxsb3cgY29weSBvZiBvYmplY3QuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmopIHtcbiAgICBjb25zdCBuZXdSZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIHN0YXRlT2JqLmF0dHJpYnV0ZXMpO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGVzKG9iaikge1xuICAgICAgaWYgKCFvYmopIHJldHVybjtcbiAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgICAgIGhhc3MsIHN0YXRlcywgbmV3UmVzdWx0LCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgaGFzQ2hhbmdlcyB8PSAocmVzdWx0ICE9PSBuZXdSZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmRldmljZSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmdyb3VwKTtcbiAgICB9XG5cbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICBpZiAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaikgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICBpZiAoaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlT2JqO1xuICB9LFxuXG4gIGFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIHN0YXRlOiBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpLFxuICAgICAgdW50ZW1wbGF0ZWRfYXR0cmlidXRlczogc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGVPYmoubGFzdF9jaGFuZ2VkLFxuICAgIH07XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3QoZWxlbSwgc3RhdGVPYmosIGluRGlhbG9nLCBhbGxvd0hpZGRlbikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGxldCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBvYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgZWxlbS5oYXNzLCBlbGVtLmhhc3Muc3RhdGVzLCBvYmosIG9iai5hdHRyaWJ1dGVzKTtcblxuICAgIGlmIChvYmogIT09IHN0YXRlT2JqICYmIG9iai5hdHRyaWJ1dGVzLmhpZGRlbiAmJiBhbGxvd0hpZGRlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZml4R3JvdXBUaXRsZXMoKSB7XG4gICAgY29uc3QgaG9tZUFzc2lzdGFudE1haW4gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJ10pO1xuICAgIGlmIChob21lQXNzaXN0YW50TWFpbiA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcywgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhvbWVBc3Npc3RhbnRNYWluLCBbXG4gICAgICAncGFydGlhbC1jYXJkcycsXG4gICAgICAnaGEtY2FyZHNbdmlldy12aXNpYmxlXSddKTtcbiAgICBpZiAoaGFDYXJkcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYUNhcmRzLCAnLm1haW4nKSB8fCBoYUNhcmRzLiQubWFpbjtcbiAgICBjb25zdCBjYXJkcyA9IG1haW4ucXVlcnlTZWxlY3RvckFsbCgnaGEtZW50aXRpZXMtY2FyZCcpO1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmIChjYXJkLmdyb3VwRW50aXR5KSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICBjYXJkLFxuICAgICAgICAgIGNhcmQuZ3JvdXBFbnRpdHksXG4gICAgICAgICAgZmFsc2UgLyogaW5EaWFsb2cgKi8sXG4gICAgICAgICAgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pO1xuICAgICAgICBpZiAob2JqICE9PSBjYXJkLmdyb3VwRW50aXR5ICYmIG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUpIHtcbiAgICAgICAgICBjb25zdCBuYW1lRWxlbSA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGNhcmQsICcubmFtZScpO1xuICAgICAgICAgIG5hbWVFbGVtLnRleHRDb250ZW50ID0gb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGNvbnRyb2xDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLWNhcmRzJ10pO1xuICAgIGlmIChwYXJ0aWFsQ2FyZHMgPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zLmJpbmQobnVsbCwgY29sdW1ucyksXG4gICAgICAgIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGdW5jdGlvbiByZW5hbWVkIGZyb20gaGFuZGxlV2luZG93Q2hhbmdlIHRvIF91cGRhdGVDb2x1bW5zIG9uIDMuNy4xOFxuICAgIGNvbnN0IGYgPSBwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlIHx8IHBhcnRpYWxDYXJkcy5fdXBkYXRlQ29sdW1ucztcbiAgICBwYXJ0aWFsQ2FyZHMubXFscy5mb3JFYWNoKChtcWwpID0+IHtcbiAgICAgIG1xbC5yZW1vdmVMaXN0ZW5lcihmKTtcbiAgICB9KTtcbiAgICBwYXJ0aWFsQ2FyZHMubXFscyA9IGNvbHVtbnMubWFwKCh3aWR0aCkgPT4ge1xuICAgICAgY29uc3QgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7d2lkdGh9cHgpYCk7XG4gICAgICBtcWwuYWRkTGlzdGVuZXIoZik7XG4gICAgICByZXR1cm4gbXFsO1xuICAgIH0pO1xuICAgIGYoKTtcbiAgfSxcblxuICB1c2VDdXN0b21pemVyKCkge1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgY29uc3QgY3VzdG9taXplciA9IG1haW4uaGFzcy5zdGF0ZXNbJ2N1c3RvbWl6ZXIuY3VzdG9taXplciddO1xuICAgIGlmICghY3VzdG9taXplcikgcmV0dXJuO1xuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMpIHtcbiAgICAgIGlmICh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgJiYgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpIHtcbiAgICAgICAgY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgYXR0cikpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2F0dHJdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUNvbmZpZ1BhbmVsKCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGhhUGFuZWxDb25maWcgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLXBhbmVsLXJlc29sdmVyJyxcbiAgICAgICdoYS1wYW5lbC1jb25maWcnXSk7XG4gICAgaWYgKCFoYVBhbmVsQ29uZmlnKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsLCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYUNvbmZpZ05hdmlnYXRpb24gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShoYVBhbmVsQ29uZmlnLCBbXG4gICAgICAnaGEtY29uZmlnLWRhc2hib2FyZCcsXG4gICAgICAnaGEtY29uZmlnLW5hdmlnYXRpb24nXSk7XG4gICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbikge1xuICAgICAgLy8gSGFDb25maWdOYXZpZ2F0aW9uIHN0YXJ0ZWQgdXNpbmcgbG9jYWxpemUgb24gMjEuMDEuMjAxOFxuICAgICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSAmJiAhaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCA9IHRydWU7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZCA9IChoYXNzLCBwYWdlKSA9PlxuICAgICAgICAgIHBhZ2UgPT09ICdjdXN0b211aScgfHwgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQoaGFzcywgcGFnZSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnQ3VzdG9tIFVJJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdTZXRVSSB0d2Vha3MnIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFoYUNvbmZpZ05hdmlnYXRpb24ucGFnZXMuc29tZShjb25mID0+IGNvbmYgPT09ICdjdXN0b211aScgfHwgY29uZi5kb21haW4gPT09ICdjdXN0b211aScpKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5wdXNoKCdwYWdlcycsIGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSA/ICdjdXN0b211aScgOiB7XG4gICAgICAgICAgZG9tYWluOiAnY3VzdG9tdWknLFxuICAgICAgICAgIGNhcHRpb246ICdDdXN0b20gVUknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IFVJIHR3ZWFrcy4nLFxuICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEhhQ29uZmlnQ3VzdG9tVWkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGEtY29uZmlnLWN1c3RvbS11aScpO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5pc1dpZGUgPSBoYVBhbmVsQ29uZmlnLmlzV2lkZTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuc2V0QXR0cmlidXRlKCdwYWdlLW5hbWUnLCAnY3VzdG9tdWknKTtcbiAgICAgIHJldHVybiBoYUNvbmZpZ0N1c3RvbVVpO1xuICAgIH07XG5cbiAgICBjb25zdCBpcm9uUGFnZXMgPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYVBhbmVsQ29uZmlnLCAnaXJvbi1wYWdlcycpO1xuICAgIGlmIChpcm9uUGFnZXMpIHtcbiAgICAgIGlmIChpcm9uUGFnZXMubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgaXJvblBhZ2VzLmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgICBpcm9uUGFnZXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1pdGVtcy1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpKSB7XG4gICAgICAgICAgICBpcm9uUGFnZXMuc2VsZWN0KCdjdXN0b211aScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBoYVBhbmVsQ29uZmlnLnNoYWRvd1Jvb3QgfHwgaGFQYW5lbENvbmZpZztcbiAgICAgIGlmIChyb290Lmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICB9XG4gICAgICBjb25zdCB2aXNpYmxlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKTtcbiAgICAgIHJvb3QubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gdmlzaWJsZSA/ICcnIDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsU3RhdGVzSG9vaygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaG9tZS1hc3Npc3RhbnQnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAoIWhvbWVBc3Npc3RhbnQgfHwgIWhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzKSByZXR1cm47XG4gICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZSA9IGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzO1xuICAgICAgaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MgPSBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGNvbnN0IHsgaGFzcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKG9iai5zdGF0ZXMpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhvYmouc3RhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG9iai5zdGF0ZXNba2V5XTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuX2N1aV9rZWVwKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBuZXdFbnRpdHkgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBvYmouc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgICAgaWYgKGhhc3Muc3RhdGVzICYmIGVudGl0eSAhPT0gaGFzcy5zdGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgICAvLyBOZXcgc3RhdGUgYXJyaXZlZC4gUHV0IG1vZGlmaWVkIHN0YXRlIGluLlxuICAgICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSAhPT0gbmV3RW50aXR5KSB7XG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHNhbWUgc3RhdGUgYnV0IGNvbnRlbnRzIGNoYW5nZWQgZHVlIHRvIG90aGVyIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIG9iaik7XG4gICAgICAgIGlmIChvYmoudGhlbWVzICYmIGhhc3MuX3RoZW1lV2FpdGVycykge1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycy5mb3JFYWNoKHdhaXRlciA9PiB3YWl0ZXIuc3RhdGVDaGFuZ2VkKHdhaXRlci5zdGF0ZSkpO1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAobWFpbi5oYXNzICYmIG1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgICAgbWFpbi5fdXBkYXRlSGFzcyh7IHN0YXRlczogbWFpbi5oYXNzLnN0YXRlcyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsUGFydGlhbENhcmRzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdwYXJ0aWFsLWNhcmRzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3BhcnRpYWwtY2FyZHMnKTtcbiAgICAgIGlmICghcGFydGlhbENhcmRzIHx8ICFwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlcikgcmV0dXJuO1xuICAgICAgcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIgPSAoaGFzcywgZW50aXR5SWQpID0+IHtcbiAgICAgICAgaWYgKGhhc3Muc3RhdGVzW2VudGl0eUlkXS5hdHRyaWJ1dGVzLmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBleGNsdWRlcyA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMgJiYgZW50aXR5LmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVFbnRpdHlJZCA9IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSkgcmV0dXJuO1xuICAgICAgICAgICAgZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSA9IGVudGl0eTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy52aWV3KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdFbnRpdGllcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXModmlld0VudGl0aWVzKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICBpZCA9PiB2aWV3RW50aXRpZXNbaWRdLmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZXhjbHVkZXNbaWRdID0gdmlld0VudGl0aWVzW2lkXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIWV4Y2x1ZGVzW2VudGl0eUlkXTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGVsZW1lbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICAgIGlmICgha2xhc3MgfHwgIWtsYXNzLnByb3RvdHlwZSkgcmV0dXJuO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGtsYXNzLnByb3RvdHlwZSwgJ2xvY2FsaXplJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tTG9jYWxpemUodikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVPYmogJiYgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXN0b21Mb2NhbGl6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KCkge30sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgdGhlbWluZyBcInJlZ3VsYXJcIiB0b3AgYmFkZ2VzLlxuICBpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICAgIGlmICghaGFTdGF0ZUxhYmVsQmFkZ2UgfHwgIWhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQpIHJldHVybjtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAgIC8vIFRPRE86IENhbGwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzID0gdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycy5wdXNoKHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdGF0ZS1iYWRnZScpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtYmFkZ2UnKTtcbiAgICAgIGlmICghc3RhdGVCYWRnZSB8fCAhc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlKSByZXR1cm47XG4gICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlID0gc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlO1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIHN0YXRlQmFkZ2UucHJvdG90eXBlLl91cGRhdGVJY29uQXBwZWFyYW5jZSA9IGZ1bmN0aW9uIGN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlKHN0YXRlT2JqKSB7XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kLmljb24uc3R5bGUsIHtcbiAgICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgICBmaWx0ZXI6ICcnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UuY2FsbCh0aGlzLCBzdGF0ZU9iaik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbEhhQXR0cmlidXRlcygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtYXR0cmlidXRlcycpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaGFBdHRyaWJ1dGVzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1hdHRyaWJ1dGVzJyk7XG4gICAgICBpZiAoIWhhQXR0cmlidXRlcyB8fCAhaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5IHx8XG4gICAgICAgICAhd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsKSByZXR1cm47XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5ID1cbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpLmNvbmNhdChcbiAgICAgICAgICAgIGV4dHJhRmlsdGVycyA/IGV4dHJhRmlsdGVycy5zcGxpdCgnLCcpIDogW10pO1xuICAgICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxIYUZvcm1DdXN0b21pemUoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLWZvcm0tY3VzdG9taXplJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYUZvcm1DdXN0b21pemUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWZvcm0tY3VzdG9taXplJyk7XG4gICAgICBpZiAoIWhhRm9ybUN1c3RvbWl6ZSkge1xuICAgICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSwgMTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSkgcmV0dXJuO1xuICAgICAgd2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lID0gdHJ1ZTtcblxuICAgICAgaWYgKCF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUgPVxuICAgICAgICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldXG4gICAgICAgICAgICAgICAgfHwgeyB0eXBlOiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdE9wZW5PYmplY3Qoa2V5LCBjb25maWcudHlwZSA9PT0gJ2pzb24nID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMpIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyA9XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgICAgICAgICBsb2NhbEF0dHJpYnV0ZXMsIGdsb2JhbEF0dHJpYnV0ZXMsIGV4aXN0aW5nQXR0cmlidXRlcywgbmV3QXR0cmlidXRlcykge1xuICAgICAgICAgICAgY29uc3Qga25vd25LZXlzID1cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25mID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmYgJiYgKCFjb25mLmRvbWFpbnMgfHwgIXRoaXMuZW50aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmYuZG9tYWlucy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4odGhpcy5lbnRpdHkpKSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGxvY2FsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZ2xvYmFsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZXhpc3RpbmdBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhuZXdBdHRyaWJ1dGVzKSk7XG4gICAgICAgICAgICByZXR1cm4ga25vd25LZXlzLnNvcnQoKS5jb25jYXQoJ090aGVyJyk7XG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsQ2xhc3NIb29rcygpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSA9IHRydWU7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxQYXJ0aWFsQ2FyZHMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlc0hvb2soKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZUJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUF0dHJpYnV0ZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NlbmUnKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NyaXB0Jyk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxDbGFzc0hvb2tzKCk7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIW1haW4uaGFzcyB8fCAhbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgLy8gQ29ubmVjdGlvbiB3YXNuJ3QgbWFkZSB5ZXQuIFRyeSBpbiAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbml0LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmN1c3RvbVVJLmluaXREb25lID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS51c2VDdXN0b21pemVyKCk7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb24tY2hhbmdlZCcsIHdpbmRvdy5zZXRUaW1lb3V0LmJpbmQobnVsbCwgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzLCAxMDApKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5sb2coYExvYWRlZCBDdXN0b21VSSAke1ZFUlNJT059YCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgaWYgKCF3aW5kb3cuQ1VTVE9NX1VJX0xJU1QpIHtcbiAgICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVCA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QucHVzaCh7XG4gICAgICBuYW1lOiAnQ3VzdG9tVUknLFxuICAgICAgdmVyc2lvbjogVkVSU0lPTixcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXktZ2l0L2hvbWUtYXNzaXN0YW50LWN1c3RvbS11aScsXG4gICAgfSk7XG4gIH0sXG5cbiAgcnVuSG9va3MoKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUoKTtcbiAgfSxcblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhLWRldmljZS1uYW1lJykgfHwgJyc7XG4gIH0sXG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScsIG5hbWUgfHwgJycpO1xuICB9LFxuXG4gIGNvbXB1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uQm9keSA9ICh0ZW1wbGF0ZS5pbmRleE9mKCdyZXR1cm4nKSA+PSAwKSA/IHRlbXBsYXRlIDogYHJldHVybiBcXGAke3RlbXBsYXRlfVxcYDtgO1xuICAgIHRyeSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ2hhc3MnLCAnZW50aXRpZXMnLCAnZW50aXR5JywgJ2F0dHJpYnV0ZXMnLCAnYXR0cmlidXRlJywgJ3N0YXRlJywgZnVuY3Rpb25Cb2R5KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIHJldHVybiBmdW5jKGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGlmICgoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB8fCBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfSBpbiB0ZW1wbGF0ZSAke2Z1bmN0aW9uQm9keX1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9LFxufTtcbndpbmRvdy5jdXN0b21VSS5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCAnMjAxOTAxMTMnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==