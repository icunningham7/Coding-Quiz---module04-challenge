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
var time = questions.length * 1;
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

// Event Listeners
startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    // Hide the overlay and reveal the questions
    overlayEl.classList.add('hide');
    quizEl.classList.remove('hide');
    timeDisplayEL.classList.remove('hide');

    // Update and start the timer
    var timerCount = setInterval(countDown, 1000);

    // Show Questions
    displayQuestion();
};

function countDown() {
    // While there is time left
    if (time > 0) {
        // Decrement time
        time--;
        // Update shown time
        timeEl.textContent = time;
        console.log(time);
    } else {
        // When time runs out ends the game
        endQuiz();
    }
};


function displayQuestion() {
    // let currentQuestion = questions[questionIndex];
    let question = document.createElement('div');

    let qPromptEl = document.createElement('p');
    qPromptEl.classList.add('question-promt')
    qPromptEl.innerText = questions[qIndex].prompt;
    question.appendChild(qPromptEl);

    let qListEl = document.createElement('ul');
    qListEl.classList.add('question-list');
    for (i = 0; i < questions[qIndex].choices.length; i++) {
        let choiceEl = document.createElement('li');
        choiceEl.classList.add('question');
        choiceEl.innerHTML = questions[qIndex].choices[i];
        qListEl.appendChild(choiceEl);
    }
    question.appendChild(qListEl);

    // question.appendChild(questionList);

    quizEl.append(question);

};


function endQuiz() {

};