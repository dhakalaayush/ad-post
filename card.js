const questions = [
    {
        question : "How many chambers are there in a human heart?",
        answers : [
            {text : "1", correct : false},
            {text : "2", correct : false},
            {text : "3", correct : false},
            {text : "4", correct : true},
        ]
    },
    {
        question : "If AB +ve blood group is Universal Acceptor, then which blood group is Universal Donor?",
        answers : [
            {text : "A +ve", correct : false},
            {text : "O -ve", correct : true},
            {text : "O +ve", correct : false},
            {text : "B +ve", correct : false},
        ]
    },
    {
        question : "Which blood vessel carries deoxygenated blood back to the heart?",
        answers : [
            {text : "Arteries", correct : false},
            {text : "Capillaries", correct : false},
            {text : "Veins", correct : true},
            {text : "Arteriole", correct : false},
        ]
    },
    {
        question : "What makes blood red?",
        answers : [
            {text : "Glucose", correct : false},
            {text : "Copper compound", correct : false},
            {text : "Platelets", correct : false},
            {text : "Hemoglobin", correct : true},
        ]
    },
    {
        question : "What substance in blood protects you against germs and illness and acts as immunity cell?",
        answers : [
            {text : "White Blood Cells", correct : true},
            {text : "Red Blood Cells", correct : false},
            {text : "Platelets", correct : false},
            {text : "Plasma", correct : false},
        ]
    },
    {
        question : "What is the artificial device placed on the body that helpsin regulating heartbeat?",
        answers : [
            {text : "Heart Machine", correct : false},
            {text : "Pacemaker", correct : true},
            {text : "Electrolarynx", correct : false},
            {text : "Beat regulator", correct : false},
        ]
    },
    {
        question : "What blood vessel connected to the heart supplies blood from heart to other blood vessels?",
        answers : [
            {text : "Superior and Inferior Vena Cava", correct : false},
            {text : "Pulmonary Artery", correct : false},
            {text : "Aorta", correct : true},
            {text : "Pulmonary Veins", correct : false},
        ]
    },
    {
        question : "What device is used to measure blood pressure?",
        answers : [
            {text : "Stethoscope", correct : false},
            {text : "Spirometer", correct : false},
            {text : "Sphygmomanometer", correct : true},
            {text : "BP caliper", correct : false},
        ]
    },
    {
        question : "What is the normal blood pressure of human?",
        answers : [
            {text : "90/60 mm of Hg", correct : false},
            {text : "130/90 mm of Hg", correct : false},
            {text : "100/50 mm of Hg", correct : false},
            {text : "120/80 mm of Hg", correct : true},
        ]
    },
    {
        question : "How do you improve cardiovascular health?",
        answers : [
            {text : "Consume vegetables, tomato, fishes, grains, beans, etc", correct : false},
            {text : "Do regular exercise or play outdoor games", correct : false},
            {text : "Avoid alcohol, oily foods and smoking", correct : false},
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