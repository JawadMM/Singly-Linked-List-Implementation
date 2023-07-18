class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  preppend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    const leaderNode = this.traversToIndex(index - 1);
    const pointerHolder = leaderNode.next;

    leaderNode.next = newNode;
    newNode.next = pointerHolder;
    this.length++;
  }

  traversToIndex(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

let LL = new LinkedList(10);

LL.append(5);
LL.append(16);
LL.preppend(1);

LL.insert(3, 99);

console.log(LL.printList());
