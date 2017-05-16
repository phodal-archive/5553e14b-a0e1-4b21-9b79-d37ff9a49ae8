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
    var l = 3, m = 2, n = 320;
    game = new Phaser.Game(n * l, n * m);
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
        game.load.spritesheet("tiles", "assets/sprites/tiles.png", 64, 64);
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
function backgroundimage(game) {
    var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
    game.add.sprite(0, h - isize('background_scene1').h - isize('background_clouds').h / 2, 'background_clouds');
    game.add.sprite(0, h - isize('background_scene1').h, 'background_scene1');
    game.add.sprite((w - isize('element_rays').w) / 2, -isize('element_board_title').h / 2, 'element_rays');
    game.add.sprite((w - isize('element_ribbon').w) / 2, 130, 'element_ribbon');
    var gametitleboard = game.add.sprite((w - isize('element_board_title').w) / 2, 0, 'element_board_title');
    var gametitle = game.add.text(0, 95, 'PIKACHU', { font: "32px Arial", fill: "#ffffff" });
    gametitle.x = gametitleboard.width / 2 - gametitle.width / 2;
    gametitleboard.addChild(gametitle);
}
function mainmenu(game) {
    var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
    var window_panel_main = game.add.sprite((w - isize('window_panel_main').w) / 2, h2, 'window_panel_main');
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

        var window_panel_level = game.add.sprite((w - isize('window_panel_level').w) / 2, 235, 'window_panel_level');
        pages = game.global.starsArray.length / (this.starBoard.thumbRows * this.starBoard.thumbCols);
        currentPage = Math.floor(game.global.level / (this.starBoard.thumbRows * this.starBoard.thumbCols));
        if (currentPage > pages - 1) {
            currentPage = pages - 1;
        }
        leftArrow = game.add.button(-20, window_panel_level.height / 2 - 20, "btn_medium_arrow_left_green", this.leftarrowClicked, this);
        if (currentPage == 0) {
            leftArrow.alpha = 0.5;
        }
        window_panel_level.addChild(leftArrow);
        rightArrow = game.add.button(window_panel_level.width - 20, window_panel_level.height / 2 - 20, "btn_medium_arrow_right_green", this.rightarrowClicked, this);
        if (currentPage == pages - 1) {
            rightArrow.alpha = 0.5;
        }
        window_panel_level.addChild(rightArrow);

        levelThumbsGroup = game.add.group();
        window_panel_level.addChild(levelThumbsGroup);
        var levelWidth = this.starBoard.thumbWidth * this.starBoard.thumbCols + this.starBoard.thumbSpacing * (this.starBoard.thumbCols - 1);
        var levelHeight = this.starBoard.thumbWidth * this.starBoard.thumbRows + this.starBoard.thumbSpacing * (this.starBoard.thumbRows - 1);
        for (var l = 0; l < pages; l++) {
            var offsetX = (295 - levelWidth) / 2 + game.width * l;
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
        levelThumbsGroup.x = currentPage * game.width * -1
    },
    rightarrowClicked: function (button) {
        // touching right arrow and still not reached last page
        if (currentPage < pages - 1) {
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
    },
    leftarrowClicked: function (button) {
        // touching left arrow and still not reached first page
        if (currentPage > 0) {
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
    var tileSize, tileValues;
    var start, end, pstart, pend;

};
levelPlay.prototype = {
    create: function () {
        start = undefined; end = undefined; pstart = undefined; pend = undefined;
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
        tileSize = 64;
        var gridSize = 9; // number of tiles per row/column
        var tileTypes = 10; // different kind of tiles allowed
        var tileArray = []; // array with all game tiles
        tileValues = [];
        var tileGroup; // group for sprites representing the tiles

        tileGroup = game.add.group();
        tileGroup.x = 192;
        tileGroup.y = 64;
        for (i = 0; i < gridSize; i++) {
            tileArray[i] = []; tileValues[i] = [];
            for (j = 0; j < gridSize; j++) {
                var randomTile = Math.floor(Math.random() * tileTypes)
                if ((i == 0) || (j == 0) || (i == 8) || (j == 8)) randomTile = 0;
                var theTile = game.add.button(j * tileSize + tileSize / 2, i * tileSize + tileSize / 2, "tiles", this.tileClicked, this);
                theTile.frame = randomTile;
                theTile.anchor.setTo(0.5, 0.5);
                tileGroup.add(theTile);
                tileArray[i][j] = theTile;
                tileValues[i][j] = theTile.frame;
            }
        }


    },
    update: function () {
    },
    tileClicked: function (button) {
        if (button.frame == 0) return;
        if (!start) {
            start = button; button.alpha = 1.3;
            if (!pstart) { pstart = {}; pstart.y = Math.floor(button.x / tileSize); pstart.x = Math.floor(button.y / tileSize); }
        }
        else
            if ((!end) && (button.frame == start.frame)) {
                end = button;
                button.alpha = 1.3;
                if (!pend) { pend = {}; pend.y = Math.floor(button.x / tileSize); pend.x = Math.floor(button.y / tileSize); }
                var opstart = tileValues[pstart.x][pstart.y]; var opend = tileValues[pend.x][pend.y];
                tileValues[pstart.x][pstart.y] = 0; tileValues[pend.x][pend.y] = 0;
                var result = runBasic(tileValues, pstart.x, pstart.y, pend.x, pend.y);

                if (result.length == 0) {
                    tileValues[pstart.x][pstart.y] = opstart; tileValues[pend.x][pend.y] = opend;
                    start.alpha = 1; end.alpha = 1; start = undefined; end = undefined; pstart = undefined; pend = undefined;
                } else {
                    tileValues[pstart.x][pstart.y] = 0; tileValues[pend.x][pend.y] = 0;
                    start.alpha = 1; end.alpha = 1; start.frame = 0; end.alpha = 0; start = undefined; end = undefined; pstart = undefined; pend = undefined;
                }
            }
    }
}
function runBasic(matrix, x1, y1, x2, y2) {
    var a = new AStar.Graph(matrix);
    result = AStar.astar.search(a.nodes, a.nodes[x1][y1], a.nodes[x2][y2], 2, !1);
    return result;
}