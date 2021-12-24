class Node{
    constructor(id) {
        this.id = id;
        this.neighbors = new Set();
    }
    connect(node) {
        if (node !== this){
            this.neighbors.add(node);
            node.neighbors.add(this);
        }
    }
}

class RandomGraph{
    constructor(size) {
        this.nodes = new Set();
        for(let i=0;i<size;i++) {
            this.nodes.add(new Node(i))
        }

        const percent = 1 / size;
        for(let x of this.nodes) {
            for(let y of this.nodes) {
                if (Math.random() < percent) {
                    x.connect(y)
                }
            }
        }
    }
    print() {
        [...this.nodes].forEach((item, index) => {
            console.log('neighbors: ', item.id, [...item.neighbors].map(n => n.id))
            // const ids = [...item.neighbors].forEach(it => console.log('it: ', it));
            // console.log(ids);
        })
    }
}

const y = new RandomGraph(6)
y.print()