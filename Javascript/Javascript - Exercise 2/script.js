let rand = Math.random()
let first, second, third;

// Generating the First Word
if (rand<0.33) {
    first = "Crazy"
}

else if (rand<0.66 && rand>=0.33) {
    first = "Amazing"
}

else {
    first = "Fire"
}

// Generating the Second Word
rand = Math.random()
if (rand<0.33) {
    second = "Engine"
}

else if (rand<0.66 && rand>=0.33) {
    second = "Foods"
}

else {
    second = "Garments"
}

// Generating the Third Word
rand = Math.random()
if (rand<0.33) {
    third = "Bros"
}

else if (rand<0.66 && rand>=0.33) {
    third = "Limited"
}

else {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)