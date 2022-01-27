// Faccio scegliere numero all'utente 

const numero = parseInt(prompt("Scegli Numero"));

// Creo un array vuoto nel quale raccogliere i miei dati 

const myArray = [];


// creo un ciclo for che deve partire da 1 e deve ripetersi fino al numero inserito dall'utente e incrementare di 1


for(let i = 1; i <= numero; i++){

    // L'istruzione che voglio che si ripeta è la creazione del cubo di i (sempre partendo da 1), quindi la creazione del cubo del numero della ripetizione del ciclo a cui mi trovo, l'utente mi dirà quante ripetizioni fare.
    cubo = i ** 3;


    // Dopo che il cubo è stato creato vado a inserirlo nell'array vuoto già pronto (questo per ogni ciclo);

    var add = myArray.push(cubo);

}

// Mostro il risultato

alert(myArray);






