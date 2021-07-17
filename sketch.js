var backgroundSprite,backgroundImg;
var playerCar,playerCarImg;
var missile,missileImage;



function preload(){

  backgroundImg = loadImage("background3.jpg");
  playerCarImg = loadImage("tank.png");

}




function setup() {
  createCanvas(windowWidth,windowHeight);

  backgroundSprite = createSprite(width/2,height/2,width,height);
  backgroundSprite.addImage(backgroundImg);
  backgroundSprite.scale = 3.2;

  playerCar = createSprite(width/2-700,height/2+300,10,10);
  playerCar.addImage(playerCarImg);
  playerCar.scale = 0.3;

 
  
}

function draw() {
  background("lightblue");

  backgroundSprite.velocityX = -1;
  if(backgroundSprite.x < width/2 - 300){
    backgroundSprite.x = width/2;

  }

  if(keyDown("D")){
    playerCar.velocityX = 3.5;
  }

  if(keyDown("A")){
    playerCar.velocityX = -3.5;
  }



  drawSprites();
}