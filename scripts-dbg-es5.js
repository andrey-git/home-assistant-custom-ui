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

/***/ "../home-assistant-polymer/src/common/const.js":
/*!*****************************************************!*\
  !*** ../home-assistant-polymer/src/common/const.js ***!
  \*****************************************************/
/*! exports provided: DEFAULT_DOMAIN_ICON, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
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
var DEFAULT_DOMAIN_ICON = 'hass:bookmark';

/** Domains that have a state card. */
var DOMAINS_WITH_CARD = ['climate', 'cover', 'configurator', 'input_select', 'input_number', 'input_text', 'lock', 'media_player', 'scene', 'script', 'timer', 'vacuum', 'weblink'];

/** Domains with separate more info dialog. */
var DOMAINS_WITH_MORE_INFO = ['alarm_control_panel', 'automation', 'camera', 'climate', 'configurator', 'cover', 'fan', 'group', 'history_graph', 'input_datetime', 'light', 'lock', 'media_player', 'script', 'sun', 'updater', 'vacuum', 'weather'];

/** Domains that show no more info dialog. */
var DOMAINS_HIDE_MORE_INFO = ['input_number', 'input_select', 'input_text', 'scene', 'weblink'];

/** Domains that should have the history hidden in the more info dialog. */
var DOMAINS_MORE_INFO_NO_HISTORY = ['camera', 'configurator', 'history_graph', 'scene'];

/** States that we consider "off". */
var STATES_OFF = ['closed', 'locked', 'off'];

/** Domains where we allow toggle in Lovelace. */
var DOMAINS_TOGGLE = new Set(['fan', 'input_boolean', 'light', 'switch']);

/** Temperature units. */
var UNIT_C = '°C';
var UNIT_F = '°F';

/** Entity ID of the default view. */
var DEFAULT_VIEW_ENTITY_ID = 'group.default_view';

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
  if (localTheme === 'default' || localTheme && themes.themes[localTheme]) {
    themeName = localTheme;
  }
  var styles = Object.assign({}, element._themes);
  if (themeName !== 'default') {
    var theme = themes.themes[themeName];
    Object.keys(theme).forEach(function (key) {
      var prefixedKey = '--' + key;
      element._themes[prefixedKey] = '';
      styles[prefixedKey] = theme[key];
    });
  }
  if (element.updateStyles) {
    element.updateStyles(styles);
  } else if (window.ShadyCSS) {
    // implement updateStyles() method of Polemer elements
    window.ShadyCSS.styleSubtree( /** @type {!HTMLElement} */element, styles);
  }

  if (!updateMeta) return;

  var meta = document.querySelector('meta[name=theme-color]');
  if (meta) {
    if (!meta.hasAttribute('default-content')) {
      meta.setAttribute('default-content', meta.getAttribute('content'));
    }
    var themeColor = styles['--primary-color'] || meta.getAttribute('default-content');
    meta.setAttribute('content', themeColor);
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
  var customEl = void 0;

  if (rootEl.lastChild && rootEl.lastChild.tagName === newElementTag) {
    customEl = rootEl.lastChild;
  } else {
    if (rootEl.lastChild) {
      rootEl.removeChild(rootEl.lastChild);
    }
    // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
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

/***/ "../home-assistant-polymer/src/common/entity/can_toggle_domain.js":
/*!************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/can_toggle_domain.js ***!
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

  if (domain === 'lock') {
    return 'lock' in services;
  } else if (domain === 'cover') {
    return 'open_cover' in services;
  }
  return 'turn_on' in services;
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/can_toggle_state.js":
/*!***********************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/can_toggle_state.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canToggleState; });
/* harmony import */ var _can_toggle_domain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can_toggle_domain.js */ "../home-assistant-polymer/src/common/entity/can_toggle_domain.js");
/* harmony import */ var _compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_state_domain.js */ "../home-assistant-polymer/src/common/entity/compute_state_domain.js");



function canToggleState(hass, stateObj) {
  var domain = Object(_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);
  if (domain === 'group') {
    return stateObj.state === 'on' || stateObj.state === 'off';
  }
  if (domain === 'climate') {
    return !!((stateObj.attributes || {}).supported_features & 4096);
  }

  return Object(_can_toggle_domain_js__WEBPACK_IMPORTED_MODULE_0__["default"])(hass, domain);
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/compute_domain.js":
/*!*********************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/compute_domain.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeDomain; });
function computeDomain(entityId) {
  return entityId.substr(0, entityId.indexOf('.'));
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/compute_state_domain.js":
/*!***************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/compute_state_domain.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain.js */ "../home-assistant-polymer/src/common/entity/compute_domain.js");


function computeStateDomain(stateObj) {
  return Object(_compute_domain_js__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.entity_id);
}

/***/ }),

/***/ "../home-assistant-polymer/src/common/entity/get_group_entities.js":
/*!*************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/get_group_entities.js ***!
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

/***/ "../home-assistant-polymer/src/common/entity/get_view_entities.js":
/*!************************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/get_view_entities.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewEntities; });
/* harmony import */ var _compute_domain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain.js */ "../home-assistant-polymer/src/common/entity/compute_domain.js");
/* harmony import */ var _get_group_entities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_group_entities.js */ "../home-assistant-polymer/src/common/entity/get_group_entities.js");



