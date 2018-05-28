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
        <state-info class='state-info' state-obj='[[stateObj]]' in-dialog='[[showLastChanged(stateObj, inDialog, extra)]]' secondary-line$='[[hasExtra(extra)]]' class='flex-auto'>
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
      // TODO: Won't working starting from HA 0.71
      if (window.hassAttributeUtil && window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES) {
        customizer.attributes.hide_attributes.forEach(attr => {
          if (!Object.prototype.hasOwnProperty.call(window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES, attr)) {
            window.hassAttributeUtil.LOGIC_STATE_ATTRIBUTES[attr] = undefined;
          }
        });
      }
    }
  },

  updateAttributes() {
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

  installClassHooks() {
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
/* harmony default export */ __webpack_exports__["default"] = ('20180528');

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9jb25zdC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX2RvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jYW5fdG9nZ2xlX3N0YXRlLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLmpzIiwid2VicGFjazovLy8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZW50aXR5L2dldF9ncm91cF9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9nZXRfdmlld19lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jdWktYmFzZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9keW5hbWljLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2R5bmFtaWMtd2l0aC1leHRyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtY29uZmlnLWN1c3RvbS11aS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvaGEtdGhlbWVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc3RhdGUtY2FyZC1jdXN0b20tdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hvb2tzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfRE9NQUlOX0lDT04iLCJET01BSU5TX1dJVEhfQ0FSRCIsIkRPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkiLCJTVEFURVNfT0ZGIiwiVU5JVF9DIiwiVU5JVF9GIiwiREVGQVVMVF9WSUVXX0VOVElUWV9JRCIsImFwcGx5VGhlbWVzT25FbGVtZW50IiwiZWxlbWVudCIsInRoZW1lcyIsImxvY2FsVGhlbWUiLCJ1cGRhdGVNZXRhIiwiX3RoZW1lcyIsInRoZW1lTmFtZSIsImRlZmF1bHRfdGhlbWUiLCJzdHlsZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0aGVtZSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJlZml4ZWRLZXkiLCJ1cGRhdGVTdHlsZXMiLCJ3aW5kb3ciLCJTaGFkeUNTUyIsInN0eWxlU3VidHJlZSIsIm1ldGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0aGVtZUNvbG9yIiwiZHluYW1pY0NvbnRlbnRVcGRhdGVyIiwicm9vdCIsIm5ld0VsZW1lbnRUYWciLCJhdHRyaWJ1dGVzIiwicm9vdEVsIiwiY3VzdG9tRWwiLCJsYXN0Q2hpbGQiLCJ0YWdOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwiY2FuVG9nZ2xlRG9tYWluIiwiaGFzcyIsImRvbWFpbiIsInNlcnZpY2VzIiwiY29uZmlnIiwiY2FuVG9nZ2xlU3RhdGUiLCJzdGF0ZU9iaiIsImNvbXB1dGVTdGF0ZURvbWFpbiIsInN0YXRlIiwic3VwcG9ydGVkX2ZlYXR1cmVzIiwiY29tcHV0ZURvbWFpbiIsImVudGl0eUlkIiwic3Vic3RyIiwiaW5kZXhPZiIsIl9kb21haW4iLCJlbnRpdHlfaWQiLCJnZXRHcm91cEVudGl0aWVzIiwiZW50aXRpZXMiLCJncm91cCIsInJlc3VsdCIsImVudGl0eSIsImdldFZpZXdFbnRpdGllcyIsInZpZXciLCJ2aWV3RW50aXRpZXMiLCJoaWRkZW4iLCJncm91cEVudGl0aWVzIiwiZ3JFbnRpdHlJZCIsImdyRW50aXR5Iiwic3RhdGVDYXJkVHlwZSIsImluY2x1ZGVzIiwiY29udHJvbCIsIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCJwcm9wIiwiTGl0ZXJhbFN0cmluZyIsImNvbnN0cnVjdG9yIiwic3RyaW5nIiwidmFsdWUiLCJ0b1N0cmluZyIsImxpdGVyYWxWYWx1ZSIsIkVycm9yIiwiaHRtbFZhbHVlIiwiSFRNTFRlbXBsYXRlRWxlbWVudCIsImlubmVySFRNTCIsImh0bWwiLCJzdHJpbmdzIiwidGVtcGxhdGUiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJ2IiwiaWR4IiwiaHRtbExpdGVyYWwiLCJDdWlCYXNlRWxlbWVudCIsIlBvbHltZXIiLCJFbGVtZW50IiwicHJvcGVydGllcyIsImluRGlhbG9nIiwidHlwZSIsIkJvb2xlYW4iLCJjb250cm9sRWxlbWVudCIsIlN0cmluZyIsImV4dHJhIiwiQXJyYXkiLCJjb21wdXRlZCIsImNvbXB1dGVFeHRyYSIsImV4dHJhcyIsImV4dHJhX2RhdGFfdGVtcGxhdGUiLCJpc0FycmF5IiwibWFwIiwiY3VzdG9tVUkiLCJjb21wdXRlVGVtcGxhdGUiLCJzdGF0ZXMiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJzaG93TGFzdENoYW5nZWQiLCJsZW5ndGgiLCJzaG93X2xhc3RfY2hhbmdlZCIsImhhc0V4dHJhIiwiRHluYW1pY0VsZW1lbnQiLCJlbGVtZW50TmFtZSIsIm9ic2VydmVycyIsIm9ic2VydmVyRnVuYyIsInRvVXBwZXJDYXNlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJEeW5hbWljV2l0aEV4dHJhIiwiZ2V0IiwiZXh0cmFPYmoiLCJfYXR0YWNoZWQiLCJleHRyYU9ialZpc2libGUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiX2lzQXR0YWNoZWQiLCJhdHRhY2hlZCIsImV4dHJhX2JhZGdlIiwiZXh0cmFCYWRnZXMiLCJleHRyYUJhZGdlIiwibWF5YmVDaGFuZ2VPYmplY3QiLCJhdHRyaWJ1dGUiLCJ1bml0X29mX21lYXN1cmVtZW50IiwidW5pdCIsImJsYWNrbGlzdCIsImJsYWNrbGlzdF9zdGF0ZXMiLCJzb21lIiwiUmVnRXhwIiwidGVzdCIsIl9lbnRpdHlEaXNwbGF5IiwiY29tcHV0ZUV4dHJhVmlzaWJsZSIsImV4dHJhQ2xhc3MiLCJfc2hvd0NvbnRyb2wiLCJoaWRlX2NvbnRyb2wiLCJjb21wdXRlU3RhdGVEaXNwbGF5IiwiaGFMb2NhbGl6ZSIsImxvY2FsaXplIiwiaXNDb25maXJtQ29udHJvbHMiLCJjb25maXJtX2NvbnRyb2xzIiwiY29uZmlybV9jb250cm9sc19zaG93X2xvY2siLCJjbGlja0hhbmRsZXIiLCJlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwibG9jayIsImljb24iLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInN0b3BQcm9wYWdhdGlvbiIsImFwcGx5VGhlbWVzIiwiZXh0cmFEb21DaGFuZ2VkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJIYUNvbmZpZ0N1c3RvbVVpIiwiRXZlbnRzTWl4aW4iLCJpc1dpZGUiLCJuYW1lIiwib2JzZXJ2ZXIiLCJyZWFkeSIsImdldE5hbWUiLCJuYW1lQ2hhbmdlZCIsInNldE5hbWUiLCJfYmFja0hhbmRsZXIiLCJoaXN0b3J5IiwiYmFjayIsImZpcmUiLCJIYVRoZW1lZFNsaWRlciIsImRpc2FibGVPZmZXaGVuTWluIiwiX2NvbXB1dGVBdHRyaWJ1dGUiLCJjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwibWluIiwiTnVtYmVyIiwibWF4IiwicGluIiwiaXNPbiIsIm5vdGlmeSIsIl90aGVtZWRNaW4iLCJfZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkIiwiYXR0ciIsImRlZiIsImNvbXB1dGVDbGFzcyIsInRoZW1lZE1pbiIsInZhbHVlQ2hhbmdlZCIsImV2IiwidGFyZ2V0IiwiU0hPV19MQVNUX0NIQU5HRURfQkxBQ0tMSVNURURfQ0FSRFMiLCJET01BSU5fVE9fU0xJREVSX1NVUFBPUlQiLCJsaWdodCIsImNvdmVyIiwiY2xpbWF0ZSIsIlRZUEVfVE9fQ09OVFJPTCIsInRvZ2dsZSIsImRpc3BsYXkiLCJTdGF0ZUNhcmRDdXN0b21VaSIsImNvbnRhaW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX2NvbnRhaW5lciIsInNldFByb3BlcnR5IiwiaW5wdXRDaGFuZ2VkIiwibWFyZ2luIiwicGFkZGluZyIsImJhZGdlTW9kZSIsImlkIiwiY29uc29sZSIsIndhcm4iLCJiYWRnZXNfbGlzdCIsInB1c2giLCJwYXJhbXMiLCJ3aWR0aCIsImZvbnRTaXplIiwiY2xlYW5CYWRnZVN0eWxlIiwibW9kaWZpZWRPYmoiLCJ0aGVtZVRhcmdldCIsIm1heWJlSGlkZUVudGl0eSIsInNsaWRlckVsaWdpYmxlXyIsIm9iaiIsInN0YXRlX2NhcmRfbW9kZSIsInJlZ3VsYXJNb2RlXyIsIm9yaWdpbmFsU3RhdGVDYXJkVHlwZSIsImN1c3RvbVN0YXRlQ2FyZFR5cGUiLCJzZWNvbmRhcnlTdGF0ZUNhcmRUeXBlIiwic3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5Iiwic2VydmljZU1pbiIsInNlcnZpY2VNYXgiLCJ2YWx1ZU5hbWUiLCJzZXRWYWx1ZU5hbWUiLCJuYW1lT24iLCJtaW5fdGVtcCIsIm1heF90ZW1wIiwiY29udHJvbF9lbGVtZW50IiwiU3RhdGVDYXJkV2l0aFNsaWRlciIsInNsaWRlclZhbHVlIiwibW9kZSIsInN0cmV0Y2hTbGlkZXIiLCJicmVha1NsaWRlciIsImhpZGVTbGlkZXIiLCJsaW5lVG9vTG9uZyIsIm1pbkxpbmVCcmVhayIsIm1heExpbmVCcmVhayIsInNob3dTbGlkZXIiLCJfb25Jcm9uUmVzaXplIiwiYmluZCIsIl9pc0Nvbm5lY3RlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfd2FpdEZvckxheW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfc2V0TW9kZSIsIl9mcmFtZUlkIiwicmVhZHlUb0NvbXB1dGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwcmV2QnJlYWtTbGlkZXIiLCJwcmV2SGlkZVNsaWRlciIsIiQiLCJjb250YWluZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiY29udGFpbmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhdGVIZWlnaHQiLCJfY29tcHV0ZVdyYXBDbGFzcyIsIl9zaG93U2xpZGVyIiwic2xpZGVyQ2hhbmdlZCIsInBhcnNlSW50IiwicGFyYW0iLCJpc05hTiIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJjYWxsU2VydmljZSIsInN0YXRlT2JqQ2hhbmdlZCIsInN0cmV0Y2hfc2xpZGVyIiwiU3RhdGVDYXJkV2l0aG91dFNsaWRlciIsInN1cGVyQ2xhc3MiLCJkZXRhaWwiLCJvcHRpb25zIiwiZXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY29tcG9zZWQiLCJub2RlIiwiZGlzcGF0Y2hFdmVudCIsIlNVUFBPUlRFRF9TTElERVJfTU9ERVMiLCJkb21Ib3N0IiwiZ2V0Um9vdE5vZGUiLCJEb2N1bWVudEZyYWdtZW50IiwiaG9zdCIsImxpZ2h0T3JTaGFkb3ciLCJzZWxlY3RvciIsInNoYWRvd1Jvb3QiLCJnZXRFbGVtZW50SGllcmFyY2h5IiwiaGllcmFyY2h5Iiwic2hpZnQiLCJnZXRDb250ZXh0IiwiX2NvbnRleHQiLCJncm91cEVudGl0eSIsInJldmVyc2UiLCJmaW5kTWF0Y2giLCJmaW5kIiwib3B0aW9uIiwibWF0Y2giLCJtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlIiwiZGV2aWNlIiwiYXBwbHlBdHRyaWJ1dGVzIiwibWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwIiwiY29udGV4dCIsImMiLCJfc2V0S2VlcCIsIl9jdWlfa2VlcCIsIm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMiLCJ0ZW1wbGF0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiaGFzR2xvYmFsIiwiaGFzQ2hhbmdlcyIsInVudGVtcGxhdGVkX2F0dHJpYnV0ZXMiLCJ1bnRlbXBsYXRlZF9zdGF0ZSIsIl9zdGF0ZURpc3BsYXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ1bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkiLCJtYXliZUFwcGx5VGVtcGxhdGVzIiwibmV3UmVzdWx0IiwiY2hlY2tBdHRyaWJ1dGVzIiwibGFzdF9jaGFuZ2VkIiwiYWxsb3dIaWRkZW4iLCJmaXhHcm91cFRpdGxlcyIsImhvbWVBc3Npc3RhbnRNYWluIiwiaGFDYXJkcyIsIm1haW4iLCJjYXJkcyIsImNhcmQiLCJmcmllbmRseV9uYW1lIiwibmFtZUVsZW0iLCJ0ZXh0Q29udGVudCIsImNvbnRyb2xDb2x1bW5zIiwiY29sdW1ucyIsInBhcnRpYWxDYXJkcyIsIm1xbHMiLCJtcWwiLCJyZW1vdmVMaXN0ZW5lciIsImhhbmRsZVdpbmRvd0NoYW5nZSIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInVzZUN1c3RvbWl6ZXIiLCJjdXN0b21pemVyIiwiaGlkZV9hdHRyaWJ1dGVzIiwiaGFzc0F0dHJpYnV0ZVV0aWwiLCJMT0dJQ19TVEFURV9BVFRSSUJVVEVTIiwidXBkYXRlQXR0cmlidXRlcyIsImN1c3RvbVVpQXR0cmlidXRlcyIsImNvbmNhdCIsInNsaWRlcl90aGVtZSIsImhpZGVfaW5fZGVmYXVsdF92aWV3IiwidXBkYXRlQ29uZmlnUGFuZWwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImhhUGFuZWxDb25maWciLCJoYUNvbmZpZ05hdmlnYXRpb24iLCJjdWlQYXRjaCIsIl9vcmlnaW5hbENvbXB1dGVMb2FkZWQiLCJfY29tcHV0ZUxvYWRlZCIsIl9vcmlnaW5hbENvbXB1dGVDYXB0aW9uIiwiX2NvbXB1dGVDYXB0aW9uIiwiX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uIiwiX2NvbXB1dGVEZXNjcmlwdGlvbiIsInBhZ2UiLCJwYWdlcyIsImNvbmYiLCJjYXB0aW9uIiwiZGVzY3JpcHRpb24iLCJsb2FkZWQiLCJnZXRIYUNvbmZpZ0N1c3RvbVVpIiwiaGFDb25maWdDdXN0b21VaSIsImlyb25QYWdlcyIsImxhc3RFbGVtZW50Q2hpbGQiLCJzZWxlY3QiLCJ2aXNpYmxlIiwiaW5zdGFsbFN0YXRlc0hvb2siLCJob21lQXNzaXN0YW50IiwiX3VwZGF0ZUhhc3MiLCJvcmlnaW5hbFVwZGF0ZSIsInVwZGF0ZSIsIm5ld0VudGl0eSIsIl90aGVtZVdhaXRlcnMiLCJ3YWl0ZXIiLCJzdGF0ZUNoYW5nZWQiLCJpbnN0YWxsUGFydGlhbENhcmRzIiwiX2RlZmF1bHRWaWV3RmlsdGVyIiwiZXhjbHVkZXMiLCJleGNsdWRlRW50aXR5SWQiLCJpbnN0YWxsQWN0aW9uTmFtZSIsImtsYXNzIiwiZGVmaW5lUHJvcGVydHkiLCJjdXN0b21Mb2NhbGl6ZSIsImFjdGlvbl9uYW1lIiwiX19kYXRhIiwic2V0IiwiaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlIiwiaGFTdGF0ZUxhYmVsQmFkZ2UiLCJzdGFydEludGVydmFsIiwiaW5zdGFsbFN0YXRlQmFkZ2UiLCJzdGF0ZUJhZGdlIiwidXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJvcmlnaW5hbFVwZGF0ZUljb25BcHBlYXJhbmNlIiwiY3VzdG9tVXBkYXRlSWNvbkFwcGVhcmFuY2UiLCJpY29uX2NvbG9yIiwiZW50aXR5X3BpY3R1cmUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb2xvciIsImluc3RhbGxDbGFzc0hvb2tzIiwiY2xhc3NJbml0RG9uZSIsImluaXQiLCJpbml0RG9uZSIsInJ1bkhvb2tzIiwibG9nIiwiQ1VTVE9NX1VJX0xJU1QiLCJ2ZXJzaW9uIiwidXJsIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jdGlvbkJvZHkiLCJmdW5jIiwiRnVuY3Rpb24iLCJTeW50YXhFcnJvciIsIlJlZmVyZW5jZUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FB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LFNBQTlELEVBQXlFMUYsS0FBekUsRUFBZ0Y7QUFDOUUsUUFBTXdZLGVBQWdCblcsU0FBU2hDLE9BQVQsQ0FBaUIsUUFBakIsS0FBOEIsQ0FBL0IsR0FBb0NnQyxRQUFwQyxHQUFnRCxZQUFXQSxRQUFTLEtBQXpGO0FBQ0EsUUFBSTtBQUNGO0FBQ0EsVUFBTW9XLE9BQU8sSUFBSUMsUUFBSixDQUNYLE1BRFcsRUFDSCxVQURHLEVBQ1MsUUFEVCxFQUNtQixZQURuQixFQUNpQyxXQURqQyxFQUM4QyxPQUQ5QyxFQUN1REYsWUFEdkQsQ0FBYjtBQUVBO0FBQ0EsYUFBT0MsS0FBS2haLElBQUwsRUFBV2dCLFFBQVgsRUFBcUJHLE1BQXJCLEVBQTZCL0IsVUFBN0IsRUFBeUM2RyxTQUF6QyxFQUFvRDFGLEtBQXBELENBQVA7QUFDRCxLQU5ELENBTUUsT0FBTzhHLENBQVAsRUFBVTtBQUNWO0FBQ0EsVUFBS0EsYUFBYTZSLFdBQWQsSUFBOEI3UixhQUFhOFIsY0FBL0MsRUFBK0Q7QUFDN0Q5TixnQkFBUUMsSUFBUixDQUFjLEdBQUVqRSxFQUFFZSxJQUFLLEtBQUlmLEVBQUUrUixPQUFRLGdCQUFlTCxZQUFhLEVBQWpFO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNBLFlBQU0xUixDQUFOO0FBQ0Q7QUFDRjtBQTlqQmtDLENBQXJDO0FBZ2tCQTlJLE9BQU82RixRQUFQLENBQWdCaVUsSUFBaEIsRzs7Ozs7Ozs7Ozs7OztBQ3ZrQkEsK0RBQWUsVUFBZixFIiwiZmlsZSI6InNjcmlwdHMtZGJnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJ5cG9pbnRzL3NjcmlwdHMuanNcIik7XG4iLCIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gJ21kaTpib29rbWFyayc7XG5cbi8qKiBEb21haW5zIHRoYXQgaGF2ZSBhIHN0YXRlIGNhcmQuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSBbXG4gICdjbGltYXRlJyxcbiAgJ2NvdmVyJyxcbiAgJ2NvbmZpZ3VyYXRvcicsXG4gICdpbnB1dF9zZWxlY3QnLFxuICAnaW5wdXRfbnVtYmVyJyxcbiAgJ2lucHV0X3RleHQnLFxuICAnbWVkaWFfcGxheWVyJyxcbiAgJ3NjZW5lJyxcbiAgJ3NjcmlwdCcsXG4gICd0aW1lcicsXG4gICd3ZWJsaW5rJyxcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gICdjYW1lcmEnLFxuICAnY29uZmlndXJhdG9yJyxcbiAgJ2hpc3RvcnlfZ3JhcGgnLFxuICAnc2NlbmUnLFxuXTtcblxuLyoqIFN0YXRlcyB0aGF0IHdlIGNvbnNpZGVyIFwib2ZmXCIuICovXG5leHBvcnQgY29uc3QgU1RBVEVTX09GRiA9IFtcbiAgJ2Nsb3NlZCcsXG4gICdvZmYnLFxuICAndW5sb2NrZWQnLFxuXTtcblxuLyoqIFRlbXBlcmF0dXJlIHVuaXRzLiAqL1xuZXhwb3J0IGNvbnN0IFVOSVRfQyA9ICfCsEMnO1xuZXhwb3J0IGNvbnN0IFVOSVRfRiA9ICfCsEYnO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9ICdncm91cC5kZWZhdWx0X3ZpZXcnO1xuIiwiLyoqXG4gKiBBcHBseSBhIHRoZW1lIHRvIGFuIGVsZW1lbnQgYnkgc2V0dGluZyB0aGUgQ1NTIHZhcmlhYmxlcyBvbiBpdC5cbiAqXG4gKiBlbGVtZW50OiBFbGVtZW50IHRvIGFwcGx5IHRoZW1lIG9uLlxuICogdGhlbWVzOiBIQVNTIFRoZW1lIGluZm9ybWF0aW9uXG4gKiBsb2NhbFRoZW1lOiBzZWxlY3RlZCB0aGVtZS5cbiAqIHVwZGF0ZU1ldGE6IGJvb2xlYW4gaWYgd2Ugc2hvdWxkIHVwZGF0ZSB0aGUgdGhlbWUtY29sb3IgbWV0YSBlbGVtZW50LlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGx5VGhlbWVzT25FbGVtZW50KGVsZW1lbnQsIHRoZW1lcywgbG9jYWxUaGVtZSwgdXBkYXRlTWV0YSA9IGZhbHNlKSB7XG4gIGlmICghZWxlbWVudC5fdGhlbWVzKSB7XG4gICAgZWxlbWVudC5fdGhlbWVzID0ge307XG4gIH1cbiAgbGV0IHRoZW1lTmFtZSA9IHRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuICBpZiAobG9jYWxUaGVtZSA9PT0gJ2RlZmF1bHQnIHx8IChsb2NhbFRoZW1lICYmIHRoZW1lcy50aGVtZXNbbG9jYWxUaGVtZV0pKSB7XG4gICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgfVxuICBjb25zdCBzdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50Ll90aGVtZXMpO1xuICBpZiAodGhlbWVOYW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICB2YXIgdGhlbWUgPSB0aGVtZXMudGhlbWVzW3RoZW1lTmFtZV07XG4gICAgT2JqZWN0LmtleXModGhlbWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gJy0tJyArIGtleTtcbiAgICAgIGVsZW1lbnQuX3RoZW1lc1twcmVmaXhlZEtleV0gPSAnJztcbiAgICAgIHN0eWxlc1twcmVmaXhlZEtleV0gPSB0aGVtZVtrZXldO1xuICAgIH0pO1xuICB9XG4gIGlmIChlbGVtZW50LnVwZGF0ZVN0eWxlcykge1xuICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gIH0gZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgLy8gaW1wbGVtZW50IHVwZGF0ZVN0eWxlcygpIG1ldGhvZCBvZiBQb2xlbWVyIGVsZW1lbnRzXG4gICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlU3VidHJlZSgvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8oZWxlbWVudCksIHN0eWxlcyk7XG4gIH1cblxuICBpZiAoIXVwZGF0ZU1ldGEpIHJldHVybjtcblxuICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXRoZW1lLWNvbG9yXScpO1xuICBpZiAobWV0YSkge1xuICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpKSB7XG4gICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JywgbWV0YS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSk7XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lQ29sb3IgPSBzdHlsZXNbJy0tcHJpbWFyeS1jb2xvciddIHx8IG1ldGEuZ2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKTtcbiAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoZW1lQ29sb3IpO1xuICB9XG59XG4iLCIvKipcbiAqIFVwZGF0ZSByb290J3MgY2hpbGQgZWxlbWVudCB0byBiZSBuZXdFbGVtZW50VGFnIHJlcGxhY2luZyBhbm90aGVyIGV4aXN0aW5nIGNoaWxkIGlmIGFueS5cbiAqIENvcHkgYXR0cmlidXRlcyBpbnRvIHRoZSBjaGlsZCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljQ29udGVudFVwZGF0ZXIocm9vdCwgbmV3RWxlbWVudFRhZywgYXR0cmlidXRlcykge1xuICBjb25zdCByb290RWwgPSByb290O1xuICBsZXQgY3VzdG9tRWw7XG5cbiAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQgJiYgcm9vdEVsLmxhc3RDaGlsZC50YWdOYW1lID09PSBuZXdFbGVtZW50VGFnKSB7XG4gICAgY3VzdG9tRWwgPSByb290RWwubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIGlmIChyb290RWwubGFzdENoaWxkKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQocm9vdEVsLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0aW5nIGFuIGVsZW1lbnQgd2l0aCB1cHBlciBjYXNlIHdvcmtzIGZpbmUgaW4gQ2hyb21lLCBidXQgaW4gRkYgaXQgZG9lc24ndCBpbW1lZGlhdGVseVxuICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICBjdXN0b21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudFRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKSB7XG4gICAgY3VzdG9tRWwuc2V0UHJvcGVydGllcyhhdHRyaWJ1dGVzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBjdXN0b20gZWxlbWVudCBkZWZpbml0aW9uIHdhc24ndCBsb2FkZWQgeWV0IC0gc2V0UHJvcGVydGllcyB3b3VsZCBiZVxuICAgIC8vIG1pc3NpbmcsIGJ1dCBubyBoYXJtIGluIHNldHRpbmcgYXR0cmlidXRlcyBvbmUtYnktb25lIHRoZW4uXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjdXN0b21FbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoY3VzdG9tRWwpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVEb21haW4oaGFzcywgZG9tYWluKSB7XG4gIGNvbnN0IHNlcnZpY2VzID0gaGFzcy5jb25maWcuc2VydmljZXNbZG9tYWluXTtcbiAgaWYgKCFzZXJ2aWNlcykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoZG9tYWluID09PSAnbG9jaycpIHtcbiAgICByZXR1cm4gJ2xvY2snIGluIHNlcnZpY2VzO1xuICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJykge1xuICAgIHJldHVybiAnb3Blbl9jb3ZlcicgaW4gc2VydmljZXM7XG4gIH1cbiAgcmV0dXJuICd0dXJuX29uJyBpbiBzZXJ2aWNlcztcbn1cbiIsImltcG9ydCBjYW5Ub2dnbGVEb21haW4gZnJvbSAnLi9jYW5fdG9nZ2xlX2RvbWFpbi5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYW5Ub2dnbGVTdGF0ZShoYXNzLCBzdGF0ZU9iaikge1xuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICBpZiAoZG9tYWluID09PSAnZ3JvdXAnKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLnN0YXRlID09PSAnb24nIHx8IHN0YXRlT2JqLnN0YXRlID09PSAnb2ZmJztcbiAgfVxuICBpZiAoZG9tYWluID09PSAnY2xpbWF0ZScpIHtcbiAgICByZXR1cm4gISEoKHN0YXRlT2JqLmF0dHJpYnV0ZXMgfHwge30pLnN1cHBvcnRlZF9mZWF0dXJlcyAmIDQwOTYpO1xuICB9XG5cbiAgcmV0dXJuIGNhblRvZ2dsZURvbWFpbihoYXNzLCBkb21haW4pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZURvbWFpbihlbnRpdHlJZCkge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKDAsIGVudGl0eUlkLmluZGV4T2YoJy4nKSk7XG59XG4iLCJpbXBvcnQgY29tcHV0ZURvbWFpbiBmcm9tICcuL2NvbXB1dGVfZG9tYWluLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSB7XG4gIGlmICghc3RhdGVPYmouX2RvbWFpbikge1xuICAgIHN0YXRlT2JqLl9kb21haW4gPSBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVPYmouX2RvbWFpbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGdyb3VwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgcmVzdWx0W2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBjb21wdXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9kb21haW4uanMnO1xuaW1wb3J0IGdldEdyb3VwRW50aXRpZXMgZnJvbSAnLi9nZXRfZ3JvdXBfZW50aXRpZXMuanMnO1xuXG4vLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGVudGl0aWVzIHRoYXQgdGhlIHZpZXcgd2lsbCBzaG93XG4vLyBpbmNsdWRpbmcgZW1iZWRkZWQgZ3JvdXBzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld0VudGl0aWVzKGVudGl0aWVzLCB2aWV3KSB7XG4gIGNvbnN0IHZpZXdFbnRpdGllcyA9IHt9O1xuXG4gIHZpZXcuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5ICYmICFlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgIHZpZXdFbnRpdGllc1tlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcblxuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09ICdncm91cCcpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBFbnRpdGllcyA9IGdldEdyb3VwRW50aXRpZXMoZW50aXRpZXMsIGVudGl0eSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBFbnRpdGllcykuZm9yRWFjaCgoZ3JFbnRpdHlJZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGdyRW50aXR5ID0gZ3JvdXBFbnRpdGllc1tnckVudGl0eUlkXTtcblxuICAgICAgICAgIGlmICghZ3JFbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgICAgICAgIHZpZXdFbnRpdGllc1tnckVudGl0eUlkXSA9IGdyRW50aXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdmlld0VudGl0aWVzO1xufVxuIiwiaW1wb3J0IGNhblRvZ2dsZVN0YXRlIGZyb20gJy4vY2FuX3RvZ2dsZV9zdGF0ZS5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4vY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IHsgRE9NQUlOU19XSVRIX0NBUkQgfSBmcm9tICcuLi9jb25zdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlQ2FyZFR5cGUoaGFzcywgc3RhdGVPYmopIHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSAndW5hdmFpbGFibGUnKSB7XG4gICAgcmV0dXJuICdkaXNwbGF5JztcbiAgfVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9DQVJELmluY2x1ZGVzKGRvbWFpbikpIHtcbiAgICByZXR1cm4gZG9tYWluO1xuICB9IGVsc2UgaWYgKGNhblRvZ2dsZVN0YXRlKGhhc3MsIHN0YXRlT2JqKSAmJlxuICAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuY29udHJvbCAhPT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gJ3RvZ2dsZSc7XG4gIH1cbiAgcmV0dXJuICdkaXNwbGF5Jztcbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbndpbmRvdy5KU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gZnVuY3Rpb24ocHJvcCkgeyByZXR1cm4gcHJvcDsgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4vYm9vdC5qcyc7XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgc3RhdGljIHN0cmluZyB2YWx1ZSB3aGljaCBjYW4gYmUgdXNlZCB0byBmaWx0ZXJcbiAqIHN0cmluZ3MgYnkgYXNzZXRpbmcgdGhhdCB0aGV5IGhhdmUgYmVlbiBjcmVhdGVkIHZpYSB0aGlzIGNsYXNzLiBUaGVcbiAqIGB2YWx1ZWAgcHJvcGVydHkgcmV0dXJucyB0aGUgc3RyaW5nIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cbmNsYXNzIExpdGVyYWxTdHJpbmcge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB0aGlzLnZhbHVlID0gc3RyaW5nLnRvU3RyaW5nKCk7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gTGl0ZXJhbFN0cmluZyBzdHJpbmcgdmFsdWVcbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBPYmplY3QgdG8gc3RyaW5naWZ5IGludG8gSFRNTFxuICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHN0cmluZ2lmaWVkIGZvcm0gb2YgYG9iamBcbiAqL1xuZnVuY3Rpb24gbGl0ZXJhbFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHshTGl0ZXJhbFN0cmluZ30gKi8odmFsdWUpLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYG5vbi1saXRlcmFsIHZhbHVlIHBhc3NlZCB0byBQb2x5bWVyJ3MgaHRtbExpdGVyYWwgZnVuY3Rpb246ICR7dmFsdWV9YFxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9iamVjdCB0byBzdHJpbmdpZnkgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgc3RyaW5naWZpZWQgZm9ybSBvZiBgb2JqYFxuICovXG5mdW5jdGlvbiBodG1sVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuICAgIHJldHVybiAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50IH0gKi8odmFsdWUpLmlubmVySFRNTDtcbiAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIExpdGVyYWxTdHJpbmcpIHtcbiAgICByZXR1cm4gbGl0ZXJhbFZhbHVlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBub24tdGVtcGxhdGUgdmFsdWUgcGFzc2VkIHRvIFBvbHltZXIncyBodG1sIGZ1bmN0aW9uOiAke3ZhbHVlfWApO1xuICB9XG59XG5cbi8qKlxuICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyB0aGF0IGNyZWF0ZXMgYW4gSFRNTCA8dGVtcGxhdGU+IGVsZW1lbnQgZnJvbSB0aGVcbiAqIGNvbnRlbnRzIG9mIHRoZSBzdHJpbmcuXG4gKlxuICogVGhpcyBhbGxvd3MgeW91IHRvIHdyaXRlIGEgUG9seW1lciBUZW1wbGF0ZSBpbiBKYXZhU2NyaXB0LlxuICpcbiAqIFRlbXBsYXRlcyBjYW4gYmUgY29tcG9zZWQgYnkgaW50ZXJwb2xhdGluZyBgSFRNTFRlbXBsYXRlRWxlbWVudGBzIGluXG4gKiBleHByZXNzaW9ucyBpbiB0aGUgSmF2YVNjcmlwdCB0ZW1wbGF0ZSBsaXRlcmFsLiBUaGUgbmVzdGVkIHRlbXBsYXRlJ3NcbiAqIGBpbm5lckhUTUxgIGlzIGluY2x1ZGVkIGluIHRoZSBjb250YWluaW5nIHRlbXBsYXRlLiAgVGhlIG9ubHkgb3RoZXJcbiAqIHZhbHVlcyBhbGxvd2VkIGluIGV4cHJlc3Npb25zIGFyZSB0aG9zZSByZXR1cm5lZCBmcm9tIGBodG1sTGl0ZXJhbGBcbiAqIHdoaWNoIGVuc3VyZXMgb25seSBsaXRlcmFsIHZhbHVlcyBmcm9tIEpTIHNvdXJjZSBldmVyIHJlYWNoIHRoZSBIVE1MLCB0b1xuICogZ3VhcmQgYWdhaW5zdCBYU1Mgcmlza3MuXG4gKlxuICogQWxsIG90aGVyIHZhbHVlcyBhcmUgZGlzYWxsb3dlZCBpbiBleHByZXNzaW9ucyB0byBoZWxwIHByZXZlbnQgWFNTXG4gKiBhdHRhY2tzOyBob3dldmVyLCBgaHRtbExpdGVyYWxgIGNhbiBiZSB1c2VkIHRvIGNvbXBvc2Ugc3RhdGljXG4gKiBzdHJpbmcgdmFsdWVzIGludG8gdGVtcGxhdGVzLiBUaGlzIGlzIHVzZWZ1bCB0byBjb21wb3NlIHN0cmluZ3MgaW50b1xuICogcGxhY2VzIHRoYXQgZG8gbm90IGFjY2VwdCBodG1sLCBsaWtlIHRoZSBjc3MgdGV4dCBvZiBhIGBzdHlsZWBcbiAqIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAqICAgICAgIHJldHVybiBodG1sYFxuICogICAgICAgICA8c3R5bGU+Omhvc3R7IGNvbnRlbnQ6XCIuLi5cIiB9PC9zdHlsZT5cbiAqICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvd2VkXCI+JHt0aGlzLnBhcnRpYWxUZW1wbGF0ZX08L2Rpdj5cbiAqICAgICAgICAgJHtzdXBlci50ZW1wbGF0ZX1cbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICAgIHN0YXRpYyBnZXQgcGFydGlhbFRlbXBsYXRlKCkgeyByZXR1cm4gaHRtbGA8c3Bhbj5QYXJ0aWFsITwvc3Bhbj5gOyB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gQ29uc3RydWN0ZWQgSFRNTFRlbXBsYXRlRWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IGZ1bmN0aW9uIGh0bWwoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIGNvbnN0IHRlbXBsYXRlID0gLyoqIEB0eXBlIHshSFRNTFRlbXBsYXRlRWxlbWVudH0gKi8oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSk7XG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PlxuICAgICAgYWNjICsgaHRtbFZhbHVlKHYpICsgc3RyaW5nc1tpZHggKyAxXSwgc3RyaW5nc1swXSk7XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbi8qKlxuICogQW4gaHRtbCBsaXRlcmFsIHRhZyB0aGF0IGNhbiBiZSB1c2VkIHdpdGggYGh0bWxgIHRvIGNvbXBvc2UuXG4gKiBhIGxpdGVyYWwgc3RyaW5nLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gKiAgICAgICByZXR1cm4gaHRtbGBcbiAqICAgICAgICAgPHN0eWxlPlxuICogICAgICAgICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2s7IH1cbiAqICAgICAgICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZSgpfVxuICogICAgICAgICA8L3N0eWxlPlxuICogICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93ZWRcIj4ke3N0YXRpY1ZhbHVlfTwvZGl2PlxuICogICAgICAgICAke3N1cGVyLnRlbXBsYXRlfVxuICogICAgICAgYDtcbiAqICAgICB9XG4gKiAgICAgc3RhdGljIGdldCBzdHlsZVRlbXBsYXRlKCkge1xuICogICAgICAgIHJldHVybiBodG1sTGl0ZXJhbGAuc2hhZG93ZWQgeyBiYWNrZ3JvdW5kOiBncmF5OyB9YDtcbiAqICAgICB9XG4gKlxuICogQHBhcmFtIHshSVRlbXBsYXRlQXJyYXl9IHN0cmluZ3MgQ29uc3RhbnQgcGFydHMgb2YgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSB7Li4uKn0gdmFsdWVzIFZhcmlhYmxlIHBhcnRzIG9mIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXG4gKiBAcmV0dXJuIHshTGl0ZXJhbFN0cmluZ30gQ29uc3RydWN0ZWQgbGl0ZXJhbCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWxMaXRlcmFsID0gZnVuY3Rpb24oc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gIHJldHVybiBuZXcgTGl0ZXJhbFN0cmluZyh2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT5cbiAgICAgIGFjYyArIGxpdGVyYWxWYWx1ZSh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pKTtcbn07XG4iLCJpbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBDdWlCYXNlRWxlbWVudCBleHRlbmRzIFBvbHltZXIuRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjb250cm9sRWxlbWVudDogU3RyaW5nLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmopIHtcbiAgICBsZXQgZXh0cmFzID0gc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9kYXRhX3RlbXBsYXRlO1xuICAgIGlmIChleHRyYXMpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYXMpKSB7XG4gICAgICAgIGV4dHJhcyA9IFtleHRyYXNdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV4dHJhcy5tYXAoZXh0cmEgPT4gd2luZG93LmN1c3RvbVVJLmNvbXB1dGVUZW1wbGF0ZShcbiAgICAgICAgZXh0cmEsXG4gICAgICAgIGhhc3MsXG4gICAgICAgIGhhc3Muc3RhdGVzLFxuICAgICAgICBzdGF0ZU9iaixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgICAgLyogYXR0cmlidXRlPSAqLyB1bmRlZmluZWQsXG4gICAgICAgIHN0YXRlT2JqLnN0YXRlLFxuICAgICAgKSkuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQgIT09IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSkge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGV4dHJhLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc2hvd19sYXN0X2NoYW5nZWQ7XG4gIH1cblxuICBoYXNFeHRyYShleHRyYSkge1xuICAgIHJldHVybiBleHRyYS5sZW5ndGggPiAwO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDdWlCYXNlRWxlbWVudDtcbiIsImltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgRHluYW1pY0VsZW1lbnQgZXh0ZW5kcyBQb2x5bWVyLkVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBlbGVtZW50TmFtZTogU3RyaW5nLFxuXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ29ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKScsXG4gICAgXTtcbiAgfVxuXG4gIG9ic2VydmVyRnVuYyhoYXNzLCBzdGF0ZU9iaiwgZWxlbWVudE5hbWUsIGluRGlhbG9nKSB7XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgIGVsZW1lbnROYW1lID8gZWxlbWVudE5hbWUudG9VcHBlckNhc2UoKSA6ICdESVYnLFxuICAgICAgeyBoYXNzLCBzdGF0ZU9iaiwgaW5EaWFsb2cgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZHluYW1pYy1lbGVtZW50JywgRHluYW1pY0VsZW1lbnQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcblxuaW1wb3J0ICcuL2R5bmFtaWMtZWxlbWVudC5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBEeW5hbWljV2l0aEV4dHJhIGV4dGVuZHMgY3VzdG9tRWxlbWVudHMuZ2V0KCdzdGF0ZS1jYXJkLWRpc3BsYXknKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5jb250cm9sLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IC00cHggLTE2cHggLTRweCAwO1xuICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGhhLXN0YXRlLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAgIGR5bmFtaWMtZWxlbWVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgICNvdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgI2xvY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICB9XG4gICAgICAjbG9jay5oYS1jb3Zlci1jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAuZXh0cmEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1zaXplOiAzNnB4O1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZTogMS4yZW07XG4gICAgICB9XG4gICAgICAuc3RhdGUge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgY2xhc3MkPSdbW2V4dHJhQ2xhc3MoZXh0cmFPYmpWaXNpYmxlKV1dIGhvcml6b250YWwgbGF5b3V0Jz5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tleHRyYU9ialZpc2libGVdXSc+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLXJlcGVhdCdcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPSdbW2V4dHJhT2JqXV0nXG4gICAgICAgICAgICAgICAgICBvbi1kb20tY2hhbmdlPSdleHRyYURvbUNoYW5nZWQnPlxuICAgICAgICAgIDxoYS1zdGF0ZS1sYWJlbC1iYWRnZSBoYXNzPSdbW2hhc3NdXScgc3RhdGU9J1tbaXRlbV1dJz48L2hhLXN0YXRlLWxhYmVsLWJhZGdlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1tfc2hvd0NvbnRyb2woaW5EaWFsb2csIHN0YXRlT2JqKV1dJz5cbiAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2NvbnRyb2xFbGVtZW50XV0nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkeW5hbWljLWVsZW1lbnRcbiAgICAgICAgICAgICAgICBjbGFzcz0nZmxleCdcbiAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgICAgICAgIGhhc3M9J1tbaGFzc11dJ1xuICAgICAgICAgICAgICAgIGVsZW1lbnQtbmFtZT0nW1tjb250cm9sRWxlbWVudF1dJz5cbiAgICAgICAgICAgIDwvZHluYW1pYy1lbGVtZW50PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW2lzQ29uZmlybUNvbnRyb2xzKHN0YXRlT2JqKV1dJz5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlcIiBvbi1jbGljaz0nY2xpY2tIYW5kbGVyJz5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1pZicgaWY9J1tbc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9ja11dJz5cbiAgICAgICAgICAgICAgICAgIDxpcm9uLWljb24gaWQ9XCJsb2NrXCIgY2xhc3MkPVwiW1tjb250cm9sRWxlbWVudF1dXCIgaWNvbj1cIm1kaTpsb2NrLW91dGxpbmVcIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1shY29udHJvbEVsZW1lbnRdXSc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nc3RhdGUnPltbY29tcHV0ZVN0YXRlRGlzcGxheShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbnRyb2xFbGVtZW50OiBTdHJpbmcsXG4gICAgICBleHRyYU9iajoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6ICdjb21wdXRlRXh0cmEoaGFzcywgc3RhdGVPYmosIF9hdHRhY2hlZCknLFxuICAgICAgfSxcbiAgICAgIF9hdHRhY2hlZDogQm9vbGVhbixcbiAgICAgIGV4dHJhT2JqVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogJ2NvbXB1dGVFeHRyYVZpc2libGUoZXh0cmFPYmosIGluRGlhbG9nKScsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2F0dGFjaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgY29tcHV0ZUV4dHJhKGhhc3MsIHN0YXRlT2JqLCBhdHRhY2hlZCkge1xuICAgIGlmICghc3RhdGVPYmouYXR0cmlidXRlcy5leHRyYV9iYWRnZSB8fCAhYXR0YWNoZWQpIHJldHVybiBbXTtcbiAgICBsZXQgZXh0cmFCYWRnZXMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmV4dHJhX2JhZGdlO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHRyYUJhZGdlcykpIHtcbiAgICAgIGV4dHJhQmFkZ2VzID0gW2V4dHJhQmFkZ2VzXTtcbiAgICB9XG4gICAgcmV0dXJuIGV4dHJhQmFkZ2VzLm1hcCgoZXh0cmFCYWRnZSkgPT4ge1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICBpZiAoZXh0cmFCYWRnZS5lbnRpdHlfaWQgJiYgaGFzcy5zdGF0ZXNbZXh0cmFCYWRnZS5lbnRpdHlfaWRdKSB7XG4gICAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdChcbiAgICAgICAgICB0aGlzLCBoYXNzLnN0YXRlc1tleHRyYUJhZGdlLmVudGl0eV9pZF0sIHRoaXMuaW5EaWFsb2csXG4gICAgICAgICAgLyogYWxsb3dIaWRkZW49ICovZmFsc2UpKTtcbiAgICAgIH0gZWxzZSBpZiAoZXh0cmFCYWRnZS5hdHRyaWJ1dGUgJiZcbiAgICAgICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlc1tleHRyYUJhZGdlLmF0dHJpYnV0ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgc3RhdGU6IFN0cmluZyhzdGF0ZU9iai5hdHRyaWJ1dGVzW2V4dHJhQmFkZ2UuYXR0cmlidXRlXSksXG4gICAgICAgICAgX2RvbWFpbjogJ25vbmUnLFxuICAgICAgICAgIGVudGl0eV9pZDogbnVsbCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7IHVuaXRfb2ZfbWVhc3VyZW1lbnQ6IGV4dHJhQmFkZ2UudW5pdCB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBudWxsO1xuICAgICAgbGV0IGJsYWNrbGlzdCA9IGV4dHJhQmFkZ2UuYmxhY2tsaXN0X3N0YXRlcztcbiAgICAgIGlmIChibGFja2xpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmxhY2tsaXN0KSkge1xuICAgICAgICAgIGJsYWNrbGlzdCA9IFtibGFja2xpc3RdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChibGFja2xpc3Quc29tZSh2ID0+IFJlZ0V4cCh2KS50ZXN0KHJlc3VsdC5zdGF0ZS50b1N0cmluZygpKSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0Ll9lbnRpdHlEaXNwbGF5ID0gJyc7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pLmZpbHRlcihleHRyYUJhZGdlID0+IGV4dHJhQmFkZ2UgIT0gbnVsbCk7XG4gIH1cblxuICBjb21wdXRlRXh0cmFWaXNpYmxlKGV4dHJhT2JqLCBpbkRpYWxvZykge1xuICAgIGlmIChpbkRpYWxvZyB8fCAhZXh0cmFPYmopIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gZXh0cmFPYmoubGVuZ3RoICE9PSAwO1xuICB9XG5cbiAgZXh0cmFDbGFzcyhleHRyYU9ialZpc2libGUpIHtcbiAgICByZXR1cm4gZXh0cmFPYmpWaXNpYmxlID8gJ2V4dHJhJyA6ICcnO1xuICB9XG5cbiAgX3Nob3dDb250cm9sKGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmIChpbkRpYWxvZykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuICFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhpZGVfY29udHJvbDtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZURpc3BsYXkoc3RhdGVPYmopIHtcbiAgICAvLyBoYUxvY2FsaXplIHJlbW92ZWQgaW4gMC42MVxuICAgIHJldHVybiBzdXBlci5jb21wdXRlU3RhdGVEaXNwbGF5KHRoaXMuaGFMb2NhbGl6ZSB8fCB0aGlzLmxvY2FsaXplLCBzdGF0ZU9iaik7XG4gIH1cblxuICBpc0NvbmZpcm1Db250cm9scyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpcm1fY29udHJvbHMgfHxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb25maXJtX2NvbnRyb2xzX3Nob3dfbG9jaztcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBjb25zdCBsb2NrID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyNsb2NrJyk7XG4gICAgaWYgKGxvY2spIHtcbiAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vcGVuLW91dGxpbmUnO1xuICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJzAuMSc7XG4gICAgfVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgICAgIGlmIChsb2NrKSB7XG4gICAgICAgIGxvY2suaWNvbiA9ICdtZGk6bG9jay1vdXRsaW5lJztcbiAgICAgICAgbG9jay5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICB9XG4gICAgfSwgNTAwMCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFwcGx5VGhlbWVzKGhhc3MsIGVsZW1lbnQsIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSB8fCAnZGVmYXVsdCc7XG4gICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoXG4gICAgICBlbGVtZW50LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgZXh0cmFEb21DaGFuZ2VkKCkge1xuICAgIHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpXG4gICAgICAuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICB0aGlzLmFwcGx5VGhlbWVzKHRoaXMuaGFzcywgZWxlbSwgZWxlbS5zdGF0ZSk7XG4gICAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdkeW5hbWljLXdpdGgtZXh0cmEnLCBEeW5hbWljV2l0aEV4dHJhKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgRXZlbnRzTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2V2ZW50cy1taXhpbi5qcyc7XG5pbXBvcnQgJy4uL3V0aWxzL2hvb2tzLmpzJztcblxuLyoqXG4gKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICovXG5jbGFzcyBIYUNvbmZpZ0N1c3RvbVVpIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lci5FbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPjwvc3R5bGU+XG4gICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPSdtZGk6YXJyb3ctbGVmdCdcbiAgICAgICAgICAgIG9uLWNsaWNrPSdfYmFja0hhbmRsZXInXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPGRpdiBtYWluLXRpdGxlPkN1c3RvbSBVSSBzZXR0aW5nczwvZGl2PlxuICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT0nW1tpc1dpZGVdXSc+XG4gICAgICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9J0RldmljZSBuYW1lJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICAgICAgU2V0IGRldmljZSBuYW1lIHNvIHRoYXQgeW91IGNhbiByZWZlcmVuY2UgaXQgaW4gcGVyLWRldmljZSBzZXR0aW5nc1xuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPSdOYW1lJ1xuICAgICAgICAgICAgICB2YWx1ZT0ne3tuYW1lfX0nXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wYXBlci1jYXJkPlxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcblxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnbmFtZUNoYW5nZWQnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLm5hbWUgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0TmFtZSgpO1xuICB9XG5cbiAgbmFtZUNoYW5nZWQobmFtZSkge1xuICAgIHdpbmRvdy5jdXN0b21VSS5zZXROYW1lKG5hbWUpO1xuICB9XG5cbiAgX2JhY2tIYW5kbGVyKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB0aGlzLmZpcmUoJ2xvY2F0aW9uLWNoYW5nZWQnKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdoYS1jb25maWctY3VzdG9tLXVpJywgSGFDb25maWdDdXN0b21VaSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIEhhVGhlbWVkU2xpZGVyIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG1hcmdpbjogdmFyKC0taGEtdGhlbWVkLXNsaWRlci1tYXJnaW4sIGluaXRpYWwpO1xuICAgICAgfVxuICAgICAgLmRpc2FibGUtb2ZmLXdoZW4tbWluIHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXItcGluLXN0YXJ0LWNvbG9yOiAgdmFyKC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5kaXNhYmxlLW9mZi13aGVuLW1pbi5pcy1vbiB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHBhcGVyLXNsaWRlciB7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWhhLXBhcGVyLXNsaWRlci13aWR0aCwgMjAwcHgpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItc2xpZGVyXG4gICAgICAgICBtaW49J1tbX3RoZW1lZE1pbl1dJ1xuICAgICAgICAgbWF4PSdbW19jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBcIm1heFwiLCBtYXgpXV0nXG4gICAgICAgICBwaW49J1tbX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwicGluXCIsIHBpbildXSdcbiAgICAgICAgIGNsYXNzJD0nW1tjb21wdXRlQ2xhc3ModGhlbWUsIGlzT24sIF90aGVtZWRNaW4pXV0nIHZhbHVlPSdbW3ZhbHVlXV0nXG4gICAgICAgICBvbi1jaGFuZ2U9J3ZhbHVlQ2hhbmdlZCc+XG4gICAgPC9wYXBlci1zbGlkZXI+XG4gICAgYDtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbiA9ICF0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoaXMudGhlbWUsICdvZmZfd2hlbl9taW4nLCAhdGhpcy5kaXNhYmxlT2ZmV2hlbk1pbik7XG4gICAgdGhpcy5jb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoaXMudGhlbWUsIHRoaXMuZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEwMCxcbiAgICAgIH0sXG4gICAgICBwaW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlzT246IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVPZmZXaGVuTWluOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVSZXBvcnRXaGVuTm90Q2hhbmdlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICB0aGVtZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgX3RoZW1lZE1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBdHRyaWJ1dGUodGhlbWUsIFwibWluXCIsIG1pbiknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdjb21wdXRlRW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkKHRoZW1lLCBkaXNhYmxlUmVwb3J0V2hlbk5vdENoYW5nZWQpJyxcbiAgICBdO1xuICB9XG5cbiAgY29tcHV0ZUVuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCh0aGVtZSwgZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKSB7XG4gICAgdGhpcy5fZW5hYmxlZFRoZW1lZFJlcG9ydFdoZW5Ob3RDaGFuZ2VkID0gdGhpcy5fY29tcHV0ZUF0dHJpYnV0ZShcbiAgICAgIHRoZW1lLCAncmVwb3J0X3doZW5fbm90X2NoYW5nZWQnLCAhZGlzYWJsZVJlcG9ydFdoZW5Ob3RDaGFuZ2VkKTtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCBhdHRyLCBkZWYpIHtcbiAgICBpZiAodGhlbWUpIHtcbiAgICAgIGlmIChhdHRyIGluIHRoZW1lKSB7XG4gICAgICAgIHJldHVybiB0aGVtZVthdHRyXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzcyh0aGVtZSwgaXNPbiwgdGhlbWVkTWluKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGlmIChpc09uKSB7XG4gICAgICByZXN1bHQgKz0gJ2lzLW9uICc7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wdXRlQXR0cmlidXRlKHRoZW1lLCAnb2ZmX3doZW5fbWluJywgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pIHx8IHRoZW1lZE1pbiA9PT0gMCkge1xuICAgICAgLy8gSWYgb2ZmV2hlbk1pbiBpcyBlbmFibGVkIGRvbid0IGN1c3RvbWl6ZS5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3Jlc3VsdH1kaXNhYmxlLW9mZi13aGVuLW1pbmA7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZWRUaGVtZWRSZXBvcnRXaGVuTm90Q2hhbmdlZCAmJiB0aGlzLnZhbHVlID09PSBldi50YXJnZXQudmFsdWUpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2hhLXRoZW1lZC1zbGlkZXInLCBIYVRoZW1lZFNsaWRlcik7XG4iLCJpbXBvcnQgYXBwbHlUaGVtZXNPbkVsZW1lbnQgZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2RvbS9hcHBseV90aGVtZXNfb25fZWxlbWVudC5qcyc7XG5pbXBvcnQgY29tcHV0ZVN0YXRlRG9tYWluIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4uanMnO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyLmpzJztcbmltcG9ydCBzdGF0ZUNhcmRUeXBlIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvc3RhdGVfY2FyZF90eXBlLmpzJztcblxuaW1wb3J0ICcuLi91dGlscy9ob29rcy5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRoLXNsaWRlci5qcyc7XG5pbXBvcnQgJy4vc3RhdGUtY2FyZC13aXRob3V0LXNsaWRlci5qcyc7XG5cbmNvbnN0IFNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTID0gWydjb25maWd1cmF0b3InXTtcbmNvbnN0IERPTUFJTl9UT19TTElERVJfU1VQUE9SVCA9IHtcbiAgbGlnaHQ6IDEsIC8vIFNVUFBPUlRfQlJJR0hUTkVTU1xuICBjb3ZlcjogNCwgLy8gU1VQUE9SVF9TRVRfUE9TSVRJT05cbiAgY2xpbWF0ZTogMSwgLy8gU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbn07XG5jb25zdCBUWVBFX1RPX0NPTlRST0wgPSB7XG4gIHRvZ2dsZTogJ2hhLWVudGl0eS10b2dnbGUnLFxuICBkaXNwbGF5OiAnJyxcbiAgY292ZXI6ICdoYS1jb3Zlci1jb250cm9scycsXG59O1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZEN1c3RvbVVpIGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiknLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGlmIChjb250YWluZXIudGFnTmFtZSA9PT0gJ0RJVicgJiZcbiAgICAgICAgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykgfHwgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2hpbGQtY2FyZCcpKSkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICAvLyBTaW5jZSB0aGlzIGRvZXNuJ3QgYWN0dWFsbHkgY2hhbmdlIHRoZSBiYWNrZ3JvdW5kIC0gbm8gbmVlZCB0byBjbGVhciBpdC5cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLCAndmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCBpbmhlcml0KScpO1xuXG4gICAgICAvLyBQb2x5ZmlsbCAndXBkYXRlU3R5bGVzJy5cbiAgICAgIGlmICghY29udGFpbmVyLnVwZGF0ZVN0eWxlcykge1xuICAgICAgICBjb250YWluZXIudXBkYXRlU3R5bGVzID0gKHN0eWxlcykgPT4ge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCBzdHlsZXNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VkKHRoaXMuaGFzcywgdGhpcy5pbkRpYWxvZywgdGhpcy5zdGF0ZU9iaik7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnLCBwYWRkaW5nOiAnJyB9KTtcbiAgICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KFxuICAgICAgICB0aGlzLl9jb250YWluZXIsIHRoaXMuaGFzcy50aGVtZXMgfHwgeyBkZWZhdWx0X3RoZW1lOiAnZGVmYXVsdCcsIHRoZW1lczoge30gfSwgJ2RlZmF1bHQnKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gIH1cblxuICBiYWRnZU1vZGUoaGFzcywgc3RhdGVPYmosIGRvbWFpbikge1xuICAgIGNvbnN0IHN0YXRlcyA9IFtdO1xuICAgIGlmIChkb21haW4gPT09ICdncm91cCcpIHtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbaWRdO1xuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBJRCAke2lkfSBpbiBncm91cCAke3N0YXRlT2JqLmVudGl0eV9pZH1gKTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0IHx8XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhZGdlc19saXN0LmluY2x1ZGVzKHN0YXRlLmVudGl0eV9pZCkpIHtcbiAgICAgICAgICBzdGF0ZXMucHVzaCh3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3QoXG4gICAgICAgICAgICB0aGlzLCBzdGF0ZSwgZmFsc2UgLyogaW5EaWFsb2cgKi8sIGZhbHNlIC8qIGFsbG93SGlkZGVuICovKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZXMucHVzaChzdGF0ZU9iaik7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXRlJykpIHtcbiAgICAgICAgICBwYXJhbXMubWFyZ2luID0gJ3ZhcigtLWhhLWJhZGdlcy1jYXJkLW1hcmdpbiwgMCknO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKHBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICAnSEEtQkFER0VTLUNBUkQnLFxuICAgICAgeyBoYXNzLCBzdGF0ZXMgfSk7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgIHdpZHRoOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtd2lkdGgsIGluaXRpYWwpJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAndmFyKC0taGEtYmFkZ2VzLWNhcmQtdGV4dC1hbGlnbiwgaW5pdGlhbCknLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubGFzdENoaWxkLnN0eWxlLmZvbnRTaXplID0gJzg1JSc7XG5cbiAgICAvLyBTaW5jZSB0aGlzIHZhcmlhYmxlIG9ubHkgYWZmZWN0cyBiYWRnZXMgbW9kZSAtIG5vIG5lZWQgdG8gY2xlYW4gaXQgdXAuXG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oYS1zdGF0ZS1sYWJlbC1iYWRnZS1tYXJnaW4tYm90dG9tJywgJzAnKTtcbiAgfVxuXG4gIGNsZWFuQmFkZ2VTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHtcbiAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7IGRpc3BsYXk6ICcnLCBtYXJnaW46ICcnIH0pO1xuICB9XG5cbiAgYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopIHtcbiAgICBsZXQgdGhlbWVUYXJnZXQgPSB0aGlzO1xuICAgIGxldCB0aGVtZU5hbWUgPSAnZGVmYXVsdCc7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhlbWVUYXJnZXQgPSB0aGlzLl9jb250YWluZXI7XG4gICAgfVxuICAgIGlmIChtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lKSB7XG4gICAgICB0aGVtZU5hbWUgPSBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnRoZW1lO1xuICAgIH1cbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgIHRoZW1lVGFyZ2V0LCBoYXNzLnRoZW1lcyB8fCB7IGRlZmF1bHRfdGhlbWU6ICdkZWZhdWx0JywgdGhlbWVzOiB7fSB9LCB0aGVtZU5hbWUpO1xuICB9XG5cbiAgbWF5YmVIaWRlRW50aXR5KG1vZGlmaWVkT2JqKSB7XG4gICAgaWYgKCFtb2RpZmllZE9iaikge1xuICAgICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIudXBkYXRlU3R5bGVzKHsgbWFyZ2luOiAnJywgcGFkZGluZzogJycgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNsaWRlckVsaWdpYmxlXyhkb21haW4sIG9iaiwgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gRE9NQUlOX1RPX1NMSURFUl9TVVBQT1JUW2RvbWFpbl0gJiZcbiAgICAgIChET01BSU5fVE9fU0xJREVSX1NVUFBPUlRbZG9tYWluXSAmIG9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcykgJiZcbiAgICAgIG9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSAmJiBvYmouYXR0cmlidXRlcy5zdGF0ZV9jYXJkX21vZGUgIT09ICduby1zbGlkZXInO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MgfHwgIXRoaXMuX2lzQXR0YWNoZWQpIHJldHVybjtcbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuICAgIGNvbnN0IG1vZGlmaWVkT2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgdGhpcywgc3RhdGVPYmosIGluRGlhbG9nLCB0cnVlIC8qIGFsbG93SGlkZGVuICovKTtcblxuICAgIGlmICh0aGlzLm1heWJlSGlkZUVudGl0eShtb2RpZmllZE9iaikpIHJldHVybjtcblxuICAgIHRoaXMuYXBwbHlUaGVtZXMoaGFzcywgbW9kaWZpZWRPYmopO1xuXG4gICAgaWYgKCFpbkRpYWxvZyAmJiBtb2RpZmllZE9iai5hdHRyaWJ1dGVzLnN0YXRlX2NhcmRfbW9kZSA9PT0gJ2JhZGdlcycpIHtcbiAgICAgIHRoaXMuYmFkZ2VNb2RlKGhhc3MsIG1vZGlmaWVkT2JqLCBkb21haW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZ3VsYXJNb2RlXyhoYXNzLCBpbkRpYWxvZywgbW9kaWZpZWRPYmosIGRvbWFpbik7XG4gICAgfVxuICB9XG5cbiAgcmVndWxhck1vZGVfKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaiwgZG9tYWluKSB7XG4gICAgdGhpcy5jbGVhbkJhZGdlU3R5bGUoKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGhhc3MsXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIGluRGlhbG9nLFxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxTdGF0ZUNhcmRUeXBlID0gc3RhdGVDYXJkVHlwZShoYXNzLCBzdGF0ZU9iaik7XG4gICAgbGV0IGN1c3RvbVN0YXRlQ2FyZFR5cGU7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U3RhdGVDYXJkVHlwZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9jdXN0b21fdWlfc2Vjb25kYXJ5O1xuXG4gICAgaWYgKGRvbWFpbiA9PT0gJ2xpZ2h0JyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtZW50aXR5LXRvZ2dsZScsXG4gICAgICAgIHNlcnZpY2VNaW46ICd0dXJuX29mZicsXG4gICAgICAgIHNlcnZpY2VNYXg6ICd0dXJuX29uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnYnJpZ2h0bmVzcycsXG4gICAgICAgIGRvbWFpbixcbiAgICAgIH0pO1xuICAgICAgY3VzdG9tU3RhdGVDYXJkVHlwZSA9ICdzdGF0ZS1jYXJkLXdpdGgtc2xpZGVyJztcbiAgICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gJ2NvdmVyJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY292ZXItY29udHJvbHMnLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgc2VydmljZU1pbjogJ2Nsb3NlX2NvdmVyJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF9jb3Zlcl9wb3NpdGlvbicsXG4gICAgICAgIHNldFZhbHVlTmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgICAgdmFsdWVOYW1lOiAnY3VycmVudF9wb3NpdGlvbicsXG4gICAgICAgIG5hbWVPbjogJ29wZW4nLFxuICAgICAgICBkb21haW4sXG4gICAgICB9KTtcbiAgICAgIGN1c3RvbVN0YXRlQ2FyZFR5cGUgPSAnc3RhdGUtY2FyZC13aXRoLXNsaWRlcic7XG4gICAgfSBlbHNlIGlmIChkb21haW4gPT09ICdjbGltYXRlJyAmJiB0aGlzLnNsaWRlckVsaWdpYmxlXyhkb21haW4sIHN0YXRlT2JqLCBpbkRpYWxvZykpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7XG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiAnaGEtY2xpbWF0ZS1zdGF0ZScsXG4gICAgICAgIG1pbjogc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcCB8fCAtMTAwLFxuICAgICAgICBtYXg6IHN0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXAgfHwgMjAwLFxuICAgICAgICBzZXJ2aWNlTWluOiAnc2V0X3RlbXBlcmF0dXJlJyxcbiAgICAgICAgc2VydmljZU1heDogJ3NldF90ZW1wZXJhdHVyZScsXG4gICAgICAgIHZhbHVlTmFtZTogJ3RlbXBlcmF0dXJlJyxcbiAgICAgICAgbmFtZU9uOiAnJyxcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSk7XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gVFlQRV9UT19DT05UUk9MW29yaWdpbmFsU3RhdGVDYXJkVHlwZV07XG4gICAgICBjdXN0b21TdGF0ZUNhcmRUeXBlID0gJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5zaG93X2xhc3RfY2hhbmdlZCAmJlxuICAgICAgICAgICAgICAgIVNIT1dfTEFTVF9DSEFOR0VEX0JMQUNLTElTVEVEX0NBUkRTLmluY2x1ZGVzKG9yaWdpbmFsU3RhdGVDYXJkVHlwZSkpIHtcbiAgICAgIHBhcmFtcy5pbkRpYWxvZyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgcGFyYW1zLmNvbnRyb2xFbGVtZW50ID0gJyc7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY29udHJvbEVsZW1lbnQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbnRyb2xfZWxlbWVudDtcbiAgICB9XG5cbiAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICB0aGlzLFxuICAgICAgKHNlY29uZGFyeVN0YXRlQ2FyZFR5cGUgfHwgY3VzdG9tU3RhdGVDYXJkVHlwZSB8fCBgU1RBVEUtQ0FSRC0ke29yaWdpbmFsU3RhdGVDYXJkVHlwZX1gKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcGFyYW1zKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzdGF0ZS1jYXJkLWN1c3RvbS11aScsIFN0YXRlQ2FyZEN1c3RvbVVpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgQ3VpQmFzZUVsZW1lbnQgZnJvbSAnLi9jdWktYmFzZS1lbGVtZW50LmpzJztcbmltcG9ydCAnLi9keW5hbWljLXdpdGgtZXh0cmEuanMnO1xuaW1wb3J0ICcuL2hhLXRoZW1lZC1zbGlkZXIuanMnO1xuXG4vKipcbiAqIEBleHRlbmRzIEhUTUxFbGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFdpdGhTbGlkZXIgZXh0ZW5kcyBDdWlCYXNlRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCIgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICAjY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLnNlY29uZC1saW5lLCAuc3RhdGUtYW5kLXRvZ2dsZSwgLnN0YXRlLWluZm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubm93cmFwIC5zdGF0ZS1hbmQtdG9nZ2xlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgfVxuICAgICAgLm5vd3JhcCAuc2Vjb25kLWxpbmUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAuc2Vjb25kLWxpbmUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbiAgICAgIH1cbiAgICAgIC5zdHJldGNoIC5zZWNvbmQtbGluZSwgLnN0cmV0Y2ggaGEtdGhlbWVkLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWhhLXBhcGVyLXNsaWRlci13aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5ub3dyYXAgLnN0YXRlLWluZm8ge1xuICAgICAgICBtaW4td2lkdGg6IGluaXRpYWw7XG4gICAgICB9XG4gICAgICBoYS10aGVtZWQtc2xpZGVyLCAudG9wLXdyYXBwZXIge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAudG9wLXdyYXBwZXIuc3RyZXRjaCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD0nY29udGFpbmVyJyBjbGFzcyQ9J2hvcml6b250YWwgbGF5b3V0IGZsZXggdG9wLXdyYXBwZXIgW1tfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpXV0nPlxuICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQganVzdGlmaWVkIGZsZXgtYXV0byBzdGF0ZS1hbmQtdG9nZ2xlJz5cbiAgICAgICAgPHN0YXRlLWluZm8gY2xhc3M9J3N0YXRlLWluZm8nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBpbi1kaWFsb2c9J1tbc2hvd0xhc3RDaGFuZ2VkKHN0YXRlT2JqLCBpbkRpYWxvZywgZXh0cmEpXV0nIHNlY29uZGFyeS1saW5lJD0nW1toYXNFeHRyYShleHRyYSldXScgY2xhc3M9J2ZsZXgtYXV0byc+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20tcmVwZWF0JyBpdGVtcz0nW1tleHRyYV1dJz5cbiAgICAgICAgICAgIDxkaXY+W1tpdGVtXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3N0YXRlLWluZm8+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz0nZG9tLWlmJyBpZj0nW1ticmVha1NsaWRlcl1dJyBjbGFzcz0naGlkZGVuJz5cbiAgICAgICAgICA8ZHluYW1pYy13aXRoLWV4dHJhIGhhc3M9J1tbaGFzc11dJyBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXScgY29udHJvbC1lbGVtZW50PSdbW2NvbnRyb2xFbGVtZW50XV0nIGluLWRpYWxvZz0nW1tpbkRpYWxvZ11dJz48L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbW3Nob3dTbGlkZXJdXScgcmVzdGFtcD5cbiAgICAgICAgPGRpdiBjbGFzcz0naG9yaXpvbnRhbCBsYXlvdXQgZmxleC1hdXRvIGVuZC1qdXN0aWZpZWQgc2Vjb25kLWxpbmUnPlxuICAgICAgICAgIDxoYS10aGVtZWQtc2xpZGVyXG4gICAgICAgICAgICBpZD0nc2xpZGVyJ1xuICAgICAgICAgICAgbWF4PVtbbWF4XV1cbiAgICAgICAgICAgIG1pbj1bW21pbl1dXG4gICAgICAgICAgICB0aGVtZT0nW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNsaWRlcl90aGVtZV1dJ1xuICAgICAgICAgICAgaXMtb249J1tbaXNPbihzdGF0ZU9iaiwgbmFtZU9uKV1dJ1xuICAgICAgICAgICAgdmFsdWU9J3t7c2xpZGVyVmFsdWV9fSdcbiAgICAgICAgICAgIGRpc2FibGUtb2ZmLXdoZW4tbWluPSd7e2Rpc2FibGVPZmZXaGVuTWlufX0nXG4gICAgICAgICAgICBvbi1jaGFuZ2U9J3NsaWRlckNoYW5nZWQnXG4gICAgICAgICAgICBvbi1jbGljaz0nc3RvcFByb3BhZ2F0aW9uJz5cbiAgICAgICAgICA8L2hhLXRoZW1lZC1zbGlkZXI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPSdkb20taWYnIGlmPSdbWyFicmVha1NsaWRlcl1dJz5cbiAgICAgICAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmEgaGFzcz0nW1toYXNzXV0nIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJyBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXScgaW4tZGlhbG9nPSdbW2luRGlhbG9nXV0nPjwvZHluYW1pYy13aXRoLWV4dHJhPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkb21haW46IFN0cmluZyxcbiAgICAgIHNlcnZpY2VNaW46IFN0cmluZyxcbiAgICAgIHNlcnZpY2VNYXg6IFN0cmluZyxcbiAgICAgIHZhbHVlTmFtZTogU3RyaW5nLFxuICAgICAgc2V0VmFsdWVOYW1lOiBTdHJpbmcsXG4gICAgICBuYW1lT246IHsgdHlwZTogU3RyaW5nLCB2YWx1ZTogJ29uJyB9LFxuICAgICAgbWluOiB7IHR5cGU6IE51bWJlciwgdmFsdWU6IDAgfSxcbiAgICAgIG1heDogeyB0eXBlOiBOdW1iZXIsIHZhbHVlOiAyNTUgfSxcblxuICAgICAgc2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICBkaXNhYmxlT2ZmV2hlbk1pbjogQm9vbGVhbixcbiAgICAgIG1vZGU6IFN0cmluZyxcbiAgICAgIHN0cmV0Y2hTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGJyZWFrU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBoaWRlU2xpZGVyOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBsaW5lVG9vTG9uZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbWluTGluZUJyZWFrOiBOdW1iZXIsXG4gICAgICBtYXhMaW5lQnJlYWs6IE51bWJlcixcbiAgICAgIHNob3dTbGlkZXI6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBjb21wdXRlZDogJ19zaG93U2xpZGVyKGluRGlhbG9nLCBzdGF0ZU9iaiwgaGlkZVNsaWRlciknLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9vbklyb25SZXNpemUgPSB0aGlzLl9vbklyb25SZXNpemUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5faXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbklyb25SZXNpemUpO1xuICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9vbklyb25SZXNpemUpO1xuICAgIHRoaXMuX2lzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnc3RhdGVPYmpDaGFuZ2VkKHN0YXRlT2JqLCBuYW1lT24sIHZhbHVlTmFtZSknLFxuICAgIF07XG4gIH1cblxuICBfd2FpdEZvckxheW91dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ29ubmVjdGVkKSByZXR1cm47XG4gICAgdGhpcy5fc2V0TW9kZSgpO1xuICAgIGlmICh0aGlzLl9mcmFtZUlkKSByZXR1cm47XG4gICAgdGhpcy5yZWFkeVRvQ29tcHV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2ZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuX2ZyYW1lSWQgPSBudWxsO1xuICAgICAgdGhpcy5yZWFkeVRvQ29tcHV0ZSA9IHRydWU7XG4gICAgICB0aGlzLl9vbklyb25SZXNpemUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRNb2RlKCkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIGhpZGVTbGlkZXI6IHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJyAmJiB0aGlzLmxpbmVUb29Mb25nLFxuICAgICAgYnJlYWtTbGlkZXI6XG4gICAgICAgICAgICh0aGlzLm1vZGUgPT09ICdicmVhay1zbGlkZXInIHx8IHRoaXMubW9kZSA9PT0gJ2hpZGUtc2xpZGVyJykgJiZcbiAgICAgICAgICAgdGhpcy5saW5lVG9vTG9uZyxcbiAgICB9O1xuICAgIGlmICghdGhpcy5zaG93U2xpZGVyKSB7XG4gICAgICBvYmouYnJlYWtTbGlkZXIgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNldFByb3BlcnRpZXMob2JqKTtcbiAgfVxuXG4gIF9vbklyb25SZXNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnJlYWR5VG9Db21wdXRlKSByZXR1cm47XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ25vLXNsaWRlcicpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIGhpZGVTbGlkZXI6IHRydWUsXG4gICAgICAgIGJyZWFrU2xpZGVyOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByZXZCcmVha1NsaWRlciA9IHRoaXMuYnJlYWtTbGlkZXI7XG4gICAgY29uc3QgcHJldkhpZGVTbGlkZXIgPSB0aGlzLmhpZGVTbGlkZXI7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIGxpbmVUb29Mb25nOiBmYWxzZSxcbiAgICAgIGhpZGVTbGlkZXI6IGZhbHNlLFxuICAgICAgYnJlYWtTbGlkZXI6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzLiQ7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgaWYgKGNvbnRhaW5lcldpZHRoID09PSAwKSByZXR1cm47XG4gICAgaWYgKGNvbnRhaW5lcldpZHRoIDw9IHRoaXMubWluTGluZUJyZWFrKSB7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lcldpZHRoID49IHRoaXMubWF4TGluZUJyZWFrKSB7XG4gICAgICB0aGlzLmxpbmVUb29Mb25nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcmV2SGlkZVNsaWRlciAmJiB0aGlzLm1vZGUgPT09ICdoaWRlLXNsaWRlcicpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byB1bmhpZGUgdGhlIHNsaWRlciBpbiBvcmRlciB0byByZWNhbGN1bGF0ZSBoZWlnaHQuXG4gICAgICAgIHRoaXMuX3dhaXRGb3JMYXlvdXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IHN0YXRlSGVpZ2h0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0ZS1pbmZvJykuY2xpZW50SGVpZ2h0O1xuICAgICAgdGhpcy5saW5lVG9vTG9uZyA9IGNvbnRhaW5lckhlaWdodCA+IHN0YXRlSGVpZ2h0ICogMS41O1xuICAgICAgaWYgKHRoaXMubGluZVRvb0xvbmcpIHtcbiAgICAgICAgdGhpcy5taW5MaW5lQnJlYWsgPSBjb250YWluZXJXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoIXByZXZCcmVha1NsaWRlcikge1xuICAgICAgICB0aGlzLm1heExpbmVCcmVhayA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZXRNb2RlKCk7XG4gIH1cblxuICBfY29tcHV0ZVdyYXBDbGFzcyhtb2RlLCBzdHJldGNoU2xpZGVyLCBsaW5lVG9vTG9uZywgaW5EaWFsb2cpIHtcbiAgICBpZiAoaW5EaWFsb2cpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKG1vZGUgPT09ICdzaW5nbGUtbGluZScpIHtcbiAgICAgIHJldHVybiAnbm93cmFwJztcbiAgICB9XG4gICAgaWYgKHN0cmV0Y2hTbGlkZXIgJiYgbGluZVRvb0xvbmcpIHtcbiAgICAgIHJldHVybiAnc3RyZXRjaCB3cmFwJztcbiAgICB9XG4gICAgcmV0dXJuICd3cmFwJztcbiAgfVxuXG4gIF9zaG93U2xpZGVyKGluRGlhbG9nLCBzdGF0ZU9iaiwgaGlkZVNsaWRlcikge1xuICAgIGlmIChpbkRpYWxvZyB8fCBoaWRlU2xpZGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2xpZGVyQ2hhbmdlZChldikge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgY29uc3QgcGFyYW0gPSB7IGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQgfTtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkgcmV0dXJuO1xuICAgIGxldCB0YXJnZXQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignI3NsaWRlcicpO1xuICAgIGlmIChldi50YXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgLy8gTm8gU2hhZG93IERPTSAtIHdlIGhhdmUgYWNjZXNzIHRvIG9yaWdpbmFsIHRhcmdldC5cbiAgICAgICh7IHRhcmdldCB9ID0gZXYpO1xuICAgIH0gZWxzZSBpZiAoZXYucGF0aCkge1xuICAgICAgW3RhcmdldF0gPSBldi5wYXRoO1xuICAgIH0gZWxzZSBpZiAoZXYuY29tcG9zZWRQYXRoKSB7XG4gICAgICBbdGFyZ2V0XSA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IDAgfHwgKHZhbHVlIDw9IHRhcmdldC5taW4gJiYgIXRoaXMuZGlzYWJsZU9mZldoZW5NaW4pKSB7XG4gICAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5kb21haW4sIHRoaXMuc2VydmljZU1pbiwgcGFyYW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbVt0aGlzLnNldFZhbHVlTmFtZSB8fCB0aGlzLnZhbHVlTmFtZV0gPSB2YWx1ZTtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlTWF4LCBwYXJhbSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGVPYmpDaGFuZ2VkKHN0YXRlT2JqLCBuYW1lT24sIHZhbHVlTmFtZSkge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHNsaWRlclZhbHVlOiB0aGlzLmlzT24oc3RhdGVPYmosIG5hbWVPbikgPyBzdGF0ZU9iai5hdHRyaWJ1dGVzW3ZhbHVlTmFtZV0gOiAwLFxuICAgIH07XG4gICAgaWYgKHN0YXRlT2JqKSB7XG4gICAgICBPYmplY3QuYXNzaWduKG9iaiwge1xuICAgICAgICBtaW5MaW5lQnJlYWs6IDAsXG4gICAgICAgIG1heExpbmVCcmVhazogOTk5LFxuICAgICAgICBoaWRlU2xpZGVyOiBmYWxzZSxcbiAgICAgICAgYnJlYWtTbGlkZXI6IGZhbHNlLFxuICAgICAgICBsaW5lVG9vTG9uZzogZmFsc2UsXG4gICAgICAgIG1vZGU6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RhdGVfY2FyZF9tb2RlLFxuICAgICAgICBzdHJldGNoU2xpZGVyOiAhIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc3RyZXRjaF9zbGlkZXIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKG9iaik7XG4gICAgaWYgKHN0YXRlT2JqKSB7XG4gICAgICB0aGlzLl93YWl0Rm9yTGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgaXNPbihzdGF0ZU9iaiwgbmFtZU9uKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqICYmICghbmFtZU9uIHx8IHN0YXRlT2JqLnN0YXRlID09PSBuYW1lT24pO1xuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3RhdGUtY2FyZC13aXRoLXNsaWRlcicsIFN0YXRlQ2FyZFdpdGhTbGlkZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCBDdWlCYXNlRWxlbWVudCBmcm9tICcuL2N1aS1iYXNlLWVsZW1lbnQuanMnO1xuaW1wb3J0ICcuL2R5bmFtaWMtd2l0aC1leHRyYS5qcyc7XG5cbi8qKlxuICogQGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVDYXJkV2l0aG91dFNsaWRlciBleHRlbmRzIEN1aUJhc2VFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgICNjb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9J2NvbnRhaW5lcicgY2xhc3M9J2hvcml6b250YWwgbGF5b3V0IGp1c3RpZmllZCc+XG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgIGNsYXNzPSdzdGF0ZS1pbmZvJ1xuICAgICAgICAgIHN0YXRlLW9iaj0nW1tzdGF0ZU9ial1dJ1xuICAgICAgICAgIGluLWRpYWxvZz0nW1tzaG93TGFzdENoYW5nZWQoc3RhdGVPYmosIGluRGlhbG9nLCBleHRyYSldXSdcbiAgICAgICAgICBzZWNvbmRhcnktbGluZSQ9J1tbaGFzRXh0cmEoZXh0cmEpXV0nPlxuICAgICAgICA8dGVtcGxhdGUgaXM9J2RvbS1yZXBlYXQnIGl0ZW1zPSdbW2V4dHJhXV0nPlxuICAgICAgICAgIDxkaXY+W1tpdGVtXV08L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgIDxkeW5hbWljLXdpdGgtZXh0cmFcbiAgICAgICAgICBoYXNzPSdbW2hhc3NdXSdcbiAgICAgICAgICBzdGF0ZS1vYmo9J1tbc3RhdGVPYmpdXSdcbiAgICAgICAgICBjb250cm9sLWVsZW1lbnQ9J1tbY29udHJvbEVsZW1lbnRdXSdcbiAgICAgICAgICBpbi1kaWFsb2c9J1tbaW5EaWFsb2ddXSc+XG4gICAgICA8L2R5bmFtaWMtd2l0aC1leHRyYT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3N0YXRlLWNhcmQtd2l0aG91dC1zbGlkZXInLCBTdGF0ZUNhcmRXaXRob3V0U2xpZGVyKTtcbiIsIi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbmV4cG9ydCBkZWZhdWx0IChzdXBlckNsYXNzKSA9PiB7XG4gIC8qKlxuICAgKiBAZXh0ZW5kcyBIVE1MRWxlbWVudFxuICAgKi9cbiAgY2xhc3MgRXZlbnRzTWl4aW4gZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgICAqICAgcGF5bG9hZC5cbiAgICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAgKi9cbiAgICBmaXJlKHR5cGUsIGRldGFpbCA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHtcbiAgICAgICAgYnViYmxlczogb3B0aW9ucy5idWJibGVzID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy5idWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiBCb29sZWFuKG9wdGlvbnMuY2FuY2VsYWJsZSksXG4gICAgICAgIGNvbXBvc2VkOiBvcHRpb25zLmNvbXBvc2VkID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy5jb21wb3NlZCxcbiAgICAgIH0pO1xuICAgICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuICAgICAgY29uc3Qgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCB0aGlzO1xuICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEV2ZW50c01peGluO1xufTtcbiIsImltcG9ydCBhcHBseVRoZW1lc09uRWxlbWVudCBmcm9tICcuLi8uLi9ob21lLWFzc2lzdGFudC1wb2x5bWVyL3NyYy9jb21tb24vZG9tL2FwcGx5X3RoZW1lc19vbl9lbGVtZW50LmpzJztcbmltcG9ydCBjb21wdXRlU3RhdGVEb21haW4gZnJvbSAnLi4vLi4vaG9tZS1hc3Npc3RhbnQtcG9seW1lci9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpbi5qcyc7XG5pbXBvcnQgZ2V0Vmlld0VudGl0aWVzIGZyb20gJy4uLy4uL2hvbWUtYXNzaXN0YW50LXBvbHltZXIvc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXMuanMnO1xuXG5pbXBvcnQgJy4uL2VsZW1lbnRzL2hhLWNvbmZpZy1jdXN0b20tdWkuanMnO1xuaW1wb3J0IFZFUlNJT04gZnJvbSAnLi92ZXJzaW9uLmpzJztcblxud2luZG93LmN1c3RvbVVJID0gd2luZG93LmN1c3RvbVVJIHx8IHtcbiAgU1VQUE9SVEVEX1NMSURFUl9NT0RFUzogW1xuICAgICdzaW5nbGUtbGluZScsICdicmVhay1zbGlkZXInLCAnYnJlYWstc2xpZGVyLXRvZ2dsZScsICdoaWRlLXNsaWRlcicsICduby1zbGlkZXInLFxuICBdLFxuXG4gIGRvbUhvc3QoZWxlbSkge1xuICAgIGlmIChlbGVtID09PSBkb2N1bWVudCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW0uZ2V0Um9vdE5vZGUoKTtcbiAgICByZXR1cm4gKHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSA/IC8qKiBAdHlwZSB7U2hhZG93Um9vdH0gKi8gKHJvb3QpLmhvc3QgOiByb290O1xuICB9LFxuXG4gIGxpZ2h0T3JTaGFkb3coZWxlbSwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZWxlbS5zaGFkb3dSb290ID9cbiAgICAgIGVsZW0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6XG4gICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9LFxuXG4gIGdldEVsZW1lbnRIaWVyYXJjaHkocm9vdCwgaGllcmFyY2h5KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVsZW0gPSBoaWVyYXJjaHkuc2hpZnQoKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhyb290LCBlbGVtKSwgaGllcmFyY2h5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH0sXG5cbiAgZ2V0Q29udGV4dChlbGVtKSB7XG4gICAgaWYgKGVsZW0uX2NvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbS5fY29udGV4dCA9IFtdO1xuICAgICAgZm9yIChsZXQgZWxlbWVudCA9IChlbGVtLnRhZ05hbWUgPT09ICdIQS1FTlRJVElFUy1DQVJEJyA/IHdpbmRvdy5jdXN0b21VSS5kb21Ib3N0KGVsZW0pIDogZWxlbSk7XG4gICAgICAgIGVsZW1lbnQ7IGVsZW1lbnQgPSB3aW5kb3cuY3VzdG9tVUkuZG9tSG9zdChlbGVtZW50KSkge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudGFnTmFtZSkge1xuICAgICAgICAgIGNhc2UgJ0hBLUVOVElUSUVTLUNBUkQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuZ3JvdXBFbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5ncm91cEVudGl0eSA9PT0gZmFsc2UgJiYgZWxlbWVudC5zdGF0ZXMgJiYgZWxlbWVudC5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChgZ3JvdXAuJHtjb21wdXRlU3RhdGVEb21haW4oZWxlbWVudC5zdGF0ZXNbMF0pfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnTU9SRS1JTkZPLUdST1VQJzpcbiAgICAgICAgICBjYXNlICdTVEFURS1DQVJELUNPTlRFTlQnOlxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RhdGVPYmopIHtcbiAgICAgICAgICAgICAgZWxlbS5fY29udGV4dC5wdXNoKGVsZW1lbnQuc3RhdGVPYmouZW50aXR5X2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hBLUNBUkRTJzpcbiAgICAgICAgICAgIGVsZW0uX2NvbnRleHQucHVzaChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3JykgfHwgJ2RlZmF1bHRfdmlldycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtLl9jb250ZXh0LnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0uX2NvbnRleHQ7XG4gIH0sXG5cbiAgZmluZE1hdGNoKGtleSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuIG51bGw7XG4gICAgaWYgKG9wdGlvbnNba2V5XSkgcmV0dXJuIGtleTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykuZmluZChvcHRpb24gPT4ga2V5Lm1hdGNoKGBeJHtvcHRpb259JGApKTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKSB7XG4gICAgY29uc3QgbmFtZSA9IHdpbmRvdy5jdXN0b21VSS5nZXROYW1lKCk7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLmZpbmRNYXRjaChuYW1lLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIHN0YXRlT2JqO1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZVttYXRjaF0pO1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGgpIHJldHVybiBzdGF0ZU9iajtcbiAgICByZXR1cm4gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgYXR0cmlidXRlcyk7XG4gIH0sXG5cbiAgbWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIHN0YXRlT2JqKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHdpbmRvdy5jdXN0b21VSS5nZXRDb250ZXh0KGVsZW0pO1xuICAgIGlmICghY29udGV4dCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcbiAgICBjb250ZXh0LmZvckVhY2goKGMpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5maW5kTWF0Y2goYywgc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cCk7XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5ncm91cFttYXRjaF0pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhdHRyaWJ1dGVzLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmdyb3VwW21hdGNoXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCkgcmV0dXJuIHN0YXRlT2JqO1xuXG4gICAgcmV0dXJuIHdpbmRvdy5jdXN0b21VSS5hcHBseUF0dHJpYnV0ZXMoc3RhdGVPYmosIGF0dHJpYnV0ZXMpO1xuICB9LFxuXG4gIF9zZXRLZWVwKG9iaiwgdmFsdWUpIHtcbiAgICBpZiAob2JqLl9jdWlfa2VlcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmouX2N1aV9rZWVwID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5fY3VpX2tlZXAgPSBvYmouX2N1aV9rZWVwICYmIHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICBtYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKGhhc3MsIHN0YXRlcywgc3RhdGVPYmosIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoIWF0dHJpYnV0ZXMudGVtcGxhdGVzKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuX3NldEtlZXAoc3RhdGVPYmosIHRydWUpO1xuICAgICAgcmV0dXJuIHN0YXRlT2JqO1xuICAgIH1cbiAgICBjb25zdCBuZXdBdHRyaWJ1dGVzID0ge307XG4gICAgbGV0IGhhc0dsb2JhbCA9IGZhbHNlO1xuICAgIGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcy50ZW1wbGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBhdHRyaWJ1dGVzLnRlbXBsYXRlc1trZXldO1xuICAgICAgaWYgKHRlbXBsYXRlLm1hdGNoKC9cXGIoZW50aXRpZXN8aGFzcylcXGIvKSkge1xuICAgICAgICBoYXNHbG9iYWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgdmFsdWUgPSB3aW5kb3cuY3VzdG9tVUkuY29tcHV0ZVRlbXBsYXRlKFxuICAgICAgICB0ZW1wbGF0ZSwgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgYXR0cmlidXRlcyxcbiAgICAgICAgKHN0YXRlT2JqLnVudGVtcGxhdGVkX2F0dHJpYnV0ZXMgJiYgc3RhdGVPYmoudW50ZW1wbGF0ZWRfYXR0cmlidXRlc1trZXldKSB8fFxuICAgICAgICAgICAgYXR0cmlidXRlc1trZXldLFxuICAgICAgICBzdGF0ZU9iai51bnRlbXBsYXRlZF9zdGF0ZSB8fCBzdGF0ZU9iai5zdGF0ZSk7XG4gICAgICAvLyBJbiBjYXNlIG9mIG51bGwgZG9uJ3Qgc2V0IHRoZSB2YWx1ZS5cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgbmV3QXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICBpZiAoa2V5ID09PSAnc3RhdGUnKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gc3RhdGVPYmouc3RhdGUpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdfc3RhdGVEaXNwbGF5Jykge1xuICAgICAgICBpZiAodmFsdWUgIT09IHN0YXRlT2JqLl9zdGF0ZURpc3BsYXkpIHtcbiAgICAgICAgICBoYXNDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gYXR0cmlidXRlc1trZXldKSB7XG4gICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5jdXN0b21VSS5fc2V0S2VlcChzdGF0ZU9iaiwgIWhhc0dsb2JhbCk7XG4gICAgaWYgKCFoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gc3RhdGVPYmo7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzID09PSBhdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBXZSBhcmUgb3BlcmF0aW5nIG9uIHJlYWwgYXR0cmlidXRlcy4gUmVwbGFjZSB0aGVtLlxuICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLmFwcGx5QXR0cmlidXRlcyhzdGF0ZU9iaiwgbmV3QXR0cmlidXRlcyk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdzdGF0ZScpKSB7XG4gICAgICAgIGlmIChuZXdBdHRyaWJ1dGVzLnN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnN0YXRlID0gU3RyaW5nKG5ld0F0dHJpYnV0ZXMuc3RhdGUpO1xuICAgICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZSA9IHN0YXRlT2JqLnN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5ld0F0dHJpYnV0ZXMsICdfc3RhdGVEaXNwbGF5JykpIHtcbiAgICAgICAgcmVzdWx0Ll9zdGF0ZURpc3BsYXkgPSBuZXdBdHRyaWJ1dGVzLl9zdGF0ZURpc3BsYXk7XG4gICAgICAgIHJlc3VsdC51bnRlbXBsYXRlZF9zdGF0ZURpc3BsYXkgPSBzdGF0ZU9iai5fc3RhdGVEaXNwbGF5O1xuICAgICAgfVxuICAgICAgd2luZG93LmN1c3RvbVVJLl9zZXRLZWVwKHJlc3VsdCwgIWhhc0dsb2JhbCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBPcGVyYXRpbmcgb24gY29udGV4dC1hd2FyZSBhdHRyaWJ1dGVzLiBSZXR1cm4gc2hhbGxvdyBjb3B5IG9mIG9iamVjdC5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICB9LFxuXG4gIG1heWJlQXBwbHlUZW1wbGF0ZXMoaGFzcywgc3RhdGVzLCBzdGF0ZU9iaikge1xuICAgIGNvbnN0IG5ld1Jlc3VsdCA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVBdHRyaWJ1dGVzKFxuICAgICAgaGFzcywgc3RhdGVzLCBzdGF0ZU9iaiwgc3RhdGVPYmouYXR0cmlidXRlcyk7XG4gICAgbGV0IGhhc0NoYW5nZXMgPSAobmV3UmVzdWx0ICE9PSBzdGF0ZU9iaik7XG5cbiAgICBmdW5jdGlvbiBjaGVja0F0dHJpYnV0ZXMob2JqKSB7XG4gICAgICBpZiAoIW9iaikgcmV0dXJuO1xuICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICAgICAgaGFzcywgc3RhdGVzLCBuZXdSZXN1bHQsIGF0dHJpYnV0ZXMpO1xuICAgICAgICBoYXNDaGFuZ2VzIHw9IChyZXN1bHQgIT09IG5ld1Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZGV2aWNlKTtcbiAgICAgIGNoZWNrQXR0cmlidXRlcyhvYmouZ3JvdXApO1xuICAgIH1cblxuICAgIGNoZWNrQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmRldmljZSk7XG4gICAgY2hlY2tBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZ3JvdXApO1xuICAgIGlmIChuZXdSZXN1bHQgIT09IHN0YXRlT2JqKSByZXR1cm4gbmV3UmVzdWx0O1xuICAgIGlmIChoYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmopO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGVPYmo7XG4gIH0sXG5cbiAgYXBwbHlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGl0eV9pZDogc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3RhdGU6IHN0YXRlT2JqLnN0YXRlLFxuICAgICAgYXR0cmlidXRlczogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVPYmouYXR0cmlidXRlcywgYXR0cmlidXRlcyksXG4gICAgICB1bnRlbXBsYXRlZF9hdHRyaWJ1dGVzOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZU9iai5sYXN0X2NoYW5nZWQsXG4gICAgfTtcbiAgfSxcblxuICBtYXliZUNoYW5nZU9iamVjdChlbGVtLCBzdGF0ZU9iaiwgaW5EaWFsb2csIGFsbG93SGlkZGVuKSB7XG4gICAgaWYgKGluRGlhbG9nKSByZXR1cm4gc3RhdGVPYmo7XG4gICAgbGV0IG9iaiA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUNoYW5nZU9iamVjdEJ5RGV2aWNlKHN0YXRlT2JqKTtcbiAgICBvYmogPSB3aW5kb3cuY3VzdG9tVUkubWF5YmVDaGFuZ2VPYmplY3RCeUdyb3VwKGVsZW0sIG9iaik7XG4gICAgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQXBwbHlUZW1wbGF0ZUF0dHJpYnV0ZXMoXG4gICAgICBlbGVtLmhhc3MsIGVsZW0uaGFzcy5zdGF0ZXMsIG9iaiwgb2JqLmF0dHJpYnV0ZXMpO1xuXG4gICAgaWYgKG9iaiAhPT0gc3RhdGVPYmogJiYgb2JqLmF0dHJpYnV0ZXMuaGlkZGVuICYmIGFsbG93SGlkZGVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmaXhHcm91cFRpdGxlcygpIHtcbiAgICBjb25zdCBob21lQXNzaXN0YW50TWFpbiA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nXSk7XG4gICAgaWYgKGhvbWVBc3Npc3RhbnRNYWluID09PSBudWxsKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEgc2Vjb25kLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzLCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYUNhcmRzID0gd2luZG93LmN1c3RvbVVJLmdldEVsZW1lbnRIaWVyYXJjaHkoaG9tZUFzc2lzdGFudE1haW4sIFtcbiAgICAgICdwYXJ0aWFsLWNhcmRzJyxcbiAgICAgICdoYS1jYXJkc1t2aWV3LXZpc2libGVdJ10pO1xuICAgIGlmIChoYUNhcmRzID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGhhQ2FyZHMsICcubWFpbicpIHx8IGhhQ2FyZHMuJC5tYWluO1xuICAgIGNvbnN0IGNhcmRzID0gbWFpbi5xdWVyeVNlbGVjdG9yQWxsKCdoYS1lbnRpdGllcy1jYXJkJyk7XG4gICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgaWYgKGNhcmQuZ3JvdXBFbnRpdHkpIHtcbiAgICAgICAgY29uc3Qgb2JqID0gd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0KFxuICAgICAgICAgIGNhcmQsXG4gICAgICAgICAgY2FyZC5ncm91cEVudGl0eSxcbiAgICAgICAgICBmYWxzZSAvKiBpbkRpYWxvZyAqLyxcbiAgICAgICAgICBmYWxzZSAvKiBhbGxvd0hpZGRlbiAqLyk7XG4gICAgICAgIGlmIChvYmogIT09IGNhcmQuZ3JvdXBFbnRpdHkgJiYgb2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSkge1xuICAgICAgICAgIGNvbnN0IG5hbWVFbGVtID0gd2luZG93LmN1c3RvbVVJLmxpZ2h0T3JTaGFkb3coY2FyZCwgJy5uYW1lJyk7XG4gICAgICAgICAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBvYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgY29udHJvbENvbHVtbnMoY29sdW1ucykge1xuICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IHdpbmRvdy5jdXN0b21VSS5nZXRFbGVtZW50SGllcmFyY2h5KGRvY3VtZW50LCBbXG4gICAgICAnaG9tZS1hc3Npc3RhbnQnLFxuICAgICAgJ2hvbWUtYXNzaXN0YW50LW1haW4nLFxuICAgICAgJ3BhcnRpYWwtY2FyZHMnXSk7XG4gICAgaWYgKHBhcnRpYWxDYXJkcyA9PT0gbnVsbCkge1xuICAgICAgLy8gRE9NIG5vdCByZWFkeS4gV2FpdCAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMuYmluZChudWxsLCBjb2x1bW5zKSxcbiAgICAgICAgMTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBhcnRpYWxDYXJkcy5tcWxzLmZvckVhY2goKG1xbCkgPT4ge1xuICAgICAgbXFsLnJlbW92ZUxpc3RlbmVyKHBhcnRpYWxDYXJkcy5oYW5kbGVXaW5kb3dDaGFuZ2UpO1xuICAgIH0pO1xuICAgIHBhcnRpYWxDYXJkcy5tcWxzID0gY29sdW1ucy5tYXAoKHdpZHRoKSA9PiB7XG4gICAgICBjb25zdCBtcWwgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt3aWR0aH1weClgKTtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihwYXJ0aWFsQ2FyZHMuaGFuZGxlV2luZG93Q2hhbmdlKTtcbiAgICAgIHJldHVybiBtcWw7XG4gICAgfSk7XG4gICAgcGFydGlhbENhcmRzLmhhbmRsZVdpbmRvd0NoYW5nZSgpO1xuICB9LFxuXG4gIHVzZUN1c3RvbWl6ZXIoKSB7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBjb25zdCBjdXN0b21pemVyID0gbWFpbi5oYXNzLnN0YXRlc1snY3VzdG9taXplci5jdXN0b21pemVyJ107XG4gICAgaWYgKCFjdXN0b21pemVyKSByZXR1cm47XG4gICAgaWYgKGN1c3RvbWl6ZXIuYXR0cmlidXRlcy5jb2x1bW5zKSB7XG4gICAgICB3aW5kb3cuY3VzdG9tVUkuY29udHJvbENvbHVtbnMoY3VzdG9taXplci5hdHRyaWJ1dGVzLmNvbHVtbnMpO1xuICAgIH1cbiAgICBpZiAoY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcykge1xuICAgICAgLy8gVE9ETzogV29uJ3Qgd29ya2luZyBzdGFydGluZyBmcm9tIEhBIDAuNzFcbiAgICAgIGlmICh3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwgJiYgd2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpIHtcbiAgICAgICAgY3VzdG9taXplci5hdHRyaWJ1dGVzLmhpZGVfYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gICAgICAgICAgICB3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUywgYXR0cikpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTW2F0dHJdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUF0dHJpYnV0ZXMoKSB7XG4gICAgaWYgKCF3aW5kb3cuaGFzc0F0dHJpYnV0ZVV0aWwpIHtcbiAgICAgIC8vIEFwcC5qcyB3YXNuJ3QgcGFyc2VkIHlldC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS51cGRhdGVBdHRyaWJ1dGVzLCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21VaUF0dHJpYnV0ZXMgPSB7XG4gICAgICBncm91cDogdW5kZWZpbmVkLFxuICAgICAgZGV2aWNlOiB1bmRlZmluZWQsXG4gICAgICB0ZW1wbGF0ZXM6IHVuZGVmaW5lZCxcbiAgICAgIHN0YXRlX2NhcmRfbW9kZToge1xuICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgbGlnaHQ6IHdpbmRvdy5jdXN0b21VSS5TVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICAgICAgY292ZXI6IHdpbmRvdy5jdXN0b21VSS5TVVBQT1JURURfU0xJREVSX01PREVTLmNvbmNhdCgnYmFkZ2VzJyksXG4gICAgICAgICAgJyonOiBbJ2JhZGdlcyddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHN0YXRlX2NhcmRfY3VzdG9tX3VpX3NlY29uZGFyeTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgYmFkZ2VzX2xpc3Q6IHsgdHlwZTogJ2pzb24nIH0sXG4gICAgICBzaG93X2xhc3RfY2hhbmdlZDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgIGhpZGVfY29udHJvbDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgIGV4dHJhX2RhdGFfdGVtcGxhdGU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgIGV4dHJhX2JhZGdlOiB7IHR5cGU6ICdqc29uJyB9LFxuICAgICAgc3RyZXRjaF9zbGlkZXI6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICBzbGlkZXJfdGhlbWU6IHsgdHlwZTogJ2pzb24nIH0sXG4gICAgICB0aGVtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgY29uZmlybV9jb250cm9sczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgIGNvbmZpcm1fY29udHJvbHNfc2hvd19sb2NrOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgaGlkZV9pbl9kZWZhdWx0X3ZpZXc6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgfTtcbiAgICBpZiAod2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24od2luZG93Lmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMsIGN1c3RvbVVpQXR0cmlidXRlcyk7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUNvbmZpZ1BhbmVsKCkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcnKSkgcmV0dXJuO1xuICAgIGNvbnN0IGhhUGFuZWxDb25maWcgPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShkb2N1bWVudCwgW1xuICAgICAgJ2hvbWUtYXNzaXN0YW50JyxcbiAgICAgICdob21lLWFzc2lzdGFudC1tYWluJyxcbiAgICAgICdwYXJ0aWFsLXBhbmVsLXJlc29sdmVyJyxcbiAgICAgICdoYS1wYW5lbC1jb25maWcnXSk7XG4gICAgaWYgKCFoYVBhbmVsQ29uZmlnKSB7XG4gICAgICAvLyBET00gbm90IHJlYWR5LiBXYWl0IDEwMG1zLlxuICAgICAgd2luZG93LnNldFRpbWVvdXQod2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsLCAxMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYUNvbmZpZ05hdmlnYXRpb24gPSB3aW5kb3cuY3VzdG9tVUkuZ2V0RWxlbWVudEhpZXJhcmNoeShoYVBhbmVsQ29uZmlnLCBbXG4gICAgICAnaGEtY29uZmlnLWRhc2hib2FyZCcsXG4gICAgICAnaGEtY29uZmlnLW5hdmlnYXRpb24nXSk7XG4gICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbikge1xuICAgICAgLy8gSGFDb25maWdOYXZpZ2F0aW9uIHN0YXJ0ZWQgdXNpbmcgbG9jYWxpemUgb24gMjEuMDEuMjAxOFxuICAgICAgaWYgKGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSAmJiAhaGFDb25maWdOYXZpZ2F0aW9uLmN1aVBhdGNoKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5jdWlQYXRjaCA9IHRydWU7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlTG9hZGVkID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlTG9hZGVkO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZUNhcHRpb24gPSBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVDYXB0aW9uO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX29yaWdpbmFsQ29tcHV0ZURlc2NyaXB0aW9uID0gaGFDb25maWdOYXZpZ2F0aW9uLl9jb21wdXRlRGVzY3JpcHRpb247XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUxvYWRlZCA9IChoYXNzLCBwYWdlKSA9PlxuICAgICAgICAgIHBhZ2UgPT09ICdjdXN0b211aScgfHwgaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVMb2FkZWQoaGFzcywgcGFnZSk7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5fY29tcHV0ZUNhcHRpb24gPSAocGFnZSwgbG9jYWxpemUpID0+XG4gICAgICAgICAgKHBhZ2UgPT09ICdjdXN0b211aScgPyAnQ3VzdG9tIFVJJyA6IGhhQ29uZmlnTmF2aWdhdGlvbi5fb3JpZ2luYWxDb21wdXRlQ2FwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgICBoYUNvbmZpZ05hdmlnYXRpb24uX2NvbXB1dGVEZXNjcmlwdGlvbiA9IChwYWdlLCBsb2NhbGl6ZSkgPT5cbiAgICAgICAgICAocGFnZSA9PT0gJ2N1c3RvbXVpJyA/ICdTZXRVSSB0d2Vha3MnIDogaGFDb25maWdOYXZpZ2F0aW9uLl9vcmlnaW5hbENvbXB1dGVEZXNjcmlwdGlvbihwYWdlLCBsb2NhbGl6ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFoYUNvbmZpZ05hdmlnYXRpb24ucGFnZXMuc29tZShjb25mID0+IGNvbmYgPT09ICdjdXN0b211aScgfHwgY29uZi5kb21haW4gPT09ICdjdXN0b211aScpKSB7XG4gICAgICAgIGhhQ29uZmlnTmF2aWdhdGlvbi5wdXNoKCdwYWdlcycsIGhhQ29uZmlnTmF2aWdhdGlvbi5sb2NhbGl6ZSA/ICdjdXN0b211aScgOiB7XG4gICAgICAgICAgZG9tYWluOiAnY3VzdG9tdWknLFxuICAgICAgICAgIGNhcHRpb246ICdDdXN0b20gVUknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2V0IFVJIHR3ZWFrcy4nLFxuICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldEhhQ29uZmlnQ3VzdG9tVWkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYUNvbmZpZ0N1c3RvbVVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGEtY29uZmlnLWN1c3RvbS11aScpO1xuICAgICAgaGFDb25maWdDdXN0b21VaS5pc1dpZGUgPSBoYVBhbmVsQ29uZmlnLmlzV2lkZTtcbiAgICAgIGhhQ29uZmlnQ3VzdG9tVWkuc2V0QXR0cmlidXRlKCdwYWdlLW5hbWUnLCAnY3VzdG9tdWknKTtcbiAgICAgIHJldHVybiBoYUNvbmZpZ0N1c3RvbVVpO1xuICAgIH07XG5cbiAgICBjb25zdCBpcm9uUGFnZXMgPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhoYVBhbmVsQ29uZmlnLCAnaXJvbi1wYWdlcycpO1xuICAgIGlmIChpcm9uUGFnZXMpIHtcbiAgICAgIGlmIChpcm9uUGFnZXMubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSEEtQ09ORklHLUNVU1RPTS1VSScpIHtcbiAgICAgICAgY29uc3QgaGFDb25maWdDdXN0b21VaSA9IGdldEhhQ29uZmlnQ3VzdG9tVWkoKTtcbiAgICAgICAgaXJvblBhZ2VzLmFwcGVuZENoaWxkKGhhQ29uZmlnQ3VzdG9tVWkpO1xuICAgICAgICBpcm9uUGFnZXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1pdGVtcy1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2NvbmZpZy9jdXN0b211aScpKSB7XG4gICAgICAgICAgICBpcm9uUGFnZXMuc2VsZWN0KCdjdXN0b211aScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBoYVBhbmVsQ29uZmlnLnNoYWRvd1Jvb3QgfHwgaGFQYW5lbENvbmZpZztcbiAgICAgIGlmIChyb290Lmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0hBLUNPTkZJRy1DVVNUT00tVUknKSB7XG4gICAgICAgIGNvbnN0IGhhQ29uZmlnQ3VzdG9tVWkgPSBnZXRIYUNvbmZpZ0N1c3RvbVVpKCk7XG4gICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoaGFDb25maWdDdXN0b21VaSk7XG4gICAgICB9XG4gICAgICBjb25zdCB2aXNpYmxlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9jb25maWcvY3VzdG9tdWknKTtcbiAgICAgIHJvb3QubGFzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gdmlzaWJsZSA/ICcnIDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsU3RhdGVzSG9vaygpIHtcbiAgICBjb25zdCBob21lQXNzaXN0YW50ID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdob21lLWFzc2lzdGFudCcpO1xuICAgIGlmICghaG9tZUFzc2lzdGFudCB8fCAhaG9tZUFzc2lzdGFudC5wcm90b3R5cGUuX3VwZGF0ZUhhc3MpIHJldHVybjtcbiAgICBjb25zdCBvcmlnaW5hbFVwZGF0ZSA9IGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzO1xuICAgIGhvbWVBc3Npc3RhbnQucHJvdG90eXBlLl91cGRhdGVIYXNzID0gZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgLy8gVXNlIG5hbWVkIGZ1bmN0aW9uIHRvIHByZXNlcnZlICd0aGlzJy5cbiAgICAgIGNvbnN0IHsgaGFzcyB9ID0gdGhpcztcbiAgICAgIGlmIChvYmouc3RhdGVzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG9iai5zdGF0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG9iai5zdGF0ZXNba2V5XTtcbiAgICAgICAgICBpZiAoZW50aXR5Ll9jdWlfa2VlcCkgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IG5ld0VudGl0eSA9IHdpbmRvdy5jdXN0b21VSS5tYXliZUFwcGx5VGVtcGxhdGVzKGhhc3MsIG9iai5zdGF0ZXMsIGVudGl0eSk7XG4gICAgICAgICAgaWYgKGhhc3Muc3RhdGVzICYmIGVudGl0eSAhPT0gaGFzcy5zdGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgLy8gTmV3IHN0YXRlIGFycml2ZWQuIFB1dCBtb2RpZmllZCBzdGF0ZSBpbi5cbiAgICAgICAgICAgIG9iai5zdGF0ZXNba2V5XSA9IG5ld0VudGl0eTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eSAhPT0gbmV3RW50aXR5KSB7XG4gICAgICAgICAgICAvLyBJdCdzIHRoZSBzYW1lIHN0YXRlIGJ1dCBjb250ZW50cyBjaGFuZ2VkIGR1ZSB0byBvdGhlciBzdGF0ZSBjaGFuZ2VzLlxuICAgICAgICAgICAgb2JqLnN0YXRlc1trZXldID0gbmV3RW50aXR5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBvcmlnaW5hbFVwZGF0ZS5jYWxsKHRoaXMsIG9iaik7XG4gICAgICBpZiAob2JqLnRoZW1lcyAmJiBoYXNzLl90aGVtZVdhaXRlcnMpIHtcbiAgICAgICAgaGFzcy5fdGhlbWVXYWl0ZXJzLmZvckVhY2god2FpdGVyID0+IHdhaXRlci5zdGF0ZUNoYW5nZWQod2FpdGVyLnN0YXRlKSk7XG4gICAgICAgIGhhc3MuX3RoZW1lV2FpdGVycyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG1haW4gPSB3aW5kb3cuY3VzdG9tVUkubGlnaHRPclNoYWRvdyhkb2N1bWVudCwgJ2hvbWUtYXNzaXN0YW50Jyk7XG4gICAgaWYgKG1haW4uaGFzcyAmJiBtYWluLmhhc3Muc3RhdGVzKSB7XG4gICAgICBtYWluLl91cGRhdGVIYXNzKHsgc3RhdGVzOiBtYWluLmhhc3Muc3RhdGVzIH0pO1xuICAgIH1cbiAgfSxcblxuICBpbnN0YWxsUGFydGlhbENhcmRzKCkge1xuICAgIGNvbnN0IHBhcnRpYWxDYXJkcyA9IGN1c3RvbUVsZW1lbnRzLmdldCgncGFydGlhbC1jYXJkcycpO1xuICAgIGlmICghcGFydGlhbENhcmRzIHx8ICFwYXJ0aWFsQ2FyZHMucHJvdG90eXBlLl9kZWZhdWx0Vmlld0ZpbHRlcikgcmV0dXJuO1xuICAgIHBhcnRpYWxDYXJkcy5wcm90b3R5cGUuX2RlZmF1bHRWaWV3RmlsdGVyID0gKGhhc3MsIGVudGl0eUlkKSA9PiB7XG4gICAgICBpZiAoaGFzcy5zdGF0ZXNbZW50aXR5SWRdLmF0dHJpYnV0ZXMuaGlkZGVuKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBleGNsdWRlcyA9IHt9O1xuICAgICAgT2JqZWN0LnZhbHVlcyhoYXNzLnN0YXRlcykuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcyAmJiBlbnRpdHkuYXR0cmlidXRlcy5oaWRlX2luX2RlZmF1bHRfdmlldykge1xuICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVFbnRpdHlJZCA9IGVudGl0eS5lbnRpdHlfaWQ7XG4gICAgICAgICAgaWYgKGV4Y2x1ZGVzW2V4Y2x1ZGVFbnRpdHlJZF0pIHJldHVybjtcbiAgICAgICAgICBleGNsdWRlc1tleGNsdWRlRW50aXR5SWRdID0gZW50aXR5O1xuICAgICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy52aWV3KSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICBleGNsdWRlcywgZ2V0Vmlld0VudGl0aWVzKGhhc3Muc3RhdGVzLCBlbnRpdHkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICFleGNsdWRlc1tlbnRpdHlJZF07XG4gICAgfTtcbiAgfSxcblxuICAvLyBBbGxvd3MgY2hhbmdpbmcgdGhlICdFeGVjdXRlJyAvICdBY3RpdmF0ZScgdGV4dCBvbiBzY3JpcHQvc2NlbmUgY2FyZHMuXG4gIGluc3RhbGxBY3Rpb25OYW1lKGVsZW1lbnROYW1lKSB7XG4gICAgY29uc3Qga2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoZWxlbWVudE5hbWUpO1xuICAgIGlmICgha2xhc3MgfHwgIWtsYXNzLnByb3RvdHlwZSkgcmV0dXJuO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShrbGFzcy5wcm90b3R5cGUsICdsb2NhbGl6ZScsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgZnVuY3Rpb24gY3VzdG9tTG9jYWxpemUodikge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlT2JqICYmIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcyAmJlxuICAgICAgICAgICAgICB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYWN0aW9uX25hbWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLl9fZGF0YS5sb2NhbGl6ZSh2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VzdG9tTG9jYWxpemU7XG4gICAgICB9LFxuICAgICAgc2V0KCkge30sXG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gQWxsb3dzIHRoZW1pbmcgXCJyZWd1bGFyXCIgdG9wIGJhZGdlcy5cbiAgaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCkge1xuICAgIGNvbnN0IGhhU3RhdGVMYWJlbEJhZGdlID0gY3VzdG9tRWxlbWVudHMuZ2V0KCdoYS1zdGF0ZS1sYWJlbC1iYWRnZScpO1xuICAgIGlmICghaGFTdGF0ZUxhYmVsQmFkZ2UgfHwgIWhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQpIHJldHVybjtcbiAgICAvLyBVc2UgbmFtZWQgZnVuY3Rpb24gdG8gcHJlc2VydmUgJ3RoaXMnLlxuICAgIGhhU3RhdGVMYWJlbEJhZGdlLnByb3RvdHlwZS5zdGF0ZUNoYW5nZWQgPSBmdW5jdGlvbiB1cGRhdGUoc3RhdGVPYmopIHtcbiAgICAgIC8vIFRPRE86IENhbGwgd2luZG93LmN1c3RvbVVJLm1heWJlQ2hhbmdlT2JqZWN0XG4gICAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy50aGVtZSkge1xuICAgICAgICBpZiAodGhpcy5oYXNzLnRoZW1lcyA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuaGFzcy5fdGhlbWVXYWl0ZXJzID0gdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMgfHwgW107XG4gICAgICAgICAgdGhpcy5oYXNzLl90aGVtZVdhaXRlcnMucHVzaCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcHBseVRoZW1lc09uRWxlbWVudChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLmhhc3MudGhlbWVzIHx8IHsgZGVmYXVsdF90aGVtZTogJ2RlZmF1bHQnLCB0aGVtZXM6IHt9IH0sXG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRoZW1lIHx8ICdkZWZhdWx0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgICBpZiAodGhpcy5zdGFydEludGVydmFsKSB7XG4gICAgICAgIC8vIEFkZGVkIG9uIDE5LjEuMjAxOFxuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgaW5zdGFsbFN0YXRlQmFkZ2UoKSB7XG4gICAgY29uc3Qgc3RhdGVCYWRnZSA9IGN1c3RvbUVsZW1lbnRzLmdldCgnc3RhdGUtYmFkZ2UnKTtcbiAgICBpZiAoIXN0YXRlQmFkZ2UgfHwgIXN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZUljb25BcHBlYXJhbmNlKSByZXR1cm47XG4gICAgY29uc3Qgb3JpZ2luYWxVcGRhdGVJY29uQXBwZWFyYW5jZSA9IHN0YXRlQmFkZ2UucHJvdG90eXBlLnVwZGF0ZUljb25BcHBlYXJhbmNlO1xuICAgIC8vIFVzZSBuYW1lZCBmdW5jdGlvbiB0byBwcmVzZXJ2ZSAndGhpcycuXG4gICAgc3RhdGVCYWRnZS5wcm90b3R5cGUudXBkYXRlSWNvbkFwcGVhcmFuY2UgPSBmdW5jdGlvbiBjdXN0b21VcGRhdGVJY29uQXBwZWFyYW5jZShzdGF0ZU9iaikge1xuICAgICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaWNvbl9jb2xvciAmJiAhc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSkge1xuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJC5pY29uLnN0eWxlLCB7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgICAgICAgY29sb3I6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuaWNvbl9jb2xvcixcbiAgICAgICAgICBmaWx0ZXI6ICcnLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdpbmFsVXBkYXRlSWNvbkFwcGVhcmFuY2UuY2FsbCh0aGlzLCBzdGF0ZU9iaik7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICBpbnN0YWxsQ2xhc3NIb29rcygpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmNsYXNzSW5pdERvbmUpIHJldHVybjtcbiAgICB3aW5kb3cuY3VzdG9tVUkuY2xhc3NJbml0RG9uZSA9IHRydWU7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxQYXJ0aWFsQ2FyZHMoKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbFN0YXRlc0hvb2soKTtcbiAgICB3aW5kb3cuY3VzdG9tVUkuaW5zdGFsbEhhU3RhdGVMYWJlbEJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxTdGF0ZUJhZGdlKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxBY3Rpb25OYW1lKCdzdGF0ZS1jYXJkLXNjZW5lJyk7XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxBY3Rpb25OYW1lKCdzdGF0ZS1jYXJkLXNjcmlwdCcpO1xuICAgIC8vIFRPRE86IEZpeCwgbm90IHdvcmtpbmcgc2luY2UgSEEgMC43MVxuICAgIHdpbmRvdy5jdXN0b21VSS51cGRhdGVBdHRyaWJ1dGVzKCk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAod2luZG93LmN1c3RvbVVJLmluaXREb25lKSByZXR1cm47XG4gICAgd2luZG93LmN1c3RvbVVJLmluc3RhbGxDbGFzc0hvb2tzKCk7XG4gICAgY29uc3QgbWFpbiA9IHdpbmRvdy5jdXN0b21VSS5saWdodE9yU2hhZG93KGRvY3VtZW50LCAnaG9tZS1hc3Npc3RhbnQnKTtcbiAgICBpZiAoIW1haW4uaGFzcyB8fCAhbWFpbi5oYXNzLnN0YXRlcykge1xuICAgICAgLy8gQ29ubmVjdGlvbiB3YXNuJ3QgbWFkZSB5ZXQuIFRyeSBpbiAxIHNlY29uZC5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5jdXN0b21VSS5pbml0LCAxMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmN1c3RvbVVJLmluaXREb25lID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5jdXN0b21VSS51c2VDdXN0b21pemVyKCk7XG5cbiAgICB3aW5kb3cuY3VzdG9tVUkucnVuSG9va3MoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9jYXRpb24tY2hhbmdlZCcsIHdpbmRvdy5zZXRUaW1lb3V0LmJpbmQobnVsbCwgd2luZG93LmN1c3RvbVVJLnJ1bkhvb2tzLCAxMDApKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5sb2coYExvYWRlZCBDdXN0b21VSSAke1ZFUlNJT059YCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgaWYgKCF3aW5kb3cuQ1VTVE9NX1VJX0xJU1QpIHtcbiAgICAgIHdpbmRvdy5DVVNUT01fVUlfTElTVCA9IFtdO1xuICAgIH1cbiAgICB3aW5kb3cuQ1VTVE9NX1VJX0xJU1QucHVzaCh7XG4gICAgICBuYW1lOiAnQ3VzdG9tVUknLFxuICAgICAgdmVyc2lvbjogVkVSU0lPTixcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXktZ2l0L2hvbWUtYXNzaXN0YW50LWN1c3RvbS11aScsXG4gICAgfSk7XG4gIH0sXG5cbiAgcnVuSG9va3MoKSB7XG4gICAgd2luZG93LmN1c3RvbVVJLmZpeEdyb3VwVGl0bGVzKCk7XG4gICAgd2luZG93LmN1c3RvbVVJLnVwZGF0ZUNvbmZpZ1BhbmVsKCk7XG4gIH0sXG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoYS1kZXZpY2UtbmFtZScpIHx8ICcnO1xuICB9LFxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGEtZGV2aWNlLW5hbWUnLCBuYW1lIHx8ICcnKTtcbiAgfSxcblxuICBjb21wdXRlVGVtcGxhdGUodGVtcGxhdGUsIGhhc3MsIGVudGl0aWVzLCBlbnRpdHksIGF0dHJpYnV0ZXMsIGF0dHJpYnV0ZSwgc3RhdGUpIHtcbiAgICBjb25zdCBmdW5jdGlvbkJvZHkgPSAodGVtcGxhdGUuaW5kZXhPZigncmV0dXJuJykgPj0gMCkgPyB0ZW1wbGF0ZSA6IGByZXR1cm4gXFxgJHt0ZW1wbGF0ZX1cXGA7YDtcbiAgICB0cnkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3LWZ1bmMgKi9cbiAgICAgIGNvbnN0IGZ1bmMgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdoYXNzJywgJ2VudGl0aWVzJywgJ2VudGl0eScsICdhdHRyaWJ1dGVzJywgJ2F0dHJpYnV0ZScsICdzdGF0ZScsIGZ1bmN0aW9uQm9keSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldy1mdW5jICovXG4gICAgICByZXR1cm4gZnVuYyhoYXNzLCBlbnRpdGllcywgZW50aXR5LCBhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUsIHN0YXRlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICBpZiAoKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikgfHwgZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtlLm5hbWV9OiAke2UubWVzc2FnZX0gaW4gdGVtcGxhdGUgJHtmdW5jdGlvbkJvZHl9YCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfSxcbn07XG53aW5kb3cuY3VzdG9tVUkuaW5pdCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgJzIwMTgwNTI4JztcbiJdLCJzb3VyY2VSb290IjoiIn0=