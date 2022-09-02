(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dobDatepicker", [], factory);
	else if(typeof exports === 'object')
		exports["dobDatepicker"] = factory();
	else
		root["dobDatepicker"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/focus-trap/dist/focus-trap.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-trap/dist/focus-trap.esm.js ***!
  \********************************************************/
/*! exports provided: createFocusTrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrap", function() { return createFocusTrap; });
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/dist/index.esm.js");
/*!
* focus-trap 6.2.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var activeFocusDelay;

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};

var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};

var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

var createFocusTrap = function createFocusTrap(elements, userOptions) {
  var doc = document;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    // @type {Array<HTMLElement>}
    containers: [],
    // @type {{ firstTabbableNode: HTMLElement, lastTabbableNode: HTMLElement }}
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  var containersContain = function containersContain(element) {
    return state.containers.some(function (container) {
      return container.contains(element);
    });
  };

  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];

    if (!optionValue) {
      return null;
    }

    var node = optionValue;

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error("`".concat(optionName, "` refers to no known node"));
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error("`".concat(optionName, "` did not return a node"));
      }
    }

    return node;
  };

  var getInitialFocusNode = function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (containersContain(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      var firstTabbableGroup = state.tabbableGroups[0];
      var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
      node = firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  };

  var updateTabbableNodes = function updateTabbableNodes() {
    state.tabbableGroups = state.containers.map(function (container) {
      var tabbableNodes = Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["tabbable"])(container);
      return {
        firstTabbableNode: tabbableNodes[0],
        lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
      };
    });
  };

  var tryFocus = function tryFocus(node) {
    if (node === doc.activeElement) {
      return;
    }

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  };

  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  }; // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  var checkPointerDown = function checkPointerDown(e) {
    if (containersContain(e.target)) {
      // allow the click since it ocurred inside the trap
      return;
    }

    if (config.clickOutsideDeactivates) {
      // immediately deactivate the trap
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isFocusable"])(e.target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      // allow the click outside the trap to take place
      return;
    } // otherwise, prevent the click


    e.preventDefault();
  }; // In case focus escapes the trap for some strange reason, pull it back in.


  var checkFocusIn = function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (containersContain(e.target) || e.target instanceof Document) {
      return;
    }

    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }; // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  var checkTab = function checkTab(e) {
    updateTabbableNodes();
    var destinationNode = null;

    if (e.shiftKey) {
      var startOfGroupIndex = state.tabbableGroups.findIndex(function (_ref) {
        var firstTabbableNode = _ref.firstTabbableNode;
        return e.target === firstTabbableNode;
      });

      if (startOfGroupIndex >= 0) {
        var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
        var destinationGroup = state.tabbableGroups[destinationGroupIndex];
        destinationNode = destinationGroup.lastTabbableNode;
      }
    } else {
      var lastOfGroupIndex = state.tabbableGroups.findIndex(function (_ref2) {
        var lastTabbableNode = _ref2.lastTabbableNode;
        return e.target === lastTabbableNode;
      });

      if (lastOfGroupIndex >= 0) {
        var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

        var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
        destinationNode = _destinationGroup.firstTabbableNode;
      }
    }

    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    }
  };

  var checkKey = function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      trap.deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };

  var checkClick = function checkClick(e) {
    if (config.clickOutsideDeactivates) {
      return;
    }

    if (containersContain(e.target)) {
      return;
    }

    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }; //
  // EVENT LISTENERS
  //


  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    } // There can be only one listening focus trap at a time


    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    activeFocusDelay = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };

  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }; //
  // TRAP DEFINITION
  //


  trap = {
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }

      updateTabbableNodes();
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

      if (onActivate) {
        onActivate();
      }

      addListeners();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }

      clearTimeout(activeFocusDelay);
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

      if (onDeactivate) {
        onDeactivate();
      }

      var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

      if (returnFocus) {
        delay(function () {
          tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
        });
      }

      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }

      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }

      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });

      if (state.active) {
        updateTabbableNodes();
      }

      return this;
    }
  }; // initialize container elements

  trap.updateContainerElements(elements);
  return trap;
};


//# sourceMappingURL=focus-trap.esm.js.map


/***/ }),

/***/ "./node_modules/superfine/superfine.js":
/*!*********************************************!*\
  !*** ./node_modules/superfine/superfine.js ***!
  \*********************************************/
