var paused = false;
var lang = "en";
var scale = 1;

function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
}

function onDeviceReady() {
    init();
    initAdmob();
    navigator.globalization.getPreferredLanguage(
        function (language) {
			lang = language.value.substring(0,2);
			repaint("lblLevel",getString("lbl_level", lang));
			repaint("lblLives",getString("lbl_lives", lang));
			repaint("lblScore",getString("lbl_score", lang));
            repaint("lblHighscore",getString("lbl_highscore", lang));
        },
        function () {
            lang = "en";
        }
    );	
}

function onPause() { paused = true; }

function onResume() { paused = false; }

function checkUpdate() {
    $.ajax({
        url: "http://games.songsinh.com/api/app/latestversion?name=com.songsinh.htmlgames.pikachu",
        type: 'GET',
        contentType: 'application/json',
        data: "",
        dataType: "json",
        success: function (result) {
            if (result !== navigator.appInfo.appVersion) {
                if (confirm("New version is available. Please update in Play Store!") == true) {
                    location.href = "https://play.google.com/store/apps/details?id=com.songsinh.htmlgames.pikachu";
                }
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
        }
    });
}