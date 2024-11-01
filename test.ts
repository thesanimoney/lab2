import { expect } from '@jest/globals';

//String
String.prototype.invert = function() {
    return this.split('').reverse().join('');
};

String.prototype.countOccurrences = function(char: string) {
    return this.split(char).length - 1;
};

//Array
Array.prototype.countOccurrences = function(value: any) {
    return this.filter((item: any) => item === value).length;
};

Array.prototype.unique = function() {
    return [...new Set(this)];
};

// Lab task 3
class ExtendedDictionaryElement<T, U, V> {
    constructor(
      public key: T,
      public value1: U,
      public value2: V
    ) {}
  }


class ExtendedDictionary<T, U, V> {
    private elements = new Map<T, ExtendedDictionaryElement<T, U, V>>();
  
    // Add an element to the dictionary
    add(key: T, value1: U, value2: V): void {
      const element = new ExtendedDictionaryElement(key, value1, value2);
      this.elements.set(key, element);
    }
  
    // Remove an element from the dictionary by key
    remove(key: T): boolean {
      return this.elements.delete(key);
    }
  
    // Check if an element with a specified key exists
    hasKey(key: T): boolean {
      return this.elements.has(key);
    }
  
    // Check if an element with specified value1 or value2 exists
    hasValue(value: U | V): boolean {
      for (const element of this.elements.values()) {
        if (element.value1 === value || element.value2 === value) {
          return true;
        }
      }
      return false;
    }
  
    // Retrieve an element by key (indexing operation)
    getElement(key: T): ExtendedDictionaryElement<T, U, V> | undefined {
      return this.elements.get(key);
    }
  
    // Get the count of elements in the dictionary
    get count(): number {
      return this.elements.size;
    }
  
    // Make the dictionary iterable for use in `for...of` loops
    *[Symbol.iterator](): IterableIterator<ExtendedDictionaryElement<T, U, V>> {
      for (const element of this.elements.values()) {
        yield element;
      }
    }
  }


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

// Tests Dictionary


  