/*! exports provided: text, h, patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
var e={},l=[],t=e=>null==e?e:e.key,r=function(e){this.tag[e.type](e)},o=(e,l,t,o,n)=>{"key"===l||("o"===l[0]&&"n"===l[1]?((e.tag||(e.tag={}))[l=l.slice(2)]=o)?t||e.addEventListener(l,r):e.removeEventListener(l,r):!n&&"list"!==l&&"form"!==l&&l in e?e[l]=null==o?"":o:null==o||!1===o?e.removeAttribute(l):e.setAttribute(l,o))},n=(e,l)=>{var t=e.props,r=3===e.tag?document.createTextNode(e.type):(l=l||"svg"===e.type)?document.createElementNS("http://www.w3.org/2000/svg",e.type,{is:t.is}):document.createElement(e.type,{is:t.is});for(var d in t)o(r,d,null,t[d],l);return e.children.map(e=>r.appendChild(n(e=i(e),l))),e.dom=r},d=(e,l,r,a,u)=>{if(r===a);else if(null!=r&&3===r.tag&&3===a.tag)r.type!==a.type&&(l.nodeValue=a.type);else if(null==r||r.type!==a.type)l=e.insertBefore(n(a=i(a),u),l),null!=r&&e.removeChild(r.dom);else{var m,p,s,v,f=r.props,y=a.props,c=r.children,h=a.children,g=0,x=0,C=c.length-1,k=h.length-1;for(var w in u=u||"svg"===a.type,{...f,...y})("value"===w||"selected"===w||"checked"===w?l[w]:f[w])!==y[w]&&o(l,w,f[w],y[w],u);for(;x<=k&&g<=C&&null!=(s=t(c[g]))&&s===t(h[x]);)d(l,c[g].dom,c[g++],h[x]=i(h[x++]),u);for(;x<=k&&g<=C&&null!=(s=t(c[C]))&&s===t(h[k]);)d(l,c[C].dom,c[C--],h[k]=i(h[k--]),u);if(g>C)for(;x<=k;)l.insertBefore(n(h[x]=i(h[x++]),u),(p=c[g])&&p.dom);else if(x>k)for(;g<=C;)l.removeChild(c[g++].dom);else{var N={},A={};for(w=g;w<=C;w++)null!=(s=c[w].key)&&(N[s]=c[w]);for(;x<=k;)s=t(p=c[g]),v=t(h[x]=i(h[x])),A[s]||null!=v&&v===t(c[g+1])?(null==s&&l.removeChild(p.dom),g++):null==v||1===r.tag?(null==s&&(d(l,p&&p.dom,p,h[x],u),x++),g++):(s===v?(d(l,p.dom,p,h[x],u),A[v]=!0,g++):null!=(m=N[v])?(d(l,l.insertBefore(m.dom,p&&p.dom),m,h[x],u),A[v]=!0):d(l,p&&p.dom,null,h[x],u),x++);for(;g<=C;)null==t(p=c[g++])&&l.removeChild(p.dom);for(var w in N)null==A[w]&&l.removeChild(N[w].dom)}}return a.dom=l},i=e=>!0!==e&&!1!==e&&e?e:text(""),a=t=>3===t.nodeType?text(t.nodeValue,t):u(t.nodeName.toLowerCase(),e,l.map.call(t.childNodes,a),t,null,1),u=(e,l,t,r,o,n)=>({type:e,props:l,children:t,dom:r,key:o,tag:n});var text=(t,r)=>u(t,e,l,r,null,3);var h=(e,t,r)=>u(e,t,Array.isArray(r)?r:null==r?l:[r],null,t.key);var patch=(e,l)=>((e=d(e.parentNode,e,e.v||a(e),l)).v=l,e);
//# sourceMappingURL=superfine.js.map

/***/ }),

/***/ "./node_modules/tabbable/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: focusable, isFocusable, isTabbable, tabbable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusable", function() { return focusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusable", function() { return isFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabbable", function() { return isTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabbable", function() { return tabbable; });
/*!
* tabbable 5.1.4
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

var getCandidates = function getCandidates(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }

  candidates = candidates.filter(filter);
  return candidates;
};

var isContentEditable = function isContentEditable(node) {
  return node.contentEditable === 'true';
};

var getTabindex = function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.


  if (isContentEditable(node)) {
    return 0;
  } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
};

var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};

var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};

var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};

var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};

var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};

var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  var radioScope = node.form || node.ownerDocument;
  var radioSet = radioScope.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};

var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};

var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

var isHidden = function isHidden(node) {
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }

  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }

  while (node) {
    if (getComputedStyle(node).display === 'none') {
      return true;
    }

    node = node.parentElement;
  }

  return false;
};

var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node) ||
  /* For a details element with a summary, the summary element gets the focused  */
  isDetailsWithSummary(node)) {
    return false;
  }

  return true;
};

