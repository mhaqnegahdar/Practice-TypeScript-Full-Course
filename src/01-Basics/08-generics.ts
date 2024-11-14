class Queue2<T> {
  private data: T[] = [];

  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
  log() {
    console.log("Remaining Data in queue ")
    console.log(this.data)
  }
}

const numQueue = new Queue2<number>();
// numQueue.push(2)
// numQueue.push(4)
// numQueue.push(6)

// Can be both T | undefinded . to solve use a guard
let firstNum = numQueue.pop();


// Type Guard

function isDfined<T>(value: T | undefined): value is T {
  return value != undefined;
}

if(isDfined(firstNum))
    console.log(firstNum)
else
console.log(`Queue is empty`)

numQueue.log()

