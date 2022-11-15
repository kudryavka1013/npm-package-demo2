'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');

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
