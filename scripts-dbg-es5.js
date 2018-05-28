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

var _templateObject = _taggedTemplateLiteral(['\n    <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>\n    <style>\n      #container {\n        position: relative;\n      }\n      .second-line, .state-and-toggle, .state-info {\n        max-width: 100%;\n      }\n      .nowrap .state-and-toggle {\n        overflow: hidden;\n        flex-grow: 0;\n      }\n      .nowrap .second-line {\n        overflow: hidden;\n      }\n\n      .second-line {\n        padding-top: 20px;\n        padding-bottom: 16px;\n        margin-top: -20px;\n        margin-bottom: -16px;\n      }\n      .stretch .second-line, .stretch ha-themed-slider {\n        width: 100%;\n        --ha-paper-slider-width: 100%;\n      }\n      .nowrap .state-info {\n        min-width: initial;\n      }\n      ha-themed-slider, .top-wrapper {\n        min-width: 100px;\n        max-width: 100%;\n      }\n      .top-wrapper.stretch {\n        display: block;\n      }\n\n      .hidden {\n        display: none;\n      }\n    </style>\n\n    <div id=\'container\' class$=\'horizontal layout flex top-wrapper [[_computeWrapClass(mode, stretchSlider, lineTooLong, inDialog)]]\'>\n      <div class=\'horizontal layout justified flex-auto state-and-toggle\'>\n        <state-info class=\'state-info\' state-obj=\'[[stateObj]]\' in-dialog=\'[[showLastChanged(stateObj, inDialog, extra)]]\' secondary-line$=\'[[hasExtra(extra)]]\' class=\'flex-auto\'>\n          <template is=\'dom-repeat\' items=\'[[extra]]\'>\n            <div>[[item]]</div>\n          </template>\n        </state-info>\n        <template is=\'dom-if\' if=\'[[breakSlider]]\' class=\'hidden\'>\n          <dynamic-with-extra hass=\'[[hass]]\' state-obj=\'[[stateObj]]\' control-element=\'[[controlElement]]\' in-dialog=\'[[inDialog]]\'></dynamic-with-extra>\n        </template>\n      </div>\n      <template is=\'dom-if\' if=\'[[showSlider]]\' restamp>\n        <div class=\'horizontal layout flex-auto end-justified second-line\'>\n          <ha-themed-slider\n            id=\'slider\'\n            max=[[max]]\n            min=[[min]]\n            theme=\'[[stateObj.attributes.slider_theme]]\'\n            is-on=\'[[isOn(stateObj, nameOn)]]\'\n            value=\'{{sliderValue}}\'\n            disable-off-when-min=\'{{disableOffWhenMin}}\'\n            on-change=\'sliderChanged\'\n            on-click=\'stopPropagation\'>\n          </ha-themed-slider>\n          <template is=\'dom-if\' if=\'[[!breakSlider]]\'>\n            <dynamic-with-extra hass=\'[[hass]]\' state-obj=\'[[stateObj]]\' control-element=\'[[controlElement]]\' in-dialog=\'[[inDialog]]\'></dynamic-with-extra>\n          </template>\n        </div>\n      </template>\n    </div>\n    '], ['\n    <style is="custom-style" include="iron-flex iron-flex-alignment iron-flex-factors"></style>\n    <style>\n      #container {\n        position: relative;\n      }\n      .second-line, .state-and-toggle, .state-info {\n        max-width: 100%;\n      }\n      .nowrap .state-and-toggle {\n        overflow: hidden;\n        flex-grow: 0;\n      }\n      .nowrap .second-line {\n        overflow: hidden;\n      }\n\n      .second-line {\n        padding-top: 20px;\n        padding-bottom: 16px;\n        margin-top: -20px;\n        margin-bottom: -16px;\n      }\n      .stretch .second-line, .stretch ha-themed-slider {\n        width: 100%;\n        --ha-paper-slider-width: 100%;\n      }\n      .nowrap .state-info {\n        min-width: initial;\n      }\n      ha-themed-slider, .top-wrapper {\n        min-width: 100px;\n        max-width: 100%;\n      }\n      .top-wrapper.stretch {\n        display: block;\n      }\n\n      .hidden {\n        display: none;\n      }\n    </style>\n\n    <div id=\'container\' class$=\'horizontal layout flex top-wrapper [[_computeWrapClass(mode, stretchSlider, lineTooLong, inDialog)]]\'>\n      <div class=\'horizontal layout justified flex-auto state-and-toggle\'>\n        <state-info class=\'state-info\' state-obj=\'[[stateObj]]\' in-dialog=\'[[showLastChanged(stateObj, inDialog, extra)]]\' secondary-line$=\'[[hasExtra(extra)]]\' class=\'flex-auto\'>\n          <template is=\'dom-repeat\' items=\'[[extra]]\'>\n            <div>[[item]]</div>\n          </template>\n        </state-info>\n        <template is=\'dom-if\' if=\'[[breakSlider]]\' class=\'hidden\'>\n          <dynamic-with-extra hass=\'[[hass]]\' state-obj=\'[[stateObj]]\' control-element=\'[[controlElement]]\' in-dialog=\'[[inDialog]]\'></dynamic-with-extra>\n        </template>\n      </div>\n      <template is=\'dom-if\' if=\'[[showSlider]]\' restamp>\n        <div class=\'horizontal layout flex-auto end-justified second-line\'>\n          <ha-themed-slider\n            id=\'slider\'\n            max=[[max]]\n            min=[[min]]\n            theme=\'[[stateObj.attributes.slider_theme]]\'\n            is-on=\'[[isOn(stateObj, nameOn)]]\'\n            value=\'{{sliderValue}}\'\n            disable-off-when-min=\'{{disableOffWhenMin}}\'\n            on-change=\'sliderChanged\'\n            on-click=\'stopPropagation\'>\n          </ha-themed-slider>\n          <template is=\'dom-if\' if=\'[[!breakSlider]]\'>\n            <dynamic-with-extra hass=\'[[hass]]\' state-obj=\'[[stateObj]]\' control-element=\'[[controlElement]]\' in-dialog=\'[[inDialog]]\'></dynamic-with-extra>\n          </template>\n        </div>\n      </template>\n    </div>\n    ']);

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