var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(node) {
  if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
};

var tabbable = function tabbable(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable);
  candidates.forEach(function (candidate, i) {
    var candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  });
  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
};

var focusable = function focusable(el, options) {
  options = options || {};
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable);
  return candidates;
};

var isTabbable = function isTabbable(node) {
  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, candidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorTabbable(node);
};

var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

var isFocusable = function isFocusable(node) {
  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(node);
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/validate-date/validate-date.js":
/*!*****************************************************!*\
  !*** ./node_modules/validate-date/validate-date.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validateDate(dateValue, responseType = "string", dateFormat = null) {
  let responses = responseSetter(responseType)
  if (dateValue == null) {
    return responses[0];
  }

  return dateValidator(dateValue, responses, dateFormat);
}

// TODO- This function returns different response types(String or boolean) which might be an anti pattern. Investigate and make necessary changes
function responseSetter(responseType) {
  switch (responseType) {
    case "string":
      return ["Invalid Format", "Invalid Date", "Valid Date"];
    case "boolean":
      return [false, false, true];

    default:
      return ["Invalid Format", "Invalid Date", "Valid Date"];
  }
}

function daysInMonth(year, month) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return (month === 2 && year % 4 === 0) ? 29 : days[month - 1];
}

function getAllIndexes(arr, val) {
  var indexes = [];
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === val) indexes.push(i);
  }

  return indexes;
}

function dateValidator(dateValue, responses, dateFormat) {
    if (dateValue) {
        
        if (!dateFormat) {
        dateFormat = dateValue.includes("-") ? "yyyy-mm-dd" : "mm/dd/yyyy";
        }

        if (dateFormat.length > 10 || dateFormat.length < 6) return responses[0];

        const formatSplit = dateValue.includes("-")
        ? dateFormat.split("-")
        : dateFormat.split("/");

        let wrongFormat = formatSplit
        .map((formatPart) => /([dmy])\1/i.test(formatPart))
        .filter((rightFormat) => !rightFormat);

        if (wrongFormat.length > 0) return responses[0];

        let dateSeparator = dateValue.includes("-") ? "-" : "/";

        let formatRegex = new RegExp(
        `(\\d{${formatSplit[0].length}})(${dateSeparator})(\\d{${formatSplit[1].length}})(${dateSeparator})(\\d{${formatSplit[2].length}})`
        );

        let dayPosition = getAllIndexes(
        formatSplit,
        formatSplit.filter((formatPart) => /[d]/i.test(formatPart))[0]
        );
        let monthPosition = getAllIndexes(
        formatSplit,
        formatSplit.filter((formatPart) => /[m]/i.test(formatPart))[0]
        );
        let yearPosition = getAllIndexes(
        formatSplit,
        formatSplit.filter((formatPart) => /[y]/i.test(formatPart))[0]
        );

        if (dayPosition.length !== 1 ||
        monthPosition.length !== 1 ||
        yearPosition.length !== 1
        ) {
            return responses[0];
        }

        if (formatRegex.test(dateValue)) {
        const dateSplit = dateValue.split(dateSeparator);
        const day = Number(dateSplit[dayPosition]);
        const month = Number(dateSplit[monthPosition]);
        const year = Number(dateSplit[yearPosition]);
        if (
            month <= 0 ||
            month > 12 ||
            day > daysInMonth(year, month) ||
            day <= 0 ||
            year < 1753) 
            {
                return responses[1];
            }
        } else {
            return responses[0];
        }
    }

  return responses[2];
}

module.exports = validateDate;


/***/ }),

/***/ "./src/js/action.js":
/*!**************************!*\
  !*** ./src/js/action.js ***!
  \**************************/
/*! exports provided: storeValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeValue", function() { return storeValue; });
var validateDate = __webpack_require__(/*! validate-date */ "./node_modules/validate-date/validate-date.js"); // convert date and day from 1 to 01, 2 to 02, etc


