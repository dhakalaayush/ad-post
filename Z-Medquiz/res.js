const questions = [
    {
        question : "What is the central part of our respiratory system?",
        answers : [
            {text : "Heart", correct : false},
            {text : "Nose", correct : false},
            {text : "Lungs", correct : true},
            {text : "Liver", correct : false},
        ]
    },
    {
        question : "Where are the lungs located in our body?",
        answers : [
            {text : "Chest", correct : true},
            {text : "Abdomen", correct : false},
            {text : "Below heart", correct : false},
            {text : "Below kidneys", correct : false},
        ]
    },
    {
        question : "What is the pipe carrying air to the lungs in our body?",
        answers : [
            {text : "Larynx", correct : false},
            {text : "Trachea", correct : true},
            {text : "Nasal Cavity", correct : false},
            {text : "Oesophagus", correct : false},
        ]
    },
    {
        question : "What organ is part of both respiratory system and digestive system?",
        answers : [
            {text : "Trachea", correct : false},
            {text : "Liver", correct : false},
            {text : "Nose", correct : false},
            {text : "Pharynx", correct : true},
        ]
    },
    {
        question : "What small flap of tissue prevents foods from going into the lungs?",
        answers : [
            {text : "Epiglottis", correct : true},
            {text : "Larynx", correct : false},
            {text : "Pharynx", correct : false},
            {text : "Lungs valve", correct : false},
        ]
    },
    {
        question : "What part of the lungs supply oxygen from inhaled air to the blood?",
        answers : [
            {text : "Alveoli", correct : true},
            {text : "Bronchus", correct : false},
            {text : "Bronchi", correct : false},
            {text : "Diaphgram", correct : false},
        ]
    },
    {
        question : "What blood vessel supplies the blood to the lungs from the heart for oxegenation?",
        answers : [
            {text : "Superior and Inferior Vena Cava", correct : false},
            {text : "Aorta", correct : false},
            {text : "Pulmonary Artery", correct : true},
            {text : "Pulmonary Veins", correct : false},
        ]
    },
    {
        question : "What blood vessel carries oxygenated blood from the lungs to the heart?",
        answers : [
            {text : "Aorta", correct : false},
            {text : "Superior and Inferior Vena Cava", correct : false},
            {text : "Pulmonary Veins", correct : true},
            {text : "Arteries", correct : false},
        ]
    },
    {
        question : "What is the strong muscle at the bottom of the lungs?",
        answers : [
            {text : "Septum", correct : false},
            {text : "Deltoid", correct : false},
            {text : "Brachialis", correct : false},
            {text : "Diaphgram", correct : true},
        ]
    },
    {
        question : "How do you improve respiratory health?",
        answers : [
            {text : "Avoid air pollution exposure", correct : false},
            {text : "Do regular exercise or play outdoor games", correct : false},
            {text : "Avoid smoking", correct : false},
            {text : "All of them", correct : true},
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