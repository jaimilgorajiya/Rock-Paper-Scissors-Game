let win = 0;
let tie = 0;
let lose = 0;

function computermove1(){
    let randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }
    return computerMove;
}

let isAutoPlaying = false;
let intervalId;
function autoPlay(){ 
    if(!isAutoPlaying){
       intervalId = setInterval(function(){
            let playerMove = computermove1();
            game(playerMove);
        },1000); 
        isAutoPlaying = true;
    }
}

document.body.addEventListener('keydown',(event) => {
    if(event.key =='r'){
        game('Rock');
    } else if(event.key == 'p'){
        game('Paper');
    } else if(event.key == 's'){
        game('Scissors');
    }
});

function stopAutoPlay() {
    clearInterval(intervalId);
    isAutoPlaying = false;
}

function game(yourMove){

    let computerMove = computermove1();
   
    let result = '';
    let symbol = '';

    if(yourMove === computerMove){
        result = "Its a Tie!!!";
        symbol = "🤝";
    }
    else if(yourMove === 'Paper' && computerMove === 'Rock' ||
            yourMove === 'Scissors' && computerMove === 'Paper' ||
            yourMove === 'Rock' && computerMove === 'Scissors'){
        result = 'You Win!!!';
        symbol = "🏆";
    }
    else{
        result = "You Lose!!!";
        symbol = "💔";
    }

  
    if(result == 'Its a Tie!!!'){
       tie += 1;
    }

    else if(result == 'You Win!!!'){
        win+= 1;
    }

    else if(result == 'You Lose!!!'){
        lose+= 1;
    }

    let moveSymbols = {
        'Rock': '✊',
        'Paper': '✋',
        'Scissors': '✌️'
    };

    document.getElementById('result').innerHTML = `You Choose ${moveSymbols[yourMove]} ${yourMove}. <br> Computer Choose ${moveSymbols[computerMove]} ${computerMove}. <br>${result} ${symbol}`;
    document.getElementById('score').innerHTML = "Win = " + win + " Lose = " + lose +  " Tie = " + tie;
}

function reset(){
    win = 0;
    lose = 0;
    tie = 0;
    document.getElementById("score").innerHTML = "Win = 0 Lose = 0 Tie = 0";
}