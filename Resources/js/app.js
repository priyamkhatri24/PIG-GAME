

var dice, activePlayer, roundScore, scores, gamePlaying;
activePlayer = 1;
roundScore = 0;
scores = [0,0]
gamePlaying = true;



document.querySelector('#roll-dice').addEventListener('click', function() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random()*6+1);
        var diceDOM = document.querySelector('.dice-image');
        //document.querySelector('.current-' + activePlayer).textContent = dice;
        diceDOM.src = 'Resources/img/dice-' + dice + '.png';

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('.current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }    
});

document.querySelector('#hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer-1] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer-1];

        if (scores[activePlayer-1] >= 100) {
            document.querySelector('#player-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice-image').style.display = 'none';
            gamePlaying = false;
        }

        nextPlayer();
    }    
})

function nextPlayer () {
    roundScore = 0;
    document.querySelector('.current-' + activePlayer).textContent = '0';
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;  
    document.querySelector('.first-player-block').classList.toggle('active');
    document.querySelector('.second-player-block').classList.toggle('active');
}

document.querySelector('.new-game').addEventListener('click', function() {
    activePlayer = 1;
    roundScore = 0;
    scores = [0,0];
    document.querySelector('.dice-image').style.display = 'inline-block';
    document.querySelector('.current-1').textContent = '0';
    document.querySelector('.current-2').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#score-2').textContent = '0';
    document.querySelector('#player-1').textContent = 'PLAYER 1';
    document.querySelector('#player-2').textContent = 'PLAYER 2';
    document.querySelector('.first-player-block').classList.add('active');
    document.querySelector('.second-player-block').classList.remove('active');
    gamePlaying = true;
})









