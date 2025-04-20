/**
 * Ultimatly you did well here but things to note
 * you struggled with reverse
 * you also missing some key workds such as tail or head
 * It contains 3 main properties
 * head, length and tail
 *
 * doubly only has to have bi directional
 */

class Node {
  constructor(name) {
    this.state = 0;
    this.name = name;
    this.next = null;
  }
}

const cell1 = new Node("cat");
const cell2 = new Node("dog");
const cell3 = new Node("mouse");
const cell4 = new Node("horse");

class SingleList {
  constructor() {
    this.list = undefined;
  }

  push(node) {
    if (!this.list) {
      this.list = node;
      return;
    }

    let currentNode = this.list;
    while (currentNode.next) {
      let nextnode = currentNode.next;
      currentNode = nextnode;
    }
    currentNode.next = node;
  }

  shift() {
    this.list = this.list.next;
  }

  unShift(node) {
    let originalList = this.list;
    this.list = node;
    this.list.next = originalList;
  }

  get(position) {
    let ticks = 0;

    let currentNode = this.list;

    while (ticks !== position) {
      let nextnode = currentNode.next;
      currentNode = nextnode;
      ticks++;
    }

    console.log(currentNode);
  }

  /*** Sit down and go through why reverse didnt work */
  reverse() {
    let currentNode = this.list;
    let reversedList = this.list;
    let previous = undefined;

    while (currentNode.next) {
      // we get the next one in the original list
      let nextnode = currentNode.next;
      // we then change it to be the previous node
      currentNode.next = previous;
      previous = currentNode;
      currentNode = nextnode;
    }

    console.log(reversedList);
  }

  insert(node, position) {
    let currentNode = this.list;
    let previousNode = undefined;
    let ticks = 0;
    while (currentNode.next && ticks < position) {
      let nextnode = currentNode.next;
      previousNode = currentNode;
      currentNode = nextnode;
      ticks++;
    }

    previousNode.next = node;
    previousNode.next.next = currentNode;
  }

  pop() {
    let currentNode = this.list;
    let previousNode = undefined;
    while (currentNode.next) {
      let nextnode = currentNode.next;
      previousNode = currentNode;
      currentNode = nextnode;
    }

    previousNode.next = undefined;
    console.log({ poppedNode: currentNode });
  }

  loopAnd(cb) {
    if (!this.list) {
      return "no list items";
    }

    let currentNode = this.list;
    while (currentNode.next) {
      cb(currentNode);
      let nextnode = currentNode.next;
      currentNode = nextnode;
    }
    cb(currentNode);
  }
}

const Tab = new SingleList();

Tab.push(cell1);
Tab.push(cell2);
Tab.push(cell3);

const printNodeName = (node) => console.log(node.name);

// Tab.loopAnd(printNodeName);
// Tab.pop();
// Tab.loopAnd(printNodeName);
// Tab.shift();
// Tab.loopAnd(printNodeName);
// Tab.unShift(new Node("Elephant"));
// Tab.loopAnd(printNodeName);
// Tab.get(2); // dog
// Tab.insert(new Node("monkey"), 1);
// Tab.loopAnd(printNodeName);
Tab.reverse();
