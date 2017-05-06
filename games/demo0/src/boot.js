var SSIS = { };
SSIS.Boot = function (game) { };
SSIS.Boot.prototype = {
    preload: function () {
        // preload the loading indicator first before anything else
        this.load.image('loadingBar', ASSET_PATH + 'loading.png');
    },
    create: function () {
        // set scale options
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);
        // start the Preloader state
        this.state.start('Preloader');
    }
};