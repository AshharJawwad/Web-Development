class User {

    constructor(name) {
        // Involves the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("Jason");
console.log(user.name); // Jason

user = new User("");// Name is too short