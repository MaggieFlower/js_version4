
class TrackablePromise extends Promise{
    constructor(excutor) {
        const notifyHandlers = [];

        // 每个实例拥有不同的处理函数

        super((resolve, reject) => {
            excutor(resolve, reject, (status) => {
                console.log('notifyHandlers: ', notifyHandlers);

                notifyHandlers.map((handlers) => handlers(status));
            });
        });
        this.notifyHandlers = notifyHandlers;

    }
    notify(notifyHandler) {
        this.notifyHandlers.push(notifyHandler);

        // 使用链式调用
        return this;
    }
}

const t = new TrackablePromise((resolve, reject, notify) => {
    function countdown(x) {
        if (x > 0) {
            notify(`${20 * x} remaining`);
            setTimeout(() => countdown(x - 1), 1000);
        } else {
            resolve();
        }
    }
    
    countdown(5);
});
// console.log(t)
// t.notify((x) => {console.log('progress: ', x)}).notify((y) => {console.log('progress: ', y)});
// t.then(() => {console.log('complete')});


let x = new Promise((resolve, reject) => {
    resolve(2)
})

x.then(res => {}).then(res => console.log(res))