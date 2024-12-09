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
    let quizQuestions = []; // This will hold the selected quiz questions.
    
    function loadQuiz(level) {
        // Select the correct set of questions based on the level.
        if (level === 'entry') {
            quizQuestions = entryQuestions;
        } else if (level === 'mid') {
            quizQuestions = midQuestions;
        } else if (level === 'senior') {
            quizQuestions = seniorQuestions;
        }
    
        // Hide home container and display the quiz container.
        document.querySelector('.home-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
    
        // Start displaying questions.
        displayQuestion();
    }
    function loadQuiz(level) {
        // Select the correct set of questions based on the level of the quiz.
        if (level === 'entry') {
            quizQuestions = entryQuestions; // Load entry-level questions.
        } else if (level === 'mid') {
            quizQuestions = midQuestions; // Load mid-level questions.
        } else if (level === 'senior') {
            quizQuestions = seniorQuestions; // Load senior-level questions.
        }
    
        // Hide the home screen and display the quiz container.
        document.querySelector('.home-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
    
        // Begin by displaying the first question.
        displayQuestion();
    }
    
    function displayQuestion() {
        // Retrieve the current question based on the index.
        const question = quizQuestions[currentQuestionIndex];
    
        // Get the HTML container for displaying the question.
        const questionContainer = document.getElementById('question-container');
    
        // Populate the container with the question and its options.
        questionContainer.innerHTML = `
            <p>${question.question}</p>
            ${question.options.map((option, index) => `
                <label>
                    <input type="checkbox" name="answer" value="${index}" onclick="checkAnswer(${index})">
                    ${option.text}
                </label><br>
            `).join('')}
        `;
    
        // Show the "done" button only for the last question; otherwise, show the "next" button.
        if (currentQuestionIndex === quizQuestions.length - 1) {
            document.getElementById('done-button').style.display = 'block';
            document.getElementById('next-button').style.display = 'none';
        } else {
            document.getElementById('done-button').style.display = 'none';
            document.getElementById('next-button').style.display = 'block';
        }
    }
    
    function nextQuestion() {
        // Move to the next question in the quiz.
        currentQuestionIndex++;
        displayQuestion(); // Display the next question.
    }
    
    function checkAnswer(selectedIndex) {
        // Get the current question object.
        const question = quizQuestions[currentQuestionIndex];
    
        // Get the selected option by its index.
        const selectedOption = question.options[selectedIndex];
    
        // If the selected option is correct, increment the score.
        if (selectedOption.correct) {
            score++;
        }
    }
    
    function finishQuiz() {
        // Hide the quiz container after the user finishes the quiz.
        document.getElementById('quiz-container').style.display = 'none';
    
        // Display the star rating based on the user's score.
        showStarRating();
    }
    
    function showStarRating() {
        // Determine the star rating based on the score as a proportion of total questions.
        let stars = '';
        if (score === quizQuestions.length) {
            stars = '★★★★★'; // Perfect score.
        } else if (score >= quizQuestions.length * 0.75) {
            stars = '★★★★☆'; // High score.
        } else if (score >= quizQuestions.length * 0.5) {
            stars = '★★★☆☆'; // Medium score.
        } else if (score >= quizQuestions.length * 0.25) {
            stars = '★★☆☆☆'; // Low score.
        } else {
            stars = '★☆☆☆☆'; // Very low score.
        }
    
        // Display the star rating and score in a popup.
        const ratingPopup = document.getElementById('star-rating');
        ratingPopup.innerHTML = `
            <p>You scored ${score} out of ${quizQuestions.length}</p>
            <p>Rating: ${stars}</p>
        `;
        ratingPopup.style.display = 'block'; // Show the rating popup.
        ratingPopup.style.animation = 'showRating 1s ease-in-out'; // Add animation to the popup.
    }
    
    // Assign the finishQuiz function to the "done" button's click event.
    document.getElementById('done-button').onclick = finishQuiz;
    