var game;
var menuGroup;
window.onload = function () {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    //game = new Phaser.Game(640, Math.round(640 * e.clientHeight / e.clientWidth));
    var l = 2, m = 3, n = 320;
    game = new Phaser.Game(n * l, Math.round(n * l * e.clientHeight / e.clientWidth));
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
        levels: [
            // level 1
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 1
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 1
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 2
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 3
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 4
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 5
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 6
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 7
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 8
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 9
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
            },
            // level 10
            {
                clockSpeed: [200, 450],
                tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0]
            }
        ]
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
        game.load.image("btn_big_menu_home_brown", "assets/PNG24@1x/btn_big_menu_home_brown.png");
        game.load.image("btn_big_arrow_up_brown", "assets/PNG24@1x/btn_big_arrow_up_brown.png");
        game.load.image("btn_big_menu_exit_brown", "assets/PNG24@1x/btn_big_menu_exit_brown.png");
        game.load.image("btn_medium_arrow_left_green", "assets/PNG24@1x/btn_medium_arrow_left_green.png");
        game.load.image("btn_medium_arrow_right_green", "assets/PNG24@1x/btn_medium_arrow_right_green.png");
        game.load.spritesheet("left_right", "assets/sprites/left_right.png", 42, 42);
        game.load.spritesheet("element_button_level", "assets/sprites/element_button_level_full.png", 53, 57);
        game.load.image("window_panel_level", "assets/PNG24@1x/window_panel_level.png");
        game.load.spritesheet("game_content", "assets/game.png", 200, 80);
        //for game
        game.load.spritesheet("smallclock", "assets/sprites/smallclock.png", 70, 70);
        game.load.spritesheet("smallhand", "assets/sprites/smallhand.png", 70, 70);
        game.load.spritesheet("bigclock", "assets/sprites/bigclock.png", 140, 140);
        game.load.spritesheet("bighand", "assets/sprites/bighand.png", 140, 140);
        game.load.image("smallclockface", "assets/sprites/smallclockface.png");
        game.load.image("bigclockface", "assets/sprites/bigclockface.png");
        game.load.image("ball", "assets/sprites/ball.png");    },
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
function backgroundimage(game) {
    var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
    game.add.sprite(0, h - isize('background_scene1').h - isize('background_clouds').h / 2, 'background_clouds');
    game.add.sprite(0, h - isize('background_scene1').h, 'background_scene1');
    game.add.sprite((w - isize('element_rays').w) / 2, -isize('element_board_title').h / 2, 'element_rays');
    game.add.sprite((w - isize('element_ribbon').w) / 2, 130, 'element_ribbon');
    var gametitleboard = game.add.sprite((w - isize('element_board_title').w) / 2, 0, 'element_board_title');
    var gametitle = game.add.text(0, 95, 'CLOCK', { font: "32px Arial", fill: "#ffffff" });
    gametitle.x = gametitleboard.width / 2 - gametitle.width / 2;
    gametitleboard.addChild(gametitle);
}
function mainmenu(game) {
    var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
    var window_panel_main = game.add.sprite((w - isize('window_panel_main').w) / 2, isize('window_panel_level').h, 'window_panel_main');
    var window_title_1 = game.add.sprite((isize('window_panel_main').w - isize('window_title_1').w) / 2, - 10, 'window_title_1');
    window_panel_main.addChild(window_title_1);
    var text0 = game.add.text(0, 5, 'MENU', { font: "20px Arial", fill: "#ffffff" });
    window_title_1.addChild(text0);
    text0.x = window_title_1.width / 2 - text0.width / 2;

    var playButton = game.add.button((w - isize('btn_text_brown').w) / 2, window_panel_main.y + 35, "btn_text_brown", function () {
        game.state.start("LevelSelect");
    });
    var text1 = game.add.text(0, 10, "Play", { font: "22px Arial", fill: "#ffffff" });
    playButton.addChild(text1);
    text1.x = playButton.width / 2 - text1.width / 2;
    var highscoreButton = game.add.button((w - isize('btn_text_brown').w) / 2, playButton.y + 50, "btn_text_brown", function () {
        alert("highscore");
    });
    var text2 = game.add.text(30, 10, "Highscore", { font: "22px Arial", fill: "#ffffff" });
    highscoreButton.addChild(text2);
    text2.x = highscoreButton.width / 2 - text2.width / 2;
    var settingButton = game.add.button((w - isize('btn_text_brown').w) / 2, highscoreButton.y + 50, "btn_text_brown", function () {
        alert("setting here");
    });
    var text3 = game.add.text(40, 10, "Setting", { font: "22px Arial", fill: "#ffffff" });
    settingButton.addChild(text3);
    text3.x = settingButton.width / 2 - text3.width / 2;
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
                    var levelThumb = game.add.button(offsetX + j * (this.starBoard.thumbWidth + this.starBoard.thumbSpacing), offsetY + i * (this.starBoard.thumbHeight + this.starBoard.thumbSpacing), "element_button_level", this.thumbClicked, this);
                    levelThumb.frame = game.global.starsArray[levelNumber];
                    levelThumb.levelNumber = levelNumber + 1;
                    levelThumbsGroup.add(levelThumb);
                    if (game.global.starsArray[levelNumber] < 4) {
                        var style = {
                            font: "22px Arial",
                            fill: "#ffffff"
                        };
                        var levelText = game.add.text(0, 0, levelNumber + 1, style);
                        levelText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 1);
                        levelThumb.addChild(levelText);
                        levelText.x = (levelThumb.width - levelText.width) / 2;
                        levelText.y = (levelThumb.height - levelText.height) / 2;
                        //levelThumbsGroup.add(levelText);
                    }
                }
            }
        }
        // scrolling thumbnails group according to level position
        levelThumbsGroup.x = currentPage * ml * -1

        window_panel_level = game.add.sprite((w - isize('window_panel_level').w) / 2, isize('window_panel_level').h, 'window_panel_level');
        leftArrow = game.add.button(-20, window_panel_level.height / 2 - 20, "left_right", this.leftarrowClicked, this);
        leftArrow.frame = 0;
        if (currentPage == 0) {
            leftArrow.frame = 1;
        }
        window_panel_level.addChild(leftArrow);
        rightArrow = game.add.button(window_panel_level.width - 20, window_panel_level.height / 2 - 20, "left_right", this.rightarrowClicked, this);
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
    thumbClicked: function (button) {
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
    var gridSize = 40;
    var levelWidth = 8;
    var levelHeight = 8;
    var ballSpeed = 600;
};
levelPlay.prototype = {
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

        gridSize = 40;
        levelWidth = 8;
        levelHeight = 8;
        ballSpeed = 600;

        this.canFire = true;
        this.reached = 1;
        this.totalClocks = 0;
        this.clockGroup = game.add.group();
        this.ballGroup = game.add.group();
        this.clockGroup.y = (game.height - gridSize * 16) / 2;
        this.ballGroup.y = (game.height - gridSize * 16) / 2;
        this.clocksArray = [];
        game.stage.backgroundColor = 0x2babca;
        for (var i = 0; i < game.global.levels[game.global.level].tiledOutput.length; i++) {
            switch (game.global.levels[game.global.level].tiledOutput[i]) {
                case 1:
                    this.clocksArray[i] = this.placeClock(new Phaser.Point(i % levelWidth * 2 + 1, Math.floor(i / levelHeight) * 2 + 1), "small");
                    break;
                case 2:
                    this.clocksArray[i] = this.placeClock(new Phaser.Point(i % levelWidth * 2 + 2, Math.floor(i / levelHeight) * 2), "big");
                    break;
            }
        }
        do {
            startClock = game.rnd.between(0, game.global.levels[game.global.level].tiledOutput.length - 1);
        } while (game.global.levels[game.global.level].tiledOutput[startClock] == 0);
        this.clocksArray[startClock].frame = 1;
        this.clocksArray[startClock].tint = 0x2babca;
        this.clocksArray[startClock].children[0].visible = true;
        this.clocksArray[startClock].children[1].frame = 1;
        this.clocksArray[startClock].children[1].tint = 0xffffff;
        this.activeClock = this.clocksArray[startClock];
        game.input.onDown.add(this.fireBall, this);
    },
    update: function () {
        var clockHit = false;
        game.physics.arcade.overlap(this.ball, this.clockGroup, function (ball, clock) {
            if (!clockHit) {
                clock.frame = 1;
                clock.tint = 0x2babca;
                clock.children[0].visible = true;
                clock.children[1].frame = 1;
                clock.children[1].tint = 0xffffff;
                this.activeClock = clock;
                clockHit = true;
            }
        }, null, this);
        if (clockHit) {
            this.ball.destroy();
            this.reached++;
            console.log(this.reached)
            console.log(this.clocksArray.length)
            if (this.reached < this.totalClocks) {
                this.canFire = true;
            } else {
                game.time.events.add(Phaser.Timer.SECOND * 1, function () {
                    game.global.starsArray[game.global.level] = 3;
                    if (game.global.starsArray[game.global.level + 1] == 4) game.global.starsArray[game.global.level + 1] = 0;
                    game.global.level = game.global.level + 1; // vi chi co 10 bai
                    game.state.start("LevelSelect");
                });
            }
        }
    },
    placeClock: function (clockObj, prefix) {
        var clockSprite = game.add.sprite(clockObj.x * gridSize, clockObj.y * gridSize, prefix + "clock");
        clockSprite.anchor.set(0.5);
        game.physics.enable(clockSprite, Phaser.Physics.ARCADE);
        var faceSprite = game.add.sprite(0, 0, prefix + "clockface");
        faceSprite.anchor.set(0.5);
        faceSprite.visible = false;
        clockSprite.addChild(faceSprite);
        var handSprite = game.add.sprite(0, 0, prefix + "hand");
        handSprite.anchor.set(0.5);
        handSprite.tint = 0x2babca;
        handSprite.angle = game.rnd.between(0, 359);
        game.physics.enable(handSprite, Phaser.Physics.ARCADE);
        handSprite.body.angularVelocity = game.rnd.between(game.global.levels[game.global.level].clockSpeed[0], game.global.levels[game.global.level].clockSpeed[1]) * (1 - 2 * game.rnd.between(0, 1));
        clockSprite.addChild(handSprite);
        this.clockGroup.add(clockSprite);
        this.totalClocks++;
        return clockSprite;
    },
    fireBall: function () {
        if (this.canFire) {
            this.canFire = false;
            var handAngle = this.activeClock.children[1].angle;
            this.ball = game.add.sprite(this.activeClock.x, this.activeClock.y, "ball");
            this.ball.anchor.set(0.5);
            game.physics.enable(this.ball, Phaser.Physics.ARCADE);
            this.ball.checkWorldBounds = true;
            this.ball.events.onOutOfBounds.add(function () {
                game.state.start("LevelPlay");
            });
            this.ballGroup.add(this.ball);
            this.ball.body.velocity = game.physics.arcade.velocityFromAngle(handAngle, ballSpeed);
            this.activeClock.destroy();
        }
    }
}