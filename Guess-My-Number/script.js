'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


//FUNZIONE PER CONTROLLARE LA LOGICA DEL GIOCO
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //QUANDO NON SI METTANO NUMERI CORRETTI
    if (!guess) {
        //document.querySelector('.message').textContent = '⛔ No number!!';
        displayMessage('⛔ No number!!');


        //QUANDO SI VINCE
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🏆 Correct Number!!';
        displayMessage('🏆 Correct Number!!');
        document.querySelector('.number').textContent = secretNumber;

        //MANIPOLARE IL CSS NEL CASO DI VITTORIA
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //SETTARE IL MIO HIGHSCORE
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }


        //QUANDO GUESS è SBAGLAITO CON CONTROLLO NEL CASO IN CUI IL VALORE SCELTO SIA PIU' GRANDE O PICCOLO DI QUELLO SCELTO
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!!!' : '📉 Too low!!!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = '😢 You lost the game :(';
            displayMessage('😢 You lost the game :(');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff6347';
            document.querySelector('.number').style.width = '30rem';
        }
    }
});


//FUNZIONE PER IL BOTTONE AGAIN PER RESETTARE SIA SCORE; BACKGROUND, LA LARGHEZZA DOVE SI TROVA IL NUMERO E RENDERE VUOTA LA BOX DOVE INSERIAMO I NUMERI
document.querySelector('.again').addEventListener('click', function () {
    //IMPOSTO LO SCORE A 20 QUELLO INIZIALE
    score = 20;
    //RICARCOLO IL NUMERO SEGRETO
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //RIPORTO LA STRINGA A QUELLA INIZIALE CON START GUESSING...[METODO PER RIAGGIORNARE OGNI VOLTA]
    document.querySelector('.message').textContent = 'Start guessing....';
    //RIPORTO LO SCORE A 20 [METODO PER RIAGGIORNALE IL VALORE OGNI VOLTA]
    document.querySelector('.score').textContent = score;
    //RIPORTO IL ? AL CENTRO AL POSTO DI FAR VEDERE IL NUMERO [METODO PER RIAGGIORNARE OGNI VOLTA]
    document.querySelector('.number').textContent = '?';
    //RIPORTO IL VALORE VUOTO ALL'INTERNO DELLA BOX[MEOTODO PER RIAGGIORNARE OGNI VOLTA]
    document.querySelector('.guess').value = '';
    //METODO PER RIASSEGNARE OGNI VOLTA LO SFONDO NERO
    document.querySelector('body').style.backgroundColor = '#222';
    //MEOTODO PER RIASSEGNARE LA GRANDEZZA DELLA BOX CON IL ? ALLA GRANDEZZA ORIGINALE
    document.querySelector('.number').style.width = '15rem';
});