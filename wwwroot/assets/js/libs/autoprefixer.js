!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.autoprefixer=e():"undefined"!=typeof global?global.autoprefixer=e():"undefined"!=typeof self&&(self.autoprefixer=e())}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  module.exports = {
    android: {
      prefix: "-webkit-",
      minor: true,
      future: [4.4],
      versions: [4.3, 4.2, 4.1, 4, 3, 2.3, 2.2, 2.1],
      popularity: [0.393833, 0.393833, 1.98513, 1.05377, 0.00532207, 1.3997, 0.0904751, 0.0266103]
    },
    bb: {
      prefix: "-webkit-",
      minor: true,
      versions: [10, 7],
      popularity: [0, 0.160821]
    },
    chrome: {
      prefix: "-webkit-",
      future: [33, 32],
      versions: [31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4],
      popularity: [14.7206, 15.7521, 0.631684, 0.415792, 0.335832, 0.391804, 0.263868, 0.175912, 0.191904, 0.231884, 0.47976, 0.03998, 0.03998, 0.095952, 0.031984, 0.047976, 0.071964, 0.055972, 0.055972, 0.063968, 0.111944, 0.03998, 0.023988, 0.031984, 0.023988, 0.031984, 0.023988, 0.023988]
    },
    ff: {
      prefix: "-moz-",
      future: [28, 27],
      versions: [26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3.6, 3.5, 3, 2],
      popularity: [0.415792, 9.51524, 2.47076, 0.295852, 0.1999, 0.191904, 0.143928, 0.11994, 0.095952, 0.191904, 0.23988, 0.135932, 0.087956, 0.087956, 0.191904, 0.087956, 0.103948, 0.055972, 0.063968, 0.03998, 0.047976, 0.03998, 0.063968, 0.311844, 0.03998, 0.087956, 0.015992]
    },
    ie: {
      prefix: "-ms-",
      versions: [11, 10, 9, 8, 7, 6, 5.5],
      popularity: [1.28176, 9.68717, 4.62585, 7.55911, 0.435471, 0.246493, 0.009298]
    },
    ios: {
      prefix: "-webkit-",
      versions: [7, 6.1, 6, 5.1, 5, 4.3, 4.2, 4.1, 4, 3.2],
      popularity: [2.91427, 0.517185, 0.517185, 0.154512, 0.154512, 0.015022, 0.015022, 0.004292, 0.004292, 0.004292]
    },
    opera: {
      prefix: "-o-",
      future: [18],
      versions: [17, 16, 15, 12.1, 12, 11.6, 11.5, 11.1, 11, 10.6, 10.5, 10.1, 10, 9.6, 9.5],
      popularity: [0.191904, 0.03998, 0.023988, 0.447776, 0.03998, 0.023988, 0.015992, 0.008219, 0.008219, 0.007996, 0.008392, 0.007996, 0.007996, 0.003998, 0.003998]
    },
    safari: {
      prefix: "-webkit-",
      versions: [7, 6.1, 6, 5.1, 5, 4, 3.2, 3.1],
      popularity: [0.751624, 0.583708, 0.943528, 1.0075, 0.295852, 0.111944, 0.008692, 0]
    }
  };

}).call(this);

},{}],2:[function(require,module,exports){
(function() {
  module.exports = {
    "::placeholder": {
      selector: true,
      browsers: ["android 4.4", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ie 10", "ie 11", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "::selection": {
      selector: true,
      browsers: ["ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28"]
    },
    ":fullscreen": {
      selector: true,
      browsers: ["chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ie 11", "opera 15", "opera 16", "opera 17", "opera 18", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "@keyframes": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "align-content": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "align-items": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "align-self": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    animation: {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "animation-delay": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "animation-direction": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "animation-duration": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "animation-fill-mode": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "animation-iteration-count": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "animation-name": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "animation-play-state": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "animation-timing-function": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "backface-visibility": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ie 9", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "background-clip": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "ff 3.6", "opera 10", "opera 10.1"]
    },
    "background-origin": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "ff 3.6", "opera 10", "opera 10.1"]
    },
    "background-size": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "ff 3.6", "opera 10", "opera 10.1"]
    },
    "border-bottom-left-radius": {
      mistakes: ["-ms-"],
      browsers: ["android 2.1", "chrome 4", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ios 3.2", "safari 3.1", "safari 3.2", "safari 4"],
      transition: true
    },
    "border-bottom-right-radius": {
      mistakes: ["-ms-"],
      browsers: ["android 2.1", "chrome 4", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ios 3.2", "safari 3.1", "safari 3.2", "safari 4"],
      transition: true
    },
    "border-image": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "opera 12.1", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1"]
    },
    "border-radius": {
      mistakes: ["-ms-"],
      browsers: ["android 2.1", "chrome 4", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ios 3.2", "safari 3.1", "safari 3.2", "safari 4"],
      transition: true
    },
    "border-top-left-radius": {
      mistakes: ["-ms-"],
      browsers: ["android 2.1", "chrome 4", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ios 3.2", "safari 3.1", "safari 3.2", "safari 4"],
      transition: true
    },
    "border-top-right-radius": {
      mistakes: ["-ms-"],
      browsers: ["android 2.1", "chrome 4", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ios 3.2", "safari 3.1", "safari 3.2", "safari 4"],
      transition: true
    },
    "box-shadow": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "bb 7", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "ff 3.5", "ff 3.6", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "safari 3.1", "safari 3.2", "safari 4", "safari 5"],
      transition: true
    },
    "box-sizing": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "bb 7", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "safari 3.1", "safari 3.2", "safari 4", "safari 5"]
    },
    "break-after": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "break-before": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "break-inside": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    calc: {
      props: ["*"],
      browsers: ["bb 10", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 6", "ios 6.1", "safari 6"]
    },
    "column-count": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "column-fill": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "column-gap": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    "column-rule": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    "column-rule-color": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    "column-rule-style": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "column-rule-width": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    "column-span": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "column-width": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    columns: {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    "display-flex": {
      props: ["display"],
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "fill-available": {
      props: ["width", "min-width", "max-width", "height", "min-height", "max-height"],
      browsers: ["android 4.4", "bb 10", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 6.1", "safari 7"]
    },
    filter: {
      browsers: ["android 4.4", "bb 10", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    "fit-content": {
      props: ["width", "min-width", "max-width", "height", "min-height", "max-height"],
      browsers: ["android 4.4", "bb 10", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 6.1", "safari 7"]
    },
    flex: {
      transition: true,
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "flex-basis": {
      transition: true,
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "flex-direction": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "flex-flow": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "flex-grow": {
      transition: true,
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "flex-shrink": {
      transition: true,
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "flex-wrap": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "font-feature-settings": {
      browsers: ["android 4.4", "bb 10", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 6.1", "safari 7"]
    },
    "font-kerning": {
      browsers: ["android 4.4", "bb 10", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 6.1", "safari 7"]
    },
    "font-language-override": {
      browsers: ["android 4.4", "bb 10", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 6.1", "safari 7"]
    },
    "font-variant-ligatures": {
      browsers: ["android 4.4", "bb 10", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 6.1", "safari 7"]
    },
    grab: {
      props: ["cursor"],
      browsers: ["chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    grabbing: {
      props: ["cursor"],
      browsers: ["chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    hyphens: {
      browsers: ["ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ie 10", "ie 11", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "inline-flex": {
      props: ["display"],
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "justify-content": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    "linear-gradient": {
      props: ["background", "background-image", "border-image"],
      mistakes: ["-ms-"],
      browsers: ["android 2.1 old", "android 2.2 old", "android 2.3 old", "android 3 old", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2 old", "ios 4 old", "ios 4.1 old", "ios 4.2 old", "ios 4.3 old", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "safari 4 old", "safari 5 old", "safari 5.1", "safari 6"]
    },
    "max-content": {
      props: ["width", "min-width", "max-width", "height", "min-height", "max-height"],
      browsers: ["android 4.4", "bb 10", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 6.1", "safari 7"]
    },
    "min-content": {
      props: ["width", "min-width", "max-width", "height", "min-height", "max-height"],
      browsers: ["android 4.4", "bb 10", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 6.1", "safari 7"]
    },
    order: {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4 2009", "chrome 5 2009", "chrome 6 2009", "chrome 7 2009", "chrome 8 2009", "chrome 9 2009", "chrome 10 2009", "chrome 11 2009", "chrome 12 2009", "chrome 13 2009", "chrome 14 2009", "chrome 15 2009", "chrome 16 2009", "chrome 17 2009", "chrome 18 2009", "chrome 19 2009", "chrome 20 2009", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ie 10", "ios 3.2 2009", "ios 4 2009", "ios 4.1 2009", "ios 4.2 2009", "ios 4.3 2009", "ios 5 2009", "ios 5.1 2009", "ios 6 2009", "ios 6.1 2009", "ios 7", "opera 15", "opera 16", "safari 3.1 2009", "safari 3.2 2009", "safari 4 2009", "safari 5 2009", "safari 5.1 2009", "safari 6 2009", "safari 6.1 2009", "safari 7"]
    },
    perspective: {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ie 9", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    "perspective-origin": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ie 9", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    "radial-gradient": {
      props: ["background", "background-image", "border-image"],
      mistakes: ["-ms-"],
      browsers: ["android 2.1 old", "android 2.2 old", "android 2.3 old", "android 3 old", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2 old", "ios 4 old", "ios 4.1 old", "ios 4.2 old", "ios 4.3 old", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "safari 4 old", "safari 5 old", "safari 5.1", "safari 6"]
    },
    "repeating-linear-gradient": {
      props: ["background", "background-image", "border-image"],
      mistakes: ["-ms-"],
      browsers: ["android 2.1 old", "android 2.2 old", "android 2.3 old", "android 3 old", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2 old", "ios 4 old", "ios 4.1 old", "ios 4.2 old", "ios 4.3 old", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "safari 4 old", "safari 5 old", "safari 5.1", "safari 6"]
    },
    "repeating-radial-gradient": {
      props: ["background", "background-image", "border-image"],
      mistakes: ["-ms-"],
      browsers: ["android 2.1 old", "android 2.2 old", "android 2.3 old", "android 3 old", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2 old", "ios 4 old", "ios 4.1 old", "ios 4.2 old", "ios 4.3 old", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "safari 4 old", "safari 5 old", "safari 5.1", "safari 6"]
    },
    "tab-size": {
      browsers: ["ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "opera 12.1"]
    },
    transform: {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ie 9", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    "transform-origin": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ie 9", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"],
      transition: true
    },
    "transform-style": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ie 9", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    transition: {
      mistakes: ["-ms-"],
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6"]
    },
    "transition-delay": {
      mistakes: ["-ms-"],
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6"]
    },
    "transition-duration": {
      mistakes: ["-ms-"],
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6"]
    },
    "transition-property": {
      mistakes: ["-ms-"],
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6"]
    },
    "transition-timing-function": {
      mistakes: ["-ms-"],
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "bb 7", "bb 10", "chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "opera 10.5", "opera 10.6", "opera 11", "opera 11.1", "opera 11.5", "opera 11.6", "opera 12", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6"]
    },
    "user-select": {
      browsers: ["android 2.1", "android 2.2", "android 2.3", "android 3", "android 4", "android 4.1", "android 4.2", "android 4.3", "android 4.4", "bb 7", "bb 10", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "ff 24", "ff 25", "ff 26", "ff 27", "ff 28", "ie 10", "ie 11", "ios 3.2", "ios 4", "ios 4.1", "ios 4.2", "ios 4.3", "ios 5", "ios 5.1", "ios 6", "ios 6.1", "ios 7", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "zoom-in": {
      props: ["cursor"],
      browsers: ["chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    },
    "zoom-out": {
      props: ["cursor"],
      browsers: ["chrome 4", "chrome 5", "chrome 6", "chrome 7", "chrome 8", "chrome 9", "chrome 10", "chrome 11", "chrome 12", "chrome 13", "chrome 14", "chrome 15", "chrome 16", "chrome 17", "chrome 18", "chrome 19", "chrome 20", "chrome 21", "chrome 22", "chrome 23", "chrome 24", "chrome 25", "chrome 26", "chrome 27", "chrome 28", "chrome 29", "chrome 30", "chrome 31", "chrome 32", "chrome 33", "ff 2", "ff 3", "ff 3.5", "ff 3.6", "ff 4", "ff 5", "ff 6", "ff 7", "ff 8", "ff 9", "ff 10", "ff 11", "ff 12", "ff 13", "ff 14", "ff 15", "ff 16", "ff 17", "ff 18", "ff 19", "ff 20", "ff 21", "ff 22", "ff 23", "opera 15", "opera 16", "opera 17", "opera 18", "safari 3.1", "safari 3.2", "safari 4", "safari 5", "safari 5.1", "safari 6", "safari 6.1", "safari 7"]
    }
  };

}).call(this);

},{}],3:[function(require,module,exports){
(function() {
  var Autoprefixer, Browsers, Prefixes, autoprefixer, infoCache, postcss,
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  postcss = require('postcss');

  Browsers = require('./browsers');

  Prefixes = require('./prefixes');

  infoCache = null;

  autoprefixer = function() {
    var browsers, prefixes, reqs;
    reqs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (reqs.length === 1 && reqs[0] instanceof Array) {
      reqs = reqs[0];
    } else if (reqs.length === 0 || (reqs.length === 1 && (reqs[0] == null))) {
      reqs = void 0;
    }
    if (reqs == null) {
      reqs = autoprefixer["default"];
    }
    browsers = new Browsers(autoprefixer.data.browsers, reqs);
    prefixes = new Prefixes(autoprefixer.data.prefixes, browsers);
    return new Autoprefixer(prefixes, autoprefixer.data);
  };

  autoprefixer.data = {
    browsers: require('../data/browsers'),
    prefixes: require('../data/prefixes')
  };

  Autoprefixer = (function() {
    function Autoprefixer(prefixes, data) {
      this.prefixes = prefixes;
      this.data = data;
      this.postcss = __bind(this.postcss, this);
      this.browsers = this.prefixes.browsers.selected;
    }

    Autoprefixer.prototype.process = function(str, options) {
      if (options == null) {
        options = {};
      }
      return this.processor().process(str, options);
    };

    Autoprefixer.prototype.compile = function(str, options) {
      var fixed, name, value;
      if (options == null) {
        options = {};
      }
      fixed = {};
      for (name in options) {
        value = options[name];
        if (name === 'file') {
          name === 'from';
        }
        fixed[name] = value;
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('autoprefixer: replace compile() to process(). ' + 'Method compile() is deprecated and will be removed in 1.1.');
      }
      return this.process(str, options).css;
    };

    Autoprefixer.prototype.postcss = function(css) {
      this.prefixes.processor.add(css);
      return this.prefixes.processor.remove(css);
    };

    Autoprefixer.prototype.info = function() {
      infoCache || (infoCache = require('./info'));
      return infoCache(this.prefixes);
    };

    Autoprefixer.prototype.processor = function() {
      return this.processorCache || (this.processorCache = postcss(this.postcss));
    };

    return Autoprefixer;

  })();

  autoprefixer["default"] = ['> 1%', 'last 2 versions', 'ff 24', 'opera 12.1'];

  autoprefixer.loadDefault = function() {
    return this.defaultCache || (this.defaultCache = autoprefixer(this["default"]));
  };

  autoprefixer.process = function(str, options) {
    if (options == null) {
      options = {};
    }
    return this.loadDefault().process(str, options);
  };

  autoprefixer.compile = function(str, options) {
    if (options == null) {
      options = {};
    }
    return this.loadDefault().compile(str, options);
  };

  autoprefixer.postcss = function(css) {
    return this.loadDefault().postcss(css);
  };

  autoprefixer.info = function() {
    return this.loadDefault().info();
  };

  module.exports = autoprefixer;

}).call(this);

},{"../data/browsers":1,"../data/prefixes":2,"./browsers":4,"./info":28,"./prefixes":32,"postcss":46}],4:[function(require,module,exports){
(function() {
  var Browsers, utils;

  utils = require('./utils');

  Browsers = (function() {
    Browsers.prefixes = function() {
      var data, i, name;
      if (this.prefixesCache) {
        return this.prefixesCache;
      }
      data = require('../data/browsers');
      return this.prefixesCache = utils.uniq((function() {
        var _results;
        _results = [];
        for (name in data) {
          i = data[name];
          _results.push(i.prefix);
        }
        return _results;
      })()).sort(function(a, b) {
        return b.length - a.length;
      });
    };

    function Browsers(data, requirements) {
      this.data = data;
      this.selected = this.parse(requirements);
    }

    Browsers.prototype.parse = function(requirements) {
      var selected,
        _this = this;
      if (!(requirements instanceof Array)) {
        requirements = [requirements];
      }
      selected = [];
      requirements.map(function(req) {
        var i, match, name, _ref;
        _ref = _this.requirements;
        for (name in _ref) {
          i = _ref[name];
          if (match = req.match(i.regexp)) {
            selected = selected.concat(i.select.apply(_this, match.slice(1)));
            return;
          }
        }
        return utils.error("Unknown browser requirement `" + req + "`");
      });
      return utils.uniq(selected);
    };

    Browsers.prototype.aliases = {
      fx: 'ff',
      firefox: 'ff',
      explorer: 'ie',
      blackberry: 'bb'
    };

    Browsers.prototype.requirements = {
      none: {
        regexp: /^none$/i,
        select: function() {
          return [];
        }
      },
      lastVersions: {
        regexp: /^last (\d+) versions?$/i,
        select: function(versions) {
          return this.browsers(function(data) {
            if (data.minor) {
              return [];
            } else {
              return data.versions.slice(0, versions);
            }
          });
        }
      },
      lastByBrowser: {
        regexp: /^last (\d+) (\w+) versions?$/i,
        select: function(versions, browser) {
          var data;
          data = this.byName(browser);
          return data.versions.slice(0, versions).map(function(v) {
            return "" + data.name + " " + v;
          });
        }
      },
      globalStatistics: {
        regexp: /^> (\d+(\.\d+)?)%$/,
        select: function(popularity) {
          return this.browsers(function(data) {
            return data.versions.filter(function(version, i) {
              return data.popularity[i] > popularity;
            });
          });
        }
      },
      newerThen: {
        regexp: /^(\w+) (>=?)\s*([\d\.]+)/,
        select: function(browser, sign, version) {
          var data, filter;
          data = this.byName(browser);
          version = parseFloat(version);
          if (sign === '>') {
            filter = function(v) {
              return v > version;
            };
          } else if (sign === '>=') {
            filter = function(v) {
              return v >= version;
            };
          }
          return data.versions.filter(filter).map(function(v) {
            return "" + data.name + " " + v;
          });
        }
      },
      direct: {
        regexp: /^(\w+) ([\d\.]+)$/,
        select: function(browser, version) {
          var data, first, last;
          data = this.byName(browser);
          version = parseFloat(version);
          last = data.future ? data.future[0] : data.versions[0];
          first = data.versions[data.versions.length - 1];
          if (version > last) {
            version = last;
          } else if (version < first) {
            version = first;
          }
          return ["" + data.name + " " + version];
        }
      }
    };

    Browsers.prototype.browsers = function(criteria) {
      var browser, data, selected, versions, _ref;
      selected = [];
      _ref = this.data;
      for (browser in _ref) {
        data = _ref[browser];
        versions = criteria(data).map(function(version) {
          return "" + browser + " " + version;
        });
        selected = selected.concat(versions);
      }
      return selected;
    };

    Browsers.prototype.prefix = function(browser) {
      var name, version, _ref;
      _ref = browser.split(' '), name = _ref[0], version = _ref[1];
      if (name === 'opera' && parseFloat(version) >= 15) {
        return '-webkit-';
      } else {
        return this.data[name].prefix;
      }
    };

    Browsers.prototype.isSelected = function(browser) {
      return this.selected.indexOf(browser) !== -1;
    };

    Browsers.prototype.byName = function(name) {
      var data;
      name = name.toLowerCase();
      name = this.aliases[name] || name;
      data = this.data[name];
      if (!data) {
        utils.error("Unknown browser " + browser);
      }
      data.name = name;
      return data;
    };

    return Browsers;

  })();

  module.exports = Browsers;

}).call(this);

},{"../data/browsers":1,"./utils":35}],5:[function(require,module,exports){
(function() {
  var Browsers, Declaration, Prefixer, vendor, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Prefixer = require('./prefixer');

  Browsers = require('./browsers');

  vendor = require('postcss/lib/vendor');

  Declaration = (function(_super) {
    __extends(Declaration, _super);

    function Declaration() {
      _ref = Declaration.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Declaration.prototype.check = function(decl) {
      return true;
    };

    Declaration.prototype.prefixed = function(prop, prefix) {
      return prefix + prop;
    };

    Declaration.prototype.normalize = function(prop) {
      return prop;
    };

    Declaration.prototype.otherPrefixes = function(value, prefix) {
      var other, _i, _len, _ref1;
      _ref1 = Browsers.prefixes();
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        other = _ref1[_i];
        if (other === prefix) {
          continue;
        }
        if (value.indexOf(other) !== -1) {
          return true;
        }
      }
      return false;
    };

    Declaration.prototype.set = function(decl, prefix) {
      decl.prop = this.prefixed(decl.prop, prefix);
      return decl;
    };

    Declaration.prototype.insert = function(decl, prefix) {
      var cloned;
      cloned = this.set(this.clone(decl), prefix);
      if (cloned) {
        return decl.parent.insertBefore(decl, cloned);
      }
    };

    Declaration.prototype.add = function(decl, prefix) {
      var already, prefixed;
      prefixed = this.prefixed(decl.prop, prefix);
      already = this.all.group(decl).up(function(i) {
        return i.prop === prefixed;
      });
      if (already || this.otherPrefixes(decl.value, prefix)) {
        return;
      }
      return this.insert(decl, prefix);
    };

    Declaration.prototype.old = function(prop, prefix) {
      return [this.prefixed(prop, prefix)];
    };

    return Declaration;

  })(Prefixer);

  module.exports = Declaration;

}).call(this);

},{"./browsers":4,"./prefixer":31,"postcss/lib/vendor":52}],6:[function(require,module,exports){
(function() {
  var AlignContent, Declaration, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  AlignContent = (function(_super) {
    __extends(AlignContent, _super);

    function AlignContent() {
      _ref = AlignContent.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AlignContent.names = ['align-content', 'flex-line-pack'];

    AlignContent.oldValues = {
      'flex-end': 'end',
      'flex-start': 'start',
      'space-between': 'justify',
      'space-around': 'distribute'
    };

    AlignContent.prototype.prefixed = function(prop, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2012) {
        return prefix + 'flex-line-pack';
      } else {
        return AlignContent.__super__.prefixed.apply(this, arguments);
      }
    };

    AlignContent.prototype.normalize = function(prop) {
      return 'align-content';
    };

    AlignContent.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec === 2012) {
        decl.value = AlignContent.oldValues[decl.value] || decl.value;
        return AlignContent.__super__.set.call(this, decl, prefix);
      } else if (spec === 'final') {
        return AlignContent.__super__.set.apply(this, arguments);
      }
    };

    return AlignContent;

  })(Declaration);

  module.exports = AlignContent;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],7:[function(require,module,exports){
(function() {
  var AlignItems, Declaration, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  AlignItems = (function(_super) {
    __extends(AlignItems, _super);

    function AlignItems() {
      _ref = AlignItems.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AlignItems.names = ['align-items', 'flex-align', 'box-align'];

    AlignItems.oldValues = {
      'flex-end': 'end',
      'flex-start': 'start'
    };

    AlignItems.prototype.prefixed = function(prop, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2009) {
        return prefix + 'box-align';
      } else if (spec === 2012) {
        return prefix + 'flex-align';
      } else {
        return AlignItems.__super__.prefixed.apply(this, arguments);
      }
    };

    AlignItems.prototype.normalize = function(prop) {
      return 'align-items';
    };

    AlignItems.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec === 2009 || spec === 2012) {
        decl.value = AlignItems.oldValues[decl.value] || decl.value;
        return AlignItems.__super__.set.call(this, decl, prefix);
      } else {
        return AlignItems.__super__.set.apply(this, arguments);
      }
    };

    return AlignItems;

  })(Declaration);

  module.exports = AlignItems;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],8:[function(require,module,exports){
(function() {
  var AlignSelf, Declaration, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  AlignSelf = (function(_super) {
    __extends(AlignSelf, _super);

    function AlignSelf() {
      _ref = AlignSelf.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AlignSelf.names = ['align-self', 'flex-item-align'];

    AlignSelf.oldValues = {
      'flex-end': 'end',
      'flex-start': 'start'
    };

    AlignSelf.prototype.prefixed = function(prop, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2012) {
        return prefix + 'flex-item-align';
      } else {
        return AlignSelf.__super__.prefixed.apply(this, arguments);
      }
    };

    AlignSelf.prototype.normalize = function(prop) {
      return 'align-self';
    };

    AlignSelf.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec === 2012) {
        decl.value = AlignSelf.oldValues[decl.value] || decl.value;
        return AlignSelf.__super__.set.call(this, decl, prefix);
      } else if (spec === 'final') {
        return AlignSelf.__super__.set.apply(this, arguments);
      }
    };

    return AlignSelf;

  })(Declaration);

  module.exports = AlignSelf;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],9:[function(require,module,exports){
(function() {
  var BorderImage, Declaration, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Declaration = require('../declaration');

  BorderImage = (function(_super) {
    __extends(BorderImage, _super);

    function BorderImage() {
      _ref = BorderImage.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    BorderImage.names = ['border-image'];

    BorderImage.prototype.set = function(decl, prefix) {
      decl.value = decl.value.replace(/\s+fill(\s)/, '$1');
      return BorderImage.__super__.set.call(this, decl, prefix);
    };

    return BorderImage;

  })(Declaration);

  module.exports = BorderImage;

}).call(this);

},{"../declaration":5}],10:[function(require,module,exports){
(function() {
  var BorderRadius, Declaration, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Declaration = require('../declaration');

  BorderRadius = (function(_super) {
    var hor, mozilla, normal, ver, _i, _j, _len, _len1, _ref1, _ref2;

    __extends(BorderRadius, _super);

    function BorderRadius() {
      _ref = BorderRadius.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    BorderRadius.names = ['border-radius'];

    BorderRadius.toMozilla = {};

    BorderRadius.toNormal = {};

    _ref1 = ['top', 'bottom'];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      ver = _ref1[_i];
      _ref2 = ['left', 'right'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        hor = _ref2[_j];
        normal = "border-" + ver + "-" + hor + "-radius";
        mozilla = "border-radius-" + ver + hor;
        BorderRadius.names.push(normal);
        BorderRadius.names.push(mozilla);
        BorderRadius.toMozilla[normal] = mozilla;
        BorderRadius.toNormal[mozilla] = normal;
      }
    }

    BorderRadius.prototype.prefixed = function(prop, prefix) {
      if (prefix === '-moz-') {
        return prefix + (BorderRadius.toMozilla[prop] || prop);
      } else {
        return BorderRadius.__super__.prefixed.apply(this, arguments);
      }
    };

    BorderRadius.prototype.normalize = function(prop) {
      return BorderRadius.toNormal[prop] || prop;
    };

    return BorderRadius;

  })(Declaration);

  module.exports = BorderRadius;

}).call(this);

},{"../declaration":5}],11:[function(require,module,exports){
(function() {
  var DisplayFlex, OldDisplayFlex, OldValue, Value, flexSpec,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  OldValue = require('../old-value');

  Value = require('../value');

  OldDisplayFlex = (function(_super) {
    __extends(OldDisplayFlex, _super);

    function OldDisplayFlex(name) {
      this.name = name;
    }

    OldDisplayFlex.prototype.check = function(value) {
      return value === this.name;
    };

    return OldDisplayFlex;

  })(OldValue);

  DisplayFlex = (function(_super) {
    __extends(DisplayFlex, _super);

    DisplayFlex.names = ['display-flex', 'inline-flex'];

    function DisplayFlex(name, prefixes) {
      DisplayFlex.__super__.constructor.apply(this, arguments);
      if (name === 'display-flex') {
        this.name = 'flex';
      }
    }

    DisplayFlex.prototype.check = function(decl) {
      return decl.value === this.name;
    };

    DisplayFlex.prototype.prefixed = function(prefix) {
      var spec, _ref;
      _ref = flexSpec(prefix), spec = _ref[0], prefix = _ref[1];
      if (spec === 2009 && this.name === 'inline-flex') {
        return;
      }
      return prefix + (spec === 2009 ? 'box' : spec === 2012 ? this.name === 'flex' ? 'flexbox' : 'inline-flexbox' : spec === 'final' ? this.name : void 0);
    };

    DisplayFlex.prototype.replace = function(string, prefix) {
      return this.prefixed(prefix);
    };

    DisplayFlex.prototype.old = function(prefix) {
      var prefixed;
      prefixed = this.prefixed(prefix);
      if (prefixed) {
        return new OldValue(prefixed);
      }
    };

    return DisplayFlex;

  })(Value);

  module.exports = DisplayFlex;

}).call(this);

},{"../old-value":30,"../value":36,"./flex-spec":19}],12:[function(require,module,exports){
(function() {
  var FillAvailable, OldValue, Value, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OldValue = require('../old-value');

  Value = require('../value');

  FillAvailable = (function(_super) {
    __extends(FillAvailable, _super);

    function FillAvailable() {
      _ref = FillAvailable.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FillAvailable.names = ['fill-available'];

    FillAvailable.prototype.replace = function(string, prefix) {
      if (prefix === '-moz-') {
        return string.replace(this.regexp(), '$1-moz-available$3');
      } else {
        return FillAvailable.__super__.replace.apply(this, arguments);
      }
    };

    FillAvailable.prototype.old = function(prefix) {
      if (prefix === '-moz-') {
        return new OldValue('-moz-available');
      } else {
        return FillAvailable.__super__.old.apply(this, arguments);
      }
    };

    return FillAvailable;

  })(Value);

  module.exports = FillAvailable;

}).call(this);

},{"../old-value":30,"../value":36}],13:[function(require,module,exports){
(function() {
  var Declaration, Filter, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Declaration = require('../declaration');

  Filter = (function(_super) {
    __extends(Filter, _super);

    function Filter() {
      _ref = Filter.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Filter.names = ['filter'];

    Filter.prototype.check = function(decl) {
      var v;
      v = decl.value;
      return v.indexOf('alpha(') === -1 && v.indexOf('DXImageTransform.Microsoft') === -1;
    };

    return Filter;

  })(Declaration);

  module.exports = Filter;

}).call(this);

},{"../declaration":5}],14:[function(require,module,exports){
(function() {
  var Declaration, FlexBasis, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  FlexBasis = (function(_super) {
    __extends(FlexBasis, _super);

    function FlexBasis() {
      _ref = FlexBasis.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FlexBasis.names = ['flex-basis'];

    FlexBasis.prototype.normalize = function() {
      return 'flex';
    };

    FlexBasis.prototype.prefixed = function(prop, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2012) {
        return prefix + 'flex';
      } else {
        return FlexBasis.__super__.prefixed.apply(this, arguments);
      }
    };

    FlexBasis.prototype.set = function(decl, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2012) {
        decl.prop = prefix + 'flex';
        decl.value = '0 1 ' + decl.value;
        return decl;
      } else if (spec === 'final') {
        return FlexBasis.__super__.set.apply(this, arguments);
      }
    };

    return FlexBasis;

  })(Declaration);

  module.exports = FlexBasis;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],15:[function(require,module,exports){
(function() {
  var Declaration, FlexDirection, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  FlexDirection = (function(_super) {
    __extends(FlexDirection, _super);

    function FlexDirection() {
      _ref = FlexDirection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FlexDirection.names = ['flex-direction', 'box-direction', 'box-orient'];

    FlexDirection.prototype.normalize = function(prop) {
      return 'flex-direction';
    };

    FlexDirection.prototype.insert = function(decl, prefix) {
      var already, cloned, dir, orient, spec, value, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2009) {
        already = decl.parent.some(function(i) {
          return i.prop === prefix + 'box-orient' || i.prop === prefix + 'box-direction';
        });
        if (already) {
          return;
        }
        value = decl.value;
        orient = value.indexOf('row') !== -1 ? 'horizontal' : 'vertical';
        dir = value.indexOf('reverse') !== -1 ? 'reverse' : 'normal';
        cloned = this.clone(decl);
        cloned.prop = prefix + 'box-orient';
        cloned.value = orient;
        decl.parent.insertBefore(decl, cloned);
        cloned = this.clone(decl);
        cloned.prop = prefix + 'box-direction';
        cloned.value = dir;
        return decl.parent.insertBefore(decl, cloned);
      } else {
        return FlexDirection.__super__.insert.apply(this, arguments);
      }
    };

    FlexDirection.prototype.old = function(prop, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2009) {
        return [prefix + 'box-orient', prefix + 'box-direction'];
      } else {
        return FlexDirection.__super__.old.apply(this, arguments);
      }
    };

    return FlexDirection;

  })(Declaration);

  module.exports = FlexDirection;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],16:[function(require,module,exports){
(function() {
  var Declaration, FlexFlow, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  FlexFlow = (function(_super) {
    __extends(FlexFlow, _super);

    function FlexFlow() {
      _ref = FlexFlow.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FlexFlow.names = ['flex-flow'];

    FlexFlow.prototype.set = function(decl, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2012) {
        return FlexFlow.__super__.set.apply(this, arguments);
      } else if (spec === 'final') {
        return FlexFlow.__super__.set.apply(this, arguments);
      }
    };

    return FlexFlow;

  })(Declaration);

  module.exports = FlexFlow;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],17:[function(require,module,exports){
(function() {
  var Declaration, Flex, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  Flex = (function(_super) {
    __extends(Flex, _super);

    function Flex() {
      _ref = Flex.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Flex.names = ['flex-grow'];

    Flex.prototype.normalize = function() {
      return 'flex';
    };

    Flex.prototype.prefixed = function(prop, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2009) {
        return prefix + 'box-flex';
      } else if (spec === 2012) {
        return prefix + 'flex';
      } else {
        return Flex.__super__.prefixed.apply(this, arguments);
      }
    };

    return Flex;

  })(Declaration);

  module.exports = Flex;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],18:[function(require,module,exports){
(function() {
  var Declaration, FlexShrink, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  FlexShrink = (function(_super) {
    __extends(FlexShrink, _super);

    function FlexShrink() {
      _ref = FlexShrink.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FlexShrink.names = ['flex-shrink'];

    FlexShrink.prototype.normalize = function() {
      return 'flex';
    };

    FlexShrink.prototype.prefixed = function(prop, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2012) {
        return prefix + 'flex';
      } else {
        return FlexShrink.__super__.prefixed.apply(this, arguments);
      }
    };

    FlexShrink.prototype.set = function(decl, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2012) {
        decl.prop = prefix + 'flex';
        decl.value = '0 ' + decl.value;
        return decl;
      } else if (spec === 'final') {
        return FlexShrink.__super__.set.apply(this, arguments);
      }
    };

    return FlexShrink;

  })(Declaration);

  module.exports = FlexShrink;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],19:[function(require,module,exports){
(function() {
  module.exports = function(prefix) {
    var spec;
    spec = prefix === '-webkit- 2009' || prefix === '-moz-' ? 2009 : prefix === '-ms-' ? 2012 : prefix === '-webkit-' ? 'final' : void 0;
    if (prefix === '-webkit- 2009') {
      prefix = '-webkit-';
    }
    return [spec, prefix];
  };

}).call(this);

},{}],20:[function(require,module,exports){
(function() {
  var Declaration, FlexWrap, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  FlexWrap = (function(_super) {
    __extends(FlexWrap, _super);

    function FlexWrap() {
      _ref = FlexWrap.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FlexWrap.names = ['flex-wrap'];

    FlexWrap.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec !== 2009) {
        return FlexWrap.__super__.set.apply(this, arguments);
      }
    };

    return FlexWrap;

  })(Declaration);

  module.exports = FlexWrap;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],21:[function(require,module,exports){
(function() {
  var Declaration, Flex, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  Flex = (function(_super) {
    __extends(Flex, _super);

    function Flex() {
      _ref = Flex.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Flex.names = ['flex', 'box-flex'];

    Flex.prototype.prefixed = function(prop, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2009) {
        return prefix + 'box-flex';
      } else {
        return Flex.__super__.prefixed.apply(this, arguments);
      }
    };

    Flex.prototype.normalize = function(prop) {
      return 'flex';
    };

    Flex.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec === 2009) {
        decl.value = decl.value.split(' ')[0];
        return Flex.__super__.set.call(this, decl, prefix);
      } else {
        return Flex.__super__.set.apply(this, arguments);
      }
    };

    return Flex;

  })(Declaration);

  module.exports = Flex;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],22:[function(require,module,exports){
(function() {
  var Fullscreen, Selector, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Selector = require('../selector');

  Fullscreen = (function(_super) {
    __extends(Fullscreen, _super);

    function Fullscreen() {
      _ref = Fullscreen.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Fullscreen.names = [':fullscreen'];

    Fullscreen.prototype.prefixed = function(prefix) {
      if ('-webkit-' === prefix) {
        return ':-webkit-full-screen';
      } else if ('-moz-' === prefix) {
        return ':-moz-full-screen';
      } else {
        return ":" + prefix + "fullscreen";
      }
    };

    return Fullscreen;

  })(Selector);

  module.exports = Fullscreen;

}).call(this);

},{"../selector":34}],23:[function(require,module,exports){
(function() {
  var Gradient, OldValue, Value, isDirection, list, utils, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  OldValue = require('../old-value');

  Value = require('../value');

  utils = require('../utils');

  list = require('postcss/lib/list');

  isDirection = new RegExp('(top|left|right|bottom)', 'gi');

  Gradient = (function(_super) {
    __extends(Gradient, _super);

    function Gradient() {
      _ref = Gradient.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Gradient.names = ['linear-gradient', 'repeating-linear-gradient', 'radial-gradient', 'repeating-radial-gradient'];

    Gradient.prototype.replace = function(string, prefix) {
      var values,
        _this = this;
      values = list.comma(string).map(function(value) {
        var after, args, close, params;
        if (value.slice(0, +_this.name.length + 1 || 9e9) !== _this.name + '(') {
          return value;
        }
        close = value.lastIndexOf(')');
        after = value.slice(close + 1);
        args = value.slice(_this.name.length + 1, +(close - 1) + 1 || 9e9);
        params = list.comma(args);
        params = _this.newDirection(params);
        if (prefix === '-webkit- old') {
          return _this.oldWebkit(value, args, params, after);
        } else {
          _this.convertDirection(params);
          return prefix + _this.name + '(' + params.join(', ') + ')' + after;
        }
      });
      return values.join(', ');
    };

    Gradient.prototype.directions = {
      top: 'bottom',
      left: 'right',
      bottom: 'top',
      right: 'left'
    };

    Gradient.prototype.oldDirections = {
      'top': 'left bottom, left top',
      'left': 'right top, left top',
      'bottom': 'left top, left bottom',
      'right': 'left top, right top',
      'top right': 'left bottom, right top',
      'top left': 'right bottom, left top',
      'bottom right': 'left top, right bottom',
      'bottom left': 'right top, left bottom'
    };

    Gradient.prototype.newDirection = function(params) {
      var first, value;
      first = params[0];
      if (first.indexOf('to ') === -1 && isDirection.test(first)) {
        first = first.split(' ');
        first = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = first.length; _i < _len; _i++) {
            value = first[_i];
            _results.push(this.directions[value.toLowerCase()] || value);
          }
          return _results;
        }).call(this);
        params[0] = 'to ' + first.join(' ');
      }
      return params;
    };

    Gradient.prototype.oldWebkit = function(value, args, params, after) {
      if (this.name !== 'linear-gradient') {
        return value;
      }
      if (params[0] && params[0].indexOf('deg') !== -1) {
        return value;
      }
      if (args.indexOf('-corner') !== -1) {
        return value;
      }
      if (args.indexOf('-side') !== -1) {
        return value;
      }
      params = this.oldDirection(params);
      params = this.colorStops(params);
      return '-webkit-gradient(linear, ' + params.join(', ') + ')' + after;
    };

    Gradient.prototype.convertDirection = function(params) {
      if (params.length > 0) {
        if (params[0].slice(0, 3) === 'to ') {
          return params[0] = this.fixDirection(params[0]);
        } else if (params[0].indexOf('deg') !== -1) {
          return params[0] = this.fixAngle(params[0]);
        } else if (params[0].indexOf(' at ') !== -1) {
          return this.fixRadial(params);
        }
      }
    };

    Gradient.prototype.fixDirection = function(param) {
      var value;
      param = param.split(' ');
      param.splice(0, 1);
      param = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = param.length; _i < _len; _i++) {
          value = param[_i];
          _results.push(this.directions[value.toLowerCase()] || value);
        }
        return _results;
      }).call(this);
      return param.join(' ');
    };

    Gradient.prototype.roundFloat = function(float, digits) {
      return parseFloat(float.toFixed(digits));
    };

    Gradient.prototype.fixAngle = function(param) {
      param = parseFloat(param);
      param = Math.abs(450 - param) % 360;
      param = this.roundFloat(param, 3);
      return "" + param + "deg";
    };

    Gradient.prototype.oldDirection = function(params) {
      var direction;
      if (params.length === 0) {
        params;
      }
      if (params[0].indexOf('to ') !== -1) {
        direction = params[0].replace(/^to\s+/, '');
        direction = this.oldDirections[direction];
        params[0] = direction;
        return params;
      } else {
        direction = this.oldDirections.bottom;
        return [direction].concat(params);
      }
    };

    Gradient.prototype.colorStops = function(params) {
      return params.map(function(param, i) {
        var color, position, separator;
        if (i === 0) {
          return param;
        }
        separator = param.lastIndexOf(' ');
        if (separator === -1) {
          color = param;
          position = void 0;
        } else {
          color = param.slice(0, separator);
          position = param.slice(separator + 1);
        }
        if (position && position.indexOf(')') !== -1) {
          color += ' ' + position;
          position = void 0;
        }
        if (i === 1) {
          return "from(" + color + ")";
        } else if (i === params.length - 1) {
          return "to(" + color + ")";
        } else if (position) {
          return "color-stop(" + position + ", " + color + ")";
        } else {
          return "color-stop(" + color + ")";
        }
      });
    };

    Gradient.prototype.fixRadial = function(params) {
      var first;
      first = params[0].split(/\s+at\s+/);
      return params.splice(0, 1, first[1], first[0]);
    };

    Gradient.prototype.old = function(prefix) {
      var regexp, string, type;
      if (prefix === '-webkit-') {
        type = this.name === 'linear-gradient' ? 'linear' : 'radial';
        string = '-gradient';
        regexp = utils.regexp("-webkit-(" + type + "-gradient|gradient\\(\\s*" + type + ")", false);
        return new OldValue(prefix + this.name, string, regexp);
      } else {
        return Gradient.__super__.old.apply(this, arguments);
      }
    };

    return Gradient;

  })(Value);

  module.exports = Gradient;

}).call(this);

},{"../old-value":30,"../utils":35,"../value":36,"postcss/lib/list":43}],24:[function(require,module,exports){
(function() {
  var Declaration, JustifyContent, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  JustifyContent = (function(_super) {
    __extends(JustifyContent, _super);

    function JustifyContent() {
      _ref = JustifyContent.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    JustifyContent.names = ['justify-content', 'flex-pack', 'box-pack'];

    JustifyContent.oldValues = {
      'flex-end': 'end',
      'flex-start': 'start',
      'space-between': 'justify',
      'space-around': 'distribute'
    };

    JustifyContent.prototype.prefixed = function(prop, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2009) {
        return prefix + 'box-pack';
      } else if (spec === 2012) {
        return prefix + 'flex-pack';
      } else {
        return JustifyContent.__super__.prefixed.apply(this, arguments);
      }
    };

    JustifyContent.prototype.normalize = function(prop) {
      return 'justify-content';
    };

    JustifyContent.prototype.set = function(decl, prefix) {
      var spec, value;
      spec = flexSpec(prefix)[0];
      if (spec === 2009 || spec === 2012) {
        value = JustifyContent.oldValues[decl.value] || decl.value;
        decl.value = value;
        if (spec !== 2009 || value !== 'distribute') {
          return JustifyContent.__super__.set.call(this, decl, prefix);
        }
      } else if (spec === 'final') {
        return JustifyContent.__super__.set.apply(this, arguments);
      }
    };

    return JustifyContent;

  })(Declaration);

  module.exports = JustifyContent;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],25:[function(require,module,exports){
(function() {
  var Declaration, Order, flexSpec, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  flexSpec = require('./flex-spec');

  Declaration = require('../declaration');

  Order = (function(_super) {
    __extends(Order, _super);

    function Order() {
      _ref = Order.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Order.names = ['order', 'flex-order', 'box-ordinal-group'];

    Order.prototype.prefixed = function(prop, prefix) {
      var spec, _ref1;
      _ref1 = flexSpec(prefix), spec = _ref1[0], prefix = _ref1[1];
      if (spec === 2009) {
        return prefix + 'box-ordinal-group';
      } else if (spec === 2012) {
        return prefix + 'flex-order';
      } else {
        return Order.__super__.prefixed.apply(this, arguments);
      }
    };

    Order.prototype.normalize = function(prop) {
      return 'order';
    };

    Order.prototype.set = function(decl, prefix) {
      var spec;
      spec = flexSpec(prefix)[0];
      if (spec === 2009) {
        decl.value = (parseInt(decl.value) + 1).toString();
        return Order.__super__.set.call(this, decl, prefix);
      } else {
        return Order.__super__.set.apply(this, arguments);
      }
    };

    return Order;

  })(Declaration);

  module.exports = Order;

}).call(this);

},{"../declaration":5,"./flex-spec":19}],26:[function(require,module,exports){
(function() {
  var Placeholder, Selector, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Selector = require('../selector');

  Placeholder = (function(_super) {
    __extends(Placeholder, _super);

    function Placeholder() {
      _ref = Placeholder.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Placeholder.names = ['::placeholder'];

    Placeholder.prototype.prefixed = function(prefix) {
      if ('-webkit-' === prefix) {
        return '::-webkit-input-placeholder';
      } else if ('-ms-' === prefix) {
        return ':-ms-input-placeholder';
      } else {
        return "::" + prefix + "placeholder";
      }
    };

    return Placeholder;

  })(Selector);

  module.exports = Placeholder;

}).call(this);

},{"../selector":34}],27:[function(require,module,exports){
(function() {
  var Transform, Value, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Value = require('../value');

  Transform = (function(_super) {
    __extends(Transform, _super);

    function Transform() {
      _ref = Transform.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Transform.names = ['transform'];

    Transform.prototype.replace = function(value, prefix) {
      if (prefix === '-ms-') {
        return value;
      } else {
        return Transform.__super__.replace.apply(this, arguments);
      }
    };

    return Transform;

  })(Value);

  module.exports = Transform;

}).call(this);

},{"../value":36}],28:[function(require,module,exports){
(function() {
  var capitalize, names, prefix;

  capitalize = function(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };

  names = {
    ie: 'IE',
    ff: 'Firefox',
    ios: 'iOS'
  };

  prefix = function(name, transition, prefixes) {
    var out;
    out = '  ' + name + (transition ? '*' : '') + ': ';
    out += prefixes.map(function(i) {
      return i.replace(/^-(.*)-$/g, '$1');
    }).join(', ');
    out += "\n";
    return out;
  };

  module.exports = function(prefixes) {
    var browser, data, list, name, needTransition, out, props, string, transitionProp, useTransition, value, values, version, versions, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4;
    if (prefixes.browsers.selected.length === 0) {
      return "No browsers selected";
    }
    versions = [];
    _ref = prefixes.browsers.selected;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      browser = _ref[_i];
      _ref1 = browser.split(' '), name = _ref1[0], version = _ref1[1];
      name = names[name] || capitalize(name);
      if (versions[name]) {
        versions[name].push(version);
      } else {
        versions[name] = [version];
      }
    }
    out = "Browsers:\n";
    for (browser in versions) {
      list = versions[browser];
      list = list.sort(function(a, b) {
        return parseFloat(b) - parseFloat(a);
      });
      out += '  ' + browser + ': ' + list.join(', ') + "\n";
    }
    values = '';
    props = '';
    useTransition = false;
    needTransition = (_ref2 = prefixes.add.transition) != null ? _ref2.prefixes : void 0;
    _ref3 = prefixes.add;
    for (name in _ref3) {
      data = _ref3[name];
      if (data.prefixes) {
        transitionProp = needTransition && prefixes.data[name].transition;
        if (transitionProp) {
          useTransition = true;
        }
        props += prefix(name, transitionProp, data.prefixes);
      }
      if (!data.values) {
        continue;
      }
      if (prefixes.transitionProps.some(function(i) {
        return i === name;
      })) {
        continue;
      }
      _ref4 = data.values;
      for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
        value = _ref4[_j];
        string = prefix(value.name, false, value.prefixes);
        if (values.indexOf(string) === -1) {
          values += string;
        }
      }
    }
    if (useTransition) {
      props += "  * - can be used in transition\n";
    }
    if (props !== '') {
      out += "\nProperties:\n" + props;
    }
    if (values !== '') {
      out += "\nValues:\n" + values;
    }
    return out;
  };

}).call(this);

},{}],29:[function(require,module,exports){
(function() {
  var Keyframes, Prefixer, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Prefixer = require('./prefixer');

  Keyframes = (function(_super) {
    __extends(Keyframes, _super);

    function Keyframes() {
      _ref = Keyframes.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Keyframes.prototype.check = function(atRule) {
      return atRule.name === 'keyframes';
    };

    Keyframes.prototype.add = function(atRule, prefix) {
      var already, cloned, prefixed;
      prefixed = prefix + atRule.name;
      already = atRule.parent.some(function(i) {
        return i.name === prefixed && i.params === atRule.params;
      });
      if (already) {
        return;
      }
      cloned = this.clone(atRule, {
        name: prefixed
      });
      return atRule.parent.insertBefore(atRule, cloned);
    };

    return Keyframes;

  })(Prefixer);

  module.exports = Keyframes;

}).call(this);

},{"./prefixer":31}],30:[function(require,module,exports){
(function() {
  var OldValue, utils;

  utils = require('./utils');

  OldValue = (function() {
    function OldValue(name, string, regexp) {
      this.name = name;
      this.string = string;
      this.regexp = regexp;
      this.regexp || (this.regexp = utils.regexp(this.name));
      this.string || (this.string = this.name);
    }

    OldValue.prototype.check = function(value) {
      if (value.indexOf(this.string) !== -1) {
        return !!value.match(this.regexp);
      } else {
        return false;
      }
    };

    return OldValue;

  })();

  module.exports = OldValue;

}).call(this);

},{"./utils":35}],31:[function(require,module,exports){
(function() {
  var Browsers, Prefixer, utils, vendor;

  Browsers = require('./browsers');

  vendor = require('postcss/lib/vendor');

  utils = require('./utils');

  Prefixer = (function() {
    Prefixer.hack = function(klass) {
      var name, _i, _len, _ref, _results;
      this.hacks || (this.hacks = {});
      _ref = klass.names;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        _results.push(this.hacks[name] = klass);
      }
      return _results;
    };

    Prefixer.load = function(name, prefixes, all) {
      var klass, _ref;
      klass = (_ref = this.hacks) != null ? _ref[name] : void 0;
      if (klass) {
        return new klass(name, prefixes, all);
      } else {
        return new this(name, prefixes, all);
      }
    };

    Prefixer.clone = function(node, overrides) {
      var cloned;
      cloned = node.clone(overrides);
      delete cloned._autoprefixerPrefix;
      delete cloned._autoprefixerValues;
      return cloned;
    };

    function Prefixer(name, prefixes, all) {
      this.name = name;
      this.prefixes = prefixes;
      this.all = all;
    }

    Prefixer.prototype.parentPrefix = function(node) {
      var prefix;
      prefix = node._autoprefixerPrefix != null ? node._autoprefixerPrefix : node.type === 'decl' && node.prop[0] === '-' ? vendor.prefix(node.prop) : node.type === 'root' ? false : node.type === 'rule' && node.selector.indexOf(':-') !== -1 ? node.selector.match(/:(-\w+-)/)[1] : node.type === 'atrule' && node.name[0] === '-' ? vendor.prefix(node.name) : this.parentPrefix(node.parent);
      if (Browsers.prefixes().indexOf(prefix) === -1) {
        prefix = false;
      }
      return node._autoprefixerPrefix = prefix;
    };

    Prefixer.prototype.process = function(node) {
      var parent, prefix, _i, _len, _ref, _results;
      if (!this.check(node)) {
        return;
      }
      parent = this.parentPrefix(node);
      _ref = this.prefixes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        prefix = _ref[_i];
        if (parent && parent !== utils.removeNote(prefix)) {
          continue;
        }
        _results.push(this.add(node, prefix));
      }
      return _results;
    };

    Prefixer.prototype.clone = function(node, overrides) {
      return Prefixer.clone(node, overrides);
    };

    return Prefixer;

  })();

  module.exports = Prefixer;

}).call(this);

},{"./browsers":4,"./utils":35,"postcss/lib/vendor":52}],32:[function(require,module,exports){
(function() {
  var Declaration, Keyframes, Prefixes, Processor, Selector, Value, declsCache, utils, vendor;

  utils = require('./utils');

  vendor = require('postcss/lib/vendor');

  Processor = require('./processor');

  Declaration = require('./declaration');

  Keyframes = require('./keyframes');

  Selector = require('./selector');

  Value = require('./value');

  Selector.hack(require('./hacks/fullscreen'));

  Selector.hack(require('./hacks/placeholder'));

  Declaration.hack(require('./hacks/flex'));

  Declaration.hack(require('./hacks/order'));

  Declaration.hack(require('./hacks/filter'));

  Declaration.hack(require('./hacks/flex-flow'));

  Declaration.hack(require('./hacks/flex-grow'));

  Declaration.hack(require('./hacks/flex-wrap'));

  Declaration.hack(require('./hacks/align-self'));

  Declaration.hack(require('./hacks/flex-basis'));

  Declaration.hack(require('./hacks/align-items'));

  Declaration.hack(require('./hacks/flex-shrink'));

  Declaration.hack(require('./hacks/border-image'));

  Declaration.hack(require('./hacks/align-content'));

  Declaration.hack(require('./hacks/border-radius'));

  Declaration.hack(require('./hacks/flex-direction'));

  Declaration.hack(require('./hacks/justify-content'));

  Value.hack(require('./hacks/gradient'));

  Value.hack(require('./hacks/transform'));

  Value.hack(require('./hacks/display-flex'));

  Value.hack(require('./hacks/fill-available'));

  declsCache = {};

  Prefixes = (function() {
    function Prefixes(data, browsers) {
      var _ref;
      this.data = data;
      this.browsers = browsers;
      _ref = this.preprocess(this.select(this.data)), this.add = _ref[0], this.remove = _ref[1];
      this.processor = new Processor(this);
    }

    Prefixes.prototype.transitionProps = ['transition', 'transition-property'];

    Prefixes.prototype.select = function(list) {
      var add, all, data, name, notes, selected,
        _this = this;
      selected = {
        add: {},
        remove: {}
      };
      for (name in list) {
        data = list[name];
        add = data.browsers.map(function(i) {
          var params;
          params = i.split(' ');
          return {
            browser: params[0] + ' ' + params[1],
            note: params[2]
          };
        });
        notes = add.filter(function(i) {
          return i.note;
        }).map(function(i) {
          return _this.browsers.prefix(i.browser) + ' ' + i.note;
        });
        notes = utils.uniq(notes);
        add = add.filter(function(i) {
          return _this.browsers.isSelected(i.browser);
        }).map(function(i) {
          var prefix;
          prefix = _this.browsers.prefix(i.browser);
          if (i.note) {
            return prefix + ' ' + i.note;
          } else {
            return prefix;
          }
        });
        add = utils.uniq(add).sort(function(a, b) {
          return b.length - a.length;
        });
        all = data.browsers.map(function(i) {
          return _this.browsers.prefix(i);
        });
        if (data.mistakes) {
          all = all.concat(data.mistakes);
        }
        all = all.concat(notes);
        all = utils.uniq(all);
        if (add.length) {
          selected.add[name] = add;
          if (add.length < all.length) {
            selected.remove[name] = all.filter(function(i) {
              return add.indexOf(i) === -1;
            });
          }
        } else {
          selected.remove[name] = all;
        }
      }
      return selected;
    };

    Prefixes.prototype.preprocess = function(selected) {
      var add, name, old, olds, prefix, prefixed, prefixes, prop, props, remove, selector, value, values, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _len6, _m, _n, _o, _ref, _ref1, _ref2;
      add = {
        selectors: []
      };
      _ref = selected.add;
      for (name in _ref) {
        prefixes = _ref[name];
        if (name === '@keyframes') {
          add[name] = new Keyframes(name, prefixes, this);
        } else if (this.data[name].selector) {
          add.selectors.push(Selector.load(name, prefixes, this));
        } else {
          props = this.data[name].transition ? this.transitionProps : this.data[name].props;
          if (props) {
            value = Value.load(name, prefixes, this);
            for (_i = 0, _len = props.length; _i < _len; _i++) {
              prop = props[_i];
              if (!add[prop]) {
                add[prop] = {
                  values: []
                };
              }
              add[prop].values.push(value);
            }
          }
          if (!this.data[name].props) {
            values = ((_ref1 = add[name]) != null ? _ref1.values : void 0) || [];
            add[name] = Declaration.load(name, prefixes, this);
            add[name].values = values;
          }
        }
      }
      remove = {
        selectors: []
      };
      _ref2 = selected.remove;
      for (name in _ref2) {
        prefixes = _ref2[name];
        if (this.data[name].selector) {
          selector = Selector.load(name, prefixes);
          for (_j = 0, _len1 = prefixes.length; _j < _len1; _j++) {
            prefix = prefixes[_j];
            remove.selectors.push(selector.prefixed(prefix));
          }
        } else if (name[0] === '@') {
          for (_k = 0, _len2 = prefixes.length; _k < _len2; _k++) {
            prefix = prefixes[_k];
            prefixed = '@' + prefix + name.slice(1);
            remove[prefixed] = {
              remove: true
            };
          }
        } else {
          props = this.data[name].transition ? this.transitionProps : this.data[name].props;
          if (props) {
            value = Value.load(name);
            for (_l = 0, _len3 = prefixes.length; _l < _len3; _l++) {
              prefix = prefixes[_l];
              old = value.old(prefix);
              if (old) {
                for (_m = 0, _len4 = props.length; _m < _len4; _m++) {
                  prop = props[_m];
                  if (!remove[prop]) {
                    remove[prop] = {};
                  }
                  if (!remove[prop].values) {
                    remove[prop].values = [];
                  }
                  remove[prop].values.push(old);
                }
              }
            }
          }
          if (!this.data[name].props) {
            for (_n = 0, _len5 = prefixes.length; _n < _len5; _n++) {
              prefix = prefixes[_n];
              prop = vendor.unprefixed(name);
              olds = this.decl(name).old(name, prefix);
              for (_o = 0, _len6 = olds.length; _o < _len6; _o++) {
                prefixed = olds[_o];
                if (!remove[prefixed]) {
                  remove[prefixed] = {};
                }
                remove[prefixed].remove = true;
              }
            }
          }
        }
      }
      return [add, remove];
    };

    Prefixes.prototype.decl = function(prop) {
      var decl;
      decl = declsCache[prop];
      if (decl) {
        return decl;
      } else {
        return declsCache[prop] = Declaration.load(prop);
      }
    };

    Prefixes.prototype.unprefixed = function(prop) {
      prop = vendor.unprefixed(prop);
      return this.decl(prop).normalize(prop);
    };

    Prefixes.prototype.prefixed = function(prop, prefix) {
      prop = vendor.unprefixed(prop);
      return this.decl(prop).prefixed(prop, prefix);
    };

    Prefixes.prototype.values = function(type, prop) {
      var data, global, values, _ref, _ref1;
      data = this[type];
      global = (_ref = data['*']) != null ? _ref.values : void 0;
      values = (_ref1 = data[prop]) != null ? _ref1.values : void 0;
      if (global && values) {
        return utils.uniq(global.concat(values));
      } else {
        return global || values || [];
      }
    };

    Prefixes.prototype.group = function(decl) {
      var checker, index, length, rule, unprefixed,
        _this = this;
      rule = decl.parent;
      index = rule.index(decl);
      length = rule.decls.length;
      unprefixed = this.unprefixed(decl.prop);
      checker = function(step, callback) {
        var other;
        index += step;
        while (index >= 0 && index < length) {
          other = rule.decls[index];
          if (_this.unprefixed(other.prop) !== unprefixed) {
            break;
          } else if (callback(other) === true) {
            return true;
          }
          index += step;
        }
        return false;
      };
      return {
        up: function(callback) {
          return checker(-1, callback);
        },
        down: function(callback) {
          return checker(+1, callback);
        }
      };
    };

    return Prefixes;

  })();

  module.exports = Prefixes;

}).call(this);

},{"./declaration":5,"./hacks/align-content":6,"./hacks/align-items":7,"./hacks/align-self":8,"./hacks/border-image":9,"./hacks/border-radius":10,"./hacks/display-flex":11,"./hacks/fill-available":12,"./hacks/filter":13,"./hacks/flex":21,"./hacks/flex-basis":14,"./hacks/flex-direction":15,"./hacks/flex-flow":16,"./hacks/flex-grow":17,"./hacks/flex-shrink":18,"./hacks/flex-wrap":20,"./hacks/fullscreen":22,"./hacks/gradient":23,"./hacks/justify-content":24,"./hacks/order":25,"./hacks/placeholder":26,"./hacks/transform":27,"./keyframes":29,"./processor":33,"./selector":34,"./utils":35,"./value":36,"postcss/lib/vendor":52}],33:[function(require,module,exports){
(function() {
  var Processor, Value, utils, vendor;

  vendor = require('postcss/lib/vendor');

  Value = require('./value');

  utils = require('./utils');

  Processor = (function() {
    function Processor(prefixes) {
      this.prefixes = prefixes;
    }

    Processor.prototype.add = function(css) {
      var prefixer, selector, _i, _len, _ref,
        _this = this;
      prefixer = this.prefixes.add['@keyframes'];
      if (prefixer) {
        css.eachAtRule(function(rule) {
          return prefixer.process(rule);
        });
      }
      _ref = this.prefixes.add.selectors;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        selector = _ref[_i];
        css.eachRule(function(rule) {
          return selector.process(rule);
        });
      }
      css.eachDecl(function(decl) {
        var prefix;
        prefix = _this.prefixes.add[decl.prop];
        if (prefix && prefix.prefixes) {
          return prefix.process(decl);
        }
      });
      return css.eachDecl(function(decl) {
        var unprefixed, value, _j, _len1, _ref1;
        unprefixed = _this.prefixes.unprefixed(decl.prop);
        _ref1 = _this.prefixes.values('add', unprefixed);
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          value = _ref1[_j];
          value.process(decl);
        }
        return Value.save(_this.prefixes, decl);
      });
    };

    Processor.prototype.remove = function(css) {
      var selector, _i, _len, _ref,
        _this = this;
      css.eachAtRule(function(rule, i) {
        if (_this.prefixes.remove['@' + rule.name]) {
          return rule.parent.remove(i);
        }
      });
      _ref = this.prefixes.remove.selectors;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        selector = _ref[_i];
        css.eachRule(function(rule, i) {
          if (rule.selector.indexOf(selector) !== -1) {
            return rule.parent.remove(i);
          }
        });
      }
      return css.eachDecl(function(decl, i) {
        var checker, notHack, rule, unprefixed, _j, _len1, _ref1, _ref2;
        rule = decl.parent;
        unprefixed = _this.prefixes.unprefixed(decl.prop);
        if ((_ref1 = _this.prefixes.remove[decl.prop]) != null ? _ref1.remove : void 0) {
          notHack = _this.prefixes.group(decl).down(function(i) {
            return i.prop === unprefixed;
          });
          if (notHack) {
            rule.remove(i);
            return;
          }
        }
        _ref2 = _this.prefixes.values('remove', unprefixed);
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          checker = _ref2[_j];
          if (checker.check(decl.value)) {
            rule.remove(i);
            return;
          }
        }
      });
    };

    return Processor;

  })();

  module.exports = Processor;

}).call(this);

},{"./utils":35,"./value":36,"postcss/lib/vendor":52}],34:[function(require,module,exports){
(function() {
  var Prefixer, Selector, utils, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Prefixer = require('./prefixer');

  utils = require('./utils');

  Selector = (function(_super) {
    __extends(Selector, _super);

    function Selector() {
      _ref = Selector.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Selector.prototype.check = function(rule) {
      return rule.selector.indexOf(this.name) !== -1;
    };

    Selector.prototype.prefixed = function(prefix) {
      return this.name.replace(/^([^\w]*)/, '$1' + prefix);
    };

    Selector.prototype.regexp = function() {
      return this.regexpCache || (this.regexpCache = new RegExp(utils.escapeRegexp(this.name), 'gi'));
    };

    Selector.prototype.replace = function(selector, prefix) {
      return selector.replace(this.regexp(), this.prefixed(prefix));
    };

    Selector.prototype.add = function(rule, prefix) {
      var cloned, prefixed;
      prefixed = this.replace(rule.selector, prefix);
      if (rule.parent.some(function(i) {
        return i.selector === prefixed;
      })) {
        return;
      }
      cloned = this.clone(rule, {
        selector: prefixed
      });
      return rule.parent.insertBefore(rule, cloned);
    };

    return Selector;

  })(Prefixer);

  module.exports = Selector;

}).call(this);

},{"./prefixer":31,"./utils":35}],35:[function(require,module,exports){
(function() {
  module.exports = {
    error: function(text) {
      var err;
      err = new Error(text);
      err.autoprefixer = true;
      throw err;
    },
    uniq: function(array) {
      var filtered, i, _i, _len;
      filtered = [];
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        i = array[_i];
        if (filtered.indexOf(i) === -1) {
          filtered.push(i);
        }
      }
      return filtered;
    },
    removeNote: function(string) {
      if (string.indexOf(' ') === -1) {
        return string;
      } else {
        return string.split(' ')[0];
      }
    },
    escapeRegexp: function(string) {
      return string.replace(/([.?*+\^\$\[\]\\(){}|\-])/g, "\\$1");
    },
    regexp: function(word, escape) {
      if (escape == null) {
        escape = true;
      }
      if (escape) {
        word = this.escapeRegexp(word);
      }
      return new RegExp('(^|\\s|,|\\()(' + word + '($|\\s|\\(|,))', 'gi');
    }
  };

}).call(this);

},{}],36:[function(require,module,exports){
(function() {
  var OldValue, Prefixer, Value, utils, vendor, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Prefixer = require('./prefixer');

  OldValue = require('./old-value');

  vendor = require('postcss/lib/vendor');

  utils = require('./utils');

  Value = (function(_super) {
    __extends(Value, _super);

    function Value() {
      _ref = Value.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Value.save = function(prefixes, decl) {
      var cloned, prefix, prefixed, propPrefix, rule, value, _ref1, _results;
      _ref1 = decl._autoprefixerValues;
      _results = [];
      for (prefix in _ref1) {
        value = _ref1[prefix];
        if (value === decl.value) {
          continue;
        }
        propPrefix = vendor.prefix(decl.prop);
        if (propPrefix === utils.removeNote(prefix)) {
          _results.push(decl.value = value);
        } else if (propPrefix === '-pie-') {
          continue;
        } else {
          prefixed = prefixes.prefixed(decl.prop, prefix);
          rule = decl.parent;
          if (rule.every(function(i) {
            return i.prop !== prefixed;
          })) {
            if (rule.every(function(i) {
              return i.prop !== decl.prop || i.value !== value;
            })) {
              cloned = this.clone(decl, {
                value: value
              });
              _results.push(decl.parent.insertBefore(decl, cloned));
            } else {
              _results.push(void 0);
            }
          } else {
            _results.push(void 0);
          }
        }
      }
      return _results;
    };

    Value.prototype.check = function(decl) {
      var value;
      value = decl.value;
      if (value.indexOf(this.name) !== -1) {
        return !!value.match(this.regexp());
      } else {
        return false;
      }
    };

    Value.prototype.regexp = function() {
      return this.regexpCache || (this.regexpCache = utils.regexp(this.name));
    };

    Value.prototype.replace = function(string, prefix) {
      return string.replace(this.regexp(), '$1' + prefix + '$2');
    };

    Value.prototype.add = function(decl, prefix) {
      var value;
      decl._autoprefixerValues || (decl._autoprefixerValues = {});
      value = decl._autoprefixerValues[prefix] || decl.value;
      value = this.replace(value, prefix);
      if (value) {
        return decl._autoprefixerValues[prefix] = value;
      }
    };

    Value.prototype.old = function(prefix) {
      return new OldValue(prefix + this.name);
    };

    return Value;

  })(Prefixer);

  module.exports = Value;

}).call(this);

},{"./old-value":30,"./prefixer":31,"./utils":35,"postcss/lib/vendor":52}],37:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],38:[function(require,module,exports){
var process=require("__browserify_process");// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

},{"__browserify_process":37}],39:[function(require,module,exports){
(function() {
  var AtRule, Container, name, _fn, _i, _len, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Container = require('./container');

  AtRule = (function(_super) {
    __extends(AtRule, _super);

    function AtRule() {
      this.type = 'atrule';
      AtRule.__super__.constructor.apply(this, arguments);
    }

    AtRule.prototype.addMixin = function(type) {
      var mixin, name, value, _ref;
      mixin = type === 'rules' ? Container.WithRules : Container.WithDecls;
      if (!mixin) {
        return;
      }
      _ref = mixin.prototype;
      for (name in _ref) {
        value = _ref[name];
        if (name === 'constructor') {
          continue;
        }
        this[name] = value;
      }
      return mixin.apply(this);
    };

    AtRule.raw('params');

    AtRule.prototype.stringify = function(builder, last) {
      var params, semicolon;
      if (this.rules || this.decls) {
        params = this._params.stringify({
          before: ' ',
          after: ' '
        });
        return this.stringifyBlock(builder, '@' + this.name + params + '{');
      } else {
        if (this.before) {
          builder(this.before);
        }
        semicolon = !last || this.semicolon ? ';' : '';
        return builder('@' + this.name + this._params.stringify({
          before: ' '
        }) + semicolon, this);
      }
    };

    return AtRule;

  })(Container);

  _ref = ['append', 'prepend'];
  _fn = function(name) {
    return AtRule.prototype[name] = function(child) {
      this.addMixin(child.type + 's');
      return this[name](child);
    };
  };
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    _fn(name);
  }

  module.exports = AtRule;

}).call(this);

},{"./container":40}],40:[function(require,module,exports){
(function() {
  var Container, Declaration, Node, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Node = require('./node');

  Declaration = require('./declaration');

  Container = (function(_super) {
    __extends(Container, _super);

    function Container() {
      _ref = Container.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Container.prototype.stringifyContent = function(builder) {
      var last,
        _this = this;
      if (!this.rules && !this.decls) {
        return;
      }
      if (this.rules) {
        last = this.rules.length - 1;
        return this.rules.map(function(rule, i) {
          return rule.stringify(builder, last === i);
        });
      } else if (this.decls) {
        last = this.decls.length - 1;
        return this.decls.map(function(decl, i) {
          return decl.stringify(builder, last !== i || _this.semicolon);
        });
      }
    };

    Container.prototype.stringifyBlock = function(builder, start) {
      if (this.before) {
        builder(this.before);
      }
      builder(start, this, 'start');
      this.stringifyContent(builder);
      if (this.after) {
        builder(this.after);
      }
      return builder('}', this, 'end');
    };

    Container.prototype.push = function(child) {
      child.parent = this;
      this.list.push(child);
      return this;
    };

    Container.prototype.each = function(callback) {
      var id, index, list;
      this.lastEach || (this.lastEach = 0);
      this.indexes || (this.indexes = {});
      this.lastEach += 1;
      id = this.lastEach;
      this.indexes[id] = 0;
      list = this.list;
      while (this.indexes[id] < list.length) {
        index = this.indexes[id];
        callback(list[index], index);
        this.indexes[id] += 1;
      }
      delete this.indexes[id];
      return this;
    };

    Container.prototype.eachDecl = function(callback) {};

    Container.prototype.append = function(child) {
      child = this.normalize(child, this.list[this.list.length - 1]);
      this.list.push(child);
      return this;
    };

    Container.prototype.prepend = function(child) {
      var id, index, _ref1;
      child = this.normalize(child, this.list[0], 'prepend');
      this.list.unshift(child);
      _ref1 = this.indexes;
      for (id in _ref1) {
        index = _ref1[id];
        this.indexes[id] = index + 1;
      }
      return this;
    };

    Container.prototype.insertBefore = function(exist, add) {
      var id, index, _ref1;
      exist = this.index(exist);
      add = this.normalize(add, this.list[exist], exist === 0 ? 'prepend' : void 0);
      this.list.splice(exist, 0, add);
      _ref1 = this.indexes;
      for (id in _ref1) {
        index = _ref1[id];
        if (index >= exist) {
          this.indexes[id] = index + 1;
        }
      }
      return this;
    };

    Container.prototype.insertAfter = function(exist, add) {
      var id, index, _ref1;
      exist = this.index(exist);
      add = this.normalize(add, this.list[exist]);
      this.list.splice(exist + 1, 0, add);
      _ref1 = this.indexes;
      for (id in _ref1) {
        index = _ref1[id];
        if (index > exist) {
          this.indexes[id] = index + 1;
        }
      }
      return this;
    };

    Container.prototype.remove = function(child) {
      var id, index, _ref1;
      child = this.index(child);
      this.list.splice(child, 1);
      _ref1 = this.indexes;
      for (id in _ref1) {
        index = _ref1[id];
        if (index >= child) {
          this.indexes[id] = index - 1;
        }
      }
      return this;
    };

    Container.prototype.every = function(condition) {
      return this.list.every(condition);
    };

    Container.prototype.some = function(condition) {
      return this.list.some(condition);
    };

    Container.prototype.index = function(child) {
      if (typeof child === 'number') {
        return child;
      } else {
        return this.list.indexOf(child);
      }
    };

    Container.prop('list', {
      get: function() {
        return this.rules || this.decls;
      }
    });

    Container.prototype.normalize = function(child, sample) {
      child.parent = this;
      if ((child.before == null) && sample) {
        child.before = sample.before;
      }
      return child;
    };

    return Container;

  })(Node);

  Container.WithRules = (function(_super) {
    __extends(WithRules, _super);

    function WithRules() {
      this.rules = [];
      WithRules.__super__.constructor.apply(this, arguments);
    }

    WithRules.prototype.eachDecl = function(callback) {
      this.each(function(child) {
        return child.eachDecl(callback);
      });
      return this;
    };

    WithRules.prototype.eachRule = function(callback) {
      var _this = this;
      this.each(function(child, i) {
        if (child.type === 'rule') {
          return callback(child, i);
        } else if (child.eachRule) {
          return child.eachRule(callback);
        }
      });
      return this;
    };

    WithRules.prototype.eachAtRule = function(callback) {
      var _this = this;
      this.each(function(child, i) {
        if (child.type === 'atrule') {
          callback(child, i);
          if (child.eachAtRule) {
            return child.eachAtRule(callback);
          }
        }
      });
      return this;
    };

    return WithRules;

  })(Container);

  Container.WithDecls = (function(_super) {
    __extends(WithDecls, _super);

    function WithDecls() {
      this.decls = [];
      WithDecls.__super__.constructor.apply(this, arguments);
    }

    WithDecls.prototype.normalize = function(child, sample) {
      if (!child.type) {
        child = new Declaration(child);
      }
      return WithDecls.__super__.normalize.call(this, child, sample);
    };

    WithDecls.prototype.eachDecl = function(callback) {
      var _this = this;
      this.each(function(decl, i) {
        return callback(decl, i);
      });
      return this;
    };

    return WithDecls;

  })(Container);

  module.exports = Container;

}).call(this);

},{"./declaration":41,"./node":44}],41:[function(require,module,exports){
(function() {
  var Declaration, Node, vendor,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Node = require('./node');

  vendor = require('./vendor');

  Declaration = (function(_super) {
    __extends(Declaration, _super);

    function Declaration() {
      this.type = 'decl';
      Declaration.__super__.constructor.apply(this, arguments);
    }

    Declaration.raw('value');

    Declaration.prototype.stringify = function(builder, semicolon) {
      var string;
      if (this.before) {
        builder(this.before);
      }
      string = this.prop + (this.between || '') + ':' + this._value.stringify({
        before: ' '
      });
      if (semicolon) {
        string += ';';
      }
      return builder(string, this);
    };

    Declaration.prototype.removeSelf = function() {
      if (!this.parent) {
        return;
      }
      this.parent.remove(this);
      return this;
    };

    Declaration.prototype.clone = function(obj) {
      var cloned;
      cloned = Declaration.__super__.clone.apply(this, arguments);
      delete cloned.before;
      return cloned;
    };

    return Declaration;

  })(Node);

  module.exports = Declaration;

}).call(this);

},{"./node":44,"./vendor":52}],42:[function(require,module,exports){
(function() {
  var Result, SourceMap, generateMap;

  SourceMap = require('source-map');

  Result = require('./result');

  generateMap = function(css, opts) {
    var builder, column, line, map, prev, result;
    map = new SourceMap.SourceMapGenerator({
      file: opts.to || 'to.css'
    });
    result = new Result(css, '');
    line = 1;
    column = 1;
    builder = function(str, node, type) {
      var last, lines, _ref, _ref1;
      result.css += str;
      if ((node != null ? (_ref = node.source) != null ? _ref.start : void 0 : void 0) && type !== 'end') {
        map.addMapping({
          source: node.source.file || 'from.css',
          original: {
            line: node.source.start.line,
            column: node.source.start.column - 1
          },
          generated: {
            line: line,
            column: column - 1
          }
        });
      }
      lines = str.match(/\n/g);
      if (lines) {
        line += lines.length;
        last = str.lastIndexOf("\n");
        column = str.length - last;
      } else {
        column = column + str.length;
      }
      if ((node != null ? (_ref1 = node.source) != null ? _ref1.end : void 0 : void 0) && type !== 'start') {
        return map.addMapping({
          source: node.source.file || 'from.css',
          original: {
            line: node.source.end.line,
            column: node.source.end.column
          },
          generated: {
            line: line,
            column: column
          }
        });
      }
    };
    css.stringify(builder);
    if (typeof opts.map === 'string') {
      prev = new SourceMap.SourceMapConsumer(opts.map);
      map.applySourceMap(prev);
    }
    result.map = map.toString();
    return result;
  };

  module.exports = generateMap;

}).call(this);

},{"./result":48,"source-map":53}],43:[function(require,module,exports){
(function() {
  var list;

  list = {
    split: function(string, separators, last) {
      var array, current, escape, func, letter, quote, separator, split, _i, _j, _len, _len1;
      array = [];
      current = '';
      split = false;
      func = 0;
      quote = false;
      escape = false;
      for (_i = 0, _len = string.length; _i < _len; _i++) {
        letter = string[_i];
        if (quote) {
          if (escape) {
            escape = false;
          } else if (letter === '\\') {
            escape = true;
          } else if (letter === quote) {
            quote = false;
          }
        } else if (letter === '"' || letter === "'") {
          quote = letter;
        } else if (letter === '(') {
          func += 1;
        } else if (letter === ')') {
          if (func > 0) {
            func -= 1;
          }
        } else if (func === 0) {
          for (_j = 0, _len1 = separators.length; _j < _len1; _j++) {
            separator = separators[_j];
            if (letter === separator) {
              split = true;
            }
          }
        }
        if (split) {
          if (current !== '') {
            array.push(current.trim());
          }
          current = '';
          split = false;
        } else {
          current += letter;
        }
      }
      if (last || current !== '') {
        array.push(current.trim());
      }
      return array;
    },
    space: function(string) {
      return this.split(string, [' ', "\n", "\t"]);
    },
    comma: function(string) {
      return this.split(string, [','], true);
    }
  };

  module.exports = list;

}).call(this);

},{}],44:[function(require,module,exports){
(function() {
  var Node, Raw, clone,
    __hasProp = {}.hasOwnProperty;

  Raw = require('./raw');

  clone = function(obj, parent) {
    var cloned, name, value;
    if (typeof obj !== 'object') {
      return obj;
    }
    cloned = new obj.constructor();
    for (name in obj) {
      if (!__hasProp.call(obj, name)) continue;
      value = obj[name];
      if (name === 'parent' && typeof value === 'object') {
        if (parent) {
          cloned[name] = parent;
        }
      } else if (value instanceof Array) {
        cloned[name] = value.map(function(i) {
          return clone(i, cloned);
        });
      } else {
        cloned[name] = clone(value, cloned);
      }
    }
    return cloned;
  };

  Node = (function() {
    function Node(defaults) {
      var name, value;
      if (defaults == null) {
        defaults = {};
      }
      for (name in defaults) {
        value = defaults[name];
        this[name] = value;
      }
    }

    Node.prop = function(name, params) {
      return Object.defineProperty(this.prototype, name, params);
    };

    Node.raw = function(name) {
      var hidden;
      hidden = '_' + name;
      this.prototype[hidden] = Raw.empty;
      return this.prop(name, {
        get: function() {
          var _ref;
          return (_ref = this[hidden]) != null ? _ref.trimmed : void 0;
        },
        set: function(value) {
          if (value instanceof Raw) {
            return this[hidden] = value;
          } else {
            if (this[hidden] === Raw.empty) {
              this[hidden] = new Raw();
            }
            return this[hidden].set(value);
          }
        }
      });
    };

    Node.prototype.removeSelf = function() {
      if (!this.parent) {
        return;
      }
      this.parent.remove(this);
      return this;
    };

    Node.prototype.toString = function() {
      var builder, result;
      result = '';
      builder = function(str) {
        return result += str;
      };
      this.stringify(builder);
      return result;
    };

    Node.prototype.clone = function(overrides) {
      var cloned, name, value;
      if (overrides == null) {
        overrides = {};
      }
      cloned = clone(this);
      for (name in overrides) {
        value = overrides[name];
        cloned[name] = value;
      }
      return cloned;
    };

    Node.prototype.toJSON = function() {
      var fixed, name, value;
      fixed = {};
      for (name in this) {
        if (!__hasProp.call(this, name)) continue;
        value = this[name];
        if (name === 'parent') {
          continue;
        }
        fixed[name] = value instanceof Array ? value.map(function(i) {
          if (typeof i === 'object' && i.toJSON) {
            return i.toJSON();
          } else {
            return i;
          }
        }) : typeof value === 'object' && value.toJSON ? value.toJSON() : value;
      }
      return fixed;
    };

    return Node;

  })();

  module.exports = Node;

}).call(this);

},{"./raw":47}],45:[function(require,module,exports){
(function() {
  var AtRule, Declaration, Parser, Raw, Root, Rule, SyntexError;

  SyntexError = require('./syntax-error');

  Declaration = require('./declaration');

  AtRule = require('./at-rule');

  Root = require('./root');

  Rule = require('./rule');

  Raw = require('./raw');

  Parser = (function() {
    function Parser(source, opts) {
      this.opts = opts;
      this.source = source.toString();
      this.root = new Root();
      this.current = this.root;
      this.parents = [this.current];
      this.type = 'rules';
      this.types = [this.type];
      this.pos = -1;
      this.line = 1;
      this.lines = [];
      this.column = 0;
      this.buffer = '';
    }

    Parser.prototype.loop = function() {
      while (this.pos < this.source.length - 1) {
        this.move();
        this.nextLetter();
      }
      return this.endFile();
    };

    Parser.prototype.nextLetter = function() {
      this.inString() || this.inComment() || this.isComment() || this.isString() || this.isWrong() || this.inAtrule() || this.isAtrule() || this.isBlockEnd() || this.inSelector() || this.isSelector() || this.inProperty() || this.isProperty() || this.inValue();
      return this.unknown();
    };

    Parser.prototype.inString = function() {
      if (this.quote) {
        if (this.escape) {
          this.escape = false;
        } else if (this.letter === '\\') {
          this.escape = true;
        } else if (this.letter === this.quote) {
          this.quote = void 0;
        }
        this.trimmed += this.letter;
        return true;
      }
    };

    Parser.prototype.isString = function() {
      if (this.letter === '"' || this.letter === "'") {
        this.quote = this.letter;
        this.quotePos = {
          line: this.line,
          column: this.column
        };
        this.trimmed += this.letter;
        return true;
      }
    };

    Parser.prototype.inComment = function() {
      if (this.inside('comment')) {
        if (this.next('*/')) {
          this.popType();
          this.move();
        }
        return true;
      }
    };

    Parser.prototype.isComment = function() {
      if (this.next('/*')) {
        this.commentPos = {
          line: this.line,
          column: this.column
        };
        this.addType('comment');
        this.move();
        return true;
      }
    };

    Parser.prototype.isWrong = function() {
      if (this.letter === '{' && (this.inside('decls') || this.inside('value'))) {
        this.error("Unexpected {");
      }
      if (this.inside('property') && (this.letter === '}' || this.letter === ';')) {
        return this.error('Missing property value');
      }
    };

    Parser.prototype.isAtrule = function() {
      if (this.letter === '@' && this.inside('rules')) {
        this.init(new AtRule());
        this.current.name = '';
        this.addType('atrule-name');
        return true;
      }
    };

    Parser.prototype.inAtrule = function(close) {
      if (this.inside('atrule-name')) {
        if (this.space()) {
          this.checkAtruleName();
          this.buffer = this.buffer.slice(this.current.name.length);
          this.trimmed = '';
          this.setType('atrule-param');
        } else if (this.letter === ';' || this.letter === '{' || close) {
          this.checkAtruleName();
          this.endAtruleParams();
        } else {
          this.current.name += this.letter;
        }
        return true;
      } else if (this.inside('atrule-param')) {
        if (this.letter === ';' || this.letter === '{' || close) {
          this.current.params = new Raw(this.prevBuffer(), this.trim(this.trimmed));
          this.endAtruleParams();
        } else {
          this.trimmed += this.letter;
        }
        return true;
      }
    };

    Parser.prototype.inSelector = function() {
      if (this.inside('selector')) {
        if (this.letter === '{') {
          this.current.selector = new Raw(this.prevBuffer(), this.trim(this.trimmed));
          this.semicolon = false;
          this.buffer = '';
          this.setType('decls');
        } else {
          this.trimmed += this.letter;
        }
        return true;
      }
    };

    Parser.prototype.isSelector = function() {
      if (!this.space() && this.inside('rules')) {
        this.init(new Rule());
        if (this.letter === '{') {
          this.addType('decls');
          this.current.selector = new Raw('', '');
          this.semicolon = false;
          this.buffer = '';
        } else {
          this.addType('selector');
          this.buffer = this.letter;
          this.trimmed = this.letter;
        }
        return true;
      }
    };

    Parser.prototype.isBlockEnd = function() {
      if (this.letter === '}') {
        if (this.parents.length === 1) {
          this.error('Unexpected }');
        } else {
          if (this.inside('value')) {
            this.fixEnd(function() {
              return this.inValue('close');
            });
          } else {
            if (this.semicolon) {
              this.current.semicolon = true;
            }
            this.current.after = this.prevBuffer();
          }
          this.pop();
        }
        return true;
      }
    };

    Parser.prototype.inProperty = function() {
      if (this.inside('property')) {
        if (this.letter === ':') {
          if (this.buffer[0] === '*' || this.buffer[0] === '_') {
            this.current.before += this.buffer[0];
            this.trimmed = this.trimmed.slice(1);
            this.buffer = this.buffer.slice(1);
          }
          this.current.prop = this.trim(this.trimmed);
          this.current.between = this.prevBuffer().slice(this.current.prop.length);
          this.buffer = '';
          this.setType('value');
          this.trimmed = '';
        } else if (this.letter === '{') {
          this.error('Unexpected { in decls');
        } else {
          this.trimmed += this.letter;
        }
        return true;
      }
    };

    Parser.prototype.isProperty = function() {
      if (this.inside('decls') && !this.space() && this.letter !== ';') {
        this.init(new Declaration());
        this.addType('property');
        this.buffer = this.letter;
        this.trimmed = this.letter;
        this.semicolon = false;
        return true;
      }
    };

    Parser.prototype.inValue = function(close) {
      if (this.inside('value')) {
        if (this.letter === '(') {
          this.inBrackets = true;
        } else if (this.inBrackets && this.letter === ')') {
          this.inBrackets = false;
        }
        if ((this.letter === ';' && !this.inBrackets) || close) {
          if (this.letter === ';') {
            this.semicolon = true;
          }
          this.current.value = new Raw(this.prevBuffer(), this.trim(this.trimmed));
          this.pop();
        } else {
          this.trimmed += this.letter;
        }
        return true;
      }
    };

    Parser.prototype.unknown = function() {
      if (!this.space) {
        return this.error("Unexpected symbol " + this.letter);
      }
    };

    Parser.prototype.endFile = function() {
      if (this.inside('atrule-param') || this.inside('atrule-name')) {
        this.fixEnd(function() {
          return this.inAtrule('close');
        });
      }
      if (this.parents.length > 1) {
        return this.error('Unclosed block', this.current.source.start);
      } else if (this.inside('comment')) {
        return this.error('Unclosed comment', this.commentPos);
      } else if (this.quote) {
        return this.error('Unclosed quote', this.quotePos);
      } else {
        return this.root.after = this.buffer;
      }
    };

    Parser.prototype.error = function(message, position) {
      if (position == null) {
        position = {
          line: this.line,
          column: this.column
        };
      }
      throw new SyntexError(message, this.source, position, this.opts.from);
    };

    Parser.prototype.move = function() {
      this.pos += 1;
      this.column += 1;
      this.letter = this.source[this.pos];
      this.buffer += this.letter;
      if (this.letter === "\n") {
        this.lines[this.line] = this.column - 1;
        this.line += 1;
        return this.column = 0;
      }
    };

    Parser.prototype.prevBuffer = function() {
      return this.buffer.slice(0, -1);
    };

    Parser.prototype.inside = function(type) {
      return this.type === type;
    };

    Parser.prototype.next = function(string) {
      return this.source.slice(this.pos, +(this.pos + string.length - 1) + 1 || 9e9) === string;
    };

    Parser.prototype.space = function() {
      return this.letter === ' ' || this.letter === "\t" || this.letter === "\n" || this.letter === "\f" || this.letter === "\r";
    };

    Parser.prototype.init = function(node) {
      this.current.push(node);
      this.parents.push(node);
      this.current = node;
      this.current.source = {
        start: {
          line: this.line,
          column: this.column
        }
      };
      if (this.opts.from) {
        this.current.source.file = this.opts.from;
      }
      this.current.before = this.buffer.slice(0, -1);
      return this.buffer = '';
    };

    Parser.prototype.fixEnd = function(callback) {
      var after, all, el, last, lines, start;
      if (this.letter === '}') {
        start = this.buffer.search(/\s*\}$/);
        after = this.buffer.slice(start, -1);
      } else {
        start = this.buffer.search(/\s*$/);
        after = this.buffer.slice(start);
      }
      this.buffer = this.buffer.slice(0, +start + 1 || 9e9);
      el = this.current;
      callback.apply(this);
      lines = after.match(/\n/g);
      if (lines) {
        el.source.end.line -= lines.length;
        all = this.lines[el.source.end.line];
        last = after.indexOf("\n");
        if (last === -1) {
          last = after.length;
        }
        el.source.end.column = all - last;
      } else {
        el.source.end.column -= after.length;
      }
      this.current.after = after;
      return this.buffer = after;
    };

    Parser.prototype.pop = function() {
      this.current.source.end = {
        line: this.line,
        column: this.column
      };
      this.popType();
      this.parents.pop();
      this.current = this.parents[this.parents.length - 1];
      return this.buffer = '';
    };

    Parser.prototype.addType = function(type) {
      this.types.push(type);
      return this.type = type;
    };

    Parser.prototype.setType = function(type) {
      this.types[this.types.length - 1] = type;
      return this.type = type;
    };

    Parser.prototype.popType = function() {
      this.types.pop();
      return this.type = this.types[this.types.length - 1];
    };

    Parser.prototype.atruleType = function() {
      var name;
      name = this.current.name.toLowerCase();
      if (name === 'page' || name === 'font-face' || name.slice(-8) === 'viewport') {
        return 'decls';
      } else {
        return 'rules';
      }
    };

    Parser.prototype.endAtruleParams = function() {
      var type;
      if (this.letter === '{') {
        type = this.atruleType();
        this.current.addMixin(type);
        this.setType(type);
        return this.buffer = '';
      } else {
        if (this.letter === ';') {
          this.current.semicolon = true;
        }
        return this.pop();
      }
    };

    Parser.prototype.checkAtruleName = function() {
      if (this.current.name === '') {
        return this.error('At-rule without name');
      }
    };

    Parser.prototype.trim = function(string) {
      return string.replace(/^\s*/, '').replace(/\s*$/, '');
    };

    return Parser;

  })();

  module.exports = function(source, opts) {
    var parser;
    if (opts == null) {
      opts = {};
    }
    parser = new Parser(source, opts);
    parser.loop();
    return parser.root;
  };

}).call(this);

},{"./at-rule":39,"./declaration":41,"./raw":47,"./root":49,"./rule":50,"./syntax-error":51}],46:[function(require,module,exports){
(function() {
  var AtRule, Declaration, PostCSS, Result, Root, Rule, generateMap, postcss,
    __slice = [].slice;

  generateMap = require('./generate-map');

  Declaration = require('./declaration');

  AtRule = require('./at-rule');

  Result = require('./result');

  Rule = require('./rule');

  Root = require('./root');

  PostCSS = (function() {
    function PostCSS(processors) {
      this.processors = processors != null ? processors : [];
    }

    PostCSS.prototype.use = function(processor) {
      this.processors.push(processor);
      return this;
    };

    PostCSS.prototype.process = function(css, opts) {
      var parsed, processor, returned, _i, _len, _ref;
      if (opts == null) {
        opts = {};
      }
      parsed = postcss.parse(css, opts);
      _ref = this.processors;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        processor = _ref[_i];
        returned = processor(parsed);
        if (returned instanceof Root) {
          parsed = returned;
        }
      }
      if (opts.map) {
        return generateMap(parsed, opts);
      } else {
        return new Result(parsed, parsed.toString());
      }
    };

    return PostCSS;

  })();

  postcss = function() {
    var processors;
    processors = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return new PostCSS(processors);
  };

  postcss.parse = require('./parse');

  postcss.decl = function(defaults) {
    return new Declaration(defaults);
  };

  postcss.atRule = function(defaults) {
    return new AtRule(defaults);
  };

  postcss.rule = function(defaults) {
    return new Rule(defaults);
  };

  postcss.root = function(defaults) {
    return new Root(defaults);
  };

  module.exports = postcss;

}).call(this);

},{"./at-rule":39,"./declaration":41,"./generate-map":42,"./parse":45,"./result":48,"./root":49,"./rule":50}],47:[function(require,module,exports){
(function() {
  var Raw;

  Raw = (function() {
    function Raw(raw, trimmed) {
      this.raw = raw;
      this.trimmed = trimmed;
    }

    Raw.prototype.set = function(value) {
      if (this.trimmed !== value) {
        this.changed = true;
        return this.trimmed = value;
      }
    };

    Raw.prototype.stringify = function(opts) {
      if (opts == null) {
        opts = {};
      }
      if (!this.changed) {
        return this.raw || '';
      } else if (!this.raw) {
        return (opts.before || '') + this.trimmed + (opts.after || '');
      } else {
        return (this.raw[0] === ' ' ? ' ' : '') + this.trimmed + (this.raw.slice(-1) === ' ' ? ' ' : '');
      }
    };

    return Raw;

  })();

  Raw.empty = new Raw();

  module.exports = Raw;

}).call(this);

},{}],48:[function(require,module,exports){
(function() {
  var Result;

  Result = (function() {
    function Result(parsed, css) {
      this.parsed = parsed;
      this.css = css;
    }

    Result.prototype.toString = function() {
      return this.css;
    };

    return Result;

  })();

  module.exports = Result;

}).call(this);

},{}],49:[function(require,module,exports){
(function() {
  var Container, Root,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Container = require('./container');

  Root = (function(_super) {
    __extends(Root, _super);

    function Root() {
      this.type = 'root';
      this.rules = [];
      Root.__super__.constructor.apply(this, arguments);
    }

    Root.prototype.normalize = function(child, sample, type) {
      child = Root.__super__.normalize.apply(this, arguments);
      if (type === 'prepend') {
        sample.before = this.rules.length > 1 ? this.rules[1].before : this.after;
      }
      return child;
    };

    Root.prototype.stringify = function(builder) {
      this.stringifyContent(builder);
      if (this.after) {
        return builder(this.after);
      }
    };

    return Root;

  })(Container.WithRules);

  module.exports = Root;

}).call(this);

},{"./container":40}],50:[function(require,module,exports){
(function() {
  var Container, Declaration, Rule,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Container = require('./container');

  Declaration = require('./declaration');

  Rule = (function(_super) {
    __extends(Rule, _super);

    function Rule() {
      this.type = 'rule';
      Rule.__super__.constructor.apply(this, arguments);
    }

    Rule.raw('selector');

    Rule.prototype.stringify = function(builder) {
      return this.stringifyBlock(builder, this._selector.stringify({
        after: ' '
      }) + '{');
    };

    return Rule;

  })(Container.WithDecls);

  module.exports = Rule;

}).call(this);

},{"./container":40,"./declaration":41}],51:[function(require,module,exports){
(function() {
  var SyntaxError,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SyntaxError = (function(_super) {
    __extends(SyntaxError, _super);

    function SyntaxError(text, source, pos, file) {
      this.source = source;
      this.file = file;
      this.line = pos.line;
      this.column = pos.column;
      this.message = "Can't parse CSS: " + text;
      this.message += " at line " + pos.line + ":" + pos.column;
      if (this.file) {
        this.message += " in " + this.file;
      }
    }

    return SyntaxError;

  })(Error);

  module.exports = SyntaxError;

}).call(this);

},{}],52:[function(require,module,exports){
(function() {
  var vendor;

  vendor = {
    prefix: function(prop) {
      var separator;
      if (prop[0] === '-') {
        separator = prop.indexOf('-', 1) + 1;
        return prop.slice(0, separator);
      } else {
        return '';
      }
    },
    unprefixed: function(prop) {
      var separator;
      if (prop[0] === '-') {
        separator = prop.indexOf('-', 1) + 1;
        return prop.slice(separator);
      } else {
        return prop;
      }
    }
  };

  module.exports = vendor;

}).call(this);

},{}],53:[function(require,module,exports){
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = require('./source-map/source-map-generator').SourceMapGenerator;
exports.SourceMapConsumer = require('./source-map/source-map-consumer').SourceMapConsumer;
exports.SourceNode = require('./source-map/source-node').SourceNode;

},{"./source-map/source-map-consumer":58,"./source-map/source-map-generator":59,"./source-map/source-node":60}],54:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var util = require('./util');

  /**
   * A data structure which is a combination of an array and a set. Adding a new
   * member is O(1), testing for membership is O(1), and finding the index of an
   * element is O(1). Removing elements from the set is not supported. Only
   * strings are supported for membership.
   */
  function ArraySet() {
    this._array = [];
    this._set = {};
  }

  /**
   * Static method for creating ArraySet instances from an existing array.
   */
  ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for (var i = 0, len = aArray.length; i < len; i++) {
      set.add(aArray[i], aAllowDuplicates);
    }
    return set;
  };

  /**
   * Add the given string to this set.
   *
   * @param String aStr
   */
  ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var isDuplicate = this.has(aStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) {
      this._array.push(aStr);
    }
    if (!isDuplicate) {
      this._set[util.toSetString(aStr)] = idx;
    }
  };

  /**
   * Is the given string a member of this set?
   *
   * @param String aStr
   */
  ArraySet.prototype.has = function ArraySet_has(aStr) {
    return Object.prototype.hasOwnProperty.call(this._set,
                                                util.toSetString(aStr));
  };

  /**
   * What is the index of the given string in the array?
   *
   * @param String aStr
   */
  ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (this.has(aStr)) {
      return this._set[util.toSetString(aStr)];
    }
    throw new Error('"' + aStr + '" is not in the set.');
  };

  /**
   * What is the element at the given index?
   *
   * @param Number aIdx
   */
  ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) {
      return this._array[aIdx];
    }
    throw new Error('No element indexed by ' + aIdx);
  };

  /**
   * Returns the array representation of this set (which has the proper indices
   * indicated by indexOf). Note that this is a copy of the internal array used
   * for storing the members so that no one can mess with internal state.
   */
  ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
  };

  exports.ArraySet = ArraySet;

});

},{"./util":61,"amdefine":62}],55:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var base64 = require('./base64');

  // A single base 64 digit can contain 6 bits of data. For the base 64 variable
  // length quantities we use in the source map spec, the first bit is the sign,
  // the next four bits are the actual value, and the 6th bit is the
  // continuation bit. The continuation bit tells us whether there are more
  // digits in this value following this digit.
  //
  //   Continuation
  //   |    Sign
  //   |    |
  //   V    V
  //   101011

  var VLQ_BASE_SHIFT = 5;

  // binary: 100000
  var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

  // binary: 011111
  var VLQ_BASE_MASK = VLQ_BASE - 1;

  // binary: 100000
  var VLQ_CONTINUATION_BIT = VLQ_BASE;

  /**
   * Converts from a two-complement value to a value where the sign bit is
   * is placed in the least significant bit.  For example, as decimals:
   *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
   *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
   */
  function toVLQSigned(aValue) {
    return aValue < 0
      ? ((-aValue) << 1) + 1
      : (aValue << 1) + 0;
  }

  /**
   * Converts to a two-complement value from a value where the sign bit is
   * is placed in the least significant bit.  For example, as decimals:
   *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
   *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
   */
  function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative
      ? -shifted
      : shifted;
  }

  /**
   * Returns the base 64 VLQ encoded value.
   */
  exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;

    var vlq = toVLQSigned(aValue);

    do {
      digit = vlq & VLQ_BASE_MASK;
      vlq >>>= VLQ_BASE_SHIFT;
      if (vlq > 0) {
        // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= VLQ_CONTINUATION_BIT;
      }
      encoded += base64.encode(digit);
    } while (vlq > 0);

    return encoded;
  };

  /**
   * Decodes the next base 64 VLQ value from the given string and returns the
   * value and the rest of the string.
   */
  exports.decode = function base64VLQ_decode(aStr) {
    var i = 0;
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;

    do {
      if (i >= strLen) {
        throw new Error("Expected more digits in base 64 VLQ value.");
      }
      digit = base64.decode(aStr.charAt(i++));
      continuation = !!(digit & VLQ_CONTINUATION_BIT);
      digit &= VLQ_BASE_MASK;
      result = result + (digit << shift);
      shift += VLQ_BASE_SHIFT;
    } while (continuation);

    return {
      value: fromVLQSigned(result),
      rest: aStr.slice(i)
    };
  };

});

},{"./base64":56,"amdefine":62}],56:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var charToIntMap = {};
  var intToCharMap = {};

  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    .split('')
    .forEach(function (ch, index) {
      charToIntMap[ch] = index;
      intToCharMap[index] = ch;
    });

  /**
   * Encode an integer in the range of 0 to 63 to a single base 64 digit.
   */
  exports.encode = function base64_encode(aNumber) {
    if (aNumber in intToCharMap) {
      return intToCharMap[aNumber];
    }
    throw new TypeError("Must be between 0 and 63: " + aNumber);
  };

  /**
   * Decode a single base 64 digit to an integer.
   */
  exports.decode = function base64_decode(aChar) {
    if (aChar in charToIntMap) {
      return charToIntMap[aChar];
    }
    throw new TypeError("Not a valid base 64 digit: " + aChar);
  };

});

},{"amdefine":62}],57:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  /**
   * Recursive implementation of binary search.
   *
   * @param aLow Indices here and lower do not contain the needle.
   * @param aHigh Indices here and higher do not contain the needle.
   * @param aNeedle The element being searched for.
   * @param aHaystack The non-empty array being searched.
   * @param aCompare Function which takes two elements and returns -1, 0, or 1.
   */
  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the next
    //      closest element that is less than that element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element which is less than the one we are searching for, so we
    //      return null.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
      // Found the element we are looking for.
      return aHaystack[mid];
    }
    else if (cmp > 0) {
      // aHaystack[mid] is greater than our needle.
      if (aHigh - mid > 1) {
        // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare);
      }
      // We did not find an exact match, return the next closest one
      // (termination case 2).
      return aHaystack[mid];
    }
    else {
      // aHaystack[mid] is less than our needle.
      if (mid - aLow > 1) {
        // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare);
      }
      // The exact needle element was not found in this haystack. Determine if
      // we are in termination case (2) or (3) and return the appropriate thing.
      return aLow < 0
        ? null
        : aHaystack[aLow];
    }
  }

  /**
   * This is an implementation of binary search which will always try and return
   * the next lowest value checked if there is no exact hit. This is because
   * mappings between original and generated line/col pairs are single points,
   * and there is an implicit region between each of them, so a miss just means
   * that you aren't on the very start of a region.
   *
   * @param aNeedle The element you are looking for.
   * @param aHaystack The array that is being searched.
   * @param aCompare A function which takes the needle and an element in the
   *     array and returns -1, 0, or 1 depending on whether the needle is less
   *     than, equal to, or greater than the element, respectively.
   */
  exports.search = function search(aNeedle, aHaystack, aCompare) {
    return aHaystack.length > 0
      ? recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare)
      : null;
  };

});

},{"amdefine":62}],58:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var util = require('./util');
  var binarySearch = require('./binary-search');
  var ArraySet = require('./array-set').ArraySet;
  var base64VLQ = require('./base64-vlq');

  /**
   * A SourceMapConsumer instance represents a parsed source map which we can
   * query for information about the original file positions by giving it a file
   * position in the generated source.
   *
   * The only parameter is the raw source map (either as a JSON string, or
   * already parsed to an object). According to the spec, source maps have the
   * following attributes:
   *
   *   - version: Which version of the source map spec this map is following.
   *   - sources: An array of URLs to the original source files.
   *   - names: An array of identifiers which can be referrenced by individual mappings.
   *   - sourceRoot: Optional. The URL root from which all sources are relative.
   *   - sourcesContent: Optional. An array of contents of the original source files.
   *   - mappings: A string of base64 VLQs which contain the actual mappings.
   *   - file: Optional. The generated file this source map is associated with.
   *
   * Here is an example source map, taken from the source map spec[0]:
   *
   *     {
   *       version : 3,
   *       file: "out.js",
   *       sourceRoot : "",
   *       sources: ["foo.js", "bar.js"],
   *       names: ["src", "maps", "are", "fun"],
   *       mappings: "AA,AB;;ABCDE;"
   *     }
   *
   * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
   */
  function SourceMapConsumer(aSourceMap) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') {
      sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
    }

    var version = util.getArg(sourceMap, 'version');
    var sources = util.getArg(sourceMap, 'sources');
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = util.getArg(sourceMap, 'names', []);
    var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
    var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
    var mappings = util.getArg(sourceMap, 'mappings');
    var file = util.getArg(sourceMap, 'file', null);

    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) {
      throw new Error('Unsupported version: ' + version);
    }

    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = ArraySet.fromArray(names, true);
    this._sources = ArraySet.fromArray(sources, true);

    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this.file = file;
  }

  /**
   * Create a SourceMapConsumer from a SourceMapGenerator.
   *
   * @param SourceMapGenerator aSourceMap
   *        The source map that will be consumed.
   * @returns SourceMapConsumer
   */
  SourceMapConsumer.fromSourceMap =
    function SourceMapConsumer_fromSourceMap(aSourceMap) {
      var smc = Object.create(SourceMapConsumer.prototype);

      smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                              smc.sourceRoot);
      smc.file = aSourceMap._file;

      smc.__generatedMappings = aSourceMap._mappings.slice()
        .sort(util.compareByGeneratedPositions);
      smc.__originalMappings = aSourceMap._mappings.slice()
        .sort(util.compareByOriginalPositions);

      return smc;
    };

  /**
   * The version of the source mapping spec that we are consuming.
   */
  SourceMapConsumer.prototype._version = 3;

  /**
   * The list of original sources.
   */
  Object.defineProperty(SourceMapConsumer.prototype, 'sources', {
    get: function () {
      return this._sources.toArray().map(function (s) {
        return this.sourceRoot ? util.join(this.sourceRoot, s) : s;
      }, this);
    }
  });

  // `__generatedMappings` and `__originalMappings` are arrays that hold the
  // parsed mapping coordinates from the source map's "mappings" attribute. They
  // are lazily instantiated, accessed via the `_generatedMappings` and
  // `_originalMappings` getters respectively, and we only parse the mappings
  // and create these arrays once queried for a source location. We jump through
  // these hoops because there can be many thousands of mappings, and parsing
  // them is expensive, so we only want to do it if we must.
  //
  // Each object in the arrays is of the form:
  //
  //     {
  //       generatedLine: The line number in the generated code,
  //       generatedColumn: The column number in the generated code,
  //       source: The path to the original source file that generated this
  //               chunk of code,
  //       originalLine: The line number in the original source that
  //                     corresponds to this chunk of generated code,
  //       originalColumn: The column number in the original source that
  //                       corresponds to this chunk of generated code,
  //       name: The name of the original symbol which generated this chunk of
  //             code.
  //     }
  //
  // All properties except for `generatedLine` and `generatedColumn` can be
  // `null`.
  //
  // `_generatedMappings` is ordered by the generated positions.
  //
  // `_originalMappings` is ordered by the original positions.

  SourceMapConsumer.prototype.__generatedMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
    get: function () {
      if (!this.__generatedMappings) {
        this.__generatedMappings = [];
        this.__originalMappings = [];
        this._parseMappings(this._mappings, this.sourceRoot);
      }

      return this.__generatedMappings;
    }
  });

  SourceMapConsumer.prototype.__originalMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
    get: function () {
      if (!this.__originalMappings) {
        this.__generatedMappings = [];
        this.__originalMappings = [];
        this._parseMappings(this._mappings, this.sourceRoot);
      }

      return this.__originalMappings;
    }
  });

  /**
   * Parse the mappings in a string in to a data structure which we can easily
   * query (the ordered arrays in the `this.__generatedMappings` and
   * `this.__originalMappings` properties).
   */
  SourceMapConsumer.prototype._parseMappings =
    function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var mappingSeparator = /^[,;]/;
      var str = aStr;
      var mapping;
      var temp;

      while (str.length > 0) {
        if (str.charAt(0) === ';') {
          generatedLine++;
          str = str.slice(1);
          previousGeneratedColumn = 0;
        }
        else if (str.charAt(0) === ',') {
          str = str.slice(1);
        }
        else {
          mapping = {};
          mapping.generatedLine = generatedLine;

          // Generated column.
          temp = base64VLQ.decode(str);
          mapping.generatedColumn = previousGeneratedColumn + temp.value;
          previousGeneratedColumn = mapping.generatedColumn;
          str = temp.rest;

          if (str.length > 0 && !mappingSeparator.test(str.charAt(0))) {
            // Original source.
            temp = base64VLQ.decode(str);
            mapping.source = this._sources.at(previousSource + temp.value);
            previousSource += temp.value;
            str = temp.rest;
            if (str.length === 0 || mappingSeparator.test(str.charAt(0))) {
              throw new Error('Found a source, but no line and column');
            }

            // Original line.
            temp = base64VLQ.decode(str);
            mapping.originalLine = previousOriginalLine + temp.value;
            previousOriginalLine = mapping.originalLine;
            // Lines are stored 0-based
            mapping.originalLine += 1;
            str = temp.rest;
            if (str.length === 0 || mappingSeparator.test(str.charAt(0))) {
              throw new Error('Found a source and line, but no column');
            }

            // Original column.
            temp = base64VLQ.decode(str);
            mapping.originalColumn = previousOriginalColumn + temp.value;
            previousOriginalColumn = mapping.originalColumn;
            str = temp.rest;

            if (str.length > 0 && !mappingSeparator.test(str.charAt(0))) {
              // Original name.
              temp = base64VLQ.decode(str);
              mapping.name = this._names.at(previousName + temp.value);
              previousName += temp.value;
              str = temp.rest;
            }
          }

          this.__generatedMappings.push(mapping);
          if (typeof mapping.originalLine === 'number') {
            this.__originalMappings.push(mapping);
          }
        }
      }

      this.__generatedMappings.sort(util.compareByGeneratedPositions);
      this.__originalMappings.sort(util.compareByOriginalPositions);
    };

  /**
   * Find the mapping that best matches the hypothetical "needle" mapping that
   * we are searching for in the given "haystack" of mappings.
   */
  SourceMapConsumer.prototype._findMapping =
    function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                           aColumnName, aComparator) {
      // To return the position we are searching for, we must first find the
      // mapping for the given position and then return the opposite position it
      // points to. Because the mappings are sorted, we can use binary search to
      // find the best mapping.

      if (aNeedle[aLineName] <= 0) {
        throw new TypeError('Line must be greater than or equal to 1, got '
                            + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError('Column must be greater than or equal to 0, got '
                            + aNeedle[aColumnName]);
      }

      return binarySearch.search(aNeedle, aMappings, aComparator);
    };

  /**
   * Returns the original source, line, and column information for the generated
   * source's line and column positions provided. The only argument is an object
   * with the following properties:
   *
   *   - line: The line number in the generated source.
   *   - column: The column number in the generated source.
   *
   * and an object is returned with the following properties:
   *
   *   - source: The original source file, or null.
   *   - line: The line number in the original source, or null.
   *   - column: The column number in the original source, or null.
   *   - name: The original identifier, or null.
   */
  SourceMapConsumer.prototype.originalPositionFor =
    function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
      };

      var mapping = this._findMapping(needle,
                                      this._generatedMappings,
                                      "generatedLine",
                                      "generatedColumn",
                                      util.compareByGeneratedPositions);

      if (mapping && mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source && this.sourceRoot) {
          source = util.join(this.sourceRoot, source);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: util.getArg(mapping, 'name', null)
        };
      }

      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };

  /**
   * Returns the original source content. The only argument is the url of the
   * original source file. Returns null if no original source content is
   * availible.
   */
  SourceMapConsumer.prototype.sourceContentFor =
    function SourceMapConsumer_sourceContentFor(aSource) {
      if (!this.sourcesContent) {
        return null;
      }

      if (this.sourceRoot) {
        aSource = util.relative(this.sourceRoot, aSource);
      }

      if (this._sources.has(aSource)) {
        return this.sourcesContent[this._sources.indexOf(aSource)];
      }

      var url;
      if (this.sourceRoot
          && (url = util.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
        if (url.scheme == "file"
            && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
        }

        if ((!url.path || url.path == "/")
            && this._sources.has("/" + aSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + aSource)];
        }
      }

      throw new Error('"' + aSource + '" is not in the SourceMap.');
    };

  /**
   * Returns the generated line and column information for the original source,
   * line, and column positions provided. The only argument is an object with
   * the following properties:
   *
   *   - source: The filename of the original source.
   *   - line: The line number in the original source.
   *   - column: The column number in the original source.
   *
   * and an object is returned with the following properties:
   *
   *   - line: The line number in the generated source, or null.
   *   - column: The column number in the generated source, or null.
   */
  SourceMapConsumer.prototype.generatedPositionFor =
    function SourceMapConsumer_generatedPositionFor(aArgs) {
      var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: util.getArg(aArgs, 'column')
      };

      if (this.sourceRoot) {
        needle.source = util.relative(this.sourceRoot, needle.source);
      }

      var mapping = this._findMapping(needle,
                                      this._originalMappings,
                                      "originalLine",
                                      "originalColumn",
                                      util.compareByOriginalPositions);

      if (mapping) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null)
        };
      }

      return {
        line: null,
        column: null
      };
    };

  SourceMapConsumer.GENERATED_ORDER = 1;
  SourceMapConsumer.ORIGINAL_ORDER = 2;

  /**
   * Iterate over each mapping between an original source/line/column and a
   * generated line/column in this source map.
   *
   * @param Function aCallback
   *        The function that is called with each mapping.
   * @param Object aContext
   *        Optional. If specified, this object will be the value of `this` every
   *        time that `aCallback` is called.
   * @param aOrder
   *        Either `SourceMapConsumer.GENERATED_ORDER` or
   *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
   *        iterate over the mappings sorted by the generated file's line/column
   *        order or the original's source/line/column order, respectively. Defaults to
   *        `SourceMapConsumer.GENERATED_ORDER`.
   */
  SourceMapConsumer.prototype.eachMapping =
    function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

      var mappings;
      switch (order) {
      case SourceMapConsumer.GENERATED_ORDER:
        mappings = this._generatedMappings;
        break;
      case SourceMapConsumer.ORIGINAL_ORDER:
        mappings = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
      }

      var sourceRoot = this.sourceRoot;
      mappings.map(function (mapping) {
        var source = mapping.source;
        if (source && sourceRoot) {
          source = util.join(sourceRoot, source);
        }
        return {
          source: source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name
        };
      }).forEach(aCallback, context);
    };

  exports.SourceMapConsumer = SourceMapConsumer;

});

},{"./array-set":54,"./base64-vlq":55,"./binary-search":57,"./util":61,"amdefine":62}],59:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var base64VLQ = require('./base64-vlq');
  var util = require('./util');
  var ArraySet = require('./array-set').ArraySet;

  /**
   * An instance of the SourceMapGenerator represents a source map which is
   * being built incrementally. You may pass an object with the following
   * properties:
   *
   *   - file: The filename of the generated source.
   *   - sourceRoot: A root for all relative URLs in this source map.
   */
  function SourceMapGenerator(aArgs) {
    if (!aArgs) {
      aArgs = {};
    }
    this._file = util.getArg(aArgs, 'file', null);
    this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = [];
    this._sourcesContents = null;
  }

  SourceMapGenerator.prototype._version = 3;

  /**
   * Creates a new SourceMapGenerator based on a SourceMapConsumer
   *
   * @param aSourceMapConsumer The SourceMap.
   */
  SourceMapGenerator.fromSourceMap =
    function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
      });
      aSourceMapConsumer.eachMapping(function (mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };

        if (mapping.source) {
          newMapping.source = mapping.source;
          if (sourceRoot) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }

          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };

          if (mapping.name) {
            newMapping.name = mapping.name;
          }
        }

        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };

  /**
   * Add a single mapping from original source line and column to the generated
   * source's line and column for this source map being created. The mapping
   * object should have the following properties:
   *
   *   - generated: An object with the generated line and column positions.
   *   - original: An object with the original line and column positions.
   *   - source: The original source file (relative to the sourceRoot).
   *   - name: An optional original token name for this mapping.
   */
  SourceMapGenerator.prototype.addMapping =
    function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, 'generated');
      var original = util.getArg(aArgs, 'original', null);
      var source = util.getArg(aArgs, 'source', null);
      var name = util.getArg(aArgs, 'name', null);

      this._validateMapping(generated, original, source, name);

      if (source && !this._sources.has(source)) {
        this._sources.add(source);
      }

      if (name && !this._names.has(name)) {
        this._names.add(name);
      }

      this._mappings.push({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
      });
    };

  /**
   * Set the source content for a source file.
   */
  SourceMapGenerator.prototype.setSourceContent =
    function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot) {
        source = util.relative(this._sourceRoot, source);
      }

      if (aSourceContent !== null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) {
          this._sourcesContents = {};
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };

  /**
   * Applies the mappings of a sub-source-map for a specific source file to the
   * source map being generated. Each mapping to the supplied source file is
   * rewritten using the supplied source map. Note: The resolution for the
   * resulting mappings is the minimium of this map and the supplied map.
   *
   * @param aSourceMapConsumer The source map to be applied.
   * @param aSourceFile Optional. The filename of the source file.
   *        If omitted, SourceMapConsumer's file property will be used.
   * @param aSourceMapPath Optional. The dirname of the path to the source map
   *        to be applied. If relative, it is relative to the SourceMapConsumer.
   *        This parameter is needed when the two source maps aren't in the same
   *        directory, and the source map to be applied contains relative source
   *        paths. If so, those relative source paths need to be rewritten
   *        relative to the SourceMapGenerator.
   */
  SourceMapGenerator.prototype.applySourceMap =
    function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      // If aSourceFile is omitted, we will use the file property of the SourceMap
      if (!aSourceFile) {
        if (!aSourceMapConsumer.file) {
          throw new Error(
            'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
            'or the source map\'s "file" property. Both were omitted.'
          );
        }
        aSourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      // Make "aSourceFile" relative if an absolute Url is passed.
      if (sourceRoot) {
        aSourceFile = util.relative(sourceRoot, aSourceFile);
      }
      // Applying the SourceMap can add and remove items from the sources and
      // the names array.
      var newSources = new ArraySet();
      var newNames = new ArraySet();

      // Find mappings for the "aSourceFile"
      this._mappings.forEach(function (mapping) {
        if (mapping.source === aSourceFile && mapping.originalLine) {
          // Check if it can be mapped by the source map, then update the mapping.
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source !== null) {
            // Copy mapping
            mapping.source = original.source;
            if (aSourceMapPath) {
              mapping.source = util.join(aSourceMapPath, mapping.source)
            }
            if (sourceRoot) {
              mapping.source = util.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name !== null && mapping.name !== null) {
              // Only use the identifier name if it's an identifier
              // in both SourceMaps
              mapping.name = original.name;
            }
          }
        }

        var source = mapping.source;
        if (source && !newSources.has(source)) {
          newSources.add(source);
        }

        var name = mapping.name;
        if (name && !newNames.has(name)) {
          newNames.add(name);
        }

      }, this);
      this._sources = newSources;
      this._names = newNames;

      // Copy sourcesContents of applied map.
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content) {
          if (sourceRoot) {
            sourceFile = util.relative(sourceRoot, sourceFile);
          }
          this.setSourceContent(sourceFile, content);
        }
      }, this);
    };

  /**
   * A mapping can have one of the three levels of data:
   *
   *   1. Just the generated position.
   *   2. The Generated position, original position, and original source.
   *   3. Generated and original position, original source, as well as a name
   *      token.
   *
   * To maintain consistency, we validate that any new mapping being added falls
   * in to one of these categories.
   */
  SourceMapGenerator.prototype._validateMapping =
    function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                                aName) {
      if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
          && aGenerated.line > 0 && aGenerated.column >= 0
          && !aOriginal && !aSource && !aName) {
        // Case 1.
        return;
      }
      else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
               && aOriginal && 'line' in aOriginal && 'column' in aOriginal
               && aGenerated.line > 0 && aGenerated.column >= 0
               && aOriginal.line > 0 && aOriginal.column >= 0
               && aSource) {
        // Cases 2 and 3.
        return;
      }
      else {
        throw new Error('Invalid mapping: ' + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };

  /**
   * Serialize the accumulated mappings in to the stream of base 64 VLQs
   * specified by the source map format.
   */
  SourceMapGenerator.prototype._serializeMappings =
    function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = '';
      var mapping;

      // The mappings must be guaranteed to be in sorted order before we start
      // serializing them or else the generated line numbers (which are defined
      // via the ';' separators) will be all messed up. Note: it might be more
      // performant to maintain the sorting as we insert them, rather than as we
      // serialize them, but the big O is the same either way.
      this._mappings.sort(util.compareByGeneratedPositions);

      for (var i = 0, len = this._mappings.length; i < len; i++) {
        mapping = this._mappings[i];

        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            result += ';';
            previousGeneratedLine++;
          }
        }
        else {
          if (i > 0) {
            if (!util.compareByGeneratedPositions(mapping, this._mappings[i - 1])) {
              continue;
            }
            result += ',';
          }
        }

        result += base64VLQ.encode(mapping.generatedColumn
                                   - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;

        if (mapping.source) {
          result += base64VLQ.encode(this._sources.indexOf(mapping.source)
                                     - previousSource);
          previousSource = this._sources.indexOf(mapping.source);

          // lines are stored 0-based in SourceMap spec version 3
          result += base64VLQ.encode(mapping.originalLine - 1
                                     - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;

          result += base64VLQ.encode(mapping.originalColumn
                                     - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;

          if (mapping.name) {
            result += base64VLQ.encode(this._names.indexOf(mapping.name)
                                       - previousName);
            previousName = this._names.indexOf(mapping.name);
          }
        }
      }

      return result;
    };

  SourceMapGenerator.prototype._generateSourcesContent =
    function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function (source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents,
                                                    key)
          ? this._sourcesContents[key]
          : null;
      }, this);
    };

  /**
   * Externalize the source map.
   */
  SourceMapGenerator.prototype.toJSON =
    function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        file: this._file,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._sourceRoot) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }

      return map;
    };

  /**
   * Render the source map being generated to a string.
   */
  SourceMapGenerator.prototype.toString =
    function SourceMapGenerator_toString() {
      return JSON.stringify(this);
    };

  exports.SourceMapGenerator = SourceMapGenerator;

});

},{"./array-set":54,"./base64-vlq":55,"./util":61,"amdefine":62}],60:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  var SourceMapGenerator = require('./source-map-generator').SourceMapGenerator;
  var util = require('./util');

  /**
   * SourceNodes provide a way to abstract over interpolating/concatenating
   * snippets of generated JavaScript source code while maintaining the line and
   * column information associated with the original source code.
   *
   * @param aLine The original line number.
   * @param aColumn The original column number.
   * @param aSource The original source's filename.
   * @param aChunks Optional. An array of strings which are snippets of
   *        generated JS, or other SourceNodes.
   * @param aName The original identifier.
   */
  function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine === undefined ? null : aLine;
    this.column = aColumn === undefined ? null : aColumn;
    this.source = aSource === undefined ? null : aSource;
    this.name = aName === undefined ? null : aName;
    if (aChunks != null) this.add(aChunks);
  }

  /**
   * Creates a SourceNode from generated code and a SourceMapConsumer.
   *
   * @param aGeneratedCode The generated code
   * @param aSourceMapConsumer The SourceMap for the generated code
   */
  SourceNode.fromStringWithSourceMap =
    function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer) {
      // The SourceNode we want to fill with the generated code
      // and the SourceMap
      var node = new SourceNode();

      // The generated code
      // Processed fragments are removed from this array.
      var remainingLines = aGeneratedCode.split('\n');

      // We need to remember the position of "remainingLines"
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;

      // The generate SourceNodes we need a code range.
      // To extract it current and last mapping is used.
      // Here we store the last mapping.
      var lastMapping = null;

      aSourceMapConsumer.eachMapping(function (mapping) {
        if (lastMapping !== null) {
          // We add the code from "lastMapping" to "mapping":
          // First check if there is a new line in between.
          if (lastGeneratedLine < mapping.generatedLine) {
            var code = "";
            // Associate first line with "lastMapping"
            addMappingWithCode(lastMapping, remainingLines.shift() + "\n");
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
            // The remaining code is added without mapping
          } else {
            // There is no new line in between.
            // Associate the code between "lastGeneratedColumn" and
            // "mapping.generatedColumn" with "lastMapping"
            var nextLine = remainingLines[0];
            var code = nextLine.substr(0, mapping.generatedColumn -
                                          lastGeneratedColumn);
            remainingLines[0] = nextLine.substr(mapping.generatedColumn -
                                                lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            // No more remaining code, continue
            lastMapping = mapping;
            return;
          }
        }
        // We add the generated code until the first mapping
        // to the SourceNode without any mapping.
        // Each line is added as separate string.
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(remainingLines.shift() + "\n");
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[0];
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[0] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      // We have processed all mappings.
      if (remainingLines.length > 0) {
        if (lastMapping) {
          // Associate the remaining code in the current line with "lastMapping"
          var lastLine = remainingLines.shift();
          if (remainingLines.length > 0) lastLine += "\n";
          addMappingWithCode(lastMapping, lastLine);
        }
        // and add the remaining lines without any mapping
        node.add(remainingLines.join("\n"));
      }

      // Copy sourcesContent into SourceNode
      aSourceMapConsumer.sources.forEach(function (sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content) {
          node.setSourceContent(sourceFile, content);
        }
      });

      return node;

      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) {
          node.add(code);
        } else {
          node.add(new SourceNode(mapping.originalLine,
                                  mapping.originalColumn,
                                  mapping.source,
                                  code,
                                  mapping.name));
        }
      }
    };

  /**
   * Add a chunk of generated JS to this source node.
   *
   * @param aChunk A string snippet of generated JS code, another instance of
   *        SourceNode, or an array where each member is one of those things.
   */
  SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) {
      aChunk.forEach(function (chunk) {
        this.add(chunk);
      }, this);
    }
    else if (aChunk instanceof SourceNode || typeof aChunk === "string") {
      if (aChunk) {
        this.children.push(aChunk);
      }
    }
    else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };

  /**
   * Add a chunk of generated JS to the beginning of this source node.
   *
   * @param aChunk A string snippet of generated JS code, another instance of
   *        SourceNode, or an array where each member is one of those things.
   */
  SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) {
      for (var i = aChunk.length-1; i >= 0; i--) {
        this.prepend(aChunk[i]);
      }
    }
    else if (aChunk instanceof SourceNode || typeof aChunk === "string") {
      this.children.unshift(aChunk);
    }
    else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };

  /**
   * Walk over the tree of JS snippets in this node and its children. The
   * walking function is called once for each snippet of JS and is passed that
   * snippet and the its original associated source's line/column location.
   *
   * @param aFn The traversal function.
   */
  SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for (var i = 0, len = this.children.length; i < len; i++) {
      chunk = this.children[i];
      if (chunk instanceof SourceNode) {
        chunk.walk(aFn);
      }
      else {
        if (chunk !== '') {
          aFn(chunk, { source: this.source,
                       line: this.line,
                       column: this.column,
                       name: this.name });
        }
      }
    }
  };

  /**
   * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
   * each of `this.children`.
   *
   * @param aSep The separator.
   */
  SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
      newChildren = [];
      for (i = 0; i < len-1; i++) {
        newChildren.push(this.children[i]);
        newChildren.push(aSep);
      }
      newChildren.push(this.children[i]);
      this.children = newChildren;
    }
    return this;
  };

  /**
   * Call String.prototype.replace on the very right-most source snippet. Useful
   * for trimming whitespace from the end of a source node, etc.
   *
   * @param aPattern The pattern to replace.
   * @param aReplacement The thing to replace the pattern with.
   */
  SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild instanceof SourceNode) {
      lastChild.replaceRight(aPattern, aReplacement);
    }
    else if (typeof lastChild === 'string') {
      this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    }
    else {
      this.children.push(''.replace(aPattern, aReplacement));
    }
    return this;
  };

  /**
   * Set the source content for a source file. This will be added to the SourceMapGenerator
   * in the sourcesContent field.
   *
   * @param aSourceFile The filename of the source file
   * @param aSourceContent The content of the source file
   */
  SourceNode.prototype.setSourceContent =
    function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };

  /**
   * Walk over the tree of SourceNodes. The walking function is called for each
   * source file content and is passed the filename and source content.
   *
   * @param aFn The traversal function.
   */
  SourceNode.prototype.walkSourceContents =
    function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i] instanceof SourceNode) {
          this.children[i].walkSourceContents(aFn);
        }
      }

      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };

  /**
   * Return the string representation of this source node. Walks over the tree
   * and concatenates all the various snippets together to one string.
   */
  SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function (chunk) {
      str += chunk;
    });
    return str;
  };

  /**
   * Returns the string representation of this source node along with a source
   * map.
   */
  SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
      code: "",
      line: 1,
      column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function (chunk, original) {
      generated.code += chunk;
      if (original.source !== null
          && original.line !== null
          && original.column !== null) {
        if(lastOriginalSource !== original.source
           || lastOriginalLine !== original.line
           || lastOriginalColumn !== original.column
           || lastOriginalName !== original.name) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
        lastOriginalSource = original.source;
        lastOriginalLine = original.line;
        lastOriginalColumn = original.column;
        lastOriginalName = original.name;
        sourceMappingActive = true;
      } else if (sourceMappingActive) {
        map.addMapping({
          generated: {
            line: generated.line,
            column: generated.column
          }
        });
        lastOriginalSource = null;
        sourceMappingActive = false;
      }
      chunk.split('').forEach(function (ch, idx, array) {
        if (ch === '\n') {
          generated.line++;
          generated.column = 0;
          // Mappings end at eol
          if (idx + 1 === array.length) {
            lastOriginalSource = null;
            sourceMappingActive = false;
          } else if (sourceMappingActive) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
        } else {
          generated.column++;
        }
      });
    });
    this.walkSourceContents(function (sourceFile, sourceContent) {
      map.setSourceContent(sourceFile, sourceContent);
    });

    return { code: generated.code, map: map };
  };

  exports.SourceNode = SourceNode;

});

},{"./source-map-generator":59,"./util":61,"amdefine":62}],61:[function(require,module,exports){
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
if (typeof define !== 'function') {
    var define = require('amdefine')(module, require);
}
define(function (require, exports, module) {

  /**
   * This is a helper function for getting values from parameter/options
   * objects.
   *
   * @param args The object we are extracting values from
   * @param name The name of the property we are getting.
   * @param defaultValue An optional value to return if the property is missing
   * from the object. If this is not specified and the property is missing, an
   * error will be thrown.
   */
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }
  exports.getArg = getArg;

  var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
  var dataUrlRegexp = /^data:.+\,.+$/;

  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
      return null;
    }
    return {
      scheme: match[1],
      auth: match[2],
      host: match[3],
      port: match[4],
      path: match[5]
    };
  }
  exports.urlParse = urlParse;

  function urlGenerate(aParsedUrl) {
    var url = '';
    if (aParsedUrl.scheme) {
      url += aParsedUrl.scheme + ':';
    }
    url += '//';
    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + '@';
    }
    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port
    }
    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }
    return url;
  }
  exports.urlGenerate = urlGenerate;

  /**
   * Normalizes a path, or the path portion of a URL:
   *
   * - Replaces consequtive slashes with one slash.
   * - Removes unnecessary '.' parts.
   * - Removes unnecessary '<dir>/..' parts.
   *
   * Based on code in the Node.js 'path' core module.
   *
   * @param aPath The path or url to normalize.
   */
  function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
      if (!url.path) {
        return aPath;
      }
      path = url.path;
    }
    var isAbsolute = (path.charAt(0) === '/');

    var parts = path.split(/\/+/);
    for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
      part = parts[i];
      if (part === '.') {
        parts.splice(i, 1);
      } else if (part === '..') {
        up++;
      } else if (up > 0) {
        if (part === '') {
          // The first part is blank if the path is absolute. Trying to go
          // above the root is a no-op. Therefore we can remove all '..' parts
          // directly after the root.
          parts.splice(i + 1, up);
          up = 0;
        } else {
          parts.splice(i, 2);
          up--;
        }
      }
    }
    path = parts.join('/');

    if (path === '') {
      path = isAbsolute ? '/' : '.';
    }

    if (url) {
      url.path = path;
      return urlGenerate(url);
    }
    return path;
  }
  exports.normalize = normalize;

  /**
   * Joins two paths/URLs.
   *
   * @param aRoot The root path or URL.
   * @param aPath The path or URL to be joined with the root.
   *
   * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
   *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
   *   first.
   * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
   *   is updated with the result and aRoot is returned. Otherwise the result
   *   is returned.
   *   - If aPath is absolute, the result is aPath.
   *   - Otherwise the two paths are joined with a slash.
   * - Joining for example 'http://' and 'www.example.com' is also supported.
   */
  function join(aRoot, aPath) {
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) {
      aRoot = aRootUrl.path || '/';
    }

    // `join(foo, '//www.example.org')`
    if (aPathUrl && !aPathUrl.scheme) {
      if (aRootUrl) {
        aPathUrl.scheme = aRootUrl.scheme;
      }
      return urlGenerate(aPathUrl);
    }

    if (aPathUrl || aPath.match(dataUrlRegexp)) {
      return aPath;
    }

    // `join('http://', 'www.example.com')`
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
      aRootUrl.host = aPath;
      return urlGenerate(aRootUrl);
    }

    var joined = aPath.charAt(0) === '/'
      ? aPath
      : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

    if (aRootUrl) {
      aRootUrl.path = joined;
      return urlGenerate(aRootUrl);
    }
    return joined;
  }
  exports.join = join;

  /**
   * Because behavior goes wacky when you set `__proto__` on objects, we
   * have to prefix all the strings in our set with an arbitrary character.
   *
   * See https://github.com/mozilla/source-map/pull/31 and
   * https://github.com/mozilla/source-map/issues/30
   *
   * @param String aStr
   */
  function toSetString(aStr) {
    return '$' + aStr;
  }
  exports.toSetString = toSetString;

  function fromSetString(aStr) {
    return aStr.substr(1);
  }
  exports.fromSetString = fromSetString;

  function relative(aRoot, aPath) {
    aRoot = aRoot.replace(/\/$/, '');

    var url = urlParse(aRoot);
    if (aPath.charAt(0) == "/" && url && url.path == "/") {
      return aPath.slice(1);
    }

    return aPath.indexOf(aRoot + '/') === 0
      ? aPath.substr(aRoot.length + 1)
      : aPath;
  }
  exports.relative = relative;

  function strcmp(aStr1, aStr2) {
    var s1 = aStr1 || "";
    var s2 = aStr2 || "";
    return (s1 > s2) - (s1 < s2);
  }

  /**
   * Comparator between two mappings where the original positions are compared.
   *
   * Optionally pass in `true` as `onlyCompareGenerated` to consider two
   * mappings with the same original source/line/column, but different generated
   * line and column the same. Useful when searching for a mapping with a
   * stubbed out mapping.
   */
  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp;

    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp || onlyCompareOriginal) {
      return cmp;
    }

    cmp = strcmp(mappingA.name, mappingB.name);
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp) {
      return cmp;
    }

    return mappingA.generatedColumn - mappingB.generatedColumn;
  };
  exports.compareByOriginalPositions = compareByOriginalPositions;

  /**
   * Comparator between two mappings where the generated positions are
   * compared.
   *
   * Optionally pass in `true` as `onlyCompareGenerated` to consider two
   * mappings with the same generated line and column, but different
   * source/name/original line and column the same. Useful when searching for a
   * mapping with a stubbed out mapping.
   */
  function compareByGeneratedPositions(mappingA, mappingB, onlyCompareGenerated) {
    var cmp;

    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp || onlyCompareGenerated) {
      return cmp;
    }

    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp) {
      return cmp;
    }

    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp) {
      return cmp;
    }

    return strcmp(mappingA.name, mappingB.name);
  };
  exports.compareByGeneratedPositions = compareByGeneratedPositions;

});

},{"amdefine":62}],62:[function(require,module,exports){
var process=require("__browserify_process"),__filename="/../node_modules/postcss/node_modules/source-map/node_modules/amdefine/amdefine.js";/** vim: et:ts=4:sw=4:sts=4
 * @license amdefine 0.1.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/amdefine for details
 */

/*jslint node: true */
/*global module, process */
'use strict';

/**
 * Creates a define for node.
 * @param {Object} module the "module" object that is defined by Node for the
 * current module.
 * @param {Function} [requireFn]. Node's require function for the current module.
 * It only needs to be passed in Node versions before 0.5, when module.require
 * did not exist.
 * @returns {Function} a define function that is usable for the current node
 * module.
 */
function amdefine(module, requireFn) {
    'use strict';
    var defineCache = {},
        loaderCache = {},
        alreadyCalled = false,
        path = require('path'),
        makeRequire, stringRequire;

    /**
     * Trims the . and .. from an array of path segments.
     * It will keep a leading path segment if a .. will become
     * the first path segment, to help with module name lookups,
     * which act like paths, but can be remapped. But the end result,
     * all paths that use this function should look normalized.
     * NOTE: this method MODIFIES the input array.
     * @param {Array} ary the array of path segments.
     */
    function trimDots(ary) {
        var i, part;
        for (i = 0; ary[i]; i+= 1) {
            part = ary[i];
            if (part === '.') {
                ary.splice(i, 1);
                i -= 1;
            } else if (part === '..') {
                if (i === 1 && (ary[2] === '..' || ary[0] === '..')) {
                    //End of the line. Keep at least one non-dot
                    //path segment at the front so it can be mapped
                    //correctly to disk. Otherwise, there is likely
                    //no path mapping for a path starting with '..'.
                    //This can still fail, but catches the most reasonable
                    //uses of ..
                    break;
                } else if (i > 0) {
                    ary.splice(i - 1, 2);
                    i -= 2;
                }
            }
        }
    }

    function normalize(name, baseName) {
        var baseParts;

        //Adjust any relative paths.
        if (name && name.charAt(0) === '.') {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                baseParts = baseName.split('/');
                baseParts = baseParts.slice(0, baseParts.length - 1);
                baseParts = baseParts.concat(name.split('/'));
                trimDots(baseParts);
                name = baseParts.join('/');
            }
        }

        return name;
    }

    /**
     * Create the normalize() function passed to a loader plugin's
     * normalize method.
     */
    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(id) {
        function load(value) {
            loaderCache[id] = value;
        }

        load.fromText = function (id, text) {
            //This one is difficult because the text can/probably uses
            //define, and any relative paths and requires should be relative
            //to that id was it would be found on disk. But this would require
            //bootstrapping a module/require fairly deeply from node core.
            //Not sure how best to go about that yet.
            throw new Error('amdefine does not implement load.fromText');
        };

        return load;
    }

    makeRequire = function (systemRequire, exports, module, relId) {
        function amdRequire(deps, callback) {
            if (typeof deps === 'string') {
                //Synchronous, single module require('')
                return stringRequire(systemRequire, exports, module, deps, relId);
            } else {
                //Array of dependencies with a callback.

                //Convert the dependencies to modules.
                deps = deps.map(function (depName) {
                    return stringRequire(systemRequire, exports, module, depName, relId);
                });

                //Wait for next tick to call back the require call.
                process.nextTick(function () {
                    callback.apply(null, deps);
                });
            }
        }

        amdRequire.toUrl = function (filePath) {
            if (filePath.indexOf('.') === 0) {
                return normalize(filePath, path.dirname(module.filename));
            } else {
                return filePath;
            }
        };

        return amdRequire;
    };

    //Favor explicit value, passed in if the module wants to support Node 0.4.
    requireFn = requireFn || function req() {
        return module.require.apply(module, arguments);
    };

    function runFactory(id, deps, factory) {
        var r, e, m, result;

        if (id) {
            e = loaderCache[id] = {};
            m = {
                id: id,
                uri: __filename,
                exports: e
            };
            r = makeRequire(requireFn, e, m, id);
        } else {
            //Only support one define call per file
            if (alreadyCalled) {
                throw new Error('amdefine with no module ID cannot be called more than once per file.');
            }
            alreadyCalled = true;

            //Use the real variables from node
            //Use module.exports for exports, since
            //the exports in here is amdefine exports.
            e = module.exports;
            m = module;
            r = makeRequire(requireFn, e, m, module.id);
        }

        //If there are dependencies, they are strings, so need
        //to convert them to dependency values.
        if (deps) {
            deps = deps.map(function (depName) {
                return r(depName);
            });
        }

        //Call the factory with the right dependencies.
        if (typeof factory === 'function') {
            result = factory.apply(m.exports, deps);
        } else {
            result = factory;
        }

        if (result !== undefined) {
            m.exports = result;
            if (id) {
                loaderCache[id] = m.exports;
            }
        }
    }

    stringRequire = function (systemRequire, exports, module, id, relId) {
        //Split the ID by a ! so that
        var index = id.indexOf('!'),
            originalId = id,
            prefix, plugin;

        if (index === -1) {
            id = normalize(id, relId);

            //Straight module lookup. If it is one of the special dependencies,
            //deal with it, otherwise, delegate to node.
            if (id === 'require') {
                return makeRequire(systemRequire, exports, module, relId);
            } else if (id === 'exports') {
                return exports;
            } else if (id === 'module') {
                return module;
            } else if (loaderCache.hasOwnProperty(id)) {
                return loaderCache[id];
            } else if (defineCache[id]) {
                runFactory.apply(null, defineCache[id]);
                return loaderCache[id];
            } else {
                if(systemRequire) {
                    return systemRequire(originalId);
                } else {
                    throw new Error('No module with ID: ' + id);
                }
            }
        } else {
            //There is a plugin in play.
            prefix = id.substring(0, index);
            id = id.substring(index + 1, id.length);

            plugin = stringRequire(systemRequire, exports, module, prefix, relId);

            if (plugin.normalize) {
                id = plugin.normalize(id, makeNormalize(relId));
            } else {
                //Normalize the ID normally.
                id = normalize(id, relId);
            }

            if (loaderCache[id]) {
                return loaderCache[id];
            } else {
                plugin.load(id, makeRequire(systemRequire, exports, module, relId), makeLoad(id), {});

                return loaderCache[id];
            }
        }
    };

    //Create a define function specific to the module asking for amdefine.
    function define(id, deps, factory) {
        if (Array.isArray(id)) {
            factory = deps;
            deps = id;
            id = undefined;
        } else if (typeof id !== 'string') {
            factory = id;
            id = deps = undefined;
        }

        if (deps && !Array.isArray(deps)) {
            factory = deps;
            deps = undefined;
        }

        if (!deps) {
            deps = ['require', 'exports', 'module'];
        }

        //Set up properties for this module. If an ID, then use
        //internal cache. If no ID, then use the external variables
        //for this node module.
        if (id) {
            //Put the module in deep freeze until there is a
            //require call for it.
            defineCache[id] = [id, deps, factory];
        } else {
            runFactory(id, deps, factory);
        }
    }

    //define.require, which has access to all the values in the
    //cache. Useful for AMD modules that all have IDs in the file,
    //but need to finally export a value to node based on one of those
    //IDs.
    define.require = function (id) {
        if (loaderCache[id]) {
            return loaderCache[id];
        }

        if (defineCache[id]) {
            runFactory.apply(null, defineCache[id]);
            return loaderCache[id];
        }
    };

    define.amd = {};

    return define;
}

module.exports = amdefine;

},{"__browserify_process":37,"path":38}]},{},[3])
(3)
});