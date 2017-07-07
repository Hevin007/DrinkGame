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
	__webpack_require__(5)
	__webpack_require__(9)
	__webpack_require__(131)
	var __weex_template__ = __webpack_require__(135)
	var __weex_script__ = __webpack_require__(136)

	__weex_define__('@weex-component/47aaca89b07ca2a4f4e2f1a333d0a251', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/47aaca89b07ca2a4f4e2f1a333d0a251',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(2)
	var __weex_style__ = __webpack_require__(3)
	var __weex_script__ = __webpack_require__(4)

	__weex_define__('@weex-component/greeting', [], function(__weex_require__, __weex_exports__, __weex_module__) {

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
	      "type": "image",
	      "classList": [
	        "bgImg"
	      ],
	      "attr": {
	        "src": function () {return this.bgImgSrc}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "startPlayText"
	      ],
	      "events": {
	        "click": "toSelectNum"
	      },
	      "attr": {
	        "src": function () {return this.startBtn}
	      },
	      "style": {
	        "opacity": function () {return this.opacity}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "helpBtn"
	      ],
	      "attr": {
	        "src": "./imgs/helpBtn.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "settingBtn"
	      ],
	      "attr": {
	        "src": "./imgs/settingBtn.png"
	      }
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "bgImg": {
	    "width": 750,
	    "height": 1175
	  },
	  "startPlayText": {
	    "position": "absolute",
	    "bottom": 100,
	    "left": 190,
	    "width": 350,
	    "height": 70
	  },
	  "helpBtn": {
	    "position": "absolute",
	    "left": 15,
	    "bottom": 15,
	    "width": 50,
	    "height": 50
	  },
	  "settingBtn": {
	    "position": "absolute",
	    "right": 15,
	    "bottom": 15,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	var timer1;
	var number = 0;

	module.exports = {
	    data: function () {return {
	        bgImgSrc: "./imgs/background/newGreeting.png",
	        startBtn: "./imgs/startGameBtn.png",
	        arr: [0.8, 0.6, 0.4, 0.2, 0.4, 0.6, 0.8, 1],
	        opacity: 1,
	        number: 0
	    }},
	    created: function created() {
	        timer1 = setInterval(this.show.bind(this), 200);
	    },
	    methods: {
	        toSelectNum: function toSelectNum() {
	            clearInterval(timer1);

	            this._parent.$emit('toSelectNum');
	        },
	        show: function show() {
	            this.opacity = this.arr[this.number % 6];
	            this.number++;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(6)
	var __weex_style__ = __webpack_require__(7)
	var __weex_script__ = __webpack_require__(8)

	__weex_define__('@weex-component/selectnum', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "bgimg"
	      ],
	      "style": {
	        "width": 750,
	        "height": 1175
	      },
	      "attr": {
	        "src": function () {return this.imgurl}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "select_title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": "请选择游戏人数："
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "titleNum"
	          ],
	          "attr": {
	            "value": function () {return this.totalNum}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": "人"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "selectDiv"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "backgroundColor": "rgb(234,128,16)",
	            "width": 40,
	            "height": 32,
	            "borderTopLeftRadius": 15,
	            "borderBottomLeftRadius": 15
	          },
	          "events": {
	            "click": function ($event) {this.init($event)}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "selectOption"
	          ],
	          "repeat": {
	            "expression": function () {return this.selectArr},
	            "value": "selectOption"
	          },
	          "attr": {
	            "currIndex": function () {return this.$index}
	          },
	          "style": {
	            "backgroundColor": function () {return this.selectOption.bgColor},
	            "borderBottomLeftRadius": function () {return this.selectOption.leftBot},
	            "borderBottomRightRadius": function () {return this.selectOption.rightBot},
	            "borderTopLeftRadius": function () {return this.selectOption.leftTop},
	            "borderTopRightRadius": function () {return this.selectOption.rightTop}
	          },
	          "events": {
	            "click": function ($event) {this.selectNum($event)}
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "classList": [
	        "flagImg"
	      ],
	      "attr": {
	        "src": function () {return this.flagImgSrc}
	      },
	      "style": {
	        "left": function () {return this.flagLeft}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "startPlayText"
	      ],
	      "events": {
	        "click": "toMain"
	      },
	      "attr": {
	        "src": function () {return this.startBtn}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "returnBtn"
	      ],
	      "attr": {
	        "src": "./imgs/returnBtn.png"
	      },
	      "events": {
	        "click": "returnGreeting"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "settingBtn"
	      ],
	      "attr": {
	        "src": "./imgs/settingBtn.png"
	      }
	    }
	  ]
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "select_title": {
	    "flexDirection": "row",
	    "position": "absolute",
	    "top": 180,
	    "width": 750,
	    "justifyContent": "center"
	  },
	  "title": {
	    "fontSize": 50,
	    "fontWeight": "bold",
	    "fontFamily": "'华文楷体'"
	  },
	  "titleNum": {
	    "fontSize": 50,
	    "fontWeight": "bold",
	    "color": "rgb(234,128,16)",
	    "marginRight": 10,
	    "fontFamily": "'华文楷体'"
	  },
	  "selectDiv": {
	    "position": "absolute",
	    "top": 300,
	    "left": 140,
	    "width": 440,
	    "height": 32,
	    "backgroundColor": "#FFFFFF",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "borderRadius": 20
	  },
	  "selectOption": {
	    "width": 40,
	    "height": 32,
	    "backgroundColor": "rgb(234,128,16)"
	  },
	  "flagImg": {
	    "position": "absolute",
	    "width": 22,
	    "height": 64,
	    "top": 283
	  },
	  "selectFlag": {
	    "position": "absolute",
	    "height": 60,
	    "width": 10,
	    "backgroundColor": "rgb(234,128,16)",
	    "top": 290
	  },
	  "startPlayText": {
	    "position": "absolute",
	    "width": 280,
	    "height": 100,
	    "bottom": 70,
	    "left": 220
	  },
	  "button": {
	    "position": "absolute",
	    "bottom": 220,
	    "fontSize": 60,
	    "width": 750,
	    "textAlign": "center"
	  },
	  "returnBtn": {
	    "position": "absolute",
	    "left": 15,
	    "bottom": 15,
	    "width": 50,
	    "height": 50
	  },
	  "settingBtn": {
	    "position": "absolute",
	    "right": 15,
	    "bottom": 15,
	    "width": 50,
	    "height": 50
	  },
	  "startPlayDiv": {
	    "position": "absolute",
	    "width": 350,
	    "height": 100,
	    "bottom": 70,
	    "left": 190,
	    "borderColor": "#FFFFFF",
	    "borderRadius": 50,
	    "borderWidth": 1
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	    data: function () {return {
	        imgurl: './imgs/background/selectNumBg.jpg',
	        startBtn: "./imgs/selectNumStart2.png",
	        flagImgSrc: "./imgs/flag.png",
	        totalNum: 4,
	        selectArr: [{ bgColor: "white", leftTop: 0, leftBot: 0, rightTop: 0, rightBot: 0, num: 5 }, { bgColor: "white", leftTop: 0, leftBot: 0, rightTop: 0, rightBot: 0, num: 6 }, { bgColor: "white", leftTop: 0, leftBot: 0, rightTop: 0, rightBot: 0, num: 7 }, { bgColor: "white", leftTop: 0, leftBot: 0, rightTop: 0, rightBot: 0, num: 8 }, { bgColor: "white", leftTop: 0, leftBot: 0, rightTop: 0, rightBot: 0, num: 9 }, { bgColor: "white", leftTop: 0, leftBot: 0, rightTop: 0, rightBot: 0, num: 10 }, { bgColor: "white", leftTop: 0, leftBot: 0, rightTop: 0, rightBot: 0, num: 11 }, { bgColor: "white", leftTop: 0, leftBot: 0, rightTop: 0, rightBot: 0, num: 12 }, { bgColor: "white", leftTop: 0, leftBot: 0, rightTop: 0, rightBot: 0, num: 13 }, { bgColor: "white", leftTop: 0, leftBot: 0, rightTop: 15, rightBot: 15, num: 14 }],
	        flagLeft: 168
	    }},
	    methods: {
	        selectNum: function selectNum(event) {
	            var index = event.target.attr.currIndex;

	            for (var i = 0; i <= index; i++) {
	                this.selectArr[i].bgColor = "rgb(234, 128, 16)";
	            }
	            for (var i = index + 1; i < 10; i++) {
	                this.selectArr[i].bgColor = "white";
	            }
	            this.totalNum = this.selectArr[index].num;
	            this.flagLeft = 168 + index * 40 + 41;
	        },
	        init: function init() {
	            this.totalNum = 4;
	            this.flagLeft = 168;
	            for (var i = 0; i < 10; i++) {
	                this.selectArr[i].bgColor = "white";
	            }
	        },
	        toMain: function toMain() {
	            this._parent.$emit("toMain", { playerNum: this.totalNum });
	        },
	        returnGreeting: function returnGreeting() {
	            this._parent.$emit("returnGreeting");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10)
	__webpack_require__(14)
	__webpack_require__(100)
	__webpack_require__(104)
	__webpack_require__(108)
	__webpack_require__(112)
	__webpack_require__(116)
	__webpack_require__(120)
	__webpack_require__(124)
	var __weex_template__ = __webpack_require__(128)
	var __weex_style__ = __webpack_require__(129)
	var __weex_script__ = __webpack_require__(130)

	__weex_define__('@weex-component/main', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(11)
	var __weex_style__ = __webpack_require__(12)
	var __weex_script__ = __webpack_require__(13)

	__weex_define__('@weex-component/bag', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "events": {
	    "click": "showBag"
	  },
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.bagBagImg}
	      },
	      "style": {
	        "width": 160,
	        "height": 130
	      }
	    },
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
	              "id": function () {return this.playerId},
	              "classList": [
	                "textClass"
	              ],
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
	                  "classList": [
	                    "textClass"
	                  ],
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
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 22,
	                    "textAlign": "center",
	                    "color": "#FFFFFF"
	                  },
	                  "repeat": {
	                    "expression": function () {return this.bagArr},
	                    "value": "cardInfo"
	                  },
	                  "attr": {
	                    "value": function () {return this.cardInfo.name}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  "bagDiv": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "flexDirection": "row",
	    "width": 160,
	    "height": 130,
	    "padding": 10,
	    "borderRadius": 10
	  },
	  "leftDiv": {
	    "width": 30,
	    "height": 120,
	    "borderRightWidth": 1,
	    "borderRightStyle": "solid",
	    "borderRightColor": "#FFFFFF",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "rightDiv": {
	    "flexDirection": "column",
	    "width": 118,
	    "height": 120
	  },
	  "drinkNumDiv": {
	    "width": 120,
	    "height": 35,
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#FFFFFF"
	  },
	  "playerBagDiv": {
	    "width": 120,
	    "height": 85
	  },
	  "textClass": {
	    "color": "#FFFFFF",
	    "fontWeight": "bold"
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	    data: function () {return {
	        bagBagImg: "./imgs/background/bagBg4.png",
	        playerId: 1,
	        drinkNum: 0,
	        cardNum: 0,
	        bagArr: []
	    }},
	    created: function created() {
	        this.bagArr = this.bagArr.slice(0, 3);
	    },
	    methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(15)
	var __weex_style__ = __webpack_require__(16)
	var __weex_script__ = __webpack_require__(17)

	__weex_define__('@weex-component/bagmodal', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "id": "dialog",
	  "classList": [
	    "dialog"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "dialog-backdrop"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dialog-content"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "dialog-body"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return '玩家' + (this.playerId) + '的包裹'}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "subTitle"
	              ],
	              "attr": {
	                "value": function () {return '已喝' + (this.drinkNum) + '杯'}
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "cardContainer"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "repeat": {
	                    "expression": function () {return this.cardRow1},
	                    "value": "card"
	                  },
	                  "classList": [
	                    "smallCard"
	                  ],
	                  "attr": {
	                    "cardId": function () {return this.card.id},
	                    "num": function () {return this.card.num}
	                  },
	                  "events": {
	                    "click": "operateCard"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "cardImg"
	                      ],
	                      "attr": {
	                        "src": function () {return this.card.imgUrl}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "cardContainer"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "repeat": {
	                    "expression": function () {return this.cardRow2},
	                    "value": "card"
	                  },
	                  "classList": [
	                    "smallCard"
	                  ],
	                  "attr": {
	                    "cardId": function () {return this.card.id},
	                    "num": function () {return this.card.num}
	                  },
	                  "events": {
	                    "click": "operateCard"
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "cardImg"
	                      ],
	                      "attr": {
	                        "src": function () {return this.card.imgUrl}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "alignItems": "center"
	              },
	              "children": [
	                {
	                  "type": "wxc-button",
	                  "attr": {
	                    "type": "primary",
	                    "size": "large",
	                    "value": "返回"
	                  },
	                  "events": {
	                    "click": "closeBagModal"
	                  }
	                }
	              ]
	            }
	          ],
	          "attr": {
	            "value": ">"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	  "dialog-backdrop": {
	    "opacity": 0.5,
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "backgroundColor": "#000000"
	  },
	  "dialog": {
	    "position": "fixed",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "dialog-content": {
	    "width": 550,
	    "height": 600,
	    "backgroundColor": "#ffffff"
	  },
	  "dialog-body": {
	    "padding": 20,
	    "justifyContent": "center"
	  },
	  "title": {
	    "textAlign": "center",
	    "fontSize": 60
	  },
	  "subTitle": {
	    "textAlign": "center",
	    "fontSize": 30
	  },
	  "cardContainer": {
	    "height": 180,
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  "cardImg": {
	    "width": 90,
	    "height": 135
	  },
	  "smallCard": {
	    "margin": 20
	  },
	  "cardText": {
	    "color": "#eeeeee",
	    "fontSize": 30
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(18);
	module.exports = {
	  data: function () {return {
	    cardRow1: [],
	    cardRow2: [],
	    playerId: 0,
	    drinkNum: 0,

	    bag: []
	  }},
	  created: function created() {

	    for (var i in this.bag) {

	      if (i < 3) {
	        this.cardRow1.push(this.bag[i]);
	      } else {
	        this.cardRow2.push(this.bag[i]);
	      }
	    }
	  },
	  methods: {
	    closeBagModal: function closeBagModal() {
	      this._parent.$emit("closeBagModal");
	    },
	    operateCard: function operateCard(e) {
	      var cardNum = e.target.attr.num;
	      var cardId = e.target.attr.cardId;
	      this._parent.$emit("operateCard", {
	        cardNum: cardNum,
	        cardId: cardId,
	        playerId: this.playerId
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(19);
	__webpack_require__(23);
	__webpack_require__(27);
	__webpack_require__(31);
	__webpack_require__(35);
	__webpack_require__(39);
	__webpack_require__(80);
	__webpack_require__(84);
	__webpack_require__(88);
	__webpack_require__(92);
	__webpack_require__(93);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(20)
	var __weex_style__ = __webpack_require__(21)
	var __weex_script__ = __webpack_require__(22)

	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    size: 'large',
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(24)
	var __weex_style__ = __webpack_require__(25)
	var __weex_script__ = __webpack_require__(26)

	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    level: 1,
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(28)
	var __weex_style__ = __webpack_require__(29)
	var __weex_script__ = __webpack_require__(30)

	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    bgColor: '#ffffff'
	  }},
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(32)
	var __weex_style__ = __webpack_require__(33)
	var __weex_script__ = __webpack_require__(34)

	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    title: '',
	    paddingBody: 20,
	    paddingHead: 20,
	    dataClass: '',
	    border: 0
	  }},
	  ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(36)
	var __weex_style__ = __webpack_require__(37)
	var __weex_script__ = __webpack_require__(38)

	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'success',
	    value: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(40)
	var __weex_style__ = __webpack_require__(41)
	var __weex_script__ = __webpack_require__(42)

	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _assign = __webpack_require__(43);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.remain <= 0) {
	            return;
	        }

	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function nextTick() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', (0, _assign2.default)({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', (0, _assign2.default)({}, this.time));
	                }
	                this._app.updateActions();
	            }
	        },
	        format: function format(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function calc() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);

	            return remain > 0;
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(44), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45);
	module.exports = __webpack_require__(48).Object.assign;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(46);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(61)});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(47)
	  , core      = __webpack_require__(48)
	  , ctx       = __webpack_require__(49)
	  , hide      = __webpack_require__(51)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 47 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 48 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(50);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(52)
	  , createDesc = __webpack_require__(60);
	module.exports = __webpack_require__(56) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(53)
	  , IE8_DOM_DEFINE = __webpack_require__(55)
	  , toPrimitive    = __webpack_require__(59)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(56) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(54);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(56) && !__webpack_require__(57)(function(){
	  return Object.defineProperty(__webpack_require__(58)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(57)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(54)
	  , document = __webpack_require__(47).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(54);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(62)
	  , gOPS     = __webpack_require__(77)
	  , pIE      = __webpack_require__(78)
	  , toObject = __webpack_require__(79)
	  , IObject  = __webpack_require__(66)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(57)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(63)
	  , enumBugKeys = __webpack_require__(76);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(64)
	  , toIObject    = __webpack_require__(65)
	  , arrayIndexOf = __webpack_require__(69)(false)
	  , IE_PROTO     = __webpack_require__(73)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(66)
	  , defined = __webpack_require__(68);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(67);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(65)
	  , toLength  = __webpack_require__(70)
	  , toIndex   = __webpack_require__(72);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(71)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(71)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(74)('keys')
	  , uid    = __webpack_require__(75);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(47)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 77 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 78 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(68);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(81)
	var __weex_style__ = __webpack_require__(82)
	var __weex_script__ = __webpack_require__(83)

	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	            this.nextTick();
	        }
	    },
	    methods: {
	        nextTick: function nextTick() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function () {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function animation(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	                styles: {
	                    transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	                },
	                timingFunction: 'ease',
	                duration: self.duration
	            }, function () {
	                self.index = (self.index + 1) % self.count;
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(85)
	var __weex_style__ = __webpack_require__(86)
	var __weex_script__ = __webpack_require__(87)

	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',

	    backgroundColor: 'black',

	    height: 88,

	    title: "",

	    titleColor: 'black',

	    rightItemSrc: '',

	    rightItemTitle: '',

	    rightItemColor: 'black',

	    leftItemSrc: '',

	    leftItemTitle: '',

	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84)
	var __weex_template__ = __webpack_require__(89)
	var __weex_style__ = __webpack_require__(90)
	var __weex_script__ = __webpack_require__(91)

	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	    backgroundColor: 'black',
	    height: 88,
	    title: "",
	    titleColor: 'black',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'black',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'black'
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(93)
	var __weex_template__ = __webpack_require__(97)
	var __weex_style__ = __webpack_require__(98)
	var __weex_script__ = __webpack_require__(99)

	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(94)
	var __weex_style__ = __webpack_require__(95)
	var __weex_script__ = __webpack_require__(96)

	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  }},
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  }},
	  created: function created() {
	    this.selected(this.selectedIndex);

	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);

	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(101)
	var __weex_style__ = __webpack_require__(102)
	var __weex_script__ = __webpack_require__(103)

	__weex_define__('@weex-component/cardmodaluse', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "id": "cardDialog",
	  "classList": [
	    "dialog"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "dialog-backdrop"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dialog-content"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "dialog-body"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "cardTipDiv"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.cardImgUrl}
	                  },
	                  "classList": [
	                    "cardClass"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "cardTipText"
	                  ],
	                  "attr": {
	                    "value": function () {return this.cardTips}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "alignItems": "center"
	              },
	              "children": [
	                {
	                  "type": "wxc-button",
	                  "attr": {
	                    "type": "primary",
	                    "size": "middle",
	                    "value": function () {return this.btnText}
	                  },
	                  "events": {
	                    "click": "useCard"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {
	  "dialog-backdrop": {
	    "opacity": 0.5,
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "backgroundColor": "#000000"
	  },
	  "dialog": {
	    "position": "fixed",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "dialog-content": {
	    "width": 550,
	    "height": 450,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10
	  },
	  "dialog-header": {
	    "padding": 20,
	    "borderBottom": "1px solid #CCCCCC"
	  },
	  "dialog-title": {
	    "fontSize": 40,
	    "textAlign": "center",
	    "color": "#000000"
	  },
	  "dialog-body": {
	    "position": "absolute",
	    "top": 0,
	    "height": 450,
	    "width": 550
	  },
	  "cardTipDiv": {
	    "paddingTop": 50,
	    "paddingLeft": 40,
	    "paddingRight": 20,
	    "paddingBottom": 30,
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "cardTipText": {
	    "width": 280,
	    "backgroundColor": "#FFFFFF",
	    "borderColor": "#FFFFFF",
	    "color": "#000000",
	    "alignItems": "center"
	  },
	  "cardClass": {
	    "width": 200,
	    "height": 250,
	    "borderWidth": 1,
	    "borderColor": "#9BADA7"
	  },
	  "cardUseDiv": {
	    "width": 200,
	    "height": 80,
	    "justifyContent": "center",
	    "borderColor": "#E2C3A0",
	    "borderWidth": 1,
	    "borderRadius": 10,
	    "marginTop": 45,
	    "marginLeft": 175
	  },
	  "cardUseText": {
	    "color": "#C52E38",
	    "fontSize": 40,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  }
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(18);
	module.exports = {
	    data: function () {return {
	        cardImgUrl: null,
	        cardTips: null,
	        btnText: "立即使用"
	    }},
	    methods: {
	        useCard: function useCard() {
	            this._parent.$emit("useCard");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(105)
	var __weex_style__ = __webpack_require__(106)
	var __weex_script__ = __webpack_require__(107)

	__weex_define__('@weex-component/cardmodalsave', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "id": "cardDialog",
	  "classList": [
	    "dialog"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "dialog-backdrop"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dialog-content"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "dialog-body"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "cardTipDiv"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.cardImgUrl}
	                  },
	                  "classList": [
	                    "cardClass"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "cardTipText"
	                  ],
	                  "attr": {
	                    "value": function () {return this.cardTips}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "alignItems": "center"
	              },
	              "children": [
	                {
	                  "type": "wxc-button",
	                  "attr": {
	                    "type": "primary",
	                    "size": "middle",
	                    "value": "存入包裹"
	                  },
	                  "events": {
	                    "click": "saveToBag"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = {
	  "dialog-backdrop": {
	    "opacity": 0.5,
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "backgroundColor": "#000000"
	  },
	  "dialog": {
	    "position": "fixed",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "dialog-content": {
	    "width": 550,
	    "height": 450,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10
	  },
	  "dialog-header": {
	    "padding": 20,
	    "borderBottom": "1px solid #CCCCCC"
	  },
	  "dialog-title": {
	    "fontSize": 40,
	    "textAlign": "center",
	    "color": "#000000"
	  },
	  "dialog-body": {
	    "position": "absolute",
	    "top": 0,
	    "height": 450,
	    "width": 550
	  },
	  "cardTipDiv": {
	    "paddingTop": 50,
	    "paddingLeft": 40,
	    "paddingRight": 20,
	    "paddingBottom": 30,
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "cardTipText": {
	    "width": 280,
	    "backgroundColor": "#FFFFFF",
	    "borderColor": "#FFFFFF",
	    "color": "#000000",
	    "alignItems": "center"
	  },
	  "cardClass": {
	    "width": 200,
	    "height": 250,
	    "borderWidth": 1,
	    "borderColor": "#9BADA7"
	  },
	  "cardStoreDiv": {
	    "width": 200,
	    "height": 80,
	    "justifyContent": "center",
	    "borderColor": "#E2C3A0",
	    "borderWidth": 1,
	    "borderRadius": 10,
	    "marginTop": 45,
	    "marginLeft": 175
	  },
	  "cardStoreText": {
	    "color": "#C52E38",
	    "fontSize": 40,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  }
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(18);
	module.exports = {
	    data: function () {return {
	        cardImgUrl: null,
	        cardTips: null
	    }},
	    methods: {
	        saveToBag: function saveToBag() {
	            this._parent.$emit("saveToBag");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(109)
	var __weex_style__ = __webpack_require__(110)
	var __weex_script__ = __webpack_require__(111)

	__weex_define__('@weex-component/cardmodaldelete', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "id": "cardDialog",
	  "classList": [
	    "dialog"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "dialog-backdrop"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dialog-content"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "dialog-body"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "cardTipDiv"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.cardImgUrl}
	                  },
	                  "classList": [
	                    "cardClass"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "cardTipText"
	                  ],
	                  "attr": {
	                    "value": function () {return this.cardTips}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "style": {
	                "justifyContent": "center",
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "wxc-button",
	                  "attr": {
	                    "type": "primary",
	                    "size": "middle",
	                    "value": function () {return this.btnDelText}
	                  },
	                  "style": {
	                    "marginRight": 10
	                  },
	                  "events": {
	                    "click": "deleteCard"
	                  }
	                },
	                {
	                  "type": "wxc-button",
	                  "attr": {
	                    "type": "primary",
	                    "size": "middle",
	                    "value": function () {return this.btnReturnText}
	                  },
	                  "events": {
	                    "click": "returnToBagModal"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = {
	  "dialog-backdrop": {
	    "opacity": 0.5,
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "backgroundColor": "#000000"
	  },
	  "dialog": {
	    "position": "fixed",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "dialog-content": {
	    "width": 550,
	    "height": 450,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10
	  },
	  "dialog-header": {
	    "padding": 20,
	    "borderBottom": "1px solid #CCCCCC"
	  },
	  "dialog-title": {
	    "fontSize": 40,
	    "textAlign": "center",
	    "color": "#000000"
	  },
	  "dialog-body": {
	    "position": "absolute",
	    "top": 0,
	    "height": 450,
	    "width": 550
	  },
	  "cardTipDiv": {
	    "paddingTop": 50,
	    "paddingLeft": 40,
	    "paddingRight": 20,
	    "paddingBottom": 30,
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "cardTipText": {
	    "width": 280,
	    "backgroundColor": "#FFFFFF",
	    "borderColor": "#FFFFFF",
	    "color": "#000000",
	    "alignItems": "center"
	  },
	  "cardClass": {
	    "width": 200,
	    "height": 250,
	    "borderWidth": 1,
	    "borderColor": "#9BADA7"
	  },
	  "cardUseDiv": {
	    "width": 200,
	    "height": 80,
	    "justifyContent": "center",
	    "borderColor": "#E2C3A0",
	    "borderWidth": 1,
	    "borderRadius": 10,
	    "marginTop": 45,
	    "marginLeft": 175
	  },
	  "cardUseText": {
	    "color": "#C52E38",
	    "fontSize": 40,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  }
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	__webpack_require__(18);
	module.exports = {
	    data: function () {return {
	        cardImgUrl: null,
	        cardTips: null,
	        btnDelText: "使用后移除",
	        btnReturnText: "返回"

	    }},
	    methods: {
	        deleteCard: function deleteCard() {
	            this._parent.$emit("deleteCard");
	        },
	        returnToBagModal: function returnToBagModal() {
	            this._parent.$emit("returnToBagModal");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(113)
	var __weex_style__ = __webpack_require__(114)
	var __weex_script__ = __webpack_require__(115)

	__weex_define__('@weex-component/duelmodal', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "id": "dialog",
	      "classList": [
	        "dialog"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "dialog-backdrop"
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "dialog-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "dialog-header"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dialog-title"
	                  ],
	                  "attr": {
	                    "value": function () {return this.dialogTitle}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dialog-body"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "random_player"
	                  ],
	                  "attr": {
	                    "value": function () {return '玩家' + (this.randomPlayerId)}
	                  }
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "marginTop": 20
	                  },
	                  "children": [
	                    {
	                      "type": "wxc-button",
	                      "attr": {
	                        "type": "primary",
	                        "size": "middle",
	                        "value": "开始决斗"
	                      },
	                      "events": {
	                        "click": "startJuedou"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = {
	  "dialog-backdrop": {
	    "opacity": 0.7,
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "backgroundColor": "#000000"
	  },
	  "dialog": {
	    "position": "fixed",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "dialog-content": {
	    "width": 550,
	    "backgroundColor": "#FFFFFF",
	    "border": "2px solid white",
	    "borderRadius": 10
	  },
	  "dialog-header": {
	    "padding": 20,
	    "borderBottom": "1px solid #CCCCCC"
	  },
	  "dialog-title": {
	    "fontSize": 40,
	    "textAlign": "center",
	    "color": "#000000"
	  },
	  "random_player": {
	    "fontSize": 30,
	    "textAlign": "center",
	    "color": "#000000"
	  },
	  "dialog-body": {
	    "padding": 20
	  }
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(18);
	module.exports = {
	    data: function () {return {
	        currentPlayer: null,
	        playerNum: null

	    }},
	    computed: {
	        randomPlayerId: function randomPlayerId() {
	            var x = parseInt(Math.random() * this.playerNum);
	            while (x == this.currentPlayer || x == 0) {
	                x = parseInt(Math.random() * this.playerNum);
	            }
	            return x;
	        },
	        dialogTitle: function dialogTitle() {
	            return '玩家' + this.currentPlayer + '的决斗对象是:';
	        }
	    },
	    methods: {
	        startJuedou: function startJuedou() {
	            this._parent.$emit("startJuedou", { randomPlayerId: this.randomPlayerId });
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(117)
	var __weex_style__ = __webpack_require__(118)
	var __weex_script__ = __webpack_require__(119)

	__weex_define__('@weex-component/randomfailmodal', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "id": "dialog1",
	      "classList": [
	        "dialog"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "dialog-backdrop"
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "dialog-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "dialog-header"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dialog-title"
	                  ],
	                  "attr": {
	                    "value": "落败的玩家是："
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#FFA500",
	                    "fontWeight": "bold",
	                    "fontSize": 40
	                  },
	                  "attr": {
	                    "value": function () {return this.select_playerName}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dialog-body"
	              ],
	              "children": [
	                {
	                  "type": "list",
	                  "classList": [
	                    "select_list"
	                  ],
	                  "children": [
	                    {
	                      "type": "cell",
	                      "append": "tree",
	                      "repeat": {
	                        "expression": function () {return this.arr},
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "listdiv"
	                          ],
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "list_item"
	                              ],
	                              "events": {
	                                "click": "doSelect"
	                              },
	                              "attr": {
	                                "value": function () {return '玩家' + (this.arr[this.$index].id)}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "marginTop": 30
	                  },
	                  "children": [
	                    {
	                      "type": "wxc-button",
	                      "attr": {
	                        "type": "primary",
	                        "size": "middle",
	                        "value": "确定"
	                      },
	                      "events": {
	                        "click": "startPunish"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = {
	  "dialog-backdrop": {
	    "opacity": 0.7,
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "backgroundColor": "#000000"
	  },
	  "dialog": {
	    "position": "fixed",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "dialog-content": {
	    "width": 550,
	    "backgroundColor": "#FFFFFF",
	    "border": "2px solid black",
	    "borderRadius": 10
	  },
	  "dialog-header": {
	    "padding": 20,
	    "flexDirection": "row"
	  },
	  "dialog-title": {
	    "fontSize": 35,
	    "color": "#000000"
	  },
	  "dialog-body": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "padding": 20,
	    "height": 400
	  },
	  "select_list": {
	    "height": 200
	  },
	  "listdiv": {
	    "borderBottomWidth": 1,
	    "alignItems": "center",
	    "width": 200,
	    "borderColor": "#808080"
	  },
	  "list_item": {
	    "fontSize": 32
	  }
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(18);
	var dom = __weex_require__('@weex-module/dom');
	module.exports = {
	    data: function () {return {
	        arr: [],
	        currentPlayer: null,
	        select_playerName: "",
	        select_player: "",
	        playerNum: null
	    }},
	    created: function created() {
	        for (var i = 1; i <= this.playerNum; i++) {
	            var obj = {
	                id: i
	            };
	            this.arr.push(obj);
	        }
	    },
	    methods: {
	        doSelect: function doSelect(e) {
	            var value = e.target.attr.value;
	            if (value != '') {
	                this.select_playerName = value;
	                this.select_player = value.split("家")[1];
	            }
	        },
	        startPunish: function startPunish() {
	            if (this.select_player) {
	                console.log("startPunish玩游戏输的玩家：玩家" + this.select_player);
	                this._parent.$emit("startPunish", { selectedPlayer: this.select_player, type: 'playGame' });
	            }
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(121)
	var __weex_style__ = __webpack_require__(122)
	var __weex_script__ = __webpack_require__(123)

	__weex_define__('@weex-component/failplayerradiomodal', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "id": "dialog1",
	      "classList": [
	        "dialog"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "dialog-backdrop"
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "dialog-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "dialog-header"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dialog-title"
	                  ],
	                  "attr": {
	                    "value": "落败的玩家是："
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#FFA500",
	                    "fontWeight": "bold",
	                    "fontSize": 40
	                  },
	                  "attr": {
	                    "value": function () {return this.select_playerName}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dialog-body"
	              ],
	              "children": [
	                {
	                  "type": "list",
	                  "classList": [
	                    "select_list"
	                  ],
	                  "children": [
	                    {
	                      "type": "cell",
	                      "append": "tree",
	                      "repeat": {
	                        "expression": function () {return this.arr},
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "listdiv"
	                          ],
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "list_item"
	                              ],
	                              "events": {
	                                "click": "doSelect"
	                              },
	                              "attr": {
	                                "value": function () {return '玩家' + (this.arr[this.$index].id)}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "marginTop": 30
	                  },
	                  "children": [
	                    {
	                      "type": "wxc-button",
	                      "attr": {
	                        "type": "primary",
	                        "size": "middle",
	                        "value": "确定"
	                      },
	                      "events": {
	                        "click": "startPunish"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = {
	  "dialog": {
	    "position": "fixed",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "dialog-content": {
	    "width": 550,
	    "backgroundColor": "#FFFFFF",
	    "borderRadius": 10
	  },
	  "dialog-header": {
	    "padding": 20,
	    "flexDirection": "row"
	  },
	  "dialog-title": {
	    "fontSize": 35,
	    "color": "#000000"
	  },
	  "dialog-body": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "padding": 20,
	    "height": 300
	  },
	  "select_list": {
	    "height": 100
	  },
	  "listdiv": {
	    "borderBottomWidth": 1,
	    "alignItems": "center",
	    "borderColor": "#808080",
	    "width": 200
	  },
	  "list_item": {
	    "fontSize": 32
	  }
	}

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	var dom = __weex_require__('@weex-module/dom');
	module.exports = {
	    data: function () {return {
	        currentPlayer: null,
	        selectPlayer: null,
	        select_playerName: "",
	        failedPlayer: "",
	        arr: []
	    }},
	    created: function created() {
	        this.arr.push({ id: this.currentPlayer });
	        this.arr.push({ id: this.selectPlayer });
	    },
	    methods: {
	        doSelect: function doSelect(e) {
	            var value = e.target.attr.value;
	            if (value != '') {
	                this.select_playerName = value;
	                this.failedPlayer = value.split("家")[1];
	            }
	        },
	        startPunish: function startPunish() {
	            if (this.failedPlayer) {

	                this._parent.$emit("startPunish", { selectedPlayer: this.failedPlayer, type: 'duel' });
	            }
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(125)
	var __weex_style__ = __webpack_require__(126)
	var __weex_script__ = __webpack_require__(127)

	__weex_define__('@weex-component/bagrandomfailplayermodal', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "id": "dialog1",
	      "classList": [
	        "dialog"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "dialog-backdrop"
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "dialog-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "dialog-header"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "dialog-title"
	                  ],
	                  "attr": {
	                    "value": "落败的玩家是："
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#FFA500",
	                    "fontWeight": "bold",
	                    "fontSize": 40
	                  },
	                  "attr": {
	                    "value": function () {return this.select_playerName}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "dialog-body"
	              ],
	              "children": [
	                {
	                  "type": "list",
	                  "classList": [
	                    "select_list"
	                  ],
	                  "children": [
	                    {
	                      "type": "cell",
	                      "append": "tree",
	                      "repeat": {
	                        "expression": function () {return this.arr},
	                        "value": "item"
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "listdiv"
	                          ],
	                          "children": [
	                            {
	                              "type": "text",
	                              "classList": [
	                                "list_item"
	                              ],
	                              "events": {
	                                "click": "doSelect"
	                              },
	                              "attr": {
	                                "value": function () {return '玩家' + (this.arr[this.$index].id)}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "alignItems": "center",
	                    "marginTop": 30
	                  },
	                  "children": [
	                    {
	                      "type": "wxc-button",
	                      "attr": {
	                        "type": "primary",
	                        "size": "middle",
	                        "value": "确定"
	                      },
	                      "events": {
	                        "click": "startPunish"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = {
	  "dialog-backdrop": {
	    "opacity": 0.7,
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "backgroundColor": "#000000"
	  },
	  "dialog": {
	    "position": "fixed",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "dialog-content": {
	    "width": 550,
	    "backgroundColor": "#FFFFFF",
	    "border": "2px solid black",
	    "borderRadius": 10
	  },
	  "dialog-header": {
	    "padding": 20,
	    "flexDirection": "row"
	  },
	  "dialog-title": {
	    "fontSize": 35,
	    "color": "#000000"
	  },
	  "dialog-body": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "padding": 20,
	    "height": 400
	  },
	  "select_list": {
	    "height": 200
	  },
	  "listdiv": {
	    "borderBottomWidth": 1,
	    "alignItems": "center",
	    "width": 200,
	    "borderColor": "#808080"
	  },
	  "list_item": {
	    "fontSize": 32
	  }
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(18);
	var dom = __weex_require__('@weex-module/dom');
	module.exports = {
	    data: function () {return {
	        arr: [],
	        currentPlayer: null,
	        select_playerName: "",
	        select_playerId: "",
	        playerNum: null
	    }},
	    created: function created() {
	        for (var i = 1; i <= this.playerNum; i++) {
	            var obj = {
	                id: i
	            };
	            this.arr.push(obj);
	        }
	    },
	    methods: {
	        doSelect: function doSelect(e) {
	            var value = e.target.attr.value;
	            if (value != '') {
	                this.select_playerName = value;
	                this.select_player = value.split("家")[1];
	            }
	        },
	        startPunish: function startPunish() {
	            if (this.select_player) {

	                this._parent.$emit("bagStartPunish", { selectedPlayer: this.select_player });
	            }
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
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
	                "playerId": function () {return this.player.playerId},
	                "drinkNum": function () {return this.player.drinkArray.length},
	                "cardNum": function () {return this.player.bag.length},
	                "bagArr": function () {return this.player.bag}
	              },
	              "events": {
	                "click": "showBag"
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
	                "expression": function () {return this.rightPlayer},
	                "value": "player"
	              },
	              "attr": {
	                "playerId": function () {return this.player.playerId},
	                "drinkNum": function () {return this.player.drinkArray.length},
	                "cardNum": function () {return this.player.bag.length},
	                "bagArr": function () {return this.player.bag}
	              },
	              "events": {
	                "click": "showBag"
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
	            "value": function () {return '玩家' + (this.currPlayerId) + '摸牌'}
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "returnBtn"
	          ],
	          "attr": {
	            "src": "./imgs/returnBtn.png"
	          },
	          "events": {
	            "click": "returnSelectNum"
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "settingBtn"
	          ],
	          "attr": {
	            "src": "./imgs/settingBtn.png"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "paiduiDiv"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "paidui"
	          ],
	          "attr": {
	            "src": function () {return this.paiduiImg}
	          },
	          "events": {
	            "click": "showCard"
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "classList": [
	        "endPlayText"
	      ],
	      "events": {
	        "click": "toScore"
	      },
	      "attr": {
	        "src": function () {return this.endBtn}
	      }
	    },
	    {
	      "type": "bagmodal",
	      "shown": function () {return this.isShow.bagModal},
	      "attr": {
	        "playerId": function () {return this.showBag.playerId},
	        "drinkNum": function () {return this.showBag.drinkNum},
	        "bag": function () {return this.showBag.bag}
	      }
	    },
	    {
	      "type": "cardmodaluse",
	      "shown": function () {return this.isShow.cardModalUse},
	      "attr": {
	        "cardImgUrl": function () {return this.showCard.currCardImgUrl},
	        "cardTips": function () {return this.showCard.currCardTips}
	      }
	    },
	    {
	      "type": "cardmodalsave",
	      "shown": function () {return this.isShow.cardModalSave},
	      "attr": {
	        "cardImgUrl": function () {return this.showCard.currCardImgUrl},
	        "cardTips": function () {return this.showCard.currCardTips}
	      }
	    },
	    {
	      "type": "cardmodaldelete",
	      "shown": function () {return this.isShow.cardModalDelete},
	      "attr": {
	        "cardImgUrl": function () {return this.showCard.currCardImgUrl},
	        "cardTips": function () {return this.showCard.currCardTips}
	      }
	    },
	    {
	      "type": "duelmodal",
	      "shown": function () {return this.isShow.juedouModal},
	      "attr": {
	        "currentPlayer": function () {return this.currPlayerId},
	        "playerNum": function () {return this.playerNum}
	      }
	    },
	    {
	      "type": "randomfailmodal",
	      "shown": function () {return this.isShow.randomfailModal},
	      "attr": {
	        "currentPlayer": function () {return this.currPlayerId},
	        "playerNum": function () {return this.playerNum}
	      }
	    },
	    {
	      "type": "failplayerradiomodal",
	      "shown": function () {return this.isShow.failRadioModal},
	      "attr": {
	        "currentPlayer": function () {return this.currPlayerId},
	        "selectPlayer": function () {return this.radioSelectPlayer}
	      }
	    },
	    {
	      "type": "bagrandomfailplayermodal",
	      "shown": function () {return this.isShow.bagRandomPlayer},
	      "attr": {
	        "currentPlayer": function () {return this.currPlayerId},
	        "playerNum": function () {return this.playerNum}
	      }
	    }
	  ]
	}

/***/ },
/* 129 */
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
	    "right": 6
	  },
	  "currPlayerTip": {
	    "width": 750,
	    "height": 100,
	    "position": "absolute",
	    "top": 90,
	    "color": "#000000",
	    "fontSize": 70,
	    "fontWeight": "bold",
	    "textAlign": "center",
	    "fontFamily": "'华文楷体'"
	  },
	  "helpBtn": {
	    "width": 80,
	    "height": 80,
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
	    "position": "absolute",
	    "right": 0,
	    "bottom": 0
	  },
	  "endGameText": {
	    "width": 280,
	    "color": "#A9A9A9",
	    "fontSize": 50,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  },
	  "paiduiDiv": {
	    "position": "absolute",
	    "top": 0,
	    "left": 200,
	    "height": 1175,
	    "justifyContent": "center"
	  },
	  "paidui": {
	    "width": 330,
	    "height": 400
	  },
	  "returnBtn": {
	    "position": "absolute",
	    "left": 15,
	    "bottom": 15,
	    "width": 50,
	    "height": 50
	  },
	  "settingBtn": {
	    "position": "absolute",
	    "right": 15,
	    "bottom": 15,
	    "width": 50,
	    "height": 50
	  },
	  "endPlayText": {
	    "position": "absolute",
	    "width": 280,
	    "height": 100,
	    "bottom": 70,
	    "left": 220
	  }
	}

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	var modal = __weex_require__('@weex-module/modal');

	module.exports = {
	    data: function () {return {
	        bgImgSrc: "./imgs/background/bg.jpg",

	        paiduiImg: "./imgs/paidui/newPaidui2.png",
	        endBtn: "./imgs/endGame2.png",
	        currPlayerId: 1,
	        playerNum: null,
	        leftPlayerNum: 0,
	        rightPlayerNum: 0,
	        leftPlayer: [],
	        rightPlayer: [],
	        currCardOrder: [],
	        isShow: {
	            bagModal: false,
	            cardModalUse: false,
	            cardModalSave: false,
	            cardModalDelete: false,
	            juedouModal: false,
	            randomfailModal: false,
	            failRadioModal: false,
	            bagRandomPlayer: false },

	        currPlayerBag: [],

	        showBag: {
	            playerId: 1,
	            drinkNum: 0,
	            bag: []
	        },

	        showCard: {
	            cardPlayerId: null,
	            currCardImgUrl: null,
	            currCardTips: null,
	            currCardId: null,
	            currCardNum: null },

	        cardTipsArr: ["", "决斗牌：随机选择一位玩家进行决斗，输的玩家喝酒一杯，立刻发动。", "免酒牌：能免除一次喝酒的惩罚，可保存到自己的包裹内，待到需要时使用。", "照相机牌：随时喊出照相机三个字即可使用，大家必须保持现有动作静止，10s内最先动的玩家罚酒一杯。", "录音机牌：随时喊出录音机三个字即可使用，前一秒说话的玩家需重复自己刚才说过的话，说错罚酒一杯。", "摸鼻子牌：随时摸自己的鼻子即为发动技能，剩余所有玩家必须都跟着摸自己的鼻子，最后一位摸鼻子的玩家罚酒一杯。", "玩游戏牌：在场所有玩家一块玩游戏，输的玩家罚酒一杯，游戏形式自行指定。", "神经病牌：抽到此牌的玩家变身成一个'神经病'，所有玩家均不可与该玩家搭话，否则罚酒一杯。", "如厕牌：可存入到自己的包裹中，待需要上厕所时使用，限使用一次。", "陪酒牌：游戏中其他玩家无论以何种方式受罚喝酒均可邀请该玩家陪酒，直到下一张陪酒牌出现。", "轮空牌：直接轮空，不进行任何操作。", "抽到本张牌的玩家的上家罚酒一杯。", "抽到本张牌的玩家的下家罚酒一杯。", "抽到本张牌的玩家自罚一杯。", "抽到本张牌的玩家自罚两杯。", "抽到本张牌的玩家自罚三杯。"],

	        cardTipForBag: ["", "", "免酒牌", "照相机牌", "录音机牌", "摸鼻子牌", "", "神经病牌", "如厕牌", "陪酒牌"],
	        radioSelectPlayer: "" }},

	    created: function created() {
	        this.readyFunction();

	        this.$on("closeBagModal", function (event) {
	            this.isShow.bagModal = false;
	        });

	        this.$on("useCard", function (event) {

	            this.isShow.cardModalUse = false;


	            switch (this.showCard.currCardNum) {
	                case 1:
	                    this.isShow.juedouModal = true;
	                    return;
	                case 6:
	                    this.isShow.randomfailModal = true;
	                    return;
	                case 7:
	                case 9:
	                    this.storeToBag();
	                    return;

	                case 11:
	                    if (this.currPlayerId == 1) {
	                        this.drink(this.playerNum, 1);
	                    } else {

	                        this.drink(this.currPlayerId - 1, 1);
	                    }
	                    break;
	                case 12:
	                    if (this.currPlayerId == this.playerNum) {
	                        this.drink(1, 1);
	                    } else {

	                        this.drink(this.currPlayerId + 1, 1);
	                    }
	                    break;
	                case 13:
	                    this.drink(this.currPlayerId, 1);
	                    break;
	                case 14:
	                    this.drink(this.currPlayerId, 2);
	                    break;
	                case 15:
	                    this.drink(this.currPlayerId, 3);
	                    break;
	            }

	            this.currPlayerId = this.currPlayerId % this.playerNum + 1;
	        });

	        this.$on("saveToBag", function (event) {
	            this.storeToBag();
	        });

	        this.$on("startJuedou", function (event) {
	            this.isShow.juedouModal = false;
	            this.isShow.failRadioModal = true;

	            this.radioSelectPlayer = event.detail.randomPlayerId;
	        });

	        this.$on("startPunish", function (event) {
	            this.isShow.failRadioModal = false;
	            this.isShow.randomfailModal = false;

	            this.drink(event.detail.selectedPlayer, 1);
	            this.currPlayerId = this.currPlayerId % this.playerNum + 1;
	        });

	        this.$on("operateCard", function (event) {
	            var cardNum = event.detail.cardNum;
	            var playerId = event.detail.playerId;
	            var cardId = event.detail.cardId;

	            this.showCard.playerId = playerId;
	            this.showCard.currCardId = cardId;
	            this.showCard.currCardNum = cardNum;

	            this.showCard.currCardImgUrl = "./imgs/newCardImg/" + cardId + ".png";
	            this.showCard.currCardTips = this.cardTipsArr[this.showCard.currCardNum];

	            this.isShow.cardModalDelete = true;
	            this.isShow.bagModal = false;
	        });

	        this.$on("deleteCard", function (event) {
	            var playerId = this.showCard.playerId;
	            var cardId = this.showCard.currCardId;
	            var cardName = this.showCard.currCardNum;
	            var bag = this.getPlayerById(playerId).bag;
	            switch (cardName) {
	                case 8:
	                    for (var i in bag) {
	                        if (bag[i].id == cardId) {

	                            bag.splice(i, 1);
	                        }
	                    }
	                    break;
	                case 3:
	                case 4:
	                case 5:
	                case 7:
	                    this.isShow.bagRandomPlayer = true;
	                    break;

	            }
	            this.isShow.cardModalDelete = false;
	        });

	        this.$on("bagStartPunish", function (e) {
	            var playerId = this.showCard.playerId;
	            var cardId = this.showCard.currCardId;
	            var selectPunishPlayer = e.detail.selectedPlayer;
	            var bag = this.getPlayerById(playerId).bag;
	            for (var i in bag) {
	                if (bag[i].id == cardId) {

	                    bag.splice(i, 1);
	                }
	            }
	            this.drink(selectPunishPlayer, 1);
	            this.isShow.bagRandomPlayer = false;
	        });

	        this.$on("returnToBagModal", function () {
	            this.isShow.bagModal = true;
	            this.isShow.cardModalDelete = false;
	        });
	    },

	    methods: {
	        readyFunction: function readyFunction() {
	            while (this.currCardOrder.length < 54) {
	                var t = Math.floor(Math.random() * 54);
	                if (this.currCardOrder.indexOf(t) == -1) {
	                    this.currCardOrder.push(t);
	                }
	            }

	            var num = parseInt(this.playerNum / 2);

	            if (this.playerNum % 2 == 0) {
	                this.leftPlayerNum = num;
	                this.rightPlayerNum = num;
	                for (var i = 1; i <= num; i++) {
	                    var obj = { playerId: i, bag: [], drinkNum: 0, drinkArray: [], flag_9: false };
	                    this.leftPlayer.push(obj);
	                }
	                for (var j = num + 1; j <= this.playerNum; j++) {
	                    var obj = { playerId: j, bag: [], drinkNum: 0, drinkArray: [], flag_9: false };
	                    this.rightPlayer.push(obj);
	                }
	            } else {
	                this.leftPlayerNum = num + 1;
	                this.rightPlayerNum = num;
	                for (var i = 1; i <= num + 1; i++) {
	                    var obj = { playerId: i, bag: [], drinkNum: 0, drinkArray: [], flag_9: false };
	                    this.leftPlayer.push(obj);
	                }
	                for (var j = num + 2; j <= this.playerNum; j++) {
	                    var obj = { playerId: j, bag: [], drinkNum: 0, drinkArray: [], flag_9: false };
	                    this.rightPlayer.push(obj);
	                }
	            }
	        },
	        setDrinkNum: function setDrinkNum(id, amount) {
	            for (var i = 0; i < amount; i++) {

	                this.getPlayerById.call(this, id).drinkArray.push(1);
	            }
	        },

	        getPlayerById: function getPlayerById(id) {
	            if (id <= this.leftPlayerNum) {
	                return this.leftPlayer[id - 1];
	            } else if (id <= this.playerNum) {
	                    return this.rightPlayer[id - 1 - this.leftPlayerNum];
	                }
	        },

	        showCard: function showCard() {
	            if (this.currCardOrder.length == 0) {
	                this._parent.$emit('toScore');
	                return;
	            }
	            var cardId = this.currCardOrder[0];
	            this.currCardId = cardId;
	            if (cardId != 53) {
	                this.showCard.currCardNum = parseInt(cardId / 4) + 1;
	            } else {
	                this.showCard.currCardNum = 15;
	            }

	            this.showCard.currCardImgUrl = "./imgs/newCardImg/" + cardId + ".png";
	            this.showCard.currCardTips = this.cardTipsArr[this.showCard.currCardNum];

	            switch (this.showCard.currCardNum) {
	                case 2:
	                case 3:
	                case 4:
	                case 5:
	                case 8:
	                    this.isShow.cardModalSave = true;
	                    break;
	                default:
	                    this.isShow.cardModalUse = true;
	            }
	            this.currCardOrder.shift();
	        },

	        showBag: function showBag(e) {
	            this.showBag.playerId = e.target._vm.playerId;
	            this.showBag.drinkNum = e.target._vm.drinkNum;

	            this.showBag.bag = this.getPlayerById(this.showBag.playerId).bag;

	            this.isShow.bagModal = true;
	        },

	        storeToBag: function storeToBag() {
	            var cardNode;

	            cardNode = {
	                id: this.currCardId,
	                num: this.showCard.currCardNum,
	                name: this.cardTipForBag[this.showCard.currCardNum],
	                imgUrl: "./imgs/bagCardImg/" + this.currCardId + ".png" };

	            if (cardNode.num == 9) {
	                for (var i = 1; i <= this.playerNum; i++) {
	                    if (this.getPlayerById(i).flag_9 == true) {
	                        var bag = this.getPlayerById(i).bag;
	                        for (var j in bag) {
	                            if (bag[j].num == 9) {

	                                bag.splice(j, 1);
	                            }
	                        }
	                        this.getPlayerById(i).flag_9 = false;
	                        break;
	                    }
	                }
	                this.getPlayerById(this.currPlayerId).flag_9 = true;
	            }
	            this.getPlayerById(this.currPlayerId).bag.push(cardNode);

	            this.isShow.cardModalSave = false;
	            this.isShow.cardModalUse = false;

	            this.currPlayerId = this.currPlayerId % this.playerNum + 1;
	        },

	        drink: function drink(drinkPlayerId, amount) {

	            var drinkBag = this.getPlayerById(drinkPlayerId).bag;

	            var self = this;

	            for (var i in drinkBag) {
	                if (drinkBag[i].num == 2) {

	                    modal.confirm({
	                        'message': '玩家' + drinkPlayerId + '有免酒卡，是否使用？',
	                        'okTitle': '使用',
	                        'cancelTitle': '不使用'
	                    }, function (e) {
	                        if (String(e) == "使用") {
	                            drinkBag.splice(i, 1);
	                            return;
	                        } else {

	                            self.check9.call(self, drinkPlayerId, amount);
	                        }
	                    });

	                    return;
	                }
	            }

	            self.check9.call(self, drinkPlayerId, amount);
	        },

	        check9: function check9(drinkPlayerId, amount) {
	            var self = this;
	            for (var j = 1; j <= this.playerNum; j++) {

	                if (this.getPlayerById(j).flag_9 == true) {
	                    modal.confirm({
	                        'message': '玩家' + j + '有陪酒卡，是否让其陪酒？',
	                        'okTitle': '是',
	                        'cancelTitle': '否'
	                    }, function (e) {
	                        if (String(e) == "是") {
	                            self.setDrinkNum.call(self, j, amount);
	                        }
	                    });
	                    break;
	                }
	            }
	            self.setDrinkNum.call(self, drinkPlayerId, amount);
	        },

	        toScore: function toScore() {
	            var rankArray = [];
	            for (var i = 1; i <= this.playerNum; i++) {
	                var rank = {
	                    playerId: this.getPlayerById(i).playerId,
	                    drinkNum: this.getPlayerById(i).drinkArray.length

	                };
	                rankArray.push(rank);
	            }
	            rankArray.sort(function (a, b) {
	                return b.drinkNum - a.drinkNum;
	            });
	            rankArray = rankArray.slice(0, 6);
	            this._parent.$emit("toScore", { rankArray: rankArray });
	        },

	        returnSelectNum: function returnSelectNum() {
	            this._parent.$emit("returnSelectNum");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(132)
	var __weex_style__ = __webpack_require__(133)
	var __weex_script__ = __webpack_require__(134)

	__weex_define__('@weex-component/score', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "bgImg"
	      ],
	      "attr": {
	        "src": function () {return this.bgImgSrc}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "rankListImg"
	      ],
	      "attr": {
	        "src": function () {return this.rankImgSrc}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dialog-content"
	      ],
	      "children": [
	        {
	          "type": "list",
	          "classList": [
	            "list"
	          ],
	          "children": [
	            {
	              "type": "cell",
	              "append": "tree",
	              "classList": [
	                "row"
	              ],
	              "repeat": {
	                "expression": function () {return this.rankArray},
	                "value": "item"
	              },
	              "attr": {
	                "index": function () {return this.$index}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return (this.rankImgHead) + (this.$index+1) + (this.rankImgTail)}
	                  },
	                  "classList": [
	                    "rankImg"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "item"
	                  ],
	                  "attr": {
	                    "value": function () {return '玩家' + (this.item.playerId)}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "title"
	                  ],
	                  "attr": {
	                    "value": function () {return this.item.title}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "classList": [
	        "restartPlayText"
	      ],
	      "events": {
	        "click": "restartGame"
	      },
	      "attr": {
	        "src": function () {return this.restartBtn}
	      }
	    }
	  ]
	}

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = {
	  "rankImg": {
	    "marginLeft": 20,
	    "marginRight": 40,
	    "width": 60,
	    "height": 75
	  },
	  "rankListImg": {
	    "position": "absolute",
	    "width": 500,
	    "height": 150,
	    "top": 50,
	    "left": 130
	  },
	  "bgImg": {
	    "width": 750,
	    "height": 1175
	  },
	  "row": {
	    "alignItems": "center",
	    "height": 90,
	    "flexDirection": "row",
	    "marginTop": 10
	  },
	  "item": {
	    "fontSize": 40,
	    "marginRight": 40
	  },
	  "title": {
	    "fontSize": 40,
	    "color": "#FF0000"
	  },
	  "dialog": {
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "dialog-content": {
	    "position": "absolute",
	    "width": 550,
	    "height": 700,
	    "top": 220,
	    "left": 100,
	    "borderRadius": 10,
	    "backgroundColor": "rgba(223,223,223,0.51)"
	  },
	  "button": {
	    "position": "absolute",
	    "bottom": 220,
	    "fontSize": 50,
	    "width": 750,
	    "textAlign": "center",
	    "color": "#FFFFFF"
	  },
	  "restartPlayText": {
	    "position": "absolute",
	    "width": 280,
	    "height": 100,
	    "bottom": 70,
	    "left": 220
	  }
	}

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	    data: function () {return {
	        bgImgSrc: "./imgs/background/bg.jpg",
	        rankImgSrc: "./imgs/rankList2.png",
	        rankImgHead: "./imgs/background/rank",
	        restartBtn: "./imgs/restartGame2.png",
	        rankImgTail: ".png",
	        rankArray: [],
	        title: ["千杯不醉", "陪酒公主", "酒桌之王"]
	    }},
	    created: function created() {
	        for (var i in this.title) {
	            this.rankArray[i].title = this.title[i];
	        }
	    },
	    methods: {
	        restartGame: function restartGame() {
	            this._parent.$emit("restartGame");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "greeting",
	      "shown": function () {return this.isShow.greeting}
	    },
	    {
	      "type": "selectnum",
	      "shown": function () {return this.isShow.selectNum}
	    },
	    {
	      "type": "main",
	      "shown": function () {return this.isShow.main},
	      "attr": {
	        "playerNum": function () {return this.totalPlayerNum}
	      }
	    },
	    {
	      "type": "score",
	      "shown": function () {return this.isShow.score},
	      "attr": {
	        "rankArray": function () {return this.rankArray}
	      }
	    }
	  ]
	}

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	  data: function () {return {
	    isShow: {
	      greeting: true,
	      selectNum: false,
	      main: false,
	      score: false
	    },
	    totalPlayerNum: null,
	    rankArray: []
	  }},
	  created: function created() {
	    this.$on("toSelectNum", function (event) {
	      this.isShow.selectNum = true;
	      this.isShow.greeting = false;
	    });
	    this.$on("toMain", function (event) {

	      this.totalPlayerNum = event.detail.playerNum;

	      this.isShow.main = true;
	      this.isShow.selectNum = false;
	    });
	    this.$on("toScore", function (event) {
	      this.rankArray = event.detail.rankArray;
	      this.isShow.score = true;
	      this.isShow.main = false;
	    });
	    this.$on("returnGreeting", function (event) {
	      this.isShow.greeting = true;
	      this.isShow.selectNum = false;
	    });
	    this.$on("returnSelectNum", function (event) {
	      this.isShow.selectNum = true;
	      this.isShow.main = false;
	    });
	    this.$on("restartGame", function (event) {
	      this.isShow.greeting = true;
	      this.isShow.score = false;
	    });
	  },
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);