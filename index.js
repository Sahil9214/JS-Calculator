let text=document.getElementById("input");

let sum=''
document.getElementById("one").addEventListener("click",handleOne)
document.getElementById("two").addEventListener("click",handleTwo);
document.getElementById("three").addEventListener("click",handleThree);
document.getElementById("four").addEventListener("click",handleFour);
document.getElementById("five").addEventListener("click",handleFive);
document.getElementById("six").addEventListener("click",handleSix)
document.getElementById("seven").addEventListener("click",handleSeven)
document.getElementById("eight").addEventListener("click",handleEight)
document.getElementById("nine").addEventListener("click",handleNine)
document.getElementById("zero").addEventListener("click",handleZero)
document.getElementById("plus").addEventListener("click",handlePlus)
document.getElementById("mul").addEventListener("click",handleMul)
document.getElementById("sub").addEventListener("click",handleSub)
document.getElementById("div").addEventListener("click",handleDiv)
document.getElementById("mainBtn").addEventListener("click",handleClear)

function handleOne(){
    sum+=document.getElementById("one").value;
    text.innerText=sum
}
function handleTwo(){
    sum+=document.getElementById("two").value;
    text.innerText=sum
}
function handleThree(){
    sum+=document.getElementById("three").value;
    text.innerText=sum
}
function handleFour(){
    sum+=document.getElementById("four").value;
    text.innerText=sum
}
function handleFive(){
    sum+=document.getElementById("five").value;
    text.innerText=sum
}
function handleSix(){
    sum+=document.getElementById("six").value;
    text.innerText=sum
}
function handleSeven(){
    sum+=document.getElementById("seven").value;
    text.innerText=sum
}
function handleEight(){
    sum+=document.getElementById("eight").value;
    text.innerText=sum
}
function handleNine(){
    sum+=document.getElementById("nine").value;
    text.innerText=sum
}
function handleZero(){
    sum+=document.getElementById("zero").value;
    text.innerText=sum
}
function handleDiv(){
    sum+=document.getElementById("div").value;
    text.innerText=sum
}
function handleMul(){
    sum+=document.getElementById("mul").value;
    text.innerText=sum
}
function handleSub(){
    sum+=document.getElementById("sub").value;
    text.innerText=sum
}
function handlePlus(){
    sum+=document.getElementById("plus").value;
    text.innerText=sum
}
function handleClear(){
    sum=''
    text.innerText=''
}



document.getElementById("equal").addEventListener("click",handleEqual);
function handleEqual(e){
e.preventDefault();
text.innerText=`My answer is ${eval(sum)}`


}

