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
	var __weex_template__ = __webpack_require__(17)
	var __weex_script__ = __webpack_require__(18)

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
	      "type": "text",
	      "classList": [
	        "gameName"
	      ],
	      "attr": {
	        "value": "行酒令"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "startPlay"
	      ],
	      "children": [
	        {
	          "type": "a",
	          "classList": [
	            "startPlayA"
	          ],
	          "events": {
	            "click": "toSelectNum"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "startPlayText"
	              ],
	              "attr": {
	                "value": "开始游戏"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "quitPlay"
	      ],
	      "children": [
	        {
	          "type": "a",
	          "classList": [
	            "quitPlayA"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "quitPlayText"
	              ],
	              "attr": {
	                "value": "退出游戏"
	              }
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
	  "bgImg": {
	    "width": 750,
	    "height": 1175
	  },
	  "gameName": {
	    "position": "absolute",
	    "top": 30,
	    "right": 30,
	    "color": "#FFFF00",
	    "fontSize": 110,
	    "fontWeight": "bold"
	  },
	  "startPlay": {
	    "width": 250,
	    "height": 80,
	    "position": "absolute",
	    "backgroundColor": "#0000FF",
	    "top": 590,
	    "left": 50
	  },
	  "startPlayText": {
	    "color": "#FFFFFF",
	    "fontSize": 60,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  },
	  "quitPlay": {
	    "width": 250,
	    "height": 80,
	    "position": "absolute",
	    "backgroundColor": "#0000FF",
	    "top": 740,
	    "left": 50
	  },
	  "quitPlayText": {
	    "color": "#FFFFFF",
	    "fontSize": 60,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	    data: function () {return {
	        bgImgSrc: "https://13111211.github.io/weexCompetition/imgs/background/bg5.jpg"
	    }},
	    methods: {
	        toSelectNum: function toSelectNum() {
	            this._parent.$emit('toSelectNum');
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
	      "type": "text",
	      "classList": [
	        "selectNumText"
	      ],
	      "attr": {
	        "value": "请选择游戏人数"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "startPlay"
	      ],
	      "children": [
	        {
	          "type": "a",
	          "classList": [
	            "startPlayA"
	          ],
	          "events": {
	            "click": "toMain"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "startPlayText"
	              ],
	              "attr": {
	                "value": "立即开始"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "quitPlay"
	      ],
	      "children": [
	        {
	          "type": "a",
	          "classList": [
	            "quitPlayA"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "quitPlayText"
	              ],
	              "attr": {
	                "value": "返回"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "bgImg": {
	    "width": 750,
	    "height": 1175
	  },
	  "selectNumText": {
	    "position": "absolute",
	    "top": 30,
	    "right": 30,
	    "color": "#FFFF00",
	    "fontSize": 50,
	    "fontWeight": "bold"
	  },
	  "startPlay": {
	    "width": 250,
	    "height": 80,
	    "position": "absolute",
	    "backgroundColor": "#0000FF",
	    "top": 590,
	    "left": 50
	  },
	  "startPlayText": {
	    "color": "#FFFFFF",
	    "fontSize": 60,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  },
	  "quitPlay": {
	    "width": 250,
	    "height": 80,
	    "position": "absolute",
	    "backgroundColor": "#0000FF",
	    "top": 740,
	    "left": 50
	  },
	  "quitPlayText": {
	    "color": "#FFFFFF",
	    "fontSize": 60,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	    data: function () {return {
	        bgImgSrc: "https://13111211.github.io/weexCompetition/imgs/background/bg5.jpg"
	    }},
	    methods: {
	        toMain: function toMain() {
	            this._parent.$emit("toMain");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10)
	var __weex_template__ = __webpack_require__(14)
	var __weex_style__ = __webpack_require__(15)
	var __weex_script__ = __webpack_require__(16)

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
/* 12 */
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
/* 13 */
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
/* 14 */
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
	                "playerid": function () {return this.player.playerId},
	                "drinknum": "player.drinkNum"
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
	                "playerid": function () {return this.player.playerId},
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
	            "value": function () {return '玩家' + (this.currPlayerId) + '摸牌'}
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
	    },
	    {
	      "type": "div",
	      "classList": [
	        "paiduiDiv"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "resize": "cover",
	            "src": function () {return this.paiduiImg}
	          },
	          "classList": [
	            "paidui"
	          ],
	          "events": {
	            "click": "selectCard"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "id": "cardDialog",
	      "classList": [
	        "dialog"
	      ],
	      "shown": function () {return this.cardDialogShow},
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
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.currCardImgUrl}
	                  },
	                  "classList": [
	                    "cardClass"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "cardBtnClass"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cardUseDiv"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "cardUseText"
	                          ],
	                          "events": {
	                            "click": "closeCardDialog"
	                          },
	                          "attr": {
	                            "value": "立即使用"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cardStoreDiv"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "cardStoreText"
	                          ],
	                          "attr": {
	                            "value": "存入包裹"
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
	  ]
	}

/***/ },
/* 15 */
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
	  },
	  "paiduiDiv": {
	    "position": "absolute",
	    "top": 0,
	    "left": 200,
	    "height": 1175,
	    "justifyContent": "center"
	  },
	  "paidui": {
	    "width": 350,
	    "height": 500
	  },
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
	    "height": 720,
	    "backgroundColor": "#ffffff",
	    "position": "relative"
	  },
	  "dialog-body": {
	    "padding": 20,
	    "justifyContent": "center"
	  },
	  "cardClass": {
	    "width": 500,
	    "height": 600
	  },
	  "cardBtnClass": {
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "cardUseDiv": {
	    "width": 200,
	    "height": 80,
	    "backgroundColor": "#6495ED",
	    "justifyContent": "center"
	  },
	  "cardUseText": {
	    "color": "#FFFFFF",
	    "fontSize": 40,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  },
	  "cardStoreDiv": {
	    "width": 200,
	    "height": 80,
	    "backgroundColor": "#6495ED",
	    "justifyContent": "center"
	  },
	  "cardStoreText": {
	    "color": "#FFFFFF",
	    "fontSize": 40,
	    "textAlign": "center",
	    "fontWeight": "bold"
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	    data: function () {return {

	        bgImgSrc: "https://13111211.github.io/weexCompetition/imgs/background/bg3.jpg",
	        paiduiImg: "https://13111211.github.io/weexCompetition/imgs/paidui/paidui7.png",

	        currPlayerId: 1,
	        playerNum: 10,
	        leftPlayerNum: 0,
	        rightPlayerNum: 0,
	        leftPlayer: [],
	        rightPlayer: [],
	        currCardOrder: [],
	        cardDialogShow: false,
	        currCardImgUrl: null,
	        currCardNum: null }},

	    ready: function ready() {
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
	                var obj = { playerId: i, bag: [], drinkNum: 0, flag_9: false };
	                this.leftPlayer.push(obj);
	            }
	            for (var j = num + 1; j <= this.playerNum; j++) {
	                var obj = { playerId: j, bag: [], drinkNum: 0, flag_9: false };
	                this.rightPlayer.push(obj);
	            }
	        } else {
	            this.leftPlayerNum = num + 1;
	            this.rightPlayerNum = num;
	            for (var i = 1; i <= num + 1; i++) {
	                var obj = { playerId: i, bag: [], drinkNum: 0, flag_9: false };
	                this.leftPlayer.push(obj);
	            }
	            for (var j = num + 2; j <= this.playerNum; j++) {
	                var obj = { playerId: j, bag: [], drinkNum: 0, flag_9: false };
	                this.rightPlayer.push(obj);
	            }
	        }
	    },
	    methods: {
	        selectCard: function selectCard() {
	            var cardId = this.currCardOrder[0];
	            this.currCardNum = parseInt(cardId / 4) + 1;
	            this.currCardImgUrl = "https://13111211.github.io/weexCompetition/imgs/card/card" + cardId + ".png";
	            this.cardDialogShow = true;
	            this.currCardOrder.shift();
	        },

	        showBag: function showBag() {},
	        closeCardDialog: function closeCardDialog() {
	            this.cardDialogShow = false;
	            this.currPlayerId++;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 17 */
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
	      "shown": function () {return this.isShow.main}
	    }
	  ]
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	  data: function () {return {
	    isShow: {
	      greeting: true,
	      selectNum: false,
	      main: false
	    }
	  }},
	  created: function created() {
	    this.$on("toSelectNum", function (event) {
	      this.isShow.selectNum = true;
	      this.isShow.greeting = false;
	    });
	    this.$on("toMain", function (event) {
	      this.isShow.main = true;
	      this.isShow.selectNum = false;
	    });
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);