var hypnoticBall, database, gameState, playerCount, player, form, gameStateReal;
var position;

gameState = 0;
function setup(){
  database = firebase.database();

  console.log(database);
  createCanvas(500,500);
  
  gameStateReal = new GameState();
  gameStateReal.getState();
  gameStateReal.start();  
}

function draw(){
  background("white");
  
    
}

