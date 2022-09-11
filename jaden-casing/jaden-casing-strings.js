// problem: Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
//.Jaden is also known for some of his philosophy that he delivers via Twitter. 
// When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, 
// check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. 
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// My Original Solution:

String.prototype.toJadenCase = function () {
    // break each word into an array - split on space
    let wordArray = this.split(" ");
    let newWords = [];
    // loop through the array
    for (i = 0; i < wordArray.length; i++){
      // get the letter that we need to mutate, and transform to uppercase
      let mutatedLetter = wordArray[i].charAt(0).toUpperCase();
      // get the word that we need to mutate, remove the first letter of that word
      let cutWord = wordArray[i].slice(1, wordArray[i].length);
      // concatinate the letter back to the word
      let newWord = mutatedLetter + cutWord;
      // push to the new array
      newWords.push(newWord);
    }
    // transform the newWord array into a string, placing a space between each array element
    return newWords.join(" ");
    
    // convert the array back to a string
  };


  // Solutions with Best Practices:
  String.prototype.toJadenCase = function () {
      return this.split(" ").map(function(word){
          return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" ");
  }

  // My thoughts: this function is obviously extremely condensed compared to what I write currently; can be argued that a for loop still is a better solution
  // the map function is the perfect funciton for something like this and is what allowed them to completely eliminate the for loop
  // map provides a function for each element in an array, in order;
  // map creates a new array with the reults of calling a function for every array element
  // map does not execute the function for array elements without values
  String.prototype.toJadenCase = function () {
    // replaced a variable 'wordArray' by calling split directly on the current instance 
    // take the sentence instance, split its words into an array, 
    // on the result of this run the array map function for each element of this array (we'll call these words but could call them 
    // nothing - in which case the defualt would be this or we could call them whatver else we want). 
    // run the function that will find the first character at the current execution and find the first character of the string (char with index of 0), change that to uppercase,
    // keep in mind charAt(0) doesn't mutate, simply provides a current instance of the function
    // take what is briefly remembered as the character and add it to the rest of the word (the word that is defined as the word without the first letter) 
    return this.split(" ").map(function(word){
        // confused here, where is the word actually being passed in? I believe that the word, could be replaced by the this keyword without issue
        return word.charAt(0).toUpperCase() + word.slice(1);
        // then come back in and take all of these elements and join them out of an array into a string with a space as the thing that joins them. 
    }).join(" ");
}

// Refactoring My Solution:
String.prototype.toJadenCase = function () {
    // break each word into an array - split on space
    let wordArray = this.split(" ");
    let newWords = [];
    // loop through the array
    for (i = 0; i < wordArray.length; i++){
        // skip an entire line of code, by mutating on one line, I don't really love this actually - I think having varaibles that say what's happening is helpful
        // remove the second parameter on slice, it is optional and runs to the end
        let mutatedWord = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
        // get the word that we need to mutate, remove the first letter of that word
        // push to the new array
        newWords.push(mutatedWord);
    }
    // transform the newWord array into a string, placing a space between each array element
    return newWords.join(" ");
    };


// Using Regex:
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
    };

// slightly more clear: 
   
// what is replace? replace uses the results of the regex search as the search parameter for the second function
// this says, find all letters after a space then replace them with the result of toUpperCase()
// /
// /g - allow the regular expression to match multiple times
// ^ - begins with
// \s - white space 
// (^|\s) "find the begining of the string or the next white space character"
// [a-z] match ASCII characters in range from a-z 
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, letterAfterSpace => letterAfterSpace.toUpperCase());
    };


// My Final Solution
// Refactoring My Solution:
String.prototype.toJadenCase = function () {
    // break each word into an array - split on space
    let wordArray = this.split(" ");
    let newWords = [];
    for (i = 0; i < wordArray.length; i++){
        newWords[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }
    // transform the newWord array into a string, placing a space between each array element
    return newWords.join(" ");
};