const obj = {};
let double = 2;
const handler = {
    get(target, prop) {
        return Reflect.get(target, prop);
    },
    set(target, prop, value) {
        if (prop === 'count' && typeof value === 'number') {
            double = value * double;
        };
        Reflect.set(target, prop, value);
    },
    deleteProperty(target, prop) {
        if (prop === 'count') {
            double = 2;
        }
        Reflect.deleteProperty(target, prop);
    }
}
const proxyObj = new Proxy(obj, handler);
proxyObj.name = 'timo';
proxyObj.count = 6;
console.log(proxyObj, double);
delete proxyObj.count;
console.log(proxyObj, double);
