// List of Questions for the Quiz
var questions = [
    {
        prompt: 'Common Web Programming Languages include:',
        choices: ['JavaScript', 'Python', 'C#', 'All of the above'],
        answer: 'All of the above',
    },
    {
        prompt: '____ is a strongly typed superset of JavaScript.',
        choices: ['StrictWrite', 'C++', 'TypeScript', 'Topaz'],
        answer: 'TypeScript',
    },
    {
        prompt: 'HTTP stands for:',
        choices: [
            'Hyperlinked Transcription Packet',
            'Hypertext Transfer Protocol',
            'Hexadecimal Transpose Procedure',
            'HTML Text Transfer Program',
        ],
        answer: 'Hypertext Transfer Protocol',
    },
    {
        prompt:
            '____ words in JavaScript cannot be used as variables, labels, or function names',
        choices: ['Reserved', 'Special', 'Static', 'Hidden'],
        answer: 'quotes',
    },
    {
        prompt:
            'Which of the following is considered truthy?',
        choices: ['true', '12', "'false'", 'All of the above'],
        answer: 'All of the above',
    },
];

// Quiz Variables
var interval = 2;
var time = questions.length * interval;
var timerCount;
var score;
var qIndex = 0;

// Highscore Variables
var highscoreList = JSON.parse(localStorage.getItem("highscores")) || [];

// HTML Elements
var timeDisplayEL = document.getElementById('timer');
var timeEl = document.getElementById('time');
var startBtn = document.getElementById('start');
var overlayEl = document.getElementById('overlay');
var quizEl = document.getElementById('quiz');
var responseEl = document.getElementById('question-response');
var responseBackingEl = document.getElementById('backing');
var questionEl;
var answerEl;

// Event Listeners
startBtn.addEventListener("click", startQuiz);

// Main Quiz Function
function startQuiz() {

    // Hide the overlay and reveal the questions
    overlayEl.classList.add('hide');
    quizEl.classList.remove('hide');
    timeDisplayEL.classList.remove('hide');

    // Update and start the timer
    timerCount = setInterval(countDown, 10000);

    // Show Questions
    displayQuestion();
};

// Time Decrementor
function countDown() {
    // While there is time left
    if (time > 0) {
        // Decrement time
        time--;
        // Update shown time
        timeEl.textContent = time;
    } else {
        // When time runs out ends the game
        clearInterval(timerCount);
        endQuiz();
    }
};

// Builds the HTML for each Question
function displayQuestion() {
    
    // Container for the question 
    questionEl = document.createElement('div');

    // Prompt text for the question
    let qPromptEl = document.createElement('p');
    qPromptEl.classList.add('question-promt')
    qPromptEl.innerText = questions[qIndex].prompt;
    questionEl.appendChild(qPromptEl);

    // List of question choices
    let qListEl = document.createElement('ol');
    qListEl.classList.add('question-list');
    // Iterates over the list of choices and adds them to the list
    for (i = 0; i < questions[qIndex].choices.length; i++) {
        let choiceEl = document.createElement('li');
        choiceEl.classList.add('question');
        let choiceBtn = document.createElement('button');
        choiceBtn.innerHTML = (`${(i + 1)}. ${questions[qIndex].choices[i]}`);
        choiceBtn.setAttribute('value', questions[qIndex].choices[i])
        choiceEl.appendChild(choiceBtn);
        qListEl.appendChild(choiceEl);
        choiceEl.addEventListener('click', checkAnswer);
    }

    // Updates the HTML with the created DOM Elements
    questionEl.appendChild(qListEl);
    quizEl.append(questionEl);

};

// Removes the current question
function clearQuestion() {
    quizEl.removeChild(questionEl);
}

// Checks if the current answer is correct
function checkAnswer(event) {
// Only activate on button clicks
    if (event.target.nodeName === 'BUTTON') {
        if (event.target.attributes.value.value === questions[qIndex].answer) {
            showAnswer('correct');
        } else {
            showAnswer('wrong');
            
            // Time penatly for wrong answers
            time -= interval;
            if (time <= 0) {
                time = 0;
                endQuiz();
            }
        }
    }
}

// Shows the correct answer with a background to indicate correct/wrong answer
function showAnswer(answerStatus) {
    // Reveals the response element and adds the correct answer to it
    responseBackingEl.classList.remove('hide');
    responseEl.classList.add(answerStatus);
    responseEl.innerText = `Correct Answer: ${questions[qIndex].answer}`;

    // Keeps the answer visible for 500ms
    setTimeout(function () {
        nextQuestion();
        responseBackingEl.classList.add('hide');
        responseEl.classList.remove(answerStatus);
    }, 500);

}

// Updates the questions index (getting a new question) if available, else ending the quiz
function nextQuestion() {
    qIndex++;
    if (qIndex < questions.length) {
        clearQuestion();
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    if (time > 0) {
        clearInterval(timerCount);
    }
    clearQuestion();
    setHighscore();
    console.log("Game Over");
};

function setHighscore(event) {
    score = {
        score: time,
        name: event.value
    };

    highscoreList.push(score);
    localStorage.setItem('highscores', JSON.stringify(highscoreList));

}