function pad(d) {
  return d < 10 ? '0' + d.toString() : d.toString();
} // clear alert by setting the show_alerts state to null


function clearAlert(app) {
  app.state.show_alerts = null;
}

function processInput(app) {
  // move to next page
  moveToNextPage(app); // clear any previous alert

  clearAlert(app); // do default function validation if opted-in

  defaultValidation(app); // assign value to target node's value attribute

  assignDateToTargetNode(app);
} // move to next page


function moveToNextPage(app) {
  app.state.current_page = app.state.current_page + 1;
} // format date from State to YYYY-MM-DD format


function getDefaultDateFormat(app) {
  return "".concat(app.state.dob.year, "-").concat(pad(app.state.dob.month), "-").concat(pad(app.state.dob.day));
} // show alert and reset the process (return to first page and clear state)


function showAlert(app, alert_type) {
  app.state.show_alerts = alert_type;
  app.resetProcess();
} // assign value to target node's value attribute


function assignDateToTargetNode(app) {
  // if not in the last page then skip this function
  if (app.state.current_page !== 3 || app.state.show_alerts !== null) {
    return app;
  } // if user provide custom date formatter, use their function


  var selected_date = app.options.dateFormat ? app.options.dateFormat(getDefaultDateFormat(app)) : getDefaultDateFormat(app); // store selected date state

  app.state.selected_date = selected_date;
  app.datepickerTargetNode.value = selected_date; // close the datepicker

  app.hideDatepicker();
} // do the fault validation to make sure date is exist


function defaultValidation(app) {
  // if not in the last page then skip this function
  if (app.state.current_page !== 3) {
    return;
  } // if built in validation is not enabled, skip this function


  if (!app.options.enable_built_in_validation) {
    return;
  } // if the date is not exist or selected date is > date now then set the the alert


  if (!validateDate(getDefaultDateFormat(app), "boolean", "yyyy-mm-dd") || new Date(getDefaultDateFormat(app)) > new Date()) {
    showAlert(app, 'invalid_date_alert');
  }

  return app;
} // store value to state


function storeValue(type, value, app) {
  // store selected day/month/year to state
  app.state.dob[type] = value; // proceed to move to the next page or assign date to target node

  processInput(app);
}



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var superfine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superfine */ "./node_modules/superfine/superfine.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./src/js/action.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // wrapper for whole components

function datepickerUI(app) {
  return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    "class": "dob-datepicker__wrapper ".concat(app.state.show_datepicker ? '' : 'dob-datepicker__wrapper--hide', " ")
  }, [Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    "class": "dob-datepicker__background ".concat(app.options.display_mode === 'popup' ? 'dob-datepicker__background--popup' : ''),
    "style": "z-index: ".concat(app.options.zIndex.invisibleBackground),
    onclick: function onclick() {
      app.hideDatepicker();
    }
  }), Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "id": "datepicker-widget__".concat(app.instance_id),
    "class": "dob-datepicker ".concat(app.options.display_mode === 'popup' ? 'dob-datepicker--popup' : ''),
    "style": "z-index: ".concat(app.options.zIndex.datepickerWidget)
  }, [topArrow(app), // top arrow little thingy component
  header(app), // show header component, default: "when is your birthday?"
  app.state.show_alerts ? alerts(app) : Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {}), selectionHeader(app), // show selection labels, like "Select day", "Select month", "Select year"
  Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "dob-datepicker__options"
  }, //wrapper for options
  getCurrenPageSelection(app) //show option component depend on what page currently is
  ), app.state.current_page > 0 ? resetButton(app) : Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {}) // restart button, hidden when on the first page (current_page = 0)
  ])]);
}

function topArrow(app) {
  return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    "class": "top-arrow ".concat(app.options.display_mode === 'popup' ? 'top-arrow--popup' : '')
  });
} // get current page options component, this is just a helper function so `datepickerUI` function is not cluttered
// if page 0, then show month component,
// if page 1, then show day component,
// if page 2, then show year component


function getCurrenPageSelection(app) {
  if (app.state.current_page === 0) {
    return monthSelection(app);
  } else if (app.state.current_page === 1) {
    return daySelection(app);
  } else {
    return yearSelection(app);
  }
} // alert message component, like "Date is invalid"


function alerts(app) {
  return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "dob-datepicker__alert"
  }, Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])(app.options.alerts[app.state.show_alerts]));
} // header component, default: "when is your birthday?"


