SSIS.Preloader = function (game) {
    // define width and height of the game
    SSIS.GAME_WIDTH = 640;
    SSIS.GAME_HEIGHT = 960;
};
SSIS.Preloader.prototype = {
    preload: function () {
        // set background color and preload image
        //this.stage.backgroundColor = '#B4D9E7';
        this.loadingBar = this.add.sprite((SSIS.GAME_WIDTH - 311) / 2, (SSIS.GAME_HEIGHT - 27) / 2, 'loadingBar');
        this.load.setPreloadSprite(this.loadingBar);
        // load images
        this.load.image('background', ASSET_PATH + 'background.jpg');
        this.load.image('background2', ASSET_PATH + 'background2.png');
        //this.load.image('floor', ASSET_PATH + 'floor.png');
        this.load.image('cover', ASSET_PATH + 'cover.png');
        //this.load.image('title', ASSET_PATH + 'title.png');
        //this.load.image('game-over', ASSET_PATH + 'gameover.png');
        //this.load.image('score-bg', ASSET_PATH + 'score-bg.png');
        //this.load.image('button-pause', ASSET_PATH + 'button-pause.png');
        // load spritesheets
        this.load.spritesheet('button-start', ASSET_PATH + 'start.png', 401, 143);
        this.load.spritesheet("smallclock", "assets/smallclock.png", 70, 70);
        this.load.spritesheet("smallhand", "assets/smallhand.png", 70, 70);
        this.load.spritesheet("bigclock", "assets/bigclock.png", 140, 140);
        this.load.spritesheet("bighand", "assets/bighand.png", 140, 140);
        this.load.image("smallclockface", "assets/smallclockface.png");
        this.load.image("bigclockface", "assets/bigclockface.png");
        this.load.image("ball", "assets/ball.png");
    },
    create: function () {
        // start the MainMenu state
        this.state.start('MainMenu');
    }
};