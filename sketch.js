
var r = 0;
var g = 50;
var b=255;
var ball;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
ball.createSprite=(MouseX,MouseY,10,10)
ball.shapeColor="white";
  createCanvas(1200,400);
}


function draw(){
  // change the value of Red based on the mouse movement about the X axis
  if(MouseX<0){
    background(255,0,0)
  };
  // change the value of Green based on the mouse movement about the X axis
  if(MouseX<300){
    background(0,255,0)
  };
  // change the value of Blue based on the mouse movement about the X axis
  if(MouseX<900){
    background(0,0,255)
  };
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  drawSprites();
}