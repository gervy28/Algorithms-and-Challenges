// step #1: understand the problem
// max sum of contiguous subsequence in an array or list of integers ... 
    // 1 2 3 11 = maxSum = 2, 2 2 2 1 1 1 = maxSum = 6
    // actually 4 -1 2 1 = 6
    // easy -- postive nuumber and max sum is the sum of the whole array
    // if only negative = 0 
    // empty - 0 greatest sum
    // empty list or arry is also a valid sublist sub array
// examples: -2 1 -3 4 -1 2 1 -5 4 = 4 -1 2 1 or sum of this as 6
// -2, 1, -3, 4, -1, 2, 1, -5, 4 -> total sum is 1; max sum is 6 because 4 -1 2 1  


// for loop 
// we know a total sum is 1; we know if any individual number is greater than 1; the total sum is not the max sum
// max
// 2 5 -3 -2 1 2 5 
// currentCount 2 max is 2
// currentCount 7 max is 7 set max array [2, 5]
// currentCount 4 max 7
// cc 2 max 7
// cc 3 max 7
// cc 5 max 7
// cc 10 max 10 return max 10 total array


// if the full sum is high we return 

// 2 -1 -1 2
// 2 --> don't need to return array just the sum; return sum 


// -1 0 -3 3 -1 1
// if any preceding negative 0s out the sequence then you can start at your current value 

var maxSequence = function(arr){
    if(typeof arr === "string"){
      arr = new Set(arr);
      // might have to remove spaces and stuff here... 
    } 
    // check for negative array
    // if list need to turn it into an array... 
      // what if the list is set with commas? and one with spaces 
      // I guess assume commas
    // maximum 
    // current max sum holds the current maximum value outside of the loop
    // currentSum -> holds the current looping sum
    //  anot
    
    let value = arr.map((num, x) => {
      let currentSum = num
      let max = num;
      for (i = x+1; i < arr.length - x; i++){
        currentSum = currentSum + arr[i];
        // something is wrong here...
        if( currentSum > max ){
          max = currentSum;
          console.log(max);
        }
      }
      console.log(currentSum);
      return max;                    
    });
    console.log(value);
    
      // map function to run that function on every other function
      // loopSum -> this num + the next
      // if loopSum > currentSum & currentSum > maxSum
    // first num + second num
      // if first num + second + third 
    
  }


  // currentSum = -2 max -2
  // currentsume = -1 mx = -1
  //cs = -2 m = -1 

  // answers:
  // defined all variables on one line
  // utilized max
  // didn't need to loop through both arrays ... 
  // 
  var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }
// yet another
  var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}
// another
var maxSequence = function(arr){
    var max = 0;
    var cur = 0;
    arr.forEach(function(i){
      cur = Math.max(0, cur + i);
      max = Math.max(max, cur);
    });
    return max;

//another
const maxSequence = (a,sum=0) => a.reduce((max,v) => Math.max(sum = Math.max(sum + v, 0), max), 0);


// My Solution:
var maxSequence = function(arr){
    if( arr.length == 0){
      return 0;
    }
    let value = arr.map((num, x) => {
      let currentSum = num
      let max = num;
      for (i = x + 1; i < arr.length; i++){
        currentSum = currentSum + arr[i];
        if( currentSum > max ){
          max = currentSum;
        }
      }
      return max;                    
    });
    
    let maxValue = value.reduce(function(a, b){
        let test = Math.max(a,b);
        if(test < 0){
          return 0
        } else{
          return test;
        }
    });
    
    return maxValue;
  
  }