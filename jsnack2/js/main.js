// Snack2
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let vettore = [];
let num;
let somma = 0;

do {
    num = parseInt(prompt("Inserisci un numero"));
    vettore.push(num);
    somma += num;
    console.log(num);
} while (somma < 50);