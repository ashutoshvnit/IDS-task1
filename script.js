const questions = [
    {
   question: "what is full form of EEE branch in VNIT?",
   answers: [
        { text: "electrons and electronics", correct:false},
        {text:"electrical and electronics", correct:true},
        { text: "electrons and electricals", correct:false},
        { text: "electrons and emrald", correct:false},
    ]
    },
    {
        question: "which of these is c club of vnit?",
        answers: [
            { text: "thinkindia", correct: true},
            { text: "moodindigo", correct: false},
            { text: "ainners", correct: false},
            { text: "calluc", correct: false},
        ]
    }
];
const  questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild("button");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firsyChild);
    }
}
function selectAnswer(){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        buttton.disabled = true;
    });
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore() {
    resetState();
    questionElementinnerHTML = 'you scored ${score} out of ${questions.length}!'; 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
});

startquiz();