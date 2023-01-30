// Snack4(Bonus)
// Fai inserire un numero all'utente. Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente). Alla fine stampali tutti

let num = parseInt(prompt("Inserisci numero"));
const stampa = document.getElementById("stampa");
let numPrecedente;

do {
    numPrecedente = num;
    stampa.innerHTML += numPrecedente + " ";
    num = parseInt(prompt("Inserisci numero"));
} while (num >= numPrecedente);

