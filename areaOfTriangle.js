const inputBox = document.querySelectorAll(".input-box");
const areaBtn = document.querySelector("#area-btn");
const message = document.querySelector("#outPutBox");

function checkINputValidation()
{
    if((Number(inputBox[0].value) <= 0) || (Number(inputBox[1].value) <= 0)){
        message.innerText = "Please enter valid data,Feilds can't be Negative, Zero Or Empty!!"
    }
    else
    calucateArea();
}
function calucateArea(){
    var base = Number(inputBox[0].value);
    var height = Number(inputBox[1].value);
    var area = (base*height)/2;
    message.innerText = "Area of a traingle: " + area;
}
areaBtn.addEventListener("click",checkINputValidation)
