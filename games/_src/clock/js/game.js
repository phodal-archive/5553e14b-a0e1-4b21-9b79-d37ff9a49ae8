var game;
var menuGroup;
window.onload = function () {
    game = new Phaser.Game(640, 960);
    game.state.add("Boot", boot);
    game.state.add("Preload", preload);
    game.state.add("Home", home);
    game.state.add("LevelSelect", levelSelect);
    game.state.add("LevelPlay", levelPlay);
    game.state.start("Boot");

    game.global = {
        // array with finished levels and stars collected.
        // 0 = playable yet unfinished level
        // 1, 2, 3 = level finished with 1, 2, 3 stars
        // 4 = locked
        // 60 levels
        starsArray: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        // level currently playing
        level: 0
    }
}
////////////////////////////////////////////////////////////////////////////////
var boot = function (game) { };
boot.prototype = {
    preload: function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setScreenSize = true;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = "#fff";
    },
    create: function () {
        game.state.start("Preload");
    }
}
////////////////////////////////////////////////////////////////////////////////
var preload = function (game) { };
preload.prototype = {
    preload: function () {
        game.load.image("element_rays", "assets/PNG24@1x/element_rays.png");
        game.load.image("background_clouds", "assets/PNG24@1x/background_clouds.png");
        game.load.image("background_scene1", "assets/PNG24@1x/background_scene1.png");
        game.load.image("element_board_title", "assets/PNG24@1x/element_board_title.png");
        game.load.image("element_ribbon", "assets/PNG24@1x/element_ribbon.png");
        game.load.image("window_panel_main", "assets/PNG24@1x/window_panel_main.png");
        game.load.image("window_title_1", "assets/PNG24@1x/window_title_1.png");
        game.load.image("btn_text_brown", "assets/PNG24@1x/btn_text_brown.png");
        game.load.image("btn_medium_arrow_left_green", "assets/PNG24@1x/btn_medium_arrow_left_green.png");
        game.load.image("btn_medium_arrow_right_green", "assets/PNG24@1x/btn_medium_arrow_right_green.png");
        game.load.image("element_button_level", "assets/PNG24@1x/element_button_level.png");
        game.load.image("element_button_level_locked", "assets/PNG24@1x/element_button_level_locked.png");
    },
    create: function () {
        game.state.start("Home");
    }
}
////////////////////////////////////////////////////////////////////////////////
var home = function (game) { }
home.prototype = {
    create: function () {
        backgroundgradient(game);
        backgroundimage(game);
        mainmenu(game);
    }
}
function backgroundgradient(game) {
    var bmp = game.add.bitmapData(game.width, game.height);
    var grd = bmp.context.createLinearGradient(0, 0, 0, game.height);
    grd.addColorStop(0, "#EF5091");
    grd.addColorStop(1, "white");
    bmp.context.fillStyle = grd;
    bmp.context.fillRect(0, 0, game.width, game.height);
    var lol = game.add.sprite(0, 0, bmp);
    lol.alpha = 0;
    game.add.tween(lol).to({ alpha: 1 }, 2000).start();
}
function backgroundimage(game) {
    var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
    game.add.sprite(0, h - 191 - 100, 'background_clouds');
    game.add.sprite(0, h - 191, 'background_scene1');
    game.add.sprite((w - 425) / 2, -100, 'element_rays');
    game.add.sprite((w - 350) / 2, 130, 'element_ribbon');
    game.add.sprite((w - 204) / 2, 0, 'element_board_title');
    game.add.text((w - 204) / 2 + 50, 95, 'CLOCK', {font: "32px Arial", fill: "#ffffff"});
}
function mainmenu(game) {
    var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
    var window_panel_main = game.add.sprite((w - 200) / 2, 500, 'window_panel_main');
    var window_title_1 = game.add.sprite((w - 138) / 2, 490, 'window_title_1');
    var text0 = game.add.text(40, 5, 'MENU', {font: "20px Arial", fill: "#ffffff"});
    window_title_1.addChild(text0);
    var playButton = game.add.button((w - 150) / 2, h2 + 50, "btn_text_brown", function () {
        game.state.start("LevelSelect");
    });
    var text1 = game.add.text(50, 10, "Play", {font: "22px Arial", fill: "#ffffff"});
    playButton.addChild(text1);
    var highscoreButton = game.add.button((w - 150) / 2, h2 + 100, "btn_text_brown", function () {
        alert("highscore");
    });               
    var text2 = game.add.text(30, 10, "Highscore", {font: "22px Arial", fill: "#ffffff"});
    highscoreButton.addChild(text2);
    var settingButton = game.add.button((w - 150) / 2, h2 + 150, "btn_text_brown", function () {
        alert("setting here");
    });               
    var text3 = game.add.text(40, 10, "Setting", {font: "22px Arial", fill: "#ffffff"});
    settingButton.addChild(text3);
}
////////////////////////////////////////////////////////////////////////////////
var levelSelect = function (game) {
    this.starBoard = {
        thumbRows: 5,
        thumbCols: 4,
        thumbWidth: 64,
        thumbHeight: 64,
        thumbSpacing: 8
    }
    var pages;
    var levelThumbsGroup;
    var currentPage;
    var leftArrow;
    var rightArrow;
};
levelSelect.prototype = {
    create: function () {
        backgroundgradient(game);
        backgroundimage(game);

        var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
        var backHomeButton = game.add.button((w - 138) / 2, 690, 'window_title_1', function () {
            game.state.start("Home");
        });
        var text0 = game.add.text(40, 5, 'HOME', { font: "20px Arial", fill: "#ffffff" });
        backHomeButton.addChild(text0);

        pages = game.global.starsArray.length / (this.starBoard.thumbRows * this.starBoard.thumbCols);
        currentPage = Math.floor(game.global.level / (this.starBoard.thumbRows * this.starBoard.thumbCols));
        if (currentPage > pages - 1) {
            currentPage = pages - 1;
        }
        leftArrow = game.add.button(game.width / 2 - 120, 620, "btn_medium_arrow_left_green", this.arrowClicked, this);
        if (currentPage == 0) {
            leftArrow.alpha = 0.3;
        }
        rightArrow = game.add.button(game.width / 2 + 120, 620, "btn_medium_arrow_right_green", this.arrowClicked, this);
        if (currentPage == pages - 1) {
            rightArrow.alpha = 0.3;
        }

        levelThumbsGroup = game.add.group();
        var levelLength = this.starBoard.thumbWidth * this.starBoard.thumbCols + this.starBoard.thumbSpacing * (this.starBoard.thumbCols - 1);
        var levelHeight = this.starBoard.thumbWidth * this.starBoard.thumbRows + this.starBoard.thumbSpacing * (this.starBoard.thumbRows - 1);
        for (var l = 0; l < pages; l++) {
            var offsetX = (game.width - levelLength) / 2 + game.width * l;
            var offsetY = 250;
            for (var i = 0; i < this.starBoard.thumbRows; i++) {
                for (var j = 0; j < this.starBoard.thumbCols; j++) {
                    var levelNumber = i * this.starBoard.thumbCols + j + l * (this.starBoard.thumbRows * this.starBoard.thumbCols);
                    var levelThumb = game.add.button(offsetX + j * (this.starBoard.thumbWidth + this.starBoard.thumbSpacing), offsetY + i * (this.starBoard.thumbHeight + this.starBoard.thumbSpacing), "element_button_level_locked", this.thumbClicked, this);
                    levelThumb.frame = game.global.starsArray[levelNumber];
                    levelThumb.levelNumber = levelNumber + 1;
                    levelThumbsGroup.add(levelThumb);
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
    arrowClicked: function (button) {
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
    thumbClicked: function (button) {
        // the level is playable, then play the level!!
        if (button.frame < 4) {
            game.global.level = button.levelNumber;
            game.state.start("LevelPlay");
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
var levelPlay = {
    create: function () {
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
    levelFinished: function (button) {
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