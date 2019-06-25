
var timesClicked = -8;
var guesses = 0;
var losses = 0;

// wins
function winClick(){
    timesClicked ++;

    document.getElementById("winClicked").innerHTML = timesClicked;
    return true;
}
// guesses
function guessClick(){
    timesClicked ++;

    if(timesClicked == 1) {
       alert("game over!")
    }else{
        console.log('continue')
    }

    document.getElementById("guessClick").innerHTML = timesClicked;
    return true;
}

function lostClick(){
    timesClicked ++;

    document.getElementById("lostClick").innerHTML = timesClicked;
    return true;
}



if(timesClicked > 2){
    console.log("Over");
}
// } else if(timesClicked === 4){
//     alert("Really over!");
// }






document.onkeydown = function(event) {
	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	document.getElementById('kp').innerHTML = key_press;
    document.getElementById('kc').innerHTML = key_code;
	var status = document.getElementById('status');
	status.innerHTML = "DOWN Event Fired For : "+key_press;
}

// document.onkeyup = function(event) {
//     var key_press = String.fromCharCode(event.keyCode);
//     var status = document.getElementById('status');
//     status.innerHTML = "UP Event Fired For : " +key_press;
// }

