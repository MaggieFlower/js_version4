class Cls{
    constructor() {
        this.name = 'oubenben';
        this.age = "26"
    }
}

Cls.prototype.alias = 'benben';

const s = new Cls();
for (let attr in s) {
    console.log('attr: ', attr)
}
// s.hasOwnProperty  实例上的所有属性
// in 操作符能够遍历实例和原型上所有枚举的数据
console.log(s.get)