var Game = {
    ground: null,
    player: null,
    obstacles: null,
    time_until_spawn: null,
    last_spawn_time: null,
    current_speed: 200,
    speed_inc_amount: 0.05,

    preload: function () {
        game.load.image("ground", "assets/ground.png");
        game.load.image("player", "assets/player.png");
        game.load.image("obstacle", "assets/obstacle.png");
    },

    create: function () {
        game.stage.backgroundColor = "#71c5cf";
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.ground = game.add.sprite(0, game.world.height - 100, "ground");
        //game.physics.arcade.enable(this.ground); sẽ tạo một physic body cho ground để có thể tương tác với các object khác.
        game.physics.arcade.enable(this.ground);
        //Body của ground sẽ được đặt immovable = true để không thể dịch chuyển khi object khác va chạm với nó (chẳng hạn khi nhận vật rơi xuống).
        this.ground.body.immovable = true;
        this.player = game.add.sprite(100, game.world.height - 300, "player");
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 1000;
        spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
        this.obstacles = game.add.group();
        this.obstacles.enableBody = true;
        this.time_until_spawn = Math.random() * 1000 + 1000;
        // game.time.time giúp lấy thời gian hiện tại
        this.last_spawn_time = game.time.time;
    },

    update: function () {
        this.increaseSpeed();
        game.physics.arcade.collide(this.player, this.ground);
        game.physics.arcade.overlap(this.player, this.obstacles, this.endGame, null, this);
        var current_time = game.time.time;
        if (current_time - this.last_spawn_time > this.time_until_spawn) {
            this.time_until_spawn = Math.random() * 1000 + (1000 - this.current_speed);
            this.last_spawn_time = current_time;
            this.spawnObstacle();
        }
    },
    jump: function () {
        if (this.player.body.touching.down) {
            this.player.body.velocity.y = -500;
        }
    },
    spawnObstacle: function () {
        var obstacle = this.obstacles.create(game.world.width, game.world.height - 150, "obstacle");
        // cho các vật cản dịch chuyển từ phải sang trái
        obstacle.body.velocity.x = -200;
        obstacle.checkWorldBounds = true;
        obstacle.outOfBoundsKill = true;
        obstacle.body.velocity.x = -this.current_speed;
    },
    endGame: function () {
        game.state.start("Menu");
    },
    increaseSpeed: function () {
        // giới hạn tốc độ tối đa
        if (this.current_speed < 500) {
            this.current_speed += this.speed_inc_amount;
        }
    }
}