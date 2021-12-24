class Foo{
    [Symbol.iterator] () {
        return {
            next() {
                return {
                    done: true,
                    value: 'foo'
                }
            }
        }
    }
}

// 自定义的Symbol.iterator 和 库定义的区别
const foo = new Foo();
console.log(foo[Symbol.iterator]())
const a1 = new Array();
console.log('a1: ', a1[Symbol.iterator]());
