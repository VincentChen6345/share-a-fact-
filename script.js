<<<<<<< HEAD
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
=======
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 4,
    text: "AI will disrupt the tech industry",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "science",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2025,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//selecting DOM elements
const btn = document.querySelector(".btn-open"); //DOM object
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//create dom elements:render facts in list
factsList.innerHTML = "";

//load data from supabase

async function loadFacts() {
  const res = await fetch(
    "https://vxncexlumvzzdyzqxhag.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bmNleGx1bXZ6emR5enF4aGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NjkyNTMsImV4cCI6MjA1ODQ0NTI1M30.as0Nyx2m9ZBc7HOSAn3yJ1YiE8SV-XFvtRo8TxLuuE4",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bmNleGx1bXZ6emR5enF4aGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NjkyNTMsImV4cCI6MjA1ODQ0NTI1M30.as0Nyx2m9ZBc7HOSAn3yJ1YiE8SV-XFvtRo8TxLuuE4",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  // const filteredData = data.filter((el) => el.category === "entertainment");
  createFactsList(data);
}

loadFacts(); //a promise is a future value, it can be fulfilled or rejected
//json is similar to a javascript object

// factsList.insertAdjacentHTML("afterbegin", "<li>Vincent</li>");
// createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
  <p>
   ${fact.text}
    <a
      href="${fact.source}"
      target="_blank"
      class="source"
      >(Source)</a
    >
  </p>
  <span class="tag technology" style="background-color:${
    CATEGORIES.find((el) => el.name === `${fact.category}`).color
  }">${fact.category}</span>
  <div class="vote-buttons">
    <button>👍 ${fact.votesInteresting}</button><button>🤯 ${
      fact.votesMindblowing
    }</button
    ><button>⛔️ ${fact.votesFalse}</button>
  </div>
</li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  console.log(typeof html);
  factsList.insertAdjacentHTML("afterbegin", html);
  //toggle form visibility
  btn.addEventListener("click", function () {
    if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      btn.textContent = "Close";
    } else {
      form.classList.add("hidden");
      btn.textContent = "Share a fact";
    }
  });
}
>>>>>>> recovered-branch
