//Q1: The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a Javascript function that takes an array of student names and assign them to one of the four houses (Gryffindor (length less than 6) Hufflepuff (length less than 8) Ravenclaw (length less than 12) or Slytherin (length greater than 12)) based on the length of their names.

let students = ["Anant", "Ayushi", "Jayant", "Shivani", "Anchal", "Sunaina", "Annapurna", "Krishnanendu", "Ravindranathan", "Shivam", "Danish", "Kaif", "Kriti", "Emmanual", "Krishnamurthi"]

let houses = []

for (const student of students) {
    if (student.length < 6) {
        houses.push("Gryffindor")
    }
    else if (student.length < 8) {
        houses.push("Hufflepuff")
    }
    else if (student.length < 12) {
        houses.push("Ravenclaw")
    }
    else {
        houses.push("Slytherin")
    }
}

console.log(houses)