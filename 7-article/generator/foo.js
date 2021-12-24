
function * generateFn() {
    yield 'a';
    yield 'b';
    return 'foo';
}
const g = generateFn();

// for 循环拿不到return的值，但一直调用next()可以
// return 结束的迭代器返回的状态{value: undefined, done: true}
for(let i of g) {
    console.log(i)
}
console.log('generateFn: ', g.next());

function * generateFn1() {
    yield 'a';
    yield 'b';
    yield;
}

const g1 = generateFn1();

// for 循环拿得到yield结束的值，yield结束的迭代器返回的值{value: undefined, done: false}
for(let i of g1) {
    console.log(i)
}
console.log('generateFn1: ', g1.next(), g1.next(), g1.next());