var SmartCity = SmartCity || {};

//loading the game assets
SmartCity.Preload = function(){};

SmartCity.Preload.prototype = {
  preload: function() {
  	//show loading screen
  	//this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
	this.splash = this.add.sprite(600, 200, 'logo');
    this.splash.anchor.setTo(.5);

    //this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar = this.add.sprite(430, 430, 'preloadbar');
   
    //this.preloadBar.anchor.setTo(5,40);
    this.load.setPreloadSprite(this.preloadBar);

  	//load game assets
	this.game.load.bitmapFont('score', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
	this.game.load.bitmapFont('score_B', 'assets/fonts/bitmapFonts/desyrel_B.png', 'assets/fonts/bitmapFonts/desyrel.xml')
	this.game.load.bitmapFont('shortStack', 'assets/fonts/bitmapFonts/shortStack_w.png', 'assets/fonts/bitmapFonts/shortStack.fnt');
	this.game.load.bitmapFont('shortStack_G', 'assets/fonts/bitmapFonts/shortStack.png', 'assets/fonts/bitmapFonts/shortStack.fnt');
	this.game.load.bitmapFont('shortStack_B', 'assets/fonts/bitmapFonts/shortStack_B.png', 'assets/fonts/bitmapFonts/shortStack.fnt');
	
	this.load.spritesheet('interoperable1', 'assets/images/interopSign1.png', 40, 43);
	this.load.spritesheet('interoperable2', 'assets/images/interopSign2.png', 40, 42);
	
	
	
	this.load.spritesheet('button1', 'assets/images/button1.png', 120, 44);
	this.load.spritesheet('button2', 'assets/images/button2.png', 120, 44);
	this.load.spritesheet('button3', 'assets/images/button3.png', 120, 44);
	this.load.spritesheet('button4', 'assets/images/button4.png', 120, 44);
	this.load.spritesheet('button5', 'assets/images/button5.png', 120, 44);
	this.load.spritesheet('button6', 'assets/images/button6.png', 120, 44);
	this.load.spritesheet('button', 'assets/images/button.png', 120, 44);
	this.load.spritesheet('sliderNav1', 'assets/images/sliderNav1.png', 74, 84);
	this.load.spritesheet('sliderNav2', 'assets/images/sliderNav2.png', 76, 86);
	
	
	this.load.spritesheet('checkbox1', 'assets/images/checkbox.png', 25, 25);
	this.load.spritesheet('checkbox2', 'assets/images/checkbox.png', 25, 25);
	this.load.spritesheet('checkbox3', 'assets/images/checkbox.png', 25, 25);
	this.load.spritesheet('checkbox4', 'assets/images/checkbox.png', 25, 25);
	this.load.spritesheet('arrow', 'assets/images/arrow.png', 80, 80);
	
	this.load.spritesheet('arrow_up', 'assets/images/arrow_up.png', 80, 107);
	this.load.spritesheet('arrow_down', 'assets/images/arrow_down.png', 80, 107);
	this.load.spritesheet('arrow_left', 'assets/images/arrow_left.png', 80, 107);
	this.load.spritesheet('arrow_right', 'assets/images/arrow_right.png', 80, 107);
	
	
	this.load.spritesheet('house1', 'assets/images/house1.png', 100, 50);
	this.load.spritesheet('house2', 'assets/images/house2.png',105,75);
	this.load.spritesheet('house3', 'assets/images/house3.png', 35, 25);
	this.load.spritesheet('house4', 'assets/images/house4.png',  90, 60);
	this.load.spritesheet('house5', 'assets/images/house5.png',  90, 90);
	this.load.spritesheet('house6', 'assets/images/house6.png',  105, 90);
	this.load.spritesheet('house7', 'assets/images/house7.png',105,75);
	this.load.spritesheet('house8', 'assets/images/house8.png',105,75);
	this.load.spritesheet('house9', 'assets/images/house9.png',100,120);
	
	
	
	this.load.spritesheet('transparent', 'assets/images/transparent.png',  120, 90);
	this.load.spritesheet('rating', 'assets/images/rating.png', 109, 20);
	
	this.load.spritesheet('dragToCity', 'assets/images/dragToCity.png',80,60);
	

	
	this.load.image('picture6', 'assets/images/intro1.png');
	this.load.image('picture10', 'assets/images/t1.png');
	this.load.image('picture14', 'assets/images/guide1_d.png');
	this.load.image('picture18', 'assets/images/guide2_d.png');
	this.load.image('picture22', 'assets/images/c1.png');
	this.load.image('picture26', 'assets/images/d1.png');
	this.load.image('picture30', 'assets/images/f1.png');
	this.load.image('picture34', 'assets/images/g1.png');
	this.load.image('Qboard', 'assets/images/qboard.png');
	//this.load.image('Qboard_back', 'assets/images/qboard_back.png');
	this.load.image('guide_SideBar', 'assets/images/guide_sideBar.png');
	
	//this.load.image('sliderNav1', 'assets/images/sliderNav1.png');
	//this.load.image('sliderNav2', 'assets/images/sliderNav2.png');
	
	
	this.load.image('noticeBoard', 'assets/images/notice1.png');
	this.load.image('notice1', 'assets/images/notice1.png');
	this.load.image('notice2', 'assets/images/notice2.png');
	this.load.image('notice3', 'assets/images/notice3.png');
	this.load.image('notice4', 'assets/images/notice4.png');
	this.load.image('notice5', 'assets/images/notice5.png');
	this.load.image('notice6', 'assets/images/notice6.png');
	
	this.load.image('notice11', 'assets/images/notice1_1.png');
	this.load.image('notice22', 'assets/images/notice2.png');
	this.load.image('notice33', 'assets/images/notice3_1.png');
	this.load.image('notice44', 'assets/images/notice4_1.png');
	this.load.image('notice55', 'assets/images/notice5_1.png');
	this.load.image('notice66', 'assets/images/notice6_1.png');
	
	
	this.load.spritesheet('iot1Name', 'assets/images/iot1_name.png',80,51);
	this.load.spritesheet('iot2Name', 'assets/images/iot2_name.png',80,51);
	this.load.spritesheet('iot3Name', 'assets/images/iot3_name.png',80,51);
	this.load.spritesheet('iot4Name', 'assets/images/iot4_name.png',80,51);
	this.load.spritesheet('iot5Name', 'assets/images/iot5_name.png',80,51);
	this.load.spritesheet('iot6Name', 'assets/images/iot6_name.png',80,51);
	this.load.spritesheet('iot7Name', 'assets/images/iot7_name.png',80,51);
	
	this.load.image('IoT1_main', 'assets/images/iot1_slider.png');
	this.load.image('IoT2_main', 'assets/images/iot2_slider.png');
	this.load.image('IoT3_main', 'assets/images/iot3_slider.png');
	this.load.image('IoT4_main', 'assets/images/iot4_slider.png');
	this.load.image('IoT5_main', 'assets/images/iot5_slider.png');
	this.load.image('IoT6_main', 'assets/images/iot6_slider.png');
	this.load.image('IoT7_main', 'assets/images/iot7_slider.png');
	
	this.load.spritesheet('IoT1', 'assets/images/iot1.png',40,60);
	this.load.spritesheet('IoT2', 'assets/images/iot2.png',70,41);
	this.load.spritesheet('IoT3', 'assets/images/iot3.png',50,46);
	this.load.spritesheet('IoT4', 'assets/images/iot4.png',60,52);
	this.load.spritesheet('IoT5', 'assets/images/iot5.png',50,32);
	this.load.spritesheet('IoT6', 'assets/images/iot6.png',50,75);
	this.load.spritesheet('IoT7', 'assets/images/iot7.png',50,50);
	
	
	
	
	this.load.spritesheet('net1Name', 'assets/images/net1_name.png',80,51);
	this.load.spritesheet('net2Name', 'assets/images/net2_name.png',80,51);
	this.load.spritesheet('net3Name', 'assets/images/net3_name.png',80,51);
	this.load.spritesheet('net4Name', 'assets/images/net4_name.png',80,51);
	this.load.spritesheet('net5Name', 'assets/images/net5_name.png',80,51);
	this.load.spritesheet('net6Name', 'assets/images/net6_name.png',80,51);
	this.load.spritesheet('net7Name', 'assets/images/net7_name.png',80,51);
	this.load.spritesheet('net8Name', 'assets/images/net8_name.png',80,51);
	
	this.load.image('net1_main', 'assets/images/net1_slider.png');
	this.load.image('net2_main', 'assets/images/net2_slider.png');
	this.load.image('net3_main', 'assets/images/net3_slider.png');
	this.load.image('net4_main', 'assets/images/net4_slider.png');
	this.load.image('net5_main', 'assets/images/net5_slider.png');
	this.load.image('net6_main', 'assets/images/net6_slider.png');
	this.load.image('net7_main', 'assets/images/net7_slider.png');
	this.load.image('net8_main', 'assets/images/net8_slider.png');
	
	this.load.spritesheet('NET1', 'assets/images/net1.png',80,56);
	this.load.spritesheet('NET2', 'assets/images/net2.png',60,105);
	this.load.spritesheet('NET3', 'assets/images/net3.png',50,50);
	this.load.spritesheet('NET4', 'assets/images/net4.png',80,45);
	this.load.spritesheet('NET5', 'assets/images/net5.png',80,45);
	this.load.spritesheet('NET6', 'assets/images/net6.png',60,60);
	this.load.spritesheet('NET7', 'assets/images/net7.png',75,55);
	this.load.spritesheet('NET8', 'assets/images/net8.png',60,42);
	
	
	
	this.load.image('ground', 'assets/images/background1.jpg');
	this.load.image('slider', 'assets/images/slider.png');
	this.load.image('panel1', 'assets/images/signBack.png');
	
	
  	this.load.image('truck1', 'assets/images/truck1.png');
	this.load.image('truck2', 'assets/images/truck2.png');
	this.load.image('truck3', 'assets/images/truck3.png');
	this.load.image('car1', 'assets/images/car1.png');
	this.load.image('car2', 'assets/images/car2.png');
	this.load.image('car3', 'assets/images/car3.png');
	
	this.load.audio('audio1', 'assets/audio/background.mp3');
	this.load.audio('audio2', 'assets/audio/car.mp3');
	this.load.audio('audio3', 'assets/audio/truck.mp3');
	
	this.load.image('detailSign1', 'assets/images/detailSign.png');
	this.load.image('detailSign2', 'assets/images/detailSign.png');
	this.load.image('detailSign3', 'assets/images/detailSign.png');
	this.load.image('detailSign4', 'assets/images/detailSign.png');
	this.load.image('detailSign5', 'assets/images/detailSign.png');

	this.load.image('feedback1', 'assets/images/feedback1.png');
	this.load.image('feedback2', 'assets/images/feedback2.png');
	this.load.image('feedback3', 'assets/images/feedback3.png');
  
  },
  create: function() {
	  
	   //start game text
    var text = "Please click to Begin!!!";
    var style = { font: "30px Arial", fill: "#fff", align: "center" };
    var t = this.game.add.text(600, 500, text, style);
    t.anchor.set(0.5);
  	
  },
  
    update: function() {
    if(this.game.input.activePointer.justPressed()) {
      	this.game.state.start('MainMenu');
    }
  }
  
};