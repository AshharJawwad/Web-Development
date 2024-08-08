console.log("Learning Functions in JAvascript")

// function nice(name) {
//     console.log("Hey " + name + " you are nice!")
//     console.log("Hey " + name + " you are good!")
//     console.log("Hey " + name + " Your Tshirt is nice!")
//     console.log("Hey " + name + " your softwares are good too!")
// }

// nice("Ashhar")

function sum(a, b) {
    // console.log(a + b)
    return a + b
}

result = sum(6, 9)

console.log("The sum of these numbers is: ", result)

const func1 = (x) => {
    console.log("This is an arrow function", x)
}

func1(33)
func1(44)
func1(67)