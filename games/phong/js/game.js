var game;
var menuGroup;
window.onload = function() {
  game = new Phaser.Game(640, 960);
  game.state.add("Boot", boot);
  game.state.add("Preload", preload);
  game.state.add("Splash", splash);
  game.state.add("LevelSelect", levelSelect);
  game.state.add("PlayLevel", playLevel);
  game.state.start("Boot");

  game.global = {
    thumbRows: 5,
    thumbCols: 4,
    thumbWidth: 64,
    thumbHeight: 64,
    thumbSpacing: 8,
    // array with finished levels and stars collected.
    // 0 = playable yet unfinished level
    // 1, 2, 3 = level finished with 1, 2, 3 stars
    // 4 = locked
    starsArray: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    // level currently playing
    level: 0
  }
}
////////////////////////////////////////////////////////////////////////////////
var boot = function(game) {};
boot.prototype = {
  preload: function() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = "#020028";
  },
  create: function() {
    game.state.start("Preload");
  }
}
////////////////////////////////////////////////////////////////////////////////
var preload = function(game) {};
preload.prototype = {
  preload: function() {
    game.load.image("gametitle", "assets/sprites/gametitle.png");
    game.load.image("gridedition", "assets/sprites/gridedition.png");
    game.load.image("playbutton", "assets/sprites/playbutton.png");
    game.load.image("menubutton", "assets/sprites/menubutton.png");
    game.load.image("resetgame", "assets/sprites/resetgame.png");
    game.load.image("thankyou", "assets/sprites/thankyou.png");
  },
  create: function() {
    game.state.start("Splash");
  }
}
////////////////////////////////////////////////////////////////////////////////
var splash = function(game) {}
splash.prototype = {
  create: function() {
    var title = game.add.sprite(game.width / 2, 60, "gametitle");
    title.anchor.set(0.5);
    var grid = game.add.sprite(game.width / 2, 130, "gridedition");
    grid.anchor.set(0.5);
    var playButton = game.add.button(game.width / 2, game.height / 2 + 100, "playbutton", function() {
      game.state.start("LevelSelect");
    });
    playButton.anchor.set(0.5);
    menuGroup = game.add.group();
    var menuButton = game.add.button(game.width / 2, game.height - 30, "menubutton", toggleMenu);
    menuButton.anchor.set(0.5);
    menuGroup.add(menuButton);
    var resetGame = game.add.button(game.width / 2, game.height + 50, "resetgame", function() {});
    resetGame.anchor.set(0.5);
    menuGroup.add(resetGame);
    var thankYou = game.add.button(game.width / 2, game.height + 130, "thankyou", function() {});
    thankYou.anchor.set(0.5);
    menuGroup.add(thankYou);
  }
}
function toggleMenu() {
  if (menuGroup.y == 0) {
    var menuTween = game.add.tween(menuGroup).to({
      y: -180
    }, 500, Phaser.Easing.Bounce.Out, true);
  }
  if (menuGroup.y == -180) {
    var menuTween = game.add.tween(menuGroup).to({
      y: 0
    }, 500, Phaser.Easing.Bounce.Out, true);
  }
}
////////////////////////////////////////////////////////////////////////////////
var levelSelect = function(game) {
  var pages;
  var levelThumbsGroup;
  var currentPage;
  var leftArrow;
  var rightArrow;  
  startGame = false;
};
levelSelect.prototype = {
  preload: function() {
    game.load.spritesheet("levels", "assets/sprites/levelselect/levels.png", game.global.thumbWidth, game.global.thumbHeight);
    game.load.spritesheet("level_arrows", "assets/sprites/levelselect/level_arrows.png", 48, 48);
    game.load.spritesheet("game_content", "assets/sprites/levelselect/game.png", 200, 80);
    game.load.spritesheet("back_splash", "assets/sprites/levelselect/btnExit.png", 170, 76);
  },
  create: function() {
    if (!startGame) {
      startGame = true
      //alert("Start the game!!");
    }
    backSplash = game.add.button(game.width / 2, 520, "back_splash",  function() {}, this, 1, 0, 1);
    backSplash.anchor.setTo(0.5);

    // how many pages are needed to show all levels?
    // CAUTION!! EACH PAGE SHOULD HAVE THE SAME AMOUNT OF LEVELS, THAT IS
    // THE NUMBER OF LEVELS *MUST* BE DIVISIBLE BY THUMBCOLS*THUMBROWS
    pages = game.global.starsArray.length / (game.global.thumbRows * game.global.thumbCols);
    // current page according to last played level, if any
    currentPage = Math.floor(game.global.level / (game.global.thumbRows * game.global.thumbCols));
    if (currentPage > pages - 1) {
      currentPage = pages - 1;
    }
    // left arrow button, to turn one page left
    leftArrow = game.add.button(game.width / 2 - 120, 420, "level_arrows", this.arrowClicked, this);
    leftArrow.anchor.setTo(0.5);
    leftArrow.frame = 0;
    // can we turn one page left?
    if (currentPage == 0) {
      leftArrow.alpha = 0.3;
    }
    // right arrow button, to turn one page right
    rightArrow = game.add.button(game.width / 2 + 120, 420, "level_arrows", this.arrowClicked, this);
    rightArrow.anchor.setTo(0.5);
    rightArrow.frame = 1;
    // can we turn one page right?
    if (currentPage == pages - 1) {
      rightArrow.alpha = 0.3;
    }
    // creation of the thumbails group
    levelThumbsGroup = game.add.group();
    // determining level thumbnails width and height for each page
    var levelLength = game.global.thumbWidth * game.global.thumbCols + game.global.thumbSpacing * (game.global.thumbCols - 1);
    var levelHeight = game.global.thumbWidth * game.global.thumbRows + game.global.thumbSpacing * (game.global.thumbRows - 1);
    // looping through each page
    for (var l = 0; l < pages; l++) {
      // horizontal offset to have level thumbnails horizontally centered in the page
      var offsetX = (game.width - levelLength) / 2 + game.width * l;
      // I am not interested in having level thumbnails vertically centered in the page, but
      // if you are, simple replace my "20" with
      // (game.height-levelHeight)/2
      var offsetY = 20;
      // looping through each level thumbnails
      for (var i = 0; i < game.global.thumbRows; i++) {
        for (var j = 0; j < game.global.thumbCols; j++) {
          // which level does the thumbnail refer?
          var levelNumber = i * game.global.thumbCols + j + l * (game.global.thumbRows * game.global.thumbCols);
          // adding the thumbnail, as a button which will call thumbClicked function if clicked   		
          var levelThumb = game.add.button(offsetX + j * (game.global.thumbWidth + game.global.thumbSpacing), offsetY + i * (game.global.thumbHeight + game.global.thumbSpacing), "levels", this.thumbClicked, this);
          // shwoing proper frame
          levelThumb.frame = game.global.starsArray[levelNumber];
          // custom attribute 
          levelThumb.levelNumber = levelNumber + 1;
          // adding the level thumb to the group
          levelThumbsGroup.add(levelThumb);
          // if the level is playable, also write level number
          if (game.global.starsArray[levelNumber] < 4) {
            var style = {
              font: "18px Arial",
              fill: "#ffffff"
            };
            var levelText = game.add.text(levelThumb.x + 5, levelThumb.y + 5, levelNumber + 1, style);
            levelText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 1);
            levelThumbsGroup.add(levelText);
          }
        }
      }
    }
    // scrolling thumbnails group according to level position
    levelThumbsGroup.x = currentPage * game.width * -1
  },
  arrowClicked: function(button) {
    // touching right arrow and still not reached last page
    if (button.frame == 1 && currentPage < pages - 1) {
      leftArrow.alpha = 1;
      currentPage++;
      // fade out the button if we reached last page
      if (currentPage == pages - 1) {
        button.alpha = 0.3;
      }
      // scrolling level pages
      var buttonsTween = game.add.tween(levelThumbsGroup);
      buttonsTween.to({
        x: currentPage * game.width * -1
      }, 500, Phaser.Easing.Cubic.None);
      buttonsTween.start();
    }
    // touching left arrow and still not reached first page
    if (button.frame == 0 && currentPage > 0) {
      rightArrow.alpha = 1;
      currentPage--;
      // fade out the button if we reached first page
      if (currentPage == 0) {
        button.alpha = 0.3;
      }
      // scrolling level pages
      var buttonsTween = game.add.tween(levelThumbsGroup);
      buttonsTween.to({
        x: currentPage * game.width * -1
      }, 400, Phaser.Easing.Cubic.None);
      buttonsTween.start();
    }
  },
  thumbClicked: function(button) {
    // the level is playable, then play the level!!
    if (button.frame < 4) {
      game.global.level = button.levelNumber;
      game.state.start("PlayLevel");
    }
    // else, let's shake the locked levels
    else {
      var buttonTween = game.add.tween(button)
      buttonTween.to({
        alpha: 0.5
      }, 20, Phaser.Easing.Cubic.None);
      buttonTween.to({
        alpha: 1
      }, 20, Phaser.Easing.Cubic.None);
      buttonTween.to({
        alpha: 0.5
      }, 20, Phaser.Easing.Cubic.None);
      buttonTween.to({
        alpha: 1
      }, 20, Phaser.Easing.Cubic.None);
      buttonTween.start();
    }
  }
}
////////////////////////////////////////////////////////////////////////////////
var playLevel = {
  create: function() {
    // showing level title
    var style = {
      font: "32px Arial",
      fill: "#ffffff"
    };
    var levelTitle = game.add.text(0, 0, "PLAYING LEVEL " + game.global.level, style);
    levelTitle.align = "center";
    levelTitle.x = (game.width - levelTitle.width) / 2;
    // showing game thumbnails
    for (var i = 0; i <= 3; i++) {
      var gameThumb = game.add.button(game.width / 2, 90 * (i + 1), "game_content", this.levelFinished, this);
      gameThumb.anchor.setTo(0.5);
      gameThumb.frame = i;
    }
  },
  levelFinished: function(button) {
    // did we improved our stars in current level?
    if (game.global.starsArray[game.global.level - 1] < button.frame) {
      game.global.starsArray[game.global.level - 1] = button.frame;
    }
    // if we completed a level and next level is locked - and exists - then unlock it
    if (button.frame > 0 && game.global.starsArray[game.global.level] == 4 && game.global.level < game.global.starsArray.length) {
      game.global.starsArray[game.global.level] = 0;
    }
    // back to level selection
    game.state.start("LevelSelect");
  }
}