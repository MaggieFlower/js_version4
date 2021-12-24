class Counter{
    // limit 最大迭代次数
    constructor(limit) {
        this.limit = limit;
    }
    [Symbol.iterator]() {
        let count = 1;
        const limit = this.limit;
        return {
            next() {
                if (count <= limit) {
                    return {
                        done: false,
                        value: count ++
                    }
                }
                return {
                    done: true,
                    value: undefined
                }
            }
        }
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