//Boot chính là state đặc biệt của chúng ta chỉ với nhiệm vụ là điều chính kích cỡ màn hình để phù hợp và lấy ảnh loading (để dùng cho state sau). Khi đã căn chỉnh xong ta tới với state tiếp theo Preload với preload.js

var boot = function(game){
    console.log("%cStarting my awesome game", "color:white; background:red");
};
boot.prototype = {
    preload: function(){
        this.game.load.image("loading","assets/loading.png");
    },
    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize = true;
        this.game.state.start("Preload");
    }
}