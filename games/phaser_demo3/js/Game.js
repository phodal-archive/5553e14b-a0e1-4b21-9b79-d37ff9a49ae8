var SmartCity = SmartCity || {};

//title screen
SmartCity.Game = function(){};
var group1;
var group2;
var group3;
var group4;
var operable;
var truck1,truck2,sign_text,level;
var interOp_1,interOp_2;
var playerScore;
var score=0;
var check1=0;
var check2=0;
var check3=0;
var check4=0;
var check5=0;
var check6=0;
var check7=0;

var audio1,audio2,audio3;

var isDefined = 0;
var used1=0;
var used2=0;
var used3=0;
var used4=0;
var used5=0;
var used6=0;
var used7=0;

var isSet1 = 0;

var enableDragSign = 0;

var button1,button2;

var infoArr = {};
var secuArr = {};
var interopArr = {};
var expArr = {};
var detailNotice1;
var currentItem = 0;

/************* information of the devices *****************/
var Info1 = 'Wind energy or wind power \n describe the process by which \nthe wind is used to generate \nmechanical power or electricity. \nWIND TURBINES convert the \nkinetic energy in the wind into \nmechanical power.This \nmechanical power is than used \nto generate electricity.With \nthe used of various SENSORS,\nCONTROLS and SOFTWARE \napplication this wind turbine \ncan be made smart and \nachieve the following \nadvantages : \n\n- Gain productivity\n- reduce maintenance cost\n-Less energy wastage';

var Info2 = 'Surveillance camera is used for \nsurveillance and security \npurposes monitoring without \npublicly distributing the infor\n-mation. It relies on the \nplacement of the camera \nbecause the camera \ncommunicate with the monitor \nvideo recorders via cable or \nwireless communication.\nAdvantages:\n-Used to maintain perimeter \nsecurity in the society\n-Used in overseeing the \nhazardous locations and \ntraffic monitoring \nDisadvantages:\n-It is expensive\n-It can be vulnerable.';

var Info3 = 'Smartphone is a mobile phones \nwith more computer function\n-ality and connectivity than \nconventional mobile phones. In \nmodern era, smartphones \nwith different sensors are used \nfor finding paths, finding \nlocations etc. apart from call\n-ing and messaging.\n\nAdvantages:\n-Makes the city more flexibile \nto share information\n-Peoples can monitor or control \nother application like \nswitching off the light remotely.\nDisadvantages:\n-Hinders human interaction\n';

var Info4 = 'Radio Frequency Identification\n(RFID) enables automatic \nidentification of objects and \nliving beings. It consists of \nradio tags which contains \nan identifying code with which \na reader can identify it.\nAdvantages:\n-Can keep track of any objects \nor living beings for security \nresons\n-reduce interoperability issues \namong devices.\nDisadvantages:\n-expensive because of \nbatteries\n-it takes long time to program \nRFID devices';

var Info4 = 'Solar energy is not only \nsustainable for energy consum\n-ption but it is also a renewable \nresources. The usage of skylight \nto harness energy would reduce \nthe expenditure for the energy \nconsumption.Solar energy \nprovides self-sufficient energy \nresources and with the integra\n-tion of smart sensors, it helps \nin efficient management of \npower.\nAdvantages:\n-It provides clean and \nrenewable energy\nDisadvantages:\n-It can’t produce electricity \nduring the rainy season and \nnight time.';

var Info5 = 'Home surveillance system \nconsist of various IoT devices \nin order to make your living \nmuch comfortable and easier.\na/-Light sensors.It is smart IoT \ndevices for detection or \nchecking whether the lights are \nturned off or not.\nb/-Humidity sensor: \nDisplays the temperature and \nhumidity. Helps in controlling \nthe room temperature \nafter using smart devices.\nc/-Presence Sensor: Used as a \nsecurity sensor to email you \nwhen movement is detected.\nd/-Smoke\Gas sensor:  Detects \nexplosive gas/smoke and warn \nthe user accordingly.';

var Info6 = 'Smart traffic lights with \nembedded sensors are used \nas traffic control devices. It \nhelps in conflicting streams of \ntraffic to share the intersec\n-tion by means of time separa\n-tion. The function of the traffic \nlight are increased as it can \ninteroperate with the nearby \ndevices to provide a right path.\nAdvantages:\n-Improves safety and efficiency \nof the traffic\n-Reduces the time for travelling \nby assigning optimized route .\nDisadvantage:\n-Sensors are expensive ';

var Info7 = 'Solar energy is not only \nsustainable for energy consum\n-ption but it is also a renewable \nresources. The usage of skylight \nto harness energy would reduce \nthe expenditure for the energy \nconsumption.Solar energy \nprovides self-sufficient energy \nresources and with the integra\n-tion of smart sensors, it helps \nin efficient management of \npower.\nAdvantages:\n-It provides clean and \nrenewable energy\nDisadvantages:\n-It can’t produce electricity \nduring the rainy season and \nnight time.';

var Key,detail_id,star_no1,objId,draggedSprite;
var infoDisplay = "",sideGuide,rate1,rate2,rate3;
var notice1;





