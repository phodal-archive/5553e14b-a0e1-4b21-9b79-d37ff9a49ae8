var SmartCity = SmartCity || {};

//title screen
SmartCity.NextLevel2 = function(){};

var score = 0;



SmartCity.NextLevel2.prototype = {
	
	 init: function(score) {
     score = score || 0;
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
	
	
	 this.game.add.bitmapText(350, this.game.height/2, 'score', 'LEVEL COMPLETED', 30); 
	

    //start game text
    this.game.add.bitmapText(380, this.game.height/2+60, 'score', ' NEXT >>', 30);

   
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Question2',true,false,score);
    }
  }
};