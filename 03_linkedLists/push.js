class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  printList() {
    let temp = this.head;
    let index = 0;
    while (temp !== null) {
      console.log(`Node ${index}: ${temp.value}`);
      temp = temp.next;
      index++;
    }
    console.log(`Total nodes: ${this.length}`);
  }
}

// Example usage
let myLinkedList = new LinkedList(4);
myLinkedList.push(10);
myLinkedList.push(15);

myLinkedList.printList();

/*
Output:
Node 0: 4
Node 1: 10
Node 2: 15
Total nodes: 3
*/