// Return an object containing all entities that the view will show
// including embedded groups.
function getViewEntities(entities, view) {
  var viewEntities = {};

  view.attributes.entity_id.forEach(function (entityId) {
    var entity = entities[entityId];

    if (entity && !entity.attributes.hidden) {
      viewEntities[entity.entity_id] = entity;

      if (Object(_compute_domain_js__WEBPACK_IMPORTED_MODULE_0__["default"])(entity.entity_id) === 'group') {
        var groupEntities = Object(_get_group_entities_js__WEBPACK_IMPORTED_MODULE_1__["default"])(entities, entity);

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

/***/ "../home-assistant-polymer/src/common/entity/state_card_type.js":
/*!**********************************************************************!*\
  !*** ../home-assistant-polymer/src/common/entity/state_card_type.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stateCardType; });
/* harmony import */ var _can_toggle_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can_toggle_state.js */ "../home-assistant-polymer/src/common/entity/can_toggle_state.js");
/* harmony import */ var _compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_state_domain.js */ "../home-assistant-polymer/src/common/entity/compute_state_domain.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "../home-assistant-polymer/src/common/const.js");




function stateCardType(hass, stateObj) {
  if (stateObj.state === 'unavailable') {
    return 'display';
  }

  var domain = Object(_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);

  if (_const_js__WEBPACK_IMPORTED_MODULE_2__["DOMAINS_WITH_CARD"].includes(domain)) {
    return domain;
  } else if (Object(_can_toggle_state_js__WEBPACK_IMPORTED_MODULE_0__["default"])(hass, stateObj) && stateObj.attributes.control !== 'hidden') {
    return 'toggle';
  }
  return 'display';
}

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
  binary_sensor: ['battery', 'cold', 'connectivity', 'door', 'garage_door', 'gas', 'heat', 'light', 'lock', 'moisture', 'motion', 'moving', 'occupancy', 'opening', 'plug', 'power', 'presence', 'problem', 'safety', 'smoke', 'sound', 'vibration', 'window'],
  cover: ['garage'],
  sensor: ['battery', 'humidity', 'illuminance', 'temperature']
};

hassAttributeUtil.UNKNOWN_TYPE = 'json';
hassAttributeUtil.ADD_TYPE = 'key-value';

hassAttributeUtil.TYPE_TO_TAG = {
  string: 'ha-customize-string',
  json: 'ha-customize-string',
  icon: 'ha-customize-icon',
  boolean: 'ha-customize-boolean',
  array: 'ha-customize-array',
  'key-value': 'ha-customize-key-value'
};

// Attributes here serve dual purpose:
// 1) Any key of this object won't be shown in more-info window.
// 2) Any key which has value other than undefined will appear in customization
//    config according to its value.
hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = hassAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
  entity_picture: undefined,
  friendly_name: { type: 'string', description: 'Name' },
  icon: { type: 'icon' },
  emulated_hue: {
    type: 'boolean',
    domains: ['emulated_hue']
  },
  emulated_hue_name: {
    type: 'string',
    domains: ['emulated_hue']
  },
  haaska_hidden: undefined,
  haaska_name: undefined,
  homebridge_hidden: { type: 'boolean' },
  homebridge_name: { type: 'string' },
  supported_features: undefined,
  attribution: undefined,
  custom_ui_more_info: { type: 'string' },
  custom_ui_state_card: { type: 'string' },
  device_class: {
    type: 'array',
    options: hassAttributeUtil.DOMAIN_DEVICE_CLASS,
    description: 'Device class',
    domains: ['binary_sensor', 'cover', 'sensor']
  },
  hidden: { type: 'boolean', description: 'Hide from UI' },
  assumed_state: {
    type: 'boolean',
    domains: ['switch', 'light', 'cover', 'climate', 'fan', 'group']
  },
  initial_state: {
    type: 'string',
    domains: ['automation']
  },
  unit_of_measurement: { type: 'string' }
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var LiteralString = function () {
  function LiteralString(string) {
    _classCallCheck(this, LiteralString);

    /** @type {string} */
    this.value = string.toString();
  }
  /**
   * @return {string} LiteralString string value
   */


  _createClass(LiteralString, [{
    key: 'toString',
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
    return (/** @type {!LiteralString} */value.value
    );
  } else {
    throw new Error('non-literal value passed to Polymer\'s htmlLiteral function: ' + value);
  }
}

/**
 * @param {*} value Object to stringify into HTML
 * @return {string} HTML stringified form of `obj`
 */
function htmlValue(value) {
  if (value instanceof HTMLTemplateElement) {
    return (/** @type {!HTMLTemplateElement } */value.innerHTML
    );
  } else if (value instanceof LiteralString) {
    return literalValue(value);
  } else {
    throw new Error('non-template value passed to Polymer\'s html function: ' + value);
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
  var template = /** @type {!HTMLTemplateElement} */document.createElement('template');

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
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
  for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
 * @extends HTMLElement
 */

var CuiBaseElement = function (_Polymer$Element) {
  _inherits(CuiBaseElement, _Polymer$Element);

  function CuiBaseElement() {
    _classCallCheck(this, CuiBaseElement);

    return _possibleConstructorReturn(this, (CuiBaseElement.__proto__ || Object.getPrototypeOf(CuiBaseElement)).apply(this, arguments));
  }

  _createClass(CuiBaseElement, [{
    key: 'computeExtra',
    value: function computeExtra(hass, stateObj) {
      var extras = stateObj.attributes.extra_data_template;
      if (extras) {
        if (!Array.isArray(extras)) {
          extras = [extras];
        }
        return extras.map(function (extra) {
          return window.customUI.computeTemplate(extra, hass, hass.states, stateObj, stateObj.attributes,
          /* attribute= */undefined, stateObj.state);
        }).filter(function (result) {
          return result !== null;
        });
      }
      return [];
    }
  }, {
    key: 'showLastChanged',
    value: function showLastChanged(stateObj, inDialog, extra) {
      if (inDialog) return true;
      if (extra.length) return false;
      return !!stateObj.attributes.show_last_changed;
    }
  }, {
    key: 'hasExtra',
    value: function hasExtra(extra) {
      return extra.length > 0;
    }
  }], [{
    key: 'properties',
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
 * @extends HTMLElement
 */

var DynamicElement = function (_Polymer$Element) {
  _inherits(DynamicElement, _Polymer$Element);

  function DynamicElement() {
    _classCallCheck(this, DynamicElement);

    return _possibleConstructorReturn(this, (DynamicElement.__proto__ || Object.getPrototypeOf(DynamicElement)).apply(this, arguments));
  }

  _createClass(DynamicElement, [{
    key: 'observerFunc',
    value: function observerFunc(hass, stateObj, elementName, inDialog) {
      Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, elementName ? elementName.toUpperCase() : 'DIV', { hass: hass, stateObj: stateObj, inDialog: inDialog });
    }
  }], [{
    key: 'properties',
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
    key: 'observers',
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _templateObject = _taggedTemplateLiteral(['\n      <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>\n      <style>\n        :host {\n          display: inline-block;\n        }\n        .control-wrapper {\n          margin: -4px -16px -4px 0;\n          padding: 4px 16px;\n        }\n        ha-state-label-badge {\n          margin-left: 8px;\n        }\n        dynamic-element {\n          display: block;\n          text-align: right;\n        }\n        #overlay {\n          position: absolute;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          text-align: right;\n          z-index: 1;\n        }\n        #lock {\n          margin-top: 8px;\n          opacity: 0.3;\n          margin-right: 7px;\n        }\n        #lock.ha-cover-controls {\n          margin-right: 52px;\n          background-color: white;\n        }\n        .extra {\n          margin-bottom: -16px;\n          --ha-label-badge-size: 36px;\n          --ha-label-badge-font-size: 1.2em;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n          margin-left: 16px;\n          text-align: right;\n          line-height: 40px;\n        }\n      </style>\n      <div class$=\'[[extraClass(extraObjVisible)]] horizontal layout\'>\n        <template is=\'dom-if\' if=\'[[extraObjVisible]]\'>\n          <template is=\'dom-repeat\'\n                    items=\'[[extraObj]]\'\n                    on-dom-change=\'extraDomChanged\'>\n            <ha-state-label-badge hass=\'[[hass]]\' state=\'[[item]]\'></ha-state-label-badge>\n          </template>\n        </template>\n        <template is=\'dom-if\' if=\'[[_showControl(inDialog, stateObj)]]\'>\n          <template is=\'dom-if\' if=\'[[controlElement]]\'>\n            <div class="control-wrapper">\n              <dynamic-element\n                  class=\'flex\'\n                  state-obj="[[stateObj]]"\n                  hass=\'[[hass]]\'\n                  element-name=\'[[controlElement]]\'>\n              </dynamic-element>\n              <template is=\'dom-if\' if=\'[[isConfirmControls(stateObj)]]\'>\n                <div id="overlay" on-click=\'clickHandler\'>\n                  <template is=\'dom-if\' if=\'[[stateObj.attributes.confirm_controls_show_lock]]\'>\n                    <iron-icon id="lock" class$="[[controlElement]]" icon="mdi:lock-outline"></iron-icon>\n                  </template>\n                </div>\n              </template>\n            </div>\n          </template>\n          <template is=\'dom-if\' if=\'[[!controlElement]]\'>\n            <div class=\'state\'>[[computeStateDisplay(stateObj)]]</div>\n          </template>\n        </template>\n      </div>\n      '], ['\n      <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>\n      <style>\n        :host {\n          display: inline-block;\n        }\n        .control-wrapper {\n          margin: -4px -16px -4px 0;\n          padding: 4px 16px;\n        }\n        ha-state-label-badge {\n          margin-left: 8px;\n        }\n        dynamic-element {\n          display: block;\n          text-align: right;\n        }\n        #overlay {\n          position: absolute;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          text-align: right;\n          z-index: 1;\n        }\n        #lock {\n          margin-top: 8px;\n          opacity: 0.3;\n          margin-right: 7px;\n        }\n        #lock.ha-cover-controls {\n          margin-right: 52px;\n          background-color: white;\n        }\n        .extra {\n          margin-bottom: -16px;\n          --ha-label-badge-size: 36px;\n          --ha-label-badge-font-size: 1.2em;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n          margin-left: 16px;\n          text-align: right;\n          line-height: 40px;\n        }\n      </style>\n      <div class$=\'[[extraClass(extraObjVisible)]] horizontal layout\'>\n        <template is=\'dom-if\' if=\'[[extraObjVisible]]\'>\n          <template is=\'dom-repeat\'\n                    items=\'[[extraObj]]\'\n                    on-dom-change=\'extraDomChanged\'>\n            <ha-state-label-badge hass=\'[[hass]]\' state=\'[[item]]\'></ha-state-label-badge>\n          </template>\n        </template>\n        <template is=\'dom-if\' if=\'[[_showControl(inDialog, stateObj)]]\'>\n          <template is=\'dom-if\' if=\'[[controlElement]]\'>\n            <div class="control-wrapper">\n              <dynamic-element\n                  class=\'flex\'\n                  state-obj="[[stateObj]]"\n                  hass=\'[[hass]]\'\n                  element-name=\'[[controlElement]]\'>\n              </dynamic-element>\n              <template is=\'dom-if\' if=\'[[isConfirmControls(stateObj)]]\'>\n                <div id="overlay" on-click=\'clickHandler\'>\n                  <template is=\'dom-if\' if=\'[[stateObj.attributes.confirm_controls_show_lock]]\'>\n                    <iron-icon id="lock" class$="[[controlElement]]" icon="mdi:lock-outline"></iron-icon>\n                  </template>\n                </div>\n              </template>\n            </div>\n          </template>\n          <template is=\'dom-if\' if=\'[[!controlElement]]\'>\n            <div class=\'state\'>[[computeStateDisplay(stateObj)]]</div>\n          </template>\n        </template>\n      </div>\n      ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







customElements.whenDefined('state-card-display').then(function () {
  /**
   * @extends HTMLElement
   */
  var DynamicWithExtra = function (_customElements$get) {
    _inherits(DynamicWithExtra, _customElements$get);

    function DynamicWithExtra() {
      _classCallCheck(this, DynamicWithExtra);

      return _possibleConstructorReturn(this, (DynamicWithExtra.__proto__ || Object.getPrototypeOf(DynamicWithExtra)).apply(this, arguments));
    }

    _createClass(DynamicWithExtra, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        _get(DynamicWithExtra.prototype.__proto__ || Object.getPrototypeOf(DynamicWithExtra.prototype), 'connectedCallback', this).call(this);
        this._attached = true;
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this._isAttached = false;
        _get(DynamicWithExtra.prototype.__proto__ || Object.getPrototypeOf(DynamicWithExtra.prototype), 'disconnectedCallback', this).call(this);
      }
    }, {
      key: 'computeExtra',
      value: function computeExtra(hass, stateObj, attached) {
        var _this2 = this;

        if (!stateObj.attributes.extra_badge || !attached) return [];
        var extraBadges = stateObj.attributes.extra_badge;
        if (!Array.isArray(extraBadges)) {
          extraBadges = [extraBadges];
        }
        return extraBadges.map(function (extraBadge) {
          var result = null;
          if (extraBadge.entity_id && hass.states[extraBadge.entity_id]) {
            result = Object.assign({}, window.customUI.maybeChangeObject(_this2, hass.states[extraBadge.entity_id], _this2.inDialog,
            /* allowHidden= */false));
          } else if (extraBadge.attribute && stateObj.attributes[extraBadge.attribute] !== undefined) {
            result = {
              state: String(stateObj.attributes[extraBadge.attribute]),
              entity_id: 'none.none',
              attributes: { unit_of_measurement: extraBadge.unit }
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
          return result;
        }).filter(function (extraBadge) {
          return extraBadge != null;
        });
      }
    }, {
      key: 'computeExtraVisible',
      value: function computeExtraVisible(extraObj, inDialog) {
        if (inDialog || !extraObj) return false;
        return extraObj.length !== 0;
      }
    }, {
      key: 'extraClass',
      value: function extraClass(extraObjVisible) {
        return extraObjVisible ? 'extra' : '';
      }
    }, {
      key: '_showControl',
      value: function _showControl(inDialog, stateObj) {
        if (inDialog) return true;
        return !stateObj.attributes.hide_control;
      }
    }, {
      key: 'computeStateDisplay',
      value: function computeStateDisplay(stateObj) {
        // haLocalize removed in 0.61
        return _get(DynamicWithExtra.prototype.__proto__ || Object.getPrototypeOf(DynamicWithExtra.prototype), 'computeStateDisplay', this).call(this, this.haLocalize || this.localize, stateObj);
      }
    }, {
      key: 'isConfirmControls',
      value: function isConfirmControls(stateObj) {
        return stateObj.attributes.confirm_controls || stateObj.attributes.confirm_controls_show_lock;
      }
    }, {
      key: 'clickHandler',
      value: function clickHandler(e) {
        var _this3 = this;

        this.root.querySelector('#overlay').style.pointerEvents = 'none';
        var lock = this.root.querySelector('#lock');
        if (lock) {
          lock.icon = 'mdi:lock-open-outline';
          lock.style.opacity = '0.1';
        }
        window.setTimeout(function () {
          _this3.root.querySelector('#overlay').style.pointerEvents = '';
          if (lock) {
            lock.icon = 'mdi:lock-outline';
            lock.style.opacity = '';
          }
        }, 5000);
        e.stopPropagation();
      }
    }, {
      key: 'applyThemes',
      value: function applyThemes(hass, element, stateObj) {
        var themeName = stateObj.attributes.theme || 'default';
        Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element, hass.themes || { default_theme: 'default', themes: {} }, themeName);
      }
    }, {
      key: 'extraDomChanged',
      value: function extraDomChanged() {
        var _this4 = this;

        this.root.querySelectorAll('ha-state-label-badge').forEach(function (elem) {
          _this4.applyThemes(_this4.hass, elem, elem.state);
        });
      }
    }], [{
      key: 'template',
      get: function get() {
        return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject);
      }
    }, {
      key: 'properties',
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _templateObject = _taggedTemplateLiteral(['\n    <style include="ha-style"></style>\n    <app-header-layout has-scrolling-region>\n      <app-header slot="header" fixed>\n        <app-toolbar>\n          <paper-icon-button\n            icon=\'mdi:arrow-left\'\n            on-click=\'_backHandler\'\n          ></paper-icon-button>\n          <div main-title>Custom UI settings</div>\n        </app-toolbar>\n      </app-header>\n\n      <ha-config-section is-wide=\'[[isWide]]\'>\n        <paper-card heading=\'Device name\'>\n          <div class=\'card-content\'>\n            Set device name so that you can reference it in per-device settings\n            <paper-input\n              label=\'Name\'\n              value=\'{{name}}\'\n            ></paper-input>\n          </div>\n        </paper-card>\n      </ha-config-section>\n    </app-header-layout>\n    '], ['\n    <style include="ha-style"></style>\n    <app-header-layout has-scrolling-region>\n      <app-header slot="header" fixed>\n        <app-toolbar>\n          <paper-icon-button\n            icon=\'mdi:arrow-left\'\n            on-click=\'_backHandler\'\n          ></paper-icon-button>\n          <div main-title>Custom UI settings</div>\n        </app-toolbar>\n      </app-header>\n\n      <ha-config-section is-wide=\'[[isWide]]\'>\n        <paper-card heading=\'Device name\'>\n          <div class=\'card-content\'>\n            Set device name so that you can reference it in per-device settings\n            <paper-input\n              label=\'Name\'\n              value=\'{{name}}\'\n            ></paper-input>\n          </div>\n        </paper-card>\n      </ha-config-section>\n    </app-header-layout>\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * @extends HTMLElement
 */

var HaConfigCustomUi = function (_EventsMixin) {
  _inherits(HaConfigCustomUi, _EventsMixin);

  function HaConfigCustomUi() {
    _classCallCheck(this, HaConfigCustomUi);

    return _possibleConstructorReturn(this, (HaConfigCustomUi.__proto__ || Object.getPrototypeOf(HaConfigCustomUi)).apply(this, arguments));
  }

  _createClass(HaConfigCustomUi, [{
    key: 'ready',
    value: function ready() {
      _get(HaConfigCustomUi.prototype.__proto__ || Object.getPrototypeOf(HaConfigCustomUi.prototype), 'ready', this).call(this);
      this.name = window.customUI.getName();
    }
  }, {
    key: 'nameChanged',
    value: function nameChanged(name) {
      window.customUI.setName(name);
    }
  }, {
    key: '_backHandler',
    value: function _backHandler() {
      window.history.back();
      this.fire('location-changed');
    }
  }], [{
    key: 'template',
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject);
    }
  }, {
    key: 'properties',
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _templateObject = _taggedTemplateLiteral(['\n    <style>\n      :host {\n        margin: var(--ha-themed-slider-margin, initial);\n      }\n      .disable-off-when-min {\n        --paper-slider-pin-start-color:  var(--paper-slider-pin-color);\n      }\n\n      .disable-off-when-min.is-on {\n        --paper-slider-knob-start-color: var(--paper-slider-knob-color);\n        --paper-slider-knob-start-border-color: var(--paper-slider-knob-color);\n      }\n      paper-slider {\n        margin: 4px 0;\n        max-width: 100%;\n        min-width: 100px;\n        width: var(--ha-paper-slider-width, 200px);\n      }\n    </style>\n\n    <paper-slider\n         min=\'[[_themedMin]]\'\n         max=\'[[_computeAttribute(theme, "max", max)]]\'\n         pin=\'[[_computeAttribute(theme, "pin", pin)]]\'\n         class$=\'[[computeClass(theme, isOn, _themedMin)]]\' value=\'[[value]]\'\n         on-change=\'valueChanged\'>\n    </paper-slider>\n    '], ['\n    <style>\n      :host {\n        margin: var(--ha-themed-slider-margin, initial);\n      }\n      .disable-off-when-min {\n        --paper-slider-pin-start-color:  var(--paper-slider-pin-color);\n      }\n\n      .disable-off-when-min.is-on {\n        --paper-slider-knob-start-color: var(--paper-slider-knob-color);\n        --paper-slider-knob-start-border-color: var(--paper-slider-knob-color);\n      }\n      paper-slider {\n        margin: 4px 0;\n        max-width: 100%;\n        min-width: 100px;\n        width: var(--ha-paper-slider-width, 200px);\n      }\n    </style>\n\n    <paper-slider\n         min=\'[[_themedMin]]\'\n         max=\'[[_computeAttribute(theme, "max", max)]]\'\n         pin=\'[[_computeAttribute(theme, "pin", pin)]]\'\n         class$=\'[[computeClass(theme, isOn, _themedMin)]]\' value=\'[[value]]\'\n         on-change=\'valueChanged\'>\n    </paper-slider>\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



/**
 * @extends HTMLElement
 */

var HaThemedSlider = function (_Polymer$Element) {
  _inherits(HaThemedSlider, _Polymer$Element);

  function HaThemedSlider() {
    _classCallCheck(this, HaThemedSlider);

    return _possibleConstructorReturn(this, (HaThemedSlider.__proto__ || Object.getPrototypeOf(HaThemedSlider)).apply(this, arguments));
  }

  _createClass(HaThemedSlider, [{
    key: 'ready',
    value: function ready() {
      _get(HaThemedSlider.prototype.__proto__ || Object.getPrototypeOf(HaThemedSlider.prototype), 'ready', this).call(this);
      this.disableOffWhenMin = !this._computeAttribute(this.theme, 'off_when_min', !this.disableOffWhenMin);
      this.computeEnabledThemedReportWhenNotChanged(this.theme, this.disableReportWhenNotChanged);
    }
  }, {
    key: 'computeEnabledThemedReportWhenNotChanged',
    value: function computeEnabledThemedReportWhenNotChanged(theme, disableReportWhenNotChanged) {
      this._enabledThemedReportWhenNotChanged = this._computeAttribute(theme, 'report_when_not_changed', !disableReportWhenNotChanged);
    }
  }, {
    key: '_computeAttribute',
    value: function _computeAttribute(theme, attr, def) {
      if (theme) {
        if (attr in theme) {
          return theme[attr];
        }
      }
      return def;
    }
  }, {
    key: 'computeClass',
    value: function computeClass(theme, isOn, themedMin) {
      var result = '';
      if (isOn) {
        result += 'is-on ';
      }
      if (this._computeAttribute(theme, 'off_when_min', !this.disableOffWhenMin) || themedMin === 0) {
        // If offWhenMin is enabled don't customize.
        return '';
      }
      return result + 'disable-off-when-min';
    }
  }, {
    key: 'valueChanged',
    value: function valueChanged(ev) {
      if (!this._enabledThemedReportWhenNotChanged && this.value === ev.target.value) {
        ev.stopPropagation();
        return;
      }
      this.value = ev.target.value;
    }
  }], [{
    key: 'template',
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject);
    }
  }, {
    key: 'properties',
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
    key: 'observers',
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
/* harmony import */ var _home_assistant_polymer_src_common_entity_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/compute_state_domain.js */ "../home-assistant-polymer/src/common/entity/compute_state_domain.js");
/* harmony import */ var _home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/dynamic_content_updater.js */ "../home-assistant-polymer/src/common/dom/dynamic_content_updater.js");
/* harmony import */ var _home_assistant_polymer_src_common_entity_state_card_type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/state_card_type.js */ "../home-assistant-polymer/src/common/entity/state_card_type.js");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks.js */ "./src/utils/hooks.js");
/* harmony import */ var _state_card_with_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-card-with-slider.js */ "./src/elements/state-card-with-slider.js");
/* harmony import */ var _state_card_without_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-card-without-slider.js */ "./src/elements/state-card-without-slider.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var SHOW_LAST_CHANGED_BLACKLISTED_CARDS = ['configurator'];
var DOMAIN_TO_SLIDER_SUPPORT = {
  light: 1, // SUPPORT_BRIGHTNESS
  cover: 4, // SUPPORT_SET_POSITION
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

var StateCardCustomUi = function (_Polymer$Element) {
  _inherits(StateCardCustomUi, _Polymer$Element);

  function StateCardCustomUi() {
    _classCallCheck(this, StateCardCustomUi);

    return _possibleConstructorReturn(this, (StateCardCustomUi.__proto__ || Object.getPrototypeOf(StateCardCustomUi)).apply(this, arguments));
  }

  _createClass(StateCardCustomUi, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(StateCardCustomUi.prototype.__proto__ || Object.getPrototypeOf(StateCardCustomUi.prototype), 'connectedCallback', this).call(this);
      var container = this.parentNode.parentNode;
      if (container.tagName === 'DIV' && (container.classList.contains('state') || container.classList.contains('child-card'))) {
        this._container = container;

        // Since this doesn't actually change the background - no need to clear it.
        container.style.setProperty('background-color', 'var(--paper-card-background-color, inherit)');

        // Polyfill 'updateStyles'.
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
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this._isAttached = false;
      if (this._container) {
        this._container.updateStyles({ display: '', margin: '', padding: '' });
        Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._container, this.hass.themes || { default_theme: 'default', themes: {} }, 'default');
        this._container = null;
      }
      _get(StateCardCustomUi.prototype.__proto__ || Object.getPrototypeOf(StateCardCustomUi.prototype), 'disconnectedCallback', this).call(this);
    }
  }, {
    key: 'badgeMode',
    value: function badgeMode(hass, stateObj, domain) {
      var _this2 = this;

      var states = [];
      if (domain === 'group') {
        stateObj.attributes.entity_id.forEach(function (id) {
          var state = hass.states[id];
          if (!state) {
            /* eslint-disable no-console */
            console.warn('Unknown ID ' + id + ' in group ' + stateObj.entity_id);
            /* eslint-enable no-console */
            return;
          }
          if (!stateObj.attributes.badges_list || stateObj.attributes.badges_list.includes(state.entity_id)) {
            states.push(window.customUI.maybeChangeObject(_this2, state, false /* inDialog */, false /* allowHidden */));
          }
        });
      } else {
        states.push(stateObj);
        if (this._container) {
          this._container.style.display = 'inline-block';
          var params = { display: 'inline-block' };
          if (this._container.classList.contains('state')) {
            params.margin = 'var(--ha-badges-card-margin, 0)';
          }
          this.updateStyles(params);
        }
      }
      Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'HA-BADGES-CARD', { hass: hass, states: states });
      if (this._container) {
        this._container.updateStyles({
          width: 'var(--ha-badges-card-width, initial)',
          'text-align': 'var(--ha-badges-card-text-align, initial)'
        });
      }
      this.lastChild.style.fontSize = '85%';

      // Since this variable only affects badges mode - no need to clean it up.
      this.style.setProperty('--ha-state-label-badge-margin-bottom', '0');
    }
  }, {
    key: 'cleanBadgeStyle',
    value: function cleanBadgeStyle() {
      if (this._container) {
        this._container.updateStyles({
          display: '',
          width: '',
          'text-align': ''
        });
      }
      this.updateStyles({ display: '', margin: '' });
    }
  }, {
    key: 'applyThemes',
    value: function applyThemes(hass, modifiedObj) {
      var themeTarget = this;
      var themeName = 'default';
      if (this._container) {
        themeTarget = this._container;
      }
      if (modifiedObj.attributes.theme) {
        themeName = modifiedObj.attributes.theme;
      }
      Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])(themeTarget, hass.themes || { default_theme: 'default', themes: {} }, themeName);
    }
  }, {
    key: 'maybeHideEntity',
    value: function maybeHideEntity(modifiedObj) {
      if (!modifiedObj) {
        if (this.lastChild) {
          this.removeChild(this.lastChild);
        }
        if (this._container) {
          this._container.updateStyles({ margin: '0', padding: '0' });
        }
        return true;
      }
      if (this._container) {
        this._container.updateStyles({ margin: '', padding: '' });
      }
      return false;
    }
  }, {
    key: 'sliderEligible_',
    value: function sliderEligible_(domain, obj, inDialog) {
      if (inDialog) return false;
      return DOMAIN_TO_SLIDER_SUPPORT[domain] && DOMAIN_TO_SLIDER_SUPPORT[domain] & obj.attributes.supported_features && obj.attributes.state_card_mode && obj.attributes.state_card_mode !== 'no-slider';
    }
  }, {
    key: 'inputChanged',
    value: function inputChanged(hass, inDialog, stateObj) {
      if (!stateObj || !hass || !this._isAttached) return;
      var domain = Object(_home_assistant_polymer_src_common_entity_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);
      var modifiedObj = window.customUI.maybeChangeObject(this, stateObj, inDialog, true /* allowHidden */);

      if (this.maybeHideEntity(modifiedObj)) return;

      this.applyThemes(hass, modifiedObj);

      if (!inDialog && modifiedObj.attributes.state_card_mode === 'badges') {
        this.badgeMode(hass, modifiedObj, domain);
      } else {
        this.regularMode_(hass, inDialog, modifiedObj, domain);
      }
    }
  }, {
    key: 'regularMode_',
    value: function regularMode_(hass, inDialog, stateObj, domain) {
      this.cleanBadgeStyle();

      var params = {
        hass: hass,
        stateObj: stateObj,
        inDialog: inDialog
      };
      var originalStateCardType = Object(_home_assistant_polymer_src_common_entity_state_card_type_js__WEBPACK_IMPORTED_MODULE_3__["default"])(hass, stateObj);
      var customStateCardType = void 0;
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

      Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (secondaryStateCardType || customStateCardType || 'STATE-CARD-' + originalStateCardType).toUpperCase(), params);
    }
  }], [{
    key: 'properties',
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
    key: 'observers',
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
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _templateObject = _taggedTemplateLiteral(['\n    <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>\n    <style>\n      #container {\n        position: relative;\n      }\n      .second-line, .state-and-toggle, .state-info {\n        max-width: 100%;\n      }\n      .nowrap .state-and-toggle {\n        overflow: hidden;\n        flex-grow: 0;\n      }\n      .nowrap .second-line {\n        overflow: hidden;\n      }\n\n      .second-line {\n        padding-top: 20px;\n        padding-bottom: 16px;\n        margin-top: -20px;\n        margin-bottom: -16px;\n      }\n      .stretch .second-line, .stretch ha-themed-slider {\n        width: 100%;\n        --ha-paper-slider-width: 100%;\n      }\n      .nowrap .state-info {\n        min-width: initial;\n      }\n      ha-themed-slider, .top-wrapper {\n        min-width: 100px;\n        max-width: 100%;\n      }\n      .top-wrapper.stretch {\n        display: block;\n      }\n\n      .hidden {\n        display: none;\n      }\n    </style>\n\n    <div id=\'container\' class$=\'horizontal layout flex top-wrapper [[_computeWrapClass(mode, stretchSlider, lineTooLong, inDialog)]]\'>\n      <div class=\'horizontal layout justified flex-auto state-and-toggle\'>\n        <state-info\n            class=\'state-info flex-auto\'\n            hass=\'[[hass]]\'\n            state-obj=\'[[stateObj]]\'\n            in-dialog=\'[[showLastChanged(stateObj, inDialog, extra)]]\'\n            secondary-line$=\'[[hasExtra(extra)]]\'\n        >\n          <template is=\'dom-repeat\' items=\'[[extra]]\'>\n            <div>[[item]]</div>\n          </template>\n        </state-info>\n        <template is=\'dom-if\' if=\'[[breakSlider]]\' class=\'hidden\'>\n          <dynamic-with-extra hass=\'[[hass]]\' state-obj=\'[[stateObj]]\' control-element=\'[[controlElement]]\' in-dialog=\'[[inDialog]]\'></dynamic-with-extra>\n        </template>\n      </div>\n      <template is=\'dom-if\' if=\'[[showSlider]]\' restamp>\n        <div class=\'horizontal layout flex-auto end-justified second-line\'>\n          <ha-themed-slider\n            id=\'slider\'\n            max=[[max]]\n            min=[[min]]\n            theme=\'[[stateObj.attributes.slider_theme]]\'\n            is-on=\'[[isOn(stateObj, nameOn)]]\'\n            value=\'{{sliderValue}}\'\n            disable-off-when-min=\'{{disableOffWhenMin}}\'\n            on-change=\'sliderChanged\'\n            on-click=\'stopPropagation\'>\n          </ha-themed-slider>\n          <template is=\'dom-if\' if=\'[[!breakSlider]]\'>\n            <dynamic-with-extra hass=\'[[hass]]\' state-obj=\'[[stateObj]]\' control-element=\'[[controlElement]]\' in-dialog=\'[[inDialog]]\'></dynamic-with-extra>\n          </template>\n        </div>\n      </template>\n    </div>\n    '], ['\n    <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>\n    <style>\n      #container {\n        position: relative;\n      }\n      .second-line, .state-and-toggle, .state-info {\n        max-width: 100%;\n      }\n      .nowrap .state-and-toggle {\n        overflow: hidden;\n        flex-grow: 0;\n      }\n      .nowrap .second-line {\n        overflow: hidden;\n      }\n\n      .second-line {\n        padding-top: 20px;\n        padding-bottom: 16px;\n        margin-top: -20px;\n        margin-bottom: -16px;\n      }\n      .stretch .second-line, .stretch ha-themed-slider {\n        width: 100%;\n        --ha-paper-slider-width: 100%;\n      }\n      .nowrap .state-info {\n        min-width: initial;\n      }\n      ha-themed-slider, .top-wrapper {\n        min-width: 100px;\n        max-width: 100%;\n      }\n      .top-wrapper.stretch {\n        display: block;\n      }\n\n      .hidden {\n        display: none;\n      }\n    </style>\n\n    <div id=\'container\' class$=\'horizontal layout flex top-wrapper [[_computeWrapClass(mode, stretchSlider, lineTooLong, inDialog)]]\'>\n      <div class=\'horizontal layout justified flex-auto state-and-toggle\'>\n        <state-info\n            class=\'state-info flex-auto\'\n            hass=\'[[hass]]\'\n            state-obj=\'[[stateObj]]\'\n            in-dialog=\'[[showLastChanged(stateObj, inDialog, extra)]]\'\n            secondary-line$=\'[[hasExtra(extra)]]\'\n        >\n          <template is=\'dom-repeat\' items=\'[[extra]]\'>\n            <div>[[item]]</div>\n          </template>\n        </state-info>\n        <template is=\'dom-if\' if=\'[[breakSlider]]\' class=\'hidden\'>\n          <dynamic-with-extra hass=\'[[hass]]\' state-obj=\'[[stateObj]]\' control-element=\'[[controlElement]]\' in-dialog=\'[[inDialog]]\'></dynamic-with-extra>\n        </template>\n      </div>\n      <template is=\'dom-if\' if=\'[[showSlider]]\' restamp>\n        <div class=\'horizontal layout flex-auto end-justified second-line\'>\n          <ha-themed-slider\n            id=\'slider\'\n            max=[[max]]\n            min=[[min]]\n            theme=\'[[stateObj.attributes.slider_theme]]\'\n            is-on=\'[[isOn(stateObj, nameOn)]]\'\n            value=\'{{sliderValue}}\'\n            disable-off-when-min=\'{{disableOffWhenMin}}\'\n            on-change=\'sliderChanged\'\n            on-click=\'stopPropagation\'>\n          </ha-themed-slider>\n          <template is=\'dom-if\' if=\'[[!breakSlider]]\'>\n            <dynamic-with-extra hass=\'[[hass]]\' state-obj=\'[[stateObj]]\' control-element=\'[[controlElement]]\' in-dialog=\'[[inDialog]]\'></dynamic-with-extra>\n          </template>\n        </div>\n      </template>\n    </div>\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * @extends HTMLElement
 */

var StateCardWithSlider = function (_CuiBaseElement) {
  _inherits(StateCardWithSlider, _CuiBaseElement);

  function StateCardWithSlider() {
    _classCallCheck(this, StateCardWithSlider);

    return _possibleConstructorReturn(this, (StateCardWithSlider.__proto__ || Object.getPrototypeOf(StateCardWithSlider)).apply(this, arguments));
  }

  _createClass(StateCardWithSlider, [{
    key: 'ready',
    value: function ready() {
      _get(StateCardWithSlider.prototype.__proto__ || Object.getPrototypeOf(StateCardWithSlider.prototype), 'ready', this).call(this);
      this._onIronResize = this._onIronResize.bind(this);
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(StateCardWithSlider.prototype.__proto__ || Object.getPrototypeOf(StateCardWithSlider.prototype), 'connectedCallback', this).call(this);
      this._isConnected = true;
      window.addEventListener('resize', this._onIronResize);
      this._waitForLayout();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this._onIronResize);
      this._isConnected = false;
      _get(StateCardWithSlider.prototype.__proto__ || Object.getPrototypeOf(StateCardWithSlider.prototype), 'disconnectedCallback', this).call(this);
    }
  }, {
    key: '_waitForLayout',
    value: function _waitForLayout() {
      var _this2 = this;

      if (!this._isConnected) return;
      this._setMode();
      if (this._frameId) return;
      this.readyToCompute = false;
      this._frameId = window.requestAnimationFrame(function () {
        _this2._frameId = null;
        _this2.readyToCompute = true;
        _this2._onIronResize();
      });
    }
  }, {
    key: '_setMode',
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
    key: '_onIronResize',
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
    key: '_computeWrapClass',
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
    key: '_showSlider',
    value: function _showSlider(inDialog, stateObj, hideSlider) {
      if (inDialog || hideSlider) {
        return false;
      }
      return true;
    }
  }, {
    key: 'sliderChanged',
    value: function sliderChanged(ev) {
      var value = parseInt(ev.target.value, 10);
      var param = { entity_id: this.stateObj.entity_id };
      if (Number.isNaN(value)) return;
      var target = this.root.querySelector('#slider');
      if (ev.target !== target) {
        target = ev.target;
        // No Shadow DOM - we have access to original target.
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
    key: 'stateObjChanged',
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
    key: 'isOn',
    value: function isOn(stateObj, nameOn) {
      return stateObj && (!nameOn || stateObj.state === nameOn);
    }
  }, {
    key: 'stopPropagation',
    value: function stopPropagation(ev) {
      ev.stopPropagation();
    }
  }], [{
    key: 'template',
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject);
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        domain: String,
        serviceMin: String,
        serviceMax: String,
        valueName: String,
        setValueName: String,
        nameOn: { type: String, value: 'on' },
        min: { type: Number, value: 0 },
        max: { type: Number, value: 255 },

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
    key: 'observers',
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    <style is="custom-style" include="iron-flex iron-flex-alignment"></style>\n    <style>\n      #container {\n        position: relative;\n      }\n    </style>\n\n    <div id=\'container\' class=\'horizontal layout justified\'>\n      <state-info\n          hass=\'[[hass]]\'\n          class=\'state-info\'\n          state-obj=\'[[stateObj]]\'\n          in-dialog=\'[[showLastChanged(stateObj, inDialog, extra)]]\'\n          secondary-line$=\'[[hasExtra(extra)]]\'>\n        <template is=\'dom-repeat\' items=\'[[extra]]\'>\n          <div>[[item]]</div>\n        </template>\n      </state-info>\n      <dynamic-with-extra\n          hass=\'[[hass]]\'\n          state-obj=\'[[stateObj]]\'\n          control-element=\'[[controlElement]]\'\n          in-dialog=\'[[inDialog]]\'>\n      </dynamic-with-extra>\n    </div>\n    '], ['\n    <style is="custom-style" include="iron-flex iron-flex-alignment"></style>\n    <style>\n      #container {\n        position: relative;\n      }\n    </style>\n\n    <div id=\'container\' class=\'horizontal layout justified\'>\n      <state-info\n          hass=\'[[hass]]\'\n          class=\'state-info\'\n          state-obj=\'[[stateObj]]\'\n          in-dialog=\'[[showLastChanged(stateObj, inDialog, extra)]]\'\n          secondary-line$=\'[[hasExtra(extra)]]\'>\n        <template is=\'dom-repeat\' items=\'[[extra]]\'>\n          <div>[[item]]</div>\n        </template>\n      </state-info>\n      <dynamic-with-extra\n          hass=\'[[hass]]\'\n          state-obj=\'[[stateObj]]\'\n          control-element=\'[[controlElement]]\'\n          in-dialog=\'[[inDialog]]\'>\n      </dynamic-with-extra>\n    </div>\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * @extends HTMLElement
 */

var StateCardWithoutSlider = function (_CuiBaseElement) {
  _inherits(StateCardWithoutSlider, _CuiBaseElement);

  function StateCardWithoutSlider() {
    _classCallCheck(this, StateCardWithoutSlider);

    return _possibleConstructorReturn(this, (StateCardWithoutSlider.__proto__ || Object.getPrototypeOf(StateCardWithoutSlider)).apply(this, arguments));
  }

  _createClass(StateCardWithoutSlider, null, [{
    key: 'template',
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject);
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  var EventsMixin = function (_superClass) {
    _inherits(EventsMixin, _superClass);

    function EventsMixin() {
      _classCallCheck(this, EventsMixin);

      return _possibleConstructorReturn(this, (EventsMixin.__proto__ || Object.getPrototypeOf(EventsMixin)).apply(this, arguments));
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
  control_element: { type: 'string' },
  state_card_mode: {
    type: 'array',
    options: {
      light: SUPPORTED_SLIDER_MODES.concat('badges'),
      cover: SUPPORTED_SLIDER_MODES.concat('badges'),
      climate: SUPPORTED_SLIDER_MODES.concat('badges'),
      '*': ['badges']
    }
  },
  state_card_custom_ui_secondary: { type: 'string' },
  badges_list: { type: 'json' },
  show_last_changed: { type: 'boolean' },
  hide_control: { type: 'boolean' },
  extra_data_template: { type: 'string' },
  extra_badge: { type: 'json' },
  stretch_slider: { type: 'boolean' },
  slider_theme: { type: 'json' },
  theme: { type: 'string' },
  confirm_controls: { type: 'boolean' },
  confirm_controls_show_lock: { type: 'boolean' },
  hide_in_default_view: { type: 'boolean' },
  icon_color: { type: 'string' }
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
/* harmony import */ var _home_assistant_polymer_src_common_entity_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/compute_state_domain.js */ "../home-assistant-polymer/src/common/entity/compute_state_domain.js");
/* harmony import */ var _home_assistant_polymer_src_common_entity_get_view_entities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/get_view_entities.js */ "../home-assistant-polymer/src/common/entity/get_view_entities.js");
/* harmony import */ var _elements_ha_config_custom_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/ha-config-custom-ui.js */ "./src/elements/ha-config-custom-ui.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version.js */ "./src/utils/version.js");
/* harmony import */ var _hass_attribute_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hass-attribute-util.js */ "./src/utils/hass-attribute-util.js");








window.customUI = window.customUI || {
  SUPPORTED_SLIDER_MODES: ['single-line', 'break-slider', 'break-slider-toggle', 'hide-slider', 'no-slider'],

  domHost: function domHost(elem) {
    if (elem === document) return null;
    var root = elem.getRootNode();
    return root instanceof DocumentFragment ? /** @type {ShadowRoot} */root.host : root;
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
              elem._context.push('group.' + Object(_home_assistant_polymer_src_common_entity_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element.states[0]));
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
      return key.match('^' + option + '$');
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
      var value = window.customUI.computeTemplate(template, hass, states, stateObj, attributes, stateObj.untemplated_attributes && stateObj.untemplated_attributes[key] || attributes[key], stateObj.untemplated_state || stateObj.state);
      // In case of null don't set the value.
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
    }
    // Operating on context-aware attributes. Return shallow copy of object.
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
        var obj = window.customUI.maybeChangeObject(card, card.groupEntity, false /* inDialog */
        , false /* allowHidden */);
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
    }
    // Function renamed from handleWindowChange to _updateColumns on 3.7.18
    var f = partialCards.handleWindowChange || partialCards._updateColumns;
    partialCards.mqls.forEach(function (mql) {
      mql.removeListener(f);
    });
    partialCards.mqls = columns.map(function (width) {
      var mql = window.matchMedia('(min-width: ' + width + 'px)');
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
        main._updateHass({ states: main.hass.states });
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
              var viewEntities = Object(_home_assistant_polymer_src_common_entity_get_view_entities_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hass.states, entity);
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
      if (!haStateLabelBadge || !haStateLabelBadge.prototype.stateChanged) return;
      // Use named function to preserve 'this'.
      haStateLabelBadge.prototype.stateChanged = function update(stateObj) {
        // TODO: Call window.customUI.maybeChangeObject
        if (stateObj.attributes.theme) {
          if (this.hass.themes === null) {
            this.hass._themeWaiters = this.hass._themeWaiters || [];
            this.hass._themeWaiters.push(this);
          } else {
            Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, this.hass.themes || { default_theme: 'default', themes: {} }, stateObj.attributes.theme || 'default');
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
      var originalUpdateIconAppearance = stateBadge.prototype._updateIconAppearance;
      // Use named function to preserve 'this'.
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
      if (!haAttributes || !haAttributes.prototype.computeFiltersArray || !window.hassAttributeUtil) return;
      // Use named function to preserve 'this'.
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
          var config = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[key] || { type: window.hassAttributeUtil.UNKNOWN_TYPE };
          return this._initOpenObject(key, config.type === 'json' ? JSON.stringify(value) : value, secondary, config);
        };
      }
      if (haFormCustomize.prototype.getNewAttributesOptions) {
        // Use named function to preserve 'this'.
        haFormCustomize.prototype.getNewAttributesOptions = function customgetNewAttributesOptions(localAttributes, globalAttributes, existingAttributes, newAttributes) {
          var _this2 = this;

          var knownKeys = Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).filter(function (key) {
            var conf = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[key];
            return conf && (!conf.domains || !_this2.entity || conf.domains.includes(Object(_home_assistant_polymer_src_common_entity_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2.entity)));
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
    console.log('Loaded CustomUI ' + _version_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
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
    var functionBody = template.indexOf('return') >= 0 ? template : 'return `' + template + '`;';
    try {
      /* eslint-disable no-new-func */
      var func = new Function('hass', 'entities', 'entity', 'attributes', 'attribute', 'state', functionBody);
      /* eslint-enable no-new-func */
      return func(hass, entities, entity, attributes, attribute, state);
    } catch (e) {
      /* eslint-disable no-console */
      if (e instanceof SyntaxError || e instanceof ReferenceError) {
        console.warn(e.name + ': ' + e.message + ' in template ' + functionBody);
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
/* harmony default export */ __webpack_exports__["default"] = ('20181217');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc3MtYXR0cmlidXRlLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfV0lUSF9NT1JFX0lORk8iLCJET01BSU5TX0hJREVfTU9SRV9JTkZPIiwiRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSIsIlNUQVRFU19PRkYiLCJET01BSU5TX1RPR0dMRSIsIlNldCIsIlVOSVRfQyIsIlVOSVRfRiIsIkRFRkFVTFRfVklFV19FTlRJVFlfSUQiLCJhcHBseVRoZW1lc09uRWxlbWVudCIsImVsZW1lbnQiLCJ0aGVtZXMiLCJsb2NhbFRoZW1lIiwidXBkYXRlTWV0YSIsIl90aGVtZXMiLCJ0aGVtZU5hbWUiLCJkZWZhdWx0X3RoZW1lIiwic3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGhlbWUiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInByZWZpeGVkS2V5IiwidXBkYXRlU3R5bGVzIiwid2luZG93IiwiU2hhZHlDU1MiLCJzdHlsZVN1YnRyZWUiLCJtZXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidGhlbWVDb2xvciIsImR5bmFtaWNDb250ZW50VXBkYXRlciIsInJvb3QiLCJuZXdFbGVtZW50VGFnIiwiYXR0cmlidXRlcyIsInJvb3RFbCIsImN1c3RvbUVsIiwibGFzdENoaWxkIiwidGFnTmFtZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInRvTG93ZXJDYXNlIiwic2V0UHJvcGVydGllcyIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsImNhblRvZ2dsZURvbWFpbiIsImhhc3MiLCJkb21haW4iLCJzZXJ2aWNlcyIsImNhblRvZ2dsZVN0YXRlIiwic3RhdGVPYmoiLCJjb21wdXRlU3RhdGVEb21haW4iLCJzdGF0ZSIsInN1cHBvcnRlZF9mZWF0dXJlcyIsImNvbXB1dGVEb21haW4iLCJlbnRpdHlJZCIsInN1YnN0ciIsImluZGV4T2YiLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiRE9NQUlOX0RFVklDRV9DTEFTUyIsImJpbmFyeV9zZW5zb3IiLCJjb3ZlciIsInNlbnNvciIsIlVOS05PV05fVFlQRSIsIkFERF9UWVBFIiwiVFlQRV9UT19UQUciLCJzdHJpbmciLCJqc29uIiwiaWNvbiIsImJvb2xlYW4iLCJhcnJheSIsIkxPR0lDX1NUQVRFX0FUVFJJQlVURVMiLCJlbnRpdHlfcGljdHVyZSIsInVuZGVmaW5lZCIsImZyaWVuZGx5X25hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJlbXVsYXRlZF9odWUiLCJkb21haW5zIiwiZW11bGF0ZWRfaHVlX25hbWUiLCJoYWFza2FfaGlkZGVuIiwiaGFhc2thX25hbWUiLCJob21lYnJpZGdlX2hpZGRlbiIsImhvbWVicmlkZ2VfbmFtZSIsImF0dHJpYnV0aW9uIiwiY3VzdG9tX3VpX21vcmVfaW5mbyIsImN1c3RvbV91aV9zdGF0ZV9jYXJkIiwiZGV2aWNlX2NsYXNzIiwib3B0aW9ucyIsImFzc3VtZWRfc3RhdGUiLCJpbml0aWFsX3N0YXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsInZhbHVlIiwidG9TdHJpbmciLCJsaXRlcmFsVmFsdWUiLCJFcnJvciIsImh0bWxWYWx1ZSIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJodG1sIiwic3RyaW5ncyIsInRlbXBsYXRlIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwidiIsImlkeCIsImh0bWxMaXRlcmFsIiwiQ3VpQmFzZUVsZW1lbnQiLCJleHRyYXMiLCJleHRyYV9kYXRhX3RlbXBsYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJleHRyYSIsInN0YXRlcyIsImZpbHRlciIsImluRGlhbG9nIiwibGVuZ3RoIiwic2hvd19sYXN0X2NoYW5nZWQiLCJCb29sZWFuIiwiY29udHJvbEVsZW1lbnQiLCJTdHJpbmciLCJjb21wdXRlZCIsIlBvbHltZXIiLCJFbGVtZW50IiwiRHluYW1pY0VsZW1lbnQiLCJlbGVtZW50TmFtZSIsInRvVXBwZXJDYXNlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJ3aGVuRGVmaW5lZCIsInRoZW4iLCJEeW5hbWljV2l0aEV4dHJhIiwiX2F0dGFjaGVkIiwiX2lzQXR0YWNoZWQiLCJhdHRhY2hlZCIsImV4dHJhX2JhZGdlIiwiZXh0cmFCYWRnZXMiLCJleHRyYUJhZGdlIiwibWF5YmVDaGFuZ2VPYmplY3QiLCJhdHRyaWJ1dGUiLCJ1bml0IiwiYmxhY2tsaXN0IiwiYmxhY2tsaXN0X3N0YXRlcyIsInNvbWUiLCJSZWdFeHAiLCJ0ZXN0IiwiX2VudGl0eURpc3BsYXkiLCJleHRyYU9iaiIsImV4dHJhT2JqVmlzaWJsZSIsImhpZGVfY29udHJvbCIsImhhTG9jYWxpemUiLCJsb2NhbGl6ZSIsImNvbmZpcm1fY29udHJvbHMiLCJjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jayIsImUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJsb2NrIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsImFwcGx5VGhlbWVzIiwiZ2V0IiwiSGFDb25maWdDdXN0b21VaSIsIm5hbWUiLCJnZXROYW1lIiwic2V0TmFtZSIsImhpc3RvcnkiLCJiYWNrIiwiZmlyZSIsImlzV2lkZSIsIm9ic2VydmVyIiwiRXZlbnRzTWl4aW4iLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCIsImF0dHIiLCJkZWYiLCJpc09uIiwidGhlbWVkTWluIiwiZXYiLCJ0YXJnZXQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJwaW4iLCJub3RpZnkiLCJfdGhlbWVkTWluIiwiU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMiLCJET01BSU5fVE9fU0xJREVSX1NVUFBPUlQiLCJsaWdodCIsImNsaW1hdGUiLCJUWVBFX1RPX0NPTlRST0wiLCJ0b2dnbGUiLCJkaXNwbGF5IiwiU3RhdGVDYXJkQ3VzdG9tVWkiLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9jb250YWluZXIiLCJzZXRQcm9wZXJ0eSIsImlucHV0Q2hhbmdlZCIsIm1hcmdpbiIsInBhZGRpbmciLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiYmFkZ2VzX2xpc3QiLCJwdXNoIiwicGFyYW1zIiwid2lkdGgiLCJmb250U2l6ZSIsIm1vZGlmaWVkT2JqIiwidGhlbWVUYXJnZXQiLCJvYmoiLCJzdGF0ZV9jYXJkX21vZGUiLCJtYXliZUhpZGVFbnRpdHkiLCJiYWRnZU1vZGUiLCJyZWd1bGFyTW9kZV8iLCJjbGVhbkJhZGdlU3R5bGUiLCJvcmlnaW5hbFN0YXRlQ2FyZFR5cGUiLCJjdXN0b21TdGF0ZUNhcmRUeXBlIiwic2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSIsInN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeSIsInNsaWRlckVsaWdpYmxlXyIsInNlcnZpY2VNaW4iLCJzZXJ2aWNlTWF4IiwidmFsdWVOYW1lIiwic2V0VmFsdWVOYW1lIiwibmFtZU9uIiwibWluX3RlbXAiLCJtYXhfdGVtcCIsImNvbnRyb2xfZWxlbWVudCIsIlN0YXRlQ2FyZFdpdGhTbGlkZXIiLCJfb25Jcm9uUmVzaXplIiwiYmluZCIsIl9pc0Nvbm5lY3RlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfd2FpdEZvckxheW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfc2V0TW9kZSIsIl9mcmFtZUlkIiwicmVhZHlUb0NvbXB1dGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoaWRlU2xpZGVyIiwibW9kZSIsImxpbmVUb29Mb25nIiwiYnJlYWtTbGlkZXIiLCJzaG93U2xpZGVyIiwicHJldkJyZWFrU2xpZGVyIiwicHJldkhpZGVTbGlkZXIiLCIkIiwiY29udGFpbmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIm1pbkxpbmVCcmVhayIsIm1heExpbmVCcmVhayIsImNvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0YXRlSGVpZ2h0Iiwic3RyZXRjaFNsaWRlciIsInBhcnNlSW50IiwicGFyYW0iLCJpc05hTiIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJjYWxsU2VydmljZSIsInNsaWRlclZhbHVlIiwic3RyZXRjaF9zbGlkZXIiLCJTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIiwic3VwZXJDbGFzcyIsImRldGFpbCIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNvbXBvc2VkIiwibm9kZSIsImRpc3BhdGNoRXZlbnQiLCJTVVBQT1JURURfU0xJREVSX01PREVTIiwiY3VzdG9tVWlBdHRyaWJ1dGVzIiwiZGV2aWNlIiwidGVtcGxhdGVzIiwiX3N0YXRlRGlzcGxheSIsImNvbmNhdCIsInNsaWRlcl90aGVtZSIsImhpZGVfaW5fZGVmYXVsdF92aWV3IiwiaWNvbl9jb2xvciIsImhhc3NBdHRyaWJ1dGVzVXRpbCIsImRvbUhvc3QiLCJnZXRSb290Tm9kZSIsIkRvY3VtZW50RnJhZ21lbnQiLCJob3N0IiwibGlnaHRPclNoYWRvdyIsInNlbGVjdG9yIiwic2hhZG93Um9vdCIsImdldEVsZW1lbnRIaWVyYXJjaHkiLCJoaWVyYXJjaHkiLCJzaGlmdCIsImdldENvbnRleHQiLCJfY29udGV4dCIsImdyb3VwRW50aXR5IiwicmV2ZXJzZSIsImZpbmRNYXRjaCIsImZpbmQiLCJtYXRjaCIsIm9wdGlvbiIsIm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2UiLCJhcHBseUF0dHJpYnV0ZXMiLCJtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAiLCJjb250ZXh0IiwiYyIsIl9zZXRLZWVwIiwiX2N1aV9rZWVwIiwibWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJoYXNHbG9iYWwiLCJoYXNDaGFuZ2VzIiwidW50ZW1wbGF0ZWRfYXR0cmlidXRlcyIsInVudGVtcGxhdGVkX3N0YXRlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5IiwibWF5YmVBcHBseVRlbXBsYXRlcyIsIm5ld1Jlc3VsdCIsImNoZWNrQXR0cmlidXRlcyIsImxhc3RfY2hhbmdlZCIsImFsbG93SGlkZGVuIiwiZml4R3JvdXBUaXRsZXMiLCJob21lQXNzaXN0YW50TWFpbiIsImhhQ2FyZHMiLCJtYWluIiwiY2FyZHMiLCJjYXJkIiwibmFtZUVsZW0iLCJ0ZXh0Q29udGVudCIsImNvbnRyb2xDb2x1bW5zIiwiY29sdW1ucyIsInBhcnRpYWxDYXJkcyIsImYiLCJoYW5kbGVXaW5kb3dDaGFuZ2UiLCJfdXBkYXRlQ29sdW1ucyIsIm1xbHMiLCJtcWwiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInVzZUN1c3RvbWl6ZXIiLCJjdXN0b21pemVyIiwiaGlkZV9hdHRyaWJ1dGVzIiwidXBkYXRlQ29uZmlnUGFuZWwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImhhUGFuZWxDb25maWciLCJoYUNvbmZpZ05hdmlnYXRpb24iLCJjdWlQYXRjaCIsIl9vcmlnaW5hbENvbXB1dGVMb2FkZWQiLCJfY29tcHV0ZUxvYWRlZCIsIl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uIiwiX2NvbXB1dGVDYXB0aW9uIiwiX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uIiwiX2NvbXB1dGVEZXNjcmlwdGlvbiIsInBhZ2UiLCJwYWdlcyIsImNvbmYiLCJjYXB0aW9uIiwibG9hZGVkIiwiZ2V0SGFDb25maWdDdXN0b21VaSIsImhhQ29uZmlnQ3VzdG9tVWkiLCJpcm9uUGFnZXMiLCJsYXN0RWxlbWVudENoaWxkIiwic2VsZWN0IiwidmlzaWJsZSIsImluc3RhbGxTdGF0ZXNIb29rIiwiaG9tZUFzc2lzdGFudCIsIl91cGRhdGVIYXNzIiwib3JpZ2luYWxVcGRhdGUiLCJ1cGRhdGUiLCJuZXdFbnRpdHkiLCJfdGhlbWVXYWl0ZXJzIiwid2FpdGVyIiwic3RhdGVDaGFuZ2VkIiwiaW5zdGFsbFBhcnRpYWxDYXJkcyIsIl9kZWZhdWx0Vmlld0ZpbHRlciIsImV4Y2x1ZGVzIiwiZXhjbHVkZUVudGl0eUlkIiwiaW5zdGFsbEFjdGlvbk5hbWUiLCJrbGFzcyIsImRlZmluZVByb3BlcnR5IiwiY3VzdG9tTG9jYWxpemUiLCJhY3Rpb25fbmFtZSIsIl9fZGF0YSIsInNldCIsImluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSIsImhhU3RhdGVMYWJlbEJhZGdlIiwic3RhcnRJbnRlcnZhbCIsImluc3RhbGxTdGF0ZUJhZGdlIiwic3RhdGVCYWRnZSIsIl91cGRhdGVJY29uQXBwZWFyYW5jZSIsIm9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZSIsImJhY2tncm91bmRJbWFnZSIsImNvbG9yIiwiaW5zdGFsbEhhQXR0cmlidXRlcyIsImhhQXR0cmlidXRlcyIsImNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJjdXN0b21Db21wdXRlRmlsdGVyc0FycmF5IiwiZXh0cmFGaWx0ZXJzIiwic3BsaXQiLCJpbnN0YWxsSGFGb3JtQ3VzdG9taXplIiwiaGFGb3JtQ3VzdG9taXplIiwiaGFGb3JtQ3VzdG9taXplSW5pdERvbmUiLCJfY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsImN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUiLCJzZWNvbmRhcnkiLCJjb25maWciLCJfaW5pdE9wZW5PYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMiLCJjdXN0b21nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImxvY2FsQXR0cmlidXRlcyIsImdsb2JhbEF0dHJpYnV0ZXMiLCJleGlzdGluZ0F0dHJpYnV0ZXMiLCJrbm93bktleXMiLCJmaWx0ZXJGcm9tQXR0cmlidXRlcyIsInNvcnQiLCJpbnN0YWxsQ2xhc3NIb29rcyIsImNsYXNzSW5pdERvbmUiLCJpbml0IiwiaW5pdERvbmUiLCJydW5Ib29rcyIsImxvZyIsIkNVU1RPTV9VSV9MSVNUIiwidmVyc2lvbiIsInVybCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiZnVuY3Rpb25Cb2R5IiwiZnVuYyIsIkZ1bmN0aW9uIiwiU3ludGF4RXJyb3IiLCJSZWZlcmVuY2VFcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLElBQU1BLHNCQUFzQixlQUE1Qjs7QUFFUDtBQUNPLElBQU1DLG9CQUFvQixDQUMvQixTQUQrQixFQUUvQixPQUYrQixFQUcvQixjQUgrQixFQUkvQixjQUorQixFQUsvQixjQUwrQixFQU0vQixZQU4rQixFQU8vQixNQVArQixFQVEvQixjQVIrQixFQVMvQixPQVQrQixFQVUvQixRQVYrQixFQVcvQixPQVgrQixFQVkvQixRQVorQixFQWEvQixTQWIrQixDQUExQjs7QUFnQlA7QUFDTyxJQUFNQyx5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QkcsRUFpbEJPRyxNQWpsQlAsRUFpbEJlN0IsVUFqbEJmLEVBaWxCMkJnSSxTQWpsQjNCLEVBaWxCc0M5RyxLQWpsQnRDLEVBaWxCNkM7QUFDOUUsUUFBTWdhLGVBQWdCNVYsU0FBUy9ELE9BQVQsQ0FBaUIsUUFBakIsS0FBOEIsQ0FBL0IsR0FBb0MrRCxRQUFwQyxnQkFBMkRBLFFBQTNELE9BQXJCO0FBQ0EsUUFBSTtBQUNGO0FBQ0EsVUFBTTZWLE9BQU8sSUFBSUMsUUFBSixDQUNYLE1BRFcsRUFDSCxVQURHLEVBQ1MsUUFEVCxFQUNtQixZQURuQixFQUNpQyxXQURqQyxFQUM4QyxPQUQ5QyxFQUN1REYsWUFEdkQsQ0FBYjtBQUVBO0FBQ0EsYUFBT0MsS0FBS3ZhLElBQUwsRUFBV2MsUUFBWCxFQUFxQkcsTUFBckIsRUFBNkI3QixVQUE3QixFQUF5Q2dJLFNBQXpDLEVBQW9EOUcsS0FBcEQsQ0FBUDtBQUNELEtBTkQsQ0FNRSxPQUFPNkgsQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxVQUFLQSxhQUFhc1MsV0FBZCxJQUE4QnRTLGFBQWF1UyxjQUEvQyxFQUErRDtBQUM3RC9PLGdCQUFRQyxJQUFSLENBQWdCekQsRUFBRVksSUFBbEIsVUFBMkJaLEVBQUV3UyxPQUE3QixxQkFBb0RMLFlBQXBEO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBLFlBQU1uUyxDQUFOO0FBQ0Q7QUFDRjtBQWxtQmtDLENBQXJDO0FBb21CQTVKLE9BQU9nSCxRQUFQLENBQWdCcVUsSUFBaEIsRzs7Ozs7Ozs7Ozs7OztBQzVtQkEsK0RBQWUsVUFBZixFIiwiZmlsZSI6InNjcmlwdHMtZGJnLWVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9zY3JpcHRzLmpzXCIpO1xuIiwiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9ICdoYXNzOmJvb2ttYXJrJztcblxuLyoqIERvbWFpbnMgdGhhdCBoYXZlIGEgc3RhdGUgY2FyZC4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfQ0FSRCA9IFtcbiAgJ2NsaW1hdGUnLFxuICAnY292ZXInLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2lucHV0X3NlbGVjdCcsXG4gICdpbnB1dF9udW1iZXInLFxuICAnaW5wdXRfdGV4dCcsXG4gICdsb2NrJyxcbiAgJ21lZGlhX3BsYXllcicsXG4gICdzY2VuZScsXG4gICdzY3JpcHQnLFxuICAndGltZXInLFxuICAndmFjdXVtJyxcbiAgJ3dlYmxpbmsnLFxuXTtcblxuLyoqIERvbWFpbnMgd2l0aCBzZXBhcmF0ZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9NT1JFX0lORk8gPSBbXG4gICdhbGFybV9jb250cm9sX3BhbmVsJyxcbiAgJ2F1dG9tYXRpb24nLFxuICAnY2FtZXJhJyxcbiAgJ2NsaW1hdGUnLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2NvdmVyJyxcbiAgJ2ZhbicsXG4gICdncm91cCcsXG4gICdoaXN0b3J5X2dyYXBoJyxcbiAgJ2lucHV0X2RhdGV0aW1lJyxcbiAgJ2xpZ2h0JyxcbiAgJ2xvY2snLFxuICAnbWVkaWFfcGxheWVyJyxcbiAgJ3NjcmlwdCcsXG4gICdzdW4nLFxuICAndXBkYXRlcicsXG4gICd2YWN1dW0nLFxuICAnd2VhdGhlcidcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdyBubyBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfSElERV9NT1JFX0lORk8gPSBbXG4gICdpbnB1dF9udW1iZXInLFxuICAnaW5wdXRfc2VsZWN0JyxcbiAgJ2lucHV0X3RleHQnLFxuICAnc2NlbmUnLFxuICAnd2VibGluaydcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gICdjYW1lcmEnLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2hpc3RvcnlfZ3JhcGgnLFxuICAnc2NlbmUnLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcbiAgJ2Nsb3NlZCcsXG4gICdsb2NrZWQnLFxuICAnb2ZmJ1xuXTtcblxuLyoqIERvbWFpbnMgd2hlcmUgd2UgYWxsb3cgdG9nZ2xlIGluIExvdmVsYWNlLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfVE9HR0xFID0gbmV3IFNldChbXG4gICdmYW4nLFxuICAnaW5wdXRfYm9vbGVhbicsXG4gICdsaWdodCcsXG4gICdzd2l0Y2gnXG5dKTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9ICfCsEMnO1xuZXhwb3J0IGNvbnN0IFVOSVRfRiA9ICfCsEYnO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9ICdncm91cC5kZWZhdWx0X3ZpZXcnO1xuIiwiLyoqXG4gKiBBcHBseSBhIHRoZW1lIHRvIGFuIGVsZW1lbnQgYnkgc2V0dGluZyB0aGUgQ1NTIHZhcmlhYmxlcyBvbiBpdC5cbiAqXG4gKiBlbGVtZW50OiBFbGVtZW50IHRvIGFwcGx5IHRoZW1lIG9uLlxuICogdGhlbWVzOiBIQVNTIFRoZW1lIGluZm9ybWF0aW9uXG4gKiBsb2NhbFRoZW1lOiBzZWxlY3RlZCB0aGVtZS5cbiAqIHVwZGF0ZU1ldGE6IGJvb2xlYW4gaWYgd2Ugc2hvdWxkIHVwZGF0ZSB0aGUgdGhlbWUtY29sb3IgbWV0YSBlbGVtZW50LlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5VGhlbWVzT25FbGVtZW50KGVsZW1lbnQsIHRoZW1lcywgbG9jYWxUaGVtZSwgdXBkYXRlTWV0YSA9IGZhbHNlKSB7XG4gIGlmICghZWxlbWVudC5fdGhlbWVzKSB7XG4gICAgZWxlbWVudC5fdGhlbWVzID0ge307XG4gIH1cbiAgbGV0IHRoZW1lTmFtZSA9IHRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuICBpZiAobG9jYWxUaGVtZSA9PT0gJ2RlZmF1bHQnIHx8IChsb2NhbFRoZW1lICYmIHRoZW1lcy50aGVtZXNbbG9jYWxUaGVtZV0pKSB7XG4gICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgfVxuICBjb25zdCBzdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50Ll90aGVtZXMpO1xuICBpZiAodGhlbWVOYW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICB2YXIgdGhlbWUgPSB0aGVtZXMudGhlbWVzW3RoZW1lTmFtZV07XG4gICAgT2JqZWN0LmtleXModGhlbWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gJy0tJyArIGtleTtcbiAgICAgIGVsZW1lbnQuX3RoZW1lc1twcmVmaXhlZEtleV0gPSAnJztcbiAgICAgIHN0eWxlc1twcmVmaXhlZEtleV0gPSB0aGVtZVtrZXldO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtZW50LnVwZGF0ZVN0eWxlcykge1xuICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gIH0gZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgLy8gaW1wbGVtZW50IHVwZGF0ZVN0eWxlcygpIG1ldGhvZCBvZiBQb2xlbWVyIGVsZW1lbnRzXG4gICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlU3VidHJlZSgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8oZWxlbWVudCksIHN0eWxlcyk7XG4gIH1cblxuICBpZiAoIXVwZGF0ZU1ldGEpIHJldHVybjtcblxuICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXRoZW1lLWNvbG9yXScpO1xuICBpZiAobWV0YSkge1xuICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpKSB7XG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JywgbWV0YS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSk7XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lQ29sb3IgPSBzdHlsZXNbJy0tcHJpbWFyeS1jb2xvciddIHx8IG1ldGEuZ2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKTtcbiAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoZW1lQ29sb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFVwZGF0ZSByb290J3MgY2hpbGQgZWxlbWVudCB0byBiZSBuZXdFbGVtZW50VGFnIHJlcGxhY2luZyBhbm90aGVyIGV4aXN0aW5nIGNoaWxkIGlmIGFueS5cbiAqIENvcHkgYXR0cmlidXRlcyBpbnRvIHRoZSBjaGlsZCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljQ29udGVudFVwZGF0ZXIocm9vdCwgbmV3RWxlbWVudFRhZywgYXR0cmlidXRlcykge1xuICBjb25zdCByb290RWwgPSByb290O1xuICBsZXQgY3VzdG9tRWw7XG5cbiAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQgJiYgcm9vdEVsLmxhc3RDaGlsZC50YWdOYW1lID09PSBuZXdFbGVtZW50VGFnKSB7XG4gICAgY3VzdG9tRWwgPSByb290RWwubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIGlmIChyb290RWwubGFzdENoaWxkKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQocm9vdEVsLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0aW5nIGFuIGVsZW1lbnQgd2l0aCB1cHBlciBjYXNlIHdvcmtzIGZpbmUgaW4gQ2hyb21lLCBidXQgaW4gRkYgaXQgZG9lc24ndCBpbW1lZGlhdGVseVxuICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICBjdXN0b21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudFRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKSB7XG4gICAgY3VzdG9tRWwuc2V0UHJvcGVydGllcyhhdHRyaWJ1dGVzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBjdXN0b20gZWxlbWVudCBkZWZpbml0aW9uIHdhc24ndCBsb2FkZWQgeWV0IC0gc2V0UHJvcGVydGllcyB3b3VsZCBiZVxuICAgIC8vIG1pc3NpbmcsIGJ1dCBubyBoYXJtIGluIHNldHRpbmcgYXR0cmlidXRlcyBvbmUtYnktb25lIHRoZW4uXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjdXN0b21FbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoY3VzdG9tRWwpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKSB7XG4gIGNvbnN0IHNlcnZpY2VzID0gaGFzcy5zZXJ2aWNlc1tkb21haW5dO1xuICBpZiAoIXNlcnZpY2VzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChkb21haW4gPT09ICdsb2NrJykge1xuICAgIHJldHVybiAnbG9jaycgaW4gc2VydmljZXM7XG4gIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY292ZXInKSB7XG4gICAgcmV0dXJuICdvcGVuX2NvdmVyJyBpbiBzZXJ2aWNlcztcbiAgfVxuICByZXR1cm4gJ3R1cm5fb24nIGluIHNlcnZpY2VzO1xufVxuIiwiaW1wb3J0IGNhblRvZ2dsZURvbWFpbiBmcm9tICcuL2Nhbl90b2dnbGVfZG9tYWluLmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICByZXR1cm4gc3RhdGVPYmouc3RhdGUgPT09ICdvbicgfHwgc3RhdGVPYmouc3RhdGUgPT09ICdvZmYnO1xuICB9XG4gIGlmIChkb21haW4gPT09ICdjbGltYXRlJykge1xuICAgIHJldHVybiAhISgoc3RhdGVPYmouYXR0cmlidXRlcyB8fCB7fSkuc3VwcG9ydGVkX2ZlYXR1cmVzICYgNDA5Nik7XG4gIH1cblxuICByZXR1cm4gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlRG9tYWluKGVudGl0eUlkKSB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoMCwgZW50aXR5SWQuaW5kZXhPZignLicpKTtcbn1cbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9kb21haW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopIHtcbiAgcmV0dXJuIGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGdyb3VwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgcmVzdWx0W2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldEdyb3VwRW50aXRpZXMgZnJvbSAnLi9nZXRfZ3JvdXBfZW50aXRpZXMuanMnO1xuXG4vLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGVudGl0aWVzIHRoYXQgdGhlIHZpZXcgd2lsbCBzaG93XG4vLyBpbmNsdWRpbmcgZW1iZWRkZWQgZ3JvdXBzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld0VudGl0aWVzKGVudGl0aWVzLCB2aWV3KSB7XG4gIGNvbnN0IHZpZXdFbnRpdGllcyA9IHt9O1xuXG4gIHZpZXcuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5ICYmICFlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgIHZpZXdFbnRpdGllc1tlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcblxuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09ICdncm91cCcpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbnRpdGllcyA9IGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGVudGl0eSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBFbnRpdGllcykuZm9yRWFjaCgoZ3JFbnRpdHlJZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyRW50aXR5ID0gZ3JvdXBFbnRpdGllc1tnckVudGl0eUlkXTtcblxuICAgICAgICAgIGlmICghZ3JFbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgICAgICAgIHZpZXdFbnRpdGllc1tnckVudGl0eUlkXSA9IGdyRW50aXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmlld0VudGl0aWVzO1xufVxuIiwiaW1wb3J0IGNhblRvZ2dsZVN0YXRlIGZyb20gJy4vY2FuX3RvZ2dsZV9zdGF0ZS5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IHsgRE9NQUlOU19XSVRIX0NBUkQgfSBmcm9tICcuLi9jb25zdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlQ2FyZFR5cGUoaGFzcywgc3RhdGVPYmopIHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgcmV0dXJuICdkaXNwbGF5JztcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9DQVJELmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICByZXR1cm4gZG9tYWluO1xuICB9IGVsc2UgaWYgKGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSAmJlxuICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbCAhPT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gJ3RvZ2dsZSc7XG4gIH1cbiAgcmV0dXJuICdkaXNwbGF5Jztcbn1cbiIsImNvbnN0IGhhc3NBdHRyaWJ1dGVVdGlsID0ge307XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IFtcbiAgICAnYmF0dGVyeScsXG4gICAgJ2NvbGQnLFxuICAgICdjb25uZWN0aXZpdHknLFxuICAgICdkb29yJyxcbiAgICAnZ2FyYWdlX2Rvb3InLFxuICAgICdnYXMnLFxuICAgICdoZWF0JyxcbiAgICAnbGlnaHQnLFxuICAgICdsb2NrJyxcbiAgICAnbW9pc3R1cmUnLFxuICAgICdtb3Rpb24nLFxuICAgICdtb3ZpbmcnLFxuICAgICdvY2N1cGFuY3knLFxuICAgICdvcGVuaW5nJyxcbiAgICAncGx1ZycsXG4gICAgJ3Bvd2VyJyxcbiAgICAncHJlc2VuY2UnLFxuICAgICdwcm9ibGVtJyxcbiAgICAnc2FmZXR5JyxcbiAgICAnc21va2UnLFxuICAgICdzb3VuZCcsXG4gICAgJ3ZpYnJhdGlvbicsXG4gICAgJ3dpbmRvdydcbiAgXSxcbiAgY292ZXI6IFsnZ2FyYWdlJ10sXG4gIHNlbnNvcjogW1xuICAgICdiYXR0ZXJ5JyxcbiAgICAnaHVtaWRpdHknLFxuICAgICdpbGx1bWluYW5jZScsXG4gICAgJ3RlbXBlcmF0dXJlJ1xuICBdLFxufTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gJ2pzb24nO1xuaGFzc0F0dHJpYnV0ZVV0aWwuQUREX1RZUEUgPSAna2V5LXZhbHVlJztcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUcgPSB7XG4gIHN0cmluZzogJ2hhLWN1c3RvbWl6ZS1zdHJpbmcnLFxuICBqc29uOiAnaGEtY3VzdG9taXplLXN0cmluZycsXG4gIGljb246ICdoYS1jdXN0b21pemUtaWNvbicsXG4gIGJvb2xlYW46ICdoYS1jdXN0b21pemUtYm9vbGVhbicsXG4gIGFycmF5OiAnaGEtY3VzdG9taXplLWFycmF5JyxcbiAgJ2tleS12YWx1ZSc6ICdoYS1jdXN0b21pemUta2V5LXZhbHVlJyxcbn07XG5cbi8vIEF0dHJpYnV0ZXMgaGVyZSBzZXJ2ZSBkdWFsIHB1cnBvc2U6XG4vLyAxKSBBbnkga2V5IG9mIHRoaXMgb2JqZWN0IHdvbid0IGJlIHNob3duIGluIG1vcmUtaW5mbyB3aW5kb3cuXG4vLyAyKSBBbnkga2V5IHdoaWNoIGhhcyB2YWx1ZSBvdGhlciB0aGFuIHVuZGVmaW5lZCB3aWxsIGFwcGVhciBpbiBjdXN0b21pemF0aW9uXG4vLyAgICBjb25maWcgYWNjb3JkaW5nIHRvIGl0cyB2YWx1ZS5cbmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPVxuICBoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTIHx8IHtcbiAgICBlbnRpdHlfcGljdHVyZTogdW5kZWZpbmVkLFxuICAgIGZyaWVuZGx5X25hbWU6IHsgdHlwZTogJ3N0cmluZycsIGRlc2NyaXB0aW9uOiAnTmFtZScgfSxcbiAgICBpY29uOiB7IHR5cGU6ICdpY29uJyB9LFxuICAgIGVtdWxhdGVkX2h1ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZG9tYWluczogWydlbXVsYXRlZF9odWUnXVxuICAgIH0sXG4gICAgZW11bGF0ZWRfaHVlX25hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZG9tYWluczogWydlbXVsYXRlZF9odWUnXVxuICAgIH0sXG4gICAgaGFhc2thX2hpZGRlbjogdW5kZWZpbmVkLFxuICAgIGhhYXNrYV9uYW1lOiB1bmRlZmluZWQsXG4gICAgaG9tZWJyaWRnZV9oaWRkZW46IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgaG9tZWJyaWRnZV9uYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiB1bmRlZmluZWQsXG4gICAgYXR0cmlidXRpb246IHVuZGVmaW5lZCxcbiAgICBjdXN0b21fdWlfbW9yZV9pbmZvOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICBkZXZpY2VfY2xhc3M6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBvcHRpb25zOiBoYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTLFxuICAgICAgZGVzY3JpcHRpb246ICdEZXZpY2UgY2xhc3MnLFxuICAgICAgZG9tYWluczogWydiaW5hcnlfc2Vuc29yJywgJ2NvdmVyJywgJ3NlbnNvciddXG4gICAgfSxcbiAgICBoaWRkZW46IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjcmlwdGlvbjogJ0hpZGUgZnJvbSBVSScgfSxcbiAgICBhc3N1bWVkX3N0YXRlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkb21haW5zOiBbJ3N3aXRjaCcsICdsaWdodCcsICdjb3ZlcicsICdjbGltYXRlJywgJ2ZhbicsICdncm91cCddXG4gICAgfSxcbiAgICBpbml0aWFsX3N0YXRlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRvbWFpbnM6IFsnYXV0b21hdGlvbiddXG4gICAgfSxcbiAgICB1bml0X29mX21lYXN1cmVtZW50OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGhhc3NBdHRyaWJ1dGVVdGlsO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSBmdW5jdGlvbihwcm9wKSB7IHJldHVybiBwcm9wOyB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi9ib290LmpzJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzdGF0aWMgc3RyaW5nIHZhbHVlIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGZpbHRlclxuICogc3RyaW5ncyBieSBhc3NldGluZyB0aGF0IHRoZXkgaGF2ZSBiZWVuIGNyZWF0ZWQgdmlhIHRoaXMgY2xhc3MuIFRoZVxuICogYHZhbHVlYCBwcm9wZXJ0eSByZXR1cm5zIHRoZSBzdHJpbmcgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuY2xhc3MgTGl0ZXJhbFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZykge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMudmFsdWUgPSBzdHJpbmcudG9TdHJpbmcoKTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBMaXRlcmFsU3RyaW5nIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBsaXRlcmFsVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFMaXRlcmFsU3RyaW5nfSAqLyh2YWx1ZSkudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLWxpdGVyYWwgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sTGl0ZXJhbCBmdW5jdGlvbjogJHt2YWx1ZX1gXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGh0bWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnQgfSAqLyh2YWx1ZSkuaW5uZXJIVE1MO1xuICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiBsaXRlcmFsVmFsdWUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi10ZW1wbGF0ZSB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWwgZnVuY3Rpb246ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHRlbXBsYXRlIGxpdGVyYWwgdGFnIHRoYXQgY3JlYXRlcyBhbiBIVE1MIDx0ZW1wbGF0ZT4gZWxlbWVudCBmcm9tIHRoZVxuICogY29udGVudHMgb2YgdGhlIHN0cmluZy5cbiAqXG4gKiBUaGlzIGFsbG93cyB5b3UgdG8gd3JpdGUgYSBQb2x5bWVyIFRlbXBsYXRlIGluIEphdmFTY3JpcHQuXG4gKlxuICogVGVtcGxhdGVzIGNhbiBiZSBjb21wb3NlZCBieSBpbnRlcnBvbGF0aW5nIGBIVE1MVGVtcGxhdGVFbGVtZW50YHMgaW5cbiAqIGV4cHJlc3Npb25zIGluIHRoZSBKYXZhU2NyaXB0IHRlbXBsYXRlIGxpdGVyYWwuIFRoZSBuZXN0ZWQgdGVtcGxhdGUnc1xuICogYGlubmVySFRNTGAgaXMgaW5jbHVkZWQgaW4gdGhlIGNvbnRhaW5pbmcgdGVtcGxhdGUuICBUaGUgb25seSBvdGhlclxuICogdmFsdWVzIGFsbG93ZWQgaW4gZXhwcmVzc2lvbnMgYXJlIHRob3NlIHJldHVybmVkIGZyb20gYGh0bWxMaXRlcmFsYFxuICogd2hpY2ggZW5zdXJlcyBvbmx5IGxpdGVyYWwgdmFsdWVzIGZyb20gSlMgc291cmNlIGV2ZXIgcmVhY2ggdGhlIEhUTUwsIHRvXG4gKiBndWFyZCBhZ2FpbnN0IFhTUyByaXNrcy5cbiAqXG4gKiBBbGwgb3RoZXIgdmFsdWVzIGFyZSBkaXNhbGxvd2VkIGluIGV4cHJlc3Npb25zIHRvIGhlbHAgcHJldmVudCBYU1NcbiAqIGF0dGFja3M7IGhvd2V2ZXIsIGBodG1sTGl0ZXJhbGAgY2FuIGJlIHVzZWQgdG8gY29tcG9zZSBzdGF0aWNcbiAqIHN0cmluZyB2YWx1ZXMgaW50byB0ZW1wbGF0ZXMuIFRoaXMgaXMgdXNlZnVsIHRvIGNvbXBvc2Ugc3RyaW5ncyBpbnRvXG4gKiBwbGFjZXMgdGhhdCBkbyBub3QgYWNjZXB0IGh0bWwsIGxpa2UgdGhlIGNzcyB0ZXh0IG9mIGEgYHN0eWxlYFxuICogZWxlbWVudC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT46aG9zdHsgY29udGVudDpcIi4uLlwiIH08L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3RoaXMucGFydGlhbFRlbXBsYXRlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBwYXJ0aWFsVGVtcGxhdGUoKSB7IHJldHVybiBodG1sYDxzcGFuPlBhcnRpYWwhPC9zcGFuPmA7IH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFIVE1MVGVtcGxhdGVFbGVtZW50fSBDb25zdHJ1Y3RlZCBIVE1MVGVtcGxhdGVFbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gZnVuY3Rpb24gaHRtbChzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBodG1sVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgcmV0dXJuIHRlbXBsYXRlO1xufTtcblxuLyoqXG4gKiBBbiBodG1sIGxpdGVyYWwgdGFnIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgaHRtbGAgdG8gY29tcG9zZS5cbiAqIGEgbGl0ZXJhbCBzdHJpbmcuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+XG4gKiAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuICogICAgICAgICAgICR7dGhpcy5zdHlsZVRlbXBsYXRlKCl9XG4gKiAgICAgICAgIDwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7c3RhdGljVmFsdWV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XG4gKiAgICAgICAgcmV0dXJuIGh0bWxMaXRlcmFsYC5zaGFkb3dlZCB7IGJhY2tncm91bmQ6IGdyYXk7IH1gO1xuICogICAgIH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFMaXRlcmFsU3RyaW5nfSBDb25zdHJ1Y3RlZCBsaXRlcmFsIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgaHRtbExpdGVyYWwgPSBmdW5jdGlvbihzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBMaXRlcmFsU3RyaW5nKHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgbGl0ZXJhbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSkpO1xufTtcbiIsImltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEN1aUJhc2VFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICBleHRyYToge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaikge1xuICAgIGxldCBleHRyYXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2RhdGFfdGVtcGxhdGU7XG4gICAgaWYgKGV4dHJhcykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dHJhcykpIHtcbiAgICAgICAgZXh0cmFzID0gW2V4dHJhc107XG4gICAgICB9XG4gICAgICByZXR1cm4gZXh0cmFzLm1hcChleHRyYSA9PiB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICBleHRyYSxcbiAgICAgICAgaGFzcyxcbiAgICAgICAgaGFzcy5zdGF0ZXMsXG4gICAgICAgIHN0YXRlT2JqLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgICAvKiBhdHRyaWJ1dGU9ICovIHVuZGVmaW5lZCxcbiAgICAgICAgc3RhdGVPYmouc3RhdGUsXG4gICAgICApKS5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdCAhPT0gbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHNob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZXh0cmEubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICEhc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZDtcbiAgfVxuXG4gIGhhc0V4dHJhKGV4dHJhKSB7XG4gICAgcmV0dXJuIGV4dHJhLmxlbmd0aCA+IDA7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEN1aUJhc2VFbGVtZW50O1xuIiwiaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBEeW5hbWljRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGVsZW1lbnROYW1lOiBTdHJpbmcsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpJyxcbiAgICBdO1xuICB9XG5cbiAgb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpIHtcbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgZWxlbWVudE5hbWUgPyBlbGVtZW50TmFtZS50b1VwcGVyQ2FzZSgpIDogJ0RJVicsXG4gICAgICB7IGhhc3MsIHN0YXRlT2JqLCBpbkRpYWxvZyB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLWVsZW1lbnQnLCBEeW5hbWljRWxlbWVudCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuXG5pbXBvcnQgJy4vZHluYW1pYy1lbGVtZW50LmpzJztcbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG5jdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnc3RhdGUtY2FyZC1kaXNwbGF5JykudGhlbigoKSA9PiB7XG4gIC8qKlxuICAgKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICAgKi9cbiAgY2xhc3MgRHluYW1pY1dpdGhFeHRyYSBleHRlbmRzIGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtY2FyZC1kaXNwbGF5Jykge1xuICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2wtd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAtNHB4IC0xNnB4IC00cHggMDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1zdGF0ZS1sYWJlbC1iYWRnZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBkeW5hbWljLWVsZW1lbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgICNvdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgI2xvY2sge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICAgICAgI2xvY2suaGEtY292ZXItY29udHJvbHMge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuZXh0cmEge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgICAgIC0taGEtbGFiZWwtYmFkZ2Utc2l6ZTogMzZweDtcbiAgICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcyQ9J1tbZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpXV0gaG9yaXpvbnRhbCBsYXlvdXQnPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbZXh0cmFPYmpWaXNpYmxlXV0nPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCdcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9J1tbZXh0cmFPYmpdXSdcbiAgICAgICAgICAgICAgICAgICAgb24tZG9tLWNoYW5nZT0nZXh0cmFEb21DaGFuZ2VkJz5cbiAgICAgICAgICAgIDxoYS1zdGF0ZS1sYWJlbC1iYWRnZSBoYXNzPSdbW2hhc3NdXScgc3RhdGU9J1tbaXRlbV1dJz48L2hhLXN0YXRlLWxhYmVsLWJhZGdlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkeW5hbWljLWVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGNsYXNzPSdmbGV4J1xuICAgICAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgICAgICAgZWxlbWVudC1uYW1lPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgICAgICA8L2R5bmFtaWMtZWxlbWVudD5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2lzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3ZlcmxheVwiIG9uLWNsaWNrPSdjbGlja0hhbmRsZXInPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2tdXSc+XG4gICAgICAgICAgICAgICAgICAgIDxpcm9uLWljb24gaWQ9XCJsb2NrXCIgY2xhc3MkPVwiW1tjb250cm9sRWxlbWVudF1dXCIgaWNvbj1cIm1kaTpsb2NrLW91dGxpbmVcIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0ZSc+W1tjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNzOiBPYmplY3QsXG4gICAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICAgIGV4dHJhT2JqOiB7XG4gICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIF9hdHRhY2hlZCknLFxuICAgICAgICB9LFxuICAgICAgICBfYXR0YWNoZWQ6IEJvb2xlYW4sXG4gICAgICAgIGV4dHJhT2JqVmlzaWJsZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZyknLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgYXR0YWNoZWQpIHtcbiAgICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZSB8fCAhYXR0YWNoZWQpIHJldHVybiBbXTtcbiAgICAgIGxldCBleHRyYUJhZGdlcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfYmFkZ2U7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFCYWRnZXMpKSB7XG4gICAgICAgIGV4dHJhQmFkZ2VzID0gW2V4dHJhQmFkZ2VzXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHRyYUJhZGdlcy5tYXAoKGV4dHJhQmFkZ2UpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmIChleHRyYUJhZGdlLmVudGl0eV9pZCAmJiBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0pIHtcbiAgICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0sIHRoaXMuaW5EaWFsb2csXG4gICAgICAgICAgICAvKiBhbGxvd0hpZGRlbj0gKi9mYWxzZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGV4dHJhQmFkZ2UuYXR0cmlidXRlICYmXG4gICAgICAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgIHN0YXRlOiBTdHJpbmcoc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0pLFxuICAgICAgICAgICAgZW50aXR5X2lkOiAnbm9uZS5ub25lJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgdW5pdF9vZl9tZWFzdXJlbWVudDogZXh0cmFCYWRnZS51bml0IH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCBibGFja2xpc3QgPSBleHRyYUJhZGdlLmJsYWNrbGlzdF9zdGF0ZXM7XG4gICAgICAgIGlmIChibGFja2xpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShibGFja2xpc3QpKSB7XG4gICAgICAgICAgICBibGFja2xpc3QgPSBbYmxhY2tsaXN0XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJsYWNrbGlzdC5zb21lKHYgPT4gUmVnRXhwKHYpLnRlc3QocmVzdWx0LnN0YXRlLnRvU3RyaW5nKCkpKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5fZW50aXR5RGlzcGxheSA9ICcnO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSkuZmlsdGVyKGV4dHJhQmFkZ2UgPT4gZXh0cmFCYWRnZSAhPSBudWxsKTtcbiAgICB9XG5cbiAgICBjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZykge1xuICAgICAgaWYgKGluRGlhbG9nIHx8ICFleHRyYU9iaikgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGV4dHJhT2JqLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGV4dHJhT2JqVmlzaWJsZSA/ICdleHRyYScgOiAnJztcbiAgICB9XG5cbiAgICBfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhpZGVfY29udHJvbDtcbiAgICB9XG5cbiAgICBjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKSB7XG4gICAgICAvLyBoYUxvY2FsaXplIHJlbW92ZWQgaW4gMC42MVxuICAgICAgcmV0dXJuIHN1cGVyLmNvbXB1dGVTdGF0ZURpc3BsYXkodGhpcy5oYUxvY2FsaXplIHx8IHRoaXMubG9jYWxpemUsIHN0YXRlT2JqKTtcbiAgICB9XG5cbiAgICBpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9scyB8fFxuICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2s7XG4gICAgfVxuXG4gICAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICBjb25zdCBsb2NrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2NrJyk7XG4gICAgICBpZiAobG9jaykge1xuICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3Blbi1vdXRsaW5lJztcbiAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJzAuMSc7XG4gICAgICB9XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3V0bGluZSc7XG4gICAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwMDApO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBhcHBseVRoZW1lcyhoYXNzLCBlbGVtZW50LCBzdGF0ZU9iaikge1xuICAgICAgY29uc3QgdGhlbWVOYW1lID0gc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCc7XG4gICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgZWxlbWVudCwgaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgdGhlbWVOYW1lKTtcbiAgICB9XG5cbiAgICBleHRyYURvbUNoYW5nZWQoKSB7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKVxuICAgICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwbHlUaGVtZXModGhpcy5oYXNzLCBlbGVtLCBlbGVtLnN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy13aXRoLWV4dHJhJywgRHluYW1pY1dpdGhFeHRyYSk7XG59KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgRXZlbnRzTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2V2ZW50cy1taXhpbi5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbVVpIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lci5FbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPjwvc3R5bGU+XG4gICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPSdtZGk6YXJyb3ctbGVmdCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdfYmFja0hhbmRsZXInXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPGRpdiBtYWluLXRpdGxlPkN1c3RvbSBVSSBzZXR0aW5nczwvZGl2PlxuICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT0nW1tpc1dpZGVdXSc+XG4gICAgICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9J0RldmljZSBuYW1lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgU2V0IGRldmljZSBuYW1lIHNvIHRoYXQgeW91IGNhbiByZWZlcmVuY2UgaXQgaW4gcGVyLWRldmljZSBzZXR0aW5nc1xuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPSdOYW1lJ1xuICAgICAgICAgICAgICB2YWx1ZT0ne3tuYW1lfX0nXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wYXBlci1jYXJkPlxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnbmFtZUNoYW5nZWQnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLm5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICB9XG5cbiAgbmFtZUNoYW5nZWQobmFtZSkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5zZXROYW1lKG5hbWUpO1xuICB9XG5cbiAgX2JhY2tIYW5kbGVyKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB0aGlzLmZpcmUoJ2xvY2F0aW9uLWNoYW5nZWQnKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS1jb25maWctY3VzdG9tLXVpJywgSGFDb25maWdDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhVGhlbWVkU2xpZGVyIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0taGEtdGhlbWVkLXNsaWRlci1tYXJnaW4sIGluaXRpYWwpO1xuICAgICAgfVxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXItcGluLXN0YXJ0LWNvbG9yOiAgdmFyKC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbi5pcy1vbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXNsaWRlciB7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWhhLXBhcGVyLXNsaWRlci13aWR0aCwgMjAwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItc2xpZGVyXG4gICAgICAgICBtaW49J1tbX3RoZW1lZE1pbl1dJ1xuICAgICAgICAgbWF4PSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1heFwiLCBtYXgpXV0nXG4gICAgICAgICBwaW49J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwicGluXCIsIHBpbildXSdcbiAgICAgICAgIGNsYXNzJD0nW1tjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIF90aGVtZWRNaW4pXV0nIHZhbHVlPSdbW3ZhbHVlXV0nXG4gICAgICAgICBvbi1jaGFuZ2U9J3ZhbHVlQ2hhbmdlZCc+XG4gICAgPC9wYXBlci1zbGlkZXI+XG4gICAgYDtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbiA9ICF0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoaXMudGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbik7XG4gICAgdGhpcy5jb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoaXMudGhlbWUsIHRoaXMuZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgIH0sXG4gICAgICBwaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlzT246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICB0aGVtZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX3RoZW1lZE1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWluXCIsIG1pbiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpJyxcbiAgICBdO1xuICB9XG5cbiAgY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKSB7XG4gICAgdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkID0gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZShcbiAgICAgIHRoZW1lLCAncmVwb3J0X3doZW5fbm90X2NoYW5nZWQnLCAhZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBhdHRyLCBkZWYpIHtcbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGlmIChhdHRyIGluIHRoZW1lKSB7XG4gICAgICAgIHJldHVybiB0aGVtZVthdHRyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgdGhlbWVkTWluKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChpc09uKSB7XG4gICAgICByZXN1bHQgKz0gJ2lzLW9uICc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pIHx8IHRoZW1lZE1pbiA9PT0gMCkge1xuICAgICAgLy8gSWYgb2ZmV2hlbk1pbiBpcyBlbmFibGVkIGRvbid0IGN1c3RvbWl6ZS5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3Jlc3VsdH1kaXNhYmxlLW9mZi13aGVuLW1pbmA7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCAmJiB0aGlzLnZhbHVlID09PSBldi50YXJnZXQudmFsdWUpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLXRoZW1lZC1zbGlkZXInLCBIYVRoZW1lZFNsaWRlcik7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcbmltcG9ydCBzdGF0ZUNhcmRUeXBlIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfY2FyZF90eXBlLmpzJztcblxuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyc7XG5cbmNvbnN0IFNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTID0gWydjb25maWd1cmF0b3InXTtcbmNvbnN0IERPTUFJTl9UT19TTElERVJfU1VQUE9SVCA9IHtcbiAgbGlnaHQ6IDEsIC8vIFNVUFBPUlRfQlJJR0hUTkVTU1xuICBjb3ZlcjogNCwgLy8gU1VQUE9SVF9TRVRfUE9TSVRJT05cbiAgY2xpbWF0ZTogMSwgLy8gU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbn07XG5jb25zdCBUWVBFX1RPX0NPTlRST0wgPSB7XG4gIHRvZ2dsZTogJ2hhLWVudGl0eS10b2dnbGUnLFxuICBkaXNwbGF5OiAnJyxcbiAgY292ZXI6ICdoYS1jb3Zlci1jb250cm9scycsXG59O1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZEN1c3RvbVVpIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiknLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gJ0RJVicgJiZcbiAgICAgICAgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykgfHwgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2hpbGQtY2FyZCcpKSkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAvLyBTaW5jZSB0aGlzIGRvZXNuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIC0gbm8gbmVlZCB0byBjbGVhciBpdC5cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLCAndmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCBpbmhlcml0KScpO1xuXG4gICAgICAvLyBQb2x5ZmlsbCAndXBkYXRlU3R5bGVzJy5cbiAgICAgIGlmICghY29udGFpbmVyLnVwZGF0ZVN0eWxlcykge1xuICAgICAgICBjb250YWluZXIudXBkYXRlU3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBzdHlsZXNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VkKHRoaXMuaGFzcywgdGhpcy5pbkRpYWxvZywgdGhpcy5zdGF0ZU9iaik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICB0aGlzLl9jb250YWluZXIsIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgJ2RlZmF1bHQnKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBiYWRnZU1vZGUoaGFzcywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIGNvbnN0IHN0YXRlcyA9IFtdO1xuICAgIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbaWRdO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBJRCAke2lkfSBpbiBncm91cCAke3N0YXRlT2JqLmVudGl0eV9pZH1gKTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0IHx8XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0LmluY2x1ZGVzKHN0YXRlLmVudGl0eV9pZCkpIHtcbiAgICAgICAgICBzdGF0ZXMucHVzaCh3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBzdGF0ZSwgZmFsc2UgLyogaW5EaWFsb2cgKi8sIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZU9iaik7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykpIHtcbiAgICAgICAgICBwYXJhbXMubWFyZ2luID0gJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLW1hcmdpbiwgMCknO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAnSEEtQkFER0VTLUNBUkQnLFxuICAgICAgeyBoYXNzLCBzdGF0ZXMgfSk7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIHdpZHRoOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtd2lkdGgsIGluaXRpYWwpJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtdGV4dC1hbGlnbiwgaW5pdGlhbCknLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubGFzdENoaWxkLnN0eWxlLmZvbnRTaXplID0gJzg1JSc7XG5cbiAgICAvLyBTaW5jZSB0aGlzIHZhcmlhYmxlIG9ubHkgYWZmZWN0cyBiYWRnZXMgbW9kZSAtIG5vIG5lZWQgdG8gY2xlYW4gaXQgdXAuXG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oYS1zdGF0ZS1sYWJlbC1iYWRnZS1tYXJnaW4tYm90dG9tJywgJzAnKTtcbiAgfVxuXG4gIGNsZWFuQmFkZ2VTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnIH0pO1xuICB9XG5cbiAgYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopIHtcbiAgICBsZXQgdGhlbWVUYXJnZXQgPSB0aGlzO1xuICAgIGxldCB0aGVtZU5hbWUgPSAnZGVmYXVsdCc7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhlbWVUYXJnZXQgPSB0aGlzLl9jb250YWluZXI7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICB0aGVtZU5hbWUgPSBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lO1xuICAgIH1cbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgIHRoZW1lVGFyZ2V0LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgbWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSB7XG4gICAgaWYgKCFtb2RpZmllZE9iaikge1xuICAgICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNsaWRlckVsaWdpYmxlXyhkb21haW4sIG9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiZcbiAgICAgIChET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmIG9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykgJiZcbiAgICAgIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAmJiBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgIT09ICduby1zbGlkZXInO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MgfHwgIXRoaXMuX2lzQXR0YWNoZWQpIHJldHVybjtcbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICAgIGNvbnN0IG1vZGlmaWVkT2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgdGhpcywgc3RhdGVPYmosIGluRGlhbG9nLCB0cnVlIC8qIGFsbG93SGlkZGVuICovKTtcblxuICAgIGlmICh0aGlzLm1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikpIHJldHVybjtcblxuICAgIHRoaXMuYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopO1xuXG4gICAgaWYgKCFpbkRpYWxvZyAmJiBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSA9PT0gJ2JhZGdlcycpIHtcbiAgICAgIHRoaXMuYmFkZ2VNb2RlKGhhc3MsIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfVxuICB9XG5cbiAgcmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgdGhpcy5jbGVhbkJhZGdlU3R5bGUoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGhhc3MsXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIGluRGlhbG9nLFxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxTdGF0ZUNhcmRUeXBlID0gc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaik7XG4gICAgbGV0IGN1c3RvbVN0YXRlQ2FyZFR5cGU7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5O1xuXG4gICAgaWYgKGRvbWFpbiA9PT0gJ2xpZ2h0JyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gICAgICAgIHNlcnZpY2VNaW46ICd0dXJuX29mZicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICd0dXJuX29uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnYnJpZ2h0bmVzcycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY292ZXItY29udHJvbHMnLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ2Nsb3NlX2NvdmVyJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF9jb3Zlcl9wb3NpdGlvbicsXG4gICAgICAgIHNldFZhbHVlTmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnY3VycmVudF9wb3NpdGlvbicsXG4gICAgICAgIG5hbWVPbjogJ29wZW4nLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjbGltYXRlJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY2xpbWF0ZS1zdGF0ZScsXG4gICAgICAgIG1pbjogc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcCB8fCAtMTAwLFxuICAgICAgICBtYXg6IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXAgfHwgMjAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHZhbHVlTmFtZTogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgbmFtZU9uOiAnJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV07XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZCAmJlxuICAgICAgICAgICAgICAgIVNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTLmluY2x1ZGVzKG9yaWdpbmFsU3RhdGVDYXJkVHlwZSkpIHtcbiAgICAgIHBhcmFtcy5pbkRpYWxvZyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gJyc7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudDtcbiAgICB9XG5cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgKHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgfHwgY3VzdG9tU3RhdGVDYXJkVHlwZSB8fCBgU1RBVEUtQ0FSRC0ke29yaWdpbmFsU3RhdGVDYXJkVHlwZX1gKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcGFyYW1zKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLWN1c3RvbS11aScsIFN0YXRlQ2FyZEN1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuaW1wb3J0ICcuL2hhLXRoZW1lZC1zbGlkZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLnNlY29uZC1saW5lLCAuc3RhdGUtYW5kLXRvZ2dsZSwgLnN0YXRlLWluZm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1hbmQtdG9nZ2xlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc2Vjb25kLWxpbmUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kLWxpbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgIH1cbiAgICAgIC5zdHJldGNoIC5zZWNvbmQtbGluZSwgLnN0cmV0Y2ggaGEtdGhlbWVkLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWhhLXBhcGVyLXNsaWRlci13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWluZm8ge1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICBoYS10aGVtZWQtc2xpZGVyLCAudG9wLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAudG9wLXdyYXBwZXIuc3RyZXRjaCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcyQ9J2hvcml6b250YWwgbGF5b3V0IGZsZXggdG9wLXdyYXBwZXIgW1tfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpXV0nPlxuICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkIGZsZXgtYXV0byBzdGF0ZS1hbmQtdG9nZ2xlJz5cbiAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvIGZsZXgtYXV0bydcbiAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2JyZWFrU2xpZGVyXV0nIGNsYXNzPSdoaWRkZW4nPlxuICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc2hvd1NsaWRlcl1dJyByZXN0YW1wPlxuICAgICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBmbGV4LWF1dG8gZW5kLWp1c3RpZmllZCBzZWNvbmQtbGluZSc+XG4gICAgICAgICAgPGhhLXRoZW1lZC1zbGlkZXJcbiAgICAgICAgICAgIGlkPSdzbGlkZXInXG4gICAgICAgICAgICBtYXg9W1ttYXhdXVxuICAgICAgICAgICAgbWluPVtbbWluXV1cbiAgICAgICAgICAgIHRoZW1lPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuc2xpZGVyX3RoZW1lXV0nXG4gICAgICAgICAgICBpcy1vbj0nW1tpc09uKHN0YXRlT2JqLCBuYW1lT24pXV0nXG4gICAgICAgICAgICB2YWx1ZT0ne3tzbGlkZXJWYWx1ZX19J1xuICAgICAgICAgICAgZGlzYWJsZS1vZmYtd2hlbi1taW49J3t7ZGlzYWJsZU9mZldoZW5NaW59fSdcbiAgICAgICAgICAgIG9uLWNoYW5nZT0nc2xpZGVyQ2hhbmdlZCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdzdG9wUHJvcGFnYXRpb24nPlxuICAgICAgICAgIDwvaGEtdGhlbWVkLXNsaWRlcj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWJyZWFrU2xpZGVyXV0nPlxuICAgICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1pbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1heDogU3RyaW5nLFxuICAgICAgdmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICBzZXRWYWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIG5hbWVPbjogeyB0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb24nIH0sXG4gICAgICBtaW46IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMCB9LFxuICAgICAgbWF4OiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDI1NSB9LFxuXG4gICAgICBzbGlkZXJWYWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiBCb29sZWFuLFxuICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgc3RyZXRjaFNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYnJlYWtTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGhpZGVTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGxpbmVUb29Mb25nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBtaW5MaW5lQnJlYWs6IE51bWJlcixcbiAgICAgIG1heExpbmVCcmVhazogTnVtYmVyLFxuICAgICAgc2hvd1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX29uSXJvblJlc2l6ZSA9IHRoaXMuX29uSXJvblJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5faXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKScsXG4gICAgXTtcbiAgfVxuXG4gIF93YWl0Rm9yTGF5b3V0KCkge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0ZWQpIHJldHVybjtcbiAgICB0aGlzLl9zZXRNb2RlKCk7XG4gICAgaWYgKHRoaXMuX2ZyYW1lSWQpIHJldHVybjtcbiAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gZmFsc2U7XG4gICAgdGhpcy5fZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uSXJvblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldE1vZGUoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgaGlkZVNsaWRlcjogdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInICYmIHRoaXMubGluZVRvb0xvbmcsXG4gICAgICBicmVha1NsaWRlcjpcbiAgICAgICAgICAgKHRoaXMubW9kZSA9PT0gJ2JyZWFrLXNsaWRlcicgfHwgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSAmJlxuICAgICAgICAgICB0aGlzLmxpbmVUb29Mb25nLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLnNob3dTbGlkZXIpIHtcbiAgICAgIG9iai5icmVha1NsaWRlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICB9XG5cbiAgX29uSXJvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVhZHlUb0NvbXB1dGUpIHJldHVybjtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbm8tc2xpZGVyJykge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgaGlkZVNsaWRlcjogdHJ1ZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldkJyZWFrU2xpZGVyID0gdGhpcy5icmVha1NsaWRlcjtcbiAgICBjb25zdCBwcmV2SGlkZVNsaWRlciA9IHRoaXMuaGlkZVNsaWRlcjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuJDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPT09IDApIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPD0gdGhpcy5taW5MaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyV2lkdGggPj0gdGhpcy5tYXhMaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZIaWRlU2xpZGVyICYmIHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHVuaGlkZSB0aGUgc2xpZGVyIGluIG9yZGVyIHRvIHJlY2FsY3VsYXRlIGhlaWdodC5cbiAgICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgc3RhdGVIZWlnaHQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnN0YXRlLWluZm8nKS5jbGllbnRIZWlnaHQ7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gY29udGFpbmVySGVpZ2h0ID4gc3RhdGVIZWlnaHQgKiAxLjU7XG4gICAgICBpZiAodGhpcy5saW5lVG9vTG9uZykge1xuICAgICAgICB0aGlzLm1pbkxpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgfSBlbHNlIGlmICghcHJldkJyZWFrU2xpZGVyKSB7XG4gICAgICAgIHRoaXMubWF4TGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgfVxuXG4gIF9jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZS1saW5lJykge1xuICAgICAgcmV0dXJuICdub3dyYXAnO1xuICAgIH1cbiAgICBpZiAoc3RyZXRjaFNsaWRlciAmJiBsaW5lVG9vTG9uZykge1xuICAgICAgcmV0dXJuICdzdHJldGNoIHdyYXAnO1xuICAgIH1cbiAgICByZXR1cm4gJ3dyYXAnO1xuICB9XG5cbiAgX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKSB7XG4gICAgaWYgKGluRGlhbG9nIHx8IGhpZGVTbGlkZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBjb25zdCBwYXJhbSA9IHsgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9O1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm47XG4gICAgbGV0IHRhcmdldCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVyJyk7XG4gICAgaWYgKGV2LnRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAvLyBObyBTaGFkb3cgRE9NIC0gd2UgaGF2ZSBhY2Nlc3MgdG8gb3JpZ2luYWwgdGFyZ2V0LlxuICAgICAgKHsgdGFyZ2V0IH0gPSBldik7XG4gICAgfSBlbHNlIGlmIChldi5wYXRoKSB7XG4gICAgICBbdGFyZ2V0XSA9IGV2LnBhdGg7XG4gICAgfSBlbHNlIGlmIChldi5jb21wb3NlZFBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gMCB8fCAodmFsdWUgPD0gdGFyZ2V0Lm1pbiAmJiAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikpIHtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWluLCBwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtW3RoaXMuc2V0VmFsdWVOYW1lIHx8IHRoaXMudmFsdWVOYW1lXSA9IHZhbHVlO1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNYXgsIHBhcmFtKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgc2xpZGVyVmFsdWU6IHRoaXMuaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSA/IHN0YXRlT2JqLmF0dHJpYnV0ZXNbdmFsdWVOYW1lXSA6IDAsXG4gICAgfTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB7XG4gICAgICAgIG1pbkxpbmVCcmVhazogMCxcbiAgICAgICAgbWF4TGluZUJyZWFrOiA5OTksXG4gICAgICAgIGhpZGVTbGlkZXI6IGZhbHNlLFxuICAgICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgICAgbW9kZTogc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUsXG4gICAgICAgIHN0cmV0Y2hTbGlkZXI6ICEhc3RhdGVPYmouYXR0cmlidXRlcy5zdHJldGNoX3NsaWRlcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBpc09uKHN0YXRlT2JqLCBuYW1lT24pIHtcbiAgICByZXR1cm4gc3RhdGVPYmogJiYgKCFuYW1lT24gfHwgc3RhdGVPYmouc3RhdGUgPT09IG5hbWVPbik7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJywgU3RhdGVDYXJkV2l0aFNsaWRlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkJz5cbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYVxuICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJ1xuICAgICAgICAgIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz5cbiAgICAgIDwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIpO1xuIiwiLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuZXhwb3J0IGRlZmF1bHQgKHN1cGVyQ2xhc3MpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBFdmVudHNNaXhpbiBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAgICogICBwYXlsb2FkLlxuICAgICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICAqL1xuICAgIGZpcmUodHlwZSwgZGV0YWlsID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgICAgICBidWJibGVzOiBvcHRpb25zLmJ1YmJsZXMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IEJvb2xlYW4ob3B0aW9ucy5jYW5jZWxhYmxlKSxcbiAgICAgICAgY29tcG9zZWQ6IG9wdGlvbnMuY29tcG9zZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmNvbXBvc2VkLFxuICAgICAgfSk7XG4gICAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgICBjb25zdCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IHRoaXM7XG4gICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRzTWl4aW47XG59O1xuIiwiaW1wb3J0IGhhc3NBdHRyaWJ1dGVzVXRpbCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsLmpzJztcblxud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsIHx8IHt9O1xuY29uc3QgU1VQUE9SVEVEX1NMSURFUl9NT0RFUyA9IFtcbiAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG5dO1xuXG5jb25zdCBjdXN0b21VaUF0dHJpYnV0ZXMgPSB7XG4gIGdyb3VwOiB1bmRlZmluZWQsXG4gIGRldmljZTogdW5kZWZpbmVkLFxuICB0ZW1wbGF0ZXM6IHVuZGVmaW5lZCxcbiAgc3RhdGU6IHVuZGVmaW5lZCxcbiAgX3N0YXRlRGlzcGxheTogdW5kZWZpbmVkLFxuICBjb250cm9sX2VsZW1lbnQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgc3RhdGVfY2FyZF9tb2RlOiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBsaWdodDogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY292ZXI6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNsaW1hdGU6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgICcqJzogWydiYWRnZXMnXSxcbiAgICB9LFxuICB9LFxuICBzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgYmFkZ2VzX2xpc3Q6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHNob3dfbGFzdF9jaGFuZ2VkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2NvbnRyb2w6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGV4dHJhX2RhdGFfdGVtcGxhdGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgZXh0cmFfYmFkZ2U6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHN0cmV0Y2hfc2xpZGVyOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBzbGlkZXJfdGhlbWU6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHRoZW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGNvbmZpcm1fY29udHJvbHM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2luX2RlZmF1bHRfdmlldzogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaWNvbl9jb2xvcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxufTtcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZXNVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVM7XG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gaGFzc0F0dHJpYnV0ZXNVdGlsLlVOS05PV05fVFlQRTtcbk9iamVjdC5hc3NpZ24od2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGN1c3RvbVVpQXR0cmlidXRlcyk7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldFZpZXdFbnRpdGllcyBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF92aWV3X2VudGl0aWVzLmpzJztcblxuaW1wb3J0ICcuLi9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzJztcbmltcG9ydCBWRVJTSU9OIGZyb20gJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgJy4vaGFzcy1hdHRyaWJ1dGUtdXRpbC5qcyc7XG5cbndpbmRvdy5jdXN0b21VSSA9IHdpbmRvdy5jdXN0b21VSSB8fCB7XG4gIFNVUFBPUlRFRF9TTElERVJfTU9ERVM6IFtcbiAgICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbiAgXSxcblxuICBkb21Ib3N0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gZG9jdW1lbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtLmdldFJvb3ROb2RlKCk7XG4gICAgcmV0dXJuIChyb290IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyAvKiogQHR5cGUge1NoYWRvd1Jvb3R9ICovIChyb290KS5ob3N0IDogcm9vdDtcbiAgfSxcblxuICBsaWdodE9yU2hhZG93KGVsZW0sIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGVsZW0uc2hhZG93Um9vdCA/XG4gICAgICBlbGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOlxuICAgICAgZWxlbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfSxcblxuICBnZXRFbGVtZW50SGllcmFyY2h5KHJvb3QsIGhpZXJhcmNoeSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlbGVtID0gaGllcmFyY2h5LnNoaWZ0KCk7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3cocm9vdCwgZWxlbSksIGhpZXJhcmNoeSk7XG4gICAgfVxuICAgIHJldHVybiByb290O1xuICB9LFxuXG4gIGdldENvbnRleHQoZWxlbSkge1xuICAgIGlmIChlbGVtLl9jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW0uX2NvbnRleHQgPSBbXTtcbiAgICAgIGZvciAobGV0IGVsZW1lbnQgPSAoZWxlbS50YWdOYW1lID09PSAnSEEtRU5USVRJRVMtQ0FSRCcgPyB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtKSA6IGVsZW0pO1xuICAgICAgICBlbGVtZW50OyBlbGVtZW50ID0gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbWVudCkpIHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICBjYXNlICdIQS1FTlRJVElFUy1DQVJEJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5KSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50Lmdyb3VwRW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkgPT09IGZhbHNlICYmIGVsZW1lbnQuc3RhdGVzICYmIGVsZW1lbnQuc3RhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goYGdyb3VwLiR7Y29tcHV0ZVN0YXRlRG9tYWluKGVsZW1lbnQuc3RhdGVzWzBdKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ01PUkUtSU5GTy1HUk9VUCc6XG4gICAgICAgICAgY2FzZSAnU1RBVEUtQ0FSRC1DT05URU5UJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LnN0YXRlT2JqLmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIQS1DQVJEUyc6XG4gICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpIHx8ICdkZWZhdWx0X3ZpZXcnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbS5fY29udGV4dC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtLl9jb250ZXh0O1xuICB9LFxuXG4gIGZpbmRNYXRjaChrZXksIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHJldHVybiBudWxsO1xuICAgIGlmIChvcHRpb25zW2tleV0pIHJldHVybiBrZXk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbmQob3B0aW9uID0+IGtleS5tYXRjaChgXiR7b3B0aW9ufSRgKSk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2gobmFtZSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VbbWF0Y2hdKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0Q29udGV4dChlbGVtKTtcbiAgICBpZiAoIWNvbnRleHQpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCkge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG4gICAgY29udGV4dC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKGMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYXR0cmlidXRlcywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBfc2V0S2VlcChvYmosIHZhbHVlKSB7XG4gICAgaWYgKG9iai5fY3VpX2tlZXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gb2JqLl9jdWlfa2VlcCAmJiB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFhdHRyaWJ1dGVzLnRlbXBsYXRlcykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCB0cnVlKTtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgbmV3QXR0cmlidXRlcyA9IHt9O1xuICAgIGxldCBoYXNHbG9iYWwgPSBmYWxzZTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMudGVtcGxhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gYXR0cmlidXRlcy50ZW1wbGF0ZXNba2V5XTtcbiAgICAgIGlmICh0ZW1wbGF0ZS5tYXRjaCgvXFxiKGVudGl0aWVzfGhhc3MpXFxiLykpIHtcbiAgICAgICAgaGFzR2xvYmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgdGVtcGxhdGUsIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMsXG4gICAgICAgIChzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzICYmIHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXNba2V5XSkgfHxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSxcbiAgICAgICAgc3RhdGVPYmoudW50ZW1wbGF0ZWRfc3RhdGUgfHwgc3RhdGVPYmouc3RhdGUpO1xuICAgICAgLy8gSW4gY2FzZSBvZiBudWxsIGRvbid0IHNldCB0aGUgdmFsdWUuXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgIG5ld0F0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ3N0YXRlJykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLnN0YXRlKSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnX3N0YXRlRGlzcGxheScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5KSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IGF0dHJpYnV0ZXNba2V5XSkge1xuICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosICFoYXNHbG9iYWwpO1xuICAgIGlmICghaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcyA9PT0gYXR0cmlidXRlcykge1xuICAgICAgLy8gV2UgYXJlIG9wZXJhdGluZyBvbiByZWFsIGF0dHJpYnV0ZXMuIFJlcGxhY2UgdGhlbS5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIG5ld0F0dHJpYnV0ZXMpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnc3RhdGUnKSkge1xuICAgICAgICBpZiAobmV3QXR0cmlidXRlcy5zdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5zdGF0ZSA9IFN0cmluZyhuZXdBdHRyaWJ1dGVzLnN0YXRlKTtcbiAgICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGUgPSBzdGF0ZU9iai5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnX3N0YXRlRGlzcGxheScpKSB7XG4gICAgICAgIHJlc3VsdC5fc3RhdGVEaXNwbGF5ID0gbmV3QXR0cmlidXRlcy5fc3RhdGVEaXNwbGF5O1xuICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5ID0gc3RhdGVPYmouX3N0YXRlRGlzcGxheTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChyZXN1bHQsICFoYXNHbG9iYWwpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gT3BlcmF0aW5nIG9uIGNvbnRleHQtYXdhcmUgYXR0cmlidXRlcy4gUmV0dXJuIHNoYWxsb3cgY29weSBvZiBvYmplY3QuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmopIHtcbiAgICBjb25zdCBuZXdSZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIHN0YXRlT2JqLmF0dHJpYnV0ZXMpO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGVzKG9iaikge1xuICAgICAgaWYgKCFvYmopIHJldHVybjtcbiAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgICAgIGhhc3MsIHN0YXRlcywgbmV3UmVzdWx0LCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgaGFzQ2hhbmdlcyB8PSAocmVzdWx0ICE9PSBuZXdSZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmRldmljZSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmdyb3VwKTtcbiAgICB9XG5cbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICBpZiAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaikgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICBpZiAoaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlT2JqO1xuICB9LFxuXG4gIGFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIHN0YXRlOiBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpLFxuICAgICAgdW50ZW1wbGF0ZWRfYXR0cmlidXRlczogc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGVPYmoubGFzdF9jaGFuZ2VkLFxuICAgIH07XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3QoZWxlbSwgc3RhdGVPYmosIGluRGlhbG9nLCBhbGxvd0hpZGRlbikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGxldCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBvYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgZWxlbS5oYXNzLCBlbGVtLmhhc3Muc3RhdGVzLCBvYmosIG9iai5hdHRyaWJ1dGVzKTtcblxuICAgIGlmIChvYmogIT09IHN0YXRlT2JqICYmIG9iai5hdHRyaWJ1dGVzLmhpZGRlbiAmJiBhbGxvd0hpZGRlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZml4R3JvdXBUaXRsZXMoKSB7XG4gICAgY29uc3QgaG9tZUFzc2lzdGFudE1haW4gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJ10pO1xuICAgIGlmIChob21lQXNzaXN0YW50TWFpbiA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcywgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhvbWVBc3Npc3RhbnRNYWluLCBbXG4gICAgICAncGFydGlhbC1jYXJkcycsXG4gICAgICAnaGEtY2FyZHNbdmlldy12aXNpYmxlXSddKTtcbiAgICBpZiAoaGFDYXJkcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYUNhcmRzLCAnLm1haW4nKSB8fCBoYUNhcmRzLiQubWFpbjtcbiAgICBjb25zdCBjYXJkcyA9IG1haW4ucXVlcnlTZWxlY3RvckFsbCgnaGEtZW50aXRpZXMtY2FyZCcpO1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmIChjYXJkLmdyb3VwRW50aXR5KSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICBjYXJkLFxuICAgICAgICAgIGNhcmQuZ3JvdXBFbnRpdHksXG4gICAgICAgICAgZmFsc2UgLyogaW5EaWFsb2cgKi8sXG4gICAgICAgICAgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pO1xuICAgICAgICBpZiAob2JqICE9PSBjYXJkLmdyb3VwRW50aXR5ICYmIG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUpIHtcbiAgICAgICAgICBjb25zdCBuYW1lRWxlbSA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGNhcmQsICcubmFtZScpO1xuICAgICAgICAgIG5hbWVFbGVtLnRleHRDb250ZW50ID0gb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGNvbnRyb2xDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLWNhcmRzJ10pO1xuICAgIGlmIChwYXJ0aWFsQ2FyZHMgPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zLmJpbmQobnVsbCwgY29sdW1ucyksXG4gICAgICAgIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGdW5jdGlvbiByZW5hbWVkIGZyb20gaGFuZGxlV2luZG93Q2hhbmdlIHRvIF91cGRhdGVDb2x1bW5zIG9uIDMuNy4xOFxuICAgIGNvbnN0IGYgPSBwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlIHx8IHBhcnRpYWxDYXJkcy5fdXBkYXRlQ29sdW1ucztcbiAgICBwYXJ0aWFsQ2FyZHMubXFscy5mb3JFYWNoKChtcWwpID0+IHtcbiAgICAgIG1xbC5yZW1vdmVMaXN0ZW5lcihmKTtcbiAgICB9KTtcbiAgICBwYXJ0aWFsQ2FyZHMubXFscyA9IGNvbHVtbnMubWFwKCh3aWR0aCkgPT4ge1xuICAgICAgY29uc3QgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7d2lkdGh9cHgpYCk7XG4gICAgICBtcWwuYWRkTGlzdGVuZXIoZik7XG4gICAgICByZXR1cm4gbXFsO1xuICAgIH0pO1xuICAgIGYoKTtcbiAgfSxcblxuICB1c2VDdXN0b21pemVyKCkge1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgY29uc3QgY3VzdG9taXplciA9IG1haW4uaGFzcy5zdGF0ZXNbJ2N1c3RvbWl6ZXIuY3VzdG9taXplciddO1xuICAgIGlmICghY3VzdG9taXplcikgcmV0dXJuO1xuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMpIHtcbiAgICAgIGlmICh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgJiYgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpIHtcbiAgICAgICAgY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgYXR0cikpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2F0dHJdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUNvbmZpZ1BhbmVsKCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGhhUGFuZWxDb25maWcgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLXBhbmVsLXJlc29sdmVyJyxcbiAgICAgICdoYS1wYW5lbC1jb25maWcnXSk7XG4gICAgaWYgKCFoYVBhbmVsQ29uZmlnKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsLCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYUNvbmZpZ05hdmlnYXRpb24gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShoYVBhbmVsQ29uZmlnLCBbXG4gICAgICAnaGEtY29uZmlnLWRhc2hib2FyZCcsXG4gICAgICAnaGEtY29uZmlnLW5hdmlnYXRpb24nXSk7XG4gICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbikge1xuICAgICAgLy8gSGFDb25maWdOYXZpZ2F0aW9uIHN0YXJ0ZWQgdXNpbmcgbG9jYWxpemUgb24gMjEuMDEuMjAxOFxuICAgICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSAmJiAhaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCA9IHRydWU7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZCA9IChoYXNzLCBwYWdlKSA9PlxuICAgICAgICAgIHBhZ2UgPT09ICdjdXN0b211aScgfHwgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQoaGFzcywgcGFnZSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnQ3VzdG9tIFVJJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdTZXRVSSB0d2Vha3MnIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFoYUNvbmZpZ05hdmlnYXRpb24ucGFnZXMuc29tZShjb25mID0+IGNvbmYgPT09ICdjdXN0b211aScgfHwgY29uZi5kb21haW4gPT09ICdjdXN0b211aScpKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5wdXNoKCdwYWdlcycsIGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSA/ICdjdXN0b211aScgOiB7XG4gICAgICAgICAgZG9tYWluOiAnY3VzdG9tdWknLFxuICAgICAgICAgIGNhcHRpb246ICdDdXN0b20gVUknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IFVJIHR3ZWFrcy4nLFxuICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEhhQ29uZmlnQ3VzdG9tVWkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGEtY29uZmlnLWN1c3RvbS11aScpO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5pc1dpZGUgPSBoYVBhbmVsQ29uZmlnLmlzV2lkZTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuc2V0QXR0cmlidXRlKCdwYWdlLW5hbWUnLCAnY3VzdG9tdWknKTtcbiAgICAgIHJldHVybiBoYUNvbmZpZ0N1c3RvbVVpO1xuICAgIH07XG5cbiAgICBjb25zdCBpcm9uUGFnZXMgPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYVBhbmVsQ29uZmlnLCAnaXJvbi1wYWdlcycpO1xuICAgIGlmIChpcm9uUGFnZXMpIHtcbiAgICAgIGlmIChpcm9uUGFnZXMubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgaXJvblBhZ2VzLmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgICBpcm9uUGFnZXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1pdGVtcy1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpKSB7XG4gICAgICAgICAgICBpcm9uUGFnZXMuc2VsZWN0KCdjdXN0b211aScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBoYVBhbmVsQ29uZmlnLnNoYWRvd1Jvb3QgfHwgaGFQYW5lbENvbmZpZztcbiAgICAgIGlmIChyb290Lmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICB9XG4gICAgICBjb25zdCB2aXNpYmxlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKTtcbiAgICAgIHJvb3QubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gdmlzaWJsZSA/ICcnIDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsU3RhdGVzSG9vaygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaG9tZS1hc3Npc3RhbnQnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAoIWhvbWVBc3Npc3RhbnQgfHwgIWhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzKSByZXR1cm47XG4gICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZSA9IGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzO1xuICAgICAgaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MgPSBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGNvbnN0IHsgaGFzcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKG9iai5zdGF0ZXMpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhvYmouc3RhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG9iai5zdGF0ZXNba2V5XTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuX2N1aV9rZWVwKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBuZXdFbnRpdHkgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBvYmouc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgICAgaWYgKGhhc3Muc3RhdGVzICYmIGVudGl0eSAhPT0gaGFzcy5zdGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgICAvLyBOZXcgc3RhdGUgYXJyaXZlZC4gUHV0IG1vZGlmaWVkIHN0YXRlIGluLlxuICAgICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSAhPT0gbmV3RW50aXR5KSB7XG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHNhbWUgc3RhdGUgYnV0IGNvbnRlbnRzIGNoYW5nZWQgZHVlIHRvIG90aGVyIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIG9iaik7XG4gICAgICAgIGlmIChvYmoudGhlbWVzICYmIGhhc3MuX3RoZW1lV2FpdGVycykge1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycy5mb3JFYWNoKHdhaXRlciA9PiB3YWl0ZXIuc3RhdGVDaGFuZ2VkKHdhaXRlci5zdGF0ZSkpO1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAobWFpbi5oYXNzICYmIG1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgICAgbWFpbi5fdXBkYXRlSGFzcyh7IHN0YXRlczogbWFpbi5oYXNzLnN0YXRlcyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsUGFydGlhbENhcmRzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdwYXJ0aWFsLWNhcmRzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3BhcnRpYWwtY2FyZHMnKTtcbiAgICAgIGlmICghcGFydGlhbENhcmRzIHx8ICFwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlcikgcmV0dXJuO1xuICAgICAgcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIgPSAoaGFzcywgZW50aXR5SWQpID0+IHtcbiAgICAgICAgaWYgKGhhc3Muc3RhdGVzW2VudGl0eUlkXS5hdHRyaWJ1dGVzLmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBleGNsdWRlcyA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMgJiYgZW50aXR5LmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVFbnRpdHlJZCA9IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSkgcmV0dXJuO1xuICAgICAgICAgICAgZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSA9IGVudGl0eTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy52aWV3KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdFbnRpdGllcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXModmlld0VudGl0aWVzKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICBpZCA9PiB2aWV3RW50aXRpZXNbaWRdLmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZXhjbHVkZXNbaWRdID0gdmlld0VudGl0aWVzW2lkXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIWV4Y2x1ZGVzW2VudGl0eUlkXTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGVsZW1lbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICAgIGlmICgha2xhc3MgfHwgIWtsYXNzLnByb3RvdHlwZSkgcmV0dXJuO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGtsYXNzLnByb3RvdHlwZSwgJ2xvY2FsaXplJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tTG9jYWxpemUodikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVPYmogJiYgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXN0b21Mb2NhbGl6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KCkge30sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgdGhlbWluZyBcInJlZ3VsYXJcIiB0b3AgYmFkZ2VzLlxuICBpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICAgIGlmICghaGFTdGF0ZUxhYmVsQmFkZ2UgfHwgIWhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQpIHJldHVybjtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAgIC8vIFRPRE86IENhbGwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzID0gdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycy5wdXNoKHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdGF0ZS1iYWRnZScpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtYmFkZ2UnKTtcbiAgICAgIGlmICghc3RhdGVCYWRnZSB8fCAhc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlKSByZXR1cm47XG4gICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlID0gc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlO1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIHN0YXRlQmFkZ2UucHJvdG90eXBlLl91cGRhdGVJY29uQXBwZWFyYW5jZSA9IGZ1bmN0aW9uIGN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlKHN0YXRlT2JqKSB7XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kLmljb24uc3R5bGUsIHtcbiAgICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgICBmaWx0ZXI6ICcnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UuY2FsbCh0aGlzLCBzdGF0ZU9iaik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbEhhQXR0cmlidXRlcygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtYXR0cmlidXRlcycpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaGFBdHRyaWJ1dGVzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1hdHRyaWJ1dGVzJyk7XG4gICAgICBpZiAoIWhhQXR0cmlidXRlcyB8fCAhaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5IHx8XG4gICAgICAgICAhd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsKSByZXR1cm47XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5ID1cbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpLmNvbmNhdChcbiAgICAgICAgICAgIGV4dHJhRmlsdGVycyA/IGV4dHJhRmlsdGVycy5zcGxpdCgnLCcpIDogW10pO1xuICAgICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxIYUZvcm1DdXN0b21pemUoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLWZvcm0tY3VzdG9taXplJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYUZvcm1DdXN0b21pemUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWZvcm0tY3VzdG9taXplJyk7XG4gICAgICBpZiAoIWhhRm9ybUN1c3RvbWl6ZSkge1xuICAgICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSwgMTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSkgcmV0dXJuO1xuICAgICAgd2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lID0gdHJ1ZTtcblxuICAgICAgaWYgKCF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUgPVxuICAgICAgICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldXG4gICAgICAgICAgICAgICAgfHwgeyB0eXBlOiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdE9wZW5PYmplY3Qoa2V5LCBjb25maWcudHlwZSA9PT0gJ2pzb24nID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMpIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyA9XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgICAgICAgICBsb2NhbEF0dHJpYnV0ZXMsIGdsb2JhbEF0dHJpYnV0ZXMsIGV4aXN0aW5nQXR0cmlidXRlcywgbmV3QXR0cmlidXRlcykge1xuICAgICAgICAgICAgY29uc3Qga25vd25LZXlzID1cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25mID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmYgJiYgKCFjb25mLmRvbWFpbnMgfHwgIXRoaXMuZW50aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmYuZG9tYWlucy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4odGhpcy5lbnRpdHkpKSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGxvY2FsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZ2xvYmFsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZXhpc3RpbmdBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhuZXdBdHRyaWJ1dGVzKSk7XG4gICAgICAgICAgICByZXR1cm4ga25vd25LZXlzLnNvcnQoKS5jb25jYXQoJ090aGVyJyk7XG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsQ2xhc3NIb29rcygpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSA9IHRydWU7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxQYXJ0aWFsQ2FyZHMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlc0hvb2soKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZUJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUF0dHJpYnV0ZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NlbmUnKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NyaXB0Jyk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxDbGFzc0hvb2tzKCk7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIW1haW4uaGFzcyB8fCAhbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgLy8gQ29ubmVjdGlvbiB3YXNuJ3QgbWFkZSB5ZXQuIFRyeSBpbiAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbml0LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmN1c3RvbVVJLmluaXREb25lID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS51c2VDdXN0b21pemVyKCk7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb24tY2hhbmdlZCcsIHdpbmRvdy5zZXRUaW1lb3V0LmJpbmQobnVsbCwgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzLCAxMDApKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5sb2coYExvYWRlZCBDdXN0b21VSSAke1ZFUlNJT059YCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgaWYgKCF3aW5kb3cuQ1VTVE9NX1VJX0xJU1QpIHtcbiAgICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVCA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QucHVzaCh7XG4gICAgICBuYW1lOiAnQ3VzdG9tVUknLFxuICAgICAgdmVyc2lvbjogVkVSU0lPTixcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXktZ2l0L2hvbWUtYXNzaXN0YW50LWN1c3RvbS11aScsXG4gICAgfSk7XG4gIH0sXG5cbiAgcnVuSG9va3MoKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUoKTtcbiAgfSxcblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhLWRldmljZS1uYW1lJykgfHwgJyc7XG4gIH0sXG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScsIG5hbWUgfHwgJycpO1xuICB9LFxuXG4gIGNvbXB1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uQm9keSA9ICh0ZW1wbGF0ZS5pbmRleE9mKCdyZXR1cm4nKSA+PSAwKSA/IHRlbXBsYXRlIDogYHJldHVybiBcXGAke3RlbXBsYXRlfVxcYDtgO1xuICAgIHRyeSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ2hhc3MnLCAnZW50aXRpZXMnLCAnZW50aXR5JywgJ2F0dHJpYnV0ZXMnLCAnYXR0cmlidXRlJywgJ3N0YXRlJywgZnVuY3Rpb25Cb2R5KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIHJldHVybiBmdW5jKGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGlmICgoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB8fCBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfSBpbiB0ZW1wbGF0ZSAke2Z1bmN0aW9uQm9keX1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9LFxufTtcbndpbmRvdy5jdXN0b21VSS5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCAnMjAxODEyMTcnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==