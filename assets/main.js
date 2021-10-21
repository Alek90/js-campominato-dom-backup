/*  CAMPO MINATO
    Permettere all'utente di selezionare una difficoltà tra le opzioni predefinite.
    All'avvio della partita, tramite pulsante:
        -creare una griglia da gioco contenente un numero di celle numerate relativo alla difficoltà;
        -generare random 16 numeri diversi entro il limite del numero di celle;
        -associare i numeri random generati alle rispettive celle.
    L'utente, cliccando sulle celle, le seleziona:
        -se la cella è associata a un numero random, diventa rossa -> end-game;
        -se la cella non è associata a nessun numero random, diventa azzurra e continua finchè:
            -seleziona una cella associata ad un numero random (diventa rossa -> end-game);
            -seleziona tutte le celle non associate ai numeri random -> end-game;
    Quando il gioco raggiunge l' end-game tutte le celle associate ad un numero random diventano rosse, e viene stampato il numero di selezioni compiute dall'utente;
*/

// Variabili DOM:
const startButton = document.getElementById("start");
let difficultLevel = document.getElementById("choice_difficult").value;

//inizializziamo una variabile per le celle:
let cell = "";


// Costruiamo l'evento/azione.
startButton.addEventListener("click", function(){

    
    //Inizializziamo delle variabili che ci serviranno successivamente:

    //-prendiamo il contenitore griglia:
    let grid = document.getElementById("grid_container");

    grid.innerHTML = "";

    //Prendiamo in considerazione le selezioni dell'utente:
    
    console.log(difficultLevel);

    /* Utilizziamo le condizionali per:
        -assegnare una classe che differenzi le proprietà relative della griglia;
        -assegnare un valore numerico alla selezione dell'utente;
    */
    
    let intensityLevel = "";

    if(difficultLevel == "easy"){
        intensityLevel = 100;
        grid.className = "easy_grid";
    }else if(difficultLevel =="normal"){
        intensityLevel = 81;
        grid.className = "normal_grid";
    }else if(difficultLevel =="hard"){
        intensityLevel = 49;
        grid.className = "hard_grid";
    }

    console.log(intensityLevel);


    // Tramite un ciclo costruiamo la griglia relativa alla difficoltà selezionata:

    for(let i = 1; i <= intensityLevel; i++){

        //creiamo un elemento numerato:
        let cellNumber = document.createElement("p")
        cellNumber.innerHTML = [i];

        //creiamo un elemento nelle celle:
        let cell = document.createElement("div")
        cell.className = "grid_cell";
        
        //numeriamo le celle (appendiamo l'elemento numerato nelle celle):
        cell.append(cellNumber);

        //diamo corpo alla griglia (appendendo le celle nel contenitore griglia):
        grid.append(cell);

       

        //Creare evento alla selezione di una cella:
        cell.addEventListener("click", function() {
            this.classList.add = "selected_cell";
            this.style.backgroundColor = "lightblue"
            console.log(this);
        })
        
    }       
    
    let loserCell = choiceLoserCell(intensityLevel)
    console.log(loserCell);

    
    
    function choiceLoserCell (totalCell) {

        let bombs = [];

        while (bombs.length < 16) {

            let positionBombs = extractPositionBombs(1, totalCell)
    
            if(!bombs.includes(positionBombs)){
                bombs.push(positionBombs)
            }
        }

        return bombs
    }
})



function extractPositionBombs(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
