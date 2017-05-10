# Phastar - [EasyStar.js](https://github.com/prettymuchbryce/easystarjs) pathfinder plugin for [Phaser](http://phaser.io)

## Using Phastar
See `example` dir for full example.
```
var walkables = [1]
pathFinder = game.plugins.add(Phaser.Plugin.PhastarPlugin)
pathFinder.setGrid(map.layers[0].data, walkables)

pathFinder.findPath([0, 0], [20, 20], function (path) {
    //
})
```

## Building
```
npm install
gulp dist
```
