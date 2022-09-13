function insertionSort(arr){  
  for(let i = 1; i < arr.length; i++){

      let currentNum = arr[i];

      for(let j = i-1; j >= 0 && arr[j] > currentNum; j--){
          arr[j+1] = arr[j];
          // this method would constantly change the current num
          // [ 6, 3, 18, 0 ]
          // [ 3, 6, 18, 0 ]
          // [ 3, 6, 0, 18 ]
          // [ 3, 0, 6, 18 ]
          // [ 0, 3, 6, 18 ] 
          arr[j] = currentNum;
          console.log( arr );
      }
  }

  return arr;
}

function insertionSortTwo(arr){  
  for(let i = 1; i < arr.length; i++){

      let currentNum = arr[i];

      for(var j = i-1; j >= 0 && arr[j] > currentNum; j--){
          arr[j+1] = arr[j];
          // [ 3, 6, 18, 0 ] j=2
          // [ 3, 6, 18, 18 ] j = 2
          // [ 3, 6, 6, 18 ] j = 1
          // [ 3, 3, 6, 18 ] j = 0
          console.log( arr );
          // console.log( j );
      }
      // this is saying where ever you finish, insert 
      // dependent on the for loop decrementing j and then moving on
      // console.log( j );
      arr[j + 1] = currentNum;
  }

  return arr;
}


// console.log(insertionSort([2, 13, 4, 7, 77, 21, 1]));

// console.log( insertionSort([6, 3, 18, 0, 99, 100, 32, 45, 12, 8, 65, 54]) );

// console.log( insertionSortTwo([ 0, 3, 4, 4, 8]) );

insertionSortTwo( [3, 6, 18, 0] );
insertionSort( [3, 6, 18, 0] );
