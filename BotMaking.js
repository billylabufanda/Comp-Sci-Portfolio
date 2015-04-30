! function a(b, c, d) {
    function e(g, h) {
        if(!c[g]) {
            if(!b[g]) {
                var i = "function" == typeof require && require;
                if(!h && i) return i(g, !0);
                if(f) return f(g, !0);
                throw new Error("Cannot find module '" + g + "'")
            }
            var j = c[g] = {
                exports: {}
            };
            b[g][0].call(j.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, j, j.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for(var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
1: [
    function(a, b, c) {
        ! function(a) {
            "object" == typeof c ? b.exports = a() : "function" == typeof window.define && window.define.amd ? window.define([], a) : window.BezierEasing = a()
        }(function() {
            function a(a, b, j, k) {
                function l(a, b) {
                    return 1 - 3 * b + 3 * a
                }

                function m(a, b) {
                    return 3 * b - 6 * a
                }

                function n(a) {
                    return 3 * a
                }

                function o(a, b, c) {
                    return((l(b, c) * a + m(b, c)) * a + n(b)) * a
                }

                function p(a, b, c) {
                    return 3 * l(b, c) * a * a + 2 * m(b, c) * a + n(b)
                }

                function q(b, d) {
                    for(var e = 0; c > e; ++e) {
                        var f = p(d, a, j);
                        if(0 === f) return d;
                        var g = o(d, a, j) - b;
                        d -= g / f
                    }
                    return d
                }

                function r() {
                    for(var b = 0; g > b; ++b) w[b] = o(b * h, a, j)
                }

                function s(b, c, d) {
                    var g, h, i = 0;
                    do h = c + (d - c) / 2, g = o(h, a, j) - b, g > 0 ? d = h : c = h; while (Math.abs(g) > e && ++i < f);
                    return h
                }

                function t(b) {
                    for(var c = 0, e = 1, f = g - 1; e != f && w[e] <= b; ++e) c += h;
                    --e;
                    var i = (b - w[e]) / (w[e + 1] - w[e]),
                        k = c + i * h,
                        l = p(k, a, j);
                    return l >= d ? q(b, k) : 0 == l ? k : s(b, c, c + h)
                }

                function u() {
                    x = !0, (a != b || j != k) && r()
                }
                if(4 !== arguments.length) throw new Error("BezierEasing requires 4 arguments.");
                for(var v = 0; 4 > v; ++v)
                    if("number" != typeof arguments[v] || isNaN(arguments[v]) || !isFinite(arguments[v])) throw new Error("BezierEasing arguments should be integers.");
                if(0 > a || a > 1 || 0 > j || j > 1) throw new Error("BezierEasing x values must be in [0, 1] range.");
                var w = i ? new Float32Array(g) : new Array(g),
                    x = !1,
                    y = function(c) {
                        return x || u(), a === b && j === k ? c : 0 === c ? 0 : 1 === c ? 1 : o(t(c), b, k)
                    }, z = "BezierEasing(" + [a, b, j, k] + ")";
                return y.toString = function() {
                    return z
                }, y
            }
            var b = this,
                c = 4,
                d = .001,
                e = 1e-7,
                f = 10,
                g = 11,
                h = 1 / (g - 1),
                i = "Float32Array" in b;
            return a.css = {
                ease: a(.25, .1, .25, 1),
                linear: a(0, 0, 1, 1),
                "ease-in": a(.42, 0, 1, 1),
                "ease-out": a(0, 0, .58, 1),
                "ease-in-out": a(.42, 0, .58, 1)
            }, a
        })
    }, {}
],
2: [
    function(a, b) {
        function c() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function d(a) {
            return "function" == typeof a
        }

        function e(a) {
            return "number" == typeof a
        }

        function f(a) {
            return "object" == typeof a && null !== a
        }

        function g(a) {
            return void 0 === a
        }
        b.exports = c, c.EventEmitter = c, c.prototype._events = void 0, c.prototype._maxListeners = void 0, c.defaultMaxListeners = 10, c.prototype.setMaxListeners = function(a) {
            if(!e(a) || 0 > a || isNaN(a)) throw TypeError("n must be a positive number");
            return this._maxListeners = a, this
        }, c.prototype.emit = function(a) {
            var b, c, e, h, i, j;
            if(this._events || (this._events = {}), "error" === a && (!this._events.error || f(this._events.error) && !this._events.error.length)) {
                if(b = arguments[1], b instanceof Error) throw b;
                throw TypeError('Uncaught, unspecified "error" event.')
            }
            if(c = this._events[a], g(c)) return !1;
            if(d(c)) switch(arguments.length) {
                case 1:
                    c.call(this);
                    break;
                case 2:
                    c.call(this, arguments[1]);
                    break;
                case 3:
                    c.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    for(e = arguments.length, h = new Array(e - 1), i = 1; e > i; i++) h[i - 1] = arguments[i];
                    c.apply(this, h)
            } else if(f(c)) {
                for(e = arguments.length, h = new Array(e - 1), i = 1; e > i; i++) h[i - 1] = arguments[i];
                for(j = c.slice(), e = j.length, i = 0; e > i; i++) j[i].apply(this, h)
            }
            return !0
        }, c.prototype.addListener = function(a, b) {
            var e;
            if(!d(b)) throw TypeError("listener must be a function");
            if(this._events || (this._events = {}), this._events.newListener && this.emit("newListener", a, d(b.listener) ? b.listener : b), this._events[a] ? f(this._events[a]) ? this._events[a].push(b) : this._events[a] = [this._events[a], b] : this._events[a] = b, f(this._events[a]) && !this._events[a].warned) {
                var e;
                e = g(this._maxListeners) ? c.defaultMaxListeners : this._maxListeners, e && e > 0 && this._events[a].length > e && (this._events[a].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[a].length), "function" == typeof console.trace && console.trace())
            }
            return this
        }, c.prototype.on = c.prototype.addListener, c.prototype.once = function(a, b) {
            function c() {
                this.removeListener(a, c), e || (e = !0, b.apply(this, arguments))
            }
            if(!d(b)) throw TypeError("listener must be a function");
            var e = !1;
            return c.listener = b, this.on(a, c), this
        }, c.prototype.removeListener = function(a, b) {
            var c, e, g, h;
            if(!d(b)) throw TypeError("listener must be a function");
            if(!this._events || !this._events[a]) return this;
            if(c = this._events[a], g = c.length, e = -1, c === b || d(c.listener) && c.listener === b) delete this._events[a], this._events.removeListener && this.emit("removeListener", a, b);
            else if(f(c)) {
                for(h = g; h-- > 0;)
                    if(c[h] === b || c[h].listener && c[h].listener === b) {
                        e = h;
                        break
                    }
                if(0 > e) return this;
                1 === c.length ? (c.length = 0, delete this._events[a]) : c.splice(e, 1), this._events.removeListener && this.emit("removeListener", a, b)
            }
            return this
        }, c.prototype.removeAllListeners = function(a) {
            var b, c;
            if(!this._events) return this;
            if(!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[a] && delete this._events[a], this;
            if(0 === arguments.length) {
                for(b in this._events) "removeListener" !== b && this.removeAllListeners(b);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if(c = this._events[a], d(c)) this.removeListener(a, c);
            else
                for(; c.length;) this.removeListener(a, c[c.length - 1]);
            return delete this._events[a], this
        }, c.prototype.listeners = function(a) {
            var b;
            return b = this._events && this._events[a] ? d(this._events[a]) ? [this._events[a]] : this._events[a].slice() : []
        }, c.listenerCount = function(a, b) {
            var c;
            return c = a._events && a._events[b] ? d(a._events[b]) ? 1 : a._events[b].length : 0
        }
    }, {}
],
3: [
    function(a, b) {
        function c() {}
        var d = b.exports = {};
        d.nextTick = function() {
            var a = "undefined" != typeof window && window.setImmediate,
                b = "undefined" != typeof window && window.postMessage && window.addEventListener;
            if(a) return function(a) {
                return window.setImmediate(a)
            };
            if(b) {
                var c = [];
                return window.addEventListener("message", function(a) {
                    var b = a.source;
                    if((b === window || null === b) && "process-tick" === a.data && (a.stopPropagation(), c.length > 0)) {
                        var d = c.shift();
                        d()
                    }
                }, !0),
                function(a) {
                    c.push(a), window.postMessage("process-tick", "*")
                }
            }
            return function(a) {
                setTimeout(a, 0)
            }
        }(), d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.binding = function() {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function() {
            throw new Error("process.chdir is not supported")
        }
    }, {}
],
4: [
    function(a, b, c) {
        (function(a) {
            ! function(d) {
                function e(a) {
                    throw RangeError(H[a])
                }

                function f(a, b) {
                    for(var c = a.length; c--;) a[c] = b(a[c]);
                    return a
                }

                function g(a, b) {
                    return f(a.split(G), b).join(".")
                }

                function h(a) {
                    for(var b, c, d = [], e = 0, f = a.length; f > e;) b = a.charCodeAt(e++), b >= 55296 && 56319 >= b && f > e ? (c = a.charCodeAt(e++), 56320 == (64512 & c) ? d.push(((1023 & b) << 10) + (1023 & c) + 65536) : (d.push(b), e--)) : d.push(b);
                    return d
                }

                function i(a) {
                    return f(a, function(a) {
                        var b = "";
                        return a > 65535 && (a -= 65536, b += K(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), b += K(a)
                    }).join("")
                }

                function j(a) {
                    return 10 > a - 48 ? a - 22 : 26 > a - 65 ? a - 65 : 26 > a - 97 ? a - 97 : w
                }

                function k(a, b) {
                    return a + 22 + 75 * (26 > a) - ((0 != b) << 5)
                }

                function l(a, b, c) {
                    var d = 0;
                    for(a = c ? J(a / A) : a >> 1, a += J(a / b); a > I * y >> 1; d += w) a = J(a / I);
                    return J(d + (I + 1) * a / (a + z))
                }

                function m(a) {
                    var b, c, d, f, g, h, k, m, n, o, p = [],
                        q = a.length,
                        r = 0,
                        s = C,
                        t = B;
                    for(c = a.lastIndexOf(D), 0 > c && (c = 0), d = 0; c > d; ++d) a.charCodeAt(d) >= 128 && e("not-basic"), p.push(a.charCodeAt(d));
                    for(f = c > 0 ? c + 1 : 0; q > f;) {
                        for(g = r, h = 1, k = w; f >= q && e("invalid-input"), m = j(a.charCodeAt(f++)), (m >= w || m > J((v - r) / h)) && e("overflow"), r += m * h, n = t >= k ? x : k >= t + y ? y : k - t, !(n > m); k += w) o = w - n, h > J(v / o) && e("overflow"), h *= o;
                        b = p.length + 1, t = l(r - g, b, 0 == g), J(r / b) > v - s && e("overflow"), s += J(r / b), r %= b, p.splice(r++, 0, s)
                    }
                    return i(p)
                }

                function n(a) {
                    var b, c, d, f, g, i, j, m, n, o, p, q, r, s, t, u = [];
                    for(a = h(a), q = a.length, b = C, c = 0, g = B, i = 0; q > i; ++i) p = a[i], 128 > p && u.push(K(p));
                    for(d = f = u.length, f && u.push(D); q > d;) {
                        for(j = v, i = 0; q > i; ++i) p = a[i], p >= b && j > p && (j = p);
                        for(r = d + 1, j - b > J((v - c) / r) && e("overflow"), c += (j - b) * r, b = j, i = 0; q > i; ++i)
                            if(p = a[i], b > p && ++c > v && e("overflow"), p == b) {
                                for(m = c, n = w; o = g >= n ? x : n >= g + y ? y : n - g, !(o > m); n += w) t = m - o, s = w - o, u.push(K(k(o + t % s, 0))), m = J(t / s);
                                u.push(K(k(m, 0))), g = l(c, r, d == f), c = 0, ++d
                            }++c, ++b
                    }
                    return u.join("")
                }

                function o(a) {
                    return g(a, function(a) {
                        return E.test(a) ? m(a.slice(4).toLowerCase()) : a
                    })
                }

                function p(a) {
                    return g(a, function(a) {
                        return F.test(a) ? "xn--" + n(a) : a
                    })
                }
                var q = "object" == typeof c && c,
                    r = "object" == typeof b && b && b.exports == q && b,
                    s = "object" == typeof a && a;
                (s.global === s || s.window === s) && (d = s);
                var t, u, v = 2147483647,
                    w = 36,
                    x = 1,
                    y = 26,
                    z = 38,
                    A = 700,
                    B = 72,
                    C = 128,
                    D = "-",
                    E = /^xn--/,
                    F = /[^ -~]/,
                    G = /\x2E|\u3002|\uFF0E|\uFF61/g,
                    H = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    }, I = w - x,
                    J = Math.floor,
                    K = String.fromCharCode;
                if(t = {
                    version: "1.2.4",
                    ucs2: {
                        decode: h,
                        encode: i
                    },
                    decode: m,
                    encode: n,
                    toASCII: p,
                    toUnicode: o
                }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
                    return t
                });
                else if(q && !q.nodeType)
                    if(r) r.exports = t;
                    else
                        for(u in t) t.hasOwnProperty(u) && (q[u] = t[u]);
                    else d.punycode = t
            }(this)
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}
],
5: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }
        b.exports = function(a, b, e, f) {
            b = b || "&", e = e || "=";
            var g = {};
            if("string" != typeof a || 0 === a.length) return g;
            var h = /\+/g;
            a = a.split(b);
            var i = 1e3;
            f && "number" == typeof f.maxKeys && (i = f.maxKeys);
            var j = a.length;
            i > 0 && j > i && (j = i);
            for(var k = 0; j > k; ++k) {
                var l, m, n, o, p = a[k].replace(h, "%20"),
                    q = p.indexOf(e);
                q >= 0 ? (l = p.substr(0, q), m = p.substr(q + 1)) : (l = p, m = ""), n = decodeURIComponent(l), o = decodeURIComponent(m), c(g, n) ? d(g[n]) ? g[n].push(o) : g[n] = [g[n], o] : g[n] = o
            }
            return g
        };
        var d = Array.isArray || function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }
    }, {}
],
6: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            if(a.map) return a.map(b);
            for(var c = [], d = 0; d < a.length; d++) c.push(b(a[d], d));
            return c
        }
        var d = function(a) {
            switch(typeof a) {
                case "string":
                    return a;
                case "boolean":
                    return a ? "true" : "false";
                case "number":
                    return isFinite(a) ? a : "";
                default:
                    return ""
            }
        };
        b.exports = function(a, b, g, h) {
            return b = b || "&", g = g || "=", null === a && (a = void 0), "object" == typeof a ? c(f(a), function(f) {
                var h = encodeURIComponent(d(f)) + g;
                return e(a[f]) ? c(a[f], function(a) {
                    return h + encodeURIComponent(d(a))
                }).join(b) : h + encodeURIComponent(d(a[f]))
            }).join(b) : h ? encodeURIComponent(d(h)) + g + encodeURIComponent(d(a)) : ""
        };
        var e = Array.isArray || function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }, f = Object.keys || function(a) {
                var b = [];
                for(var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
                return b
            }
    }, {}
],
7: [
    function(a, b, c) {
        "use strict";
        c.decode = c.parse = a("./decode"), c.encode = c.stringify = a("./encode")
    }, {
        "./decode": 5,
        "./encode": 6
    }
],
8: [
    function(a, b, c) {
        function d() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }

        function e(a, b, c) {
            if(a && j(a) && a instanceof d) return a;
            var e = new d;
            return e.parse(a, b, c), e
        }

        function f(a) {
            return i(a) && (a = e(a)), a instanceof d ? a.format() : d.prototype.format.call(a)
        }

        function g(a, b) {
            return e(a, !1, !0).resolve(b)
        }

        function h(a, b) {
            return a ? e(a, !1, !0).resolveObject(b) : b
        }

        function i(a) {
            return "string" == typeof a
        }

        function j(a) {
            return "object" == typeof a && null !== a
        }

        function k(a) {
            return null === a
        }

        function l(a) {
            return null == a
        }
        var m = a("punycode");
        c.parse = e, c.resolve = g, c.resolveObject = h, c.format = f, c.Url = d;
        var n = /^([a-z0-9.+-]+:)/i,
            o = /:[0-9]*$/,
            p = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
            q = ["{", "}", "|", "\\", "^", "`"].concat(p),
            r = ["'"].concat(q),
            s = ["%", "/", "?", ";", "#"].concat(r),
            t = ["/", "?", "#"],
            u = 255,
            v = /^[a-z0-9A-Z_-]{0,63}$/,
            w = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
            x = {
                javascript: !0,
                "javascript:": !0
            }, y = {
                javascript: !0,
                "javascript:": !0
            }, z = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            }, A = a("querystring");
        d.prototype.parse = function(a, b, c) {
            if(!i(a)) throw new TypeError("Parameter 'url' must be a string, not " + typeof a);
            var d = a;
            d = d.trim();
            var e = n.exec(d);
            if(e) {
                e = e[0];
                var f = e.toLowerCase();
                this.protocol = f, d = d.substr(e.length)
            }
            if(c || e || d.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var g = "//" === d.substr(0, 2);
                !g || e && y[e] || (d = d.substr(2), this.slashes = !0)
            }
            if(!y[e] && (g || e && !z[e])) {
                for(var h = -1, j = 0; j < t.length; j++) {
                    var k = d.indexOf(t[j]); - 1 !== k && (-1 === h || h > k) && (h = k)
                }
                var l, o;
                o = -1 === h ? d.lastIndexOf("@") : d.lastIndexOf("@", h), -1 !== o && (l = d.slice(0, o), d = d.slice(o + 1), this.auth = decodeURIComponent(l)), h = -1;
                for(var j = 0; j < s.length; j++) {
                    var k = d.indexOf(s[j]); - 1 !== k && (-1 === h || h > k) && (h = k)
                } - 1 === h && (h = d.length), this.host = d.slice(0, h), d = d.slice(h), this.parseHost(), this.hostname = this.hostname || "";
                var p = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if(!p)
                    for(var q = this.hostname.split(/\./), j = 0, B = q.length; B > j; j++) {
                        var C = q[j];
                        if(C && !C.match(v)) {
                            for(var D = "", E = 0, F = C.length; F > E; E++) D += C.charCodeAt(E) > 127 ? "x" : C[E];
                            if(!D.match(v)) {
                                var G = q.slice(0, j),
                                    H = q.slice(j + 1),
                                    I = C.match(w);
                                I && (G.push(I[1]), H.unshift(I[2])), H.length && (d = "/" + H.join(".") + d), this.hostname = G.join(".");
                                break
                            }
                        }
                    }
                if(this.hostname = this.hostname.length > u ? "" : this.hostname.toLowerCase(), !p) {
                    for(var J = this.hostname.split("."), K = [], j = 0; j < J.length; ++j) {
                        var L = J[j];
                        K.push(L.match(/[^A-Za-z0-9_-]/) ? "xn--" + m.encode(L) : L)
                    }
                    this.hostname = K.join(".")
                }
                var M = this.port ? ":" + this.port : "",
                    N = this.hostname || "";
                this.host = N + M, this.href += this.host, p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== d[0] && (d = "/" + d))
            }
            if(!x[f])
                for(var j = 0, B = r.length; B > j; j++) {
                    var O = r[j],
                        P = encodeURIComponent(O);
                    P === O && (P = escape(O)), d = d.split(O).join(P)
                }
            var Q = d.indexOf("#"); - 1 !== Q && (this.hash = d.substr(Q), d = d.slice(0, Q));
            var R = d.indexOf("?");
            if(-1 !== R ? (this.search = d.substr(R), this.query = d.substr(R + 1), b && (this.query = A.parse(this.query)), d = d.slice(0, R)) : b && (this.search = "", this.query = {}), d && (this.pathname = d), z[f] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                var M = this.pathname || "",
                    L = this.search || "";
                this.path = M + L
            }
            return this.href = this.format(), this
        }, d.prototype.format = function() {
            var a = this.auth || "";
            a && (a = encodeURIComponent(a), a = a.replace(/%3A/i, ":"), a += "@");
            var b = this.protocol || "",
                c = this.pathname || "",
                d = this.hash || "",
                e = !1,
                f = "";
            this.host ? e = a + this.host : this.hostname && (e = a + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (e += ":" + this.port)), this.query && j(this.query) && Object.keys(this.query).length && (f = A.stringify(this.query));
            var g = this.search || f && "?" + f || "";
            return b && ":" !== b.substr(-1) && (b += ":"), this.slashes || (!b || z[b]) && e !== !1 ? (e = "//" + (e || ""), c && "/" !== c.charAt(0) && (c = "/" + c)) : e || (e = ""), d && "#" !== d.charAt(0) && (d = "#" + d), g && "?" !== g.charAt(0) && (g = "?" + g), c = c.replace(/[?#]/g, function(a) {
                return encodeURIComponent(a)
            }), g = g.replace("#", "%23"), b + e + c + g + d
        }, d.prototype.resolve = function(a) {
            return this.resolveObject(e(a, !1, !0)).format()
        }, d.prototype.resolveObject = function(a) {
            if(i(a)) {
                var b = new d;
                b.parse(a, !1, !0), a = b
            }
            var c = new d;
            if(Object.keys(this).forEach(function(a) {
                c[a] = this[a]
            }, this), c.hash = a.hash, "" === a.href) return c.href = c.format(), c;
            if(a.slashes && !a.protocol) return Object.keys(a).forEach(function(b) {
                "protocol" !== b && (c[b] = a[b])
            }), z[c.protocol] && c.hostname && !c.pathname && (c.path = c.pathname = "/"), c.href = c.format(), c;
            if(a.protocol && a.protocol !== c.protocol) {
                if(!z[a.protocol]) return Object.keys(a).forEach(function(b) {
                    c[b] = a[b]
                }), c.href = c.format(), c;
                if(c.protocol = a.protocol, a.host || y[a.protocol]) c.pathname = a.pathname;
                else {
                    for(var e = (a.pathname || "").split("/"); e.length && !(a.host = e.shift()););
                    a.host || (a.host = ""), a.hostname || (a.hostname = ""), "" !== e[0] && e.unshift(""), e.length < 2 && e.unshift(""), c.pathname = e.join("/")
                } if(c.search = a.search, c.query = a.query, c.host = a.host || "", c.auth = a.auth, c.hostname = a.hostname || a.host, c.port = a.port, c.pathname || c.search) {
                    var f = c.pathname || "",
                        g = c.search || "";
                    c.path = f + g
                }
                return c.slashes = c.slashes || a.slashes, c.href = c.format(), c
            }
            var h = c.pathname && "/" === c.pathname.charAt(0),
                j = a.host || a.pathname && "/" === a.pathname.charAt(0),
                m = j || h || c.host && a.pathname,
                n = m,
                o = c.pathname && c.pathname.split("/") || [],
                e = a.pathname && a.pathname.split("/") || [],
                p = c.protocol && !z[c.protocol];
            if(p && (c.hostname = "", c.port = null, c.host && ("" === o[0] ? o[0] = c.host : o.unshift(c.host)), c.host = "", a.protocol && (a.hostname = null, a.port = null, a.host && ("" === e[0] ? e[0] = a.host : e.unshift(a.host)), a.host = null), m = m && ("" === e[0] || "" === o[0])), j) c.host = a.host || "" === a.host ? a.host : c.host, c.hostname = a.hostname || "" === a.hostname ? a.hostname : c.hostname, c.search = a.search, c.query = a.query, o = e;
            else if(e.length) o || (o = []), o.pop(), o = o.concat(e), c.search = a.search, c.query = a.query;
            else if(!l(a.search)) {
                if(p) {
                    c.hostname = c.host = o.shift();
                    var q = c.host && c.host.indexOf("@") > 0 ? c.host.split("@") : !1;
                    q && (c.auth = q.shift(), c.host = c.hostname = q.shift())
                }
                return c.search = a.search, c.query = a.query, k(c.pathname) && k(c.search) || (c.path = (c.pathname ? c.pathname : "") + (c.search ? c.search : "")), c.href = c.format(), c
            }
            if(!o.length) return c.pathname = null, c.path = c.search ? "/" + c.search : null, c.href = c.format(), c;
            for(var r = o.slice(-1)[0], s = (c.host || a.host) && ("." === r || ".." === r) || "" === r, t = 0, u = o.length; u >= 0; u--) r = o[u], "." == r ? o.splice(u, 1) : ".." === r ? (o.splice(u, 1), t++) : t && (o.splice(u, 1), t--);
            if(!m && !n)
                for(; t--; t) o.unshift("..");
            !m || "" === o[0] || o[0] && "/" === o[0].charAt(0) || o.unshift(""), s && "/" !== o.join("/").substr(-1) && o.push("");
            var v = "" === o[0] || o[0] && "/" === o[0].charAt(0);
            if(p) {
                c.hostname = c.host = v ? "" : o.length ? o.shift() : "";
                var q = c.host && c.host.indexOf("@") > 0 ? c.host.split("@") : !1;
                q && (c.auth = q.shift(), c.host = c.hostname = q.shift())
            }
            return m = m || c.host && o.length, m && !v && o.unshift(""), o.length ? c.pathname = o.join("/") : (c.pathname = null, c.path = null), k(c.pathname) && k(c.search) || (c.path = (c.pathname ? c.pathname : "") + (c.search ? c.search : "")), c.auth = a.auth || c.auth, c.slashes = c.slashes || a.slashes, c.href = c.format(), c
        }, d.prototype.parseHost = function() {
            var a = this.host,
                b = o.exec(a);
            b && (b = b[0], ":" !== b && (this.port = b.substr(1)), a = a.substr(0, a.length - b.length)), a && (this.hostname = a)
        }
    }, {
        punycode: 4,
        querystring: 7
    }
],
9: [
    function(a, b) {
        (function(a) {
            (function() {
                var c, d, e;
                "undefined" != typeof performance && null !== performance && performance.now ? b.exports = function() {
                    return performance.now()
                } : "undefined" != typeof a && null !== a && a.hrtime ? (b.exports = function() {
                    return(c() - e) / 1e6
                }, d = a.hrtime, c = function() {
                    var a;
                    return a = d(), 1e9 * a[0] + a[1]
                }, e = c()) : Date.now ? (b.exports = function() {
                    return Date.now() - e
                }, e = Date.now()) : (b.exports = function() {
                    return(new Date).getTime() - e
                }, e = (new Date).getTime())
            }).call(this)
        }).call(this, a("JkpR2F"))
    }, {
        JkpR2F: 3
    }
],
10: [
    function(a, b, c) {
        function d(a, b, c) {
            function d(c) {
                for(var d = new Array(a * b), e = Math.pow(2, c), g = 1 / e, h = 0, i = 0; b > i; ++i)
                    for(var j = Math.floor(i / e) * e, l = (j + e) % b, m = (i - j) * g, n = 0; a > n; ++n) {
                        var o = Math.floor(n / e) * e,
                            p = (o + e) % a,
                            q = (n - o) * g,
                            r = f(k[j * a + o], k[l * a + o], m),
                            s = f(k[j * a + p], k[l * a + p], m);
                        d[h] = f(r, s, q), h += 1
                    }
                return d
            }
            c = c || {};
            var g, h = c.octaveCount || 4,
                i = c.amplitude || .1,
                j = c.persistence || .2,
                k = e(a, b),
                l = new Array(h);
            for(g = 0; h > g; ++g) l[g] = d(g);
            var m = new Array(a * b),
                n = 0;
            for(g = h - 1; g >= 0; --g) {
                i *= j, n += i;
                for(var o = 0; o < m.length; ++o) m[o] = m[o] || 0, m[o] += l[g][o] * i
            }
            for(g = 0; g < m.length; ++g) m[g] /= n;
            return m
        }

        function e(a, b) {
            for(var c = new Array(a * b), d = 0; d < c.length; ++d) c[d] = Math.random();
            return c
        }

        function f(a, b, c) {
            return a * (1 - c) + c * b
        }
        c.generatePerlinNoise = d, c.generateWhiteNoise = e
    }, {}
],
11: [
    function(a, b, c) {
        (function() {
            var a = this,
                d = d || {};
            d.WEBGL_RENDERER = 0, d.CANVAS_RENDERER = 1, d.VERSION = "v1.6.1", d.blendModes = {
                NORMAL: 0,
                ADD: 1,
                MULTIPLY: 2,
                SCREEN: 3,
                OVERLAY: 4,
                DARKEN: 5,
                LIGHTEN: 6,
                COLOR_DODGE: 7,
                COLOR_BURN: 8,
                HARD_LIGHT: 9,
                SOFT_LIGHT: 10,
                DIFFERENCE: 11,
                EXCLUSION: 12,
                HUE: 13,
                SATURATION: 14,
                COLOR: 15,
                LUMINOSITY: 16
            }, d.scaleModes = {
                DEFAULT: 0,
                LINEAR: 0,
                NEAREST: 1
            }, d._UID = 0, "undefined" != typeof Float32Array ? (d.Float32Array = Float32Array, d.Uint16Array = Uint16Array) : (d.Float32Array = Array, d.Uint16Array = Array), d.INTERACTION_FREQUENCY = 30, d.AUTO_PREVENT_DEFAULT = !0, d.RAD_TO_DEG = 180 / Math.PI, d.DEG_TO_RAD = Math.PI / 180, d.dontSayHello = !1, d.sayHello = function(a) {
                if(!d.dontSayHello) {
                    if(navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                        var b = ["%c %c %c Pixi.js " + d.VERSION + " - " + a + "  %c  %c  http://www.pixijs.com/  %c %c â™¥%câ™¥%câ™¥ ", "background: #ff66a5", "background: #ff66a5", "color: #ff66a5; background: #030307;", "background: #ff66a5", "background: #ffc3dc", "background: #ff66a5", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff"];
                        console.log.apply(console, b)
                    } else window.console && console.log("Pixi.js " + d.VERSION + " - http://www.pixijs.com/");
                    d.dontSayHello = !0
                }
            }, d.Point = function(a, b) {
                this.x = a || 0, this.y = b || 0
            }, d.Point.prototype.clone = function() {
                return new d.Point(this.x, this.y)
            }, d.Point.prototype.set = function(a, b) {
                this.x = a || 0, this.y = b || (0 !== b ? this.x : 0)
            }, d.Point.prototype.constructor = d.Point, d.Rectangle = function(a, b, c, d) {
                this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0
            }, d.Rectangle.prototype.clone = function() {
                return new d.Rectangle(this.x, this.y, this.width, this.height)
            }, d.Rectangle.prototype.contains = function(a, b) {
                if(this.width <= 0 || this.height <= 0) return !1;
                var c = this.x;
                if(a >= c && a <= c + this.width) {
                    var d = this.y;
                    if(b >= d && b <= d + this.height) return !0
                }
                return !1
            }, d.Rectangle.prototype.constructor = d.Rectangle, d.EmptyRectangle = new d.Rectangle(0, 0, 0, 0), d.Polygon = function(a) {
                if(a instanceof Array || (a = Array.prototype.slice.call(arguments)), "number" == typeof a[0]) {
                    for(var b = [], c = 0, e = a.length; e > c; c += 2) b.push(new d.Point(a[c], a[c + 1]));
                    a = b
                }
                this.points = a
            }, d.Polygon.prototype.clone = function() {
                for(var a = [], b = 0; b < this.points.length; b++) a.push(this.points[b].clone());
                return new d.Polygon(a)
            }, d.Polygon.prototype.contains = function(a, b) {
                for(var c = !1, d = 0, e = this.points.length - 1; d < this.points.length; e = d++) {
                    var f = this.points[d].x,
                        g = this.points[d].y,
                        h = this.points[e].x,
                        i = this.points[e].y,
                        j = g > b != i > b && (h - f) * (b - g) / (i - g) + f > a;
                    j && (c = !c)
                }
                return c
            }, d.Polygon.prototype.constructor = d.Polygon, d.Circle = function(a, b, c) {
                this.x = a || 0, this.y = b || 0, this.radius = c || 0
            }, d.Circle.prototype.clone = function() {
                return new d.Circle(this.x, this.y, this.radius)
            }, d.Circle.prototype.contains = function(a, b) {
                if(this.radius <= 0) return !1;
                var c = this.x - a,
                    d = this.y - b,
                    e = this.radius * this.radius;
                return c *= c, d *= d, e >= c + d
            }, d.Circle.prototype.getBounds = function() {
                return new d.Rectangle(this.x - this.radius, this.y - this.radius, this.width, this.height)
            }, d.Circle.prototype.constructor = d.Circle, d.Ellipse = function(a, b, c, d) {
                this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0
            }, d.Ellipse.prototype.clone = function() {
                return new d.Ellipse(this.x, this.y, this.width, this.height)
            }, d.Ellipse.prototype.contains = function(a, b) {
                if(this.width <= 0 || this.height <= 0) return !1;
                var c = (a - this.x) / this.width,
                    d = (b - this.y) / this.height;
                return c *= c, d *= d, 1 >= c + d
            }, d.Ellipse.prototype.getBounds = function() {
                return new d.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height)
            }, d.Ellipse.prototype.constructor = d.Ellipse, d.Matrix = function() {
                this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
            }, d.Matrix.prototype.fromArray = function(a) {
                this.a = a[0], this.b = a[1], this.c = a[3], this.d = a[4], this.tx = a[2], this.ty = a[5]
            }, d.Matrix.prototype.toArray = function(a) {
                this.array || (this.array = new Float32Array(9));
                var b = this.array;
                return a ? (b[0] = this.a, b[1] = this.c, b[2] = 0, b[3] = this.b, b[4] = this.d, b[5] = 0, b[6] = this.tx, b[7] = this.ty, b[8] = 1) : (b[0] = this.a, b[1] = this.b, b[2] = this.tx, b[3] = this.c, b[4] = this.d, b[5] = this.ty, b[6] = 0, b[7] = 0, b[8] = 1), b
            }, d.identityMatrix = new d.Matrix, d.determineMatrixArrayType = function() {
                return "undefined" != typeof Float32Array ? Float32Array : Array
            }, d.Matrix2 = d.determineMatrixArrayType(), d.DisplayObject = function() {
                this.position = new d.Point, this.scale = new d.Point(1, 1), this.pivot = new d.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.hitArea = null, this.buttonMode = !1, this.renderable = !1, this.parent = null, this.stage = null, this.worldAlpha = 1, this._interactive = !1, this.defaultCursor = "pointer", this.worldTransform = new d.Matrix, this.color = [], this.dynamic = !0, this._sr = 0, this._cr = 1, this.filterArea = null, this._bounds = new d.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null, this._cacheAsBitmap = !1, this._cacheIsDirty = !1
            }, d.DisplayObject.prototype.constructor = d.DisplayObject, d.DisplayObject.prototype.setInteractive = function(a) {
                this.interactive = a
            }, Object.defineProperty(d.DisplayObject.prototype, "interactive", {
                get: function() {
                    return this._interactive
                },
                set: function(a) {
                    this._interactive = a, this.stage && (this.stage.dirty = !0)
                }
            }), Object.defineProperty(d.DisplayObject.prototype, "worldVisible", {
                get: function() {
                    var a = this;
                    do {
                        if(!a.visible) return !1;
                        a = a.parent
                    } while (a);
                    return !0
                }
            }), Object.defineProperty(d.DisplayObject.prototype, "mask", {
                get: function() {
                    return this._mask
                },
                set: function(a) {
                    this._mask && (this._mask.isMask = !1), this._mask = a, this._mask && (this._mask.isMask = !0)
                }
            }), Object.defineProperty(d.DisplayObject.prototype, "filters", {
                get: function() {
                    return this._filters
                },
                set: function(a) {
                    if(a) {
                        for(var b = [], c = 0; c < a.length; c++)
                            for(var d = a[c].passes, e = 0; e < d.length; e++) b.push(d[e]);
                        this._filterBlock = {
                            target: this,
                            filterPasses: b
                        }
                    }
                    this._filters = a
                }
            }), Object.defineProperty(d.DisplayObject.prototype, "cacheAsBitmap", {
                get: function() {
                    return this._cacheAsBitmap
                },
                set: function(a) {
                    this._cacheAsBitmap !== a && (a ? this._generateCachedSprite() : this._destroyCachedSprite(), this._cacheAsBitmap = a)
                }
            }), d.DisplayObject.prototype.updateTransform = function() {
                this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation));
                var a = this.parent.worldTransform,
                    b = this.worldTransform,
                    c = this.pivot.x,
                    d = this.pivot.y,
                    e = this._cr * this.scale.x,
                    f = -this._sr * this.scale.y,
                    g = this._sr * this.scale.x,
                    h = this._cr * this.scale.y,
                    i = this.position.x - e * c - d * f,
                    j = this.position.y - h * d - c * g,
                    k = a.a,
                    l = a.b,
                    m = a.c,
                    n = a.d;
                b.a = k * e + l * g, b.b = k * f + l * h, b.tx = k * i + l * j + a.tx, b.c = m * e + n * g, b.d = m * f + n * h, b.ty = m * i + n * j + a.ty, this.worldAlpha = this.alpha * this.parent.worldAlpha
            }, d.DisplayObject.prototype.getBounds = function(a) {
                return a = a, d.EmptyRectangle
            }, d.DisplayObject.prototype.getLocalBounds = function() {
                return this.getBounds(d.identityMatrix)
            }, d.DisplayObject.prototype.setStageReference = function(a) {
                this.stage = a, this._interactive && (this.stage.dirty = !0)
            }, d.DisplayObject.prototype.generateTexture = function(a) {
                var b = this.getLocalBounds(),
                    c = new d.RenderTexture(0 | b.width, 0 | b.height, a);
                return c.render(this, new d.Point(-b.x, -b.y)), c
            }, d.DisplayObject.prototype.updateCache = function() {
                this._generateCachedSprite()
            }, d.DisplayObject.prototype._renderCachedSprite = function(a) {
                this._cachedSprite.worldAlpha = this.worldAlpha, a.gl ? d.Sprite.prototype._renderWebGL.call(this._cachedSprite, a) : d.Sprite.prototype._renderCanvas.call(this._cachedSprite, a)
            }, d.DisplayObject.prototype._generateCachedSprite = function() {
                this._cacheAsBitmap = !1;
                var a = this.getLocalBounds();
                if(this._cachedSprite) this._cachedSprite.texture.resize(0 | a.width, 0 | a.height);
                else {
                    var b = new d.RenderTexture(0 | a.width, 0 | a.height);
                    this._cachedSprite = new d.Sprite(b), this._cachedSprite.worldTransform = this.worldTransform
                }
                var c = this._filters;
                this._filters = null, this._cachedSprite.filters = c, this._cachedSprite.texture.render(this, new d.Point(-a.x, -a.y)), this._cachedSprite.anchor.x = -(a.x / a.width), this._cachedSprite.anchor.y = -(a.y / a.height), this._filters = c, this._cacheAsBitmap = !0
            }, d.DisplayObject.prototype._destroyCachedSprite = function() {
                this._cachedSprite && (this._cachedSprite.texture.destroy(!0), this._cachedSprite = null)
            }, d.DisplayObject.prototype._renderWebGL = function(a) {
                a = a
            }, d.DisplayObject.prototype._renderCanvas = function(a) {
                a = a
            }, Object.defineProperty(d.DisplayObject.prototype, "x", {
                get: function() {
                    return this.position.x
                },
                set: function(a) {
                    this.position.x = a
                }
            }), Object.defineProperty(d.DisplayObject.prototype, "y", {
                get: function() {
                    return this.position.y
                },
                set: function(a) {
                    this.position.y = a
                }
            }), d.DisplayObjectContainer = function() {
                d.DisplayObject.call(this), this.children = []
            }, d.DisplayObjectContainer.prototype = Object.create(d.DisplayObject.prototype), d.DisplayObjectContainer.prototype.constructor = d.DisplayObjectContainer, Object.defineProperty(d.DisplayObjectContainer.prototype, "width", {
                get: function() {
                    return this.scale.x * this.getLocalBounds().width
                },
                set: function(a) {
                    var b = this.getLocalBounds().width;
                    this.scale.x = 0 !== b ? a / (b / this.scale.x) : 1, this._width = a
                }
            }), Object.defineProperty(d.DisplayObjectContainer.prototype, "height", {
                get: function() {
                    return this.scale.y * this.getLocalBounds().height
                },
                set: function(a) {
                    var b = this.getLocalBounds().height;
                    this.scale.y = 0 !== b ? a / (b / this.scale.y) : 1, this._height = a
                }
            }), d.DisplayObjectContainer.prototype.addChild = function(a) {
                return this.addChildAt(a, this.children.length)
            }, d.DisplayObjectContainer.prototype.addChildAt = function(a, b) {
                if(b >= 0 && b <= this.children.length) return a.parent && a.parent.removeChild(a), a.parent = this, this.children.splice(b, 0, a), this.stage && a.setStageReference(this.stage), a;
                throw new Error(a + " The index " + b + " supplied is out of bounds " + this.children.length)
            }, d.DisplayObjectContainer.prototype.swapChildren = function(a, b) {
                if(a !== b) {
                    var c = this.children.indexOf(a),
                        d = this.children.indexOf(b);
                    if(0 > c || 0 > d) throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
                    this.children[c] = b, this.children[d] = a
                }
            }, d.DisplayObjectContainer.prototype.getChildAt = function(a) {
                if(a >= 0 && a < this.children.length) return this.children[a];
                throw new Error("Supplied index does not exist in the child list, or the supplied DisplayObject must be a child of the caller")
            }, d.DisplayObjectContainer.prototype.removeChild = function(a) {
                return this.removeChildAt(this.children.indexOf(a))
            }, d.DisplayObjectContainer.prototype.removeChildAt = function(a) {
                var b = this.getChildAt(a);
                return this.stage && b.removeStageReference(), b.parent = void 0, this.children.splice(a, 1), b
            }, d.DisplayObjectContainer.prototype.removeChildren = function(a, b) {
                var c = a || 0,
                    d = "number" == typeof b ? b : this.children.length,
                    e = d - c;
                if(e > 0 && d >= e) {
                    for(var f = this.children.splice(c, e), g = 0; g < f.length; g++) {
                        var h = f[g];
                        this.stage && h.removeStageReference(), h.parent = void 0
                    }
                    return f
                }
                throw new Error("Range Error, numeric values are outside the acceptable range")
            }, d.DisplayObjectContainer.prototype.updateTransform = function() {
                if(this.visible && (d.DisplayObject.prototype.updateTransform.call(this), !this._cacheAsBitmap))
                    for(var a = 0, b = this.children.length; b > a; a++) this.children[a].updateTransform()
            }, d.DisplayObjectContainer.prototype.getBounds = function(a) {
                if(0 === this.children.length) return d.EmptyRectangle;
                if(a) {
                    var b = this.worldTransform;
                    this.worldTransform = a, this.updateTransform(), this.worldTransform = b
                }
                for(var c, e, f, g = 1 / 0, h = 1 / 0, i = -1 / 0, j = -1 / 0, k = !1, l = 0, m = this.children.length; m > l; l++) {
                    var n = this.children[l];
                    n.visible && (k = !0, c = this.children[l].getBounds(a), g = g < c.x ? g : c.x, h = h < c.y ? h : c.y, e = c.width + c.x, f = c.height + c.y, i = i > e ? i : e, j = j > f ? j : f)
                }
                if(!k) return d.EmptyRectangle;
                var o = this._bounds;
                return o.x = g, o.y = h, o.width = i - g, o.height = j - h, o
            }, d.DisplayObjectContainer.prototype.getLocalBounds = function() {
                var a = this.worldTransform;
                this.worldTransform = d.identityMatrix;
                for(var b = 0, c = this.children.length; c > b; b++) this.children[b].updateTransform();
                var e = this.getBounds();
                return this.worldTransform = a, e
            }, d.DisplayObjectContainer.prototype.setStageReference = function(a) {
                this.stage = a, this._interactive && (this.stage.dirty = !0);
                for(var b = 0, c = this.children.length; c > b; b++) {
                    var d = this.children[b];
                    d.setStageReference(a)
                }
            }, d.DisplayObjectContainer.prototype.removeStageReference = function() {
                for(var a = 0, b = this.children.length; b > a; a++) {
                    var c = this.children[a];
                    c.removeStageReference()
                }
                this._interactive && (this.stage.dirty = !0), this.stage = null
            }, d.DisplayObjectContainer.prototype._renderWebGL = function(a) {
                if(this.visible && !(this.alpha <= 0)) {
                    if(this._cacheAsBitmap) return void this._renderCachedSprite(a);
                    var b, c;
                    if(this._mask || this._filters) {
                        for(this._filters && (a.spriteBatch.flush(), a.filterManager.pushFilter(this._filterBlock)), this._mask && (a.spriteBatch.stop(), a.maskManager.pushMask(this.mask, a), a.spriteBatch.start()), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a);
                        a.spriteBatch.stop(), this._mask && a.maskManager.popMask(this._mask, a), this._filters && a.filterManager.popFilter(), a.spriteBatch.start()
                    } else
                        for(b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a)
                }
            }, d.DisplayObjectContainer.prototype._renderCanvas = function(a) {
                if(this.visible !== !1 && 0 !== this.alpha) {
                    if(this._cacheAsBitmap) return void this._renderCachedSprite(a);
                    this._mask && a.maskManager.pushMask(this._mask, a.context);
                    for(var b = 0, c = this.children.length; c > b; b++) {
                        var d = this.children[b];
                        d._renderCanvas(a)
                    }
                    this._mask && a.maskManager.popMask(a.context)
                }
            }, d.Sprite = function(a) {
                d.DisplayObjectContainer.call(this), this.anchor = new d.Point, this.texture = a, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = d.blendModes.NORMAL, a.baseTexture.hasLoaded ? this.onTextureUpdate() : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)), this.renderable = !0
            }, d.Sprite.prototype = Object.create(d.DisplayObjectContainer.prototype), d.Sprite.prototype.constructor = d.Sprite, Object.defineProperty(d.Sprite.prototype, "width", {
                get: function() {
                    return this.scale.x * this.texture.frame.width
                },
                set: function(a) {
                    this.scale.x = a / this.texture.frame.width, this._width = a
                }
            }), Object.defineProperty(d.Sprite.prototype, "height", {
                get: function() {
                    return this.scale.y * this.texture.frame.height
                },
                set: function(a) {
                    this.scale.y = a / this.texture.frame.height, this._height = a
                }
            }), d.Sprite.prototype.setTexture = function(a) {
                this.texture = a, this.cachedTint = 16777215
            }, d.Sprite.prototype.onTextureUpdate = function() {
                this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height)
            }, d.Sprite.prototype.getBounds = function(a) {
                var b = this.texture.frame.width,
                    c = this.texture.frame.height,
                    d = b * (1 - this.anchor.x),
                    e = b * -this.anchor.x,
                    f = c * (1 - this.anchor.y),
                    g = c * -this.anchor.y,
                    h = a || this.worldTransform,
                    i = h.a,
                    j = h.c,
                    k = h.b,
                    l = h.d,
                    m = h.tx,
                    n = h.ty,
                    o = i * e + k * g + m,
                    p = l * g + j * e + n,
                    q = i * d + k * g + m,
                    r = l * g + j * d + n,
                    s = i * d + k * f + m,
                    t = l * f + j * d + n,
                    u = i * e + k * f + m,
                    v = l * f + j * e + n,
                    w = -1 / 0,
                    x = -1 / 0,
                    y = 1 / 0,
                    z = 1 / 0;
                y = y > o ? o : y, y = y > q ? q : y, y = y > s ? s : y, y = y > u ? u : y, z = z > p ? p : z, z = z > r ? r : z, z = z > t ? t : z, z = z > v ? v : z, w = o > w ? o : w, w = q > w ? q : w, w = s > w ? s : w, w = u > w ? u : w, x = p > x ? p : x, x = r > x ? r : x, x = t > x ? t : x, x = v > x ? v : x;
                var A = this._bounds;
                return A.x = y, A.width = w - y, A.y = z, A.height = x - z, this._currentBounds = A, A
            }, d.Sprite.prototype._renderWebGL = function(a) {
                if(this.visible && !(this.alpha <= 0)) {
                    var b, c;
                    if(this._mask || this._filters) {
                        var d = a.spriteBatch;
                        for(this._filters && (d.flush(), a.filterManager.pushFilter(this._filterBlock)), this._mask && (d.stop(), a.maskManager.pushMask(this.mask, a), d.start()), d.render(this), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a);
                        d.stop(), this._mask && a.maskManager.popMask(this._mask, a), this._filters && a.filterManager.popFilter(), d.start()
                    } else
                        for(a.spriteBatch.render(this), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a)
                }
            }, d.Sprite.prototype._renderCanvas = function(a) {
                if(this.visible !== !1 && 0 !== this.alpha) {
                    if(this.blendMode !== a.currentBlendMode && (a.currentBlendMode = this.blendMode, a.context.globalCompositeOperation = d.blendModesCanvas[a.currentBlendMode]), this._mask && a.maskManager.pushMask(this._mask, a.context), this.texture.valid) {
                        a.context.globalAlpha = this.worldAlpha, a.roundPixels ? a.context.setTransform(this.worldTransform.a, this.worldTransform.c, this.worldTransform.b, this.worldTransform.d, 0 | this.worldTransform.tx, 0 | this.worldTransform.ty) : a.context.setTransform(this.worldTransform.a, this.worldTransform.c, this.worldTransform.b, this.worldTransform.d, this.worldTransform.tx, this.worldTransform.ty), a.smoothProperty && a.scaleMode !== this.texture.baseTexture.scaleMode && (a.scaleMode = this.texture.baseTexture.scaleMode, a.context[a.smoothProperty] = a.scaleMode === d.scaleModes.LINEAR);
                        var b = this.texture.trim ? this.texture.trim.x - this.anchor.x * this.texture.trim.width : this.anchor.x * -this.texture.frame.width,
                            c = this.texture.trim ? this.texture.trim.y - this.anchor.y * this.texture.trim.height : this.anchor.y * -this.texture.frame.height;
                        16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = d.CanvasTinter.getTintedTexture(this, this.tint)), a.context.drawImage(this.tintedTexture, 0, 0, this.texture.crop.width, this.texture.crop.height, b, c, this.texture.crop.width, this.texture.crop.height)) : a.context.drawImage(this.texture.baseTexture.source, this.texture.crop.x, this.texture.crop.y, this.texture.crop.width, this.texture.crop.height, b, c, this.texture.crop.width, this.texture.crop.height)
                    }
                    for(var e = 0, f = this.children.length; f > e; e++) this.children[e]._renderCanvas(a);
                    this._mask && a.maskManager.popMask(a.context)
                }
            }, d.Sprite.fromFrame = function(a) {
                var b = d.TextureCache[a];
                if(!b) throw new Error('The frameId "' + a + '" does not exist in the texture cache' + this);
                return new d.Sprite(b)
            }, d.Sprite.fromImage = function(a, b, c) {
                var e = d.Texture.fromImage(a, b, c);
                return new d.Sprite(e)
            }, d.SpriteBatch = function(a) {
                d.DisplayObjectContainer.call(this), this.textureThing = a, this.ready = !1
            }, d.SpriteBatch.prototype = Object.create(d.DisplayObjectContainer.prototype), d.SpriteBatch.constructor = d.SpriteBatch, d.SpriteBatch.prototype.initWebGL = function(a) {
                this.fastSpriteBatch = new d.WebGLFastSpriteBatch(a), this.ready = !0
            }, d.SpriteBatch.prototype.updateTransform = function() {
                d.DisplayObject.prototype.updateTransform.call(this)
            }, d.SpriteBatch.prototype._renderWebGL = function(a) {
                !this.visible || this.alpha <= 0 || !this.children.length || (this.ready || this.initWebGL(a.gl), a.spriteBatch.stop(), a.shaderManager.setShader(a.shaderManager.fastShader), this.fastSpriteBatch.begin(this, a), this.fastSpriteBatch.render(this), a.spriteBatch.start())
            }, d.SpriteBatch.prototype._renderCanvas = function(a) {
                var b = a.context;
                b.globalAlpha = this.worldAlpha, d.DisplayObject.prototype.updateTransform.call(this);
                for(var c = this.worldTransform, e = !0, f = 0; f < this.children.length; f++) {
                    var g = this.children[f];
                    if(g.visible) {
                        var h = g.texture,
                            i = h.frame;
                        if(b.globalAlpha = this.worldAlpha * g.alpha, g.rotation % (2 * Math.PI) === 0) e && (b.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty), e = !1), b.drawImage(h.baseTexture.source, i.x, i.y, i.width, i.height, g.anchor.x * -i.width * g.scale.x + g.position.x + .5 | 0, g.anchor.y * -i.height * g.scale.y + g.position.y + .5 | 0, i.width * g.scale.x, i.height * g.scale.y);
                        else {
                            e || (e = !0), d.DisplayObject.prototype.updateTransform.call(g);
                            var j = g.worldTransform;
                            a.roundPixels ? b.setTransform(j.a, j.c, j.b, j.d, 0 | j.tx, 0 | j.ty) : b.setTransform(j.a, j.c, j.b, j.d, j.tx, j.ty), b.drawImage(h.baseTexture.source, i.x, i.y, i.width, i.height, g.anchor.x * -i.width + .5 | 0, g.anchor.y * -i.height + .5 | 0, i.width, i.height)
                        }
                    }
                }
            }, d.MovieClip = function(a) {
                d.Sprite.call(this, a[0]), this.textures = a, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this.currentFrame = 0, this.playing = !1
            }, d.MovieClip.prototype = Object.create(d.Sprite.prototype), d.MovieClip.prototype.constructor = d.MovieClip, Object.defineProperty(d.MovieClip.prototype, "totalFrames", {
                get: function() {
                    return this.textures.length
                }
            }), d.MovieClip.prototype.stop = function() {
                this.playing = !1
            }, d.MovieClip.prototype.play = function() {
                this.playing = !0
            }, d.MovieClip.prototype.gotoAndStop = function(a) {
                this.playing = !1, this.currentFrame = a;
                var b = this.currentFrame + .5 | 0;
                this.setTexture(this.textures[b % this.textures.length])
            }, d.MovieClip.prototype.gotoAndPlay = function(a) {
                this.currentFrame = a, this.playing = !0
            }, d.MovieClip.prototype.updateTransform = function() {
                if(d.Sprite.prototype.updateTransform.call(this), this.playing) {
                    this.currentFrame += this.animationSpeed;
                    var a = this.currentFrame + .5 | 0;
                    this.currentFrame = this.currentFrame % this.textures.length, this.loop || a < this.textures.length ? this.setTexture(this.textures[a % this.textures.length]) : a >= this.textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
                }
            }, d.MovieClip.fromFrames = function(a) {
                for(var b = [], c = 0; c < a.length; c++) b.push(new d.Texture.fromFrame(a[c]));
                return new d.MovieClip(b)
            }, d.MovieClip.fromImages = function(a) {
                for(var b = [], c = 0; c < a.length; c++) b.push(new d.Texture.fromImage(a[c]));
                return new d.MovieClip(b)
            }, d.FilterBlock = function() {
                this.visible = !0, this.renderable = !0
            }, d.Text = function(a, b) {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), d.Sprite.call(this, d.Texture.fromCanvas(this.canvas)), this.setText(a), this.setStyle(b)
            }, d.Text.prototype = Object.create(d.Sprite.prototype), d.Text.prototype.constructor = d.Text, Object.defineProperty(d.Text.prototype, "width", {
                get: function() {
                    return this.dirty && (this.updateText(), this.dirty = !1), this.scale.x * this.texture.frame.width
                },
                set: function(a) {
                    this.scale.x = a / this.texture.frame.width, this._width = a
                }
            }), Object.defineProperty(d.Text.prototype, "height", {
                get: function() {
                    return this.dirty && (this.updateText(), this.dirty = !1), this.scale.y * this.texture.frame.height
                },
                set: function(a) {
                    this.scale.y = a / this.texture.frame.height, this._height = a
                }
            }), d.Text.prototype.setStyle = function(a) {
                a = a || {}, a.font = a.font || "bold 20pt Arial", a.fill = a.fill || "black", a.align = a.align || "left", a.stroke = a.stroke || "black", a.strokeThickness = a.strokeThickness || 0, a.wordWrap = a.wordWrap || !1, a.wordWrapWidth = a.wordWrapWidth || 100, a.wordWrapWidth = a.wordWrapWidth || 100, a.dropShadow = a.dropShadow || !1, a.dropShadowAngle = a.dropShadowAngle || Math.PI / 6, a.dropShadowDistance = a.dropShadowDistance || 4, a.dropShadowColor = a.dropShadowColor || "black", this.style = a, this.dirty = !0
            }, d.Text.prototype.setText = function(a) {
                this.text = a.toString() || " ", this.dirty = !0
            }, d.Text.prototype.updateText = function() {
                this.context.font = this.style.font;
                var a = this.text;
                this.style.wordWrap && (a = this.wordWrap(this.text));
                for(var b = a.split(/(?:\r\n|\r|\n)/), c = [], d = 0, e = 0; e < b.length; e++) {
                    var f = this.context.measureText(b[e]).width;
                    c[e] = f, d = Math.max(d, f)
                }
                var g = d + this.style.strokeThickness;
                this.style.dropShadow && (g += this.style.dropShadowDistance), this.canvas.width = g + this.context.lineWidth;
                var h = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness,
                    i = h * b.length;
                this.style.dropShadow && (i += this.style.dropShadowDistance), this.canvas.height = i, navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "top";
                var j, k;
                if(this.style.dropShadow) {
                    this.context.fillStyle = this.style.dropShadowColor;
                    var l = Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance,
                        m = Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance;
                    for(e = 0; e < b.length; e++) j = this.style.strokeThickness / 2, k = this.style.strokeThickness / 2 + e * h, "right" === this.style.align ? j += d - c[e] : "center" === this.style.align && (j += (d - c[e]) / 2), this.style.fill && this.context.fillText(b[e], j + l, k + m)
                }
                for(this.context.fillStyle = this.style.fill, e = 0; e < b.length; e++) j = this.style.strokeThickness / 2, k = this.style.strokeThickness / 2 + e * h, "right" === this.style.align ? j += d - c[e] : "center" === this.style.align && (j += (d - c[e]) / 2), this.style.stroke && this.style.strokeThickness && this.context.strokeText(b[e], j, k), this.style.fill && this.context.fillText(b[e], j, k);
                this.updateTexture()
            }, d.Text.prototype.updateTexture = function() {
                this.texture.baseTexture.width = this.canvas.width, this.texture.baseTexture.height = this.canvas.height, this.texture.crop.width = this.texture.frame.width = this.canvas.width, this.texture.crop.height = this.texture.frame.height = this.canvas.height, this._width = this.canvas.width, this._height = this.canvas.height, this.requiresUpdate = !0
            }, d.Text.prototype._renderWebGL = function(a) {
                this.requiresUpdate && (this.requiresUpdate = !1, d.updateWebGLTexture(this.texture.baseTexture, a.gl)), d.Sprite.prototype._renderWebGL.call(this, a)
            }, d.Text.prototype.updateTransform = function() {
                this.dirty && (this.updateText(), this.dirty = !1), d.Sprite.prototype.updateTransform.call(this)
            }, d.Text.prototype.determineFontHeight = function(a) {
                var b = d.Text.heightCache[a];
                if(!b) {
                    var c = document.getElementsByTagName("body")[0],
                        e = document.createElement("div"),
                        f = document.createTextNode("M");
                    e.appendChild(f), e.setAttribute("style", a + ";position:absolute;top:0;left:0"), c.appendChild(e), b = e.offsetHeight, d.Text.heightCache[a] = b, c.removeChild(e)
                }
                return b
            }, d.Text.prototype.wordWrap = function(a) {
                for(var b = "", c = a.split("\n"), d = 0; d < c.length; d++) {
                    for(var e = this.style.wordWrapWidth, f = c[d].split(" "), g = 0; g < f.length; g++) {
                        var h = this.context.measureText(f[g]).width,
                            i = h + this.context.measureText(" ").width;
                        0 === g || i > e ? (g > 0 && (b += "\n"), b += f[g], e = this.style.wordWrapWidth - h) : (e -= i, b += " " + f[g])
                    }
                    d < c.length - 1 && (b += "\n")
                }
                return b
            }, d.Text.prototype.destroy = function(a) {
                this.context = null, this.canvas = null, this.texture.destroy(void 0 === a ? !0 : a)
            }, d.Text.heightCache = {}, d.BitmapText = function(a, b) {
                d.DisplayObjectContainer.call(this), this._pool = [], this.setText(a), this.setStyle(b), this.updateText(), this.dirty = !1
            }, d.BitmapText.prototype = Object.create(d.DisplayObjectContainer.prototype), d.BitmapText.prototype.constructor = d.BitmapText, d.BitmapText.prototype.setText = function(a) {
                this.text = a || " ", this.dirty = !0
            }, d.BitmapText.prototype.setStyle = function(a) {
                a = a || {}, a.align = a.align || "left", this.style = a;
                var b = a.font.split(" ");
                this.fontName = b[b.length - 1], this.fontSize = b.length >= 2 ? parseInt(b[b.length - 2], 10) : d.BitmapText.fonts[this.fontName].size, this.dirty = !0, this.tint = a.tint
            }, d.BitmapText.prototype.updateText = function() {
                for(var a = d.BitmapText.fonts[this.fontName], b = new d.Point, c = null, e = [], f = 0, g = [], h = 0, i = this.fontSize / a.size, j = 0; j < this.text.length; j++) {
                    var k = this.text.charCodeAt(j);
                    if(/(?:\r\n|\r|\n)/.test(this.text.charAt(j))) g.push(b.x), f = Math.max(f, b.x), h++, b.x = 0, b.y += a.lineHeight, c = null;
                    else {
                        var l = a.chars[k];
                        l && (c && l[c] && (b.x += l.kerning[c]), e.push({
                            texture: l.texture,
                            line: h,
                            charCode: k,
                            position: new d.Point(b.x + l.xOffset, b.y + l.yOffset)
                        }), b.x += l.xAdvance, c = k)
                    }
                }
                g.push(b.x), f = Math.max(f, b.x);
                var m = [];
                for(j = 0; h >= j; j++) {
                    var n = 0;
                    "right" === this.style.align ? n = f - g[j] : "center" === this.style.align && (n = (f - g[j]) / 2), m.push(n)
                }
                var o = this.children.length,
                    p = e.length,
                    q = this.tint || 16777215;
                for(j = 0; p > j; j++) {
                    var r = o > j ? this.children[j] : this._pool.pop();
                    r ? r.setTexture(e[j].texture) : r = new d.Sprite(e[j].texture), r.position.x = (e[j].position.x + m[e[j].line]) * i, r.position.y = e[j].position.y * i, r.scale.x = r.scale.y = i, r.tint = q, r.parent || this.addChild(r)
                }
                for(; this.children.length > p;) {
                    var s = this.getChildAt(this.children.length - 1);
                    this._pool.push(s), this.removeChild(s)
                }
                this.textWidth = f * i, this.textHeight = (b.y + a.lineHeight) * i
            }, d.BitmapText.prototype.updateTransform = function() {
                this.dirty && (this.updateText(), this.dirty = !1), d.DisplayObjectContainer.prototype.updateTransform.call(this)
            }, d.BitmapText.fonts = {}, d.InteractionData = function() {
                this.global = new d.Point, this.target = null, this.originalEvent = null
            }, d.InteractionData.prototype.getLocalPosition = function(a) {
                var b = a.worldTransform,
                    c = this.global,
                    e = b.a,
                    f = b.b,
                    g = b.tx,
                    h = b.c,
                    i = b.d,
                    j = b.ty,
                    k = 1 / (e * i + f * -h);
                return new d.Point(i * k * c.x + -f * k * c.y + (j * f - g * i) * k, e * k * c.y + -h * k * c.x + (-j * e + g * h) * k)
            }, d.InteractionData.prototype.constructor = d.InteractionData, d.InteractionManager = function(a) {
                this.stage = a, this.mouse = new d.InteractionData, this.touchs = {}, this.tempPoint = new d.Point, this.mouseoverEnabled = !0, this.pool = [], this.interactiveItems = [], this.interactionDOMElement = null, this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this.mouseOut = !1
            }, d.InteractionManager.prototype.constructor = d.InteractionManager, d.InteractionManager.prototype.collectInteractiveSprite = function(a, b) {
                for(var c = a.children, d = c.length, e = d - 1; e >= 0; e--) {
                    var f = c[e];
                    f._interactive ? (b.interactiveChildren = !0, this.interactiveItems.push(f), f.children.length > 0 && this.collectInteractiveSprite(f, f)) : (f.__iParent = null, f.children.length > 0 && this.collectInteractiveSprite(f, b))
                }
            }, d.InteractionManager.prototype.setTarget = function(a) {
                this.target = a, null === this.interactionDOMElement && this.setTargetDomElement(a.view)
            }, d.InteractionManager.prototype.setTargetDomElement = function(a) {
                this.removeEvents(), window.navigator.msPointerEnabled && (a.style["-ms-content-zooming"] = "none", a.style["-ms-touch-action"] = "none"), this.interactionDOMElement = a, a.addEventListener("mousemove", this.onMouseMove, !0), a.addEventListener("mousedown", this.onMouseDown, !0), a.addEventListener("mouseout", this.onMouseOut, !0), a.addEventListener("touchstart", this.onTouchStart, !0), a.addEventListener("touchend", this.onTouchEnd, !0), a.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0)
            }, d.InteractionManager.prototype.removeEvents = function() {
                this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "", this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0))
            }, d.InteractionManager.prototype.update = function() {
                if(this.target) {
                    var a = Date.now(),
                        b = a - this.last;
                    if(b = b * d.INTERACTION_FREQUENCY / 1e3, !(1 > b)) {
                        this.last = a;
                        var c = 0;
                        this.dirty && this.rebuildInteractiveGraph();
                        var e = this.interactiveItems.length,
                            f = "inherit",
                            g = !1;
                        for(c = 0; e > c; c++) {
                            var h = this.interactiveItems[c];
                            h.__hit = this.hitTest(h, this.mouse), this.mouse.target = h, h.__hit && !g ? (h.buttonMode && (f = h.defaultCursor), h.interactiveChildren || (g = !0), h.__isOver || (h.mouseover && h.mouseover(this.mouse), h.__isOver = !0)) : h.__isOver && (h.mouseout && h.mouseout(this.mouse), h.__isOver = !1)
                        }
                        this.currentCursorStyle !== f && (this.currentCursorStyle = f, this.interactionDOMElement.style.cursor = f)
                    }
                }
            }, d.InteractionManager.prototype.rebuildInteractiveGraph = function() {
                this.dirty = !1;
                for(var a = this.interactiveItems.length, b = 0; a > b; b++) this.interactiveItems[b].interactiveChildren = !1;
                this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage)
            }, d.InteractionManager.prototype.onMouseMove = function(a) {
                this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = a || window.event;
                var b = this.interactionDOMElement.getBoundingClientRect();
                this.mouse.global.x = (a.clientX - b.left) * (this.target.width / b.width), this.mouse.global.y = (a.clientY - b.top) * (this.target.height / b.height);
                for(var c = this.interactiveItems.length, d = 0; c > d; d++) {
                    var e = this.interactiveItems[d];
                    e.mousemove && e.mousemove(this.mouse)
                }
            }, d.InteractionManager.prototype.onMouseDown = function(a) {
                this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = a || window.event, d.AUTO_PREVENT_DEFAULT && this.mouse.originalEvent.preventDefault();
                for(var b = this.interactiveItems.length, c = 0; b > c; c++) {
                    var e = this.interactiveItems[c];
                    if((e.mousedown || e.click) && (e.__mouseIsDown = !0, e.__hit = this.hitTest(e, this.mouse), e.__hit && (e.mousedown && e.mousedown(this.mouse), e.__isDown = !0, !e.interactiveChildren))) break
                }
            }, d.InteractionManager.prototype.onMouseOut = function() {
                this.dirty && this.rebuildInteractiveGraph();
                var a = this.interactiveItems.length;
                this.interactionDOMElement.style.cursor = "inherit";
                for(var b = 0; a > b; b++) {
                    var c = this.interactiveItems[b];
                    c.__isOver && (this.mouse.target = c, c.mouseout && c.mouseout(this.mouse), c.__isOver = !1)
                }
                this.mouseOut = !0, this.mouse.global.x = -1e4, this.mouse.global.y = -1e4
            }, d.InteractionManager.prototype.onMouseUp = function(a) {
                this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = a || window.event;
                for(var b = this.interactiveItems.length, c = !1, d = 0; b > d; d++) {
                    var e = this.interactiveItems[d];
                    e.__hit = this.hitTest(e, this.mouse), e.__hit && !c ? (e.mouseup && e.mouseup(this.mouse), e.__isDown && e.click && e.click(this.mouse), e.interactiveChildren || (c = !0)) : e.__isDown && e.mouseupoutside && e.mouseupoutside(this.mouse), e.__isDown = !1
                }
            }, d.InteractionManager.prototype.hitTest = function(a, b) {
                var c = b.global;
                if(!a.worldVisible) return !1;
                var e = a instanceof d.Sprite,
                    f = a.worldTransform,
                    g = f.a,
                    h = f.b,
                    i = f.tx,
                    j = f.c,
                    k = f.d,
                    l = f.ty,
                    m = 1 / (g * k + h * -j),
                    n = k * m * c.x + -h * m * c.y + (l * h - i * k) * m,
                    o = g * m * c.y + -j * m * c.x + (-l * g + i * j) * m;
                if(b.target = a, a.hitArea && a.hitArea.contains) return a.hitArea.contains(n, o) ? (b.target = a, !0) : !1;
                if(e) {
                    var p, q = a.texture.frame.width,
                        r = a.texture.frame.height,
                        s = -q * a.anchor.x;
                    if(n > s && s + q > n && (p = -r * a.anchor.y, o > p && p + r > o)) return b.target = a, !0
                }
                for(var t = a.children.length, u = 0; t > u; u++) {
                    var v = a.children[u],
                        w = this.hitTest(v, b);
                    if(w) return b.target = a, !0
                }
                return !1
            }, d.InteractionManager.prototype.onTouchMove = function(a) {
                this.dirty && this.rebuildInteractiveGraph();
                var b, c = this.interactionDOMElement.getBoundingClientRect(),
                    d = a.changedTouches,
                    e = 0;
                for(e = 0; e < d.length; e++) {
                    var f = d[e];
                    b = this.touchs[f.identifier], b.originalEvent = a || window.event, b.global.x = (f.clientX - c.left) * (this.target.width / c.width), b.global.y = (f.clientY - c.top) * (this.target.height / c.height), navigator.isCocoonJS && (b.global.x = f.clientX, b.global.y = f.clientY);
                    for(var g = 0; g < this.interactiveItems.length; g++) {
                        var h = this.interactiveItems[g];
                        h.touchmove && h.__touchData && h.__touchData[f.identifier] && h.touchmove(b)
                    }
                }
            }, d.InteractionManager.prototype.onTouchStart = function(a) {
                this.dirty && this.rebuildInteractiveGraph();
                var b = this.interactionDOMElement.getBoundingClientRect();
                d.AUTO_PREVENT_DEFAULT && a.preventDefault();
                for(var c = a.changedTouches, e = 0; e < c.length; e++) {
                    var f = c[e],
                        g = this.pool.pop();
                    g || (g = new d.InteractionData), g.originalEvent = a || window.event, this.touchs[f.identifier] = g, g.global.x = (f.clientX - b.left) * (this.target.width / b.width), g.global.y = (f.clientY - b.top) * (this.target.height / b.height), navigator.isCocoonJS && (g.global.x = f.clientX, g.global.y = f.clientY);
                    for(var h = this.interactiveItems.length, i = 0; h > i; i++) {
                        var j = this.interactiveItems[i];
                        if((j.touchstart || j.tap) && (j.__hit = this.hitTest(j, g), j.__hit && (j.touchstart && j.touchstart(g), j.__isDown = !0, j.__touchData = j.__touchData || {}, j.__touchData[f.identifier] = g, !j.interactiveChildren))) break
                    }
                }
            }, d.InteractionManager.prototype.onTouchEnd = function(a) {
                this.dirty && this.rebuildInteractiveGraph();
                for(var b = this.interactionDOMElement.getBoundingClientRect(), c = a.changedTouches, d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = this.touchs[e.identifier],
                        g = !1;
                    f.global.x = (e.clientX - b.left) * (this.target.width / b.width), f.global.y = (e.clientY - b.top) * (this.target.height / b.height), navigator.isCocoonJS && (f.global.x = e.clientX, f.global.y = e.clientY);
                    for(var h = this.interactiveItems.length, i = 0; h > i; i++) {
                        var j = this.interactiveItems[i];
                        j.__touchData && j.__touchData[e.identifier] && (j.__hit = this.hitTest(j, j.__touchData[e.identifier]), f.originalEvent = a || window.event, (j.touchend || j.tap) && (j.__hit && !g ? (j.touchend && j.touchend(f), j.__isDown && j.tap && j.tap(f), j.interactiveChildren || (g = !0)) : j.__isDown && j.touchendoutside && j.touchendoutside(f), j.__isDown = !1), j.__touchData[e.identifier] = null)
                    }
                    this.pool.push(f), this.touchs[e.identifier] = null
                }
            }, d.Stage = function(a) {
                d.DisplayObjectContainer.call(this), this.worldTransform = new d.Matrix, this.interactive = !0, this.interactionManager = new d.InteractionManager(this), this.dirty = !0, this.stage = this, this.stage.hitArea = new d.Rectangle(0, 0, 1e5, 1e5), this.setBackgroundColor(a)
            }, d.Stage.prototype = Object.create(d.DisplayObjectContainer.prototype), d.Stage.prototype.constructor = d.Stage, d.Stage.prototype.setInteractionDelegate = function(a) {
                this.interactionManager.setTargetDomElement(a)
            }, d.Stage.prototype.updateTransform = function() {
                this.worldAlpha = 1;
                for(var a = 0, b = this.children.length; b > a; a++) this.children[a].updateTransform();
                this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0), this.interactive && this.interactionManager.update()
            }, d.Stage.prototype.setBackgroundColor = function(a) {
                this.backgroundColor = a || 0, this.backgroundColorSplit = d.hex2rgb(this.backgroundColor);
                var b = this.backgroundColor.toString(16);
                b = "000000".substr(0, 6 - b.length) + b, this.backgroundColorString = "#" + b
            }, d.Stage.prototype.getMousePosition = function() {
                return this.interactionManager.mouse.global
            };
            for(var e = 0, f = ["ms", "moz", "webkit", "o"], g = 0; g < f.length && !window.requestAnimationFrame; ++g) window.requestAnimationFrame = window[f[g] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[f[g] + "CancelAnimationFrame"] || window[f[g] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
                var b = (new Date).getTime(),
                    c = Math.max(0, 16 - (b - e)),
                    d = window.setTimeout(function() {
                        a(b + c)
                    }, c);
                return e = b + c, d
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
                clearTimeout(a)
            }), window.requestAnimFrame = window.requestAnimationFrame, d.hex2rgb = function(a) {
                return [(a >> 16 & 255) / 255, (a >> 8 & 255) / 255, (255 & a) / 255]
            }, d.rgb2hex = function(a) {
                return(255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
            }, "function" != typeof Function.prototype.bind && (Function.prototype.bind = function() {
                var a = Array.prototype.slice;
                return function(b) {
                    function c() {
                        var f = e.concat(a.call(arguments));
                        d.apply(this instanceof c ? this : b, f)
                    }
                    var d = this,
                        e = a.call(arguments, 1);
                    if("function" != typeof d) throw new TypeError;
                    return c.prototype = function f(a) {
                        return a && (f.prototype = a), this instanceof f ? void 0 : new f
                    }(d.prototype), c
                }
            }()), d.AjaxRequest = function() {
                var a = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];
                if(!window.ActiveXObject) return window.XMLHttpRequest ? new window.XMLHttpRequest : !1;
                for(var b = 0; b < a.length; b++) try {
                    return new window.ActiveXObject(a[b])
                } catch(c) {}
            }, d.canUseNewCanvasBlendModes = function() {
                var a = document.createElement("canvas");
                a.width = 1, a.height = 1;
                var b = a.getContext("2d");
                return b.fillStyle = "#000", b.fillRect(0, 0, 1, 1), b.globalCompositeOperation = "multiply", b.fillStyle = "#fff", b.fillRect(0, 0, 1, 1), 0 === b.getImageData(0, 0, 1, 1).data[0]
            }, d.getNextPowerOfTwo = function(a) {
                if(a > 0 && 0 === (a & a - 1)) return a;
                for(var b = 1; a > b;) b <<= 1;
                return b
            }, d.EventTarget = function() {
                var a = {};
                this.addEventListener = this.on = function(b, c) {
                    void 0 === a[b] && (a[b] = []), -1 === a[b].indexOf(c) && a[b].unshift(c)
                }, this.dispatchEvent = this.emit = function(b) {
                    if(a[b.type] && a[b.type].length)
                        for(var c = a[b.type].length - 1; c >= 0; c--) a[b.type][c](b)
                }, this.removeEventListener = this.off = function(b, c) {
                    if(void 0 !== a[b]) {
                        var d = a[b].indexOf(c); - 1 !== d && a[b].splice(d, 1)
                    }
                }, this.removeAllEventListeners = function(b) {
                    var c = a[b];
                    c && (c.length = 0)
                }
            }, d.autoDetectRenderer = function(a, b, c, e, f) {
                a || (a = 800), b || (b = 600);
                var g = function() {
                    try {
                        var a = document.createElement("canvas");
                        return !!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))
                    } catch(b) {
                        return !1
                    }
                }();
                return g ? new d.WebGLRenderer(a, b, c, e, f) : new d.CanvasRenderer(a, b, c, e)
            }, d.autoDetectRecommendedRenderer = function(a, b, c, e, f) {
                a || (a = 800), b || (b = 600);
                var g = function() {
                    try {
                        var a = document.createElement("canvas");
                        return !!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))
                    } catch(b) {
                        return !1
                    }
                }(),
                    h = /Android/i.test(navigator.userAgent);
                return g && !h ? new d.WebGLRenderer(a, b, c, e, f) : new d.CanvasRenderer(a, b, c, e)
            }, d.PolyK = {}, d.PolyK.Triangulate = function(a) {
                var b = !0,
                    c = a.length >> 1;
                if(3 > c) return [];
                for(var e = [], f = [], g = 0; c > g; g++) f.push(g);
                g = 0;
                for(var h = c; h > 3;) {
                    var i = f[(g + 0) % h],
                        j = f[(g + 1) % h],
                        k = f[(g + 2) % h],
                        l = a[2 * i],
                        m = a[2 * i + 1],
                        n = a[2 * j],
                        o = a[2 * j + 1],
                        p = a[2 * k],
                        q = a[2 * k + 1],
                        r = !1;
                    if(d.PolyK._convex(l, m, n, o, p, q, b)) {
                        r = !0;
                        for(var s = 0; h > s; s++) {
                            var t = f[s];
                            if(t !== i && t !== j && t !== k && d.PolyK._PointInTriangle(a[2 * t], a[2 * t + 1], l, m, n, o, p, q)) {
                                r = !1;
                                break
                            }
                        }
                    }
                    if(r) e.push(i, j, k), f.splice((g + 1) % h, 1), h--, g = 0;
                    else if(g++ > 3 * h) {
                        if(!b) return window.console.log("PIXI Warning: shape too complex to fill"), [];
                        for(e = [], f = [], g = 0; c > g; g++) f.push(g);
                        g = 0, h = c, b = !1
                    }
                }
                return e.push(f[0], f[1], f[2]), e
            }, d.PolyK._PointInTriangle = function(a, b, c, d, e, f, g, h) {
                var i = g - c,
                    j = h - d,
                    k = e - c,
                    l = f - d,
                    m = a - c,
                    n = b - d,
                    o = i * i + j * j,
                    p = i * k + j * l,
                    q = i * m + j * n,
                    r = k * k + l * l,
                    s = k * m + l * n,
                    t = 1 / (o * r - p * p),
                    u = (r * q - p * s) * t,
                    v = (o * s - p * q) * t;
                return u >= 0 && v >= 0 && 1 > u + v
            }, d.PolyK._convex = function(a, b, c, d, e, f, g) {
                return(b - d) * (e - c) + (c - a) * (f - d) >= 0 === g
            }, d.initDefaultShaders = function() {}, d.CompileVertexShader = function(a, b) {
                return d._CompileShader(a, b, a.VERTEX_SHADER)
            }, d.CompileFragmentShader = function(a, b) {
                return d._CompileShader(a, b, a.FRAGMENT_SHADER)
            }, d._CompileShader = function(a, b, c) {
                var d = b.join("\n"),
                    e = a.createShader(c);
                return a.shaderSource(e, d), a.compileShader(e), a.getShaderParameter(e, a.COMPILE_STATUS) ? e : (window.console.log(a.getShaderInfoLog(e)), null)
            }, d.compileProgram = function(a, b, c) {
                var e = d.CompileFragmentShader(a, c),
                    f = d.CompileVertexShader(a, b),
                    g = a.createProgram();
                return a.attachShader(g, f), a.attachShader(g, e), a.linkProgram(g), a.getProgramParameter(g, a.LINK_STATUS) || window.console.log("Could not initialise shaders"), g
            }, d.PixiShader = function(a) {
                this._UID = d._UID++, this.gl = a, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.textureCount = 0, this.attributes = [], this.init()
            }, d.PixiShader.prototype.init = function() {
                var a = this.gl,
                    b = d.compileProgram(a, this.vertexSrc || d.PixiShader.defaultVertexSrc, this.fragmentSrc);
                a.useProgram(b), this.uSampler = a.getUniformLocation(b, "uSampler"), this.projectionVector = a.getUniformLocation(b, "projectionVector"), this.offsetVector = a.getUniformLocation(b, "offsetVector"), this.dimensions = a.getUniformLocation(b, "dimensions"), this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition"), this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord"), this.colorAttribute = a.getAttribLocation(b, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
                for(var c in this.uniforms) this.uniforms[c].uniformLocation = a.getUniformLocation(b, c);
                this.initUniforms(), this.program = b
            }, d.PixiShader.prototype.initUniforms = function() {
                this.textureCount = 1;
                var a, b = this.gl;
                for(var c in this.uniforms) {
                    a = this.uniforms[c];
                    var d = a.type;
                    "sampler2D" === d ? (a._init = !1, null !== a.value && this.initSampler2D(a)) : "mat2" === d || "mat3" === d || "mat4" === d ? (a.glMatrix = !0, a.glValueLength = 1, "mat2" === d ? a.glFunc = b.uniformMatrix2fv : "mat3" === d ? a.glFunc = b.uniformMatrix3fv : "mat4" === d && (a.glFunc = b.uniformMatrix4fv)) : (a.glFunc = b["uniform" + d], a.glValueLength = "2f" === d || "2i" === d ? 2 : "3f" === d || "3i" === d ? 3 : "4f" === d || "4i" === d ? 4 : 1)
                }
            }, d.PixiShader.prototype.initSampler2D = function(a) {
                if(a.value && a.value.baseTexture && a.value.baseTexture.hasLoaded) {
                    var b = this.gl;
                    if(b.activeTexture(b["TEXTURE" + this.textureCount]), b.bindTexture(b.TEXTURE_2D, a.value.baseTexture._glTextures[b.id]), a.textureData) {
                        var c = a.textureData,
                            d = c.magFilter ? c.magFilter : b.LINEAR,
                            e = c.minFilter ? c.minFilter : b.LINEAR,
                            f = c.wrapS ? c.wrapS : b.CLAMP_TO_EDGE,
                            g = c.wrapT ? c.wrapT : b.CLAMP_TO_EDGE,
                            h = c.luminance ? b.LUMINANCE : b.RGBA;
                        if(c.repeat && (f = b.REPEAT, g = b.REPEAT), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !! c.flipY), c.width) {
                            var i = c.width ? c.width : 512,
                                j = c.height ? c.height : 2,
                                k = c.border ? c.border : 0;
                            b.texImage2D(b.TEXTURE_2D, 0, h, i, j, k, h, b.UNSIGNED_BYTE, null)
                        } else b.texImage2D(b.TEXTURE_2D, 0, h, b.RGBA, b.UNSIGNED_BYTE, a.value.baseTexture.source);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, d), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, e), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, f), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, g)
                    }
                    b.uniform1i(a.uniformLocation, this.textureCount), a._init = !0, this.textureCount++
                }
            }, d.PixiShader.prototype.syncUniforms = function() {
                this.textureCount = 1;
                var a, b = this.gl;
                for(var c in this.uniforms) a = this.uniforms[c], 1 === a.glValueLength ? a.glMatrix === !0 ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w) : "sampler2D" === a.type && (a._init ? (b.activeTexture(b["TEXTURE" + this.textureCount]), b.bindTexture(b.TEXTURE_2D, a.value.baseTexture._glTextures[b.id] || d.createWebGLTexture(a.value.baseTexture, b)), b.uniform1i(a.uniformLocation, this.textureCount), this.textureCount++) : this.initSampler2D(a))
            }, d.PixiShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
            }, d.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec2 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;", "   vColor = vec4(color * aColor.x, aColor.x);", "}"], d.PixiFastShader = function(a) {
                this._UID = d._UID++, this.gl = a, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   vec2 v;", "   vec2 sv = aVertexPosition * aScale;", "   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", "   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", "   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", "   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"], this.textureCount = 0, this.init()
            }, d.PixiFastShader.prototype.init = function() {
                var a = this.gl,
                    b = d.compileProgram(a, this.vertexSrc, this.fragmentSrc);
                a.useProgram(b), this.uSampler = a.getUniformLocation(b, "uSampler"), this.projectionVector = a.getUniformLocation(b, "projectionVector"), this.offsetVector = a.getUniformLocation(b, "offsetVector"), this.dimensions = a.getUniformLocation(b, "dimensions"), this.uMatrix = a.getUniformLocation(b, "uMatrix"), this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition"), this.aPositionCoord = a.getAttribLocation(b, "aPositionCoord"), this.aScale = a.getAttribLocation(b, "aScale"), this.aRotation = a.getAttribLocation(b, "aRotation"), this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord"), this.colorAttribute = a.getAttribLocation(b, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute], this.program = b
            }, d.PixiFastShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
            }, d.StripShader = function(a) {
                this._UID = d._UID++, this.gl = a, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"], this.init()
            }, d.StripShader.prototype.init = function() {
                var a = this.gl,
                    b = d.compileProgram(a, this.vertexSrc, this.fragmentSrc);
                a.useProgram(b), this.uSampler = a.getUniformLocation(b, "uSampler"), this.projectionVector = a.getUniformLocation(b, "projectionVector"), this.offsetVector = a.getUniformLocation(b, "offsetVector"), this.colorAttribute = a.getAttribLocation(b, "aColor"), this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition"), this.aTextureCoord = a.getAttribLocation(b, "aTextureCoord"), this.attributes = [this.aVertexPosition, this.aTextureCoord], this.translationMatrix = a.getUniformLocation(b, "translationMatrix"), this.alpha = a.getUniformLocation(b, "alpha"), this.program = b
            }, d.PrimitiveShader = function(a) {
                this._UID = d._UID++, this.gl = a, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"], this.init()
            }, d.PrimitiveShader.prototype.init = function() {
                var a = this.gl,
                    b = d.compileProgram(a, this.vertexSrc, this.fragmentSrc);
                a.useProgram(b), this.projectionVector = a.getUniformLocation(b, "projectionVector"), this.offsetVector = a.getUniformLocation(b, "offsetVector"), this.tintColor = a.getUniformLocation(b, "tint"), this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition"), this.colorAttribute = a.getAttribLocation(b, "aColor"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = a.getUniformLocation(b, "translationMatrix"), this.alpha = a.getUniformLocation(b, "alpha"), this.program = b
            }, d.PrimitiveShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
            }, d.ComplexPrimitiveShader = function(a) {
                this._UID = d._UID++, this.gl = a, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"], this.init()
            }, d.ComplexPrimitiveShader.prototype.init = function() {
                var a = this.gl,
                    b = d.compileProgram(a, this.vertexSrc, this.fragmentSrc);
                a.useProgram(b), this.projectionVector = a.getUniformLocation(b, "projectionVector"), this.offsetVector = a.getUniformLocation(b, "offsetVector"), this.tintColor = a.getUniformLocation(b, "tint"), this.color = a.getUniformLocation(b, "color"), this.aVertexPosition = a.getAttribLocation(b, "aVertexPosition"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = a.getUniformLocation(b, "translationMatrix"), this.alpha = a.getUniformLocation(b, "alpha"), this.program = b
            }, d.ComplexPrimitiveShader.prototype.destroy = function() {
                this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
            }, d.WebGLGraphics = function() {}, d.WebGLGraphics.renderGraphics = function(a, b) {
                var c, e = b.gl,
                    f = b.projection,
                    g = b.offset,
                    h = b.shaderManager.primitiveShader;
                a.dirty && d.WebGLGraphics.updateGraphics(a, e);
                for(var i = a._webGL[e.id], j = 0; j < i.data.length; j++) 1 === i.data[j].mode ? (c = i.data[j], b.stencilManager.pushStencil(a, c, b), e.drawElements(e.TRIANGLE_FAN, 4, e.UNSIGNED_SHORT, 2 * (c.indices.length - 4)), b.stencilManager.popStencil(a, c, b), this.last = c.mode) : (c = i.data[j], b.shaderManager.setShader(h), h = b.shaderManager.primitiveShader, e.uniformMatrix3fv(h.translationMatrix, !1, a.worldTransform.toArray(!0)), e.uniform2f(h.projectionVector, f.x, -f.y), e.uniform2f(h.offsetVector, -g.x, -g.y), e.uniform3fv(h.tintColor, d.hex2rgb(a.tint)), e.uniform1f(h.alpha, a.worldAlpha), e.bindBuffer(e.ARRAY_BUFFER, c.buffer), e.vertexAttribPointer(h.aVertexPosition, 2, e.FLOAT, !1, 24, 0), e.vertexAttribPointer(h.colorAttribute, 4, e.FLOAT, !1, 24, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, c.indexBuffer), e.drawElements(e.TRIANGLE_STRIP, c.indices.length, e.UNSIGNED_SHORT, 0))
            }, d.WebGLGraphics.updateGraphics = function(a, b) {
                var c = a._webGL[b.id];
                c || (c = a._webGL[b.id] = {
                    lastIndex: 0,
                    data: [],
                    gl: b
                }), a.dirty = !1;
                var e;
                if(a.clearDirty) {
                    for(a.clearDirty = !1, e = 0; e < c.data.length; e++) {
                        var f = c.data[e];
                        f.reset(), d.WebGLGraphics.graphicsDataPool.push(f)
                    }
                    c.data = [], c.lastIndex = 0
                }
                var g;
                for(e = c.lastIndex; e < a.graphicsData.length; e++) {
                    var h = a.graphicsData[e];
                    h.type === d.Graphics.POLY ? (h.fill && h.points.length > 6 && (h.points.length > 10 ? (g = d.WebGLGraphics.switchMode(c, 1), d.WebGLGraphics.buildComplexPoly(h, g)) : (g = d.WebGLGraphics.switchMode(c, 0), d.WebGLGraphics.buildPoly(h, g))), h.lineWidth > 0 && (g = d.WebGLGraphics.switchMode(c, 0), d.WebGLGraphics.buildLine(h, g))) : (g = d.WebGLGraphics.switchMode(c, 0), h.type === d.Graphics.RECT ? d.WebGLGraphics.buildRectangle(h, g) : h.type === d.Graphics.CIRC || h.type === d.Graphics.ELIP ? d.WebGLGraphics.buildCircle(h, g) : h.type === d.Graphics.RREC && d.WebGLGraphics.buildRoundedRectangle(h, g)), c.lastIndex++
                }
                for(e = 0; e < c.data.length; e++) g = c.data[e], g.dirty && g.upload()
            }, d.WebGLGraphics.switchMode = function(a, b) {
                var c;
                return a.data.length ? (c = a.data[a.data.length - 1], (c.mode !== b || 1 === b) && (c = d.WebGLGraphics.graphicsDataPool.pop() || new d.WebGLGraphicsData(a.gl), c.mode = b, a.data.push(c))) : (c = d.WebGLGraphics.graphicsDataPool.pop() || new d.WebGLGraphicsData(a.gl), c.mode = b, a.data.push(c)), c.dirty = !0, c
            }, d.WebGLGraphics.buildRectangle = function(a, b) {
                var c = a.points,
                    e = c[0],
                    f = c[1],
                    g = c[2],
                    h = c[3];
                if(a.fill) {
                    var i = d.hex2rgb(a.fillColor),
                        j = a.fillAlpha,
                        k = i[0] * j,
                        l = i[1] * j,
                        m = i[2] * j,
                        n = b.points,
                        o = b.indices,
                        p = n.length / 6;
                    n.push(e, f), n.push(k, l, m, j), n.push(e + g, f), n.push(k, l, m, j), n.push(e, f + h), n.push(k, l, m, j), n.push(e + g, f + h), n.push(k, l, m, j), o.push(p, p, p + 1, p + 2, p + 3, p + 3)
                }
                if(a.lineWidth) {
                    var q = a.points;
                    a.points = [e, f, e + g, f, e + g, f + h, e, f + h, e, f], d.WebGLGraphics.buildLine(a, b), a.points = q
                }
            }, d.WebGLGraphics.buildRoundedRectangle = function(a, b) {
                var c = a.points,
                    e = c[0],
                    f = c[1],
                    g = c[2],
                    h = c[3],
                    i = c[4],
                    j = [];
                if(j.push(e, f + i), j = j.concat(d.WebGLGraphics.quadraticBezierCurve(e, f + h - i, e, f + h, e + i, f + h)), j = j.concat(d.WebGLGraphics.quadraticBezierCurve(e + g - i, f + h, e + g, f + h, e + g, f + h - i)), j = j.concat(d.WebGLGraphics.quadraticBezierCurve(e + g, f + i, e + g, f, e + g - i, f)), j = j.concat(d.WebGLGraphics.quadraticBezierCurve(e + i, f, e, f, e, f + i)), a.fill) {
                    var k = d.hex2rgb(a.fillColor),
                        l = a.fillAlpha,
                        m = k[0] * l,
                        n = k[1] * l,
                        o = k[2] * l,
                        p = b.points,
                        q = b.indices,
                        r = p.length / 6,
                        s = d.PolyK.Triangulate(j),
                        t = 0;
                    for(t = 0; t < s.length; t += 3) q.push(s[t] + r), q.push(s[t] + r), q.push(s[t + 1] + r), q.push(s[t + 2] + r), q.push(s[t + 2] + r);
                    for(t = 0; t < j.length; t++) p.push(j[t], j[++t], m, n, o, l)
                }
                if(a.lineWidth) {
                    var u = a.points;
                    a.points = j, d.WebGLGraphics.buildLine(a, b), a.points = u
                }
            }, d.WebGLGraphics.quadraticBezierCurve = function(a, b, c, d, e, f) {
                function g(a, b, c) {
                    var d = b - a;
                    return a + d * c
                }
                for(var h, i, j, k, l, m, n = 20, o = [], p = 0, q = 0; n >= q; q++) p = q / n, h = g(a, c, p), i = g(b, d, p), j = g(c, e, p), k = g(d, f, p), l = g(h, j, p), m = g(i, k, p), o.push(l, m);
                return o
            }, d.WebGLGraphics.buildCircle = function(a, b) {
                var c = a.points,
                    e = c[0],
                    f = c[1],
                    g = c[2],
                    h = c[3],
                    i = 40,
                    j = 2 * Math.PI / i,
                    k = 0;
                if(a.fill) {
                    var l = d.hex2rgb(a.fillColor),
                        m = a.fillAlpha,
                        n = l[0] * m,
                        o = l[1] * m,
                        p = l[2] * m,
                        q = b.points,
                        r = b.indices,
                        s = q.length / 6;
                    for(r.push(s), k = 0; i + 1 > k; k++) q.push(e, f, n, o, p, m), q.push(e + Math.sin(j * k) * g, f + Math.cos(j * k) * h, n, o, p, m), r.push(s++, s++);
                    r.push(s - 1)
                }
                if(a.lineWidth) {
                    var t = a.points;
                    for(a.points = [], k = 0; i + 1 > k; k++) a.points.push(e + Math.sin(j * k) * g, f + Math.cos(j * k) * h);
                    d.WebGLGraphics.buildLine(a, b), a.points = t
                }
            }, d.WebGLGraphics.buildLine = function(a, b) {
                var c = 0,
                    e = a.points;
                if(0 !== e.length) {
                    if(a.lineWidth % 2)
                        for(c = 0; c < e.length; c++) e[c] += .5;
                    var f = new d.Point(e[0], e[1]),
                        g = new d.Point(e[e.length - 2], e[e.length - 1]);
                    if(f.x === g.x && f.y === g.y) {
                        e = e.slice(), e.pop(), e.pop(), g = new d.Point(e[e.length - 2], e[e.length - 1]);
                        var h = g.x + .5 * (f.x - g.x),
                            i = g.y + .5 * (f.y - g.y);
                        e.unshift(h, i), e.push(h, i)
                    }
                    var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = b.points,
                        H = b.indices,
                        I = e.length / 2,
                        J = e.length,
                        K = G.length / 6,
                        L = a.lineWidth / 2,
                        M = d.hex2rgb(a.lineColor),
                        N = a.lineAlpha,
                        O = M[0] * N,
                        P = M[1] * N,
                        Q = M[2] * N;
                    for(l = e[0], m = e[1], n = e[2], o = e[3], r = -(m - o), s = l - n, F = Math.sqrt(r * r + s * s), r /= F, s /= F, r *= L, s *= L, G.push(l - r, m - s, O, P, Q, N), G.push(l + r, m + s, O, P, Q, N), c = 1; I - 1 > c; c++) l = e[2 * (c - 1)], m = e[2 * (c - 1) + 1], n = e[2 * c], o = e[2 * c + 1], p = e[2 * (c + 1)], q = e[2 * (c + 1) + 1], r = -(m - o), s = l - n, F = Math.sqrt(r * r + s * s), r /= F, s /= F, r *= L, s *= L, t = -(o - q), u = n - p, F = Math.sqrt(t * t + u * u), t /= F, u /= F, t *= L, u *= L, x = -s + m - (-s + o), y = -r + n - (-r + l), z = (-r + l) * (-s + o) - (-r + n) * (-s + m), A = -u + q - (-u + o), B = -t + n - (-t + p), C = (-t + p) * (-u + o) - (-t + n) * (-u + q), D = x * B - A * y, Math.abs(D) < .1 ? (D += 10.1, G.push(n - r, o - s, O, P, Q, N), G.push(n + r, o + s, O, P, Q, N)) : (j = (y * C - B * z) / D, k = (A * z - x * C) / D, E = (j - n) * (j - n) + (k - o) + (k - o), E > 19600 ? (v = r - t, w = s - u, F = Math.sqrt(v * v + w * w), v /= F, w /= F, v *= L, w *= L, G.push(n - v, o - w), G.push(O, P, Q, N), G.push(n + v, o + w), G.push(O, P, Q, N), G.push(n - v, o - w), G.push(O, P, Q, N), J++) : (G.push(j, k), G.push(O, P, Q, N), G.push(n - (j - n), o - (k - o)), G.push(O, P, Q, N)));
                    for(l = e[2 * (I - 2)], m = e[2 * (I - 2) + 1], n = e[2 * (I - 1)], o = e[2 * (I - 1) + 1], r = -(m - o), s = l - n, F = Math.sqrt(r * r + s * s), r /= F, s /= F, r *= L, s *= L, G.push(n - r, o - s), G.push(O, P, Q, N), G.push(n + r, o + s), G.push(O, P, Q, N), H.push(K), c = 0; J > c; c++) H.push(K++);
                    H.push(K - 1)
                }
            }, d.WebGLGraphics.buildComplexPoly = function(a, b) {
                var c = a.points.slice();
                if(!(c.length < 6)) {
                    var e = b.indices;
                    b.points = c, b.alpha = a.fillAlpha, b.color = d.hex2rgb(a.fillColor);
                    for(var f, g, h = 1 / 0, i = -1 / 0, j = 1 / 0, k = -1 / 0, l = 0; l < c.length; l += 2) f = c[l], g = c[l + 1], h = h > f ? f : h, i = f > i ? f : i, j = j > g ? g : j, k = g > k ? g : k;
                    c.push(h, j, i, j, i, k, h, k);
                    var m = c.length / 2;
                    for(l = 0; m > l; l++) e.push(l)
                }
            }, d.WebGLGraphics.buildPoly = function(a, b) {
                var c = a.points;
                if(!(c.length < 6)) {
                    var e = b.points,
                        f = b.indices,
                        g = c.length / 2,
                        h = d.hex2rgb(a.fillColor),
                        i = a.fillAlpha,
                        j = h[0] * i,
                        k = h[1] * i,
                        l = h[2] * i,
                        m = d.PolyK.Triangulate(c),
                        n = e.length / 6,
                        o = 0;
                    for(o = 0; o < m.length; o += 3) f.push(m[o] + n), f.push(m[o] + n), f.push(m[o + 1] + n), f.push(m[o + 2] + n), f.push(m[o + 2] + n);
                    for(o = 0; g > o; o++) e.push(c[2 * o], c[2 * o + 1], j, k, l, i)
                }
            }, d.WebGLGraphics.graphicsDataPool = [], d.WebGLGraphicsData = function(a) {
                this.gl = a, this.color = [0, 0, 0], this.points = [], this.indices = [], this.lastIndex = 0, this.buffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0
            }, d.WebGLGraphicsData.prototype.reset = function() {
                this.points = [], this.indices = [], this.lastIndex = 0
            }, d.WebGLGraphicsData.prototype.upload = function() {
                var a = this.gl;
                this.glPoints = new Float32Array(this.points), a.bindBuffer(a.ARRAY_BUFFER, this.buffer), a.bufferData(a.ARRAY_BUFFER, this.glPoints, a.STATIC_DRAW), this.glIndicies = new Uint16Array(this.indices), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.glIndicies, a.STATIC_DRAW), this.dirty = !1
            }, d.glContexts = [], d.WebGLRenderer = function(a, b, c, e, f, g) {
                d.defaultRenderer || (d.sayHello("webGL"), d.defaultRenderer = this), this.type = d.WEBGL_RENDERER, this.transparent = !! e, this.preserveDrawingBuffer = g, this.width = a || 800, this.height = b || 600, this.view = c || document.createElement("canvas"), this.view.width = this.width, this.view.height = this.height, this.contextLost = this.handleContextLost.bind(this), this.contextRestoredLost = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.contextLost, !1), this.view.addEventListener("webglcontextrestored", this.contextRestoredLost, !1), this.options = {
                    alpha: this.transparent,
                    antialias: !! f,
                    premultipliedAlpha: !! e,
                    stencil: !0,
                    preserveDrawingBuffer: g
                };
                var h = null;
                if(["experimental-webgl", "webgl"].forEach(function(a) {
                    try {
                        h = h || this.view.getContext(a, this.options)
                    } catch(b) {}
                }, this), !h) throw new Error("This browser does not support webGL. Try using the canvas renderer" + this);
                this.gl = h, this.glContextId = h.id = d.WebGLRenderer.glContextId++, d.glContexts[this.glContextId] = h, d.blendModesWebGL || (d.blendModesWebGL = [], d.blendModesWebGL[d.blendModes.NORMAL] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.ADD] = [h.SRC_ALPHA, h.DST_ALPHA], d.blendModesWebGL[d.blendModes.MULTIPLY] = [h.DST_COLOR, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.SCREEN] = [h.SRC_ALPHA, h.ONE], d.blendModesWebGL[d.blendModes.OVERLAY] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.DARKEN] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.LIGHTEN] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.COLOR_DODGE] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.COLOR_BURN] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.HARD_LIGHT] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.SOFT_LIGHT] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.DIFFERENCE] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.EXCLUSION] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.HUE] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.SATURATION] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.COLOR] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], d.blendModesWebGL[d.blendModes.LUMINOSITY] = [h.ONE, h.ONE_MINUS_SRC_ALPHA]), this.projection = new d.Point, this.projection.x = this.width / 2, this.projection.y = -this.height / 2, this.offset = new d.Point(0, 0), this.resize(this.width, this.height), this.contextLost = !1, this.shaderManager = new d.WebGLShaderManager(h), this.spriteBatch = new d.WebGLSpriteBatch(h), this.maskManager = new d.WebGLMaskManager(h), this.filterManager = new d.WebGLFilterManager(h, this.transparent), this.stencilManager = new d.WebGLStencilManager(h), this.blendModeManager = new d.WebGLBlendModeManager(h), this.renderSession = {}, this.renderSession.gl = this.gl, this.renderSession.drawCount = 0, this.renderSession.shaderManager = this.shaderManager, this.renderSession.maskManager = this.maskManager, this.renderSession.filterManager = this.filterManager, this.renderSession.blendModeManager = this.blendModeManager, this.renderSession.spriteBatch = this.spriteBatch, this.renderSession.stencilManager = this.stencilManager, this.renderSession.renderer = this, h.useProgram(this.shaderManager.defaultShader.program), h.disable(h.DEPTH_TEST), h.disable(h.CULL_FACE), h.enable(h.BLEND), h.colorMask(!0, !0, !0, this.transparent)
            }, d.WebGLRenderer.prototype.constructor = d.WebGLRenderer, d.WebGLRenderer.prototype.render = function(a) {
                if(!this.contextLost) {
                    this.__stage !== a && (a.interactive && a.interactionManager.removeEvents(), this.__stage = a), d.WebGLRenderer.updateTextures(), a.updateTransform(), a._interactive && (a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this)));
                    var b = this.gl;
                    b.viewport(0, 0, this.width, this.height), b.bindFramebuffer(b.FRAMEBUFFER, null), this.transparent ? b.clearColor(0, 0, 0, 0) : b.clearColor(a.backgroundColorSplit[0], a.backgroundColorSplit[1], a.backgroundColorSplit[2], 1), b.clear(b.COLOR_BUFFER_BIT), this.renderDisplayObject(a, this.projection), a.interactive ? a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this)) : a._interactiveEventsAdded && (a._interactiveEventsAdded = !1, a.interactionManager.setTarget(this))
                }
            }, d.WebGLRenderer.prototype.renderDisplayObject = function(a, b, c) {
                this.renderSession.blendModeManager.setBlendMode(d.blendModes.NORMAL), this.renderSession.drawCount = 0, this.renderSession.currentBlendMode = 9999, this.renderSession.projection = b, this.renderSession.offset = this.offset, this.spriteBatch.begin(this.renderSession), this.filterManager.begin(this.renderSession, c), a._renderWebGL(this.renderSession), this.spriteBatch.end()
            }, d.WebGLRenderer.updateTextures = function() {
                var a = 0;
                for(a = 0; a < d.Texture.frameUpdates.length; a++) d.WebGLRenderer.updateTextureFrame(d.Texture.frameUpdates[a]);
                for(a = 0; a < d.texturesToDestroy.length; a++) d.WebGLRenderer.destroyTexture(d.texturesToDestroy[a]);
                d.texturesToUpdate.length = 0, d.texturesToDestroy.length = 0, d.Texture.frameUpdates.length = 0
            }, d.WebGLRenderer.destroyTexture = function(a) {
                for(var b = a._glTextures.length - 1; b >= 0; b--) {
                    var c = a._glTextures[b],
                        e = d.glContexts[b];
                    e && c && e.deleteTexture(c)
                }
                a._glTextures.length = 0
            }, d.WebGLRenderer.updateTextureFrame = function(a) {
                a._updateWebGLuvs()
            }, d.WebGLRenderer.prototype.resize = function(a, b) {
                this.width = a, this.height = b, this.view.width = a, this.view.height = b, this.gl.viewport(0, 0, this.width, this.height), this.projection.x = this.width / 2, this.projection.y = -this.height / 2
            }, d.createWebGLTexture = function(a, b) {
                return a.hasLoaded && (a._glTextures[b.id] = b.createTexture(), b.bindTexture(b.TEXTURE_2D, a._glTextures[b.id]), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultipliedAlpha), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a.source), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, a.scaleMode === d.scaleModes.LINEAR ? b.LINEAR : b.NEAREST), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, a.scaleMode === d.scaleModes.LINEAR ? b.LINEAR : b.NEAREST), a._powerOf2 ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.REPEAT)) : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE)), b.bindTexture(b.TEXTURE_2D, null), a._dirty[b.id] = !1), a._glTextures[b.id]
            }, d.updateWebGLTexture = function(a, b) {
                a._glTextures[b.id] && (b.bindTexture(b.TEXTURE_2D, a._glTextures[b.id]), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultipliedAlpha), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a.source), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, a.scaleMode === d.scaleModes.LINEAR ? b.LINEAR : b.NEAREST), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, a.scaleMode === d.scaleModes.LINEAR ? b.LINEAR : b.NEAREST), a._powerOf2 ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.REPEAT), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.REPEAT)) : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE)), a._dirty[b.id] = !1)
            }, d.WebGLRenderer.prototype.handleContextLost = function(a) {
                a.preventDefault(), this.contextLost = !0
            }, d.WebGLRenderer.prototype.handleContextRestored = function() {
                try {
                    this.gl = this.view.getContext("experimental-webgl", this.options)
                } catch(a) {
                    try {
                        this.gl = this.view.getContext("webgl", this.options)
                    } catch(b) {
                        throw new Error(" This browser does not support webGL. Try using the canvas renderer" + this)
                    }
                }
                var c = this.gl;
                c.id = d.WebGLRenderer.glContextId++, this.shaderManager.setContext(c), this.spriteBatch.setContext(c), this.primitiveBatch.setContext(c), this.maskManager.setContext(c), this.filterManager.setContext(c), this.renderSession.gl = this.gl, c.disable(c.DEPTH_TEST), c.disable(c.CULL_FACE), c.enable(c.BLEND), c.colorMask(!0, !0, !0, this.transparent), this.gl.viewport(0, 0, this.width, this.height);
                for(var e in d.TextureCache) {
                    var f = d.TextureCache[e].baseTexture;
                    f._glTextures = []
                }
                this.contextLost = !1
            }, d.WebGLRenderer.prototype.destroy = function() {
                this.view.removeEventListener("webglcontextlost", this.contextLost), this.view.removeEventListener("webglcontextrestored", this.contextRestoredLost), d.glContexts[this.glContextId] = null, this.projection = null, this.offset = null, this.shaderManager.destroy(), this.spriteBatch.destroy(), this.primitiveBatch.destroy(), this.maskManager.destroy(), this.filterManager.destroy(), this.shaderManager = null, this.spriteBatch = null, this.maskManager = null, this.filterManager = null, this.gl = null, this.renderSession = null
            }, d.WebGLRenderer.glContextId = 0, d.WebGLBlendModeManager = function(a) {
                this.gl = a, this.currentBlendMode = 99999
            }, d.WebGLBlendModeManager.prototype.setBlendMode = function(a) {
                if(this.currentBlendMode === a) return !1;
                this.currentBlendMode = a;
                var b = d.blendModesWebGL[this.currentBlendMode];
                return this.gl.blendFunc(b[0], b[1]), !0
            }, d.WebGLBlendModeManager.prototype.destroy = function() {
                this.gl = null
            }, d.WebGLMaskManager = function(a) {
                this.maskStack = [], this.maskPosition = 0, this.setContext(a), this.reverse = !1, this.count = 0
            }, d.WebGLMaskManager.prototype.setContext = function(a) {
                this.gl = a
            }, d.WebGLMaskManager.prototype.pushMask = function(a, b) {
                var c = b.gl;
                a.dirty && d.WebGLGraphics.updateGraphics(a, c), a._webGL[c.id].data.length && b.stencilManager.pushStencil(a, a._webGL[c.id].data[0], b)
            }, d.WebGLMaskManager.prototype.popMask = function(a, b) {
                var c = this.gl;
                b.stencilManager.popStencil(a, a._webGL[c.id].data[0], b)
            }, d.WebGLMaskManager.prototype.destroy = function() {
                this.maskStack = null, this.gl = null
            }, d.WebGLStencilManager = function(a) {
                this.stencilStack = [], this.setContext(a), this.reverse = !0, this.count = 0
            }, d.WebGLStencilManager.prototype.setContext = function(a) {
                this.gl = a
            }, d.WebGLStencilManager.prototype.pushStencil = function(a, b, c) {
                var d = this.gl;
                this.bindGraphics(a, b, c), 0 === this.stencilStack.length && (d.enable(d.STENCIL_TEST), d.clear(d.STENCIL_BUFFER_BIT), this.reverse = !0, this.count = 0), this.stencilStack.push(b);
                var e = this.count;
                d.colorMask(!1, !1, !1, !1), d.stencilFunc(d.ALWAYS, 0, 255), d.stencilOp(d.KEEP, d.KEEP, d.INVERT), 1 === b.mode ? (d.drawElements(d.TRIANGLE_FAN, b.indices.length - 4, d.UNSIGNED_SHORT, 0), this.reverse ? (d.stencilFunc(d.EQUAL, 255 - e, 255), d.stencilOp(d.KEEP, d.KEEP, d.DECR)) : (d.stencilFunc(d.EQUAL, e, 255), d.stencilOp(d.KEEP, d.KEEP, d.INCR)), d.drawElements(d.TRIANGLE_FAN, 4, d.UNSIGNED_SHORT, 2 * (b.indices.length - 4)), this.reverse ? d.stencilFunc(d.EQUAL, 255 - (e + 1), 255) : d.stencilFunc(d.EQUAL, e + 1, 255), this.reverse = !this.reverse) : (this.reverse ? (d.stencilFunc(d.EQUAL, e, 255), d.stencilOp(d.KEEP, d.KEEP, d.INCR)) : (d.stencilFunc(d.EQUAL, 255 - e, 255), d.stencilOp(d.KEEP, d.KEEP, d.DECR)), d.drawElements(d.TRIANGLE_STRIP, b.indices.length, d.UNSIGNED_SHORT, 0), this.reverse ? d.stencilFunc(d.EQUAL, e + 1, 255) : d.stencilFunc(d.EQUAL, 255 - (e + 1), 255)), d.colorMask(!0, !0, !0, !0), d.stencilOp(d.KEEP, d.KEEP, d.KEEP), this.count++
            }, d.WebGLStencilManager.prototype.bindGraphics = function(a, b, c) {
                this._currentGraphics = a;
                var e, f = this.gl,
                    g = c.projection,
                    h = c.offset;
                1 === b.mode ? (e = c.shaderManager.complexPrimativeShader, c.shaderManager.setShader(e), f.uniformMatrix3fv(e.translationMatrix, !1, a.worldTransform.toArray(!0)), f.uniform2f(e.projectionVector, g.x, -g.y), f.uniform2f(e.offsetVector, -h.x, -h.y), f.uniform3fv(e.tintColor, d.hex2rgb(a.tint)), f.uniform3fv(e.color, b.color), f.uniform1f(e.alpha, a.worldAlpha * b.alpha), f.bindBuffer(f.ARRAY_BUFFER, b.buffer), f.vertexAttribPointer(e.aVertexPosition, 2, f.FLOAT, !1, 8, 0), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, b.indexBuffer)) : (e = c.shaderManager.primitiveShader, c.shaderManager.setShader(e), f.uniformMatrix3fv(e.translationMatrix, !1, a.worldTransform.toArray(!0)), f.uniform2f(e.projectionVector, g.x, -g.y), f.uniform2f(e.offsetVector, -h.x, -h.y), f.uniform3fv(e.tintColor, d.hex2rgb(a.tint)), f.uniform1f(e.alpha, a.worldAlpha), f.bindBuffer(f.ARRAY_BUFFER, b.buffer), f.vertexAttribPointer(e.aVertexPosition, 2, f.FLOAT, !1, 24, 0), f.vertexAttribPointer(e.colorAttribute, 4, f.FLOAT, !1, 24, 8), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, b.indexBuffer))
            }, d.WebGLStencilManager.prototype.popStencil = function(a, b, c) {
                var d = this.gl;
                if(this.stencilStack.pop(), this.count--, 0 === this.stencilStack.length) d.disable(d.STENCIL_TEST);
                else {
                    var e = this.count;
                    this.bindGraphics(a, b, c), d.colorMask(!1, !1, !1, !1), 1 === b.mode ? (this.reverse = !this.reverse, this.reverse ? (d.stencilFunc(d.EQUAL, 255 - (e + 1), 255), d.stencilOp(d.KEEP, d.KEEP, d.INCR)) : (d.stencilFunc(d.EQUAL, e + 1, 255), d.stencilOp(d.KEEP, d.KEEP, d.DECR)), d.drawElements(d.TRIANGLE_FAN, 4, d.UNSIGNED_SHORT, 2 * (b.indices.length - 4)), d.stencilFunc(d.ALWAYS, 0, 255), d.stencilOp(d.KEEP, d.KEEP, d.INVERT), d.drawElements(d.TRIANGLE_FAN, b.indices.length - 4, d.UNSIGNED_SHORT, 0), this.reverse ? d.stencilFunc(d.EQUAL, e, 255) : d.stencilFunc(d.EQUAL, 255 - e, 255)) : (this.reverse ? (d.stencilFunc(d.EQUAL, e + 1, 255), d.stencilOp(d.KEEP, d.KEEP, d.DECR)) : (d.stencilFunc(d.EQUAL, 255 - (e + 1), 255), d.stencilOp(d.KEEP, d.KEEP, d.INCR)), d.drawElements(d.TRIANGLE_STRIP, b.indices.length, d.UNSIGNED_SHORT, 0), this.reverse ? d.stencilFunc(d.EQUAL, e, 255) : d.stencilFunc(d.EQUAL, 255 - e, 255)), d.colorMask(!0, !0, !0, !0), d.stencilOp(d.KEEP, d.KEEP, d.KEEP)
                }
            }, d.WebGLStencilManager.prototype.destroy = function() {
                this.maskStack = null, this.gl = null
            }, d.WebGLShaderManager = function(a) {
                this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [], this.shaderMap = [];
                for(var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
                this.setContext(a)
            }, d.WebGLShaderManager.prototype.setContext = function(a) {
                this.gl = a, this.primitiveShader = new d.PrimitiveShader(a), this.complexPrimativeShader = new d.ComplexPrimitiveShader(a), this.defaultShader = new d.PixiShader(a), this.fastShader = new d.PixiFastShader(a), this.stripShader = new d.StripShader(a), this.setShader(this.defaultShader)
            }, d.WebGLShaderManager.prototype.setAttribs = function(a) {
                var b;
                for(b = 0; b < this.tempAttribState.length; b++) this.tempAttribState[b] = !1;
                for(b = 0; b < a.length; b++) {
                    var c = a[b];
                    this.tempAttribState[c] = !0
                }
                var d = this.gl;
                for(b = 0; b < this.attribState.length; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? d.enableVertexAttribArray(b) : d.disableVertexAttribArray(b))
            }, d.WebGLShaderManager.prototype.setShader = function(a) {
                return this._currentId === a._UID ? !1 : (this._currentId = a._UID, this.currentShader = a, this.gl.useProgram(a.program), this.setAttribs(a.attributes), !0)
            }, d.WebGLShaderManager.prototype.destroy = function() {
                this.attribState = null, this.tempAttribState = null, this.primitiveShader.destroy(), this.defaultShader.destroy(), this.fastShader.destroy(), this.stripShader.destroy(), this.gl = null
            }, d.WebGLSpriteBatch = function(a) {
                this.vertSize = 6, this.size = 2e3;
                var b = 4 * this.size * this.vertSize,
                    c = 6 * this.size;
                this.vertices = new Float32Array(b), this.indices = new Uint16Array(c), this.lastIndexCount = 0;
                for(var d = 0, e = 0; c > d; d += 6, e += 4) this.indices[d + 0] = e + 0, this.indices[d + 1] = e + 1, this.indices[d + 2] = e + 2, this.indices[d + 3] = e + 0, this.indices[d + 4] = e + 2, this.indices[d + 5] = e + 3;
                this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.setContext(a), this.dirty = !0, this.textures = [], this.blendModes = []
            }, d.WebGLSpriteBatch.prototype.setContext = function(a) {
                this.gl = a, this.vertexBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW), this.currentBlendMode = 99999
            }, d.WebGLSpriteBatch.prototype.begin = function(a) {
                this.renderSession = a, this.shader = this.renderSession.shaderManager.defaultShader, this.start()
            }, d.WebGLSpriteBatch.prototype.end = function() {
                this.flush()
            }, d.WebGLSpriteBatch.prototype.render = function(a) {
                var b = a.texture;
                this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = b.baseTexture);
                var c = b._uvs;
                if(c) {
                    var d, e, f, g, h = a.worldAlpha,
                        i = a.tint,
                        j = this.vertices,
                        k = a.anchor.x,
                        l = a.anchor.y;
                    if(b.trim) {
                        var m = b.trim;
                        e = m.x - k * m.width, d = e + b.crop.width, g = m.y - l * m.height, f = g + b.crop.height
                    } else d = b.frame.width * (1 - k), e = b.frame.width * -k, f = b.frame.height * (1 - l), g = b.frame.height * -l;
                    var n = 4 * this.currentBatchSize * this.vertSize,
                        o = a.worldTransform,
                        p = o.a,
                        q = o.c,
                        r = o.b,
                        s = o.d,
                        t = o.tx,
                        u = o.ty;
                    j[n++] = p * e + r * g + t, j[n++] = s * g + q * e + u, j[n++] = c.x0, j[n++] = c.y0, j[n++] = h, j[n++] = i, j[n++] = p * d + r * g + t, j[n++] = s * g + q * d + u, j[n++] = c.x1, j[n++] = c.y1, j[n++] = h, j[n++] = i, j[n++] = p * d + r * f + t, j[n++] = s * f + q * d + u, j[n++] = c.x2, j[n++] = c.y2, j[n++] = h, j[n++] = i, j[n++] = p * e + r * f + t, j[n++] = s * f + q * e + u, j[n++] = c.x3, j[n++] = c.y3, j[n++] = h, j[n++] = i, this.textures[this.currentBatchSize] = a.texture.baseTexture, this.blendModes[this.currentBatchSize] = a.blendMode, this.currentBatchSize++
                }
            }, d.WebGLSpriteBatch.prototype.renderTilingSprite = function(a) {
                var b = a.tilingTexture;
                this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = b.baseTexture), a._uvs || (a._uvs = new d.TextureUvs);
                var c = a._uvs;
                a.tilePosition.x %= b.baseTexture.width * a.tileScaleOffset.x, a.tilePosition.y %= b.baseTexture.height * a.tileScaleOffset.y;
                var e = a.tilePosition.x / (b.baseTexture.width * a.tileScaleOffset.x),
                    f = a.tilePosition.y / (b.baseTexture.height * a.tileScaleOffset.y),
                    g = a.width / b.baseTexture.width / (a.tileScale.x * a.tileScaleOffset.x),
                    h = a.height / b.baseTexture.height / (a.tileScale.y * a.tileScaleOffset.y);
                c.x0 = 0 - e, c.y0 = 0 - f, c.x1 = 1 * g - e, c.y1 = 0 - f, c.x2 = 1 * g - e, c.y2 = 1 * h - f, c.x3 = 0 - e, c.y3 = 1 * h - f;
                var i = a.worldAlpha,
                    j = a.tint,
                    k = this.vertices,
                    l = a.width,
                    m = a.height,
                    n = a.anchor.x,
                    o = a.anchor.y,
                    p = l * (1 - n),
                    q = l * -n,
                    r = m * (1 - o),
                    s = m * -o,
                    t = 4 * this.currentBatchSize * this.vertSize,
                    u = a.worldTransform,
                    v = u.a,
                    w = u.c,
                    x = u.b,
                    y = u.d,
                    z = u.tx,
                    A = u.ty;
                k[t++] = v * q + x * s + z, k[t++] = y * s + w * q + A, k[t++] = c.x0, k[t++] = c.y0, k[t++] = i, k[t++] = j, k[t++] = v * p + x * s + z, k[t++] = y * s + w * p + A, k[t++] = c.x1, k[t++] = c.y1, k[t++] = i, k[t++] = j, k[t++] = v * p + x * r + z, k[t++] = y * r + w * p + A, k[t++] = c.x2, k[t++] = c.y2, k[t++] = i, k[t++] = j, k[t++] = v * q + x * r + z, k[t++] = y * r + w * q + A, k[t++] = c.x3, k[t++] = c.y3, k[t++] = i, k[t++] = j, this.textures[this.currentBatchSize] = b.baseTexture, this.blendModes[this.currentBatchSize] = a.blendMode, this.currentBatchSize++
            }, d.WebGLSpriteBatch.prototype.flush = function() {
                if(0 !== this.currentBatchSize) {
                    var a = this.gl;
                    if(this.renderSession.shaderManager.setShader(this.renderSession.shaderManager.defaultShader), this.dirty) {
                        this.dirty = !1, a.activeTexture(a.TEXTURE0), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                        var b = this.renderSession.projection;
                        a.uniform2f(this.shader.projectionVector, b.x, b.y);
                        var c = 4 * this.vertSize;
                        a.vertexAttribPointer(this.shader.aVertexPosition, 2, a.FLOAT, !1, c, 0), a.vertexAttribPointer(this.shader.aTextureCoord, 2, a.FLOAT, !1, c, 8), a.vertexAttribPointer(this.shader.colorAttribute, 2, a.FLOAT, !1, c, 16)
                    }
                    if(this.currentBatchSize > .5 * this.size) a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertices);
                    else {
                        var d = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                        a.bufferSubData(a.ARRAY_BUFFER, 0, d)
                    }
                    for(var e, f, g = 0, h = 0, i = null, j = this.renderSession.blendModeManager.currentBlendMode, k = 0, l = this.currentBatchSize; l > k; k++) e = this.textures[k], f = this.blendModes[k], (i !== e || j !== f) && (this.renderBatch(i, g, h), h = k, g = 0, i = e, j = f, this.renderSession.blendModeManager.setBlendMode(j)), g++;
                    this.renderBatch(i, g, h), this.currentBatchSize = 0
                }
            }, d.WebGLSpriteBatch.prototype.renderBatch = function(a, b, c) {
                if(0 !== b) {
                    var e = this.gl;
                    e.bindTexture(e.TEXTURE_2D, a._glTextures[e.id] || d.createWebGLTexture(a, e)), a._dirty[e.id] && d.updateWebGLTexture(this.currentBaseTexture, e), e.drawElements(e.TRIANGLES, 6 * b, e.UNSIGNED_SHORT, 6 * c * 2), this.renderSession.drawCount++
                }
            }, d.WebGLSpriteBatch.prototype.stop = function() {
                this.flush()
            }, d.WebGLSpriteBatch.prototype.start = function() {
                this.dirty = !0
            }, d.WebGLSpriteBatch.prototype.destroy = function() {
                this.vertices = null, this.indices = null, this.gl.deleteBuffer(this.vertexBuffer), this.gl.deleteBuffer(this.indexBuffer), this.currentBaseTexture = null, this.gl = null
            }, d.WebGLFastSpriteBatch = function(a) {
                this.vertSize = 10, this.maxSize = 6e3, this.size = this.maxSize;
                var b = 4 * this.size * this.vertSize,
                    c = 6 * this.maxSize;
                this.vertices = new Float32Array(b), this.indices = new Uint16Array(c), this.vertexBuffer = null, this.indexBuffer = null, this.lastIndexCount = 0;
                for(var d = 0, e = 0; c > d; d += 6, e += 4) this.indices[d + 0] = e + 0, this.indices[d + 1] = e + 1, this.indices[d + 2] = e + 2, this.indices[d + 3] = e + 0, this.indices[d + 4] = e + 2, this.indices[d + 5] = e + 3;
                this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.currentBlendMode = 0, this.renderSession = null, this.shader = null, this.matrix = null, this.setContext(a)
            }, d.WebGLFastSpriteBatch.prototype.setContext = function(a) {
                this.gl = a, this.vertexBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW)
            }, d.WebGLFastSpriteBatch.prototype.begin = function(a, b) {
                this.renderSession = b, this.shader = this.renderSession.shaderManager.fastShader, this.matrix = a.worldTransform.toArray(!0), this.start()
            }, d.WebGLFastSpriteBatch.prototype.end = function() {
                this.flush()
            }, d.WebGLFastSpriteBatch.prototype.render = function(a) {
                var b = a.children,
                    c = b[0];
                if(c.texture._uvs) {
                    this.currentBaseTexture = c.texture.baseTexture, c.blendMode !== this.renderSession.blendModeManager.currentBlendMode && (this.flush(), this.renderSession.blendModeManager.setBlendMode(c.blendMode));
                    for(var d = 0, e = b.length; e > d; d++) this.renderSprite(b[d]);
                    this.flush()
                }
            }, d.WebGLFastSpriteBatch.prototype.renderSprite = function(a) {
                if(a.visible && (a.texture.baseTexture === this.currentBaseTexture || (this.flush(), this.currentBaseTexture = a.texture.baseTexture, a.texture._uvs))) {
                    var b, c, d, e, f, g, h, i, j = this.vertices;
                    if(b = a.texture._uvs, c = a.texture.frame.width, d = a.texture.frame.height, a.texture.trim) {
                        var k = a.texture.trim;
                        f = k.x - a.anchor.x * k.width, e = f + a.texture.crop.width, h = k.y - a.anchor.y * k.height, g = h + a.texture.crop.height
                    } else e = a.texture.frame.width * (1 - a.anchor.x), f = a.texture.frame.width * -a.anchor.x, g = a.texture.frame.height * (1 - a.anchor.y), h = a.texture.frame.height * -a.anchor.y;
                    i = 4 * this.currentBatchSize * this.vertSize, j[i++] = f, j[i++] = h, j[i++] = a.position.x, j[i++] = a.position.y, j[i++] = a.scale.x, j[i++] = a.scale.y, j[i++] = a.rotation, j[i++] = b.x0, j[i++] = b.y1, j[i++] = a.alpha, j[i++] = e, j[i++] = h, j[i++] = a.position.x, j[i++] = a.position.y, j[i++] = a.scale.x, j[i++] = a.scale.y, j[i++] = a.rotation, j[i++] = b.x1, j[i++] = b.y1, j[i++] = a.alpha, j[i++] = e, j[i++] = g, j[i++] = a.position.x, j[i++] = a.position.y, j[i++] = a.scale.x, j[i++] = a.scale.y, j[i++] = a.rotation, j[i++] = b.x2, j[i++] = b.y2, j[i++] = a.alpha, j[i++] = f, j[i++] = g, j[i++] = a.position.x, j[i++] = a.position.y, j[i++] = a.scale.x, j[i++] = a.scale.y, j[i++] = a.rotation, j[i++] = b.x3, j[i++] = b.y3, j[i++] = a.alpha, this.currentBatchSize++, this.currentBatchSize >= this.size && this.flush()
                }
            }, d.WebGLFastSpriteBatch.prototype.flush = function() {
                if(0 !== this.currentBatchSize) {
                    var a = this.gl;
                    if(this.currentBaseTexture._glTextures[a.id] || d.createWebGLTexture(this.currentBaseTexture, a), a.bindTexture(a.TEXTURE_2D, this.currentBaseTexture._glTextures[a.id]), this.currentBatchSize > .5 * this.size) a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertices);
                    else {
                        var b = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                        a.bufferSubData(a.ARRAY_BUFFER, 0, b)
                    }
                    a.drawElements(a.TRIANGLES, 6 * this.currentBatchSize, a.UNSIGNED_SHORT, 0), this.currentBatchSize = 0, this.renderSession.drawCount++
                }
            }, d.WebGLFastSpriteBatch.prototype.stop = function() {
                this.flush()
            }, d.WebGLFastSpriteBatch.prototype.start = function() {
                var a = this.gl;
                a.activeTexture(a.TEXTURE0), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var b = this.renderSession.projection;
                a.uniform2f(this.shader.projectionVector, b.x, b.y), a.uniformMatrix3fv(this.shader.uMatrix, !1, this.matrix);
                var c = 4 * this.vertSize;
                a.vertexAttribPointer(this.shader.aVertexPosition, 2, a.FLOAT, !1, c, 0), a.vertexAttribPointer(this.shader.aPositionCoord, 2, a.FLOAT, !1, c, 8), a.vertexAttribPointer(this.shader.aScale, 2, a.FLOAT, !1, c, 16), a.vertexAttribPointer(this.shader.aRotation, 1, a.FLOAT, !1, c, 24), a.vertexAttribPointer(this.shader.aTextureCoord, 2, a.FLOAT, !1, c, 28), a.vertexAttribPointer(this.shader.colorAttribute, 1, a.FLOAT, !1, c, 36)
            }, d.WebGLFilterManager = function(a, b) {
                this.transparent = b, this.filterStack = [], this.offsetX = 0, this.offsetY = 0, this.setContext(a)
            }, d.WebGLFilterManager.prototype.setContext = function(a) {
                this.gl = a, this.texturePool = [], this.initShaderBuffers()
            }, d.WebGLFilterManager.prototype.begin = function(a, b) {
                this.renderSession = a, this.defaultShader = a.shaderManager.defaultShader;
                var c = this.renderSession.projection;
                this.width = 2 * c.x, this.height = 2 * -c.y, this.buffer = b
            }, d.WebGLFilterManager.prototype.pushFilter = function(a) {
                var b = this.gl,
                    c = this.renderSession.projection,
                    e = this.renderSession.offset;
                a._filterArea = a.target.filterArea || a.target.getBounds(), this.filterStack.push(a);
                var f = a.filterPasses[0];
                this.offsetX += a._filterArea.x, this.offsetY += a._filterArea.y;
                var g = this.texturePool.pop();
                g ? g.resize(this.width, this.height) : g = new d.FilterTexture(this.gl, this.width, this.height), b.bindTexture(b.TEXTURE_2D, g.texture);
                var h = a._filterArea,
                    i = f.padding;
                h.x -= i, h.y -= i, h.width += 2 * i, h.height += 2 * i, h.x < 0 && (h.x = 0), h.width > this.width && (h.width = this.width), h.y < 0 && (h.y = 0), h.height > this.height && (h.height = this.height), b.bindFramebuffer(b.FRAMEBUFFER, g.frameBuffer), b.viewport(0, 0, h.width, h.height), c.x = h.width / 2, c.y = -h.height / 2, e.x = -h.x, e.y = -h.y, this.renderSession.shaderManager.setShader(this.defaultShader), b.uniform2f(this.defaultShader.projectionVector, h.width / 2, -h.height / 2), b.uniform2f(this.defaultShader.offsetVector, -h.x, -h.y), b.colorMask(!0, !0, !0, !0), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), a._glFilterTexture = g
            }, d.WebGLFilterManager.prototype.popFilter = function() {
                var a = this.gl,
                    b = this.filterStack.pop(),
                    c = b._filterArea,
                    e = b._glFilterTexture,
                    f = this.renderSession.projection,
                    g = this.renderSession.offset;
                if(b.filterPasses.length > 1) {
                    a.viewport(0, 0, c.width, c.height), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = 0, this.vertexArray[1] = c.height, this.vertexArray[2] = c.width, this.vertexArray[3] = c.height, this.vertexArray[4] = 0, this.vertexArray[5] = 0, this.vertexArray[6] = c.width, this.vertexArray[7] = 0, a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertexArray), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = c.width / this.width, this.uvArray[5] = c.height / this.height, this.uvArray[6] = c.width / this.width, this.uvArray[7] = c.height / this.height, a.bufferSubData(a.ARRAY_BUFFER, 0, this.uvArray);
                    var h = e,
                        i = this.texturePool.pop();
                    i || (i = new d.FilterTexture(this.gl, this.width, this.height)), i.resize(this.width, this.height), a.bindFramebuffer(a.FRAMEBUFFER, i.frameBuffer), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.BLEND);
                    for(var j = 0; j < b.filterPasses.length - 1; j++) {
                        var k = b.filterPasses[j];
                        a.bindFramebuffer(a.FRAMEBUFFER, i.frameBuffer), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, h.texture), this.applyFilterPass(k, c, c.width, c.height);
                        var l = h;
                        h = i, i = l
                    }
                    a.enable(a.BLEND), e = h, this.texturePool.push(i)
                }
                var m = b.filterPasses[b.filterPasses.length - 1];
                this.offsetX -= c.x, this.offsetY -= c.y;
                var n = this.width,
                    o = this.height,
                    p = 0,
                    q = 0,
                    r = this.buffer;
                if(0 === this.filterStack.length) a.colorMask(!0, !0, !0, !0);
                else {
                    var s = this.filterStack[this.filterStack.length - 1];
                    c = s._filterArea, n = c.width, o = c.height, p = c.x, q = c.y, r = s._glFilterTexture.frameBuffer
                }
                f.x = n / 2, f.y = -o / 2, g.x = p, g.y = q, c = b._filterArea;
                var t = c.x - p,
                    u = c.y - q;
                a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = t, this.vertexArray[1] = u + c.height, this.vertexArray[2] = t + c.width, this.vertexArray[3] = u + c.height, this.vertexArray[4] = t, this.vertexArray[5] = u, this.vertexArray[6] = t + c.width, this.vertexArray[7] = u, a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertexArray), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = c.width / this.width, this.uvArray[5] = c.height / this.height, this.uvArray[6] = c.width / this.width, this.uvArray[7] = c.height / this.height, a.bufferSubData(a.ARRAY_BUFFER, 0, this.uvArray), a.viewport(0, 0, n, o), a.bindFramebuffer(a.FRAMEBUFFER, r), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, e.texture), this.applyFilterPass(m, c, n, o), this.renderSession.shaderManager.setShader(this.defaultShader), a.uniform2f(this.defaultShader.projectionVector, n / 2, -o / 2), a.uniform2f(this.defaultShader.offsetVector, -p, -q), this.texturePool.push(e), b._glFilterTexture = null
            }, d.WebGLFilterManager.prototype.applyFilterPass = function(a, b, c, e) {
                var f = this.gl,
                    g = a.shaders[f.id];
                g || (g = new d.PixiShader(f), g.fragmentSrc = a.fragmentSrc, g.uniforms = a.uniforms, g.init(), a.shaders[f.id] = g), this.renderSession.shaderManager.setShader(g), f.uniform2f(g.projectionVector, c / 2, -e / 2), f.uniform2f(g.offsetVector, 0, 0), a.uniforms.dimensions && (a.uniforms.dimensions.value[0] = this.width, a.uniforms.dimensions.value[1] = this.height, a.uniforms.dimensions.value[2] = this.vertexArray[0], a.uniforms.dimensions.value[3] = this.vertexArray[5]), g.syncUniforms(), f.bindBuffer(f.ARRAY_BUFFER, this.vertexBuffer), f.vertexAttribPointer(g.aVertexPosition, 2, f.FLOAT, !1, 0, 0), f.bindBuffer(f.ARRAY_BUFFER, this.uvBuffer), f.vertexAttribPointer(g.aTextureCoord, 2, f.FLOAT, !1, 0, 0), f.bindBuffer(f.ARRAY_BUFFER, this.colorBuffer), f.vertexAttribPointer(g.colorAttribute, 2, f.FLOAT, !1, 0, 0), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, this.indexBuffer), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0), this.renderSession.drawCount++
            }, d.WebGLFilterManager.prototype.initShaderBuffers = function() {
                var a = this.gl;
                this.vertexBuffer = a.createBuffer(), this.uvBuffer = a.createBuffer(), this.colorBuffer = a.createBuffer(), this.indexBuffer = a.createBuffer(), this.vertexArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bufferData(a.ARRAY_BUFFER, this.vertexArray, a.STATIC_DRAW), this.uvArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), a.bufferData(a.ARRAY_BUFFER, this.uvArray, a.STATIC_DRAW), this.colorArray = new Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]), a.bindBuffer(a.ARRAY_BUFFER, this.colorBuffer), a.bufferData(a.ARRAY_BUFFER, this.colorArray, a.STATIC_DRAW), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), a.STATIC_DRAW)
            }, d.WebGLFilterManager.prototype.destroy = function() {
                var a = this.gl;
                this.filterStack = null, this.offsetX = 0, this.offsetY = 0;
                for(var b = 0; b < this.texturePool.length; b++) this.texturePool[b].destroy();
                this.texturePool = null, a.deleteBuffer(this.vertexBuffer), a.deleteBuffer(this.uvBuffer), a.deleteBuffer(this.colorBuffer), a.deleteBuffer(this.indexBuffer)
            }, d.FilterTexture = function(a, b, c, e) {
                this.gl = a, this.frameBuffer = a.createFramebuffer(), this.texture = a.createTexture(), e = e || d.scaleModes.DEFAULT, a.bindTexture(a.TEXTURE_2D, this.texture), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, e === d.scaleModes.LINEAR ? a.LINEAR : a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, e === d.scaleModes.LINEAR ? a.LINEAR : a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer), a.bindFramebuffer(a.FRAMEBUFFER, this.frameBuffer), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.texture, 0), this.renderBuffer = a.createRenderbuffer(), a.bindRenderbuffer(a.RENDERBUFFER, this.renderBuffer), a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, this.renderBuffer), this.resize(b, c)
            }, d.FilterTexture.prototype.clear = function() {
                var a = this.gl;
                a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT)
            }, d.FilterTexture.prototype.resize = function(a, b) {
                if(this.width !== a || this.height !== b) {
                    this.width = a, this.height = b;
                    var c = this.gl;
                    c.bindTexture(c.TEXTURE_2D, this.texture), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, a, b, 0, c.RGBA, c.UNSIGNED_BYTE, null), c.bindRenderbuffer(c.RENDERBUFFER, this.renderBuffer), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_STENCIL, a, b)
                }
            }, d.FilterTexture.prototype.destroy = function() {
                var a = this.gl;
                a.deleteFramebuffer(this.frameBuffer), a.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null
            }, d.CanvasMaskManager = function() {}, d.CanvasMaskManager.prototype.pushMask = function(a, b) {
                b.save();
                var c = a.alpha,
                    e = a.worldTransform;
                b.setTransform(e.a, e.c, e.b, e.d, e.tx, e.ty), d.CanvasGraphics.renderGraphicsMask(a, b), b.clip(), a.worldAlpha = c
            }, d.CanvasMaskManager.prototype.popMask = function(a) {
                a.restore()
            }, d.CanvasTinter = function() {}, d.CanvasTinter.getTintedTexture = function(a, b) {
                var c = a.texture;
                b = d.CanvasTinter.roundColor(b);
                var e = "#" + ("00000" + (0 | b).toString(16)).substr(-6);
                if(c.tintCache = c.tintCache || {}, c.tintCache[e]) return c.tintCache[e];
                var f = d.CanvasTinter.canvas || document.createElement("canvas");
                if(d.CanvasTinter.tintMethod(c, b, f), d.CanvasTinter.convertTintToImage) {
                    var g = new Image;
                    g.src = f.toDataURL(), c.tintCache[e] = g
                } else c.tintCache[e] = f, d.CanvasTinter.canvas = null;
                return f
            }, d.CanvasTinter.tintWithMultiply = function(a, b, c) {
                var d = c.getContext("2d"),
                    e = a.frame;
                c.width = e.width, c.height = e.height, d.fillStyle = "#" + ("00000" + (0 | b).toString(16)).substr(-6), d.fillRect(0, 0, e.width, e.height), d.globalCompositeOperation = "multiply", d.drawImage(a.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height), d.globalCompositeOperation = "destination-atop", d.drawImage(a.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height)
            }, d.CanvasTinter.tintWithOverlay = function(a, b, c) {
                var d = c.getContext("2d"),
                    e = a.frame;
                c.width = e.width, c.height = e.height, d.globalCompositeOperation = "copy", d.fillStyle = "#" + ("00000" + (0 | b).toString(16)).substr(-6), d.fillRect(0, 0, e.width, e.height), d.globalCompositeOperation = "destination-atop", d.drawImage(a.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height)
            }, d.CanvasTinter.tintWithPerPixel = function(a, b, c) {
                var e = c.getContext("2d"),
                    f = a.frame;
                c.width = f.width, c.height = f.height, e.globalCompositeOperation = "copy", e.drawImage(a.baseTexture.source, f.x, f.y, f.width, f.height, 0, 0, f.width, f.height);
                for(var g = d.hex2rgb(b), h = g[0], i = g[1], j = g[2], k = e.getImageData(0, 0, f.width, f.height), l = k.data, m = 0; m < l.length; m += 4) l[m + 0] *= h, l[m + 1] *= i, l[m + 2] *= j;
                e.putImageData(k, 0, 0)
            }, d.CanvasTinter.roundColor = function(a) {
                var b = d.CanvasTinter.cacheStepsPerColorChannel,
                    c = d.hex2rgb(a);
                return c[0] = Math.min(255, c[0] / b * b), c[1] = Math.min(255, c[1] / b * b), c[2] = Math.min(255, c[2] / b * b), d.rgb2hex(c)
            }, d.CanvasTinter.cacheStepsPerColorChannel = 8, d.CanvasTinter.convertTintToImage = !1, d.CanvasTinter.canUseMultiply = d.canUseNewCanvasBlendModes(), d.CanvasTinter.tintMethod = d.CanvasTinter.canUseMultiply ? d.CanvasTinter.tintWithMultiply : d.CanvasTinter.tintWithPerPixel, d.CanvasRenderer = function(a, b, c, e) {
                d.defaultRenderer || (d.sayHello("Canvas"), d.defaultRenderer = this), this.type = d.CANVAS_RENDERER, this.clearBeforeRender = !0, this.transparent = !! e, d.blendModesCanvas || (d.blendModesCanvas = [], d.canUseNewCanvasBlendModes() ? (d.blendModesCanvas[d.blendModes.NORMAL] = "source-over", d.blendModesCanvas[d.blendModes.ADD] = "lighter", d.blendModesCanvas[d.blendModes.MULTIPLY] = "multiply", d.blendModesCanvas[d.blendModes.SCREEN] = "screen", d.blendModesCanvas[d.blendModes.OVERLAY] = "overlay", d.blendModesCanvas[d.blendModes.DARKEN] = "darken", d.blendModesCanvas[d.blendModes.LIGHTEN] = "lighten", d.blendModesCanvas[d.blendModes.COLOR_DODGE] = "color-dodge", d.blendModesCanvas[d.blendModes.COLOR_BURN] = "color-burn", d.blendModesCanvas[d.blendModes.HARD_LIGHT] = "hard-light", d.blendModesCanvas[d.blendModes.SOFT_LIGHT] = "soft-light", d.blendModesCanvas[d.blendModes.DIFFERENCE] = "difference", d.blendModesCanvas[d.blendModes.EXCLUSION] = "exclusion", d.blendModesCanvas[d.blendModes.HUE] = "hue", d.blendModesCanvas[d.blendModes.SATURATION] = "saturation", d.blendModesCanvas[d.blendModes.COLOR] = "color", d.blendModesCanvas[d.blendModes.LUMINOSITY] = "luminosity") : (d.blendModesCanvas[d.blendModes.NORMAL] = "source-over", d.blendModesCanvas[d.blendModes.ADD] = "lighter", d.blendModesCanvas[d.blendModes.MULTIPLY] = "source-over", d.blendModesCanvas[d.blendModes.SCREEN] = "source-over", d.blendModesCanvas[d.blendModes.OVERLAY] = "source-over", d.blendModesCanvas[d.blendModes.DARKEN] = "source-over", d.blendModesCanvas[d.blendModes.LIGHTEN] = "source-over", d.blendModesCanvas[d.blendModes.COLOR_DODGE] = "source-over", d.blendModesCanvas[d.blendModes.COLOR_BURN] = "source-over", d.blendModesCanvas[d.blendModes.HARD_LIGHT] = "source-over", d.blendModesCanvas[d.blendModes.SOFT_LIGHT] = "source-over", d.blendModesCanvas[d.blendModes.DIFFERENCE] = "source-over", d.blendModesCanvas[d.blendModes.EXCLUSION] = "source-over", d.blendModesCanvas[d.blendModes.HUE] = "source-over", d.blendModesCanvas[d.blendModes.SATURATION] = "source-over", d.blendModesCanvas[d.blendModes.COLOR] = "source-over", d.blendModesCanvas[d.blendModes.LUMINOSITY] = "source-over")), this.width = a || 800, this.height = b || 600, this.view = c || document.createElement("canvas"), this.context = this.view.getContext("2d", {
                    alpha: this.transparent
                }), this.refresh = !0, this.view.width = this.width, this.view.height = this.height, this.count = 0, this.maskManager = new d.CanvasMaskManager, this.renderSession = {
                    context: this.context,
                    maskManager: this.maskManager,
                    scaleMode: null,
                    smoothProperty: null,
                    roundPixels: !1
                }, "imageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "imageSmoothingEnabled" : "webkitImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "webkitImageSmoothingEnabled" : "mozImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "mozImageSmoothingEnabled" : "oImageSmoothingEnabled" in this.context && (this.renderSession.smoothProperty = "oImageSmoothingEnabled")
            }, d.CanvasRenderer.prototype.constructor = d.CanvasRenderer, d.CanvasRenderer.prototype.render = function(a) {
                d.texturesToUpdate.length = 0, d.texturesToDestroy.length = 0, a.updateTransform(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()), !this.transparent && this.clearBeforeRender ? (this.context.fillStyle = a.backgroundColorString, this.context.fillRect(0, 0, this.width, this.height)) : this.transparent && this.clearBeforeRender && this.context.clearRect(0, 0, this.width, this.height), this.renderDisplayObject(a), a.interactive && (a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this))), d.Texture.frameUpdates.length > 0 && (d.Texture.frameUpdates.length = 0)
            }, d.CanvasRenderer.prototype.resize = function(a, b) {
                this.width = a, this.height = b, this.view.width = a, this.view.height = b
            }, d.CanvasRenderer.prototype.renderDisplayObject = function(a, b) {
                this.renderSession.context = b || this.context, a._renderCanvas(this.renderSession)
            }, d.CanvasRenderer.prototype.renderStripFlat = function(a) {
                var b = this.context,
                    c = a.verticies,
                    d = c.length / 2;
                this.count++, b.beginPath();
                for(var e = 1; d - 2 > e; e++) {
                    var f = 2 * e,
                        g = c[f],
                        h = c[f + 2],
                        i = c[f + 4],
                        j = c[f + 1],
                        k = c[f + 3],
                        l = c[f + 5];
                    b.moveTo(g, j), b.lineTo(h, k), b.lineTo(i, l)
                }
                b.fillStyle = "#FF0000", b.fill(), b.closePath()
            }, d.CanvasRenderer.prototype.renderStrip = function(a) {
                var b = this.context,
                    c = a.verticies,
                    d = a.uvs,
                    e = c.length / 2;
                this.count++;
                for(var f = 1; e - 2 > f; f++) {
                    var g = 2 * f,
                        h = c[g],
                        i = c[g + 2],
                        j = c[g + 4],
                        k = c[g + 1],
                        l = c[g + 3],
                        m = c[g + 5],
                        n = d[g] * a.texture.width,
                        o = d[g + 2] * a.texture.width,
                        p = d[g + 4] * a.texture.width,
                        q = d[g + 1] * a.texture.height,
                        r = d[g + 3] * a.texture.height,
                        s = d[g + 5] * a.texture.height;
                    b.save(), b.beginPath(), b.moveTo(h, k), b.lineTo(i, l), b.lineTo(j, m), b.closePath(), b.clip();
                    var t = n * r + q * p + o * s - r * p - q * o - n * s,
                        u = h * r + q * j + i * s - r * j - q * i - h * s,
                        v = n * i + h * p + o * j - i * p - h * o - n * j,
                        w = n * r * j + q * i * p + h * o * s - h * r * p - q * o * j - n * i * s,
                        x = k * r + q * m + l * s - r * m - q * l - k * s,
                        y = n * l + k * p + o * m - l * p - k * o - n * m,
                        z = n * r * m + q * l * p + k * o * s - k * r * p - q * o * m - n * l * s;
                    b.transform(u / t, x / t, v / t, y / t, w / t, z / t), b.drawImage(a.texture.baseTexture.source, 0, 0), b.restore()
                }
            }, d.CanvasBuffer = function(a, b) {
                this.width = a, this.height = b, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = a, this.canvas.height = b
            }, d.CanvasBuffer.prototype.clear = function() {
                this.context.clearRect(0, 0, this.width, this.height)
            }, d.CanvasBuffer.prototype.resize = function(a, b) {
                this.width = this.canvas.width = a, this.height = this.canvas.height = b
            }, d.CanvasGraphics = function() {}, d.CanvasGraphics.renderGraphics = function(a, b) {
                for(var c = a.worldAlpha, e = "", f = 0; f < a.graphicsData.length; f++) {
                    var g = a.graphicsData[f],
                        h = g.points;
                    if(b.strokeStyle = e = "#" + ("00000" + (0 | g.lineColor).toString(16)).substr(-6), b.lineWidth = g.lineWidth, g.type === d.Graphics.POLY) {
                        b.beginPath(), b.moveTo(h[0], h[1]);
                        for(var i = 1; i < h.length / 2; i++) b.lineTo(h[2 * i], h[2 * i + 1]);
                        h[0] === h[h.length - 2] && h[1] === h[h.length - 1] && b.closePath(), g.fill && (b.globalAlpha = g.fillAlpha * c, b.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr(-6), b.fill()), g.lineWidth && (b.globalAlpha = g.lineAlpha * c, b.stroke())
                    } else if(g.type === d.Graphics.RECT)(g.fillColor || 0 === g.fillColor) && (b.globalAlpha = g.fillAlpha * c, b.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr(-6), b.fillRect(h[0], h[1], h[2], h[3])), g.lineWidth && (b.globalAlpha = g.lineAlpha * c, b.strokeRect(h[0], h[1], h[2], h[3]));
                    else if(g.type === d.Graphics.CIRC) b.beginPath(), b.arc(h[0], h[1], h[2], 0, 2 * Math.PI), b.closePath(), g.fill && (b.globalAlpha = g.fillAlpha * c, b.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr(-6), b.fill()), g.lineWidth && (b.globalAlpha = g.lineAlpha * c, b.stroke());
                    else if(g.type === d.Graphics.ELIP) {
                        var j = g.points,
                            k = 2 * j[2],
                            l = 2 * j[3],
                            m = j[0] - k / 2,
                            n = j[1] - l / 2;
                        b.beginPath();
                        var o = .5522848,
                            p = k / 2 * o,
                            q = l / 2 * o,
                            r = m + k,
                            s = n + l,
                            t = m + k / 2,
                            u = n + l / 2;
                        b.moveTo(m, u), b.bezierCurveTo(m, u - q, t - p, n, t, n), b.bezierCurveTo(t + p, n, r, u - q, r, u), b.bezierCurveTo(r, u + q, t + p, s, t, s), b.bezierCurveTo(t - p, s, m, u + q, m, u), b.closePath(), g.fill && (b.globalAlpha = g.fillAlpha * c, b.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr(-6), b.fill()), g.lineWidth && (b.globalAlpha = g.lineAlpha * c, b.stroke())
                    } else if(g.type === d.Graphics.RREC) {
                        var v = h[0],
                            w = h[1],
                            x = h[2],
                            y = h[3],
                            z = h[4],
                            A = Math.min(x, y) / 2 | 0;
                        z = z > A ? A : z, b.beginPath(), b.moveTo(v, w + z), b.lineTo(v, w + y - z), b.quadraticCurveTo(v, w + y, v + z, w + y), b.lineTo(v + x - z, w + y), b.quadraticCurveTo(v + x, w + y, v + x, w + y - z), b.lineTo(v + x, w + z), b.quadraticCurveTo(v + x, w, v + x - z, w), b.lineTo(v + z, w), b.quadraticCurveTo(v, w, v, w + z), b.closePath(), (g.fillColor || 0 === g.fillColor) && (b.globalAlpha = g.fillAlpha * c, b.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr(-6), b.fill()), g.lineWidth && (b.globalAlpha = g.lineAlpha * c, b.stroke())
                    }
                }
            }, d.CanvasGraphics.renderGraphicsMask = function(a, b) {
                var c = a.graphicsData.length;
                if(0 !== c) {
                    c > 1 && (c = 1, window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));
                    for(var e = 0; 1 > e; e++) {
                        var f = a.graphicsData[e],
                            g = f.points;
                        if(f.type === d.Graphics.POLY) {
                            b.beginPath(), b.moveTo(g[0], g[1]);
                            for(var h = 1; h < g.length / 2; h++) b.lineTo(g[2 * h], g[2 * h + 1]);
                            g[0] === g[g.length - 2] && g[1] === g[g.length - 1] && b.closePath()
                        } else if(f.type === d.Graphics.RECT) b.beginPath(), b.rect(g[0], g[1], g[2], g[3]), b.closePath();
                        else if(f.type === d.Graphics.CIRC) b.beginPath(), b.arc(g[0], g[1], g[2], 0, 2 * Math.PI), b.closePath();
                        else if(f.type === d.Graphics.ELIP) {
                            var i = f.points,
                                j = 2 * i[2],
                                k = 2 * i[3],
                                l = i[0] - j / 2,
                                m = i[1] - k / 2;
                            b.beginPath();
                            var n = .5522848,
                                o = j / 2 * n,
                                p = k / 2 * n,
                                q = l + j,
                                r = m + k,
                                s = l + j / 2,
                                t = m + k / 2;
                            b.moveTo(l, t), b.bezierCurveTo(l, t - p, s - o, m, s, m), b.bezierCurveTo(s + o, m, q, t - p, q, t), b.bezierCurveTo(q, t + p, s + o, r, s, r), b.bezierCurveTo(s - o, r, l, t + p, l, t), b.closePath()
                        } else if(f.type === d.Graphics.RREC) {
                            var u = g[0],
                                v = g[1],
                                w = g[2],
                                x = g[3],
                                y = g[4],
                                z = Math.min(w, x) / 2 | 0;
                            y = y > z ? z : y, b.beginPath(), b.moveTo(u, v + y), b.lineTo(u, v + x - y), b.quadraticCurveTo(u, v + x, u + y, v + x), b.lineTo(u + w - y, v + x), b.quadraticCurveTo(u + w, v + x, u + w, v + x - y), b.lineTo(u + w, v + y), b.quadraticCurveTo(u + w, v, u + w - y, v), b.lineTo(u + y, v), b.quadraticCurveTo(u, v, u, v + y), b.closePath()
                        }
                    }
                }
            }, d.Graphics = function() {
                d.DisplayObjectContainer.call(this), this.renderable = !0, this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = "black", this.graphicsData = [], this.tint = 16777215, this.blendMode = d.blendModes.NORMAL, this.currentPath = {
                    points: []
                }, this._webGL = [], this.isMask = !1, this.bounds = null, this.boundsPadding = 10, this.dirty = !0
            }, d.Graphics.prototype = Object.create(d.DisplayObjectContainer.prototype), d.Graphics.prototype.constructor = d.Graphics, Object.defineProperty(d.Graphics.prototype, "cacheAsBitmap", {
                get: function() {
                    return this._cacheAsBitmap
                },
                set: function(a) {
                    this._cacheAsBitmap = a, this._cacheAsBitmap ? this._generateCachedSprite() : (this.destroyCachedSprite(), this.dirty = !0)
                }
            }), d.Graphics.prototype.lineStyle = function(a, b, c) {
                return this.currentPath.points.length || this.graphicsData.pop(), this.lineWidth = a || 0, this.lineColor = b || 0, this.lineAlpha = arguments.length < 3 ? 1 : c, this.currentPath = {
                    lineWidth: this.lineWidth,
                    lineColor: this.lineColor,
                    lineAlpha: this.lineAlpha,
                    fillColor: this.fillColor,
                    fillAlpha: this.fillAlpha,
                    fill: this.filling,
                    points: [],
                    type: d.Graphics.POLY
                }, this.graphicsData.push(this.currentPath), this
            }, d.Graphics.prototype.moveTo = function(a, b) {
                return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = this.currentPath = {
                    lineWidth: this.lineWidth,
                    lineColor: this.lineColor,
                    lineAlpha: this.lineAlpha,
                    fillColor: this.fillColor,
                    fillAlpha: this.fillAlpha,
                    fill: this.filling,
                    points: [],
                    type: d.Graphics.POLY
                }, this.currentPath.points.push(a, b), this.graphicsData.push(this.currentPath), this
            }, d.Graphics.prototype.lineTo = function(a, b) {
                return this.currentPath.points.push(a, b), this.dirty = !0, this
            }, d.Graphics.prototype.quadraticCurveTo = function(a, b, c, d) {
                0 === this.currentPath.points.length && this.moveTo(0, 0);
                var e, f, g = 20,
                    h = this.currentPath.points;
                0 === h.length && this.moveTo(0, 0);
                for(var i = h[h.length - 2], j = h[h.length - 1], k = 0, l = 1; g >= l; l++) k = l / g, e = i + (a - i) * k, f = j + (b - j) * k, h.push(e + (a + (c - a) * k - e) * k, f + (b + (d - b) * k - f) * k);
                return this.dirty = !0, this
            }, d.Graphics.prototype.bezierCurveTo = function(a, b, c, d, e, f) {
                0 === this.currentPath.points.length && this.moveTo(0, 0);
                for(var g, h, i, j, k, l = 20, m = this.currentPath.points, n = m[m.length - 2], o = m[m.length - 1], p = 0, q = 1; l > q; q++) p = q / l, g = 1 - p, h = g * g, i = h * g, j = p * p, k = j * p, m.push(i * n + 3 * h * p * a + 3 * g * j * c + k * e, i * o + 3 * h * p * b + 3 * g * j * d + k * f);
                return this.dirty = !0, this
            }, d.Graphics.prototype.arcTo = function(a, b, c, d, e) {
                0 === this.currentPath.points.length && this.moveTo(a, b);
                var f = this.currentPath.points,
                    g = f[f.length - 2],
                    h = f[f.length - 1],
                    i = h - b,
                    j = g - a,
                    k = d - b,
                    l = c - a,
                    m = Math.abs(i * l - j * k);
                if(1e-8 > m || 0 === e) f.push(a, b);
                else {
                    var n = i * i + j * j,
                        o = k * k + l * l,
                        p = i * k + j * l,
                        q = e * Math.sqrt(n) / m,
                        r = e * Math.sqrt(o) / m,
                        s = q * p / n,
                        t = r * p / o,
                        u = q * l + r * j,
                        v = q * k + r * i,
                        w = j * (r + s),
                        x = i * (r + s),
                        y = l * (q + t),
                        z = k * (q + t),
                        A = Math.atan2(x - v, w - u),
                        B = Math.atan2(z - v, y - u);
                    this.arc(u + a, v + b, e, A, B, j * k > l * i)
                }
                return this.dirty = !0, this
            }, d.Graphics.prototype.arc = function(a, b, c, d, e, f) {
                var g = a + Math.cos(d) * c,
                    h = b + Math.sin(d) * c,
                    i = this.currentPath.points;
                if((0 !== i.length && i[i.length - 2] !== g || i[i.length - 1] !== h) && (this.moveTo(g, h), i = this.currentPath.points), d === e) return this;
                !f && d >= e ? e += 2 * Math.PI : f && e >= d && (d += 2 * Math.PI);
                var j = f ? -1 * (d - e) : e - d,
                    k = Math.abs(j) / (2 * Math.PI) * 40;
                if(0 === j) return this;
                for(var l = j / (2 * k), m = 2 * l, n = Math.cos(l), o = Math.sin(l), p = k - 1, q = p % 1 / p, r = 0; p >= r; r++) {
                    var s = r + q * r,
                        t = l + d + m * s,
                        u = Math.cos(t),
                        v = -Math.sin(t);
                    i.push((n * u + o * v) * c + a, (n * -v + o * u) * c + b)
                }
                return this.dirty = !0, this
            }, d.Graphics.prototype.drawPath = function(a) {
                return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = this.currentPath = {
                    lineWidth: this.lineWidth,
                    lineColor: this.lineColor,
                    lineAlpha: this.lineAlpha,
                    fillColor: this.fillColor,
                    fillAlpha: this.fillAlpha,
                    fill: this.filling,
                    points: [],
                    type: d.Graphics.POLY
                }, this.graphicsData.push(this.currentPath), this.currentPath.points = this.currentPath.points.concat(a), this.dirty = !0, this
            }, d.Graphics.prototype.beginFill = function(a, b) {
                return this.filling = !0, this.fillColor = a || 0, this.fillAlpha = arguments.length < 2 ? 1 : b, this
            }, d.Graphics.prototype.endFill = function() {
                return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
            }, d.Graphics.prototype.drawRect = function(a, b, c, e) {
                return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                    lineWidth: this.lineWidth,
                    lineColor: this.lineColor,
                    lineAlpha: this.lineAlpha,
                    fillColor: this.fillColor,
                    fillAlpha: this.fillAlpha,
                    fill: this.filling,
                    points: [a, b, c, e],
                    type: d.Graphics.RECT
                }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
            }, d.Graphics.prototype.drawRoundedRect = function(a, b, c, e, f) {
                return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                    lineWidth: this.lineWidth,
                    lineColor: this.lineColor,
                    lineAlpha: this.lineAlpha,
                    fillColor: this.fillColor,
                    fillAlpha: this.fillAlpha,
                    fill: this.filling,
                    points: [a, b, c, e, f],
                    type: d.Graphics.RREC
                }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
            }, d.Graphics.prototype.drawCircle = function(a, b, c) {
                return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                    lineWidth: this.lineWidth,
                    lineColor: this.lineColor,
                    lineAlpha: this.lineAlpha,
                    fillColor: this.fillColor,
                    fillAlpha: this.fillAlpha,
                    fill: this.filling,
                    points: [a, b, c, c],
                    type: d.Graphics.CIRC
                }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
            }, d.Graphics.prototype.drawEllipse = function(a, b, c, e) {
                return this.currentPath.points.length || this.graphicsData.pop(), this.currentPath = {
                    lineWidth: this.lineWidth,
                    lineColor: this.lineColor,
                    lineAlpha: this.lineAlpha,
                    fillColor: this.fillColor,
                    fillAlpha: this.fillAlpha,
                    fill: this.filling,
                    points: [a, b, c, e],
                    type: d.Graphics.ELIP
                }, this.graphicsData.push(this.currentPath), this.dirty = !0, this
            }, d.Graphics.prototype.clear = function() {
                return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this.bounds = null, this
            }, d.Graphics.prototype.generateTexture = function() {
                var a = this.getBounds(),
                    b = new d.CanvasBuffer(a.width, a.height),
                    c = d.Texture.fromCanvas(b.canvas);
                return b.context.translate(-a.x, -a.y), d.CanvasGraphics.renderGraphics(this, b.context), c
            }, d.Graphics.prototype._renderWebGL = function(a) {
                if(this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
                    if(this._cacheAsBitmap) return this.dirty && (this._generateCachedSprite(), d.updateWebGLTexture(this._cachedSprite.texture.baseTexture, a.gl), this.dirty = !1), this._cachedSprite.alpha = this.alpha, void d.Sprite.prototype._renderWebGL.call(this._cachedSprite, a);
                    if(a.spriteBatch.stop(), a.blendModeManager.setBlendMode(this.blendMode), this._mask && a.maskManager.pushMask(this._mask, a), this._filters && a.filterManager.pushFilter(this._filterBlock), this.blendMode !== a.spriteBatch.currentBlendMode) {
                        a.spriteBatch.currentBlendMode = this.blendMode;
                        var b = d.blendModesWebGL[a.spriteBatch.currentBlendMode];
                        a.spriteBatch.gl.blendFunc(b[0], b[1])
                    }
                    if(d.WebGLGraphics.renderGraphics(this, a), this.children.length) {
                        a.spriteBatch.start();
                        for(var c = 0, e = this.children.length; e > c; c++) this.children[c]._renderWebGL(a);
                        a.spriteBatch.stop()
                    }
                    this._filters && a.filterManager.popFilter(), this._mask && a.maskManager.popMask(this.mask, a), a.drawCount++, a.spriteBatch.start()
                }
            }, d.Graphics.prototype._renderCanvas = function(a) {
                if(this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
                    var b = a.context,
                        c = this.worldTransform;
                    this.blendMode !== a.currentBlendMode && (a.currentBlendMode = this.blendMode, b.globalCompositeOperation = d.blendModesCanvas[a.currentBlendMode]), this._mask && a.maskManager.pushMask(this._mask, a.context), b.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty), d.CanvasGraphics.renderGraphics(this, b);
                    for(var e = 0, f = this.children.length; f > e; e++) this.children[e]._renderCanvas(a);
                    this._mask && a.maskManager.popMask(a.context)
                }
            }, d.Graphics.prototype.getBounds = function(a) {
                this.bounds || this.updateBounds();
                var b = this.bounds.x,
                    c = this.bounds.width + this.bounds.x,
                    d = this.bounds.y,
                    e = this.bounds.height + this.bounds.y,
                    f = a || this.worldTransform,
                    g = f.a,
                    h = f.c,
                    i = f.b,
                    j = f.d,
                    k = f.tx,
                    l = f.ty,
                    m = g * c + i * e + k,
                    n = j * e + h * c + l,
                    o = g * b + i * e + k,
                    p = j * e + h * b + l,
                    q = g * b + i * d + k,
                    r = j * d + h * b + l,
                    s = g * c + i * d + k,
                    t = j * d + h * c + l,
                    u = m,
                    v = n,
                    w = m,
                    x = n;
                w = w > o ? o : w, w = w > q ? q : w, w = w > s ? s : w, x = x > p ? p : x, x = x > r ? r : x, x = x > t ? t : x, u = o > u ? o : u, u = q > u ? q : u, u = s > u ? s : u, v = p > v ? p : v, v = r > v ? r : v, v = t > v ? t : v;
                var y = this._bounds;
                return y.x = w, y.width = u - w, y.y = x, y.height = v - x, y
            }, d.Graphics.prototype.updateBounds = function() {
                for(var a, b, c, e, f, g = 1 / 0, h = -1 / 0, i = 1 / 0, j = -1 / 0, k = 0; k < this.graphicsData.length; k++) {
                    var l = this.graphicsData[k],
                        m = l.type,
                        n = l.lineWidth;
                    if(a = l.points, m === d.Graphics.RECT) b = a[0] - n / 2, c = a[1] - n / 2, e = a[2] + n, f = a[3] + n, g = g > b ? b : g, h = b + e > h ? b + e : h, i = i > c ? b : i, j = c + f > j ? c + f : j;
                    else if(m === d.Graphics.CIRC || m === d.Graphics.ELIP) b = a[0], c = a[1], e = a[2] + n / 2, f = a[3] + n / 2, g = g > b - e ? b - e : g, h = b + e > h ? b + e : h, i = i > c - f ? c - f : i, j = c + f > j ? c + f : j;
                    else
                        for(var o = 0; o < a.length; o += 2) b = a[o], c = a[o + 1], g = g > b - n ? b - n : g, h = b + n > h ? b + n : h, i = i > c - n ? c - n : i, j = c + n > j ? c + n : j
                }
                var p = this.boundsPadding;
                this.bounds = new d.Rectangle(g - p, i - p, h - g + 2 * p, j - i + 2 * p)
            }, d.Graphics.prototype._generateCachedSprite = function() {
                var a = this.getLocalBounds();
                if(this._cachedSprite) this._cachedSprite.buffer.resize(a.width, a.height);
                else {
                    var b = new d.CanvasBuffer(a.width, a.height),
                        c = d.Texture.fromCanvas(b.canvas);
                    this._cachedSprite = new d.Sprite(c), this._cachedSprite.buffer = b, this._cachedSprite.worldTransform = this.worldTransform
                }
                this._cachedSprite.anchor.x = -(a.x / a.width), this._cachedSprite.anchor.y = -(a.y / a.height), this._cachedSprite.buffer.context.translate(-a.x, -a.y), d.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context), this._cachedSprite.alpha = this.alpha
            }, d.Graphics.prototype.destroyCachedSprite = function() {
                this._cachedSprite.texture.destroy(!0), this._cachedSprite = null
            }, d.Graphics.POLY = 0, d.Graphics.RECT = 1, d.Graphics.CIRC = 2, d.Graphics.ELIP = 3, d.Graphics.RREC = 4, d.Strip = function(a) {
                d.DisplayObjectContainer.call(this), this.texture = a, this.uvs = new d.Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.verticies = new d.Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.colors = new d.Float32Array([1, 1, 1, 1]), this.indices = new d.Uint16Array([0, 1, 2, 3]), this.dirty = !0
            }, d.Strip.prototype = Object.create(d.DisplayObjectContainer.prototype), d.Strip.prototype.constructor = d.Strip, d.Strip.prototype._renderWebGL = function(a) {
                !this.visible || this.alpha <= 0 || (a.spriteBatch.stop(), this._vertexBuffer || this._initWebGL(a), a.shaderManager.setShader(a.shaderManager.stripShader), this._renderStrip(a), a.spriteBatch.start())
            }, d.Strip.prototype._initWebGL = function(a) {
                var b = a.gl;
                this._vertexBuffer = b.createBuffer(), this._indexBuffer = b.createBuffer(), this._uvBuffer = b.createBuffer(), this._colorBuffer = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this._vertexBuffer), b.bufferData(b.ARRAY_BUFFER, this.verticies, b.DYNAMIC_DRAW), b.bindBuffer(b.ARRAY_BUFFER, this._uvBuffer), b.bufferData(b.ARRAY_BUFFER, this.uvs, b.STATIC_DRAW), b.bindBuffer(b.ARRAY_BUFFER, this._colorBuffer), b.bufferData(b.ARRAY_BUFFER, this.colors, b.STATIC_DRAW), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this._indexBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.indices, b.STATIC_DRAW)
            }, d.Strip.prototype._renderStrip = function(a) {
                var b = a.gl,
                    c = a.projection,
                    e = a.offset,
                    f = a.shaderManager.stripShader;
                b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA), b.uniformMatrix3fv(f.translationMatrix, !1, this.worldTransform.toArray(!0)), b.uniform2f(f.projectionVector, c.x, -c.y), b.uniform2f(f.offsetVector, -e.x, -e.y), b.uniform1f(f.alpha, 1), this.dirty ? (this.dirty = !1, b.bindBuffer(b.ARRAY_BUFFER, this._vertexBuffer), b.bufferData(b.ARRAY_BUFFER, this.verticies, b.STATIC_DRAW), b.vertexAttribPointer(f.aVertexPosition, 2, b.FLOAT, !1, 0, 0), b.bindBuffer(b.ARRAY_BUFFER, this._uvBuffer), b.bufferData(b.ARRAY_BUFFER, this.uvs, b.STATIC_DRAW), b.vertexAttribPointer(f.aTextureCoord, 2, b.FLOAT, !1, 0, 0), b.activeTexture(b.TEXTURE0), b.bindTexture(b.TEXTURE_2D, this.texture.baseTexture._glTextures[b.id] || d.createWebGLTexture(this.texture.baseTexture, b)), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this._indexBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.indices, b.STATIC_DRAW)) : (b.bindBuffer(b.ARRAY_BUFFER, this._vertexBuffer), b.bufferSubData(b.ARRAY_BUFFER, 0, this.verticies), b.vertexAttribPointer(f.aVertexPosition, 2, b.FLOAT, !1, 0, 0), b.bindBuffer(b.ARRAY_BUFFER, this._uvBuffer), b.vertexAttribPointer(f.aTextureCoord, 2, b.FLOAT, !1, 0, 0), b.activeTexture(b.TEXTURE0), b.bindTexture(b.TEXTURE_2D, this.texture.baseTexture._glTextures[b.id] || d.createWebGLTexture(this.texture.baseTexture, b)), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this._indexBuffer)), b.drawElements(b.TRIANGLE_STRIP, this.indices.length, b.UNSIGNED_SHORT, 0)
            }, d.Strip.prototype._renderCanvas = function(a) {
                var b = a.context,
                    c = this.worldTransform;
                a.roundPixels ? b.setTransform(c.a, c.c, c.b, c.d, 0 | c.tx, 0 | c.ty) : b.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty);
                var d = this,
                    e = d.verticies,
                    f = d.uvs,
                    g = e.length / 2;
                this.count++;
                for(var h = 0; g - 2 > h; h++) {
                    var i = 2 * h,
                        j = e[i],
                        k = e[i + 2],
                        l = e[i + 4],
                        m = e[i + 1],
                        n = e[i + 3],
                        o = e[i + 5],
                        p = (j + k + l) / 3,
                        q = (m + n + o) / 3,
                        r = j - p,
                        s = m - q,
                        t = Math.sqrt(r * r + s * s);
                    j = p + r / t * (t + 3), m = q + s / t * (t + 3), r = k - p, s = n - q, t = Math.sqrt(r * r + s * s), k = p + r / t * (t + 3), n = q + s / t * (t + 3), r = l - p, s = o - q, t = Math.sqrt(r * r + s * s), l = p + r / t * (t + 3), o = q + s / t * (t + 3);
                    var u = f[i] * d.texture.width,
                        v = f[i + 2] * d.texture.width,
                        w = f[i + 4] * d.texture.width,
                        x = f[i + 1] * d.texture.height,
                        y = f[i + 3] * d.texture.height,
                        z = f[i + 5] * d.texture.height;
                    b.save(), b.beginPath(), b.moveTo(j, m), b.lineTo(k, n), b.lineTo(l, o), b.closePath(), b.clip();
                    var A = u * y + x * w + v * z - y * w - x * v - u * z,
                        B = j * y + x * l + k * z - y * l - x * k - j * z,
                        C = u * k + j * w + v * l - k * w - j * v - u * l,
                        D = u * y * l + x * k * w + j * v * z - j * y * w - x * v * l - u * k * z,
                        E = m * y + x * o + n * z - y * o - x * n - m * z,
                        F = u * n + m * w + v * o - n * w - m * v - u * o,
                        G = u * y * o + x * n * w + m * v * z - m * y * w - x * v * o - u * n * z;
                    b.transform(B / A, E / A, C / A, F / A, D / A, G / A), b.drawImage(d.texture.baseTexture.source, 0, 0), b.restore()
                }
            }, d.Strip.prototype.onTextureUpdate = function() {
                this.updateFrame = !0
            }, d.Rope = function(a, b) {
                d.Strip.call(this, a), this.points = b, this.verticies = new d.Float32Array(4 * b.length), this.uvs = new d.Float32Array(4 * b.length), this.colors = new d.Float32Array(2 * b.length), this.indices = new d.Uint16Array(2 * b.length), this.refresh()
            }, d.Rope.prototype = Object.create(d.Strip.prototype), d.Rope.prototype.constructor = d.Rope, d.Rope.prototype.refresh = function() {
                var a = this.points;
                if(!(a.length < 1)) {
                    var b = this.uvs,
                        c = a[0],
                        d = this.indices,
                        e = this.colors;
                    this.count -= .2, b[0] = 0, b[1] = 0, b[2] = 0, b[3] = 1, e[0] = 1, e[1] = 1, d[0] = 0, d[1] = 1;
                    for(var f, g, h, i = a.length, j = 1; i > j; j++) f = a[j], g = 4 * j, h = j / (i - 1), j % 2 ? (b[g] = h, b[g + 1] = 0, b[g + 2] = h, b[g + 3] = 1) : (b[g] = h, b[g + 1] = 0, b[g + 2] = h, b[g + 3] = 1), g = 2 * j, e[g] = 1, e[g + 1] = 1, g = 2 * j, d[g] = g, d[g + 1] = g + 1, c = f
                }
            }, d.Rope.prototype.updateTransform = function() {
                var a = this.points;
                if(!(a.length < 1)) {
                    var b, c = a[0],
                        e = {
                            x: 0,
                            y: 0
                        };
                    this.count -= .2;
                    for(var f, g, h, i, j, k = this.verticies, l = a.length, m = 0; l > m; m++) f = a[m], g = 4 * m, b = m < a.length - 1 ? a[m + 1] : f, e.y = -(b.x - c.x), e.x = b.y - c.y, h = 10 * (1 - m / (l - 1)), h > 1 && (h = 1), i = Math.sqrt(e.x * e.x + e.y * e.y), j = this.texture.height / 2, e.x /= i, e.y /= i, e.x *= j, e.y *= j, k[g] = f.x + e.x, k[g + 1] = f.y + e.y, k[g + 2] = f.x - e.x, k[g + 3] = f.y - e.y, c = f;
                    d.DisplayObjectContainer.prototype.updateTransform.call(this)
                }
            }, d.Rope.prototype.setTexture = function(a) {
                this.texture = a
            }, d.TilingSprite = function(a, b, c) {
                d.Sprite.call(this, a), this._width = b || 100, this._height = c || 100, this.tileScale = new d.Point(1, 1), this.tileScaleOffset = new d.Point(1, 1), this.tilePosition = new d.Point(0, 0), this.renderable = !0, this.tint = 16777215, this.blendMode = d.blendModes.NORMAL
            }, d.TilingSprite.prototype = Object.create(d.Sprite.prototype), d.TilingSprite.prototype.constructor = d.TilingSprite, Object.defineProperty(d.TilingSprite.prototype, "width", {
                get: function() {
                    return this._width
                },
                set: function(a) {
                    this._width = a
                }
            }), Object.defineProperty(d.TilingSprite.prototype, "height", {
                get: function() {
                    return this._height
                },
                set: function(a) {
                    this._height = a
                }
            }), d.TilingSprite.prototype.setTexture = function(a) {
                this.texture !== a && (this.texture = a, this.refreshTexture = !0, this.cachedTint = 16777215)
            }, d.TilingSprite.prototype._renderWebGL = function(a) {
                if(this.visible !== !1 && 0 !== this.alpha) {
                    var b, c;
                    for(this._mask && (a.spriteBatch.stop(), a.maskManager.pushMask(this.mask, a), a.spriteBatch.start()), this._filters && (a.spriteBatch.flush(), a.filterManager.pushFilter(this._filterBlock)), !this.tilingTexture || this.refreshTexture ? (this.generateTilingTexture(!0), this.tilingTexture && this.tilingTexture.needsUpdate && (d.updateWebGLTexture(this.tilingTexture.baseTexture, a.gl), this.tilingTexture.needsUpdate = !1)) : a.spriteBatch.renderTilingSprite(this), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a);
                    a.spriteBatch.stop(), this._filters && a.filterManager.popFilter(), this._mask && a.maskManager.popMask(a), a.spriteBatch.start()
                }
            }, d.TilingSprite.prototype._renderCanvas = function(a) {
                if(this.visible !== !1 && 0 !== this.alpha) {
                    var b = a.context;
                    this._mask && a.maskManager.pushMask(this._mask, b), b.globalAlpha = this.worldAlpha;
                    var c, e, f = this.worldTransform;
                    if(b.setTransform(f.a, f.c, f.b, f.d, f.tx, f.ty), !this.__tilePattern || this.refreshTexture) {
                        if(this.generateTilingTexture(!1), !this.tilingTexture) return;
                        this.__tilePattern = b.createPattern(this.tilingTexture.baseTexture.source, "repeat")
                    }
                    this.blendMode !== a.currentBlendMode && (a.currentBlendMode = this.blendMode, b.globalCompositeOperation = d.blendModesCanvas[a.currentBlendMode]);
                    var g = this.tilePosition,
                        h = this.tileScale;
                    for(g.x %= this.tilingTexture.baseTexture.width, g.y %= this.tilingTexture.baseTexture.height, b.scale(h.x, h.y), b.translate(g.x, g.y), b.fillStyle = this.__tilePattern, b.fillRect(-g.x + this.anchor.x * -this._width, -g.y + this.anchor.y * -this._height, this._width / h.x, this._height / h.y), b.scale(1 / h.x, 1 / h.y), b.translate(-g.x, -g.y), this._mask && a.maskManager.popMask(a.context), c = 0, e = this.children.length; e > c; c++) this.children[c]._renderCanvas(a)
                }
            }, d.TilingSprite.prototype.getBounds = function() {
                var a = this._width,
                    b = this._height,
                    c = a * (1 - this.anchor.x),
                    d = a * -this.anchor.x,
                    e = b * (1 - this.anchor.y),
                    f = b * -this.anchor.y,
                    g = this.worldTransform,
                    h = g.a,
                    i = g.c,
                    j = g.b,
                    k = g.d,
                    l = g.tx,
                    m = g.ty,
                    n = h * d + j * f + l,
                    o = k * f + i * d + m,
                    p = h * c + j * f + l,
                    q = k * f + i * c + m,
                    r = h * c + j * e + l,
                    s = k * e + i * c + m,
                    t = h * d + j * e + l,
                    u = k * e + i * d + m,
                    v = -1 / 0,
                    w = -1 / 0,
                    x = 1 / 0,
                    y = 1 / 0;
                x = x > n ? n : x, x = x > p ? p : x, x = x > r ? r : x, x = x > t ? t : x, y = y > o ? o : y, y = y > q ? q : y, y = y > s ? s : y, y = y > u ? u : y, v = n > v ? n : v, v = p > v ? p : v, v = r > v ? r : v, v = t > v ? t : v, w = o > w ? o : w, w = q > w ? q : w, w = s > w ? s : w, w = u > w ? u : w;
                var z = this._bounds;
                return z.x = x, z.width = v - x, z.y = y, z.height = w - y, this._currentBounds = z, z
            }, d.TilingSprite.prototype.onTextureUpdate = function() {}, d.TilingSprite.prototype.generateTilingTexture = function(a) {
                if(this.texture.baseTexture.hasLoaded) {
                    var b, c, e = this.texture,
                        f = e.frame,
                        g = f.width !== e.baseTexture.width || f.height !== e.baseTexture.height,
                        h = !1;
                    if(a ? (b = d.getNextPowerOfTwo(f.width), c = d.getNextPowerOfTwo(f.height), (f.width !== b || f.height !== c) && (h = !0)) : g && (b = f.width, c = f.height, h = !0), h) {
                        var i;
                        this.tilingTexture && this.tilingTexture.isTiling ? (i = this.tilingTexture.canvasBuffer, i.resize(b, c), this.tilingTexture.baseTexture.width = b, this.tilingTexture.baseTexture.height = c, this.tilingTexture.needsUpdate = !0) : (i = new d.CanvasBuffer(b, c), this.tilingTexture = d.Texture.fromCanvas(i.canvas), this.tilingTexture.canvasBuffer = i, this.tilingTexture.isTiling = !0), i.context.drawImage(e.baseTexture.source, e.crop.x, e.crop.y, e.crop.width, e.crop.height, 0, 0, b, c), this.tileScaleOffset.x = f.width / b, this.tileScaleOffset.y = f.height / c
                    } else this.tilingTexture && this.tilingTexture.isTiling && this.tilingTexture.destroy(!0), this.tileScaleOffset.x = 1, this.tileScaleOffset.y = 1, this.tilingTexture = e;
                    this.refreshTexture = !1, this.tilingTexture.baseTexture._powerOf2 = !0
                }
            };
            var h = {};
            h.BoneData = function(a, b) {
                this.name = a, this.parent = b
            }, h.BoneData.prototype = {
                length: 0,
                x: 0,
                y: 0,
                rotation: 0,
                scaleX: 1,
                scaleY: 1
            }, h.SlotData = function(a, b) {
                this.name = a, this.boneData = b
            }, h.SlotData.prototype = {
                r: 1,
                g: 1,
                b: 1,
                a: 1,
                attachmentName: null
            }, h.Bone = function(a, b) {
                this.data = a, this.parent = b, this.setToSetupPose()
            }, h.Bone.yDown = !1, h.Bone.prototype = {
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
                updateWorldTransform: function(a, b) {
                    var c = this.parent;
                    null != c ? (this.worldX = this.x * c.m00 + this.y * c.m01 + c.worldX, this.worldY = this.x * c.m10 + this.y * c.m11 + c.worldY, this.worldScaleX = c.worldScaleX * this.scaleX, this.worldScaleY = c.worldScaleY * this.scaleY, this.worldRotation = c.worldRotation + this.rotation) : (this.worldX = this.x, this.worldY = this.y, this.worldScaleX = this.scaleX, this.worldScaleY = this.scaleY, this.worldRotation = this.rotation);
                    var d = this.worldRotation * Math.PI / 180,
                        e = Math.cos(d),
                        f = Math.sin(d);
                    this.m00 = e * this.worldScaleX, this.m10 = f * this.worldScaleX, this.m01 = -f * this.worldScaleY, this.m11 = e * this.worldScaleY, a && (this.m00 = -this.m00, this.m01 = -this.m01), b && (this.m10 = -this.m10, this.m11 = -this.m11), h.Bone.yDown && (this.m10 = -this.m10, this.m11 = -this.m11)
                },
                setToSetupPose: function() {
                    var a = this.data;
                    this.x = a.x, this.y = a.y, this.rotation = a.rotation, this.scaleX = a.scaleX, this.scaleY = a.scaleY
                }
            }, h.Slot = function(a, b, c) {
                this.data = a, this.skeleton = b, this.bone = c, this.setToSetupPose()
            }, h.Slot.prototype = {
                r: 1,
                g: 1,
                b: 1,
                a: 1,
                _attachmentTime: 0,
                attachment: null,
                setAttachment: function(a) {
                    this.attachment = a, this._attachmentTime = this.skeleton.time
                },
                setAttachmentTime: function(a) {
                    this._attachmentTime = this.skeleton.time - a
                },
                getAttachmentTime: function() {
                    return this.skeleton.time - this._attachmentTime
                },
                setToSetupPose: function() {
                    var a = this.data;
                    this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a;
                    for(var b = this.skeleton.data.slots, c = 0, d = b.length; d > c; c++)
                        if(b[c] == a) {
                            this.setAttachment(a.attachmentName ? this.skeleton.getAttachmentBySlotIndex(c, a.attachmentName) : null);
                            break
                        }
                }
            }, h.Skin = function(a) {
                this.name = a, this.attachments = {}
            }, h.Skin.prototype = {
                addAttachment: function(a, b, c) {
                    this.attachments[a + ":" + b] = c
                },
                getAttachment: function(a, b) {
                    return this.attachments[a + ":" + b]
                },
                _attachAll: function(a, b) {
                    for(var c in b.attachments) {
                        var d = c.indexOf(":"),
                            e = parseInt(c.substring(0, d), 10),
                            f = c.substring(d + 1),
                            g = a.slots[e];
                        if(g.attachment && g.attachment.name == f) {
                            var h = this.getAttachment(e, f);
                            h && g.setAttachment(h)
                        }
                    }
                }
            }, h.Animation = function(a, b, c) {
                this.name = a, this.timelines = b, this.duration = c
            }, h.Animation.prototype = {
                apply: function(a, b, c) {
                    c && this.duration && (b %= this.duration);
                    for(var d = this.timelines, e = 0, f = d.length; f > e; e++) d[e].apply(a, b, 1)
                },
                mix: function(a, b, c, d) {
                    c && this.duration && (b %= this.duration);
                    for(var e = this.timelines, f = 0, g = e.length; g > f; f++) e[f].apply(a, b, d)
                }
            }, h.binarySearch = function(a, b, c) {
                var d = 0,
                    e = Math.floor(a.length / c) - 2;
                if(!e) return c;
                for(var f = e >>> 1;;) {
                    if(a[(f + 1) * c] <= b ? d = f + 1 : e = f, d == e) return(d + 1) * c;
                    f = d + e >>> 1
                }
            }, h.linearSearch = function(a, b, c) {
                for(var d = 0, e = a.length - c; e >= d; d += c)
                    if(a[d] > b) return d;
                return -1
            }, h.Curves = function(a) {
                this.curves = [], this.curves.length = 6 * (a - 1)
            }, h.Curves.prototype = {
                setLinear: function(a) {
                    this.curves[6 * a] = 0
                },
                setStepped: function(a) {
                    this.curves[6 * a] = -1
                },
                setCurve: function(a, b, c, d, e) {
                    var f = .1,
                        g = f * f,
                        h = g * f,
                        i = 3 * f,
                        j = 3 * g,
                        k = 6 * g,
                        l = 6 * h,
                        m = 2 * -b + d,
                        n = 2 * -c + e,
                        o = 3 * (b - d) + 1,
                        p = 3 * (c - e) + 1,
                        q = 6 * a,
                        r = this.curves;
                    r[q] = b * i + m * j + o * h, r[q + 1] = c * i + n * j + p * h, r[q + 2] = m * k + o * l, r[q + 3] = n * k + p * l, r[q + 4] = o * l, r[q + 5] = p * l
                },
                getCurvePercent: function(a, b) {
                    b = 0 > b ? 0 : b > 1 ? 1 : b;
                    var c = 6 * a,
                        d = this.curves,
                        e = d[c];
                    if(!e) return b;
                    if(-1 == e) return 0;
                    for(var f = d[c + 1], g = d[c + 2], h = d[c + 3], i = d[c + 4], j = d[c + 5], k = e, l = f, m = 8;;) {
                        if(k >= b) {
                            var n = k - e,
                                o = l - f;
                            return o + (l - o) * (b - n) / (k - n)
                        }
                        if(!m) break;
                        m--, e += g, f += h, g += i, h += j, k += e, l += f
                    }
                    return l + (1 - l) * (b - k) / (1 - k)
                }
            }, h.RotateTimeline = function(a) {
                this.curves = new h.Curves(a), this.frames = [], this.frames.length = 2 * a
            }, h.RotateTimeline.prototype = {
                boneIndex: 0,
                getFrameCount: function() {
                    return this.frames.length / 2
                },
                setFrame: function(a, b, c) {
                    a *= 2, this.frames[a] = b, this.frames[a + 1] = c
                },
                apply: function(a, b, c) {
                    var d, e = this.frames;
                    if(!(b < e[0])) {
                        var f = a.bones[this.boneIndex];
                        if(b >= e[e.length - 2]) {
                            for(d = f.data.rotation + e[e.length - 1] - f.rotation; d > 180;) d -= 360;
                            for(; - 180 > d;) d += 360;
                            return void(f.rotation += d * c)
                        }
                        var g = h.binarySearch(e, b, 2),
                            i = e[g - 1],
                            j = e[g],
                            k = 1 - (b - j) / (e[g - 2] - j);
                        for(k = this.curves.getCurvePercent(g / 2 - 1, k), d = e[g + 1] - i; d > 180;) d -= 360;
                        for(; - 180 > d;) d += 360;
                        for(d = f.data.rotation + (i + d * k) - f.rotation; d > 180;) d -= 360;
                        for(; - 180 > d;) d += 360;
                        f.rotation += d * c
                    }
                }
            }, h.TranslateTimeline = function(a) {
                this.curves = new h.Curves(a), this.frames = [], this.frames.length = 3 * a
            }, h.TranslateTimeline.prototype = {
                boneIndex: 0,
                getFrameCount: function() {
                    return this.frames.length / 3
                },
                setFrame: function(a, b, c, d) {
                    a *= 3, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d
                },
                apply: function(a, b, c) {
                    var d = this.frames;
                    if(!(b < d[0])) {
                        var e = a.bones[this.boneIndex];
                        if(b >= d[d.length - 3]) return e.x += (e.data.x + d[d.length - 2] - e.x) * c, void(e.y += (e.data.y + d[d.length - 1] - e.y) * c);
                        var f = h.binarySearch(d, b, 3),
                            g = d[f - 2],
                            i = d[f - 1],
                            j = d[f],
                            k = 1 - (b - j) / (d[f + -3] - j);
                        k = this.curves.getCurvePercent(f / 3 - 1, k), e.x += (e.data.x + g + (d[f + 1] - g) * k - e.x) * c, e.y += (e.data.y + i + (d[f + 2] - i) * k - e.y) * c
                    }
                }
            }, h.ScaleTimeline = function(a) {
                this.curves = new h.Curves(a), this.frames = [], this.frames.length = 3 * a
            }, h.ScaleTimeline.prototype = {
                boneIndex: 0,
                getFrameCount: function() {
                    return this.frames.length / 3
                },
                setFrame: function(a, b, c, d) {
                    a *= 3, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d
                },
                apply: function(a, b, c) {
                    var d = this.frames;
                    if(!(b < d[0])) {
                        var e = a.bones[this.boneIndex];
                        if(b >= d[d.length - 3]) return e.scaleX += (e.data.scaleX - 1 + d[d.length - 2] - e.scaleX) * c, void(e.scaleY += (e.data.scaleY - 1 + d[d.length - 1] - e.scaleY) * c);
                        var f = h.binarySearch(d, b, 3),
                            g = d[f - 2],
                            i = d[f - 1],
                            j = d[f],
                            k = 1 - (b - j) / (d[f + -3] - j);
                        k = this.curves.getCurvePercent(f / 3 - 1, k), e.scaleX += (e.data.scaleX - 1 + g + (d[f + 1] - g) * k - e.scaleX) * c, e.scaleY += (e.data.scaleY - 1 + i + (d[f + 2] - i) * k - e.scaleY) * c
                    }
                }
            }, h.ColorTimeline = function(a) {
                this.curves = new h.Curves(a), this.frames = [], this.frames.length = 5 * a
            }, h.ColorTimeline.prototype = {
                slotIndex: 0,
                getFrameCount: function() {
                    return this.frames.length / 5
                },
                setFrame: function(a, b, c, d, e, f) {
                    a *= 5, this.frames[a] = b, this.frames[a + 1] = c, this.frames[a + 2] = d, this.frames[a + 3] = e, this.frames[a + 4] = f
                },
                apply: function(a, b, c) {
                    var d = this.frames;
                    if(!(b < d[0])) {
                        var e = a.slots[this.slotIndex];
                        if(b >= d[d.length - 5]) {
                            var f = d.length - 1;
                            return e.r = d[f - 3], e.g = d[f - 2], e.b = d[f - 1], void(e.a = d[f])
                        }
                        var g = h.binarySearch(d, b, 5),
                            i = d[g - 4],
                            j = d[g - 3],
                            k = d[g - 2],
                            l = d[g - 1],
                            m = d[g],
                            n = 1 - (b - m) / (d[g - 5] - m);
                        n = this.curves.getCurvePercent(g / 5 - 1, n);
                        var o = i + (d[g + 1] - i) * n,
                            p = j + (d[g + 2] - j) * n,
                            q = k + (d[g + 3] - k) * n,
                            r = l + (d[g + 4] - l) * n;
                        1 > c ? (e.r += (o - e.r) * c, e.g += (p - e.g) * c, e.b += (q - e.b) * c, e.a += (r - e.a) * c) : (e.r = o, e.g = p, e.b = q, e.a = r)
                    }
                }
            }, h.AttachmentTimeline = function(a) {
                this.curves = new h.Curves(a), this.frames = [], this.frames.length = a, this.attachmentNames = [], this.attachmentNames.length = a
            }, h.AttachmentTimeline.prototype = {
                slotIndex: 0,
                getFrameCount: function() {
                    return this.frames.length
                },
                setFrame: function(a, b, c) {
                    this.frames[a] = b, this.attachmentNames[a] = c
                },
                apply: function(a, b) {
                    var c = this.frames;
                    if(!(b < c[0])) {
                        var d;
                        d = b >= c[c.length - 1] ? c.length - 1 : h.binarySearch(c, b, 1) - 1;
                        var e = this.attachmentNames[d];
                        a.slots[this.slotIndex].setAttachment(e ? a.getAttachmentBySlotIndex(this.slotIndex, e) : null)
                    }
                }
            }, h.SkeletonData = function() {
                this.bones = [], this.slots = [], this.skins = [], this.animations = []
            }, h.SkeletonData.prototype = {
                defaultSkin: null,
                findBone: function(a) {
                    for(var b = this.bones, c = 0, d = b.length; d > c; c++)
                        if(b[c].name == a) return b[c];
                    return null
                },
                findBoneIndex: function(a) {
                    for(var b = this.bones, c = 0, d = b.length; d > c; c++)
                        if(b[c].name == a) return c;
                    return -1
                },
                findSlot: function(a) {
                    for(var b = this.slots, c = 0, d = b.length; d > c; c++)
                        if(b[c].name == a) return slot[c];
                    return null
                },
                findSlotIndex: function(a) {
                    for(var b = this.slots, c = 0, d = b.length; d > c; c++)
                        if(b[c].name == a) return c;
                    return -1
                },
                findSkin: function(a) {
                    for(var b = this.skins, c = 0, d = b.length; d > c; c++)
                        if(b[c].name == a) return b[c];
                    return null
                },
                findAnimation: function(a) {
                    for(var b = this.animations, c = 0, d = b.length; d > c; c++)
                        if(b[c].name == a) return b[c];
                    return null
                }
            }, h.Skeleton = function(a) {
                this.data = a, this.bones = [];
                for(var b = 0, c = a.bones.length; c > b; b++) {
                    var d = a.bones[b],
                        e = d.parent ? this.bones[a.bones.indexOf(d.parent)] : null;
                    this.bones.push(new h.Bone(d, e))
                }
                for(this.slots = [], this.drawOrder = [], b = 0, c = a.slots.length; c > b; b++) {
                    var f = a.slots[b],
                        g = this.bones[a.bones.indexOf(f.boneData)],
                        i = new h.Slot(f, this, g);
                    this.slots.push(i), this.drawOrder.push(i)
                }
            }, h.Skeleton.prototype = {
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
                updateWorldTransform: function() {
                    for(var a = this.flipX, b = this.flipY, c = this.bones, d = 0, e = c.length; e > d; d++) c[d].updateWorldTransform(a, b)
                },
                setToSetupPose: function() {
                    this.setBonesToSetupPose(), this.setSlotsToSetupPose()
                },
                setBonesToSetupPose: function() {
                    for(var a = this.bones, b = 0, c = a.length; c > b; b++) a[b].setToSetupPose()
                },
                setSlotsToSetupPose: function() {
                    for(var a = this.slots, b = 0, c = a.length; c > b; b++) a[b].setToSetupPose(b)
                },
                getRootBone: function() {
                    return this.bones.length ? this.bones[0] : null
                },
                findBone: function(a) {
                    for(var b = this.bones, c = 0, d = b.length; d > c; c++)
                        if(b[c].data.name == a) return b[c];
                    return null
                },
                findBoneIndex: function(a) {
                    for(var b = this.bones, c = 0, d = b.length; d > c; c++)
                        if(b[c].data.name == a) return c;
                    return -1
                },
                findSlot: function(a) {
                    for(var b = this.slots, c = 0, d = b.length; d > c; c++)
                        if(b[c].data.name == a) return b[c];
                    return null
                },
                findSlotIndex: function(a) {
                    for(var b = this.slots, c = 0, d = b.length; d > c; c++)
                        if(b[c].data.name == a) return c;
                    return -1
                },
                setSkinByName: function(a) {
                    var b = this.data.findSkin(a);
                    if(!b) throw "Skin not found: " + a;
                    this.setSkin(b)
                },
                setSkin: function(a) {
                    this.skin && a && a._attachAll(this, this.skin), this.skin = a
                },
                getAttachmentBySlotName: function(a, b) {
                    return this.getAttachmentBySlotIndex(this.data.findSlotIndex(a), b)
                },
                getAttachmentBySlotIndex: function(a, b) {
                    if(this.skin) {
                        var c = this.skin.getAttachment(a, b);
                        if(c) return c
                    }
                    return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(a, b) : null
                },
                setAttachment: function(a, b) {
                    for(var c = this.slots, d = 0, e = c.size; e > d; d++) {
                        var f = c[d];
                        if(f.data.name == a) {
                            var g = null;
                            if(b && (g = this.getAttachment(d, b), null == g)) throw "Attachment not found: " + b + ", for slot: " + a;
                            return void f.setAttachment(g)
                        }
                    }
                    throw "Slot not found: " + a
                },
                update: function(a) {
                    time += a
                }
            }, h.AttachmentType = {
                region: 0
            }, h.RegionAttachment = function() {
                this.offset = [], this.offset.length = 8, this.uvs = [], this.uvs.length = 8
            }, h.RegionAttachment.prototype = {
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
                setUVs: function(a, b, c, d, e) {
                    var f = this.uvs;
                    e ? (f[2] = a, f[3] = d, f[4] = a, f[5] = b, f[6] = c, f[7] = b, f[0] = c, f[1] = d) : (f[0] = a, f[1] = d, f[2] = a, f[3] = b, f[4] = c, f[5] = b, f[6] = c, f[7] = d)
                },
                updateOffset: function() {
                    var a = this.width / this.regionOriginalWidth * this.scaleX,
                        b = this.height / this.regionOriginalHeight * this.scaleY,
                        c = -this.width / 2 * this.scaleX + this.regionOffsetX * a,
                        d = -this.height / 2 * this.scaleY + this.regionOffsetY * b,
                        e = c + this.regionWidth * a,
                        f = d + this.regionHeight * b,
                        g = this.rotation * Math.PI / 180,
                        h = Math.cos(g),
                        i = Math.sin(g),
                        j = c * h + this.x,
                        k = c * i,
                        l = d * h + this.y,
                        m = d * i,
                        n = e * h + this.x,
                        o = e * i,
                        p = f * h + this.y,
                        q = f * i,
                        r = this.offset;
                    r[0] = j - m, r[1] = l + k, r[2] = j - q, r[3] = p + k, r[4] = n - q, r[5] = p + o, r[6] = n - m, r[7] = l + o
                },
                computeVertices: function(a, b, c, d) {
                    a += c.worldX, b += c.worldY;
                    var e = c.m00,
                        f = c.m01,
                        g = c.m10,
                        h = c.m11,
                        i = this.offset;
                    d[0] = i[0] * e + i[1] * f + a, d[1] = i[0] * g + i[1] * h + b, d[2] = i[2] * e + i[3] * f + a, d[3] = i[2] * g + i[3] * h + b, d[4] = i[4] * e + i[5] * f + a, d[5] = i[4] * g + i[5] * h + b, d[6] = i[6] * e + i[7] * f + a, d[7] = i[6] * g + i[7] * h + b
                }
            }, h.AnimationStateData = function(a) {
                this.skeletonData = a, this.animationToMixTime = {}
            }, h.AnimationStateData.prototype = {
                defaultMix: 0,
                setMixByName: function(a, b, c) {
                    var d = this.skeletonData.findAnimation(a);
                    if(!d) throw "Animation not found: " + a;
                    var e = this.skeletonData.findAnimation(b);
                    if(!e) throw "Animation not found: " + b;
                    this.setMix(d, e, c)
                },
                setMix: function(a, b, c) {
                    this.animationToMixTime[a.name + ":" + b.name] = c
                },
                getMix: function(a, b) {
                    var c = this.animationToMixTime[a.name + ":" + b.name];
                    return c ? c : this.defaultMix
                }
            }, h.AnimationState = function(a) {
                this.data = a, this.queue = []
            }, h.AnimationState.prototype = {
                animationSpeed: 1,
                current: null,
                previous: null,
                currentTime: 0,
                previousTime: 0,
                currentLoop: !1,
                previousLoop: !1,
                mixTime: 0,
                mixDuration: 0,
                update: function(a) {
                    if(this.currentTime += a * this.animationSpeed, this.previousTime += a, this.mixTime += a, this.queue.length > 0) {
                        var b = this.queue[0];
                        this.currentTime >= b.delay && (this._setAnimation(b.animation, b.loop), this.queue.shift())
                    }
                },
                apply: function(a) {
                    if(this.current)
                        if(this.previous) {
                            this.previous.apply(a, this.previousTime, this.previousLoop);
                            var b = this.mixTime / this.mixDuration;
                            b >= 1 && (b = 1, this.previous = null), this.current.mix(a, this.currentTime, this.currentLoop, b)
                        } else this.current.apply(a, this.currentTime, this.currentLoop)
                },
                clearAnimation: function() {
                    this.previous = null, this.current = null, this.queue.length = 0
                },
                _setAnimation: function(a, b) {
                    this.previous = null, a && this.current && (this.mixDuration = this.data.getMix(this.current, a), this.mixDuration > 0 && (this.mixTime = 0, this.previous = this.current, this.previousTime = this.currentTime, this.previousLoop = this.currentLoop)), this.current = a, this.currentLoop = b, this.currentTime = 0
                },
                setAnimationByName: function(a, b) {
                    var c = this.data.skeletonData.findAnimation(a);
                    if(!c) throw "Animation not found: " + a;
                    this.setAnimation(c, b)
                },
                setAnimation: function(a, b) {
                    this.queue.length = 0, this._setAnimation(a, b)
                },
                addAnimationByName: function(a, b, c) {
                    var d = this.data.skeletonData.findAnimation(a);
                    if(!d) throw "Animation not found: " + a;
                    this.addAnimation(d, b, c)
                },
                addAnimation: function(a, b, c) {
                    var d = {};
                    if(d.animation = a, d.loop = b, !c || 0 >= c) {
                        var e = this.queue.length ? this.queue[this.queue.length - 1].animation : this.current;
                        c = null != e ? e.duration - this.data.getMix(e, a) + (c || 0) : 0
                    }
                    d.delay = c, this.queue.push(d)
                },
                isComplete: function() {
                    return !this.current || this.currentTime >= this.current.duration
                }
            }, h.SkeletonJson = function(a) {
                this.attachmentLoader = a
            }, h.SkeletonJson.prototype = {
                scale: 1,
                readSkeletonData: function(a) {
                    for(var b, c = new h.SkeletonData, d = a.bones, e = 0, f = d.length; f > e; e++) {
                        var g = d[e],
                            i = null;
                        if(g.parent && (i = c.findBone(g.parent), !i)) throw "Parent bone not found: " + g.parent;
                        b = new h.BoneData(g.name, i), b.length = (g.length || 0) * this.scale, b.x = (g.x || 0) * this.scale, b.y = (g.y || 0) * this.scale, b.rotation = g.rotation || 0, b.scaleX = g.scaleX || 1, b.scaleY = g.scaleY || 1, c.bones.push(b)
                    }
                    var j = a.slots;
                    for(e = 0, f = j.length; f > e; e++) {
                        var k = j[e];
                        if(b = c.findBone(k.bone), !b) throw "Slot bone not found: " + k.bone;
                        var l = new h.SlotData(k.name, b),
                            m = k.color;
                        m && (l.r = h.SkeletonJson.toColor(m, 0), l.g = h.SkeletonJson.toColor(m, 1), l.b = h.SkeletonJson.toColor(m, 2), l.a = h.SkeletonJson.toColor(m, 3)), l.attachmentName = k.attachment, c.slots.push(l)
                    }
                    var n = a.skins;
                    for(var o in n)
                        if(n.hasOwnProperty(o)) {
                            var p = n[o],
                                q = new h.Skin(o);
                            for(var r in p)
                                if(p.hasOwnProperty(r)) {
                                    var s = c.findSlotIndex(r),
                                        t = p[r];
                                    for(var u in t)
                                        if(t.hasOwnProperty(u)) {
                                            var v = this.readAttachment(q, u, t[u]);
                                            null != v && q.addAttachment(s, u, v)
                                        }
                                }
                            c.skins.push(q), "default" == q.name && (c.defaultSkin = q)
                        }
                    var w = a.animations;
                    for(var x in w) w.hasOwnProperty(x) && this.readAnimation(x, w[x], c);
                    return c
                },
                readAttachment: function(a, b, c) {
                    b = c.name || b;
                    var d = h.AttachmentType[c.type || "region"];
                    if(d == h.AttachmentType.region) {
                        var e = new h.RegionAttachment;
                        return e.x = (c.x || 0) * this.scale, e.y = (c.y || 0) * this.scale, e.scaleX = c.scaleX || 1, e.scaleY = c.scaleY || 1, e.rotation = c.rotation || 0, e.width = (c.width || 32) * this.scale, e.height = (c.height || 32) * this.scale, e.updateOffset(), e.rendererObject = {}, e.rendererObject.name = b, e.rendererObject.scale = {}, e.rendererObject.scale.x = e.scaleX, e.rendererObject.scale.y = e.scaleY, e.rendererObject.rotation = -e.rotation * Math.PI / 180, e
                    }
                    throw "Unknown attachment type: " + d
                },
                readAnimation: function(a, b, c) {
                    var d, e, f, g, i, j, k, l = [],
                        m = 0,
                        n = b.bones;
                    for(var o in n)
                        if(n.hasOwnProperty(o)) {
                            var p = c.findBoneIndex(o);
                            if(-1 == p) throw "Bone not found: " + o;
                            var q = n[o];
                            for(f in q)
                                if(q.hasOwnProperty(f))
                                    if(i = q[f], "rotate" == f) {
                                        for(e = new h.RotateTimeline(i.length), e.boneIndex = p, d = 0, j = 0, k = i.length; k > j; j++) g = i[j], e.setFrame(d, g.time, g.angle), h.SkeletonJson.readCurve(e, d, g), d++;
                                        l.push(e), m = Math.max(m, e.frames[2 * e.getFrameCount() - 2])
                                    } else {
                                        if("translate" != f && "scale" != f) throw "Invalid timeline type for a bone: " + f + " (" + o + ")";
                                        var r = 1;
                                        for("scale" == f ? e = new h.ScaleTimeline(i.length) : (e = new h.TranslateTimeline(i.length), r = this.scale), e.boneIndex = p, d = 0, j = 0, k = i.length; k > j; j++) {
                                            g = i[j];
                                            var s = (g.x || 0) * r,
                                                t = (g.y || 0) * r;
                                            e.setFrame(d, g.time, s, t), h.SkeletonJson.readCurve(e, d, g), d++
                                        }
                                        l.push(e), m = Math.max(m, e.frames[3 * e.getFrameCount() - 3])
                                    }
                        }
                    var u = b.slots;
                    for(var v in u)
                        if(u.hasOwnProperty(v)) {
                            var w = u[v],
                                x = c.findSlotIndex(v);
                            for(f in w)
                                if(w.hasOwnProperty(f))
                                    if(i = w[f], "color" == f) {
                                        for(e = new h.ColorTimeline(i.length), e.slotIndex = x, d = 0, j = 0, k = i.length; k > j; j++) {
                                            g = i[j];
                                            var y = g.color,
                                                z = h.SkeletonJson.toColor(y, 0),
                                                A = h.SkeletonJson.toColor(y, 1),
                                                B = h.SkeletonJson.toColor(y, 2),
                                                C = h.SkeletonJson.toColor(y, 3);
                                            e.setFrame(d, g.time, z, A, B, C), h.SkeletonJson.readCurve(e, d, g), d++
                                        }
                                        l.push(e), m = Math.max(m, e.frames[5 * e.getFrameCount() - 5])
                                    } else {
                                        if("attachment" != f) throw "Invalid timeline type for a slot: " + f + " (" + v + ")";
                                        for(e = new h.AttachmentTimeline(i.length), e.slotIndex = x, d = 0, j = 0, k = i.length; k > j; j++) g = i[j], e.setFrame(d++, g.time, g.name);
                                        l.push(e), m = Math.max(m, e.frames[e.getFrameCount() - 1])
                                    }
                        }
                    c.animations.push(new h.Animation(a, l, m))
                }
            }, h.SkeletonJson.readCurve = function(a, b, c) {
                var d = c.curve;
                d && ("stepped" == d ? a.curves.setStepped(b) : d instanceof Array && a.curves.setCurve(b, d[0], d[1], d[2], d[3]))
            }, h.SkeletonJson.toColor = function(a, b) {
                if(8 != a.length) throw "Color hexidecimal length must be 8, recieved: " + a;
                return parseInt(a.substr(2 * b, 2), 16) / 255
            }, h.Atlas = function(a, b) {
                this.textureLoader = b, this.pages = [], this.regions = [];
                var c = new h.AtlasReader(a),
                    d = [];
                d.length = 4;
                for(var e = null;;) {
                    var f = c.readLine();
                    if(null == f) break;
                    if(f = c.trim(f), f.length)
                        if(e) {
                            var g = new h.AtlasRegion;
                            g.name = f, g.page = e, g.rotate = "true" == c.readValue(), c.readTuple(d);
                            var i = parseInt(d[0], 10),
                                j = parseInt(d[1], 10);
                            c.readTuple(d);
                            var k = parseInt(d[0], 10),
                                l = parseInt(d[1], 10);
                            g.u = i / e.width, g.v = j / e.height, g.rotate ? (g.u2 = (i + l) / e.width, g.v2 = (j + k) / e.height) : (g.u2 = (i + k) / e.width, g.v2 = (j + l) / e.height), g.x = i, g.y = j, g.width = Math.abs(k), g.height = Math.abs(l), 4 == c.readTuple(d) && (g.splits = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10)], 4 == c.readTuple(d) && (g.pads = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10), parseInt(d[3], 10)], c.readTuple(d))), g.originalWidth = parseInt(d[0], 10), g.originalHeight = parseInt(d[1], 10), c.readTuple(d), g.offsetX = parseInt(d[0], 10), g.offsetY = parseInt(d[1], 10), g.index = parseInt(c.readValue(), 10), this.regions.push(g)
                        } else {
                            e = new h.AtlasPage, e.name = f, e.format = h.Atlas.Format[c.readValue()], c.readTuple(d), e.minFilter = h.Atlas.TextureFilter[d[0]], e.magFilter = h.Atlas.TextureFilter[d[1]];
                            var m = c.readValue();
                            e.uWrap = h.Atlas.TextureWrap.clampToEdge, e.vWrap = h.Atlas.TextureWrap.clampToEdge, "x" == m ? e.uWrap = h.Atlas.TextureWrap.repeat : "y" == m ? e.vWrap = h.Atlas.TextureWrap.repeat : "xy" == m && (e.uWrap = e.vWrap = h.Atlas.TextureWrap.repeat), b.load(e, f), this.pages.push(e)
                        } else e = null
                }
            }, h.Atlas.prototype = {
                findRegion: function(a) {
                    for(var b = this.regions, c = 0, d = b.length; d > c; c++)
                        if(b[c].name == a) return b[c];
                    return null
                },
                dispose: function() {
                    for(var a = this.pages, b = 0, c = a.length; c > b; b++) this.textureLoader.unload(a[b].rendererObject)
                },
                updateUVs: function(a) {
                    for(var b = this.regions, c = 0, d = b.length; d > c; c++) {
                        var e = b[c];
                        e.page == a && (e.u = e.x / a.width, e.v = e.y / a.height, e.rotate ? (e.u2 = (e.x + e.height) / a.width, e.v2 = (e.y + e.width) / a.height) : (e.u2 = (e.x + e.width) / a.width, e.v2 = (e.y + e.height) / a.height))
                    }
                }
            }, h.Atlas.Format = {
                alpha: 0,
                intensity: 1,
                luminanceAlpha: 2,
                rgb565: 3,
                rgba4444: 4,
                rgb888: 5,
                rgba8888: 6
            }, h.Atlas.TextureFilter = {
                nearest: 0,
                linear: 1,
                mipMap: 2,
                mipMapNearestNearest: 3,
                mipMapLinearNearest: 4,
                mipMapNearestLinear: 5,
                mipMapLinearLinear: 6
            }, h.Atlas.TextureWrap = {
                mirroredRepeat: 0,
                clampToEdge: 1,
                repeat: 2
            }, h.AtlasPage = function() {}, h.AtlasPage.prototype = {
                name: null,
                format: null,
                minFilter: null,
                magFilter: null,
                uWrap: null,
                vWrap: null,
                rendererObject: null,
                width: 0,
                height: 0
            }, h.AtlasRegion = function() {}, h.AtlasRegion.prototype = {
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
            }, h.AtlasReader = function(a) {
                this.lines = a.split(/\r\n|\r|\n/)
            }, h.AtlasReader.prototype = {
                index: 0,
                trim: function(a) {
                    return a.replace(/^\s+|\s+$/g, "")
                },
                readLine: function() {
                    return this.index >= this.lines.length ? null : this.lines[this.index++]
                },
                readValue: function() {
                    var a = this.readLine(),
                        b = a.indexOf(":");
                    if(-1 == b) throw "Invalid line: " + a;
                    return this.trim(a.substring(b + 1))
                },
                readTuple: function(a) {
                    var b = this.readLine(),
                        c = b.indexOf(":");
                    if(-1 == c) throw "Invalid line: " + b;
                    for(var d = 0, e = c + 1; 3 > d; d++) {
                        var f = b.indexOf(",", e);
                        if(-1 == f) {
                            if(!d) throw "Invalid line: " + b;
                            break
                        }
                        a[d] = this.trim(b.substr(e, f - e)), e = f + 1
                    }
                    return a[d] = this.trim(b.substring(e)), d + 1
                }
            }, h.AtlasAttachmentLoader = function(a) {
                this.atlas = a
            }, h.AtlasAttachmentLoader.prototype = {
                newAttachment: function(a, b, c) {
                    switch(b) {
                        case h.AttachmentType.region:
                            var d = this.atlas.findRegion(c);
                            if(!d) throw "Region not found in atlas: " + c + " (" + b + ")";
                            var e = new h.RegionAttachment(c);
                            return e.rendererObject = d, e.setUVs(d.u, d.v, d.u2, d.v2, d.rotate), e.regionOffsetX = d.offsetX, e.regionOffsetY = d.offsetY, e.regionWidth = d.width, e.regionHeight = d.height, e.regionOriginalWidth = d.originalWidth, e.regionOriginalHeight = d.originalHeight, e
                    }
                    throw "Unknown attachment type: " + b
                }
            }, h.Bone.yDown = !0, d.AnimCache = {}, d.Spine = function(a) {
                if(d.DisplayObjectContainer.call(this), this.spineData = d.AnimCache[a], !this.spineData) throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: " + a);
                this.skeleton = new h.Skeleton(this.spineData), this.skeleton.updateWorldTransform(), this.stateData = new h.AnimationStateData(this.spineData), this.state = new h.AnimationState(this.stateData), this.slotContainers = [];
                for(var b = 0, c = this.skeleton.drawOrder.length; c > b; b++) {
                    var e = this.skeleton.drawOrder[b],
                        f = e.attachment,
                        g = new d.DisplayObjectContainer;
                    if(this.slotContainers.push(g), this.addChild(g), f instanceof h.RegionAttachment) {
                        var i = f.rendererObject.name,
                            j = this.createSprite(e, f.rendererObject);
                        e.currentSprite = j, e.currentSpriteName = i, g.addChild(j)
                    }
                }
            }, d.Spine.prototype = Object.create(d.DisplayObjectContainer.prototype), d.Spine.prototype.constructor = d.Spine, d.Spine.prototype.updateTransform = function() {
                this.lastTime = this.lastTime || Date.now();
                var a = .001 * (Date.now() - this.lastTime);
                this.lastTime = Date.now(), this.state.update(a), this.state.apply(this.skeleton), this.skeleton.updateWorldTransform();
                for(var b = this.skeleton.drawOrder, c = 0, e = b.length; e > c; c++) {
                    var f = b[c],
                        g = f.attachment,
                        i = this.slotContainers[c];
                    if(g instanceof h.RegionAttachment) {
                        if(g.rendererObject && (!f.currentSpriteName || f.currentSpriteName != g.name)) {
                            var j = g.rendererObject.name;
                            if(void 0 !== f.currentSprite && (f.currentSprite.visible = !1), f.sprites = f.sprites || {}, void 0 !== f.sprites[j]) f.sprites[j].visible = !0;
                            else {
                                var k = this.createSprite(f, g.rendererObject);
                                i.addChild(k)
                            }
                            f.currentSprite = f.sprites[j], f.currentSpriteName = j
                        }
                        i.visible = !0;
                        var l = f.bone;
                        i.position.x = l.worldX + g.x * l.m00 + g.y * l.m01, i.position.y = l.worldY + g.x * l.m10 + g.y * l.m11, i.scale.x = l.worldScaleX, i.scale.y = l.worldScaleY, i.rotation = -(f.bone.worldRotation * Math.PI / 180), i.alpha = f.a, f.currentSprite.tint = d.rgb2hex([f.r, f.g, f.b])
                    } else i.visible = !1
                }
                d.DisplayObjectContainer.prototype.updateTransform.call(this)
            }, d.Spine.prototype.createSprite = function(a, b) {
                var c = d.TextureCache[b.name] ? b.name : b.name + ".png",
                    e = new d.Sprite(d.Texture.fromFrame(c));
                return e.scale = b.scale, e.rotation = b.rotation, e.anchor.x = e.anchor.y = .5, a.sprites = a.sprites || {}, a.sprites[b.name] = e, e
            }, d.BaseTextureCache = {}, d.texturesToUpdate = [], d.texturesToDestroy = [], d.BaseTextureCacheIdGenerator = 0, d.BaseTexture = function(a, b) {
                if(d.EventTarget.call(this), this.width = 100, this.height = 100, this.scaleMode = b || d.scaleModes.DEFAULT, this.hasLoaded = !1, this.source = a, this.id = d.BaseTextureCacheIdGenerator++, this.premultipliedAlpha = !0, this._glTextures = [], this._dirty = [], a) {
                    if((this.source.complete || this.source.getContext) && this.source.width && this.source.height) this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, d.texturesToUpdate.push(this);
                    else {
                        var c = this;
                        this.source.onload = function() {
                            c.hasLoaded = !0, c.width = c.source.width, c.height = c.source.height;
                            for(var a = 0; a < c._glTextures.length; a++) c._dirty[a] = !0;
                            c.dispatchEvent({
                                type: "loaded",
                                content: c
                            })
                        }, this.source.onerror = function() {
                            c.dispatchEvent({
                                type: "error",
                                content: c
                            })
                        }
                    }
                    this.imageUrl = null, this._powerOf2 = !1
                }
            }, d.BaseTexture.prototype.constructor = d.BaseTexture, d.BaseTexture.prototype.destroy = function() {
                this.imageUrl ? (delete d.BaseTextureCache[this.imageUrl], delete d.TextureCache[this.imageUrl], this.imageUrl = null, this.source.src = null) : this.source && this.source._pixiId && delete d.BaseTextureCache[this.source._pixiId], this.source = null, d.texturesToDestroy.push(this)
            }, d.BaseTexture.prototype.updateSourceImage = function(a) {
                this.hasLoaded = !1, this.source.src = null, this.source.src = a
            }, d.BaseTexture.fromImage = function(a, b, c) {
                var e = d.BaseTextureCache[a];
                if(void 0 === b && -1 === a.indexOf("data:") && (b = !0), !e) {
                    var f = new Image;
                    b && (f.crossOrigin = ""), f.src = a, e = new d.BaseTexture(f, c), e.imageUrl = a, d.BaseTextureCache[a] = e
                }
                return e
            }, d.BaseTexture.fromCanvas = function(a, b) {
                a._pixiId || (a._pixiId = "canvas_" + d.TextureCacheIdGenerator++);
                var c = d.BaseTextureCache[a._pixiId];
                return c || (c = new d.BaseTexture(a, b), d.BaseTextureCache[a._pixiId] = c), c
            }, d.TextureCache = {}, d.FrameCache = {}, d.TextureCacheIdGenerator = 0, d.Texture = function(a, b) {
                if(d.EventTarget.call(this), this.noFrame = !1, b || (this.noFrame = !0, b = new d.Rectangle(0, 0, 1, 1)), a instanceof d.Texture && (a = a.baseTexture), this.baseTexture = a, this.frame = b, this.trim = null, this.valid = !1, this.scope = this, this._uvs = null, this.width = 0, this.height = 0, this.crop = new d.Rectangle(0, 0, 1, 1), a.hasLoaded) this.noFrame && (b = new d.Rectangle(0, 0, a.width, a.height)), this.setFrame(b);
                else {
                    var c = this;
                    a.addEventListener("loaded", function() {
                        c.onBaseTextureLoaded()
                    })
                }
            }, d.Texture.prototype.constructor = d.Texture, d.Texture.prototype.onBaseTextureLoaded = function() {
                var a = this.baseTexture;
                a.removeEventListener("loaded", this.onLoaded), this.noFrame && (this.frame = new d.Rectangle(0, 0, a.width, a.height)), this.setFrame(this.frame), this.scope.dispatchEvent({
                    type: "update",
                    content: this
                })
            }, d.Texture.prototype.destroy = function(a) {
                a && this.baseTexture.destroy(), this.valid = !1
            }, d.Texture.prototype.setFrame = function(a) {
                if(this.noFrame = !1, this.frame = a, this.width = a.width, this.height = a.height, this.crop.x = a.x, this.crop.y = a.y, this.crop.width = a.width, this.crop.height = a.height, !this.trim && (a.x + a.width > this.baseTexture.width || a.y + a.height > this.baseTexture.height)) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                this.valid = a && a.width && a.height && this.baseTexture.source && this.baseTexture.hasLoaded, this.trim && (this.width = this.trim.width, this.height = this.trim.height, this.frame.width = this.trim.width, this.frame.height = this.trim.height), this.valid && d.Texture.frameUpdates.push(this)
            }, d.Texture.prototype._updateWebGLuvs = function() {
                this._uvs || (this._uvs = new d.TextureUvs);
                var a = this.crop,
                    b = this.baseTexture.width,
                    c = this.baseTexture.height;
                this._uvs.x0 = a.x / b, this._uvs.y0 = a.y / c, this._uvs.x1 = (a.x + a.width) / b, this._uvs.y1 = a.y / c, this._uvs.x2 = (a.x + a.width) / b, this._uvs.y2 = (a.y + a.height) / c, this._uvs.x3 = a.x / b, this._uvs.y3 = (a.y + a.height) / c
            }, d.Texture.fromImage = function(a, b, c) {
                var e = d.TextureCache[a];
                return e || (e = new d.Texture(d.BaseTexture.fromImage(a, b, c)), d.TextureCache[a] = e), e
            }, d.Texture.fromFrame = function(a) {
                var b = d.TextureCache[a];
                if(!b) throw new Error('The frameId "' + a + '" does not exist in the texture cache ');
                return b
            }, d.Texture.fromCanvas = function(a, b) {
                var c = d.BaseTexture.fromCanvas(a, b);
                return new d.Texture(c)
            }, d.Texture.addTextureToCache = function(a, b) {
                d.TextureCache[b] = a
            }, d.Texture.removeTextureFromCache = function(a) {
                var b = d.TextureCache[a];
                return delete d.TextureCache[a], delete d.BaseTextureCache[a], b
            }, d.Texture.frameUpdates = [], d.TextureUvs = function() {
                this.x0 = 0, this.y0 = 0, this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.x3 = 0, this.y3 = 0
            }, d.RenderTexture = function(a, b, c, e) {
                if(d.EventTarget.call(this), this.width = a || 100, this.height = b || 100, this.frame = new d.Rectangle(0, 0, this.width, this.height), this.crop = new d.Rectangle(0, 0, this.width, this.height), this.baseTexture = new d.BaseTexture, this.baseTexture.width = this.width, this.baseTexture.height = this.height, this.baseTexture._glTextures = [], this.baseTexture.scaleMode = e || d.scaleModes.DEFAULT, this.baseTexture.hasLoaded = !0, this.renderer = c || d.defaultRenderer, this.renderer.type === d.WEBGL_RENDERER) {
                    var f = this.renderer.gl;
                    this.textureBuffer = new d.FilterTexture(f, this.width, this.height, this.baseTexture.scaleMode), this.baseTexture._glTextures[f.id] = this.textureBuffer.texture, this.render = this.renderWebGL, this.projection = new d.Point(this.width / 2, -this.height / 2)
                } else this.render = this.renderCanvas, this.textureBuffer = new d.CanvasBuffer(this.width, this.height), this.baseTexture.source = this.textureBuffer.canvas;
                this.valid = !0, d.Texture.frameUpdates.push(this)
            }, d.RenderTexture.prototype = Object.create(d.Texture.prototype), d.RenderTexture.prototype.constructor = d.RenderTexture, d.RenderTexture.prototype.resize = function(a, b, c) {
                (a !== this.width || b !== this.height) && (this.width = this.frame.width = this.crop.width = a, this.height = this.frame.height = this.crop.height = b, c && (this.baseTexture.width = this.width, this.baseTexture.height = this.height), this.renderer.type === d.WEBGL_RENDERER && (this.projection.x = this.width / 2, this.projection.y = -this.height / 2), this.textureBuffer.resize(this.width, this.height))
            }, d.RenderTexture.prototype.clear = function() {
                this.renderer.type === d.WEBGL_RENDERER && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer), this.textureBuffer.clear()
            }, d.RenderTexture.prototype.renderWebGL = function(a, b, c) {
                var e = this.renderer.gl;
                e.colorMask(!0, !0, !0, !0), e.viewport(0, 0, this.width, this.height), e.bindFramebuffer(e.FRAMEBUFFER, this.textureBuffer.frameBuffer), c && this.textureBuffer.clear();
                var f = a.children,
                    g = a.worldTransform;
                a.worldTransform = d.RenderTexture.tempMatrix, a.worldTransform.d = -1, a.worldTransform.ty = -2 * this.projection.y, b && (a.worldTransform.tx = b.x, a.worldTransform.ty -= b.y);
                for(var h = 0, i = f.length; i > h; h++) f[h].updateTransform();
                d.WebGLRenderer.updateTextures(), this.renderer.spriteBatch.dirty = !0, this.renderer.renderDisplayObject(a, this.projection, this.textureBuffer.frameBuffer), a.worldTransform = g, this.renderer.spriteBatch.dirty = !0
            }, d.RenderTexture.prototype.renderCanvas = function(a, b, c) {
                var e = a.children,
                    f = a.worldTransform;
                a.worldTransform = d.RenderTexture.tempMatrix, b ? (a.worldTransform.tx = b.x, a.worldTransform.ty = b.y) : (a.worldTransform.tx = 0, a.worldTransform.ty = 0);
                for(var g = 0, h = e.length; h > g; g++) e[g].updateTransform();
                c && this.textureBuffer.clear();
                var i = this.textureBuffer.context;
                this.renderer.renderDisplayObject(a, i), i.setTransform(1, 0, 0, 1, 0, 0), a.worldTransform = f
            }, d.RenderTexture.tempMatrix = new d.Matrix, d.AssetLoader = function(a, b) {
                d.EventTarget.call(this), this.assetURLs = a, this.crossorigin = b, this.loadersByType = {
                    jpg: d.ImageLoader,
                    jpeg: d.ImageLoader,
                    png: d.ImageLoader,
                    gif: d.ImageLoader,
                    webp: d.ImageLoader,
                    json: d.JsonLoader,
                    atlas: d.AtlasLoader,
                    anim: d.SpineLoader,
                    xml: d.BitmapFontLoader,
                    fnt: d.BitmapFontLoader
                }
            }, d.AssetLoader.prototype.constructor = d.AssetLoader, d.AssetLoader.prototype._getDataType = function(a) {
                var b = "data:",
                    c = a.slice(0, b.length).toLowerCase();
                if(c === b) {
                    var d = a.slice(b.length),
                        e = d.indexOf(",");
                    if(-1 === e) return null;
                    var f = d.slice(0, e).split(";")[0];
                    return f && "text/plain" !== f.toLowerCase() ? f.split("/").pop().toLowerCase() : "txt"
                }
                return null
            }, d.AssetLoader.prototype.load = function() {
                function a(a) {
                    b.onAssetLoaded(a.content)
                }
                var b = this;
                this.loadCount = this.assetURLs.length;
                for(var c = 0; c < this.assetURLs.length; c++) {
                    var d = this.assetURLs[c],
                        e = this._getDataType(d);
                    e || (e = d.split("?").shift().split(".").pop().toLowerCase());
                    var f = this.loadersByType[e];
                    if(!f) throw new Error(e + " is an unsupported file type");
                    var g = new f(d, this.crossorigin);
                    g.addEventListener("loaded", a), g.load()
                }
            }, d.AssetLoader.prototype.onAssetLoaded = function(a) {
                this.loadCount--, this.dispatchEvent({
                    type: "onProgress",
                    content: this,
                    loader: a
                }), this.onProgress && this.onProgress(a), this.loadCount || (this.dispatchEvent({
                    type: "onComplete",
                    content: this
                }), this.onComplete && this.onComplete())
            }, d.JsonLoader = function(a, b) {
                d.EventTarget.call(this), this.url = a, this.crossorigin = b, this.baseUrl = a.replace(/[^\/]*$/, ""), this.loaded = !1
            }, d.JsonLoader.prototype.constructor = d.JsonLoader, d.JsonLoader.prototype.load = function() {
                var a = this;
                window.XDomainRequest && a.crossorigin ? (this.ajaxRequest = new window.XDomainRequest, this.ajaxRequest.timeout = 3e3, this.ajaxRequest.onerror = function() {
                    a.onError()
                }, this.ajaxRequest.ontimeout = function() {
                    a.onError()
                }, this.ajaxRequest.onprogress = function() {}) : this.ajaxRequest = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP"), this.ajaxRequest.onload = function() {
                    a.onJSONLoaded()
                }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.send()
            }, d.JsonLoader.prototype.onJSONLoaded = function() {
                if(!this.ajaxRequest.responseText) return void this.onError();
                if(this.json = JSON.parse(this.ajaxRequest.responseText), this.json.frames) {
                    var a = this,
                        b = this.baseUrl + this.json.meta.image,
                        c = new d.ImageLoader(b, this.crossorigin),
                        e = this.json.frames;
                    this.texture = c.texture.baseTexture, c.addEventListener("loaded", function() {
                        a.onLoaded()
                    });
                    for(var f in e) {
                        var g = e[f].frame;
                        if(g && (d.TextureCache[f] = new d.Texture(this.texture, {
                            x: g.x,
                            y: g.y,
                            width: g.w,
                            height: g.h
                        }), d.TextureCache[f].crop = new d.Rectangle(g.x, g.y, g.w, g.h), e[f].trimmed)) {
                            var i = e[f].sourceSize,
                                j = e[f].spriteSourceSize;
                            d.TextureCache[f].trim = new d.Rectangle(j.x, j.y, i.w, i.h)
                        }
                    }
                    c.load()
                } else if(this.json.bones) {
                    var k = new h.SkeletonJson,
                        l = k.readSkeletonData(this.json);
                    d.AnimCache[this.url] = l, this.onLoaded()
                } else this.onLoaded()
            }, d.JsonLoader.prototype.onLoaded = function() {
                this.loaded = !0, this.dispatchEvent({
                    type: "loaded",
                    content: this
                })
            }, d.JsonLoader.prototype.onError = function() {
                this.dispatchEvent({
                    type: "error",
                    content: this
                })
            }, d.AtlasLoader = function(a, b) {
                d.EventTarget.call(this), this.url = a, this.baseUrl = a.replace(/[^\/]*$/, ""), this.crossorigin = b, this.loaded = !1
            }, d.AtlasLoader.constructor = d.AtlasLoader, d.AtlasLoader.prototype.load = function() {
                this.ajaxRequest = new d.AjaxRequest, this.ajaxRequest.onreadystatechange = this.onAtlasLoaded.bind(this), this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/json"), this.ajaxRequest.send(null)
            }, d.AtlasLoader.prototype.onAtlasLoaded = function() {
                if(4 === this.ajaxRequest.readyState)
                    if(200 === this.ajaxRequest.status || -1 === window.location.href.indexOf("http")) {
                        this.atlas = {
                            meta: {
                                image: []
                            },
                            frames: []
                        };
                        var a = this.ajaxRequest.responseText.split(/\r?\n/),
                            b = -3,
                            c = 0,
                            e = null,
                            f = !1,
                            g = 0,
                            h = 0,
                            i = this.onLoaded.bind(this);
                        for(g = 0; g < a.length; g++)
                            if(a[g] = a[g].replace(/^\s+|\s+$/g, ""), "" === a[g] && (f = g + 1), a[g].length > 0) {
                                if(f === g) this.atlas.meta.image.push(a[g]), c = this.atlas.meta.image.length - 1, this.atlas.frames.push({}), b = -3;
                                else if(b > 0)
                                    if(b % 7 === 1) null != e && (this.atlas.frames[c][e.name] = e), e = {
                                        name: a[g],
                                        frame: {}
                                    };
                                    else {
                                        var j = a[g].split(" ");
                                        if(b % 7 === 3) e.frame.x = Number(j[1].replace(",", "")), e.frame.y = Number(j[2]);
                                        else if(b % 7 === 4) e.frame.w = Number(j[1].replace(",", "")), e.frame.h = Number(j[2]);
                                        else if(b % 7 === 5) {
                                            var k = {
                                                x: 0,
                                                y: 0,
                                                w: Number(j[1].replace(",", "")),
                                                h: Number(j[2])
                                            };
                                            k.w > e.frame.w || k.h > e.frame.h ? (e.trimmed = !0, e.realSize = k) : e.trimmed = !1
                                        }
                                    }
                                b++
                            }
                        if(null != e && (this.atlas.frames[c][e.name] = e), this.atlas.meta.image.length > 0) {
                            for(this.images = [], h = 0; h < this.atlas.meta.image.length; h++) {
                                var l = this.baseUrl + this.atlas.meta.image[h],
                                    m = this.atlas.frames[h];
                                this.images.push(new d.ImageLoader(l, this.crossorigin));
                                for(g in m) {
                                    var n = m[g].frame;
                                    n && (d.TextureCache[g] = new d.Texture(this.images[h].texture.baseTexture, {
                                        x: n.x,
                                        y: n.y,
                                        width: n.w,
                                        height: n.h
                                    }), m[g].trimmed && (d.TextureCache[g].realSize = m[g].realSize, d.TextureCache[g].trim.x = 0, d.TextureCache[g].trim.y = 0))
                                }
                            }
                            for(this.currentImageId = 0, h = 0; h < this.images.length; h++) this.images[h].addEventListener("loaded", i);
                            this.images[this.currentImageId].load()
                        } else this.onLoaded()
                    } else this.onError()
            }, d.AtlasLoader.prototype.onLoaded = function() {
                this.images.length - 1 > this.currentImageId ? (this.currentImageId++, this.images[this.currentImageId].load()) : (this.loaded = !0, this.dispatchEvent({
                    type: "loaded",
                    content: this
                }))
            }, d.AtlasLoader.prototype.onError = function() {
                this.dispatchEvent({
                    type: "error",
                    content: this
                })
            }, d.SpriteSheetLoader = function(a, b) {
                d.EventTarget.call(this), this.url = a, this.crossorigin = b, this.baseUrl = a.replace(/[^\/]*$/, ""), this.texture = null, this.frames = {}
            }, d.SpriteSheetLoader.prototype.constructor = d.SpriteSheetLoader, d.SpriteSheetLoader.prototype.load = function() {
                var a = this,
                    b = new d.JsonLoader(this.url, this.crossorigin);
                b.addEventListener("loaded", function(b) {
                    a.json = b.content.json, a.onLoaded()
                }), b.load()
            }, d.SpriteSheetLoader.prototype.onLoaded = function() {
                this.dispatchEvent({
                    type: "loaded",
                    content: this
                })
            }, d.ImageLoader = function(a, b) {
                d.EventTarget.call(this), this.texture = d.Texture.fromImage(a, b), this.frames = []
            }, d.ImageLoader.prototype.constructor = d.ImageLoader, d.ImageLoader.prototype.load = function() {
                if(this.texture.baseTexture.hasLoaded) this.onLoaded();
                else {
                    var a = this;
                    this.texture.baseTexture.addEventListener("loaded", function() {
                        a.onLoaded()
                    })
                }
            }, d.ImageLoader.prototype.onLoaded = function() {
                this.dispatchEvent({
                    type: "loaded",
                    content: this
                })
            }, d.ImageLoader.prototype.loadFramedSpriteSheet = function(a, b, c) {
                this.frames = [];
                for(var e = Math.floor(this.texture.width / a), f = Math.floor(this.texture.height / b), g = 0, h = 0; f > h; h++)
                    for(var i = 0; e > i; i++, g++) {
                        var j = new d.Texture(this.texture, {
                            x: i * a,
                            y: h * b,
                            width: a,
                            height: b
                        });
                        this.frames.push(j), c && (d.TextureCache[c + "-" + g] = j)
                    }
                if(this.texture.baseTexture.hasLoaded) this.onLoaded();
                else {
                    var k = this;
                    this.texture.baseTexture.addEventListener("loaded", function() {
                        k.onLoaded()
                    })
                }
            }, d.BitmapFontLoader = function(a, b) {
                d.EventTarget.call(this), this.url = a, this.crossorigin = b, this.baseUrl = a.replace(/[^\/]*$/, ""), this.texture = null
            }, d.BitmapFontLoader.prototype.constructor = d.BitmapFontLoader, d.BitmapFontLoader.prototype.load = function() {
                this.ajaxRequest = new d.AjaxRequest;
                var a = this;
                this.ajaxRequest.onreadystatechange = function() {
                    a.onXMLLoaded()
                }, this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/xml"), this.ajaxRequest.send(null)
            }, d.BitmapFontLoader.prototype.onXMLLoaded = function() {
                if(4 === this.ajaxRequest.readyState && (200 === this.ajaxRequest.status || -1 === window.location.protocol.indexOf("http"))) {
                    var a = this.ajaxRequest.responseXML;
                    if(!a || /MSIE 9/i.test(navigator.userAgent) || navigator.isCocoonJS)
                        if("function" == typeof window.DOMParser) {
                            var b = new DOMParser;
                            a = b.parseFromString(this.ajaxRequest.responseText, "text/xml")
                        } else {
                            var c = document.createElement("div");
                            c.innerHTML = this.ajaxRequest.responseText, a = c
                        }
                    var e = this.baseUrl + a.getElementsByTagName("page")[0].getAttribute("file"),
                        f = new d.ImageLoader(e, this.crossorigin);
                    this.texture = f.texture.baseTexture;
                    var g = {}, h = a.getElementsByTagName("info")[0],
                        i = a.getElementsByTagName("common")[0];
                    g.font = h.getAttribute("face"), g.size = parseInt(h.getAttribute("size"), 10), g.lineHeight = parseInt(i.getAttribute("lineHeight"), 10), g.chars = {};
                    for(var j = a.getElementsByTagName("char"), k = 0; k < j.length; k++) {
                        var l = parseInt(j[k].getAttribute("id"), 10),
                            m = new d.Rectangle(parseInt(j[k].getAttribute("x"), 10), parseInt(j[k].getAttribute("y"), 10), parseInt(j[k].getAttribute("width"), 10), parseInt(j[k].getAttribute("height"), 10));
                        g.chars[l] = {
                            xOffset: parseInt(j[k].getAttribute("xoffset"), 10),
                            yOffset: parseInt(j[k].getAttribute("yoffset"), 10),
                            xAdvance: parseInt(j[k].getAttribute("xadvance"), 10),
                            kerning: {},
                            texture: d.TextureCache[l] = new d.Texture(this.texture, m)
                        }
                    }
                    var n = a.getElementsByTagName("kerning");
                    for(k = 0; k < n.length; k++) {
                        var o = parseInt(n[k].getAttribute("first"), 10),
                            p = parseInt(n[k].getAttribute("second"), 10),
                            q = parseInt(n[k].getAttribute("amount"), 10);
                        g.chars[p].kerning[o] = q
                    }
                    d.BitmapText.fonts[g.font] = g;
                    var r = this;
                    f.addEventListener("loaded", function() {
                        r.onLoaded()
                    }), f.load()
                }
            }, d.BitmapFontLoader.prototype.onLoaded = function() {
                this.dispatchEvent({
                    type: "loaded",
                    content: this
                })
            }, d.SpineLoader = function(a, b) {
                d.EventTarget.call(this), this.url = a, this.crossorigin = b, this.loaded = !1
            }, d.SpineLoader.prototype.constructor = d.SpineLoader, d.SpineLoader.prototype.load = function() {
                var a = this,
                    b = new d.JsonLoader(this.url, this.crossorigin);
                b.addEventListener("loaded", function(b) {
                    a.json = b.content.json, a.onLoaded()
                }), b.load()
            }, d.SpineLoader.prototype.onLoaded = function() {
                this.loaded = !0, this.dispatchEvent({
                    type: "loaded",
                    content: this
                })
            }, d.AbstractFilter = function(a, b) {
                this.passes = [this], this.shaders = [], this.dirty = !0, this.padding = 0, this.uniforms = b || {}, this.fragmentSrc = a || []
            }, d.AlphaMaskFilter = function(a) {
                d.AbstractFilter.call(this), this.passes = [this], a.baseTexture._powerOf2 = !0, this.uniforms = {
                    mask: {
                        type: "sampler2D",
                        value: a
                    },
                    mapDimensions: {
                        type: "2f",
                        value: {
                            x: 1,
                            y: 5112
                        }
                    },
                    dimensions: {
                        type: "4fv",
                        value: [0, 0, 0, 0]
                    }
                }, a.baseTexture.hasLoaded ? (this.uniforms.mask.value.x = a.width, this.uniforms.mask.value.y = a.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), a.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D mask;", "uniform sampler2D uSampler;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   mapCords *= dimensions.xy / mapDimensions;", "   vec4 original =  texture2D(uSampler, vTextureCoord);", "   float maskAlpha =  texture2D(mask, mapCords).r;", "   original *= maskAlpha;", "   gl_FragColor =  original;", "}"]
            }, d.AlphaMaskFilter.prototype = Object.create(d.AbstractFilter.prototype), d.AlphaMaskFilter.prototype.constructor = d.AlphaMaskFilter, d.AlphaMaskFilter.prototype.onTextureLoaded = function() {
                this.uniforms.mapDimensions.value.x = this.uniforms.mask.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.mask.value.height, this.uniforms.mask.value.baseTexture.off("loaded", this.boundLoadedFunction)
            }, Object.defineProperty(d.AlphaMaskFilter.prototype, "map", {
                get: function() {
                    return this.uniforms.mask.value
                },
                set: function(a) {
                    this.uniforms.mask.value = a
                }
            }), d.ColorMatrixFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    matrix: {
                        type: "mat4",
                        value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform mat4 matrix;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;", "}"]
            }, d.ColorMatrixFilter.prototype = Object.create(d.AbstractFilter.prototype), d.ColorMatrixFilter.prototype.constructor = d.ColorMatrixFilter, Object.defineProperty(d.ColorMatrixFilter.prototype, "matrix", {
                get: function() {
                    return this.uniforms.matrix.value
                },
                set: function(a) {
                    this.uniforms.matrix.value = a
                }
            }), d.GrayFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    gray: {
                        type: "1f",
                        value: 1
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float gray;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);", "}"]
            }, d.GrayFilter.prototype = Object.create(d.AbstractFilter.prototype), d.GrayFilter.prototype.constructor = d.GrayFilter, Object.defineProperty(d.GrayFilter.prototype, "gray", {
                get: function() {
                    return this.uniforms.gray.value
                },
                set: function(a) {
                    this.uniforms.gray.value = a
                }
            }), d.DisplacementFilter = function(a) {
                d.AbstractFilter.call(this), this.passes = [this], a.baseTexture._powerOf2 = !0, this.uniforms = {
                    displacementMap: {
                        type: "sampler2D",
                        value: a
                    },
                    scale: {
                        type: "2f",
                        value: {
                            x: 30,
                            y: 30
                        }
                    },
                    offset: {
                        type: "2f",
                        value: {
                            x: 0,
                            y: 0
                        }
                    },
                    mapDimensions: {
                        type: "2f",
                        value: {
                            x: 1,
                            y: 5112
                        }
                    },
                    dimensions: {
                        type: "4fv",
                        value: [0, 0, 0, 0]
                    }
                }, a.baseTexture.hasLoaded ? (this.uniforms.mapDimensions.value.x = a.width, this.uniforms.mapDimensions.value.y = a.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), a.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D displacementMap;", "uniform sampler2D uSampler;", "uniform vec2 scale;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   vec2 matSample = texture2D(displacementMap, mapCords).xy;", "   matSample -= 0.5;", "   matSample *= scale;", "   matSample /= mapDimensions;", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);", "   vec2 cord = vTextureCoord;", "}"]
            }, d.DisplacementFilter.prototype = Object.create(d.AbstractFilter.prototype), d.DisplacementFilter.prototype.constructor = d.DisplacementFilter, d.DisplacementFilter.prototype.onTextureLoaded = function() {
                this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height, this.uniforms.displacementMap.value.baseTexture.off("loaded", this.boundLoadedFunction)
            }, Object.defineProperty(d.DisplacementFilter.prototype, "map", {
                get: function() {
                    return this.uniforms.displacementMap.value
                },
                set: function(a) {
                    this.uniforms.displacementMap.value = a
                }
            }), Object.defineProperty(d.DisplacementFilter.prototype, "scale", {
                get: function() {
                    return this.uniforms.scale.value
                },
                set: function(a) {
                    this.uniforms.scale.value = a
                }
            }), Object.defineProperty(d.DisplacementFilter.prototype, "offset", {
                get: function() {
                    return this.uniforms.offset.value
                },
                set: function(a) {
                    this.uniforms.offset.value = a
                }
            }), d.PixelateFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    invert: {
                        type: "1f",
                        value: 0
                    },
                    dimensions: {
                        type: "4fv",
                        value: new Float32Array([1e4, 100, 10, 10])
                    },
                    pixelSize: {
                        type: "2f",
                        value: {
                            x: 10,
                            y: 10
                        }
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 testDim;", "uniform vec4 dimensions;", "uniform vec2 pixelSize;", "uniform sampler2D uSampler;", "void main(void) {", "   vec2 coord = vTextureCoord;", "   vec2 size = dimensions.xy/pixelSize;", "   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;", "   gl_FragColor = texture2D(uSampler, color);", "}"]
            }, d.PixelateFilter.prototype = Object.create(d.AbstractFilter.prototype), d.PixelateFilter.prototype.constructor = d.PixelateFilter, Object.defineProperty(d.PixelateFilter.prototype, "size", {
                get: function() {
                    return this.uniforms.pixelSize.value
                },
                set: function(a) {
                    this.dirty = !0, this.uniforms.pixelSize.value = a
                }
            }), d.BlurXFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    blur: {
                        type: "1f",
                        value: 1 / 512
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;", "   gl_FragColor = sum;", "}"]
            }, d.BlurXFilter.prototype = Object.create(d.AbstractFilter.prototype), d.BlurXFilter.prototype.constructor = d.BlurXFilter, Object.defineProperty(d.BlurXFilter.prototype, "blur", {
                get: function() {
                    return this.uniforms.blur.value / (1 / 7e3)
                },
                set: function(a) {
                    this.dirty = !0, this.uniforms.blur.value = 1 / 7e3 * a
                }
            }), d.BlurYFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    blur: {
                        type: "1f",
                        value: 1 / 512
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;", "   gl_FragColor = sum;", "}"]
            }, d.BlurYFilter.prototype = Object.create(d.AbstractFilter.prototype), d.BlurYFilter.prototype.constructor = d.BlurYFilter, Object.defineProperty(d.BlurYFilter.prototype, "blur", {
                get: function() {
                    return this.uniforms.blur.value / (1 / 7e3)
                },
                set: function(a) {
                    this.uniforms.blur.value = 1 / 7e3 * a
                }
            }), d.BlurFilter = function() {
                this.blurXFilter = new d.BlurXFilter, this.blurYFilter = new d.BlurYFilter, this.passes = [this.blurXFilter, this.blurYFilter]
            }, Object.defineProperty(d.BlurFilter.prototype, "blur", {
                get: function() {
                    return this.blurXFilter.blur
                },
                set: function(a) {
                    this.blurXFilter.blur = this.blurYFilter.blur = a
                }
            }), Object.defineProperty(d.BlurFilter.prototype, "blurX", {
                get: function() {
                    return this.blurXFilter.blur
                },
                set: function(a) {
                    this.blurXFilter.blur = a
                }
            }), Object.defineProperty(d.BlurFilter.prototype, "blurY", {
                get: function() {
                    return this.blurYFilter.blur
                },
                set: function(a) {
                    this.blurYFilter.blur = a
                }
            }), d.InvertFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    invert: {
                        type: "1f",
                        value: 1
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);", "}"]
            }, d.InvertFilter.prototype = Object.create(d.AbstractFilter.prototype), d.InvertFilter.prototype.constructor = d.InvertFilter, Object.defineProperty(d.InvertFilter.prototype, "invert", {
                get: function() {
                    return this.uniforms.invert.value
                },
                set: function(a) {
                    this.uniforms.invert.value = a
                }
            }), d.SepiaFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    sepia: {
                        type: "1f",
                        value: 1
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float sepia;", "uniform sampler2D uSampler;", "const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);", "}"]
            }, d.SepiaFilter.prototype = Object.create(d.AbstractFilter.prototype), d.SepiaFilter.prototype.constructor = d.SepiaFilter, Object.defineProperty(d.SepiaFilter.prototype, "sepia", {
                get: function() {
                    return this.uniforms.sepia.value
                },
                set: function(a) {
                    this.uniforms.sepia.value = a
                }
            }), d.TwistFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    radius: {
                        type: "1f",
                        value: .5
                    },
                    angle: {
                        type: "1f",
                        value: 5
                    },
                    offset: {
                        type: "2f",
                        value: {
                            x: .5,
                            y: .5
                        }
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float radius;", "uniform float angle;", "uniform vec2 offset;", "void main(void) {", "   vec2 coord = vTextureCoord - offset;", "   float distance = length(coord);", "   if (distance < radius) {", "       float ratio = (radius - distance) / radius;", "       float angleMod = ratio * ratio * angle;", "       float s = sin(angleMod);", "       float c = cos(angleMod);", "       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);", "   }", "   gl_FragColor = texture2D(uSampler, coord+offset);", "}"]
            }, d.TwistFilter.prototype = Object.create(d.AbstractFilter.prototype), d.TwistFilter.prototype.constructor = d.TwistFilter, Object.defineProperty(d.TwistFilter.prototype, "offset", {
                get: function() {
                    return this.uniforms.offset.value
                },
                set: function(a) {
                    this.dirty = !0, this.uniforms.offset.value = a
                }
            }), Object.defineProperty(d.TwistFilter.prototype, "radius", {
                get: function() {
                    return this.uniforms.radius.value
                },
                set: function(a) {
                    this.dirty = !0, this.uniforms.radius.value = a
                }
            }), Object.defineProperty(d.TwistFilter.prototype, "angle", {
                get: function() {
                    return this.uniforms.angle.value
                },
                set: function(a) {
                    this.dirty = !0, this.uniforms.angle.value = a
                }
            }), d.ColorStepFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    step: {
                        type: "1f",
                        value: 5
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float step;", "void main(void) {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   color = floor(color * step) / step;", "   gl_FragColor = color;", "}"]
            }, d.ColorStepFilter.prototype = Object.create(d.AbstractFilter.prototype), d.ColorStepFilter.prototype.constructor = d.ColorStepFilter, Object.defineProperty(d.ColorStepFilter.prototype, "step", {
                get: function() {
                    return this.uniforms.step.value
                },
                set: function(a) {
                    this.uniforms.step.value = a
                }
            }), d.DotScreenFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    scale: {
                        type: "1f",
                        value: 1
                    },
                    angle: {
                        type: "1f",
                        value: 5
                    },
                    dimensions: {
                        type: "4fv",
                        value: [0, 0, 0, 0]
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float angle;", "uniform float scale;", "float pattern() {", "   float s = sin(angle), c = cos(angle);", "   vec2 tex = vTextureCoord * dimensions.xy;", "   vec2 point = vec2(", "       c * tex.x - s * tex.y,", "       s * tex.x + c * tex.y", "   ) * scale;", "   return (sin(point.x) * sin(point.y)) * 4.0;", "}", "void main() {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   float average = (color.r + color.g + color.b) / 3.0;", "   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);", "}"]
            }, d.DotScreenFilter.prototype = Object.create(d.AbstractFilter.prototype), d.DotScreenFilter.prototype.constructor = d.DotScreenFilter, Object.defineProperty(d.DotScreenFilter.prototype, "scale", {
                get: function() {
                    return this.uniforms.scale.value
                },
                set: function(a) {
                    this.dirty = !0, this.uniforms.scale.value = a
                }
            }), Object.defineProperty(d.DotScreenFilter.prototype, "angle", {
                get: function() {
                    return this.uniforms.angle.value
                },
                set: function(a) {
                    this.dirty = !0, this.uniforms.angle.value = a
                }
            }), d.CrossHatchFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    blur: {
                        type: "1f",
                        value: 1 / 512
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);", "    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);", "    if (lum < 1.00) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.75) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.50) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.3) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "}"]
            }, d.CrossHatchFilter.prototype = Object.create(d.AbstractFilter.prototype), d.CrossHatchFilter.prototype.constructor = d.BlurYFilter, Object.defineProperty(d.CrossHatchFilter.prototype, "blur", {
                get: function() {
                    return this.uniforms.blur.value / (1 / 7e3)
                },
                set: function(a) {
                    this.uniforms.blur.value = 1 / 7e3 * a
                }
            }), d.RGBSplitFilter = function() {
                d.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    red: {
                        type: "2f",
                        value: {
                            x: 20,
                            y: 20
                        }
                    },
                    green: {
                        type: "2f",
                        value: {
                            x: -20,
                            y: 20
                        }
                    },
                    blue: {
                        type: "2f",
                        value: {
                            x: 20,
                            y: -20
                        }
                    },
                    dimensions: {
                        type: "4fv",
                        value: [0, 0, 0, 0]
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 red;", "uniform vec2 green;", "uniform vec2 blue;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;", "   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;", "   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;", "   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;", "}"]
            }, d.RGBSplitFilter.prototype = Object.create(d.AbstractFilter.prototype), d.RGBSplitFilter.prototype.constructor = d.RGBSplitFilter, Object.defineProperty(d.RGBSplitFilter.prototype, "angle", {
                get: function() {
                    return this.uniforms.blur.value / (1 / 7e3)
                },
                set: function(a) {
                    this.uniforms.blur.value = 1 / 7e3 * a
                }
            }), "undefined" != typeof c ? ("undefined" != typeof b && b.exports && (c = b.exports = d), c.PIXI = d) : "undefined" != typeof define && define.amd ? define(d) : a.PIXI = d
        }).call(this)
    }, {}
],
12: [
    function(a, b) {
        for(var c = a("performance-now"), d = "undefined" == typeof window ? {} : window, e = ["moz", "webkit"], f = "AnimationFrame", g = d["request" + f], h = d["cancel" + f] || d["cancelRequest" + f], i = 0; i < e.length && !g; i++) g = d[e[i] + "Request" + f], h = d[e[i] + "Cancel" + f] || d[e[i] + "CancelRequest" + f];
        if(!g || !h) {
            var j = 0,
                k = 0,
                l = [],
                m = 1e3 / 60;
            g = function(a) {
                if(0 === l.length) {
                    var b = c(),
                        d = Math.max(0, m - (b - j));
                    j = d + b, setTimeout(function() {
                        var a = l.slice(0);
                        l.length = 0;
                        for(var b = 0; b < a.length; b++) a[b].cancelled || a[b].callback(j)
                    }, d)
                }
                return l.push({
                    handle: ++k,
                    callback: a,
                    cancelled: !1
                }), k
            }, h = function(a) {
                for(var b = 0; b < l.length; b++) l[b].handle === a && (l[b].cancelled = !0)
            }
        }
        b.exports = function() {
            return g.apply(d, arguments)
        }, b.exports.cancel = function() {
            h.apply(d, arguments)
        }
    }, {
        "performance-now": 9
    }
],
13: [
    function(a, b) {
        "use strict";
        var c = a("./focusNode"),
            d = {
                componentDidMount: function() {
                    this.props.autoFocus && c(this.getDOMNode())
                }
            };
        b.exports = d
    }, {
        "./focusNode": 123
    }
],
14: [
    function(a, b) {
        "use strict";

        function c() {
            var a = window.opera;
            return "object" == typeof a && "function" == typeof a.version && parseInt(a.version(), 10) <= 12
        }

        function d(a) {
            return(a.ctrlKey || a.altKey || a.metaKey) && !(a.ctrlKey && a.altKey)
        }
        var e = a("./EventConstants"),
            f = a("./EventPropagators"),
            g = a("./ExecutionEnvironment"),
            h = a("./SyntheticInputEvent"),
            i = a("./keyOf"),
            j = g.canUseDOM && "TextEvent" in window && !("documentMode" in document || c()),
            k = 32,
            l = String.fromCharCode(k),
            m = e.topLevelTypes,
            n = {
                beforeInput: {
                    phasedRegistrationNames: {
                        bubbled: i({
                            onBeforeInput: null
                        }),
                        captured: i({
                            onBeforeInputCapture: null
                        })
                    },
                    dependencies: [m.topCompositionEnd, m.topKeyPress, m.topTextInput, m.topPaste]
                }
            }, o = null,
            p = !1,
            q = {
                eventTypes: n,
                extractEvents: function(a, b, c, e) {
                    var g;
                    if(j) switch(a) {
                        case m.topKeyPress:
                            var i = e.which;
                            if(i !== k) return;
                            p = !0, g = l;
                            break;
                        case m.topTextInput:
                            if(g = e.data, g === l && p) return;
                            break;
                        default:
                            return
                    } else {
                        switch(a) {
                            case m.topPaste:
                                o = null;
                                break;
                            case m.topKeyPress:
                                e.which && !d(e) && (o = String.fromCharCode(e.which));
                                break;
                            case m.topCompositionEnd:
                                o = e.data
                        }
                        if(null === o) return;
                        g = o
                    } if(g) {
                        var q = h.getPooled(n.beforeInput, c, e);
                        return q.data = g, o = null, f.accumulateTwoPhaseDispatches(q), q
                    }
                }
            };
        b.exports = q
    }, {
        "./EventConstants": 27,
        "./EventPropagators": 32,
        "./ExecutionEnvironment": 33,
        "./SyntheticInputEvent": 101,
        "./keyOf": 145
    }
],
15: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            return a + b.charAt(0).toUpperCase() + b.substring(1)
        }
        var d = {
            columnCount: !0,
            fillOpacity: !0,
            flex: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, e = ["Webkit", "ms", "Moz", "O"];
        Object.keys(d).forEach(function(a) {
            e.forEach(function(b) {
                d[c(b, a)] = d[a]
            })
        });
        var f = {
            background: {
                backgroundImage: !0,
                backgroundPosition: !0,
                backgroundRepeat: !0,
                backgroundColor: !0
            },
            border: {
                borderWidth: !0,
                borderStyle: !0,
                borderColor: !0
            },
            borderBottom: {
                borderBottomWidth: !0,
                borderBottomStyle: !0,
                borderBottomColor: !0
            },
            borderLeft: {
                borderLeftWidth: !0,
                borderLeftStyle: !0,
                borderLeftColor: !0
            },
            borderRight: {
                borderRightWidth: !0,
                borderRightStyle: !0,
                borderRightColor: !0
            },
            borderTop: {
                borderTopWidth: !0,
                borderTopStyle: !0,
                borderTopColor: !0
            },
            font: {
                fontStyle: !0,
                fontVariant: !0,
                fontWeight: !0,
                fontSize: !0,
                lineHeight: !0,
                fontFamily: !0
            }
        }, g = {
                isUnitlessNumber: d,
                shorthandPropertyExpansions: f
            };
        b.exports = g
    }, {}
],
16: [
    function(a, b) {
        "use strict";
        var c = a("./CSSProperty"),
            d = a("./ExecutionEnvironment"),
            e = (a("./camelizeStyleName"), a("./dangerousStyleValue")),
            f = a("./hyphenateStyleName"),
            g = a("./memoizeStringOnly"),
            h = (a("./warning"), g(function(a) {
                return f(a)
            })),
            i = "cssFloat";
        d.canUseDOM && void 0 === document.documentElement.style.cssFloat && (i = "styleFloat");
        var j = {
            createMarkupForStyles: function(a) {
                var b = "";
                for(var c in a)
                    if(a.hasOwnProperty(c)) {
                        var d = a[c];
                        null != d && (b += h(c) + ":", b += e(c, d) + ";")
                    }
                return b || null
            },
            setValueForStyles: function(a, b) {
                var d = a.style;
                for(var f in b)
                    if(b.hasOwnProperty(f)) {
                        var g = e(f, b[f]);
                        if("float" === f && (f = i), g) d[f] = g;
                        else {
                            var h = c.shorthandPropertyExpansions[f];
                            if(h)
                                for(var j in h) d[j] = "";
                            else d[f] = ""
                        }
                    }
            }
        };
        b.exports = j
    }, {
        "./CSSProperty": 15,
        "./ExecutionEnvironment": 33,
        "./camelizeStyleName": 112,
        "./dangerousStyleValue": 117,
        "./hyphenateStyleName": 136,
        "./memoizeStringOnly": 147,
        "./warning": 157
    }
],
17: [
    function(a, b) {
        "use strict";

        function c() {
            this._callbacks = null, this._contexts = null
        }
        var d = a("./PooledClass"),
            e = a("./Object.assign"),
            f = a("./invariant");
        e(c.prototype, {
            enqueue: function(a, b) {
                this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(a), this._contexts.push(b)
            },
            notifyAll: function() {
                var a = this._callbacks,
                    b = this._contexts;
                if(a) {
                    f(a.length === b.length), this._callbacks = null, this._contexts = null;
                    for(var c = 0, d = a.length; d > c; c++) a[c].call(b[c]);
                    a.length = 0, b.length = 0
                }
            },
            reset: function() {
                this._callbacks = null, this._contexts = null
            },
            destructor: function() {
                this.reset()
            }
        }), d.addPoolingTo(c), b.exports = c
    }, {
        "./Object.assign": 38,
        "./PooledClass": 39,
        "./invariant": 138
    }
],
18: [
    function(a, b) {
        "use strict";

        function c(a) {
            return "SELECT" === a.nodeName || "INPUT" === a.nodeName && "file" === a.type
        }

        function d(a) {
            var b = w.getPooled(B.change, D, a);
            t.accumulateTwoPhaseDispatches(b), v.batchedUpdates(e, b)
        }

        function e(a) {
            s.enqueueEvents(a), s.processEventQueue()
        }

        function f(a, b) {
            C = a, D = b, C.attachEvent("onchange", d)
        }

        function g() {
            C && (C.detachEvent("onchange", d), C = null, D = null)
        }

        function h(a, b, c) {
            return a === A.topChange ? c : void 0
        }

        function i(a, b, c) {
            a === A.topFocus ? (g(), f(b, c)) : a === A.topBlur && g()
        }

        function j(a, b) {
            C = a, D = b, E = a.value, F = Object.getOwnPropertyDescriptor(a.constructor.prototype, "value"), Object.defineProperty(C, "value", I), C.attachEvent("onpropertychange", l)
        }

        function k() {
            C && (delete C.value, C.detachEvent("onpropertychange", l), C = null, D = null, E = null, F = null)
        }

        function l(a) {
            if("value" === a.propertyName) {
                var b = a.srcElement.value;
                b !== E && (E = b, d(a))
            }
        }

        function m(a, b, c) {
            return a === A.topInput ? c : void 0
        }

        function n(a, b, c) {
            a === A.topFocus ? (k(), j(b, c)) : a === A.topBlur && k()
        }

        function o(a) {
            return a !== A.topSelectionChange && a !== A.topKeyUp && a !== A.topKeyDown || !C || C.value === E ? void 0 : (E = C.value, D)
        }

        function p(a) {
            return "INPUT" === a.nodeName && ("checkbox" === a.type || "radio" === a.type)
        }

        function q(a, b, c) {
            return a === A.topClick ? c : void 0
        }
        var r = a("./EventConstants"),
            s = a("./EventPluginHub"),
            t = a("./EventPropagators"),
            u = a("./ExecutionEnvironment"),
            v = a("./ReactUpdates"),
            w = a("./SyntheticEvent"),
            x = a("./isEventSupported"),
            y = a("./isTextInputElement"),
            z = a("./keyOf"),
            A = r.topLevelTypes,
            B = {
                change: {
                    phasedRegistrationNames: {
                        bubbled: z({
                            onChange: null
                        }),
                        captured: z({
                            onChangeCapture: null
                        })
                    },
                    dependencies: [A.topBlur, A.topChange, A.topClick, A.topFocus, A.topInput, A.topKeyDown, A.topKeyUp, A.topSelectionChange]
                }
            }, C = null,
            D = null,
            E = null,
            F = null,
            G = !1;
        u.canUseDOM && (G = x("change") && (!("documentMode" in document) || document.documentMode > 8));
        var H = !1;
        u.canUseDOM && (H = x("input") && (!("documentMode" in document) || document.documentMode > 9));
        var I = {
            get: function() {
                return F.get.call(this)
            },
            set: function(a) {
                E = "" + a, F.set.call(this, a)
            }
        }, J = {
                eventTypes: B,
                extractEvents: function(a, b, d, e) {
                    var f, g;
                    if(c(b) ? G ? f = h : g = i : y(b) ? H ? f = m : (f = o, g = n) : p(b) && (f = q), f) {
                        var j = f(a, b, d);
                        if(j) {
                            var k = w.getPooled(B.change, j, e);
                            return t.accumulateTwoPhaseDispatches(k), k
                        }
                    }
                    g && g(a, b, d)
                }
            };
        b.exports = J
    }, {
        "./EventConstants": 27,
        "./EventPluginHub": 29,
        "./EventPropagators": 32,
        "./ExecutionEnvironment": 33,
        "./ReactUpdates": 91,
        "./SyntheticEvent": 99,
        "./isEventSupported": 139,
        "./isTextInputElement": 141,
        "./keyOf": 145
    }
],
19: [
    function(a, b) {
        "use strict";
        var c = 0,
            d = {
                createReactRootIndex: function() {
                    return c++
                }
            };
        b.exports = d
    }, {}
],
20: [
    function(a, b) {
        "use strict";

        function c(a) {
            switch(a) {
                case r.topCompositionStart:
                    return t.compositionStart;
                case r.topCompositionEnd:
                    return t.compositionEnd;
                case r.topCompositionUpdate:
                    return t.compositionUpdate
            }
        }

        function d(a, b) {
            return a === r.topKeyDown && b.keyCode === o
        }

        function e(a, b) {
            switch(a) {
                case r.topKeyUp:
                    return -1 !== n.indexOf(b.keyCode);
                case r.topKeyDown:
                    return b.keyCode !== o;
                case r.topKeyPress:
                case r.topMouseDown:
                case r.topBlur:
                    return !0;
                default:
                    return !1
            }
        }

        function f(a) {
            this.root = a, this.startSelection = j.getSelection(a), this.startValue = this.getText()
        }
        var g = a("./EventConstants"),
            h = a("./EventPropagators"),
            i = a("./ExecutionEnvironment"),
            j = a("./ReactInputSelection"),
            k = a("./SyntheticCompositionEvent"),
            l = a("./getTextContentAccessor"),
            m = a("./keyOf"),
            n = [9, 13, 27, 32],
            o = 229,
            p = i.canUseDOM && "CompositionEvent" in window,
            q = !p || "documentMode" in document && document.documentMode > 8 && document.documentMode <= 11,
            r = g.topLevelTypes,
            s = null,
            t = {
                compositionEnd: {
                    phasedRegistrationNames: {
                        bubbled: m({
                            onCompositionEnd: null
                        }),
                        captured: m({
                            onCompositionEndCapture: null
                        })
                    },
                    dependencies: [r.topBlur, r.topCompositionEnd, r.topKeyDown, r.topKeyPress, r.topKeyUp, r.topMouseDown]
                },
                compositionStart: {
                    phasedRegistrationNames: {
                        bubbled: m({
                            onCompositionStart: null
                        }),
                        captured: m({
                            onCompositionStartCapture: null
                        })
                    },
                    dependencies: [r.topBlur, r.topCompositionStart, r.topKeyDown, r.topKeyPress, r.topKeyUp, r.topMouseDown]
                },
                compositionUpdate: {
                    phasedRegistrationNames: {
                        bubbled: m({
                            onCompositionUpdate: null
                        }),
                        captured: m({
                            onCompositionUpdateCapture: null
                        })
                    },
                    dependencies: [r.topBlur, r.topCompositionUpdate, r.topKeyDown, r.topKeyPress, r.topKeyUp, r.topMouseDown]
                }
            };
        f.prototype.getText = function() {
            return this.root.value || this.root[l()]
        }, f.prototype.getData = function() {
            var a = this.getText(),
                b = this.startSelection.start,
                c = this.startValue.length - this.startSelection.end;
            return a.substr(b, a.length - c - b)
        };
        var u = {
            eventTypes: t,
            extractEvents: function(a, b, g, i) {
                var j, l;
                if(p ? j = c(a) : s ? e(a, i) && (j = t.compositionEnd) : d(a, i) && (j = t.compositionStart), q && (s || j !== t.compositionStart ? j === t.compositionEnd && s && (l = s.getData(), s = null) : s = new f(b)), j) {
                    var m = k.getPooled(j, g, i);
                    return l && (m.data = l), h.accumulateTwoPhaseDispatches(m), m
                }
            }
        };
        b.exports = u
    }, {
        "./EventConstants": 27,
        "./EventPropagators": 32,
        "./ExecutionEnvironment": 33,
        "./ReactInputSelection": 71,
        "./SyntheticCompositionEvent": 97,
        "./getTextContentAccessor": 133,
        "./keyOf": 145
    }
],
21: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            a.insertBefore(b, a.childNodes[c] || null)
        }
        var d, e = a("./Danger"),
            f = a("./ReactMultiChildUpdateTypes"),
            g = a("./getTextContentAccessor"),
            h = a("./invariant"),
            i = g();
        d = "textContent" === i ? function(a, b) {
            a.textContent = b
        } : function(a, b) {
            for(; a.firstChild;) a.removeChild(a.firstChild);
            if(b) {
                var c = a.ownerDocument || document;
                a.appendChild(c.createTextNode(b))
            }
        };
        var j = {
            dangerouslyReplaceNodeWithMarkup: e.dangerouslyReplaceNodeWithMarkup,
            updateTextContent: d,
            processUpdates: function(a, b) {
                for(var g, i = null, j = null, k = 0; g = a[k]; k++)
                    if(g.type === f.MOVE_EXISTING || g.type === f.REMOVE_NODE) {
                        var l = g.fromIndex,
                            m = g.parentNode.childNodes[l],
                            n = g.parentID;
                        h(m), i = i || {}, i[n] = i[n] || [], i[n][l] = m, j = j || [], j.push(m)
                    }
                var o = e.dangerouslyRenderMarkup(b);
                if(j)
                    for(var p = 0; p < j.length; p++) j[p].parentNode.removeChild(j[p]);
                for(var q = 0; g = a[q]; q++) switch(g.type) {
                    case f.INSERT_MARKUP:
                        c(g.parentNode, o[g.markupIndex], g.toIndex);
                        break;
                    case f.MOVE_EXISTING:
                        c(g.parentNode, i[g.parentID][g.fromIndex], g.toIndex);
                        break;
                    case f.TEXT_CONTENT:
                        d(g.parentNode, g.textContent);
                        break;
                    case f.REMOVE_NODE:
                }
            }
        };
        b.exports = j
    }, {
        "./Danger": 24,
        "./ReactMultiChildUpdateTypes": 77,
        "./getTextContentAccessor": 133,
        "./invariant": 138
    }
],
22: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            return(a & b) === b
        }
        var d = a("./invariant"),
            e = {
                MUST_USE_ATTRIBUTE: 1,
                MUST_USE_PROPERTY: 2,
                HAS_SIDE_EFFECTS: 4,
                HAS_BOOLEAN_VALUE: 8,
                HAS_NUMERIC_VALUE: 16,
                HAS_POSITIVE_NUMERIC_VALUE: 48,
                HAS_OVERLOADED_BOOLEAN_VALUE: 64,
                injectDOMPropertyConfig: function(a) {
                    var b = a.Properties || {}, f = a.DOMAttributeNames || {}, h = a.DOMPropertyNames || {}, i = a.DOMMutationMethods || {};
                    a.isCustomAttribute && g._isCustomAttributeFunctions.push(a.isCustomAttribute);
                    for(var j in b) {
                        d(!g.isStandardName.hasOwnProperty(j)), g.isStandardName[j] = !0;
                        var k = j.toLowerCase();
                        if(g.getPossibleStandardName[k] = j, f.hasOwnProperty(j)) {
                            var l = f[j];
                            g.getPossibleStandardName[l] = j, g.getAttributeName[j] = l
                        } else g.getAttributeName[j] = k;
                        g.getPropertyName[j] = h.hasOwnProperty(j) ? h[j] : j, g.getMutationMethod[j] = i.hasOwnProperty(j) ? i[j] : null;
                        var m = b[j];
                        g.mustUseAttribute[j] = c(m, e.MUST_USE_ATTRIBUTE), g.mustUseProperty[j] = c(m, e.MUST_USE_PROPERTY), g.hasSideEffects[j] = c(m, e.HAS_SIDE_EFFECTS), g.hasBooleanValue[j] = c(m, e.HAS_BOOLEAN_VALUE), g.hasNumericValue[j] = c(m, e.HAS_NUMERIC_VALUE), g.hasPositiveNumericValue[j] = c(m, e.HAS_POSITIVE_NUMERIC_VALUE), g.hasOverloadedBooleanValue[j] = c(m, e.HAS_OVERLOADED_BOOLEAN_VALUE), d(!g.mustUseAttribute[j] || !g.mustUseProperty[j]), d(g.mustUseProperty[j] || !g.hasSideEffects[j]), d( !! g.hasBooleanValue[j] + !! g.hasNumericValue[j] + !! g.hasOverloadedBooleanValue[j] <= 1)
                    }
                }
            }, f = {}, g = {
                ID_ATTRIBUTE_NAME: "data-reactid",
                isStandardName: {},
                getPossibleStandardName: {},
                getAttributeName: {},
                getPropertyName: {},
                getMutationMethod: {},
                mustUseAttribute: {},
                mustUseProperty: {},
                hasSideEffects: {},
                hasBooleanValue: {},
                hasNumericValue: {},
                hasPositiveNumericValue: {},
                hasOverloadedBooleanValue: {},
                _isCustomAttributeFunctions: [],
                isCustomAttribute: function(a) {
                    for(var b = 0; b < g._isCustomAttributeFunctions.length; b++) {
                        var c = g._isCustomAttributeFunctions[b];
                        if(c(a)) return !0
                    }
                    return !1
                },
                getDefaultValueForProperty: function(a, b) {
                    var c, d = f[a];
                    return d || (f[a] = d = {}), b in d || (c = document.createElement(a), d[b] = c[b]), d[b]
                },
                injection: e
            };
        b.exports = g
    }, {
        "./invariant": 138
    }
],
23: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            return null == b || d.hasBooleanValue[a] && !b || d.hasNumericValue[a] && isNaN(b) || d.hasPositiveNumericValue[a] && 1 > b || d.hasOverloadedBooleanValue[a] && b === !1
        }
        var d = a("./DOMProperty"),
            e = a("./escapeTextForBrowser"),
            f = a("./memoizeStringOnly"),
            g = (a("./warning"), f(function(a) {
                return e(a) + '="'
            })),
            h = {
                createMarkupForID: function(a) {
                    return g(d.ID_ATTRIBUTE_NAME) + e(a) + '"'
                },
                createMarkupForProperty: function(a, b) {
                    if(d.isStandardName.hasOwnProperty(a) && d.isStandardName[a]) {
                        if(c(a, b)) return "";
                        var f = d.getAttributeName[a];
                        return d.hasBooleanValue[a] || d.hasOverloadedBooleanValue[a] && b === !0 ? e(f) : g(f) + e(b) + '"'
                    }
                    return d.isCustomAttribute(a) ? null == b ? "" : g(a) + e(b) + '"' : null
                },
                setValueForProperty: function(a, b, e) {
                    if(d.isStandardName.hasOwnProperty(b) && d.isStandardName[b]) {
                        var f = d.getMutationMethod[b];
                        if(f) f(a, e);
                        else if(c(b, e)) this.deleteValueForProperty(a, b);
                        else if(d.mustUseAttribute[b]) a.setAttribute(d.getAttributeName[b], "" + e);
                        else {
                            var g = d.getPropertyName[b];
                            d.hasSideEffects[b] && "" + a[g] == "" + e || (a[g] = e)
                        }
                    } else d.isCustomAttribute(b) && (null == e ? a.removeAttribute(b) : a.setAttribute(b, "" + e))
                },
                deleteValueForProperty: function(a, b) {
                    if(d.isStandardName.hasOwnProperty(b) && d.isStandardName[b]) {
                        var c = d.getMutationMethod[b];
                        if(c) c(a, void 0);
                        else if(d.mustUseAttribute[b]) a.removeAttribute(d.getAttributeName[b]);
                        else {
                            var e = d.getPropertyName[b],
                                f = d.getDefaultValueForProperty(a.nodeName, e);
                            d.hasSideEffects[b] && "" + a[e] === f || (a[e] = f)
                        }
                    } else d.isCustomAttribute(b) && a.removeAttribute(b)
                }
            };
        b.exports = h
    }, {
        "./DOMProperty": 22,
        "./escapeTextForBrowser": 121,
        "./memoizeStringOnly": 147,
        "./warning": 157
    }
],
24: [
    function(a, b) {
        "use strict";

        function c(a) {
            return a.substring(1, a.indexOf(" "))
        }
        var d = a("./ExecutionEnvironment"),
            e = a("./createNodesFromMarkup"),
            f = a("./emptyFunction"),
            g = a("./getMarkupWrap"),
            h = a("./invariant"),
            i = /^(<[^ \/>]+)/,
            j = "data-danger-index",
            k = {
                dangerouslyRenderMarkup: function(a) {
                    h(d.canUseDOM);
                    for(var b, k = {}, l = 0; l < a.length; l++) h(a[l]), b = c(a[l]), b = g(b) ? b : "*", k[b] = k[b] || [], k[b][l] = a[l];
                    var m = [],
                        n = 0;
                    for(b in k)
                        if(k.hasOwnProperty(b)) {
                            var o = k[b];
                            for(var p in o)
                                if(o.hasOwnProperty(p)) {
                                    var q = o[p];
                                    o[p] = q.replace(i, "$1 " + j + '="' + p + '" ')
                                }
                            var r = e(o.join(""), f);
                            for(l = 0; l < r.length; ++l) {
                                var s = r[l];
                                s.hasAttribute && s.hasAttribute(j) && (p = +s.getAttribute(j), s.removeAttribute(j), h(!m.hasOwnProperty(p)), m[p] = s, n += 1)
                            }
                        }
                    return h(n === m.length), h(m.length === a.length), m
                },
                dangerouslyReplaceNodeWithMarkup: function(a, b) {
                    h(d.canUseDOM), h(b), h("html" !== a.tagName.toLowerCase());
                    var c = e(b, f)[0];
                    a.parentNode.replaceChild(c, a)
                }
            };
        b.exports = k
    }, {
        "./ExecutionEnvironment": 33,
        "./createNodesFromMarkup": 116,
        "./emptyFunction": 119,
        "./getMarkupWrap": 130,
        "./invariant": 138
    }
],
25: [
    function(a, b) {
        "use strict";
        var c = a("./keyOf"),
            d = [c({
                ResponderEventPlugin: null
            }), c({
                SimpleEventPlugin: null
            }), c({
                TapEventPlugin: null
            }), c({
                EnterLeaveEventPlugin: null
            }), c({
                ChangeEventPlugin: null
            }), c({
                SelectEventPlugin: null
            }), c({
                CompositionEventPlugin: null
            }), c({
                BeforeInputEventPlugin: null
            }), c({
                AnalyticsEventPlugin: null
            }), c({
                MobileSafariClickEventPlugin: null
            })];
        b.exports = d
    }, {
        "./keyOf": 145
    }
],
26: [
    function(a, b) {
        "use strict";
        var c = a("./EventConstants"),
            d = a("./EventPropagators"),
            e = a("./SyntheticMouseEvent"),
            f = a("./ReactMount"),
            g = a("./keyOf"),
            h = c.topLevelTypes,
            i = f.getFirstReactDOM,
            j = {
                mouseEnter: {
                    registrationName: g({
                        onMouseEnter: null
                    }),
                    dependencies: [h.topMouseOut, h.topMouseOver]
                },
                mouseLeave: {
                    registrationName: g({
                        onMouseLeave: null
                    }),
                    dependencies: [h.topMouseOut, h.topMouseOver]
                }
            }, k = [null, null],
            l = {
                eventTypes: j,
                extractEvents: function(a, b, c, g) {
                    if(a === h.topMouseOver && (g.relatedTarget || g.fromElement)) return null;
                    if(a !== h.topMouseOut && a !== h.topMouseOver) return null;
                    var l;
                    if(b.window === b) l = b;
                    else {
                        var m = b.ownerDocument;
                        l = m ? m.defaultView || m.parentWindow : window
                    }
                    var n, o;
                    if(a === h.topMouseOut ? (n = b, o = i(g.relatedTarget || g.toElement) || l) : (n = l, o = b), n === o) return null;
                    var p = n ? f.getID(n) : "",
                        q = o ? f.getID(o) : "",
                        r = e.getPooled(j.mouseLeave, p, g);
                    r.type = "mouseleave", r.target = n, r.relatedTarget = o;
                    var s = e.getPooled(j.mouseEnter, q, g);
                    return s.type = "mouseenter", s.target = o, s.relatedTarget = n, d.accumulateEnterLeaveDispatches(r, s, p, q), k[0] = r, k[1] = s, k
                }
            };
        b.exports = l
    }, {
        "./EventConstants": 27,
        "./EventPropagators": 32,
        "./ReactMount": 75,
        "./SyntheticMouseEvent": 103,
        "./keyOf": 145
    }
],
27: [
    function(a, b) {
        "use strict";
        var c = a("./keyMirror"),
            d = c({
                bubbled: null,
                captured: null
            }),
            e = c({
                topBlur: null,
                topChange: null,
                topClick: null,
                topCompositionEnd: null,
                topCompositionStart: null,
                topCompositionUpdate: null,
                topContextMenu: null,
                topCopy: null,
                topCut: null,
                topDoubleClick: null,
                topDrag: null,
                topDragEnd: null,
                topDragEnter: null,
                topDragExit: null,
                topDragLeave: null,
                topDragOver: null,
                topDragStart: null,
                topDrop: null,
                topError: null,
                topFocus: null,
                topInput: null,
                topKeyDown: null,
                topKeyPress: null,
                topKeyUp: null,
                topLoad: null,
                topMouseDown: null,
                topMouseMove: null,
                topMouseOut: null,
                topMouseOver: null,
                topMouseUp: null,
                topPaste: null,
                topReset: null,
                topScroll: null,
                topSelectionChange: null,
                topSubmit: null,
                topTextInput: null,
                topTouchCancel: null,
                topTouchEnd: null,
                topTouchMove: null,
                topTouchStart: null,
                topWheel: null
            }),
            f = {
                topLevelTypes: e,
                PropagationPhases: d
            };
        b.exports = f
    }, {
        "./keyMirror": 144
    }
],
28: [
    function(a, b) {
        var c = a("./emptyFunction"),
            d = {
                listen: function(a, b, c) {
                    return a.addEventListener ? (a.addEventListener(b, c, !1), {
                        remove: function() {
                            a.removeEventListener(b, c, !1)
                        }
                    }) : a.attachEvent ? (a.attachEvent("on" + b, c), {
                        remove: function() {
                            a.detachEvent("on" + b, c)
                        }
                    }) : void 0
                },
                capture: function(a, b, d) {
                    return a.addEventListener ? (a.addEventListener(b, d, !0), {
                        remove: function() {
                            a.removeEventListener(b, d, !0)
                        }
                    }) : {
                        remove: c
                    }
                },
                registerDefault: function() {}
            };
        b.exports = d
    }, {
        "./emptyFunction": 119
    }
],
29: [
    function(a, b) {
        "use strict";
        var c = a("./EventPluginRegistry"),
            d = a("./EventPluginUtils"),
            e = a("./accumulateInto"),
            f = a("./forEachAccumulated"),
            g = a("./invariant"),
            h = {}, i = null,
            j = function(a) {
                if(a) {
                    var b = d.executeDispatch,
                        e = c.getPluginModuleForEvent(a);
                    e && e.executeDispatch && (b = e.executeDispatch), d.executeDispatchesInOrder(a, b), a.isPersistent() || a.constructor.release(a)
                }
            }, k = null,
            l = {
                injection: {
                    injectMount: d.injection.injectMount,
                    injectInstanceHandle: function(a) {
                        k = a
                    },
                    getInstanceHandle: function() {
                        return k
                    },
                    injectEventPluginOrder: c.injectEventPluginOrder,
                    injectEventPluginsByName: c.injectEventPluginsByName
                },
                eventNameDispatchConfigs: c.eventNameDispatchConfigs,
                registrationNameModules: c.registrationNameModules,
                putListener: function(a, b, c) {
                    g(!c || "function" == typeof c);
                    var d = h[b] || (h[b] = {});
                    d[a] = c
                },
                getListener: function(a, b) {
                    var c = h[b];
                    return c && c[a]
                },
                deleteListener: function(a, b) {
                    var c = h[b];
                    c && delete c[a]
                },
                deleteAllListeners: function(a) {
                    for(var b in h) delete h[b][a]
                },
                extractEvents: function(a, b, d, f) {
                    for(var g, h = c.plugins, i = 0, j = h.length; j > i; i++) {
                        var k = h[i];
                        if(k) {
                            var l = k.extractEvents(a, b, d, f);
                            l && (g = e(g, l))
                        }
                    }
                    return g
                },
                enqueueEvents: function(a) {
                    a && (i = e(i, a))
                },
                processEventQueue: function() {
                    var a = i;
                    i = null, f(a, j), g(!i)
                },
                __purge: function() {
                    h = {}
                },
                __getListenerBank: function() {
                    return h
                }
            };
        b.exports = l
    }, {
        "./EventPluginRegistry": 30,
        "./EventPluginUtils": 31,
        "./accumulateInto": 109,
        "./forEachAccumulated": 124,
        "./invariant": 138
    }
],
30: [
    function(a, b) {
        "use strict";

        function c() {
            if(g)
                for(var a in h) {
                    var b = h[a],
                        c = g.indexOf(a);
                    if(f(c > -1), !i.plugins[c]) {
                        f(b.extractEvents), i.plugins[c] = b;
                        var e = b.eventTypes;
                        for(var j in e) f(d(e[j], b, j))
                    }
                }
        }

        function d(a, b, c) {
            f(!i.eventNameDispatchConfigs.hasOwnProperty(c)), i.eventNameDispatchConfigs[c] = a;
            var d = a.phasedRegistrationNames;
            if(d) {
                for(var g in d)
                    if(d.hasOwnProperty(g)) {
                        var h = d[g];
                        e(h, b, c)
                    }
                return !0
            }
            return a.registrationName ? (e(a.registrationName, b, c), !0) : !1
        }

        function e(a, b, c) {
            f(!i.registrationNameModules[a]), i.registrationNameModules[a] = b, i.registrationNameDependencies[a] = b.eventTypes[c].dependencies
        }
        var f = a("./invariant"),
            g = null,
            h = {}, i = {
                plugins: [],
                eventNameDispatchConfigs: {},
                registrationNameModules: {},
                registrationNameDependencies: {},
                injectEventPluginOrder: function(a) {
                    f(!g), g = Array.prototype.slice.call(a), c()
                },
                injectEventPluginsByName: function(a) {
                    var b = !1;
                    for(var d in a)
                        if(a.hasOwnProperty(d)) {
                            var e = a[d];
                            h.hasOwnProperty(d) && h[d] === e || (f(!h[d]), h[d] = e, b = !0)
                        }
                    b && c()
                },
                getPluginModuleForEvent: function(a) {
                    var b = a.dispatchConfig;
                    if(b.registrationName) return i.registrationNameModules[b.registrationName] || null;
                    for(var c in b.phasedRegistrationNames)
                        if(b.phasedRegistrationNames.hasOwnProperty(c)) {
                            var d = i.registrationNameModules[b.phasedRegistrationNames[c]];
                            if(d) return d
                        }
                    return null
                },
                _resetEventPlugins: function() {
                    g = null;
                    for(var a in h) h.hasOwnProperty(a) && delete h[a];
                    i.plugins.length = 0;
                    var b = i.eventNameDispatchConfigs;
                    for(var c in b) b.hasOwnProperty(c) && delete b[c];
                    var d = i.registrationNameModules;
                    for(var e in d) d.hasOwnProperty(e) && delete d[e]
                }
            };
        b.exports = i
    }, {
        "./invariant": 138
    }
],
31: [
    function(a, b) {
        "use strict";

        function c(a) {
            return a === p.topMouseUp || a === p.topTouchEnd || a === p.topTouchCancel
        }

        function d(a) {
            return a === p.topMouseMove || a === p.topTouchMove
        }

        function e(a) {
            return a === p.topMouseDown || a === p.topTouchStart
        }

        function f(a, b) {
            var c = a._dispatchListeners,
                d = a._dispatchIDs;
            if(Array.isArray(c))
                for(var e = 0; e < c.length && !a.isPropagationStopped(); e++) b(a, c[e], d[e]);
            else c && b(a, c, d)
        }

        function g(a, b, c) {
            a.currentTarget = o.Mount.getNode(c);
            var d = b(a, c);
            return a.currentTarget = null, d
        }

        function h(a, b) {
            f(a, b), a._dispatchListeners = null, a._dispatchIDs = null
        }

        function i(a) {
            var b = a._dispatchListeners,
                c = a._dispatchIDs;
            if(Array.isArray(b)) {
                for(var d = 0; d < b.length && !a.isPropagationStopped(); d++)
                    if(b[d](a, c[d])) return c[d]
            } else if(b && b(a, c)) return c;
            return null
        }

        function j(a) {
            var b = i(a);
            return a._dispatchIDs = null, a._dispatchListeners = null, b
        }

        function k(a) {
            var b = a._dispatchListeners,
                c = a._dispatchIDs;
            n(!Array.isArray(b));
            var d = b ? b(a, c) : null;
            return a._dispatchListeners = null, a._dispatchIDs = null, d
        }

        function l(a) {
            return !!a._dispatchListeners
        }
        var m = a("./EventConstants"),
            n = a("./invariant"),
            o = {
                Mount: null,
                injectMount: function(a) {
                    o.Mount = a
                }
            }, p = m.topLevelTypes,
            q = {
                isEndish: c,
                isMoveish: d,
                isStartish: e,
                executeDirectDispatch: k,
                executeDispatch: g,
                executeDispatchesInOrder: h,
                executeDispatchesInOrderStopAtTrue: j,
                hasDispatches: l,
                injection: o,
                useTouchEvents: !1
            };
        b.exports = q
    }, {
        "./EventConstants": 27,
        "./invariant": 138
    }
],
32: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            var d = b.dispatchConfig.phasedRegistrationNames[c];
            return p(a, d)
        }

        function d(a, b, d) {
            var e = b ? o.bubbled : o.captured,
                f = c(a, d, e);
            f && (d._dispatchListeners = m(d._dispatchListeners, f), d._dispatchIDs = m(d._dispatchIDs, a))
        }

        function e(a) {
            a && a.dispatchConfig.phasedRegistrationNames && l.injection.getInstanceHandle().traverseTwoPhase(a.dispatchMarker, d, a)
        }

        function f(a, b, c) {
            if(c && c.dispatchConfig.registrationName) {
                var d = c.dispatchConfig.registrationName,
                    e = p(a, d);
                e && (c._dispatchListeners = m(c._dispatchListeners, e), c._dispatchIDs = m(c._dispatchIDs, a))
            }
        }

        function g(a) {
            a && a.dispatchConfig.registrationName && f(a.dispatchMarker, null, a)
        }

        function h(a) {
            n(a, e)
        }

        function i(a, b, c, d) {
            l.injection.getInstanceHandle().traverseEnterLeave(c, d, f, a, b)
        }

        function j(a) {
            n(a, g)
        }
        var k = a("./EventConstants"),
            l = a("./EventPluginHub"),
            m = a("./accumulateInto"),
            n = a("./forEachAccumulated"),
            o = k.PropagationPhases,
            p = l.getListener,
            q = {
                accumulateTwoPhaseDispatches: h,
                accumulateDirectDispatches: j,
                accumulateEnterLeaveDispatches: i
            };
        b.exports = q
    }, {
        "./EventConstants": 27,
        "./EventPluginHub": 29,
        "./accumulateInto": 109,
        "./forEachAccumulated": 124
    }
],
33: [
    function(a, b) {
        "use strict";
        var c = !("undefined" == typeof window || !window.document || !window.document.createElement),
            d = {
                canUseDOM: c,
                canUseWorkers: "undefined" != typeof Worker,
                canUseEventListeners: c && !(!window.addEventListener && !window.attachEvent),
                canUseViewport: c && !! window.screen,
                isInWorker: !c
            };
        b.exports = d
    }, {}
],
34: [
    function(a, b) {
        "use strict";
        var c, d = a("./DOMProperty"),
            e = a("./ExecutionEnvironment"),
            f = d.injection.MUST_USE_ATTRIBUTE,
            g = d.injection.MUST_USE_PROPERTY,
            h = d.injection.HAS_BOOLEAN_VALUE,
            i = d.injection.HAS_SIDE_EFFECTS,
            j = d.injection.HAS_NUMERIC_VALUE,
            k = d.injection.HAS_POSITIVE_NUMERIC_VALUE,
            l = d.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
        if(e.canUseDOM) {
            var m = document.implementation;
            c = m && m.hasFeature && m.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
        }
        var n = {
            isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
            Properties: {
                accept: null,
                acceptCharset: null,
                accessKey: null,
                action: null,
                allowFullScreen: f | h,
                allowTransparency: f,
                alt: null,
                async: h,
                autoComplete: null,
                autoPlay: h,
                cellPadding: null,
                cellSpacing: null,
                charSet: f,
                checked: g | h,
                classID: f,
                className: c ? f : g,
                cols: f | k,
                colSpan: null,
                content: null,
                contentEditable: null,
                contextMenu: f,
                controls: g | h,
                coords: null,
                crossOrigin: null,
                data: null,
                dateTime: f,
                defer: h,
                dir: null,
                disabled: f | h,
                download: l,
                draggable: null,
                encType: null,
                form: f,
                formNoValidate: h,
                frameBorder: f,
                height: f,
                hidden: f | h,
                href: null,
                hrefLang: null,
                htmlFor: null,
                httpEquiv: null,
                icon: null,
                id: g,
                label: null,
                lang: null,
                list: f,
                loop: g | h,
                manifest: f,
                max: null,
                maxLength: f,
                media: f,
                mediaGroup: null,
                method: null,
                min: null,
                multiple: g | h,
                muted: g | h,
                name: null,
                noValidate: h,
                open: null,
                pattern: null,
                placeholder: null,
                poster: null,
                preload: null,
                radioGroup: null,
                readOnly: g | h,
                rel: null,
                required: h,
                role: f,
                rows: f | k,
                rowSpan: null,
                sandbox: null,
                scope: null,
                scrolling: null,
                seamless: f | h,
                selected: g | h,
                shape: null,
                size: f | k,
                sizes: f,
                span: k,
                spellCheck: null,
                src: null,
                srcDoc: g,
                srcSet: f,
                start: j,
                step: null,
                style: null,
                tabIndex: null,
                target: null,
                title: null,
                type: null,
                useMap: null,
                value: g | i,
                width: f,
                wmode: f,
                autoCapitalize: null,
                autoCorrect: null,
                itemProp: f,
                itemScope: f | h,
                itemType: f,
                property: null
            },
            DOMAttributeNames: {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv"
            },
            DOMPropertyNames: {
                autoCapitalize: "autocapitalize",
                autoComplete: "autocomplete",
                autoCorrect: "autocorrect",
                autoFocus: "autofocus",
                autoPlay: "autoplay",
                encType: "enctype",
                hrefLang: "hreflang",
                radioGroup: "radiogroup",
                spellCheck: "spellcheck",
                srcDoc: "srcdoc",
                srcSet: "srcset"
            }
        };
        b.exports = n
    }, {
        "./DOMProperty": 22,
        "./ExecutionEnvironment": 33
    }
],
35: [
    function(a, b) {
        "use strict";

        function c(a) {
            i(null == a.props.checkedLink || null == a.props.valueLink)
        }

        function d(a) {
            c(a), i(null == a.props.value && null == a.props.onChange)
        }

        function e(a) {
            c(a), i(null == a.props.checked && null == a.props.onChange)
        }

        function f(a) {
            this.props.valueLink.requestChange(a.target.value)
        }

        function g(a) {
            this.props.checkedLink.requestChange(a.target.checked)
        }
        var h = a("./ReactPropTypes"),
            i = a("./invariant"),
            j = {
                button: !0,
                checkbox: !0,
                image: !0,
                hidden: !0,
                radio: !0,
                reset: !0,
                submit: !0
            }, k = {
                Mixin: {
                    propTypes: {
                        value: function(a, b) {
                            return !a[b] || j[a.type] || a.onChange || a.readOnly || a.disabled ? void 0 : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
                        },
                        checked: function(a, b) {
                            return !a[b] || a.onChange || a.readOnly || a.disabled ? void 0 : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
                        },
                        onChange: h.func
                    }
                },
                getValue: function(a) {
                    return a.props.valueLink ? (d(a), a.props.valueLink.value) : a.props.value
                },
                getChecked: function(a) {
                    return a.props.checkedLink ? (e(a), a.props.checkedLink.value) : a.props.checked
                },
                getOnChange: function(a) {
                    return a.props.valueLink ? (d(a), f) : a.props.checkedLink ? (e(a), g) : a.props.onChange
                }
            };
        b.exports = k
    }, {
        "./ReactPropTypes": 84,
        "./invariant": 138
    }
],
36: [
    function(a, b) {
        "use strict";

        function c(a) {
            a.remove()
        }
        var d = a("./ReactBrowserEventEmitter"),
            e = a("./accumulateInto"),
            f = a("./forEachAccumulated"),
            g = a("./invariant"),
            h = {
                trapBubbledEvent: function(a, b) {
                    g(this.isMounted());
                    var c = d.trapBubbledEvent(a, b, this.getDOMNode());
                    this._localEventListeners = e(this._localEventListeners, c)
                },
                componentWillUnmount: function() {
                    this._localEventListeners && f(this._localEventListeners, c)
                }
            };
        b.exports = h
    }, {
        "./ReactBrowserEventEmitter": 42,
        "./accumulateInto": 109,
        "./forEachAccumulated": 124,
        "./invariant": 138
    }
],
37: [
    function(a, b) {
        "use strict";
        var c = a("./EventConstants"),
            d = a("./emptyFunction"),
            e = c.topLevelTypes,
            f = {
                eventTypes: null,
                extractEvents: function(a, b, c, f) {
                    if(a === e.topTouchStart) {
                        var g = f.target;
                        g && !g.onclick && (g.onclick = d)
                    }
                }
            };
        b.exports = f
    }, {
        "./EventConstants": 27,
        "./emptyFunction": 119
    }
],
38: [
    function(a, b) {
        function c(a) {
            if(null == a) throw new TypeError("Object.assign target cannot be null or undefined");
            for(var b = Object(a), c = Object.prototype.hasOwnProperty, d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                if(null != e) {
                    var f = Object(e);
                    for(var g in f) c.call(f, g) && (b[g] = f[g])
                }
            }
            return b
        }
        b.exports = c
    }, {}
],
39: [
    function(a, b) {
        "use strict";
        var c = a("./invariant"),
            d = function(a) {
                var b = this;
                if(b.instancePool.length) {
                    var c = b.instancePool.pop();
                    return b.call(c, a), c
                }
                return new b(a)
            }, e = function(a, b) {
                var c = this;
                if(c.instancePool.length) {
                    var d = c.instancePool.pop();
                    return c.call(d, a, b), d
                }
                return new c(a, b)
            }, f = function(a, b, c) {
                var d = this;
                if(d.instancePool.length) {
                    var e = d.instancePool.pop();
                    return d.call(e, a, b, c), e
                }
                return new d(a, b, c)
            }, g = function(a, b, c, d, e) {
                var f = this;
                if(f.instancePool.length) {
                    var g = f.instancePool.pop();
                    return f.call(g, a, b, c, d, e), g
                }
                return new f(a, b, c, d, e)
            }, h = function(a) {
                var b = this;
                c(a instanceof b), a.destructor && a.destructor(), b.instancePool.length < b.poolSize && b.instancePool.push(a)
            }, i = 10,
            j = d,
            k = function(a, b) {
                var c = a;
                return c.instancePool = [], c.getPooled = b || j, c.poolSize || (c.poolSize = i), c.release = h, c
            }, l = {
                addPoolingTo: k,
                oneArgumentPooler: d,
                twoArgumentPooler: e,
                threeArgumentPooler: f,
                fiveArgumentPooler: g
            };
        b.exports = l
    }, {
        "./invariant": 138
    }
],
40: [
    function(a, b) {
        "use strict";
        var c = a("./DOMPropertyOperations"),
            d = a("./EventPluginUtils"),
            e = a("./ReactChildren"),
            f = a("./ReactComponent"),
            g = a("./ReactCompositeComponent"),
            h = a("./ReactContext"),
            i = a("./ReactCurrentOwner"),
            j = a("./ReactElement"),
            k = (a("./ReactElementValidator"), a("./ReactDOM")),
            l = a("./ReactDOMComponent"),
            m = a("./ReactDefaultInjection"),
            n = a("./ReactInstanceHandles"),
            o = a("./ReactLegacyElement"),
            p = a("./ReactMount"),
            q = a("./ReactMultiChild"),
            r = a("./ReactPerf"),
            s = a("./ReactPropTypes"),
            t = a("./ReactServerRendering"),
            u = a("./ReactTextComponent"),
            v = a("./Object.assign"),
            w = a("./deprecated"),
            x = a("./onlyChild");
        m.inject();
        var y = j.createElement,
            z = j.createFactory;
        y = o.wrapCreateElement(y), z = o.wrapCreateFactory(z);
        var A = r.measure("React", "render", p.render),
            B = {
                Children: {
                    map: e.map,
                    forEach: e.forEach,
                    count: e.count,
                    only: x
                },
                DOM: k,
                PropTypes: s,
                initializeTouchEvents: function(a) {
                    d.useTouchEvents = a
                },
                createClass: g.createClass,
                createElement: y,
                createFactory: z,
                constructAndRenderComponent: p.constructAndRenderComponent,
                constructAndRenderComponentByID: p.constructAndRenderComponentByID,
                render: A,
                renderToString: t.renderToString,
                renderToStaticMarkup: t.renderToStaticMarkup,
                unmountComponentAtNode: p.unmountComponentAtNode,
                isValidClass: o.isValidClass,
                isValidElement: j.isValidElement,
                withContext: h.withContext,
                __spread: v,
                renderComponent: w("React", "renderComponent", "render", this, A),
                renderComponentToString: w("React", "renderComponentToString", "renderToString", this, t.renderToString),
                renderComponentToStaticMarkup: w("React", "renderComponentToStaticMarkup", "renderToStaticMarkup", this, t.renderToStaticMarkup),
                isValidComponent: w("React", "isValidComponent", "isValidElement", this, j.isValidElement)
            };
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
            Component: f,
            CurrentOwner: i,
            DOMComponent: l,
            DOMPropertyOperations: c,
            InstanceHandles: n,
            Mount: p,
            MultiChild: q,
            TextComponent: u
        });
        B.version = "0.12.1", b.exports = B
    }, {
        "./DOMPropertyOperations": 23,
        "./EventPluginUtils": 31,
        "./ExecutionEnvironment": 33,
        "./Object.assign": 38,
        "./ReactChildren": 43,
        "./ReactComponent": 44,
        "./ReactCompositeComponent": 46,
        "./ReactContext": 47,
        "./ReactCurrentOwner": 48,
        "./ReactDOM": 49,
        "./ReactDOMComponent": 51,
        "./ReactDefaultInjection": 61,
        "./ReactElement": 64,
        "./ReactElementValidator": 65,
        "./ReactInstanceHandles": 72,
        "./ReactLegacyElement": 73,
        "./ReactMount": 75,
        "./ReactMultiChild": 76,
        "./ReactPerf": 80,
        "./ReactPropTypes": 84,
        "./ReactServerRendering": 88,
        "./ReactTextComponent": 90,
        "./deprecated": 118,
        "./onlyChild": 149
    }
],
41: [
    function(a, b) {
        "use strict";
        var c = a("./ReactEmptyComponent"),
            d = a("./ReactMount"),
            e = a("./invariant"),
            f = {
                getDOMNode: function() {
                    return e(this.isMounted()), c.isNullComponentID(this._rootNodeID) ? null : d.getNode(this._rootNodeID)
                }
            };
        b.exports = f
    }, {
        "./ReactEmptyComponent": 66,
        "./ReactMount": 75,
        "./invariant": 138
    }
],
42: [
    function(a, b) {
        "use strict";

        function c(a) {
            return Object.prototype.hasOwnProperty.call(a, o) || (a[o] = m++, k[a[o]] = {}), k[a[o]]
        }
        var d = a("./EventConstants"),
            e = a("./EventPluginHub"),
            f = a("./EventPluginRegistry"),
            g = a("./ReactEventEmitterMixin"),
            h = a("./ViewportMetrics"),
            i = a("./Object.assign"),
            j = a("./isEventSupported"),
            k = {}, l = !1,
            m = 0,
            n = {
                topBlur: "blur",
                topChange: "change",
                topClick: "click",
                topCompositionEnd: "compositionend",
                topCompositionStart: "compositionstart",
                topCompositionUpdate: "compositionupdate",
                topContextMenu: "contextmenu",
                topCopy: "copy",
                topCut: "cut",
                topDoubleClick: "dblclick",
                topDrag: "drag",
                topDragEnd: "dragend",
                topDragEnter: "dragenter",
                topDragExit: "dragexit",
                topDragLeave: "dragleave",
                topDragOver: "dragover",
                topDragStart: "dragstart",
                topDrop: "drop",
                topFocus: "focus",
                topInput: "input",
                topKeyDown: "keydown",
                topKeyPress: "keypress",
                topKeyUp: "keyup",
                topMouseDown: "mousedown",
                topMouseMove: "mousemove",
                topMouseOut: "mouseout",
                topMouseOver: "mouseover",
                topMouseUp: "mouseup",
                topPaste: "paste",
                topScroll: "scroll",
                topSelectionChange: "selectionchange",
                topTextInput: "textInput",
                topTouchCancel: "touchcancel",
                topTouchEnd: "touchend",
                topTouchMove: "touchmove",
                topTouchStart: "touchstart",
                topWheel: "wheel"
            }, o = "_reactListenersID" + String(Math.random()).slice(2),
            p = i({}, g, {
                ReactEventListener: null,
                injection: {
                    injectReactEventListener: function(a) {
                        a.setHandleTopLevel(p.handleTopLevel), p.ReactEventListener = a
                    }
                },
                setEnabled: function(a) {
                    p.ReactEventListener && p.ReactEventListener.setEnabled(a)
                },
                isEnabled: function() {
                    return !(!p.ReactEventListener || !p.ReactEventListener.isEnabled())
                },
                listenTo: function(a, b) {
                    for(var e = b, g = c(e), h = f.registrationNameDependencies[a], i = d.topLevelTypes, k = 0, l = h.length; l > k; k++) {
                        var m = h[k];
                        g.hasOwnProperty(m) && g[m] || (m === i.topWheel ? j("wheel") ? p.ReactEventListener.trapBubbledEvent(i.topWheel, "wheel", e) : j("mousewheel") ? p.ReactEventListener.trapBubbledEvent(i.topWheel, "mousewheel", e) : p.ReactEventListener.trapBubbledEvent(i.topWheel, "DOMMouseScroll", e) : m === i.topScroll ? j("scroll", !0) ? p.ReactEventListener.trapCapturedEvent(i.topScroll, "scroll", e) : p.ReactEventListener.trapBubbledEvent(i.topScroll, "scroll", p.ReactEventListener.WINDOW_HANDLE) : m === i.topFocus || m === i.topBlur ? (j("focus", !0) ? (p.ReactEventListener.trapCapturedEvent(i.topFocus, "focus", e), p.ReactEventListener.trapCapturedEvent(i.topBlur, "blur", e)) : j("focusin") && (p.ReactEventListener.trapBubbledEvent(i.topFocus, "focusin", e), p.ReactEventListener.trapBubbledEvent(i.topBlur, "focusout", e)), g[i.topBlur] = !0, g[i.topFocus] = !0) : n.hasOwnProperty(m) && p.ReactEventListener.trapBubbledEvent(m, n[m], e), g[m] = !0)
                    }
                },
                trapBubbledEvent: function(a, b, c) {
                    return p.ReactEventListener.trapBubbledEvent(a, b, c)
                },
                trapCapturedEvent: function(a, b, c) {
                    return p.ReactEventListener.trapCapturedEvent(a, b, c)
                },
                ensureScrollValueMonitoring: function() {
                    if(!l) {
                        var a = h.refreshScrollValues;
                        p.ReactEventListener.monitorScrollValue(a), l = !0
                    }
                },
                eventNameDispatchConfigs: e.eventNameDispatchConfigs,
                registrationNameModules: e.registrationNameModules,
                putListener: e.putListener,
                getListener: e.getListener,
                deleteListener: e.deleteListener,
                deleteAllListeners: e.deleteAllListeners
            });
        b.exports = p
    }, {
        "./EventConstants": 27,
        "./EventPluginHub": 29,
        "./EventPluginRegistry": 30,
        "./Object.assign": 38,
        "./ReactEventEmitterMixin": 68,
        "./ViewportMetrics": 108,
        "./isEventSupported": 139
    }
],
43: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            this.forEachFunction = a, this.forEachContext = b
        }

        function d(a, b, c, d) {
            var e = a;
            e.forEachFunction.call(e.forEachContext, b, d)
        }

        function e(a, b, e) {
            if(null == a) return a;
            var f = c.getPooled(b, e);
            l(a, d, f), c.release(f)
        }

        function f(a, b, c) {
            this.mapResult = a, this.mapFunction = b, this.mapContext = c
        }

        function g(a, b, c, d) {
            var e = a,
                f = e.mapResult,
                g = !f.hasOwnProperty(c);
            if(g) {
                var h = e.mapFunction.call(e.mapContext, b, d);
                f[c] = h
            }
        }

        function h(a, b, c) {
            if(null == a) return a;
            var d = {}, e = f.getPooled(d, b, c);
            return l(a, g, e), f.release(e), d
        }

        function i() {
            return null
        }

        function j(a) {
            return l(a, i, null)
        }
        var k = a("./PooledClass"),
            l = a("./traverseAllChildren"),
            m = (a("./warning"), k.twoArgumentPooler),
            n = k.threeArgumentPooler;
        k.addPoolingTo(c, m), k.addPoolingTo(f, n);
        var o = {
            forEach: e,
            map: h,
            count: j
        };
        b.exports = o
    }, {
        "./PooledClass": 39,
        "./traverseAllChildren": 156,
        "./warning": 157
    }
],
44: [
    function(a, b) {
        "use strict";
        var c = a("./ReactElement"),
            d = a("./ReactOwner"),
            e = a("./ReactUpdates"),
            f = a("./Object.assign"),
            g = a("./invariant"),
            h = a("./keyMirror"),
            i = h({
                MOUNTED: null,
                UNMOUNTED: null
            }),
            j = !1,
            k = null,
            l = null,
            m = {
                injection: {
                    injectEnvironment: function(a) {
                        g(!j), l = a.mountImageIntoNode, k = a.unmountIDFromEnvironment, m.BackendIDOperations = a.BackendIDOperations, j = !0
                    }
                },
                LifeCycle: i,
                BackendIDOperations: null,
                Mixin: {
                    isMounted: function() {
                        return this._lifeCycleState === i.MOUNTED
                    },
                    setProps: function(a, b) {
                        var c = this._pendingElement || this._currentElement;
                        this.replaceProps(f({}, c.props, a), b)
                    },
                    replaceProps: function(a, b) {
                        g(this.isMounted()), g(0 === this._mountDepth), this._pendingElement = c.cloneAndReplaceProps(this._pendingElement || this._currentElement, a), e.enqueueUpdate(this, b)
                    },
                    _setPropsInternal: function(a, b) {
                        var d = this._pendingElement || this._currentElement;
                        this._pendingElement = c.cloneAndReplaceProps(d, f({}, d.props, a)), e.enqueueUpdate(this, b)
                    },
                    construct: function(a) {
                        this.props = a.props, this._owner = a._owner, this._lifeCycleState = i.UNMOUNTED, this._pendingCallbacks = null, this._currentElement = a, this._pendingElement = null
                    },
                    mountComponent: function(a, b, c) {
                        g(!this.isMounted());
                        var e = this._currentElement.ref;
                        if(null != e) {
                            var f = this._currentElement._owner;
                            d.addComponentAsRefTo(this, e, f)
                        }
                        this._rootNodeID = a, this._lifeCycleState = i.MOUNTED, this._mountDepth = c
                    },
                    unmountComponent: function() {
                        g(this.isMounted());
                        var a = this._currentElement.ref;
                        null != a && d.removeComponentAsRefFrom(this, a, this._owner), k(this._rootNodeID), this._rootNodeID = null, this._lifeCycleState = i.UNMOUNTED
                    },
                    receiveComponent: function(a, b) {
                        g(this.isMounted()), this._pendingElement = a, this.performUpdateIfNecessary(b)
                    },
                    performUpdateIfNecessary: function(a) {
                        if(null != this._pendingElement) {
                            var b = this._currentElement,
                                c = this._pendingElement;
                            this._currentElement = c, this.props = c.props, this._owner = c._owner, this._pendingElement = null, this.updateComponent(a, b)
                        }
                    },
                    updateComponent: function(a, b) {
                        var c = this._currentElement;
                        (c._owner !== b._owner || c.ref !== b.ref) && (null != b.ref && d.removeComponentAsRefFrom(this, b.ref, b._owner), null != c.ref && d.addComponentAsRefTo(this, c.ref, c._owner))
                    },
                    mountComponentIntoNode: function(a, b, c) {
                        var d = e.ReactReconcileTransaction.getPooled();
                        d.perform(this._mountComponentIntoNode, this, a, b, d, c), e.ReactReconcileTransaction.release(d)
                    },
                    _mountComponentIntoNode: function(a, b, c, d) {
                        var e = this.mountComponent(a, c, 0);
                        l(e, b, d)
                    },
                    isOwnedBy: function(a) {
                        return this._owner === a
                    },
                    getSiblingByRef: function(a) {
                        var b = this._owner;
                        return b && b.refs ? b.refs[a] : null
                    }
                }
            };
        b.exports = m
    }, {
        "./Object.assign": 38,
        "./ReactElement": 64,
        "./ReactOwner": 79,
        "./ReactUpdates": 91,
        "./invariant": 138,
        "./keyMirror": 144
    }
],
45: [
    function(a, b) {
        "use strict";
        var c = a("./ReactDOMIDOperations"),
            d = a("./ReactMarkupChecksum"),
            e = a("./ReactMount"),
            f = a("./ReactPerf"),
            g = a("./ReactReconcileTransaction"),
            h = a("./getReactRootElementInContainer"),
            i = a("./invariant"),
            j = a("./setInnerHTML"),
            k = 1,
            l = 9,
            m = {
                ReactReconcileTransaction: g,
                BackendIDOperations: c,
                unmountIDFromEnvironment: function(a) {
                    e.purgeID(a)
                },
                mountImageIntoNode: f.measure("ReactComponentBrowserEnvironment", "mountImageIntoNode", function(a, b, c) {
                    if(i(b && (b.nodeType === k || b.nodeType === l)), c) {
                        if(d.canReuseMarkup(a, h(b))) return;
                        i(b.nodeType !== l)
                    }
                    i(b.nodeType !== l), j(b, a)
                })
            };
        b.exports = m
    }, {
        "./ReactDOMIDOperations": 53,
        "./ReactMarkupChecksum": 74,
        "./ReactMount": 75,
        "./ReactPerf": 80,
        "./ReactReconcileTransaction": 86,
        "./getReactRootElementInContainer": 132,
        "./invariant": 138,
        "./setInnerHTML": 152
    }
],
46: [
    function(a, b) {
        "use strict";

        function c(a) {
            var b = a._owner || null;
            return b && b.constructor && b.constructor.displayName ? " Check the render method of `" + b.constructor.displayName + "`." : ""
        }

        function d(a, b, c) {
            for(var d in b) b.hasOwnProperty(d) && z("function" == typeof b[d])
        }

        function e(a, b) {
            var c = H.hasOwnProperty(b) ? H[b] : null;
            K.hasOwnProperty(b) && z(c === F.OVERRIDE_BASE), a.hasOwnProperty(b) && z(c === F.DEFINE_MANY || c === F.DEFINE_MANY_MERGED)
        }

        function f(a) {
            var b = a._compositeLifeCycleState;
            z(a.isMounted() || b === J.MOUNTING), z(null == n.current), z(b !== J.UNMOUNTING)
        }

        function g(a, b) {
            if(b) {
                z(!r.isValidFactory(b)), z(!o.isValidElement(b));
                var c = a.prototype;
                b.hasOwnProperty(E) && I.mixins(a, b.mixins);
                for(var d in b)
                    if(b.hasOwnProperty(d) && d !== E) {
                        var f = b[d];
                        if(e(c, d), I.hasOwnProperty(d)) I[d](a, f);
                        else {
                            var g = H.hasOwnProperty(d),
                                h = c.hasOwnProperty(d),
                                i = f && f.__reactDontBind,
                                l = "function" == typeof f,
                                m = l && !g && !h && !i;
                            if(m) c.__reactAutoBindMap || (c.__reactAutoBindMap = {}), c.__reactAutoBindMap[d] = f, c[d] = f;
                            else if(h) {
                                var n = H[d];
                                z(g && (n === F.DEFINE_MANY_MERGED || n === F.DEFINE_MANY)), n === F.DEFINE_MANY_MERGED ? c[d] = j(c[d], f) : n === F.DEFINE_MANY && (c[d] = k(c[d], f))
                            } else c[d] = f
                        }
                    }
            }
        }

        function h(a, b) {
            if(b)
                for(var c in b) {
                    var d = b[c];
                    if(b.hasOwnProperty(c)) {
                        var e = c in I;
                        z(!e);
                        var f = c in a;
                        z(!f), a[c] = d
                    }
                }
        }

        function i(a, b) {
            return z(a && b && "object" == typeof a && "object" == typeof b), C(b, function(b, c) {
                z(void 0 === a[c]), a[c] = b
            }), a
        }

        function j(a, b) {
            return function() {
                var c = a.apply(this, arguments),
                    d = b.apply(this, arguments);
                return null == c ? d : null == d ? c : i(c, d)
            }
        }

        function k(a, b) {
            return function() {
                a.apply(this, arguments), b.apply(this, arguments)
            }
        }
        var l = a("./ReactComponent"),
            m = a("./ReactContext"),
            n = a("./ReactCurrentOwner"),
            o = a("./ReactElement"),
            p = (a("./ReactElementValidator"), a("./ReactEmptyComponent")),
            q = a("./ReactErrorUtils"),
            r = a("./ReactLegacyElement"),
            s = a("./ReactOwner"),
            t = a("./ReactPerf"),
            u = a("./ReactPropTransferer"),
            v = a("./ReactPropTypeLocations"),
            w = (a("./ReactPropTypeLocationNames"), a("./ReactUpdates")),
            x = a("./Object.assign"),
            y = a("./instantiateReactComponent"),
            z = a("./invariant"),
            A = a("./keyMirror"),
            B = a("./keyOf"),
            C = (a("./monitorCodeUse"), a("./mapObject")),
            D = a("./shouldUpdateReactComponent"),
            E = (a("./warning"), B({
                mixins: null
            })),
            F = A({
                DEFINE_ONCE: null,
                DEFINE_MANY: null,
                OVERRIDE_BASE: null,
                DEFINE_MANY_MERGED: null
            }),
            G = [],
            H = {
                mixins: F.DEFINE_MANY,
                statics: F.DEFINE_MANY,
                propTypes: F.DEFINE_MANY,
                contextTypes: F.DEFINE_MANY,
                childContextTypes: F.DEFINE_MANY,
                getDefaultProps: F.DEFINE_MANY_MERGED,
                getInitialState: F.DEFINE_MANY_MERGED,
                getChildContext: F.DEFINE_MANY_MERGED,
                render: F.DEFINE_ONCE,
                componentWillMount: F.DEFINE_MANY,
                componentDidMount: F.DEFINE_MANY,
                componentWillReceiveProps: F.DEFINE_MANY,
                shouldComponentUpdate: F.DEFINE_ONCE,
                componentWillUpdate: F.DEFINE_MANY,
                componentDidUpdate: F.DEFINE_MANY,
                componentWillUnmount: F.DEFINE_MANY,
                updateComponent: F.OVERRIDE_BASE
            }, I = {
                displayName: function(a, b) {
                    a.displayName = b
                },
                mixins: function(a, b) {
                    if(b)
                        for(var c = 0; c < b.length; c++) g(a, b[c])
                },
                childContextTypes: function(a, b) {
                    d(a, b, v.childContext), a.childContextTypes = x({}, a.childContextTypes, b)
                },
                contextTypes: function(a, b) {
                    d(a, b, v.context), a.contextTypes = x({}, a.contextTypes, b)
                },
                getDefaultProps: function(a, b) {
                    a.getDefaultProps = a.getDefaultProps ? j(a.getDefaultProps, b) : b
                },
                propTypes: function(a, b) {
                    d(a, b, v.prop), a.propTypes = x({}, a.propTypes, b)
                },
                statics: function(a, b) {
                    h(a, b)
                }
            }, J = A({
                MOUNTING: null,
                UNMOUNTING: null,
                RECEIVING_PROPS: null
            }),
            K = {
                construct: function() {
                    l.Mixin.construct.apply(this, arguments), s.Mixin.construct.apply(this, arguments), this.state = null, this._pendingState = null, this.context = null, this._compositeLifeCycleState = null
                },
                isMounted: function() {
                    return l.Mixin.isMounted.call(this) && this._compositeLifeCycleState !== J.MOUNTING
                },
                mountComponent: t.measure("ReactCompositeComponent", "mountComponent", function(a, b, c) {
                    l.Mixin.mountComponent.call(this, a, b, c), this._compositeLifeCycleState = J.MOUNTING, this.__reactAutoBindMap && this._bindAutoBindMethods(), this.context = this._processContext(this._currentElement._context), this.props = this._processProps(this.props), this.state = this.getInitialState ? this.getInitialState() : null, z("object" == typeof this.state && !Array.isArray(this.state)), this._pendingState = null, this._pendingForceUpdate = !1, this.componentWillMount && (this.componentWillMount(), this._pendingState && (this.state = this._pendingState, this._pendingState = null)), this._renderedComponent = y(this._renderValidatedComponent(), this._currentElement.type), this._compositeLifeCycleState = null;
                    var d = this._renderedComponent.mountComponent(a, b, c + 1);
                    return this.componentDidMount && b.getReactMountReady().enqueue(this.componentDidMount, this), d
                }),
                unmountComponent: function() {
                    this._compositeLifeCycleState = J.UNMOUNTING, this.componentWillUnmount && this.componentWillUnmount(), this._compositeLifeCycleState = null, this._renderedComponent.unmountComponent(), this._renderedComponent = null, l.Mixin.unmountComponent.call(this)
                },
                setState: function(a, b) {
                    z("object" == typeof a || null == a), this.replaceState(x({}, this._pendingState || this.state, a), b)
                },
                replaceState: function(a, b) {
                    f(this), this._pendingState = a, this._compositeLifeCycleState !== J.MOUNTING && w.enqueueUpdate(this, b)
                },
                _processContext: function(a) {
                    var b = null,
                        c = this.constructor.contextTypes;
                    if(c) {
                        b = {};
                        for(var d in c) b[d] = a[d]
                    }
                    return b
                },
                _processChildContext: function(a) {
                    {
                        var b = this.getChildContext && this.getChildContext();
                        this.constructor.displayName || "ReactCompositeComponent"
                    }
                    if(b) {
                        z("object" == typeof this.constructor.childContextTypes);
                        for(var c in b) z(c in this.constructor.childContextTypes);
                        return x({}, a, b)
                    }
                    return a
                },
                _processProps: function(a) {
                    return a
                },
                _checkPropTypes: function(a, b, d) {
                    var e = this.constructor.displayName;
                    for(var f in a)
                        if(a.hasOwnProperty(f)) {
                            var g = a[f](b, f, e, d);
                            if(g instanceof Error) {
                                c(this)
                            }
                        }
                },
                performUpdateIfNecessary: function(a) {
                    var b = this._compositeLifeCycleState;
                    if(b !== J.MOUNTING && b !== J.RECEIVING_PROPS && (null != this._pendingElement || null != this._pendingState || this._pendingForceUpdate)) {
                        var c = this.context,
                            d = this.props,
                            e = this._currentElement;
                        null != this._pendingElement && (e = this._pendingElement, c = this._processContext(e._context), d = this._processProps(e.props), this._pendingElement = null, this._compositeLifeCycleState = J.RECEIVING_PROPS, this.componentWillReceiveProps && this.componentWillReceiveProps(d, c)), this._compositeLifeCycleState = null;
                        var f = this._pendingState || this.state;
                        this._pendingState = null;
                        var g = this._pendingForceUpdate || !this.shouldComponentUpdate || this.shouldComponentUpdate(d, f, c);
                        g ? (this._pendingForceUpdate = !1, this._performComponentUpdate(e, d, f, c, a)) : (this._currentElement = e, this.props = d, this.state = f, this.context = c, this._owner = e._owner)
                    }
                },
                _performComponentUpdate: function(a, b, c, d, e) {
                    var f = this._currentElement,
                        g = this.props,
                        h = this.state,
                        i = this.context;
                    this.componentWillUpdate && this.componentWillUpdate(b, c, d), this._currentElement = a, this.props = b, this.state = c, this.context = d, this._owner = a._owner, this.updateComponent(e, f), this.componentDidUpdate && e.getReactMountReady().enqueue(this.componentDidUpdate.bind(this, g, h, i), this)
                },
                receiveComponent: function(a, b) {
                    (a !== this._currentElement || null == a._owner) && l.Mixin.receiveComponent.call(this, a, b)
                },
                updateComponent: t.measure("ReactCompositeComponent", "updateComponent", function(a, b) {
                    l.Mixin.updateComponent.call(this, a, b);
                    var c = this._renderedComponent,
                        d = c._currentElement,
                        e = this._renderValidatedComponent();
                    if(D(d, e)) c.receiveComponent(e, a);
                    else {
                        var f = this._rootNodeID,
                            g = c._rootNodeID;
                        c.unmountComponent(), this._renderedComponent = y(e, this._currentElement.type);
                        var h = this._renderedComponent.mountComponent(f, a, this._mountDepth + 1);
                        l.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(g, h)
                    }
                }),
                forceUpdate: function(a) {
                    var b = this._compositeLifeCycleState;
                    z(this.isMounted() || b === J.MOUNTING), z(b !== J.UNMOUNTING && null == n.current), this._pendingForceUpdate = !0, w.enqueueUpdate(this, a)
                },
                _renderValidatedComponent: t.measure("ReactCompositeComponent", "_renderValidatedComponent", function() {
                    var a, b = m.current;
                    m.current = this._processChildContext(this._currentElement._context), n.current = this;
                    try {
                        a = this.render(), null === a || a === !1 ? (a = p.getEmptyComponent(), p.registerNullComponentID(this._rootNodeID)) : p.deregisterNullComponentID(this._rootNodeID)
                    } finally {
                        m.current = b, n.current = null
                    }
                    return z(o.isValidElement(a)), a
                }),
                _bindAutoBindMethods: function() {
                    for(var a in this.__reactAutoBindMap)
                        if(this.__reactAutoBindMap.hasOwnProperty(a)) {
                            var b = this.__reactAutoBindMap[a];
                            this[a] = this._bindAutoBindMethod(q.guard(b, this.constructor.displayName + "." + a))
                        }
                },
                _bindAutoBindMethod: function(a) {
                    var b = this,
                        c = a.bind(b);
                    return c
                }
            }, L = function() {};
        x(L.prototype, l.Mixin, s.Mixin, u.Mixin, K);
        var M = {
            LifeCycle: J,
            Base: L,
            createClass: function(a) {
                var b = function() {};
                b.prototype = new L, b.prototype.constructor = b, G.forEach(g.bind(null, b)), g(b, a), b.getDefaultProps && (b.defaultProps = b.getDefaultProps()), z(b.prototype.render);
                for(var c in H) b.prototype[c] || (b.prototype[c] = null);
                return r.wrapFactory(o.createFactory(b))
            },
            injection: {
                injectMixin: function(a) {
                    G.push(a)
                }
            }
        };
        b.exports = M
    }, {
        "./Object.assign": 38,
        "./ReactComponent": 44,
        "./ReactContext": 47,
        "./ReactCurrentOwner": 48,
        "./ReactElement": 64,
        "./ReactElementValidator": 65,
        "./ReactEmptyComponent": 66,
        "./ReactErrorUtils": 67,
        "./ReactLegacyElement": 73,
        "./ReactOwner": 79,
        "./ReactPerf": 80,
        "./ReactPropTransferer": 81,
        "./ReactPropTypeLocationNames": 82,
        "./ReactPropTypeLocations": 83,
        "./ReactUpdates": 91,
        "./instantiateReactComponent": 137,
        "./invariant": 138,
        "./keyMirror": 144,
        "./keyOf": 145,
        "./mapObject": 146,
        "./monitorCodeUse": 148,
        "./shouldUpdateReactComponent": 154,
        "./warning": 157
    }
],
47: [
    function(a, b) {
        "use strict";
        var c = a("./Object.assign"),
            d = {
                current: {},
                withContext: function(a, b) {
                    var e, f = d.current;
                    d.current = c({}, f, a);
                    try {
                        e = b()
                    } finally {
                        d.current = f
                    }
                    return e
                }
            };
        b.exports = d
    }, {
        "./Object.assign": 38
    }
],
48: [
    function(a, b) {
        "use strict";
        var c = {
            current: null
        };
        b.exports = c
    }, {}
],
49: [
    function(a, b) {
        "use strict";

        function c(a) {
            return e.markNonLegacyFactory(d.createFactory(a))
        }
        var d = a("./ReactElement"),
            e = (a("./ReactElementValidator"), a("./ReactLegacyElement")),
            f = a("./mapObject"),
            g = f({
                a: "a",
                abbr: "abbr",
                address: "address",
                area: "area",
                article: "article",
                aside: "aside",
                audio: "audio",
                b: "b",
                base: "base",
                bdi: "bdi",
                bdo: "bdo",
                big: "big",
                blockquote: "blockquote",
                body: "body",
                br: "br",
                button: "button",
                canvas: "canvas",
                caption: "caption",
                cite: "cite",
                code: "code",
                col: "col",
                colgroup: "colgroup",
                data: "data",
                datalist: "datalist",
                dd: "dd",
                del: "del",
                details: "details",
                dfn: "dfn",
                dialog: "dialog",
                div: "div",
                dl: "dl",
                dt: "dt",
                em: "em",
                embed: "embed",
                fieldset: "fieldset",
                figcaption: "figcaption",
                figure: "figure",
                footer: "footer",
                form: "form",
                h1: "h1",
                h2: "h2",
                h3: "h3",
                h4: "h4",
                h5: "h5",
                h6: "h6",
                head: "head",
                header: "header",
                hr: "hr",
                html: "html",
                i: "i",
                iframe: "iframe",
                img: "img",
                input: "input",
                ins: "ins",
                kbd: "kbd",
                keygen: "keygen",
                label: "label",
                legend: "legend",
                li: "li",
                link: "link",
                main: "main",
                map: "map",
                mark: "mark",
                menu: "menu",
                menuitem: "menuitem",
                meta: "meta",
                meter: "meter",
                nav: "nav",
                noscript: "noscript",
                object: "object",
                ol: "ol",
                optgroup: "optgroup",
                option: "option",
                output: "output",
                p: "p",
                param: "param",
                picture: "picture",
                pre: "pre",
                progress: "progress",
                q: "q",
                rp: "rp",
                rt: "rt",
                ruby: "ruby",
                s: "s",
                samp: "samp",
                script: "script",
                section: "section",
                select: "select",
                small: "small",
                source: "source",
                span: "span",
                strong: "strong",
                style: "style",
                sub: "sub",
                summary: "summary",
                sup: "sup",
                table: "table",
                tbody: "tbody",
                td: "td",
                textarea: "textarea",
                tfoot: "tfoot",
                th: "th",
                thead: "thead",
                time: "time",
                title: "title",
                tr: "tr",
                track: "track",
                u: "u",
                ul: "ul",
                "var": "var",
                video: "video",
                wbr: "wbr",
                circle: "circle",
                defs: "defs",
                ellipse: "ellipse",
                g: "g",
                line: "line",
                linearGradient: "linearGradient",
                mask: "mask",
                path: "path",
                pattern: "pattern",
                polygon: "polygon",
                polyline: "polyline",
                radialGradient: "radialGradient",
                rect: "rect",
                stop: "stop",
                svg: "svg",
                text: "text",
                tspan: "tspan"
            }, c);
        b.exports = g
    }, {
        "./ReactElement": 64,
        "./ReactElementValidator": 65,
        "./ReactLegacyElement": 73,
        "./mapObject": 146
    }
],
50: [
    function(a, b) {
        "use strict";
        var c = a("./AutoFocusMixin"),
            d = a("./ReactBrowserComponentMixin"),
            e = a("./ReactCompositeComponent"),
            f = a("./ReactElement"),
            g = a("./ReactDOM"),
            h = a("./keyMirror"),
            i = f.createFactory(g.button.type),
            j = h({
                onClick: !0,
                onDoubleClick: !0,
                onMouseDown: !0,
                onMouseMove: !0,
                onMouseUp: !0,
                onClickCapture: !0,
                onDoubleClickCapture: !0,
                onMouseDownCapture: !0,
                onMouseMoveCapture: !0,
                onMouseUpCapture: !0
            }),
            k = e.createClass({
                displayName: "ReactDOMButton",
                mixins: [c, d],
                render: function() {
                    var a = {};
                    for(var b in this.props)!this.props.hasOwnProperty(b) || this.props.disabled && j[b] || (a[b] = this.props[b]);
                    return i(a, this.props.children)
                }
            });
        b.exports = k
    }, {
        "./AutoFocusMixin": 13,
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64,
        "./keyMirror": 144
    }
],
51: [
    function(a, b) {
        "use strict";

        function c(a) {
            a && (r(null == a.children || null == a.dangerouslySetInnerHTML), r(null == a.style || "object" == typeof a.style))
        }

        function d(a, b, c, d) {
            var e = m.findReactContainerForID(a);
            if(e) {
                var f = e.nodeType === y ? e.ownerDocument : e;
                u(b, f)
            }
            d.getPutListenerQueue().enqueuePutListener(a, b, c)
        }

        function e(a) {
            C.call(B, a) || (r(A.test(a)), B[a] = !0)
        }

        function f(a) {
            e(a), this._tag = a, this.tagName = a.toUpperCase()
        }
        var g = a("./CSSPropertyOperations"),
            h = a("./DOMProperty"),
            i = a("./DOMPropertyOperations"),
            j = a("./ReactBrowserComponentMixin"),
            k = a("./ReactComponent"),
            l = a("./ReactBrowserEventEmitter"),
            m = a("./ReactMount"),
            n = a("./ReactMultiChild"),
            o = a("./ReactPerf"),
            p = a("./Object.assign"),
            q = a("./escapeTextForBrowser"),
            r = a("./invariant"),
            s = (a("./isEventSupported"), a("./keyOf")),
            t = (a("./monitorCodeUse"), l.deleteListener),
            u = l.listenTo,
            v = l.registrationNameModules,
            w = {
                string: !0,
                number: !0
            }, x = s({
                style: null
            }),
            y = 1,
            z = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            }, A = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
            B = {}, C = {}.hasOwnProperty;
        f.displayName = "ReactDOMComponent", f.Mixin = {
            mountComponent: o.measure("ReactDOMComponent", "mountComponent", function(a, b, d) {
                k.Mixin.mountComponent.call(this, a, b, d), c(this.props);
                var e = z[this._tag] ? "" : "</" + this._tag + ">";
                return this._createOpenTagMarkupAndPutListeners(b) + this._createContentMarkup(b) + e
            }),
            _createOpenTagMarkupAndPutListeners: function(a) {
                var b = this.props,
                    c = "<" + this._tag;
                for(var e in b)
                    if(b.hasOwnProperty(e)) {
                        var f = b[e];
                        if(null != f)
                            if(v.hasOwnProperty(e)) d(this._rootNodeID, e, f, a);
                            else {
                                e === x && (f && (f = b.style = p({}, b.style)), f = g.createMarkupForStyles(f));
                                var h = i.createMarkupForProperty(e, f);
                                h && (c += " " + h)
                            }
                    }
                if(a.renderToStaticMarkup) return c + ">";
                var j = i.createMarkupForID(this._rootNodeID);
                return c + " " + j + ">"
            },
            _createContentMarkup: function(a) {
                var b = this.props.dangerouslySetInnerHTML;
                if(null != b) {
                    if(null != b.__html) return b.__html
                } else {
                    var c = w[typeof this.props.children] ? this.props.children : null,
                        d = null != c ? null : this.props.children;
                    if(null != c) return q(c);
                    if(null != d) {
                        var e = this.mountChildren(d, a);
                        return e.join("")
                    }
                }
                return ""
            },
            receiveComponent: function(a, b) {
                (a !== this._currentElement || null == a._owner) && k.Mixin.receiveComponent.call(this, a, b)
            },
            updateComponent: o.measure("ReactDOMComponent", "updateComponent", function(a, b) {
                c(this._currentElement.props), k.Mixin.updateComponent.call(this, a, b), this._updateDOMProperties(b.props, a), this._updateDOMChildren(b.props, a)
            }),
            _updateDOMProperties: function(a, b) {
                var c, e, f, g = this.props;
                for(c in a)
                    if(!g.hasOwnProperty(c) && a.hasOwnProperty(c))
                        if(c === x) {
                            var i = a[c];
                            for(e in i) i.hasOwnProperty(e) && (f = f || {}, f[e] = "")
                        } else v.hasOwnProperty(c) ? t(this._rootNodeID, c) : (h.isStandardName[c] || h.isCustomAttribute(c)) && k.BackendIDOperations.deletePropertyByID(this._rootNodeID, c);
                for(c in g) {
                    var j = g[c],
                        l = a[c];
                    if(g.hasOwnProperty(c) && j !== l)
                        if(c === x)
                            if(j && (j = g.style = p({}, j)), l) {
                                for(e in l)!l.hasOwnProperty(e) || j && j.hasOwnProperty(e) || (f = f || {}, f[e] = "");
                                for(e in j) j.hasOwnProperty(e) && l[e] !== j[e] && (f = f || {}, f[e] = j[e])
                            } else f = j;
                            else v.hasOwnProperty(c) ? d(this._rootNodeID, c, j, b) : (h.isStandardName[c] || h.isCustomAttribute(c)) && k.BackendIDOperations.updatePropertyByID(this._rootNodeID, c, j)
                }
                f && k.BackendIDOperations.updateStylesByID(this._rootNodeID, f)
            },
            _updateDOMChildren: function(a, b) {
                var c = this.props,
                    d = w[typeof a.children] ? a.children : null,
                    e = w[typeof c.children] ? c.children : null,
                    f = a.dangerouslySetInnerHTML && a.dangerouslySetInnerHTML.__html,
                    g = c.dangerouslySetInnerHTML && c.dangerouslySetInnerHTML.__html,
                    h = null != d ? null : a.children,
                    i = null != e ? null : c.children,
                    j = null != d || null != f,
                    l = null != e || null != g;
                null != h && null == i ? this.updateChildren(null, b) : j && !l && this.updateTextContent(""), null != e ? d !== e && this.updateTextContent("" + e) : null != g ? f !== g && k.BackendIDOperations.updateInnerHTMLByID(this._rootNodeID, g) : null != i && this.updateChildren(i, b)
            },
            unmountComponent: function() {
                this.unmountChildren(), l.deleteAllListeners(this._rootNodeID), k.Mixin.unmountComponent.call(this)
            }
        }, p(f.prototype, k.Mixin, f.Mixin, n.Mixin, j), b.exports = f
    }, {
        "./CSSPropertyOperations": 16,
        "./DOMProperty": 22,
        "./DOMPropertyOperations": 23,
        "./Object.assign": 38,
        "./ReactBrowserComponentMixin": 41,
        "./ReactBrowserEventEmitter": 42,
        "./ReactComponent": 44,
        "./ReactMount": 75,
        "./ReactMultiChild": 76,
        "./ReactPerf": 80,
        "./escapeTextForBrowser": 121,
        "./invariant": 138,
        "./isEventSupported": 139,
        "./keyOf": 145,
        "./monitorCodeUse": 148
    }
],
52: [
    function(a, b) {
        "use strict";
        var c = a("./EventConstants"),
            d = a("./LocalEventTrapMixin"),
            e = a("./ReactBrowserComponentMixin"),
            f = a("./ReactCompositeComponent"),
            g = a("./ReactElement"),
            h = a("./ReactDOM"),
            i = g.createFactory(h.form.type),
            j = f.createClass({
                displayName: "ReactDOMForm",
                mixins: [e, d],
                render: function() {
                    return i(this.props)
                },
                componentDidMount: function() {
                    this.trapBubbledEvent(c.topLevelTypes.topReset, "reset"), this.trapBubbledEvent(c.topLevelTypes.topSubmit, "submit")
                }
            });
        b.exports = j
    }, {
        "./EventConstants": 27,
        "./LocalEventTrapMixin": 36,
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64
    }
],
53: [
    function(a, b) {
        "use strict";
        var c = a("./CSSPropertyOperations"),
            d = a("./DOMChildrenOperations"),
            e = a("./DOMPropertyOperations"),
            f = a("./ReactMount"),
            g = a("./ReactPerf"),
            h = a("./invariant"),
            i = a("./setInnerHTML"),
            j = {
                dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
                style: "`style` must be set using `updateStylesByID()`."
            }, k = {
                updatePropertyByID: g.measure("ReactDOMIDOperations", "updatePropertyByID", function(a, b, c) {
                    var d = f.getNode(a);
                    h(!j.hasOwnProperty(b)), null != c ? e.setValueForProperty(d, b, c) : e.deleteValueForProperty(d, b)
                }),
                deletePropertyByID: g.measure("ReactDOMIDOperations", "deletePropertyByID", function(a, b, c) {
                    var d = f.getNode(a);
                    h(!j.hasOwnProperty(b)), e.deleteValueForProperty(d, b, c)
                }),
                updateStylesByID: g.measure("ReactDOMIDOperations", "updateStylesByID", function(a, b) {
                    var d = f.getNode(a);
                    c.setValueForStyles(d, b)
                }),
                updateInnerHTMLByID: g.measure("ReactDOMIDOperations", "updateInnerHTMLByID", function(a, b) {
                    var c = f.getNode(a);
                    i(c, b)
                }),
                updateTextContentByID: g.measure("ReactDOMIDOperations", "updateTextContentByID", function(a, b) {
                    var c = f.getNode(a);
                    d.updateTextContent(c, b)
                }),
                dangerouslyReplaceNodeWithMarkupByID: g.measure("ReactDOMIDOperations", "dangerouslyReplaceNodeWithMarkupByID", function(a, b) {
                    var c = f.getNode(a);
                    d.dangerouslyReplaceNodeWithMarkup(c, b)
                }),
                dangerouslyProcessChildrenUpdates: g.measure("ReactDOMIDOperations", "dangerouslyProcessChildrenUpdates", function(a, b) {
                    for(var c = 0; c < a.length; c++) a[c].parentNode = f.getNode(a[c].parentID);
                    d.processUpdates(a, b)
                })
            };
        b.exports = k
    }, {
        "./CSSPropertyOperations": 16,
        "./DOMChildrenOperations": 21,
        "./DOMPropertyOperations": 23,
        "./ReactMount": 75,
        "./ReactPerf": 80,
        "./invariant": 138,
        "./setInnerHTML": 152
    }
],
54: [
    function(a, b) {
        "use strict";
        var c = a("./EventConstants"),
            d = a("./LocalEventTrapMixin"),
            e = a("./ReactBrowserComponentMixin"),
            f = a("./ReactCompositeComponent"),
            g = a("./ReactElement"),
            h = a("./ReactDOM"),
            i = g.createFactory(h.img.type),
            j = f.createClass({
                displayName: "ReactDOMImg",
                tagName: "IMG",
                mixins: [e, d],
                render: function() {
                    return i(this.props)
                },
                componentDidMount: function() {
                    this.trapBubbledEvent(c.topLevelTypes.topLoad, "load"), this.trapBubbledEvent(c.topLevelTypes.topError, "error")
                }
            });
        b.exports = j
    }, {
        "./EventConstants": 27,
        "./LocalEventTrapMixin": 36,
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64
    }
],
55: [
    function(a, b) {
        "use strict";

        function c() {
            this.isMounted() && this.forceUpdate()
        }
        var d = a("./AutoFocusMixin"),
            e = a("./DOMPropertyOperations"),
            f = a("./LinkedValueUtils"),
            g = a("./ReactBrowserComponentMixin"),
            h = a("./ReactCompositeComponent"),
            i = a("./ReactElement"),
            j = a("./ReactDOM"),
            k = a("./ReactMount"),
            l = a("./ReactUpdates"),
            m = a("./Object.assign"),
            n = a("./invariant"),
            o = i.createFactory(j.input.type),
            p = {}, q = h.createClass({
                displayName: "ReactDOMInput",
                mixins: [d, f.Mixin, g],
                getInitialState: function() {
                    var a = this.props.defaultValue;
                    return {
                        initialChecked: this.props.defaultChecked || !1,
                        initialValue: null != a ? a : null
                    }
                },
                render: function() {
                    var a = m({}, this.props);
                    a.defaultChecked = null, a.defaultValue = null;
                    var b = f.getValue(this);
                    a.value = null != b ? b : this.state.initialValue;
                    var c = f.getChecked(this);
                    return a.checked = null != c ? c : this.state.initialChecked, a.onChange = this._handleChange, o(a, this.props.children)
                },
                componentDidMount: function() {
                    var a = k.getID(this.getDOMNode());
                    p[a] = this
                },
                componentWillUnmount: function() {
                    var a = this.getDOMNode(),
                        b = k.getID(a);
                    delete p[b]
                },
                componentDidUpdate: function() {
                    var a = this.getDOMNode();
                    null != this.props.checked && e.setValueForProperty(a, "checked", this.props.checked || !1);
                    var b = f.getValue(this);
                    null != b && e.setValueForProperty(a, "value", "" + b)
                },
                _handleChange: function(a) {
                    var b, d = f.getOnChange(this);
                    d && (b = d.call(this, a)), l.asap(c, this);
                    var e = this.props.name;
                    if("radio" === this.props.type && null != e) {
                        for(var g = this.getDOMNode(), h = g; h.parentNode;) h = h.parentNode;
                        for(var i = h.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), j = 0, m = i.length; m > j; j++) {
                            var o = i[j];
                            if(o !== g && o.form === g.form) {
                                var q = k.getID(o);
                                n(q);
                                var r = p[q];
                                n(r), l.asap(c, r)
                            }
                        }
                    }
                    return b
                }
            });
        b.exports = q
    }, {
        "./AutoFocusMixin": 13,
        "./DOMPropertyOperations": 23,
        "./LinkedValueUtils": 35,
        "./Object.assign": 38,
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64,
        "./ReactMount": 75,
        "./ReactUpdates": 91,
        "./invariant": 138
    }
],
56: [
    function(a, b) {
        "use strict";
        var c = a("./ReactBrowserComponentMixin"),
            d = a("./ReactCompositeComponent"),
            e = a("./ReactElement"),
            f = a("./ReactDOM"),
            g = (a("./warning"), e.createFactory(f.option.type)),
            h = d.createClass({
                displayName: "ReactDOMOption",
                mixins: [c],
                componentWillMount: function() {},
                render: function() {
                    return g(this.props, this.props.children)
                }
            });
        b.exports = h
    }, {
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64,
        "./warning": 157
    }
],
57: [
    function(a, b) {
        "use strict";

        function c() {
            this.isMounted() && (this.setState({
                value: this._pendingValue
            }), this._pendingValue = 0)
        }

        function d(a, b) {
            if(null != a[b])
                if(a.multiple) {
                    if(!Array.isArray(a[b])) return new Error("The `" + b + "` prop supplied to <select> must be an array if `multiple` is true.")
                } else if(Array.isArray(a[b])) return new Error("The `" + b + "` prop supplied to <select> must be a scalar value if `multiple` is false.")
        }

        function e(a, b) {
            var c, d, e, f = a.props.multiple,
                g = null != b ? b : a.state.value,
                h = a.getDOMNode().options;
            if(f)
                for(c = {}, d = 0, e = g.length; e > d; ++d) c["" + g[d]] = !0;
            else c = "" + g;
            for(d = 0, e = h.length; e > d; d++) {
                var i = f ? c.hasOwnProperty(h[d].value) : h[d].value === c;
                i !== h[d].selected && (h[d].selected = i)
            }
        }
        var f = a("./AutoFocusMixin"),
            g = a("./LinkedValueUtils"),
            h = a("./ReactBrowserComponentMixin"),
            i = a("./ReactCompositeComponent"),
            j = a("./ReactElement"),
            k = a("./ReactDOM"),
            l = a("./ReactUpdates"),
            m = a("./Object.assign"),
            n = j.createFactory(k.select.type),
            o = i.createClass({
                displayName: "ReactDOMSelect",
                mixins: [f, g.Mixin, h],
                propTypes: {
                    defaultValue: d,
                    value: d
                },
                getInitialState: function() {
                    return {
                        value: this.props.defaultValue || (this.props.multiple ? [] : "")
                    }
                },
                componentWillMount: function() {
                    this._pendingValue = null
                },
                componentWillReceiveProps: function(a) {
                    !this.props.multiple && a.multiple ? this.setState({
                        value: [this.state.value]
                    }) : this.props.multiple && !a.multiple && this.setState({
                        value: this.state.value[0]
                    })
                },
                render: function() {
                    var a = m({}, this.props);
                    return a.onChange = this._handleChange, a.value = null, n(a, this.props.children)
                },
                componentDidMount: function() {
                    e(this, g.getValue(this))
                },
                componentDidUpdate: function(a) {
                    var b = g.getValue(this),
                        c = !! a.multiple,
                        d = !! this.props.multiple;
                    (null != b || c !== d) && e(this, b)
                },
                _handleChange: function(a) {
                    var b, d = g.getOnChange(this);
                    d && (b = d.call(this, a));
                    var e;
                    if(this.props.multiple) {
                        e = [];
                        for(var f = a.target.options, h = 0, i = f.length; i > h; h++) f[h].selected && e.push(f[h].value)
                    } else e = a.target.value;
                    return this._pendingValue = e, l.asap(c, this), b
                }
            });
        b.exports = o
    }, {
        "./AutoFocusMixin": 13,
        "./LinkedValueUtils": 35,
        "./Object.assign": 38,
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64,
        "./ReactUpdates": 91
    }
],
58: [
    function(a, b) {
        "use strict";

        function c(a, b, c, d) {
            return a === c && b === d
        }

        function d(a) {
            var b = document.selection,
                c = b.createRange(),
                d = c.text.length,
                e = c.duplicate();
            e.moveToElementText(a), e.setEndPoint("EndToStart", c);
            var f = e.text.length,
                g = f + d;
            return {
                start: f,
                end: g
            }
        }

        function e(a) {
            var b = window.getSelection && window.getSelection();
            if(!b || 0 === b.rangeCount) return null;
            var d = b.anchorNode,
                e = b.anchorOffset,
                f = b.focusNode,
                g = b.focusOffset,
                h = b.getRangeAt(0),
                i = c(b.anchorNode, b.anchorOffset, b.focusNode, b.focusOffset),
                j = i ? 0 : h.toString().length,
                k = h.cloneRange();
            k.selectNodeContents(a), k.setEnd(h.startContainer, h.startOffset);
            var l = c(k.startContainer, k.startOffset, k.endContainer, k.endOffset),
                m = l ? 0 : k.toString().length,
                n = m + j,
                o = document.createRange();
            o.setStart(d, e), o.setEnd(f, g);
            var p = o.collapsed;
            return {
                start: p ? n : m,
                end: p ? m : n
            }
        }

        function f(a, b) {
            var c, d, e = document.selection.createRange().duplicate();
            "undefined" == typeof b.end ? (c = b.start, d = c) : b.start > b.end ? (c = b.end, d = b.start) : (c = b.start, d = b.end), e.moveToElementText(a), e.moveStart("character", c), e.setEndPoint("EndToStart", e), e.moveEnd("character", d - c), e.select()
        }

        function g(a, b) {
            if(window.getSelection) {
                var c = window.getSelection(),
                    d = a[j()].length,
                    e = Math.min(b.start, d),
                    f = "undefined" == typeof b.end ? e : Math.min(b.end, d);
                if(!c.extend && e > f) {
                    var g = f;
                    f = e, e = g
                }
                var h = i(a, e),
                    k = i(a, f);
                if(h && k) {
                    var l = document.createRange();
                    l.setStart(h.node, h.offset), c.removeAllRanges(), e > f ? (c.addRange(l), c.extend(k.node, k.offset)) : (l.setEnd(k.node, k.offset), c.addRange(l))
                }
            }
        }
        var h = a("./ExecutionEnvironment"),
            i = a("./getNodeForCharacterOffset"),
            j = a("./getTextContentAccessor"),
            k = h.canUseDOM && document.selection,
            l = {
                getOffsets: k ? d : e,
                setOffsets: k ? f : g
            };
        b.exports = l
    }, {
        "./ExecutionEnvironment": 33,
        "./getNodeForCharacterOffset": 131,
        "./getTextContentAccessor": 133
    }
],
59: [
    function(a, b) {
        "use strict";

        function c() {
            this.isMounted() && this.forceUpdate()
        }
        var d = a("./AutoFocusMixin"),
            e = a("./DOMPropertyOperations"),
            f = a("./LinkedValueUtils"),
            g = a("./ReactBrowserComponentMixin"),
            h = a("./ReactCompositeComponent"),
            i = a("./ReactElement"),
            j = a("./ReactDOM"),
            k = a("./ReactUpdates"),
            l = a("./Object.assign"),
            m = a("./invariant"),
            n = (a("./warning"), i.createFactory(j.textarea.type)),
            o = h.createClass({
                displayName: "ReactDOMTextarea",
                mixins: [d, f.Mixin, g],
                getInitialState: function() {
                    var a = this.props.defaultValue,
                        b = this.props.children;
                    null != b && (m(null == a), Array.isArray(b) && (m(b.length <= 1), b = b[0]), a = "" + b), null == a && (a = "");
                    var c = f.getValue(this);
                    return {
                        initialValue: "" + (null != c ? c : a)
                    }
                },
                render: function() {
                    var a = l({}, this.props);
                    return m(null == a.dangerouslySetInnerHTML), a.defaultValue = null, a.value = null, a.onChange = this._handleChange, n(a, this.state.initialValue)
                },
                componentDidUpdate: function() {
                    var a = f.getValue(this);
                    if(null != a) {
                        var b = this.getDOMNode();
                        e.setValueForProperty(b, "value", "" + a)
                    }
                },
                _handleChange: function(a) {
                    var b, d = f.getOnChange(this);
                    return d && (b = d.call(this, a)), k.asap(c, this), b
                }
            });
        b.exports = o
    }, {
        "./AutoFocusMixin": 13,
        "./DOMPropertyOperations": 23,
        "./LinkedValueUtils": 35,
        "./Object.assign": 38,
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64,
        "./ReactUpdates": 91,
        "./invariant": 138,
        "./warning": 157
    }
],
60: [
    function(a, b) {
        "use strict";

        function c() {
            this.reinitializeTransaction()
        }
        var d = a("./ReactUpdates"),
            e = a("./Transaction"),
            f = a("./Object.assign"),
            g = a("./emptyFunction"),
            h = {
                initialize: g,
                close: function() {
                    l.isBatchingUpdates = !1
                }
            }, i = {
                initialize: g,
                close: d.flushBatchedUpdates.bind(d)
            }, j = [i, h];
        f(c.prototype, e.Mixin, {
            getTransactionWrappers: function() {
                return j
            }
        });
        var k = new c,
            l = {
                isBatchingUpdates: !1,
                batchedUpdates: function(a, b, c) {
                    var d = l.isBatchingUpdates;
                    l.isBatchingUpdates = !0, d ? a(b, c) : k.perform(a, null, b, c)
                }
            };
        b.exports = l
    }, {
        "./Object.assign": 38,
        "./ReactUpdates": 91,
        "./Transaction": 107,
        "./emptyFunction": 119
    }
],
61: [
    function(a, b) {
        "use strict";

        function c() {
            y.EventEmitter.injectReactEventListener(x), y.EventPluginHub.injectEventPluginOrder(h), y.EventPluginHub.injectInstanceHandle(z), y.EventPluginHub.injectMount(A), y.EventPluginHub.injectEventPluginsByName({
                SimpleEventPlugin: D,
                EnterLeaveEventPlugin: i,
                ChangeEventPlugin: e,
                CompositionEventPlugin: g,
                MobileSafariClickEventPlugin: l,
                SelectEventPlugin: B,
                BeforeInputEventPlugin: d
            }), y.NativeComponent.injectGenericComponentClass(p), y.NativeComponent.injectComponentClasses({
                button: q,
                form: r,
                img: s,
                input: t,
                option: u,
                select: v,
                textarea: w,
                html: F("html"),
                head: F("head"),
                body: F("body")
            }), y.CompositeComponent.injectMixin(m), y.DOMProperty.injectDOMPropertyConfig(k), y.DOMProperty.injectDOMPropertyConfig(E), y.EmptyComponent.injectEmptyComponent("noscript"), y.Updates.injectReconcileTransaction(n.ReactReconcileTransaction), y.Updates.injectBatchingStrategy(o), y.RootIndex.injectCreateReactRootIndex(j.canUseDOM ? f.createReactRootIndex : C.createReactRootIndex), y.Component.injectEnvironment(n)
        }
        var d = a("./BeforeInputEventPlugin"),
            e = a("./ChangeEventPlugin"),
            f = a("./ClientReactRootIndex"),
            g = a("./CompositionEventPlugin"),
            h = a("./DefaultEventPluginOrder"),
            i = a("./EnterLeaveEventPlugin"),
            j = a("./ExecutionEnvironment"),
            k = a("./HTMLDOMPropertyConfig"),
            l = a("./MobileSafariClickEventPlugin"),
            m = a("./ReactBrowserComponentMixin"),
            n = a("./ReactComponentBrowserEnvironment"),
            o = a("./ReactDefaultBatchingStrategy"),
            p = a("./ReactDOMComponent"),
            q = a("./ReactDOMButton"),
            r = a("./ReactDOMForm"),
            s = a("./ReactDOMImg"),
            t = a("./ReactDOMInput"),
            u = a("./ReactDOMOption"),
            v = a("./ReactDOMSelect"),
            w = a("./ReactDOMTextarea"),
            x = a("./ReactEventListener"),
            y = a("./ReactInjection"),
            z = a("./ReactInstanceHandles"),
            A = a("./ReactMount"),
            B = a("./SelectEventPlugin"),
            C = a("./ServerReactRootIndex"),
            D = a("./SimpleEventPlugin"),
            E = a("./SVGDOMPropertyConfig"),
            F = a("./createFullPageComponent");
        b.exports = {
            inject: c
        }
    }, {
        "./BeforeInputEventPlugin": 14,
        "./ChangeEventPlugin": 18,
        "./ClientReactRootIndex": 19,
        "./CompositionEventPlugin": 20,
        "./DefaultEventPluginOrder": 25,
        "./EnterLeaveEventPlugin": 26,
        "./ExecutionEnvironment": 33,
        "./HTMLDOMPropertyConfig": 34,
        "./MobileSafariClickEventPlugin": 37,
        "./ReactBrowserComponentMixin": 41,
        "./ReactComponentBrowserEnvironment": 45,
        "./ReactDOMButton": 50,
        "./ReactDOMComponent": 51,
        "./ReactDOMForm": 52,
        "./ReactDOMImg": 54,
        "./ReactDOMInput": 55,
        "./ReactDOMOption": 56,
        "./ReactDOMSelect": 57,
        "./ReactDOMTextarea": 59,
        "./ReactDefaultBatchingStrategy": 60,
        "./ReactDefaultPerf": 62,
        "./ReactEventListener": 69,
        "./ReactInjection": 70,
        "./ReactInstanceHandles": 72,
        "./ReactMount": 75,
        "./SVGDOMPropertyConfig": 92,
        "./SelectEventPlugin": 93,
        "./ServerReactRootIndex": 94,
        "./SimpleEventPlugin": 95,
        "./createFullPageComponent": 115
    }
],
62: [
    function(a, b) {
        "use strict";

        function c(a) {
            return Math.floor(100 * a) / 100
        }

        function d(a, b, c) {
            a[b] = (a[b] || 0) + c
        }
        var e = a("./DOMProperty"),
            f = a("./ReactDefaultPerfAnalysis"),
            g = a("./ReactMount"),
            h = a("./ReactPerf"),
            i = a("./performanceNow"),
            j = {
                _allMeasurements: [],
                _mountStack: [0],
                _injected: !1,
                start: function() {
                    j._injected || h.injection.injectMeasure(j.measure), j._allMeasurements.length = 0, h.enableMeasure = !0
                },
                stop: function() {
                    h.enableMeasure = !1
                },
                getLastMeasurements: function() {
                    return j._allMeasurements
                },
                printExclusive: function(a) {
                    a = a || j._allMeasurements;
                    var b = f.getExclusiveSummary(a);
                    console.table(b.map(function(a) {
                        return {
                            "Component class name": a.componentName,
                            "Total inclusive time (ms)": c(a.inclusive),
                            "Exclusive mount time (ms)": c(a.exclusive),
                            "Exclusive render time (ms)": c(a.render),
                            "Mount time per instance (ms)": c(a.exclusive / a.count),
                            "Render time per instance (ms)": c(a.render / a.count),
                            Instances: a.count
                        }
                    }))
                },
                printInclusive: function(a) {
                    a = a || j._allMeasurements;
                    var b = f.getInclusiveSummary(a);
                    console.table(b.map(function(a) {
                        return {
                            "Owner > component": a.componentName,
                            "Inclusive time (ms)": c(a.time),
                            Instances: a.count
                        }
                    })), console.log("Total time:", f.getTotalTime(a).toFixed(2) + " ms")
                },
                getMeasurementsSummaryMap: function(a) {
                    var b = f.getInclusiveSummary(a, !0);
                    return b.map(function(a) {
                        return {
                            "Owner > component": a.componentName,
                            "Wasted time (ms)": a.time,
                            Instances: a.count
                        }
                    })
                },
                printWasted: function(a) {
                    a = a || j._allMeasurements, console.table(j.getMeasurementsSummaryMap(a)), console.log("Total time:", f.getTotalTime(a).toFixed(2) + " ms")
                },
                printDOM: function(a) {
                    a = a || j._allMeasurements;
                    var b = f.getDOMSummary(a);
                    console.table(b.map(function(a) {
                        var b = {};
                        return b[e.ID_ATTRIBUTE_NAME] = a.id, b.type = a.type, b.args = JSON.stringify(a.args), b
                    })), console.log("Total time:", f.getTotalTime(a).toFixed(2) + " ms")
                },
                _recordWrite: function(a, b, c, d) {
                    var e = j._allMeasurements[j._allMeasurements.length - 1].writes;
                    e[a] = e[a] || [], e[a].push({
                        type: b,
                        time: c,
                        args: d
                    })
                },
                measure: function(a, b, c) {
                    return function() {
                        for(var e = [], f = 0, h = arguments.length; h > f; f++) e.push(arguments[f]);
                        var k, l, m;
                        if("_renderNewRootComponent" === b || "flushBatchedUpdates" === b) return j._allMeasurements.push({
                            exclusive: {},
                            inclusive: {},
                            render: {},
                            counts: {},
                            writes: {},
                            displayNames: {},
                            totalTime: 0
                        }), m = i(), l = c.apply(this, e), j._allMeasurements[j._allMeasurements.length - 1].totalTime = i() - m, l;
                        if("ReactDOMIDOperations" === a || "ReactComponentBrowserEnvironment" === a) {
                            if(m = i(), l = c.apply(this, e), k = i() - m, "mountImageIntoNode" === b) {
                                var n = g.getID(e[1]);
                                j._recordWrite(n, b, k, e[0])
                            } else "dangerouslyProcessChildrenUpdates" === b ? e[0].forEach(function(a) {
                                var b = {};
                                null !== a.fromIndex && (b.fromIndex = a.fromIndex), null !== a.toIndex && (b.toIndex = a.toIndex), null !== a.textContent && (b.textContent = a.textContent), null !== a.markupIndex && (b.markup = e[1][a.markupIndex]), j._recordWrite(a.parentID, a.type, k, b)
                            }) : j._recordWrite(e[0], b, k, Array.prototype.slice.call(e, 1));
                            return l
                        }
                        if("ReactCompositeComponent" !== a || "mountComponent" !== b && "updateComponent" !== b && "_renderValidatedComponent" !== b) return c.apply(this, e);
                        var o = "mountComponent" === b ? e[0] : this._rootNodeID,
                            p = "_renderValidatedComponent" === b,
                            q = "mountComponent" === b,
                            r = j._mountStack,
                            s = j._allMeasurements[j._allMeasurements.length - 1];
                        if(p ? d(s.counts, o, 1) : q && r.push(0), m = i(), l = c.apply(this, e), k = i() - m, p) d(s.render, o, k);
                        else if(q) {
                            var t = r.pop();
                            r[r.length - 1] += k, d(s.exclusive, o, k - t), d(s.inclusive, o, k)
                        } else d(s.inclusive, o, k);
                        return s.displayNames[o] = {
                            current: this.constructor.displayName,
                            owner: this._owner ? this._owner.constructor.displayName : "<root>"
                        }, l
                    }
                }
            };
        b.exports = j
    }, {
        "./DOMProperty": 22,
        "./ReactDefaultPerfAnalysis": 63,
        "./ReactMount": 75,
        "./ReactPerf": 80,
        "./performanceNow": 151
    }
],
63: [
    function(a, b) {
        function c(a) {
            for(var b = 0, c = 0; c < a.length; c++) {
                var d = a[c];
                b += d.totalTime
            }
            return b
        }

        function d(a) {
            for(var b = [], c = 0; c < a.length; c++) {
                var d, e = a[c];
                for(d in e.writes) e.writes[d].forEach(function(a) {
                    b.push({
                        id: d,
                        type: j[a.type] || a.type,
                        args: a.args
                    })
                })
            }
            return b
        }

        function e(a) {
            for(var b, c = {}, d = 0; d < a.length; d++) {
                var e = a[d],
                    f = h({}, e.exclusive, e.inclusive);
                for(var g in f) b = e.displayNames[g].current, c[b] = c[b] || {
                    componentName: b,
                    inclusive: 0,
                    exclusive: 0,
                    render: 0,
                    count: 0
                }, e.render[g] && (c[b].render += e.render[g]), e.exclusive[g] && (c[b].exclusive += e.exclusive[g]), e.inclusive[g] && (c[b].inclusive += e.inclusive[g]), e.counts[g] && (c[b].count += e.counts[g])
            }
            var j = [];
            for(b in c) c[b].exclusive >= i && j.push(c[b]);
            return j.sort(function(a, b) {
                return b.exclusive - a.exclusive
            }), j
        }

        function f(a, b) {
            for(var c, d = {}, e = 0; e < a.length; e++) {
                var f, j = a[e],
                    k = h({}, j.exclusive, j.inclusive);
                b && (f = g(j));
                for(var l in k)
                    if(!b || f[l]) {
                        var m = j.displayNames[l];
                        c = m.owner + " > " + m.current, d[c] = d[c] || {
                            componentName: c,
                            time: 0,
                            count: 0
                        }, j.inclusive[l] && (d[c].time += j.inclusive[l]), j.counts[l] && (d[c].count += j.counts[l])
                    }
            }
            var n = [];
            for(c in d) d[c].time >= i && n.push(d[c]);
            return n.sort(function(a, b) {
                return b.time - a.time
            }), n
        }

        function g(a) {
            var b = {}, c = Object.keys(a.writes),
                d = h({}, a.exclusive, a.inclusive);
            for(var e in d) {
                for(var f = !1, g = 0; g < c.length; g++)
                    if(0 === c[g].indexOf(e)) {
                        f = !0;
                        break
                    }!f && a.counts[e] > 0 && (b[e] = !0)
            }
            return b
        }
        var h = a("./Object.assign"),
            i = 1.2,
            j = {
                mountImageIntoNode: "set innerHTML",
                INSERT_MARKUP: "set innerHTML",
                MOVE_EXISTING: "move",
                REMOVE_NODE: "remove",
                TEXT_CONTENT: "set textContent",
                updatePropertyByID: "update attribute",
                deletePropertyByID: "delete attribute",
                updateStylesByID: "update styles",
                updateInnerHTMLByID: "set innerHTML",
                dangerouslyReplaceNodeWithMarkupByID: "replace"
            }, k = {
                getExclusiveSummary: e,
                getInclusiveSummary: f,
                getDOMSummary: d,
                getTotalTime: c
            };
        b.exports = k
    }, {
        "./Object.assign": 38
    }
],
64: [
    function(a, b) {
        "use strict";
        var c = a("./ReactContext"),
            d = a("./ReactCurrentOwner"),
            e = (a("./warning"), {
                key: !0,
                ref: !0
            }),
            f = function(a, b, c, d, e, f) {
                this.type = a, this.key = b, this.ref = c, this._owner = d, this._context = e, this.props = f
            };
        f.prototype = {
            _isReactElement: !0
        }, f.createElement = function(a, b, g) {
            var h, i = {}, j = null,
                k = null;
            if(null != b) {
                k = void 0 === b.ref ? null : b.ref, j = null == b.key ? null : "" + b.key;
                for(h in b) b.hasOwnProperty(h) && !e.hasOwnProperty(h) && (i[h] = b[h])
            }
            var l = arguments.length - 2;
            if(1 === l) i.children = g;
            else if(l > 1) {
                for(var m = Array(l), n = 0; l > n; n++) m[n] = arguments[n + 2];
                i.children = m
            }
            if(a.defaultProps) {
                var o = a.defaultProps;
                for(h in o) "undefined" == typeof i[h] && (i[h] = o[h])
            }
            return new f(a, j, k, d.current, c.current, i)
        }, f.createFactory = function(a) {
            var b = f.createElement.bind(null, a);
            return b.type = a, b
        }, f.cloneAndReplaceProps = function(a, b) {
            var c = new f(a.type, a.key, a.ref, a._owner, a._context, b);
            return c
        }, f.isValidElement = function(a) {
            var b = !(!a || !a._isReactElement);
            return b
        }, b.exports = f
    }, {
        "./ReactContext": 47,
        "./ReactCurrentOwner": 48,
        "./warning": 157
    }
],
65: [
    function(a, b) {
        "use strict";

        function c() {
            var a = l.current;
            return a && a.constructor.displayName || void 0
        }

        function d(a, b) {
            a._store.validated || null != a.key || (a._store.validated = !0, f("react_key_warning", 'Each child in an array should have a unique "key" prop.', a, b))
        }

        function e(a, b, c) {
            q.test(a) && f("react_numeric_key_warning", "Child objects should have non-numeric keys so ordering is preserved.", b, c)
        }

        function f(a, b, d, e) {
            var f = c(),
                g = e.displayName,
                h = f || g,
                i = n[a];
            if(!i.hasOwnProperty(h)) {
                i[h] = !0, b += f ? " Check the render method of " + f + "." : " Check the renderComponent call using <" + g + ">.";
                var j = null;
                d._owner && d._owner !== l.current && (j = d._owner.constructor.displayName, b += " It was passed a child from " + j + "."), b += " See http://fb.me/react-warning-keys for more information.", m(a, {
                    component: h,
                    componentOwner: j
                }), console.warn(b)
            }
        }

        function g() {
            var a = c() || "";
            o.hasOwnProperty(a) || (o[a] = !0, m("react_object_map_children"))
        }

        function h(a, b) {
            if(Array.isArray(a))
                for(var c = 0; c < a.length; c++) {
                    var f = a[c];
                    j.isValidElement(f) && d(f, b)
                } else if(j.isValidElement(a)) a._store.validated = !0;
                else if(a && "object" == typeof a) {
                g();
                for(var h in a) e(h, a[h], b)
            }
        }

        function i(a, b, c, d) {
            for(var e in b)
                if(b.hasOwnProperty(e)) {
                    var f;
                    try {
                        f = b[e](c, e, a, d)
                    } catch(g) {
                        f = g
                    }
                    f instanceof Error && !(f.message in p) && (p[f.message] = !0, m("react_failed_descriptor_type_check", {
                        message: f.message
                    }))
                }
        }
        var j = a("./ReactElement"),
            k = a("./ReactPropTypeLocations"),
            l = a("./ReactCurrentOwner"),
            m = a("./monitorCodeUse"),
            n = {
                react_key_warning: {},
                react_numeric_key_warning: {}
            }, o = {}, p = {}, q = /^\d+$/,
            r = {
                createElement: function(a) {
                    var b = j.createElement.apply(this, arguments);
                    if(null == b) return b;
                    for(var c = 2; c < arguments.length; c++) h(arguments[c], a);
                    var d = a.displayName;
                    return a.propTypes && i(d, a.propTypes, b.props, k.prop), a.contextTypes && i(d, a.contextTypes, b._context, k.context), b
                },
                createFactory: function(a) {
                    var b = r.createElement.bind(null, a);
                    return b.type = a, b
                }
            };
        b.exports = r
    }, {
        "./ReactCurrentOwner": 48,
        "./ReactElement": 64,
        "./ReactPropTypeLocations": 83,
        "./monitorCodeUse": 148
    }
],
66: [
    function(a, b) {
        "use strict";

        function c() {
            return i(g), g()
        }

        function d(a) {
            j[a] = !0
        }

        function e(a) {
            delete j[a]
        }

        function f(a) {
            return j[a]
        }
        var g, h = a("./ReactElement"),
            i = a("./invariant"),
            j = {}, k = {
                injectEmptyComponent: function(a) {
                    g = h.createFactory(a)
                }
            }, l = {
                deregisterNullComponentID: e,
                getEmptyComponent: c,
                injection: k,
                isNullComponentID: f,
                registerNullComponentID: d
            };
        b.exports = l
    }, {
        "./ReactElement": 64,
        "./invariant": 138
    }
],
67: [
    function(a, b) {
        "use strict";
        var c = {
            guard: function(a) {
                return a
            }
        };
        b.exports = c
    }, {}
],
68: [
    function(a, b) {
        "use strict";

        function c(a) {
            d.enqueueEvents(a), d.processEventQueue()
        }
        var d = a("./EventPluginHub"),
            e = {
                handleTopLevel: function(a, b, e, f) {
                    var g = d.extractEvents(a, b, e, f);
                    c(g)
                }
            };
        b.exports = e
    }, {
        "./EventPluginHub": 29
    }
],
69: [
    function(a, b) {
        "use strict";

        function c(a) {
            var b = k.getID(a),
                c = j.getReactRootIDFromNodeID(b),
                d = k.findReactContainerForID(c),
                e = k.getFirstReactDOM(d);
            return e
        }

        function d(a, b) {
            this.topLevelType = a, this.nativeEvent = b, this.ancestors = []
        }

        function e(a) {
            for(var b = k.getFirstReactDOM(n(a.nativeEvent)) || window, d = b; d;) a.ancestors.push(d), d = c(d);
            for(var e = 0, f = a.ancestors.length; f > e; e++) {
                b = a.ancestors[e];
                var g = k.getID(b) || "";
                p._handleTopLevel(a.topLevelType, b, g, a.nativeEvent)
            }
        }

        function f(a) {
            var b = o(window);
            a(b)
        }
        var g = a("./EventListener"),
            h = a("./ExecutionEnvironment"),
            i = a("./PooledClass"),
            j = a("./ReactInstanceHandles"),
            k = a("./ReactMount"),
            l = a("./ReactUpdates"),
            m = a("./Object.assign"),
            n = a("./getEventTarget"),
            o = a("./getUnboundedScrollPosition");
        m(d.prototype, {
            destructor: function() {
                this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
            }
        }), i.addPoolingTo(d, i.twoArgumentPooler);
        var p = {
            _enabled: !0,
            _handleTopLevel: null,
            WINDOW_HANDLE: h.canUseDOM ? window : null,
            setHandleTopLevel: function(a) {
                p._handleTopLevel = a
            },
            setEnabled: function(a) {
                p._enabled = !! a
            },
            isEnabled: function() {
                return p._enabled
            },
            trapBubbledEvent: function(a, b, c) {
                var d = c;
                if(d) return g.listen(d, b, p.dispatchEvent.bind(null, a))
            },
            trapCapturedEvent: function(a, b, c) {
                var d = c;
                if(d) return g.capture(d, b, p.dispatchEvent.bind(null, a))
            },
            monitorScrollValue: function(a) {
                var b = f.bind(null, a);
                g.listen(window, "scroll", b), g.listen(window, "resize", b)
            },
            dispatchEvent: function(a, b) {
                if(p._enabled) {
                    var c = d.getPooled(a, b);
                    try {
                        l.batchedUpdates(e, c)
                    } finally {
                        d.release(c)
                    }
                }
            }
        };
        b.exports = p
    }, {
        "./EventListener": 28,
        "./ExecutionEnvironment": 33,
        "./Object.assign": 38,
        "./PooledClass": 39,
        "./ReactInstanceHandles": 72,
        "./ReactMount": 75,
        "./ReactUpdates": 91,
        "./getEventTarget": 129,
        "./getUnboundedScrollPosition": 134
    }
],
70: [
    function(a, b) {
        "use strict";
        var c = a("./DOMProperty"),
            d = a("./EventPluginHub"),
            e = a("./ReactComponent"),
            f = a("./ReactCompositeComponent"),
            g = a("./ReactEmptyComponent"),
            h = a("./ReactBrowserEventEmitter"),
            i = a("./ReactNativeComponent"),
            j = a("./ReactPerf"),
            k = a("./ReactRootIndex"),
            l = a("./ReactUpdates"),
            m = {
                Component: e.injection,
                CompositeComponent: f.injection,
                DOMProperty: c.injection,
                EmptyComponent: g.injection,
                EventPluginHub: d.injection,
                EventEmitter: h.injection,
                NativeComponent: i.injection,
                Perf: j.injection,
                RootIndex: k.injection,
                Updates: l.injection
            };
        b.exports = m
    }, {
        "./DOMProperty": 22,
        "./EventPluginHub": 29,
        "./ReactBrowserEventEmitter": 42,
        "./ReactComponent": 44,
        "./ReactCompositeComponent": 46,
        "./ReactEmptyComponent": 66,
        "./ReactNativeComponent": 78,
        "./ReactPerf": 80,
        "./ReactRootIndex": 87,
        "./ReactUpdates": 91
    }
],
71: [
    function(a, b) {
        "use strict";

        function c(a) {
            return e(document.documentElement, a)
        }
        var d = a("./ReactDOMSelection"),
            e = a("./containsNode"),
            f = a("./focusNode"),
            g = a("./getActiveElement"),
            h = {
                hasSelectionCapabilities: function(a) {
                    return a && ("INPUT" === a.nodeName && "text" === a.type || "TEXTAREA" === a.nodeName || "true" === a.contentEditable)
                },
                getSelectionInformation: function() {
                    var a = g();
                    return {
                        focusedElem: a,
                        selectionRange: h.hasSelectionCapabilities(a) ? h.getSelection(a) : null
                    }
                },
                restoreSelection: function(a) {
                    var b = g(),
                        d = a.focusedElem,
                        e = a.selectionRange;
                    b !== d && c(d) && (h.hasSelectionCapabilities(d) && h.setSelection(d, e), f(d))
                },
                getSelection: function(a) {
                    var b;
                    if("selectionStart" in a) b = {
                        start: a.selectionStart,
                        end: a.selectionEnd
                    };
                    else if(document.selection && "INPUT" === a.nodeName) {
                        var c = document.selection.createRange();
                        c.parentElement() === a && (b = {
                            start: -c.moveStart("character", -a.value.length),
                            end: -c.moveEnd("character", -a.value.length)
                        })
                    } else b = d.getOffsets(a);
                    return b || {
                        start: 0,
                        end: 0
                    }
                },
                setSelection: function(a, b) {
                    var c = b.start,
                        e = b.end;
                    if("undefined" == typeof e && (e = c), "selectionStart" in a) a.selectionStart = c, a.selectionEnd = Math.min(e, a.value.length);
                    else if(document.selection && "INPUT" === a.nodeName) {
                        var f = a.createTextRange();
                        f.collapse(!0), f.moveStart("character", c), f.moveEnd("character", e - c), f.select()
                    } else d.setOffsets(a, b)
                }
            };
        b.exports = h
    }, {
        "./ReactDOMSelection": 58,
        "./containsNode": 113,
        "./focusNode": 123,
        "./getActiveElement": 125
    }
],
72: [
    function(a, b) {
        "use strict";

        function c(a) {
            return m + a.toString(36)
        }

        function d(a, b) {
            return a.charAt(b) === m || b === a.length
        }

        function e(a) {
            return "" === a || a.charAt(0) === m && a.charAt(a.length - 1) !== m
        }

        function f(a, b) {
            return 0 === b.indexOf(a) && d(b, a.length)
        }

        function g(a) {
            return a ? a.substr(0, a.lastIndexOf(m)) : ""
        }

        function h(a, b) {
            if(l(e(a) && e(b)), l(f(a, b)), a === b) return a;
            for(var c = a.length + n, g = c; g < b.length && !d(b, g); g++);
            return b.substr(0, g)
        }

        function i(a, b) {
            var c = Math.min(a.length, b.length);
            if(0 === c) return "";
            for(var f = 0, g = 0; c >= g; g++)
                if(d(a, g) && d(b, g)) f = g;
                else if(a.charAt(g) !== b.charAt(g)) break;
            var h = a.substr(0, f);
            return l(e(h)), h
        }

        function j(a, b, c, d, e, i) {
            a = a || "", b = b || "", l(a !== b);
            var j = f(b, a);
            l(j || f(a, b));
            for(var k = 0, m = j ? g : h, n = a;; n = m(n, b)) {
                var p;
                if(e && n === a || i && n === b || (p = c(n, j, d)), p === !1 || n === b) break;
                l(k++ < o)
            }
        }
        var k = a("./ReactRootIndex"),
            l = a("./invariant"),
            m = ".",
            n = m.length,
            o = 100,
            p = {
                createReactRootID: function() {
                    return c(k.createReactRootIndex())
                },
                createReactID: function(a, b) {
                    return a + b
                },
                getReactRootIDFromNodeID: function(a) {
                    if(a && a.charAt(0) === m && a.length > 1) {
                        var b = a.indexOf(m, 1);
                        return b > -1 ? a.substr(0, b) : a
                    }
                    return null
                },
                traverseEnterLeave: function(a, b, c, d, e) {
                    var f = i(a, b);
                    f !== a && j(a, f, c, d, !1, !0), f !== b && j(f, b, c, e, !0, !1)
                },
                traverseTwoPhase: function(a, b, c) {
                    a && (j("", a, b, c, !0, !1), j(a, "", b, c, !1, !0))
                },
                traverseAncestors: function(a, b, c) {
                    j("", a, b, c, !0, !1)
                },
                _getFirstCommonAncestorID: i,
                _getNextDescendantID: h,
                isAncestorIDOf: f,
                SEPARATOR: m
            };
        b.exports = p
    }, {
        "./ReactRootIndex": 87,
        "./invariant": 138
    }
],
73: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            if("function" == typeof b)
                for(var c in b)
                    if(b.hasOwnProperty(c)) {
                        var d = b[c];
                        if("function" == typeof d) {
                            var e = d.bind(b);
                            for(var f in d) d.hasOwnProperty(f) && (e[f] = d[f]);
                            a[c] = e
                        } else a[c] = d
                    }
        }
        var d = (a("./ReactCurrentOwner"), a("./invariant")),
            e = (a("./monitorCodeUse"), a("./warning"), {}),
            f = {}, g = {};
        g.wrapCreateFactory = function(a) {
            var b = function(b) {
                return "function" != typeof b ? a(b) : b.isReactNonLegacyFactory ? a(b.type) : b.isReactLegacyFactory ? a(b.type) : b
            };
            return b
        }, g.wrapCreateElement = function(a) {
            var b = function(b) {
                if("function" != typeof b) return a.apply(this, arguments);
                var c;
                return b.isReactNonLegacyFactory ? (c = Array.prototype.slice.call(arguments, 0), c[0] = b.type, a.apply(this, c)) : b.isReactLegacyFactory ? (b._isMockFunction && (b.type._mockedReactClassConstructor = b), c = Array.prototype.slice.call(arguments, 0), c[0] = b.type, a.apply(this, c)) : b.apply(null, Array.prototype.slice.call(arguments, 1))
            };
            return b
        }, g.wrapFactory = function(a) {
            d("function" == typeof a);
            var b = function() {
                return a.apply(this, arguments)
            };
            return c(b, a.type), b.isReactLegacyFactory = e, b.type = a.type, b
        }, g.markNonLegacyFactory = function(a) {
            return a.isReactNonLegacyFactory = f, a
        }, g.isValidFactory = function(a) {
            return "function" == typeof a && a.isReactLegacyFactory === e
        }, g.isValidClass = function(a) {
            return g.isValidFactory(a)
        }, g._isLegacyCallWarningEnabled = !0, b.exports = g
    }, {
        "./ReactCurrentOwner": 48,
        "./invariant": 138,
        "./monitorCodeUse": 148,
        "./warning": 157
    }
],
74: [
    function(a, b) {
        "use strict";
        var c = a("./adler32"),
            d = {
                CHECKSUM_ATTR_NAME: "data-react-checksum",
                addChecksumToMarkup: function(a) {
                    var b = c(a);
                    return a.replace(">", " " + d.CHECKSUM_ATTR_NAME + '="' + b + '">')
                },
                canReuseMarkup: function(a, b) {
                    var e = b.getAttribute(d.CHECKSUM_ATTR_NAME);
                    e = e && parseInt(e, 10);
                    var f = c(a);
                    return f === e
                }
            };
        b.exports = d
    }, {
        "./adler32": 110
    }
],
75: [
    function(a, b) {
        "use strict";

        function c(a) {
            var b = t(a);
            return b && H.getID(b)
        }

        function d(a) {
            var b = e(a);
            if(b)
                if(A.hasOwnProperty(b)) {
                    var c = A[b];
                    c !== a && (v(!h(c, b)), A[b] = a)
                } else A[b] = a;
            return b
        }

        function e(a) {
            return a && a.getAttribute && a.getAttribute(z) || ""
        }

        function f(a, b) {
            var c = e(a);
            c !== b && delete A[c], a.setAttribute(z, b), A[b] = a
        }

        function g(a) {
            return A.hasOwnProperty(a) && h(A[a], a) || (A[a] = H.findReactNodeByID(a)), A[a]
        }

        function h(a, b) {
            if(a) {
                v(e(a) === b);
                var c = H.findReactContainerForID(b);
                if(c && r(c, a)) return !0
            }
            return !1
        }

        function i(a) {
            delete A[a]
        }

        function j(a) {
            var b = A[a];
            return b && h(b, a) ? void(G = b) : !1
        }

        function k(a) {
            G = null, p.traverseAncestors(a, j);
            var b = G;
            return G = null, b
        }
        var l = a("./DOMProperty"),
            m = a("./ReactBrowserEventEmitter"),
            n = (a("./ReactCurrentOwner"), a("./ReactElement")),
            o = a("./ReactLegacyElement"),
            p = a("./ReactInstanceHandles"),
            q = a("./ReactPerf"),
            r = a("./containsNode"),
            s = a("./deprecated"),
            t = a("./getReactRootElementInContainer"),
            u = a("./instantiateReactComponent"),
            v = a("./invariant"),
            w = a("./shouldUpdateReactComponent"),
            x = (a("./warning"), o.wrapCreateElement(n.createElement)),
            y = p.SEPARATOR,
            z = l.ID_ATTRIBUTE_NAME,
            A = {}, B = 1,
            C = 9,
            D = {}, E = {}, F = [],
            G = null,
            H = {
                _instancesByReactRootID: D,
                scrollMonitor: function(a, b) {
                    b()
                },
                _updateRootComponent: function(a, b, c, d) {
                    var e = b.props;
                    return H.scrollMonitor(c, function() {
                        a.replaceProps(e, d)
                    }), a
                },
                _registerComponent: function(a, b) {
                    v(b && (b.nodeType === B || b.nodeType === C)), m.ensureScrollValueMonitoring();
                    var c = H.registerContainer(b);
                    return D[c] = a, c
                },
                _renderNewRootComponent: q.measure("ReactMount", "_renderNewRootComponent", function(a, b, c) {
                    var d = u(a, null),
                        e = H._registerComponent(d, b);
                    return d.mountComponentIntoNode(e, b, c), d
                }),
                render: function(a, b, d) {
                    v(n.isValidElement(a));
                    var e = D[c(b)];
                    if(e) {
                        var f = e._currentElement;
                        if(w(f, a)) return H._updateRootComponent(e, a, b, d);
                        H.unmountComponentAtNode(b)
                    }
                    var g = t(b),
                        h = g && H.isRenderedByReact(g),
                        i = h && !e,
                        j = H._renderNewRootComponent(a, b, i);
                    return d && d.call(j), j
                },
                constructAndRenderComponent: function(a, b, c) {
                    var d = x(a, b);
                    return H.render(d, c)
                },
                constructAndRenderComponentByID: function(a, b, c) {
                    var d = document.getElementById(c);
                    return v(d), H.constructAndRenderComponent(a, b, d)
                },
                registerContainer: function(a) {
                    var b = c(a);
                    return b && (b = p.getReactRootIDFromNodeID(b)), b || (b = p.createReactRootID()), E[b] = a, b
                },
                unmountComponentAtNode: function(a) {
                    var b = c(a),
                        d = D[b];
                    return d ? (H.unmountComponentFromNode(d, a), delete D[b], delete E[b], !0) : !1
                },
                unmountComponentFromNode: function(a, b) {
                    for(a.unmountComponent(), b.nodeType === C && (b = b.documentElement); b.lastChild;) b.removeChild(b.lastChild)
                },
                findReactContainerForID: function(a) {
                    var b = p.getReactRootIDFromNodeID(a),
                        c = E[b];
                    return c
                },
                findReactNodeByID: function(a) {
                    var b = H.findReactContainerForID(a);
                    return H.findComponentRoot(b, a)
                },
                isRenderedByReact: function(a) {
                    if(1 !== a.nodeType) return !1;
                    var b = H.getID(a);
                    return b ? b.charAt(0) === y : !1
                },
                getFirstReactDOM: function(a) {
                    for(var b = a; b && b.parentNode !== b;) {
                        if(H.isRenderedByReact(b)) return b;
                        b = b.parentNode
                    }
                    return null
                },
                findComponentRoot: function(a, b) {
                    var c = F,
                        d = 0,
                        e = k(b) || a;
                    for(c[0] = e.firstChild, c.length = 1; d < c.length;) {
                        for(var f, g = c[d++]; g;) {
                            var h = H.getID(g);
                            h ? b === h ? f = g : p.isAncestorIDOf(h, b) && (c.length = d = 0, c.push(g.firstChild)) : c.push(g.firstChild), g = g.nextSibling
                        }
                        if(f) return c.length = 0, f
                    }
                    c.length = 0, v(!1)
                },
                getReactRootID: c,
                getID: d,
                setID: f,
                getNode: g,
                purgeID: i
            };
        H.renderComponent = s("ReactMount", "renderComponent", "render", this, H.render), b.exports = H
    }, {
        "./DOMProperty": 22,
        "./ReactBrowserEventEmitter": 42,
        "./ReactCurrentOwner": 48,
        "./ReactElement": 64,
        "./ReactInstanceHandles": 72,
        "./ReactLegacyElement": 73,
        "./ReactPerf": 80,
        "./containsNode": 113,
        "./deprecated": 118,
        "./getReactRootElementInContainer": 132,
        "./instantiateReactComponent": 137,
        "./invariant": 138,
        "./shouldUpdateReactComponent": 154,
        "./warning": 157
    }
],
76: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            o.push({
                parentID: a,
                parentNode: null,
                type: j.INSERT_MARKUP,
                markupIndex: p.push(b) - 1,
                textContent: null,
                fromIndex: null,
                toIndex: c
            })
        }

        function d(a, b, c) {
            o.push({
                parentID: a,
                parentNode: null,
                type: j.MOVE_EXISTING,
                markupIndex: null,
                textContent: null,
                fromIndex: b,
                toIndex: c
            })
        }

        function e(a, b) {
            o.push({
                parentID: a,
                parentNode: null,
                type: j.REMOVE_NODE,
                markupIndex: null,
                textContent: null,
                fromIndex: b,
                toIndex: null
            })
        }

        function f(a, b) {
            o.push({
                parentID: a,
                parentNode: null,
                type: j.TEXT_CONTENT,
                markupIndex: null,
                textContent: b,
                fromIndex: null,
                toIndex: null
            })
        }

        function g() {
            o.length && (i.BackendIDOperations.dangerouslyProcessChildrenUpdates(o, p), h())
        }

        function h() {
            o.length = 0, p.length = 0
        }
        var i = a("./ReactComponent"),
            j = a("./ReactMultiChildUpdateTypes"),
            k = a("./flattenChildren"),
            l = a("./instantiateReactComponent"),
            m = a("./shouldUpdateReactComponent"),
            n = 0,
            o = [],
            p = [],
            q = {
                Mixin: {
                    mountChildren: function(a, b) {
                        var c = k(a),
                            d = [],
                            e = 0;
                        this._renderedChildren = c;
                        for(var f in c) {
                            var g = c[f];
                            if(c.hasOwnProperty(f)) {
                                var h = l(g, null);
                                c[f] = h;
                                var i = this._rootNodeID + f,
                                    j = h.mountComponent(i, b, this._mountDepth + 1);
                                h._mountIndex = e, d.push(j), e++
                            }
                        }
                        return d
                    },
                    updateTextContent: function(a) {
                        n++;
                        var b = !0;
                        try {
                            var c = this._renderedChildren;
                            for(var d in c) c.hasOwnProperty(d) && this._unmountChildByName(c[d], d);
                            this.setTextContent(a), b = !1
                        } finally {
                            n--, n || (b ? h() : g())
                        }
                    },
                    updateChildren: function(a, b) {
                        n++;
                        var c = !0;
                        try {
                            this._updateChildren(a, b), c = !1
                        } finally {
                            n--, n || (c ? h() : g())
                        }
                    },
                    _updateChildren: function(a, b) {
                        var c = k(a),
                            d = this._renderedChildren;
                        if(c || d) {
                            var e, f = 0,
                                g = 0;
                            for(e in c)
                                if(c.hasOwnProperty(e)) {
                                    var h = d && d[e],
                                        i = h && h._currentElement,
                                        j = c[e];
                                    if(m(i, j)) this.moveChild(h, g, f), f = Math.max(h._mountIndex, f), h.receiveComponent(j, b), h._mountIndex = g;
                                    else {
                                        h && (f = Math.max(h._mountIndex, f), this._unmountChildByName(h, e));
                                        var n = l(j, null);
                                        this._mountChildByNameAtIndex(n, e, g, b)
                                    }
                                    g++
                                }
                            for(e in d)!d.hasOwnProperty(e) || c && c[e] || this._unmountChildByName(d[e], e)
                        }
                    },
                    unmountChildren: function() {
                        var a = this._renderedChildren;
                        for(var b in a) {
                            var c = a[b];
                            c.unmountComponent && c.unmountComponent()
                        }
                        this._renderedChildren = null
                    },
                    moveChild: function(a, b, c) {
                        a._mountIndex < c && d(this._rootNodeID, a._mountIndex, b)
                    },
                    createChild: function(a, b) {
                        c(this._rootNodeID, b, a._mountIndex)
                    },
                    removeChild: function(a) {
                        e(this._rootNodeID, a._mountIndex)
                    },
                    setTextContent: function(a) {
                        f(this._rootNodeID, a)
                    },
                    _mountChildByNameAtIndex: function(a, b, c, d) {
                        var e = this._rootNodeID + b,
                            f = a.mountComponent(e, d, this._mountDepth + 1);
                        a._mountIndex = c, this.createChild(a, f), this._renderedChildren = this._renderedChildren || {}, this._renderedChildren[b] = a
                    },
                    _unmountChildByName: function(a, b) {
                        this.removeChild(a), a._mountIndex = null, a.unmountComponent(), delete this._renderedChildren[b]
                    }
                }
            };
        b.exports = q
    }, {
        "./ReactComponent": 44,
        "./ReactMultiChildUpdateTypes": 77,
        "./flattenChildren": 122,
        "./instantiateReactComponent": 137,
        "./shouldUpdateReactComponent": 154
    }
],
77: [
    function(a, b) {
        "use strict";
        var c = a("./keyMirror"),
            d = c({
                INSERT_MARKUP: null,
                MOVE_EXISTING: null,
                REMOVE_NODE: null,
                TEXT_CONTENT: null
            });
        b.exports = d
    }, {
        "./keyMirror": 144
    }
],
78: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            var d = g[a];
            return null == d ? (e(f), new f(a, b)) : c === a ? (e(f), new f(a, b)) : new d.type(b)
        }
        var d = a("./Object.assign"),
            e = a("./invariant"),
            f = null,
            g = {}, h = {
                injectGenericComponentClass: function(a) {
                    f = a
                },
                injectComponentClasses: function(a) {
                    d(g, a)
                }
            }, i = {
                createInstanceForTag: c,
                injection: h
            };
        b.exports = i
    }, {
        "./Object.assign": 38,
        "./invariant": 138
    }
],
79: [
    function(a, b) {
        "use strict";
        var c = a("./emptyObject"),
            d = a("./invariant"),
            e = {
                isValidOwner: function(a) {
                    return !(!a || "function" != typeof a.attachRef || "function" != typeof a.detachRef)
                },
                addComponentAsRefTo: function(a, b, c) {
                    d(e.isValidOwner(c)), c.attachRef(b, a)
                },
                removeComponentAsRefFrom: function(a, b, c) {
                    d(e.isValidOwner(c)), c.refs[b] === a && c.detachRef(b)
                },
                Mixin: {
                    construct: function() {
                        this.refs = c
                    },
                    attachRef: function(a, b) {
                        d(b.isOwnedBy(this));
                        var e = this.refs === c ? this.refs = {} : this.refs;
                        e[a] = b
                    },
                    detachRef: function(a) {
                        delete this.refs[a]
                    }
                }
            };
        b.exports = e
    }, {
        "./emptyObject": 120,
        "./invariant": 138
    }
],
80: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            return c
        }
        var d = {
            enableMeasure: !1,
            storedMeasure: c,
            measure: function(a, b, c) {
                return c
            },
            injection: {
                injectMeasure: function(a) {
                    d.storedMeasure = a
                }
            }
        };
        b.exports = d
    }, {}
],
81: [
    function(a, b) {
        "use strict";

        function c(a) {
            return function(b, c, d) {
                b[c] = b.hasOwnProperty(c) ? a(b[c], d) : d
            }
        }

        function d(a, b) {
            for(var c in b)
                if(b.hasOwnProperty(c)) {
                    var d = j[c];
                    d && j.hasOwnProperty(c) ? d(a, c, b[c]) : a.hasOwnProperty(c) || (a[c] = b[c])
                }
            return a
        }
        var e = a("./Object.assign"),
            f = a("./emptyFunction"),
            g = a("./invariant"),
            h = a("./joinClasses"),
            i = (a("./warning"), c(function(a, b) {
                return e({}, b, a)
            })),
            j = {
                children: f,
                className: c(h),
                style: i
            }, k = {
                TransferStrategies: j,
                mergeProps: function(a, b) {
                    return d(e({}, a), b)
                },
                Mixin: {
                    transferPropsTo: function(a) {
                        return g(a._owner === this), d(a.props, this.props), a
                    }
                }
            };
        b.exports = k
    }, {
        "./Object.assign": 38,
        "./emptyFunction": 119,
        "./invariant": 138,
        "./joinClasses": 143,
        "./warning": 157
    }
],
82: [
    function(a, b) {
        "use strict";
        var c = {};
        b.exports = c
    }, {}
],
83: [
    function(a, b) {
        "use strict";
        var c = a("./keyMirror"),
            d = c({
                prop: null,
                context: null,
                childContext: null
            });
        b.exports = d
    }, {
        "./keyMirror": 144
    }
],
84: [
    function(a, b) {
        "use strict";

        function c(a) {
            function b(b, c, d, e, f) {
                if(e = e || u, null != c[d]) return a(c, d, e, f);
                var g = r[f];
                return b ? new Error("Required " + g + " `" + d + "` was not specified in " + ("`" + e + "`.")) : void 0
            }
            var c = b.bind(null, !1);
            return c.isRequired = b.bind(null, !0), c
        }

        function d(a) {
            function b(b, c, d, e) {
                var f = b[c],
                    g = o(f);
                if(g !== a) {
                    var h = r[e],
                        i = p(f);
                    return new Error("Invalid " + h + " `" + c + "` of type `" + i + "` " + ("supplied to `" + d + "`, expected `" + a + "`."))
                }
            }
            return c(b)
        }

        function e() {
            return c(t.thatReturns())
        }

        function f(a) {
            function b(b, c, d, e) {
                var f = b[c];
                if(!Array.isArray(f)) {
                    var g = r[e],
                        h = o(f);
                    return new Error("Invalid " + g + " `" + c + "` of type " + ("`" + h + "` supplied to `" + d + "`, expected an array."))
                }
                for(var i = 0; i < f.length; i++) {
                    var j = a(f, i, d, e);
                    if(j instanceof Error) return j
                }
            }
            return c(b)
        }

        function g() {
            function a(a, b, c, d) {
                if(!q.isValidElement(a[b])) {
                    var e = r[d];
                    return new Error("Invalid " + e + " `" + b + "` supplied to " + ("`" + c + "`, expected a ReactElement."))
                }
            }
            return c(a)
        }

        function h(a) {
            function b(b, c, d, e) {
                if(!(b[c] instanceof a)) {
                    var f = r[e],
                        g = a.name || u;
                    return new Error("Invalid " + f + " `" + c + "` supplied to " + ("`" + d + "`, expected instance of `" + g + "`."))
                }
            }
            return c(b)
        }

        function i(a) {
            function b(b, c, d, e) {
                for(var f = b[c], g = 0; g < a.length; g++)
                    if(f === a[g]) return;
                var h = r[e],
                    i = JSON.stringify(a);
                return new Error("Invalid " + h + " `" + c + "` of value `" + f + "` " + ("supplied to `" + d + "`, expected one of " + i + "."))
            }
            return c(b)
        }

        function j(a) {
            function b(b, c, d, e) {
                var f = b[c],
                    g = o(f);
                if("object" !== g) {
                    var h = r[e];
                    return new Error("Invalid " + h + " `" + c + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected an object."))
                }
                for(var i in f)
                    if(f.hasOwnProperty(i)) {
                        var j = a(f, i, d, e);
                        if(j instanceof Error) return j
                    }
            }
            return c(b)
        }

        function k(a) {
            function b(b, c, d, e) {
                for(var f = 0; f < a.length; f++) {
                    var g = a[f];
                    if(null == g(b, c, d, e)) return
                }
                var h = r[e];
                return new Error("Invalid " + h + " `" + c + "` supplied to " + ("`" + d + "`."))
            }
            return c(b)
        }

        function l() {
            function a(a, b, c, d) {
                if(!n(a[b])) {
                    var e = r[d];
                    return new Error("Invalid " + e + " `" + b + "` supplied to " + ("`" + c + "`, expected a ReactNode."))
                }
            }
            return c(a)
        }

        function m(a) {
            function b(b, c, d, e) {
                var f = b[c],
                    g = o(f);
                if("object" !== g) {
                    var h = r[e];
                    return new Error("Invalid " + h + " `" + c + "` of type `" + g + "` " + ("supplied to `" + d + "`, expected `object`."))
                }
                for(var i in a) {
                    var j = a[i];
                    if(j) {
                        var k = j(f, i, d, e);
                        if(k) return k
                    }
                }
            }
            return c(b, "expected `object`")
        }

        function n(a) {
            switch(typeof a) {
                case "number":
                case "string":
                    return !0;
                case "boolean":
                    return !a;
                case "object":
                    if(Array.isArray(a)) return a.every(n);
                    if(q.isValidElement(a)) return !0;
                    for(var b in a)
                        if(!n(a[b])) return !1;
                    return !0;
                default:
                    return !1
            }
        }

        function o(a) {
            var b = typeof a;
            return Array.isArray(a) ? "array" : a instanceof RegExp ? "object" : b
        }

        function p(a) {
            var b = o(a);
            if("object" === b) {
                if(a instanceof Date) return "date";
                if(a instanceof RegExp) return "regexp"
            }
            return b
        }
        var q = a("./ReactElement"),
            r = a("./ReactPropTypeLocationNames"),
            s = a("./deprecated"),
            t = a("./emptyFunction"),
            u = "<<anonymous>>",
            v = g(),
            w = l(),
            x = {
                array: d("array"),
                bool: d("boolean"),
                func: d("function"),
                number: d("number"),
                object: d("object"),
                string: d("string"),
                any: e(),
                arrayOf: f,
                element: v,
                instanceOf: h,
                node: w,
                objectOf: j,
                oneOf: i,
                oneOfType: k,
                shape: m,
                component: s("React.PropTypes", "component", "element", this, v),
                renderable: s("React.PropTypes", "renderable", "node", this, w)
            };
        b.exports = x
    }, {
        "./ReactElement": 64,
        "./ReactPropTypeLocationNames": 82,
        "./deprecated": 118,
        "./emptyFunction": 119
    }
],
85: [
    function(a, b) {
        "use strict";

        function c() {
            this.listenersToPut = []
        }
        var d = a("./PooledClass"),
            e = a("./ReactBrowserEventEmitter"),
            f = a("./Object.assign");
        f(c.prototype, {
            enqueuePutListener: function(a, b, c) {
                this.listenersToPut.push({
                    rootNodeID: a,
                    propKey: b,
                    propValue: c
                })
            },
            putListeners: function() {
                for(var a = 0; a < this.listenersToPut.length; a++) {
                    var b = this.listenersToPut[a];
                    e.putListener(b.rootNodeID, b.propKey, b.propValue)
                }
            },
            reset: function() {
                this.listenersToPut.length = 0
            },
            destructor: function() {
                this.reset()
            }
        }), d.addPoolingTo(c), b.exports = c
    }, {
        "./Object.assign": 38,
        "./PooledClass": 39,
        "./ReactBrowserEventEmitter": 42
    }
],
86: [
    function(a, b) {
        "use strict";

        function c() {
            this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = d.getPooled(null), this.putListenerQueue = h.getPooled()
        }
        var d = a("./CallbackQueue"),
            e = a("./PooledClass"),
            f = a("./ReactBrowserEventEmitter"),
            g = a("./ReactInputSelection"),
            h = a("./ReactPutListenerQueue"),
            i = a("./Transaction"),
            j = a("./Object.assign"),
            k = {
                initialize: g.getSelectionInformation,
                close: g.restoreSelection
            }, l = {
                initialize: function() {
                    var a = f.isEnabled();
                    return f.setEnabled(!1), a
                },
                close: function(a) {
                    f.setEnabled(a)
                }
            }, m = {
                initialize: function() {
                    this.reactMountReady.reset()
                },
                close: function() {
                    this.reactMountReady.notifyAll()
                }
            }, n = {
                initialize: function() {
                    this.putListenerQueue.reset()
                },
                close: function() {
                    this.putListenerQueue.putListeners()
                }
            }, o = [n, k, l, m],
            p = {
                getTransactionWrappers: function() {
                    return o
                },
                getReactMountReady: function() {
                    return this.reactMountReady
                },
                getPutListenerQueue: function() {
                    return this.putListenerQueue
                },
                destructor: function() {
                    d.release(this.reactMountReady), this.reactMountReady = null, h.release(this.putListenerQueue), this.putListenerQueue = null
                }
            };
        j(c.prototype, i.Mixin, p), e.addPoolingTo(c), b.exports = c
    }, {
        "./CallbackQueue": 17,
        "./Object.assign": 38,
        "./PooledClass": 39,
        "./ReactBrowserEventEmitter": 42,
        "./ReactInputSelection": 71,
        "./ReactPutListenerQueue": 85,
        "./Transaction": 107
    }
],
87: [
    function(a, b) {
        "use strict";
        var c = {
            injectCreateReactRootIndex: function(a) {
                d.createReactRootIndex = a
            }
        }, d = {
                createReactRootIndex: null,
                injection: c
            };
        b.exports = d
    }, {}
],
88: [
    function(a, b) {
        "use strict";

        function c(a) {
            j(e.isValidElement(a));
            var b;
            try {
                var c = f.createReactRootID();
                return b = h.getPooled(!1), b.perform(function() {
                    var d = i(a, null),
                        e = d.mountComponent(c, b, 0);
                    return g.addChecksumToMarkup(e)
                }, null)
            } finally {
                h.release(b)
            }
        }

        function d(a) {
            j(e.isValidElement(a));
            var b;
            try {
                var c = f.createReactRootID();
                return b = h.getPooled(!0), b.perform(function() {
                    var d = i(a, null);
                    return d.mountComponent(c, b, 0)
                }, null)
            } finally {
                h.release(b)
            }
        }
        var e = a("./ReactElement"),
            f = a("./ReactInstanceHandles"),
            g = a("./ReactMarkupChecksum"),
            h = a("./ReactServerRenderingTransaction"),
            i = a("./instantiateReactComponent"),
            j = a("./invariant");
        b.exports = {
            renderToString: c,
            renderToStaticMarkup: d
        }
    }, {
        "./ReactElement": 64,
        "./ReactInstanceHandles": 72,
        "./ReactMarkupChecksum": 74,
        "./ReactServerRenderingTransaction": 89,
        "./instantiateReactComponent": 137,
        "./invariant": 138
    }
],
89: [
    function(a, b) {
        "use strict";

        function c(a) {
            this.reinitializeTransaction(), this.renderToStaticMarkup = a, this.reactMountReady = e.getPooled(null), this.putListenerQueue = f.getPooled()
        }
        var d = a("./PooledClass"),
            e = a("./CallbackQueue"),
            f = a("./ReactPutListenerQueue"),
            g = a("./Transaction"),
            h = a("./Object.assign"),
            i = a("./emptyFunction"),
            j = {
                initialize: function() {
                    this.reactMountReady.reset()
                },
                close: i
            }, k = {
                initialize: function() {
                    this.putListenerQueue.reset()
                },
                close: i
            }, l = [k, j],
            m = {
                getTransactionWrappers: function() {
                    return l
                },
                getReactMountReady: function() {
                    return this.reactMountReady
                },
                getPutListenerQueue: function() {
                    return this.putListenerQueue
                },
                destructor: function() {
                    e.release(this.reactMountReady), this.reactMountReady = null, f.release(this.putListenerQueue), this.putListenerQueue = null
                }
            };
        h(c.prototype, g.Mixin, m), d.addPoolingTo(c), b.exports = c
    }, {
        "./CallbackQueue": 17,
        "./Object.assign": 38,
        "./PooledClass": 39,
        "./ReactPutListenerQueue": 85,
        "./Transaction": 107,
        "./emptyFunction": 119
    }
],
90: [
    function(a, b) {
        "use strict";
        var c = a("./DOMPropertyOperations"),
            d = a("./ReactComponent"),
            e = a("./ReactElement"),
            f = a("./Object.assign"),
            g = a("./escapeTextForBrowser"),
            h = function() {};
        f(h.prototype, d.Mixin, {
            mountComponent: function(a, b, e) {
                d.Mixin.mountComponent.call(this, a, b, e);
                var f = g(this.props);
                return b.renderToStaticMarkup ? f : "<span " + c.createMarkupForID(a) + ">" + f + "</span>"
            },
            receiveComponent: function(a) {
                var b = a.props;
                b !== this.props && (this.props = b, d.BackendIDOperations.updateTextContentByID(this._rootNodeID, b))
            }
        });
        var i = function(a) {
            return new e(h, null, null, null, null, a)
        };
        i.type = h, b.exports = i
    }, {
        "./DOMPropertyOperations": 23,
        "./Object.assign": 38,
        "./ReactComponent": 44,
        "./ReactElement": 64,
        "./escapeTextForBrowser": 121
    }
],
91: [
    function(a, b) {
        "use strict";

        function c() {
            o(y.ReactReconcileTransaction && s)
        }

        function d() {
            this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = j.getPooled(), this.reconcileTransaction = y.ReactReconcileTransaction.getPooled()
        }

        function e(a, b, d) {
            c(), s.batchedUpdates(a, b, d)
        }

        function f(a, b) {
            return a._mountDepth - b._mountDepth
        }

        function g(a) {
            var b = a.dirtyComponentsLength;
            o(b === p.length), p.sort(f);
            for(var c = 0; b > c; c++) {
                var d = p[c];
                if(d.isMounted()) {
                    var e = d._pendingCallbacks;
                    if(d._pendingCallbacks = null, d.performUpdateIfNecessary(a.reconcileTransaction), e)
                        for(var g = 0; g < e.length; g++) a.callbackQueue.enqueue(e[g], d)
                }
            }
        }

        function h(a, b) {
            return o(!b || "function" == typeof b), c(), s.isBatchingUpdates ? (p.push(a), void(b && (a._pendingCallbacks ? a._pendingCallbacks.push(b) : a._pendingCallbacks = [b]))) : void s.batchedUpdates(h, a, b)
        }

        function i(a, b) {
            o(s.isBatchingUpdates), q.enqueue(a, b), r = !0
        }
        var j = a("./CallbackQueue"),
            k = a("./PooledClass"),
            l = (a("./ReactCurrentOwner"), a("./ReactPerf")),
            m = a("./Transaction"),
            n = a("./Object.assign"),
            o = a("./invariant"),
            p = (a("./warning"), []),
            q = j.getPooled(),
            r = !1,
            s = null,
            t = {
                initialize: function() {
                    this.dirtyComponentsLength = p.length
                },
                close: function() {
                    this.dirtyComponentsLength !== p.length ? (p.splice(0, this.dirtyComponentsLength), w()) : p.length = 0
                }
            }, u = {
                initialize: function() {
                    this.callbackQueue.reset()
                },
                close: function() {
                    this.callbackQueue.notifyAll()
                }
            }, v = [t, u];
        n(d.prototype, m.Mixin, {
            getTransactionWrappers: function() {
                return v
            },
            destructor: function() {
                this.dirtyComponentsLength = null, j.release(this.callbackQueue), this.callbackQueue = null, y.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
            },
            perform: function(a, b, c) {
                return m.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, a, b, c)
            }
        }), k.addPoolingTo(d);
        var w = l.measure("ReactUpdates", "flushBatchedUpdates", function() {
            for(; p.length || r;) {
                if(p.length) {
                    var a = d.getPooled();
                    a.perform(g, null, a), d.release(a)
                }
                if(r) {
                    r = !1;
                    var b = q;
                    q = j.getPooled(), b.notifyAll(), j.release(b)
                }
            }
        }),
            x = {
                injectReconcileTransaction: function(a) {
                    o(a), y.ReactReconcileTransaction = a
                },
                injectBatchingStrategy: function(a) {
                    o(a), o("function" == typeof a.batchedUpdates), o("boolean" == typeof a.isBatchingUpdates), s = a
                }
            }, y = {
                ReactReconcileTransaction: null,
                batchedUpdates: e,
                enqueueUpdate: h,
                flushBatchedUpdates: w,
                injection: x,
                asap: i
            };
        b.exports = y
    }, {
        "./CallbackQueue": 17,
        "./Object.assign": 38,
        "./PooledClass": 39,
        "./ReactCurrentOwner": 48,
        "./ReactPerf": 80,
        "./Transaction": 107,
        "./invariant": 138,
        "./warning": 157
    }
],
92: [
    function(a, b) {
        "use strict";
        var c = a("./DOMProperty"),
            d = c.injection.MUST_USE_ATTRIBUTE,
            e = {
                Properties: {
                    cx: d,
                    cy: d,
                    d: d,
                    dx: d,
                    dy: d,
                    fill: d,
                    fillOpacity: d,
                    fontFamily: d,
                    fontSize: d,
                    fx: d,
                    fy: d,
                    gradientTransform: d,
                    gradientUnits: d,
                    markerEnd: d,
                    markerMid: d,
                    markerStart: d,
                    offset: d,
                    opacity: d,
                    patternContentUnits: d,
                    patternUnits: d,
                    points: d,
                    preserveAspectRatio: d,
                    r: d,
                    rx: d,
                    ry: d,
                    spreadMethod: d,
                    stopColor: d,
                    stopOpacity: d,
                    stroke: d,
                    strokeDasharray: d,
                    strokeLinecap: d,
                    strokeOpacity: d,
                    strokeWidth: d,
                    textAnchor: d,
                    transform: d,
                    version: d,
                    viewBox: d,
                    x1: d,
                    x2: d,
                    x: d,
                    y1: d,
                    y2: d,
                    y: d
                },
                DOMAttributeNames: {
                    fillOpacity: "fill-opacity",
                    fontFamily: "font-family",
                    fontSize: "font-size",
                    gradientTransform: "gradientTransform",
                    gradientUnits: "gradientUnits",
                    markerEnd: "marker-end",
                    markerMid: "marker-mid",
                    markerStart: "marker-start",
                    patternContentUnits: "patternContentUnits",
                    patternUnits: "patternUnits",
                    preserveAspectRatio: "preserveAspectRatio",
                    spreadMethod: "spreadMethod",
                    stopColor: "stop-color",
                    stopOpacity: "stop-opacity",
                    strokeDasharray: "stroke-dasharray",
                    strokeLinecap: "stroke-linecap",
                    strokeOpacity: "stroke-opacity",
                    strokeWidth: "stroke-width",
                    textAnchor: "text-anchor",
                    viewBox: "viewBox"
                }
            };
        b.exports = e
    }, {
        "./DOMProperty": 22
    }
],
93: [
    function(a, b) {
        "use strict";

        function c(a) {
            if("selectionStart" in a && g.hasSelectionCapabilities(a)) return {
                start: a.selectionStart,
                end: a.selectionEnd
            };
            if(window.getSelection) {
                var b = window.getSelection();
                return {
                    anchorNode: b.anchorNode,
                    anchorOffset: b.anchorOffset,
                    focusNode: b.focusNode,
                    focusOffset: b.focusOffset
                }
            }
            if(document.selection) {
                var c = document.selection.createRange();
                return {
                    parentElement: c.parentElement(),
                    text: c.text,
                    top: c.boundingTop,
                    left: c.boundingLeft
                }
            }
        }

        function d(a) {
            if(!r && null != o && o == i()) {
                var b = c(o);
                if(!q || !l(q, b)) {
                    q = b;
                    var d = h.getPooled(n.select, p, a);
                    return d.type = "select", d.target = o, f.accumulateTwoPhaseDispatches(d), d
                }
            }
        }
        var e = a("./EventConstants"),
            f = a("./EventPropagators"),
            g = a("./ReactInputSelection"),
            h = a("./SyntheticEvent"),
            i = a("./getActiveElement"),
            j = a("./isTextInputElement"),
            k = a("./keyOf"),
            l = a("./shallowEqual"),
            m = e.topLevelTypes,
            n = {
                select: {
                    phasedRegistrationNames: {
                        bubbled: k({
                            onSelect: null
                        }),
                        captured: k({
                            onSelectCapture: null
                        })
                    },
                    dependencies: [m.topBlur, m.topContextMenu, m.topFocus, m.topKeyDown, m.topMouseDown, m.topMouseUp, m.topSelectionChange]
                }
            }, o = null,
            p = null,
            q = null,
            r = !1,
            s = {
                eventTypes: n,
                extractEvents: function(a, b, c, e) {
                    switch(a) {
                        case m.topFocus:
                            (j(b) || "true" === b.contentEditable) && (o = b, p = c, q = null);
                            break;
                        case m.topBlur:
                            o = null, p = null, q = null;
                            break;
                        case m.topMouseDown:
                            r = !0;
                            break;
                        case m.topContextMenu:
                        case m.topMouseUp:
                            return r = !1, d(e);
                        case m.topSelectionChange:
                        case m.topKeyDown:
                        case m.topKeyUp:
                            return d(e)
                    }
                }
            };
        b.exports = s
    }, {
        "./EventConstants": 27,
        "./EventPropagators": 32,
        "./ReactInputSelection": 71,
        "./SyntheticEvent": 99,
        "./getActiveElement": 125,
        "./isTextInputElement": 141,
        "./keyOf": 145,
        "./shallowEqual": 153
    }
],
94: [
    function(a, b) {
        "use strict";
        var c = Math.pow(2, 53),
            d = {
                createReactRootIndex: function() {
                    return Math.ceil(Math.random() * c)
                }
            };
        b.exports = d
    }, {}
],
95: [
    function(a, b) {
        "use strict";
        var c = a("./EventConstants"),
            d = a("./EventPluginUtils"),
            e = a("./EventPropagators"),
            f = a("./SyntheticClipboardEvent"),
            g = a("./SyntheticEvent"),
            h = a("./SyntheticFocusEvent"),
            i = a("./SyntheticKeyboardEvent"),
            j = a("./SyntheticMouseEvent"),
            k = a("./SyntheticDragEvent"),
            l = a("./SyntheticTouchEvent"),
            m = a("./SyntheticUIEvent"),
            n = a("./SyntheticWheelEvent"),
            o = a("./getEventCharCode"),
            p = a("./invariant"),
            q = a("./keyOf"),
            r = (a("./warning"), c.topLevelTypes),
            s = {
                blur: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onBlur: !0
                        }),
                        captured: q({
                            onBlurCapture: !0
                        })
                    }
                },
                click: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onClick: !0
                        }),
                        captured: q({
                            onClickCapture: !0
                        })
                    }
                },
                contextMenu: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onContextMenu: !0
                        }),
                        captured: q({
                            onContextMenuCapture: !0
                        })
                    }
                },
                copy: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onCopy: !0
                        }),
                        captured: q({
                            onCopyCapture: !0
                        })
                    }
                },
                cut: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onCut: !0
                        }),
                        captured: q({
                            onCutCapture: !0
                        })
                    }
                },
                doubleClick: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onDoubleClick: !0
                        }),
                        captured: q({
                            onDoubleClickCapture: !0
                        })
                    }
                },
                drag: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onDrag: !0
                        }),
                        captured: q({
                            onDragCapture: !0
                        })
                    }
                },
                dragEnd: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onDragEnd: !0
                        }),
                        captured: q({
                            onDragEndCapture: !0
                        })
                    }
                },
                dragEnter: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onDragEnter: !0
                        }),
                        captured: q({
                            onDragEnterCapture: !0
                        })
                    }
                },
                dragExit: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onDragExit: !0
                        }),
                        captured: q({
                            onDragExitCapture: !0
                        })
                    }
                },
                dragLeave: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onDragLeave: !0
                        }),
                        captured: q({
                            onDragLeaveCapture: !0
                        })
                    }
                },
                dragOver: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onDragOver: !0
                        }),
                        captured: q({
                            onDragOverCapture: !0
                        })
                    }
                },
                dragStart: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onDragStart: !0
                        }),
                        captured: q({
                            onDragStartCapture: !0
                        })
                    }
                },
                drop: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onDrop: !0
                        }),
                        captured: q({
                            onDropCapture: !0
                        })
                    }
                },
                focus: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onFocus: !0
                        }),
                        captured: q({
                            onFocusCapture: !0
                        })
                    }
                },
                input: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onInput: !0
                        }),
                        captured: q({
                            onInputCapture: !0
                        })
                    }
                },
                keyDown: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onKeyDown: !0
                        }),
                        captured: q({
                            onKeyDownCapture: !0
                        })
                    }
                },
                keyPress: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onKeyPress: !0
                        }),
                        captured: q({
                            onKeyPressCapture: !0
                        })
                    }
                },
                keyUp: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onKeyUp: !0
                        }),
                        captured: q({
                            onKeyUpCapture: !0
                        })
                    }
                },
                load: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onLoad: !0
                        }),
                        captured: q({
                            onLoadCapture: !0
                        })
                    }
                },
                error: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onError: !0
                        }),
                        captured: q({
                            onErrorCapture: !0
                        })
                    }
                },
                mouseDown: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onMouseDown: !0
                        }),
                        captured: q({
                            onMouseDownCapture: !0
                        })
                    }
                },
                mouseMove: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onMouseMove: !0
                        }),
                        captured: q({
                            onMouseMoveCapture: !0
                        })
                    }
                },
                mouseOut: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onMouseOut: !0
                        }),
                        captured: q({
                            onMouseOutCapture: !0
                        })
                    }
                },
                mouseOver: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onMouseOver: !0
                        }),
                        captured: q({
                            onMouseOverCapture: !0
                        })
                    }
                },
                mouseUp: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onMouseUp: !0
                        }),
                        captured: q({
                            onMouseUpCapture: !0
                        })
                    }
                },
                paste: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onPaste: !0
                        }),
                        captured: q({
                            onPasteCapture: !0
                        })
                    }
                },
                reset: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onReset: !0
                        }),
                        captured: q({
                            onResetCapture: !0
                        })
                    }
                },
                scroll: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onScroll: !0
                        }),
                        captured: q({
                            onScrollCapture: !0
                        })
                    }
                },
                submit: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onSubmit: !0
                        }),
                        captured: q({
                            onSubmitCapture: !0
                        })
                    }
                },
                touchCancel: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onTouchCancel: !0
                        }),
                        captured: q({
                            onTouchCancelCapture: !0
                        })
                    }
                },
                touchEnd: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onTouchEnd: !0
                        }),
                        captured: q({
                            onTouchEndCapture: !0
                        })
                    }
                },
                touchMove: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onTouchMove: !0
                        }),
                        captured: q({
                            onTouchMoveCapture: !0
                        })
                    }
                },
                touchStart: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onTouchStart: !0
                        }),
                        captured: q({
                            onTouchStartCapture: !0
                        })
                    }
                },
                wheel: {
                    phasedRegistrationNames: {
                        bubbled: q({
                            onWheel: !0
                        }),
                        captured: q({
                            onWheelCapture: !0
                        })
                    }
                }
            }, t = {
                topBlur: s.blur,
                topClick: s.click,
                topContextMenu: s.contextMenu,
                topCopy: s.copy,
                topCut: s.cut,
                topDoubleClick: s.doubleClick,
                topDrag: s.drag,
                topDragEnd: s.dragEnd,
                topDragEnter: s.dragEnter,
                topDragExit: s.dragExit,
                topDragLeave: s.dragLeave,
                topDragOver: s.dragOver,
                topDragStart: s.dragStart,
                topDrop: s.drop,
                topError: s.error,
                topFocus: s.focus,
                topInput: s.input,
                topKeyDown: s.keyDown,
                topKeyPress: s.keyPress,
                topKeyUp: s.keyUp,
                topLoad: s.load,
                topMouseDown: s.mouseDown,
                topMouseMove: s.mouseMove,
                topMouseOut: s.mouseOut,
                topMouseOver: s.mouseOver,
                topMouseUp: s.mouseUp,
                topPaste: s.paste,
                topReset: s.reset,
                topScroll: s.scroll,
                topSubmit: s.submit,
                topTouchCancel: s.touchCancel,
                topTouchEnd: s.touchEnd,
                topTouchMove: s.touchMove,
                topTouchStart: s.touchStart,
                topWheel: s.wheel
            };
        for(var u in t) t[u].dependencies = [u];
        var v = {
            eventTypes: s,
            executeDispatch: function(a, b, c) {
                var e = d.executeDispatch(a, b, c);
                e === !1 && (a.stopPropagation(), a.preventDefault())
            },
            extractEvents: function(a, b, c, d) {
                var q = t[a];
                if(!q) return null;
                var s;
                switch(a) {
                    case r.topInput:
                    case r.topLoad:
                    case r.topError:
                    case r.topReset:
                    case r.topSubmit:
                        s = g;
                        break;
                    case r.topKeyPress:
                        if(0 === o(d)) return null;
                    case r.topKeyDown:
                    case r.topKeyUp:
                        s = i;
                        break;
                    case r.topBlur:
                    case r.topFocus:
                        s = h;
                        break;
                    case r.topClick:
                        if(2 === d.button) return null;
                    case r.topContextMenu:
                    case r.topDoubleClick:
                    case r.topMouseDown:
                    case r.topMouseMove:
                    case r.topMouseOut:
                    case r.topMouseOver:
                    case r.topMouseUp:
                        s = j;
                        break;
                    case r.topDrag:
                    case r.topDragEnd:
                    case r.topDragEnter:
                    case r.topDragExit:
                    case r.topDragLeave:
                    case r.topDragOver:
                    case r.topDragStart:
                    case r.topDrop:
                        s = k;
                        break;
                    case r.topTouchCancel:
                    case r.topTouchEnd:
                    case r.topTouchMove:
                    case r.topTouchStart:
                        s = l;
                        break;
                    case r.topScroll:
                        s = m;
                        break;
                    case r.topWheel:
                        s = n;
                        break;
                    case r.topCopy:
                    case r.topCut:
                    case r.topPaste:
                        s = f
                }
                p(s);
                var u = s.getPooled(q, c, d);
                return e.accumulateTwoPhaseDispatches(u), u
            }
        };
        b.exports = v
    }, {
        "./EventConstants": 27,
        "./EventPluginUtils": 31,
        "./EventPropagators": 32,
        "./SyntheticClipboardEvent": 96,
        "./SyntheticDragEvent": 98,
        "./SyntheticEvent": 99,
        "./SyntheticFocusEvent": 100,
        "./SyntheticKeyboardEvent": 102,
        "./SyntheticMouseEvent": 103,
        "./SyntheticTouchEvent": 104,
        "./SyntheticUIEvent": 105,
        "./SyntheticWheelEvent": 106,
        "./getEventCharCode": 126,
        "./invariant": 138,
        "./keyOf": 145,
        "./warning": 157
    }
],
96: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            d.call(this, a, b, c)
        }
        var d = a("./SyntheticEvent"),
            e = {
                clipboardData: function(a) {
                    return "clipboardData" in a ? a.clipboardData : window.clipboardData
                }
            };
        d.augmentClass(c, e), b.exports = c
    }, {
        "./SyntheticEvent": 99
    }
],
97: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            d.call(this, a, b, c)
        }
        var d = a("./SyntheticEvent"),
            e = {
                data: null
            };
        d.augmentClass(c, e), b.exports = c
    }, {
        "./SyntheticEvent": 99
    }
],
98: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            d.call(this, a, b, c)
        }
        var d = a("./SyntheticMouseEvent"),
            e = {
                dataTransfer: null
            };
        d.augmentClass(c, e), b.exports = c
    }, {
        "./SyntheticMouseEvent": 103
    }
],
99: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            this.dispatchConfig = a, this.dispatchMarker = b, this.nativeEvent = c;
            var d = this.constructor.Interface;
            for(var e in d)
                if(d.hasOwnProperty(e)) {
                    var g = d[e];
                    this[e] = g ? g(c) : c[e]
                }
            var h = null != c.defaultPrevented ? c.defaultPrevented : c.returnValue === !1;
            this.isDefaultPrevented = h ? f.thatReturnsTrue : f.thatReturnsFalse, this.isPropagationStopped = f.thatReturnsFalse
        }
        var d = a("./PooledClass"),
            e = a("./Object.assign"),
            f = a("./emptyFunction"),
            g = a("./getEventTarget"),
            h = {
                type: null,
                target: g,
                currentTarget: f.thatReturnsNull,
                eventPhase: null,
                bubbles: null,
                cancelable: null,
                timeStamp: function(a) {
                    return a.timeStamp || Date.now()
                },
                defaultPrevented: null,
                isTrusted: null
            };
        e(c.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a.preventDefault ? a.preventDefault() : a.returnValue = !1, this.isDefaultPrevented = f.thatReturnsTrue
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, this.isPropagationStopped = f.thatReturnsTrue
            },
            persist: function() {
                this.isPersistent = f.thatReturnsTrue
            },
            isPersistent: f.thatReturnsFalse,
            destructor: function() {
                var a = this.constructor.Interface;
                for(var b in a) this[b] = null;
                this.dispatchConfig = null, this.dispatchMarker = null, this.nativeEvent = null
            }
        }), c.Interface = h, c.augmentClass = function(a, b) {
            var c = this,
                f = Object.create(c.prototype);
            e(f, a.prototype), a.prototype = f, a.prototype.constructor = a, a.Interface = e({}, c.Interface, b), a.augmentClass = c.augmentClass, d.addPoolingTo(a, d.threeArgumentPooler)
        }, d.addPoolingTo(c, d.threeArgumentPooler), b.exports = c
    }, {
        "./Object.assign": 38,
        "./PooledClass": 39,
        "./emptyFunction": 119,
        "./getEventTarget": 129
    }
],
100: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            d.call(this, a, b, c)
        }
        var d = a("./SyntheticUIEvent"),
            e = {
                relatedTarget: null
            };
        d.augmentClass(c, e), b.exports = c
    }, {
        "./SyntheticUIEvent": 105
    }
],
101: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            d.call(this, a, b, c)
        }
        var d = a("./SyntheticEvent"),
            e = {
                data: null
            };
        d.augmentClass(c, e), b.exports = c
    }, {
        "./SyntheticEvent": 99
    }
],
102: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            d.call(this, a, b, c)
        }
        var d = a("./SyntheticUIEvent"),
            e = a("./getEventCharCode"),
            f = a("./getEventKey"),
            g = a("./getEventModifierState"),
            h = {
                key: f,
                location: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                repeat: null,
                locale: null,
                getModifierState: g,
                charCode: function(a) {
                    return "keypress" === a.type ? e(a) : 0
                },
                keyCode: function(a) {
                    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0
                },
                which: function(a) {
                    return "keypress" === a.type ? e(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0
                }
            };
        d.augmentClass(c, h), b.exports = c
    }, {
        "./SyntheticUIEvent": 105,
        "./getEventCharCode": 126,
        "./getEventKey": 127,
        "./getEventModifierState": 128
    }
],
103: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            d.call(this, a, b, c)
        }
        var d = a("./SyntheticUIEvent"),
            e = a("./ViewportMetrics"),
            f = a("./getEventModifierState"),
            g = {
                screenX: null,
                screenY: null,
                clientX: null,
                clientY: null,
                ctrlKey: null,
                shiftKey: null,
                altKey: null,
                metaKey: null,
                getModifierState: f,
                button: function(a) {
                    var b = a.button;
                    return "which" in a ? b : 2 === b ? 2 : 4 === b ? 1 : 0
                },
                buttons: null,
                relatedTarget: function(a) {
                    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement)
                },
                pageX: function(a) {
                    return "pageX" in a ? a.pageX : a.clientX + e.currentScrollLeft
                },
                pageY: function(a) {
                    return "pageY" in a ? a.pageY : a.clientY + e.currentScrollTop
                }
            };
        d.augmentClass(c, g), b.exports = c
    }, {
        "./SyntheticUIEvent": 105,
        "./ViewportMetrics": 108,
        "./getEventModifierState": 128
    }
],
104: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            d.call(this, a, b, c)
        }
        var d = a("./SyntheticUIEvent"),
            e = a("./getEventModifierState"),
            f = {
                touches: null,
                targetTouches: null,
                changedTouches: null,
                altKey: null,
                metaKey: null,
                ctrlKey: null,
                shiftKey: null,
                getModifierState: e
            };
        d.augmentClass(c, f), b.exports = c
    }, {
        "./SyntheticUIEvent": 105,
        "./getEventModifierState": 128
    }
],
105: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            d.call(this, a, b, c)
        }
        var d = a("./SyntheticEvent"),
            e = a("./getEventTarget"),
            f = {
                view: function(a) {
                    if(a.view) return a.view;
                    var b = e(a);
                    if(null != b && b.window === b) return b;
                    var c = b.ownerDocument;
                    return c ? c.defaultView || c.parentWindow : window
                },
                detail: function(a) {
                    return a.detail || 0
                }
            };
        d.augmentClass(c, f), b.exports = c
    }, {
        "./SyntheticEvent": 99,
        "./getEventTarget": 129
    }
],
106: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            d.call(this, a, b, c)
        }
        var d = a("./SyntheticMouseEvent"),
            e = {
                deltaX: function(a) {
                    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0
                },
                deltaY: function(a) {
                    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0
                },
                deltaZ: null,
                deltaMode: null
            };
        d.augmentClass(c, e), b.exports = c
    }, {
        "./SyntheticMouseEvent": 103
    }
],
107: [
    function(a, b) {
        "use strict";
        var c = a("./invariant"),
            d = {
                reinitializeTransaction: function() {
                    this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
                },
                _isInTransaction: !1,
                getTransactionWrappers: null,
                isInTransaction: function() {
                    return !!this._isInTransaction
                },
                perform: function(a, b, d, e, f, g, h, i) {
                    c(!this.isInTransaction());
                    var j, k;
                    try {
                        this._isInTransaction = !0, j = !0, this.initializeAll(0), k = a.call(b, d, e, f, g, h, i), j = !1
                    } finally {
                        try {
                            if(j) try {
                                this.closeAll(0)
                            } catch(l) {} else this.closeAll(0)
                        } finally {
                            this._isInTransaction = !1
                        }
                    }
                    return k
                },
                initializeAll: function(a) {
                    for(var b = this.transactionWrappers, c = a; c < b.length; c++) {
                        var d = b[c];
                        try {
                            this.wrapperInitData[c] = e.OBSERVED_ERROR, this.wrapperInitData[c] = d.initialize ? d.initialize.call(this) : null
                        } finally {
                            if(this.wrapperInitData[c] === e.OBSERVED_ERROR) try {
                                this.initializeAll(c + 1)
                            } catch(f) {}
                        }
                    }
                },
                closeAll: function(a) {
                    c(this.isInTransaction());
                    for(var b = this.transactionWrappers, d = a; d < b.length; d++) {
                        var f, g = b[d],
                            h = this.wrapperInitData[d];
                        try {
                            f = !0, h !== e.OBSERVED_ERROR && g.close && g.close.call(this, h), f = !1
                        } finally {
                            if(f) try {
                                this.closeAll(d + 1)
                            } catch(i) {}
                        }
                    }
                    this.wrapperInitData.length = 0
                }
            }, e = {
                Mixin: d,
                OBSERVED_ERROR: {}
            };
        b.exports = e
    }, {
        "./invariant": 138
    }
],
108: [
    function(a, b) {
        "use strict";
        var c = a("./getUnboundedScrollPosition"),
            d = {
                currentScrollLeft: 0,
                currentScrollTop: 0,
                refreshScrollValues: function() {
                    var a = c(window);
                    d.currentScrollLeft = a.x, d.currentScrollTop = a.y
                }
            };
        b.exports = d
    }, {
        "./getUnboundedScrollPosition": 134
    }
],
109: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            if(d(null != b), null == a) return b;
            var c = Array.isArray(a),
                e = Array.isArray(b);
            return c && e ? (a.push.apply(a, b), a) : c ? (a.push(b), a) : e ? [a].concat(b) : [a, b]
        }
        var d = a("./invariant");
        b.exports = c
    }, {
        "./invariant": 138
    }
],
110: [
    function(a, b) {
        "use strict";

        function c(a) {
            for(var b = 1, c = 0, e = 0; e < a.length; e++) b = (b + a.charCodeAt(e)) % d, c = (c + b) % d;
            return b | c << 16
        }
        var d = 65521;
        b.exports = c
    }, {}
],
111: [
    function(a, b) {
        function c(a) {
            return a.replace(d, function(a, b) {
                return b.toUpperCase()
            })
        }
        var d = /-(.)/g;
        b.exports = c
    }, {}
],
112: [
    function(a, b) {
        "use strict";

        function c(a) {
            return d(a.replace(e, "ms-"))
        }
        var d = a("./camelize"),
            e = /^-ms-/;
        b.exports = c
    }, {
        "./camelize": 111
    }
],
113: [
    function(a, b) {
        function c(a, b) {
            return a && b ? a === b ? !0 : d(a) ? !1 : d(b) ? c(a, b.parentNode) : a.contains ? a.contains(b) : a.compareDocumentPosition ? !! (16 & a.compareDocumentPosition(b)) : !1 : !1
        }
        var d = a("./isTextNode");
        b.exports = c
    }, {
        "./isTextNode": 142
    }
],
114: [
    function(a, b) {
        function c(a) {
            return !!a && ("object" == typeof a || "function" == typeof a) && "length" in a && !("setInterval" in a) && "number" != typeof a.nodeType && (Array.isArray(a) || "callee" in a || "item" in a)
        }

        function d(a) {
            return c(a) ? Array.isArray(a) ? a.slice() : e(a) : [a]
        }
        var e = a("./toArray");
        b.exports = d
    }, {
        "./toArray": 155
    }
],
115: [
    function(a, b) {
        "use strict";

        function c(a) {
            var b = e.createFactory(a),
                c = d.createClass({
                    displayName: "ReactFullPageComponent" + a,
                    componentWillUnmount: function() {
                        f(!1)
                    },
                    render: function() {
                        return b(this.props)
                    }
                });
            return c
        }
        var d = a("./ReactCompositeComponent"),
            e = a("./ReactElement"),
            f = a("./invariant");
        b.exports = c
    }, {
        "./ReactCompositeComponent": 46,
        "./ReactElement": 64,
        "./invariant": 138
    }
],
116: [
    function(a, b) {
        function c(a) {
            var b = a.match(j);
            return b && b[1].toLowerCase()
        }

        function d(a, b) {
            var d = i;
            h( !! i);
            var e = c(a),
                j = e && g(e);
            if(j) {
                d.innerHTML = j[1] + a + j[2];
                for(var k = j[0]; k--;) d = d.lastChild
            } else d.innerHTML = a;
            var l = d.getElementsByTagName("script");
            l.length && (h(b), f(l).forEach(b));
            for(var m = f(d.childNodes); d.lastChild;) d.removeChild(d.lastChild);
            return m
        }
        var e = a("./ExecutionEnvironment"),
            f = a("./createArrayFrom"),
            g = a("./getMarkupWrap"),
            h = a("./invariant"),
            i = e.canUseDOM ? document.createElement("div") : null,
            j = /^\s*<(\w+)/;
        b.exports = d
    }, {
        "./ExecutionEnvironment": 33,
        "./createArrayFrom": 114,
        "./getMarkupWrap": 130,
        "./invariant": 138
    }
],
117: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            var c = null == b || "boolean" == typeof b || "" === b;
            if(c) return "";
            var d = isNaN(b);
            return d || 0 === b || e.hasOwnProperty(a) && e[a] ? "" + b : ("string" == typeof b && (b = b.trim()), b + "px")
        }
        var d = a("./CSSProperty"),
            e = d.isUnitlessNumber;
        b.exports = c
    }, {
        "./CSSProperty": 15
    }
],
118: [
    function(a, b) {
        function c(a, b, c, d, e) {
            return e
        }
        a("./Object.assign"), a("./warning");
        b.exports = c
    }, {
        "./Object.assign": 38,
        "./warning": 157
    }
],
119: [
    function(a, b) {
        function c(a) {
            return function() {
                return a
            }
        }

        function d() {}
        d.thatReturns = c, d.thatReturnsFalse = c(!1), d.thatReturnsTrue = c(!0), d.thatReturnsNull = c(null), d.thatReturnsThis = function() {
            return this
        }, d.thatReturnsArgument = function(a) {
            return a
        }, b.exports = d
    }, {}
],
120: [
    function(a, b) {
        "use strict";
        var c = {};
        b.exports = c
    }, {}
],
121: [
    function(a, b) {
        "use strict";

        function c(a) {
            return e[a]
        }

        function d(a) {
            return("" + a).replace(f, c)
        }
        var e = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;",
            "'": "&#x27;"
        }, f = /[&><"']/g;
        b.exports = d
    }, {}
],
122: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            var d = a,
                f = !d.hasOwnProperty(c);
            if(f && null != b) {
                var g, h = typeof b;
                g = "string" === h ? e(b) : "number" === h ? e("" + b) : b, d[c] = g
            }
        }

        function d(a) {
            if(null == a) return a;
            var b = {};
            return f(a, c, b), b
        } {
            var e = a("./ReactTextComponent"),
                f = a("./traverseAllChildren");
            a("./warning")
        }
        b.exports = d
    }, {
        "./ReactTextComponent": 90,
        "./traverseAllChildren": 156,
        "./warning": 157
    }
],
123: [
    function(a, b) {
        "use strict";

        function c(a) {
            try {
                a.focus()
            } catch(b) {}
        }
        b.exports = c
    }, {}
],
124: [
    function(a, b) {
        "use strict";
        var c = function(a, b, c) {
            Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a)
        };
        b.exports = c
    }, {}
],
125: [
    function(a, b) {
        function c() {
            try {
                return document.activeElement || document.body
            } catch(a) {
                return document.body
            }
        }
        b.exports = c
    }, {}
],
126: [
    function(a, b) {
        "use strict";

        function c(a) {
            var b, c = a.keyCode;
            return "charCode" in a ? (b = a.charCode, 0 === b && 13 === c && (b = 13)) : b = c, b >= 32 || 13 === b ? b : 0
        }
        b.exports = c
    }, {}
],
127: [
    function(a, b) {
        "use strict";

        function c(a) {
            if(a.key) {
                var b = e[a.key] || a.key;
                if("Unidentified" !== b) return b
            }
            if("keypress" === a.type) {
                var c = d(a);
                return 13 === c ? "Enter" : String.fromCharCode(c)
            }
            return "keydown" === a.type || "keyup" === a.type ? f[a.keyCode] || "Unidentified" : ""
        }
        var d = a("./getEventCharCode"),
            e = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, f = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            };
        b.exports = c
    }, {
        "./getEventCharCode": 126
    }
],
128: [
    function(a, b) {
        "use strict";

        function c(a) {
            var b = this,
                c = b.nativeEvent;
            if(c.getModifierState) return c.getModifierState(a);
            var d = e[a];
            return d ? !! c[d] : !1
        }

        function d() {
            return c
        }
        var e = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        b.exports = d
    }, {}
],
129: [
    function(a, b) {
        "use strict";

        function c(a) {
            var b = a.target || a.srcElement || window;
            return 3 === b.nodeType ? b.parentNode : b
        }
        b.exports = c
    }, {}
],
130: [
    function(a, b) {
        function c(a) {
            return e( !! f), l.hasOwnProperty(a) || (a = "*"), g.hasOwnProperty(a) || (f.innerHTML = "*" === a ? "<link />" : "<" + a + "></" + a + ">", g[a] = !f.firstChild), g[a] ? l[a] : null
        }
        var d = a("./ExecutionEnvironment"),
            e = a("./invariant"),
            f = d.canUseDOM ? document.createElement("div") : null,
            g = {
                circle: !0,
                defs: !0,
                ellipse: !0,
                g: !0,
                line: !0,
                linearGradient: !0,
                path: !0,
                polygon: !0,
                polyline: !0,
                radialGradient: !0,
                rect: !0,
                stop: !0,
                text: !0
            }, h = [1, '<select multiple="true">', "</select>"],
            i = [1, "<table>", "</table>"],
            j = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            k = [1, "<svg>", "</svg>"],
            l = {
                "*": [1, "?<div>", "</div>"],
                area: [1, "<map>", "</map>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                param: [1, "<object>", "</object>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                optgroup: h,
                option: h,
                caption: i,
                colgroup: i,
                tbody: i,
                tfoot: i,
                thead: i,
                td: j,
                th: j,
                circle: k,
                defs: k,
                ellipse: k,
                g: k,
                line: k,
                linearGradient: k,
                path: k,
                polygon: k,
                polyline: k,
                radialGradient: k,
                rect: k,
                stop: k,
                text: k
            };
        b.exports = c
    }, {
        "./ExecutionEnvironment": 33,
        "./invariant": 138
    }
],
131: [
    function(a, b) {
        "use strict";

        function c(a) {
            for(; a && a.firstChild;) a = a.firstChild;
            return a
        }

        function d(a) {
            for(; a;) {
                if(a.nextSibling) return a.nextSibling;
                a = a.parentNode
            }
        }

        function e(a, b) {
            for(var e = c(a), f = 0, g = 0; e;) {
                if(3 == e.nodeType) {
                    if(g = f + e.textContent.length, b >= f && g >= b) return {
                        node: e,
                        offset: b - f
                    };
                    f = g
                }
                e = c(d(e))
            }
        }
        b.exports = e
    }, {}
],
132: [
    function(a, b) {
        "use strict";

        function c(a) {
            return a ? a.nodeType === d ? a.documentElement : a.firstChild : null
        }
        var d = 9;
        b.exports = c
    }, {}
],
133: [
    function(a, b) {
        "use strict";

        function c() {
            return !e && d.canUseDOM && (e = "textContent" in document.documentElement ? "textContent" : "innerText"), e
        }
        var d = a("./ExecutionEnvironment"),
            e = null;
        b.exports = c
    }, {
        "./ExecutionEnvironment": 33
    }
],
134: [
    function(a, b) {
        "use strict";

        function c(a) {
            return a === window ? {
                x: window.pageXOffset || document.documentElement.scrollLeft,
                y: window.pageYOffset || document.documentElement.scrollTop
            } : {
                x: a.scrollLeft,
                y: a.scrollTop
            }
        }
        b.exports = c
    }, {}
],
135: [
    function(a, b) {
        function c(a) {
            return a.replace(d, "-$1").toLowerCase()
        }
        var d = /([A-Z])/g;
        b.exports = c
    }, {}
],
136: [
    function(a, b) {
        "use strict";

        function c(a) {
            return d(a).replace(e, "-ms-")
        }
        var d = a("./hyphenate"),
            e = /^ms-/;
        b.exports = c
    }, {
        "./hyphenate": 135
    }
],
137: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            var c;
            return c = "string" == typeof a.type ? d.createInstanceForTag(a.type, a.props, b) : new a.type(a.props), c.construct(a), c
        } {
            var d = (a("./warning"), a("./ReactElement"), a("./ReactLegacyElement"), a("./ReactNativeComponent"));
            a("./ReactEmptyComponent")
        }
        b.exports = c
    }, {
        "./ReactElement": 64,
        "./ReactEmptyComponent": 66,
        "./ReactLegacyElement": 73,
        "./ReactNativeComponent": 78,
        "./warning": 157
    }
],
138: [
    function(a, b) {
        "use strict";
        var c = function(a, b, c, d, e, f, g, h) {
            if(!a) {
                var i;
                if(void 0 === b) i = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var j = [c, d, e, f, g, h],
                        k = 0;
                    i = new Error("Invariant Violation: " + b.replace(/%s/g, function() {
                        return j[k++]
                    }))
                }
                throw i.framesToPop = 1, i
            }
        };
        b.exports = c
    }, {}
],
139: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            if(!e.canUseDOM || b && !("addEventListener" in document)) return !1;
            var c = "on" + a,
                f = c in document;
            if(!f) {
                var g = document.createElement("div");
                g.setAttribute(c, "return;"), f = "function" == typeof g[c]
            }
            return !f && d && "wheel" === a && (f = document.implementation.hasFeature("Events.wheel", "3.0")), f
        }
        var d, e = a("./ExecutionEnvironment");
        e.canUseDOM && (d = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), b.exports = c
    }, {
        "./ExecutionEnvironment": 33
    }
],
140: [
    function(a, b) {
        function c(a) {
            return !(!a || !("function" == typeof Node ? a instanceof Node : "object" == typeof a && "number" == typeof a.nodeType && "string" == typeof a.nodeName))
        }
        b.exports = c
    }, {}
],
141: [
    function(a, b) {
        "use strict";

        function c(a) {
            return a && ("INPUT" === a.nodeName && d[a.type] || "TEXTAREA" === a.nodeName)
        }
        var d = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        b.exports = c
    }, {}
],
142: [
    function(a, b) {
        function c(a) {
            return d(a) && 3 == a.nodeType
        }
        var d = a("./isNode");
        b.exports = c
    }, {
        "./isNode": 140
    }
],
143: [
    function(a, b) {
        "use strict";

        function c(a) {
            a || (a = "");
            var b, c = arguments.length;
            if(c > 1)
                for(var d = 1; c > d; d++) b = arguments[d], b && (a = (a ? a + " " : "") + b);
            return a
        }
        b.exports = c
    }, {}
],
144: [
    function(a, b) {
        "use strict";
        var c = a("./invariant"),
            d = function(a) {
                var b, d = {};
                c(a instanceof Object && !Array.isArray(a));
                for(b in a) a.hasOwnProperty(b) && (d[b] = b);
                return d
            };
        b.exports = d
    }, {
        "./invariant": 138
    }
],
145: [
    function(a, b) {
        var c = function(a) {
            var b;
            for(b in a)
                if(a.hasOwnProperty(b)) return b;
            return null
        };
        b.exports = c
    }, {}
],
146: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            if(!a) return null;
            var e = {};
            for(var f in a) d.call(a, f) && (e[f] = b.call(c, a[f], f, a));
            return e
        }
        var d = Object.prototype.hasOwnProperty;
        b.exports = c
    }, {}
],
147: [
    function(a, b) {
        "use strict";

        function c(a) {
            var b = {};
            return function(c) {
                return b.hasOwnProperty(c) ? b[c] : b[c] = a.call(this, c)
            }
        }
        b.exports = c
    }, {}
],
148: [
    function(a, b) {
        "use strict";

        function c(a) {
            d(a && !/[^a-z0-9_]/.test(a))
        }
        var d = a("./invariant");
        b.exports = c
    }, {
        "./invariant": 138
    }
],
149: [
    function(a, b) {
        "use strict";

        function c(a) {
            return e(d.isValidElement(a)), a
        }
        var d = a("./ReactElement"),
            e = a("./invariant");
        b.exports = c
    }, {
        "./ReactElement": 64,
        "./invariant": 138
    }
],
150: [
    function(a, b) {
        "use strict";
        var c, d = a("./ExecutionEnvironment");
        d.canUseDOM && (c = window.performance || window.msPerformance || window.webkitPerformance), b.exports = c || {}
    }, {
        "./ExecutionEnvironment": 33
    }
],
151: [
    function(a, b) {
        var c = a("./performance");
        c && c.now || (c = Date);
        var d = c.now.bind(c);
        b.exports = d
    }, {
        "./performance": 150
    }
],
152: [
    function(a, b) {
        "use strict";
        var c = a("./ExecutionEnvironment"),
            d = /^[ \r\n\t\f]/,
            e = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
            f = function(a, b) {
                a.innerHTML = b
            };
        if(c.canUseDOM) {
            var g = document.createElement("div");
            g.innerHTML = " ", "" === g.innerHTML && (f = function(a, b) {
                if(a.parentNode && a.parentNode.replaceChild(a, a), d.test(b) || "<" === b[0] && e.test(b)) {
                    a.innerHTML = "ï»¿" + b;
                    var c = a.firstChild;
                    1 === c.data.length ? a.removeChild(c) : c.deleteData(0, 1)
                } else a.innerHTML = b
            })
        }
        b.exports = f
    }, {
        "./ExecutionEnvironment": 33
    }
],
153: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            if(a === b) return !0;
            var c;
            for(c in a)
                if(a.hasOwnProperty(c) && (!b.hasOwnProperty(c) || a[c] !== b[c])) return !1;
            for(c in b)
                if(b.hasOwnProperty(c) && !a.hasOwnProperty(c)) return !1;
            return !0
        }
        b.exports = c
    }, {}
],
154: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            return a && b && a.type === b.type && a.key === b.key && a._owner === b._owner ? !0 : !1
        }
        b.exports = c
    }, {}
],
155: [
    function(a, b) {
        function c(a) {
            var b = a.length;
            if(d(!Array.isArray(a) && ("object" == typeof a || "function" == typeof a)), d("number" == typeof b), d(0 === b || b - 1 in a), a.hasOwnProperty) try {
                return Array.prototype.slice.call(a)
            } catch(c) {}
            for(var e = Array(b), f = 0; b > f; f++) e[f] = a[f];
            return e
        }
        var d = a("./invariant");
        b.exports = c
    }, {
        "./invariant": 138
    }
],
156: [
    function(a, b) {
        "use strict";

        function c(a) {
            return m[a]
        }

        function d(a, b) {
            return a && null != a.key ? f(a.key) : b.toString(36)
        }

        function e(a) {
            return("" + a).replace(n, c)
        }

        function f(a) {
            return "$" + e(a)
        }

        function g(a, b, c) {
            return null == a ? 0 : o(a, "", 0, b, c)
        }
        var h = a("./ReactElement"),
            i = a("./ReactInstanceHandles"),
            j = a("./invariant"),
            k = i.SEPARATOR,
            l = ":",
            m = {
                "=": "=0",
                ".": "=1",
                ":": "=2"
            }, n = /[=.:]/g,
            o = function(a, b, c, e, g) {
                var i, m, n = 0;
                if(Array.isArray(a))
                    for(var p = 0; p < a.length; p++) {
                        var q = a[p];
                        i = b + (b ? l : k) + d(q, p), m = c + n, n += o(q, i, m, e, g)
                    } else {
                        var r = typeof a,
                            s = "" === b,
                            t = s ? k + d(a, 0) : b;
                        if(null == a || "boolean" === r) e(g, null, t, c), n = 1;
                        else if("string" === r || "number" === r || h.isValidElement(a)) e(g, a, t, c), n = 1;
                        else if("object" === r) {
                            j(!a || 1 !== a.nodeType);
                            for(var u in a) a.hasOwnProperty(u) && (i = b + (b ? l : k) + f(u) + l + d(a[u], 0), m = c + n, n += o(a[u], i, m, e, g))
                        }
                    }
                return n
            };
        b.exports = g
    }, {
        "./ReactElement": 64,
        "./ReactInstanceHandles": 72,
        "./invariant": 138
    }
],
157: [
    function(a, b) {
        "use strict";
        var c = a("./emptyFunction"),
            d = c;
        b.exports = d
    }, {
        "./emptyFunction": 119
    }
],
158: [
    function(a, b) {
        b.exports = a("./lib/React")
    }, {
        "./lib/React": 40
    }
],
159: [
    function(a, b, c) {
        (function(a, d) {
            (function(e) {
                function f() {
                    if(this.isDisposed) throw new Error(rb)
                }

                function g(a) {
                    var b = typeof a;
                    return a && ("function" == b || "object" == b) || !1
                }

                function h(a) {
                    var b = [];
                    if(!g(a)) return b;
                    Ob.nonEnumArgs && a.length && l(a) && (a = Qb.call(a));
                    var c = Ob.enumPrototypes && "function" == typeof a,
                        d = Ob.enumErrorProps && (a === Ib || a instanceof Error);
                    for(var e in a) c && "prototype" == e || d && ("message" == e || "name" == e) || b.push(e);
                    if(Ob.nonEnumShadows && a !== Jb) {
                        var f = a.constructor,
                            h = -1,
                            i = Mb.length;
                        if(a === (f && f.prototype)) var j = a === stringProto ? Eb : a === Ib ? zb : Fb.call(a),
                        k = Nb[j];
                        for(; ++h < i;) e = Mb[h], k && k[e] || !Gb.call(a, e) || b.push(e)
                    }
                    return b
                }

                function i(a, b, c) {
                    for(var d = -1, e = c(a), f = e.length; ++d < f;) {
                        var g = e[d];
                        if(b(a[g], g, a) === !1) break
                    }
                    return a
                }

                function j(a, b) {
                    return i(a, b, h)
                }

                function k(a) {
                    return "function" != typeof a.toString && "string" == typeof(a + "")
                }

                function l(a) {
                    return a && "object" == typeof a ? Fb.call(a) == vb : !1
                }

                function m(a) {
                    return "function" == typeof a || !1
                }

                function n(a, b, c, d) {
                    if(a === b) return 0 !== a || 1 / a == 1 / b;
                    var e = typeof a,
                        f = typeof b;
                    if(a === a && (null == a || null == b || "function" != e && "object" != e && "function" != f && "object" != f)) return !1;
                    var g = Fb.call(a),
                        h = Fb.call(b);
                    if(g == vb && (g = Cb), h == vb && (h = Cb), g != h) return !1;
                    switch(g) {
                        case xb:
                        case yb:
                            return +a == +b;
                        case Bb:
                            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                        case Db:
                        case Eb:
                            return a == String(b)
                    }
                    var i = g == wb;
                    if(!i) {
                        if(g != Cb || !Ob.nodeClass && (k(a) || k(b))) return !1;
                        var o = !Ob.argsObject && l(a) ? Object : a.constructor,
                            p = !Ob.argsObject && l(b) ? Object : b.constructor;
                        if(!(o == p || Gb.call(a, "constructor") && Gb.call(b, "constructor") || m(o) && o instanceof o && m(p) && p instanceof p || !("constructor" in a && "constructor" in b))) return !1
                    }
                    c || (c = []), d || (d = []);
                    for(var q = c.length; q--;)
                        if(c[q] == a) return d[q] == b;
                    var r = 0;
                    if(result = !0, c.push(a), d.push(b), i) {
                        if(q = a.length, r = b.length, result = r == q)
                            for(; r--;) {
                                var s = b[r];
                                if(!(result = n(a[r], s, c, d))) break
                            }
                    } else j(b, function(b, e, f) {
                        return Gb.call(f, e) ? (r++, result = Gb.call(a, e) && n(a[e], b, c, d)) : void 0
                    }), result && j(a, function(a, b, c) {
                        return Gb.call(c, b) ? result = --r > -1 : void 0
                    });
                    return c.pop(), d.pop(), result
                }

                function o(a, b) {
                    return 1 === a.length && Array.isArray(a[b]) ? a[b] : Qb.call(a)
                }

                function p(a, b) {
                    for(var c = new Array(a), d = 0; a > d; d++) c[d] = b();
                    return c
                }

                function q(a, b) {
                    this.scheduler = a, this.disposable = b, this.isDisposed = !1
                }

                function r(a) {
                    return "number" == typeof a && bb.isFinite(a)
                }

                function s(a) {
                    return a[sb] !== e
                }

                function t(a) {
                    var b = +a;
                    return 0 === b ? b : isNaN(b) ? b : 0 > b ? -1 : 1
                }

                function u(a) {
                    var b = +a.length;
                    return isNaN(b) ? 0 : 0 !== b && r(b) ? (b = t(b) * Math.floor(Math.abs(b)), 0 >= b ? 0 : b > Ic ? Ic : b) : b
                }

                function v(a) {
                    return "[object Function]" === Object.prototype.toString.call(a) && "function" == typeof a
                }

                function w(a, b) {
                    return new jd(function(c) {
                        var d = new bc,
                            e = new cc;
                        return e.setDisposable(d), d.setDisposable(a.subscribe(c.onNext.bind(c), function(a) {
                            var d, f;
                            try {
                                f = b(a)
                            } catch(g) {
                                return void c.onError(g)
                            }
                            ob(f) && (f = Fc(f)), d = new bc, e.setDisposable(d), d.setDisposable(f.subscribe(c))
                        }, c.onCompleted.bind(c))), e
                    })
                }

                function x(a, b) {
                    var c = this;
                    return new jd(function(d) {
                        var e = 0,
                            f = a.length;
                        return c.subscribe(function(c) {
                            if(f > e) {
                                var g, h = a[e++];
                                try {
                                    g = b(c, h)
                                } catch(i) {
                                    return void d.onError(i)
                                }
                                d.onNext(g)
                            } else d.onCompleted()
                        }, d.onError.bind(d), d.onCompleted.bind(d))
                    })
                }

                function y(a) {
                    return this.map(function(b, c) {
                        var d = a(b, c);
                        return ob(d) ? Fc(d) : d
                    }).concatAll()
                }

                function z(a, b, c) {
                    for(var d = 0, e = a.length; e > d; d++)
                        if(c(a[d], b)) return d;
                    return -1
                }

                function A(a) {
                    this.comparer = a, this.set = []
                }

                function B(a) {
                    return this.select(function(b, c) {
                        var d = a(b, c);
                        return ob(d) ? Fc(d) : d
                    }).mergeObservable()
                }

                function C(a, b, c) {
                    return new jd(function(d) {
                        var e = !1,
                            f = null,
                            g = [];
                        return a.subscribe(function(a) {
                            var h, i;
                            try {
                                i = b(a)
                            } catch(j) {
                                return void d.onError(j)
                            }
                            if(h = 0, e) try {
                                h = c(i, f)
                            } catch(k) {
                                return void d.onError(k)
                            } else e = !0, f = i;
                            h > 0 && (f = i, g = []), h >= 0 && g.push(a)
                        }, d.onError.bind(d), function() {
                            d.onNext(g), d.onCompleted()
                        })
                    })
                }

                function D(a) {
                    if(0 === a.length) throw new Error(pb);
                    return a[0]
                }

                function E(a, b, c) {
                    return new jd(function(d) {
                        var e = 0,
                            f = b.length;
                        return a.subscribe(function(a) {
                            var g = !1;
                            try {
                                f > e && (g = c(a, b[e++]))
                            } catch(h) {
                                return void d.onError(h)
                            }
                            g || (d.onNext(!1), d.onCompleted())
                        }, d.onError.bind(d), function() {
                            d.onNext(e === f), d.onCompleted()
                        })
                    })
                }

                function F(a, b, c, d) {
                    if(0 > b) throw new Error(qb);
                    return new jd(function(e) {
                        var f = b;
                        return a.subscribe(function(a) {
                            0 === f && (e.onNext(a), e.onCompleted()), f--
                        }, e.onError.bind(e), function() {
                            c ? (e.onNext(d), e.onCompleted()) : e.onError(new Error(qb))
                        })
                    })
                }

                function G(a, b, c) {
                    return new jd(function(d) {
                        var e = c,
                            f = !1;
                        return a.subscribe(function(a) {
                            f ? d.onError(new Error("Sequence contains more than one element")) : (e = a, f = !0)
                        }, d.onError.bind(d), function() {
                            f || b ? (d.onNext(e), d.onCompleted()) : d.onError(new Error(pb))
                        })
                    })
                }

                function H(a, b, c) {
                    return new jd(function(d) {
                        return a.subscribe(function(a) {
                            d.onNext(a), d.onCompleted()
                        }, d.onError.bind(d), function() {
                            b ? (d.onNext(c), d.onCompleted()) : d.onError(new Error(pb))
                        })
                    })
                }

                function I(a, b, c) {
                    return new jd(function(d) {
                        var e = c,
                            f = !1;
                        return a.subscribe(function(a) {
                            e = a, f = !0
                        }, d.onError.bind(d), function() {
                            f || b ? (d.onNext(e), d.onCompleted()) : d.onError(new Error(pb))
                        })
                    })
                }

                function J(a, b, c, d) {
                    return new jd(function(f) {
                        var g = 0;
                        return a.subscribe(function(e) {
                            var h;
                            try {
                                h = b.call(c, e, g, a)
                            } catch(i) {
                                return void f.onError(i)
                            }
                            h ? (f.onNext(d ? g : e), f.onCompleted()) : g++
                        }, f.onError.bind(f), function() {
                            f.onNext(d ? -1 : e), f.onCompleted()
                        })
                    })
                }

                function K(a, b, c) {
                    if(a.addListener) return a.addListener(b, c), $b(function() {
                        a.removeListener(b, c)
                    });
                    if(a.addEventListener) return a.addEventListener(b, c, !1), $b(function() {
                        a.removeEventListener(b, c, !1)
                    });
                    throw new Error("No listener found")
                }

                function L(a, b, c) {
                    var d = new Xb;
                    if("function" == typeof a.item && "number" == typeof a.length)
                        for(var e = 0, f = a.length; f > e; e++) d.add(L(a.item(e), b, c));
                    else a && d.add(K(a, b, c));
                    return d
                }

                function M(a, b, c) {
                    return new jd(function(d) {
                        function e(a, b) {
                            j[b] = a;
                            var e;
                            if(g[b] = !0, h || (h = g.every(jb))) {
                                try {
                                    e = c.apply(null, j)
                                } catch(f) {
                                    return void d.onError(f)
                                }
                                d.onNext(e)
                            } else i && d.onCompleted()
                        }
                        var f = 2,
                            g = [!1, !1],
                            h = !1,
                            i = !1,
                            j = new Array(f);
                        return new Xb(a.subscribe(function(a) {
                            e(a, 0)
                        }, d.onError.bind(d), function() {
                            i = !0, d.onCompleted()
                        }), b.subscribe(function(a) {
                            e(a, 1)
                        }, d.onError.bind(d)))
                    })
                }

                function N(a, b) {
                    return a.groupJoin(this, b, function() {
                        return Hc()
                    }, function(a, b) {
                        return b
                    })
                }

                function O(a) {
                    var b = this;
                    return new jd(function(c) {
                        var d = new md,
                            e = new Xb,
                            f = new dc(e);
                        return c.onNext(Tb(d, f)), e.add(b.subscribe(function(a) {
                            d.onNext(a)
                        }, function(a) {
                            d.onError(a), c.onError(a)
                        }, function() {
                            d.onCompleted(), c.onCompleted()
                        })), e.add(a.subscribe(function() {
                            d.onCompleted(), d = new md, c.onNext(Tb(d, f))
                        }, function(a) {
                            d.onError(a), c.onError(a)
                        }, function() {
                            d.onCompleted(), c.onCompleted()
                        })), f
                    })
                }

                function P(a) {
                    var b = this;
                    return new jd(function(c) {
                        var d, e = new cc,
                            f = new Xb(e),
                            g = new dc(f),
                            h = new md;
                        return c.onNext(Tb(h, g)), f.add(b.subscribe(function(a) {
                            h.onNext(a)
                        }, function(a) {
                            h.onError(a), c.onError(a)
                        }, function() {
                            h.onCompleted(), c.onCompleted()
                        })), d = function() {
                            var b, f;
                            try {
                                f = a()
                            } catch(i) {
                                return void c.onError(i)
                            }
                            b = new bc, e.setDisposable(b), b.setDisposable(f.take(1).subscribe(hb, function(a) {
                                h.onError(a), c.onError(a)
                            }, function() {
                                h.onCompleted(), h = new md, c.onNext(Tb(h, g)), d()
                            }))
                        }, d(), g
                    })
                }

                function Q(a, b) {
                    return new tc(function() {
                        return new sc(function() {
                            return a() ? {
                                done: !1,
                                value: b
                            } : {
                                done: !0,
                                value: e
                            }
                        })
                    })
                }

                function R(a) {
                    this.patterns = a
                }

                function S(a, b) {
                    this.expression = a, this.selector = b
                }

                function T(a, b, c) {
                    var d = a.get(b);
                    if(!d) {
                        var e = new gd(b, c);
                        return a.set(b, e), e
                    }
                    return d
                }

                function U(a, b, c) {
                    var d, e;
                    for(this.joinObserverArray = a, this.onNext = b, this.onCompleted = c, this.joinObservers = new fd, d = 0; d < this.joinObserverArray.length; d++) e = this.joinObserverArray[d], this.joinObservers.set(e, e)
                }

                function V(a, b) {
                    return new jd(function(c) {
                        return b.scheduleWithAbsolute(a, function() {
                            c.onNext(0), c.onCompleted()
                        })
                    })
                }

                function W(a, b, c) {
                    var d = hc(b);
                    return new jd(function(b) {
                        var e = 0,
                            f = a;
                        return c.scheduleRecursiveWithAbsolute(f, function(a) {
                            var g;
                            d > 0 && (g = c.now(), f += d, g >= f && (f = g + d)), b.onNext(e++), a(f)
                        })
                    })
                }

                function X(a, b) {
                    var c = hc(a);
                    return new jd(function(a) {
                        return b.scheduleWithRelative(c, function() {
                            a.onNext(0), a.onCompleted()
                        })
                    })
                }

                function Y(a, b, c) {
                    return a === b ? new jd(function(a) {
                        return c.schedulePeriodicWithState(0, b, function(b) {
                            return a.onNext(b), b + 1
                        })
                    }) : Gc(function() {
                        return W(c.now() + a, b, c)
                    })
                }

                function Z(a, b, c) {
                    return new jd(function(d) {
                        var e, f = !1,
                            g = new cc,
                            h = null,
                            i = [],
                            j = !1;
                        return e = a.materialize().timestamp(c).subscribe(function(a) {
                            var e, k;
                            "E" === a.value.kind ? (i = [], i.push(a), h = a.value.exception, k = !j) : (i.push({
                                value: a.value,
                                timestamp: a.timestamp + b
                            }), k = !f, f = !0), k && (null !== h ? d.onError(h) : (e = new bc, g.setDisposable(e), e.setDisposable(c.scheduleRecursiveWithRelative(b, function(a) {
                                var b, e, g, k;
                                if(null === h) {
                                    j = !0;
                                    do g = null, i.length > 0 && i[0].timestamp - c.now() <= 0 && (g = i.shift().value), null !== g && g.accept(d); while (null !== g);
                                    k = !1, e = 0, i.length > 0 ? (k = !0, e = Math.max(0, i[0].timestamp - c.now())) : f = !1, b = h, j = !1, null !== b ? d.onError(b) : k && a(e)
                                }
                            }))))
                        }), new Xb(e, g)
                    })
                }

                function $(a, b, c) {
                    return Gc(function() {
                        return Z(a, b - c.now(), c)
                    })
                }

                function _(a, b) {
                    return new jd(function(c) {
                        function d() {
                            g && (g = !1, c.onNext(f)), e && c.onCompleted()
                        }
                        var e, f, g;
                        return new Xb(a.subscribe(function(a) {
                            g = !0, f = a
                        }, c.onError.bind(c), function() {
                            e = !0
                        }), b.subscribe(d, c.onError.bind(c), d))
                    })
                }
                var ab = {
                    "boolean": !1,
                    "function": !0,
                    object: !0,
                    number: !1,
                    string: !1,
                    undefined: !1
                }, bb = ab[typeof window] && window || this,
                    cb = ab[typeof c] && c && !c.nodeType && c,
                    db = ab[typeof b] && b && !b.nodeType && b,
                    eb = db && db.exports === cb && cb,
                    fb = ab[typeof d] && d;
                !fb || fb.global !== fb && fb.window !== fb || (bb = fb);
                var gb = {
                    internals: {},
                    config: {
                        Promise: bb.Promise
                    },
                    helpers: {}
                }, hb = gb.helpers.noop = function() {}, ib = (gb.helpers.notDefined = function(a) {
                        return "undefined" == typeof a
                    }, gb.helpers.isScheduler = function(a) {
                        return a instanceof gb.Scheduler
                    }),
                    jb = gb.helpers.identity = function(a) {
                        return a
                    }, kb = (gb.helpers.pluck = function(a) {
                        return function(b) {
                            return b[a]
                        }
                    }, gb.helpers.just = function(a) {
                        return function() {
                            return a
                        }
                    }, gb.helpers.defaultNow = Date.now),
                    lb = gb.helpers.defaultComparer = function(a, b) {
                        return Pb(a, b)
                    }, mb = gb.helpers.defaultSubComparer = function(a, b) {
                        return a > b ? 1 : b > a ? -1 : 0
                    }, nb = (gb.helpers.defaultKeySerializer = function(a) {
                        return a.toString()
                    }, gb.helpers.defaultError = function(a) {
                        throw a
                    }),
                    ob = gb.helpers.isPromise = function(a) {
                        return !!a && "function" == typeof a.then
                    }, pb = (gb.helpers.asArray = function() {
                        return Array.prototype.slice.call(arguments)
                    }, gb.helpers.not = function(a) {
                        return !a
                    }, "Sequence contains no elements."),
                    qb = "Argument out of range",
                    rb = "Object has been disposed",
                    sb = "function" == typeof Symbol && Symbol.iterator || "_es6shim_iterator_";
                bb.Set && "function" == typeof(new bb.Set)["@@iterator"] && (sb = "@@iterator");
                var tb, ub = {
                        done: !0,
                        value: e
                    }, vb = "[object Arguments]",
                    wb = "[object Array]",
                    xb = "[object Boolean]",
                    yb = "[object Date]",
                    zb = "[object Error]",
                    Ab = "[object Function]",
                    Bb = "[object Number]",
                    Cb = "[object Object]",
                    Db = "[object RegExp]",
                    Eb = "[object String]",
                    Fb = Object.prototype.toString,
                    Gb = Object.prototype.hasOwnProperty,
                    Hb = Fb.call(arguments) == vb,
                    Ib = Error.prototype,
                    Jb = Object.prototype,
                    Kb = Jb.propertyIsEnumerable;
                try {
                    tb = !(Fb.call(document) == Cb && !({
                        toString: 0
                    } + ""))
                } catch(Lb) {
                    tb = !0
                }
                var Mb = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                    Nb = {};
                Nb[wb] = Nb[yb] = Nb[Bb] = {
                    constructor: !0,
                    toLocaleString: !0,
                    toString: !0,
                    valueOf: !0
                }, Nb[xb] = Nb[Eb] = {
                    constructor: !0,
                    toString: !0,
                    valueOf: !0
                }, Nb[zb] = Nb[Ab] = Nb[Db] = {
                    constructor: !0,
                    toString: !0
                }, Nb[Cb] = {
                    constructor: !0
                };
                var Ob = {};
                ! function() {
                    var a = function() {
                        this.x = 1
                    }, b = [];
                    a.prototype = {
                        valueOf: 1,
                        y: 1
                    };
                    for(var c in new a) b.push(c);
                    for(c in arguments);
                    Ob.enumErrorProps = Kb.call(Ib, "message") || Kb.call(Ib, "name"), Ob.enumPrototypes = Kb.call(a, "prototype"), Ob.nonEnumArgs = 0 != c, Ob.nonEnumShadows = !/valueOf/.test(b)
                }(1), Hb || (l = function(a) {
                    return a && "object" == typeof a ? Gb.call(a, "callee") : !1
                }), m(/x/) && (m = function(a) {
                    return "function" == typeof a && Fb.call(a) == Ab
                });
                var Pb = gb.internals.isEqual = function(a, b) {
                    return n(a, b, [], [])
                }, Qb = Array.prototype.slice,
                    Rb = ({}.hasOwnProperty, this.inherits = gb.internals.inherits = function(a, b) {
                        function c() {
                            this.constructor = a
                        }
                        c.prototype = b.prototype, a.prototype = new c
                    }),
                    Sb = gb.internals.addProperties = function(a) {
                        for(var b = Qb.call(arguments, 1), c = 0, d = b.length; d > c; c++) {
                            var e = b[c];
                            for(var f in e) a[f] = e[f]
                        }
                    }, Tb = gb.internals.addRef = function(a, b) {
                        return new jd(function(c) {
                            return new Xb(b.getDisposable(), a.subscribe(c))
                        })
                    }, Ub = function(a, b) {
                        this.id = a, this.value = b
                    };
                Ub.prototype.compareTo = function(a) {
                    var b = this.value.compareTo(a.value);
                    return 0 === b && (b = this.id - a.id), b
                };
                var Vb = gb.internals.PriorityQueue = function(a) {
                    this.items = new Array(a), this.length = 0
                }, Wb = Vb.prototype;
                Wb.isHigherPriority = function(a, b) {
                    return this.items[a].compareTo(this.items[b]) < 0
                }, Wb.percolate = function(a) {
                    if(!(a >= this.length || 0 > a)) {
                        var b = a - 1 >> 1;
                        if(!(0 > b || b === a) && this.isHigherPriority(a, b)) {
                            var c = this.items[a];
                            this.items[a] = this.items[b], this.items[b] = c, this.percolate(b)
                        }
                    }
                }, Wb.heapify = function(a) {
                    if(a === e && (a = 0), !(a >= this.length || 0 > a)) {
                        var b = 2 * a + 1,
                            c = 2 * a + 2,
                            d = a;
                        if(b < this.length && this.isHigherPriority(b, d) && (d = b), c < this.length && this.isHigherPriority(c, d) && (d = c), d !== a) {
                            var f = this.items[a];
                            this.items[a] = this.items[d], this.items[d] = f, this.heapify(d)
                        }
                    }
                }, Wb.peek = function() {
                    return this.items[0].value
                }, Wb.removeAt = function(a) {
                    this.items[a] = this.items[--this.length], delete this.items[this.length], this.heapify()
                }, Wb.dequeue = function() {
                    var a = this.peek();
                    return this.removeAt(0), a
                }, Wb.enqueue = function(a) {
                    var b = this.length++;
                    this.items[b] = new Ub(Vb.count++, a), this.percolate(b)
                }, Wb.remove = function(a) {
                    for(var b = 0; b < this.length; b++)
                        if(this.items[b].value === a) return this.removeAt(b), !0;
                    return !1
                }, Vb.count = 0;
                var Xb = gb.CompositeDisposable = function() {
                    this.disposables = o(arguments, 0), this.isDisposed = !1, this.length = this.disposables.length
                }, Yb = Xb.prototype;
                Yb.add = function(a) {
                    this.isDisposed ? a.dispose() : (this.disposables.push(a), this.length++)
                }, Yb.remove = function(a) {
                    var b = !1;
                    if(!this.isDisposed) {
                        var c = this.disposables.indexOf(a); - 1 !== c && (b = !0, this.disposables.splice(c, 1), this.length--, a.dispose())
                    }
                    return b
                }, Yb.dispose = function() {
                    if(!this.isDisposed) {
                        this.isDisposed = !0;
                        var a = this.disposables.slice(0);
                        this.disposables = [], this.length = 0;
                        for(var b = 0, c = a.length; c > b; b++) a[b].dispose()
                    }
                }, Yb.clear = function() {
                    var a = this.disposables.slice(0);
                    this.disposables = [], this.length = 0;
                    for(var b = 0, c = a.length; c > b; b++) a[b].dispose()
                }, Yb.contains = function(a) {
                    return -1 !== this.disposables.indexOf(a)
                }, Yb.toArray = function() {
                    return this.disposables.slice(0)
                };
                var Zb = gb.Disposable = function(a) {
                    this.isDisposed = !1, this.action = a || hb
                };
                Zb.prototype.dispose = function() {
                    this.isDisposed || (this.action(), this.isDisposed = !0)
                };
                var $b = Zb.create = function(a) {
                    return new Zb(a)
                }, _b = Zb.empty = {
                        dispose: hb
                    }, ac = function() {
                        function a(a) {
                            this.isSingle = a, this.isDisposed = !1, this.current = null
                        }
                        var b = a.prototype;
                        return b.getDisposable = function() {
                            return this.current
                        }, b.setDisposable = function(a) {
                            if(this.current && this.isSingle) throw new Error("Disposable has already been assigned");
                            var b, c = this.isDisposed;
                            c || (b = this.current, this.current = a), b && b.dispose(), c && a && a.dispose()
                        }, b.dispose = function() {
                            var a;
                            this.isDisposed || (this.isDisposed = !0, a = this.current, this.current = null), a && a.dispose()
                        }, a
                    }(),
                    bc = gb.SingleAssignmentDisposable = function(a) {
                        function b() {
                            a.call(this, !0)
                        }
                        return Rb(b, a), b
                    }(ac),
                    cc = gb.SerialDisposable = function(a) {
                        function b() {
                            a.call(this, !1)
                        }
                        return Rb(b, a), b
                    }(ac),
                    dc = gb.RefCountDisposable = function() {
                        function a(a) {
                            this.disposable = a, this.disposable.count++, this.isInnerDisposed = !1
                        }

                        function b(a) {
                            this.underlyingDisposable = a, this.isDisposed = !1, this.isPrimaryDisposed = !1, this.count = 0
                        }
                        return a.prototype.dispose = function() {
                            this.disposable.isDisposed || this.isInnerDisposed || (this.isInnerDisposed = !0, this.disposable.count--, 0 === this.disposable.count && this.disposable.isPrimaryDisposed && (this.disposable.isDisposed = !0, this.disposable.underlyingDisposable.dispose()))
                        }, b.prototype.dispose = function() {
                            this.isDisposed || this.isPrimaryDisposed || (this.isPrimaryDisposed = !0, 0 === this.count && (this.isDisposed = !0, this.underlyingDisposable.dispose()))
                        }, b.prototype.getDisposable = function() {
                            return this.isDisposed ? _b : new a(this)
                        }, b
                    }();
                q.prototype.dispose = function() {
                    var a = this;
                    this.scheduler.schedule(function() {
                        a.isDisposed || (a.isDisposed = !0, a.disposable.dispose())
                    })
                };
                var ec = gb.internals.ScheduledItem = function(a, b, c, d, e) {
                    this.scheduler = a, this.state = b, this.action = c, this.dueTime = d, this.comparer = e || mb, this.disposable = new bc
                };
                ec.prototype.invoke = function() {
                    this.disposable.setDisposable(this.invokeCore())
                }, ec.prototype.compareTo = function(a) {
                    return this.comparer(this.dueTime, a.dueTime)
                }, ec.prototype.isCancelled = function() {
                    return this.disposable.isDisposed
                }, ec.prototype.invokeCore = function() {
                    return this.action(this.scheduler, this.state)
                };
                var fc, gc = gb.Scheduler = function() {
                        function a(a, b, c, d) {
                            this.now = a, this._schedule = b, this._scheduleRelative = c, this._scheduleAbsolute = d
                        }

                        function b(a, b) {
                            var c = b.first,
                                d = b.second,
                                e = new Xb,
                                f = function(b) {
                                    d(b, function(b) {
                                        var c = !1,
                                            d = !1,
                                            g = a.scheduleWithState(b, function(a, b) {
                                                return c ? e.remove(g) : d = !0, f(b), _b
                                            });
                                        d || (e.add(g), c = !0)
                                    })
                                };
                            return f(c), e
                        }

                        function c(a, b, c) {
                            var d = b.first,
                                e = b.second,
                                f = new Xb,
                                g = function(b) {
                                    e(b, function(b, d) {
                                        var e = !1,
                                            h = !1,
                                            i = a[c].call(a, b, d, function(a, b) {
                                                return e ? f.remove(i) : h = !0, g(b), _b
                                            });
                                        h || (f.add(i), e = !0)
                                    })
                                };
                            return g(d), f
                        }

                        function d(a, b) {
                            return b(), _b
                        }
                        var e = a.prototype;
                        return e.catchException = e["catch"] = function(a) {
                            return new nc(this, a)
                        }, e.schedulePeriodic = function(a, b) {
                            return this.schedulePeriodicWithState(null, a, function() {
                                b()
                            })
                        }, e.schedulePeriodicWithState = function(a, b, c) {
                            var d = a,
                                e = setInterval(function() {
                                    d = c(d)
                                }, b);
                            return $b(function() {
                                clearInterval(e)
                            })
                        }, e.schedule = function(a) {
                            return this._schedule(a, d)
                        }, e.scheduleWithState = function(a, b) {
                            return this._schedule(a, b)
                        }, e.scheduleWithRelative = function(a, b) {
                            return this._scheduleRelative(b, a, d)
                        }, e.scheduleWithRelativeAndState = function(a, b, c) {
                            return this._scheduleRelative(a, b, c)
                        }, e.scheduleWithAbsolute = function(a, b) {
                            return this._scheduleAbsolute(b, a, d)
                        }, e.scheduleWithAbsoluteAndState = function(a, b, c) {
                            return this._scheduleAbsolute(a, b, c)
                        }, e.scheduleRecursive = function(a) {
                            return this.scheduleRecursiveWithState(a, function(a, b) {
                                a(function() {
                                    b(a)
                                })
                            })
                        }, e.scheduleRecursiveWithState = function(a, c) {
                            return this.scheduleWithState({
                                first: a,
                                second: c
                            }, function(a, c) {
                                return b(a, c)
                            })
                        }, e.scheduleRecursiveWithRelative = function(a, b) {
                            return this.scheduleRecursiveWithRelativeAndState(b, a, function(a, b) {
                                a(function(c) {
                                    b(a, c)
                                })
                            })
                        }, e.scheduleRecursiveWithRelativeAndState = function(a, b, d) {
                            return this._scheduleRelative({
                                first: a,
                                second: d
                            }, b, function(a, b) {
                                return c(a, b, "scheduleWithRelativeAndState")
                            })
                        }, e.scheduleRecursiveWithAbsolute = function(a, b) {
                            return this.scheduleRecursiveWithAbsoluteAndState(b, a, function(a, b) {
                                a(function(c) {
                                    b(a, c)
                                })
                            })
                        }, e.scheduleRecursiveWithAbsoluteAndState = function(a, b, d) {
                            return this._scheduleAbsolute({
                                first: a,
                                second: d
                            }, b, function(a, b) {
                                return c(a, b, "scheduleWithAbsoluteAndState")
                            })
                        }, a.now = kb, a.normalize = function(a) {
                            return 0 > a && (a = 0), a
                        }, a
                    }(),
                    hc = gc.normalize,
                    ic = gb.internals.SchedulePeriodicRecursive = function() {
                        function a(a, b) {
                            b(0, this._period);
                            try {
                                this._state = this._action(this._state)
                            } catch(c) {
                                throw this._cancel.dispose(), c
                            }
                        }

                        function b(a, b, c, d) {
                            this._scheduler = a, this._state = b, this._period = c, this._action = d
                        }
                        return b.prototype.start = function() {
                            var b = new bc;
                            return this._cancel = b, b.setDisposable(this._scheduler.scheduleRecursiveWithRelativeAndState(0, this._period, a.bind(this))), b
                        }, b
                    }(),
                    jc = gc.immediate = function() {
                        function a(a, b) {
                            return b(this, a)
                        }

                        function b(a, b, c) {
                            for(var d = hc(d); d - this.now() > 0;);
                            return c(this, a)
                        }

                        function c(a, b, c) {
                            return this.scheduleWithRelativeAndState(a, b - this.now(), c)
                        }
                        return new gc(kb, a, b, c)
                    }(),
                    kc = gc.currentThread = function() {
                        function a(a) {
                            for(var b; a.length > 0;)
                                if(b = a.dequeue(), !b.isCancelled()) {
                                    for(; b.dueTime - gc.now() > 0;);
                                    b.isCancelled() || b.invoke()
                                }
                        }

                        function b(a, b) {
                            return this.scheduleWithRelativeAndState(a, 0, b)
                        }

                        function c(b, c, d) {
                            var f = this.now() + gc.normalize(c),
                                g = new ec(this, b, d, f);
                            if(e) e.enqueue(g);
                            else {
                                e = new Vb(4), e.enqueue(g);
                                try {
                                    a(e)
                                } catch(h) {
                                    throw h
                                } finally {
                                    e = null
                                }
                            }
                            return g.disposable
                        }

                        function d(a, b, c) {
                            return this.scheduleWithRelativeAndState(a, b - this.now(), c)
                        }
                        var e, f = new gc(kb, b, c, d);
                        return f.scheduleRequired = function() {
                            return !e
                        }, f.ensureTrampoline = function(a) {
                            e ? a() : this.schedule(a)
                        }, f
                    }(),
                    lc = hb;
                ! function() {
                    function b() {
                        if(!bb.postMessage || bb.importScripts) return !1;
                        var a = !1,
                            b = bb.onmessage;
                        return bb.onmessage = function() {
                            a = !0
                        }, bb.postMessage("", "*"), bb.onmessage = b, a
                    }

                    function c(a) {
                        if("string" == typeof a.data && a.data.substring(0, g.length) === g) {
                            var b = a.data.substring(g.length),
                                c = h[b];
                            c(), delete h[b]
                        }
                    }
                    var d = RegExp("^" + String(Fb).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                        e = "function" == typeof(e = fb && eb && fb.setImmediate) && !d.test(e) && e,
                        f = "function" == typeof(f = fb && eb && fb.clearImmediate) && !d.test(f) && f;
                    if("undefined" != typeof a && "[object process]" === {}.toString.call(a)) fc = a.nextTick;
                    else if("function" == typeof e) fc = e, lc = f;
                    else if(b()) {
                        var g = "ms.rx.schedule" + Math.random(),
                            h = {}, i = 0;
                        bb.addEventListener ? bb.addEventListener("message", c, !1) : bb.attachEvent("onmessage", c, !1), fc = function(a) {
                            var b = i++;
                            h[b] = a, bb.postMessage(g + b, "*")
                        }
                    } else if(bb.MessageChannel) {
                        var j = new bb.MessageChannel,
                            k = {}, l = 0;
                        j.port1.onmessage = function(a) {
                            var b = a.data,
                                c = k[b];
                            c(), delete k[b]
                        }, fc = function(a) {
                            var b = l++;
                            k[b] = a, j.port2.postMessage(b)
                        }
                    } else "document" in bb && "onreadystatechange" in bb.document.createElement("script") ? fc = function(a) {
                        var b = bb.document.createElement("script");
                        b.onreadystatechange = function() {
                            a(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null
                        }, bb.document.documentElement.appendChild(b)
                    } : (fc = function(a) {
                        return setTimeout(a, 0)
                    }, lc = clearTimeout)
                }();
                var mc = gc.timeout = function() {
                    function a(a, b) {
                        var c = this,
                            d = new bc,
                            e = fc(function() {
                                d.isDisposed || d.setDisposable(b(c, a))
                            });
                        return new Xb(d, $b(function() {
                            lc(e)
                        }))
                    }

                    function b(a, b, c) {
                        var d = this,
                            e = gc.normalize(b);
                        if(0 === e) return d.scheduleWithState(a, c);
                        var f = new bc,
                            g = setTimeout(function() {
                                f.isDisposed || f.setDisposable(c(d, a))
                            }, e);
                        return new Xb(f, $b(function() {
                            clearTimeout(g)
                        }))
                    }

                    function c(a, b, c) {
                        return this.scheduleWithRelativeAndState(a, b - this.now(), c)
                    }
                    return new gc(kb, a, b, c)
                }(),
                    nc = function(a) {
                        function b() {
                            return this._scheduler.now()
                        }

                        function c(a, b) {
                            return this._scheduler.scheduleWithState(a, this._wrap(b))
                        }

                        function d(a, b, c) {
                            return this._scheduler.scheduleWithRelativeAndState(a, b, this._wrap(c))
                        }

                        function e(a, b, c) {
                            return this._scheduler.scheduleWithAbsoluteAndState(a, b, this._wrap(c))
                        }

                        function f(f, g) {
                            this._scheduler = f, this._handler = g, this._recursiveOriginal = null, this._recursiveWrapper = null, a.call(this, b, c, d, e)
                        }
                        return Rb(f, a), f.prototype._clone = function(a) {
                            return new f(a, this._handler)
                        }, f.prototype._wrap = function(a) {
                            var b = this;
                            return function(c, d) {
                                try {
                                    return a(b._getRecursiveWrapper(c), d)
                                } catch(e) {
                                    if(!b._handler(e)) throw e;
                                    return _b
                                }
                            }
                        }, f.prototype._getRecursiveWrapper = function(a) {
                            if(this._recursiveOriginal !== a) {
                                this._recursiveOriginal = a;
                                var b = this._clone(a);
                                b._recursiveOriginal = a, b._recursiveWrapper = b, this._recursiveWrapper = b
                            }
                            return this._recursiveWrapper
                        }, f.prototype.schedulePeriodicWithState = function(a, b, c) {
                            var d = this,
                                e = !1,
                                f = new bc;
                            return f.setDisposable(this._scheduler.schedulePeriodicWithState(a, b, function(a) {
                                if(e) return null;
                                try {
                                    return c(a)
                                } catch(b) {
                                    if(e = !0, !d._handler(b)) throw b;
                                    return f.dispose(), null
                                }
                            })), f
                        }, f
                    }(gc),
                    oc = gb.Notification = function() {
                        function a(a, b) {
                            this.hasValue = null == b ? !1 : b, this.kind = a
                        }
                        return a.prototype.accept = function(a, b, c) {
                            return a && "object" == typeof a ? this._acceptObservable(a) : this._accept(a, b, c)
                        }, a.prototype.toObservable = function(a) {
                            var b = this;
                            return ib(a) || (a = jc), new jd(function(c) {
                                return a.schedule(function() {
                                    b._acceptObservable(c), "N" === b.kind && c.onCompleted()
                                })
                            })
                        }, a
                    }(),
                    pc = oc.createOnNext = function() {
                        function a(a) {
                            return a(this.value)
                        }

                        function b(a) {
                            return a.onNext(this.value)
                        }

                        function c() {
                            return "OnNext(" + this.value + ")"
                        }
                        return function(d) {
                            var e = new oc("N", !0);
                            return e.value = d, e._accept = a, e._acceptObservable = b, e.toString = c, e
                        }
                    }(),
                    qc = oc.createOnError = function() {
                        function a(a, b) {
                            return b(this.exception)
                        }

                        function b(a) {
                            return a.onError(this.exception)
                        }

                        function c() {
                            return "OnError(" + this.exception + ")"
                        }
                        return function(d) {
                            var e = new oc("E");
                            return e.exception = d, e._accept = a, e._acceptObservable = b, e.toString = c, e
                        }
                    }(),
                    rc = oc.createOnCompleted = function() {
                        function a(a, b, c) {
                            return c()
                        }

                        function b(a) {
                            return a.onCompleted()
                        }

                        function c() {
                            return "OnCompleted()"
                        }
                        return function() {
                            var d = new oc("C");
                            return d._accept = a, d._acceptObservable = b, d.toString = c, d
                        }
                    }(),
                    sc = gb.internals.Enumerator = function(a) {
                        this._next = a
                    };
                sc.prototype.next = function() {
                    return this._next()
                }, sc.prototype[sb] = function() {
                    return this
                };
                var tc = gb.internals.Enumerable = function(a) {
                    this._iterator = a
                };
                tc.prototype[sb] = function() {
                    return this._iterator()
                }, tc.prototype.concat = function() {
                    var a = this;
                    return new jd(function(b) {
                        var c;
                        try {
                            c = a[sb]()
                        } catch(d) {
                            return void b.onError()
                        }
                        var e, f = new cc,
                            g = jc.scheduleRecursive(function(a) {
                                var d;
                                if(!e) {
                                    try {
                                        d = c.next()
                                    } catch(g) {
                                        return void b.onError(g)
                                    }
                                    if(d.done) return void b.onCompleted();
                                    var h = d.value;
                                    ob(h) && (h = Fc(h));
                                    var i = new bc;
                                    f.setDisposable(i), i.setDisposable(h.subscribe(b.onNext.bind(b), b.onError.bind(b), function() {
                                        a()
                                    }))
                                }
                            });
                        return new Xb(f, g, $b(function() {
                            e = !0
                        }))
                    })
                }, tc.prototype.catchException = function() {
                    var a = this;
                    return new jd(function(b) {
                        var c;
                        try {
                            c = a[sb]()
                        } catch(d) {
                            return void b.onError()
                        }
                        var e, f, g = new cc,
                            h = jc.scheduleRecursive(function(a) {
                                if(!e) {
                                    var d;
                                    try {
                                        d = c.next()
                                    } catch(h) {
                                        return void b.onError(h)
                                    }
                                    if(d.done) return void(f ? b.onError(f) : b.onCompleted());
                                    var i = d.value;
                                    ob(i) && (i = Fc(i));
                                    var j = new bc;
                                    g.setDisposable(j), j.setDisposable(i.subscribe(b.onNext.bind(b), function(b) {
                                        f = b, a()
                                    }, b.onCompleted.bind(b)))
                                }
                            });
                        return new Xb(g, h, $b(function() {
                            e = !0
                        }))
                    })
                };
                var uc = tc.repeat = function(a, b) {
                    return null == b && (b = -1), new tc(function() {
                        var c = b;
                        return new sc(function() {
                            return 0 === c ? ub : (c > 0 && c--, {
                                done: !1,
                                value: a
                            })
                        })
                    })
                }, vc = tc.forEach = function(a, b, c) {
                        return b || (b = jb), new tc(function() {
                            var d = -1;
                            return new sc(function() {
                                return ++d < a.length ? {
                                    done: !1,
                                    value: b.call(c, a[d], d, a)
                                } : ub
                            })
                        })
                    }, wc = gb.Observer = function() {};
                wc.prototype.toNotifier = function() {
                    var a = this;
                    return function(b) {
                        return b.accept(a)
                    }
                }, wc.prototype.asObserver = function() {
                    return new Ac(this.onNext.bind(this), this.onError.bind(this), this.onCompleted.bind(this))
                }, wc.prototype.checked = function() {
                    return new Bc(this)
                };
                var xc = wc.create = function(a, b, c) {
                    return a || (a = hb), b || (b = nb), c || (c = hb), new Ac(a, b, c)
                };
                wc.fromNotifier = function(a) {
                    return new Ac(function(b) {
                        return a(pc(b))
                    }, function(b) {
                        return a(qc(b))
                    }, function() {
                        return a(rc())
                    })
                }, wc.notifyOn = function(a) {
                    return new Dc(a, this)
                };
                var yc, zc = gb.internals.AbstractObserver = function(a) {
                        function b() {
                            this.isStopped = !1, a.call(this)
                        }
                        return Rb(b, a), b.prototype.onNext = function(a) {
                            this.isStopped || this.next(a)
                        }, b.prototype.onError = function(a) {
                            this.isStopped || (this.isStopped = !0, this.error(a))
                        }, b.prototype.onCompleted = function() {
                            this.isStopped || (this.isStopped = !0, this.completed())
                        }, b.prototype.dispose = function() {
                            this.isStopped = !0
                        }, b.prototype.fail = function(a) {
                            return this.isStopped ? !1 : (this.isStopped = !0, this.error(a), !0)
                        }, b
                    }(wc),
                    Ac = gb.AnonymousObserver = function(a) {
                        function b(b, c, d) {
                            a.call(this), this._onNext = b, this._onError = c, this._onCompleted = d
                        }
                        return Rb(b, a), b.prototype.next = function(a) {
                            this._onNext(a)
                        }, b.prototype.error = function(a) {
                            this._onError(a)
                        }, b.prototype.completed = function() {
                            this._onCompleted()
                        }, b
                    }(zc),
                    Bc = function(a) {
                        function b(b) {
                            a.call(this), this._observer = b, this._state = 0
                        }
                        Rb(b, a);
                        var c = b.prototype;
                        return c.onNext = function(a) {
                            this.checkAccess();
                            try {
                                this._observer.onNext(a)
                            } catch(b) {
                                throw b
                            } finally {
                                this._state = 0
                            }
                        }, c.onError = function(a) {
                            this.checkAccess();
                            try {
                                this._observer.onError(a)
                            } catch(b) {
                                throw b
                            } finally {
                                this._state = 2
                            }
                        }, c.onCompleted = function() {
                            this.checkAccess();
                            try {
                                this._observer.onCompleted()
                            } catch(a) {
                                throw a
                            } finally {
                                this._state = 2
                            }
                        }, c.checkAccess = function() {
                            if(1 === this._state) throw new Error("Re-entrancy detected");
                            if(2 === this._state) throw new Error("Observer completed");
                            0 === this._state && (this._state = 1)
                        }, b
                    }(wc),
                    Cc = gb.internals.ScheduledObserver = function(a) {
                        function b(b, c) {
                            a.call(this), this.scheduler = b, this.observer = c, this.isAcquired = !1, this.hasFaulted = !1, this.queue = [], this.disposable = new cc
                        }
                        return Rb(b, a), b.prototype.next = function(a) {
                            var b = this;
                            this.queue.push(function() {
                                b.observer.onNext(a)
                            })
                        }, b.prototype.error = function(a) {
                            var b = this;
                            this.queue.push(function() {
                                b.observer.onError(a)
                            })
                        }, b.prototype.completed = function() {
                            var a = this;
                            this.queue.push(function() {
                                a.observer.onCompleted()
                            })
                        }, b.prototype.ensureActive = function() {
                            var a = !1,
                                b = this;
                            !this.hasFaulted && this.queue.length > 0 && (a = !this.isAcquired, this.isAcquired = !0), a && this.disposable.setDisposable(this.scheduler.scheduleRecursive(function(a) {
                                var c;
                                if(!(b.queue.length > 0)) return void(b.isAcquired = !1);
                                c = b.queue.shift();
                                try {
                                    c()
                                } catch(d) {
                                    throw b.queue = [], b.hasFaulted = !0, d
                                }
                                a()
                            }))
                        }, b.prototype.dispose = function() {
                            a.prototype.dispose.call(this), this.disposable.dispose()
                        }, b
                    }(zc),
                    Dc = function(a) {
                        function b() {
                            a.apply(this, arguments)
                        }
                        return Rb(b, a), b.prototype.next = function(b) {
                            a.prototype.next.call(this, b), this.ensureActive()
                        }, b.prototype.error = function(b) {
                            a.prototype.error.call(this, b), this.ensureActive()
                        }, b.prototype.completed = function() {
                            a.prototype.completed.call(this), this.ensureActive()
                        }, b
                    }(Cc),
                    Ec = gb.Observable = function() {
                        function a(a) {
                            this._subscribe = a
                        }
                        return yc = a.prototype, yc.subscribe = yc.forEach = function(a, b, c) {
                            var d = "object" == typeof a ? a : xc(a, b, c);
                            return this._subscribe(d)
                        }, a
                    }();
                yc.observeOn = function(a) {
                    var b = this;
                    return new jd(function(c) {
                        return b.subscribe(new Dc(a, c))
                    })
                }, yc.subscribeOn = function(a) {
                    var b = this;
                    return new jd(function(c) {
                        var d = new bc,
                            e = new cc;
                        return e.setDisposable(d), d.setDisposable(a.schedule(function() {
                            e.setDisposable(new q(a, b.subscribe(c)))
                        })), e
                    })
                };
                var Fc = Ec.fromPromise = function(a) {
                    return new jd(function(b) {
                        return a.then(function(a) {
                            b.onNext(a), b.onCompleted()
                        }, function(a) {
                            b.onError(a)
                        }),
                        function() {
                            a && a.abort && a.abort()
                        }
                    })
                };
                yc.toPromise = function(a) {
                    if(a || (a = gb.config.Promise), !a) throw new Error("Promise type not provided nor in Rx.config.Promise");
                    var b = this;
                    return new a(function(a, c) {
                        var d, e = !1;
                        b.subscribe(function(a) {
                            d = a, e = !0
                        }, function(a) {
                            c(a)
                        }, function() {
                            e && a(d)
                        })
                    })
                }, yc.toArray = function() {
                    var a = this;
                    return new jd(function(b) {
                        var c = [];
                        return a.subscribe(c.push.bind(c), b.onError.bind(b), function() {
                            b.onNext(c), b.onCompleted()
                        })
                    })
                }, Ec.create = Ec.createWithDisposable = function(a) {
                    return new jd(a)
                };
                var Gc = Ec.defer = function(a) {
                    return new jd(function(b) {
                        var c;
                        try {
                            c = a()
                        } catch(d) {
                            return Mc(d).subscribe(b)
                        }
                        return ob(c) && (c = Fc(c)), c.subscribe(b)
                    })
                }, Hc = Ec.empty = function(a) {
                        return ib(a) || (a = jc), new jd(function(b) {
                            return a.schedule(function() {
                                b.onCompleted()
                            })
                        })
                    }, Ic = Math.pow(2, 53) - 1;
                Ec.from = function(a, b, c, d) {
                    if(null == a) throw new Error("iterable cannot be null.");
                    if(b && !v(b)) throw new Error("mapFn when provided must be a function");
                    return ib(d) || (d = kc), new jd(function(e) {
                        var f = Object(a),
                            g = s(f),
                            h = g ? 0 : u(f),
                            i = g ? f[sb]() : null,
                            j = 0;
                        return d.scheduleRecursive(function(a) {
                            if(h > j || g) {
                                var d;
                                if(g) {
                                    var k = i.next();
                                    if(k.done) return void e.onCompleted();
                                    d = k.value
                                } else d = f[j]; if(b && v(b)) try {
                                    d = c ? b.call(c, d, j) : b(d, j)
                                } catch(l) {
                                    return void e.onError(l)
                                }
                                e.onNext(d), j++, a()
                            } else e.onCompleted()
                        })
                    })
                };
                var Jc = Ec.fromArray = function(a, b) {
                    return ib(b) || (b = kc), new jd(function(c) {
                        var d = 0,
                            e = a.length;
                        return b.scheduleRecursive(function(b) {
                            e > d ? (c.onNext(a[d++]), b()) : c.onCompleted()
                        })
                    })
                };
                Ec.generate = function(a, b, c, d, e) {
                    return ib(e) || (e = kc), new jd(function(f) {
                        var g = !0,
                            h = a;
                        return e.scheduleRecursive(function(a) {
                            var e, i;
                            try {
                                g ? g = !1 : h = c(h), e = b(h), e && (i = d(h))
                            } catch(j) {
                                return void f.onError(j)
                            }
                            e ? (f.onNext(i), a()) : f.onCompleted()
                        })
                    })
                }, Ec.of = function() {
                    for(var a = arguments.length, b = new Array(a), c = 0; a > c; c++) b[c] = arguments[c];
                    return Jc(b)
                };
                var Kc = (Ec.ofWithScheduler = function(a) {
                    for(var b = arguments.length - 1, c = new Array(b), d = 0; b > d; d++) c[d] = arguments[d + 1];
                    return Jc(c, a)
                }, Ec.never = function() {
                    return new jd(function() {
                        return _b
                    })
                });
                Ec.range = function(a, b, c) {
                    return ib(c) || (c = kc), new jd(function(d) {
                        return c.scheduleRecursiveWithState(0, function(c, e) {
                            b > c ? (d.onNext(a + c), e(c + 1)) : d.onCompleted()
                        })
                    })
                }, Ec.repeat = function(a, b, c) {
                    return ib(c) || (c = kc), Lc(a, c).repeat(null == b ? -1 : b)
                };
                var Lc = Ec["return"] = Ec.returnValue = Ec.just = function(a, b) {
                    return ib(b) || (b = jc), new jd(function(c) {
                        return b.schedule(function() {
                            c.onNext(a), c.onCompleted()
                        })
                    })
                }, Mc = Ec["throw"] = Ec.throwException = function(a, b) {
                        return ib(b) || (b = jc), new jd(function(c) {
                            return b.schedule(function() {
                                c.onError(a)
                            })
                        })
                    };
                Ec.using = function(a, b) {
                    return new jd(function(c) {
                        var d, e, f = _b;
                        try {
                            d = a(), d && (f = d), e = b(d)
                        } catch(g) {
                            return new Xb(Mc(g).subscribe(c), f)
                        }
                        return new Xb(e.subscribe(c), f)
                    })
                }, yc.amb = function(a) {
                    var b = this;
                    return new jd(function(c) {
                        function d() {
                            f || (f = g, j.dispose())
                        }

                        function e() {
                            f || (f = h, i.dispose())
                        }
                        var f, g = "L",
                            h = "R",
                            i = new bc,
                            j = new bc;
                        return ob(a) && (a = Fc(a)), i.setDisposable(b.subscribe(function(a) {
                            d(), f === g && c.onNext(a)
                        }, function(a) {
                            d(), f === g && c.onError(a)
                        }, function() {
                            d(), f === g && c.onCompleted()
                        })), j.setDisposable(a.subscribe(function(a) {
                            e(), f === h && c.onNext(a)
                        }, function(a) {
                            e(), f === h && c.onError(a)
                        }, function() {
                            e(), f === h && c.onCompleted()
                        })), new Xb(i, j)
                    })
                }, Ec.amb = function() {
                    function a(a, b) {
                        return a.amb(b)
                    }
                    for(var b = Kc(), c = o(arguments, 0), d = 0, e = c.length; e > d; d++) b = a(b, c[d]);
                    return b
                }, yc["catch"] = yc.catchException = function(a) {
                    return "function" == typeof a ? w(this, a) : Nc([this, a])
                };
                var Nc = Ec.catchException = Ec["catch"] = function() {
                    var a = o(arguments, 0);
                    return vc(a).catchException()
                };
                yc.combineLatest = function() {
                    var a = Qb.call(arguments);
                    return Array.isArray(a[0]) ? a[0].unshift(this) : a.unshift(this), Oc.apply(this, a)
                };
                var Oc = Ec.combineLatest = function() {
                    var a = Qb.call(arguments),
                        b = a.pop();
                    return Array.isArray(a[0]) && (a = a[0]), new jd(function(c) {
                        function d(a) {
                            var d;
                            if(h[a] = !0, i || (i = h.every(jb))) {
                                try {
                                    d = b.apply(null, k)
                                } catch(e) {
                                    return void c.onError(e)
                                }
                                c.onNext(d)
                            } else j.filter(function(b, c) {
                                return c !== a
                            }).every(jb) && c.onCompleted()
                        }

                        function e(a) {
                            j[a] = !0, j.every(jb) && c.onCompleted()
                        }
                        for(var f = function() {
                            return !1
                        }, g = a.length, h = p(g, f), i = !1, j = p(g, f), k = new Array(g), l = new Array(g), m = 0; g > m; m++)! function(b) {
                            var f = a[b],
                                g = new bc;
                            ob(f) && (f = Fc(f)), g.setDisposable(f.subscribe(function(a) {
                                k[b] = a, d(b)
                            }, c.onError.bind(c), function() {
                                e(b)
                            })), l[b] = g
                        }(m);
                        return new Xb(l)
                    })
                };
                yc.concat = function() {
                    var a = Qb.call(arguments, 0);
                    return a.unshift(this), Pc.apply(this, a)
                };
                var Pc = Ec.concat = function() {
                    var a = o(arguments, 0);
                    return vc(a).concat()
                };
                yc.concatObservable = yc.concatAll = function() {
                    return this.merge(1)
                }, yc.merge = function(a) {
                    if("number" != typeof a) return Qc(this, a);
                    var b = this;
                    return new jd(function(c) {
                        var d = 0,
                            e = new Xb,
                            f = !1,
                            g = [],
                            h = function(a) {
                                var b = new bc;
                                e.add(b), ob(a) && (a = Fc(a)), b.setDisposable(a.subscribe(c.onNext.bind(c), c.onError.bind(c), function() {
                                    var a;
                                    e.remove(b), g.length > 0 ? (a = g.shift(), h(a)) : (d--, f && 0 === d && c.onCompleted())
                                }))
                            };
                        return e.add(b.subscribe(function(b) {
                            a > d ? (d++, h(b)) : g.push(b)
                        }, c.onError.bind(c), function() {
                            f = !0, 0 === d && c.onCompleted()
                        })), e
                    })
                };
                var Qc = Ec.merge = function() {
                    var a, b;
                    return arguments[0] ? arguments[0].now ? (a = arguments[0], b = Qb.call(arguments, 1)) : (a = jc, b = Qb.call(arguments, 0)) : (a = jc, b = Qb.call(arguments, 1)), Array.isArray(b[0]) && (b = b[0]), Jc(b, a).mergeObservable()
                };
                yc.mergeObservable = yc.mergeAll = function() {
                    var a = this;
                    return new jd(function(b) {
                        var c = new Xb,
                            d = !1,
                            e = new bc;
                        return c.add(e), e.setDisposable(a.subscribe(function(a) {
                            var e = new bc;
                            c.add(e), ob(a) && (a = Fc(a)), e.setDisposable(a.subscribe(function(a) {
                                b.onNext(a)
                            }, b.onError.bind(b), function() {
                                c.remove(e), d && 1 === c.length && b.onCompleted()
                            }))
                        }, b.onError.bind(b), function() {
                            d = !0, 1 === c.length && b.onCompleted()
                        })), c
                    })
                }, yc.onErrorResumeNext = function(a) {
                    if(!a) throw new Error("Second observable is required");
                    return Rc([this, a])
                };
                var Rc = Ec.onErrorResumeNext = function() {
                    var a = o(arguments, 0);
                    return new jd(function(b) {
                        var c = 0,
                            d = new cc,
                            e = jc.scheduleRecursive(function(e) {
                                var f, g;
                                c < a.length ? (f = a[c++], ob(f) && (f = Fc(f)), g = new bc, d.setDisposable(g), g.setDisposable(f.subscribe(b.onNext.bind(b), function() {
                                    e()
                                }, function() {
                                    e()
                                }))) : b.onCompleted()
                            });
                        return new Xb(d, e)
                    })
                };
                yc.skipUntil = function(a) {
                    var b = this;
                    return new jd(function(c) {
                        var d = !1,
                            e = new Xb(b.subscribe(function(a) {
                                d && c.onNext(a)
                            }, c.onError.bind(c), function() {
                                d && c.onCompleted()
                            }));
                        ob(a) && (a = Fc(a));
                        var f = new bc;
                        return e.add(f), f.setDisposable(a.subscribe(function() {
                            d = !0, f.dispose()
                        }, c.onError.bind(c), function() {
                            f.dispose()
                        })), e
                    })
                }, yc["switch"] = yc.switchLatest = function() {
                    var a = this;
                    return new jd(function(b) {
                        var c = !1,
                            d = new cc,
                            e = !1,
                            f = 0,
                            g = a.subscribe(function(a) {
                                var g = new bc,
                                    h = ++f;
                                c = !0, d.setDisposable(g), ob(a) && (a = Fc(a)), g.setDisposable(a.subscribe(function(a) {
                                    f === h && b.onNext(a)
                                }, function(a) {
                                    f === h && b.onError(a)
                                }, function() {
                                    f === h && (c = !1, e && b.onCompleted())
                                }))
                            }, b.onError.bind(b), function() {
                                e = !0, c || b.onCompleted()
                            });
                        return new Xb(g, d)
                    })
                }, yc.takeUntil = function(a) {
                    var b = this;
                    return new jd(function(c) {
                        return ob(a) && (a = Fc(a)), new Xb(b.subscribe(c), a.subscribe(c.onCompleted.bind(c), c.onError.bind(c), hb))
                    })
                }, yc.zip = function() {
                    if(Array.isArray(arguments[0])) return x.apply(this, arguments);
                    var a = this,
                        b = Qb.call(arguments),
                        c = b.pop();
                    return b.unshift(a), new jd(function(d) {
                        function e(b) {
                            var e, f;
                            if(h.every(function(a) {
                                return a.length > 0
                            })) {
                                try {
                                    f = h.map(function(a) {
                                        return a.shift()
                                    }), e = c.apply(a, f)
                                } catch(g) {
                                    return void d.onError(g)
                                }
                                d.onNext(e)
                            } else i.filter(function(a, c) {
                                return c !== b
                            }).every(jb) && d.onCompleted()
                        }

                        function f(a) {
                            i[a] = !0, i.every(function(a) {
                                return a
                            }) && d.onCompleted()
                        }
                        for(var g = b.length, h = p(g, function() {
                                return []
                            }), i = p(g, function() {
                                return !1
                            }), j = new Array(g), k = 0; g > k; k++)! function(a) {
                            var c = b[a],
                                g = new bc;
                            ob(c) && (c = Fc(c)), g.setDisposable(c.subscribe(function(b) {
                                h[a].push(b), e(a)
                            }, d.onError.bind(d), function() {
                                f(a)
                            })), j[a] = g
                        }(k);
                        return new Xb(j)
                    })
                }, Ec.zip = function() {
                    var a = Qb.call(arguments, 0),
                        b = a.shift();
                    return b.zip.apply(b, a)
                }, Ec.zipArray = function() {
                    var a = o(arguments, 0);
                    return new jd(function(b) {
                        function c(a) {
                            if(f.every(function(a) {
                                return a.length > 0
                            })) {
                                var c = f.map(function(a) {
                                    return a.shift()
                                });
                                b.onNext(c)
                            } else if(g.filter(function(b, c) {
                                return c !== a
                            }).every(jb)) return void b.onCompleted()
                        }

                        function d(a) {
                            return g[a] = !0, g.every(jb) ? void b.onCompleted() : void 0
                        }
                        for(var e = a.length, f = p(e, function() {
                                return []
                            }), g = p(e, function() {
                                return !1
                            }), h = new Array(e), i = 0; e > i; i++)! function(e) {
                            h[e] = new bc, h[e].setDisposable(a[e].subscribe(function(a) {
                                f[e].push(a), c(e)
                            }, b.onError.bind(b), function() {
                                d(e)
                            }))
                        }(i);
                        var j = new Xb(h);
                        return j.add($b(function() {
                            for(var a = 0, b = f.length; b > a; a++) f[a] = []
                        })), j
                    })
                }, yc.asObservable = function() {
                    var a = this;
                    return new jd(function(b) {
                        return a.subscribe(b)
                    })
                }, yc.bufferWithCount = function(a, b) {
                    return "number" != typeof b && (b = a), this.windowWithCount(a, b).selectMany(function(a) {
                        return a.toArray()
                    }).where(function(a) {
                        return a.length > 0
                    })
                }, yc.dematerialize = function() {
                    var a = this;
                    return new jd(function(b) {
                        return a.subscribe(function(a) {
                            return a.accept(b)
                        }, b.onError.bind(b), b.onCompleted.bind(b))
                    })
                }, yc.distinctUntilChanged = function(a, b) {
                    var c = this;
                    return a || (a = jb), b || (b = lb), new jd(function(d) {
                        var e, f = !1;
                        return c.subscribe(function(c) {
                            var g, h = !1;
                            try {
                                g = a(c)
                            } catch(i) {
                                return void d.onError(i)
                            }
                            if(f) try {
                                h = b(e, g)
                            } catch(i) {
                                return void d.onError(i)
                            }
                            f && h || (f = !0, e = g, d.onNext(c))
                        }, d.onError.bind(d), d.onCompleted.bind(d))
                    })
                }, yc["do"] = yc.doAction = yc.tap = function(a, b, c) {
                    var d, e = this;
                    return "function" == typeof a ? d = a : (d = a.onNext.bind(a), b = a.onError.bind(a), c = a.onCompleted.bind(a)), new jd(function(a) {
                        return e.subscribe(function(b) {
                            try {
                                d(b)
                            } catch(c) {
                                a.onError(c)
                            }
                            a.onNext(b)
                        }, function(c) {
                            if(b) {
                                try {
                                    b(c)
                                } catch(d) {
                                    a.onError(d)
                                }
                                a.onError(c)
                            } else a.onError(c)
                        }, function() {
                            if(c) {
                                try {
                                    c()
                                } catch(b) {
                                    a.onError(b)
                                }
                                a.onCompleted()
                            } else a.onCompleted()
                        })
                    })
                }, yc["finally"] = yc.finallyAction = function(a) {
                    var b = this;
                    return new jd(function(c) {
                        var d;
                        try {
                            d = b.subscribe(c)
                        } catch(e) {
                            throw a(), e
                        }
                        return $b(function() {
                            try {
                                d.dispose()
                            } catch(b) {
                                throw b
                            } finally {
                                a()
                            }
                        })
                    })
                }, yc.ignoreElements = function() {
                    var a = this;
                    return new jd(function(b) {
                        return a.subscribe(hb, b.onError.bind(b), b.onCompleted.bind(b))
                    })
                }, yc.materialize = function() {
                    var a = this;
                    return new jd(function(b) {
                        return a.subscribe(function(a) {
                            b.onNext(pc(a))
                        }, function(a) {
                            b.onNext(qc(a)), b.onCompleted()
                        }, function() {
                            b.onNext(rc()), b.onCompleted()
                        })
                    })
                }, yc.repeat = function(a) {
                    return uc(this, a).concat()
                }, yc.retry = function(a) {
                    return uc(this, a).catchException()
                }, yc.scan = function() {
                    var a, b, c = !1,
                        d = this;
                    return 2 === arguments.length ? (c = !0, a = arguments[0], b = arguments[1]) : b = arguments[0], new jd(function(e) {
                        var f, g, h;
                        return d.subscribe(function(d) {
                            try {
                                h || (h = !0), f ? g = b(g, d) : (g = c ? b(a, d) : d, f = !0)
                            } catch(i) {
                                return void e.onError(i)
                            }
                            e.onNext(g)
                        }, e.onError.bind(e), function() {
                            !h && c && e.onNext(a), e.onCompleted()
                        })
                    })
                }, yc.skipLast = function(a) {
                    var b = this;
                    return new jd(function(c) {
                        var d = [];
                        return b.subscribe(function(b) {
                            d.push(b), d.length > a && c.onNext(d.shift())
                        }, c.onError.bind(c), c.onCompleted.bind(c))
                    })
                }, yc.startWith = function() {
                    var a, b, c = 0;
                    return arguments.length && "now" in Object(arguments[0]) ? (b = arguments[0], c = 1) : b = jc, a = Qb.call(arguments, c), vc([Jc(a, b), this]).concat()
                }, yc.takeLast = function(a, b) {
                    return this.takeLastBuffer(a).selectMany(function(a) {
                        return Jc(a, b)
                    })
                }, yc.takeLastBuffer = function(a) {
                    var b = this;
                    return new jd(function(c) {
                        var d = [];
                        return b.subscribe(function(b) {
                            d.push(b), d.length > a && d.shift()
                        }, c.onError.bind(c), function() {
                            c.onNext(d), c.onCompleted()
                        })
                    })
                }, yc.windowWithCount = function(a, b) {
                    var c = this;
                    if(0 >= a) throw new Error(qb);
                    if(1 === arguments.length && (b = a), 0 >= b) throw new Error(qb);
                    return new jd(function(d) {
                        var e = new bc,
                            f = new dc(e),
                            g = 0,
                            h = [],
                            i = function() {
                                var a = new md;
                                h.push(a), d.onNext(Tb(a, f))
                            };
                        return i(), e.setDisposable(c.subscribe(function(c) {
                            for(var d, e = 0, f = h.length; f > e; e++) h[e].onNext(c);
                            var j = g - a + 1;
                            j >= 0 && j % b === 0 && (d = h.shift(), d.onCompleted()), g++, g % b === 0 && i()
                        }, function(a) {
                            for(; h.length > 0;) h.shift().onError(a);
                            d.onError(a)
                        }, function() {
                            for(; h.length > 0;) h.shift().onCompleted();
                            d.onCompleted()
                        })), f
                    })
                }, yc.selectConcat = yc.concatMap = function(a, b) {
                    return b ? this.concatMap(function(c, d) {
                        var e = a(c, d),
                            f = ob(e) ? Fc(e) : e;
                        return f.map(function(a) {
                            return b(c, a, d)
                        })
                    }) : "function" == typeof a ? y.call(this, a) : y.call(this, function() {
                        return a
                    })
                }, yc.defaultIfEmpty = function(a) {
                    var b = this;
                    return a === e && (a = null), new jd(function(c) {
                        var d = !1;
                        return b.subscribe(function(a) {
                            d = !0, c.onNext(a)
                        }, c.onError.bind(c), function() {
                            d || c.onNext(a), c.onCompleted()
                        })
                    })
                }, A.prototype.push = function(a) {
                    var b = -1 === z(this.set, a, this.comparer);
                    return b && this.set.push(a), b
                }, yc.distinct = function(a, b) {
                    var c = this;
                    return b || (b = lb), new jd(function(d) {
                        var e = new A(b);
                        return c.subscribe(function(b) {
                            var c = b;
                            if(a) try {
                                c = a(b)
                            } catch(f) {
                                return void d.onError(f)
                            }
                            e.push(c) && d.onNext(b)
                        }, d.onError.bind(d), d.onCompleted.bind(d))
                    })
                }, yc.groupBy = function(a, b, c) {
                    return this.groupByUntil(a, b, Kc, c)
                }, yc.groupByUntil = function(a, b, c, d) {
                    var e = this;
                    return b || (b = jb), d || (d = lb), new jd(function(d) {
                        var f = new cd,
                            g = new Xb,
                            h = new dc(g);
                        return g.add(e.subscribe(function(e) {
                            var i, j, k, l;
                            try {
                                i = a(e)
                            } catch(m) {
                                for(l = f.getValues(), j = 0, k = l.length; k > j; j++) l[j].onError(m);
                                return void d.onError(m)
                            }
                            var n = !1,
                                o = f.tryGetValue(i);
                            if(o || (o = new md, f.set(i, o), n = !0), n) {
                                var p = new ld(i, o, h),
                                    q = new ld(i, o);
                                try {
                                    duration = c(q)
                                } catch(m) {
                                    for(l = f.getValues(), j = 0, k = l.length; k > j; j++) l[j].onError(m);
                                    return void d.onError(m)
                                }
                                d.onNext(p);
                                var r = new bc;
                                g.add(r);
                                var s = function() {
                                    f.remove(i) && o.onCompleted(), g.remove(r)
                                };
                                r.setDisposable(duration.take(1).subscribe(hb, function(a) {
                                    for(l = f.getValues(), j = 0, k = l.length; k > j; j++) l[j].onError(a);
                                    d.onError(a)
                                }, s))
                            }
                            var t;
                            try {
                                t = b(e)
                            } catch(m) {
                                for(l = f.getValues(), j = 0, k = l.length; k > j; j++) l[j].onError(m);
                                return void d.onError(m)
                            }
                            o.onNext(t)
                        }, function(a) {
                            for(var b = f.getValues(), c = 0, e = b.length; e > c; c++) b[c].onError(a);
                            d.onError(a)
                        }, function() {
                            for(var a = f.getValues(), b = 0, c = a.length; c > b; b++) a[b].onCompleted();
                            d.onCompleted()
                        })), h
                    })
                }, yc.select = yc.map = function(a, b) {
                    var c = this;
                    return new jd(function(d) {
                        var e = 0;
                        return c.subscribe(function(f) {
                            var g;
                            try {
                                g = a.call(b, f, e++, c)
                            } catch(h) {
                                return void d.onError(h)
                            }
                            d.onNext(g)
                        }, d.onError.bind(d), d.onCompleted.bind(d))
                    })
                }, yc.pluck = function(a) {
                    return this.select(function(b) {
                        return b[a]
                    })
                }, yc.selectMany = yc.flatMap = function(a, b) {
                    return b ? this.selectMany(function(c, d) {
                        var e = a(c, d),
                            f = ob(e) ? Fc(e) : e;
                        return f.select(function(a) {
                            return b(c, a, d)
                        })
                    }) : "function" == typeof a ? B.call(this, a) : B.call(this, function() {
                        return a
                    })
                }, yc.selectSwitch = yc.flatMapLatest = yc.switchMap = function(a, b) {
                    return this.select(a, b).switchLatest()
                }, yc.skip = function(a) {
                    if(0 > a) throw new Error(qb);
                    var b = this;
                    return new jd(function(c) {
                        var d = a;
                        return b.subscribe(function(a) {
                            0 >= d ? c.onNext(a) : d--
                        }, c.onError.bind(c), c.onCompleted.bind(c))
                    })
                }, yc.skipWhile = function(a, b) {
                    var c = this;
                    return new jd(function(d) {
                        var e = 0,
                            f = !1;
                        return c.subscribe(function(g) {
                            if(!f) try {
                                f = !a.call(b, g, e++, c)
                            } catch(h) {
                                return void d.onError(h)
                            }
                            f && d.onNext(g)
                        }, d.onError.bind(d), d.onCompleted.bind(d))
                    })
                }, yc.take = function(a, b) {
                    if(0 > a) throw new Error(qb);
                    if(0 === a) return Hc(b);
                    var c = this;
                    return new jd(function(b) {
                        var d = a;
                        return c.subscribe(function(a) {
                            d > 0 && (d--, b.onNext(a), 0 === d && b.onCompleted())
                        }, b.onError.bind(b), b.onCompleted.bind(b))
                    })
                }, yc.takeWhile = function(a, b) {
                    var c = this;
                    return new jd(function(d) {
                        var e = 0,
                            f = !0;
                        return c.subscribe(function(g) {
                            if(f) {
                                try {
                                    f = a.call(b, g, e++, c)
                                } catch(h) {
                                    return void d.onError(h)
                                }
                                f ? d.onNext(g) : d.onCompleted()
                            }
                        }, d.onError.bind(d), d.onCompleted.bind(d))
                    })
                }, yc.where = yc.filter = function(a, b) {
                    var c = this;
                    return new jd(function(d) {
                        var e = 0;
                        return c.subscribe(function(f) {
                            var g;
                            try {
                                g = a.call(b, f, e++, c)
                            } catch(h) {
                                return void d.onError(h)
                            }
                            g && d.onNext(f)
                        }, d.onError.bind(d), d.onCompleted.bind(d))
                    })
                }, yc.finalValue = function() {
                    var a = this;
                    return new jd(function(b) {
                        var c, d = !1;
                        return a.subscribe(function(a) {
                            d = !0, c = a
                        }, b.onError.bind(b), function() {
                            d ? (b.onNext(c), b.onCompleted()) : b.onError(new Error(pb))
                        })
                    })
                }, yc.aggregate = function() {
                    var a, b, c;
                    return 2 === arguments.length ? (a = arguments[0], b = !0, c = arguments[1]) : c = arguments[0], b ? this.scan(a, c).startWith(a).finalValue() : this.scan(c).finalValue()
                }, yc.reduce = function(a) {
                    var b, c;
                    return 2 === arguments.length && (c = !0, b = arguments[1]), c ? this.scan(b, a).startWith(b).finalValue() : this.scan(a).finalValue()
                }, yc.some = yc.any = function(a, b) {
                    var c = this;
                    return a ? c.where(a, b).any() : new jd(function(a) {
                        return c.subscribe(function() {
                            a.onNext(!0), a.onCompleted()
                        }, a.onError.bind(a), function() {
                            a.onNext(!1), a.onCompleted()
                        })
                    })
                }, yc.isEmpty = function() {
                    return this.any().select(function(a) {
                        return !a
                    })
                }, yc.every = yc.all = function(a, b) {
                    return this.where(function(b) {
                        return !a(b)
                    }, b).any().select(function(a) {
                        return !a
                    })
                }, yc.contains = function(a, b) {
                    return b || (b = lb), this.where(function(c) {
                        return b(c, a)
                    }).any()
                }, yc.count = function(a, b) {
                    return a ? this.where(a, b).count() : this.aggregate(0, function(a) {
                        return a + 1
                    })
                }, yc.sum = function(a, b) {
                    return a ? this.select(a, b).sum() : this.aggregate(0, function(a, b) {
                        return a + b
                    })
                }, yc.minBy = function(a, b) {
                    return b || (b = mb), C(this, a, function(a, c) {
                        return -1 * b(a, c)
                    })
                }, yc.min = function(a) {
                    return this.minBy(jb, a).select(function(a) {
                        return D(a)
                    })
                }, yc.maxBy = function(a, b) {
                    return b || (b = mb), C(this, a, b)
                }, yc.max = function(a) {
                    return this.maxBy(jb, a).select(function(a) {
                        return D(a)
                    })
                }, yc.average = function(a, b) {
                    return a ? this.select(a, b).average() : this.scan({
                        sum: 0,
                        count: 0
                    }, function(a, b) {
                        return {
                            sum: a.sum + b,
                            count: a.count + 1
                        }
                    }).finalValue().select(function(a) {
                        if(0 === a.count) throw new Error("The input sequence was empty");
                        return a.sum / a.count
                    })
                }, yc.sequenceEqual = function(a, b) {
                    var c = this;
                    return b || (b = lb), Array.isArray(a) ? E(c, a, b) : new jd(function(d) {
                        var e = !1,
                            f = !1,
                            g = [],
                            h = [],
                            i = c.subscribe(function(a) {
                                var c, e;
                                if(h.length > 0) {
                                    e = h.shift();
                                    try {
                                        c = b(e, a)
                                    } catch(i) {
                                        return void d.onError(i)
                                    }
                                    c || (d.onNext(!1), d.onCompleted())
                                } else f ? (d.onNext(!1), d.onCompleted()) : g.push(a)
                            }, d.onError.bind(d), function() {
                                e = !0, 0 === g.length && (h.length > 0 ? (d.onNext(!1), d.onCompleted()) : f && (d.onNext(!0), d.onCompleted()))
                            });
                        ob(a) && (a = Fc(a));
                        var j = a.subscribe(function(a) {
                            var c, f;
                            if(g.length > 0) {
                                f = g.shift();
                                try {
                                    c = b(f, a)
                                } catch(i) {
                                    return void d.onError(i)
                                }
                                c || (d.onNext(!1), d.onCompleted())
                            } else e ? (d.onNext(!1), d.onCompleted()) : h.push(a)
                        }, d.onError.bind(d), function() {
                            f = !0, 0 === h.length && (g.length > 0 ? (d.onNext(!1), d.onCompleted()) : e && (d.onNext(!0), d.onCompleted()))
                        });
                        return new Xb(i, j)
                    })
                }, yc.elementAt = function(a) {
                    return F(this, a, !1)
                }, yc.elementAtOrDefault = function(a, b) {
                    return F(this, a, !0, b)
                }, yc.single = function(a, b) {
                    return a ? this.where(a, b).single() : G(this, !1)
                }, yc.singleOrDefault = function(a, b, c) {
                    return a ? this.where(a, c).singleOrDefault(null, b) : G(this, !0, b)
                }, yc.first = function(a, b) {
                    return a ? this.where(a, b).first() : H(this, !1)
                }, yc.firstOrDefault = function(a, b) {
                    return a ? this.where(a).firstOrDefault(null, b) : H(this, !0, b)
                }, yc.last = function(a, b) {
                    return a ? this.where(a, b).last() : I(this, !1)
                }, yc.lastOrDefault = function(a, b, c) {
                    return a ? this.where(a, c).lastOrDefault(null, b) : I(this, !0, b)
                }, yc.find = function(a, b) {
                    return J(this, a, b, !1)
                }, yc.findIndex = function(a, b) {
                    return J(this, a, b, !0)
                }, Ec.start = function(a, b, c) {
                    return Sc(a, b, c)()
                };
                var Sc = Ec.toAsync = function(a, b, c) {
                    return ib(c) || (c = mc),
                    function() {
                        var d = arguments,
                            e = new nd;
                        return c.schedule(function() {
                            var c;
                            try {
                                c = a.apply(b, d)
                            } catch(f) {
                                return void e.onError(f)
                            }
                            e.onNext(c), e.onCompleted()
                        }), e.asObservable()
                    }
                };
                Ec.fromCallback = function(a, b, c) {
                    return function() {
                        var d = Qb.call(arguments, 0);
                        return new jd(function(e) {
                            function f(a) {
                                var b = a;
                                if(c) {
                                    try {
                                        b = c(arguments)
                                    } catch(d) {
                                        return void e.onError(d)
                                    }
                                    e.onNext(b)
                                } else b.length <= 1 ? e.onNext.apply(e, b) : e.onNext(b);
                                e.onCompleted()
                            }
                            d.push(f), a.apply(b, d)
                        })
                    }
                }, Ec.fromNodeCallback = function(a, b, c) {
                    return function() {
                        var d = Qb.call(arguments, 0);
                        return new jd(function(e) {
                            function f(a) {
                                if(a) return void e.onError(a);
                                var b = Qb.call(arguments, 1);
                                if(c) {
                                    try {
                                        b = c(b)
                                    } catch(d) {
                                        return void e.onError(d)
                                    }
                                    e.onNext(b)
                                } else b.length <= 1 ? e.onNext.apply(e, b) : e.onNext(b);
                                e.onCompleted()
                            }
                            d.push(f), a.apply(b, d)
                        })
                    }
                };
                var Tc = bb.angular && angular.element ? angular.element : bb.jQuery ? bb.jQuery : bb.Zepto ? bb.Zepto : null,
                    Uc = !! bb.Ember && "function" == typeof bb.Ember.addListener;
                Ec.fromEvent = function(a, b, c) {
                    if(Uc) return Vc(function(c) {
                        Ember.addListener(a, b, c)
                    }, function(c) {
                        Ember.removeListener(a, b, c)
                    }, c);
                    if(Tc) {
                        var d = Tc(a);
                        return Vc(function(a) {
                            d.on(b, a)
                        }, function(a) {
                            d.off(b, a)
                        }, c)
                    }
                    return new jd(function(d) {
                        return L(a, b, function(a) {
                            var b = a;
                            if(c) try {
                                b = c(arguments)
                            } catch(e) {
                                return void d.onError(e)
                            }
                            d.onNext(b)
                        })
                    }).publish().refCount()
                };
                var Vc = Ec.fromEventPattern = function(a, b, c) {
                    return new jd(function(d) {
                        function e(a) {
                            var b = a;
                            if(c) try {
                                b = c(arguments)
                            } catch(e) {
                                return void d.onError(e)
                            }
                            d.onNext(b)
                        }
                        var f = a(e);
                        return $b(function() {
                            b && b(e, f)
                        })
                    }).publish().refCount()
                };
                Ec.startAsync = function(a) {
                    var b;
                    try {
                        b = a()
                    } catch(c) {
                        return Mc(c)
                    }
                    return Fc(b)
                };
                var Wc = function(a) {
                    function b(a) {
                        var b = this.source.publish(),
                            c = b.subscribe(a),
                            d = _b,
                            e = this.subject.distinctUntilChanged().subscribe(function(a) {
                                a ? d = b.connect() : (d.dispose(), d = _b)
                            });
                        return new Xb(c, d, e)
                    }

                    function c(c, d) {
                        this.source = c, this.subject = d || new md, this.isPaused = !0, a.call(this, b)
                    }
                    return Rb(c, a), c.prototype.pause = function() {
                        this.isPaused !== !0 && (this.isPaused = !0, this.subject.onNext(!1))
                    }, c.prototype.resume = function() {
                        this.isPaused !== !1 && (this.isPaused = !1, this.subject.onNext(!0))
                    }, c
                }(Ec);
                yc.pausable = function(a) {
                    return new Wc(this, a)
                };
                var Xc = function(a) {
                    function b(a) {
                        var b = [],
                            c = !0,
                            d = M(this.source, this.subject.distinctUntilChanged(), function(a, b) {
                                return {
                                    data: a,
                                    shouldFire: b
                                }
                            }).subscribe(function(d) {
                                if(d.shouldFire && c && a.onNext(d.data), d.shouldFire && !c) {
                                    for(; b.length > 0;) a.onNext(b.shift());
                                    c = !0
                                } else d.shouldFire || c ? !d.shouldFire && c && (c = !1) : b.push(d.data)
                            }, function(c) {
                                for(; b.length > 0;) a.onNext(b.shift());
                                a.onError(c)
                            }, function() {
                                for(; b.length > 0;) a.onNext(b.shift());
                                a.onCompleted()
                            });
                        return this.subject.onNext(!1), d
                    }

                    function c(c, d) {
                        this.source = c, this.subject = d || new md, this.isPaused = !0, a.call(this, b)
                    }
                    return Rb(c, a), c.prototype.pause = function() {
                        this.isPaused !== !0 && (this.isPaused = !0, this.subject.onNext(!1))
                    }, c.prototype.resume = function() {
                        this.isPaused !== !1 && (this.isPaused = !1, this.subject.onNext(!0))
                    }, c
                }(Ec);
                yc.pausableBuffered = function(a) {
                    return new Xc(this, a)
                }, yc.controlled = function(a) {
                    return null == a && (a = !0), new Yc(this, a)
                };
                var Yc = function(a) {
                    function b(a) {
                        return this.source.subscribe(a)
                    }

                    function c(c, d) {
                        a.call(this, b), this.subject = new Zc(d), this.source = c.multicast(this.subject).refCount()
                    }
                    return Rb(c, a), c.prototype.request = function(a) {
                        return null == a && (a = -1), this.subject.request(a)
                    }, c
                }(Ec),
                    Zc = gb.ControlledSubject = function(a) {
                        function b(a) {
                            return this.subject.subscribe(a)
                        }

                        function c(c) {
                            null == c && (c = !0), a.call(this, b), this.subject = new md, this.enableQueue = c, this.queue = c ? [] : null, this.requestedCount = 0, this.requestedDisposable = _b, this.error = null, this.hasFailed = !1, this.hasCompleted = !1, this.controlledDisposable = _b
                        }
                        return Rb(c, a), Sb(c.prototype, wc, {
                            onCompleted: function() {
                                f.call(this), this.hasCompleted = !0, this.enableQueue && 0 !== this.queue.length || this.subject.onCompleted()
                            },
                            onError: function(a) {
                                f.call(this), this.hasFailed = !0, this.error = a, this.enableQueue && 0 !== this.queue.length || this.subject.onError(a)
                            },
                            onNext: function(a) {
                                f.call(this);
                                var b = !1;
                                0 === this.requestedCount ? this.enableQueue && this.queue.push(a) : (-1 !== this.requestedCount && 0 === this.requestedCount-- && this.disposeCurrentRequest(), b = !0), b && this.subject.onNext(a)
                            },
                            _processRequest: function(a) {
                                if(this.enableQueue) {
                                    for(; this.queue.length >= a && a > 0;) this.subject.onNext(this.queue.shift()), a--;
                                    return 0 !== this.queue.length ? {
                                        numberOfItems: a,
                                        returnValue: !0
                                    } : {
                                        numberOfItems: a,
                                        returnValue: !1
                                    }
                                }
                                return this.hasFailed ? (this.subject.onError(this.error), this.controlledDisposable.dispose(), this.controlledDisposable = _b) : this.hasCompleted && (this.subject.onCompleted(), this.controlledDisposable.dispose(), this.controlledDisposable = _b), {
                                    numberOfItems: a,
                                    returnValue: !1
                                }
                            },
                            request: function(a) {
                                f.call(this), this.disposeCurrentRequest();
                                var b = this,
                                    c = this._processRequest(a);
                                return a = c.numberOfItems, c.returnValue ? _b : (this.requestedCount = a, this.requestedDisposable = $b(function() {
                                    b.requestedCount = 0
                                }), this.requestedDisposable)
                            },
                            disposeCurrentRequest: function() {
                                this.requestedDisposable.dispose(), this.requestedDisposable = _b
                            },
                            dispose: function() {
                                this.isDisposed = !0, this.error = null, this.subject.dispose(), this.requestedDisposable.dispose()
                            }
                        }), c
                    }(Ec);
                yc.multicast = function(a, b) {
                    var c = this;
                    return "function" == typeof a ? new jd(function(d) {
                        var e = c.multicast(a());
                        return new Xb(b(e).subscribe(d), e.connect())
                    }) : new bd(c, a)
                }, yc.publish = function(a) {
                    return a ? this.multicast(function() {
                        return new md
                    }, a) : this.multicast(new md)
                }, yc.share = function() {
                    return this.publish(null).refCount()
                }, yc.publishLast = function(a) {
                    return a ? this.multicast(function() {
                        return new nd
                    }, a) : this.multicast(new nd)
                }, yc.publishValue = function(a, b) {
                    return 2 === arguments.length ? this.multicast(function() {
                        return new _c(b)
                    }, a) : this.multicast(new _c(a))
                }, yc.shareValue = function(a) {
                    return this.publishValue(a).refCount()
                }, yc.replay = function(a, b, c, d) {
                    return a ? this.multicast(function() {
                        return new ad(b, c, d)
                    }, a) : this.multicast(new ad(b, c, d))
                }, yc.shareReplay = function(a, b, c) {
                    return this.replay(null, a, b, c).refCount()
                };
                var $c = function(a, b) {
                    this.subject = a, this.observer = b
                };
                $c.prototype.dispose = function() {
                    if(!this.subject.isDisposed && null !== this.observer) {
                        var a = this.subject.observers.indexOf(this.observer);
                        this.subject.observers.splice(a, 1), this.observer = null
                    }
                };
                var _c = gb.BehaviorSubject = function(a) {
                    function b(a) {
                        if(f.call(this), !this.isStopped) return this.observers.push(a), a.onNext(this.value), new $c(this, a);
                        var b = this.exception;
                        return b ? a.onError(b) : a.onCompleted(), _b
                    }

                    function c(c) {
                        a.call(this, b), this.value = c, this.observers = [], this.isDisposed = !1, this.isStopped = !1, this.exception = null
                    }
                    return Rb(c, a), Sb(c.prototype, wc, {
                        hasObservers: function() {
                            return this.observers.length > 0
                        },
                        onCompleted: function() {
                            if(f.call(this), !this.isStopped) {
                                var a = this.observers.slice(0);
                                this.isStopped = !0;
                                for(var b = 0, c = a.length; c > b; b++) a[b].onCompleted();
                                this.observers = []
                            }
                        },
                        onError: function(a) {
                            if(f.call(this), !this.isStopped) {
                                var b = this.observers.slice(0);
                                this.isStopped = !0, this.exception = a;
                                for(var c = 0, d = b.length; d > c; c++) b[c].onError(a);
                                this.observers = []
                            }
                        },
                        onNext: function(a) {
                            if(f.call(this), !this.isStopped) {
                                this.value = a;
                                for(var b = this.observers.slice(0), c = 0, d = b.length; d > c; c++) b[c].onNext(a)
                            }
                        },
                        dispose: function() {
                            this.isDisposed = !0, this.observers = null, this.value = null, this.exception = null
                        }
                    }), c
                }(Ec),
                    ad = gb.ReplaySubject = function(a) {
                        function b(a, b) {
                            this.subject = a, this.observer = b
                        }

                        function c(a) {
                            var c = new Cc(this.scheduler, a),
                                d = new b(this, c);
                            f.call(this), this._trim(this.scheduler.now()), this.observers.push(c);
                            for(var e = this.q.length, g = 0, h = this.q.length; h > g; g++) c.onNext(this.q[g].value);
                            return this.hasError ? (e++, c.onError(this.error)) : this.isStopped && (e++, c.onCompleted()), c.ensureActive(e), d
                        }

                        function d(b, d, e) {
                            this.bufferSize = null == b ? Number.MAX_VALUE : b, this.windowSize = null == d ? Number.MAX_VALUE : d, this.scheduler = e || kc, this.q = [], this.observers = [], this.isStopped = !1, this.isDisposed = !1, this.hasError = !1, this.error = null, a.call(this, c)
                        }
                        return b.prototype.dispose = function() {
                            if(this.observer.dispose(), !this.subject.isDisposed) {
                                var a = this.subject.observers.indexOf(this.observer);
                                this.subject.observers.splice(a, 1)
                            }
                        }, Rb(d, a), Sb(d.prototype, wc, {
                            hasObservers: function() {
                                return this.observers.length > 0
                            },
                            _trim: function(a) {
                                for(; this.q.length > this.bufferSize;) this.q.shift();
                                for(; this.q.length > 0 && a - this.q[0].interval > this.windowSize;) this.q.shift()
                            },
                            onNext: function(a) {
                                var b;
                                if(f.call(this), !this.isStopped) {
                                    var c = this.scheduler.now();
                                    this.q.push({
                                        interval: c,
                                        value: a
                                    }), this._trim(c);
                                    for(var d = this.observers.slice(0), e = 0, g = d.length; g > e; e++) b = d[e], b.onNext(a), b.ensureActive()
                                }
                            },
                            onError: function(a) {
                                var b;
                                if(f.call(this), !this.isStopped) {
                                    this.isStopped = !0, this.error = a, this.hasError = !0;
                                    var c = this.scheduler.now();
                                    this._trim(c);
                                    for(var d = this.observers.slice(0), e = 0, g = d.length; g > e; e++) b = d[e], b.onError(a), b.ensureActive();
                                    this.observers = []
                                }
                            },
                            onCompleted: function() {
                                var a;
                                if(f.call(this), !this.isStopped) {
                                    this.isStopped = !0;
                                    var b = this.scheduler.now();
                                    this._trim(b);
                                    for(var c = this.observers.slice(0), d = 0, e = c.length; e > d; d++) a = c[d], a.onCompleted(), a.ensureActive();
                                    this.observers = []
                                }
                            },
                            dispose: function() {
                                this.isDisposed = !0, this.observers = null
                            }
                        }), d
                    }(Ec),
                    bd = gb.ConnectableObservable = function(a) {
                        function b(b, c) {
                            var d, e = !1;
                            this.connect = function() {
                                return e || (e = !0, d = new Xb(b.subscribe(c), $b(function() {
                                    e = !1
                                }))), d
                            }, a.call(this, c.subscribe.bind(c))
                        }
                        return Rb(b, a), b.prototype.refCount = function() {
                            var a, b = 0,
                                c = this;
                            return new jd(function(d) {
                                var e = 1 === ++b,
                                    f = c.subscribe(d);
                                return e && (a = c.connect()),
                                function() {
                                    f.dispose(), 0 === --b && a.dispose()
                                }
                            })
                        }, b
                    }(Ec),
                    cd = function() {
                        function a(a) {
                            if(a & !1) return 2 === a;
                            for(var b = Math.sqrt(a), c = 3; b >= c;) {
                                if(a % c === 0) return !1;
                                c += 2
                            }
                            return !0
                        }

                        function b(b) {
                            var c, d, e;
                            for(c = 0; c < h.length; ++c)
                                if(d = h[c], d >= b) return d;
                            for(e = 1 | b; e < h[h.length - 1];) {
                                if(a(e)) return e;
                                e += 2
                            }
                            return b
                        }

                        function c(a) {
                            var b = 757602046;
                            if(!a.length) return b;
                            for(var c = 0, d = a.length; d > c; c++) {
                                var e = a.charCodeAt(c);
                                b = (b << 5) - b + e, b &= b
                            }
                            return b
                        }

                        function d(a) {
                            var b = 668265261;
                            return a = 61 ^ a ^ a >>> 16, a += a << 3, a ^= a >>> 4, a *= b, a ^= a >>> 15
                        }

                        function f() {
                            return {
                                key: null,
                                value: null,
                                next: 0,
                                hashCode: 0
                            }
                        }

                        function g(a, b) {
                            if(0 > a) throw new Error("out of range");
                            a > 0 && this._initialize(a), this.comparer = b || lb, this.freeCount = 0, this.size = 0, this.freeList = -1
                        }
                        var h = [1, 3, 7, 13, 31, 61, 127, 251, 509, 1021, 2039, 4093, 8191, 16381, 32749, 65521, 131071, 262139, 524287, 1048573, 2097143, 4194301, 8388593, 16777213, 33554393, 67108859, 134217689, 268435399, 536870909, 1073741789, 2147483647],
                            i = "no such key",
                            j = "duplicate key",
                            k = function() {
                                var a = 0;
                                return function(b) {
                                    if(null == b) throw new Error(i);
                                    if("string" == typeof b) return c(b);
                                    if("number" == typeof b) return d(b);
                                    if("boolean" == typeof b) return b === !0 ? 1 : 0;
                                    if(b instanceof Date) return d(b.valueOf());
                                    if(b instanceof RegExp) return c(b.toString());
                                    if("function" == typeof b.valueOf) {
                                        var e = b.valueOf();
                                        if("number" == typeof e) return d(e);
                                        if("string" == typeof b) return c(e)
                                    }
                                    if(b.getHashCode) return b.getHashCode();
                                    var f = 17 * a++;
                                    return b.getHashCode = function() {
                                        return f
                                    }, f
                                }
                            }(),
                            l = g.prototype;
                        return l._initialize = function(a) {
                            var c, d = b(a);
                            for(this.buckets = new Array(d), this.entries = new Array(d), c = 0; d > c; c++) this.buckets[c] = -1, this.entries[c] = f();
                            this.freeList = -1
                        }, l.add = function(a, b) {
                            return this._insert(a, b, !0)
                        }, l._insert = function(a, b, c) {
                            this.buckets || this._initialize(0);
                            for(var d, e = 2147483647 & k(a), f = e % this.buckets.length, g = this.buckets[f]; g >= 0; g = this.entries[g].next)
                                if(this.entries[g].hashCode === e && this.comparer(this.entries[g].key, a)) {
                                    if(c) throw new Error(j);
                                    return void(this.entries[g].value = b)
                                }
                            this.freeCount > 0 ? (d = this.freeList, this.freeList = this.entries[d].next, --this.freeCount) : (this.size === this.entries.length && (this._resize(), f = e % this.buckets.length), d = this.size, ++this.size), this.entries[d].hashCode = e, this.entries[d].next = this.buckets[f], this.entries[d].key = a, this.entries[d].value = b, this.buckets[f] = d
                        }, l._resize = function() {
                            var a = b(2 * this.size),
                                c = new Array(a);
                            for(e = 0; e < c.length; ++e) c[e] = -1;
                            var d = new Array(a);
                            for(e = 0; e < this.size; ++e) d[e] = this.entries[e];
                            for(var e = this.size; a > e; ++e) d[e] = f();
                            for(var g = 0; g < this.size; ++g) {
                                var h = d[g].hashCode % a;
                                d[g].next = c[h], c[h] = g
                            }
                            this.buckets = c, this.entries = d
                        }, l.remove = function(a) {
                            if(this.buckets)
                                for(var b = 2147483647 & k(a), c = b % this.buckets.length, d = -1, e = this.buckets[c]; e >= 0; e = this.entries[e].next) {
                                    if(this.entries[e].hashCode === b && this.comparer(this.entries[e].key, a)) return 0 > d ? this.buckets[c] = this.entries[e].next : this.entries[d].next = this.entries[e].next, this.entries[e].hashCode = -1, this.entries[e].next = this.freeList, this.entries[e].key = null, this.entries[e].value = null, this.freeList = e, ++this.freeCount, !0;
                                    d = e
                                }
                            return !1
                        }, l.clear = function() {
                            var a, b;
                            if(!(this.size <= 0)) {
                                for(a = 0, b = this.buckets.length; b > a; ++a) this.buckets[a] = -1;
                                for(a = 0; a < this.size; ++a) this.entries[a] = f();
                                this.freeList = -1, this.size = 0
                            }
                        }, l._findEntry = function(a) {
                            if(this.buckets)
                                for(var b = 2147483647 & k(a), c = this.buckets[b % this.buckets.length]; c >= 0; c = this.entries[c].next)
                                    if(this.entries[c].hashCode === b && this.comparer(this.entries[c].key, a)) return c;
                            return -1
                        }, l.count = function() {
                            return this.size - this.freeCount
                        }, l.tryGetValue = function(a) {
                            var b = this._findEntry(a);
                            return b >= 0 ? this.entries[b].value : e
                        }, l.getValues = function() {
                            var a = 0,
                                b = [];
                            if(this.entries)
                                for(var c = 0; c < this.size; c++) this.entries[c].hashCode >= 0 && (b[a++] = this.entries[c].value);
                            return b
                        }, l.get = function(a) {
                            var b = this._findEntry(a);
                            if(b >= 0) return this.entries[b].value;
                            throw new Error(i)
                        }, l.set = function(a, b) {
                            this._insert(a, b, !1)
                        }, l.containskey = function(a) {
                            return this._findEntry(a) >= 0
                        }, g
                    }();
                yc.join = function(a, b, c, d) {
                    var e = this;
                    return new jd(function(f) {
                        var g = new Xb,
                            h = !1,
                            i = 0,
                            j = new cd,
                            k = !1,
                            l = 0,
                            m = new cd;
                        return g.add(e.subscribe(function(a) {
                            var c, e, k, l, n = i++,
                                o = new bc;
                            j.add(n, a), g.add(o), e = function() {
                                return j.remove(n) && 0 === j.count() && h && f.onCompleted(), g.remove(o)
                            };
                            try {
                                c = b(a)
                            } catch(p) {
                                return void f.onError(p)
                            }
                            o.setDisposable(c.take(1).subscribe(hb, f.onError.bind(f), function() {
                                e()
                            })), l = m.getValues();
                            for(var q = 0; q < l.length; q++) {
                                try {
                                    k = d(a, l[q])
                                } catch(r) {
                                    return void f.onError(r)
                                }
                                f.onNext(k)
                            }
                        }, f.onError.bind(f), function() {
                            h = !0, (k || 0 === j.count()) && f.onCompleted()
                        })), g.add(a.subscribe(function(a) {
                            var b, e, h, i, n = l++,
                                o = new bc;
                            m.add(n, a), g.add(o), e = function() {
                                return m.remove(n) && 0 === m.count() && k && f.onCompleted(), g.remove(o)
                            };
                            try {
                                b = c(a)
                            } catch(p) {
                                return void f.onError(p)
                            }
                            o.setDisposable(b.take(1).subscribe(hb, f.onError.bind(f), function() {
                                e()
                            })), i = j.getValues();
                            for(var q = 0; q < i.length; q++) {
                                try {
                                    h = d(i[q], a)
                                } catch(p) {
                                    return void f.onError(p)
                                }
                                f.onNext(h)
                            }
                        }, f.onError.bind(f), function() {
                            k = !0, (h || 0 === m.count()) && f.onCompleted()
                        })), g
                    })
                }, yc.groupJoin = function(a, b, c, d) {
                    var e = this;
                    return new jd(function(f) {
                        var g = function() {}, h = new Xb,
                            i = new dc(h),
                            j = new cd,
                            k = new cd,
                            l = 0,
                            m = 0;
                        return h.add(e.subscribe(function(a) {
                            var c = new md,
                                e = l++;
                            j.add(e, c);
                            var m, n, o, p, q;
                            try {
                                q = d(a, Tb(c, i))
                            } catch(r) {
                                for(o = j.getValues(), m = 0, n = o.length; n > m; m++) o[m].onError(r);
                                return void f.onError(r)
                            }
                            for(f.onNext(q), p = k.getValues(), m = 0, n = p.length; n > m; m++) c.onNext(p[m]);
                            var s = new bc;
                            h.add(s);
                            var t, u = function() {
                                    j.remove(e) && c.onCompleted(), h.remove(s)
                                };
                            try {
                                t = b(a)
                            } catch(r) {
                                for(o = j.getValues(), m = 0, n = j.length; n > m; m++) o[m].onError(r);
                                return void f.onError(r)
                            }
                            s.setDisposable(t.take(1).subscribe(g, function(a) {
                                for(o = j.getValues(), m = 0, n = o.length; n > m; m++) o[m].onError(a);
                                f.onError(a)
                            }, u))
                        }, function(a) {
                            for(var b = j.getValues(), c = 0, d = b.length; d > c; c++) b[c].onError(a);
                            f.onError(a)
                        }, f.onCompleted.bind(f))), h.add(a.subscribe(function(a) {
                            var b, d, e, i = m++;
                            k.add(i, a);
                            var l = new bc;
                            h.add(l);
                            var n, o = function() {
                                    k.remove(i), h.remove(l)
                                };
                            try {
                                n = c(a)
                            } catch(p) {
                                for(b = j.getValues(), d = 0, e = j.length; e > d; d++) b[d].onError(p);
                                return void f.onError(p)
                            }
                            for(l.setDisposable(n.take(1).subscribe(g, function(a) {
                                for(b = j.getValues(), d = 0, e = j.length; e > d; d++) b[d].onError(a);
                                f.onError(a)
                            }, o)), b = j.getValues(), d = 0, e = b.length; e > d; d++) b[d].onNext(a)
                        }, function(a) {
                            for(var b = j.getValues(), c = 0, d = b.length; d > c; c++) b[c].onError(a);
                            f.onError(a)
                        })), i
                    })
                }, yc.buffer = function() {
                    return this.window.apply(this, arguments).selectMany(function(a) {
                        return a.toArray()
                    })
                }, yc.window = function(a, b) {
                    return 1 === arguments.length && "function" != typeof arguments[0] ? O.call(this, a) : "function" == typeof a ? P.call(this, a) : N.call(this, a, b)
                }, yc.pairwise = function() {
                    var a = this;
                    return new jd(function(b) {
                        var c, d = !1;
                        return a.subscribe(function(a) {
                            d ? b.onNext([c, a]) : d = !0, c = a
                        }, b.onError.bind(b), b.onCompleted.bind(b))
                    })
                }, yc.partition = function(a, b) {
                    var c = this.publish().refCount();
                    return [c.filter(a, b), c.filter(function(c, d, e) {
                        return !a.call(b, c, d, e)
                    })]
                }, yc.letBind = yc.let = function(a) {
                    return a(this)
                }, Ec["if"] = Ec.ifThen = function(a, b, c) {
                    return Gc(function() {
                        return c || (c = Hc()), ob(b) && (b = Fc(b)), ob(c) && (c = Fc(c)), "function" == typeof c.now && (c = Hc(c)), a() ? b : c
                    })
                }, Ec["for"] = Ec.forIn = function(a, b) {
                    return vc(a, b).concat()
                };
                var dd = Ec["while"] = Ec.whileDo = function(a, b) {
                    return ob(b) && (b = Fc(b)), Q(a, b).concat()
                };
                yc.doWhile = function(a) {
                    return Pc([this, dd(a, this)])
                }, Ec["case"] = Ec.switchCase = function(a, b, c) {
                    return Gc(function() {
                        ob(c) && (c = Fc(c)), c || (c = Hc()), "function" == typeof c.now && (c = Hc(c));
                        var d = b[a()];
                        return ob(d) && (d = Fc(d)), d || c
                    })
                }, yc.expand = function(a, b) {
                    ib(b) || (b = jc);
                    var c = this;
                    return new jd(function(d) {
                        var e = [],
                            f = new cc,
                            g = new Xb(f),
                            h = 0,
                            i = !1,
                            j = function() {
                                var c = !1;
                                e.length > 0 && (c = !i, i = !0), c && f.setDisposable(b.scheduleRecursive(function(b) {
                                    var c;
                                    if(!(e.length > 0)) return void(i = !1);
                                    c = e.shift();
                                    var f = new bc;
                                    g.add(f), f.setDisposable(c.subscribe(function(b) {
                                        d.onNext(b);
                                        var c = null;
                                        try {
                                            c = a(b)
                                        } catch(f) {
                                            d.onError(f)
                                        }
                                        e.push(c), h++, j()
                                    }, d.onError.bind(d), function() {
                                        g.remove(f), h--, 0 === h && d.onCompleted()
                                    })), b()
                                }))
                            };
                        return e.push(c), h++, j(), g
                    })
                }, Ec.forkJoin = function() {
                    var a = o(arguments, 0);
                    return new jd(function(b) {
                        var c = a.length;
                        if(0 === c) return b.onCompleted(), _b;
                        for(var d = new Xb, e = !1, f = new Array(c), g = new Array(c), h = new Array(c), i = 0; c > i; i++)! function(i) {
                            var j = a[i];
                            ob(j) && (j = Fc(j)), d.add(j.subscribe(function(a) {
                                e || (f[i] = !0, h[i] = a)
                            }, function(a) {
                                e = !0, b.onError(a), d.dispose()
                            }, function() {
                                if(!e) {
                                    if(!f[i]) return void b.onCompleted();
                                    g[i] = !0;
                                    for(var a = 0; c > a; a++)
                                        if(!g[a]) return;
                                    e = !0, b.onNext(h), b.onCompleted()
                                }
                            }))
                        }(i);
                        return d
                    })
                }, yc.forkJoin = function(a, b) {
                    var c = this;
                    return new jd(function(d) {
                        var e, f, g = !1,
                            h = !1,
                            i = !1,
                            j = !1,
                            k = new bc,
                            l = new bc;
                        return ob(a) && (a = Fc(a)), k.setDisposable(c.subscribe(function(a) {
                            i = !0, e = a
                        }, function(a) {
                            l.dispose(), d.onError(a)
                        }, function() {
                            if(g = !0, h)
                                if(i)
                                    if(j) {
                                        var a;
                                        try {
                                            a = b(e, f)
                                        } catch(c) {
                                            return void d.onError(c)
                                        }
                                        d.onNext(a), d.onCompleted()
                                    } else d.onCompleted();
                                    else d.onCompleted()
                        })), l.setDisposable(a.subscribe(function(a) {
                            j = !0, f = a
                        }, function(a) {
                            k.dispose(), d.onError(a)
                        }, function() {
                            if(h = !0, g)
                                if(i)
                                    if(j) {
                                        var a;
                                        try {
                                            a = b(e, f)
                                        } catch(c) {
                                            return void d.onError(c)
                                        }
                                        d.onNext(a), d.onCompleted()
                                    } else d.onCompleted();
                                    else d.onCompleted()
                        })), new Xb(k, l)
                    })
                }, yc.manySelect = function(a, b) {
                    ib(b) || (b = jc);
                    var c = this;
                    return Gc(function() {
                        var d;
                        return c.map(function(a) {
                            var b = new ed(a);
                            return d && d.onNext(a), d = b, b
                        }).tap(hb, function(a) {
                            d && d.onError(a)
                        }, function() {
                            d && d.onCompleted()
                        }).observeOn(b).map(a)
                    })
                };
                var ed = function(a) {
                    function b(a) {
                        var b = this,
                            c = new Xb;
                        return c.add(kc.schedule(function() {
                            a.onNext(b.head), c.add(b.tail.mergeObservable().subscribe(a))
                        })), c
                    }

                    function c(c) {
                        a.call(this, b), this.head = c, this.tail = new nd
                    }
                    return Rb(c, a), Sb(c.prototype, wc, {
                        onCompleted: function() {
                            this.onNext(Ec.empty())
                        },
                        onError: function(a) {
                            this.onNext(Ec.throwException(a))
                        },
                        onNext: function(a) {
                            this.tail.onNext(a), this.tail.onCompleted()
                        }
                    }), c
                }(Ec),
                    fd = function() {
                        function a() {
                            this.keys = [], this.values = []
                        }
                        return a.prototype["delete"] = function(a) {
                            var b = this.keys.indexOf(a);
                            return -1 !== b && (this.keys.splice(b, 1), this.values.splice(b, 1)), -1 !== b
                        }, a.prototype.get = function(a, b) {
                            var c = this.keys.indexOf(a);
                            return -1 !== c ? this.values[c] : b
                        }, a.prototype.set = function(a, b) {
                            var c = this.keys.indexOf(a); - 1 !== c && (this.values[c] = b), this.values[this.keys.push(a) - 1] = b
                        }, a.prototype.size = function() {
                            return this.keys.length
                        }, a.prototype.has = function(a) {
                            return -1 !== this.keys.indexOf(a)
                        }, a.prototype.getKeys = function() {
                            return this.keys.slice(0)
                        }, a.prototype.getValues = function() {
                            return this.values.slice(0)
                        }, a
                    }();
                R.prototype.and = function(a) {
                    var b = this.patterns.slice(0);
                    return b.push(a), new R(b)
                }, R.prototype.thenDo = function(a) {
                    return new S(this, a)
                }, S.prototype.activate = function(a, b, c) {
                    for(var d = this, e = [], f = 0, g = this.expression.patterns.length; g > f; f++) e.push(T(a, this.expression.patterns[f], b.onError.bind(b)));
                    var h = new U(e, function() {
                        var a;
                        try {
                            a = d.selector.apply(d, arguments)
                        } catch(c) {
                            return void b.onError(c)
                        }
                        b.onNext(a)
                    }, function() {
                        for(var a = 0, b = e.length; b > a; a++) e[a].removeActivePlan(h);
                        c(h)
                    });
                    for(f = 0, g = e.length; g > f; f++) e[f].addActivePlan(h);
                    return h
                }, U.prototype.dequeue = function() {
                    for(var a = this.joinObservers.getValues(), b = 0, c = a.length; c > b; b++) a[b].queue.shift()
                }, U.prototype.match = function() {
                    var a, b, c, d, e, f = !0;
                    for(b = 0, c = this.joinObserverArray.length; c > b; b++)
                        if(0 === this.joinObserverArray[b].queue.length) {
                            f = !1;
                            break
                        }
                    if(f) {
                        for(a = [], d = !1, b = 0, c = this.joinObserverArray.length; c > b; b++) a.push(this.joinObserverArray[b].queue[0]), "C" === this.joinObserverArray[b].queue[0].kind && (d = !0);
                        if(d) this.onCompleted();
                        else {
                            for(this.dequeue(), e = [], b = 0; b < a.length; b++) e.push(a[b].value);
                            this.onNext.apply(this, e)
                        }
                    }
                };
                var gd = function(a) {
                    function b(b, c) {
                        a.call(this), this.source = b, this.onError = c, this.queue = [], this.activePlans = [], this.subscription = new bc, this.isDisposed = !1
                    }
                    Rb(b, a);
                    var c = b.prototype;
                    return c.next = function(a) {
                        if(!this.isDisposed) {
                            if("E" === a.kind) return void this.onError(a.exception);
                            this.queue.push(a);
                            for(var b = this.activePlans.slice(0), c = 0, d = b.length; d > c; c++) b[c].match()
                        }
                    }, c.error = hb, c.completed = hb, c.addActivePlan = function(a) {
                        this.activePlans.push(a)
                    }, c.subscribe = function() {
                        this.subscription.setDisposable(this.source.materialize().subscribe(this))
                    }, c.removeActivePlan = function(a) {
                        var b = this.activePlans.indexOf(a);
                        this.activePlans.splice(b, 1), 0 === this.activePlans.length && this.dispose()
                    }, c.dispose = function() {
                        a.prototype.dispose.call(this), this.isDisposed || (this.isDisposed = !0, this.subscription.dispose())
                    }, b
                }(zc);
                yc.and = function(a) {
                    return new R([this, a])
                }, yc.thenDo = function(a) {
                    return new R([this]).thenDo(a)
                }, Ec.when = function() {
                    var a = o(arguments, 0);
                    return new jd(function(b) {
                        var c, d, e, f, g, h, i = [],
                            j = new fd;
                        h = xc(b.onNext.bind(b), function(a) {
                            for(var c = j.getValues(), d = 0, e = c.length; e > d; d++) c[d].onError(a);
                            b.onError(a)
                        }, b.onCompleted.bind(b));
                        try {
                            for(d = 0, e = a.length; e > d; d++) i.push(a[d].activate(j, h, function(a) {
                                var b = i.indexOf(a);
                                i.splice(b, 1), 0 === i.length && h.onCompleted()
                            }))
                        } catch(k) {
                            Mc(k).subscribe(b)
                        }
                        for(c = new Xb, g = j.getValues(), d = 0, e = g.length; e > d; d++) f = g[d], f.subscribe(), c.add(f);
                        return c
                    })
                };
                var hd = Ec.interval = function(a, b) {
                    return Y(a, a, ib(b) ? b : mc)
                }, id = Ec.timer = function(a, b, c) {
                        var d;
                        return ib(c) || (c = mc), b !== e && "number" == typeof b ? d = b : b !== e && "object" == typeof b && (c = b), a instanceof Date && d === e ? V(a.getTime(), c) : a instanceof Date && d !== e ? (d = b, W(a.getTime(), d, c)) : d === e ? X(a, c) : Y(a, d, c)
                    };
                yc.delay = function(a, b) {
                    return ib(b) || (b = mc), a instanceof Date ? $(this, a.getTime(), b) : Z(this, a, b)
                }, yc.throttle = function(a, b) {
                    return ib(b) || (b = mc), this.throttleWithSelector(function() {
                        return id(a, b)
                    })
                }, yc.windowWithTime = function(a, b, c) {
                    var d, e = this;
                    return null == b && (d = a), ib(c) || (c = mc), "number" == typeof b ? d = b : "object" == typeof b && (d = a, c = b), new jd(function(b) {
                        function f() {
                            var a = new bc,
                                e = !1,
                                g = !1;
                            l.setDisposable(a), j === i ? (e = !0, g = !0) : i > j ? e = !0 : g = !0;
                            var n = e ? j : i,
                                o = n - m;
                            m = n, e && (j += d), g && (i += d), a.setDisposable(c.scheduleWithRelative(o, function() {
                                var a;
                                g && (a = new md, k.push(a), b.onNext(Tb(a, h))), e && (a = k.shift(), a.onCompleted()), f()
                            }))
                        }
                        var g, h, i = d,
                            j = a,
                            k = [],
                            l = new cc,
                            m = 0;
                        return g = new Xb(l), h = new dc(g), k.push(new md), b.onNext(Tb(k[0], h)), f(), g.add(e.subscribe(function(a) {
                            var b, c;
                            for(b = 0, c = k.length; c > b; b++) k[b].onNext(a)
                        }, function(a) {
                            var c, d;
                            for(c = 0, d = k.length; d > c; c++) k[c].onError(a);
                            b.onError(a)
                        }, function() {
                            var a, c;
                            for(a = 0, c = k.length; c > a; a++) k[a].onCompleted();
                            b.onCompleted()
                        })), h
                    })
                }, yc.windowWithTimeOrCount = function(a, b, c) {
                    var d = this;
                    return ib(c) || (c = mc), new jd(function(e) {
                        function f(b) {
                            var d = new bc;
                            timerD.setDisposable(d), d.setDisposable(c.scheduleWithRelative(a, function() {
                                var a;
                                b === windowId && (i = 0, a = ++windowId, j.onCompleted(), j = new md, e.onNext(Tb(j, h)), f(a))
                            }))
                        }
                        var f, g, h, i = 0,
                            j = new md;
                        return timerD = new cc, windowId = 0, g = new Xb(timerD), h = new dc(g), e.onNext(Tb(j, h)), f(0), g.add(d.subscribe(function(a) {
                            var c = 0,
                                d = !1;
                            j.onNext(a), i++, i === b && (d = !0, i = 0, c = ++windowId, j.onCompleted(), j = new md, e.onNext(Tb(j, h))), d && f(c)
                        }, function(a) {
                            j.onError(a), e.onError(a)
                        }, function() {
                            j.onCompleted(), e.onCompleted()
                        })), h
                    })
                }, yc.bufferWithTime = function() {
                    return this.windowWithTime.apply(this, arguments).selectMany(function(a) {
                        return a.toArray()
                    })
                }, yc.bufferWithTimeOrCount = function(a, b, c) {
                    return this.windowWithTimeOrCount(a, b, c).selectMany(function(a) {
                        return a.toArray()
                    })
                }, yc.timeInterval = function(a) {
                    var b = this;
                    return ib(a) || (a = mc), Gc(function() {
                        var c = a.now();
                        return b.map(function(b) {
                            var d = a.now(),
                                e = d - c;
                            return c = d, {
                                value: b,
                                interval: e
                            }
                        })
                    })
                }, yc.timestamp = function(a) {
                    return ib(a) || (a = mc), this.map(function(b) {
                        return {
                            value: b,
                            timestamp: a.now()
                        }
                    })
                }, yc.sample = function(a, b) {
                    return ib(b) || (b = mc), "number" == typeof a ? _(this, hd(a, b)) : _(this, a)
                }, yc.timeout = function(a, b, c) {
                    b || (b = Mc(new Error("Timeout"))), ib(c) || (c = mc);
                    var d = this,
                        e = a instanceof Date ? "scheduleWithAbsolute" : "scheduleWithRelative";
                    return new jd(function(f) {
                        var g = 0,
                            h = new bc,
                            i = new cc,
                            j = !1,
                            k = new cc;
                        i.setDisposable(h);
                        var l = function() {
                            var d = g;
                            k.setDisposable(c[e](a, function() {
                                g === d && (ob(b) && (b = Fc(b)), i.setDisposable(b.subscribe(f)))
                            }))
                        };
                        return l(), h.setDisposable(d.subscribe(function(a) {
                            j || (g++, f.onNext(a), l())
                        }, function(a) {
                            j || (g++, f.onError(a))
                        }, function() {
                            j || (g++, f.onCompleted())
                        })), new Xb(i, k)
                    })
                }, Ec.generateWithAbsoluteTime = function(a, b, c, d, e, f) {
                    return ib(f) || (f = mc), new jd(function(g) {
                        var h, i, j = !0,
                            k = !1,
                            l = a;
                        return f.scheduleRecursiveWithAbsolute(f.now(), function(a) {
                            k && g.onNext(h);
                            try {
                                j ? j = !1 : l = c(l), k = b(l), k && (h = d(l), i = e(l))
                            } catch(f) {
                                return void g.onError(f)
                            }
                            k ? a(i) : g.onCompleted()
                        })
                    })
                }, Ec.generateWithRelativeTime = function(a, b, c, d, e, f) {
                    return ib(f) || (f = mc), new jd(function(g) {
                        var h, i, j = !0,
                            k = !1,
                            l = a;
                        return f.scheduleRecursiveWithRelative(0, function(a) {
                            k && g.onNext(h);
                            try {
                                j ? j = !1 : l = c(l), k = b(l), k && (h = d(l), i = e(l))
                            } catch(f) {
                                return void g.onError(f)
                            }
                            k ? a(i) : g.onCompleted()
                        })
                    })
                }, yc.delaySubscription = function(a, b) {
                    return this.delayWithSelector(id(a, ib(b) ? b : mc), Hc)
                }, yc.delayWithSelector = function(a, b) {
                    var c, d, e = this;
                    return "function" == typeof a ? d = a : (c = a, d = b), new jd(function(a) {
                        var b = new Xb,
                            f = !1,
                            g = function() {
                                f && 0 === b.length && a.onCompleted()
                            }, h = new cc,
                            i = function() {
                                h.setDisposable(e.subscribe(function(c) {
                                    var e;
                                    try {
                                        e = d(c)
                                    } catch(f) {
                                        return void a.onError(f)
                                    }
                                    var h = new bc;
                                    b.add(h), h.setDisposable(e.subscribe(function() {
                                        a.onNext(c), b.remove(h), g()
                                    }, a.onError.bind(a), function() {
                                        a.onNext(c), b.remove(h), g()
                                    }))
                                }, a.onError.bind(a), function() {
                                    f = !0, h.dispose(), g()
                                }))
                            };
                        return c ? h.setDisposable(c.subscribe(function() {
                            i()
                        }, a.onError.bind(a), function() {
                            i()
                        })) : i(), new Xb(h, b)
                    })
                }, yc.timeoutWithSelector = function(a, b, c) {
                    if(1 === arguments.length) {
                        b = a;
                        var a = Kc()
                    }
                    c || (c = Mc(new Error("Timeout")));
                    var d = this;
                    return new jd(function(e) {
                        var f = new cc,
                            g = new cc,
                            h = new bc;
                        f.setDisposable(h);
                        var i = 0,
                            j = !1,
                            k = function(a) {
                                var b = i,
                                    d = function() {
                                        return i === b
                                    }, h = new bc;
                                g.setDisposable(h), h.setDisposable(a.subscribe(function() {
                                    d() && f.setDisposable(c.subscribe(e)), h.dispose()
                                }, function(a) {
                                    d() && e.onError(a)
                                }, function() {
                                    d() && f.setDisposable(c.subscribe(e))
                                }))
                            };
                        k(a);
                        var l = function() {
                            var a = !j;
                            return a && i++, a
                        };
                        return h.setDisposable(d.subscribe(function(a) {
                            if(l()) {
                                e.onNext(a);
                                var c;
                                try {
                                    c = b(a)
                                } catch(d) {
                                    return void e.onError(d)
                                }
                                k(c)
                            }
                        }, function(a) {
                            l() && e.onError(a)
                        }, function() {
                            l() && e.onCompleted()
                        })), new Xb(f, g)
                    })
                }, yc.throttleWithSelector = function(a) {
                    var b = this;
                    return new jd(function(c) {
                        var d, e = !1,
                            f = new cc,
                            g = 0,
                            h = b.subscribe(function(b) {
                                var h;
                                try {
                                    h = a(b)
                                } catch(i) {
                                    return void c.onError(i)
                                }
                                e = !0, d = b, g++;
                                var j = g,
                                    k = new bc;
                                f.setDisposable(k), k.setDisposable(h.subscribe(function() {
                                    e && g === j && c.onNext(d), e = !1, k.dispose()
                                }, c.onError.bind(c), function() {
                                    e && g === j && c.onNext(d), e = !1, k.dispose()
                                }))
                            }, function(a) {
                                f.dispose(), c.onError(a), e = !1, g++
                            }, function() {
                                f.dispose(), e && c.onNext(d), c.onCompleted(), e = !1, g++
                            });
                        return new Xb(h, f)
                    })
                }, yc.skipLastWithTime = function(a, b) {
                    ib(b) || (b = mc);
                    var c = this;
                    return new jd(function(d) {
                        var e = [];
                        return c.subscribe(function(c) {
                            var f = b.now();
                            for(e.push({
                                interval: f,
                                value: c
                            }); e.length > 0 && f - e[0].interval >= a;) d.onNext(e.shift().value)
                        }, d.onError.bind(d), function() {
                            for(var c = b.now(); e.length > 0 && c - e[0].interval >= a;) d.onNext(e.shift().value);
                            d.onCompleted()
                        })
                    })
                }, yc.takeLastWithTime = function(a, b, c) {
                    return this.takeLastBufferWithTime(a, b).selectMany(function(a) {
                        return Jc(a, c)
                    })
                }, yc.takeLastBufferWithTime = function(a, b) {
                    var c = this;
                    return ib(b) || (b = mc), new jd(function(d) {
                        var e = [];
                        return c.subscribe(function(c) {
                            var d = b.now();
                            for(e.push({
                                interval: d,
                                value: c
                            }); e.length > 0 && d - e[0].interval >= a;) e.shift()
                        }, d.onError.bind(d), function() {
                            for(var c = b.now(), f = []; e.length > 0;) {
                                var g = e.shift();
                                c - g.interval <= a && f.push(g.value)
                            }
                            d.onNext(f), d.onCompleted()
                        })
                    })
                }, yc.takeWithTime = function(a, b) {
                    var c = this;
                    return ib(b) || (b = mc), new jd(function(d) {
                        return new Xb(b.scheduleWithRelative(a, d.onCompleted.bind(d)), c.subscribe(d))
                    })
                }, yc.skipWithTime = function(a, b) {
                    var c = this;
                    return ib(b) || (b = mc), new jd(function(d) {
                        var e = !1;
                        return new Xb(b.scheduleWithRelative(a, function() {
                            e = !0
                        }), c.subscribe(function(a) {
                            e && d.onNext(a)
                        }, d.onError.bind(d), d.onCompleted.bind(d)))
                    })
                }, yc.skipUntilWithTime = function(a, b) {
                    ib(b) || (b = mc);
                    var c = this,
                        d = a instanceof Date ? "scheduleWithAbsolute" : "scheduleWithRelative";
                    return new jd(function(e) {
                        var f = !1;
                        return new Xb(b[d](a, function() {
                            f = !0
                        }), c.subscribe(function(a) {
                            f && e.onNext(a)
                        }, e.onError.bind(e), e.onCompleted.bind(e)))
                    })
                }, yc.takeUntilWithTime = function(a, b) {
                    ib(b) || (b = mc);
                    var c = this,
                        d = a instanceof Date ? "scheduleWithAbsolute" : "scheduleWithRelative";
                    return new jd(function(e) {
                        return new Xb(b[d](a, function() {
                            e.onCompleted()
                        }), c.subscribe(e))
                    })
                }, yc.exclusive = function() {
                    var a = this;
                    return new jd(function(b) {
                        var c = !1,
                            d = !1,
                            e = new bc,
                            f = new Xb;
                        return f.add(e), e.setDisposable(a.subscribe(function(a) {
                            if(!c) {
                                c = !0, ob(a) && (a = Fc(a));
                                var e = new bc;
                                f.add(e), e.setDisposable(a.subscribe(b.onNext.bind(b), b.onError.bind(b), function() {
                                    f.remove(e), c = !1, d && 1 === f.length && b.onCompleted()
                                }))
                            }
                        }, b.onError.bind(b), function() {
                            d = !0, c || 1 !== f.length || b.onCompleted()
                        })), f
                    })
                }, yc.exclusiveMap = function(a, b) {
                    var c = this;
                    return new jd(function(d) {
                        var e = 0,
                            f = !1,
                            g = !0,
                            h = new bc,
                            i = new Xb;
                        return i.add(h), h.setDisposable(c.subscribe(function(c) {
                            f || (f = !0, innerSubscription = new bc, i.add(innerSubscription), ob(c) && (c = Fc(c)), innerSubscription.setDisposable(c.subscribe(function(f) {
                                var g;
                                try {
                                    g = a.call(b, f, e++, c)
                                } catch(h) {
                                    return void d.onError(h)
                                }
                                d.onNext(g)
                            }, d.onError.bind(d), function() {
                                i.remove(innerSubscription), f = !1, g && 1 === i.length && d.onCompleted()
                            })))
                        }, d.onError.bind(d), function() {
                            g = !0, 1 !== i.length || f || d.onCompleted()
                        })), i
                    })
                }, gb.VirtualTimeScheduler = function(a) {
                    function b() {
                        throw new Error("Not implemented")
                    }

                    function c() {
                        return this.toDateTimeOffset(this.clock)
                    }

                    function d(a, b) {
                        return this.scheduleAbsoluteWithState(a, this.clock, b)
                    }

                    function e(a, b, c) {
                        return this.scheduleRelativeWithState(a, this.toRelative(b), c)
                    }

                    function f(a, b, c) {
                        return this.scheduleRelativeWithState(a, this.toRelative(b - this.now()), c)
                    }

                    function g(a, b) {
                        return b(), _b
                    }

                    function h(b, g) {
                        this.clock = b, this.comparer = g, this.isEnabled = !1, this.queue = new Vb(1024), a.call(this, c, d, e, f)
                    }
                    Rb(h, a);
                    var i = h.prototype;
                    return i.add = b, i.toDateTimeOffset = b, i.toRelative = b, i.schedulePeriodicWithState = function(a, b, c) {
                        var d = new ic(this, a, b, c);
                        return d.start()
                    }, i.scheduleRelativeWithState = function(a, b, c) {
                        var d = this.add(this.clock, b);
                        return this.scheduleAbsoluteWithState(a, d, c)
                    }, i.scheduleRelative = function(a, b) {
                        return this.scheduleRelativeWithState(b, a, g)
                    }, i.start = function() {
                        var a;
                        if(!this.isEnabled) {
                            this.isEnabled = !0;
                            do a = this.getNext(), null !== a ? (this.comparer(a.dueTime, this.clock) > 0 && (this.clock = a.dueTime), a.invoke()) : this.isEnabled = !1; while (this.isEnabled)
                        }
                    }, i.stop = function() {
                        this.isEnabled = !1
                    }, i.advanceTo = function(a) {
                        var b, c = this.comparer(this.clock, a);
                        if(this.comparer(this.clock, a) > 0) throw new Error(qb);
                        if(0 !== c && !this.isEnabled) {
                            this.isEnabled = !0;
                            do b = this.getNext(), null !== b && this.comparer(b.dueTime, a) <= 0 ? (this.comparer(b.dueTime, this.clock) > 0 && (this.clock = b.dueTime), b.invoke()) : this.isEnabled = !1; while (this.isEnabled);
                            this.clock = a
                        }
                    }, i.advanceBy = function(a) {
                        var b = this.add(this.clock, a),
                            c = this.comparer(this.clock, b);
                        if(c > 0) throw new Error(qb);
                        0 !== c && this.advanceTo(b)
                    }, i.sleep = function(a) {
                        var b = this.add(this.clock, a);
                        if(this.comparer(this.clock, b) >= 0) throw new Error(qb);
                        this.clock = b
                    }, i.getNext = function() {
                        for(var a; this.queue.length > 0;) {
                            if(a = this.queue.peek(), !a.isCancelled()) return a;
                            this.queue.dequeue()
                        }
                        return null
                    }, i.scheduleAbsolute = function(a, b) {
                        return this.scheduleAbsoluteWithState(b, a, g)
                    }, i.scheduleAbsoluteWithState = function(a, b, c) {
                        var d = this,
                            e = function(a, b) {
                                return d.queue.remove(f), c(a, b)
                            }, f = new ec(d, a, e, b, d.comparer);
                        return d.queue.enqueue(f), f.disposable
                    }, h
                }(gc), gb.HistoricalScheduler = function(a) {
                    function b(b, c) {
                        var d = null == b ? 0 : b,
                            e = c || mb;
                        a.call(this, d, e)
                    }
                    Rb(b, a);
                    var c = b.prototype;
                    return c.add = function(a, b) {
                        return a + b
                    }, c.toDateTimeOffset = function(a) {
                        return new Date(a).getTime()
                    }, c.toRelative = function(a) {
                        return a
                    }, b
                }(gb.VirtualTimeScheduler);
                var jd = gb.AnonymousObservable = function(a) {
                    function b(a) {
                        return "undefined" == typeof a ? a = _b : "function" == typeof a && (a = $b(a)), a
                    }

                    function c(d) {
                        function e(a) {
                            var c = function() {
                                try {
                                    e.setDisposable(b(d(e)))
                                } catch(a) {
                                    if(!e.fail(a)) throw a
                                }
                            }, e = new kd(a);
                            return kc.scheduleRequired() ? kc.schedule(c) : c(), e
                        }
                        return this instanceof c ? void a.call(this, e) : new c(d)
                    }
                    return Rb(c, a), c
                }(Ec),
                    kd = function(a) {
                        function b(b) {
                            a.call(this), this.observer = b, this.m = new bc
                        }
                        Rb(b, a);
                        var c = b.prototype;
                        return c.next = function(a) {
                            var b = !1;
                            try {
                                this.observer.onNext(a), b = !0
                            } catch(c) {
                                throw c
                            } finally {
                                b || this.dispose()
                            }
                        }, c.error = function(a) {
                            try {
                                this.observer.onError(a)
                            } catch(b) {
                                throw b
                            } finally {
                                this.dispose()
                            }
                        }, c.completed = function() {
                            try {
                                this.observer.onCompleted()
                            } catch(a) {
                                throw a
                            } finally {
                                this.dispose()
                            }
                        }, c.setDisposable = function(a) {
                            this.m.setDisposable(a)
                        }, c.getDisposable = function() {
                            return this.m.getDisposable()
                        }, c.disposable = function(a) {
                            return arguments.length ? this.getDisposable() : setDisposable(a)
                        }, c.dispose = function() {
                            a.prototype.dispose.call(this), this.m.dispose()
                        }, b
                    }(zc),
                    ld = function(a) {
                        function b(a) {
                            return this.underlyingObservable.subscribe(a)
                        }

                        function c(c, d, e) {
                            a.call(this, b), this.key = c, this.underlyingObservable = e ? new jd(function(a) {
                                return new Xb(e.getDisposable(), d.subscribe(a))
                            }) : d
                        }
                        return Rb(c, a), c
                    }(Ec),
                    md = gb.Subject = function(a) {
                        function b(a) {
                            return f.call(this), this.isStopped ? this.exception ? (a.onError(this.exception), _b) : (a.onCompleted(), _b) : (this.observers.push(a), new $c(this, a))
                        }

                        function c() {
                            a.call(this, b), this.isDisposed = !1, this.isStopped = !1, this.observers = []
                        }
                        return Rb(c, a), Sb(c.prototype, wc, {
                            hasObservers: function() {
                                return this.observers.length > 0
                            },
                            onCompleted: function() {
                                if(f.call(this), !this.isStopped) {
                                    var a = this.observers.slice(0);
                                    this.isStopped = !0;
                                    for(var b = 0, c = a.length; c > b; b++) a[b].onCompleted();
                                    this.observers = []
                                }
                            },
                            onError: function(a) {
                                if(f.call(this), !this.isStopped) {
                                    var b = this.observers.slice(0);
                                    this.isStopped = !0, this.exception = a;
                                    for(var c = 0, d = b.length; d > c; c++) b[c].onError(a);
                                    this.observers = []
                                }
                            },
                            onNext: function(a) {
                                if(f.call(this), !this.isStopped)
                                    for(var b = this.observers.slice(0), c = 0, d = b.length; d > c; c++) b[c].onNext(a)
                            },
                            dispose: function() {
                                this.isDisposed = !0, this.observers = null
                            }
                        }), c.create = function(a, b) {
                            return new od(a, b)
                        }, c
                    }(Ec),
                    nd = gb.AsyncSubject = function(a) {
                        function b(a) {
                            if(f.call(this), !this.isStopped) return this.observers.push(a), new $c(this, a);
                            var b = this.exception,
                                c = this.hasValue,
                                d = this.value;
                            return b ? a.onError(b) : c ? (a.onNext(d), a.onCompleted()) : a.onCompleted(), _b
                        }

                        function c() {
                            a.call(this, b), this.isDisposed = !1, this.isStopped = !1, this.value = null, this.hasValue = !1, this.observers = [], this.exception = null
                        }
                        return Rb(c, a), Sb(c.prototype, wc, {
                            hasObservers: function() {
                                return f.call(this), this.observers.length > 0
                            },
                            onCompleted: function() {
                                var a, b, c;
                                if(f.call(this), !this.isStopped) {
                                    this.isStopped = !0;
                                    var d = this.observers.slice(0),
                                        e = this.value,
                                        g = this.hasValue;
                                    if(g)
                                        for(b = 0, c = d.length; c > b; b++) a = d[b], a.onNext(e), a.onCompleted();
                                    else
                                        for(b = 0, c = d.length; c > b; b++) d[b].onCompleted();
                                    this.observers = []
                                }
                            },
                            onError: function(a) {
                                if(f.call(this), !this.isStopped) {
                                    var b = this.observers.slice(0);
                                    this.isStopped = !0, this.exception = a;
                                    for(var c = 0, d = b.length; d > c; c++) b[c].onError(a);
                                    this.observers = []
                                }
                            },
                            onNext: function(a) {
                                f.call(this), this.isStopped || (this.value = a, this.hasValue = !0)
                            },
                            dispose: function() {
                                this.isDisposed = !0, this.observers = null, this.exception = null, this.value = null
                            }
                        }), c
                    }(Ec),
                    od = function(a) {
                        function b(a) {
                            return this.observable.subscribe(a)
                        }

                        function c(c, d) {
                            a.call(this, b), this.observer = c, this.observable = d
                        }
                        return Rb(c, a), Sb(c.prototype, wc, {
                            onCompleted: function() {
                                this.observer.onCompleted()
                            },
                            onError: function(a) {
                                this.observer.onError(a)
                            },
                            onNext: function(a) {
                                this.observer.onNext(a)
                            }
                        }), c
                    }(Ec);
                "function" == typeof define && "object" == typeof define.amd && define.amd ? (bb.Rx = gb, define(function() {
                    return gb
                })) : cb && db ? eb ? (db.exports = gb).Rx = gb : cb.Rx = gb : bb.Rx = gb
            }).call(this)
        }).call(this, a("JkpR2F"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        JkpR2F: 3
    }
],
160: [
    function(a, b, c) {
        (function(d) {
            (function(e) {
                var f = {
                    "boolean": !1,
                    "function": !0,
                    object: !0,
                    number: !1,
                    string: !1,
                    undefined: !1
                }, g = f[typeof window] && window || this,
                    h = f[typeof c] && c && !c.nodeType && c,
                    i = f[typeof b] && b && !b.nodeType && b,
                    j = (i && i.exports === h && h, f[typeof d] && d);
                !j || j.global !== j && j.window !== j || (g = j), "function" == typeof define && define.amd ? define(["rx.virtualtime", "exports"], function(a, b) {
                    return g.Rx = e(g, b, a), g.Rx
                }) : "object" == typeof b && b && b.exports === h ? b.exports = e(g, b.exports, a("./rx.all")) : g.Rx = e(g, {}, g.Rx)
            }).call(this, function(a, b, c) {
                function d(a, b) {
                    return 1 === a.length && Array.isArray(a[b]) ? a[b] : o.call(a)
                }

                function e(a) {
                    this.predicate = a
                }

                function f(a) {
                    this.predicate = a
                }
                var g = c.Observer,
                    h = c.Observable,
                    i = c.Notification,
                    j = c.VirtualTimeScheduler,
                    k = c.Disposable,
                    l = k.empty,
                    m = k.create,
                    n = c.CompositeDisposable,
                    o = (c.SingleAssignmentDisposable, Array.prototype.slice),
                    p = c.internals.inherits,
                    q = c.internals.isEqual;
                e.prototype.equals = function(a) {
                    return a === this ? !0 : null == a ? !1 : "N" !== a.kind ? !1 : this.predicate(a.value)
                }, f.prototype.equals = function(a) {
                    return a === this ? !0 : null == a ? !1 : "E" !== a.kind ? !1 : this.predicate(a.exception)
                };
                var r = c.ReactiveTest = {
                    created: 100,
                    subscribed: 200,
                    disposed: 1e3,
                    onNext: function(a, b) {
                        return "function" == typeof b ? new s(a, new e(b)) : new s(a, i.createOnNext(b))
                    },
                    onError: function(a, b) {
                        return "function" == typeof b ? new s(a, new f(b)) : new s(a, i.createOnError(b))
                    },
                    onCompleted: function(a) {
                        return new s(a, i.createOnCompleted())
                    },
                    subscribe: function(a, b) {
                        return new t(a, b)
                    }
                }, s = c.Recorded = function(a, b, c) {
                        this.time = a, this.value = b, this.comparer = c || q
                    };
                s.prototype.equals = function(a) {
                    return this.time === a.time && this.comparer(this.value, a.value)
                }, s.prototype.toString = function() {
                    return this.value.toString() + "@" + this.time
                };
                var t = c.Subscription = function(a, b) {
                    this.subscribe = a, this.unsubscribe = b || Number.MAX_VALUE
                };
                t.prototype.equals = function(a) {
                    return this.subscribe === a.subscribe && this.unsubscribe === a.unsubscribe
                }, t.prototype.toString = function() {
                    return "(" + this.subscribe + ", " + this.unsubscribe === Number.MAX_VALUE ? "Infinite" : this.unsubscribe + ")"
                };
                var u = c.MockDisposable = function(a) {
                    this.scheduler = a, this.disposes = [], this.disposes.push(this.scheduler.clock)
                };
                u.prototype.dispose = function() {
                    this.disposes.push(this.scheduler.clock)
                };
                var v = function(a) {
                    function b(b) {
                        a.call(this), this.scheduler = b, this.messages = []
                    }
                    p(b, a);
                    var c = b.prototype;
                    return c.onNext = function(a) {
                        this.messages.push(new s(this.scheduler.clock, i.createOnNext(a)))
                    }, c.onError = function(a) {
                        this.messages.push(new s(this.scheduler.clock, i.createOnError(a)))
                    }, c.onCompleted = function() {
                        this.messages.push(new s(this.scheduler.clock, i.createOnCompleted()))
                    }, b
                }(g),
                    w = function(a) {
                        function b(a) {
                            var b = this;
                            this.observers.push(a), this.subscriptions.push(new t(this.scheduler.clock));
                            var c = this.subscriptions.length - 1;
                            return m(function() {
                                var d = b.observers.indexOf(a);
                                b.observers.splice(d, 1), b.subscriptions[c] = new t(b.subscriptions[c].subscribe, b.scheduler.clock)
                            })
                        }

                        function c(c, d) {
                            a.call(this, b);
                            var e, f, g = this;
                            this.scheduler = c, this.messages = d, this.subscriptions = [], this.observers = [];
                            for(var h = 0, i = this.messages.length; i > h; h++) e = this.messages[h], f = e.value,
                            function(a) {
                                c.scheduleAbsoluteWithState(null, e.time, function() {
                                    for(var b = g.observers.slice(0), c = 0, d = b.length; d > c; c++) a.accept(b[c]);
                                    return l
                                })
                            }(f)
                        }
                        return p(c, a), c
                    }(h),
                    x = function(a) {
                        function b(a) {
                            var b, c, d = this;
                            this.subscriptions.push(new t(this.scheduler.clock));
                            for(var e = this.subscriptions.length - 1, f = new n, g = 0, h = this.messages.length; h > g; g++) b = this.messages[g], c = b.value,
                            function(c) {
                                f.add(d.scheduler.scheduleRelativeWithState(null, b.time, function() {
                                    return c.accept(a), l
                                }))
                            }(c);
                            return m(function() {
                                d.subscriptions[e] = new t(d.subscriptions[e].subscribe, d.scheduler.clock), f.dispose()
                            })
                        }

                        function c(c, d) {
                            a.call(this, b), this.scheduler = c, this.messages = d, this.subscriptions = []
                        }
                        return p(c, a), c
                    }(h);
                return c.TestScheduler = function(a) {
                    function b(a, b) {
                        return a > b ? 1 : b > a ? -1 : 0
                    }

                    function c() {
                        a.call(this, 0, b)
                    }
                    return p(c, a), c.prototype.scheduleAbsoluteWithState = function(b, c, d) {
                        return c <= this.clock && (c = this.clock + 1), a.prototype.scheduleAbsoluteWithState.call(this, b, c, d)
                    }, c.prototype.add = function(a, b) {
                        return a + b
                    }, c.prototype.toDateTimeOffset = function(a) {
                        return new Date(a).getTime()
                    }, c.prototype.toRelative = function(a) {
                        return a
                    }, c.prototype.startWithTiming = function(a, b, c, d) {
                        var e, f, g = this.createObserver();
                        return this.scheduleAbsoluteWithState(null, b, function() {
                            return e = a(), l
                        }), this.scheduleAbsoluteWithState(null, c, function() {
                            return f = e.subscribe(g), l
                        }), this.scheduleAbsoluteWithState(null, d, function() {
                            return f.dispose(), l
                        }), this.start(), g
                    }, c.prototype.startWithDispose = function(a, b) {
                        return this.startWithTiming(a, r.created, r.subscribed, b)
                    }, c.prototype.startWithCreate = function(a) {
                        return this.startWithTiming(a, r.created, r.subscribed, r.disposed)
                    }, c.prototype.createHotObservable = function() {
                        var a = d(arguments, 0);
                        return new w(this, a)
                    }, c.prototype.createColdObservable = function() {
                        var a = d(arguments, 0);
                        return new x(this, a)
                    }, c.prototype.createObserver = function() {
                        return new v(this)
                    }, c
                }(j), c
            })
        }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./rx.all": 159
    }
],
161: [
    function(a, b) {
        var c = a("./dist/rx.all");
        a("./dist/rx.testing");
        var d = a("events").EventEmitter,
            e = c.Observable;
        c.Node = {
            fromCallback: function(a, b, c, d) {
                return e.fromCallback(a, b, c, d)
            },
            fromNodeCallback: function(a, b, c, d) {
                return e.fromNodeCallback(a, b, c, d)
            },
            fromEvent: function(a, b, c) {
                return e.fromEvent(a, b, c)
            },
            toEventEmitter: function(a, b, c) {
                var e = new d;
                return c || (c = function(a) {
                    return a
                }), e.publish = function() {
                    e.subscription = a.subscribe(function(a) {
                        e.emit(b, c(a))
                    }, function(a) {
                        e.emit("error", a)
                    }, function() {
                        e.emit("end")
                    })
                }, e
            },
            fromStream: function(a) {
                return e.create(function(b) {
                    function c(a) {
                        b.onNext(a)
                    }

                    function d(a) {
                        b.onError(a)
                    }

                    function e() {
                        b.onCompleted()
                    }
                    return a.addListener("data", c), a.addListener("error", d), a.addListener("end", e),
                    function() {
                        a.removeListener("data", c), a.removeListener("error", d), a.removeListener("end", e)
                    }
                }).publish().refCount()
            },
            writeToStream: function(a, b, c) {
                return a.subscribe(function(a) {
                    b.write(a, c)
                }, function(a) {
                    b.emit("error", a)
                }, function() {
                    !b._isStdio && b.end()
                })
            }
        }, b.exports = c
    }, {
        "./dist/rx.all": 159,
        "./dist/rx.testing": 160,
        events: 2
    }
],
162: [
    function(a, b) {
        ! function(a, b, c, d, e, f, g, h, i) {
            function j(a) {
                var b, c = a.length,
                    e = this,
                    f = 0,
                    g = e.i = e.j = 0,
                    h = e.S = [];
                for(c || (a = [c++]); d > f;) h[f] = f++;
                for(f = 0; d > f; f++) h[f] = h[g = r & g + a[f % c] + (b = h[f])], h[g] = b;
                (e.g = function(a) {
                    for(var b, c = 0, f = e.i, g = e.j, h = e.S; a--;) b = h[f = r & f + 1], c = c * d + h[r & (h[f] = h[g = r & g + b]) + (h[g] = b)];
                    return e.i = f, e.j = g, c
                })(d)
            }

            function k(a, b) {
                var c, d = [],
                    e = typeof a;
                if(b && "object" == e)
                    for(c in a) try {
                        d.push(k(a[c], b - 1))
                    } catch(f) {}
                return d.length ? d : "string" == e ? a : a + "\x00"
            }

            function l(a, b) {
                for(var c, d = a + "", e = 0; e < d.length;) b[r & e] = r & (c ^= 19 * b[r & e]) + d.charCodeAt(e++);
                return n(b)
            }

            function m(c) {
                try {
                    return a.crypto.getRandomValues(c = new Uint8Array(d)), n(c)
                } catch(e) {
                    return [+new Date, a, (c = a.navigator) && c.plugins, a.screen, n(b)]
                }
            }

            function n(a) {
                return String.fromCharCode.apply(0, a)
            }
            var o = c.pow(d, e),
                p = c.pow(2, f),
                q = 2 * p,
                r = d - 1,
                s = c["seed" + i] = function(a, f, g) {
                    var h = [];
                    f = 1 == f ? {
                        entropy: !0
                    } : f || {};
                    var r = l(k(f.entropy ? [a, n(b)] : null == a ? m() : a, 3), h),
                        s = new j(h);
                    return l(n(s.S), b), (f.pass || g || function(a, b, d) {
                        return d ? (c[i] = a, b) : a
                    })(function() {
                        for(var a = s.g(e), b = o, c = 0; p > a;) a = (a + c) * d, b *= d, c = s.g(1);
                        for(; a >= q;) a /= 2, b /= 2, c >>>= 1;
                        return(a + c) / b
                    }, r, "global" in f ? f.global : this == c)
                };
            l(c[i](), b), g && g.exports ? g.exports = s : h && h.amd && h(function() {
                return s
            })
        }(this, [], Math, 256, 6, 52, "object" == typeof b && b, "function" == typeof define && define, "random")
    }, {}
],
163: [
    function(a, b) {
        b.exports = function(a, b, c) {
            var d = Math.max(0, Math.min(1, (c - a) / (b - a)));
            return d * d * (3 - 2 * d)
        }
    }, {}
],
164: [
    function(a, b) {
        var c = a("react"),
            d = a("./GameModel"),
            e = a("./game/GameBoard"),
            f = a("./ui/GoldScoreBar"),
            g = a("./ui/HeroStats"),
            h = a("./ui/PlayControls"),
            i = a("./ui/Live"),
            j = a("./ui/TurnCount"),
            k = c.createClass({
                displayName: "Game",
                propTypes: {
                    game: c.PropTypes.instanceOf(d).isRequired,
                    refreshRate: c.PropTypes.number.isRequired,
                    increaseSpeed: c.PropTypes.func,
                    decreaseSpeed: c.PropTypes.func,
                    play: c.PropTypes.func,
                    pause: c.PropTypes.func,
                    jump: c.PropTypes.func,
                    playing: c.PropTypes.bool,
                    buffered: c.PropTypes.number,
                    withControls: c.PropTypes.bool,
                    keyboardControls: c.PropTypes.bool,
                    live: c.PropTypes.bool,
                    map: c.PropTypes.string,
                    debug: c.PropTypes.bool,
                    quality: c.PropTypes.oneOf([1, 2, 3])
                },
                getDefaultProps: function() {
                    return {
                        map: "lowlands",
                        debug: !1,
                        quality: 3,
                        withControls: !0,
                        keyboardControls: !0
                    }
                },
                resetGameBoard: function() {
                    this.boardRender && this.boardRender.destroy(), this.boardRender = new e(this.refs.boardBox.getDOMNode(), this.props.map, this.props.debug, this.props.quality)
                },
                componentDidMount: function() {
                    this.resetGameBoard(), this.boardRender.setGame(this.props.game)
                },
                componentDidUnmount: function() {
                    this.boardRender.destroy()
                },
                componentDidUpdate: function(a) {
                    if(a.game.id !== this.props.game.id) a.game && a.game.destroy(), this.resetGameBoard(), this.boardRender.setGame(this.props.game);
                    else if(a.game.turn !== this.props.game.turn) {
                        var b = a.game.turn !== this.props.game.turn - 1 || this.props.refreshRate < 20 ? 0 : this.props.refreshRate;
                        this.boardRender.setGame(this.props.game, b)
                    }
                    a.quality !== this.props.quality && this.boardRender.setQuality(this.props.quality)
                },
                render: function() {
                    var a = this.props.game,
                        b = this.boardRender && this.boardRender.getHeight() || 400,
                        d = this.props.refreshRate,
                        e = d ? "" + Math.round(1e3 / d) : "max";
                    return c.createElement("div", {
                        className: "game"
                    }, this.props.live ? c.createElement(i, null) : "", c.createElement("div", {
                        className: "boardBox",
                        ref: "boardBox"
                    }), c.createElement(f, {
                        game: a,
                        height: b
                    }), c.createElement("div", {
                        className: "infos"
                    }, c.createElement(j, {
                        game: a
                    }), c.createElement("div", {
                        className: "heroes"
                    }, this.props.game.heroes.map(function(b) {
                        return c.createElement(g, {
                            key: b.id,
                            hero: b,
                            game: a
                        })
                    }))), this.props.withControls ? c.createElement(h, {
                        game: a,
                        timeBarWidth: b,
                        speed: e,
                        increaseSpeed: this.props.increaseSpeed,
                        decreaseSpeed: this.props.decreaseSpeed,
                        play: this.props.play,
                        pause: this.props.pause,
                        jump: this.props.jump,
                        keyboard: this.props.keyboardControls,
                        playing: this.props.playing,
                        buffered: this.props.buffered
                    }) : "")
                }
            });
        b.exports = k
    }, {
        "./GameModel": 166,
        "./game/GameBoard": 172,
        "./ui/GoldScoreBar": 184,
        "./ui/HeroStats": 185,
        "./ui/Live": 186,
        "./ui/PlayControls": 187,
        "./ui/TurnCount": 188,
        react: 158
    }
],
165: [
    function(a, b) {
        function c(a) {
            return d(a ? "/ai/" + a + "/now-playing" : "/now-playing").flatMap(function(a) {
                return e.Observable.fromArray(a)
            }).distinct()
        }
        var d = a("./network/EventSourceObservable"),
            e = a("rx");
        b.exports = c
    }, {
        "./network/EventSourceObservable": 182,
        rx: 161
    }
],
166: [
    function(a, b) {
        function c(a, b) {
            if(this.id = a.id, this.board = a.board, this.finished = a.finished, this.heroes = a.heroes, this.maxTurns = a.maxTurns, this.turn = a.turn, this.tilesArray = this.board.tiles.match(/.{2}/g), this.previous = b, b) {
                if(!(b instanceof c)) throw new Error("previousState must be an instance of GameModel");
                this.meta = this.aggregateMeta(b)
            } else this.meta = this.initialMeta()
        }

        function d(a, b) {
            return b.gold - a.gold
        }

        function e(a) {
            var b = {};
            for(var c in a) b[c] = a[c];
            return b
        }

        function f(a, b) {
            for(var c = [], d = 0; a > d; ++d) c.push(b);
            return c
        }

        function g(a, b) {
            return 1 === a && 0 === b ? 1 : -1 === a && 0 === b ? 3 : 0 === a && 1 === b ? 2 : 0 === a && -1 === b ? 0 : null
        }
        var h = .4,
            i = .7,
            j = 2,
            k = 2,
            l = 400,
            m = 80,
            n = 60;
        c.prototype = {
            destroy: function() {
                for(var a in this.meta) this.meta[a] = null;
                this.meta = null, this.tilesArray = null, this.id = null, this.board = null, this.finished = null, this.heroes = null, this.maxTurns = null, this.turn = null, this.previous && this.previous.destroy(), this.previous = null
            },
            initialMeta: function() {
                var a = this,
                    b = 0;
                return this.forEachTile(function(a) {
                    "$" === a[0] && ++b
                }), {
                    bloodyGroundFactor: f(this.tilesArray.length, 0),
                    footprintFactor: f(this.tilesArray.length, {
                        orientation: 0,
                        foot: 0,
                        blood: 0
                    }),
                    nbMines: b,
                    mines: f(b, {
                        owner: 0,
                        domination: 0,
                        adjacentOpponents: []
                    }),
                    heroes: [1, 2, 3, 4].map(function(b, c) {
                        return {
                            myturn: !1,
                            from: null,
                            to: a.heroes[c],
                            orientation: [0],
                            move: null,
                            attack: null,
                            attackOrientations: [],
                            attacked: null,
                            kill: null,
                            killed: null,
                            takeMine: null,
                            drink: null,
                            winning: !1,
                            bloodUnderFoot: 0,
                            nbMines: 0
                        }
                    })
                }
            },
            aggregateMeta: function(a) {
                if(a.turn !== this.turn - 1) throw new Error("aggregateMeta: game does not follow! " + a.turn + "->" + this.turn);
                var b = this.getWinner(),
                    c = e(a.meta);
                c.heroes = a.meta.heroes.map(e), c.heroes.forEach(function(c, d) {
                    this.turn % 4 === 0 && (c.winning = b === d + 1), c.nbMines = 0, c.myturn = !1, c.move = null, c.takeMine = null, c.drink = null, c.kill = null, c.attack = null, c.killed = null, c.attacked = null, c.orientation = [c.orientation[c.orientation.length - 1]], c.attackOrientations = [], c.from = a.heroes[d], c.to = this.heroes[d]
                }, this), c.mines = [].concat(c.mines);
                var d = 0,
                    f = this.heroes.map(function(a) {
                        return this.indexForPosition(a.pos.x, a.pos.y)
                    }, this);
                this.forEachTile(function(a, b) {
                    if("$" === a[0]) {
                        var e = "-" === a[1] ? 0 : parseInt(a[1], 10);
                        e && c.heroes[e - 1].nbMines++;
                        for(var g = this.indexToPosition(b), h = this.neighborsIndexes(g.x, g.y), i = [], j = 0; j < h.length; ++j) {
                            var k = 1 + f.indexOf(h[j]);
                            k && i.push(k)
                        }
                        c.mines[d++] = {
                            owner: e,
                            adjacentOpponents: i.filter(function(a) {
                                return a !== e
                            })
                        }
                    }
                }, this), c.mines.forEach(function(a) {
                    a.domination = a.owner ? c.heroes[a.owner - 1].nbMines / c.nbMines : 0
                }, this);
                var o, p = a.turn % 4,
                    q = this.heroes[p],
                    r = a.heroes[p],
                    s = e(c.heroes[p]),
                    t = a.meta.heroes[p],
                    u = a.indexForPosition(r.pos.x, r.pos.y),
                    v = a.neighborsIndexes(r.pos.x, r.pos.y),
                    w = v.map(function(b) {
                        return "[]" === a.tilesArray[b] ? b : null
                    }).filter(function(a) {
                        return null !== a
                    }),
                    x = v.map(function(b) {
                        var c = a.tilesArray[b];
                        return c && "$" === c[0] ? b : null
                    }).filter(function(a) {
                        return null !== a
                    }),
                    y = x.filter(function(b) {
                        var c = q.id.toString();
                        return a.tilesArray[b][1] !== c && this.tilesArray[b][1] === c
                    }, this),
                    z = [1, 2, 3, 4].filter(function(a) {
                        return a !== q.id
                    }),
                    A = z.filter(function(b) {
                        var c = a.heroes[b - 1],
                            d = this.heroes[b - 1];
                        return d.life < c.life - 1
                    }, this),
                    B = z.filter(function(b) {
                        var c = a.heroes[b - 1],
                            d = this.heroes[b - 1];
                        return 100 === d.life && c.life <= 20
                    }, this),
                    C = A.concat(B),
                    D = q.pos.x - r.pos.x,
                    E = q.pos.y - r.pos.y;
                s.myturn = !0, s.drink = w.length && q.life > r.life && w || null, s.move = !(0 === D && 0 === E) && {
                    dx: D,
                    dy: E
                } || null, s.takeMine = y.length && y || null, s.attack = C.length && C || null, s.kill = B.length && B || null;
                var F, G = [],
                    H = g(D, E),
                    I = [];
                return I.push(H), s.attack && C.forEach(function(b) {
                    o = a.heroes[b - 1].pos, F = g(o.x - q.pos.x, o.y - q.pos.y), G.push(F), I.push(F)
                }), s.takeMine && (o = a.indexToPosition(y[0]), F = g(o.x - q.pos.x, o.y - q.pos.y), G.push(F), I.push(F)), s.drink && (o = a.indexToPosition(w[0]), I.push(g(o.x - q.pos.x, o.y - q.pos.y))), I = I.filter(function(a) {
                    return null !== a
                }), 0 === I.length && I.push(t.orientation[t.orientation.length - 1]), s.orientation = I, s.attackOrientations = G, c.heroes[q.id - 1] = s, C.forEach(function(a) {
                    c.heroes[a - 1].attacked = q.id
                }), B.forEach(function(a) {
                    c.heroes[a - 1].killed = q.id, c.heroes[a - 1].bloodUnderFoot = 0
                }), c.bloodyGroundFactor = c.bloodyGroundFactor.map(function(a) {
                    return Math.max(0, a - 1 / l)
                }), A.forEach(function(b) {
                    var d = a.heroes[b - 1].pos;
                    c.bloodyGroundFactor[a.indexForPosition(d.x, d.y)] += i
                }), B.forEach(function(b) {
                    var d = a.heroes[b - 1].pos;
                    c.bloodyGroundFactor[a.indexForPosition(d.x, d.y)] += j
                }), s.takeMine && (c.bloodyGroundFactor[u] += h), c.footprintFactor = c.footprintFactor.map(function(a) {
                    var b = Math.max(0, a.foot - 1 / m),
                        c = Math.max(0, a.blood - 1 / n);
                    return {
                        orientation: a.orientation,
                        foot: b,
                        blood: c
                    }
                }), s.move && (s.bloodUnderFoot = Math.max(c.bloodyGroundFactor[u], s.bloodUnderFoot - 1 / k), c.footprintFactor[u] = {
                    orientation: H,
                    foot: 1,
                    blood: s.bloodUnderFoot
                }), c
            },
            isOver: function() {
                return this.finished
            },
            getWinner: function() {
                var a = this.heroes.slice();
                return a.sort(d), a[0].gold === a[1].gold ? -1 : a[0].id
            },
            forEachTile: function(a, b) {
                var c = this.board.size;
                this.tilesArray.forEach(function(b, d) {
                    var e = d % c,
                        f = Math.floor(d / c);
                    a.call(this, b, d, e, f)
                }, b || this)
            },
            tileAt: function(a, b) {
                return this.tilesArray[this.indexForPosition(a, b)]
            },
            wallAt: function(a, b) {
                var c = this.tileAt(a, b);
                return void 0 === c || "##" === c
            },
            indexToPosition: function(a) {
                return {
                    x: a % this.board.size,
                    y: Math.floor(a / this.board.size)
                }
            },
            indexForPosition: function(a, b) {
                var c = this.board.size;
                return 0 > a || a >= c || 0 > b || b >= c ? null : a + c * b
            },
            neighborsIndexes: function(a, b) {
                return [this.indexForPosition(a, b - 1), this.indexForPosition(a + 1, b), this.indexForPosition(a, b + 1), this.indexForPosition(a - 1, b)]
            },
            neighbors: function(a, b) {
                return this.neighborsIndexes(a, b).map(function(a) {
                    return null === a ? null : this.tilesArray[a]
                }, this)
            },
            getWallStatus: function(a, b) {
                var c = this.neighborsIndexes(a, b).filter(function(a) {
                    return null !== a && "##" === this.tilesArray[a]
                }, this).length > 0;
                return c ? "" : "alone"
            }
        }, b.exports = c
    }, {}
],
167: [
    function(a, b) {
        function c(a) {
            return {
                x: a.y,
                y: a.x
            }
        }

        function d(a) {
            return a.heroes.forEach(function(a) {
                a.pos = c(a.pos), a.spawnPos = c(a.spawnPos)
            }), a
        }

        function e(a, b) {
            return new h(b, a)
        }

        function f(a) {
            return g("/events/" + a).distinct(function(a) {
                return a.turn
            }).map(d).scan(null, e)
        }
        var g = a("./network/EventSourceObservable"),
            h = a("./GameModel");
        b.exports = f
    }, {
        "./GameModel": 166,
        "./network/EventSourceObservable": 182
    }
],
168: [
    function(a, b) {
        function c(a, b, c) {
            e.Sprite.call(this, j[Math.floor(Math.random() * j.length)]), this.position = a.clone(), this.vel = b.clone(), this.lastRender = this.startTime = Date.now(), this.duration = c
        }

        function d(a, b, d, f) {
            e.DisplayObjectContainer.call(this), this.startTime = Date.now(), this.duration = d, this.position = b.clone();
            for(var g = new e.Point(b.x - a.x, b.y - a.y), h = Math.atan2(g.y, g.x), i = Math.sqrt(g.x * g.x + g.y * g.y), j = 0; f > j; ++j) {
                var k = h + 1.2 * Math.PI * (Math.random() - .5),
                    l = i * (.5 + .6 * Math.random()),
                    m = d * (.6 + .8 * Math.random()),
                    n = 12 * (Math.random() - .5) + Math.cos(k) * l,
                    o = 12 * (Math.random() - .5) + Math.sin(k) * l;
                this.addChild(new c(new e.Point(0, 0), new e.Point(n, o), m))
            }
        }
        var e = a("pixi.js"),
            f = a("./loadTexture"),
            g = a("smoothstep"),
            h = a("./tilePIXI"),
            i = f("bloodParticles.png"),
            j = [0, 1, 2, 3, 4, 5, 6, 7].map(function(a) {
                return h(8)(i, a, 0)
            });
        c.prototype = Object.create(e.Sprite.prototype), c.prototype.constructor = c, c.prototype.destroy = function() {
            this.parent.removeChild(this)
        }, c.prototype.render = function() {
            var a = Date.now(),
                b = Math.min((a - this.startTime) / this.duration, 1),
                c = (a - this.lastRender) / 1e3;
            this.position.x += this.vel.x * c, this.position.y += this.vel.y * c, this.alpha = g(1, .5, b), this.lastRender = a, 1 === b && this.destroy()
        }, d.prototype = Object.create(e.DisplayObjectContainer.prototype), d.prototype.constructor = d, d.prototype.destroy = function() {
            this.children.forEach(function(a) {
                a.destroy()
            }), this.parent.removeChild(this)
        }, d.prototype.render = function() {
            var a = Math.min((Date.now() - this.startTime) / this.duration, 1);
            this.children.forEach(function(a) {
                a.render()
            }), 1 === a && this.destroy()
        }, b.exports = d
    }, {
        "./loadTexture": 176,
        "./tilePIXI": 180,
        "pixi.js": 11,
        smoothstep: 163
    }
],
169: [
    function(a, b) {
        function c(a) {
            d.DisplayObjectContainer.call(this), this.bloods = h[Math.floor(Math.random() * h.length)], this.spriteFrom = new d.Sprite(this.bloods[0]), this.spriteTo = new d.Sprite(this.bloods[0]), this.addChild(this.spriteFrom), this.addChild(this.spriteTo), this.update(a)
        }
        for(var d = a("pixi.js"), e = a("./tilePIXI"), f = a("./loadTexture"), g = f("blood.png"), h = [], i = 0; 4 > i; ++i) {
            for(var j = [], k = 0; 7 > k; ++k) j.push(e(32)(g, k, i));
            h.push(j)
        }
        c.prototype = Object.create(d.DisplayObjectContainer.prototype), c.prototype.constructor = c, c.prototype.update = function(a) {
            a = Math.max(0, Math.min(a, this.bloods.length - 1));
            var b = Math.floor(a);
            b === this.bloods.length - 1 && b--;
            var c = b + 1,
                d = a - b;
            this.spriteFrom.alpha = 1 - d, this.spriteTo.alpha = d, b !== this._from && (this._from = b, this.spriteFrom.setTexture(this.bloods[b]), this.spriteTo.setTexture(this.bloods[c]))
        }, b.exports = c
    }, {
        "./loadTexture": 176,
        "./tilePIXI": 180,
        "pixi.js": 11
    }
],
170: [
    function(a, b) {
        function c(a, b) {
            d.DisplayObjectContainer.call(this), this.dead = !1, this.phantomSprite = new d.Sprite(g.blinkTextures[a.meta.orientation || 0]), this.phantomSprite.position.x = -4, this.phantomSprite.position.y = -8, this.effect = new f, this.phantomSprite.filters = [this.effect], this.startTime = Date.now(), this.duration = b, this.addChild(this.phantomSprite)
        }
        var d = a("pixi.js"),
            e = a("smoothstep"),
            f = a("./shaders/Dead"),
            g = a("./Hero");
        c.prototype = Object.create(d.DisplayObjectContainer.prototype), c.prototype.constructor = c, c.prototype.destroy = function() {
            this.parent.removeChild(this)
        }, c.prototype.render = function() {
            var a = Math.min((Date.now() - this.startTime) / this.duration, 1);
            this.effect.progress = a, this.alpha = .7 * e(1, .5, a), 1 === a && this.destroy()
        }, b.exports = c
    }, {
        "./Hero": 173,
        "./shaders/Dead": 178,
        "pixi.js": 11,
        smoothstep: 163
    }
],
171: [
    function(a, b) {
        function c(a, b) {
            d.DisplayObjectContainer.call(this), this.footprintOpacity = b, this.spriteFrom = new d.Sprite(h[0]), this.spriteTo = new d.Sprite(h[1]), this.spriteTo.position.x = this.spriteFrom.position.x = 12, this.spriteTo.position.y = this.spriteFrom.position.y = 12, this.spriteTo.pivot.x = this.spriteFrom.pivot.x = 12, this.spriteTo.pivot.y = this.spriteFrom.pivot.y = 12, this.addChild(this.spriteFrom), this.addChild(this.spriteTo), this.update(a)
        }
        var d = a("pixi.js"),
            e = a("./tilePIXI"),
            f = a("./loadTexture"),
            g = f("footprints.png"),
            h = [0, 1].map(function(a) {
                return e(24)(g, a, 0)
            });
        c.prototype = Object.create(d.DisplayObjectContainer.prototype), c.prototype.constructor = c, c.prototype.update = function(a) {
            var b = a.foot,
                c = Math.min(a.blood, 1),
                d = (1 - c) * this.footprintOpacity;
            this.spriteFrom.alpha = b * d, this.spriteTo.alpha = b * c, this.spriteFrom.rotation = a.orientation * Math.PI / 2, this.spriteTo.rotation = a.orientation * Math.PI / 2
        }, b.exports = c
    }, {
        "./loadTexture": 176,
        "./tilePIXI": 180,
        "pixi.js": 11
    }
],
172: [
    function(a, b) {
        function c(a, b) {
            return a.position.y - b.position.y + .001 * (a.position.x - b.position.x)
        }

        function d(a, b, c, d) {
            this.container = a, this.map = k[b || "lowlands"](), this.tileSize = this.map.tileSize, this.borderSize = this.map.borderSize, this.debug = c || !1, this.setQuality(d || 3)
        }
        var e = a("pixi.js"),
            f = a("raf"),
            g = a("./Hero"),
            h = a("./DeadBody"),
            i = a("./Mine"),
            j = a("./Tavern"),
            k = a("./maps"),
            l = a("./BloodySoil"),
            m = a("./BloodParticles"),
            n = a("./Footprint"),
            o = a("./loadTexture"),
            p = o("winner_parchment.png");
        e.StripShader.prototype.destroy = function() {
            this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
        }, d.prototype = {
            setQuality: function(a) {
                this.quality = a
            },
            setGame: function(a, b) {
                this.initialized || (this.initGame(a), this.initialized = !0), this.updateGame(a, b), a.isOver() ? (this.messageContainer && this.gameStage.removeChild(this.messageContainer), this.gameStage.addChild(this.messageContainer = new e.DisplayObjectContainer), this.initGameOver()) : this.messageContainer && (this.gameStage.removeChild(this.messageContainer), this.messageContainer = null), this.objectsContainer.children.sort(c), this.renderer.render(this.gameStage)
            },
            destroy: function() {
                this.stopRenderLoop(), this.renderer.primitiveBatch || (this.renderer.primitiveBatch = {
                    destroy: function() {}
                });
                try {
                    this.renderer.destroy()
                } catch(a) {
                    console.error(a)
                }
                this.container.removeChild(this.renderer.view)
            },
            getHeight: function() {
                return this.boardWidth
            },
            initGame: function(a) {
                this.game = a, this.initRendering(), this.initBackground(), this.initObjects(), this.initHeroes(), this.startRenderLoop()
            },
            startRenderLoop: function() {
                var a = this,
                    b = this._stopped = (this._stopped || 0) + 1;
                ! function c() {
                    a.quality < 2 || a._stopped === b && (f(c), a.render())
                }()
            },
            stopRenderLoop: function() {
                this._stopped++
            },
            render: function() {
                this.heroes.forEach(function(a) {
                    a.render()
                }), this.mines.forEach(function(a) {
                    a.render()
                }), this.ghostsContainer.children.forEach(function(a) {
                    a.render()
                }, this), this.bloodParticlesContainer.children.forEach(function(a) {
                    a.render()
                }, this), this.renderer.render(this.gameStage)
            },
            updateGame: function(a, b) {
                this.quality < 2 && b && (b = 1);
                var c = this.game && a.turn === this.game.turn + 1;
                c || (this.bloodParticlesContainer.children.forEach(function(a) {
                    a.destroy()
                }), this.ghostsContainer.children.forEach(function(a) {
                    a.destroy()
                })), this.game = a, this.debug && console.log("Turn " + this.game.turn + " - Hero" + (1 + this.game.turn % 4)), this.game.meta.heroes.forEach(function(a, d) {
                    var e = this.heroes[d];
                    e.updateHero(a, b, c), a.killed && this.createDeadBodyForHero(e, b), this.debug && console.log(e.logMeta(a))
                }, this), this.updateBloodySoil(), this.updateFootprints(), this.game.meta.mines.forEach(function(a, c) {
                    this.mines[c].updateOwner(a, b)
                }, this), this.render()
            },
            createDeadBodyForHero: function(a, b) {
                if(!(this.quality < 3)) {
                    var c = new h(a, 5e3 + 4 * b);
                    c.position.x = a.x, c.position.y = a.y, this.ghostsContainer.addChild(c)
                }
            },
            triggerBloodParticle: function(a, b, c, d) {
                if(!(this.quality < 3)) {
                    var e = this.heroes[a - 1].position.clone(),
                        f = this.heroes[b - 1].position.clone(),
                        g = 8,
                        h = 6;
                    e.x += g, e.y += h, f.x += g, f.y += h;
                    var i = (c ? 1e3 : 500) + d,
                        j = c ? 14 : 5;
                    this.bloodParticlesContainer.addChild(new m(e, f, i, j))
                }
            },
            updateBloodySoil: function() {
                this.game.meta.bloodyGroundFactor.forEach(function(a, b) {
                    var c = this._bloodySoil[b];
                    if(a || c)
                        if(c) c.update(a);
                        else {
                            c = this._bloodySoil[b] = new l(a);
                            var d = this.game.indexToPosition(b);
                            c.pivot.x = (8 + this.tileSize) / 2, c.pivot.y = (8 + this.tileSize) / 2, c.position.x = d.x * this.tileSize - 4 + c.pivot.x + Math.round(6 * (Math.random() - .5)), c.position.y = d.y * this.tileSize - 4 + c.pivot.y + Math.round(6 * (Math.random() - .5)), c.rotation = 2 * Math.PI * Math.random(), this.bloodySoilContainer.addChild(c)
                        }
                }, this)
            },
            updateFootprints: function() {
                this.game.meta.footprintFactor.forEach(function(a, b) {
                    var c = this._footprints[b];
                    if(a || c)
                        if(c) c.update(a);
                        else {
                            c = this._footprints[b] = new n(a, this.opacityForFootprint(b)), c.opacity = 1;
                            var d = this.game.indexToPosition(b);
                            c.position.x = d.x * this.tileSize, c.position.y = d.y * this.tileSize, this.footprintsContainer.addChild(c)
                        }
                }, this)
            },
            initRendering: function() {
                var a = this.game.board.size;
                this.boardWidth = 2 * this.borderSize + this.tileSize * a, this.renderer = new e.autoDetectRenderer(this.boardWidth, this.boardWidth), this.container.appendChild(this.renderer.view), this.gameStage = new e.Stage, this._bloodySoil = [], this._footprints = [];
                for(var b = 0; a * a > b; ++b) this._bloodySoil[b] = null, this._footprints[b] = null;
                this.gameContainer = new e.DisplayObjectContainer, this.gameContainer.x = this.borderSize, this.gameContainer.y = this.borderSize, this.gameContainer.addChild(this.terrainContainer = new e.DisplayObjectContainer), this.gameContainer.addChild(this.terrainContainer2 = new e.DisplayObjectContainer), this.gameContainer.addChild(this.bloodySoilContainer = new e.DisplayObjectContainer), this.gameContainer.addChild(this.footprintsContainer = new e.DisplayObjectContainer), this.gameContainer.addChild(this.heroesContainer = this.objectsContainer = new e.DisplayObjectContainer), this.gameContainer.addChild(this.ghostsContainer = new e.DisplayObjectContainer), this.gameContainer.addChild(this.bloodParticlesContainer = new e.DisplayObjectContainer), this.gameContainer.addChild(this.effectsContainer = new e.DisplayObjectContainer), this.gameStage.addChild(this.gameContainer)
            },
            initBackground: function() {
                this.mapGenerationResult = this.map.generate(this.game, this.terrainContainer, this.terrainContainer2, this.objectsContainer), this.opacityForFootprint = this.mapGenerationResult.opacityForFootprint || function() {
                    return 1
                }
            },
            initObjects: function() {
                this.mines = [], this.taverns = [];
                var a = 0;
                this.game.forEachTile(function(b, c, d, f) {
                    var g;
                    if("[]" === b) g = new j, this.taverns.push(g);
                    else if("$" === b[0]) {
                        var h = this.game.meta.mines[a++];
                        g = new i(h, this.quality > 1), this.mines.push(g)
                    }
                    if(g) {
                        var k = new e.DisplayObjectContainer;
                        k.position.x = this.tileSize * d, k.position.y = this.tileSize * f, k.addChild(g), this.objectsContainer.addChild(k)
                    }
                }, this)
            },
            initHeroes: function() {
                this.heroes = this.game.meta.heroes.map(function(a, b) {
                    var c = new g(b + 1, a, this.tileSize, this.effectsContainer, this.triggerBloodParticle.bind(this));
                    return this.heroesContainer.addChild(c), c
                }, this)
            },
            initGameOver: function() {
                var a = this.game,
                    b = a.getWinner(),
                    c = this.boardWidth,
                    d = 240,
                    f = 113,
                    g = Math.floor((c - d) / 2),
                    h = Math.floor((c - f) / 2),
                    i = new e.Sprite(p);
                i.position.x = g, i.position.y = h, this.messageContainer.addChild(i);
                var j, k, l = {
                        fill: "black",
                        font: "bold 16px Arial",
                        align: "center"
                    };
                if(-1 === b) j = new e.Text("Draw!", l), j.position.x = g + 100, j.position.y = h + 45, this.messageContainer.addChild(j), k = new e.Text("No winner :(", l), k.position.x = g + 80, k.position.y = h + 70, this.messageContainer.addChild(k);
                else {
                    var m = a.heroes[b - 1].name;
                    m.length > 23 && (m = m.substring(0, 23) + "â€¦"), j = new e.Text("And the winner is:", l), j.position.x = Math.floor((c - j.width) / 2), j.position.y = h + 14, this.messageContainer.addChild(j), k = new e.Text(m, l), k.position.x = Math.floor((c - k.width) / 2), k.position.y = h + 40, this.messageContainer.addChild(k);
                    var n = new e.Sprite(this.heroes[b - 1].getTexture());
                    n.position.x = g + 103, n.position.y = h + 66, this.messageContainer.addChild(n)
                }
            }
        }, b.exports = d
    }, {
        "./BloodParticles": 168,
        "./BloodySoil": 169,
        "./DeadBody": 170,
        "./Footprint": 171,
        "./Hero": 173,
        "./Mine": 174,
        "./Tavern": 175,
        "./loadTexture": 176,
        "./maps": 177,
        "pixi.js": 11,
        raf: 12
    }
],
173: [
    function(a, b) {
        function c(a, b, c) {
            var d = Math.max(0, Math.min(1, (c - a) / (b - a)));
            return d
        }

        function d(a, b, c) {
            return a + (b - a) * c
        }

        function e(a, b, c) {
            return {
                x: d(a.x, b.x, c),
                y: d(a.y, b.y, c)
            }
        }

        function f(a, b, c) {
            return~~ a << 16 | ~~b << 8 | ~~c
        }

        function g(a) {
            var b = new i.Sprite(a);
            return b.position.x = -4, b.position.y = -8, b
        }

        function h(a, b, c, d, e) {
            this.id = a, this.tileSize = c, i.DisplayObjectContainer.call(this), this.lifeIndicator = new i.Graphics, this.lifeIndicator.position.x = -5, this.lifeIndicator.position.y = 0, this.addChild(this.lifeIndicator), this.heroTextures = u, this.heroSprite = g(this.heroTextures[a - 1][0]), this.blinkSprite = g(w[0]), this.blinkSprite.alpha = 0, this.blastSprite = new i.Sprite(s), this.blastSprite.alpha = 0, this.blastSprite.position.x = 12, this.blastSprite.position.y = 10, this.blastSprite.pivot.x = 25, this.blastSprite.pivot.y = 25, this.effectsGroup = new i.DisplayObjectContainer, this.effectsGroup.position = this.position, this.effectsGroup.addChild(this.blastSprite), d.addChild(this.effectsGroup), this.addChild(this.heroSprite), this.addChild(this.blinkSprite), this.triggerBloodParticle = e, this.interpolationEndTime = 0, this._offsetRotation = 0, this.updateHero(b, 0, !1)
        }
        var i = a("pixi.js"),
            j = a("smoothstep"),
            k = a("bezier-easing"),
            l = a("./tilePIXI"),
            m = a("./loadTexture"),
            n = k(0, 1.33, 0, 1),
            o = k(1, 0, 1, 1),
            p = k(0, 1, 1, 1),
            q = l(32),
            r = m("heroes.png"),
            s = m("blast.png"),
            t = [3, 2, 0, 1],
            u = [3, 2, 1, 0].map(function(a) {
                return t.map(function(b) {
                    return q(r, b, a)
                })
            }),
            v = [3, 2, 1, 0].map(function(a) {
                return t.map(function(b) {
                    return q(r, b + 5, a)
                })
            }),
            w = t.map(function(a) {
                return q(r, a, 4)
            });
        h.prototype = Object.create(i.DisplayObjectContainer.prototype), h.prototype.constructor = h, h.prototype.refreshHeroSprite = function(a) {
            (this._currentOrientation !== a || this._currentHeroTextures !== this.heroTextures) && (this._currentHeroTextures = this.heroesTexture, this._currentOrientation = a, this.heroSprite.setTexture(this.heroTextures[this.id - 1][a]), this.blinkSprite.setTexture(w[a]))
        }, h.prototype.drawLifeIndicator = function(a) {
            var b = Math.round(this.tileSize * a / 100),
                c = f(255 * j(60, 30, a), 255 * j(0, 90, a), 50);
            this.lifeIndicator.clear();
            var d = this.lifeIndicator;
            d.beginFill(c), d.drawRect(0, this.tileSize - b, 3, b)
        }, h.prototype.setPosition = function(a) {
            this.position.x = a.x * this.tileSize, this.position.y = a.y * this.tileSize
        }, h.prototype.updateHero = function(a, b, c) {
            this.meta = a, this.heroTextures = a.winning ? v : u, this.updatedTime = Date.now(), this.consecutiveTurn = c, this.interpolationTime = b, this.blastSprite.alpha = 0, this._offsetRotation = (Math.random() - .5) * Math.PI / 4, a.attack && c && a.attack.forEach(function(c) {
                this.triggerBloodParticle(this.id, c, a.kill, b)
            }, this)
        }, h.prototype.render = function() {
            var a = this.meta,
                b = Date.now() - this.updatedTime;
            if(a.from && this.consecutiveTurn && this.interpolationTime) {
                var f = c(0, this.interpolationTime, b),
                    g = a.from.life < a.to.life ? o : p;
                this.drawLifeIndicator(d(a.from.life, a.to.life, g(f)));
                var h = a.attack ? n(f) : f;
                this.setPosition(a.killed || a.move ? e(a.from.pos, a.to.pos, h) : a.to.pos);
                var i = this.updatedTime / a.orientation.length,
                    j = Math.min(a.orientation.length - 1, Math.floor(f * a.orientation.length)),
                    k = b - j * i,
                    l = a.orientation[j];
                this.refreshHeroSprite(l), -1 !== a.attackOrientations.indexOf(l) ? (this.blastSprite.rotation = this._offsetRotation + (l - 1) * Math.PI / 2, this.blastSprite.alpha = (a.attack || a.takeMine) && 50 > k ? 1 : 0) : this.blastSprite.alpha = 0
            } else this.drawLifeIndicator(a.to.life), this.setPosition(a.to.pos), this.refreshHeroSprite(a.orientation[a.orientation.length - 1]);
            this.blinkSprite.alpha = a.killed || (a.takeMine || a.attacked) && 80 > b ? 1 : 0
        }, h.prototype.getTexture = function() {
            return this.heroTextures[this.id - 1][2]
        }, h.prototype.logMeta = function(a) {
            var b = "Hero" + this.id + ": ",
                c = ["from", "to"];
            for(var d in a)
                if(-1 === c.indexOf(d) && null !== a[d]) {
                    var e = a[d],
                        f = typeof a[d],
                        g = a[d] instanceof Array;
                    "object" !== f || g || (e = JSON.stringify(e)), "boolean" === f ? b += e ? d + " " : "" : (!g || e.length) && (b += d + "=" + e + " ")
                }
            return b
        }, h.blinkTextures = w, b.exports = h
    }, {
        "./loadTexture": 176,
        "./tilePIXI": 180,
        "bezier-easing": 1,
        "pixi.js": 11,
        smoothstep: 163
    }
],
174: [
    function(a, b) {
        function c(a) {
            return 0 === a ? [1, 1, 1] : r[a - 1]
        }

        function d(a) {
            return 0 === a ? 0 : s[a - 1]
        }

        function e(a, b) {
            a.position.x = -4, 0 === b ? (a.setTexture(q[0]), a.position.y = 0) : (a.setTexture(q[b]), a.position.y = -8)
        }

        function f(a, b) {
            a.setTexture(p[b])
        }

        function g(a, b) {
            h.DisplayObjectContainer.call(this), this.previousSprite = new h.Sprite(q[0]), this.currentSprite = new h.Sprite(q[0]), b && (this.mineSparkShader = new k, this.currentSprite.filters = [this.mineSparkShader]), this.goblinFront = new h.Sprite(p[0]), this.goblinFront.position.x = -4, this.goblinFront.position.y = -14, this.goblinBack = new h.Sprite(p[0]), this.goblinBack.position.x = -4, this.goblinBack.position.y = -20, this.addChild(this.goblinBack), this.addChild(this.previousSprite), this.addChild(this.currentSprite), this.addChild(this.goblinFront), this.updateOwner(a), this.startTimeMineSpark = Date.now() - 1e3 * Math.PI * 2 * Math.random()
        }
        var h = a("pixi.js"),
            i = a("smoothstep"),
            j = a("./tilePIXI"),
            k = a("./shaders/MineSpark"),
            l = a("./loadTexture"),
            m = l("goblins.png"),
            n = l("mines.png"),
            o = j(32),
            p = [o(m, 0, 0), o(m, 0, 1), o(m, 0, 2), o(m, 0, 3), o(m, 0, 4)],
            q = [o(n, 0, 0), o(n, 0, 3), o(n, 0, 4), o(n, 0, 2), o(n, 0, 1)],
            r = [
                [.8, 0, 0],
                [0, .2, 1],
                [.3, 1, 0],
                [1, .8, 0]
            ],
            s = [.5, 1, .8, .8];
        g.prototype = Object.create(h.DisplayObjectContainer.prototype), g.prototype.constructor = g, g.prototype.updateOwner = function(a, b) {
            var g = a.owner;
            this.updatedTime = Date.now(), this.interpolationTime = b, this.mineSparkShader && (this.mineSparkShader.brightness = 0 === g ? 0 : .5 + 3 * a.domination);
            var h = a.adjacentOpponents.length > 0;
            this.ownerChanged = g !== this.currentOwner, this.goblinVisibleChanged = h !== this.goblinVisible, this.ownerChanged || this.goblinVisibleChanged ? (this.goblinVisible = h, this.previousOwner = this.currentOwner || 0, this.currentOwner = g, this.mineSparkShader && (this.mineSparkShader.goldcolor = c(g), this.mineSparkShader.colordistance = d(g)), f(this.goblinBack, this.previousOwner), f(this.goblinFront, this.previousOwner), e(this.currentSprite, this.currentOwner), e(this.previousSprite, this.previousOwner), this.interpolationTime || (this.previousSprite.alpha = 0, this.currentSprite.alpha = 1), this.goblinFront.alpha = h ? 1 : 0, this.goblinBack.alpha = 1 - this.goblinFront.alpha) : (this.previousSprite.alpha = 0, this.currentSprite.alpha = 1)
        }, g.prototype.render = function() {
            if(this.mineSparkShader && (this.mineSparkShader.time = (Date.now() - this.startTimeMineSpark) / 1e3), this.ownerChanged && this.previousOwner && this.interpolationTime) {
                var a = i(0, this.interpolationTime, Date.now() - this.updatedTime);
                this.previousSprite.alpha = 1 - a, this.currentSprite.alpha = a
            }
        }, b.exports = g
    }, {
        "./loadTexture": 176,
        "./shaders/MineSpark": 179,
        "./tilePIXI": 180,
        "pixi.js": 11,
        smoothstep: 163
    }
],
175: [
    function(a, b) {
        function c() {
            d.Sprite.call(this, f), this.position.x = 2, this.position.y = -10
        }
        var d = a("pixi.js"),
            e = a("./loadTexture"),
            f = e("beer2.png");
        c.prototype = Object.create(d.Sprite.prototype), c.prototype.constructor = c, b.exports = c
    }, {
        "./loadTexture": 176,
        "pixi.js": 11
    }
],
176: [
    function(a, b) {
        var c = a("pixi.js");
        b.exports = function(a) {
            return c.Texture.fromImage("/assets/img/game/" + a)
        }
    }, {
        "pixi.js": 11
    }
],
177: [
    function(a, b) {
        function c(a) {
            var b;
            return function() {
                return b || (b = a()), b
            }
        }

        function d(a, b, c, d) {
            return function(e, f) {
                var g, h = "function" == typeof a ? a(e, f) : a,
                    i = "function" == typeof b ? b(e, f) : b,
                    j = c(e, f),
                    k = c(e, f - 1),
                    l = c(e, f + 1),
                    m = c(e - 1, f),
                    n = c(e + 1, f),
                    o = c(e - 1, f - 1),
                    p = c(e - 1, f + 1),
                    q = c(e + 1, f - 1),
                    r = c(e + 1, f + 1),
                    s = k + l + m + n + o + p + q + r;
                return j ? h : 0 === s ? i : k && l || m && n ? i : (r && 1 === s && (g = i + "_" + h + "_se"), d(g) ? g : (p && 1 === s && (g = i + "_" + h + "_sw"), d(g) ? g : (q && 1 === s && (g = i + "_" + h + "_ne"), d(g) ? g : (o && 1 === s && (g = i + "_" + h + "_nw"), d(g) ? g : (k && m && (g = h + "_" + i + "_se"), d(g) ? g : (l && m && (g = h + "_" + i + "_ne"), d(g) ? g : (k && n && (g = h + "_" + i + "_sw"), d(g) ? g : (l && n && (g = h + "_" + i + "_nw"), d(g) ? g : (n && !m && (g = i + "_" + h + "_e"), d(g) ? g : (m && !n && (g = i + "_" + h + "_w"), d(g) ? g : (k && !l && (g = i + "_" + h + "_n"), d(g) ? g : (l && !k && (g = i + "_" + h + "_s"), d(g) ? g : i))))))))))))
            }
        }
        var e = a("pixi.js"),
            f = a("perlin-noise"),
            g = a("seedrandom"),
            h = a("smoothstep"),
            i = a("./tilePIXI"),
            j = a("./loadTexture"),
            k = j("heroes.png"),
            l = [3, 2, 1, 0].map(function(a) {
                return i(32)(k, 4, a)
            });
        b.exports = {
            lowlands: c(function() {
                function a(a) {
                    return a in p
                }

                function b(a) {
                    return -1 !== a.indexOf("earth") ? s[Math.floor(Math.random() * Math.random() * s.length)] : -1 !== a.indexOf("rock") ? t[Math.floor(Math.random() * t.length)] : u[Math.floor(Math.random() * u.length)]
                }

                function c(c, i, j, m) {
                    function n(a, b) {
                        var d = c.indexToPosition(a),
                            e = c.indexToPosition(b),
                            f = d.x - e.x,
                            g = d.y - e.y;
                        return Math.sqrt(f * f + g * g)
                    }

                    function o(a, b, d) {
                        var e = [];
                        return a = a.filter(d), b = a.concat(b), a.forEach(function(f) {
                            var g = c.indexToPosition(f),
                                h = c.neighborsIndexes(g.x, g.y).filter(function(c) {
                                    return d(c) ? -1 !== b.indexOf(c) ? !1 : -1 !== a.indexOf(c) ? !1 : !0 : !1
                                });
                            e = e.concat(h)
                        }), e.length ? o(e, b, d) : b
                    }

                    function q(a) {
                        return null === a || "##" === c.tilesArray[a]
                    }

                    function r(a, b) {
                        return b || (b = q),
                        function(d) {
                            var e = c.indexToPosition(d),
                                f = c.neighborsIndexes(e.x, e.y).filter(b);
                            return "##" === c.tilesArray[d] && f.length >= a
                        }
                    }

                    function s(a, b) {
                        -1 === a && a++, -1 === b && b++, a === w && a--, b === w && b--;
                        var d = c.indexForPosition(a, b);
                        return C[d]
                    }

                    function t(a) {
                        return function(b, c) {
                            return s(b, c) !== a
                        }
                    }
                    g(c.id, {
                        global: !0
                    });
                    var u, v = !0,
                        w = c.board.size,
                        x = f.generatePerlinNoise(w, w, {
                            octaveCount: 4,
                            amplitude: .05,
                            persistense: .3
                        }),
                        y = .7 + .2 * Math.random(),
                        z = 1.4 + .8 * Math.random(),
                        A = [];
                    for(u = 0; w > u; ++u) A.push(c.indexForPosition(0, u)), A.push(c.indexForPosition(w - 1, u)), A.push(c.indexForPosition(u, 0)), A.push(c.indexForPosition(u, w - 1));
                    var B = [],
                        C = [];
                    for(u = 0; w * w > u; ++u) {
                        B.push(u);
                        for(var D = x[u], E = 0, F = 0, G = 0, H = 0, I = 0; w * w > I; ++I) "[]" === c.tilesArray[I] ? (H++, F += h(6, 0, n(u, I))) : "$" === c.tilesArray[I][0] && (G++, E += h(9, 1, n(u, I)));
                        F /= H, E /= G, D = D * y + z * (E - F), C.push(.3 > D ? "earth" : D > .8 - .1 * Math.random() ? "rock" : "plain")
                    }
                    var J = v ? B : A,
                        K = o(J.filter(r(3)), [], r(3));
                    K = K.filter(r(2, function(a) {
                        return -1 !== K.indexOf(a)
                    }));
                    for(var L = d(s, "water", function(a, b) {
                        var d = c.indexForPosition(a, b);
                        return null !== d && -1 === K.indexOf(d)
                    }, a), M = 0, N = [], O = -1; w >= O; ++O)
                        for(var P = -1; w >= P; ++P) {
                            var Q, R, S, T = -1 === P || P === w || -1 === O || O === w || -1 !== K.indexOf(c.indexForPosition(P, O)),
                                U = new e.DisplayObjectContainer,
                                V = new e.DisplayObjectContainer,
                                W = new e.DisplayObjectContainer;
                            if(W.x = V.x = U.x = P * k, W.y = V.y = U.y = O * k, Q = L, R = Q(P, O), -1 === R.indexOf("water")) {
                                var X = s(P, O);
                                if("plain" !== X) {
                                    var Y = "plain";
                                    R = d(Y, X, t(X), a)(P, O)
                                }
                            }
                            if("plain" === R) {
                                ++M;
                                var Z = 2 * (.5 - Math.abs(x[c.indexForPosition(P, O)] - .5));
                                if(Math.random() < .2 * Z) {
                                    var $ = ["plain_grass1", "plain_grass2", "plain_flower", "plain_grass3"];
                                    R = $[Math.floor(Math.random() * Math.random() * 4)]
                                }
                            }
                            if(N[O * w + P] = R, S = new e.Sprite(p[R]), U.addChild(S), !T && c.wallAt(P, O)) {
                                var _ = b(R, P, O);
                                S = new e.Sprite(_), W.addChild(S)
                            }
                            for(var ab = 0; ab < c.heroes.length; ++ab) {
                                var bb = c.heroes[ab].spawnPos;
                                bb.x === P && bb.y === O && (S = new e.Sprite(l[ab]), S.position.x = -4, S.position.y = -8, S.alpha = .8, V.addChild(S))
                            }
                            U.children.length && i.addChild(U), W.children.length && m.addChild(W), V.children.length && j.addChild(V)
                        }
                    return {
                        opacityForFootprint: function(a) {
                            return 0 === N[a].indexOf("plain") ? 1 : 0
                        }
                    }
                }
                var k = 24,
                    m = i(k),
                    n = j("lowlands_24.png"),
                    o = [
                        ["plain", 1, 1],
                        ["water", 3, 2],
                        ["earth", 4, 2],
                        ["rock", 4, 3],
                        ["empty", 3, 3],
                        ["water_plain_se", 0, 0],
                        ["water_plain_s", 1, 0],
                        ["water_plain_sw", 2, 0],
                        ["water_plain_e", 0, 1],
                        ["water_plain_w", 2, 1],
                        ["water_plain_ne", 0, 2],
                        ["water_plain_n", 1, 2],
                        ["water_plain_nw", 2, 2],
                        ["plain_water_se", 3, 0],
                        ["plain_water_ne", 3, 1],
                        ["plain_water_sw", 4, 0],
                        ["plain_water_nw", 4, 1],
                        ["earth_plain_se", 5, 0],
                        ["earth_plain_s", 6, 0],
                        ["earth_plain_sw", 7, 0],
                        ["earth_plain_e", 5, 1],
                        ["earth_plain_w", 7, 1],
                        ["earth_plain_ne", 5, 2],
                        ["earth_plain_n", 6, 2],
                        ["earth_plain_nw", 7, 2],
                        ["plain_earth_se", 8, 0],
                        ["plain_earth_ne", 8, 1],
                        ["plain_earth_sw", 9, 0],
                        ["plain_earth_nw", 9, 1],
                        ["rock_plain_se", 5, 3],
                        ["rock_plain_s", 6, 3],
                        ["rock_plain_sw", 7, 3],
                        ["rock_plain_e", 5, 4],
                        ["rock_plain_w", 7, 4],
                        ["rock_plain_ne", 5, 5],
                        ["rock_plain_n", 6, 5],
                        ["rock_plain_nw", 7, 5],
                        ["plain_rock_se", 8, 2],
                        ["plain_rock_ne", 8, 3],
                        ["plain_rock_sw", 9, 2],
                        ["plain_rock_nw", 9, 3],
                        ["empty_plain_se", 0, 3],
                        ["empty_plain_s", 1, 3],
                        ["empty_plain_sw", 2, 3],
                        ["empty_plain_e", 0, 4],
                        ["empty_plain_w", 2, 4],
                        ["empty_plain_ne", 0, 5],
                        ["empty_plain_n", 1, 5],
                        ["empty_plain_nw", 2, 5],
                        ["plain_empty_se", 3, 4],
                        ["plain_empty_ne", 3, 5],
                        ["plain_empty_sw", 4, 4],
                        ["plain_empty_nw", 4, 5],
                        ["water_earth_se", 10, 2],
                        ["water_earth_s", 11, 2],
                        ["water_earth_sw", 12, 2],
                        ["water_earth_e", 10, 3],
                        ["water_earth_w", 12, 3],
                        ["water_earth_ne", 10, 4],
                        ["water_earth_n", 11, 4],
                        ["water_earth_nw", 12, 4],
                        ["earth_water_se", 8, 4],
                        ["earth_water_ne", 8, 5],
                        ["earth_water_sw", 9, 4],
                        ["earth_water_nw", 9, 5],
                        ["water_rock_se", 13, 2],
                        ["water_rock_s", 14, 2],
                        ["water_rock_sw", 15, 2],
                        ["water_rock_e", 13, 3],
                        ["water_rock_w", 15, 3],
                        ["water_rock_ne", 13, 4],
                        ["water_rock_n", 14, 4],
                        ["water_rock_nw", 15, 4],
                        ["rock_water_se", 12, 0],
                        ["rock_water_ne", 12, 1],
                        ["rock_water_sw", 13, 0],
                        ["rock_water_nw", 13, 1],
                        ["plain_grass1", 10, 0],
                        ["plain_grass2", 11, 0],
                        ["plain_grass3", 11, 1],
                        ["plain_flower", 10, 1]
                    ],
                    p = {};
                o.forEach(function(a) {
                    p[a[0]] = m(n, a[1], a[2])
                });
                var q = j("farming_fishing_24.png"),
                    r = j("stuff.png"),
                    s = [m(q, 5, 1), m(q, 1, 1), m(q, 0, 4.5), m(q, 6, 2), m(q, 0, 6.5), m(q, 6, 0), m(q, 1, 3), m(q, 6, 1), m(q, 7, 2), m(q, 8, 2), m(q, 7, 0), m(q, 8, 0), m(q, 7, 1), m(q, 8, 1)],
                    t = [m(r, 0, 1), m(r, 0, 2), m(r, 0, 3)],
                    u = [j("tree.png")];
                return {
                    generate: c,
                    borderSize: k,
                    tileSize: k
                }
            }),
            forest: c(function() {
                function a(a, d) {
                    var f = a.board.size,
                        i = new e.Sprite(h);
                    i.x = -b, i.y = -b, d.addChild(i);
                    var j = new e.Sprite(k);
                    j.x = -b, j.y = b * f, d.addChild(j);
                    var r = new e.Sprite(m);
                    r.x = b * f, r.y = -b, d.addChild(r);
                    var u = new e.Sprite(l);
                    u.x = b * f, u.y = b * f, d.addChild(u);
                    for(var v = 0; f > v; ++v) {
                        var x = new e.Sprite(p),
                            y = new e.Sprite(q),
                            z = new e.Sprite(n),
                            A = new e.Sprite(o);
                        z.y = x.x = -b, A.y = y.x = b * f, z.x = A.x = x.y = y.y = v * b, d.addChild(z), d.addChild(y), d.addChild(A), d.addChild(x)
                    }
                    a.forEachTile(function(b, f, h, i) {
                        var j = new e.DisplayObjectContainer;
                        if(j.position.x = c * h, j.position.y = c * i, j.addChild(new e.Sprite(g)), f % 10 === 1 && j.addChild(new e.Sprite(s)), "##" === b) {
                            var k, l = a.getWallStatus(h, i);
                            k = new e.Sprite("alone" === l ? w[f % w.length] : t), j.addChild(k)
                        }
                        d.addChild(j)
                    }, this)
                }
                var b = 24,
                    c = 24,
                    d = i(24),
                    f = j("plowed_soil_24.png"),
                    g = d(f, 0, 5),
                    h = d(f, 0, 2),
                    k = d(f, 0, 4),
                    l = d(f, 2, 4),
                    m = d(f, 2, 2),
                    n = d(f, 1, 2),
                    o = d(f, 1, 4),
                    p = d(f, 0, 3),
                    q = d(f, 2, 3),
                    r = j("tallgrass_24.png"),
                    s = d(r, 0, 5),
                    t = j("tree.png"),
                    u = j("farming_fishing_24.png"),
                    v = j("stuff.png"),
                    w = [d(u, 1, 1), d(u, 5, 1), d(v, 0, 0), d(v, 0, 1), d(v, 0, 2), d(v, 0, 3)];
                return {
                    generate: a,
                    borderSize: b,
                    tileSize: c
                }
            })
        }
    }, {
        "./loadTexture": 176,
        "./tilePIXI": 180,
        "perlin-noise": 10,
        "pixi.js": 11,
        seedrandom: 162,
        smoothstep: 163
    }
],
178: [
    function(a, b) {
        var c = a("pixi.js"),
            d = function() {
                c.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    progress: {
                        type: "1f",
                        value: 0
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float progress;", "float random(vec2 scale) {", "  return fract(sin(dot(gl_FragCoord.xy, scale)) * 43758.5453);", "}", "void main(void) {", "   float dispersion = progress * progress * 0.1;", "   vec4 color = texture2D(uSampler, vTextureCoord + dispersion * random(vTextureCoord));", "   vec3 c = mix(color.rgb, vec3(0.2126*color.r + 0.7152*color.g + 0.0722*color.b, 0.0, 0.0), smoothstep(0.0, 0.5, progress));", "   gl_FragColor = vec4(c, color.a*(1.0-progress));", "}"]
            };
        d.prototype = Object.create(c.AbstractFilter.prototype), d.prototype.constructor = d, Object.defineProperty(d.prototype, "progress", {
            get: function() {
                return this.uniforms.progress.value
            },
            set: function(a) {
                this.uniforms.progress.value = a
            }
        }), b.exports = d
    }, {
        "pixi.js": 11
    }
],
179: [
    function(a, b) {
        var c = a("pixi.js"),
            d = function() {
                c.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
                    time: {
                        type: "1f",
                        value: 0
                    },
                    goldcolor: {
                        type: "3fv",
                        value: [1, 0, 0]
                    },
                    colordistance: {
                        type: "1f",
                        value: .5
                    },
                    brightness: {
                        type: "1f",
                        value: 2
                    }
                }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float time;", "uniform vec3 goldcolor;", "uniform float colordistance;", "uniform float brightness;", "float random(vec2 scale) {", "  return fract(sin(dot(gl_FragCoord.xy, scale)) * 43758.5453);", "}", "void main(void) {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   float matchColor = smoothstep(colordistance, 0.0, distance(color.rgb, goldcolor));", "   vec3 c = mix(color.rgb, color.rgb * (1.0+brightness), matchColor * smoothstep(-1.0, 1.0, cos(6.0 * time + 3.0 * random(1000.0 * vTextureCoord))));", "   gl_FragColor = vec4(c, color.a);", "}"]
            };
        d.prototype = Object.create(c.AbstractFilter.prototype), d.prototype.constructor = d, Object.defineProperty(d.prototype, "goldcolor", {
            get: function() {
                return this.uniforms.goldcolor.value
            },
            set: function(a) {
                this.uniforms.goldcolor.value = a
            }
        }), Object.defineProperty(d.prototype, "brightness", {
            get: function() {
                return this.uniforms.brightness.value
            },
            set: function(a) {
                this.uniforms.brightness.value = a
            }
        }), Object.defineProperty(d.prototype, "colordistance", {
            get: function() {
                return this.uniforms.colordistance.value
            },
            set: function(a) {
                this.uniforms.colordistance.value = a
            }
        }), Object.defineProperty(d.prototype, "time", {
            get: function() {
                return this.uniforms.time.value
            },
            set: function(a) {
                this.uniforms.time.value = a
            }
        }), b.exports = d
    }, {
        "pixi.js": 11
    }
],
180: [
    function(a, b) {
        var c = a("pixi.js");
        b.exports = function(a) {
            return function(b, d, e) {
                return new c.Texture(b, {
                    x: d * a,
                    y: e * a,
                    width: a,
                    height: a
                })
            }
        }
    }, {
        "pixi.js": 11
    }
],
181: [
    function(a) {
        function b() {
            return !0
        }

        function c(a) {
            return a + 1
        }

        function d(a) {
            return a
        }

        function e(a) {
            return a.length > 0
        }

        function f(a, f) {
            function g() {
                A && k.renderComponent(n({
                    game: A,
                    refreshRate: y,
                    increaseSpeed: m,
                    decreaseSpeed: t,
                    play: v,
                    pause: u,
                    jump: w,
                    playing: z,
                    buffered: B,
                    map: q.query.map,
                    debug: r,
                    quality: s
                }), a)
            }

            function h(a) {
                z = !0, C.skip(a - 1).zip(E, d).bufferWithTime(1e3 / 60).takeUntil(D).filter(e).subscribe(function(a) {
                    A = a[a.length - 1], g()
                }, function(a) {
                    console.error(a), z = !1, g()
                }, function() {
                    z = !1, g()
                })
            }

            function i(a) {
                x = "max" === a ? a : isNaN(a) ? p : parseInt(a, 10), y = "max" === x ? 0 : 1e3 / x
            }

            function m() {
                if("max" !== x) {
                    var a;
                    for(a = 0; a < o.length && x > o[a]; ++a);
                    i(a >= o.length - 1 ? "max" : o[a + 1]), g()
                }
            }

            function t() {
                if("max" === x) i(o[o.length - 1]);
                else {
                    var a;
                    for(a = o.length - 1; a >= 0 && x < o[a]; --a);
                    i(0 >= a ? o[0] : o[a - 1])
                }
                g()
            }

            function u() {
                z && (D.onNext("paused"), g())
            }

            function v() {
                z || (h(A && A.turn !== A.maxTurns ? A.turn : 1), g())
            }

            function w(a) {
                a -= 1, 0 > a || A && a >= A.maxTurns || (D.onNext("jumped"), C.skip(a).first().subscribe(function(a) {
                    A = a, g()
                }))
            }
            var x, y, z = !1,
                A = null,
                B = 0,
                C = new j.ReplaySubject;
            l(f).subscribe(C);
            var D = new j.Subject,
                E = j.Observable.generateWithRelativeTime(0, b, c, d, function() {
                    return y
                });
            i(q.query.speed), C.subscribe(function(a) {
                B = a.turn
            }), v()
        }

        function g(a, b) {
            function c() {
                var a = new window.XMLHttpRequest;
                a.onload = function() {
                    200 === a.status && (document.getElementById("user-elo").innerHTML = a.response.getElementById("user-elo").innerHTML, document.getElementById("recent-games").innerHTML = a.response.getElementById("recent-games").innerHTML)
                }, a.open("GET", b, !0), a.responseType = "document", a.send()
            }

            function d(d) {
                var e = 80;
                k.renderComponent(n({
                    game: d,
                    refreshRate: e,
                    withControls: !1,
                    map: q.query.map,
                    debug: r,
                    quality: s,
                    live: !0
                }), a), b && d.finished && c()
            }

            function e(a) {
                return function(b) {
                    return l(b).skipUntilWithTime(a)
                }
            }
            m(b).concatMap(e(1e3)).subscribe(d)
        }

        function h() {
            var a = document.getElementById("game"),
                b = document.getElementById("gametv");
            if(window.GAME_ID && a) f(a, window.GAME_ID);
            else if(b) {
                var c = q.path.match(/\/ai\/([a-zA-Z0-9]+)/),
                    d = c && 2 === c.length && c[1] || null;
                g(b, d)
            }
        }
        var i = a("url"),
            j = a("rx"),
            k = a("react"),
            l = a("./GameStream"),
            m = a("./GameIdStream"),
            n = a("./Game");
        window.React = k;
        var o = [1, 2, 5, 10, 20, 50, 75, 100, 150, 200],
            p = 10,
            q = i.parse(window.location.href, !0),
            r = "true" === q.query.debug,
            s = isNaN(q.query.quality) ? 2 : parseInt(q.query.quality, 10);
        h()
    }, {
        "./Game": 164,
        "./GameIdStream": 165,
        "./GameStream": 167,
        react: 158,
        rx: 161,
        url: 8
    }
],
182: [
    function(a, b) {
        var c = a("rx"),
            d = window.EventSource;
        b.exports = function(a) {
            return c.Observable.create(function(b) {
                var c = new d(a);
                c.addEventListener("message", function(a) {
                    b.onNext(JSON.parse(a.data))
                }, !1), c.addEventListener("error", function() {
                    c.close(), c.readyState === d.CLOSED && b.onCompleted()
                }, !1)
            })
        }
    }, {
        rx: 161
    }
],
183: [
    function(a, b) {
        var c = a("react"),
            d = c.createClass({
                displayName: "Button",
                propTypes: {
                    onClick: c.PropTypes.func.isRequired
                },
                render: function() {
                    return this.transferPropsTo(c.createElement("span", {
                        className: (this.props.className || "") + " button"
                    }, this.props.children))
                }
            });
        b.exports = d
    }, {
        react: 158
    }
],
184: [
    function(a, b) {
        var c = a("react"),
            d = a("../../GameModel"),
            e = c.createClass({
                displayName: "GoldScoreBar",
                propTypes: {
                    game: c.PropTypes.instanceOf(d).isRequired,
                    height: c.PropTypes.number.isRequired
                },
                render: function() {
                    var a = this.props.game.heroes.reduce(function(a, b) {
                        return a + b.gold
                    }, 0);
                    return c.createElement("div", {
                        className: "gold-score-bar"
                    }, c.createElement("div", {
                        className: "gold-score-bar-coin"
                    }, c.createElement("img", {
                        src: "/assets/img/ui/coin.png",
                        className: "coin"
                    })), c.createElement("div", {
                        className: "bars",
                        style: {
                            height: this.props.height - 30 + 14 + "px"
                        }
                    }, this.props.game.heroes.map(function(b, d) {
                        var e = 0 === a ? "25%" : (100 * b.gold / a).toFixed(2) + "%";
                        return c.createElement("div", {
                            key: b.id,
                            className: "player player-" + (d + 1),
                            style: {
                                height: e
                            }
                        })
                    })))
                }
            });
        b.exports = e
    }, {
        "../../GameModel": 166,
        react: 158
    }
],
185: [
    function(a, b) {
        var c = a("react"),
            d = a("../../GameModel"),
            e = c.createClass({
                displayName: "HeroStats",
                propTypes: {
                    game: c.PropTypes.instanceOf(d).isRequired,
                    hero: c.PropTypes.object.isRequired
                },
                render: function() {
                    var a = this.props.hero,
                        b = this.props.game.getWinner() === a.id,
                        d = ["hero-stats"];
                    return b && d.push("first"), a.crashed && d.push("crashed"), c.createElement("div", {
                        className: d.join(" ")
                    }, c.createElement("img", {
                        className: "cross",
                        src: "/assets/img/ui/cross.png"
                    }), c.createElement("img", {
                        className: "player",
                        src: "/assets/img/ui/player" + a.id + ".png"
                    }), c.createElement("img", {
                        className: "award",
                        src: "/assets/img/ui/award.png"
                    }), c.createElement("div", {
                        className: "gold-wrapper"
                    }, c.createElement("span", {
                        className: "gold"
                    }, a.gold), c.createElement("img", {
                        src: "/assets/img/ui/coin.png",
                        className: "coin"
                    })), c.createElement("a", {
                        href: "/ai/" + a.userId
                    }, c.createElement("span", {
                        className: "name",
                        title: a.name
                    }, a.name)), "Elo: ", c.createElement("span", {
                        className: "elo"
                    }, a.elo))
                }
            });
        b.exports = e
    }, {
        "../../GameModel": 166,
        react: 158
    }
],
186: [
    function(a, b) {
        var c = a("react"),
            d = c.createClass({
                displayName: "Live",
                render: function() {
                    return c.createElement("span", {
                        className: "live"
                    }, c.createElement("i", {
                        className: "fa fa-circle"
                    }), "Â Live")
                }
            });
        b.exports = d
    }, {
        react: 158
    }
],
187: [
    function(a, b) {
        var c = a("react"),
            d = a("../../GameModel"),
            e = a("../Button"),
            f = c.createClass({
                displayName: "PlayControls",
                propTypes: {
                    game: c.PropTypes.instanceOf(d).isRequired,
                    timeBarWidth: c.PropTypes.number.isRequired,
                    speed: c.PropTypes.string.isRequired,
                    increaseSpeed: c.PropTypes.func.isRequired,
                    decreaseSpeed: c.PropTypes.func.isRequired,
                    play: c.PropTypes.func.isRequired,
                    pause: c.PropTypes.func.isRequired,
                    jump: c.PropTypes.func.isRequired,
                    keyboard: c.PropTypes.bool,
                    playing: c.PropTypes.bool,
                    buffered: c.PropTypes.number
                },
                getDefaultProps: function() {
                    return {
                        keyboard: !0
                    }
                },
                percentage: function(a, b) {
                    return(100 * a / b).toFixed(2) + "%"
                },
                componentDidMount: function() {
                    this.props.keyboard && document.addEventListener("keydown", this._keyboardBinding = this.onKeyDown.bind(this), !1)
                },
                componentWillUnmount: function() {
                    this._keyboardBinding && document.removeEventListener("keydown", this._keyboardBinding)
                },
                onKeyDown: function(a) {
                    switch(a.which) {
                        case 32:
                            this.props.playing ? this.props.pause() : this.props.play(), a.preventDefault();
                            break;
                        case 37:
                            this.props.pause(), this.props.jump(this.props.game.turn - 1), a.preventDefault();
                            break;
                        case 39:
                            this.props.pause(), this.props.jump(this.props.game.turn + 1), a.preventDefault();
                            break;
                        case 38:
                            this.props.increaseSpeed(), a.preventDefault();
                            break;
                        case 40:
                            this.props.decreaseSpeed(), a.preventDefault()
                    }
                },
                onTimeBarMouseDown: function(a) {
                    this.startDragging(), this.moveCursor(a)
                },
                onTimeBarMouseMove: function(a) {
                    this._down && this.moveCursor(a)
                },
                onTimeBarMouseUp: function(a) {
                    this._down && (this.moveCursor(a), this.stopDragging())
                },
                onTimeBarMouseOut: function() {
                    this._down && this.stopDragging()
                },
                startDragging: function() {
                    this._down = !0, this._playingWhenStartDrag = this.props.playing, this.props.pause()
                },
                stopDragging: function() {
                    this._playingWhenStartDrag && this.props.play(), this._down = !1
                },
                moveCursor: function(a) {
                    var b = a.target.getBoundingClientRect(),
                        c = Math.max(0, Math.min(Math.floor(this.props.game.maxTurns * (a.clientX - b.left) / b.width), this.props.buffered));
                    this.props.game.turn !== c && this.props.jump(c)
                },
                render: function() {
                    var a = this.props.game.maxTurns,
                        b = this.props.game.turn,
                        d = this.props.buffered,
                        f = this.props.playing;
                    return c.createElement("div", {
                        className: "play-controls"
                    }, c.createElement("div", {
                        className: "play-pause"
                    }, f ? c.createElement(e, {
                        onClick: this.props.pause
                    }, c.createElement("i", {
                        className: "fa fa-pause"
                    })) : c.createElement(e, {
                        onClick: this.props.play
                    }, c.createElement("i", {
                        className: "fa fa-play"
                    }))), c.createElement("div", {
                        className: "time-bar",
                        style: {
                            width: this.props.timeBarWidth + "px"
                        }
                    }, c.createElement("div", {
                        className: "time-bar-overlay",
                        onMouseDown: this.onTimeBarMouseDown,
                        onMouseMove: this.onTimeBarMouseMove,
                        onMouseUp: this.onTimeBarMouseUp,
                        onMouseOut: this.onTimeBarMouseOut
                    }), c.createElement("div", {
                        className: "full"
                    }), c.createElement("div", {
                        className: "buffered",
                        style: {
                            width: this.percentage(d, a)
                        }
                    }), c.createElement("div", {
                        className: "elapsed",
                        style: {
                            width: this.percentage(b, a)
                        }
                    }), c.createElement("div", {
                        className: "cursor",
                        style: {
                            left: this.percentage(b, a)
                        }
                    })), c.createElement("div", {
                        className: "speed-controls"
                    }, c.createElement("div", {
                        className: "action"
                    }, c.createElement(e, {
                        className: "up",
                        onClick: this.props.increaseSpeed
                    }, "+"), c.createElement("span", {
                        className: "speed"
                    }, this.props.speed), c.createElement(e, {
                        className: "down",
                        onClick: this.props.decreaseSpeed
                    }, "-")), c.createElement("span", {
                        className: "legend"
                    }, "speed")))
                }
            });
        b.exports = f
    }, {
        "../../GameModel": 166,
        "../Button": 183,
        react: 158
    }
],
188: [
    function(a, b) {
        var c = a("react"),
            d = a("../../GameModel"),
            e = c.createClass({
                displayName: "TurnCount",
                propTypes: {
                    game: c.PropTypes.instanceOf(d).isRequired
                },
                render: function() {
                    var a = this.props.game,
                        b = a.turn + "/" + a.maxTurns;
                    return c.createElement("div", {
                        className: "turn-count"
                    }, c.createElement("div", {
                        className: "legend"
                    }, c.createElement("strong", null, "Turn"), c.createElement("span", {
                        className: "number"
                    }, b)))
                }
            });
        b.exports = e
    }, {
        "../../GameModel": 166,
        react: 158
    }
]
}, {}, [181]);
}
});
b.exports = j
}, {
    "./EventConstants": 27,
    "./LocalEventTrapMixin": 36,
    "./ReactBrowserComponentMixin": 41,
    "./ReactCompositeComponent": 46,
    "./ReactDOM": 49,
    "./ReactElement": 64
}], 55: [
    function(a, b) {
        "use strict";

        function c() {
            this.isMounted() && this.forceUpdate()
        }
        var d = a("./AutoFocusMixin"),
            e = a("./DOMPropertyOperations"),
            f = a("./LinkedValueUtils"),
            g = a("./ReactBrowserComponentMixin"),
            h = a("./ReactCompositeComponent"),
            i = a("./ReactElement"),
            j = a("./ReactDOM"),
            k = a("./ReactMount"),
            l = a("./ReactUpdates"),
            m = a("./Object.assign"),
            n = a("./invariant"),
            o = i.createFactory(j.input.type),
            p = {}, q = h.createClass({
                displayName: "ReactDOMInput",
                mixins: [d, f.Mixin, g],
                getInitialState: function() {
                    var a = this.props.defaultValue;
                    return {
                        initialChecked: this.props.defaultChecked || !1,
                        initialValue: null != a ? a : null
                    }
                },
                render: function() {
                    var a = m({}, this.props);
                    a.defaultChecked = null, a.defaultValue = null;
                    var b = f.getValue(this);
                    a.value = null != b ? b : this.state.initialValue;
                    var c = f.getChecked(this);
                    return a.checked = null != c ? c : this.state.initialChecked, a.onChange = this._handleChange, o(a, this.props.children)
                },
                componentDidMount: function() {
                    var a = k.getID(this.getDOMNode());
                    p[a] = this
                },
                componentWillUnmount: function() {
                    var a = this.getDOMNode(),
                        b = k.getID(a);
                    delete p[b]
                },
                componentDidUpdate: function() {
                    var a = this.getDOMNode();
                    null != this.props.checked && e.setValueForProperty(a, "checked", this.props.checked || !1);
                    var b = f.getValue(this);
                    null != b && e.setValueForProperty(a, "value", "" + b)
                },
                _handleChange: function(a) {
                    var b, d = f.getOnChange(this);
                    d && (b = d.call(this, a)), l.asap(c, this);
                    var e = this.props.name;
                    if("radio" === this.props.type && null != e) {
                        for(var g = this.getDOMNode(), h = g; h.parentNode;) h = h.parentNode;
                        for(var i = h.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), j = 0, m = i.length; m > j; j++) {
                            var o = i[j];
                            if(o !== g && o.form === g.form) {
                                var q = k.getID(o);
                                n(q);
                                var r = p[q];
                                n(r), l.asap(c, r)
                            }
                        }
                    }
                    return b
                }
            });
        b.exports = q
    }, {
        "./AutoFocusMixin": 13,
        "./DOMPropertyOperations": 23,
        "./LinkedValueUtils": 35,
        "./Object.assign": 38,
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64,
        "./ReactMount": 75,
        "./ReactUpdates": 91,
        "./invariant": 138
    }
],
56: [
    function(a, b) {
        "use strict";
        var c = a("./ReactBrowserComponentMixin"),
            d = a("./ReactCompositeComponent"),
            e = a("./ReactElement"),
            f = a("./ReactDOM"),
            g = (a("./warning"), e.createFactory(f.option.type)),
            h = d.createClass({
                displayName: "ReactDOMOption",
                mixins: [c],
                componentWillMount: function() {},
                render: function() {
                    return g(this.props, this.props.children)
                }
            });
        b.exports = h
    }, {
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64,
        "./warning": 157
    }
],
57: [
    function(a, b) {
        "use strict";

        function c() {
            this.isMounted() && (this.setState({
                value: this._pendingValue
            }), this._pendingValue = 0)
        }

        function d(a, b) {
            if(null != a[b])
                if(a.multiple) {
                    if(!Array.isArray(a[b])) return new Error("The `" + b + "` prop supplied to <select> must be an array if `multiple` is true.")
                } else if(Array.isArray(a[b])) return new Error("The `" + b + "` prop supplied to <select> must be a scalar value if `multiple` is false.")
        }

        function e(a, b) {
            var c, d, e, f = a.props.multiple,
                g = null != b ? b : a.state.value,
                h = a.getDOMNode().options;
            if(f)
                for(c = {}, d = 0, e = g.length; e > d; ++d) c["" + g[d]] = !0;
            else c = "" + g;
            for(d = 0, e = h.length; e > d; d++) {
                var i = f ? c.hasOwnProperty(h[d].value) : h[d].value === c;
                i !== h[d].selected && (h[d].selected = i)
            }
        }
        var f = a("./AutoFocusMixin"),
            g = a("./LinkedValueUtils"),
            h = a("./ReactBrowserComponentMixin"),
            i = a("./ReactCompositeComponent"),
            j = a("./ReactElement"),
            k = a("./ReactDOM"),
            l = a("./ReactUpdates"),
            m = a("./Object.assign"),
            n = j.createFactory(k.select.type),
            o = i.createClass({
                displayName: "ReactDOMSelect",
                mixins: [f, g.Mixin, h],
                propTypes: {
                    defaultValue: d,
                    value: d
                },
                getInitialState: function() {
                    return {
                        value: this.props.defaultValue || (this.props.multiple ? [] : "")
                    }
                },
                componentWillMount: function() {
                    this._pendingValue = null
                },
                componentWillReceiveProps: function(a) {
                    !this.props.multiple && a.multiple ? this.setState({
                        value: [this.state.value]
                    }) : this.props.multiple && !a.multiple && this.setState({
                        value: this.state.value[0]
                    })
                },
                render: function() {
                    var a = m({}, this.props);
                    return a.onChange = this._handleChange, a.value = null, n(a, this.props.children)
                },
                componentDidMount: function() {
                    e(this, g.getValue(this))
                },
                componentDidUpdate: function(a) {
                    var b = g.getValue(this),
                        c = !! a.multiple,
                        d = !! this.props.multiple;
                    (null != b || c !== d) && e(this, b)
                },
                _handleChange: function(a) {
                    var b, d = g.getOnChange(this);
                    d && (b = d.call(this, a));
                    var e;
                    if(this.props.multiple) {
                        e = [];
                        for(var f = a.target.options, h = 0, i = f.length; i > h; h++) f[h].selected && e.push(f[h].value)
                    } else e = a.target.value;
                    return this._pendingValue = e, l.asap(c, this), b
                }
            });
        b.exports = o
    }, {
        "./AutoFocusMixin": 13,
        "./LinkedValueUtils": 35,
        "./Object.assign": 38,
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64,
        "./ReactUpdates": 91
    }
],
58: [
    function(a, b) {
        "use strict";

        function c(a, b, c, d) {
            return a === c && b === d
        }

        function d(a) {
            var b = document.selection,
                c = b.createRange(),
                d = c.text.length,
                e = c.duplicate();
            e.moveToElementText(a), e.setEndPoint("EndToStart", c);
            var f = e.text.length,
                g = f + d;
            return {
                start: f,
                end: g
            }
        }

        function e(a) {
            var b = window.getSelection && window.getSelection();
            if(!b || 0 === b.rangeCount) return null;
            var d = b.anchorNode,
                e = b.anchorOffset,
                f = b.focusNode,
                g = b.focusOffset,
                h = b.getRangeAt(0),
                i = c(b.anchorNode, b.anchorOffset, b.focusNode, b.focusOffset),
                j = i ? 0 : h.toString().length,
                k = h.cloneRange();
            k.selectNodeContents(a), k.setEnd(h.startContainer, h.startOffset);
            var l = c(k.startContainer, k.startOffset, k.endContainer, k.endOffset),
                m = l ? 0 : k.toString().length,
                n = m + j,
                o = document.createRange();
            o.setStart(d, e), o.setEnd(f, g);
            var p = o.collapsed;
            return {
                start: p ? n : m,
                end: p ? m : n
            }
        }

        function f(a, b) {
            var c, d, e = document.selection.createRange().duplicate();
            "undefined" == typeof b.end ? (c = b.start, d = c) : b.start > b.end ? (c = b.end, d = b.start) : (c = b.start, d = b.end), e.moveToElementText(a), e.moveStart("character", c), e.setEndPoint("EndToStart", e), e.moveEnd("character", d - c), e.select()
        }

        function g(a, b) {
            if(window.getSelection) {
                var c = window.getSelection(),
                    d = a[j()].length,
                    e = Math.min(b.start, d),
                    f = "undefined" == typeof b.end ? e : Math.min(b.end, d);
                if(!c.extend && e > f) {
                    var g = f;
                    f = e, e = g
                }
                var h = i(a, e),
                    k = i(a, f);
                if(h && k) {
                    var l = document.createRange();
                    l.setStart(h.node, h.offset), c.removeAllRanges(), e > f ? (c.addRange(l), c.extend(k.node, k.offset)) : (l.setEnd(k.node, k.offset), c.addRange(l))
                }
            }
        }
        var h = a("./ExecutionEnvironment"),
            i = a("./getNodeForCharacterOffset"),
            j = a("./getTextContentAccessor"),
            k = h.canUseDOM && document.selection,
            l = {
                getOffsets: k ? d : e,
                setOffsets: k ? f : g
            };
        b.exports = l
    }, {
        "./ExecutionEnvironment": 33,
        "./getNodeForCharacterOffset": 131,
        "./getTextContentAccessor": 133
    }
],
59: [
    function(a, b) {
        "use strict";

        function c() {
            this.isMounted() && this.forceUpdate()
        }
        var d = a("./AutoFocusMixin"),
            e = a("./DOMPropertyOperations"),
            f = a("./LinkedValueUtils"),
            g = a("./ReactBrowserComponentMixin"),
            h = a("./ReactCompositeComponent"),
            i = a("./ReactElement"),
            j = a("./ReactDOM"),
            k = a("./ReactUpdates"),
            l = a("./Object.assign"),
            m = a("./invariant"),
            n = (a("./warning"), i.createFactory(j.textarea.type)),
            o = h.createClass({
                displayName: "ReactDOMTextarea",
                mixins: [d, f.Mixin, g],
                getInitialState: function() {
                    var a = this.props.defaultValue,
                        b = this.props.children;
                    null != b && (m(null == a), Array.isArray(b) && (m(b.length <= 1), b = b[0]), a = "" + b), null == a && (a = "");
                    var c = f.getValue(this);
                    return {
                        initialValue: "" + (null != c ? c : a)
                    }
                },
                render: function() {
                    var a = l({}, this.props);
                    return m(null == a.dangerouslySetInnerHTML), a.defaultValue = null, a.value = null, a.onChange = this._handleChange, n(a, this.state.initialValue)
                },
                componentDidUpdate: function() {
                    var a = f.getValue(this);
                    if(null != a) {
                        var b = this.getDOMNode();
                        e.setValueForProperty(b, "value", "" + a)
                    }
                },
                _handleChange: function(a) {
                    var b, d = f.getOnChange(this);
                    return d && (b = d.call(this, a)), k.asap(c, this), b
                }
            });
        b.exports = o
    }, {
        "./AutoFocusMixin": 13,
        "./DOMPropertyOperations": 23,
        "./LinkedValueUtils": 35,
        "./Object.assign": 38,
        "./ReactBrowserComponentMixin": 41,
        "./ReactCompositeComponent": 46,
        "./ReactDOM": 49,
        "./ReactElement": 64,
        "./ReactUpdates": 91,
        "./invariant": 138,
        "./warning": 157
    }
],
60: [
    function(a, b) {
        "use strict";

        function c() {
            this.reinitializeTransaction()
        }
        var d = a("./ReactUpdates"),
            e = a("./Transaction"),
            f = a("./Object.assign"),
            g = a("./emptyFunction"),
            h = {
                initialize: g,
                close: function() {
                    l.isBatchingUpdates = !1
                }
            }, i = {
                initialize: g,
                close: d.flushBatchedUpdates.bind(d)
            }, j = [i, h];
        f(c.prototype, e.Mixin, {
            getTransactionWrappers: function() {
                return j
            }
        });
        var k = new c,
            l = {
                isBatchingUpdates: !1,
                batchedUpdates: function(a, b, c) {
                    var d = l.isBatchingUpdates;
                    l.isBatchingUpdates = !0, d ? a(b, c) : k.perform(a, null, b, c)
                }
            };
        b.exports = l
    }, {
        "./Object.assign": 38,
        "./ReactUpdates": 91,
        "./Transaction": 107,
        "./emptyFunction": 119
    }
],
61: [
    function(a, b) {
        "use strict";

        function c() {
            y.EventEmitter.injectReactEventListener(x), y.EventPluginHub.injectEventPluginOrder(h), y.EventPluginHub.injectInstanceHandle(z), y.EventPluginHub.injectMount(A), y.EventPluginHub.injectEventPluginsByName({
                SimpleEventPlugin: D,
                EnterLeaveEventPlugin: i,
                ChangeEventPlugin: e,
                CompositionEventPlugin: g,
                MobileSafariClickEventPlugin: l,
                SelectEventPlugin: B,
                BeforeInputEventPlugin: d
            }), y.NativeComponent.injectGenericComponentClass(p), y.NativeComponent.injectComponentClasses({
                button: q,
                form: r,
                img: s,
                input: t,
                option: u,
                select: v,
                textarea: w,
                html: F("html"),
                head: F("head"),
                body: F("body")
            }), y.CompositeComponent.injectMixin(m), y.DOMProperty.injectDOMPropertyConfig(k), y.DOMProperty.injectDOMPropertyConfig(E), y.EmptyComponent.injectEmptyComponent("noscript"), y.Updates.injectReconcileTransaction(n.ReactReconcileTransaction), y.Updates.injectBatchingStrategy(o), y.RootIndex.injectCreateReactRootIndex(j.canUseDOM ? f.createReactRootIndex : C.createReactRootIndex), y.Component.injectEnvironment(n)
        }
        var d = a("./BeforeInputEventPlugin"),
            e = a("./ChangeEventPlugin"),
            f = a("./ClientReactRootIndex"),
            g = a("./CompositionEventPlugin"),
            h = a("./DefaultEventPluginOrder"),
            i = a("./EnterLeaveEventPlugin"),
            j = a("./ExecutionEnvironment"),
            k = a("./HTMLDOMPropertyConfig"),
            l = a("./MobileSafariClickEventPlugin"),
            m = a("./ReactBrowserComponentMixin"),
            n = a("./ReactComponentBrowserEnvironment"),
            o = a("./ReactDefaultBatchingStrategy"),
            p = a("./ReactDOMComponent"),
            q = a("./ReactDOMButton"),
            r = a("./ReactDOMForm"),
            s = a("./ReactDOMImg"),
            t = a("./ReactDOMInput"),
            u = a("./ReactDOMOption"),
            v = a("./ReactDOMSelect"),
            w = a("./ReactDOMTextarea"),
            x = a("./ReactEventListener"),
            y = a("./ReactInjection"),
            z = a("./ReactInstanceHandles"),
            A = a("./ReactMount"),
            B = a("./SelectEventPlugin"),
            C = a("./ServerReactRootIndex"),
            D = a("./SimpleEventPlugin"),
            E = a("./SVGDOMPropertyConfig"),
            F = a("./createFullPageComponent");
        b.exports = {
            inject: c
        }
    }, {
        "./BeforeInputEventPlugin": 14,
        "./ChangeEventPlugin": 18,
        "./ClientReactRootIndex": 19,
        "./CompositionEventPlugin": 20,
        "./DefaultEventPluginOrder": 25,
        "./EnterLeaveEventPlugin": 26,
        "./ExecutionEnvironment": 33,
        "./HTMLDOMPropertyConfig": 34,
        "./MobileSafariClickEventPlugin": 37,
        "./ReactBrowserComponentMixin": 41,
        "./ReactComponentBrowserEnvironment": 45,
        "./ReactDOMButton": 50,
        "./ReactDOMComponent": 51,
        "./ReactDOMForm": 52,
        "./ReactDOMImg": 54,
        "./ReactDOMInput": 55,
        "./ReactDOMOption": 56,
        "./ReactDOMSelect": 57,
        "./ReactDOMTextarea": 59,
        "./ReactDefaultBatchingStrategy": 60,
        "./ReactDefaultPerf": 62,
        "./ReactEventListener": 69,
        "./ReactInjection": 70,
        "./ReactInstanceHandles": 72,
        "./ReactMount": 75,
        "./SVGDOMPropertyConfig": 92,
        "./SelectEventPlugin": 93,
        "./ServerReactRootIndex": 94,
        "./SimpleEventPlugin": 95,
        "./createFullPageComponent": 115
    }
],
62: [
    function(a, b) {
        "use strict";

        function c(a) {
            return Math.floor(100 * a) / 100
        }

        function d(a, b, c) {
            a[b] = (a[b] || 0) + c
        }
        var e = a("./DOMProperty"),
            f = a("./ReactDefaultPerfAnalysis"),
            g = a("./ReactMount"),
            h = a("./ReactPerf"),
            i = a("./performanceNow"),
            j = {
                _allMeasurements: [],
                _mountStack: [0],
                _injected: !1,
                start: function() {
                    j._injected || h.injection.injectMeasure(j.measure), j._allMeasurements.length = 0, h.enableMeasure = !0
                },
                stop: function() {
                    h.enableMeasure = !1
                },
                getLastMeasurements: function() {
                    return j._allMeasurements
                },
                printExclusive: function(a) {
                    a = a || j._allMeasurements;
                    var b = f.getExclusiveSummary(a);
                    console.table(b.map(function(a) {
                        return {
                            "Component class name": a.componentName,
                            "Total inclusive time (ms)": c(a.inclusive),
                            "Exclusive mount time (ms)": c(a.exclusive),
                            "Exclusive render time (ms)": c(a.render),
                            "Mount time per instance (ms)": c(a.exclusive / a.count),
                            "Render time per instance (ms)": c(a.render / a.count),
                            Instances: a.count
                        }
                    }))
                },
                printInclusive: function(a) {
                    a = a || j._allMeasurements;
                    var b = f.getInclusiveSummary(a);
                    console.table(b.map(function(a) {
                        return {
                            "Owner > component": a.componentName,
                            "Inclusive time (ms)": c(a.time),
                            Instances: a.count
                        }
                    })), console.log("Total time:", f.getTotalTime(a).toFixed(2) + " ms")
                },
                getMeasurementsSummaryMap: function(a) {
                    var b = f.getInclusiveSummary(a, !0);
                    return b.map(function(a) {
                        return {
                            "Owner > component": a.componentName,
                            "Wasted time (ms)": a.time,
                            Instances: a.count
                        }
                    })
                },
                printWasted: function(a) {
                    a = a || j._allMeasurements, console.table(j.getMeasurementsSummaryMap(a)), console.log("Total time:", f.getTotalTime(a).toFixed(2) + " ms")
                },
                printDOM: function(a) {
                    a = a || j._allMeasurements;
                    var b = f.getDOMSummary(a);
                    console.table(b.map(function(a) {
                        var b = {};
                        return b[e.ID_ATTRIBUTE_NAME] = a.id, b.type = a.type, b.args = JSON.stringify(a.args), b
                    })), console.log("Total time:", f.getTotalTime(a).toFixed(2) + " ms")
                },
                _recordWrite: function(a, b, c, d) {
                    var e = j._allMeasurements[j._allMeasurements.length - 1].writes;
                    e[a] = e[a] || [], e[a].push({
                        type: b,
                        time: c,
                        args: d
                    })
                },
                measure: function(a, b, c) {
                    return function() {
                        for(var e = [], f = 0, h = arguments.length; h > f; f++) e.push(arguments[f]);
                        var k, l, m;
                        if("_renderNewRootComponent" === b || "flushBatchedUpdates" === b) return j._allMeasurements.push({
                            exclusive: {},
                            inclusive: {},
                            render: {},
                            counts: {},
                            writes: {},
                            displayNames: {},
                            totalTime: 0
                        }), m = i(), l = c.apply(this, e), j._allMeasurements[j._allMeasurements.length - 1].totalTime = i() - m, l;
                        if("ReactDOMIDOperations" === a || "ReactComponentBrowserEnvironment" === a) {
                            if(m = i(), l = c.apply(this, e), k = i() - m, "mountImageIntoNode" === b) {
                                var n = g.getID(e[1]);
                                j._recordWrite(n, b, k, e[0])
                            } else "dangerouslyProcessChildrenUpdates" === b ? e[0].forEach(function(a) {
                                var b = {};
                                null !== a.fromIndex && (b.fromIndex = a.fromIndex), null !== a.toIndex && (b.toIndex = a.toIndex), null !== a.textContent && (b.textContent = a.textContent), null !== a.markupIndex && (b.markup = e[1][a.markupIndex]), j._recordWrite(a.parentID, a.type, k, b)
                            }) : j._recordWrite(e[0], b, k, Array.prototype.slice.call(e, 1));
                            return l
                        }
                        if("ReactCompositeComponent" !== a || "mountComponent" !== b && "updateComponent" !== b && "_renderValidatedComponent" !== b) return c.apply(this, e);
                        var o = "mountComponent" === b ? e[0] : this._rootNodeID,
                            p = "_renderValidatedComponent" === b,
                            q = "mountComponent" === b,
                            r = j._mountStack,
                            s = j._allMeasurements[j._allMeasurements.length - 1];
                        if(p ? d(s.counts, o, 1) : q && r.push(0), m = i(), l = c.apply(this, e), k = i() - m, p) d(s.render, o, k);
                        else if(q) {
                            var t = r.pop();
                            r[r.length - 1] += k, d(s.exclusive, o, k - t), d(s.inclusive, o, k)
                        } else d(s.inclusive, o, k);
                        return s.displayNames[o] = {
                            current: this.constructor.displayName,
                            owner: this._owner ? this._owner.constructor.displayName : "<root>"
                        }, l
                    }
                }
            };
        b.exports = j
    }, {
        "./DOMProperty": 22,
        "./ReactDefaultPerfAnalysis": 63,
        "./ReactMount": 75,
        "./ReactPerf": 80,
        "./performanceNow": 151
    }
],
63: [
    function(a, b) {
        function c(a) {
            for(var b = 0, c = 0; c < a.length; c++) {
                var d = a[c];
                b += d.totalTime
            }
            return b
        }

        function d(a) {
            for(var b = [], c = 0; c < a.length; c++) {
                var d, e = a[c];
                for(d in e.writes) e.writes[d].forEach(function(a) {
                    b.push({
                        id: d,
                        type: j[a.type] || a.type,
                        args: a.args
                    })
                })
            }
            return b
        }

        function e(a) {
            for(var b, c = {}, d = 0; d < a.length; d++) {
                var e = a[d],
                    f = h({}, e.exclusive, e.inclusive);
                for(var g in f) b = e.displayNames[g].current, c[b] = c[b] || {
                    componentName: b,
                    inclusive: 0,
                    exclusive: 0,
                    render: 0,
                    count: 0
                }, e.render[g] && (c[b].render += e.render[g]), e.exclusive[g] && (c[b].exclusive += e.exclusive[g]), e.inclusive[g] && (c[b].inclusive += e.inclusive[g]), e.counts[g] && (c[b].count += e.counts[g])
            }
            var j = [];
            for(b in c) c[b].exclusive >= i && j.push(c[b]);
            return j.sort(function(a, b) {
                return b.exclusive - a.exclusive
            }), j
        }

        function f(a, b) {
            for(var c, d = {}, e = 0; e < a.length; e++) {
                var f, j = a[e],
                    k = h({}, j.exclusive, j.inclusive);
                b && (f = g(j));
                for(var l in k)
                    if(!b || f[l]) {
                        var m = j.displayNames[l];
                        c = m.owner + " > " + m.current, d[c] = d[c] || {
                            componentName: c,
                            time: 0,
                            count: 0
                        }, j.inclusive[l] && (d[c].time += j.inclusive[l]), j.counts[l] && (d[c].count += j.counts[l])
                    }
            }
            var n = [];
            for(c in d) d[c].time >= i && n.push(d[c]);
            return n.sort(function(a, b) {
                return b.time - a.time
            }), n
        }

        function g(a) {
            var b = {}, c = Object.keys(a.writes),
                d = h({}, a.exclusive, a.inclusive);
            for(var e in d) {
                for(var f = !1, g = 0; g < c.length; g++)
                    if(0 === c[g].indexOf(e)) {
                        f = !0;
                        break
                    }!f && a.counts[e] > 0 && (b[e] = !0)
            }
            return b
        }
        var h = a("./Object.assign"),
            i = 1.2,
            j = {
                mountImageIntoNode: "set innerHTML",
                INSERT_MARKUP: "set innerHTML",
                MOVE_EXISTING: "move",
                REMOVE_NODE: "remove",
                TEXT_CONTENT: "set textContent",
                updatePropertyByID: "update attribute",
                deletePropertyByID: "delete attribute",
                updateStylesByID: "update styles",
                updateInnerHTMLByID: "set innerHTML",
                dangerouslyReplaceNodeWithMarkupByID: "replace"
            }, k = {
                getExclusiveSummary: e,
                getInclusiveSummary: f,
                getDOMSummary: d,
                getTotalTime: c
            };
        b.exports = k
    }, {
        "./Object.assign": 38
    }
],
64: [
    function(a, b) {
        "use strict";
        var c = a("./ReactContext"),
            d = a("./ReactCurrentOwner"),
            e = (a("./warning"), {
                key: !0,
                ref: !0
            }),
            f = function(a, b, c, d, e, f) {
                this.type = a, this.key = b, this.ref = c, this._owner = d, this._context = e, this.props = f
            };
        f.prototype = {
            _isReactElement: !0
        }, f.createElement = function(a, b, g) {
            var h, i = {}, j = null,
                k = null;
            if(null != b) {
                k = void 0 === b.ref ? null : b.ref, j = null == b.key ? null : "" + b.key;
                for(h in b) b.hasOwnProperty(h) && !e.hasOwnProperty(h) && (i[h] = b[h])
            }
            var l = arguments.length - 2;
            if(1 === l) i.children = g;
            else if(l > 1) {
                for(var m = Array(l), n = 0; l > n; n++) m[n] = arguments[n + 2];
                i.children = m
            }
            if(a.defaultProps) {
                var o = a.defaultProps;
                for(h in o) "undefined" == typeof i[h] && (i[h] = o[h])
            }
            return new f(a, j, k, d.current, c.current, i)
        }, f.createFactory = function(a) {
            var b = f.createElement.bind(null, a);
            return b.type = a, b
        }, f.cloneAndReplaceProps = function(a, b) {
            var c = new f(a.type, a.key, a.ref, a._owner, a._context, b);
            return c
        }, f.isValidElement = function(a) {
            var b = !(!a || !a._isReactElement);
            return b
        }, b.exports = f
    }, {
        "./ReactContext": 47,
        "./ReactCurrentOwner": 48,
        "./warning": 157
    }
],
65: [
    function(a, b) {
        "use strict";

        function c() {
            var a = l.current;
            return a && a.constructor.displayName || void 0
        }

        function d(a, b) {
            a._store.validated || null != a.key || (a._store.validated = !0, f("react_key_warning", 'Each child in an array should have a unique "key" prop.', a, b))
        }

        function e(a, b, c) {
            q.test(a) && f("react_numeric_key_warning", "Child objects should have non-numeric keys so ordering is preserved.", b, c)
        }

        function f(a, b, d, e) {
            var f = c(),
                g = e.displayName,
                h = f || g,
                i = n[a];
            if(!i.hasOwnProperty(h)) {
                i[h] = !0, b += f ? " Check the render method of " + f + "." : " Check the renderComponent call using <" + g + ">.";
                var j = null;
                d._owner && d._owner !== l.current && (j = d._owner.constructor.displayName, b += " It was passed a child from " + j + "."), b += " See http://fb.me/react-warning-keys for more information.", m(a, {
                    component: h,
                    componentOwner: j
                }), console.warn(b)
            }
        }

        function g() {
            var a = c() || "";
            o.hasOwnProperty(a) || (o[a] = !0, m("react_object_map_children"))
        }

        function h(a, b) {
            if(Array.isArray(a))
                for(var c = 0; c < a.length; c++) {
                    var f = a[c];
                    j.isValidElement(f) && d(f, b)
                } else if(j.isValidElement(a)) a._store.validated = !0;
                else if(a && "object" == typeof a) {
                g();
                for(var h in a) e(h, a[h], b)
            }
        }

        function i(a, b, c, d) {
            for(var e in b)
                if(b.hasOwnProperty(e)) {
                    var f;
                    try {
                        f = b[e](c, e, a, d)
                    } catch(g) {
                        f = g
                    }
                    f instanceof Error && !(f.message in p) && (p[f.message] = !0, m("react_failed_descriptor_type_check", {
                        message: f.message
                    }))
                }
        }
        var j = a("./ReactElement"),
            k = a("./ReactPropTypeLocations"),
            l = a("./ReactCurrentOwner"),
            m = a("./monitorCodeUse"),
            n = {
                react_key_warning: {},
                react_numeric_key_warning: {}
            }, o = {}, p = {}, q = /^\d+$/,
            r = {
                createElement: function(a) {
                    var b = j.createElement.apply(this, arguments);
                    if(null == b) return b;
                    for(var c = 2; c < arguments.length; c++) h(arguments[c], a);
                    var d = a.displayName;
                    return a.propTypes && i(d, a.propTypes, b.props, k.prop), a.contextTypes && i(d, a.contextTypes, b._context, k.context), b
                },
                createFactory: function(a) {
                    var b = r.createElement.bind(null, a);
                    return b.type = a, b
                }
            };
        b.exports = r
    }, {
        "./ReactCurrentOwner": 48,
        "./ReactElement": 64,
        "./ReactPropTypeLocations": 83,
        "./monitorCodeUse": 148
    }
],
66: [
    function(a, b) {
        "use strict";

        function c() {
            return i(g), g()
        }

        function d(a) {
            j[a] = !0
        }

        function e(a) {
            delete j[a]
        }

        function f(a) {
            return j[a]
        }
        var g, h = a("./ReactElement"),
            i = a("./invariant"),
            j = {}, k = {
                injectEmptyComponent: function(a) {
                    g = h.createFactory(a)
                }
            }, l = {
                deregisterNullComponentID: e,
                getEmptyComponent: c,
                injection: k,
                isNullComponentID: f,
                registerNullComponentID: d
            };
        b.exports = l
    }, {
        "./ReactElement": 64,
        "./invariant": 138
    }
],
67: [
    function(a, b) {
        "use strict";
        var c = {
            guard: function(a) {
                return a
            }
        };
        b.exports = c
    }, {}
],
68: [
    function(a, b) {
        "use strict";

        function c(a) {
            d.enqueueEvents(a), d.processEventQueue()
        }
        var d = a("./EventPluginHub"),
            e = {
                handleTopLevel: function(a, b, e, f) {
                    var g = d.extractEvents(a, b, e, f);
                    c(g)
                }
            };
        b.exports = e
    }, {
        "./EventPluginHub": 29
    }
],
69: [
    function(a, b) {
        "use strict";

        function c(a) {
            var b = k.getID(a),
                c = j.getReactRootIDFromNodeID(b),
                d = k.findReactContainerForID(c),
                e = k.getFirstReactDOM(d);
            return e
        }

        function d(a, b) {
            this.topLevelType = a, this.nativeEvent = b, this.ancestors = []
        }

        function e(a) {
            for(var b = k.getFirstReactDOM(n(a.nativeEvent)) || window, d = b; d;) a.ancestors.push(d), d = c(d);
            for(var e = 0, f = a.ancestors.length; f > e; e++) {
                b = a.ancestors[e];
                var g = k.getID(b) || "";
                p._handleTopLevel(a.topLevelType, b, g, a.nativeEvent)
            }
        }

        function f(a) {
            var b = o(window);
            a(b)
        }
        var g = a("./EventListener"),
            h = a("./ExecutionEnvironment"),
            i = a("./PooledClass"),
            j = a("./ReactInstanceHandles"),
            k = a("./ReactMount"),
            l = a("./ReactUpdates"),
            m = a("./Object.assign"),
            n = a("./getEventTarget"),
            o = a("./getUnboundedScrollPosition");
        m(d.prototype, {
            destructor: function() {
                this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
            }
        }), i.addPoolingTo(d, i.twoArgumentPooler);
        var p = {
            _enabled: !0,
            _handleTopLevel: null,
            WINDOW_HANDLE: h.canUseDOM ? window : null,
            setHandleTopLevel: function(a) {
                p._handleTopLevel = a
            },
            setEnabled: function(a) {
                p._enabled = !! a
            },
            isEnabled: function() {
                return p._enabled
            },
            trapBubbledEvent: function(a, b, c) {
                var d = c;
                if(d) return g.listen(d, b, p.dispatchEvent.bind(null, a))
            },
            trapCapturedEvent: function(a, b, c) {
                var d = c;
                if(d) return g.capture(d, b, p.dispatchEvent.bind(null, a))
            },
            monitorScrollValue: function(a) {
                var b = f.bind(null, a);
                g.listen(window, "scroll", b), g.listen(window, "resize", b)
            },
            dispatchEvent: function(a, b) {
                if(p._enabled) {
                    var c = d.getPooled(a, b);
                    try {
                        l.batchedUpdates(e, c)
                    } finally {
                        d.release(c)
                    }
                }
            }
        };
        b.exports = p
    }, {
        "./EventListener": 28,
        "./ExecutionEnvironment": 33,
        "./Object.assign": 38,
        "./PooledClass": 39,
        "./ReactInstanceHandles": 72,
        "./ReactMount": 75,
        "./ReactUpdates": 91,
        "./getEventTarget": 129,
        "./getUnboundedScrollPosition": 134
    }
],
70: [
    function(a, b) {
        "use strict";
        var c = a("./DOMProperty"),
            d = a("./EventPluginHub"),
            e = a("./ReactComponent"),
            f = a("./ReactCompositeComponent"),
            g = a("./ReactEmptyComponent"),
            h = a("./ReactBrowserEventEmitter"),
            i = a("./ReactNativeComponent"),
            j = a("./ReactPerf"),
            k = a("./ReactRootIndex"),
            l = a("./ReactUpdates"),
            m = {
                Component: e.injection,
                CompositeComponent: f.injection,
                DOMProperty: c.injection,
                EmptyComponent: g.injection,
                EventPluginHub: d.injection,
                EventEmitter: h.injection,
                NativeComponent: i.injection,
                Perf: j.injection,
                RootIndex: k.injection,
                Updates: l.injection
            };
        b.exports = m
    }, {
        "./DOMProperty": 22,
        "./EventPluginHub": 29,
        "./ReactBrowserEventEmitter": 42,
        "./ReactComponent": 44,
        "./ReactCompositeComponent": 46,
        "./ReactEmptyComponent": 66,
        "./ReactNativeComponent": 78,
        "./ReactPerf": 80,
        "./ReactRootIndex": 87,
        "./ReactUpdates": 91
    }
],
71: [
    function(a, b) {
        "use strict";

        function c(a) {
            return e(document.documentElement, a)
        }
        var d = a("./ReactDOMSelection"),
            e = a("./containsNode"),
            f = a("./focusNode"),
            g = a("./getActiveElement"),
            h = {
                hasSelectionCapabilities: function(a) {
                    return a && ("INPUT" === a.nodeName && "text" === a.type || "TEXTAREA" === a.nodeName || "true" === a.contentEditable)
                },
                getSelectionInformation: function() {
                    var a = g();
                    return {
                        focusedElem: a,
                        selectionRange: h.hasSelectionCapabilities(a) ? h.getSelection(a) : null
                    }
                },
                restoreSelection: function(a) {
                    var b = g(),
                        d = a.focusedElem,
                        e = a.selectionRange;
                    b !== d && c(d) && (h.hasSelectionCapabilities(d) && h.setSelection(d, e), f(d))
                },
                getSelection: function(a) {
                    var b;
                    if("selectionStart" in a) b = {
                        start: a.selectionStart,
                        end: a.selectionEnd
                    };
                    else if(document.selection && "INPUT" === a.nodeName) {
                        var c = document.selection.createRange();
                        c.parentElement() === a && (b = {
                            start: -c.moveStart("character", -a.value.length),
                            end: -c.moveEnd("character", -a.value.length)
                        })
                    } else b = d.getOffsets(a);
                    return b || {
                        start: 0,
                        end: 0
                    }
                },
                setSelection: function(a, b) {
                    var c = b.start,
                        e = b.end;
                    if("undefined" == typeof e && (e = c), "selectionStart" in a) a.selectionStart = c, a.selectionEnd = Math.min(e, a.value.length);
                    else if(document.selection && "INPUT" === a.nodeName) {
                        var f = a.createTextRange();
                        f.collapse(!0), f.moveStart("character", c), f.moveEnd("character", e - c), f.select()
                    } else d.setOffsets(a, b)
                }
            };
        b.exports = h
    }, {
        "./ReactDOMSelection": 58,
        "./containsNode": 113,
        "./focusNode": 123,
        "./getActiveElement": 125
    }
],
72: [
    function(a, b) {
        "use strict";

        function c(a) {
            return m + a.toString(36)
        }

        function d(a, b) {
            return a.charAt(b) === m || b === a.length
        }

        function e(a) {
            return "" === a || a.charAt(0) === m && a.charAt(a.length - 1) !== m
        }

        function f(a, b) {
            return 0 === b.indexOf(a) && d(b, a.length)
        }

        function g(a) {
            return a ? a.substr(0, a.lastIndexOf(m)) : ""
        }

        function h(a, b) {
            if(l(e(a) && e(b)), l(f(a, b)), a === b) return a;
            for(var c = a.length + n, g = c; g < b.length && !d(b, g); g++);
            return b.substr(0, g)
        }

        function i(a, b) {
            var c = Math.min(a.length, b.length);
            if(0 === c) return "";
            for(var f = 0, g = 0; c >= g; g++)
                if(d(a, g) && d(b, g)) f = g;
                else if(a.charAt(g) !== b.charAt(g)) break;
            var h = a.substr(0, f);
            return l(e(h)), h
        }

        function j(a, b, c, d, e, i) {
            a = a || "", b = b || "", l(a !== b);
            var j = f(b, a);
            l(j || f(a, b));
            for(var k = 0, m = j ? g : h, n = a;; n = m(n, b)) {
                var p;
                if(e && n === a || i && n === b || (p = c(n, j, d)), p === !1 || n === b) break;
                l(k++ < o)
            }
        }
        var k = a("./ReactRootIndex"),
            l = a("./invariant"),
            m = ".",
            n = m.length,
            o = 100,
            p = {
                createReactRootID: function() {
                    return c(k.createReactRootIndex())
                },
                createReactID: function(a, b) {
                    return a + b
                },
                getReactRootIDFromNodeID: function(a) {
                    if(a && a.charAt(0) === m && a.length > 1) {
                        var b = a.indexOf(m, 1);
                        return b > -1 ? a.substr(0, b) : a
                    }
                    return null
                },
                traverseEnterLeave: function(a, b, c, d, e) {
                    var f = i(a, b);
                    f !== a && j(a, f, c, d, !1, !0), f !== b && j(f, b, c, e, !0, !1)
                },
                traverseTwoPhase: function(a, b, c) {
                    a && (j("", a, b, c, !0, !1), j(a, "", b, c, !1, !0))
                },
                traverseAncestors: function(a, b, c) {
                    j("", a, b, c, !0, !1)
                },
                _getFirstCommonAncestorID: i,
                _getNextDescendantID: h,
                isAncestorIDOf: f,
                SEPARATOR: m
            };
        b.exports = p
    }, {
        "./ReactRootIndex": 87,
        "./invariant": 138
    }
],
73: [
    function(a, b) {
        "use strict";

        function c(a, b) {
            if("function" == typeof b)
                for(var c in b)
                    if(b.hasOwnProperty(c)) {
                        var d = b[c];
                        if("function" == typeof d) {
                            var e = d.bind(b);
                            for(var f in d) d.hasOwnProperty(f) && (e[f] = d[f]);
                            a[c] = e
                        } else a[c] = d
                    }
        }
        var d = (a("./ReactCurrentOwner"), a("./invariant")),
            e = (a("./monitorCodeUse"), a("./warning"), {}),
            f = {}, g = {};
        g.wrapCreateFactory = function(a) {
            var b = function(b) {
                return "function" != typeof b ? a(b) : b.isReactNonLegacyFactory ? a(b.type) : b.isReactLegacyFactory ? a(b.type) : b
            };
            return b
        }, g.wrapCreateElement = function(a) {
            var b = function(b) {
                if("function" != typeof b) return a.apply(this, arguments);
                var c;
                return b.isReactNonLegacyFactory ? (c = Array.prototype.slice.call(arguments, 0), c[0] = b.type, a.apply(this, c)) : b.isReactLegacyFactory ? (b._isMockFunction && (b.type._mockedReactClassConstructor = b), c = Array.prototype.slice.call(arguments, 0), c[0] = b.type, a.apply(this, c)) : b.apply(null, Array.prototype.slice.call(arguments, 1))
            };
            return b
        }, g.wrapFactory = function(a) {
            d("function" == typeof a);
            var b = function() {
                return a.apply(this, arguments)
            };
            return c(b, a.type), b.isReactLegacyFactory = e, b.type = a.type, b
        }, g.markNonLegacyFactory = function(a) {
            return a.isReactNonLegacyFactory = f, a
        }, g.isValidFactory = function(a) {
            return "function" == typeof a && a.isReactLegacyFactory === e
        }, g.isValidClass = function(a) {
            return g.isValidFactory(a)
        }, g._isLegacyCallWarningEnabled = !0, b.exports = g
    }, {
        "./ReactCurrentOwner": 48,
        "./invariant": 138,
        "./monitorCodeUse": 148,
        "./warning": 157
    }
],
74: [
    function(a, b) {
        "use strict";
        var c = a("./adler32"),
            d = {
                CHECKSUM_ATTR_NAME: "data-react-checksum",
                addChecksumToMarkup: function(a) {
                    var b = c(a);
                    return a.replace(">", " " + d.CHECKSUM_ATTR_NAME + '="' + b + '">')
                },
                canReuseMarkup: function(a, b) {
                    var e = b.getAttribute(d.CHECKSUM_ATTR_NAME);
                    e = e && parseInt(e, 10);
                    var f = c(a);
                    return f === e
                }
            };
        b.exports = d
    }, {
        "./adler32": 110
    }
],
75: [
    function(a, b) {
        "use strict";

        function c(a) {
            var b = t(a);
            return b && H.getID(b)
        }

        function d(a) {
            var b = e(a);
            if(b)
                if(A.hasOwnProperty(b)) {
                    var c = A[b];
                    c !== a && (v(!h(c, b)), A[b] = a)
                } else A[b] = a;
            return b
        }

        function e(a) {
            return a && a.getAttribute && a.getAttribute(z) || ""
        }

        function f(a, b) {
            var c = e(a);
            c !== b && delete A[c], a.setAttribute(z, b), A[b] = a
        }

        function g(a) {
            return A.hasOwnProperty(a) && h(A[a], a) || (A[a] = H.findReactNodeByID(a)), A[a]
        }

        function h(a, b) {
            if(a) {
                v(e(a) === b);
                var c = H.findReactContainerForID(b);
                if(c && r(c, a)) return !0
            }
            return !1
        }

        function i(a) {
            delete A[a]
        }

        function j(a) {
            var b = A[a];
            return b && h(b, a) ? void(G = b) : !1
        }

        function k(a) {
            G = null, p.traverseAncestors(a, j);
            var b = G;
            return G = null, b
        }
        var l = a("./DOMProperty"),
            m = a("./ReactBrowserEventEmitter"),
            n = (a("./ReactCurrentOwner"), a("./ReactElement")),
            o = a("./ReactLegacyElement"),
            p = a("./ReactInstanceHandles"),
            q = a("./ReactPerf"),
            r = a("./containsNode"),
            s = a("./deprecated"),
            t = a("./getReactRootElementInContainer"),
            u = a("./instantiateReactComponent"),
            v = a("./invariant"),
            w = a("./shouldUpdateReactComponent"),
            x = (a("./warning"), o.wrapCreateElement(n.createElement)),
            y = p.SEPARATOR,
            z = l.ID_ATTRIBUTE_NAME,
            A = {}, B = 1,
            C = 9,
            D = {}, E = {}, F = [],
            G = null,
            H = {
                _instancesByReactRootID: D,
                scrollMonitor: function(a, b) {
                    b()
                },
                _updateRootComponent: function(a, b, c, d) {
                    var e = b.props;
                    return H.scrollMonitor(c, function() {
                        a.replaceProps(e, d)
                    }), a
                },
                _registerComponent: function(a, b) {
                    v(b && (b.nodeType === B || b.nodeType === C)), m.ensureScrollValueMonitoring();
                    var c = H.registerContainer(b);
                    return D[c] = a, c
                },
                _renderNewRootComponent: q.measure("ReactMount", "_renderNewRootComponent", function(a, b, c) {
                    var d = u(a, null),
                        e = H._registerComponent(d, b);
                    return d.mountComponentIntoNode(e, b, c), d
                }),
                render: function(a, b, d) {
                    v(n.isValidElement(a));
                    var e = D[c(b)];
                    if(e) {
                        var f = e._currentElement;
                        if(w(f, a)) return H._updateRootComponent(e, a, b, d);
                        H.unmountComponentAtNode(b)
                    }
                    var g = t(b),
                        h = g && H.isRenderedByReact(g),
                        i = h && !e,
                        j = H._renderNewRootComponent(a, b, i);
                    return d && d.call(j), j
                },
                constructAndRenderComponent: function(a, b, c) {
                    var d = x(a, b);
                    return H.render(d, c)
                },
                constructAndRenderComponentByID: function(a, b, c) {
                    var d = document.getElementById(c);
                    return v(d), H.constructAndRenderComponent(a, b, d)
                },
                registerContainer: function(a) {
                    var b = c(a);
                    return b && (b = p.getReactRootIDFromNodeID(b)), b || (b = p.createReactRootID()), E[b] = a, b
                },
                unmountComponentAtNode: function(a) {
                    var b = c(a),
                        d = D[b];
                    return d ? (H.unmountComponentFromNode(d, a), delete D[b], delete E[b], !0) : !1
                },
                unmountComponentFromNode: function(a, b) {
                    for(a.unmountComponent(), b.nodeType === C && (b = b.documentElement); b.lastChild;) b.removeChild(b.lastChild)
                },
                findReactContainerForID: function(a) {
                    var b = p.getReactRootIDFromNodeID(a),
                        c = E[b];
                    return c
                },
                findReactNodeByID: function(a) {
                    var b = H.findReactContainerForID(a);
                    return H.findComponentRoot(b, a)
                },
                isRenderedByReact: function(a) {
                    if(1 !== a.nodeType) return !1;
                    var b = H.getID(a);
                    return b ? b.charAt(0) === y : !1
                },
                getFirstReactDOM: function(a) {
                    for(var b = a; b && b.parentNode !== b;) {
                        if(H.isRenderedByReact(b)) return b;
                        b = b.parentNode
                    }
                    return null
                },
                findComponentRoot: function(a, b) {
                    var c = F,
                        d = 0,
                        e = k(b) || a;
                    for(c[0] = e.firstChild, c.length = 1; d < c.length;) {
                        for(var f, g = c[d++]; g;) {
                            var h = H.getID(g);
                            h ? b === h ? f = g : p.isAncestorIDOf(h, b) && (c.length = d = 0, c.push(g.firstChild)) : c.push(g.firstChild), g = g.nextSibling
                        }
                        if(f) return c.length = 0, f
                    }
                    c.length = 0, v(!1)
                },
                getReactRootID: c,
                getID: d,
                setID: f,
                getNode: g,
                purgeID: i
            };
        H.renderComponent = s("ReactMount", "renderComponent", "render", this, H.render), b.exports = H
    }, {
        "./DOMProperty": 22,
        "./ReactBrowserEventEmitter": 42,
        "./ReactCurrentOwner": 48,
        "./ReactElement": 64,
        "./ReactInstanceHandles": 72,
        "./ReactLegacyElement": 73,
        "./ReactPerf": 80,
        "./containsNode": 113,
        "./deprecated": 118,
        "./getReactRootElementInContainer": 132,
        "./instantiateReactComponent": 137,
        "./invariant": 138,
        "./shouldUpdateReactComponent": 154,
        "./warning": 157
    }
],
76: [
    function(a, b) {
        "use strict";

        function c(a, b, c) {
            o.push({
                parentID: a,
                parentNode: null,
                type: j.INSERT_MARKUP,
                markupIndex: p.push(b) - 1,
                textContent: null,
                fromIndex: null,
                toIndex: c
            })
        }

        function d(a, b, c) {
            o.push({
                parentID: a,
                parentNode: null,
                type: j.MOVE_EXISTING,
                markupIndex: null,
                textContent: null,
                fromIndex: b,
                toIndex: c
            })
        }

        function e(a, b) {
            o.push({
                parentID: a,
                parentNode: null,
                type: j.REMOVE_NODE,
                markupIndex: null,
                textContent: null,
                fromIndex: b,
                toIndex: null
            })
        }

        function f(a, b) {
            o.push({
                parentID: a,
                parentNode: null,
                type: j.TEXT_CONTENT,
                markupIndex: null,
                textContent: b,
                fromIndex: null,
                toIndex: null
            })
        }

        function g() {
            o.length && (i.BackendIDOperations.dangerouslyProcessChildrenUpdates(o, p), h())
        }

        function h() {
            o.length = 0, p.length = 0