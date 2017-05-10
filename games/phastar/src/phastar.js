Phaser.Plugin.PhastarPlugin = function (parent) {
  if (typeof EasyStar !== "object")
    throw new Error("Easystar is not defined!")

  this.parent = parent
  this.easyStar = new EasyStar.js()
  this.grid = null
  this.walkables = [0]
}

Phaser.Plugin.PhastarPlugin.prototype = Object.create(Phaser.Plugin.prototype)
Phaser.Plugin.PhastarPlugin.prototype.constructor = Phaser.Plugin.PhastarPlugin

Phaser.Plugin.PhastarPlugin.prototype.setGrid = function (grid, walkables, iterPerCount) {
  this.grid = []
  this.walkables = walkables || this.walkables
  iterPerCount = iterPerCount || null

  for (var i = 0; i < grid.length; i++) {
    this.grid[i] = []
    for (var j = 0; j < grid[i].length; j++)
      this.grid[i][j] = grid[i][j] ? grid[i][j].index : 0
  }

  this.easyStar.setGrid(this.grid)
  this.easyStar.setAcceptableTiles(this.walkables)

  // set cost 1 to all walkable tiles so they will be walkable even if they are not on the grid map
  for (i = 0; i < this.walkables.length; i++)
    this.easyStar.setTileCost(this.walkables[i], 1)

  if (iterPerCount !== null)
    this.easyStar.setIterationsPerCalculation(iterPerCount)
}

Phaser.Plugin.PhastarPlugin.prototype.findPath = function (from, to, callback) {
  this.easyStar.findPath(from[0], from[1], to[0], to[1], callback)
  this.easyStar.calculate()
}
