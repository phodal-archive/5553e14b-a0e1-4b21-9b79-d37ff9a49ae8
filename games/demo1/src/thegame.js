var theGame = function(game){
    spriteNumber = null;
    number = 0;
    workingButtons = true;
    higher = true;
    score = 0;
}
 
theGame.prototype = {
      create: function(){
          var x1 = this.game.width - 320;
      score = 0;
        number = Math.floor(Math.random()*10);
          var x2 = this.game.width - 100;
        spriteNumber = this.game.add.sprite(x2/2,240,"numbers");
        //spriteNumber.anchor.setTo(0.5,0.5);
        spriteNumber.frame = number;   
        var higherButton = this.game.add.button(x1/2,100,"higher",this.clickedHigher,this);
        //higherButton.anchor.setTo(0.5,0.5);
        var lowerButton = this.game.add.button(x1/2,380,"lower",this.clickedLower,this);
        //lowerButton.anchor.setTo(0.5,0.5);   
    },
 
    clickedHigher: function(){
        higher=true;
        this.tweenNumber(true);
    },
 
    clickedLower: function(){
        higher=false;
        this.tweenNumber(false);
    },
 
    tweenNumber: function(higher){
        if(workingButtons){
            workingButtons=false;
            var exitTween = this.game.add.tween(spriteNumber);
              exitTween.to({x:this.game.width},500);
             exitTween.onComplete.add(this.exitNumber,this);
              exitTween.start();
         }
 
    },
    exitNumber: function(){
        spriteNumber.x = 0;
         spriteNumber.frame = Math.floor(Math.random()*10);
         var enterTween = this.game.add.tween(spriteNumber);
         var x2 = this.game.width - 100;
         enterTween.to({x:x2/2},500);
         enterTween.onComplete.add(this.enterNumber,this);
         enterTween.start();
     
    },
 
    enterNumber: function(){
        workingButtons=true;
        if((higher && spriteNumber.frame<number)||(!higher && spriteNumber.frame>number)){
            this.game.state.start("GameOver",true,false,score);   
            //tham số đầu là tên state , tham số thứ 2 clearWorld   default là true  , tham số thứ 3 là clearCache default là false chúng ta thường không dùng nó vì nó sẽ xóa hết asset. Tất cả tham số kể từ thứ 4 là biến của ta. Tôi sẽ truyền vào score vì cần thể hiện điểm người chơi đạt được
        }
 
        else{ 
            score++;
            number = spriteNumber.frame;
        }   
    }
}