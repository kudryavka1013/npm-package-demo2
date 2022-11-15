import { cloneDeep } from 'lodash';

var main=function(){console.log("Hello, NPM Package!");};

var a = [1, 2, 3];
var b = cloneDeep(a);
var c = {
    name: 'c'
};
var d = main;

export { c, d, b as default };
