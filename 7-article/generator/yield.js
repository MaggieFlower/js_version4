function *generatorFn(value) {
    let step = 0;
    while (true) {
        console.log('step1: ', step, 'value: ', value);
        step = yield ++value;
        console.log('step2: ', step, 'value2: ', value);

        // if (step) {
        //     value += step
        //     console.log('计算value： ', value)
        // }
    }
}
const fn = generatorFn(7);
// for(let i of fn) {
//     console.log('i: ', i)
// }
// console.log('next1: ', fn.next(), 'next2: ', fn.next(20), 'next3: ', fn.next());
console.log('next1: ', fn.next(100), 'next2: ', fn.next(20));


function *generatorFn1() {
    return yield 'foo';
}

const fn2 = generatorFn1(12);
// next不传值，最后一个next的value=undefined
// console.log(fn2.next(), fn2.next(5), fn2.next(4));
