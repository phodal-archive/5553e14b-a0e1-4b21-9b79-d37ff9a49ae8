/**
 * Created by Linh on 4/1/2017.
 */
function newBoard() {
    var div = document.createElement("div");
    div.lines = new Array;
    for (var i = 0; i < 3; i++) {
        div.lines[i] = document.createElement("div");
        div.lines[i].style.position = "absolute";
        div.lines[i].style.visibility = "hidden";
        div.lines[i].style.backgroundColor = "red";
        div.appendChild(div.lines[i]);
    }
    div.arrPiece = engine.newMatrix();
    engine.setMatrix(function(i, j) {
        div.arrPiece[i][j] = newPiece(i, j, 0);
        div.appendChild(div.arrPiece[i][j]);
    });
    div.style.position = "relative";
    div.style.width = PieceWidth * colx + "px";
    div.style.height = PieceHeight * rowx + "px";

    div.setNewLevel = function(newLevel) {
        this.level = newLevel;
        this.score = 0;
        this.isWaiting = false;
        this.arrValue = engine.createMatrix();
        this.applyMatrix();
        this.saveGame();
        var style = "level" + newLevel;
        document.body.setAttribute("class", style);
        repaint("txtLevel", this.level);
        repaint("txtLives", this.lives);
        repaint("txtScore", this.totalScore);
        onGameLoaded();
    }

    div.newGame = function() {
        this.totalScore = 0;
        this.setLives(10);
        this.setNewLevel(1);
    }

    div.saveGame = function() {
        localStorage.setItem("level", this.level);
        localStorage.setItem("lives", this.lives);
        localStorage.setItem("totalscore", this.totalScore);
    }

    div.loadGame = function() {
        var currentLevel = getIntItem("level", 0);
        if (currentLevel === 0) {
            this.newGame();
            return;
        } else {
            this.totalScore = getIntItem("totalscore", 0);
            this.setLives(getIntItem("lives", 10));
            this.setNewLevel(currentLevel);
        }
    }

    div.repairGame = function() {
        if (this.lives <= 0) {
            var ok = confirm("You have no lives. Click OK to add more life or Cancel to return.");
            if (ok) showAd();
        } else {
            engine.repairMatrix(_board.arrValue);
            this.applyMatrix();
            this.setLives(this.lives - 1);
            playAudio(SOUND.GameRepaired);
        }
    }

    div.applyMatrix = function() {
        engine.setMatrix(function(i, j) {
            if (_board.arrValue[i][j] == 0)
                _board.arrPiece[i][j].setVisible(false);
            else {
                _board.arrPiece[i][j].setVisible(true);
                _board.arrPiece[i][j].setSelected(100);
                _board.arrPiece[i][j].setImage(_board.arrValue[i][j]);
            }
        })
    }

    div.setLives = function(val) {
        if (val == null || val == undefined || val == NaN) val = 10;
        this.lives = val;
        localStorage.setItem("lives", this.lives);
        repaint("txtLives", this.lives);
        if (val > 0)
            document.getElementById("btnChange").disabled = false;
        else
            document.getElementById("btnChange").disabled = true;
    }

    div.addLife = function () {
        this.setLives(this.lives + 1);
    }

    div.drawPath = function(points) {
        var point1 = points[0];
        var point2;
        var centre1, centre2;
        var i, rect;
        for (i = 1; i < points.length; i++) {
            point2 = points[i];
            centre1 = new Point(point1.x * PieceWidth + PieceWidth / 2, point1.y * PieceHeight + PieceHeight / 2);
            centre2 = new Point(point2.x * PieceWidth + PieceWidth / 2, point2.y * PieceHeight + PieceHeight / 2);
            rect = getRRR(centre1, centre2);
            this.lines[i - 1].style.left = rect.x + offsetLeft + "px";
            this.lines[i - 1].style.top = rect.y + offsetTop + "px";
            this.lines[i - 1].style.width = rect.width + "px";
            this.lines[i - 1].style.height = rect.height + "px";
            point1 = point2;
        }
        for (i = 1; i < points.length; i++)
            this.lines[i - 1].style.visibility = "visible";
    }

    div.onClickPiece = function(evt, iClick, jClick) {
        playAudio(SOUND.PieceSelected);
        if (this.isWaiting) {
            this.isWaiting = false;
            var list = engine.checkPath(this.arrValue, this.iFist, this.jFist, iClick, jClick);
            if (list != null) {
                this.arrValue[this.iFist][this.jFist] = 0;
                this.arrValue[iClick][jClick] = 0;
                this.arrPiece[this.iFist][this.jFist].setVisible(false);
                this.arrPiece[iClick][jClick].setVisible(false);
                this.drawPath(list);
                setTimeout("onPiecePaired()", 200);
                playAudio(SOUND.PiecePaired);
            } else {
                playAudio(SOUND.NoPath);
                this.arrPiece[this.iFist][this.jFist].setSelected(100);
            }
        } else {
            this.iFist = iClick;
            this.jFist = jClick;
            this.arrPiece[iClick][jClick].setSelected(50);
            this.isWaiting = true;
        }
    }

    div.showCheat = function() {
        var rect = engine.findCheat(this.arrValue);
        this.arrPiece[rect.x][rect.y].setSelected(50);
        this.arrPiece[rect.width][rect.height].setSelected(50);
    }

    return div;
}

function getIntItem(key, defaultValue) {
    var val = localStorage.getItem(key);
    if (val === null) return defaultValue;
    return parseInt(val);
}

function onPiecePaired() {
    // hide lines
    for (var i = 0; i < 3; i++)
        _board.lines[i].style.visibility = "hidden";
    // update score
    _board.score += 10;
    repaint("txtScore", _board.totalScore + _board.score);
    // check win
    if (_board.score == winScore) {
        _board.totalScore += _board.score + elTimebar.tmp;
        if (_board.level == maxLevel) {
            var player = prompt("You win. Please enter your name", "");
            if (player != null) {
                saveScore(player, _board.totalScore, _board.level, _board.newGame());
            }
            //_board.newGame();
        } else {
            alert(getString("txt_levelcompleted", lang));
            showAd();
            _board.setNewLevel(_board.level + 1);
        }
        return;
    }
    // repaire matrix
    if (mode === "classic") {
        engine.fixMatrix(_board.arrValue, _board.level);
        _board.applyMatrix();
    }
    // check no more pair
    if (engine.isEnd(_board.arrValue)) {
        if (_board.lives <= 0) {
            var ok = confirm("You have no lives. Click OK to add more life or Cancel to start new game.");
            if (ok) {
                showAd();
            } else {
                _board.newGame();
            }
        } else {
            alert(getString('txt_nopair', lang));
            _board.repairGame();
        }
    }
}

function getRRR(p1, p2) {
    var x1, y1, x2, y2;
    if (p1.x < p2.x) {
        x1 = p1.x;
        x2 = p2.x;
    } else {
        x2 = p1.x;
        x1 = p2.x;
    }
    if (p1.y < p2.y) {
        y1 = p1.y;
        y2 = p2.y;
    } else {
        y2 = p1.y;
        y1 = p2.y;
    }
    return new Rectangle(x1 - 3, y1 - 3, x2 - x1 + 6, y2 - y1 + 6);
}