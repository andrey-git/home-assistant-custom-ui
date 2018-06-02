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
    partialCards.mqls.forEach(function (mql) {
      mql.removeListener(partialCards.handleWindowChange);
    });
    partialCards.mqls = columns.map(function (width) {
      var mql = window.matchMedia('(min-width: ' + width + 'px)');
      mql.addListener(partialCards.handleWindowChange);
      return mql;
    });
    partialCards.handleWindowChange();
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
            Object.assign(excludes, Object(_home_assistant_polymer_src_common_entity_get_view_entities_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hass.states, entity));
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
/* harmony default export */ __webpack_exports__["default"] = ('20180602');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc3MtYXR0cmlidXRlLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkiLCJTVEFURVNfT0ZGIiwiVU5JVF9DIiwiVU5JVF9GIiwiREVGQVVMVF9WSUVXX0VOVElUWV9JRCIsImFwcGx5VGhlbWVzT25FbGVtZW50IiwiZWxlbWVudCIsInRoZW1lcyIsImxvY2FsVGhlbWUiLCJ1cGRhdGVNZXRhIiwiX3RoZW1lcyIsInRoZW1lTmFtZSIsImRlZmF1bHRfdGhlbWUiLCJzdHlsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0aGVtZSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJlZml4ZWRLZXkiLCJ1cGRhdGVTdHlsZXMiLCJ3aW5kb3ciLCJTaGFkeUNTUyIsInN0eWxlU3VidHJlZSIsIm1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVtZUNvbG9yIiwiZHluYW1pY0NvbnRlbnRVcGRhdGVyIiwicm9vdCIsIm5ld0VsZW1lbnRUYWciLCJhdHRyaWJ1dGVzIiwicm9vdEVsIiwiY3VzdG9tRWwiLCJsYXN0Q2hpbGQiLCJ0YWdOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwiY2FuVG9nZ2xlRG9tYWluIiwiaGFzcyIsImRvbWFpbiIsInNlcnZpY2VzIiwiY29uZmlnIiwiY2FuVG9nZ2xlU3RhdGUiLCJzdGF0ZU9iaiIsImNvbXB1dGVTdGF0ZURvbWFpbiIsInN0YXRlIiwic3VwcG9ydGVkX2ZlYXR1cmVzIiwiY29tcHV0ZURvbWFpbiIsImVudGl0eUlkIiwic3Vic3RyIiwiaW5kZXhPZiIsIl9kb21haW4iLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiRE9NQUlOX0RFVklDRV9DTEFTUyIsImJpbmFyeV9zZW5zb3IiLCJjb3ZlciIsInNlbnNvciIsIlVOS05PV05fVFlQRSIsIkFERF9UWVBFIiwiVFlQRV9UT19UQUciLCJzdHJpbmciLCJqc29uIiwiaWNvbiIsImJvb2xlYW4iLCJhcnJheSIsIkxPR0lDX1NUQVRFX0FUVFJJQlVURVMiLCJlbnRpdHlfcGljdHVyZSIsInVuZGVmaW5lZCIsImZyaWVuZGx5X25hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJlbXVsYXRlZF9odWUiLCJkb21haW5zIiwiZW11bGF0ZWRfaHVlX25hbWUiLCJoYWFza2FfaGlkZGVuIiwiaGFhc2thX25hbWUiLCJob21lYnJpZGdlX2hpZGRlbiIsImhvbWVicmlkZ2VfbmFtZSIsImF0dHJpYnV0aW9uIiwiY3VzdG9tX3VpX21vcmVfaW5mbyIsImN1c3RvbV91aV9zdGF0ZV9jYXJkIiwiZGV2aWNlX2NsYXNzIiwib3B0aW9ucyIsImFzc3VtZWRfc3RhdGUiLCJpbml0aWFsX3N0YXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsInZhbHVlIiwidG9TdHJpbmciLCJsaXRlcmFsVmFsdWUiLCJFcnJvciIsImh0bWxWYWx1ZSIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJodG1sIiwic3RyaW5ncyIsInRlbXBsYXRlIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwidiIsImlkeCIsImh0bWxMaXRlcmFsIiwiQ3VpQmFzZUVsZW1lbnQiLCJleHRyYXMiLCJleHRyYV9kYXRhX3RlbXBsYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJleHRyYSIsInN0YXRlcyIsImZpbHRlciIsImluRGlhbG9nIiwibGVuZ3RoIiwic2hvd19sYXN0X2NoYW5nZWQiLCJCb29sZWFuIiwiY29udHJvbEVsZW1lbnQiLCJTdHJpbmciLCJjb21wdXRlZCIsIlBvbHltZXIiLCJFbGVtZW50IiwiRHluYW1pY0VsZW1lbnQiLCJlbGVtZW50TmFtZSIsInRvVXBwZXJDYXNlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJEeW5hbWljV2l0aEV4dHJhIiwiX2F0dGFjaGVkIiwiX2lzQXR0YWNoZWQiLCJhdHRhY2hlZCIsImV4dHJhX2JhZGdlIiwiZXh0cmFCYWRnZXMiLCJleHRyYUJhZGdlIiwibWF5YmVDaGFuZ2VPYmplY3QiLCJhdHRyaWJ1dGUiLCJ1bml0IiwiYmxhY2tsaXN0IiwiYmxhY2tsaXN0X3N0YXRlcyIsInNvbWUiLCJSZWdFeHAiLCJ0ZXN0IiwiX2VudGl0eURpc3BsYXkiLCJleHRyYU9iaiIsImV4dHJhT2JqVmlzaWJsZSIsImhpZGVfY29udHJvbCIsImhhTG9jYWxpemUiLCJsb2NhbGl6ZSIsImNvbmZpcm1fY29udHJvbHMiLCJjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jayIsImUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJsb2NrIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsImFwcGx5VGhlbWVzIiwiZ2V0IiwiSGFDb25maWdDdXN0b21VaSIsIm5hbWUiLCJnZXROYW1lIiwic2V0TmFtZSIsImhpc3RvcnkiLCJiYWNrIiwiZmlyZSIsImlzV2lkZSIsIm9ic2VydmVyIiwiRXZlbnRzTWl4aW4iLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCIsImF0dHIiLCJkZWYiLCJpc09uIiwidGhlbWVkTWluIiwiZXYiLCJ0YXJnZXQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJwaW4iLCJub3RpZnkiLCJfdGhlbWVkTWluIiwiU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMiLCJET01BSU5fVE9fU0xJREVSX1NVUFBPUlQiLCJsaWdodCIsImNsaW1hdGUiLCJUWVBFX1RPX0NPTlRST0wiLCJ0b2dnbGUiLCJkaXNwbGF5IiwiU3RhdGVDYXJkQ3VzdG9tVWkiLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9jb250YWluZXIiLCJzZXRQcm9wZXJ0eSIsImlucHV0Q2hhbmdlZCIsIm1hcmdpbiIsInBhZGRpbmciLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiYmFkZ2VzX2xpc3QiLCJwdXNoIiwicGFyYW1zIiwid2lkdGgiLCJmb250U2l6ZSIsIm1vZGlmaWVkT2JqIiwidGhlbWVUYXJnZXQiLCJvYmoiLCJzdGF0ZV9jYXJkX21vZGUiLCJtYXliZUhpZGVFbnRpdHkiLCJiYWRnZU1vZGUiLCJyZWd1bGFyTW9kZV8iLCJjbGVhbkJhZGdlU3R5bGUiLCJvcmlnaW5hbFN0YXRlQ2FyZFR5cGUiLCJjdXN0b21TdGF0ZUNhcmRUeXBlIiwic2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSIsInN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeSIsInNsaWRlckVsaWdpYmxlXyIsInNlcnZpY2VNaW4iLCJzZXJ2aWNlTWF4IiwidmFsdWVOYW1lIiwic2V0VmFsdWVOYW1lIiwibmFtZU9uIiwibWluX3RlbXAiLCJtYXhfdGVtcCIsImNvbnRyb2xfZWxlbWVudCIsIlN0YXRlQ2FyZFdpdGhTbGlkZXIiLCJfb25Jcm9uUmVzaXplIiwiYmluZCIsIl9pc0Nvbm5lY3RlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfd2FpdEZvckxheW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfc2V0TW9kZSIsIl9mcmFtZUlkIiwicmVhZHlUb0NvbXB1dGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoaWRlU2xpZGVyIiwibW9kZSIsImxpbmVUb29Mb25nIiwiYnJlYWtTbGlkZXIiLCJzaG93U2xpZGVyIiwicHJldkJyZWFrU2xpZGVyIiwicHJldkhpZGVTbGlkZXIiLCIkIiwiY29udGFpbmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIm1pbkxpbmVCcmVhayIsIm1heExpbmVCcmVhayIsImNvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0YXRlSGVpZ2h0Iiwic3RyZXRjaFNsaWRlciIsInBhcnNlSW50IiwicGFyYW0iLCJpc05hTiIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJjYWxsU2VydmljZSIsInNsaWRlclZhbHVlIiwic3RyZXRjaF9zbGlkZXIiLCJTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIiwic3VwZXJDbGFzcyIsImRldGFpbCIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNvbXBvc2VkIiwibm9kZSIsImRpc3BhdGNoRXZlbnQiLCJTVVBQT1JURURfU0xJREVSX01PREVTIiwiY3VzdG9tVWlBdHRyaWJ1dGVzIiwiZGV2aWNlIiwidGVtcGxhdGVzIiwiY29uY2F0Iiwic2xpZGVyX3RoZW1lIiwiaGlkZV9pbl9kZWZhdWx0X3ZpZXciLCJoYXNzQXR0cmlidXRlc1V0aWwiLCJkb21Ib3N0IiwiZ2V0Um9vdE5vZGUiLCJEb2N1bWVudEZyYWdtZW50IiwiaG9zdCIsImxpZ2h0T3JTaGFkb3ciLCJzZWxlY3RvciIsInNoYWRvd1Jvb3QiLCJnZXRFbGVtZW50SGllcmFyY2h5IiwiaGllcmFyY2h5Iiwic2hpZnQiLCJnZXRDb250ZXh0IiwiX2NvbnRleHQiLCJncm91cEVudGl0eSIsInJldmVyc2UiLCJmaW5kTWF0Y2giLCJmaW5kIiwibWF0Y2giLCJvcHRpb24iLCJtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlIiwiYXBwbHlBdHRyaWJ1dGVzIiwibWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwIiwiY29udGV4dCIsImMiLCJfc2V0S2VlcCIsIl9jdWlfa2VlcCIsIm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiaGFzR2xvYmFsIiwiaGFzQ2hhbmdlcyIsInVudGVtcGxhdGVkX2F0dHJpYnV0ZXMiLCJ1bnRlbXBsYXRlZF9zdGF0ZSIsIl9zdGF0ZURpc3BsYXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ1bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkiLCJtYXliZUFwcGx5VGVtcGxhdGVzIiwibmV3UmVzdWx0IiwiY2hlY2tBdHRyaWJ1dGVzIiwibGFzdF9jaGFuZ2VkIiwiYWxsb3dIaWRkZW4iLCJmaXhHcm91cFRpdGxlcyIsImhvbWVBc3Npc3RhbnRNYWluIiwiaGFDYXJkcyIsIm1haW4iLCJjYXJkcyIsImNhcmQiLCJuYW1lRWxlbSIsInRleHRDb250ZW50IiwiY29udHJvbENvbHVtbnMiLCJjb2x1bW5zIiwicGFydGlhbENhcmRzIiwibXFscyIsIm1xbCIsInJlbW92ZUxpc3RlbmVyIiwiaGFuZGxlV2luZG93Q2hhbmdlIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwidXNlQ3VzdG9taXplciIsImN1c3RvbWl6ZXIiLCJoaWRlX2F0dHJpYnV0ZXMiLCJ1cGRhdGVDb25maWdQYW5lbCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiaGFQYW5lbENvbmZpZyIsImhhQ29uZmlnTmF2aWdhdGlvbiIsImN1aVBhdGNoIiwiX29yaWdpbmFsQ29tcHV0ZUxvYWRlZCIsIl9jb21wdXRlTG9hZGVkIiwiX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24iLCJfY29tcHV0ZUNhcHRpb24iLCJfb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24iLCJfY29tcHV0ZURlc2NyaXB0aW9uIiwicGFnZSIsInBhZ2VzIiwiY29uZiIsImNhcHRpb24iLCJsb2FkZWQiLCJnZXRIYUNvbmZpZ0N1c3RvbVVpIiwiaGFDb25maWdDdXN0b21VaSIsImlyb25QYWdlcyIsImxhc3RFbGVtZW50Q2hpbGQiLCJzZWxlY3QiLCJ2aXNpYmxlIiwiaW5zdGFsbFN0YXRlc0hvb2siLCJob21lQXNzaXN0YW50IiwiX3VwZGF0ZUhhc3MiLCJvcmlnaW5hbFVwZGF0ZSIsInVwZGF0ZSIsIm5ld0VudGl0eSIsIl90aGVtZVdhaXRlcnMiLCJ3YWl0ZXIiLCJzdGF0ZUNoYW5nZWQiLCJpbnN0YWxsUGFydGlhbENhcmRzIiwiX2RlZmF1bHRWaWV3RmlsdGVyIiwiZXhjbHVkZXMiLCJleGNsdWRlRW50aXR5SWQiLCJpbnN0YWxsQWN0aW9uTmFtZSIsImtsYXNzIiwiZGVmaW5lUHJvcGVydHkiLCJjdXN0b21Mb2NhbGl6ZSIsImFjdGlvbl9uYW1lIiwiX19kYXRhIiwic2V0IiwiaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlIiwiaGFTdGF0ZUxhYmVsQmFkZ2UiLCJzdGFydEludGVydmFsIiwiaW5zdGFsbFN0YXRlQmFkZ2UiLCJzdGF0ZUJhZGdlIiwidXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlIiwiY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJpY29uX2NvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3IiLCJpbnN0YWxsSGFBdHRyaWJ1dGVzIiwiaGFBdHRyaWJ1dGVzIiwiY29tcHV0ZUZpbHRlcnNBcnJheSIsImN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJleHRyYUZpbHRlcnMiLCJzcGxpdCIsImluc3RhbGxIYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemVJbml0RG9uZSIsIl9jb21wdXRlU2luZ2xlQXR0cmlidXRlIiwiY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsInNlY29uZGFyeSIsIl9pbml0T3Blbk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwibG9jYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlcyIsImV4aXN0aW5nQXR0cmlidXRlcyIsImtub3duS2V5cyIsImZpbHRlckZyb21BdHRyaWJ1dGVzIiwic29ydCIsImluc3RhbGxDbGFzc0hvb2tzIiwiY2xhc3NJbml0RG9uZSIsImluaXQiLCJpbml0RG9uZSIsInJ1bkhvb2tzIiwibG9nIiwiQ1VTVE9NX1VJX0xJU1QiLCJ2ZXJzaW9uIiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jdGlvbkJvZHkiLCJmdW5jIiwiRnVuY3Rpb24iLCJTeW50YXhFcnJvciIsIlJlZmVyZW5jZUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ08sSUFBTUEsc0JBQXNCLGNBQTVCOztBQUVQO0FBQ08sSUFBTUMsb0JBQW9CLENBQy9CLFNBRCtCLEVBRS9CLE9BRitCLEVBRy9CLGNBSCtCLEVBSS9CLGNBSitCLEVBSy9CLGNBTCtCLEVBTS9CLFlBTitCLEVBTy9CLGNBUCtCLEVBUS9CLE9BUitCLEVBUy9CLFFBVCtCLEVBVS9CLE9BVitCLEVBVy9CLFNBWCtCLENBQTFCOztBQWNQO0FBQ08sSUFBTUMsK0JBQStCLENBQzFDLFFBRDBDLEVBRTFDLGNBRjBDLEVBRzFDLGVBSDBDLEVBSTFDLE9BSjBDLENBQXJDOztBQU9QO0FBQ08sSUFBTUMsYUFBYSxDQUN4QixRQUR3QixFQUV4QixLQUZ3QixFQUd4QixVQUh3QixDQUFuQjs7QUFNUDtBQUNP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RSxPQUFwQixDQUE0QixnQkFBNUIsRUFBOENuUixRQUFRLEVBQXREO0FBQ0QsR0F6akJrQztBQTJqQm5DckQsaUJBM2pCbUMsMkJBMmpCbkJkLFFBM2pCbUIsRUEyakJUNUUsSUEzakJTLEVBMmpCSGdCLFFBM2pCRyxFQTJqQk9HLE1BM2pCUCxFQTJqQmUvQixVQTNqQmYsRUEyakIyQmdJLFNBM2pCM0IsRUEyakJzQzdHLEtBM2pCdEMsRUEyakI2QztBQUM5RSxRQUFNNFosZUFBZ0J2VixTQUFTaEUsT0FBVCxDQUFpQixRQUFqQixLQUE4QixDQUEvQixHQUFvQ2dFLFFBQXBDLGdCQUEyREEsUUFBM0QsT0FBckI7QUFDQSxRQUFJO0FBQ0Y7QUFDQSxVQUFNd1YsT0FBTyxJQUFJQyxRQUFKLENBQ1gsTUFEVyxFQUNILFVBREcsRUFDUyxRQURULEVBQ21CLFlBRG5CLEVBQ2lDLFdBRGpDLEVBQzhDLE9BRDlDLEVBQ3VERixZQUR2RCxDQUFiO0FBRUE7QUFDQSxhQUFPQyxLQUFLcGEsSUFBTCxFQUFXZ0IsUUFBWCxFQUFxQkcsTUFBckIsRUFBNkIvQixVQUE3QixFQUF5Q2dJLFNBQXpDLEVBQW9EN0csS0FBcEQsQ0FBUDtBQUNELEtBTkQsQ0FNRSxPQUFPNEgsQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxVQUFLQSxhQUFhbVMsV0FBZCxJQUE4Qm5TLGFBQWFvUyxjQUEvQyxFQUErRDtBQUM3RDVPLGdCQUFRQyxJQUFSLENBQWdCekQsRUFBRVksSUFBbEIsVUFBMkJaLEVBQUVxUyxPQUE3QixxQkFBb0RMLFlBQXBEO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBLFlBQU1oUyxDQUFOO0FBQ0Q7QUFDRjtBQTVrQmtDLENBQXJDO0FBOGtCQTVKLE9BQU9rSCxRQUFQLENBQWdCZ1UsSUFBaEIsRzs7Ozs7Ozs7Ozs7OztBQ3RsQkEsK0RBQWUsVUFBZixFIiwiZmlsZSI6InNjcmlwdHMtZGJnLWVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9zY3JpcHRzLmpzXCIpO1xuIiwiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9ICdtZGk6Ym9va21hcmsnO1xuXG4vKiogRG9tYWlucyB0aGF0IGhhdmUgYSBzdGF0ZSBjYXJkLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9DQVJEID0gW1xuICAnY2xpbWF0ZScsXG4gICdjb3ZlcicsXG4gICdjb25maWd1cmF0b3InLFxuICAnaW5wdXRfc2VsZWN0JyxcbiAgJ2lucHV0X251bWJlcicsXG4gICdpbnB1dF90ZXh0JyxcbiAgJ21lZGlhX3BsYXllcicsXG4gICdzY2VuZScsXG4gICdzY3JpcHQnLFxuICAndGltZXInLFxuICAnd2VibGluaycsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3VsZCBoYXZlIHRoZSBoaXN0b3J5IGhpZGRlbiBpbiB0aGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZID0gW1xuICAnY2FtZXJhJyxcbiAgJ2NvbmZpZ3VyYXRvcicsXG4gICdoaXN0b3J5X2dyYXBoJyxcbiAgJ3NjZW5lJyxcbl07XG5cbi8qKiBTdGF0ZXMgdGhhdCB3ZSBjb25zaWRlciBcIm9mZlwiLiAqL1xuZXhwb3J0IGNvbnN0IFNUQVRFU19PRkYgPSBbXG4gICdjbG9zZWQnLFxuICAnb2ZmJyxcbiAgJ3VubG9ja2VkJyxcbl07XG5cbi8qKiBUZW1wZXJhdHVyZSB1bml0cy4gKi9cbmV4cG9ydCBjb25zdCBVTklUX0MgPSAnwrBDJztcbmV4cG9ydCBjb25zdCBVTklUX0YgPSAnwrBGJztcblxuLyoqIEVudGl0eSBJRCBvZiB0aGUgZGVmYXVsdCB2aWV3LiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSAnZ3JvdXAuZGVmYXVsdF92aWV3JztcbiIsIi8qKlxuICogQXBwbHkgYSB0aGVtZSB0byBhbiBlbGVtZW50IGJ5IHNldHRpbmcgdGhlIENTUyB2YXJpYWJsZXMgb24gaXQuXG4gKlxuICogZWxlbWVudDogRWxlbWVudCB0byBhcHBseSB0aGVtZSBvbi5cbiAqIHRoZW1lczogSEFTUyBUaGVtZSBpbmZvcm1hdGlvblxuICogbG9jYWxUaGVtZTogc2VsZWN0ZWQgdGhlbWUuXG4gKiB1cGRhdGVNZXRhOiBib29sZWFuIGlmIHdlIHNob3VsZCB1cGRhdGUgdGhlIHRoZW1lLWNvbG9yIG1ldGEgZWxlbWVudC5cbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseVRoZW1lc09uRWxlbWVudChlbGVtZW50LCB0aGVtZXMsIGxvY2FsVGhlbWUsIHVwZGF0ZU1ldGEgPSBmYWxzZSkge1xuICBpZiAoIWVsZW1lbnQuX3RoZW1lcykge1xuICAgIGVsZW1lbnQuX3RoZW1lcyA9IHt9O1xuICB9XG4gIGxldCB0aGVtZU5hbWUgPSB0aGVtZXMuZGVmYXVsdF90aGVtZTtcbiAgaWYgKGxvY2FsVGhlbWUgPT09ICdkZWZhdWx0JyB8fCAobG9jYWxUaGVtZSAmJiB0aGVtZXMudGhlbWVzW2xvY2FsVGhlbWVdKSkge1xuICAgIHRoZW1lTmFtZSA9IGxvY2FsVGhlbWU7XG4gIH1cbiAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbWVudC5fdGhlbWVzKTtcbiAgaWYgKHRoZW1lTmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgdmFyIHRoZW1lID0gdGhlbWVzLnRoZW1lc1t0aGVtZU5hbWVdO1xuICAgIE9iamVjdC5rZXlzKHRoZW1lKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHZhciBwcmVmaXhlZEtleSA9ICctLScgKyBrZXk7XG4gICAgICBlbGVtZW50Ll90aGVtZXNbcHJlZml4ZWRLZXldID0gJyc7XG4gICAgICBzdHlsZXNbcHJlZml4ZWRLZXldID0gdGhlbWVba2V5XTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZWxlbWVudC51cGRhdGVTdHlsZXMpIHtcbiAgICBlbGVtZW50LnVwZGF0ZVN0eWxlcyhzdHlsZXMpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5TaGFkeUNTUykge1xuICAgIC8vIGltcGxlbWVudCB1cGRhdGVTdHlsZXMoKSBtZXRob2Qgb2YgUG9sZW1lciBlbGVtZW50c1xuICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZVN1YnRyZWUoLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovKGVsZW1lbnQpLCBzdHlsZXMpO1xuICB9XG5cbiAgaWYgKCF1cGRhdGVNZXRhKSByZXR1cm47XG5cbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT10aGVtZS1jb2xvcl0nKTtcbiAgaWYgKG1ldGEpIHtcbiAgICBpZiAoIW1ldGEuaGFzQXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKSkge1xuICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcsIG1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpO1xuICAgIH1cbiAgICBjb25zdCB0aGVtZUNvbG9yID0gc3R5bGVzWyctLXByaW1hcnktY29sb3InXSB8fCBtZXRhLmdldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50Jyk7XG4gICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB0aGVtZUNvbG9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBVcGRhdGUgcm9vdCdzIGNoaWxkIGVsZW1lbnQgdG8gYmUgbmV3RWxlbWVudFRhZyByZXBsYWNpbmcgYW5vdGhlciBleGlzdGluZyBjaGlsZCBpZiBhbnkuXG4gKiBDb3B5IGF0dHJpYnV0ZXMgaW50byB0aGUgY2hpbGQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pY0NvbnRlbnRVcGRhdGVyKHJvb3QsIG5ld0VsZW1lbnRUYWcsIGF0dHJpYnV0ZXMpIHtcbiAgY29uc3Qgcm9vdEVsID0gcm9vdDtcbiAgbGV0IGN1c3RvbUVsO1xuXG4gIGlmIChyb290RWwubGFzdENoaWxkICYmIHJvb3RFbC5sYXN0Q2hpbGQudGFnTmFtZSA9PT0gbmV3RWxlbWVudFRhZykge1xuICAgIGN1c3RvbUVsID0gcm9vdEVsLmxhc3RDaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBpZiAocm9vdEVsLmxhc3RDaGlsZCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKHJvb3RFbC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBDcmVhdGluZyBhbiBlbGVtZW50IHdpdGggdXBwZXIgY2FzZSB3b3JrcyBmaW5lIGluIENocm9tZSwgYnV0IGluIEZGIGl0IGRvZXNuJ3QgaW1tZWRpYXRlbHlcbiAgICAvLyBiZWNvbWUgYSBkZWZpbmVkIEN1c3RvbSBFbGVtZW50LiBQb2x5bWVyIGRvZXMgdGhhdCBpbiBzb21lIGxhdGVyIHBhc3MuXG4gICAgY3VzdG9tRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5ld0VsZW1lbnRUYWcudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwuc2V0UHJvcGVydGllcykge1xuICAgIGN1c3RvbUVsLnNldFByb3BlcnRpZXMoYXR0cmlidXRlcyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgY3VzdG9tIGVsZW1lbnQgZGVmaW5pdGlvbiB3YXNuJ3QgbG9hZGVkIHlldCAtIHNldFByb3BlcnRpZXMgd291bGQgYmVcbiAgICAvLyBtaXNzaW5nLCBidXQgbm8gaGFybSBpbiBzZXR0aW5nIGF0dHJpYnV0ZXMgb25lLWJ5LW9uZSB0aGVuLlxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY3VzdG9tRWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGN1c3RvbUVsKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbikge1xuICBjb25zdCBzZXJ2aWNlcyA9IGhhc3MuY29uZmlnLnNlcnZpY2VzW2RvbWFpbl07XG4gIGlmICghc2VydmljZXMpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKGRvbWFpbiA9PT0gJ2xvY2snKSB7XG4gICAgcmV0dXJuICdsb2NrJyBpbiBzZXJ2aWNlcztcbiAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjb3ZlcicpIHtcbiAgICByZXR1cm4gJ29wZW5fY292ZXInIGluIHNlcnZpY2VzO1xuICB9XG4gIHJldHVybiAndHVybl9vbicgaW4gc2VydmljZXM7XG59XG4iLCJpbXBvcnQgY2FuVG9nZ2xlRG9tYWluIGZyb20gJy4vY2FuX3RvZ2dsZV9kb21haW4uanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopIHtcbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgaWYgKGRvbWFpbiA9PT0gJ2dyb3VwJykge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gJ29uJyB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gJ29mZic7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gJ2NsaW1hdGUnKSB7XG4gICAgcmV0dXJuICEhKChzdGF0ZU9iai5hdHRyaWJ1dGVzIHx8IHt9KS5zdXBwb3J0ZWRfZmVhdHVyZXMgJiA0MDk2KTtcbiAgfVxuXG4gIHJldHVybiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVEb21haW4oZW50aXR5SWQpIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cigwLCBlbnRpdHlJZC5pbmRleE9mKCcuJykpO1xufVxuIiwiaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSAnLi9jb21wdXRlX2RvbWFpbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikge1xuICBpZiAoIXN0YXRlT2JqLl9kb21haW4pIHtcbiAgICBzdGF0ZU9iai5fZG9tYWluID0gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlT2JqLl9kb21haW47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBncm91cCkge1xuICBjb25zdCByZXN1bHQgPSB7fTtcblxuICBncm91cC5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHJlc3VsdFtlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfZG9tYWluLmpzJztcbmltcG9ydCBnZXRHcm91cEVudGl0aWVzIGZyb20gJy4vZ2V0X2dyb3VwX2VudGl0aWVzLmpzJztcblxuLy8gUmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBlbnRpdGllcyB0aGF0IHRoZSB2aWV3IHdpbGwgc2hvd1xuLy8gaW5jbHVkaW5nIGVtYmVkZGVkIGdyb3Vwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdFbnRpdGllcyhlbnRpdGllcywgdmlldykge1xuICBjb25zdCB2aWV3RW50aXRpZXMgPSB7fTtcblxuICB2aWV3LmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSAmJiAhZW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICB2aWV3RW50aXRpZXNbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG5cbiAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRW50aXRpZXMgPSBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBlbnRpdHkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwRW50aXRpZXMpLmZvckVhY2goKGdyRW50aXR5SWQpID0+IHtcbiAgICAgICAgICBjb25zdCBnckVudGl0eSA9IGdyb3VwRW50aXRpZXNbZ3JFbnRpdHlJZF07XG5cbiAgICAgICAgICBpZiAoIWdyRW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICAgICAgICB2aWV3RW50aXRpZXNbZ3JFbnRpdHlJZF0gPSBnckVudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdFbnRpdGllcztcbn1cbiIsImltcG9ydCBjYW5Ub2dnbGVTdGF0ZSBmcm9tICcuL2Nhbl90b2dnbGVfc3RhdGUuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCB7IERPTUFJTlNfV0lUSF9DQVJEIH0gZnJvbSAnLi4vY29uc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKSB7XG4gIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgIHJldHVybiAnZGlzcGxheSc7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfSBlbHNlIGlmIChjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikgJiZcbiAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2wgIT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuICd0b2dnbGUnO1xuICB9XG4gIHJldHVybiAnZGlzcGxheSc7XG59XG4iLCJjb25zdCBoYXNzQXR0cmlidXRlVXRpbCA9IHt9O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgJ2JhdHRlcnknLFxuICAgICdjb2xkJyxcbiAgICAnY29ubmVjdGl2aXR5JyxcbiAgICAnZG9vcicsXG4gICAgJ2dhcmFnZV9kb29yJyxcbiAgICAnZ2FzJyxcbiAgICAnaGVhdCcsXG4gICAgJ2xpZ2h0JyxcbiAgICAnbG9jaycsXG4gICAgJ21vaXN0dXJlJyxcbiAgICAnbW90aW9uJyxcbiAgICAnbW92aW5nJyxcbiAgICAnb2NjdXBhbmN5JyxcbiAgICAnb3BlbmluZycsXG4gICAgJ3BsdWcnLFxuICAgICdwb3dlcicsXG4gICAgJ3ByZXNlbmNlJyxcbiAgICAncHJvYmxlbScsXG4gICAgJ3NhZmV0eScsXG4gICAgJ3Ntb2tlJyxcbiAgICAnc291bmQnLFxuICAgICd2aWJyYXRpb24nLFxuICAgICd3aW5kb3cnXG4gIF0sXG4gIGNvdmVyOiBbJ2dhcmFnZSddLFxuICBzZW5zb3I6IFtcbiAgICAnYmF0dGVyeScsXG4gICAgJ2h1bWlkaXR5JyxcbiAgICAnaWxsdW1pbmFuY2UnLFxuICAgICd0ZW1wZXJhdHVyZSdcbiAgXSxcbn07XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9ICdqc29uJztcbmhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFID0gJ2tleS12YWx1ZSc7XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlRZUEVfVE9fVEFHID0ge1xuICBzdHJpbmc6ICdoYS1jdXN0b21pemUtc3RyaW5nJyxcbiAganNvbjogJ2hhLWN1c3RvbWl6ZS1zdHJpbmcnLFxuICBpY29uOiAnaGEtY3VzdG9taXplLWljb24nLFxuICBib29sZWFuOiAnaGEtY3VzdG9taXplLWJvb2xlYW4nLFxuICBhcnJheTogJ2hhLWN1c3RvbWl6ZS1hcnJheScsXG4gICdrZXktdmFsdWUnOiAnaGEtY3VzdG9taXplLWtleS12YWx1ZScsXG59O1xuXG4vLyBBdHRyaWJ1dGVzIGhlcmUgc2VydmUgZHVhbCBwdXJwb3NlOlxuLy8gMSkgQW55IGtleSBvZiB0aGlzIG9iamVjdCB3b24ndCBiZSBzaG93biBpbiBtb3JlLWluZm8gd2luZG93LlxuLy8gMikgQW55IGtleSB3aGljaCBoYXMgdmFsdWUgb3RoZXIgdGhhbiB1bmRlZmluZWQgd2lsbCBhcHBlYXIgaW4gY3VzdG9taXphdGlvblxuLy8gICAgY29uZmlnIGFjY29yZGluZyB0byBpdHMgdmFsdWUuXG5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID1cbiAgaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyB8fCB7XG4gICAgZW50aXR5X3BpY3R1cmU6IHVuZGVmaW5lZCxcbiAgICBmcmllbmRseV9uYW1lOiB7IHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ05hbWUnIH0sXG4gICAgaWNvbjogeyB0eXBlOiAnaWNvbicgfSxcbiAgICBlbXVsYXRlZF9odWU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRvbWFpbnM6IFsnZW11bGF0ZWRfaHVlJ11cbiAgICB9LFxuICAgIGVtdWxhdGVkX2h1ZV9uYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRvbWFpbnM6IFsnZW11bGF0ZWRfaHVlJ11cbiAgICB9LFxuICAgIGhhYXNrYV9oaWRkZW46IHVuZGVmaW5lZCxcbiAgICBoYWFza2FfbmFtZTogdW5kZWZpbmVkLFxuICAgIGhvbWVicmlkZ2VfaGlkZGVuOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgIGhvbWVicmlkZ2VfbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHN1cHBvcnRlZF9mZWF0dXJlczogdW5kZWZpbmVkLFxuICAgIGF0dHJpYnV0aW9uOiB1bmRlZmluZWQsXG4gICAgY3VzdG9tX3VpX21vcmVfaW5mbzogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgZGV2aWNlX2NsYXNzOiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgb3B0aW9uczogaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGV2aWNlIGNsYXNzJyxcbiAgICAgIGRvbWFpbnM6IFsnYmluYXJ5X3NlbnNvcicsICdjb3ZlcicsICdzZW5zb3InXVxuICAgIH0sXG4gICAgaGlkZGVuOiB7IHR5cGU6ICdib29sZWFuJywgZGVzY3JpcHRpb246ICdIaWRlIGZyb20gVUknIH0sXG4gICAgYXNzdW1lZF9zdGF0ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZG9tYWluczogWydzd2l0Y2gnLCAnbGlnaHQnLCAnY292ZXInLCAnY2xpbWF0ZScsICdmYW4nLCAnZ3JvdXAnXVxuICAgIH0sXG4gICAgaW5pdGlhbF9zdGF0ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkb21haW5zOiBbJ2F1dG9tYXRpb24nXVxuICAgIH0sXG4gICAgdW5pdF9vZl9tZWFzdXJlbWVudDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBoYXNzQXR0cmlidXRlVXRpbDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbndpbmRvdy5KU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gZnVuY3Rpb24ocHJvcCkgeyByZXR1cm4gcHJvcDsgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc3RhdGljIHN0cmluZyB2YWx1ZSB3aGljaCBjYW4gYmUgdXNlZCB0byBmaWx0ZXJcbiAqIHN0cmluZ3MgYnkgYXNzZXRpbmcgdGhhdCB0aGV5IGhhdmUgYmVlbiBjcmVhdGVkIHZpYSB0aGlzIGNsYXNzLiBUaGVcbiAqIGB2YWx1ZWAgcHJvcGVydHkgcmV0dXJucyB0aGUgc3RyaW5nIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cbmNsYXNzIExpdGVyYWxTdHJpbmcge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB0aGlzLnZhbHVlID0gc3RyaW5nLnRvU3RyaW5nKCk7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gTGl0ZXJhbFN0cmluZyBzdHJpbmcgdmFsdWVcbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gbGl0ZXJhbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTGl0ZXJhbFN0cmluZ30gKi8odmFsdWUpLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi1saXRlcmFsIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbExpdGVyYWwgZnVuY3Rpb246ICR7dmFsdWV9YFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBodG1sVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50IH0gKi8odmFsdWUpLmlubmVySFRNTDtcbiAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gbGl0ZXJhbFZhbHVlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tdGVtcGxhdGUgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sIGZ1bmN0aW9uOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbi8qKlxuICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyB0aGF0IGNyZWF0ZXMgYW4gSFRNTCA8dGVtcGxhdGU+IGVsZW1lbnQgZnJvbSB0aGVcbiAqIGNvbnRlbnRzIG9mIHRoZSBzdHJpbmcuXG4gKlxuICogVGhpcyBhbGxvd3MgeW91IHRvIHdyaXRlIGEgUG9seW1lciBUZW1wbGF0ZSBpbiBKYXZhU2NyaXB0LlxuICpcbiAqIFRlbXBsYXRlcyBjYW4gYmUgY29tcG9zZWQgYnkgaW50ZXJwb2xhdGluZyBgSFRNTFRlbXBsYXRlRWxlbWVudGBzIGluXG4gKiBleHByZXNzaW9ucyBpbiB0aGUgSmF2YVNjcmlwdCB0ZW1wbGF0ZSBsaXRlcmFsLiBUaGUgbmVzdGVkIHRlbXBsYXRlJ3NcbiAqIGBpbm5lckhUTUxgIGlzIGluY2x1ZGVkIGluIHRoZSBjb250YWluaW5nIHRlbXBsYXRlLiAgVGhlIG9ubHkgb3RoZXJcbiAqIHZhbHVlcyBhbGxvd2VkIGluIGV4cHJlc3Npb25zIGFyZSB0aG9zZSByZXR1cm5lZCBmcm9tIGBodG1sTGl0ZXJhbGBcbiAqIHdoaWNoIGVuc3VyZXMgb25seSBsaXRlcmFsIHZhbHVlcyBmcm9tIEpTIHNvdXJjZSBldmVyIHJlYWNoIHRoZSBIVE1MLCB0b1xuICogZ3VhcmQgYWdhaW5zdCBYU1Mgcmlza3MuXG4gKlxuICogQWxsIG90aGVyIHZhbHVlcyBhcmUgZGlzYWxsb3dlZCBpbiBleHByZXNzaW9ucyB0byBoZWxwIHByZXZlbnQgWFNTXG4gKiBhdHRhY2tzOyBob3dldmVyLCBgaHRtbExpdGVyYWxgIGNhbiBiZSB1c2VkIHRvIGNvbXBvc2Ugc3RhdGljXG4gKiBzdHJpbmcgdmFsdWVzIGludG8gdGVtcGxhdGVzLiBUaGlzIGlzIHVzZWZ1bCB0byBjb21wb3NlIHN0cmluZ3MgaW50b1xuICogcGxhY2VzIHRoYXQgZG8gbm90IGFjY2VwdCBodG1sLCBsaWtlIHRoZSBjc3MgdGV4dCBvZiBhIGBzdHlsZWBcbiAqIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+Omhvc3R7IGNvbnRlbnQ6XCIuLi5cIiB9PC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHt0aGlzLnBhcnRpYWxUZW1wbGF0ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgcGFydGlhbFRlbXBsYXRlKCkgeyByZXR1cm4gaHRtbGA8c3Bhbj5QYXJ0aWFsITwvc3Bhbj5gOyB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gQ29uc3RydWN0ZWQgSFRNTFRlbXBsYXRlRWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IGZ1bmN0aW9uIGh0bWwoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gKi8oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgaHRtbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbi8qKlxuICogQW4gaHRtbCBsaXRlcmFsIHRhZyB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYGh0bWxgIHRvIGNvbXBvc2UuXG4gKiBhIGxpdGVyYWwgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPlxuICogICAgICAgICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAqICAgICAgICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZSgpfVxuICogICAgICAgICA8L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3N0YXRpY1ZhbHVlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBzdHlsZVRlbXBsYXRlKCkge1xuICogICAgICAgIHJldHVybiBodG1sTGl0ZXJhbGAuc2hhZG93ZWQgeyBiYWNrZ3JvdW5kOiBncmF5OyB9YDtcbiAqICAgICB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshTGl0ZXJhbFN0cmluZ30gQ29uc3RydWN0ZWQgbGl0ZXJhbCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWxMaXRlcmFsID0gZnVuY3Rpb24oc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIHJldHVybiBuZXcgTGl0ZXJhbFN0cmluZyh2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGxpdGVyYWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pKTtcbn07XG4iLCJpbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBDdWlCYXNlRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopIHtcbiAgICBsZXQgZXh0cmFzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9kYXRhX3RlbXBsYXRlO1xuICAgIGlmIChleHRyYXMpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYXMpKSB7XG4gICAgICAgIGV4dHJhcyA9IFtleHRyYXNdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhcy5tYXAoZXh0cmEgPT4gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgZXh0cmEsXG4gICAgICAgIGhhc3MsXG4gICAgICAgIGhhc3Muc3RhdGVzLFxuICAgICAgICBzdGF0ZU9iaixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgICAgLyogYXR0cmlidXRlPSAqLyB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlT2JqLnN0YXRlLFxuICAgICAgKSkuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQgIT09IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSkge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGV4dHJhLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQ7XG4gIH1cblxuICBoYXNFeHRyYShleHRyYSkge1xuICAgIHJldHVybiBleHRyYS5sZW5ndGggPiAwO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDdWlCYXNlRWxlbWVudDtcbiIsImltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgRHluYW1pY0VsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBlbGVtZW50TmFtZTogU3RyaW5nLFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ29ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKScsXG4gICAgXTtcbiAgfVxuXG4gIG9ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKSB7XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgIGVsZW1lbnROYW1lID8gZWxlbWVudE5hbWUudG9VcHBlckNhc2UoKSA6ICdESVYnLFxuICAgICAgeyBoYXNzLCBzdGF0ZU9iaiwgaW5EaWFsb2cgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy1lbGVtZW50JywgRHluYW1pY0VsZW1lbnQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcblxuaW1wb3J0ICcuL2R5bmFtaWMtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBEeW5hbWljV2l0aEV4dHJhIGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1jYXJkLWRpc3BsYXknKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5jb250cm9sLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IC00cHggLTE2cHggLTRweCAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGhhLXN0YXRlLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAgIGR5bmFtaWMtZWxlbWVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgICNvdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgI2xvY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICB9XG4gICAgICAjbG9jay5oYS1jb3Zlci1jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAuZXh0cmEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1zaXplOiAzNnB4O1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZTogMS4yZW07XG4gICAgICB9XG4gICAgICAuc3RhdGUge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgY2xhc3MkPSdbW2V4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKV1dIGhvcml6b250YWwgbGF5b3V0Jz5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tleHRyYU9ialZpc2libGVdXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCdcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPSdbW2V4dHJhT2JqXV0nXG4gICAgICAgICAgICAgICAgICBvbi1kb20tY2hhbmdlPSdleHRyYURvbUNoYW5nZWQnPlxuICAgICAgICAgIDxoYS1zdGF0ZS1sYWJlbC1iYWRnZSBoYXNzPSdbW2hhc3NdXScgc3RhdGU9J1tbaXRlbV1dJz48L2hhLXN0YXRlLWxhYmVsLWJhZGdlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkeW5hbWljLWVsZW1lbnRcbiAgICAgICAgICAgICAgICBjbGFzcz0nZmxleCdcbiAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgICAgIGVsZW1lbnQtbmFtZT0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDwvZHluYW1pYy1lbGVtZW50PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2lzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlcIiBvbi1jbGljaz0nY2xpY2tIYW5kbGVyJz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9ja11dJz5cbiAgICAgICAgICAgICAgICAgIDxpcm9uLWljb24gaWQ9XCJsb2NrXCIgY2xhc3MkPVwiW1tjb250cm9sRWxlbWVudF1dXCIgaWNvbj1cIm1kaTpsb2NrLW91dGxpbmVcIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdGUnPltbY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICBleHRyYU9iajoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIF9hdHRhY2hlZCknLFxuICAgICAgfSxcbiAgICAgIF9hdHRhY2hlZDogQm9vbGVhbixcbiAgICAgIGV4dHJhT2JqVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2F0dGFjaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBhdHRhY2hlZCkge1xuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZSB8fCAhYXR0YWNoZWQpIHJldHVybiBbXTtcbiAgICBsZXQgZXh0cmFCYWRnZXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYUJhZGdlcykpIHtcbiAgICAgIGV4dHJhQmFkZ2VzID0gW2V4dHJhQmFkZ2VzXTtcbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhQmFkZ2VzLm1hcCgoZXh0cmFCYWRnZSkgPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoZXh0cmFCYWRnZS5lbnRpdHlfaWQgJiYgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdKSB7XG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICB0aGlzLCBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0sIHRoaXMuaW5EaWFsb2csXG4gICAgICAgICAgLyogYWxsb3dIaWRkZW49ICovZmFsc2UpKTtcbiAgICAgIH0gZWxzZSBpZiAoZXh0cmFCYWRnZS5hdHRyaWJ1dGUgJiZcbiAgICAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgc3RhdGU6IFN0cmluZyhzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSksXG4gICAgICAgICAgX2RvbWFpbjogJ25vbmUnLFxuICAgICAgICAgIGVudGl0eV9pZDogbnVsbCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IGV4dHJhQmFkZ2UudW5pdCB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICAgICAgbGV0IGJsYWNrbGlzdCA9IGV4dHJhQmFkZ2UuYmxhY2tsaXN0X3N0YXRlcztcbiAgICAgIGlmIChibGFja2xpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmxhY2tsaXN0KSkge1xuICAgICAgICAgIGJsYWNrbGlzdCA9IFtibGFja2xpc3RdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChibGFja2xpc3Quc29tZSh2ID0+IFJlZ0V4cCh2KS50ZXN0KHJlc3VsdC5zdGF0ZS50b1N0cmluZygpKSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0Ll9lbnRpdHlEaXNwbGF5ID0gJyc7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pLmZpbHRlcihleHRyYUJhZGdlID0+IGV4dHJhQmFkZ2UgIT0gbnVsbCk7XG4gIH1cblxuICBjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZyB8fCAhZXh0cmFPYmopIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZXh0cmFPYmoubGVuZ3RoICE9PSAwO1xuICB9XG5cbiAgZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpIHtcbiAgICByZXR1cm4gZXh0cmFPYmpWaXNpYmxlID8gJ2V4dHJhJyA6ICcnO1xuICB9XG5cbiAgX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhpZGVfY29udHJvbDtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopIHtcbiAgICAvLyBoYUxvY2FsaXplIHJlbW92ZWQgaW4gMC42MVxuICAgIHJldHVybiBzdXBlci5jb21wdXRlU3RhdGVEaXNwbGF5KHRoaXMuaGFMb2NhbGl6ZSB8fCB0aGlzLmxvY2FsaXplLCBzdGF0ZU9iaik7XG4gIH1cblxuICBpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHMgfHxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jaztcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBjb25zdCBsb2NrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2NrJyk7XG4gICAgaWYgKGxvY2spIHtcbiAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vcGVuLW91dGxpbmUnO1xuICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJzAuMSc7XG4gICAgfVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vdXRsaW5lJztcbiAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICB9XG4gICAgfSwgNTAwMCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFwcGx5VGhlbWVzKGhhc3MsIGVsZW1lbnQsIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCc7XG4gICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICBlbGVtZW50LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgZXh0cmFEb21DaGFuZ2VkKCkge1xuICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpXG4gICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICB0aGlzLmFwcGx5VGhlbWVzKHRoaXMuaGFzcywgZWxlbSwgZWxlbS5zdGF0ZSk7XG4gICAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLXdpdGgtZXh0cmEnLCBEeW5hbWljV2l0aEV4dHJhKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgRXZlbnRzTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2V2ZW50cy1taXhpbi5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbVVpIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lci5FbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPjwvc3R5bGU+XG4gICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPSdtZGk6YXJyb3ctbGVmdCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdfYmFja0hhbmRsZXInXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPGRpdiBtYWluLXRpdGxlPkN1c3RvbSBVSSBzZXR0aW5nczwvZGl2PlxuICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT0nW1tpc1dpZGVdXSc+XG4gICAgICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9J0RldmljZSBuYW1lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgU2V0IGRldmljZSBuYW1lIHNvIHRoYXQgeW91IGNhbiByZWZlcmVuY2UgaXQgaW4gcGVyLWRldmljZSBzZXR0aW5nc1xuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPSdOYW1lJ1xuICAgICAgICAgICAgICB2YWx1ZT0ne3tuYW1lfX0nXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wYXBlci1jYXJkPlxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnbmFtZUNoYW5nZWQnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLm5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICB9XG5cbiAgbmFtZUNoYW5nZWQobmFtZSkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5zZXROYW1lKG5hbWUpO1xuICB9XG5cbiAgX2JhY2tIYW5kbGVyKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB0aGlzLmZpcmUoJ2xvY2F0aW9uLWNoYW5nZWQnKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS1jb25maWctY3VzdG9tLXVpJywgSGFDb25maWdDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhVGhlbWVkU2xpZGVyIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0taGEtdGhlbWVkLXNsaWRlci1tYXJnaW4sIGluaXRpYWwpO1xuICAgICAgfVxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXItcGluLXN0YXJ0LWNvbG9yOiAgdmFyKC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbi5pcy1vbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXNsaWRlciB7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWhhLXBhcGVyLXNsaWRlci13aWR0aCwgMjAwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItc2xpZGVyXG4gICAgICAgICBtaW49J1tbX3RoZW1lZE1pbl1dJ1xuICAgICAgICAgbWF4PSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1heFwiLCBtYXgpXV0nXG4gICAgICAgICBwaW49J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwicGluXCIsIHBpbildXSdcbiAgICAgICAgIGNsYXNzJD0nW1tjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIF90aGVtZWRNaW4pXV0nIHZhbHVlPSdbW3ZhbHVlXV0nXG4gICAgICAgICBvbi1jaGFuZ2U9J3ZhbHVlQ2hhbmdlZCc+XG4gICAgPC9wYXBlci1zbGlkZXI+XG4gICAgYDtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbiA9ICF0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoaXMudGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbik7XG4gICAgdGhpcy5jb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoaXMudGhlbWUsIHRoaXMuZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgIH0sXG4gICAgICBwaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlzT246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICB0aGVtZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX3RoZW1lZE1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWluXCIsIG1pbiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpJyxcbiAgICBdO1xuICB9XG5cbiAgY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKSB7XG4gICAgdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkID0gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZShcbiAgICAgIHRoZW1lLCAncmVwb3J0X3doZW5fbm90X2NoYW5nZWQnLCAhZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBhdHRyLCBkZWYpIHtcbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGlmIChhdHRyIGluIHRoZW1lKSB7XG4gICAgICAgIHJldHVybiB0aGVtZVthdHRyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgdGhlbWVkTWluKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChpc09uKSB7XG4gICAgICByZXN1bHQgKz0gJ2lzLW9uICc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pIHx8IHRoZW1lZE1pbiA9PT0gMCkge1xuICAgICAgLy8gSWYgb2ZmV2hlbk1pbiBpcyBlbmFibGVkIGRvbid0IGN1c3RvbWl6ZS5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3Jlc3VsdH1kaXNhYmxlLW9mZi13aGVuLW1pbmA7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCAmJiB0aGlzLnZhbHVlID09PSBldi50YXJnZXQudmFsdWUpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLXRoZW1lZC1zbGlkZXInLCBIYVRoZW1lZFNsaWRlcik7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcbmltcG9ydCBzdGF0ZUNhcmRUeXBlIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfY2FyZF90eXBlLmpzJztcblxuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyc7XG5cbmNvbnN0IFNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTID0gWydjb25maWd1cmF0b3InXTtcbmNvbnN0IERPTUFJTl9UT19TTElERVJfU1VQUE9SVCA9IHtcbiAgbGlnaHQ6IDEsIC8vIFNVUFBPUlRfQlJJR0hUTkVTU1xuICBjb3ZlcjogNCwgLy8gU1VQUE9SVF9TRVRfUE9TSVRJT05cbiAgY2xpbWF0ZTogMSwgLy8gU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbn07XG5jb25zdCBUWVBFX1RPX0NPTlRST0wgPSB7XG4gIHRvZ2dsZTogJ2hhLWVudGl0eS10b2dnbGUnLFxuICBkaXNwbGF5OiAnJyxcbiAgY292ZXI6ICdoYS1jb3Zlci1jb250cm9scycsXG59O1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZEN1c3RvbVVpIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiknLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gJ0RJVicgJiZcbiAgICAgICAgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykgfHwgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2hpbGQtY2FyZCcpKSkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAvLyBTaW5jZSB0aGlzIGRvZXNuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIC0gbm8gbmVlZCB0byBjbGVhciBpdC5cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLCAndmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCBpbmhlcml0KScpO1xuXG4gICAgICAvLyBQb2x5ZmlsbCAndXBkYXRlU3R5bGVzJy5cbiAgICAgIGlmICghY29udGFpbmVyLnVwZGF0ZVN0eWxlcykge1xuICAgICAgICBjb250YWluZXIudXBkYXRlU3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBzdHlsZXNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VkKHRoaXMuaGFzcywgdGhpcy5pbkRpYWxvZywgdGhpcy5zdGF0ZU9iaik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICB0aGlzLl9jb250YWluZXIsIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgJ2RlZmF1bHQnKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBiYWRnZU1vZGUoaGFzcywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIGNvbnN0IHN0YXRlcyA9IFtdO1xuICAgIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbaWRdO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBJRCAke2lkfSBpbiBncm91cCAke3N0YXRlT2JqLmVudGl0eV9pZH1gKTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0IHx8XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0LmluY2x1ZGVzKHN0YXRlLmVudGl0eV9pZCkpIHtcbiAgICAgICAgICBzdGF0ZXMucHVzaCh3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBzdGF0ZSwgZmFsc2UgLyogaW5EaWFsb2cgKi8sIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZU9iaik7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykpIHtcbiAgICAgICAgICBwYXJhbXMubWFyZ2luID0gJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLW1hcmdpbiwgMCknO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAnSEEtQkFER0VTLUNBUkQnLFxuICAgICAgeyBoYXNzLCBzdGF0ZXMgfSk7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIHdpZHRoOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtd2lkdGgsIGluaXRpYWwpJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtdGV4dC1hbGlnbiwgaW5pdGlhbCknLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubGFzdENoaWxkLnN0eWxlLmZvbnRTaXplID0gJzg1JSc7XG5cbiAgICAvLyBTaW5jZSB0aGlzIHZhcmlhYmxlIG9ubHkgYWZmZWN0cyBiYWRnZXMgbW9kZSAtIG5vIG5lZWQgdG8gY2xlYW4gaXQgdXAuXG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oYS1zdGF0ZS1sYWJlbC1iYWRnZS1tYXJnaW4tYm90dG9tJywgJzAnKTtcbiAgfVxuXG4gIGNsZWFuQmFkZ2VTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnIH0pO1xuICB9XG5cbiAgYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopIHtcbiAgICBsZXQgdGhlbWVUYXJnZXQgPSB0aGlzO1xuICAgIGxldCB0aGVtZU5hbWUgPSAnZGVmYXVsdCc7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhlbWVUYXJnZXQgPSB0aGlzLl9jb250YWluZXI7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICB0aGVtZU5hbWUgPSBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lO1xuICAgIH1cbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgIHRoZW1lVGFyZ2V0LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgbWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSB7XG4gICAgaWYgKCFtb2RpZmllZE9iaikge1xuICAgICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNsaWRlckVsaWdpYmxlXyhkb21haW4sIG9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiZcbiAgICAgIChET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmIG9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykgJiZcbiAgICAgIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAmJiBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgIT09ICduby1zbGlkZXInO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MgfHwgIXRoaXMuX2lzQXR0YWNoZWQpIHJldHVybjtcbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICAgIGNvbnN0IG1vZGlmaWVkT2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgdGhpcywgc3RhdGVPYmosIGluRGlhbG9nLCB0cnVlIC8qIGFsbG93SGlkZGVuICovKTtcblxuICAgIGlmICh0aGlzLm1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikpIHJldHVybjtcblxuICAgIHRoaXMuYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopO1xuXG4gICAgaWYgKCFpbkRpYWxvZyAmJiBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSA9PT0gJ2JhZGdlcycpIHtcbiAgICAgIHRoaXMuYmFkZ2VNb2RlKGhhc3MsIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfVxuICB9XG5cbiAgcmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgdGhpcy5jbGVhbkJhZGdlU3R5bGUoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGhhc3MsXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIGluRGlhbG9nLFxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxTdGF0ZUNhcmRUeXBlID0gc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaik7XG4gICAgbGV0IGN1c3RvbVN0YXRlQ2FyZFR5cGU7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5O1xuXG4gICAgaWYgKGRvbWFpbiA9PT0gJ2xpZ2h0JyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gICAgICAgIHNlcnZpY2VNaW46ICd0dXJuX29mZicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICd0dXJuX29uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnYnJpZ2h0bmVzcycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY292ZXItY29udHJvbHMnLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ2Nsb3NlX2NvdmVyJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF9jb3Zlcl9wb3NpdGlvbicsXG4gICAgICAgIHNldFZhbHVlTmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnY3VycmVudF9wb3NpdGlvbicsXG4gICAgICAgIG5hbWVPbjogJ29wZW4nLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjbGltYXRlJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY2xpbWF0ZS1zdGF0ZScsXG4gICAgICAgIG1pbjogc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcCB8fCAtMTAwLFxuICAgICAgICBtYXg6IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXAgfHwgMjAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHZhbHVlTmFtZTogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgbmFtZU9uOiAnJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV07XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZCAmJlxuICAgICAgICAgICAgICAgIVNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTLmluY2x1ZGVzKG9yaWdpbmFsU3RhdGVDYXJkVHlwZSkpIHtcbiAgICAgIHBhcmFtcy5pbkRpYWxvZyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gJyc7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudDtcbiAgICB9XG5cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgKHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgfHwgY3VzdG9tU3RhdGVDYXJkVHlwZSB8fCBgU1RBVEUtQ0FSRC0ke29yaWdpbmFsU3RhdGVDYXJkVHlwZX1gKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcGFyYW1zKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLWN1c3RvbS11aScsIFN0YXRlQ2FyZEN1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuaW1wb3J0ICcuL2hhLXRoZW1lZC1zbGlkZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLnNlY29uZC1saW5lLCAuc3RhdGUtYW5kLXRvZ2dsZSwgLnN0YXRlLWluZm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1hbmQtdG9nZ2xlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc2Vjb25kLWxpbmUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kLWxpbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgIH1cbiAgICAgIC5zdHJldGNoIC5zZWNvbmQtbGluZSwgLnN0cmV0Y2ggaGEtdGhlbWVkLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWhhLXBhcGVyLXNsaWRlci13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWluZm8ge1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICBoYS10aGVtZWQtc2xpZGVyLCAudG9wLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAudG9wLXdyYXBwZXIuc3RyZXRjaCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcyQ9J2hvcml6b250YWwgbGF5b3V0IGZsZXggdG9wLXdyYXBwZXIgW1tfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpXV0nPlxuICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkIGZsZXgtYXV0byBzdGF0ZS1hbmQtdG9nZ2xlJz5cbiAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvIGZsZXgtYXV0bydcbiAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2JyZWFrU2xpZGVyXV0nIGNsYXNzPSdoaWRkZW4nPlxuICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc2hvd1NsaWRlcl1dJyByZXN0YW1wPlxuICAgICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBmbGV4LWF1dG8gZW5kLWp1c3RpZmllZCBzZWNvbmQtbGluZSc+XG4gICAgICAgICAgPGhhLXRoZW1lZC1zbGlkZXJcbiAgICAgICAgICAgIGlkPSdzbGlkZXInXG4gICAgICAgICAgICBtYXg9W1ttYXhdXVxuICAgICAgICAgICAgbWluPVtbbWluXV1cbiAgICAgICAgICAgIHRoZW1lPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuc2xpZGVyX3RoZW1lXV0nXG4gICAgICAgICAgICBpcy1vbj0nW1tpc09uKHN0YXRlT2JqLCBuYW1lT24pXV0nXG4gICAgICAgICAgICB2YWx1ZT0ne3tzbGlkZXJWYWx1ZX19J1xuICAgICAgICAgICAgZGlzYWJsZS1vZmYtd2hlbi1taW49J3t7ZGlzYWJsZU9mZldoZW5NaW59fSdcbiAgICAgICAgICAgIG9uLWNoYW5nZT0nc2xpZGVyQ2hhbmdlZCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdzdG9wUHJvcGFnYXRpb24nPlxuICAgICAgICAgIDwvaGEtdGhlbWVkLXNsaWRlcj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWJyZWFrU2xpZGVyXV0nPlxuICAgICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1pbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1heDogU3RyaW5nLFxuICAgICAgdmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICBzZXRWYWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIG5hbWVPbjogeyB0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb24nIH0sXG4gICAgICBtaW46IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMCB9LFxuICAgICAgbWF4OiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDI1NSB9LFxuXG4gICAgICBzbGlkZXJWYWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiBCb29sZWFuLFxuICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgc3RyZXRjaFNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYnJlYWtTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGhpZGVTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGxpbmVUb29Mb25nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBtaW5MaW5lQnJlYWs6IE51bWJlcixcbiAgICAgIG1heExpbmVCcmVhazogTnVtYmVyLFxuICAgICAgc2hvd1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX29uSXJvblJlc2l6ZSA9IHRoaXMuX29uSXJvblJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5faXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKScsXG4gICAgXTtcbiAgfVxuXG4gIF93YWl0Rm9yTGF5b3V0KCkge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0ZWQpIHJldHVybjtcbiAgICB0aGlzLl9zZXRNb2RlKCk7XG4gICAgaWYgKHRoaXMuX2ZyYW1lSWQpIHJldHVybjtcbiAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gZmFsc2U7XG4gICAgdGhpcy5fZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uSXJvblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldE1vZGUoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgaGlkZVNsaWRlcjogdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInICYmIHRoaXMubGluZVRvb0xvbmcsXG4gICAgICBicmVha1NsaWRlcjpcbiAgICAgICAgICAgKHRoaXMubW9kZSA9PT0gJ2JyZWFrLXNsaWRlcicgfHwgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSAmJlxuICAgICAgICAgICB0aGlzLmxpbmVUb29Mb25nLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLnNob3dTbGlkZXIpIHtcbiAgICAgIG9iai5icmVha1NsaWRlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICB9XG5cbiAgX29uSXJvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVhZHlUb0NvbXB1dGUpIHJldHVybjtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbm8tc2xpZGVyJykge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgaGlkZVNsaWRlcjogdHJ1ZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldkJyZWFrU2xpZGVyID0gdGhpcy5icmVha1NsaWRlcjtcbiAgICBjb25zdCBwcmV2SGlkZVNsaWRlciA9IHRoaXMuaGlkZVNsaWRlcjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuJDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPT09IDApIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPD0gdGhpcy5taW5MaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyV2lkdGggPj0gdGhpcy5tYXhMaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZIaWRlU2xpZGVyICYmIHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHVuaGlkZSB0aGUgc2xpZGVyIGluIG9yZGVyIHRvIHJlY2FsY3VsYXRlIGhlaWdodC5cbiAgICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgc3RhdGVIZWlnaHQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnN0YXRlLWluZm8nKS5jbGllbnRIZWlnaHQ7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gY29udGFpbmVySGVpZ2h0ID4gc3RhdGVIZWlnaHQgKiAxLjU7XG4gICAgICBpZiAodGhpcy5saW5lVG9vTG9uZykge1xuICAgICAgICB0aGlzLm1pbkxpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgfSBlbHNlIGlmICghcHJldkJyZWFrU2xpZGVyKSB7XG4gICAgICAgIHRoaXMubWF4TGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgfVxuXG4gIF9jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZS1saW5lJykge1xuICAgICAgcmV0dXJuICdub3dyYXAnO1xuICAgIH1cbiAgICBpZiAoc3RyZXRjaFNsaWRlciAmJiBsaW5lVG9vTG9uZykge1xuICAgICAgcmV0dXJuICdzdHJldGNoIHdyYXAnO1xuICAgIH1cbiAgICByZXR1cm4gJ3dyYXAnO1xuICB9XG5cbiAgX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKSB7XG4gICAgaWYgKGluRGlhbG9nIHx8IGhpZGVTbGlkZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBjb25zdCBwYXJhbSA9IHsgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9O1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm47XG4gICAgbGV0IHRhcmdldCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVyJyk7XG4gICAgaWYgKGV2LnRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAvLyBObyBTaGFkb3cgRE9NIC0gd2UgaGF2ZSBhY2Nlc3MgdG8gb3JpZ2luYWwgdGFyZ2V0LlxuICAgICAgKHsgdGFyZ2V0IH0gPSBldik7XG4gICAgfSBlbHNlIGlmIChldi5wYXRoKSB7XG4gICAgICBbdGFyZ2V0XSA9IGV2LnBhdGg7XG4gICAgfSBlbHNlIGlmIChldi5jb21wb3NlZFBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gMCB8fCAodmFsdWUgPD0gdGFyZ2V0Lm1pbiAmJiAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikpIHtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWluLCBwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtW3RoaXMuc2V0VmFsdWVOYW1lIHx8IHRoaXMudmFsdWVOYW1lXSA9IHZhbHVlO1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNYXgsIHBhcmFtKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgc2xpZGVyVmFsdWU6IHRoaXMuaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSA/IHN0YXRlT2JqLmF0dHJpYnV0ZXNbdmFsdWVOYW1lXSA6IDAsXG4gICAgfTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB7XG4gICAgICAgIG1pbkxpbmVCcmVhazogMCxcbiAgICAgICAgbWF4TGluZUJyZWFrOiA5OTksXG4gICAgICAgIGhpZGVTbGlkZXI6IGZhbHNlLFxuICAgICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgICAgbW9kZTogc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUsXG4gICAgICAgIHN0cmV0Y2hTbGlkZXI6ICEhc3RhdGVPYmouYXR0cmlidXRlcy5zdHJldGNoX3NsaWRlcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBpc09uKHN0YXRlT2JqLCBuYW1lT24pIHtcbiAgICByZXR1cm4gc3RhdGVPYmogJiYgKCFuYW1lT24gfHwgc3RhdGVPYmouc3RhdGUgPT09IG5hbWVPbik7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJywgU3RhdGVDYXJkV2l0aFNsaWRlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkJz5cbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYVxuICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJ1xuICAgICAgICAgIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz5cbiAgICAgIDwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIpO1xuIiwiLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuZXhwb3J0IGRlZmF1bHQgKHN1cGVyQ2xhc3MpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBFdmVudHNNaXhpbiBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAgICogICBwYXlsb2FkLlxuICAgICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICAqL1xuICAgIGZpcmUodHlwZSwgZGV0YWlsID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgICAgICBidWJibGVzOiBvcHRpb25zLmJ1YmJsZXMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IEJvb2xlYW4ob3B0aW9ucy5jYW5jZWxhYmxlKSxcbiAgICAgICAgY29tcG9zZWQ6IG9wdGlvbnMuY29tcG9zZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmNvbXBvc2VkLFxuICAgICAgfSk7XG4gICAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgICBjb25zdCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IHRoaXM7XG4gICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRzTWl4aW47XG59O1xuIiwiaW1wb3J0IGhhc3NBdHRyaWJ1dGVzVXRpbCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsLmpzJztcblxud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsIHx8IHt9O1xuY29uc3QgU1VQUE9SVEVEX1NMSURFUl9NT0RFUyA9IFtcbiAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG5dO1xuXG5jb25zdCBjdXN0b21VaUF0dHJpYnV0ZXMgPSB7XG4gIGdyb3VwOiB1bmRlZmluZWQsXG4gIGRldmljZTogdW5kZWZpbmVkLFxuICB0ZW1wbGF0ZXM6IHVuZGVmaW5lZCxcbiAgY29udHJvbF9lbGVtZW50OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIHN0YXRlX2NhcmRfbW9kZToge1xuICAgIHR5cGU6ICdhcnJheScsXG4gICAgb3B0aW9uczoge1xuICAgICAgbGlnaHQ6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNvdmVyOiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICBjbGltYXRlOiBTVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICAnKic6IFsnYmFkZ2VzJ10sXG4gICAgfSxcbiAgfSxcbiAgc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGJhZGdlc19saXN0OiB7IHR5cGU6ICdqc29uJyB9LFxuICBzaG93X2xhc3RfY2hhbmdlZDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaGlkZV9jb250cm9sOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBleHRyYV9kYXRhX3RlbXBsYXRlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGV4dHJhX2JhZGdlOiB7IHR5cGU6ICdqc29uJyB9LFxuICBzdHJldGNoX3NsaWRlcjogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgc2xpZGVyX3RoZW1lOiB7IHR5cGU6ICdqc29uJyB9LFxuICB0aGVtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICBjb25maXJtX2NvbnRyb2xzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jazogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaGlkZV9pbl9kZWZhdWx0X3ZpZXc6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG59O1xud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPSBoYXNzQXR0cmlidXRlc1V0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUztcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBoYXNzQXR0cmlidXRlc1V0aWwuVU5LTk9XTl9UWVBFO1xuT2JqZWN0LmFzc2lnbih3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgY3VzdG9tVWlBdHRyaWJ1dGVzKTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5pbXBvcnQgZ2V0Vmlld0VudGl0aWVzIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXMuanMnO1xuXG5pbXBvcnQgJy4uL2VsZW1lbnRzL2hhLWNvbmZpZy1jdXN0b20tdWkuanMnO1xuaW1wb3J0IFZFUlNJT04gZnJvbSAnLi92ZXJzaW9uLmpzJztcbmltcG9ydCAnLi9oYXNzLWF0dHJpYnV0ZS11dGlsLmpzJztcblxud2luZG93LmN1c3RvbVVJID0gd2luZG93LmN1c3RvbVVJIHx8IHtcbiAgU1VQUE9SVEVEX1NMSURFUl9NT0RFUzogW1xuICAgICdzaW5nbGUtbGluZScsICdicmVhay1zbGlkZXInLCAnYnJlYWstc2xpZGVyLXRvZ2dsZScsICdoaWRlLXNsaWRlcicsICduby1zbGlkZXInLFxuICBdLFxuXG4gIGRvbUhvc3QoZWxlbSkge1xuICAgIGlmIChlbGVtID09PSBkb2N1bWVudCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW0uZ2V0Um9vdE5vZGUoKTtcbiAgICByZXR1cm4gKHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSA/IC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpLmhvc3QgOiByb290O1xuICB9LFxuXG4gIGxpZ2h0T3JTaGFkb3coZWxlbSwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZWxlbS5zaGFkb3dSb290ID9cbiAgICAgIGVsZW0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6XG4gICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9LFxuXG4gIGdldEVsZW1lbnRIaWVyYXJjaHkocm9vdCwgaGllcmFyY2h5KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsZW0gPSBoaWVyYXJjaHkuc2hpZnQoKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhyb290LCBlbGVtKSwgaGllcmFyY2h5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH0sXG5cbiAgZ2V0Q29udGV4dChlbGVtKSB7XG4gICAgaWYgKGVsZW0uX2NvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbS5fY29udGV4dCA9IFtdO1xuICAgICAgZm9yIChsZXQgZWxlbWVudCA9IChlbGVtLnRhZ05hbWUgPT09ICdIQS1FTlRJVElFUy1DQVJEJyA/IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW0pIDogZWxlbSk7XG4gICAgICAgIGVsZW1lbnQ7IGVsZW1lbnQgPSB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtZW50KSkge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgIGNhc2UgJ0hBLUVOVElUSUVTLUNBUkQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ3JvdXBFbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5ncm91cEVudGl0eSA9PT0gZmFsc2UgJiYgZWxlbWVudC5zdGF0ZXMgJiYgZWxlbWVudC5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChgZ3JvdXAuJHtjb21wdXRlU3RhdGVEb21haW4oZWxlbWVudC5zdGF0ZXNbMF0pfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnTU9SRS1JTkZPLUdST1VQJzpcbiAgICAgICAgICBjYXNlICdTVEFURS1DQVJELUNPTlRFTlQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuc3RhdGVPYmouZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hBLUNBUkRTJzpcbiAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3JykgfHwgJ2RlZmF1bHRfdmlldycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtLl9jb250ZXh0LnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0uX2NvbnRleHQ7XG4gIH0sXG5cbiAgZmluZE1hdGNoKGtleSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuIG51bGw7XG4gICAgaWYgKG9wdGlvbnNba2V5XSkgcmV0dXJuIGtleTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykuZmluZChvcHRpb24gPT4ga2V5Lm1hdGNoKGBeJHtvcHRpb259JGApKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChuYW1lLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZVttYXRjaF0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHdpbmRvdy5jdXN0b21VSS5nZXRDb250ZXh0KGVsZW0pO1xuICAgIGlmICghY29udGV4dCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICBjb250ZXh0LmZvckVhY2goKGMpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2goYywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhdHRyaWJ1dGVzLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIF9zZXRLZWVwKG9iaiwgdmFsdWUpIHtcbiAgICBpZiAob2JqLl9jdWlfa2VlcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSBvYmouX2N1aV9rZWVwICYmIHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIWF0dHJpYnV0ZXMudGVtcGxhdGVzKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosIHRydWUpO1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBuZXdBdHRyaWJ1dGVzID0ge307XG4gICAgbGV0IGhhc0dsb2JhbCA9IGZhbHNlO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcy50ZW1wbGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBhdHRyaWJ1dGVzLnRlbXBsYXRlc1trZXldO1xuICAgICAgaWYgKHRlbXBsYXRlLm1hdGNoKC9cXGIoZW50aXRpZXN8aGFzcylcXGIvKSkge1xuICAgICAgICBoYXNHbG9iYWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICB0ZW1wbGF0ZSwgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcyxcbiAgICAgICAgKHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXMgJiYgc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlc1trZXldKSB8fFxuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldLFxuICAgICAgICBzdGF0ZU9iai51bnRlbXBsYXRlZF9zdGF0ZSB8fCBzdGF0ZU9iai5zdGF0ZSk7XG4gICAgICAvLyBJbiBjYXNlIG9mIG51bGwgZG9uJ3Qgc2V0IHRoZSB2YWx1ZS5cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgbmV3QXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICBpZiAoa2V5ID09PSAnc3RhdGUnKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouc3RhdGUpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdfc3RhdGVEaXNwbGF5Jykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXkpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gYXR0cmlidXRlc1trZXldKSB7XG4gICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgIWhhc0dsb2JhbCk7XG4gICAgaWYgKCFoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzID09PSBhdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBXZSBhcmUgb3BlcmF0aW5nIG9uIHJlYWwgYXR0cmlidXRlcy4gUmVwbGFjZSB0aGVtLlxuICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgbmV3QXR0cmlidXRlcyk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdzdGF0ZScpKSB7XG4gICAgICAgIGlmIChuZXdBdHRyaWJ1dGVzLnN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnN0YXRlID0gU3RyaW5nKG5ld0F0dHJpYnV0ZXMuc3RhdGUpO1xuICAgICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZSA9IHN0YXRlT2JqLnN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdfc3RhdGVEaXNwbGF5JykpIHtcbiAgICAgICAgcmVzdWx0Ll9zdGF0ZURpc3BsYXkgPSBuZXdBdHRyaWJ1dGVzLl9zdGF0ZURpc3BsYXk7XG4gICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkgPSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5O1xuICAgICAgfVxuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHJlc3VsdCwgIWhhc0dsb2JhbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBPcGVyYXRpbmcgb24gY29udGV4dC1hd2FyZSBhdHRyaWJ1dGVzLiBSZXR1cm4gc2hhbGxvdyBjb3B5IG9mIG9iamVjdC5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5ld1Jlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgc3RhdGVPYmouYXR0cmlidXRlcyk7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaik7XG5cbiAgICBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZXMob2JqKSB7XG4gICAgICBpZiAoIW9iaikgcmV0dXJuO1xuICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICAgICAgaGFzcywgc3RhdGVzLCBuZXdSZXN1bHQsIGF0dHJpYnV0ZXMpO1xuICAgICAgICBoYXNDaGFuZ2VzIHw9IChyZXN1bHQgIT09IG5ld1Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZGV2aWNlKTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZ3JvdXApO1xuICAgIH1cblxuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgIGlmIChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKSByZXR1cm4gbmV3UmVzdWx0O1xuICAgIGlmIChoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVPYmo7XG4gIH0sXG5cbiAgYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eV9pZDogc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3RhdGU6IHN0YXRlT2JqLnN0YXRlLFxuICAgICAgYXR0cmlidXRlczogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcywgYXR0cmlidXRlcyksXG4gICAgICB1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZU9iai5sYXN0X2NoYW5nZWQsXG4gICAgfTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdChlbGVtLCBzdGF0ZU9iaiwgaW5EaWFsb2csIGFsbG93SGlkZGVuKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgbGV0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIG9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBlbGVtLmhhc3MsIGVsZW0uaGFzcy5zdGF0ZXMsIG9iaiwgb2JqLmF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKG9iaiAhPT0gc3RhdGVPYmogJiYgb2JqLmF0dHJpYnV0ZXMuaGlkZGVuICYmIGFsbG93SGlkZGVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmaXhHcm91cFRpdGxlcygpIHtcbiAgICBjb25zdCBob21lQXNzaXN0YW50TWFpbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nXSk7XG4gICAgaWYgKGhvbWVBc3Npc3RhbnRNYWluID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzLCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYUNhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaG9tZUFzc2lzdGFudE1haW4sIFtcbiAgICAgICdwYXJ0aWFsLWNhcmRzJyxcbiAgICAgICdoYS1jYXJkc1t2aWV3LXZpc2libGVdJ10pO1xuICAgIGlmIChoYUNhcmRzID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhQ2FyZHMsICcubWFpbicpIHx8IGhhQ2FyZHMuJC5tYWluO1xuICAgIGNvbnN0IGNhcmRzID0gbWFpbi5xdWVyeVNlbGVjdG9yQWxsKCdoYS1lbnRpdGllcy1jYXJkJyk7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKGNhcmQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgIGNhcmQsXG4gICAgICAgICAgY2FyZC5ncm91cEVudGl0eSxcbiAgICAgICAgICBmYWxzZSAvKiBpbkRpYWxvZyAqLyxcbiAgICAgICAgICBmYWxzZSAvKiBhbGxvd0hpZGRlbiAqLyk7XG4gICAgICAgIGlmIChvYmogIT09IGNhcmQuZ3JvdXBFbnRpdHkgJiYgb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSkge1xuICAgICAgICAgIGNvbnN0IG5hbWVFbGVtID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coY2FyZCwgJy5uYW1lJyk7XG4gICAgICAgICAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgY29udHJvbENvbHVtbnMoY29sdW1ucykge1xuICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtY2FyZHMnXSk7XG4gICAgaWYgKHBhcnRpYWxDYXJkcyA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMuYmluZChudWxsLCBjb2x1bW5zKSxcbiAgICAgICAgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBhcnRpYWxDYXJkcy5tcWxzLmZvckVhY2goKG1xbCkgPT4ge1xuICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UpO1xuICAgIH0pO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzID0gY29sdW1ucy5tYXAoKHdpZHRoKSA9PiB7XG4gICAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt3aWR0aH1weClgKTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlKTtcbiAgICAgIHJldHVybiBtcWw7XG4gICAgfSk7XG4gICAgcGFydGlhbENhcmRzLmhhbmRsZVdpbmRvd0NoYW5nZSgpO1xuICB9LFxuXG4gIHVzZUN1c3RvbWl6ZXIoKSB7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBjb25zdCBjdXN0b21pemVyID0gbWFpbi5oYXNzLnN0YXRlc1snY3VzdG9taXplci5jdXN0b21pemVyJ107XG4gICAgaWYgKCFjdXN0b21pemVyKSByZXR1cm47XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcykge1xuICAgICAgaWYgKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCAmJiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykge1xuICAgICAgICBjdXN0b21pemVyLmF0dHJpYnV0ZXMuaGlkZV9hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBhdHRyKSkge1xuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNbYXR0cl0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlQ29uZmlnUGFuZWwoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY29uc3QgaGFQYW5lbENvbmZpZyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtcGFuZWwtcmVzb2x2ZXInLFxuICAgICAgJ2hhLXBhbmVsLWNvbmZpZyddKTtcbiAgICBpZiAoIWhhUGFuZWxDb25maWcpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkudXBkYXRlQ29uZmlnUGFuZWwsIDEwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhQ29uZmlnTmF2aWdhdGlvbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhhUGFuZWxDb25maWcsIFtcbiAgICAgICdoYS1jb25maWctZGFzaGJvYXJkJyxcbiAgICAgICdoYS1jb25maWctbmF2aWdhdGlvbiddKTtcbiAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uKSB7XG4gICAgICAvLyBIYUNvbmZpZ05hdmlnYXRpb24gc3RhcnRlZCB1c2luZyBsb2NhbGl6ZSBvbiAyMS4wMS4yMDE4XG4gICAgICBpZiAoaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplICYmICFoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2gpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoID0gdHJ1ZTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQgPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQ7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkID0gKGhhc3MsIHBhZ2UpID0+XG4gICAgICAgICAgcGFnZSA9PT0gJ2N1c3RvbXVpJyB8fCBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZChoYXNzLCBwYWdlKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdDdXN0b20gVUknIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ1NldFVJIHR3ZWFrcycgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uKHBhZ2UsIGxvY2FsaXplKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWhhQ29uZmlnTmF2aWdhdGlvbi5wYWdlcy5zb21lKGNvbmYgPT4gY29uZiA9PT0gJ2N1c3RvbXVpJyB8fCBjb25mLmRvbWFpbiA9PT0gJ2N1c3RvbXVpJykpIHtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLnB1c2goJ3BhZ2VzJywgaGFDb25maWdOYXZpZ2F0aW9uLmxvY2FsaXplID8gJ2N1c3RvbXVpJyA6IHtcbiAgICAgICAgICBkb21haW46ICdjdXN0b211aScsXG4gICAgICAgICAgY2FwdGlvbjogJ0N1c3RvbSBVSScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTZXQgVUkgdHdlYWtzLicsXG4gICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0SGFDb25maWdDdXN0b21VaSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoYS1jb25maWctY3VzdG9tLXVpJyk7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLmlzV2lkZSA9IGhhUGFuZWxDb25maWcuaXNXaWRlO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5zZXRBdHRyaWJ1dGUoJ3BhZ2UtbmFtZScsICdjdXN0b211aScpO1xuICAgICAgcmV0dXJuIGhhQ29uZmlnQ3VzdG9tVWk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlyb25QYWdlcyA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhUGFuZWxDb25maWcsICdpcm9uLXBhZ2VzJyk7XG4gICAgaWYgKGlyb25QYWdlcykge1xuICAgICAgaWYgKGlyb25QYWdlcy5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICBpcm9uUGFnZXMuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICAgIGlyb25QYWdlcy5hZGRFdmVudExpc3RlbmVyKCdpcm9uLWl0ZW1zLWNoYW5nZWQnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJykpIHtcbiAgICAgICAgICAgIGlyb25QYWdlcy5zZWxlY3QoJ2N1c3RvbXVpJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgcm9vdCA9IGhhUGFuZWxDb25maWcuc2hhZG93Um9vdCB8fCBoYVBhbmVsQ29uZmlnO1xuICAgICAgaWYgKHJvb3QubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZpc2libGUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpO1xuICAgICAgcm9vdC5sYXN0RWxlbWVudENoaWxkLnN0eWxlLmRpc3BsYXkgPSB2aXNpYmxlID8gJycgOiAnbm9uZSc7XG4gICAgfVxuICB9LFxuXG4gIGluc3RhbGxTdGF0ZXNIb29rKCkge1xuICAgIGNvbnN0IGhvbWVBc3Npc3RhbnQgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgaWYgKCFob21lQXNzaXN0YW50IHx8ICFob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcykgcmV0dXJuO1xuICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlID0gaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3M7XG4gICAgaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MgPSBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgY29uc3QgeyBoYXNzIH0gPSB0aGlzO1xuICAgICAgaWYgKG9iai5zdGF0ZXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqLnN0YXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50aXR5ID0gb2JqLnN0YXRlc1trZXldO1xuICAgICAgICAgIGlmIChlbnRpdHkuX2N1aV9rZWVwKSByZXR1cm47XG4gICAgICAgICAgY29uc3QgbmV3RW50aXR5ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZXMoaGFzcywgb2JqLnN0YXRlcywgZW50aXR5KTtcbiAgICAgICAgICBpZiAoaGFzcy5zdGF0ZXMgJiYgZW50aXR5ICE9PSBoYXNzLnN0YXRlc1trZXldKSB7XG4gICAgICAgICAgICAvLyBOZXcgc3RhdGUgYXJyaXZlZC4gUHV0IG1vZGlmaWVkIHN0YXRlIGluLlxuICAgICAgICAgICAgb2JqLnN0YXRlc1trZXldID0gbmV3RW50aXR5O1xuICAgICAgICAgIH0gZWxzZSBpZiAoZW50aXR5ICE9PSBuZXdFbnRpdHkpIHtcbiAgICAgICAgICAgIC8vIEl0J3MgdGhlIHNhbWUgc3RhdGUgYnV0IGNvbnRlbnRzIGNoYW5nZWQgZHVlIHRvIG90aGVyIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIG9yaWdpbmFsVXBkYXRlLmNhbGwodGhpcywgb2JqKTtcbiAgICAgIGlmIChvYmoudGhlbWVzICYmIGhhc3MuX3RoZW1lV2FpdGVycykge1xuICAgICAgICBoYXNzLl90aGVtZVdhaXRlcnMuZm9yRWFjaCh3YWl0ZXIgPT4gd2FpdGVyLnN0YXRlQ2hhbmdlZCh3YWl0ZXIuc3RhdGUpKTtcbiAgICAgICAgaGFzcy5fdGhlbWVXYWl0ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAobWFpbi5oYXNzICYmIG1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgIG1haW4uX3VwZGF0ZUhhc3MoeyBzdGF0ZXM6IG1haW4uaGFzcy5zdGF0ZXMgfSk7XG4gICAgfVxuICB9LFxuXG4gIGluc3RhbGxQYXJ0aWFsQ2FyZHMoKSB7XG4gICAgY29uc3QgcGFydGlhbENhcmRzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdwYXJ0aWFsLWNhcmRzJyk7XG4gICAgaWYgKCFwYXJ0aWFsQ2FyZHMgfHwgIXBhcnRpYWxDYXJkcy5wcm90b3R5cGUuX2RlZmF1bHRWaWV3RmlsdGVyKSByZXR1cm47XG4gICAgcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIgPSAoaGFzcywgZW50aXR5SWQpID0+IHtcbiAgICAgIGlmIChoYXNzLnN0YXRlc1tlbnRpdHlJZF0uYXR0cmlidXRlcy5oaWRkZW4pIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGV4Y2x1ZGVzID0ge307XG4gICAgICBPYmplY3QudmFsdWVzKGhhc3Muc3RhdGVzKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzICYmIGVudGl0eS5hdHRyaWJ1dGVzLmhpZGVfaW5fZGVmYXVsdF92aWV3KSB7XG4gICAgICAgICAgY29uc3QgZXhjbHVkZUVudGl0eUlkID0gZW50aXR5LmVudGl0eV9pZDtcbiAgICAgICAgICBpZiAoZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSkgcmV0dXJuO1xuICAgICAgICAgIGV4Y2x1ZGVzW2V4Y2x1ZGVFbnRpdHlJZF0gPSBlbnRpdHk7XG4gICAgICAgICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLnZpZXcpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIGV4Y2x1ZGVzLCBnZXRWaWV3RW50aXRpZXMoaGFzcy5zdGF0ZXMsIGVudGl0eSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gIWV4Y2x1ZGVzW2VudGl0eUlkXTtcbiAgICB9O1xuICB9LFxuXG4gIC8vIEFsbG93cyBjaGFuZ2luZyB0aGUgJ0V4ZWN1dGUnIC8gJ0FjdGl2YXRlJyB0ZXh0IG9uIHNjcmlwdC9zY2VuZSBjYXJkcy5cbiAgaW5zdGFsbEFjdGlvbk5hbWUoZWxlbWVudE5hbWUpIHtcbiAgICBjb25zdCBrbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChlbGVtZW50TmFtZSk7XG4gICAgaWYgKCFrbGFzcyB8fCAha2xhc3MucHJvdG90eXBlKSByZXR1cm47XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGtsYXNzLnByb3RvdHlwZSwgJ2xvY2FsaXplJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBmdW5jdGlvbiBjdXN0b21Mb2NhbGl6ZSh2KSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGVPYmogJiYgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hY3Rpb25fbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hY3Rpb25fbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhLmxvY2FsaXplKHYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXN0b21Mb2NhbGl6ZTtcbiAgICAgIH0sXG4gICAgICBzZXQoKSB7fSxcbiAgICB9KTtcbiAgfSxcblxuICAvLyBBbGxvd3MgdGhlbWluZyBcInJlZ3VsYXJcIiB0b3AgYmFkZ2VzLlxuICBpbnN0YWxsSGFTdGF0ZUxhYmVsQmFkZ2UoKSB7XG4gICAgY29uc3QgaGFTdGF0ZUxhYmVsQmFkZ2UgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLXN0YXRlLWxhYmVsLWJhZGdlJyk7XG4gICAgaWYgKCFoYVN0YXRlTGFiZWxCYWRnZSB8fCAhaGFTdGF0ZUxhYmVsQmFkZ2UucHJvdG90eXBlLnN0YXRlQ2hhbmdlZCkgcmV0dXJuO1xuICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgaGFTdGF0ZUxhYmVsQmFkZ2UucHJvdG90eXBlLnN0YXRlQ2hhbmdlZCA9IGZ1bmN0aW9uIHVwZGF0ZShzdGF0ZU9iaikge1xuICAgICAgLy8gVE9ETzogQ2FsbCB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RcbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc3MudGhlbWVzID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgPSB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycyB8fCBbXTtcbiAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycy5wdXNoKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSxcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUgfHwgJ2RlZmF1bHQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICAgIGlmICh0aGlzLnN0YXJ0SW50ZXJ2YWwpIHtcbiAgICAgICAgLy8gQWRkZWQgb24gMTkuMS4yMDE4XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbChzdGF0ZU9iaik7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBpbnN0YWxsU3RhdGVCYWRnZSgpIHtcbiAgICBjb25zdCBzdGF0ZUJhZGdlID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1iYWRnZScpO1xuICAgIGlmICghc3RhdGVCYWRnZSB8fCAhc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlSWNvbkFwcGVhcmFuY2UpIHJldHVybjtcbiAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlID0gc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlSWNvbkFwcGVhcmFuY2U7XG4gICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICBzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZSA9IGZ1bmN0aW9uIGN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlKHN0YXRlT2JqKSB7XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5pY29uX2NvbG9yICYmICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kLmljb24uc3R5bGUsIHtcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgICAgICBjb2xvcjogc3RhdGVPYmouYXR0cmlidXRlcy5pY29uX2NvbG9yLFxuICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZS5jYWxsKHRoaXMsIHN0YXRlT2JqKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGluc3RhbGxIYUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgaGFBdHRyaWJ1dGVzID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1hdHRyaWJ1dGVzJyk7XG4gICAgaWYgKCFoYUF0dHJpYnV0ZXMgfHwgIWhhQXR0cmlidXRlcy5wcm90b3R5cGUuY29tcHV0ZUZpbHRlcnNBcnJheSB8fFxuICAgICAgICF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgIGhhQXR0cmlidXRlcy5wcm90b3R5cGUuY29tcHV0ZUZpbHRlcnNBcnJheSA9IGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkoZXh0cmFGaWx0ZXJzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpLmNvbmNhdChleHRyYUZpbHRlcnMgPyBleHRyYUZpbHRlcnMuc3BsaXQoJywnKSA6IFtdKTtcbiAgICB9O1xuICB9LFxuXG4gIGluc3RhbGxIYUZvcm1DdXN0b21pemUoKSB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZycpKSByZXR1cm47XG4gICAgY29uc3QgaGFGb3JtQ3VzdG9taXplID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1mb3JtLWN1c3RvbWl6ZScpO1xuICAgIGlmICghaGFGb3JtQ3VzdG9taXplKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUsIDEwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3aW5kb3cuY3VzdG9tVUkuaGFGb3JtQ3VzdG9taXplSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaGFGb3JtQ3VzdG9taXplSW5pdERvbmUgPSB0cnVlO1xuXG4gICAgaWYgKCF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHJldHVybjtcbiAgICBpZiAoaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSkge1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuX2NvbXB1dGVTaW5nbGVBdHRyaWJ1dGUgPVxuICAgICAgICBmdW5jdGlvbiBjdXN0b21Db21wdXRlU2luZ2xlQXR0cmlidXRlKGtleSwgdmFsdWUsIHNlY29uZGFyeSkge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2tleV1cbiAgICAgICAgICAgICAgfHwgeyB0eXBlOiB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFIH07XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRPcGVuT2JqZWN0KGtleSwgY29uZmlnLnR5cGUgPT09ICdqc29uJyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLCBzZWNvbmRhcnksIGNvbmZpZyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKSB7XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5nZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyA9XG4gICAgICAgIGZ1bmN0aW9uIGN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zKFxuICAgICAgICAgIGxvY2FsQXR0cmlidXRlcywgZ2xvYmFsQXR0cmlidXRlcywgZXhpc3RpbmdBdHRyaWJ1dGVzLCBuZXdBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgY29uc3Qga25vd25LZXlzID1cbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb25mID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb25mICYmICghY29uZi5kb21haW5zIHx8ICF0aGlzLmVudGl0eSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZi5kb21haW5zLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbih0aGlzLmVudGl0eSkpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhsb2NhbEF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhnbG9iYWxBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMoZXhpc3RpbmdBdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHRoaXMuZmlsdGVyRnJvbUF0dHJpYnV0ZXMobmV3QXR0cmlidXRlcykpO1xuICAgICAgICAgIHJldHVybiBrbm93bktleXMuc29ydCgpLmNvbmNhdCgnT3RoZXInKTtcbiAgICAgICAgfTtcbiAgICB9XG4gIH0sXG5cbiAgaW5zdGFsbENsYXNzSG9va3MoKSB7XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5jbGFzc0luaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUgPSB0cnVlO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsUGFydGlhbENhcmRzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZXNIb29rKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsU3RhdGVCYWRnZSgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFBdHRyaWJ1dGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxBY3Rpb25OYW1lKCdzdGF0ZS1jYXJkLXNjZW5lJyk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxBY3Rpb25OYW1lKCdzdGF0ZS1jYXJkLXNjcmlwdCcpO1xuICB9LFxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5pbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQ2xhc3NIb29rcygpO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgaWYgKCFtYWluLmhhc3MgfHwgIW1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgIC8vIENvbm5lY3Rpb24gd2Fzbid0IG1hZGUgeWV0LiBUcnkgaW4gMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5pdCwgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdpbmRvdy5jdXN0b21VSS5pbml0RG9uZSA9IHRydWU7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkudXNlQ3VzdG9taXplcigpO1xuXG4gICAgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvY2F0aW9uLWNoYW5nZWQnLCB3aW5kb3cuc2V0VGltZW91dC5iaW5kKG51bGwsIHdpbmRvdy5jdXN0b21VSS5ydW5Ib29rcywgMTAwKSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgIGNvbnNvbGUubG9nKGBMb2FkZWQgQ3VzdG9tVUkgJHtWRVJTSU9OfWApO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgIGlmICghd2luZG93LkNVU1RPTV9VSV9MSVNUKSB7XG4gICAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QgPSBbXTtcbiAgICB9XG4gICAgd2luZG93LkNVU1RPTV9VSV9MSVNULnB1c2goe1xuICAgICAgbmFtZTogJ0N1c3RvbVVJJyxcbiAgICAgIHZlcnNpb246IFZFUlNJT04sXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vYW5kcmV5LWdpdC9ob21lLWFzc2lzdGFudC1jdXN0b20tdWknLFxuICAgIH0pO1xuICB9LFxuXG4gIHJ1bkhvb2tzKCkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS51cGRhdGVDb25maWdQYW5lbCgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsSGFGb3JtQ3VzdG9taXplKCk7XG4gIH0sXG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScpIHx8ICcnO1xuICB9LFxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGEtZGV2aWNlLW5hbWUnLCBuYW1lIHx8ICcnKTtcbiAgfSxcblxuICBjb21wdXRlVGVtcGxhdGUodGVtcGxhdGUsIGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpIHtcbiAgICBjb25zdCBmdW5jdGlvbkJvZHkgPSAodGVtcGxhdGUuaW5kZXhPZigncmV0dXJuJykgPj0gMCkgPyB0ZW1wbGF0ZSA6IGByZXR1cm4gXFxgJHt0ZW1wbGF0ZX1cXGA7YDtcbiAgICB0cnkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIGNvbnN0IGZ1bmMgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdoYXNzJywgJ2VudGl0aWVzJywgJ2VudGl0eScsICdhdHRyaWJ1dGVzJywgJ2F0dHJpYnV0ZScsICdzdGF0ZScsIGZ1bmN0aW9uQm9keSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldy1mdW5jICovXG4gICAgICByZXR1cm4gZnVuYyhoYXNzLCBlbnRpdGllcywgZW50aXR5LCBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUsIHN0YXRlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICBpZiAoKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikgfHwgZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtlLm5hbWV9OiAke2UubWVzc2FnZX0gaW4gdGVtcGxhdGUgJHtmdW5jdGlvbkJvZHl9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfSxcbn07XG53aW5kb3cuY3VzdG9tVUkuaW5pdCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgJzIwMTgwNjAyJztcbiJdLCJzb3VyY2VSb290IjoiIn0=