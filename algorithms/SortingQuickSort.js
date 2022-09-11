
let arr = [ 5, 2, 1, 8, 4, 7, 6, 3];


function quickSortSwap (arr, start=0, end=arr.length+1) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
    }
    let pivot = arr[start];
    let swapIndex = start; 
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot ){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    // we are again just swapping the value 
    swap(arr, start, swapIndex);
    return swapIndex;   
}

pivot(arr);

// we might not need another function actually
function quickSort (arr, left = 0, right = arr.length -1) {
    if(left < right){
        let pivotIndex = quickSortSwap(arr, left, right);
        quickSortSwap(arr, left, pivotIndex-1);
        quickSortSwap(arr, pivotIndex + 1, right);
    }
    return arr;
}    
