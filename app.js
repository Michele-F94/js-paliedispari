console.log("js-paliedispari");

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const SceltaUtente = prompt("Scegli pari o dispari").toLowerCase();
console.log(SceltaUtente);
const SceltaNum = parseInt(prompt("Inserisci un numero da 1 a 5"));


//Controlliamo che il numero sia compreso tra 1 e 5
if (SceltaNum < 5 && SceltaNum > 1) 
    console.log("Il numero è compreso tra 1 e 5");
else {
    console.log("Il numero non è compreso tra 1 e 5");
}
console.log(SceltaNum);


//Generiamo un numero random (sempre da 1 a 5) per il computer
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 5));


//Sommiamo i due numeri
let somma = SceltaNum + getRandomNumber(1, 5);
console.log(somma);


//Stabiliamo se la somma dei due numeri è pari o dispari
function isEven(num) {
    return num % 2 === 0;
}


//Dichiariamo chi ha vinto.
if (isEven(somma) && SceltaUtente === "pari") {
    console.log("Hai vinto!");
}
else if (isof(somma) && SceltaUtente === "dispari") {
    console.log("Hai perso!");
}