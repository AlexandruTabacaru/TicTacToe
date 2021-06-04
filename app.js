const gameBoard=(()=>{
    let gameboard=new Array(9);
    
   // console.log(gameboard);
    return{gameboard};
})();

const displayControler=(()=>{
    //starting off simple by adding the board clearing part
    const reset=document.getElementById('reset');
    reset.addEventListener('click', function(){
        const boxes=Array.from(document.getElementsByClassName('box'));
        boxes.forEach(function(box){
           box.innerHTML="";
       })
    gameBoard.gameboard=[];   
    })
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
    const boxes=Array.from(document.getElementsByClassName('box'));
    boxes.forEach(function(box){
        box.addEventListener('click', function addToBoard(){
        gameBoard.gameboard[Array.from(this.parentElement.children).indexOf(this)]="X";
        updateDisplay(Array.from(this.parentElement.children).indexOf(this));
        box.removeEventListener('click', addToBoard); // this particular line might be a good and quick way as to not allow players to override squares - will help with turns
    })}
    )
})();

//we will make a variable called turn which allows each player to play based on the turn of the other one - GENIUS
const Player=(sign)=>{
      return { sign }
};
    
const PlayerOne= Player('X');
const PlayerTwo= Player('0')