function header(app) {
  return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "dob-datepicker__header"
  }, Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])(app.options.labels.header_label));
} // selection labels, like "Select day", "Select month", "Select year"


function selectionHeader(app) {
  return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "dob-datepicker__selection-header"
  }, getSelectionHeaderLabel(app));
} // get label of current page, this is just a helper function so `selectionHeader` function is not cluttered


function getSelectionHeaderLabel(app) {
  if (app.state.current_page === 0) {
    return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])(app.options.labels.select_month_label);
  } else if (app.state.current_page === 1) {
    return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])(app.options.labels.select_day_label);
  } else {
    return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])(app.options.labels.select_year_label);
  }
} // reset and try again button component


function resetButton(app) {
  return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
    "type": "button",
    "class": "dob-datepicker__reset"
  }, [Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "dob-datepicker__reset-text",
    "onclick": function onclick() {
      app.resetProcess();
    }
  }, Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])(app.options.labels.reset_button_label))]);
} // month selection component


function monthSelection(app) {
  return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "dob-datepicker__month",
    tabindex: "0"
  }, app.options[app.options.show_long_month ? 'long_month' : 'short_month'].map(function (month, index) {
    return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      "type": "button",
      "key": index + 1,
      "value": index + 1,
      "class": "dob-datepicker__month__button",
      onclick: function onclick() {
        Object(_action__WEBPACK_IMPORTED_MODULE_1__["storeValue"])('month', index + 1, app);
        app.renderDatepicker();
      }
    }, Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])(month));
  }));
} // day selection component


function daySelection(app) {
  return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "dob-datepicker__day",
    tabindex: "0"
  }, _toConsumableArray(Array(app.state.dob.month === 2 ? 30 : 32).keys()).map(function (day, index) {
    // console.log(index + 1)
    return day === 0 ? null : Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      "type": "button",
      "key": index,
      "value": index,
      "class": "dob-datepicker__day__button",
      "onclick": function onclick() {
        Object(_action__WEBPACK_IMPORTED_MODULE_1__["storeValue"])('day', index, app);
        app.renderDatepicker();
      }
    }, [Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])(day), app.options.enable_ordinal_number ? Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])('sup', {
      "class": "dob-datepicker__day__ordinal-number"
    }, getOrdinalSufix(index)) : null]);
  }));
} // get ordinal sufix for day like 1st, 2nd, 3rd, 4th, etc
// I know it's dumb that I hardcoded it, but hey it works lol


function getOrdinalSufix(number) {
  switch (true) {
    case number === 1 || number === 21 || number === 31:
      return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])('st');
      break;

    case number === 2 || number === 22:
      return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])('nd');
      break;

    case number === 23 || number === 23:
      return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])('rd');
      break;

    default:
      return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])('th');
      break;
  }
} // year selection wrapper component


function yearSelection(app) {
  return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    "class": "dob-datepicker__year",
    tabindex: "0"
  }, generateYear(app));
} // year section component. each section consist of 20 years, like from year 2020 - 2001


function yearSection(app, children, earliest_year, oldest_year) {
  return Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    "class": "dob-datepicker__year__year-section"
  }, [Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "dob-datepicker__year__year-section-header"
  }, Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])("".concat(app.options.labels.date_range_label).concat(oldest_year, " - ").concat(earliest_year))), Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    "class": "dob-datepicker__year__wrapper"
  }, children), Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    "class": "dob-datepicker__year__year-section-next"
  }, Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])('⌄'))]);
} // generate the year


