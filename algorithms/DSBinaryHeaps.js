console.log('This is a Max Binary Heap. The largest value is always that the top. Values are added on the left first.');

// insert method: the value needs to bubble up
// push to the very end
// find the parent (index - 1)/2
// compare to parent

class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    extractMax() { 
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop(); 
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return max;
    }
    bubbleUp(){
        let insertAtThisIndex = this.values.length - 1;
        const element = this.values[insertAtThisIndex];
        while(insertAtThisIndex > 0){
            let parentIndex = Math.floor((insertAtThisIndex - 1)/2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[insertAtThisIndex] = parent;
            insertAtThisIndex = parentIndex;
        }
    }
    sinkDown() {
        let index = 0;
        const length =  this.values.length;
        const sinkingElement = this.values[0];
        while(true){
            let leftChildIndex = 2 * index + 1,
                rightChildIndex = 2 * index + 2,
                swapIndex = null,
                leftChild, rightChild;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild > sinkingElement) {
                    swapIndex = leftChildIndex;
                }
            } 
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                        (swapIndex === null && rightChild > sinkingElement) ||
                        (swapIndex !== null && rightChild > leftChild)
                    ) {
                        swapIndex = rightChildIndex;
                }   
            }
            if (swapIndex === null) break;
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = sinkingElement;
            index = swapIndex;
        }
    }
    // definitely can refector the above code
    sinkDownRefactor() {

    }
}


// Testing ... this is where solid testing would be great..
let testHeap = new MaxBinaryHeap();
// testHeap.insert(55);
// console.log(testHeap.values);
// testHeap.insert(199);
// console.log(testHeap.values);
// testHeap.insert(1);
// console.log(testHeap.values);

console.log(testHeap.extractMax());
console.log(testHeap.values);
console.log(testHeap.extractMax());
console.log(testHeap.values);
console.log(testHeap.extractMax());
console.log(testHeap.values);
console.log(testHeap.extractMax());
console.log(testHeap.values);
console.log(testHeap.extractMax());
console.log(testHeap.values);
console.log(testHeap.extractMax());
console.log(testHeap.values);
console.log(testHeap.extractMax());
console.log(testHeap.values);