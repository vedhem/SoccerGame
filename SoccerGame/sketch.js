var background, backgroundImg;
var soccerBall, soccerBallImg;
var playerOne, PlayerOneAnimation, player;

function preload() {
  backgroundImg = loadImage("soccerField.jpg");
  soccerBallImg = loadImage("SB.png");
  playerOneAnimation = loadAnimation("plyerOne.png", "plyerOne2.png");
}

function setup() {
  createCanvas(600, 1000);

  background = createSprite(300, 500, 20, 20);
  background.addImage(backgroundImg);
  background.scale = 1;

  player = createSprite(300, 600, 20, 20);
  player.addAnimation("running", playerOneAnimation);

}

function draw() {
  //background("white");
  drawSprites();


  
}