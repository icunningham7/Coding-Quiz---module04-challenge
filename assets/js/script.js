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

// HTML Elements
var timeEl = document.getElementById('time');
var startBtn = document.getElementById('start');
var overlayEl = document.getElementById('overlay');

// Event Listeners
startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    overlayEl.classList.add('hide');
    console.log("startQuiz");
}