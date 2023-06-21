/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
  Ogni cella ha un numero progressivo, da 1 a 100.
  Ci saranno quindi 10 caselle per ognuna delle 10 righe.
  Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

RAGIONAMENTO BASE
1. prendere il bottone che da inizio alla partita 
    nel caso prendo il form e agiungo l'evento al sumbit 
2. intercettare il click 
3. quando l'utente cliccherà il bottone 
  -creare un ciclo che definisce quante volte creare l'elemento (di conseguenza definisce quandi elementi che creeremo nella pagina)
  - chiamare la funzione che crea gli elementi in pagina ad ogni giro

4. creare una funzione che crea l'elemento html da agiungere alla pagina 
  - nella stessa aggiungere all'elemento un eventlistener che prenderà il click dell'utente e chiamerà una funzione 
5. creare una funzione legata al click dell'utente che cambia il bakground dell'elemento e scrive in console l'innerhtml dell'elemento 

*/
const formSettingsGame = document.getElementById("game-settings")
const gameContainer = document.querySelector(".game-container")
const cellsNumber = 100
const createElementHTML = (index) => {
  const htmlCellContainer = document.createElement("div")
  htmlCellContainer.classList.add("game-cell-container")
  const htmlCellElement = document.createElement("div")
  htmlCellElement.classList.add("game-cell")
  htmlCellElement.innerHTML = index
  htmlCellElement.addEventListener("click", cellClicched)
  htmlCellContainer.append(htmlCellElement)

  return htmlCellContainer
}
const cellClicched = (e) => {
  e.target.classList.add("clicked")
  console.log(e.target.innerHTML)
}

function gameStart(e) {
  e.preventDefault()
  gameContainer.innerHTML = ""
  for (let i = 1; i <= cellsNumber; i++) {
    const createdElement = createElementHTML(i)
    gameContainer.append(createdElement)
  }
}

formSettingsGame.addEventListener("submit", gameStart)
