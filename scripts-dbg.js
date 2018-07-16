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
  },

  installPartialCards() {
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
  },

  // Allows changing the 'Execute' / 'Activate' text on script/scene cards.
  installActionName(elementName) {
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
  },

  // Allows theming "regular" top badges.
  installHaStateLabelBadge() {
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

  installStateBadge() {
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

  installHaAttributes() {
    var haAttributes = customElements.get('ha-attributes');
    if (!haAttributes || !haAttributes.prototype.computeFiltersArray || !window.hassAttributeUtil) return;
    // Use named function to preserve 'this'.
    haAttributes.prototype.computeFiltersArray = function customComputeFiltersArray(extraFilters) {
      return Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).concat(extraFilters ? extraFilters.split(',') : []);
    };
  },

  installHaFormCustomize() {
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
        var knownKeys = Object.keys(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES).filter(key => {
          var conf = window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[key];
          return conf && (!conf.domains || !this.entity || conf.domains.includes(Object(_home_assistant_polymer_src_common_entity_compute_state_domain_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.entity)));
        }).filter(this.filterFromAttributes(localAttributes)).filter(this.filterFromAttributes(globalAttributes)).filter(this.filterFromAttributes(existingAttributes)).filter(this.filterFromAttributes(newAttributes));
        return knownKeys.sort().concat('Other');
      };
    }
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
/* harmony default export */ __webpack_exports__["default"] = ('20180716');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc3MtYXR0cmlidXRlLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfV0lUSF9NT1JFX0lORk8iLCJET01BSU5TX0hJREVfTU9SRV9JTkZPIiwiRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSIsIlNUQVRFU19PRkYiLCJVTklUX0MiLCJVTklUX0YiLCJERUZBVUxUX1ZJRVdfRU5USVRZX0lEIiwiYXBwbHlUaGVtZXNPbkVsZW1lbnQiLCJlbGVtZW50IiwidGhlbWVzIiwibG9jYWxUaGVtZSIsInVwZGF0ZU1ldGEiLCJfdGhlbWVzIiwidGhlbWVOYW1lIiwiZGVmYXVsdF90aGVtZSIsInN0eWxlcyIsIk9iamVjdCIsImFzc2lnbiIsInRoZW1lIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcmVmaXhlZEtleSIsInVwZGF0ZVN0eWxlcyIsIndpbmRvdyIsIlNoYWR5Q1NTIiwic3R5bGVTdWJ0cmVlIiwibWV0YSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInRoZW1lQ29sb3IiLCJkeW5hbWljQ29udGVudFVwZGF0ZXIiLCJyb290IiwibmV3RWxlbWVudFRhZyIsImF0dHJpYnV0ZXMiLCJyb290RWwiLCJjdXN0b21FbCIsImxhc3RDaGlsZCIsInRhZ05hbWUiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsInNldFByb3BlcnRpZXMiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGQiLCJjYW5Ub2dnbGVEb21haW4iLCJoYXNzIiwiZG9tYWluIiwic2VydmljZXMiLCJjb25maWciLCJjYW5Ub2dnbGVTdGF0ZSIsInN0YXRlT2JqIiwiY29tcHV0ZVN0YXRlRG9tYWluIiwic3RhdGUiLCJzdXBwb3J0ZWRfZmVhdHVyZXMiLCJjb21wdXRlRG9tYWluIiwiZW50aXR5SWQiLCJzdWJzdHIiLCJpbmRleE9mIiwiZW50aXR5X2lkIiwiZ2V0R3JvdXBFbnRpdGllcyIsImVudGl0aWVzIiwiZ3JvdXAiLCJyZXN1bHQiLCJlbnRpdHkiLCJnZXRWaWV3RW50aXRpZXMiLCJ2aWV3Iiwidmlld0VudGl0aWVzIiwiaGlkZGVuIiwiZ3JvdXBFbnRpdGllcyIsImdyRW50aXR5SWQiLCJnckVudGl0eSIsInN0YXRlQ2FyZFR5cGUiLCJpbmNsdWRlcyIsImNvbnRyb2wiLCJoYXNzQXR0cmlidXRlVXRpbCIsIkRPTUFJTl9ERVZJQ0VfQ0xBU1MiLCJiaW5hcnlfc2Vuc29yIiwiY292ZXIiLCJzZW5zb3IiLCJVTktOT1dOX1RZUEUiLCJBRERfVFlQRSIsIlRZUEVfVE9fVEFHIiwic3RyaW5nIiwianNvbiIsImljb24iLCJib29sZWFuIiwiYXJyYXkiLCJMT0dJQ19TVEFURV9BVFRSSUJVVEVTIiwiZW50aXR5X3BpY3R1cmUiLCJ1bmRlZmluZWQiLCJmcmllbmRseV9uYW1lIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiZW11bGF0ZWRfaHVlIiwiZG9tYWlucyIsImVtdWxhdGVkX2h1ZV9uYW1lIiwiaGFhc2thX2hpZGRlbiIsImhhYXNrYV9uYW1lIiwiaG9tZWJyaWRnZV9oaWRkZW4iLCJob21lYnJpZGdlX25hbWUiLCJhdHRyaWJ1dGlvbiIsImN1c3RvbV91aV9tb3JlX2luZm8iLCJjdXN0b21fdWlfc3RhdGVfY2FyZCIsImRldmljZV9jbGFzcyIsIm9wdGlvbnMiLCJhc3N1bWVkX3N0YXRlIiwiaW5pdGlhbF9zdGF0ZSIsInVuaXRfb2ZfbWVhc3VyZW1lbnQiLCJKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5IiwicHJvcCIsIkxpdGVyYWxTdHJpbmciLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwidG9TdHJpbmciLCJsaXRlcmFsVmFsdWUiLCJFcnJvciIsImh0bWxWYWx1ZSIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJodG1sIiwic3RyaW5ncyIsInRlbXBsYXRlIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwidiIsImlkeCIsImh0bWxMaXRlcmFsIiwiQ3VpQmFzZUVsZW1lbnQiLCJQb2x5bWVyIiwiRWxlbWVudCIsInByb3BlcnRpZXMiLCJpbkRpYWxvZyIsIkJvb2xlYW4iLCJjb250cm9sRWxlbWVudCIsIlN0cmluZyIsImV4dHJhIiwiQXJyYXkiLCJjb21wdXRlZCIsImNvbXB1dGVFeHRyYSIsImV4dHJhcyIsImV4dHJhX2RhdGFfdGVtcGxhdGUiLCJpc0FycmF5IiwibWFwIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJzdGF0ZXMiLCJmaWx0ZXIiLCJzaG93TGFzdENoYW5nZWQiLCJsZW5ndGgiLCJzaG93X2xhc3RfY2hhbmdlZCIsImhhc0V4dHJhIiwiRHluYW1pY0VsZW1lbnQiLCJlbGVtZW50TmFtZSIsIm9ic2VydmVycyIsIm9ic2VydmVyRnVuYyIsInRvVXBwZXJDYXNlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJEeW5hbWljV2l0aEV4dHJhIiwiZ2V0IiwiZXh0cmFPYmoiLCJfYXR0YWNoZWQiLCJleHRyYU9ialZpc2libGUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiX2lzQXR0YWNoZWQiLCJhdHRhY2hlZCIsImV4dHJhX2JhZGdlIiwiZXh0cmFCYWRnZXMiLCJleHRyYUJhZGdlIiwibWF5YmVDaGFuZ2VPYmplY3QiLCJhdHRyaWJ1dGUiLCJ1bml0IiwiYmxhY2tsaXN0IiwiYmxhY2tsaXN0X3N0YXRlcyIsInNvbWUiLCJSZWdFeHAiLCJ0ZXN0IiwiX2VudGl0eURpc3BsYXkiLCJjb21wdXRlRXh0cmFWaXNpYmxlIiwiZXh0cmFDbGFzcyIsIl9zaG93Q29udHJvbCIsImhpZGVfY29udHJvbCIsImNvbXB1dGVTdGF0ZURpc3BsYXkiLCJoYUxvY2FsaXplIiwibG9jYWxpemUiLCJpc0NvbmZpcm1Db250cm9scyIsImNvbmZpcm1fY29udHJvbHMiLCJjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jayIsImNsaWNrSGFuZGxlciIsImUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJsb2NrIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJhcHBseVRoZW1lcyIsImV4dHJhRG9tQ2hhbmdlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtIiwiSGFDb25maWdDdXN0b21VaSIsIkV2ZW50c01peGluIiwiaXNXaWRlIiwibmFtZSIsIm9ic2VydmVyIiwicmVhZHkiLCJnZXROYW1lIiwibmFtZUNoYW5nZWQiLCJzZXROYW1lIiwiX2JhY2tIYW5kbGVyIiwiaGlzdG9yeSIsImJhY2siLCJmaXJlIiwiSGFUaGVtZWRTbGlkZXIiLCJkaXNhYmxlT2ZmV2hlbk1pbiIsIl9jb21wdXRlQXR0cmlidXRlIiwiY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCIsImRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCIsIm1pbiIsIk51bWJlciIsIm1heCIsInBpbiIsImlzT24iLCJub3RpZnkiLCJfdGhlbWVkTWluIiwiX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCIsImF0dHIiLCJkZWYiLCJjb21wdXRlQ2xhc3MiLCJ0aGVtZWRNaW4iLCJ2YWx1ZUNoYW5nZWQiLCJldiIsInRhcmdldCIsIlNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTIiwiRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUIiwibGlnaHQiLCJjbGltYXRlIiwiVFlQRV9UT19DT05UUk9MIiwidG9nZ2xlIiwiZGlzcGxheSIsIlN0YXRlQ2FyZEN1c3RvbVVpIiwiY29udGFpbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfY29udGFpbmVyIiwic2V0UHJvcGVydHkiLCJpbnB1dENoYW5nZWQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYmFkZ2VNb2RlIiwiaWQiLCJjb25zb2xlIiwid2FybiIsImJhZGdlc19saXN0IiwicHVzaCIsInBhcmFtcyIsIndpZHRoIiwiZm9udFNpemUiLCJjbGVhbkJhZGdlU3R5bGUiLCJtb2RpZmllZE9iaiIsInRoZW1lVGFyZ2V0IiwibWF5YmVIaWRlRW50aXR5Iiwic2xpZGVyRWxpZ2libGVfIiwib2JqIiwic3RhdGVfY2FyZF9tb2RlIiwicmVndWxhck1vZGVfIiwib3JpZ2luYWxTdGF0ZUNhcmRUeXBlIiwiY3VzdG9tU3RhdGVDYXJkVHlwZSIsInNlY29uZGFyeVN0YXRlQ2FyZFR5cGUiLCJzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnkiLCJzZXJ2aWNlTWluIiwic2VydmljZU1heCIsInZhbHVlTmFtZSIsInNldFZhbHVlTmFtZSIsIm5hbWVPbiIsIm1pbl90ZW1wIiwibWF4X3RlbXAiLCJjb250cm9sX2VsZW1lbnQiLCJTdGF0ZUNhcmRXaXRoU2xpZGVyIiwic2xpZGVyVmFsdWUiLCJtb2RlIiwic3RyZXRjaFNsaWRlciIsImJyZWFrU2xpZGVyIiwiaGlkZVNsaWRlciIsImxpbmVUb29Mb25nIiwibWluTGluZUJyZWFrIiwibWF4TGluZUJyZWFrIiwic2hvd1NsaWRlciIsIl9vbklyb25SZXNpemUiLCJiaW5kIiwiX2lzQ29ubmVjdGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl93YWl0Rm9yTGF5b3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9zZXRNb2RlIiwiX2ZyYW1lSWQiLCJyZWFkeVRvQ29tcHV0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByZXZCcmVha1NsaWRlciIsInByZXZIaWRlU2xpZGVyIiwiJCIsImNvbnRhaW5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJjb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdGF0ZUhlaWdodCIsIl9jb21wdXRlV3JhcENsYXNzIiwiX3Nob3dTbGlkZXIiLCJzbGlkZXJDaGFuZ2VkIiwicGFyc2VJbnQiLCJwYXJhbSIsImlzTmFOIiwicGF0aCIsImNvbXBvc2VkUGF0aCIsImNhbGxTZXJ2aWNlIiwic3RhdGVPYmpDaGFuZ2VkIiwic3RyZXRjaF9zbGlkZXIiLCJTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIiwic3VwZXJDbGFzcyIsImRldGFpbCIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNvbXBvc2VkIiwibm9kZSIsImRpc3BhdGNoRXZlbnQiLCJTVVBQT1JURURfU0xJREVSX01PREVTIiwiY3VzdG9tVWlBdHRyaWJ1dGVzIiwiZGV2aWNlIiwidGVtcGxhdGVzIiwiX3N0YXRlRGlzcGxheSIsImNvbmNhdCIsInNsaWRlcl90aGVtZSIsImhpZGVfaW5fZGVmYXVsdF92aWV3IiwiaWNvbl9jb2xvciIsImhhc3NBdHRyaWJ1dGVzVXRpbCIsImRvbUhvc3QiLCJnZXRSb290Tm9kZSIsIkRvY3VtZW50RnJhZ21lbnQiLCJob3N0IiwibGlnaHRPclNoYWRvdyIsInNlbGVjdG9yIiwic2hhZG93Um9vdCIsImdldEVsZW1lbnRIaWVyYXJjaHkiLCJoaWVyYXJjaHkiLCJzaGlmdCIsImdldENvbnRleHQiLCJfY29udGV4dCIsImdyb3VwRW50aXR5IiwicmV2ZXJzZSIsImZpbmRNYXRjaCIsImZpbmQiLCJvcHRpb24iLCJtYXRjaCIsIm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2UiLCJhcHBseUF0dHJpYnV0ZXMiLCJtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAiLCJjb250ZXh0IiwiYyIsIl9zZXRLZWVwIiwiX2N1aV9rZWVwIiwibWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJoYXNHbG9iYWwiLCJoYXNDaGFuZ2VzIiwidW50ZW1wbGF0ZWRfYXR0cmlidXRlcyIsInVudGVtcGxhdGVkX3N0YXRlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5IiwibWF5YmVBcHBseVRlbXBsYXRlcyIsIm5ld1Jlc3VsdCIsImNoZWNrQXR0cmlidXRlcyIsImxhc3RfY2hhbmdlZCIsImFsbG93SGlkZGVuIiwiZml4R3JvdXBUaXRsZXMiLCJob21lQXNzaXN0YW50TWFpbiIsImhhQ2FyZHMiLCJtYWluIiwiY2FyZHMiLCJjYXJkIiwibmFtZUVsZW0iLCJ0ZXh0Q29udGVudCIsImNvbnRyb2xDb2x1bW5zIiwiY29sdW1ucyIsInBhcnRpYWxDYXJkcyIsImYiLCJoYW5kbGVXaW5kb3dDaGFuZ2UiLCJfdXBkYXRlQ29sdW1ucyIsIm1xbHMiLCJtcWwiLCJyZW1vdmVMaXN0ZW5lciIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInVzZUN1c3RvbWl6ZXIiLCJjdXN0b21pemVyIiwiaGlkZV9hdHRyaWJ1dGVzIiwidXBkYXRlQ29uZmlnUGFuZWwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImhhUGFuZWxDb25maWciLCJoYUNvbmZpZ05hdmlnYXRpb24iLCJjdWlQYXRjaCIsIl9vcmlnaW5hbENvbXB1dGVMb2FkZWQiLCJfY29tcHV0ZUxvYWRlZCIsIl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uIiwiX2NvbXB1dGVDYXB0aW9uIiwiX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uIiwiX2NvbXB1dGVEZXNjcmlwdGlvbiIsInBhZ2UiLCJwYWdlcyIsImNvbmYiLCJjYXB0aW9uIiwibG9hZGVkIiwiZ2V0SGFDb25maWdDdXN0b21VaSIsImhhQ29uZmlnQ3VzdG9tVWkiLCJpcm9uUGFnZXMiLCJsYXN0RWxlbWVudENoaWxkIiwic2VsZWN0IiwidmlzaWJsZSIsImluc3RhbGxTdGF0ZXNIb29rIiwiaG9tZUFzc2lzdGFudCIsIl91cGRhdGVIYXNzIiwib3JpZ2luYWxVcGRhdGUiLCJ1cGRhdGUiLCJuZXdFbnRpdHkiLCJfdGhlbWVXYWl0ZXJzIiwid2FpdGVyIiwic3RhdGVDaGFuZ2VkIiwiaW5zdGFsbFBhcnRpYWxDYXJkcyIsIl9kZWZhdWx0Vmlld0ZpbHRlciIsImV4Y2x1ZGVzIiwiZXhjbHVkZUVudGl0eUlkIiwiaW5zdGFsbEFjdGlvbk5hbWUiLCJrbGFzcyIsImRlZmluZVByb3BlcnR5IiwiY3VzdG9tTG9jYWxpemUiLCJhY3Rpb25fbmFtZSIsIl9fZGF0YSIsInNldCIsImluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSIsImhhU3RhdGVMYWJlbEJhZGdlIiwic3RhcnRJbnRlcnZhbCIsImluc3RhbGxTdGF0ZUJhZGdlIiwic3RhdGVCYWRnZSIsInVwZGF0ZUljb25BcHBlYXJhbmNlIiwib3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZSIsImN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlIiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3IiLCJpbnN0YWxsSGFBdHRyaWJ1dGVzIiwiaGFBdHRyaWJ1dGVzIiwiY29tcHV0ZUZpbHRlcnNBcnJheSIsImN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJleHRyYUZpbHRlcnMiLCJzcGxpdCIsImluc3RhbGxIYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemVJbml0RG9uZSIsIl9jb21wdXRlU2luZ2xlQXR0cmlidXRlIiwiY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsInNlY29uZGFyeSIsIl9pbml0T3Blbk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwibG9jYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlcyIsImV4aXN0aW5nQXR0cmlidXRlcyIsImtub3duS2V5cyIsImZpbHRlckZyb21BdHRyaWJ1dGVzIiwic29ydCIsImluc3RhbGxDbGFzc0hvb2tzIiwiY2xhc3NJbml0RG9uZSIsImluaXQiLCJpbml0RG9uZSIsInJ1bkhvb2tzIiwibG9nIiwiQ1VTVE9NX1VJX0xJU1QiLCJ2ZXJzaW9uIiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jdGlvbkJvZHkiLCJmdW5jIiwiRnVuY3Rpb24iLCJTeW50YXhFcnJvciIsIlJlZmVyZW5jZUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFp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QUFTLEtBQXpGO0FBQ0EsUUFBSTtBQUNGO0FBQ0EsVUFBTWtYLE9BQU8sSUFBSUMsUUFBSixDQUNYLE1BRFcsRUFDSCxVQURHLEVBQ1MsUUFEVCxFQUNtQixZQURuQixFQUNpQyxXQURqQyxFQUM4QyxPQUQ5QyxFQUN1REYsWUFEdkQsQ0FBYjtBQUVBO0FBQ0EsYUFBT0MsS0FBSzliLElBQUwsRUFBV2UsUUFBWCxFQUFxQkcsTUFBckIsRUFBNkI5QixVQUE3QixFQUF5QzJJLFNBQXpDLEVBQW9EeEgsS0FBcEQsQ0FBUDtBQUNELEtBTkQsQ0FNRSxPQUFPMkksQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxVQUFLQSxhQUFhOFMsV0FBZCxJQUE4QjlTLGFBQWErUyxjQUEvQyxFQUErRDtBQUM3RGpQLGdCQUFRQyxJQUFSLENBQWMsR0FBRS9ELEVBQUVjLElBQUssS0FBSWQsRUFBRWdULE9BQVEsZ0JBQWVMLFlBQWEsRUFBakU7QUFDQSxlQUFPLElBQVA7QUFDRDtBQUNEO0FBQ0EsWUFBTTNTLENBQU47QUFDRDtBQUNGO0FBbmxCa0MsQ0FBckM7QUFxbEJBM0ssT0FBTzRILFFBQVAsQ0FBZ0JnVixJQUFoQixHOzs7Ozs7Ozs7Ozs7O0FDN2xCQSwrREFBZSxVQUFmLEUiLCJmaWxlIjoic2NyaXB0cy1kYmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnlwb2ludHMvc2NyaXB0cy5qc1wiKTtcbiIsIi8qKiBDb25zdGFudHMgdG8gYmUgdXNlZCBpbiB0aGUgZnJvbnRlbmQuICovXG5cbi8vIENvbnN0YW50cyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGJ5IG5hbWUuXG4vLyBBcnJheXMgd2l0aCB2YWx1ZXMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBpZiBvcmRlciBkb2Vzbid0IG1hdHRlci5cbi8vIEVhY2ggY29uc3RhbnQgc2hvdWxkIGhhdmUgYSBkZXNjcmlwdGlvbiB3aGF0IGl0IGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgZm9yLlxuXG4vKiogSWNvbiB0byB1c2Ugd2hlbiBubyBpY29uIHNwZWNpZmllZCBmb3IgZG9tYWluLiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRE9NQUlOX0lDT04gPSAnaGFzczpib29rbWFyayc7XG5cbi8qKiBEb21haW5zIHRoYXQgaGF2ZSBhIHN0YXRlIGNhcmQuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSBbXG4gICdjbGltYXRlJyxcbiAgJ2NvdmVyJyxcbiAgJ2NvbmZpZ3VyYXRvcicsXG4gICdpbnB1dF9zZWxlY3QnLFxuICAnaW5wdXRfbnVtYmVyJyxcbiAgJ2lucHV0X3RleHQnLFxuICAnbG9jaycsXG4gICdtZWRpYV9wbGF5ZXInLFxuICAnc2NlbmUnLFxuICAnc2NyaXB0JyxcbiAgJ3RpbWVyJyxcbiAgJ3dlYmxpbmsnLFxuXTtcblxuLyoqIERvbWFpbnMgd2l0aCBzZXBhcmF0ZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9NT1JFX0lORk8gPSBbXG4gICdhbGFybV9jb250cm9sX3BhbmVsJyxcbiAgJ2F1dG9tYXRpb24nLFxuICAnY2FtZXJhJyxcbiAgJ2NsaW1hdGUnLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2NvdmVyJyxcbiAgJ2ZhbicsXG4gICdncm91cCcsXG4gICdoaXN0b3J5X2dyYXBoJyxcbiAgJ2lucHV0X2RhdGV0aW1lJyxcbiAgJ2xpZ2h0JyxcbiAgJ2xvY2snLFxuICAnbWVkaWFfcGxheWVyJyxcbiAgJ3NjcmlwdCcsXG4gICdzdW4nLFxuICAndXBkYXRlcicsXG4gICd2YWN1dW0nLFxuICAnd2VhdGhlcidcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdyBubyBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfSElERV9NT1JFX0lORk8gPSBbXG4gICdpbnB1dF9udW1iZXInLFxuICAnaW5wdXRfc2VsZWN0JyxcbiAgJ2lucHV0X3RleHQnLFxuICAnc2NlbmUnLFxuICAnd2VibGluaydcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gICdjYW1lcmEnLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2hpc3RvcnlfZ3JhcGgnLFxuICAnc2NlbmUnLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcbiAgJ2Nsb3NlZCcsXG4gICdsb2NrZWQnLFxuICAnb2ZmJ1xuXTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9ICfCsEMnO1xuZXhwb3J0IGNvbnN0IFVOSVRfRiA9ICfCsEYnO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9ICdncm91cC5kZWZhdWx0X3ZpZXcnO1xuIiwiLyoqXG4gKiBBcHBseSBhIHRoZW1lIHRvIGFuIGVsZW1lbnQgYnkgc2V0dGluZyB0aGUgQ1NTIHZhcmlhYmxlcyBvbiBpdC5cbiAqXG4gKiBlbGVtZW50OiBFbGVtZW50IHRvIGFwcGx5IHRoZW1lIG9uLlxuICogdGhlbWVzOiBIQVNTIFRoZW1lIGluZm9ybWF0aW9uXG4gKiBsb2NhbFRoZW1lOiBzZWxlY3RlZCB0aGVtZS5cbiAqIHVwZGF0ZU1ldGE6IGJvb2xlYW4gaWYgd2Ugc2hvdWxkIHVwZGF0ZSB0aGUgdGhlbWUtY29sb3IgbWV0YSBlbGVtZW50LlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5VGhlbWVzT25FbGVtZW50KGVsZW1lbnQsIHRoZW1lcywgbG9jYWxUaGVtZSwgdXBkYXRlTWV0YSA9IGZhbHNlKSB7XG4gIGlmICghZWxlbWVudC5fdGhlbWVzKSB7XG4gICAgZWxlbWVudC5fdGhlbWVzID0ge307XG4gIH1cbiAgbGV0IHRoZW1lTmFtZSA9IHRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuICBpZiAobG9jYWxUaGVtZSA9PT0gJ2RlZmF1bHQnIHx8IChsb2NhbFRoZW1lICYmIHRoZW1lcy50aGVtZXNbbG9jYWxUaGVtZV0pKSB7XG4gICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgfVxuICBjb25zdCBzdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50Ll90aGVtZXMpO1xuICBpZiAodGhlbWVOYW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICB2YXIgdGhlbWUgPSB0aGVtZXMudGhlbWVzW3RoZW1lTmFtZV07XG4gICAgT2JqZWN0LmtleXModGhlbWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gJy0tJyArIGtleTtcbiAgICAgIGVsZW1lbnQuX3RoZW1lc1twcmVmaXhlZEtleV0gPSAnJztcbiAgICAgIHN0eWxlc1twcmVmaXhlZEtleV0gPSB0aGVtZVtrZXldO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtZW50LnVwZGF0ZVN0eWxlcykge1xuICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gIH0gZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgLy8gaW1wbGVtZW50IHVwZGF0ZVN0eWxlcygpIG1ldGhvZCBvZiBQb2xlbWVyIGVsZW1lbnRzXG4gICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlU3VidHJlZSgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8oZWxlbWVudCksIHN0eWxlcyk7XG4gIH1cblxuICBpZiAoIXVwZGF0ZU1ldGEpIHJldHVybjtcblxuICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXRoZW1lLWNvbG9yXScpO1xuICBpZiAobWV0YSkge1xuICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpKSB7XG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JywgbWV0YS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSk7XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lQ29sb3IgPSBzdHlsZXNbJy0tcHJpbWFyeS1jb2xvciddIHx8IG1ldGEuZ2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKTtcbiAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoZW1lQ29sb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFVwZGF0ZSByb290J3MgY2hpbGQgZWxlbWVudCB0byBiZSBuZXdFbGVtZW50VGFnIHJlcGxhY2luZyBhbm90aGVyIGV4aXN0aW5nIGNoaWxkIGlmIGFueS5cbiAqIENvcHkgYXR0cmlidXRlcyBpbnRvIHRoZSBjaGlsZCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljQ29udGVudFVwZGF0ZXIocm9vdCwgbmV3RWxlbWVudFRhZywgYXR0cmlidXRlcykge1xuICBjb25zdCByb290RWwgPSByb290O1xuICBsZXQgY3VzdG9tRWw7XG5cbiAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQgJiYgcm9vdEVsLmxhc3RDaGlsZC50YWdOYW1lID09PSBuZXdFbGVtZW50VGFnKSB7XG4gICAgY3VzdG9tRWwgPSByb290RWwubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIGlmIChyb290RWwubGFzdENoaWxkKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQocm9vdEVsLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0aW5nIGFuIGVsZW1lbnQgd2l0aCB1cHBlciBjYXNlIHdvcmtzIGZpbmUgaW4gQ2hyb21lLCBidXQgaW4gRkYgaXQgZG9lc24ndCBpbW1lZGlhdGVseVxuICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICBjdXN0b21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudFRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKSB7XG4gICAgY3VzdG9tRWwuc2V0UHJvcGVydGllcyhhdHRyaWJ1dGVzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBjdXN0b20gZWxlbWVudCBkZWZpbml0aW9uIHdhc24ndCBsb2FkZWQgeWV0IC0gc2V0UHJvcGVydGllcyB3b3VsZCBiZVxuICAgIC8vIG1pc3NpbmcsIGJ1dCBubyBoYXJtIGluIHNldHRpbmcgYXR0cmlidXRlcyBvbmUtYnktb25lIHRoZW4uXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjdXN0b21FbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoY3VzdG9tRWwpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKSB7XG4gIGNvbnN0IHNlcnZpY2VzID0gaGFzcy5jb25maWcuc2VydmljZXNbZG9tYWluXTtcbiAgaWYgKCFzZXJ2aWNlcykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoZG9tYWluID09PSAnbG9jaycpIHtcbiAgICByZXR1cm4gJ2xvY2snIGluIHNlcnZpY2VzO1xuICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJykge1xuICAgIHJldHVybiAnb3Blbl9jb3ZlcicgaW4gc2VydmljZXM7XG4gIH1cbiAgcmV0dXJuICd0dXJuX29uJyBpbiBzZXJ2aWNlcztcbn1cbiIsImltcG9ydCBjYW5Ub2dnbGVEb21haW4gZnJvbSAnLi9jYW5fdG9nZ2xlX2RvbWFpbi5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikge1xuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICBpZiAoZG9tYWluID09PSAnZ3JvdXAnKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLnN0YXRlID09PSAnb24nIHx8IHN0YXRlT2JqLnN0YXRlID09PSAnb2ZmJztcbiAgfVxuICBpZiAoZG9tYWluID09PSAnY2xpbWF0ZScpIHtcbiAgICByZXR1cm4gISEoKHN0YXRlT2JqLmF0dHJpYnV0ZXMgfHwge30pLnN1cHBvcnRlZF9mZWF0dXJlcyAmIDQwOTYpO1xuICB9XG5cbiAgcmV0dXJuIGNhblRvZ2dsZURvbWFpbihoYXNzLCBkb21haW4pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZURvbWFpbihlbnRpdHlJZCkge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKDAsIGVudGl0eUlkLmluZGV4T2YoJy4nKSk7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfZG9tYWluLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBncm91cCkge1xuICBjb25zdCByZXN1bHQgPSB7fTtcblxuICBncm91cC5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHJlc3VsdFtlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfZG9tYWluLmpzJztcbmltcG9ydCBnZXRHcm91cEVudGl0aWVzIGZyb20gJy4vZ2V0X2dyb3VwX2VudGl0aWVzLmpzJztcblxuLy8gUmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBlbnRpdGllcyB0aGF0IHRoZSB2aWV3IHdpbGwgc2hvd1xuLy8gaW5jbHVkaW5nIGVtYmVkZGVkIGdyb3Vwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdFbnRpdGllcyhlbnRpdGllcywgdmlldykge1xuICBjb25zdCB2aWV3RW50aXRpZXMgPSB7fTtcblxuICB2aWV3LmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSAmJiAhZW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICB2aWV3RW50aXRpZXNbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG5cbiAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRW50aXRpZXMgPSBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBlbnRpdHkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwRW50aXRpZXMpLmZvckVhY2goKGdyRW50aXR5SWQpID0+IHtcbiAgICAgICAgICBjb25zdCBnckVudGl0eSA9IGdyb3VwRW50aXRpZXNbZ3JFbnRpdHlJZF07XG5cbiAgICAgICAgICBpZiAoIWdyRW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICAgICAgICB2aWV3RW50aXRpZXNbZ3JFbnRpdHlJZF0gPSBnckVudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdFbnRpdGllcztcbn1cbiIsImltcG9ydCBjYW5Ub2dnbGVTdGF0ZSBmcm9tICcuL2Nhbl90b2dnbGVfc3RhdGUuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCB7IERPTUFJTlNfV0lUSF9DQVJEIH0gZnJvbSAnLi4vY29uc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKSB7XG4gIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgIHJldHVybiAnZGlzcGxheSc7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfSBlbHNlIGlmIChjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikgJiZcbiAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2wgIT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuICd0b2dnbGUnO1xuICB9XG4gIHJldHVybiAnZGlzcGxheSc7XG59XG4iLCJjb25zdCBoYXNzQXR0cmlidXRlVXRpbCA9IHt9O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgJ2JhdHRlcnknLFxuICAgICdjb2xkJyxcbiAgICAnY29ubmVjdGl2aXR5JyxcbiAgICAnZG9vcicsXG4gICAgJ2dhcmFnZV9kb29yJyxcbiAgICAnZ2FzJyxcbiAgICAnaGVhdCcsXG4gICAgJ2xpZ2h0JyxcbiAgICAnbG9jaycsXG4gICAgJ21vaXN0dXJlJyxcbiAgICAnbW90aW9uJyxcbiAgICAnbW92aW5nJyxcbiAgICAnb2NjdXBhbmN5JyxcbiAgICAnb3BlbmluZycsXG4gICAgJ3BsdWcnLFxuICAgICdwb3dlcicsXG4gICAgJ3ByZXNlbmNlJyxcbiAgICAncHJvYmxlbScsXG4gICAgJ3NhZmV0eScsXG4gICAgJ3Ntb2tlJyxcbiAgICAnc291bmQnLFxuICAgICd2aWJyYXRpb24nLFxuICAgICd3aW5kb3cnXG4gIF0sXG4gIGNvdmVyOiBbJ2dhcmFnZSddLFxuICBzZW5zb3I6IFtcbiAgICAnYmF0dGVyeScsXG4gICAgJ2h1bWlkaXR5JyxcbiAgICAnaWxsdW1pbmFuY2UnLFxuICAgICd0ZW1wZXJhdHVyZSdcbiAgXSxcbn07XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9ICdqc29uJztcbmhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFID0gJ2tleS12YWx1ZSc7XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlRZUEVfVE9fVEFHID0ge1xuICBzdHJpbmc6ICdoYS1jdXN0b21pemUtc3RyaW5nJyxcbiAganNvbjogJ2hhLWN1c3RvbWl6ZS1zdHJpbmcnLFxuICBpY29uOiAnaGEtY3VzdG9taXplLWljb24nLFxuICBib29sZWFuOiAnaGEtY3VzdG9taXplLWJvb2xlYW4nLFxuICBhcnJheTogJ2hhLWN1c3RvbWl6ZS1hcnJheScsXG4gICdrZXktdmFsdWUnOiAnaGEtY3VzdG9taXplLWtleS12YWx1ZScsXG59O1xuXG4vLyBBdHRyaWJ1dGVzIGhlcmUgc2VydmUgZHVhbCBwdXJwb3NlOlxuLy8gMSkgQW55IGtleSBvZiB0aGlzIG9iamVjdCB3b24ndCBiZSBzaG93biBpbiBtb3JlLWluZm8gd2luZG93LlxuLy8gMikgQW55IGtleSB3aGljaCBoYXMgdmFsdWUgb3RoZXIgdGhhbiB1bmRlZmluZWQgd2lsbCBhcHBlYXIgaW4gY3VzdG9taXphdGlvblxuLy8gICAgY29uZmlnIGFjY29yZGluZyB0byBpdHMgdmFsdWUuXG5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID1cbiAgaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyB8fCB7XG4gICAgZW50aXR5X3BpY3R1cmU6IHVuZGVmaW5lZCxcbiAgICBmcmllbmRseV9uYW1lOiB7IHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ05hbWUnIH0sXG4gICAgaWNvbjogeyB0eXBlOiAnaWNvbicgfSxcbiAgICBlbXVsYXRlZF9odWU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRvbWFpbnM6IFsnZW11bGF0ZWRfaHVlJ11cbiAgICB9LFxuICAgIGVtdWxhdGVkX2h1ZV9uYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRvbWFpbnM6IFsnZW11bGF0ZWRfaHVlJ11cbiAgICB9LFxuICAgIGhhYXNrYV9oaWRkZW46IHVuZGVmaW5lZCxcbiAgICBoYWFza2FfbmFtZTogdW5kZWZpbmVkLFxuICAgIGhvbWVicmlkZ2VfaGlkZGVuOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgIGhvbWVicmlkZ2VfbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHN1cHBvcnRlZF9mZWF0dXJlczogdW5kZWZpbmVkLFxuICAgIGF0dHJpYnV0aW9uOiB1bmRlZmluZWQsXG4gICAgY3VzdG9tX3VpX21vcmVfaW5mbzogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgZGV2aWNlX2NsYXNzOiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgb3B0aW9uczogaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGV2aWNlIGNsYXNzJyxcbiAgICAgIGRvbWFpbnM6IFsnYmluYXJ5X3NlbnNvcicsICdjb3ZlcicsICdzZW5zb3InXVxuICAgIH0sXG4gICAgaGlkZGVuOiB7IHR5cGU6ICdib29sZWFuJywgZGVzY3JpcHRpb246ICdIaWRlIGZyb20gVUknIH0sXG4gICAgYXNzdW1lZF9zdGF0ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZG9tYWluczogWydzd2l0Y2gnLCAnbGlnaHQnLCAnY292ZXInLCAnY2xpbWF0ZScsICdmYW4nLCAnZ3JvdXAnXVxuICAgIH0sXG4gICAgaW5pdGlhbF9zdGF0ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkb21haW5zOiBbJ2F1dG9tYXRpb24nXVxuICAgIH0sXG4gICAgdW5pdF9vZl9tZWFzdXJlbWVudDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBoYXNzQXR0cmlidXRlVXRpbDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbndpbmRvdy5KU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gZnVuY3Rpb24ocHJvcCkgeyByZXR1cm4gcHJvcDsgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc3RhdGljIHN0cmluZyB2YWx1ZSB3aGljaCBjYW4gYmUgdXNlZCB0byBmaWx0ZXJcbiAqIHN0cmluZ3MgYnkgYXNzZXRpbmcgdGhhdCB0aGV5IGhhdmUgYmVlbiBjcmVhdGVkIHZpYSB0aGlzIGNsYXNzLiBUaGVcbiAqIGB2YWx1ZWAgcHJvcGVydHkgcmV0dXJucyB0aGUgc3RyaW5nIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cbmNsYXNzIExpdGVyYWxTdHJpbmcge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB0aGlzLnZhbHVlID0gc3RyaW5nLnRvU3RyaW5nKCk7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gTGl0ZXJhbFN0cmluZyBzdHJpbmcgdmFsdWVcbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gbGl0ZXJhbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTGl0ZXJhbFN0cmluZ30gKi8odmFsdWUpLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi1saXRlcmFsIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbExpdGVyYWwgZnVuY3Rpb246ICR7dmFsdWV9YFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBodG1sVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50IH0gKi8odmFsdWUpLmlubmVySFRNTDtcbiAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gbGl0ZXJhbFZhbHVlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tdGVtcGxhdGUgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sIGZ1bmN0aW9uOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbi8qKlxuICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyB0aGF0IGNyZWF0ZXMgYW4gSFRNTCA8dGVtcGxhdGU+IGVsZW1lbnQgZnJvbSB0aGVcbiAqIGNvbnRlbnRzIG9mIHRoZSBzdHJpbmcuXG4gKlxuICogVGhpcyBhbGxvd3MgeW91IHRvIHdyaXRlIGEgUG9seW1lciBUZW1wbGF0ZSBpbiBKYXZhU2NyaXB0LlxuICpcbiAqIFRlbXBsYXRlcyBjYW4gYmUgY29tcG9zZWQgYnkgaW50ZXJwb2xhdGluZyBgSFRNTFRlbXBsYXRlRWxlbWVudGBzIGluXG4gKiBleHByZXNzaW9ucyBpbiB0aGUgSmF2YVNjcmlwdCB0ZW1wbGF0ZSBsaXRlcmFsLiBUaGUgbmVzdGVkIHRlbXBsYXRlJ3NcbiAqIGBpbm5lckhUTUxgIGlzIGluY2x1ZGVkIGluIHRoZSBjb250YWluaW5nIHRlbXBsYXRlLiAgVGhlIG9ubHkgb3RoZXJcbiAqIHZhbHVlcyBhbGxvd2VkIGluIGV4cHJlc3Npb25zIGFyZSB0aG9zZSByZXR1cm5lZCBmcm9tIGBodG1sTGl0ZXJhbGBcbiAqIHdoaWNoIGVuc3VyZXMgb25seSBsaXRlcmFsIHZhbHVlcyBmcm9tIEpTIHNvdXJjZSBldmVyIHJlYWNoIHRoZSBIVE1MLCB0b1xuICogZ3VhcmQgYWdhaW5zdCBYU1Mgcmlza3MuXG4gKlxuICogQWxsIG90aGVyIHZhbHVlcyBhcmUgZGlzYWxsb3dlZCBpbiBleHByZXNzaW9ucyB0byBoZWxwIHByZXZlbnQgWFNTXG4gKiBhdHRhY2tzOyBob3dldmVyLCBgaHRtbExpdGVyYWxgIGNhbiBiZSB1c2VkIHRvIGNvbXBvc2Ugc3RhdGljXG4gKiBzdHJpbmcgdmFsdWVzIGludG8gdGVtcGxhdGVzLiBUaGlzIGlzIHVzZWZ1bCB0byBjb21wb3NlIHN0cmluZ3MgaW50b1xuICogcGxhY2VzIHRoYXQgZG8gbm90IGFjY2VwdCBodG1sLCBsaWtlIHRoZSBjc3MgdGV4dCBvZiBhIGBzdHlsZWBcbiAqIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+Omhvc3R7IGNvbnRlbnQ6XCIuLi5cIiB9PC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHt0aGlzLnBhcnRpYWxUZW1wbGF0ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgcGFydGlhbFRlbXBsYXRlKCkgeyByZXR1cm4gaHRtbGA8c3Bhbj5QYXJ0aWFsITwvc3Bhbj5gOyB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gQ29uc3RydWN0ZWQgSFRNTFRlbXBsYXRlRWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IGZ1bmN0aW9uIGh0bWwoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gKi8oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgaHRtbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbi8qKlxuICogQW4gaHRtbCBsaXRlcmFsIHRhZyB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYGh0bWxgIHRvIGNvbXBvc2UuXG4gKiBhIGxpdGVyYWwgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPlxuICogICAgICAgICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAqICAgICAgICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZSgpfVxuICogICAgICAgICA8L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3N0YXRpY1ZhbHVlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBzdHlsZVRlbXBsYXRlKCkge1xuICogICAgICAgIHJldHVybiBodG1sTGl0ZXJhbGAuc2hhZG93ZWQgeyBiYWNrZ3JvdW5kOiBncmF5OyB9YDtcbiAqICAgICB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshTGl0ZXJhbFN0cmluZ30gQ29uc3RydWN0ZWQgbGl0ZXJhbCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWxMaXRlcmFsID0gZnVuY3Rpb24oc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIHJldHVybiBuZXcgTGl0ZXJhbFN0cmluZyh2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGxpdGVyYWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pKTtcbn07XG4iLCJpbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBDdWlCYXNlRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopIHtcbiAgICBsZXQgZXh0cmFzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9kYXRhX3RlbXBsYXRlO1xuICAgIGlmIChleHRyYXMpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYXMpKSB7XG4gICAgICAgIGV4dHJhcyA9IFtleHRyYXNdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhcy5tYXAoZXh0cmEgPT4gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgZXh0cmEsXG4gICAgICAgIGhhc3MsXG4gICAgICAgIGhhc3Muc3RhdGVzLFxuICAgICAgICBzdGF0ZU9iaixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgICAgLyogYXR0cmlidXRlPSAqLyB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlT2JqLnN0YXRlLFxuICAgICAgKSkuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQgIT09IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSkge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGV4dHJhLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQ7XG4gIH1cblxuICBoYXNFeHRyYShleHRyYSkge1xuICAgIHJldHVybiBleHRyYS5sZW5ndGggPiAwO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDdWlCYXNlRWxlbWVudDtcbiIsImltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgRHluYW1pY0VsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBlbGVtZW50TmFtZTogU3RyaW5nLFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ29ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKScsXG4gICAgXTtcbiAgfVxuXG4gIG9ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKSB7XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgIGVsZW1lbnROYW1lID8gZWxlbWVudE5hbWUudG9VcHBlckNhc2UoKSA6ICdESVYnLFxuICAgICAgeyBoYXNzLCBzdGF0ZU9iaiwgaW5EaWFsb2cgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy1lbGVtZW50JywgRHluYW1pY0VsZW1lbnQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcblxuaW1wb3J0ICcuL2R5bmFtaWMtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBEeW5hbWljV2l0aEV4dHJhIGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1jYXJkLWRpc3BsYXknKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5jb250cm9sLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IC00cHggLTE2cHggLTRweCAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGhhLXN0YXRlLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAgIGR5bmFtaWMtZWxlbWVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgICNvdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgI2xvY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICB9XG4gICAgICAjbG9jay5oYS1jb3Zlci1jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAuZXh0cmEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1zaXplOiAzNnB4O1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZTogMS4yZW07XG4gICAgICB9XG4gICAgICAuc3RhdGUge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgY2xhc3MkPSdbW2V4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKV1dIGhvcml6b250YWwgbGF5b3V0Jz5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tleHRyYU9ialZpc2libGVdXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCdcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPSdbW2V4dHJhT2JqXV0nXG4gICAgICAgICAgICAgICAgICBvbi1kb20tY2hhbmdlPSdleHRyYURvbUNoYW5nZWQnPlxuICAgICAgICAgIDxoYS1zdGF0ZS1sYWJlbC1iYWRnZSBoYXNzPSdbW2hhc3NdXScgc3RhdGU9J1tbaXRlbV1dJz48L2hhLXN0YXRlLWxhYmVsLWJhZGdlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkeW5hbWljLWVsZW1lbnRcbiAgICAgICAgICAgICAgICBjbGFzcz0nZmxleCdcbiAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgICAgIGVsZW1lbnQtbmFtZT0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDwvZHluYW1pYy1lbGVtZW50PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2lzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlcIiBvbi1jbGljaz0nY2xpY2tIYW5kbGVyJz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9ja11dJz5cbiAgICAgICAgICAgICAgICAgIDxpcm9uLWljb24gaWQ9XCJsb2NrXCIgY2xhc3MkPVwiW1tjb250cm9sRWxlbWVudF1dXCIgaWNvbj1cIm1kaTpsb2NrLW91dGxpbmVcIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdGUnPltbY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICBleHRyYU9iajoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIF9hdHRhY2hlZCknLFxuICAgICAgfSxcbiAgICAgIF9hdHRhY2hlZDogQm9vbGVhbixcbiAgICAgIGV4dHJhT2JqVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2F0dGFjaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBhdHRhY2hlZCkge1xuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZSB8fCAhYXR0YWNoZWQpIHJldHVybiBbXTtcbiAgICBsZXQgZXh0cmFCYWRnZXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYUJhZGdlcykpIHtcbiAgICAgIGV4dHJhQmFkZ2VzID0gW2V4dHJhQmFkZ2VzXTtcbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhQmFkZ2VzLm1hcCgoZXh0cmFCYWRnZSkgPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoZXh0cmFCYWRnZS5lbnRpdHlfaWQgJiYgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdKSB7XG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICB0aGlzLCBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0sIHRoaXMuaW5EaWFsb2csXG4gICAgICAgICAgLyogYWxsb3dIaWRkZW49ICovZmFsc2UpKTtcbiAgICAgIH0gZWxzZSBpZiAoZXh0cmFCYWRnZS5hdHRyaWJ1dGUgJiZcbiAgICAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgc3RhdGU6IFN0cmluZyhzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSksXG4gICAgICAgICAgZW50aXR5X2lkOiAnbm9uZS5ub25lJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IGV4dHJhQmFkZ2UudW5pdCB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICAgICAgbGV0IGJsYWNrbGlzdCA9IGV4dHJhQmFkZ2UuYmxhY2tsaXN0X3N0YXRlcztcbiAgICAgIGlmIChibGFja2xpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmxhY2tsaXN0KSkge1xuICAgICAgICAgIGJsYWNrbGlzdCA9IFtibGFja2xpc3RdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChibGFja2xpc3Quc29tZSh2ID0+IFJlZ0V4cCh2KS50ZXN0KHJlc3VsdC5zdGF0ZS50b1N0cmluZygpKSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0Ll9lbnRpdHlEaXNwbGF5ID0gJyc7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pLmZpbHRlcihleHRyYUJhZGdlID0+IGV4dHJhQmFkZ2UgIT0gbnVsbCk7XG4gIH1cblxuICBjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZyB8fCAhZXh0cmFPYmopIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZXh0cmFPYmoubGVuZ3RoICE9PSAwO1xuICB9XG5cbiAgZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpIHtcbiAgICByZXR1cm4gZXh0cmFPYmpWaXNpYmxlID8gJ2V4dHJhJyA6ICcnO1xuICB9XG5cbiAgX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhpZGVfY29udHJvbDtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopIHtcbiAgICAvLyBoYUxvY2FsaXplIHJlbW92ZWQgaW4gMC42MVxuICAgIHJldHVybiBzdXBlci5jb21wdXRlU3RhdGVEaXNwbGF5KHRoaXMuaGFMb2NhbGl6ZSB8fCB0aGlzLmxvY2FsaXplLCBzdGF0ZU9iaik7XG4gIH1cblxuICBpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHMgfHxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jaztcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBjb25zdCBsb2NrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2NrJyk7XG4gICAgaWYgKGxvY2spIHtcbiAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vcGVuLW91dGxpbmUnO1xuICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJzAuMSc7XG4gICAgfVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vdXRsaW5lJztcbiAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICB9XG4gICAgfSwgNTAwMCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFwcGx5VGhlbWVzKGhhc3MsIGVsZW1lbnQsIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCc7XG4gICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICBlbGVtZW50LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgZXh0cmFEb21DaGFuZ2VkKCkge1xuICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpXG4gICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICB0aGlzLmFwcGx5VGhlbWVzKHRoaXMuaGFzcywgZWxlbSwgZWxlbS5zdGF0ZSk7XG4gICAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLXdpdGgtZXh0cmEnLCBEeW5hbWljV2l0aEV4dHJhKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgRXZlbnRzTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2V2ZW50cy1taXhpbi5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbVVpIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lci5FbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPjwvc3R5bGU+XG4gICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPSdtZGk6YXJyb3ctbGVmdCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdfYmFja0hhbmRsZXInXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPGRpdiBtYWluLXRpdGxlPkN1c3RvbSBVSSBzZXR0aW5nczwvZGl2PlxuICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT0nW1tpc1dpZGVdXSc+XG4gICAgICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9J0RldmljZSBuYW1lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgU2V0IGRldmljZSBuYW1lIHNvIHRoYXQgeW91IGNhbiByZWZlcmVuY2UgaXQgaW4gcGVyLWRldmljZSBzZXR0aW5nc1xuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPSdOYW1lJ1xuICAgICAgICAgICAgICB2YWx1ZT0ne3tuYW1lfX0nXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wYXBlci1jYXJkPlxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnbmFtZUNoYW5nZWQnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLm5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICB9XG5cbiAgbmFtZUNoYW5nZWQobmFtZSkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5zZXROYW1lKG5hbWUpO1xuICB9XG5cbiAgX2JhY2tIYW5kbGVyKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB0aGlzLmZpcmUoJ2xvY2F0aW9uLWNoYW5nZWQnKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS1jb25maWctY3VzdG9tLXVpJywgSGFDb25maWdDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhVGhlbWVkU2xpZGVyIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0taGEtdGhlbWVkLXNsaWRlci1tYXJnaW4sIGluaXRpYWwpO1xuICAgICAgfVxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXItcGluLXN0YXJ0LWNvbG9yOiAgdmFyKC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbi5pcy1vbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXNsaWRlciB7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWhhLXBhcGVyLXNsaWRlci13aWR0aCwgMjAwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItc2xpZGVyXG4gICAgICAgICBtaW49J1tbX3RoZW1lZE1pbl1dJ1xuICAgICAgICAgbWF4PSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1heFwiLCBtYXgpXV0nXG4gICAgICAgICBwaW49J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwicGluXCIsIHBpbildXSdcbiAgICAgICAgIGNsYXNzJD0nW1tjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIF90aGVtZWRNaW4pXV0nIHZhbHVlPSdbW3ZhbHVlXV0nXG4gICAgICAgICBvbi1jaGFuZ2U9J3ZhbHVlQ2hhbmdlZCc+XG4gICAgPC9wYXBlci1zbGlkZXI+XG4gICAgYDtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbiA9ICF0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoaXMudGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbik7XG4gICAgdGhpcy5jb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoaXMudGhlbWUsIHRoaXMuZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgIH0sXG4gICAgICBwaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlzT246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICB0aGVtZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX3RoZW1lZE1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWluXCIsIG1pbiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpJyxcbiAgICBdO1xuICB9XG5cbiAgY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKSB7XG4gICAgdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkID0gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZShcbiAgICAgIHRoZW1lLCAncmVwb3J0X3doZW5fbm90X2NoYW5nZWQnLCAhZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBhdHRyLCBkZWYpIHtcbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGlmIChhdHRyIGluIHRoZW1lKSB7XG4gICAgICAgIHJldHVybiB0aGVtZVthdHRyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgdGhlbWVkTWluKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChpc09uKSB7XG4gICAgICByZXN1bHQgKz0gJ2lzLW9uICc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pIHx8IHRoZW1lZE1pbiA9PT0gMCkge1xuICAgICAgLy8gSWYgb2ZmV2hlbk1pbiBpcyBlbmFibGVkIGRvbid0IGN1c3RvbWl6ZS5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3Jlc3VsdH1kaXNhYmxlLW9mZi13aGVuLW1pbmA7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCAmJiB0aGlzLnZhbHVlID09PSBldi50YXJnZXQudmFsdWUpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLXRoZW1lZC1zbGlkZXInLCBIYVRoZW1lZFNsaWRlcik7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcbmltcG9ydCBzdGF0ZUNhcmRUeXBlIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfY2FyZF90eXBlLmpzJztcblxuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyc7XG5cbmNvbnN0IFNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTID0gWydjb25maWd1cmF0b3InXTtcbmNvbnN0IERPTUFJTl9UT19TTElERVJfU1VQUE9SVCA9IHtcbiAgbGlnaHQ6IDEsIC8vIFNVUFBPUlRfQlJJR0hUTkVTU1xuICBjb3ZlcjogNCwgLy8gU1VQUE9SVF9TRVRfUE9TSVRJT05cbiAgY2xpbWF0ZTogMSwgLy8gU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbn07XG5jb25zdCBUWVBFX1RPX0NPTlRST0wgPSB7XG4gIHRvZ2dsZTogJ2hhLWVudGl0eS10b2dnbGUnLFxuICBkaXNwbGF5OiAnJyxcbiAgY292ZXI6ICdoYS1jb3Zlci1jb250cm9scycsXG59O1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZEN1c3RvbVVpIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiknLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gJ0RJVicgJiZcbiAgICAgICAgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykgfHwgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2hpbGQtY2FyZCcpKSkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAvLyBTaW5jZSB0aGlzIGRvZXNuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIC0gbm8gbmVlZCB0byBjbGVhciBpdC5cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLCAndmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCBpbmhlcml0KScpO1xuXG4gICAgICAvLyBQb2x5ZmlsbCAndXBkYXRlU3R5bGVzJy5cbiAgICAgIGlmICghY29udGFpbmVyLnVwZGF0ZVN0eWxlcykge1xuICAgICAgICBjb250YWluZXIudXBkYXRlU3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBzdHlsZXNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VkKHRoaXMuaGFzcywgdGhpcy5pbkRpYWxvZywgdGhpcy5zdGF0ZU9iaik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICB0aGlzLl9jb250YWluZXIsIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgJ2RlZmF1bHQnKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBiYWRnZU1vZGUoaGFzcywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIGNvbnN0IHN0YXRlcyA9IFtdO1xuICAgIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbaWRdO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBJRCAke2lkfSBpbiBncm91cCAke3N0YXRlT2JqLmVudGl0eV9pZH1gKTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0IHx8XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0LmluY2x1ZGVzKHN0YXRlLmVudGl0eV9pZCkpIHtcbiAgICAgICAgICBzdGF0ZXMucHVzaCh3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBzdGF0ZSwgZmFsc2UgLyogaW5EaWFsb2cgKi8sIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZU9iaik7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykpIHtcbiAgICAgICAgICBwYXJhbXMubWFyZ2luID0gJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLW1hcmdpbiwgMCknO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAnSEEtQkFER0VTLUNBUkQnLFxuICAgICAgeyBoYXNzLCBzdGF0ZXMgfSk7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIHdpZHRoOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtd2lkdGgsIGluaXRpYWwpJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtdGV4dC1hbGlnbiwgaW5pdGlhbCknLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubGFzdENoaWxkLnN0eWxlLmZvbnRTaXplID0gJzg1JSc7XG5cbiAgICAvLyBTaW5jZSB0aGlzIHZhcmlhYmxlIG9ubHkgYWZmZWN0cyBiYWRnZXMgbW9kZSAtIG5vIG5lZWQgdG8gY2xlYW4gaXQgdXAuXG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oYS1zdGF0ZS1sYWJlbC1iYWRnZS1tYXJnaW4tYm90dG9tJywgJzAnKTtcbiAgfVxuXG4gIGNsZWFuQmFkZ2VTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnIH0pO1xuICB9XG5cbiAgYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopIHtcbiAgICBsZXQgdGhlbWVUYXJnZXQgPSB0aGlzO1xuICAgIGxldCB0aGVtZU5hbWUgPSAnZGVmYXVsdCc7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhlbWVUYXJnZXQgPSB0aGlzLl9jb250YWluZXI7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICB0aGVtZU5hbWUgPSBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lO1xuICAgIH1cbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgIHRoZW1lVGFyZ2V0LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgbWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSB7XG4gICAgaWYgKCFtb2RpZmllZE9iaikge1xuICAgICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNsaWRlckVsaWdpYmxlXyhkb21haW4sIG9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiZcbiAgICAgIChET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmIG9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykgJiZcbiAgICAgIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAmJiBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgIT09ICduby1zbGlkZXInO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MgfHwgIXRoaXMuX2lzQXR0YWNoZWQpIHJldHVybjtcbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICAgIGNvbnN0IG1vZGlmaWVkT2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgdGhpcywgc3RhdGVPYmosIGluRGlhbG9nLCB0cnVlIC8qIGFsbG93SGlkZGVuICovKTtcblxuICAgIGlmICh0aGlzLm1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikpIHJldHVybjtcblxuICAgIHRoaXMuYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopO1xuXG4gICAgaWYgKCFpbkRpYWxvZyAmJiBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSA9PT0gJ2JhZGdlcycpIHtcbiAgICAgIHRoaXMuYmFkZ2VNb2RlKGhhc3MsIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfVxuICB9XG5cbiAgcmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgdGhpcy5jbGVhbkJhZGdlU3R5bGUoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGhhc3MsXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIGluRGlhbG9nLFxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxTdGF0ZUNhcmRUeXBlID0gc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaik7XG4gICAgbGV0IGN1c3RvbVN0YXRlQ2FyZFR5cGU7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5O1xuXG4gICAgaWYgKGRvbWFpbiA9PT0gJ2xpZ2h0JyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gICAgICAgIHNlcnZpY2VNaW46ICd0dXJuX29mZicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICd0dXJuX29uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnYnJpZ2h0bmVzcycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY292ZXItY29udHJvbHMnLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ2Nsb3NlX2NvdmVyJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF9jb3Zlcl9wb3NpdGlvbicsXG4gICAgICAgIHNldFZhbHVlTmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnY3VycmVudF9wb3NpdGlvbicsXG4gICAgICAgIG5hbWVPbjogJ29wZW4nLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjbGltYXRlJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY2xpbWF0ZS1zdGF0ZScsXG4gICAgICAgIG1pbjogc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcCB8fCAtMTAwLFxuICAgICAgICBtYXg6IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXAgfHwgMjAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHZhbHVlTmFtZTogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgbmFtZU9uOiAnJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV07XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZCAmJlxuICAgICAgICAgICAgICAgIVNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTLmluY2x1ZGVzKG9yaWdpbmFsU3RhdGVDYXJkVHlwZSkpIHtcbiAgICAgIHBhcmFtcy5pbkRpYWxvZyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gJyc7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudDtcbiAgICB9XG5cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgKHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgfHwgY3VzdG9tU3RhdGVDYXJkVHlwZSB8fCBgU1RBVEUtQ0FSRC0ke29yaWdpbmFsU3RhdGVDYXJkVHlwZX1gKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcGFyYW1zKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLWN1c3RvbS11aScsIFN0YXRlQ2FyZEN1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuaW1wb3J0ICcuL2hhLXRoZW1lZC1zbGlkZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLnNlY29uZC1saW5lLCAuc3RhdGUtYW5kLXRvZ2dsZSwgLnN0YXRlLWluZm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1hbmQtdG9nZ2xlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc2Vjb25kLWxpbmUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kLWxpbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgIH1cbiAgICAgIC5zdHJldGNoIC5zZWNvbmQtbGluZSwgLnN0cmV0Y2ggaGEtdGhlbWVkLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWhhLXBhcGVyLXNsaWRlci13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWluZm8ge1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICBoYS10aGVtZWQtc2xpZGVyLCAudG9wLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAudG9wLXdyYXBwZXIuc3RyZXRjaCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcyQ9J2hvcml6b250YWwgbGF5b3V0IGZsZXggdG9wLXdyYXBwZXIgW1tfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpXV0nPlxuICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkIGZsZXgtYXV0byBzdGF0ZS1hbmQtdG9nZ2xlJz5cbiAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvIGZsZXgtYXV0bydcbiAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2JyZWFrU2xpZGVyXV0nIGNsYXNzPSdoaWRkZW4nPlxuICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc2hvd1NsaWRlcl1dJyByZXN0YW1wPlxuICAgICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBmbGV4LWF1dG8gZW5kLWp1c3RpZmllZCBzZWNvbmQtbGluZSc+XG4gICAgICAgICAgPGhhLXRoZW1lZC1zbGlkZXJcbiAgICAgICAgICAgIGlkPSdzbGlkZXInXG4gICAgICAgICAgICBtYXg9W1ttYXhdXVxuICAgICAgICAgICAgbWluPVtbbWluXV1cbiAgICAgICAgICAgIHRoZW1lPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuc2xpZGVyX3RoZW1lXV0nXG4gICAgICAgICAgICBpcy1vbj0nW1tpc09uKHN0YXRlT2JqLCBuYW1lT24pXV0nXG4gICAgICAgICAgICB2YWx1ZT0ne3tzbGlkZXJWYWx1ZX19J1xuICAgICAgICAgICAgZGlzYWJsZS1vZmYtd2hlbi1taW49J3t7ZGlzYWJsZU9mZldoZW5NaW59fSdcbiAgICAgICAgICAgIG9uLWNoYW5nZT0nc2xpZGVyQ2hhbmdlZCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdzdG9wUHJvcGFnYXRpb24nPlxuICAgICAgICAgIDwvaGEtdGhlbWVkLXNsaWRlcj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWJyZWFrU2xpZGVyXV0nPlxuICAgICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1pbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1heDogU3RyaW5nLFxuICAgICAgdmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICBzZXRWYWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIG5hbWVPbjogeyB0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb24nIH0sXG4gICAgICBtaW46IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMCB9LFxuICAgICAgbWF4OiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDI1NSB9LFxuXG4gICAgICBzbGlkZXJWYWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiBCb29sZWFuLFxuICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgc3RyZXRjaFNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYnJlYWtTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGhpZGVTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGxpbmVUb29Mb25nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBtaW5MaW5lQnJlYWs6IE51bWJlcixcbiAgICAgIG1heExpbmVCcmVhazogTnVtYmVyLFxuICAgICAgc2hvd1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX29uSXJvblJlc2l6ZSA9IHRoaXMuX29uSXJvblJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5faXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKScsXG4gICAgXTtcbiAgfVxuXG4gIF93YWl0Rm9yTGF5b3V0KCkge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0ZWQpIHJldHVybjtcbiAgICB0aGlzLl9zZXRNb2RlKCk7XG4gICAgaWYgKHRoaXMuX2ZyYW1lSWQpIHJldHVybjtcbiAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gZmFsc2U7XG4gICAgdGhpcy5fZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uSXJvblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldE1vZGUoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgaGlkZVNsaWRlcjogdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInICYmIHRoaXMubGluZVRvb0xvbmcsXG4gICAgICBicmVha1NsaWRlcjpcbiAgICAgICAgICAgKHRoaXMubW9kZSA9PT0gJ2JyZWFrLXNsaWRlcicgfHwgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSAmJlxuICAgICAgICAgICB0aGlzLmxpbmVUb29Mb25nLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLnNob3dTbGlkZXIpIHtcbiAgICAgIG9iai5icmVha1NsaWRlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICB9XG5cbiAgX29uSXJvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVhZHlUb0NvbXB1dGUpIHJldHVybjtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbm8tc2xpZGVyJykge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgaGlkZVNsaWRlcjogdHJ1ZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldkJyZWFrU2xpZGVyID0gdGhpcy5icmVha1NsaWRlcjtcbiAgICBjb25zdCBwcmV2SGlkZVNsaWRlciA9IHRoaXMuaGlkZVNsaWRlcjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuJDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPT09IDApIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPD0gdGhpcy5taW5MaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyV2lkdGggPj0gdGhpcy5tYXhMaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZIaWRlU2xpZGVyICYmIHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHVuaGlkZSB0aGUgc2xpZGVyIGluIG9yZGVyIHRvIHJlY2FsY3VsYXRlIGhlaWdodC5cbiAgICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgc3RhdGVIZWlnaHQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnN0YXRlLWluZm8nKS5jbGllbnRIZWlnaHQ7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gY29udGFpbmVySGVpZ2h0ID4gc3RhdGVIZWlnaHQgKiAxLjU7XG4gICAgICBpZiAodGhpcy5saW5lVG9vTG9uZykge1xuICAgICAgICB0aGlzLm1pbkxpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgfSBlbHNlIGlmICghcHJldkJyZWFrU2xpZGVyKSB7XG4gICAgICAgIHRoaXMubWF4TGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgfVxuXG4gIF9jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZS1saW5lJykge1xuICAgICAgcmV0dXJuICdub3dyYXAnO1xuICAgIH1cbiAgICBpZiAoc3RyZXRjaFNsaWRlciAmJiBsaW5lVG9vTG9uZykge1xuICAgICAgcmV0dXJuICdzdHJldGNoIHdyYXAnO1xuICAgIH1cbiAgICByZXR1cm4gJ3dyYXAnO1xuICB9XG5cbiAgX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKSB7XG4gICAgaWYgKGluRGlhbG9nIHx8IGhpZGVTbGlkZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBjb25zdCBwYXJhbSA9IHsgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9O1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm47XG4gICAgbGV0IHRhcmdldCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVyJyk7XG4gICAgaWYgKGV2LnRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAvLyBObyBTaGFkb3cgRE9NIC0gd2UgaGF2ZSBhY2Nlc3MgdG8gb3JpZ2luYWwgdGFyZ2V0LlxuICAgICAgKHsgdGFyZ2V0IH0gPSBldik7XG4gICAgfSBlbHNlIGlmIChldi5wYXRoKSB7XG4gICAgICBbdGFyZ2V0XSA9IGV2LnBhdGg7XG4gICAgfSBlbHNlIGlmIChldi5jb21wb3NlZFBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gMCB8fCAodmFsdWUgPD0gdGFyZ2V0Lm1pbiAmJiAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikpIHtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWluLCBwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtW3RoaXMuc2V0VmFsdWVOYW1lIHx8IHRoaXMudmFsdWVOYW1lXSA9IHZhbHVlO1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNYXgsIHBhcmFtKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgc2xpZGVyVmFsdWU6IHRoaXMuaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSA/IHN0YXRlT2JqLmF0dHJpYnV0ZXNbdmFsdWVOYW1lXSA6IDAsXG4gICAgfTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB7XG4gICAgICAgIG1pbkxpbmVCcmVhazogMCxcbiAgICAgICAgbWF4TGluZUJyZWFrOiA5OTksXG4gICAgICAgIGhpZGVTbGlkZXI6IGZhbHNlLFxuICAgICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgICAgbW9kZTogc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUsXG4gICAgICAgIHN0cmV0Y2hTbGlkZXI6ICEhc3RhdGVPYmouYXR0cmlidXRlcy5zdHJldGNoX3NsaWRlcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBpc09uKHN0YXRlT2JqLCBuYW1lT24pIHtcbiAgICByZXR1cm4gc3RhdGVPYmogJiYgKCFuYW1lT24gfHwgc3RhdGVPYmouc3RhdGUgPT09IG5hbWVPbik7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJywgU3RhdGVDYXJkV2l0aFNsaWRlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkJz5cbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYVxuICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJ1xuICAgICAgICAgIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz5cbiAgICAgIDwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIpO1xuIiwiLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuZXhwb3J0IGRlZmF1bHQgKHN1cGVyQ2xhc3MpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBFdmVudHNNaXhpbiBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAgICogICBwYXlsb2FkLlxuICAgICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICAqL1xuICAgIGZpcmUodHlwZSwgZGV0YWlsID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgICAgICBidWJibGVzOiBvcHRpb25zLmJ1YmJsZXMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IEJvb2xlYW4ob3B0aW9ucy5jYW5jZWxhYmxlKSxcbiAgICAgICAgY29tcG9zZWQ6IG9wdGlvbnMuY29tcG9zZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmNvbXBvc2VkLFxuICAgICAgfSk7XG4gICAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgICBjb25zdCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IHRoaXM7XG4gICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRzTWl4aW47XG59O1xuIiwiaW1wb3J0IGhhc3NBdHRyaWJ1dGVzVXRpbCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsLmpzJztcblxud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsIHx8IHt9O1xuY29uc3QgU1VQUE9SVEVEX1NMSURFUl9NT0RFUyA9IFtcbiAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG5dO1xuXG5jb25zdCBjdXN0b21VaUF0dHJpYnV0ZXMgPSB7XG4gIGdyb3VwOiB1bmRlZmluZWQsXG4gIGRldmljZTogdW5kZWZpbmVkLFxuICB0ZW1wbGF0ZXM6IHVuZGVmaW5lZCxcbiAgc3RhdGU6IHVuZGVmaW5lZCxcbiAgX3N0YXRlRGlzcGxheTogdW5kZWZpbmVkLFxuICBjb250cm9sX2VsZW1lbnQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgc3RhdGVfY2FyZF9tb2RlOiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBsaWdodDogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY292ZXI6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNsaW1hdGU6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgICcqJzogWydiYWRnZXMnXSxcbiAgICB9LFxuICB9LFxuICBzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgYmFkZ2VzX2xpc3Q6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHNob3dfbGFzdF9jaGFuZ2VkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2NvbnRyb2w6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGV4dHJhX2RhdGFfdGVtcGxhdGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgZXh0cmFfYmFkZ2U6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHN0cmV0Y2hfc2xpZGVyOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBzbGlkZXJfdGhlbWU6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHRoZW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGNvbmZpcm1fY29udHJvbHM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2luX2RlZmF1bHRfdmlldzogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaWNvbl9jb2xvcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxufTtcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZXNVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVM7XG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gaGFzc0F0dHJpYnV0ZXNVdGlsLlVOS05PV05fVFlQRTtcbk9iamVjdC5hc3NpZ24od2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGN1c3RvbVVpQXR0cmlidXRlcyk7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldFZpZXdFbnRpdGllcyBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF92aWV3X2VudGl0aWVzLmpzJztcblxuaW1wb3J0ICcuLi9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzJztcbmltcG9ydCBWRVJTSU9OIGZyb20gJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgJy4vaGFzcy1hdHRyaWJ1dGUtdXRpbC5qcyc7XG5cbndpbmRvdy5jdXN0b21VSSA9IHdpbmRvdy5jdXN0b21VSSB8fCB7XG4gIFNVUFBPUlRFRF9TTElERVJfTU9ERVM6IFtcbiAgICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbiAgXSxcblxuICBkb21Ib3N0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gZG9jdW1lbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtLmdldFJvb3ROb2RlKCk7XG4gICAgcmV0dXJuIChyb290IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyAvKiogQHR5cGUge1NoYWRvd1Jvb3R9ICovIChyb290KS5ob3N0IDogcm9vdDtcbiAgfSxcblxuICBsaWdodE9yU2hhZG93KGVsZW0sIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGVsZW0uc2hhZG93Um9vdCA/XG4gICAgICBlbGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOlxuICAgICAgZWxlbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfSxcblxuICBnZXRFbGVtZW50SGllcmFyY2h5KHJvb3QsIGhpZXJhcmNoeSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlbGVtID0gaGllcmFyY2h5LnNoaWZ0KCk7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3cocm9vdCwgZWxlbSksIGhpZXJhcmNoeSk7XG4gICAgfVxuICAgIHJldHVybiByb290O1xuICB9LFxuXG4gIGdldENvbnRleHQoZWxlbSkge1xuICAgIGlmIChlbGVtLl9jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW0uX2NvbnRleHQgPSBbXTtcbiAgICAgIGZvciAobGV0IGVsZW1lbnQgPSAoZWxlbS50YWdOYW1lID09PSAnSEEtRU5USVRJRVMtQ0FSRCcgPyB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtKSA6IGVsZW0pO1xuICAgICAgICBlbGVtZW50OyBlbGVtZW50ID0gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbWVudCkpIHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICBjYXNlICdIQS1FTlRJVElFUy1DQVJEJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5KSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50Lmdyb3VwRW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkgPT09IGZhbHNlICYmIGVsZW1lbnQuc3RhdGVzICYmIGVsZW1lbnQuc3RhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goYGdyb3VwLiR7Y29tcHV0ZVN0YXRlRG9tYWluKGVsZW1lbnQuc3RhdGVzWzBdKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ01PUkUtSU5GTy1HUk9VUCc6XG4gICAgICAgICAgY2FzZSAnU1RBVEUtQ0FSRC1DT05URU5UJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LnN0YXRlT2JqLmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIQS1DQVJEUyc6XG4gICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpIHx8ICdkZWZhdWx0X3ZpZXcnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbS5fY29udGV4dC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtLl9jb250ZXh0O1xuICB9LFxuXG4gIGZpbmRNYXRjaChrZXksIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHJldHVybiBudWxsO1xuICAgIGlmIChvcHRpb25zW2tleV0pIHJldHVybiBrZXk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbmQob3B0aW9uID0+IGtleS5tYXRjaChgXiR7b3B0aW9ufSRgKSk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2gobmFtZSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VbbWF0Y2hdKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0Q29udGV4dChlbGVtKTtcbiAgICBpZiAoIWNvbnRleHQpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCkge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG4gICAgY29udGV4dC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKGMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYXR0cmlidXRlcywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBfc2V0S2VlcChvYmosIHZhbHVlKSB7XG4gICAgaWYgKG9iai5fY3VpX2tlZXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gb2JqLl9jdWlfa2VlcCAmJiB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFhdHRyaWJ1dGVzLnRlbXBsYXRlcykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCB0cnVlKTtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgbmV3QXR0cmlidXRlcyA9IHt9O1xuICAgIGxldCBoYXNHbG9iYWwgPSBmYWxzZTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMudGVtcGxhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gYXR0cmlidXRlcy50ZW1wbGF0ZXNba2V5XTtcbiAgICAgIGlmICh0ZW1wbGF0ZS5tYXRjaCgvXFxiKGVudGl0aWVzfGhhc3MpXFxiLykpIHtcbiAgICAgICAgaGFzR2xvYmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgdGVtcGxhdGUsIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMsXG4gICAgICAgIChzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzICYmIHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXNba2V5XSkgfHxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSxcbiAgICAgICAgc3RhdGVPYmoudW50ZW1wbGF0ZWRfc3RhdGUgfHwgc3RhdGVPYmouc3RhdGUpO1xuICAgICAgLy8gSW4gY2FzZSBvZiBudWxsIGRvbid0IHNldCB0aGUgdmFsdWUuXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgIG5ld0F0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ3N0YXRlJykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLnN0YXRlKSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnX3N0YXRlRGlzcGxheScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5KSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IGF0dHJpYnV0ZXNba2V5XSkge1xuICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosICFoYXNHbG9iYWwpO1xuICAgIGlmICghaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcyA9PT0gYXR0cmlidXRlcykge1xuICAgICAgLy8gV2UgYXJlIG9wZXJhdGluZyBvbiByZWFsIGF0dHJpYnV0ZXMuIFJlcGxhY2UgdGhlbS5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIG5ld0F0dHJpYnV0ZXMpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnc3RhdGUnKSkge1xuICAgICAgICBpZiAobmV3QXR0cmlidXRlcy5zdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5zdGF0ZSA9IFN0cmluZyhuZXdBdHRyaWJ1dGVzLnN0YXRlKTtcbiAgICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGUgPSBzdGF0ZU9iai5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnX3N0YXRlRGlzcGxheScpKSB7XG4gICAgICAgIHJlc3VsdC5fc3RhdGVEaXNwbGF5ID0gbmV3QXR0cmlidXRlcy5fc3RhdGVEaXNwbGF5O1xuICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5ID0gc3RhdGVPYmouX3N0YXRlRGlzcGxheTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChyZXN1bHQsICFoYXNHbG9iYWwpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gT3BlcmF0aW5nIG9uIGNvbnRleHQtYXdhcmUgYXR0cmlidXRlcy4gUmV0dXJuIHNoYWxsb3cgY29weSBvZiBvYmplY3QuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmopIHtcbiAgICBjb25zdCBuZXdSZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIHN0YXRlT2JqLmF0dHJpYnV0ZXMpO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGVzKG9iaikge1xuICAgICAgaWYgKCFvYmopIHJldHVybjtcbiAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgICAgIGhhc3MsIHN0YXRlcywgbmV3UmVzdWx0LCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgaGFzQ2hhbmdlcyB8PSAocmVzdWx0ICE9PSBuZXdSZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmRldmljZSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmdyb3VwKTtcbiAgICB9XG5cbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICBpZiAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaikgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICBpZiAoaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlT2JqO1xuICB9LFxuXG4gIGFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIHN0YXRlOiBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpLFxuICAgICAgdW50ZW1wbGF0ZWRfYXR0cmlidXRlczogc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGVPYmoubGFzdF9jaGFuZ2VkLFxuICAgIH07XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3QoZWxlbSwgc3RhdGVPYmosIGluRGlhbG9nLCBhbGxvd0hpZGRlbikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGxldCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBvYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgZWxlbS5oYXNzLCBlbGVtLmhhc3Muc3RhdGVzLCBvYmosIG9iai5hdHRyaWJ1dGVzKTtcblxuICAgIGlmIChvYmogIT09IHN0YXRlT2JqICYmIG9iai5hdHRyaWJ1dGVzLmhpZGRlbiAmJiBhbGxvd0hpZGRlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZml4R3JvdXBUaXRsZXMoKSB7XG4gICAgY29uc3QgaG9tZUFzc2lzdGFudE1haW4gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJ10pO1xuICAgIGlmIChob21lQXNzaXN0YW50TWFpbiA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcywgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhvbWVBc3Npc3RhbnRNYWluLCBbXG4gICAgICAncGFydGlhbC1jYXJkcycsXG4gICAgICAnaGEtY2FyZHNbdmlldy12aXNpYmxlXSddKTtcbiAgICBpZiAoaGFDYXJkcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYUNhcmRzLCAnLm1haW4nKSB8fCBoYUNhcmRzLiQubWFpbjtcbiAgICBjb25zdCBjYXJkcyA9IG1haW4ucXVlcnlTZWxlY3RvckFsbCgnaGEtZW50aXRpZXMtY2FyZCcpO1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmIChjYXJkLmdyb3VwRW50aXR5KSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICBjYXJkLFxuICAgICAgICAgIGNhcmQuZ3JvdXBFbnRpdHksXG4gICAgICAgICAgZmFsc2UgLyogaW5EaWFsb2cgKi8sXG4gICAgICAgICAgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pO1xuICAgICAgICBpZiAob2JqICE9PSBjYXJkLmdyb3VwRW50aXR5ICYmIG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUpIHtcbiAgICAgICAgICBjb25zdCBuYW1lRWxlbSA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGNhcmQsICcubmFtZScpO1xuICAgICAgICAgIG5hbWVFbGVtLnRleHRDb250ZW50ID0gb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGNvbnRyb2xDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLWNhcmRzJ10pO1xuICAgIGlmIChwYXJ0aWFsQ2FyZHMgPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zLmJpbmQobnVsbCwgY29sdW1ucyksXG4gICAgICAgIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGdW5jdGlvbiByZW5hbWVkIGZyb20gaGFuZGxlV2luZG93Q2hhbmdlIHRvIF91cGRhdGVDb2x1bW5zIG9uIDMuNy4xOFxuICAgIGNvbnN0IGYgPSBwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlIHx8IHBhcnRpYWxDYXJkcy5fdXBkYXRlQ29sdW1ucztcbiAgICBwYXJ0aWFsQ2FyZHMubXFscy5mb3JFYWNoKChtcWwpID0+IHtcbiAgICAgIG1xbC5yZW1vdmVMaXN0ZW5lcihmKTtcbiAgICB9KTtcbiAgICBwYXJ0aWFsQ2FyZHMubXFscyA9IGNvbHVtbnMubWFwKCh3aWR0aCkgPT4ge1xuICAgICAgY29uc3QgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7d2lkdGh9cHgpYCk7XG4gICAgICBtcWwuYWRkTGlzdGVuZXIoZik7XG4gICAgICByZXR1cm4gbXFsO1xuICAgIH0pO1xuICAgIGYoKTtcbiAgfSxcblxuICB1c2VDdXN0b21pemVyKCkge1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgY29uc3QgY3VzdG9taXplciA9IG1haW4uaGFzcy5zdGF0ZXNbJ2N1c3RvbWl6ZXIuY3VzdG9taXplciddO1xuICAgIGlmICghY3VzdG9taXplcikgcmV0dXJuO1xuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMpIHtcbiAgICAgIGlmICh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgJiYgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpIHtcbiAgICAgICAgY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgYXR0cikpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2F0dHJdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUNvbmZpZ1BhbmVsKCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGhhUGFuZWxDb25maWcgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLXBhbmVsLXJlc29sdmVyJyxcbiAgICAgICdoYS1wYW5lbC1jb25maWcnXSk7XG4gICAgaWYgKCFoYVBhbmVsQ29uZmlnKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsLCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYUNvbmZpZ05hdmlnYXRpb24gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShoYVBhbmVsQ29uZmlnLCBbXG4gICAgICAnaGEtY29uZmlnLWRhc2hib2FyZCcsXG4gICAgICAnaGEtY29uZmlnLW5hdmlnYXRpb24nXSk7XG4gICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbikge1xuICAgICAgLy8gSGFDb25maWdOYXZpZ2F0aW9uIHN0YXJ0ZWQgdXNpbmcgbG9jYWxpemUgb24gMjEuMDEuMjAxOFxuICAgICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSAmJiAhaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCA9IHRydWU7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZCA9IChoYXNzLCBwYWdlKSA9PlxuICAgICAgICAgIHBhZ2UgPT09ICdjdXN0b211aScgfHwgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQoaGFzcywgcGFnZSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnQ3VzdG9tIFVJJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdTZXRVSSB0d2Vha3MnIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFoYUNvbmZpZ05hdmlnYXRpb24ucGFnZXMuc29tZShjb25mID0+IGNvbmYgPT09ICdjdXN0b211aScgfHwgY29uZi5kb21haW4gPT09ICdjdXN0b211aScpKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5wdXNoKCdwYWdlcycsIGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSA/ICdjdXN0b211aScgOiB7XG4gICAgICAgICAgZG9tYWluOiAnY3VzdG9tdWknLFxuICAgICAgICAgIGNhcHRpb246ICdDdXN0b20gVUknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IFVJIHR3ZWFrcy4nLFxuICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEhhQ29uZmlnQ3VzdG9tVWkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGEtY29uZmlnLWN1c3RvbS11aScpO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5pc1dpZGUgPSBoYVBhbmVsQ29uZmlnLmlzV2lkZTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuc2V0QXR0cmlidXRlKCdwYWdlLW5hbWUnLCAnY3VzdG9tdWknKTtcbiAgICAgIHJldHVybiBoYUNvbmZpZ0N1c3RvbVVpO1xuICAgIH07XG5cbiAgICBjb25zdCBpcm9uUGFnZXMgPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYVBhbmVsQ29uZmlnLCAnaXJvbi1wYWdlcycpO1xuICAgIGlmIChpcm9uUGFnZXMpIHtcbiAgICAgIGlmIChpcm9uUGFnZXMubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgaXJvblBhZ2VzLmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgICBpcm9uUGFnZXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1pdGVtcy1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpKSB7XG4gICAgICAgICAgICBpcm9uUGFnZXMuc2VsZWN0KCdjdXN0b211aScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBoYVBhbmVsQ29uZmlnLnNoYWRvd1Jvb3QgfHwgaGFQYW5lbENvbmZpZztcbiAgICAgIGlmIChyb290Lmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICB9XG4gICAgICBjb25zdCB2aXNpYmxlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKTtcbiAgICAgIHJvb3QubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gdmlzaWJsZSA/ICcnIDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsU3RhdGVzSG9vaygpIHtcbiAgICBjb25zdCBob21lQXNzaXN0YW50ID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdob21lLWFzc2lzdGFudCcpO1xuICAgIGlmICghaG9tZUFzc2lzdGFudCB8fCAhaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MpIHJldHVybjtcbiAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZSA9IGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzO1xuICAgIGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzID0gZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIGNvbnN0IHsgaGFzcyB9ID0gdGhpcztcbiAgICAgIGlmIChvYmouc3RhdGVzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9iai5zdGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG9iai5zdGF0ZXNba2V5XTtcbiAgICAgICAgICBpZiAoZW50aXR5Ll9jdWlfa2VlcCkgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IG5ld0VudGl0eSA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIG9iai5zdGF0ZXMsIGVudGl0eSk7XG4gICAgICAgICAgaWYgKGhhc3Muc3RhdGVzICYmIGVudGl0eSAhPT0gaGFzcy5zdGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgLy8gTmV3IHN0YXRlIGFycml2ZWQuIFB1dCBtb2RpZmllZCBzdGF0ZSBpbi5cbiAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSAhPT0gbmV3RW50aXR5KSB7XG4gICAgICAgICAgICAvLyBJdCdzIHRoZSBzYW1lIHN0YXRlIGJ1dCBjb250ZW50cyBjaGFuZ2VkIGR1ZSB0byBvdGhlciBzdGF0ZSBjaGFuZ2VzLlxuICAgICAgICAgICAgb2JqLnN0YXRlc1trZXldID0gbmV3RW50aXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIG9iaik7XG4gICAgICBpZiAob2JqLnRoZW1lcyAmJiBoYXNzLl90aGVtZVdhaXRlcnMpIHtcbiAgICAgICAgaGFzcy5fdGhlbWVXYWl0ZXJzLmZvckVhY2god2FpdGVyID0+IHdhaXRlci5zdGF0ZUNoYW5nZWQod2FpdGVyLnN0YXRlKSk7XG4gICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgaWYgKG1haW4uaGFzcyAmJiBtYWluLmhhc3Muc3RhdGVzKSB7XG4gICAgICBtYWluLl91cGRhdGVIYXNzKHsgc3RhdGVzOiBtYWluLmhhc3Muc3RhdGVzIH0pO1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsUGFydGlhbENhcmRzKCkge1xuICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IGN1c3RvbUVsZW1lbnRzLmdldCgncGFydGlhbC1jYXJkcycpO1xuICAgIGlmICghcGFydGlhbENhcmRzIHx8ICFwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlcikgcmV0dXJuO1xuICAgIHBhcnRpYWxDYXJkcy5wcm90b3R5cGUuX2RlZmF1bHRWaWV3RmlsdGVyID0gKGhhc3MsIGVudGl0eUlkKSA9PiB7XG4gICAgICBpZiAoaGFzcy5zdGF0ZXNbZW50aXR5SWRdLmF0dHJpYnV0ZXMuaGlkZGVuKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBleGNsdWRlcyA9IHt9O1xuICAgICAgT2JqZWN0LnZhbHVlcyhoYXNzLnN0YXRlcykuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcyAmJiBlbnRpdHkuYXR0cmlidXRlcy5oaWRlX2luX2RlZmF1bHRfdmlldykge1xuICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVFbnRpdHlJZCA9IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgICAgICAgaWYgKGV4Y2x1ZGVzW2V4Y2x1ZGVFbnRpdHlJZF0pIHJldHVybjtcbiAgICAgICAgICBleGNsdWRlc1tleGNsdWRlRW50aXR5SWRdID0gZW50aXR5O1xuICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy52aWV3KSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3RW50aXRpZXMgPSBnZXRWaWV3RW50aXRpZXMoaGFzcy5zdGF0ZXMsIGVudGl0eSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2aWV3RW50aXRpZXMpXG4gICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgaWQgPT4gdmlld0VudGl0aWVzW2lkXS5hdHRyaWJ1dGVzLmhpZGVfaW5fZGVmYXVsdF92aWV3ICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZXNbaWRdID0gdmlld0VudGl0aWVzW2lkXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiAhZXhjbHVkZXNbZW50aXR5SWRdO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICBpZiAoIWtsYXNzIHx8ICFrbGFzcy5wcm90b3R5cGUpIHJldHVybjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoa2xhc3MucHJvdG90eXBlLCAnbG9jYWxpemUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGN1c3RvbUxvY2FsaXplKHYpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZU9iaiAmJiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1c3RvbUxvY2FsaXplO1xuICAgICAgfSxcbiAgICAgIHNldCgpIHt9LFxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEFsbG93cyB0aGVtaW5nIFwicmVndWxhclwiIHRvcCBiYWRnZXMuXG4gIGluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSgpIHtcbiAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICBpZiAoIWhhU3RhdGVMYWJlbEJhZGdlIHx8ICFoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkKSByZXR1cm47XG4gICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAvLyBUT0RPOiBDYWxsIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdFxuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycyA9IHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzIHx8IFtdO1xuICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzLnB1c2godGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgICAgaWYgKHRoaXMuc3RhcnRJbnRlcnZhbCkge1xuICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKHN0YXRlT2JqKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGNvbnN0IHN0YXRlQmFkZ2UgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3N0YXRlLWJhZGdlJyk7XG4gICAgaWYgKCFzdGF0ZUJhZGdlIHx8ICFzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZSkgcmV0dXJuO1xuICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZTtcbiAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgIHN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZUljb25BcHBlYXJhbmNlID0gZnVuY3Rpb24gY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2Uoc3RhdGVPYmopIHtcbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiQuaWNvbi5zdHlsZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgZmlsdGVyOiAnJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlLmNhbGwodGhpcywgc3RhdGVPYmopO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgaW5zdGFsbEhhQXR0cmlidXRlcygpIHtcbiAgICBjb25zdCBoYUF0dHJpYnV0ZXMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWF0dHJpYnV0ZXMnKTtcbiAgICBpZiAoIWhhQXR0cmlidXRlcyB8fCAhaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5IHx8XG4gICAgICAgIXdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCkgcmV0dXJuO1xuICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5ID0gZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykuY29uY2F0KGV4dHJhRmlsdGVycyA/IGV4dHJhRmlsdGVycy5zcGxpdCgnLCcpIDogW10pO1xuICAgIH07XG4gIH0sXG5cbiAgaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjb25zdCBoYUZvcm1DdXN0b21pemUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWZvcm0tY3VzdG9taXplJyk7XG4gICAgaWYgKCFoYUZvcm1DdXN0b21pemUpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSA9IHRydWU7XG5cbiAgICBpZiAoIXdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCkgcmV0dXJuO1xuICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKSB7XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSA9XG4gICAgICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XVxuICAgICAgICAgICAgICB8fCB7IHR5cGU6IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgfTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdE9wZW5PYmplY3Qoa2V5LCBjb25maWcudHlwZSA9PT0gJ2pzb24nID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMpIHtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zID1cbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgICAgICAgbG9jYWxBdHRyaWJ1dGVzLCBnbG9iYWxBdHRyaWJ1dGVzLCBleGlzdGluZ0F0dHJpYnV0ZXMsIG5ld0F0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBjb25zdCBrbm93bktleXMgPVxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmYgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmYgJiYgKCFjb25mLmRvbWFpbnMgfHwgIXRoaXMuZW50aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25mLmRvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHRoaXMuZW50aXR5KSkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGxvY2FsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGdsb2JhbEF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhleGlzdGluZ0F0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhuZXdBdHRyaWJ1dGVzKSk7XG4gICAgICAgICAgcmV0dXJuIGtub3duS2V5cy5zb3J0KCkuY29uY2F0KCdPdGhlcicpO1xuICAgICAgICB9O1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsQ2xhc3NIb29rcygpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSA9IHRydWU7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxQYXJ0aWFsQ2FyZHMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlc0hvb2soKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZUJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUF0dHJpYnV0ZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NlbmUnKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NyaXB0Jyk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxDbGFzc0hvb2tzKCk7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIW1haW4uaGFzcyB8fCAhbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgLy8gQ29ubmVjdGlvbiB3YXNuJ3QgbWFkZSB5ZXQuIFRyeSBpbiAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbml0LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmN1c3RvbVVJLmluaXREb25lID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS51c2VDdXN0b21pemVyKCk7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb24tY2hhbmdlZCcsIHdpbmRvdy5zZXRUaW1lb3V0LmJpbmQobnVsbCwgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzLCAxMDApKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5sb2coYExvYWRlZCBDdXN0b21VSSAke1ZFUlNJT059YCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgaWYgKCF3aW5kb3cuQ1VTVE9NX1VJX0xJU1QpIHtcbiAgICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVCA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QucHVzaCh7XG4gICAgICBuYW1lOiAnQ3VzdG9tVUknLFxuICAgICAgdmVyc2lvbjogVkVSU0lPTixcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXktZ2l0L2hvbWUtYXNzaXN0YW50LWN1c3RvbS11aScsXG4gICAgfSk7XG4gIH0sXG5cbiAgcnVuSG9va3MoKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUoKTtcbiAgfSxcblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhLWRldmljZS1uYW1lJykgfHwgJyc7XG4gIH0sXG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScsIG5hbWUgfHwgJycpO1xuICB9LFxuXG4gIGNvbXB1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uQm9keSA9ICh0ZW1wbGF0ZS5pbmRleE9mKCdyZXR1cm4nKSA+PSAwKSA/IHRlbXBsYXRlIDogYHJldHVybiBcXGAke3RlbXBsYXRlfVxcYDtgO1xuICAgIHRyeSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ2hhc3MnLCAnZW50aXRpZXMnLCAnZW50aXR5JywgJ2F0dHJpYnV0ZXMnLCAnYXR0cmlidXRlJywgJ3N0YXRlJywgZnVuY3Rpb25Cb2R5KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIHJldHVybiBmdW5jKGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGlmICgoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB8fCBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfSBpbiB0ZW1wbGF0ZSAke2Z1bmN0aW9uQm9keX1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9LFxufTtcbndpbmRvdy5jdXN0b21VSS5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCAnMjAxODA3MTYnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==