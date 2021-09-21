var backgroundImg, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload(){

  backgroundImg=loadImage("background.jpg");
  track=loadImage("track.jpg");
}
function setup(){

  createCanvas(windowWidth,windowHeight);
  database=firebase.database();

  game= new Game();
  game.start();
  game.getState();

}
function draw(){

  background(backgroundImg);

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
    
}