SmartCity.Game.prototype = {
	
	 init: function(score) {
    score = score || 0;
    //this.highestScore = this.highestScore || 0;
     
    //this.highestScore = Math.max(score, this.highestScore);
	this.setScore(score);
	
   },
		
  create: function() {
  	
	 this.game.physics.startSystem(Phaser.Physics.ARCADE);
	
	//create group1
	
    //background
	this.ground= this.add.sprite(5, 8, 'ground');
	this.slider = this.add.sprite(160,472,'slider');
	this.panel = this.add.sprite(650,110,'panel1');
	//this.ground.setAll('body.immovable', true);//fixed ground
	group1 = this.game.add.group();
	group2 = this.game.add.group();
	group3 = this.game.add.group();
	group4 = this.game.add.group();
	
	
   // this.game.state.start('NextLevel');  
	  
	 truck1 = this.add.sprite(240, 185,'truck1',0);
	  truck1.visible = false;
	 
	 
	 truck2 = this.add.sprite(300, 224,'truck2',0);
	 truck2.visible = false;
	 
	 truck3 = this.add.sprite(254, 207,'truck3',0);
	 truck3.visible = false;
	 
	 car1 = this.add.sprite(264, 242,'car1',0);
	 car1.visible = false;
	 
	 car2 = this.add.sprite(210, 272,'car2',0);
	 car2.visible = false;
	
	 car3 = this.add.sprite(490, 436,'car3',0);
 	car3.visible = false;
	 
	 car4 = this.add.sprite(400, 485,'car3',0);
 	car4.visible = false;
	  //sounds
    audio1 = this.game.add.audio('audio1',1,true);
	
	 car5 = this.add.sprite(300, 430,'car3',0);
 	car5.visible = false;
	  //sounds
  //  audio1 = this.game.add.audio('audio1',1,true);
	
	//play background sound
    audio1.play();
	
	/************************ Button for slider ***************************************/
	
	
	button1 = this.game.add.button(85,470, 'sliderNav1', this.changePicture, this, 1, 0);
	button2 = this.game.add.button(690,470, 'sliderNav2', this.changePicture, this, 1, 0);
	
	
	/************************* Add the rating sprite **********************************/
	
    infoDisplay = this.game.add.bitmapText(880, 90, 'shortStack','' , 12);
	 sideGuide = this.add.sprite(869, 82, 'guide_SideBar');
      
      
	  
	
	 this.game.add.bitmapText(860, 402, 'shortStack_B', 'SECURITY :', 12);
	 this.game.add.bitmapText(860, 442, 'shortStack_B', 'INTEROPERABILITY :', 12);
	 this.game.add.bitmapText(860, 490, 'shortStack_B', 'COST:', 12);
	 rate1 = this.add.sprite(988, 397,'rating',0);
	 rate2 = this.add.sprite(988, 440,'rating',0);
	 rate3 = this.add.sprite(988, 488,'rating',0);
	
    // group1.add(h1);
    // group1.add(h2);	 
	group1.create(360, 410,'house1',3); //hostel
	group1.create(270, 360,'house1',0);
	
	
	group2.create(180, 160,'house2',0); //town
	group2.create(120, 190,'house7',0);
	group2.create(60, 220,'house8',0);

	//group2.create(104, 248,'house3',0);
	//group2.create(84, 270,'house3',0);
	group3.create(288, 130,'house4',0); //petrolpum n smaal house
	group3.create(260, 146,'house4',0); 
	group3.create(162, 272,'house5',0); 
	group3.create(280, 250,'house3',0);
	group3.create(310, 270,'house3',0);
	group3.create(298, 240,'house3',0);
	group3.create(323, 258,'house3',0);
	group4.create(516,270,'house6',0);//firm
	group4.create(520,163,'house9',0);
	
	
	 this.game.physics.enable(group1, Phaser.Physics.ARCADE);
	 this.game.physics.enable(group2, Phaser.Physics.ARCADE);
	//this.house01.scale.set(2);
	//this.house01.smoothed=false;
	
	//this.transparent = this.add.sprite(348, 508,'transparent',3);
	
	//click test


	this.click1=this.add.sprite(200, 508,'IoT1_main',0);
	this.click1.inputEnabled = true;
    this.click1.input.enableDrag();
	this.click1.anchor.setTo(0.5, 0.5);
	this.click1.events.onInputOver.add(this.onPointerOver, this);
	this.click1.events.onInputOut.add(this.showEmptyDetail, this);
	//this.click1.events.onInputDown.add(this.showEmptyDetail, this);
	//this.click1.events.onInputUp.add(this.onPointerOver, this);
	
	
	
	this.click2=this.add.sprite(280, 508,'IoT2_main',0);
	this.click2.inputEnabled = true;
    this.click2.input.enableDrag();
	this.click2.anchor.setTo(0.5, 0.5);
	this.click2.events.onInputOver.add(this.onPointerOver, this);
	this.click2.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click3=this.add.sprite(380, 508,'IoT3_main',0);
	this.click3.inputEnabled = true;
    this.click3.input.enableDrag();
	this.click3.anchor.setTo(0.5, 0.5);
	this.click3.events.onInputOver.add(this.onPointerOver, this);
	this.click3.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click4=this.add.sprite(480, 516,'IoT4_main',0);
	this.click4.inputEnabled = true;
    this.click4.input.enableDrag();
	this.click4.anchor.setTo(0.5, 0.5);
	this.click4.events.onInputOver.add(this.onPointerOver, this);
	this.click4.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click5=this.add.sprite(580, 516,'IoT5_main',0);
	this.click5.inputEnabled = true;
    this.click5.input.enableDrag();
	this.click5.anchor.setTo(0.5, 0.5);
	this.click5.events.onInputOver.add(this.onPointerOver, this);
	this.click5.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click6=this.add.sprite(660, 516,'IoT6_main',0);
	this.click6.inputEnabled = true;
    this.click6.input.enableDrag();
	this.click6.anchor.setTo(0.5, 0.5);
	this.click6.events.onInputOver.add(this.onPointerOver, this);
	this.click6.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click1.originalPosition = this.click1.position.clone();
    this.click1.events.onDragStop.add(this.onDragStop, this);
	this.click1.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click1, Phaser.Physics.ARCADE);
    this.click1.body.allowRotation = false;
	
	this.click2.originalPosition = this.click2.position.clone();
    this.click2.events.onDragStop.add(this.onDragStop, this);
	this.click2.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click2, Phaser.Physics.ARCADE);
    this.click2.body.allowRotation = false;
	
	this.click3.originalPosition = this.click3.position.clone();
    this.click3.events.onDragStop.add(this.onDragStop, this);
	this.click3.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click3, Phaser.Physics.ARCADE);
    this.click3.body.allowRotation = false;
	
	this.click4.originalPosition = this.click4.position.clone();
    this.click4.events.onDragStop.add(this.onDragStop, this);
	this.click4.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click4, Phaser.Physics.ARCADE);
    this.click4.body.allowRotation = false;
	
	this.click5.originalPosition = this.click5.position.clone();
    this.click5.events.onDragStop.add(this.onDragStop, this);
	this.click5.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click5, Phaser.Physics.ARCADE);
    this.click5.body.allowRotation = false;
	
	this.click6.originalPosition = this.click6.position.clone();
    this.click6.events.onDragStop.add(this.onDragStop, this);
	this.click6.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click6, Phaser.Physics.ARCADE);
    this.click6.body.allowRotation = false;
	
	
    
	/******************  Insert Details here*********************************************/
	//set the information about the devices
	
	
	this.setInfo('IoT1_main',Info1);
	this.setRate1('IoT1_main',3); // rate1 for security
	this.setRate2('IoT1_main',4); //rate2 for interoperability
	this.setRate3('IoT1_main',5); //rate3 for expensive
	
	this.setInfo('IoT2_main',Info2);
	this.setRate1('IoT2_main',5); 
	this.setRate2('IoT2_main',3); 
	this.setRate3('IoT2_main',3);
	
	this.setInfo('IoT3_main',Info3);
	this.setRate1('IoT3_main',2); 
	this.setRate2('IoT3_main',3); 
	this.setRate3('IoT3_main',2);
	
	this.setInfo('IoT4_main',Info4);
	this.setRate1('IoT4_main',3); 
	this.setRate2('IoT4_main',3); 
	this.setRate3('IoT4_main',4);
	
	this.setInfo('IoT5_main',Info5);
	this.setRate1('IoT5_main',4); 
	this.setRate2('IoT5_main',3); 
	this.setRate3('IoT5_main',4);
	
	this.setInfo('IoT6_main',Info6);
	this.setRate1('IoT6_main',3); 
	this.setRate2('IoT6_main',3); 
	this.setRate3('IoT6_main',3);
	
	this.setInfo('IoT7_main',Info7);
	this.setRate1('IoT7_main',2); 
	this.setRate2('IoT7_main',3); 
	this.setRate3('IoT7_main',4);
	
	
	
	
    //player initial score of zero
	
	  playerScore =  this.game.add.bitmapText(860, 530, 'score_B', 'SCORE :', 12); 
	  this.setScore(score);  
	  playerScore.text='SCORE : '+ score;

  
    //notice for interoperability
