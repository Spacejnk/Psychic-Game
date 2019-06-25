
var timesClicked = -8;
var xtimesClicked = 0;
var guesses = 0;
var losses = 0;

// wins
function winClick(){
    xtimesClicked ++;

    document.getElementById("winClicked").innerHTML = xtimesClicked;
    return true;
}
// guesses
function guessClick(){
    timesClicked ++;

    if(timesClicked == 1) {
       alert("game over!");
       document.location.reload();
    }else{
        console.log('continue');
    }

    document.getElementById("guessClick").innerHTML = timesClicked;
    return true;
}
// losses
function lostClick(){
    xtimesClicked ++;

    document.getElementById("lostClick").innerHTML = xtimesClicked;
    return true;
}

var word = "";
function dump(event) {
    var unicode = event.keyCode? event.keyCode : event.charCode;
    var actualkey = String.fromCharCode(unicode);
    word += actualkey + ", ";
    console.log(word);
    

    document.getElementById("lettersClicked").innerHTML = word;
    return true;
}
document.onkeypress = dump;












// document.onkeyup = function(event) {
//     var key_press = String.fromCharCode(event.keyCode);
//     var status = document.getElementById('status');
//     status.innerHTML = "UP Event Fired For : " +key_press;
// }

