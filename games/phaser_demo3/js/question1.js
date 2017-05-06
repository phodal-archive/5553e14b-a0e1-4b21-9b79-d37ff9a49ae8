var SmartCity = SmartCity || {};


//title screen
SmartCity.question1 = function(){};

var pictureA;
var score = 0;
var correctAns = 0;
var button,chcbutton;
var arrow1;
var isSet1=0;
var isSet2=0;
var isSet3=0;
var isSet4=0;
var setCorrect,getCorrect;


var question,question1,question2;
var interOp_1,device;
var chc1,chc2,chc3,chc4;
var infoDisplay;


SmartCity.question1.prototype = {
	
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
	
	question1 = this.game.add.bitmapText(100, 210, 'score_B', ' Which IoT device can be used for automatic \n      identication of objects???', 22);
	
	//button1 = this.game.add.button(580, 500, 'button', this.changePicture, this, 1, 0);
	
	
	this.chcbutton1 = this.game.add.button(200, 300, 'checkbox1', function(){
      this.checkAnswer(question1,this.chcbutton1);
    }, this, 1, 0);
	
	this.chcbutton2 = this.game.add.button(200, 350, 'checkbox2', function(){
      this.checkAnswer(question1,this.chcbutton2);
    }, this, 1, 0);
	
	this.chcbutton3 = this.game.add.button(200, 400, 'checkbox3', function(){
      this.checkAnswer(question1,this.chcbutton3);
    }, this, 1, 0);
	
	this.chcbutton4 = this.game.add.button(200, 450, 'checkbox4', function(){
      this.checkAnswer(question1,this.chcbutton4);
    }, this, 1, 0);
	
	chc1=this.game.add.bitmapText(230, 300, 'score_B', ' Surveillance Camera', 22);
	chc2=this.game.add.bitmapText(230, 350, 'score_B', ' Windmill', 22);
	chc3=this.game.add.bitmapText(230, 400, 'score_B', ' RFID', 22);
	chc4=this.game.add.bitmapText(230, 450, 'score_B', ' Solar Panel', 22);
	
	/********************   Initialize to zero when replay ***************************/
	isSet1 = 0;
	isSet2 = 0;
	isSet3=0;
    isSet4=0;

  },
  

  
  checkAnswer:function(question,button) {

  
    
    console.log(question);
	x=button.key;
	console.log(isSet1);
	
	
    
    if (isSet1 == 0 && question == question1)
    {
		   console.log('i am here ');
			isSet1 = 1;
			
				if(button.key == 'checkbox3')
				{
					
					console.log('right answer');
					correctAns += 1;
					//this.setCorrect(score);
				}
				
				
					
					//console.log('wrong answer');
				
				 
				 
			this.createQuestion2(); 
			
			
			
		 
		 
		 
    }
	
    else if(isSet2 == 0 &&  question == question2 )
    {
       
			if(button.key == 'checkbox2')
				{
					
					console.log('right answer');
					correctAns += 1;
					console.log(correctAns);
				}	   
			
			//this.createQuestion3(); 
			console.log('second question chck');
			isSet2 = 1;
			
	
			
			if(correctAns == 2)
			{
				
				button = this.game.add.button(675, 510, 'button4', this.startGame2, this, 1, 0);
				
			}
			else
			{	
				correctAns = 0;
				score = 0 ;
				
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
				button = this.game.add.button(675, 510, 'button5', this.startGame, this, 1, 0);
				
			}
	}
	
    
	
	//else if(isSet3 == 0 && question3)
	//{
		
		//	 if(button.key == 'checkbox3')
			//	{
					
				//	console.log('right answer');
					//score = score +1;
			//	}	   
			
		//	this.createQuestion4(); 
		//	isSet3 = 1;
		
	//}
	
	//else if(isSet4 == 0 && question4)
	//{
		//	isSet4 = 1;
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
     
     this.game.state.start('Game',true,false,score);
    
  },

 startGame2: function() {
     
     this.game.state.start('Game2',true,false,score);
    
  },
  
  
  
  createQuestion2 : function()
  {
	  
	  
	  /******************* Destroying and creating new question ***********************/
	

	question1.destroy();
	question2 = this.game.add.bitmapText(100, 210, 'score_B', 'Which of the devices can you used to harness energy? ', 24);

	
	this.chcbutton1 = this.game.add.button(200, 300, 'checkbox1', function(){
      this.checkAnswer(question2,this.chcbutton1);
    }, this, 1, 0);
	
	this.chcbutton2 = this.game.add.button(200, 350, 'checkbox2', function(){
      this.checkAnswer(question2,this.chcbutton2);
    }, this, 1, 0);
	
	this.chcbutton3 = this.game.add.button(200, 400, 'checkbox3', function(){
      this.checkAnswer(question2,this.chcbutton3);
    }, this, 1, 0);
	
	this.chcbutton4 = this.game.add.button(200, 450, 'checkbox4', function(){
      this.checkAnswer(question2,this.chcbutton4);
    }, this, 1, 0);   
	
	
	chc1.text = 'Surveillance Camera';
	chc2.text = 'Windmill';
	chc3.text = ' Smartphones';
	chc4.text = ' None of Above';
	
  },
  
  createQuestion3 : function()
  {
	  
	  
	  /******************* Destroying and creating new question ***********************/
	

	question2.destroy();
	question3 = this.game.add.bitmapText(100, 210, 'score_B', ' Which device is used to brodcast and receive signals(WIFI)???', 8);
	question3.scale.setTo(4,4);
	
	
	this.chcbutton1 = this.game.add.button(200, 300, 'checkbox1', function(){
      this.checkAnswer(question2,this.chcbutton1);
    }, this, 1, 0);
	
	this.chcbutton2 = this.game.add.button(200, 350, 'checkbox2', function(){
      this.checkAnswer(question2,this.chcbutton2);
    }, this, 1, 0);
	
	this.chcbutton3 = this.game.add.button(200, 400, 'checkbox3', function(){
      this.checkAnswer(question2,this.chcbutton3);
    }, this, 1, 0);
	
	this.chcbutton4 = this.game.add.button(200, 450, 'checkbox4', function(){
      this.checkAnswer(question2,this.chcbutton4);
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
      this.checkAnswer(question2,this.chcbutton1);
    }, this, 1, 0);
	
	this.chcbutton2 = this.game.add.button(200, 350, 'checkbox2', function(){
      this.checkAnswer(question2,this.chcbutton2);
    }, this, 1, 0);
	
	this.chcbutton3 = this.game.add.button(200, 400, 'checkbox3', function(){
      this.checkAnswer(question2,this.chcbutton3);
    }, this, 1, 0);
	
	this.chcbutton4 = this.game.add.button(200, 450, 'checkbox4', function(){
      this.checkAnswer(question2,this.chcbutton4);
    }, this, 1, 0);   
	
	
	chc1.text = 'choice 5';
	chc2.text = ' choice 6';
	chc3.text = ' choice 7';
	chc4.text = ' choice 8';
	
  }

  
  
  
  
};