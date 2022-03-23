function addTwo(x) {
    return x + 2;
}

function addFour(x) {
    return x + 4
}

function addFive(x) {
    return x + 5
}

function addEleven(x) {
    return [addTwo, addFour, addFive].reduce((promise, fn) => {
        console.log('promise: ', promise);
        console.log('fn: ', fn.name);
        return promise.then(fn);
    }, Promise.resolve(x))
}

addEleven(10).then(res => {
    console.log('res: ', res)
});