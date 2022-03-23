const person = class PersonName{
    constructor() {
        PersonName.alias = 'plus';
    }
    identifier() {
        console.log(person.name, PersonName.name)
    }
}

let p = new person();
console.log('p: ', p.alias);
p.identifier()