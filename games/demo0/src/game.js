SSIS.Game = function (game) {
    this.gridSize = 40;
    this.levelWidth = 8;
    this.levelHeight = 8;
    this.level = 0;
    this.ballSpeed = 600;
    this.levels = [
        // level 1
        {
            clockSpeed: [200, 450],
            tiledOutput: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
    ];
};
SSIS.Game.prototype = {
    create: function () {
        this.canFire = true;
        this.reached = 1;
        this.totalClocks = 0;
        this.clockGroup = this.add.group();
        this.ballGroup = this.add.group();
        this.clockGroup.y = (SSIS.GAME_HEIGHT - this.gridSize * 16) / 2;
        this.ballGroup.y = (SSIS.GAME_HEIGHT - this.gridSize * 16) / 2;
        this.clocksArray = [];
        this.add.sprite(0, -100, 'background2');
        this.stage.backgroundColor = 0x2babca;
        for (var i = 0; i < this.levels[this.level].tiledOutput.length; i++) {
            switch (this.levels[this.level].tiledOutput[i]) {
                case 1:
                    this.clocksArray[i] = this.placeClock(new Phaser.Point(i % this.levelWidth * 2 + 1, Math.floor(i / this.levelHeight) * 2 + 1), "small");
                    break;
                case 2:
                    this.clocksArray[i] = this.placeClock(new Phaser.Point(i % this.levelWidth * 2 + 2, Math.floor(i / this.levelHeight) * 2), "big");
                    break;
            }
        }
        do {
            startClock = this.rnd.between(0, this.levels[this.level].tiledOutput.length - 1);
        } while (this.levels[this.level].tiledOutput[startClock] == 0);
        this.clocksArray[startClock].frame = 1;
        this.clocksArray[startClock].tint = 0x2babca;
        this.clocksArray[startClock].children[0].visible = true;
        this.clocksArray[startClock].children[1].frame = 1;
        this.clocksArray[startClock].children[1].tint = 0xffffff;
        this.activeClock = this.clocksArray[startClock];
        this.input.onDown.add(this.fireBall, this);
    },
    update: function () {
        var clockHit = false;
        this.physics.arcade.overlap(this.ball, this.clockGroup, function (ball, clock) {
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
                this.time.events.add(Phaser.Timer.SECOND * 1, function () {
                    this.level = (this.level + 1) % 10;
                    this.state.start('Game');
                }, this);
            }
        }
    },
    placeClock: function (clockObj, prefix) {
        var clockSprite = this.add.sprite(clockObj.x * this.gridSize, clockObj.y * this.gridSize, prefix + "clock");
        clockSprite.anchor.set(0.5);
        this.physics.enable(clockSprite, Phaser.Physics.ARCADE);
        var faceSprite = this.add.sprite(0, 0, prefix + "clockface");
        faceSprite.anchor.set(0.5);
        faceSprite.visible = false;
        clockSprite.addChild(faceSprite);
        var handSprite = this.add.sprite(0, 0, prefix + "hand");
        handSprite.anchor.set(0.5);
        handSprite.tint = 0x2babca;
        handSprite.angle = this.rnd.between(0, 359);
        this.physics.enable(handSprite, Phaser.Physics.ARCADE);
        handSprite.body.angularVelocity = this.rnd.between(this.levels[this.level].clockSpeed[0], this.levels[this.level].clockSpeed[1]) * (1 - 2 * this.rnd.between(0, 1));
        clockSprite.addChild(handSprite);
        this.clockGroup.add(clockSprite);
        this.totalClocks++;
        return clockSprite;
    },
    fireBall: function () {
        if (this.canFire) {
            this.canFire = false;
            var handAngle = this.activeClock.children[1].angle;
            this.ball = this.add.sprite(this.activeClock.x, this.activeClock.y, "ball");
            this.ball.anchor.set(0.5);
            this.physics.enable(this.ball, Phaser.Physics.ARCADE);
            this.ball.checkWorldBounds = true;
            this.ball.events.onOutOfBounds.add(function () {
                this.state.start('Game');
            }, this);
            this.ballGroup.add(this.ball);
            this.ball.body.velocity = this.physics.arcade.velocityFromAngle(handAngle, this.ballSpeed);
            this.activeClock.destroy();
        }
    }
}
