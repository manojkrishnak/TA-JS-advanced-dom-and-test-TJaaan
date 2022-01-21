let ul = document.querySelector(".content");

let index = 0;

function createContent(quotes) {
  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.innerText = quotes[index].quoteText;

    let small = document.createElement("small");
    let author = quotes[index].quoteAuthor;
    small.innerText = author.length === 0 ? "Unknown" : author;
    index++;
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
    if (Math.ceil(scrolled) === srollable && index < quotes.length) {
      createContent(quotes);
    }
  });
});
