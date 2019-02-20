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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/sketch-js/js/sketch.js":
/*!*********************************************!*\
  !*** ./node_modules/sketch-js/js/sketch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n/* Copyright (C) 2013 Justin Windle, http://soulwire.co.uk */\n\n(function ( root, factory ) {\n\n  if ( true ) {\n\n    // CommonJS like\n    module.exports = factory(root, root.document);\n\n  } else {}\n\n}( typeof window !== \"undefined\" ? window : this, function ( window, document ) {\n\n\n  \"use strict\";\n\n  /*\n  ----------------------------------------------------------------------\n\n    Config\n\n  ----------------------------------------------------------------------\n  */\n\n  var MATH_PROPS = 'E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min'.split( ' ' );\n  var HAS_SKETCH = '__hasSketch';\n  var M = Math;\n\n  var CANVAS = 'canvas';\n  var WEBGL = 'webgl';\n  var DOM = 'dom';\n\n  var doc = document;\n  var win = window;\n\n  var instances = [];\n\n  var defaults = {\n\n    fullscreen: true,\n    autostart: true,\n    autoclear: true,\n    autopause: true,\n    container: doc.body,\n    interval: 1,\n    globals: true,\n    retina: false,\n    type: CANVAS\n  };\n\n  var keyMap = {\n\n     8: 'BACKSPACE',\n     9: 'TAB',\n    13: 'ENTER',\n    16: 'SHIFT',\n    27: 'ESCAPE',\n    32: 'SPACE',\n    37: 'LEFT',\n    38: 'UP',\n    39: 'RIGHT',\n    40: 'DOWN'\n  };\n\n  /*\n  ----------------------------------------------------------------------\n\n    Utilities\n\n  ----------------------------------------------------------------------\n  */\n\n  function isArray( object ) {\n\n    return Object.prototype.toString.call( object ) == '[object Array]';\n  }\n\n  function isFunction( object ) {\n\n    return typeof object == 'function';\n  }\n\n  function isNumber( object ) {\n\n    return typeof object == 'number';\n  }\n\n  function isString( object ) {\n\n    return typeof object == 'string';\n  }\n\n  function keyName( code ) {\n\n    return keyMap[ code ] || String.fromCharCode( code );\n  }\n\n  function extend( target, source, overwrite ) {\n\n    for ( var key in source )\n\n      if ( overwrite || !( key in target ) )\n\n        target[ key ] = source[ key ];\n\n    return target;\n  }\n\n  function proxy( method, context ) {\n\n    return function() {\n\n      method.apply( context, arguments );\n    };\n  }\n\n  function clone( target ) {\n\n    var object = {};\n\n    for ( var key in target ) {\n      \n      if ( key === 'webkitMovementX' || key === 'webkitMovementY' )\n        continue;\n\n      if ( isFunction( target[ key ] ) )\n\n        object[ key ] = proxy( target[ key ], target );\n\n      else\n\n        object[ key ] = target[ key ];\n    }\n\n    return object;\n  }\n\n  /*\n  ----------------------------------------------------------------------\n\n    Constructor\n\n  ----------------------------------------------------------------------\n  */\n\n  function constructor( context ) {\n\n    var request, handler, target, parent, bounds, index, suffix, clock, node, copy, type, key, val, min, max, w, h;\n\n    var counter = 0;\n    var touches = [];\n    var resized = false;\n    var setup = false;\n    var ratio = win.devicePixelRatio || 1;\n    var isDiv = context.type == DOM;\n    var is2D = context.type == CANVAS;\n\n    var mouse = {\n      x:  0.0, y:  0.0,\n      ox: 0.0, oy: 0.0,\n      dx: 0.0, dy: 0.0\n    };\n\n    var eventMap = [\n\n      context.eventTarget || context.element,\n\n        pointer, 'mousedown', 'touchstart',\n        pointer, 'mousemove', 'touchmove',\n        pointer, 'mouseup', 'touchend',\n        pointer, 'click',\n        pointer, 'mouseout',\n        pointer, 'mouseover',\n\n      doc,\n\n        keypress, 'keydown', 'keyup',\n\n      win,\n\n        active, 'focus', 'blur',\n        resize, 'resize'\n    ];\n\n    var keys = {}; for ( key in keyMap ) keys[ keyMap[ key ] ] = false;\n\n    function trigger( method ) {\n\n      if ( isFunction( method ) )\n\n        method.apply( context, [].splice.call( arguments, 1 ) );\n    }\n\n    function bind( on ) {\n\n      for ( index = 0; index < eventMap.length; index++ ) {\n\n        node = eventMap[ index ];\n\n        if ( isString( node ) )\n\n          target[ ( on ? 'add' : 'remove' ) + 'EventListener' ].call( target, node, handler, false );\n\n        else if ( isFunction( node ) )\n\n          handler = node;\n\n        else target = node;\n      }\n    }\n\n    function update() {\n\n      cAF( request );\n      request = rAF( update );\n\n      if ( !setup ) {\n\n        trigger( context.setup );\n        setup = isFunction( context.setup );\n      }\n\n      if ( !resized ) {\n        trigger( context.resize );\n        resized = isFunction( context.resize );\n      }\n\n      if ( context.running && !counter ) {\n\n        context.dt = ( clock = +new Date() ) - context.now;\n        context.millis += context.dt;\n        context.now = clock;\n\n        trigger( context.update );\n\n        // Pre draw\n\n        if ( is2D ) {\n\n          if ( context.retina ) {\n\n            context.save();\n            \n            if (context.autoclear) {\n              context.scale( ratio, ratio );\n            }\n          }\n\n          if ( context.autoclear )\n\n            context.clear();\n        }\n\n        // Draw\n\n        trigger( context.draw );\n\n        // Post draw\n\n        if ( is2D && context.retina )\n\n          context.restore();\n      }\n\n      counter = ++counter % context.interval;\n    }\n\n    function resize() {\n\n      target = isDiv ? context.style : context.canvas;\n      suffix = isDiv ? 'px' : '';\n\n      w = context.width;\n      h = context.height;\n\n      if ( context.fullscreen ) {\n\n        h = context.height = win.innerHeight;\n        w = context.width = win.innerWidth;\n      }\n\n      if ( context.retina && is2D && ratio ) {\n\n        target.style.height = h + 'px';\n        target.style.width = w + 'px';\n\n        w *= ratio;\n        h *= ratio;\n      }\n\n      if ( target.height !== h )\n\n        target.height = h + suffix;\n\n      if ( target.width !== w )\n\n        target.width = w + suffix;\n\n      if ( is2D && !context.autoclear && context.retina )\n\n        context.scale( ratio, ratio );\n\n      if ( setup ) trigger( context.resize );\n    }\n\n    function align( touch, target ) {\n\n      bounds = target.getBoundingClientRect();\n\n      touch.x = touch.pageX - bounds.left - (win.scrollX || win.pageXOffset);\n      touch.y = touch.pageY - bounds.top - (win.scrollY || win.pageYOffset);\n\n      return touch;\n    }\n\n    function augment( touch, target ) {\n\n      align( touch, context.element );\n\n      target = target || {};\n\n      target.ox = target.x || touch.x;\n      target.oy = target.y || touch.y;\n\n      target.x = touch.x;\n      target.y = touch.y;\n\n      target.dx = target.x - target.ox;\n      target.dy = target.y - target.oy;\n\n      return target;\n    }\n\n    function process( event ) {\n\n      event.preventDefault();\n\n      copy = clone( event );\n      copy.originalEvent = event;\n\n      if ( copy.touches ) {\n\n        touches.length = copy.touches.length;\n\n        for ( index = 0; index < copy.touches.length; index++ )\n\n          touches[ index ] = augment( copy.touches[ index ], touches[ index ] );\n\n      } else {\n\n        touches.length = 0;\n        touches[0] = augment( copy, mouse );\n      }\n\n      extend( mouse, touches[0], true );\n\n      return copy;\n    }\n\n    function pointer( event ) {\n\n      event = process( event );\n\n      min = ( max = eventMap.indexOf( type = event.type ) ) - 1;\n\n      context.dragging =\n\n        /down|start/.test( type ) ? true :\n\n        /up|end/.test( type ) ? false :\n\n        context.dragging;\n\n      while( min )\n\n        isString( eventMap[ min ] ) ?\n\n          trigger( context[ eventMap[ min-- ] ], event ) :\n\n        isString( eventMap[ max ] ) ?\n\n          trigger( context[ eventMap[ max++ ] ], event ) :\n\n        min = 0;\n    }\n\n    function keypress( event ) {\n\n      key = event.keyCode;\n      val = event.type == 'keyup';\n      keys[ key ] = keys[ keyName( key ) ] = !val;\n\n      trigger( context[ event.type ], event );\n    }\n\n    function active( event ) {\n\n      if ( context.autopause )\n\n        ( event.type == 'blur' ? stop : start )();\n\n      trigger( context[ event.type ], event );\n    }\n\n    // Public API\n\n    function start() {\n\n      context.now = +new Date();\n      context.running = true;\n    }\n\n    function stop() {\n\n      context.running = false;\n    }\n\n    function toggle() {\n\n      ( context.running ? stop : start )();\n    }\n\n    function clear() {\n\n      if ( is2D )\n\n        context.clearRect( 0, 0, context.width * ratio, context.height * ratio );\n    }\n\n    function destroy() {\n\n      parent = context.element.parentNode;\n      index = instances.indexOf( context );\n\n      if ( parent ) parent.removeChild( context.element );\n      if ( ~index ) instances.splice( index, 1 );\n\n      bind( false );\n      stop();\n    }\n\n    extend( context, {\n\n      touches: touches,\n      mouse: mouse,\n      keys: keys,\n\n      dragging: false,\n      running: false,\n      millis: 0,\n      now: NaN,\n      dt: NaN,\n\n      destroy: destroy,\n      toggle: toggle,\n      clear: clear,\n      start: start,\n      stop: stop\n    });\n\n    instances.push( context );\n\n    return ( context.autostart && start(), bind( true ), resize(), update(), context );\n  }\n\n  /*\n  ----------------------------------------------------------------------\n\n    Global API\n\n  ----------------------------------------------------------------------\n  */\n\n  var element, context, Sketch = {\n\n    CANVAS: CANVAS,\n    WEB_GL: WEBGL,\n    WEBGL: WEBGL,\n    DOM: DOM,\n\n    instances: instances,\n\n    install: function( context ) {\n\n      if ( !context[ HAS_SKETCH ] ) {\n\n        for ( var i = 0; i < MATH_PROPS.length; i++ )\n\n          context[ MATH_PROPS[i] ] = M[ MATH_PROPS[i] ];\n\n        extend( context, {\n\n          TWO_PI: M.PI * 2,\n          HALF_PI: M.PI / 2,\n          QUARTER_PI: M.PI / 4,\n\n          random: function( min, max ) {\n\n            if ( isArray( min ) )\n\n              return min[ ~~( M.random() * min.length ) ];\n\n            if ( !isNumber( max ) )\n\n              max = min || 1, min = 0;\n\n            return min + M.random() * ( max - min );\n          },\n\n          lerp: function( min, max, amount ) {\n\n            return min + amount * ( max - min );\n          },\n\n          map: function( num, minA, maxA, minB, maxB ) {\n\n            return ( num - minA ) / ( maxA - minA ) * ( maxB - minB ) + minB;\n          }\n        });\n\n        context[ HAS_SKETCH ] = true;\n      }\n    },\n\n    create: function( options ) {\n\n      options = extend( options || {}, defaults );\n\n      if ( options.globals ) Sketch.install( self );\n\n      element = options.element = options.element || doc.createElement( options.type === DOM ? 'div' : 'canvas' );\n\n      context = options.context = options.context || (function() {\n\n        switch( options.type ) {\n\n          case CANVAS:\n\n            return element.getContext( '2d', options );\n\n          case WEBGL:\n\n            return element.getContext( 'webgl', options ) || element.getContext( 'experimental-webgl', options );\n\n          case DOM:\n\n            return element.canvas = element;\n        }\n\n      })();\n\n      ( options.container || doc.body ).appendChild( element );\n\n      return Sketch.augment( context, options );\n    },\n\n    augment: function( context, options ) {\n\n      options = extend( options || {}, defaults );\n\n      options.element = context.canvas || context;\n      options.element.className += ' sketch';\n\n      extend( context, options, true );\n\n      return constructor( context );\n    }\n  };\n\n  /*\n  ----------------------------------------------------------------------\n\n    Shims\n\n  ----------------------------------------------------------------------\n  */\n\n  var vendors = [ 'ms', 'moz', 'webkit', 'o' ];\n  var scope = self;\n  var then = 0;\n\n  var a = 'AnimationFrame';\n  var b = 'request' + a;\n  var c = 'cancel' + a;\n\n  var rAF = scope[ b ];\n  var cAF = scope[ c ];\n\n  for ( var i = 0; i < vendors.length && !rAF; i++ ) {\n\n    rAF = scope[ vendors[ i ] + 'Request' + a ];\n    cAF = scope[ vendors[ i ] + 'Cancel' + a ];\n  }\n\n  scope[ b ] = rAF = rAF || function( callback ) {\n\n    var now = +new Date();\n    var dt = M.max( 0, 16 - ( now - then ) );\n    var id = setTimeout( function() {\n      callback( now + dt );\n    }, dt );\n\n    then = now + dt;\n    return id;\n  };\n\n  scope[ c ] = cAF = cAF || function( id ) {\n    clearTimeout( id );\n  };\n\n  /*\n  ----------------------------------------------------------------------\n\n    Output\n\n  ----------------------------------------------------------------------\n  */\n\n  return Sketch;\n\n}));\n\n\n//# sourceURL=webpack:///./node_modules/sketch-js/js/sketch.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sketch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch-js */ \"./node_modules/sketch-js/js/sketch.js\");\n/* harmony import */ var sketch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nsketch_js__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  setup() {\n    this.r = this.g = this.b = random(100, 200)\n  },\n  mousemove() {\n    this.r = 255 * (this.mouse.x / this.width)\n    this.g = 255 * (this.mouse.y / this.height)\n    this.b = 255 * abs(cos(PI * this.mouse.y / this.width))\n  },\n  draw() {\n    this.fillStyle = `rgb(${~~this.r},${~~this.g},${~~this.b})`\n    this.fillRect(0, 0, this.width, this.height)\n  }\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });