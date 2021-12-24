function *gen(n) {
    if(n > 10) {
        yield* gen(n - 1);
        yield n - 1
    }
}

x = gen(15);
for (let i of x) {
    console.log(i)
}