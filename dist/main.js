/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    background-color: #f0f0f0;\n}\n\n.gameboard-container {\n    text-align: center;\n}\n\n.gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 40px);\n}\n\n.cell {\n    width: 40px;\n    height: 40px;\n    background-color: #fff;\n    border: 1px solid black;\n}\n\n.cell.ship {\n    background-color: #007bff;\n}\n\n.cell.hit {\n    background-color: #dc3545;\n}\n\n.cell.miss {\n    background-color: #6c757d;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

    /***/ }),
    
    /***/ "./node_modules/css-loader/dist/runtime/api.js":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/
    /***/ ((module) => {
    
    eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");
    
    /***/ }),
    
    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
    /*!**************************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
      \**************************************************************/
    /***/ ((module) => {
    
    eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");
    
    /***/ }),
    
    /***/ "./src/styles.css":
    /*!************************!*\
      !*** ./src/styles.css ***!
      \************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/
    /***/ ((module) => {
    
    eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
    /*!********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
      \********************************************************************/
    /***/ ((module) => {
    
    eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
      \**********************************************************************/
    /***/ ((module) => {
    
    eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
      \**********************************************************************************/
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
    eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
    /*!***************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
      \***************************************************************/
    /***/ ((module) => {
    
    eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");
    
    /***/ }),
    
    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
      \*********************************************************************/
    /***/ ((module) => {
    
    eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");
    
    /***/ }),
    
    /***/ "./src/classes/GameController.js":
    /*!***************************************!*\
      !*** ./src/classes/GameController.js ***!
      \***************************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameController: () => (/* binding */ GameController)\n/* harmony export */ });\nclass GameController {\n    constructor(human, computer) {\n        this.human = human;\n        this.computer = computer;\n        this.currentPlayer = 'human'; \n        this.handleHumanAttack = this.handleHumanAttack.bind(this);\n    }\n\n    startGame() {\n        this.human.gameboard.populateBoard();\n        this.computer.gameboard.populateBoard();\n        this.updateUI();\n        this.nextTurn();\n    }\n\n    updateUI() {\n        const humanBoardElement = document.getElementById('humanBoard');\n        const computerBoardElement = document.getElementById('computerBoard');\n\n        this.human.gameboard.render(humanBoardElement, true); \n        this.computer.gameboard.render(computerBoardElement);   \n    }\n\n    nextTurn() {\n        if (this.currentPlayer === 'human') {\n            this.humanTurn();\n        } else {\n            this.computerTurn();\n        }\n    }\n\n    humanTurn() {\n        const computerBoardElement = document.getElementById('computerBoard');\n\n        computerBoardElement.removeEventListener('click', this.handleHumanAttack);\n        computerBoardElement.addEventListener('click',this.handleHumanAttack);\n    }\n\n    handleHumanAttack(e) {\n        const x = parseInt(e.target.dataset.x);\n        const y = parseInt(e.target.dataset.y);\n\n        if (this.computer.gameboard.receiveAttack([x, y])) {\n            e.target.classList.add('hit');\n        } else {\n            e.target.classList.add('miss');\n        }\n\n        if (this.computer.gameboard.allShipsSunk()) {\n            alert('Human wins!');\n            return;\n        }\n\n        this.currentPlayer = 'computer';\n        this.nextTurn(); \n    }\n\n    computerTurn() {\n        const { x, y } = this.getRandomCoordinates();\n        const humanBoardElement = document.getElementById('humanBoard');\n        const cell = humanBoardElement.querySelector(`[data-x='${x}'][data-y='${y}']`);\n\n        if (this.human.gameboard.receiveAttack([x, y])) {\n            cell.classList.add('hit');\n        } else {\n            cell.classList.add('miss');\n        }\n\n        if (this.human.gameboard.allShipsSunk()) {\n            alert('Computer wins!');\n            return;\n        }\n\n        this.currentPlayer = 'human';\n        this.nextTurn(); \n    }\n\n    getRandomCoordinates() {\n        const x = Math.floor(Math.random() * this.human.gameboard.size);\n        const y = Math.floor(Math.random() * this.human.gameboard.size);\n        return { x, y };\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/classes/GameController.js?");
    
    /***/ }),
    
    /***/ "./src/classes/Gameboard.js":
    /*!**********************************!*\
      !*** ./src/classes/Gameboard.js ***!
      \**********************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/classes/Ship.js\");\n\n\nclass Gameboard {\n    constructor() {\n        this.size = 10;\n        this.ships = [];\n        this.shotsTaken = [];\n    }\n\n    isValidPlacement(ship, x, y, orientation){\n        if(x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1){\n            return false;\n        }\n\n        for (let { coordinates } of this.ships) {\n            for (let [cx, cy] of coordinates) {\n                if (cx === x && cy === y) {\n                    return false;\n                }\n            }\n        }\n\n        if(orientation === \"horizontal\"){\n            if(ship.length + x > this.size - 1){\n                return false;\n            }\n\n            for (let i = 0; i < ship.length; i++) {\n                if (this.ships.some(({ coordinates }) => coordinates.some(([cx, cy]) => cx === x + i && cy === y))) {\n                    return false;\n                }\n            }\n\n            return true;\n        }\n        else if(orientation === \"vertical\"){\n            if(ship.length + y > this.size - 1){\n                return false;\n            }\n\n            for (let i = 0; i < ship.length; i++) {\n                if (this.ships.some(({ coordinates }) => coordinates.some(([cx, cy]) => cx === x && cy === y + i))) {\n                    return false;\n                }\n            }\n\n            return true;\n        }\n\n        return false\n    }\n\n    placeShips(ship, x, y, orientation) {\n        if(!this.isValidPlacement(ship, x, y, orientation)){\n            throw new Error('Invalid placement');\n        }\n\n        const coordinates = []\n\n        if(orientation === \"horizontal\"){\n            for(let i = 0; i < ship.length; i++){\n                coordinates.push([x + i, y]);\n            }\n        }\n        else if(orientation === \"vertical\"){\n            for(let i = 0; i < ship.length; i++){\n                coordinates.push([x, y + i]);\n            }\n        }\n\n        this.ships.push({ship, coordinates});\n\n        return coordinates;\n    }\n\n    receiveAttack([x, y]){\n        if (this.shotsTaken.some(([sx, sy]) => sx === x && sy === y)) {\n            return false;\n        }\n        this.shotsTaken.push([x, y]);\n\n        for (let { ship, coordinates } of this.ships) {\n            for (let [cx, cy] of coordinates) {\n                if (cx === x && cy === y) {\n                    ship.hit();\n                    return true;\n                }\n            }\n        }\n    }\n\n    allShipsSunk(){\n        return this.ships.every(shipObj => shipObj.ship.sunk);\n    }\n\n    populateBoard(){\n        const array = [new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(4), new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(5)]\n\n        array.forEach((ship) => {\n            let placed = false;\n            while(!placed){\n                let randomX = Math.floor(Math.random() * 10);\n                let randomY = Math.floor(Math.random() * 10);\n                let randomOrientation = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";   \n                \n                if (this.isValidPlacement(ship, randomX, randomY, randomOrientation)) {\n                    this.placeShips(ship, randomX, randomY, randomOrientation);\n                    placed = true;\n                }\n            }\n        })\n\n    }\n\n    render(boardElement, showShips = false) {\n        const size = this.size;\n\n        for (let y = 0; y < size; y++) {\n            for (let x = 0; x < size; x++) {\n                const cell = document.createElement('div');\n                cell.classList.add('cell');\n                cell.dataset.x = x;\n                cell.dataset.y = y;\n\n                if (showShips && this.ships.some(({ coordinates }) => coordinates.some(([cx, cy]) => cx === x && cy === y))) {\n                    cell.classList.add('ship');\n                }\n                boardElement.appendChild(cell);\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/classes/Gameboard.js?");
    
    /***/ }),
    
    /***/ "./src/classes/Player.js":
    /*!*******************************!*\
      !*** ./src/classes/Player.js ***!
      \*******************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/classes/Gameboard.js\");\n\n\nclass Player {\n    constructor() {\n        this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard;\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/classes/Player.js?");
    
    /***/ }),
    
    /***/ "./src/classes/Ship.js":
    /*!*****************************!*\
      !*** ./src/classes/Ship.js ***!
      \*****************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship{\n    constructor(length){\n        this.length = length;\n        this.hitCount = 0;\n        this.sunk = false;\n    }\n\n    hit(){\n        this.hitCount++;\n        this.isSunk();\n    }\n\n    isSunk() {\n        if(this.hitCount === this.length){\n            this.sunk = true;\n            return true;\n        }\n\n        return false;\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/classes/Ship.js?");
    
    /***/ }),
    
    /***/ "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _classes_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Player */ \"./src/classes/Player.js\");\n/* harmony import */ var _classes_GameController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/GameController */ \"./src/classes/GameController.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const human = new _classes_Player__WEBPACK_IMPORTED_MODULE_1__.Player();\n    const computer = new _classes_Player__WEBPACK_IMPORTED_MODULE_1__.Player();\n    const gameController = new _classes_GameController__WEBPACK_IMPORTED_MODULE_2__.GameController(human, computer);\n\n    gameController.startGame(); // Start the game\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
    /******/ 			return cachedModule.exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			id: moduleId,
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/ 	
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /************************************************************************/
    /******/ 	/* webpack/runtime/compat get default export */
    /******/ 	(() => {
    /******/ 		// getDefaultExport function for compatibility with non-harmony modules
    /******/ 		__webpack_require__.n = (module) => {
    /******/ 			var getter = module && module.__esModule ?
    /******/ 				() => (module['default']) :
    /******/ 				() => (module);
    /******/ 			__webpack_require__.d(getter, { a: getter });
    /******/ 			return getter;
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = (exports, definition) => {
    /******/ 			for(var key in definition) {
    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    /******/ 				}
    /******/ 			}
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	(() => {
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	(() => {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = (exports) => {
    /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    /******/ 			}
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 		};
    /******/ 	})();
    /******/ 	
    /******/ 	/* webpack/runtime/nonce */
    /******/ 	(() => {
    /******/ 		__webpack_require__.nc = undefined;
    /******/ 	})();
    /******/ 	
    /************************************************************************/
    /******/ 	
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
    /******/ 	
    /******/ })()
    ;