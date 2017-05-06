var SmartCity = SmartCity || {};

//title screen
SmartCity.Game2 = function(){};
var group1;
var group2;
var group3;
var group4;
var operable;
var truck1,truck2,sign_text,level;
var interOp_1,interOp_2;
var playerScore;
var score =0;
var Lscore;
var check11=0;
var check22=0;
var check33=0;
var check44=0;
var check55=0;
var check66=0;
var check77=0;

var used11=0;
var used22=0;
var used33=0;
var used44=0;
var used55=0;
var used66=0;
var used77=0;
var used88=0;

var enableDragSign = 0;

var button1,button2;

var infoArr = {};
var secuArr = {};
var interopArr = {};
var expArr = {};
var detailNotice1;

/************* information of the devices *****************/

var info1 = 'Cloud computing means a type \nof Internet-based computing , \nwhere different services such \nas servers, storage and \napplications are delivered to \nan organization computers and \ndevices through the Internet.\nCompanies can scale computing \nneeds according and allow \nusers to pay only for the \nresources and workloads they \nuse.These services are broadly \ndivided into three categories: \n-Infrastructure-as-a-Service \n(IaaS), \n-Platform-as-a-Service (PaaS) \n-Software-as-a-Service (SaaS).';


var info2 = 'A mobile phone tower consists \nof  antennae and electronic \ncommunications equipment,\nto create a cellular network \nwhich are distributed over land \nareas called cell.Each cell has \nits own set of frequencies \nfrom neighboring cells, to avoid \ninterference and provide \nguaranteed bandwidth within \neach cell.\n\nAdvantages:\n-Helps in communication \n-Provides services for internet \nusage\n-Accessibility \nDisadvantages:\n-Radiation effect';

var info3 = 'In computing, virtualization \nmeans to create a virtual \nversion of a device or resource, \nsuch as a server, storage \ndevice, network or even an \noperating system where it \ndivides the resource into one \nor more execution environ\n-ments.Even something as \nsimple as partitioning a hard \ndrive is considered virtualiza\n-tion because you take \none drive and partition it to \ncreate two separate hard \ndrives. Devices, applications \nand human users are able \nto interact with the virtual \nresource as if it were a real \nsingle logical resource. ';

var info4 = 'A Modem is a device or \nprogram that enables a compu\n-ter to transmit data over, for \nexample, telephone or cable \nlines. Computer information is \nstored digitally, whereas \ninformation transmitted \nover telephone lines is trans\n-mitted in the form of analog \nwaves. A modem converts \nbetween these two forms.\n-it can be external, \nconnected to the computers \nserial port by an RS-232 cable or \ninternal in one of the compu\n-ters expansion slots\n-it uses standard telephone\n RJ-11 connectors to connect to \nthe telephone lines.';

var info5 = 'A Hub provides a common \nconnection point for devices in \na network. Hubs are commonly \nused to connect segments of a \nnetworks. A hub contains \nmultiple ports. When a packet \narrives at one port, it is copied \nto the other ports so that all \nsegments of the network (LAN) \ncan see these packets.The hub \nhas no way of distinguishing \nwhich port a packet/frame \nshould be sent to. Passing it \nalong to every port \nensures that it will reach its \nintended destination. This \nplaces a lot of traffic on the \nnetwork and can lead to poor \nnetwork response times.';

var info6 = 'Firewall is a piece of hardware \nand/or software which \nfunctions in a networked \nenvironment to prevent some \ncommunications forbidden by \nthe security policy, analogous \nto the function of firewalls \nin building construction.All \nmessages entering or leaving \nthe intranet pass through the \nfirewall, which examines each \nmessage and blocks those that \ndo not meet the specified \nsecurity criteria.';
 
 var info7 = 'ROUTER are used to extend \nor segment networks by \nforwarding packets from one \nlogical network to another.\nUsed in large internetworks \nthat use the TCP/IP protocol \nsuite and for connecting TCP/IP \nhosts and local area networks \nto the Internet using \ndedicated leased lines.\n\n-Have better packet-routing \nand filtering capabilities  \n-greater processing power ';
 
var info8 = 'ACCESS POINT allows us to \nbroadcasts and receives \nsignals to and from the \nsurrounding computers and \npass back and forth between \nthe wireless computers and \nthe cabled network.It act as \nwireless hubs to link multiple \nwireless NICs into a single \nsubnet.Consists of least one \nfixed Ethernet port to allow \nthe wireless network to \nbe bridged to a traditional \nwired Ethernet network.\n\n-No physical connetion required\n-Allows to create multiple \nhotspot';



