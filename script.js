console.log("hello world");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

let votesInteresting = 23;
let votesMindblowing = 5;
const text = "Listbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);
let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);
