// script.js

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which is the largest ocean?",
        options: ["Indian", "Atlantic", "Pacific", "Arctic"],
        answer: "Pacific"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Ernest Hemingway"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "50,000 km/s"],
        answer: "300,000 km/s"
    }
];
// script.js

// script.js

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("score-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("next-btn").style.display = "none";
    score = 0;
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    
    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";  // Clear previous options
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn");
        button.onclick = () => selectAnswer(option);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        document.getElementById("next-btn").style.display = "none";
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerText = score;
}

function restartQuiz() {
    startQuiz();
}

startQuiz();  // Start the quiz when the page loads
