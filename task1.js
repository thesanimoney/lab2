"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.invert = function () {
    return this.split('').reverse().join('');
};
String.prototype.countOccurrences = function (char) {
    return this.split(char).length - 1;
};
var text = 'hello';
var invertedText = text.invert();
var countOfChars = text.countOccurrences('1');
console.log(invertedText);
console.log(countOfChars);
