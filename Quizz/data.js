// Separate arrays for each level's questions
const entryQuestions = [
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

const midQuestions = [
    {
        question: "Which of the following best defines social engineering?",
        options: [
            { text: "A strategy for social media marketing", correct: false },
            { text: "Encrypting data with social security numbers", correct: false },
            { text: "A technique used to trick individuals into giving out confidential information", correct: true },
            { text: "A way of building stronger firewalls", correct: false }
        ]
    },
    {
        question: "What does a VPN (Virtual Private Network) do?",
        options: [
            { text: "Encrypts your internet connection for secure browsing", correct: true },
            { text: "Protects your system from malware", correct: false },
            { text: "Provides access to physical network servers", correct: false },
            { text: "Disables unwanted ads on websites", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of encryption?",
        options: [
            { text: "To make files larger and harder to share", correct: false },
            { text: "To prevent unauthorized access to data", correct: true },
            { text: "To erase sensitive data permanently", correct: false },
            { text: "To speed up data transfer", correct: false }
        ]
    },
    {
        question: "What is a DDoS attack?",
        options: [
            { text: "A type of firewall protection", correct: false },
            { text: "An attack that overloads a server with traffic", correct: true },
            { text: "A method to encrypt data", correct: false },
            { text: "A strategy to prevent phishing attacks", correct: false }
        ]
    },
    {
        question: "Which of these is an example of multifactor authentication?",
        options: [
            { text: "Just using a password", correct: false },
            { text: "Using a password and a one-time code sent to your phone", correct: true },
            { text: "Using a username and password", correct: false },
            { text: "Just using a PIN", correct: false }
        ]
    },
    {
        question: "What type of attack is characterized by injecting malicious code into a website?",
        options: [
            { text: "SQL injection", correct: true },
            { text: "Social engineering", correct: false },
            { text: "Password cracking", correct: false },
            { text: "DDoS attack", correct: false }
        ]
    },
    {
        question: "Which of these is considered a strong password?",
        options: [
            { text: "password123", correct: false },
            { text: "P@55w0rd!", correct: true },
            { text: "123456", correct: false },
            { text: "abcd1234", correct: false }
        ]
    },
    {
        question: "What is the purpose of antivirus software?",
        options: [
            { text: "To encrypt files", correct: false },
            { text: "To monitor network traffic", correct: false },
            { text: "To detect and remove malware", correct: true },
            { text: "To store passwords", correct: false }
        ]
    },
    {
        question: "What is the main function of a firewall?",
        options: [
            { text: "To block unauthorized access to a network", correct: true },
            { text: "To improve internet speed", correct: false },
            { text: "To prevent phishing scams", correct: false },
            { text: "To increase storage capacity", correct: false }
        ]
    },
    {
        question: "Which of the following is a common sign of a phishing email?",
        options: [
            { text: "It includes a high-resolution company logo", correct: false },
            { text: "It asks for sensitive information", correct: true },
            { text: "It provides customer service contact information", correct: false },
            { text: "It addresses the recipient by name", correct: false }
        ]
    }
];

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

function loadQuiz(level) {
    // Set the quiz questions based on the selected level
    currentQuiz = level === 'entry' ? entryQuestions : midQuestions;
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector('.home-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
    showBriefDescription(level);
}

function showBriefDescription(level) {
    const descriptionContainer = document.getElementById('description-container');
    descriptionContainer.innerHTML = `You selected the ${level} quiz level. Select the correct answer(s) to proceed through the quiz.`;
    descriptionContainer.style.display = 'block';
}

function displayQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        ${question.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${option.text}
            </label>
        `).join('')}
    `;

    if (currentQuestionIndex === currentQuiz.length - 1) {
        document.getElementById('done-button').style.display = 'block';
        document.getElementById('next-button').style.display = 'none';
    } else {
        document.getElementById('done-button').style.display = 'none';
        document.getElementById('next-button').style.display = 'block';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;

    const question = currentQuiz[currentQuestionIndex];
    const selectedAnswer = question.options[selectedOption.value];
    
    if (selectedAnswer.correct) {
        score++;
    }
}

function finishQuiz() {
    alert(`Quiz finished! You scored ${score} out of ${currentQuiz.length}`);
    document.getElementById('quiz-container').style.display = 'none';
    document.querySelector('.home-container').style.display = 'block';
}
