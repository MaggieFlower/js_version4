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
            },
            return () {
                console.log('existing early');
                return {done: false, value: count ++}
            }
        }
    }
}

const counter = new Counter(7);
console.log('counter: ', counter);

const it1 = counter[Symbol.iterator];

for(let c of it1) {
    console.log('c: ', c);
    if (c > 3) break;
}
for(let c1 of it1) {
    console.log('c1: ', c1);
}

const a1 = new Array(1,2,3,4,5,6,7);
const it = a1[Symbol.iterator]();
for(let a of it) {
    console.log('a: ', a);
    if (a > 3) break;
}
for(let b of it) {
    console.log('b: ', b);
}