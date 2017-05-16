/**
 * Created by Linh on 5/8/2017.
 */
var SOUND = {
    GameOver: "sound7",
    NoLife: "sound7",
    GameLoaded: "sound4",
    GameRepaired: "sound8",
    PieceSelected: "sound2",
    PiecePaired: "sound5",
    NoPath: "sound1"
};

var playSound = true;

function setAudioElement(pn, file) {
    if (typeof(file) == 'undefined')
        file = pn;
    var html = "<source src='sound/" + file + ".mp3' />";
    html += "<source src='sound/" + file + ".ogg' />";
    var audio = document.createElement("AUDIO");
    audio.id = pn;
    audio.innerHTML = html;
    document.body.appendChild(audio);
}

function playAudio(file) {
    if (!playSound) return;
    var pn = "audio" + file;
    var pid = document.getElementById(pn);
    if (!pid) {
        setAudioElement(pn, file);
        pid = document.getElementById(pn);
    }
    pid.play();

}

function changeSound() {
    var change_soundID = document.getElementById("btnChangeSound");
    if (playSound) {
        playSound = false;
        change_soundID.setAttribute("class", "soundOff");
    } else {
        playSound = true;
        change_soundID.setAttribute("class", "soundOn");
    }
    localStorage.setItem("playSound", playSound);
}

function initSound() {
    playSound = localStorage.getItem("playSound");
    if (playSound == null || playSound == undefined) {
        playSound = true;
    }
    changeSound();
}