var SmartCity = SmartCity || {};

//title screen
SmartCity.Level1Completed = function(){};

var button;

SmartCity.Level1Completed.prototype = {
 
 init: function(score) {
    var score = score || 0;
    this.highestScore = this.highestScore || 0;

    this.highestScore = Math.max(score, this.highestScore);
   },
  create: function() {
	  
  	//show the ground
    this.ground=this.add.sprite(5, 8, 'ground');
	this.slider = this.add.sprite(160,472,'slider');
	this.panel = this.add.sprite(654,110,'panel1');
	 this.game.add.bitmapText(860, 402, 'shortStack_B', 'SECURITY :', 12);
	 this.game.add.bitmapText(860, 442, 'shortStack_B', 'INTEROPERABILITY :', 12);
	 this.game.add.bitmapText(860, 490, 'shortStack_B', 'COST:', 12);
	 this.game.add.bitmapText(860, 530, 'score_B', 'SCORE :', 12);  
	//this.ground.scale.set(2);
    this.ground.smoothed = false;
	
	button = this.game.add.button(675, 510, 'button5', this.startGame, this, 1, 0);
	
	 this.game.add.bitmapText(this.game.width/2, this.game.height/2, 'score_B', 'LEVEL COMPLETED', 30); 
	
     
    //start game text
   // var text = " Next >>>";
   // var style = { font: "30px Arial", fill: "#fff", align: "center" };
   // var t = this.game.add.text(this.game.width/2, this.game.height/2+150, text, style);
   // t.anchor.set(0.5);
	
	this.game.add.bitmapText(this.game.width/2, this.game.height/2+150, 'score_B', ' NEXT >>', 30);

   
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Question1');
    }
  }
};