//	notice1 = this.add.sprite(360, 410,'noticeBoard');
    
		
		
    /*************************Initialise the interoperability sign ****************************/
	
	level = this.game.add.bitmapText(1020, 50, 'shortStack_B', 'LEVEL I', 4);
	level.scale.setTo(4,4);
	
	sign_text = this.game.add.bitmapText(654, 120, 'shortStack_G', '             !!!', 4);
	sign_text.scale.setTo(4,4);
	
	 interOp_1 = this.add.sprite(730, 150,'interoperable1',0);//show a shadow sprite
	// interOp_2 = this.add.sprite(730, 150,'interoperable2',0);//show a shadow sprite
	 //nterOp_1.frame=0;
	  //interOp_2.frame=0;
	 this.setIsOperable(0);
   // interOp_1.destroy();
	//sounds
    
	/**************************** show the interoperability information for each group *****************************/
	
	this.detailSign1 = this.add.sprite(360,410,'detailSign1'); // near hostel
	this.detailSign1.inputEnabled = true;
	this.detailSign1.anchor.setTo(0.5, 0.5);
	this.detailSign1.events.onInputOver.add(this.showDetailBoard, this);
	this.detailSign1.events.onInputOut.add(this.removeDetailBoard, this);
	
	this.detailSign2 = this.add.sprite(120, 215,'detailSign2'); // near town building 
	this.detailSign2.inputEnabled = true;
	this.detailSign2.anchor.setTo(0.5, 0.5);
	this.detailSign2.events.onInputOver.add(this.showDetailBoard, this);
	this.detailSign2.events.onInputOut.add(this.removeDetailBoard, this);
	
	this.detailSign3 = this.add.sprite(265, 310,'detailSign3'); //near pertolpump
	this.detailSign3.inputEnabled = true;
	this.detailSign3.anchor.setTo(0.5, 0.5);
	this.detailSign3.events.onInputOver.add(this.showDetailBoard, this);
	this.detailSign3.events.onInputOut.add(this.removeDetailBoard, this);
	
	this.detailSign4 = this.add.sprite(525,270,'detailSign4'); // near industry 
	this.detailSign4.inputEnabled = true;
	this.detailSign4.anchor.setTo(0.5, 0.5);
	this.detailSign4.events.onInputOver.add(this.showDetailBoard, this);
	this.detailSign4.events.onInputOut.add(this.removeDetailBoard, this);
	
	this.detailSign4 = this.add.sprite(360,150,'detailSign5'); // near parking top-left
	this.detailSign4.inputEnabled = true;
	this.detailSign4.anchor.setTo(0.5, 0.5);
	this.detailSign4.events.onInputOver.add(this.showDetailBoard, this);
	this.detailSign4.events.onInputOut.add(this.removeDetailBoard, this);
	
	
  },
 
