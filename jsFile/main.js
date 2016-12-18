/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var __weex_template__ = __webpack_require__(5)
	var __weex_style__ = __webpack_require__(6)
	var __weex_script__ = __webpack_require__(7)

	__weex_define__('@weex-component/5963664bb2f19dce71a6e8bd54e12861', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/5963664bb2f19dce71a6e8bd54e12861',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/bag', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "bagDiv"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "leftDiv"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "玩"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "家"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.playerId}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "rightDiv"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "drinkNumDiv"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "textAlign": "center"
	                  },
	                  "attr": {
	                    "value": function () {return '已喝' + (this.drinkNum)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "playerBagDiv"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "bagDiv": {
	    "flexDirection": "row",
	    "width": 150,
	    "height": 120,
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#000000",
	    "backgroundColor": "#FFFFFF",
	    "opacity": 0.9
	  },
	  "leftDiv": {
	    "width": 30,
	    "height": 120,
	    "borderRightWidth": 1,
	    "borderRightStyle": "solid",
	    "borderRightColor": "#000000",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "rightDiv": {
	    "flexDirection": "column",
	    "width": 120,
	    "height": 120
	  },
	  "drinkNumDiv": {
	    "width": 120,
	    "height": 35,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#000000"
	  },
	  "playerBagDiv": {
	    "width": 120,
	    "height": 85
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	    data: function () {return {
	        playerId: 1,
	        drinkNum: 0
	    }}
	};}
	/* generated by weex-loader */


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "resize": "cover",
	        "src": function () {return this.bgImgSrc}
	      },
	      "classList": [
	        "bgImg"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "mainCont"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "leftPlayer"
	          ],
	          "children": [
	            {
	              "type": "bag",
	              "repeat": {
	                "expression": function () {return this.leftPlayer},
	                "value": "player"
	              },
	              "attr": {
	                "playerid": function () {return this.player.platerId},
	                "drinknum": "player.drinkNum"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "rightPlayer"
	          ],
	          "children": [
	            {
	              "type": "bag",
	              "repeat": {
	                "expression": function () {return this.leftPlayer},
	                "value": "player"
	              },
	              "attr": {
	                "playerid": function () {return this.player.platerId},
	                "drinknum": "player.drinkNum"
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "currPlayerTip"
	          ],
	          "attr": {
	            "value": function () {return '玩家' + (this.currPlayer) + '摸牌'}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "helpBtn"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "helpText"
	              ],
	              "attr": {
	                "value": "？"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "endGameBtn"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "endGameText"
	              ],
	              "attr": {
	                "value": "结束游戏"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "bgImg": {
	    "width": 750,
	    "height": 1175
	  },
	  "mainCont": {
	    "position": "absolute",
	    "top": 0,
	    "width": 750,
	    "height": 1175
	  },
	  "leftPlayer": {
	    "width": 150,
	    "height": 1175,
	    "justifyContent": "center"
	  },
	  "rightPlayer": {
	    "width": 150,
	    "height": 1175,
	    "justifyContent": "center",
	    "position": "absolute",
	    "top": 0,
	    "right": 0
	  },
	  "currPlayerTip": {
	    "width": 750,
	    "height": 100,
	    "position": "absolute",
	    "top": 0,
	    "color": "#FFFF00",
	    "fontSize": 80,
	    "fontWeight": "bold",
	    "textAlign": "center"
	  },
	  "helpBtn": {
	    "width": 80,
	    "height": 80,
	    "backgroundColor": "#0000FF",
	    "position": "absolute",
	    "left": 0,
	    "bottom": 0
	  },
	  "helpText": {
	    "color": "#FFFFFF",
	    "fontSize": 50,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  },
	  "endGameBtn": {
	    "width": 230,
	    "height": 80,
	    "backgroundColor": "#0000FF",
	    "position": "absolute",
	    "right": 0,
	    "bottom": 0
	  },
	  "endGameText": {
	    "color": "#FFFFFF",
	    "fontSize": 50,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	    data: function () {return {
	        bgImgSrc: "https://13111211.github.io/weexCompetition/imgs/background/bg3.jpg",
	        currPlayer: 1,
	        leftPlayer: [{
	            playerId: 1,
	            drinkNum: 0
	        }, {
	            playerId: 2,
	            drinkNum: 0
	        }, {
	            playerId: 3,
	            drinkNum: 0
	        }, {
	            playerId: 4,
	            drinkNum: 0
	        }, {
	            playerId: 5,
	            drinkNum: 0
	        }, {
	            playerId: 6,
	            drinkNum: 0
	        }, {
	            playerId: 7,
	            drinkNum: 0
	        }]
	    }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);