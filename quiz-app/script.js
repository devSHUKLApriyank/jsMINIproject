const questions = document.getElementById('question')
const options = document.getElementById('options')
const nextBtn = document.getElementById('nextBtn')
const score = document.getElementById('score')

const quizData = [
    {
        question: "What is JavaScript?",
        options: ["Language", "Database", "Browser", "Operating System"],
        answer: "Language"
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        options: ["var", "let", "const", "static"],
        answer: "const"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "#", "<!--"],
        answer: "//"
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "What does DOM stand for?",
        options: ["Data Object Model", "Document Object Model", "Digital Object Method", "Display Object Management"],
        answer: "Document Object Model"
    },
    {
        question: "Which operator is used to check both value and type equality?",
        options: ["==", "=", "===", "!="],
        answer: "==="
    },
    {
        question: "What is the output of typeof 42?",
        options: ["string", "number", "boolean", "undefined"],
        answer: "number"
    },
    {
        question: "Which function is used to print something in the browser console?",
        options: ["console.log()", "print()", "echo()", "display()"],
        answer: "console.log()"
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which array method creates a new array by applying a function to every element?",
        options: ["filter()", "forEach()", "map()", "reduce()"],
        answer: "map()"
    }
];

let currentQues = 0;
let currentScore = 0;


function showQues() {
    const current = quizData[currentQues];
    questions.textContent = current.question;

    current.options.forEach(function (option) {
        const button = document.createElement('button');
        button.textContent = option;
        options.appendChild(button);
    })
}
