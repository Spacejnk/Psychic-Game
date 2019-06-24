// alert("Hello World!");
// console.log("Hello World!");


var timesClicked = 0;

function btnClick(){
    timesClicked ++;

    document.getElementById("timesClicked").innerHTML = timesClicked;
    return true;
}

if(timesClicked === 10){
    alert("Over");
} else if(timesClicked === 4){
    alert("Really over!")
}