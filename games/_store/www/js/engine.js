/**
 * Created by Linh on 4/17/2017.
 */
var cols, rows, colx, rowx, cells, cellx, blocks;
var C_MAXOCCURS = 4;
var C_BLOCK = 37;

var UU = new Array(0, 0, 1, -1);
var VV = new Array(1, -1, 0, 0);

var engine = {

    config: function(c, r, b) {
        cols = c;
        rows = r;
        colx = cols + 2;
        rowx = rows + 2;
        cells = cols * rows;
        cellx = colx * rowx;
        blocks = b;
        winScore = (cells - (blocks * C_MAXOCCURS)) * 10 / 2;
    },

    newMatrix: function() {
        var a = new Array;
        var i;
        for (i = 0; i < colx; i++)
            a[i] = new Array;
        return a;
    },

    setMatrix: function(f) {
        var i, j;
        for (i = 1; i <= cols; i++)
            for (j = 1; j <= rows; j++)
                f(i, j);
    },

    createMatrix: function() {
        var a = this.newMatrix();
        var i, j, remain, maxval;

        for (i = 0; i < colx; i++)
            for (j = 0; j < rowx; j++)
                a[i][j] = 0;
        remain = cells;
        maxval = cells / C_MAXOCCURS;
        for (i = 1; i <= maxval - blocks; i++) {
            for (j = 1; j <= C_MAXOCCURS; j++) {
                this.setNewItem(getRandom(remain--) + 1, i, a);
            }
        }
        for (i = 1; i <= blocks; i++) {
            for (j = 1; j <= C_MAXOCCURS; j++) {
                this.setNewItem(getRandom(remain--) + 1, C_BLOCK, a);
            }
        }
        return a;
    },

    setNewItem: function(index, val, a) {
        var i, j;
        for (i = 1; i <= cols; i++) {
            for (j = 1; j <= rows; j++) {
                if (a[i][j] == 0) {
                    index--;
                    if (index == 0) {
                        a[i][j] = val;
                        return;
                    }
                }
            }
        }
    },

    myInside: function(i, j) {
        return i >= 0 && i < (colx) && j >= 0 && j < (rowx);
    },

    repairMatrix: function(a) {
        var b = new Array;
        var i, j, k = 0;
        for (i = 1; i <= cols; i++)
            for (j = 1; j <= rows; j++)
                if (a[i][j] > 0) b[k++] = a[i][j];
        mixArray(b, k);
        k = 0;
        for (i = 1; i <= cols; i++)
            for (j = 1; j <= rows; j++)
                if (a[i][j] > 0) a[i][j] = b[k++];
        var tmp = this.newMatrix();
        for (i = 0; i < colx; i++)
            for (j = 0; j < rowx; j++)
                tmp[i][j] = a[i][j] > 0 ? 1 : 0;
        var rect = this.findCheat(tmp);
        var k = 0;
        var u = 0,
            v = 0;
        for (i = 1; i <= cols; i++) {
            if (k > 0) break;
            else {
                for (j = 1; j <= rows; j++) {
                    if (i != rect.x || j != rect.y) {
                        if (a[i][j] == a[rect.x][rect.y]) {
                            u = i;
                            v = j;
                            k = 1;
                            break;
                        }
                    }
                }
            }
        }
        swap(a, rect.width, rect.height, u, v);
    },

    checkPath: function(a, i1, j1, i2, j2) {
        if (i1 == i2 && j1 == j2) return null;
        if (a[i1][j1] == 0 || a[i2][j2] == 0) return null;
        if (a[i1][j1] != a[i2][j2]) return null;
        var fist, last, i, j, t;
        var queue = new Array;
        var dad = this.newMatrix();
        var count = this.newMatrix();
        for (i = 0; i < cellx; i++) queue[i] = new Point(0, 0);
        fist = 0;
        last = 0;
        queue[0].x = i1;
        queue[0].y = j1;
        for (i = 0; i < colx; i++)
            for (j = 0; j < rowx; j++)
                dad[i][j] = new Point(-1, -1);
        dad[i1][j1].x = -2;
        count[i1][j1] = 0;
        var canGo = new Array;
        var p = new Array;
        var q = new Array;
        while (fist <= last) {
            i = queue[fist].x;
            j = queue[fist].y;
            fist++;
            for (t = 0; t < 4; t++) {
                canGo[t] = true;
                p[t] = i;
                q[t] = j;
            }
            do {
                for (t = 0; t < 4; t++) {
                    if (canGo[t]) {
                        p[t] += UU[t];
                        q[t] += VV[t];
                        if (!this.myInside(p[t], q[t])) {
                            canGo[t] = false;
                            continue;
                        }
                        if (p[t] == i2 && q[t] == j2) {
                            dad[p[t]][q[t]].x = i;
                            dad[p[t]][q[t]].y = j;
                            return createArrayList(dad, i2, j2);
                        }
                        if (a[p[t]][q[t]] > 0) {
                            canGo[t] = false;
                            continue;
                        }
                        if (dad[p[t]][q[t]].x != -1) continue;
                        if (count[i][j] == 2) continue;
                        last++;
                        queue[last].x = p[t];
                        queue[last].y = q[t];
                        dad[p[t]][q[t]].x = i;
                        dad[p[t]][q[t]].y = j;
                        count[p[t]][q[t]] = count[i][j] + 1;
                    }
                }
            } while (canGo[0] || canGo[1] || canGo[2] || canGo[3]);
        }
        return null;
    },

    findCheat: function(a) {
        var i, j;
        var b = new Array;
        var c = new Array;
        var k = 0;
        for (i = 1; i <= cols; i++)
            for (j = 1; j <= rows; j++)
                if (a[i][j] > 0) {
                    b[k] = i;
                    c[k] = j;
                    k++;
                }
        mixArray2(b, c, k);
        for (i = 0; i < k - 1; i++)
            for (j = k - 1; j > i; j--)
                if (this.checkPath(a, b[i], c[i], b[j], c[j]) != null)
                    return new Rectangle(b[i], c[i], b[j], c[j]);
        return null;
    },

    findTwin: function(a, i1, j1) {
    var fist, last, i, j, t;
    var queue = new Array;
    var cx = this.newMatrix();
    var count = this.newMatrix();
    for (i = 0; i < cellx; i++) queue[i] = new Point();
    fist = 0;
    last = 0;
    queue[0].x = i1;
    queue[0].y = j1;
    for (i = 0; i < colx; i++)
        for (j = 0; j < rowx; j++) cx[i][j] = true;
    cx[i1][j1] = false;
    count[i1][j1] = 0;
    var canGo = new Array;
    var p = new Array;
    var q = new Array;
    while (fist <= last) {
        i = queue[fist].x;
        j = queue[fist].y;
        fist++;
        for (t = 0; t < 4; t++) {
            canGo[t] = true;
            p[t] = i;
            q[t] = j;
        }
        do {
            for (t = 0; t < 4; t++) {
                if (canGo[t]) {
                    p[t] += UU[t];
                    q[t] += VV[t];
                    if (!this.myInside(p[t], q[t])) {
                        canGo[t] = false;
                        continue;
                    }
                    if (a[p[t]][q[t]] == a[i1][j1] && cx[p[t]][q[t]])
                        return new Point(p[t], q[t]);
                    if (a[p[t]][q[t]] > 0) {
                        canGo[t] = false;
                        continue;
                    }
                    if (!cx[p[t]][q[t]]) continue;
                    if (count[i][j] == 2) continue;
                    last++;
                    queue[last].x = p[t];
                    queue[last].y = q[t];
                    cx[p[t]][q[t]] = false;
                    count[p[t]][q[t]] = count[i][j] + 1;
                }
            }
        } while (canGo[0] || canGo[1] || canGo[2] || canGo[3]);
    }
    return null;
},

    isEnd: function(a) {
        var i, j;
        for (i = 1; i <= cols; i++)
            for (j = 1; j <= rows; j++)
                if ((a[i][j] > 0) && (a[i][j] !== C_BLOCK))
                    if (this.findTwin(a, i, j) != null)
                        return false;
        return true;
    },

    fixMatrix: function(a, fixType) {
        if (fixType == 1) return;
        if (fixType == 2) {
            this.fixZone(a, 1, 1, 16, 9, 0);
        } else if (fixType == 3) {
            this.fixZone(a, 1, 1, 16, 9, 1);
        } else if (fixType == 4) {
            this.fixZone(a, 1, 1, 16, 9, 3);
        } else if (fixType == 5) {
            this.fixZone(a, 1, 1, 16, 9, 2);
        } else if (fixType == 6) {
            this.fixZone(a, 1, 5, 16, 9, 0);
            this.fixZone(a, 1, 1, 16, 4, 1);
        } else if (fixType == 7) {
            this.fixZone(a, 1, 5, 16, 9, 1);
            this.fixZone(a, 1, 1, 16, 4, 0);
        } else if (fixType == 8) {
            this.fixZone(a, 1, 1, 8, 9, 3);
            this.fixZone(a, 9, 1, 16, 9, 2);
        } else {
            this.fixZone(a, 1, 1, 8, 9, 2);
            this.fixZone(a, 9, 1, 16, 9, 3);
        }
    },

    fixZone: function(a, i1, j1, i2, j2, vector) {
        var i, j, p, q;
        var stop;
        do {
            stop = true;
            for (i = i1; i <= i2; i++)
                for (j = j1; j <= j2; j++)
                    if (a[i][j] > 0) {
                        p = i + UU[vector];
                        q = j + VV[vector];
                        if (p >= 1 && p <= 16 && q >= 1 && q <= 9) {
                            if (a[p][q] == 0) {
                                swap(a, i, j, p, q);
                                stop = false;
                            }
                        }
                    }
        } while (!stop);
    },
}

