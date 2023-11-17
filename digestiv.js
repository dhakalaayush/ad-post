const questions = [
    {
        question : "Which of these organs is not the part of the digestive system?",
        answers : [
            {text : "Mouth", correct : false},
            {text : "Liver", correct : false},
            {text : "Trachea", correct : true},
            {text : "Pancreas", correct : false},
        ]
    },
    {
        question : "What is stomach acid?",
        answers : [
            {text : "Hydrochloric acid", correct : true},
            {text : "Acetic acid", correct : false},
            {text : "Sulphuric acid", correct : false},
            {text : "Formic acid", correct : false},
        ]
    },
    {
        question : "Which organ of the digestive system secret insulin when stimulated by sugar?",
        answers : [
            {text : "Kidneys", correct : false},
            {text : "Pancreas", correct : true},
            {text : "Liver", correct : false},
            {text : "Large Intestine", correct : false},
        ]
    },
    {
        question : "Where does the protein in the food you consumed start to break down?",
        answers : [
            {text : "Small Intestine", correct : false},
            {text : "Large Intestine", correct : false},
            {text : "Stomach", correct : true},
            {text : "Appendix", correct : false},
        ]
    },
    {
        question : "Where is digestive juice known as Bile produced, which helps to digest fats and some vitamins?",
        answers : [
            {text : "Kidneys", correct : false},
            {text : "Liver", correct : true},
            {text : "Pancreas", correct : false},
            {text : "Stomach", correct : false},
        ]
    },
    {
        question : "Where is the process of breaking down of proteins from food completed?",
        answers : [
            {text : "Small Intestine", correct : true},
            {text : "Large Intestine", correct : false},
            {text : "Appendix", correct : false},
            {text : "Stomach", correct : false},
        ]
    },
    {
        question : "Where is stool made?",
        answers : [
            {text : "Liver", correct : false},
            {text : "Rectum", correct : false},
            {text : "Large Intestine", correct : true},
            {text : "Stomach", correct : false},
        ]
    },
    {
        question : "What is the open sore (hole) in the lining of intestine and stomach called?",
        answers : [
            {text : "Colitis", correct : false},
            {text : "Gastroenteritis", correct : false},
            {text : "Ulcer", correct : true},
            {text : "Diverticulitis ", correct : false},
        ]
    },
    {
        question : "Which of these glands is not the part of our digestive system?",
        answers : [
            {text : "Salivary gland", correct : false},
            {text : "Thymus", correct : true},
            {text : "Pancreas", correct : false},
            {text : "Liver", correct : false},
        ]
    },
    {
        question : "What part of the digestive system help in digestion of tough plant matter?",
        answers : [
            {text : "Large Intestine", correct : false},
            {text : "Stomach", correct : false},
            {text : "Small Intestine", correct : false},
            {text : "Appendix", correct : true},
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