function generateYear(app) {
  // get current year
  var current_year = new Date().getFullYear(); // variable container for all years

  var all_years = []; // variable container for year section, each section consist of 20 years (or less if the year number is not even)

  var year_section = []; // year list like [2020, 2019, 2018...], I need this to track oldest and earliest year for each year section, e.g: 'Year 2020 - 2001`

  var year_range = []; // loop from current year until olders year

  var _loop = function _loop(i) {
    // process the per batch, each batch consist of 20 years
    if (year_section.length < 20) {
      // store the year to year list to retrieve later
      year_range.push(i); // craete element of each BUTTON then store it to year section container

      year_section.push(Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
        "type": "button",
        "key": i,
        "value": i,
        "class": "dob-datepicker__year__button",
        onclick: function onclick() {
          Object(_action__WEBPACK_IMPORTED_MODULE_1__["storeValue"])('year', i, app);
          app.renderDatepicker();
        }
      }, [Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])('span', {
        "class": "dob-datepicker__year__button__first"
      }, Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])(i.toString().substring(0, 2))), Object(superfine__WEBPACK_IMPORTED_MODULE_0__["h"])('span', {
        "class": "dob-datepicker__year__button__last"
      }, Object(superfine__WEBPACK_IMPORTED_MODULE_0__["text"])(i.toString().substring(2)))])); // if the year section is full (20 years), then wrap the BUTTONS with year section element (year 2020 - 2001, down arrow and averyhting else )

      if (year_section.length === 20) {
        // after we wrap the button with section element. we store it to All years variable
        all_years.push(yearSection(app, year_section, year_range[0], year_range[year_range.length - 1])); // after we store it to year container, empty this variable to start the next batc

        year_section = [];
        year_range = [];
      } // in the last batch, it quite likely that the number of left over year is less than 20
      // if current loop item is equal to oldest year, then wrap it on year section and push it to All years container


      if (i === current_year - app.options.year_range) {
        all_years.push(yearSection(app, year_section, year_range[0], year_range[year_range.length - 1]));
      }
    }
  };

  for (var i = current_year; i >= current_year - app.options.year_range; i--) {
    _loop(i);
  } // return all years to parent component


  return all_years;
}

/* harmony default export */ __webpack_exports__["default"] = (datepickerUI);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var superfine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superfine */ "./node_modules/superfine/superfine.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/js/app.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // instance ID counter

var instance_id = 0; // default configurations

var DEFAULT_OPTIONS = {
  display_mode: 'inline',
  year_range: 120,
  enable_built_in_validation: true,
  enable_ordinal_number: true,
  show_long_month: true,
  dateFormat: null,
  zIndex: {
    targetNode: "150",
    datepickerWidget: "150",
    invisibleBackground: "100"
  },
  long_month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  short_month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  labels: {
    header_label: 'When is your birthday?',
    select_day_label: 'Select day',
    select_month_label: 'Select month',
    select_year_label: 'Select year',
    reset_button_label: 'Reset and try again',
    date_range_label: 'Year ' //label for year section -> "Year 2000 - 2020"

  },
  alerts: {
    invalid_date_alert: 'Date is invalid'
  }
}; // function factory of datepicker

function dobDatepicker(selector, options) {
  var datepickerPrototype = Object.create(datepickerMethods);
  var datepickerData = {
    instance_id: instance_id++,
    state: {
      selected_date: null,
      show_datepicker: false,
      show_alerts: null,
      current_page: 0,
      // page 0 is select month page, page 1 is select day page, page 2 is select year page
      dob: {
        day: null,
        month: null,
        year: null
      }
    },
    options: _objectSpread({}, DEFAULT_OPTIONS),
    selector: null,
    datepickerWidgetNode: null,
    datepickerContainerNode: null,
    datepickerTargetNode: null,
    datepickerTargetParentNode: null,
    focusTrap: null
  };
  var datepickerInstance = Object.assign(datepickerPrototype, datepickerData);
  datepickerInstance.init(selector, options);
  return datepickerInstance;
} // datepicker methods prototype


