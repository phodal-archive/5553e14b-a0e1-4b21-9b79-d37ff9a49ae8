var gameTitle = function(game){}
 
gameTitle.prototype = {
 
      create: function(){
        var x1 = this.game.width - 323;
        var y1 = this.game.height - 100;
        var gameTitle = this.game.add.sprite(x1/2,160,"gametitle");
 
        //gameTitle.anchor.setTo(0.5,0.5);
 x1 = this.game.width - 200;
        var playButton = this.game.add.button(x1/2,320,"play",this.playTheGame,this);
 
        //playButton.anchor.setTo(0.5,0.5);
 
    },
 
    playTheGame: function(){
 
        this.game.state.start("TheGame");
 
    }
 
}