const board=[-1,-1,-1,-1,-1,-1,-1,-1,-1];

let currentPlayer ="player1";
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
    alert(" Game is already over. Please rset the game.")
    return;
   }
   if(board[index]!==-1){
    alert("Invalid Move")
    return
   }

   board[index] = currentPlayer;
   console.log(board);
   renderBoard()

   if(currentPlayer ==="Player1"){
    currentPlayer=="Player2"
   }
   else{
    currentPlayer = "Player1"
   } 
  }
