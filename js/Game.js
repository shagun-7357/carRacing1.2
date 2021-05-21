class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

    }
    c1=createSprite(100,500,20,20)
    c2=createSprite(200,500,20,20)
    c3=createSprite(300,500,20,20)
    c4=createSprite(400,500,20,20)

    cars=[c1,c2,c3,c4]
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var x = 0;
      var y
      var index=0;
      for(var plr in allPlayers){
        index=index+1
        if(index===player.index){
          cars[index-1].shapeColor="red" 
          camera.position.x=displayWidth/2
          camera.position.y=cars[index-1].y
        }
        x=x+200
        y=displayHeight-allPlayers[plr].distance   
        cars[index-1].x=x
        cars[index-1].y=y    
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites()
  }
}
