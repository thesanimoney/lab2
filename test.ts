import { expect } from '@jest/globals';

String.prototype.invert = function() {
    return this.split('').reverse().join('');
};

// Define the countOccurrences method for strings
String.prototype.countOccurrences = function(char: string) {
    return this.split(char).length - 1;
};

// Define the countOccurrences method for arrays
Array.prototype.countOccurrences = function(value: any) {
    return this.filter((item: any) => item === value).length;
};

// Define the unique method for arrays
Array.prototype.unique = function() {
    return [...new Set(this)];
};

// String extension tests
describe("String Prototype Methods", () => {
    it("should invert a string", () => {
      expect("hello".invert()).toBe("olleh");
      expect("TypeScript".invert()).toBe("tpircSepyT");
    });
  
    it("should count occurrences of a character in a string", () => {
      expect("hello".countOccurrences("l")).toBe(2);
      expect("TypeScript".countOccurrences("T")).toBe(1);
      expect("hello".countOccurrences("z")).toBe(0);
    });
  });
  
  // Array extension tests
  describe("Array Prototype Methods", () => {
    it("should count occurrences of a value in an array", () => {
      expect([1, 2, 3, 2, 2, 4].countOccurrences(2)).toBe(3);
      expect(["a", "b", "a", "a", "c"].countOccurrences("a")).toBe(3);
      expect([true, false, true].countOccurrences(true)).toBe(2);
    });
  
    it("should return a new array with unique values", () => {
      expect([1, 2, 2, 3, 4, 4, 5].unique()).toEqual([1, 2, 3, 4, 5]);
      expect(["apple", "banana", "apple", "orange"].unique()).toEqual(["apple", "banana", "orange"]);
    });
  });
  