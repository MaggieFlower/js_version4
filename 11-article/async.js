async function foo() {
    console.log(1);
    // 直接发生错误，期约无法捕获
    // Promise.reject('3');

    // 使用await
    await Promise.reject('3');
}
foo().catch(console.log)
async function bar() {
    console.log(2);
    await Promise.reject('4');
}
bar().catch(console.log);
async function fn() {
    const a = () => {console.log(500); return 200};
    return Promise.reject(a())
}
console.log(Promise.resolve(19).then(console.log));
fn().catch(console.log)

