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
/*! exports provided: DEFAULT_DOMAIN_ICON, DOMAINS_WITH_CARD, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
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
var DEFAULT_DOMAIN_ICON = 'mdi:bookmark';

/** Domains that have a state card. */
var DOMAINS_WITH_CARD = ['climate', 'cover', 'configurator', 'input_select', 'input_number', 'input_text', 'media_player', 'scene', 'script', 'timer', 'weblink'];

/** Domains that should have the history hidden in the more info dialog. */
var DOMAINS_MORE_INFO_NO_HISTORY = ['camera', 'configurator', 'history_graph', 'scene'];

/** States that we consider "off". */
var STATES_OFF = ['closed', 'off', 'unlocked'];

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
  if (!stateObj._domain) {
    stateObj._domain = Object(_compute_domain_js__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.entity_id);
  }

  return stateObj._domain;
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
          _domain: 'none',
          entity_id: null,
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
  hide_in_default_view: { type: 'boolean' }
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
    partialCards.mqls.forEach(mql => {
      mql.removeListener(partialCards.handleWindowChange);
    });
    partialCards.mqls = columns.map(width => {
      var mql = window.matchMedia(`(min-width: ${width}px)`);
      mql.addListener(partialCards.handleWindowChange);
      return mql;
    });
    partialCards.handleWindowChange();
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
            Object.assign(excludes, Object(_home_assistant_polymer_src_common_entity_get_view_entities_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hass.states, entity));
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
/* harmony default export */ __webpack_exports__["default"] = ('20180602');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc3MtYXR0cmlidXRlLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkiLCJTVEFURVNfT0ZGIiwiVU5JVF9DIiwiVU5JVF9GIiwiREVGQVVMVF9WSUVXX0VOVElUWV9JRCIsImFwcGx5VGhlbWVzT25FbGVtZW50IiwiZWxlbWVudCIsInRoZW1lcyIsImxvY2FsVGhlbWUiLCJ1cGRhdGVNZXRhIiwiX3RoZW1lcyIsInRoZW1lTmFtZSIsImRlZmF1bHRfdGhlbWUiLCJzdHlsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0aGVtZSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJlZml4ZWRLZXkiLCJ1cGRhdGVTdHlsZXMiLCJ3aW5kb3ciLCJTaGFkeUNTUyIsInN0eWxlU3VidHJlZSIsIm1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVtZUNvbG9yIiwiZHluYW1pY0NvbnRlbnRVcGRhdGVyIiwicm9vdCIsIm5ld0VsZW1lbnRUYWciLCJhdHRyaWJ1dGVzIiwicm9vdEVsIiwiY3VzdG9tRWwiLCJsYXN0Q2hpbGQiLCJ0YWdOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwiY2FuVG9nZ2xlRG9tYWluIiwiaGFzcyIsImRvbWFpbiIsInNlcnZpY2VzIiwiY29uZmlnIiwiY2FuVG9nZ2xlU3RhdGUiLCJzdGF0ZU9iaiIsImNvbXB1dGVTdGF0ZURvbWFpbiIsInN0YXRlIiwic3VwcG9ydGVkX2ZlYXR1cmVzIiwiY29tcHV0ZURvbWFpbiIsImVudGl0eUlkIiwic3Vic3RyIiwiaW5kZXhPZiIsIl9kb21haW4iLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiRE9NQUlOX0RFVklDRV9DTEFTUyIsImJpbmFyeV9zZW5zb3IiLCJjb3ZlciIsInNlbnNvciIsIlVOS05PV05fVFlQRSIsIkFERF9UWVBFIiwiVFlQRV9UT19UQUciLCJzdHJpbmciLCJqc29uIiwiaWNvbiIsImJvb2xlYW4iLCJhcnJheSIsIkxPR0lDX1NUQVRFX0FUVFJJQlVURVMiLCJlbnRpdHlfcGljdHVyZSIsInVuZGVmaW5lZCIsImZyaWVuZGx5X25hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJlbXVsYXRlZF9odWUiLCJkb21haW5zIiwiZW11bGF0ZWRfaHVlX25hbWUiLCJoYWFza2FfaGlkZGVuIiwiaGFhc2thX25hbWUiLCJob21lYnJpZGdlX2hpZGRlbiIsImhvbWVicmlkZ2VfbmFtZSIsImF0dHJpYnV0aW9uIiwiY3VzdG9tX3VpX21vcmVfaW5mbyIsImN1c3RvbV91aV9zdGF0ZV9jYXJkIiwiZGV2aWNlX2NsYXNzIiwib3B0aW9ucyIsImFzc3VtZWRfc3RhdGUiLCJpbml0aWFsX3N0YXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ0b1N0cmluZyIsImxpdGVyYWxWYWx1ZSIsIkVycm9yIiwiaHRtbFZhbHVlIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsImh0bWwiLCJzdHJpbmdzIiwidGVtcGxhdGUiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJ2IiwiaWR4IiwiaHRtbExpdGVyYWwiLCJDdWlCYXNlRWxlbWVudCIsIlBvbHltZXIiLCJFbGVtZW50IiwicHJvcGVydGllcyIsImluRGlhbG9nIiwiQm9vbGVhbiIsImNvbnRyb2xFbGVtZW50IiwiU3RyaW5nIiwiZXh0cmEiLCJBcnJheSIsImNvbXB1dGVkIiwiY29tcHV0ZUV4dHJhIiwiZXh0cmFzIiwiZXh0cmFfZGF0YV90ZW1wbGF0ZSIsImlzQXJyYXkiLCJtYXAiLCJjdXN0b21VSSIsImNvbXB1dGVUZW1wbGF0ZSIsInN0YXRlcyIsImZpbHRlciIsInNob3dMYXN0Q2hhbmdlZCIsImxlbmd0aCIsInNob3dfbGFzdF9jaGFuZ2VkIiwiaGFzRXh0cmEiLCJEeW5hbWljRWxlbWVudCIsImVsZW1lbnROYW1lIiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXJGdW5jIiwidG9VcHBlckNhc2UiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkR5bmFtaWNXaXRoRXh0cmEiLCJnZXQiLCJleHRyYU9iaiIsIl9hdHRhY2hlZCIsImV4dHJhT2JqVmlzaWJsZSIsImNvbm5lY3RlZENhbGxiYWNrIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJfaXNBdHRhY2hlZCIsImF0dGFjaGVkIiwiZXh0cmFfYmFkZ2UiLCJleHRyYUJhZGdlcyIsImV4dHJhQmFkZ2UiLCJtYXliZUNoYW5nZU9iamVjdCIsImF0dHJpYnV0ZSIsInVuaXQiLCJibGFja2xpc3QiLCJibGFja2xpc3Rfc3RhdGVzIiwic29tZSIsIlJlZ0V4cCIsInRlc3QiLCJfZW50aXR5RGlzcGxheSIsImNvbXB1dGVFeHRyYVZpc2libGUiLCJleHRyYUNsYXNzIiwiX3Nob3dDb250cm9sIiwiaGlkZV9jb250cm9sIiwiY29tcHV0ZVN0YXRlRGlzcGxheSIsImhhTG9jYWxpemUiLCJsb2NhbGl6ZSIsImlzQ29uZmlybUNvbnRyb2xzIiwiY29uZmlybV9jb250cm9scyIsImNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrIiwiY2xpY2tIYW5kbGVyIiwiZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImxvY2siLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInN0b3BQcm9wYWdhdGlvbiIsImFwcGx5VGhlbWVzIiwiZXh0cmFEb21DaGFuZ2VkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJIYUNvbmZpZ0N1c3RvbVVpIiwiRXZlbnRzTWl4aW4iLCJpc1dpZGUiLCJuYW1lIiwib2JzZXJ2ZXIiLCJyZWFkeSIsImdldE5hbWUiLCJuYW1lQ2hhbmdlZCIsInNldE5hbWUiLCJfYmFja0hhbmRsZXIiLCJoaXN0b3J5IiwiYmFjayIsImZpcmUiLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwibWluIiwiTnVtYmVyIiwibWF4IiwicGluIiwiaXNPbiIsIm5vdGlmeSIsIl90aGVtZWRNaW4iLCJfZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiYXR0ciIsImRlZiIsImNvbXB1dGVDbGFzcyIsInRoZW1lZE1pbiIsInZhbHVlQ2hhbmdlZCIsImV2IiwidGFyZ2V0IiwiU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMiLCJET01BSU5fVE9fU0xJREVSX1NVUFBPUlQiLCJsaWdodCIsImNsaW1hdGUiLCJUWVBFX1RPX0NPTlRST0wiLCJ0b2dnbGUiLCJkaXNwbGF5IiwiU3RhdGVDYXJkQ3VzdG9tVWkiLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9jb250YWluZXIiLCJzZXRQcm9wZXJ0eSIsImlucHV0Q2hhbmdlZCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWRnZU1vZGUiLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiYmFkZ2VzX2xpc3QiLCJwdXNoIiwicGFyYW1zIiwid2lkdGgiLCJmb250U2l6ZSIsImNsZWFuQmFkZ2VTdHlsZSIsIm1vZGlmaWVkT2JqIiwidGhlbWVUYXJnZXQiLCJtYXliZUhpZGVFbnRpdHkiLCJzbGlkZXJFbGlnaWJsZV8iLCJvYmoiLCJzdGF0ZV9jYXJkX21vZGUiLCJyZWd1bGFyTW9kZV8iLCJvcmlnaW5hbFN0YXRlQ2FyZFR5cGUiLCJjdXN0b21TdGF0ZUNhcmRUeXBlIiwic2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSIsInN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeSIsInNlcnZpY2VNaW4iLCJzZXJ2aWNlTWF4IiwidmFsdWVOYW1lIiwic2V0VmFsdWVOYW1lIiwibmFtZU9uIiwibWluX3RlbXAiLCJtYXhfdGVtcCIsImNvbnRyb2xfZWxlbWVudCIsIlN0YXRlQ2FyZFdpdGhTbGlkZXIiLCJzbGlkZXJWYWx1ZSIsIm1vZGUiLCJzdHJldGNoU2xpZGVyIiwiYnJlYWtTbGlkZXIiLCJoaWRlU2xpZGVyIiwibGluZVRvb0xvbmciLCJtaW5MaW5lQnJlYWsiLCJtYXhMaW5lQnJlYWsiLCJzaG93U2xpZGVyIiwiX29uSXJvblJlc2l6ZSIsImJpbmQiLCJfaXNDb25uZWN0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3dhaXRGb3JMYXlvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3NldE1vZGUiLCJfZnJhbWVJZCIsInJlYWR5VG9Db21wdXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicHJldkJyZWFrU2xpZGVyIiwicHJldkhpZGVTbGlkZXIiLCIkIiwiY29udGFpbmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0YXRlSGVpZ2h0IiwiX2NvbXB1dGVXcmFwQ2xhc3MiLCJfc2hvd1NsaWRlciIsInNsaWRlckNoYW5nZWQiLCJwYXJzZUludCIsInBhcmFtIiwiaXNOYU4iLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwiY2FsbFNlcnZpY2UiLCJzdGF0ZU9iakNoYW5nZWQiLCJzdHJldGNoX3NsaWRlciIsIlN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIiLCJzdXBlckNsYXNzIiwiZGV0YWlsIiwiZXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY29tcG9zZWQiLCJub2RlIiwiZGlzcGF0Y2hFdmVudCIsIlNVUFBPUlRFRF9TTElERVJfTU9ERVMiLCJjdXN0b21VaUF0dHJpYnV0ZXMiLCJkZXZpY2UiLCJ0ZW1wbGF0ZXMiLCJjb25jYXQiLCJzbGlkZXJfdGhlbWUiLCJoaWRlX2luX2RlZmF1bHRfdmlldyIsImhhc3NBdHRyaWJ1dGVzVXRpbCIsImRvbUhvc3QiLCJnZXRSb290Tm9kZSIsIkRvY3VtZW50RnJhZ21lbnQiLCJob3N0IiwibGlnaHRPclNoYWRvdyIsInNlbGVjdG9yIiwic2hhZG93Um9vdCIsImdldEVsZW1lbnRIaWVyYXJjaHkiLCJoaWVyYXJjaHkiLCJzaGlmdCIsImdldENvbnRleHQiLCJfY29udGV4dCIsImdyb3VwRW50aXR5IiwicmV2ZXJzZSIsImZpbmRNYXRjaCIsImZpbmQiLCJvcHRpb24iLCJtYXRjaCIsIm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2UiLCJhcHBseUF0dHJpYnV0ZXMiLCJtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAiLCJjb250ZXh0IiwiYyIsIl9zZXRLZWVwIiwiX2N1aV9rZWVwIiwibWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJoYXNHbG9iYWwiLCJoYXNDaGFuZ2VzIiwidW50ZW1wbGF0ZWRfYXR0cmlidXRlcyIsInVudGVtcGxhdGVkX3N0YXRlIiwiX3N0YXRlRGlzcGxheSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInVudGVtcGxhdGVkX3N0YXRlRGlzcGxheSIsIm1heWJlQXBwbHlUZW1wbGF0ZXMiLCJuZXdSZXN1bHQiLCJjaGVja0F0dHJpYnV0ZXMiLCJsYXN0X2NoYW5nZWQiLCJhbGxvd0hpZGRlbiIsImZpeEdyb3VwVGl0bGVzIiwiaG9tZUFzc2lzdGFudE1haW4iLCJoYUNhcmRzIiwibWFpbiIsImNhcmRzIiwiY2FyZCIsIm5hbWVFbGVtIiwidGV4dENvbnRlbnQiLCJjb250cm9sQ29sdW1ucyIsImNvbHVtbnMiLCJwYXJ0aWFsQ2FyZHMiLCJtcWxzIiwibXFsIiwicmVtb3ZlTGlzdGVuZXIiLCJoYW5kbGVXaW5kb3dDaGFuZ2UiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ1c2VDdXN0b21pemVyIiwiY3VzdG9taXplciIsImhpZGVfYXR0cmlidXRlcyIsInVwZGF0ZUNvbmZpZ1BhbmVsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJoYVBhbmVsQ29uZmlnIiwiaGFDb25maWdOYXZpZ2F0aW9uIiwiY3VpUGF0Y2giLCJfb3JpZ2luYWxDb21wdXRlTG9hZGVkIiwiX2NvbXB1dGVMb2FkZWQiLCJfb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiIsIl9jb21wdXRlQ2FwdGlvbiIsIl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiIsIl9jb21wdXRlRGVzY3JpcHRpb24iLCJwYWdlIiwicGFnZXMiLCJjb25mIiwiY2FwdGlvbiIsImxvYWRlZCIsImdldEhhQ29uZmlnQ3VzdG9tVWkiLCJoYUNvbmZpZ0N1c3RvbVVpIiwiaXJvblBhZ2VzIiwibGFzdEVsZW1lbnRDaGlsZCIsInNlbGVjdCIsInZpc2libGUiLCJpbnN0YWxsU3RhdGVzSG9vayIsImhvbWVBc3Npc3RhbnQiLCJfdXBkYXRlSGFzcyIsIm9yaWdpbmFsVXBkYXRlIiwidXBkYXRlIiwibmV3RW50aXR5IiwiX3RoZW1lV2FpdGVycyIsIndhaXRlciIsInN0YXRlQ2hhbmdlZCIsImluc3RhbGxQYXJ0aWFsQ2FyZHMiLCJfZGVmYXVsdFZpZXdGaWx0ZXIiLCJleGNsdWRlcyIsImV4Y2x1ZGVFbnRpdHlJZCIsImluc3RhbGxBY3Rpb25OYW1lIiwia2xhc3MiLCJkZWZpbmVQcm9wZXJ0eSIsImN1c3RvbUxvY2FsaXplIiwiYWN0aW9uX25hbWUiLCJfX2RhdGEiLCJzZXQiLCJpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UiLCJoYVN0YXRlTGFiZWxCYWRnZSIsInN0YXJ0SW50ZXJ2YWwiLCJpbnN0YWxsU3RhdGVCYWRnZSIsInN0YXRlQmFkZ2UiLCJ1cGRhdGVJY29uQXBwZWFyYW5jZSIsIm9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZSIsImljb25fY29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb2xvciIsImluc3RhbGxIYUF0dHJpYnV0ZXMiLCJoYUF0dHJpYnV0ZXMiLCJjb21wdXRlRmlsdGVyc0FycmF5IiwiY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheSIsImV4dHJhRmlsdGVycyIsInNwbGl0IiwiaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSIsImhhRm9ybUN1c3RvbWl6ZSIsImhhRm9ybUN1c3RvbWl6ZUluaXREb25lIiwiX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUiLCJjdXN0b21Db21wdXRlU2luZ2xlQXR0cmlidXRlIiwic2Vjb25kYXJ5IiwiX2luaXRPcGVuT2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwiY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMiLCJsb2NhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGVzIiwiZXhpc3RpbmdBdHRyaWJ1dGVzIiwia25vd25LZXlzIiwiZmlsdGVyRnJvbUF0dHJpYnV0ZXMiLCJzb3J0IiwiaW5zdGFsbENsYXNzSG9va3MiLCJjbGFzc0luaXREb25lIiwiaW5pdCIsImluaXREb25lIiwicnVuSG9va3MiLCJsb2ciLCJDVVNUT01fVUlfTElTVCIsInZlcnNpb24iLCJ1cmwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImZ1bmN0aW9uQm9keSIsImZ1bmMiLCJGdW5jdGlvbiIsIlN5bnRheEVycm9yIiwiUmVmZXJlbmNlRXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxJQUFNQSxzQkFBc0IsY0FBNUI7O0FBRVA7QUFDTyxJQUFNQyxvQkFBb0IsQ0FDL0IsU0FEK0IsRUFFL0IsT0FGK0IsRUFHL0IsY0FIK0IsRUFJL0IsY0FKK0IsRUFLL0IsY0FMK0IsRUFNL0IsWUFOK0IsRUFPL0IsY0FQK0IsRUFRL0IsT0FSK0IsRUFTL0IsUUFUK0IsRUFVL0IsT0FWK0IsRUFXL0IsU0FYK0IsQ0FBMUI7O0FBY1A7QUFDTyxJQUFNQywrQkFBK0IsQ0FDMUMsUUFEMEMsRUFFMUMsY0FGMEMsRUFHMUMsZUFIMEMsRUFJMUMsT0FKMEMsQ0FBckM7O0FBT1A7QUFDTyxJQUFNQyxhQUFhLENBQ3hCLFFBRHdCLEVBRXhCLEtBRndCLEVBR3hCLFVBSHdCLENBQW5COztBQU1QO0FBQ08sSUFBTUMsU0FBUyxJQUFmO0FBQ0EsSUFBTUMsU0FBUyxJQUFmOztBQUVQO0FBQ08sSUFBTUMseUJBQXlCLG9CQUEvQixDOzs7Ozs7Ozs7Ozs7O0FDNUNQO0FBQUE7Ozs7Ozs7O0FBUWUsU0FBU0Msb0JBQVQsQ0FBOEJDLE9BQTlCLEVBQXVDQyxNQUF2QyxFQUErQ0MsVUFBL0MsRUFBK0U7QUFBQSxNQUFwQkMsVUFBb0IsdUVBQVAsS0FBTzs7QUFDNUYsTUFBSSxDQUFDSCxRQUFRSSxPQUFiLEVBQXNCO0FBQ3BCSixZQUFRSSxPQUFSLEdBQWtCLEVBQWxCO0FBQ0Q7QUFDRCxNQUFJQyxZQUFZSixPQUFPSyxhQUF2QjtBQUNBLE1BQUlKLGVBQWUsU0FBZixJQUE2QkEsY0FBY0QsT0FBT0EsTUFBUCxDQUFjQyxVQUFkLENBQS9DLEVBQTJFO0FBQ3pFRyxnQkFBWUgsVUFBWjtBQUNEO0FBQ0QsTUFBTUssU0FBU0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JULFFBQVFJLE9BQTFCLENBQWY7QUFDQSxNQUFJQyxjQUFjLFNBQWxCLEVBQTZCO0FBQzNCLFFBQUlLLFFBQVFULE9BQU9BLE1BQVAsQ0FBY0ksU0FBZCxDQUFaO0FBQ0FHLFdBQU9HLElBQVAsQ0FBWUQsS0FBWixFQUFtQkUsT0FBbkIsQ0FBNEJDLEdBQUQsSUFBUztBQUNsQyxVQUFJQyxjQUFjLE9BQU9ELEdBQXpCO0FBQ0FiLGNBQVFJLE9BQVIsQ0FBZ0JVLFdBQWhCLElBQStCLEVBQS9CO0FBQ0FQLGFBQU9PLFdBQVAsSUFBc0JKLE1BQU1HLEdBQU4sQ0FBdEI7QUFDRCxLQUpEO0FBS0Q7QUFDRCxNQUFJYixRQUFRZSxZQUFaLEVBQTBCO0FBQ3hCZixZQUFRZSxZQUFSLENBQXFCUixNQUFyQjtBQUNELEdBRkQsTUFFTyxJQUFJUyxPQUFPQyxRQUFYLEVBQXFCO0FBQzFCO0FBQ0FELFdBQU9DLFFBQVAsQ0FBZ0JDLFlBQWhCLEVBQTZCLDJCQUE0QmxCLE9BQXpELEVBQW1FTyxNQUFuRTtBQUNEOztBQUVELE1BQUksQ0FBQ0osVUFBTCxFQUFpQjs7QUFFakIsTUFBTWdCLE9BQU9DLFNBQVNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQWI7QUFDQSxNQUFJRixJQUFKLEVBQVU7QUFDUixRQUFJLENBQUNBLEtBQUtHLFlBQUwsQ0FBa0IsaUJBQWxCLENBQUwsRUFBMkM7QUFDekNILFdBQUtJLFlBQUwsQ0FBa0IsaUJBQWxCLEVBQXFDSixLQUFLSyxZQUFMLENBQWtCLFNBQWxCLENBQXJDO0FBQ0Q7QUFDRCxRQUFNQyxhQUFhbEIsT0FBTyxpQkFBUCxLQUE2QlksS0FBS0ssWUFBTCxDQUFrQixpQkFBbEIsQ0FBaEQ7QUFDQUwsU0FBS0ksWUFBTCxDQUFrQixTQUFsQixFQUE2QkUsVUFBN0I7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7Ozs7QUMxQ0Q7QUFBQTs7OztBQUllLFNBQVNDLHFCQUFULENBQStCQyxJQUEvQixFQUFxQ0MsYUFBckMsRUFBb0RDLFVBQXBELEVBQWdFO0FBQzdFLE1BQU1DLFNBQVNILElBQWY7QUFDQSxNQUFJSSxpQkFBSjs7QUFFQSxNQUFJRCxPQUFPRSxTQUFQLElBQW9CRixPQUFPRSxTQUFQLENBQWlCQyxPQUFqQixLQUE2QkwsYUFBckQsRUFBb0U7QUFDbEVHLGVBQVdELE9BQU9FLFNBQWxCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSUYsT0FBT0UsU0FBWCxFQUFzQjtBQUNwQkYsYUFBT0ksV0FBUCxDQUFtQkosT0FBT0UsU0FBMUI7QUFDRDtBQUNEO0FBQ0E7QUFDQUQsZUFBV1gsU0FBU2UsYUFBVCxDQUF1QlAsY0FBY1EsV0FBZCxFQUF2QixDQUFYO0FBQ0Q7O0FBRUQsTUFBSUwsU0FBU00sYUFBYixFQUE0QjtBQUMxQk4sYUFBU00sYUFBVCxDQUF1QlIsVUFBdkI7QUFDRCxHQUZELE1BRU87QUFDTDtBQUNBO0FBQ0FyQixXQUFPRyxJQUFQLENBQVlrQixVQUFaLEVBQXdCakIsT0FBeEIsQ0FBaUNDLEdBQUQsSUFBUztBQUN2Q2tCLGVBQVNsQixHQUFULElBQWdCZ0IsV0FBV2hCLEdBQVgsQ0FBaEI7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsTUFBSWtCLFNBQVNPLFVBQVQsS0FBd0IsSUFBNUIsRUFBa0M7QUFDaENSLFdBQU9TLFdBQVAsQ0FBbUJSLFFBQW5CO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7OztBQ2hDYyxTQUFTUyxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsTUFBL0IsRUFBdUM7QUFDcEQsTUFBTUMsV0FBV0YsS0FBS0csTUFBTCxDQUFZRCxRQUFaLENBQXFCRCxNQUFyQixDQUFqQjtBQUNBLE1BQUksQ0FBQ0MsUUFBTCxFQUFlO0FBQUUsV0FBTyxLQUFQO0FBQWU7O0FBRWhDLE1BQUlELFdBQVcsTUFBZixFQUF1QjtBQUNyQixXQUFPLFVBQVVDLFFBQWpCO0FBQ0QsR0FGRCxNQUVPLElBQUlELFdBQVcsT0FBZixFQUF3QjtBQUM3QixXQUFPLGdCQUFnQkMsUUFBdkI7QUFDRDtBQUNELFNBQU8sYUFBYUEsUUFBcEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7QUFDQTs7QUFFZSxTQUFTRSxjQUFULENBQXdCSixJQUF4QixFQUE4QkssUUFBOUIsRUFBd0M7QUFDckQsTUFBTUosU0FBUyx3RUFBQUssQ0FBbUJELFFBQW5CLENBQWY7QUFDQSxNQUFJSixXQUFXLE9BQWYsRUFBd0I7QUFDdEIsV0FBT0ksU0FBU0UsS0FBVCxLQUFtQixJQUFuQixJQUEyQkYsU0FBU0UsS0FBVCxLQUFtQixLQUFyRDtBQUNEO0FBQ0QsTUFBSU4sV0FBVyxTQUFmLEVBQTBCO0FBQ3hCLFdBQU8sQ0FBQyxFQUFFLENBQUNJLFNBQVNqQixVQUFULElBQXVCLEVBQXhCLEVBQTRCb0Isa0JBQTVCLEdBQWlELElBQW5ELENBQVI7QUFDRDs7QUFFRCxTQUFPLHFFQUFBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLE1BQXRCLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ2JjLFNBQVNRLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDO0FBQzlDLFNBQU9BLFNBQVNDLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUJELFNBQVNFLE9BQVQsQ0FBaUIsR0FBakIsQ0FBbkIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZEOztBQUVlLFNBQVNOLGtCQUFULENBQTRCRCxRQUE1QixFQUFzQztBQUNuRCxNQUFJLENBQUNBLFNBQVNRLE9BQWQsRUFBdUI7QUFDckJSLGFBQVNRLE9BQVQsR0FBbUIsa0VBQUFKLENBQWNKLFNBQVNTLFNBQXZCLENBQW5CO0FBQ0Q7O0FBRUQsU0FBT1QsU0FBU1EsT0FBaEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ1JjLFNBQVNFLGdCQUFULENBQTBCQyxRQUExQixFQUFvQ0MsS0FBcEMsRUFBMkM7QUFDeEQsTUFBTUMsU0FBUyxFQUFmOztBQUVBRCxRQUFNN0IsVUFBTixDQUFpQjBCLFNBQWpCLENBQTJCM0MsT0FBM0IsQ0FBb0N1QyxRQUFELElBQWM7QUFDL0MsUUFBTVMsU0FBU0gsU0FBU04sUUFBVCxDQUFmOztBQUVBLFFBQUlTLE1BQUosRUFBWTtBQUNWRCxhQUFPQyxPQUFPTCxTQUFkLElBQTJCSyxNQUEzQjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxTQUFPRCxNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLFNBQVNFLGVBQVQsQ0FBeUJKLFFBQXpCLEVBQW1DSyxJQUFuQyxFQUF5QztBQUN0RCxNQUFNQyxlQUFlLEVBQXJCOztBQUVBRCxPQUFLakMsVUFBTCxDQUFnQjBCLFNBQWhCLENBQTBCM0MsT0FBMUIsQ0FBbUN1QyxRQUFELElBQWM7QUFDOUMsUUFBTVMsU0FBU0gsU0FBU04sUUFBVCxDQUFmOztBQUVBLFFBQUlTLFVBQVUsQ0FBQ0EsT0FBTy9CLFVBQVAsQ0FBa0JtQyxNQUFqQyxFQUF5QztBQUN2Q0QsbUJBQWFILE9BQU9MLFNBQXBCLElBQWlDSyxNQUFqQzs7QUFFQSxVQUFJLGtFQUFBVixDQUFjVSxPQUFPTCxTQUFyQixNQUFvQyxPQUF4QyxFQUFpRDtBQUMvQyxZQUFNVSxnQkFBZ0Isc0VBQUFULENBQWlCQyxRQUFqQixFQUEyQkcsTUFBM0IsQ0FBdEI7O0FBRUFwRCxlQUFPRyxJQUFQLENBQVlzRCxhQUFaLEVBQTJCckQsT0FBM0IsQ0FBb0NzRCxVQUFELElBQWdCO0FBQ2pELGNBQU1DLFdBQVdGLGNBQWNDLFVBQWQsQ0FBakI7O0FBRUEsY0FBSSxDQUFDQyxTQUFTdEMsVUFBVCxDQUFvQm1DLE1BQXpCLEVBQWlDO0FBQy9CRCx5QkFBYUcsVUFBYixJQUEyQkMsUUFBM0I7QUFDRDtBQUNGLFNBTkQ7QUFPRDtBQUNGO0FBQ0YsR0FsQkQ7O0FBb0JBLFNBQU9KLFlBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRDtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ssYUFBVCxDQUF1QjNCLElBQXZCLEVBQTZCSyxRQUE3QixFQUF1QztBQUNwRCxNQUFJQSxTQUFTRSxLQUFULEtBQW1CLGFBQXZCLEVBQXNDO0FBQ3BDLFdBQU8sU0FBUDtBQUNEOztBQUVELE1BQU1OLFNBQVMsd0VBQUFLLENBQW1CRCxRQUFuQixDQUFmOztBQUVBLE1BQUksMkRBQUFyRCxDQUFrQjRFLFFBQWxCLENBQTJCM0IsTUFBM0IsQ0FBSixFQUF3QztBQUN0QyxXQUFPQSxNQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksb0VBQUFHLENBQWVKLElBQWYsRUFBcUJLLFFBQXJCLEtBQ0FBLFNBQVNqQixVQUFULENBQW9CeUMsT0FBcEIsS0FBZ0MsUUFEcEMsRUFDOEM7QUFDbkQsV0FBTyxRQUFQO0FBQ0Q7QUFDRCxTQUFPLFNBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQSxJQUFNQyxvQkFBb0IsRUFBMUI7O0FBRUFBLGtCQUFrQkMsbUJBQWxCLEdBQXdDO0FBQ3RDQyxpQkFBZSxDQUNiLFNBRGEsRUFFYixNQUZhLEVBR2IsY0FIYSxFQUliLE1BSmEsRUFLYixhQUxhLEVBTWIsS0FOYSxFQU9iLE1BUGEsRUFRYixPQVJhLEVBU2IsTUFUYSxFQVViLFVBVmEsRUFXYixRQVhhLEVBWWIsUUFaYSxFQWFiLFdBYmEsRUFjYixTQWRhLEVBZWIsTUFmYSxFQWdCYixPQWhCYSxFQWlCYixVQWpCYSxFQWtCYixTQWxCYSxFQW1CYixRQW5CYSxFQW9CYixPQXBCYSxFQXFCYixPQXJCYSxFQXNCYixXQXRCYSxFQXVCYixRQXZCYSxDQUR1QjtBQTBCdENDLFNBQU8sQ0FBQyxRQUFELENBMUIrQjtBQTJCdENDLFVBQVEsQ0FDTixTQURNLEVBRU4sVUFGTSxFQUdOLGFBSE0sRUFJTixhQUpNO0FBM0I4QixDQUF4Qzs7QUFtQ0FKLGtCQUFrQkssWUFBbEIsR0FBaUMsTUFBakM7QUFDQUwsa0JBQWtCTSxRQUFsQixHQUE2QixXQUE3Qjs7QUFFQU4sa0JBQWtCTyxXQUFsQixHQUFnQztBQUM5QkMsVUFBUSxxQkFEc0I7QUFFOUJDLFFBQU0scUJBRndCO0FBRzlCQyxRQUFNLG1CQUh3QjtBQUk5QkMsV0FBUyxzQkFKcUI7QUFLOUJDLFNBQU8sb0JBTHVCO0FBTTlCLGVBQWE7QUFOaUIsQ0FBaEM7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVosa0JBQWtCYSxzQkFBbEIsR0FDRWIsa0JBQWtCYSxzQkFBbEIsSUFBNEM7QUFDMUNDLGtCQUFnQkMsU0FEMEI7QUFFMUNDLGlCQUFlLEVBQUVDLE1BQU0sUUFBUixFQUFrQkMsYUFBYSxNQUEvQixFQUYyQjtBQUcxQ1IsUUFBTSxFQUFFTyxNQUFNLE1BQVIsRUFIb0M7QUFJMUNFLGdCQUFjO0FBQ1pGLFVBQU0sU0FETTtBQUVaRyxhQUFTLENBQUMsY0FBRDtBQUZHLEdBSjRCO0FBUTFDQyxxQkFBbUI7QUFDakJKLFVBQU0sUUFEVztBQUVqQkcsYUFBUyxDQUFDLGNBQUQ7QUFGUSxHQVJ1QjtBQVkxQ0UsaUJBQWVQLFNBWjJCO0FBYTFDUSxlQUFhUixTQWI2QjtBQWMxQ1MscUJBQW1CLEVBQUVQLE1BQU0sU0FBUixFQWR1QjtBQWUxQ1EsbUJBQWlCLEVBQUVSLE1BQU0sUUFBUixFQWZ5QjtBQWdCMUN2QyxzQkFBb0JxQyxTQWhCc0I7QUFpQjFDVyxlQUFhWCxTQWpCNkI7QUFrQjFDWSx1QkFBcUIsRUFBRVYsTUFBTSxRQUFSLEVBbEJxQjtBQW1CMUNXLHdCQUFzQixFQUFFWCxNQUFNLFFBQVIsRUFuQm9CO0FBb0IxQ1ksZ0JBQWM7QUFDWlosVUFBTSxPQURNO0FBRVphLGFBQVM5QixrQkFBa0JDLG1CQUZmO0FBR1ppQixpQkFBYSxjQUhEO0FBSVpFLGFBQVMsQ0FBQyxlQUFELEVBQWtCLE9BQWxCLEVBQTJCLFFBQTNCO0FBSkcsR0FwQjRCO0FBMEIxQzNCLFVBQVEsRUFBRXdCLE1BQU0sU0FBUixFQUFtQkMsYUFBYSxjQUFoQyxFQTFCa0M7QUEyQjFDYSxpQkFBZTtBQUNiZCxVQUFNLFNBRE87QUFFYkcsYUFBUyxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLE9BQXBCLEVBQTZCLFNBQTdCLEVBQXdDLEtBQXhDLEVBQStDLE9BQS9DO0FBRkksR0EzQjJCO0FBK0IxQ1ksaUJBQWU7QUFDYmYsVUFBTSxRQURPO0FBRWJHLGFBQVMsQ0FBQyxZQUFEO0FBRkksR0EvQjJCO0FBbUMxQ2EsdUJBQXFCLEVBQUVoQixNQUFNLFFBQVI7QUFuQ3FCLENBRDlDOztBQXVDQSwrREFBZWpCLGlCQUFmLEU7Ozs7Ozs7Ozs7O0FDNUZBOzs7Ozs7Ozs7O0FBVUF2RCxPQUFPeUYseUJBQVAsR0FBbUMsVUFBU0MsSUFBVCxFQUFlO0FBQUUsU0FBT0EsSUFBUDtBQUFjLENBQWxFLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7O0FBRUE7Ozs7O0FBS0EsTUFBTUMsYUFBTixDQUFvQjtBQUNsQkMsY0FBWTdCLE1BQVosRUFBb0I7QUFDbEI7QUFDQSxTQUFLOEIsS0FBTCxHQUFhOUIsT0FBTytCLFFBQVAsRUFBYjtBQUNEO0FBQ0Q7OztBQUdBQSxhQUFXO0FBQ1QsV0FBTyxLQUFLRCxLQUFaO0FBQ0Q7QUFWaUI7O0FBYXBCOzs7O0FBSUEsU0FBU0UsWUFBVCxDQUFzQkYsS0FBdEIsRUFBNkI7QUFDM0IsTUFBSUEsaUJBQWlCRixhQUFyQixFQUFvQztBQUNsQyxXQUFPLDhCQUE4QkUsS0FBRCxDQUFRQTtBQUE1QztBQUNELEdBRkQsTUFFTztBQUNMLFVBQU0sSUFBSUcsS0FBSixDQUNELCtEQUE4REgsS0FBTSxFQURuRSxDQUFOO0FBR0Q7QUFDRjs7QUFFRDs7OztBQUlBLFNBQVNJLFNBQVQsQ0FBbUJKLEtBQW5CLEVBQTBCO0FBQ3hCLE1BQUlBLGlCQUFpQkssbUJBQXJCLEVBQTBDO0FBQ3hDLFdBQU8scUNBQXFDTCxLQUFELENBQVFNO0FBQW5EO0FBQ0QsR0FGRCxNQUVPLElBQUlOLGlCQUFpQkYsYUFBckIsRUFBb0M7QUFDekMsV0FBT0ksYUFBYUYsS0FBYixDQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsVUFBTSxJQUFJRyxLQUFKLENBQ0QseURBQXdESCxLQUFNLEVBRDdELENBQU47QUFFRDtBQUNGOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NPLElBQU1PLE9BQU8sU0FBU0EsSUFBVCxDQUFjQyxPQUFkLEVBQWtDO0FBQ3BELE1BQU1DLFdBQVcsbUNBQW9DbEcsU0FBU2UsYUFBVCxDQUF1QixVQUF2QixDQUFyRDs7QUFEb0Qsb0NBQVJvRixNQUFRO0FBQVJBLFVBQVE7QUFBQTs7QUFFcERELFdBQVNILFNBQVQsR0FBcUJJLE9BQU9DLE1BQVAsQ0FBYyxDQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBU0MsR0FBVCxLQUMvQkYsTUFBTVIsVUFBVVMsQ0FBVixDQUFOLEdBQXFCTCxRQUFRTSxNQUFNLENBQWQsQ0FESixFQUNzQk4sUUFBUSxDQUFSLENBRHRCLENBQXJCO0FBRUEsU0FBT0MsUUFBUDtBQUNELENBTE07O0FBT1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCTyxJQUFNTSxjQUFjLFNBQWRBLFdBQWMsQ0FBU1AsT0FBVCxFQUE2QjtBQUFBLHFDQUFSRSxNQUFRO0FBQVJBLFVBQVE7QUFBQTs7QUFDdEQsU0FBTyxJQUFJWixhQUFKLENBQWtCWSxPQUFPQyxNQUFQLENBQWMsQ0FBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVNDLEdBQVQsS0FDbkNGLE1BQU1WLGFBQWFXLENBQWIsQ0FBTixHQUF3QkwsUUFBUU0sTUFBTSxDQUFkLENBREgsRUFDcUJOLFFBQVEsQ0FBUixDQURyQixDQUFsQixDQUFQO0FBRUQsQ0FITSxDOzs7Ozs7Ozs7Ozs7OztBQzNIUDs7QUFFQTs7O0FBR0EsTUFBTVEsY0FBTixTQUE2QkMsUUFBUUMsT0FBckMsQ0FBNkM7QUFDM0MsYUFBV0MsVUFBWCxHQUF3QjtBQUN0QixXQUFPO0FBQ0x2RixZQUFNakMsTUFERDtBQUVMeUgsZ0JBQVU7QUFDUnpDLGNBQU0wQyxPQURFO0FBRVJyQixlQUFPO0FBRkMsT0FGTDtBQU1ML0QsZ0JBQVV0QyxNQU5MO0FBT0wySCxzQkFBZ0JDLE1BUFg7QUFRTEMsYUFBTztBQUNMN0MsY0FBTThDLEtBREQ7QUFFTEMsa0JBQVU7QUFGTDtBQVJGLEtBQVA7QUFhRDs7QUFFREMsZUFBYS9GLElBQWIsRUFBbUJLLFFBQW5CLEVBQTZCO0FBQzNCLFFBQUkyRixTQUFTM0YsU0FBU2pCLFVBQVQsQ0FBb0I2RyxtQkFBakM7QUFDQSxRQUFJRCxNQUFKLEVBQVk7QUFDVixVQUFJLENBQUNILE1BQU1LLE9BQU4sQ0FBY0YsTUFBZCxDQUFMLEVBQTRCO0FBQzFCQSxpQkFBUyxDQUFDQSxNQUFELENBQVQ7QUFDRDtBQUNELGFBQU9BLE9BQU9HLEdBQVAsQ0FBV1AsU0FBU3JILE9BQU82SCxRQUFQLENBQWdCQyxlQUFoQixDQUN6QlQsS0FEeUIsRUFFekI1RixJQUZ5QixFQUd6QkEsS0FBS3NHLE1BSG9CLEVBSXpCakcsUUFKeUIsRUFLekJBLFNBQVNqQixVQUxnQjtBQU16QixzQkFBaUJ5RCxTQU5RLEVBT3pCeEMsU0FBU0UsS0FQZ0IsQ0FBcEIsRUFRSmdHLE1BUkksQ0FRR3JGLFVBQVVBLFdBQVcsSUFSeEIsQ0FBUDtBQVNEO0FBQ0QsV0FBTyxFQUFQO0FBQ0Q7O0FBRURzRixrQkFBZ0JuRyxRQUFoQixFQUEwQm1GLFFBQTFCLEVBQW9DSSxLQUFwQyxFQUEyQztBQUN6QyxRQUFJSixRQUFKLEVBQWMsT0FBTyxJQUFQO0FBQ2QsUUFBSUksTUFBTWEsTUFBVixFQUFrQixPQUFPLEtBQVA7QUFDbEIsV0FBTyxDQUFDLENBQUNwRyxTQUFTakIsVUFBVCxDQUFvQnNILGlCQUE3QjtBQUNEOztBQUVEQyxXQUFTZixLQUFULEVBQWdCO0FBQ2QsV0FBT0EsTUFBTWEsTUFBTixHQUFlLENBQXRCO0FBQ0Q7QUE1QzBDO0FBOEM3QywrREFBZXJCLGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNuREE7O0FBRUE7OztBQUdBLE1BQU13QixjQUFOLFNBQTZCdkIsUUFBUUMsT0FBckMsQ0FBNkM7QUFDM0MsYUFBV0MsVUFBWCxHQUF3QjtBQUN0QixXQUFPO0FBQ0x2RixZQUFNakMsTUFERDtBQUVMc0MsZ0JBQVV0QyxNQUZMO0FBR0w4SSxtQkFBYWxCLE1BSFI7O0FBS0xILGdCQUFVO0FBQ1J6QyxjQUFNMEMsT0FERTtBQUVSckIsZUFBTztBQUZDO0FBTEwsS0FBUDtBQVVEOztBQUVELGFBQVcwQyxTQUFYLEdBQXVCO0FBQ3JCLFdBQU8sQ0FDTCxxREFESyxDQUFQO0FBR0Q7O0FBRURDLGVBQWEvRyxJQUFiLEVBQW1CSyxRQUFuQixFQUE2QndHLFdBQTdCLEVBQTBDckIsUUFBMUMsRUFBb0Q7QUFDbER2RyxJQUFBLGlIQUFBQSxDQUNFLElBREYsRUFFRTRILGNBQWNBLFlBQVlHLFdBQVosRUFBZCxHQUEwQyxLQUY1QyxFQUdFLEVBQUVoSCxJQUFGLEVBQVFLLFFBQVIsRUFBa0JtRixRQUFsQixFQUhGO0FBSUQ7QUF6QjBDO0FBMkI3Q3lCLGVBQWVDLE1BQWYsQ0FBc0IsaUJBQXRCLEVBQXlDTixjQUF6QyxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBLE1BQU1PLGdCQUFOLFNBQStCRixlQUFlRyxHQUFmLENBQW1CLG9CQUFuQixDQUEvQixDQUF3RTtBQUN0RSxhQUFXdkMsUUFBWCxHQUFzQjtBQUNwQixXQUFPLDJFQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQVo7QUFnRkQ7O0FBRUQsYUFBV1UsVUFBWCxHQUF3QjtBQUN0QixXQUFPO0FBQ0x2RixZQUFNakMsTUFERDtBQUVMeUgsZ0JBQVU7QUFDUnpDLGNBQU0wQyxPQURFO0FBRVJyQixlQUFPO0FBRkMsT0FGTDtBQU1ML0QsZ0JBQVV0QyxNQU5MO0FBT0wySCxzQkFBZ0JDLE1BUFg7QUFRTDBCLGdCQUFVO0FBQ1J0RSxjQUFNOEMsS0FERTtBQUVSQyxrQkFBVTtBQUZGLE9BUkw7QUFZTHdCLGlCQUFXN0IsT0FaTjtBQWFMOEIsdUJBQWlCO0FBQ2Z4RSxjQUFNMEMsT0FEUztBQUVmSyxrQkFBVTtBQUZLO0FBYlosS0FBUDtBQWtCRDs7QUFFRDBCLHNCQUFvQjtBQUNsQixVQUFNQSxpQkFBTjtBQUNBLFNBQUtGLFNBQUwsR0FBaUIsSUFBakI7QUFDRDs7QUFFREcseUJBQXVCO0FBQ3JCLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxVQUFNRCxvQkFBTjtBQUNEOztBQUVEMUIsZUFBYS9GLElBQWIsRUFBbUJLLFFBQW5CLEVBQTZCc0gsUUFBN0IsRUFBdUM7QUFDckMsUUFBSSxDQUFDdEgsU0FBU2pCLFVBQVQsQ0FBb0J3SSxXQUFyQixJQUFvQyxDQUFDRCxRQUF6QyxFQUFtRCxPQUFPLEVBQVA7QUFDbkQsUUFBSUUsY0FBY3hILFNBQVNqQixVQUFULENBQW9Cd0ksV0FBdEM7QUFDQSxRQUFJLENBQUMvQixNQUFNSyxPQUFOLENBQWMyQixXQUFkLENBQUwsRUFBaUM7QUFDL0JBLG9CQUFjLENBQUNBLFdBQUQsQ0FBZDtBQUNEO0FBQ0QsV0FBT0EsWUFBWTFCLEdBQVosQ0FBaUIyQixVQUFELElBQWdCO0FBQ3JDLFVBQUk1RyxTQUFTLElBQWI7QUFDQSxVQUFJNEcsV0FBV2hILFNBQVgsSUFBd0JkLEtBQUtzRyxNQUFMLENBQVl3QixXQUFXaEgsU0FBdkIsQ0FBNUIsRUFBK0Q7QUFDN0RJLGlCQUFTbkQsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JPLE9BQU82SCxRQUFQLENBQWdCMkIsaUJBQWhCLENBQ3pCLElBRHlCLEVBQ25CL0gsS0FBS3NHLE1BQUwsQ0FBWXdCLFdBQVdoSCxTQUF2QixDQURtQixFQUNnQixLQUFLMEUsUUFEckI7QUFFekIsMEJBQWtCLEtBRk8sQ0FBbEIsQ0FBVDtBQUdELE9BSkQsTUFJTyxJQUFJc0MsV0FBV0UsU0FBWCxJQUNBM0gsU0FBU2pCLFVBQVQsQ0FBb0IwSSxXQUFXRSxTQUEvQixNQUE4Q25GLFNBRGxELEVBQzZEO0FBQ2xFM0IsaUJBQVM7QUFDUFgsaUJBQU9vRixPQUFPdEYsU0FBU2pCLFVBQVQsQ0FBb0IwSSxXQUFXRSxTQUEvQixDQUFQLENBREE7QUFFUG5ILG1CQUFTLE1BRkY7QUFHUEMscUJBQVcsSUFISjtBQUlQMUIsc0JBQVksRUFBRTJFLHFCQUFxQitELFdBQVdHLElBQWxDO0FBSkwsU0FBVDtBQU1EO0FBQ0QsVUFBSSxDQUFDL0csTUFBTCxFQUFhLE9BQU8sSUFBUDtBQUNiLFVBQUlnSCxZQUFZSixXQUFXSyxnQkFBM0I7QUFDQSxVQUFJRCxjQUFjckYsU0FBbEIsRUFBNkI7QUFDM0IsWUFBSSxDQUFDZ0QsTUFBTUssT0FBTixDQUFjZ0MsU0FBZCxDQUFMLEVBQStCO0FBQzdCQSxzQkFBWSxDQUFDQSxTQUFELENBQVo7QUFDRDtBQUNELFlBQUlBLFVBQVVFLElBQVYsQ0FBZW5ELEtBQUtvRCxPQUFPcEQsQ0FBUCxFQUFVcUQsSUFBVixDQUFlcEgsT0FBT1gsS0FBUCxDQUFhOEQsUUFBYixFQUFmLENBQXBCLENBQUosRUFBa0U7QUFDaEUsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRG5ELGFBQU9xSCxjQUFQLEdBQXdCLEVBQXhCO0FBQ0EsYUFBT3JILE1BQVA7QUFDRCxLQTNCTSxFQTJCSnFGLE1BM0JJLENBMkJHdUIsY0FBY0EsY0FBYyxJQTNCL0IsQ0FBUDtBQTRCRDs7QUFFRFUsc0JBQW9CbkIsUUFBcEIsRUFBOEI3QixRQUE5QixFQUF3QztBQUN0QyxRQUFJQSxZQUFZLENBQUM2QixRQUFqQixFQUEyQixPQUFPLEtBQVA7QUFDM0IsV0FBT0EsU0FBU1osTUFBVCxLQUFvQixDQUEzQjtBQUNEOztBQUVEZ0MsYUFBV2xCLGVBQVgsRUFBNEI7QUFDMUIsV0FBT0Esa0JBQWtCLE9BQWxCLEdBQTRCLEVBQW5DO0FBQ0Q7O0FBRURtQixlQUFhbEQsUUFBYixFQUF1Qm5GLFFBQXZCLEVBQWlDO0FBQy9CLFFBQUltRixRQUFKLEVBQWMsT0FBTyxJQUFQO0FBQ2QsV0FBTyxDQUFDbkYsU0FBU2pCLFVBQVQsQ0FBb0J1SixZQUE1QjtBQUNEOztBQUVEQyxzQkFBb0J2SSxRQUFwQixFQUE4QjtBQUM1QjtBQUNBLFdBQU8sTUFBTXVJLG1CQUFOLENBQTBCLEtBQUtDLFVBQUwsSUFBbUIsS0FBS0MsUUFBbEQsRUFBNER6SSxRQUE1RCxDQUFQO0FBQ0Q7O0FBRUQwSSxvQkFBa0IxSSxRQUFsQixFQUE0QjtBQUMxQixXQUFPQSxTQUFTakIsVUFBVCxDQUFvQjRKLGdCQUFwQixJQUNIM0ksU0FBU2pCLFVBQVQsQ0FBb0I2SiwwQkFEeEI7QUFFRDs7QUFFREMsZUFBYUMsQ0FBYixFQUFnQjtBQUNkLFNBQUtqSyxJQUFMLENBQVVOLGFBQVYsQ0FBd0IsVUFBeEIsRUFBb0N3SyxLQUFwQyxDQUEwQ0MsYUFBMUMsR0FBMEQsTUFBMUQ7QUFDQSxRQUFNQyxPQUFPLEtBQUtwSyxJQUFMLENBQVVOLGFBQVYsQ0FBd0IsT0FBeEIsQ0FBYjtBQUNBLFFBQUkwSyxJQUFKLEVBQVU7QUFDUkEsV0FBSzlHLElBQUwsR0FBWSx1QkFBWjtBQUNBOEcsV0FBS0YsS0FBTCxDQUFXRyxPQUFYLEdBQXFCLEtBQXJCO0FBQ0Q7QUFDRGhMLFdBQU9pTCxVQUFQLENBQWtCLE1BQU07QUFDdEIsV0FBS3RLLElBQUwsQ0FBVU4sYUFBVixDQUF3QixVQUF4QixFQUFvQ3dLLEtBQXBDLENBQTBDQyxhQUExQyxHQUEwRCxFQUExRDtBQUNBLFVBQUlDLElBQUosRUFBVTtBQUNSQSxhQUFLOUcsSUFBTCxHQUFZLGtCQUFaO0FBQ0E4RyxhQUFLRixLQUFMLENBQVdHLE9BQVgsR0FBcUIsRUFBckI7QUFDRDtBQUNGLEtBTkQsRUFNRyxJQU5IO0FBT0FKLE1BQUVNLGVBQUY7QUFDRDs7QUFFREMsY0FBWTFKLElBQVosRUFBa0J6QyxPQUFsQixFQUEyQjhDLFFBQTNCLEVBQXFDO0FBQ25DLFFBQU16QyxZQUFZeUMsU0FBU2pCLFVBQVQsQ0FBb0JuQixLQUFwQixJQUE2QixTQUEvQztBQUNBWCxJQUFBLGlIQUFBQSxDQUNFQyxPQURGLEVBQ1d5QyxLQUFLeEMsTUFBTCxJQUFlLEVBQUVLLGVBQWUsU0FBakIsRUFBNEJMLFFBQVEsRUFBcEMsRUFEMUIsRUFDb0VJLFNBRHBFO0FBRUQ7O0FBRUQrTCxvQkFBa0I7QUFDaEIsU0FBS3pLLElBQUwsQ0FBVTBLLGdCQUFWLENBQTJCLHNCQUEzQixFQUNHekwsT0FESCxDQUNZMEwsSUFBRCxJQUFVO0FBQ2pCLFdBQUtILFdBQUwsQ0FBaUIsS0FBSzFKLElBQXRCLEVBQTRCNkosSUFBNUIsRUFBa0NBLEtBQUt0SixLQUF2QztBQUNELEtBSEg7QUFJRDtBQTNNcUU7QUE2TXhFMEcsZUFBZUMsTUFBZixDQUFzQixvQkFBdEIsRUFBNENDLGdCQUE1QyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDdE5BO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsTUFBTTJDLGdCQUFOLFNBQStCLHVFQUFBQyxDQUFZMUUsUUFBUUMsT0FBcEIsQ0FBL0IsQ0FBNEQ7QUFDMUQsYUFBV1QsUUFBWCxHQUFzQjtBQUNwQixXQUFPLDJFQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQVo7QUEwQkQ7O0FBRUQsYUFBV1UsVUFBWCxHQUF3QjtBQUN0QixXQUFPO0FBQ0x5RSxjQUFRdkUsT0FESDs7QUFHTHdFLFlBQU07QUFDSmxILGNBQU00QyxNQURGO0FBRUp1RSxrQkFBVTtBQUZOO0FBSEQsS0FBUDtBQVFEOztBQUVEQyxVQUFRO0FBQ04sVUFBTUEsS0FBTjtBQUNBLFNBQUtGLElBQUwsR0FBWTFMLE9BQU82SCxRQUFQLENBQWdCZ0UsT0FBaEIsRUFBWjtBQUNEOztBQUVEQyxjQUFZSixJQUFaLEVBQWtCO0FBQ2hCMUwsV0FBTzZILFFBQVAsQ0FBZ0JrRSxPQUFoQixDQUF3QkwsSUFBeEI7QUFDRDs7QUFFRE0saUJBQWU7QUFDYmhNLFdBQU9pTSxPQUFQLENBQWVDLElBQWY7QUFDQSxTQUFLQyxJQUFMLENBQVUsa0JBQVY7QUFDRDtBQXJEeUQ7QUF1RDVEekQsZUFBZUMsTUFBZixDQUFzQixxQkFBdEIsRUFBNkM0QyxnQkFBN0MsRTs7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBRUE7OztBQUdBLE1BQU1hLGNBQU4sU0FBNkJ0RixRQUFRQyxPQUFyQyxDQUE2QztBQUMzQyxhQUFXVCxRQUFYLEdBQXNCO0FBQ3BCLFdBQU8sMkVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FBWjtBQTZCRDs7QUFFRHNGLFVBQVE7QUFDTixVQUFNQSxLQUFOO0FBQ0EsU0FBS1MsaUJBQUwsR0FBeUIsQ0FBQyxLQUFLQyxpQkFBTCxDQUF1QixLQUFLNU0sS0FBNUIsRUFBbUMsY0FBbkMsRUFBbUQsQ0FBQyxLQUFLMk0saUJBQXpELENBQTFCO0FBQ0EsU0FBS0Usd0NBQUwsQ0FBOEMsS0FBSzdNLEtBQW5ELEVBQTBELEtBQUs4TSwyQkFBL0Q7QUFDRDs7QUFFRCxhQUFXeEYsVUFBWCxHQUF3QjtBQUN0QixXQUFPO0FBQ0x5RixXQUFLO0FBQ0hqSSxjQUFNa0ksTUFESDtBQUVIN0csZUFBTztBQUZKLE9BREE7QUFLTDhHLFdBQUs7QUFDSG5JLGNBQU1rSSxNQURIO0FBRUg3RyxlQUFPO0FBRkosT0FMQTtBQVNMK0csV0FBSztBQUNIcEksY0FBTTBDLE9BREg7QUFFSHJCLGVBQU87QUFGSixPQVRBO0FBYUxnSCxZQUFNO0FBQ0pySSxjQUFNMEMsT0FERjtBQUVKckIsZUFBTztBQUZILE9BYkQ7QUFpQkx3Ryx5QkFBbUI7QUFDakI3SCxjQUFNMEMsT0FEVztBQUVqQnJCLGVBQU8sS0FGVTtBQUdqQmlILGdCQUFRO0FBSFMsT0FqQmQ7QUFzQkxOLG1DQUE2QjtBQUMzQmhJLGNBQU0wQyxPQURxQjtBQUUzQnJCLGVBQU87QUFGb0IsT0F0QnhCOztBQTJCTG5HLGFBQU9GLE1BM0JGO0FBNEJMcUcsYUFBTztBQUNMckIsY0FBTWtJLE1BREQ7QUFFTEksZ0JBQVE7QUFGSCxPQTVCRjtBQWdDTEMsa0JBQVk7QUFDVnZJLGNBQU1rSSxNQURJO0FBRVZuRixrQkFBVTtBQUZBO0FBaENQLEtBQVA7QUFxQ0Q7O0FBRUQsYUFBV2dCLFNBQVgsR0FBdUI7QUFDckIsV0FBTyxDQUNMLDhFQURLLENBQVA7QUFHRDs7QUFFRGdFLDJDQUF5QzdNLEtBQXpDLEVBQWdEOE0sMkJBQWhELEVBQTZFO0FBQzNFLFNBQUtRLGtDQUFMLEdBQTBDLEtBQUtWLGlCQUFMLENBQ3hDNU0sS0FEd0MsRUFDakMseUJBRGlDLEVBQ04sQ0FBQzhNLDJCQURLLENBQTFDO0FBRUQ7O0FBRURGLG9CQUFrQjVNLEtBQWxCLEVBQXlCdU4sSUFBekIsRUFBK0JDLEdBQS9CLEVBQW9DO0FBQ2xDLFFBQUl4TixLQUFKLEVBQVc7QUFDVCxVQUFJdU4sUUFBUXZOLEtBQVosRUFBbUI7QUFDakIsZUFBT0EsTUFBTXVOLElBQU4sQ0FBUDtBQUNEO0FBQ0Y7QUFDRCxXQUFPQyxHQUFQO0FBQ0Q7O0FBRURDLGVBQWF6TixLQUFiLEVBQW9CbU4sSUFBcEIsRUFBMEJPLFNBQTFCLEVBQXFDO0FBQ25DLFFBQUl6SyxTQUFTLEVBQWI7QUFDQSxRQUFJa0ssSUFBSixFQUFVO0FBQ1JsSyxnQkFBVSxRQUFWO0FBQ0Q7QUFDRCxRQUFJLEtBQUsySixpQkFBTCxDQUF1QjVNLEtBQXZCLEVBQThCLGNBQTlCLEVBQThDLENBQUMsS0FBSzJNLGlCQUFwRCxLQUEwRWUsY0FBYyxDQUE1RixFQUErRjtBQUM3RjtBQUNBLGFBQU8sRUFBUDtBQUNEO0FBQ0QsV0FBUSxHQUFFekssTUFBTyxzQkFBakI7QUFDRDs7QUFFRDBLLGVBQWFDLEVBQWIsRUFBaUI7QUFDZixRQUFJLENBQUMsS0FBS04sa0NBQU4sSUFBNEMsS0FBS25ILEtBQUwsS0FBZXlILEdBQUdDLE1BQUgsQ0FBVTFILEtBQXpFLEVBQWdGO0FBQzlFeUgsU0FBR3BDLGVBQUg7QUFDQTtBQUNEO0FBQ0QsU0FBS3JGLEtBQUwsR0FBYXlILEdBQUdDLE1BQUgsQ0FBVTFILEtBQXZCO0FBQ0Q7QUFySDBDO0FBdUg3QzZDLGVBQWVDLE1BQWYsQ0FBc0Isa0JBQXRCLEVBQTBDeUQsY0FBMUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1vQixzQ0FBc0MsQ0FBQyxjQUFELENBQTVDO0FBQ0EsSUFBTUMsMkJBQTJCO0FBQy9CQyxTQUFPLENBRHdCLEVBQ3JCO0FBQ1ZoSyxTQUFPLENBRndCLEVBRXJCO0FBQ1ZpSyxXQUFTLENBSHNCLENBR25CO0FBSG1CLENBQWpDO0FBS0EsSUFBTUMsa0JBQWtCO0FBQ3RCQyxVQUFRLGtCQURjO0FBRXRCQyxXQUFTLEVBRmE7QUFHdEJwSyxTQUFPO0FBSGUsQ0FBeEI7O0FBTUE7OztBQUdBLE1BQU1xSyxpQkFBTixTQUFnQ2pILFFBQVFDLE9BQXhDLENBQWdEO0FBQzlDLGFBQVdDLFVBQVgsR0FBd0I7QUFDdEIsV0FBTztBQUNMdkYsWUFBTWpDLE1BREQ7O0FBR0x5SCxnQkFBVTtBQUNSekMsY0FBTTBDLE9BREU7QUFFUnJCLGVBQU87QUFGQyxPQUhMOztBQVFML0QsZ0JBQVV0QztBQVJMLEtBQVA7QUFVRDs7QUFFRCxhQUFXK0ksU0FBWCxHQUF1QjtBQUNyQixXQUFPLENBQ0wsd0NBREssQ0FBUDtBQUdEOztBQUVEVSxzQkFBb0I7QUFDbEIsVUFBTUEsaUJBQU47QUFDQSxRQUFNK0UsWUFBWSxLQUFLMU0sVUFBTCxDQUFnQkEsVUFBbEM7QUFDQSxRQUFJME0sVUFBVS9NLE9BQVYsS0FBc0IsS0FBdEIsS0FDQytNLFVBQVVDLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLE9BQTdCLEtBQXlDRixVQUFVQyxTQUFWLENBQW9CQyxRQUFwQixDQUE2QixZQUE3QixDQUQxQyxDQUFKLEVBQzJGO0FBQ3pGLFdBQUtDLFVBQUwsR0FBa0JILFNBQWxCOztBQUVBO0FBQ0FBLGdCQUFVbkQsS0FBVixDQUFnQnVELFdBQWhCLENBQ0Usa0JBREYsRUFDc0IsNkNBRHRCOztBQUdBO0FBQ0EsVUFBSSxDQUFDSixVQUFVak8sWUFBZixFQUE2QjtBQUMzQmlPLGtCQUFVak8sWUFBVixHQUEwQlIsTUFBRCxJQUFZO0FBQ25DQyxpQkFBT0csSUFBUCxDQUFZSixNQUFaLEVBQW9CSyxPQUFwQixDQUE2QkMsR0FBRCxJQUFTO0FBQ25DbU8sc0JBQVVuRCxLQUFWLENBQWdCdUQsV0FBaEIsQ0FBNEJ2TyxHQUE1QixFQUFpQ04sT0FBT00sR0FBUCxDQUFqQztBQUNELFdBRkQ7QUFHRCxTQUpEO0FBS0Q7QUFDRjtBQUNELFNBQUtzSixXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS2tGLFlBQUwsQ0FBa0IsS0FBSzVNLElBQXZCLEVBQTZCLEtBQUt3RixRQUFsQyxFQUE0QyxLQUFLbkYsUUFBakQ7QUFDRDs7QUFFRG9ILHlCQUF1QjtBQUNyQixTQUFLQyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsUUFBSSxLQUFLZ0YsVUFBVCxFQUFxQjtBQUNuQixXQUFLQSxVQUFMLENBQWdCcE8sWUFBaEIsQ0FBNkIsRUFBRStOLFNBQVMsRUFBWCxFQUFlUSxRQUFRLEVBQXZCLEVBQTJCQyxTQUFTLEVBQXBDLEVBQTdCO0FBQ0F4UCxNQUFBLGlIQUFBQSxDQUNFLEtBQUtvUCxVQURQLEVBQ21CLEtBQUsxTSxJQUFMLENBQVV4QyxNQUFWLElBQW9CLEVBQUVLLGVBQWUsU0FBakIsRUFBNEJMLFFBQVEsRUFBcEMsRUFEdkMsRUFDaUYsU0FEakY7QUFFQSxXQUFLa1AsVUFBTCxHQUFrQixJQUFsQjtBQUNEO0FBQ0QsVUFBTWpGLG9CQUFOO0FBQ0Q7O0FBRURzRixZQUFVL00sSUFBVixFQUFnQkssUUFBaEIsRUFBMEJKLE1BQTFCLEVBQWtDO0FBQ2hDLFFBQU1xRyxTQUFTLEVBQWY7QUFDQSxRQUFJckcsV0FBVyxPQUFmLEVBQXdCO0FBQ3RCSSxlQUFTakIsVUFBVCxDQUFvQjBCLFNBQXBCLENBQThCM0MsT0FBOUIsQ0FBdUM2TyxFQUFELElBQVE7QUFDNUMsWUFBTXpNLFFBQVFQLEtBQUtzRyxNQUFMLENBQVkwRyxFQUFaLENBQWQ7QUFDQSxZQUFJLENBQUN6TSxLQUFMLEVBQVk7QUFDVjtBQUNBME0sa0JBQVFDLElBQVIsQ0FBYyxjQUFhRixFQUFHLGFBQVkzTSxTQUFTUyxTQUFVLEVBQTdEO0FBQ0E7QUFDQTtBQUNEO0FBQ0QsWUFBSSxDQUFDVCxTQUFTakIsVUFBVCxDQUFvQitOLFdBQXJCLElBQ0E5TSxTQUFTakIsVUFBVCxDQUFvQitOLFdBQXBCLENBQWdDdkwsUUFBaEMsQ0FBeUNyQixNQUFNTyxTQUEvQyxDQURKLEVBQytEO0FBQzdEd0YsaUJBQU84RyxJQUFQLENBQVk3TyxPQUFPNkgsUUFBUCxDQUFnQjJCLGlCQUFoQixDQUNWLElBRFUsRUFDSnhILEtBREksRUFDRyxLQURILENBQ1MsY0FEVCxFQUN5QixLQUR6QixDQUMrQixpQkFEL0IsQ0FBWjtBQUVEO0FBQ0YsT0FiRDtBQWNELEtBZkQsTUFlTztBQUNMK0YsYUFBTzhHLElBQVAsQ0FBWS9NLFFBQVo7QUFDQSxVQUFJLEtBQUtxTSxVQUFULEVBQXFCO0FBQ25CLGFBQUtBLFVBQUwsQ0FBZ0J0RCxLQUFoQixDQUFzQmlELE9BQXRCLEdBQWdDLGNBQWhDO0FBQ0EsWUFBTWdCLFNBQVMsRUFBRWhCLFNBQVMsY0FBWCxFQUFmO0FBQ0EsWUFBSSxLQUFLSyxVQUFMLENBQWdCRixTQUFoQixDQUEwQkMsUUFBMUIsQ0FBbUMsT0FBbkMsQ0FBSixFQUFpRDtBQUMvQ1ksaUJBQU9SLE1BQVAsR0FBZ0IsaUNBQWhCO0FBQ0Q7QUFDRCxhQUFLdk8sWUFBTCxDQUFrQitPLE1BQWxCO0FBQ0Q7QUFDRjtBQUNEcE8sSUFBQSxpSEFBQUEsQ0FDRSxJQURGLEVBRUUsZ0JBRkYsRUFHRSxFQUFFZSxJQUFGLEVBQVFzRyxNQUFSLEVBSEY7QUFJQSxRQUFJLEtBQUtvRyxVQUFULEVBQXFCO0FBQ25CLFdBQUtBLFVBQUwsQ0FBZ0JwTyxZQUFoQixDQUE2QjtBQUMzQmdQLGVBQU8sc0NBRG9CO0FBRTNCLHNCQUFjO0FBRmEsT0FBN0I7QUFJRDtBQUNELFNBQUsvTixTQUFMLENBQWU2SixLQUFmLENBQXFCbUUsUUFBckIsR0FBZ0MsS0FBaEM7O0FBRUE7QUFDQSxTQUFLbkUsS0FBTCxDQUFXdUQsV0FBWCxDQUF1QixzQ0FBdkIsRUFBK0QsR0FBL0Q7QUFDRDs7QUFFRGEsb0JBQWtCO0FBQ2hCLFFBQUksS0FBS2QsVUFBVCxFQUFxQjtBQUNuQixXQUFLQSxVQUFMLENBQWdCcE8sWUFBaEIsQ0FBNkI7QUFDM0IrTixpQkFBUyxFQURrQjtBQUUzQmlCLGVBQU8sRUFGb0I7QUFHM0Isc0JBQWM7QUFIYSxPQUE3QjtBQUtEO0FBQ0QsU0FBS2hQLFlBQUwsQ0FBa0IsRUFBRStOLFNBQVMsRUFBWCxFQUFlUSxRQUFRLEVBQXZCLEVBQWxCO0FBQ0Q7O0FBRURuRCxjQUFZMUosSUFBWixFQUFrQnlOLFdBQWxCLEVBQStCO0FBQzdCLFFBQUlDLGNBQWMsSUFBbEI7QUFDQSxRQUFJOVAsWUFBWSxTQUFoQjtBQUNBLFFBQUksS0FBSzhPLFVBQVQsRUFBcUI7QUFDbkJnQixvQkFBYyxLQUFLaEIsVUFBbkI7QUFDRDtBQUNELFFBQUllLFlBQVlyTyxVQUFaLENBQXVCbkIsS0FBM0IsRUFBa0M7QUFDaENMLGtCQUFZNlAsWUFBWXJPLFVBQVosQ0FBdUJuQixLQUFuQztBQUNEO0FBQ0RYLElBQUEsaUhBQUFBLENBQ0VvUSxXQURGLEVBQ2UxTixLQUFLeEMsTUFBTCxJQUFlLEVBQUVLLGVBQWUsU0FBakIsRUFBNEJMLFFBQVEsRUFBcEMsRUFEOUIsRUFDd0VJLFNBRHhFO0FBRUQ7O0FBRUQrUCxrQkFBZ0JGLFdBQWhCLEVBQTZCO0FBQzNCLFFBQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNoQixVQUFJLEtBQUtsTyxTQUFULEVBQW9CO0FBQ2xCLGFBQUtFLFdBQUwsQ0FBaUIsS0FBS0YsU0FBdEI7QUFDRDtBQUNELFVBQUksS0FBS21OLFVBQVQsRUFBcUI7QUFDbkIsYUFBS0EsVUFBTCxDQUFnQnBPLFlBQWhCLENBQTZCLEVBQUV1TyxRQUFRLEdBQVYsRUFBZUMsU0FBUyxHQUF4QixFQUE3QjtBQUNEO0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxRQUFJLEtBQUtKLFVBQVQsRUFBcUI7QUFDbkIsV0FBS0EsVUFBTCxDQUFnQnBPLFlBQWhCLENBQTZCLEVBQUV1TyxRQUFRLEVBQVYsRUFBY0MsU0FBUyxFQUF2QixFQUE3QjtBQUNEO0FBQ0QsV0FBTyxLQUFQO0FBQ0Q7O0FBRURjLGtCQUFnQjNOLE1BQWhCLEVBQXdCNE4sR0FBeEIsRUFBNkJySSxRQUE3QixFQUF1QztBQUNyQyxRQUFJQSxRQUFKLEVBQWMsT0FBTyxLQUFQO0FBQ2QsV0FBT3dHLHlCQUF5Qi9MLE1BQXpCLEtBQ0orTCx5QkFBeUIvTCxNQUF6QixJQUFtQzROLElBQUl6TyxVQUFKLENBQWVvQixrQkFEOUMsSUFFTHFOLElBQUl6TyxVQUFKLENBQWUwTyxlQUZWLElBRTZCRCxJQUFJek8sVUFBSixDQUFlME8sZUFBZixLQUFtQyxXQUZ2RTtBQUdEOztBQUVEbEIsZUFBYTVNLElBQWIsRUFBbUJ3RixRQUFuQixFQUE2Qm5GLFFBQTdCLEVBQXVDO0FBQ3JDLFFBQUksQ0FBQ0EsUUFBRCxJQUFhLENBQUNMLElBQWQsSUFBc0IsQ0FBQyxLQUFLMEgsV0FBaEMsRUFBNkM7QUFDN0MsUUFBTXpILFNBQVMsaUhBQUFLLENBQW1CRCxRQUFuQixDQUFmO0FBQ0EsUUFBTW9OLGNBQWNsUCxPQUFPNkgsUUFBUCxDQUFnQjJCLGlCQUFoQixDQUNsQixJQURrQixFQUNaMUgsUUFEWSxFQUNGbUYsUUFERSxFQUNRLElBRFIsQ0FDYSxpQkFEYixDQUFwQjs7QUFHQSxRQUFJLEtBQUttSSxlQUFMLENBQXFCRixXQUFyQixDQUFKLEVBQXVDOztBQUV2QyxTQUFLL0QsV0FBTCxDQUFpQjFKLElBQWpCLEVBQXVCeU4sV0FBdkI7O0FBRUEsUUFBSSxDQUFDakksUUFBRCxJQUFhaUksWUFBWXJPLFVBQVosQ0FBdUIwTyxlQUF2QixLQUEyQyxRQUE1RCxFQUFzRTtBQUNwRSxXQUFLZixTQUFMLENBQWUvTSxJQUFmLEVBQXFCeU4sV0FBckIsRUFBa0N4TixNQUFsQztBQUNELEtBRkQsTUFFTztBQUNMLFdBQUs4TixZQUFMLENBQWtCL04sSUFBbEIsRUFBd0J3RixRQUF4QixFQUFrQ2lJLFdBQWxDLEVBQStDeE4sTUFBL0M7QUFDRDtBQUNGOztBQUVEOE4sZUFBYS9OLElBQWIsRUFBbUJ3RixRQUFuQixFQUE2Qm5GLFFBQTdCLEVBQXVDSixNQUF2QyxFQUErQztBQUM3QyxTQUFLdU4sZUFBTDs7QUFFQSxRQUFNSCxTQUFTO0FBQ2JyTixVQURhO0FBRWJLLGNBRmE7QUFHYm1GO0FBSGEsS0FBZjtBQUtBLFFBQU13SSx3QkFBd0IsNEdBQUFyTSxDQUFjM0IsSUFBZCxFQUFvQkssUUFBcEIsQ0FBOUI7QUFDQSxRQUFJNE4sNEJBQUo7QUFDQSxRQUFNQyx5QkFBeUI3TixTQUFTakIsVUFBVCxDQUFvQitPLDhCQUFuRDs7QUFFQSxRQUFJbE8sV0FBVyxPQUFYLElBQXNCLEtBQUsyTixlQUFMLENBQXFCM04sTUFBckIsRUFBNkJJLFFBQTdCLEVBQXVDbUYsUUFBdkMsQ0FBMUIsRUFBNEU7QUFDMUV6SCxhQUFPQyxNQUFQLENBQWNxUCxNQUFkLEVBQXNCO0FBQ3BCM0gsd0JBQWdCLGtCQURJO0FBRXBCMEksb0JBQVksVUFGUTtBQUdwQkMsb0JBQVksU0FIUTtBQUlwQkMsbUJBQVcsWUFKUztBQUtwQnJPO0FBTG9CLE9BQXRCO0FBT0FnTyw0QkFBc0Isd0JBQXRCO0FBQ0QsS0FURCxNQVNPLElBQUloTyxXQUFXLE9BQVgsSUFBc0IsS0FBSzJOLGVBQUwsQ0FBcUIzTixNQUFyQixFQUE2QkksUUFBN0IsRUFBdUNtRixRQUF2QyxDQUExQixFQUE0RTtBQUNqRnpILGFBQU9DLE1BQVAsQ0FBY3FQLE1BQWQsRUFBc0I7QUFDcEIzSCx3QkFBZ0IsbUJBREk7QUFFcEJ3RixhQUFLLEdBRmU7QUFHcEJrRCxvQkFBWSxhQUhRO0FBSXBCQyxvQkFBWSxvQkFKUTtBQUtwQkUsc0JBQWMsVUFMTTtBQU1wQkQsbUJBQVcsa0JBTlM7QUFPcEJFLGdCQUFRLE1BUFk7QUFRcEJ2TztBQVJvQixPQUF0QjtBQVVBZ08sNEJBQXNCLHdCQUF0QjtBQUNELEtBWk0sTUFZQSxJQUFJaE8sV0FBVyxTQUFYLElBQXdCLEtBQUsyTixlQUFMLENBQXFCM04sTUFBckIsRUFBNkJJLFFBQTdCLEVBQXVDbUYsUUFBdkMsQ0FBNUIsRUFBOEU7QUFDbkZ6SCxhQUFPQyxNQUFQLENBQWNxUCxNQUFkLEVBQXNCO0FBQ3BCM0gsd0JBQWdCLGtCQURJO0FBRXBCc0YsYUFBSzNLLFNBQVNqQixVQUFULENBQW9CcVAsUUFBcEIsSUFBZ0MsQ0FBQyxHQUZsQjtBQUdwQnZELGFBQUs3SyxTQUFTakIsVUFBVCxDQUFvQnNQLFFBQXBCLElBQWdDLEdBSGpCO0FBSXBCTixvQkFBWSxpQkFKUTtBQUtwQkMsb0JBQVksaUJBTFE7QUFNcEJDLG1CQUFXLGFBTlM7QUFPcEJFLGdCQUFRLEVBUFk7QUFRcEJ2TztBQVJvQixPQUF0QjtBQVVBZ08sNEJBQXNCLHdCQUF0QjtBQUNELEtBWk0sTUFZQSxJQUFJOUIsZ0JBQWdCNkIscUJBQWhCLE1BQTJDbkwsU0FBL0MsRUFBMEQ7QUFDL0R3SyxhQUFPM0gsY0FBUCxHQUF3QnlHLGdCQUFnQjZCLHFCQUFoQixDQUF4QjtBQUNBQyw0QkFBc0IsMkJBQXRCO0FBQ0QsS0FITSxNQUdBLElBQUk1TixTQUFTakIsVUFBVCxDQUFvQnNILGlCQUFwQixJQUNBLENBQUNxRixvQ0FBb0NuSyxRQUFwQyxDQUE2Q29NLHFCQUE3QyxDQURMLEVBQzBFO0FBQy9FWCxhQUFPN0gsUUFBUCxHQUFrQixJQUFsQjtBQUNEO0FBQ0QsUUFBSW5GLFNBQVNFLEtBQVQsS0FBbUIsYUFBdkIsRUFBc0M7QUFDcEM4TSxhQUFPM0gsY0FBUCxHQUF3QixFQUF4QjtBQUNEO0FBQ0QsUUFBSXJGLFNBQVNqQixVQUFULENBQW9CdVAsZUFBcEIsS0FBd0M5TCxTQUE1QyxFQUF1RDtBQUNyRHdLLGFBQU8zSCxjQUFQLEdBQXdCckYsU0FBU2pCLFVBQVQsQ0FBb0J1UCxlQUE1QztBQUNEOztBQUVEMVAsSUFBQSxpSEFBQUEsQ0FDRSxJQURGLEVBRUUsQ0FBQ2lQLDBCQUEwQkQsbUJBQTFCLElBQWtELGNBQWFELHFCQUFzQixFQUF0RixFQUF5RmhILFdBQXpGLEVBRkYsRUFHRXFHLE1BSEY7QUFJRDtBQWxPNkM7QUFvT2hEcEcsZUFBZUMsTUFBZixDQUFzQixzQkFBdEIsRUFBOENvRixpQkFBOUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsTUFBTXNDLG1CQUFOLFNBQWtDLDREQUFsQyxDQUFpRDtBQUMvQyxhQUFXL0osUUFBWCxHQUFzQjtBQUNwQixXQUFPLDJFQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQVo7QUFnRkQ7O0FBRUQsYUFBV1UsVUFBWCxHQUF3QjtBQUN0QixXQUFPO0FBQ0x0RixjQUFRMEYsTUFESDtBQUVMeUksa0JBQVl6SSxNQUZQO0FBR0wwSSxrQkFBWTFJLE1BSFA7QUFJTDJJLGlCQUFXM0ksTUFKTjtBQUtMNEksb0JBQWM1SSxNQUxUO0FBTUw2SSxjQUFRLEVBQUV6TCxNQUFNNEMsTUFBUixFQUFnQnZCLE9BQU8sSUFBdkIsRUFOSDtBQU9MNEcsV0FBSyxFQUFFakksTUFBTWtJLE1BQVIsRUFBZ0I3RyxPQUFPLENBQXZCLEVBUEE7QUFRTDhHLFdBQUssRUFBRW5JLE1BQU1rSSxNQUFSLEVBQWdCN0csT0FBTyxHQUF2QixFQVJBOztBQVVMeUssbUJBQWE7QUFDWDlMLGNBQU1rSSxNQURLO0FBRVg3RyxlQUFPO0FBRkksT0FWUjtBQWNMd0cseUJBQW1CbkYsT0FkZDtBQWVMcUosWUFBTW5KLE1BZkQ7QUFnQkxvSixxQkFBZTtBQUNiaE0sY0FBTTBDLE9BRE87QUFFYnJCLGVBQU87QUFGTSxPQWhCVjtBQW9CTDRLLG1CQUFhO0FBQ1hqTSxjQUFNMEMsT0FESztBQUVYckIsZUFBTztBQUZJLE9BcEJSO0FBd0JMNkssa0JBQVk7QUFDVmxNLGNBQU0wQyxPQURJO0FBRVZyQixlQUFPO0FBRkcsT0F4QlA7QUE0Qkw4SyxtQkFBYTtBQUNYbk0sY0FBTTBDLE9BREs7QUFFWHJCLGVBQU87QUFGSSxPQTVCUjtBQWdDTCtLLG9CQUFjbEUsTUFoQ1Q7QUFpQ0xtRSxvQkFBY25FLE1BakNUO0FBa0NMb0Usa0JBQVk7QUFDVnRNLGNBQU1rSSxNQURJO0FBRVZuRixrQkFBVTtBQUZBO0FBbENQLEtBQVA7QUF1Q0Q7O0FBRURxRSxVQUFRO0FBQ04sVUFBTUEsS0FBTjtBQUNBLFNBQUttRixhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0Q7O0FBRUQvSCxzQkFBb0I7QUFDbEIsVUFBTUEsaUJBQU47QUFDQSxTQUFLZ0ksWUFBTCxHQUFvQixJQUFwQjtBQUNBalIsV0FBT2tSLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtILGFBQXZDO0FBQ0EsU0FBS0ksY0FBTDtBQUNEOztBQUVEakkseUJBQXVCO0FBQ3JCbEosV0FBT29SLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtMLGFBQTFDO0FBQ0EsU0FBS0UsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFVBQU0vSCxvQkFBTjtBQUNEOztBQUVELGFBQVdYLFNBQVgsR0FBdUI7QUFDckIsV0FBTyxDQUNMLDhDQURLLENBQVA7QUFHRDs7QUFFRDRJLG1CQUFpQjtBQUNmLFFBQUksQ0FBQyxLQUFLRixZQUFWLEVBQXdCO0FBQ3hCLFNBQUtJLFFBQUw7QUFDQSxRQUFJLEtBQUtDLFFBQVQsRUFBbUI7QUFDbkIsU0FBS0MsY0FBTCxHQUFzQixLQUF0QjtBQUNBLFNBQUtELFFBQUwsR0FBZ0J0UixPQUFPd1IscUJBQVAsQ0FBNkIsTUFBTTtBQUNqRCxXQUFLRixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFdBQUtSLGFBQUw7QUFDRCxLQUplLENBQWhCO0FBS0Q7O0FBRURNLGFBQVc7QUFDVCxRQUFNL0IsTUFBTTtBQUNWb0Isa0JBQVksS0FBS0gsSUFBTCxLQUFjLGFBQWQsSUFBK0IsS0FBS0ksV0FEdEM7QUFFVkYsbUJBQ0ssQ0FBQyxLQUFLRixJQUFMLEtBQWMsY0FBZCxJQUFnQyxLQUFLQSxJQUFMLEtBQWMsYUFBL0MsS0FDQSxLQUFLSTtBQUpBLEtBQVo7QUFNQSxRQUFJLENBQUMsS0FBS0csVUFBVixFQUFzQjtBQUNwQnhCLFVBQUltQixXQUFKLEdBQWtCLElBQWxCO0FBQ0Q7QUFDRCxTQUFLcFAsYUFBTCxDQUFtQmlPLEdBQW5CO0FBQ0Q7O0FBRUR5QixrQkFBZ0I7QUFDZCxRQUFJLENBQUMsS0FBS1EsY0FBVixFQUEwQjtBQUMxQixRQUFJLEtBQUtoQixJQUFMLEtBQWMsV0FBbEIsRUFBK0I7QUFDN0IsV0FBS2xQLGFBQUwsQ0FBbUI7QUFDakJxUCxvQkFBWSxJQURLO0FBRWpCRCxxQkFBYTtBQUZJLE9BQW5CO0FBSUE7QUFDRDtBQUNELFFBQU1nQixrQkFBa0IsS0FBS2hCLFdBQTdCO0FBQ0EsUUFBTWlCLGlCQUFpQixLQUFLaEIsVUFBNUI7QUFDQSxTQUFLclAsYUFBTCxDQUFtQjtBQUNqQnNQLG1CQUFhLEtBREk7QUFFakJELGtCQUFZLEtBRks7QUFHakJELG1CQUFhO0FBSEksS0FBbkI7QUFYYyxRQWdCTnpDLFNBaEJNLEdBZ0JRLEtBQUsyRCxDQWhCYixDQWdCTjNELFNBaEJNOztBQWlCZCxRQUFNNEQsaUJBQWlCNUQsVUFBVTZELFdBQWpDO0FBQ0EsUUFBSUQsbUJBQW1CLENBQXZCLEVBQTBCO0FBQzFCLFFBQUlBLGtCQUFrQixLQUFLaEIsWUFBM0IsRUFBeUM7QUFDdkMsV0FBS0QsV0FBTCxHQUFtQixJQUFuQjtBQUNELEtBRkQsTUFFTyxJQUFJaUIsa0JBQWtCLEtBQUtmLFlBQTNCLEVBQXlDO0FBQzlDLFdBQUtGLFdBQUwsR0FBbUIsS0FBbkI7QUFDRCxLQUZNLE1BRUE7QUFDTCxVQUFJZSxrQkFBa0IsS0FBS25CLElBQUwsS0FBYyxhQUFwQyxFQUFtRDtBQUNqRDtBQUNBLGFBQUtZLGNBQUw7QUFDQTtBQUNEO0FBQ0QsVUFBTVcsa0JBQWtCOUQsVUFBVStELFlBQWxDO0FBQ0EsVUFBTUMsY0FBYyxLQUFLclIsSUFBTCxDQUFVTixhQUFWLENBQXdCLGFBQXhCLEVBQXVDMFIsWUFBM0Q7QUFDQSxXQUFLcEIsV0FBTCxHQUFtQm1CLGtCQUFrQkUsY0FBYyxHQUFuRDtBQUNBLFVBQUksS0FBS3JCLFdBQVQsRUFBc0I7QUFDcEIsYUFBS0MsWUFBTCxHQUFvQmdCLGNBQXBCO0FBQ0QsT0FGRCxNQUVPLElBQUksQ0FBQ0gsZUFBTCxFQUFzQjtBQUMzQixhQUFLWixZQUFMLEdBQW9CZSxjQUFwQjtBQUNEO0FBQ0Y7QUFDRCxTQUFLUCxRQUFMO0FBQ0Q7O0FBRURZLG9CQUFrQjFCLElBQWxCLEVBQXdCQyxhQUF4QixFQUF1Q0csV0FBdkMsRUFBb0QxSixRQUFwRCxFQUE4RDtBQUM1RCxRQUFJQSxRQUFKLEVBQWM7QUFDWixhQUFPLEVBQVA7QUFDRDtBQUNELFFBQUlzSixTQUFTLGFBQWIsRUFBNEI7QUFDMUIsYUFBTyxRQUFQO0FBQ0Q7QUFDRCxRQUFJQyxpQkFBaUJHLFdBQXJCLEVBQWtDO0FBQ2hDLGFBQU8sY0FBUDtBQUNEO0FBQ0QsV0FBTyxNQUFQO0FBQ0Q7O0FBRUR1QixjQUFZakwsUUFBWixFQUFzQm5GLFFBQXRCLEVBQWdDNE8sVUFBaEMsRUFBNEM7QUFDMUMsUUFBSXpKLFlBQVl5SixVQUFoQixFQUE0QjtBQUMxQixhQUFPLEtBQVA7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVEeUIsZ0JBQWM3RSxFQUFkLEVBQWtCO0FBQ2hCLFFBQU16SCxRQUFRdU0sU0FBUzlFLEdBQUdDLE1BQUgsQ0FBVTFILEtBQW5CLEVBQTBCLEVBQTFCLENBQWQ7QUFDQSxRQUFNd00sUUFBUSxFQUFFOVAsV0FBVyxLQUFLVCxRQUFMLENBQWNTLFNBQTNCLEVBQWQ7QUFDQSxRQUFJbUssT0FBTzRGLEtBQVAsQ0FBYXpNLEtBQWIsQ0FBSixFQUF5QjtBQUN6QixRQUFJMEgsU0FBUyxLQUFLNU0sSUFBTCxDQUFVTixhQUFWLENBQXdCLFNBQXhCLENBQWI7QUFDQSxRQUFJaU4sR0FBR0MsTUFBSCxLQUFjQSxNQUFsQixFQUEwQjtBQUVyQkEsWUFGcUIsR0FFVkQsRUFGVSxDQUVyQkMsTUFGcUI7QUFDeEI7QUFFRCxLQUhELE1BR08sSUFBSUQsR0FBR2lGLElBQVAsRUFBYTtBQUFBLG9DQUNQakYsR0FBR2lGLElBREk7O0FBQ2pCaEYsWUFEaUI7QUFFbkIsS0FGTSxNQUVBLElBQUlELEdBQUdrRixZQUFQLEVBQXFCO0FBQUEsNkJBQ2ZsRixHQUFHa0YsWUFBSCxFQURlOztBQUFBOztBQUN6QmpGLFlBRHlCO0FBRTNCO0FBQ0QsUUFBSTFILFVBQVUsQ0FBVixJQUFnQkEsU0FBUzBILE9BQU9kLEdBQWhCLElBQXVCLENBQUMsS0FBS0osaUJBQWpELEVBQXFFO0FBQ25FLFdBQUs1SyxJQUFMLENBQVVnUixXQUFWLENBQXNCLEtBQUsvUSxNQUEzQixFQUFtQyxLQUFLbU8sVUFBeEMsRUFBb0R3QyxLQUFwRDtBQUNELEtBRkQsTUFFTztBQUNMQSxZQUFNLEtBQUtyQyxZQUFMLElBQXFCLEtBQUtELFNBQWhDLElBQTZDbEssS0FBN0M7QUFDQSxXQUFLcEUsSUFBTCxDQUFVZ1IsV0FBVixDQUFzQixLQUFLL1EsTUFBM0IsRUFBbUMsS0FBS29PLFVBQXhDLEVBQW9EdUMsS0FBcEQ7QUFDRDtBQUNGOztBQUVESyxrQkFBZ0I1USxRQUFoQixFQUEwQm1PLE1BQTFCLEVBQWtDRixTQUFsQyxFQUE2QztBQUMzQyxRQUFNVCxNQUFNO0FBQ1ZnQixtQkFBYSxLQUFLekQsSUFBTCxDQUFVL0ssUUFBVixFQUFvQm1PLE1BQXBCLElBQThCbk8sU0FBU2pCLFVBQVQsQ0FBb0JrUCxTQUFwQixDQUE5QixHQUErRDtBQURsRSxLQUFaO0FBR0EsUUFBSWpPLFFBQUosRUFBYztBQUNadEMsYUFBT0MsTUFBUCxDQUFjNlAsR0FBZCxFQUFtQjtBQUNqQnNCLHNCQUFjLENBREc7QUFFakJDLHNCQUFjLEdBRkc7QUFHakJILG9CQUFZLEtBSEs7QUFJakJELHFCQUFhLEtBSkk7QUFLakJFLHFCQUFhLEtBTEk7QUFNakJKLGNBQU16TyxTQUFTakIsVUFBVCxDQUFvQjBPLGVBTlQ7QUFPakJpQix1QkFBZSxDQUFDLENBQUMxTyxTQUFTakIsVUFBVCxDQUFvQjhSO0FBUHBCLE9BQW5CO0FBU0Q7QUFDRCxTQUFLdFIsYUFBTCxDQUFtQmlPLEdBQW5CO0FBQ0EsUUFBSXhOLFFBQUosRUFBYztBQUNaLFdBQUtxUCxjQUFMO0FBQ0Q7QUFDRjs7QUFFRHRFLE9BQUsvSyxRQUFMLEVBQWVtTyxNQUFmLEVBQXVCO0FBQ3JCLFdBQU9uTyxhQUFhLENBQUNtTyxNQUFELElBQVduTyxTQUFTRSxLQUFULEtBQW1CaU8sTUFBM0MsQ0FBUDtBQUNEOztBQUVEL0Usa0JBQWdCb0MsRUFBaEIsRUFBb0I7QUFDbEJBLE9BQUdwQyxlQUFIO0FBQ0Q7QUE1UjhDO0FBOFJqRHhDLGVBQWVDLE1BQWYsQ0FBc0Isd0JBQXRCLEVBQWdEMEgsbUJBQWhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0U0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxNQUFNdUMsc0JBQU4sU0FBcUMsNERBQXJDLENBQW9EO0FBQ2xELGFBQVd0TSxRQUFYLEdBQXNCO0FBQ3BCLFdBQU8sMkVBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQVo7QUEyQkQ7QUE3QmlEO0FBK0JwRG9DLGVBQWVDLE1BQWYsQ0FBc0IsMkJBQXRCLEVBQW1EaUssc0JBQW5ELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrREFBZ0JDLFVBQUQsSUFBZ0I7QUFDN0I7OztBQUdBLFFBQU1ySCxXQUFOLFNBQTBCcUgsVUFBMUIsQ0FBcUM7QUFDbkM7Ozs7Ozs7Ozs7Ozs7OztBQWVBMUcsU0FBSzNILElBQUwsRUFBc0M7QUFBQSxVQUEzQnNPLE1BQTJCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWR6TixPQUFjLHVFQUFKLEVBQUk7O0FBQ3BDLFVBQU0wTixRQUFRLElBQUlDLEtBQUosQ0FBVXhPLElBQVYsRUFBZ0I7QUFDNUJ5TyxpQkFBUzVOLFFBQVE0TixPQUFSLEtBQW9CM08sU0FBcEIsR0FBZ0MsSUFBaEMsR0FBdUNlLFFBQVE0TixPQUQ1QjtBQUU1QkMsb0JBQVloTSxRQUFRN0IsUUFBUTZOLFVBQWhCLENBRmdCO0FBRzVCQyxrQkFBVTlOLFFBQVE4TixRQUFSLEtBQXFCN08sU0FBckIsR0FBaUMsSUFBakMsR0FBd0NlLFFBQVE4TjtBQUg5QixPQUFoQixDQUFkO0FBS0FKLFlBQU1ELE1BQU4sR0FBZUEsTUFBZjtBQUNBLFVBQU1NLE9BQU8vTixRQUFRK04sSUFBUixJQUFnQixJQUE3QjtBQUNBQSxXQUFLQyxhQUFMLENBQW1CTixLQUFuQjtBQUNBLGFBQU9BLEtBQVA7QUFDRDtBQTFCa0M7QUE0QnJDLFNBQU92SCxXQUFQO0FBQ0QsQ0FqQ0QsRTs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7O0FBRUF4TCxPQUFPdUQsaUJBQVAsR0FBMkJ2RCxPQUFPdUQsaUJBQVAsSUFBNEIsRUFBdkQ7QUFDQSxJQUFNK1AseUJBQXlCLENBQzdCLGFBRDZCLEVBQ2QsY0FEYyxFQUNFLHFCQURGLEVBQ3lCLGFBRHpCLEVBQ3dDLFdBRHhDLENBQS9COztBQUlBLElBQU1DLHFCQUFxQjtBQUN6QjdRLFNBQU80QixTQURrQjtBQUV6QmtQLFVBQVFsUCxTQUZpQjtBQUd6Qm1QLGFBQVduUCxTQUhjO0FBSXpCOEwsbUJBQWlCLEVBQUU1TCxNQUFNLFFBQVIsRUFKUTtBQUt6QitLLG1CQUFpQjtBQUNmL0ssVUFBTSxPQURTO0FBRWZhLGFBQVM7QUFDUHFJLGFBQU80Rix1QkFBdUJJLE1BQXZCLENBQThCLFFBQTlCLENBREE7QUFFUGhRLGFBQU80UCx1QkFBdUJJLE1BQXZCLENBQThCLFFBQTlCLENBRkE7QUFHUC9GLGVBQVMyRix1QkFBdUJJLE1BQXZCLENBQThCLFFBQTlCLENBSEY7QUFJUCxXQUFLLENBQUMsUUFBRDtBQUpFO0FBRk0sR0FMUTtBQWN6QjlELGtDQUFnQyxFQUFFcEwsTUFBTSxRQUFSLEVBZFA7QUFlekJvSyxlQUFhLEVBQUVwSyxNQUFNLE1BQVIsRUFmWTtBQWdCekIyRCxxQkFBbUIsRUFBRTNELE1BQU0sU0FBUixFQWhCTTtBQWlCekI0RixnQkFBYyxFQUFFNUYsTUFBTSxTQUFSLEVBakJXO0FBa0J6QmtELHVCQUFxQixFQUFFbEQsTUFBTSxRQUFSLEVBbEJJO0FBbUJ6QjZFLGVBQWEsRUFBRTdFLE1BQU0sTUFBUixFQW5CWTtBQW9CekJtTyxrQkFBZ0IsRUFBRW5PLE1BQU0sU0FBUixFQXBCUztBQXFCekJtUCxnQkFBYyxFQUFFblAsTUFBTSxNQUFSLEVBckJXO0FBc0J6QjlFLFNBQU8sRUFBRThFLE1BQU0sUUFBUixFQXRCa0I7QUF1QnpCaUcsb0JBQWtCLEVBQUVqRyxNQUFNLFNBQVIsRUF2Qk87QUF3QnpCa0csOEJBQTRCLEVBQUVsRyxNQUFNLFNBQVIsRUF4Qkg7QUF5QnpCb1Asd0JBQXNCLEVBQUVwUCxNQUFNLFNBQVI7QUF6QkcsQ0FBM0I7QUEyQkF4RSxPQUFPdUQsaUJBQVAsQ0FBeUJhLHNCQUF6QixHQUFrRCxnR0FBQXlQLENBQW1CelAsc0JBQXJFO0FBQ0FwRSxPQUFPdUQsaUJBQVAsQ0FBeUJLLFlBQXpCLEdBQXdDLGdHQUFBaVEsQ0FBbUJqUSxZQUEzRDtBQUNBcEUsT0FBT0MsTUFBUCxDQUFjTyxPQUFPdUQsaUJBQVAsQ0FBeUJhLHNCQUF2QyxFQUErRG1QLGtCQUEvRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUF2VCxPQUFPNkgsUUFBUCxHQUFrQjdILE9BQU82SCxRQUFQLElBQW1CO0FBQ25DeUwsMEJBQXdCLENBQ3RCLGFBRHNCLEVBQ1AsY0FETyxFQUNTLHFCQURULEVBQ2dDLGFBRGhDLEVBQytDLFdBRC9DLENBRFc7O0FBS25DUSxVQUFReEksSUFBUixFQUFjO0FBQ1osUUFBSUEsU0FBU2xMLFFBQWIsRUFBdUIsT0FBTyxJQUFQO0FBQ3ZCLFFBQU1PLE9BQU8ySyxLQUFLeUksV0FBTCxFQUFiO0FBQ0EsV0FBUXBULGdCQUFnQnFULGdCQUFqQixHQUFxQyx5QkFBMkJyVCxJQUFELENBQU9zVCxJQUF0RSxHQUE2RXRULElBQXBGO0FBQ0QsR0FUa0M7O0FBV25DdVQsZ0JBQWM1SSxJQUFkLEVBQW9CNkksUUFBcEIsRUFBOEI7QUFDNUIsV0FBTzdJLEtBQUs4SSxVQUFMLEdBQ0w5SSxLQUFLOEksVUFBTCxDQUFnQi9ULGFBQWhCLENBQThCOFQsUUFBOUIsQ0FESyxHQUVMN0ksS0FBS2pMLGFBQUwsQ0FBbUI4VCxRQUFuQixDQUZGO0FBR0QsR0Fma0M7O0FBaUJuQ0Usc0JBQW9CMVQsSUFBcEIsRUFBMEIyVCxTQUExQixFQUFxQztBQUNuQyxRQUFJM1QsU0FBUyxJQUFiLEVBQW1CLE9BQU8sSUFBUDtBQUNuQixRQUFNMkssT0FBT2dKLFVBQVVDLEtBQVYsRUFBYjtBQUNBLFFBQUlqSixJQUFKLEVBQVU7QUFDUixhQUFPdEwsT0FBTzZILFFBQVAsQ0FBZ0J3TSxtQkFBaEIsQ0FDTHJVLE9BQU82SCxRQUFQLENBQWdCcU0sYUFBaEIsQ0FBOEJ2VCxJQUE5QixFQUFvQzJLLElBQXBDLENBREssRUFDc0NnSixTQUR0QyxDQUFQO0FBRUQ7QUFDRCxXQUFPM1QsSUFBUDtBQUNELEdBekJrQzs7QUEyQm5DNlQsYUFBV2xKLElBQVgsRUFBaUI7QUFDZixRQUFJQSxLQUFLbUosUUFBTCxLQUFrQm5RLFNBQXRCLEVBQWlDO0FBQy9CZ0gsV0FBS21KLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxXQUFLLElBQUl6VixVQUFXc00sS0FBS3JLLE9BQUwsS0FBaUIsa0JBQWpCLEdBQXNDakIsT0FBTzZILFFBQVAsQ0FBZ0JpTSxPQUFoQixDQUF3QnhJLElBQXhCLENBQXRDLEdBQXNFQSxJQUExRixFQUNFdE0sT0FERixFQUNXQSxVQUFVZ0IsT0FBTzZILFFBQVAsQ0FBZ0JpTSxPQUFoQixDQUF3QjlVLE9BQXhCLENBRHJCLEVBQ3VEO0FBQ3JELGdCQUFRQSxRQUFRaUMsT0FBaEI7QUFDRSxlQUFLLGtCQUFMO0FBQ0UsZ0JBQUlqQyxRQUFRMFYsV0FBWixFQUF5QjtBQUN2QnBKLG1CQUFLbUosUUFBTCxDQUFjNUYsSUFBZCxDQUFtQjdQLFFBQVEwVixXQUFSLENBQW9CblMsU0FBdkM7QUFDRCxhQUZELE1BRU8sSUFBSXZELFFBQVEwVixXQUFSLEtBQXdCLEtBQXhCLElBQWlDMVYsUUFBUStJLE1BQXpDLElBQW1EL0ksUUFBUStJLE1BQVIsQ0FBZUcsTUFBdEUsRUFBOEU7QUFDbkZvRCxtQkFBS21KLFFBQUwsQ0FBYzVGLElBQWQsQ0FBb0IsU0FBUSxpSEFBQTlNLENBQW1CL0MsUUFBUStJLE1BQVIsQ0FBZSxDQUFmLENBQW5CLENBQXNDLEVBQWxFO0FBQ0Q7QUFDRDtBQUNGLGVBQUssaUJBQUw7QUFDQSxlQUFLLG9CQUFMO0FBQ0UsZ0JBQUkvSSxRQUFROEMsUUFBWixFQUFzQjtBQUNwQndKLG1CQUFLbUosUUFBTCxDQUFjNUYsSUFBZCxDQUFtQjdQLFFBQVE4QyxRQUFSLENBQWlCUyxTQUFwQztBQUNEO0FBQ0Q7QUFDRixlQUFLLFVBQUw7QUFDRStJLGlCQUFLbUosUUFBTCxDQUFjNUYsSUFBZCxDQUFtQjdQLFFBQVF3QixZQUFSLENBQXFCLFdBQXJCLEtBQXFDLGNBQXhEO0FBQ0E7QUFDRjtBQWpCRjtBQW1CRDtBQUNEOEssV0FBS21KLFFBQUwsQ0FBY0UsT0FBZDtBQUNEO0FBQ0QsV0FBT3JKLEtBQUttSixRQUFaO0FBQ0QsR0F2RGtDOztBQXlEbkNHLFlBQVUvVSxHQUFWLEVBQWV3RixPQUFmLEVBQXdCO0FBQ3RCLFFBQUksQ0FBQ0EsT0FBTCxFQUFjLE9BQU8sSUFBUDtBQUNkLFFBQUlBLFFBQVF4RixHQUFSLENBQUosRUFBa0IsT0FBT0EsR0FBUDtBQUNsQixXQUFPTCxPQUFPRyxJQUFQLENBQVkwRixPQUFaLEVBQXFCd1AsSUFBckIsQ0FBMEJDLFVBQVVqVixJQUFJa1YsS0FBSixDQUFXLElBQUdELE1BQU8sR0FBckIsQ0FBcEMsQ0FBUDtBQUNELEdBN0RrQzs7QUErRG5DRSw0QkFBMEJsVCxRQUExQixFQUFvQztBQUNsQyxRQUFNNEosT0FBTzFMLE9BQU82SCxRQUFQLENBQWdCZ0UsT0FBaEIsRUFBYjtBQUNBLFFBQUksQ0FBQ0gsSUFBTCxFQUFXLE9BQU81SixRQUFQO0FBQ1gsUUFBTWlULFFBQVEsS0FBS0gsU0FBTCxDQUFlbEosSUFBZixFQUFxQjVKLFNBQVNqQixVQUFULENBQW9CMlMsTUFBekMsQ0FBZDtBQUNBLFFBQUksQ0FBQ3VCLEtBQUwsRUFBWSxPQUFPalQsUUFBUDtBQUNaLFFBQU1qQixhQUFhckIsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JxQyxTQUFTakIsVUFBVCxDQUFvQjJTLE1BQXBCLENBQTJCdUIsS0FBM0IsQ0FBbEIsQ0FBbkI7O0FBRUEsUUFBSSxDQUFDdlYsT0FBT0csSUFBUCxDQUFZa0IsVUFBWixFQUF3QnFILE1BQTdCLEVBQXFDLE9BQU9wRyxRQUFQO0FBQ3JDLFdBQU85QixPQUFPNkgsUUFBUCxDQUFnQm9OLGVBQWhCLENBQWdDblQsUUFBaEMsRUFBMENqQixVQUExQyxDQUFQO0FBQ0QsR0F4RWtDOztBQTBFbkNxVSwyQkFBeUI1SixJQUF6QixFQUErQnhKLFFBQS9CLEVBQXlDO0FBQ3ZDLFFBQU1xVCxVQUFVblYsT0FBTzZILFFBQVAsQ0FBZ0IyTSxVQUFoQixDQUEyQmxKLElBQTNCLENBQWhCO0FBQ0EsUUFBSSxDQUFDNkosT0FBTCxFQUFjLE9BQU9yVCxRQUFQOztBQUVkLFFBQUksQ0FBQ0EsU0FBU2pCLFVBQVQsQ0FBb0I2QixLQUF6QixFQUFnQztBQUM5QixhQUFPWixRQUFQO0FBQ0Q7QUFDRCxRQUFNakIsYUFBYSxFQUFuQjtBQUNBc1UsWUFBUXZWLE9BQVIsQ0FBaUJ3VixDQUFELElBQU87QUFDckIsVUFBTUwsUUFBUSxLQUFLSCxTQUFMLENBQWVRLENBQWYsRUFBa0J0VCxTQUFTakIsVUFBVCxDQUFvQjZCLEtBQXRDLENBQWQ7QUFDQSxVQUFJWixTQUFTakIsVUFBVCxDQUFvQjZCLEtBQXBCLENBQTBCcVMsS0FBMUIsQ0FBSixFQUFzQztBQUNwQ3ZWLGVBQU9DLE1BQVAsQ0FBY29CLFVBQWQsRUFBMEJpQixTQUFTakIsVUFBVCxDQUFvQjZCLEtBQXBCLENBQTBCcVMsS0FBMUIsQ0FBMUI7QUFDRDtBQUNGLEtBTEQ7O0FBT0EsUUFBSSxDQUFDdlYsT0FBT0csSUFBUCxDQUFZa0IsVUFBWixFQUF3QnFILE1BQTdCLEVBQXFDLE9BQU9wRyxRQUFQOztBQUVyQyxXQUFPOUIsT0FBTzZILFFBQVAsQ0FBZ0JvTixlQUFoQixDQUFnQ25ULFFBQWhDLEVBQTBDakIsVUFBMUMsQ0FBUDtBQUNELEdBNUZrQzs7QUE4Rm5Dd1UsV0FBUy9GLEdBQVQsRUFBY3pKLEtBQWQsRUFBcUI7QUFDbkIsUUFBSXlKLElBQUlnRyxTQUFKLEtBQWtCaFIsU0FBdEIsRUFBaUM7QUFDL0JnTCxVQUFJZ0csU0FBSixHQUFnQnpQLEtBQWhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0x5SixVQUFJZ0csU0FBSixHQUFnQmhHLElBQUlnRyxTQUFKLElBQWlCelAsS0FBakM7QUFDRDtBQUNGLEdBcEdrQzs7QUFzR25DMFAsK0JBQTZCOVQsSUFBN0IsRUFBbUNzRyxNQUFuQyxFQUEyQ2pHLFFBQTNDLEVBQXFEakIsVUFBckQsRUFBaUU7QUFDL0QsUUFBSSxDQUFDQSxXQUFXNFMsU0FBaEIsRUFBMkI7QUFDekJ6VCxhQUFPNkgsUUFBUCxDQUFnQndOLFFBQWhCLENBQXlCdlQsUUFBekIsRUFBbUMsSUFBbkM7QUFDQSxhQUFPQSxRQUFQO0FBQ0Q7QUFDRCxRQUFNMFQsZ0JBQWdCLEVBQXRCO0FBQ0EsUUFBSUMsWUFBWSxLQUFoQjtBQUNBLFFBQUlDLGFBQWEsS0FBakI7QUFDQWxXLFdBQU9HLElBQVAsQ0FBWWtCLFdBQVc0UyxTQUF2QixFQUFrQzdULE9BQWxDLENBQTJDQyxHQUFELElBQVM7QUFDakQsVUFBTXlHLFdBQVd6RixXQUFXNFMsU0FBWCxDQUFxQjVULEdBQXJCLENBQWpCO0FBQ0EsVUFBSXlHLFNBQVN5TyxLQUFULENBQWUscUJBQWYsQ0FBSixFQUEyQztBQUN6Q1Usb0JBQVksSUFBWjtBQUNEO0FBQ0QsVUFBTTVQLFFBQVE3RixPQUFPNkgsUUFBUCxDQUFnQkMsZUFBaEIsQ0FDWnhCLFFBRFksRUFDRjdFLElBREUsRUFDSXNHLE1BREosRUFDWWpHLFFBRFosRUFDc0JqQixVQUR0QixFQUVYaUIsU0FBUzZULHNCQUFULElBQW1DN1QsU0FBUzZULHNCQUFULENBQWdDOVYsR0FBaEMsQ0FBcEMsSUFDSWdCLFdBQVdoQixHQUFYLENBSFEsRUFJWmlDLFNBQVM4VCxpQkFBVCxJQUE4QjlULFNBQVNFLEtBSjNCLENBQWQ7QUFLQTtBQUNBLFVBQUk2RCxVQUFVLElBQWQsRUFBb0I7QUFDcEIyUCxvQkFBYzNWLEdBQWQsSUFBcUJnRyxLQUFyQjtBQUNBLFVBQUloRyxRQUFRLE9BQVosRUFBcUI7QUFDbkIsWUFBSWdHLFVBQVUvRCxTQUFTRSxLQUF2QixFQUE4QjtBQUM1QjBULHVCQUFhLElBQWI7QUFDRDtBQUNGLE9BSkQsTUFJTyxJQUFJN1YsUUFBUSxlQUFaLEVBQTZCO0FBQ2xDLFlBQUlnRyxVQUFVL0QsU0FBUytULGFBQXZCLEVBQXNDO0FBQ3BDSCx1QkFBYSxJQUFiO0FBQ0Q7QUFDRixPQUpNLE1BSUEsSUFBSTdQLFVBQVVoRixXQUFXaEIsR0FBWCxDQUFkLEVBQStCO0FBQ3BDNlYscUJBQWEsSUFBYjtBQUNEO0FBQ0YsS0F4QkQ7QUF5QkExVixXQUFPNkgsUUFBUCxDQUFnQndOLFFBQWhCLENBQXlCdlQsUUFBekIsRUFBbUMsQ0FBQzJULFNBQXBDO0FBQ0EsUUFBSSxDQUFDQyxVQUFMLEVBQWlCO0FBQ2YsYUFBTzVULFFBQVA7QUFDRDtBQUNELFFBQUlBLFNBQVNqQixVQUFULEtBQXdCQSxVQUE1QixFQUF3QztBQUN0QztBQUNBLFVBQU04QixTQUFTM0MsT0FBTzZILFFBQVAsQ0FBZ0JvTixlQUFoQixDQUFnQ25ULFFBQWhDLEVBQTBDMFQsYUFBMUMsQ0FBZjtBQUNBLFVBQUloVyxPQUFPc1csU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUixhQUFyQyxFQUFvRCxPQUFwRCxDQUFKLEVBQWtFO0FBQ2hFLFlBQUlBLGNBQWN4VCxLQUFkLEtBQXdCLElBQTVCLEVBQWtDO0FBQ2hDVyxpQkFBT1gsS0FBUCxHQUFlb0YsT0FBT29PLGNBQWN4VCxLQUFyQixDQUFmO0FBQ0FXLGlCQUFPaVQsaUJBQVAsR0FBMkI5VCxTQUFTRSxLQUFwQztBQUNEO0FBQ0Y7QUFDRCxVQUFJeEMsT0FBT3NXLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1IsYUFBckMsRUFBb0QsZUFBcEQsQ0FBSixFQUEwRTtBQUN4RTdTLGVBQU9rVCxhQUFQLEdBQXVCTCxjQUFjSyxhQUFyQztBQUNBbFQsZUFBT3NULHdCQUFQLEdBQWtDblUsU0FBUytULGFBQTNDO0FBQ0Q7QUFDRDdWLGFBQU82SCxRQUFQLENBQWdCd04sUUFBaEIsQ0FBeUIxUyxNQUF6QixFQUFpQyxDQUFDOFMsU0FBbEM7QUFDQSxhQUFPOVMsTUFBUDtBQUNEO0FBQ0Q7QUFDQSxXQUFPbkQsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JxQyxRQUFsQixDQUFQO0FBQ0QsR0E3SmtDOztBQStKbkNvVSxzQkFBb0J6VSxJQUFwQixFQUEwQnNHLE1BQTFCLEVBQWtDakcsUUFBbEMsRUFBNEM7QUFDMUMsUUFBTXFVLFlBQVluVyxPQUFPNkgsUUFBUCxDQUFnQjBOLDRCQUFoQixDQUNoQjlULElBRGdCLEVBQ1ZzRyxNQURVLEVBQ0ZqRyxRQURFLEVBQ1FBLFNBQVNqQixVQURqQixDQUFsQjtBQUVBLFFBQUk2VSxhQUFjUyxjQUFjclUsUUFBaEM7O0FBRUEsYUFBU3NVLGVBQVQsQ0FBeUI5RyxHQUF6QixFQUE4QjtBQUM1QixVQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNWOVAsYUFBTytHLE1BQVAsQ0FBYytJLEdBQWQsRUFBbUIxUCxPQUFuQixDQUE0QmlCLFVBQUQsSUFBZ0I7QUFDekMsWUFBTThCLFNBQVMzQyxPQUFPNkgsUUFBUCxDQUFnQjBOLDRCQUFoQixDQUNiOVQsSUFEYSxFQUNQc0csTUFETyxFQUNDb08sU0FERCxFQUNZdFYsVUFEWixDQUFmO0FBRUE2VSxzQkFBZS9TLFdBQVd3VCxTQUExQjtBQUNELE9BSkQ7QUFLQUMsc0JBQWdCOUcsSUFBSWtFLE1BQXBCO0FBQ0E0QyxzQkFBZ0I5RyxJQUFJNU0sS0FBcEI7QUFDRDs7QUFFRDBULG9CQUFnQnRVLFNBQVNqQixVQUFULENBQW9CMlMsTUFBcEM7QUFDQTRDLG9CQUFnQnRVLFNBQVNqQixVQUFULENBQW9CNkIsS0FBcEM7QUFDQSxRQUFJeVQsY0FBY3JVLFFBQWxCLEVBQTRCLE9BQU9xVSxTQUFQO0FBQzVCLFFBQUlULFVBQUosRUFBZ0I7QUFDZCxhQUFPbFcsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JxQyxRQUFsQixDQUFQO0FBQ0Q7QUFDRCxXQUFPQSxRQUFQO0FBQ0QsR0F0TGtDOztBQXdMbkNtVCxrQkFBZ0JuVCxRQUFoQixFQUEwQmpCLFVBQTFCLEVBQXNDO0FBQ3BDLFdBQU87QUFDTDBCLGlCQUFXVCxTQUFTUyxTQURmO0FBRUxQLGFBQU9GLFNBQVNFLEtBRlg7QUFHTG5CLGtCQUFZckIsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JxQyxTQUFTakIsVUFBM0IsRUFBdUNBLFVBQXZDLENBSFA7QUFJTDhVLDhCQUF3QjdULFNBQVNqQixVQUo1QjtBQUtMd1Ysb0JBQWN2VSxTQUFTdVU7QUFMbEIsS0FBUDtBQU9ELEdBaE1rQzs7QUFrTW5DN00sb0JBQWtCOEIsSUFBbEIsRUFBd0J4SixRQUF4QixFQUFrQ21GLFFBQWxDLEVBQTRDcVAsV0FBNUMsRUFBeUQ7QUFDdkQsUUFBSXJQLFFBQUosRUFBYyxPQUFPbkYsUUFBUDtBQUNkLFFBQUl3TixNQUFNdFAsT0FBTzZILFFBQVAsQ0FBZ0JtTix5QkFBaEIsQ0FBMENsVCxRQUExQyxDQUFWO0FBQ0F3TixVQUFNdFAsT0FBTzZILFFBQVAsQ0FBZ0JxTix3QkFBaEIsQ0FBeUM1SixJQUF6QyxFQUErQ2dFLEdBQS9DLENBQU47QUFDQUEsVUFBTXRQLE9BQU82SCxRQUFQLENBQWdCME4sNEJBQWhCLENBQ0pqSyxLQUFLN0osSUFERCxFQUNPNkosS0FBSzdKLElBQUwsQ0FBVXNHLE1BRGpCLEVBQ3lCdUgsR0FEekIsRUFDOEJBLElBQUl6TyxVQURsQyxDQUFOOztBQUdBLFFBQUl5TyxRQUFReE4sUUFBUixJQUFvQndOLElBQUl6TyxVQUFKLENBQWVtQyxNQUFuQyxJQUE2Q3NULFdBQWpELEVBQThEO0FBQzVELGFBQU8sSUFBUDtBQUNEO0FBQ0QsV0FBT2hILEdBQVA7QUFDRCxHQTdNa0M7O0FBK01uQ2lILG1CQUFpQjtBQUNmLFFBQU1DLG9CQUFvQnhXLE9BQU82SCxRQUFQLENBQWdCd00sbUJBQWhCLENBQW9DalUsUUFBcEMsRUFBOEMsQ0FDdEUsZ0JBRHNFLEVBRXRFLHFCQUZzRSxDQUE5QyxDQUExQjtBQUdBLFFBQUlvVyxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUI7QUFDQXhXLGFBQU9pTCxVQUFQLENBQWtCakwsT0FBTzZILFFBQVAsQ0FBZ0IwTyxjQUFsQyxFQUFrRCxJQUFsRDtBQUNBO0FBQ0Q7O0FBRUQsUUFBTUUsVUFBVXpXLE9BQU82SCxRQUFQLENBQWdCd00sbUJBQWhCLENBQW9DbUMsaUJBQXBDLEVBQXVELENBQ3JFLGVBRHFFLEVBRXJFLHdCQUZxRSxDQUF2RCxDQUFoQjtBQUdBLFFBQUlDLFlBQVksSUFBaEIsRUFBc0I7QUFDdEIsUUFBTUMsT0FBTzFXLE9BQU82SCxRQUFQLENBQWdCcU0sYUFBaEIsQ0FBOEJ1QyxPQUE5QixFQUF1QyxPQUF2QyxLQUFtREEsUUFBUTlFLENBQVIsQ0FBVStFLElBQTFFO0FBQ0EsUUFBTUMsUUFBUUQsS0FBS3JMLGdCQUFMLENBQXNCLGtCQUF0QixDQUFkO0FBQ0FzTCxVQUFNL1csT0FBTixDQUFlZ1gsSUFBRCxJQUFVO0FBQ3RCLFVBQUlBLEtBQUtsQyxXQUFULEVBQXNCO0FBQ3BCLFlBQU1wRixNQUFNdFAsT0FBTzZILFFBQVAsQ0FBZ0IyQixpQkFBaEIsQ0FDVm9OLElBRFUsRUFFVkEsS0FBS2xDLFdBRkssRUFHVixLQUhVLENBR0o7QUFISSxVQUlWLEtBSlUsQ0FJSixpQkFKSSxDQUFaO0FBS0EsWUFBSXBGLFFBQVFzSCxLQUFLbEMsV0FBYixJQUE0QnBGLElBQUl6TyxVQUFKLENBQWUwRCxhQUEvQyxFQUE4RDtBQUM1RCxjQUFNc1MsV0FBVzdXLE9BQU82SCxRQUFQLENBQWdCcU0sYUFBaEIsQ0FBOEIwQyxJQUE5QixFQUFvQyxPQUFwQyxDQUFqQjtBQUNBQyxtQkFBU0MsV0FBVCxHQUF1QnhILElBQUl6TyxVQUFKLENBQWUwRCxhQUF0QztBQUNEO0FBQ0Y7QUFDRixLQVpEO0FBYUQsR0E1T2tDOztBQThPbkN3UyxpQkFBZUMsT0FBZixFQUF3QjtBQUN0QixRQUFNQyxlQUFlalgsT0FBTzZILFFBQVAsQ0FBZ0J3TSxtQkFBaEIsQ0FBb0NqVSxRQUFwQyxFQUE4QyxDQUNqRSxnQkFEaUUsRUFFakUscUJBRmlFLEVBR2pFLGVBSGlFLENBQTlDLENBQXJCO0FBSUEsUUFBSTZXLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QjtBQUNBalgsYUFBT2lMLFVBQVAsQ0FDRWpMLE9BQU82SCxRQUFQLENBQWdCa1AsY0FBaEIsQ0FBK0IvRixJQUEvQixDQUFvQyxJQUFwQyxFQUEwQ2dHLE9BQTFDLENBREYsRUFFRSxJQUZGO0FBR0E7QUFDRDtBQUNEQyxpQkFBYUMsSUFBYixDQUFrQnRYLE9BQWxCLENBQTJCdVgsR0FBRCxJQUFTO0FBQ2pDQSxVQUFJQyxjQUFKLENBQW1CSCxhQUFhSSxrQkFBaEM7QUFDRCxLQUZEO0FBR0FKLGlCQUFhQyxJQUFiLEdBQW9CRixRQUFRcFAsR0FBUixDQUFhbUgsS0FBRCxJQUFXO0FBQ3pDLFVBQU1vSSxNQUFNblgsT0FBT3NYLFVBQVAsQ0FBbUIsZUFBY3ZJLEtBQU0sS0FBdkMsQ0FBWjtBQUNBb0ksVUFBSUksV0FBSixDQUFnQk4sYUFBYUksa0JBQTdCO0FBQ0EsYUFBT0YsR0FBUDtBQUNELEtBSm1CLENBQXBCO0FBS0FGLGlCQUFhSSxrQkFBYjtBQUNELEdBblFrQzs7QUFxUW5DRyxrQkFBZ0I7QUFDZCxRQUFNZCxPQUFPMVcsT0FBTzZILFFBQVAsQ0FBZ0JxTSxhQUFoQixDQUE4QjlULFFBQTlCLEVBQXdDLGdCQUF4QyxDQUFiO0FBQ0EsUUFBTXFYLGFBQWFmLEtBQUtqVixJQUFMLENBQVVzRyxNQUFWLENBQWlCLHVCQUFqQixDQUFuQjtBQUNBLFFBQUksQ0FBQzBQLFVBQUwsRUFBaUI7QUFDakIsUUFBSUEsV0FBVzVXLFVBQVgsQ0FBc0JtVyxPQUExQixFQUFtQztBQUNqQ2hYLGFBQU82SCxRQUFQLENBQWdCa1AsY0FBaEIsQ0FBK0JVLFdBQVc1VyxVQUFYLENBQXNCbVcsT0FBckQ7QUFDRDtBQUNELFFBQUlTLFdBQVc1VyxVQUFYLENBQXNCNlcsZUFBMUIsRUFBMkM7QUFDekMsVUFBSTFYLE9BQU91RCxpQkFBUCxJQUE0QnZELE9BQU91RCxpQkFBUCxDQUF5QmEsc0JBQXpELEVBQWlGO0FBQy9FcVQsbUJBQVc1VyxVQUFYLENBQXNCNlcsZUFBdEIsQ0FBc0M5WCxPQUF0QyxDQUErQ3FOLElBQUQsSUFBVTtBQUN0RCxjQUFJLENBQUN6TixPQUFPc1csU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQ0hoVyxPQUFPdUQsaUJBQVAsQ0FBeUJhLHNCQUR0QixFQUM4QzZJLElBRDlDLENBQUwsRUFDMEQ7QUFDeERqTixtQkFBT3VELGlCQUFQLENBQXlCYSxzQkFBekIsQ0FBZ0Q2SSxJQUFoRCxJQUF3RDNJLFNBQXhEO0FBQ0Q7QUFDRixTQUxEO0FBTUQ7QUFDRjtBQUNGLEdBdFJrQzs7QUF3Um5DcVQsc0JBQW9CO0FBQ2xCLFFBQUksQ0FBQzNYLE9BQU80WCxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsVUFBekIsQ0FBb0MsU0FBcEMsQ0FBTCxFQUFxRDtBQUNyRCxRQUFNQyxnQkFBZ0IvWCxPQUFPNkgsUUFBUCxDQUFnQndNLG1CQUFoQixDQUFvQ2pVLFFBQXBDLEVBQThDLENBQ2xFLGdCQURrRSxFQUVsRSxxQkFGa0UsRUFHbEUsd0JBSGtFLEVBSWxFLGlCQUprRSxDQUE5QyxDQUF0QjtBQUtBLFFBQUksQ0FBQzJYLGFBQUwsRUFBb0I7QUFDbEI7QUFDQS9YLGFBQU9pTCxVQUFQLENBQWtCakwsT0FBTzZILFFBQVAsQ0FBZ0I4UCxpQkFBbEMsRUFBcUQsR0FBckQ7QUFDQTtBQUNEO0FBQ0QsUUFBTUsscUJBQXFCaFksT0FBTzZILFFBQVAsQ0FBZ0J3TSxtQkFBaEIsQ0FBb0MwRCxhQUFwQyxFQUFtRCxDQUM1RSxxQkFENEUsRUFFNUUsc0JBRjRFLENBQW5ELENBQTNCO0FBR0EsUUFBSUMsa0JBQUosRUFBd0I7QUFDdEI7QUFDQSxVQUFJQSxtQkFBbUJ6TixRQUFuQixJQUErQixDQUFDeU4sbUJBQW1CQyxRQUF2RCxFQUFpRTtBQUMvREQsMkJBQW1CQyxRQUFuQixHQUE4QixJQUE5QjtBQUNBRCwyQkFBbUJFLHNCQUFuQixHQUE0Q0YsbUJBQW1CRyxjQUEvRDtBQUNBSCwyQkFBbUJJLHVCQUFuQixHQUE2Q0osbUJBQW1CSyxlQUFoRTtBQUNBTCwyQkFBbUJNLDJCQUFuQixHQUFpRE4sbUJBQW1CTyxtQkFBcEU7QUFDQVAsMkJBQW1CRyxjQUFuQixHQUFvQyxDQUFDMVcsSUFBRCxFQUFPK1csSUFBUCxLQUNsQ0EsU0FBUyxVQUFULElBQXVCUixtQkFBbUJFLHNCQUFuQixDQUEwQ3pXLElBQTFDLEVBQWdEK1csSUFBaEQsQ0FEekI7QUFFQVIsMkJBQW1CSyxlQUFuQixHQUFxQyxDQUFDRyxJQUFELEVBQU9qTyxRQUFQLEtBQ2xDaU8sU0FBUyxVQUFULEdBQXNCLFdBQXRCLEdBQW9DUixtQkFBbUJJLHVCQUFuQixDQUEyQ0ksSUFBM0MsRUFBaURqTyxRQUFqRCxDQUR2QztBQUVBeU4sMkJBQW1CTyxtQkFBbkIsR0FBeUMsQ0FBQ0MsSUFBRCxFQUFPak8sUUFBUCxLQUN0Q2lPLFNBQVMsVUFBVCxHQUFzQixjQUF0QixHQUF1Q1IsbUJBQW1CTSwyQkFBbkIsQ0FBK0NFLElBQS9DLEVBQXFEak8sUUFBckQsQ0FEMUM7QUFFRDtBQUNELFVBQUksQ0FBQ3lOLG1CQUFtQlMsS0FBbkIsQ0FBeUI1TyxJQUF6QixDQUE4QjZPLFFBQVFBLFNBQVMsVUFBVCxJQUF1QkEsS0FBS2hYLE1BQUwsS0FBZ0IsVUFBN0UsQ0FBTCxFQUErRjtBQUM3RnNXLDJCQUFtQm5KLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDbUosbUJBQW1Cek4sUUFBbkIsR0FBOEIsVUFBOUIsR0FBMkM7QUFDMUU3SSxrQkFBUSxVQURrRTtBQUUxRWlYLG1CQUFTLFdBRmlFO0FBRzFFbFUsdUJBQWEsZ0JBSDZEO0FBSTFFbVUsa0JBQVE7QUFKa0UsU0FBNUU7QUFNRDtBQUNGO0FBQ0QsUUFBTUMsc0JBQXNCLE1BQU07QUFDaEMsVUFBTUMsbUJBQW1CMVksU0FBU2UsYUFBVCxDQUF1QixxQkFBdkIsQ0FBekI7QUFDQTJYLHVCQUFpQnJOLE1BQWpCLEdBQTBCc00sY0FBY3RNLE1BQXhDO0FBQ0FxTix1QkFBaUJ2WSxZQUFqQixDQUE4QixXQUE5QixFQUEyQyxVQUEzQztBQUNBLGFBQU91WSxnQkFBUDtBQUNELEtBTEQ7O0FBT0EsUUFBTUMsWUFBWS9ZLE9BQU82SCxRQUFQLENBQWdCcU0sYUFBaEIsQ0FBOEI2RCxhQUE5QixFQUE2QyxZQUE3QyxDQUFsQjtBQUNBLFFBQUlnQixTQUFKLEVBQWU7QUFDYixVQUFJQSxVQUFVQyxnQkFBVixDQUEyQi9YLE9BQTNCLEtBQXVDLHFCQUEzQyxFQUFrRTtBQUNoRSxZQUFNNlgsbUJBQW1CRCxxQkFBekI7QUFDQUUsa0JBQVV4WCxXQUFWLENBQXNCdVgsZ0JBQXRCO0FBQ0FDLGtCQUFVN0gsZ0JBQVYsQ0FBMkIsb0JBQTNCLEVBQWlELE1BQU07QUFDckQsY0FBSWxSLE9BQU80WCxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsVUFBekIsQ0FBb0Msa0JBQXBDLENBQUosRUFBNkQ7QUFDM0RpQixzQkFBVUUsTUFBVixDQUFpQixVQUFqQjtBQUNEO0FBQ0YsU0FKRDtBQUtEO0FBQ0YsS0FWRCxNQVVPO0FBQ0wsVUFBTXRZLE9BQU9vWCxjQUFjM0QsVUFBZCxJQUE0QjJELGFBQXpDO0FBQ0EsVUFBSXBYLEtBQUtxWSxnQkFBTCxDQUFzQi9YLE9BQXRCLEtBQWtDLHFCQUF0QyxFQUE2RDtBQUMzRCxZQUFNNlgsb0JBQW1CRCxxQkFBekI7QUFDQWxZLGFBQUtZLFdBQUwsQ0FBaUJ1WCxpQkFBakI7QUFDRDtBQUNELFVBQU1JLFVBQVVsWixPQUFPNFgsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLFVBQXpCLENBQW9DLGtCQUFwQyxDQUFoQjtBQUNBblgsV0FBS3FZLGdCQUFMLENBQXNCbk8sS0FBdEIsQ0FBNEJpRCxPQUE1QixHQUFzQ29MLFVBQVUsRUFBVixHQUFlLE1BQXJEO0FBQ0Q7QUFDRixHQXpWa0M7O0FBMlZuQ0Msc0JBQW9CO0FBQ2xCLFFBQU1DLGdCQUFnQjFRLGVBQWVHLEdBQWYsQ0FBbUIsZ0JBQW5CLENBQXRCO0FBQ0EsUUFBSSxDQUFDdVEsYUFBRCxJQUFrQixDQUFDQSxjQUFjdEQsU0FBZCxDQUF3QnVELFdBQS9DLEVBQTREO0FBQzVELFFBQU1DLGlCQUFpQkYsY0FBY3RELFNBQWQsQ0FBd0J1RCxXQUEvQztBQUNBRCxrQkFBY3RELFNBQWQsQ0FBd0J1RCxXQUF4QixHQUFzQyxTQUFTRSxNQUFULENBQWdCakssR0FBaEIsRUFBcUI7QUFDekQ7QUFEeUQsVUFFakQ3TixJQUZpRCxHQUV4QyxJQUZ3QyxDQUVqREEsSUFGaUQ7O0FBR3pELFVBQUk2TixJQUFJdkgsTUFBUixFQUFnQjtBQUNkdkksZUFBT0csSUFBUCxDQUFZMlAsSUFBSXZILE1BQWhCLEVBQXdCbkksT0FBeEIsQ0FBaUNDLEdBQUQsSUFBUztBQUN2QyxjQUFNK0MsU0FBUzBNLElBQUl2SCxNQUFKLENBQVdsSSxHQUFYLENBQWY7QUFDQSxjQUFJK0MsT0FBTzBTLFNBQVgsRUFBc0I7QUFDdEIsY0FBTWtFLFlBQVl4WixPQUFPNkgsUUFBUCxDQUFnQnFPLG1CQUFoQixDQUFvQ3pVLElBQXBDLEVBQTBDNk4sSUFBSXZILE1BQTlDLEVBQXNEbkYsTUFBdEQsQ0FBbEI7QUFDQSxjQUFJbkIsS0FBS3NHLE1BQUwsSUFBZW5GLFdBQVduQixLQUFLc0csTUFBTCxDQUFZbEksR0FBWixDQUE5QixFQUFnRDtBQUM5QztBQUNBeVAsZ0JBQUl2SCxNQUFKLENBQVdsSSxHQUFYLElBQWtCMlosU0FBbEI7QUFDRCxXQUhELE1BR08sSUFBSTVXLFdBQVc0VyxTQUFmLEVBQTBCO0FBQy9CO0FBQ0FsSyxnQkFBSXZILE1BQUosQ0FBV2xJLEdBQVgsSUFBa0IyWixTQUFsQjtBQUNEO0FBQ0YsU0FYRDtBQVlEO0FBQ0RGLHFCQUFldEQsSUFBZixDQUFvQixJQUFwQixFQUEwQjFHLEdBQTFCO0FBQ0EsVUFBSUEsSUFBSXJRLE1BQUosSUFBY3dDLEtBQUtnWSxhQUF2QixFQUFzQztBQUNwQ2hZLGFBQUtnWSxhQUFMLENBQW1CN1osT0FBbkIsQ0FBMkI4WixVQUFVQSxPQUFPQyxZQUFQLENBQW9CRCxPQUFPMVgsS0FBM0IsQ0FBckM7QUFDQVAsYUFBS2dZLGFBQUwsR0FBcUJuVixTQUFyQjtBQUNEO0FBQ0YsS0F0QkQ7QUF1QkEsUUFBTW9TLE9BQU8xVyxPQUFPNkgsUUFBUCxDQUFnQnFNLGFBQWhCLENBQThCOVQsUUFBOUIsRUFBd0MsZ0JBQXhDLENBQWI7QUFDQSxRQUFJc1csS0FBS2pWLElBQUwsSUFBYWlWLEtBQUtqVixJQUFMLENBQVVzRyxNQUEzQixFQUFtQztBQUNqQzJPLFdBQUsyQyxXQUFMLENBQWlCLEVBQUV0UixRQUFRMk8sS0FBS2pWLElBQUwsQ0FBVXNHLE1BQXBCLEVBQWpCO0FBQ0Q7QUFDRixHQTFYa0M7O0FBNFhuQzZSLHdCQUFzQjtBQUNwQixRQUFNM0MsZUFBZXZPLGVBQWVHLEdBQWYsQ0FBbUIsZUFBbkIsQ0FBckI7QUFDQSxRQUFJLENBQUNvTyxZQUFELElBQWlCLENBQUNBLGFBQWFuQixTQUFiLENBQXVCK0Qsa0JBQTdDLEVBQWlFO0FBQ2pFNUMsaUJBQWFuQixTQUFiLENBQXVCK0Qsa0JBQXZCLEdBQTRDLENBQUNwWSxJQUFELEVBQU9VLFFBQVAsS0FBb0I7QUFDOUQsVUFBSVYsS0FBS3NHLE1BQUwsQ0FBWTVGLFFBQVosRUFBc0J0QixVQUF0QixDQUFpQ21DLE1BQXJDLEVBQTZDLE9BQU8sS0FBUDtBQUM3QyxVQUFNOFcsV0FBVyxFQUFqQjtBQUNBdGEsYUFBTytHLE1BQVAsQ0FBYzlFLEtBQUtzRyxNQUFuQixFQUEyQm5JLE9BQTNCLENBQW9DZ0QsTUFBRCxJQUFZO0FBQzdDLFlBQUlBLE9BQU8vQixVQUFQLElBQXFCK0IsT0FBTy9CLFVBQVAsQ0FBa0IrUyxvQkFBM0MsRUFBaUU7QUFDL0QsY0FBTW1HLGtCQUFrQm5YLE9BQU9MLFNBQS9CO0FBQ0EsY0FBSXVYLFNBQVNDLGVBQVQsQ0FBSixFQUErQjtBQUMvQkQsbUJBQVNDLGVBQVQsSUFBNEJuWCxNQUE1QjtBQUNBLGNBQUlBLE9BQU8vQixVQUFQLENBQWtCaUMsSUFBdEIsRUFBNEI7QUFDMUJ0RCxtQkFBT0MsTUFBUCxDQUNFcWEsUUFERixFQUNZLDhHQUFBalgsQ0FBZ0JwQixLQUFLc0csTUFBckIsRUFBNkJuRixNQUE3QixDQURaO0FBRUQ7QUFDRjtBQUNGLE9BVkQ7QUFXQSxhQUFPLENBQUNrWCxTQUFTM1gsUUFBVCxDQUFSO0FBQ0QsS0FmRDtBQWdCRCxHQS9Za0M7O0FBaVpuQztBQUNBNlgsb0JBQWtCMVIsV0FBbEIsRUFBK0I7QUFDN0IsUUFBTTJSLFFBQVF2UixlQUFlRyxHQUFmLENBQW1CUCxXQUFuQixDQUFkO0FBQ0EsUUFBSSxDQUFDMlIsS0FBRCxJQUFVLENBQUNBLE1BQU1uRSxTQUFyQixFQUFnQztBQUNoQ3RXLFdBQU8wYSxjQUFQLENBQXNCRCxNQUFNbkUsU0FBNUIsRUFBdUMsVUFBdkMsRUFBbUQ7QUFDakRqTixZQUFNO0FBQ0osaUJBQVNzUixjQUFULENBQXdCelQsQ0FBeEIsRUFBMkI7QUFDekIsY0FBSSxLQUFLNUUsUUFBTCxJQUFpQixLQUFLQSxRQUFMLENBQWNqQixVQUEvQixJQUNBLEtBQUtpQixRQUFMLENBQWNqQixVQUFkLENBQXlCdVosV0FEN0IsRUFDMEM7QUFDeEMsbUJBQU8sS0FBS3RZLFFBQUwsQ0FBY2pCLFVBQWQsQ0FBeUJ1WixXQUFoQztBQUNEO0FBQ0QsaUJBQU8sS0FBS0MsTUFBTCxDQUFZOVAsUUFBWixDQUFxQjdELENBQXJCLENBQVA7QUFDRDtBQUNELGVBQU95VCxjQUFQO0FBQ0QsT0FWZ0Q7QUFXakRHLFlBQU0sQ0FBRTtBQVh5QyxLQUFuRDtBQWFELEdBbGFrQzs7QUFvYW5DO0FBQ0FDLDZCQUEyQjtBQUN6QixRQUFNQyxvQkFBb0I5UixlQUFlRyxHQUFmLENBQW1CLHNCQUFuQixDQUExQjtBQUNBLFFBQUksQ0FBQzJSLGlCQUFELElBQXNCLENBQUNBLGtCQUFrQjFFLFNBQWxCLENBQTRCNkQsWUFBdkQsRUFBcUU7QUFDckU7QUFDQWEsc0JBQWtCMUUsU0FBbEIsQ0FBNEI2RCxZQUE1QixHQUEyQyxTQUFTSixNQUFULENBQWdCelgsUUFBaEIsRUFBMEI7QUFDbkU7QUFDQSxVQUFJQSxTQUFTakIsVUFBVCxDQUFvQm5CLEtBQXhCLEVBQStCO0FBQzdCLFlBQUksS0FBSytCLElBQUwsQ0FBVXhDLE1BQVYsS0FBcUIsSUFBekIsRUFBK0I7QUFDN0IsZUFBS3dDLElBQUwsQ0FBVWdZLGFBQVYsR0FBMEIsS0FBS2hZLElBQUwsQ0FBVWdZLGFBQVYsSUFBMkIsRUFBckQ7QUFDQSxlQUFLaFksSUFBTCxDQUFVZ1ksYUFBVixDQUF3QjVLLElBQXhCLENBQTZCLElBQTdCO0FBQ0QsU0FIRCxNQUdPO0FBQ0w5UCxVQUFBLGlIQUFBQSxDQUNFLElBREYsRUFFRSxLQUFLMEMsSUFBTCxDQUFVeEMsTUFBVixJQUFvQixFQUFFSyxlQUFlLFNBQWpCLEVBQTRCTCxRQUFRLEVBQXBDLEVBRnRCLEVBR0U2QyxTQUFTakIsVUFBVCxDQUFvQm5CLEtBQXBCLElBQTZCLFNBSC9CO0FBSUQ7QUFDRjtBQUNELFdBQUtLLFlBQUw7QUFDQSxVQUFJLEtBQUswYSxhQUFULEVBQXdCO0FBQ3RCO0FBQ0EsYUFBS0EsYUFBTCxDQUFtQjNZLFFBQW5CO0FBQ0Q7QUFDRixLQWxCRDtBQW1CRCxHQTVia0M7O0FBOGJuQzRZLHNCQUFvQjtBQUNsQixRQUFNQyxhQUFhalMsZUFBZUcsR0FBZixDQUFtQixhQUFuQixDQUFuQjtBQUNBLFFBQUksQ0FBQzhSLFVBQUQsSUFBZSxDQUFDQSxXQUFXN0UsU0FBWCxDQUFxQjhFLG9CQUF6QyxFQUErRDtBQUMvRCxRQUFNQywrQkFBK0JGLFdBQVc3RSxTQUFYLENBQXFCOEUsb0JBQTFEO0FBQ0E7QUFDQUQsZUFBVzdFLFNBQVgsQ0FBcUI4RSxvQkFBckIsR0FBNEMsU0FBU0UsMEJBQVQsQ0FBb0NoWixRQUFwQyxFQUE4QztBQUN4RixVQUFJQSxTQUFTakIsVUFBVCxDQUFvQmthLFVBQXBCLElBQWtDLENBQUNqWixTQUFTakIsVUFBVCxDQUFvQndELGNBQTNELEVBQTJFO0FBQ3pFLGFBQUt3RyxLQUFMLENBQVdtUSxlQUFYLEdBQTZCLEVBQTdCO0FBQ0F4YixlQUFPQyxNQUFQLENBQWMsS0FBS2tTLENBQUwsQ0FBTzFOLElBQVAsQ0FBWTRHLEtBQTFCLEVBQWlDO0FBQy9CaUQsbUJBQVMsUUFEc0I7QUFFL0JtTixpQkFBT25aLFNBQVNqQixVQUFULENBQW9Ca2EsVUFGSTtBQUcvQi9TLGtCQUFRO0FBSHVCLFNBQWpDO0FBS0QsT0FQRCxNQU9PO0FBQ0w2UyxxQ0FBNkI3RSxJQUE3QixDQUFrQyxJQUFsQyxFQUF3Q2xVLFFBQXhDO0FBQ0Q7QUFDRixLQVhEO0FBWUQsR0EvY2tDOztBQWlkbkNvWix3QkFBc0I7QUFDcEIsUUFBTUMsZUFBZXpTLGVBQWVHLEdBQWYsQ0FBbUIsZUFBbkIsQ0FBckI7QUFDQSxRQUFJLENBQUNzUyxZQUFELElBQWlCLENBQUNBLGFBQWFyRixTQUFiLENBQXVCc0YsbUJBQXpDLElBQ0QsQ0FBQ3BiLE9BQU91RCxpQkFEWCxFQUM4QjtBQUM5QjtBQUNBNFgsaUJBQWFyRixTQUFiLENBQXVCc0YsbUJBQXZCLEdBQTZDLFNBQVNDLHlCQUFULENBQW1DQyxZQUFuQyxFQUFpRDtBQUM1RixhQUFPOWIsT0FBT0csSUFBUCxDQUFZSyxPQUFPdUQsaUJBQVAsQ0FBeUJhLHNCQUFyQyxFQUE2RHNQLE1BQTdELENBQW9FNEgsZUFBZUEsYUFBYUMsS0FBYixDQUFtQixHQUFuQixDQUFmLEdBQXlDLEVBQTdHLENBQVA7QUFDRCxLQUZEO0FBR0QsR0F6ZGtDOztBQTJkbkNDLDJCQUF5QjtBQUN2QixRQUFJLENBQUN4YixPQUFPNFgsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLFVBQXpCLENBQW9DLFNBQXBDLENBQUwsRUFBcUQ7QUFDckQsUUFBTTJELGtCQUFrQi9TLGVBQWVHLEdBQWYsQ0FBbUIsbUJBQW5CLENBQXhCO0FBQ0EsUUFBSSxDQUFDNFMsZUFBTCxFQUFzQjtBQUNwQjtBQUNBemIsYUFBT2lMLFVBQVAsQ0FBa0JqTCxPQUFPNkgsUUFBUCxDQUFnQjJULHNCQUFsQyxFQUEwRCxHQUExRDtBQUNBO0FBQ0Q7QUFDRCxRQUFJeGIsT0FBTzZILFFBQVAsQ0FBZ0I2VCx1QkFBcEIsRUFBNkM7QUFDN0MxYixXQUFPNkgsUUFBUCxDQUFnQjZULHVCQUFoQixHQUEwQyxJQUExQzs7QUFFQSxRQUFJLENBQUMxYixPQUFPdUQsaUJBQVosRUFBK0I7QUFDL0IsUUFBSWtZLGdCQUFnQjNGLFNBQWhCLENBQTBCNkYsdUJBQTlCLEVBQXVEO0FBQ3JEO0FBQ0FGLHNCQUFnQjNGLFNBQWhCLENBQTBCNkYsdUJBQTFCLEdBQ0UsU0FBU0MsNEJBQVQsQ0FBc0MvYixHQUF0QyxFQUEyQ2dHLEtBQTNDLEVBQWtEZ1csU0FBbEQsRUFBNkQ7QUFDM0QsWUFBTWphLFNBQVM1QixPQUFPdUQsaUJBQVAsQ0FBeUJhLHNCQUF6QixDQUFnRHZFLEdBQWhELEtBQ1IsRUFBRTJFLE1BQU14RSxPQUFPdUQsaUJBQVAsQ0FBeUJLLFlBQWpDLEVBRFA7QUFFQSxlQUFPLEtBQUtrWSxlQUFMLENBQXFCamMsR0FBckIsRUFBMEIrQixPQUFPNEMsSUFBUCxLQUFnQixNQUFoQixHQUF5QnVYLEtBQUtDLFNBQUwsQ0FBZW5XLEtBQWYsQ0FBekIsR0FBaURBLEtBQTNFLEVBQWtGZ1csU0FBbEYsRUFBNkZqYSxNQUE3RixDQUFQO0FBQ0QsT0FMSDtBQU1EO0FBQ0QsUUFBSTZaLGdCQUFnQjNGLFNBQWhCLENBQTBCbUcsdUJBQTlCLEVBQXVEO0FBQ3JEO0FBQ0FSLHNCQUFnQjNGLFNBQWhCLENBQTBCbUcsdUJBQTFCLEdBQ0UsU0FBU0MsNkJBQVQsQ0FDRUMsZUFERixFQUNtQkMsZ0JBRG5CLEVBQ3FDQyxrQkFEckMsRUFDeUQ3RyxhQUR6RCxFQUN3RTtBQUN0RSxZQUFNOEcsWUFDRjljLE9BQU9HLElBQVAsQ0FBWUssT0FBT3VELGlCQUFQLENBQXlCYSxzQkFBckMsRUFDRzRELE1BREgsQ0FDV25JLEdBQUQsSUFBUztBQUNmLGNBQU02WSxPQUFPMVksT0FBT3VELGlCQUFQLENBQXlCYSxzQkFBekIsQ0FBZ0R2RSxHQUFoRCxDQUFiO0FBQ0EsaUJBQU82WSxTQUFTLENBQUNBLEtBQUsvVCxPQUFOLElBQWlCLENBQUMsS0FBSy9CLE1BQXZCLElBQ0U4VixLQUFLL1QsT0FBTCxDQUFhdEIsUUFBYixDQUFzQixpSEFBQXRCLENBQW1CLEtBQUthLE1BQXhCLENBQXRCLENBRFgsQ0FBUDtBQUVELFNBTEgsRUFNR29GLE1BTkgsQ0FNVSxLQUFLdVUsb0JBQUwsQ0FBMEJKLGVBQTFCLENBTlYsRUFPR25VLE1BUEgsQ0FPVSxLQUFLdVUsb0JBQUwsQ0FBMEJILGdCQUExQixDQVBWLEVBUUdwVSxNQVJILENBUVUsS0FBS3VVLG9CQUFMLENBQTBCRixrQkFBMUIsQ0FSVixFQVNHclUsTUFUSCxDQVNVLEtBQUt1VSxvQkFBTCxDQUEwQi9HLGFBQTFCLENBVFYsQ0FESjtBQVdBLGVBQU84RyxVQUFVRSxJQUFWLEdBQWlCOUksTUFBakIsQ0FBd0IsT0FBeEIsQ0FBUDtBQUNELE9BZkg7QUFnQkQ7QUFDRixHQW5nQmtDOztBQXFnQm5DK0ksc0JBQW9CO0FBQ2xCLFFBQUl6YyxPQUFPNkgsUUFBUCxDQUFnQjZVLGFBQXBCLEVBQW1DO0FBQ25DMWMsV0FBTzZILFFBQVAsQ0FBZ0I2VSxhQUFoQixHQUFnQyxJQUFoQztBQUNBMWMsV0FBTzZILFFBQVAsQ0FBZ0IrUixtQkFBaEI7QUFDQTVaLFdBQU82SCxRQUFQLENBQWdCc1IsaUJBQWhCO0FBQ0FuWixXQUFPNkgsUUFBUCxDQUFnQjBTLHdCQUFoQjtBQUNBdmEsV0FBTzZILFFBQVAsQ0FBZ0I2UyxpQkFBaEI7QUFDQTFhLFdBQU82SCxRQUFQLENBQWdCcVQsbUJBQWhCO0FBQ0FsYixXQUFPNkgsUUFBUCxDQUFnQm1TLGlCQUFoQixDQUFrQyxrQkFBbEM7QUFDQWhhLFdBQU82SCxRQUFQLENBQWdCbVMsaUJBQWhCLENBQWtDLG1CQUFsQztBQUNELEdBL2dCa0M7O0FBaWhCbkMyQyxTQUFPO0FBQ0wsUUFBSTNjLE9BQU82SCxRQUFQLENBQWdCK1UsUUFBcEIsRUFBOEI7QUFDOUI1YyxXQUFPNkgsUUFBUCxDQUFnQjRVLGlCQUFoQjtBQUNBLFFBQU0vRixPQUFPMVcsT0FBTzZILFFBQVAsQ0FBZ0JxTSxhQUFoQixDQUE4QjlULFFBQTlCLEVBQXdDLGdCQUF4QyxDQUFiO0FBQ0EsUUFBSSxDQUFDc1csS0FBS2pWLElBQU4sSUFBYyxDQUFDaVYsS0FBS2pWLElBQUwsQ0FBVXNHLE1BQTdCLEVBQXFDO0FBQ25DO0FBQ0EvSCxhQUFPaUwsVUFBUCxDQUFrQmpMLE9BQU82SCxRQUFQLENBQWdCOFUsSUFBbEMsRUFBd0MsSUFBeEM7QUFDQTtBQUNEO0FBQ0QzYyxXQUFPNkgsUUFBUCxDQUFnQitVLFFBQWhCLEdBQTJCLElBQTNCOztBQUVBNWMsV0FBTzZILFFBQVAsQ0FBZ0IyUCxhQUFoQjs7QUFFQXhYLFdBQU82SCxRQUFQLENBQWdCZ1YsUUFBaEI7QUFDQTdjLFdBQU9rUixnQkFBUCxDQUF3QixrQkFBeEIsRUFBNENsUixPQUFPaUwsVUFBUCxDQUFrQitGLElBQWxCLENBQXVCLElBQXZCLEVBQTZCaFIsT0FBTzZILFFBQVAsQ0FBZ0JnVixRQUE3QyxFQUF1RCxHQUF2RCxDQUE1QztBQUNBO0FBQ0FuTyxZQUFRb08sR0FBUixDQUFhLG1CQUFrQixtREFBUSxFQUF2QztBQUNBO0FBQ0EsUUFBSSxDQUFDOWMsT0FBTytjLGNBQVosRUFBNEI7QUFDMUIvYyxhQUFPK2MsY0FBUCxHQUF3QixFQUF4QjtBQUNEO0FBQ0QvYyxXQUFPK2MsY0FBUCxDQUFzQmxPLElBQXRCLENBQTJCO0FBQ3pCbkQsWUFBTSxVQURtQjtBQUV6QnNSLGVBQVMsbURBRmdCO0FBR3pCQyxXQUFLO0FBSG9CLEtBQTNCO0FBS0QsR0EzaUJrQzs7QUE2aUJuQ0osYUFBVztBQUNUN2MsV0FBTzZILFFBQVAsQ0FBZ0IwTyxjQUFoQjtBQUNBdlcsV0FBTzZILFFBQVAsQ0FBZ0I4UCxpQkFBaEI7QUFDQTNYLFdBQU82SCxRQUFQLENBQWdCMlQsc0JBQWhCO0FBQ0QsR0FqakJrQzs7QUFtakJuQzNQLFlBQVU7QUFDUixXQUFPN0wsT0FBT2tkLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGdCQUE1QixLQUFpRCxFQUF4RDtBQUNELEdBcmpCa0M7O0FBdWpCbkNwUixVQUFRTCxJQUFSLEVBQWM7QUFDWjFMLFdBQU9rZCxZQUFQLENBQW9CRSxPQUFwQixDQUE0QixnQkFBNUIsRUFBOEMxUixRQUFRLEVBQXREO0FBQ0QsR0F6akJrQzs7QUEyakJuQzVELGtCQUFnQnhCLFFBQWhCLEVBQTBCN0UsSUFBMUIsRUFBZ0NnQixRQUFoQyxFQUEwQ0csTUFBMUMsRUFBa0QvQixVQUFsRCxFQUE4RDRJLFNBQTlELEVBQXlFekgsS0FBekUsRUFBZ0Y7QUFDOUUsUUFBTXFiLGVBQWdCL1csU0FBU2pFLE9BQVQsQ0FBaUIsUUFBakIsS0FBOEIsQ0FBL0IsR0FBb0NpRSxRQUFwQyxHQUFnRCxZQUFXQSxRQUFTLEtBQXpGO0FBQ0EsUUFBSTtBQUNGO0FBQ0EsVUFBTWdYLE9BQU8sSUFBSUMsUUFBSixDQUNYLE1BRFcsRUFDSCxVQURHLEVBQ1MsUUFEVCxFQUNtQixZQURuQixFQUNpQyxXQURqQyxFQUM4QyxPQUQ5QyxFQUN1REYsWUFEdkQsQ0FBYjtBQUVBO0FBQ0EsYUFBT0MsS0FBSzdiLElBQUwsRUFBV2dCLFFBQVgsRUFBcUJHLE1BQXJCLEVBQTZCL0IsVUFBN0IsRUFBeUM0SSxTQUF6QyxFQUFvRHpILEtBQXBELENBQVA7QUFDRCxLQU5ELENBTUUsT0FBTzRJLENBQVAsRUFBVTtBQUNWO0FBQ0EsVUFBS0EsYUFBYTRTLFdBQWQsSUFBOEI1UyxhQUFhNlMsY0FBL0MsRUFBK0Q7QUFDN0QvTyxnQkFBUUMsSUFBUixDQUFjLEdBQUUvRCxFQUFFYyxJQUFLLEtBQUlkLEVBQUU4UyxPQUFRLGdCQUFlTCxZQUFhLEVBQWpFO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBLFlBQU16UyxDQUFOO0FBQ0Q7QUFDRjtBQTVrQmtDLENBQXJDO0FBOGtCQTVLLE9BQU82SCxRQUFQLENBQWdCOFUsSUFBaEIsRzs7Ozs7Ozs7Ozs7OztBQ3RsQkEsK0RBQWUsVUFBZixFIiwiZmlsZSI6InNjcmlwdHMtZGJnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL3NjcmlwdHMuanNcIik7XG4iLCIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gJ21kaTpib29rbWFyayc7XG5cbi8qKiBEb21haW5zIHRoYXQgaGF2ZSBhIHN0YXRlIGNhcmQuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSBbXG4gICdjbGltYXRlJyxcbiAgJ2NvdmVyJyxcbiAgJ2NvbmZpZ3VyYXRvcicsXG4gICdpbnB1dF9zZWxlY3QnLFxuICAnaW5wdXRfbnVtYmVyJyxcbiAgJ2lucHV0X3RleHQnLFxuICAnbWVkaWFfcGxheWVyJyxcbiAgJ3NjZW5lJyxcbiAgJ3NjcmlwdCcsXG4gICd0aW1lcicsXG4gICd3ZWJsaW5rJyxcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gICdjYW1lcmEnLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2hpc3RvcnlfZ3JhcGgnLFxuICAnc2NlbmUnLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcbiAgJ2Nsb3NlZCcsXG4gICdvZmYnLFxuICAndW5sb2NrZWQnLFxuXTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9ICfCsEMnO1xuZXhwb3J0IGNvbnN0IFVOSVRfRiA9ICfCsEYnO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9ICdncm91cC5kZWZhdWx0X3ZpZXcnO1xuIiwiLyoqXG4gKiBBcHBseSBhIHRoZW1lIHRvIGFuIGVsZW1lbnQgYnkgc2V0dGluZyB0aGUgQ1NTIHZhcmlhYmxlcyBvbiBpdC5cbiAqXG4gKiBlbGVtZW50OiBFbGVtZW50IHRvIGFwcGx5IHRoZW1lIG9uLlxuICogdGhlbWVzOiBIQVNTIFRoZW1lIGluZm9ybWF0aW9uXG4gKiBsb2NhbFRoZW1lOiBzZWxlY3RlZCB0aGVtZS5cbiAqIHVwZGF0ZU1ldGE6IGJvb2xlYW4gaWYgd2Ugc2hvdWxkIHVwZGF0ZSB0aGUgdGhlbWUtY29sb3IgbWV0YSBlbGVtZW50LlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5VGhlbWVzT25FbGVtZW50KGVsZW1lbnQsIHRoZW1lcywgbG9jYWxUaGVtZSwgdXBkYXRlTWV0YSA9IGZhbHNlKSB7XG4gIGlmICghZWxlbWVudC5fdGhlbWVzKSB7XG4gICAgZWxlbWVudC5fdGhlbWVzID0ge307XG4gIH1cbiAgbGV0IHRoZW1lTmFtZSA9IHRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuICBpZiAobG9jYWxUaGVtZSA9PT0gJ2RlZmF1bHQnIHx8IChsb2NhbFRoZW1lICYmIHRoZW1lcy50aGVtZXNbbG9jYWxUaGVtZV0pKSB7XG4gICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgfVxuICBjb25zdCBzdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50Ll90aGVtZXMpO1xuICBpZiAodGhlbWVOYW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICB2YXIgdGhlbWUgPSB0aGVtZXMudGhlbWVzW3RoZW1lTmFtZV07XG4gICAgT2JqZWN0LmtleXModGhlbWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gJy0tJyArIGtleTtcbiAgICAgIGVsZW1lbnQuX3RoZW1lc1twcmVmaXhlZEtleV0gPSAnJztcbiAgICAgIHN0eWxlc1twcmVmaXhlZEtleV0gPSB0aGVtZVtrZXldO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtZW50LnVwZGF0ZVN0eWxlcykge1xuICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gIH0gZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgLy8gaW1wbGVtZW50IHVwZGF0ZVN0eWxlcygpIG1ldGhvZCBvZiBQb2xlbWVyIGVsZW1lbnRzXG4gICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlU3VidHJlZSgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8oZWxlbWVudCksIHN0eWxlcyk7XG4gIH1cblxuICBpZiAoIXVwZGF0ZU1ldGEpIHJldHVybjtcblxuICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXRoZW1lLWNvbG9yXScpO1xuICBpZiAobWV0YSkge1xuICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpKSB7XG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JywgbWV0YS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSk7XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lQ29sb3IgPSBzdHlsZXNbJy0tcHJpbWFyeS1jb2xvciddIHx8IG1ldGEuZ2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKTtcbiAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoZW1lQ29sb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFVwZGF0ZSByb290J3MgY2hpbGQgZWxlbWVudCB0byBiZSBuZXdFbGVtZW50VGFnIHJlcGxhY2luZyBhbm90aGVyIGV4aXN0aW5nIGNoaWxkIGlmIGFueS5cbiAqIENvcHkgYXR0cmlidXRlcyBpbnRvIHRoZSBjaGlsZCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljQ29udGVudFVwZGF0ZXIocm9vdCwgbmV3RWxlbWVudFRhZywgYXR0cmlidXRlcykge1xuICBjb25zdCByb290RWwgPSByb290O1xuICBsZXQgY3VzdG9tRWw7XG5cbiAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQgJiYgcm9vdEVsLmxhc3RDaGlsZC50YWdOYW1lID09PSBuZXdFbGVtZW50VGFnKSB7XG4gICAgY3VzdG9tRWwgPSByb290RWwubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIGlmIChyb290RWwubGFzdENoaWxkKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQocm9vdEVsLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0aW5nIGFuIGVsZW1lbnQgd2l0aCB1cHBlciBjYXNlIHdvcmtzIGZpbmUgaW4gQ2hyb21lLCBidXQgaW4gRkYgaXQgZG9lc24ndCBpbW1lZGlhdGVseVxuICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICBjdXN0b21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudFRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKSB7XG4gICAgY3VzdG9tRWwuc2V0UHJvcGVydGllcyhhdHRyaWJ1dGVzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBjdXN0b20gZWxlbWVudCBkZWZpbml0aW9uIHdhc24ndCBsb2FkZWQgeWV0IC0gc2V0UHJvcGVydGllcyB3b3VsZCBiZVxuICAgIC8vIG1pc3NpbmcsIGJ1dCBubyBoYXJtIGluIHNldHRpbmcgYXR0cmlidXRlcyBvbmUtYnktb25lIHRoZW4uXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjdXN0b21FbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoY3VzdG9tRWwpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKSB7XG4gIGNvbnN0IHNlcnZpY2VzID0gaGFzcy5jb25maWcuc2VydmljZXNbZG9tYWluXTtcbiAgaWYgKCFzZXJ2aWNlcykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoZG9tYWluID09PSAnbG9jaycpIHtcbiAgICByZXR1cm4gJ2xvY2snIGluIHNlcnZpY2VzO1xuICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJykge1xuICAgIHJldHVybiAnb3Blbl9jb3ZlcicgaW4gc2VydmljZXM7XG4gIH1cbiAgcmV0dXJuICd0dXJuX29uJyBpbiBzZXJ2aWNlcztcbn1cbiIsImltcG9ydCBjYW5Ub2dnbGVEb21haW4gZnJvbSAnLi9jYW5fdG9nZ2xlX2RvbWFpbi5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikge1xuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICBpZiAoZG9tYWluID09PSAnZ3JvdXAnKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLnN0YXRlID09PSAnb24nIHx8IHN0YXRlT2JqLnN0YXRlID09PSAnb2ZmJztcbiAgfVxuICBpZiAoZG9tYWluID09PSAnY2xpbWF0ZScpIHtcbiAgICByZXR1cm4gISEoKHN0YXRlT2JqLmF0dHJpYnV0ZXMgfHwge30pLnN1cHBvcnRlZF9mZWF0dXJlcyAmIDQwOTYpO1xuICB9XG5cbiAgcmV0dXJuIGNhblRvZ2dsZURvbWFpbihoYXNzLCBkb21haW4pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZURvbWFpbihlbnRpdHlJZCkge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKDAsIGVudGl0eUlkLmluZGV4T2YoJy4nKSk7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfZG9tYWluLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSB7XG4gIGlmICghc3RhdGVPYmouX2RvbWFpbikge1xuICAgIHN0YXRlT2JqLl9kb21haW4gPSBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVPYmouX2RvbWFpbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGdyb3VwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgcmVzdWx0W2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldEdyb3VwRW50aXRpZXMgZnJvbSAnLi9nZXRfZ3JvdXBfZW50aXRpZXMuanMnO1xuXG4vLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGVudGl0aWVzIHRoYXQgdGhlIHZpZXcgd2lsbCBzaG93XG4vLyBpbmNsdWRpbmcgZW1iZWRkZWQgZ3JvdXBzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld0VudGl0aWVzKGVudGl0aWVzLCB2aWV3KSB7XG4gIGNvbnN0IHZpZXdFbnRpdGllcyA9IHt9O1xuXG4gIHZpZXcuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5ICYmICFlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgIHZpZXdFbnRpdGllc1tlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcblxuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09ICdncm91cCcpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbnRpdGllcyA9IGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGVudGl0eSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBFbnRpdGllcykuZm9yRWFjaCgoZ3JFbnRpdHlJZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyRW50aXR5ID0gZ3JvdXBFbnRpdGllc1tnckVudGl0eUlkXTtcblxuICAgICAgICAgIGlmICghZ3JFbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgICAgICAgIHZpZXdFbnRpdGllc1tnckVudGl0eUlkXSA9IGdyRW50aXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmlld0VudGl0aWVzO1xufVxuIiwiaW1wb3J0IGNhblRvZ2dsZVN0YXRlIGZyb20gJy4vY2FuX3RvZ2dsZV9zdGF0ZS5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IHsgRE9NQUlOU19XSVRIX0NBUkQgfSBmcm9tICcuLi9jb25zdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlQ2FyZFR5cGUoaGFzcywgc3RhdGVPYmopIHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgcmV0dXJuICdkaXNwbGF5JztcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9DQVJELmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICByZXR1cm4gZG9tYWluO1xuICB9IGVsc2UgaWYgKGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSAmJlxuICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbCAhPT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gJ3RvZ2dsZSc7XG4gIH1cbiAgcmV0dXJuICdkaXNwbGF5Jztcbn1cbiIsImNvbnN0IGhhc3NBdHRyaWJ1dGVVdGlsID0ge307XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IFtcbiAgICAnYmF0dGVyeScsXG4gICAgJ2NvbGQnLFxuICAgICdjb25uZWN0aXZpdHknLFxuICAgICdkb29yJyxcbiAgICAnZ2FyYWdlX2Rvb3InLFxuICAgICdnYXMnLFxuICAgICdoZWF0JyxcbiAgICAnbGlnaHQnLFxuICAgICdsb2NrJyxcbiAgICAnbW9pc3R1cmUnLFxuICAgICdtb3Rpb24nLFxuICAgICdtb3ZpbmcnLFxuICAgICdvY2N1cGFuY3knLFxuICAgICdvcGVuaW5nJyxcbiAgICAncGx1ZycsXG4gICAgJ3Bvd2VyJyxcbiAgICAncHJlc2VuY2UnLFxuICAgICdwcm9ibGVtJyxcbiAgICAnc2FmZXR5JyxcbiAgICAnc21va2UnLFxuICAgICdzb3VuZCcsXG4gICAgJ3ZpYnJhdGlvbicsXG4gICAgJ3dpbmRvdydcbiAgXSxcbiAgY292ZXI6IFsnZ2FyYWdlJ10sXG4gIHNlbnNvcjogW1xuICAgICdiYXR0ZXJ5JyxcbiAgICAnaHVtaWRpdHknLFxuICAgICdpbGx1bWluYW5jZScsXG4gICAgJ3RlbXBlcmF0dXJlJ1xuICBdLFxufTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gJ2pzb24nO1xuaGFzc0F0dHJpYnV0ZVV0aWwuQUREX1RZUEUgPSAna2V5LXZhbHVlJztcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUcgPSB7XG4gIHN0cmluZzogJ2hhLWN1c3RvbWl6ZS1zdHJpbmcnLFxuICBqc29uOiAnaGEtY3VzdG9taXplLXN0cmluZycsXG4gIGljb246ICdoYS1jdXN0b21pemUtaWNvbicsXG4gIGJvb2xlYW46ICdoYS1jdXN0b21pemUtYm9vbGVhbicsXG4gIGFycmF5OiAnaGEtY3VzdG9taXplLWFycmF5JyxcbiAgJ2tleS12YWx1ZSc6ICdoYS1jdXN0b21pemUta2V5LXZhbHVlJyxcbn07XG5cbi8vIEF0dHJpYnV0ZXMgaGVyZSBzZXJ2ZSBkdWFsIHB1cnBvc2U6XG4vLyAxKSBBbnkga2V5IG9mIHRoaXMgb2JqZWN0IHdvbid0IGJlIHNob3duIGluIG1vcmUtaW5mbyB3aW5kb3cuXG4vLyAyKSBBbnkga2V5IHdoaWNoIGhhcyB2YWx1ZSBvdGhlciB0aGFuIHVuZGVmaW5lZCB3aWxsIGFwcGVhciBpbiBjdXN0b21pemF0aW9uXG4vLyAgICBjb25maWcgYWNjb3JkaW5nIHRvIGl0cyB2YWx1ZS5cbmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPVxuICBoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTIHx8IHtcbiAgICBlbnRpdHlfcGljdHVyZTogdW5kZWZpbmVkLFxuICAgIGZyaWVuZGx5X25hbWU6IHsgdHlwZTogJ3N0cmluZycsIGRlc2NyaXB0aW9uOiAnTmFtZScgfSxcbiAgICBpY29uOiB7IHR5cGU6ICdpY29uJyB9LFxuICAgIGVtdWxhdGVkX2h1ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZG9tYWluczogWydlbXVsYXRlZF9odWUnXVxuICAgIH0sXG4gICAgZW11bGF0ZWRfaHVlX25hbWU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZG9tYWluczogWydlbXVsYXRlZF9odWUnXVxuICAgIH0sXG4gICAgaGFhc2thX2hpZGRlbjogdW5kZWZpbmVkLFxuICAgIGhhYXNrYV9uYW1lOiB1bmRlZmluZWQsXG4gICAgaG9tZWJyaWRnZV9oaWRkZW46IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgaG9tZWJyaWRnZV9uYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgc3VwcG9ydGVkX2ZlYXR1cmVzOiB1bmRlZmluZWQsXG4gICAgYXR0cmlidXRpb246IHVuZGVmaW5lZCxcbiAgICBjdXN0b21fdWlfbW9yZV9pbmZvOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgY3VzdG9tX3VpX3N0YXRlX2NhcmQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICBkZXZpY2VfY2xhc3M6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBvcHRpb25zOiBoYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTLFxuICAgICAgZGVzY3JpcHRpb246ICdEZXZpY2UgY2xhc3MnLFxuICAgICAgZG9tYWluczogWydiaW5hcnlfc2Vuc29yJywgJ2NvdmVyJywgJ3NlbnNvciddXG4gICAgfSxcbiAgICBoaWRkZW46IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjcmlwdGlvbjogJ0hpZGUgZnJvbSBVSScgfSxcbiAgICBhc3N1bWVkX3N0YXRlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkb21haW5zOiBbJ3N3aXRjaCcsICdsaWdodCcsICdjb3ZlcicsICdjbGltYXRlJywgJ2ZhbicsICdncm91cCddXG4gICAgfSxcbiAgICBpbml0aWFsX3N0YXRlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRvbWFpbnM6IFsnYXV0b21hdGlvbiddXG4gICAgfSxcbiAgICB1bml0X29mX21lYXN1cmVtZW50OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGhhc3NBdHRyaWJ1dGVVdGlsO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cblxud2luZG93LkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSBmdW5jdGlvbihwcm9wKSB7IHJldHVybiBwcm9wOyB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnLi9ib290LmpzJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBzdGF0aWMgc3RyaW5nIHZhbHVlIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGZpbHRlclxuICogc3RyaW5ncyBieSBhc3NldGluZyB0aGF0IHRoZXkgaGF2ZSBiZWVuIGNyZWF0ZWQgdmlhIHRoaXMgY2xhc3MuIFRoZVxuICogYHZhbHVlYCBwcm9wZXJ0eSByZXR1cm5zIHRoZSBzdHJpbmcgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuY2xhc3MgTGl0ZXJhbFN0cmluZyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZykge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHRoaXMudmFsdWUgPSBzdHJpbmcudG9TdHJpbmcoKTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybiB7c3RyaW5nfSBMaXRlcmFsU3RyaW5nIHN0cmluZyB2YWx1ZVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBsaXRlcmFsVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFMaXRlcmFsU3RyaW5nfSAqLyh2YWx1ZSkudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLWxpdGVyYWwgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sTGl0ZXJhbCBmdW5jdGlvbjogJHt2YWx1ZX1gXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGh0bWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnQgfSAqLyh2YWx1ZSkuaW5uZXJIVE1MO1xuICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGl0ZXJhbFN0cmluZykge1xuICAgIHJldHVybiBsaXRlcmFsVmFsdWUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi10ZW1wbGF0ZSB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWwgZnVuY3Rpb246ICR7dmFsdWV9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHRlbXBsYXRlIGxpdGVyYWwgdGFnIHRoYXQgY3JlYXRlcyBhbiBIVE1MIDx0ZW1wbGF0ZT4gZWxlbWVudCBmcm9tIHRoZVxuICogY29udGVudHMgb2YgdGhlIHN0cmluZy5cbiAqXG4gKiBUaGlzIGFsbG93cyB5b3UgdG8gd3JpdGUgYSBQb2x5bWVyIFRlbXBsYXRlIGluIEphdmFTY3JpcHQuXG4gKlxuICogVGVtcGxhdGVzIGNhbiBiZSBjb21wb3NlZCBieSBpbnRlcnBvbGF0aW5nIGBIVE1MVGVtcGxhdGVFbGVtZW50YHMgaW5cbiAqIGV4cHJlc3Npb25zIGluIHRoZSBKYXZhU2NyaXB0IHRlbXBsYXRlIGxpdGVyYWwuIFRoZSBuZXN0ZWQgdGVtcGxhdGUnc1xuICogYGlubmVySFRNTGAgaXMgaW5jbHVkZWQgaW4gdGhlIGNvbnRhaW5pbmcgdGVtcGxhdGUuICBUaGUgb25seSBvdGhlclxuICogdmFsdWVzIGFsbG93ZWQgaW4gZXhwcmVzc2lvbnMgYXJlIHRob3NlIHJldHVybmVkIGZyb20gYGh0bWxMaXRlcmFsYFxuICogd2hpY2ggZW5zdXJlcyBvbmx5IGxpdGVyYWwgdmFsdWVzIGZyb20gSlMgc291cmNlIGV2ZXIgcmVhY2ggdGhlIEhUTUwsIHRvXG4gKiBndWFyZCBhZ2FpbnN0IFhTUyByaXNrcy5cbiAqXG4gKiBBbGwgb3RoZXIgdmFsdWVzIGFyZSBkaXNhbGxvd2VkIGluIGV4cHJlc3Npb25zIHRvIGhlbHAgcHJldmVudCBYU1NcbiAqIGF0dGFja3M7IGhvd2V2ZXIsIGBodG1sTGl0ZXJhbGAgY2FuIGJlIHVzZWQgdG8gY29tcG9zZSBzdGF0aWNcbiAqIHN0cmluZyB2YWx1ZXMgaW50byB0ZW1wbGF0ZXMuIFRoaXMgaXMgdXNlZnVsIHRvIGNvbXBvc2Ugc3RyaW5ncyBpbnRvXG4gKiBwbGFjZXMgdGhhdCBkbyBub3QgYWNjZXB0IGh0bWwsIGxpa2UgdGhlIGNzcyB0ZXh0IG9mIGEgYHN0eWxlYFxuICogZWxlbWVudC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT46aG9zdHsgY29udGVudDpcIi4uLlwiIH08L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3RoaXMucGFydGlhbFRlbXBsYXRlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBwYXJ0aWFsVGVtcGxhdGUoKSB7IHJldHVybiBodG1sYDxzcGFuPlBhcnRpYWwhPC9zcGFuPmA7IH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFIVE1MVGVtcGxhdGVFbGVtZW50fSBDb25zdHJ1Y3RlZCBIVE1MVGVtcGxhdGVFbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gZnVuY3Rpb24gaHRtbChzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgY29uc3QgdGVtcGxhdGUgPSAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpKTtcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBodG1sVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgcmV0dXJuIHRlbXBsYXRlO1xufTtcblxuLyoqXG4gKiBBbiBodG1sIGxpdGVyYWwgdGFnIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBgaHRtbGAgdG8gY29tcG9zZS5cbiAqIGEgbGl0ZXJhbCBzdHJpbmcuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+XG4gKiAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfVxuICogICAgICAgICAgICR7dGhpcy5zdHlsZVRlbXBsYXRlKCl9XG4gKiAgICAgICAgIDwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7c3RhdGljVmFsdWV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XG4gKiAgICAgICAgcmV0dXJuIGh0bWxMaXRlcmFsYC5zaGFkb3dlZCB7IGJhY2tncm91bmQ6IGdyYXk7IH1gO1xuICogICAgIH1cbiAqXG4gKiBAcGFyYW0geyFJVGVtcGxhdGVBcnJheX0gc3RyaW5ncyBDb25zdGFudCBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtIHsuLi4qfSB2YWx1ZXMgVmFyaWFibGUgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEByZXR1cm4geyFMaXRlcmFsU3RyaW5nfSBDb25zdHJ1Y3RlZCBsaXRlcmFsIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgaHRtbExpdGVyYWwgPSBmdW5jdGlvbihzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBMaXRlcmFsU3RyaW5nKHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgbGl0ZXJhbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSkpO1xufTtcbiIsImltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEN1aUJhc2VFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICBleHRyYToge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaikge1xuICAgIGxldCBleHRyYXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2RhdGFfdGVtcGxhdGU7XG4gICAgaWYgKGV4dHJhcykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dHJhcykpIHtcbiAgICAgICAgZXh0cmFzID0gW2V4dHJhc107XG4gICAgICB9XG4gICAgICByZXR1cm4gZXh0cmFzLm1hcChleHRyYSA9PiB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICBleHRyYSxcbiAgICAgICAgaGFzcyxcbiAgICAgICAgaGFzcy5zdGF0ZXMsXG4gICAgICAgIHN0YXRlT2JqLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgICAvKiBhdHRyaWJ1dGU9ICovIHVuZGVmaW5lZCxcbiAgICAgICAgc3RhdGVPYmouc3RhdGUsXG4gICAgICApKS5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdCAhPT0gbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHNob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZXh0cmEubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICEhc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZDtcbiAgfVxuXG4gIGhhc0V4dHJhKGV4dHJhKSB7XG4gICAgcmV0dXJuIGV4dHJhLmxlbmd0aCA+IDA7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEN1aUJhc2VFbGVtZW50O1xuIiwiaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBEeW5hbWljRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGVsZW1lbnROYW1lOiBTdHJpbmcsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpJyxcbiAgICBdO1xuICB9XG5cbiAgb2JzZXJ2ZXJGdW5jKGhhc3MsIHN0YXRlT2JqLCBlbGVtZW50TmFtZSwgaW5EaWFsb2cpIHtcbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgZWxlbWVudE5hbWUgPyBlbGVtZW50TmFtZS50b1VwcGVyQ2FzZSgpIDogJ0RJVicsXG4gICAgICB7IGhhc3MsIHN0YXRlT2JqLCBpbkRpYWxvZyB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLWVsZW1lbnQnLCBEeW5hbWljRWxlbWVudCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuXG5pbXBvcnQgJy4vZHluYW1pYy1lbGVtZW50LmpzJztcbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIER5bmFtaWNXaXRoRXh0cmEgZXh0ZW5kcyBjdXN0b21FbGVtZW50cy5nZXQoJ3N0YXRlLWNhcmQtZGlzcGxheScpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1mbGV4LWZhY3RvcnNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgLmNvbnRyb2wtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogLTRweCAtMTZweCAtNHB4IDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgfVxuICAgICAgaGEtc3RhdGUtbGFiZWwtYmFkZ2Uge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgICAgZHluYW1pYy1lbGVtZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgI292ZXJsYXkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgICAjbG9jayB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgIH1cbiAgICAgICNsb2NrLmhhLWNvdmVyLWNvbnRyb2xzIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5leHRyYSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLXNpemU6IDM2cHg7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBjbGFzcyQ9J1tbZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpXV0gaG9yaXpvbnRhbCBsYXlvdXQnPlxuICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2V4dHJhT2JqVmlzaWJsZV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0J1xuICAgICAgICAgICAgICAgICAgaXRlbXM9J1tbZXh0cmFPYmpdXSdcbiAgICAgICAgICAgICAgICAgIG9uLWRvbS1jaGFuZ2U9J2V4dHJhRG9tQ2hhbmdlZCc+XG4gICAgICAgICAgPGhhLXN0YXRlLWxhYmVsLWJhZGdlIGhhc3M9J1tbaGFzc11dJyBzdGF0ZT0nW1tpdGVtXV0nPjwvaGEtc3RhdGUtbGFiZWwtYmFkZ2U+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW19zaG93Q29udHJvbChpbkRpYWxvZywgc3RhdGVPYmopXV0nPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGR5bmFtaWMtZWxlbWVudFxuICAgICAgICAgICAgICAgIGNsYXNzPSdmbGV4J1xuICAgICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICAgICAgZWxlbWVudC1uYW1lPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgICAgPC9keW5hbWljLWVsZW1lbnQ+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopXV0nPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwib3ZlcmxheVwiIG9uLWNsaWNrPSdjbGlja0hhbmRsZXInPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrXV0nPlxuICAgICAgICAgICAgICAgICAgPGlyb24taWNvbiBpZD1cImxvY2tcIiBjbGFzcyQ9XCJbW2NvbnRyb2xFbGVtZW50XV1cIiBpY29uPVwibWRpOmxvY2stb3V0bGluZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbWyFjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdzdGF0ZSc+W1tjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgIGV4dHJhT2JqOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgX2F0dGFjaGVkKScsXG4gICAgICB9LFxuICAgICAgX2F0dGFjaGVkOiBCb29sZWFuLFxuICAgICAgZXh0cmFPYmpWaXNpYmxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhVmlzaWJsZShleHRyYU9iaiwgaW5EaWFsb2cpJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIGF0dGFjaGVkKSB7XG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlIHx8ICFhdHRhY2hlZCkgcmV0dXJuIFtdO1xuICAgIGxldCBleHRyYUJhZGdlcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfYmFkZ2U7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4dHJhQmFkZ2VzKSkge1xuICAgICAgZXh0cmFCYWRnZXMgPSBbZXh0cmFCYWRnZXNdO1xuICAgIH1cbiAgICByZXR1cm4gZXh0cmFCYWRnZXMubWFwKChleHRyYUJhZGdlKSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICAgIGlmIChleHRyYUJhZGdlLmVudGl0eV9pZCAmJiBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0pIHtcbiAgICAgICAgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgIHRoaXMsIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSwgdGhpcy5pbkRpYWxvZyxcbiAgICAgICAgICAvKiBhbGxvd0hpZGRlbj0gKi9mYWxzZSkpO1xuICAgICAgfSBlbHNlIGlmIChleHRyYUJhZGdlLmF0dHJpYnV0ZSAmJlxuICAgICAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBzdGF0ZTogU3RyaW5nKHN0YXRlT2JqLmF0dHJpYnV0ZXNbZXh0cmFCYWRnZS5hdHRyaWJ1dGVdKSxcbiAgICAgICAgICBfZG9tYWluOiAnbm9uZScsXG4gICAgICAgICAgZW50aXR5X2lkOiBudWxsLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHsgdW5pdF9vZl9tZWFzdXJlbWVudDogZXh0cmFCYWRnZS51bml0IH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgICBsZXQgYmxhY2tsaXN0ID0gZXh0cmFCYWRnZS5ibGFja2xpc3Rfc3RhdGVzO1xuICAgICAgaWYgKGJsYWNrbGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShibGFja2xpc3QpKSB7XG4gICAgICAgICAgYmxhY2tsaXN0ID0gW2JsYWNrbGlzdF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsYWNrbGlzdC5zb21lKHYgPT4gUmVnRXhwKHYpLnRlc3QocmVzdWx0LnN0YXRlLnRvU3RyaW5nKCkpKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQuX2VudGl0eURpc3BsYXkgPSAnJztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSkuZmlsdGVyKGV4dHJhQmFkZ2UgPT4gZXh0cmFCYWRnZSAhPSBudWxsKTtcbiAgfVxuXG4gIGNvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nIHx8ICFleHRyYU9iaikgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBleHRyYU9iai5sZW5ndGggIT09IDA7XG4gIH1cblxuICBleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSkge1xuICAgIHJldHVybiBleHRyYU9ialZpc2libGUgPyAnZXh0cmEnIDogJyc7XG4gIH1cblxuICBfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gIXN0YXRlT2JqLmF0dHJpYnV0ZXMuaGlkZV9jb250cm9sO1xuICB9XG5cbiAgY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaikge1xuICAgIC8vIGhhTG9jYWxpemUgcmVtb3ZlZCBpbiAwLjYxXG4gICAgcmV0dXJuIHN1cGVyLmNvbXB1dGVTdGF0ZURpc3BsYXkodGhpcy5oYUxvY2FsaXplIHx8IHRoaXMubG9jYWxpemUsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIGlzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9scyB8fFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrO1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIGNvbnN0IGxvY2sgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI2xvY2snKTtcbiAgICBpZiAobG9jaykge1xuICAgICAgbG9jay5pY29uID0gJ21kaTpsb2NrLW9wZW4tb3V0bGluZSc7XG4gICAgICBsb2NrLnN0eWxlLm9wYWNpdHkgPSAnMC4xJztcbiAgICB9XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgbG9jay5pY29uID0gJ21kaTpsb2NrLW91dGxpbmUnO1xuICAgICAgICBsb2NrLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgICAgIH1cbiAgICB9LCA1MDAwKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgYXBwbHlUaGVtZXMoaGFzcywgZWxlbWVudCwgc3RhdGVPYmopIHtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0JztcbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgIGVsZW1lbnQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gIH1cblxuICBleHRyYURvbUNoYW5nZWQoKSB7XG4gICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJylcbiAgICAgIC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgIHRoaXMuYXBwbHlUaGVtZXModGhpcy5oYXNzLCBlbGVtLCBlbGVtLnN0YXRlKTtcbiAgICAgIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtd2l0aC1leHRyYScsIER5bmFtaWNXaXRoRXh0cmEpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBFdmVudHNNaXhpbiBmcm9tICcuLi9taXhpbnMvZXZlbnRzLW1peGluLmpzJztcbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhQ29uZmlnQ3VzdG9tVWkgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyLkVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+PC9zdHlsZT5cbiAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249J21kaTphcnJvdy1sZWZ0J1xuICAgICAgICAgICAgb24tY2xpY2s9J19iYWNrSGFuZGxlcidcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU+Q3VzdG9tIFVJIHNldHRpbmdzPC9kaXY+XG4gICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPSdbW2lzV2lkZV1dJz5cbiAgICAgICAgPHBhcGVyLWNhcmQgaGVhZGluZz0nRGV2aWNlIG5hbWUnPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQtY29udGVudCc+XG4gICAgICAgICAgICBTZXQgZGV2aWNlIG5hbWUgc28gdGhhdCB5b3UgY2FuIHJlZmVyZW5jZSBpdCBpbiBwZXItZGV2aWNlIHNldHRpbmdzXG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9J05hbWUnXG4gICAgICAgICAgICAgIHZhbHVlPSd7e25hbWV9fSdcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BhcGVyLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICduYW1lQ2hhbmdlZCcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMubmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gIH1cblxuICBuYW1lQ2hhbmdlZChuYW1lKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLnNldE5hbWUobmFtZSk7XG4gIH1cblxuICBfYmFja0hhbmRsZXIoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIHRoaXMuZmlyZSgnbG9jYXRpb24tY2hhbmdlZCcpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLWNvbmZpZy1jdXN0b20tdWknLCBIYUNvbmZpZ0N1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFUaGVtZWRTbGlkZXIgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1oYS10aGVtZWQtc2xpZGVyLW1hcmdpbiwgaW5pdGlhbCk7XG4gICAgICB9XG4gICAgICAuZGlzYWJsZS1vZmYtd2hlbi1taW4ge1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1waW4tc3RhcnQtY29sb3I6ICB2YXIoLS1wYXBlci1zbGlkZXItcGluLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluLmlzLW9uIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IpO1xuICAgICAgfVxuICAgICAgcGFwZXItc2xpZGVyIHtcbiAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICB3aWR0aDogdmFyKC0taGEtcGFwZXItc2xpZGVyLXdpZHRoLCAyMDBweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxwYXBlci1zbGlkZXJcbiAgICAgICAgIG1pbj0nW1tfdGhlbWVkTWluXV0nXG4gICAgICAgICBtYXg9J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWF4XCIsIG1heCldXSdcbiAgICAgICAgIHBpbj0nW1tfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJwaW5cIiwgcGluKV1dJ1xuICAgICAgICAgY2xhc3MkPSdbW2NvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgX3RoZW1lZE1pbildXScgdmFsdWU9J1tbdmFsdWVdXSdcbiAgICAgICAgIG9uLWNoYW5nZT0ndmFsdWVDaGFuZ2VkJz5cbiAgICA8L3BhcGVyLXNsaWRlcj5cbiAgICBgO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmRpc2FibGVPZmZXaGVuTWluID0gIXRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhpcy50aGVtZSwgJ29mZl93aGVuX21pbicsICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKTtcbiAgICB0aGlzLmNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhpcy50aGVtZSwgdGhpcy5kaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgfSxcbiAgICAgIHBpbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaXNPbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHRoZW1lOiBPYmplY3QsXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBfdGhlbWVkTWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJtaW5cIiwgbWluKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2NvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhlbWUsIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCknLFxuICAgIF07XG4gIH1cblxuICBjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpIHtcbiAgICB0aGlzLl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQgPSB0aGlzLl9jb21wdXRlQXR0cmlidXRlKFxuICAgICAgdGhlbWUsICdyZXBvcnRfd2hlbl9ub3RfY2hhbmdlZCcsICFkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpO1xuICB9XG5cbiAgX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIGF0dHIsIGRlZikge1xuICAgIGlmICh0aGVtZSkge1xuICAgICAgaWYgKGF0dHIgaW4gdGhlbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoZW1lW2F0dHJdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVmO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzKHRoZW1lLCBpc09uLCB0aGVtZWRNaW4pIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgaWYgKGlzT24pIHtcbiAgICAgIHJlc3VsdCArPSAnaXMtb24gJztcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikgfHwgdGhlbWVkTWluID09PSAwKSB7XG4gICAgICAvLyBJZiBvZmZXaGVuTWluIGlzIGVuYWJsZWQgZG9uJ3QgY3VzdG9taXplLlxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7cmVzdWx0fWRpc2FibGUtb2ZmLXdoZW4tbWluYDtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZChldikge1xuICAgIGlmICghdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkICYmIHRoaXMudmFsdWUgPT09IGV2LnRhcmdldC52YWx1ZSkge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGEtdGhlbWVkLXNsaWRlcicsIEhhVGhlbWVkU2xpZGVyKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5pbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIuanMnO1xuaW1wb3J0IHN0YXRlQ2FyZFR5cGUgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMnO1xuXG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcbmltcG9ydCAnLi9zdGF0ZS1jYXJkLXdpdGgtc2xpZGVyLmpzJztcbmltcG9ydCAnLi9zdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyLmpzJztcblxuY29uc3QgU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMgPSBbJ2NvbmZpZ3VyYXRvciddO1xuY29uc3QgRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUID0ge1xuICBsaWdodDogMSwgLy8gU1VQUE9SVF9CUklHSFRORVNTXG4gIGNvdmVyOiA0LCAvLyBTVVBQT1JUX1NFVF9QT1NJVElPTlxuICBjbGltYXRlOiAxLCAvLyBTVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRVxufTtcbmNvbnN0IFRZUEVfVE9fQ09OVFJPTCA9IHtcbiAgdG9nZ2xlOiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gIGRpc3BsYXk6ICcnLFxuICBjb3ZlcjogJ2hhLWNvdmVyLWNvbnRyb2xzJyxcbn07XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkQ3VzdG9tVWkgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKScsXG4gICAgXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKGNvbnRhaW5lci50YWdOYW1lID09PSAnRElWJyAmJlxuICAgICAgICAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSB8fCBjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGlsZC1jYXJkJykpKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIC8vIFNpbmNlIHRoaXMgZG9lc24ndCBhY3R1YWxseSBjaGFuZ2UgdGhlIGJhY2tncm91bmQgLSBubyBuZWVkIHRvIGNsZWFyIGl0LlxuICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicsICd2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIGluaGVyaXQpJyk7XG5cbiAgICAgIC8vIFBvbHlmaWxsICd1cGRhdGVTdHlsZXMnLlxuICAgICAgaWYgKCFjb250YWluZXIudXBkYXRlU3R5bGVzKSB7XG4gICAgICAgIGNvbnRhaW5lci51cGRhdGVTdHlsZXMgPSAoc3R5bGVzKSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHN0eWxlc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgdGhpcy5pbnB1dENoYW5nZWQodGhpcy5oYXNzLCB0aGlzLmluRGlhbG9nLCB0aGlzLnN0YXRlT2JqKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycsIHBhZGRpbmc6ICcnIH0pO1xuICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciwgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCAnZGVmYXVsdCcpO1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGJhZGdlTW9kZShoYXNzLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gW107XG4gICAgaWYgKGRvbWFpbiA9PT0gJ2dyb3VwJykge1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tpZF07XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIElEICR7aWR9IGluIGdyb3VwICR7c3RhdGVPYmouZW50aXR5X2lkfWApO1xuICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QgfHxcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuYmFkZ2VzX2xpc3QuaW5jbHVkZXMoc3RhdGUuZW50aXR5X2lkKSkge1xuICAgICAgICAgIHN0YXRlcy5wdXNoKHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICAgIHRoaXMsIHN0YXRlLCBmYWxzZSAvKiBpbkRpYWxvZyAqLywgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlcy5wdXNoKHN0YXRlT2JqKTtcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9O1xuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc3RhdGUnKSkge1xuICAgICAgICAgIHBhcmFtcy5tYXJnaW4gPSAndmFyKC0taGEtYmFkZ2VzLWNhcmQtbWFyZ2luLCAwKSc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgICdIQS1CQURHRVMtQ0FSRCcsXG4gICAgICB7IGhhc3MsIHN0YXRlcyB9KTtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgd2lkdGg6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC13aWR0aCwgaW5pdGlhbCknLFxuICAgICAgICAndGV4dC1hbGlnbic6ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC10ZXh0LWFsaWduLCBpbml0aWFsKScsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5sYXN0Q2hpbGQuc3R5bGUuZm9udFNpemUgPSAnODUlJztcblxuICAgIC8vIFNpbmNlIHRoaXMgdmFyaWFibGUgb25seSBhZmZlY3RzIGJhZGdlcyBtb2RlIC0gbm8gbmVlZCB0byBjbGVhbiBpdCB1cC5cbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KCctLWhhLXN0YXRlLWxhYmVsLWJhZGdlLW1hcmdpbi1ib3R0b20nLCAnMCcpO1xuICB9XG5cbiAgY2xlYW5CYWRnZVN0eWxlKCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoe1xuICAgICAgICBkaXNwbGF5OiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAndGV4dC1hbGlnbic6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3R5bGVzKHsgZGlzcGxheTogJycsIG1hcmdpbjogJycgfSk7XG4gIH1cblxuICBhcHBseVRoZW1lcyhoYXNzLCBtb2RpZmllZE9iaikge1xuICAgIGxldCB0aGVtZVRhcmdldCA9IHRoaXM7XG4gICAgbGV0IHRoZW1lTmFtZSA9ICdkZWZhdWx0JztcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGVtZVRhcmdldCA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG4gICAgaWYgKG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgIHRoZW1lTmFtZSA9IG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMudGhlbWU7XG4gICAgfVxuICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgdGhlbWVUYXJnZXQsIGhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sIHRoZW1lTmFtZSk7XG4gIH1cblxuICBtYXliZUhpZGVFbnRpdHkobW9kaWZpZWRPYmopIHtcbiAgICBpZiAoIW1vZGlmaWVkT2JqKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcwJywgcGFkZGluZzogJzAnIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgb2JqLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmJlxuICAgICAgKERPTUFJTl9UT19TTElERVJfU1VQUE9SVFtkb21haW5dICYgb2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzKSAmJlxuICAgICAgb2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlICYmIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAhPT0gJ25vLXNsaWRlcic7XG4gIH1cblxuICBpbnB1dENoYW5nZWQoaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFzdGF0ZU9iaiB8fCAhaGFzcyB8fCAhdGhpcy5faXNBdHRhY2hlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gICAgY29uc3QgbW9kaWZpZWRPYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICB0aGlzLCBzdGF0ZU9iaiwgaW5EaWFsb2csIHRydWUgLyogYWxsb3dIaWRkZW4gKi8pO1xuXG4gICAgaWYgKHRoaXMubWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hcHBseVRoZW1lcyhoYXNzLCBtb2RpZmllZE9iaik7XG5cbiAgICBpZiAoIWluRGlhbG9nICYmIG1vZGlmaWVkT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlID09PSAnYmFkZ2VzJykge1xuICAgICAgdGhpcy5iYWRnZU1vZGUoaGFzcywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBtb2RpZmllZE9iaiwgZG9tYWluKTtcbiAgICB9XG4gIH1cblxuICByZWd1bGFyTW9kZV8oaGFzcywgaW5EaWFsb2csIHN0YXRlT2JqLCBkb21haW4pIHtcbiAgICB0aGlzLmNsZWFuQmFkZ2VTdHlsZSgpO1xuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgaGFzcyxcbiAgICAgIHN0YXRlT2JqLFxuICAgICAgaW5EaWFsb2csXG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbFN0YXRlQ2FyZFR5cGUgPSBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKTtcbiAgICBsZXQgY3VzdG9tU3RhdGVDYXJkVHlwZTtcbiAgICBjb25zdCBzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlID0gc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk7XG5cbiAgICBpZiAoZG9tYWluID09PSAnbGlnaHQnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1lbnRpdHktdG9nZ2xlJyxcbiAgICAgICAgc2VydmljZU1pbjogJ3R1cm5fb2ZmJyxcbiAgICAgICAgc2VydmljZU1heDogJ3R1cm5fb24nLFxuICAgICAgICB2YWx1ZU5hbWU6ICdicmlnaHRuZXNzJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY292ZXInICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jb3Zlci1jb250cm9scycsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnY2xvc2VfY292ZXInLFxuICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X2NvdmVyX3Bvc2l0aW9uJyxcbiAgICAgICAgc2V0VmFsdWVOYW1lOiAncG9zaXRpb24nLFxuICAgICAgICB2YWx1ZU5hbWU6ICdjdXJyZW50X3Bvc2l0aW9uJyxcbiAgICAgICAgbmFtZU9uOiAnb3BlbicsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NsaW1hdGUnICYmIHRoaXMuc2xpZGVyRWxpZ2libGVfKGRvbWFpbiwgc3RhdGVPYmosIGluRGlhbG9nKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHtcbiAgICAgICAgY29udHJvbEVsZW1lbnQ6ICdoYS1jbGltYXRlLXN0YXRlJyxcbiAgICAgICAgbWluOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl90ZW1wIHx8IC0xMDAsXG4gICAgICAgIG1heDogc3RhdGVPYmouYXR0cmlidXRlcy5tYXhfdGVtcCB8fCAyMDAsXG4gICAgICAgIHNlcnZpY2VNaW46ICdzZXRfdGVtcGVyYXR1cmUnLFxuICAgICAgICBzZXJ2aWNlTWF4OiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgdmFsdWVOYW1lOiAndGVtcGVyYXR1cmUnLFxuICAgICAgICBuYW1lT246ICcnLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBUWVBFX1RPX0NPTlRST0xbb3JpZ2luYWxTdGF0ZUNhcmRUeXBlXTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkICYmXG4gICAgICAgICAgICAgICAhU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMuaW5jbHVkZXMob3JpZ2luYWxTdGF0ZUNhcmRUeXBlKSkge1xuICAgICAgcGFyYW1zLmluRGlhbG9nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSAnJztcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbF9lbGVtZW50O1xuICAgIH1cblxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAoc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSB8fCBjdXN0b21TdGF0ZUNhcmRUeXBlIHx8IGBTVEFURS1DQVJELSR7b3JpZ2luYWxTdGF0ZUNhcmRUeXBlfWApLnRvVXBwZXJDYXNlKCksXG4gICAgICBwYXJhbXMpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtY3VzdG9tLXVpJywgU3RhdGVDYXJkQ3VzdG9tVWkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBDdWlCYXNlRWxlbWVudCBmcm9tICcuL2N1aS1iYXNlLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuL2R5bmFtaWMtd2l0aC1leHRyYS5qcyc7XG5pbXBvcnQgJy4vaGEtdGhlbWVkLXNsaWRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkV2l0aFNsaWRlciBleHRlbmRzIEN1aUJhc2VFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1mbGV4LWZhY3RvcnNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuc2Vjb25kLWxpbmUsIC5zdGF0ZS1hbmQtdG9nZ2xlLCAuc3RhdGUtaW5mbyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWFuZC10b2dnbGUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zZWNvbmQtbGluZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmQtbGluZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgfVxuICAgICAgLnN0cmV0Y2ggLnNlY29uZC1saW5lLCAuc3RyZXRjaCBoYS10aGVtZWQtc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0taGEtcGFwZXItc2xpZGVyLXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc3RhdGUtaW5mbyB7XG4gICAgICAgIG1pbi13aWR0aDogaW5pdGlhbDtcbiAgICAgIH1cbiAgICAgIGhhLXRoZW1lZC1zbGlkZXIsIC50b3Atd3JhcHBlciB7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC50b3Atd3JhcHBlci5zdHJldGNoIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzJD0naG9yaXpvbnRhbCBsYXlvdXQgZmxleCB0b3Atd3JhcHBlciBbW19jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZyldXSc+XG4gICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQgZmxleC1hdXRvIHN0YXRlLWFuZC10b2dnbGUnPlxuICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8gZmxleC1hdXRvJ1xuICAgICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICAgIGluLWRpYWxvZz0nW1tzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSldXSdcbiAgICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSdcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbYnJlYWtTbGlkZXJdXScgY2xhc3M9J2hpZGRlbic+XG4gICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzaG93U2xpZGVyXV0nIHJlc3RhbXA+XG4gICAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGZsZXgtYXV0byBlbmQtanVzdGlmaWVkIHNlY29uZC1saW5lJz5cbiAgICAgICAgICA8aGEtdGhlbWVkLXNsaWRlclxuICAgICAgICAgICAgaWQ9J3NsaWRlcidcbiAgICAgICAgICAgIG1heD1bW21heF1dXG4gICAgICAgICAgICBtaW49W1ttaW5dXVxuICAgICAgICAgICAgdGhlbWU9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5zbGlkZXJfdGhlbWVdXSdcbiAgICAgICAgICAgIGlzLW9uPSdbW2lzT24oc3RhdGVPYmosIG5hbWVPbildXSdcbiAgICAgICAgICAgIHZhbHVlPSd7e3NsaWRlclZhbHVlfX0nXG4gICAgICAgICAgICBkaXNhYmxlLW9mZi13aGVuLW1pbj0ne3tkaXNhYmxlT2ZmV2hlbk1pbn19J1xuICAgICAgICAgICAgb24tY2hhbmdlPSdzbGlkZXJDaGFuZ2VkJ1xuICAgICAgICAgICAgb24tY2xpY2s9J3N0b3BQcm9wYWdhdGlvbic+XG4gICAgICAgICAgPC9oYS10aGVtZWQtc2xpZGVyPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shYnJlYWtTbGlkZXJdXSc+XG4gICAgICAgICAgICA8ZHluYW1pYy13aXRoLWV4dHJhIGhhc3M9J1tbaGFzc11dJyBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXScgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz48L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9tYWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWF4OiBTdHJpbmcsXG4gICAgICB2YWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIHNldFZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgbmFtZU9uOiB7IHR5cGU6IFN0cmluZywgdmFsdWU6ICdvbicgfSxcbiAgICAgIG1pbjogeyB0eXBlOiBOdW1iZXIsIHZhbHVlOiAwIH0sXG4gICAgICBtYXg6IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMjU1IH0sXG5cbiAgICAgIHNsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IEJvb2xlYW4sXG4gICAgICBtb2RlOiBTdHJpbmcsXG4gICAgICBzdHJldGNoU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBicmVha1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaGlkZVNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbGluZVRvb0xvbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG1pbkxpbmVCcmVhazogTnVtYmVyLFxuICAgICAgbWF4TGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICBzaG93U2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fb25Jcm9uUmVzaXplID0gdGhpcy5fb25Jcm9uUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ3N0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpJyxcbiAgICBdO1xuICB9XG5cbiAgX3dhaXRGb3JMYXlvdXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgICBpZiAodGhpcy5fZnJhbWVJZCkgcmV0dXJuO1xuICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSBmYWxzZTtcbiAgICB0aGlzLl9mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl9mcmFtZUlkID0gbnVsbDtcbiAgICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSB0cnVlO1xuICAgICAgdGhpcy5fb25Jcm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0TW9kZSgpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBoaWRlU2xpZGVyOiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicgJiYgdGhpcy5saW5lVG9vTG9uZyxcbiAgICAgIGJyZWFrU2xpZGVyOlxuICAgICAgICAgICAodGhpcy5tb2RlID09PSAnYnJlYWstc2xpZGVyJyB8fCB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpICYmXG4gICAgICAgICAgIHRoaXMubGluZVRvb0xvbmcsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuc2hvd1NsaWRlcikge1xuICAgICAgb2JqLmJyZWFrU2xpZGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gIH1cblxuICBfb25Jcm9uUmVzaXplKCkge1xuICAgIGlmICghdGhpcy5yZWFkeVRvQ29tcHV0ZSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICduby1zbGlkZXInKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBoaWRlU2xpZGVyOiB0cnVlLFxuICAgICAgICBicmVha1NsaWRlcjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2QnJlYWtTbGlkZXIgPSB0aGlzLmJyZWFrU2xpZGVyO1xuICAgIGNvbnN0IHByZXZIaWRlU2xpZGVyID0gdGhpcy5oaWRlU2xpZGVyO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBsaW5lVG9vTG9uZzogZmFsc2UsXG4gICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy4kO1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA8PSB0aGlzLm1pbkxpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXJXaWR0aCA+PSB0aGlzLm1heExpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJldkhpZGVTbGlkZXIgJiYgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdW5oaWRlIHRoZSBzbGlkZXIgaW4gb3JkZXIgdG8gcmVjYWxjdWxhdGUgaGVpZ2h0LlxuICAgICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBzdGF0ZUhlaWdodCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcuc3RhdGUtaW5mbycpLmNsaWVudEhlaWdodDtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBjb250YWluZXJIZWlnaHQgPiBzdGF0ZUhlaWdodCAqIDEuNTtcbiAgICAgIGlmICh0aGlzLmxpbmVUb29Mb25nKSB7XG4gICAgICAgIHRoaXMubWluTGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKCFwcmV2QnJlYWtTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5tYXhMaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2V0TW9kZSgpO1xuICB9XG5cbiAgX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChtb2RlID09PSAnc2luZ2xlLWxpbmUnKSB7XG4gICAgICByZXR1cm4gJ25vd3JhcCc7XG4gICAgfVxuICAgIGlmIChzdHJldGNoU2xpZGVyICYmIGxpbmVUb29Mb25nKSB7XG4gICAgICByZXR1cm4gJ3N0cmV0Y2ggd3JhcCc7XG4gICAgfVxuICAgIHJldHVybiAnd3JhcCc7XG4gIH1cblxuICBfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpIHtcbiAgICBpZiAoaW5EaWFsb2cgfHwgaGlkZVNsaWRlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIGNvbnN0IHBhcmFtID0geyBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH07XG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybjtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXInKTtcbiAgICBpZiAoZXYudGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgIC8vIE5vIFNoYWRvdyBET00gLSB3ZSBoYXZlIGFjY2VzcyB0byBvcmlnaW5hbCB0YXJnZXQuXG4gICAgICAoeyB0YXJnZXQgfSA9IGV2KTtcbiAgICB9IGVsc2UgaWYgKGV2LnBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYucGF0aDtcbiAgICB9IGVsc2UgaWYgKGV2LmNvbXBvc2VkUGF0aCkge1xuICAgICAgW3RhcmdldF0gPSBldi5jb21wb3NlZFBhdGgoKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSAwIHx8ICh2YWx1ZSA8PSB0YXJnZXQubWluICYmICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKSkge1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNaW4sIHBhcmFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1bdGhpcy5zZXRWYWx1ZU5hbWUgfHwgdGhpcy52YWx1ZU5hbWVdID0gdmFsdWU7XG4gICAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZU1heCwgcGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBzbGlkZXJWYWx1ZTogdGhpcy5pc09uKHN0YXRlT2JqLCBuYW1lT24pID8gc3RhdGVPYmouYXR0cmlidXRlc1t2YWx1ZU5hbWVdIDogMCxcbiAgICB9O1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHtcbiAgICAgICAgbWluTGluZUJyZWFrOiAwLFxuICAgICAgICBtYXhMaW5lQnJlYWs6IDk5OSxcbiAgICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgICBtb2RlOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSxcbiAgICAgICAgc3RyZXRjaFNsaWRlcjogISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0cmV0Y2hfc2xpZGVyLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzT24oc3RhdGVPYmosIG5hbWVPbikge1xuICAgIHJldHVybiBzdGF0ZU9iaiAmJiAoIW5hbWVPbiB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gbmFtZU9uKTtcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbihldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInLCBTdGF0ZUNhcmRXaXRoU2xpZGVyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQnPlxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICBjbGFzcz0nc3RhdGUtaW5mbydcbiAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgc2Vjb25kYXJ5LWxpbmUkPSdbW2hhc0V4dHJhKGV4dHJhKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0JyBpdGVtcz0nW1tleHRyYV1dJz5cbiAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3N0YXRlLWluZm8+XG4gICAgICA8ZHluYW1pYy13aXRoLWV4dHJhXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPlxuICAgICAgPC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyJywgU3RhdGVDYXJkV2l0aG91dFNsaWRlcik7XG4iLCIvLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5leHBvcnQgZGVmYXVsdCAoc3VwZXJDbGFzcykgPT4ge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIEV2ZW50c01peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICAgKiAgIHBheWxvYWQuXG4gICAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgICovXG4gICAgZmlyZSh0eXBlLCBkZXRhaWwgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0eXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IG9wdGlvbnMuYnViYmxlcyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogQm9vbGVhbihvcHRpb25zLmNhbmNlbGFibGUpLFxuICAgICAgICBjb21wb3NlZDogb3B0aW9ucy5jb21wb3NlZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuY29tcG9zZWQsXG4gICAgICB9KTtcbiAgICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbDtcbiAgICAgIGNvbnN0IG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgdGhpcztcbiAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudHNNaXhpbjtcbn07XG4iLCJpbXBvcnQgaGFzc0F0dHJpYnV0ZXNVdGlsIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMnO1xuXG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgfHwge307XG5jb25zdCBTVVBQT1JURURfU0xJREVSX01PREVTID0gW1xuICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbl07XG5cbmNvbnN0IGN1c3RvbVVpQXR0cmlidXRlcyA9IHtcbiAgZ3JvdXA6IHVuZGVmaW5lZCxcbiAgZGV2aWNlOiB1bmRlZmluZWQsXG4gIHRlbXBsYXRlczogdW5kZWZpbmVkLFxuICBjb250cm9sX2VsZW1lbnQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgc3RhdGVfY2FyZF9tb2RlOiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBsaWdodDogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY292ZXI6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNsaW1hdGU6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgICcqJzogWydiYWRnZXMnXSxcbiAgICB9LFxuICB9LFxuICBzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgYmFkZ2VzX2xpc3Q6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHNob3dfbGFzdF9jaGFuZ2VkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2NvbnRyb2w6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGV4dHJhX2RhdGFfdGVtcGxhdGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgZXh0cmFfYmFkZ2U6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHN0cmV0Y2hfc2xpZGVyOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBzbGlkZXJfdGhlbWU6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHRoZW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGNvbmZpcm1fY29udHJvbHM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2luX2RlZmF1bHRfdmlldzogeyB0eXBlOiAnYm9vbGVhbicgfSxcbn07XG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9IGhhc3NBdHRyaWJ1dGVzVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTO1xud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9IGhhc3NBdHRyaWJ1dGVzVXRpbC5VTktOT1dOX1RZUEU7XG5PYmplY3QuYXNzaWduKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBjdXN0b21VaUF0dHJpYnV0ZXMpO1xuIiwiaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCBnZXRWaWV3RW50aXRpZXMgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyc7XG5cbmltcG9ydCAnLi4vZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyc7XG5pbXBvcnQgVkVSU0lPTiBmcm9tICcuL3ZlcnNpb24uanMnO1xuaW1wb3J0ICcuL2hhc3MtYXR0cmlidXRlLXV0aWwuanMnO1xuXG53aW5kb3cuY3VzdG9tVUkgPSB3aW5kb3cuY3VzdG9tVUkgfHwge1xuICBTVVBQT1JURURfU0xJREVSX01PREVTOiBbXG4gICAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG4gIF0sXG5cbiAgZG9tSG9zdChlbGVtKSB7XG4gICAgaWYgKGVsZW0gPT09IGRvY3VtZW50KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCByb290ID0gZWxlbS5nZXRSb290Tm9kZSgpO1xuICAgIHJldHVybiAocm9vdCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gLyoqIEB0eXBlIHtTaGFkb3dSb290fSAqLyAocm9vdCkuaG9zdCA6IHJvb3Q7XG4gIH0sXG5cbiAgbGlnaHRPclNoYWRvdyhlbGVtLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBlbGVtLnNoYWRvd1Jvb3QgP1xuICAgICAgZWxlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDpcbiAgICAgIGVsZW0ucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0sXG5cbiAgZ2V0RWxlbWVudEhpZXJhcmNoeShyb290LCBoaWVyYXJjaHkpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZWxlbSA9IGhpZXJhcmNoeS5zaGlmdCgpO1xuICAgIGlmIChlbGVtKSB7XG4gICAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoXG4gICAgICAgIHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KHJvb3QsIGVsZW0pLCBoaWVyYXJjaHkpO1xuICAgIH1cbiAgICByZXR1cm4gcm9vdDtcbiAgfSxcblxuICBnZXRDb250ZXh0KGVsZW0pIHtcbiAgICBpZiAoZWxlbS5fY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtLl9jb250ZXh0ID0gW107XG4gICAgICBmb3IgKGxldCBlbGVtZW50ID0gKGVsZW0udGFnTmFtZSA9PT0gJ0hBLUVOVElUSUVTLUNBUkQnID8gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbSkgOiBlbGVtKTtcbiAgICAgICAgZWxlbWVudDsgZWxlbWVudCA9IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW1lbnQpKSB7XG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICAgICAgY2FzZSAnSEEtRU5USVRJRVMtQ0FSRCc6XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ncm91cEVudGl0eSkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5ncm91cEVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5ID09PSBmYWxzZSAmJiBlbGVtZW50LnN0YXRlcyAmJiBlbGVtZW50LnN0YXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGBncm91cC4ke2NvbXB1dGVTdGF0ZURvbWFpbihlbGVtZW50LnN0YXRlc1swXSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdNT1JFLUlORk8tR1JPVVAnOlxuICAgICAgICAgIGNhc2UgJ1NUQVRFLUNBUkQtQ09OVEVOVCc6XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0ZU9iaikge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5zdGF0ZU9iai5lbnRpdHlfaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnSEEtQ0FSRFMnOlxuICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSB8fCAnZGVmYXVsdF92aWV3Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBubyBkZWZhdWx0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW0uX2NvbnRleHQucmV2ZXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbS5fY29udGV4dDtcbiAgfSxcblxuICBmaW5kTWF0Y2goa2V5LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSByZXR1cm4gbnVsbDtcbiAgICBpZiAob3B0aW9uc1trZXldKSByZXR1cm4ga2V5O1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5maW5kKG9wdGlvbiA9PiBrZXkubWF0Y2goYF4ke29wdGlvbn0kYCkpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2Uoc3RhdGVPYmopIHtcbiAgICBjb25zdCBuYW1lID0gd2luZG93LmN1c3RvbVVJLmdldE5hbWUoKTtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKG5hbWUsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlW21hdGNoXSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAoZWxlbSwgc3RhdGVPYmopIHtcbiAgICBjb25zdCBjb250ZXh0ID0gd2luZG93LmN1c3RvbVVJLmdldENvbnRleHQoZWxlbSk7XG4gICAgaWYgKCFjb250ZXh0KSByZXR1cm4gc3RhdGVPYmo7XG5cbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuICAgIGNvbnRleHQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChjLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGF0dHJpYnV0ZXMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG5cbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgX3NldEtlZXAob2JqLCB2YWx1ZSkge1xuICAgIGlmIChvYmouX2N1aV9rZWVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IG9iai5fY3VpX2tlZXAgJiYgdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIGlmICghYXR0cmlidXRlcy50ZW1wbGF0ZXMpIHtcbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgdHJ1ZSk7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IG5ld0F0dHJpYnV0ZXMgPSB7fTtcbiAgICBsZXQgaGFzR2xvYmFsID0gZmFsc2U7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzLnRlbXBsYXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGF0dHJpYnV0ZXMudGVtcGxhdGVzW2tleV07XG4gICAgICBpZiAodGVtcGxhdGUubWF0Y2goL1xcYihlbnRpdGllc3xoYXNzKVxcYi8pKSB7XG4gICAgICAgIGhhc0dsb2JhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IHdpbmRvdy5jdXN0b21VSS5jb21wdXRlVGVtcGxhdGUoXG4gICAgICAgIHRlbXBsYXRlLCBoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzLFxuICAgICAgICAoc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlcyAmJiBzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzW2tleV0pIHx8XG4gICAgICAgICAgICBhdHRyaWJ1dGVzW2tleV0sXG4gICAgICAgIHN0YXRlT2JqLnVudGVtcGxhdGVkX3N0YXRlIHx8IHN0YXRlT2JqLnN0YXRlKTtcbiAgICAgIC8vIEluIGNhc2Ugb2YgbnVsbCBkb24ndCBzZXQgdGhlIHZhbHVlLlxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XG4gICAgICBuZXdBdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIGlmIChrZXkgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5zdGF0ZSkge1xuICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ19zdGF0ZURpc3BsYXknKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouX3N0YXRlRGlzcGxheSkge1xuICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBhdHRyaWJ1dGVzW2tleV0pIHtcbiAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCAhaGFzR2xvYmFsKTtcbiAgICBpZiAoIWhhc0NoYW5nZXMpIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMgPT09IGF0dHJpYnV0ZXMpIHtcbiAgICAgIC8vIFdlIGFyZSBvcGVyYXRpbmcgb24gcmVhbCBhdHRyaWJ1dGVzLiBSZXBsYWNlIHRoZW0uXG4gICAgICBjb25zdCByZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBuZXdBdHRyaWJ1dGVzKTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3QXR0cmlidXRlcywgJ3N0YXRlJykpIHtcbiAgICAgICAgaWYgKG5ld0F0dHJpYnV0ZXMuc3RhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQuc3RhdGUgPSBTdHJpbmcobmV3QXR0cmlidXRlcy5zdGF0ZSk7XG4gICAgICAgICAgcmVzdWx0LnVudGVtcGxhdGVkX3N0YXRlID0gc3RhdGVPYmouc3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3QXR0cmlidXRlcywgJ19zdGF0ZURpc3BsYXknKSkge1xuICAgICAgICByZXN1bHQuX3N0YXRlRGlzcGxheSA9IG5ld0F0dHJpYnV0ZXMuX3N0YXRlRGlzcGxheTtcbiAgICAgICAgcmVzdWx0LnVudGVtcGxhdGVkX3N0YXRlRGlzcGxheSA9IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAocmVzdWx0LCAhaGFzR2xvYmFsKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vIE9wZXJhdGluZyBvbiBjb250ZXh0LWF3YXJlIGF0dHJpYnV0ZXMuIFJldHVybiBzaGFsbG93IGNvcHkgb2Ygb2JqZWN0LlxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iaik7XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmV3UmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBzdGF0ZU9iai5hdHRyaWJ1dGVzKTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrQXR0cmlidXRlcyhvYmopIHtcbiAgICAgIGlmICghb2JqKSByZXR1cm47XG4gICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCgoYXR0cmlidXRlcykgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgICAgICBoYXNzLCBzdGF0ZXMsIG5ld1Jlc3VsdCwgYXR0cmlidXRlcyk7XG4gICAgICAgIGhhc0NoYW5nZXMgfD0gKHJlc3VsdCAhPT0gbmV3UmVzdWx0KTtcbiAgICAgIH0pO1xuICAgICAgY2hlY2tBdHRyaWJ1dGVzKG9iai5kZXZpY2UpO1xuICAgICAgY2hlY2tBdHRyaWJ1dGVzKG9iai5ncm91cCk7XG4gICAgfVxuXG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlKTtcbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgaWYgKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopIHJldHVybiBuZXdSZXN1bHQ7XG4gICAgaWYgKGhhc0NoYW5nZXMpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iaik7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZU9iajtcbiAgfSxcblxuICBhcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXR5X2lkOiBzdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBzdGF0ZTogc3RhdGVPYmouc3RhdGUsXG4gICAgICBhdHRyaWJ1dGVzOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKSxcbiAgICAgIHVudGVtcGxhdGVkX2F0dHJpYnV0ZXM6IHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlT2JqLmxhc3RfY2hhbmdlZCxcbiAgICB9O1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0KGVsZW0sIHN0YXRlT2JqLCBpbkRpYWxvZywgYWxsb3dIaWRkZW4pIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBzdGF0ZU9iajtcbiAgICBsZXQgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2Uoc3RhdGVPYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAoZWxlbSwgb2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGVsZW0uaGFzcywgZWxlbS5oYXNzLnN0YXRlcywgb2JqLCBvYmouYXR0cmlidXRlcyk7XG5cbiAgICBpZiAob2JqICE9PSBzdGF0ZU9iaiAmJiBvYmouYXR0cmlidXRlcy5oaWRkZW4gJiYgYWxsb3dIaWRkZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZpeEdyb3VwVGl0bGVzKCkge1xuICAgIGNvbnN0IGhvbWVBc3Npc3RhbnRNYWluID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbiddKTtcbiAgICBpZiAoaG9tZUFzc2lzdGFudE1haW4gPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuZml4R3JvdXBUaXRsZXMsIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShob21lQXNzaXN0YW50TWFpbiwgW1xuICAgICAgJ3BhcnRpYWwtY2FyZHMnLFxuICAgICAgJ2hhLWNhcmRzW3ZpZXctdmlzaWJsZV0nXSk7XG4gICAgaWYgKGhhQ2FyZHMgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coaGFDYXJkcywgJy5tYWluJykgfHwgaGFDYXJkcy4kLm1haW47XG4gICAgY29uc3QgY2FyZHMgPSBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJ2hhLWVudGl0aWVzLWNhcmQnKTtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBpZiAoY2FyZC5ncm91cEVudGl0eSkge1xuICAgICAgICBjb25zdCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgY2FyZCxcbiAgICAgICAgICBjYXJkLmdyb3VwRW50aXR5LFxuICAgICAgICAgIGZhbHNlIC8qIGluRGlhbG9nICovLFxuICAgICAgICAgIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKTtcbiAgICAgICAgaWYgKG9iaiAhPT0gY2FyZC5ncm91cEVudGl0eSAmJiBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lKSB7XG4gICAgICAgICAgY29uc3QgbmFtZUVsZW0gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhjYXJkLCAnLm5hbWUnKTtcbiAgICAgICAgICBuYW1lRWxlbS50ZXh0Q29udGVudCA9IG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBjb250cm9sQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgY29uc3QgcGFydGlhbENhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbicsXG4gICAgICAncGFydGlhbC1jYXJkcyddKTtcbiAgICBpZiAocGFydGlhbENhcmRzID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgIHdpbmRvdy5jdXN0b21VSS5jb250cm9sQ29sdW1ucy5iaW5kKG51bGwsIGNvbHVtbnMpLFxuICAgICAgICAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGFydGlhbENhcmRzLm1xbHMuZm9yRWFjaCgobXFsKSA9PiB7XG4gICAgICBtcWwucmVtb3ZlTGlzdGVuZXIocGFydGlhbENhcmRzLmhhbmRsZVdpbmRvd0NoYW5nZSk7XG4gICAgfSk7XG4gICAgcGFydGlhbENhcmRzLm1xbHMgPSBjb2x1bW5zLm1hcCgod2lkdGgpID0+IHtcbiAgICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke3dpZHRofXB4KWApO1xuICAgICAgbXFsLmFkZExpc3RlbmVyKHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UpO1xuICAgICAgcmV0dXJuIG1xbDtcbiAgICB9KTtcbiAgICBwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlKCk7XG4gIH0sXG5cbiAgdXNlQ3VzdG9taXplcigpIHtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGNvbnN0IGN1c3RvbWl6ZXIgPSBtYWluLmhhc3Muc3RhdGVzWydjdXN0b21pemVyLmN1c3RvbWl6ZXInXTtcbiAgICBpZiAoIWN1c3RvbWl6ZXIpIHJldHVybjtcbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpIHtcbiAgICAgIHdpbmRvdy5jdXN0b21VSS5jb250cm9sQ29sdW1ucyhjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucyk7XG4gICAgfVxuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuaGlkZV9hdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsICYmIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKSB7XG4gICAgICAgIGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGF0dHIpKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1thdHRyXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGVDb25maWdQYW5lbCgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjb25zdCBoYVBhbmVsQ29uZmlnID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbicsXG4gICAgICAncGFydGlhbC1wYW5lbC1yZXNvbHZlcicsXG4gICAgICAnaGEtcGFuZWwtY29uZmlnJ10pO1xuICAgIGlmICghaGFQYW5lbENvbmZpZykge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxMDBtcy5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS51cGRhdGVDb25maWdQYW5lbCwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFDb25maWdOYXZpZ2F0aW9uID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaGFQYW5lbENvbmZpZywgW1xuICAgICAgJ2hhLWNvbmZpZy1kYXNoYm9hcmQnLFxuICAgICAgJ2hhLWNvbmZpZy1uYXZpZ2F0aW9uJ10pO1xuICAgIGlmIChoYUNvbmZpZ05hdmlnYXRpb24pIHtcbiAgICAgIC8vIEhhQ29uZmlnTmF2aWdhdGlvbiBzdGFydGVkIHVzaW5nIGxvY2FsaXplIG9uIDIxLjAxLjIwMThcbiAgICAgIGlmIChoYUNvbmZpZ05hdmlnYXRpb24ubG9jYWxpemUgJiYgIWhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCkge1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2ggPSB0cnVlO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZCA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZDtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQgPSAoaGFzcywgcGFnZSkgPT5cbiAgICAgICAgICBwYWdlID09PSAnY3VzdG9tdWknIHx8IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkKGhhc3MsIHBhZ2UpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ0N1c3RvbSBVSScgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24ocGFnZSwgbG9jYWxpemUpKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnU2V0VUkgdHdlYWtzJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24ocGFnZSwgbG9jYWxpemUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFDb25maWdOYXZpZ2F0aW9uLnBhZ2VzLnNvbWUoY29uZiA9PiBjb25mID09PSAnY3VzdG9tdWknIHx8IGNvbmYuZG9tYWluID09PSAnY3VzdG9tdWknKSkge1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24ucHVzaCgncGFnZXMnLCBoYUNvbmZpZ05hdmlnYXRpb24ubG9jYWxpemUgPyAnY3VzdG9tdWknIDoge1xuICAgICAgICAgIGRvbWFpbjogJ2N1c3RvbXVpJyxcbiAgICAgICAgICBjYXB0aW9uOiAnQ3VzdG9tIFVJJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldCBVSSB0d2Vha3MuJyxcbiAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRIYUNvbmZpZ0N1c3RvbVVpID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hhLWNvbmZpZy1jdXN0b20tdWknKTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuaXNXaWRlID0gaGFQYW5lbENvbmZpZy5pc1dpZGU7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLnNldEF0dHJpYnV0ZSgncGFnZS1uYW1lJywgJ2N1c3RvbXVpJyk7XG4gICAgICByZXR1cm4gaGFDb25maWdDdXN0b21VaTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXJvblBhZ2VzID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coaGFQYW5lbENvbmZpZywgJ2lyb24tcGFnZXMnKTtcbiAgICBpZiAoaXJvblBhZ2VzKSB7XG4gICAgICBpZiAoaXJvblBhZ2VzLmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIGlyb25QYWdlcy5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgICAgaXJvblBhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24taXRlbXMtY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKSkge1xuICAgICAgICAgICAgaXJvblBhZ2VzLnNlbGVjdCgnY3VzdG9tdWknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByb290ID0gaGFQYW5lbENvbmZpZy5zaGFkb3dSb290IHx8IGhhUGFuZWxDb25maWc7XG4gICAgICBpZiAocm9vdC5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgfVxuICAgICAgY29uc3QgdmlzaWJsZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJyk7XG4gICAgICByb290Lmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IHZpc2libGUgPyAnJyA6ICdub25lJztcbiAgICB9XG4gIH0sXG5cbiAgaW5zdGFsbFN0YXRlc0hvb2soKSB7XG4gICAgY29uc3QgaG9tZUFzc2lzdGFudCA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIWhvbWVBc3Npc3RhbnQgfHwgIWhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzKSByZXR1cm47XG4gICAgY29uc3Qgb3JpZ2luYWxVcGRhdGUgPSBob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcztcbiAgICBob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcyA9IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBjb25zdCB7IGhhc3MgfSA9IHRoaXM7XG4gICAgICBpZiAob2JqLnN0YXRlcykge1xuICAgICAgICBPYmplY3Qua2V5cyhvYmouc3RhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRpdHkgPSBvYmouc3RhdGVzW2tleV07XG4gICAgICAgICAgaWYgKGVudGl0eS5fY3VpX2tlZXApIHJldHVybjtcbiAgICAgICAgICBjb25zdCBuZXdFbnRpdHkgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBvYmouc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgIGlmIChoYXNzLnN0YXRlcyAmJiBlbnRpdHkgIT09IGhhc3Muc3RhdGVzW2tleV0pIHtcbiAgICAgICAgICAgIC8vIE5ldyBzdGF0ZSBhcnJpdmVkLiBQdXQgbW9kaWZpZWQgc3RhdGUgaW4uXG4gICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkgIT09IG5ld0VudGl0eSkge1xuICAgICAgICAgICAgLy8gSXQncyB0aGUgc2FtZSBzdGF0ZSBidXQgY29udGVudHMgY2hhbmdlZCBkdWUgdG8gb3RoZXIgc3RhdGUgY2hhbmdlcy5cbiAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgb3JpZ2luYWxVcGRhdGUuY2FsbCh0aGlzLCBvYmopO1xuICAgICAgaWYgKG9iai50aGVtZXMgJiYgaGFzcy5fdGhlbWVXYWl0ZXJzKSB7XG4gICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycy5mb3JFYWNoKHdhaXRlciA9PiB3YWl0ZXIuc3RhdGVDaGFuZ2VkKHdhaXRlci5zdGF0ZSkpO1xuICAgICAgICBoYXNzLl90aGVtZVdhaXRlcnMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGlmIChtYWluLmhhc3MgJiYgbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgbWFpbi5fdXBkYXRlSGFzcyh7IHN0YXRlczogbWFpbi5oYXNzLnN0YXRlcyB9KTtcbiAgICB9XG4gIH0sXG5cbiAgaW5zdGFsbFBhcnRpYWxDYXJkcygpIHtcbiAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3BhcnRpYWwtY2FyZHMnKTtcbiAgICBpZiAoIXBhcnRpYWxDYXJkcyB8fCAhcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIpIHJldHVybjtcbiAgICBwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlciA9IChoYXNzLCBlbnRpdHlJZCkgPT4ge1xuICAgICAgaWYgKGhhc3Muc3RhdGVzW2VudGl0eUlkXS5hdHRyaWJ1dGVzLmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgZXhjbHVkZXMgPSB7fTtcbiAgICAgIE9iamVjdC52YWx1ZXMoaGFzcy5zdGF0ZXMpLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMgJiYgZW50aXR5LmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcpIHtcbiAgICAgICAgICBjb25zdCBleGNsdWRlRW50aXR5SWQgPSBlbnRpdHkuZW50aXR5X2lkO1xuICAgICAgICAgIGlmIChleGNsdWRlc1tleGNsdWRlRW50aXR5SWRdKSByZXR1cm47XG4gICAgICAgICAgZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSA9IGVudGl0eTtcbiAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMudmlldykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgZXhjbHVkZXMsIGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgZW50aXR5KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiAhZXhjbHVkZXNbZW50aXR5SWRdO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICBpZiAoIWtsYXNzIHx8ICFrbGFzcy5wcm90b3R5cGUpIHJldHVybjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoa2xhc3MucHJvdG90eXBlLCAnbG9jYWxpemUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGN1c3RvbUxvY2FsaXplKHYpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZU9iaiAmJiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1c3RvbUxvY2FsaXplO1xuICAgICAgfSxcbiAgICAgIHNldCgpIHt9LFxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEFsbG93cyB0aGVtaW5nIFwicmVndWxhclwiIHRvcCBiYWRnZXMuXG4gIGluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSgpIHtcbiAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICBpZiAoIWhhU3RhdGVMYWJlbEJhZGdlIHx8ICFoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkKSByZXR1cm47XG4gICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAvLyBUT0RPOiBDYWxsIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdFxuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycyA9IHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzIHx8IFtdO1xuICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzLnB1c2godGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgICAgaWYgKHRoaXMuc3RhcnRJbnRlcnZhbCkge1xuICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKHN0YXRlT2JqKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGNvbnN0IHN0YXRlQmFkZ2UgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3N0YXRlLWJhZGdlJyk7XG4gICAgaWYgKCFzdGF0ZUJhZGdlIHx8ICFzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZSkgcmV0dXJuO1xuICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZTtcbiAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgIHN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZUljb25BcHBlYXJhbmNlID0gZnVuY3Rpb24gY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2Uoc3RhdGVPYmopIHtcbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiQuaWNvbi5zdHlsZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgZmlsdGVyOiAnJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlLmNhbGwodGhpcywgc3RhdGVPYmopO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgaW5zdGFsbEhhQXR0cmlidXRlcygpIHtcbiAgICBjb25zdCBoYUF0dHJpYnV0ZXMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWF0dHJpYnV0ZXMnKTtcbiAgICBpZiAoIWhhQXR0cmlidXRlcyB8fCAhaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5IHx8XG4gICAgICAgIXdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCkgcmV0dXJuO1xuICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5ID0gZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykuY29uY2F0KGV4dHJhRmlsdGVycyA/IGV4dHJhRmlsdGVycy5zcGxpdCgnLCcpIDogW10pO1xuICAgIH07XG4gIH0sXG5cbiAgaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjb25zdCBoYUZvcm1DdXN0b21pemUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWZvcm0tY3VzdG9taXplJyk7XG4gICAgaWYgKCFoYUZvcm1DdXN0b21pemUpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSA9IHRydWU7XG5cbiAgICBpZiAoIXdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCkgcmV0dXJuO1xuICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKSB7XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSA9XG4gICAgICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XVxuICAgICAgICAgICAgICB8fCB7IHR5cGU6IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgfTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdE9wZW5PYmplY3Qoa2V5LCBjb25maWcudHlwZSA9PT0gJ2pzb24nID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMpIHtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zID1cbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgICAgICAgbG9jYWxBdHRyaWJ1dGVzLCBnbG9iYWxBdHRyaWJ1dGVzLCBleGlzdGluZ0F0dHJpYnV0ZXMsIG5ld0F0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBjb25zdCBrbm93bktleXMgPVxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmYgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmYgJiYgKCFjb25mLmRvbWFpbnMgfHwgIXRoaXMuZW50aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25mLmRvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHRoaXMuZW50aXR5KSkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGxvY2FsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGdsb2JhbEF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhleGlzdGluZ0F0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhuZXdBdHRyaWJ1dGVzKSk7XG4gICAgICAgICAgcmV0dXJuIGtub3duS2V5cy5zb3J0KCkuY29uY2F0KCdPdGhlcicpO1xuICAgICAgICB9O1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsQ2xhc3NIb29rcygpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSA9IHRydWU7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxQYXJ0aWFsQ2FyZHMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlc0hvb2soKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZUJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUF0dHJpYnV0ZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NlbmUnKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NyaXB0Jyk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxDbGFzc0hvb2tzKCk7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIW1haW4uaGFzcyB8fCAhbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgLy8gQ29ubmVjdGlvbiB3YXNuJ3QgbWFkZSB5ZXQuIFRyeSBpbiAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbml0LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmN1c3RvbVVJLmluaXREb25lID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS51c2VDdXN0b21pemVyKCk7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb24tY2hhbmdlZCcsIHdpbmRvdy5zZXRUaW1lb3V0LmJpbmQobnVsbCwgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzLCAxMDApKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5sb2coYExvYWRlZCBDdXN0b21VSSAke1ZFUlNJT059YCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgaWYgKCF3aW5kb3cuQ1VTVE9NX1VJX0xJU1QpIHtcbiAgICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVCA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QucHVzaCh7XG4gICAgICBuYW1lOiAnQ3VzdG9tVUknLFxuICAgICAgdmVyc2lvbjogVkVSU0lPTixcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXktZ2l0L2hvbWUtYXNzaXN0YW50LWN1c3RvbS11aScsXG4gICAgfSk7XG4gIH0sXG5cbiAgcnVuSG9va3MoKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUoKTtcbiAgfSxcblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhLWRldmljZS1uYW1lJykgfHwgJyc7XG4gIH0sXG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScsIG5hbWUgfHwgJycpO1xuICB9LFxuXG4gIGNvbXB1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uQm9keSA9ICh0ZW1wbGF0ZS5pbmRleE9mKCdyZXR1cm4nKSA+PSAwKSA/IHRlbXBsYXRlIDogYHJldHVybiBcXGAke3RlbXBsYXRlfVxcYDtgO1xuICAgIHRyeSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ2hhc3MnLCAnZW50aXRpZXMnLCAnZW50aXR5JywgJ2F0dHJpYnV0ZXMnLCAnYXR0cmlidXRlJywgJ3N0YXRlJywgZnVuY3Rpb25Cb2R5KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIHJldHVybiBmdW5jKGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGlmICgoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB8fCBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfSBpbiB0ZW1wbGF0ZSAke2Z1bmN0aW9uQm9keX1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9LFxufTtcbndpbmRvdy5jdXN0b21VSS5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCAnMjAxODA2MDInO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==