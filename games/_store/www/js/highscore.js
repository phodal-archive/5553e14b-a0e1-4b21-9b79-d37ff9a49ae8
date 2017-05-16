/**
 * Created by Linh on 5/8/2017.
 */
var scrollScoreBoardID = 0;
var scoreBoardLength = 0;

function showHighscore() {
    paused = true;
    if (scrollScoreBoardID > 0) clearInterval(scrollScoreBoardID);
    $("#list").empty();
    scoreBoardLength = 0;
    document.getElementById("scoreboard").style.top = PieceHeight +"px";
    document.getElementById("scoreboard").style.left = PieceWidth + offsetLeft +"px";
    document.getElementById("scoreboard").style.visibility = "visible";
    scrollScoreBoard();
}

function closeHighscore() {
    document.getElementById("scoreboard").style.visibility = "hidden";
    if (scrollScoreBoardID > 0) clearInterval(scrollScoreBoardID);
    paused = false;
}

function loadHighscore() {
    $.ajax({
        url: "http://games.songsinh.com/api/score/highscore?start=" + scoreBoardLength + "&length=10",
        type: 'GET',
        contentType: 'application/json',
        data: "",
        dataType: "json",
        success: function (result) {
            $.each(result, function(index, row){
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

function addHighscoreItem(rank, name, score, odd) {
    var div = document.createElement("div");
    if (odd) {
        div.className = "highscore-item odd";
    } else {
        div.className = "highscore-item even";
    }
    var divrank = document.createElement("div");
    divrank.className = "rank";
    divrank.innerHTML = rank;
    div.appendChild(divrank);
    var divname = document.createElement("div");
    divname.className = "player";
    divname.innerHTML = name;
    div.appendChild(divname);
    var divscore = document.createElement("div");
    divscore.className = "score";
    divscore.innerHTML = score;
    div.appendChild(divscore);
    document.getElementById("list").appendChild(div);
}

function scrollScoreBoard(){
    var scrolltop=$('#list').attr('scrollTop');
    var scrollheight=$('#list').attr('scrollHeight');
    var windowheight=$('#list').attr('clientHeight');
    var scrolloffset=2;
    if(scrolltop>=(scrollheight-(windowheight+scrolloffset)))
    {
        loadHighscore();
    }
    scrollScoreBoardID = setTimeout('scrollScoreBoard();', 1000);
}
