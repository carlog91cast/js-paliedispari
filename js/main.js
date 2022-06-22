// pari e dispari

// l'utente sceglie pari o dispari e inserisce un numero da 1 a 5

const userNum = prompt('inserisci un numero');

// ora stabilisco per il pc un numero randomico da 1 a 5 utilizzando la funzione

function getRandomNum() {
    Math.floor((Math.random() * 6) + 1);
};
let i = 0
for (let i = 1; i <= 5; index++) {
    if (userNum > getRandomNum) {
        console.log('you win');
    } else if (userNum < getRandomNum) {
        console.log('you lose');
    }

}