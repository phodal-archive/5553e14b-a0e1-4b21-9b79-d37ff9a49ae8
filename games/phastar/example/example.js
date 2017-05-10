var map
var layer
var pathFinder
var marker
var TILE_SIZE = 32

var preload = function () {
  game.load.tilemap("map", "assets/tiles.json", null, Phaser.Tilemap.TILED_JSON)
  game.load.image("tiles", "assets/tiles.png")
}

var create = function () {
  var walkables = [30, 46]

  game.input.addMoveCallback(mouseMove, this)
  game.input.onDown.add(mouseClick, this)

  map = game.add.tilemap("map")
  map.addTilesetImage("MyMap", "tiles")

  layer = map.createLayer("MyMapLayer")

  pathFinder = game.plugins.add(Phaser.Plugin.PhastarPlugin)
  pathFinder.setGrid(map.layers[0].data, walkables)

  marker = game.add.graphics()
  marker.lineStyle(1, 0x000000, 1)
  marker.drawRect(0, 0, TILE_SIZE, TILE_SIZE)
}

var mouseMove = function () {
  marker.x = layer.getTileX(game.input.activePointer.worldX) * TILE_SIZE
  marker.y = layer.getTileY(game.input.activePointer.worldY) * TILE_SIZE
}

var mouseClick = function () {
  var x = layer.getTileX(game.input.activePointer.worldX)
  var y = layer.getTileY(game.input.activePointer.worldY)

  pathFinder.findPath([0, 0], [x, y], function (path) {
    path = path || []
    path.forEach(function (tile) {
      map.putTile(46, tile.x, tile.y)
    })
    pathFinder.setGrid(map.layers[0].data)
  })
}

var game = new Phaser.Game(800, 640, Phaser.AUTO, "gameContainer", {
  preload: preload,
  create: create
})
