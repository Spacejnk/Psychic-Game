
var timesClicked = -8;
var xtimesClicked = 0;
var guesses = [8];
var losses = 0;

// var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l',
// 'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// var computerChoice = alpha[Math.floor(Math.random() * alpha.length)];

// console.log(word)



// wins function
function winClick(){
    xtimesClicked ++;

    document.getElementById("winClick").innerHTML = xtimesClicked;
    return true;
}

// guesses function
function guessClick(){
    timesClicked ++;

    if(timesClicked == 1) {
       console.log("game over!");
       document.location.reload();
       alert("game over!");
    }
    // else{
    //     console.log('dcontinue');
    // }

    document.getElementById("guessClick").innerHTML = timesClicked;
    return true;
}

// losses function
function lostClick(){
    xtimesClicked ++;

    document.getElementById("lostClick").innerHTML = xtimesClicked;
    return true;
}

// word function
var word = "";
function dump(event) {
    var unicode = event.keyCode? event.keyCode : event.charCode;
    var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var computerChoice = alpha[Math.floor(Math.random() * alpha.length)];
    var actualkey = String.fromCharCode(computerChoice);
    word +=  computerChoice + ", ";
    computerChoice === guessClick();


    var elem = document.getElementById('lettersClicked');
    
    
    
    if(elem.innerHTML.indexOf(computerChoice) > -1 ){

    lostClick();
        
    } else{
    winClick();

    }
    
    
    var targetLetters = document.getElementById( 'lettersClicked' );

    // To get the text only, you can use "textContent"
    console.log( targetLetters.textContent ); // "1 2 3 4"


    document.getElementById("lettersClicked").innerHTML = word;
    return true;

}
document.onkeypress = dump;







