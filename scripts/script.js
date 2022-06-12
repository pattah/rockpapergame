const gameElements = ['rock', 'paper', 'scissors'];
function computerPlay() {      
    let elementsRun = gameElements[Math.floor(Math.random()*gameElements.length)];
    return elementsRun;
}
function rockOnly () {
    const rockII = document.querySelector('.rockII').style.display = 'block';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'block';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    

}

function paperOnly () {
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'block';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const rockImage = document.querySelector('.rockI').style.display = 'block';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'none';

}

function scissorsOnly () {
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'block';
    const paperImage = document.querySelector('.paperI').style.display = 'block';
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'none';

}


function rockOnlyPlayer () {
    const rockImage = document.querySelector('.rockI').style.display = 'block';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'block';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'none';
}

function paperOnlyPlayer () {
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const paperImage = document.querySelector('.paperI').style.display = 'block';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'block';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
}

function scissorsOnlyPlayer () {
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'block';
    const paperII = document.querySelector('.paperII').style.display = 'block';
    

}

function drawRock () {
    const rockImage = document.querySelector('.rockI').style.display = 'block';
    const rockII = document.querySelector('.rockII').style.display = 'block';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const scissorImage = document.querySelector('.scissorsI').style.display = 'none';    

}

function drawPaper () {
    const paperII = document.querySelector('.paperII').style.display = 'block'
    const paperImage = document.querySelector('.paperI').style.display = 'block';
    const scissorImage = document.querySelector('.scissorsI').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'none';


}

function drawScissor () {
    const scissorImage = document.querySelector('.scissorsI').style.display = 'block';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'block';
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none'
    const paperImage = document.querySelector('.paperI').style.display = 'none';
}

let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let playRounds = ''
let compRounds = ''





   





        
    
        
function singleRound(playerSelection, computerSelection) {
    let msg;
    let displayImages;
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        msg = "It's a draw!";
        displayImages = drawRock();
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        msg = "It's a draw!";
        displayImages = drawPaper();
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        msg = "It's a draw!";
        displayImages = drawScissor();

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playRounds++;
        msg = "You win! Rock beats scissors";
        displayImages = rockOnlyPlayer();
    }
    else if (playerSelection === 'paper' && computerSelection == 'rock') {
        playRounds++;
        msg = "You win! Paper beats rock";
        displayImages = paperOnlyPlayer();
    }
    else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        playRounds++;
        msg = "You win! Scissors beat paper";
        displayImages = scissorsOnlyPlayer();
    }


    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compRounds++;
        msg = "You lose! Rock beat scissors";
        displayImages = rockOnly();
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        compRounds++;
        msg = "You lose! Scissors beat paper";
        displayImages = scissorsOnly();
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compRounds++;
        msg = "You lose! Paper beat rock";
        displayImages = paperOnly();
    }
    
    updateScore();
    return msg
}
let count = 0;








function updateScore() {
    playerScore.textContent = 'Player: ' + playRounds;
    computerScore.textContent = 'Computer: ' + compRounds;
    
}

let roundsText = document.querySelector('.roundy')
function roundsDisplay() {
    let roundsShow;
    if (count === 1) {
        roundsShow = roundsText.textContent = 'ROUND 1';
                     roundsText.style.color = 'black';
    } if (count === 2) {
        roundsShow = roundsText.textContent = 'ROUND 2';
                     roundsText.style.color = 'black';
    } if (count === 3) {
        roundsShow = roundsText.textContent = 'ROUND 3';
                     roundsText.style.color = 'black';
    } if (count === 4) {
        roundsShow = roundsText.textContent = 'ROUND 4';
                     roundsText.style.color = 'black';
    } if (count === 5) {
        roundsShow = roundsText.textContent = 'FINAL ROUND!';
                     roundsText.style.color = 'black';
    }
    return roundsShow;
}
roundsDisplay();

let winnerDisplay = document.querySelector('.winnerDisplay')
let resetButtonII = document.querySelector('.reset')
let resetButton = document.querySelector('.reset')
const clickhere = document.querySelector('.clickhere')
const vsText = document.querySelector('.kontra')
const fiveRounds = document.querySelector('.playrounds')

