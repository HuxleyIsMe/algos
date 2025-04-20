class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    if (this.values.length === 1) {
      return;
    }

    let tail = this.values.length - 1;
    let index = tail;

    let count = 0;

    while (true && count < 7) {
      
  }
}

let ha = new BinaryHeap();
ha.insert(43);
ha.insert(21);
ha.insert(51);
