/**
 AStar

 Copyright (c) 2010, Brian Grinstead, http://briangrinstead.com

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

/**
 HTML5 Boilerplate

 Copyright (c) HTML5 Boilerplate

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do
 so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

/**
 hammer.js

 Copyright (C) 2013 by Jorik Tangelder (Eight Media)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */

/**

 pixi.js

 The MIT License

 Copyright (c) 2013-2014 Mathew Groves

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */

/**

 state-machine.js

 Copyright (c) 2012, 2013 Jake Gordon and contributors

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

/**

 tween.js

 The MIT License

 Copyright (c) 2010-2012 Tween.js authors.

 Easing equations Copyright (c) 2001 Robert Penner http://robertpenner.com/easing/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */
function GraphNode(t, e, i) {
    this.data = {}, this.x = t, this.y = e, this.pos = {
        x: t,
        y: e
    }, this.type = i
}

function BinaryHeap(t) {
    this.content = [], this.scoreFunction = t
}! function (t) {
    var e = {
        VERSION: "2.2.0",
        Result: {
            SUCCEEDED: 1,
            NOTRANSITION: 2,
            CANCELLED: 3,
            PENDING: 4
        },
        Error: {
            INVALID_TRANSITION: 100,
            PENDING_TRANSITION: 200,
            INVALID_CALLBACK: 300
        },
        WILDCARD: "*",
        ASYNC: "async",
        create: function (t, i) {
            var n = "string" == typeof t.initial ? {
                state: t.initial
            } : t.initial,
                o = t.terminal || t["final"],
                r = i || t.target || {}, s = t.events || [],
                a = t.callbacks || {}, h = {}, l = function (t) {
                    var i = t.from instanceof Array ? t.from : t.from ? [t.from] : [e.WILDCARD];
                    h[t.name] = h[t.name] || {};
                    for (var n = 0; n < i.length; n++) h[t.name][i[n]] = t.to || i[n]
                };
            n && (n.event = n.event || "startup", l({
                name: n.event,
                from: "none",
                to: n.state
            }));
            for (var u = 0; u < s.length; u++) l(s[u]);
            for (var c in h) h.hasOwnProperty(c) && (r[c] = e.buildEvent(c, h[c]));
            for (var c in a) a.hasOwnProperty(c) && (r[c] = a[c]);
            return r.current = "none", r.is = function (t) {
                return t instanceof Array ? t.indexOf(this.current) >= 0 : this.current === t
            }, r.can = function (t) {
                return !this.transition && (h[t].hasOwnProperty(this.current) || h[t].hasOwnProperty(e.WILDCARD))
            }, r.cannot = function (t) {
                return !this.can(t)
            }, r.error = t.error || function (t, e, i, n, o, r, s) {
                throw s || r
            }, r.isFinished = function () {
                return this.is(o)
            }, n && !n.defer && r[n.event](), r
        },
        doCallback: function (t, i, n, o, r, s) {
            if (i) try {
                return i.apply(t, [n, o, r].concat(s))
            } catch (a) {
                return t.error(n, o, r, s, e.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", a)
            }
        },
        beforeAnyEvent: function (t, i, n, o, r) {
            return e.doCallback(t, t.onbeforeevent, i, n, o, r)
        },
        afterAnyEvent: function (t, i, n, o, r) {
            return e.doCallback(t, t.onafterevent || t.onevent, i, n, o, r)
        },
        leaveAnyState: function (t, i, n, o, r) {
            return e.doCallback(t, t.onleavestate, i, n, o, r)
        },
        enterAnyState: function (t, i, n, o, r) {
            return e.doCallback(t, t.onenterstate || t.onstate, i, n, o, r)
        },
        changeState: function (t, i, n, o, r) {
            return e.doCallback(t, t.onchangestate, i, n, o, r)
        },
        beforeThisEvent: function (t, i, n, o, r) {
            return e.doCallback(t, t["onbefore" + i], i, n, o, r)
        },
        afterThisEvent: function (t, i, n, o, r) {
            return e.doCallback(t, t["onafter" + i] || t["on" + i], i, n, o, r)
        },
        leaveThisState: function (t, i, n, o, r) {
            return e.doCallback(t, t["onleave" + n], i, n, o, r)
        },
        enterThisState: function (t, i, n, o, r) {
            return e.doCallback(t, t["onenter" + o] || t["on" + o], i, n, o, r)
        },
        beforeEvent: function (t, i, n, o, r) {
            return !1 === e.beforeThisEvent(t, i, n, o, r) || !1 === e.beforeAnyEvent(t, i, n, o, r) ? !1 : void 0
        },
        afterEvent: function (t, i, n, o, r) {
            e.afterThisEvent(t, i, n, o, r), e.afterAnyEvent(t, i, n, o, r)
        },
        leaveState: function (t, i, n, o, r) {
            var s = e.leaveThisState(t, i, n, o, r),
                a = e.leaveAnyState(t, i, n, o, r);
            return !1 === s || !1 === a ? !1 : e.ASYNC === s || e.ASYNC === a ? e.ASYNC : void 0
        },
        enterState: function (t, i, n, o, r) {
            e.enterThisState(t, i, n, o, r), e.enterAnyState(t, i, n, o, r)
        },
        buildEvent: function (t, i) {
            return function () {
                var n = this.current,
                    o = i[n] || i[e.WILDCARD] || n,
                    r = Array.prototype.slice.call(arguments);
                if (this.transition) return this.error(t, n, o, r, e.Error.PENDING_TRANSITION, "event " + t + " inappropriate because previous transition did not complete");
                if (this.cannot(t)) return this.error(t, n, o, r, e.Error.INVALID_TRANSITION, "event " + t + " inappropriate in current state " + this.current);
                if (!1 === e.beforeEvent(this, t, n, o, r)) return e.Result.CANCELLED;
                if (n === o) return e.afterEvent(this, t, n, o, r), e.Result.NOTRANSITION;
                var s = this;
                this.transition = function () {
                    return s.transition = null, s.current = o, e.enterState(s, t, n, o, r), e.changeState(s, t, n, o, r), e.afterEvent(s, t, n, o, r), e.Result.SUCCEEDED
                }, this.transition.cancel = function () {
                    s.transition = null, e.afterEvent(s, t, n, o, r)
                };
                var a = e.leaveState(this, t, n, o, r);
                return !1 === a ? (this.transition = null, e.Result.CANCELLED) : e.ASYNC === a ? e.Result.PENDING : this.transition ? this.transition() : void 0
            }
        }
    };
    "function" == typeof define ? define("state-machine", ["require"], function () {
        return e
    }) : t.StateMachine = e
}(this),
function (t, e) {
    function i() {
        if (!n.READY) {
            n.event.determineEventTypes();
            for (var t in n.gestures) n.gestures.hasOwnProperty(t) && n.detection.register(n.gestures[t]);
            n.event.onTouch(n.DOCUMENT, n.EVENT_MOVE, n.detection.detect), n.event.onTouch(n.DOCUMENT, n.EVENT_END, n.detection.detect), n.READY = !0
        }
    }
    var n = function (t, e) {
        return new n.Instance(t, e || {})
    };
    n.defaults = {
        stop_browser_behavior: {
            userSelect: "none",
            touchAction: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, n.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, n.HAS_TOUCHEVENTS = "ontouchstart" in t, n.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, n.NO_MOUSEEVENTS = n.HAS_TOUCHEVENTS && navigator.userAgent.match(n.MOBILE_REGEX), n.EVENT_TYPES = {}, n.DIRECTION_DOWN = "down", n.DIRECTION_LEFT = "left", n.DIRECTION_UP = "up", n.DIRECTION_RIGHT = "right", n.POINTER_MOUSE = "mouse", n.POINTER_TOUCH = "touch", n.POINTER_PEN = "pen", n.EVENT_START = "start", n.EVENT_MOVE = "move", n.EVENT_END = "end", n.DOCUMENT = document, n.plugins = {}, n.READY = !1, n.Instance = function (t, e) {
        var o = this;
        return i(), this.element = t, this.enabled = !0, this.options = n.utils.extend(n.utils.extend({}, n.defaults), e || {}), this.options.stop_browser_behavior && n.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), n.event.onTouch(t, n.EVENT_START, function (t) {
            o.enabled && n.detection.startDetect(o, t)
        }), this
    }, n.Instance.prototype = {
        on: function (t, e) {
            for (var i = t.split(" "), n = 0; n < i.length; n++) this.element.addEventListener(i[n], e, !1);
            return this
        },
        off: function (t, e) {
            for (var i = t.split(" "), n = 0; n < i.length; n++) this.element.removeEventListener(i[n], e, !1);
            return this
        },
        trigger: function (t, e) {
            var i = n.DOCUMENT.createEvent("Event");
            i.initEvent(t, !0, !0), i.gesture = e;
            var o = this.element;
            return n.utils.hasParent(e.target, o) && (o = e.target), o.dispatchEvent(i), this
        },
        enable: function (t) {
            return this.enabled = t, this
        }
    };
    var o = null,
        r = !1,
        s = !1;
    n.event = {
        bindDom: function (t, e, i) {
            for (var n = e.split(" "), o = 0; o < n.length; o++) t.addEventListener(n[o], i, !1)
        },
        onTouch: function (t, e, i) {
            var a = this;
            this.bindDom(t, n.EVENT_TYPES[e], function (h) {
                var l = h.type.toLowerCase();
                if (!l.match(/mouse/) || !s) {
                    (l.match(/touch/) || l.match(/pointerdown/) || l.match(/mouse/) && 1 === h.which) && (r = !0), l.match(/touch|pointer/) && (s = !0);
                    var u = 0;
                    r && (n.HAS_POINTEREVENTS && e != n.EVENT_END ? u = n.PointerEvent.updatePointer(e, h) : l.match(/touch/) ? u = h.touches.length : s || (u = l.match(/up/) ? 0 : 1), u > 0 && e == n.EVENT_END ? e = n.EVENT_MOVE : u || (e = n.EVENT_END), u || null === o ? o = h : h = o, i.call(n.detection, a.collectEventData(t, e, h)), n.HAS_POINTEREVENTS && e == n.EVENT_END && (u = n.PointerEvent.updatePointer(e, h))), u || (o = null, r = !1, s = !1, n.PointerEvent.reset())
                }
            })
        },
        determineEventTypes: function () {
            var t;
            t = n.HAS_POINTEREVENTS ? n.PointerEvent.getEvents() : n.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], n.EVENT_TYPES[n.EVENT_START] = t[0], n.EVENT_TYPES[n.EVENT_MOVE] = t[1], n.EVENT_TYPES[n.EVENT_END] = t[2]
        },
        getTouchList: function (t) {
            return n.HAS_POINTEREVENTS ? n.PointerEvent.getTouchList() : t.touches ? t.touches : [{
                identifier: 1,
                pageX: t.pageX,
                pageY: t.pageY,
                target: t.target
            }]
        },
        collectEventData: function (t, e, i) {
            var o = this.getTouchList(i, e),
                r = n.POINTER_TOUCH;
            return (i.type.match(/mouse/) || n.PointerEvent.matchType(n.POINTER_MOUSE, i)) && (r = n.POINTER_MOUSE), {
                center: n.utils.getCenter(o),
                timeStamp: (new Date).getTime(),
                target: i.target,
                touches: o,
                eventType: e,
                pointerType: r,
                srcEvent: i,
                preventDefault: function () {
                    this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                },
                stopPropagation: function () {
                    this.srcEvent.stopPropagation()
                },
                stopDetect: function () {
                    return n.detection.stopDetect()
                }
            }
        }
    }, n.PointerEvent = {
        pointers: {},
        getTouchList: function () {
            var t = this,
                e = [];
            return Object.keys(t.pointers).sort().forEach(function (i) {
                e.push(t.pointers[i])
            }), e
        },
        updatePointer: function (t, e) {
            return t == n.EVENT_END ? this.pointers = {} : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e), Object.keys(this.pointers).length
        },
        matchType: function (t, e) {
            if (!e.pointerType) return !1;
            var i = {};
            return i[n.POINTER_MOUSE] = e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == n.POINTER_MOUSE, i[n.POINTER_TOUCH] = e.pointerType == e.MSPOINTER_TYPE_TOUCH || e.pointerType == n.POINTER_TOUCH, i[n.POINTER_PEN] = e.pointerType == e.MSPOINTER_TYPE_PEN || e.pointerType == n.POINTER_PEN, i[t]
        },
        getEvents: function () {
            return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
        },
        reset: function () {
            this.pointers = {}
        }
    }, n.utils = {
        extend: function (t, i, n) {
            for (var o in i) t[o] !== e && n || (t[o] = i[o]);
            return t
        },
        hasParent: function (t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        },
        getCenter: function (t) {
            for (var e = [], i = [], n = 0, o = t.length; o > n; n++) e.push(t[n].pageX), i.push(t[n].pageY);
            return {
                pageX: (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2,
                pageY: (Math.min.apply(Math, i) + Math.max.apply(Math, i)) / 2
            }
        },
        getVelocity: function (t, e, i) {
            return {
                x: Math.abs(e / t) || 0,
                y: Math.abs(i / t) || 0
            }
        },
        getAngle: function (t, e) {
            var i = e.pageY - t.pageY,
                n = e.pageX - t.pageX;
            return 180 * Math.atan2(i, n) / Math.PI
        },
        getDirection: function (t, e) {
            var i = Math.abs(t.pageX - e.pageX),
                o = Math.abs(t.pageY - e.pageY);
            return i >= o ? t.pageX - e.pageX > 0 ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT : t.pageY - e.pageY > 0 ? n.DIRECTION_UP : n.DIRECTION_DOWN
        },
        getDistance: function (t, e) {
            var i = e.pageX - t.pageX,
                n = e.pageY - t.pageY;
            return Math.sqrt(i * i + n * n)
        },
        getScale: function (t, e) {
            return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
        },
        getRotation: function (t, e) {
            return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
        },
        isVertical: function (t) {
            return t == n.DIRECTION_UP || t == n.DIRECTION_DOWN
        },
        stopDefaultBrowserBehavior: function (t, e) {
            var i, n = ["webkit", "khtml", "moz", "ms", "o", ""];
            if (e && t.style) {
                for (var o = 0; o < n.length; o++)
                    for (var r in e) e.hasOwnProperty(r) && (i = r, n[o] && (i = n[o] + i.substring(0, 1).toUpperCase() + i.substring(1)), t.style[i] = e[r]);
                "none" == e.userSelect && (t.onselectstart = function () {
                    return !1
                })
            }
        }
    }, n.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: !1,
        startDetect: function (t, e) {
            this.current || (this.stopped = !1, this.current = {
                inst: t,
                startEvent: n.utils.extend({}, e),
                lastEvent: !1,
                name: ""
            }, this.detect(e))
        },
        detect: function (t) {
            if (this.current && !this.stopped) {
                t = this.extendEventData(t);
                for (var e = this.current.inst.options, i = 0, o = this.gestures.length; o > i; i++) {
                    var r = this.gestures[i];
                    if (!this.stopped && e[r.name] !== !1 && r.handler.call(r, t, this.current.inst) === !1) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = t), t.eventType == n.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t
            }
        },
        stopDetect: function () {
            this.previous = n.utils.extend({}, this.current), this.current = null, this.stopped = !0
        },
        extendEventData: function (t) {
            var e = this.current.startEvent;
            if (e && (t.touches.length != e.touches.length || t.touches === e.touches)) {
                e.touches = [];
                for (var i = 0, o = t.touches.length; o > i; i++) e.touches.push(n.utils.extend({}, t.touches[i]))
            }
            var r = t.timeStamp - e.timeStamp,
                s = t.center.pageX - e.center.pageX,
                a = t.center.pageY - e.center.pageY,
                h = n.utils.getVelocity(r, s, a);
            return n.utils.extend(t, {
                deltaTime: r,
                deltaX: s,
                deltaY: a,
                velocityX: h.x,
                velocityY: h.y,
                distance: n.utils.getDistance(e.center, t.center),
                angle: n.utils.getAngle(e.center, t.center),
                direction: n.utils.getDirection(e.center, t.center),
                scale: n.utils.getScale(e.touches, t.touches),
                rotation: n.utils.getRotation(e.touches, t.touches),
                startEvent: e
            }), t
        },
        register: function (t) {
            var i = t.defaults || {};
            return i[t.name] === e && (i[t.name] = !0), n.utils.extend(n.defaults, i, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function (t, e) {
                return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
            }), this.gestures
        }
    }, n.gestures = n.gestures || {}, n.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function (t, e) {
            switch (t.eventType) {
            case n.EVENT_START:
                clearTimeout(this.timer), n.detection.current.name = this.name, this.timer = setTimeout(function () {
                    "hold" == n.detection.current.name && e.trigger("hold", t)
                }, e.options.hold_timeout);
                break;
            case n.EVENT_MOVE:
                t.distance > e.options.hold_threshold && clearTimeout(this.timer);
                break;
            case n.EVENT_END:
                clearTimeout(this.timer)
            }
        }
    }, n.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: !0,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function (t, e) {
            if (t.eventType == n.EVENT_END) {
                var i = n.detection.previous,
                    o = !1;
                if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance) return;
                i && "tap" == i.name && t.timeStamp - i.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options.doubletap_distance && (e.trigger("doubletap", t), o = !0), (!o || e.options.tap_always) && (n.detection.current.name = "tap", e.trigger(n.detection.current.name, t))
            }
        }
    }, n.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipe_max_touches: 1,
            swipe_velocity: .7
        },
        handler: function (t, e) {
            if (t.eventType == n.EVENT_END) {
                if (e.options.swipe_max_touches > 0 && t.touches.length > e.options.swipe_max_touches) return;
                (t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
            }
        }
    }, n.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 10,
            drag_max_touches: 1,
            drag_block_horizontal: !1,
            drag_block_vertical: !1,
            drag_lock_to_axis: !1,
            drag_lock_min_distance: 25
        },
        triggered: !1,
        handler: function (t, e) {
            if (n.detection.current.name != this.name && this.triggered) return e.trigger(this.name + "end", t), this.triggered = !1, void 0;
            if (!(e.options.drag_max_touches > 0 && t.touches.length > e.options.drag_max_touches)) switch (t.eventType) {
            case n.EVENT_START:
                this.triggered = !1;
                break;
            case n.EVENT_MOVE:
                if (t.distance < e.options.drag_min_distance && n.detection.current.name != this.name) return;
                n.detection.current.name = this.name, (n.detection.current.lastEvent.drag_locked_to_axis || e.options.drag_lock_to_axis && e.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
                var i = n.detection.current.lastEvent.direction;
                t.drag_locked_to_axis && i !== t.direction && (t.direction = n.utils.isVertical(i) ? t.deltaY < 0 ? n.DIRECTION_UP : n.DIRECTION_DOWN : t.deltaX < 0 ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT), this.triggered || (e.trigger(this.name + "start", t), this.triggered = !0), e.trigger(this.name, t), e.trigger(this.name + t.direction, t), (e.options.drag_block_vertical && n.utils.isVertical(t.direction) || e.options.drag_block_horizontal && !n.utils.isVertical(t.direction)) && t.preventDefault();
                break;
            case n.EVENT_END:
                this.triggered && e.trigger(this.name + "end", t), this.triggered = !1
            }
        }
    }, n.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: {
            transform_min_scale: .01,
            transform_min_rotation: 1,
            transform_always_block: !1
        },
        triggered: !1,
        handler: function (t, e) {
            if (n.detection.current.name != this.name && this.triggered) return e.trigger(this.name + "end", t), this.triggered = !1, void 0;
            if (!(t.touches.length < 2)) switch (e.options.transform_always_block && t.preventDefault(), t.eventType) {
            case n.EVENT_START:
                this.triggered = !1;
                break;
            case n.EVENT_MOVE:
                var i = Math.abs(1 - t.scale),
                    o = Math.abs(t.rotation);
                if (i < e.options.transform_min_scale && o < e.options.transform_min_rotation) return;
                n.detection.current.name = this.name, this.triggered || (e.trigger(this.name + "start", t), this.triggered = !0), e.trigger(this.name, t), o > e.options.transform_min_rotation && e.trigger("rotate", t), i > e.options.transform_min_scale && (e.trigger("pinch", t), e.trigger("pinch" + (t.scale < 1 ? "in" : "out"), t));
                break;
            case n.EVENT_END:
                this.triggered && e.trigger(this.name + "end", t), this.triggered = !1
            }
        }
    }, n.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {
            prevent_default: !1,
            prevent_mouseevents: !1
        },
        handler: function (t, e) {
            return e.options.prevent_mouseevents && t.pointerType == n.POINTER_MOUSE ? (t.stopDetect(), void 0) : (e.options.prevent_default && t.preventDefault(), t.eventType == n.EVENT_START && e.trigger(this.name, t), void 0)
        }
    }, n.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function (t, e) {
            t.eventType == n.EVENT_END && e.trigger(this.name, t)
        }
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = n : (t.Hammer = n, "function" == typeof t.define && t.define.amd && t.define("hammer", [], function () {
        return n
    }))
}(this), define("hammer", function (t) {
    return function () {
        var e;
        return e || t.Hammer
    }
}(this));

var AStar = AStar || {}, GraphNodeType = {
        OPEN: 0
    };
AStar.Graph = function (t) {
    for (var e = [], i = 0; i < t.length; i++) {
        e[i] = [];
        for (var n = 0, o = t[i]; n < o.length; n++) e[i][n] = new GraphNode(i, n, o[n].kind)
    }
    this.input = t, this.nodes = e
}, AStar.Graph.prototype.toString = function () {
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
}, define("astar", function (t) {
    return function () {
        var e;
        return e || t.AStar
    }
}(this)), void 0 === Date.now && (Date.now = function () {
    return (new Date).valueOf()
});
var TWEEN = TWEEN || function () {
        var t = [];
        return {
            REVISION: "12",
            getAll: function () {
                return t
            },
            removeAll: function () {
                t = []
            },
            add: function (e) {
                t.push(e)
            },
            remove: function (e) {
                var i = t.indexOf(e); - 1 !== i && t.splice(i, 1)
            },
            update: function (e) {
                if (0 === t.length) return !1;
                var i = 0;
                for (e = void 0 !== e ? e : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); i < t.length;) t[i].update(e) ? i++ : t.splice(i, 1);
                return !0
            }
        }
    }();
TWEEN.Tween = function (t) {
    var e = t,
        i = {}, n = {}, o = {}, r = 1e3,
        s = 0,
        a = !1,
        h = !1,
        l = !1,
        u = 0,
        c = null,
        d = TWEEN.Easing.Linear.None,
        p = TWEEN.Interpolation.Linear,
        f = [],
        m = null,
        g = !1,
        v = null,
        y = null;
    for (var b in t) i[b] = parseFloat(t[b], 10);
    this.to = function (t, e) {
        return void 0 !== e && (r = e), n = t, this
    }, this.start = function (t) {
        TWEEN.add(this), h = !0, g = !1, c = void 0 !== t ? t : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(), c += u;
        for (var r in n) {
            if (n[r] instanceof Array) {
                if (0 === n[r].length) continue;
                n[r] = [e[r]].concat(n[r])
            }
            i[r] = e[r], i[r] instanceof Array == !1 && (i[r] *= 1), o[r] = i[r] || 0
        }
        return this
    }, this.stop = function () {
        return h ? (TWEEN.remove(this), h = !1, this.stopChainedTweens(), this) : this
    }, this.stopChainedTweens = function () {
        for (var t = 0, e = f.length; e > t; t++) f[t].stop()
    }, this.delay = function (t) {
        return u = t, this
    }, this.repeat = function (t) {
        return s = t, this
    }, this.yoyo = function (t) {
        return a = t, this
    }, this.easing = function (t) {
        return d = t, this
    }, this.interpolation = function (t) {
        return p = t, this
    }, this.chain = function () {
        return f = arguments, this
    }, this.onStart = function (t) {
        return m = t, this
    }, this.onUpdate = function (t) {
        return v = t, this
    }, this.onComplete = function (t) {
        return y = t, this
    }, this.update = function (t) {
        var h;
        if (c > t) return !0;
        g === !1 && (null !== m && m.call(e), g = !0);
        var b = (t - c) / r;
        b = b > 1 ? 1 : b;
        var x = d(b);
        for (h in n) {
            var w = i[h] || 0,
                T = n[h];
            T instanceof Array ? e[h] = p(T, x) : ("string" == typeof T && (T = w + parseFloat(T, 10)), "number" == typeof T && (e[h] = w + (T - w) * x))
        }
        if (null !== v && v.call(e, x), 1 == b) {
            if (s > 0) {
                isFinite(s) && s--;
                for (h in o) {
                    if ("string" == typeof n[h] && (o[h] = o[h] + parseFloat(n[h], 10)), a) {
                        var _ = o[h];
                        o[h] = n[h], n[h] = _, l = !l
                    }
                    i[h] = o[h]
                }
                return c = t + u, !0
            }
            null !== y && y.call(e);
            for (var S = 0, C = f.length; C > S; S++) f[S].start(t);
            return !1
        }
        return !0
    }
}, TWEEN.Easing = {
    Linear: {
        None: function (t) {
            return t
        }
    },
    Quadratic: {
        In: function (t) {
            return t * t
        },
        Out: function (t) {
            return t * (2 - t)
        },
        InOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }
    },
    Cubic: {
        In: function (t) {
            return t * t * t
        },
        Out: function (t) {
            return --t * t * t + 1
        },
        InOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }
    },
    Quartic: {
        In: function (t) {
            return t * t * t * t
        },
        Out: function (t) {
            return 1 - --t * t * t * t
        },
        InOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }
    },
    Quintic: {
        In: function (t) {
            return t * t * t * t * t
        },
        Out: function (t) {
            return --t * t * t * t * t + 1
        },
        InOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }
    },
    Sinusoidal: {
        In: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        Out: function (t) {
            return Math.sin(t * Math.PI / 2)
        },
        InOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }
    },
    Exponential: {
        In: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        },
        Out: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        },
        InOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
        }
    },
    Circular: {
        In: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        Out: function (t) {
            return Math.sqrt(1 - --t * t)
        },
        InOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }
    },
    Elastic: {
        In: function (t) {
            var e, i = .1,
                n = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * 2 * Math.PI / n)))
        },
        Out: function (t) {
            var e, i = .1,
                n = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * 2 * Math.PI / n) + 1)
        },
        InOut: function (t) {
            var e, i = .1,
                n = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * 2 * Math.PI / n) : .5 * i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * 2 * Math.PI / n) + 1)
        }
    },
    Back: {
        In: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        },
        Out: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        },
        InOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }
    },
    Bounce: {
        In: function (t) {
            return 1 - TWEEN.Easing.Bounce.Out(1 - t)
        },
        Out: function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        },
        InOut: function (t) {
            return .5 > t ? .5 * TWEEN.Easing.Bounce.In(2 * t) : .5 * TWEEN.Easing.Bounce.Out(2 * t - 1) + .5
        }
    }
}, TWEEN.Interpolation = {
    Linear: function (t, e) {
        var i = t.length - 1,
            n = i * e,
            o = Math.floor(n),
            r = TWEEN.Interpolation.Utils.Linear;
        return 0 > e ? r(t[0], t[1], n) : e > 1 ? r(t[i], t[i - 1], i - n) : r(t[o], t[o + 1 > i ? i : o + 1], n - o)
    },
    Bezier: function (t, e) {
        var i, n = 0,
            o = t.length - 1,
            r = Math.pow,
            s = TWEEN.Interpolation.Utils.Bernstein;
        for (i = 0; o >= i; i++) n += r(1 - e, o - i) * r(e, i) * t[i] * s(o, i);
        return n
    },
    CatmullRom: function (t, e) {
        var i = t.length - 1,
            n = i * e,
            o = Math.floor(n),
            r = TWEEN.Interpolation.Utils.CatmullRom;
        return t[0] === t[i] ? (0 > e && (o = Math.floor(n = i * (1 + e))), r(t[(o - 1 + i) % i], t[o], t[(o + 1) % i], t[(o + 2) % i], n - o)) : 0 > e ? t[0] - (r(t[0], t[0], t[1], t[1], -n) - t[0]) : e > 1 ? t[i] - (r(t[i], t[i], t[i - 1], t[i - 1], n - i) - t[i]) : r(t[o ? o - 1 : 0], t[o], t[o + 1 > i ? i : o + 1], t[o + 2 > i ? i : o + 2], n - o)
    },
    Utils: {
        Linear: function (t, e, i) {
            return (e - t) * i + t
        },
        Bernstein: function (t, e) {
            var i = TWEEN.Interpolation.Utils.Factorial;
            return i(t) / i(e) / i(t - e)
        },
        Factorial: function () {
            var t = [1];
            return function (e) {
                var i, n = 1;
                if (t[e]) return t[e];
                for (i = e; i > 1; i--) n *= i;
                return t[e] = n
            }
        }(),
        CatmullRom: function (t, e, i, n, o) {
            var r = .5 * (i - t),
                s = .5 * (n - e),
                a = o * o,
                h = o * a;
            return (2 * e - 2 * i + r + s) * h + (-3 * e + 3 * i - 2 * r - s) * a + r * o + e
        }
    }
}, define("tween", function (t) {
    return function () {
        var e;
        return e || t.TWEEN
    }
}(this)), define("text", ["module"], function (t) {
    var e, i, n, o, r, s = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        h = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        l = "undefined" != typeof location && location.href,
        u = l && location.protocol && location.protocol.replace(/\:/, ""),
        c = l && location.hostname,
        d = l && (location.port || void 0),
        p = {}, f = t.config && t.config() || {};
    return e = {
        version: "2.0.10",
        strip: function (t) {
            if (t) {
                t = t.replace(a, "");
                var e = t.match(h);
                e && (t = e[1])
            } else t = "";
            return t
        },
        jsEscape: function (t) {
            return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: f.createXhr || function () {
            var t, e, i;
            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (e = 0; 3 > e; e += 1) {
                    i = s[e];
                    try {
                        t = new ActiveXObject(i)
                    } catch (n) {}
                    if (t) {
                        s = [i];
                        break
                    }
                }
            return t
        },
        parseName: function (t) {
            var e, i, n, o = !1,
                r = t.indexOf("."),
                s = 0 === t.indexOf("./") || 0 === t.indexOf("../");
            return -1 !== r && (!s || r > 1) ? (e = t.substring(0, r), i = t.substring(r + 1, t.length)) : e = t, n = i || e, r = n.indexOf("!"), -1 !== r && (o = "strip" === n.substring(r + 1), n = n.substring(0, r), i ? i = n : e = n), {
                moduleName: e,
                ext: i,
                strip: o
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function (t, i, n, o) {
            var r, s, a, h = e.xdRegExp.exec(t);
            return h ? (r = h[2], s = h[3], s = s.split(":"), a = s[1], s = s[0], !(r && r !== i || s && s.toLowerCase() !== n.toLowerCase() || (a || s) && a !== o)) : !0
        },
        finishLoad: function (t, i, n, o) {
            n = i ? e.strip(n) : n, f.isBuild && (p[t] = n), o(n)
        },
        load: function (t, i, n, o) {
            if (o.isBuild && !o.inlineText) return n(), void 0;
            f.isBuild = o.isBuild;
            var r = e.parseName(t),
                s = r.moduleName + (r.ext ? "." + r.ext : ""),
                a = i.toUrl(s),
                h = f.useXhr || e.useXhr;
            return 0 === a.indexOf("empty:") ? (n(), void 0) : (!l || h(a, u, c, d) ? e.get(a, function (i) {
                e.finishLoad(t, r.strip, i, n)
            }, function (t) {
                n.error && n.error(t)
            }) : i([s], function (t) {
                e.finishLoad(r.moduleName + "." + r.ext, r.strip, t, n)
            }), void 0)
        },
        write: function (t, i, n) {
            if (p.hasOwnProperty(i)) {
                var o = e.jsEscape(p[i]);
                n.asModule(t + "!" + i, "define(function () { return '" + o + "';});\n")
            }
        },
        writeFile: function (t, i, n, o, r) {
            var s = e.parseName(i),
                a = s.ext ? "." + s.ext : "",
                h = s.moduleName + a,
                l = n.toUrl(s.moduleName + a) + ".js";
            e.load(h, n, function () {
                var i = function (t) {
                    return o(l, t)
                };
                i.asModule = function (t, e) {
                    return o.asModule(t, l, e)
                }, e.write(t, h, i, r)
            }, r)
        }
    }, "node" === f.env || !f.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (i = require.nodeRequire("fs"), e.get = function (t, e, n) {
        try {
            var o = i.readFileSync(t, "utf8");
            0 === o.indexOf("﻿") && (o = o.substring(1)), e(o)
        } catch (r) {
            n(r)
        }
    }) : "xhr" === f.env || !f.env && e.createXhr() ? e.get = function (t, i, n, o) {
        var r, s = e.createXhr();
        if (s.open("GET", t, !0), o)
            for (r in o) o.hasOwnProperty(r) && s.setRequestHeader(r.toLowerCase(), o[r]);
        f.onXhr && f.onXhr(s, t), s.onreadystatechange = function () {
            var e, o;
            4 === s.readyState && (e = s.status, e > 399 && 600 > e ? (o = new Error(t + " HTTP status: " + e), o.xhr = s, n(o)) : i(s.responseText), f.onXhrComplete && f.onXhrComplete(s, t))
        }, s.send(null)
    } : "rhino" === f.env || !f.env && "undefined" != typeof Packages && "undefined" != typeof java ? e.get = function (t, e) {
        var i, n, o = "utf-8",
            r = new java.io.File(t),
            s = java.lang.System.getProperty("line.separator"),
            a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r), o)),
            h = "";
        try {
            for (i = new java.lang.StringBuffer, n = a.readLine(), n && n.length() && 65279 === n.charAt(0) && (n = n.substring(1)), null !== n && i.append(n); null !== (n = a.readLine());) i.append(s), i.append(n);
            h = String(i.toString())
        } finally {
            a.close()
        }
        e(h)
    } : ("xpconnect" === f.env || !f.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (n = Components.classes, o = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), r = "@mozilla.org/windows-registry-key;1" in n, e.get = function (t, e) {
        var i, s, a, h = {};
        r && (t = t.replace(/\//g, "\\")), a = new FileUtils.File(t);
        try {
            i = n["@mozilla.org/network/file-input-stream;1"].createInstance(o.nsIFileInputStream), i.init(a, 1, 0, !1), s = n["@mozilla.org/intl/converter-input-stream;1"].createInstance(o.nsIConverterInputStream), s.init(i, "utf-8", i.available(), o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), s.readString(i.available(), h), s.close(), i.close(), e(h.value)
        } catch (l) {
            throw new Error((a && a.path || "") + ": " + l)
        }
    }), e
}), define("text!version.json", [], function () {
    return '{\n    "name": "Dream Farm Link",\n    "shortname": "dfl",\n    "id": "com.absoluteherogames.DFL",\n    "major": 1,\n    "minor": 2,\n    "build": 39,\n    "date": "2013-12-15",\n    "time": "14:49:55",\n    "string": "1.2.39"\n}\n'
}), define("version", ["text!version.json"], function (t) {
    var e = JSON.parse(t);
    return {
        name: function () {
            return e.name
        },
        id: function () {
            return e.id
        },
        version: function () {
            return e.string + "_" + e.date + "_" + e.time
        }
    }
}), define("absolute/asyncqueue", [], function () {
    var t = function () {
        this._initAsyncQueue()
    };
    return t.prototype._initAsyncQueue = function () {
        this.tasks = new Array, this.current = 0
    }, t.prototype.reset = function () {
        this.current = 0
    }, t.prototype.clear = function () {
        this.tasks = new Array, this.reset()
    }, t.prototype.pushTask = function (t) {
        this.tasks.push(t)
    }, t.prototype.pushTasks = function (t) {
        for (var e in t) this.tasks.push(t[e])
    }, t.prototype.run = function (t, e) {
        this.onProgress = t, this.onComplete = e;
        var i = this;
        if ("function" != typeof this.tasks[0]) throw "Error: task is a " + typeof this.tasks[0] + " not a function!";
        this.tasks[this.current](function (t) {
            i._updateProgress(t)
        }, function () {
            i._runNext()
        })
    }, t.prototype._runNext = function () {
        var t = this;
        if (++this.current < this.tasks.length) {
            if ("function" != typeof this.tasks[this.current]) throw "Error: task is a " + typeof this.tasks[0] + " not a function!";
            this.tasks[this.current](function (e) {
                t._updateProgress(e)
            }, function () {
                t._runNext()
            })
        } else this.onComplete()
    }, t.prototype._updateProgress = function (t) {
        var e = 0;
        this.tasks.length > 0 && (e = this.current / this.tasks.length + 1 / this.tasks.length * t), this.onProgress(e)
    }, t
}), define("absoluteaudio/audioclip", [], function () {
    navigator.userAgent.indexOf("iPhone OS") >= 0;
    var t = function (t, e) {
        this.init(t, e)
    };
    return t.constructor = t, t.prototype.init = function () {}, t.prototype.load = function () {}, t.prototype.seek = function () {}, t.prototype.play = function () {}, t.prototype.pause = function () {}, t.prototype.stop = function () {}, t.prototype.setVolume = function () {}, t.prototype.getVolume = function () {}, t.prototype.mute = function () {}, t.prototype.unmute = function () {}, t.prototype.isMuted = function () {}, t.prototype.prime = function () {}, t
}), define("absoluteaudio/webaudioclip", ["absoluteaudio/audioclip"], function (t) {
    var e = navigator.userAgent.indexOf("iPhone OS") >= 0,
        i = function (t, e, i) {
            this.init(t, e, i)
        };
    return i.constructor = i, i.prototype = Object.create(t.prototype), i.prototype.init = function (e, i, n) {
        t.prototype.init.call(e, i), this.audioContext = n, this.url = e, this.volume = 1, this.offset = 0, this.sourceNode = null, this.gainNode = null, this.muted = !1, this.load(e, i)
    }, i.prototype.load = function (t, e) {
        var i = new XMLHttpRequest;
        i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function () {
            this.audioContext.decodeAudioData(i.response, function (t) {
                this.buffer = t, e && "function" == typeof e && e()
            }.bind(this))
        }.bind(this), i.send()
    }, i.prototype.play = function (t, i, n) {
        var o = t || 0;
        this.loop = !! i, this.onComplete = n, e && this.muted || (this.sourceNode = this.audioContext.createBufferSource(), this.gainNode = "undefined" != typeof this.audioContext.createGainNode ? this.audioContext.createGainNode() : this.audioContext.createGain(), this.sourceNode.loop = i, this.sourceNode.buffer = this.buffer, this.sourceNode.onended = function () {
            n && "function" == typeof n && n()
        }, this.gainNode.gain.value = this.muted ? 0 : this.volume, this.sourceNode.connect(this.gainNode), this.gainNode.connect(this.audioContext.destination), 0 !== o && (o += this.audioContext.currentTime), "undefined" == typeof this.sourceNode.start ? this.sourceNode.noteOn(o) : this.sourceNode.start(o, this.offset))
    }, i.prototype.pause = function () {
        this.stop(), this.offset = this.audioContext.currentTime
    }, i.prototype.stop = function () {
        this.sourceNode && (this.offset = 0, "undefined" == typeof this.sourceNode.start ? this.sourceNode.noteOff(0) : this.sourceNode.stop(0), this.sourceNode = null, this.gainNode = null)
    }, i.prototype.setVolume = function (t) {
        0 > t ? t = 0 : t > 1 && (t = 1), this.volume = t, this.gainNode && (this.gainNode.gain.value = t)
    }, i.prototype.getVolume = function () {
        return this.volume
    }, i.prototype.mute = function () {
        this.muted = !0, this.gainNode && (this.gainNode.gain.value = 0, e && this.pause())
    }, i.prototype.unmute = function () {
        this.muted = !1, this.gainNode && (this.gainNode.gain.value = this.volume, e && this.play(0, this.loop, this.onComplete))
    }, i.prototype.isMuted = function () {
        return this.muted
    }, i
}), define("absoluteaudio/streamedwebaudioclip", [], function () {
    var t = (navigator.userAgent.indexOf("iPhone OS") >= 0, function (t, e, i) {
        this.init(t, e, i)
    });
    return t.prototype.init = function (t, e, i) {
        this.audioContext = i, this.url = t, this.volume = 1, this.offset = 0, this.audioElement = null, this.source = null, this.gainNode = null, this.muted = !1, this.load(t, e)
    }, t.prototype.load = function (t, e) {
        this.audioElement = new Audio, this.audioElement.addEventListener("loadstart", function () {
            e && "function" == typeof e && e()
        }, !1), this.audioElement.src = this.url
    }, t.prototype.play = function (t, e, i) {
        this.audioElement.loop = e, this.source || (this.source = this.audioContext.createMediaElementSource(this.audioElement), this.gainNode = this.audioContext.createGainNode(), this.source.connect(this.gainNode), this.gainNode.connect(this.audioContext.destination), this.gainNode.gain.value = this.muted ? 0 : this.volume), this.audioElement.addEventListener("ended", function () {
            i && "function" == typeof i && i()
        }, !1), this.audioElement.play()
    }, t.prototype.pause = function () {
        this.audioElement && this.audioElement.pause()
    }, t.prototype.stop = function () {
        this.audioElement && this.audioElement.pause()
    }, t.prototype.setVolume = function (t) {
        0 > t ? t = 0 : t > 1 && (t = 1), this.volume = t, this.gainNode && (this.gainNode.gain.value = t)
    }, t.prototype.getVolume = function () {
        return this.volume
    }, t.prototype.mute = function () {
        this.muted = !0, this.gainNode && (this.gainNode.gain.value = 0)
    }, t.prototype.unmute = function () {
        this.gainNode && (this.gainNode.gain.value = this.volume), this.muted = !1
    }, t.prototype.isMuted = function () {
        return this.muted
    }, t
}), define("absoluteaudio/html5audioelementclip", ["absoluteaudio/audioclip"], function (t) {
    var e = !0,
        i = function (t, e, i) {
            this.init(t, e, i)
        };
    return i.constructor = i, i.prototype = Object.create(t.prototype), i.prototype.init = function (e, i, n) {
        t.prototype.init.call(e, i), this.duration = n, this.url = e, this.volume = 1, this.audioElement = null, this.muted = !1, this.loopTimer = null, this.delay = 0, this.loop = !1, this.onComplete = null, 
		this.paused = !0, this.offset = 0, this.load(e, i)
    }, i.prototype.load = function (t, e) {
        this.audioElement = new Audio;
        var i = 0,
            n = 4,
            o = function () {
                4 === this.audioElement.readyState || i++ > n ? e() : setTimeout(o, 250)
            }.bind(this);
        this.audioElement.addEventListener("loadstart", function () {
            o()
        }.bind(this), !1), this.audioElement.src = this.url
    }, t.prototype.seek = function (t) {
        this.offset = t
    }, i.prototype.play = function (t, i, n) {
        try {
            if (this.delay = t, this.loop = i, this.onComplete = n, this.muted && e) return i && (this.paused = !1), void 0;
            if ("undefined" != typeof this.duration) {
                var o = function () {
                    this.audioElement.currentTime >= this.duration ? (this.paused = !1, i ? (this.audioElement.pause(), this.audioElement.currentTime = this.offset, this.play(t, i, n)) : (this.paused = !0, this.audioElement.pause(), n && "function" == typeof n && n())) : this.audioElement.paused || requestAnimationFrame(o)
                }.bind(this);
                requestAnimationFrame(o)
            }
            this.audioElement.currentTime = this.offset, this.audioElement.play()
        } catch (r) {}
    }, i.prototype.pause = function () {
        this._actualPause(), this.paused = !0
    }, i.prototype._actualPause = function () {
        this.audioElement && (this.loopTimer && (clearTimeout(this.loopTimer), this.loopTimer = null), this.audioElement.pause())
    }, i.prototype.stop = function () {
        try {
            this.audioElement && (this.loopTimer && (clearTimeout(this.loopTimer), this.loopTimer = null), this.audioElement.pause(), this.audioElement.currentTime = this.offset)
        } catch (t) {}
    }, i.prototype.setVolume = function (t) {
        0 > t ? t = 0 : t > 1 && (t = 1), this.volume = t, this.audioElement && (this.audioElement = t)
    }, i.prototype.getVolume = function () {
        return this.volume
    }, i.prototype.mute = function () {
        this.muted = !0, this.audioElement && e && !this.paused && this._actualPause()
    }, i.prototype.unmute = function () {
        this.audioElement && this.muted && e && !this.paused && (this.muted = !1, this.play(this.delay, this.loop, this.onComplete)), this.muted = !1
    }, i.prototype.isMuted = function () {
        return this.muted
    }, i.prototype.prime = function () {
        this.audioElement && (this.audioElement.play(), this.audioElement.pause())
    }, i
}), define("absoluteaudio/audiosprite", [], function () {
    var t = null,
        e = function (t, e, i) {
            this.init(t, e, i)
        };
    return e.constructor = e, e.prototype.init = function (t, e, i) {
        this.baseClip = t, this.start = e, this.end = i, this.cancelled = !1, this.muted = !1, this.paused = !0
    }, e.prototype.seek = function (t) {
        this.baseClip.seek(this.offset + t)
    }, e.prototype.play = function (e, i, n) {
        this.delay = e, this.loop = i, this.onComplete = n;
        var o = e || 0;
        if (!this.muted) {
            var r = function () {
                try {
                    this.baseClip.audioElement.pause(), this.paused = !0, this.baseClip.audioElement.currentTime = this.start;
                    var e = function () {
                        this.baseClip.audioElement.currentTime = this.start, this.baseClip.audioElement.currentTime !== this.start ? setTimeout(e, 100) : (this !== t && (t && (t.cancelled = !0), t = this, this.cancelled = !1), this.paused = !1, this.baseClip.audioElement.play(), requestAnimationFrame(s))
                    }.bind(this);
                    e()
                } catch (i) {}
            }.bind(this),
                s = function () {
                    this.cancelled || (this.baseClip.audioElement.currentTime >= this.end ? (this.paused = !1, i ? r() : (this.paused = !0, this.baseClip.audioElement.pause(), n && "function" == typeof n && n())) : this.paused || requestAnimationFrame(s))
                }.bind(this);
            o > 0 ? setTimeout(function () {
                r()
            }.bind(this), 1e3 * o) : r()
        }
    }, e.prototype.pause = function () {
        this.baseClip.pause()
    }, e.prototype.stop = function () {
        this.baseClip.stop()
    }, e.prototype.setVolume = function () {
        this.baseClip.setVolume()
    }, e.prototype.getVolume = function () {
        return this.baseClip.getVolume()
    }, e.prototype.mute = function () {
        this.paused || this.cancelled || this.baseClip.audioElement.pause(), this.muted = !0, this.cancelled = !0
    }, e.prototype.unmute = function () {
        this.muted = !1, this.paused || this.play(this.delay, this.loop, this.onComplete)
    }, e.prototype.isMuted = function () {
        return this.baseClip.isMuted()
    }, e.prototype.prime = function () {}, e
}), define("absoluteaudio/cordovaclip", [], function () {
    var t = function (t, e) {
        this.init(t, e)
    };
    return t.constructor = t, t.prototype.init = function (t, e) {
        this.clip = new Media(t, function () {
            this.loop && !this.cancelled ? this.clip.play() : this.onComplete && "function" == typeof this.onComplete && this.onComplete()
        }.bind(this)), this.muted = !1, this.cancelled = !1, this.paused = !0, e && "function" == typeof e && e()
    }, t.prototype.seek = function () {}, t.prototype.play = function (t, e, i) {
        this.delay = t, this.loop = e, this.onComplete = i;
        var n = t || 0;
        this.paused = !1, this.cancelled = !1, n > 0 ? setTimeout(function () {
            this.clip.play()
        }.bind(this), 1e3 * n) : this.clip.play()
    }, t.prototype.pause = function () {
        this.clip.pause(), this.paused = !0
    }, t.prototype.stop = function () {
        this.cancelled = !0, this.clip.stop()
    }, t.prototype.setVolume = function () {}, t.prototype.getVolume = function () {}, t.prototype.mute = function () {
        setTimeout(function () {
            this.clip.setVolume("0.0"), this.muted = !0
        }.bind(this), 0)
    }, t.prototype.unmute = function () {
        setTimeout(function () {
            this.clip.setVolume("1.0"), this.muted = !1
        }.bind(this), 0)
    }, t.prototype.isMuted = function () {
        return this.muted
    }, t.prototype.prime = function () {}, t
}), define("absoluteaudio/audio", ["absoluteaudio/webaudioclip", "absoluteaudio/streamedwebaudioclip", "absoluteaudio/html5audioelementclip", "absoluteaudio/audiosprite", "absoluteaudio/cordovaclip"], function (t, e, i, n, o) {
    var r = null;
    "undefined" != typeof AudioContext ? r = new AudioContext : "undefined" != typeof webkitAudioContext ? r = new webkitAudioContext : "undefined" != typeof mozAudioContext && (r = new mozAudioContext);
    var s = {
        createAudioClip: function (n, s, a, h) {
            return null !== r ? a ? new e(n, s, r) : new t(n, s, r) : "undefined" != typeof Media ? new o(n, s) : new i(n, s, h)
        },
        createAudioSprite: function (t, e, i) {
            return new n(t, e, i)
        },
        usingWebAudio: function () {
            return null !== r
        },
        usingCordovaAudio: function () {
            return "undefined" != typeof Media
        }
    };
    return s
}), define("absoluteaudio", ["require", "absoluteaudio/audio"], function (t) {
    return {
        version: "1.0",
        context: t("absoluteaudio/audio")
    }
}), define("absolute/debug", [], function () {
    var t = {
        enabled: !1,
        log: function (t) {
            this.enabled && console.log(t)
        }
    };
    return t
}), define("absolute/storagemanager", ["absolute/debug"], function (t) {
    var e = {
        prefix: null,
        store: function (e, i) {
            if (!this.prefix) throw "Error: you must set StorageManager.prefix for this game!";
            try {
                localStorage[this.prefix + e] = JSON.stringify(i)
            } catch (n) {
                t.log("error creating local storage " + n)
            }
        },
        fetch: function (e) {
            if (!this.prefix) throw "Error: you must set StorageManager.prefix for this game!";
            try {
                var i = localStorage[this.prefix + e];
                if (i) return JSON.parse(i)
            } catch (n) {
                t.log("error accessing local storage " + n)
            }
            return null
        }
    };
    return e
}), define("absolute/gameconfig", ["absolute/storagemanager"], function (t) {
    var e = {
        defaults: {},
        options: {},
        reset: function () {
            this.options = this.defaults, this.save()
        },
        load: function (e) {
            if (this.defaults = e, this.options = t.fetch("options") || this.defaults, !this.options.version || this.options.version < this.defaults.version)
                for (var i in this.defaults) this.defaults.hasOwnProperty(i) && !this.options.hasOwnProperty(i) && (this.options[i] = this.defaults[i])
        },
        save: function () {
            t.store("options", this.options)
        },
        setVal: function (t, e) {
            this.options[t] = e, this.save()
        },
        getVal: function (t) {
            return this.options[t]
        }
    };
    return e
}), define("absolute/screenmetrics", ["absolute/debug"], function (t) {
    var e = {
        kDefaultWidth: 1536,
        kDefaultHeight: 2008,
        resClass: "",
        refresh: function () {
            this.devicePixelRatio = window.devicePixelRatio || 1, this.screenWidth = screen.width, this.screenHeight = screen.height, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.outerWidth = window.outerWidth, this.outerHeight = window.outerHeight
        },
        isPortrait: function () {
            return this.innerWidth < this.innerHeight ? !0 : !1
        },
        getWidth: function () {
            var t = document.documentElement.clientWidth,
                e = document.documentElement.clientHeight;
            return this.isPortrait() ? t : e > t ? t : 1280 === t ? 800 : this._isAndroid() ? Math.max(screen.height, e) : Math.max(screen.width, e)
        },
        getHeight: function () {
            var t;
            return t = this.isPortrait() ? this.innerHeight : this.screenWidth < this.screenHeight ? this.screenHeight - (this.screenWidth - this.innerHeight) : this.screenWidth - (this.screenHeight - this.innerHeight), navigator.userAgent.match(/iPhone/i) && (t -= 16), t
        },
        getScaledViewportWidth: function () {
            return this.getWidth() / this.getViewportScale()
        },
        getScaledViewportHeight: function () {
            return this.getHeight() / this.getViewportScale()
        },
        getScaledContentWidth: function () {
            return this.getContentWidth() * this.getViewportScale()
        },
        getScaledContentHeight: function () {
            return this.getContentHeight() * this.getViewportScale()
        },
        getContentWidth: function () {
            return this.kDefaultWidth * this.getResScale() / this.devicePixelRatio
        },
        getContentHeight: function () {
            return this.kDefaultHeight * this.getResScale() / this.devicePixelRatio
        },
        getViewportScale: function () {
            var t = this.getWidth() / this.getContentWidth(),
                e = this.getHeight() / this.getContentHeight();
            return Math.min(t, e)
        },
        getResClass: function () {
            if ("" !== this.resClass) return this.resClass;
            var t = this.getWidth() * this.devicePixelRatio;
            this.isPortrait() || (t = this.getHeight() * this.devicePixelRatio);
            var e = "";
            return e = t > 1280 ? "r1536" : t > 768 ? "r1280" : t > 640 ? "r768" : t > 320 ? "r640" : "r320", navigator.userAgent.indexOf("Android 4.0.4") >= 0 && "r320" != e && (e = "r640"), this.resClass = e, this.resClass
            //return e = t > 1280 ? "r1536" : t > 768 ? "r1280" : t > 640 ? "r768" : t > 320 ? "r640" : "r320", navigator.userAgent.indexOf("Android 4.0.4") >= 0 && "r320" != e && (e = "r640"), this.resClass = e, this.resClass
        },
        getResScale: function () {
            switch (this.getResClass()) {
            case "r320":
                return .21;
            case "r640":
                return .42;
            case "r768":
                return .5;
            case "r1280":
                return .83;
            case "r1536":
                return 1;
            default:
                return 1
            }
        },
        getScaleX: function () {
            return this.getWidth() * this.devicePixelRatio / (this.kDefaultWidth * this.getResScale())
        },
        getScaleY: function () {
            return this.getHeight() * this.devicePixelRatio / (this.kDefaultHeight * this.getResScale())
        },
        log: function () {
            t.log("devicePixelRatio " + this.devicePixelRatio), t.log("screenWidth " + this.screenWidth), t.log("screenHeight " + this.screenHeight), t.log("innerWidth " + this.innerWidth), t.log("innerHeight " + this.innerHeight), t.log("outerWidth " + this.outerWidth), t.log("outerHeight " + this.outerHeight), t.log("isPortrait() " + this.isPortrait()), t.log("getWidth() " + this.getWidth()), t.log("getHeight() " + this.getHeight()), t.log("getResClass() " + this.getResClass()), t.log("getResScale() " + this.getResScale()), t.log("getContentWidth() " + this.getContentWidth()), t.log("getContentHeight() " + this.getContentHeight()), t.log("getViewportScale() " + this.getViewportScale()), t.log("getScaledContentWidth " + this.getScaledContentWidth()), t.log("getScaledContentHeight " + this.getScaledContentHeight()), t.log("getScaledViewportWidth " + this.getScaledViewportWidth()), t.log("getScaledViewportHeight " + this.getScaledViewportHeight())
        },
        getScreenParams: function () {
            return "devicePixelRatio=" + this.devicePixelRatio + "&" + "screen.width=" + screen.width + "&" + "screen.height=" + screen.height + "&" + "window.innerWidth=" + window.innerWidth + "&" + "window.innerHeight=" + window.innerHeight + "&" + "window.outerWidth=" + window.outerWidth + "&" + "window.outerHeight=" + window.outerHeight + "&" + "document.documentElement.clientWidth=" + document.documentElement.clientWidth + "&" + "document.documentElement.clientHeight=" + document.documentElement.clientHeight + "&" + "resClass=" + this.getResClass() + "&" + "resScale=" + this.getResScale()
        },
        _isAndroid: function () {
            return navigator.userAgent.indexOf("Android") >= 0 || navigator.userAgent.indexOf("Silk") >= 0
        },
        isCrapGraphics: function () {
            return navigator.userAgent.indexOf("Android") >= 0 || navigator.userAgent.indexOf("Silk") >= 0 ? !0 : !1
        }
    };
    return e
}), define("absolute/platform", ["absolute/screenmetrics"], function (t) {
    var e = {
        artPathPrefix: "art",
        soundPathPrefix: "sound",
        maxWidth: window.innerWidth,
        maxHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1,
        resClass: "",
        resScale: 0,
        documentRoot: null,
        getDocumentRoot: function () {
            if (null === this.documentRoot)
                if (this.isCordova()) {
                    var t = window.location.href.indexOf("/index.html");
                    this.documentRoot = window.location.href.substring(0, t) + "/"
                } else this.documentRoot = "";
            return this.documentRoot
        },
        getResScale: function () {
            return t.getResScale()
        },
        getResClass: function () {
            return "" !== this.resClass ? this.resClass : (this.resClass = t.getResClass(), this.resClass)
        },
        getClickAction: function () {
            return this.supportsTouch() ? "touchstart" : "click"
        },
        isCrapAudio: function () {
            return navigator.userAgent.indexOf("Android") >= 0 ? !0 : navigator.userAgent.indexOf("Silk") >= 0 ? !0 : navigator.userAgent.match(/OS 5(_\d)+ like Mac OS X/i) ? !0 : navigator.userAgent.match(/OS 4(_\d)+ like Mac OS X/i) ? !0 : !1
        },
        _isiPhone: navigator.userAgent.match(/iPhone/i),
        _isiPod: navigator.userAgent.match(/iPod/i),
        _isiPad: navigator.userAgent.match(/iPad/i),
        _isAndroid: function () {
            return navigator.userAgent.indexOf("Android") >= 0 || navigator.userAgent.indexOf("Silk") >= 0
        },
        _isChrome: function () {
            return navigator.userAgent.indexOf("Android") >= 0 && navigator.userAgent.indexOf("CrMo") >= 0
        },
        supportsTouch: function () {
            return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
        },
        isCordova: function () {
            return "undefined" != typeof cordova
        }
    };
    return e
}), define("absolute/audiomanager", ["absoluteaudio", "absolute/debug", "absolute/gameconfig", "absolute/platform"], function (t, e, i, n) {
    var o = {
        lastPlayed: 0,
        music: null,
        sounds: {},
        format: "mp3",
        sfxEnabled: !0,
        init: function (t) {
            audioTest = new Audio;
            var i = {
                m4a: !! (audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                ogg: !! audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                mp3: !! audioTest.canPlayType("audio/mpeg;").replace(/^no$/, "")
            };
            i.m4a ? this.format = "m4a" : i.ogg ? this.format = "ogg" : i.mp3 && (this.format = "mp3"), navigator.userAgent.match(/MSIE/i) && (this.format = "mp3"), e.log("Audio format " + this.format), t && "function" == typeof t && t()
        },
        setFormat: function (t) {
            this.format = t
        },
        loadSounds: function (e, i, n) {
            return e ? (this.audioAssets = e, this.usingWebAudio() ? this.loadClips(e, i, n) : this.createSound({
                id: "as",
                url: "as/as",
                volume: 100,
                onLoad: function () {
                    for (var e = 0, o = this.audioAssets.length; o > e; e += 1) {
                        var r = this.audioAssets[e],
                            s = this.sounds.as;
                        this.sounds[r.id] = t.context.createAudioSprite(s, r.start, r.end), i(e / o)
                    }
                    i(e / o), setTimeout(function () {
                        n()
                    }, 500)
                }.bind(this),
                buffer: !1,
                loop: !1,
                duration: 0
            }), void 0) : (n(), void 0)
        },
        loadClips: function (t, e, n) {
            for (var o = this, r = t.length, s = 0, a = function () {
                    ++s === r ? (o.setSfxEnabled(i.getVal("sfxEnabled")), e(s / r), n()) : e(s / r)
                }, h = 0; h < t.length; h += 1) {
                var l = t[h];
                this.createSound({
                    id: l.id,
                    url: l.url,
                    volume: l.volume,
                    onLoad: a,
                    buffer: !1,
                    loop: l.loop,
                    duration: l.end - l.start
                })
            }
        },
        createSound: function (e) {
            var i, o;
            o = n.getDocumentRoot() + n.soundPathPrefix + "/" + this.format + "/" + e.url + "." + this.format, i = t.context.createAudioClip(o, e.onLoad, !1, e.duration), this.sounds[e.id] = i
        },
        playSound: function (t, e, i) {
            this.sounds[t] && this.sounds[t].play(i / 1e3, this.isMusic(t), e)
        },
        stopSound: function (t) {
            this.sounds[t] && (this.sounds[t].stopping = !0, this.sounds[t].stop())
        },
        pauseSound: function (t) {
            this.sounds[t] && this.sounds[t].pause()
        },
        muteSound: function (t) {
            this.sounds[t] && this.sounds[t].mute()
        },
        unmuteSound: function (t) {
            this.sounds[t] && this.sounds[t].unmute()
        },
        setSfxEnabled: function (t) {
            this.sfxEnabled = t, i.setVal("sfxEnabled", t);
            var e;
            if (t)
                for (e in this.sounds) this.isMusic(e) || "as" === e || this.unmuteSound(e);
            else
                for (e in this.sounds) this.isMusic(e) || "as" === e || this.muteSound(e)
        },
        isSfxEnabled: function () {
            return this.sfxEnabled
        },
        muteAll: function () {
            for (s in this.sounds) this.muteSound(s)
        },
        unmuteAll: function () {
            for (s in this.sounds) this.unmuteSound(s)
        },
        usingWebAudio: function () {
            return t.context.usingWebAudio() || t.context.usingCordovaAudio()
        },
        isMusic: function (t) {
            return -1 !== t.indexOf("music")
        },
        sfxSupported: function () {
            return !0
        },
        musicSupported: function () {
            return !0
        },
        simulSoundSupport: function () {
            return t.context.usingWebAudio() || t.context.usingCordovaAudio() || !i.getVal("musicEnabled")
        },
        primeClips: function () {
            var t;
            for (t in this.sounds) this.sounds[t].prime()
        }
    };
    return o
}),
function () {
    function t() {
        return n.Matrix = "undefined" != typeof Float32Array ? Float32Array : Array, n.Matrix
    }

    function e(t) {
        return [(255 & t >> 16) / 255, (255 & t >> 8) / 255, (255 & t) / 255]
    }

    function e(t) {
        return [(255 & t >> 16) / 255, (255 & t >> 8) / 255, (255 & t) / 255]
    }
    var i = this,
        n = n || {};
    n.Point = function (t, e) {
        this.x = t || 0, this.y = e || 0
    }, n.Point.prototype.clone = function () {
        return new n.Point(this.x, this.y)
    }, n.Point.prototype.constructor = n.Point, n.Rectangle = function (t, e, i, n) {
        this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = n || 0
    }, n.Rectangle.prototype.clone = function () {
        return new n.Rectangle(this.x, this.y, this.width, this.height)
    }, n.Rectangle.prototype.contains = function (t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        var i = this.x;
        if (t >= i && t <= i + this.width) {
            var n = this.y;
            if (e >= n && e <= n + this.height) return !0
        }
        return !1
    }, n.Rectangle.prototype.constructor = n.Rectangle, n.Polygon = function (t) {
        if (t instanceof Array || (t = Array.prototype.slice.call(arguments)), "number" == typeof t[0]) {
            for (var e = [], i = 0, o = t.length; o > i; i += 2) e.push(new n.Point(t[i], t[i + 1]));
            t = e
        }
        this.points = t
    }, n.Polygon.prototype.clone = function () {
        for (var t = [], e = 0; e < this.points.length; e++) t.push(this.points[e].clone());
        return new n.Polygon(t)
    }, n.Polygon.prototype.contains = function (t, e) {
        for (var i = !1, n = 0, o = this.points.length - 1; n < this.points.length; o = n++) {
            var r = this.points[n].x,
                s = this.points[n].y,
                a = this.points[o].x,
                h = this.points[o].y,
                l = s > e != h > e && (a - r) * (e - s) / (h - s) + r > t;
            l && (i = !i)
        }
        return i
    }, n.Polygon.prototype.constructor = n.Polygon, n.Circle = function (t, e, i) {
        this.x = t || 0, this.y = e || 0, this.radius = i || 0
    }, n.Circle.prototype.clone = function () {
        return new n.Circle(this.x, this.y, this.radius)
    }, n.Circle.prototype.contains = function (t, e) {
        if (this.radius <= 0) return !1;
        var i = this.x - t,
            n = this.y - e,
            o = this.radius * this.radius;
        return i *= i, n *= n, o >= i + n
    }, n.Circle.prototype.constructor = n.Circle, n.Ellipse = function (t, e, i, n) {
        this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = n || 0
    }, n.Ellipse.prototype.clone = function () {
        return new n.Ellipse(this.x, this.y, this.width, this.height)
    }, n.Ellipse.prototype.contains = function (t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        var i = (t - this.x) / this.width - .5,
            n = (e - this.y) / this.height - .5;
        return i *= i, n *= n, .25 > i + n
    }, n.Ellipse.getBounds = function () {
        return new n.Rectangle(this.x, this.y, this.width, this.height)
    }, n.Ellipse.prototype.constructor = n.Ellipse, t(), n.mat3 = {}, n.mat3.create = function () {
        var t = new n.Matrix(9);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, n.mat3.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, n.mat4 = {}, n.mat4.create = function () {
        var t = new n.Matrix(16);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, n.mat3.multiply = function (t, e, i) {
        i || (i = t);
        var n = t[0],
            o = t[1],
            r = t[2],
            s = t[3],
            a = t[4],
            h = t[5],
            l = t[6],
            u = t[7],
            c = t[8],
            d = e[0],
            p = e[1],
            f = e[2],
            m = e[3],
            g = e[4],
            v = e[5],
            y = e[6],
            b = e[7],
            x = e[8];
        return i[0] = d * n + p * s + f * l, i[1] = d * o + p * a + f * u, i[2] = d * r + p * h + f * c, i[3] = m * n + g * s + v * l, i[4] = m * o + g * a + v * u, i[5] = m * r + g * h + v * c, i[6] = y * n + b * s + x * l, i[7] = y * o + b * a + x * u, i[8] = y * r + b * h + x * c, i
    }, n.mat3.clone = function (t) {
        var e = new n.Matrix(9);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }, n.mat3.transpose = function (t, e) {
        if (!e || t === e) {
            var i = t[1],
                n = t[2],
                o = t[5];
            return t[1] = t[3], t[2] = t[6], t[3] = i, t[5] = t[7], t[6] = n, t[7] = o, t
        }
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], e
    }, n.mat3.toMat4 = function (t, e) {
        return e || (e = n.mat4.create()), e[15] = 1, e[14] = 0, e[13] = 0, e[12] = 0, e[11] = 0, e[10] = t[8], e[9] = t[7], e[8] = t[6], e[7] = 0, e[6] = t[5], e[5] = t[4], e[4] = t[3], e[3] = 0, e[2] = t[2], e[1] = t[1], e[0] = t[0], e
    }, n.mat4.create = function () {
        var t = new n.Matrix(16);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, n.mat4.transpose = function (t, e) {
        if (!e || t === e) {
            var i = t[1],
                n = t[2],
                o = t[3],
                r = t[6],
                s = t[7],
                a = t[11];
            return t[1] = t[4], t[2] = t[8], t[3] = t[12], t[4] = i, t[6] = t[9], t[7] = t[13], t[8] = n, t[9] = r, t[11] = t[14], t[12] = o, t[13] = s, t[14] = a, t
        }
        return e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15], e
    }, n.mat4.multiply = function (t, e, i) {
        i || (i = t);
        var n = t[0],
            o = t[1],
            r = t[2],
            s = t[3],
            a = t[4],
            h = t[5],
            l = t[6],
            u = t[7],
            c = t[8],
            d = t[9],
            p = t[10],
            f = t[11],
            m = t[12],
            g = t[13],
            v = t[14],
            y = t[15],
            b = e[0],
            x = e[1],
            w = e[2],
            T = e[3];
        return i[0] = b * n + x * a + w * c + T * m, i[1] = b * o + x * h + w * d + T * g, i[2] = b * r + x * l + w * p + T * v, i[3] = b * s + x * u + w * f + T * y, b = e[4], x = e[5], w = e[6], T = e[7], i[4] = b * n + x * a + w * c + T * m, i[5] = b * o + x * h + w * d + T * g, i[6] = b * r + x * l + w * p + T * v, i[7] = b * s + x * u + w * f + T * y, b = e[8], x = e[9], w = e[10], T = e[11], i[8] = b * n + x * a + w * c + T * m, i[9] = b * o + x * h + w * d + T * g, i[10] = b * r + x * l + w * p + T * v, i[11] = b * s + x * u + w * f + T * y, b = e[12], x = e[13], w = e[14], T = e[15], i[12] = b * n + x * a + w * c + T * m, i[13] = b * o + x * h + w * d + T * g, i[14] = b * r + x * l + w * p + T * v, i[15] = b * s + x * u + w * f + T * y, i
    }, n.DisplayObject = function () {
        this.last = this, this.first = this, this.position = new n.Point, this.scale = new n.Point(1, 1), this.pivot = new n.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.hitArea = null, this.buttonMode = !1, this.renderable = !1, this.parent = null, this.stage = null, this.worldAlpha = 1, this._interactive = !1, this.worldTransform = n.mat3.create(), this.localTransform = n.mat3.create(), this.color = [], this.dynamic = !0, this._sr = 0, this._cr = 1
    }, n.DisplayObject.prototype.constructor = n.DisplayObject, n.DisplayObject.prototype.setInteractive = function (t) {
        this.interactive = t
    }, Object.defineProperty(n.DisplayObject.prototype, "interactive", {
        get: function () {
            return this._interactive
        },
        set: function (t) {
            this._interactive = t, this.stage && (this.stage.dirty = !0)
        }
    }), Object.defineProperty(n.DisplayObject.prototype, "mask", {
        get: function () {
            return this._mask
        },
        set: function (t) {
            this._mask = t, t ? this.addFilter(t) : this.removeFilter()
        }
    }), n.DisplayObject.prototype.addFilter = function (t) {
        if (!this.filter) {
            this.filter = !0;
            var e = new n.FilterBlock,
                i = new n.FilterBlock;
            e.mask = t, i.mask = t, e.first = e.last = this, i.first = i.last = this, e.open = !0;
            var o, r, s = e,
                a = e;
            r = this.first._iPrev, r ? (o = r._iNext, s._iPrev = r, r._iNext = s) : o = this, o && (o._iPrev = a, a._iNext = o);
            var s = i,
                a = i,
                o = null,
                r = null;
            r = this.last, o = r._iNext, o && (o._iPrev = a, a._iNext = o), s._iPrev = r, r._iNext = s;
            for (var h = this, l = this.last; h;) h.last == l && (h.last = i), h = h.parent;
            this.first = e, this.__renderGroup && this.__renderGroup.addFilterBlocks(e, i), t.renderable = !1
        }
    }, n.DisplayObject.prototype.removeFilter = function () {
        if (this.filter) {
            this.filter = !1;
            var t = this.first,
                e = t._iNext,
                i = t._iPrev;
            e && (e._iPrev = i), i && (i._iNext = e), this.first = t._iNext;
            var n = this.last,
                e = n._iNext,
                i = n._iPrev;
            e && (e._iPrev = i), i._iNext = e;
            for (var o = n._iPrev, r = this; r.last == n && (r.last = o, r = r.parent););
            var s = t.mask;
            s.renderable = !0, this.__renderGroup && this.__renderGroup.removeFilterBlocks(t, n)
        }
    }, n.DisplayObject.prototype.updateTransform = function () {
        this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation));
        var t = this.localTransform,
            e = this.parent.worldTransform,
            i = this.worldTransform;
        t[0] = this._cr * this.scale.x, t[1] = -this._sr * this.scale.y, t[3] = this._sr * this.scale.x, t[4] = this._cr * this.scale.y;
        var o = this.pivot.x,
            r = this.pivot.y,
            s = t[0],
            a = t[1],
            h = this.position.x - t[0] * o - r * t[1],
            l = t[3],
            u = t[4],
            c = this.position.y - t[4] * r - o * t[3],
            d = e[0],
            p = e[1],
            f = e[2],
            m = e[3],
            g = e[4],
            v = e[5];
        t[2] = h, t[5] = c, i[0] = d * s + p * l, i[1] = d * a + p * u, i[2] = d * h + p * c + f, i[3] = m * s + g * l, i[4] = m * a + g * u, i[5] = m * h + g * c + v, this.worldAlpha = this.alpha * this.parent.worldAlpha, this.vcount = n.visibleCount
    }, n.visibleCount = 0, n.DisplayObjectContainer = function () {
        n.DisplayObject.call(this), this.children = []
    }, n.DisplayObjectContainer.prototype = Object.create(n.DisplayObject.prototype), n.DisplayObjectContainer.prototype.constructor = n.DisplayObjectContainer, n.DisplayObjectContainer.prototype.addChild = function (t) {
        if (void 0 != t.parent && t.parent.removeChild(t), t.parent = this, this.children.push(t), this.stage) {
            var e = t;
            do e.interactive && (this.stage.dirty = !0), e.stage = this.stage, e = e._iNext; while (e)
        }
        var i, n, o = t.first,
            r = t.last;
        n = this.filter ? this.last._iPrev : this.last, i = n._iNext;
        for (var s = this, a = n; s;) s.last == a && (s.last = t.last), s = s.parent;
        i && (i._iPrev = r, r._iNext = i), o._iPrev = n, n._iNext = o, this.__renderGroup && (t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t), this.__renderGroup.addDisplayObjectAndChildren(t))
    }, n.DisplayObjectContainer.prototype.addChildAt = function (t, e) {
        if (!(e >= 0 && e <= this.children.length)) throw new Error(t + " The index " + e + " supplied is out of bounds " + this.children.length);
        if (void 0 != t.parent && t.parent.removeChild(t), t.parent = this, this.stage) {
            var i = t;
            do i.interactive && (this.stage.dirty = !0), i.stage = this.stage, i = i._iNext; while (i)
        }
        var n, o, r = t.first,
            s = t.last;
        if (e == this.children.length) {
            o = this.last;
            for (var a = this, h = this.last; a;) a.last == h && (a.last = t.last), a = a.parent
        } else o = 0 == e ? this : this.children[e - 1].last;
        n = o._iNext, n && (n._iPrev = s, s._iNext = n), r._iPrev = o, o._iNext = r, this.children.splice(e, 0, t), this.__renderGroup && (t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t), this.__renderGroup.addDisplayObjectAndChildren(t))
    }, n.DisplayObjectContainer.prototype.swapChildren = function () {}, n.DisplayObjectContainer.prototype.getChildAt = function (t) {
        if (t >= 0 && t < this.children.length) return this.children[t];
        throw new Error(child + " Both the supplied DisplayObjects must be a child of the caller " + this)
    }, n.DisplayObjectContainer.prototype.removeChild = function (t) {
        var e = this.children.indexOf(t);
        if (-1 === e) throw new Error(t + " The supplied DisplayObject must be a child of the caller " + this);
        var i = t.first,
            n = t.last,
            o = n._iNext,
            r = i._iPrev;
        if (o && (o._iPrev = r), r._iNext = o, this.last == n)
            for (var s = i._iPrev, a = this; a.last == n.last && (a.last = s, a = a.parent););
        if (n._iNext = null, i._iPrev = null, this.stage) {
            var h = t;
            do h.interactive && (this.stage.dirty = !0), h.stage = null, h = h._iNext; while (h)
        }
        t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t), t.parent = void 0, this.children.splice(e, 1)
    }, n.DisplayObjectContainer.prototype.updateTransform = function () {
        if (this.visible) {
            n.DisplayObject.prototype.updateTransform.call(this);
            for (var t = 0, e = this.children.length; e > t; t++) this.children[t].updateTransform()
        }
    }, n.blendModes = {}, n.blendModes.NORMAL = 0, n.blendModes.SCREEN = 1, n.Sprite = function (t) {
        n.DisplayObjectContainer.call(this), this.anchor = new n.Point, this.texture = t, this.blendMode = n.blendModes.NORMAL, this._width = 0, this._height = 0, t.baseTexture.hasLoaded ? this.updateFrame = !0 : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
    }, n.Sprite.prototype = Object.create(n.DisplayObjectContainer.prototype), n.Sprite.prototype.constructor = n.Sprite, Object.defineProperty(n.Sprite.prototype, "width", {
        get: function () {
            return this.scale.x * this.texture.frame.width
        },
        set: function (t) {
            this.scale.x = t / this.texture.frame.width, this._width = t
        }
    }), Object.defineProperty(n.Sprite.prototype, "height", {
        get: function () {
            return this.scale.y * this.texture.frame.height
        },
        set: function (t) {
            this.scale.y = t / this.texture.frame.height, this._height = t
        }
    }), n.Sprite.prototype.setTexture = function (t) {
        this.texture.baseTexture != t.baseTexture ? (this.textureChange = !0, this.__renderGroup && (this.texture = t, this.__renderGroup.updateTexture(this))) : this.texture = t, this.updateFrame = !0
    }, n.Sprite.prototype.onTextureUpdate = function () {
        this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height), this.updateFrame = !0
    }, n.Sprite.fromFrame = function (t) {
        var e = n.TextureCache[t];
        if (!e) throw new Error("The frameId '" + t + "' does not exist in the texture cache" + this);
        return new n.Sprite(e)
    }, n.Sprite.fromImage = function (t) {
        var e = n.Texture.fromImage(t);
        return new n.Sprite(e)
    }, n.MovieClip = function (t) {
        n.Sprite.call(this, t[0]), this.textures = t, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this.currentFrame = 0, this.playing = !1
    }, n.MovieClip.prototype = Object.create(n.Sprite.prototype), n.MovieClip.prototype.constructor = n.MovieClip, n.MovieClip.prototype.stop = function () {
        this.playing = !1
    }, n.MovieClip.prototype.play = function () {
        this.playing = !0
    }, n.MovieClip.prototype.gotoAndStop = function (t) {
        this.playing = !1, this.currentFrame = t;
        var e = 0 | this.currentFrame + .5;
        this.setTexture(this.textures[e % this.textures.length])
    }, n.MovieClip.prototype.gotoAndPlay = function (t) {
        this.currentFrame = t, this.playing = !0
    }, n.MovieClip.prototype.updateTransform = function () {
        if (n.Sprite.prototype.updateTransform.call(this), this.playing) {
            this.currentFrame += this.animationSpeed;
            var t = 0 | this.currentFrame + .5;
            this.loop || t < this.textures.length ? this.setTexture(this.textures[t % this.textures.length]) : t >= this.textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
        }
    }, n.FilterBlock = function (t) {
        this.graphics = t, this.visible = !0, this.renderable = !0
    }, n.Text = function (t, e) {
        this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), n.Sprite.call(this, n.Texture.fromCanvas(this.canvas)), this.setText(t), this.setStyle(e), this.updateText(), this.dirty = !1
    }, n.Text.prototype = Object.create(n.Sprite.prototype), n.Text.prototype.constructor = n.Text, n.Text.prototype.setStyle = function (t) {
        t = t || {}, t.font = t.font || "bold 20pt Arial", t.fill = t.fill || "black", t.align = t.align || "left", t.stroke = t.stroke || "black", t.strokeThickness = t.strokeThickness || 0, t.wordWrap = t.wordWrap || !1, t.wordWrapWidth = t.wordWrapWidth || 100, this.style = t, this.dirty = !0
    }, n.Sprite.prototype.setText = function (t) {
        this.text = t.toString() || " ", this.dirty = !0
    }, n.Text.prototype.updateText = function () {
        this.context.font = this.style.font;
        var t = this.text;
        this.style.wordWrap && (t = this.wordWrap(this.text));
        for (var e = t.split(/(?:\r\n|\r|\n)/), i = [], o = 0, r = 0; r < e.length; r++) {
            var s = this.context.measureText(e[r]).width;
            i[r] = s, o = Math.max(o, s)
        }
        this.canvas.width = o + this.style.strokeThickness;
        var a = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness;
        for (this.canvas.height = a * e.length, this.context.fillStyle = this.style.fill, this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "top", r = 0; r < e.length; r++) {
            var h = new n.Point(this.style.strokeThickness / 2, this.style.strokeThickness / 2 + r * a);
            "right" == this.style.align ? h.x += o - i[r] : "center" == this.style.align && (h.x += (o - i[r]) / 2), this.style.stroke && this.style.strokeThickness && this.context.strokeText(e[r], h.x, h.y), this.style.fill && this.context.fillText(e[r], h.x, h.y)
        }
        this.updateTexture()
    }, n.Text.prototype.updateTexture = function () {
        this.texture.baseTexture.width = this.canvas.width, this.texture.baseTexture.height = this.canvas.height, this.texture.frame.width = this.canvas.width, this.texture.frame.height = this.canvas.height, this._width = this.canvas.width, this._height = this.canvas.height, n.texturesToUpdate.push(this.texture.baseTexture)
    }, n.Text.prototype.updateTransform = function () {
        this.dirty && (this.updateText(), this.dirty = !1), n.Sprite.prototype.updateTransform.call(this)
    }, n.Text.prototype.determineFontHeight = function (t) {
        var e = n.Text.heightCache[t];
        if (!e) {
            var i = document.getElementsByTagName("body")[0],
                o = document.createElement("div"),
                r = document.createTextNode("M");
            o.appendChild(r), o.setAttribute("style", t + ";position:absolute;top:0;left:0"), i.appendChild(o), e = o.offsetHeight, n.Text.heightCache[t] = e, i.removeChild(o)
        }
        return e
    }, n.Text.prototype.wordWrap = function (t) {
        for (var e = function (t, e, i, n, o) {
            var r = Math.floor((n - i) / 2) + i;
            return r == i ? 1 : t.measureText(e.substring(0, r)).width <= o ? t.measureText(e.substring(0, r + 1)).width > o ? r : arguments.callee(t, e, r, n, o) : arguments.callee(t, e, i, r, o)
        }, i = function (t, i, n) {
                if (t.measureText(i).width <= n || i.length < 1) return i;
                var o = e(t, i, 0, i.length, n);
                return i.substring(0, o) + "\n" + arguments.callee(t, i.substring(o), n)
            }, n = "", o = t.split("\n"), r = 0; r < o.length; r++) n += i(this.context, o[r], this.style.wordWrapWidth) + "\n";
        return n
    }, n.Text.prototype.destroy = function (t) {
        t && this.texture.destroy()
    }, n.Text.heightCache = {}, n.BitmapText = function (t, e) {
        n.DisplayObjectContainer.call(this), this.setText(t), this.setStyle(e), this.updateText(), this.dirty = !1
    }, n.BitmapText.prototype = Object.create(n.DisplayObjectContainer.prototype), n.BitmapText.prototype.constructor = n.BitmapText, n.BitmapText.prototype.setText = function (t) {
        this.text = t || " ", this.dirty = !0
    }, n.BitmapText.prototype.setStyle = function (t) {
        t = t || {}, t.align = t.align || "left", this.style = t;
        var e = t.font.split(" ");
        this.fontName = e[e.length - 1], this.fontSize = e.length >= 2 ? parseInt(e[e.length - 2], 10) : n.BitmapText.fonts[this.fontName].size, this.dirty = !0
    }, n.BitmapText.prototype.updateText = function () {
        for (var t = n.BitmapText.fonts[this.fontName], e = new n.Point, i = null, o = [], r = 0, s = [], a = 0, h = this.fontSize / t.size, l = 0; l < this.text.length; l++) {
            var u = this.text.charCodeAt(l);
            if (/(?:\r\n|\r|\n)/.test(this.text.charAt(l))) s.push(e.x), r = Math.max(r, e.x), a++, e.x = 0, e.y += t.lineHeight, i = null;
            else {
                var c = t.chars[u];
                c && (i && c[i] && (e.x += c.kerning[i]), o.push({
                    texture: c.texture,
                    line: a,
                    charCode: u,
                    position: new n.Point(e.x + c.xOffset, e.y + c.yOffset)
                }), e.x += c.xAdvance, i = u)
            }
        }
        s.push(e.x), r = Math.max(r, e.x);
        var d = [];
        for (l = 0; a >= l; l++) {
            var p = 0;
            "right" == this.style.align ? p = r - s[l] : "center" == this.style.align && (p = (r - s[l]) / 2), d.push(p)
        }
        for (l = 0; l < o.length; l++) {
            var f = new n.Sprite(o[l].texture);
            f.position.x = (o[l].position.x + d[o[l].line]) * h, f.position.y = o[l].position.y * h, f.scale.x = f.scale.y = h, this.addChild(f)
        }
        this.width = e.x * h, this.height = (e.y + t.lineHeight) * h
    }, n.BitmapText.prototype.updateTransform = function () {
        if (this.dirty) {
            for (; this.children.length > 0;) this.removeChild(this.getChildAt(0));
            this.updateText(), this.dirty = !1
        }
        n.DisplayObjectContainer.prototype.updateTransform.call(this)
    }, n.BitmapText.fonts = {}, n.InteractionManager = function (t) {
        this.stage = t, this.mouse = new n.InteractionData, this.touchs = {}, this.tempPoint = new n.Point, this.mouseoverEnabled = !0, this.pool = [], this.interactiveItems = [], this.last = 0
    }, n.InteractionManager.prototype.constructor = n.InteractionManager, n.InteractionManager.prototype.collectInteractiveSprite = function (t, e) {
        for (var i = t.children, n = i.length, o = n - 1; o >= 0; o--) {
            var r = i[o];
            r.interactive ? (e.interactiveChildren = !0, this.interactiveItems.push(r), r.children.length > 0 && this.collectInteractiveSprite(r, r)) : (r.__iParent = null, r.children.length > 0 && this.collectInteractiveSprite(r, e))
        }
    }, n.InteractionManager.prototype.setTarget = function (t) {
        window.navigator.msPointerEnabled && (t.view.style["-ms-content-zooming"] = "none", t.view.style["-ms-touch-action"] = "none"), this.target = t, t.view.addEventListener("mousemove", this.onMouseMove.bind(this), !0), t.view.addEventListener("mousedown", this.onMouseDown.bind(this), !0), document.body.addEventListener("mouseup", this.onMouseUp.bind(this), !0), t.view.addEventListener("mouseout", this.onMouseOut.bind(this), !0), t.view.addEventListener("touchstart", this.onTouchStart.bind(this), !0), t.view.addEventListener("touchend", this.onTouchEnd.bind(this), !0), t.view.addEventListener("touchmove", this.onTouchMove.bind(this), !0)
    }, n.InteractionManager.prototype.update = function () {
        if (this.target) {
            var t = Date.now(),
                e = t - this.last;
            if (e = 30 * e / 1e3, !(1 > e)) {
                if (this.last = t, this.dirty) {
                    this.dirty = !1;
                    for (var i = this.interactiveItems.length, n = 0; i > n; n++) this.interactiveItems[n].interactiveChildren = !1;
                    this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage)
                }
                var o = this.interactiveItems.length;
                this.target.view.style.cursor = "default";
                for (var n = 0; o > n; n++) {
                    var r = this.interactiveItems[n];
                    (r.mouseover || r.mouseout || r.buttonMode) && (r.__hit = this.hitTest(r, this.mouse), this.mouse.target = r, r.__hit ? (r.buttonMode && (this.target.view.style.cursor = "pointer"), r.__isOver || (r.mouseover && r.mouseover(this.mouse), r.__isOver = !0)) : r.__isOver && (r.mouseout && r.mouseout(this.mouse), r.__isOver = !1))
                }
            }
        }
    }, n.InteractionManager.prototype.onMouseMove = function (t) {
        this.mouse.originalEvent = t || window.event;
        var e = this.target.view.getBoundingClientRect();
        this.mouse.global.x = (t.clientX - e.left) * (this.target.width / e.width), this.mouse.global.y = (t.clientY - e.top) * (this.target.height / e.height);
        var i = this.interactiveItems.length;
        this.mouse.global;
        for (var n = 0; i > n; n++) {
            var o = this.interactiveItems[n];
            o.mousemove && o.mousemove(this.mouse)
        }
    }, n.InteractionManager.prototype.onMouseDown = function (t) {
        this.mouse.originalEvent = t || window.event;
        var e = this.interactiveItems.length;
        this.mouse.global, this.stage;
        for (var i = 0; e > i; i++) {
            var n = this.interactiveItems[i];
            if ((n.mousedown || n.click) && (n.__mouseIsDown = !0, n.__hit = this.hitTest(n, this.mouse), n.__hit && (n.mousedown && n.mousedown(this.mouse), n.__isDown = !0, !n.interactiveChildren))) break
        }
    }, n.InteractionManager.prototype.onMouseOut = function () {
        var t = this.interactiveItems.length;
        this.target.view.style.cursor = "default";
        for (var e = 0; t > e; e++) {
            var i = this.interactiveItems[e];
            i.__isOver && (this.mouse.target = i, i.mouseout && i.mouseout(this.mouse), i.__isOver = !1)
        }
    }, n.InteractionManager.prototype.onMouseUp = function (t) {
        this.mouse.originalEvent = t || window.event, this.mouse.global;
        for (var e = this.interactiveItems.length, i = !1, n = 0; e > n; n++) {
            var o = this.interactiveItems[n];
            (o.mouseup || o.mouseupoutside || o.click) && (o.__hit = this.hitTest(o, this.mouse), o.__hit && !i ? (o.mouseup && o.mouseup(this.mouse), o.__isDown && o.click && o.click(this.mouse), o.interactiveChildren || (i = !0)) : o.__isDown && o.mouseupoutside && o.mouseupoutside(this.mouse), o.__isDown = !1)
        }
    }, n.InteractionManager.prototype.hitTest = function (t, e) {
        var i = e.global;
        if (t.vcount !== n.visibleCount) return !1;
        var o = t instanceof n.Sprite,
            r = t.worldTransform,
            s = r[0],
            a = r[1],
            h = r[2],
            l = r[3],
            u = r[4],
            c = r[5],
            d = 1 / (s * u + a * -l),
            p = u * d * i.x + -a * d * i.y + (c * a - h * u) * d,
            f = s * d * i.y + -l * d * i.x + (-c * s + h * l) * d;
        if (e.target = t, t.hitArea && t.hitArea.contains) return t.hitArea.contains(p, f) ? (e.target = t, !0) : !1;
        if (o) {
            var m, g = t.texture.frame.width,
                v = t.texture.frame.height,
                y = -g * t.anchor.x;
            if (p > y && y + g > p && (m = -v * t.anchor.y, f > m && m + v > f)) return e.target = t, !0
        }
        for (var b = t.children.length, x = 0; b > x; x++) {
            var w = t.children[x],
                T = this.hitTest(w, e);
            if (T) return e.target = t, !0
        }
        return !1
    }, n.InteractionManager.prototype.onTouchMove = function (t) {
        for (var e = this.target.view.getBoundingClientRect(), i = t.changedTouches, n = 0; n < i.length; n++) {
            var o = i[n],
                r = this.touchs[o.identifier];
            r.originalEvent = t || window.event, r.global.x = (o.clientX - e.left) * (this.target.width / e.width), r.global.y = (o.clientY - e.top) * (this.target.height / e.height)
        }
        for (var s = this.interactiveItems.length, n = 0; s > n; n++) {
            var a = this.interactiveItems[n];
            a.touchmove && a.touchmove(r)
        }
    }, n.InteractionManager.prototype.onTouchStart = function (t) {
        for (var e = this.target.view.getBoundingClientRect(), i = t.changedTouches, o = 0; o < i.length; o++) {
            var r = i[o],
                s = this.pool.pop();
            s || (s = new n.InteractionData), s.originalEvent = t || window.event, this.touchs[r.identifier] = s, s.global.x = (r.clientX - e.left) * (this.target.width / e.width), s.global.y = (r.clientY - e.top) * (this.target.height / e.height);
            for (var a = this.interactiveItems.length, h = 0; a > h; h++) {
                var l = this.interactiveItems[h];
                if ((l.touchstart || l.tap) && (l.__hit = this.hitTest(l, s), l.__hit && (l.touchstart && l.touchstart(s), l.__isDown = !0, l.__touchData = s, !l.interactiveChildren))) break
            }
        }
    }, n.InteractionManager.prototype.onTouchEnd = function (t) {
        for (var e = this.target.view.getBoundingClientRect(), i = t.changedTouches, n = 0; n < i.length; n++) {
            var o = i[n],
                r = this.touchs[o.identifier],
                s = !1;
            r.global.x = (o.clientX - e.left) * (this.target.width / e.width), r.global.y = (o.clientY - e.top) * (this.target.height / e.height);
            for (var a = this.interactiveItems.length, h = 0; a > h; h++) {
                var l = this.interactiveItems[h],
                    u = l.__touchData;
                l.__hit = this.hitTest(l, r), u == r && (r.originalEvent = t || window.event, (l.touchend || l.tap) && (l.__hit && !s ? (l.touchend && l.touchend(r), l.__isDown && l.tap && l.tap(r), l.interactiveChildren || (s = !0)) : l.__isDown && l.touchendoutside && l.touchendoutside(r), l.__isDown = !1), l.__touchData = null)
            }
            this.pool.push(r), this.touchs[o.identifier] = null
        }
    }, n.InteractionData = function () {
        this.global = new n.Point, this.local = new n.Point, this.target, this.originalEvent
    }, n.InteractionData.prototype.getLocalPosition = function (t) {
        var e = t.worldTransform,
            i = this.global,
            o = e[0],
            r = e[1],
            s = e[2],
            a = e[3],
            h = e[4],
            l = e[5],
            u = 1 / (o * h + r * -a);
        return new n.Point(h * u * i.x + -r * u * i.y + (l * r - s * h) * u, o * u * i.y + -a * u * i.x + (-l * o + s * a) * u)
    }, n.InteractionData.prototype.constructor = n.InteractionData, n.Stage = function (t, e) {
        n.DisplayObjectContainer.call(this), this.worldTransform = n.mat3.create(), this.interactive = e, this.interactionManager = new n.InteractionManager(this), this.dirty = !0, this.__childrenAdded = [], this.__childrenRemoved = [], this.stage = this, this.stage.hitArea = new n.Rectangle(0, 0, 1e5, 1e5), this.setBackgroundColor(t), this.worldVisible = !0
    }, n.Stage.prototype = Object.create(n.DisplayObjectContainer.prototype), n.Stage.prototype.constructor = n.Stage, n.Stage.prototype.updateTransform = function () {
        this.worldAlpha = 1;
        for (var t = 0, e = this.children.length; e > t; t++) this.children[t].updateTransform();
        this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0), this.interactive && this.interactionManager.update()
    }, n.Stage.prototype.setBackgroundColor = function (t) {
        this.backgroundColor = t || 0, this.backgroundColorSplit = e(this.backgroundColor);
        var i = this.backgroundColor.toString(16);
        i = "000000".substr(0, 6 - i.length) + i, this.backgroundColorString = "#" + i
    }, n.Stage.prototype.getMousePosition = function () {
        return this.interactionManager.mouse.global
    };
    for (var o = 0, s = ["ms", "moz", "webkit", "o"], h = 0; h < s.length && !window.requestAnimationFrame; ++h) window.requestAnimationFrame = window[s[h] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s[h] + "CancelAnimationFrame"] || window[s[h] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
        var e = (new Date).getTime(),
            i = Math.max(0, 16 - (e - o)),
            n = window.setTimeout(function () {
                t(e + i)
            }, i);
        return o = e + i, n
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    }), window.requestAnimFrame = window.requestAnimationFrame, "function" != typeof Function.prototype.bind && (Function.prototype.bind = function () {
        var t = Array.prototype.slice;
        return function (e) {
            function i() {
                var r = o.concat(t.call(arguments));
                n.apply(this instanceof i ? this : e, r)
            }
            var n = this,
                o = t.call(arguments, 1);
            if ("function" != typeof n) throw new TypeError;
            return i.prototype = function r(t) {
                return t && (r.prototype = t), this instanceof r ? void 0 : new r
            }(n.prototype), i
        }
    }());
    var l = n.AjaxRequest = function () {
        var t = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
        if (!window.ActiveXObject) return window.XMLHttpRequest ? new XMLHttpRequest : !1;
        for (var e = 0; e < t.length; e++) try {
            return new ActiveXObject(t[e])
        } catch (i) {}
    };
    n.runList = function (t) {
        console.log(">>>>>>>>>"), console.log("_");
        var e = 0,
            i = t.first;
        for (console.log(i); i._iNext;)
            if (e++, i = i._iNext, console.log(i), e > 100) {
                console.log("BREAK");
                break
            }
    }, n.EventTarget = function () {
        var t = {};
        this.addEventListener = this.on = function (e, i) {
            void 0 === t[e] && (t[e] = []), -1 === t[e].indexOf(i) && t[e].push(i)
        }, this.dispatchEvent = this.emit = function (e) {
            for (var i in t[e.type]) t[e.type][i](e)
        }, this.removeEventListener = this.off = function (e, i) {
            var n = t[e].indexOf(i); - 1 !== n && t[e].splice(n, 1)
        }
    }, n.autoDetectRenderer = function (t, e, i, o, r) {
        t || (t = 800), e || (e = 600);
        var s = function () {
            try {
                return !!window.WebGLRenderingContext && !! document.createElement("canvas").getContext("experimental-webgl")
            } catch (t) {
                return !1
            }
        }();
        return s ? new n.WebGLRenderer(t, e, i, o, r) : new n.CanvasRenderer(t, e, i, o)
    }, n.PolyK = {}, n.PolyK.Triangulate = function (t) {
        var e = !0,
            i = t.length >> 1;
        if (3 > i) return [];
        for (var o = [], r = [], s = 0; i > s; s++) r.push(s);
        for (var s = 0, a = i; a > 3;) {
            var h = r[(s + 0) % a],
                l = r[(s + 1) % a],
                u = r[(s + 2) % a],
                c = t[2 * h],
                d = t[2 * h + 1],
                p = t[2 * l],
                f = t[2 * l + 1],
                m = t[2 * u],
                g = t[2 * u + 1],
                v = !1;
            if (n.PolyK._convex(c, d, p, f, m, g, e)) {
                v = !0;
                for (var y = 0; a > y; y++) {
                    var b = r[y];
                    if (b != h && b != l && b != u && n.PolyK._PointInTriangle(t[2 * b], t[2 * b + 1], c, d, p, f, m, g)) {
                        v = !1;
                        break
                    }
                }
            }
            if (v) o.push(h, l, u), r.splice((s + 1) % a, 1), a--, s = 0;
            else if (s++ > 3 * a) {
                if (!e) return console.log("PIXI Warning: shape too complex to fill"), [];
                var o = [];
                r = [];
                for (var s = 0; i > s; s++) r.push(s);
                s = 0, a = i, e = !1
            }
        }
        return o.push(r[0], r[1], r[2]), o
    }, n.PolyK._PointInTriangle = function (t, e, i, n, o, r, s, a) {
        var h = s - i,
            l = a - n,
            u = o - i,
            c = r - n,
            d = t - i,
            p = e - n,
            f = h * h + l * l,
            m = h * u + l * c,
            g = h * d + l * p,
            v = u * u + c * c,
            y = u * d + c * p,
            b = 1 / (f * v - m * m),
            x = (v * g - m * y) * b,
            w = (f * y - m * g) * b;
        return x >= 0 && w >= 0 && 1 > x + w
    }, n.PolyK._convex = function (t, e, i, n, o, r, s) {
        return (e - n) * (o - i) + (i - t) * (r - n) >= 0 == s
    }, n.shaderFragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "gl_FragColor = gl_FragColor * vColor;", "}"], n.shaderVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void) {", "gl_Position = vec4( aVertexPosition.x / projectionVector.x -1.0, aVertexPosition.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "vTextureCoord = aTextureCoord;", "vColor = aColor;", "}"], n.stripShaderFragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "gl_FragColor = gl_FragColor * alpha;", "}"], n.stripShaderVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void) {", "vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);", "gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "vTextureCoord = aTextureCoord;", "vColor = aColor;", "}"], n.primitiveShaderFragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "gl_FragColor = vColor;", "}"], n.primitiveShaderVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform float alpha;", "varying vec4 vColor;", "void main(void) {", "vec3 v = translationMatrix * vec3(aVertexPosition, 1.0);", "gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "vColor = aColor  * alpha;", "}"], n.initPrimitiveShader = function () {
        var t = n.gl,
            e = n.compileProgram(n.primitiveShaderVertexSrc, n.primitiveShaderFragmentSrc);
        t.useProgram(e), e.vertexPositionAttribute = t.getAttribLocation(e, "aVertexPosition"), e.colorAttribute = t.getAttribLocation(e, "aColor"), e.projectionVector = t.getUniformLocation(e, "projectionVector"), e.translationMatrix = t.getUniformLocation(e, "translationMatrix"), e.alpha = t.getUniformLocation(e, "alpha"), n.primitiveProgram = e
    }, n.initDefaultShader = function () {
        var t = this.gl,
            e = n.compileProgram(n.shaderVertexSrc, n.shaderFragmentSrc);
        t.useProgram(e), e.vertexPositionAttribute = t.getAttribLocation(e, "aVertexPosition"), e.projectionVector = t.getUniformLocation(e, "projectionVector"), e.textureCoordAttribute = t.getAttribLocation(e, "aTextureCoord"), e.colorAttribute = t.getAttribLocation(e, "aColor"), e.samplerUniform = t.getUniformLocation(e, "uSampler"), n.shaderProgram = e
    }, n.initDefaultStripShader = function () {
        var t = this.gl,
            e = n.compileProgram(n.stripShaderVertexSrc, n.stripShaderFragmentSrc);
        t.useProgram(e), e.vertexPositionAttribute = t.getAttribLocation(e, "aVertexPosition"), e.projectionVector = t.getUniformLocation(e, "projectionVector"), e.textureCoordAttribute = t.getAttribLocation(e, "aTextureCoord"), e.translationMatrix = t.getUniformLocation(e, "translationMatrix"), e.alpha = t.getUniformLocation(e, "alpha"), e.colorAttribute = t.getAttribLocation(e, "aColor"), e.projectionVector = t.getUniformLocation(e, "projectionVector"), e.samplerUniform = t.getUniformLocation(e, "uSampler"), n.stripShaderProgram = e
    }, n.CompileVertexShader = function (t, e) {
        return n._CompileShader(t, e, t.VERTEX_SHADER)
    }, n.CompileFragmentShader = function (t, e) {
        return n._CompileShader(t, e, t.FRAGMENT_SHADER)
    }, n._CompileShader = function (t, e, i) {
        var n = e.join("\n"),
            o = t.createShader(i);
        return t.shaderSource(o, n), t.compileShader(o), t.getShaderParameter(o, t.COMPILE_STATUS) ? o : (alert(t.getShaderInfoLog(o)), null)
    }, n.compileProgram = function (t, e) {
        var i = n.gl,
            o = n.CompileFragmentShader(i, e),
            r = n.CompileVertexShader(i, t),
            s = i.createProgram();
        return i.attachShader(s, r), i.attachShader(s, o), i.linkProgram(s), i.getProgramParameter(s, i.LINK_STATUS) || alert("Could not initialise shaders"), s
    }, n.activateDefaultShader = function () {
        var t = n.gl,
            e = n.shaderProgram;
        t.useProgram(e), t.enableVertexAttribArray(e.vertexPositionAttribute), t.enableVertexAttribArray(e.textureCoordAttribute), t.enableVertexAttribArray(e.colorAttribute)
    }, n.activatePrimitiveShader = function () {
        var t = n.gl;
        t.disableVertexAttribArray(n.shaderProgram.textureCoordAttribute), t.disableVertexAttribArray(n.shaderProgram.colorAttribute), t.useProgram(n.primitiveProgram), t.enableVertexAttribArray(n.primitiveProgram.vertexPositionAttribute), t.enableVertexAttribArray(n.primitiveProgram.colorAttribute)
    }, n.WebGLGraphics = function () {}, n.WebGLGraphics.renderGraphics = function (t, e) {
        var i = n.gl;
        t._webGL || (t._webGL = {
            points: [],
            indices: [],
            lastIndex: 0,
            buffer: i.createBuffer(),
            indexBuffer: i.createBuffer()
        }), t.dirty && (t.dirty = !1, t.clearDirty && (t.clearDirty = !1, t._webGL.lastIndex = 0, t._webGL.points = [], t._webGL.indices = []), n.WebGLGraphics.updateGraphics(t)), n.activatePrimitiveShader();
        var o = n.mat3.clone(t.worldTransform);
        n.mat3.transpose(o), i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA), i.uniformMatrix3fv(n.primitiveProgram.translationMatrix, !1, o), i.uniform2f(n.primitiveProgram.projectionVector, e.x, e.y), i.uniform1f(n.primitiveProgram.alpha, t.worldAlpha), i.bindBuffer(i.ARRAY_BUFFER, t._webGL.buffer), i.vertexAttribPointer(n.shaderProgram.vertexPositionAttribute, 2, i.FLOAT, !1, 0, 0), i.vertexAttribPointer(n.primitiveProgram.vertexPositionAttribute, 2, i.FLOAT, !1, 24, 0), i.vertexAttribPointer(n.primitiveProgram.colorAttribute, 4, i.FLOAT, !1, 24, 8), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t._webGL.indexBuffer), i.drawElements(i.TRIANGLE_STRIP, t._webGL.indices.length, i.UNSIGNED_SHORT, 0), n.activateDefaultShader()
    }, n.WebGLGraphics.updateGraphics = function (t) {
        for (var e = t._webGL.lastIndex; e < t.graphicsData.length; e++) {
            var i = t.graphicsData[e];
            i.type == n.Graphics.POLY ? (i.fill && i.points.length > 3 && n.WebGLGraphics.buildPoly(i, t._webGL), i.lineWidth > 0 && n.WebGLGraphics.buildLine(i, t._webGL)) : i.type == n.Graphics.RECT ? n.WebGLGraphics.buildRectangle(i, t._webGL) : (i.type == n.Graphics.CIRC || i.type == n.Graphics.ELIP) && n.WebGLGraphics.buildCircle(i, t._webGL)
        }
        t._webGL.lastIndex = t.graphicsData.length;
        var o = n.gl;
        t._webGL.glPoints = new Float32Array(t._webGL.points), o.bindBuffer(o.ARRAY_BUFFER, t._webGL.buffer), o.bufferData(o.ARRAY_BUFFER, t._webGL.glPoints, o.STATIC_DRAW), t._webGL.glIndicies = new Uint16Array(t._webGL.indices), o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, t._webGL.indexBuffer), o.bufferData(o.ELEMENT_ARRAY_BUFFER, t._webGL.glIndicies, o.STATIC_DRAW)
    }, n.WebGLGraphics.buildRectangle = function (t, i) {
        var o = t.points,
            r = o[0],
            s = o[1],
            a = o[2],
            h = o[3];
        if (t.fill) {
            var l = e(t.fillColor),
                u = t.fillAlpha,
                c = l[0] * u,
                d = l[1] * u,
                p = l[2] * u,
                f = i.points,
                m = i.indices,
                g = f.length / 6;
            f.push(r, s), f.push(c, d, p, u), f.push(r + a, s), f.push(c, d, p, u), f.push(r, s + h), f.push(c, d, p, u), f.push(r + a, s + h), f.push(c, d, p, u), m.push(g, g, g + 1, g + 2, g + 3, g + 3)
        }
        t.lineWidth && (t.points = [r, s, r + a, s, r + a, s + h, r, s + h, r, s], n.WebGLGraphics.buildLine(t, i))
    }, n.WebGLGraphics.buildCircle = function (t, i) {
        var o = t.points,
            r = o[0],
            s = o[1],
            a = o[2],
            h = o[3],
            l = 40,
            u = 2 * Math.PI / l;
        if (t.fill) {
            var c = e(t.fillColor),
                d = t.fillAlpha,
                p = c[0] * d,
                f = c[1] * d,
                m = c[2] * d,
                g = i.points,
                v = i.indices,
                y = g.length / 6;
            v.push(y);
            for (var b = 0; l + 1 > b; b++) g.push(r, s, p, f, m, d), g.push(r + Math.sin(u * b) * a, s + Math.cos(u * b) * h, p, f, m, d), v.push(y++, y++);
            v.push(y - 1)
        }
        if (t.lineWidth) {
            t.points = [];
            for (var b = 0; l + 1 > b; b++) t.points.push(r + Math.sin(u * b) * a, s + Math.cos(u * b) * h);
            n.WebGLGraphics.buildLine(t, i)
        }
    }, n.WebGLGraphics.buildLine = function (t, i) {
        var o = t.points;
        if (0 != o.length) {
            var r = new n.Point(o[0], o[1]),
                s = new n.Point(o[o.length - 2], o[o.length - 1]);
            if (r.x == s.x && r.y == s.y) {
                o.pop(), o.pop(), s = new n.Point(o[o.length - 2], o[o.length - 1]);
                var a = s.x + .5 * (r.x - s.x),
                    h = s.y + .5 * (r.y - s.y);
                o.unshift(a, h), o.push(a, h)
            }
            var l, u, c, d, p, f, m, g, v, y, b, x, w, T, _, S, C, E, A, P, R, M = i.points,
                B = i.indices,
                L = o.length / 2,
                I = o.length,
                O = M.length / 6,
                D = t.lineWidth / 2,
                k = e(t.lineColor),
                F = t.lineAlpha,
                N = k[0] * F,
                G = k[1] * F,
                W = k[2] * F;
            l = o[0], u = o[1], c = o[2], d = o[3], m = -(u - d), g = l - c, R = Math.sqrt(m * m + g * g), m /= R, g /= R, m *= D, g *= D, M.push(l - m, u - g, N, G, W, F), M.push(l + m, u + g, N, G, W, F);
            for (var j = 1; L - 1 > j; j++) l = o[2 * (j - 1)], u = o[2 * (j - 1) + 1], c = o[2 * j], d = o[2 * j + 1], p = o[2 * (j + 1)], f = o[2 * (j + 1) + 1], m = -(u - d), g = l - c, R = Math.sqrt(m * m + g * g), m /= R, g /= R, m *= D, g *= D, v = -(d - f), y = c - p, R = Math.sqrt(v * v + y * y), v /= R, y /= R, v *= D, y *= D, w = -g + u - (-g + d), T = -m + c - (-m + l), _ = (-m + l) * (-g + d) - (-m + c) * (-g + u), S = -y + f - (-y + d), C = -v + c - (-v + p), E = (-v + p) * (-y + d) - (-v + c) * (-y + f), A = w * C - S * T, 0 == A && (A += 1), px = (T * E - C * _) / A, py = (S * _ - w * E) / A, P = (px - c) * (px - c) + (py - d) + (py - d), P > 19600 ? (b = m - v, x = g - y, R = Math.sqrt(b * b + x * x), b /= R, x /= R, b *= D, x *= D, M.push(c - b, d - x), M.push(N, G, W, F), M.push(c + b, d + x), M.push(N, G, W, F), M.push(c - b, d - x), M.push(N, G, W, F), I++) : (M.push(px, py), M.push(N, G, W, F), M.push(c - (px - c), d - (py - d)), M.push(N, G, W, F));
            l = o[2 * (L - 2)], u = o[2 * (L - 2) + 1], c = o[2 * (L - 1)], d = o[2 * (L - 1) + 1], m = -(u - d), g = l - c, R = Math.sqrt(m * m + g * g), m /= R, g /= R, m *= D, g *= D, M.push(c - m, d - g), M.push(N, G, W, F), M.push(c + m, d + g), M.push(N, G, W, F), B.push(O);
            for (var j = 0; I > j; j++) B.push(O++);
            B.push(O - 1)
        }
    }, n.WebGLGraphics.buildPoly = function (t, i) {
        var o = t.points;
        if (!(o.length < 6)) {
            for (var r = i.points, s = i.indices, a = o.length / 2, h = e(t.fillColor), l = t.fillAlpha, u = h[0] * l, c = h[1] * l, d = h[2] * l, p = n.PolyK.Triangulate(o), f = r.length / 6, m = 0; m < p.length; m += 3) s.push(p[m] + f), s.push(p[m] + f), s.push(p[m + 1] + f), s.push(p[m + 2] + f), s.push(p[m + 2] + f);
            for (var m = 0; a > m; m++) r.push(o[2 * m], o[2 * m + 1], u, c, d, l)
        }
    }, n._defaultFrame = new n.Rectangle(0, 0, 1, 1), n.gl, n.WebGLRenderer = function (t, e, i, o, r) {
        this.transparent = !! o, this.width = t || 800, this.height = e || 600, this.view = i || document.createElement("canvas"), this.view.width = this.width, this.view.height = this.height;
        var s = this;
        this.view.addEventListener("webglcontextlost", function (t) {
            s.handleContextLost(t)
        }, !1), this.view.addEventListener("webglcontextrestored", function (t) {
            s.handleContextRestored(t)
        }, !1), this.batchs = [];
        try {
            n.gl = this.gl = this.view.getContext("experimental-webgl", {
                alpha: this.transparent,
                antialias: !! r,
                premultipliedAlpha: !1,
                stencil: !0
            })
        } catch (a) {
            throw new Error(" This browser does not support webGL. Try using the canvas renderer" + this)
        }
        n.initPrimitiveShader(), n.initDefaultShader(), n.initDefaultStripShader(), n.activateDefaultShader();
        var h = this.gl;
        n.WebGLRenderer.gl = h, this.batch = new n.WebGLBatch(h), h.disable(h.DEPTH_TEST), h.disable(h.CULL_FACE), h.enable(h.BLEND), h.colorMask(!0, !0, !0, this.transparent), n.projection = new n.Point(400, 300), this.resize(this.width, this.height), this.contextLost = !1, this.stageRenderGroup = new n.WebGLRenderGroup(this.gl)
    }, n.WebGLRenderer.prototype.constructor = n.WebGLRenderer, n.WebGLRenderer.getBatch = function () {
        return 0 == n._batchs.length ? new n.WebGLBatch(n.WebGLRenderer.gl) : n._batchs.pop()
    }, n.WebGLRenderer.returnBatch = function (t) {
        t.clean(), n._batchs.push(t)
    }, n.WebGLRenderer.prototype.render = function (t) {
        if (!this.contextLost) {
            this.__stage !== t && (this.__stage = t, this.stageRenderGroup.setRenderable(t)), n.WebGLRenderer.updateTextures(), n.visibleCount++, t.updateTransform();
            var e = this.gl;
            if (e.colorMask(!0, !0, !0, this.transparent), e.viewport(0, 0, this.width, this.height), e.bindFramebuffer(e.FRAMEBUFFER, null), e.clearColor(t.backgroundColorSplit[0], t.backgroundColorSplit[1], t.backgroundColorSplit[2], !this.transparent), e.clear(e.COLOR_BUFFER_BIT), this.stageRenderGroup.backgroundColor = t.backgroundColorSplit, this.stageRenderGroup.render(n.projection), t.interactive && (t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this))), n.Texture.frameUpdates.length > 0) {
                for (var i = 0; i < n.Texture.frameUpdates.length; i++) n.Texture.frameUpdates[i].updateFrame = !1;
                n.Texture.frameUpdates = []
            }
        }
    }, n.WebGLRenderer.updateTextures = function () {
        for (var t = 0; t < n.texturesToUpdate.length; t++) n.WebGLRenderer.updateTexture(n.texturesToUpdate[t]);
        for (var t = 0; t < n.texturesToDestroy.length; t++) n.WebGLRenderer.destroyTexture(n.texturesToDestroy[t]);
        n.texturesToUpdate = [], n.texturesToDestroy = []
    }, n.WebGLRenderer.updateTexture = function (t) {
        var e = n.gl;
        t._glTexture || (t._glTexture = e.createTexture()), t.hasLoaded && (e.bindTexture(e.TEXTURE_2D, t._glTexture), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), t._powerOf2 ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)), e.bindTexture(e.TEXTURE_2D, null))
    }, n.WebGLRenderer.destroyTexture = function (t) {
        var e = n.gl;
        t._glTexture && (t._glTexture = e.createTexture(), e.deleteTexture(e.TEXTURE_2D, t._glTexture))
    }, n.WebGLRenderer.prototype.resize = function (t, e) {
        this.width = t, this.height = e, this.view.width = t, this.view.height = e, this.gl.viewport(0, 0, this.width, this.height), n.projection.x = this.width / 2, n.projection.y = this.height / 2
    }, n.WebGLRenderer.prototype.handleContextLost = function (t) {
        t.preventDefault(), this.contextLost = !0
    }, n.WebGLRenderer.prototype.handleContextRestored = function () {
        this.gl = this.view.getContext("experimental-webgl", {
            alpha: !0
        }), this.initShaders();
        for (var t in n.TextureCache) {
            var e = n.TextureCache[t].baseTexture;
            e._glTexture = null, n.WebGLRenderer.updateTexture(e)
        }
        for (var i = 0; i < this.batchs.length; i++) this.batchs[i].restoreLostContext(this.gl), this.batchs[i].dirty = !0;
        n._restoreBatchs(this.gl), this.contextLost = !1
    }, n._batchs = [], n._getBatch = function (t) {
        return 0 == n._batchs.length ? new n.WebGLBatch(t) : n._batchs.pop()
    }, n._returnBatch = function (t) {
        t.clean(), n._batchs.push(t)
    }, n._restoreBatchs = function (t) {
        for (var e = 0; e < n._batchs.length; e++) n._batchs[e].restoreLostContext(t)
    }, n.WebGLBatch = function (t) {
        this.gl = t, this.size = 0, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.uvBuffer = t.createBuffer(), this.colorBuffer = t.createBuffer(), this.blendMode = n.blendModes.NORMAL, this.dynamicSize = 1
    }, n.WebGLBatch.prototype.constructor = n.WebGLBatch, n.WebGLBatch.prototype.clean = function () {
        this.verticies = [], this.uvs = [], this.indices = [], this.colors = [], this.dynamicSize = 1, this.texture = null, this.last = null, this.size = 0, this.head, this.tail
    }, n.WebGLBatch.prototype.restoreLostContext = function (t) {
        this.gl = t, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.uvBuffer = t.createBuffer(), this.colorBuffer = t.createBuffer()
    }, n.WebGLBatch.prototype.init = function (t) {
        t.batch = this, this.dirty = !0, this.blendMode = t.blendMode, this.texture = t.texture.baseTexture, this.head = t, this.tail = t, this.size = 1, this.growBatch()
    }, n.WebGLBatch.prototype.insertBefore = function (t, e) {
        this.size++, t.batch = this, this.dirty = !0;
        var i = e.__prev;
        e.__prev = t, t.__next = e, i ? (t.__prev = i, i.__next = t) : this.head = t
    }, n.WebGLBatch.prototype.insertAfter = function (t, e) {
        this.size++, t.batch = this, this.dirty = !0;
        var i = e.__next;
        e.__next = t, t.__prev = e, i ? (t.__next = i, i.__prev = t) : this.tail = t
    }, n.WebGLBatch.prototype.remove = function (t) {
        return this.size--, 0 == this.size ? (t.batch = null, t.__prev = null, t.__next = null, void 0) : (t.__prev ? t.__prev.__next = t.__next : (this.head = t.__next, this.head.__prev = null), t.__next ? t.__next.__prev = t.__prev : (this.tail = t.__prev, this.tail.__next = null), t.batch = null, t.__next = null, t.__prev = null, this.dirty = !0, void 0)
    }, n.WebGLBatch.prototype.split = function (t) {
        this.dirty = !0;
        var e = new n.WebGLBatch(this.gl);
        e.init(t), e.texture = this.texture, e.tail = this.tail, this.tail = t.__prev, this.tail.__next = null, t.__prev = null;
        for (var i = 0; t;) i++, t.batch = e, t = t.__next;
        return e.size = i, this.size -= i, e
    }, n.WebGLBatch.prototype.merge = function (t) {
        this.dirty = !0, this.tail.__next = t.head, t.head.__prev = this.tail, this.size += t.size, this.tail = t.tail;
        for (var e = t.head; e;) e.batch = this, e = e.__next
    }, n.WebGLBatch.prototype.growBatch = function () {
        var t = this.gl;
        this.dynamicSize = 1 == this.size ? 1 : 1.5 * this.size, this.verticies = new Float32Array(8 * this.dynamicSize), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.verticies, t.DYNAMIC_DRAW), this.uvs = new Float32Array(8 * this.dynamicSize), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), t.bufferData(t.ARRAY_BUFFER, this.uvs, t.DYNAMIC_DRAW), this.dirtyUVS = !0, this.colors = new Float32Array(4 * this.dynamicSize), t.bindBuffer(t.ARRAY_BUFFER, this.colorBuffer), t.bufferData(t.ARRAY_BUFFER, this.colors, t.DYNAMIC_DRAW), this.dirtyColors = !0, this.indices = new Uint16Array(6 * this.dynamicSize);
        for (var e = this.indices.length / 6, i = 0; e > i; i++) {
            var n = 6 * i,
                o = 4 * i;
            this.indices[n + 0] = o + 0, this.indices[n + 1] = o + 1, this.indices[n + 2] = o + 2, this.indices[n + 3] = o + 0, this.indices[n + 4] = o + 2, this.indices[n + 5] = o + 3
        }
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW)
    }, n.WebGLBatch.prototype.refresh = function () {
        this.gl, this.dynamicSize < this.size && this.growBatch();
        for (var t, e = 0, i = this.head; i;) {
            t = 8 * e;
            var n = i.texture,
                o = n.frame,
                r = n.baseTexture.width,
                s = n.baseTexture.height;
            this.uvs[t + 0] = o.x / r, this.uvs[t + 1] = o.y / s, this.uvs[t + 2] = (o.x + o.width) / r, this.uvs[t + 3] = o.y / s, this.uvs[t + 4] = (o.x + o.width) / r, this.uvs[t + 5] = (o.y + o.height) / s, this.uvs[t + 6] = o.x / r, this.uvs[t + 7] = (o.y + o.height) / s, i.updateFrame = !1, colorIndex = 4 * e, this.colors[colorIndex] = this.colors[colorIndex + 1] = this.colors[colorIndex + 2] = this.colors[colorIndex + 3] = i.worldAlpha, i = i.__next, e++
        }
        this.dirtyUVS = !0, this.dirtyColors = !0
    }, n.WebGLBatch.prototype.update = function () {
        this.gl;
        for (var t, e, i, o, r, s, a, h, l, u, c, d, p, f, m, g, v = 0, y = this.head; y;) {
            if (y.vcount === n.visibleCount) {
                if (e = y.texture.frame.width, i = y.texture.frame.height, o = y.anchor.x, r = y.anchor.y, s = e * (1 - o), a = e * -o, h = i * (1 - r), l = i * -r, u = 8 * v, t = y.worldTransform, c = t[0], d = t[3], p = t[1], f = t[4], m = t[2], g = t[5], this.verticies[u + 0] = c * a + p * l + m, this.verticies[u + 1] = f * l + d * a + g, this.verticies[u + 2] = c * s + p * l + m, this.verticies[u + 3] = f * l + d * s + g, this.verticies[u + 4] = c * s + p * h + m, this.verticies[u + 5] = f * h + d * s + g, this.verticies[u + 6] = c * a + p * h + m, this.verticies[u + 7] = f * h + d * a + g, y.updateFrame || y.texture.updateFrame) {
                    this.dirtyUVS = !0;
                    var b = y.texture,
                        x = b.frame,
                        w = b.baseTexture.width,
                        T = b.baseTexture.height;
                    this.uvs[u + 0] = x.x / w, this.uvs[u + 1] = x.y / T, this.uvs[u + 2] = (x.x + x.width) / w, this.uvs[u + 3] = x.y / T, this.uvs[u + 4] = (x.x + x.width) / w, this.uvs[u + 5] = (x.y + x.height) / T, this.uvs[u + 6] = x.x / w, this.uvs[u + 7] = (x.y + x.height) / T, y.updateFrame = !1
                }
                if (y.cacheAlpha != y.worldAlpha) {
                    y.cacheAlpha = y.worldAlpha;
                    var _ = 4 * v;
                    this.colors[_] = this.colors[_ + 1] = this.colors[_ + 2] = this.colors[_ + 3] = y.worldAlpha, this.dirtyColors = !0
                }
            } else u = 8 * v, this.verticies[u + 0] = 0, this.verticies[u + 1] = 0, this.verticies[u + 2] = 0, this.verticies[u + 3] = 0, this.verticies[u + 4] = 0, this.verticies[u + 5] = 0, this.verticies[u + 6] = 0, this.verticies[u + 7] = 0;
            v++, y = y.__next
        }
    }, n.WebGLBatch.prototype.render = function (t, e) {
        if (t = t || 0, void 0 == e && (e = this.size), this.dirty && (this.refresh(), this.dirty = !1), 0 != this.size) {
            this.update();
            var i = this.gl,
                o = n.shaderProgram;
            i.useProgram(o), i.bindBuffer(i.ARRAY_BUFFER, this.vertexBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.verticies), i.vertexAttribPointer(o.vertexPositionAttribute, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, this.uvBuffer), this.dirtyUVS && (this.dirtyUVS = !1, i.bufferSubData(i.ARRAY_BUFFER, 0, this.uvs)), i.vertexAttribPointer(o.textureCoordAttribute, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, this.texture._glTexture), i.bindBuffer(i.ARRAY_BUFFER, this.colorBuffer), this.dirtyColors && (this.dirtyColors = !1, i.bufferSubData(i.ARRAY_BUFFER, 0, this.colors)), i.vertexAttribPointer(o.colorAttribute, 1, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var r = e - t;
            i.drawElements(i.TRIANGLES, 6 * r, i.UNSIGNED_SHORT, 6 * 2 * t)
        }
    }, n.WebGLRenderGroup = function (t) {
        this.gl = t, this.root, this.backgroundColor, this.batchs = [], this.toRemove = []
    }, n.WebGLRenderGroup.prototype.constructor = n.WebGLRenderGroup, n.WebGLRenderGroup.prototype.setRenderable = function (t) {
        this.root && this.removeDisplayObjectAndChildren(this.root), t.worldVisible = t.visible, this.root = t, this.addDisplayObjectAndChildren(t)
    }, n.WebGLRenderGroup.prototype.render = function (t) {
        n.WebGLRenderer.updateTextures();
        var e = this.gl;
        e.uniform2f(n.shaderProgram.projectionVector, t.x, t.y), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
        for (var i, o = 0; o < this.batchs.length; o++)
            if (i = this.batchs[o], i instanceof n.WebGLBatch) this.batchs[o].render();
            else {
                var r = i.vcount === n.visibleCount;
                i instanceof n.TilingSprite ? r && this.renderTilingSprite(i, t) : i instanceof n.Strip ? r && this.renderStrip(i, t) : i instanceof n.Graphics ? r && i.renderable && n.WebGLGraphics.renderGraphics(i, t) : i instanceof n.FilterBlock && (i.open ? (e.enable(e.STENCIL_TEST), e.colorMask(!1, !1, !1, !1), e.stencilFunc(e.ALWAYS, 1, 255), e.stencilOp(e.KEEP, e.KEEP, e.REPLACE), n.WebGLGraphics.renderGraphics(i.mask, t), e.colorMask(!0, !0, !0, !1), e.stencilFunc(e.NOTEQUAL, 0, 255), e.stencilOp(e.KEEP, e.KEEP, e.KEEP)) : e.disable(e.STENCIL_TEST))
            }
    }, n.WebGLRenderGroup.prototype.handleFilter = function () {}, n.WebGLRenderGroup.prototype.renderSpecific = function (t, e) {
        n.WebGLRenderer.updateTextures();
        var i = this.gl;
        i.uniform2f(n.shaderProgram.projectionVector, e.x, e.y);
        for (var o, r, s, a, h = t.first; h._iNext && (h = h._iNext, !h.renderable || !h.__renderGroup););
        var l = h.batch;
        if (h instanceof n.Sprite) {
            l = h.batch;
            var u = l.head;
            if (u == h) o = 0;
            else
                for (o = 1; u.__next != h;) o++, u = u.__next
        } else l = h;
        for (var c, d = t, p = t; p.children.length > 0;) p = p.children[p.children.length - 1], p.renderable && (d = p);
        if (d instanceof n.Sprite) {
            c = d.batch;
            var u = c.head;
            if (u == d) s = 0;
            else
                for (s = 1; u.__next != d;) s++, u = u.__next
        } else c = d; if (l == c) return l instanceof n.WebGLBatch ? l.render(o, s + 1) : this.renderSpecial(l, e), void 0;
        r = this.batchs.indexOf(l), a = this.batchs.indexOf(c), l instanceof n.WebGLBatch ? l.render(o) : this.renderSpecial(l, e);
        for (var f = r + 1; a > f; f++) renderable = this.batchs[f], renderable instanceof n.WebGLBatch ? this.batchs[f].render() : this.renderSpecial(renderable, e);
        c instanceof n.WebGLBatch ? c.render(0, s + 1) : this.renderSpecial(c, e)
    }, n.WebGLRenderGroup.prototype.renderSpecial = function (t, e) {
        var i = t.vcount === n.visibleCount;
        if (t instanceof n.TilingSprite) i && this.renderTilingSprite(t, e);
        else if (t instanceof n.Strip) i && this.renderStrip(t, e);
        else if (t instanceof n.CustomRenderable) i && t.renderWebGL(this, e);
        else if (t instanceof n.Graphics) i && t.renderable && n.WebGLGraphics.renderGraphics(t, e);
        else if (t instanceof n.FilterBlock) {
            var o = n.gl;
            t.open ? (o.enable(o.STENCIL_TEST), o.colorMask(!1, !1, !1, !1), o.stencilFunc(o.ALWAYS, 1, 255), o.stencilOp(o.KEEP, o.KEEP, o.REPLACE), n.WebGLGraphics.renderGraphics(t.mask, e), o.colorMask(!0, !0, !0, !0), o.stencilFunc(o.NOTEQUAL, 0, 255), o.stencilOp(o.KEEP, o.KEEP, o.KEEP)) : o.disable(o.STENCIL_TEST)
        }
    }, n.WebGLRenderGroup.prototype.updateTexture = function (t) {
        this.removeObject(t);
        for (var e = t.first; e != this.root && (e = e._iPrev, !e.renderable || !e.__renderGroup););
        for (var i = t.last; i._iNext && (i = i._iNext, !i.renderable || !i.__renderGroup););
        this.insertObject(t, e, i)
    }, n.WebGLRenderGroup.prototype.addFilterBlocks = function (t, e) {
        t.__renderGroup = this, e.__renderGroup = this;
        for (var i = t; i != this.root && (i = i._iPrev, !i.renderable || !i.__renderGroup););
        this.insertAfter(t, i);
        for (var n = e; n != this.root && (n = n._iPrev, !n.renderable || !n.__renderGroup););
        this.insertAfter(e, n)
    }, n.WebGLRenderGroup.prototype.removeFilterBlocks = function (t, e) {
        this.removeObject(t), this.removeObject(e)
    }, n.WebGLRenderGroup.prototype.addDisplayObjectAndChildren = function (t) {
        t.__renderGroup && t.__renderGroup.removeDisplayObjectAndChildren(t);
        for (var e = t.first; e != this.root.first && (e = e._iPrev, !e.renderable || !e.__renderGroup););
        for (var i = t.last; i._iNext && (i = i._iNext, !i.renderable || !i.__renderGroup););
        var n = t.first,
            o = t.last._iNext;
        do n.__renderGroup = this, n.renderable && (this.insertObject(n, e, i), e = n), n = n._iNext; while (n != o)
    }, n.WebGLRenderGroup.prototype.removeDisplayObjectAndChildren = function (t) {
        if (t.__renderGroup == this) {
            t.last;
            do t.__renderGroup = null, t.renderable && this.removeObject(t), t = t._iNext; while (t)
        }
    }, n.WebGLRenderGroup.prototype.insertObject = function (t, e, i) {
        var o = e,
            r = i;
        if (t instanceof n.Sprite) {
            var s, a;
            if (o instanceof n.Sprite) {
                if (s = o.batch, s && s.texture == t.texture.baseTexture && s.blendMode == t.blendMode) return s.insertAfter(t, o), void 0
            } else s = o; if (r)
                if (r instanceof n.Sprite) {
                    if (a = r.batch) {
                        if (a.texture == t.texture.baseTexture && a.blendMode == t.blendMode) return a.insertBefore(t, r), void 0;
                        if (a == s) {
                            var h = s.split(r),
                                l = n.WebGLRenderer.getBatch(),
                                u = this.batchs.indexOf(s);
                            return l.init(t), this.batchs.splice(u + 1, 0, l, h), void 0
                        }
                    }
                } else a = r;
            var l = n.WebGLRenderer.getBatch();
            if (l.init(t), s) {
                var u = this.batchs.indexOf(s);
                this.batchs.splice(u + 1, 0, l)
            } else this.batchs.push(l)
        } else t instanceof n.TilingSprite ? this.initTilingSprite(t) : t instanceof n.Strip && this.initStrip(t), this.insertAfter(t, o)
    }, n.WebGLRenderGroup.prototype.insertAfter = function (t, e) {
        if (e instanceof n.Sprite) {
            var i = e.batch;
            if (i)
                if (i.tail == e) {
                    var o = this.batchs.indexOf(i);
                    this.batchs.splice(o + 1, 0, t)
                } else {
                    var r = i.split(e.__next),
                        o = this.batchs.indexOf(i);
                    this.batchs.splice(o + 1, 0, t, r)
                } else this.batchs.push(t)
        } else {
            var o = this.batchs.indexOf(e);
            this.batchs.splice(o + 1, 0, t)
        }
    }, n.WebGLRenderGroup.prototype.removeObject = function (t) {
        var e;
        if (t instanceof n.Sprite) {
            var i = t.batch;
            if (!i) return;
            i.remove(t), 0 == i.size && (e = i)
        } else e = t; if (e) {
            var o = this.batchs.indexOf(e);
            if (-1 == o) return;
            if (0 == o || o == this.batchs.length - 1) return this.batchs.splice(o, 1), e instanceof n.WebGLBatch && n.WebGLRenderer.returnBatch(e), void 0;
            if (this.batchs[o - 1] instanceof n.WebGLBatch && this.batchs[o + 1] instanceof n.WebGLBatch && this.batchs[o - 1].texture == this.batchs[o + 1].texture && this.batchs[o - 1].blendMode == this.batchs[o + 1].blendMode) return this.batchs[o - 1].merge(this.batchs[o + 1]), e instanceof n.WebGLBatch && n.WebGLRenderer.returnBatch(e), n.WebGLRenderer.returnBatch(this.batchs[o + 1]), this.batchs.splice(o, 2), void 0;
            this.batchs.splice(o, 1), e instanceof n.WebGLBatch && n.WebGLRenderer.returnBatch(e)
        }
    }, n.WebGLRenderGroup.prototype.initTilingSprite = function (t) {
        var e = this.gl;
        t.verticies = new Float32Array([0, 0, t.width, 0, t.width, t.height, 0, t.height]), t.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), t.colors = new Float32Array([1, 1, 1, 1]), t.indices = new Uint16Array([0, 1, 3, 2]), t._vertexBuffer = e.createBuffer(), t._indexBuffer = e.createBuffer(), t._uvBuffer = e.createBuffer(), t._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, t.verticies, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer), e.bufferData(e.ARRAY_BUFFER, t.uvs, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer), e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW), t.texture.baseTexture._glTexture ? (e.bindTexture(e.TEXTURE_2D, t.texture.baseTexture._glTexture), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT), t.texture.baseTexture._powerOf2 = !0) : t.texture.baseTexture._powerOf2 = !0
    }, n.WebGLRenderGroup.prototype.renderStrip = function (t, e) {
        var i = this.gl,
            o = n.shaderProgram;
        i.useProgram(n.stripShaderProgram);
        var r = n.mat3.clone(t.worldTransform);
        n.mat3.transpose(r), i.uniformMatrix3fv(n.stripShaderProgram.translationMatrix, !1, r), i.uniform2f(n.stripShaderProgram.projectionVector, e.x, e.y), i.uniform1f(n.stripShaderProgram.alpha, t.worldAlpha), t.dirty ? (t.dirty = !1, i.bindBuffer(i.ARRAY_BUFFER, t._vertexBuffer), i.bufferData(i.ARRAY_BUFFER, t.verticies, i.STATIC_DRAW), i.vertexAttribPointer(o.vertexPositionAttribute, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, t._uvBuffer), i.bufferData(i.ARRAY_BUFFER, t.uvs, i.STATIC_DRAW), i.vertexAttribPointer(o.textureCoordAttribute, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, t.texture.baseTexture._glTexture), i.bindBuffer(i.ARRAY_BUFFER, t._colorBuffer), i.bufferData(i.ARRAY_BUFFER, t.colors, i.STATIC_DRAW), i.vertexAttribPointer(o.colorAttribute, 1, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t._indexBuffer), i.bufferData(i.ELEMENT_ARRAY_BUFFER, t.indices, i.STATIC_DRAW)) : (i.bindBuffer(i.ARRAY_BUFFER, t._vertexBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, t.verticies), i.vertexAttribPointer(o.vertexPositionAttribute, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, t._uvBuffer), i.vertexAttribPointer(o.textureCoordAttribute, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, t.texture.baseTexture._glTexture), i.bindBuffer(i.ARRAY_BUFFER, t._colorBuffer), i.vertexAttribPointer(o.colorAttribute, 1, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t._indexBuffer)), i.drawElements(i.TRIANGLE_STRIP, t.indices.length, i.UNSIGNED_SHORT, 0), i.useProgram(n.shaderProgram)
    }, n.WebGLRenderGroup.prototype.renderTilingSprite = function (t, e) {
        var i = this.gl;
        n.shaderProgram;
        var o = t.tilePosition,
            r = t.tileScale,
            s = o.x / t.texture.baseTexture.width,
            a = o.y / t.texture.baseTexture.height,
            h = t.width / t.texture.baseTexture.width / r.x,
            l = t.height / t.texture.baseTexture.height / r.y;
        t.uvs[0] = 0 - s, t.uvs[1] = 0 - a, t.uvs[2] = 1 * h - s, t.uvs[3] = 0 - a, t.uvs[4] = 1 * h - s, t.uvs[5] = 1 * l - a, t.uvs[6] = 0 - s, t.uvs[7] = 1 * l - a, i.bindBuffer(i.ARRAY_BUFFER, t._uvBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, t.uvs), this.renderStrip(t, e)
    }, n.WebGLRenderGroup.prototype.initStrip = function (t) {
        var e = this.gl;
        this.shaderProgram, t._vertexBuffer = e.createBuffer(), t._indexBuffer = e.createBuffer(), t._uvBuffer = e.createBuffer(), t._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, t.verticies, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer), e.bufferData(e.ARRAY_BUFFER, t.uvs, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer), e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW)
    }, n.CanvasRenderer = function (t, e, i, n) {
        this.transparent = n, this.width = t || 800, this.height = e || 600, this.view = i || document.createElement("canvas"), this.context = this.view.getContext("2d"), this.refresh = !0, this.view.width = this.width, this.view.height = this.height, this.count = 0
    }, n.CanvasRenderer.prototype.constructor = n.CanvasRenderer, n.CanvasRenderer.prototype.render = function (t) {
        n.texturesToUpdate = [], n.texturesToDestroy = [], t.updateTransform(), this.view.style.backgroundColor == t.backgroundColorString || this.transparent || (this.view.style.backgroundColor = t.backgroundColorString), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.width, this.height), this.renderDisplayObject(t), t.interactive && (t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this))), n.Texture.frameUpdates.length > 0 && (n.Texture.frameUpdates = [])
    }, n.CanvasRenderer.prototype.resize = function (t, e) {
        this.width = t, this.height = e, this.view.width = t, this.view.height = e
    }, n.CanvasRenderer.prototype.renderDisplayObject = function (t) {
        var e, i = this.context;
        i.globalCompositeOperation = "source-over";
        var o = t.last._iNext;
        t = t.first;
        do
            if (e = t.worldTransform, t.visible)
                if (t.renderable) {
                    if (t instanceof n.Sprite) {
                        var r = t.texture.frame;
                        r && (i.globalAlpha = t.worldAlpha, i.setTransform(e[0], e[3], e[1], e[4], e[2], e[5]), i.drawImage(t.texture.baseTexture.source, r.x, r.y, r.width, r.height, t.anchor.x * -r.width, t.anchor.y * -r.height, r.width, r.height))
                    } else if (t instanceof n.Strip) i.setTransform(e[0], e[3], e[1], e[4], e[2], e[5]), this.renderStrip(t);
                    else if (t instanceof n.TilingSprite) i.setTransform(e[0], e[3], e[1], e[4], e[2], e[5]), this.renderTilingSprite(t);
                    else if (t instanceof n.CustomRenderable) t.renderCanvas(this);
                    else if (t instanceof n.Graphics) i.setTransform(e[0], e[3], e[1], e[4], e[2], e[5]), n.CanvasGraphics.renderGraphics(t, i);
                    else if (t instanceof n.FilterBlock)
                        if (t.open) {
                            i.save();
                            var s = t.mask.alpha,
                                a = t.mask.worldTransform;
                            i.setTransform(a[0], a[3], a[1], a[4], a[2], a[5]), t.mask.worldAlpha = .5, i.worldAlpha = 0, n.CanvasGraphics.renderGraphicsMask(t.mask, i), i.clip(), t.mask.worldAlpha = s
                        } else i.restore();
                    t = t._iNext
                } else t = t._iNext;
                else t = t.last._iNext; while (t != o)
    }, n.CanvasRenderer.prototype.renderStripFlat = function (t) {
        var e = this.context,
            i = t.verticies;
        t.uvs;
        var n = i.length / 2;
        this.count++, e.beginPath();
        for (var o = 1; n - 2 > o; o++) {
            var r = 2 * o,
                s = i[r],
                a = i[r + 2],
                h = i[r + 4],
                l = i[r + 1],
                u = i[r + 3],
                c = i[r + 5];
            e.moveTo(s, l), e.lineTo(a, u), e.lineTo(h, c)
        }
        e.fillStyle = "#FF0000", e.fill(), e.closePath()
    }, n.CanvasRenderer.prototype.renderTilingSprite = function (t) {
        var e = this.context;
        e.globalAlpha = t.worldAlpha, t.__tilePattern || (t.__tilePattern = e.createPattern(t.texture.baseTexture.source, "repeat")), e.beginPath();
        var i = t.tilePosition,
            n = t.tileScale;
        e.scale(n.x, n.y), e.translate(i.x, i.y), e.fillStyle = t.__tilePattern, e.fillRect(-i.x, -i.y, t.width / n.x, t.height / n.y), e.scale(1 / n.x, 1 / n.y), e.translate(-i.x, -i.y), e.closePath()
    }, n.CanvasRenderer.prototype.renderStrip = function (t) {
        var e = this.context,
            i = t.verticies,
            n = t.uvs,
            o = i.length / 2;
        this.count++;
        for (var r = 1; o - 2 > r; r++) {
            var s = 2 * r,
                a = i[s],
                h = i[s + 2],
                l = i[s + 4],
                u = i[s + 1],
                c = i[s + 3],
                d = i[s + 5],
                p = n[s] * t.texture.width,
                f = n[s + 2] * t.texture.width,
                m = n[s + 4] * t.texture.width,
                g = n[s + 1] * t.texture.height,
                v = n[s + 3] * t.texture.height,
                y = n[s + 5] * t.texture.height;
            e.save(), e.beginPath(), e.moveTo(a, u), e.lineTo(h, c), e.lineTo(l, d), e.closePath(), e.clip();
            var b = p * v + g * m + f * y - v * m - g * f - p * y,
                x = a * v + g * l + h * y - v * l - g * h - a * y,
                w = p * h + a * m + f * l - h * m - a * f - p * l,
                T = p * v * l + g * h * m + a * f * y - a * v * m - g * f * l - p * h * y,
                _ = u * v + g * d + c * y - v * d - g * c - u * y,
                S = p * c + u * m + f * d - c * m - u * f - p * d,
                C = p * v * d + g * c * m + u * f * y - u * v * m - g * f * d - p * c * y;
            e.transform(x / b, _ / b, w / b, S / b, T / b, C / b), e.drawImage(t.texture.baseTexture.source, 0, 0), e.restore()
        }
    }, n.CanvasGraphics = function () {}, n.CanvasGraphics.renderGraphics = function (t, e) {
        for (var i = t.worldAlpha, o = 0; o < t.graphicsData.length; o++) {
            var r = t.graphicsData[o],
                s = r.points;
            if (e.strokeStyle = color = "#" + ("00000" + (0 | r.lineColor).toString(16)).substr(-6), e.lineWidth = r.lineWidth, r.type == n.Graphics.POLY) {
                e.beginPath(), e.moveTo(s[0], s[1]);
                for (var a = 1; a < s.length / 2; a++) e.lineTo(s[2 * a], s[2 * a + 1]);
                s[0] == s[s.length - 2] && s[1] == s[s.length - 1] && e.closePath(), r.fill && (e.globalAlpha = r.fillAlpha * i, e.fillStyle = color = "#" + ("00000" + (0 | r.fillColor).toString(16)).substr(-6), e.fill()), r.lineWidth && (e.globalAlpha = r.lineAlpha * i, e.stroke())
            } else if (r.type == n.Graphics.RECT) r.fillColor && (e.globalAlpha = r.fillAlpha * i, e.fillStyle = color = "#" + ("00000" + (0 | r.fillColor).toString(16)).substr(-6), e.fillRect(s[0], s[1], s[2], s[3])), r.lineWidth && (e.globalAlpha = r.lineAlpha * i, e.strokeRect(s[0], s[1], s[2], s[3]));
            else if (r.type == n.Graphics.CIRC) e.beginPath(), e.arc(s[0], s[1], s[2], 0, 2 * Math.PI), e.closePath(), r.fill && (e.globalAlpha = r.fillAlpha * i, e.fillStyle = color = "#" + ("00000" + (0 | r.fillColor).toString(16)).substr(-6), e.fill()), r.lineWidth && (e.globalAlpha = r.lineAlpha * i, e.stroke());
            else if (r.type == n.Graphics.ELIP) {
                var h = r.points,
                    l = 2 * h[2],
                    u = 2 * h[3],
                    c = h[0] - l / 2,
                    d = h[1] - u / 2;
                e.beginPath();
                var p = .5522848,
                    f = l / 2 * p,
                    m = u / 2 * p,
                    g = c + l,
                    v = d + u,
                    y = c + l / 2,
                    b = d + u / 2;
                e.moveTo(c, b), e.bezierCurveTo(c, b - m, y - f, d, y, d), e.bezierCurveTo(y + f, d, g, b - m, g, b), e.bezierCurveTo(g, b + m, y + f, v, y, v), e.bezierCurveTo(y - f, v, c, b + m, c, b), e.closePath(), r.fill && (e.globalAlpha = r.fillAlpha * i, e.fillStyle = color = "#" + ("00000" + (0 | r.fillColor).toString(16)).substr(-6), e.fill()), r.lineWidth && (e.globalAlpha = r.lineAlpha * i, e.stroke())
            }
        }
    }, n.CanvasGraphics.renderGraphicsMask = function (t, e) {
        t.worldAlpha;
        var i = t.graphicsData.length;
        i > 1 && (i = 1, console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));
        for (var o = 0; 1 > o; o++) {
            var r = t.graphicsData[o],
                s = r.points;
            if (r.type == n.Graphics.POLY) {
                e.beginPath(), e.moveTo(s[0], s[1]);
                for (var a = 1; a < s.length / 2; a++) e.lineTo(s[2 * a], s[2 * a + 1]);
                s[0] == s[s.length - 2] && s[1] == s[s.length - 1] && e.closePath()
            } else if (r.type == n.Graphics.RECT) e.beginPath(), e.rect(s[0], s[1], s[2], s[3]), e.closePath();
            else if (r.type == n.Graphics.CIRC) e.beginPath(), e.arc(s[0], s[1], s[2], 0, 2 * Math.PI), e.closePath();
            else if (r.type == n.Graphics.ELIP) {
                var h = r.points,
                    l = 2 * h[2],
                    u = 2 * h[3],
                    c = h[0] - l / 2,
                    d = h[1] - u / 2;
                e.beginPath();
                var p = .5522848,
                    f = l / 2 * p,
                    m = u / 2 * p,
                    g = c + l,
                    v = d + u,
                    y = c + l / 2,
                    b = d + u / 2;
                e.moveTo(c, b), e.bezierCurveTo(c, b - m, y - f, d, y, d), e.bezierCurveTo(y + f, d, g, b - m, g, b), e.bezierCurveTo(g, b + m, y + f, v, y, v), e.bezierCurveTo(y - f, v, c, b + m, c, b), e.closePath()
            }
        }
    }, n.Graphics = function () {
        n.DisplayObjectContainer.call(this), this.renderable = !0, this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = "black", this.graphicsData = [], this.currentPath = {
            points: []
        }
    }, n.Graphics.prototype = Object.create(n.DisplayObjectContainer.prototype), n.Graphics.prototype.constructor = n.Graphics, n.Graphics.prototype.lineStyle = function (t, e, i) {
        0 == this.currentPath.points.length && this.graphicsData.pop(), this.lineWidth = t || 0, this.lineColor = e || 0, this.lineAlpha = void 0 == i ? 1 : i, this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [],
            type: n.Graphics.POLY
        }, this.graphicsData.push(this.currentPath)
    }, n.Graphics.prototype.moveTo = function (t, e) {
        0 == this.currentPath.points.length && this.graphicsData.pop(), this.currentPath = this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [],
            type: n.Graphics.POLY
        }, this.currentPath.points.push(t, e), this.graphicsData.push(this.currentPath)
    }, n.Graphics.prototype.lineTo = function (t, e) {
        this.currentPath.points.push(t, e), this.dirty = !0
    }, n.Graphics.prototype.beginFill = function (t, e) {
        this.filling = !0, this.fillColor = t || 0, this.fillAlpha = void 0 == e ? 1 : e
    }, n.Graphics.prototype.endFill = function () {
        this.filling = !1, this.fillColor = null, this.fillAlpha = 1
    }, n.Graphics.prototype.drawRect = function (t, e, i, o) {
        0 == this.currentPath.points.length && this.graphicsData.pop(), this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [t, e, i, o],
            type: n.Graphics.RECT
        }, this.graphicsData.push(this.currentPath), this.dirty = !0
    }, n.Graphics.prototype.drawCircle = function (t, e, i) {
        0 == this.currentPath.points.length && this.graphicsData.pop(), this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [t, e, i, i],
            type: n.Graphics.CIRC
        }, this.graphicsData.push(this.currentPath), this.dirty = !0
    }, n.Graphics.prototype.drawElipse = function (t, e, i, o) {
        0 == this.currentPath.points.length && this.graphicsData.pop(), this.currentPath = {
            lineWidth: this.lineWidth,
            lineColor: this.lineColor,
            lineAlpha: this.lineAlpha,
            fillColor: this.fillColor,
            fillAlpha: this.fillAlpha,
            fill: this.filling,
            points: [t, e, i, o],
            type: n.Graphics.ELIP
        }, this.graphicsData.push(this.currentPath), this.dirty = !0
    }, n.Graphics.prototype.clear = function () {
        this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = []
    }, n.Graphics.POLY = 0, n.Graphics.RECT = 1, n.Graphics.CIRC = 2, n.Graphics.ELIP = 3, n.Strip = function (t, e, i) {
        n.DisplayObjectContainer.call(this), this.texture = t, this.blendMode = n.blendModes.NORMAL;
        try {
            this.uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.verticies = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), this.colors = new Float32Array([1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 3])
        } catch (o) {
            this.uvs = [0, 1, 1, 1, 1, 0, 0, 1], this.verticies = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.colors = [1, 1, 1, 1], this.indices = [0, 1, 2, 3]
        }
        this.width = e, this.height = i, t.baseTexture.hasLoaded ? (this.width = this.texture.frame.width, this.height = this.texture.frame.height, this.updateFrame = !0) : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
    }, n.Strip.prototype = Object.create(n.DisplayObjectContainer.prototype), n.Strip.prototype.constructor = n.Strip, n.Strip.prototype.setTexture = function (t) {
        this.texture = t, this.width = t.frame.width, this.height = t.frame.height, this.updateFrame = !0
    }, n.Strip.prototype.onTextureUpdate = function () {
        this.updateFrame = !0
    }, n.Rope = function (t, e) {
        n.Strip.call(this, t), this.points = e;
        try {
            this.verticies = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length)
        } catch (i) {
            this.verticies = verticies, this.uvs = uvs, this.colors = colors, this.indices = indices
        }
        this.refresh()
    }, n.Rope.prototype = Object.create(n.Strip.prototype), n.Rope.prototype.constructor = n.Rope, n.Rope.prototype.refresh = function () {
        var t = this.points;
        if (!(t.length < 1)) {
            var e = this.uvs,
                i = this.indices,
                n = this.colors,
                o = t[0],
                r = t[0];
            this.count -= .2, e[0] = 0, e[1] = 1, e[2] = 0, e[3] = 1, n[0] = 1, n[1] = 1, i[0] = 0, i[1] = 1;
            for (var s = t.length, a = 1; s > a; a++) {
                var r = t[a],
                    h = 4 * a,
                    l = a / (s - 1);
                a % 2 ? (e[h] = l, e[h + 1] = 0, e[h + 2] = l, e[h + 3] = 1) : (e[h] = l, e[h + 1] = 0, e[h + 2] = l, e[h + 3] = 1), h = 2 * a, n[h] = 1, n[h + 1] = 1, h = 2 * a, i[h] = h, i[h + 1] = h + 1, o = r
            }
        }
    }, n.Rope.prototype.updateTransform = function () {
        var t = this.points;
        if (!(t.length < 1)) {
            var e, i = this.verticies,
                o = t[0],
                r = {
                    x: 0,
                    y: 0
                }, s = t[0];
            this.count -= .2, i[0] = s.x + r.x, i[1] = s.y + r.y, i[2] = s.x - r.x, i[3] = s.y - r.y;
            for (var a = t.length, h = 1; a > h; h++) {
                var s = t[h],
                    l = 4 * h;
                e = h < t.length - 1 ? t[h + 1] : s, r.y = -(e.x - o.x), r.x = e.y - o.y;
                var u = 10 * (1 - h / (a - 1));
                u > 1 && (u = 1);
                var c = Math.sqrt(r.x * r.x + r.y * r.y),
                    d = this.texture.height / 2;
                r.x /= c, r.y /= c, r.x *= d, r.y *= d, i[l] = s.x + r.x, i[l + 1] = s.y + r.y, i[l + 2] = s.x - r.x, i[l + 3] = s.y - r.y, o = s
            }
            n.DisplayObjectContainer.prototype.updateTransform.call(this)
        }
    }, n.Rope.prototype.setTexture = function (t) {
        this.texture = t, this.updateFrame = !0
    }, n.TilingSprite = function (t, e, i) {
        n.DisplayObjectContainer.call(this), this.texture = t, this.width = e, this.height = i, this.tileScale = new n.Point(1, 1), this.tilePosition = new n.Point(0, 0), this.renderable = !0, this.blendMode = n.blendModes.NORMAL
    }, n.TilingSprite.prototype = Object.create(n.DisplayObjectContainer.prototype), n.TilingSprite.prototype.constructor = n.TilingSprite, n.TilingSprite.prototype.setTexture = function (t) {
        this.texture = t, this.updateFrame = !0
    }, n.TilingSprite.prototype.onTextureUpdate = function () {
        this.updateFrame = !0
    }, n.Spine = function (t) {
        if (n.DisplayObjectContainer.call(this), this.spineData = n.AnimCache[t], !this.spineData) throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: " + t);
        this.skeleton = new u.Skeleton(this.spineData), this.skeleton.updateWorldTransform(), this.stateData = new u.AnimationStateData(this.spineData), this.state = new u.AnimationState(this.stateData), this.slotContainers = [];
        for (var e = 0, i = this.skeleton.drawOrder.length; i > e; e++) {
            var o = this.skeleton.drawOrder[e],
                r = o.attachment,
                s = new n.DisplayObjectContainer;
            if (this.slotContainers.push(s), this.addChild(s), r instanceof u.RegionAttachment) {
                var a = r.rendererObject.name,
                    h = this.createSprite(o, r.rendererObject);
                o.currentSprite = h, o.currentSpriteName = a, s.addChild(h)
            }
        }
    }, n.Spine.prototype = Object.create(n.DisplayObjectContainer.prototype), n.Spine.prototype.constructor = n.Spine, n.Spine.prototype.updateTransform = function () {
        this.lastTime = this.lastTime || Date.now();
        var t = .001 * (Date.now() - this.lastTime);
        this.lastTime = Date.now(), this.state.update(t), this.state.apply(this.skeleton), this.skeleton.updateWorldTransform();
        for (var e = this.skeleton.drawOrder, i = 0, o = e.length; o > i; i++) {
            var r = e[i],
                s = r.attachment,
                a = this.slotContainers[i];
            if (s instanceof u.RegionAttachment) {
                if (s.rendererObject && (!r.currentSpriteName || r.currentSpriteName != s.name)) {
                    var h = s.rendererObject.name;
                    if (void 0 !== r.currentSprite && (r.currentSprite.visible = !1), r.sprites = r.sprites || {}, void 0 !== r.sprites[h]) r.sprites[h].visible = !0;
                    else {
                        var l = this.createSprite(r, s.rendererObject);
                        a.addChild(l)
                    }
                    r.currentSprite = r.sprites[h], r.currentSpriteName = h
                }
                a.visible = !0;
                var c = r.bone;
                a.position.x = c.worldX + s.x * c.m00 + s.y * c.m01, a.position.y = c.worldY + s.x * c.m10 + s.y * c.m11, a.scale.x = c.worldScaleX, a.scale.y = c.worldScaleY, a.rotation = -(r.bone.worldRotation * Math.PI / 180)
            } else a.visible = !1
        }
        n.DisplayObjectContainer.prototype.updateTransform.call(this)
    }, n.Spine.prototype.createSprite = function (t, e) {
        var i = n.TextureCache[e.name] ? e.name : e.name + ".png",
            o = new n.Sprite(n.Texture.fromFrame(i));
        return o.scale = e.scale, o.rotation = e.rotation, o.anchor.x = o.anchor.y = .5, t.sprites = t.sprites || {}, t.sprites[e.name] = o, o
    };
    var u = {};
    u.BoneData = function (t, e) {
        this.name = t, this.parent = e
    }, u.BoneData.prototype = {
        length: 0,
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1
    }, u.SlotData = function (t, e) {
        this.name = t, this.boneData = e
    }, u.SlotData.prototype = {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        attachmentName: null
    }, u.Bone = function (t, e) {
        this.data = t, this.parent = e, this.setToSetupPose()
    }, u.Bone.yDown = !1, u.Bone.prototype = {
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        m00: 0,
        m01: 0,
        worldX: 0,
        m10: 0,
        m11: 0,
        worldY: 0,
        worldRotation: 0,
        worldScaleX: 1,
        worldScaleY: 1,
        updateWorldTransform: function (t, e) {
            var i = this.parent;
            null != i ? (this.worldX = this.x * i.m00 + this.y * i.m01 + i.worldX, this.worldY = this.x * i.m10 + this.y * i.m11 + i.worldY, this.worldScaleX = i.worldScaleX * this.scaleX, this.worldScaleY = i.worldScaleY * this.scaleY, this.worldRotation = i.worldRotation + this.rotation) : (this.worldX = this.x, this.worldY = this.y, this.worldScaleX = this.scaleX, this.worldScaleY = this.scaleY, this.worldRotation = this.rotation);
            var n = this.worldRotation * Math.PI / 180,
                o = Math.cos(n),
                r = Math.sin(n);
            this.m00 = o * this.worldScaleX, this.m10 = r * this.worldScaleX, this.m01 = -r * this.worldScaleY, this.m11 = o * this.worldScaleY, t && (this.m00 = -this.m00, this.m01 = -this.m01), e && (this.m10 = -this.m10, this.m11 = -this.m11), u.Bone.yDown && (this.m10 = -this.m10, this.m11 = -this.m11)
        },
        setToSetupPose: function () {
            var t = this.data;
            this.x = t.x, this.y = t.y, this.rotation = t.rotation, this.scaleX = t.scaleX, this.scaleY = t.scaleY
        }
    }, u.Slot = function (t, e, i) {
        this.data = t, this.skeleton = e, this.bone = i, this.setToSetupPose()
    }, u.Slot.prototype = {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        _attachmentTime: 0,
        attachment: null,
        setAttachment: function (t) {
            this.attachment = t, this._attachmentTime = this.skeleton.time
        },
        setAttachmentTime: function (t) {
            this._attachmentTime = this.skeleton.time - t
        },
        getAttachmentTime: function () {
            return this.skeleton.time - this._attachmentTime
        },
        setToSetupPose: function () {
            var t = this.data;
            this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a;
            for (var e = this.skeleton.data.slots, i = 0, n = e.length; n > i; i++)
                if (e[i] == t) {
                    this.setAttachment(t.attachmentName ? this.skeleton.getAttachmentBySlotIndex(i, t.attachmentName) : null);
                    break
                }
        }
    }, u.Skin = function (t) {
        this.name = t, this.attachments = {}
    }, u.Skin.prototype = {
        addAttachment: function (t, e, i) {
            this.attachments[t + ":" + e] = i
        },
        getAttachment: function (t, e) {
            return this.attachments[t + ":" + e]
        },
        _attachAll: function (t, e) {
            for (var i in e.attachments) {
                var n = i.indexOf(":"),
                    o = parseInt(i.substring(0, n)),
                    r = i.substring(n + 1),
                    s = t.slots[o];
                if (s.attachment && s.attachment.name == r) {
                    var a = this.getAttachment(o, r);
                    a && s.setAttachment(a)
                }
            }
        }
    }, u.Animation = function (t, e, i) {
        this.name = t, this.timelines = e, this.duration = i
    }, u.Animation.prototype = {
        apply: function (t, e, i) {
            i && 0 != this.duration && (e %= this.duration);
            for (var n = this.timelines, o = 0, r = n.length; r > o; o++) n[o].apply(t, e, 1)
        },
        mix: function (t, e, i, n) {
            i && 0 != this.duration && (e %= this.duration);
            for (var o = this.timelines, r = 0, s = o.length; s > r; r++) o[r].apply(t, e, n)
        }
    }, u.binarySearch = function (t, e, i) {
        var n = 0,
            o = Math.floor(t.length / i) - 2;
        if (0 == o) return i;
        for (var r = o >>> 1;;) {
            if (t[(r + 1) * i] <= e ? n = r + 1 : o = r, n == o) return (n + 1) * i;
            r = n + o >>> 1
        }
    }, u.linearSearch = function (t, e, i) {
        for (var n = 0, o = t.length - i; o >= n; n += i)
            if (t[n] > e) return n;
        return -1
    }, u.Curves = function (t) {
        this.curves = [], this.curves.length = 6 * (t - 1)
    }, u.Curves.prototype = {
        setLinear: function (t) {
            this.curves[6 * t] = 0
        },
        setStepped: function (t) {
            this.curves[6 * t] = -1
        },
        setCurve: function (t, e, i, n, o) {
            var r = .1,
                s = r * r,
                a = s * r,
                h = 3 * r,
                l = 3 * s,
                u = 6 * s,
                c = 6 * a,
                d = 2 * -e + n,
                p = 2 * -i + o,
                f = 3 * (e - n) + 1,
                m = 3 * (i - o) + 1,
                g = 6 * t,
                v = this.curves;
            v[g] = e * h + d * l + f * a, v[g + 1] = i * h + p * l + m * a, v[g + 2] = d * u + f * c, v[g + 3] = p * u + m * c, v[g + 4] = f * c, v[g + 5] = m * c
        },
        getCurvePercent: function (t, e) {
            e = 0 > e ? 0 : e > 1 ? 1 : e;
            var i = 6 * t,
                n = this.curves,
                o = n[i];
            if (!o) return e;
            if (-1 == o) return 0;
            for (var r = n[i + 1], s = n[i + 2], a = n[i + 3], h = n[i + 4], l = n[i + 5], u = o, c = r, d = 8;;) {
                if (u >= e) {
                    var p = u - o,
                        f = c - r;
                    return f + (c - f) * (e - p) / (u - p)
                }
                if (0 == d) break;
                d--, o += s, r += a, s += h, a += l, u += o, c += r
            }
            return c + (1 - c) * (e - u) / (1 - u)
        }
    }, u.RotateTimeline = function (t) {
        this.curves = new u.Curves(t), this.frames = [], this.frames.length = 2 * t
    }, u.RotateTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function () {
            return this.frames.length / 2
        },
        setFrame: function (t, e, i) {
            t *= 2, this.frames[t] = e, this.frames[t + 1] = i
        },
        apply: function (t, e, i) {
            var n = this.frames;
            if (!(e < n[0])) {
                var o = t.bones[this.boneIndex];
                if (e >= n[n.length - 2]) {
                    for (var r = o.data.rotation + n[n.length - 1] - o.rotation; r > 180;) r -= 360;
                    for (; - 180 > r;) r += 360;
                    return o.rotation += r * i, void 0
                }
                var s = u.binarySearch(n, e, 2),
                    a = n[s - 1],
                    h = n[s],
                    l = 1 - (e - h) / (n[s - 2] - h);
                l = this.curves.getCurvePercent(s / 2 - 1, l);
                for (var r = n[s + 1] - a; r > 180;) r -= 360;
                for (; - 180 > r;) r += 360;
                for (r = o.data.rotation + (a + r * l) - o.rotation; r > 180;) r -= 360;
                for (; - 180 > r;) r += 360;
                o.rotation += r * i
            }
        }
    }, u.TranslateTimeline = function (t) {
        this.curves = new u.Curves(t), this.frames = [], this.frames.length = 3 * t
    }, u.TranslateTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function () {
            return this.frames.length / 3
        },
        setFrame: function (t, e, i, n) {
            t *= 3, this.frames[t] = e, this.frames[t + 1] = i, this.frames[t + 2] = n
        },
        apply: function (t, e, i) {
            var n = this.frames;
            if (!(e < n[0])) {
                var o = t.bones[this.boneIndex];
                if (e >= n[n.length - 3]) return o.x += (o.data.x + n[n.length - 2] - o.x) * i, o.y += (o.data.y + n[n.length - 1] - o.y) * i, void 0;
                var r = u.binarySearch(n, e, 3),
                    s = n[r - 2],
                    a = n[r - 1],
                    h = n[r],
                    l = 1 - (e - h) / (n[r + -3] - h);
                l = this.curves.getCurvePercent(r / 3 - 1, l), o.x += (o.data.x + s + (n[r + 1] - s) * l - o.x) * i, o.y += (o.data.y + a + (n[r + 2] - a) * l - o.y) * i
            }
        }
    }, u.ScaleTimeline = function (t) {
        this.curves = new u.Curves(t), this.frames = [], this.frames.length = 3 * t
    }, u.ScaleTimeline.prototype = {
        boneIndex: 0,
        getFrameCount: function () {
            return this.frames.length / 3
        },
        setFrame: function (t, e, i, n) {
            t *= 3, this.frames[t] = e, this.frames[t + 1] = i, this.frames[t + 2] = n
        },
        apply: function (t, e, i) {
            var n = this.frames;
            if (!(e < n[0])) {
                var o = t.bones[this.boneIndex];
                if (e >= n[n.length - 3]) return o.scaleX += (o.data.scaleX - 1 + n[n.length - 2] - o.scaleX) * i, o.scaleY += (o.data.scaleY - 1 + n[n.length - 1] - o.scaleY) * i, void 0;
                var r = u.binarySearch(n, e, 3),
                    s = n[r - 2],
                    a = n[r - 1],
                    h = n[r],
                    l = 1 - (e - h) / (n[r + -3] - h);
                l = this.curves.getCurvePercent(r / 3 - 1, l), o.scaleX += (o.data.scaleX - 1 + s + (n[r + 1] - s) * l - o.scaleX) * i, o.scaleY += (o.data.scaleY - 1 + a + (n[r + 2] - a) * l - o.scaleY) * i
            }
        }
    }, u.ColorTimeline = function (t) {
        this.curves = new u.Curves(t), this.frames = [], this.frames.length = 5 * t
    }, u.ColorTimeline.prototype = {
        slotIndex: 0,
        getFrameCount: function () {
            return this.frames.length / 2
        },
        setFrame: function (t, e) {
            t *= 5, this.frames[t] = e, this.frames[t + 1] = r, this.frames[t + 2] = g, this.frames[t + 3] = b, this.frames[t + 4] = a
        },
        apply: function (t, e, i) {
            var n = this.frames;
            if (!(e < n[0])) {
                var o = t.slots[this.slotIndex];
                if (e >= n[n.length - 5]) {
                    var r = n.length - 1;
                    return o.r = n[r - 3], o.g = n[r - 2], o.b = n[r - 1], o.a = n[r], void 0
                }
                var s = u.binarySearch(n, e, 5),
                    a = n[s - 4],
                    h = n[s - 3],
                    l = n[s - 2],
                    c = n[s - 1],
                    d = n[s],
                    p = 1 - (e - d) / (n[s - 5] - d);
                p = this.curves.getCurvePercent(s / 5 - 1, p);
                var f = a + (n[s + 1] - a) * p,
                    m = h + (n[s + 2] - h) * p,
                    g = l + (n[s + 3] - l) * p,
                    v = c + (n[s + 4] - c) * p;
                1 > i ? (o.r += (f - o.r) * i, o.g += (m - o.g) * i, o.b += (g - o.b) * i, o.a += (v - o.a) * i) : (o.r = f, o.g = m, o.b = g, o.a = v)
            }
        }
    }, u.AttachmentTimeline = function (t) {
        this.curves = new u.Curves(t), this.frames = [], this.frames.length = t, this.attachmentNames = [], this.attachmentNames.length = t
    }, u.AttachmentTimeline.prototype = {
        slotIndex: 0,
        getFrameCount: function () {
            return this.frames.length
        },
        setFrame: function (t, e, i) {
            this.frames[t] = e, this.attachmentNames[t] = i
        },
        apply: function (t, e) {
            var i = this.frames;
            if (!(e < i[0])) {
                var n;
                n = e >= i[i.length - 1] ? i.length - 1 : u.binarySearch(i, e, 1) - 1;
                var o = this.attachmentNames[n];
                t.slots[this.slotIndex].setAttachment(o ? t.getAttachmentBySlotIndex(this.slotIndex, o) : null)
            }
        }
    }, u.SkeletonData = function () {
        this.bones = [], this.slots = [], this.skins = [], this.animations = []
    }, u.SkeletonData.prototype = {
        defaultSkin: null,
        findBone: function (t) {
            for (var e = this.bones, i = 0, n = e.length; n > i; i++)
                if (e[i].name == t) return e[i];
            return null
        },
        findBoneIndex: function (t) {
            for (var e = this.bones, i = 0, n = e.length; n > i; i++)
                if (e[i].name == t) return i;
            return -1
        },
        findSlot: function (t) {
            for (var e = this.slots, i = 0, n = e.length; n > i; i++)
                if (e[i].name == t) return slot[i];
            return null
        },
        findSlotIndex: function (t) {
            for (var e = this.slots, i = 0, n = e.length; n > i; i++)
                if (e[i].name == t) return i;
            return -1
        },
        findSkin: function (t) {
            for (var e = this.skins, i = 0, n = e.length; n > i; i++)
                if (e[i].name == t) return e[i];
            return null
        },
        findAnimation: function (t) {
            for (var e = this.animations, i = 0, n = e.length; n > i; i++)
                if (e[i].name == t) return e[i];
            return null
        }
    }, u.Skeleton = function (t) {
        this.data = t, this.bones = [];
        for (var e = 0, i = t.bones.length; i > e; e++) {
            var n = t.bones[e],
                o = n.parent ? this.bones[t.bones.indexOf(n.parent)] : null;
            this.bones.push(new u.Bone(n, o))
        }
        this.slots = [], this.drawOrder = [];
        for (var e = 0, i = t.slots.length; i > e; e++) {
            var r = t.slots[e],
                s = this.bones[t.bones.indexOf(r.boneData)],
                a = new u.Slot(r, this, s);
            this.slots.push(a), this.drawOrder.push(a)
        }
    }, u.Skeleton.prototype = {
        x: 0,
        y: 0,
        skin: null,
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        time: 0,
        flipX: !1,
        flipY: !1,
        updateWorldTransform: function () {
            for (var t = this.flipX, e = this.flipY, i = this.bones, n = 0, o = i.length; o > n; n++) i[n].updateWorldTransform(t, e)
        },
        setToSetupPose: function () {
            this.setBonesToSetupPose(), this.setSlotsToSetupPose()
        },
        setBonesToSetupPose: function () {
            for (var t = this.bones, e = 0, i = t.length; i > e; e++) t[e].setToSetupPose()
        },
        setSlotsToSetupPose: function () {
            for (var t = this.slots, e = 0, i = t.length; i > e; e++) t[e].setToSetupPose(e)
        },
        getRootBone: function () {
            return 0 == this.bones.length ? null : this.bones[0]
        },
        findBone: function (t) {
            for (var e = this.bones, i = 0, n = e.length; n > i; i++)
                if (e[i].data.name == t) return e[i];
            return null
        },
        findBoneIndex: function (t) {
            for (var e = this.bones, i = 0, n = e.length; n > i; i++)
                if (e[i].data.name == t) return i;
            return -1
        },
        findSlot: function (t) {
            for (var e = this.slots, i = 0, n = e.length; n > i; i++)
                if (e[i].data.name == t) return e[i];
            return null
        },
        findSlotIndex: function (t) {
            for (var e = this.slots, i = 0, n = e.length; n > i; i++)
                if (e[i].data.name == t) return i;
            return -1
        },
        setSkinByName: function (t) {
            var e = this.data.findSkin(t);
            if (!e) throw "Skin not found: " + t;
            this.setSkin(e)
        },
        setSkin: function (t) {
            this.skin && t && t._attachAll(this, this.skin), this.skin = t
        },
        getAttachmentBySlotName: function (t, e) {
            return this.getAttachmentBySlotIndex(this.data.findSlotIndex(t), e)
        },
        getAttachmentBySlotIndex: function (t, e) {
            if (this.skin) {
                var i = this.skin.getAttachment(t, e);
                if (i) return i
            }
            return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(t, e) : null
        },
        setAttachment: function (t, e) {
            for (var i = this.slots, n = 0, o = i.size; o > n; n++) {
                var r = i[n];
                if (r.data.name == t) {
                    var s = null;
                    if (e && (s = this.getAttachment(n, e), null == s)) throw "Attachment not found: " + e + ", for slot: " + t;
                    return r.setAttachment(s), void 0
                }
            }
            throw "Slot not found: " + t
        },
        update: function (t) {
            time += t
        }
    }, u.AttachmentType = {
        region: 0
    }, u.RegionAttachment = function () {
        this.offset = [], this.offset.length = 8, this.uvs = [], this.uvs.length = 8
    }, u.RegionAttachment.prototype = {
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        width: 0,
        height: 0,
        rendererObject: null,
        regionOffsetX: 0,
        regionOffsetY: 0,
        regionWidth: 0,
        regionHeight: 0,
        regionOriginalWidth: 0,
        regionOriginalHeight: 0,
        setUVs: function (t, e, i, n, o) {
            var r = this.uvs;
            o ? (r[2] = t, r[3] = n, r[4] = t, r[5] = e, r[6] = i, r[7] = e, r[0] = i, r[1] = n) : (r[0] = t, r[1] = n, r[2] = t, r[3] = e, r[4] = i, r[5] = e, r[6] = i, r[7] = n)
        },
        updateOffset: function () {
            var t = this.width / this.regionOriginalWidth * this.scaleX,
                e = this.height / this.regionOriginalHeight * this.scaleY,
                i = -this.width / 2 * this.scaleX + this.regionOffsetX * t,
                n = -this.height / 2 * this.scaleY + this.regionOffsetY * e,
                o = i + this.regionWidth * t,
                r = n + this.regionHeight * e,
                s = this.rotation * Math.PI / 180,
                a = Math.cos(s),
                h = Math.sin(s),
                l = i * a + this.x,
                u = i * h,
                c = n * a + this.y,
                d = n * h,
                p = o * a + this.x,
                f = o * h,
                m = r * a + this.y,
                g = r * h,
                v = this.offset;
            v[0] = l - d, v[1] = c + u, v[2] = l - g, v[3] = m + u, v[4] = p - g, v[5] = m + f, v[6] = p - d, v[7] = c + f
        },
        computeVertices: function (t, e, i, n) {
            t += i.worldX, e += i.worldY;
            var o = i.m00,
                r = i.m01,
                s = i.m10,
                a = i.m11,
                h = this.offset;
            n[0] = h[0] * o + h[1] * r + t, n[1] = h[0] * s + h[1] * a + e, n[2] = h[2] * o + h[3] * r + t, n[3] = h[2] * s + h[3] * a + e, n[4] = h[4] * o + h[5] * r + t, n[5] = h[4] * s + h[5] * a + e, n[6] = h[6] * o + h[7] * r + t, n[7] = h[6] * s + h[7] * a + e
        }
    }, u.AnimationStateData = function (t) {
        this.skeletonData = t, this.animationToMixTime = {}
    }, u.AnimationStateData.prototype = {
        defaultMix: 0,
        setMixByName: function (t, e, i) {
            var n = this.skeletonData.findAnimation(t);
            if (!n) throw "Animation not found: " + t;
            var o = this.skeletonData.findAnimation(e);
            if (!o) throw "Animation not found: " + e;
            this.setMix(n, o, i)
        },
        setMix: function (t, e, i) {
            this.animationToMixTime[t.name + ":" + e.name] = i
        },
        getMix: function (t, e) {
            var i = this.animationToMixTime[t.name + ":" + e.name];
            return i ? i : this.defaultMix
        }
    }, u.AnimationState = function (t) {
        this.data = t, this.queue = []
    }, u.AnimationState.prototype = {
        current: null,
        previous: null,
        currentTime: 0,
        previousTime: 0,
        currentLoop: !1,
        previousLoop: !1,
        mixTime: 0,
        mixDuration: 0,
        update: function (t) {
            if (this.currentTime += t, this.previousTime += t, this.mixTime += t, this.queue.length > 0) {
                var e = this.queue[0];
                this.currentTime >= e.delay && (this._setAnimation(e.animation, e.loop), this.queue.shift())
            }
        },
        apply: function (t) {
            if (this.current)
                if (this.previous) {
                    this.previous.apply(t, this.previousTime, this.previousLoop);
                    var e = this.mixTime / this.mixDuration;
                    e >= 1 && (e = 1, this.previous = null), this.current.mix(t, this.currentTime, this.currentLoop, e)
                } else this.current.apply(t, this.currentTime, this.currentLoop)
        },
        clearAnimation: function () {
            this.previous = null, this.current = null, this.queue.length = 0
        },
        _setAnimation: function (t, e) {
            this.previous = null, t && this.current && (this.mixDuration = this.data.getMix(this.current, t), this.mixDuration > 0 && (this.mixTime = 0, this.previous = this.current, this.previousTime = this.currentTime, this.previousLoop = this.currentLoop)), this.current = t, this.currentLoop = e, this.currentTime = 0
        },
        setAnimationByName: function (t, e) {
            var i = this.data.skeletonData.findAnimation(t);
            if (!i) throw "Animation not found: " + t;
            this.setAnimation(i, e)
        },
        setAnimation: function (t, e) {
            this.queue.length = 0, this._setAnimation(t, e)
        },
        addAnimationByName: function (t, e, i) {
            var n = this.data.skeletonData.findAnimation(t);
            if (!n) throw "Animation not found: " + t;
            this.addAnimation(n, e, i)
        },
        addAnimation: function (t, e, i) {
            var n = {};
            if (n.animation = t, n.loop = e, !i || 0 >= i) {
                var o = 0 == this.queue.length ? this.current : this.queue[this.queue.length - 1].animation;
                i = null != o ? o.duration - this.data.getMix(o, t) + (i || 0) : 0
            }
            n.delay = i, this.queue.push(n)
        },
        isComplete: function () {
            return !this.current || this.currentTime >= this.current.duration
        }
    }, u.SkeletonJson = function (t) {
        this.attachmentLoader = t
    }, u.SkeletonJson.prototype = {
        scale: 1,
        readSkeletonData: function (t) {
            for (var e = new u.SkeletonData, i = t.bones, n = 0, o = i.length; o > n; n++) {
                var r = i[n],
                    s = null;
                if (r.parent && (s = e.findBone(r.parent), !s)) throw "Parent bone not found: " + r.parent;
                var a = new u.BoneData(r.name, s);
                a.length = (r.length || 0) * this.scale, a.x = (r.x || 0) * this.scale, a.y = (r.y || 0) * this.scale, a.rotation = r.rotation || 0, a.scaleX = r.scaleX || 1, a.scaleY = r.scaleY || 1, e.bones.push(a)
            }
            for (var h = t.slots, n = 0, o = h.length; o > n; n++) {
                var l = h[n],
                    a = e.findBone(l.bone);
                if (!a) throw "Slot bone not found: " + l.bone;
                var c = new u.SlotData(l.name, a),
                    d = l.color;
                d && (c.r = u.SkeletonJson.toColor(d, 0), c.g = u.SkeletonJson.toColor(d, 1), c.b = u.SkeletonJson.toColor(d, 2), c.a = u.SkeletonJson.toColor(d, 3)), c.attachmentName = l.attachment, e.slots.push(c)
            }
            var p = t.skins;
            for (var f in p)
                if (p.hasOwnProperty(f)) {
                    var m = p[f],
                        g = new u.Skin(f);
                    for (var v in m)
                        if (m.hasOwnProperty(v)) {
                            var y = e.findSlotIndex(v),
                                b = m[v];
                            for (var x in b)
                                if (b.hasOwnProperty(x)) {
                                    var w = this.readAttachment(g, x, b[x]);
                                    null != w && g.addAttachment(y, x, w)
                                }
                        }
                    e.skins.push(g), "default" == g.name && (e.defaultSkin = g)
                }
            var T = t.animations;
            for (var _ in T) T.hasOwnProperty(_) && this.readAnimation(_, T[_], e);
            return e
        },
        readAttachment: function (t, e, i) {
            e = i.name || e;
            var n = u.AttachmentType[i.type || "region"];
            if (n == u.AttachmentType.region) {
                var o = new u.RegionAttachment;
                return o.x = (i.x || 0) * this.scale, o.y = (i.y || 0) * this.scale, o.scaleX = i.scaleX || 1, o.scaleY = i.scaleY || 1, o.rotation = i.rotation || 0, o.width = (i.width || 32) * this.scale, o.height = (i.height || 32) * this.scale, o.updateOffset(), o.rendererObject = {}, o.rendererObject.name = e, o.rendererObject.scale = {}, o.rendererObject.scale.x = o.scaleX, o.rendererObject.scale.y = o.scaleY, o.rendererObject.rotation = -o.rotation * Math.PI / 180, o
            }
            throw "Unknown attachment type: " + n
        },
        readAnimation: function (t, e, i) {
            var n = [],
                o = 0,
                r = e.bones;
            for (var s in r)
                if (r.hasOwnProperty(s)) {
                    var a = i.findBoneIndex(s);
                    if (-1 == a) throw "Bone not found: " + s;
                    var h = r[s];
                    for (var l in h)
                        if (h.hasOwnProperty(l)) {
                            var c = h[l];
                            if ("rotate" == l) {
                                var d = new u.RotateTimeline(c.length);
                                d.boneIndex = a;
                                for (var p = 0, f = 0, m = c.length; m > f; f++) {
                                    var g = c[f];
                                    d.setFrame(p, g.time, g.angle), u.SkeletonJson.readCurve(d, p, g), p++
                                }
                                n.push(d), o = Math.max(o, d.frames[2 * d.getFrameCount() - 2])
                            } else {
                                if ("translate" != l && "scale" != l) throw "Invalid timeline type for a bone: " + l + " (" + s + ")";
                                var d, v = 1;
                                "scale" == l ? d = new u.ScaleTimeline(c.length) : (d = new u.TranslateTimeline(c.length), v = this.scale), d.boneIndex = a;
                                for (var p = 0, f = 0, m = c.length; m > f; f++) {
                                    var g = c[f],
                                        y = (g.x || 0) * v,
                                        b = (g.y || 0) * v;
                                    d.setFrame(p, g.time, y, b), u.SkeletonJson.readCurve(d, p, g), p++
                                }
                                n.push(d), o = Math.max(o, d.frames[3 * d.getFrameCount() - 3])
                            }
                        }
                }
            var x = e.slots;
            for (var w in x)
                if (x.hasOwnProperty(w)) {
                    var T = x[w],
                        _ = i.findSlotIndex(w);
                    for (var l in T)
                        if (T.hasOwnProperty(l)) {
                            var c = T[l];
                            if ("color" == l) {
                                var d = new u.ColorTimeline(c.length);
                                d.slotIndex = _;
                                for (var p = 0, f = 0, m = c.length; m > f; f++) {
                                    var g = c[f],
                                        S = g.color,
                                        C = u.SkeletonJson.toColor(S, 0),
                                        E = u.SkeletonJson.toColor(S, 1),
                                        A = u.SkeletonJson.toColor(S, 2),
                                        P = u.SkeletonJson.toColor(S, 3);
                                    d.setFrame(p, g.time, C, E, A, P), u.SkeletonJson.readCurve(d, p, g), p++
                                }
                                n.push(d), o = Math.max(o, d.frames[5 * d.getFrameCount() - 5])
                            } else {
                                if ("attachment" != l) throw "Invalid timeline type for a slot: " + l + " (" + w + ")";
                                var d = new u.AttachmentTimeline(c.length);
                                d.slotIndex = _;
                                for (var p = 0, f = 0, m = c.length; m > f; f++) {
                                    var g = c[f];
                                    d.setFrame(p++, g.time, g.name)
                                }
                                n.push(d), o = Math.max(o, d.frames[d.getFrameCount() - 1])
                            }
                        }
                }
            i.animations.push(new u.Animation(t, n, o))
        }
    }, u.SkeletonJson.readCurve = function (t, e, i) {
        var n = i.curve;
        n && ("stepped" == n ? t.curves.setStepped(e) : n instanceof Array && t.curves.setCurve(e, n[0], n[1], n[2], n[3]))
    }, u.SkeletonJson.toColor = function (t, e) {
        if (8 != t.length) throw "Color hexidecimal length must be 8, recieved: " + t;
        return parseInt(t.substring(2 * e, 2), 16) / 255
    }, u.Atlas = function (t, e) {
        this.textureLoader = e, this.pages = [], this.regions = [];
        var i = new u.AtlasReader(t),
            n = [];
        n.length = 4;
        for (var o = null;;) {
            var r = i.readLine();
            if (null == r) break;
            if (r = i.trim(r), 0 == r.length) o = null;
            else if (o) {
                var s = new u.AtlasRegion;
                s.name = r, s.page = o, s.rotate = "true" == i.readValue(), i.readTuple(n);
                var a = parseInt(n[0]),
                    h = parseInt(n[1]);
                i.readTuple(n);
                var l = parseInt(n[0]),
                    c = parseInt(n[1]);
                s.u = a / o.width, s.v = h / o.height, s.rotate ? (s.u2 = (a + c) / o.width, s.v2 = (h + l) / o.height) : (s.u2 = (a + l) / o.width, s.v2 = (h + c) / o.height), s.x = a, s.y = h, s.width = Math.abs(l), s.height = Math.abs(c), 4 == i.readTuple(n) && (s.splits = [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), parseInt(n[3])], 4 == i.readTuple(n) && (s.pads = [parseInt(n[0]), parseInt(n[1]), parseInt(n[2]), parseInt(n[3])], i.readTuple(n))), s.originalWidth = parseInt(n[0]), s.originalHeight = parseInt(n[1]), i.readTuple(n), s.offsetX = parseInt(n[0]), s.offsetY = parseInt(n[1]), s.index = parseInt(i.readValue()), this.regions.push(s)
            } else {
                o = new u.AtlasPage, o.name = r, o.format = u.Atlas.Format[i.readValue()], i.readTuple(n), o.minFilter = u.Atlas.TextureFilter[n[0]], o.magFilter = u.Atlas.TextureFilter[n[1]];
                var d = i.readValue();
                o.uWrap = u.Atlas.TextureWrap.clampToEdge, o.vWrap = u.Atlas.TextureWrap.clampToEdge, "x" == d ? o.uWrap = u.Atlas.TextureWrap.repeat : "y" == d ? o.vWrap = u.Atlas.TextureWrap.repeat : "xy" == d && (o.uWrap = o.vWrap = u.Atlas.TextureWrap.repeat), e.load(o, r), this.pages.push(o)
            }
        }
    }, u.Atlas.prototype = {
        findRegion: function (t) {
            for (var e = this.regions, i = 0, n = e.length; n > i; i++)
                if (e[i].name == t) return e[i];
            return null
        },
        dispose: function () {
            for (var t = this.pages, e = 0, i = t.length; i > e; e++) this.textureLoader.unload(t[e].rendererObject)
        },
        updateUVs: function (t) {
            for (var e = this.regions, i = 0, n = e.length; n > i; i++) {
                var o = e[i];
                o.page == t && (o.u = o.x / t.width, o.v = o.y / t.height, o.rotate ? (o.u2 = (o.x + o.height) / t.width, o.v2 = (o.y + o.width) / t.height) : (o.u2 = (o.x + o.width) / t.width, o.v2 = (o.y + o.height) / t.height))
            }
        }
    }, u.Atlas.Format = {
        alpha: 0,
        intensity: 1,
        luminanceAlpha: 2,
        rgb565: 3,
        rgba4444: 4,
        rgb888: 5,
        rgba8888: 6
    }, u.Atlas.TextureFilter = {
        nearest: 0,
        linear: 1,
        mipMap: 2,
        mipMapNearestNearest: 3,
        mipMapLinearNearest: 4,
        mipMapNearestLinear: 5,
        mipMapLinearLinear: 6
    }, u.Atlas.TextureWrap = {
        mirroredRepeat: 0,
        clampToEdge: 1,
        repeat: 2
    }, u.AtlasPage = function () {}, u.AtlasPage.prototype = {
        name: null,
        format: null,
        minFilter: null,
        magFilter: null,
        uWrap: null,
        vWrap: null,
        rendererObject: null,
        width: 0,
        height: 0
    }, u.AtlasRegion = function () {}, u.AtlasRegion.prototype = {
        page: null,
        name: null,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        u: 0,
        v: 0,
        u2: 0,
        v2: 0,
        offsetX: 0,
        offsetY: 0,
        originalWidth: 0,
        originalHeight: 0,
        index: 0,
        rotate: !1,
        splits: null,
        pads: null
    }, u.AtlasReader = function (t) {
        this.lines = t.split(/\r\n|\r|\n/)
    }, u.AtlasReader.prototype = {
        index: 0,
        trim: function (t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        readLine: function () {
            return this.index >= this.lines.length ? null : this.lines[this.index++]
        },
        readValue: function () {
            var t = this.readLine(),
                e = t.indexOf(":");
            if (-1 == e) throw "Invalid line: " + t;
            return this.trim(t.substring(e + 1))
        },
        readTuple: function (t) {
            var e = this.readLine(),
                i = e.indexOf(":");
            if (-1 == i) throw "Invalid line: " + e;
            for (var n = 0, o = i + 1; 3 > n; n++) {
                var r = e.indexOf(",", o);
                if (-1 == r) {
                    if (0 == n) throw "Invalid line: " + e;
                    break
                }
                t[n] = this.trim(e.substr(o, r - o)), o = r + 1
            }
            return t[n] = this.trim(e.substring(o)), n + 1
        }
    }, u.AtlasAttachmentLoader = function (t) {
        this.atlas = t
    }, u.AtlasAttachmentLoader.prototype = {
        newAttachment: function (t, e, i) {
            switch (e) {
            case u.AttachmentType.region:
                var n = this.atlas.findRegion(i);
                if (!n) throw "Region not found in atlas: " + i + " (" + e + ")";
                var o = new u.RegionAttachment(i);
                return o.rendererObject = n, o.setUVs(n.u, n.v, n.u2, n.v2, n.rotate), o.regionOffsetX = n.offsetX, o.regionOffsetY = n.offsetY, o.regionWidth = n.width, o.regionHeight = n.height, o.regionOriginalWidth = n.originalWidth, o.regionOriginalHeight = n.originalHeight, o
            }
            throw "Unknown attachment type: " + e
        }
    }, n.AnimCache = {}, u.Bone.yDown = !0, n.CustomRenderable = function () {
        n.DisplayObject.call(this)
    }, n.CustomRenderable.prototype = Object.create(n.DisplayObject.prototype), n.CustomRenderable.prototype.constructor = n.CustomRenderable, n.CustomRenderable.prototype.renderCanvas = function () {}, n.CustomRenderable.prototype.initWebGL = function () {}, n.CustomRenderable.prototype.renderWebGL = function () {}, n.BaseTextureCache = {}, n.texturesToUpdate = [], n.texturesToDestroy = [], n.BaseTexture = function (t) {
        if (n.EventTarget.call(this), this.width = 100, this.height = 100, this.hasLoaded = !1, this.source = t, t) {
            if (this.source instanceof Image || this.source instanceof HTMLImageElement)
                if (this.source.complete) this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, n.texturesToUpdate.push(this);
                else {
                    var e = this;
                    this.source.onload = function () {
                        e.hasLoaded = !0, e.width = e.source.width, e.height = e.source.height, n.texturesToUpdate.push(e), e.dispatchEvent({
                            type: "loaded",
                            content: e
                        })
                    }
                } else this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, n.texturesToUpdate.push(this);
            this._powerOf2 = !1
        }
    }, n.BaseTexture.prototype.constructor = n.BaseTexture, n.BaseTexture.prototype.destroy = function () {
        this.source instanceof Image && (this.source.src = null), this.source = null, n.texturesToDestroy.push(this)
    }, n.BaseTexture.fromImage = function (t, e) {
        var i = n.BaseTextureCache[t];
        if (!i) {
            var o = new Image;
            e && (o.crossOrigin = ""), o.src = t, i = new n.BaseTexture(o), n.BaseTextureCache[t] = i
        }
        return i
    }, n.TextureCache = {}, n.FrameCache = {}, n.Texture = function (t, e) {
        if (n.EventTarget.call(this), e || (this.noFrame = !0, e = new n.Rectangle(0, 0, 1, 1)), t instanceof n.Texture && (t = t.baseTexture), this.baseTexture = t, this.frame = e, this.trim = new n.Point, this.scope = this, t.hasLoaded) this.noFrame && (e = new n.Rectangle(0, 0, t.width, t.height)), this.setFrame(e);
        else {
            var i = this;
            t.addEventListener("loaded", function () {
                i.onBaseTextureLoaded()
            })
        }
    }, n.Texture.prototype.constructor = n.Texture, n.Texture.prototype.onBaseTextureLoaded = function () {
        var t = this.baseTexture;
        t.removeEventListener("loaded", this.onLoaded), this.noFrame && (this.frame = new n.Rectangle(0, 0, t.width, t.height)), this.noFrame = !1, this.width = this.frame.width, this.height = this.frame.height, this.scope.dispatchEvent({
            type: "update",
            content: this
        })
    }, n.Texture.prototype.destroy = function (t) {
        t && this.baseTexture.destroy()
    }, n.Texture.prototype.setFrame = function (t) {
        if (this.frame = t, this.width = t.width, this.height = t.height, t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
        this.updateFrame = !0, n.Texture.frameUpdates.push(this)
    }, n.Texture.fromImage = function (t, e) {
        var i = n.TextureCache[t];
        return i || (i = new n.Texture(n.BaseTexture.fromImage(t, e)), n.TextureCache[t] = i), i
    }, n.Texture.fromFrame = function (t) {
        var e = n.TextureCache[t];
        if (!e) throw new Error("The frameId '" + t + "' does not exist in the texture cache " + this);
        return e
    }, n.Texture.fromCanvas = function (t) {
        var e = new n.BaseTexture(t);
        return new n.Texture(e)
    }, n.Texture.addTextureToCache = function (t, e) {
        n.TextureCache[e] = t
    }, n.Texture.removeTextureFromCache = function (t) {
        var e = n.TextureCache[t];
        return n.TextureCache[t] = null, e
    }, n.Texture.frameUpdates = [], n.RenderTexture = function (t, e) {
        n.EventTarget.call(this), this.width = t || 100, this.height = e || 100, this.indetityMatrix = n.mat3.create(), this.frame = new n.Rectangle(0, 0, this.width, this.height), n.gl ? this.initWebGL() : this.initCanvas()
    }, n.RenderTexture.prototype = Object.create(n.Texture.prototype), n.RenderTexture.prototype.constructor = n.RenderTexture, n.RenderTexture.prototype.initWebGL = function () {
        var t = n.gl;
        this.glFramebuffer = t.createFramebuffer(), t.bindFramebuffer(t.FRAMEBUFFER, this.glFramebuffer), this.glFramebuffer.width = this.width, this.glFramebuffer.height = this.height, this.baseTexture = new n.BaseTexture, this.baseTexture.width = this.width, this.baseTexture.height = this.height, this.baseTexture._glTexture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.baseTexture._glTexture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), this.baseTexture.isRender = !0, t.bindFramebuffer(t.FRAMEBUFFER, this.glFramebuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.baseTexture._glTexture, 0), this.projection = new n.Point(this.width / 2, this.height / 2), this.render = this.renderWebGL
    }, n.RenderTexture.prototype.resize = function (t, e) {
        if (this.width = t, this.height = e, n.gl) {
            this.projection.x = this.width / 2, this.projection.y = this.height / 2;
            var i = n.gl;
            i.bindTexture(i.TEXTURE_2D, this.baseTexture._glTexture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, this.width, this.height, 0, i.RGBA, i.UNSIGNED_BYTE, null)
        } else this.frame.width = this.width, this.frame.height = this.height, this.renderer.resize(this.width, this.height)
    }, n.RenderTexture.prototype.initCanvas = function () {
        this.renderer = new n.CanvasRenderer(this.width, this.height, null, 0), this.baseTexture = new n.BaseTexture(this.renderer.view), this.frame = new n.Rectangle(0, 0, this.width, this.height), this.render = this.renderCanvas
    }, n.RenderTexture.prototype.renderWebGL = function (t, e, i) {
        var o = n.gl;
        o.colorMask(!0, !0, !0, !0), o.viewport(0, 0, this.width, this.height), o.bindFramebuffer(o.FRAMEBUFFER, this.glFramebuffer), i && (o.clearColor(0, 0, 0, 0), o.clear(o.COLOR_BUFFER_BIT));
        var r = t.children,
            s = t.worldTransform;
        t.worldTransform = n.mat3.create(), t.worldTransform[4] = -1, t.worldTransform[5] = 2 * this.projection.y, e && (t.worldTransform[2] = e.x, t.worldTransform[5] -= e.y), n.visibleCount++, t.vcount = n.visibleCount;
        for (var a = 0, h = r.length; h > a; a++) r[a].updateTransform();
        var l = t.__renderGroup;
        l ? t == l.root ? l.render(this.projection) : l.renderSpecific(t, this.projection) : (this.renderGroup || (this.renderGroup = new n.WebGLRenderGroup(o)), this.renderGroup.setRenderable(t), this.renderGroup.render(this.projection)), t.worldTransform = s
    }, n.RenderTexture.prototype.renderCanvas = function (t, e, i) {
        var o = t.children;
        t.worldTransform = n.mat3.create(), e && (t.worldTransform[2] = e.x, t.worldTransform[5] = e.y);
        for (var r = 0, s = o.length; s > r; r++) o[r].updateTransform();
        i && this.renderer.context.clearRect(0, 0, this.width, this.height), this.renderer.renderDisplayObject(t), this.renderer.context.setTransform(1, 0, 0, 1, 0, 0)
    }, n.AssetLoader = function (t, e) {
        n.EventTarget.call(this), this.assetURLs = t, this.crossorigin = e, this.loadersByType = {
            jpg: n.ImageLoader,
            jpeg: n.ImageLoader,
            png: n.ImageLoader,
            gif: n.ImageLoader,
            json: n.JsonLoader,
            anim: n.SpineLoader,
            xml: n.BitmapFontLoader,
            fnt: n.BitmapFontLoader
        }
    }, n.AssetLoader.prototype.constructor = n.AssetLoader, n.AssetLoader.prototype.load = function () {
        var t = this;
        this.loadCount = this.assetURLs.length;
        for (var e = 0; e < this.assetURLs.length; e++) {
            var i = this.assetURLs[e],
                n = i.split(".").pop().toLowerCase(),
                o = this.loadersByType[n];
            if (!o) throw new Error(n + " is an unsupported file type");
            var r = new o(i, this.crossorigin);
            r.addEventListener("loaded", function () {
                t.onAssetLoaded()
            }), r.load()
        }
    }, n.AssetLoader.prototype.onAssetLoaded = function () {
        this.loadCount--, this.dispatchEvent({
            type: "onProgress",
            content: this
        }), this.onProgress && this.onProgress(), 0 == this.loadCount && (this.dispatchEvent({
            type: "onComplete",
            content: this
        }), this.onComplete && this.onComplete())
    }, n.JsonLoader = function (t, e) {
        n.EventTarget.call(this), this.url = t, this.crossorigin = e, this.baseUrl = t.replace(/[^\/]*$/, ""), this.loaded = !1
    }, n.JsonLoader.prototype.constructor = n.JsonLoader, n.JsonLoader.prototype.load = function () {
        this.ajaxRequest = new l;
        var t = this;
        this.ajaxRequest.onreadystatechange = function () {
            t.onJSONLoaded()
        }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/json"), this.ajaxRequest.send(null)
    }, n.JsonLoader.prototype.onJSONLoaded = function () {
        if (4 == this.ajaxRequest.readyState)
            if (200 == this.ajaxRequest.status || -1 == window.location.href.indexOf("http"))
                if (this.json = JSON.parse(this.ajaxRequest.responseText), this.json.frames) {
                    var t = this,
                        e = this.baseUrl + this.json.meta.image,
                        i = new n.ImageLoader(e, this.crossorigin),
                        o = this.json.frames;
                    this.texture = i.texture.baseTexture, i.addEventListener("loaded", function () {
                        t.onLoaded()
                    });
                    for (var r in o) {
                        var s = o[r].frame;
                        s && (n.TextureCache[r] = new n.Texture(this.texture, {
                            x: s.x,
                            y: s.y,
                            width: s.w,
                            height: s.h
                        }), o[r].trimmed && (n.TextureCache[r].realSize = o[r].spriteSourceSize, n.TextureCache[r].trim.x = 0))
                    }
                    i.load()
                } else if (this.json.bones) {
            var a = new u.SkeletonJson,
                h = a.readSkeletonData(this.json);
            n.AnimCache[this.url] = h, this.onLoaded()
        } else this.onLoaded();
        else this.onError()
    }, n.JsonLoader.prototype.onLoaded = function () {
        this.loaded = !0, this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, n.JsonLoader.prototype.onError = function () {
        this.dispatchEvent({
            type: "error",
            content: this
        })
    }, n.SpriteSheetLoader = function (t, e) {
        n.EventTarget.call(this), this.url = t, this.crossorigin = e, this.baseUrl = t.replace(/[^\/]*$/, ""), this.texture = null, this.frames = {}
    }, n.SpriteSheetLoader.prototype.constructor = n.SpriteSheetLoader, n.SpriteSheetLoader.prototype.load = function () {
        var t = this,
            e = new n.JsonLoader(this.url, this.crossorigin);
        e.addEventListener("loaded", function (e) {
            t.json = e.content.json, t.onJSONLoaded()
        }), e.load()
    }, n.SpriteSheetLoader.prototype.onJSONLoaded = function () {
        var t = this,
            e = this.baseUrl + this.json.meta.image,
            i = new n.ImageLoader(e, this.crossorigin),
            o = this.json.frames;
        this.texture = i.texture.baseTexture, i.addEventListener("loaded", function () {
            t.onLoaded()
        });
        for (var r in o) {
            var s = o[r].frame;
            s && (n.TextureCache[r] = new n.Texture(this.texture, {
                x: s.x,
                y: s.y,
                width: s.w,
                height: s.h
            }), o[r].trimmed && (n.TextureCache[r].realSize = o[r].spriteSourceSize, n.TextureCache[r].trim.x = 0))
        }
        i.load()
    }, n.SpriteSheetLoader.prototype.onLoaded = function () {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, n.ImageLoader = function (t, e) {
        n.EventTarget.call(this), this.texture = n.Texture.fromImage(t, e)
    }, n.ImageLoader.prototype.constructor = n.ImageLoader, n.ImageLoader.prototype.load = function () {
        if (this.texture.baseTexture.hasLoaded) this.onLoaded();
        else {
            var t = this;
            this.texture.baseTexture.addEventListener("loaded", function () {
                t.onLoaded()
            })
        }
    }, n.ImageLoader.prototype.onLoaded = function () {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, n.BitmapFontLoader = function (t, e) {
        n.EventTarget.call(this), this.url = t, this.crossorigin = e, this.baseUrl = t.replace(/[^\/]*$/, ""), this.texture = null
    }, n.BitmapFontLoader.prototype.constructor = n.BitmapFontLoader, n.BitmapFontLoader.prototype.load = function () {
        this.ajaxRequest = new XMLHttpRequest;
        var t = this;
        this.ajaxRequest.onreadystatechange = function () {
            t.onXMLLoaded()
        }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/xml"), this.ajaxRequest.send(null)
    }, n.BitmapFontLoader.prototype.onXMLLoaded = function () {
        if (4 == this.ajaxRequest.readyState && (200 == this.ajaxRequest.status || -1 == window.location.href.indexOf("http"))) {
            var t = this.baseUrl + this.ajaxRequest.responseXML.getElementsByTagName("page")[0].attributes.getNamedItem("file").nodeValue,
                e = new n.ImageLoader(t, this.crossorigin);
            this.texture = e.texture.baseTexture;
            var i = {}, o = this.ajaxRequest.responseXML.getElementsByTagName("info")[0],
                r = this.ajaxRequest.responseXML.getElementsByTagName("common")[0];
            i.font = o.attributes.getNamedItem("face").nodeValue, i.size = parseInt(o.attributes.getNamedItem("size").nodeValue, 10), i.lineHeight = parseInt(r.attributes.getNamedItem("lineHeight").nodeValue, 10), i.chars = {};
            for (var s = this.ajaxRequest.responseXML.getElementsByTagName("char"), a = 0; a < s.length; a++) {
                var h = parseInt(s[a].attributes.getNamedItem("id").nodeValue, 10),
                    l = {
                        x: parseInt(s[a].attributes.getNamedItem("x").nodeValue, 10),
                        y: parseInt(s[a].attributes.getNamedItem("y").nodeValue, 10),
                        width: parseInt(s[a].attributes.getNamedItem("width").nodeValue, 10),
                        height: parseInt(s[a].attributes.getNamedItem("height").nodeValue, 10)
                    };
                n.TextureCache[h] = new n.Texture(this.texture, l), i.chars[h] = {
                    xOffset: parseInt(s[a].attributes.getNamedItem("xoffset").nodeValue, 10),
                    yOffset: parseInt(s[a].attributes.getNamedItem("yoffset").nodeValue, 10),
                    xAdvance: parseInt(s[a].attributes.getNamedItem("xadvance").nodeValue, 10),
                    kerning: {},
                    texture: new n.Texture(this.texture, l)
                }
            }
            var u = this.ajaxRequest.responseXML.getElementsByTagName("kerning");
            for (a = 0; a < u.length; a++) {
                var c = parseInt(u[a].attributes.getNamedItem("first").nodeValue, 10),
                    d = parseInt(u[a].attributes.getNamedItem("second").nodeValue, 10),
                    p = parseInt(u[a].attributes.getNamedItem("amount").nodeValue, 10);
                i.chars[d].kerning[c] = p
            }
            n.BitmapText.fonts[i.font] = i;
            var f = this;
            e.addEventListener("loaded", function () {
                f.onLoaded()
            }), e.load()
        }
    }, n.BitmapFontLoader.prototype.onLoaded = function () {
        this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, n.SpineLoader = function (t, e) {
        n.EventTarget.call(this), this.url = t, this.crossorigin = e, this.loaded = !1
    }, n.SpineLoader.prototype.constructor = n.SpineLoader, n.SpineLoader.prototype.load = function () {
        var t = this,
            e = new n.JsonLoader(this.url, this.crossorigin);
        e.addEventListener("loaded", function (e) {
            t.json = e.content.json, t.onJSONLoaded()
        }), e.load()
    }, n.SpineLoader.prototype.onJSONLoaded = function () {
        var t = new u.SkeletonJson,
            e = t.readSkeletonData(this.json);
        n.AnimCache[this.url] = e, this.onLoaded()
    }, n.SpineLoader.prototype.onLoaded = function () {
        this.loaded = !0, this.dispatchEvent({
            type: "loaded",
            content: this
        })
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports.PIXI = n) : i.PIXI = n
}.call(this), define("pixi", function (t) {
    return function () {
        var e;
        return e || t.PIXI
    }
}(this)), define("absolute/snapshot", ["pixi"], function (t) {
    var e = function (t) {
        this.initSnapshot(t)
    };
    return e.constructor = e, e.prototype.initSnapshot = function (e) {
        var i = new t.Stage;
        this.renderer = new t.CanvasRenderer(e.width, e.height), i.addChild(e), this.renderer.render(i)
    }, e.prototype.getSnapshot = function () {
        return t.Texture.fromCanvas(this.renderer.view)
    }, e
}), define("absolute/spriteutils", ["absolute/snapshot"], function (t) {
    var e = {
        overlay: function (e) {
            var i, n = new t(e),
                o = n.getSnapshot(),
                r = o.baseTexture.source.getContext("2d"),
                s = r.getImageData(o.frame.x, o.frame.y, o.frame.width, o.frame.height);
            r.createImageData(o.frame.width, o.frame.height);
            var a = s.data;
            for (i = 0; i < a.length; i += 4) {
                var h = a[i],
                    l = a[i + 1],
                    u = a[i + 2],
                    c = .2126 * h + .7152 * l + .0722 * u;
                a[i] = a[i + 1] = a[i + 2] = c
            }
            return PIXI.Texture.fromCanvas(r.canvas)
        }
    };
    return e
}), define("absolute/button", ["pixi", "absolute/snapshot", "absolute/audiomanager", "absolute/platform", "absolute/spriteutils"], function (t, e, i, n, o) {
    var r = function (t, e, i, n) {
        this._initButton(t, e, i, n)
    };
    return r.constructor = r, r.prototype = Object.create(t.Sprite.prototype), r.prototype._initButton = function (i, r, s, a) {
        if (this.replaceOnHover = !! a, !this.replaceOnHover) {
            var h = new t.Sprite(i);
            h.addChild(new t.Sprite(r));
            var l = new e(h);
            r = l.getSnapshot(), this.replaceOnHover = !0
        }
        t.Sprite.call(this, i), this.active = !0, this.action = s, this.images = {}, this.defaultImage = i, this.hoverImage = r, this.disabledImage = o.overlay(this, "rgb(0, 0, 0, 0.5)"), this.buttonMode = !0, this.setInteractive(!0);
        var u = this;
        n.supportsTouch() || (this.mouseover = function () {
            u.setTexture(u.hoverImage)
        }), this.mouseout = function () {
            u.setTexture(u.defaultImage)
        }, n.supportsTouch() ? (this.touchstart = function () {
            u.setTexture(u.defaultImage), u.doAction()
        }, this.tap = function () {}) : this.click = function () {
            u.setTexture(u.defaultImage), u.doAction()
        }
    }, r.prototype.doAction = function () {
        i.simulSoundSupport() && i.playSound("button_click"), this.action && this.action()
    }, r.prototype.isActive = function () {
        return this.active
    }, r.prototype.setActive = function (t) {
        this.active = t, t ? this.setTexture(this.defaultImage) : this.setTexture(this.disabledImage), this.setInteractive(t)
    }, r.prototype.getWidth = function () {
        return this.defaultImage.width
    }, r.prototype.getHeight = function () {
        return this.defaultImage.height
    }, r
}), define("absolute/coords", ["absolute/platform"], function (t) {
    var e = {
        x: function (e) {
            return Math.round(e * t.getResScale())
        },
        y: function (e) {
            return Math.round(e * t.getResScale())
        },
        offsetX: function (t, e) {
            return e.position.x + t
        },
        offsetY: function (t, e) {
            return e.position.y + t
        },
        centerX: function (t, e) {
            return (e.width - t.width) / 2
        },
        centerY: function (t, e) {
            return (e.height - t.height) / 2
        }
    };
    return e
}), define("absolute/digitsprite", ["pixi"], function (t) {
    var e = function (t) {
        this.initDigitSprite(t)
    };
    return e.constructor = e, e.prototype = Object.create(t.Sprite.prototype), e.prototype.initDigitSprite = function (e) {
        var i;
        for (this.textures = [], i = 0; 10 > i; i += 1) this.textures.push(t.Texture.fromFrame(e + "_0" + i + ".png"));
        this.textures.push(t.Texture.fromFrame(e + "_colon.png")), this.textures.push(t.Texture.fromFrame(e + "_comma.png")), this.index = 0, t.Sprite.call(this, this.textures[0])
    }, e.prototype.setDigit = function (t) {
        var e = parseInt(t);
        this.index = e >= 0 && 10 > e ? e : ":" === t ? 10 : "," === t ? 11 : 0, this.setTexture(this.textures[this.index])
    }, e.prototype.getDigitWidth = function () {
        return this.width
    }, e
}), define("absolute/digitlabel", ["pixi", "absolute/digitsprite"], function (t, e) {
    var i = function (t, e, i) {
        this.initDigitLabel(t, e, i)
    };
    return i.constructor = i, i.prototype = Object.create(t.DisplayObjectContainer.prototype), i.prototype.initDigitLabel = function (i, n, o) {
        t.DisplayObjectContainer.call(this), o = o || "number_large", n = n || 1, this.text = "", this.numDigits = i || 8, this.numCommas = Math.ceil(this.numDigits / 3 - 1), this.numSprites = this.numDigits + this.numCommas, this.sprites = [];
        for (var r = 0; r < this.numSprites; ++r) {
            var s = new e(o);
            s.scale.x = s.scale.y = n, this.sprites.push(s), this.addChild(s)
        }
        this.layout()
    }, i.prototype.getText = function () {
        return this.text
    }, i.prototype.setText = function (t) {
        this.text = t, this.layout()
    }, i.prototype.layout = function () {
        for (var t = 0, e = 0; e < this.sprites.length; e++) this.sprites[e].visible = !1;
        if (this.text.length > 0)
            for (var i = 0, n = this.text.length; n > i; ++i) this.sprites[i].visible = !0, this.sprites[i].setDigit(this.text[i]), this.sprites[i].position.x = t, t += this.sprites[i].getDigitWidth();
        this.width = t, this.height = this.sprites[0].height
    }, i
}), define("absolute/eventbus", [], function () {
    var t = {
        events: {},
        addEventListener: function (t, e) {
            void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e)
        },
        removeEventListener: function (t, e) {
            var i = this.events[t];
            if (i)
                for (var n = 0, o = i.length; o > n; ++n)
                    if (e === i[n]) return i.splice(n, 1), void 0
        },
        dispatchEvent: function (t) {
            var e = this.events[t];
            if (e)
                for (var i in e) {
                    var n = e[i];
                    "function" == typeof n && n(t)
                }
        }
    };
    return t
}), define("absolute/analytics", [], function () {
    var t = {
        init: function (t) {
            this.useFlurry = !1, "undefined" != typeof FlurryAgent && (FlurryAgent.startSession(t.flurry.apiKey), this.useFlurry = !0)
        },
        setGameVersion: function (t) {
            this.useFlurry && FlurryAgent.setAppVersion(t)
        },
        logEvent: function (t, e, i) {
            e = e || {}, i = !! i, this.useFlurry && FlurryAgent.logEvent(t, e, i)
        },
        endTimedEvent: function (t) {
            this.useFlurry && FlurryAgent.endTimedEvent(t)
        }
    };
    return t
}), define("absolute/game", ["absolute/storagemanager", "absolute/gameconfig", "absolute/analytics", "absolute/debug"], function (t, e, i, n) {
    var o = function (t, e) {
        this._initGame(t, e)
    };
    return o.prototype._initGame = function (n, o) {
        t.prefix = n + "_", e.load(o), i.init(o.config.analytics), i.setGameVersion(o.versionString), this.ui = null, this.initVisibilityChangeHandlers()
    }, o.prototype.start = function () {}, o.prototype.initVisibilityChangeHandlers = function () {
        "hidden" in document ? document.addEventListener("visibilitychange", function () {
            n.log("visibilitychange"), this.handleVisibilityChange(document.hidden)
        }.bind(this), !1) : "mozHidden" in document ? document.addEventListener("mozvisibilitychange", function () {
            n.log("mozvisibilitychange"), this.handleVisibilityChange(document.mozHidden)
        }.bind(this), !1) : "webkitHidden" in document ? document.addEventListener("webkitvisibilitychange", function () {
            n.log("webkitvisibilitychange"), this.handleVisibilityChange(document.webkitHidden)
        }.bind(this), !1) : "msHidden" in document ? document.addEventListener("msvisibilitychange", function () {
            n.log("msvisibilitychange"), this.handleVisibilityChange(document.msHidden)
        }.bind(this), !1) : "onpagehide" in window && (window.addEventListener("pagehide", function () {
            n.log("pagehide"), this.handleVisibilityChange(!0)
        }.bind(this), !1), window.addEventListener("pageshow", function () {
            n.log("pageshow"), this.handleVisibilityChange(!1)
        }.bind(this), !1)), "onblur" in document && (window.addEventListener("blur", function () {
            n.log("blur"), this.handleVisibilityChange(!0)
        }.bind(this), !1), window.addEventListener("focus", function () {
            n.log("focus"), this.handleVisibilityChange(!1)
        }.bind(this), !1), visHandled = !0), "onfocusout" in document && (window.addEventListener("focusout", function () {
            n.log("onfocusout"), this.handleVisibilityChange(!0)
        }.bind(this), !1), window.addEventListener("focusin", function () {
            n.log("onfocusin"), this.handleVisibilityChange(!1)
        }.bind(this), !1))
    }, o.prototype.handleVisibilityChange = function () {}, o.prototype.load = function (t, e, i) {
        this.ui.load(t, e, i)
    }, o
}),
function (t, e) {
    function i(t) {
        return document.createElement(t)
    }

    function n(t, e) {
        for (var i in e) try {
            t.style[i] = e[i]
        } catch (n) {}
        return t
    }

    function o(t) {
        return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof t
    }

    function r(t, e) {
        if ("array" !== o(e)) return -1;
        if (e.indexOf) return e.indexOf(t);
        for (var i = 0, n = e.length; n > i; i++)
            if (e[i] === t) return i;
        return -1
    }

    function s() {
        var t = arguments;
        for (var e in t[1])
            if (t[1].hasOwnProperty(e)) switch (o(t[1][e])) {
            case "object":
                t[0][e] = s({}, t[0][e], t[1][e]);
                break;
            case "array":
                t[0][e] = t[1][e].slice(0);
                break;
            default:
                t[0][e] = t[1][e]
            }
            return t.length > 2 ? s.apply(null, [t[0]].concat(Array.prototype.slice.call(t, 2))) : t[0]
    }

    function a(t, e, i) {
        var n, o, r, s, a, l, u, c, d;
        return s = .5 >= i ? i * (1 + e) : i + e - i * e, 0 === s ? "#000" : (a = 2 * i - s, l = (s - a) / s, t = 6 * t, u = Math.floor(t), c = t - u, d = s * l * c, 0 === u || 6 === u ? (n = s, o = a + d, r = a) : 1 === u ? (n = s - d, o = s, r = a) : 2 === u ? (n = a, o = s, r = a + d) : 3 === u ? (n = a, o = s - d, r = s) : 4 === u ? (n = a + d, o = a, r = s) : (n = s, o = a, r = s - d), "#" + h(n) + h(o) + h(r))
    }

    function h(t) {
        return t = Math.round(255 * t).toString(16), 1 === t.length ? "0" + t : t
    }

    function l(t, e, i, n) {
        t.addEventListener ? t[n ? "removeEventListener" : "addEventListener"](e, i, !1) : t.attachEvent && t[n ? "detachEvent" : "attachEvent"]("on" + e, i)
    }

    function u(t, h) {
        function v() {
            for (O = F.history; O--;) Y[O] = 0 === O ? k.fps : Y[O - 1], z[O] = 0 === O ? k.duration : z[O - 1]
        }

        function y(t, e, i, n) {
            return P[0 | t][Math.round(Math.min((e - i) / (n - i) * W, W))]
        }

        function b() {
            N.legend.fps !== q && (N.legend.fps = q, N.legend[f] = q ? "FPS" : "ms"), I = q ? k.fps : k.duration, N.count[f] = I > 999 ? "999+" : I.toFixed(I > 99 ? 0 : F.decimals)
        }

        function x() {
            if (R = c(), X < R - F.threshold && (k.fps -= k.fps / Math.max(1, 60 * F.smoothing / F.interval), k.duration = 1e3 / k.fps), v(), b(), F.heat) {
                if (j.length)
                    for (O = j.length; O--;) j[O].el.style[A[j[O].name].heatOn] = q ? y(A[j[O].name].heatmap, k.fps, 0, F.maxFps) : y(A[j[O].name].heatmap, k.duration, F.threshold, 0);
                if (N.graph && A.column.heatOn)
                    for (O = G.length; O--;) G[O].style[A.column.heatOn] = q ? y(A.column.heatmap, Y[O], 0, F.maxFps) : y(A.column.heatmap, z[O], F.threshold, 0)
            }
            if (N.graph)
                for (D = 0; D < F.history; D++) G[D].style.height = (q ? Y[D] ? Math.round(L / F.maxFps * Math.min(Y[D], F.maxFps)) : 0 : z[D] ? Math.round(L / F.threshold * Math.min(z[D], F.threshold)) : 0) + "px"
        }

        function w() {
            F.interval < 20 ? (M = p(w), x()) : (M = setTimeout(w, F.interval), B = p(x))
        }

        function T(t) {
            t = t || window.event, t.preventDefault ? (t.preventDefault(), t.stopPropagation()) : (t.returnValue = !1, t.cancelBubble = !0), k.toggle()
        }

        function _() {
            F.toggleOn && l(N.container, F.toggleOn, T, 1), t.removeChild(N.container)
        }

        function S() {
            if (A = u.theme[F.theme], P = A.compiledHeatmaps || [], !P.length && A.heatmaps.length) {
                for (D = 0; D < A.heatmaps.length; D++)
                    for (P[D] = [], O = 0; W >= O; O++) P[D][O] = a(.33 / W * O, A.heatmaps[D].saturation, A.heatmaps[D].lightness);
                A.compiledHeatmaps = P
            }
        }

        function C() {
            N.container && _(), S(), N.container = n(i("div"), A.container), N.count = N.container.appendChild(n(i("div"), A.count)), N.legend = N.container.appendChild(n(i("div"), A.legend)), N.graph = F.graph ? N.container.appendChild(n(i("div"), A.graph)) : 0, j.length = 0;
            for (var e in N) N[e] && A[e].heatOn && j.push({
                name: e,
                el: N[e]
            });
            if (G.length = 0, N.graph)
                for (N.graph.style.width = F.history * A.column.width + (F.history - 1) * A.column.spacing + "px", O = 0; O < F.history; O++) G[O] = N.graph.appendChild(n(i("div"), A.column)), G[O].style.position = "absolute", G[O].style.bottom = 0, G[O].style.right = O * A.column.width + O * A.column.spacing + "px", G[O].style.width = A.column.width + "px", G[O].style.height = "0px";
            E(), b(), t.appendChild(N.container), N.graph && (L = N.graph.clientHeight), F.toggleOn && ("click" === F.toggleOn && (N.container.style.cursor = "pointer"), l(N.container, F.toggleOn, T))
        }

        function E() {
            n(N.container, F)
        }
        "object" === o(t) && t.nodeType === e && (h = t, t = document.body), t || (t = document.body);
        var A, P, R, M, B, L, I, O, D, k = this,
            F = s({}, u.defaults, h || {}),
            N = {}, G = [],
            W = 100,
            j = [],
            U = 0,
            H = F.threshold,
            V = 0,
            X = c() - H,
            Y = [],
            z = [],
            q = "fps" === F.show;
        k.options = F, k.fps = 0, k.duration = 0, k.isPaused = 0, k.tickStart = function () {
            V = c()
        }, k.tick = function () {
            R = c(), U = R - X, H += (U - H) / F.smoothing, k.fps = 1e3 / H, k.duration = X > V ? H : R - V, X = R
        }, k.pause = function () {
            return M && (k.isPaused = 1, clearTimeout(M), d(M), d(B), M = B = 0), k
        }, k.resume = function () {
            return M || (k.isPaused = 0, w()), k
        }, k.set = function (t, e) {
            return F[t] = e, q = "fps" === F.show, -1 !== r(t, m) && C(), -1 !== r(t, g) && E(), k
        }, k.showDuration = function () {
            return k.set("show", "ms"), k
        }, k.showFps = function () {
            return k.set("show", "fps"), k
        }, k.toggle = function () {
            return k.set("show", q ? "ms" : "fps"), k
        }, k.hide = function () {
            return k.pause(), N.container.style.display = "none", k
        }, k.show = function () {
            return k.resume(), N.container.style.display = "block", k
        }, k.destroy = function () {
            k.pause(), _(), k.tick = k.tickStart = function () {}
        },
        function () {
            C(), w()
        }()
    }
    var c;
    ! function () {
        var e = t.performance;
        if (e && (e.now || e.webkitNow)) {
            var i = e.now ? "now" : "webkitNow";
            c = e[i].bind(e)
        } else c = function () {
            return +new Date
        }
    }();
    var d = t.cancelAnimationFrame || t.cancelRequestAnimationFrame,
        p = t.requestAnimationFrame;
    ! function () {
        for (var e = ["moz", "webkit", "o"], i = 0, n = 0, o = e.length; o > n && !d; ++n) d = t[e[n] + "CancelAnimationFrame"] || t[e[n] + "CancelRequestAnimationFrame"], p = d && t[e[n] + "RequestAnimationFrame"];
        d || (p = function (e) {
            var n = c(),
                o = Math.max(0, 16 - (n - i));
            return i = n + o, t.setTimeout(function () {
                e(n + o)
            }, o)
        }, d = function (t) {
            clearTimeout(t)
        })
    }();
    var f = "string" === o(document.createElement("div").textContent) ? "textContent" : "innerText";
    u.extend = s, window.FPSMeter = u, u.defaults = {
        interval: 100,
        smoothing: 10,
        show: "fps",
        toggleOn: "click",
        decimals: 1,
        maxFps: 60,
        threshold: 100,
        position: "absolute",
        zIndex: 10,
        left: "5px",
        top: "5px",
        right: "auto",
        bottom: "auto",
        margin: "0 0 0 0",
        theme: "dark",
        heat: 0,
        graph: 0,
        history: 20
    };
    var m = ["toggleOn", "theme", "heat", "graph", "history"],
        g = ["position", "zIndex", "left", "top", "right", "bottom", "margin"]
}(window),
function (t, e) {
    e.theme = {};
    var i = e.theme.base = {
        heatmaps: [],
        container: {
            heatOn: null,
            heatmap: null,
            padding: "5px",
            minWidth: "95px",
            height: "30px",
            lineHeight: "30px",
            textAlign: "right",
            textShadow: "none"
        },
        count: {
            heatOn: null,
            heatmap: null,
            position: "absolute",
            top: 0,
            right: 0,
            padding: "5px 10px",
            height: "30px",
            fontSize: "24px",
            fontFamily: "Consolas, Andale Mono, monospace",
            zIndex: 2
        },
        legend: {
            heatOn: null,
            heatmap: null,
            position: "absolute",
            top: 0,
            left: 0,
            padding: "5px 10px",
            height: "30px",
            fontSize: "12px",
            lineHeight: "32px",
            fontFamily: "sans-serif",
            textAlign: "left",
            zIndex: 2
        },
        graph: {
            heatOn: null,
            heatmap: null,
            position: "relative",
            boxSizing: "padding-box",
            MozBoxSizing: "padding-box",
            height: "100%",
            zIndex: 1
        },
        column: {
            width: 4,
            spacing: 1,
            heatOn: null,
            heatmap: null
        }
    };
    e.theme.dark = e.extend({}, i, {
        heatmaps: [{
            saturation: .8,
            lightness: .8
        }],
        container: {
            background: "#222",
            color: "#fff",
            border: "1px solid #1a1a1a",
            textShadow: "1px 1px 0 #222"
        },
        count: {
            heatOn: "color"
        },
        column: {
            background: "#3f3f3f"
        }
    }), e.theme.light = e.extend({}, i, {
        heatmaps: [{
            saturation: .5,
            lightness: .5
        }],
        container: {
            color: "#666",
            background: "#fff",
            textShadow: "1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
        },
        count: {
            heatOn: "color"
        },
        column: {
            background: "#eaeaea"
        }
    }), e.theme.colorful = e.extend({}, i, {
        heatmaps: [{
            saturation: .5,
            lightness: .6
        }],
        container: {
            heatOn: "backgroundColor",
            background: "#888",
            color: "#fff",
            textShadow: "1px 1px 0 rgba(0,0,0,.2)",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
        },
        column: {
            background: "#777",
            backgroundColor: "rgba(0,0,0,.2)"
        }
    }), e.theme.transparent = e.extend({}, i, {
        heatmaps: [{
            saturation: .8,
            lightness: .5
        }],
        container: {
            padding: 0,
            color: "#fff",
            textShadow: "1px 1px 0 rgba(0,0,0,.5)"
        },
        count: {
            padding: "0 5px",
            height: "40px",
            lineHeight: "40px"
        },
        legend: {
            padding: "0 5px",
            height: "40px",
            lineHeight: "42px"
        },
        graph: {
            height: "40px"
        },
        column: {
            width: 5,
            background: "#999",
            heatOn: "backgroundColor",
            opacity: .5
        }
    })
}(window, FPSMeter), define("fpsmeter", function (t) {
    return function () {
        var e;
        return e || t.FPSMeter
    }
}(this)), define("absolute/gameui", ["pixi", "tween", "absolute/debug", "fpsmeter"], function (t, e, i, n) {
    var o = function (t, e, i) {
        this._initGameUI(t, e, i)
    };
    return o.prototype._initGameUI = function (e, o, r) {
        this.currentScreen = null, this.modal = null, this.lastRender = 0, this.frameRequest = 0, this.width = o, this.height = r, this.portrait = r > o, this.container = document.getElementById(e), this.stage = new t.Stage(0, !0), i.enabled && (this.meter = new n), this.container.onmousedown = this.container.ontouchstart = function (t) {
            t.preventDefault()
        }, this.renderer = new t.CanvasRenderer(o, r), this.renderer.transparent = !0, this.offScreenRenderer = new t.CanvasRenderer(o, r), this.offScreenRenderer.transparent = !0, this.container.appendChild(this.renderer.view), window.addEventListener("resize", this.resize.bind(this)), this.resize()
    }, o.prototype.resize = function () {
        var t = document.documentElement.clientWidth,
            e = document.documentElement.clientHeight,
            i = t,
            n = e,
            o = t / e;
        this.portrait ? o > .83 ? i = .83 * e : .7 > o && (n = t / .7) : (o = 1 / o, o > .83 ? n = .83 * t : .65 > o && (i = e / .65)), this.renderer.view.style.width = i + "px", this.renderer.view.style.height = n + "px", this.renderer.view.style.marginLeft = t > i ? (t - i) / 2 + "px" : "0", this.renderer.view.style.marginTop = e > n ? (e - n) / 2 + "px" : "0"
    }, o.prototype.render = function () {
        this.renderer.render(this.stage)
    }, o.prototype.renderOffScreen = function () {
        this.offScreenRenderer.render(this.stage)
    }, o.prototype.animate = function () {
        var t = function () {
            (new Date).getTime() - this.lastRender > 200 && (cancelAnimationFrame(this.frameRequest), this.frameRequest = requestAnimFrame(o)), setTimeout(t, 100)
        }.bind(this);
        this.frameRequest && cancelAnimationFrame(this.frameRequest);
        var n = this,
            o = function () {
                i.enabled && n.meter.tick(), n.beforeRender(), e.update(), n.renderer.render(n.stage), n.afterRender(), n.lastRender = (new Date).getTime(), n.frameRequest = requestAnimFrame(o)
            };
        this.frameRequest = requestAnimFrame(o), setTimeout(t, 100)
    }, o.prototype.beforeRender = function () {}, o.prototype.afterRender = function () {}, o.prototype.showScreen = function (t) {
        this.currentScreen && (this.currentScreen.onHide(), this.hideCurrent()), this.currentScreen = t, this.currentScreen && (this.showCurrent(), this.currentScreen.onShow())
    }, o.prototype.showModal = function (e) {
        this.modal = e;
        var i = new t.CanvasRenderer(this.width, this.height),
            n = new t.Graphics;
        n.beginFill(65793, .5), n.drawRect(0, 0, this.width, this.height), n.endFill(), this.stage.addChild(n), i.render(this.stage), this.stage.removeChild(n), this.modalBG = new t.Sprite(t.Texture.fromCanvas(i.view)), this.hideCurrent(), this.stage.addChild(this.modalBG), this.stage.addChild(this.modal), this.modal.onShow()
    }, o.prototype.hideModal = function () {
        this.modal && (this.modal.onHide(), this.stage.removeChild(this.modal), this.stage.removeChild(this.modalBG), this.showCurrent()), this.modal = null
    }, o.prototype.hideCurrent = function () {
        if (this.currentScreen) try {
            this.stage.removeChild(this.currentScreen)
        } catch (t) {}
    }, o.prototype.showCurrent = function () {
        if (this.currentScreen) try {
            this.stage.addChild(this.currentScreen)
        } catch (t) {}
    }, o
}), define("absolute/textutils", [], function () {
    var t = {
        _thousandsSep: ",",
        formatInt: function (t) {
            return t > 999 ? this.formatInt(Math.floor(t / 1e3)) + this._thousandsSep + this.zeroPad(t % 1e3) : t + ""
        },
        zeroPad: function (t) {
            var e = "";
            return 100 > t && (e += "0"), 10 > t && (e += "0"), e += t
        }
    };
    return t
}), define("absolute/togglebutton", ["pixi", "absolute/button"], function (t, e) {
    var i = function (t, e, i) {
        this.initToggleButton(t, e, i)
    };
    return i.constructor = i, i.prototype = Object.create(t.DisplayObjectContainer.prototype), i.prototype.initToggleButton = function (i, n, o) {
        this.enabled = !! o, this.action = n, t.DisplayObjectContainer.call(this), this.enabledButton = new e(t.Texture.fromFrame(i + "_1.png"), t.Texture.fromFrame("button_overlay.png"), this.onAction.bind(this)), this.disabledButton = new e(t.Texture.fromFrame(i + "OFF_1.png"), t.Texture.fromFrame("button_overlay.png"), this.onAction.bind(this)), this.enabled ? this.addChild(this.enabledButton) : this.addChild(this.disabledButton)
    }, i.prototype.onAction = function () {
        this.setEnabled(!this.enabled), this.action && this.action()
    }, i.prototype.setEnabled = function (t) {
        t !== this.enabled && (this.enabled = t, this.enabled ? (this.removeChild(this.disabledButton), this.addChild(this.enabledButton)) : (this.addChild(this.enabledButton), this.addChild(this.disabledButton)))
    }, i
}), define("absolute/musicmanager", ["absolute/gameconfig", "absolute/audiomanager"], function (t, e) {
    var i = {
        currentTrack: null,
        isMuted: function () {
            return !t.getVal("musicEnabled")
        },
        playMusic: function (t) {
            t !== this.currentTrack && (this.currentTrack && e.stopSound(this.currentTrack), this.currentTrack = t, this.isMuted() ? e.muteSound(this.currentTrack) : e.unmuteSound(this.currentTrack), e.playSound(this.currentTrack))
        },
        stopMusic: function () {
            e.stopSound(this.currentTrack), this.currentTrack = null
        },
        setMuted: function (i, n) {
            var o = !! n;
            if (!o) {
                if (i === this.isMuted()) return;
                t.setVal("musicEnabled", !i)
            }
            this.currentTrack && (i ? e.muteSound(this.currentTrack) : e.unmuteSound(this.currentTrack))
        }
    };
    return i
}), define("absolute/progressbar", ["pixi", "absolute/coords"], function (t, e) {
    var i = function (t, e, i, n) {
        this._initProgressBar(t, e, i, n)
    };
    return i.constructor = i, i.prototype = Object.create(t.Sprite.prototype), i.prototype._initProgressBar = function (e, i, n, o) {
        t.Sprite.call(this, e), this.fillSprite = new t.Sprite(i), this.start = n ? n : 0, this.end = o ? o : this.fillSprite.texture.frame.width;
        var r = this.fillSprite.texture.frame;
        r.width = 1, this.fillSprite.texture.setFrame(r), this.addChild(this.fillSprite)
    }, i.prototype.setProgress = function (t) {
        0 > t ? t = 0 : t > 1 && (t = 1);
        var e = this.fillSprite.texture.frame,
            i = this.end - this.start;
        e.width = this.start + i * t, e.width <= 1 && (e.width = 1), this.fillSprite.texture.setFrame(e), this.waitContainer && (this.waitContainer.mask = null, this.removeChild(this.waitContainer), this.waitContainer = null)
    }, i.prototype.showWaiting = function (i) {
        if (this.waitImage = i, this.waitImage) {
            this.setProgress(100), this.waitContainer = new t.DisplayObjectContainer, this.waitSprites = [];
            for (var n = 0; 11 > n; n += 1) this.waitSprites.push(new t.Sprite(this.waitImage)), this.waitSprites[n].position.x = n * this.waitSprites[n].width, this.waitContainer.addChild(this.waitSprites[n]);
            this.addChild(this.waitContainer);
            var o = new t.Graphics;
            o.beginFill(), o.drawRect(e.x(50), 0, this.width - e.x(100), this.height), o.endFill(), this.waitContainer.addChild(o), this.waitContainer.mask = o
        }
    }, i.prototype.updateWaiting = function () {
        for (var t = 0; 11 > t; t += 1) this.waitSprites[t].position.x += e.x(4);
        this.waitSprites[10].position.x > this.width && (this.waitSprites[10].position.x = this.waitSprites[0].position.x - this.waitSprites[10].width, this.waitSprites.unshift(this.waitSprites.pop()))
    }, i
}), define("absolute/tweenutils", ["tween"], function (t) {
    var e = {
        fadeIn: function (t, i, n) {
            this._doTween(t, i, n, e._fadeIn)
        },
        _fadeIn: function (e, i, n) {
            new t.Tween({
                alpha: e.alpha
            }).to({
                alpha: 1
            }, i.duration).easing(t.Easing.Cubic.In).onUpdate(function () {
                e.alpha = this.alpha
            }).onComplete(function () {
                n()
            }).start()
        },
        fadeOut: function (t, i, n) {
            this._doTween(t, i, n, e._fadeOut)
        },
        _fadeOut: function (e, i, n) {
            new t.Tween({
                alpha: e.alpha
            }).to({
                alpha: 0
            }, i.duration).easing(t.Easing.Cubic.In).onUpdate(function () {
                e.alpha = this.alpha
            }).onComplete(function () {
                n()
            }).start()
        },
        bounceIn: function (t, i, n) {
            this._doTween(t, i, n, e._bounceIn)
        },
        _bounceIn: function (e, i, n) {
            new t.Tween({
                scale: e.scale.x
            }).to({
                scale: 1
            }, i.duration).easing(t.Easing.Elastic.Out).onUpdate(function () {
                e.scale.x = e.scale.y = this.scale
            }).onComplete(function () {
                n()
            }).start()
        },
        _doTween: function (t, e, i, n) {
            var o, r, s = 0,
                a = function () {
                    s += 1, s === r && i && "function" == typeof i && i()
                };
            if (t instanceof Array)
                for (r = t.length, o = 0; r > o; o += 1) n(t[o], e, a);
            else n(t, e, function () {
                i && "function" == typeof i && i()
            })
        }
    };
    return e
}), define("absolute/screen", ["pixi", "absolute/button", "absolute/togglebutton", "absolute/debug"], function (t, e, i, n) {
    var o = function () {
        this._initScreen()
    };
    return o.constructor = o, o.prototype = Object.create(t.DisplayObjectContainer.prototype), o.prototype._initScreen = function () {
        t.DisplayObjectContainer.call(this)
    }, o.prototype.addButton = function (i, o, r, s, a) {
        var h, l = !! a,
            u = t.Texture.fromFrame(i + "_1.png");
        h = l ? t.Texture.fromFrame("button_small_overlay.png") : t.Texture.fromFrame("button_overlay.png");
        var c = new e(u, h, function () {
            n.log(i + " pressed!"), s()
        });
        return c.position.x = o, c.position.y = r, this.addChild(c), c
    }, o.prototype.addToggleButton = function (t, e, o, r, s) {
        var a = new i(t, function () {
            n.log(t + " pressed!"), r()
        }, s);
        return a.position.x = e, a.position.y = o, this.addChild(a), a
    }, o.prototype.onShow = function () {}, o.prototype.onHide = function () {}, o.prototype.beforeRender = function () {}, o.prototype.afterRender = function () {}, o
}), define("absolute/simplemessagebox", ["pixi", "absolute/button", "absolute/coords"], function (t, e, i) {
    var n = function (t, e, i) {
        this._initSimpleMessageBox(t, e, i)
    };
    return n.constructor = n, n.prototype = Object.create(t.DisplayObjectContainer.prototype), n.prototype._initSimpleMessageBox = function (e, i, n) {
        t.DisplayObjectContainer.call(this), this.width = e, this.height = i, this.textStyle = n, this.textStyle.wordWrapWidth = e - 60, this.textStyle.wordWrap = !0;
        var o = new t.Graphics;
        o.lineStyle(8, 0, 1), o.beginFill(16777215, 1), o.drawRect(0, 0, e, i), o.endFill(), this.addChild(o), this.text = null
    }, n.prototype.setText = function (e) {
        this.text && this.removeChild(this.text), this.text = new t.Text(e, this.textStyle), this.text.position.x = (this.width - this.text.width) / 2, this.text.position.y = i.y(30), this.addChild(this.text)
    }, n
}), define("absolute/spritemessagebox", ["pixi", "absolute/button", "absolute/coords"], function (t, e, i) {
    var n = function (t, e, i) {
        this._initSpriteMessageBox(t, e, i)
    };
    return n.constructor = n, n.prototype = Object.create(t.Sprite.prototype), n.prototype._initSpriteMessageBox = function (i, n, o) {
        t.Sprite.call(this, t.Texture.fromFrame(i)), this.action = null, this.buttonText = null, this.button = new e(t.Texture.fromFrame(n), t.Texture.fromFrame(n), function () {
            this.action && "function" == typeof this.action && this.action()
        }.bind(this)), this.button.position.x = (this.width - this.button.width) / 2, this.button.position.y = this.height - this.button.height / 2, this.addChild(this.button), this.textStyle = o, this.textStyle.wordWrapWidth = this.width - 40, this.text = null
    }, n.prototype.setText = function (e) {
        this.text && this.removeChild(this.text), this.text = new t.Text(e, this.textStyle), this.text.position.x = (this.width - this.text.width) / 2, this.text.position.y = i.y(30), this.addChild(this.text)
    }, n.prototype.setButtonTextAndAction = function (e, i) {
        this.button && (this.buttonText && this.button.removeChild(this.buttonText), this.buttonText = new t.Text(e, this.textStyle), this.buttonText.position.x = (this.button.width - this.buttonText.width) / 2, this.buttonText.position.y = this.button.height / 4, this.button.addChild(this.buttonText), this.action = i)
    }, n
}), define("absolute/loader", ["pixi", "absolute/platform", "absolute/audiomanager", "absolute/asyncqueue"], function (t, e, i, n) {
    var o = function () {
        this._initLoader()
    };
    return o.prototype._initLoader = function () {}, o.prototype.loadSound = function (t, e, n) {
        i.init(function () {
            i.loadSounds(t, e, n)
        })
    }, o.prototype.loadArt = function (i, n, o) {
        for (var r = i.length, s = [], a = 0; r > a; ++a) {
            var h = i[a]; - 1 === h.indexOf(".json") && (h += ".json"), s.push(e.artPathPrefix + "/" + e.getResClass() + "/" + h)
        }
        this.assetLoader = new t.AssetLoader(s), this.assetLoader.addEventListener("onComplete", function () {
            o()
        }), this.assetLoader.addEventListener("onProgress", function (t) {
            n(1 - t.content.loadCount / r)
        }), this.assetLoader.load()
    }, o.prototype.loadAssets = function (t, e, i) {
        var o = new n;
        o.pushTasks([
            function (e, i) {
                this.loadArt(t.artAssets, e, i)
            }.bind(this),
            function (e, i) {
                this.loadSound(t.audioAssets, e, i)
            }.bind(this)
        ]), o.run(e, i)
    }, o
}), define("absolute/layouthelper", ["absolute/coords"], function (t) {
    var e = null;
    return {
        setLayoutMap: function (t) {
            e = t
        },
        layout: function (i, n, o) {
            if ("undefined" != typeof e[n] && "undefined" != typeof e[n][o]) {
                var r = e[n][o].x || 0,
                    s = e[n][o].y || 0;
                i.position.x = t.x(r), i.position.y = t.y(s)
            }
        }
    }
}), define("absolute/draggable", ["pixi", "absolute/platform"], function (t, e) {
    var i = function (t, e, i, n, o) {
        this._initDraggable(t, e, i, n, o)
    };
    return i.constructor = i, i.prototype = Object.create(t.Sprite.prototype), i.prototype._initDraggable = function (i, n, o, r, s) {
        t.Sprite.call(this, i), this.limit = n, this.onGrab = o, this.onMove = r, this.onDrop = s, this.anchor.x = this.anchor.y = .5, this.interactive = !0, this.data = null, this.dragging = !1, this.lastPos = null;
        var a = function (t) {
            t.originalEvent.preventDefault(), this.data = t, this.alpha = .8, this.dragging = !0, "function" == typeof this.onGrab && this.onGrab(this)
        }.bind(this),
            h = function () {
                this.alpha = 1, this.dragging = !1, this.data = null, "function" == typeof this.onDrop && this.onDrop(this)
            }.bind(this),
            l = function () {
                if (this.dragging) {
                    var t = this.data.getLocalPosition(this.parent);
                    t.x > n.x && t.x < n.x + n.width && t.y > n.y && t.y < n.y + n.height && (this.position.x = t.x, this.position.y = t.y, "function" == typeof this.onMove && this.onMove(this))
                }
            }.bind(this);
        e.supportsTouch() ? (this.touchstart = a, this.touchend = this.touchendoutside = h, this.touchmove = l) : (this.mousedown = a, this.mouseup = this.mouseupoutside = h, this.mousemove = l)
    }, i
}), define("absolute", ["require", "absolute/asyncqueue", "absolute/audiomanager", "absolute/button", "absolute/snapshot", "absolute/coords", "absolute/platform", "absolute/screenmetrics", "absolute/digitlabel", "absolute/debug", "absolute/digitsprite", "absolute/eventbus", "absolute/gameconfig", "absolute/storagemanager", "absolute/spriteutils", "absolute/game", "absolute/gameui", "absolute/textutils", "absolute/togglebutton", "absolute/musicmanager", "absolute/progressbar", "absolute/tweenutils", "absolute/screen", "absolute/simplemessagebox", "absolute/spritemessagebox", "absolute/loader", "absolute/layouthelper", "absolute/draggable", "absolute/analytics"], function (t) {
    return {
        version: "1.0",
        AsyncQueue: t("absolute/asyncqueue"),
        AudioManager: t("absolute/audiomanager"),
        Button: t("absolute/button"),
        Snapshot: t("absolute/snapshot"),
        Coords: t("absolute/coords"),
        Platform: t("absolute/platform"),
        ScreenMetrics: t("absolute/screenmetrics"),
        DigitLabel: t("absolute/digitlabel"),
        Debug: t("absolute/debug"),
        DigitSprite: t("absolute/digitsprite"),
        EventBus: t("absolute/eventbus"),
        GameConfig: t("absolute/gameconfig"),
        StorageManager: t("absolute/storagemanager"),
        SpriteUtils: t("absolute/spriteutils"),
        Game: t("absolute/game"),
        GameUI: t("absolute/gameui"),
        TextUtils: t("absolute/textutils"),
        ToggleButton: t("absolute/togglebutton"),
        MusicManager: t("absolute/musicmanager"),
        ProgressBar: t("absolute/progressbar"),
        TweenUtils: t("absolute/tweenutils"),
        Screen: t("absolute/screen"),
        SimpleMessageBox: t("absolute/simplemessagebox"),
        SpriteMessageBox: t("absolute/spritemessagebox"),
        Loader: t("absolute/loader"),
        LayoutHelper: t("absolute/layouthelper"),
        Draggable: t("absolute/draggable"),
        Analytics: t("absolute/analytics")
    }
}), define("linkengine/mainmenu", ["absolute"], function (t) {
    var e = function (t, e) {
        this.game = e, this.ui = t, this._initMainMenu()
    };
    return e.prototype = Object.create(t.Screen.prototype), e.prototype._initMainMenu = function () {
        var e = this;
        t.Screen.call(this), t.Coords.y(this.ui.layout.MainMenu.zibboButton.y > this.ui.height) && this.ui.resize();
        var i = PIXI.Sprite.fromFrame("main_menu.png");
        this.addChild(i), 
		this.logo = PIXI.Sprite.fromFrame("logo.png"), 
		this.logo.position.x = (this.ui.width - this.logo.width) / 2 + t.Coords.y(this.ui.layout.MainMenu.logo.x || 0), 
		this.logo.position.y = t.Coords.y(this.ui.layout.MainMenu.logo.y), 
		this.addChild(this.logo), 
		this.playButton = new t.Button(PIXI.Texture.fromFrame("button_menu_play_1.png"), 
		PIXI.Texture.fromFrame("button_menu_play_1.png"), function () {
            t.Debug.log("Play pressed!"), e.firstShow && (t.AudioManager.primeClips(), 
			t.MusicManager.playMusic("menu_bg_music"), 
			t.Analytics.logEvent("MainMenu:play"), e.firstShow = !1), 
			e.game.selectLevel()
        }), this.playButton.position.x = (this.ui.width - this.playButton.width) / 2 + t.Coords.y(this.ui.layout.MainMenu.playButton.x || 0), this.playButton.position.y = t.Coords.y(this.ui.layout.MainMenu.playButton.y), this.addChild(this.playButton), t.AudioManager.musicSupported() && (this.muteMusicButton = this.addToggleButton("button_options_music", t.Coords.x(this.ui.layout.MainMenu.musicButton.x), t.Coords.y(this.ui.layout.MainMenu.musicButton.y), function () {
            t.MusicManager.setMuted(!t.MusicManager.isMuted())
        }, !t.MusicManager.isMuted()), this.muteMusicButton.scale.x = this.muteMusicButton.scale.y = .5), t.AudioManager.musicSupported() && (this.muteSfxButton = this.addToggleButton("button_options_sfx", t.Coords.x(this.ui.layout.MainMenu.sfxButton.x), t.Coords.y(this.ui.layout.MainMenu.sfxButton.y), function () {
            t.AudioManager.setSfxEnabled(!t.AudioManager.isSfxEnabled())
        }, t.AudioManager.isSfxEnabled()), this.muteSfxButton.scale.x = this.muteSfxButton.scale.y = .5), this.zibboButton = new t.Button(PIXI.Texture.fromFrame("btn_zibbo_01.png"), PIXI.Texture.fromFrame("btn_zibbo_02.png"), function () {
            t.Analytics.logEvent("MainMenu:navigate", {
                url: "http://game.24h.com.vn"
            }), window.AH_navigate("http://game.24h.com.vn")
        }), this.zibboButton.position.x = t.Coords.x(this.ui.layout.MainMenu.zibboButton.x), this.zibboButton.position.y = t.Coords.y(this.ui.layout.MainMenu.zibboButton.y), this.addChild(this.zibboButton);
        for (var n = 0; n < this.children.length; n += 1) this.getChildAt(n).alpha = 0;
        this.logo.alpha = 1, this.firstShow = !0, t.AudioManager.musicSupported() && (this.muteMusicButton.visible = !1), t.AudioManager.sfxSupported() && (this.muteSfxButton.visible = !1)
    }, e.prototype.onShow = function () {
        if (t.Screen.prototype.onShow.call(this), t.AudioManager.musicSupported() && this.muteMusicButton.setEnabled(!t.MusicManager.isMuted()), t.AudioManager.sfxSupported() && this.muteSfxButton.setEnabled(t.AudioManager.isSfxEnabled()), this.firstShow) {
            var e = this;
            new TWEEN.Tween({
                alpha: 0
            }).to({
                alpha: 1
            }, 1e3).easing(TWEEN.Easing.Sinusoidal.InOut).onUpdate(function () {
                for (var t = 0; t < e.children.length; t += 1) e.getChildAt(t).alpha = this.alpha;
                e.logo.alpha = 1
            }).start()
        } else t.AudioManager.musicSupported() && (this.muteMusicButton.visible = !0), t.AudioManager.sfxSupported() && (this.muteSfxButton.visible = !0)
    }, e.prototype.onHide = function () {
        t.Screen.prototype.onHide.call(this)
    }, e
}), define("linkengine/levelselectbutton", ["pixi", "absolute"], function (t, e) {
    var i = function (t, e, i, n, o, r, s) {
        this.initLevelSelectButton(t, e, i, n, o, r, s)
    };
    return i.constructor = i, i.prototype = Object.create(t.DisplayObjectContainer.prototype), i.prototype.initLevelSelectButton = function (e, i, n, o, r, s, a) {
        t.DisplayObjectContainer.call(this), this.ui = e, this.levelIndex = i, this.levelConfig = n, this.locked = o, this.score = r, this.showButton = !! a, this.setInteractive(!0), this.tap = this.click = function () {
            this.locked || s(this.levelIndex)
        }.bind(this), this.render()
    }, i.prototype.render = function () {
        for (; this.children.length > 0;) this.removeChild(this.getChildAt(0));
        var i = t.Sprite.fromFrame("level_select_cell.png");
        this.width = i.width, this.height = i.height;
        var n = new e.DigitLabel(5, this.ui.layout.LevelSelectButton.levelNumber.scale);
        n.setText(String(this.levelIndex + 1)), n.position.x = e.Coords.x(this.ui.layout.LevelSelectButton.levelNumber.x) - n.width / 2, n.position.y = e.Coords.y(this.ui.layout.LevelSelectButton.levelNumber.y), i.addChild(n);
        var o = t.Sprite.fromFrame("level_select_thumbnail_board.png");
        o.position.x = e.Coords.x(this.ui.layout.LevelSelectButton.boardThumbnail.x), o.position.y = e.Coords.y(this.ui.layout.LevelSelectButton.boardThumbnail.y), i.addChild(o);
        var r, s, a, h, l = this.levelConfig.layout.length,
            u = 0 === l ? 0 : (this.levelConfig.layout[0].length + 1) / 2,
            c = t.Texture.fromFrame("level_select_thumbnail_pip.png"),
            d = t.Texture.fromFrame("level_select_thumbnail_pip2.png"),
            p = null;
        for (a = (o.width - 8 * d.width) / 2, h = (o.height - 10 * d.height) / 2, r = 0; 10 > r; r += 1) {
            for (s = 0; 8 > s; s += 1) p = new t.Sprite(d), p.position.x = a, p.position.y = h, o.addChild(p), a += d.width;
            a = (o.width - 8 * d.width) / 2, h += d.height
        }
        for (a = (o.width - u * c.width) / 2, h = (o.height - l * c.height) / 2, r = 0; l > r; r += 1) {
            for (s = 0; u > s; s += 1) p = "1" === this.levelConfig.layout[r].charAt(2 * s) ? new t.Sprite(c) : new t.Sprite(d), r > 0 && l - 1 > r && s > 0 && u - 1 > s && (p.position.x = a, p.position.y = h, o.addChild(p)), a += c.width;
            a = (o.width - u * c.width) / 2, h += c.height
        }
        this.locked || "none" === this.levelConfig.collapseMode || this.addCollapseArrows(o, this.levelConfig.collapseMode);
        var f, m, g, v, y;
        if (this.locked ? (f = this.levelConfig.timeGoal, m = Math.floor(f / 60), g = f % 60, this.showButton && (this.stateButton = t.Sprite.fromFrame("button_locked_1.png"))) : (f = this.levelConfig.timeGoal, m = Math.floor(f / 60), g = f % 60, this.showButton && (this.stateButton = new e.Button(t.Texture.fromFrame("button_game_play_1.png"), t.Texture.fromFrame("button_game_play_overlay.png"), function () {}.bind(this)))), v = new e.DigitLabel(5, this.ui.layout.LevelSelectButton.timeDisplay.scale), v.setText(m + ":" + (10 > g ? "0" + g : g)), v.position.x = e.Coords.x(this.ui.layout.LevelSelectButton.timeDisplay.x), v.position.y = e.Coords.y(this.ui.layout.LevelSelectButton.timeDisplay.y), i.addChild(v), this.showButton || (v.position.y -= v.height), this.score > 0) {
            y = new e.DigitLabel(10, this.ui.layout.LevelSelectButton.score.scale), y.setText(e.TextUtils.formatInt(this.score)), y.position.x = e.Coords.x(this.ui.layout.LevelSelectButton.score.x) - y.width / 2, y.position.y = e.Coords.y(this.ui.layout.LevelSelectButton.score.y), i.addChild(y);
            var b = new t.Sprite.fromFrame("level_select_checkmark.png");
            b.position.x = e.Coords.x(this.ui.layout.LevelSelectButton.checkMark.x), b.position.y = e.Coords.y(this.ui.layout.LevelSelectButton.checkMark.y), i.addChild(b)
        }
        this.locked && (o.alpha = .5, v.alpha = .5);
        var x = new e.Snapshot(i);
        this.addChild(new t.Sprite(x.getSnapshot())), this.showButton && (this.stateButton.position.x = e.Coords.x(this.ui.layout.LevelSelectButton.stateButton.x), this.stateButton.position.y = e.Coords.y(this.ui.layout.LevelSelectButton.stateButton.y), this.addChild(this.stateButton))
    }, i.prototype.unlock = function (t) {
        this.score = t, this.locked = !1, this.render()
    }, i.prototype.setEnable = function (t) {
        this.setInteractive(t), this.showButton && this.stateButton.setInteractive(t)
    }, i.prototype.addCollapseArrows = function (e, i) {
        var n = t.Texture.fromFrame("collapse_arrow.png"),
            o = new t.Sprite(n),
            r = new t.Sprite(n),
            s = new t.Sprite(n),
            a = new t.Sprite(n);
        switch (o.anchor.x = o.anchor.y = .5, r.anchor.x = r.anchor.y = .5, s.anchor.x = s.anchor.y = .5, a.anchor.x = a.anchor.y = .5, i) {
        case "right":
            break;
        case "left":
            o.rotation = Math.PI, r.rotation = Math.PI, s.rotation = Math.PI, a.rotation = Math.PI;
            break;
        case "up":
            o.rotation = -Math.PI / 2, r.rotation = -Math.PI / 2, s.rotation = -Math.PI / 2, a.rotation = -Math.PI / 2;
            break;
        case "down":
            o.rotation = Math.PI / 2, r.rotation = Math.PI / 2, s.rotation = Math.PI / 2, a.rotation = Math.PI / 2;
            break;
        case "horz_exp":
            o.rotation = Math.PI, r.rotation = 0, s.rotation = Math.PI, a.rotation = 0;
            break;
        case "horz_imp":
            o.rotation = 0, r.rotation = Math.PI, s.rotation = 0, a.rotation = Math.PI;
            break;
        case "vert_exp":
            o.rotation = -Math.PI / 2, r.rotation = -Math.PI / 2, s.rotation = Math.PI / 2, a.rotation = Math.PI / 2;
            break;
        case "vert_imp":
            o.rotation = Math.PI / 2, r.rotation = Math.PI / 2, s.rotation = -Math.PI / 2, a.rotation = -Math.PI / 2
        }
        r.position.x = e.width, s.position.y = e.height, a.position.x = e.width, a.position.y = e.height, e.addChild(o), e.addChild(r), e.addChild(s), e.addChild(a)
    }, i
}), define("linkengine/levelselectpanel", ["absolute", "linkengine/levelselectbutton"], function (t, e) {
    var i = function (t, e, i) {
        this.ui = t, this.game = e, this.completed = !1, this._initLevelSelectPanel(t, e, i), this.playPressed = !1
    };
    return i.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), i.prototype._initLevelSelectPanel = function (i, n, o) {
        PIXI.DisplayObjectContainer.call(this), this.startIndex = o, this.levelButtons = [];
        for (var r = t.GameConfig.getVal("completedLevels"), s = o, a = o + 6; a > s; ++s) {
            var h = !0,
                l = 0,
                u = r[s + 1];
            u && (h = !1, l = u.score), t.Debug.enabled && (h = !1), this.levelButtons.push(new e(this.ui, s, this.game.levelConfig.levels[s], h, l, this.levelSelected.bind(this), !0))
        }
        this.completed = "undefined" != typeof u, this.layoutButtons()
    }, i.prototype.layoutButtons = function () {
        for (var t = this.levelButtons[0], e = t.width + t.width / 8, i = t.height + t.height / 50, n = (this.ui.width - (2 * e - t.width / 8)) / 2, o = (this.ui.height - (3 * i - t.height / 50)) / 2, r = 0, s = 6; s > r; ++r) t = this.levelButtons[r], t.position.x = n + r % 2 * e, t.position.y = o, this.addChild(t), 0 === (r + 1) % 2 && (o += i)
    }, i.prototype.levelSelected = function (e) {
        this.playPressed || (this.playPressed = !0, t.Debug.log("Level select pressed!"), t.Analytics.logEvent("LevelSelectPanel:levelSelected", {
            level: (e + 1).toString()
        }), this.game.playLevel(e))
    }, i.prototype.enableButtons = function (t) {
        var e, i;
        for (e = 0, i = this.levelButtons.length; i > e; e++) this.levelButtons[e].setEnable(t);
        this.playPressed = !1
    }, i.prototype.updateButtons = function (e) {
        for (var i = 0, n = 0, o = 0, r = t.GameConfig.getVal("completedLevels"), s = this.startIndex; s < this.startIndex + 6; s += 1) {
            i = s - this.startIndex;
            var a = r[s + 1];
            a && ((this.levelButtons[i].locked || this.levelButtons[i].score !== a.score) && this.levelButtons[i].unlock(a.score), n += 1, o = i + 1)
        }
        e && o < this.levelButtons.length && this.levelButtons[o].locked && this.levelButtons[o].unlock(0), this.completed = 6 === n
    }, i
}), define("linkengine/levelselectscreen", ["absolute", "linkengine/levelselectbutton", "linkengine/levelselectpanel", "hammer"], function (t, e, i, n) {
    var o = function (t, e) {
        this.ui = t, this.game = e, this._initLevelSelectScreen(t, e)
    };
    return o.prototype = Object.create(t.Screen.prototype), o.prototype._initLevelSelectScreen = function (e) {
        this.kPanThreshold = this.ui.width / 6, t.Screen.call(this);
        var r = PIXI.Sprite.fromFrame("main_menu.png");
        this.addChild(r), this.panelTray = new PIXI.DisplayObjectContainer, this.addChild(this.panelTray), this.currentPanel = 0, this.panels = [];
        for (var s = 0, a = this.game.levelConfig.levels.length; a > s; s += 6) {
            var h = new i(this.ui, this.game, s);
            h.position.x = this.panels.length * this.ui.width, this.panelTray.addChild(h), this.panels.push(h)
        }
        this.nextPanelButton = new t.Button(PIXI.Texture.fromFrame("level_screen_scroll_arrow.png"), PIXI.Texture.fromFrame("level_screen_scroll_arrow.png"), function () {
            this.currentPanel < this.panels.length - 1 && this.scrollToPanel(this.currentPanel + 1)
        }.bind(this), !1), this.nextPanelButton.position.x = this.ui.width - this.nextPanelButton.width, this.nextPanelButton.position.y = (this.ui.height - this.nextPanelButton.height) / 2, this.addChild(this.nextPanelButton), this.prevPanelButton = new t.Button(PIXI.Texture.fromFrame("level_screen_scroll_arrow.png"), PIXI.Texture.fromFrame("level_screen_scroll_arrow.png"), function () {
            this.currentPanel > 0 && this.scrollToPanel(this.currentPanel - 1)
        }.bind(this), !1), this.prevPanelButton.scale.x = -1, this.prevPanelButton.position.x = -this.prevPanelButton.width, this.prevPanelButton.position.y = (this.ui.height - this.prevPanelButton.height) / 2, this.addChild(this.prevPanelButton), this.lastDeltaX = 0, this.startX = 0, this.trayWidth = this.panels.length * this.ui.width, n(this.ui.container).on("dragstart", o.prototype.handleDragStart.bind(this)), n(this.ui.container).on("drag", o.prototype.handleDrag.bind(this)), n(this.ui.container).on("dragend", o.prototype.handleDragEnd.bind(this));
        var l = PIXI.Texture.fromFrame("level_select_thumbnail_pip.png"),
            u = PIXI.Texture.fromFrame("level_select_thumbnail_pip2.png");
        this.pageIndicator = new PIXI.DisplayObjectContainer;
        for (var s = 0; s < this.panels.length; s++) {
            var c = new PIXI.Sprite(u);
            c.position.x = 2 * s * u.width, this.pageIndicator.addChild(c)
        }
        this.currentPageMarker = new PIXI.Sprite(l), this.pageIndicator.addChild(this.currentPageMarker), this.pageIndicator.position.y = e.height - 1.5 * u.height, this.pageIndicator.position.x = (e.width - 2 * this.panels.length * u.width - u.width) / 2, this.addChild(this.pageIndicator), this.setCurrentPanel(0)
    }, o.prototype.handleDragStart = function () {
        this.lastDeltaX = 0, this.startX = -(this.currentPanel * this.ui.width), this.enableButtons(!1)
    }, o.prototype.handleDrag = function (e) {
        this.panelTray.position.x += (e.gesture.deltaX - this.lastDeltaX) * t.ScreenMetrics.devicePixelRatio / 2, this.lastDeltaX = e.gesture.deltaX
    }, o.prototype.handleDragEnd = function (t) {
        this.lastDeltaX = 0;
        var e = this.startX,
            i = this.currentPanel;
        t.gesture.deltaX < -this.kPanThreshold ? (e -= this.ui.width, i += 1) : t.gesture.deltaX > this.kPanThreshold && (e += this.ui.width, i -= 1), (e > 0 || e < -((this.panels.length - 1) * this.ui.width)) && (e = this.startX, i = this.currentPanel);
        var n = this;
        new TWEEN.Tween({
            x: this.panelTray.position.x
        }).to({
            x: e
        }, 200).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
            n.panelTray.position.x = this.x
        }).onComplete(function () {
            n.enableButtons(!0), n.setCurrentPanel(i)
        }).start()
    }, o.prototype.scrollToPanel = function (t) {
        var e = t * -this.ui.width,
            i = t;
        (e > 0 || e < -((this.panels.length - 1) * this.ui.width)) && (e = this.panelTray.position.x, i = this.currentPanel);
        var n = this;
        new TWEEN.Tween({
            x: this.panelTray.position.x
        }).to({
            x: e
        }, 200).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
            n.panelTray.position.x = this.x
        }).onComplete(function () {
            n.enableButtons(!0), n.setCurrentPanel(i)
        }).start()
    }, o.prototype.setCurrentPanel = function (t) {
        this.currentPanel = t, this.currentPageMarker.position.x = 2 * t * this.currentPageMarker.width, this.nextPanelButton.visible = t !== this.panels.length - 1, this.prevPanelButton.visible = 0 !== t
    }, o.prototype.enableButtons = function (t) {
        var e, i;
        for (e = 0, i = this.panels.length; i > e; e++) this.panels[e].enableButtons(t)
    }, o.prototype.onShow = function () {
        t.Screen.prototype.onShow.call(this);
        var e, i, n = -1;
        for (this.enableButtons(!1), e = 0, i = this.panels.length; i > e; e++) this.panels[e].updateButtons(n === e - 1), this.panels[e].completed && (n = e);
        if (6 > n && this.currentPanel !== n + 1) {
            var o = this,
                r = -this.ui.width * (n + 1 - this.currentPanel);
            r > 0 && (r = 0), new TWEEN.Tween({
                x: this.panelTray.position.x
            }).to({
                x: r
            }, 500).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
                o.panelTray.position.x = this.x
            }).onComplete(function () {
                o.enableButtons(!0), o.setCurrentPanel(n + 1)
            }).start()
        } else setTimeout(function () {
            this.enableButtons(!0)
        }.bind(this), 250)
    }, o.prototype.onHide = function () {
        t.Screen.prototype.onHide.call(this)
    }, o
}), define("linkengine/timer", ["absolute"], function (t) {
    var e = function (t) {
        this._initTimer(t)
    };
    return e.prototype = Object.create(PIXI.Sprite.prototype), e.prototype._initTimer = function (e) {
        PIXI.Sprite.call(this, PIXI.Texture.fromFrame("timer_meter.png")), this.ui = e, this.timerAlertBg = PIXI.Sprite.fromFrame("timer_meter_alert.png"), this.timerAlertBg.position.x = 0, this.timerAlertBg.position.y = 0;
        var i = PIXI.Sprite.fromFrame("timer_frame.png");
        i.position.x = 0, i.position.y = 0, this.addChild(i), this.timeProgress = new t.ProgressBar(PIXI.Texture.fromFrame("timer_frame.png"), PIXI.Texture.fromFrame("timer_meter.png"), t.Coords.x(this.ui.layout.Timer.timeProgress.startX), t.Coords.x(this.ui.layout.Timer.timeProgress.endX)), this.addChild(this.timeProgress), this.timeDisplay = new t.DigitLabel(5, .64), this.timeDisplay.setText("0:00"), this.timeDisplay.position.x = (i.width - this.timeDisplay.width) / 2, this.timeDisplay.position.y = (i.height - this.timeDisplay.height) / 2, this.addChild(this.timeDisplay)
    }, e.prototype.setMaxTime = function (t) {
        this.maxTime = t
    }, e.prototype.setTime = function (t) {
        this.time = t, this.timeDisplay.setText(this.formatTime(t)), this.timeProgress.setProgress(t / this.maxTime)
    }, e.prototype.formatTime = function (t) {
        var e = Math.floor(t / 60),
            i = String(t % 60);
        return e + ":" + (10 > i ? "0" + i : i)
    }, e
}), define("linkengine/levelindicator", ["absolute"], function (t) {
    var e = function (t) {
        this._initLevelIndicator(t)
    };
    return e.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), e.prototype._initLevelIndicator = function (e) {
        PIXI.DisplayObjectContainer.call(this), this.ui = e, this.levelLabel = new PIXI.Sprite.fromFrame("level_word.png"), this.levelLabel.position.x = 0, this.levelLabel.position.y = 0, this.addChild(this.levelLabel), this.levelNumber = new t.DigitLabel(2, this.ui.layout.LevelIndicator.levelNumber.scale || .8), this.levelNumber.setText("0"), this.levelNumber.position.x = (this.levelLabel.width - this.levelNumber.width) / 2, this.levelNumber.position.y = this.levelLabel.height + t.Coords.y(this.ui.layout.LevelIndicator.levelNumber.y), this.addChild(this.levelNumber)
    }, e.prototype.setLevel = function (t) {
        this.levelNumber.setText(String(t)), this.levelNumber.position.x = (this.levelLabel.width - this.levelNumber.width) / 2
    }, e
}), define("linkengine/matchsegment", ["pixi", "absolute"], function (t) {
    var e = function (t) {
        this.initMatchSegment(t), this.underBoard = !1
    };
    return e.constructor = e, e.prototype = Object.create(t.DisplayObjectContainer.prototype), e.prototype.initMatchSegment = function (e) {
        var i = this.kindToTextureBase(e);
        this.kind = e, t.DisplayObjectContainer.call(this), this.aura = t.Sprite.fromFrame(i + "_aura.png"), this.width = this.aura.width, this.height = this.aura.height, this.aura.anchor.x = this.aura.anchor.y = .5, this.aura.position.x = this.width / 2, this.aura.position.y = this.height / 2, this.addChild(this.aura), this.beam = t.Sprite.fromFrame(i + "_beam.png"), this.beam.anchor.x = this.beam.anchor.y = .5, this.beam.position.x = this.width / 2, this.beam.position.y = this.height / 2, this.addChild(this.beam), "path_vert" === i && (this.aura.scale.y = (this.aura.height + .5) / this.aura.height, this.beam.scale.y = (this.beam.height + .5) / this.beam.height), this.loop = !1, this.animationSpeed = .25, this.isCorner(e) && this.rotate(e)
    }, e.prototype.isCorner = function (t) {
        return -1 !== t.indexOf("corner")
    }, e.prototype.rotate = function (t) {
        "corner_ur" === t && (this.aura.scale.x = -1, this.beam.scale.x = -1), "corner_ll" === t && (this.aura.scale.y = -1, this.beam.scale.y = -1), "corner_lr" === t && (this.aura.scale.x = -1, this.aura.scale.y = -1, this.beam.scale.x = -1, this.beam.scale.y = -1)
    }, e.prototype.kindToTextureBase = function (t) {
        var e = "path_";
        switch (t) {
        case "corner_ur":
        case "corner_ul":
        case "corner_lr":
        case "corner_ll":
            e += "corner";
            break;
        case "tile":
            e += "tilemass";
            break;
        case "horz":
            e += "horiz";
            break;
        case "vert":
            e += "vert"
        }
        return e
    }, e
}), define("linkengine/tile", ["pixi", "absolute", "linkengine/matchsegment", "tween"], function (t, e) {
    var i = function (t, e, i, n) {
        this.initTile(t, e, i, n)
    };
    return i.constructor = i, i.prototype = Object.create(t.Sprite.prototype), i.prototype.initTile = function (i, n, o, r) {
        this.isPowerup = !1, this.space = 0, this.row = i, this.col = n, this.kind = o, this.selected = !1, this.burning = !1, t.Sprite.call(this, t.Texture.fromFrame("tile_DPL_shimmer_000.png")), this.background = t.Sprite.fromFrame("tile_DPL_basic.png"), this.addChild(this.background);
        var s = null;
        "string" == typeof o ? (s = "tiles_powerup_" + this.kind + "_01.png", this.isPowerup = !0) : 0 !== this.kind && (s = "tile_DPL__" + (this.kind < 10 ? "0" + this.kind : this.kind) + ".png"), s && (this.tileSprite = t.Sprite.fromFrame(s), this.tileSprite.anchor.x = .5, this.tileSprite.anchor.y = .5, this.tileSprite.position.x = this.width / 2, this.tileSprite.position.y = this.height / 2, this.addChild(this.tileSprite)), this.position.x = this.col * (this.width + this.space), this.position.y = this.row * (this.height + this.space), this.setInteractive(!0), e.Platform.supportsTouch() ? this.touchstart = function (t) {
            r(this.row, this.col, this, t)
        } : this.click = function (t) {
            r(this.row, this.col, this, t)
        }, this.selectionAnimation = this.makeSelectionAnimation(), this.selectionAnimation.animationSpeed = .25, this.selectionAnimation.anchor.x = .5, this.selectionAnimation.anchor.y = .5, this.selectionAnimation.position.x = this.width / 2, this.selectionAnimation.position.y = this.height / 2, this.hintAnimation = this.makeHintAnimation(), this.hintAnimation.anchor.x = .5, this.hintAnimation.anchor.y = .5, this.hintAnimation.position.x = this.width / 2, this.hintAnimation.position.y = this.height / 2, this.shimmerAnimation = this.makeShimmerAnimation(), this.shimmerAnimation.animationSpeed = .25, this.shimmerAnimation.anchor.x = .5, this.shimmerAnimation.anchor.y = .5, this.shimmerAnimation.position.x = this.width / 2, this.shimmerAnimation.position.y = this.height / 2, this.shimmerAnimation.loop = !1, this.burnoutAnimation = null
    }, i.prototype.dropIn = function (t, e) {
        var i = 60 * (12 - t);
        this.setInteractive(!1), this.row = t, this.col = e, this.animateTo(this.col * (this.width + this.space), this.row * (this.height + this.space), i, 500, TWEEN.Easing.Cubic.In, TWEEN.Interpolation.Linear)
    }, i.prototype.updateLocation = function (t, e, i, n) {
        var o = 0;
        return n || t !== this.row || e !== this.col ? (this.setInteractive(!1), o = e !== this.col ? 30 * (i > 0 ? e : 10 - e) : 30 * (i > 0 ? t : 12 - t), this.row = t, this.col = e, this.animateTo(this.col * (this.width + this.space), this.row * (this.height + this.space), o, 200, TWEEN.Easing.Cubic.In, TWEEN.Interpolation.Linear, function () {
            this.setInteractive(!0)
        }.bind(this)), !0) : !1
    }, i.prototype.animateTo = function (t, i, n, o, r, s, a) {
        var h = this,
            l = [],
            u = [];
        s !== TWEEN.Interpolation.Linear && (l.push(this.position.x - e.Coords.x(100)), u.push(this.position.y - e.Coords.y(100))), l.push(t), u.push(i), new TWEEN.Tween({
            x: this.position.x,
            y: this.position.y
        }).delay(n).to({
            x: l,
            y: u
        }, o).easing(r).onUpdate(function () {
            h.position.x = this.x, h.position.y = this.y
        }).onComplete(function () {
            a && a(h)
        }).interpolation(s).start()
    }, i.prototype.updateKind = function (e) {
        if (this.kind !== e && (this.kind = e, this.removeChild(this.tileSprite), 0 !== this.kind)) {
            var i = "tile_DPL__" + (this.kind < 10 ? "0" + this.kind : this.kind) + ".png";
            this.tileSprite = t.Sprite.fromFrame(i), this.addChild(this.tileSprite)
        }
    }, i.prototype.isAdjacent = function (t) {
        return 1 === Math.abs(this.row - t.row) && this.col === t.col || 1 === Math.abs(this.col - t.col) && this.row === t.row
    }, i.prototype.burnout = function (t) {
        this.burning = !0, this.isPowerup || (this.tileSprite.alpha = .5), this.removeChild(this.background), t.position.x = (this.width - t.width) / 2, t.position.y = (this.height - t.height) / 2, this.addChildAt(t, 0)
    }, i.prototype.setSelected = function (t) {
        if (!this.burning)
            if (this.selected = t, t) this.addChildAt(this.selectionAnimation, 1), this.selectionAnimation.play();
            else try {
                this.removeChild(this.selectionAnimation), this.selectionAnimation.stop()
            } catch (e) {}
    }, i.prototype.makeSelectionAnimation = function () {
        var e, i = "tile_DPL_selection_0",
            n = 7,
            o = [];
        for (e = 0; n > e; e += 1) o.push(new t.Texture.fromFrame(i + (10 > e ? "0" + e : e) + ".png"));
        return new t.MovieClip(o)
    }, i.prototype.makeHintAnimation = function () {
        return t.Sprite.fromFrame("tile_hint.png")
    }, i.prototype.makeShimmerAnimation = function () {
        var e, i = "tile_DPL_shimmer_0",
            n = 8,
            o = [];
        for (e = 0; n > e; e += 1) o.push(new t.Texture.fromFrame(i + (10 > e ? "0" + e : e) + ".png"));
        return new t.MovieClip(o)
    }, i.prototype.showHint = function () {
        var t = this,
            e = 3;
        this.addChildAt(this.hintAnimation, 1), this.hintAnimation.alpha = 0, new TWEEN.Tween({
            alpha: 0
        }).to({
            alpha: 1
        }, 425).easing(TWEEN.Easing.Sinusoidal.InOut).onUpdate(function () {
            t.hintAnimation.alpha = this.alpha
        }).onComplete(function () {
            t.hintAnimation.alpha = 1, setTimeout(function () {
                t.removeChild(t.hintAnimation)
            }, 200)
        }).repeat(e - 1).start()
    }, i.prototype.showShimmer = function () {
        var t = 2;
        this.addChild(this.shimmerAnimation), this.shimmerAnimation.loop = !1, this.shimmerAnimation.onComplete = function () {
            --t <= 0 ? setTimeout(function () {
                this.removeChild(this.shimmerAnimation)
            }.bind(this), 0) : this.shimmerAnimation.gotoAndPlay(0)
        }.bind(this), this.shimmerAnimation.gotoAndPlay(0)
    }, i
}), define("linkengine/matchline", ["pixi", "absolute", "linkengine/matchsegment"], function (t, e, i) {
    var n = function (t, e) {
        this.initMatchLine(t, e)
    };
    return n.prototype.initMatchLine = function (t, e) {
        var n, o = t.length,
            r = null;
        for (this.board = e, this.segments = [], n = 0; o > n; n += 1) 0 === n || n === o - 1 ? r = new i("tile") : t[n - 1].row === t[n].row && t[n].row === t[n + 1].row ? r = new i("horz") : t[n - 1].col === t[n].col && t[n].col === t[n + 1].col ? r = new i("vert") : t[n - 1].row === t[n].row - 1 ? r = t[n + 1].col === t[n].col + 1 ? new i("corner_ll") : new i("corner_lr") : t[n - 1].row === t[n].row + 1 ? r = t[n + 1].col === t[n].col + 1 ? new i("corner_ul") : new i("corner_ur") : t[n - 1].col === t[n].col - 1 ? r = t[n + 1].row === t[n].row - 1 ? new i("corner_lr") : new i("corner_ur") : t[n - 1].col === t[n].col + 1 && (r = t[n + 1].row === t[n].row - 1 ? new i("corner_ll") : new i("corner_ul")), r.position.x = t[n].col * t[n].width, r.position.y = t[n].row * t[n].height, 0 === t[n].col ? (r.position.x += .4 * t[n].width, r.underBoard = !0) : t[n].col === this.board.board[0].length - 1 && (r.position.x -= .4 * t[n].width, r.underBoard = !0), 0 === t[n].row ? (r.position.y += .4 * t[n].height, r.underBoard = !0) : t[n].row === this.board.board.length - 1 && (r.position.y -= .4 * t[n].height, r.underBoard = !0), this.segments.push(r)
    }, n.prototype.getFirstSegment = function () {
        return this.segments[0]
    }, n.prototype.getLastSegment = function () {
        return this.segments[this.segments.length - 1]
    }, n.prototype.show = function (t) {
        var e, i = this.segments.length;
        for (e = 1; i - 1 > e; e += 1) this.segments[e].underBoard ? this.board.addChildAt(this.segments[e], 0) : this.board.addChild(this.segments[e]);
        var n = this;
        for (e = 0; i > e; e += 1) n.segments[e].aura.alpha = 0;
        new TWEEN.Tween({
            alpha: 1
        }).delay(150).to({
            alpha: 0
        }, 500).easing(TWEEN.Easing.Quadratic.In).onUpdate(function () {
            for (e = 0; i > e; e += 1) n.segments[e].aura.alpha = this.alpha
        }).onComplete(function () {
            t && "function" == typeof t && t()
        }).start(), new TWEEN.Tween({
            alpha: 1
        }).delay(100).to({
            alpha: 0
        }, 500).easing(TWEEN.Easing.Bounce.Out).onUpdate(function () {
            for (e = 0; i > e; e += 1) n.segments[e].beam.alpha = this.alpha
        }).onComplete(function () {}).start()
    }, n.prototype.hide = function () {
        var t, e = this.segments.length;
        for (t = 1; e - 1 > t; t += 1) this.board.removeChild(this.segments[t])
    }, n
}), define("linkengine/tutorial", ["absolute"], function (t) {
    var e = function (t, e, i, n) {
        this.initTutorial(t, e, i, n)
    };
    return e.constructor = e, e.prototype = Object.create(PIXI.DisplayObjectContainer.prototype), e.prototype.initTutorial = function (e, i, n, o) {
        PIXI.DisplayObjectContainer.call(this), this.ui = e, this.config = i, this.boardview = n, this.onComplete = o, this.indicatorArrow = PIXI.Sprite.fromFrame("dlg_arrow.png"), this.indicatorArrow.anchor.x = .3, this.indicatorArrow.anchor.y = .8;
        var r = Math.floor(40 * t.Platform.getResScale());
        this.messageBox = new t.SpriteMessageBox("dlg_general.png", "dlg_button.png", {
            font: r + "px Arial, Helvetica, sans-serif",
            fill: "black",
            align: "center"
        }), this.currentStepIndex = 0, this.targetTile = null
    }, e.prototype.showStep = function () {
        this.currentStepIndex = 0, this.setStep(this.config.steps[this.currentStepIndex])
    }, e.prototype.nextStep = function () {
        this.currentStepIndex++, this.currentStepIndex < this.config.steps.length && this.setStep(this.config.steps[this.currentStepIndex])
    }, e.prototype.isTarget = function (t) {
        return t === this.targetTile
    }, e.prototype.setStep = function (e) {
        this.boardview.lowerTutorialTiles();
        try {
            this.removeChild(this.messageBox), this.removeChild(this.indicatorArrow)
        } catch (i) {}
        e.targetTile, this.messageBox.setText(e.text), e.targetTile ? (this.targetTile = this.boardview.board[e.targetTile[0]][e.targetTile[1]], this.indicatorArrow.position.x = this.targetTile.position.x + this.boardview.tileWidth / 2, this.indicatorArrow.position.y = this.targetTile.position.y, this.indicatorArrow.scale.x = 1, this.messageBox.position.x = this.indicatorArrow.position.x + this.indicatorArrow.width / 2, this.messageBox.position.y = this.indicatorArrow.position.y - this.indicatorArrow.height - this.messageBox.height + this.indicatorArrow.height / 2, this.messageBox.position.x + this.messageBox.width + this.boardview.position.x > this.ui.width && (this.messageBox.position.x -= this.messageBox.width + this.indicatorArrow.width, this.indicatorArrow.scale.x = -1), this.messageBox.setButtonTextAndAction("Bỏ qua >>", function () {
            t.Analytics.logEvent("Tutorial:skip", {
                step: this.currentStepIndex.toString()
            }), this.onComplete()
        }.bind(this))) : (this.messageBox.position.x = (this.ui.width - this.messageBox.width) / 2 - this.boardview.position.x, this.messageBox.position.y = (this.ui.height - this.messageBox.height) / 4 - this.boardview.position.y, this.messageBox.setButtonTextAndAction("OK", function () {
            t.Analytics.logEvent("Tutorial:complete"), this.onComplete()
        }.bind(this))), this.addChild(this.messageBox), e.targetTile && this.addChild(this.indicatorArrow);
        for (var n = 0; n < e.tiles.length; n += 1) {
            var o = this.boardview.board[e.tiles[n][0]][e.tiles[n][1]];
            this.boardview.raiseTutorialTile(o)
        }
        this.boardview.removeChild(this), this.boardview.addChild(this)
    }, e
}), define("linkengine/boardview", ["absolute", "linkengine/tile", "pixi", "astar", "linkengine/matchline", "linkengine/levelselectbutton", "linkengine/tutorial"], function (t, e, i, n, o, r, s) {
    var a = function (t, e, i) {
        this.gamescreen = t, this.game = e, this.ui = i, this.highlightOffset = 0, this.selected = null, this.comboThreshold = this.game.levelConfig.comboThreshold, this.lastMatchTime = 0, this.comboStreak = 0, this.boardWidth = 0, this.boardHeight = 0, this.powerupsActivated = 0, this.tilesRemaining = 0, this.won = !1, this.winHandled = !1, this.flashContainer = null, this.initBoardView()
    };
    return a.constructor = a, a.prototype = Object.create(i.DisplayObjectContainer.prototype), a.prototype.initBoardView = function () {
        var t = (i.Texture.fromFrame("transparent.png"), i.Sprite.fromFrame("tile_DPL_basic.png"));
        i.DisplayObjectContainer.call(this), this.lastSelection = null, this.currentSelection = null, this.selectionPath = null, this.nextHint = null, this.shimmerTimeout = null, this.tileWidth = t.width, this.tileHeight = t.height, this.tileSpace = 0, this.tutorialOverlay = new i.Graphics, this.tutorialOverlay.beginFill(1, .5), this.tutorialOverlay.drawRect(0, 0, this.ui.width, this.ui.height), this.tutorialOverlay.endFill(), this.matchline = null
    }, a.prototype.configLevel = function (t) {
        var n, o, r, s, a, h, l, u, c = [],
            d = 0;
        if (this.level = t, this.levelConfig = t.config, this.powerupsActivated = 0, l = t.config.layout.length, u = 0 === l ? 0 : (t.config.layout[0].length + 1) / 2, this.board = [], t.config.tutorial) {
            for (r = 0; l > r; r += 1) {
                for (a = [], s = 0; u > s; s += 1) a.push(new e(r, s, 0));
                this.board.push(a)
            }
            for (r = 0; l > r; r += 1)
                for (a = [], s = 0; u > s; s += 1)
                    if (0 !== t.config.tutorial.layout[r][s]) {
                        var p = new e(r, s, t.config.tutorial.layout[r][s], this.tileClicked.bind(this));
                        this.board[r][s] = p, p.position.y -= this.ui.height, this.addChild(p), d += 1
                    }
        } else {
            for (r = 0; l > r; r += 1) {
                for (a = [], s = 0; u > s; s += 1) a.push(new e(r, s, 0)), "1" === t.config.layout[r].charAt(2 * s) && c.push({
                    row: r,
                    col: s
                });
                this.board.push(a)
            }
            if (0 !== c.length % 2) throw window.alert("Problem with level config. Must have an even number of tiles!"), "Problem with level config. Must have an even number of tiles!";
            c.sort(function () {
                return Math.random() < .5 ? -1 : 1
            });
            var f = t.config.powerups.time,
                m = t.config.powerups.shuffle,
                g = t.config.powerups.hint;
            for (n = 0, o = c.length; o > n; n += 2) f > 0 ? (this.addTile(c[n].row, c[n].col, "time"), this.addTile(c[n + 1].row, c[n + 1].col, "time"), f--) : m > 0 ? (this.addTile(c[n].row, c[n].col, "shuffle"), this.addTile(c[n + 1].row, c[n + 1].col, "shuffle"), m--) : g > 0 ? (this.addTile(c[n].row, c[n].col, "hint"), this.addTile(c[n + 1].row, c[n + 1].col, "hint"), g--) : (h = this.getRandomEntry(t.config.tileTypes), this.addTile(c[n].row, c[n].col, h), this.addTile(c[n + 1].row, c[n + 1].col, h));
            d = c.length
        }
        this._dumpBoard(), this.boardWidth = u * (this.tileWidth + this.tileSpace) - this.tileSpace, this.boardHeight = l * (this.tileHeight + this.tileSpace) - this.tileSpace, this.tilesRemaining = d, this.won = !1, this.winHandled = !1, t.config.tutorial || (this.nextHint = this.getMove(), this.scheduleShimmerHint());
        try {
            this.flashContainer && this.removeChild(this.flashContainer)
        } catch (v) {}
        this.flashContainer = new i.DisplayObjectContainer, this.addChild(this.flashContainer)
    }, a.prototype.addTile = function (t, i, n) {
        var o = new e(t, i, n, this.tileClicked.bind(this));
        this.board[t][i] = o, o.position.y -= this.ui.height, this.addChild(o)
    }, a.prototype.animateIntro = function (e) {
        var n, o, a = this.getNumRows(),
            h = this.getNumCols(),
            l = new r(this.ui, this.level.levelNum - 1, this.level.config, !1, 0, function () {});
        l.alpha = 0, l.position.x = (this.ui.width - l.width) / 2 - this.position.x, l.position.y = (this.ui.height - l.height) / 2, this.addChild(l);
        var u = i.Sprite.fromFrame("title_READY.png");
        u.anchor.x = .5, u.anchor.y = .5, u.position.x = this.ui.width / 2 - this.position.x, u.position.y = this.ui.height / 4, u.alpha = 0, this.addChild(u);
        var c = i.Sprite.fromFrame("title_GO.png");
        c.anchor.x = .5, c.anchor.y = .5, c.position.x = this.ui.width / 2 - this.position.x, c.position.y = this.ui.height / 2, c.scale.x = c.scale.y = .1, t.AudioManager.playSound("ready"), t.TweenUtils.fadeIn([u, l], {
            duration: 200
        }, function () {
            setTimeout(function () {
                for (this.removeChild(l), this.removeChild(u), n = 0; a > n; n += 1)
                    for (o = 0; h > o; o += 1) this.board[n][o] && this.board[n][o].dropIn(n, o);
                t.AudioManager.playSound("load_tiles", null, 500), setTimeout(function () {
                    this.addChild(c), t.AudioManager.playSound("go"), t.TweenUtils.bounceIn(c, {
                        duration: 1e3
                    }, function () {
                        for (t.MusicManager.playMusic(this.level.music), this.removeChild(c), n = 0; a > n; n += 1)
                            for (o = 0; h > o; o += 1) this.board[n][o] && this.board[n][o].setInteractive(!0);
                        this.level.config.tutorial && (this.tutorialOverlay.position.x = -this.position.x, this.tutorialOverlay.position.y = -this.position.y, this.addChild(this.tutorialOverlay), this.tutorial = new s(this.ui, this.level.config.tutorial, this, function () {
                            this.removeChild(this.tutorial), this.tutorial = null, this.gamescreen.resumeTimer(), this.gamescreen.enableControls(!0), this.removeChild(this.tutorialOverlay), this.scheduleShimmerHint()
                        }.bind(this)), this.addChild(this.tutorial), this.tutorial.showStep(0)), e()
                    }.bind(this))
                }.bind(this), 1500)
            }.bind(this), 1100)
        }.bind(this))
    }, a.prototype.getRandomEntry = function (t) {
        return t[Math.floor(t.length * Math.random())]
    }, a.prototype.getTileAt = function (t, e) {
        return this.board[t][e]
    }, a.prototype.setSelection = function (e, i) {
        var o, r, s = !1;
        if (this.currentSelection = this.board[e][i], this.lastSelection && this.currentSelection !== this.lastSelection && this.lastSelection.kind === this.currentSelection.kind) {
            var a = new n.Graph(this.board),
                h = n.astar.search(a.nodes, a.nodes[e][i], a.nodes[this.lastSelection.row][this.lastSelection.col], this.game.levelConfig.maxPathTurns, !1);
            if (h.length > 0) {
                for (s = !0, t.Debug.log("path: "), t.Debug.log(h), this.selectionPath = [], o = 0, r = h.length; r > o; o += 1) this.selectionPath.push(this.board[h[o].x][h[o].y]);
                this.tilesRemaining -= 2, this.won = this.getNumPiecesRemaining() <= 0, this.drawPath(this.selectionPath), this._dumpBoard()
            }
        }
        return s ? this.lastSelection = this.currentSelection = null : (this.lastSelection = this.currentSelection, this.currentSelection = null, this.selectionPath = null), s
    }, a.prototype.generateNextHint = function () {
        this.nextHint = this.getMove(), this.nextHint || this.won || this.ui.noMoves()
    }, a.prototype.drawPath = function (t) {
        var e = t[0],
            i = t[t.length - 1],
            n = new o(t, this);
        e.burnout(n.getFirstSegment()), i.burnout(n.getLastSegment()), n.show(function () {
            setTimeout(function () {
                n.hide();
                var t = 2,
                    o = function () {
                        t -= 1, 0 !== t || this.winHandled || (this.won ? (this.winHandled = !0, setTimeout(function () {
                            this.ui.win()
                        }.bind(this), 1100)) : (this.generateNextHint(), this.tutorial || this.scheduleShimmerHint()))
                    };
                this.removeTile(e.row, e.col, o.bind(this)), this.removeTile(i.row, i.col, o.bind(this))
            }.bind(this), 0)
        }.bind(this)), this.matchline = n
    }, a.prototype.removeTile = function (i, n, o) {
        var r = this.board[i][n];
        this.board[i][n] = new e(i, n, 0), setTimeout(function () {
            try {
                this.removeChild(r), this.addChild(r)
            } catch (e) {}
            if (r.isPowerup) {
                if (this.powerupsActivated += 1, 0 === this.powerupsActivated % 2 && t.AudioManager.simulSoundSupport()) switch (r.kind) {
                case "time":
                    t.AudioManager.playSound("power_time");
                    break;
                case "hint":
                    t.AudioManager.playSound("power_hint");
                    break;
                case "shuffle":
                    t.AudioManager.playSound("power_shuffle")
                }
                var s = this.ui.gameScreen.getPowerupTargetPosition(r.kind);
                s.x -= this.position.x, s.y -= this.position.y, r.animateTo(s.x, s.y, 0, 500, TWEEN.Easing.Linear.None, TWEEN.Interpolation.Bezier, function () {
                    switch (r.kind) {
                    case "time":
                        this.level.addTime(this.game.levelConfig.timePowerupSeconds / 2), 0 === this.powerupsActivated % 2 && this.showFlash("bonus_time_10.png", s.x, s.y);
                        break;
                    case "hint":
                        this.level.availablePowerups.hint += .5;
                        break;
                    case "shuffle":
                        this.level.availablePowerups.shuffle += .5
                    }
                    0 === this.powerupsActivated % 2 && this.ui.gameScreen.showPowerupBling(r.kind), this.ui.gameScreen.updatePowerupCounts();
                    try {
                        this.removeChild(r)
                    } catch (t) {}
                }.bind(this))
            } else try {
                this.removeChild(r)
            } catch (e) {}
            this.doCollapse(i, n, o)
        }.bind(this), 0)
    }, a.prototype.doCollapse = function (e, i, n) {
        var o = 0,
            r = 0,
            s = !0,
            a = this.board.length,
            h = a > 0 ? this.board[0].length : 0,
            l = 0;
        switch (this.levelConfig.collapseMode) {
        case "down":
            o = a - 2, r = 1;
            break;
        case "up":
            o = 1, r = a - 2;
            break;
        case "vert_exp":
            a / 2 > e ? (o = 1, r = a / 2 - 1) : (o = a - 2, r = a / 2);
            break;
        case "vert_imp":
            a / 2 > e ? (o = a / 2 - 1, r = 1) : (o = a / 2, r = a - 2);
            break;
        case "right":
            o = h - 2, r = 1, s = !1;
            break;
        case "left":
            o = 1, r = h - 2, s = !1;
            break;
        case "horz_exp":
            h / 2 > i ? (o = 1, r = h / 2 - 1) : (o = h - 2, r = h / 2), s = !1;
            break;
        case "horz_imp":
            h / 2 > i ? (o = h / 2 - 1, r = 1) : (o = h / 2, r = h - 2), s = !1
        }
        if (s) {
            if (l = this.collapseCol(i, o, r, n), l > 0) {
                var u = 250;
                if (t.AudioManager.usingWebAudio())
                    for (var c = 0; l > c; c++) t.AudioManager.playSound("tile_fall_" + (c + 1), null, u), u += 40
            }
        } else if (l = this.collapseRow(e, o, r, n), l > 0) {
            var u = 250;
            if (t.AudioManager.usingWebAudio())
                for (var c = 0; l > c; c++) t.AudioManager.playSound("tile_slide_" + (c + 1), null, u), u += 40
        }
    }, a.prototype.collapseCol = function (t, i, n, o) {
        for (var r, s, a = i > n ? -1 : 1, h = i, l = [], u = 0; h - a !== n;) this.board[h][t] && 0 !== this.board[h][t].kind && l.push(this.board[h][t]), h += a;
        for (r = 0, s = l.length, h = i; s > r;) this.board[l[r].row][l[r].col] = new e(l[r].row, l[r].col, 0), this.board[h][t] = l[r], this.board[h][t].updateLocation(h, t, a) && u++, h += a, r += 1;
        return o(), u
    }, a.prototype.collapseRow = function (t, i, n, o) {
        for (var r, s, a = i > n ? -1 : 1, h = i, l = [], u = 0; h - a !== n;) this.board[t][h] && 0 !== this.board[t][h].kind && l.push(this.board[t][h]), h += a;
        for (r = 0, s = l.length, h = i; s > r;) this.board[l[r].row][l[r].col] = new e(l[r].row, l[r].col, 0), this.board[t][h] = l[r], this.board[t][h].updateLocation(t, h, a) && u++, h += a, r += 1;
        return o(), u
    }, a.prototype.getNumPiecesRemaining = function () {
        return this.tilesRemaining
    }, a.prototype.getCurrentSelection = function () {
        return this.currentSelection
    }, a.prototype.getLastSelection = function () {
        return this.lastSelection
    }, a.prototype.getSelectionPath = function () {
        return this.selectionPath
    }, a.prototype._dumpBoard = function () {
        var e, i, n, o = this.board.length,
            r = o > 0 ? this.board[0].length : 0;
        for (t.Debug.log("----------------"), e = 0; o > e; e += 1) {
            for (n = "", i = 0; r > i; i += 1) n += this.board[e][i] ? "string" == typeof this.board[e][i].kind ? this.board[e][i].kind.substring(0, 2) + " " : (this.board[e][i].kind < 10 ? "0" : "") + this.board[e][i].kind + " " : "XX ";
            t.Debug.log(n)
        }
    }, a.prototype.tileClicked = function (e, i, n) {
        var o;
        if (t.Debug.log("tile tapped at " + e + ", " + i), n !== this.selected && !n.burning) {
            if (this.tutorial) {
                if (!this.tutorial.isTarget(n)) return;
                setTimeout(function () {
                    this.tutorial.nextStep()
                }.bind(this), 500)
            }
            if (this.selected && this.selected.setSelected(!1), this.setSelection(e, i)) {
                t.Debug.log("match!");
                var r = +new Date;
                r - this.lastMatchTime < this.comboThreshold ? this.comboStreak++ : this.comboStreak = 0, this.lastMatchTime = r;
                var s = Math.min(this.game.levelConfig.comboPoints.length - 1, this.comboStreak);
                this.level.score += this.game.levelConfig.pointsPerMatch, this.level.comboBonus += this.game.levelConfig.comboPoints[s], s > 0 && this.showComboAccolade(n, s), t.AudioManager.simulSoundSupport() && setTimeout(function () {
                    this.won ? t.AudioManager.playSound("last_match_sound") : t.AudioManager.playSound("match_" + (1 + Math.min(13, this.comboStreak)))
                }.bind(this), 100), o = this.getSelectionPath(), o && (this.selected = null)
            } else t.Debug.log("no match"), n.setSelected(!0), this.selected = n;
            t.AudioManager.usingWebAudio() && t.AudioManager.playSound("tile_select")
        }
    }, a.prototype.showComboAccolade = function (t, e) {
        var i = this.game.levelConfig.comboPoints[e],
            n = t.position.x + t.width / 2,
            o = t.position.y + t.height / 2;
        1 === e ? this.showFlash("combo_words_01.png", n, o) : 4 === e ? this.showFlash("combo_words_02.png", n, o) : 9 === e ? this.showFlash("combo_words_03.png", n, o) : e >= 13 && this.showFlash("combo_words_04.png", n, o), setTimeout(function () {
            this.showFlash("combo_points_" + i + ".png", n, o)
        }.bind(this), 600)
    }, a.prototype.getTileCenter = function (t) {
        return {
            x: t.y * this.tileWidth,
            y: t.x * this.tileHeight
        }
    }, a.prototype.getBoardWidth = function () {
        return this.boardWidth
    }, a.prototype.getBoardHeight = function () {
        return this.boardHeight
    }, a.prototype.getNumRows = function () {
        return this.board.length
    }, a.prototype.getNumCols = function () {
        return this.board.length > 0 ? this.board[0].length : 0
    }, a.prototype.getMove = function () {
        var t, e, i, o, r, s = this.getNumRows(),
            a = this.getNumCols(),
            h = [];
        for (t = 0; s > t; t += 1)
            for (e = 0; a > e; e += 1) this.board[t][e] && 0 !== this.board[t][e].kind && h.push(this.board[t][e]);
        h.sort(function () {
            return Math.random() < .5 ? -1 : 1
        });
        var l = new n.Graph(this.board);
        for (i = 0, r = h.length; r > i; i += 1)
            for (o = i + 1; r > o; o += 1)
                if (i !== o && h[i].kind === h[o].kind && this.checkLink(l, h[i], h[o])) return {
                    from: h[i],
                    to: h[o]
                };
        return null
    }, a.prototype.checkLink = function (t, e, i) {
        var o = n.astar.search(t.nodes, t.nodes[e.row][e.col], t.nodes[i.row][i.col], this.game.levelConfig.maxPathTurns, !1);
        return o.length > 0
    }, a.prototype.showHint = function () {
        this.nextHint && (this.scheduleShimmerHint(), this.nextHint.from.showHint(), this.nextHint.to.showHint(), t.AudioManager.simulSoundSupport() && t.AudioManager.playSound("hint"))
    }, a.prototype.showShimmer = function () {
        this.nextHint && (this.nextHint.from.showShimmer(), this.nextHint.to.showShimmer()), this.scheduleShimmerHint()
    }, a.prototype.scrambleTiles = function () {
        var e, i, n, o, r = this.getNumRows(),
            s = this.getNumCols(),
            a = [];
        for (e = 0; r > e; e += 1)
            for (i = 0; s > i; i += 1) this.board[e][i] && 0 !== this.board[e][i].kind && a.push(this.board[e][i]);
        if (a.sort(function () {
            return Math.random() < .5 ? -1 : 1
        }), a.length > 4)
            for (n = 0, o = a.length; o - 1 > n; n += 2) this.swapTiles(a[n], a[n + 1]);
        else this.swapTiles(a[0], a[1]);
        t.AudioManager.simulSoundSupport() && t.AudioManager.playSound("shuffle"), this.generateNextHint(), this.scheduleShimmerHint()
    }, a.prototype.swapTiles = function (t, e) {
        var i = t.row,
            n = t.col,
            o = e.row,
            r = e.col;
        this.board[i][n] = e, this.board[i][n].updateLocation(i, n), this.board[o][r] = t, this.board[o][r].updateLocation(o, r)
    }, a.prototype.handleLevelFailed = function () {
        var t, e, i = this.getNumRows(),
            n = this.getNumCols();
        for (t = 0; i > t; t += 1)
            for (e = 0; n > e; e += 1)
                if (this.board[t][e] && 0 !== this.board[t][e].kind) {
                    var o = this.board[t][e];
                    if (o) try {
                        this.removeChild(o)
                    } catch (r) {}
                }
        try {
            this.removeChild(this.flashContainer), this.flashContainer = null
        } catch (r) {}
        try {
            this.matchline.hide(), this.matchline = null
        } catch (r) {}
    }, a.prototype.cleanup = function () {
        t.MusicManager.stopMusic()
    }, a.prototype.showFlash = function (t, e, n) {
        var o = i.Sprite.fromFrame(t);
        if (o.anchor.x = o.anchor.y = .5, o.position.x = e, o.position.y = n, this.flashContainer) {
            this.flashContainer.addChild(o), o.position.x - o.width / 2 < 0 ? o.position.x = 1.1 * (o.width / 2) : o.position.x + o.width / 2 > this.ui.width && (o.position.x = this.ui.width - 1.1 * (o.width / 2));
            var r = this;
            new TWEEN.Tween({
                y: o.position.y,
                alpha: o.alpha
            }).to({
                y: n - this.ui.height / 10,
                alpha: 0
            }, 1e3).easing(TWEEN.Easing.Cubic.In).onUpdate(function () {
                o.position.y = this.y, o.alpha = this.alpha
            }).onComplete(function () {
                r.flashContainer && r.flashContainer.removeChild(o)
            }).start()
        }
    }, a.prototype.scheduleShimmerHint = function () {
        this.shimmerTimeout && clearTimeout(this.shimmerTimeout), this.shimmerTimeout = setTimeout(function () {
            this.showShimmer()
        }.bind(this), this.game.levelConfig.shimmerHintInterval)
    }, a.prototype.handlePause = function () {
        t.MusicManager.stopMusic()
    }, a.prototype.handleResume = function () {
        t.MusicManager.playMusic(this.level.music), this.tutorial || this.scheduleShimmerHint()
    }, a.prototype.raiseTutorialTile = function (t) {
        this.removeChild(t), this.addChild(t)
    }, a.prototype.lowerTutorialTiles = function () {
        this.removeChild(this.tutorialOverlay), this.addChild(this.tutorialOverlay), this.removeChild(this.tutorial), this.addChild(this.tutorial)
    }, a
}), define("linkengine/crosssellbar", ["pixi", "absolute"], function (t, e) {
    var i = function (t) {
        this.initCrossSellBar(t)
    };
    return i.prototype = Object.create(t.DisplayObjectContainer.prototype), i.prototype.initCrossSellBar = function (i) {
        if (t.DisplayObjectContainer.call(this), this.ui = i, "undefined" != typeof this.ui.crosssell && 0 !== this.ui.crosssell.games.length) {
            var n = new t.CanvasRenderer(this.ui.width, e.Coords.y(273));
            n.context.rect(0, 0, this.ui.width, e.Coords.y(273));
            var o = n.context.createLinearGradient(0, 0, 0, this.ui.height);
            o.addColorStop(0, this.ui.crosssell.gradient.top), o.addColorStop(1, this.ui.crosssell.gradient.bottom), n.context.fillStyle = o, n.context.fill();
            var r = new t.DisplayObjectContainer,
                s = new t.Sprite(t.Texture.fromCanvas(n.view));
            r.addChild(s), this.addChild(r);
            var a = t.Sprite.fromFrame(this.ui.crosssell.ahMark);
            a.position.x = this.ui.width - a.width - e.Coords.x(42), a.position.y = e.Coords.y(273) - a.height - e.Coords.y(20), this.addChild(a);
            var h = t.Sprite.fromFrame(this.ui.crosssell.portal.title);
            h.position.x = e.Coords.x(58), h.position.y = e.Coords.y(16), this.addChild(h);
            var l = new e.Button(t.Texture.fromFrame(this.ui.crosssell.portal.button), t.Texture.fromFrame(this.ui.crosssell.portal.button), function () {
                e.Analytics.logEvent("CrossSell:navigate", {
                    url: this.ui.crosssell.portal.url
                }), window.AH_navigate(this.ui.crosssell.portal.url)
            }.bind(this), !1);
            l.position.x = e.Coords.x(0), l.position.y = e.Coords.y(138), this.addChild(l);
            for (var u = 0; u < this.ui.crosssell.games.length && 5 > u; u += 1) {
                var c = this.ui.crosssell.games[u],
                    d = this.frameGameIcon(c.icon, c.url);
                d.position.x = e.Coords.x(440 + 270 * u), d.position.y = e.Coords.y(13), this.addChild(d)
            }
        }
    }, i.prototype.frameGameIcon = function (i, n) {
        var o = t.Sprite.fromFrame("cross_sell_icon_frame.png"),
            r = t.Sprite.fromFrame(i);
        return r.position.x = e.Coords.x(15), r.position.y = e.Coords.y(8), o.addChild(r), e.Platform.supportsTouch() ? o.touchstart = function () {
            e.Analytics.logEvent("CrossSell:navigate", {
                url: n
            }), window.AH_navigate(n)
        } : o.click = function () {
            e.Analytics.logEvent("CrossSell:navigate", {
                url: n
            }), window.AH_navigate(n)
        }, o.setInteractive(!0), o.buttonMode = !0, o
    }, i
}), define("linkengine/howtoplay", ["pixi", "absolute", "linkengine/crosssellbar"], function (t, e, i) {
    var n = function (t, e, i) {
        this.initHowToPlay(t, e, i)
    };
    return n.prototype = Object.create(e.Screen.prototype), n.prototype.initHowToPlay = function (n, o, r) {
        e.Screen.call(this), this.board = n, this.ui = o, this.game = r, this.title = t.Sprite.fromFrame("title_howtoplay.png"), this.title.anchor.x = .5, this.title.position.x = this.ui.width / 2 - e.Coords.x(16), this.title.position.y = e.Coords.y(this.ui.layout.HowToPlay.title.y), this.addChild(this.title);
        var s = t.Sprite.fromFrame("HTP_move_1.png");
        s.position.x = e.Coords.x(this.ui.layout.HowToPlay.move1.x), s.position.y = e.Coords.y(this.ui.layout.HowToPlay.move1.y), this.addChild(s);
        var a = t.Sprite.fromFrame("HTP_move_2.png");
        a.position.x = e.Coords.x(this.ui.layout.HowToPlay.move2.x), a.position.y = e.Coords.y(this.ui.layout.HowToPlay.move2.y), this.addChild(a);
        var h = t.Sprite.fromFrame("HTP_move_3.png");
        h.position.x = e.Coords.x(this.ui.layout.HowToPlay.move3.x), h.position.y = e.Coords.y(this.ui.layout.HowToPlay.move3.y), this.addChild(h);
        var l = t.Sprite.fromFrame("HTP_move_4.png");
        l.position.x = e.Coords.x(this.ui.layout.HowToPlay.move4.x), l.position.y = e.Coords.y(this.ui.layout.HowToPlay.move4.y), this.addChild(l);
        var u = t.Sprite.fromFrame("HTP_power_1.png");
        u.position.x = e.Coords.x(this.ui.layout.HowToPlay.power1.x), u.position.y = e.Coords.y(this.ui.layout.HowToPlay.power1.y), this.addChild(u);
        var c = t.Sprite.fromFrame("HTP_power_2.png");
        c.position.x = e.Coords.x(this.ui.layout.HowToPlay.power2.x), c.position.y = e.Coords.y(this.ui.layout.HowToPlay.power2.y), this.addChild(c);
        var d = t.Sprite.fromFrame("HTP_power_3.png");
        d.position.x = e.Coords.x(this.ui.layout.HowToPlay.power3.x), d.position.y = e.Coords.y(this.ui.layout.HowToPlay.power3.y), this.addChild(d), this.addButton("button_game_play", e.Coords.x(this.ui.layout.HowToPlay.playButton.x), e.Coords.y(this.ui.layout.HowToPlay.playButton.y), function () {
            this.game.resume(), this.ui.hideModal()
        }.bind(this), !0);
        var p = new i(this.ui);
        p.position.x = 0, p.position.y = this.ui.height - e.Coords.y(273), this.addChild(p)
    }, n.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), e.Analytics.logEvent("HowToPlay:show")
    }, n.prototype.onHide = function () {
        e.Screen.prototype.onHide.call(this)
    }, n
}), define("linkengine/optionsscreen", ["pixi", "absolute", "linkengine/howtoplay", "linkengine/crosssellbar"], function (t, e, i, n) {
    var o = function (t, e, i) {
        this.initOptionsScreen(t, e, i)
    };
    return o.prototype = Object.create(e.Screen.prototype), 
		o.prototype.initOptionsScreen = function (t, o, r) {
			e.Screen.call(this), 
			this.board = t, 
			this.ui = o, 
			this.game = r, 
			this.howToPlay = null, 
			this.addButton("button_mainmenu", 
				e.Coords.x(this.ui.layout.OptionsScreen.mainMenuButton.x), 
				e.Coords.y(this.ui.layout.OptionsScreen.mainMenuButton.y),
				function () {
					this.ui.hideModal(), this.game.quit()
				}.bind(this)
			), 
			this.addButton("button_menu_replaythis", 
				e.Coords.x(this.ui.layout.OptionsScreen.replayButton.x), 
				e.Coords.y(this.ui.layout.OptionsScreen.replayButton.y), 
				function () {
					this.ui.hideModal(), this.game.playLevel(this.game.currentLevelIndex)
				}.bind(this)
			), 
			this.addButton("button_options_howtoplay", 
				e.Coords.x(this.ui.layout.OptionsScreen.howToPlayButton.x), 
				e.Coords.y(this.ui.layout.OptionsScreen.howToPlayButton.y), 
				function () {
					this.howToPlay || (this.howToPlay = new i(this.board, this.ui, this.game), 
					this.howToPlay.position.x = this.position.x, 
					this.howToPlay.position.y = this.position.y), 
					this.ui.hideModal(), this.ui.showModal(this.howToPlay)
				}.bind(this)
			), 
			this.addButton("button_levelselect",
				e.Coords.x(this.ui.layout.OptionsScreen.levelSelectButton.x), 
				e.Coords.y(this.ui.layout.OptionsScreen.levelSelectButton.y), 
				function () {
					var musicManager = e.MusicManager;
					setTimeout(function () {
						adRequest(musicManager);
						console.log('menu button pressed')
						this.ui.hideModal(), this.game.selectLevel()
					}.bind(this), 0)
				}.bind(this)
			), 
			e.AudioManager.musicSupported() && (this.muteMusicButton = this.addToggleButton("button_options_music", 
				e.Coords.x(this.ui.layout.OptionsScreen.musicButton.x), 
				e.Coords.y(this.ui.layout.OptionsScreen.musicButton.y), 
				function () {
					console.log('music cut')
					e.MusicManager.setMuted(!e.MusicManager.isMuted())
				}, !e.MusicManager.isMuted())), 
				e.AudioManager.sfxSupported() && (this.muteSfxButton = this.addToggleButton("button_options_sfx", 
					e.Coords.x(this.ui.layout.OptionsScreen.sfxButton.x), 
					e.Coords.y(this.ui.layout.OptionsScreen.sfxButton.y), 
					function () {
						console.log('fx enabled')
						e.AudioManager.setSfxEnabled(!e.AudioManager.isSfxEnabled())
					}, e.AudioManager.isSfxEnabled())
				), 
			this.addButton("button_game_play", e.Coords.x(this.ui.layout.OptionsScreen.playButton.x), e.Coords.y(this.ui.layout.OptionsScreen.playButton.y), function () {
				console.log('play')
				this.game.resume(), this.ui.hideModal()
			}.bind(this), !0);
			var s = new n(this.ui);
        s.position.x = 0, s.position.y = this.ui.height - e.Coords.y(273), this.addChild(s)
    }, o.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), e.Analytics.logEvent("OptionsScreen:show"), 
		e.AudioManager.musicSupported() && (e.MusicManager.playMusic("menu_bg_music"), 
		this.muteMusicButton.setEnabled(!e.MusicManager.isMuted())), e.AudioManager.sfxSupported() && this.muteSfxButton.setEnabled(e.AudioManager.isSfxEnabled())
    }, o.prototype.onHide = function () {
        e.Screen.prototype.onHide.call(this)
    }, o
}), define("linkengine/scoresummary", ["pixi", "absolute", "linkengine/crosssellbar"], function (t, e, i) {
    var n = function (t, e, i) {
        this.initScoreSummary(t, e, i)
    };
    return n.prototype = Object.create(e.Screen.prototype), n.prototype.initScoreSummary = function (n, o, r) {
        e.Screen.call(this), this.board = n, this.ui = o, this.game = r, this.level = null, this.title = t.Sprite.fromFrame("title_greatjob.png"), this.title.anchor.x = .5, this.title.position.x = this.ui.width / 2, this.title.position.y = e.Coords.y(this.ui.layout.ScoreSummary.title.y), this.addChild(this.title), this.menuButton = this.addButton("button_levelselect", e.Coords.x(this.ui.layout.ScoreSummary.menuButton.x), e.Coords.y(this.ui.layout.ScoreSummary.menuButton.y), function () {
            this.ui.hideModal(), this.game.selectLevel()
        }.bind(this)), this.replayButton = this.addButton("button_menu_replaythis", e.Coords.x(this.ui.layout.ScoreSummary.replayButton.x), e.Coords.y(this.ui.layout.ScoreSummary.replayButton.y), function () {
            e.MusicManager.stopMusic(), this.ui.hideModal(), this.game.playLevel(this.game.currentLevelIndex)
        }.bind(this)), this.playNextButton = this.addButton("button_playnext", e.Coords.x(this.ui.layout.ScoreSummary.playNextButton.x), e.Coords.y(this.ui.layout.ScoreSummary.playNextButton.y), function () {
            e.MusicManager.stopMusic(), "undefined" != typeof AH_canShowAd && "function" == typeof AH_canShowAd ? AH_canShowAd(function () {
                this.ui.hideModal(), this.game.playNextLevel()
            }.bind(this)) : (this.ui.hideModal(), this.game.playNextLevel())
        }.bind(this)), this.menuButton.visible = this.replayButton.visible = this.playNextButton.visible = !1;
        var s = e.Coords.y(this.ui.layout.ScoreSummary.digitYFudge || 2),
            a = this.ui.width,
            h = this.ui.width / 2,
            l = e.Coords.y(480),
            u = t.Sprite.fromFrame("summary_titles_score.png");
        u.position.x = h - u.width, u.position.y = l, this.addChild(u), this.scoreText = new e.DigitLabel(10, this.ui.layout.ScoreSummary.digitSpriteScale), this.scoreText.position.x = a - this.scoreText.width, this.scoreText.position.y = l + s, this.addChild(this.scoreText), l += e.Coords.y(160);
        var c = t.Sprite.fromFrame("summary_titles_time.png");
        c.position.x = h - c.width, c.position.y = l, this.addChild(c), this.timeText = new e.DigitLabel(10, this.ui.layout.ScoreSummary.digitSpriteScale), this.timeText.position.x = a - this.timeText.width, this.timeText.position.y = l + s, this.addChild(this.timeText), l += e.Coords.y(160);
        var d = t.Sprite.fromFrame("summary_titles_combo.png");
        d.position.x = h - d.width, d.position.y = l, this.addChild(d), this.comboText = new e.DigitLabel(10, this.ui.layout.ScoreSummary.digitSpriteScale), this.comboText.position.x = a - this.comboText.width, this.comboText.position.y = l + s, this.addChild(this.comboText), l += e.Coords.y(240);
        var p = t.Sprite.fromFrame("summary_titles_total.png");
        p.position.x = e.Coords.x(30), p.position.y = l, this.addChild(p), this.totalText = new e.DigitLabel(10, this.ui.layout.ScoreSummary.digitSpriteScale), this.totalText.position.x = a - this.totalText.width, this.totalText.position.y = l + s, this.addChild(this.totalText);
        var f = new i(this.ui);
        f.position.x = 0, f.position.y = this.ui.height - e.Coords.y(273), this.addChild(f)
    }, n.prototype.setLevel = function (t) {
        this.level = t
    }, n.prototype.update = function () {
        var t, i, n, o = this.ui.layout.ScoreSummary.digitXFudge ? e.Coords.x(this.ui.layout.ScoreSummary.digitXFudge) : .9 * this.ui.width;
        if (this.level) {
            this.scoreText.setText(e.TextUtils.formatInt(this.level.score)), this.scoreText.position.x = o - this.scoreText.width, i = Math.floor(this.game.levelConfig.maxTimeBonus * (this.level.timeRemaining / this.level.config.timeGoal)), this.timeText.setText(e.TextUtils.formatInt(i)), this.timeText.position.x = o - this.timeText.width, n = this.level.comboBonus, this.comboText.setText(e.TextUtils.formatInt(n)), this.comboText.position.x = o - this.comboText.width, t = this.level.score + i + n, this.totalText.setText(e.TextUtils.formatInt(t)), this.totalText.position.x = o - this.totalText.width;
            var r = e.GameConfig.getVal("completedLevels");
            r[this.level.levelNum] = {
                score: t
            }, e.GameConfig.setVal("completedLevels", r)
        }
    }, n.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), e.Analytics.logEvent("ScoreSummary:show"), e.MusicManager.stopMusic(), e.AudioManager.playSound("win"), this.title.scale.x = this.title.scale.y = .1, e.TweenUtils.bounceIn(this.title, {
            duration: 1e3
        }), setTimeout(function () {
            this.menuButton.visible = this.replayButton.visible = this.playNextButton.visible = !0, this.menuButton.alpha = this.replayButton.alpha = this.playNextButton.alpha = 0, e.TweenUtils.fadeIn([this.menuButton, this.replayButton, this.playNextButton], {
                duration: 500
            }), e.MusicManager.playMusic("menu_bg_music")
        }.bind(this), 3e3)
    }, n.prototype.onHide = function () {
        e.Screen.prototype.onHide.call(this), this.menuButton.visible = this.replayButton.visible = this.playNextButton.visible = !1
    }, n
}), define("linkengine/powerupcounter", ["pixi", "absolute"], function (t, e) {
    var i = function () {
        this.initPowerupCounter()
    };
    return i.constructor = i, i.prototype = Object.create(t.Sprite.prototype), i.prototype.initPowerupCounter = function () {
        t.Sprite.call(this, t.Texture.fromFrame("button_game_counter_1.png")), this.count = 0, this.countDisplay = new e.DigitLabel(2, .4), this.countDisplay.position.x = (this.width - this.countDisplay.width) / 2, this.countDisplay.position.y = .25 * this.height, this.addChild(this.countDisplay)
    }, i.prototype.setCount = function (t) {
        this.count = t, this.countDisplay.setText(String(t)), this.countDisplay.position.x = (this.width - this.countDisplay.width) / 2
    }, i
}), define("linkengine/levelfailedscreen", ["pixi", "absolute", "linkengine/crosssellbar"], function (t, e, i) {
    var n = function (t, e, i) {
        this.initLevelFailedScreen(t, e, i)
    };
    return n.prototype = Object.create(e.Screen.prototype), n.prototype.initLevelFailedScreen = function (n, o, r) {
        e.Screen.call(this), this.ui = o, this.game = r, this.menuButton = this.addButton("button_levelselect", e.Coords.x(this.ui.layout.LevelFailed.menuButton.x), e.Coords.y(this.ui.layout.LevelFailed.menuButton.y), function () {
            this.ui.hideModal(), this.game.selectLevel()
        }.bind(this)), this.replayButton = this.addButton("button_menu_replaythis", e.Coords.x(this.ui.layout.LevelFailed.replayButton.x), e.Coords.y(this.ui.layout.LevelFailed.replayButton.y), function () {
            e.MusicManager.stopMusic(), this.ui.hideModal(), this.game.playLevel(this.game.currentLevelIndex)
        }.bind(this)), this.menuButton.visible = !1, this.replayButton.visible = !1, this.outOfTime = t.Sprite.fromFrame("title_outoftime.png"), this.outOfTime.anchor.x = .5, this.outOfTime.position.x = this.ui.width / 2, this.outOfTime.position.y = e.Coords.y(this.ui.layout.LevelFailed.title.y), this.addChild(this.outOfTime);
        var s = new i(this.ui);
        s.position.x = 0, s.position.y = this.ui.height - e.Coords.y(273), this.addChild(s)
    }, n.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), e.Analytics.logEvent("LevelFailed:show"), e.MusicManager.stopMusic(), e.AudioManager.playSound("times_up"), this.outOfTime.scale.x = this.outOfTime.scale.y = .1, e.TweenUtils.bounceIn(this.outOfTime, {
            duration: 1e3
        }), setTimeout(function () {
            e.MusicManager.playMusic("menu_bg_music"), this.menuButton.visible = !0, this.replayButton.visible = !0, this.menuButton.alpha = this.replayButton.alpha = 0, e.TweenUtils.fadeIn([this.menuButton, this.replayButton], {
                duration: 500
            })
        }.bind(this), 2e3)
    }, n.prototype.onHide = function () {
        this.menuButton.visible = !1, this.replayButton.visible = !1
    }, n
}), define("linkengine/levelstartsequence", ["pixi", "absolute", "linkengine/levelselectbutton"], function (t, e, i) {
    var n = function (t, e, i, n, o) {
        this.initLevelStartSequence(t, e, i, n, o)
    };
    return n.prototype = Object.create(e.Screen.prototype), n.prototype.initLevelStartSequence = function (t, i, n, o, r) {
        e.Screen.call(this), this.ui = i, this.game = n, this.level = o, this.onComplete = r
    }, n.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this);
        var n = new i(this.level.levelNum - 1, this.level.config, !1, 0, function () {});
        n.alpha = 0, n.position.x = (this.ui.width - n.width) / 2, n.position.y = (.875 * this.ui.height - n.height) / 2, this.addChild(n);
        var o = t.Sprite.fromFrame("title_READY.png");
        o.anchor.x = .5, o.anchor.y = .5, o.position.x = this.ui.width / 2, o.position.y = .875 * this.ui.height / 2, o.scale.x = o.scale.y = .1;
        var r = t.Sprite.fromFrame("title_GO.png");
        r.anchor.x = .5, r.anchor.y = .5, r.position.x = this.ui.width / 2, r.position.y = .875 * this.ui.height / 2, r.scale.x = r.scale.y = .1, e.TweenUtils.fadeIn(n, {
            duration: 200
        }, function () {
            setTimeout(function () {
                this.removeChild(n), this.addChild(o), e.TweenUtils.bounceIn(o, {
                    duration: 1e3
                }, function () {
                    this.removeChild(o), this.addChild(r), e.TweenUtils.bounceIn(r, {
                        duration: 1e3
                    }, function () {
                        e.MusicManager.playMusic(this.level.music), this.removeChild(r), this.onComplete()
                    }.bind(this))
                }.bind(this))
            }.bind(this), 2e3)
        }.bind(this))
    }, n.prototype.onHide = function () {}, n
}), define("linkengine/gamescreen", ["pixi", "absolute", "linkengine/timer", "linkengine/levelindicator", "linkengine/boardview", "linkengine/optionsscreen", "linkengine/scoresummary", "linkengine/powerupcounter", "linkengine/levelfailedscreen", "linkengine/levelstartsequence"], function (t, e, i, n, o, r, s, a, h) {
    var l = function (t, e) {
        this.initGameScreen(t, e)
    };
    return l.prototype = Object.create(e.Screen.prototype), l.prototype.initGameScreen = function (o, l) {
        e.Screen.call(this);
        var u = this;
        this.ui = o, this.game = l, this.timeWarningPlaying = !1;
        var c = t.Sprite.fromFrame("stage_border.png");
        this.addChild(c), this.timer = new i(o), this.timer.position.x = e.Coords.x(this.ui.layout.GameScreen.timer.x), this.timer.position.y = e.Coords.y(this.ui.layout.GameScreen.timer.y), this.addChild(this.timer), this.levelIndicator = new n(o), this.levelIndicator.position.x = e.Coords.x(this.ui.layout.GameScreen.levelIndicator.x), this.levelIndicator.position.y = e.Coords.y(this.ui.layout.GameScreen.levelIndicator.y), this.addChild(this.levelIndicator), this.optionsMenu = new r(this, this.ui, this.game), this.scoreSummary = new s(this, this.ui, this.game), this.levelFailed = new h(this, this.ui, this.game), this.optionsButton = new e.Button(t.Texture.fromFrame("button_game_options_1.png"), t.Texture.fromFrame("button_game_options_2.png"), function () {
            e.Debug.log("Options pressed!"), u.game.pause(), u.ui.showModal(u.optionsMenu)
        }, !0), this.optionsButton.position.x = e.Coords.x(this.ui.layout.GameScreen.optionsButton.x), this.optionsButton.position.y = e.Coords.y(this.ui.layout.GameScreen.optionsButton.y), this.addChild(this.optionsButton), this.scrambleButton = new e.Button(t.Texture.fromFrame("button_game_shuffle_1.png"), t.Texture.fromFrame("button_game_shuffle_2.png"), function () {
            u.level.availablePowerups.shuffle > 0 && (e.Debug.log("Scramble pressed!"), u.level.availablePowerups.shuffle--, u.boardView.scrambleTiles(), u.updatePowerupCounts(), u.scrambleButton.setActive(!1), setTimeout(function () {
                u.scrambleButton.setActive(!0)
            }, 1e3))
        }, !0), this.scrambleButton.position.x = e.Coords.x(this.ui.layout.GameScreen.scrambleButton.x), this.scrambleButton.position.y = e.Coords.y(this.ui.layout.GameScreen.scrambleButton.y), this.addChild(this.scrambleButton), this.scrambleCount = new a, this.scrambleCount.position.x = e.Coords.x(this.ui.layout.GameScreen.scrambleCount.x), this.scrambleCount.position.y = e.Coords.y(this.ui.layout.GameScreen.scrambleCount.y), this.addChild(this.scrambleCount), this.scrambleCount.setCount(0), this.hintButton = new e.Button(t.Texture.fromFrame("button_game_hint_1.png"), t.Texture.fromFrame("button_game_hint_2.png"), function () {
            u.level.availablePowerups.hint > 0 && (e.Debug.log("Hint pressed!"), u.level.availablePowerups.hint--, u.boardView.showHint(), u.updatePowerupCounts(), u.hintButton.setActive(!1), setTimeout(function () {
                u.hintButton.setActive(!0)
            }, 1e3))
        }, !0), this.hintButton.position.x = e.Coords.x(this.ui.layout.GameScreen.hintButton.x), this.hintButton.position.y = e.Coords.y(this.ui.layout.GameScreen.hintButton.y), this.addChild(this.hintButton), this.hintCount = new a, this.hintCount.position.x = e.Coords.x(this.ui.layout.GameScreen.hintCount.x), this.hintCount.position.y = e.Coords.y(this.ui.layout.GameScreen.hintCount.y), this.addChild(this.hintCount), this.hintCount.setCount(0)
    }, l.prototype.showScoreSummary = function () {
        this.scoreSummary.update(), this.enableControls(!1), e.Analytics.logEvent("GameScreen:levelSucceeded", {
            level: this.level.levelNum.toString(),
            timeRemaining: this.level.timeRemaining.toString()
        }), this.level.timeRemaining = 0, this.ui.showModal(this.scoreSummary)
    }, l.prototype.configLevel = function (t) {
        this.level = t, this.enableControls(!1), this.updatePowerupCounts(), this.timer.setMaxTime(t.config.timeGoal), this.timer.setTime(this.level.timeRemaining), this.levelIndicator.setLevel(t.levelNum), this.scoreSummary.setLevel(this.level), this.boardView && (this.boardView.cleanup(), this.removeChild(this.boardView)), this.boardView = new o(this, this.game, this.ui), this.boardView.configLevel(t), this.boardView.position.x = (this.ui.width - this.boardView.getBoardWidth()) / 2, this.boardView.position.y = (.875 * this.ui.height - this.boardView.getBoardHeight()) / 2, this.addChild(this.boardView), e.Analytics.logEvent("GameScreen:levelStart", {
            level: t.levelNum.toString()
        }), setTimeout(function () {
            this.boardView.animateIntro(function () {
                setTimeout(function () {
                    t.config.tutorial || (this.levelTimer = setTimeout(this.updateLevelTime.bind(this), 1e3), this.enableControls(!0))
                }.bind(this), 600)
            }.bind(this))
        }.bind(this), 250)
    }, l.prototype.enableControls = function (t) {
        this.optionsButton.setActive(t), this.scrambleButton.setActive(t), this.hintButton.setActive(t)
    }, l.prototype.updateLevelTime = function () {
        this.level.timeRemaining--, this.timer.setTime(this.level.timeRemaining), this.timer.setMaxTime(this.level.config.timeGoal + this.level.extraTime), this.level.timeRemaining > 10 && this.timeWarningPlaying && (e.AudioManager.stopSound("run_out_of_time"), this.timeWarningPlaying = !1), 10 === this.level.timeRemaining && e.AudioManager.usingWebAudio() && (e.AudioManager.playSound("run_out_of_time"), this.timeWarningPlaying = !0), this.level.timeRemaining <= 0 ? (this.levelTimer = null, this.boardView.won || setTimeout(function () {
            this.boardView.handleLevelFailed(), this.enableControls(!1), setTimeout(function () {
                this.ui.showModal(this.levelFailed), e.Analytics.logEvent("GameScreen:levelFailed", {
                    level: this.level.levelNum.toString()
                })
            }.bind(this), 0)
        }.bind(this), 0)) : this.levelTimer = setTimeout(this.updateLevelTime.bind(this), 1e3)
    }, l.prototype.handleNoMoves = function () {
        var e = t.Sprite.fromFrame("title_outofmatches.png");
        e.position.x = (this.ui.width - e.width) / 2, e.position.y = (this.ui.height / 2 - e.height) / 2, this.addChild(e), setTimeout(function () {
            this.removeChild(e), this.boardView.scrambleTiles()
        }.bind(this), 1e3)
    }, l.prototype.updatePowerupCounts = function () {
        this.level.availablePowerups && (void 0 !== this.level.availablePowerups.hint && this.hintCount.setCount(Math.round(this.level.availablePowerups.hint)), void 0 !== this.level.availablePowerups.shuffle && this.scrambleCount.setCount(Math.round(this.level.availablePowerups.shuffle)))
    }, l.prototype.getPowerupTargetPosition = function (t) {
        var e = {
            x: 0,
            y: 0
        };
        switch (t) {
        case "time":
            e.x = this.timer.position.x + this.timer.width / 2, e.y = this.timer.position.y + this.timer.height / 2;
            break;
        case "hint":
            e.x = this.hintButton.position.x + this.hintButton.width / 2, e.y = this.hintButton.position.y + this.hintButton.height / 2;
            break;
        case "shuffle":
            e.x = this.scrambleButton.position.x + this.scrambleButton.width / 2, e.y = this.scrambleButton.position.y + this.scrambleButton.height / 2
        }
        return e
    }, l.prototype.showPowerupBling = function (t) {
        var i;
        switch (t) {
        case "time":
            i = this.timer;
            break;
        case "hint":
            i = this.hintButton;
            break;
        case "shuffle":
            i = this.scrambleButton
        }
        i && (i.scale.x = i.scale.y = .95, e.TweenUtils.bounceIn(i, {
            duration: 500
        }))
    }, l.prototype.handlePause = function () {
        clearTimeout(this.levelTimer), this.levelTimer = null, this.boardView.visible = !1, this.boardView.handlePause(), this.enableControls(!1), this.timeWarningPlaying && e.AudioManager.pauseSound("run_out_of_time")
    }, l.prototype.handleResume = function () {
        this.level.timeRemaining > 0 && (this.boardView.tutorial || (this.levelTimer = setTimeout(this.updateLevelTime.bind(this), 1e3)), this.boardView.visible = !0, this.boardView.handleResume(), this.timeWarningPlaying && e.AudioManager.playSound("run_out_of_time")), this.boardView.tutorial || this.enableControls(!0)
    }, l.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), e.AudioManager.sfxSupported() && e.MusicManager.stopMusic()
    }, l.prototype.pauseTimer = function () {
        clearTimeout(this.levelTimer)
    }, l.prototype.resumeTimer = function () {
        this.levelTimer = setTimeout(this.updateLevelTime.bind(this), 1e3)
    }, l
}), define("linkengine/loadingscreen", ["pixi", "absolute"], function (t, e) {
    var i = function (t, e) {
        this.initLoadingScreen(t, e)
    };
    return i.prototype = Object.create(e.Screen.prototype), i.prototype.initLoadingScreen = function (i, n) {
        e.Screen.call(this), this.ui = i, this.game = n, this.logo = t.Sprite.fromFrame("logo.png"), this.logo.position.x = (this.ui.width - this.logo.width) / 2 + e.Coords.y(this.ui.layout.LoadingScreen.logo.x || 0), this.logo.position.y = e.Coords.y(this.ui.layout.LoadingScreen.logo.y), this.progressBar = new e.ProgressBar(t.Texture.fromFrame("loading_bar_frame.png"), t.Texture.fromFrame("loading_bar_marker.png")), this.progressBar.position.x = (this.ui.width - this.progressBar.width) / 2, this.progressBar.position.y = e.Coords.y(this.ui.layout.LoadingScreen.progressBar.y), this.isWaiting = !1
    }, i.prototype.updateLoadingProgress = function (t) {
        this.progressBar.setProgress(t)
    }, i.prototype.showWaiting = function () {
        this.isWaiting || (this.isWaiting = !0, this.progressBar.showWaiting(t.Texture.fromFrame("loading_bar_progress.png")))
    }, i.prototype.doneWaiting = function () {
        this.isWaiting = !1, this.updateLoadingProgress(100)
    }, i.prototype.onShow = function () {
        e.Screen.prototype.onShow.call(this), this.addChild(this.logo), this.addChild(this.progressBar)
    }, i.prototype.onHide = function () {
        e.Screen.prototype.onHide.call(this), this.removeChild(this.logo), this.removeChild(this.progressBar)
    }, i.prototype.beforeRender = function () {
        this.isWaiting && this.progressBar.updateWaiting()
    }, i
}), define("linkengine/linkgameui", ["absolute", "linkengine/mainmenu", "linkengine/levelselectscreen", "linkengine/gamescreen", "linkengine/loadingscreen"], function (t, e, i, n, o) {
    var r = function (t, e, i, n, o, r) {
        this._initLinkGameUI(t, e, i, n, o, r)
    };
    return r.prototype = Object.create(t.GameUI.prototype), r.prototype._initLinkGameUI = function (e, i, n, o, r, s) {
        t.GameUI.call(this, i, n, o), this.game = e, this.layout = r, this.crosssell = s
    }, r.prototype.load = function (r, s, a) {
        var h = new t.Loader;
        h.loadArt(["loading.json"], function () {}, function () {
            this.loadingScreen = new o(this, this.game), this.showScreen(this.loadingScreen), setTimeout(function () {
                this.animate();
                var o = new t.Loader;
                o.loadAssets(r, function (t) {.99 > t ? this.loadingScreen.updateLoadingProgress(t) : this.loadingScreen.showWaiting(), s(t)
                }.bind(this), function () {
                    this.loadingScreen.showWaiting(), setTimeout(function () {
                        this.mainMenu = new e(this, this.game), this.levelSelect = new i(this, this.game), this.gameScreen = new n(this, this.game), t.MusicManager.setMuted(t.MusicManager.isMuted()), this.loadingScreen.updateLoadingProgress(100), a()
                    }.bind(this), 0)
                }.bind(this))
            }.bind(this), 0)
        }.bind(this))
    }, r.prototype.showGameScreen = function () {
        this.showScreen(this.gameScreen)
    }, r.prototype.showMainMenu = function () {
        this.showScreen(this.mainMenu)
    }, r.prototype.showLevelSelect = function () {
        this.showScreen(this.levelSelect)
    }, r.prototype.showOptionsMenu = function () {
        this.showModal(this.optionsMenu)
    }, r.prototype.win = function () {
        var t = this;
        setTimeout(function () {
            t.gameScreen.handlePause(), t.gameScreen.showScoreSummary()
        }, 0)
    }, r.prototype.noMoves = function () {
        this.gameScreen.handleNoMoves()
    }, r.prototype.configLevel = function (t) {
        this.gameScreen.configLevel(t)
    }, r.prototype.handlePause = function () {
        this.gameScreen.handlePause()
    }, r.prototype.handleResume = function () {
        this.gameScreen.handleResume()
    }, r.prototype.beforeRender = function () {
        this.currentScreen && this.currentScreen.beforeRender()
    }, r
}), define("linkengine/level", [], function () {
    var t = function (t, e, i) {
        this.initLevel(t, e, i)
    };
    return t.prototype.initLevel = function (t, e, i) {
        this.levelNum = t, this.config = e, this.timeRemaining = e.timeGoal, this.availablePowerups = i || {
            hint: 0,
            shuffle: 0
        }, this.score = 0, this.comboBonus = 0, this.music = e.music || "game_bg_music", this.extraTime = 0
    }, t.prototype.addTime = function (t) {
        this.timeRemaining = this.timeRemaining + t, this.extraTime += t
    }, t
}), define("linkengine/linkgame", ["absolute", "linkengine/linkgameui", "state-machine", "linkengine/level"], function (t, e, i, n) {
    var o = function (t) {
        this._initLinkGame(t)
    };
    return o.prototype = Object.create(t.Game.prototype), o.prototype._initLinkGame = function (i) {
        var o = i.container || "container",
            r = i.width || 1536 * t.ScreenMetrics.getResScale(),
            s = i.height || 2008 * t.ScreenMetrics.getResScale(),
            a = i.levelConfig,
            h = i.layout,
            l = i.gameId,
            u = i.gameVersion,
            c = i.crosssell,
            d = i.config;
        this.levelConfig = a, t.Game.call(this, l, {
            version: 1,
            versionString: u,
            musicEnabled: !0,
            sfxEnabled: !0,
            lastLevel: 0,
            completedLevels: [],
            config: d
        }), this.currentLevelIndex = 0, this.currentLevel = new n(this.currentLevelIndex + 1, this.levelConfig.levels[this.currentLevelIndex], {
            hint: 4,
            shuffle: 4
        }), this.initStateMachine(), this.initEventBus(), this.ui = new e(this, o, r, s, h, c), this.savedMusicState = t.MusicManager.isMuted(), this.savedGameState = "", this.isHidden = !1
    }, o.prototype.handleVisibilityChange = function (e) {
        t.Game.prototype.handleVisibilityChange.call(this, e), e ? this.isHidden || (this.isHidden = !0, this.savedGameState = this.fsm.current, "playing" === this.fsm.current ? this.pause() : t.MusicManager.stopMusic()) : this.isHidden && ("playing" === this.savedGameState ? this.resume() : t.MusicManager.playMusic("menu_bg_music"), this.isHidden = !1)
    }, o.prototype.load = function (t, e, i) {
        this.ui.load(t, e, i)
    }, o.prototype.initEventBus = function () {
        t.EventBus.addEventListener("start", this.fsm.start.bind(this.fsm)), 
		t.EventBus.addEventListener("selectlevel", this.fsm.selectlevel.bind(this.fsm)), 
		t.EventBus.addEventListener("play", this.fsm.play.bind(this.fsm)), 
		t.EventBus.addEventListener("pause", this.fsm.pause.bind(this.fsm)),
		t.EventBus.addEventListener("resume", this.fsm.resume.bind(this.fsm)), 
		t.EventBus.addEventListener("quit", this.fsm.quit.bind(this.fsm))
    }, o.prototype.initStateMachine = function () {
        this.fsm = i.create({
            events: [{
                name: "init",
                from: "none",
                to: "loading"
            }, {
                name: "start",
                from: "loading",
                to: "mainmenu"
            }, {
                name: "selectlevel",
                from: "mainmenu",
                to: "levelmenu"
            }, {
                name: "selectlevel",
                from: "playing",
                to: "levelmenu"
            }, {
                name: "selectlevel",
                from: "paused",
                to: "levelmenu"
            }, {
                name: "pause",
                from: "playing",
                to: "paused"
            }, {
                name: "resume",
                from: "paused",
                to: "playing"
            }, {
                name: "play",
                from: "levelmenu",
                to: "playing"
            }, {
                name: "play",
                from: "playing",
                to: "playing"
            }, {
                name: "play",
                from: "scoresummary",
                to: "playing"
            }, {
                name: "play",
                from: "paused",
                to: "playing"
            }, {
                name: "win",
                from: "playing",
                to: "scoresummary"
            }, {
                name: "lose",
                from: "playing",
                to: "scoresummary"
            }, {
                name: "quit",
                from: "playing",
                to: "mainmenu"
            }, {
                name: "quit",
                from: "paused",
                to: "mainmenu"
            }],
            callbacks: {
                onstart: this.onStart.bind(this),
                onmainmenu: this.onMainMenu.bind(this),
                onselectlevel: this.onSelectLevel.bind(this),
                onplay: this.onPlay.bind(this),
                onpause: this.onPause.bind(this),
                onresume: this.onResume.bind(this),
                onquit: this.onQuit.bind(this),
                onchangestate: function (e, i, n) {
                    t.Debug.log("CHANGED STATE: " + i + " to " + n)
                }
            }
        }), this.fsm.init()
    }, o.prototype.onStart = function () {}, o.prototype.onSelectLevel = function () {
        this.ui.showLevelSelect()
    }, o.prototype.onPlay = function () {
        this.ui.showGameScreen()
    }, o.prototype.onPause = function () {
        this.ui.handlePause()
    }, o.prototype.onResume = function () {
        this.ui.handleResume()
    }, o.prototype.onQuit = function () {
        this.ui.showMainMenu()
    }, o.prototype.onMainMenu = function () {
        this.ui.showMainMenu()
    }, o.prototype.playLevel = function (t) {
        var e = this.currentLevel;
        this.currentLevelIndex = t, this.currentLevel = new n(this.currentLevelIndex + 1, this.levelConfig.levels[this.currentLevelIndex], e.availablePowerups), this.ui.configLevel(this.currentLevel), this.fsm.play()
    }, o.prototype.playNextLevel = function () {
        this.currentLevelIndex + 1 < this.levelConfig.levels.length ? this.playLevel(this.currentLevelIndex + 1) : this.fsm.quit()
    }, o.prototype.start = function () {
        this.fsm.start()
    }, o.prototype.selectLevel = function () {
        this.fsm.selectlevel()
    }, o.prototype.quit = function () {
        this.fsm.quit()
    }, o.prototype.pause = function () {
        this.fsm.pause()
    }, o.prototype.resume = function () {
        this.fsm.resume()
    }, o
}), define("linkengine", ["require", "linkengine/linkgame"], function (t) {
    return {
        version: "1.0",
        LinkGame: t("linkengine/linkgame")
    }
}), define("strings", ["text!locale.json", "text!strings.json"], function (t, e) {
    var i = JSON.parse(t),
        n = JSON.parse(e);
    return n.locale[i.current] ? n.locale[i.current] : n.locale.en
}), define("levelconfig", ["strings", "text!levelconfig.json"], function (t, e) {
    var i = {
        comboThreshold: 2500,
        comboPoints: [0, 100, 250, 500, 750, 1e3, 1250, 1500, 2e3, 3e3, 4e3, 5e3, 7500, 1e4],
        pointsPerMatch: 2500,
        maxTimeBonus: 25e3,
        timePowerupSeconds: 10,
        maxPathTurns: 2,
        shimmerHintInterval: 1e4,
        levels: [{
            tutorial: {
                steps: [{
                    tiles: [
                        [5, 2],
                        [6, 2]
                    ],
                    targetTile: [6, 2],
                    text: t.tutorial.step1
                }, {
                    tiles: [
                        [5, 2],
                        [6, 2]
                    ],
                    targetTile: [5, 2],
                    text: t.tutorial.step2
                }, {
                    tiles: [
                        [7, 2],
                        [4, 2]
                    ],
                    targetTile: [7, 2],
                    text: t.tutorial.step3
                }, {
                    tiles: [
                        [7, 2],
                        [4, 2]
                    ],
                    targetTile: [4, 2],
                    text: t.tutorial.step4
                }, {
                    tiles: [
                        [4, 5],
                        [8, 6]
                    ],
                    targetTile: [4, 5],
                    text: t.tutorial.step5
                }, {
                    tiles: [
                        [4, 5],
                        [8, 6]
                    ],
                    targetTile: [8, 6],
                    text: t.tutorial.step6
                }, {
                    tiles: [
                        [8, 2],
                        [7, 5]
                    ],
                    targetTile: [7, 5],
                    text: t.tutorial.step7
                }, {
                    tiles: [
                        [8, 2],
                        [7, 5]
                    ],
                    targetTile: [8, 2],
                    text: t.tutorial.step8
                }, {
                    tiles: [
                        [8, 2],
                        [4, 4]
                    ],
                    targetTile: [4, 4],
                    text: t.tutorial.step9
                }, {
                    tiles: [
                        [7, 5],
                        [4, 7]
                    ],
                    targetTile: [7, 5],
                    text: t.tutorial.step10
                }, {
                    tiles: [
                        [7, 5],
                        [4, 7]
                    ],
                    targetTile: [4, 7],
                    text: t.tutorial.step11
                }, {
                    tiles: [
                        [8, 3],
                        [8, 4]
                    ],
                    targetTile: [8, 3],
                    text: t.tutorial.step12
                }, {
                    tiles: [
                        [8, 3],
                        [8, 4]
                    ],
                    targetTile: [8, 4],
                    text: t.tutorial.step13
                }, {
                    tiles: [],
                    targetTile: null,
                    text: t.tutorial.complete
                }],
                layout: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 6, 7, 7, 6, "time", 8, 0, 0],
                    [0, 0, 9, 0, 12, 4, 0, 12, 0, 0],
                    [0, 0, 2, 0, 8, 5, 0, 5, 0, 0],
                    [0, 0, 2, 0, 3, "hint", 0, 11, 0, 0],
                    [0, 0, 9, 0, 11, 12, 0, 3, 0, 0],
                    [0, 0, 12, "shuffle", "shuffle", "hint", 4, "time", 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            },
            name: "1",
            timeGoal: 90,
            powerups: {
                time: 0,
                shuffle: 0,
                hint: 0
            },
            collapseMode: "none",
            tileTypes: [3, 6, 7, 10, 12, 14, 19, 25, 32, 44],
            layout: ["0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 1 0 1 1 0 1 0 0", "0 0 1 0 1 1 0 1 0 0", "0 0 1 0 1 1 0 1 0 0", "0 0 1 0 1 1 0 1 0 0", "0 0 1 1 1 1 1 1 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0", "0 0 0 0 0 0 0 0 0 0"]
        }]
    };
    return i.levels = i.levels.concat(JSON.parse(e)), i
}), define("layout", ["text!layout.json"], function (t) {
    var e = JSON.parse(t);
    return e
}), define("text!audiosprites.json", [], function () {
    return '[\n    {\n        "id": "ready",\n        "url": "dpl_ready",\n        "loop": false,\n        "volume": 75,\n        "start": 284,\n        "end": 285.15954648526076\n    },\n    {\n        "id": "go",\n        "url": "dpl_go",\n        "loop": false,\n        "volume": 100,\n        "start": 115,\n        "end": 115.95056689342404\n    },\n    {\n        "id": "tile_select",\n        "url": "dpl_tile_select",\n        "loop": false,\n        "volume": 75,\n        "start": 335,\n        "end": 335.1146485260771\n    },\n    {\n        "id": "single_tile",\n        "url": "dpl_single_tile",\n        "loop": false,\n        "volume": 100,\n        "start": 313,\n        "end": 313.0914285714286\n    },\n    {\n        "id": "match_1",\n        "url": "dpl_match_1",\n        "loop": false,\n        "volume": 100,\n        "start": 131,\n        "end": 132.0202267573696\n    },\n    {\n        "id": "match_2",\n        "url": "dpl_match_2",\n        "loop": false,\n        "volume": 96,\n        "start": 149,\n        "end": 150.0202267573696\n    },\n    {\n        "id": "match_3",\n        "url": "dpl_match_3",\n        "loop": false,\n        "volume": 92,\n        "start": 152,\n        "end": 153.0202267573696\n    },\n    {\n        "id": "match_4",\n        "url": "dpl_match_4",\n        "loop": false,\n        "volume": 88,\n        "start": 155,\n        "end": 156.0202267573696\n    },\n    {\n        "id": "match_5",\n        "url": "dpl_match_5",\n        "loop": false,\n        "volume": 84,\n        "start": 158,\n        "end": 159.0202267573696\n    },\n    {\n        "id": "match_6",\n        "url": "dpl_match_6",\n        "loop": false,\n        "volume": 80,\n        "start": 161,\n        "end": 162.0202267573696\n    },\n    {\n        "id": "match_7",\n        "url": "dpl_match_7",\n        "loop": false,\n        "volume": 76,\n        "start": 164,\n        "end": 165.0202267573696\n    },\n    {\n        "id": "match_8",\n        "url": "dpl_match_8",\n        "loop": false,\n        "volume": 80,\n        "start": 167,\n        "end": 168.0202267573696\n    },\n    {\n        "id": "match_9",\n        "url": "dpl_match_9",\n        "loop": false,\n        "volume": 88,\n        "start": 170,\n        "end": 171.0202267573696\n    },\n    {\n        "id": "match_10",\n        "url": "dpl_match_10",\n        "loop": false,\n        "volume": 92,\n        "start": 134,\n        "end": 135.0202267573696\n    },\n    {\n        "id": "match_11",\n        "url": "dpl_match_11",\n        "loop": false,\n        "volume": 96,\n        "start": 137,\n        "end": 138.0202267573696\n    },\n    {\n        "id": "match_12",\n        "url": "dpl_match_12",\n        "loop": false,\n        "volume": 97,\n        "start": 140,\n        "end": 141.0202267573696\n    },\n    {\n        "id": "match_13",\n        "url": "dpl_match_13",\n        "loop": false,\n        "volume": 98,\n        "start": 143,\n        "end": 144.0202267573696\n    },\n    {\n        "id": "match_14",\n        "url": "dpl_match_14",\n        "loop": false,\n        "volume": 100,\n        "start": 146,\n        "end": 147.0202267573696\n    },\n    {\n        "id": "load_tiles",\n        "url": "dpl_load_tiles",\n        "loop": false,\n        "volume": 100,\n        "start": 127,\n        "end": 129.04190476190476\n    },\n    {\n        "id": "hint",\n        "url": "dpl_hint",\n        "loop": false,\n        "volume": 70,\n        "start": 117,\n        "end": 118.64716553287982\n    },\n    {\n        "id": "shuffle",\n        "url": "dpl_shuffle",\n        "loop": false,\n        "volume": 75,\n        "start": 311,\n        "end": 311.6719274376417\n    },\n    {\n        "id": "tile_fall_1",\n        "url": "dpl_tile_fall_1",\n        "loop": false,\n        "volume": 30,\n        "start": 317,\n        "end": 317.0914285714286\n    },\n    {\n        "id": "tile_fall_2",\n        "url": "dpl_tile_fall_2",\n        "loop": false,\n        "volume": 28,\n        "start": 319,\n        "end": 319.0914285714286\n    },\n    {\n        "id": "tile_fall_3",\n        "url": "dpl_tile_fall_3",\n        "loop": false,\n        "volume": 26,\n        "start": 321,\n        "end": 321.0914285714286\n    },\n    {\n        "id": "tile_fall_4",\n        "url": "dpl_tile_fall_4",\n        "loop": false,\n        "volume": 24,\n        "start": 323,\n        "end": 323.06820861678005\n    },\n    {\n        "id": "tile_fall_5",\n        "url": "dpl_tile_fall_5",\n        "loop": false,\n        "volume": 22,\n        "start": 325,\n        "end": 325.06820861678005\n    },\n    {\n        "id": "tile_fall_6",\n        "url": "dpl_tile_fall_6",\n        "loop": false,\n        "volume": 20,\n        "start": 327,\n        "end": 327.06820861678005\n    },\n    {\n        "id": "tile_fall_7",\n        "url": "dpl_tile_fall_7",\n        "loop": false,\n        "volume": 18,\n        "start": 329,\n        "end": 329.06820861678005\n    },\n    {\n        "id": "tile_fall_8",\n        "url": "dpl_tile_fall_8",\n        "loop": false,\n        "volume": 16,\n        "start": 331,\n        "end": 331.06820861678005\n    },\n    {\n        "id": "tile_fall_9",\n        "url": "dpl_tile_fall_9",\n        "loop": false,\n        "volume": 14,\n        "start": 333,\n        "end": 333.06820861678005\n    },\n    {\n        "id": "tile_slide_1",\n        "url": "dpl_tile_slide_1",\n        "loop": false,\n        "volume": 80,\n        "start": 337,\n        "end": 337.1843083900227\n    },\n    {\n        "id": "tile_slide_2",\n        "url": "dpl_tile_slide_2",\n        "loop": false,\n        "volume": 80,\n        "start": 339,\n        "end": 339.1843083900227\n    },\n    {\n        "id": "tile_slide_3",\n        "url": "dpl_tile_slide_3",\n        "loop": false,\n        "volume": 80,\n        "start": 341,\n        "end": 341.16108843537415\n    },\n    {\n        "id": "tile_slide_4",\n        "url": "dpl_tile_slide_4",\n        "loop": false,\n        "volume": 80,\n        "start": 343,\n        "end": 343.16108843537415\n    },\n    {\n        "id": "tile_slide_5",\n        "url": "dpl_tile_slide_5",\n        "loop": false,\n        "volume": 80,\n        "start": 345,\n        "end": 345.16108843537415\n    },\n    {\n        "id": "tile_slide_6",\n        "url": "dpl_tile_slide_6",\n        "loop": false,\n        "volume": 80,\n        "start": 347,\n        "end": 347.16108843537415\n    },\n    {\n        "id": "tile_slide_7",\n        "url": "dpl_tile_slide_7",\n        "loop": false,\n        "volume": 80,\n        "start": 349,\n        "end": 349.1378684807256\n    },\n    {\n        "id": "win",\n        "url": "dpl_win",\n        "loop": false,\n        "volume": 100,\n        "start": 368,\n        "end": 371.15646258503403\n    },\n    {\n        "id": "button_click",\n        "url": "dpl_button_click",\n        "loop": false,\n        "volume": 100,\n        "start": 111,\n        "end": 111.06820861678004\n    },\n    {\n        "id": "power_hint",\n        "url": "dpl_power_hint",\n        "loop": false,\n        "volume": 100,\n        "start": 277,\n        "end": 277.60226757369617\n    },\n    {\n        "id": "power_shuffle",\n        "url": "dpl_power_shuffle",\n        "loop": false,\n        "volume": 100,\n        "start": 279,\n        "end": 280.2756462585034\n    },\n    {\n        "id": "power_time",\n        "url": "dpl_power_time",\n        "loop": false,\n        "volume": 85,\n        "start": 282,\n        "end": 282.8576870748299\n    },\n    {\n        "id": "run_out_of_time",\n        "url": "dpl_time_warning",\n        "loop": false,\n        "volume": 100,\n        "start": 351,\n        "end": 361.9351473922903\n    },\n    {\n        "id": "times_up",\n        "url": "dpl_times_up",\n        "loop": false,\n        "start": 363,\n        "end": 366.64408163265307\n    },\n    {\n        "id": "last_match_sound",\n        "url": "dpl_last_match_sound",\n        "loop": false,\n        "volume": 100,\n        "start": 124,\n        "end": 125.02022675736961\n    },\n    {\n        "id": "game_bg_music",\n        "url": "dpl_music",\n        "loop": true,\n        "volume": 50,\n        "start": 205,\n        "end": 236.50802721088436\n    },\n    {\n        "id": "menu_bg_music",\n        "url": "dpl_menu_music",\n        "loop": true,\n        "volume": 70,\n        "start": 173,\n        "end": 201.18757369614514\n    },\n    {\n        "id": "music_blitz_a",\n        "url": "dpl_music_blitz_a",\n        "loop": true,\n        "volume": 60,\n        "start": 238,\n        "end": 250.7695238095238\n    },\n    {\n        "id": "music_blitz_b",\n        "url": "dpl_music_blitz_b",\n        "loop": true,\n        "volume": 60,\n        "start": 252,\n        "end": 275.3578231292517\n    }\n]'
}), define("audiosprites", ["text!audiosprites.json"], function (t) {
    return JSON.parse(t)
}), define("artassets", [], function () {
    var t = ["mainmenu.json", "howtoplay.json", "background.json", "text.json", "spritesheet1.json", "spritesheet2.json", "crosssell.json"];
    return t
}), define("crosssell", ["text!crosssell.json"], function (t) {
    return JSON.parse(t)
}), define("gameconfig", ["text!gameconfig.json"], function (t) {
    return JSON.parse(t)
}), require.config({
    waitSeconds: 0,
    paths: {
        text: "dependencies/bower_components/requirejs-text/text",
        astar: "dependencies/astar/dist/astar-concat",
        pixi: "dependencies/bower_components/pixi/bin/pixi.dev",
        absolute: "dependencies/absolute/absolute",
        absoluteaudio: "dependencies/absoluteaudio/absoluteaudio",
        linkengine: "dependencies/linkengine/linkengine",
        "state-machine": "dependencies/bower_components/javascript-state-machine/state-machine",
        tween: "dependencies/bower_components/tweenjs/src/Tween",
        hammer: "dependencies/bower_components/hammerjs/dist/hammer",
        fpsmeter: "dependencies/bower_components/fpsmeter/dist/fpsmeter"
    },
    shim: {
        pixi: {
            exports: "PIXI"
        },
        astar: {
            exports: "AStar"
        },
        statemachine: {
            exports: "StateMachine"
        },
        tween: {
            exports: "TWEEN"
        },
        hammer: {
            exports: "Hammer"
        },
        fpsmeter: {
            exports: "FPSMeter"
        }
    }
}), require(["version", "absolute", "linkengine", "levelconfig", "layout", "audiosprites", "artassets", "crosssell", "gameconfig"], function (t, e, i, n, o, r, s, a, h) {
    for (var l, u = !1, c = !1, d = {}, p = /\+/g, f = /([^&=]+)=?([^&]*)/g, m = function (t) {
            return decodeURIComponent(t.replace(p, " "))
        }, g = window.location.search.substring(1); l = f.exec(g);) d[m(l[1])] = m(l[2]);
    u = d.debug && "true" === d.debug, c = "undefined" == typeof d.portrait ? !0 : "true" === d.portrait, e.Debug.enabled = u, e.Debug.log('Starting "' + t.name() + '"' + " " + t.id() + " " + t.version()), e.ScreenMetrics.refresh(), e.ScreenMetrics.log(), e.Platform.artPathPrefix = "spritesheets", e.Platform.soundPathPrefix = "sound";
    var v = !1,
        y = function () {
            var l = new i.LinkGame({
                container: "container",
                width: 1536 * e.ScreenMetrics.getResScale(),
                height: 2008 * e.ScreenMetrics.getResScale(),
                levelConfig: n,
                layout: o,
                gameId: t.id(),
                gameVersion: t.version(),
                crosssell: a,
                config: h
            });
            l.load({
                audioAssets: r,
                artAssets: s
            }, function (t) {
                e.Debug.log(100 * t + "% loaded")
            }, function () {
                e.Debug.log("load complete"), l.start()
            })
        };
    if ("undefined" != typeof cordova) {
        var b = function () {
            document.addEventListener("pause", function () {
                e.MusicManager.stopMusic()
            }, !1), document.addEventListener("backbutton", function () {
                navigator.app.exitApp()
            }, !1), y()
        };
        document.addEventListener("deviceready", b, !1)
    } else c || e.ScreenMetrics.isPortrait() ? y() : window.addEventListener("resize", function x() {
        e.ScreenMetrics.refresh(), e.ScreenMetrics.isPortrait() && !v && (window.removeEventListener("resize", x), v = !0, y())
    })
}), define("main", function () {});

/*
* GAME API
*/
function adRequest(params) {
console.log(params)
    if (typeof GameAPI === 'object' && GameAPI !== null)
    {
        GameAPI.loadAPI(function(API) {
            API.GameBreak.request(fnPause,fnResume);
        });
    }
}
function fnPause()
{
	console.log(params)
    console.log('Pause Game')
}
function fnResume()
{
    console.log('resume game')
}
