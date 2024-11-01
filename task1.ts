import { log } from "console";

// Add this at the top of the file
export {};

// Extending the String prototype to include invert and countOccurrences methods
 declare global {
    interface String {
      invert(): string;
      countOccurrences(char: string): number;
    }
  }
  
  String.prototype.invert = function (): string {
    return this.split('').reverse().join('');
  };
  
  String.prototype.countOccurrences = function (char: string): number {
    return this.split(char).length - 1;
  };

  

  const text = 'hello'
  const invertedText = text.invert()
  const countOfChars = text.countOccurrences('1')
  console.log(invertedText)
  console.log(countOfChars)