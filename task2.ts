import { log } from "console";

export {}

 declare global {
    interface Array<T> {
        unique(): T[];
        countOccurrences(value: T): number;
    }
}

Array.prototype.unique = function<T>(this: T[]): T[] {
    return Array.from(new Set(this));
};

Array.prototype.countOccurrences = function<T>(value: T): number {
    return this.filter(item => item === value).length;
};
  
const arr = [1, 1, 2, 3, 4, 5]

const unique = arr.unique()
const countOccurrences = arr.countOccurrences(1)

console.log('unique ', unique)
console.log('countOccurences ', countOccurrences)