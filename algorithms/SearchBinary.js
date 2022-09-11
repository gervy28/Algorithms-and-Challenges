function binarySearch(arr, elem){
    let start = 0,
        end = arr.length - 1,
        middle = Math.floor((start + end)/2);
    do{
      if(arr[middle] == elem){
        return middle;
      }
      if(elem < arr[middle]){
        end = middle - 1;
      }else {
        start = middle + 1;
      }
      middle = Math.floor((start + end)/2);
    } while(start <= end);
    return -1
  }
  
  
  binarySearch([1,2,3,4,5],10);

  // Refactor -- 
  function binarySearch(arr, elem){
    let start = 0,
        end = arr.length - 1,
        middle = Math.floor((start + end)/2);
    do{
      if(arr[middle] == elem) return middle;
      else if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end)/2);
    } while(start <= end);
    return -1
  }
  
  binarySearch([1,2,3,4,5],10);


// Another Option:

  // Refactor
  function binarySearch(arr, elem){
    let start = 0,
        end = arr.length - 1,
        middle = Math.floor((start + end)/2);
    while( arr[middle] !== elem && start <= end){
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end)/2);
    }
    return arr[middle] === elem ? middle : -1;
  }
  
  binarySearch([1,2,3,4,5],10);
