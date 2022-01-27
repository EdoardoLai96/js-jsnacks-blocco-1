
// Creo l'array in cui inserire i numeri

 const numeriTot = [];
 
 
 
 for (let i= 0; i < 10; i++){
     
 // Faccio chiedere il numero all'utente 
 const numero= parseInt(prompt("Inserisci un numero"));
    
  let errore = isNaN(numero);

  errore == false;

 if( errore == true ){
    alert("Non hai inserito un valore corretto, inserisci un numero");

 }else{
     // pusho i valori dentro l'array;
    const aggiungi = numeriTot.push(numero);
 }

 errore == false;
}

let somma = 0;
alert("Hai inserito i numeri: " + numeriTot);

for (let i = 0; i < numeriTot.length; i++){

    somma += numeriTot[i];

}

alert("La somma fa: " + somma);
