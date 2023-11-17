const questions = [
    {
        question : "The deficiency of which vitamin causes night blindness?",
        answers : [
            {text : "Vitamin A", correct : true},
            {text : "Vitamin B", correct : false},
            {text : "Vitamin C", correct : false},
            {text : "Vitamin D", correct : false},
        ]
    },
    {
        question : "Which virus causes common cold?",
        answers : [
            {text : "Influenza Virus", correct : false},
            {text : "Vibriocholera", correct : false},
            {text : "Viral Conjunctivitis", correct : false},
            {text : "Rhinovirus", correct : true},
        ]
    },
    {
        question : "What vitamin helps in healing wounds?",
        answers : [
            {text : "Vitamin A", correct : false},
            {text : "Vitamin B", correct : false},
            {text : "Vitamin C", correct : true},
            {text : "Vitamin D", correct : false},
        ]
    },
    {
        question : "Which of these actions should be done in the case of snake bite?",
        answers : [
            {text : "Suck the venom", correct : false},
            {text : "Apply tight tourniquet to the wound", correct : false},
            {text : "Cut the wound by knife", correct : false},
            {text : "Wash the wound with soap and water", correct : true},
        ]
    },
    {
        question : "Which of these is not the cause of cancer?",
        answers : [
            {text : "Cell division", correct : false},
            {text : "Plastics and deodrants", correct : true},
            {text : "Chemicals and radiations", correct : false},
            {text : "Heredity", correct : false},
        ]
    },
    {
        question : "Hyperuricemia ( Uric Acid ) is associated with the malfunction of what organ?",
        answers : [
            {text : "Kidneys", correct : true},
            {text : "Liver", correct : false},
            {text : "Lungs", correct : false},
            {text : "Pancreas", correct : false},
        ]
    },
    {
        question : "What is the first aid if someone is not breathing properly and their heart has stopped?",
        answers : [
            {text : "Use hot object to press the heart in absence of AED", correct : false},
            {text : "Give abdominal thrusts", correct : false},
            {text : "Cardiopulmonary Resiscutation (CPR)", correct : true},
            {text : "Dip their body in water", correct : false},
        ]
    },
    {
        question : "Which vaccine is given to protect from tuberculosis?",
        answers : [
            {text : "OPV vaccine", correct : false},
            {text : "IPV vaccine", correct : false},
            {text : "BCG vaccine", correct : true},
            {text : "DPT vaccine", correct : false},
        ]
    },
    {
        question : "How much daily sleep should you get?",
        answers : [
            {text : "10 to 12 hours", correct : false},
            {text : "7 to 9 hours", correct : true},
            {text : "3 to 6 hours", correct : false},
            {text : "1 to 2 hours", correct : false},
        ]
    },
    {
        question : "Which of these techniques uses magnetic and radio waves to scan our body?",
        answers : [
            {text : "X-ray", correct : false},
            {text : "Endoscopy", correct : false},
            {text : "CT-scan", correct : false},
            {text : "MRI", correct : true},
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