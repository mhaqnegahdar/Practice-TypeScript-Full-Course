const regVal = /^a/i;
const arrVal = [1, 2, 3];
const setVal = new Set(arrVal);
class Queue {
    data;
    constructor(data = []) {
        this.data = data;
        this.data = data;
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
    log() {
        console.log(this.data);
    }
}
const queueInstantce = new Queue(arrVal);
queueInstantce.pop();
queueInstantce.log();
//# sourceMappingURL=02-instantceTypes.js.map