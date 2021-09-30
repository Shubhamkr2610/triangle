const quizForms = document.querySelector(".quizForms");
const submitAnswerBtn = document.querySelector("#submitBtn");

const message = document.querySelector("#outPutBox");
const correctAnswers = ["55°", "ASA", "Isosceles triangle", "Equal", "60°"];

function calculateUserScore(){
    // console.log("okkkkkk");
    var index=0;
    var userCurrentScore=0;
    const userSelctedOptions = new FormData(quizForms);
    for(let option of userSelctedOptions.values()){
        if(option === correctAnswers[index]){
            userCurrentScore = userCurrentScore + 1;
            index = index + 1;
        }
        else{
            index = index + 1;
        }
        
    }
    message.innerText = "Your score is " + userCurrentScore;
}
submitAnswerBtn.addEventListener("click",calculateUserScore);
