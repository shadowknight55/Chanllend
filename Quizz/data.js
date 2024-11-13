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

const seniorQuestions = [
    {
        question: "What is the primary purpose of a DMZ (Demilitarized Zone) in a network?",
        options: [
            { text: "To separate internal and external network traffic", correct: true },
            { text: "To protect critical assets from public exposure", correct: true },
            { text: "To encrypt all data entering the network", correct: false },
            { text: "To manage user authentication", correct: false }
        ]
    },

        {
            question: "What is the primary role of a SIEM (Security Information and Event Management) system?",
            options: [
                { text: "Detecting security incidents in real time", correct: true },
                { text: "Storing and analyzing security data", correct: false },
                { text: "Managing user access to applications", correct: false },
                { text: "Creating backups of system configurations", correct: false }
            ]
        },
        {
            question: "Which of the following are key components of a Zero Trust model?",
            options: [
                { text: "Continuous verification of access", correct: true },
                { text: "Full network trust by internal users", correct: false },
                { text: "Password-only user authentication", correct: false },
                { text: "Limiting access to only essential resources", correct: false }
            ]
        },
        {
            question: "What is lateral movement in the context of a cyber attack?",
            options: [
                { text: "Moving from one system to another within a network", correct: true },
                { text: "Escaping a sandbox environment", correct: false },
                { text: "Executing ransomware on endpoint devices", correct: false },
                { text: "Running unauthorized scripts on servers", correct: false }
            ]
        },
        {
            question: "What is a common sign of a phishing attack?",
            options: [
                { text: "Suspicious or misleading URLs", correct: true },
                { text: "Use of common business logos", correct: false },
                { text: "Links to reputable websites", correct: false },
                { text: "Good spelling and grammar", correct: false }
            ]
        },
        {
            question: "What does the principle of least privilege entail in cybersecurity?",
            options: [
                { text: "Users should have only the minimal level of access required to perform their job", correct: true },
                { text: "Access should be granted based on seniority within an organization", correct: false },
                { text: "Access is given to all system resources to ensure operational efficiency", correct: false },
                { text: "Privilege escalation is allowed during emergencies", correct: false }
            ]
        },
        {
            question: "What is a primary function of a firewall?",
            options: [
                { text: "To block unauthorized access to networks", correct: true },
                { text: "To scan for malware on endpoints", correct: false },
                { text: "To backup user data", correct: false },
                { text: "To manage encryption keys", correct: false }
            ]
        },
        {
            question: "Which tool is commonly used for vulnerability scanning?",
            options: [
                { text: "Nessus", correct: true },
                { text: "Wireshark", correct: false },
                { text: "Metasploit", correct: false },
                { text: "John the Ripper", correct: false }
            ]
        },
        {
            question: "What does an APT (Advanced Persistent Threat) typically target?",
            options: [
                { text: "Sensitive data within organizations", correct: true },
                { text: "Low-level system bugs", correct: false },
                { text: "Non-essential software vulnerabilities", correct: false },
                { text: "Server performance metrics", correct: false }
            ]
        },
        {
            question: "Which of the following is most important when conducting a penetration test?",
            options: [
                { text: "Obtaining explicit written permission from the target organization", correct: true },
                { text: "Hacking into as many systems as possible", correct: false },
                { text: "Finding and exploiting every vulnerability on the network", correct: false },
                { text: "Using brute force on user credentials", correct: false }
            ]
        },
        {
            question: "What is the purpose of encryption in cybersecurity?",
            options: [
                { text: "To protect data from unauthorized access", correct: true },
                { text: "To speed up data transfer", correct: false },
                { text: "To compress files for storage", correct: false },
                { text: "To monitor data flow", correct: false }
            ]
        }
    ];
    

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

function loadQuiz(level) {
    document.querySelector('.home-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    // Load questions based on the selected level
    if (level === 'entry') {
        selectedQuestions = entryQuestions;
    } else if (level === 'mid') {
        selectedQuestions = midQuestions;
    } else if (level === 'senior') {
        selectedQuestions = seniorQuestions;
    }
    
    displayQuestion();
}

function displayQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        ${question.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${option.text}
            </label><br>
        `).join('')}
    `;

    // Show "Done" button only on the last question, otherwise show "Next"
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        document.getElementById('done-button').style.display = 'block';
        document.getElementById('next-button').style.display = 'none';
    } else {
        document.getElementById('done-button').style.display = 'none';
        document.getElementById('next-button').style.display = 'block';
    }
}

function nextQuestion() {
    const selectedOptionIndex = document.querySelector('input[name="answer"]:checked');
    if (!selectedOptionIndex) {
        alert("Please select an answer before moving to the next question.");
        return;
    }

    // Check if the selected answer is correct
    const question = selectedQuestions[currentQuestionIndex];
    if (question.options[selectedOptionIndex.value].correct) {
        score++;
    }

    // Move to the next question
    currentQuestionIndex++;
    displayQuestion();
}

function finishQuiz() {
    // Calculate and display score
    alert(`Quiz finished! You scored ${score} out of ${selectedQuestions.length}`);
    resetQuiz();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedQuestions = [];
    document.getElementById('quiz-container').style.display = 'none';
    document.querySelector('.home-container').style.display = 'block';
}