update: function() {
	
	//this.game.state.start('NextLevel',true,false,score); 
	
	//console.log(this.game.input.x , this.game.input.y);
	
	console.log(score);
	
	 playerScore.text='SCORE : '+ this.getScore();
	 
	if(enableDragSign == 1 && this.game.input.y <= 380)
	      
		   {
		
				
				if(this.click1.overlap(group1))
				{  


					//interOp_1.position.x=this.game.input.x;
					//interOp_1.position.x=this.game.input.y;
				//	notice1.visible = true;
					interOp_1.destroy();
					this.setIsOperable(1);
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;
					
					 sign_text.text = 'InterOperable!!!';
					 
					
				}
				
				else if(this.click1.overlap(group2))
				{
				   
					
					this.setIsOperable(0);
					interOp_1.destroy();
					//notice.destroy();
					//notice = this.add.sprite(120, 190,'noticeBoard');
					sign_text.text = 'Not InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
				   interOp_1.frame=1;
					
				   // this.click1.position.copyFrom(this.click1.originalPosition);
				
				}
				  
				else if(this.click1.overlap(group3))
				{
					interOp_1.destroy();
					this.setIsOperable(0);
				//	notice.destroy();
				//	notice = this.add.sprite(238, 126,'noticeBoard');
					sign_text.text = 'Not InterOperable!!!';
				   interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
				   interOp_1.frame=1;		
				
				}
				

				  
			   else if(this.click2.overlap(group1))
				   {  

					interOp_1.destroy();
					this.setIsOperable(1);
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;
					
					 sign_text.text = 'InterOperable!!!';
					
					
				}
				
				else if(this.click2.overlap(group2))
				{
				
					
					interOp_1.destroy();
					this.setIsOperable(1);
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;
					
					 sign_text.text = 'InterOperable!!!';
				
				}
				  
				else if(this.click2.overlap(group3))
				{
					
					interOp_1.destroy();
					this.setIsOperable(1);
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;
					
					 sign_text.text = 'InterOperable!!!';
				  
				
				}
				
				  else if(this.click3.overlap(group1))
				   {  

					
					interOp_1.destroy();
					this.setIsOperable(1);
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;
					
					 sign_text.text = 'InterOperable!!!';
				   
					
					
					
				}
				
				else if(this.click3.overlap(group2))
				{
				   
					
					interOp_1.destroy();
					this.setIsOperable(1);
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;
					
					 sign_text.text = 'InterOperable!!!';
				  
				
				}
				  
				   else if(this.click3.overlap(group3))
				{
					
					
					interOp_1.destroy();
					this.setIsOperable(1);
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;
					
					 sign_text.text = 'InterOperable!!!';
				
				
				}
				
				
				 else if(this.click4.overlap(group1))
				   {  

					
					this.setIsOperable(0);
					interOp_1.destroy();
					//notice.destroy();
					//notice = this.add.sprite(360, 410,'noticeBoard');
					interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
					interOp_1.frame=1;
					 sign_text.text = 'Not InterOperable!!!';
					 
				   
					
					
					
				}
				
				else if(this.click4.overlap(group2))
				{
				   
					
					this.setIsOperable(0);
					interOp_1.destroy();
					//notice.destroy();
					//notice = this.add.sprite(360, 410,'noticeBoard');
					interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
					interOp_1.frame=1;
					 sign_text.text = 'Not InterOperable!!!';
					 
				  
				
				}
				  
				   else if(this.click4.overlap(group3))
				{
					
					this.setIsOperable(0);
					interOp_1.destroy();
					interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
					interOp_1.frame=1;
					 sign_text.text = 'Not InterOperable!!!';
					
				
				}
				
				 else if(this.click4.overlap(group4))
				{
					
					
					this.setIsOperable(1);
					interOp_1.destroy();
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;		
					
				
				}
				
				 else if(this.click5.overlap(group1))
				   {  

					this.setIsOperable(1);
					interOp_1.destroy();
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;		
				
					
					
				}
				
				else if(this.click5.overlap(group2))
				{
				   
					
					this.setIsOperable(1);
					interOp_1.destroy();
					//notice.destroy();
				//	notice = this.add.sprite(120, 190,'noticeBoard');
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
				   interOp_1.frame=1;
				  
				
				}
				  
				   else if(this.click5.overlap(group3))
				{
					
					
					this.setIsOperable(0);
					interOp_1.destroy();
					interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
					interOp_1.frame=1;
					 sign_text.text = 'Not InterOperable!!!';
				
				
				}
				
				 else if(this.click6.overlap(group1))
				   {  

					
					this.setIsOperable(0);
					interOp_1.destroy();
					interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
					interOp_1.frame=1;
					 sign_text.text = 'Not InterOperable!!!';
					 
				   
					
					
					
				}
				
				else if(this.click6.overlap(group2))
				{
				   
				
					this.setIsOperable(0);
					interOp_1.destroy();
					interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
					interOp_1.frame=1;
					 sign_text.text = 'Not InterOperable!!!';
				  
				
				}
				  
				   else if(this.click6.overlap(group3))
				{
					
					
					this.setIsOperable(1);
					interOp_1.destroy();
				//	notice.destroy();
				//	notice = this.add.sprite(238, 126,'noticeBoard');
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;		
				
				
				}
				
				if(isDefined == 1)
				{
				 if(this.click7.overlap(group1))
				   {  

					
					
					this.setIsOperable(1);
					interOp_1.destroy();
				//	notice.destroy();
				//	notice = this.add.sprite(238, 126,'noticeBoard');
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;		
					 
				   
					
					
					
				}
				
				else if(this.click7.overlap(group2))
				{
				   
					
					this.setIsOperable(0);
					interOp_1.destroy();
					interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
					interOp_1.frame=1;
					 sign_text.text = 'Not InterOperable!!!';
				  
				
				}
				  
				   else if(this.click7.overlap(group3))
				{
					
					
					this.setIsOperable(1);
					interOp_1.destroy();
				//	notice.destroy();
				//	notice = this.add.sprite(238, 126,'noticeBoard');
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;		
				
				
				}
				
				else
				   {
					   console.log("executed");
					   
						sign_text.text ='             !!!';	
					   interOp_1.destroy();
					   
					   
					   
				   }
		
		
		}
				 // notice1.visible = false;
				//  notice1 = this.add.sprite(238, 126,'noticeBoard1');
				  
				   
				   
				  //interOp_1= this.add.sprite(730, 150,'interoperable1');
				  //interOp_1= this.add.sprite(730, 150,'interoperable1');
	  
		   }
		   
		   else
		   {
			   console.log("executed");
			   
			    sign_text.text ='             !!!';	
			   interOp_1.destroy();
			   
			   
			   
		   }
	  
	  },
	  
	  /************************* for slider button event************************************/
	  
	  
  
  changePicture:function()
  {

  
    if(currentItem == 0)
	{
		
		
	currentItem = 1;	
	isDefined =1;
		
    this.click1.destroy();
	this.click2.destroy();
	this.click3.destroy();
	this.click4.destroy();
	this.click5.destroy();
	this.click6.destroy();
	
	this.click7=this.add.sprite(200, 508,'IoT7_main',0);
	this.click7.inputEnabled = true;
    this.click7.input.enableDrag();
	this.click7.anchor.setTo(0.5, 0.5);
	this.click7.events.onInputOver.add(this.onPointerOver, this);
	this.click7.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click7.originalPosition = this.click7.position.clone();
    this.click7.events.onDragStop.add(this.onDragStop, this);
	this.click7.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click7, Phaser.Physics.ARCADE);
    this.click7.body.allowRotation = false;
	
	}
	else if(currentItem == 1)
		
	{
			
	currentItem = 0;
	isDefined =0;
	this.click7.destroy();
	
	this.click1=this.add.sprite(200, 508,'IoT1_main',0);
	this.click1.inputEnabled = true;
    this.click1.input.enableDrag();
	this.click1.anchor.setTo(0.5, 0.5);
	this.click1.events.onInputOver.add(this.onPointerOver, this);
	this.click1.events.onInputOut.add(this.showEmptyDetail, this);
	
	
	
	this.click2=this.add.sprite(280, 508,'IoT2_main',0);
	this.click2.inputEnabled = true;
    this.click2.input.enableDrag();
	this.click2.anchor.setTo(0.5, 0.5);
	this.click2.events.onInputOver.add(this.onPointerOver, this);
	this.click2.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click3=this.add.sprite(380, 508,'IoT3_main',0);
	this.click3.inputEnabled = true;
    this.click3.input.enableDrag();
	this.click3.anchor.setTo(0.5, 0.5);
	this.click3.events.onInputOver.add(this.onPointerOver, this);
	this.click3.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click4=this.add.sprite(480, 516,'IoT4_main',0);
	this.click4.inputEnabled = true;
    this.click4.input.enableDrag();
	this.click4.anchor.setTo(0.5, 0.5);
	this.click4.events.onInputOver.add(this.onPointerOver, this);
	this.click4.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click5=this.add.sprite(580, 516,'IoT5_main',0);
	this.click5.inputEnabled = true;
    this.click5.input.enableDrag();
	this.click5.anchor.setTo(0.5, 0.5);
	this.click5.events.onInputOver.add(this.onPointerOver, this);
	this.click5.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click6=this.add.sprite(660, 516,'IoT6_main',0);
	this.click6.inputEnabled = true;
    this.click6.input.enableDrag();
	this.click6.anchor.setTo(0.5, 0.5);
	this.click6.events.onInputOver.add(this.onPointerOver, this);
	this.click6.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click1.originalPosition = this.click1.position.clone();
    this.click1.events.onDragStop.add(this.onDragStop, this);
	this.click1.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click1, Phaser.Physics.ARCADE);
    this.click1.body.allowRotation = false;
	
	this.click2.originalPosition = this.click2.position.clone();
    this.click2.events.onDragStop.add(this.onDragStop, this);
	this.click2.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click2, Phaser.Physics.ARCADE);
    this.click2.body.allowRotation = false;
	
	this.click3.originalPosition = this.click3.position.clone();
    this.click3.events.onDragStop.add(this.onDragStop, this);
	this.click3.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click3, Phaser.Physics.ARCADE);
    this.click3.body.allowRotation = false;
	
	this.click4.originalPosition = this.click4.position.clone();
    this.click4.events.onDragStop.add(this.onDragStop, this);
	this.click4.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click4, Phaser.Physics.ARCADE);
    this.click4.body.allowRotation = false;
	
	this.click5.originalPosition = this.click5.position.clone();
    this.click5.events.onDragStop.add(this.onDragStop, this);
	this.click5.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click5, Phaser.Physics.ARCADE);
    this.click5.body.allowRotation = false;
	
	this.click6.originalPosition = this.click6.position.clone();
    this.click6.events.onDragStop.add(this.onDragStop, this);
	this.click6.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click6, Phaser.Physics.ARCADE);
    this.click6.body.allowRotation = false;
	
			
			
			
			
			
	}
	
 
	
	
  },

 previousPicture:function() 
 {
	 
	 
	 
   
    
  
 },
	  
	  
