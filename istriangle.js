const inputData = document.querySelectorAll(".userInput");
const triangleValidationBtn = document.querySelector("#isTriangleBtn");
const message = document.querySelector("#outPutBox");

function totalAngle(){
    var sum=0;
    // console.log("okkkk");
    for(var i=0;i<inputData.length;i++)
    {
        sum = sum + Number(inputData[i].value);
        // console.log(inputData[i].value);
    }
    if((Number(inputData[0].value) <= 0) || (Number(inputData[1].value) <= 0) || (Number(inputData[2].value) <= 0)){
        alert("No sides can be 0 Or empty!!");
    }
    else{
        triangleValidation(sum);
    }

}
function triangleValidation(angle){
    if(angle === 180)
    message.innerText = "Yes, angles " + inputData[0].value + ", " + inputData[1].value + ", " + inputData[2].value + " form a triangle."
    else
    message.innerText = "No, such any triangle can be formed!";
}
triangleValidationBtn.addEventListener("click",totalAngle);