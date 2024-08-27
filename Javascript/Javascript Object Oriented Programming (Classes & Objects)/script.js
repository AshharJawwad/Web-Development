// let obj = {
//     a: 1,
//     b: "Ashhar"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats() {
        console.log("Eating right now")
    }

    jumps() {
        console.log("Jumping right now")
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created and it is a lion...")
    }

    eats() {
        super.eats()
        console.log("Eating right now and roaring")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera");
console.log(l)