const buttonRockII = document.querySelector('.rock')
const buttonRock = document.querySelector('.rock')
buttonRock.addEventListener('click', function() {
    clickhere.style.display = 'none';
    fiveRounds.style.display = 'none';
    vsText.style.display = 'block';
    let winnerResult;
    computerSelection = computerPlay();
    const result = singleRound('rock', computerSelection)
    count++;
    roundsDisplay();
    if (count === 5) {
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
        buttonRock.style.cursor = 'not-allowed';
        buttonPaper.style.cursor = 'not-allowed';
        buttonScissors.style.cursor = 'not-allowed';
        resetButton.style.display = 'block'
        
    }
        if (count === 5 && playRounds > compRounds) {
        
            winnerResult = winnerDisplay.textContent = 'You won!';
                           winnerDisplay.style.color = "#013220";
        } if (count === 5 && playRounds === compRounds) {
            
            winnerResult = winnerDisplay.textContent = "It's a draw!"
        } if (count === 5 && compRounds > playRounds) {
            
            winnerResult = winnerDisplay.textContent = 'Computer won!';
                           winnerDisplay.style.color = "#8B0000";
            }   

            return winnerResult;
           
    
});
const buttonPaperII = document.querySelector('.paper')
const buttonPaper = document.querySelector('.paper')
buttonPaper.addEventListener('click', function() {
    clickhere.style.display = 'none';
    fiveRounds.style.display = 'none';
    vsText.style.display = 'block';
    let winnerResult;
    computerSelection = computerPlay();
    const result = singleRound('paper', computerSelection)
    count++;
    roundsDisplay();
    if (count === 5) {
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
        buttonRock.style.cursor = 'not-allowed';
        buttonPaper.style.cursor = 'not-allowed';
        buttonScissors.style.cursor = 'not-allowed';
        resetButton.style.display = 'block'
    }
    if (count === 5 && playRounds > compRounds) {
        
        winnerResult = winnerDisplay.textContent = 'You won!';
                       winnerDisplay.style.color = "#013220";
    } if (count === 5 && playRounds === compRounds) {
        
        winnerResult = winnerDisplay.textContent = "It's a draw!"
    } if (count === 5 && compRounds > playRounds) {
        
        winnerResult = winnerDisplay.textContent = 'Computer won!';
                       winnerDisplay.style.color = "#8B0000";
        }      
    
        return winnerResult;
        
});
const buttonScissorsII = document.querySelector('.scissors')
const buttonScissors = document.querySelector('.scissors')
buttonScissors.addEventListener('click', function() {
    clickhere.style.display = 'none';
    fiveRounds.style.display = 'none';
    vsText.style.display = 'block';
    let winnerResult;
    computerSelection = computerPlay();
    const result = singleRound('scissors', computerSelection)
    count++;
    roundsDisplay();
    if (count === 5) {
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
        buttonRock.style.cursor = 'not-allowed';
        buttonPaper.style.cursor = 'not-allowed';
        buttonScissors.style.cursor = 'not-allowed';
        resetButton.style.display = 'block';
    }
    if (count === 5 && playRounds > compRounds) {
        
        winnerResult = winnerDisplay.textContent = 'You won!';
                       winnerDisplay.style.color = "#013220";
    } if (count === 5 && playRounds === compRounds) {
        
        winnerResult = winnerDisplay.textContent = "It's a draw!"
    } if (count === 5 && compRounds > playRounds) {
        
        winnerResult = winnerDisplay.textContent = 'Computer won!';
                       winnerDisplay.style.color = "#8B0000";
        }      

    
return winnerResult;
        
});      



function rockOnlyI () {
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'none';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    

}

function paperOnlyI () {
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'none';

}

function scissorsOnlyI () {
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'none';

}


function rockOnlyPlayerI () {
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'none';
}

function paperOnlyPlayerI () {
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const paperImage = document.querySelector('.paperI').style.display = 'block';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
}

function scissorsOnlyPlayerI () {
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const scissorsImage = document.querySelector('.scissorsI').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    

}

function drawRockI () {
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none';
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const scissorImage = document.querySelector('.scissorsI').style.display = 'none';    

}

function drawPaperI () {
    const paperII = document.querySelector('.paperII').style.display = 'none'
    const paperImage = document.querySelector('.paperI').style.display = 'none';
    const scissorImage = document.querySelector('.scissorsI').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'none';


}

function drawScissorI () {
    const scissorImage = document.querySelector('.scissorsI').style.display = 'none';
    const scissorsII = document.querySelector('.scissorsII').style.display = 'none';
    const rockImage = document.querySelector('.rockI').style.display = 'none';
    const rockII = document.querySelector('.rockII').style.display = 'none';
    const paperII = document.querySelector('.paperII').style.display = 'none'
    const paperImage = document.querySelector('.paperI').style.display = 'none';
}



function endGame(){
    
  resetButton.addEventListener('click', function () {
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
    buttonRock.style.cursor = 'pointer';
    buttonPaper.style.cursor = 'pointer';
    buttonScissors.style.cursor = 'pointer';
    resetButton.style.display = 'none';
    winnerDisplay.textContent = '';
    clickhere.style.display = 'block'
    roundsText.textContent = ''
    fiveRounds.style.display = 'block';
    rockOnlyI();
    paperOnlyI();
    scissorsOnlyI();
    scissorsOnlyPlayerI();
    paperOnlyPlayerI();
    rockOnlyPlayerI();
    drawPaperI();
    drawRockI();
    drawScissorI();
    playRounds = '';
    compRounds = '';
    count = 0;
    updateScore();


  });
}
endGame();
