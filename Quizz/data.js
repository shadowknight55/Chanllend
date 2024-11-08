const quizQuestions = [
    {
        question: "What are the key elements of a strong password?",
        options: [
            { text: "Using personal information like names", correct: false },
            { text: "Including numbers and special characters", correct: true },
            { text: "Making it the same as your username", correct: false },
            { text: "Using at least 12 characters", correct: true }
        ]
    },
    {
        question: "Which of the following is a type of malware?",
        options: [
            { text: "Phishing", correct: false },
            { text: "Ransomware", correct: true },
            { text: "Botnet", correct: true },
            { text: "Encryption", correct: false }
        ]
    },
    {
        question: "What is two-factor authentication (2FA)?",
        options: [
            { text: "A second layer of security after the password", correct: true },
            { text: "A method to secure physical keys", correct: false },
            { text: "Encryption of data in transit", correct: false },
            { text: "Using biometrics only for login", correct: false }
        ]
    },
    {
        question: "What is a firewall used for?",
        options: [
            { text: "Protecting your network from unauthorized access", correct: true },
            { text: "Storing sensitive information securely", correct: false },
            { text: "Running antivirus software", correct: false },
            { text: "Blocking spam emails", correct: false }
        ]
    },
    {
        question: "What is phishing?",
        options: [
            { text: "A legitimate way to contact customers", correct: false },
            { text: "A fraudulent attempt to obtain sensitive information", correct: true },
            { text: "An encryption method for securing data", correct: false },
            { text: "A way of monitoring website traffic", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz(level) {
    document.querySelector('.home-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        ${question.options.map((option, index) => `
            <label>
                <input type="checkbox" name="answer" value="${index}" onclick="checkAnswer(${index})">
                ${option.text}
            </label><br>
        `).join('')}
    `;

    // Hide "Next" button and show "Done" button only on the last question
    if (currentQuestionIndex === quizQuestions.length - 1) {
        document.getElementById('done-button').style.display = 'block';
        document.getElementById('next-button').style.display = 'none';  // Hide Next button
    } else {
        document.getElementById('done-button').style.display = 'none';  // Hide Done button
        document.getElementById('next-button').style.display = 'block'; // Show Next button
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function checkAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const selectedOption = question.options[selectedIndex];
    
    // Check if the selected option is correct
    if (selectedOption.correct) {
        score++;
    }
}

function finishQuiz() {
    alert(`Quiz finished! You scored ${score} out of ${quizQuestions.length}`);
    // Here, you can update your page to show the score or other information
}
