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
/*! exports provided: DEFAULT_DOMAIN_ICON, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_MORE_INFO", function() { return DOMAINS_WITH_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_HIDE_MORE_INFO", function() { return DOMAINS_HIDE_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_MORE_INFO_NO_HISTORY", function() { return DOMAINS_MORE_INFO_NO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_OFF", function() { return STATES_OFF; });
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
var DOMAINS_WITH_CARD = ['climate', 'cover', 'configurator', 'input_select', 'input_number', 'input_text', 'lock', 'media_player', 'scene', 'script', 'timer', 'weblink'];

/** Domains with separate more info dialog. */
var DOMAINS_WITH_MORE_INFO = ['alarm_control_panel', 'automation', 'camera', 'climate', 'configurator', 'cover', 'fan', 'group', 'history_graph', 'input_datetime', 'light', 'lock', 'media_player', 'script', 'sun', 'updater', 'vacuum', 'weather'];

/** Domains that show no more info dialog. */
var DOMAINS_HIDE_MORE_INFO = ['input_number', 'input_select', 'input_text', 'scene', 'weblink'];

/** Domains that should have the history hidden in the more info dialog. */
var DOMAINS_MORE_INFO_NO_HISTORY = ['camera', 'configurator', 'history_graph', 'scene'];

/** States that we consider "off". */
var STATES_OFF = ['closed', 'locked', 'off'];

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
  },
  installPartialCards: function installPartialCards() {
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
  },


  // Allows changing the 'Execute' / 'Activate' text on script/scene cards.
  installActionName: function installActionName(elementName) {
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
  },


  // Allows theming "regular" top badges.
  installHaStateLabelBadge: function installHaStateLabelBadge() {
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
  },
  installStateBadge: function installStateBadge() {
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
  },
  installHaAttributes: function installHaAttributes() {
    var haAttributes = customElements.get('ha-attributes');
    if (!haAttributes || !haAttributes.prototype.computeFiltersArray || !window.hassAttributeUtil) return;
    // Use named function to preserve 'this'.
    haAttributes.prototype.computeFiltersArray = function customComputeFiltersArray(extraFilters) {
      return Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).concat(extraFilters ? extraFilters.split(',') : []);
    };
  },
  installHaFormCustomize: function installHaFormCustomize() {
    if (!window.location.pathname.startsWith('/config')) return;
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
/* harmony default export */ __webpack_exports__["default"] = ('20180716');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc3MtYXR0cmlidXRlLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfV0lUSF9NT1JFX0lORk8iLCJET01BSU5TX0hJREVfTU9SRV9JTkZPIiwiRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSIsIlNUQVRFU19PRkYiLCJVTklUX0MiLCJVTklUX0YiLCJERUZBVUxUX1ZJRVdfRU5USVRZX0lEIiwiYXBwbHlUaGVtZXNPbkVsZW1lbnQiLCJlbGVtZW50IiwidGhlbWVzIiwibG9jYWxUaGVtZSIsInVwZGF0ZU1ldGEiLCJfdGhlbWVzIiwidGhlbWVOYW1lIiwiZGVmYXVsdF90aGVtZSIsInN0eWxlcyIsIk9iamVjdCIsImFzc2lnbiIsInRoZW1lIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcmVmaXhlZEtleSIsInVwZGF0ZVN0eWxlcyIsIndpbmRvdyIsIlNoYWR5Q1NTIiwic3R5bGVTdWJ0cmVlIiwibWV0YSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInRoZW1lQ29sb3IiLCJkeW5hbWljQ29udGVudFVwZGF0ZXIiLCJyb290IiwibmV3RWxlbWVudFRhZyIsImF0dHJpYnV0ZXMiLCJyb290RWwiLCJjdXN0b21FbCIsImxhc3RDaGlsZCIsInRhZ05hbWUiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsInNldFByb3BlcnRpZXMiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGQiLCJjYW5Ub2dnbGVEb21haW4iLCJoYXNzIiwiZG9tYWluIiwic2VydmljZXMiLCJjb25maWciLCJjYW5Ub2dnbGVTdGF0ZSIsInN0YXRlT2JqIiwiY29tcHV0ZVN0YXRlRG9tYWluIiwic3RhdGUiLCJzdXBwb3J0ZWRfZmVhdHVyZXMiLCJjb21wdXRlRG9tYWluIiwiZW50aXR5SWQiLCJzdWJzdHIiLCJpbmRleE9mIiwiZW50aXR5X2lkIiwiZ2V0R3JvdXBFbnRpdGllcyIsImVudGl0aWVzIiwiZ3JvdXAiLCJyZXN1bHQiLCJlbnRpdHkiLCJnZXRWaWV3RW50aXRpZXMiLCJ2aWV3Iiwidmlld0VudGl0aWVzIiwiaGlkZGVuIiwiZ3JvdXBFbnRpdGllcyIsImdyRW50aXR5SWQiLCJnckVudGl0eSIsInN0YXRlQ2FyZFR5cGUiLCJpbmNsdWRlcyIsImNvbnRyb2wiLCJoYXNzQXR0cmlidXRlVXRpbCIsIkRPTUFJTl9ERVZJQ0VfQ0xBU1MiLCJiaW5hcnlfc2Vuc29yIiwiY292ZXIiLCJzZW5zb3IiLCJVTktOT1dOX1RZUEUiLCJBRERfVFlQRSIsIlRZUEVfVE9fVEFHIiwic3RyaW5nIiwianNvbiIsImljb24iLCJib29sZWFuIiwiYXJyYXkiLCJMT0dJQ19TVEFURV9BVFRSSUJVVEVTIiwiZW50aXR5X3BpY3R1cmUiLCJ1bmRlZmluZWQiLCJmcmllbmRseV9uYW1lIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiZW11bGF0ZWRfaHVlIiwiZG9tYWlucyIsImVtdWxhdGVkX2h1ZV9uYW1lIiwiaGFhc2thX2hpZGRlbiIsImhhYXNrYV9uYW1lIiwiaG9tZWJyaWRnZV9oaWRkZW4iLCJob21lYnJpZGdlX25hbWUiLCJhdHRyaWJ1dGlvbiIsImN1c3RvbV91aV9tb3JlX2luZm8iLCJjdXN0b21fdWlfc3RhdGVfY2FyZCIsImRldmljZV9jbGFzcyIsIm9wdGlvbnMiLCJhc3N1bWVkX3N0YXRlIiwiaW5pdGlhbF9zdGF0ZSIsInVuaXRfb2ZfbWVhc3VyZW1lbnQiLCJKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5IiwicHJvcCIsIkxpdGVyYWxTdHJpbmciLCJ2YWx1ZSIsInRvU3RyaW5nIiwibGl0ZXJhbFZhbHVlIiwiRXJyb3IiLCJodG1sVmFsdWUiLCJIVE1MVGVtcGxhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaHRtbCIsInN0cmluZ3MiLCJ0ZW1wbGF0ZSIsInZhbHVlcyIsInJlZHVjZSIsImFjYyIsInYiLCJpZHgiLCJodG1sTGl0ZXJhbCIsIkN1aUJhc2VFbGVtZW50IiwiZXh0cmFzIiwiZXh0cmFfZGF0YV90ZW1wbGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImN1c3RvbVVJIiwiY29tcHV0ZVRlbXBsYXRlIiwiZXh0cmEiLCJzdGF0ZXMiLCJmaWx0ZXIiLCJpbkRpYWxvZyIsImxlbmd0aCIsInNob3dfbGFzdF9jaGFuZ2VkIiwiQm9vbGVhbiIsImNvbnRyb2xFbGVtZW50IiwiU3RyaW5nIiwiY29tcHV0ZWQiLCJQb2x5bWVyIiwiRWxlbWVudCIsIkR5bmFtaWNFbGVtZW50IiwiZWxlbWVudE5hbWUiLCJ0b1VwcGVyQ2FzZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiRHluYW1pY1dpdGhFeHRyYSIsIl9hdHRhY2hlZCIsIl9pc0F0dGFjaGVkIiwiYXR0YWNoZWQiLCJleHRyYV9iYWRnZSIsImV4dHJhQmFkZ2VzIiwiZXh0cmFCYWRnZSIsIm1heWJlQ2hhbmdlT2JqZWN0IiwiYXR0cmlidXRlIiwidW5pdCIsImJsYWNrbGlzdCIsImJsYWNrbGlzdF9zdGF0ZXMiLCJzb21lIiwiUmVnRXhwIiwidGVzdCIsIl9lbnRpdHlEaXNwbGF5IiwiZXh0cmFPYmoiLCJleHRyYU9ialZpc2libGUiLCJoaWRlX2NvbnRyb2wiLCJoYUxvY2FsaXplIiwibG9jYWxpemUiLCJjb25maXJtX2NvbnRyb2xzIiwiY29uZmlybV9jb250cm9sc19zaG93X2xvY2siLCJlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwibG9jayIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJhcHBseVRoZW1lcyIsImdldCIsIkhhQ29uZmlnQ3VzdG9tVWkiLCJuYW1lIiwiZ2V0TmFtZSIsInNldE5hbWUiLCJoaXN0b3J5IiwiYmFjayIsImZpcmUiLCJpc1dpZGUiLCJvYnNlcnZlciIsIkV2ZW50c01peGluIiwiSGFUaGVtZWRTbGlkZXIiLCJkaXNhYmxlT2ZmV2hlbk1pbiIsIl9jb21wdXRlQXR0cmlidXRlIiwiY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCIsImRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCIsIl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQiLCJhdHRyIiwiZGVmIiwiaXNPbiIsInRoZW1lZE1pbiIsImV2IiwidGFyZ2V0IiwibWluIiwiTnVtYmVyIiwibWF4IiwicGluIiwibm90aWZ5IiwiX3RoZW1lZE1pbiIsIlNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTIiwiRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUIiwibGlnaHQiLCJjbGltYXRlIiwiVFlQRV9UT19DT05UUk9MIiwidG9nZ2xlIiwiZGlzcGxheSIsIlN0YXRlQ2FyZEN1c3RvbVVpIiwiY29udGFpbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfY29udGFpbmVyIiwic2V0UHJvcGVydHkiLCJpbnB1dENoYW5nZWQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiaWQiLCJjb25zb2xlIiwid2FybiIsImJhZGdlc19saXN0IiwicHVzaCIsInBhcmFtcyIsIndpZHRoIiwiZm9udFNpemUiLCJtb2RpZmllZE9iaiIsInRoZW1lVGFyZ2V0Iiwib2JqIiwic3RhdGVfY2FyZF9tb2RlIiwibWF5YmVIaWRlRW50aXR5IiwiYmFkZ2VNb2RlIiwicmVndWxhck1vZGVfIiwiY2xlYW5CYWRnZVN0eWxlIiwib3JpZ2luYWxTdGF0ZUNhcmRUeXBlIiwiY3VzdG9tU3RhdGVDYXJkVHlwZSIsInNlY29uZGFyeVN0YXRlQ2FyZFR5cGUiLCJzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnkiLCJzbGlkZXJFbGlnaWJsZV8iLCJzZXJ2aWNlTWluIiwic2VydmljZU1heCIsInZhbHVlTmFtZSIsInNldFZhbHVlTmFtZSIsIm5hbWVPbiIsIm1pbl90ZW1wIiwibWF4X3RlbXAiLCJjb250cm9sX2VsZW1lbnQiLCJTdGF0ZUNhcmRXaXRoU2xpZGVyIiwiX29uSXJvblJlc2l6ZSIsImJpbmQiLCJfaXNDb25uZWN0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3dhaXRGb3JMYXlvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3NldE1vZGUiLCJfZnJhbWVJZCIsInJlYWR5VG9Db21wdXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGlkZVNsaWRlciIsIm1vZGUiLCJsaW5lVG9vTG9uZyIsImJyZWFrU2xpZGVyIiwic2hvd1NsaWRlciIsInByZXZCcmVha1NsaWRlciIsInByZXZIaWRlU2xpZGVyIiwiJCIsImNvbnRhaW5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJtaW5MaW5lQnJlYWsiLCJtYXhMaW5lQnJlYWsiLCJjb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdGF0ZUhlaWdodCIsInN0cmV0Y2hTbGlkZXIiLCJwYXJzZUludCIsInBhcmFtIiwiaXNOYU4iLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwiY2FsbFNlcnZpY2UiLCJzbGlkZXJWYWx1ZSIsInN0cmV0Y2hfc2xpZGVyIiwiU3RhdGVDYXJkV2l0aG91dFNsaWRlciIsInN1cGVyQ2xhc3MiLCJkZXRhaWwiLCJldmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjb21wb3NlZCIsIm5vZGUiLCJkaXNwYXRjaEV2ZW50IiwiU1VQUE9SVEVEX1NMSURFUl9NT0RFUyIsImN1c3RvbVVpQXR0cmlidXRlcyIsImRldmljZSIsInRlbXBsYXRlcyIsIl9zdGF0ZURpc3BsYXkiLCJjb25jYXQiLCJzbGlkZXJfdGhlbWUiLCJoaWRlX2luX2RlZmF1bHRfdmlldyIsImljb25fY29sb3IiLCJoYXNzQXR0cmlidXRlc1V0aWwiLCJkb21Ib3N0IiwiZ2V0Um9vdE5vZGUiLCJEb2N1bWVudEZyYWdtZW50IiwiaG9zdCIsImxpZ2h0T3JTaGFkb3ciLCJzZWxlY3RvciIsInNoYWRvd1Jvb3QiLCJnZXRFbGVtZW50SGllcmFyY2h5IiwiaGllcmFyY2h5Iiwic2hpZnQiLCJnZXRDb250ZXh0IiwiX2NvbnRleHQiLCJncm91cEVudGl0eSIsInJldmVyc2UiLCJmaW5kTWF0Y2giLCJmaW5kIiwibWF0Y2giLCJvcHRpb24iLCJtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlIiwiYXBwbHlBdHRyaWJ1dGVzIiwibWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwIiwiY29udGV4dCIsImMiLCJfc2V0S2VlcCIsIl9jdWlfa2VlcCIsIm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiaGFzR2xvYmFsIiwiaGFzQ2hhbmdlcyIsInVudGVtcGxhdGVkX2F0dHJpYnV0ZXMiLCJ1bnRlbXBsYXRlZF9zdGF0ZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInVudGVtcGxhdGVkX3N0YXRlRGlzcGxheSIsIm1heWJlQXBwbHlUZW1wbGF0ZXMiLCJuZXdSZXN1bHQiLCJjaGVja0F0dHJpYnV0ZXMiLCJsYXN0X2NoYW5nZWQiLCJhbGxvd0hpZGRlbiIsImZpeEdyb3VwVGl0bGVzIiwiaG9tZUFzc2lzdGFudE1haW4iLCJoYUNhcmRzIiwibWFpbiIsImNhcmRzIiwiY2FyZCIsIm5hbWVFbGVtIiwidGV4dENvbnRlbnQiLCJjb250cm9sQ29sdW1ucyIsImNvbHVtbnMiLCJwYXJ0aWFsQ2FyZHMiLCJmIiwiaGFuZGxlV2luZG93Q2hhbmdlIiwiX3VwZGF0ZUNvbHVtbnMiLCJtcWxzIiwibXFsIiwicmVtb3ZlTGlzdGVuZXIiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ1c2VDdXN0b21pemVyIiwiY3VzdG9taXplciIsImhpZGVfYXR0cmlidXRlcyIsInVwZGF0ZUNvbmZpZ1BhbmVsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJoYVBhbmVsQ29uZmlnIiwiaGFDb25maWdOYXZpZ2F0aW9uIiwiY3VpUGF0Y2giLCJfb3JpZ2luYWxDb21wdXRlTG9hZGVkIiwiX2NvbXB1dGVMb2FkZWQiLCJfb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiIsIl9jb21wdXRlQ2FwdGlvbiIsIl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiIsIl9jb21wdXRlRGVzY3JpcHRpb24iLCJwYWdlIiwicGFnZXMiLCJjb25mIiwiY2FwdGlvbiIsImxvYWRlZCIsImdldEhhQ29uZmlnQ3VzdG9tVWkiLCJoYUNvbmZpZ0N1c3RvbVVpIiwiaXJvblBhZ2VzIiwibGFzdEVsZW1lbnRDaGlsZCIsInNlbGVjdCIsInZpc2libGUiLCJpbnN0YWxsU3RhdGVzSG9vayIsImhvbWVBc3Npc3RhbnQiLCJfdXBkYXRlSGFzcyIsIm9yaWdpbmFsVXBkYXRlIiwidXBkYXRlIiwibmV3RW50aXR5IiwiX3RoZW1lV2FpdGVycyIsIndhaXRlciIsInN0YXRlQ2hhbmdlZCIsImluc3RhbGxQYXJ0aWFsQ2FyZHMiLCJfZGVmYXVsdFZpZXdGaWx0ZXIiLCJleGNsdWRlcyIsImV4Y2x1ZGVFbnRpdHlJZCIsImluc3RhbGxBY3Rpb25OYW1lIiwia2xhc3MiLCJkZWZpbmVQcm9wZXJ0eSIsImN1c3RvbUxvY2FsaXplIiwiYWN0aW9uX25hbWUiLCJfX2RhdGEiLCJzZXQiLCJpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UiLCJoYVN0YXRlTGFiZWxCYWRnZSIsInN0YXJ0SW50ZXJ2YWwiLCJpbnN0YWxsU3RhdGVCYWRnZSIsInN0YXRlQmFkZ2UiLCJ1cGRhdGVJY29uQXBwZWFyYW5jZSIsIm9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZSIsImJhY2tncm91bmRJbWFnZSIsImNvbG9yIiwiaW5zdGFsbEhhQXR0cmlidXRlcyIsImhhQXR0cmlidXRlcyIsImNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJjdXN0b21Db21wdXRlRmlsdGVyc0FycmF5IiwiZXh0cmFGaWx0ZXJzIiwic3BsaXQiLCJpbnN0YWxsSGFGb3JtQ3VzdG9taXplIiwiaGFGb3JtQ3VzdG9taXplIiwiaGFGb3JtQ3VzdG9taXplSW5pdERvbmUiLCJfY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsImN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUiLCJzZWNvbmRhcnkiLCJfaW5pdE9wZW5PYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMiLCJjdXN0b21nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImxvY2FsQXR0cmlidXRlcyIsImdsb2JhbEF0dHJpYnV0ZXMiLCJleGlzdGluZ0F0dHJpYnV0ZXMiLCJrbm93bktleXMiLCJmaWx0ZXJGcm9tQXR0cmlidXRlcyIsInNvcnQiLCJpbnN0YWxsQ2xhc3NIb29rcyIsImNsYXNzSW5pdERvbmUiLCJpbml0IiwiaW5pdERvbmUiLCJydW5Ib29rcyIsImxvZyIsIkNVU1RPTV9VSV9MSVNUIiwidmVyc2lvbiIsInVybCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiZnVuY3Rpb25Cb2R5IiwiZnVuYyIsIkZ1bmN0aW9uIiwiU3ludGF4RXJyb3IiLCJSZWZlcmVuY2VFcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ08sSUFBTUEsc0JBQXNCLGVBQTVCOztBQUVQO0FBQ08sSUFBTUMsb0JBQW9CLENBQy9CLFNBRCtCLEVBRS9CLE9BRitCLEVBRy9CLGNBSCtCLEVBSS9CLGNBSitCLEVBSy9CLGNBTCtCLEVBTS9CLFlBTitCLEVBTy9CLE1BUCtCLEVBUS9CLGNBUitCLEVBUy9CLE9BVCtCLEVBVS9CLFFBVitCLEVBVy9CLE9BWCtCLEVBWS9CLFNBWitCLENBQTFCOztBQWVQO0FBQ08sSUFBTUMseUJBQXlCLENBQ3BDLHFCQURvQyxFQUVwQyxZQUZvQyxFQUdwQyxRQUhvQyxFQUlwQyxTQUpvQyxFQUtw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QyxnQkFBMkRBLFFBQTNELE9BQXJCO0FBQ0EsUUFBSTtBQUNGO0FBQ0EsVUFBTTBWLE9BQU8sSUFBSUMsUUFBSixDQUNYLE1BRFcsRUFDSCxVQURHLEVBQ1MsUUFEVCxFQUNtQixZQURuQixFQUNpQyxXQURqQyxFQUM4QyxPQUQ5QyxFQUN1REYsWUFEdkQsQ0FBYjtBQUVBO0FBQ0EsYUFBT0MsS0FBS3JhLElBQUwsRUFBV2UsUUFBWCxFQUFxQkcsTUFBckIsRUFBNkI5QixVQUE3QixFQUF5QytILFNBQXpDLEVBQW9ENUcsS0FBcEQsQ0FBUDtBQUNELEtBTkQsQ0FNRSxPQUFPMkgsQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxVQUFLQSxhQUFhcVMsV0FBZCxJQUE4QnJTLGFBQWFzUyxjQUEvQyxFQUErRDtBQUM3RDlPLGdCQUFRQyxJQUFSLENBQWdCekQsRUFBRVksSUFBbEIsVUFBMkJaLEVBQUV1UyxPQUE3QixxQkFBb0RMLFlBQXBEO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBLFlBQU1sUyxDQUFOO0FBQ0Q7QUFDRjtBQW5sQmtDLENBQXJDO0FBcWxCQTNKLE9BQU9pSCxRQUFQLENBQWdCa1UsSUFBaEIsRzs7Ozs7Ozs7Ozs7OztBQzdsQkEsK0RBQWUsVUFBZixFIiwiZmlsZSI6InNjcmlwdHMtZGJnLWVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9zY3JpcHRzLmpzXCIpO1xuIiwiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9ICdoYXNzOmJvb2ttYXJrJztcblxuLyoqIERvbWFpbnMgdGhhdCBoYXZlIGEgc3RhdGUgY2FyZC4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfQ0FSRCA9IFtcbiAgJ2NsaW1hdGUnLFxuICAnY292ZXInLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2lucHV0X3NlbGVjdCcsXG4gICdpbnB1dF9udW1iZXInLFxuICAnaW5wdXRfdGV4dCcsXG4gICdsb2NrJyxcbiAgJ21lZGlhX3BsYXllcicsXG4gICdzY2VuZScsXG4gICdzY3JpcHQnLFxuICAndGltZXInLFxuICAnd2VibGluaycsXG5dO1xuXG4vKiogRG9tYWlucyB3aXRoIHNlcGFyYXRlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX01PUkVfSU5GTyA9IFtcbiAgJ2FsYXJtX2NvbnRyb2xfcGFuZWwnLFxuICAnYXV0b21hdGlvbicsXG4gICdjYW1lcmEnLFxuICAnY2xpbWF0ZScsXG4gICdjb25maWd1cmF0b3InLFxuICAnY292ZXInLFxuICAnZmFuJyxcbiAgJ2dyb3VwJyxcbiAgJ2hpc3RvcnlfZ3JhcGgnLFxuICAnaW5wdXRfZGF0ZXRpbWUnLFxuICAnbGlnaHQnLFxuICAnbG9jaycsXG4gICdtZWRpYV9wbGF5ZXInLFxuICAnc2NyaXB0JyxcbiAgJ3N1bicsXG4gICd1cGRhdGVyJyxcbiAgJ3ZhY3V1bScsXG4gICd3ZWF0aGVyJ1xuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG93IG5vIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19ISURFX01PUkVfSU5GTyA9IFtcbiAgJ2lucHV0X251bWJlcicsXG4gICdpbnB1dF9zZWxlY3QnLFxuICAnaW5wdXRfdGV4dCcsXG4gICdzY2VuZScsXG4gICd3ZWJsaW5rJ1xuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG91bGQgaGF2ZSB0aGUgaGlzdG9yeSBoaWRkZW4gaW4gdGhlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSA9IFtcbiAgJ2NhbWVyYScsXG4gICdjb25maWd1cmF0b3InLFxuICAnaGlzdG9yeV9ncmFwaCcsXG4gICdzY2VuZScsXG5dO1xuXG4vKiogU3RhdGVzIHRoYXQgd2UgY29uc2lkZXIgXCJvZmZcIi4gKi9cbmV4cG9ydCBjb25zdCBTVEFURVNfT0ZGID0gW1xuICAnY2xvc2VkJyxcbiAgJ2xvY2tlZCcsXG4gICdvZmYnXG5dO1xuXG4vKiogVGVtcGVyYXR1cmUgdW5pdHMuICovXG5leHBvcnQgY29uc3QgVU5JVF9DID0gJ8KwQyc7XG5leHBvcnQgY29uc3QgVU5JVF9GID0gJ8KwRic7XG5cbi8qKiBFbnRpdHkgSUQgb2YgdGhlIGRlZmF1bHQgdmlldy4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1ZJRVdfRU5USVRZX0lEID0gJ2dyb3VwLmRlZmF1bHRfdmlldyc7XG4iLCIvKipcbiAqIEFwcGx5IGEgdGhlbWUgdG8gYW4gZWxlbWVudCBieSBzZXR0aW5nIHRoZSBDU1MgdmFyaWFibGVzIG9uIGl0LlxuICpcbiAqIGVsZW1lbnQ6IEVsZW1lbnQgdG8gYXBwbHkgdGhlbWUgb24uXG4gKiB0aGVtZXM6IEhBU1MgVGhlbWUgaW5mb3JtYXRpb25cbiAqIGxvY2FsVGhlbWU6IHNlbGVjdGVkIHRoZW1lLlxuICogdXBkYXRlTWV0YTogYm9vbGVhbiBpZiB3ZSBzaG91bGQgdXBkYXRlIHRoZSB0aGVtZS1jb2xvciBtZXRhIGVsZW1lbnQuXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlUaGVtZXNPbkVsZW1lbnQoZWxlbWVudCwgdGhlbWVzLCBsb2NhbFRoZW1lLCB1cGRhdGVNZXRhID0gZmFsc2UpIHtcbiAgaWYgKCFlbGVtZW50Ll90aGVtZXMpIHtcbiAgICBlbGVtZW50Ll90aGVtZXMgPSB7fTtcbiAgfVxuICBsZXQgdGhlbWVOYW1lID0gdGhlbWVzLmRlZmF1bHRfdGhlbWU7XG4gIGlmIChsb2NhbFRoZW1lID09PSAnZGVmYXVsdCcgfHwgKGxvY2FsVGhlbWUgJiYgdGhlbWVzLnRoZW1lc1tsb2NhbFRoZW1lXSkpIHtcbiAgICB0aGVtZU5hbWUgPSBsb2NhbFRoZW1lO1xuICB9XG4gIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnQuX3RoZW1lcyk7XG4gIGlmICh0aGVtZU5hbWUgIT09ICdkZWZhdWx0Jykge1xuICAgIHZhciB0aGVtZSA9IHRoZW1lcy50aGVtZXNbdGhlbWVOYW1lXTtcbiAgICBPYmplY3Qua2V5cyh0aGVtZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB2YXIgcHJlZml4ZWRLZXkgPSAnLS0nICsga2V5O1xuICAgICAgZWxlbWVudC5fdGhlbWVzW3ByZWZpeGVkS2V5XSA9ICcnO1xuICAgICAgc3R5bGVzW3ByZWZpeGVkS2V5XSA9IHRoZW1lW2tleV07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGVsZW1lbnQudXBkYXRlU3R5bGVzKSB7XG4gICAgZWxlbWVudC51cGRhdGVTdHlsZXMoc3R5bGVzKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuU2hhZHlDU1MpIHtcbiAgICAvLyBpbXBsZW1lbnQgdXBkYXRlU3R5bGVzKCkgbWV0aG9kIG9mIFBvbGVtZXIgZWxlbWVudHNcbiAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVTdWJ0cmVlKC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyhlbGVtZW50KSwgc3R5bGVzKTtcbiAgfVxuXG4gIGlmICghdXBkYXRlTWV0YSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dGhlbWUtY29sb3JdJyk7XG4gIGlmIChtZXRhKSB7XG4gICAgaWYgKCFtZXRhLmhhc0F0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JykpIHtcbiAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnLCBtZXRhLmdldEF0dHJpYnV0ZSgnY29udGVudCcpKTtcbiAgICB9XG4gICAgY29uc3QgdGhlbWVDb2xvciA9IHN0eWxlc1snLS1wcmltYXJ5LWNvbG9yJ10gfHwgbWV0YS5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpO1xuICAgIG1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywgdGhlbWVDb2xvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVXBkYXRlIHJvb3QncyBjaGlsZCBlbGVtZW50IHRvIGJlIG5ld0VsZW1lbnRUYWcgcmVwbGFjaW5nIGFub3RoZXIgZXhpc3RpbmcgY2hpbGQgaWYgYW55LlxuICogQ29weSBhdHRyaWJ1dGVzIGludG8gdGhlIGNoaWxkIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWNDb250ZW50VXBkYXRlcihyb290LCBuZXdFbGVtZW50VGFnLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IHJvb3RFbCA9IHJvb3Q7XG4gIGxldCBjdXN0b21FbDtcblxuICBpZiAocm9vdEVsLmxhc3RDaGlsZCAmJiByb290RWwubGFzdENoaWxkLnRhZ05hbWUgPT09IG5ld0VsZW1lbnRUYWcpIHtcbiAgICBjdXN0b21FbCA9IHJvb3RFbC5sYXN0Q2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChyb290RWwubGFzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRpbmcgYW4gZWxlbWVudCB3aXRoIHVwcGVyIGNhc2Ugd29ya3MgZmluZSBpbiBDaHJvbWUsIGJ1dCBpbiBGRiBpdCBkb2Vzbid0IGltbWVkaWF0ZWx5XG4gICAgLy8gYmVjb21lIGEgZGVmaW5lZCBDdXN0b20gRWxlbWVudC4gUG9seW1lciBkb2VzIHRoYXQgaW4gc29tZSBsYXRlciBwYXNzLlxuICAgIGN1c3RvbUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuZXdFbGVtZW50VGFnLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnNldFByb3BlcnRpZXMpIHtcbiAgICBjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKGF0dHJpYnV0ZXMpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGN1c3RvbSBlbGVtZW50IGRlZmluaXRpb24gd2Fzbid0IGxvYWRlZCB5ZXQgLSBzZXRQcm9wZXJ0aWVzIHdvdWxkIGJlXG4gICAgLy8gbWlzc2luZywgYnV0IG5vIGhhcm0gaW4gc2V0dGluZyBhdHRyaWJ1dGVzIG9uZS1ieS1vbmUgdGhlbi5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGN1c3RvbUVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjdXN0b21FbCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZURvbWFpbihoYXNzLCBkb21haW4pIHtcbiAgY29uc3Qgc2VydmljZXMgPSBoYXNzLmNvbmZpZy5zZXJ2aWNlc1tkb21haW5dO1xuICBpZiAoIXNlcnZpY2VzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChkb21haW4gPT09ICdsb2NrJykge1xuICAgIHJldHVybiAnbG9jaycgaW4gc2VydmljZXM7XG4gIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY292ZXInKSB7XG4gICAgcmV0dXJuICdvcGVuX2NvdmVyJyBpbiBzZXJ2aWNlcztcbiAgfVxuICByZXR1cm4gJ3R1cm5fb24nIGluIHNlcnZpY2VzO1xufVxuIiwiaW1wb3J0IGNhblRvZ2dsZURvbWFpbiBmcm9tICcuL2Nhbl90b2dnbGVfZG9tYWluLmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICByZXR1cm4gc3RhdGVPYmouc3RhdGUgPT09ICdvbicgfHwgc3RhdGVPYmouc3RhdGUgPT09ICdvZmYnO1xuICB9XG4gIGlmIChkb21haW4gPT09ICdjbGltYXRlJykge1xuICAgIHJldHVybiAhISgoc3RhdGVPYmouYXR0cmlidXRlcyB8fCB7fSkuc3VwcG9ydGVkX2ZlYXR1cmVzICYgNDA5Nik7XG4gIH1cblxuICByZXR1cm4gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlRG9tYWluKGVudGl0eUlkKSB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoMCwgZW50aXR5SWQuaW5kZXhPZignLicpKTtcbn1cbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9kb21haW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopIHtcbiAgcmV0dXJuIGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGdyb3VwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgcmVzdWx0W2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldEdyb3VwRW50aXRpZXMgZnJvbSAnLi9nZXRfZ3JvdXBfZW50aXRpZXMuanMnO1xuXG4vLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGVudGl0aWVzIHRoYXQgdGhlIHZpZXcgd2lsbCBzaG93XG4vLyBpbmNsdWRpbmcgZW1iZWRkZWQgZ3JvdXBzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld0VudGl0aWVzKGVudGl0aWVzLCB2aWV3KSB7XG4gIGNvbnN0IHZpZXdFbnRpdGllcyA9IHt9O1xuXG4gIHZpZXcuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5ICYmICFlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgIHZpZXdFbnRpdGllc1tlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcblxuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09ICdncm91cCcpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbnRpdGllcyA9IGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGVudGl0eSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBFbnRpdGllcykuZm9yRWFjaCgoZ3JFbnRpdHlJZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyRW50aXR5ID0gZ3JvdXBFbnRpdGllc1tnckVudGl0eUlkXTtcblxuICAgICAgICAgIGlmICghZ3JFbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgICAgICAgIHZpZXdFbnRpdGllc1tnckVudGl0eUlkXSA9IGdyRW50aXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmlld0VudGl0aWVzO1xufVxuIiwiaW1wb3J0IGNhblRvZ2dsZVN0YXRlIGZyb20gJy4vY2FuX3RvZ2dsZV9zdGF0ZS5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IHsgRE9NQUlOU19XSVRIX0NBUkQgfSBmcm9tICcuLi9jb25zdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlQ2FyZFR5cGUoaGFzcywgc3RhdGVPYmopIHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgcmV0dXJuICdkaXNwbGF5JztcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9DQVJELmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICByZXR1cm4gZG9tYWluO1xuICB9IGVsc2UgaWYgKGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSAmJlxuICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbCAhPT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gJ3RvZ2dsZSc7XG4gIH1cbiAgcmV0dXJuICdkaXNwbGF5Jztcbn1cbiIsImNvbnN0IGhhc3NBdHRyaWJ1dGVVdGlsID0ge307XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IFtcbiAgICAnYmF0dGVyeScsXG4gICAgJ2NvbGQnLFxuICAgICdjb25uZWN0aXZpdHknLFxuICAgICdkb29yJyxcbiAgICAnZ2FyYWdlX2Rvb3InLFxuICAgICdnYXMnLFxuICAgICdoZWF0JyxcbiAgICAnbGlnaHQnLFxuICAgICdsb2NrJyxcbiAgICAnbW9pc3R1cmUnLFxuICAgICdtb3Rpb24nLFxuICAgICdtb3ZpbmcnLFxuICAgICdvY2N1cGFuY3knLFxuICAgICdvcGVuaW5nJyxcbiAgICAncGx1ZycsXG4gICAgJ3Bvd2VyJyxcbiAgICAncHJlc2VuY2UnLFxuICAgICdwcm9ibGVtJyxcbiAgICAnc2FmZXR5JyxcbiAgICAnc21va2UnLFxuICAgICdzb3VuZCcsXG4gICAgJ3ZpYnJhdGlvbicsXG4gICAgJ3dpbmRvdydcbiAgXSxcbiAgY292ZXI6IFsnZ2FyYWdlJ10sXG4gIHNlbnNvcjogW1xuICAgICdiYXR0ZXJ5JyxcbiAgICAnaHVtaWRpdHknLFxuICAgICdpbGx1bWluYW5jZScsXG4gICAgJ3RlbXBlcmF0dXJlJ1xuICBdLFxufTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gJ2pzb24nO1xuaGFzc0F0dHJpYnV0ZVV0aWwuQUREX1RZUEUgPSAna2V5LXZhbHVlJztcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUcgPSB7XG4gIHN0cmluZzogJ2hhLWN1c3RvbWl6ZS1zdHJpbmcnLFxuICBqc29uOiAnaGEtY3VzdG9taXplLXN0cmluZycsXG4gIGljb246ICdoYS1jdXN0b21pemUtaWNvbicsXG4gIGJvb2xlYW46ICdoYS1jdXN0b21pemUtYm9vbGVhbicsXG4gIGFycmF5OiAnaGEtY3VzdG9taXplLWFycmF5JyxcbiAgJ2tleS12YWx1ZSc6ICdoYS1jdXN0b21pemUta2V5LXZhbHVlJyxcbn07XG5cbi8vIEF0dHJpYnV0ZXMgaGVyZSBzZXJ2ZSBkdWFsIHB1cnBvc2U6XG4vLyAxKSBBbnkga2V5IG9mIHRoaXMgb2JqZWN0IHdvbid0IGJlIHNob3duIGluIG1vcmUtaW5mbyB3aW5kb3cuXG4vLyAyKSBBbnkga2V5IHdoaWNoIGhhcyB2YWx1ZSBvdGhlciB0aGFuIHVuZGVmaW5lZCB3aWxsIGFwcGVhciBpbiBjdXN0b21pemF0aW9uXG4vLyAgICBjb25maWcgYWNjb3JkaW5nIHRvIGl0cyB2YWx1ZS5cbmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPVxuICBoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTIHx8IHtcbiAgICBlbnRpdHlfcGljdHVyZTogdW5kZWZpbmVkLFxuICAgIGZyaWVuZGx5X25hbWU6IHsgdHlwZTogJ3N0cmluZycsIGRlc2NyaXB0aW9uOiAnTmFtZScgfSxcbiAgICBpY29uOiB7IHR5cGU6ICdpY29uJyB9LFxuICAgIGVtdWxhdGVkX2h1ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZG9tYWluczogWydlbXVsYXRlZF9odWUnXVxuICAgIH0sXG4gICAgZW11bGF0ZWRfaHVlX25hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZG9tYWluczogWydlbXVsYXRlZF9odWUnXVxuICAgIH0sXG4gICAgaGFhc2thX2hpZGRlbjogdW5kZWZpbmVkLFxuICAgIGhhYXNrYV9uYW1lOiB1bmRlZmluZWQsXG4gICAgaG9tZWJyaWRnZV9oaWRkZW46IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgaG9tZWJyaWRnZV9uYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiB1bmRlZmluZWQsXG4gICAgYXR0cmlidXRpb246IHVuZGVmaW5lZCxcbiAgICBjdXN0b21fdWlfbW9yZV9pbmZvOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICBkZXZpY2VfY2xhc3M6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBvcHRpb25zOiBoYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTLFxuICAgICAgZGVzY3JpcHRpb246ICdEZXZpY2UgY2xhc3MnLFxuICAgICAgZG9tYWluczogWydiaW5hcnlfc2Vuc29yJywgJ2NvdmVyJywgJ3NlbnNvciddXG4gICAgfSxcbiAgICBoaWRkZW46IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjcmlwdGlvbjogJ0hpZGUgZnJvbSBVSScgfSxcbiAgICBhc3N1bWVkX3N0YXRlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkb21haW5zOiBbJ3N3aXRjaCcsICdsaWdodCcsICdjb3ZlcicsICdjbGltYXRlJywgJ2ZhbicsICdncm91cCddXG4gICAgfSxcbiAgICBpbml0aWFsX3N0YXRlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRvbWFpbnM6IFsnYXV0b21hdGlvbiddXG4gICAgfSxcbiAgICB1bml0X29mX21lYXN1cmVtZW50OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGhhc3NBdHRyaWJ1dGVVdGlsO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSBmdW5jdGlvbihwcm9wKSB7IHJldHVybiBwcm9wOyB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi9ib290LmpzJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzdGF0aWMgc3RyaW5nIHZhbHVlIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGZpbHRlclxuICogc3RyaW5ncyBieSBhc3NldGluZyB0aGF0IHRoZXkgaGF2ZSBiZWVuIGNyZWF0ZWQgdmlhIHRoaXMgY2xhc3MuIFRoZVxuICogYHZhbHVlYCBwcm9wZXJ0eSByZXR1cm5zIHRoZSBzdHJpbmcgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuY2xhc3MgTGl0ZXJhbFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZykge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMudmFsdWUgPSBzdHJpbmcudG9TdHJpbmcoKTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBMaXRlcmFsU3RyaW5nIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBsaXRlcmFsVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFMaXRlcmFsU3RyaW5nfSAqLyh2YWx1ZSkudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLWxpdGVyYWwgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sTGl0ZXJhbCBmdW5jdGlvbjogJHt2YWx1ZX1gXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGh0bWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnQgfSAqLyh2YWx1ZSkuaW5uZXJIVE1MO1xuICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiBsaXRlcmFsVmFsdWUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi10ZW1wbGF0ZSB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWwgZnVuY3Rpb246ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHRlbXBsYXRlIGxpdGVyYWwgdGFnIHRoYXQgY3JlYXRlcyBhbiBIVE1MIDx0ZW1wbGF0ZT4gZWxlbWVudCBmcm9tIHRoZVxuICogY29udGVudHMgb2YgdGhlIHN0cmluZy5cbiAqXG4gKiBUaGlzIGFsbG93cyB5b3UgdG8gd3JpdGUgYSBQb2x5bWVyIFRlbXBsYXRlIGluIEphdmFTY3JpcHQuXG4gKlxuICogVGVtcGxhdGVzIGNhbiBiZSBjb21wb3NlZCBieSBpbnRlcnBvbGF0aW5nIGBIVE1MVGVtcGxhdGVFbGVtZW50YHMgaW5cbiAqIGV4cHJlc3Npb25zIGluIHRoZSBKYXZhU2NyaXB0IHRlbXBsYXRlIGxpdGVyYWwuIFRoZSBuZXN0ZWQgdGVtcGxhdGUnc1xuICogYGlubmVySFRNTGAgaXMgaW5jbHVkZWQgaW4gdGhlIGNvbnRhaW5pbmcgdGVtcGxhdGUuICBUaGUgb25seSBvdGhlclxuICogdmFsdWVzIGFsbG93ZWQgaW4gZXhwcmVzc2lvbnMgYXJlIHRob3NlIHJldHVybmVkIGZyb20gYGh0bWxMaXRlcmFsYFxuICogd2hpY2ggZW5zdXJlcyBvbmx5IGxpdGVyYWwgdmFsdWVzIGZyb20gSlMgc291cmNlIGV2ZXIgcmVhY2ggdGhlIEhUTUwsIHRvXG4gKiBndWFyZCBhZ2FpbnN0IFhTUyByaXNrcy5cbiAqXG4gKiBBbGwgb3RoZXIgdmFsdWVzIGFyZSBkaXNhbGxvd2VkIGluIGV4cHJlc3Npb25zIHRvIGhlbHAgcHJldmVudCBYU1NcbiAqIGF0dGFja3M7IGhvd2V2ZXIsIGBodG1sTGl0ZXJhbGAgY2FuIGJlIHVzZWQgdG8gY29tcG9zZSBzdGF0aWNcbiAqIHN0cmluZyB2YWx1ZXMgaW50byB0ZW1wbGF0ZXMuIFRoaXMgaXMgdXNlZnVsIHRvIGNvbXBvc2Ugc3RyaW5ncyBpbnRvXG4gKiBwbGFjZXMgdGhhdCBkbyBub3QgYWNjZXB0IGh0bWwsIGxpa2UgdGhlIGNzcyB0ZXh0IG9mIGEgYHN0eWxlYFxuICogZWxlbWVudC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT46aG9zdHsgY29udGVudDpcIi4uLlwiIH08L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3RoaXMucGFydGlhbFRlbXBsYXRlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBwYXJ0aWFsVGVtcGxhdGUoKSB7IHJldHVybiBodG1sYDxzcGFuPlBhcnRpYWwhPC9zcGFuPmA7IH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFIVE1MVGVtcGxhdGVFbGVtZW50fSBDb25zdHJ1Y3RlZCBIVE1MVGVtcGxhdGVFbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gZnVuY3Rpb24gaHRtbChzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBodG1sVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgcmV0dXJuIHRlbXBsYXRlO1xufTtcblxuLyoqXG4gKiBBbiBodG1sIGxpdGVyYWwgdGFnIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgaHRtbGAgdG8gY29tcG9zZS5cbiAqIGEgbGl0ZXJhbCBzdHJpbmcuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+XG4gKiAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuICogICAgICAgICAgICR7dGhpcy5zdHlsZVRlbXBsYXRlKCl9XG4gKiAgICAgICAgIDwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7c3RhdGljVmFsdWV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XG4gKiAgICAgICAgcmV0dXJuIGh0bWxMaXRlcmFsYC5zaGFkb3dlZCB7IGJhY2tncm91bmQ6IGdyYXk7IH1gO1xuICogICAgIH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFMaXRlcmFsU3RyaW5nfSBDb25zdHJ1Y3RlZCBsaXRlcmFsIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgaHRtbExpdGVyYWwgPSBmdW5jdGlvbihzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBMaXRlcmFsU3RyaW5nKHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgbGl0ZXJhbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSkpO1xufTtcbiIsImltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEN1aUJhc2VFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICBleHRyYToge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaikge1xuICAgIGxldCBleHRyYXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2RhdGFfdGVtcGxhdGU7XG4gICAgaWYgKGV4dHJhcykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dHJhcykpIHtcbiAgICAgICAgZXh0cmFzID0gW2V4dHJhc107XG4gICAgICB9XG4gICAgICByZXR1cm4gZXh0cmFzLm1hcChleHRyYSA9PiB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICBleHRyYSxcbiAgICAgICAgaGFzcyxcbiAgICAgICAgaGFzcy5zdGF0ZXMsXG4gICAgICAgIHN0YXRlT2JqLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgICAvKiBhdHRyaWJ1dGU9ICovIHVuZGVmaW5lZCxcbiAgICAgICAgc3RhdGVPYmouc3RhdGUsXG4gICAgICApKS5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdCAhPT0gbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHNob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZXh0cmEubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICEhc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZDtcbiAgfVxuXG4gIGhhc0V4dHJhKGV4dHJhKSB7XG4gICAgcmV0dXJuIGV4dHJhLmxlbmd0aCA+IDA7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEN1aUJhc2VFbGVtZW50O1xuIiwiaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBEeW5hbWljRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGVsZW1lbnROYW1lOiBTdHJpbmcsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpJyxcbiAgICBdO1xuICB9XG5cbiAgb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpIHtcbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgZWxlbWVudE5hbWUgPyBlbGVtZW50TmFtZS50b1VwcGVyQ2FzZSgpIDogJ0RJVicsXG4gICAgICB7IGhhc3MsIHN0YXRlT2JqLCBpbkRpYWxvZyB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLWVsZW1lbnQnLCBEeW5hbWljRWxlbWVudCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuXG5pbXBvcnQgJy4vZHluYW1pYy1lbGVtZW50LmpzJztcbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIER5bmFtaWNXaXRoRXh0cmEgZXh0ZW5kcyBjdXN0b21FbGVtZW50cy5nZXQoJ3N0YXRlLWNhcmQtZGlzcGxheScpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1mbGV4LWZhY3RvcnNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgLmNvbnRyb2wtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogLTRweCAtMTZweCAtNHB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgfVxuICAgICAgaGEtc3RhdGUtbGFiZWwtYmFkZ2Uge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgICAgZHluYW1pYy1lbGVtZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgI292ZXJsYXkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgICAjbG9jayB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgIH1cbiAgICAgICNsb2NrLmhhLWNvdmVyLWNvbnRyb2xzIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5leHRyYSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLXNpemU6IDM2cHg7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBjbGFzcyQ9J1tbZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpXV0gaG9yaXpvbnRhbCBsYXlvdXQnPlxuICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2V4dHJhT2JqVmlzaWJsZV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0J1xuICAgICAgICAgICAgICAgICAgaXRlbXM9J1tbZXh0cmFPYmpdXSdcbiAgICAgICAgICAgICAgICAgIG9uLWRvbS1jaGFuZ2U9J2V4dHJhRG9tQ2hhbmdlZCc+XG4gICAgICAgICAgPGhhLXN0YXRlLWxhYmVsLWJhZGdlIGhhc3M9J1tbaGFzc11dJyBzdGF0ZT0nW1tpdGVtXV0nPjwvaGEtc3RhdGUtbGFiZWwtYmFkZ2U+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW19zaG93Q29udHJvbChpbkRpYWxvZywgc3RhdGVPYmopXV0nPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGR5bmFtaWMtZWxlbWVudFxuICAgICAgICAgICAgICAgIGNsYXNzPSdmbGV4J1xuICAgICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICAgICAgZWxlbWVudC1uYW1lPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgICAgPC9keW5hbWljLWVsZW1lbnQ+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopXV0nPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwib3ZlcmxheVwiIG9uLWNsaWNrPSdjbGlja0hhbmRsZXInPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrXV0nPlxuICAgICAgICAgICAgICAgICAgPGlyb24taWNvbiBpZD1cImxvY2tcIiBjbGFzcyQ9XCJbW2NvbnRyb2xFbGVtZW50XV1cIiBpY29uPVwibWRpOmxvY2stb3V0bGluZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbWyFjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0ZSc+W1tjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgIGV4dHJhT2JqOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgX2F0dGFjaGVkKScsXG4gICAgICB9LFxuICAgICAgX2F0dGFjaGVkOiBCb29sZWFuLFxuICAgICAgZXh0cmFPYmpWaXNpYmxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhVmlzaWJsZShleHRyYU9iaiwgaW5EaWFsb2cpJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIGF0dGFjaGVkKSB7XG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlIHx8ICFhdHRhY2hlZCkgcmV0dXJuIFtdO1xuICAgIGxldCBleHRyYUJhZGdlcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfYmFkZ2U7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dHJhQmFkZ2VzKSkge1xuICAgICAgZXh0cmFCYWRnZXMgPSBbZXh0cmFCYWRnZXNdO1xuICAgIH1cbiAgICByZXR1cm4gZXh0cmFCYWRnZXMubWFwKChleHRyYUJhZGdlKSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgIGlmIChleHRyYUJhZGdlLmVudGl0eV9pZCAmJiBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0pIHtcbiAgICAgICAgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgIHRoaXMsIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSwgdGhpcy5pbkRpYWxvZyxcbiAgICAgICAgICAvKiBhbGxvd0hpZGRlbj0gKi9mYWxzZSkpO1xuICAgICAgfSBlbHNlIGlmIChleHRyYUJhZGdlLmF0dHJpYnV0ZSAmJlxuICAgICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBzdGF0ZTogU3RyaW5nKHN0YXRlT2JqLmF0dHJpYnV0ZXNbZXh0cmFCYWRnZS5hdHRyaWJ1dGVdKSxcbiAgICAgICAgICBlbnRpdHlfaWQ6ICdub25lLm5vbmUnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgdW5pdF9vZl9tZWFzdXJlbWVudDogZXh0cmFCYWRnZS51bml0IH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgICBsZXQgYmxhY2tsaXN0ID0gZXh0cmFCYWRnZS5ibGFja2xpc3Rfc3RhdGVzO1xuICAgICAgaWYgKGJsYWNrbGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShibGFja2xpc3QpKSB7XG4gICAgICAgICAgYmxhY2tsaXN0ID0gW2JsYWNrbGlzdF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsYWNrbGlzdC5zb21lKHYgPT4gUmVnRXhwKHYpLnRlc3QocmVzdWx0LnN0YXRlLnRvU3RyaW5nKCkpKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQuX2VudGl0eURpc3BsYXkgPSAnJztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSkuZmlsdGVyKGV4dHJhQmFkZ2UgPT4gZXh0cmFCYWRnZSAhPSBudWxsKTtcbiAgfVxuXG4gIGNvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nIHx8ICFleHRyYU9iaikgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBleHRyYU9iai5sZW5ndGggIT09IDA7XG4gIH1cblxuICBleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSkge1xuICAgIHJldHVybiBleHRyYU9ialZpc2libGUgPyAnZXh0cmEnIDogJyc7XG4gIH1cblxuICBfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gIXN0YXRlT2JqLmF0dHJpYnV0ZXMuaGlkZV9jb250cm9sO1xuICB9XG5cbiAgY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaikge1xuICAgIC8vIGhhTG9jYWxpemUgcmVtb3ZlZCBpbiAwLjYxXG4gICAgcmV0dXJuIHN1cGVyLmNvbXB1dGVTdGF0ZURpc3BsYXkodGhpcy5oYUxvY2FsaXplIHx8IHRoaXMubG9jYWxpemUsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIGlzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9scyB8fFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrO1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIGNvbnN0IGxvY2sgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI2xvY2snKTtcbiAgICBpZiAobG9jaykge1xuICAgICAgbG9jay5pY29uID0gJ21kaTpsb2NrLW9wZW4tb3V0bGluZSc7XG4gICAgICBsb2NrLnN0eWxlLm9wYWNpdHkgPSAnMC4xJztcbiAgICB9XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgbG9jay5pY29uID0gJ21kaTpsb2NrLW91dGxpbmUnO1xuICAgICAgICBsb2NrLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgICAgIH1cbiAgICB9LCA1MDAwKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgYXBwbHlUaGVtZXMoaGFzcywgZWxlbWVudCwgc3RhdGVPYmopIHtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0JztcbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgIGVsZW1lbnQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gIH1cblxuICBleHRyYURvbUNoYW5nZWQoKSB7XG4gICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJylcbiAgICAgIC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIHRoaXMuYXBwbHlUaGVtZXModGhpcy5oYXNzLCBlbGVtLCBlbGVtLnN0YXRlKTtcbiAgICAgIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtd2l0aC1leHRyYScsIER5bmFtaWNXaXRoRXh0cmEpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBFdmVudHNNaXhpbiBmcm9tICcuLi9taXhpbnMvZXZlbnRzLW1peGluLmpzJztcbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhQ29uZmlnQ3VzdG9tVWkgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyLkVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+PC9zdHlsZT5cbiAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249J21kaTphcnJvdy1sZWZ0J1xuICAgICAgICAgICAgb24tY2xpY2s9J19iYWNrSGFuZGxlcidcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+Q3VzdG9tIFVJIHNldHRpbmdzPC9kaXY+XG4gICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPSdbW2lzV2lkZV1dJz5cbiAgICAgICAgPHBhcGVyLWNhcmQgaGVhZGluZz0nRGV2aWNlIG5hbWUnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XG4gICAgICAgICAgICBTZXQgZGV2aWNlIG5hbWUgc28gdGhhdCB5b3UgY2FuIHJlZmVyZW5jZSBpdCBpbiBwZXItZGV2aWNlIHNldHRpbmdzXG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9J05hbWUnXG4gICAgICAgICAgICAgIHZhbHVlPSd7e25hbWV9fSdcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BhcGVyLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICduYW1lQ2hhbmdlZCcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMubmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gIH1cblxuICBuYW1lQ2hhbmdlZChuYW1lKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLnNldE5hbWUobmFtZSk7XG4gIH1cblxuICBfYmFja0hhbmRsZXIoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIHRoaXMuZmlyZSgnbG9jYXRpb24tY2hhbmdlZCcpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLWNvbmZpZy1jdXN0b20tdWknLCBIYUNvbmZpZ0N1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFUaGVtZWRTbGlkZXIgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1oYS10aGVtZWQtc2xpZGVyLW1hcmdpbiwgaW5pdGlhbCk7XG4gICAgICB9XG4gICAgICAuZGlzYWJsZS1vZmYtd2hlbi1taW4ge1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1waW4tc3RhcnQtY29sb3I6ICB2YXIoLS1wYXBlci1zbGlkZXItcGluLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluLmlzLW9uIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgfVxuICAgICAgcGFwZXItc2xpZGVyIHtcbiAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICB3aWR0aDogdmFyKC0taGEtcGFwZXItc2xpZGVyLXdpZHRoLCAyMDBweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxwYXBlci1zbGlkZXJcbiAgICAgICAgIG1pbj0nW1tfdGhlbWVkTWluXV0nXG4gICAgICAgICBtYXg9J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWF4XCIsIG1heCldXSdcbiAgICAgICAgIHBpbj0nW1tfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJwaW5cIiwgcGluKV1dJ1xuICAgICAgICAgY2xhc3MkPSdbW2NvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgX3RoZW1lZE1pbildXScgdmFsdWU9J1tbdmFsdWVdXSdcbiAgICAgICAgIG9uLWNoYW5nZT0ndmFsdWVDaGFuZ2VkJz5cbiAgICA8L3BhcGVyLXNsaWRlcj5cbiAgICBgO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmRpc2FibGVPZmZXaGVuTWluID0gIXRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhpcy50aGVtZSwgJ29mZl93aGVuX21pbicsICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKTtcbiAgICB0aGlzLmNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhpcy50aGVtZSwgdGhpcy5kaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgfSxcbiAgICAgIHBpbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaXNPbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHRoZW1lOiBPYmplY3QsXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBfdGhlbWVkTWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJtaW5cIiwgbWluKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2NvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhlbWUsIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCknLFxuICAgIF07XG4gIH1cblxuICBjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpIHtcbiAgICB0aGlzLl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQgPSB0aGlzLl9jb21wdXRlQXR0cmlidXRlKFxuICAgICAgdGhlbWUsICdyZXBvcnRfd2hlbl9ub3RfY2hhbmdlZCcsICFkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICB9XG5cbiAgX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIGF0dHIsIGRlZikge1xuICAgIGlmICh0aGVtZSkge1xuICAgICAgaWYgKGF0dHIgaW4gdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoZW1lW2F0dHJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzKHRoZW1lLCBpc09uLCB0aGVtZWRNaW4pIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgaWYgKGlzT24pIHtcbiAgICAgIHJlc3VsdCArPSAnaXMtb24gJztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikgfHwgdGhlbWVkTWluID09PSAwKSB7XG4gICAgICAvLyBJZiBvZmZXaGVuTWluIGlzIGVuYWJsZWQgZG9uJ3QgY3VzdG9taXplLlxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7cmVzdWx0fWRpc2FibGUtb2ZmLXdoZW4tbWluYDtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChldikge1xuICAgIGlmICghdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkICYmIHRoaXMudmFsdWUgPT09IGV2LnRhcmdldC52YWx1ZSkge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGEtdGhlbWVkLXNsaWRlcicsIEhhVGhlbWVkU2xpZGVyKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5pbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIuanMnO1xuaW1wb3J0IHN0YXRlQ2FyZFR5cGUgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMnO1xuXG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcbmltcG9ydCAnLi9zdGF0ZS1jYXJkLXdpdGgtc2xpZGVyLmpzJztcbmltcG9ydCAnLi9zdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyLmpzJztcblxuY29uc3QgU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMgPSBbJ2NvbmZpZ3VyYXRvciddO1xuY29uc3QgRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUID0ge1xuICBsaWdodDogMSwgLy8gU1VQUE9SVF9CUklHSFRORVNTXG4gIGNvdmVyOiA0LCAvLyBTVVBQT1JUX1NFVF9QT1NJVElPTlxuICBjbGltYXRlOiAxLCAvLyBTVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRVxufTtcbmNvbnN0IFRZUEVfVE9fQ09OVFJPTCA9IHtcbiAgdG9nZ2xlOiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gIGRpc3BsYXk6ICcnLFxuICBjb3ZlcjogJ2hhLWNvdmVyLWNvbnRyb2xzJyxcbn07XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkQ3VzdG9tVWkgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKScsXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKGNvbnRhaW5lci50YWdOYW1lID09PSAnRElWJyAmJlxuICAgICAgICAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSB8fCBjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGlsZC1jYXJkJykpKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIC8vIFNpbmNlIHRoaXMgZG9lc24ndCBhY3R1YWxseSBjaGFuZ2UgdGhlIGJhY2tncm91bmQgLSBubyBuZWVkIHRvIGNsZWFyIGl0LlxuICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicsICd2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIGluaGVyaXQpJyk7XG5cbiAgICAgIC8vIFBvbHlmaWxsICd1cGRhdGVTdHlsZXMnLlxuICAgICAgaWYgKCFjb250YWluZXIudXBkYXRlU3R5bGVzKSB7XG4gICAgICAgIGNvbnRhaW5lci51cGRhdGVTdHlsZXMgPSAoc3R5bGVzKSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHN0eWxlc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5pbnB1dENoYW5nZWQodGhpcy5oYXNzLCB0aGlzLmluRGlhbG9nLCB0aGlzLnN0YXRlT2JqKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycsIHBhZGRpbmc6ICcnIH0pO1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciwgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCAnZGVmYXVsdCcpO1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGJhZGdlTW9kZShoYXNzLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gW107XG4gICAgaWYgKGRvbWFpbiA9PT0gJ2dyb3VwJykge1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tpZF07XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIElEICR7aWR9IGluIGdyb3VwICR7c3RhdGVPYmouZW50aXR5X2lkfWApO1xuICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QgfHxcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QuaW5jbHVkZXMoc3RhdGUuZW50aXR5X2lkKSkge1xuICAgICAgICAgIHN0YXRlcy5wdXNoKHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICAgIHRoaXMsIHN0YXRlLCBmYWxzZSAvKiBpbkRpYWxvZyAqLywgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcy5wdXNoKHN0YXRlT2JqKTtcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9O1xuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSkge1xuICAgICAgICAgIHBhcmFtcy5tYXJnaW4gPSAndmFyKC0taGEtYmFkZ2VzLWNhcmQtbWFyZ2luLCAwKSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgICdIQS1CQURHRVMtQ0FSRCcsXG4gICAgICB7IGhhc3MsIHN0YXRlcyB9KTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgd2lkdGg6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC13aWR0aCwgaW5pdGlhbCknLFxuICAgICAgICAndGV4dC1hbGlnbic6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC10ZXh0LWFsaWduLCBpbml0aWFsKScsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5sYXN0Q2hpbGQuc3R5bGUuZm9udFNpemUgPSAnODUlJztcblxuICAgIC8vIFNpbmNlIHRoaXMgdmFyaWFibGUgb25seSBhZmZlY3RzIGJhZGdlcyBtb2RlIC0gbm8gbmVlZCB0byBjbGVhbiBpdCB1cC5cbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KCctLWhhLXN0YXRlLWxhYmVsLWJhZGdlLW1hcmdpbi1ib3R0b20nLCAnMCcpO1xuICB9XG5cbiAgY2xlYW5CYWRnZVN0eWxlKCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoe1xuICAgICAgICBkaXNwbGF5OiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAndGV4dC1hbGlnbic6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycgfSk7XG4gIH1cblxuICBhcHBseVRoZW1lcyhoYXNzLCBtb2RpZmllZE9iaikge1xuICAgIGxldCB0aGVtZVRhcmdldCA9IHRoaXM7XG4gICAgbGV0IHRoZW1lTmFtZSA9ICdkZWZhdWx0JztcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGVtZVRhcmdldCA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgIHRoZW1lTmFtZSA9IG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWU7XG4gICAgfVxuICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgdGhlbWVUYXJnZXQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gIH1cblxuICBtYXliZUhpZGVFbnRpdHkobW9kaWZpZWRPYmopIHtcbiAgICBpZiAoIW1vZGlmaWVkT2JqKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcwJywgcGFkZGluZzogJzAnIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgb2JqLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmJlxuICAgICAgKERPTUFJTl9UT19TTElERVJfU1VQUE9SVFtkb21haW5dICYgb2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzKSAmJlxuICAgICAgb2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlICYmIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAhPT0gJ25vLXNsaWRlcic7XG4gIH1cblxuICBpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFzdGF0ZU9iaiB8fCAhaGFzcyB8fCAhdGhpcy5faXNBdHRhY2hlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gICAgY29uc3QgbW9kaWZpZWRPYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICB0aGlzLCBzdGF0ZU9iaiwgaW5EaWFsb2csIHRydWUgLyogYWxsb3dIaWRkZW4gKi8pO1xuXG4gICAgaWYgKHRoaXMubWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hcHBseVRoZW1lcyhoYXNzLCBtb2RpZmllZE9iaik7XG5cbiAgICBpZiAoIWluRGlhbG9nICYmIG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlID09PSAnYmFkZ2VzJykge1xuICAgICAgdGhpcy5iYWRnZU1vZGUoaGFzcywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBtb2RpZmllZE9iaiwgZG9tYWluKTtcbiAgICB9XG4gIH1cblxuICByZWd1bGFyTW9kZV8oaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqLCBkb21haW4pIHtcbiAgICB0aGlzLmNsZWFuQmFkZ2VTdHlsZSgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgaGFzcyxcbiAgICAgIHN0YXRlT2JqLFxuICAgICAgaW5EaWFsb2csXG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbFN0YXRlQ2FyZFR5cGUgPSBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKTtcbiAgICBsZXQgY3VzdG9tU3RhdGVDYXJkVHlwZTtcbiAgICBjb25zdCBzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlID0gc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk7XG5cbiAgICBpZiAoZG9tYWluID09PSAnbGlnaHQnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1lbnRpdHktdG9nZ2xlJyxcbiAgICAgICAgc2VydmljZU1pbjogJ3R1cm5fb2ZmJyxcbiAgICAgICAgc2VydmljZU1heDogJ3R1cm5fb24nLFxuICAgICAgICB2YWx1ZU5hbWU6ICdicmlnaHRuZXNzJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY292ZXInICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jb3Zlci1jb250cm9scycsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnY2xvc2VfY292ZXInLFxuICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X2NvdmVyX3Bvc2l0aW9uJyxcbiAgICAgICAgc2V0VmFsdWVOYW1lOiAncG9zaXRpb24nLFxuICAgICAgICB2YWx1ZU5hbWU6ICdjdXJyZW50X3Bvc2l0aW9uJyxcbiAgICAgICAgbmFtZU9uOiAnb3BlbicsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NsaW1hdGUnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jbGltYXRlLXN0YXRlJyxcbiAgICAgICAgbWluOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl90ZW1wIHx8IC0xMDAsXG4gICAgICAgIG1heDogc3RhdGVPYmouYXR0cmlidXRlcy5tYXhfdGVtcCB8fCAyMDAsXG4gICAgICAgIHNlcnZpY2VNaW46ICdzZXRfdGVtcGVyYXR1cmUnLFxuICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgdmFsdWVOYW1lOiAndGVtcGVyYXR1cmUnLFxuICAgICAgICBuYW1lT246ICcnLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkICYmXG4gICAgICAgICAgICAgICAhU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMuaW5jbHVkZXMob3JpZ2luYWxTdGF0ZUNhcmRUeXBlKSkge1xuICAgICAgcGFyYW1zLmluRGlhbG9nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSAnJztcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50O1xuICAgIH1cblxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAoc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSB8fCBjdXN0b21TdGF0ZUNhcmRUeXBlIHx8IGBTVEFURS1DQVJELSR7b3JpZ2luYWxTdGF0ZUNhcmRUeXBlfWApLnRvVXBwZXJDYXNlKCksXG4gICAgICBwYXJhbXMpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtY3VzdG9tLXVpJywgU3RhdGVDYXJkQ3VzdG9tVWkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBDdWlCYXNlRWxlbWVudCBmcm9tICcuL2N1aS1iYXNlLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuL2R5bmFtaWMtd2l0aC1leHRyYS5qcyc7XG5pbXBvcnQgJy4vaGEtdGhlbWVkLXNsaWRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkV2l0aFNsaWRlciBleHRlbmRzIEN1aUJhc2VFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1mbGV4LWZhY3RvcnNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuc2Vjb25kLWxpbmUsIC5zdGF0ZS1hbmQtdG9nZ2xlLCAuc3RhdGUtaW5mbyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWFuZC10b2dnbGUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zZWNvbmQtbGluZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmQtbGluZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgfVxuICAgICAgLnN0cmV0Y2ggLnNlY29uZC1saW5lLCAuc3RyZXRjaCBoYS10aGVtZWQtc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0taGEtcGFwZXItc2xpZGVyLXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc3RhdGUtaW5mbyB7XG4gICAgICAgIG1pbi13aWR0aDogaW5pdGlhbDtcbiAgICAgIH1cbiAgICAgIGhhLXRoZW1lZC1zbGlkZXIsIC50b3Atd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC50b3Atd3JhcHBlci5zdHJldGNoIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzJD0naG9yaXpvbnRhbCBsYXlvdXQgZmxleCB0b3Atd3JhcHBlciBbW19jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZyldXSc+XG4gICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQgZmxleC1hdXRvIHN0YXRlLWFuZC10b2dnbGUnPlxuICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8gZmxleC1hdXRvJ1xuICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICAgIGluLWRpYWxvZz0nW1tzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSldXSdcbiAgICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSdcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbYnJlYWtTbGlkZXJdXScgY2xhc3M9J2hpZGRlbic+XG4gICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzaG93U2xpZGVyXV0nIHJlc3RhbXA+XG4gICAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGZsZXgtYXV0byBlbmQtanVzdGlmaWVkIHNlY29uZC1saW5lJz5cbiAgICAgICAgICA8aGEtdGhlbWVkLXNsaWRlclxuICAgICAgICAgICAgaWQ9J3NsaWRlcidcbiAgICAgICAgICAgIG1heD1bW21heF1dXG4gICAgICAgICAgICBtaW49W1ttaW5dXVxuICAgICAgICAgICAgdGhlbWU9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5zbGlkZXJfdGhlbWVdXSdcbiAgICAgICAgICAgIGlzLW9uPSdbW2lzT24oc3RhdGVPYmosIG5hbWVPbildXSdcbiAgICAgICAgICAgIHZhbHVlPSd7e3NsaWRlclZhbHVlfX0nXG4gICAgICAgICAgICBkaXNhYmxlLW9mZi13aGVuLW1pbj0ne3tkaXNhYmxlT2ZmV2hlbk1pbn19J1xuICAgICAgICAgICAgb24tY2hhbmdlPSdzbGlkZXJDaGFuZ2VkJ1xuICAgICAgICAgICAgb24tY2xpY2s9J3N0b3BQcm9wYWdhdGlvbic+XG4gICAgICAgICAgPC9oYS10aGVtZWQtc2xpZGVyPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shYnJlYWtTbGlkZXJdXSc+XG4gICAgICAgICAgICA8ZHluYW1pYy13aXRoLWV4dHJhIGhhc3M9J1tbaGFzc11dJyBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXScgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz48L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9tYWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWF4OiBTdHJpbmcsXG4gICAgICB2YWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIHNldFZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgbmFtZU9uOiB7IHR5cGU6IFN0cmluZywgdmFsdWU6ICdvbicgfSxcbiAgICAgIG1pbjogeyB0eXBlOiBOdW1iZXIsIHZhbHVlOiAwIH0sXG4gICAgICBtYXg6IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMjU1IH0sXG5cbiAgICAgIHNsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IEJvb2xlYW4sXG4gICAgICBtb2RlOiBTdHJpbmcsXG4gICAgICBzdHJldGNoU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBicmVha1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaGlkZVNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbGluZVRvb0xvbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG1pbkxpbmVCcmVhazogTnVtYmVyLFxuICAgICAgbWF4TGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICBzaG93U2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fb25Jcm9uUmVzaXplID0gdGhpcy5fb25Jcm9uUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ3N0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpJyxcbiAgICBdO1xuICB9XG5cbiAgX3dhaXRGb3JMYXlvdXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgICBpZiAodGhpcy5fZnJhbWVJZCkgcmV0dXJuO1xuICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSBmYWxzZTtcbiAgICB0aGlzLl9mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl9mcmFtZUlkID0gbnVsbDtcbiAgICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSB0cnVlO1xuICAgICAgdGhpcy5fb25Jcm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0TW9kZSgpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBoaWRlU2xpZGVyOiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicgJiYgdGhpcy5saW5lVG9vTG9uZyxcbiAgICAgIGJyZWFrU2xpZGVyOlxuICAgICAgICAgICAodGhpcy5tb2RlID09PSAnYnJlYWstc2xpZGVyJyB8fCB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpICYmXG4gICAgICAgICAgIHRoaXMubGluZVRvb0xvbmcsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuc2hvd1NsaWRlcikge1xuICAgICAgb2JqLmJyZWFrU2xpZGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gIH1cblxuICBfb25Jcm9uUmVzaXplKCkge1xuICAgIGlmICghdGhpcy5yZWFkeVRvQ29tcHV0ZSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICduby1zbGlkZXInKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBoaWRlU2xpZGVyOiB0cnVlLFxuICAgICAgICBicmVha1NsaWRlcjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2QnJlYWtTbGlkZXIgPSB0aGlzLmJyZWFrU2xpZGVyO1xuICAgIGNvbnN0IHByZXZIaWRlU2xpZGVyID0gdGhpcy5oaWRlU2xpZGVyO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBsaW5lVG9vTG9uZzogZmFsc2UsXG4gICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy4kO1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA8PSB0aGlzLm1pbkxpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXJXaWR0aCA+PSB0aGlzLm1heExpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJldkhpZGVTbGlkZXIgJiYgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdW5oaWRlIHRoZSBzbGlkZXIgaW4gb3JkZXIgdG8gcmVjYWxjdWxhdGUgaGVpZ2h0LlxuICAgICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBzdGF0ZUhlaWdodCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcuc3RhdGUtaW5mbycpLmNsaWVudEhlaWdodDtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBjb250YWluZXJIZWlnaHQgPiBzdGF0ZUhlaWdodCAqIDEuNTtcbiAgICAgIGlmICh0aGlzLmxpbmVUb29Mb25nKSB7XG4gICAgICAgIHRoaXMubWluTGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKCFwcmV2QnJlYWtTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5tYXhMaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2V0TW9kZSgpO1xuICB9XG5cbiAgX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChtb2RlID09PSAnc2luZ2xlLWxpbmUnKSB7XG4gICAgICByZXR1cm4gJ25vd3JhcCc7XG4gICAgfVxuICAgIGlmIChzdHJldGNoU2xpZGVyICYmIGxpbmVUb29Mb25nKSB7XG4gICAgICByZXR1cm4gJ3N0cmV0Y2ggd3JhcCc7XG4gICAgfVxuICAgIHJldHVybiAnd3JhcCc7XG4gIH1cblxuICBfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpIHtcbiAgICBpZiAoaW5EaWFsb2cgfHwgaGlkZVNsaWRlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIGNvbnN0IHBhcmFtID0geyBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH07XG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybjtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXInKTtcbiAgICBpZiAoZXYudGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgIC8vIE5vIFNoYWRvdyBET00gLSB3ZSBoYXZlIGFjY2VzcyB0byBvcmlnaW5hbCB0YXJnZXQuXG4gICAgICAoeyB0YXJnZXQgfSA9IGV2KTtcbiAgICB9IGVsc2UgaWYgKGV2LnBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYucGF0aDtcbiAgICB9IGVsc2UgaWYgKGV2LmNvbXBvc2VkUGF0aCkge1xuICAgICAgW3RhcmdldF0gPSBldi5jb21wb3NlZFBhdGgoKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSAwIHx8ICh2YWx1ZSA8PSB0YXJnZXQubWluICYmICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKSkge1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNaW4sIHBhcmFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1bdGhpcy5zZXRWYWx1ZU5hbWUgfHwgdGhpcy52YWx1ZU5hbWVdID0gdmFsdWU7XG4gICAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZU1heCwgcGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBzbGlkZXJWYWx1ZTogdGhpcy5pc09uKHN0YXRlT2JqLCBuYW1lT24pID8gc3RhdGVPYmouYXR0cmlidXRlc1t2YWx1ZU5hbWVdIDogMCxcbiAgICB9O1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHtcbiAgICAgICAgbWluTGluZUJyZWFrOiAwLFxuICAgICAgICBtYXhMaW5lQnJlYWs6IDk5OSxcbiAgICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgICBtb2RlOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSxcbiAgICAgICAgc3RyZXRjaFNsaWRlcjogISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0cmV0Y2hfc2xpZGVyLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzT24oc3RhdGVPYmosIG5hbWVPbikge1xuICAgIHJldHVybiBzdGF0ZU9iaiAmJiAoIW5hbWVPbiB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gbmFtZU9uKTtcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbihldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInLCBTdGF0ZUNhcmRXaXRoU2xpZGVyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQnPlxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICBjbGFzcz0nc3RhdGUtaW5mbydcbiAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgc2Vjb25kYXJ5LWxpbmUkPSdbW2hhc0V4dHJhKGV4dHJhKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0JyBpdGVtcz0nW1tleHRyYV1dJz5cbiAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3N0YXRlLWluZm8+XG4gICAgICA8ZHluYW1pYy13aXRoLWV4dHJhXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPlxuICAgICAgPC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyJywgU3RhdGVDYXJkV2l0aG91dFNsaWRlcik7XG4iLCIvLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5leHBvcnQgZGVmYXVsdCAoc3VwZXJDbGFzcykgPT4ge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIEV2ZW50c01peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICAgKiAgIHBheWxvYWQuXG4gICAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgICovXG4gICAgZmlyZSh0eXBlLCBkZXRhaWwgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0eXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IG9wdGlvbnMuYnViYmxlcyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogQm9vbGVhbihvcHRpb25zLmNhbmNlbGFibGUpLFxuICAgICAgICBjb21wb3NlZDogb3B0aW9ucy5jb21wb3NlZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuY29tcG9zZWQsXG4gICAgICB9KTtcbiAgICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbDtcbiAgICAgIGNvbnN0IG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgdGhpcztcbiAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudHNNaXhpbjtcbn07XG4iLCJpbXBvcnQgaGFzc0F0dHJpYnV0ZXNVdGlsIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMnO1xuXG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgfHwge307XG5jb25zdCBTVVBQT1JURURfU0xJREVSX01PREVTID0gW1xuICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbl07XG5cbmNvbnN0IGN1c3RvbVVpQXR0cmlidXRlcyA9IHtcbiAgZ3JvdXA6IHVuZGVmaW5lZCxcbiAgZGV2aWNlOiB1bmRlZmluZWQsXG4gIHRlbXBsYXRlczogdW5kZWZpbmVkLFxuICBzdGF0ZTogdW5kZWZpbmVkLFxuICBfc3RhdGVEaXNwbGF5OiB1bmRlZmluZWQsXG4gIGNvbnRyb2xfZWxlbWVudDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBzdGF0ZV9jYXJkX21vZGU6IHtcbiAgICB0eXBlOiAnYXJyYXknLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGxpZ2h0OiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICBjb3ZlcjogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY2xpbWF0ZTogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgJyonOiBbJ2JhZGdlcyddLFxuICAgIH0sXG4gIH0sXG4gIHN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBiYWRnZXNfbGlzdDogeyB0eXBlOiAnanNvbicgfSxcbiAgc2hvd19sYXN0X2NoYW5nZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGhpZGVfY29udHJvbDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgZXh0cmFfZGF0YV90ZW1wbGF0ZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBleHRyYV9iYWRnZTogeyB0eXBlOiAnanNvbicgfSxcbiAgc3RyZXRjaF9zbGlkZXI6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIHNsaWRlcl90aGVtZTogeyB0eXBlOiAnanNvbicgfSxcbiAgdGhlbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgY29uZmlybV9jb250cm9sczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgY29uZmlybV9jb250cm9sc19zaG93X2xvY2s6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGhpZGVfaW5fZGVmYXVsdF92aWV3OiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBpY29uX2NvbG9yOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG59O1xud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPSBoYXNzQXR0cmlidXRlc1V0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUztcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBoYXNzQXR0cmlidXRlc1V0aWwuVU5LTk9XTl9UWVBFO1xuT2JqZWN0LmFzc2lnbih3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgY3VzdG9tVWlBdHRyaWJ1dGVzKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5pbXBvcnQgZ2V0Vmlld0VudGl0aWVzIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXMuanMnO1xuXG5pbXBvcnQgJy4uL2VsZW1lbnRzL2hhLWNvbmZpZy1jdXN0b20tdWkuanMnO1xuaW1wb3J0IFZFUlNJT04gZnJvbSAnLi92ZXJzaW9uLmpzJztcbmltcG9ydCAnLi9oYXNzLWF0dHJpYnV0ZS11dGlsLmpzJztcblxud2luZG93LmN1c3RvbVVJID0gd2luZG93LmN1c3RvbVVJIHx8IHtcbiAgU1VQUE9SVEVEX1NMSURFUl9NT0RFUzogW1xuICAgICdzaW5nbGUtbGluZScsICdicmVhay1zbGlkZXInLCAnYnJlYWstc2xpZGVyLXRvZ2dsZScsICdoaWRlLXNsaWRlcicsICduby1zbGlkZXInLFxuICBdLFxuXG4gIGRvbUhvc3QoZWxlbSkge1xuICAgIGlmIChlbGVtID09PSBkb2N1bWVudCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW0uZ2V0Um9vdE5vZGUoKTtcbiAgICByZXR1cm4gKHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSA/IC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpLmhvc3QgOiByb290O1xuICB9LFxuXG4gIGxpZ2h0T3JTaGFkb3coZWxlbSwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZWxlbS5zaGFkb3dSb290ID9cbiAgICAgIGVsZW0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6XG4gICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9LFxuXG4gIGdldEVsZW1lbnRIaWVyYXJjaHkocm9vdCwgaGllcmFyY2h5KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsZW0gPSBoaWVyYXJjaHkuc2hpZnQoKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhyb290LCBlbGVtKSwgaGllcmFyY2h5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH0sXG5cbiAgZ2V0Q29udGV4dChlbGVtKSB7XG4gICAgaWYgKGVsZW0uX2NvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbS5fY29udGV4dCA9IFtdO1xuICAgICAgZm9yIChsZXQgZWxlbWVudCA9IChlbGVtLnRhZ05hbWUgPT09ICdIQS1FTlRJVElFUy1DQVJEJyA/IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW0pIDogZWxlbSk7XG4gICAgICAgIGVsZW1lbnQ7IGVsZW1lbnQgPSB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtZW50KSkge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgIGNhc2UgJ0hBLUVOVElUSUVTLUNBUkQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ3JvdXBFbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5ncm91cEVudGl0eSA9PT0gZmFsc2UgJiYgZWxlbWVudC5zdGF0ZXMgJiYgZWxlbWVudC5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChgZ3JvdXAuJHtjb21wdXRlU3RhdGVEb21haW4oZWxlbWVudC5zdGF0ZXNbMF0pfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnTU9SRS1JTkZPLUdST1VQJzpcbiAgICAgICAgICBjYXNlICdTVEFURS1DQVJELUNPTlRFTlQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuc3RhdGVPYmouZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hBLUNBUkRTJzpcbiAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3JykgfHwgJ2RlZmF1bHRfdmlldycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtLl9jb250ZXh0LnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0uX2NvbnRleHQ7XG4gIH0sXG5cbiAgZmluZE1hdGNoKGtleSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuIG51bGw7XG4gICAgaWYgKG9wdGlvbnNba2V5XSkgcmV0dXJuIGtleTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykuZmluZChvcHRpb24gPT4ga2V5Lm1hdGNoKGBeJHtvcHRpb259JGApKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChuYW1lLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZVttYXRjaF0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHdpbmRvdy5jdXN0b21VSS5nZXRDb250ZXh0KGVsZW0pO1xuICAgIGlmICghY29udGV4dCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICBjb250ZXh0LmZvckVhY2goKGMpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2goYywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhdHRyaWJ1dGVzLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIF9zZXRLZWVwKG9iaiwgdmFsdWUpIHtcbiAgICBpZiAob2JqLl9jdWlfa2VlcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSBvYmouX2N1aV9rZWVwICYmIHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIWF0dHJpYnV0ZXMudGVtcGxhdGVzKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosIHRydWUpO1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBuZXdBdHRyaWJ1dGVzID0ge307XG4gICAgbGV0IGhhc0dsb2JhbCA9IGZhbHNlO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcy50ZW1wbGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBhdHRyaWJ1dGVzLnRlbXBsYXRlc1trZXldO1xuICAgICAgaWYgKHRlbXBsYXRlLm1hdGNoKC9cXGIoZW50aXRpZXN8aGFzcylcXGIvKSkge1xuICAgICAgICBoYXNHbG9iYWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICB0ZW1wbGF0ZSwgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcyxcbiAgICAgICAgKHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXMgJiYgc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlc1trZXldKSB8fFxuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldLFxuICAgICAgICBzdGF0ZU9iai51bnRlbXBsYXRlZF9zdGF0ZSB8fCBzdGF0ZU9iai5zdGF0ZSk7XG4gICAgICAvLyBJbiBjYXNlIG9mIG51bGwgZG9uJ3Qgc2V0IHRoZSB2YWx1ZS5cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgbmV3QXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICBpZiAoa2V5ID09PSAnc3RhdGUnKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouc3RhdGUpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdfc3RhdGVEaXNwbGF5Jykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXkpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gYXR0cmlidXRlc1trZXldKSB7XG4gICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgIWhhc0dsb2JhbCk7XG4gICAgaWYgKCFoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzID09PSBhdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBXZSBhcmUgb3BlcmF0aW5nIG9uIHJlYWwgYXR0cmlidXRlcy4gUmVwbGFjZSB0aGVtLlxuICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgbmV3QXR0cmlidXRlcyk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdzdGF0ZScpKSB7XG4gICAgICAgIGlmIChuZXdBdHRyaWJ1dGVzLnN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnN0YXRlID0gU3RyaW5nKG5ld0F0dHJpYnV0ZXMuc3RhdGUpO1xuICAgICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZSA9IHN0YXRlT2JqLnN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdfc3RhdGVEaXNwbGF5JykpIHtcbiAgICAgICAgcmVzdWx0Ll9zdGF0ZURpc3BsYXkgPSBuZXdBdHRyaWJ1dGVzLl9zdGF0ZURpc3BsYXk7XG4gICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkgPSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5O1xuICAgICAgfVxuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHJlc3VsdCwgIWhhc0dsb2JhbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBPcGVyYXRpbmcgb24gY29udGV4dC1hd2FyZSBhdHRyaWJ1dGVzLiBSZXR1cm4gc2hhbGxvdyBjb3B5IG9mIG9iamVjdC5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5ld1Jlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgc3RhdGVPYmouYXR0cmlidXRlcyk7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaik7XG5cbiAgICBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZXMob2JqKSB7XG4gICAgICBpZiAoIW9iaikgcmV0dXJuO1xuICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICAgICAgaGFzcywgc3RhdGVzLCBuZXdSZXN1bHQsIGF0dHJpYnV0ZXMpO1xuICAgICAgICBoYXNDaGFuZ2VzIHw9IChyZXN1bHQgIT09IG5ld1Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZGV2aWNlKTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZ3JvdXApO1xuICAgIH1cblxuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgIGlmIChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKSByZXR1cm4gbmV3UmVzdWx0O1xuICAgIGlmIChoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVPYmo7XG4gIH0sXG5cbiAgYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eV9pZDogc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3RhdGU6IHN0YXRlT2JqLnN0YXRlLFxuICAgICAgYXR0cmlidXRlczogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcywgYXR0cmlidXRlcyksXG4gICAgICB1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZU9iai5sYXN0X2NoYW5nZWQsXG4gICAgfTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdChlbGVtLCBzdGF0ZU9iaiwgaW5EaWFsb2csIGFsbG93SGlkZGVuKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgbGV0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIG9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBlbGVtLmhhc3MsIGVsZW0uaGFzcy5zdGF0ZXMsIG9iaiwgb2JqLmF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKG9iaiAhPT0gc3RhdGVPYmogJiYgb2JqLmF0dHJpYnV0ZXMuaGlkZGVuICYmIGFsbG93SGlkZGVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmaXhHcm91cFRpdGxlcygpIHtcbiAgICBjb25zdCBob21lQXNzaXN0YW50TWFpbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nXSk7XG4gICAgaWYgKGhvbWVBc3Npc3RhbnRNYWluID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzLCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYUNhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaG9tZUFzc2lzdGFudE1haW4sIFtcbiAgICAgICdwYXJ0aWFsLWNhcmRzJyxcbiAgICAgICdoYS1jYXJkc1t2aWV3LXZpc2libGVdJ10pO1xuICAgIGlmIChoYUNhcmRzID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhQ2FyZHMsICcubWFpbicpIHx8IGhhQ2FyZHMuJC5tYWluO1xuICAgIGNvbnN0IGNhcmRzID0gbWFpbi5xdWVyeVNlbGVjdG9yQWxsKCdoYS1lbnRpdGllcy1jYXJkJyk7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKGNhcmQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgIGNhcmQsXG4gICAgICAgICAgY2FyZC5ncm91cEVudGl0eSxcbiAgICAgICAgICBmYWxzZSAvKiBpbkRpYWxvZyAqLyxcbiAgICAgICAgICBmYWxzZSAvKiBhbGxvd0hpZGRlbiAqLyk7XG4gICAgICAgIGlmIChvYmogIT09IGNhcmQuZ3JvdXBFbnRpdHkgJiYgb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSkge1xuICAgICAgICAgIGNvbnN0IG5hbWVFbGVtID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coY2FyZCwgJy5uYW1lJyk7XG4gICAgICAgICAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgY29udHJvbENvbHVtbnMoY29sdW1ucykge1xuICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtY2FyZHMnXSk7XG4gICAgaWYgKHBhcnRpYWxDYXJkcyA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMuYmluZChudWxsLCBjb2x1bW5zKSxcbiAgICAgICAgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZ1bmN0aW9uIHJlbmFtZWQgZnJvbSBoYW5kbGVXaW5kb3dDaGFuZ2UgdG8gX3VwZGF0ZUNvbHVtbnMgb24gMy43LjE4XG4gICAgY29uc3QgZiA9IHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UgfHwgcGFydGlhbENhcmRzLl91cGRhdGVDb2x1bW5zO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzLmZvckVhY2goKG1xbCkgPT4ge1xuICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKGYpO1xuICAgIH0pO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzID0gY29sdW1ucy5tYXAoKHdpZHRoKSA9PiB7XG4gICAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt3aWR0aH1weClgKTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihmKTtcbiAgICAgIHJldHVybiBtcWw7XG4gICAgfSk7XG4gICAgZigpO1xuICB9LFxuXG4gIHVzZUN1c3RvbWl6ZXIoKSB7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBjb25zdCBjdXN0b21pemVyID0gbWFpbi5oYXNzLnN0YXRlc1snY3VzdG9taXplci5jdXN0b21pemVyJ107XG4gICAgaWYgKCFjdXN0b21pemVyKSByZXR1cm47XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcykge1xuICAgICAgaWYgKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCAmJiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykge1xuICAgICAgICBjdXN0b21pemVyLmF0dHJpYnV0ZXMuaGlkZV9hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBhdHRyKSkge1xuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNbYXR0cl0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQ29uZmlnUGFuZWwoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY29uc3QgaGFQYW5lbENvbmZpZyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtcGFuZWwtcmVzb2x2ZXInLFxuICAgICAgJ2hhLXBhbmVsLWNvbmZpZyddKTtcbiAgICBpZiAoIWhhUGFuZWxDb25maWcpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkudXBkYXRlQ29uZmlnUGFuZWwsIDEwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhQ29uZmlnTmF2aWdhdGlvbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhhUGFuZWxDb25maWcsIFtcbiAgICAgICdoYS1jb25maWctZGFzaGJvYXJkJyxcbiAgICAgICdoYS1jb25maWctbmF2aWdhdGlvbiddKTtcbiAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uKSB7XG4gICAgICAvLyBIYUNvbmZpZ05hdmlnYXRpb24gc3RhcnRlZCB1c2luZyBsb2NhbGl6ZSBvbiAyMS4wMS4yMDE4XG4gICAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplICYmICFoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2gpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoID0gdHJ1ZTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQgPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQ7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkID0gKGhhc3MsIHBhZ2UpID0+XG4gICAgICAgICAgcGFnZSA9PT0gJ2N1c3RvbXVpJyB8fCBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZChoYXNzLCBwYWdlKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdDdXN0b20gVUknIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ1NldFVJIHR3ZWFrcycgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWhhQ29uZmlnTmF2aWdhdGlvbi5wYWdlcy5zb21lKGNvbmYgPT4gY29uZiA9PT0gJ2N1c3RvbXVpJyB8fCBjb25mLmRvbWFpbiA9PT0gJ2N1c3RvbXVpJykpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLnB1c2goJ3BhZ2VzJywgaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplID8gJ2N1c3RvbXVpJyA6IHtcbiAgICAgICAgICBkb21haW46ICdjdXN0b211aScsXG4gICAgICAgICAgY2FwdGlvbjogJ0N1c3RvbSBVSScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTZXQgVUkgdHdlYWtzLicsXG4gICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0SGFDb25maWdDdXN0b21VaSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoYS1jb25maWctY3VzdG9tLXVpJyk7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLmlzV2lkZSA9IGhhUGFuZWxDb25maWcuaXNXaWRlO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5zZXRBdHRyaWJ1dGUoJ3BhZ2UtbmFtZScsICdjdXN0b211aScpO1xuICAgICAgcmV0dXJuIGhhQ29uZmlnQ3VzdG9tVWk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlyb25QYWdlcyA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhUGFuZWxDb25maWcsICdpcm9uLXBhZ2VzJyk7XG4gICAgaWYgKGlyb25QYWdlcykge1xuICAgICAgaWYgKGlyb25QYWdlcy5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICBpcm9uUGFnZXMuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICAgIGlyb25QYWdlcy5hZGRFdmVudExpc3RlbmVyKCdpcm9uLWl0ZW1zLWNoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJykpIHtcbiAgICAgICAgICAgIGlyb25QYWdlcy5zZWxlY3QoJ2N1c3RvbXVpJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgcm9vdCA9IGhhUGFuZWxDb25maWcuc2hhZG93Um9vdCB8fCBoYVBhbmVsQ29uZmlnO1xuICAgICAgaWYgKHJvb3QubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZpc2libGUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpO1xuICAgICAgcm9vdC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSB2aXNpYmxlID8gJycgOiAnbm9uZSc7XG4gICAgfVxuICB9LFxuXG4gIGluc3RhbGxTdGF0ZXNIb29rKCkge1xuICAgIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgaWYgKCFob21lQXNzaXN0YW50IHx8ICFob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcykgcmV0dXJuO1xuICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlID0gaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3M7XG4gICAgaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MgPSBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgY29uc3QgeyBoYXNzIH0gPSB0aGlzO1xuICAgICAgaWYgKG9iai5zdGF0ZXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqLnN0YXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50aXR5ID0gb2JqLnN0YXRlc1trZXldO1xuICAgICAgICAgIGlmIChlbnRpdHkuX2N1aV9rZWVwKSByZXR1cm47XG4gICAgICAgICAgY29uc3QgbmV3RW50aXR5ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZXMoaGFzcywgb2JqLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICBpZiAoaGFzcy5zdGF0ZXMgJiYgZW50aXR5ICE9PSBoYXNzLnN0YXRlc1trZXldKSB7XG4gICAgICAgICAgICAvLyBOZXcgc3RhdGUgYXJyaXZlZC4gUHV0IG1vZGlmaWVkIHN0YXRlIGluLlxuICAgICAgICAgICAgb2JqLnN0YXRlc1trZXldID0gbmV3RW50aXR5O1xuICAgICAgICAgIH0gZWxzZSBpZiAoZW50aXR5ICE9PSBuZXdFbnRpdHkpIHtcbiAgICAgICAgICAgIC8vIEl0J3MgdGhlIHNhbWUgc3RhdGUgYnV0IGNvbnRlbnRzIGNoYW5nZWQgZHVlIHRvIG90aGVyIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIG9yaWdpbmFsVXBkYXRlLmNhbGwodGhpcywgb2JqKTtcbiAgICAgIGlmIChvYmoudGhlbWVzICYmIGhhc3MuX3RoZW1lV2FpdGVycykge1xuICAgICAgICBoYXNzLl90aGVtZVdhaXRlcnMuZm9yRWFjaCh3YWl0ZXIgPT4gd2FpdGVyLnN0YXRlQ2hhbmdlZCh3YWl0ZXIuc3RhdGUpKTtcbiAgICAgICAgaGFzcy5fdGhlbWVXYWl0ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAobWFpbi5oYXNzICYmIG1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgIG1haW4uX3VwZGF0ZUhhc3MoeyBzdGF0ZXM6IG1haW4uaGFzcy5zdGF0ZXMgfSk7XG4gICAgfVxuICB9LFxuXG4gIGluc3RhbGxQYXJ0aWFsQ2FyZHMoKSB7XG4gICAgY29uc3QgcGFydGlhbENhcmRzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdwYXJ0aWFsLWNhcmRzJyk7XG4gICAgaWYgKCFwYXJ0aWFsQ2FyZHMgfHwgIXBhcnRpYWxDYXJkcy5wcm90b3R5cGUuX2RlZmF1bHRWaWV3RmlsdGVyKSByZXR1cm47XG4gICAgcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIgPSAoaGFzcywgZW50aXR5SWQpID0+IHtcbiAgICAgIGlmIChoYXNzLnN0YXRlc1tlbnRpdHlJZF0uYXR0cmlidXRlcy5oaWRkZW4pIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGV4Y2x1ZGVzID0ge307XG4gICAgICBPYmplY3QudmFsdWVzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzICYmIGVudGl0eS5hdHRyaWJ1dGVzLmhpZGVfaW5fZGVmYXVsdF92aWV3KSB7XG4gICAgICAgICAgY29uc3QgZXhjbHVkZUVudGl0eUlkID0gZW50aXR5LmVudGl0eV9pZDtcbiAgICAgICAgICBpZiAoZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSkgcmV0dXJuO1xuICAgICAgICAgIGV4Y2x1ZGVzW2V4Y2x1ZGVFbnRpdHlJZF0gPSBlbnRpdHk7XG4gICAgICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLnZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdFbnRpdGllcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZpZXdFbnRpdGllcylcbiAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICBpZCA9PiB2aWV3RW50aXRpZXNbaWRdLmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgICAgICAgICBleGNsdWRlc1tpZF0gPSB2aWV3RW50aXRpZXNbaWRdO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICFleGNsdWRlc1tlbnRpdHlJZF07XG4gICAgfTtcbiAgfSxcblxuICAvLyBBbGxvd3MgY2hhbmdpbmcgdGhlICdFeGVjdXRlJyAvICdBY3RpdmF0ZScgdGV4dCBvbiBzY3JpcHQvc2NlbmUgY2FyZHMuXG4gIGluc3RhbGxBY3Rpb25OYW1lKGVsZW1lbnROYW1lKSB7XG4gICAgY29uc3Qga2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoZWxlbWVudE5hbWUpO1xuICAgIGlmICgha2xhc3MgfHwgIWtsYXNzLnByb3RvdHlwZSkgcmV0dXJuO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShrbGFzcy5wcm90b3R5cGUsICdsb2NhbGl6ZScsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tTG9jYWxpemUodikge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlT2JqICYmIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcyAmJlxuICAgICAgICAgICAgICB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLl9fZGF0YS5sb2NhbGl6ZSh2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VzdG9tTG9jYWxpemU7XG4gICAgICB9LFxuICAgICAgc2V0KCkge30sXG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gQWxsb3dzIHRoZW1pbmcgXCJyZWd1bGFyXCIgdG9wIGJhZGdlcy5cbiAgaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCkge1xuICAgIGNvbnN0IGhhU3RhdGVMYWJlbEJhZGdlID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpO1xuICAgIGlmICghaGFTdGF0ZUxhYmVsQmFkZ2UgfHwgIWhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQpIHJldHVybjtcbiAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgIGhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQgPSBmdW5jdGlvbiB1cGRhdGUoc3RhdGVPYmopIHtcbiAgICAgIC8vIFRPRE86IENhbGwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSkge1xuICAgICAgICBpZiAodGhpcy5oYXNzLnRoZW1lcyA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzID0gdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgfHwgW107XG4gICAgICAgICAgdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMucHVzaCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLmhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sXG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgICBpZiAodGhpcy5zdGFydEludGVydmFsKSB7XG4gICAgICAgIC8vIEFkZGVkIG9uIDE5LjEuMjAxOFxuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgaW5zdGFsbFN0YXRlQmFkZ2UoKSB7XG4gICAgY29uc3Qgc3RhdGVCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtYmFkZ2UnKTtcbiAgICBpZiAoIXN0YXRlQmFkZ2UgfHwgIXN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZUljb25BcHBlYXJhbmNlKSByZXR1cm47XG4gICAgY29uc3Qgb3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZSA9IHN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZUljb25BcHBlYXJhbmNlO1xuICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBmdW5jdGlvbiBjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZShzdGF0ZU9iaikge1xuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaWNvbl9jb2xvciAmJiAhc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSkge1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJC5pY29uLnN0eWxlLCB7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgICAgICAgY29sb3I6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuaWNvbl9jb2xvcixcbiAgICAgICAgICBmaWx0ZXI6ICcnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UuY2FsbCh0aGlzLCBzdGF0ZU9iaik7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBpbnN0YWxsSGFBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGhhQXR0cmlidXRlcyA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtYXR0cmlidXRlcycpO1xuICAgIGlmICghaGFBdHRyaWJ1dGVzIHx8ICFoYUF0dHJpYnV0ZXMucHJvdG90eXBlLmNvbXB1dGVGaWx0ZXJzQXJyYXkgfHxcbiAgICAgICAhd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsKSByZXR1cm47XG4gICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICBoYUF0dHJpYnV0ZXMucHJvdG90eXBlLmNvbXB1dGVGaWx0ZXJzQXJyYXkgPSBmdW5jdGlvbiBjdXN0b21Db21wdXRlRmlsdGVyc0FycmF5KGV4dHJhRmlsdGVycykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKS5jb25jYXQoZXh0cmFGaWx0ZXJzID8gZXh0cmFGaWx0ZXJzLnNwbGl0KCcsJykgOiBbXSk7XG4gICAgfTtcbiAgfSxcblxuICBpbnN0YWxsSGFGb3JtQ3VzdG9taXplKCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGhhRm9ybUN1c3RvbWl6ZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtZm9ybS1jdXN0b21pemUnKTtcbiAgICBpZiAoIWhhRm9ybUN1c3RvbWl6ZSkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxMDBtcy5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFGb3JtQ3VzdG9taXplLCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lID0gdHJ1ZTtcblxuICAgIGlmICghd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsKSByZXR1cm47XG4gICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUpIHtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlID1cbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZShrZXksIHZhbHVlLCBzZWNvbmRhcnkpIHtcbiAgICAgICAgICBjb25zdCBjb25maWcgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldXG4gICAgICAgICAgICAgIHx8IHsgdHlwZTogd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSB9O1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbml0T3Blbk9iamVjdChrZXksIGNvbmZpZy50eXBlID09PSAnanNvbicgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZSwgc2Vjb25kYXJ5LCBjb25maWcpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucykge1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMgPVxuICAgICAgICBmdW5jdGlvbiBjdXN0b21nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyhcbiAgICAgICAgICBsb2NhbEF0dHJpYnV0ZXMsIGdsb2JhbEF0dHJpYnV0ZXMsIGV4aXN0aW5nQXR0cmlidXRlcywgbmV3QXR0cmlidXRlcykge1xuICAgICAgICAgIGNvbnN0IGtub3duS2V5cyA9XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY29uZiA9IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2tleV07XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY29uZiAmJiAoIWNvbmYuZG9tYWlucyB8fCAhdGhpcy5lbnRpdHkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmYuZG9tYWlucy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4odGhpcy5lbnRpdHkpKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobG9jYWxBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZ2xvYmFsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGV4aXN0aW5nQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKG5ld0F0dHJpYnV0ZXMpKTtcbiAgICAgICAgICByZXR1cm4ga25vd25LZXlzLnNvcnQoKS5jb25jYXQoJ090aGVyJyk7XG4gICAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIGluc3RhbGxDbGFzc0hvb2tzKCkge1xuICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5jbGFzc0luaXREb25lID0gdHJ1ZTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFBhcnRpYWxDYXJkcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsU3RhdGVzSG9vaygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlQmFkZ2UoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhQXR0cmlidXRlcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQWN0aW9uTmFtZSgnc3RhdGUtY2FyZC1zY2VuZScpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQWN0aW9uTmFtZSgnc3RhdGUtY2FyZC1zY3JpcHQnKTtcbiAgfSxcblxuICBpbml0KCkge1xuICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuaW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbENsYXNzSG9va3MoKTtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGlmICghbWFpbi5oYXNzIHx8ICFtYWluLmhhc3Muc3RhdGVzKSB7XG4gICAgICAvLyBDb25uZWN0aW9uIHdhc24ndCBtYWRlIHlldC4gVHJ5IGluIDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmluaXQsIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5pdERvbmUgPSB0cnVlO1xuXG4gICAgd2luZG93LmN1c3RvbVVJLnVzZUN1c3RvbWl6ZXIoKTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS5ydW5Ib29rcygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2NhdGlvbi1jaGFuZ2VkJywgd2luZG93LnNldFRpbWVvdXQuYmluZChudWxsLCB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MsIDEwMCkpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBjb25zb2xlLmxvZyhgTG9hZGVkIEN1c3RvbVVJICR7VkVSU0lPTn1gKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBpZiAoIXdpbmRvdy5DVVNUT01fVUlfTElTVCkge1xuICAgICAgd2luZG93LkNVU1RPTV9VSV9MSVNUID0gW107XG4gICAgfVxuICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVC5wdXNoKHtcbiAgICAgIG5hbWU6ICdDdXN0b21VSScsXG4gICAgICB2ZXJzaW9uOiBWRVJTSU9OLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZHJleS1naXQvaG9tZS1hc3Npc3RhbnQtY3VzdG9tLXVpJyxcbiAgICB9KTtcbiAgfSxcblxuICBydW5Ib29rcygpIHtcbiAgICB3aW5kb3cuY3VzdG9tVUkuZml4R3JvdXBUaXRsZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkudXBkYXRlQ29uZmlnUGFuZWwoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSgpO1xuICB9LFxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGEtZGV2aWNlLW5hbWUnKSB8fCAnJztcbiAgfSxcblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hhLWRldmljZS1uYW1lJywgbmFtZSB8fCAnJyk7XG4gIH0sXG5cbiAgY29tcHV0ZVRlbXBsYXRlKHRlbXBsYXRlLCBoYXNzLCBlbnRpdGllcywgZW50aXR5LCBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUsIHN0YXRlKSB7XG4gICAgY29uc3QgZnVuY3Rpb25Cb2R5ID0gKHRlbXBsYXRlLmluZGV4T2YoJ3JldHVybicpID49IDApID8gdGVtcGxhdGUgOiBgcmV0dXJuIFxcYCR7dGVtcGxhdGV9XFxgO2A7XG4gICAgdHJ5IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jICovXG4gICAgICBjb25zdCBmdW5jID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnaGFzcycsICdlbnRpdGllcycsICdlbnRpdHknLCAnYXR0cmlidXRlcycsICdhdHRyaWJ1dGUnLCAnc3RhdGUnLCBmdW5jdGlvbkJvZHkpO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgcmV0dXJuIGZ1bmMoaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgaWYgKChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHx8IGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9IGluIHRlbXBsYXRlICR7ZnVuY3Rpb25Cb2R5fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH0sXG59O1xud2luZG93LmN1c3RvbVVJLmluaXQoKTtcbiIsImV4cG9ydCBkZWZhdWx0ICcyMDE4MDcxNic7XG4iXSwic291cmNlUm9vdCI6IiJ9