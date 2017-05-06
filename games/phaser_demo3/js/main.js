SmartCity.game = new Phaser.Game(1115, 605, Phaser.AUTO, 'game');

SmartCity.game.state.add('Boot', SmartCity.Boot);
SmartCity.game.state.add('Preload', SmartCity.Preload);
SmartCity.game.state.add('MainMenu', SmartCity.MainMenu);
SmartCity.game.state.add('Game', SmartCity.Game);
SmartCity.game.state.add('scene1', SmartCity.scene1);
SmartCity.game.state.add('NextLevel',SmartCity.NextLevel);
SmartCity.game.state.add('NextLevel2',SmartCity.NextLevel2);
SmartCity.game.state.add('Question1',SmartCity.question1)
SmartCity.game.state.add('Question2',SmartCity.question2)
SmartCity.game.state.add('Game2',SmartCity.Game2)
SmartCity.game.state.add('FinalScore',SmartCity.FinalScore)

SmartCity.game.state.start('Boot');
