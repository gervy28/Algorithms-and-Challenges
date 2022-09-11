// attempt #1: got halfway done here and realized I was doing it wrong. Biggest issue is I didn't look at string functions first
function isIsogram(str){
    // checkArray bring the entire string to lowercase then create array from these values
    let checkString = str.toLowerCase
    // loop through the entire array checking for a unique value
    // step #1 start the loop for each value
    for (i = 0; i < checkString.length; i++ ){
      // let resultsArray = [];
      // look for this value at each iteration, this is unnecessary
      // build an array of values to check this current value against
      let loopString = checkString.splice(i, 1); 
      // loop through each value in the second array to see if the current value matches any of those values
      for (x = i; x < loopString.length; x++){
        // looping through each value in this new array that does not contain the checkArray's current value
        // if the currentValue in the checkArray is the same as the loop array value 
        if (checkString[i] === loopString[x]){
            return false;
        }
      }
    }
      
    }
    // filter, will need to define the function
  }


  // Here is my Final Solution, Don't think this looks too elegant at all!! Need to heavily refactor
  function isIsogram(str){
    let checkString = str.toLowerCase();
    let returnValue = true;
    for (i = 0; i < checkString.length; i++ ){
      let loopString = checkString.slice(i+1); 
      for (x = 0; x < loopString.length; x++){
        if (checkString[i] === loopString[x]){
          return returnValue = false;
        }
      }
      if (returnValue === false){
        return;
      }
    }
    return returnValue;
  }

tests:

  // Solution #1:
  // thought process we can use a regular expression to say, take this letter and find it multiple times throughout this word, if you can find it multiple times, it fails
  // again regular expressions not generally considered a best practice
  function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }

  // Define a capturing group - (\w) match any word character
  // . symbolizes any character at all; * makes this search optional AND greedy - meaning engine will keep matching the following character until something doesn't match or the end of the string is reached
  // ^^ purpose is there may be other characters inbetween duplicate characters
  // \1 --> treats first matched letter as a variable and looks for the exact same variable again, if the string has the same characters nothing will match because it is looking for the string twixe
  // test returns true or false if the expression matches something, expression is 'looking for an instance of repeating characters' this funciton results in yes there are repeating charactes,
  // ! reverses the boolean 

  // Solution #2:
  // .size returns the number of unique elements in a Set object 
  // when a string is passed into a Set it creates an array of that String
  // Thought process: if the number of unique elements is equal to the string length then there are no duplicate values; 
  function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

// Solution #3:
// issues here - people say this solution performs very poorly, which I could understand, lots of looping here. 
// again looks like I am declaring too many variables, plus had I known the Set syntax this would have been easy
// no quick Googling brought me to an answer outside of this. 
// the key to understand here is that i & j can be independent representations of the variables themselves... 
    //  Think: we need to check the current letter against every other letter in the array. To do so we need to get each letter and check them against the rest
    // The current letter needs to be in one loop and while we have it we need to compare that to each of the other letters
    // those other letters can be represented as all the letters at the current point plus one
// soo... in a refactor I can make things more simple by removing variables.  
// the for loop will run and only return what you tell it to return

function isIsogram(str){
  // declare some variables
  var i, j;
  // make them all lowercase to make matches legit
  str = str.toLowerCase();
  // for each element in the string run a loop 
  for(i=0; i<str.length; ++i){
    for (j = i + 1; j < str.length; ++j){
      if (str[i] === str[j]){
        return false;
      }
    }
  }
  return true;
}


// Refactor
function isIsogram(str){
  // declare my variables so I know what they will be
  let checkFor,
      checkIn,
      str = str.toLowerCase();
  
  for (checkFor = 0; checkFor < checkString.length; checkFor++ ){ 
    // changed this, because you don't actually need to create the string, the string already 
    // exists if you just start one index position away
    // let loopString = checkString.slice(i+1); 
    for (checkIn = checkFor + 1; checkIn < str.length; checkIn++){
      if (checkString[checkFor] === loopString[checkIn]){
        return false;
      }
    }
  }
  return true;
}


// Even Better Refactor

// Create a function to check if a string is an isogram
// an isogram contains no duplicate letters
// compare the value in a strings postion to each other position within the string
// loop one - grab outter letter; loop two - compare outer letter to each other letter
function isIsogram(str){
  let o, i;
  str = str.toLowerCase;
  // establish the outter loop; o represntes the index of each letter in the string
  for(o = 0; o < str.length; o++){
    // while looping compare against the remaining string
    for(i = o + 1; i < str.length; i++){
      // outter index v current inner index 
      if(str[o] === str[i]){
        return false;
      }
    }
  }
  return true;
}

// Tests:
Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
Test.assertSimilar( isIsogram("isogram"), true );
Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
Test.assertSimilar( isIsogram("isIsogram"), false );
Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );

// Written one more time with Set

// create a new Set object
// Set object contains all string values as an array
// size grabs the amount of unique values
// .length defines the length of the string
// if unique values equal the length of string, no unique values
function isIsogram(str){
  return new Set(str.toLowerCase()).size == str.length;
}