// Thinking too much..

// t
function chooseBestSum(maxAllowableDistance, totalTownsToVisit, distancesBetween) {
    // the maxDriveDist needs  but can't exceed t the greatest possible sum of a sub list of integers
    // split distance between into sub arrays that contain totalTownsToVisit length
    // map value, index - > for i = index;  
    
    
    // [50 i x] length === totalTownsToVisit
    // [50 55 56]
    // [50 55 57]
    // [50 55 58]
    // [50 56 57]
    // [50 56 58]
    // [50 57 58]
    // [55 i x]   
    // [50 i x] 
  
    // [ 50+55  55+56  57+58]
    // [ 105    111    115 ] the sum of any two values needs to leave enough room for a third value
    // [ 58     !52    !48]
  
    // max sum = 58 + 57 + 56 = 115
    // is 48; n >=48 available
    // 58, 56, 55 = 49? no
    // 
  
    //  max sum of two numbers array
    // 
    //  [ 105,  106, 107 108 ]
    //  [ 58    57   56,  55 ] --> already I can break because I found a value that meets the max, therefore is max
    
    //  [ 111  112 113 ]
    //  [ 50   50  50 ]
  
  
    // 50 55 56 = 161; 50 56 57 = 163; 
    // return the highest value at each portion that does not exceed max Allowable distance
    // returns the maximum of sum of distances between a given number of towns that does not exceed an allowbale distanc
}

