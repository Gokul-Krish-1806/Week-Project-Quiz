const questions = [
    {
    question: "1 .Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "</head>", "<meta>", " <style>"],
    correctAnswer: "<script>"
    },
    {
    question: "2.Which of the following is not JavaScript Data Types??",
    choices: ["Float", "Boolean","Number","Undefined"],
    correctAnswer: "Float"
    },
    {
    question: "3.Which company developed JavaScript?",
    choices: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
    correctAnswer: "Netscape"
    },
    {
    question: "4. JavaScript ignores?",
    choices: ["spaces", " tabs", "newlines", "All of the above"],
    correctAnswer: "All of the above"
    },
    {
        question: "5.Among the following, which one is a ternary operator in JavaScript?",
       choices: ["#", " ::", "&:", "?:"],
        correctAnswer: "?:"
    }
   ];
    let currentQuestion = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const scoreElement = document.getElementById("score");
    const submitButton = document.getElementById("submit");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    choicesElement.innerHTML = '';
    current.choices.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => checkAnswer(choice));
    choicesElement.appendChild(li);
});
}
function checkAnswer(choice) {
    const current = questions[currentQuestion];
if (choice === current.correctAnswer) {
    score++;
}
   currentQuestion++;
if (currentQuestion < questions.length) {
   loadQuestion();
} else {
   endQuiz();
}
}
function endQuiz() {
   questionElement.textContent = "Quiz Complete!";
   choicesElement.innerHTML = '';
   submitButton.style.display = "none";
   scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
}
   loadQuestion();
   submitButton.addEventListener("click", () => {
   checkAnswer(null);
});
    