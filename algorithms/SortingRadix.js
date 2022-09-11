// find out what number is at any given point in the string
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}


// determine how many digits are in a number
function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let loops = mostDigits(nums);
    // start looping up to the number of loops
    for (let i = 0; i < loops; i++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < nums.length; j++){
            let digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
