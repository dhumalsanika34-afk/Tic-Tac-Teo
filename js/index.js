const board=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

let currentPlayer ="Player1";
let gameOver = false;

const renderBoard=()=>{
  const allBoxes = document.querySelectorAll(".cell");
  console.log(allBoxes);

  allBoxes.forEach((box,index)=>{
    if(board[index]==="Player1"){
        box.innerText = "O";
    }
    else if (board[index]==="Player2") {
        box.innerText = "X";
    }

    else{
        box.innerText ="";
    }
  })
};

  const makeMove = (index)=>{
   if(gameOver){
    alert(" Game is already over. Please reset the game.")
    return;
   }

   if(board[index]!==-1){
    alert("Invalid Move")
    return;
   }

   board[index] = currentPlayer;

   renderBoard();
   const winner = checkWinner();
   gameOver = true;
   
   if(winner){
    alert(`${winner} has won the game!`);
    return;
   }

   if(currentPlayer === "Player1"){
    currentPlayer = "Player2"
   }
   else{
    currentPlayer = "Player1"
   } 
   document.getElementById("current-player").innerText = `Current Player: ${currentPlayer}`;
  }

function isPlayerPresent(places, player) {
  const[a,b,c] = places;
  return(
    board[a] === player &&
     board[b] === player &&
      board[c] === player);
}
function checkWinner() {
  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

for (let combination of winningCombinations) {
  if(isPlayerPresent(combination, "Player1")){
    return "Player1";
  }
  else if(isPlayerPresent(combination, "Player2")){
    return "Player2";
  }
  return null;
}
}