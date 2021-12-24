class Counter{
    // limit 最大迭代次数
    constructor(limit) {
        this.count = 1;
        this.limit = limit;
    }

    next() {
        if (this.count <= this.limit) {
            return {
                done: false,
                value: this.count ++
            }
        }
        return {
            done: true,
            value: undefined
        }
    }
    [Symbol.iterator]() {
        return this;
    }
}

const counter = new Counter(5);
console.log('counter: ', counter);

for(let c of counter) {
    console.log('c: ', c);
}
for(let c1 of counter) {
    console.log('c1: ', c1);
}