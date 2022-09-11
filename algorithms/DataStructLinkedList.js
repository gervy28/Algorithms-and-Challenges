// insert O(1)
// removal O(1) (best case); O(N) (worst case)
// searching O(N)
// Access O(N)


class Node {
    constructor(val){
        this.val = val;
		this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
	}
    push(val){
       var newNode = new Node(val);
       if (!this.head) {
           this.head = newNode;
           this.tail = this.head;
       } else{
		   this.tail.next = newNode;
           this.tail = newNode;
	   }
	   this.length++;
	   return this;
	}
	pop(){
		if(!this.head) return undefined;
		let current = this.head;
		let newTail = this.head;
		while(current.next){
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length --;
		if(this.length === 0 ){
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift(){
		if(!this.head) return undefined;
		let oldHead = this.head;
		this.head = oldHead.next;
		this.length --;
		return oldHead;
	}
	unshift(val){
		let newFirstNode = new Node(val);
		if(this.head){
			this.head = newFirstNode;
			this.tail = this.head
		} else{
			newFirstNode.next = this.head;
			this.head = newFirstNode;
		}
		this.length ++;
		return this;
	}
	get(index){
		if (index < 0 || index >= this.length) return undefined;
		let counter = 0;
		let current = this.head;
		while(counter !== index){
			current = current.next;
			counter++;
		}
		return current;
	}
	set(index, val){
		let nodeToUpdate = this.get(index);
		if (nodeToUpdate) {
			nodeToUpdate.val = val;
			return true;
		}
		return false;
	} 
	insert(index, val){
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);

		let prevNode = get(index-1),
			nextNode = prevNode.next;
			newNode = new Node(val);
		prevNode.next = newNode;
		newNode.next = nextNode;
		length++;
		return true;
	} 
	remove(index){
		if (index < 0 || index >= this.length) return false;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();
		let prevNode = this.get(index - 1),
			removeNode = prevNode.next;
		prevNode.next = removeNode.next;
		length--;
		return removeNode;
	}
	reverse () {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next;
		let prev = null;

		for(let i = 0; i < this.length; i++){
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
	}
	print(){
		let arr = [];
		let current = this.head;
		while(current){
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}


var list = new SinglyLinkedList()

list.push("Hello")
