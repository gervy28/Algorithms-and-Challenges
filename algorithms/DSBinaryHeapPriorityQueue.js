class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}


class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority){
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    dequeue() { 
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
            if (element.priority <= parent.priority) break;
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
                if(leftChild.priority > sinkingElement.priority) {
                    swapIndex = leftChildIndex;
                }
            } 
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                        (swapIndex === null && rightChild.priority > sinkingElement.priority) ||
                        (swapIndex !== null && rightChild.priority > leftChild.priority)
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
let ER = new PriorityQueue();

ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 10);
ER.enqueue("high fever", 5);
ER.enqueue("covid chest pains", 9);

console.log(ER.values);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
