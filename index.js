const num1 = Math.ceil(Math.random() * 10);

const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("questions");

questionEl.innerText = `What is ${num1} Multiply By ${num2} ?`

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

const inputEl = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }

})

scoreEl.innerText = `score: ${score}`

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}