function mixArray(a, n) {
    var b = generateHV(n);
    var c = new Array;
    for (var i = 0; i < n; i++)
        c[i] = a[b[i]];
    for (var i = 0; i < n; i++)
        a[i] = c[i];
}

function mixArray2(a, aa, n) {
    var b = generateHV(n);
    var c = new Array;
    var i;
    for (i = 0; i < n; i++)
        c[i] = a[b[i]];
    for (i = 0; i < n; i++)
        a[i] = c[i];
    for (i = 0; i < n; i++)
        c[i] = aa[b[i]];
    for (i = 0; i < n; i++)
        aa[i] = c[i];
}

function generateHV(n) {
    var a = new Array;
    var i, j, k, t;
    for (i = 0; i < n; i++) a[i] = n;
    j = n;
    for (i = 0; i < n; i++) {
        k = getRandom(j--) + 1;
        t = 0;
        while (k > 0) {
            if (a[t++] == n) k--;
        }
        a[t - 1] = i;
    }
    return a;
}

function swap(a, i1, j1, i2, j2) {
    var tmp = a[i1][j1];
    a[i1][j1] = a[i2][j2];
    a[i2][j2] = tmp;
}

function getRandom(n) {
    return Math.round(Math.random() * (n - 1));
}

function createArrayList(dad, i, j) {
    arrayList = new Array;
    var p, q;
    do {
        arrayList.push(new Point(i, j));
        p = dad[i][j].x;
        q = dad[i][j].y;
        i = p;
        j = q;
    } while (i != -2);
    return arrayList;
}
