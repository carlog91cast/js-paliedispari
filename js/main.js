// // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// // Sommiamo i due numeri 
// // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// // Dichiariamo chi ha vinto.


// // Chiedo Pari o dispari

// const inputPairDispair = prompt("Pari o dispari?");
// console.log("Hai inserito: " + inputPairDispair);

// while (!(inputPairDispair == "pari" || inputPairDispair == "dispari")) {
//     inputPairDispair++;
// }

// // chiedo un numero da 1 a 5

// let inputNum = 0;
// inputNum = parseInt(prompt("Inserisci un numero da 1 a 5"));

// while (inputNum < 1 || inputNum >= 5 || isNaN(inputNum)) {
//     inputNum++;
// };

// console.log("Hai inserito: " + inputNum);

// // genero un numero randomico per il pc usando una funzione

// function randomNum() {
//     return Math.floor(Math.random() * (5 - 1 + 1) + 1);
// }
// const pcNum = randomNum(1, 5);

// console.log("pc inserisce: " + pcNum);

// // sommo i due numeri

// let sum = inputNum + pcNum;

// console.log("la somma è: " + sum);

// function pairDispair(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
//     return false;
// };

// // stabiliamo chi è il vincitore

// if (pairDispair(sum) && inputPairDispair == "pari" || !pairDispair(num) && imputiPairDispair == "dispari") {
//     console.log("vince il giocatore")
// } else{
//     console.log("vince il computer");
// }

// palindromi

// inserisco una parola
const addWord = prompt('inserisci una parola');
console.log(addWord);

//  attraverso una funzione cerco di capire se la parola inserita è palindroma

function palWord(word) {

    let wordInverted = ""
    for (let i = addWord.length - 1; i > 0; i--) {

        wordInverted += addWord[i];
    };

    // vedo se la parola invertita è uguale a quella inserita

    if (wordInverted == addWord) {
        return true;
    }
    return false;

}

if (palWord == addWord) {
   console.log('è palindroma');
} else {
    console.log('non è palindroma');
};


