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
  // Use a method to get an array of elements instead
  getElementsArray(): ExtendedDictionaryElement<T, U, V>[] {
    return Array.from(this.elements.values());
  }
}

// Create an instance of ExtendedDictionary
const dictionary = new ExtendedDictionary<string, number, string>();

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
const user1 = dictionary.getElement("user1");
console.log("User1:", user1); 
// Output: User1: ExtendedDictionaryElement { key: 'user1', value1: 25, value2: 'Engineer' }

// Remove an element from the dictionary
dictionary.remove("user2");
console.log("Count after removing 'user2':", dictionary.count); // Output: Count after removing 'user2': 2

// Iterate over elements using for...of
for (const element of dictionary.getElementsArray()) {
  console.log(`Key: ${element.key}, Age: ${element.value1}, Profession: ${element.value2}`);
}
