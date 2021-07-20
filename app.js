const gameBoard=(()=>{
    let gameboard=new Array(9);
    //check for victory function
    function victoryCheck(){
        if(gameboard[0]==gameboard[1] && gameboard[1]==gameboard[2] && gameboard[1]!=undefined ||
            gameboard[0]==gameboard[3] && gameboard[3]==gameboard[6] && gameboard[3]!=undefined  ||
            gameboard[3]==gameboard[4] && gameboard[4]==gameboard[5] && gameboard[4]!=undefined  ||
            gameboard[6]==gameboard[7] && gameboard[7]==gameboard[8] && gameboard[7]!=undefined  ||
            gameboard[1]==gameboard[4] && gameboard[4]==gameboard[7] && gameboard[4]!=undefined  ||
            gameboard[2]==gameboard[5] && gameboard[5]==gameboard[8] && gameboard[5]!=undefined  ||
            gameboard[0]==gameboard[4] && gameboard[4]==gameboard[8] && gameboard[4]!=undefined  ||
            gameboard[2]==gameboard[4] && gameboard[4]==gameboard[6] && gameboard[4]!=undefined  
            ){console.log('you won!');
                
    }}
   // console.log(gameboard);
    return{victoryCheck, gameboard};
})();

const displayControler=(()=>{

    //starting off simple by adding the board clearing part
    const reset=document.getElementById('reset');
    reset.addEventListener('click', resetBoxes);
    function resetBoxes(){
        const boxes=Array.from(document.getElementsByClassName('box'));
        boxes.forEach(function(box){
           box.innerText="";
           box.removeEventListener('click', gameBoard.victoryCheck);
           box.addEventListener('click', gameBoard.victoryCheck);
       })
    gameBoard.gameboard=new Array(9);  
    addToArray();
    console.log(gameBoard.gameboard)
    }

    //updating boxes based on array 
    function updateDisplay(index){
            gameBoard.gameboard.forEach(function(position){
            const boxes=Array.from(document.getElementsByClassName('box'));
            boxes[index].innerHTML=position;
            
        })
        console.log(gameBoard.gameboard)
    }
    updateDisplay();

    //assigning player sign in gameboard array then updating the display
    function addToArray(){
    const boxes=Array.from(document.getElementsByClassName('box'));
    boxes.forEach(function(box){ //here we have a problem that is caused by the reset button because in some way the conditions stack because of the call of this function in reset
        box.addEventListener('click', function addToBoard(){
        box.removeEventListener('click', addToBoard); // this particular line might be a good and quick way as to not allow players to override squares - will help with turns
        gameBoard.gameboard[Array.from(this.parentElement.children).indexOf(this)]='X';
        updateDisplay(Array.from(this.parentElement.children).indexOf(this));
    })
    }    
    )}
    addToArray();

    const boxes=Array.from(document.getElementsByClassName('box'));
    boxes.forEach(function(box){
        box.addEventListener('click', gameBoard.victoryCheck);
    })
 // i should somehow add a condition here that once it finds the winning state realised will reset the victorycheck function on the box. but how? lets see
    return{addToArray}
})();

//we will make a variable called turn which allows each player to play based on the turn of the other one - GENIUS

const Player=(sign, name)=> {
    let turn=0;
    if(turn%2==0)
    return turn;
    }
    
const PlayerOne= Player('X');
const PlayerTwo= Player('0');

//the victory checking functions works on a whole but as i stated the issue is in the reset and display function. Hoping we can fix this so then by moving on to
// turn taking in players behavior we will be almost done; finally, I'll get on to the AI : )