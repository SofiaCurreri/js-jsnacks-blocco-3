//Snack1
//Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

const valMin = parseInt(prompt("Inserisci un valore minimo"));
const valMax = parseInt(prompt("Inserisci un valore massimo"));

let numRandom;
do {
    numRandom = Math.floor(Math.random() * valMax);
} while (numRandom < valMin);

document.getElementById("stampa").innerHTML = "Il numero randomico è " + numRandom;

//SOLUZIONE ALTERNATIVA
// const numRandom = Math.floor(Math.random() * (valMax - valMin + 1) + valMin);