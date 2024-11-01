var ExtendedDictionaryElement = /** @class */ (function () {
    function ExtendedDictionaryElement(key, value1, value2) {
        this.key = key;
        this.value1 = value1;
        this.value2 = value2;
    }
    return ExtendedDictionaryElement;
}());
var ExtendedDictionary = /** @class */ (function () {
    function ExtendedDictionary() {
        this.elements = new Map();
    }
    // Add an element to the dictionary
    ExtendedDictionary.prototype.add = function (key, value1, value2) {
        var element = new ExtendedDictionaryElement(key, value1, value2);
        this.elements.set(key, element);
    };
    // Remove an element from the dictionary by key
    ExtendedDictionary.prototype.remove = function (key) {
        return this.elements.delete(key);
    };
    // Check if an element with a specified key exists
    ExtendedDictionary.prototype.hasKey = function (key) {
        return this.elements.has(key);
    };
    // Check if an element with specified value1 or value2 exists
    ExtendedDictionary.prototype.hasValue = function (value) {
        for (var _i = 0, _a = this.elements.values(); _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.value1 === value || element.value2 === value) {
                return true;
            }
        }
        return false;
    };
    // Retrieve an element by key (indexing operation)
    ExtendedDictionary.prototype.getElement = function (key) {
        return this.elements.get(key);
    };
    Object.defineProperty(ExtendedDictionary.prototype, "count", {
        // Get the count of elements in the dictionary
        get: function () {
            return this.elements.size;
        },
        enumerable: false,
        configurable: true
    });
    // Make the dictionary iterable for use in `for...of` loops
    // Use a method to get an array of elements instead
    ExtendedDictionary.prototype.getElementsArray = function () {
        return Array.from(this.elements.values());
    };
    return ExtendedDictionary;
}());
// Create an instance of ExtendedDictionary
var dictionary = new ExtendedDictionary();
// Adding elements to the dictionary
dictionary.add("user1", 25, "Engineer");
dictionary.add("user2", 30, "Designer");
dictionary.add("user3", 28, "Developer");
// Accessing elements in the dictionary
console.log("Count:", dictionary.count); // Output: Count: 3
// Check if an element exists by key
console.log("Contains 'user1':", dictionary.hasKey("user1")); // Output: true
console.log("Contains 'user5':", dictionary.hasKey("user5")); // Output: false
// Check if an element exists by value
console.log("Contains age 30:", dictionary.hasValue(30)); // Output: true
console.log("Contains profession 'Manager':", dictionary.hasValue("Manager")); // Output: false
// Retrieve an element by key
var user1 = dictionary.getElement("user1");
console.log("User1:", user1);
// Output: User1: ExtendedDictionaryElement { key: 'user1', value1: 25, value2: 'Engineer' }
// Remove an element from the dictionary
dictionary.remove("user2");
console.log("Count after removing 'user2':", dictionary.count); // Output: Count after removing 'user2': 2
// Iterate over elements using for...of
for (var _i = 0, _a = dictionary.getElementsArray(); _i < _a.length; _i++) {
    var element = _a[_i];
    console.log("Key: ".concat(element.key, ", Age: ").concat(element.value1, ", Profession: ").concat(element.value2));
}
