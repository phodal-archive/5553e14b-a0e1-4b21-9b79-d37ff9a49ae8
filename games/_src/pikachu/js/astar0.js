function GraphNode(t, e, i) {
    this.data = {}, this.x = t, this.y = e, this.pos = {
        x: t,
        y: e
    }, this.type = i
}

function BinaryHeap(t) {
    this.content = [], this.scoreFunction = t
}

var AStar = AStar || {}, GraphNodeType = {
        OPEN: 0
    };

AStar.Graph = function (t) {
    for (var e = [], i = 0; i < t.length; i++) {
        e[i] = [];
        for (var n = 0, o = t[i]; n < o.length; n++) e[i][n] = new GraphNode(i, n, o[n])
    }
    this.input = t, this.nodes = e
},
AStar.Graph.prototype.toString = function () {
    for (var t, e, i, n, o = "\n", r = this.nodes, s = 0, a = r.length; a > s; s++) {
        for (t = "", e = r[s], i = 0, n = e.length; n > i; i++) t += e[i].type + " ";
        o = o + t + "\n"
    }
    return o
}, GraphNode.prototype.toString = function () {
    return "[" + this.x + " " + this.y + "]"
}, GraphNode.prototype.isWall = function () {
    return this.type != GraphNodeType.OPEN
}, BinaryHeap.prototype = {
    push: function (t) {
        this.content.push(t), this.sinkDown(this.content.length - 1)
    },
    pop: function () {
        var t = this.content[0],
            e = this.content.pop();
        return this.content.length > 0 && (this.content[0] = e, this.bubbleUp(0)), t
    },
    remove: function (t) {
        var e = this.content.indexOf(t),
            i = this.content.pop();
        e !== this.content.length - 1 && (this.content[e] = i, this.scoreFunction(i) < this.scoreFunction(t) ? this.sinkDown(e) : this.bubbleUp(e))
    },
    size: function () {
        return this.content.length
    },
    rescoreElement: function (t) {
        this.sinkDown(this.content.indexOf(t))
    },
    sinkDown: function (t) {
        for (var e = this.content[t]; t > 0;) {
            var i = (t + 1 >> 1) - 1,
                n = this.content[i];
            if (!(this.scoreFunction(e) < this.scoreFunction(n))) break;
            this.content[i] = e, this.content[t] = n, t = i
        }
    },
    bubbleUp: function (t) {
        for (var e = this.content.length, i = this.content[t], n = this.scoreFunction(i);;) {
            var o = t + 1 << 1,
                r = o - 1,
                s = null;
            if (e > r) {
                var a = this.content[r],
                    h = this.scoreFunction(a);
                n > h && (s = r)
            }
            if (e > o) {
                var l = this.content[o],
                    u = this.scoreFunction(l);
                (null === s ? n : h) > u && (s = o)
            }
            if (null === s) break;
            this.content[t] = this.content[s], this.content[s] = i, t = s
        }
    }
}, AStar.astar = {
    init: function (t) {
        for (var e = 0, i = t.length; i > e; e++)
            for (var n = 0, o = t[e].length; o > n; n++) {
                var r = t[e][n];
                r.f = 0, r.g = 0, r.h = 0, r.cost = r.type === GraphNodeType.OPEN ? 1 : 0, r.visited = !1, r.closed = !1, r.parent = null
            }
    },
    heap: function () {
        return new BinaryHeap(function (t) {
            return t.f
        })
    },
    heap2: function () {
        return new BinaryHeap(function (t) {
            return t.g
        })
    },
    search: function (t, e, i, n, o, r, s) {
        AStar.astar.init(t), r = r || AStar.astar.turnCost, o = !! o;
        var a = s ? AStar.astar.heap() : AStar.astar.heap2();
        for (a.push(e); a.size() > 0;) {
            var h = a.pop();
            if (h === i) {
                for (var l = 0, u = h, c = []; u.parent;) {
                    if (l += AStar.astar.isTurn(u.parent, u) ? 1 : 0, l > n) return s ? [] : this.search(t, i, e, n, o, r, !0);
                    c.push(u), u = u.parent
                }
                return c.push(u), c.reverse()
            }
            h.closed = !0;
            for (var d = AStar.astar.neighbors(t, h, o), p = 0, f = d.length; f > p; p++) {
                var m = d[p];
                if (m === i || !m.closed && !m.isWall()) {
                    var g = AStar.astar.isTurn(h, m) ? 1 : 0,
                        v = h.g + m.cost + g,
                        y = m.visited;
                    if (!y || v < m.g) {
                        var b = AStar.astar.neighbors(t, m, o);
                        m.visited = !0, m.parent = h, m.h = m.h || r(m.pos, i.pos, b), m.g = v, m.f = m.g + m.h, y ? a.rescoreElement(m) : a.push(m)
                    }
                }
            }
        }
        return []
    },
    manhattan: function (t, e) {
        var i = Math.abs(e.x - t.x),
            n = Math.abs(e.y - t.y);
        return i + n
    },
    turnCost: function (t, e, i) {
        for (var n = 0, o = 0, r = i.length; r > o; o++) {
            var s = i[o];
            s.isWall() && ((t.x === s.x || t.y === s.y) && (n += 1), (t.x === e.x || t.y === e.y) && (n += 1))
        }
        return n
    },
    neighbors: function (t, e, i) {
        var n = [],
            o = e.x,
            r = e.y;
        return t[o - 1] && t[o - 1][r] && n.push(t[o - 1][r]), t[o + 1] && t[o + 1][r] && n.push(t[o + 1][r]), t[o] && t[o][r - 1] && n.push(t[o][r - 1]), t[o] && t[o][r + 1] && n.push(t[o][r + 1]), i && (t[o - 1] && t[o - 1][r - 1] && n.push(t[o - 1][r - 1]), t[o + 1] && t[o + 1][r - 1] && n.push(t[o + 1][r - 1]), t[o - 1] && t[o - 1][r + 1] && n.push(t[o - 1][r + 1]), t[o + 1] && t[o + 1][r + 1] && n.push(t[o + 1][r + 1])), n
    },
    isTurn: function (t, e) {
        return t.parent ? t.parent.x !== e.x && t.parent.y !== e.y ? !0 : !1 : !1
    },
    dumpGrid: function (t) {
        for (var e = 0; e < t.length; e += 1) {
            for (var i = "", n = 0; n < t[e].length; n += 1) i += t[e][n].type + " ";
            console.log(i)
        }
    }
}