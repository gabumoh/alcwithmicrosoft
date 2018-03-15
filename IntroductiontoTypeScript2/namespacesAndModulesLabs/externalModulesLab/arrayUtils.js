"use strict";
exports.__esModule = true;
var _ = require("lodash");
var ArrayUtilities = /** @class */ (function () {
    function ArrayUtilities() {
    }
    ArrayUtilities.prototype.reverseArray = function (array) {
        //return array.slice(0).reverse();
        return _.reverse(array.slice(0));
    };
    ArrayUtilities.prototype.lastItemOfArray = function (array) {
        //return array.slice(0).pop();
        return _.last(array.slice(0));
    };
    ArrayUtilities.prototype.firstItemOfArray = function (array) {
        //return array.slice(0).shift();
        return _.head(array.slice(0));
    };
    ArrayUtilities.prototype.concatenateArray = function (array1, array2) {
        //return array1.concat(array2);
        return _.concat(array1, array2);
    };
    return ArrayUtilities;
}());
exports["default"] = new ArrayUtilities;