var _templateObject = _taggedTemplateLiteral(['\n    <style is="custom-style" include="iron-flex iron-flex-alignment"></style>\n    <style>\n      #container {\n        position: relative;\n      }\n    </style>\n\n    <div id=\'container\' class=\'horizontal layout justified\'>\n      <state-info\n          class=\'state-info\'\n          state-obj=\'[[stateObj]]\'\n          in-dialog=\'[[showLastChanged(stateObj, inDialog, extra)]]\'\n          secondary-line$=\'[[hasExtra(extra)]]\'>\n        <template is=\'dom-repeat\' items=\'[[extra]]\'>\n          <div>[[item]]</div>\n        </template>\n      </state-info>\n      <dynamic-with-extra\n          hass=\'[[hass]]\'\n          state-obj=\'[[stateObj]]\'\n          control-element=\'[[controlElement]]\'\n          in-dialog=\'[[inDialog]]\'>\n      </dynamic-with-extra>\n    </div>\n    '], ['\n    <style is="custom-style" include="iron-flex iron-flex-alignment"></style>\n    <style>\n      #container {\n        position: relative;\n      }\n    </style>\n\n    <div id=\'container\' class=\'horizontal layout justified\'>\n      <state-info\n          class=\'state-info\'\n          state-obj=\'[[stateObj]]\'\n          in-dialog=\'[[showLastChanged(stateObj, inDialog, extra)]]\'\n          secondary-line$=\'[[hasExtra(extra)]]\'>\n        <template is=\'dom-repeat\' items=\'[[extra]]\'>\n          <div>[[item]]</div>\n        </template>\n      </state-info>\n      <dynamic-with-extra\n          hass=\'[[hass]]\'\n          state-obj=\'[[stateObj]]\'\n          control-element=\'[[controlElement]]\'\n          in-dialog=\'[[inDialog]]\'>\n      </dynamic-with-extra>\n    </div>\n    ']);

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
      // TODO: Won't working starting from HA 0.71
      if (window.hassAttributeUtil && window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES) {
        customizer.attributes.hide_attributes.forEach(function (attr) {
          if (!Object.prototype.hasOwnProperty.call(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES, attr)) {
            window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[attr] = undefined;
          }
        });
      }
    }
  },
  updateAttributes: function updateAttributes() {
    if (!window.hassAttributeUtil) {
      // App.js wasn't parsed yet.
      window.setTimeout(window.customUI.updateAttributes, 1000);
      return;
    }

    var customUiAttributes = {
      group: undefined,
      device: undefined,
      templates: undefined,
      state_card_mode: {
        type: 'array',
        options: {
          light: window.customUI.SUPPORTED_SLIDER_MODES.concat('badges'),
          cover: window.customUI.SUPPORTED_SLIDER_MODES.concat('badges'),
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
    if (window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES) {
      Object.assign(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES, customUiAttributes);
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
  installClassHooks: function installClassHooks() {
    if (window.customUI.classInitDone) return;
    window.customUI.classInitDone = true;
    window.customUI.installPartialCards();
    window.customUI.installStatesHook();
    window.customUI.installHaStateLabelBadge();
    window.customUI.installStateBadge();
    window.customUI.installActionName('state-card-scene');
    window.customUI.installActionName('state-card-script');
    // TODO: Fix, not working since HA 0.71
    window.customUI.updateAttributes();
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
/* harmony default export */ __webpack_exports__["default"] = ('20180528');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkiLCJTVEFURVNfT0ZGIiwiVU5JVF9DIiwiVU5JVF9GIiwiREVGQVVMVF9WSUVXX0VOVElUWV9JRCIsImFwcGx5VGhlbWVzT25FbGVtZW50IiwiZWxlbWVudCIsInRoZW1lcyIsImxvY2FsVGhlbWUiLCJ1cGRhdGVNZXRhIiwiX3RoZW1lcyIsInRoZW1lTmFtZSIsImRlZmF1bHRfdGhlbWUiLCJzdHlsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0aGVtZSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJlZml4ZWRLZXkiLCJ1cGRhdGVTdHlsZXMiLCJ3aW5kb3ciLCJTaGFkeUNTUyIsInN0eWxlU3VidHJlZSIsIm1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVtZUNvbG9yIiwiZHluYW1pY0NvbnRlbnRVcGRhdGVyIiwicm9vdCIsIm5ld0VsZW1lbnRUYWciLCJhdHRyaWJ1dGVzIiwicm9vdEVsIiwiY3VzdG9tRWwiLCJsYXN0Q2hpbGQiLCJ0YWdOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwiY2FuVG9nZ2xlRG9tYWluIiwiaGFzcyIsImRvbWFpbiIsInNlcnZpY2VzIiwiY29uZmlnIiwiY2FuVG9nZ2xlU3RhdGUiLCJzdGF0ZU9iaiIsImNvbXB1dGVTdGF0ZURvbWFpbiIsInN0YXRlIiwic3VwcG9ydGVkX2ZlYXR1cmVzIiwiY29tcHV0ZURvbWFpbiIsImVudGl0eUlkIiwic3Vic3RyIiwiaW5kZXhPZiIsIl9kb21haW4iLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsInN0cmluZyIsInZhbHVlIiwidG9TdHJpbmciLCJsaXRlcmFsVmFsdWUiLCJFcnJvciIsImh0bWxWYWx1ZSIsIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJodG1sIiwic3RyaW5ncyIsInRlbXBsYXRlIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwidiIsImlkeCIsImh0bWxMaXRlcmFsIiwiQ3VpQmFzZUVsZW1lbnQiLCJleHRyYXMiLCJleHRyYV9kYXRhX3RlbXBsYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJleHRyYSIsInN0YXRlcyIsInVuZGVmaW5lZCIsImZpbHRlciIsImluRGlhbG9nIiwibGVuZ3RoIiwic2hvd19sYXN0X2NoYW5nZWQiLCJ0eXBlIiwiQm9vbGVhbiIsImNvbnRyb2xFbGVtZW50IiwiU3RyaW5nIiwiY29tcHV0ZWQiLCJQb2x5bWVyIiwiRWxlbWVudCIsIkR5bmFtaWNFbGVtZW50IiwiZWxlbWVudE5hbWUiLCJ0b1VwcGVyQ2FzZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiRHluYW1pY1dpdGhFeHRyYSIsIl9hdHRhY2hlZCIsIl9pc0F0dGFjaGVkIiwiYXR0YWNoZWQiLCJleHRyYV9iYWRnZSIsImV4dHJhQmFkZ2VzIiwiZXh0cmFCYWRnZSIsIm1heWJlQ2hhbmdlT2JqZWN0IiwiYXR0cmlidXRlIiwidW5pdF9vZl9tZWFzdXJlbWVudCIsInVuaXQiLCJibGFja2xpc3QiLCJibGFja2xpc3Rfc3RhdGVzIiwic29tZSIsIlJlZ0V4cCIsInRlc3QiLCJfZW50aXR5RGlzcGxheSIsImV4dHJhT2JqIiwiZXh0cmFPYmpWaXNpYmxlIiwiaGlkZV9jb250cm9sIiwiaGFMb2NhbGl6ZSIsImxvY2FsaXplIiwiY29uZmlybV9jb250cm9scyIsImNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrIiwiZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImxvY2siLCJpY29uIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsImFwcGx5VGhlbWVzIiwiZ2V0IiwiSGFDb25maWdDdXN0b21VaSIsIm5hbWUiLCJnZXROYW1lIiwic2V0TmFtZSIsImhpc3RvcnkiLCJiYWNrIiwiZmlyZSIsImlzV2lkZSIsIm9ic2VydmVyIiwiRXZlbnRzTWl4aW4iLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCIsImF0dHIiLCJkZWYiLCJpc09uIiwidGhlbWVkTWluIiwiZXYiLCJ0YXJnZXQiLCJtaW4iLCJOdW1iZXIiLCJtYXgiLCJwaW4iLCJub3RpZnkiLCJfdGhlbWVkTWluIiwiU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMiLCJET01BSU5fVE9fU0xJREVSX1NVUFBPUlQiLCJsaWdodCIsImNvdmVyIiwiY2xpbWF0ZSIsIlRZUEVfVE9fQ09OVFJPTCIsInRvZ2dsZSIsImRpc3BsYXkiLCJTdGF0ZUNhcmRDdXN0b21VaSIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX2NvbnRhaW5lciIsInNldFByb3BlcnR5IiwiaW5wdXRDaGFuZ2VkIiwibWFyZ2luIiwicGFkZGluZyIsImlkIiwiY29uc29sZSIsIndhcm4iLCJiYWRnZXNfbGlzdCIsInB1c2giLCJwYXJhbXMiLCJ3aWR0aCIsImZvbnRTaXplIiwibW9kaWZpZWRPYmoiLCJ0aGVtZVRhcmdldCIsIm9iaiIsInN0YXRlX2NhcmRfbW9kZSIsIm1heWJlSGlkZUVudGl0eSIsImJhZGdlTW9kZSIsInJlZ3VsYXJNb2RlXyIsImNsZWFuQmFkZ2VTdHlsZSIsIm9yaWdpbmFsU3RhdGVDYXJkVHlwZSIsImN1c3RvbVN0YXRlQ2FyZFR5cGUiLCJzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIiwic3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5Iiwic2xpZGVyRWxpZ2libGVfIiwic2VydmljZU1pbiIsInNlcnZpY2VNYXgiLCJ2YWx1ZU5hbWUiLCJzZXRWYWx1ZU5hbWUiLCJuYW1lT24iLCJtaW5fdGVtcCIsIm1heF90ZW1wIiwiY29udHJvbF9lbGVtZW50IiwiU3RhdGVDYXJkV2l0aFNsaWRlciIsIl9vbklyb25SZXNpemUiLCJiaW5kIiwiX2lzQ29ubmVjdGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl93YWl0Rm9yTGF5b3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9zZXRNb2RlIiwiX2ZyYW1lSWQiLCJyZWFkeVRvQ29tcHV0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhpZGVTbGlkZXIiLCJtb2RlIiwibGluZVRvb0xvbmciLCJicmVha1NsaWRlciIsInNob3dTbGlkZXIiLCJwcmV2QnJlYWtTbGlkZXIiLCJwcmV2SGlkZVNsaWRlciIsIiQiLCJjb250YWluZXJXaWR0aCIsImNsaWVudFdpZHRoIiwibWluTGluZUJyZWFrIiwibWF4TGluZUJyZWFrIiwiY29udGFpbmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhdGVIZWlnaHQiLCJzdHJldGNoU2xpZGVyIiwicGFyc2VJbnQiLCJwYXJhbSIsImlzTmFOIiwicGF0aCIsImNvbXBvc2VkUGF0aCIsImNhbGxTZXJ2aWNlIiwic2xpZGVyVmFsdWUiLCJzdHJldGNoX3NsaWRlciIsIlN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIiLCJzdXBlckNsYXNzIiwiZGV0YWlsIiwib3B0aW9ucyIsImV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNvbXBvc2VkIiwibm9kZSIsImRpc3BhdGNoRXZlbnQiLCJTVVBQT1JURURfU0xJREVSX01PREVTIiwiZG9tSG9zdCIsImdldFJvb3ROb2RlIiwiRG9jdW1lbnRGcmFnbWVudCIsImhvc3QiLCJsaWdodE9yU2hhZG93Iiwic2VsZWN0b3IiLCJzaGFkb3dSb290IiwiZ2V0RWxlbWVudEhpZXJhcmNoeSIsImhpZXJhcmNoeSIsInNoaWZ0IiwiZ2V0Q29udGV4dCIsIl9jb250ZXh0IiwiZ3JvdXBFbnRpdHkiLCJyZXZlcnNlIiwiZmluZE1hdGNoIiwiZmluZCIsIm1hdGNoIiwib3B0aW9uIiwibWF5YmVDaGFuZ2VPYmplY3RCeURldmljZSIsImRldmljZSIsImFwcGx5QXR0cmlidXRlcyIsIm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cCIsImNvbnRleHQiLCJjIiwiX3NldEtlZXAiLCJfY3VpX2tlZXAiLCJtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzIiwidGVtcGxhdGVzIiwibmV3QXR0cmlidXRlcyIsImhhc0dsb2JhbCIsImhhc0NoYW5nZXMiLCJ1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzIiwidW50ZW1wbGF0ZWRfc3RhdGUiLCJfc3RhdGVEaXNwbGF5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5IiwibWF5YmVBcHBseVRlbXBsYXRlcyIsIm5ld1Jlc3VsdCIsImNoZWNrQXR0cmlidXRlcyIsImxhc3RfY2hhbmdlZCIsImFsbG93SGlkZGVuIiwiZml4R3JvdXBUaXRsZXMiLCJob21lQXNzaXN0YW50TWFpbiIsImhhQ2FyZHMiLCJtYWluIiwiY2FyZHMiLCJjYXJkIiwiZnJpZW5kbHlfbmFtZSIsIm5hbWVFbGVtIiwidGV4dENvbnRlbnQiLCJjb250cm9sQ29sdW1ucyIsImNvbHVtbnMiLCJwYXJ0aWFsQ2FyZHMiLCJtcWxzIiwibXFsIiwicmVtb3ZlTGlzdGVuZXIiLCJoYW5kbGVXaW5kb3dDaGFuZ2UiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ1c2VDdXN0b21pemVyIiwiY3VzdG9taXplciIsImhpZGVfYXR0cmlidXRlcyIsImhhc3NBdHRyaWJ1dGVVdGlsIiwiTE9HSUNfU1RBVEVfQVRUUklCVVRFUyIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJjdXN0b21VaUF0dHJpYnV0ZXMiLCJjb25jYXQiLCJzbGlkZXJfdGhlbWUiLCJoaWRlX2luX2RlZmF1bHRfdmlldyIsInVwZGF0ZUNvbmZpZ1BhbmVsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJoYVBhbmVsQ29uZmlnIiwiaGFDb25maWdOYXZpZ2F0aW9uIiwiY3VpUGF0Y2giLCJfb3JpZ2luYWxDb21wdXRlTG9hZGVkIiwiX2NvbXB1dGVMb2FkZWQiLCJfb3JpZ2luYWxDb21wdXRlQ2FwdGlvbiIsIl9jb21wdXRlQ2FwdGlvbiIsIl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiIsIl9jb21wdXRlRGVzY3JpcHRpb24iLCJwYWdlIiwicGFnZXMiLCJjb25mIiwiY2FwdGlvbiIsImRlc2NyaXB0aW9uIiwibG9hZGVkIiwiZ2V0SGFDb25maWdDdXN0b21VaSIsImhhQ29uZmlnQ3VzdG9tVWkiLCJpcm9uUGFnZXMiLCJsYXN0RWxlbWVudENoaWxkIiwic2VsZWN0IiwidmlzaWJsZSIsImluc3RhbGxTdGF0ZXNIb29rIiwiaG9tZUFzc2lzdGFudCIsIl91cGRhdGVIYXNzIiwib3JpZ2luYWxVcGRhdGUiLCJ1cGRhdGUiLCJuZXdFbnRpdHkiLCJfdGhlbWVXYWl0ZXJzIiwid2FpdGVyIiwic3RhdGVDaGFuZ2VkIiwiaW5zdGFsbFBhcnRpYWxDYXJkcyIsIl9kZWZhdWx0Vmlld0ZpbHRlciIsImV4Y2x1ZGVzIiwiZXhjbHVkZUVudGl0eUlkIiwiaW5zdGFsbEFjdGlvbk5hbWUiLCJrbGFzcyIsImRlZmluZVByb3BlcnR5IiwiY3VzdG9tTG9jYWxpemUiLCJhY3Rpb25fbmFtZSIsIl9fZGF0YSIsInNldCIsImluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSIsImhhU3RhdGVMYWJlbEJhZGdlIiwic3RhcnRJbnRlcnZhbCIsImluc3RhbGxTdGF0ZUJhZGdlIiwic3RhdGVCYWRnZSIsInVwZGF0ZUljb25BcHBlYXJhbmNlIiwib3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZSIsImN1c3RvbVVwZGF0ZUljb25BcHBlYXJhbmNlIiwiaWNvbl9jb2xvciIsImVudGl0eV9waWN0dXJlIiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3IiLCJpbnN0YWxsQ2xhc3NIb29rcyIsImNsYXNzSW5pdERvbmUiLCJpbml0IiwiaW5pdERvbmUiLCJydW5Ib29rcyIsImxvZyIsIkNVU1RPTV9VSV9MSVNUIiwidmVyc2lvbiIsInVybCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiZnVuY3Rpb25Cb2R5IiwiZnVuYyIsIkZ1bmN0aW9uIiwiU3ludGF4RXJyb3IiLCJSZWZlcmVuY2VFcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLElBQU1BLHNCQUFzQixjQUE1Qjs7QUFFUDtBQUNPLElBQU1DLG9CQUFvQixDQUMvQixTQUQrQixFQUUvQixPQUYrQixFQUcvQixjQUgrQixFQUkvQixjQUorQixFQUsvQixjQUwrQixFQU0vQixZQU4rQixFQU8vQixjQVArQixFQVEvQixPQVIrQixFQVMvQixRQVQrQixFQVUvQixPQVYrQixFQVcvQixTQVgrQixDQUExQjs7QUFjUDtBQUNPLElBQU1DLCtCQUErQixDQUMxQyxRQUQwQyxFQUUxQyxjQUYwQyxFQUcxQyxlQUgwQyxFQUkxQyxPQUowQyxDQUFyQzs7QUFPUDtBQUNPLElBQU1DLGFBQWEsQ0FDeEIsUUFEd0IsRUFFeEIsS0FGd0IsRUFHeEIsVUFId0IsQ0FBbkI7O0FBTVA7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RUE2aUI2QztBQUM5RSxRQUFNK1csZUFBZ0IzVSxTQUFTL0IsT0FBVCxDQUFpQixRQUFqQixLQUE4QixDQUEvQixHQUFvQytCLFFBQXBDLGdCQUEyREEsUUFBM0QsT0FBckI7QUFDQSxRQUFJO0FBQ0Y7QUFDQSxVQUFNNFUsT0FBTyxJQUFJQyxRQUFKLENBQ1gsTUFEVyxFQUNILFVBREcsRUFDUyxRQURULEVBQ21CLFlBRG5CLEVBQ2lDLFdBRGpDLEVBQzhDLE9BRDlDLEVBQ3VERixZQUR2RCxDQUFiO0FBRUE7QUFDQSxhQUFPQyxLQUFLdlgsSUFBTCxFQUFXZ0IsUUFBWCxFQUFxQkcsTUFBckIsRUFBNkIvQixVQUE3QixFQUF5Q2lHLFNBQXpDLEVBQW9EOUUsS0FBcEQsQ0FBUDtBQUNELEtBTkQsQ0FNRSxPQUFPOEYsQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxVQUFLQSxhQUFhb1IsV0FBZCxJQUE4QnBSLGFBQWFxUixjQUEvQyxFQUErRDtBQUM3RDNOLGdCQUFRQyxJQUFSLENBQWdCM0QsRUFBRWEsSUFBbEIsVUFBMkJiLEVBQUVzUixPQUE3QixxQkFBb0RMLFlBQXBEO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBLFlBQU1qUixDQUFOO0FBQ0Q7QUFDRjtBQTlqQmtDLENBQXJDO0FBZ2tCQTlILE9BQU9pRixRQUFQLENBQWdCb1QsSUFBaEIsRzs7Ozs7Ozs7Ozs7OztBQ3ZrQkEsK0RBQWUsVUFBZixFIiwiZmlsZSI6InNjcmlwdHMtZGJnLWVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeXBvaW50cy9zY3JpcHRzLmpzXCIpO1xuIiwiLyoqIENvbnN0YW50cyB0byBiZSB1c2VkIGluIHRoZSBmcm9udGVuZC4gKi9cblxuLy8gQ29uc3RhbnRzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgYnkgbmFtZS5cbi8vIEFycmF5cyB3aXRoIHZhbHVlcyBzaG91bGQgYmUgYWxwaGFiZXRpY2FsbHkgc29ydGVkIGlmIG9yZGVyIGRvZXNuJ3QgbWF0dGVyLlxuLy8gRWFjaCBjb25zdGFudCBzaG91bGQgaGF2ZSBhIGRlc2NyaXB0aW9uIHdoYXQgaXQgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBmb3IuXG5cbi8qKiBJY29uIHRvIHVzZSB3aGVuIG5vIGljb24gc3BlY2lmaWVkIGZvciBkb21haW4uICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9ET01BSU5fSUNPTiA9ICdtZGk6Ym9va21hcmsnO1xuXG4vKiogRG9tYWlucyB0aGF0IGhhdmUgYSBzdGF0ZSBjYXJkLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9DQVJEID0gW1xuICAnY2xpbWF0ZScsXG4gICdjb3ZlcicsXG4gICdjb25maWd1cmF0b3InLFxuICAnaW5wdXRfc2VsZWN0JyxcbiAgJ2lucHV0X251bWJlcicsXG4gICdpbnB1dF90ZXh0JyxcbiAgJ21lZGlhX3BsYXllcicsXG4gICdzY2VuZScsXG4gICdzY3JpcHQnLFxuICAndGltZXInLFxuICAnd2VibGluaycsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3VsZCBoYXZlIHRoZSBoaXN0b3J5IGhpZGRlbiBpbiB0aGUgbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZID0gW1xuICAnY2FtZXJhJyxcbiAgJ2NvbmZpZ3VyYXRvcicsXG4gICdoaXN0b3J5X2dyYXBoJyxcbiAgJ3NjZW5lJyxcbl07XG5cbi8qKiBTdGF0ZXMgdGhhdCB3ZSBjb25zaWRlciBcIm9mZlwiLiAqL1xuZXhwb3J0IGNvbnN0IFNUQVRFU19PRkYgPSBbXG4gICdjbG9zZWQnLFxuICAnb2ZmJyxcbiAgJ3VubG9ja2VkJyxcbl07XG5cbi8qKiBUZW1wZXJhdHVyZSB1bml0cy4gKi9cbmV4cG9ydCBjb25zdCBVTklUX0MgPSAnwrBDJztcbmV4cG9ydCBjb25zdCBVTklUX0YgPSAnwrBGJztcblxuLyoqIEVudGl0eSBJRCBvZiB0aGUgZGVmYXVsdCB2aWV3LiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSAnZ3JvdXAuZGVmYXVsdF92aWV3JztcbiIsIi8qKlxuICogQXBwbHkgYSB0aGVtZSB0byBhbiBlbGVtZW50IGJ5IHNldHRpbmcgdGhlIENTUyB2YXJpYWJsZXMgb24gaXQuXG4gKlxuICogZWxlbWVudDogRWxlbWVudCB0byBhcHBseSB0aGVtZSBvbi5cbiAqIHRoZW1lczogSEFTUyBUaGVtZSBpbmZvcm1hdGlvblxuICogbG9jYWxUaGVtZTogc2VsZWN0ZWQgdGhlbWUuXG4gKiB1cGRhdGVNZXRhOiBib29sZWFuIGlmIHdlIHNob3VsZCB1cGRhdGUgdGhlIHRoZW1lLWNvbG9yIG1ldGEgZWxlbWVudC5cbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseVRoZW1lc09uRWxlbWVudChlbGVtZW50LCB0aGVtZXMsIGxvY2FsVGhlbWUsIHVwZGF0ZU1ldGEgPSBmYWxzZSkge1xuICBpZiAoIWVsZW1lbnQuX3RoZW1lcykge1xuICAgIGVsZW1lbnQuX3RoZW1lcyA9IHt9O1xuICB9XG4gIGxldCB0aGVtZU5hbWUgPSB0aGVtZXMuZGVmYXVsdF90aGVtZTtcbiAgaWYgKGxvY2FsVGhlbWUgPT09ICdkZWZhdWx0JyB8fCAobG9jYWxUaGVtZSAmJiB0aGVtZXMudGhlbWVzW2xvY2FsVGhlbWVdKSkge1xuICAgIHRoZW1lTmFtZSA9IGxvY2FsVGhlbWU7XG4gIH1cbiAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbWVudC5fdGhlbWVzKTtcbiAgaWYgKHRoZW1lTmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgdmFyIHRoZW1lID0gdGhlbWVzLnRoZW1lc1t0aGVtZU5hbWVdO1xuICAgIE9iamVjdC5rZXlzKHRoZW1lKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHZhciBwcmVmaXhlZEtleSA9ICctLScgKyBrZXk7XG4gICAgICBlbGVtZW50Ll90aGVtZXNbcHJlZml4ZWRLZXldID0gJyc7XG4gICAgICBzdHlsZXNbcHJlZml4ZWRLZXldID0gdGhlbWVba2V5XTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZWxlbWVudC51cGRhdGVTdHlsZXMpIHtcbiAgICBlbGVtZW50LnVwZGF0ZVN0eWxlcyhzdHlsZXMpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5TaGFkeUNTUykge1xuICAgIC8vIGltcGxlbWVudCB1cGRhdGVTdHlsZXMoKSBtZXRob2Qgb2YgUG9sZW1lciBlbGVtZW50c1xuICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZVN1YnRyZWUoLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovKGVsZW1lbnQpLCBzdHlsZXMpO1xuICB9XG5cbiAgaWYgKCF1cGRhdGVNZXRhKSByZXR1cm47XG5cbiAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT10aGVtZS1jb2xvcl0nKTtcbiAgaWYgKG1ldGEpIHtcbiAgICBpZiAoIW1ldGEuaGFzQXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKSkge1xuICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcsIG1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpO1xuICAgIH1cbiAgICBjb25zdCB0aGVtZUNvbG9yID0gc3R5bGVzWyctLXByaW1hcnktY29sb3InXSB8fCBtZXRhLmdldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50Jyk7XG4gICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB0aGVtZUNvbG9yKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBVcGRhdGUgcm9vdCdzIGNoaWxkIGVsZW1lbnQgdG8gYmUgbmV3RWxlbWVudFRhZyByZXBsYWNpbmcgYW5vdGhlciBleGlzdGluZyBjaGlsZCBpZiBhbnkuXG4gKiBDb3B5IGF0dHJpYnV0ZXMgaW50byB0aGUgY2hpbGQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pY0NvbnRlbnRVcGRhdGVyKHJvb3QsIG5ld0VsZW1lbnRUYWcsIGF0dHJpYnV0ZXMpIHtcbiAgY29uc3Qgcm9vdEVsID0gcm9vdDtcbiAgbGV0IGN1c3RvbUVsO1xuXG4gIGlmIChyb290RWwubGFzdENoaWxkICYmIHJvb3RFbC5sYXN0Q2hpbGQudGFnTmFtZSA9PT0gbmV3RWxlbWVudFRhZykge1xuICAgIGN1c3RvbUVsID0gcm9vdEVsLmxhc3RDaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBpZiAocm9vdEVsLmxhc3RDaGlsZCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKHJvb3RFbC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBDcmVhdGluZyBhbiBlbGVtZW50IHdpdGggdXBwZXIgY2FzZSB3b3JrcyBmaW5lIGluIENocm9tZSwgYnV0IGluIEZGIGl0IGRvZXNuJ3QgaW1tZWRpYXRlbHlcbiAgICAvLyBiZWNvbWUgYSBkZWZpbmVkIEN1c3RvbSBFbGVtZW50LiBQb2x5bWVyIGRvZXMgdGhhdCBpbiBzb21lIGxhdGVyIHBhc3MuXG4gICAgY3VzdG9tRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5ld0VsZW1lbnRUYWcudG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBpZiAoY3VzdG9tRWwuc2V0UHJvcGVydGllcykge1xuICAgIGN1c3RvbUVsLnNldFByb3BlcnRpZXMoYXR0cmlidXRlcyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgY3VzdG9tIGVsZW1lbnQgZGVmaW5pdGlvbiB3YXNuJ3QgbG9hZGVkIHlldCAtIHNldFByb3BlcnRpZXMgd291bGQgYmVcbiAgICAvLyBtaXNzaW5nLCBidXQgbm8gaGFybSBpbiBzZXR0aW5nIGF0dHJpYnV0ZXMgb25lLWJ5LW9uZSB0aGVuLlxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY3VzdG9tRWxba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGN1c3RvbUVsKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbikge1xuICBjb25zdCBzZXJ2aWNlcyA9IGhhc3MuY29uZmlnLnNlcnZpY2VzW2RvbWFpbl07XG4gIGlmICghc2VydmljZXMpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKGRvbWFpbiA9PT0gJ2xvY2snKSB7XG4gICAgcmV0dXJuICdsb2NrJyBpbiBzZXJ2aWNlcztcbiAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjb3ZlcicpIHtcbiAgICByZXR1cm4gJ29wZW5fY292ZXInIGluIHNlcnZpY2VzO1xuICB9XG4gIHJldHVybiAndHVybl9vbicgaW4gc2VydmljZXM7XG59XG4iLCJpbXBvcnQgY2FuVG9nZ2xlRG9tYWluIGZyb20gJy4vY2FuX3RvZ2dsZV9kb21haW4uanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopIHtcbiAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgaWYgKGRvbWFpbiA9PT0gJ2dyb3VwJykge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gJ29uJyB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gJ29mZic7XG4gIH1cbiAgaWYgKGRvbWFpbiA9PT0gJ2NsaW1hdGUnKSB7XG4gICAgcmV0dXJuICEhKChzdGF0ZU9iai5hdHRyaWJ1dGVzIHx8IHt9KS5zdXBwb3J0ZWRfZmVhdHVyZXMgJiA0MDk2KTtcbiAgfVxuXG4gIHJldHVybiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVEb21haW4oZW50aXR5SWQpIHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cigwLCBlbnRpdHlJZC5pbmRleE9mKCcuJykpO1xufVxuIiwiaW1wb3J0IGNvbXB1dGVEb21haW4gZnJvbSAnLi9jb21wdXRlX2RvbWFpbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikge1xuICBpZiAoIXN0YXRlT2JqLl9kb21haW4pIHtcbiAgICBzdGF0ZU9iai5fZG9tYWluID0gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlT2JqLl9kb21haW47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBncm91cCkge1xuICBjb25zdCByZXN1bHQgPSB7fTtcblxuICBncm91cC5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHJlc3VsdFtlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfZG9tYWluLmpzJztcbmltcG9ydCBnZXRHcm91cEVudGl0aWVzIGZyb20gJy4vZ2V0X2dyb3VwX2VudGl0aWVzLmpzJztcblxuLy8gUmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBlbnRpdGllcyB0aGF0IHRoZSB2aWV3IHdpbGwgc2hvd1xuLy8gaW5jbHVkaW5nIGVtYmVkZGVkIGdyb3Vwcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdFbnRpdGllcyhlbnRpdGllcywgdmlldykge1xuICBjb25zdCB2aWV3RW50aXRpZXMgPSB7fTtcblxuICB2aWV3LmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSAmJiAhZW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICB2aWV3RW50aXRpZXNbZW50aXR5LmVudGl0eV9pZF0gPSBlbnRpdHk7XG5cbiAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpID09PSAnZ3JvdXAnKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRW50aXRpZXMgPSBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBlbnRpdHkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwRW50aXRpZXMpLmZvckVhY2goKGdyRW50aXR5SWQpID0+IHtcbiAgICAgICAgICBjb25zdCBnckVudGl0eSA9IGdyb3VwRW50aXRpZXNbZ3JFbnRpdHlJZF07XG5cbiAgICAgICAgICBpZiAoIWdyRW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICAgICAgICB2aWV3RW50aXRpZXNbZ3JFbnRpdHlJZF0gPSBnckVudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdFbnRpdGllcztcbn1cbiIsImltcG9ydCBjYW5Ub2dnbGVTdGF0ZSBmcm9tICcuL2Nhbl90b2dnbGVfc3RhdGUuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCB7IERPTUFJTlNfV0lUSF9DQVJEIH0gZnJvbSAnLi4vY29uc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKSB7XG4gIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgIHJldHVybiAnZGlzcGxheSc7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfSBlbHNlIGlmIChjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikgJiZcbiAgICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2wgIT09ICdoaWRkZW4nKSB7XG4gICAgcmV0dXJuICd0b2dnbGUnO1xuICB9XG4gIHJldHVybiAnZGlzcGxheSc7XG59XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuXG53aW5kb3cuSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHByb3ApIHsgcmV0dXJuIHByb3A7IH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuL2Jvb3QuanMnO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHN0YXRpYyBzdHJpbmcgdmFsdWUgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZmlsdGVyXG4gKiBzdHJpbmdzIGJ5IGFzc2V0aW5nIHRoYXQgdGhleSBoYXZlIGJlZW4gY3JlYXRlZCB2aWEgdGhpcyBjbGFzcy4gVGhlXG4gKiBgdmFsdWVgIHByb3BlcnR5IHJldHVybnMgdGhlIHN0cmluZyBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yLlxuICovXG5jbGFzcyBMaXRlcmFsU3RyaW5nIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nKSB7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdGhpcy52YWx1ZSA9IHN0cmluZy50b1N0cmluZygpO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IExpdGVyYWxTdHJpbmcgc3RyaW5nIHZhbHVlXG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT2JqZWN0IHRvIHN0cmluZ2lmeSBpbnRvIEhUTUxcbiAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCBzdHJpbmdpZmllZCBmb3JtIG9mIGBvYmpgXG4gKi9cbmZ1bmN0aW9uIGxpdGVyYWxWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMaXRlcmFsU3RyaW5nKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7IUxpdGVyYWxTdHJpbmd9ICovKHZhbHVlKS52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tbGl0ZXJhbCB2YWx1ZSBwYXNzZWQgdG8gUG9seW1lcidzIGh0bWxMaXRlcmFsIGZ1bmN0aW9uOiAke3ZhbHVlfWBcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gaHRtbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudCB9ICovKHZhbHVlKS5pbm5lckhUTUw7XG4gIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBMaXRlcmFsU3RyaW5nKSB7XG4gICAgcmV0dXJuIGxpdGVyYWxWYWx1ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgbm9uLXRlbXBsYXRlIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbCBmdW5jdGlvbjogJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgdGhhdCBjcmVhdGVzIGFuIEhUTUwgPHRlbXBsYXRlPiBlbGVtZW50IGZyb20gdGhlXG4gKiBjb250ZW50cyBvZiB0aGUgc3RyaW5nLlxuICpcbiAqIFRoaXMgYWxsb3dzIHlvdSB0byB3cml0ZSBhIFBvbHltZXIgVGVtcGxhdGUgaW4gSmF2YVNjcmlwdC5cbiAqXG4gKiBUZW1wbGF0ZXMgY2FuIGJlIGNvbXBvc2VkIGJ5IGludGVycG9sYXRpbmcgYEhUTUxUZW1wbGF0ZUVsZW1lbnRgcyBpblxuICogZXhwcmVzc2lvbnMgaW4gdGhlIEphdmFTY3JpcHQgdGVtcGxhdGUgbGl0ZXJhbC4gVGhlIG5lc3RlZCB0ZW1wbGF0ZSdzXG4gKiBgaW5uZXJIVE1MYCBpcyBpbmNsdWRlZCBpbiB0aGUgY29udGFpbmluZyB0ZW1wbGF0ZS4gIFRoZSBvbmx5IG90aGVyXG4gKiB2YWx1ZXMgYWxsb3dlZCBpbiBleHByZXNzaW9ucyBhcmUgdGhvc2UgcmV0dXJuZWQgZnJvbSBgaHRtbExpdGVyYWxgXG4gKiB3aGljaCBlbnN1cmVzIG9ubHkgbGl0ZXJhbCB2YWx1ZXMgZnJvbSBKUyBzb3VyY2UgZXZlciByZWFjaCB0aGUgSFRNTCwgdG9cbiAqIGd1YXJkIGFnYWluc3QgWFNTIHJpc2tzLlxuICpcbiAqIEFsbCBvdGhlciB2YWx1ZXMgYXJlIGRpc2FsbG93ZWQgaW4gZXhwcmVzc2lvbnMgdG8gaGVscCBwcmV2ZW50IFhTU1xuICogYXR0YWNrczsgaG93ZXZlciwgYGh0bWxMaXRlcmFsYCBjYW4gYmUgdXNlZCB0byBjb21wb3NlIHN0YXRpY1xuICogc3RyaW5nIHZhbHVlcyBpbnRvIHRlbXBsYXRlcy4gVGhpcyBpcyB1c2VmdWwgdG8gY29tcG9zZSBzdHJpbmdzIGludG9cbiAqIHBsYWNlcyB0aGF0IGRvIG5vdCBhY2NlcHQgaHRtbCwgbGlrZSB0aGUgY3NzIHRleHQgb2YgYSBgc3R5bGVgXG4gKiBlbGVtZW50LlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPjpob3N0eyBjb250ZW50OlwiLi4uXCIgfTwvc3R5bGU+XG4gKiAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3dlZFwiPiR7dGhpcy5wYXJ0aWFsVGVtcGxhdGV9PC9kaXY+XG4gKiAgICAgICAgICR7c3VwZXIudGVtcGxhdGV9XG4gKiAgICAgICBgO1xuICogICAgIH1cbiAqICAgICBzdGF0aWMgZ2V0IHBhcnRpYWxUZW1wbGF0ZSgpIHsgcmV0dXJuIGh0bWxgPHNwYW4+UGFydGlhbCE8L3NwYW4+YDsgfVxuICpcbiAqIEBwYXJhbSB7IUlUZW1wbGF0ZUFycmF5fSBzdHJpbmdzIENvbnN0YW50IHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBWYXJpYWJsZSBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHJldHVybiB7IUhUTUxUZW1wbGF0ZUVsZW1lbnR9IENvbnN0cnVjdGVkIEhUTUxUZW1wbGF0ZUVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSBmdW5jdGlvbiBodG1sKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICBjb25zdCB0ZW1wbGF0ZSA9IC8qKiBAdHlwZSB7IUhUTUxUZW1wbGF0ZUVsZW1lbnR9ICovKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpO1xuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGh0bWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pO1xuICByZXR1cm4gdGVtcGxhdGU7XG59O1xuXG4vKipcbiAqIEFuIGh0bWwgbGl0ZXJhbCB0YWcgdGhhdCBjYW4gYmUgdXNlZCB3aXRoIGBodG1sYCB0byBjb21wb3NlLlxuICogYSBsaXRlcmFsIHN0cmluZy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICogICAgICAgcmV0dXJuIGh0bWxgXG4gKiAgICAgICAgIDxzdHlsZT5cbiAqICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gKiAgICAgICAgICAgJHt0aGlzLnN0eWxlVGVtcGxhdGUoKX1cbiAqICAgICAgICAgPC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHtzdGF0aWNWYWx1ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgc3R5bGVUZW1wbGF0ZSgpIHtcbiAqICAgICAgICByZXR1cm4gaHRtbExpdGVyYWxgLnNoYWRvd2VkIHsgYmFja2dyb3VuZDogZ3JheTsgfWA7XG4gKiAgICAgfVxuICpcbiAqIEBwYXJhbSB7IUlUZW1wbGF0ZUFycmF5fSBzdHJpbmdzIENvbnN0YW50IHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcGFyYW0gey4uLip9IHZhbHVlcyBWYXJpYWJsZSBwYXJ0cyBvZiB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHJldHVybiB7IUxpdGVyYWxTdHJpbmd9IENvbnN0cnVjdGVkIGxpdGVyYWwgc3RyaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sTGl0ZXJhbCA9IGZ1bmN0aW9uKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICByZXR1cm4gbmV3IExpdGVyYWxTdHJpbmcodmFsdWVzLnJlZHVjZSgoYWNjLCB2LCBpZHgpID0+XG4gICAgICBhY2MgKyBsaXRlcmFsVmFsdWUodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKSk7XG59O1xuIiwiaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgQ3VpQmFzZUVsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgY29udHJvbEVsZW1lbnQ6IFN0cmluZyxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgbGV0IGV4dHJhcyA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfZGF0YV90ZW1wbGF0ZTtcbiAgICBpZiAoZXh0cmFzKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFzKSkge1xuICAgICAgICBleHRyYXMgPSBbZXh0cmFzXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHRyYXMubWFwKGV4dHJhID0+IHdpbmRvdy5jdXN0b21VSS5jb21wdXRlVGVtcGxhdGUoXG4gICAgICAgIGV4dHJhLFxuICAgICAgICBoYXNzLFxuICAgICAgICBoYXNzLnN0YXRlcyxcbiAgICAgICAgc3RhdGVPYmosXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICAgIC8qIGF0dHJpYnV0ZT0gKi8gdW5kZWZpbmVkLFxuICAgICAgICBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgICkpLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0ICE9PSBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgIGlmIChleHRyYS5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnNob3dfbGFzdF9jaGFuZ2VkO1xuICB9XG5cbiAgaGFzRXh0cmEoZXh0cmEpIHtcbiAgICByZXR1cm4gZXh0cmEubGVuZ3RoID4gMDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ3VpQmFzZUVsZW1lbnQ7XG4iLCJpbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIER5bmFtaWNFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgZWxlbWVudE5hbWU6IFN0cmluZyxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZyknLFxuICAgIF07XG4gIH1cblxuICBvYnNlcnZlckZ1bmMoaGFzcywgc3RhdGVPYmosIGVsZW1lbnROYW1lLCBpbkRpYWxvZykge1xuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICBlbGVtZW50TmFtZSA/IGVsZW1lbnROYW1lLnRvVXBwZXJDYXNlKCkgOiAnRElWJyxcbiAgICAgIHsgaGFzcywgc3RhdGVPYmosIGluRGlhbG9nIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2R5bmFtaWMtZWxlbWVudCcsIER5bmFtaWNFbGVtZW50KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5cbmltcG9ydCAnLi9keW5hbWljLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgRHluYW1pY1dpdGhFeHRyYSBleHRlbmRzIGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtY2FyZC1kaXNwbGF5Jykge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuY29udHJvbC13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luOiAtNHB4IC0xNnB4IC00cHggMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICB9XG4gICAgICBoYS1zdGF0ZS1sYWJlbC1iYWRnZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgICBkeW5hbWljLWVsZW1lbnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICAjb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgICNsb2NrIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgfVxuICAgICAgI2xvY2suaGEtY292ZXItY29udHJvbHMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgLmV4dHJhIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2Utc2l6ZTogMzZweDtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1mb250LXNpemU6IDEuMmVtO1xuICAgICAgfVxuICAgICAgLnN0YXRlIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzJD0nW1tleHRyYUNsYXNzKGV4dHJhT2JqVmlzaWJsZSldXSBob3Jpem9udGFsIGxheW91dCc+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbZXh0cmFPYmpWaXNpYmxlXV0nPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnXG4gICAgICAgICAgICAgICAgICBpdGVtcz0nW1tleHRyYU9ial1dJ1xuICAgICAgICAgICAgICAgICAgb24tZG9tLWNoYW5nZT0nZXh0cmFEb21DaGFuZ2VkJz5cbiAgICAgICAgICA8aGEtc3RhdGUtbGFiZWwtYmFkZ2UgaGFzcz0nW1toYXNzXV0nIHN0YXRlPSdbW2l0ZW1dXSc+PC9oYS1zdGF0ZS1sYWJlbC1iYWRnZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaildXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZHluYW1pYy1lbGVtZW50XG4gICAgICAgICAgICAgICAgY2xhc3M9J2ZsZXgnXG4gICAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICAgICAgICBlbGVtZW50LW5hbWU9J1tbY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgICA8L2R5bmFtaWMtZWxlbWVudD5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaildXSc+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVybGF5XCIgb24tY2xpY2s9J2NsaWNrSGFuZGxlcic+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2tdXSc+XG4gICAgICAgICAgICAgICAgICA8aXJvbi1pY29uIGlkPVwibG9ja1wiIGNsYXNzJD1cIltbY29udHJvbEVsZW1lbnRdXVwiIGljb249XCJtZGk6bG9jay1vdXRsaW5lXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbIWNvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3N0YXRlJz5bW2NvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgZXh0cmFPYmo6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBfYXR0YWNoZWQpJyxcbiAgICAgIH0sXG4gICAgICBfYXR0YWNoZWQ6IEJvb2xlYW4sXG4gICAgICBleHRyYU9ialZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZyknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGNvbXB1dGVFeHRyYShoYXNzLCBzdGF0ZU9iaiwgYXR0YWNoZWQpIHtcbiAgICBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZXh0cmFfYmFkZ2UgfHwgIWF0dGFjaGVkKSByZXR1cm4gW107XG4gICAgbGV0IGV4dHJhQmFkZ2VzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXh0cmFCYWRnZXMpKSB7XG4gICAgICBleHRyYUJhZGdlcyA9IFtleHRyYUJhZGdlc107XG4gICAgfVxuICAgIHJldHVybiBleHRyYUJhZGdlcy5tYXAoKGV4dHJhQmFkZ2UpID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgaWYgKGV4dHJhQmFkZ2UuZW50aXR5X2lkICYmIGhhc3Muc3RhdGVzW2V4dHJhQmFkZ2UuZW50aXR5X2lkXSkge1xuICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgdGhpcywgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdLCB0aGlzLmluRGlhbG9nLFxuICAgICAgICAgIC8qIGFsbG93SGlkZGVuPSAqL2ZhbHNlKSk7XG4gICAgICB9IGVsc2UgaWYgKGV4dHJhQmFkZ2UuYXR0cmlidXRlICYmXG4gICAgICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXNbZXh0cmFCYWRnZS5hdHRyaWJ1dGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHN0YXRlOiBTdHJpbmcoc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0pLFxuICAgICAgICAgIF9kb21haW46ICdub25lJyxcbiAgICAgICAgICBlbnRpdHlfaWQ6IG51bGwsXG4gICAgICAgICAgYXR0cmlidXRlczogeyB1bml0X29mX21lYXN1cmVtZW50OiBleHRyYUJhZGdlLnVuaXQgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICAgIGxldCBibGFja2xpc3QgPSBleHRyYUJhZGdlLmJsYWNrbGlzdF9zdGF0ZXM7XG4gICAgICBpZiAoYmxhY2tsaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJsYWNrbGlzdCkpIHtcbiAgICAgICAgICBibGFja2xpc3QgPSBbYmxhY2tsaXN0XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxhY2tsaXN0LnNvbWUodiA9PiBSZWdFeHAodikudGVzdChyZXN1bHQuc3RhdGUudG9TdHJpbmcoKSkpKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5fZW50aXR5RGlzcGxheSA9ICcnO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KS5maWx0ZXIoZXh0cmFCYWRnZSA9PiBleHRyYUJhZGdlICE9IG51bGwpO1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhVmlzaWJsZShleHRyYU9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cgfHwgIWV4dHJhT2JqKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGV4dHJhT2JqLmxlbmd0aCAhPT0gMDtcbiAgfVxuXG4gIGV4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKSB7XG4gICAgcmV0dXJuIGV4dHJhT2JqVmlzaWJsZSA/ICdleHRyYScgOiAnJztcbiAgfVxuXG4gIF9zaG93Q29udHJvbChpbkRpYWxvZywgc3RhdGVPYmopIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiAhc3RhdGVPYmouYXR0cmlidXRlcy5oaWRlX2NvbnRyb2w7XG4gIH1cblxuICBjb21wdXRlU3RhdGVEaXNwbGF5KHN0YXRlT2JqKSB7XG4gICAgLy8gaGFMb2NhbGl6ZSByZW1vdmVkIGluIDAuNjFcbiAgICByZXR1cm4gc3VwZXIuY29tcHV0ZVN0YXRlRGlzcGxheSh0aGlzLmhhTG9jYWxpemUgfHwgdGhpcy5sb2NhbGl6ZSwgc3RhdGVPYmopO1xuICB9XG5cbiAgaXNDb25maXJtQ29udHJvbHMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzIHx8XG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29uZmlybV9jb250cm9sc19zaG93X2xvY2s7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgY29uc3QgbG9jayA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjbG9jaycpO1xuICAgIGlmIChsb2NrKSB7XG4gICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3Blbi1vdXRsaW5lJztcbiAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcwLjEnO1xuICAgIH1cbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gICAgICBpZiAobG9jaykge1xuICAgICAgICBsb2NrLmljb24gPSAnbWRpOmxvY2stb3V0bGluZSc7XG4gICAgICAgIGxvY2suc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgfVxuICAgIH0sIDUwMDApO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBhcHBseVRoZW1lcyhoYXNzLCBlbGVtZW50LCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUgfHwgJ2RlZmF1bHQnO1xuICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgZWxlbWVudCwgaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgdGhlbWVOYW1lKTtcbiAgfVxuXG4gIGV4dHJhRG9tQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKVxuICAgICAgLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgdGhpcy5hcHBseVRoZW1lcyh0aGlzLmhhc3MsIGVsZW0sIGVsZW0uc3RhdGUpO1xuICAgICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy13aXRoLWV4dHJhJywgRHluYW1pY1dpdGhFeHRyYSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEV2ZW50c01peGluIGZyb20gJy4uL21peGlucy9ldmVudHMtbWl4aW4uanMnO1xuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgSGFDb25maWdDdXN0b21VaSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXIuRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj48L3N0eWxlPlxuICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj0nbWRpOmFycm93LWxlZnQnXG4gICAgICAgICAgICBvbi1jbGljaz0nX2JhY2tIYW5kbGVyJ1xuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5DdXN0b20gVUkgc2V0dGluZ3M8L2Rpdj5cbiAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9J1tbaXNXaWRlXV0nPlxuICAgICAgICA8cGFwZXItY2FyZCBoZWFkaW5nPSdEZXZpY2UgbmFtZSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1jb250ZW50Jz5cbiAgICAgICAgICAgIFNldCBkZXZpY2UgbmFtZSBzbyB0aGF0IHlvdSBjYW4gcmVmZXJlbmNlIGl0IGluIHBlci1kZXZpY2Ugc2V0dGluZ3NcbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD0nTmFtZSdcbiAgICAgICAgICAgICAgdmFsdWU9J3t7bmFtZX19J1xuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcGFwZXItY2FyZD5cbiAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG5cbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogJ25hbWVDaGFuZ2VkJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5uYW1lID0gd2luZG93LmN1c3RvbVVJLmdldE5hbWUoKTtcbiAgfVxuXG4gIG5hbWVDaGFuZ2VkKG5hbWUpIHtcbiAgICB3aW5kb3cuY3VzdG9tVUkuc2V0TmFtZShuYW1lKTtcbiAgfVxuXG4gIF9iYWNrSGFuZGxlcigpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgdGhpcy5maXJlKCdsb2NhdGlvbi1jaGFuZ2VkJyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaGEtY29uZmlnLWN1c3RvbS11aScsIEhhQ29uZmlnQ3VzdG9tVWkpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYVRoZW1lZFNsaWRlciBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBtYXJnaW46IHZhcigtLWhhLXRoZW1lZC1zbGlkZXItbWFyZ2luLCBpbml0aWFsKTtcbiAgICAgIH1cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLXBpbi1zdGFydC1jb2xvcjogIHZhcigtLXBhcGVyLXNsaWRlci1waW4tY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuZGlzYWJsZS1vZmYtd2hlbi1taW4uaXMtb24ge1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXIta25vYi1jb2xvcik7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXIta25vYi1jb2xvcik7XG4gICAgICB9XG4gICAgICBwYXBlci1zbGlkZXIge1xuICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1oYS1wYXBlci1zbGlkZXItd2lkdGgsIDIwMHB4KTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHBhcGVyLXNsaWRlclxuICAgICAgICAgbWluPSdbW190aGVtZWRNaW5dXSdcbiAgICAgICAgIG1heD0nW1tfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgXCJtYXhcIiwgbWF4KV1dJ1xuICAgICAgICAgcGluPSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcInBpblwiLCBwaW4pXV0nXG4gICAgICAgICBjbGFzcyQ9J1tbY29tcHV0ZUNsYXNzKHRoZW1lLCBpc09uLCBfdGhlbWVkTWluKV1dJyB2YWx1ZT0nW1t2YWx1ZV1dJ1xuICAgICAgICAgb24tY2hhbmdlPSd2YWx1ZUNoYW5nZWQnPlxuICAgIDwvcGFwZXItc2xpZGVyPlxuICAgIGA7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuZGlzYWJsZU9mZldoZW5NaW4gPSAhdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZSh0aGlzLnRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pO1xuICAgIHRoaXMuY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGlzLnRoZW1lLCB0aGlzLmRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgfSxcbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICB9LFxuICAgICAgcGluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBpc09uOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlT2ZmV2hlbk1pbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgdGhlbWU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIF90aGVtZWRNaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBjb21wdXRlZDogJ19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1pblwiLCBtaW4pJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKScsXG4gICAgXTtcbiAgfVxuXG4gIGNvbXB1dGVFbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQodGhlbWUsIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCkge1xuICAgIHRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCA9IHRoaXMuX2NvbXB1dGVBdHRyaWJ1dGUoXG4gICAgICB0aGVtZSwgJ3JlcG9ydF93aGVuX25vdF9jaGFuZ2VkJywgIWRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZCk7XG4gIH1cblxuICBfY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgYXR0ciwgZGVmKSB7XG4gICAgaWYgKHRoZW1lKSB7XG4gICAgICBpZiAoYXR0ciBpbiB0aGVtZSkge1xuICAgICAgICByZXR1cm4gdGhlbWVbYXR0cl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG4gIH1cblxuICBjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIHRoZW1lZE1pbikge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBpZiAoaXNPbikge1xuICAgICAgcmVzdWx0ICs9ICdpcy1vbiAnO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHV0ZUF0dHJpYnV0ZSh0aGVtZSwgJ29mZl93aGVuX21pbicsICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKSB8fCB0aGVtZWRNaW4gPT09IDApIHtcbiAgICAgIC8vIElmIG9mZldoZW5NaW4gaXMgZW5hYmxlZCBkb24ndCBjdXN0b21pemUuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBgJHtyZXN1bHR9ZGlzYWJsZS1vZmYtd2hlbi1taW5gO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGVkVGhlbWVkUmVwb3J0V2hlbk5vdENoYW5nZWQgJiYgdGhpcy52YWx1ZSA9PT0gZXYudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS10aGVtZWQtc2xpZGVyJywgSGFUaGVtZWRTbGlkZXIpO1xuIiwiaW1wb3J0IGFwcGx5VGhlbWVzT25FbGVtZW50IGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9kb20vYXBwbHlfdGhlbWVzX29uX2VsZW1lbnQuanMnO1xuaW1wb3J0IGNvbXB1dGVTdGF0ZURvbWFpbiBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzJztcbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyc7XG5pbXBvcnQgc3RhdGVDYXJkVHlwZSBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2NhcmRfdHlwZS5qcyc7XG5cbmltcG9ydCAnLi4vdXRpbHMvaG9va3MuanMnO1xuaW1wb3J0ICcuL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMnO1xuaW1wb3J0ICcuL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMnO1xuXG5jb25zdCBTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUyA9IFsnY29uZmlndXJhdG9yJ107XG5jb25zdCBET01BSU5fVE9fU0xJREVSX1NVUFBPUlQgPSB7XG4gIGxpZ2h0OiAxLCAvLyBTVVBQT1JUX0JSSUdIVE5FU1NcbiAgY292ZXI6IDQsIC8vIFNVUFBPUlRfU0VUX1BPU0lUSU9OXG4gIGNsaW1hdGU6IDEsIC8vIFNVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFXG59O1xuY29uc3QgVFlQRV9UT19DT05UUk9MID0ge1xuICB0b2dnbGU6ICdoYS1lbnRpdHktdG9nZ2xlJyxcbiAgZGlzcGxheTogJycsXG4gIGNvdmVyOiAnaGEtY292ZXItY29udHJvbHMnLFxufTtcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRDdXN0b21VaSBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2lucHV0Q2hhbmdlZChoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmopJyxcbiAgICBdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAoY29udGFpbmVyLnRhZ05hbWUgPT09ICdESVYnICYmXG4gICAgICAgIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0ZScpIHx8IGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NoaWxkLWNhcmQnKSkpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgLy8gU2luY2UgdGhpcyBkb2Vzbid0IGFjdHVhbGx5IGNoYW5nZSB0aGUgYmFja2dyb3VuZCAtIG5vIG5lZWQgdG8gY2xlYXIgaXQuXG4gICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3ZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgaW5oZXJpdCknKTtcblxuICAgICAgLy8gUG9seWZpbGwgJ3VwZGF0ZVN0eWxlcycuXG4gICAgICBpZiAoIWNvbnRhaW5lci51cGRhdGVTdHlsZXMpIHtcbiAgICAgICAgY29udGFpbmVyLnVwZGF0ZVN0eWxlcyA9IChzdHlsZXMpID0+IHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KGtleSwgc3R5bGVzW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0Q2hhbmdlZCh0aGlzLmhhc3MsIHRoaXMuaW5EaWFsb2csIHRoaXMuc3RhdGVPYmopO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoeyBkaXNwbGF5OiAnJywgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLCB0aGlzLmhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sICdkZWZhdWx0Jyk7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xuICAgIH1cbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgYmFkZ2VNb2RlKGhhc3MsIHN0YXRlT2JqLCBkb21haW4pIHtcbiAgICBjb25zdCBzdGF0ZXMgPSBbXTtcbiAgICBpZiAoZG9tYWluID09PSAnZ3JvdXAnKSB7XG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGhhc3Muc3RhdGVzW2lkXTtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gSUQgJHtpZH0gaW4gZ3JvdXAgJHtzdGF0ZU9iai5lbnRpdHlfaWR9YCk7XG4gICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5iYWRnZXNfbGlzdCB8fFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5iYWRnZXNfbGlzdC5pbmNsdWRlcyhzdGF0ZS5lbnRpdHlfaWQpKSB7XG4gICAgICAgICAgc3RhdGVzLnB1c2god2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgICAgdGhpcywgc3RhdGUsIGZhbHNlIC8qIGluRGlhbG9nICovLCBmYWxzZSAvKiBhbGxvd0hpZGRlbiAqLykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzLnB1c2goc3RhdGVPYmopO1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH07XG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0ZScpKSB7XG4gICAgICAgICAgcGFyYW1zLm1hcmdpbiA9ICd2YXIoLS1oYS1iYWRnZXMtY2FyZC1tYXJnaW4sIDApJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhwYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgJ0hBLUJBREdFUy1DQVJEJyxcbiAgICAgIHsgaGFzcywgc3RhdGVzIH0pO1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci51cGRhdGVTdHlsZXMoe1xuICAgICAgICB3aWR0aDogJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLXdpZHRoLCBpbml0aWFsKScsXG4gICAgICAgICd0ZXh0LWFsaWduJzogJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLXRleHQtYWxpZ24sIGluaXRpYWwpJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmxhc3RDaGlsZC5zdHlsZS5mb250U2l6ZSA9ICc4NSUnO1xuXG4gICAgLy8gU2luY2UgdGhpcyB2YXJpYWJsZSBvbmx5IGFmZmVjdHMgYmFkZ2VzIG1vZGUgLSBubyBuZWVkIHRvIGNsZWFuIGl0IHVwLlxuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0taGEtc3RhdGUtbGFiZWwtYmFkZ2UtbWFyZ2luLWJvdHRvbScsICcwJyk7XG4gIH1cblxuICBjbGVhbkJhZGdlU3R5bGUoKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIGRpc3BsYXk6ICcnLFxuICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICd0ZXh0LWFsaWduJzogJycsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdHlsZXMoeyBkaXNwbGF5OiAnJywgbWFyZ2luOiAnJyB9KTtcbiAgfVxuXG4gIGFwcGx5VGhlbWVzKGhhc3MsIG1vZGlmaWVkT2JqKSB7XG4gICAgbGV0IHRoZW1lVGFyZ2V0ID0gdGhpcztcbiAgICBsZXQgdGhlbWVOYW1lID0gJ2RlZmF1bHQnO1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoZW1lVGFyZ2V0ID0gdGhpcy5fY29udGFpbmVyO1xuICAgIH1cbiAgICBpZiAobW9kaWZpZWRPYmouYXR0cmlidXRlcy50aGVtZSkge1xuICAgICAgdGhlbWVOYW1lID0gbW9kaWZpZWRPYmouYXR0cmlidXRlcy50aGVtZTtcbiAgICB9XG4gICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICB0aGVtZVRhcmdldCwgaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgdGhlbWVOYW1lKTtcbiAgfVxuXG4gIG1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikge1xuICAgIGlmICghbW9kaWZpZWRPYmopIHtcbiAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMCcgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IG1hcmdpbjogJycsIHBhZGRpbmc6ICcnIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBvYmosIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIERPTUFJTl9UT19TTElERVJfU1VQUE9SVFtkb21haW5dICYmXG4gICAgICAoRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiBvYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMpICYmXG4gICAgICBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgJiYgb2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlICE9PSAnbm8tc2xpZGVyJztcbiAgfVxuXG4gIGlucHV0Q2hhbmdlZChoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmopIHtcbiAgICBpZiAoIXN0YXRlT2JqIHx8ICFoYXNzIHx8ICF0aGlzLl9pc0F0dGFjaGVkKSByZXR1cm47XG4gICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKTtcbiAgICBjb25zdCBtb2RpZmllZE9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgIHRoaXMsIHN0YXRlT2JqLCBpbkRpYWxvZywgdHJ1ZSAvKiBhbGxvd0hpZGRlbiAqLyk7XG5cbiAgICBpZiAodGhpcy5tYXliZUhpZGVFbnRpdHkobW9kaWZpZWRPYmopKSByZXR1cm47XG5cbiAgICB0aGlzLmFwcGx5VGhlbWVzKGhhc3MsIG1vZGlmaWVkT2JqKTtcblxuICAgIGlmICghaW5EaWFsb2cgJiYgbW9kaWZpZWRPYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgPT09ICdiYWRnZXMnKSB7XG4gICAgICB0aGlzLmJhZGdlTW9kZShoYXNzLCBtb2RpZmllZE9iaiwgZG9tYWluKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWd1bGFyTW9kZV8oaGFzcywgaW5EaWFsb2csIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH1cbiAgfVxuXG4gIHJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIHRoaXMuY2xlYW5CYWRnZVN0eWxlKCk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBoYXNzLFxuICAgICAgc3RhdGVPYmosXG4gICAgICBpbkRpYWxvZyxcbiAgICB9O1xuICAgIGNvbnN0IG9yaWdpbmFsU3RhdGVDYXJkVHlwZSA9IHN0YXRlQ2FyZFR5cGUoaGFzcywgc3RhdGVPYmopO1xuICAgIGxldCBjdXN0b21TdGF0ZUNhcmRUeXBlO1xuICAgIGNvbnN0IHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeTtcblxuICAgIGlmIChkb21haW4gPT09ICdsaWdodCcgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBjb250cm9sRWxlbWVudDogJ2hhLWVudGl0eS10b2dnbGUnLFxuICAgICAgICBzZXJ2aWNlTWluOiAndHVybl9vZmYnLFxuICAgICAgICBzZXJ2aWNlTWF4OiAndHVybl9vbicsXG4gICAgICAgIHZhbHVlTmFtZTogJ2JyaWdodG5lc3MnLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjb3ZlcicgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBjb250cm9sRWxlbWVudDogJ2hhLWNvdmVyLWNvbnRyb2xzJyxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHNlcnZpY2VNaW46ICdjbG9zZV9jb3ZlcicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICdzZXRfY292ZXJfcG9zaXRpb24nLFxuICAgICAgICBzZXRWYWx1ZU5hbWU6ICdwb3NpdGlvbicsXG4gICAgICAgIHZhbHVlTmFtZTogJ2N1cnJlbnRfcG9zaXRpb24nLFxuICAgICAgICBuYW1lT246ICdvcGVuJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoZG9tYWluID09PSAnY2xpbWF0ZScgJiYgdGhpcy5zbGlkZXJFbGlnaWJsZV8oZG9tYWluLCBzdGF0ZU9iaiwgaW5EaWFsb2cpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywge1xuICAgICAgICBjb250cm9sRWxlbWVudDogJ2hhLWNsaW1hdGUtc3RhdGUnLFxuICAgICAgICBtaW46IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWluX3RlbXAgfHwgLTEwMCxcbiAgICAgICAgbWF4OiBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF90ZW1wIHx8IDIwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHNlcnZpY2VNYXg6ICdzZXRfdGVtcGVyYXR1cmUnLFxuICAgICAgICB2YWx1ZU5hbWU6ICd0ZW1wZXJhdHVyZScsXG4gICAgICAgIG5hbWVPbjogJycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKFRZUEVfVE9fQ09OVFJPTFtvcmlnaW5hbFN0YXRlQ2FyZFR5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9IFRZUEVfVE9fQ09OVFJPTFtvcmlnaW5hbFN0YXRlQ2FyZFR5cGVdO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQgJiZcbiAgICAgICAgICAgICAgICFTSE9XX0xBU1RfQ0hBTkdFRF9CTEFDS0xJU1RFRF9DQVJEUy5pbmNsdWRlcyhvcmlnaW5hbFN0YXRlQ2FyZFR5cGUpKSB7XG4gICAgICBwYXJhbXMuaW5EaWFsb2cgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09ICd1bmF2YWlsYWJsZScpIHtcbiAgICAgIHBhcmFtcy5jb250cm9sRWxlbWVudCA9ICcnO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sX2VsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sX2VsZW1lbnQ7XG4gICAgfVxuXG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgIChzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIHx8IGN1c3RvbVN0YXRlQ2FyZFR5cGUgfHwgYFNUQVRFLUNBUkQtJHtvcmlnaW5hbFN0YXRlQ2FyZFR5cGV9YCkudG9VcHBlckNhc2UoKSxcbiAgICAgIHBhcmFtcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC1jdXN0b20tdWknLCBTdGF0ZUNhcmRDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IEN1aUJhc2VFbGVtZW50IGZyb20gJy4vY3VpLWJhc2UtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vZHluYW1pYy13aXRoLWV4dHJhLmpzJztcbmltcG9ydCAnLi9oYS10aGVtZWQtc2xpZGVyLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBTdGF0ZUNhcmRXaXRoU2xpZGVyIGV4dGVuZHMgQ3VpQmFzZUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLWZsZXgtZmFjdG9yc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5zZWNvbmQtbGluZSwgLnN0YXRlLWFuZC10b2dnbGUsIC5zdGF0ZS1pbmZvIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc3RhdGUtYW5kLXRvZ2dsZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnNlY29uZC1saW5lIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLnNlY29uZC1saW5lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICB9XG4gICAgICAuc3RyZXRjaCAuc2Vjb25kLWxpbmUsIC5zdHJldGNoIGhhLXRoZW1lZC1zbGlkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS1oYS1wYXBlci1zbGlkZXItd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1pbmZvIHtcbiAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsO1xuICAgICAgfVxuICAgICAgaGEtdGhlbWVkLXNsaWRlciwgLnRvcC13cmFwcGVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnRvcC13cmFwcGVyLnN0cmV0Y2gge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9J2NvbnRhaW5lcicgY2xhc3MkPSdob3Jpem9udGFsIGxheW91dCBmbGV4IHRvcC13cmFwcGVyIFtbX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKV1dJz5cbiAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGp1c3RpZmllZCBmbGV4LWF1dG8gc3RhdGUtYW5kLXRvZ2dsZSc+XG4gICAgICAgIDxzdGF0ZS1pbmZvIGNsYXNzPSdzdGF0ZS1pbmZvJyBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXScgaW4tZGlhbG9nPSdbW3Nob3dMYXN0Q2hhbmdlZChzdGF0ZU9iaiwgaW5EaWFsb2csIGV4dHJhKV1dJyBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nIGNsYXNzPSdmbGV4LWF1dG8nPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCcgaXRlbXM9J1tbZXh0cmFdXSc+XG4gICAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbYnJlYWtTbGlkZXJdXScgY2xhc3M9J2hpZGRlbic+XG4gICAgICAgICAgPGR5bmFtaWMtd2l0aC1leHRyYSBoYXNzPSdbW2hhc3NdXScgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nIGNvbnRyb2wtZWxlbWVudD0nW1tjb250cm9sRWxlbWVudF1dJyBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+PC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tzaG93U2xpZGVyXV0nIHJlc3RhbXA+XG4gICAgICAgIDxkaXYgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGZsZXgtYXV0byBlbmQtanVzdGlmaWVkIHNlY29uZC1saW5lJz5cbiAgICAgICAgICA8aGEtdGhlbWVkLXNsaWRlclxuICAgICAgICAgICAgaWQ9J3NsaWRlcidcbiAgICAgICAgICAgIG1heD1bW21heF1dXG4gICAgICAgICAgICBtaW49W1ttaW5dXVxuICAgICAgICAgICAgdGhlbWU9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5zbGlkZXJfdGhlbWVdXSdcbiAgICAgICAgICAgIGlzLW9uPSdbW2lzT24oc3RhdGVPYmosIG5hbWVPbildXSdcbiAgICAgICAgICAgIHZhbHVlPSd7e3NsaWRlclZhbHVlfX0nXG4gICAgICAgICAgICBkaXNhYmxlLW9mZi13aGVuLW1pbj0ne3tkaXNhYmxlT2ZmV2hlbk1pbn19J1xuICAgICAgICAgICAgb24tY2hhbmdlPSdzbGlkZXJDaGFuZ2VkJ1xuICAgICAgICAgICAgb24tY2xpY2s9J3N0b3BQcm9wYWdhdGlvbic+XG4gICAgICAgICAgPC9oYS10aGVtZWQtc2xpZGVyPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shYnJlYWtTbGlkZXJdXSc+XG4gICAgICAgICAgICA8ZHluYW1pYy13aXRoLWV4dHJhIGhhc3M9J1tbaGFzc11dJyBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXScgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz48L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZG9tYWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlTWF4OiBTdHJpbmcsXG4gICAgICB2YWx1ZU5hbWU6IFN0cmluZyxcbiAgICAgIHNldFZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgbmFtZU9uOiB7IHR5cGU6IFN0cmluZywgdmFsdWU6ICdvbicgfSxcbiAgICAgIG1pbjogeyB0eXBlOiBOdW1iZXIsIHZhbHVlOiAwIH0sXG4gICAgICBtYXg6IHsgdHlwZTogTnVtYmVyLCB2YWx1ZTogMjU1IH0sXG5cbiAgICAgIHNsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgZGlzYWJsZU9mZldoZW5NaW46IEJvb2xlYW4sXG4gICAgICBtb2RlOiBTdHJpbmcsXG4gICAgICBzdHJldGNoU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBicmVha1NsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaGlkZVNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbGluZVRvb0xvbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG1pbkxpbmVCcmVhazogTnVtYmVyLFxuICAgICAgbWF4TGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICBzaG93U2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgY29tcHV0ZWQ6ICdfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fb25Jcm9uUmVzaXplID0gdGhpcy5fb25Jcm9uUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fb25Jcm9uUmVzaXplKTtcbiAgICB0aGlzLl9pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ3N0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpJyxcbiAgICBdO1xuICB9XG5cbiAgX3dhaXRGb3JMYXlvdXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgIHRoaXMuX3NldE1vZGUoKTtcbiAgICBpZiAodGhpcy5fZnJhbWVJZCkgcmV0dXJuO1xuICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSBmYWxzZTtcbiAgICB0aGlzLl9mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl9mcmFtZUlkID0gbnVsbDtcbiAgICAgIHRoaXMucmVhZHlUb0NvbXB1dGUgPSB0cnVlO1xuICAgICAgdGhpcy5fb25Jcm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0TW9kZSgpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBoaWRlU2xpZGVyOiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicgJiYgdGhpcy5saW5lVG9vTG9uZyxcbiAgICAgIGJyZWFrU2xpZGVyOlxuICAgICAgICAgICAodGhpcy5tb2RlID09PSAnYnJlYWstc2xpZGVyJyB8fCB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpICYmXG4gICAgICAgICAgIHRoaXMubGluZVRvb0xvbmcsXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuc2hvd1NsaWRlcikge1xuICAgICAgb2JqLmJyZWFrU2xpZGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gIH1cblxuICBfb25Jcm9uUmVzaXplKCkge1xuICAgIGlmICghdGhpcy5yZWFkeVRvQ29tcHV0ZSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICduby1zbGlkZXInKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBoaWRlU2xpZGVyOiB0cnVlLFxuICAgICAgICBicmVha1NsaWRlcjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2QnJlYWtTbGlkZXIgPSB0aGlzLmJyZWFrU2xpZGVyO1xuICAgIGNvbnN0IHByZXZIaWRlU2xpZGVyID0gdGhpcy5oaWRlU2xpZGVyO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBsaW5lVG9vTG9uZzogZmFsc2UsXG4gICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy4kO1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXJXaWR0aCA8PSB0aGlzLm1pbkxpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXJXaWR0aCA+PSB0aGlzLm1heExpbmVCcmVhaykge1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJldkhpZGVTbGlkZXIgJiYgdGhpcy5tb2RlID09PSAnaGlkZS1zbGlkZXInKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdW5oaWRlIHRoZSBzbGlkZXIgaW4gb3JkZXIgdG8gcmVjYWxjdWxhdGUgaGVpZ2h0LlxuICAgICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBzdGF0ZUhlaWdodCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcuc3RhdGUtaW5mbycpLmNsaWVudEhlaWdodDtcbiAgICAgIHRoaXMubGluZVRvb0xvbmcgPSBjb250YWluZXJIZWlnaHQgPiBzdGF0ZUhlaWdodCAqIDEuNTtcbiAgICAgIGlmICh0aGlzLmxpbmVUb29Mb25nKSB7XG4gICAgICAgIHRoaXMubWluTGluZUJyZWFrID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKCFwcmV2QnJlYWtTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5tYXhMaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fc2V0TW9kZSgpO1xuICB9XG5cbiAgX2NvbXB1dGVXcmFwQ2xhc3MobW9kZSwgc3RyZXRjaFNsaWRlciwgbGluZVRvb0xvbmcsIGluRGlhbG9nKSB7XG4gICAgaWYgKGluRGlhbG9nKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChtb2RlID09PSAnc2luZ2xlLWxpbmUnKSB7XG4gICAgICByZXR1cm4gJ25vd3JhcCc7XG4gICAgfVxuICAgIGlmIChzdHJldGNoU2xpZGVyICYmIGxpbmVUb29Mb25nKSB7XG4gICAgICByZXR1cm4gJ3N0cmV0Y2ggd3JhcCc7XG4gICAgfVxuICAgIHJldHVybiAnd3JhcCc7XG4gIH1cblxuICBfc2hvd1NsaWRlcihpbkRpYWxvZywgc3RhdGVPYmosIGhpZGVTbGlkZXIpIHtcbiAgICBpZiAoaW5EaWFsb2cgfHwgaGlkZVNsaWRlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSwgMTApO1xuICAgIGNvbnN0IHBhcmFtID0geyBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH07XG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHJldHVybjtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZXInKTtcbiAgICBpZiAoZXYudGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgIC8vIE5vIFNoYWRvdyBET00gLSB3ZSBoYXZlIGFjY2VzcyB0byBvcmlnaW5hbCB0YXJnZXQuXG4gICAgICAoeyB0YXJnZXQgfSA9IGV2KTtcbiAgICB9IGVsc2UgaWYgKGV2LnBhdGgpIHtcbiAgICAgIFt0YXJnZXRdID0gZXYucGF0aDtcbiAgICB9IGVsc2UgaWYgKGV2LmNvbXBvc2VkUGF0aCkge1xuICAgICAgW3RhcmdldF0gPSBldi5jb21wb3NlZFBhdGgoKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSAwIHx8ICh2YWx1ZSA8PSB0YXJnZXQubWluICYmICF0aGlzLmRpc2FibGVPZmZXaGVuTWluKSkge1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2VNaW4sIHBhcmFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1bdGhpcy5zZXRWYWx1ZU5hbWUgfHwgdGhpcy52YWx1ZU5hbWVdID0gdmFsdWU7XG4gICAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZU1heCwgcGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChzdGF0ZU9iaiwgbmFtZU9uLCB2YWx1ZU5hbWUpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBzbGlkZXJWYWx1ZTogdGhpcy5pc09uKHN0YXRlT2JqLCBuYW1lT24pID8gc3RhdGVPYmouYXR0cmlidXRlc1t2YWx1ZU5hbWVdIDogMCxcbiAgICB9O1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHtcbiAgICAgICAgbWluTGluZUJyZWFrOiAwLFxuICAgICAgICBtYXhMaW5lQnJlYWs6IDk5OSxcbiAgICAgICAgaGlkZVNsaWRlcjogZmFsc2UsXG4gICAgICAgIGJyZWFrU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgbGluZVRvb0xvbmc6IGZhbHNlLFxuICAgICAgICBtb2RlOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSxcbiAgICAgICAgc3RyZXRjaFNsaWRlcjogISFzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0cmV0Y2hfc2xpZGVyLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0UHJvcGVydGllcyhvYmopO1xuICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgdGhpcy5fd2FpdEZvckxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzT24oc3RhdGVPYmosIG5hbWVPbikge1xuICAgIHJldHVybiBzdGF0ZU9iaiAmJiAoIW5hbWVPbiB8fCBzdGF0ZU9iai5zdGF0ZSA9PT0gbmFtZU9uKTtcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbihldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInLCBTdGF0ZUNhcmRXaXRoU2xpZGVyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhvdXRTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPSdjb250YWluZXInIGNsYXNzPSdob3Jpem9udGFsIGxheW91dCBqdXN0aWZpZWQnPlxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgICBjbGFzcz0nc3RhdGUtaW5mbydcbiAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nXG4gICAgICAgICAgc2Vjb25kYXJ5LWxpbmUkPSdbW2hhc0V4dHJhKGV4dHJhKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0JyBpdGVtcz0nW1tleHRyYV1dJz5cbiAgICAgICAgICA8ZGl2PltbaXRlbV1dPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3N0YXRlLWluZm8+XG4gICAgICA8ZHluYW1pYy13aXRoLWV4dHJhXG4gICAgICAgICAgaGFzcz0nW1toYXNzXV0nXG4gICAgICAgICAgc3RhdGUtb2JqPSdbW3N0YXRlT2JqXV0nXG4gICAgICAgICAgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nXG4gICAgICAgICAgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPlxuICAgICAgPC9keW5hbWljLXdpdGgtZXh0cmE+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLXdpdGhvdXQtc2xpZGVyJywgU3RhdGVDYXJkV2l0aG91dFNsaWRlcik7XG4iLCIvLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5leHBvcnQgZGVmYXVsdCAoc3VwZXJDbGFzcykgPT4ge1xuICAvKipcbiAgICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICovXG4gIGNsYXNzIEV2ZW50c01peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICAgKiAgIHBheWxvYWQuXG4gICAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgICovXG4gICAgZmlyZSh0eXBlLCBkZXRhaWwgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCh0eXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IG9wdGlvbnMuYnViYmxlcyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogQm9vbGVhbihvcHRpb25zLmNhbmNlbGFibGUpLFxuICAgICAgICBjb21wb3NlZDogb3B0aW9ucy5jb21wb3NlZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuY29tcG9zZWQsXG4gICAgICB9KTtcbiAgICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbDtcbiAgICAgIGNvbnN0IG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgdGhpcztcbiAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudHNNaXhpbjtcbn07XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldFZpZXdFbnRpdGllcyBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF92aWV3X2VudGl0aWVzLmpzJztcblxuaW1wb3J0ICcuLi9lbGVtZW50cy9oYS1jb25maWctY3VzdG9tLXVpLmpzJztcbmltcG9ydCBWRVJTSU9OIGZyb20gJy4vdmVyc2lvbi5qcyc7XG5cbndpbmRvdy5jdXN0b21VSSA9IHdpbmRvdy5jdXN0b21VSSB8fCB7XG4gIFNVUFBPUlRFRF9TTElERVJfTU9ERVM6IFtcbiAgICAnc2luZ2xlLWxpbmUnLCAnYnJlYWstc2xpZGVyJywgJ2JyZWFrLXNsaWRlci10b2dnbGUnLCAnaGlkZS1zbGlkZXInLCAnbm8tc2xpZGVyJyxcbiAgXSxcblxuICBkb21Ib3N0KGVsZW0pIHtcbiAgICBpZiAoZWxlbSA9PT0gZG9jdW1lbnQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtLmdldFJvb3ROb2RlKCk7XG4gICAgcmV0dXJuIChyb290IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkgPyAvKiogQHR5cGUge1NoYWRvd1Jvb3R9ICovIChyb290KS5ob3N0IDogcm9vdDtcbiAgfSxcblxuICBsaWdodE9yU2hhZG93KGVsZW0sIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGVsZW0uc2hhZG93Um9vdCA/XG4gICAgICBlbGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOlxuICAgICAgZWxlbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfSxcblxuICBnZXRFbGVtZW50SGllcmFyY2h5KHJvb3QsIGhpZXJhcmNoeSkge1xuICAgIGlmIChyb290ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlbGVtID0gaGllcmFyY2h5LnNoaWZ0KCk7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3cocm9vdCwgZWxlbSksIGhpZXJhcmNoeSk7XG4gICAgfVxuICAgIHJldHVybiByb290O1xuICB9LFxuXG4gIGdldENvbnRleHQoZWxlbSkge1xuICAgIGlmIChlbGVtLl9jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW0uX2NvbnRleHQgPSBbXTtcbiAgICAgIGZvciAobGV0IGVsZW1lbnQgPSAoZWxlbS50YWdOYW1lID09PSAnSEEtRU5USVRJRVMtQ0FSRCcgPyB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtKSA6IGVsZW0pO1xuICAgICAgICBlbGVtZW50OyBlbGVtZW50ID0gd2luZG93LmN1c3RvbVVJLmRvbUhvc3QoZWxlbWVudCkpIHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICBjYXNlICdIQS1FTlRJVElFUy1DQVJEJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmdyb3VwRW50aXR5KSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50Lmdyb3VwRW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkgPT09IGZhbHNlICYmIGVsZW1lbnQuc3RhdGVzICYmIGVsZW1lbnQuc3RhdGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goYGdyb3VwLiR7Y29tcHV0ZVN0YXRlRG9tYWluKGVsZW1lbnQuc3RhdGVzWzBdKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ01PUkUtSU5GTy1HUk9VUCc6XG4gICAgICAgICAgY2FzZSAnU1RBVEUtQ0FSRC1DT05URU5UJzpcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnN0YXRlT2JqKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LnN0YXRlT2JqLmVudGl0eV9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIQS1DQVJEUyc6XG4gICAgICAgICAgICBlbGVtLl9jb250ZXh0LnB1c2goZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpIHx8ICdkZWZhdWx0X3ZpZXcnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIG5vIGRlZmF1bHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbS5fY29udGV4dC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtLl9jb250ZXh0O1xuICB9LFxuXG4gIGZpbmRNYXRjaChrZXksIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHJldHVybiBudWxsO1xuICAgIGlmIChvcHRpb25zW2tleV0pIHJldHVybiBrZXk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbmQob3B0aW9uID0+IGtleS5tYXRjaChgXiR7b3B0aW9ufSRgKSk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2gobmFtZSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBzdGF0ZU9iajtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VbbWF0Y2hdKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIG1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0Q29udGV4dChlbGVtKTtcbiAgICBpZiAoIWNvbnRleHQpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCkge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge307XG4gICAgY29udGV4dC5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IHRoaXMuZmluZE1hdGNoKGMsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXBbbWF0Y2hdKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYXR0cmlidXRlcywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcblxuICAgIHJldHVybiB3aW5kb3cuY3VzdG9tVUkuYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKTtcbiAgfSxcblxuICBfc2V0S2VlcChvYmosIHZhbHVlKSB7XG4gICAgaWYgKG9iai5fY3VpX2tlZXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgb2JqLl9jdWlfa2VlcCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gb2JqLl9jdWlfa2VlcCAmJiB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgbWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhoYXNzLCBzdGF0ZXMsIHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKCFhdHRyaWJ1dGVzLnRlbXBsYXRlcykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHN0YXRlT2JqLCB0cnVlKTtcbiAgICAgIHJldHVybiBzdGF0ZU9iajtcbiAgICB9XG4gICAgY29uc3QgbmV3QXR0cmlidXRlcyA9IHt9O1xuICAgIGxldCBoYXNHbG9iYWwgPSBmYWxzZTtcbiAgICBsZXQgaGFzQ2hhbmdlcyA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMudGVtcGxhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gYXR0cmlidXRlcy50ZW1wbGF0ZXNba2V5XTtcbiAgICAgIGlmICh0ZW1wbGF0ZS5tYXRjaCgvXFxiKGVudGl0aWVzfGhhc3MpXFxiLykpIHtcbiAgICAgICAgaGFzR2xvYmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgdGVtcGxhdGUsIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMsXG4gICAgICAgIChzdGF0ZU9iai51bnRlbXBsYXRlZF9hdHRyaWJ1dGVzICYmIHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXNba2V5XSkgfHxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSxcbiAgICAgICAgc3RhdGVPYmoudW50ZW1wbGF0ZWRfc3RhdGUgfHwgc3RhdGVPYmouc3RhdGUpO1xuICAgICAgLy8gSW4gY2FzZSBvZiBudWxsIGRvbid0IHNldCB0aGUgdmFsdWUuXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcbiAgICAgIG5ld0F0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgaWYgKGtleSA9PT0gJ3N0YXRlJykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLnN0YXRlKSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnX3N0YXRlRGlzcGxheScpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5KSB7XG4gICAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IGF0dHJpYnV0ZXNba2V5XSkge1xuICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosICFoYXNHbG9iYWwpO1xuICAgIGlmICghaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcyA9PT0gYXR0cmlidXRlcykge1xuICAgICAgLy8gV2UgYXJlIG9wZXJhdGluZyBvbiByZWFsIGF0dHJpYnV0ZXMuIFJlcGxhY2UgdGhlbS5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIG5ld0F0dHJpYnV0ZXMpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnc3RhdGUnKSkge1xuICAgICAgICBpZiAobmV3QXR0cmlidXRlcy5zdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5zdGF0ZSA9IFN0cmluZyhuZXdBdHRyaWJ1dGVzLnN0YXRlKTtcbiAgICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGUgPSBzdGF0ZU9iai5zdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXdBdHRyaWJ1dGVzLCAnX3N0YXRlRGlzcGxheScpKSB7XG4gICAgICAgIHJlc3VsdC5fc3RhdGVEaXNwbGF5ID0gbmV3QXR0cmlidXRlcy5fc3RhdGVEaXNwbGF5O1xuICAgICAgICByZXN1bHQudW50ZW1wbGF0ZWRfc3RhdGVEaXNwbGF5ID0gc3RhdGVPYmouX3N0YXRlRGlzcGxheTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChyZXN1bHQsICFoYXNHbG9iYWwpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gT3BlcmF0aW5nIG9uIGNvbnRleHQtYXdhcmUgYXR0cmlidXRlcy4gUmV0dXJuIHNoYWxsb3cgY29weSBvZiBvYmplY3QuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmopIHtcbiAgICBjb25zdCBuZXdSZXN1bHQgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlQXR0cmlidXRlcyhcbiAgICAgIGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIHN0YXRlT2JqLmF0dHJpYnV0ZXMpO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gKG5ld1Jlc3VsdCAhPT0gc3RhdGVPYmopO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGVzKG9iaikge1xuICAgICAgaWYgKCFvYmopIHJldHVybjtcbiAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgICAgIGhhc3MsIHN0YXRlcywgbmV3UmVzdWx0LCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgaGFzQ2hhbmdlcyB8PSAocmVzdWx0ICE9PSBuZXdSZXN1bHQpO1xuICAgICAgfSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmRldmljZSk7XG4gICAgICBjaGVja0F0dHJpYnV0ZXMob2JqLmdyb3VwKTtcbiAgICB9XG5cbiAgICBjaGVja0F0dHJpYnV0ZXMoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2UpO1xuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKTtcbiAgICBpZiAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaikgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICBpZiAoaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlT2JqO1xuICB9LFxuXG4gIGFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIHN0YXRlOiBzdGF0ZU9iai5zdGF0ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlT2JqLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpLFxuICAgICAgdW50ZW1wbGF0ZWRfYXR0cmlidXRlczogc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGVPYmoubGFzdF9jaGFuZ2VkLFxuICAgIH07XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3QoZWxlbSwgc3RhdGVPYmosIGluRGlhbG9nLCBhbGxvd0hpZGRlbikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGxldCBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeURldmljZShzdGF0ZU9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0QnlHcm91cChlbGVtLCBvYmopO1xuICAgIG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgZWxlbS5oYXNzLCBlbGVtLmhhc3Muc3RhdGVzLCBvYmosIG9iai5hdHRyaWJ1dGVzKTtcblxuICAgIGlmIChvYmogIT09IHN0YXRlT2JqICYmIG9iai5hdHRyaWJ1dGVzLmhpZGRlbiAmJiBhbGxvd0hpZGRlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZml4R3JvdXBUaXRsZXMoKSB7XG4gICAgY29uc3QgaG9tZUFzc2lzdGFudE1haW4gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJ10pO1xuICAgIGlmIChob21lQXNzaXN0YW50TWFpbiA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcywgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaGFDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGhvbWVBc3Npc3RhbnRNYWluLCBbXG4gICAgICAncGFydGlhbC1jYXJkcycsXG4gICAgICAnaGEtY2FyZHNbdmlldy12aXNpYmxlXSddKTtcbiAgICBpZiAoaGFDYXJkcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYUNhcmRzLCAnLm1haW4nKSB8fCBoYUNhcmRzLiQubWFpbjtcbiAgICBjb25zdCBjYXJkcyA9IG1haW4ucXVlcnlTZWxlY3RvckFsbCgnaGEtZW50aXRpZXMtY2FyZCcpO1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmIChjYXJkLmdyb3VwRW50aXR5KSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICBjYXJkLFxuICAgICAgICAgIGNhcmQuZ3JvdXBFbnRpdHksXG4gICAgICAgICAgZmFsc2UgLyogaW5EaWFsb2cgKi8sXG4gICAgICAgICAgZmFsc2UgLyogYWxsb3dIaWRkZW4gKi8pO1xuICAgICAgICBpZiAob2JqICE9PSBjYXJkLmdyb3VwRW50aXR5ICYmIG9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUpIHtcbiAgICAgICAgICBjb25zdCBuYW1lRWxlbSA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGNhcmQsICcubmFtZScpO1xuICAgICAgICAgIG5hbWVFbGVtLnRleHRDb250ZW50ID0gb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGNvbnRyb2xDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLWNhcmRzJ10pO1xuICAgIGlmIChwYXJ0aWFsQ2FyZHMgPT09IG51bGwpIHtcbiAgICAgIC8vIERPTSBub3QgcmVhZHkuIFdhaXQgMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zLmJpbmQobnVsbCwgY29sdW1ucyksXG4gICAgICAgIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwYXJ0aWFsQ2FyZHMubXFscy5mb3JFYWNoKChtcWwpID0+IHtcbiAgICAgIG1xbC5yZW1vdmVMaXN0ZW5lcihwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlKTtcbiAgICB9KTtcbiAgICBwYXJ0aWFsQ2FyZHMubXFscyA9IGNvbHVtbnMubWFwKCh3aWR0aCkgPT4ge1xuICAgICAgY29uc3QgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEoYChtaW4td2lkdGg6ICR7d2lkdGh9cHgpYCk7XG4gICAgICBtcWwuYWRkTGlzdGVuZXIocGFydGlhbENhcmRzLmhhbmRsZVdpbmRvd0NoYW5nZSk7XG4gICAgICByZXR1cm4gbXFsO1xuICAgIH0pO1xuICAgIHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UoKTtcbiAgfSxcblxuICB1c2VDdXN0b21pemVyKCkge1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgY29uc3QgY3VzdG9taXplciA9IG1haW4uaGFzcy5zdGF0ZXNbJ2N1c3RvbWl6ZXIuY3VzdG9taXplciddO1xuICAgIGlmICghY3VzdG9taXplcikgcmV0dXJuO1xuICAgIGlmIChjdXN0b21pemVyLmF0dHJpYnV0ZXMuY29sdW1ucykge1xuICAgICAgd2luZG93LmN1c3RvbVVJLmNvbnRyb2xDb2x1bW5zKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMpIHtcbiAgICAgIC8vIFRPRE86IFdvbid0IHdvcmtpbmcgc3RhcnRpbmcgZnJvbSBIQSAwLjcxXG4gICAgICBpZiAod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsICYmIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKSB7XG4gICAgICAgIGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5oaWRlX2F0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICAgICAgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGF0dHIpKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFU1thdHRyXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGVBdHRyaWJ1dGVzKCkge1xuICAgIGlmICghd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsKSB7XG4gICAgICAvLyBBcHAuanMgd2Fzbid0IHBhcnNlZCB5ZXQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkudXBkYXRlQXR0cmlidXRlcywgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tVWlBdHRyaWJ1dGVzID0ge1xuICAgICAgZ3JvdXA6IHVuZGVmaW5lZCxcbiAgICAgIGRldmljZTogdW5kZWZpbmVkLFxuICAgICAgdGVtcGxhdGVzOiB1bmRlZmluZWQsXG4gICAgICBzdGF0ZV9jYXJkX21vZGU6IHtcbiAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGxpZ2h0OiB3aW5kb3cuY3VzdG9tVUkuU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgICAgIGNvdmVyOiB3aW5kb3cuY3VzdG9tVUkuU1VQUE9SVEVEX1NMSURFUl9NT0RFUy5jb25jYXQoJ2JhZGdlcycpLFxuICAgICAgICAgICcqJzogWydiYWRnZXMnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzdGF0ZV9jYXJkX2N1c3RvbV91aV9zZWNvbmRhcnk6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgIGJhZGdlc19saXN0OiB7IHR5cGU6ICdqc29uJyB9LFxuICAgICAgc2hvd19sYXN0X2NoYW5nZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICBoaWRlX2NvbnRyb2w6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICBleHRyYV9kYXRhX3RlbXBsYXRlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICBleHRyYV9iYWRnZTogeyB0eXBlOiAnanNvbicgfSxcbiAgICAgIHN0cmV0Y2hfc2xpZGVyOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgc2xpZGVyX3RoZW1lOiB7IHR5cGU6ICdqc29uJyB9LFxuICAgICAgdGhlbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgIGNvbmZpcm1fY29udHJvbHM6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICBjb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jazogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgIGhpZGVfaW5fZGVmYXVsdF92aWV3OiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgIH07XG4gICAgaWYgKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTLCBjdXN0b21VaUF0dHJpYnV0ZXMpO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGVDb25maWdQYW5lbCgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnJykpIHJldHVybjtcbiAgICBjb25zdCBoYVBhbmVsQ29uZmlnID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoZG9jdW1lbnQsIFtcbiAgICAgICdob21lLWFzc2lzdGFudCcsXG4gICAgICAnaG9tZS1hc3Npc3RhbnQtbWFpbicsXG4gICAgICAncGFydGlhbC1wYW5lbC1yZXNvbHZlcicsXG4gICAgICAnaGEtcGFuZWwtY29uZmlnJ10pO1xuICAgIGlmICghaGFQYW5lbENvbmZpZykge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxMDBtcy5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS51cGRhdGVDb25maWdQYW5lbCwgMTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFDb25maWdOYXZpZ2F0aW9uID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaGFQYW5lbENvbmZpZywgW1xuICAgICAgJ2hhLWNvbmZpZy1kYXNoYm9hcmQnLFxuICAgICAgJ2hhLWNvbmZpZy1uYXZpZ2F0aW9uJ10pO1xuICAgIGlmIChoYUNvbmZpZ05hdmlnYXRpb24pIHtcbiAgICAgIC8vIEhhQ29uZmlnTmF2aWdhdGlvbiBzdGFydGVkIHVzaW5nIGxvY2FsaXplIG9uIDIxLjAxLjIwMThcbiAgICAgIGlmIChoYUNvbmZpZ05hdmlnYXRpb24ubG9jYWxpemUgJiYgIWhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCkge1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uY3VpUGF0Y2ggPSB0cnVlO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUxvYWRlZCA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZDtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlQ2FwdGlvbjtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbiA9IGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZURlc2NyaXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVMb2FkZWQgPSAoaGFzcywgcGFnZSkgPT5cbiAgICAgICAgICBwYWdlID09PSAnY3VzdG9tdWknIHx8IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkKGhhc3MsIHBhZ2UpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uID0gKHBhZ2UsIGxvY2FsaXplKSA9PlxuICAgICAgICAgIChwYWdlID09PSAnY3VzdG9tdWknID8gJ0N1c3RvbSBVSScgOiBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24ocGFnZSwgbG9jYWxpemUpKTtcbiAgICAgICAgaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnU2V0VUkgdHdlYWtzJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlRGVzY3JpcHRpb24ocGFnZSwgbG9jYWxpemUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFDb25maWdOYXZpZ2F0aW9uLnBhZ2VzLnNvbWUoY29uZiA9PiBjb25mID09PSAnY3VzdG9tdWknIHx8IGNvbmYuZG9tYWluID09PSAnY3VzdG9tdWknKSkge1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24ucHVzaCgncGFnZXMnLCBoYUNvbmZpZ05hdmlnYXRpb24ubG9jYWxpemUgPyAnY3VzdG9tdWknIDoge1xuICAgICAgICAgIGRvbWFpbjogJ2N1c3RvbXVpJyxcbiAgICAgICAgICBjYXB0aW9uOiAnQ3VzdG9tIFVJJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NldCBVSSB0d2Vha3MuJyxcbiAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRIYUNvbmZpZ0N1c3RvbVVpID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hhLWNvbmZpZy1jdXN0b20tdWknKTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuaXNXaWRlID0gaGFQYW5lbENvbmZpZy5pc1dpZGU7XG4gICAgICBoYUNvbmZpZ0N1c3RvbVVpLnNldEF0dHJpYnV0ZSgncGFnZS1uYW1lJywgJ2N1c3RvbXVpJyk7XG4gICAgICByZXR1cm4gaGFDb25maWdDdXN0b21VaTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXJvblBhZ2VzID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coaGFQYW5lbENvbmZpZywgJ2lyb24tcGFnZXMnKTtcbiAgICBpZiAoaXJvblBhZ2VzKSB7XG4gICAgICBpZiAoaXJvblBhZ2VzLmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIGlyb25QYWdlcy5hcHBlbmRDaGlsZChoYUNvbmZpZ0N1c3RvbVVpKTtcbiAgICAgICAgaXJvblBhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24taXRlbXMtY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKSkge1xuICAgICAgICAgICAgaXJvblBhZ2VzLnNlbGVjdCgnY3VzdG9tdWknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByb290ID0gaGFQYW5lbENvbmZpZy5zaGFkb3dSb290IHx8IGhhUGFuZWxDb25maWc7XG4gICAgICBpZiAocm9vdC5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdIQS1DT05GSUctQ1VTVE9NLVVJJykge1xuICAgICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZ2V0SGFDb25maWdDdXN0b21VaSgpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgfVxuICAgICAgY29uc3QgdmlzaWJsZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKCcvY29uZmlnL2N1c3RvbXVpJyk7XG4gICAgICByb290Lmxhc3RFbGVtZW50Q2hpbGQuc3R5bGUuZGlzcGxheSA9IHZpc2libGUgPyAnJyA6ICdub25lJztcbiAgICB9XG4gIH0sXG5cbiAgaW5zdGFsbFN0YXRlc0hvb2soKSB7XG4gICAgY29uc3QgaG9tZUFzc2lzdGFudCA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIWhvbWVBc3Npc3RhbnQgfHwgIWhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzKSByZXR1cm47XG4gICAgY29uc3Qgb3JpZ2luYWxVcGRhdGUgPSBob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcztcbiAgICBob21lQXNzaXN0YW50LnByb3RvdHlwZS5fdXBkYXRlSGFzcyA9IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgICBjb25zdCB7IGhhc3MgfSA9IHRoaXM7XG4gICAgICBpZiAob2JqLnN0YXRlcykge1xuICAgICAgICBPYmplY3Qua2V5cyhvYmouc3RhdGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRpdHkgPSBvYmouc3RhdGVzW2tleV07XG4gICAgICAgICAgaWYgKGVudGl0eS5fY3VpX2tlZXApIHJldHVybjtcbiAgICAgICAgICBjb25zdCBuZXdFbnRpdHkgPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVBcHBseVRlbXBsYXRlcyhoYXNzLCBvYmouc3RhdGVzLCBlbnRpdHkpO1xuICAgICAgICAgIGlmIChoYXNzLnN0YXRlcyAmJiBlbnRpdHkgIT09IGhhc3Muc3RhdGVzW2tleV0pIHtcbiAgICAgICAgICAgIC8vIE5ldyBzdGF0ZSBhcnJpdmVkLiBQdXQgbW9kaWZpZWQgc3RhdGUgaW4uXG4gICAgICAgICAgICBvYmouc3RhdGVzW2tleV0gPSBuZXdFbnRpdHk7XG4gICAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkgIT09IG5ld0VudGl0eSkge1xuICAgICAgICAgICAgLy8gSXQncyB0aGUgc2FtZSBzdGF0ZSBidXQgY29udGVudHMgY2hhbmdlZCBkdWUgdG8gb3RoZXIgc3RhdGUgY2hhbmdlcy5cbiAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgb3JpZ2luYWxVcGRhdGUuY2FsbCh0aGlzLCBvYmopO1xuICAgICAgaWYgKG9iai50aGVtZXMgJiYgaGFzcy5fdGhlbWVXYWl0ZXJzKSB7XG4gICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycy5mb3JFYWNoKHdhaXRlciA9PiB3YWl0ZXIuc3RhdGVDaGFuZ2VkKHdhaXRlci5zdGF0ZSkpO1xuICAgICAgICBoYXNzLl90aGVtZVdhaXRlcnMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBtYWluID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coZG9jdW1lbnQsICdob21lLWFzc2lzdGFudCcpO1xuICAgIGlmIChtYWluLmhhc3MgJiYgbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgbWFpbi5fdXBkYXRlSGFzcyh7IHN0YXRlczogbWFpbi5oYXNzLnN0YXRlcyB9KTtcbiAgICB9XG4gIH0sXG5cbiAgaW5zdGFsbFBhcnRpYWxDYXJkcygpIHtcbiAgICBjb25zdCBwYXJ0aWFsQ2FyZHMgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3BhcnRpYWwtY2FyZHMnKTtcbiAgICBpZiAoIXBhcnRpYWxDYXJkcyB8fCAhcGFydGlhbENhcmRzLnByb3RvdHlwZS5fZGVmYXVsdFZpZXdGaWx0ZXIpIHJldHVybjtcbiAgICBwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlciA9IChoYXNzLCBlbnRpdHlJZCkgPT4ge1xuICAgICAgaWYgKGhhc3Muc3RhdGVzW2VudGl0eUlkXS5hdHRyaWJ1dGVzLmhpZGRlbikgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgZXhjbHVkZXMgPSB7fTtcbiAgICAgIE9iamVjdC52YWx1ZXMoaGFzcy5zdGF0ZXMpLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMgJiYgZW50aXR5LmF0dHJpYnV0ZXMuaGlkZV9pbl9kZWZhdWx0X3ZpZXcpIHtcbiAgICAgICAgICBjb25zdCBleGNsdWRlRW50aXR5SWQgPSBlbnRpdHkuZW50aXR5X2lkO1xuICAgICAgICAgIGlmIChleGNsdWRlc1tleGNsdWRlRW50aXR5SWRdKSByZXR1cm47XG4gICAgICAgICAgZXhjbHVkZXNbZXhjbHVkZUVudGl0eUlkXSA9IGVudGl0eTtcbiAgICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMudmlldykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgZXhjbHVkZXMsIGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgZW50aXR5KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiAhZXhjbHVkZXNbZW50aXR5SWRdO1xuICAgIH07XG4gIH0sXG5cbiAgLy8gQWxsb3dzIGNoYW5naW5nIHRoZSAnRXhlY3V0ZScgLyAnQWN0aXZhdGUnIHRleHQgb24gc2NyaXB0L3NjZW5lIGNhcmRzLlxuICBpbnN0YWxsQWN0aW9uTmFtZShlbGVtZW50TmFtZSkge1xuICAgIGNvbnN0IGtsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KGVsZW1lbnROYW1lKTtcbiAgICBpZiAoIWtsYXNzIHx8ICFrbGFzcy5wcm90b3R5cGUpIHJldHVybjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoa2xhc3MucHJvdG90eXBlLCAnbG9jYWxpemUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGN1c3RvbUxvY2FsaXplKHYpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZU9iaiAmJiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmFjdGlvbl9uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGEubG9jYWxpemUodik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1c3RvbUxvY2FsaXplO1xuICAgICAgfSxcbiAgICAgIHNldCgpIHt9LFxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEFsbG93cyB0aGVtaW5nIFwicmVndWxhclwiIHRvcCBiYWRnZXMuXG4gIGluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSgpIHtcbiAgICBjb25zdCBoYVN0YXRlTGFiZWxCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtc3RhdGUtbGFiZWwtYmFkZ2UnKTtcbiAgICBpZiAoIWhhU3RhdGVMYWJlbEJhZGdlIHx8ICFoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkKSByZXR1cm47XG4gICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICBoYVN0YXRlTGFiZWxCYWRnZS5wcm90b3R5cGUuc3RhdGVDaGFuZ2VkID0gZnVuY3Rpb24gdXBkYXRlKHN0YXRlT2JqKSB7XG4gICAgICAvLyBUT0RPOiBDYWxsIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdFxuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGhlbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzcy50aGVtZXMgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmhhc3MuX3RoZW1lV2FpdGVycyA9IHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzIHx8IFtdO1xuICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzLnB1c2godGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5oYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LFxuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgICAgaWYgKHRoaXMuc3RhcnRJbnRlcnZhbCkge1xuICAgICAgICAvLyBBZGRlZCBvbiAxOS4xLjIwMThcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKHN0YXRlT2JqKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGluc3RhbGxTdGF0ZUJhZGdlKCkge1xuICAgIGNvbnN0IHN0YXRlQmFkZ2UgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3N0YXRlLWJhZGdlJyk7XG4gICAgaWYgKCFzdGF0ZUJhZGdlIHx8ICFzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZSkgcmV0dXJuO1xuICAgIGNvbnN0IG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBzdGF0ZUJhZGdlLnByb3RvdHlwZS51cGRhdGVJY29uQXBwZWFyYW5jZTtcbiAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgIHN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZUljb25BcHBlYXJhbmNlID0gZnVuY3Rpb24gY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2Uoc3RhdGVPYmopIHtcbiAgICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IgJiYgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiQuaWNvbi5zdHlsZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICAgIGNvbG9yOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmljb25fY29sb3IsXG4gICAgICAgICAgZmlsdGVyOiAnJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlLmNhbGwodGhpcywgc3RhdGVPYmopO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgaW5zdGFsbENsYXNzSG9va3MoKSB7XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5jbGFzc0luaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUgPSB0cnVlO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsUGFydGlhbENhcmRzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZXNIb29rKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxIYVN0YXRlTGFiZWxCYWRnZSgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsU3RhdGVCYWRnZSgpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQWN0aW9uTmFtZSgnc3RhdGUtY2FyZC1zY2VuZScpO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQWN0aW9uTmFtZSgnc3RhdGUtY2FyZC1zY3JpcHQnKTtcbiAgICAvLyBUT0RPOiBGaXgsIG5vdCB3b3JraW5nIHNpbmNlIEhBIDAuNzFcbiAgICB3aW5kb3cuY3VzdG9tVUkudXBkYXRlQXR0cmlidXRlcygpO1xuICB9LFxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHdpbmRvdy5jdXN0b21VSS5pbml0RG9uZSkgcmV0dXJuO1xuICAgIHdpbmRvdy5jdXN0b21VSS5pbnN0YWxsQ2xhc3NIb29rcygpO1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgaWYgKCFtYWluLmhhc3MgfHwgIW1haW4uaGFzcy5zdGF0ZXMpIHtcbiAgICAgIC8vIENvbm5lY3Rpb24gd2Fzbid0IG1hZGUgeWV0LiBUcnkgaW4gMSBzZWNvbmQuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cuY3VzdG9tVUkuaW5pdCwgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdpbmRvdy5jdXN0b21VSS5pbml0RG9uZSA9IHRydWU7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkudXNlQ3VzdG9taXplcigpO1xuXG4gICAgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvY2F0aW9uLWNoYW5nZWQnLCB3aW5kb3cuc2V0VGltZW91dC5iaW5kKG51bGwsIHdpbmRvdy5jdXN0b21VSS5ydW5Ib29rcywgMTAwKSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgIGNvbnNvbGUubG9nKGBMb2FkZWQgQ3VzdG9tVUkgJHtWRVJTSU9OfWApO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgIGlmICghd2luZG93LkNVU1RPTV9VSV9MSVNUKSB7XG4gICAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QgPSBbXTtcbiAgICB9XG4gICAgd2luZG93LkNVU1RPTV9VSV9MSVNULnB1c2goe1xuICAgICAgbmFtZTogJ0N1c3RvbVVJJyxcbiAgICAgIHZlcnNpb246IFZFUlNJT04sXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vYW5kcmV5LWdpdC9ob21lLWFzc2lzdGFudC1jdXN0b20tdWknLFxuICAgIH0pO1xuICB9LFxuXG4gIHJ1bkhvb2tzKCkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5maXhHcm91cFRpdGxlcygpO1xuICAgIHdpbmRvdy5jdXN0b21VSS51cGRhdGVDb25maWdQYW5lbCgpO1xuICB9LFxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGEtZGV2aWNlLW5hbWUnKSB8fCAnJztcbiAgfSxcblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hhLWRldmljZS1uYW1lJywgbmFtZSB8fCAnJyk7XG4gIH0sXG5cbiAgY29tcHV0ZVRlbXBsYXRlKHRlbXBsYXRlLCBoYXNzLCBlbnRpdGllcywgZW50aXR5LCBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUsIHN0YXRlKSB7XG4gICAgY29uc3QgZnVuY3Rpb25Cb2R5ID0gKHRlbXBsYXRlLmluZGV4T2YoJ3JldHVybicpID49IDApID8gdGVtcGxhdGUgOiBgcmV0dXJuIFxcYCR7dGVtcGxhdGV9XFxgO2A7XG4gICAgdHJ5IHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jICovXG4gICAgICBjb25zdCBmdW5jID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICAnaGFzcycsICdlbnRpdGllcycsICdlbnRpdHknLCAnYXR0cmlidXRlcycsICdhdHRyaWJ1dGUnLCAnc3RhdGUnLCBmdW5jdGlvbkJvZHkpO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXctZnVuYyAqL1xuICAgICAgcmV0dXJuIGZ1bmMoaGFzcywgZW50aXRpZXMsIGVudGl0eSwgYXR0cmlidXRlcywgYXR0cmlidXRlLCBzdGF0ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgaWYgKChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHx8IGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9IGluIHRlbXBsYXRlICR7ZnVuY3Rpb25Cb2R5fWApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH0sXG59O1xud2luZG93LmN1c3RvbVVJLmluaXQoKTtcbiIsImV4cG9ydCBkZWZhdWx0ICcyMDE4MDUyOCc7XG4iXSwic291cmNlUm9vdCI6IiJ9