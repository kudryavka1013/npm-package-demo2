(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
    typeof define === 'function' && define.amd ? define(['exports', 'lodash'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.UMDFormat = {}, global.lodash));
})(this, (function (exports, lodash) { 'use strict';

    var main=function(){console.log("Hello, NPM Package!");};

    var a = [1, 2, 3];
    var b = lodash.cloneDeep(a);
    var c = {
        name: 'c'
    };
    var d = main;

    exports.c = c;
    exports.d = d;
    exports.default = b;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
