
document.getElementsByTagName('h1')[0].addEventListener("click", changeColor);
function colorCompute(){
    var num1 = Math.round(Math.random() * 255);
    var num2 = Math.round(Math.random() * 255);
    var num3 = Math.round(Math.random() * 255);

    return "rgb(" + num1 + "," + num2 + "," + num3 + ")";
}



function changeColor(){
  document.getElementsByTagName("body")[0].style.backgroundColor = colorCompute();
}
