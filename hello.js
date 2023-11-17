const questions = [
    {
        question : "How many bones are there in an adult human body?",
        answers : [
            {text : "500", correct : false},
            {text : "206", correct : true},
            {text : "109", correct : false},
            {text : "74", correct : false},
        ]
    },
    {
        question : "Which is the smallest bone in our body?",
        answers : [
            {text : "Knee Cap", correct : false},
            {text : "Wrist", correct : false},
            {text : "Femur", correct : false},
            {text : "Stapes", correct : true},
        ]
    },
    {
        question : "Which is the strongest bone in our body?",
        answers : [
            {text : "Knee Cap", correct : false},
            {text : "Wrist", correct : false},
            {text : "Femur", correct : true},
            {text : "Stapes", correct : false},
        ]
    },
    {
        question : "Two different bones meet at :",
        answers : [
            {text : "Cartilage", correct : false},
            {text : "Ligaments", correct : false},
            {text : "Joints", correct : true},
            {text : "Tendon", correct : false},
        ]
    },
    {
        question : "Which bone protects the heart?",
        answers : [
            {text : "Ribs", correct : true},
            {text : "Spine", correct : false},
            {text : "Skull", correct : false},
            {text : "Femur", correct : false},
        ]
    },
    {
        question : "Which is the strongest teeth in human?",
        answers : [
            {text : "Incisors", correct : false},
            {text : "Canine", correct : false},
            {text : "Bicuspids", correct : false},
            {text : "Molars", correct : true},
        ]
    },
    {
        question : "What is the spongy substance in the center of bones?",
        answers : [
            {text : "Sinus", correct : false},
            {text : "Bone Marrow", correct : true},
            {text : "Epiphysis", correct : false},
            {text : "Labyrinth", correct : false},
        ]
    },
    {
        question : "How many bones compose a human skull?",
        answers : [
            {text : "1", correct : false},
            {text : "11", correct : false},
            {text : "29", correct : true},
            {text : "33", correct : false},
        ]
    },
    {
        question : "What is the last set of teeth to grow in human body?",
        answers : [
            {text : "Second molars", correct : false},
            {text : "Molars", correct : false},
            {text : "Canine", correct : false},
            {text : "Third molars", correct : true},
        ]
    },
    {
        question : "What vitamin is necessary for a good bone health?",
        answers : [
            {text : "Vitamin D", correct : true},
            {text : "Vitammin C", correct : false},
            {text : "Vitamin A", correct : false},
            {text : "Vitamin B", correct : false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ansbuttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);'|'
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startquiz();
    }
})

startquiz();