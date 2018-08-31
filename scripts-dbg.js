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
/* harmony default export */ __webpack_exports__["default"] = ('20180831');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc3MtYXR0cmlidXRlLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfV0lUSF9NT1JFX0lORk8iLCJET01BSU5TX0hJREVfTU9SRV9JTkZPIiwiRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSIsIlNUQVRFU19PRkYiLCJET01BSU5TX1RPR0dMRSIsIlNldCIsIlVOSVRfQyIsIlVOSVRfRiIsIkRFRkFVTFRfVklFV19FTlRJVFlfSUQiLCJhcHBseVRoZW1lc09uRWxlbWVudCIsImVsZW1lbnQiLCJ0aGVtZXMiLCJsb2NhbFRoZW1lIiwidXBkYXRlTWV0YSIsIl90aGVtZXMiLCJ0aGVtZU5hbWUiLCJkZWZhdWx0X3RoZW1lIiwic3R5bGVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGhlbWUiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInByZWZpeGVkS2V5IiwidXBkYXRlU3R5bGVzIiwid2luZG93IiwiU2hhZHlDU1MiLCJzdHlsZVN1YnRyZWUiLCJtZXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidGhlbWVDb2xvciIsImR5bmFtaWNDb250ZW50VXBkYXRlciIsInJvb3QiLCJuZXdFbGVtZW50VGFnIiwiYXR0cmlidXRlcyIsInJvb3RFbCIsImN1c3RvbUVsIiwibGFzdENoaWxkIiwidGFnTmFtZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInRvTG93ZXJDYXNlIiwic2V0UHJvcGVydGllcyIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsImNhblRvZ2dsZURvbWFpbiIsImhhc3MiLCJkb21haW4iLCJzZXJ2aWNlcyIsImNhblRvZ2dsZVN0YXRlIiwic3RhdGVPYmoiLCJjb21wdXRlU3RhdGVEb21haW4iLCJzdGF0ZSIsInN1cHBvcnRlZF9mZWF0dXJlcyIsImNvbXB1dGVEb21haW4iLCJlbnRpdHlJZCIsInN1YnN0ciIsImluZGV4T2YiLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiRE9NQUlOX0RFVklDRV9DTEFTUyIsImJpbmFyeV9zZW5zb3IiLCJjb3ZlciIsInNlbnNvciIsIlVOS05PV05fVFlQRSIsIkFERF9UWVBFIiwiVFlQRV9UT19UQUciLCJzdHJpbmciLCJqc29uIiwiaWNvbiIsImJvb2xlYW4iLCJhcnJheSIsIkxPR0lDX1NUQVRFX0FUVFJJQlVURVMiLCJlbnRpdHlfcGljdHVyZSIsInVuZGVmaW5lZCIsImZyaWVuZGx5X25hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJlbXVsYXRlZF9odWUiLCJkb21haW5zIiwiZW11bGF0ZWRfaHVlX25hbWUiLCJoYWFza2FfaGlkZGVuIiwiaGFhc2thX25hbWUiLCJob21lYnJpZGdlX2hpZGRlbiIsImhvbWVicmlkZ2VfbmFtZSIsImF0dHJpYnV0aW9uIiwiY3VzdG9tX3VpX21vcmVfaW5mbyIsImN1c3RvbV91aV9zdGF0ZV9jYXJkIiwiZGV2aWNlX2NsYXNzIiwib3B0aW9ucyIsImFzc3VtZWRfc3RhdGUiLCJpbml0aWFsX3N0YXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ0b1N0cmluZyIsImxpdGVyYWxWYWx1ZSIsIkVycm9yIiwiaHRtbFZhbHVlIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsImh0bWwiLCJzdHJpbmdzIiwidGVtcGxhdGUiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJ2IiwiaWR4IiwiaHRtbExpdGVyYWwiLCJDdWlCYXNlRWxlbWVudCIsIlBvbHltZXIiLCJFbGVtZW50IiwicHJvcGVydGllcyIsImluRGlhbG9nIiwiQm9vbGVhbiIsImNvbnRyb2xFbGVtZW50IiwiU3RyaW5nIiwiZXh0cmEiLCJBcnJheSIsImNvbXB1dGVkIiwiY29tcHV0ZUV4dHJhIiwiZXh0cmFzIiwiZXh0cmFfZGF0YV90ZW1wbGF0ZSIsImlzQXJyYXkiLCJtYXAiLCJjdXN0b21VSSIsImNvbXB1dGVUZW1wbGF0ZSIsInN0YXRlcyIsImZpbHRlciIsInNob3dMYXN0Q2hhbmdlZCIsImxlbmd0aCIsInNob3dfbGFzdF9jaGFuZ2VkIiwiaGFzRXh0cmEiLCJEeW5hbWljRWxlbWVudCIsImVsZW1lbnROYW1lIiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXJGdW5jIiwidG9VcHBlckNhc2UiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkR5bmFtaWNXaXRoRXh0cmEiLCJnZXQiLCJleHRyYU9iaiIsIl9hdHRhY2hlZCIsImV4dHJhT2JqVmlzaWJsZSIsImNvbm5lY3RlZENhbGxiYWNrIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJfaXNBdHRhY2hlZCIsImF0dGFjaGVkIiwiZXh0cmFfYmFkZ2UiLCJleHRyYUJhZGdlcyIsImV4dHJhQmFkZ2UiLCJtYXliZUNoYW5nZU9iamVjdCIsImF0dHJpYnV0ZSIsInVuaXQiLCJibGFja2xpc3QiLCJibGFja2xpc3Rfc3RhdGVzIiwic29tZSIsIlJlZ0V4cCIsInRlc3QiLCJfZW50aXR5RGlzcGxheSIsImNvbXB1dGVFeHRyYVZpc2libGUiLCJleHRyYUNsYXNzIiwiX3Nob3dDb250cm9sIiwiaGlkZV9jb250cm9sIiwiY29tcHV0ZVN0YXRlRGlzcGxheSIsImhhTG9jYWxpemUiLCJsb2NhbGl6ZSIsImlzQ29uZmlybUNvbnRyb2xzIiwiY29uZmlybV9jb250cm9scyIsImNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrIiwiY2xpY2tIYW5kbGVyIiwiZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImxvY2siLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInN0b3BQcm9wYWdhdGlvbiIsImFwcGx5VGhlbWVzIiwiZXh0cmFEb21DaGFuZ2VkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJIYUNvbmZpZ0N1c3RvbVVpIiwiRXZlbnRzTWl4aW4iLCJpc1dpZGUiLCJuYW1lIiwib2JzZXJ2ZXIiLCJyZWFkeSIsImdldE5hbWUiLCJuYW1lQ2hhbmdlZCIsInNldE5hbWUiLCJfYmFja0hhbmRsZXIiLCJoaXN0b3J5IiwiYmFjayIsImZpcmUiLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwibWluIiwiTnVtYmVyIiwibWF4IiwicGluIiwiaXNPbiIsIm5vdGlmeSIsIl90aGVtZWRNaW4iLCJfZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiYXR0ciIsImRlZiIsImNvbXB1dGVDbGFzcyIsInRoZW1lZE1pbiIsInZhbHVlQ2hhbmdlZCIsImV2IiwidGFyZ2V0IiwiU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMiLCJET01BSU5fVE9fU0xJREVSX1NVUFBPUlQiLCJsaWdodCIsImNsaW1hdGUiLCJUWVBFX1RPX0NPTlRST0wiLCJ0b2dnbGUiLCJkaXNwbGF5IiwiU3RhdGVDYXJkQ3VzdG9tVWkiLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9jb250YWluZXIiLCJzZXRQcm9wZXJ0eSIsImlucHV0Q2hhbmdlZCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWRnZU1vZGUiLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiYmFkZ2VzX2xpc3QiLCJwdXNoIiwicGFyYW1zIiwid2lkdGgiLCJmb250U2l6ZSIsImNsZWFuQmFkZ2VTdHlsZSIsIm1vZGlmaWVkT2JqIiwidGhlbWVUYXJnZXQiLCJtYXliZUhpZGVFbnRpdHkiLCJzbGlkZXJFbGlnaWJsZV8iLCJvYmoiLCJzdGF0ZV9jYXJkX21vZGUiLCJyZWd1bGFyTW9kZV8iLCJvcmlnaW5hbFN0YXRlQ2FyZFR5cGUiLCJjdXN0b21TdGF0ZUNhcmRUeXBlIiwic2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSIsInN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeSIsInNlcnZpY2VNaW4iLCJzZXJ2aWNlTWF4IiwidmFsdWVOYW1lIiwic2V0VmFsdWVOYW1lIiwibmFtZU9uIiwibWluX3RlbXAiLCJtYXhfdGVtcCIsImNvbnRyb2xfZWxlbWVudCIsIlN0YXRlQ2FyZFdpdGhTbGlkZXIiLCJzbGlkZXJWYWx1ZSIsIm1vZGUiLCJzdHJldGNoU2xpZGVyIiwiYnJlYWtTbGlkZXIiLCJoaWRlU2xpZGVyIiwibGluZVRvb0xvbmciLCJtaW5MaW5lQnJlYWsiLCJtYXhMaW5lQnJlYWsiLCJzaG93U2xpZGVyIiwiX29uSXJvblJlc2l6ZSIsImJpbmQiLCJfaXNDb25uZWN0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3dhaXRGb3JMYXlvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3NldE1vZGUiLCJfZnJhbWVJZCIsInJlYWR5VG9Db21wdXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicHJldkJyZWFrU2xpZGVyIiwicHJldkhpZGVTbGlkZXIiLCIkIiwiY29udGFpbmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0YXRlSGVpZ2h0IiwiX2NvbXB1dGVXcmFwQ2xhc3MiLCJfc2hvd1NsaWRlciIsInNsaWRlckNoYW5nZWQiLCJwYXJzZUludCIsInBhcmFtIiwiaXNOYU4iLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwiY2FsbFNlcnZpY2UiLCJzdGF0ZU9iakNoYW5nZWQiLCJzdHJldGNoX3NsaWRlciIsIlN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIiLCJzdXBlckNsYXNzIiwiZGV0YWlsIiwiZXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY29tcG9zZWQiLCJub2RlIiwiZGlzcGF0Y2hFdmVudCIsIlNVUFBPUlRFRF9TTElERVJfTU9ERVMiLCJjdXN0b21VaUF0dHJpYnV0ZXMiLCJkZXZpY2UiLCJ0ZW1wbGF0ZXMiLCJfc3RhdGVEaXNwbGF5IiwiY29uY2F0Iiwic2xpZGVyX3RoZW1lIiwiaGlkZV9pbl9kZWZhdWx0X3ZpZXciLCJpY29uX2NvbG9yIiwiaGFzc0F0dHJpYnV0ZXNVdGlsIiwiZG9tSG9zdCIsImdldFJvb3ROb2RlIiwiRG9jdW1lbnRGcmFnbWVudCIsImhvc3QiLCJsaWdodE9yU2hhZG93Iiwic2VsZWN0b3IiLCJzaGFkb3dSb290IiwiZ2V0RWxlbWVudEhpZXJhcmNoeSIsImhpZXJhcmNoeSIsInNoaWZ0IiwiZ2V0Q29udGV4dCIsIl9jb250ZXh0IiwiZ3JvdXBFbnRpdHkiLCJyZXZlcnNlIiwiZmluZE1hdGNoIiwiZmluZCIsIm9wdGlvbiIsIm1hdGNoIiwibWF5YmVDaGFuZ2VPYmplY3RCeURldmljZSIsImFwcGx5QXR0cmlidXRlcyIsIm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cCIsImNvbnRleHQiLCJjIiwiX3NldEtlZXAiLCJfY3VpX2tlZXAiLCJtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzIiwibmV3QXR0cmlidXRlcyIsImhhc0dsb2JhbCIsImhhc0NoYW5nZXMiLCJ1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzIiwidW50ZW1wbGF0ZWRfc3RhdGUiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ1bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkiLCJtYXliZUFwcGx5VGVtcGxhdGVzIiwibmV3UmVzdWx0IiwiY2hlY2tBdHRyaWJ1dGVzIiwibGFzdF9jaGFuZ2VkIiwiYWxsb3dIaWRkZW4iLCJmaXhHcm91cFRpdGxlcyIsImhvbWVBc3Npc3RhbnRNYWluIiwiaGFDYXJkcyIsIm1haW4iLCJjYXJkcyIsImNhcmQiLCJuYW1lRWxlbSIsInRleHRDb250ZW50IiwiY29udHJvbENvbHVtbnMiLCJjb2x1bW5zIiwicGFydGlhbENhcmRzIiwiZiIsImhhbmRsZVdpbmRvd0NoYW5nZSIsIl91cGRhdGVDb2x1bW5zIiwibXFscyIsIm1xbCIsInJlbW92ZUxpc3RlbmVyIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwidXNlQ3VzdG9taXplciIsImN1c3RvbWl6ZXIiLCJoaWRlX2F0dHJpYnV0ZXMiLCJ1cGRhdGVDb25maWdQYW5lbCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiaGFQYW5lbENvbmZpZyIsImhhQ29uZmlnTmF2aWdhdGlvbiIsImN1aVBhdGNoIiwiX29yaWdpbmFsQ29tcHV0ZUxvYWRlZCIsIl9jb21wdXRlTG9hZGVkIiwiX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24iLCJfY29tcHV0ZUNhcHRpb24iLCJfb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24iLCJfY29tcHV0ZURlc2NyaXB0aW9uIiwicGFnZSIsInBhZ2VzIiwiY29uZiIsImNhcHRpb24iLCJsb2FkZWQiLCJnZXRIYUNvbmZpZ0N1c3RvbVVpIiwiaGFDb25maWdDdXN0b21VaSIsImlyb25QYWdlcyIsImxhc3RFbGVtZW50Q2hpbGQiLCJzZWxlY3QiLCJ2aXNpYmxlIiwiaW5zdGFsbFN0YXRlc0hvb2siLCJ3aGVuRGVmaW5lZCIsInRoZW4iLCJob21lQXNzaXN0YW50IiwiX3VwZGF0ZUhhc3MiLCJvcmlnaW5hbFVwZGF0ZSIsInVwZGF0ZSIsIm5ld0VudGl0eSIsIl90aGVtZVdhaXRlcnMiLCJ3YWl0ZXIiLCJzdGF0ZUNoYW5nZWQiLCJpbnN0YWxsUGFydGlhbENhcmRzIiwiX2RlZmF1bHRWaWV3RmlsdGVyIiwiZXhjbHVkZXMiLCJleGNsdWRlRW50aXR5SWQiLCJpbnN0YWxsQWN0aW9uTmFtZSIsImtsYXNzIiwiZGVmaW5lUHJvcGVydHkiLCJjdXN0b21Mb2NhbGl6ZSIsImFjdGlvbl9uYW1lIiwiX19kYXRhIiwic2V0IiwiaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlIiwiaGFTdGF0ZUxhYmVsQmFkZ2UiLCJzdGFydEludGVydmFsIiwiaW5zdGFsbFN0YXRlQmFkZ2UiLCJzdGF0ZUJhZGdlIiwiX3VwZGF0ZUljb25BcHBlYXJhbmNlIiwib3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZSIsImN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlIiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3IiLCJpbnN0YWxsSGFBdHRyaWJ1dGVzIiwiaGFBdHRyaWJ1dGVzIiwiY29tcHV0ZUZpbHRlcnNBcnJheSIsImN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJleHRyYUZpbHRlcnMiLCJzcGxpdCIsImluc3RhbGxIYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemVJbml0RG9uZSIsIl9jb21wdXRlU2luZ2xlQXR0cmlidXRlIiwiY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsInNlY29uZGFyeSIsImNvbmZpZyIsIl9pbml0T3Blbk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwibG9jYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlcyIsImV4aXN0aW5nQXR0cmlidXRlcyIsImtub3duS2V5cyIsImZpbHRlckZyb21BdHRyaWJ1dGVzIiwic29ydCIsImluc3RhbGxDbGFzc0hvb2tzIiwiY2xhc3NJbml0RG9uZSIsImluaXQiLCJpbml0RG9uZSIsInJ1bkhvb2tzIiwibG9nIiwiQ1VTVE9NX1VJX0xJU1QiLCJ2ZXJzaW9uIiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jdGlvbkJvZHkiLCJmdW5jIiwiRnVuY3Rpb24iLCJTeW50YXhFcnJvciIsIlJlZmVyZW5jZUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7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Q0EsVUFBS0EsYUFBYWlULFdBQWQsSUFBOEJqVCxhQUFha1QsY0FBL0MsRUFBK0Q7QUFDN0RwUCxnQkFBUUMsSUFBUixDQUFjLEdBQUUvRCxFQUFFYyxJQUFLLEtBQUlkLEVBQUVtVCxPQUFRLGdCQUFlTCxZQUFhLEVBQWpFO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBLFlBQU05UyxDQUFOO0FBQ0Q7QUFDRjtBQWxtQmtDLENBQXJDO0FBb21CQTFLLE9BQU8ySCxRQUFQLENBQWdCbVYsSUFBaEIsRzs7Ozs7Ozs7Ozs7OztBQzVtQkEsK0RBQWUsVUFBZixFIiwiZmlsZSI6InNjcmlwdHMtZGJnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL3NjcmlwdHMuanNcIik7XG4iLCIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gJ2hhc3M6Ym9va21hcmsnO1xuXG4vKiogRG9tYWlucyB0aGF0IGhhdmUgYSBzdGF0ZSBjYXJkLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9DQVJEID0gW1xuICAnY2xpbWF0ZScsXG4gICdjb3ZlcicsXG4gICdjb25maWd1cmF0b3InLFxuICAnaW5wdXRfc2VsZWN0JyxcbiAgJ2lucHV0X251bWJlcicsXG4gICdpbnB1dF90ZXh0JyxcbiAgJ2xvY2snLFxuICAnbWVkaWFfcGxheWVyJyxcbiAgJ3NjZW5lJyxcbiAgJ3NjcmlwdCcsXG4gICd0aW1lcicsXG4gICd2YWN1dW0nLFxuICAnd2VibGluaycsXG5dO1xuXG4vKiogRG9tYWlucyB3aXRoIHNlcGFyYXRlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX01PUkVfSU5GTyA9IFtcbiAgJ2FsYXJtX2NvbnRyb2xfcGFuZWwnLFxuICAnYXV0b21hdGlvbicsXG4gICdjYW1lcmEnLFxuICAnY2xpbWF0ZScsXG4gICdjb25maWd1cmF0b3InLFxuICAnY292ZXInLFxuICAnZmFuJyxcbiAgJ2dyb3VwJyxcbiAgJ2hpc3RvcnlfZ3JhcGgnLFxuICAnaW5wdXRfZGF0ZXRpbWUnLFxuICAnbGlnaHQnLFxuICAnbG9jaycsXG4gICdtZWRpYV9wbGF5ZXInLFxuICAnc2NyaXB0JyxcbiAgJ3N1bicsXG4gICd1cGRhdGVyJyxcbiAgJ3ZhY3V1bScsXG4gICd3ZWF0aGVyJ1xuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG93IG5vIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19ISURFX01PUkVfSU5GTyA9IFtcbiAgJ2lucHV0X251bWJlcicsXG4gICdpbnB1dF9zZWxlY3QnLFxuICAnaW5wdXRfdGV4dCcsXG4gICdzY2VuZScsXG4gICd3ZWJsaW5rJ1xuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG91bGQgaGF2ZSB0aGUgaGlzdG9yeSBoaWRkZW4gaW4gdGhlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSA9IFtcbiAgJ2NhbWVyYScsXG4gICdjb25maWd1cmF0b3InLFxuICAnaGlzdG9yeV9ncmFwaCcsXG4gICdzY2VuZScsXG5dO1xuXG4vKiogU3RhdGVzIHRoYXQgd2UgY29uc2lkZXIgXCJvZmZcIi4gKi9cbmV4cG9ydCBjb25zdCBTVEFURVNfT0ZGID0gW1xuICAnY2xvc2VkJyxcbiAgJ2xvY2tlZCcsXG4gICdvZmYnXG5dO1xuXG4vKiogRG9tYWlucyB3aGVyZSB3ZSBhbGxvdyB0b2dnbGUgaW4gTG92ZWxhY2UuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19UT0dHTEUgPSBuZXcgU2V0KFtcbiAgJ2ZhbicsXG4gICdpbnB1dF9ib29sZWFuJyxcbiAgJ2xpZ2h0JyxcbiAgJ3N3aXRjaCdcbl0pO1xuXG4vKiogVGVtcGVyYXR1cmUgdW5pdHMuICovXG5leHBvcnQgY29uc3QgVU5JVF9DID0gJ8KwQyc7XG5leHBvcnQgY29uc3QgVU5JVF9GID0gJ8KwRic7XG5cbi8qKiBFbnRpdHkgSUQgb2YgdGhlIGRlZmF1bHQgdmlldy4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1ZJRVdfRU5USVRZX0lEID0gJ2dyb3VwLmRlZmF1bHRfdmlldyc7XG4iLCIvKipcbiAqIEFwcGx5IGEgdGhlbWUgdG8gYW4gZWxlbWVudCBieSBzZXR0aW5nIHRoZSBDU1MgdmFyaWFibGVzIG9uIGl0LlxuICpcbiAqIGVsZW1lbnQ6IEVsZW1lbnQgdG8gYXBwbHkgdGhlbWUgb24uXG4gKiB0aGVtZXM6IEhBU1MgVGhlbWUgaW5mb3JtYXRpb25cbiAqIGxvY2FsVGhlbWU6IHNlbGVjdGVkIHRoZW1lLlxuICogdXBkYXRlTWV0YTogYm9vbGVhbiBpZiB3ZSBzaG91bGQgdXBkYXRlIHRoZSB0aGVtZS1jb2xvciBtZXRhIGVsZW1lbnQuXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlUaGVtZXNPbkVsZW1lbnQoZWxlbWVudCwgdGhlbWVzLCBsb2NhbFRoZW1lLCB1cGRhdGVNZXRhID0gZmFsc2UpIHtcbiAgaWYgKCFlbGVtZW50Ll90aGVtZXMpIHtcbiAgICBlbGVtZW50Ll90aGVtZXMgPSB7fTtcbiAgfVxuICBsZXQgdGhlbWVOYW1lID0gdGhlbWVzLmRlZmF1bHRfdGhlbWU7XG4gIGlmIChsb2NhbFRoZW1lID09PSAnZGVmYXVsdCcgfHwgKGxvY2FsVGhlbWUgJiYgdGhlbWVzLnRoZW1lc1tsb2NhbFRoZW1lXSkpIHtcbiAgICB0aGVtZU5hbWUgPSBsb2NhbFRoZW1lO1xuICB9XG4gIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnQuX3RoZW1lcyk7XG4gIGlmICh0aGVtZU5hbWUgIT09ICdkZWZhdWx0Jykge1xuICAgIHZhciB0aGVtZSA9IHRoZW1lcy50aGVtZXNbdGhlbWVOYW1lXTtcbiAgICBPYmplY3Qua2V5cyh0aGVtZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB2YXIgcHJlZml4ZWRLZXkgPSAnLS0nICsga2V5O1xuICAgICAgZWxlbWVudC5fdGhlbWVzW3ByZWZpeGVkS2V5XSA9ICcnO1xuICAgICAgc3R5bGVzW3ByZWZpeGVkS2V5XSA9IHRoZW1lW2tleV07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGVsZW1lbnQudXBkYXRlU3R5bGVzKSB7XG4gICAgZWxlbWVudC51cGRhdGVTdHlsZXMoc3R5bGVzKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuU2hhZHlDU1MpIHtcbiAgICAvLyBpbXBsZW1lbnQgdXBkYXRlU3R5bGVzKCkgbWV0aG9kIG9mIFBvbGVtZXIgZWxlbWVudHNcbiAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVTdWJ0cmVlKC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyhlbGVtZW50KSwgc3R5bGVzKTtcbiAgfVxuXG4gIGlmICghdXBkYXRlTWV0YSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dGhlbWUtY29sb3JdJyk7XG4gIGlmIChtZXRhKSB7XG4gICAgaWYgKCFtZXRhLmhhc0F0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JykpIHtcbiAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnLCBtZXRhLmdldEF0dHJpYnV0ZSgnY29udGVudCcpKTtcbiAgICB9XG4gICAgY29uc3QgdGhlbWVDb2xvciA9IHN0eWxlc1snLS1wcmltYXJ5LWNvbG9yJ10gfHwgbWV0YS5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpO1xuICAgIG1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywgdGhlbWVDb2xvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVXBkYXRlIHJvb3QncyBjaGlsZCBlbGVtZW50IHRvIGJlIG5ld0VsZW1lbnRUYWcgcmVwbGFjaW5nIGFub3RoZXIgZXhpc3RpbmcgY2hpbGQgaWYgYW55LlxuICogQ29weSBhdHRyaWJ1dGVzIGludG8gdGhlIGNoaWxkIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWNDb250ZW50VXBkYXRlcihyb290LCBuZXdFbGVtZW50VGFnLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IHJvb3RFbCA9IHJvb3Q7XG4gIGxldCBjdXN0b21FbDtcblxuICBpZiAocm9vdEVsLmxhc3RDaGlsZCAmJiByb290RWwubGFzdENoaWxkLnRhZ05hbWUgPT09IG5ld0VsZW1lbnRUYWcpIHtcbiAgICBjdXN0b21FbCA9IHJvb3RFbC5sYXN0Q2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChyb290RWwubGFzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRpbmcgYW4gZWxlbWVudCB3aXRoIHVwcGVyIGNhc2Ugd29ya3MgZmluZSBpbiBDaHJvbWUsIGJ1dCBpbiBGRiBpdCBkb2Vzbid0IGltbWVkaWF0ZWx5XG4gICAgLy8gYmVjb21lIGEgZGVmaW5lZCBDdXN0b20gRWxlbWVudC4gUG9seW1lciBkb2VzIHRoYXQgaW4gc29tZSBsYXRlciBwYXNzLlxuICAgIGN1c3RvbUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuZXdFbGVtZW50VGFnLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnNldFByb3BlcnRpZXMpIHtcbiAgICBjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKGF0dHJpYnV0ZXMpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGN1c3RvbSBlbGVtZW50IGRlZmluaXRpb24gd2Fzbid0IGxvYWRlZCB5ZXQgLSBzZXRQcm9wZXJ0aWVzIHdvdWxkIGJlXG4gICAgLy8gbWlzc2luZywgYnV0IG5vIGhhcm0gaW4gc2V0dGluZyBhdHRyaWJ1dGVzIG9uZS1ieS1vbmUgdGhlbi5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGN1c3RvbUVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjdXN0b21FbCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZURvbWFpbihoYXNzLCBkb21haW4pIHtcbiAgY29uc3Qgc2VydmljZXMgPSBoYXNzLnNlcnZpY2VzW2RvbWFpbl07XG4gIGlmICghc2VydmljZXMpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKGRvbWFpbiA9PT0gJ2xvY2snKSB7XG4gICAgcmV0dXJuICdsb2NrJyBpbiBzZXJ2aWNlcztcbiAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjb3ZlcicpIHtcbiAgICByZXR1cm4gJ29wZW5fY292ZXInIGluIHNlcnZpY2VzO1xuICB9XG4gIHJldHVybiAndHVybl9vbicgaW4gc2VydmljZXM7XG59XG4iLCJpbXBvcnQgY2FuVG9nZ2xlRG9tYWluIGZyb20gJy4vY2FuX3RvZ2dsZV9kb21haW4uanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopIHtcbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgaWYgKGRvbWFpbiA9PT0gJ2dyb3VwJykge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gJ29uJyB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gJ29mZic7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gJ2NsaW1hdGUnKSB7XG4gICAgcmV0dXJuICEhKChzdGF0ZU9iai5hdHRyaWJ1dGVzIHx8IHt9KS5zdXBwb3J0ZWRfZmVhdHVyZXMgJiA0MDk2KTtcbiAgfVxuXG4gIHJldHVybiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVEb21haW4oZW50aXR5SWQpIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cigwLCBlbnRpdHlJZC5pbmRleE9mKCcuJykpO1xufVxuIiwiaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSAnLi9jb21wdXRlX2RvbWFpbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0R3JvdXBFbnRpdGllcyhlbnRpdGllcywgZ3JvdXApIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgZ3JvdXAuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5KSB7XG4gICAgICByZXN1bHRbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSAnLi9jb21wdXRlX2RvbWFpbi5qcyc7XG5pbXBvcnQgZ2V0R3JvdXBFbnRpdGllcyBmcm9tICcuL2dldF9ncm91cF9lbnRpdGllcy5qcyc7XG5cbi8vIFJldHVybiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZW50aXRpZXMgdGhhdCB0aGUgdmlldyB3aWxsIHNob3dcbi8vIGluY2x1ZGluZyBlbWJlZGRlZCBncm91cHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3RW50aXRpZXMoZW50aXRpZXMsIHZpZXcpIHtcbiAgY29uc3Qgdmlld0VudGl0aWVzID0ge307XG5cbiAgdmlldy5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkgJiYgIWVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgdmlld0VudGl0aWVzW2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuXG4gICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBjb25zdCBncm91cEVudGl0aWVzID0gZ2V0R3JvdXBFbnRpdGllcyhlbnRpdGllcywgZW50aXR5KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhncm91cEVudGl0aWVzKS5mb3JFYWNoKChnckVudGl0eUlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JFbnRpdHkgPSBncm91cEVudGl0aWVzW2dyRW50aXR5SWRdO1xuXG4gICAgICAgICAgaWYgKCFnckVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgICAgICAgdmlld0VudGl0aWVzW2dyRW50aXR5SWRdID0gZ3JFbnRpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2aWV3RW50aXRpZXM7XG59XG4iLCJpbXBvcnQgY2FuVG9nZ2xlU3RhdGUgZnJvbSAnLi9jYW5fdG9nZ2xlX3N0YXRlLmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5pbXBvcnQgeyBET01BSU5TX1dJVEhfQ0FSRCB9IGZyb20gJy4uL2NvbnN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaikge1xuICBpZiAoc3RhdGVPYmouc3RhdGUgPT09ICd1bmF2YWlsYWJsZScpIHtcbiAgICByZXR1cm4gJ2Rpc3BsYXknO1xuICB9XG5cbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcblxuICBpZiAoRE9NQUlOU19XSVRIX0NBUkQuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBkb21haW47XG4gIH0gZWxzZSBpZiAoY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopICYmXG4gICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sICE9PSAnaGlkZGVuJykge1xuICAgIHJldHVybiAndG9nZ2xlJztcbiAgfVxuICByZXR1cm4gJ2Rpc3BsYXknO1xufVxuIiwiY29uc3QgaGFzc0F0dHJpYnV0ZVV0aWwgPSB7fTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyA9IHtcbiAgYmluYXJ5X3NlbnNvcjogW1xuICAgICdiYXR0ZXJ5JyxcbiAgICAnY29sZCcsXG4gICAgJ2Nvbm5lY3Rpdml0eScsXG4gICAgJ2Rvb3InLFxuICAgICdnYXJhZ2VfZG9vcicsXG4gICAgJ2dhcycsXG4gICAgJ2hlYXQnLFxuICAgICdsaWdodCcsXG4gICAgJ2xvY2snLFxuICAgICdtb2lzdHVyZScsXG4gICAgJ21vdGlvbicsXG4gICAgJ21vdmluZycsXG4gICAgJ29jY3VwYW5jeScsXG4gICAgJ29wZW5pbmcnLFxuICAgICdwbHVnJyxcbiAgICAncG93ZXInLFxuICAgICdwcmVzZW5jZScsXG4gICAgJ3Byb2JsZW0nLFxuICAgICdzYWZldHknLFxuICAgICdzbW9rZScsXG4gICAgJ3NvdW5kJyxcbiAgICAndmlicmF0aW9uJyxcbiAgICAnd2luZG93J1xuICBdLFxuICBjb3ZlcjogWydnYXJhZ2UnXSxcbiAgc2Vuc29yOiBbXG4gICAgJ2JhdHRlcnknLFxuICAgICdodW1pZGl0eScsXG4gICAgJ2lsbHVtaW5hbmNlJyxcbiAgICAndGVtcGVyYXR1cmUnXG4gIF0sXG59O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSAnanNvbic7XG5oYXNzQXR0cmlidXRlVXRpbC5BRERfVFlQRSA9ICdrZXktdmFsdWUnO1xuXG5oYXNzQXR0cmlidXRlVXRpbC5UWVBFX1RPX1RBRyA9IHtcbiAgc3RyaW5nOiAnaGEtY3VzdG9taXplLXN0cmluZycsXG4gIGpzb246ICdoYS1jdXN0b21pemUtc3RyaW5nJyxcbiAgaWNvbjogJ2hhLWN1c3RvbWl6ZS1pY29uJyxcbiAgYm9vbGVhbjogJ2hhLWN1c3RvbWl6ZS1ib29sZWFuJyxcbiAgYXJyYXk6ICdoYS1jdXN0b21pemUtYXJyYXknLFxuICAna2V5LXZhbHVlJzogJ2hhLWN1c3RvbWl6ZS1rZXktdmFsdWUnLFxufTtcblxuLy8gQXR0cmlidXRlcyBoZXJlIHNlcnZlIGR1YWwgcHVycG9zZTpcbi8vIDEpIEFueSBrZXkgb2YgdGhpcyBvYmplY3Qgd29uJ3QgYmUgc2hvd24gaW4gbW9yZS1pbmZvIHdpbmRvdy5cbi8vIDIpIEFueSBrZXkgd2hpY2ggaGFzIHZhbHVlIG90aGVyIHRoYW4gdW5kZWZpbmVkIHdpbGwgYXBwZWFyIGluIGN1c3RvbWl6YXRpb25cbi8vICAgIGNvbmZpZyBhY2NvcmRpbmcgdG8gaXRzIHZhbHVlLlxuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9XG4gIGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgfHwge1xuICAgIGVudGl0eV9waWN0dXJlOiB1bmRlZmluZWQsXG4gICAgZnJpZW5kbHlfbmFtZTogeyB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb246ICdOYW1lJyB9LFxuICAgIGljb246IHsgdHlwZTogJ2ljb24nIH0sXG4gICAgZW11bGF0ZWRfaHVlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkb21haW5zOiBbJ2VtdWxhdGVkX2h1ZSddXG4gICAgfSxcbiAgICBlbXVsYXRlZF9odWVfbmFtZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkb21haW5zOiBbJ2VtdWxhdGVkX2h1ZSddXG4gICAgfSxcbiAgICBoYWFza2FfaGlkZGVuOiB1bmRlZmluZWQsXG4gICAgaGFhc2thX25hbWU6IHVuZGVmaW5lZCxcbiAgICBob21lYnJpZGdlX2hpZGRlbjogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICBob21lYnJpZGdlX25hbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IHVuZGVmaW5lZCxcbiAgICBhdHRyaWJ1dGlvbjogdW5kZWZpbmVkLFxuICAgIGN1c3RvbV91aV9tb3JlX2luZm86IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIGRldmljZV9jbGFzczoge1xuICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgIG9wdGlvbnM6IGhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RldmljZSBjbGFzcycsXG4gICAgICBkb21haW5zOiBbJ2JpbmFyeV9zZW5zb3InLCAnY292ZXInLCAnc2Vuc29yJ11cbiAgICB9LFxuICAgIGhpZGRlbjogeyB0eXBlOiAnYm9vbGVhbicsIGRlc2NyaXB0aW9uOiAnSGlkZSBmcm9tIFVJJyB9LFxuICAgIGFzc3VtZWRfc3RhdGU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRvbWFpbnM6IFsnc3dpdGNoJywgJ2xpZ2h0JywgJ2NvdmVyJywgJ2NsaW1hdGUnLCAnZmFuJywgJ2dyb3VwJ11cbiAgICB9LFxuICAgIGluaXRpYWxfc3RhdGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZG9tYWluczogWydhdXRvbWF0aW9uJ11cbiAgICB9LFxuICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgaGFzc0F0dHJpYnV0ZVV0aWw7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuXG53aW5kb3cuSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHByb3ApIHsgcmV0dXJuIHByb3A7IH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuL2Jvb3QuanMnO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHN0YXRpYyBzdHJpbmcgdmFsdWUgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZmlsdGVyXG4gKiBzdHJpbmdzIGJ5IGFzc2V0aW5nIHRoYXQgdGhleSBoYXZlIGJlZW4gY3JlYXRlZCB2aWEgdGhpcyBjbGFzcy4gVGhlXG4gKiBgdmFsdWVgIHByb3BlcnR5IHJldHVybnMgdGhlIHN0cmluZyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICovXG5jbGFzcyBMaXRlcmFsU3RyaW5nIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nKSB7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdGhpcy52YWx1ZSA9IHN0cmluZy50b1N0cmluZygpO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IExpdGVyYWxTdHJpbmcgc3RyaW5nIHZhbHVlXG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGxpdGVyYWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMaXRlcmFsU3RyaW5nKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUxpdGVyYWxTdHJpbmd9ICovKHZhbHVlKS52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tbGl0ZXJhbCB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWxMaXRlcmFsIGZ1bmN0aW9uOiAke3ZhbHVlfWBcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gaHRtbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudCB9ICovKHZhbHVlKS5pbm5lckhUTUw7XG4gIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBMaXRlcmFsU3RyaW5nKSB7XG4gICAgcmV0dXJuIGxpdGVyYWxWYWx1ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLXRlbXBsYXRlIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbCBmdW5jdGlvbjogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgdGhhdCBjcmVhdGVzIGFuIEhUTUwgPHRlbXBsYXRlPiBlbGVtZW50IGZyb20gdGhlXG4gKiBjb250ZW50cyBvZiB0aGUgc3RyaW5nLlxuICpcbiAqIFRoaXMgYWxsb3dzIHlvdSB0byB3cml0ZSBhIFBvbHltZXIgVGVtcGxhdGUgaW4gSmF2YVNjcmlwdC5cbiAqXG4gKiBUZW1wbGF0ZXMgY2FuIGJlIGNvbXBvc2VkIGJ5IGludGVycG9sYXRpbmcgYEhUTUxUZW1wbGF0ZUVsZW1lbnRgcyBpblxuICogZXhwcmVzc2lvbnMgaW4gdGhlIEphdmFTY3JpcHQgdGVtcGxhdGUgbGl0ZXJhbC4gVGhlIG5lc3RlZCB0ZW1wbGF0ZSdzXG4gKiBgaW5uZXJIVE1MYCBpcyBpbmNsdWRlZCBpbiB0aGUgY29udGFpbmluZyB0ZW1wbGF0ZS4gIFRoZSBvbmx5IG90aGVyXG4gKiB2YWx1ZXMgYWxsb3dlZCBpbiBleHByZXNzaW9ucyBhcmUgdGhvc2UgcmV0dXJuZWQgZnJvbSBgaHRtbExpdGVyYWxgXG4gKiB3aGljaCBlbnN1cmVzIG9ubHkgbGl0ZXJhbCB2YWx1ZXMgZnJvbSBKUyBzb3VyY2UgZXZlciByZWFjaCB0aGUgSFRNTCwgdG9cbiAqIGd1YXJkIGFnYWluc3QgWFNTIHJpc2tzLlxuICpcbiAqIEFsbCBvdGhlciB2YWx1ZXMgYXJlIGRpc2FsbG93ZWQgaW4gZXhwcmVzc2lvbnMgdG8gaGVscCBwcmV2ZW50IFhTU1xuICogYXR0YWNrczsgaG93ZXZlciwgYGh0bWxMaXRlcmFsYCBjYW4gYmUgdXNlZCB0byBjb21wb3NlIHN0YXRpY1xuICogc3RyaW5nIHZhbHVlcyBpbnRvIHRlbXBsYXRlcy4gVGhpcyBpcyB1c2VmdWwgdG8gY29tcG9zZSBzdHJpbmdzIGludG9cbiAqIHBsYWNlcyB0aGF0IGRvIG5vdCBhY2NlcHQgaHRtbCwgbGlrZSB0aGUgY3NzIHRleHQgb2YgYSBgc3R5bGVgXG4gKiBlbGVtZW50LlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPjpob3N0eyBjb250ZW50OlwiLi4uXCIgfTwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7dGhpcy5wYXJ0aWFsVGVtcGxhdGV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHBhcnRpYWxUZW1wbGF0ZSgpIHsgcmV0dXJuIGh0bWxgPHNwYW4+UGFydGlhbCE8L3NwYW4+YDsgfVxuICpcbiAqIEBwYXJhbSB7IUlUZW1wbGF0ZUFycmF5fSBzdHJpbmdzIENvbnN0YW50IHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBWYXJpYWJsZSBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHJldHVybiB7IUhUTUxUZW1wbGF0ZUVsZW1lbnR9IENvbnN0cnVjdGVkIEhUTUxUZW1wbGF0ZUVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSBmdW5jdGlvbiBodG1sKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICBjb25zdCB0ZW1wbGF0ZSA9IC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnR9ICovKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpO1xuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGh0bWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pO1xuICByZXR1cm4gdGVtcGxhdGU7XG59O1xuXG4vKipcbiAqIEFuIGh0bWwgbGl0ZXJhbCB0YWcgdGhhdCBjYW4gYmUgdXNlZCB3aXRoIGBodG1sYCB0byBjb21wb3NlLlxuICogYSBsaXRlcmFsIHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT5cbiAqICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gKiAgICAgICAgICAgJHt0aGlzLnN0eWxlVGVtcGxhdGUoKX1cbiAqICAgICAgICAgPC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHtzdGF0aWNWYWx1ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgc3R5bGVUZW1wbGF0ZSgpIHtcbiAqICAgICAgICByZXR1cm4gaHRtbExpdGVyYWxgLnNoYWRvd2VkIHsgYmFja2dyb3VuZDogZ3JheTsgfWA7XG4gKiAgICAgfVxuICpcbiAqIEBwYXJhbSB7IUlUZW1wbGF0ZUFycmF5fSBzdHJpbmdzIENvbnN0YW50IHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBWYXJpYWJsZSBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHJldHVybiB7IUxpdGVyYWxTdHJpbmd9IENvbnN0cnVjdGVkIGxpdGVyYWwgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sTGl0ZXJhbCA9IGZ1bmN0aW9uKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICByZXR1cm4gbmV3IExpdGVyYWxTdHJpbmcodmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBsaXRlcmFsVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKSk7XG59O1xuIiwiaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgQ3VpQmFzZUVsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgbGV0IGV4dHJhcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfZGF0YV90ZW1wbGF0ZTtcbiAgICBpZiAoZXh0cmFzKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFzKSkge1xuICAgICAgICBleHRyYXMgPSBbZXh0cmFzXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHRyYXMubWFwKGV4dHJhID0+IHdpbmRvdy5jdXN0b21VSS5jb21wdXRlVGVtcGxhdGUoXG4gICAgICAgIGV4dHJhLFxuICAgICAgICBoYXNzLFxuICAgICAgICBoYXNzLnN0YXRlcyxcbiAgICAgICAgc3RhdGVPYmosXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICAgIC8qIGF0dHJpYnV0ZT0gKi8gdW5kZWZpbmVkLFxuICAgICAgICBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgICkpLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0ICE9PSBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgIGlmIChleHRyYS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkO1xuICB9XG5cbiAgaGFzRXh0cmEoZXh0cmEpIHtcbiAgICByZXR1cm4gZXh0cmEubGVuZ3RoID4gMDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ3VpQmFzZUVsZW1lbnQ7XG4iLCJpbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIER5bmFtaWNFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgZWxlbWVudE5hbWU6IFN0cmluZyxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZyknLFxuICAgIF07XG4gIH1cblxuICBvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZykge1xuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICBlbGVtZW50TmFtZSA/IGVsZW1lbnROYW1lLnRvVXBwZXJDYXNlKCkgOiAnRElWJyxcbiAgICAgIHsgaGFzcywgc3RhdGVPYmosIGluRGlhbG9nIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtZWxlbWVudCcsIER5bmFtaWNFbGVtZW50KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5cbmltcG9ydCAnLi9keW5hbWljLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgRHluYW1pY1dpdGhFeHRyYSBleHRlbmRzIGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtY2FyZC1kaXNwbGF5Jykge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuY29udHJvbC13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAtNHB4IC0xNnB4IC00cHggMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICB9XG4gICAgICBoYS1zdGF0ZS1sYWJlbC1iYWRnZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgICBkeW5hbWljLWVsZW1lbnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICAjb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgICNsb2NrIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgfVxuICAgICAgI2xvY2suaGEtY292ZXItY29udHJvbHMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLmV4dHJhIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2Utc2l6ZTogMzZweDtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1mb250LXNpemU6IDEuMmVtO1xuICAgICAgfVxuICAgICAgLnN0YXRlIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzJD0nW1tleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSldXSBob3Jpem9udGFsIGxheW91dCc+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbZXh0cmFPYmpWaXNpYmxlXV0nPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnXG4gICAgICAgICAgICAgICAgICBpdGVtcz0nW1tleHRyYU9ial1dJ1xuICAgICAgICAgICAgICAgICAgb24tZG9tLWNoYW5nZT0nZXh0cmFEb21DaGFuZ2VkJz5cbiAgICAgICAgICA8aGEtc3RhdGUtbGFiZWwtYmFkZ2UgaGFzcz0nW1toYXNzXV0nIHN0YXRlPSdbW2l0ZW1dXSc+PC9oYS1zdGF0ZS1sYWJlbC1iYWRnZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaildXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1lbGVtZW50XG4gICAgICAgICAgICAgICAgY2xhc3M9J2ZsZXgnXG4gICAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICAgICAgICBlbGVtZW50LW5hbWU9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICA8L2R5bmFtaWMtZWxlbWVudD5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaildXSc+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVybGF5XCIgb24tY2xpY2s9J2NsaWNrSGFuZGxlcic+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2tdXSc+XG4gICAgICAgICAgICAgICAgICA8aXJvbi1pY29uIGlkPVwibG9ja1wiIGNsYXNzJD1cIltbY29udHJvbEVsZW1lbnRdXVwiIGljb249XCJtZGk6bG9jay1vdXRsaW5lXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWNvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRlJz5bW2NvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgZXh0cmFPYmo6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBfYXR0YWNoZWQpJyxcbiAgICAgIH0sXG4gICAgICBfYXR0YWNoZWQ6IEJvb2xlYW4sXG4gICAgICBleHRyYU9ialZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZyknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgYXR0YWNoZWQpIHtcbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfYmFkZ2UgfHwgIWF0dGFjaGVkKSByZXR1cm4gW107XG4gICAgbGV0IGV4dHJhQmFkZ2VzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFCYWRnZXMpKSB7XG4gICAgICBleHRyYUJhZGdlcyA9IFtleHRyYUJhZGdlc107XG4gICAgfVxuICAgIHJldHVybiBleHRyYUJhZGdlcy5tYXAoKGV4dHJhQmFkZ2UpID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKGV4dHJhQmFkZ2UuZW50aXR5X2lkICYmIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSkge1xuICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgdGhpcywgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdLCB0aGlzLmluRGlhbG9nLFxuICAgICAgICAgIC8qIGFsbG93SGlkZGVuPSAqL2ZhbHNlKSk7XG4gICAgICB9IGVsc2UgaWYgKGV4dHJhQmFkZ2UuYXR0cmlidXRlICYmXG4gICAgICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXNbZXh0cmFCYWRnZS5hdHRyaWJ1dGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHN0YXRlOiBTdHJpbmcoc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0pLFxuICAgICAgICAgIGVudGl0eV9pZDogJ25vbmUubm9uZScsXG4gICAgICAgICAgYXR0cmlidXRlczogeyB1bml0X29mX21lYXN1cmVtZW50OiBleHRyYUJhZGdlLnVuaXQgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICAgIGxldCBibGFja2xpc3QgPSBleHRyYUJhZGdlLmJsYWNrbGlzdF9zdGF0ZXM7XG4gICAgICBpZiAoYmxhY2tsaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJsYWNrbGlzdCkpIHtcbiAgICAgICAgICBibGFja2xpc3QgPSBbYmxhY2tsaXN0XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxhY2tsaXN0LnNvbWUodiA9PiBSZWdFeHAodikudGVzdChyZXN1bHQuc3RhdGUudG9TdHJpbmcoKSkpKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5fZW50aXR5RGlzcGxheSA9ICcnO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KS5maWx0ZXIoZXh0cmFCYWRnZSA9PiBleHRyYUJhZGdlICE9IG51bGwpO1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhVmlzaWJsZShleHRyYU9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cgfHwgIWV4dHJhT2JqKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGV4dHJhT2JqLmxlbmd0aCAhPT0gMDtcbiAgfVxuXG4gIGV4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKSB7XG4gICAgcmV0dXJuIGV4dHJhT2JqVmlzaWJsZSA/ICdleHRyYScgOiAnJztcbiAgfVxuXG4gIF9zaG93Q29udHJvbChpbkRpYWxvZywgc3RhdGVPYmopIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiAhc3RhdGVPYmouYXR0cmlidXRlcy5oaWRlX2NvbnRyb2w7XG4gIH1cblxuICBjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKSB7XG4gICAgLy8gaGFMb2NhbGl6ZSByZW1vdmVkIGluIDAuNjFcbiAgICByZXR1cm4gc3VwZXIuY29tcHV0ZVN0YXRlRGlzcGxheSh0aGlzLmhhTG9jYWxpemUgfHwgdGhpcy5sb2NhbGl6ZSwgc3RhdGVPYmopO1xuICB9XG5cbiAgaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzIHx8XG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2s7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgY29uc3QgbG9jayA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjbG9jaycpO1xuICAgIGlmIChsb2NrKSB7XG4gICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3Blbi1vdXRsaW5lJztcbiAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcwLjEnO1xuICAgIH1cbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gICAgICBpZiAobG9jaykge1xuICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3V0bGluZSc7XG4gICAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgfVxuICAgIH0sIDUwMDApO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBhcHBseVRoZW1lcyhoYXNzLCBlbGVtZW50LCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUgfHwgJ2RlZmF1bHQnO1xuICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgZWxlbWVudCwgaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgdGhlbWVOYW1lKTtcbiAgfVxuXG4gIGV4dHJhRG9tQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKVxuICAgICAgLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgdGhpcy5hcHBseVRoZW1lcyh0aGlzLmhhc3MsIGVsZW0sIGVsZW0uc3RhdGUpO1xuICAgICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy13aXRoLWV4dHJhJywgRHluYW1pY1dpdGhFeHRyYSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEV2ZW50c01peGluIGZyb20gJy4uL21peGlucy9ldmVudHMtbWl4aW4uanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFDb25maWdDdXN0b21VaSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXIuRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj48L3N0eWxlPlxuICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj0nbWRpOmFycm93LWxlZnQnXG4gICAgICAgICAgICBvbi1jbGljaz0nX2JhY2tIYW5kbGVyJ1xuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5DdXN0b20gVUkgc2V0dGluZ3M8L2Rpdj5cbiAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9J1tbaXNXaWRlXV0nPlxuICAgICAgICA8cGFwZXItY2FyZCBoZWFkaW5nPSdEZXZpY2UgbmFtZSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cbiAgICAgICAgICAgIFNldCBkZXZpY2UgbmFtZSBzbyB0aGF0IHlvdSBjYW4gcmVmZXJlbmNlIGl0IGluIHBlci1kZXZpY2Ugc2V0dGluZ3NcbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD0nTmFtZSdcbiAgICAgICAgICAgICAgdmFsdWU9J3t7bmFtZX19J1xuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcGFwZXItY2FyZD5cbiAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG5cbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogJ25hbWVDaGFuZ2VkJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5uYW1lID0gd2luZG93LmN1c3RvbVVJLmdldE5hbWUoKTtcbiAgfVxuXG4gIG5hbWVDaGFuZ2VkKG5hbWUpIHtcbiAgICB3aW5kb3cuY3VzdG9tVUkuc2V0TmFtZShuYW1lKTtcbiAgfVxuXG4gIF9iYWNrSGFuZGxlcigpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgdGhpcy5maXJlKCdsb2NhdGlvbi1jaGFuZ2VkJyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGEtY29uZmlnLWN1c3RvbS11aScsIEhhQ29uZmlnQ3VzdG9tVWkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYVRoZW1lZFNsaWRlciBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBtYXJnaW46IHZhcigtLWhhLXRoZW1lZC1zbGlkZXItbWFyZ2luLCBpbml0aWFsKTtcbiAgICAgIH1cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLXBpbi1zdGFydC1jb2xvcjogIHZhcigtLXBhcGVyLXNsaWRlci1waW4tY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuZGlzYWJsZS1vZmYtd2hlbi1taW4uaXMtb24ge1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXIta25vYi1jb2xvcik7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXIta25vYi1jb2xvcik7XG4gICAgICB9XG4gICAgICBwYXBlci1zbGlkZXIge1xuICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1oYS1wYXBlci1zbGlkZXItd2lkdGgsIDIwMHB4KTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLXNsaWRlclxuICAgICAgICAgbWluPSdbW190aGVtZWRNaW5dXSdcbiAgICAgICAgIG1heD0nW1tfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJtYXhcIiwgbWF4KV1dJ1xuICAgICAgICAgcGluPSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcInBpblwiLCBwaW4pXV0nXG4gICAgICAgICBjbGFzcyQ9J1tbY29tcHV0ZUNsYXNzKHRoZW1lLCBpc09uLCBfdGhlbWVkTWluKV1dJyB2YWx1ZT0nW1t2YWx1ZV1dJ1xuICAgICAgICAgb24tY2hhbmdlPSd2YWx1ZUNoYW5nZWQnPlxuICAgIDwvcGFwZXItc2xpZGVyPlxuICAgIGA7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuZGlzYWJsZU9mZldoZW5NaW4gPSAhdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZSh0aGlzLnRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pO1xuICAgIHRoaXMuY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGlzLnRoZW1lLCB0aGlzLmRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICB9LFxuICAgICAgcGluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBpc09uOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlT2ZmV2hlbk1pbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgdGhlbWU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIF90aGVtZWRNaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1pblwiLCBtaW4pJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKScsXG4gICAgXTtcbiAgfVxuXG4gIGNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhlbWUsIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCkge1xuICAgIHRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCA9IHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUoXG4gICAgICB0aGVtZSwgJ3JlcG9ydF93aGVuX25vdF9jaGFuZ2VkJywgIWRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCk7XG4gIH1cblxuICBfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgYXR0ciwgZGVmKSB7XG4gICAgaWYgKHRoZW1lKSB7XG4gICAgICBpZiAoYXR0ciBpbiB0aGVtZSkge1xuICAgICAgICByZXR1cm4gdGhlbWVbYXR0cl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG4gIH1cblxuICBjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIHRoZW1lZE1pbikge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBpZiAoaXNPbikge1xuICAgICAgcmVzdWx0ICs9ICdpcy1vbiAnO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgJ29mZl93aGVuX21pbicsICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKSB8fCB0aGVtZWRNaW4gPT09IDApIHtcbiAgICAgIC8vIElmIG9mZldoZW5NaW4gaXMgZW5hYmxlZCBkb24ndCBjdXN0b21pemUuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBgJHtyZXN1bHR9ZGlzYWJsZS1vZmYtd2hlbi1taW5gO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQgJiYgdGhpcy52YWx1ZSA9PT0gZXYudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS10aGVtZWQtc2xpZGVyJywgSGFUaGVtZWRTbGlkZXIpO1xuIiwiaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyc7XG5pbXBvcnQgc3RhdGVDYXJkVHlwZSBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2NhcmRfdHlwZS5qcyc7XG5cbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuaW1wb3J0ICcuL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMnO1xuaW1wb3J0ICcuL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMnO1xuXG5jb25zdCBTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUyA9IFsnY29uZmlndXJhdG9yJ107XG5jb25zdCBET01BSU5fVE9fU0xJREVSX1NVUFBPUlQgPSB7XG4gIGxpZ2h0OiAxLCAvLyBTVVBQT1JUX0JSSUdIVE5FU1NcbiAgY292ZXI6IDQsIC8vIFNVUFBPUlRfU0VUX1BPU0lUSU9OXG4gIGNsaW1hdGU6IDEsIC8vIFNVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFXG59O1xuY29uc3QgVFlQRV9UT19DT05UUk9MID0ge1xuICB0b2dnbGU6ICdoYS1lbnRpdHktdG9nZ2xlJyxcbiAgZGlzcGxheTogJycsXG4gIGNvdmVyOiAnaGEtY292ZXItY29udHJvbHMnLFxufTtcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRDdXN0b21VaSBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2lucHV0Q2hhbmdlZChoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmopJyxcbiAgICBdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAoY29udGFpbmVyLnRhZ05hbWUgPT09ICdESVYnICYmXG4gICAgICAgIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0ZScpIHx8IGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NoaWxkLWNhcmQnKSkpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgLy8gU2luY2UgdGhpcyBkb2Vzbid0IGFjdHVhbGx5IGNoYW5nZSB0aGUgYmFja2dyb3VuZCAtIG5vIG5lZWQgdG8gY2xlYXIgaXQuXG4gICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3ZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgaW5oZXJpdCknKTtcblxuICAgICAgLy8gUG9seWZpbGwgJ3VwZGF0ZVN0eWxlcycuXG4gICAgICBpZiAoIWNvbnRhaW5lci51cGRhdGVTdHlsZXMpIHtcbiAgICAgICAgY29udGFpbmVyLnVwZGF0ZVN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KGtleSwgc3R5bGVzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0Q2hhbmdlZCh0aGlzLmhhc3MsIHRoaXMuaW5EaWFsb2csIHRoaXMuc3RhdGVPYmopO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBkaXNwbGF5OiAnJywgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLCB0aGlzLmhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sICdkZWZhdWx0Jyk7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuICAgIH1cbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgYmFkZ2VNb2RlKGhhc3MsIHN0YXRlT2JqLCBkb21haW4pIHtcbiAgICBjb25zdCBzdGF0ZXMgPSBbXTtcbiAgICBpZiAoZG9tYWluID09PSAnZ3JvdXAnKSB7XG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGhhc3Muc3RhdGVzW2lkXTtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gSUQgJHtpZH0gaW4gZ3JvdXAgJHtzdGF0ZU9iai5lbnRpdHlfaWR9YCk7XG4gICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5iYWRnZXNfbGlzdCB8fFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5iYWRnZXNfbGlzdC5pbmNsdWRlcyhzdGF0ZS5lbnRpdHlfaWQpKSB7XG4gICAgICAgICAgc3RhdGVzLnB1c2god2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgICAgdGhpcywgc3RhdGUsIGZhbHNlIC8qIGluRGlhbG9nICovLCBmYWxzZSAvKiBhbGxvd0hpZGRlbiAqLykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzLnB1c2goc3RhdGVPYmopO1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH07XG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0ZScpKSB7XG4gICAgICAgICAgcGFyYW1zLm1hcmdpbiA9ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC1tYXJnaW4sIDApJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhwYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgJ0hBLUJBREdFUy1DQVJEJyxcbiAgICAgIHsgaGFzcywgc3RhdGVzIH0pO1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoe1xuICAgICAgICB3aWR0aDogJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLXdpZHRoLCBpbml0aWFsKScsXG4gICAgICAgICd0ZXh0LWFsaWduJzogJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLXRleHQtYWxpZ24sIGluaXRpYWwpJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmxhc3RDaGlsZC5zdHlsZS5mb250U2l6ZSA9ICc4NSUnO1xuXG4gICAgLy8gU2luY2UgdGhpcyB2YXJpYWJsZSBvbmx5IGFmZmVjdHMgYmFkZ2VzIG1vZGUgLSBubyBuZWVkIHRvIGNsZWFuIGl0IHVwLlxuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0taGEtc3RhdGUtbGFiZWwtYmFkZ2UtbWFyZ2luLWJvdHRvbScsICcwJyk7XG4gIH1cblxuICBjbGVhbkJhZGdlU3R5bGUoKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIGRpc3BsYXk6ICcnLFxuICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICd0ZXh0LWFsaWduJzogJycsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdHlsZXMoeyBkaXNwbGF5OiAnJywgbWFyZ2luOiAnJyB9KTtcbiAgfVxuXG4gIGFwcGx5VGhlbWVzKGhhc3MsIG1vZGlmaWVkT2JqKSB7XG4gICAgbGV0IHRoZW1lVGFyZ2V0ID0gdGhpcztcbiAgICBsZXQgdGhlbWVOYW1lID0gJ2RlZmF1bHQnO1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoZW1lVGFyZ2V0ID0gdGhpcy5fY29udGFpbmVyO1xuICAgIH1cbiAgICBpZiAobW9kaWZpZWRPYmouYXR0cmlidXRlcy50aGVtZSkge1xuICAgICAgdGhlbWVOYW1lID0gbW9kaWZpZWRPYmouYXR0cmlidXRlcy50aGVtZTtcbiAgICB9XG4gICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICB0aGVtZVRhcmdldCwgaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgdGhlbWVOYW1lKTtcbiAgfVxuXG4gIG1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikge1xuICAgIGlmICghbW9kaWZpZWRPYmopIHtcbiAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMCcgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IG1hcmdpbjogJycsIHBhZGRpbmc6ICcnIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBvYmosIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIERPTUFJTl9UT19TTElERVJfU1VQUE9SVFtkb21haW5dICYmXG4gICAgICAoRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiBvYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMpICYmXG4gICAgICBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgJiYgb2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlICE9PSAnbm8tc2xpZGVyJztcbiAgfVxuXG4gIGlucHV0Q2hhbmdlZChoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmopIHtcbiAgICBpZiAoIXN0YXRlT2JqIHx8ICFoYXNzIHx8ICF0aGlzLl9pc0F0dGFjaGVkKSByZXR1cm47XG4gICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgICBjb25zdCBtb2RpZmllZE9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgIHRoaXMsIHN0YXRlT2JqLCBpbkRpYWxvZywgdHJ1ZSAvKiBhbGxvd0hpZGRlbiAqLyk7XG5cbiAgICBpZiAodGhpcy5tYXliZUhpZGVFbnRpdHkobW9kaWZpZWRPYmopKSByZXR1cm47XG5cbiAgICB0aGlzLmFwcGx5VGhlbWVzKGhhc3MsIG1vZGlmaWVkT2JqKTtcblxuICAgIGlmICghaW5EaWFsb2cgJiYgbW9kaWZpZWRPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgPT09ICdiYWRnZXMnKSB7XG4gICAgICB0aGlzLmJhZGdlTW9kZShoYXNzLCBtb2RpZmllZE9iaiwgZG9tYWluKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWd1bGFyTW9kZV8oaGFzcywgaW5EaWFsb2csIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH1cbiAgfVxuXG4gIHJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIHRoaXMuY2xlYW5CYWRnZVN0eWxlKCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBoYXNzLFxuICAgICAgc3RhdGVPYmosXG4gICAgICBpbkRpYWxvZyxcbiAgICB9O1xuICAgIGNvbnN0IG9yaWdpbmFsU3RhdGVDYXJkVHlwZSA9IHN0YXRlQ2FyZFR5cGUoaGFzcywgc3RhdGVPYmopO1xuICAgIGxldCBjdXN0b21TdGF0ZUNhcmRUeXBlO1xuICAgIGNvbnN0IHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeTtcblxuICAgIGlmIChkb21haW4gPT09ICdsaWdodCcgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBjb250cm9sRWxlbWVudDogJ2hhLWVudGl0eS10b2dnbGUnLFxuICAgICAgICBzZXJ2aWNlTWluOiAndHVybl9vZmYnLFxuICAgICAgICBzZXJ2aWNlTWF4OiAndHVybl9vbicsXG4gICAgICAgIHZhbHVlTmFtZTogJ2JyaWdodG5lc3MnLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjb3ZlcicgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBjb250cm9sRWxlbWVudDogJ2hhLWNvdmVyLWNvbnRyb2xzJyxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHNlcnZpY2VNaW46ICdjbG9zZV9jb3ZlcicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICdzZXRfY292ZXJfcG9zaXRpb24nLFxuICAgICAgICBzZXRWYWx1ZU5hbWU6ICdwb3NpdGlvbicsXG4gICAgICAgIHZhbHVlTmFtZTogJ2N1cnJlbnRfcG9zaXRpb24nLFxuICAgICAgICBuYW1lT246ICdvcGVuJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY2xpbWF0ZScgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBjb250cm9sRWxlbWVudDogJ2hhLWNsaW1hdGUtc3RhdGUnLFxuICAgICAgICBtaW46IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWluX3RlbXAgfHwgLTEwMCxcbiAgICAgICAgbWF4OiBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF90ZW1wIHx8IDIwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHNlcnZpY2VNYXg6ICdzZXRfdGVtcGVyYXR1cmUnLFxuICAgICAgICB2YWx1ZU5hbWU6ICd0ZW1wZXJhdHVyZScsXG4gICAgICAgIG5hbWVPbjogJycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKFRZUEVfVE9fQ09OVFJPTFtvcmlnaW5hbFN0YXRlQ2FyZFR5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9IFRZUEVfVE9fQ09OVFJPTFtvcmlnaW5hbFN0YXRlQ2FyZFR5cGVdO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQgJiZcbiAgICAgICAgICAgICAgICFTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUy5pbmNsdWRlcyhvcmlnaW5hbFN0YXRlQ2FyZFR5cGUpKSB7XG4gICAgICBwYXJhbXMuaW5EaWFsb2cgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09ICd1bmF2YWlsYWJsZScpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9ICcnO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sX2VsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sX2VsZW1lbnQ7XG4gICAgfVxuXG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgIChzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIHx8IGN1c3RvbVN0YXRlQ2FyZFR5cGUgfHwgYFNUQVRFLUNBUkQtJHtvcmlnaW5hbFN0YXRlQ2FyZFR5cGV9YCkudG9VcHBlckNhc2UoKSxcbiAgICAgIHBhcmFtcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC1jdXN0b20tdWknLCBTdGF0ZUNhcmRDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcbmltcG9ydCAnLi9oYS10aGVtZWQtc2xpZGVyLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRXaXRoU2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5zZWNvbmQtbGluZSwgLnN0YXRlLWFuZC10b2dnbGUsIC5zdGF0ZS1pbmZvIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc3RhdGUtYW5kLXRvZ2dsZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnNlY29uZC1saW5lIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLnNlY29uZC1saW5lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICB9XG4gICAgICAuc3RyZXRjaCAuc2Vjb25kLWxpbmUsIC5zdHJldGNoIGhhLXRoZW1lZC1zbGlkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS1oYS1wYXBlci1zbGlkZXItd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1pbmZvIHtcbiAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsO1xuICAgICAgfVxuICAgICAgaGEtdGhlbWVkLXNsaWRlciwgLnRvcC13cmFwcGVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnRvcC13cmFwcGVyLnN0cmV0Y2gge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9J2NvbnRhaW5lcicgY2xhc3MkPSdob3Jpem9udGFsIGxheW91dCBmbGV4IHRvcC13cmFwcGVyIFtbX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKV1dJz5cbiAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGp1c3RpZmllZCBmbGV4LWF1dG8gc3RhdGUtYW5kLXRvZ2dsZSc+XG4gICAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgICBjbGFzcz0nc3RhdGUtaW5mbyBmbGV4LWF1dG8nXG4gICAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgICAgc2Vjb25kYXJ5LWxpbmUkPSdbW2hhc0V4dHJhKGV4dHJhKV1dJ1xuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0JyBpdGVtcz0nW1tleHRyYV1dJz5cbiAgICAgICAgICAgIDxkaXY+W1tpdGVtXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3N0YXRlLWluZm8+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1ticmVha1NsaWRlcl1dJyBjbGFzcz0naGlkZGVuJz5cbiAgICAgICAgICA8ZHluYW1pYy13aXRoLWV4dHJhIGhhc3M9J1tbaGFzc11dJyBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXScgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz48L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW3Nob3dTbGlkZXJdXScgcmVzdGFtcD5cbiAgICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQgZmxleC1hdXRvIGVuZC1qdXN0aWZpZWQgc2Vjb25kLWxpbmUnPlxuICAgICAgICAgIDxoYS10aGVtZWQtc2xpZGVyXG4gICAgICAgICAgICBpZD0nc2xpZGVyJ1xuICAgICAgICAgICAgbWF4PVtbbWF4XV1cbiAgICAgICAgICAgIG1pbj1bW21pbl1dXG4gICAgICAgICAgICB0aGVtZT0nW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNsaWRlcl90aGVtZV1dJ1xuICAgICAgICAgICAgaXMtb249J1tbaXNPbihzdGF0ZU9iaiwgbmFtZU9uKV1dJ1xuICAgICAgICAgICAgdmFsdWU9J3t7c2xpZGVyVmFsdWV9fSdcbiAgICAgICAgICAgIGRpc2FibGUtb2ZmLXdoZW4tbWluPSd7e2Rpc2FibGVPZmZXaGVuTWlufX0nXG4gICAgICAgICAgICBvbi1jaGFuZ2U9J3NsaWRlckNoYW5nZWQnXG4gICAgICAgICAgICBvbi1jbGljaz0nc3RvcFByb3BhZ2F0aW9uJz5cbiAgICAgICAgICA8L2hhLXRoZW1lZC1zbGlkZXI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbWyFicmVha1NsaWRlcl1dJz5cbiAgICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW46IFN0cmluZyxcbiAgICAgIHNlcnZpY2VNaW46IFN0cmluZyxcbiAgICAgIHNlcnZpY2VNYXg6IFN0cmluZyxcbiAgICAgIHZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgc2V0VmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICBuYW1lT246IHsgdHlwZTogU3RyaW5nLCB2YWx1ZTogJ29uJyB9LFxuICAgICAgbWluOiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDAgfSxcbiAgICAgIG1heDogeyB0eXBlOiBOdW1iZXIsIHZhbHVlOiAyNTUgfSxcblxuICAgICAgc2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlT2ZmV2hlbk1pbjogQm9vbGVhbixcbiAgICAgIG1vZGU6IFN0cmluZyxcbiAgICAgIHN0cmV0Y2hTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGJyZWFrU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBoaWRlU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBsaW5lVG9vTG9uZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbWluTGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICBtYXhMaW5lQnJlYWs6IE51bWJlcixcbiAgICAgIHNob3dTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBjb21wdXRlZDogJ19zaG93U2xpZGVyKGluRGlhbG9nLCBzdGF0ZU9iaiwgaGlkZVNsaWRlciknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9vbklyb25SZXNpemUgPSB0aGlzLl9vbklyb25SZXNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbklyb25SZXNpemUpO1xuICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbklyb25SZXNpemUpO1xuICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnc3RhdGVPYmpDaGFuZ2VkKHN0YXRlT2JqLCBuYW1lT24sIHZhbHVlTmFtZSknLFxuICAgIF07XG4gIH1cblxuICBfd2FpdEZvckxheW91dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ29ubmVjdGVkKSByZXR1cm47XG4gICAgdGhpcy5fc2V0TW9kZSgpO1xuICAgIGlmICh0aGlzLl9mcmFtZUlkKSByZXR1cm47XG4gICAgdGhpcy5yZWFkeVRvQ29tcHV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2ZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuX2ZyYW1lSWQgPSBudWxsO1xuICAgICAgdGhpcy5yZWFkeVRvQ29tcHV0ZSA9IHRydWU7XG4gICAgICB0aGlzLl9vbklyb25SZXNpemUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRNb2RlKCkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIGhpZGVTbGlkZXI6IHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJyAmJiB0aGlzLmxpbmVUb29Mb25nLFxuICAgICAgYnJlYWtTbGlkZXI6XG4gICAgICAgICAgICh0aGlzLm1vZGUgPT09ICdicmVhay1zbGlkZXInIHx8IHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykgJiZcbiAgICAgICAgICAgdGhpcy5saW5lVG9vTG9uZyxcbiAgICB9O1xuICAgIGlmICghdGhpcy5zaG93U2xpZGVyKSB7XG4gICAgICBvYmouYnJlYWtTbGlkZXIgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgfVxuXG4gIF9vbklyb25SZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnJlYWR5VG9Db21wdXRlKSByZXR1cm47XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ25vLXNsaWRlcicpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIGhpZGVTbGlkZXI6IHRydWUsXG4gICAgICAgIGJyZWFrU2xpZGVyOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByZXZCcmVha1NsaWRlciA9IHRoaXMuYnJlYWtTbGlkZXI7XG4gICAgY29uc3QgcHJldkhpZGVTbGlkZXIgPSB0aGlzLmhpZGVTbGlkZXI7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgIGhpZGVTbGlkZXI6IGZhbHNlLFxuICAgICAgYnJlYWtTbGlkZXI6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzLiQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgaWYgKGNvbnRhaW5lcldpZHRoID09PSAwKSByZXR1cm47XG4gICAgaWYgKGNvbnRhaW5lcldpZHRoIDw9IHRoaXMubWluTGluZUJyZWFrKSB7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lcldpZHRoID49IHRoaXMubWF4TGluZUJyZWFrKSB7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmV2SGlkZVNsaWRlciAmJiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byB1bmhpZGUgdGhlIHNsaWRlciBpbiBvcmRlciB0byByZWNhbGN1bGF0ZSBoZWlnaHQuXG4gICAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IHN0YXRlSGVpZ2h0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0ZS1pbmZvJykuY2xpZW50SGVpZ2h0O1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IGNvbnRhaW5lckhlaWdodCA+IHN0YXRlSGVpZ2h0ICogMS41O1xuICAgICAgaWYgKHRoaXMubGluZVRvb0xvbmcpIHtcbiAgICAgICAgdGhpcy5taW5MaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoIXByZXZCcmVha1NsaWRlcikge1xuICAgICAgICB0aGlzLm1heExpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZXRNb2RlKCk7XG4gIH1cblxuICBfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKG1vZGUgPT09ICdzaW5nbGUtbGluZScpIHtcbiAgICAgIHJldHVybiAnbm93cmFwJztcbiAgICB9XG4gICAgaWYgKHN0cmV0Y2hTbGlkZXIgJiYgbGluZVRvb0xvbmcpIHtcbiAgICAgIHJldHVybiAnc3RyZXRjaCB3cmFwJztcbiAgICB9XG4gICAgcmV0dXJuICd3cmFwJztcbiAgfVxuXG4gIF9zaG93U2xpZGVyKGluRGlhbG9nLCBzdGF0ZU9iaiwgaGlkZVNsaWRlcikge1xuICAgIGlmIChpbkRpYWxvZyB8fCBoaWRlU2xpZGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2xpZGVyQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgY29uc3QgcGFyYW0gPSB7IGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQgfTtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuO1xuICAgIGxldCB0YXJnZXQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI3NsaWRlcicpO1xuICAgIGlmIChldi50YXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgLy8gTm8gU2hhZG93IERPTSAtIHdlIGhhdmUgYWNjZXNzIHRvIG9yaWdpbmFsIHRhcmdldC5cbiAgICAgICh7IHRhcmdldCB9ID0gZXYpO1xuICAgIH0gZWxzZSBpZiAoZXYucGF0aCkge1xuICAgICAgW3RhcmdldF0gPSBldi5wYXRoO1xuICAgIH0gZWxzZSBpZiAoZXYuY29tcG9zZWRQYXRoKSB7XG4gICAgICBbdGFyZ2V0XSA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IDAgfHwgKHZhbHVlIDw9IHRhcmdldC5taW4gJiYgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pKSB7XG4gICAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZU1pbiwgcGFyYW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbVt0aGlzLnNldFZhbHVlTmFtZSB8fCB0aGlzLnZhbHVlTmFtZV0gPSB2YWx1ZTtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWF4LCBwYXJhbSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGVPYmpDaGFuZ2VkKHN0YXRlT2JqLCBuYW1lT24sIHZhbHVlTmFtZSkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHNsaWRlclZhbHVlOiB0aGlzLmlzT24oc3RhdGVPYmosIG5hbWVPbikgPyBzdGF0ZU9iai5hdHRyaWJ1dGVzW3ZhbHVlTmFtZV0gOiAwLFxuICAgIH07XG4gICAgaWYgKHN0YXRlT2JqKSB7XG4gICAgICBPYmplY3QuYXNzaWduKG9iaiwge1xuICAgICAgICBtaW5MaW5lQnJlYWs6IDAsXG4gICAgICAgIG1heExpbmVCcmVhazogOTk5LFxuICAgICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IGZhbHNlLFxuICAgICAgICBsaW5lVG9vTG9uZzogZmFsc2UsXG4gICAgICAgIG1vZGU6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlLFxuICAgICAgICBzdHJldGNoU2xpZGVyOiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RyZXRjaF9zbGlkZXIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gICAgaWYgKHN0YXRlT2JqKSB7XG4gICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqICYmICghbmFtZU9uIHx8IHN0YXRlT2JqLnN0YXRlID09PSBuYW1lT24pO1xuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRoLXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhTbGlkZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBDdWlCYXNlRWxlbWVudCBmcm9tICcuL2N1aS1iYXNlLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuL2R5bmFtaWMtd2l0aC1leHRyYS5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkV2l0aG91dFNsaWRlciBleHRlbmRzIEN1aUJhc2VFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9J2NvbnRhaW5lcicgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGp1c3RpZmllZCc+XG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvJ1xuICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgIGluLWRpYWxvZz0nW1tzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSldXSdcbiAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgIDxkaXY+W1tpdGVtXV08L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmFcbiAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXSdcbiAgICAgICAgICBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+XG4gICAgICA8L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInLCBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyKTtcbiIsIi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbmV4cG9ydCBkZWZhdWx0IChzdXBlckNsYXNzKSA9PiB7XG4gIC8qKlxuICAgKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICAgKi9cbiAgY2xhc3MgRXZlbnRzTWl4aW4gZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgICAqICAgcGF5bG9hZC5cbiAgICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAgKi9cbiAgICBmaXJlKHR5cGUsIGRldGFpbCA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHtcbiAgICAgICAgYnViYmxlczogb3B0aW9ucy5idWJibGVzID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy5idWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiBCb29sZWFuKG9wdGlvbnMuY2FuY2VsYWJsZSksXG4gICAgICAgIGNvbXBvc2VkOiBvcHRpb25zLmNvbXBvc2VkID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy5jb21wb3NlZCxcbiAgICAgIH0pO1xuICAgICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuICAgICAgY29uc3Qgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCB0aGlzO1xuICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEV2ZW50c01peGluO1xufTtcbiIsImltcG9ydCBoYXNzQXR0cmlidXRlc1V0aWwgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbC5qcyc7XG5cbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCA9IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCB8fCB7fTtcbmNvbnN0IFNVUFBPUlRFRF9TTElERVJfTU9ERVMgPSBbXG4gICdzaW5nbGUtbGluZScsICdicmVhay1zbGlkZXInLCAnYnJlYWstc2xpZGVyLXRvZ2dsZScsICdoaWRlLXNsaWRlcicsICduby1zbGlkZXInLFxuXTtcblxuY29uc3QgY3VzdG9tVWlBdHRyaWJ1dGVzID0ge1xuICBncm91cDogdW5kZWZpbmVkLFxuICBkZXZpY2U6IHVuZGVmaW5lZCxcbiAgdGVtcGxhdGVzOiB1bmRlZmluZWQsXG4gIHN0YXRlOiB1bmRlZmluZWQsXG4gIF9zdGF0ZURpc3BsYXk6IHVuZGVmaW5lZCxcbiAgY29udHJvbF9lbGVtZW50OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIHN0YXRlX2NhcmRfbW9kZToge1xuICAgIHR5cGU6ICdhcnJheScsXG4gICAgb3B0aW9uczoge1xuICAgICAgbGlnaHQ6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNvdmVyOiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICBjbGltYXRlOiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICAnKic6IFsnYmFkZ2VzJ10sXG4gICAgfSxcbiAgfSxcbiAgc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGJhZGdlc19saXN0OiB7IHR5cGU6ICdqc29uJyB9LFxuICBzaG93X2xhc3RfY2hhbmdlZDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaGlkZV9jb250cm9sOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBleHRyYV9kYXRhX3RlbXBsYXRlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGV4dHJhX2JhZGdlOiB7IHR5cGU6ICdqc29uJyB9LFxuICBzdHJldGNoX3NsaWRlcjogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgc2xpZGVyX3RoZW1lOiB7IHR5cGU6ICdqc29uJyB9LFxuICB0aGVtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBjb25maXJtX2NvbnRyb2xzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jazogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaGlkZV9pbl9kZWZhdWx0X3ZpZXc6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGljb25fY29sb3I6IHsgdHlwZTogJ3N0cmluZycgfSxcbn07XG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9IGhhc3NBdHRyaWJ1dGVzVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTO1xud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9IGhhc3NBdHRyaWJ1dGVzVXRpbC5VTktOT1dOX1RZUEU7XG5PYmplY3QuYXNzaWduKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBjdXN0b21VaUF0dHJpYnV0ZXMpO1xuIiwiaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCBnZXRWaWV3RW50aXRpZXMgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyc7XG5cbmltcG9ydCAnLi4vZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyc7XG5pbXBvcnQgVkVSU0lPTiBmcm9tICcuL3ZlcnNpb24uanMnO1xuaW1wb3J0ICcuL2hhc3MtYXR0cmlidXRlLXV0aWwuanMnO1xuXG53aW5kb3cuY3VzdG9tVUkgPSB3aW5kb3cuY3VzdG9tVUkgfHwge1xuICBTVVBQT1JURURfU0xJREVSX01PREVTOiBbXG4gICAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG4gIF0sXG5cbiAgZG9tSG9zdChlbGVtKSB7XG4gICAgaWYgKGVsZW0gPT09IGRvY3VtZW50KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCByb290ID0gZWxlbS5nZXRSb290Tm9kZSgpO1xuICAgIHJldHVybiAocm9vdCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gLyoqIEB0eXBlIHtTaGFkb3dSb290fSAqLyAocm9vdCkuaG9zdCA6IHJvb3Q7XG4gIH0sXG5cbiAgbGlnaHRPclNoYWRvdyhlbGVtLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBlbGVtLnNoYWRvd1Jvb3QgP1xuICAgICAgZWxlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDpcbiAgICAgIGVsZW0ucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0sXG5cbiAgZ2V0RWxlbWVudEhpZXJhcmNoeShyb290LCBoaWVyYXJjaHkpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZWxlbSA9IGhpZXJhcmNoeS5zaGlmdCgpO1xuICAgIGlmIChlbGVtKSB7XG4gICAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoXG4gICAgICAgIHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KHJvb3QsIGVsZW0pLCBoaWVyYXJjaHkpO1xuICAgIH1cbiAgICByZXR1cm4gcm9vdDtcbiAgfSxcblxuICBnZXRDb250ZXh0KGVsZW0pIHtcbiAgICBpZiAoZWxlbS5fY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtLl9jb250ZXh0ID0gW107XG4gICAgICBmb3IgKGxldCBlbGVtZW50ID0gKGVsZW0udGFnTmFtZSA9PT0gJ0hBLUVOVElUSUVTLUNBUkQnID8gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbSkgOiBlbGVtKTtcbiAgICAgICAgZWxlbWVudDsgZWxlbWVudCA9IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW1lbnQpKSB7XG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICAgICAgY2FzZSAnSEEtRU5USVRJRVMtQ0FSRCc6XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ncm91cEVudGl0eSkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5ncm91cEVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5ID09PSBmYWxzZSAmJiBlbGVtZW50LnN0YXRlcyAmJiBlbGVtZW50LnN0YXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGBncm91cC4ke2NvbXB1dGVTdGF0ZURvbWFpbihlbGVtZW50LnN0YXRlc1swXSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdNT1JFLUlORk8tR1JPVVAnOlxuICAgICAgICAgIGNhc2UgJ1NUQVRFLUNBUkQtQ09OVEVOVCc6XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0ZU9iaikge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5zdGF0ZU9iai5lbnRpdHlfaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnSEEtQ0FSRFMnOlxuICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSB8fCAnZGVmYXVsdF92aWV3Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBubyBkZWZhdWx0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW0uX2NvbnRleHQucmV2ZXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbS5fY29udGV4dDtcbiAgfSxcblxuICBmaW5kTWF0Y2goa2V5LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSByZXR1cm4gbnVsbDtcbiAgICBpZiAob3B0aW9uc1trZXldKSByZXR1cm4ga2V5O1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5maW5kKG9wdGlvbiA9PiBrZXkubWF0Y2goYF4ke29wdGlvbn0kYCkpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2Uoc3RhdGVPYmopIHtcbiAgICBjb25zdCBuYW1lID0gd2luZG93LmN1c3RvbVVJLmdldE5hbWUoKTtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKG5hbWUsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlW21hdGNoXSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAoZWxlbSwgc3RhdGVPYmopIHtcbiAgICBjb25zdCBjb250ZXh0ID0gd2luZG93LmN1c3RvbVVJLmdldENvbnRleHQoZWxlbSk7XG4gICAgaWYgKCFjb250ZXh0KSByZXR1cm4gc3RhdGVPYmo7XG5cbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuICAgIGNvbnRleHQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChjLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGF0dHJpYnV0ZXMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG5cbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgX3NldEtlZXAob2JqLCB2YWx1ZSkge1xuICAgIGlmIChvYmouX2N1aV9rZWVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IG9iai5fY3VpX2tlZXAgJiYgdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIGlmICghYXR0cmlidXRlcy50ZW1wbGF0ZXMpIHtcbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgdHJ1ZSk7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IG5ld0F0dHJpYnV0ZXMgPSB7fTtcbiAgICBsZXQgaGFzR2xvYmFsID0gZmFsc2U7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzLnRlbXBsYXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGF0dHJpYnV0ZXMudGVtcGxhdGVzW2tleV07XG4gICAgICBpZiAodGVtcGxhdGUubWF0Y2goL1xcYihlbnRpdGllc3xoYXNzKVxcYi8pKSB7XG4gICAgICAgIGhhc0dsb2JhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IHdpbmRvdy5jdXN0b21VSS5jb21wdXRlVGVtcGxhdGUoXG4gICAgICAgIHRlbXBsYXRlLCBoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzLFxuICAgICAgICAoc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlcyAmJiBzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzW2tleV0pIHx8XG4gICAgICAgICAgICBhdHRyaWJ1dGVzW2tleV0sXG4gICAgICAgIHN0YXRlT2JqLnVudGVtcGxhdGVkX3N0YXRlIHx8IHN0YXRlT2JqLnN0YXRlKTtcbiAgICAgIC8vIEluIGNhc2Ugb2YgbnVsbCBkb24ndCBzZXQgdGhlIHZhbHVlLlxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XG4gICAgICBuZXdBdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIGlmIChrZXkgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5zdGF0ZSkge1xuICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ19zdGF0ZURpc3BsYXknKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouX3N0YXRlRGlzcGxheSkge1xuICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBhdHRyaWJ1dGVzW2tleV0pIHtcbiAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCAhaGFzR2xvYmFsKTtcbiAgICBpZiAoIWhhc0NoYW5nZXMpIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMgPT09IGF0dHJpYnV0ZXMpIHtcbiAgICAgIC8vIFdlIGFyZSBvcGVyYXRpbmcgb24gcmVhbCBhdHRyaWJ1dGVzLiBSZXBsYWNlIHRoZW0uXG4gICAgICBjb25zdCByZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBuZXdBdHRyaWJ1dGVzKTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3QXR0cmlidXRlcywgJ3N0YXRlJykpIHtcbiAgICAgICAgaWYgKG5ld0F0dHJpYnV0ZXMuc3RhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQuc3RhdGUgPSBTdHJpbmcobmV3QXR0cmlidXRlcy5zdGF0ZSk7XG4gICAgICAgICAgcmVzdWx0LnVudGVtcGxhdGVkX3N0YXRlID0gc3RhdGVPYmouc3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3QXR0cmlidXRlcywgJ19zdGF0ZURpc3BsYXknKSkge1xuICAgICAgICByZXN1bHQuX3N0YXRlRGlzcGxheSA9IG5ld0F0dHJpYnV0ZXMuX3N0YXRlRGlzcGxheTtcbiAgICAgICAgcmVzdWx0LnVudGVtcGxhdGVkX3N0YXRlRGlzcGxheSA9IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAocmVzdWx0LCAhaGFzR2xvYmFsKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vIE9wZXJhdGluZyBvbiBjb250ZXh0LWF3YXJlIGF0dHJpYnV0ZXMuIFJldHVybiBzaGFsbG93IGNvcHkgb2Ygb2JqZWN0LlxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iaik7XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmV3UmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBzdGF0ZU9iai5hdHRyaWJ1dGVzKTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrQXR0cmlidXRlcyhvYmopIHtcbiAgICAgIGlmICghb2JqKSByZXR1cm47XG4gICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCgoYXR0cmlidXRlcykgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgICAgICBoYXNzLCBzdGF0ZXMsIG5ld1Jlc3VsdCwgYXR0cmlidXRlcyk7XG4gICAgICAgIGhhc0NoYW5nZXMgfD0gKHJlc3VsdCAhPT0gbmV3UmVzdWx0KTtcbiAgICAgIH0pO1xuICAgICAgY2hlY2tBdHRyaWJ1dGVzKG9iai5kZXZpY2UpO1xuICAgICAgY2hlY2tBdHRyaWJ1dGVzKG9iai5ncm91cCk7XG4gICAgfVxuXG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlKTtcbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgaWYgKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopIHJldHVybiBuZXdSZXN1bHQ7XG4gICAgaWYgKGhhc0NoYW5nZXMpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iaik7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZU9iajtcbiAgfSxcblxuICBhcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXR5X2lkOiBzdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBzdGF0ZTogc3RhdGVPYmouc3RhdGUsXG4gICAgICBhdHRyaWJ1dGVzOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKSxcbiAgICAgIHVudGVtcGxhdGVkX2F0dHJpYnV0ZXM6IHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlT2JqLmxhc3RfY2hhbmdlZCxcbiAgICB9O1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0KGVsZW0sIHN0YXRlT2JqLCBpbkRpYWxvZywgYWxsb3dIaWRkZW4pIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBzdGF0ZU9iajtcbiAgICBsZXQgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2Uoc3RhdGVPYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAoZWxlbSwgb2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGVsZW0uaGFzcywgZWxlbS5oYXNzLnN0YXRlcywgb2JqLCBvYmouYXR0cmlidXRlcyk7XG5cbiAgICBpZiAob2JqICE9PSBzdGF0ZU9iaiAmJiBvYmouYXR0cmlidXRlcy5oaWRkZW4gJiYgYWxsb3dIaWRkZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZpeEdyb3VwVGl0bGVzKCkge1xuICAgIGNvbnN0IGhvbWVBc3Npc3RhbnRNYWluID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbiddKTtcbiAgICBpZiAoaG9tZUFzc2lzdGFudE1haW4gPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuZml4R3JvdXBUaXRsZXMsIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShob21lQXNzaXN0YW50TWFpbiwgW1xuICAgICAgJ3BhcnRpYWwtY2FyZHMnLFxuICAgICAgJ2hhLWNhcmRzW3ZpZXctdmlzaWJsZV0nXSk7XG4gICAgaWYgKGhhQ2FyZHMgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coaGFDYXJkcywgJy5tYWluJykgfHwgaGFDYXJkcy4kLm1haW47XG4gICAgY29uc3QgY2FyZHMgPSBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJ2hhLWVudGl0aWVzLWNhcmQnKTtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBpZiAoY2FyZC5ncm91cEVudGl0eSkge1xuICAgICAgICBjb25zdCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgY2FyZCxcbiAgICAgICAgICBjYXJkLmdyb3VwRW50aXR5LFxuICAgICAgICAgIGZhbHNlIC8qIGluRGlhbG9nICovLFxuICAgICAgICAgIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKTtcbiAgICAgICAgaWYgKG9iaiAhPT0gY2FyZC5ncm91cEVudGl0eSAmJiBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lKSB7XG4gICAgICAgICAgY29uc3QgbmFtZUVsZW0gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhjYXJkLCAnLm5hbWUnKTtcbiAgICAgICAgICBuYW1lRWxlbS50ZXh0Q29udGVudCA9IG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBjb250cm9sQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgY29uc3QgcGFydGlhbENhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbicsXG4gICAgICAncGFydGlhbC1jYXJkcyddKTtcbiAgICBpZiAocGFydGlhbENhcmRzID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgIHdpbmRvdy5jdXN0b21VSS5jb250cm9sQ29sdW1ucy5iaW5kKG51bGwsIGNvbHVtbnMpLFxuICAgICAgICAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRnVuY3Rpb24gcmVuYW1lZCBmcm9tIGhhbmRsZVdpbmRvd0NoYW5nZSB0byBfdXBkYXRlQ29sdW1ucyBvbiAzLjcuMThcbiAgICBjb25zdCBmID0gcGFydGlhbENhcmRzLmhhbmRsZVdpbmRvd0NoYW5nZSB8fCBwYXJ0aWFsQ2FyZHMuX3VwZGF0ZUNvbHVtbnM7XG4gICAgcGFydGlhbENhcmRzLm1xbHMuZm9yRWFjaCgobXFsKSA9PiB7XG4gICAgICBtcWwucmVtb3ZlTGlzdGVuZXIoZik7XG4gICAgfSk7XG4gICAgcGFydGlhbENhcmRzLm1xbHMgPSBjb2x1bW5zLm1hcCgod2lkdGgpID0+IHtcbiAgICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke3dpZHRofXB4KWApO1xuICAgICAgbXFsLmFkZExpc3RlbmVyKGYpO1xuICAgICAgcmV0dXJuIG1xbDtcbiAgICB9KTtcbiAgICBmKCk7XG4gIH0sXG5cbiAgdXNlQ3VzdG9taXplcigpIHtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGNvbnN0IGN1c3RvbWl6ZXIgPSBtYWluLmhhc3Muc3RhdGVzWydjdXN0b21pemVyLmN1c3RvbWl6ZXInXTtcbiAgICBpZiAoIWN1c3RvbWl6ZXIpIHJldHVybjtcbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpIHtcbiAgICAgIHdpbmRvdy5jdXN0b21VSS5jb250cm9sQ29sdW1ucyhjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucyk7XG4gICAgfVxuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuaGlkZV9hdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsICYmIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKSB7XG4gICAgICAgIGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGF0dHIpKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1thdHRyXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGVDb25maWdQYW5lbCgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjb25zdCBoYVBhbmVsQ29uZmlnID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbicsXG4gICAgICAncGFydGlhbC1wYW5lbC1yZXNvbHZlcicsXG4gICAgICAnaGEtcGFuZWwtY29uZmlnJ10pO1xuICAgIGlmICghaGFQYW5lbENvbmZpZykge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxMDBtcy5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS51cGRhdGVDb25maWdQYW5lbCwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFDb25maWdOYXZpZ2F0aW9uID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaGFQYW5lbENvbmZpZywgW1xuICAgICAgJ2hhLWNvbmZpZy1kYXNoYm9hcmQnLFxuICAgICAgJ2hhLWNvbmZpZy1uYXZpZ2F0aW9uJ10pO1xuICAgIGlmIChoYUNvbmZpZ05hdmlnYXRpb24pIHtcbiAgICAgIC8vIEhhQ29uZmlnTmF2aWdhdGlvbiBzdGFydGVkIHVzaW5nIGxvY2FsaXplIG9uIDIxLjAxLjIwMThcbiAgICAgIGlmIChoYUNvbmZpZ05hdmlnYXRpb24ubG9jYWxpemUgJiYgIWhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCkge1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2ggPSB0cnVlO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZCA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZDtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQgPSAoaGFzcywgcGFnZSkgPT5cbiAgICAgICAgICBwYWdlID09PSAnY3VzdG9tdWknIHx8IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkKGhhc3MsIHBhZ2UpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ0N1c3RvbSBVSScgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24ocGFnZSwgbG9jYWxpemUpKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnU2V0VUkgdHdlYWtzJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24ocGFnZSwgbG9jYWxpemUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFDb25maWdOYXZpZ2F0aW9uLnBhZ2VzLnNvbWUoY29uZiA9PiBjb25mID09PSAnY3VzdG9tdWknIHx8IGNvbmYuZG9tYWluID09PSAnY3VzdG9tdWknKSkge1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24ucHVzaCgncGFnZXMnLCBoYUNvbmZpZ05hdmlnYXRpb24ubG9jYWxpemUgPyAnY3VzdG9tdWknIDoge1xuICAgICAgICAgIGRvbWFpbjogJ2N1c3RvbXVpJyxcbiAgICAgICAgICBjYXB0aW9uOiAnQ3VzdG9tIFVJJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldCBVSSB0d2Vha3MuJyxcbiAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRIYUNvbmZpZ0N1c3RvbVVpID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hhLWNvbmZpZy1jdXN0b20tdWknKTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuaXNXaWRlID0gaGFQYW5lbENvbmZpZy5pc1dpZGU7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLnNldEF0dHJpYnV0ZSgncGFnZS1uYW1lJywgJ2N1c3RvbXVpJyk7XG4gICAgICByZXR1cm4gaGFDb25maWdDdXN0b21VaTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXJvblBhZ2VzID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coaGFQYW5lbENvbmZpZywgJ2lyb24tcGFnZXMnKTtcbiAgICBpZiAoaXJvblBhZ2VzKSB7XG4gICAgICBpZiAoaXJvblBhZ2VzLmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIGlyb25QYWdlcy5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgICAgaXJvblBhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24taXRlbXMtY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKSkge1xuICAgICAgICAgICAgaXJvblBhZ2VzLnNlbGVjdCgnY3VzdG9tdWknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByb290ID0gaGFQYW5lbENvbmZpZy5zaGFkb3dSb290IHx8IGhhUGFuZWxDb25maWc7XG4gICAgICBpZiAocm9vdC5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgfVxuICAgICAgY29uc3QgdmlzaWJsZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJyk7XG4gICAgICByb290Lmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IHZpc2libGUgPyAnJyA6ICdub25lJztcbiAgICB9XG4gIH0sXG5cbiAgaW5zdGFsbFN0YXRlc0hvb2soKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hvbWUtYXNzaXN0YW50JykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBob21lQXNzaXN0YW50ID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdob21lLWFzc2lzdGFudCcpO1xuICAgICAgaWYgKCFob21lQXNzaXN0YW50IHx8ICFob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcykgcmV0dXJuO1xuICAgICAgY29uc3Qgb3JpZ2luYWxVcGRhdGUgPSBob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcztcbiAgICAgIGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzID0gZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgICBjb25zdCB7IGhhc3MgfSA9IHRoaXM7XG4gICAgICAgIGlmIChvYmouc3RhdGVzKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMob2JqLnN0YXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbnRpdHkgPSBvYmouc3RhdGVzW2tleV07XG4gICAgICAgICAgICBpZiAoZW50aXR5Ll9jdWlfa2VlcCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgbmV3RW50aXR5ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZXMoaGFzcywgb2JqLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICAgIGlmIChoYXNzLnN0YXRlcyAmJiBlbnRpdHkgIT09IGhhc3Muc3RhdGVzW2tleV0pIHtcbiAgICAgICAgICAgICAgLy8gTmV3IHN0YXRlIGFycml2ZWQuIFB1dCBtb2RpZmllZCBzdGF0ZSBpbi5cbiAgICAgICAgICAgICAgb2JqLnN0YXRlc1trZXldID0gbmV3RW50aXR5O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkgIT09IG5ld0VudGl0eSkge1xuICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBzYW1lIHN0YXRlIGJ1dCBjb250ZW50cyBjaGFuZ2VkIGR1ZSB0byBvdGhlciBzdGF0ZSBjaGFuZ2VzLlxuICAgICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luYWxVcGRhdGUuY2FsbCh0aGlzLCBvYmopO1xuICAgICAgICBpZiAob2JqLnRoZW1lcyAmJiBoYXNzLl90aGVtZVdhaXRlcnMpIHtcbiAgICAgICAgICBoYXNzLl90aGVtZVdhaXRlcnMuZm9yRWFjaCh3YWl0ZXIgPT4gd2FpdGVyLnN0YXRlQ2hhbmdlZCh3YWl0ZXIuc3RhdGUpKTtcbiAgICAgICAgICBoYXNzLl90aGVtZVdhaXRlcnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgICAgaWYgKG1haW4uaGFzcyAmJiBtYWluLmhhc3Muc3RhdGVzKSB7XG4gICAgICAgIG1haW4uX3VwZGF0ZUhhc3MoeyBzdGF0ZXM6IG1haW4uaGFzcy5zdGF0ZXMgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbFBhcnRpYWxDYXJkcygpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgncGFydGlhbC1jYXJkcycpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgcGFydGlhbENhcmRzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdwYXJ0aWFsLWNhcmRzJyk7XG4gICAgICBpZiAoIXBhcnRpYWxDYXJkcyB8fCAhcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIpIHJldHVybjtcbiAgICAgIHBhcnRpYWxDYXJkcy5wcm90b3R5cGUuX2RlZmF1bHRWaWV3RmlsdGVyID0gKGhhc3MsIGVudGl0eUlkKSA9PiB7XG4gICAgICAgIGlmIChoYXNzLnN0YXRlc1tlbnRpdHlJZF0uYXR0cmlidXRlcy5oaWRkZW4pIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgZXhjbHVkZXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhoYXNzLnN0YXRlcykuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzICYmIGVudGl0eS5hdHRyaWJ1dGVzLmhpZGVfaW5fZGVmYXVsdF92aWV3KSB7XG4gICAgICAgICAgICBjb25zdCBleGNsdWRlRW50aXR5SWQgPSBlbnRpdHkuZW50aXR5X2lkO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVzW2V4Y2x1ZGVFbnRpdHlJZF0pIHJldHVybjtcbiAgICAgICAgICAgIGV4Y2x1ZGVzW2V4Y2x1ZGVFbnRpdHlJZF0gPSBlbnRpdHk7XG4gICAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMudmlldykge1xuICAgICAgICAgICAgICBjb25zdCB2aWV3RW50aXRpZXMgPSBnZXRWaWV3RW50aXRpZXMoaGFzcy5zdGF0ZXMsIGVudGl0eSk7XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZpZXdFbnRpdGllcylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgaWQgPT4gdmlld0VudGl0aWVzW2lkXS5hdHRyaWJ1dGVzLmhpZGVfaW5fZGVmYXVsdF92aWV3ICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVzW2lkXSA9IHZpZXdFbnRpdGllc1tpZF07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICFleGNsdWRlc1tlbnRpdHlJZF07XG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIC8vIEFsbG93cyBjaGFuZ2luZyB0aGUgJ0V4ZWN1dGUnIC8gJ0FjdGl2YXRlJyB0ZXh0IG9uIHNjcmlwdC9zY2VuZSBjYXJkcy5cbiAgaW5zdGFsbEFjdGlvbk5hbWUoZWxlbWVudE5hbWUpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChlbGVtZW50TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBrbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChlbGVtZW50TmFtZSk7XG4gICAgICBpZiAoIWtsYXNzIHx8ICFrbGFzcy5wcm90b3R5cGUpIHJldHVybjtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShrbGFzcy5wcm90b3R5cGUsICdsb2NhbGl6ZScsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIGZ1bmN0aW9uIGN1c3RvbUxvY2FsaXplKHYpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlT2JqICYmIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hY3Rpb25fbmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhLmxvY2FsaXplKHYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3VzdG9tTG9jYWxpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCgpIHt9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gQWxsb3dzIHRoZW1pbmcgXCJyZWd1bGFyXCIgdG9wIGJhZGdlcy5cbiAgaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaGFTdGF0ZUxhYmVsQmFkZ2UgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJyk7XG4gICAgICBpZiAoIWhhU3RhdGVMYWJlbEJhZGdlIHx8ICFoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkKSByZXR1cm47XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFTdGF0ZUxhYmVsQmFkZ2UucHJvdG90eXBlLnN0YXRlQ2hhbmdlZCA9IGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZU9iaikge1xuICAgICAgICAvLyBUT0RPOiBDYWxsIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdFxuICAgICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSkge1xuICAgICAgICAgIGlmICh0aGlzLmhhc3MudGhlbWVzID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycyA9IHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMucHVzaCh0aGlzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSxcbiAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgICAgICBpZiAodGhpcy5zdGFydEludGVydmFsKSB7XG4gICAgICAgICAgLy8gQWRkZWQgb24gMTkuMS4yMDE4XG4gICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKHN0YXRlT2JqKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsU3RhdGVCYWRnZSgpIHtcbiAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnc3RhdGUtYmFkZ2UnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlQmFkZ2UgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3N0YXRlLWJhZGdlJyk7XG4gICAgICBpZiAoIXN0YXRlQmFkZ2UgfHwgIXN0YXRlQmFkZ2UucHJvdG90eXBlLl91cGRhdGVJY29uQXBwZWFyYW5jZSkgcmV0dXJuO1xuICAgICAgY29uc3Qgb3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZSA9IHN0YXRlQmFkZ2UucHJvdG90eXBlLl91cGRhdGVJY29uQXBwZWFyYW5jZTtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBzdGF0ZUJhZGdlLnByb3RvdHlwZS5fdXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBmdW5jdGlvbiBjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZShzdGF0ZU9iaikge1xuICAgICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5pY29uX2NvbG9yICYmICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlKSB7XG4gICAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJC5pY29uLnN0eWxlLCB7XG4gICAgICAgICAgICBjb2xvcjogc3RhdGVPYmouYXR0cmlidXRlcy5pY29uX2NvbG9yLFxuICAgICAgICAgICAgZmlsdGVyOiAnJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlLmNhbGwodGhpcywgc3RhdGVPYmopO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuXG4gIGluc3RhbGxIYUF0dHJpYnV0ZXMoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ2hhLWF0dHJpYnV0ZXMnKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhhQXR0cmlidXRlcyA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtYXR0cmlidXRlcycpO1xuICAgICAgaWYgKCFoYUF0dHJpYnV0ZXMgfHwgIWhhQXR0cmlidXRlcy5wcm90b3R5cGUuY29tcHV0ZUZpbHRlcnNBcnJheSB8fFxuICAgICAgICAgIXdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCkgcmV0dXJuO1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIGhhQXR0cmlidXRlcy5wcm90b3R5cGUuY29tcHV0ZUZpbHRlcnNBcnJheSA9XG4gICAgICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkoZXh0cmFGaWx0ZXJzKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKS5jb25jYXQoXG4gICAgICAgICAgICBleHRyYUZpbHRlcnMgPyBleHRyYUZpbHRlcnMuc3BsaXQoJywnKSA6IFtdKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgfSxcblxuICBpbnN0YWxsSGFGb3JtQ3VzdG9taXplKCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcnKSkgcmV0dXJuO1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdoYS1mb3JtLWN1c3RvbWl6ZScpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgaGFGb3JtQ3VzdG9taXplID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1mb3JtLWN1c3RvbWl6ZScpO1xuICAgICAgaWYgKCFoYUZvcm1DdXN0b21pemUpIHtcbiAgICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxMDBtcy5cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUsIDEwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuaGFGb3JtQ3VzdG9taXplSW5pdERvbmUpIHJldHVybjtcbiAgICAgIHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSA9IHRydWU7XG5cbiAgICAgIGlmICghd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsKSByZXR1cm47XG4gICAgICBpZiAoaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSkge1xuICAgICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgICBoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlID1cbiAgICAgICAgICBmdW5jdGlvbiBjdXN0b21Db21wdXRlU2luZ2xlQXR0cmlidXRlKGtleSwgdmFsdWUsIHNlY29uZGFyeSkge1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XVxuICAgICAgICAgICAgICAgIHx8IHsgdHlwZTogd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSB9O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRPcGVuT2JqZWN0KGtleSwgY29uZmlnLnR5cGUgPT09ICdqc29uJyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLCBzZWNvbmRhcnksIGNvbmZpZyk7XG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKSB7XG4gICAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICAgIGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMgPVxuICAgICAgICAgIGZ1bmN0aW9uIGN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKFxuICAgICAgICAgICAgbG9jYWxBdHRyaWJ1dGVzLCBnbG9iYWxBdHRyaWJ1dGVzLCBleGlzdGluZ0F0dHJpYnV0ZXMsIG5ld0F0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtub3duS2V5cyA9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZiA9IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25mICYmICghY29uZi5kb21haW5zIHx8ICF0aGlzLmVudGl0eSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25mLmRvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHRoaXMuZW50aXR5KSkpO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhsb2NhbEF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGdsb2JhbEF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGV4aXN0aW5nQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobmV3QXR0cmlidXRlcykpO1xuICAgICAgICAgICAgcmV0dXJuIGtub3duS2V5cy5zb3J0KCkuY29uY2F0KCdPdGhlcicpO1xuICAgICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5zdGFsbENsYXNzSG9va3MoKSB7XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5jbGFzc0luaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUgPSB0cnVlO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsUGFydGlhbENhcmRzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZXNIb29rKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsU3RhdGVCYWRnZSgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFBdHRyaWJ1dGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxBY3Rpb25OYW1lKCdzdGF0ZS1jYXJkLXNjZW5lJyk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxBY3Rpb25OYW1lKCdzdGF0ZS1jYXJkLXNjcmlwdCcpO1xuICB9LFxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5pbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQ2xhc3NIb29rcygpO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgaWYgKCFtYWluLmhhc3MgfHwgIW1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgIC8vIENvbm5lY3Rpb24gd2Fzbid0IG1hZGUgeWV0LiBUcnkgaW4gMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5pdCwgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdpbmRvdy5jdXN0b21VSS5pbml0RG9uZSA9IHRydWU7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkudXNlQ3VzdG9taXplcigpO1xuXG4gICAgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvY2F0aW9uLWNoYW5nZWQnLCB3aW5kb3cuc2V0VGltZW91dC5iaW5kKG51bGwsIHdpbmRvdy5jdXN0b21VSS5ydW5Ib29rcywgMTAwKSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgIGNvbnNvbGUubG9nKGBMb2FkZWQgQ3VzdG9tVUkgJHtWRVJTSU9OfWApO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgIGlmICghd2luZG93LkNVU1RPTV9VSV9MSVNUKSB7XG4gICAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QgPSBbXTtcbiAgICB9XG4gICAgd2luZG93LkNVU1RPTV9VSV9MSVNULnB1c2goe1xuICAgICAgbmFtZTogJ0N1c3RvbVVJJyxcbiAgICAgIHZlcnNpb246IFZFUlNJT04sXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vYW5kcmV5LWdpdC9ob21lLWFzc2lzdGFudC1jdXN0b20tdWknLFxuICAgIH0pO1xuICB9LFxuXG4gIHJ1bkhvb2tzKCkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS51cGRhdGVDb25maWdQYW5lbCgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFGb3JtQ3VzdG9taXplKCk7XG4gIH0sXG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScpIHx8ICcnO1xuICB9LFxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGEtZGV2aWNlLW5hbWUnLCBuYW1lIHx8ICcnKTtcbiAgfSxcblxuICBjb21wdXRlVGVtcGxhdGUodGVtcGxhdGUsIGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpIHtcbiAgICBjb25zdCBmdW5jdGlvbkJvZHkgPSAodGVtcGxhdGUuaW5kZXhPZigncmV0dXJuJykgPj0gMCkgPyB0ZW1wbGF0ZSA6IGByZXR1cm4gXFxgJHt0ZW1wbGF0ZX1cXGA7YDtcbiAgICB0cnkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIGNvbnN0IGZ1bmMgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdoYXNzJywgJ2VudGl0aWVzJywgJ2VudGl0eScsICdhdHRyaWJ1dGVzJywgJ2F0dHJpYnV0ZScsICdzdGF0ZScsIGZ1bmN0aW9uQm9keSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldy1mdW5jICovXG4gICAgICByZXR1cm4gZnVuYyhoYXNzLCBlbnRpdGllcywgZW50aXR5LCBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUsIHN0YXRlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICBpZiAoKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikgfHwgZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtlLm5hbWV9OiAke2UubWVzc2FnZX0gaW4gdGVtcGxhdGUgJHtmdW5jdGlvbkJvZHl9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfSxcbn07XG53aW5kb3cuY3VzdG9tVUkuaW5pdCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgJzIwMTgwODMxJztcbiJdLCJzb3VyY2VSb290IjoiIn0=