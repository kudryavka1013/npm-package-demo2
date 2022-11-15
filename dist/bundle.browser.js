(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.UMDFormat = {}));
})(this, (function (exports) { 'use strict';

    var b = {
        name: '2'
    };
    var index = {
        name: '1'
    };

    exports.b = b;
    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
