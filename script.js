console.log('ciao');


/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

let kms;
let age;
let price;

kms = Number(window.prompt('Inserisci i chilometri da percorrere'));
age = Number(window.prompt('Inserisci la tua età'));
console.log(kms);
console.log(age);

if (age < 18) {
    price = (kms * 0,21) - 20 %   
} else if (age > 65) {
    price = (kms * 0,21) - 40 %
} else {
    price = (kms * 0,21)
}

