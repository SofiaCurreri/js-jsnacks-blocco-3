//Genera un numero a caso compreso tra 1 - 100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente.
//Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato.
//Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente

let contatore = 0;
const stampa = document.getElementById("stampa");
let num;
let numRandom = Math.floor((Math.random() * 100) + 1);

do {
    num = parseInt(prompt("Indovina il numero randomico"));
    if (num != numRandom) {
        contatore++;
        if (numRandom > num) {
            alert("Il numero da te inserito è minore di quello randomico");
        } else {
            alert("Il numero da te inseirto è maggiore di quello randomico");
        }
    } else {
        alert("Hai indovinato!");
    }
} while (num != numRandom);

stampa.innerHTML = "Ti ci sono voluti " + contatore + " tentativi";