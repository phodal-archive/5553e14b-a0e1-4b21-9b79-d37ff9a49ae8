SSIS.MainMenu = function (game) { };
SSIS.MainMenu.prototype = {
    create: function () {
        // display images
        this.add.sprite(0, 0, 'background');
        this.add.sprite(0, 0, 'cover');
        //this.add.sprite((SSIS.GAME_WIDTH - 395) / 2, 60, 'title');
        // add the button that will start the game
        this.add.button(SSIS.GAME_WIDTH - 401 - 10, SSIS.GAME_HEIGHT - 143 - 10, 'button-start', this.startGame, this, 1, 0, 2);
    },
    startGame: function () {
        // start the Game state
        this.state.start('Game');
    }
};