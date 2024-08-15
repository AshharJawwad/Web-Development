console.log("Javascript Inserting & Removing Elements")

// let div = document.createElement("div");
// div.innerHTML = "I have been inserted <b>by Ashhar</b>"
// div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
// document.querySelector(".container").before(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<b> I am under the water. Please help me here too much raining... iuuuuuooooo </b>")