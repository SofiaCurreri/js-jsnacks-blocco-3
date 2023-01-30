// Snack3
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const N = prompt("Inserisci un numero");
let stampa = document.getElementById("stampa");
let contatore = 0;

do {
    let vettore = [];
    for (let i = 0; i < 10; i++) {
        vettore.push(Math.floor((Math.random() * 100) + 1));
    }
    stampa.innerHTML += "<br>" + vettore;
    contatore++;
} while (contatore < N);