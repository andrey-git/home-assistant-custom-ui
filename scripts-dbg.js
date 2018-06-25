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
var DEFAULT_DOMAIN_ICON = 'hass:bookmark';

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
/* harmony default export */ __webpack_exports__["default"] = ('20180625');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc3MtYXR0cmlidXRlLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkiLCJTVEFURVNfT0ZGIiwiVU5JVF9DIiwiVU5JVF9GIiwiREVGQVVMVF9WSUVXX0VOVElUWV9JRCIsImFwcGx5VGhlbWVzT25FbGVtZW50IiwiZWxlbWVudCIsInRoZW1lcyIsImxvY2FsVGhlbWUiLCJ1cGRhdGVNZXRhIiwiX3RoZW1lcyIsInRoZW1lTmFtZSIsImRlZmF1bHRfdGhlbWUiLCJzdHlsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0aGVtZSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJlZml4ZWRLZXkiLCJ1cGRhdGVTdHlsZXMiLCJ3aW5kb3ciLCJTaGFkeUNTUyIsInN0eWxlU3VidHJlZSIsIm1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVtZUNvbG9yIiwiZHluYW1pY0NvbnRlbnRVcGRhdGVyIiwicm9vdCIsIm5ld0VsZW1lbnRUYWciLCJhdHRyaWJ1dGVzIiwicm9vdEVsIiwiY3VzdG9tRWwiLCJsYXN0Q2hpbGQiLCJ0YWdOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwiY2FuVG9nZ2xlRG9tYWluIiwiaGFzcyIsImRvbWFpbiIsInNlcnZpY2VzIiwiY29uZmlnIiwiY2FuVG9nZ2xlU3RhdGUiLCJzdGF0ZU9iaiIsImNvbXB1dGVTdGF0ZURvbWFpbiIsInN0YXRlIiwic3VwcG9ydGVkX2ZlYXR1cmVzIiwiY29tcHV0ZURvbWFpbiIsImVudGl0eUlkIiwic3Vic3RyIiwiaW5kZXhPZiIsIl9kb21haW4iLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiRE9NQUlOX0RFVklDRV9DTEFTUyIsImJpbmFyeV9zZW5zb3IiLCJjb3ZlciIsInNlbnNvciIsIlVOS05PV05fVFlQRSIsIkFERF9UWVBFIiwiVFlQRV9UT19UQUciLCJzdHJpbmciLCJqc29uIiwiaWNvbiIsImJvb2xlYW4iLCJhcnJheSIsIkxPR0lDX1NUQVRFX0FUVFJJQlVURVMiLCJlbnRpdHlfcGljdHVyZSIsInVuZGVmaW5lZCIsImZyaWVuZGx5X25hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJlbXVsYXRlZF9odWUiLCJkb21haW5zIiwiZW11bGF0ZWRfaHVlX25hbWUiLCJoYWFza2FfaGlkZGVuIiwiaGFhc2thX25hbWUiLCJob21lYnJpZGdlX2hpZGRlbiIsImhvbWVicmlkZ2VfbmFtZSIsImF0dHJpYnV0aW9uIiwiY3VzdG9tX3VpX21vcmVfaW5mbyIsImN1c3RvbV91aV9zdGF0ZV9jYXJkIiwiZGV2aWNlX2NsYXNzIiwib3B0aW9ucyIsImFzc3VtZWRfc3RhdGUiLCJpbml0aWFsX3N0YXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ0b1N0cmluZyIsImxpdGVyYWxWYWx1ZSIsIkVycm9yIiwiaHRtbFZhbHVlIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsImh0bWwiLCJzdHJpbmdzIiwidGVtcGxhdGUiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJ2IiwiaWR4IiwiaHRtbExpdGVyYWwiLCJDdWlCYXNlRWxlbWVudCIsIlBvbHltZXIiLCJFbGVtZW50IiwicHJvcGVydGllcyIsImluRGlhbG9nIiwiQm9vbGVhbiIsImNvbnRyb2xFbGVtZW50IiwiU3RyaW5nIiwiZXh0cmEiLCJBcnJheSIsImNvbXB1dGVkIiwiY29tcHV0ZUV4dHJhIiwiZXh0cmFzIiwiZXh0cmFfZGF0YV90ZW1wbGF0ZSIsImlzQXJyYXkiLCJtYXAiLCJjdXN0b21VSSIsImNvbXB1dGVUZW1wbGF0ZSIsInN0YXRlcyIsImZpbHRlciIsInNob3dMYXN0Q2hhbmdlZCIsImxlbmd0aCIsInNob3dfbGFzdF9jaGFuZ2VkIiwiaGFzRXh0cmEiLCJEeW5hbWljRWxlbWVudCIsImVsZW1lbnROYW1lIiwib2JzZXJ2ZXJzIiwib2JzZXJ2ZXJGdW5jIiwidG9VcHBlckNhc2UiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkR5bmFtaWNXaXRoRXh0cmEiLCJnZXQiLCJleHRyYU9iaiIsIl9hdHRhY2hlZCIsImV4dHJhT2JqVmlzaWJsZSIsImNvbm5lY3RlZENhbGxiYWNrIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJfaXNBdHRhY2hlZCIsImF0dGFjaGVkIiwiZXh0cmFfYmFkZ2UiLCJleHRyYUJhZGdlcyIsImV4dHJhQmFkZ2UiLCJtYXliZUNoYW5nZU9iamVjdCIsImF0dHJpYnV0ZSIsInVuaXQiLCJibGFja2xpc3QiLCJibGFja2xpc3Rfc3RhdGVzIiwic29tZSIsIlJlZ0V4cCIsInRlc3QiLCJfZW50aXR5RGlzcGxheSIsImNvbXB1dGVFeHRyYVZpc2libGUiLCJleHRyYUNsYXNzIiwiX3Nob3dDb250cm9sIiwiaGlkZV9jb250cm9sIiwiY29tcHV0ZVN0YXRlRGlzcGxheSIsImhhTG9jYWxpemUiLCJsb2NhbGl6ZSIsImlzQ29uZmlybUNvbnRyb2xzIiwiY29uZmlybV9jb250cm9scyIsImNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrIiwiY2xpY2tIYW5kbGVyIiwiZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImxvY2siLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInN0b3BQcm9wYWdhdGlvbiIsImFwcGx5VGhlbWVzIiwiZXh0cmFEb21DaGFuZ2VkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJIYUNvbmZpZ0N1c3RvbVVpIiwiRXZlbnRzTWl4aW4iLCJpc1dpZGUiLCJuYW1lIiwib2JzZXJ2ZXIiLCJyZWFkeSIsImdldE5hbWUiLCJuYW1lQ2hhbmdlZCIsInNldE5hbWUiLCJfYmFja0hhbmRsZXIiLCJoaXN0b3J5IiwiYmFjayIsImZpcmUiLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwibWluIiwiTnVtYmVyIiwibWF4IiwicGluIiwiaXNPbiIsIm5vdGlmeSIsIl90aGVtZWRNaW4iLCJfZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiYXR0ciIsImRlZiIsImNvbXB1dGVDbGFzcyIsInRoZW1lZE1pbiIsInZhbHVlQ2hhbmdlZCIsImV2IiwidGFyZ2V0IiwiU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMiLCJET01BSU5fVE9fU0xJREVSX1NVUFBPUlQiLCJsaWdodCIsImNsaW1hdGUiLCJUWVBFX1RPX0NPTlRST0wiLCJ0b2dnbGUiLCJkaXNwbGF5IiwiU3RhdGVDYXJkQ3VzdG9tVWkiLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9jb250YWluZXIiLCJzZXRQcm9wZXJ0eSIsImlucHV0Q2hhbmdlZCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWRnZU1vZGUiLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiYmFkZ2VzX2xpc3QiLCJwdXNoIiwicGFyYW1zIiwid2lkdGgiLCJmb250U2l6ZSIsImNsZWFuQmFkZ2VTdHlsZSIsIm1vZGlmaWVkT2JqIiwidGhlbWVUYXJnZXQiLCJtYXliZUhpZGVFbnRpdHkiLCJzbGlkZXJFbGlnaWJsZV8iLCJvYmoiLCJzdGF0ZV9jYXJkX21vZGUiLCJyZWd1bGFyTW9kZV8iLCJvcmlnaW5hbFN0YXRlQ2FyZFR5cGUiLCJjdXN0b21TdGF0ZUNhcmRUeXBlIiwic2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSIsInN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeSIsInNlcnZpY2VNaW4iLCJzZXJ2aWNlTWF4IiwidmFsdWVOYW1lIiwic2V0VmFsdWVOYW1lIiwibmFtZU9uIiwibWluX3RlbXAiLCJtYXhfdGVtcCIsImNvbnRyb2xfZWxlbWVudCIsIlN0YXRlQ2FyZFdpdGhTbGlkZXIiLCJzbGlkZXJWYWx1ZSIsIm1vZGUiLCJzdHJldGNoU2xpZGVyIiwiYnJlYWtTbGlkZXIiLCJoaWRlU2xpZGVyIiwibGluZVRvb0xvbmciLCJtaW5MaW5lQnJlYWsiLCJtYXhMaW5lQnJlYWsiLCJzaG93U2xpZGVyIiwiX29uSXJvblJlc2l6ZSIsImJpbmQiLCJfaXNDb25uZWN0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3dhaXRGb3JMYXlvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX3NldE1vZGUiLCJfZnJhbWVJZCIsInJlYWR5VG9Db21wdXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicHJldkJyZWFrU2xpZGVyIiwicHJldkhpZGVTbGlkZXIiLCIkIiwiY29udGFpbmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0YXRlSGVpZ2h0IiwiX2NvbXB1dGVXcmFwQ2xhc3MiLCJfc2hvd1NsaWRlciIsInNsaWRlckNoYW5nZWQiLCJwYXJzZUludCIsInBhcmFtIiwiaXNOYU4iLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwiY2FsbFNlcnZpY2UiLCJzdGF0ZU9iakNoYW5nZWQiLCJzdHJldGNoX3NsaWRlciIsIlN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIiLCJzdXBlckNsYXNzIiwiZGV0YWlsIiwiZXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY29tcG9zZWQiLCJub2RlIiwiZGlzcGF0Y2hFdmVudCIsIlNVUFBPUlRFRF9TTElERVJfTU9ERVMiLCJjdXN0b21VaUF0dHJpYnV0ZXMiLCJkZXZpY2UiLCJ0ZW1wbGF0ZXMiLCJfc3RhdGVEaXNwbGF5IiwiY29uY2F0Iiwic2xpZGVyX3RoZW1lIiwiaGlkZV9pbl9kZWZhdWx0X3ZpZXciLCJpY29uX2NvbG9yIiwiaGFzc0F0dHJpYnV0ZXNVdGlsIiwiZG9tSG9zdCIsImdldFJvb3ROb2RlIiwiRG9jdW1lbnRGcmFnbWVudCIsImhvc3QiLCJsaWdodE9yU2hhZG93Iiwic2VsZWN0b3IiLCJzaGFkb3dSb290IiwiZ2V0RWxlbWVudEhpZXJhcmNoeSIsImhpZXJhcmNoeSIsInNoaWZ0IiwiZ2V0Q29udGV4dCIsIl9jb250ZXh0IiwiZ3JvdXBFbnRpdHkiLCJyZXZlcnNlIiwiZmluZE1hdGNoIiwiZmluZCIsIm9wdGlvbiIsIm1hdGNoIiwibWF5YmVDaGFuZ2VPYmplY3RCeURldmljZSIsImFwcGx5QXR0cmlidXRlcyIsIm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cCIsImNvbnRleHQiLCJjIiwiX3NldEtlZXAiLCJfY3VpX2tlZXAiLCJtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzIiwibmV3QXR0cmlidXRlcyIsImhhc0dsb2JhbCIsImhhc0NoYW5nZXMiLCJ1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzIiwidW50ZW1wbGF0ZWRfc3RhdGUiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ1bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkiLCJtYXliZUFwcGx5VGVtcGxhdGVzIiwibmV3UmVzdWx0IiwiY2hlY2tBdHRyaWJ1dGVzIiwibGFzdF9jaGFuZ2VkIiwiYWxsb3dIaWRkZW4iLCJmaXhHcm91cFRpdGxlcyIsImhvbWVBc3Npc3RhbnRNYWluIiwiaGFDYXJkcyIsIm1haW4iLCJjYXJkcyIsImNhcmQiLCJuYW1lRWxlbSIsInRleHRDb250ZW50IiwiY29udHJvbENvbHVtbnMiLCJjb2x1bW5zIiwicGFydGlhbENhcmRzIiwibXFscyIsIm1xbCIsInJlbW92ZUxpc3RlbmVyIiwiaGFuZGxlV2luZG93Q2hhbmdlIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwidXNlQ3VzdG9taXplciIsImN1c3RvbWl6ZXIiLCJoaWRlX2F0dHJpYnV0ZXMiLCJ1cGRhdGVDb25maWdQYW5lbCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiaGFQYW5lbENvbmZpZyIsImhhQ29uZmlnTmF2aWdhdGlvbiIsImN1aVBhdGNoIiwiX29yaWdpbmFsQ29tcHV0ZUxvYWRlZCIsIl9jb21wdXRlTG9hZGVkIiwiX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24iLCJfY29tcHV0ZUNhcHRpb24iLCJfb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24iLCJfY29tcHV0ZURlc2NyaXB0aW9uIiwicGFnZSIsInBhZ2VzIiwiY29uZiIsImNhcHRpb24iLCJsb2FkZWQiLCJnZXRIYUNvbmZpZ0N1c3RvbVVpIiwiaGFDb25maWdDdXN0b21VaSIsImlyb25QYWdlcyIsImxhc3RFbGVtZW50Q2hpbGQiLCJzZWxlY3QiLCJ2aXNpYmxlIiwiaW5zdGFsbFN0YXRlc0hvb2siLCJob21lQXNzaXN0YW50IiwiX3VwZGF0ZUhhc3MiLCJvcmlnaW5hbFVwZGF0ZSIsInVwZGF0ZSIsIm5ld0VudGl0eSIsIl90aGVtZVdhaXRlcnMiLCJ3YWl0ZXIiLCJzdGF0ZUNoYW5nZWQiLCJpbnN0YWxsUGFydGlhbENhcmRzIiwiX2RlZmF1bHRWaWV3RmlsdGVyIiwiZXhjbHVkZXMiLCJleGNsdWRlRW50aXR5SWQiLCJpbnN0YWxsQWN0aW9uTmFtZSIsImtsYXNzIiwiZGVmaW5lUHJvcGVydHkiLCJjdXN0b21Mb2NhbGl6ZSIsImFjdGlvbl9uYW1lIiwiX19kYXRhIiwic2V0IiwiaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlIiwiaGFTdGF0ZUxhYmVsQmFkZ2UiLCJzdGFydEludGVydmFsIiwiaW5zdGFsbFN0YXRlQmFkZ2UiLCJzdGF0ZUJhZGdlIiwidXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlIiwiY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb2xvciIsImluc3RhbGxIYUF0dHJpYnV0ZXMiLCJoYUF0dHJpYnV0ZXMiLCJjb21wdXRlRmlsdGVyc0FycmF5IiwiY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheSIsImV4dHJhRmlsdGVycyIsInNwbGl0IiwiaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSIsImhhRm9ybUN1c3RvbWl6ZSIsImhhRm9ybUN1c3RvbWl6ZUluaXREb25lIiwiX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUiLCJjdXN0b21Db21wdXRlU2luZ2xlQXR0cmlidXRlIiwic2Vjb25kYXJ5IiwiX2luaXRPcGVuT2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwiY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMiLCJsb2NhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGVzIiwiZXhpc3RpbmdBdHRyaWJ1dGVzIiwia25vd25LZXlzIiwiZmlsdGVyRnJvbUF0dHJpYnV0ZXMiLCJzb3J0IiwiaW5zdGFsbENsYXNzSG9va3MiLCJjbGFzc0luaXREb25lIiwiaW5pdCIsImluaXREb25lIiwicnVuSG9va3MiLCJsb2ciLCJDVVNUT01fVUlfTElTVCIsInZlcnNpb24iLCJ1cmwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImZ1bmN0aW9uQm9keSIsImZ1bmMiLCJGdW5jdGlvbiIsIlN5bnRheEVycm9yIiwiUmVmZXJlbmNlRXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7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L0QsRUFBRWMsSUFBSyxLQUFJZCxFQUFFOFMsT0FBUSxnQkFBZUwsWUFBYSxFQUFqRTtBQUNBLGVBQU8sSUFBUDtBQUNEO0FBQ0Q7QUFDQSxZQUFNelMsQ0FBTjtBQUNEO0FBQ0Y7QUFqbEJrQyxDQUFyQztBQW1sQkE1SyxPQUFPNkgsUUFBUCxDQUFnQjhVLElBQWhCLEc7Ozs7Ozs7Ozs7Ozs7QUMzbEJBLCtEQUFlLFVBQWYsRSIsImZpbGUiOiJzY3JpcHRzLWRiZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9zY3JpcHRzLmpzXCIpO1xuIiwiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9ICdoYXNzOmJvb2ttYXJrJztcblxuLyoqIERvbWFpbnMgdGhhdCBoYXZlIGEgc3RhdGUgY2FyZC4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1dJVEhfQ0FSRCA9IFtcbiAgJ2NsaW1hdGUnLFxuICAnY292ZXInLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2lucHV0X3NlbGVjdCcsXG4gICdpbnB1dF9udW1iZXInLFxuICAnaW5wdXRfdGV4dCcsXG4gICdtZWRpYV9wbGF5ZXInLFxuICAnc2NlbmUnLFxuICAnc2NyaXB0JyxcbiAgJ3RpbWVyJyxcbiAgJ3dlYmxpbmsnLFxuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG91bGQgaGF2ZSB0aGUgaGlzdG9yeSBoaWRkZW4gaW4gdGhlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSA9IFtcbiAgJ2NhbWVyYScsXG4gICdjb25maWd1cmF0b3InLFxuICAnaGlzdG9yeV9ncmFwaCcsXG4gICdzY2VuZScsXG5dO1xuXG4vKiogU3RhdGVzIHRoYXQgd2UgY29uc2lkZXIgXCJvZmZcIi4gKi9cbmV4cG9ydCBjb25zdCBTVEFURVNfT0ZGID0gW1xuICAnY2xvc2VkJyxcbiAgJ29mZicsXG4gICd1bmxvY2tlZCcsXG5dO1xuXG4vKiogVGVtcGVyYXR1cmUgdW5pdHMuICovXG5leHBvcnQgY29uc3QgVU5JVF9DID0gJ8KwQyc7XG5leHBvcnQgY29uc3QgVU5JVF9GID0gJ8KwRic7XG5cbi8qKiBFbnRpdHkgSUQgb2YgdGhlIGRlZmF1bHQgdmlldy4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1ZJRVdfRU5USVRZX0lEID0gJ2dyb3VwLmRlZmF1bHRfdmlldyc7XG4iLCIvKipcbiAqIEFwcGx5IGEgdGhlbWUgdG8gYW4gZWxlbWVudCBieSBzZXR0aW5nIHRoZSBDU1MgdmFyaWFibGVzIG9uIGl0LlxuICpcbiAqIGVsZW1lbnQ6IEVsZW1lbnQgdG8gYXBwbHkgdGhlbWUgb24uXG4gKiB0aGVtZXM6IEhBU1MgVGhlbWUgaW5mb3JtYXRpb25cbiAqIGxvY2FsVGhlbWU6IHNlbGVjdGVkIHRoZW1lLlxuICogdXBkYXRlTWV0YTogYm9vbGVhbiBpZiB3ZSBzaG91bGQgdXBkYXRlIHRoZSB0aGVtZS1jb2xvciBtZXRhIGVsZW1lbnQuXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlUaGVtZXNPbkVsZW1lbnQoZWxlbWVudCwgdGhlbWVzLCBsb2NhbFRoZW1lLCB1cGRhdGVNZXRhID0gZmFsc2UpIHtcbiAgaWYgKCFlbGVtZW50Ll90aGVtZXMpIHtcbiAgICBlbGVtZW50Ll90aGVtZXMgPSB7fTtcbiAgfVxuICBsZXQgdGhlbWVOYW1lID0gdGhlbWVzLmRlZmF1bHRfdGhlbWU7XG4gIGlmIChsb2NhbFRoZW1lID09PSAnZGVmYXVsdCcgfHwgKGxvY2FsVGhlbWUgJiYgdGhlbWVzLnRoZW1lc1tsb2NhbFRoZW1lXSkpIHtcbiAgICB0aGVtZU5hbWUgPSBsb2NhbFRoZW1lO1xuICB9XG4gIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnQuX3RoZW1lcyk7XG4gIGlmICh0aGVtZU5hbWUgIT09ICdkZWZhdWx0Jykge1xuICAgIHZhciB0aGVtZSA9IHRoZW1lcy50aGVtZXNbdGhlbWVOYW1lXTtcbiAgICBPYmplY3Qua2V5cyh0aGVtZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB2YXIgcHJlZml4ZWRLZXkgPSAnLS0nICsga2V5O1xuICAgICAgZWxlbWVudC5fdGhlbWVzW3ByZWZpeGVkS2V5XSA9ICcnO1xuICAgICAgc3R5bGVzW3ByZWZpeGVkS2V5XSA9IHRoZW1lW2tleV07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGVsZW1lbnQudXBkYXRlU3R5bGVzKSB7XG4gICAgZWxlbWVudC51cGRhdGVTdHlsZXMoc3R5bGVzKTtcbiAgfSBlbHNlIGlmICh3aW5kb3cuU2hhZHlDU1MpIHtcbiAgICAvLyBpbXBsZW1lbnQgdXBkYXRlU3R5bGVzKCkgbWV0aG9kIG9mIFBvbGVtZXIgZWxlbWVudHNcbiAgICB3aW5kb3cuU2hhZHlDU1Muc3R5bGVTdWJ0cmVlKC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyhlbGVtZW50KSwgc3R5bGVzKTtcbiAgfVxuXG4gIGlmICghdXBkYXRlTWV0YSkgcmV0dXJuO1xuXG4gIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dGhlbWUtY29sb3JdJyk7XG4gIGlmIChtZXRhKSB7XG4gICAgaWYgKCFtZXRhLmhhc0F0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JykpIHtcbiAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnLCBtZXRhLmdldEF0dHJpYnV0ZSgnY29udGVudCcpKTtcbiAgICB9XG4gICAgY29uc3QgdGhlbWVDb2xvciA9IHN0eWxlc1snLS1wcmltYXJ5LWNvbG9yJ10gfHwgbWV0YS5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpO1xuICAgIG1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywgdGhlbWVDb2xvcik7XG4gIH1cbn1cbiIsIi8qKlxuICogVXBkYXRlIHJvb3QncyBjaGlsZCBlbGVtZW50IHRvIGJlIG5ld0VsZW1lbnRUYWcgcmVwbGFjaW5nIGFub3RoZXIgZXhpc3RpbmcgY2hpbGQgaWYgYW55LlxuICogQ29weSBhdHRyaWJ1dGVzIGludG8gdGhlIGNoaWxkIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWNDb250ZW50VXBkYXRlcihyb290LCBuZXdFbGVtZW50VGFnLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IHJvb3RFbCA9IHJvb3Q7XG4gIGxldCBjdXN0b21FbDtcblxuICBpZiAocm9vdEVsLmxhc3RDaGlsZCAmJiByb290RWwubGFzdENoaWxkLnRhZ05hbWUgPT09IG5ld0VsZW1lbnRUYWcpIHtcbiAgICBjdXN0b21FbCA9IHJvb3RFbC5sYXN0Q2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChyb290RWwubGFzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRpbmcgYW4gZWxlbWVudCB3aXRoIHVwcGVyIGNhc2Ugd29ya3MgZmluZSBpbiBDaHJvbWUsIGJ1dCBpbiBGRiBpdCBkb2Vzbid0IGltbWVkaWF0ZWx5XG4gICAgLy8gYmVjb21lIGEgZGVmaW5lZCBDdXN0b20gRWxlbWVudC4gUG9seW1lciBkb2VzIHRoYXQgaW4gc29tZSBsYXRlciBwYXNzLlxuICAgIGN1c3RvbUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuZXdFbGVtZW50VGFnLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnNldFByb3BlcnRpZXMpIHtcbiAgICBjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKGF0dHJpYnV0ZXMpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIGN1c3RvbSBlbGVtZW50IGRlZmluaXRpb24gd2Fzbid0IGxvYWRlZCB5ZXQgLSBzZXRQcm9wZXJ0aWVzIHdvdWxkIGJlXG4gICAgLy8gbWlzc2luZywgYnV0IG5vIGhhcm0gaW4gc2V0dGluZyBhdHRyaWJ1dGVzIG9uZS1ieS1vbmUgdGhlbi5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGN1c3RvbUVsW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjdXN0b21FbCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZURvbWFpbihoYXNzLCBkb21haW4pIHtcbiAgY29uc3Qgc2VydmljZXMgPSBoYXNzLmNvbmZpZy5zZXJ2aWNlc1tkb21haW5dO1xuICBpZiAoIXNlcnZpY2VzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChkb21haW4gPT09ICdsb2NrJykge1xuICAgIHJldHVybiAnbG9jaycgaW4gc2VydmljZXM7XG4gIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY292ZXInKSB7XG4gICAgcmV0dXJuICdvcGVuX2NvdmVyJyBpbiBzZXJ2aWNlcztcbiAgfVxuICByZXR1cm4gJ3R1cm5fb24nIGluIHNlcnZpY2VzO1xufVxuIiwiaW1wb3J0IGNhblRvZ2dsZURvbWFpbiBmcm9tICcuL2Nhbl90b2dnbGVfZG9tYWluLmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICByZXR1cm4gc3RhdGVPYmouc3RhdGUgPT09ICdvbicgfHwgc3RhdGVPYmouc3RhdGUgPT09ICdvZmYnO1xuICB9XG4gIGlmIChkb21haW4gPT09ICdjbGltYXRlJykge1xuICAgIHJldHVybiAhISgoc3RhdGVPYmouYXR0cmlidXRlcyB8fCB7fSkuc3VwcG9ydGVkX2ZlYXR1cmVzICYgNDA5Nik7XG4gIH1cblxuICByZXR1cm4gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlRG9tYWluKGVudGl0eUlkKSB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoMCwgZW50aXR5SWQuaW5kZXhPZignLicpKTtcbn1cbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9kb21haW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopIHtcbiAgaWYgKCFzdGF0ZU9iai5fZG9tYWluKSB7XG4gICAgc3RhdGVPYmouX2RvbWFpbiA9IGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZU9iai5fZG9tYWluO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0R3JvdXBFbnRpdGllcyhlbnRpdGllcywgZ3JvdXApIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgZ3JvdXAuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5KSB7XG4gICAgICByZXN1bHRbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSAnLi9jb21wdXRlX2RvbWFpbi5qcyc7XG5pbXBvcnQgZ2V0R3JvdXBFbnRpdGllcyBmcm9tICcuL2dldF9ncm91cF9lbnRpdGllcy5qcyc7XG5cbi8vIFJldHVybiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZW50aXRpZXMgdGhhdCB0aGUgdmlldyB3aWxsIHNob3dcbi8vIGluY2x1ZGluZyBlbWJlZGRlZCBncm91cHMuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3RW50aXRpZXMoZW50aXRpZXMsIHZpZXcpIHtcbiAgY29uc3Qgdmlld0VudGl0aWVzID0ge307XG5cbiAgdmlldy5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkgJiYgIWVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgdmlld0VudGl0aWVzW2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuXG4gICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBjb25zdCBncm91cEVudGl0aWVzID0gZ2V0R3JvdXBFbnRpdGllcyhlbnRpdGllcywgZW50aXR5KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhncm91cEVudGl0aWVzKS5mb3JFYWNoKChnckVudGl0eUlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JFbnRpdHkgPSBncm91cEVudGl0aWVzW2dyRW50aXR5SWRdO1xuXG4gICAgICAgICAgaWYgKCFnckVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgICAgICAgdmlld0VudGl0aWVzW2dyRW50aXR5SWRdID0gZ3JFbnRpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2aWV3RW50aXRpZXM7XG59XG4iLCJpbXBvcnQgY2FuVG9nZ2xlU3RhdGUgZnJvbSAnLi9jYW5fdG9nZ2xlX3N0YXRlLmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5pbXBvcnQgeyBET01BSU5TX1dJVEhfQ0FSRCB9IGZyb20gJy4uL2NvbnN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaikge1xuICBpZiAoc3RhdGVPYmouc3RhdGUgPT09ICd1bmF2YWlsYWJsZScpIHtcbiAgICByZXR1cm4gJ2Rpc3BsYXknO1xuICB9XG5cbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcblxuICBpZiAoRE9NQUlOU19XSVRIX0NBUkQuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBkb21haW47XG4gIH0gZWxzZSBpZiAoY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopICYmXG4gICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sICE9PSAnaGlkZGVuJykge1xuICAgIHJldHVybiAndG9nZ2xlJztcbiAgfVxuICByZXR1cm4gJ2Rpc3BsYXknO1xufVxuIiwiY29uc3QgaGFzc0F0dHJpYnV0ZVV0aWwgPSB7fTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyA9IHtcbiAgYmluYXJ5X3NlbnNvcjogW1xuICAgICdiYXR0ZXJ5JyxcbiAgICAnY29sZCcsXG4gICAgJ2Nvbm5lY3Rpdml0eScsXG4gICAgJ2Rvb3InLFxuICAgICdnYXJhZ2VfZG9vcicsXG4gICAgJ2dhcycsXG4gICAgJ2hlYXQnLFxuICAgICdsaWdodCcsXG4gICAgJ2xvY2snLFxuICAgICdtb2lzdHVyZScsXG4gICAgJ21vdGlvbicsXG4gICAgJ21vdmluZycsXG4gICAgJ29jY3VwYW5jeScsXG4gICAgJ29wZW5pbmcnLFxuICAgICdwbHVnJyxcbiAgICAncG93ZXInLFxuICAgICdwcmVzZW5jZScsXG4gICAgJ3Byb2JsZW0nLFxuICAgICdzYWZldHknLFxuICAgICdzbW9rZScsXG4gICAgJ3NvdW5kJyxcbiAgICAndmlicmF0aW9uJyxcbiAgICAnd2luZG93J1xuICBdLFxuICBjb3ZlcjogWydnYXJhZ2UnXSxcbiAgc2Vuc29yOiBbXG4gICAgJ2JhdHRlcnknLFxuICAgICdodW1pZGl0eScsXG4gICAgJ2lsbHVtaW5hbmNlJyxcbiAgICAndGVtcGVyYXR1cmUnXG4gIF0sXG59O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSAnanNvbic7XG5oYXNzQXR0cmlidXRlVXRpbC5BRERfVFlQRSA9ICdrZXktdmFsdWUnO1xuXG5oYXNzQXR0cmlidXRlVXRpbC5UWVBFX1RPX1RBRyA9IHtcbiAgc3RyaW5nOiAnaGEtY3VzdG9taXplLXN0cmluZycsXG4gIGpzb246ICdoYS1jdXN0b21pemUtc3RyaW5nJyxcbiAgaWNvbjogJ2hhLWN1c3RvbWl6ZS1pY29uJyxcbiAgYm9vbGVhbjogJ2hhLWN1c3RvbWl6ZS1ib29sZWFuJyxcbiAgYXJyYXk6ICdoYS1jdXN0b21pemUtYXJyYXknLFxuICAna2V5LXZhbHVlJzogJ2hhLWN1c3RvbWl6ZS1rZXktdmFsdWUnLFxufTtcblxuLy8gQXR0cmlidXRlcyBoZXJlIHNlcnZlIGR1YWwgcHVycG9zZTpcbi8vIDEpIEFueSBrZXkgb2YgdGhpcyBvYmplY3Qgd29uJ3QgYmUgc2hvd24gaW4gbW9yZS1pbmZvIHdpbmRvdy5cbi8vIDIpIEFueSBrZXkgd2hpY2ggaGFzIHZhbHVlIG90aGVyIHRoYW4gdW5kZWZpbmVkIHdpbGwgYXBwZWFyIGluIGN1c3RvbWl6YXRpb25cbi8vICAgIGNvbmZpZyBhY2NvcmRpbmcgdG8gaXRzIHZhbHVlLlxuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9XG4gIGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgfHwge1xuICAgIGVudGl0eV9waWN0dXJlOiB1bmRlZmluZWQsXG4gICAgZnJpZW5kbHlfbmFtZTogeyB0eXBlOiAnc3RyaW5nJywgZGVzY3JpcHRpb246ICdOYW1lJyB9LFxuICAgIGljb246IHsgdHlwZTogJ2ljb24nIH0sXG4gICAgZW11bGF0ZWRfaHVlOiB7XG4gICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICBkb21haW5zOiBbJ2VtdWxhdGVkX2h1ZSddXG4gICAgfSxcbiAgICBlbXVsYXRlZF9odWVfbmFtZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkb21haW5zOiBbJ2VtdWxhdGVkX2h1ZSddXG4gICAgfSxcbiAgICBoYWFza2FfaGlkZGVuOiB1bmRlZmluZWQsXG4gICAgaGFhc2thX25hbWU6IHVuZGVmaW5lZCxcbiAgICBob21lYnJpZGdlX2hpZGRlbjogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICBob21lYnJpZGdlX25hbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICBzdXBwb3J0ZWRfZmVhdHVyZXM6IHVuZGVmaW5lZCxcbiAgICBhdHRyaWJ1dGlvbjogdW5kZWZpbmVkLFxuICAgIGN1c3RvbV91aV9tb3JlX2luZm86IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICBjdXN0b21fdWlfc3RhdGVfY2FyZDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIGRldmljZV9jbGFzczoge1xuICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgIG9wdGlvbnM6IGhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RldmljZSBjbGFzcycsXG4gICAgICBkb21haW5zOiBbJ2JpbmFyeV9zZW5zb3InLCAnY292ZXInLCAnc2Vuc29yJ11cbiAgICB9LFxuICAgIGhpZGRlbjogeyB0eXBlOiAnYm9vbGVhbicsIGRlc2NyaXB0aW9uOiAnSGlkZSBmcm9tIFVJJyB9LFxuICAgIGFzc3VtZWRfc3RhdGU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRvbWFpbnM6IFsnc3dpdGNoJywgJ2xpZ2h0JywgJ2NvdmVyJywgJ2NsaW1hdGUnLCAnZmFuJywgJ2dyb3VwJ11cbiAgICB9LFxuICAgIGluaXRpYWxfc3RhdGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZG9tYWluczogWydhdXRvbWF0aW9uJ11cbiAgICB9LFxuICAgIHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgaGFzc0F0dHJpYnV0ZVV0aWw7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuXG53aW5kb3cuSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHByb3ApIHsgcmV0dXJuIHByb3A7IH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuL2Jvb3QuanMnO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHN0YXRpYyBzdHJpbmcgdmFsdWUgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZmlsdGVyXG4gKiBzdHJpbmdzIGJ5IGFzc2V0aW5nIHRoYXQgdGhleSBoYXZlIGJlZW4gY3JlYXRlZCB2aWEgdGhpcyBjbGFzcy4gVGhlXG4gKiBgdmFsdWVgIHByb3BlcnR5IHJldHVybnMgdGhlIHN0cmluZyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICovXG5jbGFzcyBMaXRlcmFsU3RyaW5nIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nKSB7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdGhpcy52YWx1ZSA9IHN0cmluZy50b1N0cmluZygpO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IExpdGVyYWxTdHJpbmcgc3RyaW5nIHZhbHVlXG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGxpdGVyYWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMaXRlcmFsU3RyaW5nKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUxpdGVyYWxTdHJpbmd9ICovKHZhbHVlKS52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tbGl0ZXJhbCB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWxMaXRlcmFsIGZ1bmN0aW9uOiAke3ZhbHVlfWBcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gaHRtbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudCB9ICovKHZhbHVlKS5pbm5lckhUTUw7XG4gIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBMaXRlcmFsU3RyaW5nKSB7XG4gICAgcmV0dXJuIGxpdGVyYWxWYWx1ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLXRlbXBsYXRlIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbCBmdW5jdGlvbjogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgdGhhdCBjcmVhdGVzIGFuIEhUTUwgPHRlbXBsYXRlPiBlbGVtZW50IGZyb20gdGhlXG4gKiBjb250ZW50cyBvZiB0aGUgc3RyaW5nLlxuICpcbiAqIFRoaXMgYWxsb3dzIHlvdSB0byB3cml0ZSBhIFBvbHltZXIgVGVtcGxhdGUgaW4gSmF2YVNjcmlwdC5cbiAqXG4gKiBUZW1wbGF0ZXMgY2FuIGJlIGNvbXBvc2VkIGJ5IGludGVycG9sYXRpbmcgYEhUTUxUZW1wbGF0ZUVsZW1lbnRgcyBpblxuICogZXhwcmVzc2lvbnMgaW4gdGhlIEphdmFTY3JpcHQgdGVtcGxhdGUgbGl0ZXJhbC4gVGhlIG5lc3RlZCB0ZW1wbGF0ZSdzXG4gKiBgaW5uZXJIVE1MYCBpcyBpbmNsdWRlZCBpbiB0aGUgY29udGFpbmluZyB0ZW1wbGF0ZS4gIFRoZSBvbmx5IG90aGVyXG4gKiB2YWx1ZXMgYWxsb3dlZCBpbiBleHByZXNzaW9ucyBhcmUgdGhvc2UgcmV0dXJuZWQgZnJvbSBgaHRtbExpdGVyYWxgXG4gKiB3aGljaCBlbnN1cmVzIG9ubHkgbGl0ZXJhbCB2YWx1ZXMgZnJvbSBKUyBzb3VyY2UgZXZlciByZWFjaCB0aGUgSFRNTCwgdG9cbiAqIGd1YXJkIGFnYWluc3QgWFNTIHJpc2tzLlxuICpcbiAqIEFsbCBvdGhlciB2YWx1ZXMgYXJlIGRpc2FsbG93ZWQgaW4gZXhwcmVzc2lvbnMgdG8gaGVscCBwcmV2ZW50IFhTU1xuICogYXR0YWNrczsgaG93ZXZlciwgYGh0bWxMaXRlcmFsYCBjYW4gYmUgdXNlZCB0byBjb21wb3NlIHN0YXRpY1xuICogc3RyaW5nIHZhbHVlcyBpbnRvIHRlbXBsYXRlcy4gVGhpcyBpcyB1c2VmdWwgdG8gY29tcG9zZSBzdHJpbmdzIGludG9cbiAqIHBsYWNlcyB0aGF0IGRvIG5vdCBhY2NlcHQgaHRtbCwgbGlrZSB0aGUgY3NzIHRleHQgb2YgYSBgc3R5bGVgXG4gKiBlbGVtZW50LlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPjpob3N0eyBjb250ZW50OlwiLi4uXCIgfTwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7dGhpcy5wYXJ0aWFsVGVtcGxhdGV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHBhcnRpYWxUZW1wbGF0ZSgpIHsgcmV0dXJuIGh0bWxgPHNwYW4+UGFydGlhbCE8L3NwYW4+YDsgfVxuICpcbiAqIEBwYXJhbSB7IUlUZW1wbGF0ZUFycmF5fSBzdHJpbmdzIENvbnN0YW50IHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBWYXJpYWJsZSBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHJldHVybiB7IUhUTUxUZW1wbGF0ZUVsZW1lbnR9IENvbnN0cnVjdGVkIEhUTUxUZW1wbGF0ZUVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSBmdW5jdGlvbiBodG1sKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICBjb25zdCB0ZW1wbGF0ZSA9IC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnR9ICovKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpO1xuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGh0bWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pO1xuICByZXR1cm4gdGVtcGxhdGU7XG59O1xuXG4vKipcbiAqIEFuIGh0bWwgbGl0ZXJhbCB0YWcgdGhhdCBjYW4gYmUgdXNlZCB3aXRoIGBodG1sYCB0byBjb21wb3NlLlxuICogYSBsaXRlcmFsIHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT5cbiAqICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gKiAgICAgICAgICAgJHt0aGlzLnN0eWxlVGVtcGxhdGUoKX1cbiAqICAgICAgICAgPC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHtzdGF0aWNWYWx1ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgc3R5bGVUZW1wbGF0ZSgpIHtcbiAqICAgICAgICByZXR1cm4gaHRtbExpdGVyYWxgLnNoYWRvd2VkIHsgYmFja2dyb3VuZDogZ3JheTsgfWA7XG4gKiAgICAgfVxuICpcbiAqIEBwYXJhbSB7IUlUZW1wbGF0ZUFycmF5fSBzdHJpbmdzIENvbnN0YW50IHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBWYXJpYWJsZSBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHJldHVybiB7IUxpdGVyYWxTdHJpbmd9IENvbnN0cnVjdGVkIGxpdGVyYWwgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sTGl0ZXJhbCA9IGZ1bmN0aW9uKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICByZXR1cm4gbmV3IExpdGVyYWxTdHJpbmcodmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBsaXRlcmFsVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKSk7XG59O1xuIiwiaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgQ3VpQmFzZUVsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgbGV0IGV4dHJhcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfZGF0YV90ZW1wbGF0ZTtcbiAgICBpZiAoZXh0cmFzKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFzKSkge1xuICAgICAgICBleHRyYXMgPSBbZXh0cmFzXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHRyYXMubWFwKGV4dHJhID0+IHdpbmRvdy5jdXN0b21VSS5jb21wdXRlVGVtcGxhdGUoXG4gICAgICAgIGV4dHJhLFxuICAgICAgICBoYXNzLFxuICAgICAgICBoYXNzLnN0YXRlcyxcbiAgICAgICAgc3RhdGVPYmosXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICAgIC8qIGF0dHJpYnV0ZT0gKi8gdW5kZWZpbmVkLFxuICAgICAgICBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgICkpLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0ICE9PSBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgIGlmIChleHRyYS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkO1xuICB9XG5cbiAgaGFzRXh0cmEoZXh0cmEpIHtcbiAgICByZXR1cm4gZXh0cmEubGVuZ3RoID4gMDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ3VpQmFzZUVsZW1lbnQ7XG4iLCJpbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIER5bmFtaWNFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgZWxlbWVudE5hbWU6IFN0cmluZyxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZyknLFxuICAgIF07XG4gIH1cblxuICBvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZykge1xuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICBlbGVtZW50TmFtZSA/IGVsZW1lbnROYW1lLnRvVXBwZXJDYXNlKCkgOiAnRElWJyxcbiAgICAgIHsgaGFzcywgc3RhdGVPYmosIGluRGlhbG9nIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtZWxlbWVudCcsIER5bmFtaWNFbGVtZW50KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5cbmltcG9ydCAnLi9keW5hbWljLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgRHluYW1pY1dpdGhFeHRyYSBleHRlbmRzIGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtY2FyZC1kaXNwbGF5Jykge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuY29udHJvbC13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAtNHB4IC0xNnB4IC00cHggMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICB9XG4gICAgICBoYS1zdGF0ZS1sYWJlbC1iYWRnZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgICBkeW5hbWljLWVsZW1lbnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICAjb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgICNsb2NrIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgfVxuICAgICAgI2xvY2suaGEtY292ZXItY29udHJvbHMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLmV4dHJhIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2Utc2l6ZTogMzZweDtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1mb250LXNpemU6IDEuMmVtO1xuICAgICAgfVxuICAgICAgLnN0YXRlIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzJD0nW1tleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSldXSBob3Jpem9udGFsIGxheW91dCc+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbZXh0cmFPYmpWaXNpYmxlXV0nPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnXG4gICAgICAgICAgICAgICAgICBpdGVtcz0nW1tleHRyYU9ial1dJ1xuICAgICAgICAgICAgICAgICAgb24tZG9tLWNoYW5nZT0nZXh0cmFEb21DaGFuZ2VkJz5cbiAgICAgICAgICA8aGEtc3RhdGUtbGFiZWwtYmFkZ2UgaGFzcz0nW1toYXNzXV0nIHN0YXRlPSdbW2l0ZW1dXSc+PC9oYS1zdGF0ZS1sYWJlbC1iYWRnZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaildXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1lbGVtZW50XG4gICAgICAgICAgICAgICAgY2xhc3M9J2ZsZXgnXG4gICAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICAgICAgICBlbGVtZW50LW5hbWU9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICA8L2R5bmFtaWMtZWxlbWVudD5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaildXSc+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVybGF5XCIgb24tY2xpY2s9J2NsaWNrSGFuZGxlcic+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2tdXSc+XG4gICAgICAgICAgICAgICAgICA8aXJvbi1pY29uIGlkPVwibG9ja1wiIGNsYXNzJD1cIltbY29udHJvbEVsZW1lbnRdXVwiIGljb249XCJtZGk6bG9jay1vdXRsaW5lXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWNvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRlJz5bW2NvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgZXh0cmFPYmo6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBfYXR0YWNoZWQpJyxcbiAgICAgIH0sXG4gICAgICBfYXR0YWNoZWQ6IEJvb2xlYW4sXG4gICAgICBleHRyYU9ialZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZyknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgYXR0YWNoZWQpIHtcbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfYmFkZ2UgfHwgIWF0dGFjaGVkKSByZXR1cm4gW107XG4gICAgbGV0IGV4dHJhQmFkZ2VzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFCYWRnZXMpKSB7XG4gICAgICBleHRyYUJhZGdlcyA9IFtleHRyYUJhZGdlc107XG4gICAgfVxuICAgIHJldHVybiBleHRyYUJhZGdlcy5tYXAoKGV4dHJhQmFkZ2UpID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKGV4dHJhQmFkZ2UuZW50aXR5X2lkICYmIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSkge1xuICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgdGhpcywgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdLCB0aGlzLmluRGlhbG9nLFxuICAgICAgICAgIC8qIGFsbG93SGlkZGVuPSAqL2ZhbHNlKSk7XG4gICAgICB9IGVsc2UgaWYgKGV4dHJhQmFkZ2UuYXR0cmlidXRlICYmXG4gICAgICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXNbZXh0cmFCYWRnZS5hdHRyaWJ1dGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHN0YXRlOiBTdHJpbmcoc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0pLFxuICAgICAgICAgIF9kb21haW46ICdub25lJyxcbiAgICAgICAgICBlbnRpdHlfaWQ6IG51bGwsXG4gICAgICAgICAgYXR0cmlidXRlczogeyB1bml0X29mX21lYXN1cmVtZW50OiBleHRyYUJhZGdlLnVuaXQgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICAgIGxldCBibGFja2xpc3QgPSBleHRyYUJhZGdlLmJsYWNrbGlzdF9zdGF0ZXM7XG4gICAgICBpZiAoYmxhY2tsaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJsYWNrbGlzdCkpIHtcbiAgICAgICAgICBibGFja2xpc3QgPSBbYmxhY2tsaXN0XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxhY2tsaXN0LnNvbWUodiA9PiBSZWdFeHAodikudGVzdChyZXN1bHQuc3RhdGUudG9TdHJpbmcoKSkpKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5fZW50aXR5RGlzcGxheSA9ICcnO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KS5maWx0ZXIoZXh0cmFCYWRnZSA9PiBleHRyYUJhZGdlICE9IG51bGwpO1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhVmlzaWJsZShleHRyYU9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cgfHwgIWV4dHJhT2JqKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGV4dHJhT2JqLmxlbmd0aCAhPT0gMDtcbiAgfVxuXG4gIGV4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKSB7XG4gICAgcmV0dXJuIGV4dHJhT2JqVmlzaWJsZSA/ICdleHRyYScgOiAnJztcbiAgfVxuXG4gIF9zaG93Q29udHJvbChpbkRpYWxvZywgc3RhdGVPYmopIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiAhc3RhdGVPYmouYXR0cmlidXRlcy5oaWRlX2NvbnRyb2w7XG4gIH1cblxuICBjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKSB7XG4gICAgLy8gaGFMb2NhbGl6ZSByZW1vdmVkIGluIDAuNjFcbiAgICByZXR1cm4gc3VwZXIuY29tcHV0ZVN0YXRlRGlzcGxheSh0aGlzLmhhTG9jYWxpemUgfHwgdGhpcy5sb2NhbGl6ZSwgc3RhdGVPYmopO1xuICB9XG5cbiAgaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzIHx8XG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2s7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgY29uc3QgbG9jayA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjbG9jaycpO1xuICAgIGlmIChsb2NrKSB7XG4gICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3Blbi1vdXRsaW5lJztcbiAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcwLjEnO1xuICAgIH1cbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gICAgICBpZiAobG9jaykge1xuICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3V0bGluZSc7XG4gICAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgfVxuICAgIH0sIDUwMDApO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBhcHBseVRoZW1lcyhoYXNzLCBlbGVtZW50LCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUgfHwgJ2RlZmF1bHQnO1xuICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgZWxlbWVudCwgaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgdGhlbWVOYW1lKTtcbiAgfVxuXG4gIGV4dHJhRG9tQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKVxuICAgICAgLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgdGhpcy5hcHBseVRoZW1lcyh0aGlzLmhhc3MsIGVsZW0sIGVsZW0uc3RhdGUpO1xuICAgICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy13aXRoLWV4dHJhJywgRHluYW1pY1dpdGhFeHRyYSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEV2ZW50c01peGluIGZyb20gJy4uL21peGlucy9ldmVudHMtbWl4aW4uanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFDb25maWdDdXN0b21VaSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXIuRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj48L3N0eWxlPlxuICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj0nbWRpOmFycm93LWxlZnQnXG4gICAgICAgICAgICBvbi1jbGljaz0nX2JhY2tIYW5kbGVyJ1xuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5DdXN0b20gVUkgc2V0dGluZ3M8L2Rpdj5cbiAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9J1tbaXNXaWRlXV0nPlxuICAgICAgICA8cGFwZXItY2FyZCBoZWFkaW5nPSdEZXZpY2UgbmFtZSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cbiAgICAgICAgICAgIFNldCBkZXZpY2UgbmFtZSBzbyB0aGF0IHlvdSBjYW4gcmVmZXJlbmNlIGl0IGluIHBlci1kZXZpY2Ugc2V0dGluZ3NcbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD0nTmFtZSdcbiAgICAgICAgICAgICAgdmFsdWU9J3t7bmFtZX19J1xuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcGFwZXItY2FyZD5cbiAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG5cbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogJ25hbWVDaGFuZ2VkJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5uYW1lID0gd2luZG93LmN1c3RvbVVJLmdldE5hbWUoKTtcbiAgfVxuXG4gIG5hbWVDaGFuZ2VkKG5hbWUpIHtcbiAgICB3aW5kb3cuY3VzdG9tVUkuc2V0TmFtZShuYW1lKTtcbiAgfVxuXG4gIF9iYWNrSGFuZGxlcigpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgdGhpcy5maXJlKCdsb2NhdGlvbi1jaGFuZ2VkJyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGEtY29uZmlnLWN1c3RvbS11aScsIEhhQ29uZmlnQ3VzdG9tVWkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYVRoZW1lZFNsaWRlciBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBtYXJnaW46IHZhcigtLWhhLXRoZW1lZC1zbGlkZXItbWFyZ2luLCBpbml0aWFsKTtcbiAgICAgIH1cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLXBpbi1zdGFydC1jb2xvcjogIHZhcigtLXBhcGVyLXNsaWRlci1waW4tY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuZGlzYWJsZS1vZmYtd2hlbi1taW4uaXMtb24ge1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXIta25vYi1jb2xvcik7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXIta25vYi1jb2xvcik7XG4gICAgICB9XG4gICAgICBwYXBlci1zbGlkZXIge1xuICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1oYS1wYXBlci1zbGlkZXItd2lkdGgsIDIwMHB4KTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLXNsaWRlclxuICAgICAgICAgbWluPSdbW190aGVtZWRNaW5dXSdcbiAgICAgICAgIG1heD0nW1tfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJtYXhcIiwgbWF4KV1dJ1xuICAgICAgICAgcGluPSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcInBpblwiLCBwaW4pXV0nXG4gICAgICAgICBjbGFzcyQ9J1tbY29tcHV0ZUNsYXNzKHRoZW1lLCBpc09uLCBfdGhlbWVkTWluKV1dJyB2YWx1ZT0nW1t2YWx1ZV1dJ1xuICAgICAgICAgb24tY2hhbmdlPSd2YWx1ZUNoYW5nZWQnPlxuICAgIDwvcGFwZXItc2xpZGVyPlxuICAgIGA7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuZGlzYWJsZU9mZldoZW5NaW4gPSAhdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZSh0aGlzLnRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pO1xuICAgIHRoaXMuY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGlzLnRoZW1lLCB0aGlzLmRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICB9LFxuICAgICAgcGluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBpc09uOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlT2ZmV2hlbk1pbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgdGhlbWU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIF90aGVtZWRNaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1pblwiLCBtaW4pJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKScsXG4gICAgXTtcbiAgfVxuXG4gIGNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhlbWUsIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCkge1xuICAgIHRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCA9IHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUoXG4gICAgICB0aGVtZSwgJ3JlcG9ydF93aGVuX25vdF9jaGFuZ2VkJywgIWRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCk7XG4gIH1cblxuICBfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgYXR0ciwgZGVmKSB7XG4gICAgaWYgKHRoZW1lKSB7XG4gICAgICBpZiAoYXR0ciBpbiB0aGVtZSkge1xuICAgICAgICByZXR1cm4gdGhlbWVbYXR0cl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG4gIH1cblxuICBjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIHRoZW1lZE1pbikge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBpZiAoaXNPbikge1xuICAgICAgcmVzdWx0ICs9ICdpcy1vbiAnO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgJ29mZl93aGVuX21pbicsICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKSB8fCB0aGVtZWRNaW4gPT09IDApIHtcbiAgICAgIC8vIElmIG9mZldoZW5NaW4gaXMgZW5hYmxlZCBkb24ndCBjdXN0b21pemUuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBgJHtyZXN1bHR9ZGlzYWJsZS1vZmYtd2hlbi1taW5gO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQgJiYgdGhpcy52YWx1ZSA9PT0gZXYudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS10aGVtZWQtc2xpZGVyJywgSGFUaGVtZWRTbGlkZXIpO1xuIiwiaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyc7XG5pbXBvcnQgc3RhdGVDYXJkVHlwZSBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2NhcmRfdHlwZS5qcyc7XG5cbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuaW1wb3J0ICcuL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMnO1xuaW1wb3J0ICcuL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMnO1xuXG5jb25zdCBTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUyA9IFsnY29uZmlndXJhdG9yJ107XG5jb25zdCBET01BSU5fVE9fU0xJREVSX1NVUFBPUlQgPSB7XG4gIGxpZ2h0OiAxLCAvLyBTVVBQT1JUX0JSSUdIVE5FU1NcbiAgY292ZXI6IDQsIC8vIFNVUFBPUlRfU0VUX1BPU0lUSU9OXG4gIGNsaW1hdGU6IDEsIC8vIFNVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFXG59O1xuY29uc3QgVFlQRV9UT19DT05UUk9MID0ge1xuICB0b2dnbGU6ICdoYS1lbnRpdHktdG9nZ2xlJyxcbiAgZGlzcGxheTogJycsXG4gIGNvdmVyOiAnaGEtY292ZXItY29udHJvbHMnLFxufTtcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRDdXN0b21VaSBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2lucHV0Q2hhbmdlZChoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmopJyxcbiAgICBdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAoY29udGFpbmVyLnRhZ05hbWUgPT09ICdESVYnICYmXG4gICAgICAgIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0ZScpIHx8IGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NoaWxkLWNhcmQnKSkpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgLy8gU2luY2UgdGhpcyBkb2Vzbid0IGFjdHVhbGx5IGNoYW5nZSB0aGUgYmFja2dyb3VuZCAtIG5vIG5lZWQgdG8gY2xlYXIgaXQuXG4gICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3ZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgaW5oZXJpdCknKTtcblxuICAgICAgLy8gUG9seWZpbGwgJ3VwZGF0ZVN0eWxlcycuXG4gICAgICBpZiAoIWNvbnRhaW5lci51cGRhdGVTdHlsZXMpIHtcbiAgICAgICAgY29udGFpbmVyLnVwZGF0ZVN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KGtleSwgc3R5bGVzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0Q2hhbmdlZCh0aGlzLmhhc3MsIHRoaXMuaW5EaWFsb2csIHRoaXMuc3RhdGVPYmopO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBkaXNwbGF5OiAnJywgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLCB0aGlzLmhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sICdkZWZhdWx0Jyk7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuICAgIH1cbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgYmFkZ2VNb2RlKGhhc3MsIHN0YXRlT2JqLCBkb21haW4pIHtcbiAgICBjb25zdCBzdGF0ZXMgPSBbXTtcbiAgICBpZiAoZG9tYWluID09PSAnZ3JvdXAnKSB7XG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGhhc3Muc3RhdGVzW2lkXTtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gSUQgJHtpZH0gaW4gZ3JvdXAgJHtzdGF0ZU9iai5lbnRpdHlfaWR9YCk7XG4gICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5iYWRnZXNfbGlzdCB8fFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5iYWRnZXNfbGlzdC5pbmNsdWRlcyhzdGF0ZS5lbnRpdHlfaWQpKSB7XG4gICAgICAgICAgc3RhdGVzLnB1c2god2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgICAgdGhpcywgc3RhdGUsIGZhbHNlIC8qIGluRGlhbG9nICovLCBmYWxzZSAvKiBhbGxvd0hpZGRlbiAqLykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzLnB1c2goc3RhdGVPYmopO1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH07XG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0ZScpKSB7XG4gICAgICAgICAgcGFyYW1zLm1hcmdpbiA9ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC1tYXJnaW4sIDApJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhwYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgJ0hBLUJBREdFUy1DQVJEJyxcbiAgICAgIHsgaGFzcywgc3RhdGVzIH0pO1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoe1xuICAgICAgICB3aWR0aDogJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLXdpZHRoLCBpbml0aWFsKScsXG4gICAgICAgICd0ZXh0LWFsaWduJzogJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLXRleHQtYWxpZ24sIGluaXRpYWwpJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmxhc3RDaGlsZC5zdHlsZS5mb250U2l6ZSA9ICc4NSUnO1xuXG4gICAgLy8gU2luY2UgdGhpcyB2YXJpYWJsZSBvbmx5IGFmZmVjdHMgYmFkZ2VzIG1vZGUgLSBubyBuZWVkIHRvIGNsZWFuIGl0IHVwLlxuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0taGEtc3RhdGUtbGFiZWwtYmFkZ2UtbWFyZ2luLWJvdHRvbScsICcwJyk7XG4gIH1cblxuICBjbGVhbkJhZGdlU3R5bGUoKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIGRpc3BsYXk6ICcnLFxuICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICd0ZXh0LWFsaWduJzogJycsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdHlsZXMoeyBkaXNwbGF5OiAnJywgbWFyZ2luOiAnJyB9KTtcbiAgfVxuXG4gIGFwcGx5VGhlbWVzKGhhc3MsIG1vZGlmaWVkT2JqKSB7XG4gICAgbGV0IHRoZW1lVGFyZ2V0ID0gdGhpcztcbiAgICBsZXQgdGhlbWVOYW1lID0gJ2RlZmF1bHQnO1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoZW1lVGFyZ2V0ID0gdGhpcy5fY29udGFpbmVyO1xuICAgIH1cbiAgICBpZiAobW9kaWZpZWRPYmouYXR0cmlidXRlcy50aGVtZSkge1xuICAgICAgdGhlbWVOYW1lID0gbW9kaWZpZWRPYmouYXR0cmlidXRlcy50aGVtZTtcbiAgICB9XG4gICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICB0aGVtZVRhcmdldCwgaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgdGhlbWVOYW1lKTtcbiAgfVxuXG4gIG1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikge1xuICAgIGlmICghbW9kaWZpZWRPYmopIHtcbiAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMCcgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IG1hcmdpbjogJycsIHBhZGRpbmc6ICcnIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBvYmosIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIERPTUFJTl9UT19TTElERVJfU1VQUE9SVFtkb21haW5dICYmXG4gICAgICAoRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiBvYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMpICYmXG4gICAgICBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgJiYgb2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlICE9PSAnbm8tc2xpZGVyJztcbiAgfVxuXG4gIGlucHV0Q2hhbmdlZChoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmopIHtcbiAgICBpZiAoIXN0YXRlT2JqIHx8ICFoYXNzIHx8ICF0aGlzLl9pc0F0dGFjaGVkKSByZXR1cm47XG4gICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgICBjb25zdCBtb2RpZmllZE9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgIHRoaXMsIHN0YXRlT2JqLCBpbkRpYWxvZywgdHJ1ZSAvKiBhbGxvd0hpZGRlbiAqLyk7XG5cbiAgICBpZiAodGhpcy5tYXliZUhpZGVFbnRpdHkobW9kaWZpZWRPYmopKSByZXR1cm47XG5cbiAgICB0aGlzLmFwcGx5VGhlbWVzKGhhc3MsIG1vZGlmaWVkT2JqKTtcblxuICAgIGlmICghaW5EaWFsb2cgJiYgbW9kaWZpZWRPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgPT09ICdiYWRnZXMnKSB7XG4gICAgICB0aGlzLmJhZGdlTW9kZShoYXNzLCBtb2RpZmllZE9iaiwgZG9tYWluKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWd1bGFyTW9kZV8oaGFzcywgaW5EaWFsb2csIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH1cbiAgfVxuXG4gIHJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIHRoaXMuY2xlYW5CYWRnZVN0eWxlKCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBoYXNzLFxuICAgICAgc3RhdGVPYmosXG4gICAgICBpbkRpYWxvZyxcbiAgICB9O1xuICAgIGNvbnN0IG9yaWdpbmFsU3RhdGVDYXJkVHlwZSA9IHN0YXRlQ2FyZFR5cGUoaGFzcywgc3RhdGVPYmopO1xuICAgIGxldCBjdXN0b21TdGF0ZUNhcmRUeXBlO1xuICAgIGNvbnN0IHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeTtcblxuICAgIGlmIChkb21haW4gPT09ICdsaWdodCcgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBjb250cm9sRWxlbWVudDogJ2hhLWVudGl0eS10b2dnbGUnLFxuICAgICAgICBzZXJ2aWNlTWluOiAndHVybl9vZmYnLFxuICAgICAgICBzZXJ2aWNlTWF4OiAndHVybl9vbicsXG4gICAgICAgIHZhbHVlTmFtZTogJ2JyaWdodG5lc3MnLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjb3ZlcicgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBjb250cm9sRWxlbWVudDogJ2hhLWNvdmVyLWNvbnRyb2xzJyxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHNlcnZpY2VNaW46ICdjbG9zZV9jb3ZlcicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICdzZXRfY292ZXJfcG9zaXRpb24nLFxuICAgICAgICBzZXRWYWx1ZU5hbWU6ICdwb3NpdGlvbicsXG4gICAgICAgIHZhbHVlTmFtZTogJ2N1cnJlbnRfcG9zaXRpb24nLFxuICAgICAgICBuYW1lT246ICdvcGVuJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY2xpbWF0ZScgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBjb250cm9sRWxlbWVudDogJ2hhLWNsaW1hdGUtc3RhdGUnLFxuICAgICAgICBtaW46IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWluX3RlbXAgfHwgLTEwMCxcbiAgICAgICAgbWF4OiBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF90ZW1wIHx8IDIwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHNlcnZpY2VNYXg6ICdzZXRfdGVtcGVyYXR1cmUnLFxuICAgICAgICB2YWx1ZU5hbWU6ICd0ZW1wZXJhdHVyZScsXG4gICAgICAgIG5hbWVPbjogJycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKFRZUEVfVE9fQ09OVFJPTFtvcmlnaW5hbFN0YXRlQ2FyZFR5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9IFRZUEVfVE9fQ09OVFJPTFtvcmlnaW5hbFN0YXRlQ2FyZFR5cGVdO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQgJiZcbiAgICAgICAgICAgICAgICFTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUy5pbmNsdWRlcyhvcmlnaW5hbFN0YXRlQ2FyZFR5cGUpKSB7XG4gICAgICBwYXJhbXMuaW5EaWFsb2cgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09ICd1bmF2YWlsYWJsZScpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9ICcnO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sX2VsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sX2VsZW1lbnQ7XG4gICAgfVxuXG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgIChzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIHx8IGN1c3RvbVN0YXRlQ2FyZFR5cGUgfHwgYFNUQVRFLUNBUkQtJHtvcmlnaW5hbFN0YXRlQ2FyZFR5cGV9YCkudG9VcHBlckNhc2UoKSxcbiAgICAgIHBhcmFtcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC1jdXN0b20tdWknLCBTdGF0ZUNhcmRDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcbmltcG9ydCAnLi9oYS10aGVtZWQtc2xpZGVyLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRXaXRoU2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5zZWNvbmQtbGluZSwgLnN0YXRlLWFuZC10b2dnbGUsIC5zdGF0ZS1pbmZvIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc3RhdGUtYW5kLXRvZ2dsZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnNlY29uZC1saW5lIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLnNlY29uZC1saW5lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICB9XG4gICAgICAuc3RyZXRjaCAuc2Vjb25kLWxpbmUsIC5zdHJldGNoIGhhLXRoZW1lZC1zbGlkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS1oYS1wYXBlci1zbGlkZXItd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1pbmZvIHtcbiAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsO1xuICAgICAgfVxuICAgICAgaGEtdGhlbWVkLXNsaWRlciwgLnRvcC13cmFwcGVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnRvcC13cmFwcGVyLnN0cmV0Y2gge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9J2NvbnRhaW5lcicgY2xhc3MkPSdob3Jpem9udGFsIGxheW91dCBmbGV4IHRvcC13cmFwcGVyIFtbX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKV1dJz5cbiAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGp1c3RpZmllZCBmbGV4LWF1dG8gc3RhdGUtYW5kLXRvZ2dsZSc+XG4gICAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgICBjbGFzcz0nc3RhdGUtaW5mbyBmbGV4LWF1dG8nXG4gICAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgICAgc2Vjb25kYXJ5LWxpbmUkPSdbW2hhc0V4dHJhKGV4dHJhKV1dJ1xuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0JyBpdGVtcz0nW1tleHRyYV1dJz5cbiAgICAgICAgICAgIDxkaXY+W1tpdGVtXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3N0YXRlLWluZm8+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1ticmVha1NsaWRlcl1dJyBjbGFzcz0naGlkZGVuJz5cbiAgICAgICAgICA8ZHluYW1pYy13aXRoLWV4dHJhIGhhc3M9J1tbaGFzc11dJyBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXScgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz48L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW3Nob3dTbGlkZXJdXScgcmVzdGFtcD5cbiAgICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQgZmxleC1hdXRvIGVuZC1qdXN0aWZpZWQgc2Vjb25kLWxpbmUnPlxuICAgICAgICAgIDxoYS10aGVtZWQtc2xpZGVyXG4gICAgICAgICAgICBpZD0nc2xpZGVyJ1xuICAgICAgICAgICAgbWF4PVtbbWF4XV1cbiAgICAgICAgICAgIG1pbj1bW21pbl1dXG4gICAgICAgICAgICB0aGVtZT0nW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNsaWRlcl90aGVtZV1dJ1xuICAgICAgICAgICAgaXMtb249J1tbaXNPbihzdGF0ZU9iaiwgbmFtZU9uKV1dJ1xuICAgICAgICAgICAgdmFsdWU9J3t7c2xpZGVyVmFsdWV9fSdcbiAgICAgICAgICAgIGRpc2FibGUtb2ZmLXdoZW4tbWluPSd7e2Rpc2FibGVPZmZXaGVuTWlufX0nXG4gICAgICAgICAgICBvbi1jaGFuZ2U9J3NsaWRlckNoYW5nZWQnXG4gICAgICAgICAgICBvbi1jbGljaz0nc3RvcFByb3BhZ2F0aW9uJz5cbiAgICAgICAgICA8L2hhLXRoZW1lZC1zbGlkZXI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbWyFicmVha1NsaWRlcl1dJz5cbiAgICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW46IFN0cmluZyxcbiAgICAgIHNlcnZpY2VNaW46IFN0cmluZyxcbiAgICAgIHNlcnZpY2VNYXg6IFN0cmluZyxcbiAgICAgIHZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgc2V0VmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICBuYW1lT246IHsgdHlwZTogU3RyaW5nLCB2YWx1ZTogJ29uJyB9LFxuICAgICAgbWluOiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDAgfSxcbiAgICAgIG1heDogeyB0eXBlOiBOdW1iZXIsIHZhbHVlOiAyNTUgfSxcblxuICAgICAgc2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlT2ZmV2hlbk1pbjogQm9vbGVhbixcbiAgICAgIG1vZGU6IFN0cmluZyxcbiAgICAgIHN0cmV0Y2hTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGJyZWFrU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBoaWRlU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBsaW5lVG9vTG9uZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbWluTGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICBtYXhMaW5lQnJlYWs6IE51bWJlcixcbiAgICAgIHNob3dTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBjb21wdXRlZDogJ19zaG93U2xpZGVyKGluRGlhbG9nLCBzdGF0ZU9iaiwgaGlkZVNsaWRlciknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9vbklyb25SZXNpemUgPSB0aGlzLl9vbklyb25SZXNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbklyb25SZXNpemUpO1xuICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbklyb25SZXNpemUpO1xuICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnc3RhdGVPYmpDaGFuZ2VkKHN0YXRlT2JqLCBuYW1lT24sIHZhbHVlTmFtZSknLFxuICAgIF07XG4gIH1cblxuICBfd2FpdEZvckxheW91dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ29ubmVjdGVkKSByZXR1cm47XG4gICAgdGhpcy5fc2V0TW9kZSgpO1xuICAgIGlmICh0aGlzLl9mcmFtZUlkKSByZXR1cm47XG4gICAgdGhpcy5yZWFkeVRvQ29tcHV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2ZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuX2ZyYW1lSWQgPSBudWxsO1xuICAgICAgdGhpcy5yZWFkeVRvQ29tcHV0ZSA9IHRydWU7XG4gICAgICB0aGlzLl9vbklyb25SZXNpemUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRNb2RlKCkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIGhpZGVTbGlkZXI6IHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJyAmJiB0aGlzLmxpbmVUb29Mb25nLFxuICAgICAgYnJlYWtTbGlkZXI6XG4gICAgICAgICAgICh0aGlzLm1vZGUgPT09ICdicmVhay1zbGlkZXInIHx8IHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykgJiZcbiAgICAgICAgICAgdGhpcy5saW5lVG9vTG9uZyxcbiAgICB9O1xuICAgIGlmICghdGhpcy5zaG93U2xpZGVyKSB7XG4gICAgICBvYmouYnJlYWtTbGlkZXIgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgfVxuXG4gIF9vbklyb25SZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnJlYWR5VG9Db21wdXRlKSByZXR1cm47XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ25vLXNsaWRlcicpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIGhpZGVTbGlkZXI6IHRydWUsXG4gICAgICAgIGJyZWFrU2xpZGVyOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByZXZCcmVha1NsaWRlciA9IHRoaXMuYnJlYWtTbGlkZXI7XG4gICAgY29uc3QgcHJldkhpZGVTbGlkZXIgPSB0aGlzLmhpZGVTbGlkZXI7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgIGhpZGVTbGlkZXI6IGZhbHNlLFxuICAgICAgYnJlYWtTbGlkZXI6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzLiQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgaWYgKGNvbnRhaW5lcldpZHRoID09PSAwKSByZXR1cm47XG4gICAgaWYgKGNvbnRhaW5lcldpZHRoIDw9IHRoaXMubWluTGluZUJyZWFrKSB7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lcldpZHRoID49IHRoaXMubWF4TGluZUJyZWFrKSB7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmV2SGlkZVNsaWRlciAmJiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byB1bmhpZGUgdGhlIHNsaWRlciBpbiBvcmRlciB0byByZWNhbGN1bGF0ZSBoZWlnaHQuXG4gICAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IHN0YXRlSGVpZ2h0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0ZS1pbmZvJykuY2xpZW50SGVpZ2h0O1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IGNvbnRhaW5lckhlaWdodCA+IHN0YXRlSGVpZ2h0ICogMS41O1xuICAgICAgaWYgKHRoaXMubGluZVRvb0xvbmcpIHtcbiAgICAgICAgdGhpcy5taW5MaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoIXByZXZCcmVha1NsaWRlcikge1xuICAgICAgICB0aGlzLm1heExpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZXRNb2RlKCk7XG4gIH1cblxuICBfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKG1vZGUgPT09ICdzaW5nbGUtbGluZScpIHtcbiAgICAgIHJldHVybiAnbm93cmFwJztcbiAgICB9XG4gICAgaWYgKHN0cmV0Y2hTbGlkZXIgJiYgbGluZVRvb0xvbmcpIHtcbiAgICAgIHJldHVybiAnc3RyZXRjaCB3cmFwJztcbiAgICB9XG4gICAgcmV0dXJuICd3cmFwJztcbiAgfVxuXG4gIF9zaG93U2xpZGVyKGluRGlhbG9nLCBzdGF0ZU9iaiwgaGlkZVNsaWRlcikge1xuICAgIGlmIChpbkRpYWxvZyB8fCBoaWRlU2xpZGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2xpZGVyQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgY29uc3QgcGFyYW0gPSB7IGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQgfTtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuO1xuICAgIGxldCB0YXJnZXQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI3NsaWRlcicpO1xuICAgIGlmIChldi50YXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgLy8gTm8gU2hhZG93IERPTSAtIHdlIGhhdmUgYWNjZXNzIHRvIG9yaWdpbmFsIHRhcmdldC5cbiAgICAgICh7IHRhcmdldCB9ID0gZXYpO1xuICAgIH0gZWxzZSBpZiAoZXYucGF0aCkge1xuICAgICAgW3RhcmdldF0gPSBldi5wYXRoO1xuICAgIH0gZWxzZSBpZiAoZXYuY29tcG9zZWRQYXRoKSB7XG4gICAgICBbdGFyZ2V0XSA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IDAgfHwgKHZhbHVlIDw9IHRhcmdldC5taW4gJiYgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pKSB7XG4gICAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZU1pbiwgcGFyYW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbVt0aGlzLnNldFZhbHVlTmFtZSB8fCB0aGlzLnZhbHVlTmFtZV0gPSB2YWx1ZTtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWF4LCBwYXJhbSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGVPYmpDaGFuZ2VkKHN0YXRlT2JqLCBuYW1lT24sIHZhbHVlTmFtZSkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHNsaWRlclZhbHVlOiB0aGlzLmlzT24oc3RhdGVPYmosIG5hbWVPbikgPyBzdGF0ZU9iai5hdHRyaWJ1dGVzW3ZhbHVlTmFtZV0gOiAwLFxuICAgIH07XG4gICAgaWYgKHN0YXRlT2JqKSB7XG4gICAgICBPYmplY3QuYXNzaWduKG9iaiwge1xuICAgICAgICBtaW5MaW5lQnJlYWs6IDAsXG4gICAgICAgIG1heExpbmVCcmVhazogOTk5LFxuICAgICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IGZhbHNlLFxuICAgICAgICBsaW5lVG9vTG9uZzogZmFsc2UsXG4gICAgICAgIG1vZGU6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlLFxuICAgICAgICBzdHJldGNoU2xpZGVyOiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RyZXRjaF9zbGlkZXIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gICAgaWYgKHN0YXRlT2JqKSB7XG4gICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqICYmICghbmFtZU9uIHx8IHN0YXRlT2JqLnN0YXRlID09PSBuYW1lT24pO1xuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRoLXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhTbGlkZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBDdWlCYXNlRWxlbWVudCBmcm9tICcuL2N1aS1iYXNlLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuL2R5bmFtaWMtd2l0aC1leHRyYS5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkV2l0aG91dFNsaWRlciBleHRlbmRzIEN1aUJhc2VFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9J2NvbnRhaW5lcicgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGp1c3RpZmllZCc+XG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvJ1xuICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgIGluLWRpYWxvZz0nW1tzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSldXSdcbiAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgIDxkaXY+W1tpdGVtXV08L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmFcbiAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXSdcbiAgICAgICAgICBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+XG4gICAgICA8L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInLCBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyKTtcbiIsIi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbmV4cG9ydCBkZWZhdWx0IChzdXBlckNsYXNzKSA9PiB7XG4gIC8qKlxuICAgKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICAgKi9cbiAgY2xhc3MgRXZlbnRzTWl4aW4gZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgICAqICAgcGF5bG9hZC5cbiAgICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAgKi9cbiAgICBmaXJlKHR5cGUsIGRldGFpbCA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHtcbiAgICAgICAgYnViYmxlczogb3B0aW9ucy5idWJibGVzID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy5idWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiBCb29sZWFuKG9wdGlvbnMuY2FuY2VsYWJsZSksXG4gICAgICAgIGNvbXBvc2VkOiBvcHRpb25zLmNvbXBvc2VkID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy5jb21wb3NlZCxcbiAgICAgIH0pO1xuICAgICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuICAgICAgY29uc3Qgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCB0aGlzO1xuICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEV2ZW50c01peGluO1xufTtcbiIsImltcG9ydCBoYXNzQXR0cmlidXRlc1V0aWwgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvdXRpbC9oYXNzLWF0dHJpYnV0ZXMtdXRpbC5qcyc7XG5cbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCA9IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCB8fCB7fTtcbmNvbnN0IFNVUFBPUlRFRF9TTElERVJfTU9ERVMgPSBbXG4gICdzaW5nbGUtbGluZScsICdicmVhay1zbGlkZXInLCAnYnJlYWstc2xpZGVyLXRvZ2dsZScsICdoaWRlLXNsaWRlcicsICduby1zbGlkZXInLFxuXTtcblxuY29uc3QgY3VzdG9tVWlBdHRyaWJ1dGVzID0ge1xuICBncm91cDogdW5kZWZpbmVkLFxuICBkZXZpY2U6IHVuZGVmaW5lZCxcbiAgdGVtcGxhdGVzOiB1bmRlZmluZWQsXG4gIHN0YXRlOiB1bmRlZmluZWQsXG4gIF9zdGF0ZURpc3BsYXk6IHVuZGVmaW5lZCxcbiAgY29udHJvbF9lbGVtZW50OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIHN0YXRlX2NhcmRfbW9kZToge1xuICAgIHR5cGU6ICdhcnJheScsXG4gICAgb3B0aW9uczoge1xuICAgICAgbGlnaHQ6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNvdmVyOiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICBjbGltYXRlOiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICAnKic6IFsnYmFkZ2VzJ10sXG4gICAgfSxcbiAgfSxcbiAgc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGJhZGdlc19saXN0OiB7IHR5cGU6ICdqc29uJyB9LFxuICBzaG93X2xhc3RfY2hhbmdlZDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaGlkZV9jb250cm9sOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBleHRyYV9kYXRhX3RlbXBsYXRlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGV4dHJhX2JhZGdlOiB7IHR5cGU6ICdqc29uJyB9LFxuICBzdHJldGNoX3NsaWRlcjogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgc2xpZGVyX3RoZW1lOiB7IHR5cGU6ICdqc29uJyB9LFxuICB0aGVtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBjb25maXJtX2NvbnRyb2xzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jazogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaGlkZV9pbl9kZWZhdWx0X3ZpZXc6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGljb25fY29sb3I6IHsgdHlwZTogJ3N0cmluZycgfSxcbn07XG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9IGhhc3NBdHRyaWJ1dGVzVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTO1xud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9IGhhc3NBdHRyaWJ1dGVzVXRpbC5VTktOT1dOX1RZUEU7XG5PYmplY3QuYXNzaWduKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBjdXN0b21VaUF0dHJpYnV0ZXMpO1xuIiwiaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCBnZXRWaWV3RW50aXRpZXMgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyc7XG5cbmltcG9ydCAnLi4vZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyc7XG5pbXBvcnQgVkVSU0lPTiBmcm9tICcuL3ZlcnNpb24uanMnO1xuaW1wb3J0ICcuL2hhc3MtYXR0cmlidXRlLXV0aWwuanMnO1xuXG53aW5kb3cuY3VzdG9tVUkgPSB3aW5kb3cuY3VzdG9tVUkgfHwge1xuICBTVVBQT1JURURfU0xJREVSX01PREVTOiBbXG4gICAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG4gIF0sXG5cbiAgZG9tSG9zdChlbGVtKSB7XG4gICAgaWYgKGVsZW0gPT09IGRvY3VtZW50KSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCByb290ID0gZWxlbS5nZXRSb290Tm9kZSgpO1xuICAgIHJldHVybiAocm9vdCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpID8gLyoqIEB0eXBlIHtTaGFkb3dSb290fSAqLyAocm9vdCkuaG9zdCA6IHJvb3Q7XG4gIH0sXG5cbiAgbGlnaHRPclNoYWRvdyhlbGVtLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBlbGVtLnNoYWRvd1Jvb3QgP1xuICAgICAgZWxlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDpcbiAgICAgIGVsZW0ucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH0sXG5cbiAgZ2V0RWxlbWVudEhpZXJhcmNoeShyb290LCBoaWVyYXJjaHkpIHtcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZWxlbSA9IGhpZXJhcmNoeS5zaGlmdCgpO1xuICAgIGlmIChlbGVtKSB7XG4gICAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoXG4gICAgICAgIHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KHJvb3QsIGVsZW0pLCBoaWVyYXJjaHkpO1xuICAgIH1cbiAgICByZXR1cm4gcm9vdDtcbiAgfSxcblxuICBnZXRDb250ZXh0KGVsZW0pIHtcbiAgICBpZiAoZWxlbS5fY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtLl9jb250ZXh0ID0gW107XG4gICAgICBmb3IgKGxldCBlbGVtZW50ID0gKGVsZW0udGFnTmFtZSA9PT0gJ0hBLUVOVElUSUVTLUNBUkQnID8gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbSkgOiBlbGVtKTtcbiAgICAgICAgZWxlbWVudDsgZWxlbWVudCA9IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW1lbnQpKSB7XG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC50YWdOYW1lKSB7XG4gICAgICAgICAgY2FzZSAnSEEtRU5USVRJRVMtQ0FSRCc6XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ncm91cEVudGl0eSkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5ncm91cEVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5ID09PSBmYWxzZSAmJiBlbGVtZW50LnN0YXRlcyAmJiBlbGVtZW50LnN0YXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGBncm91cC4ke2NvbXB1dGVTdGF0ZURvbWFpbihlbGVtZW50LnN0YXRlc1swXSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdNT1JFLUlORk8tR1JPVVAnOlxuICAgICAgICAgIGNhc2UgJ1NUQVRFLUNBUkQtQ09OVEVOVCc6XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGF0ZU9iaikge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5zdGF0ZU9iai5lbnRpdHlfaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnSEEtQ0FSRFMnOlxuICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSB8fCAnZGVmYXVsdF92aWV3Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBubyBkZWZhdWx0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW0uX2NvbnRleHQucmV2ZXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbS5fY29udGV4dDtcbiAgfSxcblxuICBmaW5kTWF0Y2goa2V5LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSByZXR1cm4gbnVsbDtcbiAgICBpZiAob3B0aW9uc1trZXldKSByZXR1cm4ga2V5O1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5maW5kKG9wdGlvbiA9PiBrZXkubWF0Y2goYF4ke29wdGlvbn0kYCkpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2Uoc3RhdGVPYmopIHtcbiAgICBjb25zdCBuYW1lID0gd2luZG93LmN1c3RvbVVJLmdldE5hbWUoKTtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKG5hbWUsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlW21hdGNoXSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAoZWxlbSwgc3RhdGVPYmopIHtcbiAgICBjb25zdCBjb250ZXh0ID0gd2luZG93LmN1c3RvbVVJLmdldENvbnRleHQoZWxlbSk7XG4gICAgaWYgKCFjb250ZXh0KSByZXR1cm4gc3RhdGVPYmo7XG5cbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9O1xuICAgIGNvbnRleHQuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChjLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGF0dHJpYnV0ZXMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG5cbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgX3NldEtlZXAob2JqLCB2YWx1ZSkge1xuICAgIGlmIChvYmouX2N1aV9rZWVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IG9iai5fY3VpX2tlZXAgJiYgdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIGlmICghYXR0cmlidXRlcy50ZW1wbGF0ZXMpIHtcbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgdHJ1ZSk7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IG5ld0F0dHJpYnV0ZXMgPSB7fTtcbiAgICBsZXQgaGFzR2xvYmFsID0gZmFsc2U7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzLnRlbXBsYXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGF0dHJpYnV0ZXMudGVtcGxhdGVzW2tleV07XG4gICAgICBpZiAodGVtcGxhdGUubWF0Y2goL1xcYihlbnRpdGllc3xoYXNzKVxcYi8pKSB7XG4gICAgICAgIGhhc0dsb2JhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IHdpbmRvdy5jdXN0b21VSS5jb21wdXRlVGVtcGxhdGUoXG4gICAgICAgIHRlbXBsYXRlLCBoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzLFxuICAgICAgICAoc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlcyAmJiBzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzW2tleV0pIHx8XG4gICAgICAgICAgICBhdHRyaWJ1dGVzW2tleV0sXG4gICAgICAgIHN0YXRlT2JqLnVudGVtcGxhdGVkX3N0YXRlIHx8IHN0YXRlT2JqLnN0YXRlKTtcbiAgICAgIC8vIEluIGNhc2Ugb2YgbnVsbCBkb24ndCBzZXQgdGhlIHZhbHVlLlxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XG4gICAgICBuZXdBdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIGlmIChrZXkgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5zdGF0ZSkge1xuICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ19zdGF0ZURpc3BsYXknKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouX3N0YXRlRGlzcGxheSkge1xuICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBhdHRyaWJ1dGVzW2tleV0pIHtcbiAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCAhaGFzR2xvYmFsKTtcbiAgICBpZiAoIWhhc0NoYW5nZXMpIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMgPT09IGF0dHJpYnV0ZXMpIHtcbiAgICAgIC8vIFdlIGFyZSBvcGVyYXRpbmcgb24gcmVhbCBhdHRyaWJ1dGVzLiBSZXBsYWNlIHRoZW0uXG4gICAgICBjb25zdCByZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBuZXdBdHRyaWJ1dGVzKTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3QXR0cmlidXRlcywgJ3N0YXRlJykpIHtcbiAgICAgICAgaWYgKG5ld0F0dHJpYnV0ZXMuc3RhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQuc3RhdGUgPSBTdHJpbmcobmV3QXR0cmlidXRlcy5zdGF0ZSk7XG4gICAgICAgICAgcmVzdWx0LnVudGVtcGxhdGVkX3N0YXRlID0gc3RhdGVPYmouc3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3QXR0cmlidXRlcywgJ19zdGF0ZURpc3BsYXknKSkge1xuICAgICAgICByZXN1bHQuX3N0YXRlRGlzcGxheSA9IG5ld0F0dHJpYnV0ZXMuX3N0YXRlRGlzcGxheTtcbiAgICAgICAgcmVzdWx0LnVudGVtcGxhdGVkX3N0YXRlRGlzcGxheSA9IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAocmVzdWx0LCAhaGFzR2xvYmFsKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vIE9wZXJhdGluZyBvbiBjb250ZXh0LWF3YXJlIGF0dHJpYnV0ZXMuIFJldHVybiBzaGFsbG93IGNvcHkgb2Ygb2JqZWN0LlxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iaik7XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmV3UmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBzdGF0ZU9iai5hdHRyaWJ1dGVzKTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrQXR0cmlidXRlcyhvYmopIHtcbiAgICAgIGlmICghb2JqKSByZXR1cm47XG4gICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCgoYXR0cmlidXRlcykgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgICAgICBoYXNzLCBzdGF0ZXMsIG5ld1Jlc3VsdCwgYXR0cmlidXRlcyk7XG4gICAgICAgIGhhc0NoYW5nZXMgfD0gKHJlc3VsdCAhPT0gbmV3UmVzdWx0KTtcbiAgICAgIH0pO1xuICAgICAgY2hlY2tBdHRyaWJ1dGVzKG9iai5kZXZpY2UpO1xuICAgICAgY2hlY2tBdHRyaWJ1dGVzKG9iai5ncm91cCk7XG4gICAgfVxuXG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlKTtcbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgaWYgKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopIHJldHVybiBuZXdSZXN1bHQ7XG4gICAgaWYgKGhhc0NoYW5nZXMpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iaik7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZU9iajtcbiAgfSxcblxuICBhcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXR5X2lkOiBzdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBzdGF0ZTogc3RhdGVPYmouc3RhdGUsXG4gICAgICBhdHRyaWJ1dGVzOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKSxcbiAgICAgIHVudGVtcGxhdGVkX2F0dHJpYnV0ZXM6IHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlT2JqLmxhc3RfY2hhbmdlZCxcbiAgICB9O1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0KGVsZW0sIHN0YXRlT2JqLCBpbkRpYWxvZywgYWxsb3dIaWRkZW4pIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBzdGF0ZU9iajtcbiAgICBsZXQgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2Uoc3RhdGVPYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAoZWxlbSwgb2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGVsZW0uaGFzcywgZWxlbS5oYXNzLnN0YXRlcywgb2JqLCBvYmouYXR0cmlidXRlcyk7XG5cbiAgICBpZiAob2JqICE9PSBzdGF0ZU9iaiAmJiBvYmouYXR0cmlidXRlcy5oaWRkZW4gJiYgYWxsb3dIaWRkZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZpeEdyb3VwVGl0bGVzKCkge1xuICAgIGNvbnN0IGhvbWVBc3Npc3RhbnRNYWluID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbiddKTtcbiAgICBpZiAoaG9tZUFzc2lzdGFudE1haW4gPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuZml4R3JvdXBUaXRsZXMsIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShob21lQXNzaXN0YW50TWFpbiwgW1xuICAgICAgJ3BhcnRpYWwtY2FyZHMnLFxuICAgICAgJ2hhLWNhcmRzW3ZpZXctdmlzaWJsZV0nXSk7XG4gICAgaWYgKGhhQ2FyZHMgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coaGFDYXJkcywgJy5tYWluJykgfHwgaGFDYXJkcy4kLm1haW47XG4gICAgY29uc3QgY2FyZHMgPSBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJ2hhLWVudGl0aWVzLWNhcmQnKTtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBpZiAoY2FyZC5ncm91cEVudGl0eSkge1xuICAgICAgICBjb25zdCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgY2FyZCxcbiAgICAgICAgICBjYXJkLmdyb3VwRW50aXR5LFxuICAgICAgICAgIGZhbHNlIC8qIGluRGlhbG9nICovLFxuICAgICAgICAgIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKTtcbiAgICAgICAgaWYgKG9iaiAhPT0gY2FyZC5ncm91cEVudGl0eSAmJiBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lKSB7XG4gICAgICAgICAgY29uc3QgbmFtZUVsZW0gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhjYXJkLCAnLm5hbWUnKTtcbiAgICAgICAgICBuYW1lRWxlbS50ZXh0Q29udGVudCA9IG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBjb250cm9sQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgY29uc3QgcGFydGlhbENhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbicsXG4gICAgICAncGFydGlhbC1jYXJkcyddKTtcbiAgICBpZiAocGFydGlhbENhcmRzID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgIHdpbmRvdy5jdXN0b21VSS5jb250cm9sQ29sdW1ucy5iaW5kKG51bGwsIGNvbHVtbnMpLFxuICAgICAgICAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGFydGlhbENhcmRzLm1xbHMuZm9yRWFjaCgobXFsKSA9PiB7XG4gICAgICBtcWwucmVtb3ZlTGlzdGVuZXIocGFydGlhbENhcmRzLmhhbmRsZVdpbmRvd0NoYW5nZSk7XG4gICAgfSk7XG4gICAgcGFydGlhbENhcmRzLm1xbHMgPSBjb2x1bW5zLm1hcCgod2lkdGgpID0+IHtcbiAgICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke3dpZHRofXB4KWApO1xuICAgICAgbXFsLmFkZExpc3RlbmVyKHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UpO1xuICAgICAgcmV0dXJuIG1xbDtcbiAgICB9KTtcbiAgICBwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlKCk7XG4gIH0sXG5cbiAgdXNlQ3VzdG9taXplcigpIHtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGNvbnN0IGN1c3RvbWl6ZXIgPSBtYWluLmhhc3Muc3RhdGVzWydjdXN0b21pemVyLmN1c3RvbWl6ZXInXTtcbiAgICBpZiAoIWN1c3RvbWl6ZXIpIHJldHVybjtcbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpIHtcbiAgICAgIHdpbmRvdy5jdXN0b21VSS5jb250cm9sQ29sdW1ucyhjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucyk7XG4gICAgfVxuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuaGlkZV9hdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsICYmIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKSB7XG4gICAgICAgIGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGF0dHIpKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1thdHRyXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGVDb25maWdQYW5lbCgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjb25zdCBoYVBhbmVsQ29uZmlnID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbicsXG4gICAgICAncGFydGlhbC1wYW5lbC1yZXNvbHZlcicsXG4gICAgICAnaGEtcGFuZWwtY29uZmlnJ10pO1xuICAgIGlmICghaGFQYW5lbENvbmZpZykge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxMDBtcy5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS51cGRhdGVDb25maWdQYW5lbCwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFDb25maWdOYXZpZ2F0aW9uID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaGFQYW5lbENvbmZpZywgW1xuICAgICAgJ2hhLWNvbmZpZy1kYXNoYm9hcmQnLFxuICAgICAgJ2hhLWNvbmZpZy1uYXZpZ2F0aW9uJ10pO1xuICAgIGlmIChoYUNvbmZpZ05hdmlnYXRpb24pIHtcbiAgICAgIC8vIEhhQ29uZmlnTmF2aWdhdGlvbiBzdGFydGVkIHVzaW5nIGxvY2FsaXplIG9uIDIxLjAxLjIwMThcbiAgICAgIGlmIChoYUNvbmZpZ05hdmlnYXRpb24ubG9jYWxpemUgJiYgIWhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCkge1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2ggPSB0cnVlO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZCA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZDtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQgPSAoaGFzcywgcGFnZSkgPT5cbiAgICAgICAgICBwYWdlID09PSAnY3VzdG9tdWknIHx8IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkKGhhc3MsIHBhZ2UpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ0N1c3RvbSBVSScgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24ocGFnZSwgbG9jYWxpemUpKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnU2V0VUkgdHdlYWtzJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24ocGFnZSwgbG9jYWxpemUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFDb25maWdOYXZpZ2F0aW9uLnBhZ2VzLnNvbWUoY29uZiA9PiBjb25mID09PSAnY3VzdG9tdWknIHx8IGNvbmYuZG9tYWluID09PSAnY3VzdG9tdWknKSkge1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24ucHVzaCgncGFnZXMnLCBoYUNvbmZpZ05hdmlnYXRpb24ubG9jYWxpemUgPyAnY3VzdG9tdWknIDoge1xuICAgICAgICAgIGRvbWFpbjogJ2N1c3RvbXVpJyxcbiAgICAgICAgICBjYXB0aW9uOiAnQ3VzdG9tIFVJJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldCBVSSB0d2Vha3MuJyxcbiAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRIYUNvbmZpZ0N1c3RvbVVpID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hhLWNvbmZpZy1jdXN0b20tdWknKTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuaXNXaWRlID0gaGFQYW5lbENvbmZpZy5pc1dpZGU7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLnNldEF0dHJpYnV0ZSgncGFnZS1uYW1lJywgJ2N1c3RvbXVpJyk7XG4gICAgICByZXR1cm4gaGFDb25maWdDdXN0b21VaTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXJvblBhZ2VzID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coaGFQYW5lbENvbmZpZywgJ2lyb24tcGFnZXMnKTtcbiAgICBpZiAoaXJvblBhZ2VzKSB7XG4gICAgICBpZiAoaXJvblBhZ2VzLmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIGlyb25QYWdlcy5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgICAgaXJvblBhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24taXRlbXMtY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKSkge1xuICAgICAgICAgICAgaXJvblBhZ2VzLnNlbGVjdCgnY3VzdG9tdWknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByb290ID0gaGFQYW5lbENvbmZpZy5zaGFkb3dSb290IHx8IGhhUGFuZWxDb25maWc7XG4gICAgICBpZiAocm9vdC5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgfVxuICAgICAgY29uc3QgdmlzaWJsZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJyk7XG4gICAgICByb290Lmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IHZpc2libGUgPyAnJyA6ICdub25lJztcbiAgICB9XG4gIH0sXG5cbiAgaW5zdGFsbFN0YXRlc0hvb2soKSB7XG4gICAgY29uc3QgaG9tZUFzc2lzdGFudCA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIWhvbWVBc3Npc3RhbnQgfHwgIWhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzKSByZXR1cm47XG4gICAgY29uc3Qgb3JpZ2luYWxVcGRhdGUgPSBob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcztcbiAgICBob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcyA9IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBjb25zdCB7IGhhc3MgfSA9IHRoaXM7XG4gICAgICBpZiAob2JqLnN0YXRlcykge1xuICAgICAgICBPYmplY3Qua2V5cyhvYmouc3RhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRpdHkgPSBvYmouc3RhdGVzW2tleV07XG4gICAgICAgICAgaWYgKGVudGl0eS5fY3VpX2tlZXApIHJldHVybjtcbiAgICAgICAgICBjb25zdCBuZXdFbnRpdHkgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBvYmouc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgIGlmIChoYXNzLnN0YXRlcyAmJiBlbnRpdHkgIT09IGhhc3Muc3RhdGVzW2tleV0pIHtcbiAgICAgICAgICAgIC8vIE5ldyBzdGF0ZSBhcnJpdmVkLiBQdXQgbW9kaWZpZWQgc3RhdGUgaW4uXG4gICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkgIT09IG5ld0VudGl0eSkge1xuICAgICAgICAgICAgLy8gSXQncyB0aGUgc2FtZSBzdGF0ZSBidXQgY29udGVudHMgY2hhbmdlZCBkdWUgdG8gb3RoZXIgc3RhdGUgY2hhbmdlcy5cbiAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgb3JpZ2luYWxVcGRhdGUuY2FsbCh0aGlzLCBvYmopO1xuICAgICAgaWYgKG9iai50aGVtZXMgJiYgaGFzcy5fdGhlbWVXYWl0ZXJzKSB7XG4gICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycy5mb3JFYWNoKHdhaXRlciA9PiB3YWl0ZXIuc3RhdGVDaGFuZ2VkKHdhaXRlci5zdGF0ZSkpO1xuICAgICAgICBoYXNzLl90aGVtZVdhaXRlcnMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGlmIChtYWluLmhhc3MgJiYgbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgbWFpbi5fdXBkYXRlSGFzcyh7IHN0YXRlczogbWFpbi5oYXNzLnN0YXRlcyB9KTtcbiAgICB9XG4gIH0sXG5cbiAgaW5zdGFsbFBhcnRpYWxDYXJkcygpIHtcbiAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3BhcnRpYWwtY2FyZHMnKTtcbiAgICBpZiAoIXBhcnRpYWxDYXJkcyB8fCAhcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIpIHJldHVybjtcbiAgICBwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlciA9IChoYXNzLCBlbnRpdHlJZCkgPT4ge1xuICAgICAgaWYgKGhhc3Muc3RhdGVzW2VudGl0eUlkXS5hdHRyaWJ1dGVzLmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgZXhjbHVkZXMgPSB7fTtcbiAgICAgIE9iamVjdC52YWx1ZXMoaGFzcy5zdGF0ZXMpLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMgJiYgZW50aXR5LmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcpIHtcbiAgICAgICAgICBjb25zdCBleGNsdWRlRW50aXR5SWQgPSBlbnRpdHkuZW50aXR5X2lkO1xuICAgICAgICAgIGlmIChleGNsdWRlc1tleGNsdWRlRW50aXR5SWRdKSByZXR1cm47XG4gICAgICAgICAgZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSA9IGVudGl0eTtcbiAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMudmlldykge1xuICAgICAgICAgICAgY29uc3Qgdmlld0VudGl0aWVzID0gZ2V0Vmlld0VudGl0aWVzKGhhc3Muc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModmlld0VudGl0aWVzKVxuICAgICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGlkID0+IHZpZXdFbnRpdGllc1tpZF0uYXR0cmlidXRlcy5oaWRlX2luX2RlZmF1bHRfdmlldyAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVzW2lkXSA9IHZpZXdFbnRpdGllc1tpZF07XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gIWV4Y2x1ZGVzW2VudGl0eUlkXTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIEFsbG93cyBjaGFuZ2luZyB0aGUgJ0V4ZWN1dGUnIC8gJ0FjdGl2YXRlJyB0ZXh0IG9uIHNjcmlwdC9zY2VuZSBjYXJkcy5cbiAgaW5zdGFsbEFjdGlvbk5hbWUoZWxlbWVudE5hbWUpIHtcbiAgICBjb25zdCBrbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChlbGVtZW50TmFtZSk7XG4gICAgaWYgKCFrbGFzcyB8fCAha2xhc3MucHJvdG90eXBlKSByZXR1cm47XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGtsYXNzLnByb3RvdHlwZSwgJ2xvY2FsaXplJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBmdW5jdGlvbiBjdXN0b21Mb2NhbGl6ZSh2KSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGVPYmogJiYgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hY3Rpb25fbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hY3Rpb25fbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhLmxvY2FsaXplKHYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXN0b21Mb2NhbGl6ZTtcbiAgICAgIH0sXG4gICAgICBzZXQoKSB7fSxcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgdGhlbWluZyBcInJlZ3VsYXJcIiB0b3AgYmFkZ2VzLlxuICBpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKSB7XG4gICAgY29uc3QgaGFTdGF0ZUxhYmVsQmFkZ2UgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJyk7XG4gICAgaWYgKCFoYVN0YXRlTGFiZWxCYWRnZSB8fCAhaGFTdGF0ZUxhYmVsQmFkZ2UucHJvdG90eXBlLnN0YXRlQ2hhbmdlZCkgcmV0dXJuO1xuICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgaGFTdGF0ZUxhYmVsQmFkZ2UucHJvdG90eXBlLnN0YXRlQ2hhbmdlZCA9IGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZU9iaikge1xuICAgICAgLy8gVE9ETzogQ2FsbCB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RcbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc3MudGhlbWVzID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgPSB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycyB8fCBbXTtcbiAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycy5wdXNoKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSxcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUgfHwgJ2RlZmF1bHQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICAgIGlmICh0aGlzLnN0YXJ0SW50ZXJ2YWwpIHtcbiAgICAgICAgLy8gQWRkZWQgb24gMTkuMS4yMDE4XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbChzdGF0ZU9iaik7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBpbnN0YWxsU3RhdGVCYWRnZSgpIHtcbiAgICBjb25zdCBzdGF0ZUJhZGdlID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1iYWRnZScpO1xuICAgIGlmICghc3RhdGVCYWRnZSB8fCAhc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlSWNvbkFwcGVhcmFuY2UpIHJldHVybjtcbiAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlID0gc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlSWNvbkFwcGVhcmFuY2U7XG4gICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICBzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZSA9IGZ1bmN0aW9uIGN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlKHN0YXRlT2JqKSB7XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5pY29uX2NvbG9yICYmICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kLmljb24uc3R5bGUsIHtcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgICAgICBjb2xvcjogc3RhdGVPYmouYXR0cmlidXRlcy5pY29uX2NvbG9yLFxuICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZS5jYWxsKHRoaXMsIHN0YXRlT2JqKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGluc3RhbGxIYUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgaGFBdHRyaWJ1dGVzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1hdHRyaWJ1dGVzJyk7XG4gICAgaWYgKCFoYUF0dHJpYnV0ZXMgfHwgIWhhQXR0cmlidXRlcy5wcm90b3R5cGUuY29tcHV0ZUZpbHRlcnNBcnJheSB8fFxuICAgICAgICF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgIGhhQXR0cmlidXRlcy5wcm90b3R5cGUuY29tcHV0ZUZpbHRlcnNBcnJheSA9IGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkoZXh0cmFGaWx0ZXJzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpLmNvbmNhdChleHRyYUZpbHRlcnMgPyBleHRyYUZpbHRlcnMuc3BsaXQoJywnKSA6IFtdKTtcbiAgICB9O1xuICB9LFxuXG4gIGluc3RhbGxIYUZvcm1DdXN0b21pemUoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY29uc3QgaGFGb3JtQ3VzdG9taXplID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1mb3JtLWN1c3RvbWl6ZScpO1xuICAgIGlmICghaGFGb3JtQ3VzdG9taXplKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUsIDEwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuaGFGb3JtQ3VzdG9taXplSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaGFGb3JtQ3VzdG9taXplSW5pdERvbmUgPSB0cnVlO1xuXG4gICAgaWYgKCF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICBpZiAoaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSkge1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUgPVxuICAgICAgICBmdW5jdGlvbiBjdXN0b21Db21wdXRlU2luZ2xlQXR0cmlidXRlKGtleSwgdmFsdWUsIHNlY29uZGFyeSkge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2tleV1cbiAgICAgICAgICAgICAgfHwgeyB0eXBlOiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFIH07XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRPcGVuT2JqZWN0KGtleSwgY29uZmlnLnR5cGUgPT09ICdqc29uJyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLCBzZWNvbmRhcnksIGNvbmZpZyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKSB7XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyA9XG4gICAgICAgIGZ1bmN0aW9uIGN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKFxuICAgICAgICAgIGxvY2FsQXR0cmlidXRlcywgZ2xvYmFsQXR0cmlidXRlcywgZXhpc3RpbmdBdHRyaWJ1dGVzLCBuZXdBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgY29uc3Qga25vd25LZXlzID1cbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb25mID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb25mICYmICghY29uZi5kb21haW5zIHx8ICF0aGlzLmVudGl0eSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZi5kb21haW5zLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbih0aGlzLmVudGl0eSkpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhsb2NhbEF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhnbG9iYWxBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZXhpc3RpbmdBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobmV3QXR0cmlidXRlcykpO1xuICAgICAgICAgIHJldHVybiBrbm93bktleXMuc29ydCgpLmNvbmNhdCgnT3RoZXInKTtcbiAgICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgaW5zdGFsbENsYXNzSG9va3MoKSB7XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5jbGFzc0luaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUgPSB0cnVlO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsUGFydGlhbENhcmRzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZXNIb29rKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsU3RhdGVCYWRnZSgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFBdHRyaWJ1dGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxBY3Rpb25OYW1lKCdzdGF0ZS1jYXJkLXNjZW5lJyk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxBY3Rpb25OYW1lKCdzdGF0ZS1jYXJkLXNjcmlwdCcpO1xuICB9LFxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5pbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQ2xhc3NIb29rcygpO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgaWYgKCFtYWluLmhhc3MgfHwgIW1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgIC8vIENvbm5lY3Rpb24gd2Fzbid0IG1hZGUgeWV0LiBUcnkgaW4gMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5pdCwgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdpbmRvdy5jdXN0b21VSS5pbml0RG9uZSA9IHRydWU7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkudXNlQ3VzdG9taXplcigpO1xuXG4gICAgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvY2F0aW9uLWNoYW5nZWQnLCB3aW5kb3cuc2V0VGltZW91dC5iaW5kKG51bGwsIHdpbmRvdy5jdXN0b21VSS5ydW5Ib29rcywgMTAwKSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgIGNvbnNvbGUubG9nKGBMb2FkZWQgQ3VzdG9tVUkgJHtWRVJTSU9OfWApO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgIGlmICghd2luZG93LkNVU1RPTV9VSV9MSVNUKSB7XG4gICAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QgPSBbXTtcbiAgICB9XG4gICAgd2luZG93LkNVU1RPTV9VSV9MSVNULnB1c2goe1xuICAgICAgbmFtZTogJ0N1c3RvbVVJJyxcbiAgICAgIHZlcnNpb246IFZFUlNJT04sXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vYW5kcmV5LWdpdC9ob21lLWFzc2lzdGFudC1jdXN0b20tdWknLFxuICAgIH0pO1xuICB9LFxuXG4gIHJ1bkhvb2tzKCkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS51cGRhdGVDb25maWdQYW5lbCgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFGb3JtQ3VzdG9taXplKCk7XG4gIH0sXG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScpIHx8ICcnO1xuICB9LFxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGEtZGV2aWNlLW5hbWUnLCBuYW1lIHx8ICcnKTtcbiAgfSxcblxuICBjb21wdXRlVGVtcGxhdGUodGVtcGxhdGUsIGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpIHtcbiAgICBjb25zdCBmdW5jdGlvbkJvZHkgPSAodGVtcGxhdGUuaW5kZXhPZigncmV0dXJuJykgPj0gMCkgPyB0ZW1wbGF0ZSA6IGByZXR1cm4gXFxgJHt0ZW1wbGF0ZX1cXGA7YDtcbiAgICB0cnkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIGNvbnN0IGZ1bmMgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdoYXNzJywgJ2VudGl0aWVzJywgJ2VudGl0eScsICdhdHRyaWJ1dGVzJywgJ2F0dHJpYnV0ZScsICdzdGF0ZScsIGZ1bmN0aW9uQm9keSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldy1mdW5jICovXG4gICAgICByZXR1cm4gZnVuYyhoYXNzLCBlbnRpdGllcywgZW50aXR5LCBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUsIHN0YXRlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICBpZiAoKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikgfHwgZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtlLm5hbWV9OiAke2UubWVzc2FnZX0gaW4gdGVtcGxhdGUgJHtmdW5jdGlvbkJvZHl9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfSxcbn07XG53aW5kb3cuY3VzdG9tVUkuaW5pdCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgJzIwMTgwNjI1JztcbiJdLCJzb3VyY2VSb290IjoiIn0=