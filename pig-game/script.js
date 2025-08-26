'use strict';


//USARE # SIGNIFICA SELEZIONARE ELEMENTI TRAMITE ID MENTRE COL . PRENDIAMO LE CLASSI
const score0El = document.querySelector('#score--0');
//SELEZIONIOMA IL GIOCATORE 0 PER SALVARGLI LO SCORE
const current0El = document.getElementById('current--0');
//ALTRO METODO PER SELEZIONARE ELEMENTI TRAMITE ID
const score1El = document.getElementById('score--1');
//SELEZIONIAMO IL GIOCATORE 1 PER SALVARGLI LO SCORE
const current1El = document.getElementById('current--1');
//SELEZIONA CLASSE DADO
const diceEl = document.querySelector('.dice');
//SELEZIONE I BOTTONI DEL DADO
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//CONDIZIONI INIZIALI
score0El.textContent = 0;

//CONDIZIONI INIZIALI
score1El.textContent = 0;

//CONDIZIONI INIZIALI
diceEl.classList.add('hidden');


//SELEZIONIAMO LA CLASSE PLAYER ACTIVE PER CAMBIARE IL BACKGROUND DEL GIOCATORE CHE SI ATTIVA
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//SALVIAMO LO SCORE DI ENTRAMBI I GIOCATORI IN UN ARRAY
const scores = [0, 0];

//MEMORIZZIAMO IL RISULATO CHE PORREMMO NELLO SCORE
let currentScore = 0;

//MEMORIZZIAMO IL GIOCATORE IN GIOCO
let activePlayer = 0;

//[METODO] NEL CASO DI FINE PARTITE NON DEVE ESSERECI LA POSSIBILITA' DI CONTINUARE A GIOCARE
let playing = true;


//CREO IL METODO PER LO SWITCH PLAYER
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;//DOPO LO SWITCH SETTIAMO LO SCORE DEL GIOCATORE A 0 
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;//NEL CASO IL GIOCATORE ATTIVO SIA 0 PASSA AD 1 E VICEVERSO
    player0El.classList.toggle('player--active');//CONTROLLA SE LA CLASSE E' PRESENTE E NEL CASO IN CUI LO SIA FA LE STESSE AZIONI DEL REMOVE[CI AIUTA PER NON FARE CONTROLLI MANUALI]
    player1El.classList.toggle('player--active');//CONTROLLA SE LA CLASSE E' PRESENTE E NEL CASO IN CUI LO SIA FA LE STESSE AZIONI DEL REMOVE[CI AIUTA PER NON FARE CONTROLLI MANUALI]

};

//CREO IL MEOTODO PER IL RESET GAME
const resetGame = function () {
    //RESTART DELLO SCORE; DEL PLAYER ATTIVO E LA POSSIBILITA' DI GIOCARE ANCORA
    scores[0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};


//LOGICA PER IL BOTTON ROLL
btnRoll.addEventListener('click', function () {
    //CONTROLLIAMO SE STIAMO ANCORA GIOCANDO
    if (playing) {
        //1, GENERARE UN RANDOM DICE ROLL:
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. DISPLAY DICE:
        diceEl.classList.remove('hidden');
        //dobbiamo far mostrare l'immagine in accordo con il numero random che esce nel range tra [1-6]
        diceEl.src = `dice-${dice}.png`;

        //3. CONTROLLARE QUANDO IL DADO DA IL NUMERO 1: if true devi cambiare la mano di gioco
        if (dice !== 1) {
            //aggiungimao il numero del dado allo score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;//COSI FACENDO SALVIAMO LO SCORE DEL GIOCATORE ATTIVO
        } else {
            //cambiamo player nel caso in cui esce 1
            switchPlayer();
        }
    }
});



//LOGICA PER IL BOTTON HOLD
btnHold.addEventListener('click', function () {
    //CONTROLLIAMO SE STIAMO ANCORA GIOCANDO
    if (playing) {
        //1. AGGIUNGERE LO SCORE CORRENTE AL PLAYER ATTIVO
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2. CONTROLLARE SE LO SCORE DEL GIOCATORE CORRENTE >= 100---> SI SUDDIVIDE IN:
        if (scores[activePlayer] >= 100) {
            //finire il gioco
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //switchare al prossimo giocatore
            switchPlayer();
        }
    }
});



//LOGICA PER IL NEW GAME BOTTON
btnNew.addEventListener('click', resetGame);