// Some more thinking... 
    // the maxDriveDist needs  but can't exceed t the greatest possible sum of a sub list of integers
    // split distance between into sub arrays that contain totalTownsToVisit length
    // map value, index - > for i = index;  
    
    
    // [ 50+55  55+56  57+58]
    // [ 105    111    115 ] the sum of any two values needs to leave enough room for a third value
    // [ 58     !52    !48]
  
    // max sum = 58 + 57 + 56 = 115
    // is 48; n >=48 available
    // 58, 56, 55 = 49? no
    // 
  
    //  max sum of two numbers array
    // 
    //  [ 105,  106, 107 108 ]
    //  [ 58    57   56,  55 ] --> already I can break because I found a value that meets the max, therefore is max
    
    //  [ 111  112 113 ]
    //  [ 50   50  50 ]
  
    // any sum is x + y + z + a + b = final -- I know that 
    // final - x+y !> z + a + b // any final sum cannot exceed the sum of its parts 
    // if I have 3 total combos, I'll sum 2 and look for the third
    // if I have two combos I'll sum two and find the greates sum
    // if I have 5, i'll sum 4 and look for the third - I'm back to the same loop
  
    // 50 55 56 = 161; 50 56 57 = 163; 
    // return the highest value at each portion that does not exceed max Allowable distance
    // returns the maximum of sum of distances between a given number of towns that does not exceed an allowbale distanc




    Test.describe("chooseBestSum",function() {
        Test.it("Basic tests ",function() {        
          var ts = [50, 55, 56, 57, 58]
          Test.assertEquals(chooseBestSum(163, 3, ts), 163)
          ts = [50]
          Test.assertEquals(chooseBestSum(163, 3, ts), null)
          ts = [91, 74, 73, 85, 73, 81, 87]
          Test.assertEquals(chooseBestSum(230, 3, ts), 228)
      })})

      // 230 - first; any available? yes minus second
      // order greatest to least 
      // 230 - Max

      // sort of workss

      function chooseBestSum(maxAllowableDistance, totalTownsToVisit, distancesBetween) {
        console.log(maxAllowableDistance, totalTownsToVisit, distancesBetween);
        let currentMax = 0;
        if(distancesBetween.length < totalTownsToVisit){
          return null;
        }
        for (let i = 0; i < distancesBetween.length; i++){
          for (let y = i + 1; y < distancesBetween.length; y++){
            let check = distancesBetween[i] + distancesBetween[y];
            console.log(check);
            if( check === maxAllowableDistance){
              return maxAllowableDistance;
            } else if (check < maxAllowableDistance && check > currentMax){
              
              currentMax = check;
            } 
          }
        }
        return currentMax;
      }



      // tooo stooopid

      function chooseBestSum(maxAllowableDistance, totalTownsToVisit, distancesBetween) {
        let currentMax = 0;
        if(distancesBetween.length < totalTownsToVisit){
          return null;
        }
        
        let resultArray = distancesBetween.map((distance, index) => {
          // max three
          for(let i = 0; i < totalTownsToVisit; i++){
            for(let x = 0; x <  )
            distance + distancesBetween[i] 
          }
          
          console.log(distance + ":" + index);
          
          
          
        });


        // utterly lost
        function chooseBestSum(maxAllowableDistance, totalTownsToVisit, distancesBetween) {
            let currentMax = 0;
            if(distancesBetween.length < totalTownsToVisit){
              return null;
            }
            
            let resultArray = distancesBetween.map((distance, index) => {
                console.log(distance + ":" + index);
            });
            
            for (let i = 0; i < distancesBetween.length; i++){
              for (let y = i + 1; y < distancesBetween.length; y++){
                let check = distancesBetween[i] + distancesBetween[y];
                console.log(check);
                if( check === maxAllowableDistance){
                  return maxAllowableDistance;
                } else if (check < maxAllowableDistance && check > currentMax){
                  
                  currentMax = check;
                } 
              }
            }
            return currentMax;
          }


          // I need to somehow loop a varaible distance from the index 
        //   I need sum 50 55 56 and 50 55 57 and 50 55 58
        // if I was needing 4
        // 50 55 56 57 and 50 55 56 58 
        // [ 91 74 ] 73 85 and [ 91 74 73 ] 73 and 

        // i define how many times I loop for any given number
        // 55 if I was just looking for one I would look for the sum of 55
        // looking for 2 55 + 56, 55 + 57, 55 + 58 - simple enough loop through each one

        // 100 I can subtract two numbers from it with the lowest number as the winner
        // 100 - 50 if > 0 - next number
        // 100 must subtract 3
        // 100 - 20 | > 0 yes | - 30 > 0? yes - next number = remainder 
        // 163 - 58 | 105 > 0? yes next number | 48 > 0? yes - 56 >0 ? no break

        // I think something like this would work
        // for firstOne
            // loopValue = maxnumber - firstOne; 
            // if this has success
                // for  intial = firstOne + 1; value exceeds the totalTowns -
                    // loopValue - nextNumber
                    // if it passes
                        // loop one more time +1
                    // if it doesn't pass
                    // break 
                //if I haven't hit the end previousLoop is != to length - recall this again

        // this can be solved with recursion... 

        // Loop One - gets the current number (map)
          // Loop Two - do this until you reach the end of the array 
            // Loop Three - do this until you have your max number 

            // but the problem
            // if I'm at 55 60 55 45
            // get the first number 55
                // how many numbers to add  - this breaks after three numbers
                    // 55 + every other number( this needs to break after three numbers)




                // add the next  number 55 60 
                    // add every other number
                    
// I think I'm almost there
function chooseBestSum(maxAllowableDistance, totalTownsToVisit, distancesBetween) {
    let largestValue = 0;
    for (let i = 0; i < distancesBetween.length; i++){
        let testValue = distancesBetween[i];
        for (let y = i + 1; y < distancesBetween.length; y++){
        for (let x = 0; x < totalTownsToVisit; x++){
            testValue += distancesBetween[y];
            let differenceFromMax = maxAllowableDistance - testValue;
            if ( differenceFromMax === 0 ){
            return maxAllowableDistance;
            } else if(differenceFromMax > 0 && testValue > largestValue){
            largestValue = testValue;
            }
        }
        }
    }
    return largestValue;
    }

// basic tests are passed but I think I'm about to run into the same problem && I'm still getting NaN
    function chooseBestSum(maxAllowableDistance, totalTownsToVisit, distancesBetween) {
        let largestValue = 0;
        if(distancesBetween.length < totalTownsToVisit){
          return null;
        }
        for (let i = 0; i < distancesBetween.length; i++){
          let testValue = distancesBetween[i];
          for (let y = i + 1; y < distancesBetween.length; y++){
            for (let x = 1; x < totalTownsToVisit; x++){
              testValue += distancesBetween[y+x];
              console.log(testValue);
            }
            let differenceFromMax = maxAllowableDistance - testValue;
            if ( differenceFromMax === 0 ){
              return maxAllowableDistance;
            } else if(differenceFromMax > 0 && testValue > largestValue){
              largestValue = testValue;
              testValue = distancesBetween[i];
            } else{
              testValue = distancesBetween[i];
            }
          }
        }
        return largestValue;
      }

      function chooseBestSum(maxAllowableDistance, totalTownsToVisit, distancesBetween) {
        let largestValue = 0;
        if(distancesBetween.length < totalTownsToVisit){
          return null;
        }
        for (let i = 0; i < distancesBetween.length; i++){
          let testValue = distancesBetween[i];
          for (let y = i + 1; y < distancesBetween.length; y++){
            for (let x = 1; x < totalTownsToVisit && distancesBetween[y+x] < distancesBetween.length ; x++){
              testValue += distancesBetween[y+x];
            }
            let differenceFromMax = maxAllowableDistance - testValue;
            console.log(largestValue);
            console.log(differenceFromMax);
            if ( differenceFromMax === 0 ){
              return maxAllowableDistance;
            } else if(differenceFromMax > 0 && testValue > largestValue){
              largestValue = testValue;
              testValue = distancesBetween[i];
            } else{
              testValue = distancesBetween[i];
            }
          }
        }
        return largestValue;
      }

// closer I think...

function chooseBestSum(maxAllowableDistance, totalTownsToVisit, distancesBetween) {
    let largestValue = 0;
    if(distancesBetween.length < totalTownsToVisit){
      return null;
    }
    for (let i = 0; i < distancesBetween.length; i++){
      let testValue = distancesBetween[i];
      for (let y = i + 1; y < distancesBetween.length; y++){
        for (let x = 1; x < totalTownsToVisit && distancesBetween[y+x] < distancesBetween.length ; x++){
          testValue += distancesBetween[y+x];
        }
        console.log(maxAllowableDistance);
        console.log(testValue);
        let differenceFromMax = maxAllowableDistance - testValue;
        if ( differenceFromMax === 0 ){
          return maxAllowableDistance;
        } else if(differenceFromMax > 0 && testValue > largestValue){
          largestValue = testValue;
          testValue = distancesBetween[i];
        } else{
          testValue = distancesBetween[i];
        }
      }
    }
    return largestValue;
  }


  /// Gave Up

  function chooseBestSum(t, k, ls) {
    var biggestCount = 0;
    var recurseTowns = function(townsSoFar, lastIndex) {
      townsSoFar = townsSoFar || [];
      //base case
      if (townsSoFar.length === k) {
        var sumDistance = townsSoFar.reduce((a,b)=>a+b);
        if (sumDistance <= t && sumDistance > biggestCount) {
          biggestCount = sumDistance;
        }      
        return; //EJECT
      }
      //recursive case
      for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
        recurseTowns(townsSoFar.concat(ls[i]), i);
      }
    }
    recurseTowns();
    
    return biggestCount || null;
  }


  /// next attempt without evaluating solutions:

  function chooseBestSum(maxAllowableDistance, totalTownsToVisit, distancesBetween) {
    let largestValue = 0;
    if(distancesBetween.length < totalTownsToVisit){
      return null;
    }
    // at 74
    for (let i = 0; i < distancesBetween.length; i++){
      let testValue = distancesBetween[i];
      for (let y = i + 1; y < distancesBetween.length; y++){
        testValue += distancesBetween[y];
        let loopTracker = 0;
        for (let x = 2; x <= totalTownsToVisit; x++){
          if ( x + y + loopTracker > distancesBetween.length){ // [ 0 1 2 3 ]  [ ]
            testValue = maxAllowableDistance + 1;  
            break;
          }
          testValue += distancesBetween[y+x+loopTracker];
          if (testValue > maxAllowableDistance){
            x = 1;
            loopTracker++
            testValue = distancesBetween[y];
          }
        }
        let differenceFromMax = maxAllowableDistance - testValue;
        if ( differenceFromMax === 0 ){
          return maxAllowableDistance;
        } else if(differenceFromMax > 0 && testValue > largestValue){
          largestValue = testValue;
          testValue = distancesBetween[i];
        } else{
          testValue = distancesBetween[i];
        }
      }
    }
    return largestValue;
  }