class Game{

    constructor(){

    }

    start() {
    
        form = new Form();
        form.display();

        player= new Player();
        playerCount=player.getCount();
        

    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }

      handleElements() {
        form.hide();
        form.titleImg.position(40, 50);
        form.titleImg.class("gameTitleAfterEffect");
      }

      play(){

        this.handleElements();

        Player.getPlayersInfo();
    

        if (allPlayers !== undefined) {
           image(track, 0, -height * 5, width, height * 6);
        }
      }


}