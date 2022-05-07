
class Game {
    constructor() {this.resetbutton=createButton("")}
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
  
      });
  
    }
    update(state){
      database.ref("/").update({
        gameState:state
      })
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();

      console.log("hello")
  
    shooter1 = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
    shooter1.addImage(shooterImg)
    shooter1.scale = 0.3
    shooter1.debug = false
    shooter1.setCollider("rectangle",0,0,300,300)

    shooter2 = createSprite(displayWidth-300, displayHeight-300, 50, 50);
    shooter2.addImage(shooterImg)
    shooter2.scale = 0.3
    shooter2.debug = false
    shooter2.setCollider("rectangle",0,0,300,300)

    shooter=[shooter1,shooter2]

    }
  
    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");

      this.resetbutton.position(width/2+250,100)
    }
  
     play() {
    this.handleElements()

    console.log("hi")

    this.handleresetbutton();                                 

    Player.getPlayersInfo();
    
       if(allPlayers !== undefined){
        var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the shooters in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        shooter[index - 1].position.x = x;
        shooter[index - 1].position.y = y;
  
            
  
          if (index === player.index) {
            stroke(10);
            fill("red");
            ellipse(x, y, 60, 60);
            }
            
          }
    
   
          this.handelplayercontrol();
          drawSprites();
    }
 }
handleresetbutton(){
  this.resetbutton.mousePressed(()=>{
    database.ref("/").set({
      gameState:0,
      playerCount:0,
      players:{}
    })
    window.location.reload()
  })
}

handelplayercontrol(){
  if(keyIsDown(UP_ARROW)){
    player.positionY = player.positionY+30
    player.update();
  }
  if(keyIsDown(DOWN_ARROW)){
   player.positionY = player.positionY-30
   player.update();
  }
}

}





















  