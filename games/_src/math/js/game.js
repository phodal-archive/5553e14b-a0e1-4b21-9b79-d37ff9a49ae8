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
    game = new Phaser.Game(640, 960);
    game.state.add("Boot", boot);
    game.state.add("Preload", preload);
    game.state.add("Home", home);
    game.state.add("LevelSelect", levelSelect);
    game.state.add("LevelPlay", levelPlay);
    game.state.start("Boot");

    game.global = {
        starsArray: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        level: 0,
        skillsData: [
            {
                color: '283430',
                color1: '68a68f',
                color2: 'b1d0c8',
                color3: 'cce1dc',
                color4: '62d4a9',
                color5: 'e68b5c',
                ops: ['+', '-'],
                icon: 'iconEasy.png'
            },
            {
                color: '2a3134',
                color1: '7198a5',
                color2: 'b9cad3',
                color3: 'd4dfe5',
                color4: '70b9cf',
                color5: 'dfd96d',
                ops: ['+', '-', '*'],
                icon: 'iconNormal.png'
            },
            {
                color: '362731',
                color1: 'b2649d',
                color2: 'd9b2cb',
                color3: 'e9cfdf',
                color4: 'e758c3',
                color5: '50fcf5',
                ops: ['+', '-', '*', '/'],
                icon: 'iconHard.png'
            }
        ],
        userData: {
            lastLevel: [1, 0],
            levels: [
                [0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0]
            ]
        },
        levelsData: [
            {
                inType: 3,
                columns: 3,
                rows: 3,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6],
                range: [0, 100],
                templates: ['_o_'],
                fitTemplate: true,
                killMode: true,
                mixed: true
            },
            {
                inType: 1,
                columns: 3,
                rows: 3,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6],
                range: [0, 100],
                templates: ['_o_'],
                fitTemplate: true,
            },
            {
                inType: 1,
                columns: 3,
                rows: 3,
                stars: [1, 3, 6],
                nums: [1, 2, 3, 4, 5, 6],
                range: [0, 100],
                templates: ['_o_o_'],
                fitTemplate: true,
                opsRatio: 2
            },
            {
                inType: 1,
                columns: 3,
                rows: 3,
                stars: [1, 5, 10],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                range: [0, 100],
                templates: ['_o_'],
                fitTemplate: true,
                maxTime: 60
            },
            {
                inType: 1,
                columns: 3,
                rows: 3,
                stars: [1, 6, 12],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                everNew: true,
                maxTime: 90
            },
            {
                inType: 1,
                columns: 3,
                rows: 3,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: true,
                everNew: true,
                mixed: true
            },
            {
                inType: 1,
                columns: 3,
                rows: 3,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: false,
                killMode: true,
            },
            {
                inType: 1,
                columns: 4,
                rows: 4,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: false,
                killMode: false,
                everNew: false,
                mixed: false
            },
            {
                inType: 1,
                columns: 4,
                rows: 4,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: true,
                killMode: false,
                everNew: false,
                mixed: false
            },
            {
                inType: 1,
                columns: 4,
                rows: 4,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                opsRatio: 10 / 6,
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: true,
                killMode: true,
                everNew: false,
                mixed: false
            },
            {
                inType: 1,
                columns: 4,
                rows: 4,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                opsRatio: 10 / 6,
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: true,
                killMode: true,
                everNew: true,
                mixed: false
            },
            {
                inType: 1,
                columns: 4,
                rows: 4,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                opsRatio: 10 / 6,
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: true,
                killMode: true,
                everNew: true,
                mixed: true
            },
            {
                inType: 1,
                columns: 5,
                rows: 5,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                opsRatio: 10 / 6,
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: false,
                killMode: false,
                everNew: false,
                mixed: false
            },
            {
                inType: 1,
                columns: 5,
                rows: 5,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                opsRatio: 10 / 6,
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: true,
                killMode: false,
                everNew: false,
                mixed: false
            },
            {
                inType: 1,
                columns: 5,
                rows: 5,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                opsRatio: 10 / 6,
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: true,
                killMode: true,
                everNew: false,
                mixed: false
            },
            {
                inType: 1,
                columns: 5,
                rows: 5,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                opsRatio: 10 / 6,
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: true,
                killMode: true,
                everNew: true,
                mixed: false
            },
            {
                inType: 1,
                columns: 5,
                rows: 5,
                stars: [1, 2, 3],
                nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                opsRatio: 10 / 6,
                range: [0, 100],
                templates: ['_o_', '_o_o_'],
                fitTemplate: true,
                candyMode: true,
                killMode: true,
                everNew: true,
                mixed: true
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
        game.load.image("btn_medium_arrow_left_green", "assets/PNG24@1x/btn_medium_arrow_left_green.png");
        game.load.image("btn_medium_arrow_right_green", "assets/PNG24@1x/btn_medium_arrow_right_green.png");
        game.load.spritesheet("element_button_level", "assets/PNG24@1x/element_button_level_full.png", 53, 57);
        game.load.image("window_panel_level", "assets/PNG24@1x/window_panel_level.png");
        game.load.spritesheet("game_content", "assets/game.png", 200, 80);
        //for game
        game.load.spritesheet("smallclock", "assets/sprites/smallclock.png", 70, 70);
        game.load.spritesheet("smallhand", "assets/sprites/smallhand.png", 70, 70);
        game.load.spritesheet("bigclock", "assets/sprites/bigclock.png", 140, 140);
        game.load.spritesheet("bighand", "assets/sprites/bighand.png", 140, 140);
        game.load.image("smallclockface", "assets/sprites/smallclockface.png");
        game.load.image("bigclockface", "assets/sprites/bigclockface.png");
        game.load.image("ball", "assets/sprites/ball.png");
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
    game.add.text((w - 204) / 2 + 50, 95, 'MATH', { font: "32px Arial", fill: "#ffffff" });
}
function mainmenu(game) {
    var w = game.width, h = game.height, w2 = w / 2, h2 = h / 2;
    var window_panel_main = game.add.sprite((w - 200) / 2, 500, 'window_panel_main');
    var window_title_1 = game.add.sprite((w - 138) / 2, 490, 'window_title_1');
    var text0 = game.add.text(40, 5, 'MENU', { font: "20px Arial", fill: "#ffffff" });
    window_title_1.addChild(text0);
    var playButton = game.add.button((w - 150) / 2, h2 + 50, "btn_text_brown", function () {
        game.state.start("LevelSelect");
    });
    var text1 = game.add.text(50, 10, "Play", { font: "22px Arial", fill: "#ffffff" });
    playButton.addChild(text1);
    var highscoreButton = game.add.button((w - 150) / 2, h2 + 100, "btn_text_brown", function () {
        alert("highscore");
    });
    var text2 = game.add.text(30, 10, "Highscore", { font: "22px Arial", fill: "#ffffff" });
    highscoreButton.addChild(text2);
    var settingButton = game.add.button((w - 150) / 2, h2 + 150, "btn_text_brown", function () {
        alert("setting here");
    });
    var text3 = game.add.text(40, 10, "Setting", { font: "22px Arial", fill: "#ffffff" });
    settingButton.addChild(text3);
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

        var window_panel_level = game.add.sprite((w - 295) / 2, 235, 'window_panel_level');

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
                        var levelText = game.add.text(levelThumb.width / 2 - 8, levelThumb.height / 2 - 15, levelNumber + 1, style);
                        levelText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 1);
                        levelThumb.addChild(levelText);
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
var levelPlay = function (game) {

};
levelPlay.prototype = {
    create: function () {
        backgroundgradient(game);
        debugger;
        var xxx = this.initBoard();
        var yyy = this.getRandomResult(null, xxx.nb);
        var starResultButton = game.add.button((w - 138) / 2, 690, 'window_title_1', function () {
        });
        var text0 = game.add.text(40, 5, yyy, { font: "20px Arial", fill: "#ffffff" });
        starResultButton.addChild(text0);
        levelData = game.global.levelsData[0];
        skillSelData = game.global.skillsData[0];
        
    },
    update: function () {
    },
    initBoard: function () {
        levelData = game.global.levelsData[0];
        skillSelData = game.global.skillsData[0];
        var opsratio = levelData.opsRatio || levelData.columns - 1
        var mix = [];
        var nb = { ops: [], nums: [] };
        for (var iV = 0; iV < levelData.columns * levelData.rows; iV++) {
            var type = nb.nums.length < nb.ops.length * opsratio ? 'nums' : 'ops';
            var chars = type == 'ops' ? skillSelData.ops.slice() : levelData.nums.slice();
            var value = chars.splice(Math.floor(Math.random() * chars.length), 1)[0];

            while (nb[type].indexOf(value) != -1 && chars.length) {
                value = chars.splice(Math.floor(Math.random() * chars.length), 1)[0];
            }
            nb[type].push(value);
            mix.push(value);
        }
        if (levelData.mixed) {
            for (var j, x, i = mix.length; i; j = Math.floor(Math.random() * i), x = mix[--i], mix[i] = mix[j], mix[j] = x);
        }
        return { mix, nb };
    },
    getRandomResult: function (pos, board) {
        var pos = pos || 0;
        var tempExp = '';
        var nums = board.nums.slice();
        var ops = board.ops.slice();
        var min = levelData.range ? levelData.range[0] : 0;
        var max = levelData.range ? levelData.range[1] : 100;
        var value = 0;
        for (var i = 0; i < actTemplate.length; i++) {
            var tempChar = actTemplate.charAt(i);
            if (tempChar == '_') {
                var tempN = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
                tempExp += tempN;
                if (!levelData.fitTemplate) {
                    value = evalExpr(value + tempN);
                }
            }
            else if (tempChar == 'o') {
                var tempN = ops.splice(Math.floor(Math.random() * ops.length), 1)[0];
                tempExp += tempN;
                if (!levelData.fitTemplate) {
                    value = value + tempN;
                }
            }
            else {
                tempExp += tempChar;
            }
        }
        value = value || evalExpr(tempExp)
        if ((value < min || value > max || value == 0 || value == result.value) && pos < 1000) {
            value = getRandomResult(pos + 1);
        }
        else {
            console.log('tempExp ', tempExp);
        }
        return value;
    }
}
function evalExpr(express) {
    return (Math.round(eval(express) * 10) / 10);
}
////////////////////////////////////////////////////////////////////////////////
var levelPlay1 = function (game) {
    var gridSize = 40;
    var levelWidth = 8;
    var levelHeight = 8;
    var level = 0;
    var ballSpeed = 600;
};
levelPlay1.prototype = {
    create: function () {
        backgroundgradient(game);

        gridSize = 40;
        levelWidth = 8;
        levelHeight = 8;
        level = 0;
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
                    game.global.starsArray[game.global.level - 1] = 3;
                    if (game.global.starsArray[game.global.level] == 4) game.global.starsArray[game.global.level] = 0;
                    game.global.level = (game.global.level + 1) % 10; // vi chi co 10 bai
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
