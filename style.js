//Chiedere all’utente di inserire una parola
const parola = prompt("Inserisci una parola");
console.log(parola);
//Creare una funzione per capire se la parola inserita è palindroma
function isPalindroma(parola) {
    const parolaInvertita = parola.split("").reverse().join("");
    return parola === parolaInvertita;
}
console.log(isPalindroma(parola));

//Controllare se la parola è palindroma
if (isPalindroma(parola)) {
    console.log("La parola è palindroma");
}
else {
    console.log("La parola non è palindroma");
}