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
  var services = hass.config.services[domain];
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

var _templateObject = _taggedTemplateLiteral(['\n    <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>\n    <style>\n      :host {\n        display: inline-block;\n      }\n      .control-wrapper {\n        margin: -4px -16px -4px 0;\n        padding: 4px 16px;\n      }\n      ha-state-label-badge {\n        margin-left: 8px;\n      }\n      dynamic-element {\n        display: block;\n        text-align: right;\n      }\n      #overlay {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        text-align: right;\n        z-index: 1;\n      }\n      #lock {\n        margin-top: 8px;\n        opacity: 0.3;\n        margin-right: 7px;\n      }\n      #lock.ha-cover-controls {\n        margin-right: 52px;\n        background-color: white;\n      }\n      .extra {\n        margin-bottom: -16px;\n        --ha-label-badge-size: 36px;\n        --ha-label-badge-font-size: 1.2em;\n      }\n      .state {\n        @apply --paper-font-body1;\n        color: var(--primary-text-color);\n        margin-left: 16px;\n        text-align: right;\n        line-height: 40px;\n      }\n    </style>\n    <div class$=\'[[extraClass(extraObjVisible)]] horizontal layout\'>\n      <template is=\'dom-if\' if=\'[[extraObjVisible]]\'>\n        <template is=\'dom-repeat\'\n                  items=\'[[extraObj]]\'\n                  on-dom-change=\'extraDomChanged\'>\n          <ha-state-label-badge hass=\'[[hass]]\' state=\'[[item]]\'></ha-state-label-badge>\n        </template>\n      </template>\n      <template is=\'dom-if\' if=\'[[_showControl(inDialog, stateObj)]]\'>\n        <template is=\'dom-if\' if=\'[[controlElement]]\'>\n          <div class="control-wrapper">\n            <dynamic-element\n                class=\'flex\'\n                state-obj="[[stateObj]]"\n                hass=\'[[hass]]\'\n                element-name=\'[[controlElement]]\'>\n            </dynamic-element>\n            <template is=\'dom-if\' if=\'[[isConfirmControls(stateObj)]]\'>\n              <div id="overlay" on-click=\'clickHandler\'>\n                <template is=\'dom-if\' if=\'[[stateObj.attributes.confirm_controls_show_lock]]\'>\n                  <iron-icon id="lock" class$="[[controlElement]]" icon="mdi:lock-outline"></iron-icon>\n                </template>\n              </div>\n            </template>\n          </div>\n        </template>\n        <template is=\'dom-if\' if=\'[[!controlElement]]\'>\n          <div class=\'state\'>[[computeStateDisplay(stateObj)]]</div>\n        </template>\n      </template>\n    </div>\n    '], ['\n    <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>\n    <style>\n      :host {\n        display: inline-block;\n      }\n      .control-wrapper {\n        margin: -4px -16px -4px 0;\n        padding: 4px 16px;\n      }\n      ha-state-label-badge {\n        margin-left: 8px;\n      }\n      dynamic-element {\n        display: block;\n        text-align: right;\n      }\n      #overlay {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        text-align: right;\n        z-index: 1;\n      }\n      #lock {\n        margin-top: 8px;\n        opacity: 0.3;\n        margin-right: 7px;\n      }\n      #lock.ha-cover-controls {\n        margin-right: 52px;\n        background-color: white;\n      }\n      .extra {\n        margin-bottom: -16px;\n        --ha-label-badge-size: 36px;\n        --ha-label-badge-font-size: 1.2em;\n      }\n      .state {\n        @apply --paper-font-body1;\n        color: var(--primary-text-color);\n        margin-left: 16px;\n        text-align: right;\n        line-height: 40px;\n      }\n    </style>\n    <div class$=\'[[extraClass(extraObjVisible)]] horizontal layout\'>\n      <template is=\'dom-if\' if=\'[[extraObjVisible]]\'>\n        <template is=\'dom-repeat\'\n                  items=\'[[extraObj]]\'\n                  on-dom-change=\'extraDomChanged\'>\n          <ha-state-label-badge hass=\'[[hass]]\' state=\'[[item]]\'></ha-state-label-badge>\n        </template>\n      </template>\n      <template is=\'dom-if\' if=\'[[_showControl(inDialog, stateObj)]]\'>\n        <template is=\'dom-if\' if=\'[[controlElement]]\'>\n          <div class="control-wrapper">\n            <dynamic-element\n                class=\'flex\'\n                state-obj="[[stateObj]]"\n                hass=\'[[hass]]\'\n                element-name=\'[[controlElement]]\'>\n            </dynamic-element>\n            <template is=\'dom-if\' if=\'[[isConfirmControls(stateObj)]]\'>\n              <div id="overlay" on-click=\'clickHandler\'>\n                <template is=\'dom-if\' if=\'[[stateObj.attributes.confirm_controls_show_lock]]\'>\n                  <iron-icon id="lock" class$="[[controlElement]]" icon="mdi:lock-outline"></iron-icon>\n                </template>\n              </div>\n            </template>\n          </div>\n        </template>\n        <template is=\'dom-if\' if=\'[[!controlElement]]\'>\n          <div class=\'state\'>[[computeStateDisplay(stateObj)]]</div>\n        </template>\n      </template>\n    </div>\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







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
      if (!stateBadge || !stateBadge.prototype.updateIconAppearance) return;
      var originalUpdateIconAppearance = stateBadge.prototype.updateIconAppearance;
      // Use named function to preserve 'this'.
      stateBadge.prototype.updateIconAppearance = function customUpdateIconAppearance(stateObj) {
        if (stateObj.attributes.icon_color && !stateObj.attributes.entity_picture) {
          this.style.backgroundImage = '';
          Object.assign(this.$.icon.style, {
            display: 'inline',
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
/* harmony default export */ __webpack_exports__["default"] = ('20180806');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc3MtYXR0cmlidXRlLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfV0lUSF9NT1JFX0lORk8iLCJET01BSU5TX0hJREVfTU9SRV9JTkZPIiwiRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSIsIlNUQVRFU19PRkYiLCJET01BSU5TX1RPR0dMRSIsIlNldCIsIlVOSVRfQyIsIlVOSVRfRiIsIkRFRkFVTFRfVklFV19FTlRJVFlfSUQiLCJhcHBseVRoZW1lc09uRWxlbWVudCIsImVsZW1lbnQiLCJ0aGVtZXMiLCJsb2NhbFRoZW1lIiwidXBkYXRlTWV0YSIsIl90aGVtZXMiLCJ0aGVtZU5hbWUiLCJkZWZhdWx0X3RoZW1lIiwic3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGhlbWUiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInByZWZpeGVkS2V5IiwidXBkYXRlU3R5bGVzIiwid2luZG93IiwiU2hhZHlDU1MiLCJzdHlsZVN1YnRyZWUiLCJtZXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidGhlbWVDb2xvciIsImR5bmFtaWNDb250ZW50VXBkYXRlciIsInJvb3QiLCJuZXdFbGVtZW50VGFnIiwiYXR0cmlidXRlcyIsInJvb3RFbCIsImN1c3RvbUVsIiwibGFzdENoaWxkIiwidGFnTmFtZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInRvTG93ZXJDYXNlIiwic2V0UHJvcGVydGllcyIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsImNhblRvZ2dsZURvbWFpbiIsImhhc3MiLCJkb21haW4iLCJzZXJ2aWNlcyIsImNvbmZpZyIsImNhblRvZ2dsZVN0YXRlIiwic3RhdGVPYmoiLCJjb21wdXRlU3RhdGVEb21haW4iLCJzdGF0ZSIsInN1cHBvcnRlZF9mZWF0dXJlcyIsImNvbXB1dGVEb21haW4iLCJlbnRpdHlJZCIsInN1YnN0ciIsImluZGV4T2YiLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiRE9NQUlOX0RFVklDRV9DTEFTUyIsImJpbmFyeV9zZW5zb3IiLCJjb3ZlciIsInNlbnNvciIsIlVOS05PV05fVFlQRSIsIkFERF9UWVBFIiwiVFlQRV9UT19UQUciLCJzdHJpbmciLCJqc29uIiwiaWNvbiIsImJvb2xlYW4iLCJhcnJheSIsIkxPR0lDX1NUQVRFX0FUVFJJQlVURVMiLCJlbnRpdHlfcGljdHVyZSIsInVuZGVmaW5lZCIsImZyaWVuZGx5X25hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJlbXVsYXRlZF9odWUiLCJkb21haW5zIiwiZW11bGF0ZWRfaHVlX25hbWUiLCJoYWFza2FfaGlkZGVuIiwiaGFhc2thX25hbWUiLCJob21lYnJpZGdlX2hpZGRlbiIsImhvbWVicmlkZ2VfbmFtZSIsImF0dHJpYnV0aW9uIiwiY3VzdG9tX3VpX21vcmVfaW5mbyIsImN1c3RvbV91aV9zdGF0ZV9jYXJkIiwiZGV2aWNlX2NsYXNzIiwib3B0aW9ucyIsImFzc3VtZWRfc3RhdGUiLCJpbml0aWFsX3N0YXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsInZhbHVlIiwidG9TdHJpbmciLCJsaXRlcmFsVmFsdWUiLCJFcnJvciIsImh0bWxWYWx1ZSIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJodG1sIiwic3RyaW5ncyIsInRlbXBsYXRlIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwidiIsImlkeCIsImh0bWxMaXRlcmFsIiwiQ3VpQmFzZUVsZW1lbnQiLCJleHRyYXMiLCJleHRyYV9kYXRhX3RlbXBsYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJleHRyYSIsInN0YXRlcyIsImZpbHRlciIsImluRGlhbG9nIiwibGVuZ3RoIiwic2hvd19sYXN0X2NoYW5nZWQiLCJCb29sZWFuIiwiY29udHJvbEVsZW1lbnQiLCJTdHJpbmciLCJjb21wdXRlZCIsIlBvbHltZXIiLCJFbGVtZW50IiwiRHluYW1pY0VsZW1lbnQiLCJlbGVtZW50TmFtZSIsInRvVXBwZXJDYXNlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJEeW5hbWljV2l0aEV4dHJhIiwiX2F0dGFjaGVkIiwiX2lzQXR0YWNoZWQiLCJhdHRhY2hlZCIsImV4dHJhX2JhZGdlIiwiZXh0cmFCYWRnZXMiLCJleHRyYUJhZGdlIiwibWF5YmVDaGFuZ2VPYmplY3QiLCJhdHRyaWJ1dGUiLCJ1bml0IiwiYmxhY2tsaXN0IiwiYmxhY2tsaXN0X3N0YXRlcyIsInNvbWUiLCJSZWdFeHAiLCJ0ZXN0IiwiX2VudGl0eURpc3BsYXkiLCJleHRyYU9iaiIsImV4dHJhT2JqVmlzaWJsZSIsImhpZGVfY29udHJvbCIsImhhTG9jYWxpemUiLCJsb2NhbGl6ZSIsImNvbmZpcm1fY29udHJvbHMiLCJjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jayIsImUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJsb2NrIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsImFwcGx5VGhlbWVzIiwiZ2V0IiwiSGFDb25maWdDdXN0b21VaSIsIm5hbWUiLCJnZXROYW1lIiwic2V0TmFtZSIsImhpc3RvcnkiLCJiYWNrIiwiZmlyZSIsImlzV2lkZSIsIm9ic2VydmVyIiwiRXZlbnRzTWl4aW4iLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCIsImF0dHIiLCJkZWYiLCJpc09uIiwidGhlbWVkTWluIiwiZXYiLCJ0YXJnZXQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJwaW4iLCJub3RpZnkiLCJfdGhlbWVkTWluIiwiU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMiLCJET01BSU5fVE9fU0xJREVSX1NVUFBPUlQiLCJsaWdodCIsImNsaW1hdGUiLCJUWVBFX1RPX0NPTlRST0wiLCJ0b2dnbGUiLCJkaXNwbGF5IiwiU3RhdGVDYXJkQ3VzdG9tVWkiLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9jb250YWluZXIiLCJzZXRQcm9wZXJ0eSIsImlucHV0Q2hhbmdlZCIsIm1hcmdpbiIsInBhZGRpbmciLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiYmFkZ2VzX2xpc3QiLCJwdXNoIiwicGFyYW1zIiwid2lkdGgiLCJmb250U2l6ZSIsIm1vZGlmaWVkT2JqIiwidGhlbWVUYXJnZXQiLCJvYmoiLCJzdGF0ZV9jYXJkX21vZGUiLCJtYXliZUhpZGVFbnRpdHkiLCJiYWRnZU1vZGUiLCJyZWd1bGFyTW9kZV8iLCJjbGVhbkJhZGdlU3R5bGUiLCJvcmlnaW5hbFN0YXRlQ2FyZFR5cGUiLCJjdXN0b21TdGF0ZUNhcmRUeXBlIiwic2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSIsInN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeSIsInNsaWRlckVsaWdpYmxlXyIsInNlcnZpY2VNaW4iLCJzZXJ2aWNlTWF4IiwidmFsdWVOYW1lIiwic2V0VmFsdWVOYW1lIiwibmFtZU9uIiwibWluX3RlbXAiLCJtYXhfdGVtcCIsImNvbnRyb2xfZWxlbWVudCIsIlN0YXRlQ2FyZFdpdGhTbGlkZXIiLCJfb25Jcm9uUmVzaXplIiwiYmluZCIsIl9pc0Nvbm5lY3RlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfd2FpdEZvckxheW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfc2V0TW9kZSIsIl9mcmFtZUlkIiwicmVhZHlUb0NvbXB1dGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoaWRlU2xpZGVyIiwibW9kZSIsImxpbmVUb29Mb25nIiwiYnJlYWtTbGlkZXIiLCJzaG93U2xpZGVyIiwicHJldkJyZWFrU2xpZGVyIiwicHJldkhpZGVTbGlkZXIiLCIkIiwiY29udGFpbmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIm1pbkxpbmVCcmVhayIsIm1heExpbmVCcmVhayIsImNvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0YXRlSGVpZ2h0Iiwic3RyZXRjaFNsaWRlciIsInBhcnNlSW50IiwicGFyYW0iLCJpc05hTiIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJjYWxsU2VydmljZSIsInNsaWRlclZhbHVlIiwic3RyZXRjaF9zbGlkZXIiLCJTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIiwic3VwZXJDbGFzcyIsImRldGFpbCIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNvbXBvc2VkIiwibm9kZSIsImRpc3BhdGNoRXZlbnQiLCJTVVBQT1JURURfU0xJREVSX01PREVTIiwiY3VzdG9tVWlBdHRyaWJ1dGVzIiwiZGV2aWNlIiwidGVtcGxhdGVzIiwiX3N0YXRlRGlzcGxheSIsImNvbmNhdCIsInNsaWRlcl90aGVtZSIsImhpZGVfaW5fZGVmYXVsdF92aWV3IiwiaWNvbl9jb2xvciIsImhhc3NBdHRyaWJ1dGVzVXRpbCIsImRvbUhvc3QiLCJnZXRSb290Tm9kZSIsIkRvY3VtZW50RnJhZ21lbnQiLCJob3N0IiwibGlnaHRPclNoYWRvdyIsInNlbGVjdG9yIiwic2hhZG93Um9vdCIsImdldEVsZW1lbnRIaWVyYXJjaHkiLCJoaWVyYXJjaHkiLCJzaGlmdCIsImdldENvbnRleHQiLCJfY29udGV4dCIsImdyb3VwRW50aXR5IiwicmV2ZXJzZSIsImZpbmRNYXRjaCIsImZpbmQiLCJtYXRjaCIsIm9wdGlvbiIsIm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2UiLCJhcHBseUF0dHJpYnV0ZXMiLCJtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAiLCJjb250ZXh0IiwiYyIsIl9zZXRLZWVwIiwiX2N1aV9rZWVwIiwibWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJoYXNHbG9iYWwiLCJoYXNDaGFuZ2VzIiwidW50ZW1wbGF0ZWRfYXR0cmlidXRlcyIsInVudGVtcGxhdGVkX3N0YXRlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5IiwibWF5YmVBcHBseVRlbXBsYXRlcyIsIm5ld1Jlc3VsdCIsImNoZWNrQXR0cmlidXRlcyIsImxhc3RfY2hhbmdlZCIsImFsbG93SGlkZGVuIiwiZml4R3JvdXBUaXRsZXMiLCJob21lQXNzaXN0YW50TWFpbiIsImhhQ2FyZHMiLCJtYWluIiwiY2FyZHMiLCJjYXJkIiwibmFtZUVsZW0iLCJ0ZXh0Q29udGVudCIsImNvbnRyb2xDb2x1bW5zIiwiY29sdW1ucyIsInBhcnRpYWxDYXJkcyIsImYiLCJoYW5kbGVXaW5kb3dDaGFuZ2UiLCJfdXBkYXRlQ29sdW1ucyIsIm1xbHMiLCJtcWwiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInVzZUN1c3RvbWl6ZXIiLCJjdXN0b21pemVyIiwiaGlkZV9hdHRyaWJ1dGVzIiwidXBkYXRlQ29uZmlnUGFuZWwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImhhUGFuZWxDb25maWciLCJoYUNvbmZpZ05hdmlnYXRpb24iLCJjdWlQYXRjaCIsIl9vcmlnaW5hbENvbXB1dGVMb2FkZWQiLCJfY29tcHV0ZUxvYWRlZCIsIl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uIiwiX2NvbXB1dGVDYXB0aW9uIiwiX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uIiwiX2NvbXB1dGVEZXNjcmlwdGlvbiIsInBhZ2UiLCJwYWdlcyIsImNvbmYiLCJjYXB0aW9uIiwibG9hZGVkIiwiZ2V0SGFDb25maWdDdXN0b21VaSIsImhhQ29uZmlnQ3VzdG9tVWkiLCJpcm9uUGFnZXMiLCJsYXN0RWxlbWVudENoaWxkIiwic2VsZWN0IiwidmlzaWJsZSIsImluc3RhbGxTdGF0ZXNIb29rIiwid2hlbkRlZmluZWQiLCJ0aGVuIiwiaG9tZUFzc2lzdGFudCIsIl91cGRhdGVIYXNzIiwib3JpZ2luYWxVcGRhdGUiLCJ1cGRhdGUiLCJuZXdFbnRpdHkiLCJfdGhlbWVXYWl0ZXJzIiwid2FpdGVyIiwic3RhdGVDaGFuZ2VkIiwiaW5zdGFsbFBhcnRpYWxDYXJkcyIsIl9kZWZhdWx0Vmlld0ZpbHRlciIsImV4Y2x1ZGVzIiwiZXhjbHVkZUVudGl0eUlkIiwiaW5zdGFsbEFjdGlvbk5hbWUiLCJrbGFzcyIsImRlZmluZVByb3BlcnR5IiwiY3VzdG9tTG9jYWxpemUiLCJhY3Rpb25fbmFtZSIsIl9fZGF0YSIsInNldCIsImluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSIsImhhU3RhdGVMYWJlbEJhZGdlIiwic3RhcnRJbnRlcnZhbCIsImluc3RhbGxTdGF0ZUJhZGdlIiwic3RhdGVCYWRnZSIsInVwZGF0ZUljb25BcHBlYXJhbmNlIiwib3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZSIsImN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlIiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3IiLCJpbnN0YWxsSGFBdHRyaWJ1dGVzIiwiaGFBdHRyaWJ1dGVzIiwiY29tcHV0ZUZpbHRlcnNBcnJheSIsImN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJleHRyYUZpbHRlcnMiLCJzcGxpdCIsImluc3RhbGxIYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemVJbml0RG9uZSIsIl9jb21wdXRlU2luZ2xlQXR0cmlidXRlIiwiY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsInNlY29uZGFyeSIsIl9pbml0T3Blbk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwibG9jYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlcyIsImV4aXN0aW5nQXR0cmlidXRlcyIsImtub3duS2V5cyIsImZpbHRlckZyb21BdHRyaWJ1dGVzIiwic29ydCIsImluc3RhbGxDbGFzc0hvb2tzIiwiY2xhc3NJbml0RG9uZSIsImluaXQiLCJpbml0RG9uZSIsInJ1bkhvb2tzIiwibG9nIiwiQ1VTVE9NX1VJX0xJU1QiLCJ2ZXJzaW9uIiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jdGlvbkJvZHkiLCJmdW5jIiwiRnVuY3Rpb24iLCJTeW50YXhFcnJvciIsIlJlZmVyZW5jZUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ08sSUFBTUEsc0JBQXNCLGVBQTVCOztBQUVQO0FBQ08sSUFBTUMsb0JBQW9CLENBQy9CLFNBRCtCLEVBRS9CLE9BRitCLEVBRy9CLGNBSCtCLEVBSS9CLGNBSitCLEVBSy9CLGNBTCtCLEVBTS9CLFlBTitCLEVBTy9CLE1BUCtCLEVBUS9CLGNBUitCLEVBUy9CLE9BVCtCLEVBVS9CLFFBVitCLEVBVy9CLE9BWCtCLEVBWS9CLFFBWitCLEVBYS9CLFNBYitCLENBQTFCOztBQWdCUDtBQUNPLElBQU1DLHlC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cEQsQ0FBUDtBQUNELEtBTkQsQ0FNRSxPQUFPMkgsQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxVQUFLQSxhQUFhdVMsV0FBZCxJQUE4QnZTLGFBQWF3UyxjQUEvQyxFQUErRDtBQUM3RGhQLGdCQUFRQyxJQUFSLENBQWdCekQsRUFBRVksSUFBbEIsVUFBMkJaLEVBQUV5UyxPQUE3QixxQkFBb0RMLFlBQXBEO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBLFlBQU1wUyxDQUFOO0FBQ0Q7QUFDRjtBQW5tQmtDLENBQXJDO0FBcW1CQTNKLE9BQU9pSCxRQUFQLENBQWdCb1UsSUFBaEIsRzs7Ozs7Ozs7Ozs7OztBQzdtQkEsK0RBQWUsVUFBZixFIiwiZmlsZSI6InNjcmlwdHMtZGJnLWVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9zY3JpcHRzLmpzXCIpO1xuIiwiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9ICdoYXNzOmJvb2ttYXJrJztcblxuLyoqIERvbWFpbnMgdGhhdCBoYXZlIGEgc3RhdGUgY2FyZC4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfQ0FSRCA9IFtcbiAgJ2NsaW1hdGUnLFxuICAnY292ZXInLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2lucHV0X3NlbGVjdCcsXG4gICdpbnB1dF9udW1iZXInLFxuICAnaW5wdXRfdGV4dCcsXG4gICdsb2NrJyxcbiAgJ21lZGlhX3BsYXllcicsXG4gICdzY2VuZScsXG4gICdzY3JpcHQnLFxuICAndGltZXInLFxuICAndmFjdXVtJyxcbiAgJ3dlYmxpbmsnLFxuXTtcblxuLyoqIERvbWFpbnMgd2l0aCBzZXBhcmF0ZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9NT1JFX0lORk8gPSBbXG4gICdhbGFybV9jb250cm9sX3BhbmVsJyxcbiAgJ2F1dG9tYXRpb24nLFxuICAnY2FtZXJhJyxcbiAgJ2NsaW1hdGUnLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2NvdmVyJyxcbiAgJ2ZhbicsXG4gICdncm91cCcsXG4gICdoaXN0b3J5X2dyYXBoJyxcbiAgJ2lucHV0X2RhdGV0aW1lJyxcbiAgJ2xpZ2h0JyxcbiAgJ2xvY2snLFxuICAnbWVkaWFfcGxheWVyJyxcbiAgJ3NjcmlwdCcsXG4gICdzdW4nLFxuICAndXBkYXRlcicsXG4gICd2YWN1dW0nLFxuICAnd2VhdGhlcidcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdyBubyBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfSElERV9NT1JFX0lORk8gPSBbXG4gICdpbnB1dF9udW1iZXInLFxuICAnaW5wdXRfc2VsZWN0JyxcbiAgJ2lucHV0X3RleHQnLFxuICAnc2NlbmUnLFxuICAnd2VibGluaydcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gICdjYW1lcmEnLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2hpc3RvcnlfZ3JhcGgnLFxuICAnc2NlbmUnLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcbiAgJ2Nsb3NlZCcsXG4gICdsb2NrZWQnLFxuICAnb2ZmJ1xuXTtcblxuLyoqIERvbWFpbnMgd2hlcmUgd2UgYWxsb3cgdG9nZ2xlIGluIExvdmVsYWNlLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfVE9HR0xFID0gbmV3IFNldChbXG4gICdmYW4nLFxuICAnaW5wdXRfYm9vbGVhbicsXG4gICdsaWdodCcsXG4gICdzd2l0Y2gnXG5dKTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9ICfCsEMnO1xuZXhwb3J0IGNvbnN0IFVOSVRfRiA9ICfCsEYnO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9ICdncm91cC5kZWZhdWx0X3ZpZXcnO1xuIiwiLyoqXG4gKiBBcHBseSBhIHRoZW1lIHRvIGFuIGVsZW1lbnQgYnkgc2V0dGluZyB0aGUgQ1NTIHZhcmlhYmxlcyBvbiBpdC5cbiAqXG4gKiBlbGVtZW50OiBFbGVtZW50IHRvIGFwcGx5IHRoZW1lIG9uLlxuICogdGhlbWVzOiBIQVNTIFRoZW1lIGluZm9ybWF0aW9uXG4gKiBsb2NhbFRoZW1lOiBzZWxlY3RlZCB0aGVtZS5cbiAqIHVwZGF0ZU1ldGE6IGJvb2xlYW4gaWYgd2Ugc2hvdWxkIHVwZGF0ZSB0aGUgdGhlbWUtY29sb3IgbWV0YSBlbGVtZW50LlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5VGhlbWVzT25FbGVtZW50KGVsZW1lbnQsIHRoZW1lcywgbG9jYWxUaGVtZSwgdXBkYXRlTWV0YSA9IGZhbHNlKSB7XG4gIGlmICghZWxlbWVudC5fdGhlbWVzKSB7XG4gICAgZWxlbWVudC5fdGhlbWVzID0ge307XG4gIH1cbiAgbGV0IHRoZW1lTmFtZSA9IHRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuICBpZiAobG9jYWxUaGVtZSA9PT0gJ2RlZmF1bHQnIHx8IChsb2NhbFRoZW1lICYmIHRoZW1lcy50aGVtZXNbbG9jYWxUaGVtZV0pKSB7XG4gICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgfVxuICBjb25zdCBzdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50Ll90aGVtZXMpO1xuICBpZiAodGhlbWVOYW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICB2YXIgdGhlbWUgPSB0aGVtZXMudGhlbWVzW3RoZW1lTmFtZV07XG4gICAgT2JqZWN0LmtleXModGhlbWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gJy0tJyArIGtleTtcbiAgICAgIGVsZW1lbnQuX3RoZW1lc1twcmVmaXhlZEtleV0gPSAnJztcbiAgICAgIHN0eWxlc1twcmVmaXhlZEtleV0gPSB0aGVtZVtrZXldO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtZW50LnVwZGF0ZVN0eWxlcykge1xuICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gIH0gZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgLy8gaW1wbGVtZW50IHVwZGF0ZVN0eWxlcygpIG1ldGhvZCBvZiBQb2xlbWVyIGVsZW1lbnRzXG4gICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlU3VidHJlZSgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8oZWxlbWVudCksIHN0eWxlcyk7XG4gIH1cblxuICBpZiAoIXVwZGF0ZU1ldGEpIHJldHVybjtcblxuICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXRoZW1lLWNvbG9yXScpO1xuICBpZiAobWV0YSkge1xuICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpKSB7XG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JywgbWV0YS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSk7XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lQ29sb3IgPSBzdHlsZXNbJy0tcHJpbWFyeS1jb2xvciddIHx8IG1ldGEuZ2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKTtcbiAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoZW1lQ29sb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFVwZGF0ZSByb290J3MgY2hpbGQgZWxlbWVudCB0byBiZSBuZXdFbGVtZW50VGFnIHJlcGxhY2luZyBhbm90aGVyIGV4aXN0aW5nIGNoaWxkIGlmIGFueS5cbiAqIENvcHkgYXR0cmlidXRlcyBpbnRvIHRoZSBjaGlsZCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljQ29udGVudFVwZGF0ZXIocm9vdCwgbmV3RWxlbWVudFRhZywgYXR0cmlidXRlcykge1xuICBjb25zdCByb290RWwgPSByb290O1xuICBsZXQgY3VzdG9tRWw7XG5cbiAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQgJiYgcm9vdEVsLmxhc3RDaGlsZC50YWdOYW1lID09PSBuZXdFbGVtZW50VGFnKSB7XG4gICAgY3VzdG9tRWwgPSByb290RWwubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIGlmIChyb290RWwubGFzdENoaWxkKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQocm9vdEVsLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0aW5nIGFuIGVsZW1lbnQgd2l0aCB1cHBlciBjYXNlIHdvcmtzIGZpbmUgaW4gQ2hyb21lLCBidXQgaW4gRkYgaXQgZG9lc24ndCBpbW1lZGlhdGVseVxuICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICBjdXN0b21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudFRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKSB7XG4gICAgY3VzdG9tRWwuc2V0UHJvcGVydGllcyhhdHRyaWJ1dGVzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBjdXN0b20gZWxlbWVudCBkZWZpbml0aW9uIHdhc24ndCBsb2FkZWQgeWV0IC0gc2V0UHJvcGVydGllcyB3b3VsZCBiZVxuICAgIC8vIG1pc3NpbmcsIGJ1dCBubyBoYXJtIGluIHNldHRpbmcgYXR0cmlidXRlcyBvbmUtYnktb25lIHRoZW4uXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjdXN0b21FbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoY3VzdG9tRWwpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKSB7XG4gIGNvbnN0IHNlcnZpY2VzID0gaGFzcy5jb25maWcuc2VydmljZXNbZG9tYWluXTtcbiAgaWYgKCFzZXJ2aWNlcykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoZG9tYWluID09PSAnbG9jaycpIHtcbiAgICByZXR1cm4gJ2xvY2snIGluIHNlcnZpY2VzO1xuICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJykge1xuICAgIHJldHVybiAnb3Blbl9jb3ZlcicgaW4gc2VydmljZXM7XG4gIH1cbiAgcmV0dXJuICd0dXJuX29uJyBpbiBzZXJ2aWNlcztcbn1cbiIsImltcG9ydCBjYW5Ub2dnbGVEb21haW4gZnJvbSAnLi9jYW5fdG9nZ2xlX2RvbWFpbi5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikge1xuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICBpZiAoZG9tYWluID09PSAnZ3JvdXAnKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLnN0YXRlID09PSAnb24nIHx8IHN0YXRlT2JqLnN0YXRlID09PSAnb2ZmJztcbiAgfVxuICBpZiAoZG9tYWluID09PSAnY2xpbWF0ZScpIHtcbiAgICByZXR1cm4gISEoKHN0YXRlT2JqLmF0dHJpYnV0ZXMgfHwge30pLnN1cHBvcnRlZF9mZWF0dXJlcyAmIDQwOTYpO1xuICB9XG5cbiAgcmV0dXJuIGNhblRvZ2dsZURvbWFpbihoYXNzLCBkb21haW4pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZURvbWFpbihlbnRpdHlJZCkge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKDAsIGVudGl0eUlkLmluZGV4T2YoJy4nKSk7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfZG9tYWluLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBncm91cCkge1xuICBjb25zdCByZXN1bHQgPSB7fTtcblxuICBncm91cC5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHJlc3VsdFtlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfZG9tYWluLmpzJztcbmltcG9ydCBnZXRHcm91cEVudGl0aWVzIGZyb20gJy4vZ2V0X2dyb3VwX2VudGl0aWVzLmpzJztcblxuLy8gUmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBlbnRpdGllcyB0aGF0IHRoZSB2aWV3IHdpbGwgc2hvd1xuLy8gaW5jbHVkaW5nIGVtYmVkZGVkIGdyb3Vwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdFbnRpdGllcyhlbnRpdGllcywgdmlldykge1xuICBjb25zdCB2aWV3RW50aXRpZXMgPSB7fTtcblxuICB2aWV3LmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSAmJiAhZW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICB2aWV3RW50aXRpZXNbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG5cbiAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRW50aXRpZXMgPSBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBlbnRpdHkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwRW50aXRpZXMpLmZvckVhY2goKGdyRW50aXR5SWQpID0+IHtcbiAgICAgICAgICBjb25zdCBnckVudGl0eSA9IGdyb3VwRW50aXRpZXNbZ3JFbnRpdHlJZF07XG5cbiAgICAgICAgICBpZiAoIWdyRW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICAgICAgICB2aWV3RW50aXRpZXNbZ3JFbnRpdHlJZF0gPSBnckVudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdFbnRpdGllcztcbn1cbiIsImltcG9ydCBjYW5Ub2dnbGVTdGF0ZSBmcm9tICcuL2Nhbl90b2dnbGVfc3RhdGUuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCB7IERPTUFJTlNfV0lUSF9DQVJEIH0gZnJvbSAnLi4vY29uc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKSB7XG4gIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgIHJldHVybiAnZGlzcGxheSc7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfSBlbHNlIGlmIChjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikgJiZcbiAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2wgIT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuICd0b2dnbGUnO1xuICB9XG4gIHJldHVybiAnZGlzcGxheSc7XG59XG4iLCJjb25zdCBoYXNzQXR0cmlidXRlVXRpbCA9IHt9O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgJ2JhdHRlcnknLFxuICAgICdjb2xkJyxcbiAgICAnY29ubmVjdGl2aXR5JyxcbiAgICAnZG9vcicsXG4gICAgJ2dhcmFnZV9kb29yJyxcbiAgICAnZ2FzJyxcbiAgICAnaGVhdCcsXG4gICAgJ2xpZ2h0JyxcbiAgICAnbG9jaycsXG4gICAgJ21vaXN0dXJlJyxcbiAgICAnbW90aW9uJyxcbiAgICAnbW92aW5nJyxcbiAgICAnb2NjdXBhbmN5JyxcbiAgICAnb3BlbmluZycsXG4gICAgJ3BsdWcnLFxuICAgICdwb3dlcicsXG4gICAgJ3ByZXNlbmNlJyxcbiAgICAncHJvYmxlbScsXG4gICAgJ3NhZmV0eScsXG4gICAgJ3Ntb2tlJyxcbiAgICAnc291bmQnLFxuICAgICd2aWJyYXRpb24nLFxuICAgICd3aW5kb3cnXG4gIF0sXG4gIGNvdmVyOiBbJ2dhcmFnZSddLFxuICBzZW5zb3I6IFtcbiAgICAnYmF0dGVyeScsXG4gICAgJ2h1bWlkaXR5JyxcbiAgICAnaWxsdW1pbmFuY2UnLFxuICAgICd0ZW1wZXJhdHVyZSdcbiAgXSxcbn07XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9ICdqc29uJztcbmhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFID0gJ2tleS12YWx1ZSc7XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlRZUEVfVE9fVEFHID0ge1xuICBzdHJpbmc6ICdoYS1jdXN0b21pemUtc3RyaW5nJyxcbiAganNvbjogJ2hhLWN1c3RvbWl6ZS1zdHJpbmcnLFxuICBpY29uOiAnaGEtY3VzdG9taXplLWljb24nLFxuICBib29sZWFuOiAnaGEtY3VzdG9taXplLWJvb2xlYW4nLFxuICBhcnJheTogJ2hhLWN1c3RvbWl6ZS1hcnJheScsXG4gICdrZXktdmFsdWUnOiAnaGEtY3VzdG9taXplLWtleS12YWx1ZScsXG59O1xuXG4vLyBBdHRyaWJ1dGVzIGhlcmUgc2VydmUgZHVhbCBwdXJwb3NlOlxuLy8gMSkgQW55IGtleSBvZiB0aGlzIG9iamVjdCB3b24ndCBiZSBzaG93biBpbiBtb3JlLWluZm8gd2luZG93LlxuLy8gMikgQW55IGtleSB3aGljaCBoYXMgdmFsdWUgb3RoZXIgdGhhbiB1bmRlZmluZWQgd2lsbCBhcHBlYXIgaW4gY3VzdG9taXphdGlvblxuLy8gICAgY29uZmlnIGFjY29yZGluZyB0byBpdHMgdmFsdWUuXG5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID1cbiAgaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyB8fCB7XG4gICAgZW50aXR5X3BpY3R1cmU6IHVuZGVmaW5lZCxcbiAgICBmcmllbmRseV9uYW1lOiB7IHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ05hbWUnIH0sXG4gICAgaWNvbjogeyB0eXBlOiAnaWNvbicgfSxcbiAgICBlbXVsYXRlZF9odWU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRvbWFpbnM6IFsnZW11bGF0ZWRfaHVlJ11cbiAgICB9LFxuICAgIGVtdWxhdGVkX2h1ZV9uYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRvbWFpbnM6IFsnZW11bGF0ZWRfaHVlJ11cbiAgICB9LFxuICAgIGhhYXNrYV9oaWRkZW46IHVuZGVmaW5lZCxcbiAgICBoYWFza2FfbmFtZTogdW5kZWZpbmVkLFxuICAgIGhvbWVicmlkZ2VfaGlkZGVuOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgIGhvbWVicmlkZ2VfbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHN1cHBvcnRlZF9mZWF0dXJlczogdW5kZWZpbmVkLFxuICAgIGF0dHJpYnV0aW9uOiB1bmRlZmluZWQsXG4gICAgY3VzdG9tX3VpX21vcmVfaW5mbzogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgZGV2aWNlX2NsYXNzOiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgb3B0aW9uczogaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGV2aWNlIGNsYXNzJyxcbiAgICAgIGRvbWFpbnM6IFsnYmluYXJ5X3NlbnNvcicsICdjb3ZlcicsICdzZW5zb3InXVxuICAgIH0sXG4gICAgaGlkZGVuOiB7IHR5cGU6ICdib29sZWFuJywgZGVzY3JpcHRpb246ICdIaWRlIGZyb20gVUknIH0sXG4gICAgYXNzdW1lZF9zdGF0ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZG9tYWluczogWydzd2l0Y2gnLCAnbGlnaHQnLCAnY292ZXInLCAnY2xpbWF0ZScsICdmYW4nLCAnZ3JvdXAnXVxuICAgIH0sXG4gICAgaW5pdGlhbF9zdGF0ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkb21haW5zOiBbJ2F1dG9tYXRpb24nXVxuICAgIH0sXG4gICAgdW5pdF9vZl9tZWFzdXJlbWVudDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBoYXNzQXR0cmlidXRlVXRpbDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbndpbmRvdy5KU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gZnVuY3Rpb24ocHJvcCkgeyByZXR1cm4gcHJvcDsgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc3RhdGljIHN0cmluZyB2YWx1ZSB3aGljaCBjYW4gYmUgdXNlZCB0byBmaWx0ZXJcbiAqIHN0cmluZ3MgYnkgYXNzZXRpbmcgdGhhdCB0aGV5IGhhdmUgYmVlbiBjcmVhdGVkIHZpYSB0aGlzIGNsYXNzLiBUaGVcbiAqIGB2YWx1ZWAgcHJvcGVydHkgcmV0dXJucyB0aGUgc3RyaW5nIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cbmNsYXNzIExpdGVyYWxTdHJpbmcge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB0aGlzLnZhbHVlID0gc3RyaW5nLnRvU3RyaW5nKCk7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gTGl0ZXJhbFN0cmluZyBzdHJpbmcgdmFsdWVcbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gbGl0ZXJhbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTGl0ZXJhbFN0cmluZ30gKi8odmFsdWUpLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi1saXRlcmFsIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbExpdGVyYWwgZnVuY3Rpb246ICR7dmFsdWV9YFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBodG1sVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50IH0gKi8odmFsdWUpLmlubmVySFRNTDtcbiAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gbGl0ZXJhbFZhbHVlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tdGVtcGxhdGUgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sIGZ1bmN0aW9uOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbi8qKlxuICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyB0aGF0IGNyZWF0ZXMgYW4gSFRNTCA8dGVtcGxhdGU+IGVsZW1lbnQgZnJvbSB0aGVcbiAqIGNvbnRlbnRzIG9mIHRoZSBzdHJpbmcuXG4gKlxuICogVGhpcyBhbGxvd3MgeW91IHRvIHdyaXRlIGEgUG9seW1lciBUZW1wbGF0ZSBpbiBKYXZhU2NyaXB0LlxuICpcbiAqIFRlbXBsYXRlcyBjYW4gYmUgY29tcG9zZWQgYnkgaW50ZXJwb2xhdGluZyBgSFRNTFRlbXBsYXRlRWxlbWVudGBzIGluXG4gKiBleHByZXNzaW9ucyBpbiB0aGUgSmF2YVNjcmlwdCB0ZW1wbGF0ZSBsaXRlcmFsLiBUaGUgbmVzdGVkIHRlbXBsYXRlJ3NcbiAqIGBpbm5lckhUTUxgIGlzIGluY2x1ZGVkIGluIHRoZSBjb250YWluaW5nIHRlbXBsYXRlLiAgVGhlIG9ubHkgb3RoZXJcbiAqIHZhbHVlcyBhbGxvd2VkIGluIGV4cHJlc3Npb25zIGFyZSB0aG9zZSByZXR1cm5lZCBmcm9tIGBodG1sTGl0ZXJhbGBcbiAqIHdoaWNoIGVuc3VyZXMgb25seSBsaXRlcmFsIHZhbHVlcyBmcm9tIEpTIHNvdXJjZSBldmVyIHJlYWNoIHRoZSBIVE1MLCB0b1xuICogZ3VhcmQgYWdhaW5zdCBYU1Mgcmlza3MuXG4gKlxuICogQWxsIG90aGVyIHZhbHVlcyBhcmUgZGlzYWxsb3dlZCBpbiBleHByZXNzaW9ucyB0byBoZWxwIHByZXZlbnQgWFNTXG4gKiBhdHRhY2tzOyBob3dldmVyLCBgaHRtbExpdGVyYWxgIGNhbiBiZSB1c2VkIHRvIGNvbXBvc2Ugc3RhdGljXG4gKiBzdHJpbmcgdmFsdWVzIGludG8gdGVtcGxhdGVzLiBUaGlzIGlzIHVzZWZ1bCB0byBjb21wb3NlIHN0cmluZ3MgaW50b1xuICogcGxhY2VzIHRoYXQgZG8gbm90IGFjY2VwdCBodG1sLCBsaWtlIHRoZSBjc3MgdGV4dCBvZiBhIGBzdHlsZWBcbiAqIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+Omhvc3R7IGNvbnRlbnQ6XCIuLi5cIiB9PC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHt0aGlzLnBhcnRpYWxUZW1wbGF0ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgcGFydGlhbFRlbXBsYXRlKCkgeyByZXR1cm4gaHRtbGA8c3Bhbj5QYXJ0aWFsITwvc3Bhbj5gOyB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gQ29uc3RydWN0ZWQgSFRNTFRlbXBsYXRlRWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IGZ1bmN0aW9uIGh0bWwoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gKi8oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgaHRtbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbi8qKlxuICogQW4gaHRtbCBsaXRlcmFsIHRhZyB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYGh0bWxgIHRvIGNvbXBvc2UuXG4gKiBhIGxpdGVyYWwgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPlxuICogICAgICAgICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAqICAgICAgICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZSgpfVxuICogICAgICAgICA8L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3N0YXRpY1ZhbHVlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBzdHlsZVRlbXBsYXRlKCkge1xuICogICAgICAgIHJldHVybiBodG1sTGl0ZXJhbGAuc2hhZG93ZWQgeyBiYWNrZ3JvdW5kOiBncmF5OyB9YDtcbiAqICAgICB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshTGl0ZXJhbFN0cmluZ30gQ29uc3RydWN0ZWQgbGl0ZXJhbCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWxMaXRlcmFsID0gZnVuY3Rpb24oc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIHJldHVybiBuZXcgTGl0ZXJhbFN0cmluZyh2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGxpdGVyYWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pKTtcbn07XG4iLCJpbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBDdWlCYXNlRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopIHtcbiAgICBsZXQgZXh0cmFzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9kYXRhX3RlbXBsYXRlO1xuICAgIGlmIChleHRyYXMpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYXMpKSB7XG4gICAgICAgIGV4dHJhcyA9IFtleHRyYXNdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhcy5tYXAoZXh0cmEgPT4gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgZXh0cmEsXG4gICAgICAgIGhhc3MsXG4gICAgICAgIGhhc3Muc3RhdGVzLFxuICAgICAgICBzdGF0ZU9iaixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgICAgLyogYXR0cmlidXRlPSAqLyB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlT2JqLnN0YXRlLFxuICAgICAgKSkuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQgIT09IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSkge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGV4dHJhLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQ7XG4gIH1cblxuICBoYXNFeHRyYShleHRyYSkge1xuICAgIHJldHVybiBleHRyYS5sZW5ndGggPiAwO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDdWlCYXNlRWxlbWVudDtcbiIsImltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgRHluYW1pY0VsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBlbGVtZW50TmFtZTogU3RyaW5nLFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ29ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKScsXG4gICAgXTtcbiAgfVxuXG4gIG9ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKSB7XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgIGVsZW1lbnROYW1lID8gZWxlbWVudE5hbWUudG9VcHBlckNhc2UoKSA6ICdESVYnLFxuICAgICAgeyBoYXNzLCBzdGF0ZU9iaiwgaW5EaWFsb2cgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy1lbGVtZW50JywgRHluYW1pY0VsZW1lbnQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcblxuaW1wb3J0ICcuL2R5bmFtaWMtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBEeW5hbWljV2l0aEV4dHJhIGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1jYXJkLWRpc3BsYXknKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5jb250cm9sLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IC00cHggLTE2cHggLTRweCAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGhhLXN0YXRlLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAgIGR5bmFtaWMtZWxlbWVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgICNvdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgI2xvY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICB9XG4gICAgICAjbG9jay5oYS1jb3Zlci1jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAuZXh0cmEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1zaXplOiAzNnB4O1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZTogMS4yZW07XG4gICAgICB9XG4gICAgICAuc3RhdGUge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgY2xhc3MkPSdbW2V4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKV1dIGhvcml6b250YWwgbGF5b3V0Jz5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tleHRyYU9ialZpc2libGVdXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCdcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPSdbW2V4dHJhT2JqXV0nXG4gICAgICAgICAgICAgICAgICBvbi1kb20tY2hhbmdlPSdleHRyYURvbUNoYW5nZWQnPlxuICAgICAgICAgIDxoYS1zdGF0ZS1sYWJlbC1iYWRnZSBoYXNzPSdbW2hhc3NdXScgc3RhdGU9J1tbaXRlbV1dJz48L2hhLXN0YXRlLWxhYmVsLWJhZGdlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkeW5hbWljLWVsZW1lbnRcbiAgICAgICAgICAgICAgICBjbGFzcz0nZmxleCdcbiAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgICAgIGVsZW1lbnQtbmFtZT0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDwvZHluYW1pYy1lbGVtZW50PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2lzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlcIiBvbi1jbGljaz0nY2xpY2tIYW5kbGVyJz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9ja11dJz5cbiAgICAgICAgICAgICAgICAgIDxpcm9uLWljb24gaWQ9XCJsb2NrXCIgY2xhc3MkPVwiW1tjb250cm9sRWxlbWVudF1dXCIgaWNvbj1cIm1kaTpsb2NrLW91dGxpbmVcIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdGUnPltbY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICBleHRyYU9iajoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIF9hdHRhY2hlZCknLFxuICAgICAgfSxcbiAgICAgIF9hdHRhY2hlZDogQm9vbGVhbixcbiAgICAgIGV4dHJhT2JqVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2F0dGFjaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBhdHRhY2hlZCkge1xuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZSB8fCAhYXR0YWNoZWQpIHJldHVybiBbXTtcbiAgICBsZXQgZXh0cmFCYWRnZXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYUJhZGdlcykpIHtcbiAgICAgIGV4dHJhQmFkZ2VzID0gW2V4dHJhQmFkZ2VzXTtcbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhQmFkZ2VzLm1hcCgoZXh0cmFCYWRnZSkgPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoZXh0cmFCYWRnZS5lbnRpdHlfaWQgJiYgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdKSB7XG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICB0aGlzLCBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0sIHRoaXMuaW5EaWFsb2csXG4gICAgICAgICAgLyogYWxsb3dIaWRkZW49ICovZmFsc2UpKTtcbiAgICAgIH0gZWxzZSBpZiAoZXh0cmFCYWRnZS5hdHRyaWJ1dGUgJiZcbiAgICAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgc3RhdGU6IFN0cmluZyhzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSksXG4gICAgICAgICAgZW50aXR5X2lkOiAnbm9uZS5ub25lJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IGV4dHJhQmFkZ2UudW5pdCB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICAgICAgbGV0IGJsYWNrbGlzdCA9IGV4dHJhQmFkZ2UuYmxhY2tsaXN0X3N0YXRlcztcbiAgICAgIGlmIChibGFja2xpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmxhY2tsaXN0KSkge1xuICAgICAgICAgIGJsYWNrbGlzdCA9IFtibGFja2xpc3RdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChibGFja2xpc3Quc29tZSh2ID0+IFJlZ0V4cCh2KS50ZXN0KHJlc3VsdC5zdGF0ZS50b1N0cmluZygpKSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0Ll9lbnRpdHlEaXNwbGF5ID0gJyc7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pLmZpbHRlcihleHRyYUJhZGdlID0+IGV4dHJhQmFkZ2UgIT0gbnVsbCk7XG4gIH1cblxuICBjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZyB8fCAhZXh0cmFPYmopIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZXh0cmFPYmoubGVuZ3RoICE9PSAwO1xuICB9XG5cbiAgZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpIHtcbiAgICByZXR1cm4gZXh0cmFPYmpWaXNpYmxlID8gJ2V4dHJhJyA6ICcnO1xuICB9XG5cbiAgX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhpZGVfY29udHJvbDtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopIHtcbiAgICAvLyBoYUxvY2FsaXplIHJlbW92ZWQgaW4gMC42MVxuICAgIHJldHVybiBzdXBlci5jb21wdXRlU3RhdGVEaXNwbGF5KHRoaXMuaGFMb2NhbGl6ZSB8fCB0aGlzLmxvY2FsaXplLCBzdGF0ZU9iaik7XG4gIH1cblxuICBpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHMgfHxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jaztcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBjb25zdCBsb2NrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2NrJyk7XG4gICAgaWYgKGxvY2spIHtcbiAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vcGVuLW91dGxpbmUnO1xuICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJzAuMSc7XG4gICAgfVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vdXRsaW5lJztcbiAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICB9XG4gICAgfSwgNTAwMCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFwcGx5VGhlbWVzKGhhc3MsIGVsZW1lbnQsIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCc7XG4gICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICBlbGVtZW50LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgZXh0cmFEb21DaGFuZ2VkKCkge1xuICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpXG4gICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICB0aGlzLmFwcGx5VGhlbWVzKHRoaXMuaGFzcywgZWxlbSwgZWxlbS5zdGF0ZSk7XG4gICAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLXdpdGgtZXh0cmEnLCBEeW5hbWljV2l0aEV4dHJhKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgRXZlbnRzTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2V2ZW50cy1taXhpbi5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbVVpIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lci5FbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPjwvc3R5bGU+XG4gICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPSdtZGk6YXJyb3ctbGVmdCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdfYmFja0hhbmRsZXInXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPGRpdiBtYWluLXRpdGxlPkN1c3RvbSBVSSBzZXR0aW5nczwvZGl2PlxuICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT0nW1tpc1dpZGVdXSc+XG4gICAgICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9J0RldmljZSBuYW1lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgU2V0IGRldmljZSBuYW1lIHNvIHRoYXQgeW91IGNhbiByZWZlcmVuY2UgaXQgaW4gcGVyLWRldmljZSBzZXR0aW5nc1xuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPSdOYW1lJ1xuICAgICAgICAgICAgICB2YWx1ZT0ne3tuYW1lfX0nXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wYXBlci1jYXJkPlxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnbmFtZUNoYW5nZWQnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLm5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICB9XG5cbiAgbmFtZUNoYW5nZWQobmFtZSkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5zZXROYW1lKG5hbWUpO1xuICB9XG5cbiAgX2JhY2tIYW5kbGVyKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB0aGlzLmZpcmUoJ2xvY2F0aW9uLWNoYW5nZWQnKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS1jb25maWctY3VzdG9tLXVpJywgSGFDb25maWdDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhVGhlbWVkU2xpZGVyIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0taGEtdGhlbWVkLXNsaWRlci1tYXJnaW4sIGluaXRpYWwpO1xuICAgICAgfVxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXItcGluLXN0YXJ0LWNvbG9yOiAgdmFyKC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbi5pcy1vbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXNsaWRlciB7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWhhLXBhcGVyLXNsaWRlci13aWR0aCwgMjAwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItc2xpZGVyXG4gICAgICAgICBtaW49J1tbX3RoZW1lZE1pbl1dJ1xuICAgICAgICAgbWF4PSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1heFwiLCBtYXgpXV0nXG4gICAgICAgICBwaW49J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwicGluXCIsIHBpbildXSdcbiAgICAgICAgIGNsYXNzJD0nW1tjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIF90aGVtZWRNaW4pXV0nIHZhbHVlPSdbW3ZhbHVlXV0nXG4gICAgICAgICBvbi1jaGFuZ2U9J3ZhbHVlQ2hhbmdlZCc+XG4gICAgPC9wYXBlci1zbGlkZXI+XG4gICAgYDtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbiA9ICF0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoaXMudGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbik7XG4gICAgdGhpcy5jb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoaXMudGhlbWUsIHRoaXMuZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgIH0sXG4gICAgICBwaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlzT246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICB0aGVtZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX3RoZW1lZE1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWluXCIsIG1pbiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpJyxcbiAgICBdO1xuICB9XG5cbiAgY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKSB7XG4gICAgdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkID0gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZShcbiAgICAgIHRoZW1lLCAncmVwb3J0X3doZW5fbm90X2NoYW5nZWQnLCAhZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBhdHRyLCBkZWYpIHtcbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGlmIChhdHRyIGluIHRoZW1lKSB7XG4gICAgICAgIHJldHVybiB0aGVtZVthdHRyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgdGhlbWVkTWluKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChpc09uKSB7XG4gICAgICByZXN1bHQgKz0gJ2lzLW9uICc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pIHx8IHRoZW1lZE1pbiA9PT0gMCkge1xuICAgICAgLy8gSWYgb2ZmV2hlbk1pbiBpcyBlbmFibGVkIGRvbid0IGN1c3RvbWl6ZS5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3Jlc3VsdH1kaXNhYmxlLW9mZi13aGVuLW1pbmA7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCAmJiB0aGlzLnZhbHVlID09PSBldi50YXJnZXQudmFsdWUpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLXRoZW1lZC1zbGlkZXInLCBIYVRoZW1lZFNsaWRlcik7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcbmltcG9ydCBzdGF0ZUNhcmRUeXBlIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfY2FyZF90eXBlLmpzJztcblxuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyc7XG5cbmNvbnN0IFNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTID0gWydjb25maWd1cmF0b3InXTtcbmNvbnN0IERPTUFJTl9UT19TTElERVJfU1VQUE9SVCA9IHtcbiAgbGlnaHQ6IDEsIC8vIFNVUFBPUlRfQlJJR0hUTkVTU1xuICBjb3ZlcjogNCwgLy8gU1VQUE9SVF9TRVRfUE9TSVRJT05cbiAgY2xpbWF0ZTogMSwgLy8gU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbn07XG5jb25zdCBUWVBFX1RPX0NPTlRST0wgPSB7XG4gIHRvZ2dsZTogJ2hhLWVudGl0eS10b2dnbGUnLFxuICBkaXNwbGF5OiAnJyxcbiAgY292ZXI6ICdoYS1jb3Zlci1jb250cm9scycsXG59O1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZEN1c3RvbVVpIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiknLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gJ0RJVicgJiZcbiAgICAgICAgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykgfHwgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2hpbGQtY2FyZCcpKSkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAvLyBTaW5jZSB0aGlzIGRvZXNuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIC0gbm8gbmVlZCB0byBjbGVhciBpdC5cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLCAndmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCBpbmhlcml0KScpO1xuXG4gICAgICAvLyBQb2x5ZmlsbCAndXBkYXRlU3R5bGVzJy5cbiAgICAgIGlmICghY29udGFpbmVyLnVwZGF0ZVN0eWxlcykge1xuICAgICAgICBjb250YWluZXIudXBkYXRlU3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBzdHlsZXNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VkKHRoaXMuaGFzcywgdGhpcy5pbkRpYWxvZywgdGhpcy5zdGF0ZU9iaik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICB0aGlzLl9jb250YWluZXIsIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgJ2RlZmF1bHQnKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBiYWRnZU1vZGUoaGFzcywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIGNvbnN0IHN0YXRlcyA9IFtdO1xuICAgIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbaWRdO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBJRCAke2lkfSBpbiBncm91cCAke3N0YXRlT2JqLmVudGl0eV9pZH1gKTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0IHx8XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0LmluY2x1ZGVzKHN0YXRlLmVudGl0eV9pZCkpIHtcbiAgICAgICAgICBzdGF0ZXMucHVzaCh3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBzdGF0ZSwgZmFsc2UgLyogaW5EaWFsb2cgKi8sIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZU9iaik7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykpIHtcbiAgICAgICAgICBwYXJhbXMubWFyZ2luID0gJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLW1hcmdpbiwgMCknO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAnSEEtQkFER0VTLUNBUkQnLFxuICAgICAgeyBoYXNzLCBzdGF0ZXMgfSk7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIHdpZHRoOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtd2lkdGgsIGluaXRpYWwpJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtdGV4dC1hbGlnbiwgaW5pdGlhbCknLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubGFzdENoaWxkLnN0eWxlLmZvbnRTaXplID0gJzg1JSc7XG5cbiAgICAvLyBTaW5jZSB0aGlzIHZhcmlhYmxlIG9ubHkgYWZmZWN0cyBiYWRnZXMgbW9kZSAtIG5vIG5lZWQgdG8gY2xlYW4gaXQgdXAuXG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oYS1zdGF0ZS1sYWJlbC1iYWRnZS1tYXJnaW4tYm90dG9tJywgJzAnKTtcbiAgfVxuXG4gIGNsZWFuQmFkZ2VTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnIH0pO1xuICB9XG5cbiAgYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopIHtcbiAgICBsZXQgdGhlbWVUYXJnZXQgPSB0aGlzO1xuICAgIGxldCB0aGVtZU5hbWUgPSAnZGVmYXVsdCc7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhlbWVUYXJnZXQgPSB0aGlzLl9jb250YWluZXI7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICB0aGVtZU5hbWUgPSBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lO1xuICAgIH1cbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgIHRoZW1lVGFyZ2V0LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgbWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSB7XG4gICAgaWYgKCFtb2RpZmllZE9iaikge1xuICAgICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNsaWRlckVsaWdpYmxlXyhkb21haW4sIG9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiZcbiAgICAgIChET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmIG9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykgJiZcbiAgICAgIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAmJiBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgIT09ICduby1zbGlkZXInO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MgfHwgIXRoaXMuX2lzQXR0YWNoZWQpIHJldHVybjtcbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICAgIGNvbnN0IG1vZGlmaWVkT2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgdGhpcywgc3RhdGVPYmosIGluRGlhbG9nLCB0cnVlIC8qIGFsbG93SGlkZGVuICovKTtcblxuICAgIGlmICh0aGlzLm1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikpIHJldHVybjtcblxuICAgIHRoaXMuYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopO1xuXG4gICAgaWYgKCFpbkRpYWxvZyAmJiBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSA9PT0gJ2JhZGdlcycpIHtcbiAgICAgIHRoaXMuYmFkZ2VNb2RlKGhhc3MsIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfVxuICB9XG5cbiAgcmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgdGhpcy5jbGVhbkJhZGdlU3R5bGUoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGhhc3MsXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIGluRGlhbG9nLFxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxTdGF0ZUNhcmRUeXBlID0gc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaik7XG4gICAgbGV0IGN1c3RvbVN0YXRlQ2FyZFR5cGU7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5O1xuXG4gICAgaWYgKGRvbWFpbiA9PT0gJ2xpZ2h0JyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gICAgICAgIHNlcnZpY2VNaW46ICd0dXJuX29mZicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICd0dXJuX29uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnYnJpZ2h0bmVzcycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY292ZXItY29udHJvbHMnLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ2Nsb3NlX2NvdmVyJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF9jb3Zlcl9wb3NpdGlvbicsXG4gICAgICAgIHNldFZhbHVlTmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnY3VycmVudF9wb3NpdGlvbicsXG4gICAgICAgIG5hbWVPbjogJ29wZW4nLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjbGltYXRlJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY2xpbWF0ZS1zdGF0ZScsXG4gICAgICAgIG1pbjogc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcCB8fCAtMTAwLFxuICAgICAgICBtYXg6IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXAgfHwgMjAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHZhbHVlTmFtZTogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgbmFtZU9uOiAnJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV07XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZCAmJlxuICAgICAgICAgICAgICAgIVNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTLmluY2x1ZGVzKG9yaWdpbmFsU3RhdGVDYXJkVHlwZSkpIHtcbiAgICAgIHBhcmFtcy5pbkRpYWxvZyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gJyc7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudDtcbiAgICB9XG5cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgKHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgfHwgY3VzdG9tU3RhdGVDYXJkVHlwZSB8fCBgU1RBVEUtQ0FSRC0ke29yaWdpbmFsU3RhdGVDYXJkVHlwZX1gKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcGFyYW1zKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLWN1c3RvbS11aScsIFN0YXRlQ2FyZEN1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuaW1wb3J0ICcuL2hhLXRoZW1lZC1zbGlkZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLnNlY29uZC1saW5lLCAuc3RhdGUtYW5kLXRvZ2dsZSwgLnN0YXRlLWluZm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1hbmQtdG9nZ2xlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc2Vjb25kLWxpbmUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kLWxpbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgIH1cbiAgICAgIC5zdHJldGNoIC5zZWNvbmQtbGluZSwgLnN0cmV0Y2ggaGEtdGhlbWVkLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWhhLXBhcGVyLXNsaWRlci13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWluZm8ge1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICBoYS10aGVtZWQtc2xpZGVyLCAudG9wLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAudG9wLXdyYXBwZXIuc3RyZXRjaCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcyQ9J2hvcml6b250YWwgbGF5b3V0IGZsZXggdG9wLXdyYXBwZXIgW1tfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpXV0nPlxuICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkIGZsZXgtYXV0byBzdGF0ZS1hbmQtdG9nZ2xlJz5cbiAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvIGZsZXgtYXV0bydcbiAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2JyZWFrU2xpZGVyXV0nIGNsYXNzPSdoaWRkZW4nPlxuICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc2hvd1NsaWRlcl1dJyByZXN0YW1wPlxuICAgICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBmbGV4LWF1dG8gZW5kLWp1c3RpZmllZCBzZWNvbmQtbGluZSc+XG4gICAgICAgICAgPGhhLXRoZW1lZC1zbGlkZXJcbiAgICAgICAgICAgIGlkPSdzbGlkZXInXG4gICAgICAgICAgICBtYXg9W1ttYXhdXVxuICAgICAgICAgICAgbWluPVtbbWluXV1cbiAgICAgICAgICAgIHRoZW1lPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuc2xpZGVyX3RoZW1lXV0nXG4gICAgICAgICAgICBpcy1vbj0nW1tpc09uKHN0YXRlT2JqLCBuYW1lT24pXV0nXG4gICAgICAgICAgICB2YWx1ZT0ne3tzbGlkZXJWYWx1ZX19J1xuICAgICAgICAgICAgZGlzYWJsZS1vZmYtd2hlbi1taW49J3t7ZGlzYWJsZU9mZldoZW5NaW59fSdcbiAgICAgICAgICAgIG9uLWNoYW5nZT0nc2xpZGVyQ2hhbmdlZCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdzdG9wUHJvcGFnYXRpb24nPlxuICAgICAgICAgIDwvaGEtdGhlbWVkLXNsaWRlcj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWJyZWFrU2xpZGVyXV0nPlxuICAgICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1pbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1heDogU3RyaW5nLFxuICAgICAgdmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICBzZXRWYWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIG5hbWVPbjogeyB0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb24nIH0sXG4gICAgICBtaW46IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMCB9LFxuICAgICAgbWF4OiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDI1NSB9LFxuXG4gICAgICBzbGlkZXJWYWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiBCb29sZWFuLFxuICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgc3RyZXRjaFNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYnJlYWtTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGhpZGVTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGxpbmVUb29Mb25nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBtaW5MaW5lQnJlYWs6IE51bWJlcixcbiAgICAgIG1heExpbmVCcmVhazogTnVtYmVyLFxuICAgICAgc2hvd1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX29uSXJvblJlc2l6ZSA9IHRoaXMuX29uSXJvblJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5faXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKScsXG4gICAgXTtcbiAgfVxuXG4gIF93YWl0Rm9yTGF5b3V0KCkge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0ZWQpIHJldHVybjtcbiAgICB0aGlzLl9zZXRNb2RlKCk7XG4gICAgaWYgKHRoaXMuX2ZyYW1lSWQpIHJldHVybjtcbiAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gZmFsc2U7XG4gICAgdGhpcy5fZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uSXJvblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldE1vZGUoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgaGlkZVNsaWRlcjogdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInICYmIHRoaXMubGluZVRvb0xvbmcsXG4gICAgICBicmVha1NsaWRlcjpcbiAgICAgICAgICAgKHRoaXMubW9kZSA9PT0gJ2JyZWFrLXNsaWRlcicgfHwgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSAmJlxuICAgICAgICAgICB0aGlzLmxpbmVUb29Mb25nLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLnNob3dTbGlkZXIpIHtcbiAgICAgIG9iai5icmVha1NsaWRlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICB9XG5cbiAgX29uSXJvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVhZHlUb0NvbXB1dGUpIHJldHVybjtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbm8tc2xpZGVyJykge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgaGlkZVNsaWRlcjogdHJ1ZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldkJyZWFrU2xpZGVyID0gdGhpcy5icmVha1NsaWRlcjtcbiAgICBjb25zdCBwcmV2SGlkZVNsaWRlciA9IHRoaXMuaGlkZVNsaWRlcjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuJDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPT09IDApIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPD0gdGhpcy5taW5MaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyV2lkdGggPj0gdGhpcy5tYXhMaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZIaWRlU2xpZGVyICYmIHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHVuaGlkZSB0aGUgc2xpZGVyIGluIG9yZGVyIHRvIHJlY2FsY3VsYXRlIGhlaWdodC5cbiAgICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgc3RhdGVIZWlnaHQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnN0YXRlLWluZm8nKS5jbGllbnRIZWlnaHQ7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gY29udGFpbmVySGVpZ2h0ID4gc3RhdGVIZWlnaHQgKiAxLjU7XG4gICAgICBpZiAodGhpcy5saW5lVG9vTG9uZykge1xuICAgICAgICB0aGlzLm1pbkxpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgfSBlbHNlIGlmICghcHJldkJyZWFrU2xpZGVyKSB7XG4gICAgICAgIHRoaXMubWF4TGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgfVxuXG4gIF9jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZS1saW5lJykge1xuICAgICAgcmV0dXJuICdub3dyYXAnO1xuICAgIH1cbiAgICBpZiAoc3RyZXRjaFNsaWRlciAmJiBsaW5lVG9vTG9uZykge1xuICAgICAgcmV0dXJuICdzdHJldGNoIHdyYXAnO1xuICAgIH1cbiAgICByZXR1cm4gJ3dyYXAnO1xuICB9XG5cbiAgX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKSB7XG4gICAgaWYgKGluRGlhbG9nIHx8IGhpZGVTbGlkZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBjb25zdCBwYXJhbSA9IHsgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9O1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm47XG4gICAgbGV0IHRhcmdldCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVyJyk7XG4gICAgaWYgKGV2LnRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAvLyBObyBTaGFkb3cgRE9NIC0gd2UgaGF2ZSBhY2Nlc3MgdG8gb3JpZ2luYWwgdGFyZ2V0LlxuICAgICAgKHsgdGFyZ2V0IH0gPSBldik7XG4gICAgfSBlbHNlIGlmIChldi5wYXRoKSB7XG4gICAgICBbdGFyZ2V0XSA9IGV2LnBhdGg7XG4gICAgfSBlbHNlIGlmIChldi5jb21wb3NlZFBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gMCB8fCAodmFsdWUgPD0gdGFyZ2V0Lm1pbiAmJiAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikpIHtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWluLCBwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtW3RoaXMuc2V0VmFsdWVOYW1lIHx8IHRoaXMudmFsdWVOYW1lXSA9IHZhbHVlO1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNYXgsIHBhcmFtKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgc2xpZGVyVmFsdWU6IHRoaXMuaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSA/IHN0YXRlT2JqLmF0dHJpYnV0ZXNbdmFsdWVOYW1lXSA6IDAsXG4gICAgfTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB7XG4gICAgICAgIG1pbkxpbmVCcmVhazogMCxcbiAgICAgICAgbWF4TGluZUJyZWFrOiA5OTksXG4gICAgICAgIGhpZGVTbGlkZXI6IGZhbHNlLFxuICAgICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgICAgbW9kZTogc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUsXG4gICAgICAgIHN0cmV0Y2hTbGlkZXI6ICEhc3RhdGVPYmouYXR0cmlidXRlcy5zdHJldGNoX3NsaWRlcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBpc09uKHN0YXRlT2JqLCBuYW1lT24pIHtcbiAgICByZXR1cm4gc3RhdGVPYmogJiYgKCFuYW1lT24gfHwgc3RhdGVPYmouc3RhdGUgPT09IG5hbWVPbik7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJywgU3RhdGVDYXJkV2l0aFNsaWRlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkJz5cbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYVxuICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJ1xuICAgICAgICAgIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz5cbiAgICAgIDwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIpO1xuIiwiLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuZXhwb3J0IGRlZmF1bHQgKHN1cGVyQ2xhc3MpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBFdmVudHNNaXhpbiBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAgICogICBwYXlsb2FkLlxuICAgICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICAqL1xuICAgIGZpcmUodHlwZSwgZGV0YWlsID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgICAgICBidWJibGVzOiBvcHRpb25zLmJ1YmJsZXMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IEJvb2xlYW4ob3B0aW9ucy5jYW5jZWxhYmxlKSxcbiAgICAgICAgY29tcG9zZWQ6IG9wdGlvbnMuY29tcG9zZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmNvbXBvc2VkLFxuICAgICAgfSk7XG4gICAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgICBjb25zdCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IHRoaXM7XG4gICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRzTWl4aW47XG59O1xuIiwiaW1wb3J0IGhhc3NBdHRyaWJ1dGVzVXRpbCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsLmpzJztcblxud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsIHx8IHt9O1xuY29uc3QgU1VQUE9SVEVEX1NMSURFUl9NT0RFUyA9IFtcbiAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG5dO1xuXG5jb25zdCBjdXN0b21VaUF0dHJpYnV0ZXMgPSB7XG4gIGdyb3VwOiB1bmRlZmluZWQsXG4gIGRldmljZTogdW5kZWZpbmVkLFxuICB0ZW1wbGF0ZXM6IHVuZGVmaW5lZCxcbiAgc3RhdGU6IHVuZGVmaW5lZCxcbiAgX3N0YXRlRGlzcGxheTogdW5kZWZpbmVkLFxuICBjb250cm9sX2VsZW1lbnQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgc3RhdGVfY2FyZF9tb2RlOiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBsaWdodDogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY292ZXI6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNsaW1hdGU6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgICcqJzogWydiYWRnZXMnXSxcbiAgICB9LFxuICB9LFxuICBzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgYmFkZ2VzX2xpc3Q6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHNob3dfbGFzdF9jaGFuZ2VkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2NvbnRyb2w6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGV4dHJhX2RhdGFfdGVtcGxhdGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgZXh0cmFfYmFkZ2U6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHN0cmV0Y2hfc2xpZGVyOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBzbGlkZXJfdGhlbWU6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHRoZW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGNvbmZpcm1fY29udHJvbHM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2luX2RlZmF1bHRfdmlldzogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaWNvbl9jb2xvcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxufTtcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZXNVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVM7XG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gaGFzc0F0dHJpYnV0ZXNVdGlsLlVOS05PV05fVFlQRTtcbk9iamVjdC5hc3NpZ24od2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGN1c3RvbVVpQXR0cmlidXRlcyk7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldFZpZXdFbnRpdGllcyBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF92aWV3X2VudGl0aWVzLmpzJztcblxuaW1wb3J0ICcuLi9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzJztcbmltcG9ydCBWRVJTSU9OIGZyb20gJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgJy4vaGFzcy1hdHRyaWJ1dGUtdXRpbC5qcyc7XG5cbndpbmRvdy5jdXN0b21VSSA9IHdpbmRvdy5jdXN0b21VSSB8fCB7XG4gIFNVUFBPUlRFRF9TTElERVJfTU9ERVM6IFtcbiAgICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbiAgXSxcblxuICBkb21Ib3N0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gZG9jdW1lbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtLmdldFJvb3ROb2RlKCk7XG4gICAgcmV0dXJuIChyb290IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyAvKiogQHR5cGUge1NoYWRvd1Jvb3R9ICovIChyb290KS5ob3N0IDogcm9vdDtcbiAgfSxcblxuICBsaWdodE9yU2hhZG93KGVsZW0sIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGVsZW0uc2hhZG93Um9vdCA/XG4gICAgICBlbGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOlxuICAgICAgZWxlbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfSxcblxuICBnZXRFbGVtZW50SGllcmFyY2h5KHJvb3QsIGhpZXJhcmNoeSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlbGVtID0gaGllcmFyY2h5LnNoaWZ0KCk7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3cocm9vdCwgZWxlbSksIGhpZXJhcmNoeSk7XG4gICAgfVxuICAgIHJldHVybiByb290O1xuICB9LFxuXG4gIGdldENvbnRleHQoZWxlbSkge1xuICAgIGlmIChlbGVtLl9jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW0uX2NvbnRleHQgPSBbXTtcbiAgICAgIGZvciAobGV0IGVsZW1lbnQgPSAoZWxlbS50YWdOYW1lID09PSAnSEEtRU5USVRJRVMtQ0FSRCcgPyB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtKSA6IGVsZW0pO1xuICAgICAgICBlbGVtZW50OyBlbGVtZW50ID0gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbWVudCkpIHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICBjYXNlICdIQS1FTlRJVElFUy1DQVJEJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5KSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50Lmdyb3VwRW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkgPT09IGZhbHNlICYmIGVsZW1lbnQuc3RhdGVzICYmIGVsZW1lbnQuc3RhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goYGdyb3VwLiR7Y29tcHV0ZVN0YXRlRG9tYWluKGVsZW1lbnQuc3RhdGVzWzBdKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ01PUkUtSU5GTy1HUk9VUCc6XG4gICAgICAgICAgY2FzZSAnU1RBVEUtQ0FSRC1DT05URU5UJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LnN0YXRlT2JqLmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIQS1DQVJEUyc6XG4gICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpIHx8ICdkZWZhdWx0X3ZpZXcnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbS5fY29udGV4dC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtLl9jb250ZXh0O1xuICB9LFxuXG4gIGZpbmRNYXRjaChrZXksIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHJldHVybiBudWxsO1xuICAgIGlmIChvcHRpb25zW2tleV0pIHJldHVybiBrZXk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbmQob3B0aW9uID0+IGtleS5tYXRjaChgXiR7b3B0aW9ufSRgKSk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2gobmFtZSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VbbWF0Y2hdKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0Q29udGV4dChlbGVtKTtcbiAgICBpZiAoIWNvbnRleHQpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCkge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG4gICAgY29udGV4dC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKGMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYXR0cmlidXRlcywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBfc2V0S2VlcChvYmosIHZhbHVlKSB7XG4gICAgaWYgKG9iai5fY3VpX2tlZXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gb2JqLl9jdWlfa2VlcCAmJiB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFhdHRyaWJ1dGVzLnRlbXBsYXRlcykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCB0cnVlKTtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgbmV3QXR0cmlidXRlcyA9IHt9O1xuICAgIGxldCBoYXNHbG9iYWwgPSBmYWxzZTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMudGVtcGxhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gYXR0cmlidXRlcy50ZW1wbGF0ZXNba2V5XTtcbiAgICAgIGlmICh0ZW1wbGF0ZS5tYXRjaCgvXFxiKGVudGl0aWVzfGhhc3MpXFxiLykpIHtcbiAgICAgICAgaGFzR2xvYmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgdGVtcGxhdGUsIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMsXG4gICAgICAgIChzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzICYmIHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXNba2V5XSkgfHxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSxcbiAgICAgICAgc3RhdGVPYmoudW50ZW1wbGF0ZWRfc3RhdGUgfHwgc3RhdGVPYmouc3RhdGUpO1xuICAgICAgLy8gSW4gY2FzZSBvZiBudWxsIGRvbid0IHNldCB0aGUgdmFsdWUuXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgIG5ld0F0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ3N0YXRlJykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLnN0YXRlKSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnX3N0YXRlRGlzcGxheScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5KSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IGF0dHJpYnV0ZXNba2V5XSkge1xuICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosICFoYXNHbG9iYWwpO1xuICAgIGlmICghaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcyA9PT0gYXR0cmlidXRlcykge1xuICAgICAgLy8gV2UgYXJlIG9wZXJhdGluZyBvbiByZWFsIGF0dHJpYnV0ZXMuIFJlcGxhY2UgdGhlbS5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIG5ld0F0dHJpYnV0ZXMpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnc3RhdGUnKSkge1xuICAgICAgICBpZiAobmV3QXR0cmlidXRlcy5zdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5zdGF0ZSA9IFN0cmluZyhuZXdBdHRyaWJ1dGVzLnN0YXRlKTtcbiAgICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGUgPSBzdGF0ZU9iai5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnX3N0YXRlRGlzcGxheScpKSB7XG4gICAgICAgIHJlc3VsdC5fc3RhdGVEaXNwbGF5ID0gbmV3QXR0cmlidXRlcy5fc3RhdGVEaXNwbGF5O1xuICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5ID0gc3RhdGVPYmouX3N0YXRlRGlzcGxheTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChyZXN1bHQsICFoYXNHbG9iYWwpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gT3BlcmF0aW5nIG9uIGNvbnRleHQtYXdhcmUgYXR0cmlidXRlcy4gUmV0dXJuIHNoYWxsb3cgY29weSBvZiBvYmplY3QuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmopIHtcbiAgICBjb25zdCBuZXdSZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIHN0YXRlT2JqLmF0dHJpYnV0ZXMpO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGVzKG9iaikge1xuICAgICAgaWYgKCFvYmopIHJldHVybjtcbiAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgICAgIGhhc3MsIHN0YXRlcywgbmV3UmVzdWx0LCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgaGFzQ2hhbmdlcyB8PSAocmVzdWx0ICE9PSBuZXdSZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmRldmljZSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmdyb3VwKTtcbiAgICB9XG5cbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICBpZiAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaikgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICBpZiAoaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlT2JqO1xuICB9LFxuXG4gIGFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIHN0YXRlOiBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpLFxuICAgICAgdW50ZW1wbGF0ZWRfYXR0cmlidXRlczogc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGVPYmoubGFzdF9jaGFuZ2VkLFxuICAgIH07XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3QoZWxlbSwgc3RhdGVPYmosIGluRGlhbG9nLCBhbGxvd0hpZGRlbikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGxldCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBvYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgZWxlbS5oYXNzLCBlbGVtLmhhc3Muc3RhdGVzLCBvYmosIG9iai5hdHRyaWJ1dGVzKTtcblxuICAgIGlmIChvYmogIT09IHN0YXRlT2JqICYmIG9iai5hdHRyaWJ1dGVzLmhpZGRlbiAmJiBhbGxvd0hpZGRlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZml4R3JvdXBUaXRsZXMoKSB7XG4gICAgY29uc3QgaG9tZUFzc2lzdGFudE1haW4gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJ10pO1xuICAgIGlmIChob21lQXNzaXN0YW50TWFpbiA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcywgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhvbWVBc3Npc3RhbnRNYWluLCBbXG4gICAgICAncGFydGlhbC1jYXJkcycsXG4gICAgICAnaGEtY2FyZHNbdmlldy12aXNpYmxlXSddKTtcbiAgICBpZiAoaGFDYXJkcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYUNhcmRzLCAnLm1haW4nKSB8fCBoYUNhcmRzLiQubWFpbjtcbiAgICBjb25zdCBjYXJkcyA9IG1haW4ucXVlcnlTZWxlY3RvckFsbCgnaGEtZW50aXRpZXMtY2FyZCcpO1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmIChjYXJkLmdyb3VwRW50aXR5KSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICBjYXJkLFxuICAgICAgICAgIGNhcmQuZ3JvdXBFbnRpdHksXG4gICAgICAgICAgZmFsc2UgLyogaW5EaWFsb2cgKi8sXG4gICAgICAgICAgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pO1xuICAgICAgICBpZiAob2JqICE9PSBjYXJkLmdyb3VwRW50aXR5ICYmIG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUpIHtcbiAgICAgICAgICBjb25zdCBuYW1lRWxlbSA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGNhcmQsICcubmFtZScpO1xuICAgICAgICAgIG5hbWVFbGVtLnRleHRDb250ZW50ID0gb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGNvbnRyb2xDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLWNhcmRzJ10pO1xuICAgIGlmIChwYXJ0aWFsQ2FyZHMgPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zLmJpbmQobnVsbCwgY29sdW1ucyksXG4gICAgICAgIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGdW5jdGlvbiByZW5hbWVkIGZyb20gaGFuZGxlV2luZG93Q2hhbmdlIHRvIF91cGRhdGVDb2x1bW5zIG9uIDMuNy4xOFxuICAgIGNvbnN0IGYgPSBwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlIHx8IHBhcnRpYWxDYXJkcy5fdXBkYXRlQ29sdW1ucztcbiAgICBwYXJ0aWFsQ2FyZHMubXFscy5mb3JFYWNoKChtcWwpID0+IHtcbiAgICAgIG1xbC5yZW1vdmVMaXN0ZW5lcihmKTtcbiAgICB9KTtcbiAgICBwYXJ0aWFsQ2FyZHMubXFscyA9IGNvbHVtbnMubWFwKCh3aWR0aCkgPT4ge1xuICAgICAgY29uc3QgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7d2lkdGh9cHgpYCk7XG4gICAgICBtcWwuYWRkTGlzdGVuZXIoZik7XG4gICAgICByZXR1cm4gbXFsO1xuICAgIH0pO1xuICAgIGYoKTtcbiAgfSxcblxuICB1c2VDdXN0b21pemVyKCkge1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgY29uc3QgY3VzdG9taXplciA9IG1haW4uaGFzcy5zdGF0ZXNbJ2N1c3RvbWl6ZXIuY3VzdG9taXplciddO1xuICAgIGlmICghY3VzdG9taXplcikgcmV0dXJuO1xuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMpIHtcbiAgICAgIGlmICh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgJiYgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpIHtcbiAgICAgICAgY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgYXR0cikpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2F0dHJdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUNvbmZpZ1BhbmVsKCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGhhUGFuZWxDb25maWcgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLXBhbmVsLXJlc29sdmVyJyxcbiAgICAgICdoYS1wYW5lbC1jb25maWcnXSk7XG4gICAgaWYgKCFoYVBhbmVsQ29uZmlnKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsLCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYUNvbmZpZ05hdmlnYXRpb24gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShoYVBhbmVsQ29uZmlnLCBbXG4gICAgICAnaGEtY29uZmlnLWRhc2hib2FyZCcsXG4gICAgICAnaGEtY29uZmlnLW5hdmlnYXRpb24nXSk7XG4gICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbikge1xuICAgICAgLy8gSGFDb25maWdOYXZpZ2F0aW9uIHN0YXJ0ZWQgdXNpbmcgbG9jYWxpemUgb24gMjEuMDEuMjAxOFxuICAgICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSAmJiAhaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCA9IHRydWU7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZCA9IChoYXNzLCBwYWdlKSA9PlxuICAgICAgICAgIHBhZ2UgPT09ICdjdXN0b211aScgfHwgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQoaGFzcywgcGFnZSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnQ3VzdG9tIFVJJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdTZXRVSSB0d2Vha3MnIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFoYUNvbmZpZ05hdmlnYXRpb24ucGFnZXMuc29tZShjb25mID0+IGNvbmYgPT09ICdjdXN0b211aScgfHwgY29uZi5kb21haW4gPT09ICdjdXN0b211aScpKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5wdXNoKCdwYWdlcycsIGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSA/ICdjdXN0b211aScgOiB7XG4gICAgICAgICAgZG9tYWluOiAnY3VzdG9tdWknLFxuICAgICAgICAgIGNhcHRpb246ICdDdXN0b20gVUknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IFVJIHR3ZWFrcy4nLFxuICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEhhQ29uZmlnQ3VzdG9tVWkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGEtY29uZmlnLWN1c3RvbS11aScpO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5pc1dpZGUgPSBoYVBhbmVsQ29uZmlnLmlzV2lkZTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuc2V0QXR0cmlidXRlKCdwYWdlLW5hbWUnLCAnY3VzdG9tdWknKTtcbiAgICAgIHJldHVybiBoYUNvbmZpZ0N1c3RvbVVpO1xuICAgIH07XG5cbiAgICBjb25zdCBpcm9uUGFnZXMgPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYVBhbmVsQ29uZmlnLCAnaXJvbi1wYWdlcycpO1xuICAgIGlmIChpcm9uUGFnZXMpIHtcbiAgICAgIGlmIChpcm9uUGFnZXMubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgaXJvblBhZ2VzLmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgICBpcm9uUGFnZXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1pdGVtcy1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpKSB7XG4gICAgICAgICAgICBpcm9uUGFnZXMuc2VsZWN0KCdjdXN0b211aScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBoYVBhbmVsQ29uZmlnLnNoYWRvd1Jvb3QgfHwgaGFQYW5lbENvbmZpZztcbiAgICAgIGlmIChyb290Lmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICB9XG4gICAgICBjb25zdCB2aXNpYmxlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKTtcbiAgICAgIHJvb3QubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gdmlzaWJsZSA/ICcnIDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsU3RhdGVzSG9vaygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaG9tZS1hc3Npc3RhbnQnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAoIWhvbWVBc3Npc3RhbnQgfHwgIWhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzKSByZXR1cm47XG4gICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZSA9IGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzO1xuICAgICAgaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MgPSBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGNvbnN0IHsgaGFzcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKG9iai5zdGF0ZXMpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhvYmouc3RhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG9iai5zdGF0ZXNba2V5XTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuX2N1aV9rZWVwKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBuZXdFbnRpdHkgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBvYmouc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgICAgaWYgKGhhc3Muc3RhdGVzICYmIGVudGl0eSAhPT0gaGFzcy5zdGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgICAvLyBOZXcgc3RhdGUgYXJyaXZlZC4gUHV0IG1vZGlmaWVkIHN0YXRlIGluLlxuICAgICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSAhPT0gbmV3RW50aXR5KSB7XG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHNhbWUgc3RhdGUgYnV0IGNvbnRlbnRzIGNoYW5nZWQgZHVlIHRvIG90aGVyIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIG9iaik7XG4gICAgICAgIGlmIChvYmoudGhlbWVzICYmIGhhc3MuX3RoZW1lV2FpdGVycykge1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycy5mb3JFYWNoKHdhaXRlciA9PiB3YWl0ZXIuc3RhdGVDaGFuZ2VkKHdhaXRlci5zdGF0ZSkpO1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAobWFpbi5oYXNzICYmIG1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgICAgbWFpbi5fdXBkYXRlSGFzcyh7IHN0YXRlczogbWFpbi5oYXNzLnN0YXRlcyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsUGFydGlhbENhcmRzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdwYXJ0aWFsLWNhcmRzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3BhcnRpYWwtY2FyZHMnKTtcbiAgICAgIGlmICghcGFydGlhbENhcmRzIHx8ICFwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlcikgcmV0dXJuO1xuICAgICAgcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIgPSAoaGFzcywgZW50aXR5SWQpID0+IHtcbiAgICAgICAgaWYgKGhhc3Muc3RhdGVzW2VudGl0eUlkXS5hdHRyaWJ1dGVzLmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBleGNsdWRlcyA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMgJiYgZW50aXR5LmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVFbnRpdHlJZCA9IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSkgcmV0dXJuO1xuICAgICAgICAgICAgZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSA9IGVudGl0eTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy52aWV3KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdFbnRpdGllcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXModmlld0VudGl0aWVzKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICBpZCA9PiB2aWV3RW50aXRpZXNbaWRdLmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZXhjbHVkZXNbaWRdID0gdmlld0VudGl0aWVzW2lkXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIWV4Y2x1ZGVzW2VudGl0eUlkXTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGVsZW1lbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICAgIGlmICgha2xhc3MgfHwgIWtsYXNzLnByb3RvdHlwZSkgcmV0dXJuO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGtsYXNzLnByb3RvdHlwZSwgJ2xvY2FsaXplJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tTG9jYWxpemUodikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVPYmogJiYgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXN0b21Mb2NhbGl6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KCkge30sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgdGhlbWluZyBcInJlZ3VsYXJcIiB0b3AgYmFkZ2VzLlxuICBpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICAgIGlmICghaGFTdGF0ZUxhYmVsQmFkZ2UgfHwgIWhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQpIHJldHVybjtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAgIC8vIFRPRE86IENhbGwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzID0gdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycy5wdXNoKHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdGF0ZS1iYWRnZScpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtYmFkZ2UnKTtcbiAgICAgIGlmICghc3RhdGVCYWRnZSB8fCAhc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlSWNvbkFwcGVhcmFuY2UpIHJldHVybjtcbiAgICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZTtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZSA9IGZ1bmN0aW9uIGN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlKHN0YXRlT2JqKSB7XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kLmljb24uc3R5bGUsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICAgICAgY29sb3I6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuaWNvbl9jb2xvcixcbiAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZS5jYWxsKHRoaXMsIHN0YXRlT2JqKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsSGFBdHRyaWJ1dGVzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdoYS1hdHRyaWJ1dGVzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYUF0dHJpYnV0ZXMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWF0dHJpYnV0ZXMnKTtcbiAgICAgIGlmICghaGFBdHRyaWJ1dGVzIHx8ICFoYUF0dHJpYnV0ZXMucHJvdG90eXBlLmNvbXB1dGVGaWx0ZXJzQXJyYXkgfHxcbiAgICAgICAgICF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYUF0dHJpYnV0ZXMucHJvdG90eXBlLmNvbXB1dGVGaWx0ZXJzQXJyYXkgPVxuICAgICAgICBmdW5jdGlvbiBjdXN0b21Db21wdXRlRmlsdGVyc0FycmF5KGV4dHJhRmlsdGVycykge1xuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykuY29uY2F0KFxuICAgICAgICAgICAgZXh0cmFGaWx0ZXJzID8gZXh0cmFGaWx0ZXJzLnNwbGl0KCcsJykgOiBbXSk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtZm9ybS1jdXN0b21pemUnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhhRm9ybUN1c3RvbWl6ZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtZm9ybS1jdXN0b21pemUnKTtcbiAgICAgIGlmICghaGFGb3JtQ3VzdG9taXplKSB7XG4gICAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFGb3JtQ3VzdG9taXplLCAxMDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAod2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lKSByZXR1cm47XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuaGFGb3JtQ3VzdG9taXplSW5pdERvbmUgPSB0cnVlO1xuXG4gICAgICBpZiAoIXdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCkgcmV0dXJuO1xuICAgICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUpIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSA9XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZShrZXksIHZhbHVlLCBzZWNvbmRhcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2tleV1cbiAgICAgICAgICAgICAgICB8fCB7IHR5cGU6IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbml0T3Blbk9iamVjdChrZXksIGNvbmZpZy50eXBlID09PSAnanNvbicgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZSwgc2Vjb25kYXJ5LCBjb25maWcpO1xuICAgICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucykge1xuICAgICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgICBoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zID1cbiAgICAgICAgICBmdW5jdGlvbiBjdXN0b21nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyhcbiAgICAgICAgICAgIGxvY2FsQXR0cmlidXRlcywgZ2xvYmFsQXR0cmlidXRlcywgZXhpc3RpbmdBdHRyaWJ1dGVzLCBuZXdBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBrbm93bktleXMgPVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmYgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZiAmJiAoIWNvbmYuZG9tYWlucyB8fCAhdGhpcy5lbnRpdHkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZi5kb21haW5zLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbih0aGlzLmVudGl0eSkpKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobG9jYWxBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhnbG9iYWxBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhleGlzdGluZ0F0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKG5ld0F0dHJpYnV0ZXMpKTtcbiAgICAgICAgICAgIHJldHVybiBrbm93bktleXMuc29ydCgpLmNvbmNhdCgnT3RoZXInKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxDbGFzc0hvb2tzKCkge1xuICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5jbGFzc0luaXREb25lID0gdHJ1ZTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFBhcnRpYWxDYXJkcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsU3RhdGVzSG9vaygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlQmFkZ2UoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhQXR0cmlidXRlcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQWN0aW9uTmFtZSgnc3RhdGUtY2FyZC1zY2VuZScpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQWN0aW9uTmFtZSgnc3RhdGUtY2FyZC1zY3JpcHQnKTtcbiAgfSxcblxuICBpbml0KCkge1xuICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuaW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbENsYXNzSG9va3MoKTtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGlmICghbWFpbi5oYXNzIHx8ICFtYWluLmhhc3Muc3RhdGVzKSB7XG4gICAgICAvLyBDb25uZWN0aW9uIHdhc24ndCBtYWRlIHlldC4gVHJ5IGluIDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmluaXQsIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5pdERvbmUgPSB0cnVlO1xuXG4gICAgd2luZG93LmN1c3RvbVVJLnVzZUN1c3RvbWl6ZXIoKTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS5ydW5Ib29rcygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2NhdGlvbi1jaGFuZ2VkJywgd2luZG93LnNldFRpbWVvdXQuYmluZChudWxsLCB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MsIDEwMCkpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBjb25zb2xlLmxvZyhgTG9hZGVkIEN1c3RvbVVJICR7VkVSU0lPTn1gKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBpZiAoIXdpbmRvdy5DVVNUT01fVUlfTElTVCkge1xuICAgICAgd2luZG93LkNVU1RPTV9VSV9MSVNUID0gW107XG4gICAgfVxuICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVC5wdXNoKHtcbiAgICAgIG5hbWU6ICdDdXN0b21VSScsXG4gICAgICB2ZXJzaW9uOiBWRVJTSU9OLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZHJleS1naXQvaG9tZS1hc3Npc3RhbnQtY3VzdG9tLXVpJyxcbiAgICB9KTtcbiAgfSxcblxuICBydW5Ib29rcygpIHtcbiAgICB3aW5kb3cuY3VzdG9tVUkuZml4R3JvdXBUaXRsZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkudXBkYXRlQ29uZmlnUGFuZWwoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSgpO1xuICB9LFxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGEtZGV2aWNlLW5hbWUnKSB8fCAnJztcbiAgfSxcblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hhLWRldmljZS1uYW1lJywgbmFtZSB8fCAnJyk7XG4gIH0sXG5cbiAgY29tcHV0ZVRlbXBsYXRlKHRlbXBsYXRlLCBoYXNzLCBlbnRpdGllcywgZW50aXR5LCBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUsIHN0YXRlKSB7XG4gICAgY29uc3QgZnVuY3Rpb25Cb2R5ID0gKHRlbXBsYXRlLmluZGV4T2YoJ3JldHVybicpID49IDApID8gdGVtcGxhdGUgOiBgcmV0dXJuIFxcYCR7dGVtcGxhdGV9XFxgO2A7XG4gICAgdHJ5IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jICovXG4gICAgICBjb25zdCBmdW5jID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnaGFzcycsICdlbnRpdGllcycsICdlbnRpdHknLCAnYXR0cmlidXRlcycsICdhdHRyaWJ1dGUnLCAnc3RhdGUnLCBmdW5jdGlvbkJvZHkpO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgcmV0dXJuIGZ1bmMoaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgaWYgKChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHx8IGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9IGluIHRlbXBsYXRlICR7ZnVuY3Rpb25Cb2R5fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH0sXG59O1xud2luZG93LmN1c3RvbVVJLmluaXQoKTtcbiIsImV4cG9ydCBkZWZhdWx0ICcyMDE4MDgwNic7XG4iXSwic291cmNlUm9vdCI6IiJ9