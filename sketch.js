var balloon;
var database,position;
var height;
function setup() {
  createCanvas(500,500);
  balloon=createSprite(400, 200, 50, 50);
  var balloonPosition=database.ref('balloon/height');
  balloonPosition.on("value",readPosition,showError);
}

function draw() {
  background("black");  
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }  
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
  } 
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
  }
  
  drawSprites();
}

function updateHeight(x,y){
  database.ref('balloon/height').set({
  'x' : height.x + x,
  'y' : height.y + y
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the database");
}