var datepickerMethods = {
  getDatepickerWidgetNode: function getDatepickerWidgetNode() {
    return this.datepickerWidgetNode ? this.datepickerWidgetNode : this.setDatepickerWidgetNode();
  },
  setDatepickerWidgetNode: function setDatepickerWidgetNode() {
    return this.datepickerWidgetNode = document.getElementById("datepicker-widget__".concat(this.instance_id));
  },
  getDatepickerTargetNode: function getDatepickerTargetNode() {
    return this.datepickerTargetNode ? this.datepickerTargetNode : this.setDatepickerTargetNode();
  },
  setDatepickerTargetNode: function setDatepickerTargetNode() {
    return this.datepickerTargetNode = this.selector instanceof Element ? this.selector : document.querySelector(this.getSelector());
  },
  getDatepickerTargetParentNode: function getDatepickerTargetParentNode() {
    return this.datepickerTargetParentNode ? this.datepickerTargetParentNode : this.setDatepickerTargetParentNode();
  },
  setDatepickerTargetParentNode: function setDatepickerTargetParentNode() {
    return this.datepickerTargetParentNode = this.selector instanceof Element ? this.selector.parentElement : document.querySelector(this.getSelector()).parentElement;
  },
  getdatepickerContainerNode: function getdatepickerContainerNode() {
    return this.datepickerContainerNode ? this.datepickerContainerNode : this.setDatepickerContainerNode();
  },
  setDatepickerContainerNode: function setDatepickerContainerNode() {
    var container = document.createElement('div');
    container.style.setProperty('position', 'absolute');
    return this.datepickerContainerNode = container;
  },
  getSelector: function getSelector() {
    return this.selector;
  },
  setSelector: function setSelector(selector) {
    this.selector = selector;
    return this;
  },
  getFocusTrap: function getFocusTrap() {
    return this.focusTrap ? this.focusTrap : this.setFocusTrap();
  },
  setFocusTrap: function setFocusTrap() {
    return this.focusTrap = Object(focus_trap__WEBPACK_IMPORTED_MODULE_2__["createFocusTrap"])(this.getDatepickerWidgetNode(), {
      clickOutsideDeactivates: true,
      returnFocusOnDeactivate: false
    });
  },
  registerUserOptions: function registerUserOptions(user_options) {
    // replace default options with user's options
    Object.assign(this.options, user_options);
    return this;
  },
  resetProcess: function resetProcess() {
    this.state.dob.day = null;
    this.state.dob.month = null;
    this.state.dob.year = null;
    this.state.current_page = 0;
    this.renderDatepicker(this);
    return this;
  },
  showDatepicker: function showDatepicker() {
    this.state.show_datepicker = true;
    this.resetProcess();
    return this;
  },
  hideDatepicker: function hideDatepicker() {
    this.state.show_datepicker = false;
    this.renderDatepicker(this);
    return this;
  },
  attachListenerToTargetNode: function attachListenerToTargetNode() {
    var _this = this;

    // when cursor focus on datepicker then show the datepicker
    this.getDatepickerTargetNode().addEventListener("focus", function () {
      _this.showDatepicker();
    }); // when user press escape then hide the datepicker

    document.addEventListener("keydown", function (e) {
      if (e.key === 'Escape') {
        _this.hideDatepicker();
      }
    });
    return this;
  },
  attachDatepickerContainerToDOM: function attachDatepickerContainerToDOM() {
    // set parent of target element (target element is element with the selector/DOM provided by user) `style = relative` 
    // because the datepicker container need to have `absolute` positioning
    // then append the datepicker container as the child
    var container = this.getdatepickerContainerNode();
    this.getDatepickerTargetParentNode().style.setProperty('position', 'relative');
    this.getDatepickerTargetParentNode().appendChild(container);
    return this;
  },
  adjustDatepickerPosition: function adjustDatepickerPosition() {
    var widgetRect = this.getDatepickerWidgetNode().getBoundingClientRect();
    var parentRect = this.getDatepickerTargetParentNode().getBoundingClientRect();
    var targetRect = this.getDatepickerTargetNode().getBoundingClientRect();
    var top = parentRect.height - (parentRect.bottom - targetRect.bottom);
    var left = targetRect.left - parentRect.left + (targetRect.width / 2 - widgetRect.width / 2); // +12px is height of the arrow

    this.getdatepickerContainerNode().style.top = "".concat(top + 12, "px");
    this.getdatepickerContainerNode().style.left = "".concat(left, "px");
    return this;
  },
  renderDatepicker: function renderDatepicker() {
    // deactivate focus trap before rendering anything, **Only one focus trap can be listening at a time** 
    this.getFocusTrap().deactivate(); // render the UI

    Object(superfine__WEBPACK_IMPORTED_MODULE_0__["patch"])(this.getdatepickerContainerNode(), Object(_app_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this)); // adjust position

    this.adjustDatepickerPosition(); // if datepicker is shown then activate the focus trap

    if (this.state.show_datepicker) {
      this.getFocusTrap().activate();
    }

    return this;
  },
  init: function init(selector, options) {
    this.setSelector(selector).registerUserOptions(options).attachDatepickerContainerToDOM().renderDatepicker().attachListenerToTargetNode().adjustDatepickerPosition().setFocusTrap();
  }
}; // expose funtion to global variable so the method is usable directly from browser, 
// this commented code is here for the convinience for development adn debugging
// if(typeof window !== 'undefined'){
//     window.dobDatepicker = dobDatepicker
// }

/* harmony default export */ __webpack_exports__["default"] = (dobDatepicker);

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wamdev1/Code/migumelar/date-of-birth-js/src/js/index.js */"./src/js/index.js");


/***/ })

/******/ })["default"];
});