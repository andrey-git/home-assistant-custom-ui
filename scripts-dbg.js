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
    Object.keys(theme).forEach(key => {
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
    Object.keys(attributes).forEach(key => {
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

  group.attributes.entity_id.forEach(entityId => {
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

  view.attributes.entity_id.forEach(entityId => {
    var entity = entities[entityId];

    if (entity && !entity.attributes.hidden) {
      viewEntities[entity.entity_id] = entity;

      if (Object(_compute_domain_js__WEBPACK_IMPORTED_MODULE_0__["default"])(entity.entity_id) === 'group') {
        var groupEntities = Object(_get_group_entities_js__WEBPACK_IMPORTED_MODULE_1__["default"])(entities, entity);

        Object.keys(groupEntities).forEach(grEntityId => {
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
    return (/** @type {!LiteralString} */value.value
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
    return (/** @type {!HTMLTemplateElement } */value.innerHTML
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
var html = function html(strings) {
  var template = /** @type {!HTMLTemplateElement} */document.createElement('template');

  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

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
var htmlLiteral = function htmlLiteral(strings) {
  for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

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
    var extras = stateObj.attributes.extra_data_template;
    if (extras) {
      if (!Array.isArray(extras)) {
        extras = [extras];
      }
      return extras.map(extra => window.customUI.computeTemplate(extra, hass, hass.states, stateObj, stateObj.attributes,
      /* attribute= */undefined, stateObj.state)).filter(result => result !== null);
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
    Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, elementName ? elementName.toUpperCase() : 'DIV', { hass, stateObj, inDialog });
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
      var extraBadges = stateObj.attributes.extra_badge;
      if (!Array.isArray(extraBadges)) {
        extraBadges = [extraBadges];
      }
      return extraBadges.map(extraBadge => {
        var result = null;
        if (extraBadge.entity_id && hass.states[extraBadge.entity_id]) {
          result = Object.assign({}, window.customUI.maybeChangeObject(this, hass.states[extraBadge.entity_id], this.inDialog,
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
          if (blacklist.some(v => RegExp(v).test(result.state.toString()))) {
            return null;
          }
        }
        result._entityDisplay = '';
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
      var lock = this.root.querySelector('#lock');
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
      var themeName = stateObj.attributes.theme || 'default';
      Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element, hass.themes || { default_theme: 'default', themes: {} }, themeName);
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
    var result = '';
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
/* harmony import */ var _home_assistant_polymer_src_common_entity_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/compute_state_domain.js */ "../home-assistant-polymer/src/common/entity/compute_state_domain.js");
/* harmony import */ var _home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/dom/dynamic_content_updater.js */ "../home-assistant-polymer/src/common/dom/dynamic_content_updater.js");
/* harmony import */ var _home_assistant_polymer_src_common_entity_state_card_type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home-assistant-polymer/src/common/entity/state_card_type.js */ "../home-assistant-polymer/src/common/entity/state_card_type.js");
/* harmony import */ var _utils_hooks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks.js */ "./src/utils/hooks.js");
/* harmony import */ var _state_card_with_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-card-with-slider.js */ "./src/elements/state-card-with-slider.js");
/* harmony import */ var _state_card_without_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-card-without-slider.js */ "./src/elements/state-card-without-slider.js");









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
    var container = this.parentNode.parentNode;
    if (container.tagName === 'DIV' && (container.classList.contains('state') || container.classList.contains('child-card'))) {
      this._container = container;

      // Since this doesn't actually change the background - no need to clear it.
      container.style.setProperty('background-color', 'var(--paper-card-background-color, inherit)');

      // Polyfill 'updateStyles'.
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
      this._container.updateStyles({ display: '', margin: '', padding: '' });
      Object(_home_assistant_polymer_src_common_dom_apply_themes_on_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._container, this.hass.themes || { default_theme: 'default', themes: {} }, 'default');
      this._container = null;
    }
    super.disconnectedCallback();
  }

  badgeMode(hass, stateObj, domain) {
    var states = [];
    if (domain === 'group') {
      stateObj.attributes.entity_id.forEach(id => {
        var state = hass.states[id];
        if (!state) {
          /* eslint-disable no-console */
          console.warn(`Unknown ID ${id} in group ${stateObj.entity_id}`);
          /* eslint-enable no-console */
          return;
        }
        if (!stateObj.attributes.badges_list || stateObj.attributes.badges_list.includes(state.entity_id)) {
          states.push(window.customUI.maybeChangeObject(this, state, false /* inDialog */, false /* allowHidden */));
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
    Object(_home_assistant_polymer_src_common_dom_dynamic_content_updater_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, 'HA-BADGES-CARD', { hass, states });
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

  cleanBadgeStyle() {
    if (this._container) {
      this._container.updateStyles({
        display: '',
        width: '',
        'text-align': ''
      });
    }
    this.updateStyles({ display: '', margin: '' });
  }

  applyThemes(hass, modifiedObj) {
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

  maybeHideEntity(modifiedObj) {
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

  sliderEligible_(domain, obj, inDialog) {
    if (inDialog) return false;
    return DOMAIN_TO_SLIDER_SUPPORT[domain] && DOMAIN_TO_SLIDER_SUPPORT[domain] & obj.attributes.supported_features && obj.attributes.state_card_mode && obj.attributes.state_card_mode !== 'no-slider';
  }

  inputChanged(hass, inDialog, stateObj) {
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

  regularMode_(hass, inDialog, stateObj, domain) {
    this.cleanBadgeStyle();

    var params = {
      hass,
      stateObj,
      inDialog
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
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






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
    var obj = {
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

  stateObjChanged(stateObj, nameOn, valueName) {
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
    fire(type) {
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

  domHost(elem) {
    if (elem === document) return null;
    var root = elem.getRootNode();
    return root instanceof DocumentFragment ? /** @type {ShadowRoot} */root.host : root;
  },

  lightOrShadow(elem, selector) {
    return elem.shadowRoot ? elem.shadowRoot.querySelector(selector) : elem.querySelector(selector);
  },

  getElementHierarchy(root, hierarchy) {
    if (root === null) return null;
    var elem = hierarchy.shift();
    if (elem) {
      return window.customUI.getElementHierarchy(window.customUI.lightOrShadow(root, elem), hierarchy);
    }
    return root;
  },

  getContext(elem) {
    if (elem._context === undefined) {
      elem._context = [];
      for (var element = elem.tagName === 'HA-ENTITIES-CARD' ? window.customUI.domHost(elem) : elem; element; element = window.customUI.domHost(element)) {
        switch (element.tagName) {
          case 'HA-ENTITIES-CARD':
            if (element.groupEntity) {
              elem._context.push(element.groupEntity.entity_id);
            } else if (element.groupEntity === false && element.states && element.states.length) {
              elem._context.push(`group.${Object(_home_assistant_polymer_src_common_entity_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element.states[0])}`);
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
    var name = window.customUI.getName();
    if (!name) return stateObj;
    var match = this.findMatch(name, stateObj.attributes.device);
    if (!match) return stateObj;
    var attributes = Object.assign({}, stateObj.attributes.device[match]);

    if (!Object.keys(attributes).length) return stateObj;
    return window.customUI.applyAttributes(stateObj, attributes);
  },

  maybeChangeObjectByGroup(elem, stateObj) {
    var context = window.customUI.getContext(elem);
    if (!context) return stateObj;

    if (!stateObj.attributes.group) {
      return stateObj;
    }
    var attributes = {};
    context.forEach(c => {
      var match = this.findMatch(c, stateObj.attributes.group);
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
    var newAttributes = {};
    var hasGlobal = false;
    var hasChanges = false;
    Object.keys(attributes.templates).forEach(key => {
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

  maybeApplyTemplates(hass, states, stateObj) {
    var newResult = window.customUI.maybeApplyTemplateAttributes(hass, states, stateObj, stateObj.attributes);
    var hasChanges = newResult !== stateObj;

    function checkAttributes(obj) {
      if (!obj) return;
      Object.values(obj).forEach(attributes => {
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
    var obj = window.customUI.maybeChangeObjectByDevice(stateObj);
    obj = window.customUI.maybeChangeObjectByGroup(elem, obj);
    obj = window.customUI.maybeApplyTemplateAttributes(elem.hass, elem.hass.states, obj, obj.attributes);

    if (obj !== stateObj && obj.attributes.hidden && allowHidden) {
      return null;
    }
    return obj;
  },

  fixGroupTitles() {
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
    cards.forEach(card => {
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

  controlColumns(columns) {
    var partialCards = window.customUI.getElementHierarchy(document, ['home-assistant', 'home-assistant-main', 'partial-cards']);
    if (partialCards === null) {
      // DOM not ready. Wait 1 second.
      window.setTimeout(window.customUI.controlColumns.bind(null, columns), 1000);
      return;
    }
    // Function renamed from handleWindowChange to _updateColumns on 3.7.18
    var f = partialCards.handleWindowChange || partialCards._updateColumns;
    partialCards.mqls.forEach(mql => {
      mql.removeListener(f);
    });
    partialCards.mqls = columns.map(width => {
      var mql = window.matchMedia(`(min-width: ${width}px)`);
      mql.addListener(f);
      return mql;
    });
    f();
  },

  useCustomizer() {
    var main = window.customUI.lightOrShadow(document, 'home-assistant');
    var customizer = main.hass.states['customizer.customizer'];
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
    var getHaConfigCustomUi = () => {
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
        ironPages.addEventListener('iron-items-changed', () => {
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

  installStatesHook() {
    customElements.whenDefined('home-assistant').then(() => {
      var homeAssistant = customElements.get('home-assistant');
      if (!homeAssistant || !homeAssistant.prototype._updateHass) return;
      var originalUpdate = homeAssistant.prototype._updateHass;
      homeAssistant.prototype._updateHass = function update(obj) {
        // Use named function to preserve 'this'.
        var hass = this.hass;

        if (obj.states) {
          Object.keys(obj.states).forEach(key => {
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
          hass._themeWaiters.forEach(waiter => waiter.stateChanged(waiter.state));
          hass._themeWaiters = undefined;
        }
      };
      var main = window.customUI.lightOrShadow(document, 'home-assistant');
      if (main.hass && main.hass.states) {
        main._updateHass({ states: main.hass.states });
      }
    });
  },

  installPartialCards() {
    customElements.whenDefined('partial-cards').then(() => {
      var partialCards = customElements.get('partial-cards');
      if (!partialCards || !partialCards.prototype._defaultViewFilter) return;
      partialCards.prototype._defaultViewFilter = (hass, entityId) => {
        if (hass.states[entityId].attributes.hidden) return false;
        var excludes = {};
        Object.values(hass.states).forEach(entity => {
          if (entity.attributes && entity.attributes.hide_in_default_view) {
            var excludeEntityId = entity.entity_id;
            if (excludes[excludeEntityId]) return;
            excludes[excludeEntityId] = entity;
            if (entity.attributes.view) {
              var viewEntities = Object(_home_assistant_polymer_src_common_entity_get_view_entities_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hass.states, entity);
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
      var klass = customElements.get(elementName);
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

  installStateBadge() {
    customElements.whenDefined('state-badge').then(() => {
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

  installHaAttributes() {
    customElements.whenDefined('ha-attributes').then(() => {
      var haAttributes = customElements.get('ha-attributes');
      if (!haAttributes || !haAttributes.prototype.computeFiltersArray || !window.hassAttributeUtil) return;
      // Use named function to preserve 'this'.
      haAttributes.prototype.computeFiltersArray = function customComputeFiltersArray(extraFilters) {
        return Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).concat(extraFilters ? extraFilters.split(',') : []);
      };
    });
  },

  installHaFormCustomize() {
    if (!window.location.pathname.startsWith('/config')) return;
    customElements.whenDefined('ha-form-customize').then(() => {
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
          var knownKeys = Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).filter(key => {
            var conf = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[key];
            return conf && (!conf.domains || !this.entity || conf.domains.includes(Object(_home_assistant_polymer_src_common_entity_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.entity)));
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
    var functionBody = template.indexOf('return') >= 0 ? template : `return \`${template}\`;`;
    try {
      /* eslint-disable no-new-func */
      var func = new Function('hass', 'entities', 'entity', 'attributes', 'attribute', 'state', functionBody);
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
/* harmony default export */ __webpack_exports__["default"] = ('20181217');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc3MtYXR0cmlidXRlLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfV0lUSF9NT1JFX0lORk8iLCJET01BSU5TX0hJREVfTU9SRV9JTkZPIiwiRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSIsIlNUQVRFU19PRkYiLCJET01BSU5TX1RPR0dMRSIsIlNldCIsIlVOSVRfQyIsIlVOSVRfRiIsIkRFRkFVTFRfVklFV19FTlRJVFlfSUQiLCJhcHBseVRoZW1lc09uRWxlbWVudCIsImVsZW1lbnQiLCJ0aGVtZXMiLCJsb2NhbFRoZW1lIiwidXBkYXRlTWV0YSIsIl90aGVtZXMiLCJ0aGVtZU5hbWUiLCJkZWZhdWx0X3RoZW1lIiwic3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGhlbWUiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInByZWZpeGVkS2V5IiwidXBkYXRlU3R5bGVzIiwid2luZG93IiwiU2hhZHlDU1MiLCJzdHlsZVN1YnRyZWUiLCJtZXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidGhlbWVDb2xvciIsImR5bmFtaWNDb250ZW50VXBkYXRlciIsInJvb3QiLCJuZXdFbGVtZW50VGFnIiwiYXR0cmlidXRlcyIsInJvb3RFbCIsImN1c3RvbUVsIiwibGFzdENoaWxkIiwidGFnTmFtZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInRvTG93ZXJDYXNlIiwic2V0UHJvcGVydGllcyIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsImNhblRvZ2dsZURvbWFpbiIsImhhc3MiLCJkb21haW4iLCJzZXJ2aWNlcyIsImNhblRvZ2dsZVN0YXRlIiwic3RhdGVPYmoiLCJjb21wdXRlU3RhdGVEb21haW4iLCJzdGF0ZSIsInN1cHBvcnRlZF9mZWF0dXJlcyIsImNvbXB1dGVEb21haW4iLCJlbnRpdHlJZCIsInN1YnN0ciIsImluZGV4T2YiLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiRE9NQUlOX0RFVklDRV9DTEFTUyIsImJpbmFyeV9zZW5zb3IiLCJjb3ZlciIsInNlbnNvciIsIlVOS05PV05fVFlQRSIsIkFERF9UWVBFIiwiVFlQRV9UT19UQUciLCJzdHJpbmciLCJqc29uIiwiaWNvbiIsImJvb2xlYW4iLCJhcnJheSIsIkxPR0lDX1NUQVRFX0FUVFJJQlVURVMiLCJlbnRpdHlfcGljdHVyZSIsInVuZGVmaW5lZCIsImZyaWVuZGx5X25hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJlbXVsYXRlZF9odWUiLCJkb21haW5zIiwiZW11bGF0ZWRfaHVlX25hbWUiLCJoYWFza2FfaGlkZGVuIiwiaGFhc2thX25hbWUiLCJob21lYnJpZGdlX2hpZGRlbiIsImhvbWVicmlkZ2VfbmFtZSIsImF0dHJpYnV0aW9uIiwiY3VzdG9tX3VpX21vcmVfaW5mbyIsImN1c3RvbV91aV9zdGF0ZV9jYXJkIiwiZGV2aWNlX2NsYXNzIiwib3B0aW9ucyIsImFzc3VtZWRfc3RhdGUiLCJpbml0aWFsX3N0YXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ0b1N0cmluZyIsImxpdGVyYWxWYWx1ZSIsIkVycm9yIiwiaHRtbFZhbHVlIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsImh0bWwiLCJzdHJpbmdzIiwidGVtcGxhdGUiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJ2IiwiaWR4IiwiaHRtbExpdGVyYWwiLCJDdWlCYXNlRWxlbWVudCIsIlBvbHltZXIiLCJFbGVtZW50IiwicHJvcGVydGllcyIsImluRGlhbG9nIiwiQm9vbGVhbiIsImNvbnRyb2xFbGVtZW50IiwiU3RyaW5nIiwiZXh0cmEiLCJBcnJheSIsImNvbXB1dGVkIiwiY29tcHV0ZUV4dHJhIiwiZXh0cmFzIiwiZXh0cmFfZGF0YV90ZW1wbGF0ZSIsImlzQXJyYXkiLCJtYXAiLCJjdXN0b21VSSIsImNvbXB1dGVUZW1wbGF0ZSIsInN0YXRlcyIsImZpbHRlciIsInNob3dMYXN0Q2hhbmdlZCIsImxlbmd0aCIsInNob3dfbGFzdF9jaGFuZ2VkIiwiaGFzRXh0cmEiLCJEeW5hbWljRWxlbWVudCIsImVsZW1lbnROYW1lIiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXJGdW5jIiwidG9VcHBlckNhc2UiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIndoZW5EZWZpbmVkIiwidGhlbiIsIkR5bmFtaWNXaXRoRXh0cmEiLCJnZXQiLCJleHRyYU9iaiIsIl9hdHRhY2hlZCIsImV4dHJhT2JqVmlzaWJsZSIsImNvbm5lY3RlZENhbGxiYWNrIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJfaXNBdHRhY2hlZCIsImF0dGFjaGVkIiwiZXh0cmFfYmFkZ2UiLCJleHRyYUJhZGdlcyIsImV4dHJhQmFkZ2UiLCJtYXliZUNoYW5nZU9iamVjdCIsImF0dHJpYnV0ZSIsInVuaXQiLCJibGFja2xpc3QiLCJibGFja2xpc3Rfc3RhdGVzIiwic29tZSIsIlJlZ0V4cCIsInRlc3QiLCJfZW50aXR5RGlzcGxheSIsImNvbXB1dGVFeHRyYVZpc2libGUiLCJleHRyYUNsYXNzIiwiX3Nob3dDb250cm9sIiwiaGlkZV9jb250cm9sIiwiY29tcHV0ZVN0YXRlRGlzcGxheSIsImhhTG9jYWxpemUiLCJsb2NhbGl6ZSIsImlzQ29uZmlybUNvbnRyb2xzIiwiY29uZmlybV9jb250cm9scyIsImNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrIiwiY2xpY2tIYW5kbGVyIiwiZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImxvY2siLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInN0b3BQcm9wYWdhdGlvbiIsImFwcGx5VGhlbWVzIiwiZXh0cmFEb21DaGFuZ2VkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJIYUNvbmZpZ0N1c3RvbVVpIiwiRXZlbnRzTWl4aW4iLCJpc1dpZGUiLCJuYW1lIiwib2JzZXJ2ZXIiLCJyZWFkeSIsImdldE5hbWUiLCJuYW1lQ2hhbmdlZCIsInNldE5hbWUiLCJfYmFja0hhbmRsZXIiLCJoaXN0b3J5IiwiYmFjayIsImZpcmUiLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwibWluIiwiTnVtYmVyIiwibWF4IiwicGluIiwiaXNPbiIsIm5vdGlmeSIsIl90aGVtZWRNaW4iLCJfZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiYXR0ciIsImRlZiIsImNvbXB1dGVDbGFzcyIsInRoZW1lZE1pbiIsInZhbHVlQ2hhbmdlZCIsImV2IiwidGFyZ2V0IiwiU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMiLCJET01BSU5fVE9fU0xJREVSX1NVUFBPUlQiLCJsaWdodCIsImNsaW1hdGUiLCJUWVBFX1RPX0NPTlRST0wiLCJ0b2dnbGUiLCJkaXNwbGF5IiwiU3RhdGVDYXJkQ3VzdG9tVWkiLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9jb250YWluZXIiLCJzZXRQcm9wZXJ0eSIsImlucHV0Q2hhbmdlZCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWRnZU1vZGUiLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiYmFkZ2VzX2xpc3QiLCJwdXNoIiwicGFyYW1zIiwid2lkdGgiLCJmb250U2l6ZSIsImNsZWFuQmFkZ2VTdHlsZSIsIm1vZGlmaWVkT2JqIiwidGhlbWVUYXJnZXQiLCJtYXliZUhpZGVFbnRpdHkiLCJzbGlkZXJFbGlnaWJsZV8iLCJvYmoiLCJzdGF0ZV9jYXJkX21vZGUiLCJyZWd1bGFyTW9kZV8iLCJvcmlnaW5hbFN0YXRlQ2FyZFR5cGUiLCJjdXN0b21TdGF0ZUNhcmRUeXBlIiwic2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSIsInN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeSIsInNlcnZpY2VNaW4iLCJzZXJ2aWNlTWF4IiwidmFsdWVOYW1lIiwic2V0VmFsdWVOYW1lIiwibmFtZU9uIiwibWluX3RlbXAiLCJtYXhfdGVtcCIsImNvbnRyb2xfZWxlbWVudCIsIlN0YXRlQ2FyZFdpdGhTbGlkZXIiLCJzbGlkZXJWYWx1ZSIsIm1vZGUiLCJzdHJldGNoU2xpZGVyIiwiYnJlYWtTbGlkZXIiLCJoaWRlU2xpZGVyIiwibGluZVRvb0xvbmciLCJtaW5MaW5lQnJlYWsiLCJtYXhMaW5lQnJlYWsiLCJzaG93U2xpZGVyIiwiX29uSXJvblJlc2l6ZSIsImJpbmQiLCJfaXNDb25uZWN0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3dhaXRGb3JMYXlvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3NldE1vZGUiLCJfZnJhbWVJZCIsInJlYWR5VG9Db21wdXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicHJldkJyZWFrU2xpZGVyIiwicHJldkhpZGVTbGlkZXIiLCIkIiwiY29udGFpbmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0YXRlSGVpZ2h0IiwiX2NvbXB1dGVXcmFwQ2xhc3MiLCJfc2hvd1NsaWRlciIsInNsaWRlckNoYW5nZWQiLCJwYXJzZUludCIsInBhcmFtIiwiaXNOYU4iLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwiY2FsbFNlcnZpY2UiLCJzdGF0ZU9iakNoYW5nZWQiLCJzdHJldGNoX3NsaWRlciIsIlN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIiLCJzdXBlckNsYXNzIiwiZGV0YWlsIiwiZXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY29tcG9zZWQiLCJub2RlIiwiZGlzcGF0Y2hFdmVudCIsIlNVUFBPUlRFRF9TTElERVJfTU9ERVMiLCJjdXN0b21VaUF0dHJpYnV0ZXMiLCJkZXZpY2UiLCJ0ZW1wbGF0ZXMiLCJfc3RhdGVEaXNwbGF5IiwiY29uY2F0Iiwic2xpZGVyX3RoZW1lIiwiaGlkZV9pbl9kZWZhdWx0X3ZpZXciLCJpY29uX2NvbG9yIiwiaGFzc0F0dHJpYnV0ZXNVdGlsIiwiZG9tSG9zdCIsImdldFJvb3ROb2RlIiwiRG9jdW1lbnRGcmFnbWVudCIsImhvc3QiLCJsaWdodE9yU2hhZG93Iiwic2VsZWN0b3IiLCJzaGFkb3dSb290IiwiZ2V0RWxlbWVudEhpZXJhcmNoeSIsImhpZXJhcmNoeSIsInNoaWZ0IiwiZ2V0Q29udGV4dCIsIl9jb250ZXh0IiwiZ3JvdXBFbnRpdHkiLCJyZXZlcnNlIiwiZmluZE1hdGNoIiwiZmluZCIsIm9wdGlvbiIsIm1hdGNoIiwibWF5YmVDaGFuZ2VPYmplY3RCeURldmljZSIsImFwcGx5QXR0cmlidXRlcyIsIm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cCIsImNvbnRleHQiLCJjIiwiX3NldEtlZXAiLCJfY3VpX2tlZXAiLCJtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzIiwibmV3QXR0cmlidXRlcyIsImhhc0dsb2JhbCIsImhhc0NoYW5nZXMiLCJ1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzIiwidW50ZW1wbGF0ZWRfc3RhdGUiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ1bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkiLCJtYXliZUFwcGx5VGVtcGxhdGVzIiwibmV3UmVzdWx0IiwiY2hlY2tBdHRyaWJ1dGVzIiwibGFzdF9jaGFuZ2VkIiwiYWxsb3dIaWRkZW4iLCJmaXhHcm91cFRpdGxlcyIsImhvbWVBc3Npc3RhbnRNYWluIiwiaGFDYXJkcyIsIm1haW4iLCJjYXJkcyIsImNhcmQiLCJuYW1lRWxlbSIsInRleHRDb250ZW50IiwiY29udHJvbENvbHVtbnMiLCJjb2x1bW5zIiwicGFydGlhbENhcmRzIiwiZiIsImhhbmRsZVdpbmRvd0NoYW5nZSIsIl91cGRhdGVDb2x1bW5zIiwibXFscyIsIm1xbCIsInJlbW92ZUxpc3RlbmVyIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwidXNlQ3VzdG9taXplciIsImN1c3RvbWl6ZXIiLCJoaWRlX2F0dHJpYnV0ZXMiLCJ1cGRhdGVDb25maWdQYW5lbCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiaGFQYW5lbENvbmZpZyIsImhhQ29uZmlnTmF2aWdhdGlvbiIsImN1aVBhdGNoIiwiX29yaWdpbmFsQ29tcHV0ZUxvYWRlZCIsIl9jb21wdXRlTG9hZGVkIiwiX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24iLCJfY29tcHV0ZUNhcHRpb24iLCJfb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24iLCJfY29tcHV0ZURlc2NyaXB0aW9uIiwicGFnZSIsInBhZ2VzIiwiY29uZiIsImNhcHRpb24iLCJsb2FkZWQiLCJnZXRIYUNvbmZpZ0N1c3RvbVVpIiwiaGFDb25maWdDdXN0b21VaSIsImlyb25QYWdlcyIsImxhc3RFbGVtZW50Q2hpbGQiLCJzZWxlY3QiLCJ2aXNpYmxlIiwiaW5zdGFsbFN0YXRlc0hvb2siLCJob21lQXNzaXN0YW50IiwiX3VwZGF0ZUhhc3MiLCJvcmlnaW5hbFVwZGF0ZSIsInVwZGF0ZSIsIm5ld0VudGl0eSIsIl90aGVtZVdhaXRlcnMiLCJ3YWl0ZXIiLCJzdGF0ZUNoYW5nZWQiLCJpbnN0YWxsUGFydGlhbENhcmRzIiwiX2RlZmF1bHRWaWV3RmlsdGVyIiwiZXhjbHVkZXMiLCJleGNsdWRlRW50aXR5SWQiLCJpbnN0YWxsQWN0aW9uTmFtZSIsImtsYXNzIiwiZGVmaW5lUHJvcGVydHkiLCJjdXN0b21Mb2NhbGl6ZSIsImFjdGlvbl9uYW1lIiwiX19kYXRhIiwic2V0IiwiaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlIiwiaGFTdGF0ZUxhYmVsQmFkZ2UiLCJzdGFydEludGVydmFsIiwiaW5zdGFsbFN0YXRlQmFkZ2UiLCJzdGF0ZUJhZGdlIiwiX3VwZGF0ZUljb25BcHBlYXJhbmNlIiwib3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZSIsImN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlIiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3IiLCJpbnN0YWxsSGFBdHRyaWJ1dGVzIiwiaGFBdHRyaWJ1dGVzIiwiY29tcHV0ZUZpbHRlcnNBcnJheSIsImN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJleHRyYUZpbHRlcnMiLCJzcGxpdCIsImluc3RhbGxIYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemVJbml0RG9uZSIsIl9jb21wdXRlU2luZ2xlQXR0cmlidXRlIiwiY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsInNlY29uZGFyeSIsImNvbmZpZyIsIl9pbml0T3Blbk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwibG9jYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlcyIsImV4aXN0aW5nQXR0cmlidXRlcyIsImtub3duS2V5cyIsImZpbHRlckZyb21BdHRyaWJ1dGVzIiwic29ydCIsImluc3RhbGxDbGFzc0hvb2tzIiwiY2xhc3NJbml0RG9uZSIsImluaXQiLCJpbml0RG9uZSIsInJ1bkhvb2tzIiwibG9nIiwiQ1VTVE9NX1VJX0xJU1QiLCJ2ZXJzaW9uIiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jdGlvbkJvZHkiLCJmdW5jIiwiRnVuY3Rpb24iLCJTeW50YXhFcnJvciIsIlJlZmVyZW5jZUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7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NEksU0FBekMsRUFBb0QxSCxLQUFwRCxDQUFQO0FBQ0QsS0FORCxDQU1FLE9BQU82SSxDQUFQLEVBQVU7QUFDVjtBQUNBLFVBQUtBLGFBQWErUyxXQUFkLElBQThCL1MsYUFBYWdULGNBQS9DLEVBQStEO0FBQzdEbFAsZ0JBQVFDLElBQVIsQ0FBYyxHQUFFL0QsRUFBRWMsSUFBSyxLQUFJZCxFQUFFaVQsT0FBUSxnQkFBZUwsWUFBYSxFQUFqRTtBQUNBLGVBQU8sSUFBUDtBQUNEO0FBQ0Q7QUFDQSxZQUFNNVMsQ0FBTjtBQUNEO0FBQ0Y7QUFsbUJrQyxDQUFyQztBQW9tQkE1SyxPQUFPMkgsUUFBUCxDQUFnQm1WLElBQWhCLEc7Ozs7Ozs7Ozs7Ozs7QUM1bUJBLCtEQUFlLFVBQWYsRSIsImZpbGUiOiJzY3JpcHRzLWRiZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9zY3JpcHRzLmpzXCIpO1xuIiwiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9ICdoYXNzOmJvb2ttYXJrJztcblxuLyoqIERvbWFpbnMgdGhhdCBoYXZlIGEgc3RhdGUgY2FyZC4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfQ0FSRCA9IFtcbiAgJ2NsaW1hdGUnLFxuICAnY292ZXInLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2lucHV0X3NlbGVjdCcsXG4gICdpbnB1dF9udW1iZXInLFxuICAnaW5wdXRfdGV4dCcsXG4gICdsb2NrJyxcbiAgJ21lZGlhX3BsYXllcicsXG4gICdzY2VuZScsXG4gICdzY3JpcHQnLFxuICAndGltZXInLFxuICAndmFjdXVtJyxcbiAgJ3dlYmxpbmsnLFxuXTtcblxuLyoqIERvbWFpbnMgd2l0aCBzZXBhcmF0ZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9NT1JFX0lORk8gPSBbXG4gICdhbGFybV9jb250cm9sX3BhbmVsJyxcbiAgJ2F1dG9tYXRpb24nLFxuICAnY2FtZXJhJyxcbiAgJ2NsaW1hdGUnLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2NvdmVyJyxcbiAgJ2ZhbicsXG4gICdncm91cCcsXG4gICdoaXN0b3J5X2dyYXBoJyxcbiAgJ2lucHV0X2RhdGV0aW1lJyxcbiAgJ2xpZ2h0JyxcbiAgJ2xvY2snLFxuICAnbWVkaWFfcGxheWVyJyxcbiAgJ3NjcmlwdCcsXG4gICdzdW4nLFxuICAndXBkYXRlcicsXG4gICd2YWN1dW0nLFxuICAnd2VhdGhlcidcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdyBubyBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfSElERV9NT1JFX0lORk8gPSBbXG4gICdpbnB1dF9udW1iZXInLFxuICAnaW5wdXRfc2VsZWN0JyxcbiAgJ2lucHV0X3RleHQnLFxuICAnc2NlbmUnLFxuICAnd2VibGluaydcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gICdjYW1lcmEnLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2hpc3RvcnlfZ3JhcGgnLFxuICAnc2NlbmUnLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcbiAgJ2Nsb3NlZCcsXG4gICdsb2NrZWQnLFxuICAnb2ZmJ1xuXTtcblxuLyoqIERvbWFpbnMgd2hlcmUgd2UgYWxsb3cgdG9nZ2xlIGluIExvdmVsYWNlLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfVE9HR0xFID0gbmV3IFNldChbXG4gICdmYW4nLFxuICAnaW5wdXRfYm9vbGVhbicsXG4gICdsaWdodCcsXG4gICdzd2l0Y2gnXG5dKTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9ICfCsEMnO1xuZXhwb3J0IGNvbnN0IFVOSVRfRiA9ICfCsEYnO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9ICdncm91cC5kZWZhdWx0X3ZpZXcnO1xuIiwiLyoqXG4gKiBBcHBseSBhIHRoZW1lIHRvIGFuIGVsZW1lbnQgYnkgc2V0dGluZyB0aGUgQ1NTIHZhcmlhYmxlcyBvbiBpdC5cbiAqXG4gKiBlbGVtZW50OiBFbGVtZW50IHRvIGFwcGx5IHRoZW1lIG9uLlxuICogdGhlbWVzOiBIQVNTIFRoZW1lIGluZm9ybWF0aW9uXG4gKiBsb2NhbFRoZW1lOiBzZWxlY3RlZCB0aGVtZS5cbiAqIHVwZGF0ZU1ldGE6IGJvb2xlYW4gaWYgd2Ugc2hvdWxkIHVwZGF0ZSB0aGUgdGhlbWUtY29sb3IgbWV0YSBlbGVtZW50LlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5VGhlbWVzT25FbGVtZW50KGVsZW1lbnQsIHRoZW1lcywgbG9jYWxUaGVtZSwgdXBkYXRlTWV0YSA9IGZhbHNlKSB7XG4gIGlmICghZWxlbWVudC5fdGhlbWVzKSB7XG4gICAgZWxlbWVudC5fdGhlbWVzID0ge307XG4gIH1cbiAgbGV0IHRoZW1lTmFtZSA9IHRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuICBpZiAobG9jYWxUaGVtZSA9PT0gJ2RlZmF1bHQnIHx8IChsb2NhbFRoZW1lICYmIHRoZW1lcy50aGVtZXNbbG9jYWxUaGVtZV0pKSB7XG4gICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgfVxuICBjb25zdCBzdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50Ll90aGVtZXMpO1xuICBpZiAodGhlbWVOYW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICB2YXIgdGhlbWUgPSB0aGVtZXMudGhlbWVzW3RoZW1lTmFtZV07XG4gICAgT2JqZWN0LmtleXModGhlbWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gJy0tJyArIGtleTtcbiAgICAgIGVsZW1lbnQuX3RoZW1lc1twcmVmaXhlZEtleV0gPSAnJztcbiAgICAgIHN0eWxlc1twcmVmaXhlZEtleV0gPSB0aGVtZVtrZXldO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtZW50LnVwZGF0ZVN0eWxlcykge1xuICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gIH0gZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgLy8gaW1wbGVtZW50IHVwZGF0ZVN0eWxlcygpIG1ldGhvZCBvZiBQb2xlbWVyIGVsZW1lbnRzXG4gICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlU3VidHJlZSgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8oZWxlbWVudCksIHN0eWxlcyk7XG4gIH1cblxuICBpZiAoIXVwZGF0ZU1ldGEpIHJldHVybjtcblxuICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXRoZW1lLWNvbG9yXScpO1xuICBpZiAobWV0YSkge1xuICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpKSB7XG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JywgbWV0YS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSk7XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lQ29sb3IgPSBzdHlsZXNbJy0tcHJpbWFyeS1jb2xvciddIHx8IG1ldGEuZ2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKTtcbiAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoZW1lQ29sb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFVwZGF0ZSByb290J3MgY2hpbGQgZWxlbWVudCB0byBiZSBuZXdFbGVtZW50VGFnIHJlcGxhY2luZyBhbm90aGVyIGV4aXN0aW5nIGNoaWxkIGlmIGFueS5cbiAqIENvcHkgYXR0cmlidXRlcyBpbnRvIHRoZSBjaGlsZCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljQ29udGVudFVwZGF0ZXIocm9vdCwgbmV3RWxlbWVudFRhZywgYXR0cmlidXRlcykge1xuICBjb25zdCByb290RWwgPSByb290O1xuICBsZXQgY3VzdG9tRWw7XG5cbiAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQgJiYgcm9vdEVsLmxhc3RDaGlsZC50YWdOYW1lID09PSBuZXdFbGVtZW50VGFnKSB7XG4gICAgY3VzdG9tRWwgPSByb290RWwubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIGlmIChyb290RWwubGFzdENoaWxkKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQocm9vdEVsLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0aW5nIGFuIGVsZW1lbnQgd2l0aCB1cHBlciBjYXNlIHdvcmtzIGZpbmUgaW4gQ2hyb21lLCBidXQgaW4gRkYgaXQgZG9lc24ndCBpbW1lZGlhdGVseVxuICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICBjdXN0b21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudFRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKSB7XG4gICAgY3VzdG9tRWwuc2V0UHJvcGVydGllcyhhdHRyaWJ1dGVzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBjdXN0b20gZWxlbWVudCBkZWZpbml0aW9uIHdhc24ndCBsb2FkZWQgeWV0IC0gc2V0UHJvcGVydGllcyB3b3VsZCBiZVxuICAgIC8vIG1pc3NpbmcsIGJ1dCBubyBoYXJtIGluIHNldHRpbmcgYXR0cmlidXRlcyBvbmUtYnktb25lIHRoZW4uXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjdXN0b21FbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoY3VzdG9tRWwpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKSB7XG4gIGNvbnN0IHNlcnZpY2VzID0gaGFzcy5zZXJ2aWNlc1tkb21haW5dO1xuICBpZiAoIXNlcnZpY2VzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChkb21haW4gPT09ICdsb2NrJykge1xuICAgIHJldHVybiAnbG9jaycgaW4gc2VydmljZXM7XG4gIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY292ZXInKSB7XG4gICAgcmV0dXJuICdvcGVuX2NvdmVyJyBpbiBzZXJ2aWNlcztcbiAgfVxuICByZXR1cm4gJ3R1cm5fb24nIGluIHNlcnZpY2VzO1xufVxuIiwiaW1wb3J0IGNhblRvZ2dsZURvbWFpbiBmcm9tICcuL2Nhbl90b2dnbGVfZG9tYWluLmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICByZXR1cm4gc3RhdGVPYmouc3RhdGUgPT09ICdvbicgfHwgc3RhdGVPYmouc3RhdGUgPT09ICdvZmYnO1xuICB9XG4gIGlmIChkb21haW4gPT09ICdjbGltYXRlJykge1xuICAgIHJldHVybiAhISgoc3RhdGVPYmouYXR0cmlidXRlcyB8fCB7fSkuc3VwcG9ydGVkX2ZlYXR1cmVzICYgNDA5Nik7XG4gIH1cblxuICByZXR1cm4gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlRG9tYWluKGVudGl0eUlkKSB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoMCwgZW50aXR5SWQuaW5kZXhPZignLicpKTtcbn1cbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9kb21haW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopIHtcbiAgcmV0dXJuIGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGdyb3VwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgcmVzdWx0W2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldEdyb3VwRW50aXRpZXMgZnJvbSAnLi9nZXRfZ3JvdXBfZW50aXRpZXMuanMnO1xuXG4vLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGVudGl0aWVzIHRoYXQgdGhlIHZpZXcgd2lsbCBzaG93XG4vLyBpbmNsdWRpbmcgZW1iZWRkZWQgZ3JvdXBzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld0VudGl0aWVzKGVudGl0aWVzLCB2aWV3KSB7XG4gIGNvbnN0IHZpZXdFbnRpdGllcyA9IHt9O1xuXG4gIHZpZXcuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5ICYmICFlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgIHZpZXdFbnRpdGllc1tlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcblxuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09ICdncm91cCcpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbnRpdGllcyA9IGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGVudGl0eSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBFbnRpdGllcykuZm9yRWFjaCgoZ3JFbnRpdHlJZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyRW50aXR5ID0gZ3JvdXBFbnRpdGllc1tnckVudGl0eUlkXTtcblxuICAgICAgICAgIGlmICghZ3JFbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgICAgICAgIHZpZXdFbnRpdGllc1tnckVudGl0eUlkXSA9IGdyRW50aXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmlld0VudGl0aWVzO1xufVxuIiwiaW1wb3J0IGNhblRvZ2dsZVN0YXRlIGZyb20gJy4vY2FuX3RvZ2dsZV9zdGF0ZS5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IHsgRE9NQUlOU19XSVRIX0NBUkQgfSBmcm9tICcuLi9jb25zdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlQ2FyZFR5cGUoaGFzcywgc3RhdGVPYmopIHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgcmV0dXJuICdkaXNwbGF5JztcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9DQVJELmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICByZXR1cm4gZG9tYWluO1xuICB9IGVsc2UgaWYgKGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSAmJlxuICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbCAhPT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gJ3RvZ2dsZSc7XG4gIH1cbiAgcmV0dXJuICdkaXNwbGF5Jztcbn1cbiIsImNvbnN0IGhhc3NBdHRyaWJ1dGVVdGlsID0ge307XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IFtcbiAgICAnYmF0dGVyeScsXG4gICAgJ2NvbGQnLFxuICAgICdjb25uZWN0aXZpdHknLFxuICAgICdkb29yJyxcbiAgICAnZ2FyYWdlX2Rvb3InLFxuICAgICdnYXMnLFxuICAgICdoZWF0JyxcbiAgICAnbGlnaHQnLFxuICAgICdsb2NrJyxcbiAgICAnbW9pc3R1cmUnLFxuICAgICdtb3Rpb24nLFxuICAgICdtb3ZpbmcnLFxuICAgICdvY2N1cGFuY3knLFxuICAgICdvcGVuaW5nJyxcbiAgICAncGx1ZycsXG4gICAgJ3Bvd2VyJyxcbiAgICAncHJlc2VuY2UnLFxuICAgICdwcm9ibGVtJyxcbiAgICAnc2FmZXR5JyxcbiAgICAnc21va2UnLFxuICAgICdzb3VuZCcsXG4gICAgJ3ZpYnJhdGlvbicsXG4gICAgJ3dpbmRvdydcbiAgXSxcbiAgY292ZXI6IFsnZ2FyYWdlJ10sXG4gIHNlbnNvcjogW1xuICAgICdiYXR0ZXJ5JyxcbiAgICAnaHVtaWRpdHknLFxuICAgICdpbGx1bWluYW5jZScsXG4gICAgJ3RlbXBlcmF0dXJlJ1xuICBdLFxufTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gJ2pzb24nO1xuaGFzc0F0dHJpYnV0ZVV0aWwuQUREX1RZUEUgPSAna2V5LXZhbHVlJztcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUcgPSB7XG4gIHN0cmluZzogJ2hhLWN1c3RvbWl6ZS1zdHJpbmcnLFxuICBqc29uOiAnaGEtY3VzdG9taXplLXN0cmluZycsXG4gIGljb246ICdoYS1jdXN0b21pemUtaWNvbicsXG4gIGJvb2xlYW46ICdoYS1jdXN0b21pemUtYm9vbGVhbicsXG4gIGFycmF5OiAnaGEtY3VzdG9taXplLWFycmF5JyxcbiAgJ2tleS12YWx1ZSc6ICdoYS1jdXN0b21pemUta2V5LXZhbHVlJyxcbn07XG5cbi8vIEF0dHJpYnV0ZXMgaGVyZSBzZXJ2ZSBkdWFsIHB1cnBvc2U6XG4vLyAxKSBBbnkga2V5IG9mIHRoaXMgb2JqZWN0IHdvbid0IGJlIHNob3duIGluIG1vcmUtaW5mbyB3aW5kb3cuXG4vLyAyKSBBbnkga2V5IHdoaWNoIGhhcyB2YWx1ZSBvdGhlciB0aGFuIHVuZGVmaW5lZCB3aWxsIGFwcGVhciBpbiBjdXN0b21pemF0aW9uXG4vLyAgICBjb25maWcgYWNjb3JkaW5nIHRvIGl0cyB2YWx1ZS5cbmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPVxuICBoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTIHx8IHtcbiAgICBlbnRpdHlfcGljdHVyZTogdW5kZWZpbmVkLFxuICAgIGZyaWVuZGx5X25hbWU6IHsgdHlwZTogJ3N0cmluZycsIGRlc2NyaXB0aW9uOiAnTmFtZScgfSxcbiAgICBpY29uOiB7IHR5cGU6ICdpY29uJyB9LFxuICAgIGVtdWxhdGVkX2h1ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZG9tYWluczogWydlbXVsYXRlZF9odWUnXVxuICAgIH0sXG4gICAgZW11bGF0ZWRfaHVlX25hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZG9tYWluczogWydlbXVsYXRlZF9odWUnXVxuICAgIH0sXG4gICAgaGFhc2thX2hpZGRlbjogdW5kZWZpbmVkLFxuICAgIGhhYXNrYV9uYW1lOiB1bmRlZmluZWQsXG4gICAgaG9tZWJyaWRnZV9oaWRkZW46IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgaG9tZWJyaWRnZV9uYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiB1bmRlZmluZWQsXG4gICAgYXR0cmlidXRpb246IHVuZGVmaW5lZCxcbiAgICBjdXN0b21fdWlfbW9yZV9pbmZvOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICBkZXZpY2VfY2xhc3M6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBvcHRpb25zOiBoYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTLFxuICAgICAgZGVzY3JpcHRpb246ICdEZXZpY2UgY2xhc3MnLFxuICAgICAgZG9tYWluczogWydiaW5hcnlfc2Vuc29yJywgJ2NvdmVyJywgJ3NlbnNvciddXG4gICAgfSxcbiAgICBoaWRkZW46IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjcmlwdGlvbjogJ0hpZGUgZnJvbSBVSScgfSxcbiAgICBhc3N1bWVkX3N0YXRlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkb21haW5zOiBbJ3N3aXRjaCcsICdsaWdodCcsICdjb3ZlcicsICdjbGltYXRlJywgJ2ZhbicsICdncm91cCddXG4gICAgfSxcbiAgICBpbml0aWFsX3N0YXRlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRvbWFpbnM6IFsnYXV0b21hdGlvbiddXG4gICAgfSxcbiAgICB1bml0X29mX21lYXN1cmVtZW50OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGhhc3NBdHRyaWJ1dGVVdGlsO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSBmdW5jdGlvbihwcm9wKSB7IHJldHVybiBwcm9wOyB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi9ib290LmpzJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzdGF0aWMgc3RyaW5nIHZhbHVlIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGZpbHRlclxuICogc3RyaW5ncyBieSBhc3NldGluZyB0aGF0IHRoZXkgaGF2ZSBiZWVuIGNyZWF0ZWQgdmlhIHRoaXMgY2xhc3MuIFRoZVxuICogYHZhbHVlYCBwcm9wZXJ0eSByZXR1cm5zIHRoZSBzdHJpbmcgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuY2xhc3MgTGl0ZXJhbFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZykge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMudmFsdWUgPSBzdHJpbmcudG9TdHJpbmcoKTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBMaXRlcmFsU3RyaW5nIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBsaXRlcmFsVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFMaXRlcmFsU3RyaW5nfSAqLyh2YWx1ZSkudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLWxpdGVyYWwgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sTGl0ZXJhbCBmdW5jdGlvbjogJHt2YWx1ZX1gXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGh0bWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnQgfSAqLyh2YWx1ZSkuaW5uZXJIVE1MO1xuICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiBsaXRlcmFsVmFsdWUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi10ZW1wbGF0ZSB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWwgZnVuY3Rpb246ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHRlbXBsYXRlIGxpdGVyYWwgdGFnIHRoYXQgY3JlYXRlcyBhbiBIVE1MIDx0ZW1wbGF0ZT4gZWxlbWVudCBmcm9tIHRoZVxuICogY29udGVudHMgb2YgdGhlIHN0cmluZy5cbiAqXG4gKiBUaGlzIGFsbG93cyB5b3UgdG8gd3JpdGUgYSBQb2x5bWVyIFRlbXBsYXRlIGluIEphdmFTY3JpcHQuXG4gKlxuICogVGVtcGxhdGVzIGNhbiBiZSBjb21wb3NlZCBieSBpbnRlcnBvbGF0aW5nIGBIVE1MVGVtcGxhdGVFbGVtZW50YHMgaW5cbiAqIGV4cHJlc3Npb25zIGluIHRoZSBKYXZhU2NyaXB0IHRlbXBsYXRlIGxpdGVyYWwuIFRoZSBuZXN0ZWQgdGVtcGxhdGUnc1xuICogYGlubmVySFRNTGAgaXMgaW5jbHVkZWQgaW4gdGhlIGNvbnRhaW5pbmcgdGVtcGxhdGUuICBUaGUgb25seSBvdGhlclxuICogdmFsdWVzIGFsbG93ZWQgaW4gZXhwcmVzc2lvbnMgYXJlIHRob3NlIHJldHVybmVkIGZyb20gYGh0bWxMaXRlcmFsYFxuICogd2hpY2ggZW5zdXJlcyBvbmx5IGxpdGVyYWwgdmFsdWVzIGZyb20gSlMgc291cmNlIGV2ZXIgcmVhY2ggdGhlIEhUTUwsIHRvXG4gKiBndWFyZCBhZ2FpbnN0IFhTUyByaXNrcy5cbiAqXG4gKiBBbGwgb3RoZXIgdmFsdWVzIGFyZSBkaXNhbGxvd2VkIGluIGV4cHJlc3Npb25zIHRvIGhlbHAgcHJldmVudCBYU1NcbiAqIGF0dGFja3M7IGhvd2V2ZXIsIGBodG1sTGl0ZXJhbGAgY2FuIGJlIHVzZWQgdG8gY29tcG9zZSBzdGF0aWNcbiAqIHN0cmluZyB2YWx1ZXMgaW50byB0ZW1wbGF0ZXMuIFRoaXMgaXMgdXNlZnVsIHRvIGNvbXBvc2Ugc3RyaW5ncyBpbnRvXG4gKiBwbGFjZXMgdGhhdCBkbyBub3QgYWNjZXB0IGh0bWwsIGxpa2UgdGhlIGNzcyB0ZXh0IG9mIGEgYHN0eWxlYFxuICogZWxlbWVudC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT46aG9zdHsgY29udGVudDpcIi4uLlwiIH08L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3RoaXMucGFydGlhbFRlbXBsYXRlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBwYXJ0aWFsVGVtcGxhdGUoKSB7IHJldHVybiBodG1sYDxzcGFuPlBhcnRpYWwhPC9zcGFuPmA7IH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFIVE1MVGVtcGxhdGVFbGVtZW50fSBDb25zdHJ1Y3RlZCBIVE1MVGVtcGxhdGVFbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gZnVuY3Rpb24gaHRtbChzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBodG1sVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgcmV0dXJuIHRlbXBsYXRlO1xufTtcblxuLyoqXG4gKiBBbiBodG1sIGxpdGVyYWwgdGFnIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgaHRtbGAgdG8gY29tcG9zZS5cbiAqIGEgbGl0ZXJhbCBzdHJpbmcuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+XG4gKiAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuICogICAgICAgICAgICR7dGhpcy5zdHlsZVRlbXBsYXRlKCl9XG4gKiAgICAgICAgIDwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7c3RhdGljVmFsdWV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XG4gKiAgICAgICAgcmV0dXJuIGh0bWxMaXRlcmFsYC5zaGFkb3dlZCB7IGJhY2tncm91bmQ6IGdyYXk7IH1gO1xuICogICAgIH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFMaXRlcmFsU3RyaW5nfSBDb25zdHJ1Y3RlZCBsaXRlcmFsIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgaHRtbExpdGVyYWwgPSBmdW5jdGlvbihzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBMaXRlcmFsU3RyaW5nKHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgbGl0ZXJhbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSkpO1xufTtcbiIsImltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEN1aUJhc2VFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICBleHRyYToge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaikge1xuICAgIGxldCBleHRyYXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2RhdGFfdGVtcGxhdGU7XG4gICAgaWYgKGV4dHJhcykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dHJhcykpIHtcbiAgICAgICAgZXh0cmFzID0gW2V4dHJhc107XG4gICAgICB9XG4gICAgICByZXR1cm4gZXh0cmFzLm1hcChleHRyYSA9PiB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICBleHRyYSxcbiAgICAgICAgaGFzcyxcbiAgICAgICAgaGFzcy5zdGF0ZXMsXG4gICAgICAgIHN0YXRlT2JqLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgICAvKiBhdHRyaWJ1dGU9ICovIHVuZGVmaW5lZCxcbiAgICAgICAgc3RhdGVPYmouc3RhdGUsXG4gICAgICApKS5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdCAhPT0gbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHNob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZXh0cmEubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICEhc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZDtcbiAgfVxuXG4gIGhhc0V4dHJhKGV4dHJhKSB7XG4gICAgcmV0dXJuIGV4dHJhLmxlbmd0aCA+IDA7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEN1aUJhc2VFbGVtZW50O1xuIiwiaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBEeW5hbWljRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGVsZW1lbnROYW1lOiBTdHJpbmcsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpJyxcbiAgICBdO1xuICB9XG5cbiAgb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpIHtcbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgZWxlbWVudE5hbWUgPyBlbGVtZW50TmFtZS50b1VwcGVyQ2FzZSgpIDogJ0RJVicsXG4gICAgICB7IGhhc3MsIHN0YXRlT2JqLCBpbkRpYWxvZyB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLWVsZW1lbnQnLCBEeW5hbWljRWxlbWVudCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuXG5pbXBvcnQgJy4vZHluYW1pYy1lbGVtZW50LmpzJztcbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG5jdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnc3RhdGUtY2FyZC1kaXNwbGF5JykudGhlbigoKSA9PiB7XG4gIC8qKlxuICAgKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICAgKi9cbiAgY2xhc3MgRHluYW1pY1dpdGhFeHRyYSBleHRlbmRzIGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtY2FyZC1kaXNwbGF5Jykge1xuICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2wtd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAtNHB4IC0xNnB4IC00cHggMDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1zdGF0ZS1sYWJlbC1iYWRnZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBkeW5hbWljLWVsZW1lbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgICNvdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgI2xvY2sge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICAgICAgI2xvY2suaGEtY292ZXItY29udHJvbHMge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuZXh0cmEge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgICAgIC0taGEtbGFiZWwtYmFkZ2Utc2l6ZTogMzZweDtcbiAgICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcyQ9J1tbZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpXV0gaG9yaXpvbnRhbCBsYXlvdXQnPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbZXh0cmFPYmpWaXNpYmxlXV0nPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCdcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9J1tbZXh0cmFPYmpdXSdcbiAgICAgICAgICAgICAgICAgICAgb24tZG9tLWNoYW5nZT0nZXh0cmFEb21DaGFuZ2VkJz5cbiAgICAgICAgICAgIDxoYS1zdGF0ZS1sYWJlbC1iYWRnZSBoYXNzPSdbW2hhc3NdXScgc3RhdGU9J1tbaXRlbV1dJz48L2hhLXN0YXRlLWxhYmVsLWJhZGdlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkeW5hbWljLWVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGNsYXNzPSdmbGV4J1xuICAgICAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgICAgICAgZWxlbWVudC1uYW1lPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgICAgICA8L2R5bmFtaWMtZWxlbWVudD5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2lzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3ZlcmxheVwiIG9uLWNsaWNrPSdjbGlja0hhbmRsZXInPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2tdXSc+XG4gICAgICAgICAgICAgICAgICAgIDxpcm9uLWljb24gaWQ9XCJsb2NrXCIgY2xhc3MkPVwiW1tjb250cm9sRWxlbWVudF1dXCIgaWNvbj1cIm1kaTpsb2NrLW91dGxpbmVcIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0ZSc+W1tjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNzOiBPYmplY3QsXG4gICAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICAgIGV4dHJhT2JqOiB7XG4gICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIF9hdHRhY2hlZCknLFxuICAgICAgICB9LFxuICAgICAgICBfYXR0YWNoZWQ6IEJvb2xlYW4sXG4gICAgICAgIGV4dHJhT2JqVmlzaWJsZToge1xuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZyknLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgYXR0YWNoZWQpIHtcbiAgICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZSB8fCAhYXR0YWNoZWQpIHJldHVybiBbXTtcbiAgICAgIGxldCBleHRyYUJhZGdlcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfYmFkZ2U7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFCYWRnZXMpKSB7XG4gICAgICAgIGV4dHJhQmFkZ2VzID0gW2V4dHJhQmFkZ2VzXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHRyYUJhZGdlcy5tYXAoKGV4dHJhQmFkZ2UpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIGlmIChleHRyYUJhZGdlLmVudGl0eV9pZCAmJiBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0pIHtcbiAgICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0sIHRoaXMuaW5EaWFsb2csXG4gICAgICAgICAgICAvKiBhbGxvd0hpZGRlbj0gKi9mYWxzZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGV4dHJhQmFkZ2UuYXR0cmlidXRlICYmXG4gICAgICAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgIHN0YXRlOiBTdHJpbmcoc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0pLFxuICAgICAgICAgICAgZW50aXR5X2lkOiAnbm9uZS5ub25lJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgdW5pdF9vZl9tZWFzdXJlbWVudDogZXh0cmFCYWRnZS51bml0IH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGxldCBibGFja2xpc3QgPSBleHRyYUJhZGdlLmJsYWNrbGlzdF9zdGF0ZXM7XG4gICAgICAgIGlmIChibGFja2xpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShibGFja2xpc3QpKSB7XG4gICAgICAgICAgICBibGFja2xpc3QgPSBbYmxhY2tsaXN0XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGJsYWNrbGlzdC5zb21lKHYgPT4gUmVnRXhwKHYpLnRlc3QocmVzdWx0LnN0YXRlLnRvU3RyaW5nKCkpKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5fZW50aXR5RGlzcGxheSA9ICcnO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSkuZmlsdGVyKGV4dHJhQmFkZ2UgPT4gZXh0cmFCYWRnZSAhPSBudWxsKTtcbiAgICB9XG5cbiAgICBjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZykge1xuICAgICAgaWYgKGluRGlhbG9nIHx8ICFleHRyYU9iaikgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGV4dHJhT2JqLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSkge1xuICAgICAgcmV0dXJuIGV4dHJhT2JqVmlzaWJsZSA/ICdleHRyYScgOiAnJztcbiAgICB9XG5cbiAgICBfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhpZGVfY29udHJvbDtcbiAgICB9XG5cbiAgICBjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKSB7XG4gICAgICAvLyBoYUxvY2FsaXplIHJlbW92ZWQgaW4gMC42MVxuICAgICAgcmV0dXJuIHN1cGVyLmNvbXB1dGVTdGF0ZURpc3BsYXkodGhpcy5oYUxvY2FsaXplIHx8IHRoaXMubG9jYWxpemUsIHN0YXRlT2JqKTtcbiAgICB9XG5cbiAgICBpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9scyB8fFxuICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2s7XG4gICAgfVxuXG4gICAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICBjb25zdCBsb2NrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2NrJyk7XG4gICAgICBpZiAobG9jaykge1xuICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3Blbi1vdXRsaW5lJztcbiAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJzAuMSc7XG4gICAgICB9XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3V0bGluZSc7XG4gICAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwMDApO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBhcHBseVRoZW1lcyhoYXNzLCBlbGVtZW50LCBzdGF0ZU9iaikge1xuICAgICAgY29uc3QgdGhlbWVOYW1lID0gc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCc7XG4gICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgZWxlbWVudCwgaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgdGhlbWVOYW1lKTtcbiAgICB9XG5cbiAgICBleHRyYURvbUNoYW5nZWQoKSB7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKVxuICAgICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwbHlUaGVtZXModGhpcy5oYXNzLCBlbGVtLCBlbGVtLnN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy13aXRoLWV4dHJhJywgRHluYW1pY1dpdGhFeHRyYSk7XG59KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgRXZlbnRzTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2V2ZW50cy1taXhpbi5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbVVpIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lci5FbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPjwvc3R5bGU+XG4gICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPSdtZGk6YXJyb3ctbGVmdCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdfYmFja0hhbmRsZXInXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPGRpdiBtYWluLXRpdGxlPkN1c3RvbSBVSSBzZXR0aW5nczwvZGl2PlxuICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT0nW1tpc1dpZGVdXSc+XG4gICAgICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9J0RldmljZSBuYW1lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgU2V0IGRldmljZSBuYW1lIHNvIHRoYXQgeW91IGNhbiByZWZlcmVuY2UgaXQgaW4gcGVyLWRldmljZSBzZXR0aW5nc1xuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPSdOYW1lJ1xuICAgICAgICAgICAgICB2YWx1ZT0ne3tuYW1lfX0nXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wYXBlci1jYXJkPlxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnbmFtZUNoYW5nZWQnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLm5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICB9XG5cbiAgbmFtZUNoYW5nZWQobmFtZSkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5zZXROYW1lKG5hbWUpO1xuICB9XG5cbiAgX2JhY2tIYW5kbGVyKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB0aGlzLmZpcmUoJ2xvY2F0aW9uLWNoYW5nZWQnKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS1jb25maWctY3VzdG9tLXVpJywgSGFDb25maWdDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhVGhlbWVkU2xpZGVyIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0taGEtdGhlbWVkLXNsaWRlci1tYXJnaW4sIGluaXRpYWwpO1xuICAgICAgfVxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXItcGluLXN0YXJ0LWNvbG9yOiAgdmFyKC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbi5pcy1vbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXNsaWRlciB7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWhhLXBhcGVyLXNsaWRlci13aWR0aCwgMjAwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItc2xpZGVyXG4gICAgICAgICBtaW49J1tbX3RoZW1lZE1pbl1dJ1xuICAgICAgICAgbWF4PSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1heFwiLCBtYXgpXV0nXG4gICAgICAgICBwaW49J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwicGluXCIsIHBpbildXSdcbiAgICAgICAgIGNsYXNzJD0nW1tjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIF90aGVtZWRNaW4pXV0nIHZhbHVlPSdbW3ZhbHVlXV0nXG4gICAgICAgICBvbi1jaGFuZ2U9J3ZhbHVlQ2hhbmdlZCc+XG4gICAgPC9wYXBlci1zbGlkZXI+XG4gICAgYDtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbiA9ICF0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoaXMudGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbik7XG4gICAgdGhpcy5jb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoaXMudGhlbWUsIHRoaXMuZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgIH0sXG4gICAgICBwaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlzT246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICB0aGVtZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX3RoZW1lZE1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWluXCIsIG1pbiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpJyxcbiAgICBdO1xuICB9XG5cbiAgY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKSB7XG4gICAgdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkID0gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZShcbiAgICAgIHRoZW1lLCAncmVwb3J0X3doZW5fbm90X2NoYW5nZWQnLCAhZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBhdHRyLCBkZWYpIHtcbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGlmIChhdHRyIGluIHRoZW1lKSB7XG4gICAgICAgIHJldHVybiB0aGVtZVthdHRyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgdGhlbWVkTWluKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChpc09uKSB7XG4gICAgICByZXN1bHQgKz0gJ2lzLW9uICc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pIHx8IHRoZW1lZE1pbiA9PT0gMCkge1xuICAgICAgLy8gSWYgb2ZmV2hlbk1pbiBpcyBlbmFibGVkIGRvbid0IGN1c3RvbWl6ZS5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3Jlc3VsdH1kaXNhYmxlLW9mZi13aGVuLW1pbmA7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCAmJiB0aGlzLnZhbHVlID09PSBldi50YXJnZXQudmFsdWUpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLXRoZW1lZC1zbGlkZXInLCBIYVRoZW1lZFNsaWRlcik7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcbmltcG9ydCBzdGF0ZUNhcmRUeXBlIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfY2FyZF90eXBlLmpzJztcblxuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyc7XG5cbmNvbnN0IFNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTID0gWydjb25maWd1cmF0b3InXTtcbmNvbnN0IERPTUFJTl9UT19TTElERVJfU1VQUE9SVCA9IHtcbiAgbGlnaHQ6IDEsIC8vIFNVUFBPUlRfQlJJR0hUTkVTU1xuICBjb3ZlcjogNCwgLy8gU1VQUE9SVF9TRVRfUE9TSVRJT05cbiAgY2xpbWF0ZTogMSwgLy8gU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbn07XG5jb25zdCBUWVBFX1RPX0NPTlRST0wgPSB7XG4gIHRvZ2dsZTogJ2hhLWVudGl0eS10b2dnbGUnLFxuICBkaXNwbGF5OiAnJyxcbiAgY292ZXI6ICdoYS1jb3Zlci1jb250cm9scycsXG59O1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZEN1c3RvbVVpIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiknLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gJ0RJVicgJiZcbiAgICAgICAgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykgfHwgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2hpbGQtY2FyZCcpKSkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAvLyBTaW5jZSB0aGlzIGRvZXNuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIC0gbm8gbmVlZCB0byBjbGVhciBpdC5cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLCAndmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCBpbmhlcml0KScpO1xuXG4gICAgICAvLyBQb2x5ZmlsbCAndXBkYXRlU3R5bGVzJy5cbiAgICAgIGlmICghY29udGFpbmVyLnVwZGF0ZVN0eWxlcykge1xuICAgICAgICBjb250YWluZXIudXBkYXRlU3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBzdHlsZXNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VkKHRoaXMuaGFzcywgdGhpcy5pbkRpYWxvZywgdGhpcy5zdGF0ZU9iaik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICB0aGlzLl9jb250YWluZXIsIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgJ2RlZmF1bHQnKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBiYWRnZU1vZGUoaGFzcywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIGNvbnN0IHN0YXRlcyA9IFtdO1xuICAgIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbaWRdO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBJRCAke2lkfSBpbiBncm91cCAke3N0YXRlT2JqLmVudGl0eV9pZH1gKTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0IHx8XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0LmluY2x1ZGVzKHN0YXRlLmVudGl0eV9pZCkpIHtcbiAgICAgICAgICBzdGF0ZXMucHVzaCh3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBzdGF0ZSwgZmFsc2UgLyogaW5EaWFsb2cgKi8sIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZU9iaik7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykpIHtcbiAgICAgICAgICBwYXJhbXMubWFyZ2luID0gJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLW1hcmdpbiwgMCknO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAnSEEtQkFER0VTLUNBUkQnLFxuICAgICAgeyBoYXNzLCBzdGF0ZXMgfSk7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIHdpZHRoOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtd2lkdGgsIGluaXRpYWwpJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtdGV4dC1hbGlnbiwgaW5pdGlhbCknLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubGFzdENoaWxkLnN0eWxlLmZvbnRTaXplID0gJzg1JSc7XG5cbiAgICAvLyBTaW5jZSB0aGlzIHZhcmlhYmxlIG9ubHkgYWZmZWN0cyBiYWRnZXMgbW9kZSAtIG5vIG5lZWQgdG8gY2xlYW4gaXQgdXAuXG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oYS1zdGF0ZS1sYWJlbC1iYWRnZS1tYXJnaW4tYm90dG9tJywgJzAnKTtcbiAgfVxuXG4gIGNsZWFuQmFkZ2VTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnIH0pO1xuICB9XG5cbiAgYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopIHtcbiAgICBsZXQgdGhlbWVUYXJnZXQgPSB0aGlzO1xuICAgIGxldCB0aGVtZU5hbWUgPSAnZGVmYXVsdCc7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhlbWVUYXJnZXQgPSB0aGlzLl9jb250YWluZXI7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICB0aGVtZU5hbWUgPSBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lO1xuICAgIH1cbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgIHRoZW1lVGFyZ2V0LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgbWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSB7XG4gICAgaWYgKCFtb2RpZmllZE9iaikge1xuICAgICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNsaWRlckVsaWdpYmxlXyhkb21haW4sIG9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiZcbiAgICAgIChET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmIG9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykgJiZcbiAgICAgIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAmJiBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgIT09ICduby1zbGlkZXInO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MgfHwgIXRoaXMuX2lzQXR0YWNoZWQpIHJldHVybjtcbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICAgIGNvbnN0IG1vZGlmaWVkT2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgdGhpcywgc3RhdGVPYmosIGluRGlhbG9nLCB0cnVlIC8qIGFsbG93SGlkZGVuICovKTtcblxuICAgIGlmICh0aGlzLm1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikpIHJldHVybjtcblxuICAgIHRoaXMuYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopO1xuXG4gICAgaWYgKCFpbkRpYWxvZyAmJiBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSA9PT0gJ2JhZGdlcycpIHtcbiAgICAgIHRoaXMuYmFkZ2VNb2RlKGhhc3MsIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfVxuICB9XG5cbiAgcmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgdGhpcy5jbGVhbkJhZGdlU3R5bGUoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGhhc3MsXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIGluRGlhbG9nLFxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxTdGF0ZUNhcmRUeXBlID0gc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaik7XG4gICAgbGV0IGN1c3RvbVN0YXRlQ2FyZFR5cGU7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5O1xuXG4gICAgaWYgKGRvbWFpbiA9PT0gJ2xpZ2h0JyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gICAgICAgIHNlcnZpY2VNaW46ICd0dXJuX29mZicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICd0dXJuX29uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnYnJpZ2h0bmVzcycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY292ZXItY29udHJvbHMnLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ2Nsb3NlX2NvdmVyJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF9jb3Zlcl9wb3NpdGlvbicsXG4gICAgICAgIHNldFZhbHVlTmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnY3VycmVudF9wb3NpdGlvbicsXG4gICAgICAgIG5hbWVPbjogJ29wZW4nLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjbGltYXRlJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY2xpbWF0ZS1zdGF0ZScsXG4gICAgICAgIG1pbjogc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcCB8fCAtMTAwLFxuICAgICAgICBtYXg6IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXAgfHwgMjAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHZhbHVlTmFtZTogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgbmFtZU9uOiAnJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV07XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZCAmJlxuICAgICAgICAgICAgICAgIVNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTLmluY2x1ZGVzKG9yaWdpbmFsU3RhdGVDYXJkVHlwZSkpIHtcbiAgICAgIHBhcmFtcy5pbkRpYWxvZyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gJyc7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudDtcbiAgICB9XG5cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgKHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgfHwgY3VzdG9tU3RhdGVDYXJkVHlwZSB8fCBgU1RBVEUtQ0FSRC0ke29yaWdpbmFsU3RhdGVDYXJkVHlwZX1gKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcGFyYW1zKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLWN1c3RvbS11aScsIFN0YXRlQ2FyZEN1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuaW1wb3J0ICcuL2hhLXRoZW1lZC1zbGlkZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLnNlY29uZC1saW5lLCAuc3RhdGUtYW5kLXRvZ2dsZSwgLnN0YXRlLWluZm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1hbmQtdG9nZ2xlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc2Vjb25kLWxpbmUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kLWxpbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgIH1cbiAgICAgIC5zdHJldGNoIC5zZWNvbmQtbGluZSwgLnN0cmV0Y2ggaGEtdGhlbWVkLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWhhLXBhcGVyLXNsaWRlci13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWluZm8ge1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICBoYS10aGVtZWQtc2xpZGVyLCAudG9wLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAudG9wLXdyYXBwZXIuc3RyZXRjaCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcyQ9J2hvcml6b250YWwgbGF5b3V0IGZsZXggdG9wLXdyYXBwZXIgW1tfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpXV0nPlxuICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkIGZsZXgtYXV0byBzdGF0ZS1hbmQtdG9nZ2xlJz5cbiAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvIGZsZXgtYXV0bydcbiAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2JyZWFrU2xpZGVyXV0nIGNsYXNzPSdoaWRkZW4nPlxuICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc2hvd1NsaWRlcl1dJyByZXN0YW1wPlxuICAgICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBmbGV4LWF1dG8gZW5kLWp1c3RpZmllZCBzZWNvbmQtbGluZSc+XG4gICAgICAgICAgPGhhLXRoZW1lZC1zbGlkZXJcbiAgICAgICAgICAgIGlkPSdzbGlkZXInXG4gICAgICAgICAgICBtYXg9W1ttYXhdXVxuICAgICAgICAgICAgbWluPVtbbWluXV1cbiAgICAgICAgICAgIHRoZW1lPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuc2xpZGVyX3RoZW1lXV0nXG4gICAgICAgICAgICBpcy1vbj0nW1tpc09uKHN0YXRlT2JqLCBuYW1lT24pXV0nXG4gICAgICAgICAgICB2YWx1ZT0ne3tzbGlkZXJWYWx1ZX19J1xuICAgICAgICAgICAgZGlzYWJsZS1vZmYtd2hlbi1taW49J3t7ZGlzYWJsZU9mZldoZW5NaW59fSdcbiAgICAgICAgICAgIG9uLWNoYW5nZT0nc2xpZGVyQ2hhbmdlZCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdzdG9wUHJvcGFnYXRpb24nPlxuICAgICAgICAgIDwvaGEtdGhlbWVkLXNsaWRlcj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWJyZWFrU2xpZGVyXV0nPlxuICAgICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1pbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1heDogU3RyaW5nLFxuICAgICAgdmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICBzZXRWYWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIG5hbWVPbjogeyB0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb24nIH0sXG4gICAgICBtaW46IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMCB9LFxuICAgICAgbWF4OiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDI1NSB9LFxuXG4gICAgICBzbGlkZXJWYWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiBCb29sZWFuLFxuICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgc3RyZXRjaFNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYnJlYWtTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGhpZGVTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGxpbmVUb29Mb25nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBtaW5MaW5lQnJlYWs6IE51bWJlcixcbiAgICAgIG1heExpbmVCcmVhazogTnVtYmVyLFxuICAgICAgc2hvd1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX29uSXJvblJlc2l6ZSA9IHRoaXMuX29uSXJvblJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5faXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKScsXG4gICAgXTtcbiAgfVxuXG4gIF93YWl0Rm9yTGF5b3V0KCkge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0ZWQpIHJldHVybjtcbiAgICB0aGlzLl9zZXRNb2RlKCk7XG4gICAgaWYgKHRoaXMuX2ZyYW1lSWQpIHJldHVybjtcbiAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gZmFsc2U7XG4gICAgdGhpcy5fZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uSXJvblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldE1vZGUoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgaGlkZVNsaWRlcjogdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInICYmIHRoaXMubGluZVRvb0xvbmcsXG4gICAgICBicmVha1NsaWRlcjpcbiAgICAgICAgICAgKHRoaXMubW9kZSA9PT0gJ2JyZWFrLXNsaWRlcicgfHwgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSAmJlxuICAgICAgICAgICB0aGlzLmxpbmVUb29Mb25nLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLnNob3dTbGlkZXIpIHtcbiAgICAgIG9iai5icmVha1NsaWRlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICB9XG5cbiAgX29uSXJvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVhZHlUb0NvbXB1dGUpIHJldHVybjtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbm8tc2xpZGVyJykge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgaGlkZVNsaWRlcjogdHJ1ZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldkJyZWFrU2xpZGVyID0gdGhpcy5icmVha1NsaWRlcjtcbiAgICBjb25zdCBwcmV2SGlkZVNsaWRlciA9IHRoaXMuaGlkZVNsaWRlcjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuJDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPT09IDApIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPD0gdGhpcy5taW5MaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyV2lkdGggPj0gdGhpcy5tYXhMaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZIaWRlU2xpZGVyICYmIHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHVuaGlkZSB0aGUgc2xpZGVyIGluIG9yZGVyIHRvIHJlY2FsY3VsYXRlIGhlaWdodC5cbiAgICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgc3RhdGVIZWlnaHQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnN0YXRlLWluZm8nKS5jbGllbnRIZWlnaHQ7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gY29udGFpbmVySGVpZ2h0ID4gc3RhdGVIZWlnaHQgKiAxLjU7XG4gICAgICBpZiAodGhpcy5saW5lVG9vTG9uZykge1xuICAgICAgICB0aGlzLm1pbkxpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgfSBlbHNlIGlmICghcHJldkJyZWFrU2xpZGVyKSB7XG4gICAgICAgIHRoaXMubWF4TGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgfVxuXG4gIF9jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZS1saW5lJykge1xuICAgICAgcmV0dXJuICdub3dyYXAnO1xuICAgIH1cbiAgICBpZiAoc3RyZXRjaFNsaWRlciAmJiBsaW5lVG9vTG9uZykge1xuICAgICAgcmV0dXJuICdzdHJldGNoIHdyYXAnO1xuICAgIH1cbiAgICByZXR1cm4gJ3dyYXAnO1xuICB9XG5cbiAgX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKSB7XG4gICAgaWYgKGluRGlhbG9nIHx8IGhpZGVTbGlkZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBjb25zdCBwYXJhbSA9IHsgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9O1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm47XG4gICAgbGV0IHRhcmdldCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVyJyk7XG4gICAgaWYgKGV2LnRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAvLyBObyBTaGFkb3cgRE9NIC0gd2UgaGF2ZSBhY2Nlc3MgdG8gb3JpZ2luYWwgdGFyZ2V0LlxuICAgICAgKHsgdGFyZ2V0IH0gPSBldik7XG4gICAgfSBlbHNlIGlmIChldi5wYXRoKSB7XG4gICAgICBbdGFyZ2V0XSA9IGV2LnBhdGg7XG4gICAgfSBlbHNlIGlmIChldi5jb21wb3NlZFBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gMCB8fCAodmFsdWUgPD0gdGFyZ2V0Lm1pbiAmJiAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikpIHtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWluLCBwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtW3RoaXMuc2V0VmFsdWVOYW1lIHx8IHRoaXMudmFsdWVOYW1lXSA9IHZhbHVlO1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNYXgsIHBhcmFtKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgc2xpZGVyVmFsdWU6IHRoaXMuaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSA/IHN0YXRlT2JqLmF0dHJpYnV0ZXNbdmFsdWVOYW1lXSA6IDAsXG4gICAgfTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB7XG4gICAgICAgIG1pbkxpbmVCcmVhazogMCxcbiAgICAgICAgbWF4TGluZUJyZWFrOiA5OTksXG4gICAgICAgIGhpZGVTbGlkZXI6IGZhbHNlLFxuICAgICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgICAgbW9kZTogc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUsXG4gICAgICAgIHN0cmV0Y2hTbGlkZXI6ICEhc3RhdGVPYmouYXR0cmlidXRlcy5zdHJldGNoX3NsaWRlcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBpc09uKHN0YXRlT2JqLCBuYW1lT24pIHtcbiAgICByZXR1cm4gc3RhdGVPYmogJiYgKCFuYW1lT24gfHwgc3RhdGVPYmouc3RhdGUgPT09IG5hbWVPbik7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJywgU3RhdGVDYXJkV2l0aFNsaWRlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkJz5cbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYVxuICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJ1xuICAgICAgICAgIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz5cbiAgICAgIDwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIpO1xuIiwiLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuZXhwb3J0IGRlZmF1bHQgKHN1cGVyQ2xhc3MpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBFdmVudHNNaXhpbiBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAgICogICBwYXlsb2FkLlxuICAgICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICAqL1xuICAgIGZpcmUodHlwZSwgZGV0YWlsID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgICAgICBidWJibGVzOiBvcHRpb25zLmJ1YmJsZXMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IEJvb2xlYW4ob3B0aW9ucy5jYW5jZWxhYmxlKSxcbiAgICAgICAgY29tcG9zZWQ6IG9wdGlvbnMuY29tcG9zZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmNvbXBvc2VkLFxuICAgICAgfSk7XG4gICAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgICBjb25zdCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IHRoaXM7XG4gICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRzTWl4aW47XG59O1xuIiwiaW1wb3J0IGhhc3NBdHRyaWJ1dGVzVXRpbCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsLmpzJztcblxud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsIHx8IHt9O1xuY29uc3QgU1VQUE9SVEVEX1NMSURFUl9NT0RFUyA9IFtcbiAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG5dO1xuXG5jb25zdCBjdXN0b21VaUF0dHJpYnV0ZXMgPSB7XG4gIGdyb3VwOiB1bmRlZmluZWQsXG4gIGRldmljZTogdW5kZWZpbmVkLFxuICB0ZW1wbGF0ZXM6IHVuZGVmaW5lZCxcbiAgc3RhdGU6IHVuZGVmaW5lZCxcbiAgX3N0YXRlRGlzcGxheTogdW5kZWZpbmVkLFxuICBjb250cm9sX2VsZW1lbnQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgc3RhdGVfY2FyZF9tb2RlOiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBsaWdodDogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY292ZXI6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNsaW1hdGU6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgICcqJzogWydiYWRnZXMnXSxcbiAgICB9LFxuICB9LFxuICBzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgYmFkZ2VzX2xpc3Q6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHNob3dfbGFzdF9jaGFuZ2VkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2NvbnRyb2w6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGV4dHJhX2RhdGFfdGVtcGxhdGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgZXh0cmFfYmFkZ2U6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHN0cmV0Y2hfc2xpZGVyOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBzbGlkZXJfdGhlbWU6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHRoZW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGNvbmZpcm1fY29udHJvbHM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2luX2RlZmF1bHRfdmlldzogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaWNvbl9jb2xvcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxufTtcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZXNVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVM7XG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gaGFzc0F0dHJpYnV0ZXNVdGlsLlVOS05PV05fVFlQRTtcbk9iamVjdC5hc3NpZ24od2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGN1c3RvbVVpQXR0cmlidXRlcyk7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldFZpZXdFbnRpdGllcyBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF92aWV3X2VudGl0aWVzLmpzJztcblxuaW1wb3J0ICcuLi9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzJztcbmltcG9ydCBWRVJTSU9OIGZyb20gJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgJy4vaGFzcy1hdHRyaWJ1dGUtdXRpbC5qcyc7XG5cbndpbmRvdy5jdXN0b21VSSA9IHdpbmRvdy5jdXN0b21VSSB8fCB7XG4gIFNVUFBPUlRFRF9TTElERVJfTU9ERVM6IFtcbiAgICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbiAgXSxcblxuICBkb21Ib3N0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gZG9jdW1lbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtLmdldFJvb3ROb2RlKCk7XG4gICAgcmV0dXJuIChyb290IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyAvKiogQHR5cGUge1NoYWRvd1Jvb3R9ICovIChyb290KS5ob3N0IDogcm9vdDtcbiAgfSxcblxuICBsaWdodE9yU2hhZG93KGVsZW0sIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGVsZW0uc2hhZG93Um9vdCA/XG4gICAgICBlbGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOlxuICAgICAgZWxlbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfSxcblxuICBnZXRFbGVtZW50SGllcmFyY2h5KHJvb3QsIGhpZXJhcmNoeSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlbGVtID0gaGllcmFyY2h5LnNoaWZ0KCk7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3cocm9vdCwgZWxlbSksIGhpZXJhcmNoeSk7XG4gICAgfVxuICAgIHJldHVybiByb290O1xuICB9LFxuXG4gIGdldENvbnRleHQoZWxlbSkge1xuICAgIGlmIChlbGVtLl9jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW0uX2NvbnRleHQgPSBbXTtcbiAgICAgIGZvciAobGV0IGVsZW1lbnQgPSAoZWxlbS50YWdOYW1lID09PSAnSEEtRU5USVRJRVMtQ0FSRCcgPyB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtKSA6IGVsZW0pO1xuICAgICAgICBlbGVtZW50OyBlbGVtZW50ID0gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbWVudCkpIHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICBjYXNlICdIQS1FTlRJVElFUy1DQVJEJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5KSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50Lmdyb3VwRW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkgPT09IGZhbHNlICYmIGVsZW1lbnQuc3RhdGVzICYmIGVsZW1lbnQuc3RhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goYGdyb3VwLiR7Y29tcHV0ZVN0YXRlRG9tYWluKGVsZW1lbnQuc3RhdGVzWzBdKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ01PUkUtSU5GTy1HUk9VUCc6XG4gICAgICAgICAgY2FzZSAnU1RBVEUtQ0FSRC1DT05URU5UJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LnN0YXRlT2JqLmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIQS1DQVJEUyc6XG4gICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpIHx8ICdkZWZhdWx0X3ZpZXcnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbS5fY29udGV4dC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtLl9jb250ZXh0O1xuICB9LFxuXG4gIGZpbmRNYXRjaChrZXksIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHJldHVybiBudWxsO1xuICAgIGlmIChvcHRpb25zW2tleV0pIHJldHVybiBrZXk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbmQob3B0aW9uID0+IGtleS5tYXRjaChgXiR7b3B0aW9ufSRgKSk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2gobmFtZSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VbbWF0Y2hdKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0Q29udGV4dChlbGVtKTtcbiAgICBpZiAoIWNvbnRleHQpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCkge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG4gICAgY29udGV4dC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKGMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYXR0cmlidXRlcywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBfc2V0S2VlcChvYmosIHZhbHVlKSB7XG4gICAgaWYgKG9iai5fY3VpX2tlZXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gb2JqLl9jdWlfa2VlcCAmJiB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFhdHRyaWJ1dGVzLnRlbXBsYXRlcykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCB0cnVlKTtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgbmV3QXR0cmlidXRlcyA9IHt9O1xuICAgIGxldCBoYXNHbG9iYWwgPSBmYWxzZTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMudGVtcGxhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gYXR0cmlidXRlcy50ZW1wbGF0ZXNba2V5XTtcbiAgICAgIGlmICh0ZW1wbGF0ZS5tYXRjaCgvXFxiKGVudGl0aWVzfGhhc3MpXFxiLykpIHtcbiAgICAgICAgaGFzR2xvYmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgdGVtcGxhdGUsIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMsXG4gICAgICAgIChzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzICYmIHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXNba2V5XSkgfHxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSxcbiAgICAgICAgc3RhdGVPYmoudW50ZW1wbGF0ZWRfc3RhdGUgfHwgc3RhdGVPYmouc3RhdGUpO1xuICAgICAgLy8gSW4gY2FzZSBvZiBudWxsIGRvbid0IHNldCB0aGUgdmFsdWUuXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgIG5ld0F0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ3N0YXRlJykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLnN0YXRlKSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnX3N0YXRlRGlzcGxheScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5KSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IGF0dHJpYnV0ZXNba2V5XSkge1xuICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosICFoYXNHbG9iYWwpO1xuICAgIGlmICghaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcyA9PT0gYXR0cmlidXRlcykge1xuICAgICAgLy8gV2UgYXJlIG9wZXJhdGluZyBvbiByZWFsIGF0dHJpYnV0ZXMuIFJlcGxhY2UgdGhlbS5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIG5ld0F0dHJpYnV0ZXMpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnc3RhdGUnKSkge1xuICAgICAgICBpZiAobmV3QXR0cmlidXRlcy5zdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5zdGF0ZSA9IFN0cmluZyhuZXdBdHRyaWJ1dGVzLnN0YXRlKTtcbiAgICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGUgPSBzdGF0ZU9iai5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnX3N0YXRlRGlzcGxheScpKSB7XG4gICAgICAgIHJlc3VsdC5fc3RhdGVEaXNwbGF5ID0gbmV3QXR0cmlidXRlcy5fc3RhdGVEaXNwbGF5O1xuICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5ID0gc3RhdGVPYmouX3N0YXRlRGlzcGxheTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChyZXN1bHQsICFoYXNHbG9iYWwpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gT3BlcmF0aW5nIG9uIGNvbnRleHQtYXdhcmUgYXR0cmlidXRlcy4gUmV0dXJuIHNoYWxsb3cgY29weSBvZiBvYmplY3QuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmopIHtcbiAgICBjb25zdCBuZXdSZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIHN0YXRlT2JqLmF0dHJpYnV0ZXMpO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGVzKG9iaikge1xuICAgICAgaWYgKCFvYmopIHJldHVybjtcbiAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgICAgIGhhc3MsIHN0YXRlcywgbmV3UmVzdWx0LCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgaGFzQ2hhbmdlcyB8PSAocmVzdWx0ICE9PSBuZXdSZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmRldmljZSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmdyb3VwKTtcbiAgICB9XG5cbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICBpZiAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaikgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICBpZiAoaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlT2JqO1xuICB9LFxuXG4gIGFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIHN0YXRlOiBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpLFxuICAgICAgdW50ZW1wbGF0ZWRfYXR0cmlidXRlczogc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGVPYmoubGFzdF9jaGFuZ2VkLFxuICAgIH07XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3QoZWxlbSwgc3RhdGVPYmosIGluRGlhbG9nLCBhbGxvd0hpZGRlbikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGxldCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBvYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgZWxlbS5oYXNzLCBlbGVtLmhhc3Muc3RhdGVzLCBvYmosIG9iai5hdHRyaWJ1dGVzKTtcblxuICAgIGlmIChvYmogIT09IHN0YXRlT2JqICYmIG9iai5hdHRyaWJ1dGVzLmhpZGRlbiAmJiBhbGxvd0hpZGRlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZml4R3JvdXBUaXRsZXMoKSB7XG4gICAgY29uc3QgaG9tZUFzc2lzdGFudE1haW4gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJ10pO1xuICAgIGlmIChob21lQXNzaXN0YW50TWFpbiA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcywgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhvbWVBc3Npc3RhbnRNYWluLCBbXG4gICAgICAncGFydGlhbC1jYXJkcycsXG4gICAgICAnaGEtY2FyZHNbdmlldy12aXNpYmxlXSddKTtcbiAgICBpZiAoaGFDYXJkcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYUNhcmRzLCAnLm1haW4nKSB8fCBoYUNhcmRzLiQubWFpbjtcbiAgICBjb25zdCBjYXJkcyA9IG1haW4ucXVlcnlTZWxlY3RvckFsbCgnaGEtZW50aXRpZXMtY2FyZCcpO1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmIChjYXJkLmdyb3VwRW50aXR5KSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICBjYXJkLFxuICAgICAgICAgIGNhcmQuZ3JvdXBFbnRpdHksXG4gICAgICAgICAgZmFsc2UgLyogaW5EaWFsb2cgKi8sXG4gICAgICAgICAgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pO1xuICAgICAgICBpZiAob2JqICE9PSBjYXJkLmdyb3VwRW50aXR5ICYmIG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUpIHtcbiAgICAgICAgICBjb25zdCBuYW1lRWxlbSA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGNhcmQsICcubmFtZScpO1xuICAgICAgICAgIG5hbWVFbGVtLnRleHRDb250ZW50ID0gb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGNvbnRyb2xDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLWNhcmRzJ10pO1xuICAgIGlmIChwYXJ0aWFsQ2FyZHMgPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zLmJpbmQobnVsbCwgY29sdW1ucyksXG4gICAgICAgIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGdW5jdGlvbiByZW5hbWVkIGZyb20gaGFuZGxlV2luZG93Q2hhbmdlIHRvIF91cGRhdGVDb2x1bW5zIG9uIDMuNy4xOFxuICAgIGNvbnN0IGYgPSBwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlIHx8IHBhcnRpYWxDYXJkcy5fdXBkYXRlQ29sdW1ucztcbiAgICBwYXJ0aWFsQ2FyZHMubXFscy5mb3JFYWNoKChtcWwpID0+IHtcbiAgICAgIG1xbC5yZW1vdmVMaXN0ZW5lcihmKTtcbiAgICB9KTtcbiAgICBwYXJ0aWFsQ2FyZHMubXFscyA9IGNvbHVtbnMubWFwKCh3aWR0aCkgPT4ge1xuICAgICAgY29uc3QgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7d2lkdGh9cHgpYCk7XG4gICAgICBtcWwuYWRkTGlzdGVuZXIoZik7XG4gICAgICByZXR1cm4gbXFsO1xuICAgIH0pO1xuICAgIGYoKTtcbiAgfSxcblxuICB1c2VDdXN0b21pemVyKCkge1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgY29uc3QgY3VzdG9taXplciA9IG1haW4uaGFzcy5zdGF0ZXNbJ2N1c3RvbWl6ZXIuY3VzdG9taXplciddO1xuICAgIGlmICghY3VzdG9taXplcikgcmV0dXJuO1xuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMpIHtcbiAgICAgIGlmICh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgJiYgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpIHtcbiAgICAgICAgY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgYXR0cikpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2F0dHJdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUNvbmZpZ1BhbmVsKCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGhhUGFuZWxDb25maWcgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLXBhbmVsLXJlc29sdmVyJyxcbiAgICAgICdoYS1wYW5lbC1jb25maWcnXSk7XG4gICAgaWYgKCFoYVBhbmVsQ29uZmlnKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsLCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYUNvbmZpZ05hdmlnYXRpb24gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShoYVBhbmVsQ29uZmlnLCBbXG4gICAgICAnaGEtY29uZmlnLWRhc2hib2FyZCcsXG4gICAgICAnaGEtY29uZmlnLW5hdmlnYXRpb24nXSk7XG4gICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbikge1xuICAgICAgLy8gSGFDb25maWdOYXZpZ2F0aW9uIHN0YXJ0ZWQgdXNpbmcgbG9jYWxpemUgb24gMjEuMDEuMjAxOFxuICAgICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSAmJiAhaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCA9IHRydWU7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZCA9IChoYXNzLCBwYWdlKSA9PlxuICAgICAgICAgIHBhZ2UgPT09ICdjdXN0b211aScgfHwgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQoaGFzcywgcGFnZSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnQ3VzdG9tIFVJJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdTZXRVSSB0d2Vha3MnIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFoYUNvbmZpZ05hdmlnYXRpb24ucGFnZXMuc29tZShjb25mID0+IGNvbmYgPT09ICdjdXN0b211aScgfHwgY29uZi5kb21haW4gPT09ICdjdXN0b211aScpKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5wdXNoKCdwYWdlcycsIGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSA/ICdjdXN0b211aScgOiB7XG4gICAgICAgICAgZG9tYWluOiAnY3VzdG9tdWknLFxuICAgICAgICAgIGNhcHRpb246ICdDdXN0b20gVUknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IFVJIHR3ZWFrcy4nLFxuICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEhhQ29uZmlnQ3VzdG9tVWkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGEtY29uZmlnLWN1c3RvbS11aScpO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5pc1dpZGUgPSBoYVBhbmVsQ29uZmlnLmlzV2lkZTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuc2V0QXR0cmlidXRlKCdwYWdlLW5hbWUnLCAnY3VzdG9tdWknKTtcbiAgICAgIHJldHVybiBoYUNvbmZpZ0N1c3RvbVVpO1xuICAgIH07XG5cbiAgICBjb25zdCBpcm9uUGFnZXMgPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYVBhbmVsQ29uZmlnLCAnaXJvbi1wYWdlcycpO1xuICAgIGlmIChpcm9uUGFnZXMpIHtcbiAgICAgIGlmIChpcm9uUGFnZXMubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgaXJvblBhZ2VzLmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgICBpcm9uUGFnZXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1pdGVtcy1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpKSB7XG4gICAgICAgICAgICBpcm9uUGFnZXMuc2VsZWN0KCdjdXN0b211aScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBoYVBhbmVsQ29uZmlnLnNoYWRvd1Jvb3QgfHwgaGFQYW5lbENvbmZpZztcbiAgICAgIGlmIChyb290Lmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICB9XG4gICAgICBjb25zdCB2aXNpYmxlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKTtcbiAgICAgIHJvb3QubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gdmlzaWJsZSA/ICcnIDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsU3RhdGVzSG9vaygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaG9tZS1hc3Npc3RhbnQnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAoIWhvbWVBc3Npc3RhbnQgfHwgIWhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzKSByZXR1cm47XG4gICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZSA9IGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzO1xuICAgICAgaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MgPSBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGNvbnN0IHsgaGFzcyB9ID0gdGhpcztcbiAgICAgICAgaWYgKG9iai5zdGF0ZXMpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhvYmouc3RhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG9iai5zdGF0ZXNba2V5XTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuX2N1aV9rZWVwKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBuZXdFbnRpdHkgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBvYmouc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgICAgaWYgKGhhc3Muc3RhdGVzICYmIGVudGl0eSAhPT0gaGFzcy5zdGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgICAvLyBOZXcgc3RhdGUgYXJyaXZlZC4gUHV0IG1vZGlmaWVkIHN0YXRlIGluLlxuICAgICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSAhPT0gbmV3RW50aXR5KSB7XG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHNhbWUgc3RhdGUgYnV0IGNvbnRlbnRzIGNoYW5nZWQgZHVlIHRvIG90aGVyIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIG9iaik7XG4gICAgICAgIGlmIChvYmoudGhlbWVzICYmIGhhc3MuX3RoZW1lV2FpdGVycykge1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycy5mb3JFYWNoKHdhaXRlciA9PiB3YWl0ZXIuc3RhdGVDaGFuZ2VkKHdhaXRlci5zdGF0ZSkpO1xuICAgICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgICBpZiAobWFpbi5oYXNzICYmIG1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgICAgbWFpbi5fdXBkYXRlSGFzcyh7IHN0YXRlczogbWFpbi5oYXNzLnN0YXRlcyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsUGFydGlhbENhcmRzKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdwYXJ0aWFsLWNhcmRzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3BhcnRpYWwtY2FyZHMnKTtcbiAgICAgIGlmICghcGFydGlhbENhcmRzIHx8ICFwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlcikgcmV0dXJuO1xuICAgICAgcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIgPSAoaGFzcywgZW50aXR5SWQpID0+IHtcbiAgICAgICAgaWYgKGhhc3Muc3RhdGVzW2VudGl0eUlkXS5hdHRyaWJ1dGVzLmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBleGNsdWRlcyA9IHt9O1xuICAgICAgICBPYmplY3QudmFsdWVzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMgJiYgZW50aXR5LmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVFbnRpdHlJZCA9IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSkgcmV0dXJuO1xuICAgICAgICAgICAgZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSA9IGVudGl0eTtcbiAgICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy52aWV3KSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdFbnRpdGllcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXModmlld0VudGl0aWVzKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICBpZCA9PiB2aWV3RW50aXRpZXNbaWRdLmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZXhjbHVkZXNbaWRdID0gdmlld0VudGl0aWVzW2lkXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIWV4Y2x1ZGVzW2VudGl0eUlkXTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGVsZW1lbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICAgIGlmICgha2xhc3MgfHwgIWtsYXNzLnByb3RvdHlwZSkgcmV0dXJuO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGtsYXNzLnByb3RvdHlwZSwgJ2xvY2FsaXplJywge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tTG9jYWxpemUodikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVPYmogJiYgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXN0b21Mb2NhbGl6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KCkge30sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgdGhlbWluZyBcInJlZ3VsYXJcIiB0b3AgYmFkZ2VzLlxuICBpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICAgIGlmICghaGFTdGF0ZUxhYmVsQmFkZ2UgfHwgIWhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQpIHJldHVybjtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAgIC8vIFRPRE86IENhbGwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzID0gdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgfHwgW107XG4gICAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycy5wdXNoKHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0SW50ZXJ2YWwpIHtcbiAgICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdGF0ZS1iYWRnZScpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtYmFkZ2UnKTtcbiAgICAgIGlmICghc3RhdGVCYWRnZSB8fCAhc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlKSByZXR1cm47XG4gICAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlID0gc3RhdGVCYWRnZS5wcm90b3R5cGUuX3VwZGF0ZUljb25BcHBlYXJhbmNlO1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIHN0YXRlQmFkZ2UucHJvdG90eXBlLl91cGRhdGVJY29uQXBwZWFyYW5jZSA9IGZ1bmN0aW9uIGN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlKHN0YXRlT2JqKSB7XG4gICAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kLmljb24uc3R5bGUsIHtcbiAgICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgICBmaWx0ZXI6ICcnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UuY2FsbCh0aGlzLCBzdGF0ZU9iaik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbEhhQXR0cmlidXRlcygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaGEtYXR0cmlidXRlcycpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaGFBdHRyaWJ1dGVzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1hdHRyaWJ1dGVzJyk7XG4gICAgICBpZiAoIWhhQXR0cmlidXRlcyB8fCAhaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5IHx8XG4gICAgICAgICAhd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsKSByZXR1cm47XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5ID1cbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpLmNvbmNhdChcbiAgICAgICAgICAgIGV4dHJhRmlsdGVycyA/IGV4dHJhRmlsdGVycy5zcGxpdCgnLCcpIDogW10pO1xuICAgICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxIYUZvcm1DdXN0b21pemUoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLWZvcm0tY3VzdG9taXplJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBoYUZvcm1DdXN0b21pemUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWZvcm0tY3VzdG9taXplJyk7XG4gICAgICBpZiAoIWhhRm9ybUN1c3RvbWl6ZSkge1xuICAgICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSwgMTAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSkgcmV0dXJuO1xuICAgICAgd2luZG93LmN1c3RvbVVJLmhhRm9ybUN1c3RvbWl6ZUluaXREb25lID0gdHJ1ZTtcblxuICAgICAgaWYgKCF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUgPVxuICAgICAgICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldXG4gICAgICAgICAgICAgICAgfHwgeyB0eXBlOiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFIH07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdE9wZW5PYmplY3Qoa2V5LCBjb25maWcudHlwZSA9PT0gJ2pzb24nID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKTtcbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMpIHtcbiAgICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyA9XG4gICAgICAgICAgZnVuY3Rpb24gY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgICAgICAgICBsb2NhbEF0dHJpYnV0ZXMsIGdsb2JhbEF0dHJpYnV0ZXMsIGV4aXN0aW5nQXR0cmlidXRlcywgbmV3QXR0cmlidXRlcykge1xuICAgICAgICAgICAgY29uc3Qga25vd25LZXlzID1cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25mID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmYgJiYgKCFjb25mLmRvbWFpbnMgfHwgIXRoaXMuZW50aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmYuZG9tYWlucy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4odGhpcy5lbnRpdHkpKSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGxvY2FsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZ2xvYmFsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZXhpc3RpbmdBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhuZXdBdHRyaWJ1dGVzKSk7XG4gICAgICAgICAgICByZXR1cm4ga25vd25LZXlzLnNvcnQoKS5jb25jYXQoJ090aGVyJyk7XG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsQ2xhc3NIb29rcygpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSA9IHRydWU7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxQYXJ0aWFsQ2FyZHMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlc0hvb2soKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZUJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUF0dHJpYnV0ZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NlbmUnKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NyaXB0Jyk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxDbGFzc0hvb2tzKCk7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIW1haW4uaGFzcyB8fCAhbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgLy8gQ29ubmVjdGlvbiB3YXNuJ3QgbWFkZSB5ZXQuIFRyeSBpbiAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbml0LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmN1c3RvbVVJLmluaXREb25lID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS51c2VDdXN0b21pemVyKCk7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb24tY2hhbmdlZCcsIHdpbmRvdy5zZXRUaW1lb3V0LmJpbmQobnVsbCwgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzLCAxMDApKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5sb2coYExvYWRlZCBDdXN0b21VSSAke1ZFUlNJT059YCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgaWYgKCF3aW5kb3cuQ1VTVE9NX1VJX0xJU1QpIHtcbiAgICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVCA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QucHVzaCh7XG4gICAgICBuYW1lOiAnQ3VzdG9tVUknLFxuICAgICAgdmVyc2lvbjogVkVSU0lPTixcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXktZ2l0L2hvbWUtYXNzaXN0YW50LWN1c3RvbS11aScsXG4gICAgfSk7XG4gIH0sXG5cbiAgcnVuSG9va3MoKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUoKTtcbiAgfSxcblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhLWRldmljZS1uYW1lJykgfHwgJyc7XG4gIH0sXG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScsIG5hbWUgfHwgJycpO1xuICB9LFxuXG4gIGNvbXB1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uQm9keSA9ICh0ZW1wbGF0ZS5pbmRleE9mKCdyZXR1cm4nKSA+PSAwKSA/IHRlbXBsYXRlIDogYHJldHVybiBcXGAke3RlbXBsYXRlfVxcYDtgO1xuICAgIHRyeSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ2hhc3MnLCAnZW50aXRpZXMnLCAnZW50aXR5JywgJ2F0dHJpYnV0ZXMnLCAnYXR0cmlidXRlJywgJ3N0YXRlJywgZnVuY3Rpb25Cb2R5KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIHJldHVybiBmdW5jKGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGlmICgoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB8fCBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfSBpbiB0ZW1wbGF0ZSAke2Z1bmN0aW9uQm9keX1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9LFxufTtcbndpbmRvdy5jdXN0b21VSS5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCAnMjAxODEyMTcnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==