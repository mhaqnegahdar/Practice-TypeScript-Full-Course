const regVal: RegExp = /^a/i;

const arrVal: Array<number> = [1, 2, 3];

const setVal: Set<number> = new Set(arrVal);

class Queue<T> {
  constructor(protected data: Array<T> = []) {
    this.data = data;
  }

  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }

  log() {
    console.log(this.data);
  }
}

const queueInstantce = new Queue(arrVal);

queueInstantce.pop();

queueInstantce.log();
