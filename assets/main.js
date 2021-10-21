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