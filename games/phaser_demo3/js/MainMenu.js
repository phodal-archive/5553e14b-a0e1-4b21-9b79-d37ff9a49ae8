
	var SmartCity = SmartCity || {};


//title screen
SmartCity.MainMenu = function(){};

var pictureA;
var timer1;
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
var sign_text;
var interOp_1,device;
var rate1,rate2,rate3;
var infoDisplay;

SmartCity.MainMenu.prototype = {
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
     this.ground.smoothed = true;
	
	
	
	button1 = this.game.add.button(700, 500, 'button', this.changePicture, this, 1, 0);
	button2 = this.game.add.button(40, 500, 'button1', this.startGame, this, 1, 0);
	button3 = this.game.add.button(580, 500, 'button6', this.previousPicture, this, 1, 0);
	
	sign_text = this.game.add.bitmapText(654, 120, 'shortStack_G', '             !!!', 4);
	sign_text.scale.setTo(4,4);
			
	
	
	
	//  Create our timer1
   // timer1 = this.game.time.create(true);

    //  Set a TimerEvent to occur after 3 seconds
  //  timer1.add(1500, this.fadePictures, this);

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
   // timer1.start();
	
	pictureA = this.game.add.sprite(300, 300, 'picture6');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);


    
	//arrow1=this.game.add.sprite(230,450,'arrow',2);
	//arrow1.scale.setTo(0.5,0.5);

  },
  

  
  changePicture:function() {

    
    if (isSet1 == 0)
    {
     
	pictureA.destroy()
	pictureA = this.game.add.sprite(300, 300, 'picture10');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet1 = 1;
	   
    }
    else if(isSet2 == 0)
    {
       
	pictureA.destroy();
	device=this.add.sprite(380, 470,'net7_main',0);
	
	arrow1=this.add.sprite(400,440,'arrow_down');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	 anim.play(3,true);
					 
	pictureA = this.game.add.sprite(200, 360, 'picture14');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet2 = 1;
	
    }
	else if(isSet3 == 0)
	{
	pictureA.destroy();
	arrow1.destroy();
	
	arrow1=this.add.sprite(400,460,'arrow_down');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	anim.play(3,true);
	 
	pictureA = this.game.add.sprite(200, 360, 'picture18');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet3 = 1;
		
	}
	else if(isSet4 == 0)
	{
	pictureA.destroy();
	device.destroy();
	arrow1.destroy();
	interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
	interOp_1.frame=1;
	sign_text.text = 'InterOperable!!!';
	
	
	arrow1=this.add.sprite(700,200,'arrow_up');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	 anim.play(3,true);
	 
	pictureA = this.game.add.sprite(500, 220, 'picture22');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet4 = 1;
		
	}
	else if(isSet5 == 0)
    {
		
	pictureA.destroy();
	arrow1.destroy();
	
	interOp_1.destroy();
	sign_text.text = 'Not InterOperable!!!';
	interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
	interOp_1.frame=1;
	
	arrow1=this.add.sprite(700,200,'arrow_up');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	anim.play(3,true);
	 
	pictureA = this.game.add.sprite(500, 220, 'picture26');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet5 = 1;
		
	}
	
	else if(isSet6 == 0)
	{
	
	pictureA.destroy();
	arrow1.destroy();
	interOp_1.destroy();
	sign_text.text ='             !!!';
	
	infoDisplay = this.game.add.bitmapText(880, 90, 'shortStack', '\n\n\n\n\n\nThe information about each \n device will be displayed \nHere!!!' , 12);
	rate1 = this.add.sprite(988, 397,'rating',5);
	rate2 =  this.add.sprite(988, 440,'rating',4);
	rate3 =  this.add.sprite(988, 488,'rating',3);
	
	arrow1=this.add.sprite(850,210,'arrow_right');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	 anim.play(3,true);
	 
	pictureA = this.game.add.sprite(500, 300, 'picture30');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet6 = 1;
		
	}
	else if(isSet7 == 0)
    {
		
	pictureA.destroy();
	arrow1.destroy();
	infoDisplay.destroy();
	rate1.destroy();
	rate2.destroy();
	rate3.destroy();
	arrow1=this.add.sprite(970,520,'arrow_left');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	 anim.play(3,true);
	 
	pictureA = this.game.add.sprite(500, 400, 'picture34');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet7 = 1;
		
	}
	
	else if(isSet8 == 0)
		
		{
	pictureA.destroy();
	arrow1.destroy();	
	button1.destroy();
	button2.destroy();
	button3.destroy();
	button2 = this.game.add.button(700, 500, 'button2', this.startGame, this, 1, 0);
			
		}
	
	
},

 previousPicture:function() {

 var current ;
 
   if (isSet1 == 1)
    {
     current = isSet1;
	   
    }
    else if(isSet2 == 1)
    {
       
     current = isSet2;
	
    }
	else if(isSet3 == 1)
	{
      current = isSet3;
		
	}
	else if(isSet4 == 1)
	{
      current = isSet4;
		
	}
	else if(isSet5 == 1)
    {
		
	current = isSet5;
		
	}
	
	else if(isSet6 == 1)
	{
	
	 current = isSet6;
		
	}
	else if(isSet7 == 1)
    {
		
	 current = isSet7;
		
	}
	

	
	
	/***************** Displaying previous todo page **************************/
	
	
	
	if(current == isSet7)
    {
	
    console.log('working');	
	
	pictureA.destroy();
	arrow1.destroy();
	
	
	interOp_1.destroy();
	sign_text.text ='             !!!';
	
	infoDisplay = this.game.add.bitmapText(880, 90, 'shortStack', '\n\n\n\n\n\nThe information about each \n device will be displayed \nHere!!!' , 12);
	rate1 = this.add.sprite(988, 397,'rating',5);
	rate2 =  this.add.sprite(988, 440,'rating',4);
	rate3 =  this.add.sprite(988, 488,'rating',3);
	
	arrow1=this.add.sprite(850,210,'arrow_right');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	 anim.play(3,true);
	
	pictureA = this.game.add.sprite(500, 300, 'picture30');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet7 = 0
	
	//button2.destroy();
	//button1 = this.game.add.button(580, 500, 'button', this.changePicture, this, 1, 0);
	//button2 = this.game.add.button(700, 500, 'button1', this.startGame, this, 1, 0);

	
		
	}
	
		else if(current == isSet6)
	{
	
	pictureA.destroy();
	arrow1.destroy();
	infoDisplay.destroy();
	rate1.destroy();
	rate2.destroy();
	rate3.destroy();
	
	interOp_1.destroy();
	sign_text.text = 'Not InterOperable!!!';
	interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
	interOp_1.frame=1;
	
	arrow1=this.add.sprite(700,200,'arrow_up');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	 anim.play(3,true);
	 
	pictureA = this.game.add.sprite(500, 220, 'picture26');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet6 = 0
	
		
	}

	else if(current == isSet5)
    {
		
		
	pictureA.destroy();
	device.destroy();
	arrow1.destroy();
	interOp_1.destroy();
	interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
	interOp_1.frame=1;
	sign_text.text = 'InterOperable!!!';
	
	
	arrow1=this.add.sprite(700,200,'arrow_up');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	 anim.play(3,true);
	 
	pictureA = this.game.add.sprite(500, 220, 'picture22');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet5 = 0
	
		
		
	}
	
	else if(current == isSet4)
	{
	
	interOp_1.destroy();
	pictureA.destroy();
	pictureA.destroy();
	arrow1.destroy();
	
	arrow1=this.add.sprite(400,460,'arrow_down');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	 anim.play(3,true);
	
	device=this.add.sprite(380, 490,'net7_main',0);
				   
	pictureA = this.game.add.sprite(200, 360, 'picture18');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet4 = 0
	
		
	}
	
	else if(current == isSet3)
	{
	pictureA.destroy();
	arrow1.destroy();
    
	arrow1=this.add.sprite(400,440,'arrow_down');
	arrow1.scale.setTo(0.5,0.5);
	var anim = arrow1.animations.add('down',[0,1,2,3]);
	 anim.play(3,true);
	
					 
	pictureA = this.game.add.sprite(200, 360, 'picture14');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet3 = 0

		
	}
	
	else if(current == isSet2)
    {
       
	pictureA.destroy();
	arrow1.destroy();
	device.destroy();
	
	pictureA = this.game.add.sprite(300, 300, 'picture10');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet2 = 0
	
    }
	
    else if (current == isSet1)
    {
     
	pictureA.destroy(); 
	pictureA = this.game.add.sprite(300, 300, 'picture6');
    pictureA.anchor.setTo(0.5, 0.5);
    pictureA.scale.setTo(1, 1);
	isSet1 = 0
	   
    }
    
 
    
    
},

 startGame: function() {
    
     this.game.state.start('Game');
    
  }

  
  
  
  
};