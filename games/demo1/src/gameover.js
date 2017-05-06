var gameOver = function(game){}

gameOver.prototype = {
 
    init: function(score){
 
        alert("You scored: "+score)
 
    },
 
      create: function(){
         var x1 = this.game.width - 320;

          var gameOverTitle = this.game.add.sprite(x1/2,160,"gameover");
 
        //gameOverTitle.anchor.setTo(0.5,0.5);
 x1 = this.game.width - 200;
        var playButton = this.game.add.button(x1/2,320,"play",this.playTheGame,this);
 
        //playButton.anchor.setTo(0.5,0.5);
 
    },
 
    playTheGame: function(){
 
        this.game.state.start("TheGame");
     }
    }