onPointerOver:function(sprite, pointer) //when  mouse is hovered over device 

 {
	 
	 /***** show drag and drop animation ans used less than 2 *****/
	 
	 if(sprite.key == 'IoT1_main' && used1 < 2)
	 {
		 
		this.dragDrop_anim=this.add.sprite(200, 450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	  var anim = this.dragDrop_anim.animations.add('drag1',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(200, 570,'iot1Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	 // var anim = this.deviceName_anim.animations.add('drag1',[0]);
	  //anim.play(3,false);
		 
	 }
	 
	 else if(sprite.key == 'IoT2_main' && used2 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(280,450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	   var anim = this.dragDrop_anim.animations.add('drag2',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(280, 570,'iot2Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	 
	 else if(sprite.key == 'IoT3_main' && used3 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(380, 450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag3',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(380, 570,'iot3Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	 
	  else if(sprite.key == 'IoT4_main' && used4 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(480,450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag4',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(480, 570,'iot4Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	 
	  else if(sprite.key == 'IoT5_main' && used4 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(580,450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag5',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(580, 570,'iot5Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	 
	 else if(sprite.key == 'IoT6_main' && used4 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(660,450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag6',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(660, 570,'iot6Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	 
	 else if(sprite.key == 'IoT7_main' && used4 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(200,450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag7',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(200, 570,'iot7Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	  
	  
	 /************* Display the details and rating for the device ******************/ 
	 
	 sideGuide.destroy();
	 isSet = 0;
	 infoDisplay.text=this.getInfo(sprite.key);
	  
	 var y1 = this.getRate1(sprite.key);
	 var y2 = this.getRate2(sprite.key);
	 var y3 = this.getRate3(sprite.key);
	 
	 rate1 = this.add.sprite(988, 397,'rating',y1);
	 rate2 =  this.add.sprite(988, 440,'rating',y2);
	 rate3 =  this.add.sprite(988, 488,'rating',y3);
 
},

/**************when mouse is hovered out of device ******************/
 showEmptyDetail: function(sprite, pointer) 
 
 {
	 
	
	
	    this.dragDrop_anim.destroy();
	    this.deviceName_anim.destroy();
	    //display the guide_sideBar image
	    this.add.sprite(988, 397,'rating',0); // display empty star
	    this.add.sprite(988, 440,'rating',0);
	    this.add.sprite(988, 488,'rating',0);
	    if(isSet == 0)
		{
	       sideGuide = this.add.sprite(869, 82, 'guide_SideBar');
		   isSet = 1;
		}
		
},





/*****************show the info board for the corresponding sigh *********************/

showDetailBoard : function (sprite)
 {
	
	console.log(sprite.key);
	
   if(sprite.key == 'detailSign1')
   {
	
	  detailNotice1 = this.add.sprite(355,210,'notice4');
	   
	   
   }
   
   else if(sprite.key == 'detailSign2')
   {
	
	  detailNotice2 = this.add.sprite(155, 20,'notice3');
	   
	   
   }
     else if(sprite.key == 'detailSign3')
   {
	
	  detailNotice3 = this.add.sprite(255, 124,'noticeBoard');
	   
	   
   }
   
    else if(sprite.key == 'detailSign4')
   {
	
	  detailNotice4 = this.add.sprite(540,70,'notice5');
	   
	   
   }
   
    else if(sprite.key == 'detailSign5')
   {
	
	  detailNotice5 = this.add.sprite(400,56,'notice6');
	   
	   
   }
   
   

},


removeDetailBoard : function(sprite, pointer) //when  device is clicked

 {
	 
	  if(sprite.key == 'detailSign1')
   {
	
	  detailNotice1.destroy();
	   
	   
   }
   
    else if(sprite.key == 'detailSign2')
   {
	
	  detailNotice2.destroy();
	   
	   
   }
   else if(sprite.key == 'detailSign3')
   {
	
	  detailNotice3.destroy();
	   
	   
   }
   else if(sprite.key == 'detailSign4')
   {
	
	  detailNotice4.destroy();
	   
	   
   }
   
   else if(sprite.key == 'detailSign5')
   {
	
	  detailNotice5.destroy();
	   
	   
   }
   
	 
 
},



setIsOperable: function(value)
{
	operable = value;
	
},
getIsOperable: function()
{
	return operable;
	
},

onDragStart: function (sprite,pointer)

 {
	 
	    
	 this.showEmptyDetail();
	
     enableDragSign = 1;
	 
	 	/********************* Check how many times the device is used ******************************/
	
	if(used1 == 1)
	{
		
		 this.click1.input.draggable = false;
		
	}
	if(used2 ==1)
	{
		
		 this.click2.input.draggable = false;
		
	}
	if(used3 == 1)
	{
		
		 this.click3.input.draggable = false;
		
	}
	if(used4 == 1)
	{
		
		 this.click4.input.draggable = false;
		
	}
	if(used5 == 1)
	{
		
		 this.click5.input.draggable = false;
		
	}
	if(used6 == 1)
	{
		
		 this.click6.input.draggable = false;
		
	}
	if(used7 == 1)
	{
		
		 this.click7.input.draggable = false;
		
	}
},


onDragStop: function (sprite, pointer) 

{
	
	if( this.game.input.y <= 380)
	{
	 
console.log(sprite.key);
 
      
     enableDragSign = 0;
  
  if(sprite.key == 'IoT1_main' && this.getIsOperable() == 1)
   {
	   //sprite.input.draggable = false;
	   this.click1_anim=this.add.sprite(this.game.input.x, this.game.input.y,'IoT1',0);
	   var anim = this.click1_anim.animations.add('windmill',[0,2,1,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click1.position.copyFrom(this.click1.originalPosition);
	   this.click1.inputEnabled = true;
       this.click1.input.enableDrag();
	  // this.click1.anchor.setTo(0.5, 0.5);
	   used1 = 1; 
	   
	   
   }
   
    else if(sprite.key == 'IoT2_main' && this.getIsOperable() == 1)
   {
	   
	   this.click2_anim=this.add.sprite(this.game.input.x, this.game.input.y,'IoT2',0);
	  // sprite.input.draggable = false;
	   var anim = this.click2_anim.animations.add('wifi',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	    this.click2.position.copyFrom(this.click2.originalPosition);
	   this.click2.inputEnabled = true;
       this.click2.input.enableDrag();
	  // this.click2.anchor.setTo(0.5, 0.5);
	   
	   used2 = 1; 
   }
   
    else if(sprite.key == 'IoT3_main' && this.getIsOperable() == 1)
   {
	   
	   this.click3_anim=this.add.sprite(this.game.input.x, this.game.input.y,'IoT3',0);
	   //sprite.input.draggable = false;
	   var anim = this.click3_anim.animations.add('netconnect',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	    this.click3.position.copyFrom(this.click3.originalPosition);
	   this.click3.inputEnabled = true;
       this.click3.input.enableDrag();
	  // this.click3.anchor.setTo(0.5, 0.5);
	   
	   used3 = 1; 
   }
   
    else if(sprite.key == 'IoT4_main' && this.getIsOperable() == 1)
   {
	  // sprite.input.draggable = false;
	   
	   this.click4_anim=this.add.sprite(this.game.input.x, this.game.input.y,'IoT4',0);
	   var anim = this.click4_anim.animations.add('router',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click4.position.copyFrom(this.click4.originalPosition);
	   this.click4.inputEnabled = true;
       this.click4.input.enableDrag();
	  // this.click4.anchor.setTo(0.5, 0.5);
	   
	   used4 = 1; 
   }
   
   else if(sprite.key == 'IoT5_main' && this.getIsOperable() == 1)
   {
	  // sprite.input.draggable = false;
	   
	   this.click5_anim=this.add.sprite(this.game.input.x, this.game.input.y,'IoT5',0);
	   var anim = this.click5_anim.animations.add('router',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click5.position.copyFrom(this.click5.originalPosition);
	   this.click5.inputEnabled = true;
       this.click5.input.enableDrag();
	  // this.click4.anchor.setTo(0.5, 0.5);
	   
	   used5 = 1; 
   }
   
   else if(sprite.key == 'IoT6_main' && this.getIsOperable() == 1)
   {
	  // sprite.input.draggable = false;
	   
	   this.click4_anim=this.add.sprite(this.game.input.x, this.game.input.y,'IoT6',0);
	   var anim = this.click4_anim.animations.add('router',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click6.position.copyFrom(this.click6.originalPosition);
	   this.click6.inputEnabled = true;
       this.click6.input.enableDrag();
	  // this.click4.anchor.setTo(0.5, 0.5);
	   
	   used6 = 1; 
   }
   
    else if(sprite.key == 'IoT7_main' && this.getIsOperable() == 1)
   {
	  // sprite.input.draggable = false;
	   
	   this.click4_anim=this.add.sprite(this.game.input.x, this.game.input.y,'IoT7',0);
	   var anim = this.click4_anim.animations.add('router',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click7.position.copyFrom(this.click7.originalPosition);
	   this.click7.inputEnabled = true;
       this.click7.input.enableDrag();
	  // this.click4.anchor.setTo(0.5, 0.5);
	   
	   used7 = 1; 
   }
   
   else 
   {
	   sprite.position.copyFrom(sprite.originalPosition);
	   
	   
   }
   
}
   
   else 
   {
	   sprite.position.copyFrom(sprite.originalPosition);
	   
	   
   }
    
	/********************* Check how many times the device is used ******************************/
	
	if(used1 == 1)
	{
		
		 this.click1.input.draggable = false;
		
	}
	if(used2 ==1)
	{
		
		 this.click2.input.draggable = false;
		
	}
	if(used3 == 1)
	{
		
		 this.click3.input.draggable = false;
		
	}
	if(used4 == 1)
	{
		
		 this.click4.input.draggable = false;
		
	}
	if(used5 == 1)
	{
		
		 this.click5.input.draggable = false;
		
	}
	if(used6 == 1)
	{
		
		 this.click6.input.draggable = false;
		
	}
	if(used7 == 1)
	{
		
		 this.click7.input.draggable = false;
		
	}
   
     
	 /*********************** Check the score **************************/
	 
   if(score>10 && check1 == 0)
   {
		   
		this.showAnim1();
		
		check1=1;
	}
	
	else if(score>12 && check2 == 0)
    {
		   
		this.showAnim2();
		check2=1;
	}
	else if(score>16 && check3 == 0)
		
	{
		
		this.showAnim3();
		check3=1;
	}
	else if(score>18 && check4 ==0)
		
	{
		
		this.showAnim4();
		this.showAnim6();
		check4=1;
	}
	
	else if(score> 20 && check5 ==0)
		
	{
		
		this.showAnim5();
		this.showAnim7();
	
		check5=1;
	}
	
	
	
	
	if(score > 55)
				   
	{
	 
	 audio1.stop();
	 audio2.stop();
	 audio3.stop();
	 
	 
	 this.game.state.start('NextLevel',true,false,score);  
					   
	 }
	  
   

},

 calcScore: function(Key) {
	 
	 
	
	if(Key == 'IoT1_main')
	{
	  
	// infoDisplay = this.game.add.bitmapText(880, 90, 'shortStack', this.getInfo(Key), 12);
	 

	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 	 
	 score = (y1)+(y2)+(y3)+score;
	 this.setScore(score);
	
	// playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	else if(Key == 'IoT2_main')
	{
	  
	 
 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	else if(Key == 'IoT3_main')
	{
	 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	else if(Key == 'IoT4_main')
	{
	 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	else if(Key == 'IoT5_main')
	{
	 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	else if(Key == 'IoT6_main')
	{
	 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	else if(Key == 'IoT7_main')
	{
	 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	
},

/*****************  showing Animation depending on the score *************************/

showAnim1: function()

{
	
	 var tween = this.game.add.tween(truck1).to({
			x: [240, 272,300,461,521,615],
            y: [185, 202,204,305,347,410],
			angle: [00]
        }, 8000);
        tween.interpolation(function(v, k){
            return Phaser.Math.bezierInterpolation(v, k);
        });
        tween.repeat(Infinity);
        tween.start();
		truck1.angle =45;
		//sounds
    audio3 = this.game.add.audio('audio3',1,true);
	
	//play sound
    audio3.play();
	truck1.visible = true;
	
	
	
},

showAnim2: function()

{
	
	

//group animation
	group1.callAll('animations.add','animations','lightup1',[0,3,1],1,true);
	
	//var anim = hostel1.animations.add('ligtup1',[0,2]);
   // var anim1 = hostel2.animations.add('lightp',[0,3]);
	  
	  //play group animation
	 group1.callAll('play',null,'lightup1');
	//anim.play(1,true);
	//anim1.play(1,true);
	
	
	

	
},

showAnim3: function()

{


	group2.callAll('animations.add','animations','lightup2',[0,1,2,3],1,true); 
	  //play group animation
	 group2.callAll('play',null,'lightup2');
	//anim.play(1,true);
	//anim1.play(1,true);
	
	

	
},

showAnim4: function()

{


	group3.callAll('animations.add','animations','lightup3',[0,3,1],1,true); 
	  //play group animation
	 group3.callAll('play',null,'lightup3');
	//anim.play(1,true);
	//anim1.play(1,true);
	var tween = this.game.add.tween(car3).to({
			x: [470, 450, 400, 350, 300, 270],
            y: [422, 412, 383, 355, 326, 310],
			angle: [00]
        }, 8000);
        tween.interpolation(function(v, k){
            return Phaser.Math.bezierInterpolation(v, k);
        });
        tween.repeat(Infinity);
        tween.start();
		
	car3.visible = true;
	
	//sounds
    audio2 = this.game.add.audio('audio2',0.1,true);
	
	//play sound
    audio2.play();
	
},

showAnim5: function()

{


	group4.callAll('animations.add','animations','lightup4',[0,1,2,3],1,true); 
	  //play group animation
	 group4.callAll('play',null,'lightup4');
	//anim.play(1,true);
	//anim1.play(1,true);
	
	var tween = this.game.add.tween(car4).to({
			x: [300, 250, 100, 70 ],
            y: [430, 400, 315, 298 ],
			angle: [00]
        }, 8000);
        tween.interpolation(function(v, k){
            return Phaser.Math.bezierInterpolation(v, k);
        });
        tween.repeat(Infinity);
        tween.start();
		
	car4.visible = true;

	
},

showAnim6: function()

{
	
	 var tween = this.game.add.tween(truck2).to({
			x: [ 300,461,521,615,770,780],
            y: [ 220,321,354,426,516,511],
			angle: [00]
        }, 8000);
        tween.interpolation(function(v, k){
            return Phaser.Math.bezierInterpolation(v, k);
        });
        tween.repeat(Infinity);
        tween.start();
		//sounds
    //audio3 = this.game.add.audio('audio3',1,true);
	
	//play explosion sound
   // audio3.play();
	truck2.visible = true;
	
	var tween = this.game.add.tween(truck3).to({
			x: [264, 294,324,354,384,414,500,700,720],
            y: [208, 228,244,264,284,299,358,469,480],
			angle: [00]
        }, 8000);
        tween.interpolation(function(v, k){
            return Phaser.Math.bezierInterpolation(v, k);
        });
        tween.repeat(Infinity);
        tween.start();
		truck3.angle =45;
		
	truck3.visible = true;
	
	
	
},

showAnim7: function()

{

    var tween = this.game.add.tween(car1).to({
			x: [258, 252, 246, 243,240,225,215],
            y: [239, 238, 235, 235,235,232,232],
			angle: [00]
        }, 2000);
        tween.interpolation(function(v, k){
            return Phaser.Math.bezierInterpolation(v, k);
        });
        tween.repeat(Infinity);
        tween.start();
		//car1.angle =45;
		
		
	car1.visible = true;
	
	var tween = this.game.add.tween(car2).to({
			x: [190, 170, 160, 154],
            y: [266, 260, 257, 258],
			angle: [00]
        }, 2000);
        tween.interpolation(function(v, k){
            return Phaser.Math.bezierInterpolation(v, k);
        });
        tween.repeat(Infinity);
        tween.start();
		
	car2.visible = true;
	
	
	
	var tween = this.game.add.tween(car5).to({
			x: [ 250, 100, 70, 30],
            y: [ 400, 315, 298, 275],
			angle: [00]
        }, 8000);
        tween.interpolation(function(v, k){
            return Phaser.Math.bezierInterpolation(v, k);
        });
        tween.repeat(Infinity);
        tween.start();
		
	car5.visible = true;
	
	

	
},










//getter and setter for device information

setInfo: function (Key,info){
        
	 infoArr[Key] = info ;
	//console.log(infoArr[Key]);
},

getInfo: function (Key){

	return infoArr[Key];
	
},

setScore: function(score)
{
	score = score;
	
},
getScore:function()
{
	
	return score;
},

//getter and setter for Device Rating

setRate1: function(Key,no_rate)
{
secuArr[Key] = no_rate;
	
},

getRate1: function(Key)
{

return secuArr[Key];
	
},
setRate2: function(Key,no_rate)
{
interopArr[Key] = no_rate;
	
},

getRate2: function(Key)
{

return interopArr[Key];
	
},

setRate3: function(Key,no_rate)
{
expArr[Key] = no_rate;
	
},

getRate3: function(Key)
{

return expArr[Key];
	
},


//check if the object is dragged

setDragSprite: function(sprite)
{
	draggedSprite = sprite;
	
},

getDragSprite: function()
{
	return draggedSprite;
	
}

};