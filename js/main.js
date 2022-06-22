// pari e dispari

// l'utente sceglie pari o dispari e inserisce un numero da 1 a 5

const userNum = prompt('inserisci un numero');

// ora stabilisco per il pc un numero randomico da 1 a 5 utilizzando la funzione

function getRandomNum(6) {
    Math.floor((Math.random() * 6) + 1);
} 