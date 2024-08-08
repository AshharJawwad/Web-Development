let random = Math.random()
let a = prompt("Enter First Number")
let c = prompt("Enter Operation")
let b = prompt("Enter Second Number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if (random > 0.1) {
    // performs correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // performs incorrect calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}