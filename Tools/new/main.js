module.exports = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 132)
}([function (e, t) {
    e.exports = require("electron")
}, function (e, t) {
    e.exports = require("path")
}, function (e, t) {
    e.exports = require("fs")
}, function (e, t, n) {
    var r, i, o = n(2), s = n(86), a = n(87), c = n(88), u = n(5);

    function l(e, t) {
        Object.defineProperty(e, r, {
            get: function () {
                return t
            }
        })
    }

    "function" == typeof Symbol && "function" == typeof Symbol.for ? (r = Symbol.for("graceful-fs.queue"), i = Symbol.for("graceful-fs.previous")) : (r = "___graceful-fs.queue", i = "___graceful-fs.previous");
    var f = function () {
    };
    if (u.debuglog ? f = u.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (f = function () {
        var e = u.format.apply(u, arguments);
        e = "GFS4: " + e.split(/\n/).join("\nGFS4: "), console.error(e)
    }), !o[r]) {
        var h = global[r] || [];
        l(o, h), o.close = function (e) {
            function t(t, n) {
                return e.call(o, t, (function (e) {
                    e || m(), "function" == typeof n && n.apply(this, arguments)
                }))
            }

            return Object.defineProperty(t, i, {value: e}), t
        }(o.close), o.closeSync = function (e) {
            function t(t) {
                e.apply(o, arguments), m()
            }

            return Object.defineProperty(t, i, {value: e}), t
        }(o.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", (function () {
            f(o[r]), n(21).equal(o[r].length, 0)
        }))
    }

    function p(e) {
        s(e), e.gracefulify = p, e.createReadStream = function (t, n) {
            return new e.ReadStream(t, n)
        }, e.createWriteStream = function (t, n) {
            return new e.WriteStream(t, n)
        };
        var t = e.readFile;
        e.readFile = function (e, n, r) {
            "function" == typeof n && (r = n, n = null);
            return function e(n, r, i) {
                return t(n, r, (function (t) {
                    !t || "EMFILE" !== t.code && "ENFILE" !== t.code ? ("function" == typeof i && i.apply(this, arguments), m()) : d([e, [n, r, i]])
                }))
            }(e, n, r)
        };
        var n = e.writeFile;
        e.writeFile = function (e, t, r, i) {
            "function" == typeof r && (i = r, r = null);
            return function e(t, r, i, o) {
                return n(t, r, i, (function (n) {
                    !n || "EMFILE" !== n.code && "ENFILE" !== n.code ? ("function" == typeof o && o.apply(this, arguments), m()) : d([e, [t, r, i, o]])
                }))
            }(e, t, r, i)
        };
        var r = e.appendFile;
        r && (e.appendFile = function (e, t, n, i) {
            "function" == typeof n && (i = n, n = null);
            return function e(t, n, i, o) {
                return r(t, n, i, (function (r) {
                    !r || "EMFILE" !== r.code && "ENFILE" !== r.code ? ("function" == typeof o && o.apply(this, arguments), m()) : d([e, [t, n, i, o]])
                }))
            }(e, t, n, i)
        });
        var i = e.readdir;

        function o(t) {
            return i.apply(e, t)
        }

        if (e.readdir = function (e, t, n) {
            var r = [e];
            "function" != typeof t ? r.push(t) : n = t;
            return r.push((function (e, t) {
                t && t.sort && t.sort();
                !e || "EMFILE" !== e.code && "ENFILE" !== e.code ? ("function" == typeof n && n.apply(this, arguments), m()) : d([o, [r]])
            })), o(r)
        }, "v0.8" === process.version.substr(0, 4)) {
            var c = a(e);
            y = c.ReadStream, g = c.WriteStream
        }
        var u = e.ReadStream;
        u && (y.prototype = Object.create(u.prototype), y.prototype.open = function () {
            var e = this;
            w(e.path, e.flags, e.mode, (function (t, n) {
                t ? (e.autoClose && e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n), e.read())
            }))
        });
        var l = e.WriteStream;
        l && (g.prototype = Object.create(l.prototype), g.prototype.open = function () {
            var e = this;
            w(e.path, e.flags, e.mode, (function (t, n) {
                t ? (e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n))
            }))
        }), Object.defineProperty(e, "ReadStream", {
            get: function () {
                return y
            }, set: function (e) {
                y = e
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e, "WriteStream", {
            get: function () {
                return g
            }, set: function (e) {
                g = e
            }, enumerable: !0, configurable: !0
        });
        var f = y;
        Object.defineProperty(e, "FileReadStream", {
            get: function () {
                return f
            }, set: function (e) {
                f = e
            }, enumerable: !0, configurable: !0
        });
        var h = g;

        function y(e, t) {
            return this instanceof y ? (u.apply(this, arguments), this) : y.apply(Object.create(y.prototype), arguments)
        }

        function g(e, t) {
            return this instanceof g ? (l.apply(this, arguments), this) : g.apply(Object.create(g.prototype), arguments)
        }

        Object.defineProperty(e, "FileWriteStream", {
            get: function () {
                return h
            }, set: function (e) {
                h = e
            }, enumerable: !0, configurable: !0
        });
        var v = e.open;

        function w(e, t, n, r) {
            return "function" == typeof n && (r = n, n = null), function e(t, n, r, i) {
                return v(t, n, r, (function (o, s) {
                    !o || "EMFILE" !== o.code && "ENFILE" !== o.code ? ("function" == typeof i && i.apply(this, arguments), m()) : d([e, [t, n, r, i]])
                }))
            }(e, t, n, r)
        }

        return e.open = w, e
    }

    function d(e) {
        f("ENQUEUE", e[0].name, e[1]), o[r].push(e)
    }

    function m() {
        var e = o[r].shift();
        e && (f("RETRY", e[0].name, e[1]), e[0].apply(null, e[1]))
    }

    global[r] || l(global, o[r]), e.exports = p(c(o)), process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !o.__patched && (e.exports = p(o), o.__patched = !0)
}, function (e, t, n) {
    "use strict";
    e.exports = {...n(20), ...n(37), ...n(40), ...n(92), ...n(94), ...n(100), ...n(7), ...n(109), ...n(111), ...n(32), ...n(12), ...n(23)};
    const r = n(2);
    Object.getOwnPropertyDescriptor(r, "promises") && Object.defineProperty(e.exports, "promises", {get: () => r.promises})
}, function (e, t) {
    e.exports = require("util")
}, function (e, t, n) {
    "use strict";
    t.fromCallback = function (e) {
        return Object.defineProperty((function (...t) {
            if ("function" != typeof t[t.length - 1]) return new Promise((n, r) => {
                e.apply(this, t.concat([(e, t) => e ? r(e) : n(t)]))
            });
            e.apply(this, t)
        }), "name", {value: e.name})
    }, t.fromPromise = function (e) {
        return Object.defineProperty((function (...t) {
            const n = t[t.length - 1];
            if ("function" != typeof n) return e.apply(this, t);
            e.apply(this, t.slice(0, -1)).then(e => n(null, e), n)
        }), "name", {value: e.name})
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromPromise, {makeDir: i, makeDirSync: o} = n(90), s = r(i);
    e.exports = {mkdirs: s, mkdirsSync: o, mkdirp: s, mkdirpSync: o, ensureDir: s, ensureDirSync: o}
}, function (e, t) {
    e.exports = require("stream")
}, function (e, t, n) {
    var r = t;
    r.version = n(58).version, r.transports = n(59);
    var i = n(11);
    r.hash = i.hash, r.clone = i.clone, r.longestElement = i.longestElement, r.exception = n(36), r.config = n(29), r.addColors = r.config.addColors, r.Container = n(84).Container, r.Logger = n(85).Logger, r.Transport = n(16).Transport, r.loggers = new r.Container;
    var o = new r.Logger({transports: [new r.transports.Console]});
    i.setLevels(r, null, o.levels), ["log", "query", "stream", "add", "remove", "clear", "profile", "startTimer", "extend", "cli", "handleExceptions", "unhandleExceptions", "configure"].forEach((function (e) {
        r[e] = function () {
            return o[e].apply(o, arguments)
        }
    })), r.cli = function () {
        return r.padLevels = !0, i.setLevels(r, o.levels, r.config.cli.levels), o.setLevels(r.config.cli.levels), r.config.addColors(r.config.cli.colors), o.transports.console && (o.transports.console.colorize = !0, o.transports.console.timestamp = !1), r
    }, r.setLevels = function (e) {
        i.setLevels(r, o.levels, e), o.setLevels(e)
    }, Object.defineProperty(r, "level", {
        get: function () {
            return o.level
        }, set: function (e) {
            o.level = e, Object.keys(o.transports).forEach((function (t) {
                o.transports[t].level = e
            }))
        }
    }), ["emitErrs", "exitOnError", "padLevels", "levelLength", "stripColors"].forEach((function (e) {
        Object.defineProperty(r, e, {
            get: function () {
                return o[e]
            }, set: function (t) {
                o[e] = t
            }
        })
    })), Object.defineProperty(r, "default", {
        get: function () {
            return {transports: o.transports, exceptionHandlers: o.exceptionHandlers}
        }
    })
}, function (e, t) {
    e.exports = require("os")
}, function (e, t, n) {
    var r = n(5), i = n(61), o = n(62), s = n(2), a = n(63).StringDecoder, c = n(8).Stream, u = n(29);
    t.setLevels = function (e, n, r, i) {
        return n && Object.keys(n).forEach((function (t) {
            delete e[t]
        })), e.levels = r || u.npm.levels, e.padLevels && (e.levelLength = t.longestElement(Object.keys(e.levels))), Object.keys(e.levels).forEach((function (t) {
            "log" !== t ? e[t] = function (n) {
                var r = [t].concat(Array.prototype.slice.call(arguments));
                e.log.apply(e, r)
            } : console.warn('Log level named "log" will clash with the method "log". Consider using a different name.')
        })), e
    }, t.longestElement = function (e) {
        return Math.max.apply(null, e.map((function (e) {
            return e.length
        })))
    }, t.clone = function (e) {
        var n = {};
        if (e instanceof Error) return n = {message: e.message}, Object.getOwnPropertyNames(e).forEach((function (t) {
            n[t] = e[t]
        })), n;
        if (!(e instanceof Object)) return e;
        if (e instanceof Date) return new Date(e.getTime());
        for (var r in e) Array.isArray(e[r]) || e[r] instanceof Buffer ? n[r] = e[r].slice(0) : "function" != typeof e[r] ? n[r] = e[r] instanceof Object ? t.clone(e[r]) : e[r] : "function" == typeof e[r] && (n[r] = e[r]);
        return n
    }, t.log = function (e) {
        var n, i = "function" == typeof e.timestamp ? e.timestamp : t.timestamp, s = e.timestamp ? i() : null,
            a = void 0 === e.showLevel || e.showLevel,
            c = null === e.meta || void 0 === e.meta || e.meta instanceof Error ? e.meta || null : t.clone(o.decycle(e.meta));
        if (e.raw) return "object" != typeof c && null != c && (c = {meta: c}), (n = t.clone(c) || {}).level = e.level, n.message = e.message.stripColors ? e.message.stripColors : e.message, JSON.stringify(n);
        if (e.json || !0 === e.logstash) {
            if ("object" != typeof c && null != c && (c = {meta: c}), (n = t.clone(c) || {}).level = e.level, n.message = n.message || "", e.label && (n.label = e.label), e.message && (n.message = e.message), s && (n.timestamp = s), !0 === e.logstash) {
                var l = {};
                void 0 !== n.message && (l["@message"] = n.message, delete n.message), void 0 !== n.timestamp && (l["@timestamp"] = n.timestamp, delete n.timestamp), l["@fields"] = t.clone(n), n = l
            }
            return "function" == typeof e.stringify ? e.stringify(n) : JSON.stringify(n, (function (e, t) {
                return t instanceof Buffer ? t.toString("base64") : t
            }))
        }
        if ("function" == typeof e.formatter) return e.meta = c, String(e.formatter(t.clone(e)));
        if (n = s ? s + " - " : "", a && (n += "all" === e.colorize || "level" === e.colorize || !0 === e.colorize ? u.colorize(e.level) : e.level), n += e.align ? "\t" : "", n += s || a ? ": " : "", n += e.label ? "[" + e.label + "] " : "", n += "all" === e.colorize || "message" === e.colorize ? u.colorize(e.level, e.message) : e.message, null != c) if (c && c instanceof Error && c.stack && (c = c.stack), "object" != typeof c) n += " " + c; else if (Object.keys(c).length > 0) if ("function" == typeof e.prettyPrint) n += " " + e.prettyPrint(c); else if (e.prettyPrint) n += " \n" + r.inspect(c, !1, e.depth || null, e.colorize); else if (e.humanReadableUnhandledException && 5 === Object.keys(c).length && c.hasOwnProperty("date") && c.hasOwnProperty("process") && c.hasOwnProperty("os") && c.hasOwnProperty("trace") && c.hasOwnProperty("stack")) {
            var f = c.stack;
            delete c.stack, delete c.trace, n += " " + t.serialize(c), f && (n += "\n" + f.join("\n"))
        } else n += " " + t.serialize(c);
        return n
    }, t.capitalize = function (e) {
        return e && e[0].toUpperCase() + e.slice(1)
    }, t.hash = function (e) {
        return i.createHash("sha1").update(e).digest("hex")
    }, t.pad = function (e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10)
    }, t.timestamp = function () {
        return (new Date).toISOString()
    }, t.serialize = function (e, n) {
        if ("symbol" == typeof n && (n = n.toString()), "symbol" == typeof e && (e = e.toString()), null === e ? e = "null" : void 0 === e ? e = "undefined" : !1 === e && (e = "false"), "object" != typeof e) return n ? n + "=" + e : e;
        if (e instanceof Buffer) return n ? n + "=" + e.toString("base64") : e.toString("base64");
        for (var r = "", i = Object.keys(e), o = i.length, s = 0; s < o; s++) {
            if (Array.isArray(e[i[s]])) {
                r += i[s] + "=[";
                for (var a = 0, c = e[i[s]].length; a < c; a++) r += t.serialize(e[i[s]][a]), a < c - 1 && (r += ", ");
                r += "]"
            } else e[i[s]] instanceof Date ? r += i[s] + "=" + e[i[s]] : r += t.serialize(e[i[s]], i[s]);
            s < o - 1 && (r += ", ")
        }
        return r
    }, t.tailFile = function (e, t) {
        var n = new Buffer(65536), r = new a("utf8"), i = new c, o = "", u = 0, l = 0;
        return -1 === e.start && delete e.start, i.readable = !0, i.destroy = function () {
            i.destroyed = !0, i.emit("end"), i.emit("close")
        }, s.open(e.file, "a+", "0644", (function (a, c) {
            if (a) return t ? t(a) : i.emit("error", a), void i.destroy();
            !function a() {
                if (!i.destroyed) return s.read(c, n, 0, n.length, u, (function (s, c) {
                    if (s) return t ? t(s) : i.emit("error", s), void i.destroy();
                    if (!c) return o && ((null == e.start || l > e.start) && (t ? t(null, o) : i.emit("line", o)), l++, o = ""), setTimeout(a, 1e3);
                    var f = r.write(n.slice(0, c));
                    t || i.emit("data", f);
                    for (var h = (f = (o + f).split(/\n+/)).length - 1, p = 0; p < h; p++) (null == e.start || l > e.start) && (t ? t(null, f[p]) : i.emit("line", f[p])), l++;
                    return o = f[h], u += c, a()
                }));
                s.close(c)
            }()
        })), t ? i.destroy : i
    }, t.stringArrayToSet = function (e, t) {
        return void 0 === t && (t = "Cannot make set from Array with non-string elements"), e.reduce((function (e, n) {
            if (!("string" == typeof n || n instanceof String)) throw new Error(t);
            return e[n] = !0, e
        }), Object.create(null))
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromPromise, i = n(20);
    e.exports = {
        pathExists: r((function (e) {
            return i.access(e).then(() => !0).catch(() => !1)
        })), pathExistsSync: i.existsSync
    }
}, function (e, t, n) {
    "use strict";
    var r = n(51);
    n.d(t, "buildDefaultMenu", (function () {
        return r.a
    }));
    n(24);
    var i = n(47);
    n.o(i, "getAllMenuItems") && n.d(t, "getAllMenuItems", (function () {
        return i.getAllMenuItems
    })), n.o(i, "setCrashMenu") && n.d(t, "setCrashMenu", (function () {
        return i.setCrashMenu
    }));
    var o = n(48);
    n.d(t, "setCrashMenu", (function () {
        return o.a
    }));
    var s = n(49);
    n.d(t, "getAllMenuItems", (function () {
        return s.a
    }))
}, function (e, t) {
    e.exports = require("events")
}, function (e, t, n) {
    var r = {};
    e.exports = r, r.themes = {};
    var i = r.styles = n(65), o = Object.defineProperties;
    r.supportsColor = n(66), void 0 === r.enabled && (r.enabled = r.supportsColor), r.stripColors = r.strip = function (e) {
        return ("" + e).replace(/\x1B\[\d+m/g, "")
    };
    r.stylize = function (e, t) {
        return i[t].open + e + i[t].close
    };
    var s = /[|\\{}()[\]^$+*?.]/g;

    function a(e) {
        var t = function e() {
            return f.apply(e, arguments)
        };
        return t._styles = e, t.__proto__ = l, t
    }

    var c, u = (c = {}, i.grey = i.gray, Object.keys(i).forEach((function (e) {
        i[e].closeRe = new RegExp(function (e) {
            if ("string" != typeof e) throw new TypeError("Expected a string");
            return e.replace(s, "\\$&")
        }(i[e].close), "g"), c[e] = {
            get: function () {
                return a(this._styles.concat(e))
            }
        }
    })), c), l = o((function () {
    }), u);

    function f() {
        var e = arguments, t = e.length, n = 0 !== t && String(arguments[0]);
        if (t > 1) for (var o = 1; o < t; o++) n += " " + e[o];
        if (!r.enabled || !n) return n;
        for (var s = this._styles, a = s.length; a--;) {
            var c = i[s[a]];
            n = c.open + n.replace(c.closeRe, c.open) + c.close
        }
        return n
    }

    function h(e) {
        for (var t in e) !function (t) {
            r[t] = function (n) {
                return r[e[t]](n)
            }
        }(t)
    }

    r.setTheme = function (e) {
        if ("string" == typeof e) try {
            return r.themes[e] = n(67)(e), h(r.themes[e]), r.themes[e]
        } catch (e) {
            return console.log(e), e
        } else h(e)
    };
    var p = function (e, t) {
        var n = t.split("");
        return (n = n.map(e)).join("")
    };
    for (var d in r.trap = n(68), r.zalgo = n(69), r.maps = {}, r.maps.america = n(70), r.maps.zebra = n(71), r.maps.rainbow = n(72), r.maps.random = n(73), r.maps) !function (e) {
        r[e] = function (t) {
            return p(r.maps[e], t)
        }
    }(d);
    o(r, function () {
        var e = {};
        return Object.keys(u).forEach((function (t) {
            e[t] = {
                get: function () {
                    return a([t])
                }
            }
        })), e
    }())
}, function (e, t, n) {
    var r = n(14), i = n(5), o = t.Transport = function (e) {
        r.EventEmitter.call(this), e = e || {}, this.silent = e.silent || !1, this.raw = e.raw || !1, this.name = e.name || this.name, this.formatter = e.formatter, this.level = e.level, this.handleExceptions = e.handleExceptions || !1, this.exceptionsLevel = e.exceptionsLevel || "error", this.humanReadableUnhandledException = e.humanReadableUnhandledException || !1
    };
    i.inherits(o, r.EventEmitter), o.prototype.formatQuery = function (e) {
        return e
    }, o.prototype.normalizeQuery = function (e) {
        return (e = e || {}).rows = e.rows || e.limit || 10, e.start = e.start || 0, e.until = e.until || new Date, "object" != typeof e.until && (e.until = new Date(e.until)), e.from = e.from || e.until - 864e5, "object" != typeof e.from && (e.from = new Date(e.from)), e.order = e.order || "desc", e.fields = e.fields, e
    }, o.prototype.formatResults = function (e, t) {
        return e
    }, o.prototype.logException = function (e, t, n) {
        var r, i = this;
        if (this.silent) return n();

        function o() {
            r || (r = !0, i.removeListener("logged", o), i.removeListener("error", o), n())
        }

        this.once("logged", o), this.once("error", o), this.log(i.exceptionsLevel, e, t, (function () {
        }))
    }
}, function (e, t) {
    t.getArg = function (e, t, n) {
        if (t in e) return e[t];
        if (3 === arguments.length) return n;
        throw new Error('"' + t + '" is a required argument.')
    };
    var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/, r = /^data:.+\,.+$/;

    function i(e) {
        var t = e.match(n);
        return t ? {scheme: t[1], auth: t[2], host: t[3], port: t[4], path: t[5]} : null
    }

    function o(e) {
        var t = "";
        return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t
    }

    function s(e) {
        var n = e, r = i(e);
        if (r) {
            if (!r.path) return e;
            n = r.path
        }
        for (var s, a = t.isAbsolute(n), c = n.split(/\/+/), u = 0, l = c.length - 1; l >= 0; l--) "." === (s = c[l]) ? c.splice(l, 1) : ".." === s ? u++ : u > 0 && ("" === s ? (c.splice(l + 1, u), u = 0) : (c.splice(l, 2), u--));
        return "" === (n = c.join("/")) && (n = a ? "/" : "."), r ? (r.path = n, o(r)) : n
    }

    t.urlParse = i, t.urlGenerate = o, t.normalize = s, t.join = function (e, t) {
        "" === e && (e = "."), "" === t && (t = ".");
        var n = i(t), a = i(e);
        if (a && (e = a.path || "/"), n && !n.scheme) return a && (n.scheme = a.scheme), o(n);
        if (n || t.match(r)) return t;
        if (a && !a.host && !a.path) return a.host = t, o(a);
        var c = "/" === t.charAt(0) ? t : s(e.replace(/\/+$/, "") + "/" + t);
        return a ? (a.path = c, o(a)) : c
    }, t.isAbsolute = function (e) {
        return "/" === e.charAt(0) || !!e.match(n)
    }, t.relative = function (e, t) {
        "" === e && (e = "."), e = e.replace(/\/$/, "");
        for (var n = 0; 0 !== t.indexOf(e + "/");) {
            var r = e.lastIndexOf("/");
            if (r < 0) return t;
            if ((e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/)) return t;
            ++n
        }
        return Array(n + 1).join("../") + t.substr(e.length + 1)
    };
    var a = !("__proto__" in Object.create(null));

    function c(e) {
        return e
    }

    function u(e) {
        if (!e) return !1;
        var t = e.length;
        if (t < 9) return !1;
        if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
        for (var n = t - 10; n >= 0; n--) if (36 !== e.charCodeAt(n)) return !1;
        return !0
    }

    function l(e, t) {
        return e === t ? 0 : e > t ? 1 : -1
    }

    t.toSetString = a ? c : function (e) {
        return u(e) ? "$" + e : e
    }, t.fromSetString = a ? c : function (e) {
        return u(e) ? e.slice(1) : e
    }, t.compareByOriginalPositions = function (e, t, n) {
        var r = e.source - t.source;
        return 0 !== r || 0 !== (r = e.originalLine - t.originalLine) || 0 !== (r = e.originalColumn - t.originalColumn) || n || 0 !== (r = e.generatedColumn - t.generatedColumn) || 0 !== (r = e.generatedLine - t.generatedLine) ? r : e.name - t.name
    }, t.compareByGeneratedPositionsDeflated = function (e, t, n) {
        var r = e.generatedLine - t.generatedLine;
        return 0 !== r || 0 !== (r = e.generatedColumn - t.generatedColumn) || n || 0 !== (r = e.source - t.source) || 0 !== (r = e.originalLine - t.originalLine) || 0 !== (r = e.originalColumn - t.originalColumn) ? r : e.name - t.name
    }, t.compareByGeneratedPositionsInflated = function (e, t) {
        var n = e.generatedLine - t.generatedLine;
        return 0 !== n || 0 !== (n = e.generatedColumn - t.generatedColumn) || 0 !== (n = l(e.source, t.source)) || 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) ? n : l(e.name, t.name)
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return i
    }));
    var r = n(0);

    function i(e) {
        const t = e.endsWith("\\") ? e : e + "\\";
        r.shell.openPath(t).then(t => {
            "" !== t && log.error(`Failed to open directory (${e}): ${t}`)
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0, get: function () {
                return t[n]
            }
        })
    } : function (e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
    }), i = this && this.__exportStar || function (e, t) {
        for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n)
    };
    Object.defineProperty(t, "__esModule", {value: !0}), i(n(128), t)
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromCallback, i = n(3),
        o = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter(e => "function" == typeof i[e]);
    Object.keys(i).forEach(e => {
        "promises" !== e && (t[e] = i[e])
    }), o.forEach(e => {
        t[e] = r(i[e])
    }), t.exists = function (e, t) {
        return "function" == typeof t ? i.exists(e, t) : new Promise(t => i.exists(e, t))
    }, t.read = function (e, t, n, r, o, s) {
        return "function" == typeof s ? i.read(e, t, n, r, o, s) : new Promise((s, a) => {
            i.read(e, t, n, r, o, (e, t, n) => {
                if (e) return a(e);
                s({bytesRead: t, buffer: n})
            })
        })
    }, t.write = function (e, t, ...n) {
        return "function" == typeof n[n.length - 1] ? i.write(e, t, ...n) : new Promise((r, o) => {
            i.write(e, t, ...n, (e, t, n) => {
                if (e) return o(e);
                r({bytesWritten: t, buffer: n})
            })
        })
    }, "function" == typeof i.writev && (t.writev = function (e, t, ...n) {
        return "function" == typeof n[n.length - 1] ? i.writev(e, t, ...n) : new Promise((r, o) => {
            i.writev(e, t, ...n, (e, t, n) => {
                if (e) return o(e);
                r({bytesWritten: t, buffers: n})
            })
        })
    }), "function" == typeof i.realpath.native && (t.realpath.native = r(i.realpath.native))
}, function (e, t) {
    e.exports = require("assert")
}, function (e, t, n) {
    "use strict";
    const r = n(20), i = n(1), o = n(5), s = n(38)("10.5.0"), a = e => s ? r.stat(e, {bigint: !0}) : r.stat(e),
        c = e => s ? r.statSync(e, {bigint: !0}) : r.statSync(e);

    function u(e, t) {
        return Promise.all([a(e), a(t).catch(e => {
            if ("ENOENT" === e.code) return null;
            throw e
        })]).then(([e, t]) => ({srcStat: e, destStat: t}))
    }

    function l(e, t) {
        if (t.ino && t.dev && t.ino === e.ino && t.dev === e.dev) {
            if (s || t.ino < Number.MAX_SAFE_INTEGER) return !0;
            if (t.size === e.size && t.mode === e.mode && t.nlink === e.nlink && t.atimeMs === e.atimeMs && t.mtimeMs === e.mtimeMs && t.ctimeMs === e.ctimeMs && t.birthtimeMs === e.birthtimeMs) return !0
        }
        return !1
    }

    function f(e, t) {
        const n = i.resolve(e).split(i.sep).filter(e => e), r = i.resolve(t).split(i.sep).filter(e => e);
        return n.reduce((e, t, n) => e && r[n] === t, !0)
    }

    function h(e, t, n) {
        return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`
    }

    e.exports = {
        checkPaths: function (e, t, n, r) {
            o.callbackify(u)(e, t, (i, o) => {
                if (i) return r(i);
                const {srcStat: s, destStat: a} = o;
                return a && l(s, a) ? r(new Error("Source and destination must not be the same.")) : s.isDirectory() && f(e, t) ? r(new Error(h(e, t, n))) : r(null, {
                    srcStat: s,
                    destStat: a
                })
            })
        }, checkPathsSync: function (e, t, n) {
            const {srcStat: r, destStat: i} = function (e, t) {
                let n;
                const r = c(e);
                try {
                    n = c(t)
                } catch (e) {
                    if ("ENOENT" === e.code) return {srcStat: r, destStat: null};
                    throw e
                }
                return {srcStat: r, destStat: n}
            }(e, t);
            if (i && l(r, i)) throw new Error("Source and destination must not be the same.");
            if (r.isDirectory() && f(e, t)) throw new Error(h(e, t, n));
            return {srcStat: r, destStat: i}
        }, checkParentPaths: function e(t, n, o, a, c) {
            const u = i.resolve(i.dirname(t)), f = i.resolve(i.dirname(o));
            if (f === u || f === i.parse(f).root) return c();
            const p = (r, i) => r ? "ENOENT" === r.code ? c() : c(r) : l(n, i) ? c(new Error(h(t, o, a))) : e(t, n, f, a, c);
            s ? r.stat(f, {bigint: !0}, p) : r.stat(f, p)
        }, checkParentPathsSync: function e(t, n, r, o) {
            const s = i.resolve(i.dirname(t)), a = i.resolve(i.dirname(r));
            if (a === s || a === i.parse(a).root) return;
            let u;
            try {
                u = c(a)
            } catch (e) {
                if ("ENOENT" === e.code) return;
                throw e
            }
            if (l(n, u)) throw new Error(h(t, r, o));
            return e(t, n, a, o)
        }, isSrcSubdir: f
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromCallback, i = n(93);
    e.exports = {remove: r(i), removeSync: i.sync}
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e.id || e.label || e.role || "unknown"
    }

    function i(e, t = "@", n = new Set) {
        for (const o of e) {
            let e = 0, s = o.id;
            if (!s) do {
                s = `${t}.${r(o)}${e++ || ""}`
            } while (n.has(s));
            if (o.id = s, n.add(s), o.submenu) {
                i(o.submenu, o.id, n)
            }
        }
    }

    n.d(t, "a", (function () {
        return i
    }))
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return s
    }));
    var r = n(1), i = n(0);
    let o = null;

    function s() {
        if (!o) {
            const e = i.app.getPath("userData");
            o = r.join(e, "logs")
        }
        return o
    }
}, function (e, t) {
    e.exports = require("url")
}, function (e, t, n) {
    (function () {
        t.Emitter = n(122), t.Disposable = n(33), t.CompositeDisposable = n(123)
    }).call(this)
}, function (e, t) {
    e.exports = require("child_process")
}, function (e, t, n) {
    var r = n(64);
    r.enabled = !0;
    var i = t, o = t.allColors = {};
    i.addColors = function (e) {
        !function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            t.forEach((function (t) {
                for (var n = Object.keys(t), r = 0; r < n.length; r++) e[n[r]] = t[n[r]]
            }))
        }(o, e)
    }, i.colorize = function (e, t) {
        void 0 === t && (t = e);
        var n = t;
        if (o[e] instanceof Array) for (var i = 0, s = o[e].length; i < s; ++i) n = r[o[e][i]](n); else if (o[e].match(/\s/)) {
            var a = o[e].split(/\s+/);
            for (i = 0; i < a.length; ++i) n = r[a[i]](n);
            o[e] = a
        } else n = r[o[e]](n);
        return n
    }, i.cli = n(74), i.npm = n(75), i.syslog = n(76), i.addColors(i.cli.colors), i.addColors(i.npm.colors), i.addColors(i.syslog.colors)
}, function (e, t) {
    e.exports = require("constants")
}, function (e, t) {
    e.exports = {
        stringify: function (e, {EOL: t = "\n", finalEOL: n = !0, replacer: r = null, spaces: i} = {}) {
            const o = n ? t : "";
            return JSON.stringify(e, r, i).replace(/\n/g, t) + o
        }, stripBom: function (e) {
            return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "")
        }
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromCallback, i = n(3), o = n(1), s = n(7), a = n(12).pathExists;
    e.exports = {
        outputFile: r((function (e, t, n, r) {
            "function" == typeof n && (r = n, n = "utf8");
            const c = o.dirname(e);
            a(c, (o, a) => o ? r(o) : a ? i.writeFile(e, t, n, r) : void s.mkdirs(c, o => {
                if (o) return r(o);
                i.writeFile(e, t, n, r)
            }))
        })), outputFileSync: function (e, ...t) {
            const n = o.dirname(e);
            if (i.existsSync(n)) return i.writeFileSync(e, ...t);
            s.mkdirsSync(n), i.writeFileSync(e, ...t)
        }
    }
}, function (e, t) {
    (function () {
        e.exports = function () {
            function e(e) {
                this.disposalAction = e
            }

            return e.prototype.disposed = !1, e.isDisposable = function (e) {
                return "function" == typeof (null != e ? e.dispose : void 0)
            }, e.prototype.dispose = function () {
                this.disposed || (this.disposed = !0, "function" == typeof this.disposalAction && this.disposalAction(), this.disposalAction = null)
            }, e
        }()
    }).call(this)
}, function (e, t, n) {
    var r;
    /*!
 * async
 * https://github.com/caolan/async
 *
 * Copyright 2010-2014 Caolan McMahon
 * Released under the MIT license
 */
    !function () {
        var n, i, o = {}, s = function () {
        };

        function a(e) {
            var t = !1;
            return function () {
                if (t) throw new Error("Callback was already called.");
                t = !0, e.apply(n, arguments)
            }
        }

        null != (n = "object" == typeof window && this === window ? window : "object" == typeof global && this === global ? global : this) && (i = n.async), o.noConflict = function () {
            return n.async = i, o
        };
        var c, u = Object.prototype.toString, l = Array.isArray || function (e) {
            return "[object Array]" === u.call(e)
        }, f = function (e, t) {
            for (var n = -1, r = e.length; ++n < r;) t(e[n], n, e)
        }, h = function (e, t) {
            for (var n = -1, r = e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
            return i
        }, p = Object.keys || function (e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t
        }, d = function (e, t) {
            t = t || 0;
            var n = -1, r = e.length;
            t && (r = (r -= t) < 0 ? 0 : r);
            for (var i = Array(r); ++n < r;) i[n] = e[n + t];
            return i
        };
        "function" == typeof setImmediate && (c = setImmediate), "undefined" != typeof process && process.nextTick ? (o.nextTick = process.nextTick, o.setImmediate = c ? function (e) {
            c(e)
        } : o.nextTick) : c ? (o.nextTick = function (e) {
            c(e)
        }, o.setImmediate = o.nextTick) : (o.nextTick = function (e) {
            setTimeout(e, 0)
        }, o.setImmediate = o.nextTick), o.each = function (e, t, n) {
            if (n = n || s, !e.length) return n();
            var r = 0;

            function i(t) {
                t ? (n(t), n = s) : (r += 1) >= e.length && n()
            }

            f(e, (function (e) {
                t(e, a(i))
            }))
        }, o.forEach = o.each, o.eachSeries = function (e, t, n) {
            if (n = n || s, !e.length) return n();
            var r = 0, i = function () {
                t(e[r], (function (t) {
                    t ? (n(t), n = s) : (r += 1) >= e.length ? n() : i()
                }))
            };
            i()
        }, o.forEachSeries = o.eachSeries, o.eachLimit = function (e, t, n, r) {
            m(t).apply(null, [e, n, r])
        }, o.forEachLimit = o.eachLimit;
        var m = function (e) {
            return function (t, n, r) {
                if (r = r || s, !t.length || e <= 0) return r();
                var i = 0, o = 0, a = 0;
                !function c() {
                    if (i >= t.length) return r();
                    for (; a < e && o < t.length;) a += 1, n(t[(o += 1) - 1], (function (e) {
                        e ? (r(e), r = s) : (a -= 1, (i += 1) >= t.length ? r() : c())
                    }))
                }()
            }
        };
        o.forEachOf = o.eachOf = function (e, t, n) {
            n = n || function () {
            };
            var r = e.length || p(e).length, i = 0;
            if (!r) return n();
            !function (e, t) {
                f(p(e), (function (n) {
                    t(e[n], n)
                }))
            }(e, (function (o, s) {
                t(e[s], s, (function (e) {
                    e ? (n(e), n = function () {
                    }) : (i += 1) === r && n(null)
                }))
            }))
        }, o.forEachOfSeries = o.eachOfSeries = function (e, t, n) {
            n = n || function () {
            };
            var r = p(e), i = r.length;
            if (!i) return n();
            var s = 0, a = function () {
                var c = !0, u = r[s];
                t(e[u], u, (function (e) {
                    e ? (n(e), n = function () {
                    }) : (s += 1) >= i ? n(null) : c ? o.nextTick(a) : a()
                })), c = !1
            };
            a()
        }, o.forEachOfLimit = o.eachOfLimit = function (e, t, n, r) {
            y(t)(e, n, r)
        };
        var y = function (e) {
            return function (t, n, r) {
                r = r || function () {
                };
                var i = p(t), o = i.length;
                if (!o || e <= 0) return r();
                var s = 0, a = 0, c = 0;
                !function u() {
                    if (s >= o) return r();
                    for (; c < e && a < o;) {
                        c += 1;
                        var l = i[(a += 1) - 1];
                        n(t[l], l, (function (e) {
                            e ? (r(e), r = function () {
                            }) : (c -= 1, (s += 1) >= o ? r() : u())
                        }))
                    }
                }()
            }
        }, g = function (e) {
            return function () {
                var t = d(arguments);
                return e.apply(null, [o.each].concat(t))
            }
        }, v = function (e) {
            return function () {
                var t = d(arguments);
                return e.apply(null, [o.eachSeries].concat(t))
            }
        }, w = function (e, t, n, r) {
            if (t = h(t, (function (e, t) {
                return {index: t, value: e}
            })), r) {
                var i = [];
                e(t, (function (e, t) {
                    n(e.value, (function (n, r) {
                        i[e.index] = r, t(n)
                    }))
                }), (function (e) {
                    r(e, i)
                }))
            } else e(t, (function (e, t) {
                n(e.value, (function (e) {
                    t(e)
                }))
            }))
        };
        o.map = g(w), o.mapSeries = v(w), o.mapLimit = function (e, t, n, r) {
            return b(t)(e, n, r)
        };
        var b = function (e) {
            return function (e, t) {
                return function () {
                    var n = d(arguments);
                    return t.apply(null, [m(e)].concat(n))
                }
            }(e, w)
        };
        o.reduce = function (e, t, n, r) {
            o.eachSeries(e, (function (e, r) {
                n(t, e, (function (e, n) {
                    t = n, r(e)
                }))
            }), (function (e) {
                r(e, t)
            }))
        }, o.inject = o.reduce, o.foldl = o.reduce, o.reduceRight = function (e, t, n, r) {
            var i = h(e, (function (e) {
                return e
            })).reverse();
            o.reduce(i, t, n, r)
        }, o.foldr = o.reduceRight;
        var _ = function (e, t, n, r) {
            var i = [];
            e(t = h(t, (function (e, t) {
                return {index: t, value: e}
            })), (function (e, t) {
                n(e.value, (function (n) {
                    n && i.push(e), t()
                }))
            }), (function (e) {
                r(h(i.sort((function (e, t) {
                    return e.index - t.index
                })), (function (e) {
                    return e.value
                })))
            }))
        };
        o.filter = g(_), o.filterSeries = v(_), o.select = o.filter, o.selectSeries = o.filterSeries;
        var S = function (e, t, n, r) {
            var i = [];
            e(t = h(t, (function (e, t) {
                return {index: t, value: e}
            })), (function (e, t) {
                n(e.value, (function (n) {
                    n || i.push(e), t()
                }))
            }), (function (e) {
                r(h(i.sort((function (e, t) {
                    return e.index - t.index
                })), (function (e) {
                    return e.value
                })))
            }))
        };
        o.reject = g(S), o.rejectSeries = v(S);
        var E = function (e, t, n, r) {
            e(t, (function (e, t) {
                n(e, (function (n) {
                    n ? (r(e), r = s) : t()
                }))
            }), (function (e) {
                r()
            }))
        };
        o.detect = g(E), o.detectSeries = v(E), o.some = function (e, t, n) {
            o.each(e, (function (e, r) {
                t(e, (function (e) {
                    e && (n(!0), n = s), r()
                }))
            }), (function (e) {
                n(!1)
            }))
        }, o.any = o.some, o.every = function (e, t, n) {
            o.each(e, (function (e, r) {
                t(e, (function (e) {
                    e || (n(!1), n = s), r()
                }))
            }), (function (e) {
                n(!0)
            }))
        }, o.all = o.every, o.sortBy = function (e, t, n) {
            o.map(e, (function (e, n) {
                t(e, (function (t, r) {
                    t ? n(t) : n(null, {value: e, criteria: r})
                }))
            }), (function (e, t) {
                if (e) return n(e);
                n(null, h(t.sort((function (e, t) {
                    var n = e.criteria, r = t.criteria;
                    return n < r ? -1 : n > r ? 1 : 0
                })), (function (e) {
                    return e.value
                })))
            }))
        }, o.auto = function (e, t) {
            t = t || s;
            var n = p(e), r = n.length;
            if (!r) return t();
            var i = {}, a = [], c = function (e) {
                a.unshift(e)
            }, u = function () {
                r--, f(a.slice(0), (function (e) {
                    e()
                }))
            };
            c((function () {
                if (!r) {
                    var e = t;
                    t = s, e(null, i)
                }
            })), f(n, (function (n) {
                for (var r, h = l(e[n]) ? e[n] : [e[n]], m = function (e) {
                    var r = d(arguments, 1);
                    if (r.length <= 1 && (r = r[0]), e) {
                        var a = {};
                        f(p(i), (function (e) {
                            a[e] = i[e]
                        })), a[n] = r, t(e, a), t = s
                    } else i[n] = r, o.setImmediate(u)
                }, y = h.slice(0, Math.abs(h.length - 1)) || [], g = y.length; g--;) {
                    if (!(r = e[y[g]])) throw new Error("Has inexistant dependency");
                    if (l(r) && ~r.indexOf(n)) throw new Error("Has cyclic dependencies")
                }
                var v = function () {
                    return e = function (e, t) {
                        return e && i.hasOwnProperty(t)
                    }, t = !0, f(y, (function (n, r, i) {
                        t = e(t, n, r, i)
                    })), t && !i.hasOwnProperty(n);
                    var e, t
                };
                if (v()) h[h.length - 1](m, i); else {
                    var w = function () {
                        v() && (!function (e) {
                            for (var t = 0; t < a.length; t += 1) if (a[t] === e) return void a.splice(t, 1)
                        }(w), h[h.length - 1](m, i))
                    };
                    c(w)
                }
            }))
        }, o.retry = function (e, t, n) {
            var r = [];
            "function" == typeof e && (n = t, t = e, e = 5), e = parseInt(e, 10) || 5;
            var i = function (i, s) {
                for (var a = function (e, t) {
                    return function (n) {
                        e((function (e, r) {
                            n(!e || t, {err: e, result: r})
                        }), s)
                    }
                }; e;) r.push(a(t, !(e -= 1)));
                o.series(r, (function (e, t) {
                    t = t[t.length - 1], (i || n)(t.err, t.result)
                }))
            };
            return n ? i() : i
        }, o.waterfall = function (e, t) {
            if (t = t || s, !l(e)) {
                var n = new Error("First argument to waterfall must be an array of functions");
                return t(n)
            }
            if (!e.length) return t();
            var r = function (e) {
                return function (n) {
                    if (n) t.apply(null, arguments), t = s; else {
                        var i = d(arguments, 1), a = e.next();
                        a ? i.push(r(a)) : i.push(t), o.setImmediate((function () {
                            e.apply(null, i)
                        }))
                    }
                }
            };
            r(o.iterator(e))()
        };
        var O = function (e, t, n) {
            if (n = n || s, l(t)) e.map(t, (function (e, t) {
                e && e((function (e) {
                    var n = d(arguments, 1);
                    n.length <= 1 && (n = n[0]), t.call(null, e, n)
                }))
            }), n); else {
                var r = {};
                e.each(p(t), (function (e, n) {
                    t[e]((function (t) {
                        var i = d(arguments, 1);
                        i.length <= 1 && (i = i[0]), r[e] = i, n(t)
                    }))
                }), (function (e) {
                    n(e, r)
                }))
            }
        };
        o.parallel = function (e, t) {
            O({map: o.map, each: o.each}, e, t)
        }, o.parallelLimit = function (e, t, n) {
            O({map: b(t), each: m(t)}, e, n)
        }, o.series = function (e, t) {
            if (t = t || s, l(e)) o.mapSeries(e, (function (e, t) {
                e && e((function (e) {
                    var n = d(arguments, 1);
                    n.length <= 1 && (n = n[0]), t.call(null, e, n)
                }))
            }), t); else {
                var n = {};
                o.eachSeries(p(e), (function (t, r) {
                    e[t]((function (e) {
                        var i = d(arguments, 1);
                        i.length <= 1 && (i = i[0]), n[t] = i, r(e)
                    }))
                }), (function (e) {
                    t(e, n)
                }))
            }
        }, o.iterator = function (e) {
            var t = function (n) {
                var r = function () {
                    return e.length && e[n].apply(null, arguments), r.next()
                };
                return r.next = function () {
                    return n < e.length - 1 ? t(n + 1) : null
                }, r
            };
            return t(0)
        }, o.apply = function (e) {
            var t = d(arguments, 1);
            return function () {
                return e.apply(null, t.concat(d(arguments)))
            }
        };
        var x = function (e, t, n, r) {
            var i = [];
            e(t, (function (e, t) {
                n(e, (function (e, n) {
                    i = i.concat(n || []), t(e)
                }))
            }), (function (e) {
                r(e, i)
            }))
        };
        o.concat = g(x), o.concatSeries = v(x), o.whilst = function (e, t, n) {
            e() ? t((function (r) {
                if (r) return n(r);
                o.whilst(e, t, n)
            })) : n()
        }, o.doWhilst = function (e, t, n) {
            e((function (r) {
                if (r) return n(r);
                var i = d(arguments, 1);
                t.apply(null, i) ? o.doWhilst(e, t, n) : n()
            }))
        }, o.until = function (e, t, n) {
            e() ? n() : t((function (r) {
                if (r) return n(r);
                o.until(e, t, n)
            }))
        }, o.doUntil = function (e, t, n) {
            e((function (r) {
                if (r) return n(r);
                var i = d(arguments, 1);
                t.apply(null, i) ? n() : o.doUntil(e, t, n)
            }))
        }, o.queue = function (e, t) {
            if (void 0 === t) t = 1; else if (0 === t) throw new Error("Concurrency must not be zero");

            function n(e, t, n, r) {
                if (e.started || (e.started = !0), l(t) || (t = [t]), 0 === t.length) return o.setImmediate((function () {
                    e.drain && e.drain()
                }));
                f(t, (function (t) {
                    var i = {data: t, callback: "function" == typeof r ? r : null};
                    n ? e.tasks.unshift(i) : e.tasks.push(i), e.saturated && e.tasks.length === e.concurrency && e.saturated(), o.setImmediate(e.process)
                }))
            }

            var r = 0, i = {
                tasks: [],
                concurrency: t,
                saturated: null,
                empty: null,
                drain: null,
                started: !1,
                paused: !1,
                push: function (e, t) {
                    n(i, e, !1, t)
                },
                kill: function () {
                    i.drain = null, i.tasks = []
                },
                unshift: function (e, t) {
                    n(i, e, !0, t)
                },
                process: function () {
                    if (!i.paused && r < i.concurrency && i.tasks.length) {
                        var t = i.tasks.shift();
                        i.empty && 0 === i.tasks.length && i.empty(), r += 1;
                        var n = a((function () {
                            r -= 1, t.callback && t.callback.apply(t, arguments), i.drain && i.tasks.length + r === 0 && i.drain(), i.process()
                        }));
                        e(t.data, n)
                    }
                },
                length: function () {
                    return i.tasks.length
                },
                running: function () {
                    return r
                },
                idle: function () {
                    return i.tasks.length + r === 0
                },
                pause: function () {
                    !0 !== i.paused && (i.paused = !0)
                },
                resume: function () {
                    if (!1 !== i.paused) {
                        i.paused = !1;
                        for (var e = Math.min(i.concurrency, i.tasks.length), t = 1; t <= e; t++) o.setImmediate(i.process)
                    }
                }
            };
            return i
        }, o.priorityQueue = function (e, t) {
            function n(e, t) {
                return e.priority - t.priority
            }

            var r = o.queue(e, t);
            return r.push = function (e, t, i) {
                !function (e, t, r, i) {
                    if (e.started || (e.started = !0), l(t) || (t = [t]), 0 === t.length) return o.setImmediate((function () {
                        e.drain && e.drain()
                    }));
                    f(t, (function (t) {
                        var s = {data: t, priority: r, callback: "function" == typeof i ? i : null};
                        e.tasks.splice(function (e, t, n) {
                            for (var r = -1, i = e.length - 1; r < i;) {
                                var o = r + (i - r + 1 >>> 1);
                                n(t, e[o]) >= 0 ? r = o : i = o - 1
                            }
                            return r
                        }(e.tasks, s, n) + 1, 0, s), e.saturated && e.tasks.length === e.concurrency && e.saturated(), o.setImmediate(e.process)
                    }))
                }(r, e, t, i)
            }, delete r.unshift, r
        }, o.cargo = function (e, t) {
            var n = !1, r = [], i = {
                tasks: r,
                payload: t,
                saturated: null,
                empty: null,
                drain: null,
                drained: !0,
                push: function (e, n) {
                    l(e) || (e = [e]), f(e, (function (e) {
                        r.push({
                            data: e,
                            callback: "function" == typeof n ? n : null
                        }), i.drained = !1, i.saturated && r.length === t && i.saturated()
                    })), o.setImmediate(i.process)
                },
                process: function o() {
                    if (!n) {
                        if (0 === r.length) return i.drain && !i.drained && i.drain(), void (i.drained = !0);
                        var s = "number" == typeof t ? r.splice(0, t) : r.splice(0, r.length), a = h(s, (function (e) {
                            return e.data
                        }));
                        i.empty && i.empty(), n = !0, e(a, (function () {
                            n = !1;
                            var e = arguments;
                            f(s, (function (t) {
                                t.callback && t.callback.apply(null, e)
                            })), o()
                        }))
                    }
                },
                length: function () {
                    return r.length
                },
                running: function () {
                    return n
                }
            };
            return i
        };
        var C = function (e) {
            return function (t) {
                var n = d(arguments, 1);
                t.apply(null, n.concat([function (t) {
                    var n = d(arguments, 1);
                    "undefined" != typeof console && (t ? console.error && console.error(t) : console[e] && f(n, (function (t) {
                        console[e](t)
                    })))
                }]))
            }
        };
        o.log = C("log"), o.dir = C("dir"), o.memoize = function (e, t) {
            var n = {}, r = {};
            t = t || function (e) {
                return e
            };
            var i = function () {
                var i = d(arguments), s = i.pop(), a = t.apply(null, i);
                a in n ? o.nextTick((function () {
                    s.apply(null, n[a])
                })) : a in r ? r[a].push(s) : (r[a] = [s], e.apply(null, i.concat([function () {
                    n[a] = d(arguments);
                    var e = r[a];
                    delete r[a];
                    for (var t = 0, i = e.length; t < i; t++) e[t].apply(null, arguments)
                }])))
            };
            return i.memo = n, i.unmemoized = e, i
        }, o.unmemoize = function (e) {
            return function () {
                return (e.unmemoized || e).apply(null, arguments)
            }
        }, o.times = function (e, t, n) {
            for (var r = [], i = 0; i < e; i++) r.push(i);
            return o.map(r, t, n)
        }, o.timesSeries = function (e, t, n) {
            for (var r = [], i = 0; i < e; i++) r.push(i);
            return o.mapSeries(r, t, n)
        }, o.seq = function () {
            var e = arguments;
            return function () {
                var t = this, n = d(arguments), r = n.pop();
                o.reduce(e, n, (function (e, n, r) {
                    n.apply(t, e.concat([function () {
                        var e = arguments[0], t = d(arguments, 1);
                        r(e, t)
                    }]))
                }), (function (e, n) {
                    r.apply(t, [e].concat(n))
                }))
            }
        }, o.compose = function () {
            return o.seq.apply(null, Array.prototype.reverse.call(arguments))
        };
        var k = function (e, t) {
            var n = function () {
                var n = this, r = d(arguments), i = r.pop();
                return e(t, (function (e, t) {
                    e.apply(n, r.concat([t]))
                }), i)
            };
            if (arguments.length > 2) {
                var r = d(arguments, 2);
                return n.apply(this, r)
            }
            return n
        };
        o.applyEach = g(k), o.applyEachSeries = v(k), o.forever = function (e, t) {
            !function n(r) {
                if (r) {
                    if (t) return t(r);
                    throw r
                }
                e(n)
            }()
        }, e.exports ? e.exports = o : void 0 === (r = function () {
            return o
        }.apply(t, [])) || (e.exports = r)
    }()
}, function (e, t) {
    e.exports = require("zlib")
}, function (e, t, n) {
    var r = n(10), i = n(83), o = t;
    o.getAllInfo = function (e) {
        return {
            date: (new Date).toString(),
            process: o.getProcessInfo(),
            os: o.getOsInfo(),
            trace: o.getTrace(e),
            stack: e.stack && e.stack.split("\n")
        }
    }, o.getProcessInfo = function () {
        return {
            pid: process.pid,
            uid: process.getuid ? process.getuid() : null,
            gid: process.getgid ? process.getgid() : null,
            cwd: process.cwd(),
            execPath: process.execPath,
            version: process.version,
            argv: process.argv,
            memoryUsage: process.memoryUsage()
        }
    }, o.getOsInfo = function () {
        return {loadavg: r.loadavg(), uptime: r.uptime()}
    }, o.getTrace = function (e) {
        return (e ? i.parse(e) : i.get()).map((function (e) {
            return {
                column: e.getColumnNumber(),
                file: e.getFileName(),
                function: e.getFunctionName(),
                line: e.getLineNumber(),
                method: e.getMethodName(),
                native: e.isNative()
            }
        }))
    }
}, function (e, t, n) {
    "use strict";
    e.exports = {copySync: n(89)}
}, function (e, t) {
    e.exports = e => {
        const t = process.versions.node.split(".").map(e => parseInt(e, 10));
        return e = e.split(".").map(e => parseInt(e, 10)), t[0] > e[0] || t[0] === e[0] && (t[1] > e[1] || t[1] === e[1] && t[2] >= e[2])
    }
}, function (e, t, n) {
    "use strict";
    const r = n(3);
    e.exports = {
        utimesMillis: function (e, t, n, i) {
            r.open(e, "r+", (e, o) => {
                if (e) return i(e);
                r.futimes(o, t, n, e => {
                    r.close(o, t => {
                        i && i(e || t)
                    })
                })
            })
        }, utimesMillisSync: function (e, t, n) {
            const i = r.openSync(e, "r+");
            return r.futimesSync(i, t, n), r.closeSync(i)
        }
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromCallback;
    e.exports = {copy: r(n(91))}
}, function (e, t, n) {
    "use strict";
    var r = n(2);
    e.exports = function (e) {
        if (null === e || "object" != typeof e) return e;
        if (e instanceof Object) var t = {__proto__: e.__proto__}; else t = Object.create(null);
        return Object.getOwnPropertyNames(e).forEach((function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
        })), t
    }(r)
}, function (e, t, n) {
    var r = n(1), i = n(2), o = parseInt("0777", 8);

    function s(e, t, n, a) {
        "function" == typeof t ? (n = t, t = {}) : t && "object" == typeof t || (t = {mode: t});
        var c = t.mode, u = t.fs || i;
        void 0 === c && (c = o & ~process.umask()), a || (a = null);
        var l = n || function () {
        };
        e = r.resolve(e), u.mkdir(e, c, (function (n) {
            if (!n) return l(null, a = a || e);
            switch (n.code) {
                case"ENOENT":
                    s(r.dirname(e), t, (function (n, r) {
                        n ? l(n, r) : s(e, t, l, r)
                    }));
                    break;
                default:
                    u.stat(e, (function (e, t) {
                        e || !t.isDirectory() ? l(n, a) : l(null, a)
                    }))
            }
        }))
    }

    e.exports = s.mkdirp = s.mkdirP = s, s.sync = function e(t, n, s) {
        n && "object" == typeof n || (n = {mode: n});
        var a = n.mode, c = n.fs || i;
        void 0 === a && (a = o & ~process.umask()), s || (s = null), t = r.resolve(t);
        try {
            c.mkdirSync(t, a), s = s || t
        } catch (i) {
            switch (i.code) {
                case"ENOENT":
                    s = e(r.dirname(t), n, s), e(t, n, s);
                    break;
                default:
                    var u;
                    try {
                        u = c.statSync(t)
                    } catch (e) {
                        throw i
                    }
                    if (!u.isDirectory()) throw i
            }
        }
        return s
    }
}, function (e, t, n) {
    var r = n(44), i = n(17), o = n(45).ArraySet, s = n(116).MappingList;

    function a(e) {
        e || (e = {}), this._file = i.getArg(e, "file", null), this._sourceRoot = i.getArg(e, "sourceRoot", null), this._skipValidation = i.getArg(e, "skipValidation", !1), this._sources = new o, this._names = new o, this._mappings = new s, this._sourcesContents = null
    }

    a.prototype._version = 3, a.fromSourceMap = function (e) {
        var t = e.sourceRoot, n = new a({file: e.file, sourceRoot: t});
        return e.eachMapping((function (e) {
            var r = {generated: {line: e.generatedLine, column: e.generatedColumn}};
            null != e.source && (r.source = e.source, null != t && (r.source = i.relative(t, r.source)), r.original = {
                line: e.originalLine,
                column: e.originalColumn
            }, null != e.name && (r.name = e.name)), n.addMapping(r)
        })), e.sources.forEach((function (t) {
            var r = e.sourceContentFor(t);
            null != r && n.setSourceContent(t, r)
        })), n
    }, a.prototype.addMapping = function (e) {
        var t = i.getArg(e, "generated"), n = i.getArg(e, "original", null), r = i.getArg(e, "source", null),
            o = i.getArg(e, "name", null);
        this._skipValidation || this._validateMapping(t, n, r, o), null != r && (r = String(r), this._sources.has(r) || this._sources.add(r)), null != o && (o = String(o), this._names.has(o) || this._names.add(o)), this._mappings.add({
            generatedLine: t.line,
            generatedColumn: t.column,
            originalLine: null != n && n.line,
            originalColumn: null != n && n.column,
            source: r,
            name: o
        })
    }, a.prototype.setSourceContent = function (e, t) {
        var n = e;
        null != this._sourceRoot && (n = i.relative(this._sourceRoot, n)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[i.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[i.toSetString(n)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null))
    }, a.prototype.applySourceMap = function (e, t, n) {
        var r = t;
        if (null == t) {
            if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
            r = e.file
        }
        var s = this._sourceRoot;
        null != s && (r = i.relative(s, r));
        var a = new o, c = new o;
        this._mappings.unsortedForEach((function (t) {
            if (t.source === r && null != t.originalLine) {
                var o = e.originalPositionFor({line: t.originalLine, column: t.originalColumn});
                null != o.source && (t.source = o.source, null != n && (t.source = i.join(n, t.source)), null != s && (t.source = i.relative(s, t.source)), t.originalLine = o.line, t.originalColumn = o.column, null != o.name && (t.name = o.name))
            }
            var u = t.source;
            null == u || a.has(u) || a.add(u);
            var l = t.name;
            null == l || c.has(l) || c.add(l)
        }), this), this._sources = a, this._names = c, e.sources.forEach((function (t) {
            var r = e.sourceContentFor(t);
            null != r && (null != n && (t = i.join(n, t)), null != s && (t = i.relative(s, t)), this.setSourceContent(t, r))
        }), this)
    }, a.prototype._validateMapping = function (e, t, n, r) {
        if (t && "number" != typeof t.line && "number" != typeof t.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
        if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || n || r) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n)) throw new Error("Invalid mapping: " + JSON.stringify({
            generated: e,
            source: n,
            original: t,
            name: r
        }))
    }, a.prototype._serializeMappings = function () {
        for (var e, t, n, o, s = 0, a = 1, c = 0, u = 0, l = 0, f = 0, h = "", p = this._mappings.toArray(), d = 0, m = p.length; d < m; d++) {
            if (e = "", (t = p[d]).generatedLine !== a) for (s = 0; t.generatedLine !== a;) e += ";", a++; else if (d > 0) {
                if (!i.compareByGeneratedPositionsInflated(t, p[d - 1])) continue;
                e += ","
            }
            e += r.encode(t.generatedColumn - s), s = t.generatedColumn, null != t.source && (o = this._sources.indexOf(t.source), e += r.encode(o - f), f = o, e += r.encode(t.originalLine - 1 - u), u = t.originalLine - 1, e += r.encode(t.originalColumn - c), c = t.originalColumn, null != t.name && (n = this._names.indexOf(t.name), e += r.encode(n - l), l = n)), h += e
        }
        return h
    }, a.prototype._generateSourcesContent = function (e, t) {
        return e.map((function (e) {
            if (!this._sourcesContents) return null;
            null != t && (e = i.relative(t, e));
            var n = i.toSetString(e);
            return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null
        }), this)
    }, a.prototype.toJSON = function () {
        var e = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings()
        };
        return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e
    }, a.prototype.toString = function () {
        return JSON.stringify(this.toJSON())
    }, t.SourceMapGenerator = a
}, function (e, t, n) {
    var r = n(115);
    t.encode = function (e) {
        var t, n = "", i = function (e) {
            return e < 0 ? 1 + (-e << 1) : 0 + (e << 1)
        }(e);
        do {
            t = 31 & i, (i >>>= 5) > 0 && (t |= 32), n += r.encode(t)
        } while (i > 0);
        return n
    }, t.decode = function (e, t, n) {
        var i, o, s, a, c = e.length, u = 0, l = 0;
        do {
            if (t >= c) throw new Error("Expected more digits in base 64 VLQ value.");
            if (-1 === (o = r.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
            i = !!(32 & o), u += (o &= 31) << l, l += 5
        } while (i);
        n.value = (a = (s = u) >> 1, 1 == (1 & s) ? -a : a), n.rest = t
    }
}, function (e, t, n) {
    var r = n(17), i = Object.prototype.hasOwnProperty, o = "undefined" != typeof Map;

    function s() {
        this._array = [], this._set = o ? new Map : Object.create(null)
    }

    s.fromArray = function (e, t) {
        for (var n = new s, r = 0, i = e.length; r < i; r++) n.add(e[r], t);
        return n
    }, s.prototype.size = function () {
        return o ? this._set.size : Object.getOwnPropertyNames(this._set).length
    }, s.prototype.add = function (e, t) {
        var n = o ? e : r.toSetString(e), s = o ? this.has(e) : i.call(this._set, n), a = this._array.length;
        s && !t || this._array.push(e), s || (o ? this._set.set(e, a) : this._set[n] = a)
    }, s.prototype.has = function (e) {
        if (o) return this._set.has(e);
        var t = r.toSetString(e);
        return i.call(this._set, t)
    }, s.prototype.indexOf = function (e) {
        if (o) {
            var t = this._set.get(e);
            if (t >= 0) return t
        } else {
            var n = r.toSetString(e);
            if (i.call(this._set, n)) return this._set[n]
        }
        throw new Error('"' + e + '" is not in the set.')
    }, s.prototype.at = function (e) {
        if (e >= 0 && e < this._array.length) return this._array[e];
        throw new Error("No element indexed by " + e)
    }, s.prototype.toArray = function () {
        return this._array.slice()
    }, t.ArraySet = s
}, function (e, t, n) {
    "use strict";
    var r = n(2);
    e.exports = function (e) {
        if (null === e || "object" != typeof e) return e;
        if (e instanceof Object) var t = {__proto__: e.__proto__}; else t = Object.create(null);
        return Object.getOwnPropertyNames(e).forEach((function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
        })), t
    }(r)
}, function (e, t) {
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return i
    }));
    var r = n(0);

    function i() {
        const e = r.Menu.getApplicationMenu();
        if (e) for (const t of e.items) o(t)
    }

    function o(e) {
        let t = !1;
        if (e.submenu instanceof r.Menu) for (const n of e.submenu.items) o(n) && (t = !0);
        if (t || e.role) return !0;
        const n = e.id;
        return "show-devtools" === n || "reload-window" === n || (e.enabled = !1, !1)
    }
}, function (e, t, n) {
    "use strict";

    function* r(e) {
        for (const t of e.items) yield t, "submenu" === t.type && void 0 !== t.submenu && (yield* r(t.submenu))
    }

    n.d(t, "a", (function () {
        return r
    }))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return u
    }));
    var r = n(0), i = n(24);
    var o = n(25), s = n(4), a = n(18);
    var c;

    function u({
                   selectedExternalEditor: e,
                   selectedShell: t,
                   askForConfirmationOnForcePush: n,
                   askForConfirmationOnRepositoryRemoval: u,
                   hasCurrentPullRequest: h = !1,
                   defaultBranchName: p = "default branch",
                   isForcePushForCurrentRepository: m = !1,
                   isStashedChangesVisible: y = !1,
                   askForConfirmationWhenStashingAllChanges: g = !0
               }) {
        p = function (e, t) {
            if (e.length <= t) return e;
            const n = [...e];
            if (n.length <= t) return e;
            const r = n.reduce((e, t) => (t >= "︀" && t <= "️" ? e.length && e.push(`${e.pop()}${t}`) : e.push(t), e), []);
            return r.length <= t ? e : r.slice(0, t).join("") + "…"
        }(p, 25);
        const v = u ? "&Remove…" : "&Remove", w = h ? "Show &pull request" : "Create &pull request", b = new Array,
            _ = {type: "separator"};
        const S = {
            label: "&File",
            submenu: [{
                label: "New &repository…",
                id: "new-repository",
                click: f("create-repository"),
                accelerator: "CmdOrCtrl+N"
            }, _, {
                label: "Add &local repository…",
                id: "add-local-repository",
                accelerator: "CmdOrCtrl+O",
                click: f("add-local-repository")
            }, {
                label: "Clo&ne repository…",
                id: "clone-repository",
                accelerator: "CmdOrCtrl+Shift+O",
                click: f("clone-repository")
            }]
        };
        S.submenu.push(_, {
            label: "&Options…",
            id: "preferences",
            accelerator: "CmdOrCtrl+,",
            click: f("show-preferences")
        }, _, {role: "quit", label: "E&xit", accelerator: "Alt+F4"});
        b.push(S), b.push({
            label: "&Edit",
            submenu: [{role: "undo", label: "&Undo"}, {role: "redo", label: "&Redo"}, _, {
                role: "cut",
                label: "Cu&t"
            }, {role: "copy", label: "&Copy"}, {role: "paste", label: "&Paste"}, {
                label: "Select &all",
                accelerator: "CmdOrCtrl+A",
                click: f("select-all")
            }, _, {id: "find", label: "&Find", accelerator: "CmdOrCtrl+F", click: f("find-text")}]
        }), b.push({
            label: "&View",
            submenu: [{
                label: "&Changes",
                id: "show-changes",
                accelerator: "CmdOrCtrl+1",
                click: f("show-changes")
            }, {
                label: "&History",
                id: "show-history",
                accelerator: "CmdOrCtrl+2",
                click: f("show-history")
            }, {
                label: "Repository &list",
                id: "show-repository-list",
                accelerator: "CmdOrCtrl+T",
                click: f("choose-repository")
            }, {
                label: "&Branches list",
                id: "show-branches-list",
                accelerator: "CmdOrCtrl+B",
                click: f("show-branches")
            }, _, {
                label: "Go to &Summary",
                id: "go-to-commit-message",
                accelerator: "CmdOrCtrl+G",
                click: f("go-to-commit-message")
            }, {
                label: l(y),
                id: "toggle-stashed-changes",
                accelerator: "Ctrl+H",
                click: f(y ? "hide-stashed-changes" : "show-stashed-changes")
            }, {label: "Toggle &full screen", role: "togglefullscreen"}, _, {
                label: "Reset zoom",
                accelerator: "CmdOrCtrl+0",
                click: d(c.Reset)
            }, {label: "Zoom in", accelerator: "CmdOrCtrl+=", click: d(c.In)}, {
                label: "Zoom out",
                accelerator: "CmdOrCtrl+-",
                click: d(c.Out)
            }, _, {
                label: "&Reload", id: "reload-window", accelerator: "CmdOrCtrl+Alt+R", click(e, t) {
                    t && t.reload()
                }, visible: !1
            }, {
                id: "show-devtools", label: "&Toggle developer tools", accelerator: "Ctrl+Shift+I", click(e, t) {
                    t && t.webContents.toggleDevTools()
                }
            }]
        });
        const E = function (e, t) {
            if (!e) return "P&ush";
            if (t) return "Force P&ush…";
            return "Force P&ush"
        }(m, n), O = m ? "force-push" : "push";
        b.push({
            label: "&Repository",
            id: "repository",
            submenu: [{id: "push", label: E, accelerator: "CmdOrCtrl+P", click: f(O)}, {
                id: "pull",
                label: "Pu&ll",
                accelerator: "CmdOrCtrl+Shift+P",
                click: f("pull")
            }, {
                label: v,
                id: "remove-repository",
                accelerator: "CmdOrCtrl+Backspace",
                click: f("remove-repository")
            }, _, {
                id: "view-repository-on-github",
                label: "&View on GitHub",
                accelerator: "CmdOrCtrl+Shift+G",
                click: f("view-repository-on-github")
            }, {
                label: "O&pen in " + (null != t ? t : "Command Prompt"),
                id: "open-in-shell",
                accelerator: "Ctrl+`",
                click: f("open-in-shell")
            }, {
                label: "Show in E&xplorer",
                id: "open-working-directory",
                accelerator: "CmdOrCtrl+Shift+F",
                click: f("open-working-directory")
            }, {
                label: "&Open in " + (null != e ? e : "external editor"),
                id: "open-external-editor",
                accelerator: "CmdOrCtrl+Shift+A",
                click: f("open-external-editor")
            }, _, {
                id: "create-issue-in-repository-on-github",
                label: "Create &issue on GitHub",
                accelerator: "CmdOrCtrl+I",
                click: f("create-issue-in-repository-on-github")
            }, _, {
                label: "Repository &settings…",
                id: "show-repository-settings",
                click: f("show-repository-settings")
            }]
        });
        const x = [{
            label: "New &branch…",
            id: "create-branch",
            accelerator: "CmdOrCtrl+Shift+N",
            click: f("create-branch")
        }, {
            label: "&Rename…",
            id: "rename-branch",
            accelerator: "CmdOrCtrl+Shift+R",
            click: f("rename-branch")
        }, {
            label: "&Delete…",
            id: "delete-branch",
            accelerator: "CmdOrCtrl+Shift+D",
            click: f("delete-branch")
        }, _, {
            label: "Discard all changes…",
            id: "discard-all-changes",
            accelerator: "CmdOrCtrl+Shift+Backspace",
            click: f("discard-all-changes")
        }, {
            label: g ? "&Stash all changes…" : "&Stash all changes",
            id: "stash-all-changes",
            accelerator: "CmdOrCtrl+Shift+S",
            click: f("stash-all-changes")
        }, _, {
            label: "&Update from " + p,
            id: "update-branch",
            accelerator: "CmdOrCtrl+Shift+U",
            click: f("update-branch")
        }, {
            label: "&Compare to branch",
            id: "compare-to-branch",
            accelerator: "CmdOrCtrl+Shift+B",
            click: f("compare-to-branch")
        }, {
            label: "&Merge into current branch…",
            id: "merge-branch",
            accelerator: "CmdOrCtrl+Shift+M",
            click: f("merge-branch")
        }];
        x.push({
            label: "Squas&h and merge into current branch…",
            id: "squash-and-merge-branch",
            accelerator: "CmdOrCtrl+Shift+H",
            click: f("squash-and-merge-branch")
        }), x.push({
            label: "R&ebase current branch…",
            id: "rebase-branch",
            accelerator: "CmdOrCtrl+Shift+E",
            click: f("rebase-branch")
        }, _, {
            label: "Compare on &GitHub",
            id: "compare-on-github",
            accelerator: "CmdOrCtrl+Shift+C",
            click: f("compare-on-github")
        }, {
            label: w,
            id: "create-pull-request",
            accelerator: "CmdOrCtrl+R",
            click: f("open-pull-request")
        }), b.push({label: "&Branch", id: "branch", submenu: x});
        const C = [{
            label: "Report issue…", click() {
                r.shell.openExternal("https://github.com/desktop/desktop/issues/new/choose").catch(e => log.error("Failed opening issue creation page", e))
            }
        }, {
            label: "&Contact GitHub support…", click() {
                r.shell.openExternal("https://github.com/contact?from_desktop_app=1&app_version=" + r.app.getVersion()).catch(e => log.error("Failed opening contact support page", e))
            }
        }, {
            label: "Show User Guides", click() {
                r.shell.openExternal("https://help.github.com/desktop/guides/").catch(e => log.error("Failed opening user guides page", e))
            }
        }, {
            label: "Show keyboard shortcuts", click() {
                r.shell.openExternal("https://help.github.com/en/desktop/getting-started-with-github-desktop/keyboard-shortcuts-in-github-desktop").catch(e => log.error("Failed opening keyboard shortcuts page", e))
            }
        }, {
            label: "S&how logs in Explorer", click() {
                const e = Object(o.a)();
                Object(s.ensureDir)(e).then(() => {
                    Object(a.a)(e)
                }).catch(e => {
                    log.error("Failed opening logs directory", e)
                })
            }
        }];
        return b.push({
            label: "&Help",
            submenu: [...C, _, {label: "&About GitHub Desktop", click: f("show-about"), id: "about"}]
        }), Object(i.a)(b), r.Menu.buildFromTemplate(b)
    }

    function l(e) {
        return e ? "H&ide stashed changes" : "Sho&w stashed changes"
    }

    function f(e) {
        return (t, n) => {
            n ? n.webContents.send("menu-event", {name: e}) : r.ipcMain.emit("menu-event", {name: e})
        }
    }

    !function (e) {
        e[e.Reset = 0] = "Reset", e[e.In = 1] = "In", e[e.Out = 2] = "Out"
    }(c || (c = {}));
    const h = [1, 1.1, 1.25, 1.5, 1.75, 2], p = h.slice().reverse();

    function d(e) {
        return (t, n) => {
            if (!n) return;
            const {webContents: r} = n;
            if (e === c.Reset) r.zoomFactor = 1, r.send("zoom-factor-changed", 1); else {
                const t = r.zoomFactor, n = e === c.In ? h : p,
                    o = (i = t, n.reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e)),
                    s = n.find(t => e === c.In ? t > o : t < o), a = void 0 === s ? o : s;
                r.zoomFactor = a, r.send("zoom-factor-changed", a)
            }
            var i
        }
    }
}, function (e, t, n) {
    "use strict";
    const r = n(1);
    e.exports = function (e) {
        if ("string" != typeof e || e.length <= 7 || "file://" !== e.substring(0, 7)) throw new TypeError("must pass in a file:// URI to convert to a file path");
        const t = decodeURI(e.substring(7)), n = t.indexOf("/");
        let i = t.substring(0, n), o = t.substring(n + 1);
        return "localhost" === i && (i = ""), i && (i = r.sep + r.sep + i), o = o.replace(/^(.+)\|/, "$1:"), "\\" === r.sep && (o = o.replace(/\//g, "\\")), /^.+:/.test(o) || (o = r.sep + o), i + o
    }
}, function (e, t, n) {
    var r, i = n(114).SourceMapConsumer, o = n(1);
    try {
        (r = n(2)).existsSync && r.readFileSync || (r = null)
    } catch (e) {
    }
    var s = !1, a = !1, c = !1, u = "auto", l = {}, f = {}, h = /^data:application\/json[^,]+base64,/, p = [], d = [];

    function m() {
        return "browser" === u || "node" !== u && ("undefined" != typeof window && "function" == typeof XMLHttpRequest && !(window.require && window.module && window.process && "renderer" === window.process.type))
    }

    function y(e) {
        return function (t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n](t);
                if (r) return r
            }
            return null
        }
    }

    var g = y(p);

    function v(e, t) {
        if (!e) return t;
        var n = o.dirname(e), r = /^\w+:\/\/[^\/]*/.exec(n), i = r ? r[0] : "";
        return i + o.resolve(n.slice(i.length), t)
    }

    p.push((function (e) {
        if ((e = e.trim()) in l) return l[e];
        var t = null;
        if (r) {
            if (r.existsSync(e)) try {
                t = r.readFileSync(e, "utf8")
            } catch (e) {
                t = ""
            }
        } else {
            var n = new XMLHttpRequest;
            n.open("GET", e, !1), n.send(null);
            t = null;
            4 === n.readyState && 200 === n.status && (t = n.responseText)
        }
        return l[e] = t
    }));
    var w = y(d);

    function b(e) {
        var t = f[e.source];
        if (!t) {
            var n = w(e.source);
            n ? (t = f[e.source] = {
                url: n.url,
                map: new i(n.map)
            }).map.sourcesContent && t.map.sources.forEach((function (e, n) {
                var r = t.map.sourcesContent[n];
                if (r) {
                    var i = v(t.url, e);
                    l[i] = r
                }
            })) : t = f[e.source] = {url: null, map: null}
        }
        if (t && t.map) {
            var r = t.map.originalPositionFor(e);
            if (null !== r.source) return r.source = v(t.url, r.source), r
        }
        return e
    }

    function _() {
        var e, t = "";
        if (this.isNative()) t = "native"; else {
            !(e = this.getScriptNameOrSourceURL()) && this.isEval() && (t = this.getEvalOrigin(), t += ", "), t += e || "<anonymous>";
            var n = this.getLineNumber();
            if (null != n) {
                t += ":" + n;
                var r = this.getColumnNumber();
                r && (t += ":" + r)
            }
        }
        var i = "", o = this.getFunctionName(), s = !0, a = this.isConstructor();
        if (!(this.isToplevel() || a)) {
            var c = this.getTypeName();
            "[object Object]" === c && (c = "null");
            var u = this.getMethodName();
            o ? (c && 0 != o.indexOf(c) && (i += c + "."), i += o, u && o.indexOf("." + u) != o.length - u.length - 1 && (i += " [as " + u + "]")) : i += c + "." + (u || "<anonymous>")
        } else a ? i += "new " + (o || "<anonymous>") : o ? i += o : (i += t, s = !1);
        return s && (i += " (" + t + ")"), i
    }

    function S(e) {
        var t = {};
        return Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function (n) {
            t[n] = /^(?:is|get)/.test(n) ? function () {
                return e[n].call(e)
            } : e[n]
        })), t.toString = _, t
    }

    function E(e) {
        if (e.isNative()) return e;
        var t = e.getFileName() || e.getScriptNameOrSourceURL();
        if (t) {
            var n = e.getLineNumber(), r = e.getColumnNumber() - 1;
            1 === n && r > 62 && !m() && !e.isEval() && (r -= 62);
            var i = b({source: t, line: n, column: r});
            return (e = S(e)).getFileName = function () {
                return i.source
            }, e.getLineNumber = function () {
                return i.line
            }, e.getColumnNumber = function () {
                return i.column + 1
            }, e.getScriptNameOrSourceURL = function () {
                return i.source
            }, e
        }
        var o = e.isEval() && e.getEvalOrigin();
        return o ? (o = function e(t) {
            var n = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(t);
            if (n) {
                var r = b({source: n[2], line: +n[3], column: n[4] - 1});
                return "eval at " + n[1] + " (" + r.source + ":" + r.line + ":" + (r.column + 1) + ")"
            }
            return (n = /^eval at ([^(]+) \((.+)\)$/.exec(t)) ? "eval at " + n[1] + " (" + e(n[2]) + ")" : t
        }(o), (e = S(e)).getEvalOrigin = function () {
            return o
        }, e) : e
    }

    function O(e, t) {
        return c && (l = {}, f = {}), e + t.map((function (e) {
            return "\n    at " + E(e)
        })).join("")
    }

    function x(e) {
        var t = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(e.stack);
        if (t) {
            var n = t[1], i = +t[2], o = +t[3], s = l[n];
            if (!s && r && r.existsSync(n)) try {
                s = r.readFileSync(n, "utf8")
            } catch (e) {
                s = ""
            }
            if (s) {
                var a = s.split(/(?:\r\n|\r|\n)/)[i - 1];
                if (a) return n + ":" + i + "\n" + a + "\n" + new Array(o).join(" ") + "^"
            }
        }
        return null
    }

    function C(e) {
        var t = x(e);
        t && (console.error(), console.error(t)), console.error(e.stack), process.exit(1)
    }

    d.push((function (e) {
        var t, n = function (e) {
            var t;
            if (m()) try {
                var n = new XMLHttpRequest;
                n.open("GET", e, !1), n.send(null), t = 4 === n.readyState ? n.responseText : null;
                var r = n.getResponseHeader("SourceMap") || n.getResponseHeader("X-SourceMap");
                if (r) return r
            } catch (e) {
            }
            t = g(e);
            for (var i, o, s = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/)[ \t]*$)/gm; o = s.exec(t);) i = o;
            return i ? i[1] : null
        }(e);
        if (!n) return null;
        if (h.test(n)) {
            var r = n.slice(n.indexOf(",") + 1);
            t = new Buffer(r, "base64").toString(), n = e
        } else n = v(e, n), t = g(n);
        return t ? {url: n, map: t} : null
    })), t.wrapCallSite = E, t.getErrorSource = x, t.mapSourcePosition = b, t.retrieveSourceMap = w, t.install = function (e) {
        if ((e = e || {}).environment && (u = e.environment, -1 === ["node", "browser", "auto"].indexOf(u))) throw new Error("environment " + u + " was unknown. Available options are {auto, browser, node}");
        if (e.retrieveFile && (e.overrideRetrieveFile && (p.length = 0), p.unshift(e.retrieveFile)), e.retrieveSourceMap && (e.overrideRetrieveSourceMap && (d.length = 0), d.unshift(e.retrieveSourceMap)), e.hookRequire && !m()) {
            var t;
            try {
                t = n(121)
            } catch (e) {
            }
            var r = t.prototype._compile;
            r.__sourceMapSupport || (t.prototype._compile = function (e, t) {
                return l[t] = e, f[t] = void 0, r.call(this, e, t)
            }, t.prototype._compile.__sourceMapSupport = !0)
        }
        var i;
        (c || (c = "emptyCacheBetweenOperations" in e && e.emptyCacheBetweenOperations), s || (s = !0, Error.prepareStackTrace = O), a) || (!("handleUncaughtExceptions" in e) || e.handleUncaughtExceptions) && "object" == typeof process && null !== process && "function" == typeof process.on && (a = !0, i = process.emit, process.emit = function (e) {
            if ("uncaughtException" === e) {
                var t = arguments[1] && arguments[1].stack, n = this.listeners(e).length > 0;
                if (t && !n) return C(arguments[1])
            }
            return i.apply(this, arguments)
        })
    }
}, function (e, t, n) {
    "use strict";
    const r = n(1);
    e.exports = (e, t) => {
        if ("string" != typeof e) throw new TypeError("Expected a string, got " + typeof e);
        let n = e;
        return (t = Object.assign({resolve: !0}, t)).resolve && (n = r.resolve(e)), n = n.replace(/\\/g, "/"), "/" !== n[0] && (n = "/" + n), encodeURI("file://" + n).replace(/[?#]/g, encodeURIComponent)
    }
}, function (e, t, n) {
    "use strict";
    const r = n(1), i = n(0), o = n(124), s = n(42);
    e.exports = function (e) {
        const t = i.app || i.remote.app, n = i.screen || i.remote.screen;
        let a, c, u;
        const l = Object.assign({
            file: "window-state.json",
            path: t.getPath("userData"),
            maximize: !0,
            fullScreen: !0
        }, e), f = r.join(l.path, l.file);

        function h() {
            return a && Number.isInteger(a.x) && Number.isInteger(a.y) && Number.isInteger(a.width) && a.width > 0 && Number.isInteger(a.height) && a.height > 0
        }

        function p() {
            const e = n.getPrimaryDisplay().bounds;
            a = {width: l.defaultWidth || 800, height: l.defaultHeight || 600, x: 0, y: 0, displayBounds: e}
        }

        function d() {
            if (!n.getAllDisplays().some(e => {
                return t = e.bounds, a.x >= t.x && a.y >= t.y && a.x + a.width <= t.x + t.width && a.y + a.height <= t.y + t.height;
                var t
            })) return p()
        }

        function m(e) {
            if (e = e || c) try {
                const t = e.getBounds();
                (function (e) {
                    return !e.isMaximized() && !e.isMinimized() && !e.isFullScreen()
                })(e) && (a.x = t.x, a.y = t.y, a.width = t.width, a.height = t.height), a.isMaximized = e.isMaximized(), a.isFullScreen = e.isFullScreen(), a.displayBounds = n.getDisplayMatching(t).bounds
            } catch (e) {
            }
        }

        function y(e) {
            e && m(e);
            try {
                s.sync(r.dirname(f)), o.writeFileSync(f, a)
            } catch (e) {
            }
        }

        function g() {
            clearTimeout(u), u = setTimeout(m, 100)
        }

        function v() {
            m()
        }

        function w() {
            b(), y()
        }

        function b() {
            c && (c.removeListener("resize", g), c.removeListener("move", g), clearTimeout(u), c.removeListener("close", v), c.removeListener("closed", w), c = null)
        }

        try {
            a = o.readFileSync(f)
        } catch (e) {
        }
        return a && (h() || a.isMaximized || a.isFullScreen) ? h() && a.displayBounds && d() : a = null, a = Object.assign({
            width: l.defaultWidth || 800,
            height: l.defaultHeight || 600
        }, a), {
            get x() {
                return a.x
            }, get y() {
                return a.y
            }, get width() {
                return a.width
            }, get height() {
                return a.height
            }, get displayBounds() {
                return a.displayBounds
            }, get isMaximized() {
                return a.isMaximized
            }, get isFullScreen() {
                return a.isFullScreen
            }, saveState: y, unmanage: b, manage: function (e) {
                l.maximize && a.isMaximized && e.maximize(), l.fullScreen && a.isFullScreen && e.setFullScreen(!0), e.on("resize", g), e.on("move", g), e.on("close", v), e.on("closed", w), c = e
            }, resetStateToDefault: p
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0, get: function () {
                return t[n]
            }
        })
    } : function (e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
    }), i = this && this.__exportStar || function (e, t) {
        for (var n in e) "default" === n || t.hasOwnProperty(n) || r(t, e, n)
    };
    Object.defineProperty(t, "__esModule", {value: !0}), i(n(130), t)
}, function (e, t) {
    e.exports = () => Promise.resolve({})
}, function (e) {
    e.exports = JSON.parse('{"name":"winston","description":"A multi-transport async logging library for Node.js","version":"2.3.1","author":"Charlie Robbins <charlie.robbins@gmail.com>","maintainers":["Jarrett Cruger <jcrugzz@gmail.com>","Alberto Pose <albertopose@gmail.com>"],"repository":{"type":"git","url":"https://github.com/winstonjs/winston.git"},"keywords":["winston","logging","sysadmin","tools"],"dependencies":{"async":"~1.0.0","colors":"1.0.x","cycle":"1.0.x","eyes":"0.1.x","isstream":"0.1.x","stack-trace":"0.0.x"},"devDependencies":{"cross-spawn-async":"^2.0.0","hock":"1.x.x","std-mocks":"~1.0.0","vows":"0.7.x"},"main":"./lib/winston","scripts":{"test":"vows --spec --isolate"},"engines":{"node":">= 0.10.0"},"license":"MIT"}')
}, function (e, t, n) {
    Object.defineProperty(t, "Console", {
        configurable: !0, enumerable: !0, get: function () {
            return n(60).Console
        }
    }), Object.defineProperty(t, "File", {
        configurable: !0, enumerable: !0, get: function () {
            return n(77).File
        }
    }), Object.defineProperty(t, "Http", {
        configurable: !0, enumerable: !0, get: function () {
            return n(79).Http
        }
    }), Object.defineProperty(t, "Memory", {
        configurable: !0, enumerable: !0, get: function () {
            return n(82).Memory
        }
    })
}, function (e, t, n) {
    n(14);
    var r = n(10), i = n(5), o = n(11), s = n(16).Transport, a = t.Console = function (e) {
        s.call(this, e), e = e || {}, this.json = e.json || !1, this.colorize = e.colorize || !1, this.prettyPrint = e.prettyPrint || !1, this.timestamp = void 0 !== e.timestamp && e.timestamp, this.showLevel = void 0 === e.showLevel || e.showLevel, this.label = e.label || null, this.logstash = e.logstash || !1, this.depth = e.depth || null, this.align = e.align || !1, this.stderrLevels = function (e, t) {
            var n = "Cannot have non-string elements in stderrLevels Array";
            if (t) {
                if (e) throw new Error("Cannot set debugStdout and stderrLevels together");
                return o.stringArrayToSet(["error"], n)
            }
            if (!e) return o.stringArrayToSet(["error", "debug"], n);
            if (!Array.isArray(e)) throw new Error("Cannot set stderrLevels to type other than Array");
            return o.stringArrayToSet(e, n)
        }(e.stderrLevels, e.debugStdout), this.eol = e.eol || r.EOL, this.json && (this.stringify = e.stringify || function (e) {
            return JSON.stringify(e, null, 2)
        })
    };
    i.inherits(a, s), a.prototype.name = "console", a.prototype.log = function (e, t, n, r) {
        if (this.silent) return r(null, !0);
        var i;
        i = o.log({
            colorize: this.colorize,
            json: this.json,
            level: e,
            message: t,
            meta: n,
            stringify: this.stringify,
            timestamp: this.timestamp,
            showLevel: this.showLevel,
            prettyPrint: this.prettyPrint,
            raw: this.raw,
            label: this.label,
            logstash: this.logstash,
            depth: this.depth,
            formatter: this.formatter,
            align: this.align,
            humanReadableUnhandledException: this.humanReadableUnhandledException
        }), this.stderrLevels[e] ? process.stderr.write(i + this.eol) : process.stdout.write(i + this.eol), this.emit("logged"), r(null, !0)
    }
}, function (e, t) {
    e.exports = require("crypto")
}, function (module, exports) {
    var cycle = exports;
    cycle.decycle = function (e) {
        "use strict";
        var t = [], n = [];
        return function e(r, i) {
            var o, s, a;
            if (!("object" != typeof r || null === r || r instanceof Boolean || r instanceof Date || r instanceof Number || r instanceof RegExp || r instanceof String)) {
                for (o = 0; o < t.length; o += 1) if (t[o] === r) return {$ref: n[o]};
                if (t.push(r), n.push(i), "[object Array]" === Object.prototype.toString.apply(r)) for (a = [], o = 0; o < r.length; o += 1) a[o] = e(r[o], i + "[" + o + "]"); else for (s in a = {}, r) Object.prototype.hasOwnProperty.call(r, s) && (a[s] = e(r[s], i + "[" + JSON.stringify(s) + "]"));
                return a
            }
            return r
        }(e, "$")
    }, cycle.retrocycle = function retrocycle($) {
        "use strict";
        var px = /^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;
        return function rez(value) {
            var i, item, name, path;
            if (value && "object" == typeof value) if ("[object Array]" === Object.prototype.toString.apply(value)) for (i = 0; i < value.length; i += 1) item = value[i], item && "object" == typeof item && (path = item.$ref, "string" == typeof path && px.test(path) ? value[i] = eval(path) : rez(item)); else for (name in value) "object" == typeof value[name] && (item = value[name], item && (path = item.$ref, "string" == typeof path && px.test(path) ? value[name] = eval(path) : rez(item)))
        }($), $
    }
}, function (e, t) {
    e.exports = require("string_decoder")
}, function (e, t, n) {
    var r = n(15);
    e.exports = r
}, function (e, t) {
    var n = {};
    e.exports = n;
    var r = {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        grey: [90, 39],
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        blackBG: [40, 49],
        redBG: [41, 49],
        greenBG: [42, 49],
        yellowBG: [43, 49],
        blueBG: [44, 49],
        magentaBG: [45, 49],
        cyanBG: [46, 49],
        whiteBG: [47, 49]
    };
    Object.keys(r).forEach((function (e) {
        var t = r[e], i = n[e] = [];
        i.open = "[" + t[0] + "m", i.close = "[" + t[1] + "m"
    }))
}, function (e, t, n) {
    var r = process.argv;
    e.exports = -1 === r.indexOf("--no-color") && -1 === r.indexOf("--color=false") && (-1 !== r.indexOf("--color") || -1 !== r.indexOf("--color=true") || -1 !== r.indexOf("--color=always") || !(process.stdout && !process.stdout.isTTY))
}, function (e, t) {
    function n(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
    }

    n.keys = function () {
        return []
    }, n.resolve = n, e.exports = n, n.id = 67
}, function (e, t) {
    e.exports = function (e, t) {
        var n = "";
        e = (e = e || "Run the trap, drop the bass").split("");
        var r = {
            a: ["@", "Ą", "Ⱥ", "Ʌ", "Δ", "Λ", "Д"],
            b: ["ß", "Ɓ", "Ƀ", "ɮ", "β", "฿"],
            c: ["©", "Ȼ", "Ͼ"],
            d: ["Ð", "Ɗ", "Ԁ", "ԁ", "Ԃ", "ԃ"],
            e: ["Ë", "ĕ", "Ǝ", "ɘ", "Σ", "ξ", "Ҽ", "੬"],
            f: ["Ӻ"],
            g: ["ɢ"],
            h: ["Ħ", "ƕ", "Ң", "Һ", "Ӈ", "Ԋ"],
            i: ["༏"],
            j: ["Ĵ"],
            k: ["ĸ", "Ҡ", "Ӄ", "Ԟ"],
            l: ["Ĺ"],
            m: ["ʍ", "Ӎ", "ӎ", "Ԡ", "ԡ", "൩"],
            n: ["Ñ", "ŋ", "Ɲ", "Ͷ", "Π", "Ҋ"],
            o: ["Ø", "õ", "ø", "Ǿ", "ʘ", "Ѻ", "ם", "۝", "๏"],
            p: ["Ƿ", "Ҏ"],
            q: ["্"],
            r: ["®", "Ʀ", "Ȑ", "Ɍ", "ʀ", "Я"],
            s: ["§", "Ϟ", "ϟ", "Ϩ"],
            t: ["Ł", "Ŧ", "ͳ"],
            u: ["Ʊ", "Ս"],
            v: ["ט"],
            w: ["Ш", "Ѡ", "Ѽ", "൰"],
            x: ["Ҳ", "Ӿ", "Ӽ", "ӽ"],
            y: ["¥", "Ұ", "Ӌ"],
            z: ["Ƶ", "ɀ"]
        };
        return e.forEach((function (e) {
            e = e.toLowerCase();
            var t = r[e] || [" "], i = Math.floor(Math.random() * t.length);
            n += void 0 !== r[e] ? r[e][i] : e
        })), n
    }
}, function (e, t) {
    e.exports = function (e, t) {
        e = e || "   he is here   ";
        var n = {
            up: ["̍", "̎", "̄", "̅", "̿", "̑", "̆", "̐", "͒", "͗", "͑", "̇", "̈", "̊", "͂", "̓", "̈", "͊", "͋", "͌", "̃", "̂", "̌", "͐", "̀", "́", "̋", "̏", "̒", "̓", "̔", "̽", "̉", "ͣ", "ͤ", "ͥ", "ͦ", "ͧ", "ͨ", "ͩ", "ͪ", "ͫ", "ͬ", "ͭ", "ͮ", "ͯ", "̾", "͛", "͆", "̚"],
            down: ["̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̤", "̥", "̦", "̩", "̪", "̫", "̬", "̭", "̮", "̯", "̰", "̱", "̲", "̳", "̹", "̺", "̻", "̼", "ͅ", "͇", "͈", "͉", "͍", "͎", "͓", "͔", "͕", "͖", "͙", "͚", "̣"],
            mid: ["̕", "̛", "̀", "́", "͘", "̡", "̢", "̧", "̨", "̴", "̵", "̶", "͜", "͝", "͞", "͟", "͠", "͢", "̸", "̷", "͡", " ҉"]
        }, r = [].concat(n.up, n.down, n.mid);

        function i(e) {
            return Math.floor(Math.random() * e)
        }

        function o(e) {
            var t = !1;
            return r.filter((function (n) {
                t = n === e
            })), t
        }

        return function (e, t) {
            var r, s, a = "";
            for (s in (t = t || {}).up = t.up || !0, t.mid = t.mid || !0, t.down = t.down || !0, t.size = t.size || "maxi", e = e.split("")) if (!o(s)) {
                switch (a += e[s], r = {up: 0, down: 0, mid: 0}, t.size) {
                    case"mini":
                        r.up = i(8), r.min = i(2), r.down = i(8);
                        break;
                    case"maxi":
                        r.up = i(16) + 3, r.min = i(4) + 1, r.down = i(64) + 3;
                        break;
                    default:
                        r.up = i(8) + 1, r.mid = i(6) / 2, r.down = i(8) + 1
                }
                var c = ["up", "mid", "down"];
                for (var u in c) for (var l = c[u], f = 0; f <= r[l]; f++) t[l] && (a += n[l][i(n[l].length)])
            }
            return a
        }(e)
    }
}, function (e, t, n) {
    var r = n(15);
    e.exports = function (e, t, n) {
        if (" " === e) return e;
        switch (t % 3) {
            case 0:
                return r.red(e);
            case 1:
                return r.white(e);
            case 2:
                return r.blue(e)
        }
    }
}, function (e, t, n) {
    var r = n(15);
    e.exports = function (e, t, n) {
        return t % 2 == 0 ? e : r.inverse(e)
    }
}, function (e, t, n) {
    var r, i = n(15);
    e.exports = (r = ["red", "yellow", "green", "blue", "magenta"], function (e, t, n) {
        return " " === e ? e : i[r[t++ % r.length]](e)
    })
}, function (e, t, n) {
    var r, i = n(15);
    e.exports = (r = ["underline", "inverse", "grey", "yellow", "red", "green", "blue", "white", "cyan", "magenta"], function (e, t, n) {
        return " " === e ? e : i[r[Math.round(Math.random() * (r.length - 1))]](e)
    })
}, function (e, t) {
    var n = t;
    n.levels = {
        error: 0,
        warn: 1,
        help: 2,
        data: 3,
        info: 4,
        debug: 5,
        prompt: 6,
        verbose: 7,
        input: 8,
        silly: 9
    }, n.colors = {
        error: "red",
        warn: "yellow",
        help: "cyan",
        data: "grey",
        info: "green",
        debug: "blue",
        prompt: "grey",
        verbose: "cyan",
        input: "grey",
        silly: "magenta"
    }
}, function (e, t) {
    var n = t;
    n.levels = {error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5}, n.colors = {
        error: "red",
        warn: "yellow",
        info: "green",
        verbose: "cyan",
        debug: "blue",
        silly: "magenta"
    }
}, function (e, t) {
    var n = t;
    n.levels = {
        emerg: 0,
        alert: 1,
        crit: 2,
        error: 3,
        warning: 4,
        notice: 5,
        info: 6,
        debug: 7
    }, n.colors = {
        emerg: "red",
        alert: "yellow",
        crit: "red",
        error: "red",
        warning: "red",
        notice: "yellow",
        info: "green",
        debug: "blue"
    }
}, function (e, t, n) {
    n(14);
    var r = n(2), i = n(1), o = n(5), s = n(34), a = n(35), c = n(11), u = n(16).Transport, l = n(78).isWritable,
        f = n(8).Stream, h = n(10), p = t.File = function (e) {
            var t = this;

            function n(t) {
                Array.prototype.slice.call(arguments, 1).forEach((function (n) {
                    if (e[n]) throw new Error("Cannot set " + n + " and " + t + "together")
                }))
            }

            if (u.call(this, e), e.filename || e.dirname) n("filename or dirname", "stream"), this._basename = this.filename = e.filename ? i.basename(e.filename) : "winston.log", this.dirname = e.dirname || i.dirname(e.filename), this.options = e.options || {flags: "a"}, this.options.highWaterMark = this.options.highWaterMark || 24; else {
                if (!e.stream) throw new Error("Cannot log to file without filename or stream.");
                n("stream", "filename", "maxsize"), this._stream = e.stream, this._isStreams2 = l(this._stream), this._stream.on("error", (function (e) {
                    t.emit("error", e)
                })), this._stream.setMaxListeners(1 / 0)
            }
            this.json = !1 !== e.json, this.logstash = e.logstash || !1, this.colorize = e.colorize || !1, this.maxsize = e.maxsize || null, this.rotationFormat = e.rotationFormat || !1, this.zippedArchive = e.zippedArchive || !1, this.maxFiles = e.maxFiles || null, this.prettyPrint = e.prettyPrint || !1, this.label = e.label || null, this.timestamp = null == e.timestamp || e.timestamp, this.eol = e.eol || h.EOL, this.tailable = e.tailable || !1, this.depth = e.depth || null, this.showLevel = void 0 === e.showLevel || e.showLevel, this.maxRetries = e.maxRetries || 2, this.json && (this.stringify = e.stringify), this._size = 0, this._created = 0, this._buffer = [], this._draining = !1, this._opening = !1, this._failures = 0, this._archive = null
        };
    o.inherits(p, u), p.prototype.name = "file", p.prototype.log = function (e, t, n, r) {
        if (this.silent) return r(null, !0);
        if (this._failures >= this.maxRetries) return r(new Error("Transport is in a failed state."));
        var i = this;
        "string" != typeof t && (t = "" + t);
        var o = c.log({
            level: e,
            message: t,
            meta: n,
            json: this.json,
            logstash: this.logstash,
            colorize: this.colorize,
            prettyPrint: this.prettyPrint,
            timestamp: this.timestamp,
            showLevel: this.showLevel,
            stringify: this.stringify,
            label: this.label,
            depth: this.depth,
            formatter: this.formatter,
            humanReadableUnhandledException: this.humanReadableUnhandledException
        });
        "string" == typeof o && (o += this.eol), this.filename ? this.open((function (e) {
            if (e) return i._buffer.push([o, r]);
            i._write(o, r), i._size += o.length, i._lazyDrain()
        })) : (this._write(o, r), this._size += o.length, this._lazyDrain())
    }, p.prototype._write = function (e, t) {
        if (this._isStreams2) return this._stream.write(e), t && process.nextTick((function () {
            t(null, !0)
        }));
        var n = this._stream.write(e);
        return t ? !1 === n ? this._stream.once("drain", (function () {
            t(null, !0)
        })) : void process.nextTick((function () {
            t(null, !0)
        })) : void 0
    }, p.prototype.query = function (e, t) {
        "function" == typeof e && (t = e, e = {});
        var n = i.join(this.dirname, this.filename), o = (e = this.normalizeQuery(e), ""), s = [], a = 0,
            c = r.createReadStream(n, {encoding: "utf8"});

        function u(t, n) {
            try {
                var r = JSON.parse(t);
                (function (t) {
                    if (!t) return;
                    if ("object" != typeof t) return;
                    var n = new Date(t.timestamp);
                    if (e.from && n < e.from || e.until && n > e.until) return;
                    return !0
                })(r) && function (t) {
                    if (e.rows && s.length >= e.rows && "desc" != e.order) return void (c.readable && c.destroy());
                    if (e.fields) {
                        var n = {};
                        e.fields.forEach((function (e) {
                            n[e] = t[e]
                        })), t = n
                    }
                    "desc" === e.order && s.length >= e.rows && s.shift();
                    s.push(t)
                }(r)
            } catch (e) {
                n || c.emit("error", e)
            }
        }

        c.on("error", (function (e) {
            if (c.readable && c.destroy(), t) return "ENOENT" !== e.code ? t(e) : t(null, s)
        })), c.on("data", (function (t) {
            for (var n = (t = (o + t).split(/\n+/)).length - 1, r = 0; r < n; r++) (!e.start || a >= e.start) && u(t[r]), a++;
            o = t[n]
        })), c.on("close", (function () {
            o && u(o, !0), "desc" === e.order && (s = s.reverse()), t && t(null, s)
        }))
    }, p.prototype.stream = function (e) {
        var t = i.join(this.dirname, this.filename), n = (e = e || {}, new f), r = {file: t, start: e.start};
        return n.destroy = c.tailFile(r, (function (e, t) {
            if (e) return n.emit("error", e);
            try {
                n.emit("data", t), t = JSON.parse(t), n.emit("log", t)
            } catch (e) {
                n.emit("error", e)
            }
        })), n
    }, p.prototype.open = function (e) {
        return this.opening ? e(!0) : !this._stream || this.maxsize && this._size >= this.maxsize ? (e(!0), this._createStream()) : (this._archive = this.zippedArchive ? this._stream.path : null, void e())
    }, p.prototype.close = function () {
        var e = this;
        this._stream && (this._stream.end(), this._stream.destroySoon(), this._stream.once("finish", (function () {
            e.emit("flush"), e.emit("closed")
        })))
    }, p.prototype.flush = function () {
        var e = this;
        if (!this._buffer.length) return e.emit("flush");
        this._buffer.forEach((function (t) {
            var n = t[0], r = t[1];
            process.nextTick((function () {
                e._write(n, r), e._size += n.length
            }))
        })), e._buffer.length = 0, e._stream.once("drain", (function () {
            e.emit("flush"), e.emit("logged")
        }))
    }, p.prototype._createStream = function () {
        var e = this;
        this.opening = !0, function t(n) {
            var o = i.join(e.dirname, n);

            function s(t) {
                e._stream && (e._stream.end(), e._stream.destroySoon()), e._size = t, e.filename = n, e._stream = r.createWriteStream(o, e.options), e._isStreams2 = l(e._stream), e._stream.on("error", (function (t) {
                    e._failures < e.maxRetries ? (e._createStream(), e._failures++) : e.emit("error", t)
                })), e._stream.setMaxListeners(1 / 0), e.once("flush", (function () {
                    e.flush(), e.opening = !1, e.emit("open", o)
                })), e.flush(), function () {
                    if (e._archive) {
                        var t = a.createGzip(), n = r.createReadStream(String(e._archive)),
                            i = r.createWriteStream(e._archive + ".gz");
                        n.pipe(t).pipe(i), r.unlink(String(e._archive)), e._archive = ""
                    }
                }()
            }

            r.stat(o, (function (n, r) {
                return n ? "ENOENT" !== n.code ? e.emit("error", n) : s(0) : !r || e.maxsize && r.size >= e.maxsize ? e._incFile((function () {
                    t(e._getFile())
                })) : void s(r.size)
            }))
        }(this._getFile())
    }, p.prototype._incFile = function (e) {
        var t = i.extname(this._basename), n = i.basename(this._basename, t);
        this.tailable ? this._checkMaxFilesTailable(t, n, e) : (this._created += 1, this._checkMaxFilesIncrementing(t, n, e))
    }, p.prototype._getFile = function () {
        var e = i.extname(this._basename), t = i.basename(this._basename, e);
        return !this.tailable && this._created ? t + (this.rotationFormat ? this.rotationFormat() : this._created) + e : t + e
    }, p.prototype._checkMaxFilesIncrementing = function (e, t, n) {
        var o, s;
        if (this.zippedArchive && (this._archive = i.join(this.dirname, t + (1 === this._created ? "" : this._created - 1) + e)), !this.maxFiles || this._created < this.maxFiles) return n();
        o = this._created - this.maxFiles, s = i.join(this.dirname, t + (0 !== o ? o : "") + e + (this.zippedArchive ? ".gz" : "")), r.unlink(s, n)
    }, p.prototype._checkMaxFilesTailable = function (e, t, n) {
        var o = [], a = this;
        if (this.maxFiles) {
            for (var c = this.maxFiles - 1; c > 0; c--) o.push(function (n) {
                return function (o) {
                    var s = i.join(a.dirname, t + (n - 1) + e + (a.zippedArchive ? ".gz" : ""));
                    r.exists(s, (function (c) {
                        if (!c) return o(null);
                        r.rename(s, i.join(a.dirname, t + n + e + (a.zippedArchive ? ".gz" : "")), o)
                    }))
                }
            }(c));
            a.zippedArchive && (a._archive = i.join(a.dirname, t + 1 + e)), s.series(o, (function (o) {
                r.rename(i.join(a.dirname, t + e), i.join(a.dirname, t + 1 + e), n)
            }))
        }
    }, p.prototype._lazyDrain = function () {
        var e = this;
        !this._draining && this._stream && (this._draining = !0, this._stream.once("drain", (function () {
            this._draining = !1, e.emit("logged")
        })))
    }
}, function (e, t, n) {
    var r = n(8);

    function i(e) {
        return e instanceof r.Stream
    }

    function o(e) {
        return i(e) && "function" == typeof e._read && "object" == typeof e._readableState
    }

    function s(e) {
        return i(e) && "function" == typeof e._write && "object" == typeof e._writableState
    }

    e.exports = i, e.exports.isReadable = o, e.exports.isWritable = s, e.exports.isDuplex = function (e) {
        return o(e) && s(e)
    }
}, function (e, t, n) {
    var r = n(5), i = n(9), o = n(80), s = n(81), a = n(8).Stream, c = n(16).Transport, u = t.Http = function (e) {
        c.call(this, e), e = e || {}, this.name = "http", this.ssl = !!e.ssl, this.host = e.host || "localhost", this.port = e.port, this.auth = e.auth, this.path = e.path || "", this.agent = e.agent, this.port || (this.port = this.ssl ? 443 : 80)
    };
    r.inherits(u, i.Transport), u.prototype.name = "http", u.prototype._request = function (e, t) {
        var n, r = (e = e || {}).auth || this.auth, i = e.path || this.path || "";
        delete e.auth, delete e.path, (n = (this.ssl ? s : o).request({
            host: this.host,
            port: this.port,
            path: "/" + i.replace(/^\//, ""),
            method: "POST",
            headers: {"Content-Type": "application/json"},
            agent: this.agent,
            auth: r ? r.username + ":" + r.password : ""
        })).on("error", t), n.on("response", (function (e) {
            var n = "";
            e.on("data", (function (e) {
                n += e
            })), e.on("end", (function () {
                t(null, e, n)
            })), e.resume()
        })), n.end(new Buffer(JSON.stringify(e), "utf8"))
    }, u.prototype.log = function (e, t, n, r) {
        var i = this;
        "function" == typeof n && (r = n, n = {});
        var o = {method: "collect", params: {level: e, message: t, meta: n}};
        n && (n.path && (o.path = n.path, delete n.path), n.auth && (o.auth = n.auth, delete n.auth)), this._request(o, (function (e, t) {
            if (t && 200 !== t.statusCode && (e = new Error("HTTP Status Code: " + t.statusCode)), e) return r(e);
            i.emit("logged"), r && r(null, !0)
        }))
    }, u.prototype.query = function (e, t) {
        "function" == typeof e && (t = e, e = {});
        (e = {
            method: "query",
            params: e = this.normalizeQuery(e)
        }).params.path && (e.path = e.params.path, delete e.params.path), e.params.auth && (e.auth = e.params.auth, delete e.params.auth), this._request(e, (function (e, n, r) {
            if (n && 200 !== n.statusCode && (e = new Error("HTTP Status Code: " + n.statusCode)), e) return t(e);
            if ("string" == typeof r) try {
                r = JSON.parse(r)
            } catch (e) {
                return t(e)
            }
            t(null, r)
        }))
    }, u.prototype.stream = function (e) {
        e = e || {};
        var t, n, r = new a;
        return r.destroy = function () {
            t.destroy()
        }, (e = {
            method: "stream",
            params: e
        }).params.path && (e.path = e.params.path, delete e.params.path), e.params.auth && (e.auth = e.params.auth, delete e.params.auth), t = this._request(e), n = "", t.on("data", (function (e) {
            for (var t = (e = (n + e).split(/\n+/)).length - 1, i = 0; i < t; i++) try {
                r.emit("log", JSON.parse(e[i]))
            } catch (e) {
                r.emit("error", e)
            }
            n = e[t]
        })), t.on("error", (function (e) {
            r.emit("error", e)
        })), r
    }
}, function (e, t) {
    e.exports = require("http")
}, function (e, t) {
    e.exports = require("https")
}, function (e, t, n) {
    n(14);
    var r = n(5), i = n(11), o = n(16).Transport, s = t.Memory = function (e) {
        o.call(this, e), e = e || {}, this.errorOutput = [], this.writeOutput = [], this.json = e.json || !1, this.colorize = e.colorize || !1, this.prettyPrint = e.prettyPrint || !1, this.timestamp = void 0 !== e.timestamp && e.timestamp, this.showLevel = void 0 === e.showLevel || e.showLevel, this.label = e.label || null, this.depth = e.depth || null, this.json && (this.stringify = e.stringify || function (e) {
            return JSON.stringify(e, null, 2)
        })
    };
    r.inherits(s, o), s.prototype.name = "memory", s.prototype.log = function (e, t, n, r) {
        if (this.silent) return r(null, !0);
        var o;
        o = i.log({
            colorize: this.colorize,
            json: this.json,
            level: e,
            message: t,
            meta: n,
            stringify: this.stringify,
            timestamp: this.timestamp,
            prettyPrint: this.prettyPrint,
            raw: this.raw,
            label: this.label,
            depth: this.depth,
            formatter: this.formatter,
            humanReadableUnhandledException: this.humanReadableUnhandledException
        }), "error" === e || "debug" === e ? this.errorOutput.push(o) : this.writeOutput.push(o), this.emit("logged"), r(null, !0)
    }, s.prototype.clearLogs = function () {
        this.errorOutput = [], this.writeOutput = []
    }
}, function (e, t) {
    function n(e) {
        for (var t in e) this[t] = e[t]
    }

    t.get = function (e) {
        var n = Error.stackTraceLimit;
        Error.stackTraceLimit = 1 / 0;
        var r = {}, i = Error.prepareStackTrace;
        Error.prepareStackTrace = function (e, t) {
            return t
        }, Error.captureStackTrace(r, e || t.get);
        var o = r.stack;
        return Error.prepareStackTrace = i, Error.stackTraceLimit = n, o
    }, t.parse = function (e) {
        if (!e.stack) return [];
        var t = this;
        return e.stack.split("\n").slice(1).map((function (e) {
            if (e.match(/^\s*[-]{4,}$/)) return t._createParsedCallSite({
                fileName: e,
                lineNumber: null,
                functionName: null,
                typeName: null,
                methodName: null,
                columnNumber: null,
                native: null
            });
            var n = e.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
            if (n) {
                var r = null, i = null, o = null, s = null, a = null, c = "native" === n[5];
                if (n[1]) {
                    var u = (o = n[1]).lastIndexOf(".");
                    if ("." == o[u - 1] && u--, u > 0) {
                        r = o.substr(0, u), i = o.substr(u + 1);
                        var l = r.indexOf(".Module");
                        l > 0 && (o = o.substr(l + 1), r = r.substr(0, l))
                    }
                    s = null
                }
                i && (s = r, a = i), "<anonymous>" === i && (a = null, o = null);
                var f = {
                    fileName: n[2] || null,
                    lineNumber: parseInt(n[3], 10) || null,
                    functionName: o,
                    typeName: s,
                    methodName: a,
                    columnNumber: parseInt(n[4], 10) || null,
                    native: c
                };
                return t._createParsedCallSite(f)
            }
        })).filter((function (e) {
            return !!e
        }))
    };
    ["this", "typeName", "functionName", "methodName", "fileName", "lineNumber", "columnNumber", "function", "evalOrigin"].forEach((function (e) {
        n.prototype[e] = null, n.prototype["get" + e[0].toUpperCase() + e.substr(1)] = function () {
            return this[e]
        }
    })), ["topLevel", "eval", "native", "constructor"].forEach((function (e) {
        n.prototype[e] = !1, n.prototype["is" + e[0].toUpperCase() + e.substr(1)] = function () {
            return this[e]
        }
    })), t._createParsedCallSite = function (e) {
        return new n(e)
    }
}, function (e, t, n) {
    var r = n(11), i = n(9), o = n(5)._extend, s = t.Container = function (e) {
        this.loggers = {}, this.options = e || {}, this.default = {
            transports: [new i.transports.Console({
                level: "silly",
                colorize: !1
            })]
        }
    };
    s.prototype.get = s.prototype.add = function (e, t) {
        var n, s = this;
        return this.loggers[e] || (n = (t = o({}, t || this.options || this.default)).transports || this.options.transports, t.transports = n ? n.slice() : [], 0 !== t.transports.length || t && t.console || t.transports.push(this.default.transports[0]), Object.keys(t).forEach((function (n) {
            if ("transports" !== n) {
                var o = r.capitalize(n);
                if (!i.transports[o]) throw new Error("Cannot add unknown transport: " + o);
                var s = t[n];
                s.id = e, t.transports.push(new i.transports[o](s))
            }
        })), t.id = e, this.loggers[e] = new i.Logger(t), this.loggers[e].on("close", (function () {
            s._delete(e)
        }))), this.loggers[e]
    }, s.prototype.has = function (e) {
        return !!this.loggers[e]
    }, s.prototype.close = function (e) {
        var t = this;

        function n(e) {
            t.loggers[e] && (t.loggers[e].close(), t._delete(e))
        }

        return e ? n(e) : Object.keys(this.loggers).forEach((function (e) {
            n(e)
        }))
    }, s.prototype._delete = function (e) {
        delete this.loggers[e]
    }
}, function (e, t, n) {
    var r = n(14), i = n(5), o = n(34), s = n(29), a = n(11), c = n(36), u = n(8).Stream, l = /%[sdj%]/g,
        f = t.Logger = function (e) {
            r.EventEmitter.call(this), this.configure(e)
        };

    function h(e) {
        this.logger = e, this.start = Date.now()
    }

    i.inherits(f, r.EventEmitter), f.prototype.configure = function (e) {
        var t = this;
        Array.isArray(this._names) && this._names.length && this.clear(), e = e || {}, this.transports = {}, this._names = [], e.transports && e.transports.forEach((function (e) {
            t.add(e, null, !0)
        })), this.padLevels = e.padLevels || !1, this.setLevels(e.levels), e.colors && s.addColors(e.colors), this.id = e.id || null, this.level = e.level || "info", this.emitErrs = e.emitErrs || !1, this.stripColors = e.stripColors || !1, this.exitOnError = void 0 === e.exitOnError || e.exitOnError, this.exceptionHandlers = {}, this.profilers = {}, ["rewriters", "filters"].forEach((function (n) {
            t[n] = Array.isArray(e[n]) ? e[n] : []
        })), e.exceptionHandlers && this.handleExceptions(e.exceptionHandlers)
    }, f.prototype.log = function (e) {
        for (var t = Array.prototype.slice.call(arguments, 1), n = this; null === t[t.length - 1];) t.pop();
        var r = "function" == typeof t[t.length - 1] ? t.pop() : null;

        function s(e) {
            r ? r(e) : n.emitErrs && n.emit("error", e)
        }

        if (0 === this._names.length) return s(new Error("Cannot log with no transports."));
        if (void 0 === n.levels[e]) return s(new Error("Unknown log level: " + e));
        var a = this._names.filter((function (t) {
            var r = n.transports[t];
            return r.level && n.levels[r.level] >= n.levels[e] || !r.level && n.levels[n.level] >= n.levels[e]
        }));
        if (a.length) {
            var c, u = {}, f = t && t[0] && t[0].match && null !== t[0].match(l), h = f ? t[0].match(l) : [],
                p = h.filter((function (e) {
                    return "%%" === e
                }));
            if (t.length - 1 - (h.length - p.length) > 0 || 1 === t.length) {
                u = t[t.length - 1] || t;
                var d = Object.prototype.toString.call(u);
                u = "[object Object]" === d || "[object Error]" === d || "[object Array]" === d ? t.pop() : {}
            }
            if (c = i.format.apply(null, t), this.padLevels && (c = new Array(this.levelLength - e.length + 1).join(" ") + c), this.rewriters.forEach((function (t) {
                u = t(e, c, u, n)
            })), this.filters.forEach((function (t) {
                var r = t(e, c, u, n);
                "string" == typeof r ? c = r : (c = r.msg, u = r.meta)
            })), this.stripColors) {
                var m = /\u001b\[(\d+(;\d+)*)?m/g;
                c = ("" + c).replace(m, "")
            }
            return o.forEach(a, g, y), this
        }

        function y(t) {
            if (r) {
                if (t) return r(t);
                r(null, e, c, u)
            }
            r = null, t || n.emit("logged", e, c, u)
        }

        function g(t, r) {
            var i = n.transports[t];
            i.log(e, c, u, (function (t) {
                if (t) return t.transport = i, y(t), r();
                n.emit("logging", i, e, c, u), r()
            }))
        }

        r && r()
    }, f.prototype.query = function (e, t) {
        "function" == typeof e && (t = e, e = {});
        var n, r = this, i = (e = e || {}, {}), s = a.clone(e.query) || {};

        function c(t, n) {
            e.query && (e.query = t.formatQuery(s)), t.query(e, (function (r, i) {
                if (r) return n(r);
                n(null, t.formatResults(i, e.format))
            }))
        }

        if (e.transport) return e.transport = e.transport.toLowerCase(), c(this.transports[e.transport], t);
        n = this._names.map((function (e) {
            return r.transports[e]
        })).filter((function (e) {
            return !!e.query
        })), o.forEach(n, (function (e, t) {
            c(e, (function (n, r) {
                t && ((r = n || r) && (i[e.name] = r), t()), t = null
            }))
        }), (function () {
            t(null, i)
        }))
    }, f.prototype.stream = function (e) {
        var t = this, n = (e = e || {}, new u), r = [];
        if (e.transport) {
            var i = this.transports[e.transport];
            if (delete e.transport, i && i.stream) return i.stream(e)
        }
        return n._streams = r, n.destroy = function () {
            for (var e = r.length; e--;) r[e].destroy()
        }, this._names.map((function (e) {
            return t.transports[e]
        })).filter((function (e) {
            return !!e.stream
        })).forEach((function (t) {
            var i = t.stream(e);
            i && (r.push(i), i.on("log", (function (e) {
                e.transport = e.transport || [], e.transport.push(t.name), n.emit("log", e)
            })), i.on("error", (function (e) {
                e.transport = e.transport || [], e.transport.push(t.name), n.emit("error", e)
            })))
        })), n
    }, f.prototype.close = function () {
        var e = this;
        this._names.forEach((function (t) {
            var n = e.transports[t];
            n && n.close && n.close()
        })), this.emit("close")
    }, f.prototype.handleExceptions = function () {
        var e = Array.prototype.slice.call(arguments), t = [], n = this;
        e.forEach((function (e) {
            Array.isArray(e) ? t = t.concat(e) : t.push(e)
        })), this.exceptionHandlers = this.exceptionHandlers || {}, t.forEach((function (e) {
            n.exceptionHandlers[e.name] = e
        })), this._hnames = Object.keys(n.exceptionHandlers), this.catchExceptions || (this.catchExceptions = this._uncaughtException.bind(this), process.on("uncaughtException", this.catchExceptions))
    }, f.prototype.unhandleExceptions = function () {
        var e = this;
        this.catchExceptions && (Object.keys(this.exceptionHandlers).forEach((function (t) {
            var n = e.exceptionHandlers[t];
            n.close && n.close()
        })), this.exceptionHandlers = {}, Object.keys(this.transports).forEach((function (t) {
            var n = e.transports[t];
            n.handleExceptions && (n.handleExceptions = !1)
        })), process.removeListener("uncaughtException", this.catchExceptions), this.catchExceptions = !1)
    }, f.prototype.add = function (e, t, n) {
        var r = n ? e : new e(t);
        if (!r.name && !r.log) throw new Error("Unknown transport with no log() method");
        if (this.transports[r.name]) throw new Error("Transport already attached: " + r.name + ", assign a different name");
        return this.transports[r.name] = r, this._names = Object.keys(this.transports), r._onError = this._onError.bind(this, r), n || r.on("error", r._onError), r.handleExceptions && !this.catchExceptions && this.handleExceptions(), this
    }, f.prototype.clear = function () {
        Object.keys(this.transports).forEach((function (e) {
            this.remove({name: e})
        }), this)
    }, f.prototype.remove = function (e) {
        var t = "string" != typeof e ? e.name || e.prototype.name : e;
        if (!this.transports[t]) throw new Error("Transport " + t + " not attached to this instance");
        var n = this.transports[t];
        return delete this.transports[t], this._names = Object.keys(this.transports), n.close && n.close(), n._onError && n.removeListener("error", n._onError), this
    }, f.prototype.startTimer = function () {
        return new h(this)
    }, f.prototype.profile = function (e) {
        var t, n, r, i, o, s = Date.now();
        return this.profilers[e] ? (t = this.profilers[e], delete this.profilers[e], o = "function" == typeof (n = Array.prototype.slice.call(arguments))[n.length - 1] ? n.pop() : null, i = "object" == typeof n[n.length - 1] ? n.pop() : {}, r = 2 === n.length ? n[1] : e, i.durationMs = s - t, this.info(r, i, o)) : (this.profilers[e] = s, this)
    }, f.prototype.setLevels = function (e) {
        return a.setLevels(this, this.levels, e)
    }, f.prototype.cli = function () {
        return this.padLevels = !0, this.setLevels(s.cli.levels), s.addColors(s.cli.colors), this.transports.console && (this.transports.console.colorize = this.transports.console.colorize || !0, this.transports.console.timestamp = this.transports.console.timestamp || !1), this
    }, f.prototype._uncaughtException = function (e) {
        var t, n, r = !1, i = c.getAllInfo(e), s = this._getExceptionHandlers();

        function a() {
            n && !r && (clearTimeout(t), r = !0, process.exit(1))
        }

        if (n = "function" == typeof this.exitOnError ? this.exitOnError(e) : this.exitOnError, !s || 0 === s.length) return a();
        o.forEach(s, (function (t, n) {
            t.logException("uncaughtException: " + (e.message || e), i, n, e)
        }), a), n && (t = setTimeout(a, 3e3))
    }, f.prototype._getExceptionHandlers = function () {
        var e = this;
        return this._hnames.map((function (t) {
            return e.exceptionHandlers[t]
        })).concat(this._names.map((function (t) {
            return e.transports[t].handleExceptions && e.transports[t]
        }))).filter(Boolean)
    }, f.prototype._onError = function (e, t) {
        this.emitErrs && this.emit("error", t, e)
    }, h.prototype.done = function (e) {
        var t = Array.prototype.slice.call(arguments), n = "function" == typeof t[t.length - 1] ? t.pop() : null,
            r = "object" == typeof t[t.length - 1] ? t.pop() : {};
        return r.duration = Date.now() - this.start + "ms", this.logger.info(e, r, n)
    }
}, function (e, t, n) {
    var r = n(30), i = process.cwd, o = null, s = process.env.GRACEFUL_FS_PLATFORM || "win32";
    process.cwd = function () {
        return o || (o = i.call(process)), o
    };
    try {
        process.cwd()
    } catch (e) {
    }
    var a = process.chdir;
    process.chdir = function (e) {
        o = null, a.call(process, e)
    }, e.exports = function (e) {
        r.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function (e) {
            e.lchmod = function (t, n, i) {
                e.open(t, r.O_WRONLY | r.O_SYMLINK, n, (function (t, r) {
                    t ? i && i(t) : e.fchmod(r, n, (function (t) {
                        e.close(r, (function (e) {
                            i && i(t || e)
                        }))
                    }))
                }))
            }, e.lchmodSync = function (t, n) {
                var i, o = e.openSync(t, r.O_WRONLY | r.O_SYMLINK, n), s = !0;
                try {
                    i = e.fchmodSync(o, n), s = !1
                } finally {
                    if (s) try {
                        e.closeSync(o)
                    } catch (e) {
                    } else e.closeSync(o)
                }
                return i
            }
        }(e);
        e.lutimes || function (e) {
            r.hasOwnProperty("O_SYMLINK") ? (e.lutimes = function (t, n, i, o) {
                e.open(t, r.O_SYMLINK, (function (t, r) {
                    t ? o && o(t) : e.futimes(r, n, i, (function (t) {
                        e.close(r, (function (e) {
                            o && o(t || e)
                        }))
                    }))
                }))
            }, e.lutimesSync = function (t, n, i) {
                var o, s = e.openSync(t, r.O_SYMLINK), a = !0;
                try {
                    o = e.futimesSync(s, n, i), a = !1
                } finally {
                    if (a) try {
                        e.closeSync(s)
                    } catch (e) {
                    } else e.closeSync(s)
                }
                return o
            }) : (e.lutimes = function (e, t, n, r) {
                r && process.nextTick(r)
            }, e.lutimesSync = function () {
            })
        }(e);
        e.chown = o(e.chown), e.fchown = o(e.fchown), e.lchown = o(e.lchown), e.chmod = n(e.chmod), e.fchmod = n(e.fchmod), e.lchmod = n(e.lchmod), e.chownSync = a(e.chownSync), e.fchownSync = a(e.fchownSync), e.lchownSync = a(e.lchownSync), e.chmodSync = i(e.chmodSync), e.fchmodSync = i(e.fchmodSync), e.lchmodSync = i(e.lchmodSync), e.stat = c(e.stat), e.fstat = c(e.fstat), e.lstat = c(e.lstat), e.statSync = u(e.statSync), e.fstatSync = u(e.fstatSync), e.lstatSync = u(e.lstatSync), e.lchmod || (e.lchmod = function (e, t, n) {
            n && process.nextTick(n)
        }, e.lchmodSync = function () {
        });
        e.lchown || (e.lchown = function (e, t, n, r) {
            r && process.nextTick(r)
        }, e.lchownSync = function () {
        });
        "win32" === s && (e.rename = (t = e.rename, function (n, r, i) {
            var o = Date.now(), s = 0;
            t(n, r, (function a(c) {
                if (c && ("EACCES" === c.code || "EPERM" === c.code) && Date.now() - o < 6e4) return setTimeout((function () {
                    e.stat(r, (function (e, o) {
                        e && "ENOENT" === e.code ? t(n, r, a) : i(c)
                    }))
                }), s), void (s < 100 && (s += 10));
                i && i(c)
            }))
        }));
        var t;

        function n(t) {
            return t ? function (n, r, i) {
                return t.call(e, n, r, (function (e) {
                    l(e) && (e = null), i && i.apply(this, arguments)
                }))
            } : t
        }

        function i(t) {
            return t ? function (n, r) {
                try {
                    return t.call(e, n, r)
                } catch (e) {
                    if (!l(e)) throw e
                }
            } : t
        }

        function o(t) {
            return t ? function (n, r, i, o) {
                return t.call(e, n, r, i, (function (e) {
                    l(e) && (e = null), o && o.apply(this, arguments)
                }))
            } : t
        }

        function a(t) {
            return t ? function (n, r, i) {
                try {
                    return t.call(e, n, r, i)
                } catch (e) {
                    if (!l(e)) throw e
                }
            } : t
        }

        function c(t) {
            return t ? function (n, r, i) {
                function o(e, t) {
                    t && (t.uid < 0 && (t.uid += 4294967296), t.gid < 0 && (t.gid += 4294967296)), i && i.apply(this, arguments)
                }

                return "function" == typeof r && (i = r, r = null), r ? t.call(e, n, r, o) : t.call(e, n, o)
            } : t
        }

        function u(t) {
            return t ? function (n, r) {
                var i = r ? t.call(e, n, r) : t.call(e, n);
                return i.uid < 0 && (i.uid += 4294967296), i.gid < 0 && (i.gid += 4294967296), i
            } : t
        }

        function l(e) {
            return !e || ("ENOSYS" === e.code || !(process.getuid && 0 === process.getuid() || "EINVAL" !== e.code && "EPERM" !== e.code))
        }

        e.read = function (t) {
            function n(n, r, i, o, s, a) {
                var c;
                if (a && "function" == typeof a) {
                    var u = 0;
                    c = function (l, f, h) {
                        if (l && "EAGAIN" === l.code && u < 10) return u++, t.call(e, n, r, i, o, s, c);
                        a.apply(this, arguments)
                    }
                }
                return t.call(e, n, r, i, o, s, c)
            }

            return n.__proto__ = t, n
        }(e.read), e.readSync = (f = e.readSync, function (t, n, r, i, o) {
            for (var s = 0; ;) try {
                return f.call(e, t, n, r, i, o)
            } catch (e) {
                if ("EAGAIN" === e.code && s < 10) {
                    s++;
                    continue
                }
                throw e
            }
        });
        var f
    }
}, function (e, t, n) {
    var r = n(8).Stream;
    e.exports = function (e) {
        return {
            ReadStream: function t(n, i) {
                if (!(this instanceof t)) return new t(n, i);
                r.call(this);
                var o = this;
                this.path = n, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, i = i || {};
                for (var s = Object.keys(i), a = 0, c = s.length; a < c; a++) {
                    var u = s[a];
                    this[u] = i[u]
                }
                this.encoding && this.setEncoding(this.encoding);
                if (void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");
                    if (void 0 === this.end) this.end = 1 / 0; else if ("number" != typeof this.end) throw TypeError("end must be a Number");
                    if (this.start > this.end) throw new Error("start must be <= end");
                    this.pos = this.start
                }
                if (null !== this.fd) return void process.nextTick((function () {
                    o._read()
                }));
                e.open(this.path, this.flags, this.mode, (function (e, t) {
                    if (e) return o.emit("error", e), void (o.readable = !1);
                    o.fd = t, o.emit("open", t), o._read()
                }))
            }, WriteStream: function t(n, i) {
                if (!(this instanceof t)) return new t(n, i);
                r.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, i = i || {};
                for (var o = Object.keys(i), s = 0, a = o.length; s < a; s++) {
                    var c = o[s];
                    this[c] = i[c]
                }
                if (void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");
                    if (this.start < 0) throw new Error("start must be >= zero");
                    this.pos = this.start
                }
                this.busy = !1, this._queue = [], null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        if (null === e || "object" != typeof e) return e;
        if (e instanceof Object) var t = {__proto__: e.__proto__}; else t = Object.create(null);
        return Object.getOwnPropertyNames(e).forEach((function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
        })), t
    }
}, function (e, t, n) {
    "use strict";
    const r = n(3), i = n(1), o = n(7).mkdirsSync, s = n(39).utimesMillisSync, a = n(22);

    function c(e, t, n, o) {
        if (!o.filter || o.filter(t, n)) return function (e, t, n, o) {
            const s = (o.dereference ? r.statSync : r.lstatSync)(t);
            if (s.isDirectory()) return function (e, t, n, i, o) {
                if (!t) return function (e, t, n, i) {
                    return r.mkdirSync(n), f(t, n, i), l(n, e)
                }(e.mode, n, i, o);
                if (t && !t.isDirectory()) throw new Error(`Cannot overwrite non-directory '${i}' with directory '${n}'.`);
                return f(n, i, o)
            }(s, e, t, n, o);
            if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return function (e, t, n, i, o) {
                return t ? function (e, t, n, i) {
                    if (i.overwrite) return r.unlinkSync(n), u(e, t, n, i);
                    if (i.errorOnExist) throw new Error(`'${n}' already exists`)
                }(e, n, i, o) : u(e, n, i, o)
            }(s, e, t, n, o);
            if (s.isSymbolicLink()) return function (e, t, n, o) {
                let s = r.readlinkSync(t);
                o.dereference && (s = i.resolve(process.cwd(), s));
                if (e) {
                    let e;
                    try {
                        e = r.readlinkSync(n)
                    } catch (e) {
                        if ("EINVAL" === e.code || "UNKNOWN" === e.code) return r.symlinkSync(s, n);
                        throw e
                    }
                    if (o.dereference && (e = i.resolve(process.cwd(), e)), a.isSrcSubdir(s, e)) throw new Error(`Cannot copy '${s}' to a subdirectory of itself, '${e}'.`);
                    if (r.statSync(n).isDirectory() && a.isSrcSubdir(e, s)) throw new Error(`Cannot overwrite '${e}' with '${s}'.`);
                    return function (e, t) {
                        return r.unlinkSync(t), r.symlinkSync(e, t)
                    }(s, n)
                }
                return r.symlinkSync(s, n)
            }(e, t, n, o)
        }(e, t, n, o)
    }

    function u(e, t, n, i) {
        return r.copyFileSync(t, n), i.preserveTimestamps && function (e, t, n) {
            (function (e) {
                return 0 == (128 & e)
            })(e) && function (e, t) {
                l(e, 128 | t)
            }(n, e);
            (function (e, t) {
                const n = r.statSync(e);
                s(t, n.atime, n.mtime)
            })(t, n)
        }(e.mode, t, n), l(n, e.mode)
    }

    function l(e, t) {
        return r.chmodSync(e, t)
    }

    function f(e, t, n) {
        r.readdirSync(e).forEach(r => function (e, t, n, r) {
            const o = i.join(t, e), s = i.join(n, e), {destStat: u} = a.checkPathsSync(o, s, "copy");
            return c(u, o, s, r)
        }(r, e, t, n))
    }

    e.exports = function (e, t, n) {
        "function" == typeof n && (n = {filter: n}), (n = n || {}).clobber = !("clobber" in n) || !!n.clobber, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269");
        const {srcStat: s, destStat: u} = a.checkPathsSync(e, t, "copy");
        return a.checkParentPathsSync(e, s, t, "copy"), function (e, t, n, s) {
            if (s.filter && !s.filter(t, n)) return;
            const a = i.dirname(n);
            r.existsSync(a) || o(a);
            return c(e, t, n, s)
        }(u, e, t, n)
    }
}, function (e, t, n) {
    "use strict";
    const r = n(20), i = n(1), o = n(38)("10.12.0"), s = e => {
        if (/[<>:"|?*]/.test(e.replace(i.parse(e).root, ""))) {
            const t = new Error("Path contains invalid characters: " + e);
            throw t.code = "EINVAL", t
        }
    }, a = e => ("number" == typeof e && (e = {mode: e}), {mode: 511, ...e}), c = e => {
        const t = new Error(`operation not permitted, mkdir '${e}'`);
        return t.code = "EPERM", t.errno = -4048, t.path = e, t.syscall = "mkdir", t
    };
    e.exports.makeDir = async (e, t) => {
        if (s(e), t = a(t), o) {
            const n = i.resolve(e);
            return r.mkdir(n, {mode: t.mode, recursive: !0})
        }
        const n = async e => {
            try {
                await r.mkdir(e, t.mode)
            } catch (t) {
                if ("EPERM" === t.code) throw t;
                if ("ENOENT" === t.code) {
                    if (i.dirname(e) === e) throw c(e);
                    if (t.message.includes("null bytes")) throw t;
                    return await n(i.dirname(e)), n(e)
                }
                try {
                    if (!(await r.stat(e)).isDirectory()) throw new Error("The path is not a directory")
                } catch {
                    throw t
                }
            }
        };
        return n(i.resolve(e))
    }, e.exports.makeDirSync = (e, t) => {
        if (s(e), t = a(t), o) {
            const n = i.resolve(e);
            return r.mkdirSync(n, {mode: t.mode, recursive: !0})
        }
        const n = e => {
            try {
                r.mkdirSync(e, t.mode)
            } catch (t) {
                if ("EPERM" === t.code) throw t;
                if ("ENOENT" === t.code) {
                    if (i.dirname(e) === e) throw c(e);
                    if (t.message.includes("null bytes")) throw t;
                    return n(i.dirname(e)), n(e)
                }
                try {
                    if (!r.statSync(e).isDirectory()) throw new Error("The path is not a directory")
                } catch {
                    throw t
                }
            }
        };
        return n(i.resolve(e))
    }
}, function (e, t, n) {
    "use strict";
    const r = n(3), i = n(1), o = n(7).mkdirs, s = n(12).pathExists, a = n(39).utimesMillis, c = n(22);

    function u(e, t, n, r, a) {
        const c = i.dirname(n);
        s(c, (i, s) => i ? a(i) : s ? f(e, t, n, r, a) : void o(c, i => i ? a(i) : f(e, t, n, r, a)))
    }

    function l(e, t, n, r, i, o) {
        Promise.resolve(i.filter(n, r)).then(s => s ? e(t, n, r, i, o) : o(), e => o(e))
    }

    function f(e, t, n, r, i) {
        return r.filter ? l(h, e, t, n, r, i) : h(e, t, n, r, i)
    }

    function h(e, t, n, i, o) {
        (i.dereference ? r.stat : r.lstat)(t, (s, a) => s ? o(s) : a.isDirectory() ? function (e, t, n, i, o, s) {
            if (!t) return function (e, t, n, i, o) {
                r.mkdir(n, r => {
                    if (r) return o(r);
                    y(t, n, i, t => t ? o(t) : m(n, e, o))
                })
            }(e.mode, n, i, o, s);
            if (t && !t.isDirectory()) return s(new Error(`Cannot overwrite non-directory '${i}' with directory '${n}'.`));
            return y(n, i, o, s)
        }(a, e, t, n, i, o) : a.isFile() || a.isCharacterDevice() || a.isBlockDevice() ? function (e, t, n, i, o, s) {
            return t ? function (e, t, n, i, o) {
                if (!i.overwrite) return i.errorOnExist ? o(new Error(`'${n}' already exists`)) : o();
                r.unlink(n, r => r ? o(r) : p(e, t, n, i, o))
            }(e, n, i, o, s) : p(e, n, i, o, s)
        }(a, e, t, n, i, o) : a.isSymbolicLink() ? v(e, t, n, i, o) : void 0)
    }

    function p(e, t, n, i, o) {
        r.copyFile(t, n, r => r ? o(r) : i.preserveTimestamps ? function (e, t, n, r) {
            if (function (e) {
                return 0 == (128 & e)
            }(e)) return function (e, t, n) {
                return m(e, 128 | t, n)
            }(n, e, i => i ? r(i) : d(e, t, n, r));
            return d(e, t, n, r)
        }(e.mode, t, n, o) : m(n, e.mode, o))
    }

    function d(e, t, n, i) {
        !function (e, t, n) {
            r.stat(e, (e, r) => e ? n(e) : a(t, r.atime, r.mtime, n))
        }(t, n, t => t ? i(t) : m(n, e, i))
    }

    function m(e, t, n) {
        return r.chmod(e, t, n)
    }

    function y(e, t, n, i) {
        r.readdir(e, (r, o) => r ? i(r) : g(o, e, t, n, i))
    }

    function g(e, t, n, r, o) {
        const s = e.pop();
        return s ? function (e, t, n, r, o, s) {
            const a = i.join(n, t), u = i.join(r, t);
            c.checkPaths(a, u, "copy", (t, i) => {
                if (t) return s(t);
                const {destStat: c} = i;
                f(c, a, u, o, t => t ? s(t) : g(e, n, r, o, s))
            })
        }(e, s, t, n, r, o) : o()
    }

    function v(e, t, n, o, s) {
        r.readlink(t, (t, a) => t ? s(t) : (o.dereference && (a = i.resolve(process.cwd(), a)), e ? void r.readlink(n, (t, u) => t ? "EINVAL" === t.code || "UNKNOWN" === t.code ? r.symlink(a, n, s) : s(t) : (o.dereference && (u = i.resolve(process.cwd(), u)), c.isSrcSubdir(a, u) ? s(new Error(`Cannot copy '${a}' to a subdirectory of itself, '${u}'.`)) : e.isDirectory() && c.isSrcSubdir(u, a) ? s(new Error(`Cannot overwrite '${u}' with '${a}'.`)) : function (e, t, n) {
            r.unlink(t, i => i ? n(i) : r.symlink(e, t, n))
        }(a, n, s))) : r.symlink(a, n, s)))
    }

    e.exports = function (e, t, n, r) {
        "function" != typeof n || r ? "function" == typeof n && (n = {filter: n}) : (r = n, n = {}), r = r || function () {
        }, (n = n || {}).clobber = !("clobber" in n) || !!n.clobber, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"), c.checkPaths(e, t, "copy", (i, o) => {
            if (i) return r(i);
            const {srcStat: s, destStat: a} = o;
            c.checkParentPaths(e, s, t, "copy", i => i ? r(i) : n.filter ? l(u, a, e, t, n, r) : u(a, e, t, n, r))
        })
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromCallback, i = n(3), o = n(1), s = n(7), a = n(23), c = r((function (e, t) {
        t = t || function () {
        }, i.readdir(e, (n, r) => {
            if (n) return s.mkdirs(e, t);
            r = r.map(t => o.join(e, t)), function e() {
                const n = r.pop();
                if (!n) return t();
                a.remove(n, n => {
                    if (n) return t(n);
                    e()
                })
            }()
        })
    }));

    function u(e) {
        let t;
        try {
            t = i.readdirSync(e)
        } catch {
            return s.mkdirsSync(e)
        }
        t.forEach(t => {
            t = o.join(e, t), a.removeSync(t)
        })
    }

    e.exports = {emptyDirSync: u, emptydirSync: u, emptyDir: c, emptydir: c}
}, function (e, t, n) {
    "use strict";
    const r = n(3), i = n(1), o = n(21);

    function s(e) {
        ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(t => {
            e[t] = e[t] || r[t], e[t += "Sync"] = e[t] || r[t]
        }), e.maxBusyTries = e.maxBusyTries || 3
    }

    function a(e, t, n) {
        let r = 0;
        "function" == typeof t && (n = t, t = {}), o(e, "rimraf: missing path"), o.strictEqual(typeof e, "string", "rimraf: path should be a string"), o.strictEqual(typeof n, "function", "rimraf: callback function required"), o(t, "rimraf: invalid options argument provided"), o.strictEqual(typeof t, "object", "rimraf: options should be object"), s(t), c(e, t, (function i(o) {
            if (o) {
                if (("EBUSY" === o.code || "ENOTEMPTY" === o.code || "EPERM" === o.code) && r < t.maxBusyTries) {
                    r++;
                    return setTimeout(() => c(e, t, i), 100 * r)
                }
                "ENOENT" === o.code && (o = null)
            }
            n(o)
        }))
    }

    function c(e, t, n) {
        o(e), o(t), o("function" == typeof n), t.lstat(e, (r, i) => r && "ENOENT" === r.code ? n(null) : r && "EPERM" === r.code ? u(e, t, r, n) : i && i.isDirectory() ? f(e, t, r, n) : void t.unlink(e, r => {
            if (r) {
                if ("ENOENT" === r.code) return n(null);
                if ("EPERM" === r.code) return u(e, t, r, n);
                if ("EISDIR" === r.code) return f(e, t, r, n)
            }
            return n(r)
        }))
    }

    function u(e, t, n, r) {
        o(e), o(t), o("function" == typeof r), t.chmod(e, 438, i => {
            i ? r("ENOENT" === i.code ? null : n) : t.stat(e, (i, o) => {
                i ? r("ENOENT" === i.code ? null : n) : o.isDirectory() ? f(e, t, n, r) : t.unlink(e, r)
            })
        })
    }

    function l(e, t, n) {
        let r;
        o(e), o(t);
        try {
            t.chmodSync(e, 438)
        } catch (e) {
            if ("ENOENT" === e.code) return;
            throw n
        }
        try {
            r = t.statSync(e)
        } catch (e) {
            if ("ENOENT" === e.code) return;
            throw n
        }
        r.isDirectory() ? p(e, t, n) : t.unlinkSync(e)
    }

    function f(e, t, n, r) {
        o(e), o(t), o("function" == typeof r), t.rmdir(e, s => {
            !s || "ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code ? s && "ENOTDIR" === s.code ? r(n) : r(s) : function (e, t, n) {
                o(e), o(t), o("function" == typeof n), t.readdir(e, (r, o) => {
                    if (r) return n(r);
                    let s, c = o.length;
                    if (0 === c) return t.rmdir(e, n);
                    o.forEach(r => {
                        a(i.join(e, r), t, r => {
                            if (!s) return r ? n(s = r) : void (0 == --c && t.rmdir(e, n))
                        })
                    })
                })
            }(e, t, r)
        })
    }

    function h(e, t) {
        let n;
        s(t = t || {}), o(e, "rimraf: missing path"), o.strictEqual(typeof e, "string", "rimraf: path should be a string"), o(t, "rimraf: missing options"), o.strictEqual(typeof t, "object", "rimraf: options should be object");
        try {
            n = t.lstatSync(e)
        } catch (n) {
            if ("ENOENT" === n.code) return;
            "EPERM" === n.code && l(e, t, n)
        }
        try {
            n && n.isDirectory() ? p(e, t, null) : t.unlinkSync(e)
        } catch (n) {
            if ("ENOENT" === n.code) return;
            if ("EPERM" === n.code) return l(e, t, n);
            if ("EISDIR" !== n.code) throw n;
            p(e, t, n)
        }
    }

    function p(e, t, n) {
        o(e), o(t);
        try {
            t.rmdirSync(e)
        } catch (r) {
            if ("ENOTDIR" === r.code) throw n;
            if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code) !function (e, t) {
                o(e), o(t), t.readdirSync(e).forEach(n => h(i.join(e, n), t));
                {
                    const n = Date.now();
                    do {
                        try {
                            return t.rmdirSync(e, t)
                        } catch {
                        }
                    } while (Date.now() - n < 500)
                }
            }(e, t); else if ("ENOENT" !== r.code) throw r
        }
    }

    e.exports = a, a.sync = h
}, function (e, t, n) {
    "use strict";
    const r = n(95), i = n(96), o = n(97);
    e.exports = {
        createFile: r.createFile,
        createFileSync: r.createFileSync,
        ensureFile: r.createFile,
        ensureFileSync: r.createFileSync,
        createLink: i.createLink,
        createLinkSync: i.createLinkSync,
        ensureLink: i.createLink,
        ensureLinkSync: i.createLinkSync,
        createSymlink: o.createSymlink,
        createSymlinkSync: o.createSymlinkSync,
        ensureSymlink: o.createSymlink,
        ensureSymlinkSync: o.createSymlinkSync
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromCallback, i = n(1), o = n(3), s = n(7);
    e.exports = {
        createFile: r((function (e, t) {
            function n() {
                o.writeFile(e, "", e => {
                    if (e) return t(e);
                    t()
                })
            }

            o.stat(e, (r, a) => {
                if (!r && a.isFile()) return t();
                const c = i.dirname(e);
                o.stat(c, (e, r) => {
                    if (e) return "ENOENT" === e.code ? s.mkdirs(c, e => {
                        if (e) return t(e);
                        n()
                    }) : t(e);
                    r.isDirectory() ? n() : o.readdir(c, e => {
                        if (e) return t(e)
                    })
                })
            })
        })), createFileSync: function (e) {
            let t;
            try {
                t = o.statSync(e)
            } catch {
            }
            if (t && t.isFile()) return;
            const n = i.dirname(e);
            try {
                o.statSync(n).isDirectory() || o.readdirSync(n)
            } catch (e) {
                if (!e || "ENOENT" !== e.code) throw e;
                s.mkdirsSync(n)
            }
            o.writeFileSync(e, "")
        }
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromCallback, i = n(1), o = n(3), s = n(7), a = n(12).pathExists;
    e.exports = {
        createLink: r((function (e, t, n) {
            function r(e, t) {
                o.link(e, t, e => {
                    if (e) return n(e);
                    n(null)
                })
            }

            a(t, (c, u) => c ? n(c) : u ? n(null) : void o.lstat(e, o => {
                if (o) return o.message = o.message.replace("lstat", "ensureLink"), n(o);
                const c = i.dirname(t);
                a(c, (i, o) => i ? n(i) : o ? r(e, t) : void s.mkdirs(c, i => {
                    if (i) return n(i);
                    r(e, t)
                }))
            }))
        })), createLinkSync: function (e, t) {
            if (o.existsSync(t)) return;
            try {
                o.lstatSync(e)
            } catch (e) {
                throw e.message = e.message.replace("lstat", "ensureLink"), e
            }
            const n = i.dirname(t);
            return o.existsSync(n) || s.mkdirsSync(n), o.linkSync(e, t)
        }
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromCallback, i = n(1), o = n(3), s = n(7), a = s.mkdirs, c = s.mkdirsSync, u = n(98),
        l = u.symlinkPaths, f = u.symlinkPathsSync, h = n(99), p = h.symlinkType, d = h.symlinkTypeSync,
        m = n(12).pathExists;
    e.exports = {
        createSymlink: r((function (e, t, n, r) {
            r = "function" == typeof n ? n : r, n = "function" != typeof n && n, m(t, (s, c) => s ? r(s) : c ? r(null) : void l(e, t, (s, c) => {
                if (s) return r(s);
                e = c.toDst, p(c.toCwd, n, (n, s) => {
                    if (n) return r(n);
                    const c = i.dirname(t);
                    m(c, (n, i) => n ? r(n) : i ? o.symlink(e, t, s, r) : void a(c, n => {
                        if (n) return r(n);
                        o.symlink(e, t, s, r)
                    }))
                })
            }))
        })), createSymlinkSync: function (e, t, n) {
            if (o.existsSync(t)) return;
            const r = f(e, t);
            e = r.toDst, n = d(r.toCwd, n);
            const s = i.dirname(t);
            return o.existsSync(s) || c(s), o.symlinkSync(e, t, n)
        }
    }
}, function (e, t, n) {
    "use strict";
    const r = n(1), i = n(3), o = n(12).pathExists;
    e.exports = {
        symlinkPaths: function (e, t, n) {
            if (r.isAbsolute(e)) return i.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
                toCwd: e,
                toDst: e
            }));
            {
                const s = r.dirname(t), a = r.join(s, e);
                return o(a, (t, o) => t ? n(t) : o ? n(null, {
                    toCwd: a,
                    toDst: e
                }) : i.lstat(e, t => t ? (t.message = t.message.replace("lstat", "ensureSymlink"), n(t)) : n(null, {
                    toCwd: e,
                    toDst: r.relative(s, e)
                })))
            }
        }, symlinkPathsSync: function (e, t) {
            let n;
            if (r.isAbsolute(e)) {
                if (n = i.existsSync(e), !n) throw new Error("absolute srcpath does not exist");
                return {toCwd: e, toDst: e}
            }
            {
                const o = r.dirname(t), s = r.join(o, e);
                if (n = i.existsSync(s), n) return {toCwd: s, toDst: e};
                if (n = i.existsSync(e), !n) throw new Error("relative srcpath does not exist");
                return {toCwd: e, toDst: r.relative(o, e)}
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    const r = n(3);
    e.exports = {
        symlinkType: function (e, t, n) {
            if (n = "function" == typeof t ? t : n, t = "function" != typeof t && t) return n(null, t);
            r.lstat(e, (e, r) => {
                if (e) return n(null, "file");
                t = r && r.isDirectory() ? "dir" : "file", n(null, t)
            })
        }, symlinkTypeSync: function (e, t) {
            let n;
            if (t) return t;
            try {
                n = r.lstatSync(e)
            } catch {
                return "file"
            }
            return n && n.isDirectory() ? "dir" : "file"
        }
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromPromise, i = n(101);
    i.outputJson = r(n(107)), i.outputJsonSync = n(108), i.outputJSON = i.outputJson, i.outputJSONSync = i.outputJsonSync, i.writeJSON = i.writeJson, i.writeJSONSync = i.writeJsonSync, i.readJSON = i.readJson, i.readJSONSync = i.readJsonSync, e.exports = i
}, function (e, t, n) {
    "use strict";
    const r = n(102);
    e.exports = {
        readJson: r.readFile,
        readJsonSync: r.readFileSync,
        writeJson: r.writeFile,
        writeJsonSync: r.writeFileSync
    }
}, function (e, t, n) {
    let r;
    try {
        r = n(103)
    } catch (e) {
        r = n(2)
    }
    const i = n(106), {stringify: o, stripBom: s} = n(31);
    const a = {
        readFile: i.fromPromise((async function (e, t = {}) {
            "string" == typeof t && (t = {encoding: t});
            const n = t.fs || r, o = !("throws" in t) || t.throws;
            let a, c = await i.fromCallback(n.readFile)(e, t);
            c = s(c);
            try {
                a = JSON.parse(c, t ? t.reviver : null)
            } catch (t) {
                if (o) throw t.message = `${e}: ${t.message}`, t;
                return null
            }
            return a
        })), readFileSync: function (e, t = {}) {
            "string" == typeof t && (t = {encoding: t});
            const n = t.fs || r, i = !("throws" in t) || t.throws;
            try {
                let r = n.readFileSync(e, t);
                return r = s(r), JSON.parse(r, t.reviver)
            } catch (t) {
                if (i) throw t.message = `${e}: ${t.message}`, t;
                return null
            }
        }, writeFile: i.fromPromise((async function (e, t, n = {}) {
            const s = n.fs || r, a = o(t, n);
            await i.fromCallback(s.writeFile)(e, a, n)
        })), writeFileSync: function (e, t, n = {}) {
            const i = n.fs || r, s = o(t, n);
            return i.writeFileSync(e, s, n)
        }
    };
    e.exports = a
}, function (e, t, n) {
    var r = n(2), i = n(104), o = n(105), s = [], a = n(5);
    var c, u, l = function () {
    };

    function f(e) {
        i(e), e.gracefulify = f, e.FileReadStream = d, e.FileWriteStream = m, e.createReadStream = function (e, t) {
            return new d(e, t)
        }, e.createWriteStream = function (e, t) {
            return new m(e, t)
        };
        var t = e.readFile;
        e.readFile = function (e, n, r) {
            "function" == typeof n && (r = n, n = null);
            return function e(n, r, i) {
                return t(n, r, (function (t) {
                    !t || "EMFILE" !== t.code && "ENFILE" !== t.code ? ("function" == typeof i && i.apply(this, arguments), p()) : h([e, [n, r, i]])
                }))
            }(e, n, r)
        };
        var n = e.writeFile;
        e.writeFile = function (e, t, r, i) {
            "function" == typeof r && (i = r, r = null);
            return function e(t, r, i, o) {
                return n(t, r, i, (function (n) {
                    !n || "EMFILE" !== n.code && "ENFILE" !== n.code ? ("function" == typeof o && o.apply(this, arguments), p()) : h([e, [t, r, i, o]])
                }))
            }(e, t, r, i)
        };
        var r = e.appendFile;
        r && (e.appendFile = function (e, t, n, i) {
            "function" == typeof n && (i = n, n = null);
            return function e(t, n, i, o) {
                return r(t, n, i, (function (r) {
                    !r || "EMFILE" !== r.code && "ENFILE" !== r.code ? ("function" == typeof o && o.apply(this, arguments), p()) : h([e, [t, n, i, o]])
                }))
            }(e, t, n, i)
        });
        var s = e.readdir;

        function a(t) {
            return s.apply(e, t)
        }

        if (e.readdir = function (e, t, n) {
            var r = [e];
            "function" != typeof t ? r.push(t) : n = t;
            return r.push((function (e, t) {
                t && t.sort && t.sort();
                !e || "EMFILE" !== e.code && "ENFILE" !== e.code ? ("function" == typeof n && n.apply(this, arguments), p()) : h([a, [r]])
            })), a(r)
        }, "v0.8" === process.version.substr(0, 4)) {
            var c = o(e);
            d = c.ReadStream, m = c.WriteStream
        }
        var u = e.ReadStream;
        d.prototype = Object.create(u.prototype), d.prototype.open = function () {
            var e = this;
            g(e.path, e.flags, e.mode, (function (t, n) {
                t ? (e.autoClose && e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n), e.read())
            }))
        };
        var l = e.WriteStream;

        function d(e, t) {
            return this instanceof d ? (u.apply(this, arguments), this) : d.apply(Object.create(d.prototype), arguments)
        }

        function m(e, t) {
            return this instanceof m ? (l.apply(this, arguments), this) : m.apply(Object.create(m.prototype), arguments)
        }

        m.prototype = Object.create(l.prototype), m.prototype.open = function () {
            var e = this;
            g(e.path, e.flags, e.mode, (function (t, n) {
                t ? (e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n))
            }))
        }, e.ReadStream = d, e.WriteStream = m;
        var y = e.open;

        function g(e, t, n, r) {
            return "function" == typeof n && (r = n, n = null), function e(t, n, r, i) {
                return y(t, n, r, (function (o, s) {
                    !o || "EMFILE" !== o.code && "ENFILE" !== o.code ? ("function" == typeof i && i.apply(this, arguments), p()) : h([e, [t, n, r, i]])
                }))
            }(e, t, n, r)
        }

        return e.open = g, e
    }

    function h(e) {
        l("ENQUEUE", e[0].name, e[1]), s.push(e)
    }

    function p() {
        var e = s.shift();
        e && (l("RETRY", e[0].name, e[1]), e[0].apply(null, e[1]))
    }

    a.debuglog ? l = a.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (l = function () {
        var e = a.format.apply(a, arguments);
        e = "GFS4: " + e.split(/\n/).join("\nGFS4: "), console.error(e)
    }), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", (function () {
        l(s), n(21).equal(s.length, 0)
    })), e.exports = f(n(41)), process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && (e.exports = f(r)), e.exports.close = r.close = (c = r.close, function (e, t) {
        return c.call(r, e, (function (e) {
            e || p(), "function" == typeof t && t.apply(this, arguments)
        }))
    }), e.exports.closeSync = r.closeSync = (u = r.closeSync, function (e) {
        var t = u.apply(r, arguments);
        return p(), t
    })
}, function (e, t, n) {
    var r = n(41), i = n(30), o = process.cwd, s = null, a = process.env.GRACEFUL_FS_PLATFORM || "win32";
    process.cwd = function () {
        return s || (s = o.call(process)), s
    };
    try {
        process.cwd()
    } catch (e) {
    }
    var c = process.chdir;

    function u(e) {
        return e ? function (t, n, i) {
            return e.call(r, t, n, (function (e) {
                m(e) && (e = null), i && i.apply(this, arguments)
            }))
        } : e
    }

    function l(e) {
        return e ? function (t, n) {
            try {
                return e.call(r, t, n)
            } catch (e) {
                if (!m(e)) throw e
            }
        } : e
    }

    function f(e) {
        return e ? function (t, n, i, o) {
            return e.call(r, t, n, i, (function (e) {
                m(e) && (e = null), o && o.apply(this, arguments)
            }))
        } : e
    }

    function h(e) {
        return e ? function (t, n, i) {
            try {
                return e.call(r, t, n, i)
            } catch (e) {
                if (!m(e)) throw e
            }
        } : e
    }

    function p(e) {
        return e ? function (t, n) {
            return e.call(r, t, (function (e, t) {
                if (!t) return n.apply(this, arguments);
                t.uid < 0 && (t.uid += 4294967296), t.gid < 0 && (t.gid += 4294967296), n && n.apply(this, arguments)
            }))
        } : e
    }

    function d(e) {
        return e ? function (t) {
            var n = e.call(r, t);
            return n.uid < 0 && (n.uid += 4294967296), n.gid < 0 && (n.gid += 4294967296), n
        } : e
    }

    function m(e) {
        return !e || ("ENOSYS" === e.code || !(process.getuid && 0 === process.getuid() || "EINVAL" !== e.code && "EPERM" !== e.code))
    }

    process.chdir = function (e) {
        s = null, c.call(process, e)
    }, e.exports = function (e) {
        i.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function (e) {
            e.lchmod = function (t, n, r) {
                e.open(t, i.O_WRONLY | i.O_SYMLINK, n, (function (t, i) {
                    t ? r && r(t) : e.fchmod(i, n, (function (t) {
                        e.close(i, (function (e) {
                            r && r(t || e)
                        }))
                    }))
                }))
            }, e.lchmodSync = function (t, n) {
                var r, o = e.openSync(t, i.O_WRONLY | i.O_SYMLINK, n), s = !0;
                try {
                    r = e.fchmodSync(o, n), s = !1
                } finally {
                    if (s) try {
                        e.closeSync(o)
                    } catch (e) {
                    } else e.closeSync(o)
                }
                return r
            }
        }(e);
        e.lutimes || function (e) {
            i.hasOwnProperty("O_SYMLINK") ? (e.lutimes = function (t, n, r, o) {
                e.open(t, i.O_SYMLINK, (function (t, i) {
                    t ? o && o(t) : e.futimes(i, n, r, (function (t) {
                        e.close(i, (function (e) {
                            o && o(t || e)
                        }))
                    }))
                }))
            }, e.lutimesSync = function (t, n, r) {
                var o, s = e.openSync(t, i.O_SYMLINK), a = !0;
                try {
                    o = e.futimesSync(s, n, r), a = !1
                } finally {
                    if (a) try {
                        e.closeSync(s)
                    } catch (e) {
                    } else e.closeSync(s)
                }
                return o
            }) : (e.lutimes = function (e, t, n, r) {
                r && process.nextTick(r)
            }, e.lutimesSync = function () {
            })
        }(e);
        e.chown = f(e.chown), e.fchown = f(e.fchown), e.lchown = f(e.lchown), e.chmod = u(e.chmod), e.fchmod = u(e.fchmod), e.lchmod = u(e.lchmod), e.chownSync = h(e.chownSync), e.fchownSync = h(e.fchownSync), e.lchownSync = h(e.lchownSync), e.chmodSync = l(e.chmodSync), e.fchmodSync = l(e.fchmodSync), e.lchmodSync = l(e.lchmodSync), e.stat = p(e.stat), e.fstat = p(e.fstat), e.lstat = p(e.lstat), e.statSync = d(e.statSync), e.fstatSync = d(e.fstatSync), e.lstatSync = d(e.lstatSync), e.lchmod || (e.lchmod = function (e, t, n) {
            n && process.nextTick(n)
        }, e.lchmodSync = function () {
        });
        e.lchown || (e.lchown = function (e, t, n, r) {
            r && process.nextTick(r)
        }, e.lchownSync = function () {
        });
        "win32" === a && (e.rename = (t = e.rename, function (n, r, i) {
            var o = Date.now(), s = 0;
            t(n, r, (function a(c) {
                if (c && ("EACCES" === c.code || "EPERM" === c.code) && Date.now() - o < 6e4) return setTimeout((function () {
                    e.stat(r, (function (e, o) {
                        e && "ENOENT" === e.code ? t(n, r, a) : i(c)
                    }))
                }), s), void (s < 100 && (s += 10));
                i && i(c)
            }))
        }));
        var t;
        e.read = (r = e.read, function (t, n, i, o, s, a) {
            var c;
            if (a && "function" == typeof a) {
                var u = 0;
                c = function (l, f, h) {
                    if (l && "EAGAIN" === l.code && u < 10) return u++, r.call(e, t, n, i, o, s, c);
                    a.apply(this, arguments)
                }
            }
            return r.call(e, t, n, i, o, s, c)
        }), e.readSync = (n = e.readSync, function (t, r, i, o, s) {
            for (var a = 0; ;) try {
                return n.call(e, t, r, i, o, s)
            } catch (e) {
                if ("EAGAIN" === e.code && a < 10) {
                    a++;
                    continue
                }
                throw e
            }
        });
        var n;
        var r
    }
}, function (e, t, n) {
    var r = n(8).Stream;
    e.exports = function (e) {
        return {
            ReadStream: function t(n, i) {
                if (!(this instanceof t)) return new t(n, i);
                r.call(this);
                var o = this;
                this.path = n, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, i = i || {};
                for (var s = Object.keys(i), a = 0, c = s.length; a < c; a++) {
                    var u = s[a];
                    this[u] = i[u]
                }
                this.encoding && this.setEncoding(this.encoding);
                if (void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");
                    if (void 0 === this.end) this.end = 1 / 0; else if ("number" != typeof this.end) throw TypeError("end must be a Number");
                    if (this.start > this.end) throw new Error("start must be <= end");
                    this.pos = this.start
                }
                if (null !== this.fd) return void process.nextTick((function () {
                    o._read()
                }));
                e.open(this.path, this.flags, this.mode, (function (e, t) {
                    if (e) return o.emit("error", e), void (o.readable = !1);
                    o.fd = t, o.emit("open", t), o._read()
                }))
            }, WriteStream: function t(n, i) {
                if (!(this instanceof t)) return new t(n, i);
                r.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, i = i || {};
                for (var o = Object.keys(i), s = 0, a = o.length; s < a; s++) {
                    var c = o[s];
                    this[c] = i[c]
                }
                if (void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");
                    if (this.start < 0) throw new Error("start must be >= zero");
                    this.pos = this.start
                }
                this.busy = !1, this._queue = [], null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    t.fromCallback = function (e) {
        return Object.defineProperty((function (...t) {
            if ("function" != typeof t[t.length - 1]) return new Promise((n, r) => {
                e.call(this, ...t, (e, t) => null != e ? r(e) : n(t))
            });
            e.apply(this, t)
        }), "name", {value: e.name})
    }, t.fromPromise = function (e) {
        return Object.defineProperty((function (...t) {
            const n = t[t.length - 1];
            if ("function" != typeof n) return e.apply(this, t);
            e.apply(this, t.slice(0, -1)).then(e => n(null, e), n)
        }), "name", {value: e.name})
    }
}, function (e, t, n) {
    "use strict";
    const {stringify: r} = n(31), {outputFile: i} = n(32);
    e.exports = async function (e, t, n = {}) {
        const o = r(t, n);
        await i(e, o, n)
    }
}, function (e, t, n) {
    "use strict";
    const {stringify: r} = n(31), {outputFileSync: i} = n(32);
    e.exports = function (e, t, n) {
        const o = r(t, n);
        i(e, o, n)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = {moveSync: n(110)}
}, function (e, t, n) {
    "use strict";
    const r = n(3), i = n(1), o = n(37).copySync, s = n(23).removeSync, a = n(7).mkdirpSync, c = n(22);

    function u(e, t, n) {
        try {
            r.renameSync(e, t)
        } catch (r) {
            if ("EXDEV" !== r.code) throw r;
            return function (e, t, n) {
                return o(e, t, {overwrite: n, errorOnExist: true}), s(e)
            }(e, t, n)
        }
    }

    e.exports = function (e, t, n) {
        const o = (n = n || {}).overwrite || n.clobber || !1, {srcStat: l} = c.checkPathsSync(e, t, "move");
        return c.checkParentPathsSync(e, l, t, "move"), a(i.dirname(t)), function (e, t, n) {
            if (n) return s(t), u(e, t, n);
            if (r.existsSync(t)) throw new Error("dest already exists.");
            return u(e, t, n)
        }(e, t, o)
    }
}, function (e, t, n) {
    "use strict";
    const r = n(6).fromCallback;
    e.exports = {move: r(n(112))}
}, function (e, t, n) {
    "use strict";
    const r = n(3), i = n(1), o = n(40).copy, s = n(23).remove, a = n(7).mkdirp, c = n(12).pathExists, u = n(22);

    function l(e, t, n, i) {
        r.rename(e, t, r => r ? "EXDEV" !== r.code ? i(r) : function (e, t, n, r) {
            o(e, t, {overwrite: n, errorOnExist: !0}, t => t ? r(t) : s(e, r))
        }(e, t, n, i) : i())
    }

    e.exports = function (e, t, n, r) {
        "function" == typeof n && (r = n, n = {});
        const o = n.overwrite || n.clobber || !1;
        u.checkPaths(e, t, "move", (n, f) => {
            if (n) return r(n);
            const {srcStat: h} = f;
            u.checkParentPaths(e, h, t, "move", n => {
                if (n) return r(n);
                a(i.dirname(t), n => n ? r(n) : function (e, t, n, r) {
                    if (n) return s(t, i => i ? r(i) : l(e, t, n, r));
                    c(t, (i, o) => i ? r(i) : o ? r(new Error("dest already exists.")) : l(e, t, n, r))
                }(e, t, o, r))
            })
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(2), i = n(1), o = n(5), s = n(11), a = n(9).Transport, c = n(8).Stream, u = n(10), l = n(9), f = n(42),
        h = n(35), p = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], d = e.exports = function (e) {
            function t(t) {
                Array.prototype.slice.call(arguments, 1).forEach((function (n) {
                    if (e[n]) throw new Error("Cannot set " + n + " and " + t + "together")
                }))
            }

            if (a.call(this, e), e.filename || e.dirname) t("filename or dirname", "stream"), this._basename = this.filename = e.filename ? i.basename(e.filename) : "winston.log", this.dirname = e.dirname || i.dirname(e.filename), this.options = e.options || {flags: "a"}, this.options.highWaterMark = this.options.highWaterMark || 24; else {
                if (!e.stream) throw new Error("Cannot log to file without filename or stream.");
                t("stream", "filename", "maxsize"), this._stream = e.stream;
                var n = this;
                this._stream.on("error", (function (e) {
                    n.emit("error", e)
                })), this._stream.setMaxListeners(1 / 0)
            }
            this.json = !1 !== e.json, this.colorize = e.colorize || !1, this.maxsize = e.maxsize || null, this.logstash = e.logstash || null, this.maxFiles = e.maxFiles || null, this.label = e.label || null, this.prettyPrint = e.prettyPrint || !1, this.showLevel = void 0 === e.showLevel || e.showLevel, this.timestamp = void 0 === e.timestamp || e.timestamp, this.datePattern = e.datePattern ? e.datePattern : ".yyyy-MM-dd", this.depth = e.depth || null, this.eol = e.eol || u.EOL, this.maxRetries = e.maxRetries || 2, this.prepend = e.prepend || !1, this.createTree = e.createTree || !1, this.localTime = e.localTime || !1, this.zippedArchive = e.zippedArchive || !1, this.maxDays = e.maxDays || 0, this.json && (this.stringify = e.stringify), this._size = 0, this._created = 0, this._buffer = [], this._draining = !1, this._failures = 0, this._archive = !1, this._currentFiles = function () {
                if (!this.maxsize) try {
                    return r.readdirSync(this.dirname).filter(function (e) {
                        return e.includes(this._basename)
                    }.bind(this)).map(function (e) {
                        return {name: e, time: r.statSync(i.join(this.dirname, e)).mtime.getTime()}
                    }.bind(this)).sort((function (e, t) {
                        return e.time - t.time
                    })).map((function (e) {
                        return e.name
                    }))
                } catch (e) {
                }
                return []
            }.bind(this)(), this._year = this._getTime("year"), this._month = this._getTime("month"), this._date = this._getTime("date"), this._hour = this._getTime("hour"), this._minute = this._getTime("minute"), this._weekday = p[this._getTime("day")];
            var o = /d{1,4}|m{1,4}|yy(?:yy)?|([HhM])\1?/g, s = function (e, t) {
                for (e = String(e), t = t || 2; e.length < t;) e = "0" + e;
                return e
            };
            this.getFormattedDate = function () {
                this._year = this._getTime("year"), this._month = this._getTime("month"), this._date = this._getTime("date"), this._hour = this._getTime("hour"), this._minute = this._getTime("minute"), this._weekday = p[this._getTime("day")];
                var e = {
                    yy: String(this._year).slice(2),
                    yyyy: this._year,
                    M: this._month + 1,
                    MM: s(this._month + 1),
                    d: this._date,
                    dd: s(this._date),
                    H: this._hour,
                    HH: s(this._hour),
                    m: this._minute,
                    mm: s(this._minute),
                    ddd: this._weekday
                };
                return this.datePattern.replace(o, (function (t) {
                    return t in e ? e[t] : t.slice(1, t.length - 1)
                }))
            }
        };
    o.inherits(d, a), l.transports.DailyRotateFile = d, d.prototype.name = "dailyRotateFile", d.prototype.log = function (e, t, n, r) {
        if (this.silent) return r(null, !0);
        if (this._failures >= this.maxRetries) return r(new Error("Transport is in a failed state."));
        var i = this, o = s.log({
            level: e,
            message: t,
            meta: n,
            json: this.json,
            colorize: this.colorize,
            logstash: this.logstash,
            prettyPrint: this.prettyPrint,
            timestamp: this.timestamp,
            label: this.label,
            stringify: this.stringify,
            showLevel: this.showLevel,
            depth: this.depth,
            formatter: this.formatter,
            humanReadableUnhandledException: this.humanReadableUnhandledException
        }) + this.eol;
        this._size += o.length, this.filename ? this.open((function (e) {
            if (e) return i._buffer.push([o, r]);
            i._write(o, r), i._lazyDrain()
        })) : (this._write(o, r), this._lazyDrain())
    }, d.prototype._write = function (e, t) {
        var n = this._stream.write(e);
        if (t) return !1 === n ? this._stream.once("drain", (function () {
            t(null, !0)
        })) : void t(null, !0)
    }, d.prototype.query = function (e, t) {
        "function" == typeof e && (t = e, e = {});
        var n = this, o = n._currentFiles.slice(0), s = [], a = 0;
        e = n.normalizeQuery(e), 0 === o.length && t && t(null, s), function c(u) {
            if (u) {
                var l = i.join(n.dirname, u), f = "", h = r.createReadStream(l, {encoding: "utf8"});
                h.on("error", (function (e) {
                    if (h.readable && h.destroy(), t) return "ENOENT" === e.code ? t(null, s) : t(e)
                })), h.on("data", (function (t) {
                    for (var n = (t = (f + t).split(/\n+/)).length - 1, r = 0; r < n; r++) (!e.start || a >= e.start) && p(t[r]), a++;
                    f = t[n]
                })), h.on("close", (function () {
                    f && p(f, !0), "desc" === e.order && (s = s.reverse()), o.length ? c(o.shift()) : t && t(null, s)
                }))
            }

            function p(t, n) {
                try {
                    var r = JSON.parse(t);
                    (function (t) {
                        if (!t) return;
                        if ("object" != typeof t) return;
                        var n = new Date(t.timestamp);
                        if (e.from && n < e.from || e.until && n > e.until) return;
                        return !0
                    })(r) && function (t) {
                        if (e.rows && s.length >= e.rows && "desc" !== e.order) return void (h.readable && h.destroy());
                        if (e.fields) {
                            var n = {};
                            e.fields.forEach((function (e) {
                                n[e] = t[e]
                            })), t = n
                        }
                        "desc" === e.order && s.length >= e.rows && s.shift();
                        s.push(t)
                    }(r)
                } catch (e) {
                    n || h.emit("error", e)
                }
            }
        }(o.shift())
    }, d.prototype.stream = function (e) {
        var t = i.join(this.dirname, this._getFilename());
        e = e || {};
        var n = new c, r = {file: t, start: e.start};
        return n.destroy = s.tailFile(r, (function (e, t) {
            if (e) return n.emit("error", e);
            try {
                n.emit("data", t), t = JSON.parse(t), n.emit("log", t)
            } catch (e) {
                n.emit("error", e)
            }
        })), n.resume && n.resume(), n
    }, d.prototype.open = function (e) {
        return this.opening ? e(!0) : !this._stream || this.maxsize && this._size >= this.maxsize || this._filenameHasExpired() ? (this._cleanOldFiles(), e(!0), this._createStream()) : void e()
    }, d.prototype.close = function () {
        var e = this;
        this._stream && (this._stream.end(), this._stream.destroySoon(), this._stream.once("drain", (function () {
            e.emit("flush"), e.emit("closed")
        })))
    }, d.prototype.flush = function () {
        var e = this;
        this._buffer.forEach((function (t) {
            var n = t[0], r = t[1];
            process.nextTick((function () {
                e._write(n, r), e._size += n.length
            }))
        })), e._buffer.length = 0, e._stream.once("drain", (function () {
            e.emit("flush"), e.emit("logged")
        }))
    }, d.prototype._createStream = function () {
        var e = this;
        this.opening = !0, function t(n) {
            var o = i.join(e.dirname, n);

            function s(t) {
                e._stream && (e._archive = !!e.zippedArchive && e._stream.path, e._stream.end(), e._stream.destroySoon()), e.createTree && f.sync(i.dirname(o)), e._size = t, e.filename = n, e._stream = r.createWriteStream(o, e.options), e._stream.on("error", (function (t) {
                    e._failures < e.maxRetries ? (e._createStream(), e._failures++) : e.emit("error", t)
                })), e._stream.setMaxListeners(1 / 0), e.once("flush", (function () {
                    e.flush(), e.opening = !1, e.emit("open", o)
                })), e.flush(), function () {
                    var t = e._archive;
                    if (e._archive = !1, t && r.existsSync(String(t))) {
                        var n = h.createGzip(), i = r.createReadStream(String(t)), o = r.createWriteStream(t + ".gz");
                        i.pipe(n).pipe(o), r.unlinkSync(String(t))
                    }
                }()
            }

            r.stat(o, (function (n, r) {
                return n ? "ENOENT" !== n.code ? e.emit("error", n) : s(0) : !r || e.maxsize && r.size >= e.maxsize ? t(e._getFile(!0)) : e._filenameHasExpired() ? (e._year = e._getTime("year"), e._month = e._getTime("month"), e._date = e._getTime("date"), e._hour = e._getTime("hour"), e._minute = e._getTime("minute"), e._weekday = p[e._getTime("day")], e._created = 0, t(e._getFile())) : void s(r.size)
            }))
        }(this._getFile())
    }, d.prototype._getFile = function (e) {
        var t, n = this._getFilename();
        if (e) {
            if (this.maxFiles && this._created >= this.maxFiles - 1) if (0 === (t = this._created - (this.maxFiles - 1))) try {
                r.unlinkSync(i.join(this.dirname, n))
            } catch (e) {
            } else try {
                r.unlinkSync(i.join(this.dirname, n + "." + t))
            } catch (e) {
            }
            this._created += 1
        } else if (!this.maxsize) for (-1 === this._currentFiles.indexOf(n) && this._currentFiles.push(n); this.maxFiles && this._currentFiles.length > this.maxFiles;) {
            try {
                r.unlinkSync(i.join(this.dirname, this._currentFiles[0]))
            } catch (e) {
            }
            this._currentFiles = this._currentFiles.slice(1)
        }
        return this._created ? n + "." + this._created : n
    }, d.prototype._getFilename = function () {
        var e = this.getFormattedDate();
        return this.prepend ? (".yyyy-MM-dd" === this.datePattern && (this.datePattern = "yyyy-MM-dd.", e = this.getFormattedDate()), e + this._basename) : this._basename + e
    }, d.prototype._lazyDrain = function () {
        var e = this;
        !this._draining && this._stream && (this._draining = !0, this._stream.once("drain", (function () {
            this._draining = !1, e.emit("logged")
        })))
    }, d.prototype._filenameHasExpired = function () {
        return this.datePattern.match(/m/) ? this._year < this._getTime("year") || this._month < this._getTime("month") || this._date < this._getTime("date") || this._hour < this._getTime("hour") || this._minute < this._getTime("minute") : this.datePattern.match(/H/) ? this._year < this._getTime("year") || this._month < this._getTime("month") || this._date < this._getTime("date") || this._hour < this._getTime("hour") : this.datePattern.match(/d/) ? this._year < this._getTime("year") || this._month < this._getTime("month") || this._date < this._getTime("date") : this.datePattern.match(/M/) ? this._year < this._getTime("year") || this._month < this._getTime("month") : !!this.datePattern.match(/yy/) && this._year < this._getTime("year")
    }, d.prototype._getTime = function (e) {
        var t = new Date;
        if (this.localTime) {
            if ("year" === e) return t.getFullYear();
            if ("month" === e) return t.getMonth();
            if ("date" === e) return t.getDate();
            if ("hour" === e) return t.getHours();
            if ("minute" === e) return t.getMinutes();
            if ("day" === e) return t.getDay()
        }
        return "year" === e ? t.getUTCFullYear() : "month" === e ? t.getUTCMonth() : "date" === e ? t.getUTCDate() : "hour" === e ? t.getUTCHours() : "minute" === e ? t.getUTCMinutes() : "day" === e ? t.getUTCDay() : void 0
    }, d.prototype._cleanOldFiles = function () {
        var e = this, t = Date.now();

        function n(n) {
            var o = e.dirname + i.sep + n;
            r.stat(o, (function (o, s) {
                if (o) console.error("Error stats file ", n, o); else {
                    var a = s.mtime && s.mtime.getTime() || 0, c = t - a;
                    s.isFile() && c > 864e5 * e.maxDays && function (t) {
                        r.unlink(e.dirname + i.sep + t, (function (e) {
                            e && console.error("Error removing file ", t)
                        }))
                    }(n)
                }
            }))
        }

        e.maxDays && r.readdir(e.dirname, (function (t, r) {
            if (t) console.error("Error reading directory ", e.dirname, t); else {
                var i = new RegExp(e._basename, "g");
                r.forEach((function (e) {
                    /.log/.test(e) && i.test(e) && n(e)
                }))
            }
        }))
    }
}, function (e, t, n) {
    t.SourceMapGenerator = n(43).SourceMapGenerator, t.SourceMapConsumer = n(117).SourceMapConsumer, t.SourceNode = n(120).SourceNode
}, function (e, t) {
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    t.encode = function (e) {
        if (0 <= e && e < n.length) return n[e];
        throw new TypeError("Must be between 0 and 63: " + e)
    }, t.decode = function (e) {
        return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1
    }
}, function (e, t, n) {
    var r = n(17);

    function i() {
        this._array = [], this._sorted = !0, this._last = {generatedLine: -1, generatedColumn: 0}
    }

    i.prototype.unsortedForEach = function (e, t) {
        this._array.forEach(e, t)
    }, i.prototype.add = function (e) {
        var t, n, i, o, s, a;
        t = this._last, n = e, i = t.generatedLine, o = n.generatedLine, s = t.generatedColumn, a = n.generatedColumn, o > i || o == i && a >= s || r.compareByGeneratedPositionsInflated(t, n) <= 0 ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e))
    }, i.prototype.toArray = function () {
        return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
    }, t.MappingList = i
}, function (e, t, n) {
    var r = n(17), i = n(118), o = n(45).ArraySet, s = n(44), a = n(119).quickSort;

    function c(e) {
        var t = e;
        return "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))), null != t.sections ? new f(t) : new u(t)
    }

    function u(e) {
        var t = e;
        "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
        var n = r.getArg(t, "version"), i = r.getArg(t, "sources"), s = r.getArg(t, "names", []),
            a = r.getArg(t, "sourceRoot", null), c = r.getArg(t, "sourcesContent", null), u = r.getArg(t, "mappings"),
            l = r.getArg(t, "file", null);
        if (n != this._version) throw new Error("Unsupported version: " + n);
        i = i.map(String).map(r.normalize).map((function (e) {
            return a && r.isAbsolute(a) && r.isAbsolute(e) ? r.relative(a, e) : e
        })), this._names = o.fromArray(s.map(String), !0), this._sources = o.fromArray(i, !0), this.sourceRoot = a, this.sourcesContent = c, this._mappings = u, this.file = l
    }

    function l() {
        this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
    }

    function f(e) {
        var t = e;
        "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
        var n = r.getArg(t, "version"), i = r.getArg(t, "sections");
        if (n != this._version) throw new Error("Unsupported version: " + n);
        this._sources = new o, this._names = new o;
        var s = {line: -1, column: 0};
        this._sections = i.map((function (e) {
            if (e.url) throw new Error("Support for url field in sections not implemented.");
            var t = r.getArg(e, "offset"), n = r.getArg(t, "line"), i = r.getArg(t, "column");
            if (n < s.line || n === s.line && i < s.column) throw new Error("Section offsets must be ordered and non-overlapping.");
            return s = t, {
                generatedOffset: {generatedLine: n + 1, generatedColumn: i + 1},
                consumer: new c(r.getArg(e, "map"))
            }
        }))
    }

    c.fromSourceMap = function (e) {
        return u.fromSourceMap(e)
    }, c.prototype._version = 3, c.prototype.__generatedMappings = null, Object.defineProperty(c.prototype, "_generatedMappings", {
        get: function () {
            return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
        }
    }), c.prototype.__originalMappings = null, Object.defineProperty(c.prototype, "_originalMappings", {
        get: function () {
            return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
        }
    }), c.prototype._charIsMappingSeparator = function (e, t) {
        var n = e.charAt(t);
        return ";" === n || "," === n
    }, c.prototype._parseMappings = function (e, t) {
        throw new Error("Subclasses must implement _parseMappings")
    }, c.GENERATED_ORDER = 1, c.ORIGINAL_ORDER = 2, c.GREATEST_LOWER_BOUND = 1, c.LEAST_UPPER_BOUND = 2, c.prototype.eachMapping = function (e, t, n) {
        var i, o = t || null;
        switch (n || c.GENERATED_ORDER) {
            case c.GENERATED_ORDER:
                i = this._generatedMappings;
                break;
            case c.ORIGINAL_ORDER:
                i = this._originalMappings;
                break;
            default:
                throw new Error("Unknown order of iteration.")
        }
        var s = this.sourceRoot;
        i.map((function (e) {
            var t = null === e.source ? null : this._sources.at(e.source);
            return null != t && null != s && (t = r.join(s, t)), {
                source: t,
                generatedLine: e.generatedLine,
                generatedColumn: e.generatedColumn,
                originalLine: e.originalLine,
                originalColumn: e.originalColumn,
                name: null === e.name ? null : this._names.at(e.name)
            }
        }), this).forEach(e, o)
    }, c.prototype.allGeneratedPositionsFor = function (e) {
        var t = r.getArg(e, "line"),
            n = {source: r.getArg(e, "source"), originalLine: t, originalColumn: r.getArg(e, "column", 0)};
        if (null != this.sourceRoot && (n.source = r.relative(this.sourceRoot, n.source)), !this._sources.has(n.source)) return [];
        n.source = this._sources.indexOf(n.source);
        var o = [],
            s = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, i.LEAST_UPPER_BOUND);
        if (s >= 0) {
            var a = this._originalMappings[s];
            if (void 0 === e.column) for (var c = a.originalLine; a && a.originalLine === c;) o.push({
                line: r.getArg(a, "generatedLine", null),
                column: r.getArg(a, "generatedColumn", null),
                lastColumn: r.getArg(a, "lastGeneratedColumn", null)
            }), a = this._originalMappings[++s]; else for (var u = a.originalColumn; a && a.originalLine === t && a.originalColumn == u;) o.push({
                line: r.getArg(a, "generatedLine", null),
                column: r.getArg(a, "generatedColumn", null),
                lastColumn: r.getArg(a, "lastGeneratedColumn", null)
            }), a = this._originalMappings[++s]
        }
        return o
    }, t.SourceMapConsumer = c, u.prototype = Object.create(c.prototype), u.prototype.consumer = c, u.fromSourceMap = function (e) {
        var t = Object.create(u.prototype), n = t._names = o.fromArray(e._names.toArray(), !0),
            i = t._sources = o.fromArray(e._sources.toArray(), !0);
        t.sourceRoot = e._sourceRoot, t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file;
        for (var s = e._mappings.toArray().slice(), c = t.__generatedMappings = [], f = t.__originalMappings = [], h = 0, p = s.length; h < p; h++) {
            var d = s[h], m = new l;
            m.generatedLine = d.generatedLine, m.generatedColumn = d.generatedColumn, d.source && (m.source = i.indexOf(d.source), m.originalLine = d.originalLine, m.originalColumn = d.originalColumn, d.name && (m.name = n.indexOf(d.name)), f.push(m)), c.push(m)
        }
        return a(t.__originalMappings, r.compareByOriginalPositions), t
    }, u.prototype._version = 3, Object.defineProperty(u.prototype, "sources", {
        get: function () {
            return this._sources.toArray().map((function (e) {
                return null != this.sourceRoot ? r.join(this.sourceRoot, e) : e
            }), this)
        }
    }), u.prototype._parseMappings = function (e, t) {
        for (var n, i, o, c, u, f = 1, h = 0, p = 0, d = 0, m = 0, y = 0, g = e.length, v = 0, w = {}, b = {}, _ = [], S = []; v < g;) if (";" === e.charAt(v)) f++, v++, h = 0; else if ("," === e.charAt(v)) v++; else {
            for ((n = new l).generatedLine = f, c = v; c < g && !this._charIsMappingSeparator(e, c); c++) ;
            if (o = w[i = e.slice(v, c)]) v += i.length; else {
                for (o = []; v < c;) s.decode(e, v, b), u = b.value, v = b.rest, o.push(u);
                if (2 === o.length) throw new Error("Found a source, but no line and column");
                if (3 === o.length) throw new Error("Found a source and line, but no column");
                w[i] = o
            }
            n.generatedColumn = h + o[0], h = n.generatedColumn, o.length > 1 && (n.source = m + o[1], m += o[1], n.originalLine = p + o[2], p = n.originalLine, n.originalLine += 1, n.originalColumn = d + o[3], d = n.originalColumn, o.length > 4 && (n.name = y + o[4], y += o[4])), S.push(n), "number" == typeof n.originalLine && _.push(n)
        }
        a(S, r.compareByGeneratedPositionsDeflated), this.__generatedMappings = S, a(_, r.compareByOriginalPositions), this.__originalMappings = _
    }, u.prototype._findMapping = function (e, t, n, r, o, s) {
        if (e[n] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
        if (e[r] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
        return i.search(e, t, o, s)
    }, u.prototype.computeColumnSpans = function () {
        for (var e = 0; e < this._generatedMappings.length; ++e) {
            var t = this._generatedMappings[e];
            if (e + 1 < this._generatedMappings.length) {
                var n = this._generatedMappings[e + 1];
                if (t.generatedLine === n.generatedLine) {
                    t.lastGeneratedColumn = n.generatedColumn - 1;
                    continue
                }
            }
            t.lastGeneratedColumn = 1 / 0
        }
    }, u.prototype.originalPositionFor = function (e) {
        var t = {generatedLine: r.getArg(e, "line"), generatedColumn: r.getArg(e, "column")},
            n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", r.compareByGeneratedPositionsDeflated, r.getArg(e, "bias", c.GREATEST_LOWER_BOUND));
        if (n >= 0) {
            var i = this._generatedMappings[n];
            if (i.generatedLine === t.generatedLine) {
                var o = r.getArg(i, "source", null);
                null !== o && (o = this._sources.at(o), null != this.sourceRoot && (o = r.join(this.sourceRoot, o)));
                var s = r.getArg(i, "name", null);
                return null !== s && (s = this._names.at(s)), {
                    source: o,
                    line: r.getArg(i, "originalLine", null),
                    column: r.getArg(i, "originalColumn", null),
                    name: s
                }
            }
        }
        return {source: null, line: null, column: null, name: null}
    }, u.prototype.hasContentsOfAllSources = function () {
        return !!this.sourcesContent && (this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some((function (e) {
            return null == e
        })))
    }, u.prototype.sourceContentFor = function (e, t) {
        if (!this.sourcesContent) return null;
        if (null != this.sourceRoot && (e = r.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
        var n;
        if (null != this.sourceRoot && (n = r.urlParse(this.sourceRoot))) {
            var i = e.replace(/^file:\/\//, "");
            if ("file" == n.scheme && this._sources.has(i)) return this.sourcesContent[this._sources.indexOf(i)];
            if ((!n.path || "/" == n.path) && this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)]
        }
        if (t) return null;
        throw new Error('"' + e + '" is not in the SourceMap.')
    }, u.prototype.generatedPositionFor = function (e) {
        var t = r.getArg(e, "source");
        if (null != this.sourceRoot && (t = r.relative(this.sourceRoot, t)), !this._sources.has(t)) return {
            line: null,
            column: null,
            lastColumn: null
        };
        var n = {
                source: t = this._sources.indexOf(t),
                originalLine: r.getArg(e, "line"),
                originalColumn: r.getArg(e, "column")
            },
            i = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, r.getArg(e, "bias", c.GREATEST_LOWER_BOUND));
        if (i >= 0) {
            var o = this._originalMappings[i];
            if (o.source === n.source) return {
                line: r.getArg(o, "generatedLine", null),
                column: r.getArg(o, "generatedColumn", null),
                lastColumn: r.getArg(o, "lastGeneratedColumn", null)
            }
        }
        return {line: null, column: null, lastColumn: null}
    }, t.BasicSourceMapConsumer = u, f.prototype = Object.create(c.prototype), f.prototype.constructor = c, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
        get: function () {
            for (var e = [], t = 0; t < this._sections.length; t++) for (var n = 0; n < this._sections[t].consumer.sources.length; n++) e.push(this._sections[t].consumer.sources[n]);
            return e
        }
    }), f.prototype.originalPositionFor = function (e) {
        var t = {generatedLine: r.getArg(e, "line"), generatedColumn: r.getArg(e, "column")},
            n = i.search(t, this._sections, (function (e, t) {
                var n = e.generatedLine - t.generatedOffset.generatedLine;
                return n || e.generatedColumn - t.generatedOffset.generatedColumn
            })), o = this._sections[n];
        return o ? o.consumer.originalPositionFor({
            line: t.generatedLine - (o.generatedOffset.generatedLine - 1),
            column: t.generatedColumn - (o.generatedOffset.generatedLine === t.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
            bias: e.bias
        }) : {source: null, line: null, column: null, name: null}
    }, f.prototype.hasContentsOfAllSources = function () {
        return this._sections.every((function (e) {
            return e.consumer.hasContentsOfAllSources()
        }))
    }, f.prototype.sourceContentFor = function (e, t) {
        for (var n = 0; n < this._sections.length; n++) {
            var r = this._sections[n].consumer.sourceContentFor(e, !0);
            if (r) return r
        }
        if (t) return null;
        throw new Error('"' + e + '" is not in the SourceMap.')
    }, f.prototype.generatedPositionFor = function (e) {
        for (var t = 0; t < this._sections.length; t++) {
            var n = this._sections[t];
            if (-1 !== n.consumer.sources.indexOf(r.getArg(e, "source"))) {
                var i = n.consumer.generatedPositionFor(e);
                if (i) return {
                    line: i.line + (n.generatedOffset.generatedLine - 1),
                    column: i.column + (n.generatedOffset.generatedLine === i.line ? n.generatedOffset.generatedColumn - 1 : 0)
                }
            }
        }
        return {line: null, column: null}
    }, f.prototype._parseMappings = function (e, t) {
        this.__generatedMappings = [], this.__originalMappings = [];
        for (var n = 0; n < this._sections.length; n++) for (var i = this._sections[n], o = i.consumer._generatedMappings, s = 0; s < o.length; s++) {
            var c = o[s], u = i.consumer._sources.at(c.source);
            null !== i.consumer.sourceRoot && (u = r.join(i.consumer.sourceRoot, u)), this._sources.add(u), u = this._sources.indexOf(u);
            var l = i.consumer._names.at(c.name);
            this._names.add(l), l = this._names.indexOf(l);
            var f = {
                source: u,
                generatedLine: c.generatedLine + (i.generatedOffset.generatedLine - 1),
                generatedColumn: c.generatedColumn + (i.generatedOffset.generatedLine === c.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
                originalLine: c.originalLine,
                originalColumn: c.originalColumn,
                name: l
            };
            this.__generatedMappings.push(f), "number" == typeof f.originalLine && this.__originalMappings.push(f)
        }
        a(this.__generatedMappings, r.compareByGeneratedPositionsDeflated), a(this.__originalMappings, r.compareByOriginalPositions)
    }, t.IndexedSourceMapConsumer = f
}, function (e, t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function (e, n, r, i) {
        if (0 === n.length) return -1;
        var o = function e(n, r, i, o, s, a) {
            var c = Math.floor((r - n) / 2) + n, u = s(i, o[c], !0);
            return 0 === u ? c : u > 0 ? r - c > 1 ? e(c, r, i, o, s, a) : a == t.LEAST_UPPER_BOUND ? r < o.length ? r : -1 : c : c - n > 1 ? e(n, c, i, o, s, a) : a == t.LEAST_UPPER_BOUND ? c : n < 0 ? -1 : n
        }(-1, n.length, e, n, r, i || t.GREATEST_LOWER_BOUND);
        if (o < 0) return -1;
        for (; o - 1 >= 0 && 0 === r(n[o], n[o - 1], !0);) --o;
        return o
    }
}, function (e, t) {
    function n(e, t, n) {
        var r = e[t];
        e[t] = e[n], e[n] = r
    }

    function r(e, t, i, o) {
        if (i < o) {
            var s = i - 1;
            n(e, (l = i, f = o, Math.round(l + Math.random() * (f - l))), o);
            for (var a = e[o], c = i; c < o; c++) t(e[c], a) <= 0 && n(e, s += 1, c);
            n(e, s + 1, c);
            var u = s + 1;
            r(e, t, i, u - 1), r(e, t, u + 1, o)
        }
        var l, f
    }

    t.quickSort = function (e, t) {
        r(e, t, 0, e.length - 1)
    }
}, function (e, t, n) {
    var r = n(43).SourceMapGenerator, i = n(17), o = /(\r?\n)/, s = "$$$isSourceNode$$$";

    function a(e, t, n, r, i) {
        this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == n ? null : n, this.name = null == i ? null : i, this[s] = !0, null != r && this.add(r)
    }

    a.fromStringWithSourceMap = function (e, t, n) {
        var r = new a, s = e.split(o), c = 0, u = function () {
            return e() + (e() || "");

            function e() {
                return c < s.length ? s[c++] : void 0
            }
        }, l = 1, f = 0, h = null;
        return t.eachMapping((function (e) {
            if (null !== h) {
                if (!(l < e.generatedLine)) {
                    var t = (n = s[c]).substr(0, e.generatedColumn - f);
                    return s[c] = n.substr(e.generatedColumn - f), f = e.generatedColumn, p(h, t), void (h = e)
                }
                p(h, u()), l++, f = 0
            }
            for (; l < e.generatedLine;) r.add(u()), l++;
            if (f < e.generatedColumn) {
                var n = s[c];
                r.add(n.substr(0, e.generatedColumn)), s[c] = n.substr(e.generatedColumn), f = e.generatedColumn
            }
            h = e
        }), this), c < s.length && (h && p(h, u()), r.add(s.splice(c).join(""))), t.sources.forEach((function (e) {
            var o = t.sourceContentFor(e);
            null != o && (null != n && (e = i.join(n, e)), r.setSourceContent(e, o))
        })), r;

        function p(e, t) {
            if (null === e || void 0 === e.source) r.add(t); else {
                var o = n ? i.join(n, e.source) : e.source;
                r.add(new a(e.originalLine, e.originalColumn, o, t, e.name))
            }
        }
    }, a.prototype.add = function (e) {
        if (Array.isArray(e)) e.forEach((function (e) {
            this.add(e)
        }), this); else {
            if (!e[s] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
            e && this.children.push(e)
        }
        return this
    }, a.prototype.prepend = function (e) {
        if (Array.isArray(e)) for (var t = e.length - 1; t >= 0; t--) this.prepend(e[t]); else {
            if (!e[s] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
            this.children.unshift(e)
        }
        return this
    }, a.prototype.walk = function (e) {
        for (var t, n = 0, r = this.children.length; n < r; n++) (t = this.children[n])[s] ? t.walk(e) : "" !== t && e(t, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
        })
    }, a.prototype.join = function (e) {
        var t, n, r = this.children.length;
        if (r > 0) {
            for (t = [], n = 0; n < r - 1; n++) t.push(this.children[n]), t.push(e);
            t.push(this.children[n]), this.children = t
        }
        return this
    }, a.prototype.replaceRight = function (e, t) {
        var n = this.children[this.children.length - 1];
        return n[s] ? n.replaceRight(e, t) : "string" == typeof n ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push("".replace(e, t)), this
    }, a.prototype.setSourceContent = function (e, t) {
        this.sourceContents[i.toSetString(e)] = t
    }, a.prototype.walkSourceContents = function (e) {
        for (var t = 0, n = this.children.length; t < n; t++) this.children[t][s] && this.children[t].walkSourceContents(e);
        var r = Object.keys(this.sourceContents);
        for (t = 0, n = r.length; t < n; t++) e(i.fromSetString(r[t]), this.sourceContents[r[t]])
    }, a.prototype.toString = function () {
        var e = "";
        return this.walk((function (t) {
            e += t
        })), e
    }, a.prototype.toStringWithSourceMap = function (e) {
        var t = {code: "", line: 1, column: 0}, n = new r(e), i = !1, o = null, s = null, a = null, c = null;
        return this.walk((function (e, r) {
            t.code += e, null !== r.source && null !== r.line && null !== r.column ? (o === r.source && s === r.line && a === r.column && c === r.name || n.addMapping({
                source: r.source,
                original: {line: r.line, column: r.column},
                generated: {line: t.line, column: t.column},
                name: r.name
            }), o = r.source, s = r.line, a = r.column, c = r.name, i = !0) : i && (n.addMapping({
                generated: {
                    line: t.line,
                    column: t.column
                }
            }), o = null, i = !1);
            for (var u = 0, l = e.length; u < l; u++) 10 === e.charCodeAt(u) ? (t.line++, t.column = 0, u + 1 === l ? (o = null, i = !1) : i && n.addMapping({
                source: r.source,
                original: {line: r.line, column: r.column},
                generated: {line: t.line, column: t.column},
                name: r.name
            })) : t.column++
        })), this.walkSourceContents((function (e, t) {
            n.setSourceContent(e, t)
        })), {code: t.code, map: n}
    }, t.SourceNode = a
}, function (e, t) {
    e.exports = require("module")
}, function (e, t, n) {
    (function () {
        var t;
        t = n(33), e.exports = function () {
            function e() {
                this.clear()
            }

            return e.exceptionHandlers = [], e.onEventHandlerException = function (e) {
                return 0 === this.exceptionHandlers.length && (this.dispatch = this.exceptionHandlingDispatch), this.exceptionHandlers.push(e), new t((n = this, function () {
                    if (n.exceptionHandlers.splice(n.exceptionHandlers.indexOf(e), 1), 0 === n.exceptionHandlers.length) return n.dispatch = n.simpleDispatch
                }));
                var n
            }, e.simpleDispatch = function (e, t) {
                return e(t)
            }, e.exceptionHandlingDispatch = function (e, t) {
                var n, r, i, o, s, a;
                try {
                    return e(t)
                } catch (e) {
                    for (n = e, a = [], i = 0, o = (s = this.exceptionHandlers).length; i < o; i++) r = s[i], a.push(r(n));
                    return a
                }
            }, e.dispatch = e.simpleDispatch, e.prototype.disposed = !1, e.prototype.clear = function () {
                return this.handlersByEventName = {}
            }, e.prototype.dispose = function () {
                return this.handlersByEventName = null, this.disposed = !0
            }, e.prototype.on = function (e, n, r) {
                var i;
                if (null == r && (r = !1), this.disposed) throw new Error("Emitter has been disposed");
                if ("function" != typeof n) throw new Error("Handler must be a function");
                return (i = this.handlersByEventName[e]) ? this.handlersByEventName[e] = r ? [n].concat(i) : i.concat(n) : this.handlersByEventName[e] = [n], new t(this.off.bind(this, e, n))
            }, e.prototype.once = function (e, t, n) {
                var r, i;
                return null == n && (n = !1), i = function (e) {
                    return r.dispose(), t(e)
                }, r = this.on(e, i, n)
            }, e.prototype.preempt = function (e, t) {
                return this.on(e, t, !0)
            }, e.prototype.off = function (e, t) {
                var n, r, i, o, s;
                if (!this.disposed && (i = this.handlersByEventName[e])) {
                    for (r = [], o = 0, s = i.length; o < s; o++) (n = i[o]) !== t && r.push(n);
                    r.length > 0 ? this.handlersByEventName[e] = r : delete this.handlersByEventName[e]
                }
            }, e.prototype.emit = function (e, t) {
                var n, r, i, o, s;
                if (r = null != (s = this.handlersByEventName) ? s[e] : void 0) for (i = 0, o = r.length; i < o; i++) n = r[i], this.constructor.dispatch(n, t)
            }, e.prototype.emitAsync = function (e, t) {
                var n, r, i, o;
                return (r = null != (o = this.handlersByEventName) ? o[e] : void 0) ? (i = function () {
                    var e, i, o;
                    for (o = [], e = 0, i = r.length; e < i; e++) n = r[e], o.push(this.constructor.dispatch(n, t));
                    return o
                }.call(this), Promise.all(i).then((function () {
                }))) : Promise.resolve()
            }, e.prototype.getEventNames = function () {
                return Object.keys(this.handlersByEventName)
            }, e.prototype.listenerCountForEventName = function (e) {
                var t, n;
                return null != (t = null != (n = this.handlersByEventName[e]) ? n.length : void 0) ? t : 0
            }, e.prototype.getTotalListenerCount = function () {
                var e, t, n, r, i;
                for (t = 0, n = 0, r = (i = Object.keys(this.handlersByEventName)).length; n < r; n++) e = i[n], t += this.handlersByEventName[e].length;
                return t
            }, e
        }()
    }).call(this)
}, function (e, t, n) {
    (function () {
        var t, r;
        t = null, e.exports = function () {
            function e() {
                var e, t, n;
                for (this.disposables = new Set, t = 0, n = arguments.length; t < n; t++) e = arguments[t], this.add(e)
            }

            return e.prototype.disposed = !1, e.prototype.dispose = function () {
                this.disposed || (this.disposed = !0, this.disposables.forEach((function (e) {
                    return e.dispose()
                })), this.disposables = null)
            }, e.prototype.add = function () {
                var e, t, n;
                if (!this.disposed) for (t = 0, n = arguments.length; t < n; t += 1) r(e = arguments[t]), this.disposables.add(e)
            }, e.prototype.remove = function (e) {
                this.disposed || this.disposables.delete(e)
            }, e.prototype.delete = function (e) {
                this.remove(e)
            }, e.prototype.clear = function () {
                this.disposed || this.disposables.clear()
            }, e
        }(), r = function (e) {
            if (null == t && (t = n(33)), !t.isDisposable(e)) throw new TypeError("Arguments to CompositeDisposable.add must have a .dispose() method")
        }
    }).call(this)
}, function (e, t, n) {
    var r;
    try {
        r = n(125)
    } catch (e) {
        r = n(2)
    }

    function i(e, t) {
        var n, r = "\n";
        return "object" == typeof t && null !== t && (t.spaces && (n = t.spaces), t.EOL && (r = t.EOL)), JSON.stringify(e, t ? t.replacer : null, n).replace(/\n/g, r) + r
    }

    function o(e) {
        return Buffer.isBuffer(e) && (e = e.toString("utf8")), e = e.replace(/^\uFEFF/, "")
    }

    var s = {
        readFile: function (e, t, n) {
            null == n && (n = t, t = {}), "string" == typeof t && (t = {encoding: t});
            var i = (t = t || {}).fs || r, s = !0;
            "throws" in t && (s = t.throws), i.readFile(e, t, (function (r, i) {
                if (r) return n(r);
                var a;
                i = o(i);
                try {
                    a = JSON.parse(i, t ? t.reviver : null)
                } catch (t) {
                    return s ? (t.message = e + ": " + t.message, n(t)) : n(null, null)
                }
                n(null, a)
            }))
        }, readFileSync: function (e, t) {
            "string" == typeof (t = t || {}) && (t = {encoding: t});
            var n = t.fs || r, i = !0;
            "throws" in t && (i = t.throws);
            try {
                var s = n.readFileSync(e, t);
                return s = o(s), JSON.parse(s, t.reviver)
            } catch (t) {
                if (i) throw t.message = e + ": " + t.message, t;
                return null
            }
        }, writeFile: function (e, t, n, o) {
            null == o && (o = n, n = {});
            var s = (n = n || {}).fs || r, a = "";
            try {
                a = i(t, n)
            } catch (e) {
                return void (o && o(e, null))
            }
            s.writeFile(e, a, n, o)
        }, writeFileSync: function (e, t, n) {
            var o = (n = n || {}).fs || r, s = i(t, n);
            return o.writeFileSync(e, s, n)
        }
    };
    e.exports = s
}, function (e, t, n) {
    var r = n(2), i = n(126), o = n(127), s = [], a = n(5);
    var c, u, l = function () {
    };

    function f(e) {
        i(e), e.gracefulify = f, e.FileReadStream = d, e.FileWriteStream = m, e.createReadStream = function (e, t) {
            return new d(e, t)
        }, e.createWriteStream = function (e, t) {
            return new m(e, t)
        };
        var t = e.readFile;
        e.readFile = function (e, n, r) {
            "function" == typeof n && (r = n, n = null);
            return function e(n, r, i) {
                return t(n, r, (function (t) {
                    !t || "EMFILE" !== t.code && "ENFILE" !== t.code ? ("function" == typeof i && i.apply(this, arguments), p()) : h([e, [n, r, i]])
                }))
            }(e, n, r)
        };
        var n = e.writeFile;
        e.writeFile = function (e, t, r, i) {
            "function" == typeof r && (i = r, r = null);
            return function e(t, r, i, o) {
                return n(t, r, i, (function (n) {
                    !n || "EMFILE" !== n.code && "ENFILE" !== n.code ? ("function" == typeof o && o.apply(this, arguments), p()) : h([e, [t, r, i, o]])
                }))
            }(e, t, r, i)
        };
        var r = e.appendFile;
        r && (e.appendFile = function (e, t, n, i) {
            "function" == typeof n && (i = n, n = null);
            return function e(t, n, i, o) {
                return r(t, n, i, (function (r) {
                    !r || "EMFILE" !== r.code && "ENFILE" !== r.code ? ("function" == typeof o && o.apply(this, arguments), p()) : h([e, [t, n, i, o]])
                }))
            }(e, t, n, i)
        });
        var s = e.readdir;

        function a(t) {
            return s.apply(e, t)
        }

        if (e.readdir = function (e, t, n) {
            var r = [e];
            "function" != typeof t ? r.push(t) : n = t;
            return r.push((function (e, t) {
                t && t.sort && t.sort();
                !e || "EMFILE" !== e.code && "ENFILE" !== e.code ? ("function" == typeof n && n.apply(this, arguments), p()) : h([a, [r]])
            })), a(r)
        }, "v0.8" === process.version.substr(0, 4)) {
            var c = o(e);
            d = c.ReadStream, m = c.WriteStream
        }
        var u = e.ReadStream;
        d.prototype = Object.create(u.prototype), d.prototype.open = function () {
            var e = this;
            g(e.path, e.flags, e.mode, (function (t, n) {
                t ? (e.autoClose && e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n), e.read())
            }))
        };
        var l = e.WriteStream;

        function d(e, t) {
            return this instanceof d ? (u.apply(this, arguments), this) : d.apply(Object.create(d.prototype), arguments)
        }

        function m(e, t) {
            return this instanceof m ? (l.apply(this, arguments), this) : m.apply(Object.create(m.prototype), arguments)
        }

        m.prototype = Object.create(l.prototype), m.prototype.open = function () {
            var e = this;
            g(e.path, e.flags, e.mode, (function (t, n) {
                t ? (e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n))
            }))
        }, e.ReadStream = d, e.WriteStream = m;
        var y = e.open;

        function g(e, t, n, r) {
            return "function" == typeof n && (r = n, n = null), function e(t, n, r, i) {
                return y(t, n, r, (function (o, s) {
                    !o || "EMFILE" !== o.code && "ENFILE" !== o.code ? ("function" == typeof i && i.apply(this, arguments), p()) : h([e, [t, n, r, i]])
                }))
            }(e, t, n, r)
        }

        return e.open = g, e
    }

    function h(e) {
        l("ENQUEUE", e[0].name, e[1]), s.push(e)
    }

    function p() {
        var e = s.shift();
        e && (l("RETRY", e[0].name, e[1]), e[0].apply(null, e[1]))
    }

    a.debuglog ? l = a.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (l = function () {
        var e = a.format.apply(a, arguments);
        e = "GFS4: " + e.split(/\n/).join("\nGFS4: "), console.error(e)
    }), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", (function () {
        l(s), n(21).equal(s.length, 0)
    })), e.exports = f(n(46)), process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && (e.exports = f(r)), e.exports.close = r.close = (c = r.close, function (e, t) {
        return c.call(r, e, (function (e) {
            e || p(), "function" == typeof t && t.apply(this, arguments)
        }))
    }), e.exports.closeSync = r.closeSync = (u = r.closeSync, function (e) {
        var t = u.apply(r, arguments);
        return p(), t
    })
}, function (e, t, n) {
    var r = n(46), i = n(30), o = process.cwd, s = null, a = process.env.GRACEFUL_FS_PLATFORM || "win32";
    process.cwd = function () {
        return s || (s = o.call(process)), s
    };
    try {
        process.cwd()
    } catch (e) {
    }
    var c = process.chdir;

    function u(e) {
        return e ? function (t, n, i) {
            return e.call(r, t, n, (function (e) {
                m(e) && (e = null), i && i.apply(this, arguments)
            }))
        } : e
    }

    function l(e) {
        return e ? function (t, n) {
            try {
                return e.call(r, t, n)
            } catch (e) {
                if (!m(e)) throw e
            }
        } : e
    }

    function f(e) {
        return e ? function (t, n, i, o) {
            return e.call(r, t, n, i, (function (e) {
                m(e) && (e = null), o && o.apply(this, arguments)
            }))
        } : e
    }

    function h(e) {
        return e ? function (t, n, i) {
            try {
                return e.call(r, t, n, i)
            } catch (e) {
                if (!m(e)) throw e
            }
        } : e
    }

    function p(e) {
        return e ? function (t, n) {
            return e.call(r, t, (function (e, t) {
                if (!t) return n.apply(this, arguments);
                t.uid < 0 && (t.uid += 4294967296), t.gid < 0 && (t.gid += 4294967296), n && n.apply(this, arguments)
            }))
        } : e
    }

    function d(e) {
        return e ? function (t) {
            var n = e.call(r, t);
            return n.uid < 0 && (n.uid += 4294967296), n.gid < 0 && (n.gid += 4294967296), n
        } : e
    }

    function m(e) {
        return !e || ("ENOSYS" === e.code || !(process.getuid && 0 === process.getuid() || "EINVAL" !== e.code && "EPERM" !== e.code))
    }

    process.chdir = function (e) {
        s = null, c.call(process, e)
    }, e.exports = function (e) {
        i.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function (e) {
            e.lchmod = function (t, n, r) {
                e.open(t, i.O_WRONLY | i.O_SYMLINK, n, (function (t, i) {
                    t ? r && r(t) : e.fchmod(i, n, (function (t) {
                        e.close(i, (function (e) {
                            r && r(t || e)
                        }))
                    }))
                }))
            }, e.lchmodSync = function (t, n) {
                var r, o = e.openSync(t, i.O_WRONLY | i.O_SYMLINK, n), s = !0;
                try {
                    r = e.fchmodSync(o, n), s = !1
                } finally {
                    if (s) try {
                        e.closeSync(o)
                    } catch (e) {
                    } else e.closeSync(o)
                }
                return r
            }
        }(e);
        e.lutimes || function (e) {
            i.hasOwnProperty("O_SYMLINK") ? (e.lutimes = function (t, n, r, o) {
                e.open(t, i.O_SYMLINK, (function (t, i) {
                    t ? o && o(t) : e.futimes(i, n, r, (function (t) {
                        e.close(i, (function (e) {
                            o && o(t || e)
                        }))
                    }))
                }))
            }, e.lutimesSync = function (t, n, r) {
                var o, s = e.openSync(t, i.O_SYMLINK), a = !0;
                try {
                    o = e.futimesSync(s, n, r), a = !1
                } finally {
                    if (a) try {
                        e.closeSync(s)
                    } catch (e) {
                    } else e.closeSync(s)
                }
                return o
            }) : (e.lutimes = function (e, t, n, r) {
                r && process.nextTick(r)
            }, e.lutimesSync = function () {
            })
        }(e);
        e.chown = f(e.chown), e.fchown = f(e.fchown), e.lchown = f(e.lchown), e.chmod = u(e.chmod), e.fchmod = u(e.fchmod), e.lchmod = u(e.lchmod), e.chownSync = h(e.chownSync), e.fchownSync = h(e.fchownSync), e.lchownSync = h(e.lchownSync), e.chmodSync = l(e.chmodSync), e.fchmodSync = l(e.fchmodSync), e.lchmodSync = l(e.lchmodSync), e.stat = p(e.stat), e.fstat = p(e.fstat), e.lstat = p(e.lstat), e.statSync = d(e.statSync), e.fstatSync = d(e.fstatSync), e.lstatSync = d(e.lstatSync), e.lchmod || (e.lchmod = function (e, t, n) {
            n && process.nextTick(n)
        }, e.lchmodSync = function () {
        });
        e.lchown || (e.lchown = function (e, t, n, r) {
            r && process.nextTick(r)
        }, e.lchownSync = function () {
        });
        "win32" === a && (e.rename = (t = e.rename, function (n, r, i) {
            var o = Date.now(), s = 0;
            t(n, r, (function a(c) {
                if (c && ("EACCES" === c.code || "EPERM" === c.code) && Date.now() - o < 6e4) return setTimeout((function () {
                    e.stat(r, (function (e, o) {
                        e && "ENOENT" === e.code ? t(n, r, a) : i(c)
                    }))
                }), s), void (s < 100 && (s += 10));
                i && i(c)
            }))
        }));
        var t;
        e.read = (r = e.read, function (t, n, i, o, s, a) {
            var c;
            if (a && "function" == typeof a) {
                var u = 0;
                c = function (l, f, h) {
                    if (l && "EAGAIN" === l.code && u < 10) return u++, r.call(e, t, n, i, o, s, c);
                    a.apply(this, arguments)
                }
            }
            return r.call(e, t, n, i, o, s, c)
        }), e.readSync = (n = e.readSync, function (t, r, i, o, s) {
            for (var a = 0; ;) try {
                return n.call(e, t, r, i, o, s)
            } catch (e) {
                if ("EAGAIN" === e.code && a < 10) {
                    a++;
                    continue
                }
                throw e
            }
        });
        var n;
        var r
    }
}, function (e, t, n) {
    var r = n(8).Stream;
    e.exports = function (e) {
        return {
            ReadStream: function t(n, i) {
                if (!(this instanceof t)) return new t(n, i);
                r.call(this);
                var o = this;
                this.path = n, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, i = i || {};
                for (var s = Object.keys(i), a = 0, c = s.length; a < c; a++) {
                    var u = s[a];
                    this[u] = i[u]
                }
                this.encoding && this.setEncoding(this.encoding);
                if (void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");
                    if (void 0 === this.end) this.end = 1 / 0; else if ("number" != typeof this.end) throw TypeError("end must be a Number");
                    if (this.start > this.end) throw new Error("start must be <= end");
                    this.pos = this.start
                }
                if (null !== this.fd) return void process.nextTick((function () {
                    o._read()
                }));
                e.open(this.path, this.flags, this.mode, (function (e, t) {
                    if (e) return o.emit("error", e), void (o.readable = !1);
                    o.fd = t, o.emit("open", t), o._read()
                }))
            }, WriteStream: function t(n, i) {
                if (!(this instanceof t)) return new t(n, i);
                r.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, i = i || {};
                for (var o = Object.keys(i), s = 0, a = o.length; s < a; s++) {
                    var c = o[s];
                    this[c] = i[c]
                }
                if (void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");
                    if (this.start < 0) throw new Error("start must be >= zero");
                    this.pos = this.start
                }
                this.busy = !1, this._queue = [], null === this.fd && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.setValueSafe = t.setValue = t.createKeySafe = t.createKey = t.enumerateKeysSafe = t.enumerateKeys = t.enumerateValuesSafe = t.enumerateValues = t.HKEY = t.RegistryValueType = void 0;
    const r = n(129);
    var i, o;

    function s(e) {
        return e === o.HKEY_CLASSES_ROOT ? 2147483648 : e === o.HKEY_CURRENT_USER ? 2147483649 : e === o.HKEY_LOCAL_MACHINE ? 2147483650 : e === o.HKEY_USERS ? 2147483651 : e === o.HKEY_PERFORMANCE_DATA ? 2147483652 : e === o.HKEY_CURRENT_CONFIG ? 2147483653 : e === o.HKEY_DYN_DATA ? 2147483654 : e === o.HKEY_CURRENT_USER_LOCAL_SETTINGS ? 2147483655 : e === o.HKEY_PERFORMANCE_TEXT ? 2147483728 : e === o.HKEY_PERFORMANCE_NLSTEXT ? 2147483744 : function (e, t) {
            throw new Error(t)
        }(0, "The key does not map to an expected number value")
    }

    function a(e, t) {
        if (!r) return [];
        const n = s(e);
        return r.readValues(n, t)
    }

    function c(e, t) {
        if (!r) return [];
        const n = s(e);
        return r.enumKeys(n, t)
    }

    function u(e, t) {
        if (!r) return !1;
        const n = s(e);
        return r.createKey(n, t)
    }

    function l(e, t, n, o, a) {
        if (!r) return !1;
        if (o != i.REG_SZ && o != i.REG_DWORD) return !1;
        const c = s(e);
        return r.setValue(c, t, n, o, a)
    }

    !function (e) {
        e.REG_BINARY = "REG_BINARY", e.REG_DWORD = "REG_DWORD", e.REG_DWORD_LITTLE_ENDIAN = "REG_DWORD_LITTLE_ENDIAN", e.REG_DWORD_BIG_ENDIAN = "REG_DWORD_BIG_ENDIAN", e.REG_EXPAND_SZ = "REG_EXPAND_SZ", e.REG_LINK = "REG_LINK", e.REG_MULTI_SZ = "REG_MULTI_SZ", e.REG_NONE = "REG_NONE", e.REG_QWORD = "REG_QWORD", e.REG_QWORD_LITTLE_ENDIAN = "REG_QWORD_LITTLE_ENDIAN", e.REG_SZ = "REG_SZ"
    }(i = t.RegistryValueType || (t.RegistryValueType = {})), function (e) {
        e.HKEY_CLASSES_ROOT = "HKEY_CLASSES_ROOT", e.HKEY_CURRENT_CONFIG = "HKEY_CURRENT_CONFIG", e.HKEY_DYN_DATA = "HKEY_DYN_DATA", e.HKEY_CURRENT_USER_LOCAL_SETTINGS = "HKEY_CURRENT_USER_LOCAL_SETTINGS", e.HKEY_CURRENT_USER = "HKEY_CURRENT_USER", e.HKEY_LOCAL_MACHINE = "HKEY_LOCAL_MACHINE", e.HKEY_PERFORMANCE_DATA = "HKEY_PERFORMANCE_DATA", e.HKEY_PERFORMANCE_TEXT = "HKEY_PERFORMANCE_TEXT", e.HKEY_PERFORMANCE_NLSTEXT = "HKEY_PERFORMANCE_NLSTEXT", e.HKEY_USERS = "HKEY_USERS"
    }(o = t.HKEY || (t.HKEY = {})), t.enumerateValues = a, t.enumerateValuesSafe = function (e, t) {
        try {
            return a(e, t)
        } catch (e) {
            return []
        }
    }, t.enumerateKeys = c, t.enumerateKeysSafe = function (e, t) {
        try {
            return c(e, t)
        } catch (e) {
            return []
        }
    }, t.createKey = u, t.createKeySafe = function (e, t) {
        try {
            return u(e, t)
        } catch (e) {
            return !1
        }
    }, t.setValue = l, t.setValueSafe = function (e, t, n, r, i) {
        try {
            return l(e, t, n, r, i)
        } catch (e) {
            return !1
        }
    }
}, function (e, t, n) {
    (function (e) {
        const t = n(1).join(__dirname, "registry.node");
        try {
            global.process.dlopen(e, t)
        } catch (e) {
            throw new Error("Cannot open " + t + ": " + e)
        }
    }).call(this, n(50)(e))
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.isRunningUnderARM64Translation = void 0;
    const r = n(131);
    t.isRunningUnderARM64Translation = function () {
        return null !== r ? r.isRunningUnderARM64Translation() : void 0
    }
}, function (e, t, n) {
    (function (e) {
        const t = n(1).join(__dirname, "detect-arm64-translation.node");
        try {
            global.process.dlopen(e, t)
        } catch (e) {
            throw new Error("Cannot open " + t + ": " + e)
        }
    }).call(this, n(50)(e))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(1), i = n(9), o = n(25), s = n(4);
    n(113);
    let a = null;

    function c() {
        return a || (a = new Promise((e, t) => {
            const n = Object(o.a)();
            Object(s.ensureDir)(n).then(() => {
                try {
                    const t = function (e) {
                        const t = new i.transports.DailyRotateFile({
                            filename: e,
                            handleExceptions: !1,
                            json: !1,
                            datePattern: "yyyy-MM-dd.",
                            prepend: !0,
                            level: "info",
                            maxFiles: 14
                        });
                        t.on("error", () => {
                        });
                        const n = new i.transports.Console({level: "error"});
                        return i.configure({transports: [n, t]}), i.log
                    }((o = n, r.join(o, "desktop.production.log")));
                    e(t)
                } catch (e) {
                    t(e)
                }
                var o
            }).catch(e => {
                t(e)
            })
        }), a)
    }

    async function u(e, t) {
        try {
            const n = await c();
            await new Promise((r, i) => {
                n(e, t, e => {
                    e ? i(e) : r()
                })
            })
        } catch (e) {
        }
    }

    var l = n(2), f = n(52), h = n.n(f), p = n(53), d = n.n(p);
    const m = ["renderer.js", "main.js"];

    function y(e) {
        if (!m.some(t => e.endsWith(t))) return null;
        e.startsWith("file://") && (e = h()(e));
        const t = e + ".map";
        if (!l.existsSync(t)) return null;
        try {
            const e = l.readFileSync(t, "utf8");
            return {url: r.basename(t), map: e}
        } catch (e) {
            return null
        }
    }

    const g = new WeakMap;
    let v;

    function w(e, t) {
        return g.set(e, t), e + t.map(e => "\n    at " + e).join("")
    }

    function b(e) {
        return {name: e.name, message: e.message, stack: _(e)}
    }

    function _(e) {
        let t = g.get(e);
        return t || ((e.stack || "").toString(), t = g.get(e)), t ? v(e, t) : e.stack
    }

    function S(e, t) {
        return (e = b(e)).stack ? t ? `${t}\n${e.stack}` : e.stack.trim() : t ? `${t}\n${e.name}: ${e.message}` : `${e.name}: ${e.message}`
    }

    function E(e, t) {
        return t ? S(t, e) : e
    }

    global.log = {
        error(e, t) {
            u("error", "[main] " + E(e, t))
        }, warn(e, t) {
            u("warn", "[main] " + E(e, t))
        }, info(e, t) {
            u("info", "[main] " + E(e, t))
        }, debug(e, t) {
            u("debug", "[main] " + E(e, t))
        }
    };
    var O = n(0), x = n(26), C = n(27), k = n(54), L = n.n(k);

    function T(e) {
        e.on("enter-full-screen", () => R(e, "full-screen")), e.on("leave-full-screen", () => R(e, "normal")), e.on("maximize", () => R(e, "maximized")), e.on("minimize", () => R(e, "minimized")), e.on("unmaximize", () => R(e, "normal")), e.on("restore", () => R(e, "normal")), e.on("hide", () => R(e, "hidden")), e.on("show", () => {
            R(e, function (e) {
                return e.isFullScreen() ? "full-screen" : e.isMaximized() ? "maximized" : e.isMinimized() ? "minimized" : e.isVisible() ? "normal" : "hidden"
            }(e))
        })
    }

    function R(e, t) {
        e.webContents.send("window-state-changed", t)
    }

    function M(e) {
        throw new Error(e)
    }

    function N(e) {
        const t = e.id;
        if (!t) throw new Error("menuItem must specify id: " + e.label);
        const n = e.enabled, r = e.visible, i = e.label, o = e.checked, s = function (e) {
            if (e.accelerator) return e.accelerator;
            if (e.role) {
                const t = e.getDefaultRoleAccelerator;
                if ("function" == typeof t) try {
                    const n = t.call(e);
                    if ("string" == typeof n) return n
                } catch (e) {
                    console.error("Could not retrieve default accelerator", e)
                }
            }
            return null
        }(e), a = function (e) {
            const t = e.match(/&([^&])/);
            return t ? t[1] : null
        }(e.label), c = function (e) {
            switch (e) {
                case"normal":
                case"separator":
                case"submenu":
                case"checkbox":
                case"radio":
                    return e;
                default:
                    throw new Error(`Unable to parse string ${e} to a valid menu item type`)
            }
        }(e.type);
        switch (c) {
            case"normal":
                return {id: t, type: "menuItem", label: i, enabled: n, visible: r, accelerator: s, accessKey: a};
            case"separator":
                return {id: t, type: "separator", visible: r};
            case"submenu":
                return {
                    id: t,
                    type: "submenuItem",
                    label: i,
                    enabled: n,
                    visible: r,
                    menu: A(e.submenu, t),
                    accessKey: a
                };
            case"checkbox":
                return {
                    id: t,
                    type: "checkbox",
                    label: i,
                    enabled: n,
                    visible: r,
                    accelerator: s,
                    checked: o,
                    accessKey: a
                };
            case"radio":
                return {
                    id: t,
                    type: "radio",
                    label: i,
                    enabled: n,
                    visible: r,
                    accelerator: s,
                    checked: o,
                    accessKey: a
                };
            default:
                return function (e, t) {
                    throw new Error(t)
                }(0, "Unknown menu item type " + c)
        }
    }

    function A(e, t) {
        return {id: t, type: "menu", items: e.items.map(N)}
    }

    function F() {
        const e = process.hrtime();
        return 1e3 * e[0] + e[1] / 1e6
    }

    var j = n(55), P = n.n(j);

    class D {
        constructor() {
            this.emitter = new C.Emitter, this._loadTime = null, this._rendererReadyTime = null, this.minWidth = 960, this.minHeight = 660, this.shouldMaximizeOnShow = !1;
            const e = P()({defaultWidth: this.minWidth, defaultHeight: this.minHeight, maximize: !1}), t = {
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height,
                minWidth: this.minWidth,
                minHeight: this.minHeight,
                show: !1,
                backgroundColor: "#fff",
                webPreferences: {
                    disableBlinkFeatures: "Auxclick",
                    nodeIntegration: !0,
                    enableRemoteModule: !0,
                    spellcheck: !0
                },
                acceptFirstMouse: !0,
                frame: !1
            };
            this.window = new O.BrowserWindow(t), e.manage(this.window), this.shouldMaximizeOnShow = e.isMaximized;
            let n = !1;
            O.app.on("before-quit", () => {
                n = !0
            }), O.ipcMain.on("will-quit", e => {
                n = !0, e.returnValue = !0
            }), this.window.once("ready-to-show", () => {
                this.window.on("unmaximize", () => {
                    setTimeout(() => {
                        const e = this.window.getBounds();
                        e.width += 1, this.window.setBounds(e), e.width -= 1, this.window.setBounds(e)
                    }, 5)
                })
            })
        }

        load() {
            let e = 0;
            this.window.webContents.once("did-start-loading", () => {
                this._rendererReadyTime = null, this._loadTime = null, e = F()
            }), this.window.webContents.once("did-finish-load", () => {
                this._loadTime = F() - e, this.maybeEmitDidLoad()
            }), this.window.webContents.on("did-finish-load", () => {
                this.window.webContents.setVisualZoomLevelLimits(1, 1)
            }), this.window.webContents.on("did-fail-load", () => {
                this.window.webContents.openDevTools(), this.window.show()
            }), O.ipcMain.once("renderer-ready", (e, t) => {
                this._rendererReadyTime = t, this.maybeEmitDidLoad()
            }), this.window.on("focus", () => this.window.webContents.send("focus")), this.window.on("blur", () => this.window.webContents.send("blur")), T(this.window), this.window.loadURL(function (...e) {
                const t = r.resolve(...e);
                return L()(t)
            }(__dirname, "index.html"))
        }

        maybeEmitDidLoad() {
            this.rendererLoaded && this.emitter.emit("did-load", null)
        }

        get rendererLoaded() {
            return !!this.loadTime && !!this.rendererReadyTime
        }

        onClose(e) {
            this.window.on("closed", e)
        }

        onDidLoad(e) {
            return this.emitter.on("did-load", e)
        }

        isMinimized() {
            return this.window.isMinimized()
        }

        isVisible() {
            return this.window.isVisible()
        }

        restore() {
            this.window.restore()
        }

        focus() {
            this.window.focus()
        }

        show() {
            this.window.show(), this.shouldMaximizeOnShow && (this.shouldMaximizeOnShow = !1, this.window.maximize())
        }

        sendMenuEvent(e) {
            this.show(), this.window.webContents.send("menu-event", {name: e})
        }

        sendURLAction(e) {
            this.show(), this.window.webContents.send("url-action", {action: e})
        }

        sendLaunchTimingStats(e) {
            this.window.webContents.send("launch-timing-stats", {stats: e})
        }

        sendAppMenu() {
            const e = O.Menu.getApplicationMenu();
            if (e) {
                const t = A(e);
                this.window.webContents.send("app-menu", {menu: t})
            }
        }

        sendCertificateError(e, t, n) {
            this.window.webContents.send("certificate-error", {certificate: e, error: t, url: n})
        }

        showCertificateTrustDialog(e, t) {
            O.dialog.showCertificateTrustDialog(this.window, {certificate: e, message: t}, () => {
            })
        }

        sendException(e) {
            const t = {stack: e.stack, message: e.message, name: e.name};
            this.window.webContents.send("main-process-exception", t)
        }

        get loadTime() {
            return this._loadTime
        }

        get rendererReadyTime() {
            return this._rendererReadyTime
        }

        destroy() {
            this.window.destroy()
        }
    }

    var I = n(13), z = n(28), U = n(10);
    new Set(["LOCAL_GIT_DIRECTORY"]);
    const G = /[\x00-\x20\x7F~^:?*\[\\|""<>]+|@{|\.\.+|^\.|\.$|\.lock$|\/$/g;

    function B(e, t) {
        const n = e[t];
        return null == n ? null : Array.isArray(n) ? n[0] : n
    }

    function H(e) {
        const t = x.parse(e, !0), n = t.hostname, r = {name: "unknown", url: e};
        if (!n) return r;
        const i = t.query, o = n.toLowerCase();
        if ("oauth" === o) {
            const e = B(i, "code"), t = B(i, "state");
            return null != e && null != t ? {name: "oauth", code: e, state: t} : r
        }
        const s = t.pathname;
        if (!s || s.length <= 1) return r;
        const a = s.substr(1);
        if ("openrepo" === o) {
            const e = B(i, "pr"), t = B(i, "branch"), n = B(i, "filepath");
            if (null != e) {
                if (!/^\d+$/.test(e)) return r;
                if (null != t && !/^pr\/\d+$/.test(t)) return r
            }
            return null != t && (c = t, G.test(c)) ? r : {
                name: "open-repository-from-url",
                url: a,
                branch: t,
                pr: e,
                filepath: n
            }
        }
        var c;
        return "openlocalrepo" === o ? {name: "open-repository-from-path", path: decodeURIComponent(a)} : r
    }

    var q = n(19);

    function $() {
        for (const t of Object(q.enumerateValues)(q.HKEY.HKEY_CURRENT_USER, "Environment")) if ("Path" === t.name && ((e = t).type === q.RegistryValueType.REG_SZ || e.type === q.RegistryValueType.REG_EXPAND_SZ)) return t.data.split(";").filter(e => e.length > 0);
        var e;
        throw new Error("Could not find PATH environment variable")
    }

    async function W(e) {
        let t;
        const n = process.env.SystemRoot;
        if (n) {
            const e = r.join(n, "System32");
            t = r.join(e, "setx.exe")
        } else t = "setx.exe";
        await Y(t, ["Path", e.join(";")])
    }

    function Y(e, t) {
        try {
            const n = Object(z.spawn)(e, t);
            return new Promise((r, i) => {
                let o = "";
                n.stdout && n.stdout.on("data", e => {
                    o += e
                }), n.on("close", n => {
                    0 === n ? r(o) : i(new Error(`Command "${e} ${t}" failed: "${o}"`))
                }), n.on("error", e => {
                    i(e)
                }), n.stdin && n.stdin.end()
            })
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const K = r.resolve(process.execPath, ".."), J = r.resolve(K, ".."), V = r.resolve(r.join(J, "Update.exe")),
        X = r.basename(process.execPath);

    async function Q() {
        const e = Z();
        await Object(s.ensureDir)(e), await function (e) {
            const t = `@echo off\n"%~dp0\\${ee(e, "resources/app/static/github.bat")}" %*`, n = r.join(e, "github.bat");
            return Object(s.writeFile)(n, t)
        }(e), await function (e) {
            const t = `#!/usr/bin/env bash\n  DIR="$( cd "$( dirname "\${BASH_SOURCE[0]}" )" && pwd )"\n  sh "$DIR/${ee(e, "resources/app/static/github.sh").replace(/\\/g, "/")}" "$@"`,
                n = r.join(e, "github");
            return Object(s.writeFile)(n, t, {encoding: "utf8", mode: 755})
        }(e);
        try {
            const t = $();
            t.indexOf(e) < 0 && await W([...t, e])
        } catch (e) {
            log.error("Failed inserting bin path into PATH environment variable", e)
        }
    }

    function Z() {
        return r.resolve(process.execPath, "../../bin")
    }

    function ee(e, t) {
        const n = r.resolve(process.execPath, "..");
        return r.relative(e, r.join(n, t))
    }

    async function te(e) {
        await Y(V, e)
    }

    function ne(e) {
        return te(["--createShortcut", X, "-l", e.join(",")])
    }

    var re = n(18), ie = n(56);

    async function oe(e, t, n) {
        const r = new Map;
        if (r.set("name", e.name), r.set("message", e.message), e.stack && r.set("stack", e.stack), r.set("platform", "win32"), r.set("architecture", !0 === O.app.runningUnderRosettaTranslation || !0 === Object(ie.isRunningUnderARM64Translation)() ? "x64-emulated" : "arm64" === process.arch ? "arm64" : "x64"), r.set("sha", "4806a6dcc71b879261d696303fd049b5ec9f9917"), r.set("version", O.app.getVersion()), t) for (const e of Object.keys(t)) r.set(e, t[e]);
        const i = {
            method: "POST",
            url: n ? "https://central.github.com/api/desktop-non-fatal/exception" : "https://central.github.com/api/desktop/exception",
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }, o = [...r.entries()].map(([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(t)}`).join("&");
        try {
            await new Promise((e, t) => {
                const n = O.net.request(i);
                n.on("response", n => {
                    200 === n.statusCode ? e() : t(`Got ${n.statusCode} - ${n.statusMessage} from central`)
                }), n.on("error", t), n.end(o)
            }), log.info("Error report submitted")
        } catch (t) {
            log.error("Failed submitting error report", e)
        }
    }

    class se {
        constructor(e, t) {
            this.emitter = new C.Emitter, this.hasFinishedLoading = !1, this.hasSentReadyEvent = !1;
            const n = {
                width: 600,
                height: 500,
                minWidth: 600,
                minHeight: 500,
                show: !1,
                backgroundColor: "#fff",
                webPreferences: {
                    disableBlinkFeatures: "Auxclick",
                    nodeIntegration: !0,
                    spellcheck: !1,
                    enableRemoteModule: !0
                },
                frame: !1
            };
            this.window = new O.BrowserWindow(n), this.error = t, this.errorType = e
        }

        load() {
            log.debug("Starting crash process"), this.window.webContents.once("did-start-loading", () => {
                log.debug("Crash process in startup")
            }), this.window.webContents.once("did-finish-load", () => {
                log.debug("Crash process started"), this.hasFinishedLoading = !0, this.maybeEmitDidLoad()
            }), this.window.webContents.on("did-finish-load", () => {
                this.window.webContents.setVisualZoomLevelLimits(1, 1)
            }), this.window.webContents.on("did-fail-load", () => {
                log.error("Crash process failed to load"), this.emitter.emit("did-fail-load", null)
            }), O.ipcMain.on("crash-ready", e => {
                log.debug("Crash process is ready"), this.hasSentReadyEvent = !0, this.sendError(), this.maybeEmitDidLoad()
            }), O.ipcMain.on("crash-quit", e => {
                log.debug("Got quit signal from crash process"), this.window.close()
            }), T(this.window), this.window.loadURL(`file://${__dirname}/crash.html`)
        }

        maybeEmitDidLoad() {
            this.hasFinishedLoading && this.hasSentReadyEvent && this.emitter.emit("did-load", null)
        }

        onClose(e) {
            this.window.on("closed", e)
        }

        onFailedToLoad(e) {
            this.emitter.on("did-fail-load", e)
        }

        onDidLoad(e) {
            return this.emitter.on("did-load", e)
        }

        focus() {
            this.window.focus()
        }

        show() {
            log.debug("Showing crash process window"), this.window.show()
        }

        sendError() {
            const e = {stack: this.error.stack, message: this.error.message, name: this.error.name},
                t = {type: this.errorType, error: e};
            this.window.webContents.send("error", t)
        }

        destroy() {
            this.window.destroy()
        }
    }

    let ae = !1;

    function ce(e, t) {
        return (e ? e.toLowerCase() : e) === (t ? t.toLowerCase() : t)
    }

    function ue() {
        const e = O.Menu.buildFromTemplate([{role: "editMenu"}]).items[0];
        return (e && e.submenu ? e.submenu.items : []).filter(e => !ce(e.role, "pasteandmatchstyle"))
    }

    function le(e, t) {
        return function e(t, n, r = []) {
            const i = new O.Menu;
            for (const [o, s] of t.entries()) if (ce(s.role, "editmenu")) for (const e of ue()) i.append(e); else {
                const t = [...r, o];
                i.append(new O.MenuItem({
                    label: s.label,
                    type: s.type,
                    enabled: s.enabled,
                    role: s.role,
                    click: () => n(t),
                    submenu: s.submenu ? e(s.submenu, n, t) : void 0
                }))
            }
            return i
        }(e, t)
    }

    n(57);
    O.app.setAppLogsPath(), function () {
        d.a.install({environment: "node", handleUncaughtExceptions: !1, retrieveSourceMap: y});
        const e = Error;
        v = e.prepareStackTrace, e.prepareStackTrace = w
    }();
    let fe = null;
    const he = F();
    let pe = !1, de = null, me = [];

    function ye(e) {
        pe = !0;
        const t = null === fe;
        fe && (fe.destroy(), fe = null), function (e, t) {
            if (log.error(S(t)), ae) return;
            ae = !0, Object(I.setCrashMenu)();
            const n = new se(e ? "launch" : "generic", t);
            n.onDidLoad(() => {
                n.show()
            }), n.onFailedToLoad(async () => {
                await O.dialog.showMessageBox({
                    type: "error",
                    title: "Unrecoverable error",
                    message: "GitHub Desktop has encountered an unrecoverable error and will need to restart.\n\nThis has been reported to the team, but if you encounter this repeatedly please report this issue to the GitHub Desktop issue tracker.\n\n" + (t.stack || t.message)
                }), O.app.relaunch(), O.app.quit()
            }), n.onClose(() => {
                O.app.relaunch(), O.app.quit()
            }), n.load()
        }(t, e)
    }

    function ge() {
        return {uptime: ((F() - he) / 1e3).toFixed(3), time: (new Date).toString()}
    }

    const ve = new Set(["x-github-client"]);
    ve.add("x-github-desktop-auth"), ve.add("github-windows"), O.app.on("window-all-closed", () => {
    }), process.on("uncaughtException", e => {
        oe(e = b(e), ge()), ye(e)
    });
    let we = !1;
    if (process.argv.length > 1) {
        const e = process.argv[1], t = function (e) {
            switch (e) {
                case"--squirrel-install":
                    return async function () {
                        await ne(["StartMenu", "Desktop"]), await Q()
                    }();
                case"--squirrel-updated":
                    return async function () {
                        await async function () {
                            const e = U.homedir();
                            if (e) {
                                const t = r.join(e, "Desktop", "GitHub Desktop.lnk"), n = await Object(s.pathExists)(t);
                                return ne(n ? ["StartMenu", "Desktop"] : ["StartMenu"])
                            }
                            return ne(["StartMenu", "Desktop"])
                        }(), await Q()
                    }();
                case"--squirrel-uninstall":
                    return async function () {
                        await te(["--removeShortcut", X]);
                        try {
                            const e = $(), t = Z();
                            return W(e.filter(e => e !== t))
                        } catch (e) {
                            log.error("Failed removing bin path from PATH environment variable", e)
                        }
                    }();
                case"--squirrel-obsolete":
                    return Promise.resolve()
            }
            return null
        }(e);
        t ? (we = !0, t.catch(t => {
            log.error("Failed handling Squirrel event: " + e, t)
        }).then(() => {
            O.app.quit()
        })) : Se(process.argv)
    }

    function be(e) {
        log.info("Processing protocol url");
        const t = H(e);
        Ee(e => {
            e.focus(), e.sendURLAction(t)
        })
    }

    let _e = !1;
    if (!we) {
        const e = O.app.requestSingleInstanceLock();
        _e = !e, O.app.on("second-instance", (e, t, n) => {
            fe && (fe.isMinimized() && fe.restore(), fe.isVisible() || fe.show(), fe.focus()), Se(t)
        }), _e && O.app.quit()
    }

    function Se(e) {
        log.info("Received possible protocol arguments: " + e.length);
        {
            const t = e.filter(e => {
                try {
                    const t = x.parse(e);
                    return t.protocol && ve.has(t.protocol.slice(0, -1))
                } catch (t) {
                    return log.error("Unable to parse argument as URL: " + e), !1
                }
            });
            e.includes("--protocol-launcher") && 1 === t.length ? be(t[0]) : log.error("Malformed launch arguments received: " + e)
        }
    }

    function Ee(e) {
        me ? me.push(e) : fe && e(fe)
    }

    process, O.app.on("will-finish-launching", () => {
        O.app.on("open-url", (e, t) => {
            e.preventDefault(), be(t)
        })
    }), process.env.GITHUB_DESKTOP_DISABLE_HARDWARE_ACCELERATION && (log.info("GITHUB_DESKTOP_DISABLE_HARDWARE_ACCELERATION environment variable set, disabling hardware acceleration"), O.app.disableHardwareAcceleration()), O.app.on("ready", () => {
        _e || we || (de = F() - he, ve.forEach(e => function (e) {
            O.app.setAsDefaultProtocolClient(e, process.execPath, ["--protocol-launcher"])
        }(e)), function () {
            const e = new D;
            0;
            e.onClose(() => {
                fe = null, pe || O.app.quit()
            }), e.onDidLoad(() => {
                e.show(), e.sendLaunchTimingStats({
                    mainReadyTime: de,
                    loadTime: e.loadTime,
                    rendererReadyTime: e.rendererReadyTime
                });
                const t = me;
                me = null;
                for (const n of t) n(e)
            }), e.load(), fe = e
        }(), O.Menu.setApplicationMenu(Object(I.buildDefaultMenu)({
            selectedShell: null,
            selectedExternalEditor: null,
            askForConfirmationOnRepositoryRemoval: !1,
            askForConfirmationOnForcePush: !1
        })), O.ipcMain.on("update-preferred-app-menu-item-labels", (e, t) => {
            const n = Object(I.buildDefaultMenu)(t), r = O.Menu.getApplicationMenu();
            if (null === r) return O.Menu.setApplicationMenu(n), void (null !== fe && fe.sendAppMenu());
            let i = !1;
            for (const e of Object(I.getAllMenuItems)(n)) {
                const t = e.id;
                if (!t) continue;
                const n = r.getMenuItemById(t);
                n ? (n.label !== e.label && (i = !0), n.enabled !== e.enabled && (e.enabled = n.enabled, i = !0)) : i = !0
            }
            i && fe && (O.Menu.setApplicationMenu(n), fe.sendAppMenu())
        }), O.ipcMain.on("menu-event", (e, t) => {
            const {name: n} = e;
            fe && fe.sendMenuEvent(n)
        }), O.ipcMain.on("execute-menu-item", (e, {id: t}) => {
            const n = O.Menu.getApplicationMenu();
            if (null === n) return;
            const r = n.getMenuItemById(t);
            if (r) {
                const t = O.BrowserWindow.fromWebContents(e.sender) || void 0, n = {
                    preventDefault: () => {
                    }, sender: e.sender
                };
                r.click(n, t, e.sender)
            }
        }), O.ipcMain.on("update-menu-state", (e, t) => {
            let n = !1;
            const r = O.Menu.getApplicationMenu();
            if (null !== r) {
                for (const e of t) {
                    const {id: t, state: i} = e, o = r.getMenuItemById(t);
                    o ? void 0 !== i.enabled && o.enabled !== i.enabled && (o.enabled = i.enabled, n = !0) : M("Unknown menu id: " + t)
                }
                n && fe && (O.Menu.setApplicationMenu(r), fe.sendAppMenu())
            } else log.debug("unable to get current menu, bailing out...")
        }), O.ipcMain.handle("show-contextual-menu", (e, t) => new Promise(n => {
            const r = le(t, e => n(e)), i = O.BrowserWindow.fromWebContents(e.sender) || void 0;
            r.popup({window: i, callback: () => n(null)})
        })), O.ipcMain.on("get-app-menu", () => {
            fe && fe.sendAppMenu()
        }), O.ipcMain.on("show-certificate-trust-dialog", (e, {certificate: t, message: n}) => {
            Ee(e => {
                e.showCertificateTrustDialog(t, n)
            })
        }), O.ipcMain.on("log", (e, t, n) => {
            u(t, n)
        }), O.ipcMain.on("uncaught-exception", (e, t) => {
            ye(t)
        }), O.ipcMain.on("send-error-report", (e, {error: t, extra: n, nonFatal: r}) => {
            oe(t, Object.assign(Object.assign({}, ge()), n), r)
        }), O.ipcMain.on("open-external", async (e, {path: t}) => {
            const n = t.toLowerCase();
            let r;
            (n.startsWith("http://") || n.startsWith("https://")) && log.info("opening in browser: " + t);
            try {
                await O.shell.openExternal(t), r = !0
            } catch (e) {
                log.error(`Call to openExternal failed: '${e}'`), r = !1
            }
            e.sender.send("open-external-result", {result: r})
        }), O.ipcMain.on("show-item-in-folder", (e, {path: t}) => {
            l.stat(t, e => {
                e ? log.error(`Unable to find file at '${t}'`, e) : O.shell.showItemInFolder(t)
            })
        }), O.ipcMain.on("show-folder-contents", async (e, {path: t}) => {
            const n = await Object(s.stat)(t).catch(e => (log.error("Unable to retrieve file information for " + t, e), null));
            if (n) return n.isDirectory() ? void Object(re.a)(t) : (log.error(`Trying to get the folder contents of a non-folder at '${t}'`), void O.shell.showItemInFolder(t))
        }))
    }), O.app.on("activate", () => {
        Ee(e => {
            e.show()
        })
    }), O.app.on("web-contents-created", (e, t) => {
        t.on("new-window", (e, t) => {
            e.preventDefault(), log.warn("Prevented new window to: " + t)
        }), t.on("will-navigate", (e, t) => {
            e.preventDefault(), log.warn("Prevented navigation to: " + t)
        })
    }), O.app.on("certificate-error", (e, t, n, r, i, o) => {
        o(!1), Ee(e => {
            e.sendCertificateError(i, r, n)
        })
    })
}]);
//# sourceMappingURL=main.js.map