function insertionSort(arr){  
  for(let i = 1; i < arr.length; i++){

      let currentNum = arr[i];

      for(let j = i-1; j >= 0 && arr[j] > currentNum; j--){
          arr[j+1] = arr[j];
          arr[j] = currentNum;
      }
  }

  return arr;
}


console.log(insertionSort([2, 13, 4, 7, 77, 21, 1]));

console.log( insertionSort([6, 3, 18, 0, 99, 100, 32, 45, 12, 8, 65, 54]) );

console.log( insertionSort([ 0, 3, 4, 4, 8]) );