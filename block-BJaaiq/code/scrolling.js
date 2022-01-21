let ul = document.querySelector(".content");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createContent(quotes) {
  for (let i = 0; i < 10; i++) {
    let randomNum = randomNumber(0, quotes.length);
    let li = document.createElement("li");
    li.innerText = quotes[randomNum].quoteText;

    let small = document.createElement("small");
    let author = quotes[randomNum].quoteAuthor;
    small.innerText = author.length === 0 ? "Unknown" : author;
    li.append(small);
    ul.append(li);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  alert("DOMContent Loaded");
  createContent(quotes);
  window.addEventListener("scroll", function () {
      const srollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
    if (Math.ceil(scrolled) === srollable) {
      createContent(quotes);
    }
  });
});
