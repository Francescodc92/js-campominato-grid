/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
  Ogni cella ha un numero progressivo, da 1 a 100.
  Ci saranno quindi 10 caselle per ognuna delle 10 righe.
  Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

RAGIONAMENTO BASE
1. prendere il bottone che da inizio alla partita 
2. intercettare il click 
3. quando l'utente cliccherà il bottone 
  -creare un ciclo che definisce quante volte creare l'elemento (di conseguenza definisce quandi elementi creeremo nella pagina)
  - chiamare la funzione che crea gli elementi in pagina ad ogni giro

4. creare una funzione che crea l'elemento html da agiungere alla pagina 
  - nella stessa aggiungere all'elemento un eventlistener che prenderà il click dell'utente e chiamerà una funzione 
5. creare una funzione legata al click dell'utente che cambia il bakground dell'elemento e scrive in console l'innerhtml dell'elemento 

*/
