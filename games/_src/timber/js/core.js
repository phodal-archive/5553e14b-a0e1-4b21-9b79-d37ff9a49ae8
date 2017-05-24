//====Created by Linh.===================================================================
/*
 * app.js
 */
var gameid = 'com.songsinh.htmlgames.pikachu';
function checkUpdate() {
    $.ajax({
        url: "http://games.songsinh.com/api/app/latestversion?name=" + gameid,
        type: 'GET',
        contentType: 'application/json',
        data: "",
        dataType: "json",
        success: function (result) {
            if (result !== navigator.appInfo.appVersion) {
                if (confirm("New version is available. Please update in Play Store!") == true) {
                    location.href = "https://play.google.com/store/apps/details?id=" + gameid;;
                }
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
        }
    });
}
/*
 * admob.js
 */
var adLoaded = false;
function initAdmob() {
    admob.rewardvideo.config({
        id: 'ca-app-pub-6851043390764733/8245096009',
        isTesting: false,
        autoShow: false,
    });
    admob.rewardvideo.prepare();
}

function showAd() {
    if (!adLoaded) {
        return;
    } else {
        admob.rewardvideo.show();
    }
}

function updateAdStatus(status) {
    adLoaded = status;
    //document.getElementById("btnAddLife").disabled = !status; // TODO: not used
}

document.addEventListener('admob.rewardvideo.events.LOAD_FAIL', function (event) {
    console.log(event);
    updateAdStatus(false);
    admob.rewardvideo.prepare();
});

document.addEventListener('admob.rewardvideo.events.LOAD', function (event) {
    console.log(event);
    updateAdStatus(true);
});

document.addEventListener('admob.rewardvideo.events.CLOSE', function (event) {
    console.log(event);
    admob.rewardvideo.prepare();
});

document.addEventListener('admob.rewardvideo.events.REWARD', function (event) {
    console.log(event);
    rewardLife(); // DONE
});
/*
 * game.js
 */
function rewardLife() {
    if (game.global.lives == null || game.global.lives == undefined || game.global.lives == NaN) game.global.lives = 10;
    else game.global.lives += 1;
    // TODO: Ask LINH
    // if (game.global.lives > 0)
    //     document.getElementById("btnChange").disabled = false;
    // else
    //     document.getElementById("btnChange").disabled = true;
}

function saveScore(player, score, level, callback) {
    NativePlugin.prepareScore(function (data) {
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

    }, function (error) {
        alert(getString('txt_savescorefailed', lang));
        if (callback) callback();
    }, player, "classic", level, score);
}
/*
 * highscore.js
 */
function loadHighscore() {
    $.ajax({
        url: "http://games.songsinh.com/api/score/highscore?start=" + scoreBoardLength + "&length=10",
        type: 'GET',
        contentType: 'application/json',
        data: "",
        dataType: "json",
        success: function (result) {
            $.each(result, function (index, row) {
                var odd = true;
                if ((index % 2) == 0) odd = false;
                addHighscoreItem(scoreBoardLength + index + 1, row.Player, row.Score, odd);
            });
            scoreBoardLength += result.length;
        },
        error: function (jqXhr, textStatus, errorThrown) {
            alert("ajax failed");
            console.log(JSON.stringify(jqXhr));
            alert(getString('txt_gethighscorefailed', lang));
            closeHighscore();
        }
    });
}