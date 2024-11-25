// Quiz questions array
const quizQuestions = [
    {
      question: "What is the output of 2 + '2' in JavaScript?",
      choices: ["22", "4", "NaN", "Error"],
      answer: "22"
    },
    {
      question: "Which company developed JavaScript?",
      choices: ["Google", "Microsoft", "Netscape", "Apple"],
      answer: "Netscape"
    },
    {
      question: "How do you declare a variable in JavaScript?",
      choices: ["let", "var", "const", "All of the above"],
      answer: "All of the above"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswer = "";
  
  // Function to display the current question
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
  
    // Clear previous choices
    choicesElement.innerHTML = "";
  
    // Display question
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Display choices
    currentQuestion.choices.forEach((choice) => {
      const li = document.createElement("li");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "choice";
      radio.value = choice;
      radio.onclick = () => (selectedAnswer = choice);
      li.appendChild(radio);
      li.appendChild(document.createTextNode(choice));
      choicesElement.appendChild(li);
    });
  
    document.getElementById("result").textContent = "";
  }
  
  // Function to handle answer submission
  function submitAnswer() {
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }
  
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      score++;
      document.getElementById("result").textContent = "Correct!";
    } else {
      document.getElementById("result").textContent = "Incorrect!";
    }
  }
  
  // Function to go to the next question
  function nextQuestion() {
    selectedAnswer = "";
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      showScore();
    }
  }
  
  // Function to display the final score
  function showScore() {
    document.getElementById("question").textContent = `You scored ${score} out of ${quizQuestions.length}`;
    document.getElementById("choices").innerHTML = "";
    document.getElementById("result").textContent = "";
  }
    
  // Display the first question when the page loads
  displayQuestion();
  