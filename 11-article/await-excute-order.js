const { resolve } = require("path/posix");

async function foo() {
    console.log(1);
    return await Promise.resolve(100);
}

async function Pro() {
    return await 200
}
async function bar() {
    console.log('a');
    // return  await new Promise((resolve, reject) => {
    //     console.log('aaa');
    //     resolve(200)
    // });
    return await Pro;
}
async function fn() {
    // TODO:测试这种情况是否能捕捉到
    // return new Promise((resolve,reject) => {
    //     reject(100)
    // })
    return await 200
}
const f = foo();

const res = fn().catch(err => {console.log('234234: ', err)});
console.log('res: ', res);
f.then(console.log);

bar().then(console.log)
