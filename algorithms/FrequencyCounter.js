// CAN REFACTOR

function validAnagram(first, second){
    if (first.length !== second.length){
        return false;
    }
    let firstObj = {},
        secondObj = {};
    for( let i=0; i < first.length; i++){
        firstObj[first[i]] ? firstObj[first[i]] += 1 :firstObj[first[i]] = 1;
    }
    // don't need this because if we search for a 0 value it returns falsy
    for( let i=0; i < second.length; i++){
        if (!(second[i] in secondObj)){
            secondObj[second[i]] = 1;
        }else{
            secondObj[second[i]]++;
        }
    }
    for (const letter in firstObj){
        if(secondObj[letter] !== firstObj[letter]){
            return false;
        } 
    }
    return true;
}

validAnagram('aaazzg', 'zzaaab');
