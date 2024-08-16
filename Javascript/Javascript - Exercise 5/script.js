function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewCount;
  if (views < 1000) {
    viewCount = views;
  } else if (views > 1000000) {
    viewCount = views / 1000000 + "M";
  } else {
    viewCount = views / 1000 + "K";
  }
  let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewCount} views . ${monthsOld} months ago</p>
            </div>
        </div>`;
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard(
  "Introduction to Backend | Sigma Web Dev Video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ"
);
