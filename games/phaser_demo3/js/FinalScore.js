
	var SmartCity = SmartCity || {};


//title screen
SmartCity.FinalScore = function(){};

var pictureA;
var score,DisplayScore;
var button1,button2,button3;
var arrow1;
var isSet1=0;
var isSet2=0;
var isSet3=0;
var isSet4=0;
var isSet5=0;
var isSet6=0;
var isSet7=0;
var isSet8=0;
var playerScore;
var sign_text;
var interOp_1,device;
var rate1,rate2,rate3;
var infoDisplay;

SmartCity.FinalScore.prototype = {
  init: function(score) {
    score = score || 0;
    
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
     this.ground.smoothed = true;
	
	
	
	
	button3 = this.game.add.button(580, 500, 'button5', this.startGame, this, 1, 0);
	
	sign_text = this.game.add.bitmapText(654, 120, 'shortStack_G', '             !!!', 4);
	sign_text.scale.setTo(4,4);
    
	
	
	//player initial score of zero
	  playerScore =  this.game.add.bitmapText(860, 530, 'score_B', 'SCORE :', 12);
      playerScore.text='SCORE : '+ score;	  
	  
	  this.game.add.bitmapText(60, 50, 'score_B', score, 12);
	  
	  console.log(score);
	  this.showfeedback(score);
   

  },
  
  startGame: function() {
	  
     score = 0;
     this.game.state.start('Game',true,false);
				 used1=0;
				 used2=0;
				 used3=0;
				 used4=0;
				 used5=0;
				 used6=0;
				 used7=0;

				check1=0;
				check1=0;
				check2=0;
				check3=0;
				check4=0;
				check5=0;
				check6=0;
				check7=0;
				
				
				 used11=0;
				 used22=0;
				 used33=0;
				 used44=0;
				 used55=0;
				 used66=0;
				 used77=0;
				 used88=0;
				 
				check11=0;
				check22=0;
				check33=0;
				check44=0;
				check55=0;
				check66=0;
				check77=0;
				
				correctAns = 0;
				correctAns2 = 0;
    
  },
  
  showfeedback: function(score) {
	  
   if(score < 86)
   {
     
	 this.add.sprite(60, 80, 'feedback1'); 
     DisplayScore = this.game.add.bitmapText(260, 125, 'score_B', '', 20);
	  DisplayScore.text= '' + score;	 

	 }	   
   
   else if(score > 86 && score < 95)
   {

	
	this.add.sprite(60, 80, 'feedback2');  
	DisplayScore = this.game.add.bitmapText(260, 125, 'score_B', '', 20);
	 DisplayScore.text= '' + score;
   }	  
   
   else
   {
  
	 this.add.sprite(60, 80, 'feedback3');  
	 DisplayScore = this.game.add.bitmapText(260, 125, 'score_B', '', 20);
	  DisplayScore.text= '' + score;
   	      
   }
   
  
  }
  



  
  
  
  
};