function *gen(n) {
    if(n > 10) {
        yield* gen(n - 1);
        yield n - 1
    }
}
console.log('测试本地文件pull是否会有未改动文件保存的提示')
x = gen(15);
for (let i of x) {
    console.log(i)
}
