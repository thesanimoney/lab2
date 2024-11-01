"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.unique = function () {
    return Array.from(new Set(this));
};
Array.prototype.countOccurrences = function (value) {
    return this.filter(function (item) { return item === value; }).length;
};
var arr = [1, 1, 2, 3, 4, 5];
var unique = arr.unique();
var countOccurrences = arr.countOccurrences(1);
console.log('unique ', unique);
console.log('countOccurences ', countOccurrences);
