var shipImage,ship;
var seaImage,sea;

function preload(){

   shipImage1 = loadImage("ship-1.png");
   shipImage2 = loadImage("ship-2.png");
   shipImage3 = loadImage("ship-3.png");
   shipImage4 = loadImage("ship-4.png");
  
   seaImage = loadImage("sea.png");
  
  
}

function setup(){
  createCanvas(1000,400);
  
  sea =createSprite(500,200,10,10);
  sea.addImage(seaImage);
  sea.scale = 0.25;
  sea.velocityX = -6;
  
  ship = createSprite(70,220,10,10);
  ship.addImage(shipImage1);
  ship.scale = 0.15;
}

function draw() {
  background("blue");
 
  if(sea.x<0){
    sea.x = sea.width/2;
  }
  drawSprites()
}