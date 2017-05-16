var _board;
var timeID = 0;
var maxTime = 480;
var elTimebar = document.getElementById("timebar");
var PieceWidth = 40;
var PieceHeight = 40;
var offsetTop = -40;//header height
var offsetLeft = 0;
var maxLevel = 9;
var winScore = 720;
var mode = "";

function init() {
    engine.config(16, 9, 3);
    var minHeight = PieceHeight * rowx;
    var windowHeight = window.innerHeight;
    if (windowHeight < minHeight) {
        scale = windowHeight / minHeight;
        document.body.style.zoom = scale;
    }
    console.log(scale);
    offsetLeft  = ((screen.width / scale) - (PieceWidth * colx)) / 2;
    document.getElementById("header").style.visibility = "visible";
    initSound();
    var list = new Array;
    var i;
    for (i = 1; i <= 37; i++) list.push(getImagePath(i));
    var t = new ImagePreloader(list, play);
}

function play() {
    _board = newBoard();
    _board.loadGame();
    document.getElementById("board").appendChild(_board);
    document.getElementById("maintable").style.visibility = "visible";
}

function replay() {
    _board.newGame();
}

function change() {
    _board.repairGame();
}

function onGameLoaded() {
    playAudio(SOUND.GameLoaded);
    if (timeID > 0) clearInterval(timeID);
    elTimebar.tmp = maxTime;
    elTimebar.style.width = maxTime / 2 + "px";
    timeID = setInterval("decTime()", 1250);
}

function decTime() {
    if (paused) return;
    elTimebar.tmp--;
    elTimebar.style.width = elTimebar.tmp / 2 + "px";
    if (elTimebar.tmp == 0) {
        playAudio(SOUND.GameOver);
        alert(getString('txt_gameover', lang));
        replay();
    }
}

function rewardLife() {
    _board.addLife();
}

function saveScore(player, score, level, callback) {
    NativePlugin.prepareScore(function(data) {
        var d = new Date();
        $.ajax({
            url: "http://games.songsinh.com/api/score/savescore",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: "json",
            success: function (result) {
                alert(getString('txt_yourrankis', lang) + result + ". " + getString('txt_playagain', lang));
            },
            error: function (jqXhr, textStatus, errorThrown) {
                alert(getString('txt_savescorefailed', lang));
            },
            complete: function () {
                if (callback) callback();
            }
        });

    }, function(error) {
        alert(getString('txt_savescorefailed', lang));
        if (callback) callback();
    }, player, "classic", level, score);
}