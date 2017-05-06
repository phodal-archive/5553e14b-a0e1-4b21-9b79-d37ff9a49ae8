var SmartCity = SmartCity || {};


//title screen
SmartCity.question2 = function(){};

var pictureA;
var score = 0;
var correctAns2 = 0;
var button,chcbutton;
var arrow1;
var isSet11=0;
var isSet22=0;
var isSet33=0;
var isSet44=0;
var setCorrect,getCorrect;


var question,question11,question22;
var interOp_1,device;
var chc1,chc2,chc3,chc4;
var infoDisplay;


SmartCity.question2.prototype = {
	
	 init: function(score) {
    score = score || 0;
    this.highestScore = this.highestScore || 0;

    this.highestScore = Math.max(score, this.highestScore);
   },
  
   
  create: function() {
	  
  	//show the ground
    this.ground=this.add.sprite(5, 8, 'ground');
	//this.slider = this.add.sprite(160,472,'slider');
	//this.panel = this.add.sprite(654,110,'panel1');
	 this.game.add.bitmapText(860, 402, 'shortStack_B', 'SECURITY :', 12);
	 this.game.add.bitmapText(860, 442, 'shortStack_B', 'INTEROPERABILITY :', 12);
	 this.game.add.bitmapText(860, 490, 'shortStack_B', 'COST:', 12);
	 this.game.add.bitmapText(860, 530, 'score_B', 'SCORE :', 12);  
	 
	 //this.ground.scale.set(2);
     this.ground.smoothed = false;
	
	
	/**************************Question for the quiz**********************/
	//this.game.add.sprite(75, 65, 'Qboard_back');
	this.game.add.sprite(70, 75, 'Qboard');
	
	this.game.add.bitmapText(230, 120, 'score_B', ' Lets check what you Learnt \n Choose the correct answer!!!', 24);
	
	question11 = this.game.add.bitmapText(100, 210, 'score_B', ' Which device is used to extend networks???', 22);
	

	//button1 = this.game.add.button(580, 500, 'button', this.changePicture, this, 1, 0);
	
	
	this.chcbutton1 = this.game.add.button(200, 300, 'checkbox1', function(){
      this.checkAnswer(question11,this.chcbutton1);
    }, this, 1, 0);
	
	this.chcbutton2 = this.game.add.button(200, 350, 'checkbox2', function(){
      this.checkAnswer(question11,this.chcbutton2);
    }, this, 1, 0);
	
	this.chcbutton3 = this.game.add.button(200, 400, 'checkbox3', function(){
      this.checkAnswer(question11,this.chcbutton3);
    }, this, 1, 0);
	
	this.chcbutton4 = this.game.add.button(200, 450, 'checkbox4', function(){
      this.checkAnswer(question11,this.chcbutton4);
    }, this, 1, 0);
	
	chc1=this.game.add.bitmapText(230, 300, 'score_B', ' Router', 22);
	chc2=this.game.add.bitmapText(230, 350, 'score_B', ' Access point', 22);
	chc3=this.game.add.bitmapText(230, 400, 'score_B', ' Hub', 22);
	chc4=this.game.add.bitmapText(230, 450, 'score_B', ' None of above', 22);
	
	
	/********************   Initialize to zero when replay ***************************/
	isSet11 = 0;
	isSet22 = 0;
	isSet33=0;
    isSet44=0;
	

  },
  

  
  checkAnswer:function(question,button) {

     console.log(question);
	x=button.key;
	console.log(isSet11);
	
	
    
    if (isSet11 == 0 && question == question11)
    {
		   console.log('i am here ');
			isSet11 = 1;
			
				if(button.key == 'checkbox1')
				{
					
					console.log('right answer');
					correctAns2 += 1;
					//this.setCorrect(score);
				}
				
				
					
					//console.log('wrong answer');
				
				 
				 
			this.createquestion22(); 
			
			
			
		 
		 
		 
    }
	
    else if(isSet22 == 0 &&  question == question22 )
    {
       
			if(button.key == 'checkbox2')
				{
					
					console.log('right answer2');
					correctAns2 += 1;
					console.log(correctAns2);
				}	   
			
			//this.createQuestion3(); 
			console.log('second question chck');
			isSet22 = 1;
			
	
			
			if(correctAns2 == 2)
			{
				
				button = this.game.add.button(675, 510, 'button4', this.startGame2, this, 1, 0);
				
			}
			else
			{	
				correctAns2 = 0;
				score = 0 ;
				
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
				
				button = this.game.add.button(675, 510, 'button5', this.startGame, this, 1, 0);
				
			}
	}
	
	//else if(isSet33 == 0 && question3)
	//{
		
		//	 if(button.key == 'checkbox3')
			//	{
					
				//	console.log('right answer');
					//score = score +1;
			//	}	   
			
		//	this.createQuestion4(); 
		//	isSet33 = 1;
		
	//}
	
	//else if(isSet44 == 0 && question4)
	//{
		//	isSet44 = 1;
			//if(button.key == 'checkbox4')
				//{
					
					//console.log('right answer');
					//score = score +1;
			//	}	   
			
			//if(score == 4)
			//{
				
				//button = this.game.add.button(675, 510, 'button4', this.startGame, this, 1, 0);
				
			//}
			//else
			//{	
				
			//	button = this.game.add.button(675, 510, 'button5', this.startGame, this, 1, 0);
				
			//}
	
},

 startGame: function() {
     
	 score -= Lscore;
     this.game.state.start('Game2',true,false,score);
    
  },

 startGame2: function() {
     
     this.game.state.start('FinalScore',true,false,score);
    
  },
  
  
  
  createquestion22 : function()
  {
	  
	  /******************* Destroying and creating new question ***********************/
	

	question11.destroy();
	question22 = this.game.add.bitmapText(100, 210, 'score_B', ' Which device is used to brodcast and receive \nsignals(WIFI)???', 24);

	
	this.chcbutton1 = this.game.add.button(200, 300, 'checkbox1', function(){
      this.checkAnswer(question22,this.chcbutton1);
    }, this, 1, 0);
	
	this.chcbutton2 = this.game.add.button(200, 350, 'checkbox2', function(){
      this.checkAnswer(question22,this.chcbutton2);
    }, this, 1, 0);
	
	this.chcbutton3 = this.game.add.button(200, 400, 'checkbox3', function(){
      this.checkAnswer(question22,this.chcbutton3);
    }, this, 1, 0);
	
	this.chcbutton4 = this.game.add.button(200, 450, 'checkbox4', function(){
      this.checkAnswer(question22,this.chcbutton4);
    }, this, 1, 0);   
	
	
	chc1.text = 'Router';
	chc2.text = 'Access point';
	chc3.text = ' Hub';
	chc4.text = ' None of Above';
	
  },
  
  createQuestion3 : function()
  {
	  
	  
	  /******************* Destroying and creating new question ***********************/
	

	question22.destroy();
	question3 = this.game.add.bitmapText(100, 210, 'score_B', ' Which device is used to brodcast and receive signals(WIFI)???', 8);
	question3.scale.setTo(4,4);
	
	
	this.chcbutton1 = this.game.add.button(200, 300, 'checkbox1', function(){
      this.checkAnswer(question22,this.chcbutton1);
    }, this, 1, 0);
	
	this.chcbutton2 = this.game.add.button(200, 350, 'checkbox2', function(){
      this.checkAnswer(question22,this.chcbutton2);
    }, this, 1, 0);
	
	this.chcbutton3 = this.game.add.button(200, 400, 'checkbox3', function(){
      this.checkAnswer(question22,this.chcbutton3);
    }, this, 1, 0);
	
	this.chcbutton4 = this.game.add.button(200, 450, 'checkbox4', function(){
      this.checkAnswer(question22,this.chcbutton4);
    }, this, 1, 0);   
	
	
	chc1.text = 'Router';
	chc2.text = 'Access point';
	chc3.text = ' Hub';
	chc4.text = ' None of Above';
	
  },
  
  createQuestion4 : function()
  {
	  
	  
	  /******************* Destroying and creating new question ***********************/
	

	question3.destroy();
	question4 = this.game.add.bitmapText(100, 210, 'score_B', ' Enter the question no 2 here            ???', 8);
	question4.scale.setTo(4,4);
	
	
	this.chcbutton1 = this.game.add.button(200, 300, 'checkbox1', function(){
      this.checkAnswer(question22,this.chcbutton1);
    }, this, 1, 0);
	
	this.chcbutton2 = this.game.add.button(200, 350, 'checkbox2', function(){
      this.checkAnswer(question22,this.chcbutton2);
    }, this, 1, 0);
	
	this.chcbutton3 = this.game.add.button(200, 400, 'checkbox3', function(){
      this.checkAnswer(question22,this.chcbutton3);
    }, this, 1, 0);
	
	this.chcbutton4 = this.game.add.button(200, 450, 'checkbox4', function(){
      this.checkAnswer(question22,this.chcbutton4);
    }, this, 1, 0);   
	
	
	chc1.text = 'choice 5';
	chc2.text = ' choice 6';
	chc3.text = ' choice 7';
	chc4.text = ' choice 8';
	
  }

  
  
  
  
};