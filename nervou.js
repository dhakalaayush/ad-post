const questions = [
    {
        question : "Which of these is not the part of the nervous system?",
        answers : [
            {text : "Brain", correct : false},
            {text : "Spinal Cord", correct : false},
            {text : "Eyes", correct : true},
            {text : "Nerve", correct : false},
        ]
    },
    {
        question : "The nerve cells that send message of brain all over the body is called :",
        answers : [
            {text : "Muscle cell", correct : false},
            {text : "Epithelial cell", correct : false},
            {text : "Blood Cells", correct : false},
            {text : "Neurons", correct : true},
        ]
    },
    {
        question : "Which part of nervous system is responsible for involuntary movements?",
        answers : [
            {text : "Brain", correct : false},
            {text : "Spinal Cord", correct : true},
            {text : "Nerve cells", correct : false},
            {text : "Heart", correct : false},
        ]
    },
    {
        question : "What connects between two neurons?",
        answers : [
            {text : "Nerve joint", correct : false},
            {text : "Axon", correct : false},
            {text : "Synapses", correct : true},
            {text : "Dendrites", correct : false},
        ]
    },
    {
        question : "What part of brain is responsible for memory?",
        answers : [
            {text : "Cerebrum", correct : false},
            {text : "Hippocampus", correct : true},
            {text : "Medulla Oblongata", correct : false},
            {text : "Cerebellum", correct : false},
        ]
    },
    {
        question : "What part of brain is responsible to figure out sensation of smell,taste,sight,hearing and touch?",
        answers : [
            {text : "Parietal Lobe", correct : true},
            {text : "Occipital Lobe", correct : false},
            {text : "Frontal Lobe", correct : false},
            {text : "Cerebellum", correct : false},
        ]
    },
    {
        question : "What three-layered membrane protects brain and spinal cord?",
        answers : [
            {text : "Muscles", correct : false},
            {text : "Plasma membrane", correct : false},
            {text : "Meninges", correct : true},
            {text : "Endothelial cells", correct : false},
        ]
    },
    {
        question : "What condition affects body movement, coordination, muscle tone and posture which may lead to problem in hearing, speaking, learning and sight?",
        answers : [
            {text : "Alzeihmer's disease", correct : false},
            {text : "Epilepsy", correct : false},
            {text : "Cerebral Palsy", correct : true},
            {text : "Motor Neuron disease", correct : false},
        ]
    },
    {
        question : "What part of brain controls balance of the body and is affected by alcohol?",
        answers : [
            {text : "Brain Stem", correct : false},
            {text : "Cerebellum", correct : true},
            {text : "Spinal Cord", correct : false},
            {text : "Medulla Oblongata", correct : false},
        ]
    },
    {
        question : "Speeding up in heart rate, increase in blood pressure, sweating, etc in stressful situation is due to :",
        answers : [
            {text : "Axial Nervous System", correct : false},
            {text : "Peripheral Nervous System", correct : false},
            {text : "Asympathetic Nervous System", correct : false},
            {text : "Sympathetic Nervous System", correct : true},
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