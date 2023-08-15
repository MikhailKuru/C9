var square;

function setup() {
  createCanvas(400, 400);

square = createSprite(200,200,20,20);
square.shapeColor = ('orange');
}



function draw() {
  background(220);


  if(keyIsDown(UP_ARROW)){
    square.position.y -= 5;
  }

  if(keyIsDown(DOWN_ARROW)){
    square.position.y += 5;
  }

  if(keyIsDown(LEFT_ARROW)){
    square.position.x -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    square.position.x += 5;
  }
  drawSprites();
}
 
