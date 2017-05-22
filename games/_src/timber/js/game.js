var game;
var menuGroup;
window.onload = function () {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    if (e.clientWidth > e.clientHeight) {
        //game = new Phaser.Game(640, Math.round(640 * e.clientHeight / e.clientWidth));
        var l = 3, m = 2, n = 320;
        game = new Phaser.Game(Math.round(n * m * e.clientWidth / e.clientHeight), n * m);
    } else {
        //game = new Phaser.Game(640, Math.round(640 * e.clientHeight / e.clientWidth));
        var l = 2, m = 3, n = 320;
        game = new Phaser.Game(n * l, Math.round(n * l * e.clientHeight / e.clientWidth));
    }
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
        level: 0,
        levels: []
    }
    ext_game_global(game);
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
        game.load.image("btn_big_menu_home_brown", "assets/PNG24@1x/btn_big_menu_home_brown.png");
        game.load.image("btn_big_arrow_up_brown", "assets/PNG24@1x/btn_big_arrow_up_brown.png");
        game.load.image("btn_big_menu_exit_brown", "assets/PNG24@1x/btn_big_menu_exit_brown.png");
        game.load.image("window_panel_level", "assets/PNG24@1x/window_panel_level.png");
        game.load.spritesheet('status_bar_time', 'assets/PNG24@1x/status_bar_time.png', 42, 41);
        game.load.image('element_slider_bg', 'assets/PNG24@1x/element_slider_bg.png');
        game.load.image('element_slider_bar', 'assets/PNG24@1x/element_slider_bar.png');
        game.load.spritesheet("btn_medium_arrow_left_right_green_brown", "assets/sprites/btn_medium_arrow_left_right_green_brown.png", 42, 42);
        game.load.spritesheet("element_button_level_full", "assets/sprites/element_button_level_full.png", 53, 57);
        ext_preload_preload(game);
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
        homemenu(game);
    }
}
function backgroundimage(game) {
    var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
    game.add.sprite(0, h - isize('background_scene1').h - isize('background_clouds').h / 2, 'background_clouds');
    game.add.sprite(0, h - isize('background_scene1').h, 'background_scene1');
    if (w > isize('background_scene1').w) {
        game.add.sprite(isize('background_scene1').w, h - isize('background_scene1').h - isize('background_clouds').h / 2, 'background_clouds');
        game.add.sprite(isize('background_scene1').w, h - isize('background_scene1').h, 'background_scene1');
    }
    game.add.sprite((w - isize('element_rays').w) / 2, -isize('element_board_title').h / 2, 'element_rays');
    game.add.sprite((w - isize('element_ribbon').w) / 2, 130, 'element_ribbon');
    var gamebanner = game.add.sprite((w - isize('element_board_title').w) / 2, 0, 'element_board_title');
    var gametitle = game.add.text(0, 95, 'GAME', { font: "32px Arial", fill: "#ffffff" });
    gametitle.x = gamebanner.width / 2 - gametitle.width / 2;
    gamebanner.addChild(gametitle);
}
function homemenu(game) {
    var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
    var window_panel_main = game.add.sprite((w - isize('window_panel_main').w) / 2, isize('element_rays').h * 2 / 3, 'window_panel_main');
    var window_title_1 = game.add.sprite((isize('window_panel_main').w - isize('window_title_1').w) / 2, - 10, 'window_title_1');
    window_panel_main.addChild(window_title_1);
    var text0 = game.add.text(0, 5, 'MENU', { font: "20px Arial", fill: "#ffffff" });
    window_title_1.addChild(text0);
    text0.x = window_title_1.width / 2 - text0.width / 2;
    var playButton = game.add.button(0, 35, "btn_text_brown", function () {
        game.state.start("LevelSelect");
    });
    var text1 = game.add.text(0, 10, "Play", { font: "22px Arial", fill: "#ffffff" });
    playButton.addChild(text1);
    text1.x = playButton.width / 2 - text1.width / 2;
    window_panel_main.addChild(playButton);
    playButton.x = window_panel_main.width / 2 - playButton.width / 2;
    var highscoreButton = game.add.button(0, playButton.y + 50, "btn_text_brown", function () {
        alert("highscore");
    });
    var text2 = game.add.text(30, 10, "Highscore", { font: "22px Arial", fill: "#ffffff" });
    highscoreButton.addChild(text2);
    text2.x = highscoreButton.width / 2 - text2.width / 2;
    window_panel_main.addChild(highscoreButton);
    highscoreButton.x = window_panel_main.width / 2 - highscoreButton.width / 2;
    var settingButton = game.add.button(0, highscoreButton.y + 50, "btn_text_brown", function () {
        alert("setting here");
    });
    var text3 = game.add.text(40, 10, "Setting", { font: "22px Arial", fill: "#ffffff" });
    settingButton.addChild(text3);
    text3.x = settingButton.width / 2 - text3.width / 2;
    window_panel_main.addChild(settingButton);
    settingButton.x = window_panel_main.width / 2 - settingButton.width / 2;
}
////////////////////////////////////////////////////////////////////////////////
var levelSelect = function (game) {
    this.starBoard = {
        thumbRows: 4,
        thumbCols: 3,
        thumbWidth: 64,
        thumbHeight: 64,
        thumbSpacing: 0
    }
    var pages;
    var levelThumbsGroup;
    var window_panel_level;
    var currentPage;
    var leftArrow;
    var rightArrow;
};
levelSelect.prototype = {
    create: function () {
        backgroundgradient(game);
        backgroundimage(game);
        var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
        var backHomeButton = game.add.button(20, 20, 'btn_big_menu_home_brown', function () {
            game.state.start("Home");
        });

        var ml = isize('window_panel_level').w;
        pages = game.global.starsArray.length / (this.starBoard.thumbRows * this.starBoard.thumbCols);
        currentPage = Math.floor(game.global.level / (this.starBoard.thumbRows * this.starBoard.thumbCols));
        if (currentPage > pages - 1) {
            currentPage = pages - 1;
        }

        levelThumbsGroup = game.add.group();
        var levelWidth = this.starBoard.thumbWidth * this.starBoard.thumbCols + this.starBoard.thumbSpacing * (this.starBoard.thumbCols - 1);
        var levelHeight = this.starBoard.thumbWidth * this.starBoard.thumbRows + this.starBoard.thumbSpacing * (this.starBoard.thumbRows - 1);
        for (var l = 0; l < pages; l++) {
            var offsetX = (295 - levelWidth) / 2 + ml * l;
            var offsetY = 15;
            for (var i = 0; i < this.starBoard.thumbRows; i++) {
                for (var j = 0; j < this.starBoard.thumbCols; j++) {
                    var levelNumber = i * this.starBoard.thumbCols + j + l * (this.starBoard.thumbRows * this.starBoard.thumbCols);
                    var levelThumb = game.add.button(offsetX + j * (this.starBoard.thumbWidth + this.starBoard.thumbSpacing), offsetY + i * (this.starBoard.thumbHeight + this.starBoard.thumbSpacing), "element_button_level_full", this.levelClicked, this);
                    levelThumb.frame = game.global.starsArray[levelNumber];
                    levelThumb.levelNumber = levelNumber + 1;
                    levelThumbsGroup.add(levelThumb);
                    if (game.global.starsArray[levelNumber] < 4) {
                        var style = { font: "22px Arial", fill: "#ffffff" };
                        var levelText = game.add.text(0, 0, levelNumber + 1, style);
                        levelText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 1);
                        levelThumb.addChild(levelText);
                        levelText.x = (levelThumb.width - levelText.width) / 2;
                        levelText.y = (levelThumb.height - levelText.height) / 2;
                    }
                }
            }
        }
        // scrolling thumbnails group according to level position
        levelThumbsGroup.x = currentPage * ml * -1

        window_panel_level = game.add.sprite((w - isize('window_panel_level').w) / 2, isize('element_rays').h * 2 / 3, 'window_panel_level');
        leftArrow = game.add.button(-20, window_panel_level.height / 2 - 20, "btn_medium_arrow_left_right_green_brown", this.leftarrowClicked, this);
        leftArrow.frame = 0;
        if (currentPage == 0) {
            leftArrow.frame = 1;
        }
        window_panel_level.addChild(leftArrow);
        rightArrow = game.add.button(window_panel_level.width - 20, window_panel_level.height / 2 - 20, "btn_medium_arrow_left_right_green_brown", this.rightarrowClicked, this);
        rightArrow.frame = 2;
        if (currentPage == pages - 1) {
            rightArrow.frame = 3;
        }
        window_panel_level.addChild(rightArrow);

        var mask = game.add.graphics(0, 0);
        mask.beginFill(0x000000);
        mask.drawRect(window_panel_level.x + 10, window_panel_level.y, window_panel_level.width - 20, window_panel_level.height);
        levelThumbsGroup.mask = mask;

        window_panel_level.addChild(levelThumbsGroup);
    },
    rightarrowClicked: function (button) {
        // touching right arrow and still not reached last page
        if (currentPage < pages - 1) {
            leftArrow.frame = 0;
            currentPage++;
            // fade out the button if we reached last page
            if (currentPage == pages - 1) {
                button.frame = 3;
            }
            // scrolling level pages
            var buttonsTween = game.add.tween(levelThumbsGroup);
            buttonsTween.to({
                x: currentPage * window_panel_level.width * -1
            }, 1000, Phaser.Easing.Cubic.None);
            buttonsTween.start();
        }
    },
    leftarrowClicked: function (button) {
        // touching left arrow and still not reached first page
        if (currentPage > 0) {
            rightArrow.frame = 2;
            currentPage--;
            // fade out the button if we reached first page
            if (currentPage == 0) {
                button.frame = 1;
            }
            // scrolling level pages
            var buttonsTween = game.add.tween(levelThumbsGroup);
            buttonsTween.to({
                x: currentPage * window_panel_level.width * -1
            }, 1000, Phaser.Easing.Cubic.None);
            buttonsTween.start();
        }
    },
    levelClicked: function (button) {
        // the level is playable, then play the level!!
        if (button.frame < 4) {
            game.global.level = button.levelNumber - 1;
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
var levelPlay = function (game) {
    ext_levelPlay(game);
};
levelPlay.prototype = {
    preload: function () {
    },
    create: function () {
        backgroundgradient(game);
        var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;

        var backLevelButton = game.add.button(w - isize('btn_big_menu_exit_brown').w - 20, 20, 'btn_big_menu_exit_brown', function () {
            game.state.start("LevelSelect");
        });
        var passLevelButton = game.add.button(w - isize('btn_big_arrow_up_brown').w - 100, 20, 'btn_big_arrow_up_brown', function () {
            game.state.start("LevelSelect");
            game.global.starsArray[game.global.level] = 3;
            if (game.global.starsArray[game.global.level + 1] == 4) game.global.starsArray[game.global.level + 1] = 0;
            game.global.level = game.global.level + 1; // vi chi co 10 bai
            game.state.start("LevelSelect");
        });
        var timerContainer = game.add.group();
        timerContainer.add(game.add.sprite(0, 0, 'status_bar_time', 0));
        for (var i = 0; i < 4; i++) {
            timerContainer.add(game.add.sprite(42 + 42 * i, 0, 'status_bar_time', 1));
        }
        timerContainer.add(game.add.sprite(42 + 42 * 4, 0, 'status_bar_time', 2));
        timerContainer.add(game.add.sprite(42, 11, 'element_slider_bg', 0));
        var timerSprite = game.add.sprite(44, 15, 'element_slider_bar', 0);
        timerContainer.add(timerSprite);
        timerContainer.x = w - isize('btn_big_arrow_up_brown').w * 2 - 100 - timerContainer.width;
        timerContainer.y = 20 + (isize('btn_big_arrow_up_brown').w - timerContainer.height) / 2;
        ext_levelPlay_create(game);
        var indicator = new timerBar({
            game: this.game,
            sprite: timerSprite,
            seconds: 10,
            onComplete: function () {alert('finished');}
        });
        indicator.start();        
    },
    update: function () {
        ext_levelPlay_update(game);
    }
}