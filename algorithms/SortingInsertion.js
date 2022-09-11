function insertionSort(arr){  
  for(let i = 1; i < arr.length; i++){
      let currentNum = arr[i];
      for(let j = i-1; j >= 0 && arr[j] > currentNum; j--){
          arr[j+1] = arr[j];
      }
      arr[j+1] = currentNum;
  }
}
insertionSort([2, 13, 4, 7, 77, 21, 1])