var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets = 70;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;
var database
var game
var form
var player,playerCount,allPlayers;
var shooter1,shooter2
var shooter=[]
function preload(){
  
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  zombieImg = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")

  lose = loadSound("assets/lose.mp3")
  winning = loadSound("assets/win.mp3")
  explosionSound = loadSound("assets/explosion.mp3")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  database = firebase.database()
  game=new Game()
  game.getState();
  game.start()
  //adding the background image
//   bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
// bg.addImage(bgImg)
// bg.scale = 1.1
  

//creating the player sprite
// player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
//  player.addImage(shooterImg)
//    player.scale = 0.3
//    player.debug = false
//    player.setCollider("rectangle",0,0,300,300)


   //creating sprites to depict lives remaining
  //  heart1 = createSprite(displayWidth-150,40,20,20)
  //  heart1.visible = false
  //   heart1.addImage("heart1",heart1Img)
  //   heart1.scale = 0.4

  //   heart2 = createSprite(displayWidth-100,40,20,20)
  //   heart2.visible = false
  //   heart2.addImage("heart2",heart2Img)
  //   heart2.scale = 0.4

  //   heart3 = createSprite(displayWidth-150,40,20,20)
  //   heart3.addImage("heart3",heart3Img)
  //   heart3.scale = 0.4
   

  //   //creating groups for zombies and bullets
  //   bulletGroup = new Group()
  //   zombieGroup = new Group()



}

function draw() {
  background(bgImg); 
if(playerCount ===2) {
game.update(1)

}
if(gameState === 1){
game.play()
}
}

// if(gameState === "fight"){

//   //displaying the appropriate image according to lives reamining
//   if(life===3){
//     heart3.visible = true
//     heart1.visible = false
//     heart2.visible = false
//   }
//   if(life===2){
//     heart2.visible = true
//     heart1.visible = false
//     heart3.visible = false
//   }
//   if(life===1){
//     heart1.visible = true
//     heart3.visible = false
//     heart2.visible = false
//   }

//   //go to gameState "lost" when 0 lives are remaining
//   if(life===0){
//     gameState = "lost"
    
//   }


//   //go to gameState "won" if score is 100
//   if(score==100){
//     gameState = "won"
//     winning.play();
//   }

  //moving the player up and down and making the game mobile compatible using touches
// if(keyDown("UP_ARROW")||touches.length>0){
//   player.y = player.y-30
// }
// if(keyDown("DOWN_ARROW")||touches.length>0){
//  player.y = player.y+30
// }


// //release bullets and change the image of shooter to shooting position when space is pressed
// if(keyWentDown("space")){
//   bullet = createSprite(displayWidth-1150,player.y-30,20,10)
//   bullet.velocityX = 20
  
//   bulletGroup.add(bullet)
//   player.depth = bullet.depth
//   player.depth = player.depth+2
//   player.addImage(shooter_shooting)
//   bullets = bullets-1
//   explosionSound.play();
// }

// //player goes back to original standing image once we stop pressing the space bar
// else if(keyWentUp("space")){
//   player.addImage(shooterImg)
// }

// //go to gameState "bullet" when player runs out of bullets
// if(bullets==0){
//   gameState = "bullet"
//   lose.play();
    
//}

//destroy the zombie when bullet touches it and increase score
// ---------------------------------------------------------------------