var Key,detail_id,star_no1,objId,draggedSprite;
var infoDisplay = "",sideGuide,rate1,rate2,rate3;
var notice1;





SmartCity.Game2.prototype = {
	
	 init: function(score) {
    Lscore = score || 0;
    this.setScore(score);
	//this.highestScore = this.highestScore || 0;

    //this.highestScore = Math.max(score, this.highestScore);
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
	  
	
	 car5 = this.add.sprite(300, 430,'car3',0);
 	car5.visible = false;
	  //sounds
    this.audio1 = this.game.add.audio('audio1',1,true);
	
	//play background sound
    this.audio1.play();
	
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
	group1.create(360, 410,'house1',3);
	group1.create(270, 360,'house1',0);
	group2.create(180, 160,'house2',0);
	group2.create(120, 190,'house7',0);
	group2.create(60, 220,'house8',0);

	//group2.create(104, 248,'house3',0);
	//group2.create(84, 270,'house3',0);
	group3.create(288, 130,'house4',0); 
	group3.create(260, 146,'house4',0); 
	group3.create(162, 272,'house5',0); 
	group3.create(280, 250,'house3',0);
	group3.create(310, 270,'house3',0);
	group3.create(298, 240,'house3',0);
	group3.create(323, 258,'house3',0);
	group4.create(516,270,'house6',0);
	group4.create(520,163,'house9',0);
	
	
	 this.game.physics.enable(group1, Phaser.Physics.ARCADE);
	 this.game.physics.enable(group2, Phaser.Physics.ARCADE);
	//this.house01.scale.set(2);
	//this.house01.smoothed=false;
	
	//this.transparent = this.add.sprite(348, 508,'transparent',3);
	
	//click test


	this.click1=this.add.sprite(200, 508,'net1_main',0);
	this.click1.inputEnabled = true;
    this.click1.input.enableDrag();
	this.click1.anchor.setTo(0.5, 0.5);
	this.click1.events.onInputOver.add(this.onPointerOver, this);
	this.click1.events.onInputOut.add(this.showEmptyDetail, this);
	
	
	
	this.click2=this.add.sprite(280, 508,'net2_main',0);
	this.click2.inputEnabled = true;
    this.click2.input.enableDrag();
	this.click2.anchor.setTo(0.5, 0.5);
	this.click2.events.onInputOver.add(this.onPointerOver, this);
	this.click2.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click3=this.add.sprite(380, 508,'net3_main',0);
	this.click3.inputEnabled = true;
    this.click3.input.enableDrag();
	this.click3.anchor.setTo(0.5, 0.5);
	this.click3.events.onInputOver.add(this.onPointerOver, this);
	this.click3.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click4=this.add.sprite(480, 516,'net4_main',0);
	this.click4.inputEnabled = true;
    this.click4.input.enableDrag();
	this.click4.anchor.setTo(0.5, 0.5);
	this.click4.events.onInputOver.add(this.onPointerOver, this);
	this.click4.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click5=this.add.sprite(580, 516,'net5_main',0);
	this.click5.inputEnabled = true;
    this.click5.input.enableDrag();
	this.click5.anchor.setTo(0.5, 0.5);
	this.click5.events.onInputOver.add(this.onPointerOver, this);
	this.click5.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click6=this.add.sprite(660, 516,'net6_main',0);
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
	
	
	this.setInfo('net1_main',info1);
	this.setRate1('net1_main',4); // rate1 for security
	this.setRate2('net1_main',3); //rate2 for interoperability
	this.setRate3('net1_main',5); //rate3 for expensive
	
	this.setInfo('net2_main',info2);
	this.setRate1('net2_main',3); 
	this.setRate2('net2_main',3); 
	this.setRate3('net2_main',5);
	
	this.setInfo('net3_main',info3);
	this.setRate1('net3_main',3); 
	this.setRate2('net3_main',3); 
	this.setRate3('net3_main',4);
	
	this.setInfo('net4_main',info4);
	this.setRate1('net4_main',1); 
	this.setRate2('net4_main',2); 
	this.setRate3('net4_main',2);
	
	this.setInfo('net5_main',info5);
	this.setRate1('net5_main',2); 
	this.setRate2('net5_main',2); 
	this.setRate3('net5_main',1);
	
	this.setInfo('net6_main',info6);
	this.setRate1('net6_main',5); 
	this.setRate2('net6_main',3); 
	this.setRate3('net6_main',4);
	
	this.setInfo('net7_main',info7);
	this.setRate1('net7_main',3); 
	this.setRate2('net7_main',2); 
	this.setRate3('net7_main',3);
	
	this.setInfo('net8_main',info8);
	this.setRate1('net8_main',3); 
	this.setRate2('net8_main',3); 
	this.setRate3('net8_main',3);
	
    //player initial score of zero
	  playerScore =  this.game.add.bitmapText(860, 530, 'score_B', 'SCORE :', 12);
      playerScore.text='SCORE : '+ score;	  
	

  
    //notice for interoperability
//	notice1 = this.add.sprite(360, 410,'noticeBoard');
    
		
		
    /*************************Initialise the interoperability sign ****************************/
	
	level = this.game.add.bitmapText(1020, 50, 'shortStack_B', 'LEVEL II', 4);
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
	
	this.detailSign3 = this.add.sprite(370, 230,'detailSign3'); //near pertolpump
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
				   
					
					this.setIsOperable(0);
					interOp_1.destroy();
					//notice.destroy();
					//notice = this.add.sprite(360, 410,'noticeBoard');
					interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
					interOp_1.frame=1;
					 sign_text.text = 'Not InterOperable!!!';
				  
				
				}
				  
				   else if(this.click3.overlap(group3))
				{
					
					
					
					this.setIsOperable(0);
					interOp_1.destroy();
					//notice.destroy();
					//notice = this.add.sprite(360, 410,'noticeBoard');
					interOp_1= this.add.sprite(730, 150,'interoperable2');//show a shadow sprite
					interOp_1.frame=1;
					 sign_text.text = 'Not InterOperable!!!';
				
				
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
				   
					
					this.setIsOperable(1);
					interOp_1.destroy();
				//	notice.destroy();
				//	notice = this.add.sprite(238, 126,'noticeBoard');
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;		
				  
				
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
				
				 else if(this.click7.overlap(group4))
				{
					
					
					this.setIsOperable(1);
					interOp_1.destroy();
				//	notice.destroy();
				//	notice = this.add.sprite(238, 126,'noticeBoard');
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;		
				
				
				}
				
					else if(this.click8.overlap(group1))
				   {  

					
					
					this.setIsOperable(1);
					interOp_1.destroy();
				//	notice.destroy();
				//	notice = this.add.sprite(238, 126,'noticeBoard');
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;		
					 
				   
					
					
					
				}
				
				else if(this.click8.overlap(group2))
				{
				   
					
					this.setIsOperable(1);
					interOp_1.destroy();
				//	notice.destroy();
				//	notice = this.add.sprite(238, 126,'noticeBoard');
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;		
				  
				
				}
				  
				   else if(this.click8.overlap(group3))
				{
					
					
					this.setIsOperable(1);
					interOp_1.destroy();
				//	notice.destroy();
				//	notice = this.add.sprite(238, 126,'noticeBoard');
					sign_text.text = 'InterOperable!!!';
					interOp_1= this.add.sprite(730, 150,'interoperable1');//show a shadow sprite
					interOp_1.frame=1;		
				
				
				}
				
					   else if(this.click8.overlap(group4))
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
	
	this.click7=this.add.sprite(200, 508,'net7_main',0);
	this.click7.inputEnabled = true;
    this.click7.input.enableDrag();
	this.click7.anchor.setTo(0.5, 0.5);
	this.click7.events.onInputOver.add(this.onPointerOver, this);
	this.click7.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click8=this.add.sprite(280, 508,'net8_main',0);
	this.click8.inputEnabled = true;
    this.click8.input.enableDrag();
	this.click8.anchor.setTo(0.5, 0.5);
	this.click8.events.onInputOver.add(this.onPointerOver, this);
	this.click8.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click7.originalPosition = this.click7.position.clone();
    this.click7.events.onDragStop.add(this.onDragStop, this);
	this.click7.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click7, Phaser.Physics.ARCADE);
    this.click7.body.allowRotation = false;
	
	this.click8.originalPosition = this.click8.position.clone();
    this.click8.events.onDragStop.add(this.onDragStop, this);
	this.click8.events.onDragStart.add(this.onDragStart, this);
    this.game.physics.enable(this.click8, Phaser.Physics.ARCADE);
    this.click8.body.allowRotation = false;
	
	}
	else if(currentItem == 1)
		
	{
			
	currentItem = 0;
	isDefined =0;
	
	this.click7.destroy();
	this.click8.destroy();
	
	this.click1=this.add.sprite(200, 508,'net1_main',0);
	this.click1.inputEnabled = true;
    this.click1.input.enableDrag();
	this.click1.anchor.setTo(0.5, 0.5);
	this.click1.events.onInputOver.add(this.onPointerOver, this);
	this.click1.events.onInputOut.add(this.showEmptyDetail, this);
	
	
	
	this.click2=this.add.sprite(280, 508,'net2_main',0);
	this.click2.inputEnabled = true;
    this.click2.input.enableDrag();
	this.click2.anchor.setTo(0.5, 0.5);
	this.click2.events.onInputOver.add(this.onPointerOver, this);
	this.click2.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click3=this.add.sprite(380, 508,'net3_main',0);
	this.click3.inputEnabled = true;
    this.click3.input.enableDrag();
	this.click3.anchor.setTo(0.5, 0.5);
	this.click3.events.onInputOver.add(this.onPointerOver, this);
	this.click3.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click4=this.add.sprite(480, 516,'net4_main',0);
	this.click4.inputEnabled = true;
    this.click4.input.enableDrag();
	this.click4.anchor.setTo(0.5, 0.5);
	this.click4.events.onInputOver.add(this.onPointerOver, this);
	this.click4.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click5=this.add.sprite(580, 516,'net5_main',0);
	this.click5.inputEnabled = true;
    this.click5.input.enableDrag();
	this.click5.anchor.setTo(0.5, 0.5);
	this.click5.events.onInputOver.add(this.onPointerOver, this);
	this.click5.events.onInputOut.add(this.showEmptyDetail, this);
	
	this.click6=this.add.sprite(660, 516,'net6_main',0);
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
	 
	 if(sprite.key == 'net1_main' && used11 < 2)
	 {
		 
		this.dragDrop_anim=this.add.sprite(200, 450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	  var anim = this.dragDrop_anim.animations.add('drag1',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(200, 570,'net1Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	 // var anim = this.deviceName_anim.animations.add('drag1',[0]);
	  //anim.play(3,false);
		 
	 }
	 
	 else if(sprite.key == 'net2_main' && used22 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(280,450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	   var anim = this.dragDrop_anim.animations.add('drag2',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(280, 570,'net2Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	 
	 else if(sprite.key == 'net3_main' && used33 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(380, 450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag3',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(380, 570,'net3Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	 
	  else if(sprite.key == 'net4_main' && used44 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(480,450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag4',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(480, 570,'net4Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	 
	  else if(sprite.key == 'net5_main' && used55 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(580, 450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag5',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(580, 570,'net5Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	  else if(sprite.key == 'net6_main' && used66 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(660, 450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag6',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(660, 570,'net6Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	  else if(sprite.key == 'net7_main' && used77 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(200,450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag7',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(200,570,'net7Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	  else if(sprite.key == 'net8_main' && used88 < 2 )
	 {
		 
		this.dragDrop_anim=this.add.sprite(280,450,'dragToCity');
		this.dragDrop_anim.anchor.setTo(0.5, 0.5);
	   //sprite.input.draggable = false;
	    var anim = this.dragDrop_anim.animations.add('drag8',[0,1,2,3]);
	  anim.play(3,false);
	  
	  this.deviceName_anim=this.add.sprite(280,570,'net8Name');
	  this.deviceName_anim.anchor.setTo(0.5, 0.5);
		 
	 }
	  
	 /************* Display the details and rating for the device ******************/ 
	 
	 sideGuide.destroy();
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
	  
	  
	  sideGuide = this.add.sprite(869, 82, 'guide_SideBar'); //display the guide_sideBar image
	 
	   
	    this.add.sprite(988, 397,'rating',0); // display empty star
	    this.add.sprite(988, 440,'rating',0);
	    this.add.sprite(988, 488,'rating',0);
	
	
},





/*****************show the info board for the corresponding sigh *********************/

showDetailBoard : function (sprite)
 {
	
	console.log(sprite.key);
	
   if(sprite.key == 'detailSign1')
   {
	
	  detailNotice11 = this.add.sprite(355,210,'notice44');
	   
	   
   }
   
   else if(sprite.key == 'detailSign2')
   {
	
	  detailNotice22 = this.add.sprite(155, 20,'notice33');
	   
	   
   }
     else if(sprite.key == 'detailSign3')
   {
	
	  detailNotice33 = this.add.sprite(365, 50,'notice11');
	   
	   
   }
   
    else if(sprite.key == 'detailSign4')
   {
	
	  detailNotice44 = this.add.sprite(540,70,'notice55');
	   
	   
   }
   
    else if(sprite.key == 'detailSign5')
   {
	
	  detailNotice55 = this.add.sprite(400,56,'notice66');
	   
	   
   }
   
   

},


removeDetailBoard : function(sprite, pointer) //when  device is clicked

 {
	 
	  if(sprite.key == 'detailSign1')
   {
	
	  detailNotice11.destroy();
	   
	   
   }
   
    else if(sprite.key == 'detailSign2')
   {
	
	  detailNotice22.destroy();
	   
	   
   }
   else if(sprite.key == 'detailSign3')
   {
	
	  detailNotice33.destroy();
	   
	   
   }
   else if(sprite.key == 'detailSign4')
   {
	
	  detailNotice44.destroy();
	   
	   
   }
   
   else if(sprite.key == 'detailSign5')
   {
	
	  detailNotice55.destroy();
	   
	   
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
	
	if(used11 == 1)
	{
		
		 this.click1.input.draggable = false;
		
	}
	if(used22 ==1)
	{
		
		 this.click2.input.draggable = false;
		
	}
	if(used33 == 1)
	{
		
		 this.click3.input.draggable = false;
		
	}
	if(used44 == 1)
	{
		
		 this.click4.input.draggable = false;
		
	}
	if(used55 == 1)
	{
		
		 this.click5.input.draggable = false;
		
	}
	if(used66 == 1)
	{
		
		 this.click6.input.draggable = false;
		
	}
	if(used77 == 1)
	{
		
		 this.click7.input.draggable = false;
		
	}
	if(used88 == 1)
	{
		
		 this.click8.input.draggable = false;
		
	}
	 
  
	

},


onDragStop: function (sprite, pointer) 

{
	
	 //sideGuide.destroy();
	 //sideGuide = this.add.sprite(869, 82, 'guide_SideBar'); //display the guide_sideBar image
	 
console.log(sprite.key);
 
 if( this.game.input.y <= 380)
	
{
      
     enableDragSign = 0;
  
  if(sprite.key == 'net1_main' && this.getIsOperable() == 1)
   {
	   //sprite.input.draggable = false;
	   this.click1_anim=this.add.sprite(this.game.input.x, this.game.input.y,'NET1',0);
	   var anim = this.click1_anim.animations.add('windmill',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click1.position.copyFrom(this.click1.originalPosition);
	   this.click1.inputEnabled = true;
       this.click1.input.enableDrag();
	   this.click1.anchor.setTo(0.5, 0.5);
	   used11 = 1; 
	   
	   
   }
   
    else if(sprite.key == 'net2_main' && this.getIsOperable() == 1)
   {
	   
	   this.click2_anim=this.add.sprite(this.game.input.x, this.game.input.y,'NET2',0);
	  // sprite.input.draggable = false;
	   var anim = this.click2_anim.animations.add('wifi',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	    this.click2.position.copyFrom(this.click2.originalPosition);
	   this.click2.inputEnabled = true;
       this.click2.input.enableDrag();
	   this.click2.anchor.setTo(0.5, 0.5);
	   
	   used22 = 1; 
   }
   
    else if(sprite.key == 'net3_main' && this.getIsOperable() == 1)
   {
	   
	   this.click3_anim=this.add.sprite(this.game.input.x, this.game.input.y,'NET3',0);
	   sprite.input.draggable = false;
	   var anim = this.click3_anim.animations.add('netconnect',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	    this.click3.position.copyFrom(this.click3.originalPosition);
	   this.click3.inputEnabled = true;
       this.click3.input.enableDrag();
	   this.click3.anchor.setTo(0.5, 0.5);
	   
	   used33 = 1; 
   }
   
    else if(sprite.key == 'net4_main' && this.getIsOperable() == 1)
   {
	  // sprite.input.draggable = false;
	   
	   this.click4_anim=this.add.sprite(this.game.input.x, this.game.input.y,'NET4',0);
	   var anim = this.click4_anim.animations.add('router',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click4.position.copyFrom(this.click4.originalPosition);
	   this.click4.inputEnabled = true;
       this.click4.input.enableDrag();
	   this.click4.anchor.setTo(0.5, 0.5);
	   
	   used44 = 1; 
   }
   
   else if(sprite.key == 'net5_main' && this.getIsOperable() == 1)
   {
	  // sprite.input.draggable = false;
	   
	   this.click5_anim=this.add.sprite(this.game.input.x, this.game.input.y,'NET5',0);
	   var anim = this.click5_anim.animations.add('router',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click5.position.copyFrom(this.click5.originalPosition);
	   this.click5.inputEnabled = true;
       this.click5.input.enableDrag();
	   this.click5.anchor.setTo(0.5, 0.5);
	   
	   used55 = 1; 
   }
   
   else if(sprite.key == 'net6_main' && this.getIsOperable() == 1)
   {
	  // sprite.input.draggable = false;
	   
	   this.click6_anim=this.add.sprite(this.game.input.x, this.game.input.y,'NET6',0);
	   var anim = this.click6_anim.animations.add('router',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click6.position.copyFrom(this.click6.originalPosition);
	   this.click6.inputEnabled = true;
       this.click6.input.enableDrag();
	   this.click6.anchor.setTo(0.5, 0.5);
	   
	   used66 = 1; 
   }
   
   else if(sprite.key == 'net7_main' && this.getIsOperable() == 1)
   {
	  // sprite.input.draggable = false;
	   
	   this.click7_anim=this.add.sprite(this.game.input.x, this.game.input.y,'NET7',0);
	   var anim = this.click7_anim.animations.add('router',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click7.position.copyFrom(this.click7.originalPosition);
	   this.click7.inputEnabled = true;
       this.click7.input.enableDrag();
	   this.click7.anchor.setTo(0.5, 0.5);
	   
	   used77 = 1; 
   }
   
   else if(sprite.key == 'net8_main' && this.getIsOperable() == 1)
   {
	  // sprite.input.draggable = false;
	   
	   this.click8_anim=this.add.sprite(this.game.input.x, this.game.input.y,'NET8',0);
	   var anim = this.click8_anim.animations.add('router',[0,1,2,3]);
	   anim.play(3,true);
	   this.calcScore(sprite.key);
	   this.click8.position.copyFrom(this.click8.originalPosition);
	   this.click8.inputEnabled = true;
       this.click8.input.enableDrag();
	   this.click8.anchor.setTo(0.5, 0.5);
	   
	   used88 = 1; 
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
    
	
   
     
	 /*********************** Check the score **************************/
	 
    if(score>50 && check11 == 0)
   {
		   
		this.showAnim1();
		check11=1;
	}
	
	else if(score>52 && check22 == 0)
    {
		   
		this.showAnim2();
		check22=1;
	}
	else if(score>55 && check33 == 0)
		
	{
		
		this.showAnim3();
		this.showAnim7();
		check33=1;
	}
	else if(score>60 && check44 ==0)
		
	{
		
		this.showAnim4();
		this.showAnim6();
		
		check44=1;
	}
	
	else if(score> 65 && check55 ==0)
		
	{
		
		this.showAnim5();
		check55=1;
	}
	
	else if(score> 75 && check66 ==0)
		
	{
		
		check66=1;
	}
	else if(score> 80 && check77 ==0)
		
	{
		
		
		check77=1;
	}
	
	
	if(score > 90)
				   
	{
	 
	 audio1.stop();
	 audio2.stop();
	 audio3.stop();
	 
	
	 this.game.state.start('NextLevel2',true,false,score);  
					   
	 }
	  
   

},

 calcScore: function(Key) {
	 
	 
	
	if(Key == 'net1_main')
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
	
	else if(Key == 'net2_main')
	{
	  
	 
 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	else if(Key == 'net3_main')
	{
	 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	else if(Key == 'net4_main')
	{
	 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	else if(Key == 'net5_main')
	{
	 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	else if(Key == 'net6_main')
	{
	 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	else if(Key == 'net7_main')
	{
	 
	  
	 var y1 = this.getRate1(Key);
	 var y2 = this.getRate2(Key);
	 var y3 = this.getRate3(Key);
	 
	 score = (y1)+(y2)+(y3)+score;	 
	 this.setScore(score);
	 //playerScore.text='SCORE : '+score;
	 //console.log(y);
	}
	
	else if(Key == 'net8_main')
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
	score =score;
	
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