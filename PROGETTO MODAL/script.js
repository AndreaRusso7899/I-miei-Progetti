'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


//[METODO] PER RIOMUOVERE IL MESSAGGIO DEL MODAL
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

};
//[METODO] PER SHOWARE IL MESSAGGIO MODAL
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

//[METODO]SERVE PER L'ATTIVAZIONE DEI SHOW MODAL {FUNZIONA PER TUTTI E TRE I BOTTONI PERCHE' ABBIAMO INSERITO QUERYSELECTORALL!!!}
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal)


//RICHIAMIAMO LA FUNZIONE[CLOSE MODAL] CREATA IN PRECEDENZA IN MODO DA AVERE CODICE PIU' PULITO PER NON RIPETERE LA STESSA FUNZIONE PIU' VOLTE
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//[METODO] PER CHIUDERE IL MESSAGGIO CON IL TASTO DELLA TASTIERA ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


