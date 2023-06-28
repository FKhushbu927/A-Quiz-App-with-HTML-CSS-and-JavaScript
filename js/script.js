
const MyBtn = document.querySelector(".myBtn button");
const RulesBox = document.querySelector(".rulesBox");
const exitButton = document.querySelector(".rulesButtons .exitBtn");
const nextBtn  = document.querySelector(".rulesButtons .next-btn");

MyBtn.onClick = () =>{
    RulesBox.classList.add("activeInfo");
}

exitButton.onClick = () =>{
    RulesBox.classList.remove("activeInfo");
}

nextBtn.onClick = () =>{
    question-container.classList.add("activeQuiz");
}