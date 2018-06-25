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
/* harmony default export */ __webpack_exports__["default"] = ('20180625');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc3MtYXR0cmlidXRlLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkiLCJTVEFURVNfT0ZGIiwiVU5JVF9DIiwiVU5JVF9GIiwiREVGQVVMVF9WSUVXX0VOVElUWV9JRCIsImFwcGx5VGhlbWVzT25FbGVtZW50IiwiZWxlbWVudCIsInRoZW1lcyIsImxvY2FsVGhlbWUiLCJ1cGRhdGVNZXRhIiwiX3RoZW1lcyIsInRoZW1lTmFtZSIsImRlZmF1bHRfdGhlbWUiLCJzdHlsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0aGVtZSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJlZml4ZWRLZXkiLCJ1cGRhdGVTdHlsZXMiLCJ3aW5kb3ciLCJTaGFkeUNTUyIsInN0eWxlU3VidHJlZSIsIm1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVtZUNvbG9yIiwiZHluYW1pY0NvbnRlbnRVcGRhdGVyIiwicm9vdCIsIm5ld0VsZW1lbnRUYWciLCJhdHRyaWJ1dGVzIiwicm9vdEVsIiwiY3VzdG9tRWwiLCJsYXN0Q2hpbGQiLCJ0YWdOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwiY2FuVG9nZ2xlRG9tYWluIiwiaGFzcyIsImRvbWFpbiIsInNlcnZpY2VzIiwiY29uZmlnIiwiY2FuVG9nZ2xlU3RhdGUiLCJzdGF0ZU9iaiIsImNvbXB1dGVTdGF0ZURvbWFpbiIsInN0YXRlIiwic3VwcG9ydGVkX2ZlYXR1cmVzIiwiY29tcHV0ZURvbWFpbiIsImVudGl0eUlkIiwic3Vic3RyIiwiaW5kZXhPZiIsIl9kb21haW4iLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiRE9NQUlOX0RFVklDRV9DTEFTUyIsImJpbmFyeV9zZW5zb3IiLCJjb3ZlciIsInNlbnNvciIsIlVOS05PV05fVFlQRSIsIkFERF9UWVBFIiwiVFlQRV9UT19UQUciLCJzdHJpbmciLCJqc29uIiwiaWNvbiIsImJvb2xlYW4iLCJhcnJheSIsIkxPR0lDX1NUQVRFX0FUVFJJQlVURVMiLCJlbnRpdHlfcGljdHVyZSIsInVuZGVmaW5lZCIsImZyaWVuZGx5X25hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJlbXVsYXRlZF9odWUiLCJkb21haW5zIiwiZW11bGF0ZWRfaHVlX25hbWUiLCJoYWFza2FfaGlkZGVuIiwiaGFhc2thX25hbWUiLCJob21lYnJpZGdlX2hpZGRlbiIsImhvbWVicmlkZ2VfbmFtZSIsImF0dHJpYnV0aW9uIiwiY3VzdG9tX3VpX21vcmVfaW5mbyIsImN1c3RvbV91aV9zdGF0ZV9jYXJkIiwiZGV2aWNlX2NsYXNzIiwib3B0aW9ucyIsImFzc3VtZWRfc3RhdGUiLCJpbml0aWFsX3N0YXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsInZhbHVlIiwidG9TdHJpbmciLCJsaXRlcmFsVmFsdWUiLCJFcnJvciIsImh0bWxWYWx1ZSIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJodG1sIiwic3RyaW5ncyIsInRlbXBsYXRlIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwidiIsImlkeCIsImh0bWxMaXRlcmFsIiwiQ3VpQmFzZUVsZW1lbnQiLCJleHRyYXMiLCJleHRyYV9kYXRhX3RlbXBsYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJleHRyYSIsInN0YXRlcyIsImZpbHRlciIsImluRGlhbG9nIiwibGVuZ3RoIiwic2hvd19sYXN0X2NoYW5nZWQiLCJCb29sZWFuIiwiY29udHJvbEVsZW1lbnQiLCJTdHJpbmciLCJjb21wdXRlZCIsIlBvbHltZXIiLCJFbGVtZW50IiwiRHluYW1pY0VsZW1lbnQiLCJlbGVtZW50TmFtZSIsInRvVXBwZXJDYXNlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJEeW5hbWljV2l0aEV4dHJhIiwiX2F0dGFjaGVkIiwiX2lzQXR0YWNoZWQiLCJhdHRhY2hlZCIsImV4dHJhX2JhZGdlIiwiZXh0cmFCYWRnZXMiLCJleHRyYUJhZGdlIiwibWF5YmVDaGFuZ2VPYmplY3QiLCJhdHRyaWJ1dGUiLCJ1bml0IiwiYmxhY2tsaXN0IiwiYmxhY2tsaXN0X3N0YXRlcyIsInNvbWUiLCJSZWdFeHAiLCJ0ZXN0IiwiX2VudGl0eURpc3BsYXkiLCJleHRyYU9iaiIsImV4dHJhT2JqVmlzaWJsZSIsImhpZGVfY29udHJvbCIsImhhTG9jYWxpemUiLCJsb2NhbGl6ZSIsImNvbmZpcm1fY29udHJvbHMiLCJjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jayIsImUiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJsb2NrIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsImFwcGx5VGhlbWVzIiwiZ2V0IiwiSGFDb25maWdDdXN0b21VaSIsIm5hbWUiLCJnZXROYW1lIiwic2V0TmFtZSIsImhpc3RvcnkiLCJiYWNrIiwiZmlyZSIsImlzV2lkZSIsIm9ic2VydmVyIiwiRXZlbnRzTWl4aW4iLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCIsImF0dHIiLCJkZWYiLCJpc09uIiwidGhlbWVkTWluIiwiZXYiLCJ0YXJnZXQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJwaW4iLCJub3RpZnkiLCJfdGhlbWVkTWluIiwiU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMiLCJET01BSU5fVE9fU0xJREVSX1NVUFBPUlQiLCJsaWdodCIsImNsaW1hdGUiLCJUWVBFX1RPX0NPTlRST0wiLCJ0b2dnbGUiLCJkaXNwbGF5IiwiU3RhdGVDYXJkQ3VzdG9tVWkiLCJjb250YWluZXIiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9jb250YWluZXIiLCJzZXRQcm9wZXJ0eSIsImlucHV0Q2hhbmdlZCIsIm1hcmdpbiIsInBhZGRpbmciLCJpZCIsImNvbnNvbGUiLCJ3YXJuIiwiYmFkZ2VzX2xpc3QiLCJwdXNoIiwicGFyYW1zIiwid2lkdGgiLCJmb250U2l6ZSIsIm1vZGlmaWVkT2JqIiwidGhlbWVUYXJnZXQiLCJvYmoiLCJzdGF0ZV9jYXJkX21vZGUiLCJtYXliZUhpZGVFbnRpdHkiLCJiYWRnZU1vZGUiLCJyZWd1bGFyTW9kZV8iLCJjbGVhbkJhZGdlU3R5bGUiLCJvcmlnaW5hbFN0YXRlQ2FyZFR5cGUiLCJjdXN0b21TdGF0ZUNhcmRUeXBlIiwic2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSIsInN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeSIsInNsaWRlckVsaWdpYmxlXyIsInNlcnZpY2VNaW4iLCJzZXJ2aWNlTWF4IiwidmFsdWVOYW1lIiwic2V0VmFsdWVOYW1lIiwibmFtZU9uIiwibWluX3RlbXAiLCJtYXhfdGVtcCIsImNvbnRyb2xfZWxlbWVudCIsIlN0YXRlQ2FyZFdpdGhTbGlkZXIiLCJfb25Jcm9uUmVzaXplIiwiYmluZCIsIl9pc0Nvbm5lY3RlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfd2FpdEZvckxheW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfc2V0TW9kZSIsIl9mcmFtZUlkIiwicmVhZHlUb0NvbXB1dGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoaWRlU2xpZGVyIiwibW9kZSIsImxpbmVUb29Mb25nIiwiYnJlYWtTbGlkZXIiLCJzaG93U2xpZGVyIiwicHJldkJyZWFrU2xpZGVyIiwicHJldkhpZGVTbGlkZXIiLCIkIiwiY29udGFpbmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIm1pbkxpbmVCcmVhayIsIm1heExpbmVCcmVhayIsImNvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0YXRlSGVpZ2h0Iiwic3RyZXRjaFNsaWRlciIsInBhcnNlSW50IiwicGFyYW0iLCJpc05hTiIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJjYWxsU2VydmljZSIsInNsaWRlclZhbHVlIiwic3RyZXRjaF9zbGlkZXIiLCJTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIiwic3VwZXJDbGFzcyIsImRldGFpbCIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNvbXBvc2VkIiwibm9kZSIsImRpc3BhdGNoRXZlbnQiLCJTVVBQT1JURURfU0xJREVSX01PREVTIiwiY3VzdG9tVWlBdHRyaWJ1dGVzIiwiZGV2aWNlIiwidGVtcGxhdGVzIiwiX3N0YXRlRGlzcGxheSIsImNvbmNhdCIsInNsaWRlcl90aGVtZSIsImhpZGVfaW5fZGVmYXVsdF92aWV3IiwiaWNvbl9jb2xvciIsImhhc3NBdHRyaWJ1dGVzVXRpbCIsImRvbUhvc3QiLCJnZXRSb290Tm9kZSIsIkRvY3VtZW50RnJhZ21lbnQiLCJob3N0IiwibGlnaHRPclNoYWRvdyIsInNlbGVjdG9yIiwic2hhZG93Um9vdCIsImdldEVsZW1lbnRIaWVyYXJjaHkiLCJoaWVyYXJjaHkiLCJzaGlmdCIsImdldENvbnRleHQiLCJfY29udGV4dCIsImdyb3VwRW50aXR5IiwicmV2ZXJzZSIsImZpbmRNYXRjaCIsImZpbmQiLCJtYXRjaCIsIm9wdGlvbiIsIm1heWJlQ2hhbmdlT2JqZWN0QnlEZXZpY2UiLCJhcHBseUF0dHJpYnV0ZXMiLCJtYXliZUNoYW5nZU9iamVjdEJ5R3JvdXAiLCJjb250ZXh0IiwiYyIsIl9zZXRLZWVwIiwiX2N1aV9rZWVwIiwibWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJoYXNHbG9iYWwiLCJoYXNDaGFuZ2VzIiwidW50ZW1wbGF0ZWRfYXR0cmlidXRlcyIsInVudGVtcGxhdGVkX3N0YXRlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5IiwibWF5YmVBcHBseVRlbXBsYXRlcyIsIm5ld1Jlc3VsdCIsImNoZWNrQXR0cmlidXRlcyIsImxhc3RfY2hhbmdlZCIsImFsbG93SGlkZGVuIiwiZml4R3JvdXBUaXRsZXMiLCJob21lQXNzaXN0YW50TWFpbiIsImhhQ2FyZHMiLCJtYWluIiwiY2FyZHMiLCJjYXJkIiwibmFtZUVsZW0iLCJ0ZXh0Q29udGVudCIsImNvbnRyb2xDb2x1bW5zIiwiY29sdW1ucyIsInBhcnRpYWxDYXJkcyIsIm1xbHMiLCJtcWwiLCJyZW1vdmVMaXN0ZW5lciIsImhhbmRsZVdpbmRvd0NoYW5nZSIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInVzZUN1c3RvbWl6ZXIiLCJjdXN0b21pemVyIiwiaGlkZV9hdHRyaWJ1dGVzIiwidXBkYXRlQ29uZmlnUGFuZWwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImhhUGFuZWxDb25maWciLCJoYUNvbmZpZ05hdmlnYXRpb24iLCJjdWlQYXRjaCIsIl9vcmlnaW5hbENvbXB1dGVMb2FkZWQiLCJfY29tcHV0ZUxvYWRlZCIsIl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uIiwiX2NvbXB1dGVDYXB0aW9uIiwiX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uIiwiX2NvbXB1dGVEZXNjcmlwdGlvbiIsInBhZ2UiLCJwYWdlcyIsImNvbmYiLCJjYXB0aW9uIiwibG9hZGVkIiwiZ2V0SGFDb25maWdDdXN0b21VaSIsImhhQ29uZmlnQ3VzdG9tVWkiLCJpcm9uUGFnZXMiLCJsYXN0RWxlbWVudENoaWxkIiwic2VsZWN0IiwidmlzaWJsZSIsImluc3RhbGxTdGF0ZXNIb29rIiwiaG9tZUFzc2lzdGFudCIsIl91cGRhdGVIYXNzIiwib3JpZ2luYWxVcGRhdGUiLCJ1cGRhdGUiLCJuZXdFbnRpdHkiLCJfdGhlbWVXYWl0ZXJzIiwid2FpdGVyIiwic3RhdGVDaGFuZ2VkIiwiaW5zdGFsbFBhcnRpYWxDYXJkcyIsIl9kZWZhdWx0Vmlld0ZpbHRlciIsImV4Y2x1ZGVzIiwiZXhjbHVkZUVudGl0eUlkIiwiaW5zdGFsbEFjdGlvbk5hbWUiLCJrbGFzcyIsImRlZmluZVByb3BlcnR5IiwiY3VzdG9tTG9jYWxpemUiLCJhY3Rpb25fbmFtZSIsIl9fZGF0YSIsInNldCIsImluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSIsImhhU3RhdGVMYWJlbEJhZGdlIiwic3RhcnRJbnRlcnZhbCIsImluc3RhbGxTdGF0ZUJhZGdlIiwic3RhdGVCYWRnZSIsInVwZGF0ZUljb25BcHBlYXJhbmNlIiwib3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZSIsImN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlIiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3IiLCJpbnN0YWxsSGFBdHRyaWJ1dGVzIiwiaGFBdHRyaWJ1dGVzIiwiY29tcHV0ZUZpbHRlcnNBcnJheSIsImN1c3RvbUNvbXB1dGVGaWx0ZXJzQXJyYXkiLCJleHRyYUZpbHRlcnMiLCJzcGxpdCIsImluc3RhbGxIYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemUiLCJoYUZvcm1DdXN0b21pemVJbml0RG9uZSIsIl9jb21wdXRlU2luZ2xlQXR0cmlidXRlIiwiY3VzdG9tQ29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSIsInNlY29uZGFyeSIsIl9pbml0T3Blbk9iamVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXROZXdBdHRyaWJ1dGVzT3B0aW9ucyIsImN1c3RvbWdldE5ld0F0dHJpYnV0ZXNPcHRpb25zIiwibG9jYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlcyIsImV4aXN0aW5nQXR0cmlidXRlcyIsImtub3duS2V5cyIsImZpbHRlckZyb21BdHRyaWJ1dGVzIiwic29ydCIsImluc3RhbGxDbGFzc0hvb2tzIiwiY2xhc3NJbml0RG9uZSIsImluaXQiLCJpbml0RG9uZSIsInJ1bkhvb2tzIiwibG9nIiwiQ1VTVE9NX1VJX0xJU1QiLCJ2ZXJzaW9uIiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jdGlvbkJvZHkiLCJmdW5jIiwiRnVuY3Rpb24iLCJTeW50YXhFcnJvciIsIlJlZmVyZW5jZUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ08sSUFBTUEsc0JBQXNCLGVBQTVCOztBQUVQO0FBQ08sSUFBTUMsb0JBQW9CLENBQy9CLFNBRCtCLEVBRS9CLE9BRitCLEVBRy9CLGNBSCtCLEVBSS9CLGNBSitCLEVBSy9CLGNBTCtCLEVBTS9CLFlBTitCLEVBTy9CLGNBUCtCLEVBUS9CLE9BUitCLEVBUy9CLFFBVCtCLEVBVS9CLE9BVitCLEVBVy9CLFNBWCtCLENBQTFCOztBQWNQO0FBQ08sSUFBTUMsK0JBQStCLENBQzFDLFFBRDBDLEVBRTFDLGNBRjBDLEVBRzFDLGVBSDBDLEVBSTFDLE9BSjBDLENBQXJDOztBQU9QO0FBQ08sSUFBTUMsYUFBYSxDQUN4QixRQUR3QixFQUV4QixLQUZ3QixFQUd4QixVQUh3QixDQUFuQjs7QUFNUDtBQUNP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QVIsQ0FBZ0J6RCxFQUFFWSxJQUFsQixVQUEyQlosRUFBRXFTLE9BQTdCLHFCQUFvREwsWUFBcEQ7QUFDQSxlQUFPLElBQVA7QUFDRDtBQUNEO0FBQ0EsWUFBTWhTLENBQU47QUFDRDtBQUNGO0FBamxCa0MsQ0FBckM7QUFtbEJBNUosT0FBT2tILFFBQVAsQ0FBZ0JnVSxJQUFoQixHOzs7Ozs7Ozs7Ozs7O0FDM2xCQSwrREFBZSxVQUFmLEUiLCJmaWxlIjoic2NyaXB0cy1kYmctZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL3NjcmlwdHMuanNcIik7XG4iLCIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gJ2hhc3M6Ym9va21hcmsnO1xuXG4vKiogRG9tYWlucyB0aGF0IGhhdmUgYSBzdGF0ZSBjYXJkLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9DQVJEID0gW1xuICAnY2xpbWF0ZScsXG4gICdjb3ZlcicsXG4gICdjb25maWd1cmF0b3InLFxuICAnaW5wdXRfc2VsZWN0JyxcbiAgJ2lucHV0X251bWJlcicsXG4gICdpbnB1dF90ZXh0JyxcbiAgJ21lZGlhX3BsYXllcicsXG4gICdzY2VuZScsXG4gICdzY3JpcHQnLFxuICAndGltZXInLFxuICAnd2VibGluaycsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3VsZCBoYXZlIHRoZSBoaXN0b3J5IGhpZGRlbiBpbiB0aGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZID0gW1xuICAnY2FtZXJhJyxcbiAgJ2NvbmZpZ3VyYXRvcicsXG4gICdoaXN0b3J5X2dyYXBoJyxcbiAgJ3NjZW5lJyxcbl07XG5cbi8qKiBTdGF0ZXMgdGhhdCB3ZSBjb25zaWRlciBcIm9mZlwiLiAqL1xuZXhwb3J0IGNvbnN0IFNUQVRFU19PRkYgPSBbXG4gICdjbG9zZWQnLFxuICAnb2ZmJyxcbiAgJ3VubG9ja2VkJyxcbl07XG5cbi8qKiBUZW1wZXJhdHVyZSB1bml0cy4gKi9cbmV4cG9ydCBjb25zdCBVTklUX0MgPSAnwrBDJztcbmV4cG9ydCBjb25zdCBVTklUX0YgPSAnwrBGJztcblxuLyoqIEVudGl0eSBJRCBvZiB0aGUgZGVmYXVsdCB2aWV3LiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSAnZ3JvdXAuZGVmYXVsdF92aWV3JztcbiIsIi8qKlxuICogQXBwbHkgYSB0aGVtZSB0byBhbiBlbGVtZW50IGJ5IHNldHRpbmcgdGhlIENTUyB2YXJpYWJsZXMgb24gaXQuXG4gKlxuICogZWxlbWVudDogRWxlbWVudCB0byBhcHBseSB0aGVtZSBvbi5cbiAqIHRoZW1lczogSEFTUyBUaGVtZSBpbmZvcm1hdGlvblxuICogbG9jYWxUaGVtZTogc2VsZWN0ZWQgdGhlbWUuXG4gKiB1cGRhdGVNZXRhOiBib29sZWFuIGlmIHdlIHNob3VsZCB1cGRhdGUgdGhlIHRoZW1lLWNvbG9yIG1ldGEgZWxlbWVudC5cbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseVRoZW1lc09uRWxlbWVudChlbGVtZW50LCB0aGVtZXMsIGxvY2FsVGhlbWUsIHVwZGF0ZU1ldGEgPSBmYWxzZSkge1xuICBpZiAoIWVsZW1lbnQuX3RoZW1lcykge1xuICAgIGVsZW1lbnQuX3RoZW1lcyA9IHt9O1xuICB9XG4gIGxldCB0aGVtZU5hbWUgPSB0aGVtZXMuZGVmYXVsdF90aGVtZTtcbiAgaWYgKGxvY2FsVGhlbWUgPT09ICdkZWZhdWx0JyB8fCAobG9jYWxUaGVtZSAmJiB0aGVtZXMudGhlbWVzW2xvY2FsVGhlbWVdKSkge1xuICAgIHRoZW1lTmFtZSA9IGxvY2FsVGhlbWU7XG4gIH1cbiAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbWVudC5fdGhlbWVzKTtcbiAgaWYgKHRoZW1lTmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgdmFyIHRoZW1lID0gdGhlbWVzLnRoZW1lc1t0aGVtZU5hbWVdO1xuICAgIE9iamVjdC5rZXlzKHRoZW1lKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHZhciBwcmVmaXhlZEtleSA9ICctLScgKyBrZXk7XG4gICAgICBlbGVtZW50Ll90aGVtZXNbcHJlZml4ZWRLZXldID0gJyc7XG4gICAgICBzdHlsZXNbcHJlZml4ZWRLZXldID0gdGhlbWVba2V5XTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZWxlbWVudC51cGRhdGVTdHlsZXMpIHtcbiAgICBlbGVtZW50LnVwZGF0ZVN0eWxlcyhzdHlsZXMpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5TaGFkeUNTUykge1xuICAgIC8vIGltcGxlbWVudCB1cGRhdGVTdHlsZXMoKSBtZXRob2Qgb2YgUG9sZW1lciBlbGVtZW50c1xuICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZVN1YnRyZWUoLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovKGVsZW1lbnQpLCBzdHlsZXMpO1xuICB9XG5cbiAgaWYgKCF1cGRhdGVNZXRhKSByZXR1cm47XG5cbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT10aGVtZS1jb2xvcl0nKTtcbiAgaWYgKG1ldGEpIHtcbiAgICBpZiAoIW1ldGEuaGFzQXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKSkge1xuICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcsIG1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpO1xuICAgIH1cbiAgICBjb25zdCB0aGVtZUNvbG9yID0gc3R5bGVzWyctLXByaW1hcnktY29sb3InXSB8fCBtZXRhLmdldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50Jyk7XG4gICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB0aGVtZUNvbG9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBVcGRhdGUgcm9vdCdzIGNoaWxkIGVsZW1lbnQgdG8gYmUgbmV3RWxlbWVudFRhZyByZXBsYWNpbmcgYW5vdGhlciBleGlzdGluZyBjaGlsZCBpZiBhbnkuXG4gKiBDb3B5IGF0dHJpYnV0ZXMgaW50byB0aGUgY2hpbGQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pY0NvbnRlbnRVcGRhdGVyKHJvb3QsIG5ld0VsZW1lbnRUYWcsIGF0dHJpYnV0ZXMpIHtcbiAgY29uc3Qgcm9vdEVsID0gcm9vdDtcbiAgbGV0IGN1c3RvbUVsO1xuXG4gIGlmIChyb290RWwubGFzdENoaWxkICYmIHJvb3RFbC5sYXN0Q2hpbGQudGFnTmFtZSA9PT0gbmV3RWxlbWVudFRhZykge1xuICAgIGN1c3RvbUVsID0gcm9vdEVsLmxhc3RDaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBpZiAocm9vdEVsLmxhc3RDaGlsZCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKHJvb3RFbC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBDcmVhdGluZyBhbiBlbGVtZW50IHdpdGggdXBwZXIgY2FzZSB3b3JrcyBmaW5lIGluIENocm9tZSwgYnV0IGluIEZGIGl0IGRvZXNuJ3QgaW1tZWRpYXRlbHlcbiAgICAvLyBiZWNvbWUgYSBkZWZpbmVkIEN1c3RvbSBFbGVtZW50LiBQb2x5bWVyIGRvZXMgdGhhdCBpbiBzb21lIGxhdGVyIHBhc3MuXG4gICAgY3VzdG9tRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5ld0VsZW1lbnRUYWcudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwuc2V0UHJvcGVydGllcykge1xuICAgIGN1c3RvbUVsLnNldFByb3BlcnRpZXMoYXR0cmlidXRlcyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgY3VzdG9tIGVsZW1lbnQgZGVmaW5pdGlvbiB3YXNuJ3QgbG9hZGVkIHlldCAtIHNldFByb3BlcnRpZXMgd291bGQgYmVcbiAgICAvLyBtaXNzaW5nLCBidXQgbm8gaGFybSBpbiBzZXR0aW5nIGF0dHJpYnV0ZXMgb25lLWJ5LW9uZSB0aGVuLlxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY3VzdG9tRWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGN1c3RvbUVsKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbikge1xuICBjb25zdCBzZXJ2aWNlcyA9IGhhc3MuY29uZmlnLnNlcnZpY2VzW2RvbWFpbl07XG4gIGlmICghc2VydmljZXMpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKGRvbWFpbiA9PT0gJ2xvY2snKSB7XG4gICAgcmV0dXJuICdsb2NrJyBpbiBzZXJ2aWNlcztcbiAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjb3ZlcicpIHtcbiAgICByZXR1cm4gJ29wZW5fY292ZXInIGluIHNlcnZpY2VzO1xuICB9XG4gIHJldHVybiAndHVybl9vbicgaW4gc2VydmljZXM7XG59XG4iLCJpbXBvcnQgY2FuVG9nZ2xlRG9tYWluIGZyb20gJy4vY2FuX3RvZ2dsZV9kb21haW4uanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopIHtcbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgaWYgKGRvbWFpbiA9PT0gJ2dyb3VwJykge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gJ29uJyB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gJ29mZic7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gJ2NsaW1hdGUnKSB7XG4gICAgcmV0dXJuICEhKChzdGF0ZU9iai5hdHRyaWJ1dGVzIHx8IHt9KS5zdXBwb3J0ZWRfZmVhdHVyZXMgJiA0MDk2KTtcbiAgfVxuXG4gIHJldHVybiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVEb21haW4oZW50aXR5SWQpIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cigwLCBlbnRpdHlJZC5pbmRleE9mKCcuJykpO1xufVxuIiwiaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSAnLi9jb21wdXRlX2RvbWFpbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikge1xuICBpZiAoIXN0YXRlT2JqLl9kb21haW4pIHtcbiAgICBzdGF0ZU9iai5fZG9tYWluID0gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlT2JqLl9kb21haW47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBncm91cCkge1xuICBjb25zdCByZXN1bHQgPSB7fTtcblxuICBncm91cC5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHJlc3VsdFtlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfZG9tYWluLmpzJztcbmltcG9ydCBnZXRHcm91cEVudGl0aWVzIGZyb20gJy4vZ2V0X2dyb3VwX2VudGl0aWVzLmpzJztcblxuLy8gUmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBlbnRpdGllcyB0aGF0IHRoZSB2aWV3IHdpbGwgc2hvd1xuLy8gaW5jbHVkaW5nIGVtYmVkZGVkIGdyb3Vwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdFbnRpdGllcyhlbnRpdGllcywgdmlldykge1xuICBjb25zdCB2aWV3RW50aXRpZXMgPSB7fTtcblxuICB2aWV3LmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSAmJiAhZW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICB2aWV3RW50aXRpZXNbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG5cbiAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRW50aXRpZXMgPSBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBlbnRpdHkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwRW50aXRpZXMpLmZvckVhY2goKGdyRW50aXR5SWQpID0+IHtcbiAgICAgICAgICBjb25zdCBnckVudGl0eSA9IGdyb3VwRW50aXRpZXNbZ3JFbnRpdHlJZF07XG5cbiAgICAgICAgICBpZiAoIWdyRW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICAgICAgICB2aWV3RW50aXRpZXNbZ3JFbnRpdHlJZF0gPSBnckVudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdFbnRpdGllcztcbn1cbiIsImltcG9ydCBjYW5Ub2dnbGVTdGF0ZSBmcm9tICcuL2Nhbl90b2dnbGVfc3RhdGUuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCB7IERPTUFJTlNfV0lUSF9DQVJEIH0gZnJvbSAnLi4vY29uc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKSB7XG4gIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgIHJldHVybiAnZGlzcGxheSc7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfSBlbHNlIGlmIChjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikgJiZcbiAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2wgIT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuICd0b2dnbGUnO1xuICB9XG4gIHJldHVybiAnZGlzcGxheSc7XG59XG4iLCJjb25zdCBoYXNzQXR0cmlidXRlVXRpbCA9IHt9O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgJ2JhdHRlcnknLFxuICAgICdjb2xkJyxcbiAgICAnY29ubmVjdGl2aXR5JyxcbiAgICAnZG9vcicsXG4gICAgJ2dhcmFnZV9kb29yJyxcbiAgICAnZ2FzJyxcbiAgICAnaGVhdCcsXG4gICAgJ2xpZ2h0JyxcbiAgICAnbG9jaycsXG4gICAgJ21vaXN0dXJlJyxcbiAgICAnbW90aW9uJyxcbiAgICAnbW92aW5nJyxcbiAgICAnb2NjdXBhbmN5JyxcbiAgICAnb3BlbmluZycsXG4gICAgJ3BsdWcnLFxuICAgICdwb3dlcicsXG4gICAgJ3ByZXNlbmNlJyxcbiAgICAncHJvYmxlbScsXG4gICAgJ3NhZmV0eScsXG4gICAgJ3Ntb2tlJyxcbiAgICAnc291bmQnLFxuICAgICd2aWJyYXRpb24nLFxuICAgICd3aW5kb3cnXG4gIF0sXG4gIGNvdmVyOiBbJ2dhcmFnZSddLFxuICBzZW5zb3I6IFtcbiAgICAnYmF0dGVyeScsXG4gICAgJ2h1bWlkaXR5JyxcbiAgICAnaWxsdW1pbmFuY2UnLFxuICAgICd0ZW1wZXJhdHVyZSdcbiAgXSxcbn07XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlVOS05PV05fVFlQRSA9ICdqc29uJztcbmhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFID0gJ2tleS12YWx1ZSc7XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlRZUEVfVE9fVEFHID0ge1xuICBzdHJpbmc6ICdoYS1jdXN0b21pemUtc3RyaW5nJyxcbiAganNvbjogJ2hhLWN1c3RvbWl6ZS1zdHJpbmcnLFxuICBpY29uOiAnaGEtY3VzdG9taXplLWljb24nLFxuICBib29sZWFuOiAnaGEtY3VzdG9taXplLWJvb2xlYW4nLFxuICBhcnJheTogJ2hhLWN1c3RvbWl6ZS1hcnJheScsXG4gICdrZXktdmFsdWUnOiAnaGEtY3VzdG9taXplLWtleS12YWx1ZScsXG59O1xuXG4vLyBBdHRyaWJ1dGVzIGhlcmUgc2VydmUgZHVhbCBwdXJwb3NlOlxuLy8gMSkgQW55IGtleSBvZiB0aGlzIG9iamVjdCB3b24ndCBiZSBzaG93biBpbiBtb3JlLWluZm8gd2luZG93LlxuLy8gMikgQW55IGtleSB3aGljaCBoYXMgdmFsdWUgb3RoZXIgdGhhbiB1bmRlZmluZWQgd2lsbCBhcHBlYXIgaW4gY3VzdG9taXphdGlvblxuLy8gICAgY29uZmlnIGFjY29yZGluZyB0byBpdHMgdmFsdWUuXG5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID1cbiAgaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyB8fCB7XG4gICAgZW50aXR5X3BpY3R1cmU6IHVuZGVmaW5lZCxcbiAgICBmcmllbmRseV9uYW1lOiB7IHR5cGU6ICdzdHJpbmcnLCBkZXNjcmlwdGlvbjogJ05hbWUnIH0sXG4gICAgaWNvbjogeyB0eXBlOiAnaWNvbicgfSxcbiAgICBlbXVsYXRlZF9odWU6IHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGRvbWFpbnM6IFsnZW11bGF0ZWRfaHVlJ11cbiAgICB9LFxuICAgIGVtdWxhdGVkX2h1ZV9uYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRvbWFpbnM6IFsnZW11bGF0ZWRfaHVlJ11cbiAgICB9LFxuICAgIGhhYXNrYV9oaWRkZW46IHVuZGVmaW5lZCxcbiAgICBoYWFza2FfbmFtZTogdW5kZWZpbmVkLFxuICAgIGhvbWVicmlkZ2VfaGlkZGVuOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgIGhvbWVicmlkZ2VfbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHN1cHBvcnRlZF9mZWF0dXJlczogdW5kZWZpbmVkLFxuICAgIGF0dHJpYnV0aW9uOiB1bmRlZmluZWQsXG4gICAgY3VzdG9tX3VpX21vcmVfaW5mbzogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgZGV2aWNlX2NsYXNzOiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgb3B0aW9uczogaGFzc0F0dHJpYnV0ZVV0aWwuRE9NQUlOX0RFVklDRV9DTEFTUyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGV2aWNlIGNsYXNzJyxcbiAgICAgIGRvbWFpbnM6IFsnYmluYXJ5X3NlbnNvcicsICdjb3ZlcicsICdzZW5zb3InXVxuICAgIH0sXG4gICAgaGlkZGVuOiB7IHR5cGU6ICdib29sZWFuJywgZGVzY3JpcHRpb246ICdIaWRlIGZyb20gVUknIH0sXG4gICAgYXNzdW1lZF9zdGF0ZToge1xuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgZG9tYWluczogWydzd2l0Y2gnLCAnbGlnaHQnLCAnY292ZXInLCAnY2xpbWF0ZScsICdmYW4nLCAnZ3JvdXAnXVxuICAgIH0sXG4gICAgaW5pdGlhbF9zdGF0ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkb21haW5zOiBbJ2F1dG9tYXRpb24nXVxuICAgIH0sXG4gICAgdW5pdF9vZl9tZWFzdXJlbWVudDogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBoYXNzQXR0cmlidXRlVXRpbDtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbndpbmRvdy5KU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gZnVuY3Rpb24ocHJvcCkgeyByZXR1cm4gcHJvcDsgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc3RhdGljIHN0cmluZyB2YWx1ZSB3aGljaCBjYW4gYmUgdXNlZCB0byBmaWx0ZXJcbiAqIHN0cmluZ3MgYnkgYXNzZXRpbmcgdGhhdCB0aGV5IGhhdmUgYmVlbiBjcmVhdGVkIHZpYSB0aGlzIGNsYXNzLiBUaGVcbiAqIGB2YWx1ZWAgcHJvcGVydHkgcmV0dXJucyB0aGUgc3RyaW5nIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cbmNsYXNzIExpdGVyYWxTdHJpbmcge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB0aGlzLnZhbHVlID0gc3RyaW5nLnRvU3RyaW5nKCk7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gTGl0ZXJhbFN0cmluZyBzdHJpbmcgdmFsdWVcbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gbGl0ZXJhbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTGl0ZXJhbFN0cmluZ30gKi8odmFsdWUpLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi1saXRlcmFsIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbExpdGVyYWwgZnVuY3Rpb246ICR7dmFsdWV9YFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBodG1sVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50IH0gKi8odmFsdWUpLmlubmVySFRNTDtcbiAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gbGl0ZXJhbFZhbHVlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tdGVtcGxhdGUgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sIGZ1bmN0aW9uOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbi8qKlxuICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyB0aGF0IGNyZWF0ZXMgYW4gSFRNTCA8dGVtcGxhdGU+IGVsZW1lbnQgZnJvbSB0aGVcbiAqIGNvbnRlbnRzIG9mIHRoZSBzdHJpbmcuXG4gKlxuICogVGhpcyBhbGxvd3MgeW91IHRvIHdyaXRlIGEgUG9seW1lciBUZW1wbGF0ZSBpbiBKYXZhU2NyaXB0LlxuICpcbiAqIFRlbXBsYXRlcyBjYW4gYmUgY29tcG9zZWQgYnkgaW50ZXJwb2xhdGluZyBgSFRNTFRlbXBsYXRlRWxlbWVudGBzIGluXG4gKiBleHByZXNzaW9ucyBpbiB0aGUgSmF2YVNjcmlwdCB0ZW1wbGF0ZSBsaXRlcmFsLiBUaGUgbmVzdGVkIHRlbXBsYXRlJ3NcbiAqIGBpbm5lckhUTUxgIGlzIGluY2x1ZGVkIGluIHRoZSBjb250YWluaW5nIHRlbXBsYXRlLiAgVGhlIG9ubHkgb3RoZXJcbiAqIHZhbHVlcyBhbGxvd2VkIGluIGV4cHJlc3Npb25zIGFyZSB0aG9zZSByZXR1cm5lZCBmcm9tIGBodG1sTGl0ZXJhbGBcbiAqIHdoaWNoIGVuc3VyZXMgb25seSBsaXRlcmFsIHZhbHVlcyBmcm9tIEpTIHNvdXJjZSBldmVyIHJlYWNoIHRoZSBIVE1MLCB0b1xuICogZ3VhcmQgYWdhaW5zdCBYU1Mgcmlza3MuXG4gKlxuICogQWxsIG90aGVyIHZhbHVlcyBhcmUgZGlzYWxsb3dlZCBpbiBleHByZXNzaW9ucyB0byBoZWxwIHByZXZlbnQgWFNTXG4gKiBhdHRhY2tzOyBob3dldmVyLCBgaHRtbExpdGVyYWxgIGNhbiBiZSB1c2VkIHRvIGNvbXBvc2Ugc3RhdGljXG4gKiBzdHJpbmcgdmFsdWVzIGludG8gdGVtcGxhdGVzLiBUaGlzIGlzIHVzZWZ1bCB0byBjb21wb3NlIHN0cmluZ3MgaW50b1xuICogcGxhY2VzIHRoYXQgZG8gbm90IGFjY2VwdCBodG1sLCBsaWtlIHRoZSBjc3MgdGV4dCBvZiBhIGBzdHlsZWBcbiAqIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+Omhvc3R7IGNvbnRlbnQ6XCIuLi5cIiB9PC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHt0aGlzLnBhcnRpYWxUZW1wbGF0ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgcGFydGlhbFRlbXBsYXRlKCkgeyByZXR1cm4gaHRtbGA8c3Bhbj5QYXJ0aWFsITwvc3Bhbj5gOyB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gQ29uc3RydWN0ZWQgSFRNTFRlbXBsYXRlRWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IGZ1bmN0aW9uIGh0bWwoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gKi8oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgaHRtbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbi8qKlxuICogQW4gaHRtbCBsaXRlcmFsIHRhZyB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYGh0bWxgIHRvIGNvbXBvc2UuXG4gKiBhIGxpdGVyYWwgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPlxuICogICAgICAgICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAqICAgICAgICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZSgpfVxuICogICAgICAgICA8L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3N0YXRpY1ZhbHVlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBzdHlsZVRlbXBsYXRlKCkge1xuICogICAgICAgIHJldHVybiBodG1sTGl0ZXJhbGAuc2hhZG93ZWQgeyBiYWNrZ3JvdW5kOiBncmF5OyB9YDtcbiAqICAgICB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshTGl0ZXJhbFN0cmluZ30gQ29uc3RydWN0ZWQgbGl0ZXJhbCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWxMaXRlcmFsID0gZnVuY3Rpb24oc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIHJldHVybiBuZXcgTGl0ZXJhbFN0cmluZyh2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGxpdGVyYWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pKTtcbn07XG4iLCJpbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBDdWlCYXNlRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopIHtcbiAgICBsZXQgZXh0cmFzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9kYXRhX3RlbXBsYXRlO1xuICAgIGlmIChleHRyYXMpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYXMpKSB7XG4gICAgICAgIGV4dHJhcyA9IFtleHRyYXNdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhcy5tYXAoZXh0cmEgPT4gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgZXh0cmEsXG4gICAgICAgIGhhc3MsXG4gICAgICAgIGhhc3Muc3RhdGVzLFxuICAgICAgICBzdGF0ZU9iaixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgICAgLyogYXR0cmlidXRlPSAqLyB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlT2JqLnN0YXRlLFxuICAgICAgKSkuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQgIT09IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSkge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGV4dHJhLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQ7XG4gIH1cblxuICBoYXNFeHRyYShleHRyYSkge1xuICAgIHJldHVybiBleHRyYS5sZW5ndGggPiAwO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDdWlCYXNlRWxlbWVudDtcbiIsImltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgRHluYW1pY0VsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBlbGVtZW50TmFtZTogU3RyaW5nLFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ29ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKScsXG4gICAgXTtcbiAgfVxuXG4gIG9ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKSB7XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgIGVsZW1lbnROYW1lID8gZWxlbWVudE5hbWUudG9VcHBlckNhc2UoKSA6ICdESVYnLFxuICAgICAgeyBoYXNzLCBzdGF0ZU9iaiwgaW5EaWFsb2cgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy1lbGVtZW50JywgRHluYW1pY0VsZW1lbnQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcblxuaW1wb3J0ICcuL2R5bmFtaWMtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBEeW5hbWljV2l0aEV4dHJhIGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1jYXJkLWRpc3BsYXknKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5jb250cm9sLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IC00cHggLTE2cHggLTRweCAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGhhLXN0YXRlLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAgIGR5bmFtaWMtZWxlbWVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgICNvdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgI2xvY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICB9XG4gICAgICAjbG9jay5oYS1jb3Zlci1jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAuZXh0cmEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1zaXplOiAzNnB4O1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZTogMS4yZW07XG4gICAgICB9XG4gICAgICAuc3RhdGUge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgY2xhc3MkPSdbW2V4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKV1dIGhvcml6b250YWwgbGF5b3V0Jz5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tleHRyYU9ialZpc2libGVdXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCdcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPSdbW2V4dHJhT2JqXV0nXG4gICAgICAgICAgICAgICAgICBvbi1kb20tY2hhbmdlPSdleHRyYURvbUNoYW5nZWQnPlxuICAgICAgICAgIDxoYS1zdGF0ZS1sYWJlbC1iYWRnZSBoYXNzPSdbW2hhc3NdXScgc3RhdGU9J1tbaXRlbV1dJz48L2hhLXN0YXRlLWxhYmVsLWJhZGdlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkeW5hbWljLWVsZW1lbnRcbiAgICAgICAgICAgICAgICBjbGFzcz0nZmxleCdcbiAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgICAgIGVsZW1lbnQtbmFtZT0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDwvZHluYW1pYy1lbGVtZW50PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2lzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlcIiBvbi1jbGljaz0nY2xpY2tIYW5kbGVyJz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9ja11dJz5cbiAgICAgICAgICAgICAgICAgIDxpcm9uLWljb24gaWQ9XCJsb2NrXCIgY2xhc3MkPVwiW1tjb250cm9sRWxlbWVudF1dXCIgaWNvbj1cIm1kaTpsb2NrLW91dGxpbmVcIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdGUnPltbY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICBleHRyYU9iajoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIF9hdHRhY2hlZCknLFxuICAgICAgfSxcbiAgICAgIF9hdHRhY2hlZDogQm9vbGVhbixcbiAgICAgIGV4dHJhT2JqVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2F0dGFjaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBhdHRhY2hlZCkge1xuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZSB8fCAhYXR0YWNoZWQpIHJldHVybiBbXTtcbiAgICBsZXQgZXh0cmFCYWRnZXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYUJhZGdlcykpIHtcbiAgICAgIGV4dHJhQmFkZ2VzID0gW2V4dHJhQmFkZ2VzXTtcbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhQmFkZ2VzLm1hcCgoZXh0cmFCYWRnZSkgPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoZXh0cmFCYWRnZS5lbnRpdHlfaWQgJiYgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdKSB7XG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICB0aGlzLCBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0sIHRoaXMuaW5EaWFsb2csXG4gICAgICAgICAgLyogYWxsb3dIaWRkZW49ICovZmFsc2UpKTtcbiAgICAgIH0gZWxzZSBpZiAoZXh0cmFCYWRnZS5hdHRyaWJ1dGUgJiZcbiAgICAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgc3RhdGU6IFN0cmluZyhzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSksXG4gICAgICAgICAgX2RvbWFpbjogJ25vbmUnLFxuICAgICAgICAgIGVudGl0eV9pZDogbnVsbCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IGV4dHJhQmFkZ2UudW5pdCB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICAgICAgbGV0IGJsYWNrbGlzdCA9IGV4dHJhQmFkZ2UuYmxhY2tsaXN0X3N0YXRlcztcbiAgICAgIGlmIChibGFja2xpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmxhY2tsaXN0KSkge1xuICAgICAgICAgIGJsYWNrbGlzdCA9IFtibGFja2xpc3RdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChibGFja2xpc3Quc29tZSh2ID0+IFJlZ0V4cCh2KS50ZXN0KHJlc3VsdC5zdGF0ZS50b1N0cmluZygpKSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0Ll9lbnRpdHlEaXNwbGF5ID0gJyc7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pLmZpbHRlcihleHRyYUJhZGdlID0+IGV4dHJhQmFkZ2UgIT0gbnVsbCk7XG4gIH1cblxuICBjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZyB8fCAhZXh0cmFPYmopIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZXh0cmFPYmoubGVuZ3RoICE9PSAwO1xuICB9XG5cbiAgZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpIHtcbiAgICByZXR1cm4gZXh0cmFPYmpWaXNpYmxlID8gJ2V4dHJhJyA6ICcnO1xuICB9XG5cbiAgX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhpZGVfY29udHJvbDtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopIHtcbiAgICAvLyBoYUxvY2FsaXplIHJlbW92ZWQgaW4gMC42MVxuICAgIHJldHVybiBzdXBlci5jb21wdXRlU3RhdGVEaXNwbGF5KHRoaXMuaGFMb2NhbGl6ZSB8fCB0aGlzLmxvY2FsaXplLCBzdGF0ZU9iaik7XG4gIH1cblxuICBpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHMgfHxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jaztcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBjb25zdCBsb2NrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2NrJyk7XG4gICAgaWYgKGxvY2spIHtcbiAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vcGVuLW91dGxpbmUnO1xuICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJzAuMSc7XG4gICAgfVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vdXRsaW5lJztcbiAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICB9XG4gICAgfSwgNTAwMCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFwcGx5VGhlbWVzKGhhc3MsIGVsZW1lbnQsIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCc7XG4gICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICBlbGVtZW50LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgZXh0cmFEb21DaGFuZ2VkKCkge1xuICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpXG4gICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICB0aGlzLmFwcGx5VGhlbWVzKHRoaXMuaGFzcywgZWxlbSwgZWxlbS5zdGF0ZSk7XG4gICAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLXdpdGgtZXh0cmEnLCBEeW5hbWljV2l0aEV4dHJhKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgRXZlbnRzTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2V2ZW50cy1taXhpbi5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbVVpIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lci5FbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPjwvc3R5bGU+XG4gICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPSdtZGk6YXJyb3ctbGVmdCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdfYmFja0hhbmRsZXInXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPGRpdiBtYWluLXRpdGxlPkN1c3RvbSBVSSBzZXR0aW5nczwvZGl2PlxuICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT0nW1tpc1dpZGVdXSc+XG4gICAgICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9J0RldmljZSBuYW1lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgU2V0IGRldmljZSBuYW1lIHNvIHRoYXQgeW91IGNhbiByZWZlcmVuY2UgaXQgaW4gcGVyLWRldmljZSBzZXR0aW5nc1xuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPSdOYW1lJ1xuICAgICAgICAgICAgICB2YWx1ZT0ne3tuYW1lfX0nXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wYXBlci1jYXJkPlxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnbmFtZUNoYW5nZWQnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLm5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICB9XG5cbiAgbmFtZUNoYW5nZWQobmFtZSkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5zZXROYW1lKG5hbWUpO1xuICB9XG5cbiAgX2JhY2tIYW5kbGVyKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB0aGlzLmZpcmUoJ2xvY2F0aW9uLWNoYW5nZWQnKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS1jb25maWctY3VzdG9tLXVpJywgSGFDb25maWdDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhVGhlbWVkU2xpZGVyIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0taGEtdGhlbWVkLXNsaWRlci1tYXJnaW4sIGluaXRpYWwpO1xuICAgICAgfVxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXItcGluLXN0YXJ0LWNvbG9yOiAgdmFyKC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbi5pcy1vbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXNsaWRlciB7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWhhLXBhcGVyLXNsaWRlci13aWR0aCwgMjAwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItc2xpZGVyXG4gICAgICAgICBtaW49J1tbX3RoZW1lZE1pbl1dJ1xuICAgICAgICAgbWF4PSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1heFwiLCBtYXgpXV0nXG4gICAgICAgICBwaW49J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwicGluXCIsIHBpbildXSdcbiAgICAgICAgIGNsYXNzJD0nW1tjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIF90aGVtZWRNaW4pXV0nIHZhbHVlPSdbW3ZhbHVlXV0nXG4gICAgICAgICBvbi1jaGFuZ2U9J3ZhbHVlQ2hhbmdlZCc+XG4gICAgPC9wYXBlci1zbGlkZXI+XG4gICAgYDtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbiA9ICF0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoaXMudGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbik7XG4gICAgdGhpcy5jb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoaXMudGhlbWUsIHRoaXMuZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgIH0sXG4gICAgICBwaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlzT246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICB0aGVtZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX3RoZW1lZE1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWluXCIsIG1pbiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpJyxcbiAgICBdO1xuICB9XG5cbiAgY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKSB7XG4gICAgdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkID0gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZShcbiAgICAgIHRoZW1lLCAncmVwb3J0X3doZW5fbm90X2NoYW5nZWQnLCAhZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBhdHRyLCBkZWYpIHtcbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGlmIChhdHRyIGluIHRoZW1lKSB7XG4gICAgICAgIHJldHVybiB0aGVtZVthdHRyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgdGhlbWVkTWluKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChpc09uKSB7XG4gICAgICByZXN1bHQgKz0gJ2lzLW9uICc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pIHx8IHRoZW1lZE1pbiA9PT0gMCkge1xuICAgICAgLy8gSWYgb2ZmV2hlbk1pbiBpcyBlbmFibGVkIGRvbid0IGN1c3RvbWl6ZS5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3Jlc3VsdH1kaXNhYmxlLW9mZi13aGVuLW1pbmA7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCAmJiB0aGlzLnZhbHVlID09PSBldi50YXJnZXQudmFsdWUpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLXRoZW1lZC1zbGlkZXInLCBIYVRoZW1lZFNsaWRlcik7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcbmltcG9ydCBzdGF0ZUNhcmRUeXBlIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfY2FyZF90eXBlLmpzJztcblxuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyc7XG5cbmNvbnN0IFNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTID0gWydjb25maWd1cmF0b3InXTtcbmNvbnN0IERPTUFJTl9UT19TTElERVJfU1VQUE9SVCA9IHtcbiAgbGlnaHQ6IDEsIC8vIFNVUFBPUlRfQlJJR0hUTkVTU1xuICBjb3ZlcjogNCwgLy8gU1VQUE9SVF9TRVRfUE9TSVRJT05cbiAgY2xpbWF0ZTogMSwgLy8gU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbn07XG5jb25zdCBUWVBFX1RPX0NPTlRST0wgPSB7XG4gIHRvZ2dsZTogJ2hhLWVudGl0eS10b2dnbGUnLFxuICBkaXNwbGF5OiAnJyxcbiAgY292ZXI6ICdoYS1jb3Zlci1jb250cm9scycsXG59O1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZEN1c3RvbVVpIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiknLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gJ0RJVicgJiZcbiAgICAgICAgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykgfHwgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2hpbGQtY2FyZCcpKSkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAvLyBTaW5jZSB0aGlzIGRvZXNuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIC0gbm8gbmVlZCB0byBjbGVhciBpdC5cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLCAndmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCBpbmhlcml0KScpO1xuXG4gICAgICAvLyBQb2x5ZmlsbCAndXBkYXRlU3R5bGVzJy5cbiAgICAgIGlmICghY29udGFpbmVyLnVwZGF0ZVN0eWxlcykge1xuICAgICAgICBjb250YWluZXIudXBkYXRlU3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBzdHlsZXNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VkKHRoaXMuaGFzcywgdGhpcy5pbkRpYWxvZywgdGhpcy5zdGF0ZU9iaik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICB0aGlzLl9jb250YWluZXIsIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgJ2RlZmF1bHQnKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBiYWRnZU1vZGUoaGFzcywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIGNvbnN0IHN0YXRlcyA9IFtdO1xuICAgIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbaWRdO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBJRCAke2lkfSBpbiBncm91cCAke3N0YXRlT2JqLmVudGl0eV9pZH1gKTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0IHx8XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0LmluY2x1ZGVzKHN0YXRlLmVudGl0eV9pZCkpIHtcbiAgICAgICAgICBzdGF0ZXMucHVzaCh3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBzdGF0ZSwgZmFsc2UgLyogaW5EaWFsb2cgKi8sIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZU9iaik7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykpIHtcbiAgICAgICAgICBwYXJhbXMubWFyZ2luID0gJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLW1hcmdpbiwgMCknO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAnSEEtQkFER0VTLUNBUkQnLFxuICAgICAgeyBoYXNzLCBzdGF0ZXMgfSk7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIHdpZHRoOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtd2lkdGgsIGluaXRpYWwpJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtdGV4dC1hbGlnbiwgaW5pdGlhbCknLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubGFzdENoaWxkLnN0eWxlLmZvbnRTaXplID0gJzg1JSc7XG5cbiAgICAvLyBTaW5jZSB0aGlzIHZhcmlhYmxlIG9ubHkgYWZmZWN0cyBiYWRnZXMgbW9kZSAtIG5vIG5lZWQgdG8gY2xlYW4gaXQgdXAuXG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oYS1zdGF0ZS1sYWJlbC1iYWRnZS1tYXJnaW4tYm90dG9tJywgJzAnKTtcbiAgfVxuXG4gIGNsZWFuQmFkZ2VTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnIH0pO1xuICB9XG5cbiAgYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopIHtcbiAgICBsZXQgdGhlbWVUYXJnZXQgPSB0aGlzO1xuICAgIGxldCB0aGVtZU5hbWUgPSAnZGVmYXVsdCc7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhlbWVUYXJnZXQgPSB0aGlzLl9jb250YWluZXI7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICB0aGVtZU5hbWUgPSBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lO1xuICAgIH1cbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgIHRoZW1lVGFyZ2V0LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgbWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSB7XG4gICAgaWYgKCFtb2RpZmllZE9iaikge1xuICAgICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNsaWRlckVsaWdpYmxlXyhkb21haW4sIG9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiZcbiAgICAgIChET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmIG9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykgJiZcbiAgICAgIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAmJiBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgIT09ICduby1zbGlkZXInO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MgfHwgIXRoaXMuX2lzQXR0YWNoZWQpIHJldHVybjtcbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICAgIGNvbnN0IG1vZGlmaWVkT2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgdGhpcywgc3RhdGVPYmosIGluRGlhbG9nLCB0cnVlIC8qIGFsbG93SGlkZGVuICovKTtcblxuICAgIGlmICh0aGlzLm1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikpIHJldHVybjtcblxuICAgIHRoaXMuYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopO1xuXG4gICAgaWYgKCFpbkRpYWxvZyAmJiBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSA9PT0gJ2JhZGdlcycpIHtcbiAgICAgIHRoaXMuYmFkZ2VNb2RlKGhhc3MsIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfVxuICB9XG5cbiAgcmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgdGhpcy5jbGVhbkJhZGdlU3R5bGUoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGhhc3MsXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIGluRGlhbG9nLFxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxTdGF0ZUNhcmRUeXBlID0gc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaik7XG4gICAgbGV0IGN1c3RvbVN0YXRlQ2FyZFR5cGU7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5O1xuXG4gICAgaWYgKGRvbWFpbiA9PT0gJ2xpZ2h0JyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gICAgICAgIHNlcnZpY2VNaW46ICd0dXJuX29mZicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICd0dXJuX29uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnYnJpZ2h0bmVzcycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY292ZXItY29udHJvbHMnLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ2Nsb3NlX2NvdmVyJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF9jb3Zlcl9wb3NpdGlvbicsXG4gICAgICAgIHNldFZhbHVlTmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnY3VycmVudF9wb3NpdGlvbicsXG4gICAgICAgIG5hbWVPbjogJ29wZW4nLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjbGltYXRlJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY2xpbWF0ZS1zdGF0ZScsXG4gICAgICAgIG1pbjogc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcCB8fCAtMTAwLFxuICAgICAgICBtYXg6IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXAgfHwgMjAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHZhbHVlTmFtZTogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgbmFtZU9uOiAnJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV07XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZCAmJlxuICAgICAgICAgICAgICAgIVNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTLmluY2x1ZGVzKG9yaWdpbmFsU3RhdGVDYXJkVHlwZSkpIHtcbiAgICAgIHBhcmFtcy5pbkRpYWxvZyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gJyc7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudDtcbiAgICB9XG5cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgKHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgfHwgY3VzdG9tU3RhdGVDYXJkVHlwZSB8fCBgU1RBVEUtQ0FSRC0ke29yaWdpbmFsU3RhdGVDYXJkVHlwZX1gKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcGFyYW1zKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLWN1c3RvbS11aScsIFN0YXRlQ2FyZEN1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuaW1wb3J0ICcuL2hhLXRoZW1lZC1zbGlkZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLnNlY29uZC1saW5lLCAuc3RhdGUtYW5kLXRvZ2dsZSwgLnN0YXRlLWluZm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1hbmQtdG9nZ2xlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc2Vjb25kLWxpbmUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kLWxpbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgIH1cbiAgICAgIC5zdHJldGNoIC5zZWNvbmQtbGluZSwgLnN0cmV0Y2ggaGEtdGhlbWVkLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWhhLXBhcGVyLXNsaWRlci13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWluZm8ge1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICBoYS10aGVtZWQtc2xpZGVyLCAudG9wLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAudG9wLXdyYXBwZXIuc3RyZXRjaCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcyQ9J2hvcml6b250YWwgbGF5b3V0IGZsZXggdG9wLXdyYXBwZXIgW1tfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpXV0nPlxuICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkIGZsZXgtYXV0byBzdGF0ZS1hbmQtdG9nZ2xlJz5cbiAgICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvIGZsZXgtYXV0bydcbiAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2JyZWFrU2xpZGVyXV0nIGNsYXNzPSdoaWRkZW4nPlxuICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc2hvd1NsaWRlcl1dJyByZXN0YW1wPlxuICAgICAgICA8ZGl2IGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBmbGV4LWF1dG8gZW5kLWp1c3RpZmllZCBzZWNvbmQtbGluZSc+XG4gICAgICAgICAgPGhhLXRoZW1lZC1zbGlkZXJcbiAgICAgICAgICAgIGlkPSdzbGlkZXInXG4gICAgICAgICAgICBtYXg9W1ttYXhdXVxuICAgICAgICAgICAgbWluPVtbbWluXV1cbiAgICAgICAgICAgIHRoZW1lPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuc2xpZGVyX3RoZW1lXV0nXG4gICAgICAgICAgICBpcy1vbj0nW1tpc09uKHN0YXRlT2JqLCBuYW1lT24pXV0nXG4gICAgICAgICAgICB2YWx1ZT0ne3tzbGlkZXJWYWx1ZX19J1xuICAgICAgICAgICAgZGlzYWJsZS1vZmYtd2hlbi1taW49J3t7ZGlzYWJsZU9mZldoZW5NaW59fSdcbiAgICAgICAgICAgIG9uLWNoYW5nZT0nc2xpZGVyQ2hhbmdlZCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdzdG9wUHJvcGFnYXRpb24nPlxuICAgICAgICAgIDwvaGEtdGhlbWVkLXNsaWRlcj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWJyZWFrU2xpZGVyXV0nPlxuICAgICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRvbWFpbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1pbjogU3RyaW5nLFxuICAgICAgc2VydmljZU1heDogU3RyaW5nLFxuICAgICAgdmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICBzZXRWYWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIG5hbWVPbjogeyB0eXBlOiBTdHJpbmcsIHZhbHVlOiAnb24nIH0sXG4gICAgICBtaW46IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMCB9LFxuICAgICAgbWF4OiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDI1NSB9LFxuXG4gICAgICBzbGlkZXJWYWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiBCb29sZWFuLFxuICAgICAgbW9kZTogU3RyaW5nLFxuICAgICAgc3RyZXRjaFNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYnJlYWtTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGhpZGVTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGxpbmVUb29Mb25nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBtaW5MaW5lQnJlYWs6IE51bWJlcixcbiAgICAgIG1heExpbmVCcmVhazogTnVtYmVyLFxuICAgICAgc2hvd1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX29uSXJvblJlc2l6ZSA9IHRoaXMuX29uSXJvblJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX29uSXJvblJlc2l6ZSk7XG4gICAgdGhpcy5faXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKScsXG4gICAgXTtcbiAgfVxuXG4gIF93YWl0Rm9yTGF5b3V0KCkge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0ZWQpIHJldHVybjtcbiAgICB0aGlzLl9zZXRNb2RlKCk7XG4gICAgaWYgKHRoaXMuX2ZyYW1lSWQpIHJldHVybjtcbiAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gZmFsc2U7XG4gICAgdGhpcy5fZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fZnJhbWVJZCA9IG51bGw7XG4gICAgICB0aGlzLnJlYWR5VG9Db21wdXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uSXJvblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldE1vZGUoKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgaGlkZVNsaWRlcjogdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInICYmIHRoaXMubGluZVRvb0xvbmcsXG4gICAgICBicmVha1NsaWRlcjpcbiAgICAgICAgICAgKHRoaXMubW9kZSA9PT0gJ2JyZWFrLXNsaWRlcicgfHwgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSAmJlxuICAgICAgICAgICB0aGlzLmxpbmVUb29Mb25nLFxuICAgIH07XG4gICAgaWYgKCF0aGlzLnNob3dTbGlkZXIpIHtcbiAgICAgIG9iai5icmVha1NsaWRlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICB9XG5cbiAgX29uSXJvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVhZHlUb0NvbXB1dGUpIHJldHVybjtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnbm8tc2xpZGVyJykge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgaGlkZVNsaWRlcjogdHJ1ZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldkJyZWFrU2xpZGVyID0gdGhpcy5icmVha1NsaWRlcjtcbiAgICBjb25zdCBwcmV2SGlkZVNsaWRlciA9IHRoaXMuaGlkZVNsaWRlcjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuJDtcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPT09IDApIHJldHVybjtcbiAgICBpZiAoY29udGFpbmVyV2lkdGggPD0gdGhpcy5taW5MaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyV2lkdGggPj0gdGhpcy5tYXhMaW5lQnJlYWspIHtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZIaWRlU2xpZGVyICYmIHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHVuaGlkZSB0aGUgc2xpZGVyIGluIG9yZGVyIHRvIHJlY2FsY3VsYXRlIGhlaWdodC5cbiAgICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgc3RhdGVIZWlnaHQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLnN0YXRlLWluZm8nKS5jbGllbnRIZWlnaHQ7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gY29udGFpbmVySGVpZ2h0ID4gc3RhdGVIZWlnaHQgKiAxLjU7XG4gICAgICBpZiAodGhpcy5saW5lVG9vTG9uZykge1xuICAgICAgICB0aGlzLm1pbkxpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgfSBlbHNlIGlmICghcHJldkJyZWFrU2xpZGVyKSB7XG4gICAgICAgIHRoaXMubWF4TGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgfVxuXG4gIF9jb21wdXRlV3JhcENsYXNzKG1vZGUsIHN0cmV0Y2hTbGlkZXIsIGxpbmVUb29Mb25nLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZS1saW5lJykge1xuICAgICAgcmV0dXJuICdub3dyYXAnO1xuICAgIH1cbiAgICBpZiAoc3RyZXRjaFNsaWRlciAmJiBsaW5lVG9vTG9uZykge1xuICAgICAgcmV0dXJuICdzdHJldGNoIHdyYXAnO1xuICAgIH1cbiAgICByZXR1cm4gJ3dyYXAnO1xuICB9XG5cbiAgX3Nob3dTbGlkZXIoaW5EaWFsb2csIHN0YXRlT2JqLCBoaWRlU2xpZGVyKSB7XG4gICAgaWYgKGluRGlhbG9nIHx8IGhpZGVTbGlkZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBjb25zdCBwYXJhbSA9IHsgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9O1xuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSByZXR1cm47XG4gICAgbGV0IHRhcmdldCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjc2xpZGVyJyk7XG4gICAgaWYgKGV2LnRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAvLyBObyBTaGFkb3cgRE9NIC0gd2UgaGF2ZSBhY2Nlc3MgdG8gb3JpZ2luYWwgdGFyZ2V0LlxuICAgICAgKHsgdGFyZ2V0IH0gPSBldik7XG4gICAgfSBlbHNlIGlmIChldi5wYXRoKSB7XG4gICAgICBbdGFyZ2V0XSA9IGV2LnBhdGg7XG4gICAgfSBlbHNlIGlmIChldi5jb21wb3NlZFBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYuY29tcG9zZWRQYXRoKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gMCB8fCAodmFsdWUgPD0gdGFyZ2V0Lm1pbiAmJiAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbikpIHtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWluLCBwYXJhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtW3RoaXMuc2V0VmFsdWVOYW1lIHx8IHRoaXMudmFsdWVOYW1lXSA9IHZhbHVlO1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNYXgsIHBhcmFtKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmosIG5hbWVPbiwgdmFsdWVOYW1lKSB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgc2xpZGVyVmFsdWU6IHRoaXMuaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSA/IHN0YXRlT2JqLmF0dHJpYnV0ZXNbdmFsdWVOYW1lXSA6IDAsXG4gICAgfTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB7XG4gICAgICAgIG1pbkxpbmVCcmVhazogMCxcbiAgICAgICAgbWF4TGluZUJyZWFrOiA5OTksXG4gICAgICAgIGhpZGVTbGlkZXI6IGZhbHNlLFxuICAgICAgICBicmVha1NsaWRlcjogZmFsc2UsXG4gICAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgICAgbW9kZTogc3RhdGVPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUsXG4gICAgICAgIHN0cmV0Y2hTbGlkZXI6ICEhc3RhdGVPYmouYXR0cmlidXRlcy5zdHJldGNoX3NsaWRlcixcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgICBpZiAoc3RhdGVPYmopIHtcbiAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBpc09uKHN0YXRlT2JqLCBuYW1lT24pIHtcbiAgICByZXR1cm4gc3RhdGVPYmogJiYgKCFuYW1lT24gfHwgc3RhdGVPYmouc3RhdGUgPT09IG5hbWVPbik7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJywgU3RhdGVDYXJkV2l0aFNsaWRlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkJz5cbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgY2xhc3M9J3N0YXRlLWluZm8nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJ1xuICAgICAgICAgIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgPGRpdj5bW2l0ZW1dXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYVxuICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJ1xuICAgICAgICAgIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz5cbiAgICAgIDwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIpO1xuIiwiLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuZXhwb3J0IGRlZmF1bHQgKHN1cGVyQ2xhc3MpID0+IHtcbiAgLyoqXG4gICAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gICAqL1xuICBjbGFzcyBFdmVudHNNaXhpbiBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAgICogICBwYXlsb2FkLlxuICAgICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICAqL1xuICAgIGZpcmUodHlwZSwgZGV0YWlsID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgICAgICBidWJibGVzOiBvcHRpb25zLmJ1YmJsZXMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IEJvb2xlYW4ob3B0aW9ucy5jYW5jZWxhYmxlKSxcbiAgICAgICAgY29tcG9zZWQ6IG9wdGlvbnMuY29tcG9zZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmNvbXBvc2VkLFxuICAgICAgfSk7XG4gICAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgICBjb25zdCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IHRoaXM7XG4gICAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gRXZlbnRzTWl4aW47XG59O1xuIiwiaW1wb3J0IGhhc3NBdHRyaWJ1dGVzVXRpbCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsLmpzJztcblxud2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsIHx8IHt9O1xuY29uc3QgU1VQUE9SVEVEX1NMSURFUl9NT0RFUyA9IFtcbiAgJ3NpbmdsZS1saW5lJywgJ2JyZWFrLXNsaWRlcicsICdicmVhay1zbGlkZXItdG9nZ2xlJywgJ2hpZGUtc2xpZGVyJywgJ25vLXNsaWRlcicsXG5dO1xuXG5jb25zdCBjdXN0b21VaUF0dHJpYnV0ZXMgPSB7XG4gIGdyb3VwOiB1bmRlZmluZWQsXG4gIGRldmljZTogdW5kZWZpbmVkLFxuICB0ZW1wbGF0ZXM6IHVuZGVmaW5lZCxcbiAgc3RhdGU6IHVuZGVmaW5lZCxcbiAgX3N0YXRlRGlzcGxheTogdW5kZWZpbmVkLFxuICBjb250cm9sX2VsZW1lbnQ6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgc3RhdGVfY2FyZF9tb2RlOiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBsaWdodDogU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgY292ZXI6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgIGNsaW1hdGU6IFNVUFBPUlRFRF9TTElERVJfTU9ERVMuY29uY2F0KCdiYWRnZXMnKSxcbiAgICAgICcqJzogWydiYWRnZXMnXSxcbiAgICB9LFxuICB9LFxuICBzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgYmFkZ2VzX2xpc3Q6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHNob3dfbGFzdF9jaGFuZ2VkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2NvbnRyb2w6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGV4dHJhX2RhdGFfdGVtcGxhdGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgZXh0cmFfYmFkZ2U6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHN0cmV0Y2hfc2xpZGVyOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBzbGlkZXJfdGhlbWU6IHsgdHlwZTogJ2pzb24nIH0sXG4gIHRoZW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gIGNvbmZpcm1fY29udHJvbHM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIGNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICBoaWRlX2luX2RlZmF1bHRfdmlldzogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgaWNvbl9jb2xvcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxufTtcbndpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTID0gaGFzc0F0dHJpYnV0ZXNVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVM7XG53aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gaGFzc0F0dHJpYnV0ZXNVdGlsLlVOS05PV05fVFlQRTtcbk9iamVjdC5hc3NpZ24od2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGN1c3RvbVVpQXR0cmlidXRlcyk7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldFZpZXdFbnRpdGllcyBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF92aWV3X2VudGl0aWVzLmpzJztcblxuaW1wb3J0ICcuLi9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzJztcbmltcG9ydCBWRVJTSU9OIGZyb20gJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgJy4vaGFzcy1hdHRyaWJ1dGUtdXRpbC5qcyc7XG5cbndpbmRvdy5jdXN0b21VSSA9IHdpbmRvdy5jdXN0b21VSSB8fCB7XG4gIFNVUFBPUlRFRF9TTElERVJfTU9ERVM6IFtcbiAgICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbiAgXSxcblxuICBkb21Ib3N0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gZG9jdW1lbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtLmdldFJvb3ROb2RlKCk7XG4gICAgcmV0dXJuIChyb290IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyAvKiogQHR5cGUge1NoYWRvd1Jvb3R9ICovIChyb290KS5ob3N0IDogcm9vdDtcbiAgfSxcblxuICBsaWdodE9yU2hhZG93KGVsZW0sIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGVsZW0uc2hhZG93Um9vdCA/XG4gICAgICBlbGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOlxuICAgICAgZWxlbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfSxcblxuICBnZXRFbGVtZW50SGllcmFyY2h5KHJvb3QsIGhpZXJhcmNoeSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlbGVtID0gaGllcmFyY2h5LnNoaWZ0KCk7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3cocm9vdCwgZWxlbSksIGhpZXJhcmNoeSk7XG4gICAgfVxuICAgIHJldHVybiByb290O1xuICB9LFxuXG4gIGdldENvbnRleHQoZWxlbSkge1xuICAgIGlmIChlbGVtLl9jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW0uX2NvbnRleHQgPSBbXTtcbiAgICAgIGZvciAobGV0IGVsZW1lbnQgPSAoZWxlbS50YWdOYW1lID09PSAnSEEtRU5USVRJRVMtQ0FSRCcgPyB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtKSA6IGVsZW0pO1xuICAgICAgICBlbGVtZW50OyBlbGVtZW50ID0gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbWVudCkpIHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICBjYXNlICdIQS1FTlRJVElFUy1DQVJEJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5KSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50Lmdyb3VwRW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkgPT09IGZhbHNlICYmIGVsZW1lbnQuc3RhdGVzICYmIGVsZW1lbnQuc3RhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goYGdyb3VwLiR7Y29tcHV0ZVN0YXRlRG9tYWluKGVsZW1lbnQuc3RhdGVzWzBdKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ01PUkUtSU5GTy1HUk9VUCc6XG4gICAgICAgICAgY2FzZSAnU1RBVEUtQ0FSRC1DT05URU5UJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LnN0YXRlT2JqLmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIQS1DQVJEUyc6XG4gICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpIHx8ICdkZWZhdWx0X3ZpZXcnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbS5fY29udGV4dC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtLl9jb250ZXh0O1xuICB9LFxuXG4gIGZpbmRNYXRjaChrZXksIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHJldHVybiBudWxsO1xuICAgIGlmIChvcHRpb25zW2tleV0pIHJldHVybiBrZXk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbmQob3B0aW9uID0+IGtleS5tYXRjaChgXiR7b3B0aW9ufSRgKSk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2gobmFtZSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VbbWF0Y2hdKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0Q29udGV4dChlbGVtKTtcbiAgICBpZiAoIWNvbnRleHQpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCkge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG4gICAgY29udGV4dC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKGMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYXR0cmlidXRlcywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBfc2V0S2VlcChvYmosIHZhbHVlKSB7XG4gICAgaWYgKG9iai5fY3VpX2tlZXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gb2JqLl9jdWlfa2VlcCAmJiB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFhdHRyaWJ1dGVzLnRlbXBsYXRlcykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCB0cnVlKTtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgbmV3QXR0cmlidXRlcyA9IHt9O1xuICAgIGxldCBoYXNHbG9iYWwgPSBmYWxzZTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMudGVtcGxhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gYXR0cmlidXRlcy50ZW1wbGF0ZXNba2V5XTtcbiAgICAgIGlmICh0ZW1wbGF0ZS5tYXRjaCgvXFxiKGVudGl0aWVzfGhhc3MpXFxiLykpIHtcbiAgICAgICAgaGFzR2xvYmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgdGVtcGxhdGUsIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMsXG4gICAgICAgIChzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzICYmIHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXNba2V5XSkgfHxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSxcbiAgICAgICAgc3RhdGVPYmoudW50ZW1wbGF0ZWRfc3RhdGUgfHwgc3RhdGVPYmouc3RhdGUpO1xuICAgICAgLy8gSW4gY2FzZSBvZiBudWxsIGRvbid0IHNldCB0aGUgdmFsdWUuXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgIG5ld0F0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ3N0YXRlJykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLnN0YXRlKSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnX3N0YXRlRGlzcGxheScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5KSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IGF0dHJpYnV0ZXNba2V5XSkge1xuICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosICFoYXNHbG9iYWwpO1xuICAgIGlmICghaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcyA9PT0gYXR0cmlidXRlcykge1xuICAgICAgLy8gV2UgYXJlIG9wZXJhdGluZyBvbiByZWFsIGF0dHJpYnV0ZXMuIFJlcGxhY2UgdGhlbS5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIG5ld0F0dHJpYnV0ZXMpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnc3RhdGUnKSkge1xuICAgICAgICBpZiAobmV3QXR0cmlidXRlcy5zdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5zdGF0ZSA9IFN0cmluZyhuZXdBdHRyaWJ1dGVzLnN0YXRlKTtcbiAgICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGUgPSBzdGF0ZU9iai5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnX3N0YXRlRGlzcGxheScpKSB7XG4gICAgICAgIHJlc3VsdC5fc3RhdGVEaXNwbGF5ID0gbmV3QXR0cmlidXRlcy5fc3RhdGVEaXNwbGF5O1xuICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5ID0gc3RhdGVPYmouX3N0YXRlRGlzcGxheTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChyZXN1bHQsICFoYXNHbG9iYWwpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gT3BlcmF0aW5nIG9uIGNvbnRleHQtYXdhcmUgYXR0cmlidXRlcy4gUmV0dXJuIHNoYWxsb3cgY29weSBvZiBvYmplY3QuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmopIHtcbiAgICBjb25zdCBuZXdSZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIHN0YXRlT2JqLmF0dHJpYnV0ZXMpO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGVzKG9iaikge1xuICAgICAgaWYgKCFvYmopIHJldHVybjtcbiAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgICAgIGhhc3MsIHN0YXRlcywgbmV3UmVzdWx0LCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgaGFzQ2hhbmdlcyB8PSAocmVzdWx0ICE9PSBuZXdSZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmRldmljZSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmdyb3VwKTtcbiAgICB9XG5cbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICBpZiAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaikgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICBpZiAoaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlT2JqO1xuICB9LFxuXG4gIGFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIHN0YXRlOiBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpLFxuICAgICAgdW50ZW1wbGF0ZWRfYXR0cmlidXRlczogc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGVPYmoubGFzdF9jaGFuZ2VkLFxuICAgIH07XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3QoZWxlbSwgc3RhdGVPYmosIGluRGlhbG9nLCBhbGxvd0hpZGRlbikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGxldCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBvYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgZWxlbS5oYXNzLCBlbGVtLmhhc3Muc3RhdGVzLCBvYmosIG9iai5hdHRyaWJ1dGVzKTtcblxuICAgIGlmIChvYmogIT09IHN0YXRlT2JqICYmIG9iai5hdHRyaWJ1dGVzLmhpZGRlbiAmJiBhbGxvd0hpZGRlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZml4R3JvdXBUaXRsZXMoKSB7XG4gICAgY29uc3QgaG9tZUFzc2lzdGFudE1haW4gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJ10pO1xuICAgIGlmIChob21lQXNzaXN0YW50TWFpbiA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcywgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhvbWVBc3Npc3RhbnRNYWluLCBbXG4gICAgICAncGFydGlhbC1jYXJkcycsXG4gICAgICAnaGEtY2FyZHNbdmlldy12aXNpYmxlXSddKTtcbiAgICBpZiAoaGFDYXJkcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYUNhcmRzLCAnLm1haW4nKSB8fCBoYUNhcmRzLiQubWFpbjtcbiAgICBjb25zdCBjYXJkcyA9IG1haW4ucXVlcnlTZWxlY3RvckFsbCgnaGEtZW50aXRpZXMtY2FyZCcpO1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmIChjYXJkLmdyb3VwRW50aXR5KSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICBjYXJkLFxuICAgICAgICAgIGNhcmQuZ3JvdXBFbnRpdHksXG4gICAgICAgICAgZmFsc2UgLyogaW5EaWFsb2cgKi8sXG4gICAgICAgICAgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pO1xuICAgICAgICBpZiAob2JqICE9PSBjYXJkLmdyb3VwRW50aXR5ICYmIG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUpIHtcbiAgICAgICAgICBjb25zdCBuYW1lRWxlbSA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGNhcmQsICcubmFtZScpO1xuICAgICAgICAgIG5hbWVFbGVtLnRleHRDb250ZW50ID0gb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGNvbnRyb2xDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLWNhcmRzJ10pO1xuICAgIGlmIChwYXJ0aWFsQ2FyZHMgPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zLmJpbmQobnVsbCwgY29sdW1ucyksXG4gICAgICAgIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwYXJ0aWFsQ2FyZHMubXFscy5mb3JFYWNoKChtcWwpID0+IHtcbiAgICAgIG1xbC5yZW1vdmVMaXN0ZW5lcihwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlKTtcbiAgICB9KTtcbiAgICBwYXJ0aWFsQ2FyZHMubXFscyA9IGNvbHVtbnMubWFwKCh3aWR0aCkgPT4ge1xuICAgICAgY29uc3QgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7d2lkdGh9cHgpYCk7XG4gICAgICBtcWwuYWRkTGlzdGVuZXIocGFydGlhbENhcmRzLmhhbmRsZVdpbmRvd0NoYW5nZSk7XG4gICAgICByZXR1cm4gbXFsO1xuICAgIH0pO1xuICAgIHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UoKTtcbiAgfSxcblxuICB1c2VDdXN0b21pemVyKCkge1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgY29uc3QgY3VzdG9taXplciA9IG1haW4uaGFzcy5zdGF0ZXNbJ2N1c3RvbWl6ZXIuY3VzdG9taXplciddO1xuICAgIGlmICghY3VzdG9taXplcikgcmV0dXJuO1xuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMpIHtcbiAgICAgIGlmICh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgJiYgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpIHtcbiAgICAgICAgY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgYXR0cikpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2F0dHJdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUNvbmZpZ1BhbmVsKCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGhhUGFuZWxDb25maWcgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLXBhbmVsLXJlc29sdmVyJyxcbiAgICAgICdoYS1wYW5lbC1jb25maWcnXSk7XG4gICAgaWYgKCFoYVBhbmVsQ29uZmlnKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsLCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYUNvbmZpZ05hdmlnYXRpb24gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShoYVBhbmVsQ29uZmlnLCBbXG4gICAgICAnaGEtY29uZmlnLWRhc2hib2FyZCcsXG4gICAgICAnaGEtY29uZmlnLW5hdmlnYXRpb24nXSk7XG4gICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbikge1xuICAgICAgLy8gSGFDb25maWdOYXZpZ2F0aW9uIHN0YXJ0ZWQgdXNpbmcgbG9jYWxpemUgb24gMjEuMDEuMjAxOFxuICAgICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSAmJiAhaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCA9IHRydWU7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZCA9IChoYXNzLCBwYWdlKSA9PlxuICAgICAgICAgIHBhZ2UgPT09ICdjdXN0b211aScgfHwgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQoaGFzcywgcGFnZSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnQ3VzdG9tIFVJJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdTZXRVSSB0d2Vha3MnIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFoYUNvbmZpZ05hdmlnYXRpb24ucGFnZXMuc29tZShjb25mID0+IGNvbmYgPT09ICdjdXN0b211aScgfHwgY29uZi5kb21haW4gPT09ICdjdXN0b211aScpKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5wdXNoKCdwYWdlcycsIGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSA/ICdjdXN0b211aScgOiB7XG4gICAgICAgICAgZG9tYWluOiAnY3VzdG9tdWknLFxuICAgICAgICAgIGNhcHRpb246ICdDdXN0b20gVUknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IFVJIHR3ZWFrcy4nLFxuICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEhhQ29uZmlnQ3VzdG9tVWkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGEtY29uZmlnLWN1c3RvbS11aScpO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5pc1dpZGUgPSBoYVBhbmVsQ29uZmlnLmlzV2lkZTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuc2V0QXR0cmlidXRlKCdwYWdlLW5hbWUnLCAnY3VzdG9tdWknKTtcbiAgICAgIHJldHVybiBoYUNvbmZpZ0N1c3RvbVVpO1xuICAgIH07XG5cbiAgICBjb25zdCBpcm9uUGFnZXMgPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYVBhbmVsQ29uZmlnLCAnaXJvbi1wYWdlcycpO1xuICAgIGlmIChpcm9uUGFnZXMpIHtcbiAgICAgIGlmIChpcm9uUGFnZXMubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgaXJvblBhZ2VzLmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgICBpcm9uUGFnZXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1pdGVtcy1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpKSB7XG4gICAgICAgICAgICBpcm9uUGFnZXMuc2VsZWN0KCdjdXN0b211aScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBoYVBhbmVsQ29uZmlnLnNoYWRvd1Jvb3QgfHwgaGFQYW5lbENvbmZpZztcbiAgICAgIGlmIChyb290Lmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICB9XG4gICAgICBjb25zdCB2aXNpYmxlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKTtcbiAgICAgIHJvb3QubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gdmlzaWJsZSA/ICcnIDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsU3RhdGVzSG9vaygpIHtcbiAgICBjb25zdCBob21lQXNzaXN0YW50ID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdob21lLWFzc2lzdGFudCcpO1xuICAgIGlmICghaG9tZUFzc2lzdGFudCB8fCAhaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MpIHJldHVybjtcbiAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZSA9IGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzO1xuICAgIGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzID0gZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIGNvbnN0IHsgaGFzcyB9ID0gdGhpcztcbiAgICAgIGlmIChvYmouc3RhdGVzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9iai5zdGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG9iai5zdGF0ZXNba2V5XTtcbiAgICAgICAgICBpZiAoZW50aXR5Ll9jdWlfa2VlcCkgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IG5ld0VudGl0eSA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIG9iai5zdGF0ZXMsIGVudGl0eSk7XG4gICAgICAgICAgaWYgKGhhc3Muc3RhdGVzICYmIGVudGl0eSAhPT0gaGFzcy5zdGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgLy8gTmV3IHN0YXRlIGFycml2ZWQuIFB1dCBtb2RpZmllZCBzdGF0ZSBpbi5cbiAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSAhPT0gbmV3RW50aXR5KSB7XG4gICAgICAgICAgICAvLyBJdCdzIHRoZSBzYW1lIHN0YXRlIGJ1dCBjb250ZW50cyBjaGFuZ2VkIGR1ZSB0byBvdGhlciBzdGF0ZSBjaGFuZ2VzLlxuICAgICAgICAgICAgb2JqLnN0YXRlc1trZXldID0gbmV3RW50aXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIG9iaik7XG4gICAgICBpZiAob2JqLnRoZW1lcyAmJiBoYXNzLl90aGVtZVdhaXRlcnMpIHtcbiAgICAgICAgaGFzcy5fdGhlbWVXYWl0ZXJzLmZvckVhY2god2FpdGVyID0+IHdhaXRlci5zdGF0ZUNoYW5nZWQod2FpdGVyLnN0YXRlKSk7XG4gICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgaWYgKG1haW4uaGFzcyAmJiBtYWluLmhhc3Muc3RhdGVzKSB7XG4gICAgICBtYWluLl91cGRhdGVIYXNzKHsgc3RhdGVzOiBtYWluLmhhc3Muc3RhdGVzIH0pO1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsUGFydGlhbENhcmRzKCkge1xuICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IGN1c3RvbUVsZW1lbnRzLmdldCgncGFydGlhbC1jYXJkcycpO1xuICAgIGlmICghcGFydGlhbENhcmRzIHx8ICFwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlcikgcmV0dXJuO1xuICAgIHBhcnRpYWxDYXJkcy5wcm90b3R5cGUuX2RlZmF1bHRWaWV3RmlsdGVyID0gKGhhc3MsIGVudGl0eUlkKSA9PiB7XG4gICAgICBpZiAoaGFzcy5zdGF0ZXNbZW50aXR5SWRdLmF0dHJpYnV0ZXMuaGlkZGVuKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBleGNsdWRlcyA9IHt9O1xuICAgICAgT2JqZWN0LnZhbHVlcyhoYXNzLnN0YXRlcykuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcyAmJiBlbnRpdHkuYXR0cmlidXRlcy5oaWRlX2luX2RlZmF1bHRfdmlldykge1xuICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVFbnRpdHlJZCA9IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgICAgICAgaWYgKGV4Y2x1ZGVzW2V4Y2x1ZGVFbnRpdHlJZF0pIHJldHVybjtcbiAgICAgICAgICBleGNsdWRlc1tleGNsdWRlRW50aXR5SWRdID0gZW50aXR5O1xuICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy52aWV3KSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3RW50aXRpZXMgPSBnZXRWaWV3RW50aXRpZXMoaGFzcy5zdGF0ZXMsIGVudGl0eSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh2aWV3RW50aXRpZXMpXG4gICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgaWQgPT4gdmlld0VudGl0aWVzW2lkXS5hdHRyaWJ1dGVzLmhpZGVfaW5fZGVmYXVsdF92aWV3ICE9PSBmYWxzZSlcbiAgICAgICAgICAgICAgLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhjbHVkZXNbaWRdID0gdmlld0VudGl0aWVzW2lkXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiAhZXhjbHVkZXNbZW50aXR5SWRdO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICBpZiAoIWtsYXNzIHx8ICFrbGFzcy5wcm90b3R5cGUpIHJldHVybjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoa2xhc3MucHJvdG90eXBlLCAnbG9jYWxpemUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGN1c3RvbUxvY2FsaXplKHYpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZU9iaiAmJiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1c3RvbUxvY2FsaXplO1xuICAgICAgfSxcbiAgICAgIHNldCgpIHt9LFxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEFsbG93cyB0aGVtaW5nIFwicmVndWxhclwiIHRvcCBiYWRnZXMuXG4gIGluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSgpIHtcbiAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICBpZiAoIWhhU3RhdGVMYWJlbEJhZGdlIHx8ICFoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkKSByZXR1cm47XG4gICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAvLyBUT0RPOiBDYWxsIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdFxuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycyA9IHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzIHx8IFtdO1xuICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzLnB1c2godGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgICAgaWYgKHRoaXMuc3RhcnRJbnRlcnZhbCkge1xuICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKHN0YXRlT2JqKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGNvbnN0IHN0YXRlQmFkZ2UgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3N0YXRlLWJhZGdlJyk7XG4gICAgaWYgKCFzdGF0ZUJhZGdlIHx8ICFzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZSkgcmV0dXJuO1xuICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZTtcbiAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgIHN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZUljb25BcHBlYXJhbmNlID0gZnVuY3Rpb24gY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2Uoc3RhdGVPYmopIHtcbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiQuaWNvbi5zdHlsZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgZmlsdGVyOiAnJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlLmNhbGwodGhpcywgc3RhdGVPYmopO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgaW5zdGFsbEhhQXR0cmlidXRlcygpIHtcbiAgICBjb25zdCBoYUF0dHJpYnV0ZXMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWF0dHJpYnV0ZXMnKTtcbiAgICBpZiAoIWhhQXR0cmlidXRlcyB8fCAhaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5IHx8XG4gICAgICAgIXdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCkgcmV0dXJuO1xuICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgaGFBdHRyaWJ1dGVzLnByb3RvdHlwZS5jb21wdXRlRmlsdGVyc0FycmF5ID0gZnVuY3Rpb24gY3VzdG9tQ29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykuY29uY2F0KGV4dHJhRmlsdGVycyA/IGV4dHJhRmlsdGVycy5zcGxpdCgnLCcpIDogW10pO1xuICAgIH07XG4gIH0sXG5cbiAgaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjb25zdCBoYUZvcm1DdXN0b21pemUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ2hhLWZvcm0tY3VzdG9taXplJyk7XG4gICAgaWYgKCFoYUZvcm1DdXN0b21pemUpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMTAwbXMuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhRm9ybUN1c3RvbWl6ZSwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5oYUZvcm1DdXN0b21pemVJbml0RG9uZSA9IHRydWU7XG5cbiAgICBpZiAoIXdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbCkgcmV0dXJuO1xuICAgIGlmIChoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLl9jb21wdXRlU2luZ2xlQXR0cmlidXRlKSB7XG4gICAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgICAgaGFGb3JtQ3VzdG9taXplLnByb3RvdHlwZS5fY29tcHV0ZVNpbmdsZUF0dHJpYnV0ZSA9XG4gICAgICAgIGZ1bmN0aW9uIGN1c3RvbUNvbXB1dGVTaW5nbGVBdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVNba2V5XVxuICAgICAgICAgICAgICB8fCB7IHR5cGU6IHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgfTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5pdE9wZW5PYmplY3Qoa2V5LCBjb25maWcudHlwZSA9PT0gJ2pzb24nID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUsIHNlY29uZGFyeSwgY29uZmlnKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGhhRm9ybUN1c3RvbWl6ZS5wcm90b3R5cGUuZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMpIHtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBoYUZvcm1DdXN0b21pemUucHJvdG90eXBlLmdldE5ld0F0dHJpYnV0ZXNPcHRpb25zID1cbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tZ2V0TmV3QXR0cmlidXRlc09wdGlvbnMoXG4gICAgICAgICAgbG9jYWxBdHRyaWJ1dGVzLCBnbG9iYWxBdHRyaWJ1dGVzLCBleGlzdGluZ0F0dHJpYnV0ZXMsIG5ld0F0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBjb25zdCBrbm93bktleXMgPVxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmYgPSB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1trZXldO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmYgJiYgKCFjb25mLmRvbWFpbnMgfHwgIXRoaXMuZW50aXR5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25mLmRvbWFpbnMuaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHRoaXMuZW50aXR5KSkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGxvY2FsQXR0cmlidXRlcykpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0aGlzLmZpbHRlckZyb21BdHRyaWJ1dGVzKGdsb2JhbEF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhleGlzdGluZ0F0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGhpcy5maWx0ZXJGcm9tQXR0cmlidXRlcyhuZXdBdHRyaWJ1dGVzKSk7XG4gICAgICAgICAgcmV0dXJuIGtub3duS2V5cy5zb3J0KCkuY29uY2F0KCdPdGhlcicpO1xuICAgICAgICB9O1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsQ2xhc3NIb29rcygpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSA9IHRydWU7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxQYXJ0aWFsQ2FyZHMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlc0hvb2soKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZUJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUF0dHJpYnV0ZXMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NlbmUnKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEFjdGlvbk5hbWUoJ3N0YXRlLWNhcmQtc2NyaXB0Jyk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxDbGFzc0hvb2tzKCk7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIW1haW4uaGFzcyB8fCAhbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgLy8gQ29ubmVjdGlvbiB3YXNuJ3QgbWFkZSB5ZXQuIFRyeSBpbiAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbml0LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmN1c3RvbVVJLmluaXREb25lID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS51c2VDdXN0b21pemVyKCk7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb24tY2hhbmdlZCcsIHdpbmRvdy5zZXRUaW1lb3V0LmJpbmQobnVsbCwgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzLCAxMDApKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5sb2coYExvYWRlZCBDdXN0b21VSSAke1ZFUlNJT059YCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgaWYgKCF3aW5kb3cuQ1VTVE9NX1VJX0xJU1QpIHtcbiAgICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVCA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QucHVzaCh7XG4gICAgICBuYW1lOiAnQ3VzdG9tVUknLFxuICAgICAgdmVyc2lvbjogVkVSU0lPTixcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXktZ2l0L2hvbWUtYXNzaXN0YW50LWN1c3RvbS11aScsXG4gICAgfSk7XG4gIH0sXG5cbiAgcnVuSG9va3MoKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYUZvcm1DdXN0b21pemUoKTtcbiAgfSxcblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhLWRldmljZS1uYW1lJykgfHwgJyc7XG4gIH0sXG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScsIG5hbWUgfHwgJycpO1xuICB9LFxuXG4gIGNvbXB1dGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSkge1xuICAgIGNvbnN0IGZ1bmN0aW9uQm9keSA9ICh0ZW1wbGF0ZS5pbmRleE9mKCdyZXR1cm4nKSA+PSAwKSA/IHRlbXBsYXRlIDogYHJldHVybiBcXGAke3RlbXBsYXRlfVxcYDtgO1xuICAgIHRyeSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgJ2hhc3MnLCAnZW50aXRpZXMnLCAnZW50aXR5JywgJ2F0dHJpYnV0ZXMnLCAnYXR0cmlidXRlJywgJ3N0YXRlJywgZnVuY3Rpb25Cb2R5KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIHJldHVybiBmdW5jKGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGlmICgoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB8fCBlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfSBpbiB0ZW1wbGF0ZSAke2Z1bmN0aW9uQm9keX1gKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9LFxufTtcbndpbmRvdy5jdXN0b21VSS5pbml0KCk7XG4iLCJleHBvcnQgZGVmYXVsdCAnMjAxODA2MjUnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==