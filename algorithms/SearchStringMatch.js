// loop over longer string
// loop over the shorter string
// if the characters don't match break out of the inner loop
// if the chars do match, keep going
// if you complete the inner loop and find a match,
    // increment the count of matches
// return the count

// abgdcvTWOkfdkkjhfasTWO
//       T
//        W 
//         O
// MATCH increment
//                    T
//                     W 
//                       O
// MATCH increment

/// AAA | AAA | AAA | AAA are the substrings, AAAAAAAAAAAAA
//  AAA

// TWO -  
// 0 1 2 length = 3 if it made it to the last index or length - 1 increment by 1

// WORKS!!!!
function stringSearch(findThis, inThis){
    let count = 0;
    for (let i = 0; i < inThis.length; i++){
        if (inThis[i] === findThis[0]){
            for(let x = 1; x < findThis.length; x++){
                if(inThis[i+x] !== findThis[x]){
                    break;
                }else if (x === findThis.length -1){
                    // Need to 
                    i = (x+i)-1
                    count ++;
                }
            }
        }
    }
    return count;
}

// refactor 
function stringSearch(findThis, inThis){
    let count = 0;
    for (let i = 0; i < inThis.length; i++){
        if (inThis[i] === findThis[0]){
            for(let j = 1; j < findThis.length; j++){
                if(inThis[i+j] !== findThis[j]) break;
                if (j === findThis.length -1){
                    i = (j+i)-1;
                    count ++;
                }
            }
        }
    }
    return count;
}