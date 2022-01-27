

let somma = 0;


let inizia = document.getElementById("bottone");

inizia.addEventListener("click" ,
function(){
    
    for (let i=1; i <= 10; i++){
    
        somma += i;
    
        alert(somma);
    
    }
    
    alert("Il risultato finale è: " + somma);

    somma = 0;
}


)
